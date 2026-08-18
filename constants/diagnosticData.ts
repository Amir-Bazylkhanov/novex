import { loc, type Lang, type Localized } from '../utils/i18n.ts';

/**
 * NOV-01 Диагност — question bank for the post-signup placement diagnostic.
 *
 * Three subjects (math, physics, english), five questions each, ordered
 * easy → hard inside every subject. The DiagnosticPage walks this list
 * adaptively: two correct answers in a row skip ahead to a harder question,
 * two wrong in a row drop back to an easier one. No question is ever repeated.
 *
 * Every answer key has been verified by hand — do not reorder options
 * without updating `correctIndex`.
 */

export type DiagnosticSubject = 'math' | 'physics' | 'english';
export type DiagnosticDifficulty = 1 | 2 | 3;
export type DiagnosticLevel = 'beginner' | 'intermediate' | 'advanced';

export interface DiagnosticQuestion {
  id: string;
  subject: DiagnosticSubject;
  /** Stable topic slug, stored in diagnostic_results.weak_topics / strong_topics. */
  topic: string;
  topicLabel: Localized;
  question: Localized;
  options: [Localized, Localized, Localized, Localized];
  correctIndex: number;
  difficulty: DiagnosticDifficulty;
}

export interface DiagnosticSubjectMeta {
  slug: DiagnosticSubject;
  label: Localized;
}

