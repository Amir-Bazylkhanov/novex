import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ClipboardCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { GearDecor, CircuitTrace } from '../robots/RobotAvatars.tsx';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const EYEBROW: Localized = {
  ru: 'Протокол обучения',
  kk: 'Оқу хаттамасы',
  en: 'Learning protocol',
};

const TITLE: Localized = {
  ru: 'Пять шагов — от профиля до результата',
  kk: 'Профильден нәтижеге дейін — бес қадам',
  en: 'Five steps — from profile to results',
};

const SUBTITLE: Localized = {
  ru: 'Так выглядит путь ученика в Novex: от регистрации до первых закрытых пробелов.',
  kk: 'Novex-тегі оқушы жолы осылай көрінеді: тіркелуден жабылған олқылықтарға дейін.',
  en: 'This is a student’s journey in Novex: from sign-up to the first closed gaps.',
};

const STEPS: Array<{ icon: React.ElementType; title: Localized; desc: Localized }> = [
  {
    icon: Users,
    title: {
      ru: 'Регистрация и профиль',
      kk: 'Тіркелу және профиль',
      en: 'Sign up and profile',
    },
    desc: {
      ru: 'Ученик создаёт профиль: имя, класс, школа.',
      kk: 'Оқушы профиль жасайды: аты-жөні, сыныбы, мектебі.',
      en: 'The student creates a profile: name, grade, school.',
    },
  },
  {
    icon: Target,
    title: {
      ru: 'Класс, предмет и цель',
      kk: 'Сынып, пән және мақсат',
      en: 'Grade, subject and goal',
    },
    desc: {
      ru: 'Выбирает предмет и цель: ЕНТ, олимпиада или повторение темы.',
      kk: 'Пән мен мақсатты таңдайды: ҰБТ, олимпиада немесе тақырып қайталау.',
      en: 'Picks a subject and a goal: UNT, an olympiad or topic revision.',
    },
  },
  {
    icon: Sparkles,
    title: {
      ru: 'Умные рекомендации',
      kk: 'Ақылды ұсыныстар',
      en: 'Smart recommendations',
    },
    desc: {
      ru: 'Платформа подбирает материалы и задания под текущий уровень ученика.',
      kk: 'Платформа материалдар мен тапсырмаларды оқушының қазіргі деңгейіне сай таңдайды.',
      en: 'The platform matches materials and tasks to the student’s current level.',
    },
  },
  {
    icon: ClipboardCheck,
    title: {
      ru: 'Задания и ИИ-обратная связь',
      kk: 'Тапсырмалар және ИИ-кері байланыс',
      en: 'Tasks with AI feedback',
    },
    desc: {
      ru: 'Ученик решает задачи и получает разбор каждой ошибки — шаг за шагом.',
      kk: 'Оқушы есептерді шығарады, әр қатесі қадамдап талданады.',
      en: 'The student solves tasks and gets every mistake explained step by step.',
    },
  },
  {
    icon: TrendingUp,
    title: {
      ru: 'Учитель видит прогресс',
      kk: 'Мұғалім үдерісті көреді',
      en: 'Teachers track progress',
    },
    desc: {
      ru: 'Прогресс класса, слабые темы и дедлайны — на панели школы.',
      kk: 'Сынып үдерісі, әлсіз тақырыптар мен дедлайндар — мектеп панелінде.',
      en: 'Class progress, weak topics and deadlines live on the school dashboard.',
    },
  },
];

const HANDOFF: Localized = {
  ru: 'Дальше — панель учителя',
  kk: 'Әрі қарай — мұғалім панелі',
  en: 'Next: the teacher panel',
};

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  const step = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.5,
    delay: reduceMotion ? 0 : delay,
  });

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-teal-dark">
            {loc(language, EYEBROW)}
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-4 text-base text-slateink md:text-lg">{loc(language, SUBTITLE)}</p>
        </motion.div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 top-6 w-px bg-line/70 md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-line/70 md:block"
          />
          <CircuitTrace className="pointer-events-none absolute left-[4%] right-[4%] top-2.5 hidden h-7 text-teal-light/30 md:block" />

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-4">
            {STEPS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title.en}
                  {...fadeUp}
                  transition={step(0.1 + i * 0.08)}
                  className="relative flex flex-col items-start gap-3 pl-16 md:items-center md:gap-3 md:pl-0 md:text-center"
                >
                  <div className="absolute left-0 top-0 md:static">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-white shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
                      <GearDecor
                        spin
                        className="absolute inset-0 m-auto h-9 w-9 text-teal-light/50"
                      />
                      <span className="relative font-display text-base font-extrabold text-teal-dark">
                        {i + 1}
                      </span>
                    </span>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist/40">
                    <Icon className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {loc(language, item.title)}
                  </h3>
                  <p className="text-sm leading-relaxed text-slateink">
                    {loc(language, item.desc)}
                  </p>

                  {i === STEPS.length - 1 && (
                    <span className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
                      <span className="font-mono uppercase tracking-widest">NOV-03</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      {loc(language, HANDOFF)}
                    </span>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
