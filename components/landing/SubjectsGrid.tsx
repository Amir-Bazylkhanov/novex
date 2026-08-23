// SubjectsGrid — секция лендинга «Предметы и модули».
// Показывает сетку из восьми школьных предметов (для 7–12 классов) с коротким описанием
// и количеством тем в каждом, а сверху — чипсы с целями обучения (ЕНТ, олимпиады и т.д.).
// Тексты хранятся на трёх языках (ru/kk/en) и выбираются через loc() по текущему языку.
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  BookOpen,
  Calculator,
  Code,
  FlaskConical,
  Globe,
  Landmark,
  Languages,
  Leaf,
  Sparkles,
  Target,
} from 'lucide-react';
import { GearDecor, CircuitTrace } from '../robots/RobotAvatars.tsx';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const EYEBROW: Localized = {
  ru: 'Предметы и модули',
  kk: 'Пәндер және модульдер',
  en: 'Subjects and modules',
};

const TITLE: Localized = {
  ru: 'Восемь предметов для 7–12 класса',
  kk: '7–12 сыныптарға арналған сегіз пән',
  en: 'Eight subjects for grades 7–12',
};

const SUBTITLE: Localized = {
  ru: 'В каждом предмете — темы, задания и ИИ-объяснения: от повторения темы до ЕНТ.',
  kk: 'Әр пәнде — тақырыптар, тапсырмалар және ИИ-түсіндірмелер: тақырып қайталаудан ҰБТ-ға дейін.',
  en: 'Every subject has topics, tasks and AI explanations: from topic revision to UNT.',
};

// Цели обучения, которые показываются чипсами над сеткой предметов.
const GOALS: Array<{ icon: React.ElementType; label: Localized }> = [
  { icon: Target, label: { ru: 'ЕНТ', kk: 'ҰБТ', en: 'UNT' } },
  { icon: Sparkles, label: { ru: 'Олимпиады', kk: 'Олимпиадалар', en: 'Olympiads' } },
  {
    icon: BookOpen,
    label: { ru: 'Повторение темы', kk: 'Тақырып қайталау', en: 'Topic revision' },
  },
  { icon: Landmark, label: { ru: 'Поступление', kk: 'Оқуға түсу', en: 'Admissions' } },
];

