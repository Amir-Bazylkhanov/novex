import React, { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  ClipboardCheck,
  Compass,
  Map as MapIcon,
  TrendingUp,
  Users,
} from 'lucide-react';
import { GearDecor } from '../robots/RobotAvatars.tsx';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import step1Profile from '../../assets/landing/step1-profile.png';
import step2Career from '../../assets/landing/step2-career.png';
import step3Plan from '../../assets/landing/step3-plan.png';
import step4Practice from '../../assets/landing/step4-practice.png';
import step5Teacher from '../../assets/landing/step5-teacher.png';

/* --- section header --- */

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
  ru: 'Так выглядит путь ученика в Novex — листайте, и экраны платформы сменятся вместе с шагами.',
  kk: 'Novex-тегі оқушы жолы осылай көрінеді — парақтаңыз, платформа экрандары қадамдармен бірге ауысады.',
  en: "This is a student's journey in Novex — scroll, and the platform screens change with each step.",
};

/* --- steps --- */

const STEPS: Array<{
  icon: React.ElementType;
  url: string;
  screenshot: string;
  title: Localized;
  desc: Localized;
}> = [
  {
    icon: Users,
    url: '/profile',
    screenshot: step1Profile,
    title: {
      ru: 'Профиль и выбор предмета',
      kk: 'Профиль және пән таңдау',
      en: 'Profile and subject choice',
    },
    desc: {
      ru: 'Ученик заполняет профиль — класс, цели, статистику — и выбирает любой предмет для обучения.',
      kk: 'Оқушы профилін толтырады — сынып, мақсаттар, статистика — және оқуға кез келген пәнді таңдайды.',
      en: 'The student fills in a profile — grade, goals, stats — and picks any subject to study.',
    },
  },
  {
    icon: Compass,
    url: '/career',
    screenshot: step2Career,
    title: {
      ru: 'ИИ-профориентация',
      kk: 'ИИ-кәсіптік бағдар',
      en: 'AI career guidance',
    },
    desc: {
      ru: 'После профтеста ИИ рекомендует подходящие специальности и предметы, которые стоит изучать для них.',
      kk: 'Кәсіптік тесттен кейін ИИ лайықты мамандықтарды және соларға қажет пәндерді ұсынады.',
      en: 'After the career test, AI recommends matching careers and the subjects to study for them.',
    },
  },
  {
    icon: MapIcon,
    url: '/plan',
    screenshot: step3Plan,
    title: {
      ru: 'Персональный роадмап',
      kk: 'Жеке роадмап',
      en: 'Personal roadmap',
    },
    desc: {
      ru: 'Платформа собирает личный маршрут по неделям — под цель, уровень и темп ученика.',
      kk: 'Платформа апталар бойынша жеке бағдар құрады — оқушының мақсатына, деңгейі мен қарқынына сай.',
      en: "The platform builds a week-by-week route around the student's goal, level and pace.",
    },
  },
  {
    icon: ClipboardCheck,
    url: '/practice',
    screenshot: step4Practice,
    title: {
      ru: 'Задания и разбор ошибок',
      kk: 'Тапсырмалар және қателерді талдау',
      en: 'Tasks and mistake analysis',
    },
    desc: {
      ru: 'Ученик решает задачи, а при ошибке ИИ пошагово показывает, где именно он неправ и как это исправить.',
      kk: 'Оқушы есеп шығарады, ал қателескенде ИИ қай жерде қателескенін және қалай түзеу керегін қадамдап көрсетеді.',
      en: 'The student solves tasks; on a mistake the AI shows step by step where they went wrong and how to fix it.',
    },
  },
  {
    icon: TrendingUp,
    url: '/teacher',
    screenshot: step5Teacher,
    title: {
      ru: 'Панель учителя',
      kk: 'Мұғалім панелі',
      en: 'Teacher panel',
    },
    desc: {
      ru: 'Учитель видит прогресс класса, слабые темы и тех, кому нужна помощь.',
      kk: 'Мұғалім сынып үдерісін, әлсіз тақырыптарды және кімге көмек керегін көреді.',
      en: 'The teacher sees class progress, weak topics and who needs help.',
    },
  },
];

