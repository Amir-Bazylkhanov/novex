import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Brain,
  Briefcase,
  ClipboardCheck,
  Code,
  FlaskConical,
  GraduationCap,
  MessageCircle,
  Palette,
  Rocket,
  Timer,
  Wallet,
} from 'lucide-react';
import type { Lang, Localized } from '../../utils/i18n.ts';
import type { MentorRobotId } from '../../components/robots/RobotAvatars.tsx';
import { directionByRobot } from '../learnDirections.ts';
import type { LessonContent } from './lessonData.ts';
import { CORE_SCIENCES_FULL } from './lessons/core_sciences_full.ts';
import { APIB_FULL } from './lessons/apib_full.ts';
import { ADMISSION_EXAMS_FULL } from './lessons/admission_exams_full.ts';
import { RESEARCH_FULL } from './lessons/research_full.ts';
import { FINANCE_FULL } from './lessons/finance_full.ts';
import { COMMUNICATION_FULL } from './lessons/communication_full.ts';
import { PSYCHOLOGY_FULL } from './lessons/psychology_full.ts';
import { PRODUCTIVITY_FULL } from './lessons/productivity_full.ts';
import { PROGRAMMING_FULL } from './lessons/programming_full.ts';
import { ENTREPRENEURSHIP_FULL } from './lessons/entrepreneurship_full.ts';
import { CREATIVITY_FULL } from './lessons/creativity_full.ts';
import { CAREER_FULL } from './lessons/career_full.ts';

// ============================================
// Каталог «Академии» (не путать с уроками /learn): три направления (по одному
// роботу-наставнику на каждое), в каждом — по несколько «планет» (модулей).
// Сам учебный контент планет лежит в файлах constants/academy/lessons/*.ts и
// здесь не меняется — этот файл только собирает планеты в каталог и содержит
// вспомогательные функции: поиск планеты по slug, разбивка уровней на
// beginner/intermediate/advanced, выбор нужного языка у текста урока.
// ============================================
/* Учебная программа Академии Novex: three directions (the three
   mentor robots) with four modules each. Every module carries the full
   grade-keyed LessonContent records — content itself lives
   in ./lessons and is not modified here. */

/* Internal ids stay 'nov04'|'nov05'|'nov06' for compatibility (career module,
   ProfilePage); the displayed codes are NOV-01 Академик / NOV-02 Практик /
   NOV-03 Кибер. */
export type AcademyDirectionId = 'nov04' | 'nov05' | 'nov06';

// Одно направление Академии (например, «Академическая база») — своё имя и
// робот-наставник, который его ведёт.
export interface AcademyDirection {
  id: AcademyDirectionId;
  /** Mentor robot that leads this direction on /learn. */
  robot: MentorRobotId;
  name: Localized;
}

// Одна «планета» (модуль) внутри направления — например, «Точные науки».
// Хранит своё название, иконку и весь урочный контент по классам (lessons).
export interface AcademyPlanet {
  slug: string;
  directionId: AcademyDirectionId;
  name: Localized;
  icon: LucideIcon;
  /** Grade-keyed content, e.g. "Core Sciences_8" … "Core Sciences_12". */
  lessons: Record<string, LessonContent>;
}

export type AcademySection = LessonContent['sections'][number];

export const ACADEMY_DIRECTIONS: AcademyDirection[] = [
  { id: 'nov04', robot: 'nov4', name: directionByRobot('nov4').name },
  { id: 'nov05', robot: 'nov5', name: directionByRobot('nov5').name },
  { id: 'nov06', robot: 'nov6', name: directionByRobot('nov6').name },
];

export const ACADEMY_PLANETS: AcademyPlanet[] = [
  // NOV-01 · Академическая база
  {
    slug: 'core_sciences',
    directionId: 'nov04',
    name: { ru: 'Точные науки', kk: 'Дәл ғылымдар', en: 'Core Sciences' },
    icon: Atom,
    lessons: CORE_SCIENCES_FULL,
  },
  {
    slug: 'apib',
    directionId: 'nov04',
    name: { ru: 'AP/IB', kk: 'AP/IB', en: 'AP / IB' },
    icon: GraduationCap,
    lessons: APIB_FULL,
  },
  {
    slug: 'admission_exams',
    directionId: 'nov04',
    name: {
      ru: 'Экзамены и поступление',
      kk: 'Емтихандар және түсу',
      en: 'Admission Exams',
    },
    icon: ClipboardCheck,
    lessons: ADMISSION_EXAMS_FULL,
  },
  {
    slug: 'research',
    directionId: 'nov04',
    name: { ru: 'Исследования', kk: 'Зерттеулер', en: 'Research' },
    icon: FlaskConical,
    lessons: RESEARCH_FULL,
  },
  // NOV-02 · Жизненные навыки
  {
    slug: 'finance',
    directionId: 'nov05',
    name: {
      ru: 'Финансовая грамотность',
      kk: 'Қаржы сауаттылығы',
      en: 'Finance & Investing',
    },
    icon: Wallet,
    lessons: FINANCE_FULL,
  },
  {
    slug: 'communication',
    directionId: 'nov05',
    name: { ru: 'Коммуникация', kk: 'Коммуникация', en: 'Communication & Leadership' },
    icon: MessageCircle,
    lessons: COMMUNICATION_FULL,
  },
  {
    slug: 'psychology',
    directionId: 'nov05',
    name: { ru: 'Психология', kk: 'Психология', en: 'Psychology' },
    icon: Brain,
    lessons: PSYCHOLOGY_FULL,
  },
  {
    slug: 'productivity',
    directionId: 'nov05',
    name: { ru: 'Продуктивность', kk: 'Өнімділік', en: 'Productivity' },
    icon: Timer,
    lessons: PRODUCTIVITY_FULL,
  },
  // NOV-03 · Навыки будущего
  {
    slug: 'programming',
    directionId: 'nov06',
    name: { ru: 'Программирование', kk: 'Бағдарламалау', en: 'Programming & AI' },
    icon: Code,
    lessons: PROGRAMMING_FULL,
  },
  {
    slug: 'entrepreneurship',
    directionId: 'nov06',
    name: { ru: 'Предпринимательство', kk: 'Кәсіпкерлік', en: 'Entrepreneurship' },
    icon: Rocket,
    lessons: ENTREPRENEURSHIP_FULL,
  },
  {
    slug: 'creativity',
    directionId: 'nov06',
    name: { ru: 'Креативность', kk: 'Шығармашылық', en: 'Creativity' },
    icon: Palette,
    lessons: CREATIVITY_FULL,
  },
  {
    slug: 'career',
    directionId: 'nov06',
    name: { ru: 'Карьера', kk: 'Мансап', en: 'Career' },
    icon: Briefcase,
    lessons: CAREER_FULL,
  },
];

