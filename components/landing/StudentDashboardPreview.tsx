import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Award,
  BarChart3,
  CalendarClock,
  Flame,
  LayoutDashboard,
  Target,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { GearDecor } from '../robots/RobotAvatars.tsx';

const BADGE: Localized = {
  ru: 'Кабинет ученика',
  kk: 'Оқушы кабинеті',
  en: 'Student dashboard',
};

const TITLE_BEFORE: Localized = {
  ru: 'Прогресс, слабые места и цель — на ',
  kk: 'Үдеріс, әлсіз тұстар және мақсат — ',
  en: 'Progress, weak spots and the goal — on ',
};
const TITLE_ACCENT: Localized = { ru: 'одном', kk: 'бір', en: 'one' };
const TITLE_AFTER: Localized = {
  ru: ' экране',
  kk: ' экранда',
  en: ' screen',
};

const SUBTITLE: Localized = {
  ru: 'Ученик видит, что уже освоено, где система нашла пробелы и сколько дней осталось до ЕНТ. Ничего лишнего — только то, что помогает учиться.',
  kk: 'Оқушы ненің меңгерілгенін, жүйенің қай жерден олқылық тапқанын және ҰБТ-ға қанша күн қалғанын көреді. Артық ештеңе жоқ — тек оқуға көмектесетін нәрсе.',
  en: 'The student sees what is mastered, where the system found gaps and how many days are left until the UNT. Nothing extra — only what helps them learn.',
};

/* --- feature bullets --- */

const FEATURES: Array<{
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  title: Localized;
  desc: Localized;
}> = [
  {
    icon: BarChart3,
    title: {
      ru: 'Прогресс по темам',
      kk: 'Тақырыптар бойынша үдеріс',
      en: 'Progress by topic',
    },
    desc: {
      ru: 'По каждой теме видно, сколько уже освоено и что осталось пройти.',
      kk: 'Әр тақырып бойынша қаншы меңгерілгені және не қалғаны көрініп тұрады.',
      en: 'See how much of each topic is mastered and what is left to cover.',
    },
  },
  {
    icon: Target,
    title: {
      ru: 'Слабые места подсвечены',
      kk: 'Әлсіз тұстар көрсетілген',
      en: 'Weak spots highlighted',
    },
    desc: {
      ru: 'Система сама находит темы, где ученик чаще всего ошибается, и предлагает их повторить.',
      kk: 'Жүйе оқушы жиі қателесетін тақырыптарды өзі тауып, оларды қайталауды ұсынады.',
      en: 'The system finds the topics where the student slips up most and suggests revising them.',
    },
  },
  {
    icon: CalendarClock,
    title: {
      ru: 'Цель и дедлайн рядом',
      kk: 'Мақсат пен мерзім қатар',
      en: 'Goal and deadline side by side',
    },
    desc: {
      ru: 'Дата ЕНТ и план подготовки от NOV-01 Академика всегда перед глазами.',
      kk: 'ҰБТ күні мен NOV-01 Академиктің дайындық жоспары әрқашан көз алдында.',
      en: 'The UNT date and the prep roadmap from NOV-01 the Academic are always in view.',
    },
  },
  {
    icon: Award,
    title: {
      ru: 'Очки и достижения',
      kk: 'Ұпайлар мен жетістіктер',
      en: 'Points and achievements',
    },
    desc: {
      ru: 'XP, серии дней и награды помогают не бросать учёбу на полпути.',
      kk: 'XP, күн сериялары мен марапаттар оқуды жарты жолда тастамауға көмектеседі.',
      en: 'XP, day streaks and awards help students not to give up halfway.',
    },
  },
];

/* --- dashboard mock strings --- */

