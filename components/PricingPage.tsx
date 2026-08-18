import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import Pricing from './landing/Pricing.tsx';

/* --- content --- */

const TITLE: Localized = {
  ru: 'Тарифы Novex',
  kk: 'Novex тарифтері',
  en: 'Novex pricing',
};
const SUBLINE: Localized = {
  ru: 'Прозрачные цены для учеников и бесплатный полный доступ для государственных школ.',
  kk: 'Оқушыларға ашық бағалар және мемлекеттік мектептерге тегін толық қолжетімділік.',
  en: 'Transparent pricing for students and free full access for state schools.',
};
const BACK_HOME: Localized = {
  ru: 'На главную',
  kk: 'Басты бетке',
  en: 'Back to home',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const PricingPage: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <motion.header
        {...motionProps}
        aria-labelledby="pricing-page-heading"
        className="mx-auto w-full max-w-5xl px-5 pt-12 sm:px-6 md:pt-16 lg:px-8"
      >
        <h1
          id="pricing-page-heading"
          className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
        >
          {loc(language, TITLE)}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slateink sm:text-base">
          {loc(language, SUBLINE)}
        </p>
      </motion.header>

      <Pricing />

      <div className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-teal transition-colors hover:text-teal-dark`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {loc(language, BACK_HOME)}
        </Link>
      </div>
    </main>
  );
};

export default PricingPage;
