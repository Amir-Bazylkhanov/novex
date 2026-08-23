// ============================================
// Сервис уведомлений.
// Первая часть — уведомления внутри приложения: список и отметки
// «прочитано» (сами уведомления создаёт сервер). Вторая часть —
// браузерные push-уведомления: подписка, отписка и сохранение
// подписки на сервере.
// ============================================
import { supabase } from './supabaseClient.ts';

/**
 * In-app notifications. Rows are written by DB triggers / server code; the
 * client only reads its own rows (RLS) and marks them read via auth-scoped RPCs.
 * `title` is a Russian server-side fallback — the client renders localized text
 * from `kind` + `payload` and only falls back to `title` for unknown kinds.
 */

export interface NotificationRow {
  id: string;
  user_id: string;
  kind: string;
  title: string;
  payload: Record<string, unknown>;
  action_url: string | null;
  read_at: string | null;
  created_at: string;
}

/** Latest notifications for the current user, newest first. */
export async function fetchNotifications(limit = 20): Promise<NotificationRow[]> {
  const { data, error } = await supabase
    .from('notifications')
    .select('id, user_id, kind, title, payload, action_url, read_at, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error || !data) return [];
  return data as NotificationRow[];
}

export async function markRead(id: string): Promise<void> {
  await supabase.rpc('mark_notification_read', { p_id: id });
}

export async function markAllRead(): Promise<void> {
  await supabase.rpc('mark_all_notifications_read');
}

// Web push subscriptions — the browser subscribes via /sw.js and the
// subscription is stored server-side through auth-scoped RPCs.

/** 'denied' is distinct so the UI can tell the user to unblock browser settings. */
export type EnablePushResult = 'enabled' | 'denied' | 'error';

// Переводит публичный ключ сервера (VAPID) в формат, который понимает браузер.
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Проверка: умеет ли браузер вообще показывать push-уведомления.
export function isPushSupported(): boolean {
  return 'serviceWorker' in navigator && 'PushManager' in window;
}

/** Current push subscription, or null when there is none / SW not registered. */
export async function getPushSubscription(): Promise<PushSubscription | null> {
  if (!isPushSupported()) return null;
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) return null;
  return registration.pushManager.getSubscription();
}

// Включает push-уведомления: спрашивает разрешение у пользователя,
// подписывает браузер и сохраняет подписку на сервере.
export async function enablePush(): Promise<EnablePushResult> {
  if (!isPushSupported()) return 'error';
  try {
    // Если пользователь раньше запретил уведомления в настройках браузера — сообщаем об этом.
    if (Notification.permission === 'denied') return 'denied';
    const registration = await navigator.serviceWorker.register('/sw.js');
    // Спрашиваем у пользователя разрешение показывать уведомления.
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return 'denied';
    // Публичный ключ сервера — нужен браузеру, чтобы оформить подписку.
    const vapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY as string | undefined;
    if (!vapidKey) return 'error';
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidKey),
    });
    const json = subscription.toJSON();
    const endpoint = json.endpoint;
    const p256dh = json.keys?.p256dh;
    const auth = json.keys?.auth;
    if (!endpoint || !p256dh || !auth) return 'error';
    // Сохраняем подписку на сервере, чтобы сервер мог слать уведомления на это устройство.
    const { error } = await supabase.rpc('register_push_subscription', {
      p_endpoint: endpoint,
      p_p256dh: p256dh,
      p_auth: auth,
      p_user_agent: navigator.userAgent,
    });
    if (error) {
      console.error('[notifications] register_push_subscription failed:', error);
      return 'error';
    }
    return 'enabled';
  } catch (err) {
    console.error('[notifications] enablePush failed:', err);
    return 'error';
  }
}

export async function disablePush(): Promise<void> {
  const subscription = await getPushSubscription();
  if (!subscription) return;
  const endpoint = subscription.endpoint;
  await subscription.unsubscribe();
  await supabase.rpc('delete_push_subscription', { p_endpoint: endpoint });
}
