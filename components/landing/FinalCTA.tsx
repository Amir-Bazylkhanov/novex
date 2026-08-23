import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { GearDecor } from '../robots/RobotAvatars.tsx';

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

const REASSURANCE: Localized = {
  ru: 'Бесплатно для государственных школ · Русский, казахский и английский · Работает на слабом интернете',
  kk: 'Мемлекеттік мектептерге тегін · Орыс, қазақ және ағылшын тілдері · Әлсіз интернетте де жұмыс істейді',
  en: 'Free for state schools · Russian, Kazakh and English · Works on slow internet',
};

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

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
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

          <div className="mt-8 flex justify-center">
            <Link
              to="/career?from=onboarding"
              className={`${FOCUS_RING_TEAL_BAND} inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-teal-dark shadow-[0_8px_30px_rgba(17,26,42,0.18)] transition-colors hover:bg-canvas`}
            >
              {loc(language, CTA_PRIMARY)}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/75">{loc(language, REASSURANCE)}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
