import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import type {
  DiagnosticLevel,
  DiagnosticQuestion,
  DiagnosticSubject,
  DiagnosticSubjectMeta,
} from './diagnostic/types.ts';
import { MATH_QUESTIONS } from './diagnostic/math.ts';
import { PHYSICS_QUESTIONS } from './diagnostic/physics.ts';
import { CHEMISTRY_QUESTIONS } from './diagnostic/chemistry.ts';
import { BIOLOGY_QUESTIONS } from './diagnostic/biology.ts';
import { INFORMATICS_QUESTIONS } from './diagnostic/informatics.ts';
import { KAZAKH_QUESTIONS } from './diagnostic/kazakh.ts';
import { ENGLISH_QUESTIONS } from './diagnostic/english.ts';
import { HISTORY_QUESTIONS } from './diagnostic/history.ts';

// Re-export the shared types so every existing import path
// ('.../constants/diagnosticData.ts') keeps working unchanged.
export type {
  DiagnosticDifficulty,
  DiagnosticLevel,
  DiagnosticQuestion,
  DiagnosticSubject,
  DiagnosticSubjectMeta,
} from './diagnostic/types.ts';

// ============================================
// Слой сборки банка вопросов для вступительной диагностики (тест, который
// определяет уровень ученика перед началом обучения). Сами вопросы по
// предметам лежат в constants/diagnostic/*.ts, а этот файл их объединяет,
// подбирает вопросы под класс ученика, считает итоговый уровень
// (beginner/intermediate/advanced) и хранит русские названия тем.
// ============================================
/**
 * NOV-01 Академик — aggregation layer for the placement-diagnostic bank.
 *
 * The questions themselves live in per-subject files under
 * constants/diagnostic/ (math.ts, physics.ts, …), each ordered easy → hard
 * and tagged with an honest grade band (gradeMin/gradeMax, grades 7..12).
 * This module merges them, exposes the grade-aware filters the
 * DiagnosticPage drives adaptively (two correct answers in a row skip ahead
 * to a harder question, two wrong in a row drop back to an easier one), and
 * owns the level thresholds. No question is ever repeated within a run.
 *
 * Every answer key has been verified by hand — do not reorder options
 * without updating `correctIndex`.
 */

