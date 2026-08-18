import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import Pricing from './landing/Pricing.tsx';

/* --- content --- */

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
        className="mx-auto w-full max-w-5xl px-5 pt-8 sm:px-6 md:pt-10 lg:px-8"
      >
        <div className="mb-6">
          <Link
            to="/"
            className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-slateink transition-colors hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK_HOME)}
          </Link>
        </div>
      </motion.header>

      <Pricing />
    </main>
  );
};

export default PricingPage;
