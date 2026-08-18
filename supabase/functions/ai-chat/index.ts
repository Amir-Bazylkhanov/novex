// ai-chat — NOVEX edge function for the NOV-02 tutor chat.
//
// browser -> this function (validates the NOVEX user JWT)
//         -> Locus 'novex-ai' (validates the shared secret, holds the keys)
//         -> Anthropic / OpenAI
// The shared secret never reaches the browser.

const ALLOWED_MODELS = ['claude-sonnet-5', 'claude-opus-5', 'gpt-5.6-terra'] as const;

const ALLOWED_ORIGINS = [
  'https://novex-edu.vercel.app',
  'http://localhost:3000',
];

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 4000;

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : null;
  return {
    ...(allowed ? { 'Access-Control-Allow-Origin': allowed } : {}),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Vary': 'Origin',
  };
}

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

  const locusUrl = Deno.env.get('LOCUS_AI_URL');
  const sharedSecret = Deno.env.get('NOVEX_SHARED_SECRET');
  if (!locusUrl || !sharedSecret) {
    return json(502, { error: 'upstream not configured' }, cors);
  }

  try {
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
