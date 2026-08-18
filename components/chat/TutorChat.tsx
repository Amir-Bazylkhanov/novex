import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import { TUTOR_QA } from '../../constants/tutorResponses.ts';
import { askTutor, type TutorModel } from '../../services/aiService.ts';

/**
 * Floating AI tutor chat widget (NOV-02 Наставник).
 *
 * Live backend: the widget calls the Novex edge function `ai-chat` via
 * `services/aiService.ts`, which relays through the Locus `novex-ai` function
 * to Anthropic / OpenAI. `constants/tutorResponses.ts` is still on disk but
 * is used here ONLY for the suggested starter-question chips.
 */

const UNIT_LABEL: Localized = {
  ru: 'NOV-02 · НАСТАВНИК',
  kk: 'NOV-02 · ТӘЛІМГЕР',
  en: 'NOV-02 · TUTOR',
};

const INTRO_TEXT: Localized = {
  ru: 'Привет! Я объясняю темы шаг за шагом — спроси про математику, физику, английский или информатику.',
  kk: 'Сәлем! Мен тақырыптарды қадамдап түсіндіремін — математика, физика, ағылшын тілі немесе информатика бойынша сұрап көр.',
  en: 'Hi! I explain topics step by step — ask me about maths, physics, English or computer science.',
};

const CHIPS_LABEL: Localized = {
  ru: 'Попробуй спросить:',
  kk: 'Мұны сұрап көр:',
  en: 'Try asking:',
};

const INPUT_PLACEHOLDER: Localized = {
  ru: 'Задай вопрос по теме…',
  kk: 'Тақырып бойынша сұрақ қой…',
  en: 'Ask a question about a topic…',
};

const TYPING_LABEL: Localized = {
  ru: 'Наставник думает…',
  kk: 'Тәлімгер ойлануда…',
  en: 'The Tutor is thinking…',
};

const ARIA_OPEN_CHAT: Localized = {
  ru: 'Открыть чат с Наставником',
  kk: 'Тәлімгермен чатты ашу',
  en: 'Open chat with the Tutor',
};

const ARIA_CLOSE_CHAT: Localized = {
  ru: 'Закрыть чат',
  kk: 'Чатты жабу',
  en: 'Close chat',
};

const ARIA_SEND: Localized = {
  ru: 'Отправить сообщение',
  kk: 'Хабарлама жіберу',
  en: 'Send message',
};

const ARIA_MESSAGES: Localized = {
  ru: 'Сообщения чата',
  kk: 'Чат хабарламалары',
  en: 'Chat messages',
};

const ARIA_PANEL: Localized = {
  ru: 'Чат с ИИ-наставником NOV-02',
  kk: 'NOV-02 ИИ-тәлімгермен чат',
  en: 'Chat with the NOV-02 AI tutor',
};

const ARIA_MODEL_SWITCHER: Localized = {
  ru: 'Выбор модели ИИ',
  kk: 'ИИ моделін таңдау',
  en: 'Choose the AI model',
};

const MODEL_HINTS: Record<TutorModel, Localized> = {
  'claude-sonnet-5': { ru: 'Быстрый', kk: 'Жылдам', en: 'Fast' },
  'claude-opus-5': {
    ru: 'Для сложных задач',
    kk: 'Күрделі тапсырмаларға',
    en: 'For hard problems',
  },
  'gpt-5.6-terra': {
    ru: 'Альтернативный взгляд',
    kk: 'Балама көзқарас',
    en: 'An alternative take',
  },
};

const SIGNIN_PROMPT: Localized = {
  ru: 'Чтобы задавать вопросы Наставнику, войди в аккаунт — это бесплатно.',
  kk: 'Тәлімгерге сұрақ қою үшін аккаунтқа кір — бұл тегін.',
  en: 'Sign in to ask the Tutor questions — it is free.',
};

