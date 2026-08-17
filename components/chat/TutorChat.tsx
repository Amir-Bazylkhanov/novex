import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import {
  FALLBACK_TEXT,
  TUTOR_QA,
  TUTOR_TOPICS,
  findResponse,
} from '../../constants/tutorResponses.ts';

/**
 * Floating AI tutor chat widget (NOV-02 Наставник).
 *
 * HONESTY NOTE: no live AI backend is wired up in this project — the provider
 * keys live on a different Supabase project. This widget is a scripted demo:
 * answers come from the pre-written bank in `constants/tutorResponses.ts`,
 * and the panel is permanently labelled "Demo mode" so nobody mistakes it for
 * a live model. The typing indicator is a short pause before showing a
 * prepared answer, not a fake streaming illusion.
 */

const UNIT_LABEL: Localized = {
  ru: 'NOV-02 · НАСТАВНИК',
  kk: 'NOV-02 · ТӘЛІМГЕР',
  en: 'NOV-02 · TUTOR',
};

const DEMO_BADGE: Localized = {
  ru: 'Демо-режим',
  kk: 'Демо режимі',
  en: 'Demo mode',
};

const DEMO_SUBTEXT: Localized = {
  ru: 'Ответы — готовые примеры: живую модель ещё подключают.',
  kk: 'Жауаптар — дайын мысалдар: нақты модель әлі қосылуда.',
  en: 'Replies are pre-written examples while the live model is being connected.',
};

const INTRO_TEXT: Localized = {
  ru: 'Привет! Я объясняю темы шаг за шагом. Сейчас я в демо-режиме: отвечаю готовыми примерами по пяти темам — спроси что-нибудь из них.',
  kk: 'Сәлем! Мен тақырыптарды қадамдап түсіндіремін. Қазір демо режиміндемін: бес тақырып бойынша дайын мысалдармен жауап беремін — солардың бірінен сұрап көр.',
  en: 'Hi! I explain topics step by step. Right now I am in demo mode: I answer with pre-written examples on five topics — try asking about one of them.',
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
  ru: 'Наставник подбирает готовый пример…',
  kk: 'Тәлімгер дайын мысалды таңдауда…',
  en: 'The Tutor is picking a prepared example…',
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
  ru: 'Чат с ИИ-наставником NOV-02, демо-режим',
  kk: 'NOV-02 ИИ-тәлімгермен чат, демо режимі',
  en: 'Chat with the NOV-02 AI tutor, demo mode',
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

interface ChatMessage {
  id: number;
  from: 'user' | 'tutor';
  text: string;
  /** Topic label shown above tutor answers from the bank. */
  topic?: string;
}

/** Pause before showing a prepared answer — a short beat, not fake streaming. */
const REPLY_DELAY_MS = 900;

const TutorChat: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const nextIdRef = useRef(1);
  const prevOpenRef = useRef(false);

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
  }, [messages, typing]);

  // Never leave a pending reply timer behind on unmount.
  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const buildAnswer = useCallback(
    (question: string): ChatMessage => {
      const id = nextIdRef.current++;
      const match = findResponse(question);
      if (match) {
        return {
          id,
          from: 'tutor',
          topic: loc(language, match.topicLabel),
          text: match.steps.map((step, i) => `${i + 1}. ${loc(language, step)}`).join('\n'),
        };
      }
      const topics = TUTOR_TOPICS.map((t) => `· ${loc(language, t)}`).join('\n');
      return {
        id,
        from: 'tutor',
        text: `${loc(language, FALLBACK_TEXT)}\n${topics}`,
      };
    },
    [language],
  );

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || typing) return;
      setMessages((prev) => [...prev, { id: nextIdRef.current++, from: 'user', text }]);
      setInput('');
      setTyping(true);
      timerRef.current = window.setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, buildAnswer(text)]);
      }, REPLY_DELAY_MS);
    },
    [typing, buildAnswer],
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
            <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-3">
              <RobotAvatar robot="nov2" className="h-10 w-10 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-teal">
                    {loc(language, UNIT_LABEL)}
                  </span>
                  <span
                    title={loc(language, DEMO_SUBTEXT)}
                    className="inline-flex items-center gap-1 rounded-full border border-teal/30 bg-mist/25 px-2 py-0.5 text-[10px] font-semibold text-teal-dark"
                  >
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    {loc(language, DEMO_BADGE)}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-slateink">
                  {loc(language, DEMO_SUBTEXT)}
                </p>
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
                      {msg.topic && (
                        <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-teal">
                          {msg.topic}
                        </p>
                      )}
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
                className="max-h-28 min-w-0 flex-1 resize-none rounded-xl border border-line/50 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slateink/70 focus:border-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
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
