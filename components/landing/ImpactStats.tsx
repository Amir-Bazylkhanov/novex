// Секция лендинга «Целевые показатели»: четыре карточки с цифрами о том,
// какую пользу проект хочет принести (регионы, языки, бесплатность для школ).
// Это заявленные цели проекта, а не реальная статистика — об этом честно
// написано в сноске внизу секции. Секция вставляется на главную страницу.
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Target, Languages, School, Clock, MapPin } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { GearDecor, CircuitTrace } from '../robots/RobotAvatars.tsx';

const BADGE: Localized = {
  ru: 'Целевые показатели',
  kk: 'Мақсатты көрсеткіштер',
  en: 'Target goals',
};

const TITLE: Localized = {
  ru: 'Какую пользу мы хотим принести',
  kk: 'Біз қандай пайда әкелгіміз келеді',
  en: 'The impact we aim to create',
};

const SUBTITLE: Localized = {
  ru: 'Novex строится так, чтобы качественная персональная поддержка была доступна ученику любой школы — от областного центра до маленького аула.',
  kk: 'Novex әрбір оқушыға — облыс орталығынан шағын ауылға дейін — сапалы жеке қолдау қолжетімді болатындай етіп жасалуда.',
  en: 'Novex is built so that quality personalised support reaches every student — from a regional capital to a small village school.',
};

// Описание одной карточки-метрики: сама цифра, подпись и пояснение.
interface Metric {
  value: string;
  label: Localized;
  detail: Localized;
}

// Четыре целевых показателя, которые выводятся карточками в сетке.
const METRICS: Metric[] = [
  {
    value: '17',
    label: { ru: 'областей Казахстана', kk: 'Қазақстан облысы', en: 'regions of Kazakhstan' },
    detail: {
      ru: 'включая сельские и малокомплектные школы',
      kk: 'ауылдық және аз оқушылы мектептерді қоса',
      en: 'including rural and small schools',
    },
  },
  {
    value: '3',
    label: { ru: 'языка платформы', kk: 'платформа тілі', en: 'platform languages' },
    detail: {
      ru: 'казахский, русский и английский — интерфейс и ИИ-объяснения',
      kk: 'қазақ, орыс және ағылшын — интерфейс пен ИИ-түсіндірмелер',
      en: 'Kazakh, Russian and English — interface and AI explanations',
    },
  },
  {
    value: '0 ₸',
    label: { ru: 'для государственных школ', kk: 'мемлекеттік мектептерге', en: 'for state schools' },
    detail: {
      ru: 'панель учителя и аналитика класса — бесплатно',
      kk: 'мұғалім панелі мен сынып аналитикасы — тегін',
      en: 'teacher panel and class analytics — free',
    },
  },
  {
    value: '24/7',
    label: { ru: 'ИИ-поддержка ученика', kk: 'оқушыға ИИ-қолдау', en: 'AI support for students' },
    detail: {
      ru: 'ответы и разборы ошибок в любое время',
      kk: 'кез келген уақытта жауаптар мен қателер талдауы',
      en: 'answers and mistake reviews at any time',
    },
  },
];

const FOOTNOTE: Localized = {
  ru: 'Это цели проекта, а не текущие показатели. Мы честно показываем, к чему стремимся.',
  kk: 'Бұл — жобаның мақсаттары, қазіргі нәтижелер емес. Біз ұмтылатын бағытты адал көрсетеміз.',
  en: 'These are project goals, not current numbers. We are honest about what we are aiming for.',
};

// Настройки анимации появления блока при прокрутке страницы до него.
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

// Иконки для карточек по порядку, в том же порядке, что и METRICS.
const METRIC_ICONS = [MapPin, Languages, School, Clock] as const;

const ImpactStats: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  // Если пользователь отключил анимации в системе — показываем блоки без сдвига,
  // только простое появление.
  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative overflow-hidden bg-gradient-to-br from-teal to-teal-dark"
    >
      {/* faint outline gears + circuit decor */}
      <GearDecor
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 text-white/10"
        teeth={10}
        spin={!reduceMotion}
      />
      <GearDecor
        className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 text-white/10"
        teeth={12}
        spin={!reduceMotion}
      />
      <CircuitTrace className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...motionProps} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            {loc(language, BADGE)}
          </span>
          <h2
            id="impact-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-5 text-base text-white/85 md:text-lg">
            {loc(language, SUBTITLE)}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Карточки метрик: по одной на каждый элемент METRICS */}
          {METRICS.map((metric, i) => {
            const Icon = METRIC_ICONS[i];
            return (
              <motion.div
                key={metric.value + metric.label.en}
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl border border-white/20 bg-white/10 p-6"
              >
                <Icon className="h-6 w-6 text-teal-light" aria-hidden="true" />
                <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  {loc(language, metric.label)}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                  {loc(language, metric.detail)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          {...motionProps}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/70"
        >
          {loc(language, FOOTNOTE)}
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactStats;
