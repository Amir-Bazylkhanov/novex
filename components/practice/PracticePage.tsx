import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Play,
  RotateCcw,
  X,
  XCircle,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, type MentorRobotId } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  DIAGNOSTIC_SUBJECTS,
  TOPIC_LESSON_SLUGS,
} from '../../constants/diagnosticData.ts';
import { LEARN_DIRECTIONS, directionForSubject } from '../../constants/learnDirections.ts';
import { planetsByRobot } from '../../constants/academy/catalog.ts';
import {
  assembleSession,
  availableCount,
  deadlineFromSeconds,
  isDeadlineExpired,
  isValidStoredSession,
  scoreSession,
  secondsRemaining,
  topicsForSubject,
  type PracticeConfig,
  type PracticeCount,
  type PracticeDifficultyFilter,
  type PracticeResult,
  type PracticeSession,
  type PracticeSubject,
  type StoredPractice,
} from '../../services/practiceService.ts';

// ============================================================
// Страница «Практика» (/practice) — тренажёр с вопросами по предмету.
// Ученик настраивает тренировку (предмет, темы, сложность, число вопросов,
// режим с таймером или без), затем отвечает на вопросы один за другим
// и в конце видит результат с разбором каждого ответа. Незавершённая
// попытка сохраняется в sessionStorage вкладки — переживает обновление
// страницы, но не расшаривается между вкладками (важно для школьных
// компьютеров, которыми пользуются по очереди).
// ============================================================

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
};
const PAGE_TITLE: Localized = { ru: 'Практика', kk: 'Практика', en: 'Practice' };
const PAGE_SUBTITLE: Localized = {
  ru: 'Собери тренировку под себя: выбери предмет, сложность и число вопросов. NOV-01 проверит ответы и объяснит ошибки.',
  kk: 'Жаттығуды өзіңе бейімде: пәнді, қиындық деңгейін және сұрақ санын таңда. NOV-01 жауаптарды тексеріп, қателерді түсіндіреді.',
  en: 'Build a workout that fits you: pick a subject, difficulty, and question count. NOV-01 checks your answers and explains mistakes.',
};

const SUBJECT_LABEL: Localized = { ru: 'Предмет', kk: 'Пән', en: 'Subject' };
const TOPICS_LABEL: Localized = { ru: 'Темы', kk: 'Тақырыптар', en: 'Topics' };

/* Direction cards mirror /learn's mentor picker but own their content locally
   (no cross-file content imports) — only the direction/subject grouping data
   comes from constants/learnDirections.ts. */
const DIRECTION_CODE: Record<MentorRobotId, Localized> = {
  nov4: { ru: 'NOV-01 · АКАДЕМИК', kk: 'NOV-01 · АКАДЕМИК', en: 'NOV-01 · ACADEMIC' },
  nov5: { ru: 'NOV-02 · ПРАКТИК', kk: 'NOV-02 · ПРАКТИК', en: 'NOV-02 · PRACTITIONER' },
  nov6: { ru: 'NOV-03 · КИБЕР', kk: 'NOV-03 · КИБЕР', en: 'NOV-03 · CYBER' },
};
const DIRECTION_TAGLINE: Record<MentorRobotId, Localized> = {
  nov4: {
    ru: 'Школьные предметы и подготовка к экзаменам',
    kk: 'Мектеп пәндері және емтиханға дайындық',
    en: 'School subjects and exam prep',
  },
  nov5: {
    ru: 'Навыки для реальной жизни',
    kk: 'Нақты өмірге арналған дағдылар',
    en: 'Skills for real life',
  },
  nov6: {
    ru: 'Код, ИИ и мышление будущего',
    kk: 'Код, ЖИ және болашақ ойлау',
    en: 'Code, AI and future thinking',
  },
};
const COUNT_LABEL: Localized = { ru: 'Число вопросов', kk: 'Сұрақ саны', en: 'Question count' };
const DIFFICULTY_LABEL: Localized = {
  ru: 'Сложность',
  kk: 'Қиындық деңгейі',
  en: 'Difficulty',
};
const DIFF_ANY: Localized = { ru: 'Любая', kk: 'Кез келген', en: 'Any' };
const MODE_LABEL: Localized = { ru: 'Режим', kk: 'Режим', en: 'Mode' };
const MODE_TIMED: Localized = {
  ru: 'На время · 10 минут',
  kk: 'Уақытпен · 10 минут',
  en: 'Timed · 10 minutes',
};
const MODE_UNTIMED: Localized = { ru: 'Без таймера', kk: 'Таймерсіз', en: 'Untimed' };
const START_BTN: Localized = {
  ru: 'Начать тренировку',
  kk: 'Жаттығуды бастау',
  en: 'Start practice',
};
const NO_QUESTIONS: Localized = {
  ru: 'По этим фильтрам вопросов нет — попробуй другую сложность.',
  kk: 'Бұл сүзгілер бойынша сұрақ жоқ — басқа қиындықты таңдап көр.',
  en: 'No questions match these filters — try a different difficulty.',
};

