import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertTriangle, ArrowRight, BookOpen, Brain, MapPin, Users } from 'lucide-react';
import { GearDecor, CircuitTrace } from '../robots/RobotAvatars.tsx';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const EYEBROW: Localized = {
  ru: 'Проблема',
  kk: 'Мәселе',
  en: 'The problem',
};

const TITLE: Localized = {
  ru: 'Качество подготовки всё ещё зависит от школы и региона',
  kk: 'Дайындық сапасы әлі күнге мектеп пен өңірге байланысты',
  en: 'Preparation quality still depends on the school and region',
};

const SUBTITLE: Localized = {
  ru: 'Казахстан большой, а возможности — разные. Вот четыре проблемы, которые решает Novex.',
  kk: 'Қазақстан үлкен, ал мүмкіндіктер әркелкі. Міне, Novex шешетін төрт мәселе.',
  en: 'Kazakhstan is big and opportunities are uneven. These are the four problems Novex solves.',
};

const PROBLEMS: Array<{ icon: React.ElementType; title: Localized; effect: Localized }> = [
  {
    icon: MapPin,
    title: {
      ru: 'Сильные педагоги — не везде',
      kk: 'Мықты мұғалімдер бәріне бірдей қолжетімді емес',
      en: 'Strong teachers are not everywhere',
    },
    effect: {
      ru: 'В сёлах и малых городах у учеников нет доступа к репетиторам и дополнительным материалам.',
      kk: 'Ауылдар мен шағын қалаларда оқушыларда репетиторлар мен қосымша материалдарға қолжетімділік жоқ.',
      en: 'Students in villages and small towns have no access to tutors or extra materials.',
    },
  },
  {
    icon: Users,
    title: {
      ru: 'Учитель не успевает на всех',
      kk: 'Мұғалімнің уақыты бәріне жетпейді',
      en: 'Teachers are stretched thin',
    },
    effect: {
      ru: 'Классы большие, программа плотная — находить и закрывать пробелы каждого ученика некогда.',
      kk: 'Сыныптар үлкен, бағдарлама тығыз — әр оқушының олқылықтарын тауып, толтыруға уақыт жоқ.',
      en: 'Large classes and a packed curriculum leave no time to close every student’s gaps.',
    },
  },
  {
    icon: BookOpen,
    title: {
      ru: 'Материалы разрознены',
      kk: 'Материалдар шашыраңқы',
      en: 'Materials are scattered',
    },
    effect: {
      ru: 'Подготовка к ЕНТ, олимпиадам и поступлению разбросана по чатам и файлам и не подстроена под уровень.',
      kk: 'ҰБТ-ға, олимпиадаларға және оқуға түсуге дайындық чаттар мен файлдарға шашыраған әрі оқушы деңгейіне бейімделмеген.',
      en: 'UNT, olympiad and admissions prep is scattered across chats and files — and not matched to level.',
    },
  },
  {
    icon: Brain,
    title: {
      ru: 'Персональный подход не масштабируется',
      kk: 'Жеке тәсіл масштабталмайды',
      en: 'Personal tutoring does not scale',
    },
    effect: {
      ru: 'Нанимать репетитора каждому ученику дорого и нереально. Нужна система, которая адаптируется сама.',
      kk: 'Әр оқушыға репетитор жалдау қымбат әрі мүмкін емес. Өзі бейімделетін жүйе керек.',
      en: 'Hiring a tutor for every student is costly and unrealistic. A system that adapts on its own is needed.',
    },
  },
];

const STAT_CHIP: Localized = {
  ru: 'Иллюстративная оценка',
  kk: 'Көрнекі бағалау',
  en: 'Illustrative estimate',
};
const STAT_CAPTION: Localized = {
  ru: 'Во столько раз доступ к репетиторам в крупных городах шире, чем в сёлах.',
  kk: 'Ірі қалаларда репетиторларға қолжетімділік ауылдарға қарағанда осынша есе жоғары.',
  en: 'How many times wider tutor access is in big cities than in rural areas.',
};
const STAT_NOTE: Localized = {
  ru: 'Это оценка для иллюстрации проблемы, а не официальная статистика.',
  kk: 'Бұл мәселені көрсету үшін берілген бағалау, ресми статистика емес.',
  en: 'An estimate used to illustrate the problem, not official statistics.',
};

const CLOSING: Localized = {
  ru: 'Novex решает это персонализацией — смотрите, как он работает',
  kk: 'Novex мұны жандандырылған тәсілмен шешеді — қалай жұмыс істейтінін қараңыз',
  en: 'Novex answers this with personalization — see how it works',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const ProblemSection: React.FC = () => {
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
      id="problem"
      aria-labelledby="problem-heading"
      className="relative scroll-mt-24 overflow-hidden bg-mist/25 py-20 md:py-28"
    >
      <GearDecor
        spin
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 text-teal-light/25 sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-teal-dark">
            {loc(language, EYEBROW)}
          </span>
          <h2
            id="problem-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-4 text-base text-slateink md:text-lg">{loc(language, SUBTITLE)}</p>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_21rem] lg:items-stretch lg:gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <motion.article
                  key={problem.title.en}
                  {...fadeUp}
                  transition={step(0.08 + i * 0.07)}
                  className="rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist/40">
                    <Icon className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {loc(language, problem.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slateink">
                    {loc(language, problem.effect)}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            {...fadeUp}
            transition={step(0.36)}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-coral/20 bg-white p-7 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
          >
            <CircuitTrace className="pointer-events-none absolute -bottom-2 right-2 h-10 w-44 text-mist/70" />
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
              <AlertTriangle className="h-3 w-3" aria-hidden="true" />
              {loc(language, STAT_CHIP)}
            </span>
            <p className="mt-5 font-display text-6xl font-extrabold tracking-tight text-coral">
              ×2–3
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
              {loc(language, STAT_CAPTION)}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slateink">
              {loc(language, STAT_NOTE)}
            </p>
          </motion.aside>
        </div>

        <motion.p {...fadeUp} transition={step(0.44)} className="mt-12">
          <a
            href="#how-it-works"
            className={`${FOCUS_RING} group inline-flex items-center gap-2 rounded-lg text-base font-semibold text-teal transition-colors hover:text-teal-dark`}
          >
            {loc(language, CLOSING)}
            <ArrowRight
              className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
