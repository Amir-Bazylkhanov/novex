/**
 * Practice-session assembly + scoring for /practice (NOV-01 Академик).
 *
 * Pure logic, no React. The question pool combines the full placement-
 * diagnostic bank (ALL_DIAGNOSTIC_QUESTIONS in constants/diagnosticData.ts —
 * all eight subjects) with the practice questions inside the real lessons
 * (constants/lessonData.ts) where the subject has them. Both banks hand-
 * verify their answer keys; lesson questions additionally carry step-by-step
 * explanations, which are preserved into the session and shown in the review.
 *
 * Sessions are frozen on assembly: question order AND option order are
 * shuffled once, so a session persisted to sessionStorage restores with the
 * saved answer indices still pointing at the right options. The timer is an
 * ABSOLUTE deadline (ms epoch), not a decrementing counter — backgrounded or
 * suspended time still counts down.
 */
import {
  ALL_DIAGNOSTIC_QUESTIONS,
  DIAGNOSTIC_SUBJECTS,
  type DiagnosticSubject,
} from '../constants/diagnosticData.ts';
import {
  LESSONS,
  type QuestionDifficulty,
} from '../constants/lessonData.ts';
import type { Localized } from '../utils/i18n.ts';

export type PracticeSubject = DiagnosticSubject;
export type PracticeDifficultyFilter = 'any' | QuestionDifficulty;
export type PracticeCount = 5 | 10 | 15;

export interface PracticeConfig {
  subject: PracticeSubject;
  count: PracticeCount;
  difficulty: PracticeDifficultyFilter;
  /** Seconds for the whole attempt; null = untimed. */
  timedSeconds: number | null;
  /** Narrow the subject's pool to these topic slugs; empty/undefined = whole subject. */
  topics?: string[];
}

// A question frozen into a session: options are already shuffled and
// correctIndex is remapped to the shuffled order, so scoring stays reliable.
export interface PracticeSessionQuestion {
  id: string;
  subject: DiagnosticSubject;
  /** Topic slug (diagnostic topic id or lesson topic) — used to link a lesson. */
  topic?: string;
  topicLabel: Localized;
  question: Localized;
  options: Localized[];
  correctIndex: number;
  explanation?: Localized;
  difficulty: QuestionDifficulty;
}

export interface PracticeSession {
  config: PracticeConfig;
  questions: PracticeSessionQuestion[];
  startedAt: string; // ISO
}

// In-flight attempt persisted to sessionStorage under 'novex.practice':
// survives a same-tab refresh but never leaks across tabs/sessions (shared
// school devices). The FULL frozen session is stored so restored answer
// indices still match the shuffled options.
export interface StoredPractice {
  session: PracticeSession;
  answers: Record<string, number>;
  current: number;
  /** Absolute deadline in ms epoch; null for untimed attempts. */
  deadlineMs: number | null;
}

export interface PracticeAnswerReview extends PracticeSessionQuestion {
  selectedIndex: number | null; // null = unanswered (e.g. timer expired)
  correct: boolean;
}

export interface PracticeResult {
  total: number;
  correct: number;
  accuracy: number; // 0..100
  reviews: PracticeAnswerReview[];
}

/* --- pool --- */

interface PoolQuestion {
  id: string;
  subject: DiagnosticSubject;
  topic: string;
  topicLabel: Localized;
  question: Localized;
  options: Localized[];
  correctIndex: number;
  explanation?: Localized;
  difficulty: QuestionDifficulty;
}

/** The banks mark difficulty as 1|2|3 or 'easy'|'medium'|'hard' — normalize to 1|2|3. */
const normalizeDifficulty = (
  d: QuestionDifficulty | 'easy' | 'medium' | 'hard',
): QuestionDifficulty => {
  if (d === 'easy') return 1;
  if (d === 'medium') return 2;
  if (d === 'hard') return 3;
  return d;
};

// The full eight-subject diagnostic bank feeds the pool, so every subject on
// the config screen has questions even where no lessons exist yet.
const DIAGNOSTIC_POOL: PoolQuestion[] = ALL_DIAGNOSTIC_QUESTIONS.map((q) => ({
  id: q.id,
  subject: q.subject,
  topic: q.topic,
  topicLabel: q.topicLabel,
  question: q.question,
  options: [...q.options],
  correctIndex: q.correctIndex,
  difficulty: normalizeDifficulty(q.difficulty),
}));

