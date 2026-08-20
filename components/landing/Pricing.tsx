import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Users } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const BADGE: Localized = {
  ru: 'Тарифы',
  kk: 'Тарифтер',
  en: 'Pricing',
};

const TITLE: Localized = {
  ru: 'Честные тарифы. Школам — бесплатно',
  kk: 'Адал тарифтер. Мектептерге — тегін',
  en: 'Honest pricing. Free for schools',
};

const SUBTITLE: Localized = {
  ru: 'Начните бесплатно. Государственные школы получают полный доступ без оплаты — это часть нашей социальной миссии.',
  kk: 'Тегін бастаңыз. Мемлекеттік мектептер толық қолжетімділікті тегін алады — бұл біздің әлеуметтік миссиямыздың бір бөлігі.',
  en: 'Start for free. State schools get full access at no cost — that is part of our social mission.',
};

interface FreePlan {
  name: Localized;
  tagline: Localized;
  highlights: Localized[];
  cta: Localized;
}

const FREE_PLAN: FreePlan = {
  name: { ru: 'Ученик', kk: 'Оқушы', en: 'Student' },
  tagline: { ru: 'Бесплатно навсегда', kk: 'Мәңгілікке тегін', en: 'Free forever' },
  highlights: [
    { ru: 'Диагностика уровня', kk: 'Деңгей диагностикасы', en: 'Level diagnostics' },
    { ru: 'Базовые модули и мини-тесты', kk: 'Негізгі модульдер мен шағын тесттер', en: 'Core modules and mini-tests' },
    { ru: '100 ⚙ Новасов на старте', kk: 'Стартта 100 ⚙ Новас', en: '100 ⚙ Novas to start' },
  ],
  cta: { ru: 'Начать бесплатно', kk: 'Тегін бастау', en: 'Start for free' },
};

interface TeacherPlan {
  name: Localized;
  price: Localized;
  priceNote: Localized;
  description: Localized;
  features: Localized[];
  cta: Localized;
}

const TEACHER_PLAN: TeacherPlan = {
  name: { ru: 'Для учителей', kk: 'Мұғалімдерге', en: 'For teachers' },
  price: { ru: '0 ₸', kk: '0 ₸', en: '0 ₸' },
  priceNote: {
    ru: 'бесплатно для учителей государственных школ',
    kk: 'мемлекеттік мектеп мұғалімдеріне тегін',
    en: 'free for state school teachers',
  },
  description: {
    ru: 'Инструменты учителя: уроки, аналитика, класс',
    kk: 'Мұғалім құралдары: сабақтар, аналитика, сынып',
    en: 'Teacher tools: lessons, analytics, class',
  },
  features: [
    { ru: 'Панель учителя и статистика класса', kk: 'Мұғалім панелі мен сынып статистикасы', en: 'Teacher panel and class statistics' },
    { ru: 'Аналитика: кому нужна помощь', kk: 'Аналитика: кімге көмек керек', en: 'Analytics: who needs help' },
    { ru: 'Создание собственных уроков', kk: 'Өз сабақтарын құру', en: 'Create your own lessons' },
    { ru: 'Напоминания о сроках', kk: 'Мерзім еске салғыштары', en: 'Deadline reminders' },
    { ru: '+150 ⚙ Новасов каждому ученику ежемесячно', kk: 'Әр оқушыға ай сайын +150 ⚙ Новас', en: '+150 ⚙ Novas per student every month' },
  ],
  cta: { ru: 'Начать как учитель', kk: 'Мұғалім ретінде бастау', en: 'Start as a teacher' },
};

interface Plan {
  name: Localized;
  price: Localized;
  priceNote: Localized;
  description: Localized;
  features: Localized[];
  cta: Localized;
  popular: boolean;
}

