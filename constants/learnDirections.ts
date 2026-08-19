import type { Localized } from '../utils/i18n.ts';
import type { MentorRobotId } from '../components/robots/RobotAvatars.tsx';
import type { LessonSubject } from './lessonData.ts';

/**
 * The three /learn directions — one per mentor robot. Single source of truth
 * for direction names and the school subjects each direction owns: /learn
 * builds its mentor cards from here, /plan derives its hierarchy labels from
 * here at render time, and the academy catalog reuses the same names.
 */
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
export const directionForSubject = (subject: string): LearnDirection =>
  LEARN_DIRECTIONS.find((direction) =>
    direction.subjects.includes(subject as LessonSubject),
  ) ?? LEARN_DIRECTIONS[0];

export const directionByRobot = (robot: MentorRobotId): LearnDirection =>
  LEARN_DIRECTIONS.find((direction) => direction.robot === robot) ?? LEARN_DIRECTIONS[0];