export const DIAGNOSTIC_SUBJECTS: DiagnosticSubjectMeta[] = [
  { slug: 'math', label: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
  { slug: 'physics', label: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
  { slug: 'english', label: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' } },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // -------------------------------------------------------------------------
  // math — easy → hard
  // -------------------------------------------------------------------------
  {
    id: 'math-linear-equation',
    subject: 'math',
    topic: 'linear-equations',
    topicLabel: {
      ru: 'Линейные уравнения',
      kk: 'Сызықтық теңдеулер',
      en: 'Linear equations',
    },
    question: {
      ru: 'Решите уравнение: 3x − 7 = 8',
      kk: 'Теңдеуді шешіңіз: 3x − 7 = 8',
      en: 'Solve the equation: 3x − 7 = 8',
    },
    options: [
      { ru: 'x = 5', kk: 'x = 5', en: 'x = 5' },
      { ru: 'x = 3', kk: 'x = 3', en: 'x = 3' },
      { ru: 'x = 7/3', kk: 'x = 7/3', en: 'x = 7/3' },
      { ru: 'x = 15', kk: 'x = 15', en: 'x = 15' },
    ],
    correctIndex: 0, // 3x = 15 → x = 5
    difficulty: 1,
  },
  {
    id: 'math-percentages',
    subject: 'math',
    topic: 'percentages',
    topicLabel: { ru: 'Проценты', kk: 'Пайыздар', en: 'Percentages' },
    question: {
      ru: 'Сколько будет 25% от 240?',
      kk: '240 санының 25%-ы нешеге тең?',
      en: 'What is 25% of 240?',
    },
    options: [
      { ru: '60', kk: '60', en: '60' },
      { ru: '24', kk: '24', en: '24' },
      { ru: '80', kk: '80', en: '80' },
      { ru: '96', kk: '96', en: '96' },
    ],
    correctIndex: 0, // 240 × 0.25 = 60
    difficulty: 1,
  },
  {
    id: 'math-quadratic',
    subject: 'math',
    topic: 'quadratic-equations',
    topicLabel: {
      ru: 'Квадратные уравнения',
      kk: 'Квадрат теңдеулер',
      en: 'Quadratic equations',
    },
    question: {
      ru: 'Решите уравнение: x² − 5x + 6 = 0',
      kk: 'Теңдеуді шешіңіз: x² − 5x + 6 = 0',
      en: 'Solve the equation: x² − 5x + 6 = 0',
    },
    options: [
      { ru: 'x = 2 и x = 3', kk: 'x = 2 және x = 3', en: 'x = 2 and x = 3' },
      { ru: 'x = −2 и x = −3', kk: 'x = −2 және x = −3', en: 'x = −2 and x = −3' },
      { ru: 'x = 1 и x = 6', kk: 'x = 1 және x = 6', en: 'x = 1 and x = 6' },
      { ru: 'x = −1 и x = −6', kk: 'x = −1 және x = −6', en: 'x = −1 and x = −6' },
    ],
    correctIndex: 0, // (x − 2)(x − 3) = x² − 5x + 6
    difficulty: 2,
  },
  {
    id: 'math-linear-function',
    subject: 'math',
    topic: 'linear-functions',
    topicLabel: {
      ru: 'Линейная функция',
      kk: 'Сызықтық функция',
      en: 'Linear functions',
    },
    question: {
      ru: 'Чему равен угловой коэффициент прямой y = −2x + 5?',
      kk: 'y = −2x + 5 түзуінің бұрыштық коэффициенті неге тең?',
      en: 'What is the slope of the line y = −2x + 5?',
    },
    options: [
      { ru: '−2', kk: '−2', en: '−2' },
      { ru: '5', kk: '5', en: '5' },
      { ru: '2', kk: '2', en: '2' },
      { ru: '0', kk: '0', en: '0' },
    ],
    correctIndex: 0, // y = kx + b, k = −2
    difficulty: 2,
  },
  {
    id: 'math-geometric-progression',
    subject: 'math',
    topic: 'geometric-progression',
    topicLabel: {
      ru: 'Геометрическая прогрессия',
      kk: 'Геометриялық прогрессия',
      en: 'Geometric progression',
    },
    question: {
      ru: 'В геометрической прогрессии b₁ = 3 и q = 2. Найдите b₅.',
      kk: 'Геометриялық прогрессияда b₁ = 3 және q = 2. b₅ мәнін табыңыз.',
      en: 'In a geometric progression b₁ = 3 and q = 2. Find b₅.',
    },
    options: [
      { ru: '48', kk: '48', en: '48' },
      { ru: '24', kk: '24', en: '24' },
      { ru: '96', kk: '96', en: '96' },
      { ru: '15', kk: '15', en: '15' },
    ],
    correctIndex: 0, // b₅ = 3 × 2⁴ = 48
    difficulty: 3,
  },

  // -------------------------------------------------------------------------
  // physics — easy → hard
  // -------------------------------------------------------------------------
  {
    id: 'physics-speed',
    subject: 'physics',
    topic: 'speed',
    topicLabel: { ru: 'Скорость', kk: 'Жылдамдық', en: 'Speed' },
    question: {
      ru: 'Автомобиль проехал 120 км за 2 часа. Какова его средняя скорость?',
      kk: 'Автокөлік 2 сағатта 120 км жол жүрді. Оның орташа жылдамдығы қандай?',
      en: 'A car travelled 120 km in 2 hours. What is its average speed?',
    },
    options: [
      { ru: '60 км/ч', kk: '60 км/сағ', en: '60 km/h' },
      { ru: '240 км/ч', kk: '240 км/сағ', en: '240 km/h' },
      { ru: '30 км/ч', kk: '30 км/сағ', en: '30 km/h' },
      { ru: '80 км/ч', kk: '80 км/сағ', en: '80 km/h' },
    ],
    correctIndex: 0, // v = 120 / 2 = 60
    difficulty: 1,
  },
  {
    id: 'physics-units',
    subject: 'physics',
    topic: 'units',
    topicLabel: {
      ru: 'Единицы измерения',
      kk: 'Өлшем бірліктері',
      en: 'Units of measurement',
    },
    question: {
      ru: 'В каких единицах измеряется сила в системе СИ?',
      kk: 'SI жүйесінде күш қандай бірлікпен өлшенеді?',
      en: 'In which unit is force measured in the SI system?',
    },
    options: [
      { ru: 'Ньютон (Н)', kk: 'Ньютон (Н)', en: 'Newton (N)' },
      { ru: 'Джоуль (Дж)', kk: 'Джоуль (Дж)', en: 'Joule (J)' },
      { ru: 'Ватт (Вт)', kk: 'Ватт (Вт)', en: 'Watt (W)' },
      { ru: 'Паскаль (Па)', kk: 'Паскаль (Па)', en: 'Pascal (Pa)' },
    ],
    correctIndex: 0,
    difficulty: 1,
  },
  {
    id: 'physics-newton-second-law',
    subject: 'physics',
    topic: 'newton-second-law',
    topicLabel: {
      ru: 'Второй закон Ньютона',
      kk: 'Ньютонның екінші заңы',
      en: "Newton's second law",
    },
    question: {
      ru: 'Тело массой 4 кг движется с ускорением 3 м/с². Какая сила действует на тело?',
      kk: 'Массасы 4 кг дене 3 м/с² үдеумен қозғалады. Денеге қандай күш әсер етеді?',
      en: 'A body of mass 4 kg moves with an acceleration of 3 m/s². What force acts on it?',
    },
    options: [
      { ru: '12 Н', kk: '12 Н', en: '12 N' },
      { ru: '7 Н', kk: '7 Н', en: '7 N' },
      { ru: '0,75 Н', kk: '0,75 Н', en: '0.75 N' },
      { ru: '48 Н', kk: '48 Н', en: '48 N' },
    ],
    correctIndex: 0, // F = ma = 4 × 3 = 12
    difficulty: 2,
  },
  {
    id: 'physics-ohm-law',
    subject: 'physics',
    topic: 'ohm-law',
    topicLabel: { ru: 'Закон Ома', kk: 'Ом заңы', en: "Ohm's law" },
    question: {
      ru: 'Напряжение на участке цепи 12 В, сопротивление 4 Ом. Чему равна сила тока?',
      kk: 'Тізбек учаскесіндегі кернеу 12 В, кедергісі 4 Ом. Ток күші неге тең?',
      en: 'The voltage across a circuit is 12 V and the resistance is 4 Ω. What is the current?',
    },
    options: [
      { ru: '3 А', kk: '3 А', en: '3 A' },
      { ru: '48 А', kk: '48 А', en: '48 A' },
      { ru: '8 А', kk: '8 А', en: '8 A' },
      { ru: '0,33 А', kk: '0,33 А', en: '0.33 A' },
    ],
    correctIndex: 0, // I = U / R = 12 / 4 = 3
    difficulty: 2,
  },
  {
    id: 'physics-kinetic-energy',
    subject: 'physics',
    topic: 'kinetic-energy',
    topicLabel: {
      ru: 'Кинетическая энергия',
      kk: 'Кинетикалық энергия',
      en: 'Kinetic energy',
    },
    question: {
      ru: 'Тело массой 2 кг движется со скоростью 3 м/с. Чему равна его кинетическая энергия?',
      kk: 'Массасы 2 кг дене 3 м/с жылдамдықпен қозғалады. Оның кинетикалық энергиясы неге тең?',
      en: 'A body of mass 2 kg moves at 3 m/s. What is its kinetic energy?',
    },
    options: [
      { ru: '9 Дж', kk: '9 Дж', en: '9 J' },
      { ru: '6 Дж', kk: '6 Дж', en: '6 J' },
      { ru: '18 Дж', kk: '18 Дж', en: '18 J' },
      { ru: '3 Дж', kk: '3 Дж', en: '3 J' },
    ],
    correctIndex: 0, // E = mv²/2 = 2 × 9 / 2 = 9
    difficulty: 3,
  },

  // -------------------------------------------------------------------------
  // english — easy → hard (exercise text stays in English in all languages)
  // -------------------------------------------------------------------------
  {
    id: 'english-present-simple',
    subject: 'english',
    topic: 'present-simple',
    topicLabel: { ru: 'Present Simple', kk: 'Present Simple', en: 'Present Simple' },
    question: {
      ru: 'She ___ to school every day.',
      kk: 'She ___ to school every day.',
      en: 'She ___ to school every day.',
    },
    options: [
      { ru: 'goes', kk: 'goes', en: 'goes' },
      { ru: 'go', kk: 'go', en: 'go' },
      { ru: 'going', kk: 'going', en: 'going' },
      { ru: 'went', kk: 'went', en: 'went' },
    ],
    correctIndex: 0, // third person singular
    difficulty: 1,
  },
  {
    id: 'english-past-simple',
    subject: 'english',
    topic: 'past-simple',
    topicLabel: { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
    question: {
      ru: 'Yesterday we ___ a football match.',
      kk: 'Yesterday we ___ a football match.',
      en: 'Yesterday we ___ a football match.',
    },
    options: [
      { ru: 'watched', kk: 'watched', en: 'watched' },
      { ru: 'watch', kk: 'watch', en: 'watch' },
      { ru: 'watches', kk: 'watches', en: 'watches' },
      { ru: 'watching', kk: 'watching', en: 'watching' },
    ],
    correctIndex: 0, // yesterday → past simple
    difficulty: 1,
  },
  {
    id: 'english-present-perfect',
    subject: 'english',
    topic: 'present-perfect',
    topicLabel: { ru: 'Present Perfect', kk: 'Present Perfect', en: 'Present Perfect' },
    question: {
      ru: 'I ___ never ___ to Astana.',
      kk: 'I ___ never ___ to Astana.',
      en: 'I ___ never ___ to Astana.',
    },
    options: [
      { ru: 'have / been', kk: 'have / been', en: 'have / been' },
      { ru: 'has / been', kk: 'has / been', en: 'has / been' },
      { ru: 'did / be', kk: 'did / be', en: 'did / be' },
      { ru: 'have / was', kk: 'have / was', en: 'have / was' },
    ],
    correctIndex: 0, // present perfect: have + V3 (been)
    difficulty: 2,
  },
  {
    id: 'english-comparatives',
    subject: 'english',
    topic: 'comparatives',
    topicLabel: {
      ru: 'Сравнительная степень',
      kk: 'Салыстырмалы шырай',
      en: 'Comparatives',
    },
    question: {
      ru: 'This task is ___ than the last one.',
      kk: 'This task is ___ than the last one.',
      en: 'This task is ___ than the last one.',
    },
    options: [
      { ru: 'more difficult', kk: 'more difficult', en: 'more difficult' },
      { ru: 'difficulter', kk: 'difficulter', en: 'difficulter' },
      { ru: 'most difficult', kk: 'most difficult', en: 'most difficult' },
      { ru: 'much difficult', kk: 'much difficult', en: 'much difficult' },
    ],
    correctIndex: 0, // long adjectives form the comparative with "more"
    difficulty: 2,
  },
  {
    id: 'english-passive-voice',
    subject: 'english',
    topic: 'passive-voice',
    topicLabel: {
      ru: 'Пассивный залог',
      kk: 'Ырықсыз етіс',
      en: 'Passive voice',
    },
    question: {
      ru: 'The letter ___ yesterday.',
      kk: 'The letter ___ yesterday.',
      en: 'The letter ___ yesterday.',
    },
    options: [
      { ru: 'was written', kk: 'was written', en: 'was written' },
      { ru: 'wrote', kk: 'wrote', en: 'wrote' },
      { ru: 'is written', kk: 'is written', en: 'is written' },
      { ru: 'has written', kk: 'has written', en: 'has written' },
    ],
    correctIndex: 0, // past simple passive: was + V3
    difficulty: 3,
  },
];

/** Questions of one subject, sorted easy → hard. */
export function questionsForSubject(subject: DiagnosticSubject): DiagnosticQuestion[] {
  return DIAGNOSTIC_QUESTIONS.filter((q) => q.subject === subject);
}

/** Level thresholds: <50% beginner, 50–79% intermediate, ≥80% advanced. */
export function levelForScore(score: number, total: number): DiagnosticLevel {
  const ratio = total === 0 ? 0 : score / total;
  if (ratio < 0.5) return 'beginner';
  if (ratio < 0.8) return 'intermediate';
  return 'advanced';
}

export interface TopicStat {
  slug: string;
  label: Localized;
}

export interface SubjectResult {
  subject: DiagnosticSubject;
  label: Localized;
  score: number;
  total: number;
  level: DiagnosticLevel;
  weakTopics: TopicStat[];
  strongTopics: TopicStat[];
}

export interface AnswerRecord {
  questionId: string;
  subject: DiagnosticSubject;
  topic: string;
  topicLabel: Localized;
  correct: boolean;
}

/** Aggregate raw answers into one result row per subject. */
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
 * Localized names for every topic slug used in DIAGNOSTIC_QUESTIONS.
 * Slugs are stored raw in diagnostic_results.weak_topics / strong_topics,
 * so all UI must render them through this map.
 */
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
  // english
  'present-simple': { ru: 'Present Simple', kk: 'Present Simple', en: 'Present Simple' },
  'past-simple': { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
  'present-perfect': { ru: 'Present Perfect', kk: 'Present Perfect', en: 'Present Perfect' },
  comparatives: { ru: 'Сравнительная степень', kk: 'Салыстырмалы шырай', en: 'Comparatives' },
  'passive-voice': { ru: 'Пассивный залог', kk: 'Ырықсыз етіс', en: 'Passive voice' },
};

/** Localized display name for a topic slug; falls back to the raw id. */
export function topicName(lang: Lang, id: string): string {
  const known = TOPIC_NAMES[id];
  return known ? loc(lang, known) : id;
}

/**
 * Diagnostic topic id → slug of a real, available lesson in
 * constants/lessonData.ts that covers it. Only topics with an actually
 * playable lesson (`available: true`) are mapped; the rest link to /learn.
 */
export const TOPIC_LESSON_SLUGS: Record<string, string> = {
  'quadratic-equations': 'quadratic-equations',
  'linear-functions': 'linear-functions',
  'newton-second-law': 'newtons-laws',
  'present-perfect': 'present-perfect',
};

/** Only the hardest (difficulty-3) questions of a subject — the grade-up probe pool. */
export function hardQuestionsForSubject(subject: DiagnosticSubject): DiagnosticQuestion[] {
  return DIAGNOSTIC_QUESTIONS.filter((q) => q.subject === subject && q.difficulty === 3);
}
