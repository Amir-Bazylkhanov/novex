import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Flame,
  Home,
  ListChecks,
  Sparkles,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, GearDecor, CircuitTrace } from '../robots/RobotAvatars.tsx';

const BADGE: Localized = {
  ru: 'ИИ для школ Казахстана · Future Minds Hackathon 2026',
  kk: 'Қазақстан мектептеріне арналған ИИ · Future Minds Hackathon 2026',
  en: 'AI for Kazakhstan’s schools · Future Minds Hackathon 2026',
};

const TITLE_BEFORE: Localized = {
  ru: 'Персональное образование — для ',
  kk: 'Жеке білім — Қазақстандағы ',
  en: 'Personalised education — for ',
};
const TITLE_ACCENT: Localized = { ru: 'каждого', kk: 'әрбір', en: 'every' };
const TITLE_AFTER: Localized = {
  ru: ' ученика Казахстана.',
  kk: ' оқушыға арналған.',
  en: ' student in Kazakhstan.',
};

const SUBTITLE: Localized = {
  ru: 'Novex — ИИ-платформа, которая подбирает задания под уровень ученика 7–12 класса и объясняет ошибки шаг за шагом. В любой школе, в любом регионе.',
  kk: 'Novex — 7–12 сынып оқушысының деңгейіне сай тапсырмалар таңдап, қателерді қадамдап түсіндіретін ИИ-платформа. Кез келген мектепте, кез келген өңірде.',
  en: 'Novex is an AI platform that matches tasks to a grade 7–12 student’s level and explains mistakes step by step. In any school, in any region.',
};

const CTA_PRIMARY: Localized = {
  ru: 'Пройти диагностику',
  kk: 'Диагностикадан өту',
  en: 'Take the diagnostic',
};
const TRUST: Localized = {
  ru: 'Работает на казахском, русском и английском · Бесплатно для школ',
  kk: 'Қазақша, орысша және ағылшынша жұмыс істейді · Мектептерге тегін',
  en: 'Works in Kazakh, Russian and English · Free for schools',
};

/* --- product mock strings --- */

