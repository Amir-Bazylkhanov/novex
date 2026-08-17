import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  Plus,
  School,
  Users,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, CircuitTrace } from '../robots/RobotAvatars.tsx';

const BADGE: Localized = {
  ru: 'Для школ и учителей',
  kk: 'Мектептер мен мұғалімдерге',
  en: 'For schools and teachers',
};

const TITLE_BEFORE: Localized = {
  ru: 'Панель учителя: весь класс ',
  kk: 'Мұғалім панелі: бүкіл сынып ',
  en: 'Teacher panel: the whole class ',
};
const TITLE_ACCENT: Localized = {
  ru: 'как на ладони',
  kk: 'алақандағыдай',
  en: 'at a glance',
};

const SUBTITLE: Localized = {
  ru: 'Классная статистика, разбор по каждому ученику и добавление новых материалов — без лишней отчётности и без замены учителя.',
  kk: 'Сынып статистикасы, әр оқушы бойынша талдау және жаңа материалдар қосу — артық есептіліксіз және мұғалімді алмастырмай.',
  en: 'Class statistics, per-student drilldown and adding new materials — with no extra paperwork and no replacing the teacher.',
};

/* --- feature bullets --- */

const FEATURES: Array<{
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  title: Localized;
  desc: Localized;
}> = [
  {
    icon: BarChart3,
    title: {
      ru: 'Статистика по классу',
      kk: 'Сынып бойынша статистика',
      en: 'Class-level statistics',
    },
    desc: {
      ru: 'Средний балл и динамика по темам — сразу видно, где проседает весь класс.',
      kk: 'Орташа балл мен тақырыптар бойынша динамика — сыныптың қай жерде әлсірейтіні бірден көрінеді.',
      en: 'Average score and topic trends — see at once where the whole class is slipping.',
    },
  },
  {
    icon: Users,
    title: {
      ru: 'Каждый ученик на виду',
      kk: 'Әр оқушы көз алдында',
      en: 'Every student in view',
    },
    desc: {
      ru: 'NOV-03 Куратор отмечает, кому нужна помощь, и по какой именно теме.',
      kk: 'NOV-03 Куратор кімге және қай тақырып бойынша көмек керегін белгілейді.',
      en: 'NOV-03 the Curator flags who needs help and on which exact topic.',
    },
  },
  {
    icon: Plus,
    title: {
      ru: 'Новые темы за пару минут',
      kk: 'Бірнеше минутта жаңа тақырып',
      en: 'New topics in minutes',
    },
    desc: {
      ru: 'Учитель добавляет темы, задания и материалы — они сразу попадают в планы учеников.',
      kk: 'Мұғалім тақырыптар, тапсырмалар мен материалдар қосады — олар оқушылардың жоспарына бірден түседі.',
      en: 'Teachers add topics, tasks and materials — they land in student roadmaps instantly.',
    },
  },
  {
    icon: Bell,
    title: {
      ru: 'Напоминания о дедлайнах',
      kk: 'Мерзімдер туралы еске салғыштар',
      en: 'Deadline reminders',
    },
    desc: {
      ru: 'Платформа напоминает о контрольных и сроках — и ученикам, и учителю.',
      kk: 'Платформа бақылау жұмыстары мен мерзімдер туралы оқушыға да, мұғалімге де еске салады.',
      en: 'The platform reminds students and teachers about tests and deadlines.',
    },
  },
];

/* --- teacher mock strings --- */

