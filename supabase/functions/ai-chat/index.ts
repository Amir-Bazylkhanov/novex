// ============================================================================
// NOVEX · серверная функция «ai-chat» (чат с ИИ-тьютором NOV-01).
// Это «посредник» между браузером ученика и ИИ-моделью: браузер присылает
// сюда переписку, функция проверяет, что пользователь вошёл в Novex,
// и передаёт диалог дальше — в сервис Locus, который хранит ключи доступа
// к ИИ (Anthropic / OpenAI). Благодаря этому секретные ключи никогда
// не попадают в браузер и не видны никому извне.
// ============================================================================
//
// ai-chat — NOVEX edge function for the NOV-01 tutor chat.
//
// browser -> this function (validates the NOVEX user JWT)
//         -> Locus 'novex-ai' (validates the shared secret, holds the keys)
//         -> Anthropic / OpenAI
// The shared secret never reaches the browser.

// Список ИИ-моделей, к которым разрешено обращаться. Любая другая модель,
// указанная в запросе, будет отклонена — защита от злоупотреблений.
const ALLOWED_MODELS = ['claude-sonnet-5', 'claude-opus-5', 'gpt-5.6-terra', 'gpt-5.6-luna', 'gpt-5.6-sol'] as const;

// Адреса сайтов, с которых разрешено обращаться к этой функции:
// боевой сайт Novex и локальный адрес для разработки.
const ALLOWED_ORIGINS = [
  'https://novex-edu.vercel.app',
  'http://localhost:3000',
];

// Ограничения на размер переписки: не больше 20 сообщений за раз
// и не больше 4000 символов в одном сообщении — чтобы не перегружать ИИ.
const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 4000;

// Формирует заголовки CORS — правила, по которым браузер разрешает сайту
// обращаться к этой функции. Чужим сайтам (не из списка выше) доступ закрыт.
function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : null;
  return {
    ...(allowed ? { 'Access-Control-Allow-Origin': allowed } : {}),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Vary': 'Origin',
  };
}

// Небольшой помощник: упаковывает ответ в формат JSON с нужным кодом статуса.
function json(
  status: number,
  body: Record<string, unknown>,
  headers: Record<string, string>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}

// Главная часть: обработчик входящих запросов. Выполняется на каждый
// запрос от браузера. Порядок: проверить метод -> проверить вход пользователя
// -> проверить модель и сообщения -> передать диалог в Locus -> вернуть ответ.
Deno.serve(async (req) => {
  const cors = corsHeaders(req.headers.get('Origin'));

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }
  if (req.method !== 'POST') {
    return json(405, { error: 'method not allowed' }, cors);
  }

  // Verify the NOVEX user's JWT against this project's auth server.
  const authHeader = req.headers.get('Authorization') ?? '';
  if (!authHeader.startsWith('Bearer ')) {
    return json(401, { error: 'unauthorized' }, cors);
  }
  try {
    const res = await fetch(`${Deno.env.get('SUPABASE_URL')}/auth/v1/user`, {
      headers: {
        'Authorization': authHeader,
        'apikey': Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      },
    });
    if (!res.ok) return json(401, { error: 'unauthorized' }, cors);
  } catch {
    return json(401, { error: 'unauthorized' }, cors);
  }

  let body: { model?: unknown; messages?: unknown; system?: unknown };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'invalid json' }, cors);
  }

  // Defence in depth: the upstream allowlist is re-checked here.
  // По-русски: модель проверяется ещё раз, уже здесь, — мало ли что пришлют.
  const model = body.model;
  if (typeof model !== 'string' || !(ALLOWED_MODELS as readonly string[]).includes(model)) {
    return json(400, { error: 'model not allowed' }, cors);
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json(400, { error: 'invalid messages' }, cors);
  }
  if (messages.some((m) => !m || typeof m.content !== 'string' || m.content.length > MAX_MESSAGE_CHARS)) {
    return json(400, { error: 'message too long' }, cors);
  }
  const trimmed = messages.slice(-MAX_MESSAGES);

  // Адрес сервиса Locus и общий секрет берутся из настроек сервера
  // (их не видно в браузере). Если что-то не настроено — честно сообщаем об ошибке.
  const locusUrl = Deno.env.get('LOCUS_AI_URL');
  const sharedSecret = Deno.env.get('NOVEX_SHARED_SECRET');
  if (!locusUrl || !sharedSecret) {
    return json(502, { error: 'upstream not configured' }, cors);
  }

  try {
    // Передаём диалог в Locus вместе с секретом, а ответ ИИ возвращаем браузеру.
    const res = await fetch(locusUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-novex-secret': sharedSecret,
      },
      body: JSON.stringify({
        model,
        messages: trimmed,
        ...(typeof body.system === 'string' && body.system ? { system: body.system } : {}),
      }),
    });
    if (!res.ok) return json(502, { error: 'AI provider unavailable' }, cors);
    const data = await res.json();
    return json(200, { text: data?.text ?? '', model: data?.model ?? model }, cors);
  } catch {
    return json(502, { error: 'AI provider unavailable' }, cors);
  }
});