const SIGNIN_CTA: Localized = {
  ru: 'Войти',
  kk: 'Кіру',
  en: 'Sign in',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/** One suggested question per lesson topic, for the empty-state chips. */
const SUGGESTED_IDS = [
  'quadratic-solve',
  'linear-slope',
  'newton-second',
  'english-present-perfect',
  'cs-algorithm-basics',
];
const SUGGESTED = TUTOR_QA.filter((qa) => SUGGESTED_IDS.includes(qa.id));

const MODEL_OPTIONS: Array<{ id: TutorModel; label: string }> = [
  { id: 'claude-sonnet-5', label: 'Sonnet' },
  { id: 'claude-opus-5', label: 'Opus' },
  { id: 'gpt-5.6-terra', label: 'ChatGPT' },
];

const MODEL_STORAGE_KEY = 'novex.tutorModel';

function loadModel(): TutorModel {
  try {
    const stored = window.localStorage.getItem(MODEL_STORAGE_KEY);
    if (MODEL_OPTIONS.some((o) => o.id === stored)) return stored as TutorModel;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 'claude-sonnet-5';
}

/** System prompt for NOV-02, telling the model which UI language to answer in. */
function buildSystemPrompt(language: Lang): string {
  const langName = language === 'ru' ? 'Russian' : language === 'kk' ? 'Kazakh' : 'English';
  return [
    'You are NOV-02 "Наставник" (Tutor), a patient AI tutor for Kazakhstani school students in grades 7–12.',
    'Explain everything step by step, in a friendly and encouraging tone, at a level a school student can follow.',
    `Always answer in ${langName} — the user’s current interface language.`,
    'Never just give the final answer without the reasoning: show the steps first, then the answer, and invite a follow-up question.',
  ].join(' ');
}

interface ChatMessage {
  id: number;
  from: 'user' | 'tutor';
  text: string;
}

const TutorChat: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModelState] = useState<TutorModel>(loadModel);

  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);
  const prevOpenRef = useRef(false);

  const systemPrompt = useMemo(() => buildSystemPrompt(language), [language]);

  const setModel = useCallback((next: TutorModel) => {
    setModelState(next);
    try {
      window.localStorage.setItem(MODEL_STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — the in-memory choice still works
    }
  }, []);

  // Focus the input on open; return focus to the FAB on close.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else if (prevOpenRef.current) {
      fabRef.current?.focus();
    }
    prevOpenRef.current = open;
  }, [open]);

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Keep the log scrolled to the newest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, error]);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || typing || !user) return;
      const userMsg: ChatMessage = { id: nextIdRef.current++, from: 'user', text };
      setError(null);
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setTyping(true);

      const history = [...messages, userMsg].map((m) => ({
        role: m.from === 'user' ? ('user' as const) : ('assistant' as const),
        content: m.text,
      }));

      void (async () => {
        const reply = await askTutor({ model, messages: history, system: systemPrompt });
        setTyping(false);
        if (reply.error || reply.text === null) {
          setError(reply.error ?? '');
          return;
        }
        setMessages((prev) => [
          ...prev,
          { id: nextIdRef.current++, from: 'tutor', text: reply.text as string },
        ]);
      })();
    },
    [typing, user, messages, model, systemPrompt],
  );

  const panelMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, y: 16, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 16, scale: 0.98 },
        transition: { duration: 0.22, ease: 'easeOut' as const },
      };

  return (
    <>
      {/* Chat panel — near-fullscreen on mobile, docked card on desktop.
          Sits above the FAB (z-50) and stays clear of the footer CTA column. */}
      <AnimatePresence>
        {open && (
          <motion.div
            {...panelMotion}
            role="dialog"
            aria-modal="false"
            aria-label={loc(language, ARIA_PANEL)}
            className="fixed inset-x-3 bottom-3 top-16 z-50 flex flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.18)] sm:inset-x-auto sm:top-auto sm:bottom-24 sm:right-5 sm:h-[min(560px,calc(100vh-8rem))] sm:w-[400px]"
          >
            {/* header */}
            <div className="border-b border-line/40 bg-canvas px-4 py-3">
              <div className="flex items-center gap-3">
                <RobotAvatar robot="nov2" className="h-10 w-10 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-teal">
                    {loc(language, UNIT_LABEL)}
                  </span>
                  {/* model switcher */}
                  <div
                    role="group"
                    aria-label={loc(language, ARIA_MODEL_SWITCHER)}
                    className="mt-1.5 inline-flex rounded-lg border border-line/50 bg-white p-0.5"
                  >
                    {MODEL_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={model === option.id}
                        onClick={() => setModel(option.id)}
                        className={`${FOCUS_RING} rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                          model === option.id
                            ? 'bg-teal text-white'
                            : 'text-slateink hover:text-teal'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={loc(language, ARIA_CLOSE_CHAT)}
                  className={`${FOCUS_RING} flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/50 bg-white text-slateink transition-colors hover:border-teal hover:text-teal`}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-1 text-[11px] leading-snug text-slateink">
                {loc(language, MODEL_HINTS[model])}
              </p>
            </div>

            {/* message log */}
            <div
              ref={scrollRef}
              role="log"
              aria-live="polite"
              aria-label={loc(language, ARIA_MESSAGES)}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.length === 0 && (
                <>
                  <div className="flex items-start gap-2.5">
                    <RobotAvatar robot="nov2" className="h-8 w-8 shrink-0" />
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-line/50 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                      {loc(language, INTRO_TEXT)}
                    </div>
                  </div>
                  {user ? (
                    <div className="pt-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slateink">
                        {loc(language, CHIPS_LABEL)}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {SUGGESTED.map((qa) => (
                          <button
                            key={qa.id}
                            type="button"
                            onClick={() => send(loc(language, qa.question))}
                            className={`${FOCUS_RING} rounded-full border border-teal/30 bg-mist/20 px-3 py-1.5 text-left text-xs font-medium text-teal-dark transition-colors hover:border-teal hover:bg-mist/40`}
                          >
                            {loc(language, qa.question)}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-teal/30 bg-mist/20 px-3.5 py-3 text-sm leading-relaxed text-ink">
                      <p>{loc(language, SIGNIN_PROMPT)}</p>
                      <Link
                        to="/login"
                        onClick={() => setOpen(false)}
                        className={`${FOCUS_RING} mt-2 inline-flex items-center rounded-lg bg-teal px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-dark`}
                      >
                        {loc(language, SIGNIN_CTA)}
                      </Link>
                    </div>
                  )}
                </>
              )}

              {messages.map((msg) =>
                msg.from === 'user' ? (
                  <div
                    key={msg.id}
                    className="ml-auto max-w-[85%] whitespace-pre-line rounded-2xl rounded-br-md bg-mist/40 px-3.5 py-2.5 text-sm leading-relaxed text-ink"
                  >
                    {msg.text}
                  </div>
                ) : (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <RobotAvatar robot="nov2" className="h-8 w-8 shrink-0" />
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-line/50 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-ink">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ),
              )}

              {typing && (
                <div className="flex items-start gap-2.5">
                  <RobotAvatar robot="nov2" className="h-8 w-8 shrink-0" />
                  <div className="flex items-center gap-2 rounded-2xl rounded-tl-md border border-line/50 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal/60 motion-safe:animate-pulse" />
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-teal/60 motion-safe:animate-pulse"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-teal/60 motion-safe:animate-pulse"
                        style={{ animationDelay: '300ms' }}
                      />
                    </span>
                    <span className="text-xs text-slateink">{loc(language, TYPING_LABEL)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* error alert */}
            {error && (
              <div
                role="alert"
                className="border-t border-coral/40 bg-coral-light/20 px-4 py-2.5 text-xs leading-snug text-ink"
              >
                {error}
              </div>
            )}

            {/* input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
              className="flex items-end gap-2 border-t border-line/40 bg-canvas px-3.5 py-3"
            >
              <label htmlFor="tutor-chat-input" className="sr-only">
                {loc(language, INPUT_PLACEHOLDER)}
              </label>
              <textarea
                id="tutor-chat-input"
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    send(input);
                  }
                }}
                rows={2}
                placeholder={loc(language, INPUT_PLACEHOLDER)}
                disabled={!user}
                className="max-h-28 min-w-0 flex-1 resize-none rounded-xl border border-line/50 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slateink/70 focus:border-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 disabled:cursor-not-allowed disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing || !user}
                aria-label={loc(language, ARIA_SEND)}
                className={`${FOCUS_RING} flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none`}
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB — bottom-right, below the panel in z-order, sized so it does not
          sit on top of the footer CTA buttons when scrolled to the bottom. */}
      <motion.button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={loc(language, open ? ARIA_CLOSE_CHAT : ARIA_OPEN_CHAT)}
        aria-expanded={open}
        whileHover={reduceMotion ? undefined : { scale: 1.06 }}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        className={`${FOCUS_RING} fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
      </motion.button>
    </>
  );
};

export default TutorChat;