// Список восьми предметов: иконка, название, короткая подпись и количество тем.
const SUBJECTS: Array<{
  icon: React.ElementType;
  name: Localized;
  tagline: Localized;
  topics: Localized;
}> = [
  {
    icon: Calculator,
    name: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' },
    tagline: { ru: 'От основ до ЕНТ', kk: 'Негіздерден ҰБТ-ға дейін', en: 'From basics to UNT' },
    topics: { ru: '24 темы', kk: '24 тақырып', en: '24 topics' },
  },
  {
    icon: Atom,
    name: { ru: 'Физика', kk: 'Физика', en: 'Physics' },
    tagline: {
      ru: 'Задачи с объяснением каждого шага',
      kk: 'Әр қадамы түсіндірілетін есептер',
      en: 'Tasks with every step explained',
    },
    topics: { ru: '18 тем', kk: '18 тақырып', en: '18 topics' },
  },
  {
    icon: FlaskConical,
    name: { ru: 'Химия', kk: 'Химия', en: 'Chemistry' },
    tagline: {
      ru: 'Формулы, реакции, практика',
      kk: 'Формулалар, реакциялар, практика',
      en: 'Formulas, reactions, practice',
    },
    topics: { ru: '16 тем', kk: '16 тақырып', en: '16 topics' },
  },
  {
    icon: Leaf,
    name: { ru: 'Биология', kk: 'Биология', en: 'Biology' },
    tagline: {
      ru: 'Схемы, термины, тесты',
      kk: 'Сызбалар, терминдер, тесттер',
      en: 'Diagrams, terms, tests',
    },
    topics: { ru: '17 тем', kk: '17 тақырып', en: '17 topics' },
  },
  {
    icon: Code,
    name: { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' },
    tagline: {
      ru: 'Алгоритмы и программирование',
      kk: 'Алгоритмдер және бағдарламалау',
      en: 'Algorithms and programming',
    },
    topics: { ru: '20 тем', kk: '20 тақырып', en: '20 topics' },
  },
  {
    icon: Languages,
    name: {
      ru: 'Қазақ тілі мен әдебиеті',
      kk: 'Қазақ тілі мен әдебиеті',
      en: 'Kazakh language and literature',
    },
    tagline: {
      ru: 'Грамматика и тексты на казахском',
      kk: 'Грамматика және қазақша мәтіндер',
      en: 'Grammar and texts in Kazakh',
    },
    topics: { ru: '22 темы', kk: '22 тақырып', en: '22 topics' },
  },
  {
    icon: Globe,
    name: { ru: 'Английский язык', kk: 'Ағылшын тілі', en: 'English' },
    tagline: { ru: 'От A1 до B2', kk: 'A1-ден B2-ге дейін', en: 'From A1 to B2' },
    topics: { ru: '19 тем', kk: '19 тақырып', en: '19 topics' },
  },
  {
    icon: Landmark,
    name: { ru: 'История Казахстана', kk: 'Қазақстан тарихы', en: 'History of Kazakhstan' },
    tagline: {
      ru: 'Даты, события, контекст',
      kk: 'Даталар, оқиғалар, контекст',
      en: 'Dates, events, context',
    },
    topics: { ru: '15 тем', kk: '15 тақырып', en: '15 topics' },
  },
];

const SubjectsGrid: React.FC = () => {
  const { language } = useLanguage();
  // Если у пользователя включена настройка «уменьшить анимации», показываем всё сразу, без движения.
  const reduceMotion = useReducedMotion();

  // Настройка анимации появления блоков при прокрутке до секции.
  const fadeUp = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  // Задержка появления: карточки всплывают по очереди, а не все одновременно.
  const step = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.5,
    delay: reduceMotion ? 0 : delay,
  });

  return (
    <section
      id="subjects"
      aria-labelledby="subjects-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <GearDecor
        spin
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 text-teal-light/25 sm:h-[26rem] sm:w-[26rem]"
      />
      <CircuitTrace className="pointer-events-none absolute right-8 top-12 hidden h-8 w-64 text-mist/70 lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-teal-dark">
            {loc(language, EYEBROW)}
          </span>
          <h2
            id="subjects-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-4 text-base text-slateink md:text-lg">{loc(language, SUBTITLE)}</p>
        </motion.div>

        <motion.ul {...fadeUp} transition={step(0.12)} className="mt-8 flex flex-wrap gap-2.5">
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            return (
              <li key={goal.label.en}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, goal.label)}
                </span>
              </li>
            );
          })}
        </motion.ul>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUBJECTS.map((subject, i) => {
            const Icon = subject.icon;
            // У каждой третьей карточки сверху добавляем декоративную «полоску-индикатор»,
            // чтобы сетка выглядела живее.
            const withLed = i % 3 === 0;
            return (
              <motion.li key={subject.name.en} {...fadeUp} transition={step(0.18 + i * 0.05)}>
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)] ${
                    withLed ? 'p-5 pt-7' : 'p-5'
                  }`}
                >
                  {withLed && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 flex h-1.5 items-center justify-end bg-teal-light/40 pr-3"
                    >
                      <span className="h-1 w-1 rounded-full bg-teal motion-safe:animate-pulse" />
                    </span>
                  )}
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist/40">
                    <Icon className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {loc(language, subject.name)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slateink">
                    {loc(language, subject.tagline)}
                  </p>
                  <p className="mt-3 inline-flex items-center rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal-dark">
                    {loc(language, subject.topics)}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SubjectsGrid;