const MOCK_GREETING: Localized = {
  ru: 'Привет, Айгерим!',
  kk: 'Сәлем, Айгерім!',
  en: 'Hi, Aigerim!',
};
const MOCK_SUB: Localized = {
  ru: 'Продолжим с того места, где ты остановилась',
  kk: 'Тоқтаған жеріңнен жалғастырайық',
  en: 'Let’s pick up where you left off',
};
const MOCK_NAV: Array<{ icon: 'home' | 'book' | 'tasks' | 'stats'; label: Localized }> = [
  { icon: 'home', label: { ru: 'Главная', kk: 'Басты бет', en: 'Home' } },
  { icon: 'book', label: { ru: 'Предметы', kk: 'Пәндер', en: 'Subjects' } },
  { icon: 'tasks', label: { ru: 'Задания', kk: 'Тапсырмалар', en: 'Tasks' } },
  { icon: 'stats', label: { ru: 'Прогресс', kk: 'Үдеріс', en: 'Progress' } },
];
const MOCK_SUBJECTS_TITLE: Localized = {
  ru: 'Мои предметы',
  kk: 'Менің пәндерім',
  en: 'My subjects',
};
const MOCK_SUBJECTS: Array<{ name: Localized; topics: Localized; pct: number }> = [
  {
    name: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' },
    topics: { ru: '18 из 25 тем', kk: '25 тақырыптың 18-і', en: '18 of 25 topics' },
    pct: 72,
  },
  {
    name: { ru: 'Физика', kk: 'Физика', en: 'Physics' },
    topics: { ru: '11 из 19 тем', kk: '19 тақырыптың 11-і', en: '11 of 19 topics' },
    pct: 58,
  },
];
const MOCK_WEAK_LABEL: Localized = {
  ru: 'Слабые темы',
  kk: 'Әлсіз тақырыптар',
  en: 'Weak topics',
};
const MOCK_WEAK_CHIPS: Localized[] = [
  { ru: 'Квадратные уравнения', kk: 'Квадрат теңдеулер', en: 'Quadratic equations' },
  { ru: 'Тригонометрия', kk: 'Тригонометрия', en: 'Trigonometry' },
];
const MOCK_STREAK: Localized = {
  ru: '12 дней подряд',
  kk: '12 күн қатарынан',
  en: '12-day streak',
};
const MOCK_DEADLINE_TITLE: Localized = {
  ru: 'ЕНТ · Математика',
  kk: 'ҰБТ · Математика',
  en: 'UNT · Mathematics',
};
const MOCK_DEADLINE_LEFT: Localized = {
  ru: 'осталось 48 дней',
  kk: '48 күн қалды',
  en: '48 days left',
};
const MOCK_DEADLINE_CTA: Localized = {
  ru: 'План подготовки готов',
  kk: 'Дайындық жоспары дайын',
  en: 'Prep roadmap ready',
};
const MOCK_AI_CHIP: Localized = {
  ru: 'Академик разобрал твою ошибку',
  kk: 'Академик қатеңді талдап шықты',
  en: 'The Academic broke down your mistake',
};
const MOCK_ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · АКАДЕМИК',
  kk: 'NOV-01 · АКАДЕМИК',
  en: 'NOV-01 · ACADEMIC',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const NAV_ICONS = {
  home: Home,
  book: BookOpen,
  tasks: ListChecks,
  stats: BarChart3,
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-canvas"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {loc(language, BADGE)}
          </span>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {loc(language, TITLE_BEFORE)}
            <span className="text-coral">{loc(language, TITLE_ACCENT)}</span>
            {loc(language, TITLE_AFTER)}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slateink md:text-lg">
            {loc(language, SUBTITLE)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/onboarding"
              className={`${FOCUS_RING} inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
            >
              {loc(language, CTA_PRIMARY)}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-slateink">{loc(language, TRUST)}</p>
        </motion.div>

        {/* Product UI mock */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-mist/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-8 h-64 w-64 rounded-full bg-teal-light/40 blur-3xl"
          />
          <GearDecor
            className="absolute -right-10 top-16 h-28 w-28 text-mist/30"
            spin
          />
          <GearDecor
            className="absolute -left-12 bottom-8 h-20 w-20 text-teal-light/30"
            spin
          />
          <CircuitTrace className="absolute -left-16 top-1/4 h-36 w-36 text-mist/30" />

          <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]">
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
                <span className="h-2.5 w-2.5 rounded-full bg-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
              </div>
              <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
                novex-edu.vercel.app/app
              </span>
            </div>

            <div className="flex">
              {/* sidebar */}
              <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-line/40 bg-canvas p-3 sm:flex">
                <div className="mb-2 flex items-center gap-1.5 px-1.5">
                  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5" fill="none">
                    <rect width="32" height="32" rx="8" className="fill-teal" />
                    <path
                      d="M10 23V9l12 14V9"
                      stroke="white"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-display text-xs font-bold text-ink">Novex</span>
                </div>
                {MOCK_NAV.map((item, i) => {
                  const Icon = NAV_ICONS[item.icon];
                  const active = i === 0;
                  return (
                    <span
                      key={item.icon}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                        active ? 'bg-teal/10 text-teal-dark' : 'text-slateink'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {loc(language, item.label)}
                    </span>
                  );
                })}
              </div>

              {/* main panel */}
              <div className="min-w-0 flex-1 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-bold text-ink">
                      {loc(language, MOCK_GREETING)}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slateink">
                      {loc(language, MOCK_SUB)}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full border border-line/50 bg-canvas px-2 py-1 text-[10px] font-semibold text-slateink">
                    <Bell className="h-3 w-3 text-teal" aria-hidden="true" />
                    2
                  </span>
                </div>

                {/* XP / streak */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-coral/10 px-2.5 py-1 text-[11px] font-semibold text-coral">
                    <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                    {loc(language, MOCK_STREAK)}
                  </span>
                  <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal-dark">
                    1 240 XP
                  </span>
                </div>

                {/* subject progress */}
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                  {loc(language, MOCK_SUBJECTS_TITLE)}
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {MOCK_SUBJECTS.map((s) => (
                    <div
                      key={s.name.en}
                      className="rounded-xl border border-line/50 bg-white p-3 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                    >
                      <p className="text-xs font-semibold text-ink">{loc(language, s.name)}</p>
                      <p className="mt-0.5 text-[10px] text-slateink">
                        {loc(language, s.topics)}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist/40">
                        <div
                          className="h-full rounded-full bg-teal"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                      <p className="mt-1 text-right text-[10px] font-semibold text-teal-dark">
                        {s.pct}%
                      </p>
                    </div>
                  ))}
                </div>

                {/* weak topics */}
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                  {loc(language, MOCK_WEAK_LABEL)}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {MOCK_WEAK_CHIPS.map((chip) => (
                    <span
                      key={chip.en}
                      className="rounded-full border border-coral/30 bg-coral/10 px-2.5 py-1 text-[10px] font-medium text-coral"
                    >
                      {loc(language, chip)}
                    </span>
                  ))}
                </div>

                {/* deadline card */}
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-teal/25 bg-mist/25 p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/15">
                    <Calendar className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-ink">
                      {loc(language, MOCK_DEADLINE_TITLE)}
                    </p>
                    <p className="text-[10px] text-slateink">
                      {loc(language, MOCK_DEADLINE_LEFT)} · {loc(language, MOCK_DEADLINE_CTA)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating AI chip */}
          <div className="absolute -right-3 -top-5 hidden items-center gap-2.5 rounded-xl border border-line/50 bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(33,159,162,0.15)] md:flex lg:-right-6">
            <RobotAvatar robot="nov1" className="h-11 w-11 shrink-0" />
            <span>
              <span className="block font-mono text-[10px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, MOCK_ROBOT_LABEL)}
              </span>
              <span className="mt-0.5 block max-w-[11rem] text-[11px] font-medium leading-snug text-ink">
                {loc(language, MOCK_AI_CHIP)}
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
