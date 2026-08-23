// ============================================================================
// NOVEX · серверная функция «dispatch-notification-push» (рассылка уведомлений).
// Когда в базе данных появляется новое уведомление (например, «вышел новый
// урок»), база автоматически вызывает эту функцию. Она рассылает уведомление
// на все устройства пользователя (push в браузер) и, для важных событий,
// дополнительно отправляет письмо на e-mail. Сама отправка идёт через
// внешний релей уведомлений (novex-notify), поэтому ключи почтовых и push-сервисов здесь не хранятся.
// ============================================================================
//
// dispatch-notification-push — NOVEX edge function.
//
// Fan-out point for web push + email. An AFTER INSERT trigger on
// public.notifications POSTs { notification_id } here with the
// x-notify-secret header. The secret is NOT an env var — it lives only
// in private.app_secrets (key 'push_dispatch_secret') and is read via the
// service-role-only RPC get_push_dispatch_secret() on every call, then
// compared constant-time.
//
// Push + email are relayed through an external notify relay (novex-notify)
// (LOCUS_NOTIFY_URL, x-novex-secret auth) — the same shared-secret
// pattern as ai-chat, so no provider keys live here.
//
// Env:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY — auto-set by the platform
//   LOCUS_NOTIFY_URL, NOVEX_SHARED_SECRET   — set via `supabase secrets set`

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

// Настройки подключения: адрес базы, служебный ключ Supabase, адрес внешнего
// релея уведомлений и общий секрет. Всё это задаётся на сервере и не видно в браузере.
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const RELAY_URL = Deno.env.get('LOCUS_NOTIFY_URL') ?? '';
const RELAY_SECRET = Deno.env.get('NOVEX_SHARED_SECRET') ?? '';

const APP_ORIGIN = 'https://novex-edu.vercel.app';

// Kinds that also get an email on top of the push. Extend as needed.
// По-русски: какие типы уведомлений помимо push дублируются письмом на e-mail
// (сейчас — «новый модуль» и «новый урок»).
const EMAIL_KINDS: readonly string[] = ['new_module', 'new_lesson'];

// Ниже описаны «формы» данных, с которыми работает функция:
// строчка уведомления из базы и подписка на push одного устройства.
interface NotificationRow {
  id: string;
  user_id: string;
  kind: string;
  title: string;
  payload: Record<string, unknown> | null;
  action_url: string | null;
}

interface PushSubRow {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
}

type EmailResult = 'sent' | 'skipped' | 'failed';

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Сравнение двух секретов «в лоб», символ за символом, без раннего выхода.
// Так сравнение занимает одинаковое время при любом вводе, и по скорости
// ответа нельзя угадать правильный секрет.
function safeEq(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Защита от подмены: заменяет спецсимволы (<, >, кавычки) на безопасные
// обозначения, чтобы текст уведомления не сломал вёрстку письма.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Notification kinds email out only for allowlisted events; the body line
// is built from the payload (module or lesson title + subject) when present.
function bodyLineFromPayload(payload: Record<string, unknown> | null): string | null {
  if (!payload) return null;
  const parts: string[] = [];
  if (typeof payload.module_title === 'string' && payload.module_title) {
    parts.push(payload.module_title);
  } else if (typeof payload.title === 'string' && payload.title) {
    parts.push(payload.title);
  }
  if (typeof payload.subject === 'string' && payload.subject) {
    parts.push(payload.subject);
  }
  return parts.length > 0 ? parts.join(' — ') : null;
}

// Собирает HTML-код письма: заголовок, поясняющая строка и кнопка
// «Открыть урок», ведущая на сайт Novex.
function buildEmailHtml(title: string, bodyLine: string | null): string {
  const safeTitle = escapeHtml(title);
  const safeBody = bodyLine ? escapeHtml(bodyLine) : null;
  return [
    '<!doctype html>',
    '<html lang="ru"><body style="margin:0;padding:0;background-color:#ffffff;">',
    '<div style="max-width:560px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#111A2A;">',
    '<div style="height:6px;background-color:#219FA2;"></div>',
    '<div style="padding:32px 28px;">',
    `<h1 style="margin:0 0 12px;font-size:20px;line-height:1.4;color:#111A2A;">${safeTitle}</h1>`,
    safeBody
      ? `<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#69758B;">${safeBody}</p>`
      : '',
    `<a href="${APP_ORIGIN}/learn" style="display:inline-block;padding:12px 24px;background-color:#219FA2;color:#ffffff;text-decoration:none;border-radius:8px;font-size:15px;">Открыть урок</a>`,
    '</div>',
    '<div style="padding:16px 28px;border-top:1px solid #B1B9C5;">',
    '<p style="margin:0;font-size:12px;color:#69758B;">Novex — AI-платформа персонализированного образования</p>',
    '</div>',
    '</div>',
    '</body></html>',
  ].join('');
}

// Отправляет сообщение во внешний релей уведомлений (push или e-mail) с общим секретом
// и возвращает ответ. Вся реальная отправка происходит там.
async function relay(message: Record<string, unknown>): Promise<Record<string, unknown>> {
  const res = await fetch(RELAY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-novex-secret': RELAY_SECRET,
    },
    body: JSON.stringify(message),
  });
  return await res.json().catch(() => ({}));
}

