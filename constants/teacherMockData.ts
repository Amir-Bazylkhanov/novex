import type { Localized } from '../utils/i18n.ts';

/**
 * NOV-03 Куратор — DEMO class roster for the teacher panel (MVP requirement F).
 *
 * IMPORTANT: this is mock data. There is no multi-user class table in the
 * database, and RLS correctly prevents one user reading another's rows, so a
 * real class roster cannot be loaded yet. The hackathon brief explicitly
 * allows demo data here — TeacherPage labels it as «Демо-данные класса».
 *
 * The data is internally consistent: `needsHelp` is true exactly for students
 * whose overall average is below 55, and each student's weak topics sit in
 * their lowest-scoring subjects.
 */

export type SubjectSlug = 'math' | 'physics' | 'english';

export interface SubjectMeta {
  slug: SubjectSlug;
  label: Localized;
}

export const SUBJECTS: SubjectMeta[] = [
  { slug: 'math', label: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
  { slug: 'physics', label: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
  { slug: 'english', label: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' } },
];

/** Topic slug → localized label, shared by weak-topic chips and the chart. */
export const TOPIC_LABELS: Record<string, Localized> = {
  percentages: { ru: 'Проценты', kk: 'Пайыздар', en: 'Percentages' },
  'linear-equations': {
    ru: 'Линейные уравнения',
    kk: 'Сызықтық теңдеулер',
    en: 'Linear equations',
  },
  'quadratic-equations': {
    ru: 'Квадратные уравнения',
    kk: 'Квадрат теңдеулер',
    en: 'Quadratic equations',
  },
  trigonometry: { ru: 'Тригонометрия', kk: 'Тригонометрия', en: 'Trigonometry' },
  'geometry-basics': {
    ru: 'Геометрия: основы',
    kk: 'Геометрия: негіздері',
    en: 'Geometry basics',
  },
  kinematics: { ru: 'Кинематика', kk: 'Кинематика', en: 'Kinematics' },
  'newtons-laws': {
    ru: 'Законы Ньютона',
    kk: 'Ньютон заңдары',
    en: 'Newton’s laws',
  },
  electricity: { ru: 'Электрический ток', kk: 'Электр тогы', en: 'Electric current' },
  'grammar-tenses': {
    ru: 'Времена глагола',
    kk: 'Етістік шақтары',
    en: 'Verb tenses',
  },
  vocabulary: { ru: 'Лексика', kk: 'Сөздік қор', en: 'Vocabulary' },
  reading: {
    ru: 'Чтение и понимание',
    kk: 'Оқу және түсіну',
    en: 'Reading comprehension',
  },
};

export interface TeacherStudent {
  id: string;
  name: Localized;
  grade: number;
  /** Per-subject progress, 0–100. */
  progress: Record<SubjectSlug, number>;
  lastActive: Localized;
  /** Topic slugs, keys of TOPIC_LABELS. */
  weakTopics: string[];
  /** Consistent with progress: true ⇔ overall average < 55. */
  needsHelp: boolean;
}

export const CLASS_LABEL: Localized = {
  ru: '9 «Б» класс',
  kk: '9 «Б» сынып',
  en: 'Grade 9 “B”',
};

const LAST_ACTIVE = {
  today: { ru: 'сегодня', kk: 'бүгін', en: 'today' },
  yesterday: { ru: 'вчера', kk: 'кеше', en: 'yesterday' },
  days3: { ru: '3 дня назад', kk: '3 күн бұрын', en: '3 days ago' },
  days4: { ru: '4 дня назад', kk: '4 күн бұрын', en: '4 days ago' },
  week: { ru: 'неделю назад', kk: 'бір апта бұрын', en: 'a week ago' },
} as const;

export const TEACHER_STUDENTS: TeacherStudent[] = [
  {
    id: 'st-aigerim',
    name: { ru: 'Айгерим Сейтова', kk: 'Айгерім Сейтова', en: 'Aigerim Seitova' },
    grade: 9,
    progress: { math: 88, physics: 82, english: 91 },
    lastActive: LAST_ACTIVE.today,
    weakTopics: [],
    needsHelp: false,
  },
  {
    id: 'st-timur',
    name: { ru: 'Тимур Ким', kk: 'Тимур Ким', en: 'Timur Kim' },
    grade: 9,
    progress: { math: 72, physics: 68, english: 75 },
    lastActive: LAST_ACTIVE.yesterday,
    weakTopics: ['kinematics'],
    needsHelp: false,
  },
  {
    id: 'st-dinara',
    name: { ru: 'Динара Жумабаева', kk: 'Динара Жұмабаева', en: 'Dinara Zhumabayeva' },
    grade: 9,
    progress: { math: 54, physics: 47, english: 62 },
    lastActive: LAST_ACTIVE.today,
    weakTopics: ['quadratic-equations', 'newtons-laws'],
    needsHelp: true,
  },
  {
    id: 'st-erasyl',
    name: { ru: 'Ерасыл Бекенов', kk: 'Ерасыл Бекенов', en: 'Erasyl Bekenov' },
    grade: 9,
    progress: { math: 38, physics: 34, english: 41 },
    lastActive: LAST_ACTIVE.days4,
    weakTopics: ['trigonometry', 'linear-equations', 'kinematics'],
    needsHelp: true,
  },
  {
    id: 'st-alexandra',
    name: { ru: 'Александра Павлова', kk: 'Александра Павлова', en: 'Alexandra Pavlova' },
    grade: 9,
    progress: { math: 81, physics: 77, english: 84 },
    lastActive: LAST_ACTIVE.today,
    weakTopics: [],
    needsHelp: false,
  },
  {
    id: 'st-nurbolat',
    name: { ru: 'Нурболат Оспанов', kk: 'Нұрболат Оспанов', en: 'Nurbolat Ospanov' },
    grade: 9,
    progress: { math: 63, physics: 58, english: 55 },
    lastActive: LAST_ACTIVE.yesterday,
    weakTopics: ['percentages', 'vocabulary'],
    needsHelp: false,
  },
  {
    id: 'st-madina',
    name: { ru: 'Мадина Ахметова', kk: 'Мәдина Ахметова', en: 'Madina Akhmetova' },
    grade: 9,
    progress: { math: 77, physics: 73, english: 80 },
    lastActive: LAST_ACTIVE.today,
    weakTopics: ['kinematics'],
    needsHelp: false,
  },
  {
    id: 'st-ivan',
    name: { ru: 'Иван Соколов', kk: 'Иван Соколов', en: 'Ivan Sokolov' },
    grade: 9,
    progress: { math: 45, physics: 52, english: 48 },
    lastActive: LAST_ACTIVE.days3,
    weakTopics: ['trigonometry', 'grammar-tenses'],
    needsHelp: true,
  },
  {
    id: 'st-aruzhan',
    name: { ru: 'Аружан Кайраткызы', kk: 'Аружан Қайратқызы', en: 'Aruzhan Kairatkyzy' },
    grade: 9,
    progress: { math: 92, physics: 86, english: 89 },
    lastActive: LAST_ACTIVE.yesterday,
    weakTopics: [],
    needsHelp: false,
  },
  {
    id: 'st-dmitriy',
    name: { ru: 'Дмитрий Ли', kk: 'Дмитрий Ли', en: 'Dmitriy Li' },
    grade: 9,
    progress: { math: 58, physics: 61, english: 53 },
    lastActive: LAST_ACTIVE.today,
    weakTopics: ['vocabulary', 'quadratic-equations'],
    needsHelp: false,
  },
  {
    id: 'st-saltanat',
    name: { ru: 'Салтанат Ермекова', kk: 'Салтанат Ермекова', en: 'Saltanat Yermekova' },
    grade: 9,
    progress: { math: 70, physics: 74, english: 66 },
    lastActive: LAST_ACTIVE.yesterday,
    weakTopics: ['reading'],
    needsHelp: false,
  },
  {
    id: 'st-arman',
    name: { ru: 'Арман Тулегенов', kk: 'Арман Төлегенов', en: 'Arman Tolegenov' },
    grade: 9,
    progress: { math: 41, physics: 39, english: 44 },
    lastActive: LAST_ACTIVE.week,
    weakTopics: ['trigonometry', 'kinematics', 'grammar-tenses'],
    needsHelp: true,
  },
];

/**
 * Class-level average per topic. The NOV-03 «Требуют внимания» card stays
 * topic-based (uses this order for tie-breaking); the bar chart shows the
 * per-subject averages derived in CLASS_SUBJECT_PERFORMANCE below.
 */
export const CLASS_TOPIC_PERFORMANCE: Array<{ slug: string; pct: number }> = [
  { slug: 'percentages', pct: 72 },
  { slug: 'linear-equations', pct: 76 },
  { slug: 'quadratic-equations', pct: 58 },
  { slug: 'trigonometry', pct: 41 },
  { slug: 'geometry-basics', pct: 48 },
  { slug: 'kinematics', pct: 64 },
  { slug: 'electricity', pct: 70 },
  { slug: 'grammar-tenses', pct: 52 },
  { slug: 'vocabulary', pct: 68 },
];

/** Which demo topics roll up into each subject for the chart. */
const SUBJECT_TOPICS: Record<SubjectSlug, string[]> = {
  math: ['percentages', 'linear-equations', 'quadratic-equations', 'trigonometry', 'geometry-basics'],
  physics: ['kinematics', 'electricity'],
  english: ['grammar-tenses', 'vocabulary'],
};

/**
 * Class-level average per subject — drives the «Успеваемость по предметам»
 * bar chart. Each value is the average of the subject's demo topic scores
 * above. Below 60 renders coral.
 */
export const CLASS_SUBJECT_PERFORMANCE: Array<{
  slug: SubjectSlug;
  label: Localized;
  pct: number;
}> = SUBJECTS.map(({ slug, label }) => {
  const topics = SUBJECT_TOPICS[slug];
  const total = topics.reduce(
    (sum, topic) => sum + (CLASS_TOPIC_PERFORMANCE.find((entry) => entry.slug === topic)?.pct ?? 0),
    0,
  );
  return { slug, label, pct: Math.round(total / topics.length) };
});

/** Weekly class activity summary (demo values). */
export const WEEK_STATS = {
  lessonsCompleted: 7,
  avgMinutes: 34,
} as const;

export interface ClassModule {
  id: string;
  title: Localized;
  subject: SubjectSlug;
  grade: number;
  description: Localized;
}

/** Seeded modules; modules the teacher adds live in TeacherPage state only. */
export const INITIAL_MODULES: ClassModule[] = [
  {
    id: 'mod-trig-revision',
    title: {
      ru: 'Тригонометрия: повторение',
      kk: 'Тригонометрия: қайталау',
      en: 'Trigonometry: revision',
    },
    subject: 'math',
    grade: 9,
    description: {
      ru: 'Основные тождества и задачи в формате ЕНТ — для учеников, которым тема даётся тяжело.',
      kk: 'Негізгі тепе-теңдіктер мен ҰБТ форматындағы есептер — тақырып қиындық тудырған оқушыларға арналған.',
      en: 'Core identities and UNT-style problems — for students finding the topic hard.',
    },
  },
  {
    id: 'mod-kinematics',
    title: {
      ru: 'Кинематика: задачи на движение',
      kk: 'Кинематика: қозғалысқа есептер',
      en: 'Kinematics: motion problems',
    },
    subject: 'physics',
    grade: 9,
    description: {
      ru: 'Равноускоренное движение: от простых задач к комбинированным.',
      kk: 'Үдемелі қозғалыс: жай есептерден күрделі есептерге дейін.',
      en: 'Uniformly accelerated motion: from simple to combined problems.',
    },
  },
];