const EXIT_BTN: Localized = { ru: 'Выйти', kk: 'Шығу', en: 'Exit' };
const TIME_LEFT: Localized = { ru: 'Осталось времени', kk: 'Қалған уақыт', en: 'Time left' };
const CORRECT_LABEL: Localized = { ru: 'Верно!', kk: 'Дұрыс!', en: 'Correct!' };
const INCORRECT_LABEL: Localized = {
  ru: 'Неверно — сейчас разберём',
  kk: 'Қате — қазір талдаймыз',
  en: 'Not quite — let’s break it down',
};
// Used when the question has NO explanation to break down — never promise one.
const INCORRECT_NO_EXPLANATION: Localized = {
  ru: 'Неверно. Правильный ответ ниже — разберём эту тему на уроке.',
  kk: 'Қате. Дұрыс жауап төменде — бұл тақырыпты сабақта талдаймыз.',
  en: 'Not quite. The correct answer is below — we’ll cover this topic in a lesson.',
};
const OPEN_LESSON_LINK: Localized = {
  ru: 'Открыть урок по теме',
  kk: 'Тақырып бойынша сабақты ашу',
  en: 'Open the lesson on this topic',
};
const NEXT_BTN: Localized = { ru: 'Дальше', kk: 'Келесі', en: 'Next' };
const FINISH_BTN: Localized = { ru: 'Завершить', kk: 'Аяқтау', en: 'Finish' };

const RESULTS_TITLE: Localized = { ru: 'Результаты', kk: 'Нәтижелер', en: 'Results' };
const REVIEW_TITLE: Localized = {
  ru: 'Разбор ответов',
  kk: 'Жауаптарды талдау',
  en: 'Answer review',
};
const NO_ANSWER: Localized = { ru: 'Без ответа', kk: 'Жауап берілмеді', en: 'No answer' };
const AGAIN_BTN: Localized = { ru: 'Ещё раз', kk: 'Тағы бір рет', en: 'Again' };

const counterLine = (lang: Lang, current: number, total: number): string => {
  if (lang === 'kk') return `Сұрақ ${current} / ${total}`;
  if (lang === 'en') return `Question ${current} of ${total}`;
  return `Вопрос ${current} из ${total}`;
};

const availableLine = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `Қолжетімді сұрақтар: ${n}`;
  if (lang === 'en') return `Questions available: ${n}`;
  return `Доступно вопросов: ${n}`;
};

const scoreLine = (lang: Lang, score: number, total: number): string => {
  if (lang === 'kk') return `Дұрыс жауаптар: ${total} ішінен ${score}`;
  if (lang === 'en') return `Correct answers: ${score} out of ${total}`;
  return `Правильных ответов: ${score} из ${total}`;
};

const difficultyLine = (lang: Lang, d: number): string => {
  if (lang === 'kk') return `Қиындығы: ${d}`;
  if (lang === 'en') return `Difficulty: ${d}`;
  return `Сложность: ${d}`;
};

const correctAnswerLine = (lang: Lang, optionText: string): string => {
  if (lang === 'kk') return `Дұрыс жауап: ${optionText}`;
  if (lang === 'en') return `Correct answer: ${optionText}`;
  return `Правильный ответ: ${optionText}`;
};

