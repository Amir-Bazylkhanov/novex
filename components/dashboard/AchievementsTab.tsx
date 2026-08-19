import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  Calculator,
  CalendarCheck,
  Cog,
  Flame,
  Footprints,
  GraduationCap,
  Lock,
  Rocket,
  ShoppingCart,
  Star,
  Target,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

/* --- content --- */

const SECTION_TITLE: Localized = { ru: 'Достижения', kk: 'Жетістіктер', en: 'Achievements' };
const LOCKED_LABEL: Localized = { ru: 'Заблокировано', kk: 'Құлыпталған', en: 'Locked' };

/* --- data --- */

export interface AchievementData {
  lessonsDone: number;
  totalXp: number;
  hasDiagnostic: boolean;
  hasGoal: boolean;
  hasPlan: boolean;
  hasTeacherModules: boolean;
  novasEarned: number;
  novasSpent: number;
  distinctLessonDays: number;
  profileCreatedAt: string | null;
}

interface AchievementDef {
  id: string;
  Icon: LucideIcon;
  title: Localized;
  desc: Localized;
  earned: (data: AchievementData) => boolean;
}

/* Early adopters: profiles created before the 2026 school year starts. */
const PIONEER_CUTOFF = new Date('2026-09-01T00:00:00');

const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: 'first_steps',
    Icon: Footprints,
    title: { ru: 'Первые шаги', kk: 'Алғашқы қадамдар', en: 'First steps' },
    desc: { ru: 'Заверши первый урок', kk: 'Алғашқы сабақты аяқта', en: 'Finish your first lesson' },
    earned: (d) => d.lessonsDone >= 1,
  },
  {
    id: 'solver',
    Icon: Calculator,
    title: { ru: 'Решатель', kk: 'Шешуші', en: 'Problem solver' },
    desc: { ru: 'Заверши 3 урока', kk: '3 сабақты аяқта', en: 'Complete 3 lessons' },
    earned: (d) => d.lessonsDone >= 3,
  },
  {
    id: 'all_lessons',
    Icon: Trophy,
    title: { ru: 'Все уроки', kk: 'Барлық сабақтар', en: 'All lessons' },
    desc: {
      ru: 'Заверши все 5 уроков',
      kk: 'Барлық 5 сабақты аяқта',
      en: 'Complete all 5 lessons',
    },
    earned: (d) => d.lessonsDone >= 5,
  },
  {
    id: 'xp_1000',
    Icon: Star,
    title: { ru: '1000 XP', kk: '1000 XP', en: '1000 XP' },
    desc: { ru: 'Набери 1000 XP', kk: '1000 XP жина', en: 'Earn 1000 XP' },
    earned: (d) => d.totalXp >= 1000,
  },
  {
    id: 'diagnostic',
    Icon: Activity,
    title: { ru: 'Диагностика', kk: 'Диагностика', en: 'Diagnostic' },
    desc: {
      ru: 'Пройди диагностику уровня',
      kk: 'Деңгей диагностикасынан өт',
      en: 'Take the level diagnostic',
    },
    earned: (d) => d.hasDiagnostic,
  },
  {
    id: 'goal_set',
    Icon: Target,
    title: { ru: 'Цель поставлена', kk: 'Мақсат қойылды', en: 'Goal set' },
    desc: {
      ru: 'Выбери цель обучения в профиле',
      kk: 'Профильде оқу мақсатын таңда',
      en: 'Set a learning goal in your profile',
    },
    earned: (d) => d.hasGoal,
  },
  {
    id: 'planner',
    Icon: CalendarCheck,
    title: { ru: 'Планировщик', kk: 'Жоспарлаушы', en: 'Planner' },
    desc: {
      ru: 'Создай план подготовки от NOV-01',
      kk: 'NOV-01 дайындық жоспарын құр',
      en: 'Create a prep plan from NOV-01',
    },
    earned: (d) => d.hasPlan,
  },
  {
    id: 'first_earn',
    Icon: Cog,
    title: { ru: 'Первый заработок', kk: 'Алғашқы табыс', en: 'First earnings' },
    desc: {
      ru: 'Заработай первые новасы',
      kk: 'Алғашқы новастарыңды тап',
      en: 'Earn your first novas',
    },
    earned: (d) => d.novasEarned > 0,
  },
  {
    id: 'spender',
    Icon: ShoppingCart,
    title: { ru: 'Транжира', kk: 'Ысырапкер', en: 'Spender' },
    desc: {
      ru: 'Потрать новасы на чат с Академиком',
      kk: 'Новастарды Академикпен чатқа жұмса',
      en: 'Spend novas on a chat with the Academic',
    },
    earned: (d) => d.novasSpent > 0,
  },
  {
    id: 'streak_3',
    Icon: Flame,
    title: { ru: 'Серия 3', kk: '3 күн қатарынан', en: '3-day streak' },
    desc: {
      ru: 'Завершай уроки в 3 разных дня',
      kk: '3 түрлі күні сабақ аяқта',
      en: 'Complete lessons on 3 different days',
    },
    earned: (d) => d.distinctLessonDays >= 3,
  },
  {
    id: 'teacher_near',
    Icon: GraduationCap,
    title: { ru: 'Учитель рядом', kk: 'Мұғалім қасыңда', en: 'Teacher nearby' },
    desc: {
      ru: 'Учитель добавил учебный модуль',
      kk: 'Мұғалім оқу модулін қосты',
      en: 'A teacher added a study module',
    },
    earned: (d) => d.hasTeacherModules,
  },
  {
    id: 'pioneer',
    Icon: Rocket,
    title: { ru: 'Пионер', kk: 'Пионер', en: 'Pioneer' },
    desc: {
      ru: 'Присоединился до 1 сентября 2026',
      kk: '2026 жылғы 1 қыркүйекке дейін қосылдың',
      en: 'Joined before September 1, 2026',
    },
    earned: (d) =>
      d.profileCreatedAt !== null && new Date(d.profileCreatedAt) < PIONEER_CUTOFF,
  },
];