const MOCK_TITLE: Localized = {
  ru: 'Мой прогресс',
  kk: 'Менің үдерісім',
  en: 'My progress',
};
const MOCK_SUBJECT: Localized = {
  ru: 'Математика · 10 класс',
  kk: 'Математика · 10 сынып',
  en: 'Mathematics · grade 10',
};
const MOCK_TOPICS_LABEL: Localized = {
  ru: 'Темы',
  kk: 'Тақырыптар',
  en: 'Topics',
};
const MOCK_TOPICS: Array<{ name: Localized; pct: number }> = [
  {
    name: { ru: 'Функции и графики', kk: 'Функциялар мен графиктер', en: 'Functions and graphs' },
    pct: 80,
  },
  {
    name: { ru: 'Текстовые задачи', kk: 'Мәтіндік есептер', en: 'Word problems' },
    pct: 65,
  },
  {
    name: { ru: 'Квадратные уравнения', kk: 'Квадрат теңдеулер', en: 'Quadratic equations' },
    pct: 45,
  },
  {
    name: { ru: 'Тригонометрия', kk: 'Тригонометрия', en: 'Trigonometry' },
    pct: 30,
  },
];
const MOCK_WEAK_LABEL: Localized = {
  ru: 'Слабые места',
  kk: 'Әлсіз тұстар',
  en: 'Weak spots',
};
const MOCK_PLAN_LABEL: Localized = {
  ru: 'NOV-01 · ПЛАН',
  kk: 'NOV-01 · ЖОСПАР',
  en: 'NOV-01 · ROADMAP',
};
const MOCK_DEADLINE_TITLE: Localized = {
  ru: 'ЕНТ · 12 июня',
  kk: 'ҰБТ · 12 маусым',
  en: 'UNT · June 12',
};
const MOCK_DEADLINE_LEFT: Localized = {
  ru: 'осталось 48 дней',
  kk: '48 күн қалды',
  en: '48 days left',
};
const MOCK_TODAY: Localized = {
  ru: 'Сегодня по плану: теорема Виета',
  kk: 'Бүгін жоспар бойынша: Виет теоремасы',
  en: 'Today on the roadmap: Vieta’s theorem',
};
const MOCK_STREAK: Localized = {
  ru: '12 дней подряд',
  kk: '12 күн қатарынан',
  en: '12-day streak',
};
const MOCK_AWARDS: Localized = {
  ru: '3 награды',
  kk: '3 марапат',
  en: '3 awards',
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const StudentDashboardPreview: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const fu = (delay = 0) =>
    reduceMotion
      ? {}
      : { ...fadeUp, transition: { duration: 0.5, delay } };

  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-heading"
      className="relative overflow-hidden bg-mist/20"
    >
      <GearDecor
        className="absolute -left-20 top-1/3 h-64 w-64 text-teal-light/30"
        spin
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Dashboard mock */}
        <motion.div {...fu()} className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-teal-light/30 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]">
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
                <span className="h-2.5 w-2.5 rounded-full bg-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
              </div>
              <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
                novex-edu.vercel.app/app/progress
              </span>
            </div>

            <div className="p-4 sm:p-5">
              {/* header row */}
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-base font-bold text-ink">
                  {loc(language, MOCK_TITLE)}
                </p>
                <span className="rounded-full bg-mist/40 px-2.5 py-1 text-[10px] font-semibold text-teal-dark">
                  {loc(language, MOCK_SUBJECT)}
                </span>
                <span className="ml-auto rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal-dark">
                  1 240 XP
                </span>
              </div>

              {/* topic progress */}
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                {loc(language, MOCK_TOPICS_LABEL)}
              </p>
              <div className="mt-2 space-y-2.5">
                {MOCK_TOPICS.map((topic) => (
                  <div key={topic.name.en}>
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate text-xs font-medium text-ink">
                        {loc(language, topic.name)}
                      </p>
                      <p className="shrink-0 text-[10px] font-semibold text-teal-dark">
                        {topic.pct}%
                      </p>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-mist/40">
                      <div
                        className="h-full rounded-full bg-teal"
                        style={{ width: `${topic.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* weak spots */}
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                {loc(language, MOCK_WEAK_LABEL)}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {MOCK_TOPICS.slice(2).map((topic) => (
                  <span
                    key={topic.name.en}
                    className="inline-flex items-center gap-1.5 rounded-full border border-coral/30 bg-coral/10 px-2.5 py-1 text-[10px] font-medium text-coral"
                  >
                    <Target className="h-3 w-3" aria-hidden="true" />
                    {loc(language, topic.name)}
                  </span>
                ))}
              </div>

              {/* deadline card */}
              <div className="mt-4 rounded-xl border border-teal/25 bg-mist/25 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-coral">
                    {loc(language, MOCK_PLAN_LABEL)}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-teal-dark">
                    {loc(language, MOCK_DEADLINE_LEFT)}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/15">
                    <CalendarClock className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-ink">
                      {loc(language, MOCK_DEADLINE_TITLE)}
                    </p>
                    <p className="truncate text-[10px] text-slateink">
                      {loc(language, MOCK_TODAY)}
                    </p>
                  </div>
                </div>
              </div>

              {/* achievements row */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-coral/10 px-2.5 py-1 text-[11px] font-semibold text-coral">
                  <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, MOCK_STREAK)}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal-dark">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, MOCK_AWARDS)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature bullets */}
        <div>
          <motion.div {...fu(0.1)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
              <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, BADGE)}
            </span>
            <h2
              id="dashboard-heading"
              className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
            >
              {loc(language, TITLE_BEFORE)}
              <span className="text-coral">{loc(language, TITLE_ACCENT)}</span>
              {loc(language, TITLE_AFTER)}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-slateink md:text-lg">
              {loc(language, SUBTITLE)}
            </p>
          </motion.div>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.li
                  key={feature.title.en}
                  {...fu(0.15 + 0.08 * i)}
                  className="flex gap-4 rounded-2xl border border-line/50 bg-white p-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                    <Icon className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-bold text-ink">
                      {loc(language, feature.title)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slateink">
                      {loc(language, feature.desc)}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardPreview;