// Найти планету по её slug (короткому текстовому идентификатору в URL).
export const planetBySlug = (slug: string): AcademyPlanet | undefined =>
  ACADEMY_PLANETS.find((p) => p.slug === slug);

/** True for the Академическая база direction (core sciences, AP/IB, admission
    exams, research) — the only modules where grade-style level framing (8–12
    класс) is used. Every module under Жизненные навыки / Навыки будущего is
    non-academic and presents levels as beginner/intermediate/advanced bands
    instead (see `LevelBand` / `bandForIndex` below). */
export const isAcademicPlanet = (planet: AcademyPlanet): boolean => planet.directionId === 'nov04';

// Три «полосы» сложности для немодульных (неакадемических) направлений —
// вместо привычных классов 8–12 там показывают уровень новичок/средний/продвинутый.
export type LevelBand = 'beginner' | 'intermediate' | 'advanced';

/** Splits a module's N sections into three even bands (thirds) — the
    presentation-layer grouping non-academic modules use in place of grade
    framing. Section content itself is untouched; this only decides which
    band label a given section index falls under. */
// Делит N секций модуля на три равные трети — так решается, какой ярлык
// сложности (beginner/intermediate/advanced) получит секция с данным индексом.
export const bandForIndex = (index: number, total: number): LevelBand => {
  if (total <= 1) return 'beginner';
  const third = total / 3;
  if (index < third) return 'beginner';
  if (index < third * 2) return 'intermediate';
  return 'advanced';
};

// Все планеты, которые ведёт данный робот-наставник.
export const planetsByRobot = (robot: MentorRobotId): AcademyPlanet[] => {
  const direction = ACADEMY_DIRECTIONS.find((d) => d.robot === robot);
  return direction ? ACADEMY_PLANETS.filter((p) => p.directionId === direction.id) : [];
};

// Найти направление по его id (с запасным вариантом на случай ошибки данных).
export const directionById = (id: AcademyDirectionId): AcademyDirection =>
  ACADEMY_DIRECTIONS.find((d) => d.id === id) ?? ACADEMY_DIRECTIONS[0];

/** Pick the grade-keyed entry that matches the student's grade, else the first one. */
// Достаёт из lessons контент под класс ученика (ключи вида "Название_8",
// "Название_9" и т.д.); если подходящего класса нет — берёт первый попавшийся.
export const pickGradeContent = (
  lessons: Record<string, LessonContent>,
  grade: number | null,
): LessonContent | undefined => {
  const entries = Object.entries(lessons);
  if (grade !== null) {
    const hit = entries.find(([key]) => key.endsWith(`_${grade}`));
    if (hit) return hit[1];
  }
  return entries[0]?.[1];
};

/**
 * Pick the language variant of a tri-lingual lesson field: en is the base
 * field, ru the *Ru variant, kk the *Kk variant with a fallback to Russian
 * (the academy data has full kk coverage on sections but not everywhere).
 */
// Выбирает нужный языковой вариант текста урока: en — основной, ru — русский,
// kk — казахский (если казахского текста нет, показывает русский).
export const pickLangField = (lang: Lang, en: string, ru: string, kk?: string): string => {
  if (lang === 'en') return en;
  if (lang === 'ru') return ru;
  return kk && kk.trim().length > 0 ? kk : ru;
};

/**
 * Like pickLangField, but for optional localized variants (answerRu/answerKk,
 * hintRu/hintKk): ru falls back to en, kk falls back to ru then en.
 */
// То же самое, но для необязательных полей (ответ/подсказка есть не всегда):
// ru при отсутствии откатывается на en, kk — на ru, потом на en.
export const pickLangFieldOptional = (
  lang: Lang,
  en: string,
  ru?: string,
  kk?: string,
): string => {
  const present = (value?: string): value is string => !!value && value.trim().length > 0;
  if (lang === 'en') return en;
  if (lang === 'ru') return present(ru) ? ru : en;
  if (present(kk)) return kk;
  return present(ru) ? ru : en;
};