/* --- shared classes --- */

const HEADING_ICON = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg';

const AchievementsTab: React.FC<{ data: AchievementData }> = ({ data }) => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const earnedCount = ACHIEVEMENTS.filter((a) => a.earned(data)).length;

  return (
    <section aria-labelledby="achievements-heading" className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`${HEADING_ICON} bg-teal/10`}>
            <Trophy className="h-5 w-5 text-teal" aria-hidden="true" />
          </span>
          <h2
            id="achievements-heading"
            className="font-display text-xl font-bold tracking-tight text-ink"
          >
            {loc(language, SECTION_TITLE)}
          </h2>
        </div>
        <span className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-slateink">
          {earnedCount} / {ACHIEVEMENTS.length}
        </span>
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {ACHIEVEMENTS.map((achievement, index) => {
          const earned = achievement.earned(data);
          return (
            <motion.li
              key={achievement.id}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              className={`relative flex flex-col items-start gap-2 rounded-xl border p-4 ${
                earned ? 'border-teal bg-mist/30' : 'border-line bg-white'
              }`}
            >
              {!earned && (
                <span
                  className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-canvas"
                  title={loc(language, LOCKED_LABEL)}
                >
                  <Lock className="h-3 w-3 text-slateink" aria-hidden="true" />
                  <span className="sr-only">{loc(language, LOCKED_LABEL)}</span>
                </span>
              )}
              <achievement.Icon
                className={`h-6 w-6 ${earned ? 'text-teal' : 'text-slateink'}`}
                aria-hidden="true"
              />
              <span
                className={`text-sm font-semibold ${earned ? 'text-ink' : 'text-slateink'}`}
              >
                {loc(language, achievement.title)}
              </span>
              <span className="text-xs leading-relaxed text-slateink">
                {loc(language, achievement.desc)}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default AchievementsTab;
