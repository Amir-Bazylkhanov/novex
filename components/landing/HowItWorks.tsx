import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type PanInfo,
} from 'framer-motion';
import {
  Atom,
  BookOpen,
  Briefcase,
  Calculator,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Compass,
  Cpu,
  Flag,
  Languages,
  Map as MapIcon,
  School,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { GearDecor, RobotAvatar } from '../robots/RobotAvatars.tsx';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

/* --- section header --- */

const EYEBROW: Localized = {
  ru: 'Протокол обучения',
  kk: 'Оқу хаттамасы',
  en: 'Learning protocol',
};

const TITLE: Localized = {
  ru: 'Пять шагов — от профиля до результата',
  kk: 'Профильден нәтижеге дейін — бес қадам',
  en: 'Five steps — from profile to results',
};

const SUBTITLE: Localized = {
  ru: 'Экраны платформы сменяются сами — или переключайте шаги вручную.',
  kk: 'Платформа экрандары өздігінен ауысады — немесе қадамдарды өзің қолмен ауыстыр.',
  en: 'The platform screens switch on their own — or step through them manually.',
};

/* --- step navigation controls --- */

const PREV_STEP_LABEL: Localized = {
  ru: 'Предыдущий шаг',
  kk: 'Алдыңғы қадам',
  en: 'Previous step',
};
const NEXT_STEP_LABEL: Localized = {
  ru: 'Следующий шаг',
  kk: 'Келесі қадам',
  en: 'Next step',
};

/* --- steps --- */

const STEPS: Array<{
  icon: React.ElementType;
  url: string;
  title: Localized;
  desc: Localized;
}> = [
  {
    icon: Users,
    url: '/profile',
    title: {
      ru: 'Профиль и выбор предмета',
      kk: 'Профиль және пән таңдау',
      en: 'Profile and subject choice',
    },
    desc: {
      ru: 'Ученик заполняет профиль — класс, цели, статистику — и выбирает любой предмет для обучения.',
      kk: 'Оқушы профилін толтырады — сынып, мақсаттар, статистика — және оқуға кез келген пәнді таңдайды.',
      en: 'The student fills in a profile — grade, goals, stats — and picks any subject to study.',
    },
  },
  {
    icon: Compass,
    url: '/career',
    title: {
      ru: 'ИИ-профориентация',
      kk: 'ИИ-кәсіптік бағдар',
      en: 'AI career guidance',
    },
    desc: {
      ru: 'После профтеста ИИ рекомендует подходящие специальности и предметы, которые стоит изучать для них.',
      kk: 'Кәсіптік тесттен кейін ИИ лайықты мамандықтарды және соларға қажет пәндерді ұсынады.',
      en: 'After the career test, AI recommends matching careers and the subjects to study for them.',
    },
  },
  {
    icon: MapIcon,
    url: '/plan',
    title: {
      ru: 'Персональный роадмап',
      kk: 'Жеке роадмап',
      en: 'Personal roadmap',
    },
    desc: {
      ru: 'Платформа собирает личный маршрут по неделям — под цель, уровень и темп ученика.',
      kk: 'Платформа апталар бойынша жеке бағдар құрады — оқушының мақсатына, деңгейі мен қарқынына сай.',
      en: "The platform builds a week-by-week route around the student's goal, level and pace.",
    },
  },
  {
    icon: ClipboardCheck,
    url: '/practice',
    title: {
      ru: 'Задания и разбор ошибок',
      kk: 'Тапсырмалар және қателерді талдау',
      en: 'Tasks and mistake analysis',
    },
    desc: {
      ru: 'Ученик решает задачи, а при ошибке ИИ пошагово показывает, где именно он неправ и как это исправить.',
      kk: 'Оқушы есеп шығарады, ал қателескенде ИИ қай жерде қателескенін және қалай түзеу керегін қадамдап көрсетеді.',
      en: 'The student solves tasks; on a mistake the AI shows step by step where they went wrong and how to fix it.',
    },
  },
  {
    icon: TrendingUp,
    url: '/teacher',
    title: {
      ru: 'Панель учителя',
      kk: 'Мұғалім панелі',
      en: 'Teacher panel',
    },
    desc: {
      ru: 'Учитель видит прогресс класса, слабые темы и тех, кому нужна помощь.',
      kk: 'Мұғалім сынып үдерісін, әлсіз тақырыптарды және кімге көмек керегін көреді.',
      en: 'The teacher sees class progress, weak topics and who needs help.',
    },
  },
];

/* --- shared subject names (screens 1, 2, 5) --- */

const SUBJ_MATH: Localized = { ru: 'Математика', kk: 'Математика', en: 'Mathematics' };
const SUBJ_PHYSICS: Localized = { ru: 'Физика', kk: 'Физика', en: 'Physics' };
const SUBJ_CS: Localized = { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' };
const SUBJ_ENGLISH: Localized = { ru: 'English', kk: 'English', en: 'English' };

/* --- screen 1: /profile --- */

const P_NAME: Localized = { ru: 'Амир', kk: 'Амир', en: 'Amir' };
const P_SUB: Localized = {
  ru: '9 класс · Цель: ЕНТ',
  kk: '9-сынып · Мақсат: ҰБТ',
  en: 'Grade 9 · Goal: UNT',
};
const P_STREAK: Localized = {
  ru: 'Серия · 6 дней',
  kk: 'Серия · 6 күн',
  en: 'Streak · 6 days',
};
const P_STATS: Array<{ value: string; label: Localized }> = [
  {
    value: '1 240',
    label: { ru: 'Всего XP', kk: 'Барлық XP', en: 'Total XP' },
  },
  {
    value: '18',
    label: { ru: 'Уроков завершено', kk: 'Аяқталған сабақтар', en: 'Lessons done' },
  },
  {
    value: '320',
    label: { ru: 'Новасов заработано', kk: 'Жиналған новастар', en: 'Novas earned' },
  },
];
const P_GRADE_LABEL: Localized = { ru: 'Класс', kk: 'Сынып', en: 'Grade' };
const P_SUBJECTS_LABEL: Localized = {
  ru: 'Предметы — выбери любой',
  kk: 'Пәндер — кез келгенін таңда',
  en: 'Subjects — pick any',
};
const P_SUBJECTS: Array<{ name: Localized; icon: React.ElementType; selected: boolean }> = [
  { name: SUBJ_MATH, icon: Calculator, selected: true },
  { name: SUBJ_PHYSICS, icon: Atom, selected: true },
  { name: SUBJ_CS, icon: Cpu, selected: false },
  { name: SUBJ_ENGLISH, icon: Languages, selected: false },
];

const ProfileScreen: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      {/* identity row */}
      <div className="flex items-center gap-3 rounded-xl border border-line/50 bg-canvas p-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal font-display text-lg font-bold text-white ring-2 ring-line/60">
          A
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-ink">{loc(language, P_NAME)}</p>
          <p className="truncate text-[10px] text-slateink">{loc(language, P_SUB)}</p>
        </div>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-semibold text-teal-dark">
          <Zap className="h-3 w-3" aria-hidden="true" />
          {loc(language, P_STREAK)}
        </span>
      </div>

      {/* stat tiles */}
      <div className="grid grid-cols-3 gap-2.5">
        {P_STATS.map((stat) => (
          <div
            key={stat.label.en}
            className="rounded-xl border border-line/50 bg-canvas px-2.5 py-2"
          >
            <p className="font-display text-base font-extrabold text-teal-dark">{stat.value}</p>
            <p className="mt-0.5 text-[9px] leading-tight text-slateink">
              {loc(language, stat.label)}
            </p>
          </div>
        ))}
      </div>

      {/* grade picker */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slateink">
          {loc(language, P_GRADE_LABEL)}
        </p>
        <div className="mt-1.5 flex gap-1.5">
          {['7', '8', '9', '10', '11'].map((grade) => (
            <span
              key={grade}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-semibold ${
                grade === '9'
                  ? 'border-teal bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)]'
                  : 'border-line/60 bg-white text-slateink'
              }`}
            >
              {grade}
            </span>
          ))}
        </div>
      </div>

      {/* subject picker */}
      <div className="min-h-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slateink">
          {loc(language, P_SUBJECTS_LABEL)}
        </p>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          {P_SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            return (
              <span
                key={subject.name.en}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-2 text-[11px] font-medium ${
                  subject.selected
                    ? 'border-teal/40 bg-teal/10 text-teal-dark'
                    : 'border-line/60 bg-white text-slateink'
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{loc(language, subject.name)}</span>
                {subject.selected && (
                  <Check className="ml-auto h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* --- screen 2: /career --- */

const NOV_ACADEMIC: Localized = {
  ru: 'NOV-01 · АКАДЕМИК',
  kk: 'NOV-01 · АКАДЕМИК',
  en: 'NOV-01 · ACADEMIC',
};
const C_TITLE: Localized = {
  ru: 'Твой профиль: Аналитик-инженер',
  kk: 'Сенің профилің: Аналитик-инженер',
  en: 'Your profile: Analyst-engineer',
};
const C_DIMS: Array<{ name: Localized; score: number }> = [
  { name: { ru: 'Аналитик', kk: 'Аналитик', en: 'Analyst' }, score: 11 },
  { name: { ru: 'Инженер', kk: 'Инженер', en: 'Engineer' }, score: 9 },
];
const C_CAREERS_LABEL: Localized = {
  ru: 'Профессии, которые тебе подходят',
  kk: 'Саған лайық мамандықтар',
  en: 'Careers that fit you',
};
const C_CAREERS: Localized[] = [
  { ru: 'Аналитик данных', kk: 'Деректер аналитигі', en: 'Data analyst' },
  { ru: 'Программист', kk: 'Бағдарламашы', en: 'Programmer' },
  { ru: 'Инженер-робототехник', kk: 'Робототехник-инженер', en: 'Robotics engineer' },
  { ru: 'Финансовый аналитик', kk: 'Қаржы аналитигі', en: 'Financial analyst' },
];
const C_SUBJECTS_LABEL: Localized = {
  ru: 'Предметы для этих специальностей',
  kk: 'Осы мамандықтарға қажет пәндер',
  en: 'Subjects for these careers',
};

const CareerScreen: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      {/* header */}
      <div className="flex items-center gap-3">
        <RobotAvatar robot="nov4" className="h-10 w-10 shrink-0" />
        <div className="min-w-0">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-teal-dark">
            {loc(language, NOV_ACADEMIC)}
          </span>
          <p className="mt-0.5 font-display text-sm font-bold leading-snug text-ink">
            {loc(language, C_TITLE)}
          </p>
        </div>
      </div>

      {/* dimension bars */}
      <div className="rounded-xl border border-line/50 bg-canvas p-3">
        {C_DIMS.map((dim, i) => (
          <div key={dim.name.en} className={`flex items-center gap-2.5 ${i > 0 ? 'mt-2.5' : ''}`}>
            <p className="w-20 shrink-0 truncate text-[11px] font-medium text-teal-dark">
              {loc(language, dim.name)}
            </p>
            <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
              <div
                className="h-full rounded-full bg-teal"
                style={{ width: `${(dim.score / 12) * 100}%` }}
              />
            </div>
            <p className="shrink-0 font-mono text-[10px] font-semibold text-slateink">
              {dim.score}/12
            </p>
          </div>
        ))}
      </div>

      {/* careers */}
      <div>
        <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slateink">
          <Briefcase className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
          {loc(language, C_CAREERS_LABEL)}
        </p>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          {C_CAREERS.map((career) => (
            <span
              key={career.en}
              className="rounded-xl border border-line/60 bg-mist/20 px-3 py-2 text-[11px] font-medium text-ink"
            >
              {loc(language, career)}
            </span>
          ))}
        </div>
      </div>

      {/* subjects for these careers */}
      <div className="min-h-0">
        <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slateink">
          <BookOpen className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
          {loc(language, C_SUBJECTS_LABEL)}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {[SUBJ_MATH, SUBJ_PHYSICS, SUBJ_CS].map((subject) => (
            <span
              key={subject.en}
              className="rounded-full border border-teal/40 bg-teal/10 px-2.5 py-1 text-[10px] font-semibold text-teal-dark"
            >
              {loc(language, subject)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- screen 3: /plan --- */

const R_HEADLINE: Localized = {
  ru: 'Амир, для тебя собран роадмап по предмету «Математика»',
  kk: 'Амир, саған «Математика» пәні бойынша роадмап құрылды',
  en: 'Amir, your roadmap for Mathematics is ready',
};
const R_GOAL: Localized = { ru: 'Цель: ЕНТ', kk: 'Мақсат: ҰБТ', en: 'Goal: UNT' };
const R_EXAM: Localized = {
  ru: 'Экзамен: 15 июня 2026',
  kk: 'Емтихан: 15 маусым 2026',
  en: 'Exam: 15 June 2026',
};
const R_DAYS: Localized = {
  ru: '112 дней до экзамена',
  kk: 'Емтиханға дейін 112 күн',
  en: '112 days to the exam',
};
const R_BADGE_WEAK: Localized = {
  ru: 'Слабые темы',
  kk: 'Әлсіз тақырыптар',
  en: 'Weak topics',
};
const R_BADGE_CURRENT: Localized = {
  ru: 'Текущая неделя',
  kk: 'Ағымдағы апта',
  en: 'Current week',
};
const R_BADGE_NEW: Localized = {
  ru: 'Новые темы',
  kk: 'Жаңа тақырыптар',
  en: 'New topics',
};
const R_BADGE_REVIEW: Localized = {
  ru: 'Повторение и пробный тест',
  kk: 'Қайталау және сынақ тест',
  en: 'Review and mock test',
};
const R_WEEKS: Array<{ week: Localized; topics: Localized; current: boolean }> = [
  {
    week: { ru: 'Неделя 1', kk: '1-апта', en: 'Week 1' },
    topics: {
      ru: 'Квадратные уравнения · Тригонометрия',
      kk: 'Квадрат теңдеулер · Тригонометрия',
      en: 'Quadratic equations · Trigonometry',
    },
    current: true,
  },
  {
    week: { ru: 'Неделя 2', kk: '2-апта', en: 'Week 2' },
    topics: {
      ru: 'Логарифмы · Производная',
      kk: 'Логарифмдер · Туынды',
      en: 'Logarithms · Derivative',
    },
    current: false,
  },
  {
    week: { ru: 'Неделя 3', kk: '3-апта', en: 'Week 3' },
    topics: {
      ru: 'Пробный тест в формате ЕНТ',
      kk: 'ҰБТ форматындағы сынақ тест',
      en: 'Mock test in UNT format',
    },
    current: false,
  },
];

const PlanScreen: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      {/* header */}
      <div className="flex items-center gap-3">
        <RobotAvatar robot="nov1" className="h-10 w-10 shrink-0" />
        <div className="min-w-0">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-teal-dark">
            {loc(language, NOV_ACADEMIC)}
          </span>
          <p className="mt-0.5 font-display text-sm font-bold leading-snug text-ink">
            {loc(language, R_HEADLINE)}
          </p>
        </div>
      </div>

      {/* goal strip */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-xl border border-teal/30 bg-teal/5 px-3.5 py-2.5">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink">
          <Target className="h-3.5 w-3.5 text-teal-dark" aria-hidden="true" />
          {loc(language, R_GOAL)}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink">
          <Calendar className="h-3.5 w-3.5 text-teal-dark" aria-hidden="true" />
          {loc(language, R_EXAM)}
        </span>
        <span className="text-[11px] font-bold text-teal-dark">{loc(language, R_DAYS)}</span>
      </div>

      {/* week timeline */}
      <ol className="relative min-h-0 space-y-2.5 border-l-2 border-line/60 pl-4">
        {R_WEEKS.map((item, i) => (
          <li key={item.week.en} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[1.375rem] top-3.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
                item.current ? 'bg-teal-dark' : 'bg-teal'
              }`}
            />
            <div
              className={`rounded-xl border p-3 ${
                item.current ? 'border-teal/50 bg-mist/30' : 'border-line/50 bg-canvas'
              }`}
            >
              <div className="flex flex-wrap items-center gap-1.5">
                <p className="text-[11px] font-bold text-ink">{loc(language, item.week)}</p>
                {i === 0 && (
                  <>
                    <span className="rounded-full border border-coral/30 bg-coral/10 px-2 py-0.5 text-[9px] font-semibold text-coral">
                      {loc(language, R_BADGE_WEAK)}
                    </span>
                    <span className="rounded-full border border-teal/40 bg-teal/10 px-2 py-0.5 text-[9px] font-semibold text-teal-dark">
                      {loc(language, R_BADGE_CURRENT)}
                    </span>
                  </>
                )}
                {i === 1 && (
                  <span className="rounded-full border border-teal/40 bg-teal/10 px-2 py-0.5 text-[9px] font-semibold text-teal-dark">
                    {loc(language, R_BADGE_NEW)}
                  </span>
                )}
                {i === 2 && (
                  <span className="rounded-full border border-teal-dark/40 bg-mist/30 px-2 py-0.5 text-[9px] font-semibold text-teal-dark">
                    {loc(language, R_BADGE_REVIEW)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[10px] leading-relaxed text-slateink">
                {loc(language, item.topics)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

/* --- screen 4: /practice --- */

const Q_TOPIC: Localized = {
  ru: 'Дискриминант · Сложность: 2',
  kk: 'Дискриминант · Күрделілік: 2',
  en: 'Discriminant · Difficulty: 2',
};
const Q_COUNT: Localized = {
  ru: 'Вопрос 3 из 10',
  kk: 'Сұрақ: 3/10',
  en: 'Question 3 of 10',
};
const Q_TEXT: Localized = {
  ru: 'Решите уравнение: x² − 3x − 10 = 0',
  kk: 'Теңдеуді шешіңіз: x² − 3x − 10 = 0',
  en: 'Solve the equation: x² − 3x − 10 = 0',
};
const Q_OPTIONS: Array<{ letter: string; text: Localized; state: 'correct' | 'wrong' | 'idle' }> = [
  {
    letter: 'А',
    text: { ru: 'x = 5 и x = −2', kk: 'x = 5 және x = −2', en: 'x = 5 and x = −2' },
    state: 'correct',
  },
  {
    letter: 'Б',
    text: { ru: 'x = −5 и x = 2', kk: 'x = −5 және x = 2', en: 'x = −5 and x = 2' },
    state: 'wrong',
  },
  {
    letter: 'В',
    text: { ru: 'x = 10 и x = −1', kk: 'x = 10 және x = −1', en: 'x = 10 and x = −1' },
    state: 'idle',
  },
];
const Q_VERDICT: Localized = {
  ru: 'Неверно — сейчас разберём',
  kk: 'Қате — қазір талдаймыз',
  en: "Incorrect — let's break it down",
};
const Q_STEPS: Localized[] = [
  {
    ru: 'Шаг 1: D = (−3)² − 4·1·(−10) = 9 + 40 = 49',
    kk: '1-қадам: D = (−3)² − 4·1·(−10) = 9 + 40 = 49',
    en: 'Step 1: D = (−3)² − 4·1·(−10) = 9 + 40 = 49',
  },
  {
    ru: 'Шаг 2: √49 = 7',
    kk: '2-қадам: √49 = 7',
    en: 'Step 2: √49 = 7',
  },
  {
    ru: 'Шаг 3: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2',
    kk: '3-қадам: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2',
    en: 'Step 3: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2',
  },
];
const Q_NOTE: Localized = {
  ru: 'Обрати внимание: −b = −(−3) = 3, а не −3.',
  kk: 'Назар аудар: −b = −(−3) = 3, −3 емес.',
  en: 'Note: −b = −(−3) = 3, not −3.',
};

const PracticeScreen: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      {/* toolbar */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slateink">
          {loc(language, Q_TOPIC)}
        </span>
        <span className="ml-auto text-[10px] font-medium text-slateink">
          {loc(language, Q_COUNT)}
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-teal-dark">
          <Clock className="h-3 w-3" aria-hidden="true" />
          07:42
        </span>
      </div>

      {/* progress */}
      <div className="h-1 overflow-hidden rounded-full bg-mist/40">
        <div className="h-full rounded-full bg-teal" style={{ width: '30%' }} />
      </div>

      {/* question */}
      <p className="font-display text-sm font-bold leading-snug text-ink">
        {loc(language, Q_TEXT)}
      </p>

      {/* options */}
      <div className="space-y-1.5">
        {Q_OPTIONS.map((option) => (
          <div
            key={option.letter}
            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-[11px] font-medium ${
              option.state === 'correct'
                ? 'border-teal bg-teal/10 text-ink'
                : option.state === 'wrong'
                  ? 'border-coral bg-coral/10 text-ink'
                  : 'border-line/60 bg-white text-slateink'
            }`}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist/30 font-mono text-[10px] font-semibold text-teal-dark">
              {option.letter}
            </span>
            <span className="truncate">{loc(language, option.text)}</span>
            {option.state === 'correct' && (
              <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
            )}
            {option.state === 'wrong' && (
              <X className="ml-auto h-3.5 w-3.5 shrink-0 text-coral" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* AI feedback */}
      <div className="min-h-0 rounded-xl border border-teal/25 bg-mist/15 p-3">
        <div className="flex items-center gap-2">
          <RobotAvatar robot="nov1" className="h-8 w-8 shrink-0" />
          <div className="min-w-0">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-teal-dark">
              {loc(language, NOV_ACADEMIC)}
            </span>
            <p className="text-[11px] font-bold text-coral">{loc(language, Q_VERDICT)}</p>
          </div>
        </div>
        <div className="mt-2 space-y-0.5">
          {Q_STEPS.map((step) => (
            <p key={step.en} className="text-[10px] leading-relaxed text-ink">
              {loc(language, step)}
            </p>
          ))}
          <p className="pt-0.5 text-[10px] font-semibold leading-relaxed text-teal-dark">
            {loc(language, Q_NOTE)}
          </p>
        </div>
      </div>
    </div>
  );
};

/* --- screen 5: /teacher --- */

const T_TITLE: Localized = {
  ru: 'Панель учителя',
  kk: 'Мұғалім панелі',
  en: 'Teacher panel',
};
const T_CLASS: Localized = {
  ru: '9 «Б» класс · Математика',
  kk: '9 «Б» сынып · Математика',
  en: 'Grade 9 "B" · Mathematics',
};
const T_AVG_LABEL: Localized = {
  ru: 'Средний балл класса',
  kk: 'Сыныптың орташа баллы',
  en: 'Class average',
};
const T_HELP_LABEL: Localized = {
  ru: 'Нужна помощь',
  kk: 'Көмек керек',
  en: 'Needs help',
};
const T_ALERT: Localized = {
  ru: 'Тема «Тригонометрия»: отстают 3 ученика — предложить повторение.',
  kk: '«Тригонометрия» тақырыбы: 3 оқушы артта қалып жатыр — қайталау ұсыну.',
  en: 'Topic "Trigonometry": 3 students are behind — suggest a revision set.',
};
const T_BARS_LABEL: Localized = {
  ru: 'Успеваемость по предметам',
  kk: 'Пәндер бойынша үлгерім',
  en: 'Performance by subject',
};
const T_BARS: Array<{ name: Localized; pct: number }> = [
  { name: SUBJ_MATH, pct: 59 },
  { name: SUBJ_PHYSICS, pct: 67 },
  { name: SUBJ_ENGLISH, pct: 60 },
];
const T_FLAG: Localized = {
  ru: 'нужна помощь',
  kk: 'көмек керек',
  en: 'needs help',
};
const T_STUDENTS: Array<{ name: Localized; result: 'pct' | 'flag'; pct?: number }> = [
  {
    name: { ru: 'Айгерим Сейтова', kk: 'Айгерім Сейтова', en: 'Aigerim Seitova' },
    result: 'pct',
    pct: 88,
  },
  {
    name: { ru: 'Динара Жумабаева', kk: 'Динара Жұмабаева', en: 'Dinara Zhumabayeva' },
    result: 'flag',
  },
  {
    name: { ru: 'Ерасыл Бекенов', kk: 'Ерасыл Бекенов', en: 'Yerasyl Bekenov' },
    result: 'flag',
  },
];

const TeacherScreen: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      {/* header */}
      <div className="flex items-center gap-2">
        <p className="font-display text-sm font-bold text-ink">{loc(language, T_TITLE)}</p>
        <span className="ml-auto rounded-full bg-mist/30 px-2.5 py-1 text-[10px] font-semibold text-teal-dark">
          {loc(language, T_CLASS)}
        </span>
      </div>

      {/* stat tiles */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex items-center gap-2.5 rounded-xl border border-line/50 bg-canvas p-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist/40">
            <School className="h-4 w-4 text-teal-dark" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg font-extrabold leading-none text-teal-dark">62%</p>
            <p className="mt-1 text-[9px] leading-tight text-slateink">
              {loc(language, T_AVG_LABEL)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-line/50 bg-canvas p-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-coral/10">
            <Flag className="h-4 w-4 text-coral" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg font-extrabold leading-none text-coral">4</p>
            <p className="mt-1 text-[9px] leading-tight text-slateink">
              {loc(language, T_HELP_LABEL)}
            </p>
          </div>
        </div>
      </div>

      {/* curator alert */}
      <div className="flex items-center gap-2.5 rounded-xl border border-coral/30 bg-coral/10 px-3 py-2">
        <RobotAvatar robot="nov1" className="h-7 w-7 shrink-0" />
        <p className="text-[10px] font-medium leading-snug text-ink">{loc(language, T_ALERT)}</p>
      </div>

      {/* performance by subject */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slateink">
          {loc(language, T_BARS_LABEL)}
        </p>
        <div className="mt-1.5 space-y-1.5">
          {T_BARS.map((bar) => {
            const weak = bar.pct < 60;
            return (
              <div key={bar.name.en} className="flex items-center gap-2.5">
                <p className="w-20 shrink-0 truncate text-[11px] font-medium text-ink">
                  {loc(language, bar.name)}
                </p>
                <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
                  <div
                    className={`h-full rounded-full ${weak ? 'bg-coral' : 'bg-teal'}`}
                    style={{ width: `${bar.pct}%` }}
                  />
                </div>
                <p
                  className={`w-8 shrink-0 text-right text-[10px] font-semibold ${
                    weak ? 'text-coral' : 'text-teal-dark'
                  }`}
                >
                  {bar.pct}%
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* student list */}
      <div className="min-h-0 overflow-hidden rounded-xl border border-line/50">
        {T_STUDENTS.map((student, i) => (
          <div
            key={student.name.en}
            className={`flex items-center gap-2 px-3 py-2 ${i > 0 ? 'border-t border-line/40' : ''}`}
          >
            <span className="truncate text-[11px] font-medium text-ink">
              {loc(language, student.name)}
            </span>
            <span className="ml-auto shrink-0">
              {student.result === 'pct' ? (
                <span className="text-[10px] font-semibold text-teal-dark">{student.pct}%</span>
              ) : (
                <span className="inline-block rounded-full border border-coral/30 bg-coral/10 px-2 py-0.5 text-[9px] font-semibold text-coral">
                  {loc(language, T_FLAG)}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SCREENS: React.FC[] = [
  ProfileScreen,
  CareerScreen,
  PlanScreen,
  PracticeScreen,
  TeacherScreen,
];

/* --- shared building blocks --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/** Fake browser window chrome, same look as the TeacherPanel mock. */
const BrowserFrame: React.FC<{
  url: string;
  heightClass: string;
  children: React.ReactNode;
}> = ({ url, heightClass, children }) => (
  <div className="overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]">
    <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
      </div>
      <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
        novex-edu.vercel.app{url}
      </span>
    </div>
    <div className={`relative ${heightClass}`}>{children}</div>
  </div>
);

/** Thin vertical meter between two step circles. While its step is active and
    auto-advance is running it fills 0 → 1 over the step duration; when active
    but paused (or completed) it sits full instead of looking broken; upcoming
    steps stay empty. `resetKey` remounts it to restart the fill. */
const StepMeter: React.FC<{ target: number; durationSec: number; resetKey: string }> = ({
  target,
  durationSec,
  resetKey,
}) => (
  <div aria-hidden="true" className="ml-[1.875rem] mt-1 h-8 w-px bg-line/60">
    <motion.div
      key={resetKey}
      className="h-full w-full origin-top bg-teal"
      initial={{ scaleY: durationSec > 0 ? 0 : target }}
      animate={{ scaleY: target }}
      transition={{ duration: durationSec, ease: 'linear' }}
    />
  </div>
);

/** Numbered step circle: solid teal when active, gear-decorated when idle. */
const StepCircle: React.FC<{ index: number; active: boolean }> = ({ index, active }) => (
  <span
    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
      active
        ? 'bg-teal shadow-[0_6px_16px_rgba(33,159,162,0.35)]'
        : 'border border-teal/30 bg-white'
    }`}
  >
    {!active && (
      <GearDecor spin className="absolute inset-0 m-auto h-8 w-8 text-teal-light/50" />
    )}
    <span
      className={`relative font-display text-base font-extrabold ${
        active ? 'text-white' : 'text-teal-dark'
      }`}
    >
      {index + 1}
    </span>
  </span>
);

/** How long each step stays active before auto-advancing. */
const STEP_DURATION_MS = 4800;
/** How long any manual interaction (click, arrow, swipe, keyboard) suspends auto-advance for. */
const MANUAL_PAUSE_MS = 15000;
/** Minimum horizontal drag distance (px) on the frame that counts as a swipe. */
const SWIPE_THRESHOLD_PX = 50;

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.5 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [docVisible, setDocVisible] = useState(true);
  const pauseTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onVisibilityChange = () => setDocVisible(document.visibilityState === 'visible');
    onVisibilityChange();
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const running = isSectionInView && docVisible && !paused && !reduceMotion;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, STEP_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [running, active]);

  useEffect(
    () => () => {
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    },
    [],
  );

  const selectStep = (i: number) => {
    setActive(i);
    setPaused(true);
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => setPaused(false), MANUAL_PAUSE_MS);
  };

  const goPrev = () => selectStep((active - 1 + STEPS.length) % STEPS.length);
  const goNext = () => selectStep((active + 1) % STEPS.length);

  const handleStepKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  };

  const handleFrameDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x <= -SWIPE_THRESHOLD_PX) goNext();
    else if (info.offset.x >= SWIPE_THRESHOLD_PX) goPrev();
  };

  const fadeUp = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  const ActiveScreen = SCREENS[active];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-teal-dark">
            {loc(language, EYEBROW)}
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-4 text-base text-slateink md:text-lg">{loc(language, SUBTITLE)}</p>
        </motion.div>

        {/* Desktop: auto-advancing showcase (page scroll is never blocked) */}
        <div className="relative mt-10 hidden lg:block">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-16">
            {/* step list */}
            <ol>
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = active === i;
                const completed = i < active;
                const meterDurationSec = isActive && running ? STEP_DURATION_MS / 1000 : 0;
                const meterTarget = isActive || completed ? 1 : 0;
                return (
                  <li key={step.title.en}>
                    <button
                      type="button"
                      onClick={() => selectStep(i)}
                      onKeyDown={handleStepKeyDown}
                      aria-current={isActive ? 'step' : undefined}
                      className={`${FOCUS_RING} flex w-full items-start gap-4 rounded-xl p-2 text-left transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                      }`}
                    >
                      <StepCircle index={i} active={isActive} />
                      <span className="min-w-0 pt-0.5">
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4 shrink-0 text-teal-dark" aria-hidden="true" />
                          <span className="font-display text-base font-bold text-ink">
                            {loc(language, step.title)}
                          </span>
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-slateink">
                          {loc(language, step.desc)}
                        </p>
                      </span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <StepMeter
                        target={meterTarget}
                        durationSec={meterDurationSec}
                        resetKey={`${i}-${active}-${running}`}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            {/* screen mock: swipeable, arrow buttons + counter underneath */}
            <div className="min-w-0">
              <motion.div
                aria-hidden="true"
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                dragMomentum={false}
                onDragEnd={handleFrameDragEnd}
                style={{ touchAction: 'pan-y' }}
                className={reduceMotion ? undefined : 'cursor-grab active:cursor-grabbing'}
              >
                <BrowserFrame url={STEPS[active].url} heightClass="h-[26rem] xl:h-[28rem]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 32, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -32, scale: 0.985 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </BrowserFrame>
              </motion.div>

              {/* prev/next controls — free manual navigation, independent of auto-advance */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  onKeyDown={handleStepKeyDown}
                  aria-label={loc(language, PREV_STEP_LABEL)}
                  className={`${FOCUS_RING} inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 bg-white text-teal-dark transition-colors hover:bg-teal/10`}
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs font-semibold tabular-nums text-slateink"
                >
                  {active + 1} / {STEPS.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  onKeyDown={handleStepKeyDown}
                  aria-label={loc(language, NEXT_STEP_LABEL)}
                  className={`${FOCUS_RING} inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 bg-white text-teal-dark transition-colors hover:bg-teal/10`}
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked steps, no pinning */}
        <ol className="mt-12 space-y-12 lg:hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const Screen = SCREENS[i];
            return (
              <motion.li key={step.title.en} {...fadeUp}>
                <div className="flex items-center gap-3">
                  <StepCircle index={i} active={false} />
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist/40">
                    <Icon className="h-4.5 w-4.5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {loc(language, step.title)}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slateink">
                  {loc(language, step.desc)}
                </p>
                <div aria-hidden="true" className="mt-4">
                  <BrowserFrame url={step.url} heightClass="h-[26rem]">
                    <Screen />
                  </BrowserFrame>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