const PAID_PLANS: Plan[] = [
  {
    name: { ru: 'Старт', kk: 'Старт', en: 'Start' },
    price: { ru: '3 000 ₸', kk: '3 000 ₸', en: '3 000 ₸' },
    priceNote: { ru: 'в месяц · отмена в любой момент', kk: 'айына · кез келген уақытта тоқтатуға болады', en: 'per month · cancel anytime' },
    description: {
      ru: 'Для тех, кто занимается сам',
      kk: 'Өз бетінше айналысатындарға арналған',
      en: 'For those who study on their own',
    },
    features: [
      { ru: 'Всё из бесплатного тарифа', kk: 'Тегін тарифтің бәрі', en: 'Everything from the free plan' },
      { ru: '+200 ⚙ Новасов каждый месяц', kk: 'Ай сайын +200 ⚙ Новас', en: '+200 ⚙ Novas every month' },
      { ru: 'Расширенный дневной лимит ИИ-чата', kk: 'ИИ-чаттың кеңейтілген күндік лимиті', en: 'Extended daily AI chat limit' },
      { ru: 'Полная практика по всем темам', kk: 'Барлық тақырып бойынша толық практика', en: 'Full practice across all topics' },
      { ru: 'Напоминания о целях', kk: 'Мақсаттар туралы еске салғыштар', en: 'Goal reminders' },
    ],
    cta: { ru: 'Выбрать Старт', kk: 'Старт таңдау', en: 'Choose Start' },
    popular: false,
  },
  {
    name: { ru: 'Про', kk: 'Про', en: 'Pro' },
    price: { ru: '7 500 ₸', kk: '7 500 ₸', en: '7 500 ₸' },
    priceNote: { ru: 'в месяц · отмена в любой момент', kk: 'айына · кез келген уақытта тоқтатуға болады', en: 'per month · cancel anytime' },
    description: {
      ru: 'Полная подготовка к ЕНТ и олимпиадам',
      kk: 'ҰБТ мен олимпиадаларға толық дайындық',
      en: 'Full UNT and olympiad preparation',
    },
    features: [
      { ru: 'Безлимитный ИИ-чат с NOV-01', kk: 'NOV-01-мен шексіз ИИ-чат', en: 'Unlimited AI chat with NOV-01' },
      { ru: '+500 ⚙ Новасов каждый месяц', kk: 'Ай сайын +500 ⚙ Новас', en: '+500 ⚙ Novas every month' },
      { ru: 'Полная подготовка к ЕНТ и олимпиадам', kk: 'ҰБТ мен олимпиадаларға толық дайындық', en: 'Full UNT and olympiad prep' },
      { ru: 'Персональный план от NOV-01', kk: 'NOV-01-ден жеке дайындық жоспары', en: 'Personal roadmap from NOV-01' },
      { ru: 'Разбор каждой ошибки шаг за шагом', kk: 'Әр қатені қадамдап талдау', en: 'Step-by-step review of every mistake' },
    ],
    cta: { ru: 'Выбрать Про', kk: 'Про таңдау', en: 'Choose Pro' },
    popular: true,
  },
  {
    name: { ru: 'Максимум', kk: 'Максимум', en: 'Maximum' },
    price: { ru: '20 000 ₸', kk: '20 000 ₸', en: '20 000 ₸' },
    priceNote: { ru: 'в месяц · отмена в любой момент', kk: 'айына · кез келген уақытта тоқтатуға болады', en: 'per month · cancel anytime' },
    description: {
      ru: 'Максимум ИИ и приоритет',
      kk: 'ИИ мен басымдықтың ең жоғарғы деңгейі',
      en: 'Maximum AI and priority',
    },
    features: [
      { ru: 'Всё из Про', kk: 'Про тарифінің бәрі', en: 'Everything from Pro' },
      { ru: '+1 200 ⚙ Новасов каждый месяц', kk: 'Ай сайын +1 200 ⚙ Новас', en: '+1,200 ⚙ Novas every month' },
      { ru: 'Доступ к Opus 5 в ИИ-чате', kk: 'ИИ-чатта Opus 5-ке қолжетімділік', en: 'Access to Opus 5 in the AI chat' },
      { ru: 'Приоритетная проверка открытых ответов', kk: 'Ашық жауаптарды басым тексеру', en: 'Priority review of open-ended answers' },
      { ru: 'Ранний доступ к новым модулям', kk: 'Жаңа модульдерге ерте қолжетімділік', en: 'Early access to new modules' },
    ],
    cta: { ru: 'Выбрать Максимум', kk: 'Максимум таңдау', en: 'Choose Maximum' },
    popular: false,
  },
];

