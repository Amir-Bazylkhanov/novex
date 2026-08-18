import { supabase } from './supabaseClient.ts';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';

// The edge function accepts all five models. Per-message Novas costs and
// the default live in components/chat/TutorChat.tsx (NOVA_COST).
export type TutorModel =
  | 'claude-sonnet-5'
  | 'claude-opus-5'
  | 'gpt-5.6-luna'
  | 'gpt-5.6-terra'
  | 'gpt-5.6-sol';

const ERR_NOT_SIGNED_IN: Localized = {
  ru: 'Чтобы общаться с Наставником, войдите в аккаунт.',
  kk: 'Тәлімгермен сөйлесу үшін аккаунтыңызға кіріңіз.',
  en: 'Sign in to chat with the Tutor.',
};

const ERR_NETWORK: Localized = {
  ru: 'Нет соединения с сервером. Проверьте интернет и попробуйте снова.',
  kk: 'Сервермен байланыс жоқ. Интернетті тексеріп, қайта көріңіз.',
  en: 'Cannot reach the server. Check your connection and try again.',
};

const ERR_RATE_LIMITED: Localized = {
  ru: 'Слишком много запросов подряд. Подождите немного и попробуйте снова.',
  kk: 'Сұраныстар тым жиі. Біраз күтіп, қайта көріңіз.',
  en: 'Too many requests in a row. Wait a moment and try again.',
};

const ERR_GENERIC: Localized = {
  ru: 'Наставник сейчас недоступен. Попробуйте ещё раз чуть позже.',
  kk: 'Тәлімгер қазір қолжетімсіз. Сәл кейінірек қайта көріңіз.',
  en: 'The Tutor is unavailable right now. Please try again in a moment.',
};

/** Active UI language, read the same way LanguageContext initializes it. */
function activeLang(): Lang {
  try {
    const stored = window.localStorage.getItem('novex.lang');
    if (stored === 'ru' || stored === 'kk' || stored === 'en') return stored;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 'ru';
}

export async function askTutor(args: {
  model: TutorModel;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  system?: string;
}): Promise<{ text: string | null; error: string | null }> {
  const lang = activeLang();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return { text: null, error: loc(lang, ERR_NOT_SIGNED_IN) };

  try {
    // supabase.functions.invoke attaches the user's JWT automatically.
    const { data, error } = await supabase.functions.invoke('ai-chat', {
      body: { model: args.model, messages: args.messages, system: args.system },
    });
    if (error) {
      const message = (error.message ?? '').toLowerCase();
      if (message.includes('failed to fetch') || message.includes('network')) {
        return { text: null, error: loc(lang, ERR_NETWORK) };
      }
      if (message.includes('429')) {
        return { text: null, error: loc(lang, ERR_RATE_LIMITED) };
      }
      return { text: null, error: loc(lang, ERR_GENERIC) };
    }
    const text = typeof data?.text === 'string' ? data.text : null;
    if (!text) return { text: null, error: loc(lang, ERR_GENERIC) };
    return { text, error: null };
  } catch {
    return { text: null, error: loc(lang, ERR_NETWORK) };
  }
}
