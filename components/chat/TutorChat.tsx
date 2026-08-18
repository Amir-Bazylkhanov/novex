import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Cog, MessageCircle, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import { TUTOR_QA } from '../../constants/tutorResponses.ts';
import { askTutor, type TutorModel } from '../../services/aiService.ts';
import { spendNovas } from '../../services/novasService.ts';

/**
 * Floating AI tutor chat widget (NOV-02 Наставник).
 *
 * Live backend: the widget calls the Novex edge function `ai-chat` via
 * `services/aiService.ts`, which relays through the Locus `novex-ai` function
 * to Anthropic / OpenAI. `constants/tutorResponses.ts` is still on disk but
 * is used here ONLY for the suggested starter-question chips.
 *
 * Each successful reply costs Novas (see NOVA_COST): the widget calls the AI
 * first and charges via `services/novasService.ts` only AFTER a reply comes
 * back, so a failed request never costs anything. If the post-reply charge
 * reports 'insufficient_balance' the user keeps the reply but also gets the
 * out-of-Novas notice; any other charge error fails open with a console.warn.
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

const NOVAS_EMPTY_TEXT: Localized = {
  ru: 'Новасы закончились! Пройди урок или диагностику, чтобы заработать ещё.',
  kk: 'Новасылар таусылды! Көбірек табу үшін сабақ немесе диагностика өт.',
  en: "You're out of Novas! Complete a lesson or a diagnostic to earn more.",
};

const NOVAS_EMPTY_CTA: Localized = {
  ru: 'Перейти к урокам',
  kk: 'Сабақтарға өту',
  en: 'Go to lessons',
};

const MODEL_HINTS: Record<TutorModel, Localized> = {
  'gpt-5.6-luna': {
    ru: 'Лёгкий и быстрый',
    kk: 'Жеңіл әрі жылдам',
    en: 'Light and fast',
  },
  'gpt-5.6-terra': {
    ru: 'Альтернативный взгляд',
    kk: 'Балама көзқарас',
    en: 'An alternative take',
  },
  'claude-sonnet-5': { ru: 'Быстрый', kk: 'Жылдам', en: 'Fast' },
  'gpt-5.6-sol': {
    ru: 'Флагман GPT',
    kk: 'GPT флагманы',
    en: 'The GPT flagship',
  },
  'claude-opus-5': {
    ru: 'Для сложных задач',
    kk: 'Күрделі тапсырмаларға',
    en: 'For hard problems',
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

/** Price of one sent message in Novas, per model. */
const NOVA_COST: Record<TutorModel, number> = {
  'gpt-5.6-luna': 1,
  'gpt-5.6-terra': 2,
  'claude-sonnet-5': 3,
  'gpt-5.6-sol': 4,
  'claude-opus-5': 5,
};

// Brand names stay identical in all three languages, so labels are plain strings.
const MODEL_OPTIONS: Array<{ id: TutorModel; label: string }> = [
  { id: 'claude-opus-5', label: 'Opus 5' },
  { id: 'gpt-5.6-sol', label: 'ChatGPT 5.6 Sol' },
  { id: 'claude-sonnet-5', label: 'Sonnet 5' },
  { id: 'gpt-5.6-terra', label: 'ChatGPT 5.6 Terra' },
  { id: 'gpt-5.6-luna', label: 'ChatGPT 5.6 Luna' },
];

const MODEL_STORAGE_KEY = 'novex.tutorModel';

function storedModel(): TutorModel | null {
  try {
    const stored = window.localStorage.getItem(MODEL_STORAGE_KEY);
    if (MODEL_OPTIONS.some((o) => o.id === stored)) return stored as TutorModel;
  } catch {
    // localStorage unavailable — fall through to null
  }
  return null;
}

/** Model precedence: this session's in-chat choice (localStorage) > profile > default. */
function loadModel(preferred: TutorModel | null | undefined): TutorModel {
  return storedModel() ?? preferred ?? 'claude-sonnet-5';
}

/** System prompt for NOV-02, telling the model which UI language to answer in. */
function buildSystemPrompt(language: Lang): string {
  const langName = language === 'ru' ? 'Russian' : language === 'kk' ? 'Kazakh' : 'English';
  return [
    'You are NOV-02 "Наставник" (Tutor), a patient AI tutor for Kazakhstani school students in grades 7–12.',
    'Explain everything step by step, in a friendly and encouraging tone, at a level a school student can follow.',
    `Always answer in ${langName} — the user’s current interface language.`,
    'Never just give the final answer without the reasoning: show the steps first, then the answer, and invite a follow-up question.',
    'Answer in plain text only: no markdown headings (##), no bold (**), no LaTeX ($, $$, \\frac, \\cdot) — write formulas like x1 = 3 or x^2 in plain characters.',
  ].join(' ');
}

