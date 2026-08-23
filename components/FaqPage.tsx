// Страница «Частые вопросы» (FAQ).
// Сверху — декоративный фон с шестерёнками (RobotBackdrop), затем список
// вопросов-ответов из components/landing/FAQ.tsx и карточка-приглашение
// спросить ИИ-тьютора (или зарегистрироваться, если пользователь не вошёл).
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import RobotBackdrop from './RobotBackdrop.tsx';
import FAQ from './landing/FAQ.tsx';

/* --- content --- */

const CTA_TEXT: Localized = {
  ru: 'Не нашли ответ? Спросите Академика NOV-01 в чате — он отвечает 24/7.',
  kk: 'Жауап таба алмадыңыз ба? Чатта NOV-01 Академиктен сұраңыз — ол тәулік бойы жауап береді.',
  en: 'Didn’t find an answer? Ask NOV-01 the Academic in the chat — it replies 24/7.',
};
const CTA_START: Localized = {
  ru: 'Начать бесплатно',
  kk: 'Тегін бастау',
  en: 'Start for free',
};
const CTA_CHAT: Localized = {
  ru: 'Открыть чат',
  kk: 'Чатты ашу',
  en: 'Open chat',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const FaqPage: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />

      <div className="relative z-10">
        <FAQ />

        <div className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-6 lg:px-8">
          {/* Карточка внизу страницы: для вошедших ведёт в чат с ИИ-тьютором,
              для гостей — на регистрацию. */}
          <motion.div
            {...motionProps}
            className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center md:p-8"
          >
            <p className="max-w-xl text-sm text-slateink sm:text-base">
              {loc(language, CTA_TEXT)}
            </p>
            <Link
              to={user ? '/dashboard' : '/signup'}
              className={`${FOCUS_RING} inline-flex shrink-0 items-center rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark`}
            >
              {loc(language, user ? CTA_CHAT : CTA_START)}
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
