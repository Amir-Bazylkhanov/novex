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

/* The Locus Academy curriculum ported into Novex: three directions (the three
   mentor robots) with four planets each. Every planet carries the full
   grade-keyed LessonContent records copied from Locus — content itself lives
   in ./lessons and is not modified here. */

export type AcademyDirectionId = 'nov04' | 'nov05' | 'nov06';

export interface AcademyDirection {
  id: AcademyDirectionId;
  /** Mentor robot that leads this direction on /learn. */
  robot: MentorRobotId;
  name: Localized;
}

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
  // NOV-04 · Академическая база
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
  // NOV-05 · Жизненные навыки
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
  // NOV-06 · Навыки будущего
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

export const planetBySlug = (slug: string): AcademyPlanet | undefined =>
  ACADEMY_PLANETS.find((p) => p.slug === slug);

export const planetsByRobot = (robot: MentorRobotId): AcademyPlanet[] => {
  const direction = ACADEMY_DIRECTIONS.find((d) => d.robot === robot);
  return direction ? ACADEMY_PLANETS.filter((p) => p.directionId === direction.id) : [];
};

export const directionById = (id: AcademyDirectionId): AcademyDirection =>
  ACADEMY_DIRECTIONS.find((d) => d.id === id) ?? ACADEMY_DIRECTIONS[0];

/** Pick the grade-keyed entry that matches the student's grade, else the first one. */
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
export const pickLangField = (lang: Lang, en: string, ru: string, kk?: string): string => {
  if (lang === 'en') return en;
  if (lang === 'ru') return ru;
  return kk && kk.trim().length > 0 ? kk : ru;
};