// Only real lessons contribute questions; locked placeholders carry empty
// question lists anyway, but the filter keeps that contract explicit. Ids are
// prefixed with the lesson slug so they can't collide with the diagnostic bank.
const LESSON_POOL: PoolQuestion[] = LESSONS.filter((l) => l.available).flatMap((lesson) =>
  lesson.questions.map((q) => ({
    id: `${lesson.slug}:${q.id}`,
    subject: lesson.subject,
    topic: lesson.topic,
    topicLabel: q.topicLabel,
    question: q.question,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: normalizeDifficulty(q.difficulty),
  })),
);

const POOL: PoolQuestion[] = [...DIAGNOSTIC_POOL, ...LESSON_POOL];
const POOL_IDS = new Set(POOL.map((q) => q.id));
const VALID_SUBJECTS = new Set<string>(DIAGNOSTIC_SUBJECTS.map((s) => s.slug));

/** Filter the pool by subject + difficulty, optionally narrowed to a set of topics. Pure. */
export function filterQuestions(
  subject: PracticeSubject,
  difficulty: PracticeDifficultyFilter,
  topics?: string[],
): PoolQuestion[] {
  let list = POOL.filter((q) => q.subject === subject);
  if (topics && topics.length > 0) {
    const wanted = new Set(topics);
    list = list.filter((q) => wanted.has(q.topic));
  }
  if (difficulty !== 'any') list = list.filter((q) => q.difficulty === difficulty);
  return list;
}

/** How many questions the current filter yields (for the config screen). */
export function availableCount(
  subject: PracticeSubject,
  difficulty: PracticeDifficultyFilter,
  topics?: string[],
): number {
  return filterQuestions(subject, difficulty, topics).length;
}

export interface PracticeTopic {
  topic: string;
  label: Localized;
  count: number;
}

/**
 * Distinct topics within a subject's pool (diagnostic + lesson questions
 * combined), each with its question count — feeds the picker's topic chips
 * so a topic is never offered with zero questions behind it.
 */
export function topicsForSubject(subject: PracticeSubject): PracticeTopic[] {
  const byTopic = new Map<string, PracticeTopic>();
  for (const q of POOL) {
    if (q.subject !== subject) continue;
    const existing = byTopic.get(q.topic);
    if (existing) {
      existing.count += 1;
    } else {
      byTopic.set(q.topic, { topic: q.topic, label: q.topicLabel, count: 1 });
    }
  }
  return [...byTopic.values()];
}

// mulberry32: tiny seeded PRNG. Deterministic for a given seed, so a frozen
// question instance keeps the same option order for the whole round.
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shuffle a question's options once and remap correctIndex to the new order.
 * Pass a seed for a deterministic order (stable within a round/attempt);
 * omit it for a fresh random shuffle.
 */
export function shuffleOptions<T>(
  options: T[],
  correctIndex: number,
  seed?: number,
): { options: T[]; correctIndex: number } {
  const rand = mulberry32(seed ?? Math.floor(Math.random() * 4294967296));
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { options: order.map((i) => options[i]), correctIndex: order.indexOf(correctIndex) };
}