const MOCK_CLASS: Localized = {
  ru: '9 «Б» класс · Математика',
  kk: '9 «Б» сынып · Математика',
  en: 'Grade 9 “B” · Mathematics',
};
const MOCK_AVG_LABEL: Localized = {
  ru: 'Средний балл класса',
  kk: 'Сыныптың орташа баллы',
  en: 'Class average',
};
const MOCK_CURATOR_LABEL: Localized = {
  ru: 'NOV-03 · КУРАТОР',
  kk: 'NOV-03 · КУРАТОР',
  en: 'NOV-03 · CURATOR',
};
const MOCK_CURATOR_TITLE: Localized = {
  ru: 'Нужна помощь: 4 ученика',
  kk: 'Көмек керек: 4 оқушы',
  en: 'Needs help: 4 students',
};
const MOCK_CURATOR_SUB: Localized = {
  ru: 'Тема «Тригонометрия» — предложить повторение',
  kk: '«Тригонометрия» тақырыбы — қайталау ұсыну',
  en: 'Topic “Trigonometry” — suggest a revision set',
};
const MOCK_CHART_LABEL: Localized = {
  ru: 'Успеваемость по темам',
  kk: 'Тақырыптар бойынша үлгерім',
  en: 'Performance by topic',
};
const MOCK_CHART: Array<{ name: Localized; pct: number }> = [
  {
    name: { ru: 'Алгебра', kk: 'Алгебра', en: 'Algebra' },
    pct: 82,
  },
  {
    name: { ru: 'Геометрия', kk: 'Геометрия', en: 'Geometry' },
    pct: 76,
  },
  {
    name: { ru: 'Статистика', kk: 'Статистика', en: 'Statistics' },
    pct: 68,
  },
  {
    name: { ru: 'Тригонометрия', kk: 'Тригонометрия', en: 'Trigonometry' },
    pct: 41,
  },
];
const MOCK_TABLE_STUDENT: Localized = {
  ru: 'Ученик',
  kk: 'Оқушы',
  en: 'Student',
};
const MOCK_TABLE_PROGRESS: Localized = {
  ru: 'Прогресс',
  kk: 'Үдеріс',
  en: 'Progress',
};
const MOCK_STUDENTS: Array<{ name: Localized; pct: number; flag: boolean }> = [
  {
    name: { ru: 'Айгерим', kk: 'Айгерім', en: 'Aigerim' },
    pct: 88,
    flag: false,
  },
  {
    name: { ru: 'Тимур', kk: 'Тимур', en: 'Timur' },
    pct: 72,
    flag: false,
  },
  {
    name: { ru: 'Динара', kk: 'Динара', en: 'Dinara' },
    pct: 54,
    flag: true,
  },
  {
    name: { ru: 'Ерасыл', kk: 'Ерасыл', en: 'Erasyl' },
    pct: 38,
    flag: true,
  },
];
const MOCK_FLAG: Localized = {
  ru: 'нужна помощь',
  kk: 'көмек керек',
  en: 'needs help',
};
const MOCK_ADD: Localized = {
  ru: 'Добавить модуль',
  kk: 'Модуль қосу',
  en: 'Add module',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const TeacherPanel: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const fu = (delay = 0) =>
    reduceMotion
      ? {}
      : { ...fadeUp, transition: { duration: 0.5, delay } };

  return (
    <section
      id="for-schools"
      aria-labelledby="for-schools-heading"
      className="relative overflow-hidden bg-white"
    >
      <CircuitTrace className="absolute -right-10 top-16 h-36 w-64 text-teal-light/30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Feature bullets */}
        <div>
          <motion.div {...fu()}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
              <School className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, BADGE)}
            </span>
            <h2
              id="for-schools-heading"
              className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
            >
              {loc(language, TITLE_BEFORE)}
              <span className="text-coral">{loc(language, TITLE_ACCENT)}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base text-slateink md:text-lg">
              {loc(language, SUBTITLE)}
            </p>
          </motion.div>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.li
                  key={feature.title.en}
                  {...fu(0.1 + 0.08 * i)}
                  className="flex gap-4 rounded-2xl border border-line/50 bg-canvas p-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                    <Icon className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-bold text-ink">
                      {loc(language, feature.title)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slateink">
                      {loc(language, feature.desc)}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Teacher panel mock */}
        <motion.div {...fu(0.15)} className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-mist/50 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]">
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
                <span className="h-2.5 w-2.5 rounded-full bg-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
              </div>
              <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
                novex.kz/teacher
              </span>
            </div>

            <div className="p-4 sm:p-5">
              {/* header row */}
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-base font-bold text-ink">
                  {loc(language, MOCK_CLASS)}
                </p>
                <button
                  type="button"
                  className={`${FOCUS_RING} ml-auto inline-flex items-center gap-1.5 rounded-lg bg-teal px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, MOCK_ADD)}
                </button>
              </div>

              {/* class average + curator alert */}
              <div className="mt-3 grid gap-2.5 sm:grid-cols-[auto_1fr]">
                <div className="rounded-xl border border-line/50 bg-canvas px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slateink">
                    {loc(language, MOCK_AVG_LABEL)}
                  </p>
                  <p className="mt-1 font-display text-2xl font-extrabold text-teal-dark">
                    74%
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-coral/30 bg-coral/10 px-3.5 py-3">
                  <RobotAvatar robot="nov3" className="h-10 w-10 shrink-0" />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-coral">
                      {loc(language, MOCK_CURATOR_LABEL)}
                    </span>
                    <p className="mt-0.5 text-xs font-semibold text-ink">
                      {loc(language, MOCK_CURATOR_TITLE)}
                    </p>
                    <p className="truncate text-[10px] text-slateink">
                      {loc(language, MOCK_CURATOR_SUB)}
                    </p>
                  </div>
                </div>
              </div>

              {/* bar chart by topic */}
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                {loc(language, MOCK_CHART_LABEL)}
              </p>
              <div className="mt-2 space-y-2">
                {MOCK_CHART.map((topic) => {
                  const weak = topic.pct < 50;
                  return (
                    <div key={topic.name.en} className="flex items-center gap-2.5">
                      <p className="w-24 shrink-0 truncate text-[11px] font-medium text-ink">
                        {loc(language, topic.name)}
                      </p>
                      <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
                        <div
                          className={`h-full rounded-full ${weak ? 'bg-coral' : 'bg-teal'}`}
                          style={{ width: `${topic.pct}%` }}
                        />
                      </div>
                      <p
                        className={`w-8 shrink-0 text-right text-[10px] font-semibold ${
                          weak ? 'text-coral' : 'text-teal-dark'
                        }`}
                      >
                        {topic.pct}%
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* student table */}
              <div className="mt-4 overflow-hidden rounded-xl border border-line/50">
                <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-line/40 bg-canvas px-3.5 py-2 sm:grid-cols-[7rem_1fr_auto]">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slateink">
                    {loc(language, MOCK_TABLE_STUDENT)}
                  </span>
                  <span className="hidden text-[10px] font-semibold uppercase tracking-wide text-slateink sm:block">
                    {loc(language, MOCK_TABLE_PROGRESS)}
                  </span>
                  <span aria-hidden="true" className="w-20" />
                </div>
                {MOCK_STUDENTS.map((student, i) => (
                  <div
                    key={student.name.en}
                    className={`grid grid-cols-[1fr_auto] items-center gap-2 px-3.5 py-2.5 sm:grid-cols-[7rem_1fr_auto] ${
                      i > 0 ? 'border-t border-line/40' : ''
                    }`}
                  >
                    <span className="truncate text-xs font-medium text-ink">
                      {loc(language, student.name)}
                    </span>
                    <div className="hidden items-center gap-2 sm:flex">
                      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
                        <div
                          className={`h-full rounded-full ${
                            student.flag ? 'bg-coral' : 'bg-teal'
                          }`}
                          style={{ width: `${student.pct}%` }}
                        />
                      </div>
                      <span className="w-8 shrink-0 text-right text-[10px] font-semibold text-slateink">
                        {student.pct}%
                      </span>
                    </div>
                    <span className="w-20 text-right">
                      {student.flag ? (
                        <span className="inline-block rounded-full border border-coral/30 bg-coral/10 px-2 py-0.5 text-[9px] font-semibold text-coral">
                          {loc(language, MOCK_FLAG)}
                        </span>
                      ) : (
                        <span className="inline-block text-[10px] font-semibold text-teal-dark">
                          {student.pct}%
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherPanel;