/** Diagnostic subjects grouped under a direction robot, via directionForSubject. */
const subjectsForDirection = (robot: MentorRobotId) =>
  DIAGNOSTIC_SUBJECTS.filter((s) => directionForSubject(s.slug).robot === robot);

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const PRIMARY_BTN = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`;

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

/* --- constants --- */

// Session-scoped persistence (NOT localStorage): an in-flight attempt survives
// a same-tab refresh but never leaks across tabs/sessions — shared school
// devices. The FULL frozen session (shuffled options included) is stored so
// restored answer indices still point at the right options.
const STORAGE_KEY = 'novex.practice';
const TIMED_SECONDS = 600; // 10 minutes
const COUNT_OPTIONS: PracticeCount[] = [5, 10, 15];
const DIFFICULTY_OPTIONS: PracticeDifficultyFilter[] = ['any', 1, 2, 3];

type Phase = 'config' | 'run' | 'review';

const mmss = (s: number): string => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const PracticePage: React.FC = () => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();

  // Настройки будущей тренировки: какой предмет, какие темы отмечены,
  // сколько вопросов, какая сложность и включён ли таймер.
  // Config state.
  const [subject, setSubject] = useState<PracticeSubject>('math');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [count, setCount] = useState<PracticeCount>(10);
  const [difficulty, setDifficulty] = useState<PracticeDifficultyFilter>('any');
  const [timed, setTimed] = useState(false);

  // Какие карточки направлений и списки тем сейчас развёрнуты на экране
  // настройки (можно раскрыть сразу несколько).
  // Picker expand state: which direction cards and which subjects' topic
  // lists are open. Multiple directions/subjects can be expanded at once.
  const [expandedDirections, setExpandedDirections] = useState<Set<MentorRobotId>>(new Set());
  const [expandedSubjects, setExpandedSubjects] = useState<Set<PracticeSubject>>(new Set());

  // Состояние текущей попытки: на каком этапе ученик (настройка / прохождение
  // / результат), какой набор вопросов ему достался, какой вопрос сейчас
  // и что он уже успел ответить.
  // Active attempt state.
  const [phase, setPhase] = useState<Phase>('config');
  const [session, setSession] = useState<PracticeSession | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PracticeResult | null>(null);
  // Момент времени, когда истекает таймер (для режима «на время»); для
  // тренировки без таймера — null. Оставшиеся секунды каждый раз вычисляются
  // заново из текущего времени, а не отсчитываются вниз, — так таймер не
  // «врёт», даже если вкладка была свёрнута.
  // Absolute deadline for timed attempts (ms epoch); untimed → null. The
  // displayed seconds are DERIVED from Date.now(), never stored as a
  // decrementing counter, so backgrounded/suspended time still counts down.
  const [deadlineMs, setDeadlineMs] = useState<number | null>(null);
  const [nowTick, setNowTick] = useState<number>(() => Date.now());

  // Технические «слепки» последних ответов и сессии — нужны, чтобы таймер,
  // когда время выйдет, засчитал именно те ответы, что ученик успел дать.
  // Latest answers/session refs so the timed-expiry path scores the CURRENT
  // answers (the timer effect can't depend on `answers` without resetting its
  // 1s interval on every answer change, so it reads via refs).
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const sessionRef = useRef(session);
  sessionRef.current = session;

  const clearStored = () => {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // storage blocked — nothing to clear
    }
  };

  const finishAttempt = (sess: PracticeSession, ans: Record<string, number>) => {
    setResult(scoreSession(sess, ans));
    setPhase('review');
    clearStored();
  };

  // При открытии страницы пытаемся восстановить незавершённую тренировку
  // из памяти вкладки: если она есть и данные не повреждены — возвращаем
  // ученика туда, где он остановился. Если пока он отсутствовал истёк
  // таймер — попытка сразу завершается и показывается результат.
  // Restore an in-flight attempt on mount. The stored session is used VERBATIM
  // (no reshuffle) so saved answer indices stay valid; corrupt/obsolete data is
  // discarded and we fall back to the config screen. A timed attempt whose
  // deadline passed while the tab was closed submits immediately.
  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = window.sessionStorage.getItem(STORAGE_KEY);
    } catch {
      raw = null;
    }
    if (!raw) return;
    let stored: StoredPractice | null = null;
    try {
      stored = JSON.parse(raw) as StoredPractice;
    } catch {
      stored = null;
    }
    if (!stored || !isValidStoredSession(stored.session)) {
      clearStored();
      return;
    }
    const qs = stored.session.questions;
    const validIds = new Set(qs.map((q) => q.id));
    const optCount: Record<string, number> = {};
    for (const q of qs) optCount[q.id] = q.options.length;
    // Sanitize answers: drop unknown ids and out-of-range option indices.
    const cleanAnswers: Record<string, number> = {};
    if (stored.answers && typeof stored.answers === 'object') {
      for (const [id, idx] of Object.entries(stored.answers)) {
        if (!validIds.has(id)) continue;
        if (typeof idx === 'number' && Number.isInteger(idx) && idx >= 0 && idx < optCount[id]) {
          cleanAnswers[id] = idx;
        }
      }
    }
    const last = qs.length - 1;
    const rawCurrent =
      typeof stored.current === 'number' && Number.isFinite(stored.current)
        ? Math.floor(stored.current)
        : 0;
    const cleanCurrent = Math.max(0, Math.min(rawCurrent, last));
    const isTimed =
      typeof stored.session.config.timedSeconds === 'number' &&
      stored.session.config.timedSeconds > 0;
    const cleanDeadline =
      isTimed && typeof stored.deadlineMs === 'number' && Number.isFinite(stored.deadlineMs)
        ? stored.deadlineMs
        : null;

    const cfg = stored.session.config;
    setSubject(cfg.subject);
    setSelectedTopics(cfg.topics ?? []);
    setCount(cfg.count);
    setDifficulty(cfg.difficulty);
    setTimed(isTimed);
    setSession(stored.session);
    setAnswers(cleanAnswers);
    setCurrent(cleanCurrent);
    setDeadlineMs(cleanDeadline);
    setNowTick(Date.now());
    if (cleanDeadline !== null && isDeadlineExpired(cleanDeadline)) {
      finishAttempt(stored.session, cleanAnswers);
    } else {
      setPhase('run');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Пока идёт прохождение, после каждого изменения сохраняем всю попытку
  // целиком в память вкладки, чтобы её можно было восстановить при обновлении.
  // Persist the whole attempt (session + answers + cursor + deadline) as one
  // composite object so it is always internally consistent on restore.
  useEffect(() => {
    if (phase !== 'run' || !session) return;
    const stored: StoredPractice = { session, answers, current, deadlineMs };
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // storage full/blocked — the attempt just won't survive a refresh
    }
  }, [phase, session, answers, current, deadlineMs]);

  // Обратный отсчёт таймера: каждую секунду пересчитываем оставшееся время.
  // Когда время выходит — тренировка завершается автоматически.
  // Live countdown: derive remaining from Date.now() each second. When the
  // deadline actually passes, submit with the latest answers (via refs).
  const secondsLeft = secondsRemaining(deadlineMs, nowTick);
  useEffect(() => {
    if (phase !== 'run' || deadlineMs === null) return;
    if (isDeadlineExpired(deadlineMs)) {
      const s = sessionRef.current;
      if (s) finishAttempt(s, answersRef.current);
      return;
    }
    const id = setTimeout(() => setNowTick(Date.now()), 1000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, deadlineMs, nowTick]);

  // Если ученик свернул вкладку и вернулся — сразу пересчитываем оставшееся
  // время, чтобы таймер не показывал устаревшее значение.
  // A backgrounded tab didn't tick: on focus, jump the display to the true
  // wall-clock remaining (and submit via the countdown effect if it expired).
  useEffect(() => {
    if (phase !== 'run' || deadlineMs === null) return;
    const onVisible = () => {
      if (document.visibilityState === 'visible') setNowTick(Date.now());
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [phase, deadlineMs]);

  const activeTopics = selectedTopics.length > 0 ? selectedTopics : undefined;
  const available = availableCount(subject, difficulty, activeTopics);

  // Собирает набор вопросов по выбранным настройкам и запускает тренировку.
  const handleStart = () => {
    const config: PracticeConfig = {
      subject,
      count,
      difficulty,
      timedSeconds: timed ? TIMED_SECONDS : null,
      topics: activeTopics,
    };
    const s = assembleSession(config);
    setSession(s);
    setCurrent(0);
    setAnswers({});
    setResult(null);
    setDeadlineMs(config.timedSeconds ? deadlineFromSeconds(config.timedSeconds) : null);
    setNowTick(Date.now());
    setPhase('run');
  };

  const handleNext = () => {
    if (!session) return;
    if (current < session.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      finishAttempt(session, answers);
    }
  };

  const resetToConfig = () => {
    setSession(null);
    setResult(null);
    setAnswers({});
    setCurrent(0);
    setDeadlineMs(null);
    setPhase('config');
  };

  const handleExit = () => {
    clearStored();
    resetToConfig();
  };

  const pillClass = (active: boolean): string =>
    `${FOCUS_RING} rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
      active
        ? 'border-teal bg-teal/10 text-teal-dark'
        : 'border-line bg-white text-slateink hover:border-teal/60 hover:text-ink'
    }`;

  const topicChipClass = (active: boolean): string =>
    `${FOCUS_RING} inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
      active
        ? 'border-teal bg-teal/10 text-teal-dark'
        : 'border-line bg-white text-slateink hover:border-teal/60 hover:text-ink'
    }`;

  const toggleDirection = (robot: MentorRobotId) => {
    setExpandedDirections((prev) => {
      const next = new Set(prev);
      if (next.has(robot)) next.delete(robot);
      else next.add(robot);
      return next;
    });
  };

  const toggleSubjectExpand = (s: PracticeSubject) => {
    setExpandedSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  };

  // Клик по строке предмета выбирает весь предмет целиком (сброс отметок тем).
  // Selecting the subject row scopes the whole subject — matches the legacy
  // flat-picker behaviour exactly (topics reset to "any").
  const handleSelectSubject = (s: PracticeSubject) => {
    setSubject(s);
    setSelectedTopics([]);
  };

  // Клик по конкретной теме одновременно выбирает её предмет и отмечает
  // саму тему; можно отметить сразу несколько тем одного предмета.
  // A topic chip both picks its subject (if not already active) and toggles
  // itself into the topic scope; multiple topics within one subject can mix.
  const handleToggleTopic = (s: PracticeSubject, topic: string) => {
    if (s !== subject) {
      setSubject(s);
      setSelectedTopics([topic]);
      return;
    }
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const expandVariants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: 'auto', opacity: 1 },
        exit: { height: 0, opacity: 0 },
      };

  const fadeUp = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5 },
  } as const;

  const currentQuestion = session?.questions[current] ?? null;
  const isLastQuestion = session !== null && current === session.questions.length - 1;
  const answeredCorrectly =
    currentQuestion !== null &&
    answers[currentQuestion.id] !== undefined &&
    answers[currentQuestion.id] === currentQuestion.correctIndex;
  // Real lesson covering this question's topic, if TOPIC_LESSON_SLUGS maps one.
  const currentLessonSlug = currentQuestion?.topic
    ? TOPIC_LESSON_SLUGS[currentQuestion.topic]
    : undefined;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="practice" aria-labelledby="practice-heading">
          {/* NOV-01 header — visible in every phase */}
          <div className="flex items-start gap-4">
            <RobotAvatar robot="nov1" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, ROBOT_LABEL)}
              </p>
              <h1
                id="practice-heading"
                className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                {loc(language, PAGE_TITLE)}
              </h1>
              {phase === 'config' && (
                <p className="mt-2 text-sm text-slateink">{loc(language, PAGE_SUBTITLE)}</p>
              )}
            </div>
          </div>

          {/* Экран настройки: выбор предмета/тем, числа вопросов, сложности и режима. */}
          {/* --- config --- */}
          {phase === 'config' && (
            <div className="mt-6 space-y-4">
              <motion.div {...fadeUp} className="space-y-3">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, SUBJECT_LABEL)}
                </h2>
                {LEARN_DIRECTIONS.map((direction) => {
                  // Unified selectable rows: diagnostic subjects first, then
                  // this direction's academy planets — every planet is
                  // practicable, nothing is "soon".
                  const directionItems: {
                    slug: PracticeSubject;
                    label: Localized;
                    icon?: LucideIcon;
                  }[] = [
                    ...subjectsForDirection(direction.robot).map((s) => ({
                      slug: s.slug as PracticeSubject,
                      label: s.label,
                    })),
                    ...planetsByRobot(direction.robot).map((planet) => ({
                      slug: planet.slug,
                      label: planet.name,
                      icon: planet.icon,
                    })),
                  ];
                  const isExpanded = expandedDirections.has(direction.robot);
                  const selectionCount = directionItems.some((item) => item.slug === subject)
                    ? selectedTopics.length > 0
                      ? selectedTopics.length
                      : 1
                    : 0;
                  return (
                    <div key={direction.robot} className={CARD}>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => toggleDirection(direction.robot)}
                        className={`${FOCUS_RING} flex w-full items-start gap-4 rounded-xl text-left`}
                      >
                        <RobotAvatar
                          robot={direction.robot}
                          className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                            {loc(language, DIRECTION_CODE[direction.robot])}
                          </p>
                          <div className="mt-0.5 flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                              {loc(language, direction.name)}
                            </h3>
                            {selectionCount > 0 && (
                              <span className="rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold tabular-nums text-teal-dark">
                                {selectionCount}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-slateink">
                            {loc(language, DIRECTION_TAGLINE[direction.robot])}
                          </p>
                        </div>
                        <ChevronDown
                          className={`mt-2 h-5 w-5 shrink-0 text-slateink transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            {...expandVariants}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2 border-t border-line/40 pt-4">
                              {directionItems.map((item) => {
                                const subjectActive = subject === item.slug;
                                const subjectTopics = topicsForSubject(item.slug);
                                const topicsOpen = expandedSubjects.has(item.slug);
                                const ItemIcon = item.icon;
                                return (
                                  <div
                                    key={item.slug}
                                    className="rounded-xl border border-line/50 bg-canvas/60 p-3"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        aria-pressed={subjectActive}
                                        onClick={() => handleSelectSubject(item.slug)}
                                        className={pillClass(subjectActive)}
                                      >
                                        {ItemIcon && (
                                          <ItemIcon
                                            className="mr-1.5 inline h-4 w-4 align-[-2px]"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {loc(language, item.label)}
                                      </button>
                                      {subjectTopics.length > 0 && (
                                        <button
                                          type="button"
                                          aria-expanded={topicsOpen}
                                          onClick={() => toggleSubjectExpand(item.slug)}
                                          className={`${FOCUS_RING} rounded-lg p-1.5 text-slateink transition-colors hover:text-teal`}
                                        >
                                          <span className="sr-only">
                                            {loc(language, TOPICS_LABEL)}
                                          </span>
                                          <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${
                                              topicsOpen ? 'rotate-180' : ''
                                            }`}
                                            aria-hidden="true"
                                          />
                                        </button>
                                      )}
                                    </div>
                                    <AnimatePresence initial={false}>
                                      {topicsOpen && subjectTopics.length > 0 && (
                                        <motion.div
                                          {...expandVariants}
                                          transition={{ duration: 0.25 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="mt-3 flex flex-wrap gap-1.5">
                                            {subjectTopics.map((t) => {
                                              const topicActive =
                                                subjectActive && selectedTopics.includes(t.topic);
                                              return (
                                                <button
                                                  key={t.topic}
                                                  type="button"
                                                  aria-pressed={topicActive}
                                                  onClick={() => handleToggleTopic(item.slug, t.topic)}
                                                  className={topicChipClass(topicActive)}
                                                >
                                                  {topicActive && (
                                                    <Check className="h-3 w-3" aria-hidden="true" />
                                                  )}
                                                  {loc(language, t.label)}
                                                </button>
                                              );
                                            })}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3">
                <motion.div {...fadeUp} className={CARD}>
                  <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, COUNT_LABEL)}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {COUNT_OPTIONS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        aria-pressed={count === c}
                        onClick={() => setCount(c)}
                        className={`${pillClass(count === c)} tabular-nums`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeUp} className={CARD}>
                  <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, DIFFICULTY_LABEL)}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DIFFICULTY_OPTIONS.map((d) => (
                      <button
                        key={String(d)}
                        type="button"
                        aria-pressed={difficulty === d}
                        onClick={() => setDifficulty(d)}
                        className={`${pillClass(difficulty === d)} tabular-nums`}
                      >
                        {d === 'any' ? loc(language, DIFF_ANY) : d}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeUp} className={CARD}>
                  <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, MODE_LABEL)}
                  </h2>
                  <div className="mt-3">
                    <button
                      type="button"
                      aria-pressed={timed}
                      onClick={() => setTimed((v) => !v)}
                      className={pillClass(timed)}
                    >
                      <Clock className="mr-1.5 inline h-4 w-4 align-[-2px]" aria-hidden="true" />
                      {loc(language, timed ? MODE_TIMED : MODE_UNTIMED)}
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div {...fadeUp}>
                {available === 0 ? (
                  <p className="text-sm font-medium text-coral">{loc(language, NO_QUESTIONS)}</p>
                ) : (
                  available < count && (
                    <p className="text-xs text-slateink">{availableLine(language, available)}</p>
                  )
                )}
                <button
                  type="button"
                  onClick={handleStart}
                  disabled={available === 0}
                  className={`${PRIMARY_BTN} mt-4 w-full justify-center sm:w-auto`}
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  {loc(language, START_BTN)}
                </button>
              </motion.div>
            </div>
          )}

          {/* Экран прохождения: один вопрос за раз, сразу после ответа — правильный
              вариант и объяснение (или ссылка на урок, если объяснения нет). */}
          {/* --- run --- */}
          {phase === 'run' && session && currentQuestion && (
            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleExit}
                  className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-slateink transition-colors hover:text-teal`}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {loc(language, EXIT_BTN)}
                </button>
                <div className="flex items-center gap-3 text-sm">
                  <span aria-live="polite" className="font-semibold tabular-nums text-ink">
                    {counterLine(language, current + 1, session.questions.length)}
                  </span>
                  {deadlineMs !== null && (
                    <span
                      aria-label={loc(language, TIME_LEFT)}
                      className={`inline-flex items-center gap-1 font-mono text-xs font-semibold tabular-nums ${
                        secondsLeft < 60 ? 'text-coral' : 'text-teal-dark'
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {mmss(secondsLeft)}
                    </span>
                  )}
                </div>
              </div>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-mist/40"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={session.questions.length}
                aria-valuenow={Object.keys(answers).length}
              >
                <div
                  className="h-full rounded-full bg-teal transition-all duration-300"
                  style={{
                    width: `${Math.round(
                      (Object.keys(answers).length / session.questions.length) * 100,
                    )}%`,
                  }}
                />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentQuestion.id}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  className={`${CARD} mt-5`}
                >
                  <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                    {loc(language, currentQuestion.topicLabel)} ·{' '}
                    {difficultyLine(language, currentQuestion.difficulty)}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {loc(language, currentQuestion.question)}
                  </h2>

                  <div className="mt-5 space-y-2.5">
                    {currentQuestion.options.map((option, i) => {
                      const answered = answers[currentQuestion.id] !== undefined;
                      const isCorrect = i === currentQuestion.correctIndex;
                      const isSelected = answers[currentQuestion.id] === i;
                      let optionClass = `${FOCUS_RING} flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors`;
                      if (answered) {
                        if (isCorrect) {
                          optionClass += ' border-teal bg-teal/10 text-ink';
                        } else if (isSelected) {
                          optionClass += ' border-coral bg-coral/10 text-ink';
                        } else {
                          optionClass += ' border-line/60 bg-white text-slateink';
                        }
                      } else {
                        optionClass += ' border-line bg-white text-ink hover:border-teal/60';
                      }
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={answered}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: i }))
                          }
                          className={optionClass}
                        >
                          <span
                            aria-hidden="true"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist/30 font-mono text-[11px] font-semibold text-teal-dark"
                          >
                            {OPTION_LETTERS[i]}
                          </span>
                          <span className="min-w-0 flex-1">{loc(language, option)}</span>
                          {answered && isCorrect && (
                            <Check className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                          )}
                          {answered && isSelected && !isCorrect && (
                            <X className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {answers[currentQuestion.id] !== undefined && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      aria-live="polite"
                      className="mt-5 rounded-xl border border-teal/25 bg-mist/15 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <RobotAvatar robot="nov1" className="h-10 w-10 shrink-0" />
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                            {loc(language, ROBOT_LABEL)}
                          </p>
                          <p
                            className={`mt-0.5 text-sm font-bold ${
                              answeredCorrectly ? 'text-teal-dark' : 'text-coral'
                            }`}
                          >
                            {loc(
                              language,
                              answeredCorrectly
                                ? CORRECT_LABEL
                                : currentQuestion.explanation
                                  ? INCORRECT_LABEL
                                  : INCORRECT_NO_EXPLANATION,
                            )}
                          </p>
                          {!answeredCorrectly && (
                            <p className="mt-1.5 text-sm font-semibold text-teal-dark">
                              {correctAnswerLine(
                                language,
                                loc(
                                  language,
                                  currentQuestion.options[currentQuestion.correctIndex],
                                ),
                              )}
                            </p>
                          )}
                          {currentQuestion.explanation && (
                            <p className="mt-1.5 text-sm leading-relaxed text-ink">
                              {loc(language, currentQuestion.explanation)}
                            </p>
                          )}
                          {!answeredCorrectly && !currentQuestion.explanation && currentLessonSlug && (
                            <Link
                              to={`/learn/${currentLessonSlug}`}
                              className={`${FOCUS_RING} mt-2 inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-teal-dark underline decoration-teal/40 underline-offset-2 transition-colors hover:text-teal hover:decoration-teal`}
                            >
                              <BookOpen className="h-4 w-4" aria-hidden="true" />
                              {loc(language, OPEN_LESSON_LINK)}
                            </Link>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleNext}
                        className={`${PRIMARY_BTN} mt-4 w-full justify-center sm:w-auto`}
                      >
                        {loc(language, isLastQuestion ? FINISH_BTN : NEXT_BTN)}
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Экран результата: итоговый процент и построчный разбор каждого вопроса. */}
          {/* --- review --- */}
          {phase === 'review' && result && session && (
            <div className="mt-6">
              <motion.div {...fadeUp} className={CARD}>
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, RESULTS_TITLE)}
                </h2>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-extrabold tabular-nums text-teal-dark">
                    {result.accuracy}%
                  </span>
                  <span aria-live="polite" className="text-sm font-semibold text-ink">
                    {scoreLine(language, result.correct, result.total)}
                  </span>
                </div>
              </motion.div>

              <h2 className="mt-8 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, REVIEW_TITLE)}
              </h2>
              <div className="mt-3 space-y-4">
                {result.reviews.map((r, i) => (
                  <motion.article key={r.id} {...fadeUp} className={CARD}>
                    <div className="flex items-start gap-3">
                      {r.correct ? (
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-coral"
                          aria-hidden="true"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                          {loc(language, r.topicLabel)}
                        </p>
                        <h3 className="mt-1 text-sm font-bold text-ink sm:text-base">
                          <span className="mr-1 tabular-nums">{i + 1}.</span>
                          {loc(language, r.question)}
                        </h3>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5 sm:ml-8">
                      {r.options.map((opt, oi) => {
                        const isCorrect = oi === r.correctIndex;
                        const isChosen = oi === r.selectedIndex;
                        return (
                          <li
                            key={oi}
                            className={`flex items-center gap-2 text-sm ${
                              isCorrect
                                ? 'font-semibold text-teal-dark'
                                : isChosen
                                  ? 'text-coral'
                                  : 'text-slateink'
                            }`}
                          >
                            {isCorrect && (
                              <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                            )}
                            {isChosen && !isCorrect && (
                              <X className="h-4 w-4 shrink-0" aria-hidden="true" />
                            )}
                            <span className="min-w-0">{loc(language, opt)}</span>
                          </li>
                        );
                      })}
                    </ul>
                    {r.selectedIndex === null && (
                      <p className="mt-2 text-xs font-medium text-coral sm:ml-8">
                        {loc(language, NO_ANSWER)}
                      </p>
                    )}
                    {r.explanation && (
                      <div className="mt-3 rounded-xl border border-teal/25 bg-mist/15 p-3 sm:ml-8">
                        <div className="flex items-start gap-2.5">
                          <RobotAvatar robot="nov1" className="h-8 w-8 shrink-0" />
                          <p className="min-w-0 text-sm leading-relaxed text-ink">
                            {loc(language, r.explanation)}
                          </p>
                        </div>
                      </div>
                    )}
                    {!r.correct && !r.explanation && (
                      <div className="mt-3 rounded-xl border border-teal/25 bg-mist/15 p-3 sm:ml-8">
                        <div className="flex items-start gap-2.5">
                          <RobotAvatar robot="nov1" className="h-8 w-8 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-teal-dark">
                              {correctAnswerLine(language, loc(language, r.options[r.correctIndex]))}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-ink">
                              {loc(language, INCORRECT_NO_EXPLANATION)}
                            </p>
                            {r.topic && TOPIC_LESSON_SLUGS[r.topic] && (
                              <Link
                                to={`/learn/${TOPIC_LESSON_SLUGS[r.topic]}`}
                                className={`${FOCUS_RING} mt-1.5 inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-teal-dark underline decoration-teal/40 underline-offset-2 transition-colors hover:text-teal hover:decoration-teal`}
                              >
                                <BookOpen className="h-4 w-4" aria-hidden="true" />
                                {loc(language, OPEN_LESSON_LINK)}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>

              <button
                type="button"
                onClick={resetToConfig}
                className={`${PRIMARY_BTN} mt-8 w-full justify-center sm:w-auto`}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {loc(language, AGAIN_BTN)}
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default PracticePage;
