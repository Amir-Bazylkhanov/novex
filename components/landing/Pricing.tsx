import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
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

interface Plan {
  name: Localized;
  price: Localized;
  priceNote: Localized;
  description: Localized;
  features: Localized[];
  cta: Localized;
  popular: boolean;
}

const PLANS: Plan[] = [
  {
    name: { ru: 'Ученик', kk: 'Оқушы', en: 'Student' },
    price: { ru: 'Бесплатно', kk: 'Тегін', en: 'Free' },
    priceNote: { ru: 'навсегда', kk: 'мәңгілікке', en: 'forever' },
    description: {
      ru: 'Всё, чтобы начать и понять свой уровень',
      kk: 'Бастау және деңгейді білу үшін қажеттінің бәрі',
      en: 'Everything needed to start and learn your level',
    },
    features: [
      { ru: 'Диагностика уровня по предметам', kk: 'Пәндер бойынша деңгей диагностикасы', en: 'Level diagnostics by subject' },
      { ru: 'Базовые модули и мини-тесты', kk: 'Негізгі модульдер мен шағын тесттер', en: 'Core modules and mini-tests' },
      { ru: 'ИИ-наставник с дневным лимитом', kk: 'Күндік лимиті бар ИИ-тәлімгер', en: 'AI tutor with a daily limit' },
      { ru: '100 ⚙ Новасов на старте + заработок за уроки', kk: 'Стартта 100 ⚙ Новас + сабақтар үшін табыс', en: '100 ⚙ Novas to start + earnings from lessons' },
      { ru: 'Прогресс по темам в кабинете', kk: 'Кабинетте тақырыптар бойынша үдеріс', en: 'Topic progress in the dashboard' },
    ],
    cta: { ru: 'Начать бесплатно', kk: 'Тегін бастау', en: 'Start for free' },
    popular: false,
  },
  {
    name: { ru: 'Про', kk: 'Про', en: 'Pro' },
    price: { ru: '2 990 ₸', kk: '2 990 ₸', en: '2 990 ₸' },
    priceNote: { ru: 'в месяц · отмена в любой момент', kk: 'айына · кез келген уақытта тоқтатуға болады', en: 'per month · cancel anytime' },
    description: {
      ru: 'Полная подготовка к ЕНТ и олимпиадам',
      kk: 'ҰБТ мен олимпиадаларға толық дайындық',
      en: 'Full UNT and olympiad preparation',
    },
    features: [
      { ru: 'Безлимитный ИИ-наставник NOV-02', kk: 'Шексіз ИИ-тәлімгер NOV-02', en: 'Unlimited AI tutor NOV-02' },
      { ru: '+500 ⚙ Новасов каждый месяц', kk: 'Ай сайын +500 ⚙ Новас', en: '+500 ⚙ Novas every month' },
      { ru: 'Полная подготовка к ЕНТ и олимпиадам', kk: 'ҰБТ мен олимпиадаларға толық дайындық', en: 'Full UNT and olympiad prep' },
      { ru: 'Персональный план от NOV-03', kk: 'NOV-03-тен жеке дайындық жоспары', en: 'Personal roadmap from NOV-03' },
      { ru: 'Разбор каждой ошибки шаг за шагом', kk: 'Әр қатені қадамдап талдау', en: 'Step-by-step review of every mistake' },
    ],
    cta: { ru: 'Выбрать Про', kk: 'Про таңдау', en: 'Choose Pro' },
    popular: true,
  },
  {
    name: { ru: 'Школа', kk: 'Мектеп', en: 'School' },
    price: { ru: '0 ₸', kk: '0 ₸', en: '0 ₸' },
    priceNote: {
      ru: 'бесплатно для государственных школ',
      kk: 'мемлекеттік мектептерге тегін',
      en: 'free for state schools',
    },
    description: {
      ru: 'Инструменты для учителей и всей школы',
      kk: 'Мұғалімдер мен бүкіл мектепке арналған құралдар',
      en: 'Tools for teachers and the whole school',
    },
    features: [
      { ru: 'Панель учителя и статистика класса', kk: 'Мұғалім панелі мен сынып статистикасы', en: 'Teacher panel and class statistics' },
      { ru: 'Аналитика: кому нужна помощь', kk: 'Аналитика: кімге көмек керек', en: 'Analytics: who needs help' },
      { ru: 'Добавление своих тем и заданий', kk: 'Өз тақырыптары мен тапсырмаларын қосу', en: 'Add your own topics and tasks' },
      { ru: 'Напоминания о сроках для класса', kk: 'Сыныпқа мерзім еске салғыштары', en: 'Deadline reminders for the class' },
      { ru: '+300 ⚙ Новасов каждому ученику ежемесячно', kk: 'Әр оқушыға ай сайын +300 ⚙ Новас', en: '+300 ⚙ Novas per student every month' },
    ],
    cta: { ru: 'Подключить школу', kk: 'Мектепті қосу', en: 'Onboard a school' },
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

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name.en}
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.1 * i }}
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

                <a
                  href="#cta"
                  className={`${FOCUS_RING} mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] hover:bg-teal-dark'
                      : 'border border-line bg-white text-ink hover:border-teal hover:text-teal'
                  }`}
                >
                  {loc(language, plan.cta)}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
