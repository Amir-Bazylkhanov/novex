import type { Localized } from '../utils/i18n.ts';
import type { MentorRobotId } from '../components/robots/RobotAvatars.tsx';
import type { LessonSubject } from './lessonData.ts';

/**
 * The three /learn directions — one per mentor robot. Single source of truth
 * for direction names and the school subjects each direction owns: /learn
 * builds its mentor cards from here, /plan derives its hierarchy labels from
 * here at render time, and the academy catalog reuses the same names.
 *
 * Rebrand note: robots nov4/nov5/nov6 are displayed as NOV-01 Академик /
 * NOV-02 Практик / NOV-03 Кибер. The internal keys are kept for compatibility
 * with the career module — no displayed codes live in this file.
 */
// ============================================
// Три направления обучения на странице /learn — по одному на каждого
// робота-наставника. Это единый источник правды: отсюда берутся названия
// направлений и то, какие школьные предметы к какому направлению относятся.
// Используется на /learn (карточки наставников), /plan (заголовки разделов
// плана) и в каталоге Академии (constants/academy/catalog.ts).
// ============================================
// Одно направление: робот-наставник, его название и список школьных
// предметов, чьи уроки к нему относятся.
export interface LearnDirection {
  /** Mentor robot that leads this direction on /learn. */
  robot: MentorRobotId;
  name: Localized;
  /** School subjects whose Novex lessons live in this direction. */
  subjects: LessonSubject[];
}

export const LEARN_DIRECTIONS: LearnDirection[] = [
  {
    robot: 'nov4',
    name: {
      ru: 'Академическая база',
      kk: 'Академиялық негіз',
      en: 'Academic Foundation',
    },
    subjects: ['math', 'physics', 'english'],
  },
  {
    robot: 'nov5',
    name: { ru: 'Жизненные навыки', kk: 'Өмірлік дағдылар', en: 'Life Skills' },
    subjects: [],
  },
  {
    robot: 'nov6',
    name: { ru: 'Навыки будущего', kk: 'Болашақ дағдылары', en: 'Future Skills' },
    subjects: ['informatics'],
  },
];

/** Direction that owns a school subject; the academic base is the fallback. */
// Находит направление, которому принадлежит школьный предмет.
export const directionForSubject = (subject: string): LearnDirection =>
  LEARN_DIRECTIONS.find((direction) =>
    direction.subjects.includes(subject as LessonSubject),
  ) ?? LEARN_DIRECTIONS[0];

// Находит направление по роботу-наставнику, который его ведёт.
export const directionByRobot = (robot: MentorRobotId): LearnDirection =>
  LEARN_DIRECTIONS.find((direction) => direction.robot === robot) ?? LEARN_DIRECTIONS[0];