/* --- shared building blocks --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/** Fake browser window chrome, same look as the TeacherPanel mock. */
const BrowserFrame: React.FC<{
  url: string;
  heightClass: string;
  children: React.ReactNode;
}> = ({ url, heightClass, children }) => (
  <div className="overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]">
    <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
      </div>
      <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
        novex-edu.vercel.app{url}
      </span>
    </div>
    <div className={`relative ${heightClass}`}>{children}</div>
  </div>
);

/** Thin vertical meter between two step circles, filled by scroll progress
    across this step's slice of the pinned track. */
const StepMeter: React.FC<{ progress: MotionValue<number>; index: number }> = ({
  progress,
  index,
}) => {
  const scaleY = useTransform(progress, [index / 5, (index + 1) / 5], [0, 1]);
  return (
    <div aria-hidden="true" className="ml-[1.875rem] mt-1 h-8 w-px bg-line/60">
      <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-teal" />
    </div>
  );
};

/** Numbered step circle: solid teal when active, gear-decorated when idle. */
const StepCircle: React.FC<{ index: number; active: boolean }> = ({ index, active }) => (
  <span
    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
      active
        ? 'bg-teal shadow-[0_6px_16px_rgba(33,159,162,0.35)]'
        : 'border border-teal/30 bg-white'
    }`}
  >
    {!active && (
      <GearDecor spin className="absolute inset-0 m-auto h-8 w-8 text-teal-light/50" />
    )}
    <span
      className={`relative font-display text-base font-extrabold ${
        active ? 'text-white' : 'text-teal-dark'
      }`}
    >
      {index + 1}
    </span>
  </span>
);

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(4, Math.max(0, Math.floor(v * 5))));
  });

  const jumpTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const trackTop = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: trackTop + (span * (i + 0.5)) / STEPS.length,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  const fadeUp = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 bg-white py-20 md:py-28"
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

        {/* Desktop: scroll-pinned showcase */}
        <div ref={trackRef} className="relative mt-4 hidden lg:block lg:h-[450vh]">
          <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-16">
              {/* step list */}
              <ol>
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = active === i;
                  return (
                    <li key={step.title.en}>
                      <button
                        type="button"
                        onClick={() => jumpTo(i)}
                        aria-current={isActive ? 'step' : undefined}
                        className={`${FOCUS_RING} flex w-full items-start gap-4 rounded-xl p-2 text-left transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                        }`}
                      >
                        <StepCircle index={i} active={isActive} />
                        <span className="min-w-0 pt-0.5">
                          <span className="flex items-center gap-2">
                            <Icon className="h-4 w-4 shrink-0 text-teal-dark" aria-hidden="true" />
                            <span className="font-display text-base font-bold text-ink">
                              {loc(language, step.title)}
                            </span>
                          </span>
                          <p className="mt-1 text-sm leading-relaxed text-slateink">
                            {loc(language, step.desc)}
                          </p>
                        </span>
                      </button>
                      {i < STEPS.length - 1 && (
                        <StepMeter progress={scrollYProgress} index={i} />
                      )}
                    </li>
                  );
                })}
              </ol>

              {/* screen mock */}
              <div className="min-w-0">
                <BrowserFrame url={STEPS[active].url} heightClass="h-[26rem] xl:h-[28rem]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 32, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -32, scale: 0.985 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <img
                        src={STEPS[active].screenshot}
                        alt=""
                        className="h-full w-full object-cover object-top"
                        draggable={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </BrowserFrame>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked steps, no pinning */}
        <ol className="mt-12 space-y-12 lg:hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li key={step.title.en} {...fadeUp}>
                <div className="flex items-center gap-3">
                  <StepCircle index={i} active={false} />
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist/40">
                    <Icon className="h-4.5 w-4.5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {loc(language, step.title)}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slateink">
                  {loc(language, step.desc)}
                </p>
                <div aria-hidden="true" className="mt-4">
                  <BrowserFrame url={step.url} heightClass="h-[26rem]">
                    <img
                      src={step.screenshot}
                      alt=""
                      className="h-full w-full object-cover object-top"
                      draggable={false}
                    />
                  </BrowserFrame>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
