import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, GearDecor, type RobotId } from '../robots/RobotAvatars.tsx';

const TITLE: Localized = {
  ru: 'Персональное образование — для каждого ученика, в любом регионе',
  kk: 'Жеке білім — әр оқушыға, кез келген өңірде',
  en: 'Personalised education — for every student, in any region',
};

const SUBTITLE: Localized = {
  ru: 'Пройдите короткую диагностику — и три робота Novex построят план именно под ваш уровень.',
  kk: 'Қысқа диагностикадан өтіңіз — Novex-тің үш роботы дәл сіздің деңгейіңізге сай жоспар құрады.',
  en: 'Take the short diagnostic — and the three Novex robots will build a plan matched to your level.',
};

const CTA_PRIMARY: Localized = {
  ru: 'Пройти диагностику',
  kk: 'Диагностикадан өту',
  en: 'Take the diagnostic',
};

const CTA_SECONDARY: Localized = {
  ru: 'Для школ и учителей',
  kk: 'Мектептер мен мұғалімдерге',
  en: 'For schools and teachers',
};

const REASSURANCE: Localized = {
  ru: 'Бесплатно для государственных школ · Русский, казахский и английский · Работает на слабом интернете',
  kk: 'Мемлекеттік мектептерге тегін · Орыс, қазақ және ағылшын тілдері · Әлсіз интернетте де жұмыс істейді',
  en: 'Free for state schools · Russian, Kazakh and English · Works on slow internet',
};

const ROBOT_ROW_LABEL: Localized = {
  ru: 'Ваша команда ИИ-помощников',
  kk: 'Сіздің ИИ-көмекшілер командаңыз',
  en: 'Your team of AI helpers',
};

const ROBOT_TEAM: Array<{ id: RobotId; code: string; name: Localized }> = [
  {
    id: 'nov1',
    code: 'NOV-01',
    name: { ru: 'Диагност', kk: 'Диагност', en: 'Diagnostician' },
  },
  {
    id: 'nov2',
    code: 'NOV-02',
    name: { ru: 'Наставник', kk: 'Тәлімгер', en: 'Tutor' },
  },
  {
    id: 'nov3',
    code: 'NOV-03',
    name: { ru: 'Куратор', kk: 'Куратор', en: 'Curator' },
  },
];

const FOCUS_RING_TEAL_BAND =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const FinalCTA: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-teal via-teal to-teal-dark"
    >
      {/* faint outline gears decor */}
      <GearDecor
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 text-white/10"
        teeth={10}
        spin={!reduceMotion}
      />
      <GearDecor
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 text-white/10"
        teeth={12}
        spin={!reduceMotion}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...motionProps} className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-5 text-base text-white/85 md:text-lg">
            {loc(language, SUBTITLE)}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#top"
              className={`${FOCUS_RING_TEAL_BAND} inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-teal-dark shadow-[0_8px_30px_rgba(17,26,42,0.18)] transition-colors hover:bg-canvas`}
            >
              {loc(language, CTA_PRIMARY)}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#for-schools"
              className={`${FOCUS_RING_TEAL_BAND} inline-flex items-center justify-center rounded-xl border border-white/50 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10`}
            >
              {loc(language, CTA_SECONDARY)}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/75">{loc(language, REASSURANCE)}</p>
        </motion.div>

        {/* friendly robot row */}
        <motion.div
          {...motionProps}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-md"
        >
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-white/70">
            {loc(language, ROBOT_ROW_LABEL)}
          </p>
          <div className="mt-4 flex items-start justify-center gap-6 sm:gap-10">
            {ROBOT_TEAM.map((robot) => (
              <div key={robot.code} className="flex w-24 flex-col items-center gap-2">
                <RobotAvatar robot={robot.id} className="h-14 w-14 sm:h-16 sm:w-16" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                  {robot.code}
                </p>
                <p className="text-center text-xs font-semibold text-white">
                  {loc(language, robot.name)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