const POPULAR_RIBBON: Localized = {
  ru: 'Популярный',
  kk: 'Танымал',
  en: 'Popular',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const Pricing: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...motionProps} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
            {loc(language, BADGE)}
          </span>
          <h2
            id="pricing-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-5 text-base text-slateink md:text-lg">
            {loc(language, SUBTITLE)}
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-5">
          {/* Free plan — compact horizontal banner */}
          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0 }}>
            <div className="flex flex-col gap-4 rounded-2xl border border-line/50 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-lg font-bold text-ink">
                  {loc(language, FREE_PLAN.name)}
                </span>
                <span className="text-sm text-slateink">{loc(language, FREE_PLAN.tagline)}</span>
              </div>

              <div className="hidden items-center gap-3 text-sm text-slateink md:flex">
                {FREE_PLAN.highlights.map((h, i) => (
                  <React.Fragment key={h.en}>
                    {i > 0 && <span className="h-1 w-1 shrink-0 rounded-full bg-line" aria-hidden="true" />}
                    <span className="whitespace-nowrap">{loc(language, h)}</span>
                  </React.Fragment>
                ))}
              </div>

              <Link
                to="/signup"
                className={`${FOCUS_RING} inline-flex shrink-0 items-center justify-center rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
              >
                {loc(language, FREE_PLAN.cta)}
              </Link>
            </div>
          </motion.div>

          {/* Teacher plan — wide callout banner */}
          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="rounded-2xl border border-teal/40 bg-mist/20 p-6 md:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="shrink-0 lg:max-w-xs">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {loc(language, TEACHER_PLAN.name)}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold tracking-tight text-ink">
                      {loc(language, TEACHER_PLAN.price)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-teal-dark">
                    {loc(language, TEACHER_PLAN.priceNote)}
                  </p>
                  <p className="mt-3 text-sm text-slateink">
                    {loc(language, TEACHER_PLAN.description)}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-6 lg:items-end">
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {TEACHER_PLAN.features.map((feature) => (
                      <li key={feature.en} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10">
                          <Check className="h-3 w-3 text-teal" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-snug text-ink">
                          {loc(language, feature)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/signup"
                    className={`${FOCUS_RING} inline-flex w-full items-center justify-center rounded-xl bg-teal px-6 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark sm:w-auto`}
                  >
                    {loc(language, TEACHER_PLAN.cta)}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three paid plans */}
          <div className="mt-4 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
            {PAID_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name.en}
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                className={`relative flex flex-col ${
                  plan.popular ? 'lg:-translate-y-2 lg:scale-[1.03]' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-bold text-white shadow-[0_4px_14px_rgba(243,138,118,0.35)]">
                    {loc(language, POPULAR_RIBBON)}
                  </span>
                )}

                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 md:p-7 ${
                    plan.popular
                      ? 'border-2 border-coral/60 hover:shadow-[0_8px_30px_rgba(243,138,118,0.14)]'
                      : 'border border-line/50 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]'
                  }`}
                >
                  {/* robot-panel treatment: thin top bar + LED dot */}
                  <div className="absolute inset-x-0 top-0 h-px bg-teal-light/40" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className={`absolute right-5 top-4 h-2 w-2 rounded-full ${
                      plan.popular ? 'bg-coral' : 'bg-teal-light'
                    }`}
                  />

                  <h3 className="font-display text-xl font-bold text-ink">
                    {loc(language, plan.name)}
                  </h3>
                  <p className="mt-1.5 text-sm text-slateink">
                    {loc(language, plan.description)}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                      {loc(language, plan.price)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slateink">{loc(language, plan.priceNote)}</p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature.en} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10">
                          <Check className="h-3 w-3 text-teal" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-snug text-ink">
                          {loc(language, feature)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/signup"
                    className={`${FOCUS_RING} mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] hover:bg-teal-dark'
                        : 'border border-line bg-white text-ink hover:border-teal hover:text-teal'
                    }`}
                  >
                    {loc(language, plan.cta)}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