/**
 * Minimal local renderer for assistant replies (no dependencies). Handles the
 * small markdown/LaTeX subset models still emit despite the system prompt:
 * '## '/'### ' heading lines, '---' dividers, **bold**, `code`, and $$...$$ /
 * $...$ formulas rendered as plain text with common tokens converted.
 */
function renderTutorText(text: string): React.ReactNode {
  const SUBS = '₀₁₂₃₄₅₆₇₈₉';
  const SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const latexToText = (src: string): string =>
    src
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
      .replace(/\\quad/g, ' ')
      .replace(/\\cdot/g, '·')
      .replace(/\\times/g, '×')
      .replace(/_(\d)/g, (_m, d: string) => SUBS[Number(d)])
      .replace(/\^(\d)/g, (_m, d: string) => SUPS[Number(d)]);

  const tokenRe = /(\$\$[^$]+\$\$|\$[^$]+\$|\*\*[^*]+\*\*|`[^`]+`)/g;
  const renderInline = (segment: string, keyPrefix: string): React.ReactNode[] =>
    segment
      .split(tokenRe)
      .filter((part) => part !== '')
      .map((part, i) => {
        const key = `${keyPrefix}-${i}`;
        if (part.startsWith('$$') || part.startsWith('$'))
          return (
            <span key={key} className="font-mono italic">
              {latexToText(part.startsWith('$$') ? part.slice(2, -2) : part.slice(1, -1))}
            </span>
          );
        if (part.startsWith('**')) return <strong key={key}>{part.slice(2, -2)}</strong>;
        if (part.startsWith('`'))
          return (
            <code key={key} className="rounded bg-mist/30 px-1 font-mono">
              {part.slice(1, -1)}
            </code>
          );
        return <React.Fragment key={key}>{part}</React.Fragment>;
      });

  return text.split('\n').map((line, i) => {
    if (/^\s*-{3,}\s*$/.test(line))
      return <hr key={i} className="my-1.5 border-line/60" />;
    const heading = line.match(/^#{2,3}\s+(.*)$/);
    if (heading)
      return (
        <p key={i} className="mt-1 font-semibold text-ink">
          {renderInline(heading[1], `h${i}`)}
        </p>
      );
    if (!line.trim()) return <div key={i} className="h-1.5" aria-hidden="true" />;
    return (
      <p key={i} className={i > 0 ? 'mt-1' : undefined}>
        {renderInline(line, `l${i}`)}
      </p>
    );
  });
}

interface ChatMessage {
  id: number;
  from: 'user' | 'tutor';
  text: string;
  /** 'novas' = the insufficient-balance notice bubble (text comes from NOVAS_EMPTY_TEXT). */
  kind?: 'novas';
}

