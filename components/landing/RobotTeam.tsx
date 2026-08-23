// RobotTeam — секция лендинга «Три направления — один путь».
// Показывает три направления обучения в Novex (школьная программа, жизненные навыки,
// навыки будущего) в виде трёх карточек, каждую из которых «ведёт» свой робот-наставник.
// Рисунки роботов берутся из components/robots/RobotAvatars.tsx, тексты — на трёх языках (ru/kk/en).
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, CircuitTrace, GearDecor } from '../robots/RobotAvatars.tsx';
import type { MentorRobotId } from '../robots/RobotAvatars.tsx';

const EYEBROW: Localized = {
  ru: 'Направления Novex',
  kk: 'Novex бағыттары',
  en: 'Novex directions',
};

const TITLE: Localized = {
  ru: 'Три направления — один путь',
  kk: 'Үш бағыт — бір жол',
  en: 'Three directions — one path',
};

const SUBTITLE: Localized = {
  ru: 'Три направления обучения покрывают весь путь ученика: школьную программу, навыки для жизни и компетенции будущего. Каждое ведёт свой робот.',
  kk: 'Үш оқу бағыты оқушының бүкіл жолын қамтиды: мектеп бағдарламасы, өмірлік дағдылар және болашақ құзыреттер. Әр бағытты жеке робот жетекшилейді.',
  en: 'Three learning directions cover the whole student journey: the school curriculum, life skills, and future-ready competencies. Each is led by its own robot.',
};

interface RobotCardData {
  id: MentorRobotId;
  code: string;
  /* accent classes built only from the locked Tailwind tokens */
  // Классы цвета хранятся строками заранее (а не собираются на лету),
  // чтобы Tailwind их увидел и не вырезал при сборке.
  text: string;
  border: string;
  hoverBorder: string;
  bg: string;
  tag: Localized;
  name: Localized;
  job: Localized;
  bullets: Localized[];
}

// Данные трёх карточек: какой робот показывается, его кодовое имя (NOV-01 и т.д.),
// цвета оформления и тексты — название направления, его роль и список особенностей.
const CARDS: RobotCardData[] = [
  {
    id: 'nov4',
    code: 'NOV-01',
    text: 'text-teal-dark',
    border: 'border-teal-dark/40',
    hoverBorder: 'hover:border-teal-dark/60',
    bg: 'bg-teal-dark',
    tag: { ru: 'Академик', kk: 'Академик', en: 'Academic' },
    name: { ru: 'Академическая база', kk: 'Академиялық негіз', en: 'Academic Foundation' },
    job: {
      ru: 'Школа и подготовка к вузу — математика, физика, языки, экзамены.',
      kk: 'Мектеп пәндері мен жоғары оқу орнына дайындық — математика, физика, тілдер, емтихандар.',
      en: 'School subjects and university prep — math, physics, languages, exams.',
    },
    bullets: [
      {
        ru: '4 модуля: точные науки, AP/IB, экзамены, исследования',
        kk: '4 модуль: нақты ғылымдар, AP/IB, емтихандар, зерттеулер',
        en: '4 modules: exact sciences, AP/IB, exams, research',
      },
      {
        ru: 'Уроки с теорией, примерами и практикой',
        kk: 'Теория, мысалдар және тәжірибесі бар сабақтар',
        en: 'Lessons with theory, examples, and practice',
      },
      {
        ru: 'Диагностика и уровни по каждой теме',
        kk: 'Әр тақырып бойынша диагностика мен деңгейлер',
        en: 'Diagnostics and levels for every topic',
      },
    ],
  },
  {
    id: 'nov5',
    code: 'NOV-02',
    text: 'text-teal',
    border: 'border-teal/40',
    hoverBorder: 'hover:border-teal/60',
    bg: 'bg-teal',
    tag: { ru: 'Практик', kk: 'Практик', en: 'Practitioner' },
    name: { ru: 'Жизненные навыки', kk: 'Өмірлік дағдылар', en: 'Life Skills' },
    job: {
      ru: 'Навыки для реальной жизни: от денег до общения.',
      kk: 'Нақты өмірге қажетті дағдылар: қаржыдан қарым-қатынасқа дейін.',
      en: 'Skills for real life: from money to communication.',
    },
    bullets: [
      {
        ru: 'Финансовая грамотность и коммуникация',
        kk: 'Қаржылық сауаттылық пен коммуникация',
        en: 'Financial literacy and communication',
      },
      {
        ru: 'Психология и продуктивность',
        kk: 'Психология мен өнімділік',
        en: 'Psychology and productivity',
      },
      {
        ru: 'Тесты уровня после каждого урока',
        kk: 'Әр сабақтан кейінгі деңгей тесттері',
        en: 'Level tests after every lesson',
      },
    ],
  },
  {
    id: 'nov6',
    code: 'NOV-03',
    text: 'text-coral',
    border: 'border-coral/40',
    hoverBorder: 'hover:border-coral/60',
    bg: 'bg-coral',
    tag: { ru: 'Кибер', kk: 'Кибер', en: 'Cyber' },
    name: { ru: 'Навыки будущего', kk: 'Болашақ дағдылары', en: 'Future Skills' },
    job: {
      ru: 'Код, ИИ и самопознание — то, что нужно завтра.',
      kk: 'Код, ЖИ және өзін тану — ертең қажет болатындар.',
      en: 'Code, AI, and self-discovery — what tomorrow demands.',
    },
    bullets: [
      {
        ru: 'Программирование и предпринимательство',
        kk: 'Бағдарламалау мен кәсіпкерлік',
        en: 'Programming and entrepreneurship',
      },
      {
        ru: 'Креативность и карьера',
        kk: 'Креативтілік пен мансап',
        en: 'Creativity and career',
      },
      {
        ru: 'Профориентация от NOV-01',
        kk: 'NOV-01-ден кәсіби бағдар',
        en: 'Career guidance from NOV-01',
      },
    ],
  },
];

// Настройка анимации появления: карточки плавно «всплывают» снизу при прокрутке до секции.
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
            {/* Карточки трёх направлений. Они появляются по очереди — каждая следующая
                с небольшой задержкой (delay: i * 0.12), чтобы это выглядело красиво. */}
            {CARDS.map((card, i) => (
              <motion.article
                key={card.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl border bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)] md:p-8 ${card.border} ${card.hoverBorder}`}
              >
                {/* status LED — маленькая цветная точка в углу карточки,
                    как индикатор «робот на связи» */}
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