// Fisher–Yates; returns the permutation so the caller can remap indices.
function shuffledOrder(n: number): number[] {
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

/**
 * Assemble a practice session:
 *   - filter by subject + difficulty
 *   - shuffle question order, cap at `count` (fewer if the pool is small)
 *   - shuffle options per question, remapping correctIndex
 * The result is frozen — persist and restore it verbatim.
 */
export function assembleSession(config: PracticeConfig): PracticeSession {
  const pool = filterQuestions(config.subject, config.difficulty, config.topics);
  const pickOrder = shuffledOrder(pool.length);
  const chosen = pickOrder.slice(0, Math.min(config.count, pool.length)).map((i) => pool[i]);

  const questions: PracticeSessionQuestion[] = chosen.map((q) => {
    const shuffled = shuffleOptions(q.options, q.correctIndex);
    return {
      id: q.id,
      subject: q.subject,
      topic: q.topic,
      topicLabel: q.topicLabel,
      question: q.question,
      options: shuffled.options,
      correctIndex: shuffled.correctIndex,
      explanation: q.explanation,
      difficulty: q.difficulty,
    };
  });

  return { config, questions, startedAt: new Date().toISOString() };
}

/** Score a submitted session. Answers map question id → selected option index. */
export function scoreSession(
  session: PracticeSession,
  answers: Record<string, number>,
): PracticeResult {
  const reviews: PracticeAnswerReview[] = session.questions.map((q) => {
    const sel = typeof answers[q.id] === 'number' ? answers[q.id] : null;
    return { ...q, selectedIndex: sel, correct: sel !== null && sel === q.correctIndex };
  });
  const correct = reviews.filter((r) => r.correct).length;
  const total = reviews.length;
  return {
    total,
    correct,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    reviews,
  };
}

/* --- timer (absolute deadline, ms epoch) --- */

/** Wall-clock deadline = now + totalSeconds. Pure (takes `now` for testability). */
export const deadlineFromSeconds = (totalSeconds: number, now: number = Date.now()): number =>
  now + Math.max(0, Math.floor(totalSeconds)) * 1000;

/**
 * Remaining seconds to DISPLAY. Math.ceil keeps 1–999ms showing as 1s so the
 * timer never visually hits 0 before the deadline; the real expiry decision
 * uses isDeadlineExpired (a direct comparison), so ceil can't submit early.
 */
export const secondsRemaining = (deadlineMs: number | null, now: number = Date.now()): number => {
  if (typeof deadlineMs !== 'number' || !Number.isFinite(deadlineMs)) return 0;
  const diff = deadlineMs - now;
  return diff <= 0 ? 0 : Math.ceil(diff / 1000);
};

/** Has the deadline actually passed? Pure. */
export const isDeadlineExpired = (deadlineMs: number | null, now: number = Date.now()): boolean => {
  if (typeof deadlineMs !== 'number' || !Number.isFinite(deadlineMs)) return false;
  return now >= deadlineMs;
};

/* --- restore validation --- */

const isLocalized = (v: unknown): v is Localized => {
  if (!v || typeof v !== 'object') return false;
  const t = v as Partial<Localized>;
  return (
    typeof t.ru === 'string' && typeof t.kk === 'string' && typeof t.en === 'string'
  );
};

/**
 * Validate that a restored PracticeSession is still usable: config fields are
 * well-typed, question ids still exist in the pool (guards against obsolete
 * stored ids after a bank edit), and every question has non-empty options with
 * an in-range correctIndex. Anything else is discarded by the caller.
 */
export function isValidStoredSession(s: unknown): s is PracticeSession {
  if (!s || typeof s !== 'object') return false;
  const session = s as Partial<PracticeSession>;
  if (!Array.isArray(session.questions) || session.questions.length === 0) return false;
  const cfg = session.config as Partial<PracticeConfig> | undefined;
  if (!cfg || typeof cfg !== 'object') return false;
  if (typeof cfg.subject !== 'string' || !VALID_SUBJECTS.has(cfg.subject)) return false;
  if (typeof cfg.count !== 'number' || !Number.isInteger(cfg.count) || cfg.count <= 0) return false;
  if (
    cfg.difficulty !== 'any' &&
    cfg.difficulty !== 1 &&
    cfg.difficulty !== 2 &&
    cfg.difficulty !== 3
  ) {
    return false;
  }
  if (cfg.timedSeconds !== null && typeof cfg.timedSeconds !== 'number') return false;
  // topics is newer than stored sessions may be — tolerate its absence.
  if (
    cfg.topics !== undefined &&
    (!Array.isArray(cfg.topics) || !cfg.topics.every((t) => typeof t === 'string'))
  ) {
    return false;
  }
  const seenIds = new Set<string>();
  for (const q of session.questions) {
    if (!q || typeof q.id !== 'string' || !POOL_IDS.has(q.id)) return false;
    if (seenIds.has(q.id)) return false;
    seenIds.add(q.id);
    // topic is newer than stored sessions may be — tolerate its absence.
    if (q.topic !== undefined && typeof q.topic !== 'string') return false;
    if (!isLocalized(q.question) || !isLocalized(q.topicLabel)) return false;
    if (q.explanation !== undefined && !isLocalized(q.explanation)) return false;
    if (!Array.isArray(q.options) || q.options.length < 2) return false;
    if (!q.options.every(isLocalized)) return false;
    if (
      typeof q.correctIndex !== 'number' ||
      !Number.isInteger(q.correctIndex) ||
      q.correctIndex < 0 ||
      q.correctIndex >= q.options.length
    ) {
      return false;
    }
  }
  return true;
}
