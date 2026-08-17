import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, CircuitTrace, GearDecor } from '../robots/RobotAvatars.tsx';
import type { RobotId } from '../robots/RobotAvatars.tsx';

const EYEBROW: Localized = {
  ru: 'Команда Novex',
  kk: 'Novex командасы',
  en: 'The Novex team',
};

const TITLE: Localized = {
  ru: 'Три робота, которые учат по-разному',
  kk: 'Әртүрлі тәсілмен оқытатын үш робот',
  en: 'Three robots that teach differently',
};

const SUBTITLE: Localized = {
  ru: 'Три ИИ-помощника делят один путь ученика: диагностика, обучение, план до цели. Каждый отвечает за свой этап и передаёт эстафету следующему.',
  kk: 'Үш ИИ-көмекші бір оқушының жолын бөліседі: диагностика, оқыту, мақсатқа дейінгі жоспар. Әрқайсысы өз кезеңіне жауапты және эстафетаны келесісіне табыстайды.',
  en: 'Three AI helpers share one student’s journey: diagnostics, tutoring, and the roadmap to the goal. Each owns its stage and hands off to the next.',
};

interface RobotCardData {
  id: RobotId;
  code: string;
  /* accent classes built only from the locked Tailwind tokens */
  text: string;
  border: string;
  hoverBorder: string;
  bg: string;
  tag: Localized;
  name: Localized;
  job: Localized;
  bullets: Localized[];
}

const CARDS: RobotCardData[] = [
  {
    id: 'nov1',
    code: 'NOV-01',
    text: 'text-teal-dark',
    border: 'border-teal-dark/40',
    hoverBorder: 'hover:border-teal-dark/60',
    bg: 'bg-teal-dark',
    tag: { ru: 'Диагностика', kk: 'Диагностика', en: 'Diagnostics' },
    name: { ru: 'Диагност', kk: 'Диагност', en: 'Diagnostician' },
    job: {
      ru: 'Проводит стартовый тест и строит карту знаний ученика.',
      kk: 'Бастапқы тест өткізіп, оқушының білім картасын құрады.',
      en: 'Runs the placement test and builds the student’s knowledge map.',
    },
    bullets: [
      {
        ru: 'Определяет уровень по каждой теме',
        kk: 'Әр тақырып бойынша деңгейді анықтайды',
        en: 'Estimates the level for every topic',
      },
      {
        ru: 'Находит слабые места до старта',
        kk: 'Әлсіз тұстарды алдын ала табады',
        en: 'Finds weak spots before learning starts',
      },
      {
        ru: 'Подсказывает, с чего начать',
        kk: 'Неден бастау керегін ұсынады',
        en: 'Suggests where to begin',
      },
    ],
  },
  {
    id: 'nov2',
    code: 'NOV-02',
    text: 'text-teal',
    border: 'border-teal/40',
    hoverBorder: 'hover:border-teal/60',
    bg: 'bg-teal',
    tag: {
      ru: 'Обучение и обратная связь',
      kk: 'Оқыту мен кері байланыс',
      en: 'Tutoring & feedback',
    },
    name: { ru: 'Наставник', kk: 'Тәлімгер', en: 'Tutor' },
    job: {
      ru: 'Объясняет ошибки шаг за шагом и подстраивает сложность заданий.',
      kk: 'Қателерді қадамдап түсіндіріп, тапсырмалардың күрделілігін бейімдейді.',
      en: 'Explains mistakes step by step and adapts task difficulty live.',
    },
    bullets: [
      {
        ru: 'Разбор решения на трёх языках',
        kk: 'Шешімді үш тілде талдайды',
        en: 'Step-by-step review in three languages',
      },
      {
        ru: 'Отвечает на вопросы в чате 24/7',
        kk: 'Чаттағы сұрақтарға 24/7 жауап береді',
        en: 'Answers chat questions 24/7',
      },
      {
        ru: 'Сложность растёт вместе с учеником',
        kk: 'Күрделілік оқушымен бірге өседі',
        en: 'Difficulty grows with the student',
      },
    ],
  },
  {
    id: 'nov3',
    code: 'NOV-03',
    text: 'text-coral',
    border: 'border-coral/40',
    hoverBorder: 'hover:border-coral/60',
    bg: 'bg-coral',
    tag: {
      ru: 'План и контроль',
      kk: 'Жоспар мен бақылау',
      en: 'Roadmap & tracking',
    },
    name: { ru: 'Куратор', kk: 'Куратор', en: 'Curator' },
    job: {
      ru: 'Строит план подготовки к ЕНТ и следит за дедлайнами.',
      kk: 'ҰБТ-ға дайындық жоспарын құрып, мерзімдерді қадағалайды.',
      en: 'Builds the prep roadmap to the UNT and tracks every deadline.',
    },
    bullets: [
      {
        ru: 'Личный роадмап до даты экзамена',
        kk: 'Емтихан күніне дейінгі жеке жоспар',
        en: 'A personal roadmap up to exam day',
      },
      {
        ru: 'Напоминания о сроках и повторении',
        kk: 'Мерзім мен қайталау туралы еске салғыштар',
        en: 'Deadline and revision reminders',
      },
      {
        ru: 'Отчёт об успехах для учителя',
        kk: 'Мұғалімге арналған үлгерім есебі',
        en: 'Progress reports for the teacher',
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const RobotTeam: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="robots"
      aria-labelledby="robots-heading"
      className="relative overflow-hidden bg-mist/25"
    >
      {/* background decoration: thin outline gears bleeding off the edges */}
      <GearDecor
        spin
        teeth={10}
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 text-teal-light/30"
      />
      <GearDecor
        spin
        teeth={8}
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 text-teal-light/25"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-teal-dark">
            {loc(language, EYEBROW)}
          </p>
          <h2
            id="robots-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-4 text-base text-slateink md:text-lg">
            {loc(language, SUBTITLE)}
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* circuit trace connecting the three units on desktop */}
          <CircuitTrace className="pointer-events-none absolute left-1/2 top-24 hidden w-3/4 -translate-x-1/2 text-teal-light/60 md:block" />

          <div className="relative grid gap-6 md:grid-cols-3">
            {CARDS.map((card, i) => (
              <motion.article
                key={card.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl border bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)] md:p-8 ${card.border} ${card.hoverBorder}`}
              >
                {/* status LED */}
                <span
                  aria-hidden="true"
                  className={`absolute right-5 top-5 h-2 w-2 rounded-full ${card.bg}`}
                />

                <RobotAvatar robot={card.id} className="h-24 w-24 md:h-28 md:w-28" />

                <p
                  className={`mt-5 font-mono text-[11px] uppercase tracking-widest ${card.text}`}
                >
                  {card.code} · {loc(language, card.tag)}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {loc(language, card.name)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slateink">
                  {loc(language, card.job)}
                </p>

                <ul className="mt-4 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet.en}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${card.text}`}
                        aria-hidden="true"
                      />
                      {loc(language, bullet)}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotTeam;