// Главная часть: обработчик вызова от базы данных. Порядок действий:
// проверить секрет -> найти уведомление в базе -> разослать push на все
// устройства пользователя -> при необходимости отправить письмо -> отчитаться.
Deno.serve(async (req: Request) => {
  try {
    if (req.method !== 'POST') return json(405, { error: 'method not allowed' });

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !RELAY_URL || !RELAY_SECRET) {
      console.error('dispatch-notification-push: missing required env vars');
      return json(500, { error: 'not configured' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // The dispatch secret lives only in the DB; the RPC is service-role-only.
    const { data: secretData, error: secretErr } = await supabase.rpc('get_push_dispatch_secret');

    if (secretErr) {
      console.error('dispatch-notification-push: secret fetch failed', secretErr);
      return json(500, { error: 'secret lookup failed' });
    }

    const provided = req.headers.get('x-notify-secret') ?? '';
    const expected = typeof secretData === 'string' ? secretData : '';
    if (!expected || !safeEq(provided, expected)) {
      return json(401, { error: 'unauthorized' });
    }

    let reqBody: { notification_id?: unknown };
    try {
      reqBody = await req.json();
    } catch {
      return json(400, { error: 'invalid json' });
    }

    const notificationId = reqBody?.notification_id;
    if (typeof notificationId !== 'string' || !notificationId) {
      return json(400, { error: 'missing notification_id' });
    }

    const { data: notif, error: notifErr } = await supabase
      .from('notifications')
      .select('id, user_id, kind, title, payload, action_url')
      .eq('id', notificationId)
      .maybeSingle();

    if (notifErr) {
      console.error('dispatch-notification-push: notification fetch failed', notifErr);
      return json(500, { error: 'fetch_notification_failed' });
    }
    if (!notif) {
      return json(404, { error: 'notification_not_found' });
    }

    const notification = notif as NotificationRow;

    // --- PUSH: one relay call per device; a dead device never stops the rest.
    // По-русски: рассылаем push по очереди на каждое устройство пользователя.
    // Если какое-то устройство «умерло» (подписка устарела) — это не мешает
    // остальным, а устаревшую подписку мы потом удалим из базы.
    const push = { sent: 0, expired: 0, failed: 0 };

    const { data: subs, error: subsErr } = await supabase
      .from('push_subscriptions')
      .select('id, endpoint, p256dh, auth')
      .eq('user_id', notification.user_id);

    if (subsErr) {
      console.error('dispatch-notification-push: subs fetch failed', subsErr);
    } else {
      const expiredIds: string[] = [];

      for (const sub of (subs ?? []) as PushSubRow[]) {
        try {
          const result = await relay({
            channel: 'push',
            subscription: {
              endpoint: sub.endpoint,
              keys: { p256dh: sub.p256dh, auth: sub.auth },
            },
            payload: {
              title: notification.title,
              body: null,
              url: notification.action_url ?? '/dashboard',
              tag: notification.kind,
            },
          });

          if (result?.expired === true) {
            push.expired++;
            expiredIds.push(sub.id);
          } else if (result?.error) {
            push.failed++;
            console.error('dispatch-notification-push: push failed', result.error);
          } else {
            push.sent++;
          }
        } catch (err) {
          push.failed++;
          console.error(
            'dispatch-notification-push: relay unreachable',
            err instanceof Error ? err.message : String(err),
          );
        }
      }

      if (expiredIds.length > 0) {
        const { error: delErr } = await supabase
          .from('push_subscriptions')
          .delete()
          .in('id', expiredIds);
        if (delErr) {
          console.error('dispatch-notification-push: failed to clean expired subs', delErr);
        }
      }
    }

    // --- EMAIL: allowlisted kinds only, best-effort.
    // По-русски: письмо на e-mail отправляем только для важных типов
    // уведомлений (список EMAIL_KINDS выше) и не прерываем работу,
    // если с почтой что-то пошло не так.
    let email: EmailResult = 'skipped';

    if (EMAIL_KINDS.includes(notification.kind)) {
      try {
        const { data: userData, error: userErr } = await supabase.auth.admin.getUserById(
          notification.user_id,
        );
        const address = userData?.user?.email;

        if (userErr || !address) {
          email = 'failed';
          console.error('dispatch-notification-push: email lookup failed', userErr);
        } else {
          const html = buildEmailHtml(
            notification.title,
            bodyLineFromPayload(notification.payload),
          );
          const result = await relay({
            channel: 'email',
            to: address,
            subject: notification.title,
            html,
          });
          if (result?.error) {
            email = 'failed';
            console.error('dispatch-notification-push: email failed', result.error);
          } else {
            email = 'sent';
          }
        }
      } catch (err) {
        email = 'failed';
        console.error(
          'dispatch-notification-push: email relay unreachable',
          err instanceof Error ? err.message : String(err),
        );
      }
    }

    return json(200, { ok: true, push, email }); // Итоговый отчёт: сколько push отправлено и что стало с письмом.
  } catch (err) {
    console.error(
      'dispatch-notification-push: unhandled error',
      err instanceof Error ? err.message : String(err),
    );
    return json(500, { error: 'internal error' });
  }
});