const TutorChat: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile, updateProfile } = useAuth();
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModelState] = useState<TutorModel>(() => loadModel(profile?.preferredModel));
  const [modelMenuOpen, setModelMenuOpen] = useState(false);

  const fabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modelMenuRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);
  const prevOpenRef = useRef(false);

  const systemPrompt = useMemo(() => buildSystemPrompt(language), [language]);

  const setModel = useCallback(
    (next: TutorModel) => {
      setModelState(next);
      try {
        window.localStorage.setItem(MODEL_STORAGE_KEY, next);
      } catch {
        // localStorage unavailable — the in-memory choice still works
      }
      // Remember the choice on the profile too, so it follows the user to
      // another device. Fire-and-forget: a failed write keeps the local choice.
      void updateProfile({ preferredModel: next });
    },
    [updateProfile],
  );

  // The profile may arrive after the first render — apply its preferred model
  // only when the user has not picked one in-chat this session (localStorage).
  useEffect(() => {
    if (!profile?.preferredModel || storedModel()) return;
    setModelState(profile.preferredModel);
  }, [profile?.preferredModel]);

  // Focus the input on open; return focus to the FAB on close.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else if (prevOpenRef.current) {
      fabRef.current?.focus();
    }
    prevOpenRef.current = open;
  }, [open]);

  // Escape closes the model menu first, then the panel.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (modelMenuOpen) {
        setModelMenuOpen(false);
        return;
      }
      setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, modelMenuOpen]);

  // Clicking outside the panel (and the FAB) closes it — same pattern as
  // NotificationsBell. The model menu lives inside the panel, so its clicks
  // never reach this branch.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (fabRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  // Clicking outside the model menu closes it.
  useEffect(() => {
    if (!modelMenuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (modelMenuRef.current && !modelMenuRef.current.contains(event.target as Node)) {
        setModelMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [modelMenuOpen]);

  // Keep the log scrolled to the newest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, error]);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || typing || !user) return;

      void (async () => {
        setError(null);

        const userMsg: ChatMessage = { id: nextIdRef.current++, from: 'user', text };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setTyping(true);

        const history = [...messages, userMsg].map((m) => ({
          role: m.from === 'user' ? ('user' as const) : ('assistant' as const),
          content: m.text,
        }));

        // Ask first, charge after: a failed AI request must never cost Novas.
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

        // Charge only after a successful reply. On 'insufficient_balance' the
        // user keeps this reply but also sees the out-of-Novas notice, so they
        // know the next message needs Novas; other charge errors fail open.
        const charge = await spendNovas(NOVA_COST[model], 'tutor_chat', model);
        if (!charge.success) {
          if (charge.error === 'insufficient_balance') {
            setMessages((prev) => [
              ...prev,
              { id: nextIdRef.current++, from: 'tutor', text: '', kind: 'novas' as const },
            ]);
          } else {
            console.warn('spend_novas failed after successful reply:', charge.error);
          }
        }
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
            ref={panelRef}
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
                  {/* model switcher — compact dropdown: five options with a
                      Novas price each would crowd the old pill switcher */}
                  <div ref={modelMenuRef} className="relative mt-1.5 inline-block">
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={modelMenuOpen}
                      aria-label={loc(language, ARIA_MODEL_SWITCHER)}
                      onClick={() => setModelMenuOpen((prev) => !prev)}
                      className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-lg border border-line/50 bg-white px-2.5 py-1 text-[11px] font-semibold text-ink transition-colors hover:border-teal`}
                    >
                      {MODEL_OPTIONS.find((option) => option.id === model)?.label}
                      <span className="inline-flex items-center gap-0.5 text-slateink">
                        <Cog className="h-3 w-3" aria-hidden="true" />
                        {NOVA_COST[model]}
                      </span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-slateink transition-transform ${modelMenuOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {modelMenuOpen && (
                      <ul
                        role="listbox"
                        aria-label={loc(language, ARIA_MODEL_SWITCHER)}
                        className="absolute left-0 top-full z-10 mt-1 min-w-[190px] overflow-hidden rounded-lg border border-line/50 bg-white py-1 shadow-[0_8px_24px_rgba(17,26,42,0.12)]"
                      >
                        {MODEL_OPTIONS.map((option) => (
                          <li key={option.id}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={model === option.id}
                              onClick={() => {
                                setModel(option.id);
                                setModelMenuOpen(false);
                                inputRef.current?.focus();
                              }}
                              className={`${FOCUS_RING} flex w-full items-center justify-between gap-3 px-2.5 py-1.5 text-left text-[11px] font-semibold transition-colors ${
                                model === option.id
                                  ? 'bg-mist/30 text-teal-dark'
                                  : 'text-ink hover:bg-mist/20'
                              }`}
                            >
                              {option.label}
                              <span className="inline-flex items-center gap-0.5 text-slateink">
                                <Cog className="h-3 w-3" aria-hidden="true" />
                                {NOVA_COST[option.id]}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
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
                ) : msg.kind === 'novas' ? (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-coral/40 bg-coral-light/20">
                      <Cog className="h-4 w-4 text-coral" aria-hidden="true" />
                    </div>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-line/50 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                      <p className="text-sm leading-relaxed text-ink">
                        {loc(language, NOVAS_EMPTY_TEXT)}
                      </p>
                      <Link
                        to="/learn"
                        onClick={() => setOpen(false)}
                        className={`${FOCUS_RING} mt-2 inline-flex items-center rounded-lg bg-teal px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-dark`}
                      >
                        {loc(language, NOVAS_EMPTY_CTA)}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <RobotAvatar robot="nov2" className="h-8 w-8 shrink-0" />
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-line/50 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                      <div className="text-sm leading-relaxed text-ink">
                        {renderTutorText(msg.text)}
                      </div>
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