// Список всех предметов диагностики с их названиями на трёх языках.
export const DIAGNOSTIC_SUBJECTS: DiagnosticSubjectMeta[] = [
  { slug: 'math', label: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
  { slug: 'physics', label: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
  { slug: 'chemistry', label: { ru: 'Химия', kk: 'Химия', en: 'Chemistry' } },
  { slug: 'biology', label: { ru: 'Биология', kk: 'Биология', en: 'Biology' } },
  { slug: 'informatics', label: { ru: 'Информатика', kk: 'Информатика', en: 'Computer Science' } },
  { slug: 'kazakh', label: { ru: 'Казахский язык', kk: 'Қазақ тілі', en: 'Kazakh language' } },
  { slug: 'english', label: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' } },
  {
    slug: 'history',
    label: { ru: 'История Казахстана', kk: 'Қазақстан тарихы', en: 'History of Kazakhstan' },
  },
];

/** Every diagnostic question of every subject, per-subject banks concatenated. */
export const ALL_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  ...MATH_QUESTIONS,
  ...PHYSICS_QUESTIONS,
  ...CHEMISTRY_QUESTIONS,
  ...BIOLOGY_QUESTIONS,
  ...INFORMATICS_QUESTIONS,
  ...KAZAKH_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...HISTORY_QUESTIONS,
];

/** A question fits a grade if its band overlaps [grade − GRADE_BAND, grade + GRADE_BAND]. */
// Насколько классов в сторону от класса ученика ещё считается "подходящим".
const GRADE_BAND = 1;
/** Below this many band-matched questions the band is padded with the nearest out-of-band ones. */
// Минимум вопросов в подборке; если подходящих меньше — добираем соседними по сложности.
const MIN_BAND_POOL = 6;

/**
 * Questions of one subject, sorted easy → hard, restricted to the grade
 * band when `grade` is given (gradeMin ≤ grade + 1 and gradeMax ≥ grade − 1).
 * When the band holds fewer than MIN_BAND_POOL questions it is padded with
 * the nearest out-of-band questions (ascending band distance
 * min(|gradeMin − grade|, |gradeMax − grade|)) instead of the raw full
 * pool, so a run never starves yet stays close to the student's grade.
 */
// Возвращает вопросы одного предмета под класс ученика (от простых к сложным).
export function questionsForSubject(
  subject: DiagnosticSubject,
  grade?: number,
): DiagnosticQuestion[] {
  const pool = ALL_DIAGNOSTIC_QUESTIONS.filter((q) => q.subject === subject);
  if (typeof grade !== 'number') return pool;
  const banded = pool.filter(
    (q) => q.gradeMin <= grade + GRADE_BAND && q.gradeMax >= grade - GRADE_BAND,
  );
  if (banded.length >= MIN_BAND_POOL) return banded;
  const bandDistance = (q: DiagnosticQuestion): number =>
    Math.min(Math.abs(q.gradeMin - grade), Math.abs(q.gradeMax - grade));
  const nearest = pool
    .filter((q) => !banded.includes(q))
    .sort((a, b) => bandDistance(a) - bandDistance(b));
  return [...banded, ...nearest.slice(0, MIN_BAND_POOL - banded.length)];
}

/**
 * Level thresholds (строгие пороги уровней):
 * <50% beginner, 50–79% intermediate, ≥80% advanced.
 */
// Пороги для итогового уровня: меньше 50% правильных — новичок, 50–79% —
// средний, 80% и больше — продвинутый.
export const LEVEL_THRESHOLDS = { intermediate: 0.5, advanced: 0.8 } as const;

// Считает итоговый уровень ученика по числу правильных ответов из общего числа вопросов.
export function levelForScore(score: number, total: number): DiagnosticLevel {
  const ratio = total === 0 ? 0 : score / total;
  if (ratio < LEVEL_THRESHOLDS.intermediate) return 'beginner';
  if (ratio < LEVEL_THRESHOLDS.advanced) return 'intermediate';
  return 'advanced';
}

// Одна тема (слабая или сильная сторона ученика) с её названием на трёх языках.
export interface TopicStat {
  slug: string;
  label: Localized;
}

// Итоговый результат по одному предмету: сколько баллов набрано, какой
// уровень получился, какие темы даются легко, а какие — слабое место.
export interface SubjectResult {
  subject: DiagnosticSubject;
  label: Localized;
  score: number;
  total: number;
  level: DiagnosticLevel;
  weakTopics: TopicStat[];
  strongTopics: TopicStat[];
}

// Один ответ ученика во время диагностики (какой вопрос, какой предмет,
// какая тема, правильно ли ответил).
export interface AnswerRecord {
  questionId: string;
  subject: DiagnosticSubject;
  topic: string;
  topicLabel: Localized;
  correct: boolean;
}

/** Aggregate raw answers into one result row per subject. */
// Собирает список отдельных ответов в итоговую сводку по каждому предмету
// (сколько баллов, какой уровень, какие темы слабые/сильные).
export function buildResults(
  subjects: DiagnosticSubject[],
  answers: AnswerRecord[],
): SubjectResult[] {
  return subjects.map((subject) => {
    const meta = DIAGNOSTIC_SUBJECTS.find((s) => s.slug === subject);
    const subjectAnswers = answers.filter((a) => a.subject === subject);
    const score = subjectAnswers.filter((a) => a.correct).length;
    const weakTopics: TopicStat[] = [];
    const strongTopics: TopicStat[] = [];
    for (const a of subjectAnswers) {
      const target = a.correct ? strongTopics : weakTopics;
      if (!target.some((t) => t.slug === a.topic)) {
        target.push({ slug: a.topic, label: a.topicLabel });
      }
    }
    return {
      subject,
      label: meta?.label ?? { ru: subject, kk: subject, en: subject },
      score,
      total: subjectAnswers.length,
      level: levelForScore(score, subjectAnswers.length),
      weakTopics,
      strongTopics,
    };
  });
}

/**
 * Localized names for every topic slug used in the diagnostic bank.
 * Slugs are stored raw in diagnostic_results.weak_topics / strong_topics,
 * so all UI must render them through this map.
 */
// Русские/казахские/английские названия для каждой темы вопросов диагностики.
export const TOPIC_NAMES: Record<string, Localized> = {
  // math
  'linear-equations': { ru: 'Линейные уравнения', kk: 'Сызықтық теңдеулер', en: 'Linear equations' },
  percentages: { ru: 'Проценты', kk: 'Пайыздар', en: 'Percentages' },
  'quadratic-equations': {
    ru: 'Квадратные уравнения',
    kk: 'Квадрат теңдеулер',
    en: 'Quadratic equations',
  },
  'linear-functions': { ru: 'Линейная функция', kk: 'Сызықтық функция', en: 'Linear functions' },
  'geometric-progression': {
    ru: 'Геометрическая прогрессия',
    kk: 'Геометриялық прогрессия',
    en: 'Geometric progression',
  },
  // physics
  speed: { ru: 'Скорость', kk: 'Жылдамдық', en: 'Speed' },
  units: { ru: 'Единицы измерения', kk: 'Өлшем бірліктері', en: 'Units of measurement' },
  'newton-second-law': {
    ru: 'Второй закон Ньютона',
    kk: 'Ньютонның екінші заңы',
    en: "Newton's second law",
  },
  'ohm-law': { ru: 'Закон Ома', kk: 'Ом заңы', en: "Ohm's law" },
  'kinetic-energy': { ru: 'Кинетическая энергия', kk: 'Кинетикалық энергия', en: 'Kinetic energy' },
  // chemistry
  'chemical-symbols': { ru: 'Химические символы', kk: 'Химиялық таңбалар', en: 'Chemical symbols' },
  'molar-mass': { ru: 'Молярная масса', kk: 'Мольдік масса', en: 'Molar mass' },
  // biology
  'cell-organelles': { ru: 'Органоиды клетки', kk: 'Жасуша органоидтері', en: 'Cell organelles' },
  'cell-respiration': { ru: 'Клеточное дыхание', kk: 'Жасуша тынысы', en: 'Cellular respiration' },
  // informatics
  'data-units': { ru: 'Единицы информации', kk: 'Ақпарат бірліктері', en: 'Data units' },
  'boolean-logic': { ru: 'Логические выражения', kk: 'Логикалық өрнектер', en: 'Boolean expressions' },
  // kazakh
  'plural-forms': { ru: 'Множественное число', kk: 'Көпше түр', en: 'Plural forms' },
  'verb-tenses': { ru: 'Времена глагола', kk: 'Етістік шақтары', en: 'Verb tenses' },
  // english
  'present-simple': { ru: 'Present Simple', kk: 'Present Simple', en: 'Present Simple' },
  'past-simple': { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
  'present-perfect': { ru: 'Present Perfect', kk: 'Present Perfect', en: 'Present Perfect' },
  comparatives: { ru: 'Сравнительная степень', kk: 'Салыстырмалы шырай', en: 'Comparatives' },
  'passive-voice': { ru: 'Пассивный залог', kk: 'Ырықсыз етіс', en: 'Passive voice' },
  // history
  independence: {
    ru: 'Независимость Казахстана',
    kk: 'Қазақстан тәуелсіздігі',
    en: 'Independence of Kazakhstan',
  },
  'alash-movement': { ru: 'Движение Алаш', kk: 'Алаш қозғалысы', en: 'Alash movement' },
};

/**
 * Localized display name for a topic slug; falls back to the topicLabel of a
 * bank question with that topic (the newer banks have many topics TOPIC_NAMES
 * doesn't list), then to the raw id.
 */
// Возвращает название темы на нужном языке по её id.
export function topicName(lang: Lang, id: string): string {
  const known = TOPIC_NAMES[id];
  if (known) return loc(lang, known);
  const fromBank = ALL_DIAGNOSTIC_QUESTIONS.find((q) => q.topic === id);
  return fromBank ? loc(lang, fromBank.topicLabel) : id;
}

/**
 * Diagnostic topic id → slug of a real, available lesson in
 * constants/lessonData.ts that covers it. Only topics with an actually
 * playable lesson (`available: true`) are mapped; the rest link to /learn.
 */
// Связь "тема диагностики → урок в /learn": если после теста у ученика
// слабая тема, отсюда берётся ссылка на конкретный урок для повторения.
export const TOPIC_LESSON_SLUGS: Record<string, string> = {
  'quadratic-equations': 'quadratic-equations',
  'linear-functions': 'linear-functions',
  'newton-second-law': 'newtons-laws',
  'present-perfect': 'present-perfect',
};

/**
 * Only the hardest (difficulty-3) questions of a subject — the grade-up
 * probe pool. Filtered by the same grade band as questionsForSubject; if
 * the band holds no difficulty-3 question, falls back to the subject's full
 * difficulty-3 set so probe mode never returns an empty pool.
 */
// Только самые сложные вопросы предмета — используются, чтобы проверить,
// не занижен ли класс ученика (проверка "на повышение" уровня).
export function hardQuestionsForSubject(
  subject: DiagnosticSubject,
  grade?: number,
): DiagnosticQuestion[] {
  const banded = questionsForSubject(subject, grade).filter((q) => q.difficulty === 3);
  if (banded.length > 0) return banded;
  return questionsForSubject(subject).filter((q) => q.difficulty === 3);
}
