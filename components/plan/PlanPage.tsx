import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Loader2,
  Lock,
  RefreshCw,
  Repeat,
  Sparkles,
  Target,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar, type MentorRobotId } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import { LESSONS, lessonBySlug } from '../../constants/lessonData.ts';
import {
  LEARN_DIRECTIONS,
  directionByRobot,
  directionForSubject,
  type LearnDirection,
} from '../../constants/learnDirections.ts';
import {
  directionById,
  pickGradeContent,
  pickLangField,
  planetBySlug,
  planetsByRobot,
} from '../../constants/academy/catalog.ts';
import {
  flattenPlanetSections,
  hasSubjects,
} from '../../constants/academy/subjects.ts';
import { topicName } from '../../constants/diagnosticData.ts';

// ============================================================
// Страница «План» (/plan) — персональный учебный план ученика по неделям.
// Сначала ученик проходит короткий мастер из трёх шагов (дедлайн, цель
// и предметы, время в неделю), затем робот NOV-01 строит маршрут:
// сначала слабые темы (из диагностики), потом новые темы, в конце —
// недели повторения и пробный тест. План сохраняется в базу Supabase,
// его можно пересобрать заново в любой момент.
// ============================================================

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
};
const TITLE = (name: string | null): Localized =>
  name
    ? {
        ru: `${name}, твой персональный роадмап`,
        kk: `${name}, сенің жеке жол картаң`,
        en: `${name}, your personal roadmap`,
      }
    : {
        ru: 'Твой персональный роадмап',
        kk: 'Сенің жеке жол картаң',
        en: 'Your personal roadmap',
      };
const SUB: Localized = {
  ru: 'NOV-01 Академик собрал маршрут по неделям: сначала закрываем слабые темы, потом новые уроки, в конце — повторение и пробный тест.',
  kk: 'NOV-01 Академик апталық бағыт құрды: алдымен әлсіз тақырыптар жабылады, содан кейін жаңа сабақтар, соңында қайталау мен байқама тестісі.',
  en: 'NOV-01 the Academic mapped your route week by week: weak topics first, then new lessons, then review and a mock test at the end.',
};
const LOADING: Localized = { ru: 'Загружаем…', kk: 'Жүктелуде…', en: 'Loading…' };
const ERR_LOAD: Localized = {
  ru: 'Не удалось загрузить данные. Попробуй обновить страницу.',
  kk: 'Деректерді жүктеу мүмкін болмады. Бетті жаңартып көр.',
  en: 'We could not load your data. Try refreshing the page.',
};

const GOAL_LINE_LABEL: Localized = { ru: 'Цель', kk: 'Мақсат', en: 'Goal' };
const NO_GOAL_SHORT: Localized = { ru: 'не выбрана', kk: 'таңдалмаған', en: 'not set' };
const GOAL_LABELS: Record<string, Localized> = {
  ent: { ru: 'ЕНТ', kk: 'ҰБТ', en: 'UNT' },
  olympiad: { ru: 'Олимпиада', kk: 'Олимпиада', en: 'Olympiad' },
  revision: { ru: 'Повторение темы', kk: 'Тақырыпты қайталау', en: 'Topic revision' },
  admission: { ru: 'Поступление', kk: 'Оқуға түсу', en: 'Admission' },
};
const EXAM_LABEL: Localized = { ru: 'Экзамен', kk: 'Емтихан', en: 'Exam' };
const UNTIL_EXAM: Localized = {
  ru: 'до экзамена',
  kk: 'емтиханға дейін',
  en: 'until the exam',
};
const DEFAULT_LENGTH: Localized = {
  ru: 'Дата экзамена не указана — план рассчитан на 8 недель.',
  kk: 'Емтихан күні көрсетілмеген — жоспар 8 аптаға құрылды.',
  en: 'No exam date set — the plan spans 8 weeks.',
};

const REBUILD: Localized = { ru: 'Пересобрать план', kk: 'Жоспарды қайта құру', en: 'Rebuild plan' };
const REBUILDING: Localized = {
  ru: 'Собираем план…',
  kk: 'Жоспар құрылуда…',
  en: 'Building the plan…',
};
const SAVED_NOTE: Localized = {
  ru: 'План обновлён и сохранён.',
  kk: 'Жоспар жаңартылып, сақталды.',
  en: 'The plan is updated and saved.',
};
const SAVE_ERROR: Localized = {
  ru: 'Не удалось сохранить план. Попробуй ещё раз.',
  kk: 'Жоспарды сақтау мүмкін болмады. Қайта сақтап көр.',
  en: 'Could not save the plan. Please try again.',
};
const RETRY_SAVE: Localized = {
  ru: 'Повторить сохранение',
  kk: 'Сақтауды қайталау',
  en: 'Retry save',
};
const UPDATED_AT: Localized = { ru: 'Обновлено: {date}', kk: 'Жаңартылды: {date}', en: 'Updated: {date}' };

const WEEK_LABEL: Localized = { ru: 'Неделя {n}', kk: '{n}-апта', en: 'Week {n}' };
const TIMELINE_LABEL: Localized = {
  ru: 'План по неделям',
  kk: 'Апталық жоспар',
  en: 'Week-by-week plan',
};
const CURRENT_BADGE: Localized = {
  ru: 'Текущая неделя',
  kk: 'Ағымдағы апта',
  en: 'Current week',
};
const WEEK_FALLBACK: Localized = {
  ru: 'Свободная неделя — вернись к урокам, которые не успел пройти.',
  kk: 'Бос апта — үлгермеген сабақтарға қайта орал.',
  en: 'A free week — return to any lessons you have not finished.',
};

const EMPTY_TITLE: Localized = {
  ru: 'Сначала нужна диагностика',
  kk: 'Алдымен диагностика керек',
  en: 'Start with the diagnostic',
};
const EMPTY_TEXT: Localized = {
  ru: 'NOV-01 строит план по результатам твоей диагностики. Пройди её — и маршрут к цели появится здесь.',
  kk: 'NOV-01 жоспарды сенің диагностика нәтижелерің бойынша құрады. Диагностикадан өт — мақсатқа бағыт осында пайда болады.',
  en: 'NOV-01 builds the plan from your diagnostic results. Take it and your roadmap will appear here.',
};
const CTA_DIAG: Localized = {
  ru: 'Пройти диагностику',
  kk: 'Диагностикадан өту',
  en: 'Take the diagnostic',
};

const MOCK_ITEM: Localized = {
  ru: 'Пробный тест в формате экзамена',
  kk: 'Емтихан форматындағы байқама тесті',
  en: 'Exam-format mock test',
};
const ERRORS_ITEM: Localized = {
  ru: 'Разбор ошибок пробного теста',
  kk: 'Байқама тестінің қателерін талдау',
  en: 'Review your mock-test mistakes',
};

const ROBOT_NOV2_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
};
const ROBOT_NOV3_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
};

/* --- wizard content --- */

const WIZARD_TITLE: Localized = {
  ru: 'Собери свой план',
  kk: 'Жоспарыңды құрастыр',
  en: 'Build your plan',
};
const WIZARD_SUB: Localized = {
  ru: 'Три шага — и NOV-01 разложит подготовку по неделям.',
  kk: 'Үш қадам — NOV-01 дайындықты апталарға бөліп шығады.',
  en: 'Three steps and NOV-01 will lay your prep out week by week.',
};
const STEP_OF: Localized = { ru: 'Шаг {n} из 3', kk: '{n}/3 қадам', en: 'Step {n} of 3' };
const STEP_DEADLINE: Localized = { ru: 'Дедлайн', kk: 'Дедлайн', en: 'Deadline' };
const DEADLINE_HINT: Localized = {
  ru: 'Когда экзамен или важная дата? Если оставить пустым, план рассчитаем на 8 недель.',
  kk: 'Емтихан немесе маңызды күн қашан? Бос қалдырсаң, жоспар 8 аптаға құрылады.',
  en: 'When is the exam or key date? Leave it empty and the plan will span 8 weeks.',
};
const STEP_GOAL: Localized = {
  ru: 'К чему готовишься?',
  kk: 'Неге дайындалып жүрсің?',
  en: 'What are you preparing for?',
};
const GOAL_HINT: Localized = {
  ru: 'Можно выбрать несколько. Хотя бы один предмет или модуль обязателен — по нему собирается маршрут.',
  kk: 'Бірнешеуін таңдауға болады. Кемінде бір пән немесе модуль міндетті — бағыт содан құрылады.',
  en: 'You can pick several. At least one subject or module is required — the roadmap is built from it.',
};
const GOAL_GROUP_LABEL: Localized = { ru: 'Цель подготовки', kk: 'Дайындық мақсаты', en: 'Prep goal' };
const SUBJECT_GROUP_LABEL: Localized = { ru: 'Предмет или модуль', kk: 'Пән немесе модуль', en: 'Subject or module' };

/** Same eyebrow codes and taglines as the /learn mentor cards (declared locally — no cross-file content imports). */
const DIRECTION_CODE_LABEL: Record<MentorRobotId, Localized> = {
  nov4: { ru: 'NOV-01 · АКАДЕМИК', kk: 'NOV-01 · АКАДЕМИК', en: 'NOV-01 · ACADEMIC' },
  nov5: { ru: 'NOV-02 · ПРАКТИК', kk: 'NOV-02 · ПРАКТИК', en: 'NOV-02 · PRACTITIONER' },
  nov6: { ru: 'NOV-03 · КИБЕР', kk: 'NOV-03 · КИБЕР', en: 'NOV-03 · CYBER' },
};
const DIRECTION_TAGLINE: Record<MentorRobotId, Localized> = {
  nov4: { ru: 'Школа и подготовка к вузу', kk: 'Мектеп және ЖОО-ға дайындық', en: 'School and university prep' },
  nov5: {
    ru: 'Навыки для реальной жизни',
    kk: 'Нақты өмірге арналған дағдылар',
    en: 'Skills for real life',
  },
  nov6: { ru: 'Код, ИИ и самопознание', kk: 'Код, ЖИ және өзін-өзі тану', en: 'Code, AI and self-knowledge' },
};
const STEP_HOURS: Localized = {
  ru: 'Сколько времени готов уделять?',
  kk: 'Аптасына қанша уақыт бөле аласың?',
  en: 'How much time can you commit?',
};

type HoursChoice = 'h2-3' | 'h4-6' | 'h7plus';

const HOURS_OPTIONS: { id: HoursChoice; label: Localized; note: Localized }[] = [
  {
    id: 'h2-3',
    label: { ru: '2–3 ч/нед', kk: '2–3 сағ/апта', en: '2–3 h/week' },
    note: {
      ru: 'Спокойный темп — одна тема в неделю.',
      kk: 'Жай қарқын — аптасына бір тақырып.',
      en: 'A relaxed pace — one topic a week.',
    },
  },
  {
    id: 'h4-6',
    label: { ru: '4–6 ч/нед', kk: '4–6 сағ/апта', en: '4–6 h/week' },
    note: {
      ru: 'Уверенный темп — две темы в неделю.',
      kk: 'Сенімді қарқын — аптасына екі тақырып.',
      en: 'A steady pace — two topics a week.',
    },
  },
  {
    id: 'h7plus',
    label: { ru: '7+ ч/нед', kk: '7+ сағ/апта', en: '7+ h/week' },
    note: {
      ru: 'Интенсив — три темы в неделю.',
      kk: 'Карқынды — аптасына үш тақырып.',
      en: 'Intensive — three topics a week.',
    },
  },
];

const BACK: Localized = { ru: 'Назад', kk: 'Артқа', en: 'Back' };
const NEXT: Localized = { ru: 'Далее', kk: 'Әрі қарай', en: 'Next' };
const BUILD: Localized = { ru: 'Собрать план', kk: 'Жоспар құру', en: 'Build the plan' };
const CANCEL: Localized = { ru: 'Отмена', kk: 'Болдырмау', en: 'Cancel' };

/* --- hierarchy content: Направление → Предмет → Раздел → Тема --- */

const TRACK_WORD: Localized = { ru: 'Направление', kk: 'Бағыт', en: 'Track' };

type SectionId =
  | 'equations-functions'
  | 'numbers-progressions'
  | 'trigonometry'
  | 'mechanics'
  | 'electricity'
  | 'verb-tenses'
  | 'grammar-structures'
  | 'algorithms-code'
  | 'data-representation'
  | 'core';

/** Topic slug → Раздел (group of related lessons). */
const SECTION_BY_TOPIC: Record<string, SectionId> = {
  'linear-equations': 'equations-functions',
  'quadratic-equations': 'equations-functions',
  'linear-functions': 'equations-functions',
  percentages: 'numbers-progressions',
  'geometric-progression': 'numbers-progressions',
  'trigonometry-basics': 'trigonometry',
  speed: 'mechanics',
  units: 'mechanics',
  kinematics: 'mechanics',
  'newton-second-law': 'mechanics',
  'newtons-laws': 'mechanics',
  'kinetic-energy': 'mechanics',
  'ohm-law': 'electricity',
  'present-simple': 'verb-tenses',
  'past-simple': 'verb-tenses',
  'present-perfect': 'verb-tenses',
  comparatives: 'grammar-structures',
  'passive-voice': 'grammar-structures',
  'algorithms-basics': 'algorithms-code',
  'python-basics': 'algorithms-code',
  'binary-numbers': 'data-representation',
};

const SECTION_LABELS: Record<SectionId, Localized> = {
  'equations-functions': {
    ru: 'Уравнения и функции',
    kk: 'Теңдеулер мен функциялар',
    en: 'Equations and functions',
  },
  'numbers-progressions': {
    ru: 'Числа и прогрессии',
    kk: 'Сандар мен прогрессиялар',
    en: 'Numbers and progressions',
  },
  trigonometry: { ru: 'Тригонометрия', kk: 'Тригонометрия', en: 'Trigonometry' },
  mechanics: { ru: 'Механика', kk: 'Механика', en: 'Mechanics' },
  electricity: { ru: 'Электричество', kk: 'Электр', en: 'Electricity' },
  'verb-tenses': { ru: 'Времена глагола', kk: 'Етістік шақтары', en: 'Verb tenses' },
  'grammar-structures': {
    ru: 'Грамматические конструкции',
    kk: 'Грамматикалық құрылымдар',
    en: 'Grammar structures',
  },
  'algorithms-code': { ru: 'Алгоритмы и код', kk: 'Алгоритмдер мен код', en: 'Algorithms and code' },
  'data-representation': {
    ru: 'Представление данных',
    kk: 'Деректерді ұсыну',
    en: 'Data representation',
  },
  core: { ru: 'Основные темы', kk: 'Негізгі тақырыптар', en: 'Core topics' },
};

const STEP_LESSON: Localized = { ru: 'Урок', kk: 'Сабақ', en: 'Lesson' };
const STEP_PRACTICE: Localized = { ru: 'Практика', kk: 'Практика', en: 'Practice' };
const STEP_REVIEW: Localized = { ru: 'Повторение', kk: 'Қайталау', en: 'Review' };
const REVIEW_LATER: Localized = {
  ru: 'Появится в неделях повторения',
  kk: 'Қайталау апталарында болады',
  en: 'Comes up in the review weeks',
};

type PlanPhase = 'weak' | 'learn' | 'review';

const PHASE_LABELS: Record<PlanPhase, Localized> = {
  weak: { ru: 'Слабые темы', kk: 'Әлсіз тақырыптар', en: 'Weak topics' },
  learn: { ru: 'Новые темы', kk: 'Жаңа тақырыптар', en: 'New topics' },
  review: {
    ru: 'Повторение и пробный тест',
    kk: 'Қайталау және байқама тесті',
    en: 'Review and mock test',
  },
};
const PHASE_BADGE: Record<PlanPhase, string> = {
  weak: 'border-coral/40 bg-coral/10 text-coral',
  learn: 'border-teal/40 bg-teal/10 text-teal-dark',
  review: 'border-teal-dark/40 bg-mist/30 text-teal-dark',
};

const SUBJECT_LABELS: Record<string, Localized> = {
  math: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' },
  physics: { ru: 'Физика', kk: 'Физика', en: 'Physics' },
  chemistry: { ru: 'Химия', kk: 'Химия', en: 'Chemistry' },
  biology: { ru: 'Биология', kk: 'Биология', en: 'Biology' },
  informatics: { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' },
  kazakh: { ru: 'Қазақ тілі', kk: 'Қазақ тілі', en: 'Kazakh language' },
  english: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' },
  history: { ru: 'История Казахстана', kk: 'Қазақстан тарихы', en: 'History of Kazakhstan' },
};

const DATE_LOCALE: Record<Lang, string> = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' };

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const CTA_PRIMARY = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60`;

const CTA_GHOST = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-5 py-2.5 text-sm font-semibold text-slateink transition-colors hover:border-teal/50 hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-60`;

const CHIP_LINK = `${FOCUS_RING} inline-flex items-center gap-1 rounded-full border border-teal/40 bg-teal/5 px-2.5 py-1 text-[11px] font-semibold text-teal-dark transition-colors hover:bg-teal/15`;

const CHIP_MUTED =
  'inline-flex items-center gap-1 rounded-full border border-line/50 px-2.5 py-1 text-[11px] font-semibold text-slateink';

const CHIP_ACTIVE =
  'inline-flex items-center gap-1 rounded-full border border-teal bg-teal px-2.5 py-1 text-[11px] font-semibold text-white';

/* --- data --- */

const DAY_MS = 86_400_000;
const DEFAULT_WEEKS = 8;

/** Weekly load derived from the hours choice in the wizard. */
const THEMES_PER_WEEK: Record<HoursChoice, number> = { 'h2-3': 1, 'h4-6': 2, 'h7plus': 3 };

interface ProfilePlanRow {
  grade: number | null;
  subjects: string[] | null;
  goal: string | null;
  goals: string[] | null;
  exam_date: string | null;
}

interface DiagnosticPlanRow {
  subject: string;
  weak_topics: string[] | null;
  created_at: string;
}

interface SavedPlanRow {
  goal: string | null;
  exam_date: string | null;
  plan: unknown;
  updated_at: string | null;
}

/** Строка study_plans, чей plan прошёл проверку isStudyPlan. */
interface ValidSavedPlan extends Omit<SavedPlanRow, 'plan'> {
  plan: StudyPlanJson;
}

interface PlanItemJson {
  kind: 'topic' | 'lesson' | 'mock' | 'errors' | 'academy';
  /** Topic slug, lesson slug, or "<planetSlug>::<sectionIndex>" for 'academy'; null for mock/errors. */
  ref: string | null;
  subject: string | null;
}

interface PlanWeekJson {
  phase: PlanPhase;
  items: PlanItemJson[];
}

/** Wizard answers, stored inside study_plans.plan jsonb (no migration). */
interface PlanConfigJson {
  /** ISO day (yyyy-mm-dd) or null when the user left the deadline empty. */
  deadline: string | null;
  goals: string[];
  /** Selected subject / academy-planet slugs — the roadmap is built from these. Absent in plans saved before this field existed. */
  subjects: string[];
  hours: HoursChoice;
}

interface StudyPlanJson {
  version: number;
  /** ISO day (yyyy-mm-dd) the plan was generated for. */
  start: string;
  /** Present in plans built by the wizard (version ≥ 2); absent in legacy plans. */
  config?: unknown;
  weeks: PlanWeekJson[];
}

interface PlanSource {
  profileRow: ProfilePlanRow;
  diagRows: DiagnosticPlanRow[];
}

const startOfToday = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const isoDay = (d: Date): string => {
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${d.getFullYear()}-${month}-${day}`;
};

/** 'YYYY-MM-DD' → local midnight; null if malformed or not in the future. */
const parseFutureDate = (value: string | null): Date | null => {
  if (!value) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (Number.isNaN(date.getTime())) return null;
  return date.getTime() > startOfToday().getTime() ? date : null;
};

const weeksForExam = (exam: Date | null): number => {
  if (!exam) return DEFAULT_WEEKS;
  const days = Math.ceil((exam.getTime() - startOfToday().getTime()) / DAY_MS);
  return Math.max(2, Math.ceil(days / 7));
};

const cleanSlugs = (topics: string[] | null): string[] =>
  (topics ?? []).filter((t) => typeof t === 'string' && t.trim().length > 0);

const fill = (template: string, vars: Record<string, string | number>): string =>
  Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template,
  );

const daysWord = (lang: Lang, days: number): string => {
  if (lang === 'kk') return 'күн';
  if (lang === 'en') return days === 1 ? 'day' : 'days';
  const mod10 = days % 10;
  const mod100 = days % 100;
  if (mod10 === 1 && mod100 !== 11) return 'день';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'дня';
  return 'дней';
};

/** School subjects that have real Novex lessons (constants/lessonData.ts); every other selected
 *  slug is treated as an academy-planet slug (constants/academy/catalog.ts). */
const LESSON_SUBJECT_SET = new Set<string>(LEARN_DIRECTIONS.flatMap((direction) => direction.subjects));

/** Direction that owns a picked subject or academy-planet slug — the academic base is the fallback. */
const directionForPick = (subject: string): LearnDirection => {
  const planet = planetBySlug(subject);
  if (planet) return directionByRobot(directionById(planet.directionId).robot);
  return directionForSubject(subject);
};

/** Small deterministic PRNG (mulberry32) — seeded so a given generation is reproducible, but a new
 *  seed (e.g. Date.now() on rebuild) reliably reorders the pool. */
const mulberry32 = (seed: number): (() => number) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffled = <T,>(items: T[], rng: () => number): T[] => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Главная функция, которая собирает сам план по неделям. Логика такая:
// сначала в план идут слабые темы ученика (по данным диагностики, по
// каждому предмету), затем — остальные темы предметов в перемешанном
// порядке (при пересборке порядок специально меняется, чтобы план
// выглядел свежим). В конце добавляются 1–2 недели повторения и пробный
// тест. Сколько тем помещается в неделю — зависит от того, сколько
// часов в неделю ученик указал в мастере.
/**
 * Roadmap for the wizard-picked subjects/modules: weak topics first (subject by subject, in
 * diagnostic order), then each subject's remaining topic pool in an order shuffled by `seed` — a
 * fresh seed (the caller passes Date.now()) reliably reorders "Пересобрать план" without touching
 * the weak-topics priority. Then 1–2 review/mock weeks close the plan. The wizard config sets the
 * deadline and the weekly load (themes per week).
 */
const buildPlan = (
  profileRow: ProfilePlanRow,
  diagRows: DiagnosticPlanRow[],
  config: PlanConfigJson,
  seed: number,
): StudyPlanJson => {
  // diagRows arrive sorted by created_at desc — keep only the latest per subject
  const weakBySubject = new Map<string, string[]>();
  for (const row of diagRows) {
    if (!weakBySubject.has(row.subject)) {
      weakBySubject.set(row.subject, cleanSlugs(row.weak_topics));
    }
  }

  // Wizard subjects/planets win; the profile's subjects are only a fallback for the (unreachable
  // in practice, since the wizard requires a pick) case of an empty selection.
  const subjects = config.subjects.length > 0 ? config.subjects : cleanSlugs(profileRow.subjects);

  const weakItems: PlanItemJson[] = [];
  const lessonItems: PlanItemJson[] = [];
  const seenTopics = new Set<string>();
  subjects.forEach((subject, subjectIndex) => {
    for (const topic of weakBySubject.get(subject) ?? []) {
      if (seenTopics.has(topic)) continue;
      seenTopics.add(topic);
      weakItems.push({ kind: 'topic', ref: topic, subject });
    }

    const subjectPool: PlanItemJson[] = [];
    if (LESSON_SUBJECT_SET.has(subject)) {
      for (const lesson of LESSONS) {
        if (lesson.subject !== subject || seenTopics.has(lesson.topic)) continue;
        seenTopics.add(lesson.topic);
        subjectPool.push({ kind: 'lesson', ref: lesson.slug, subject });
      }
    } else {
      const planet = planetBySlug(subject);
      if (planet && hasSubjects(planet.slug)) {
        // Multi-subject planets: refs/hrefs address the FLAT index (the planet
        // page's subject ladders use those), but the pool still matches the
        // student's grade — the lowest grade present when theirs isn't.
        const flat = flattenPlanetSections(planet);
        const grades = flat
          .map((f) => f.grade)
          .filter((g): g is number => g !== null);
        const targetGrade =
          profileRow.grade !== null && grades.includes(profileRow.grade)
            ? profileRow.grade
            : Math.min(...grades);
        for (const entry of flat) {
          if (entry.grade !== targetGrade) continue;
          const ref = `${subject}::${entry.flatIndex}`;
          if (seenTopics.has(ref)) continue;
          seenTopics.add(ref);
          subjectPool.push({ kind: 'academy', ref, subject });
        }
      } else {
        const sections = planet ? (pickGradeContent(planet.lessons, profileRow.grade)?.sections ?? []) : [];
        sections.forEach((_, sectionIndex) => {
          const ref = `${subject}::${sectionIndex}`;
          if (seenTopics.has(ref)) return;
          seenTopics.add(ref);
          subjectPool.push({ kind: 'academy', ref, subject });
        });
      }
    }
    // Each subject's own pool is shuffled independently (subject blocks stay in pick order; only
    // the topics inside each block reorder) so a rebuild visibly varies the sequence.
    lessonItems.push(...shuffled(subjectPool, mulberry32(seed + subjectIndex * 97)));
  });

  const exam = parseFutureDate(config.deadline);
  const totalWeeks = weeksForExam(exam);
  const reviewWeekCount = totalWeeks >= 6 ? 2 : 1;
  const learningWeekCapacity = Math.max(1, totalWeeks - reviewWeekCount);

  const perWeek = THEMES_PER_WEEK[config.hours];
  const allItems = [...weakItems, ...lessonItems];
  const scheduled = allItems.slice(0, learningWeekCapacity * perWeek);
  const learningWeekCount = Math.ceil(scheduled.length / perWeek);
  const learningWeeks: PlanWeekJson[] = [];
  for (let i = 0; i < learningWeekCount; i += 1) {
    const items = scheduled.slice(i * perWeek, (i + 1) * perWeek);
    learningWeeks.push({
      phase: items.some((item) => item.kind === 'topic') ? 'weak' : 'learn',
      items,
    });
  }

  const reviewBase = weakItems.length > 0 ? [...weakItems] : lessonItems.slice(0, 4);
  const reviewWeeks: PlanWeekJson[] = [];
  if (reviewWeekCount === 2) {
    reviewWeeks.push({ phase: 'review', items: reviewBase });
    reviewWeeks.push({
      phase: 'review',
      items: [
        { kind: 'mock', ref: null, subject: null },
        { kind: 'errors', ref: null, subject: null },
      ],
    });
  } else {
    reviewWeeks.push({
      phase: 'review',
      items: [...reviewBase, { kind: 'mock', ref: null, subject: null }],
    });
  }

  return {
    version: 2,
    start: isoDay(startOfToday()),
    config,
    weeks: [...learningWeeks, ...reviewWeeks],
  };
};

const isPlanItem = (value: unknown): value is PlanItemJson => {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    (item.kind === 'topic' ||
      item.kind === 'lesson' ||
      item.kind === 'mock' ||
      item.kind === 'errors' ||
      item.kind === 'academy') &&
    (item.ref === null || typeof item.ref === 'string') &&
    (item.subject === null || typeof item.subject === 'string')
  );
};

const isStudyPlan = (value: unknown): value is StudyPlanJson => {
  if (typeof value !== 'object' || value === null) return false;
  const plan = value as Record<string, unknown>;
  if (typeof plan.start !== 'string' || !Array.isArray(plan.weeks)) return false;
  return plan.weeks.every((week) => {
    if (typeof week !== 'object' || week === null) return false;
    const w = week as Record<string, unknown>;
    return (
      (w.phase === 'weak' || w.phase === 'learn' || w.phase === 'review') &&
      Array.isArray(w.items) &&
      w.items.every(isPlanItem)
    );
  });
};

const isHoursChoice = (value: unknown): value is HoursChoice =>
  value === 'h2-3' || value === 'h4-6' || value === 'h7plus';

/** Loose-parse the wizard config stored in a saved plan; null when absent/legacy. `subjects` is a
 *  newer field — plans saved before it existed parse fine with an empty array. */
const parseConfig = (value: unknown): PlanConfigJson | null => {
  if (typeof value !== 'object' || value === null) return null;
  const c = value as Record<string, unknown>;
  if (!(c.deadline === null || typeof c.deadline === 'string')) return null;
  if (!Array.isArray(c.goals) || !c.goals.every((g) => typeof g === 'string')) return null;
  if (!isHoursChoice(c.hours)) return null;
  const subjects =
    Array.isArray(c.subjects) && c.subjects.every((s) => typeof s === 'string') ? c.subjects : [];
  return { deadline: c.deadline, goals: c.goals, subjects, hours: c.hours };
};

/** Which week of a saved plan we are in right now; -1 when out of range. */
const currentWeekIndex = (plan: StudyPlanJson): number => {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(plan.start);
  if (!match) return -1;
  const start = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (Number.isNaN(start.getTime())) return -1;
  const index = Math.floor((startOfToday().getTime() - start.getTime()) / (7 * DAY_MS));
  return index >= 0 && index < plan.weeks.length ? index : -1;
};

/* --- local plan cache --- */

// Локальный кэш последнего плана (ключ привязан к user.id, поэтому кэш
// чужого пользователя никогда не подхватывается). Выручает, когда запись в
// базу не прошла: план не теряется при уходе со страницы, показывается при
// следующем заходе и догоняет базу автоповтором сохранения.
interface PlanCacheJson {
  plan: StudyPlanJson;
  goal: string | null;
  examDate: string | null;
  goals: string[];
  updatedAt: string;
  /** true, пока план не удалось записать в базу — кэш в этом случае всегда новее базы. */
  pendingSave: boolean;
}

const planCacheKey = (userId: string): string => `novex.plan.${userId}`;

/** Читает кэш плана из localStorage; null, когда записи нет или она битая. */
const readPlanCache = (userId: string): PlanCacheJson | null => {
  try {
    const raw = window.localStorage.getItem(planCacheKey(userId));
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const entry = parsed as Record<string, unknown>;
    const planValue = entry.plan;
    if (!isStudyPlan(planValue)) return null;
    const goal = typeof entry.goal === 'string' ? entry.goal : null;
    const examDate = typeof entry.examDate === 'string' ? entry.examDate : null;
    const goals = Array.isArray(entry.goals)
      ? (entry.goals as unknown[]).filter((g): g is string => typeof g === 'string')
      : [];
    // Без корректной даты кэш считается самым старым — пусть решает база.
    const updatedAt =
      typeof entry.updatedAt === 'string' && !Number.isNaN(Date.parse(entry.updatedAt))
        ? entry.updatedAt
        : new Date(0).toISOString();
    return {
      plan: planValue,
      goal,
      examDate,
      goals,
      updatedAt,
      pendingSave: entry.pendingSave === true,
    };
  } catch {
    // Приватный режим или недоступный localStorage — просто без кэша.
    return null;
  }
};

const writePlanCache = (userId: string, cache: PlanCacheJson): void => {
  try {
    window.localStorage.setItem(planCacheKey(userId), JSON.stringify(cache));
  } catch {
    // Переполнение квоты/приватный режим — запись кэша некритична.
  }
};

/** Строго новее ли `candidate`, чем `other` (битая/пустая дата считается старой). */
const isNewerTimestamp = (candidate: string, other: string | null): boolean => {
  const candidateTime = Date.parse(candidate);
  if (Number.isNaN(candidateTime)) return false;
  const otherTime = other === null ? Number.NaN : Date.parse(other);
  if (Number.isNaN(otherTime)) return true;
  return candidateTime > otherTime;
};

/** Короткая расшифровка ошибки базы (сообщение + код) для блока неудачного сохранения. */
const describeDbError = (error: { message: string; code?: string | null }): string => {
  const code = typeof error.code === 'string' && error.code.trim().length > 0 ? error.code : null;
  return code === null ? error.message : `${error.message} (code: ${code})`;
};

/** Результат сохранения плана в базу: удалось ли и короткая причина неудачи. */
interface PersistPlanResult {
  ok: boolean;
  message?: string;
}

/* --- pieces --- */

/** Mock / errors rows — fixed items that close the plan. */
const PlanItemRow: React.FC<{ item: PlanItemJson }> = ({ item }) => {
  const { language } = useLanguage();
  const Icon = item.kind === 'mock' ? ClipboardCheck : Repeat;
  const label = item.kind === 'mock' ? MOCK_ITEM : ERRORS_ITEM;
  return (
    <li className="flex items-center gap-2.5 text-sm font-medium text-ink">
      <Icon className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
      {loc(language, label)}
    </li>
  );
};

/**
 * Тема row: title plus the sequential steps Урок → Практика → Повторение.
 * Повторение is muted in learning weeks (it comes up in the review weeks
 * that close the plan) and highlighted in review weeks.
 */
const ThemeRow: React.FC<{ item: PlanItemJson; reviewWeek: boolean; grade: number | null }> = ({
  item,
  reviewWeek,
  grade,
}) => {
  const { language } = useLanguage();

  let title: string;
  let lessonHref: string | null = null;
  let lessonAvailable = false;
  if (item.kind === 'lesson') {
    const lesson = item.ref ? lessonBySlug(item.ref) : undefined;
    if (!lesson) return null;
    title = loc(language, lesson.title);
    lessonHref = `/learn/${lesson.slug}`;
    lessonAvailable = lesson.available;
  } else if (item.kind === 'academy') {
    const [planetSlug, sectionIndexRaw] = (item.ref ?? '').split('::');
    const planet = planetBySlug(planetSlug);
    const sectionIndex = Number(sectionIndexRaw);
    // Multi-subject planets store flat indices in refs (see buildPlan);
    // everyone else keeps grade-picked section indices.
    const section = planet
      ? hasSubjects(planet.slug)
        ? flattenPlanetSections(planet)[sectionIndex]?.section
        : pickGradeContent(planet.lessons, grade)?.sections[sectionIndex]
      : undefined;
    if (!planet || !section) return null;
    title = pickLangField(language, section.title, section.titleRu, section.titleKk);
    lessonHref = `/learn/p/${planet.slug}/${sectionIndex}`;
    lessonAvailable = true;
  } else {
    const topic = item.ref ?? '';
    title = topicName(language, topic);
    const lesson = LESSONS.find((l) => l.topic === topic && l.available);
    lessonHref = lesson ? `/learn/${lesson.slug}` : null;
    lessonAvailable = lesson !== undefined;
  }

  return (
    <li className="rounded-xl border border-line/40 bg-canvas/60 px-3.5 py-3">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="flex min-w-0 items-center gap-2.5 text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full border-2 border-teal" aria-hidden="true" />
          <span className="font-medium text-ink">{title}</span>
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          {lessonHref && lessonAvailable ? (
            <Link to={lessonHref} className={CHIP_LINK}>
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              {loc(language, STEP_LESSON)}
            </Link>
          ) : (
            <span className={CHIP_MUTED}>
              <Lock className="h-3 w-3" aria-hidden="true" />
              {loc(language, STEP_LESSON)}
            </span>
          )}
          <Link to="/practice" className={CHIP_LINK}>
            <Target className="h-3 w-3" aria-hidden="true" />
            {loc(language, STEP_PRACTICE)}
          </Link>
          <span
            className={reviewWeek ? CHIP_ACTIVE : CHIP_MUTED}
            title={reviewWeek ? undefined : loc(language, REVIEW_LATER)}
          >
            <Repeat className="h-3 w-3" aria-hidden="true" />
            {loc(language, STEP_REVIEW)}
          </span>
        </span>
      </div>
    </li>
  );
};

interface ThemeGroup {
  key: string;
  /** /learn direction, derived from the subject at render time — saved plans
      only store subjects, so renamed directions can never go stale. */
  direction: LearnDirection;
  subject: string;
  section: SectionId;
  items: PlanItemJson[];
}

/** Group a week's themes by Направление · Предмет · Раздел, in first-appearance order. */
const groupWeekThemes = (items: PlanItemJson[]): ThemeGroup[] => {
  const groups: ThemeGroup[] = [];
  for (const item of items) {
    if (item.kind === 'mock' || item.kind === 'errors') continue;
    const subject = item.subject ?? 'other';
    const topic =
      item.kind === 'lesson'
        ? (item.ref ? lessonBySlug(item.ref)?.topic : undefined) ?? item.ref ?? ''
        : item.ref ?? '';
    const section = SECTION_BY_TOPIC[topic] ?? 'core';
    const key = `${subject}|${section}`;
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = { key, direction: directionForPick(subject), subject, section, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
};

/* --- wizard --- */

interface WizardSubjectOption {
  slug: string;
  label: Localized;
  Icon?: LucideIcon;
}

/** A direction's selectable subjects/planets: its school subjects (real Novex lessons) plus its
 *  academy planets — the same catalogue /learn draws its mentor cards from. */
const directionSubjectOptions = (direction: LearnDirection): WizardSubjectOption[] => [
  ...direction.subjects.map((slug) => ({ slug, label: SUBJECT_LABELS[slug] })),
  ...planetsByRobot(direction.robot).map((planet) => ({
    slug: planet.slug,
    label: planet.name,
    Icon: planet.icon,
  })),
];

interface PlanWizardProps {
  initialDeadline: string;
  initialGoals: string[];
  initialSubjects: string[];
  initialHours: HoursChoice;
  busy: boolean;
  canCancel: boolean;
  onCancel: () => void;
  onGenerate: (config: PlanConfigJson) => void;
}

const PlanWizard: React.FC<PlanWizardProps> = ({
  initialDeadline,
  initialGoals,
  initialSubjects,
  initialHours,
  busy,
  canCancel,
  onCancel,
  onGenerate,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  // Ответы ученика на трёх шагах мастера: дедлайн, цели и выбранные
  // предметы/модули, время в неделю; openDirections — какие карточки
  // направлений сейчас раскрыты на шаге выбора предметов.
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [deadline, setDeadline] = useState(initialDeadline);
  const [goals, setGoals] = useState<string[]>(initialGoals);
  const [subjects, setSubjects] = useState<string[]>(initialSubjects);
  const [hours, setHours] = useState<HoursChoice>(initialHours);
  const [openDirections, setOpenDirections] = useState<Set<string>>(() => new Set(['nov4']));

  const toggleGoal = (slug: string) =>
    setGoals((prev) => (prev.includes(slug) ? prev.filter((g) => g !== slug) : [...prev, slug]));
  const toggleSubject = (slug: string) =>
    setSubjects((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  const toggleDirection = (robot: string) =>
    setOpenDirections((prev) => {
      const next = new Set(prev);
      if (next.has(robot)) next.delete(robot);
      else next.add(robot);
      return next;
    });

  const stepTitle = step === 1 ? STEP_DEADLINE : step === 2 ? STEP_GOAL : STEP_HOURS;
  const canAdvance = step !== 2 || subjects.length > 0;

  return (
    <motion.section
      aria-labelledby="plan-wizard-heading"
      className={`${CARD} mt-8`}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2
          id="plan-wizard-heading"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          {loc(language, WIZARD_TITLE)}
        </h2>
        <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
          {fill(loc(language, STEP_OF), { n: step })}
        </span>
      </div>
      <p className="mt-1 text-sm text-slateink">{loc(language, WIZARD_SUB)}</p>

      <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-1.5 w-10 rounded-full ${n <= step ? 'bg-teal' : 'bg-line/50'}`}
          />
        ))}
      </div>

      <h3 className="mt-5 font-display text-base font-bold tracking-tight text-ink">
        {loc(language, stepTitle)}
      </h3>

      {step === 1 && (
        <div className="mt-3">
          <input
            type="date"
            value={deadline}
            min={isoDay(startOfToday())}
            onChange={(e) => setDeadline(e.target.value)}
            className={`${FOCUS_RING} rounded-xl border border-line/60 bg-white px-4 py-2.5 text-sm text-ink`}
          />
          <p className="mt-2 max-w-md text-sm text-slateink">{loc(language, DEADLINE_HINT)}</p>
        </div>
      )}

      {step === 2 && (
        <div className="mt-3 space-y-3">
          {LEARN_DIRECTIONS.map((direction) => {
            const isOpen = openDirections.has(direction.robot);
            const options = directionSubjectOptions(direction);
            const optionSlugs = new Set(options.map((o) => o.slug));
            const selectionCount =
              subjects.filter((s) => optionSlugs.has(s)).length +
              (direction.robot === 'nov4' ? goals.length : 0);
            return (
              <div
                key={direction.robot}
                className="overflow-hidden rounded-2xl border border-line/60 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleDirection(direction.robot)}
                  className={`${FOCUS_RING} flex w-full items-center gap-3.5 px-4 py-4 text-left transition-colors hover:bg-mist/10 sm:px-5`}
                >
                  <RobotAvatar robot={direction.robot} className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-teal-dark">
                        {loc(language, DIRECTION_CODE_LABEL[direction.robot])}
                      </span>
                      {selectionCount > 0 && (
                        <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal-dark">
                          {selectionCount}
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                      {loc(language, direction.name)}
                    </span>
                    <span className="mt-0.5 block text-sm text-slateink">
                      {loc(language, DIRECTION_TAGLINE[direction.robot])}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slateink transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line/50 px-4 pb-4 pt-3.5 sm:px-5">
                        {direction.robot === 'nov4' && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-slateink">
                              {loc(language, GOAL_GROUP_LABEL)}
                            </p>
                            <div className="mt-2 grid gap-2 sm:grid-cols-2">
                              {Object.entries(GOAL_LABELS).map(([slug, label]) => {
                                const selected = goals.includes(slug);
                                return (
                                  <button
                                    key={slug}
                                    type="button"
                                    aria-pressed={selected}
                                    onClick={() => toggleGoal(slug)}
                                    className={`${FOCUS_RING} flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                                      selected
                                        ? 'border-teal bg-teal/10 text-teal-dark'
                                        : 'border-line/60 bg-white text-ink hover:border-teal/50'
                                    }`}
                                  >
                                    {loc(language, label)}
                                    {selected && (
                                      <Check className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                        <div className={direction.robot === 'nov4' ? 'mt-4' : undefined}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slateink">
                            {loc(language, SUBJECT_GROUP_LABEL)}
                          </p>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            {options.map((option) => {
                              const selected = subjects.includes(option.slug);
                              const Icon = option.Icon;
                              return (
                                <button
                                  key={option.slug}
                                  type="button"
                                  aria-pressed={selected}
                                  onClick={() => toggleSubject(option.slug)}
                                  className={`${FOCUS_RING} flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                                    selected
                                      ? 'border-teal bg-teal/10 text-teal-dark'
                                      : 'border-line/60 bg-white text-ink hover:border-teal/50'
                                  }`}
                                >
                                  <span className="flex min-w-0 items-center gap-2">
                                    {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
                                    <span className="truncate">{loc(language, option.label)}</span>
                                  </span>
                                  {selected && (
                                    <Check className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <p className="text-sm text-slateink">{loc(language, GOAL_HINT)}</p>
        </div>
      )}

      {step === 3 && (
        <div className="mt-3 space-y-2.5">
          {HOURS_OPTIONS.map((option) => {
            const selected = hours === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setHours(option.id)}
                className={`${FOCUS_RING} flex w-full flex-wrap items-center gap-x-3 gap-y-0.5 rounded-xl border px-4 py-3 text-left transition-colors ${
                  selected
                    ? 'border-teal bg-teal/5'
                    : 'border-line/60 bg-white hover:border-teal/50'
                }`}
              >
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    selected ? 'bg-teal text-white' : 'bg-mist/40 text-teal-dark'
                  }`}
                >
                  {loc(language, option.label)}
                </span>
                <span className="text-sm text-slateink">{loc(language, option.note)}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => (s === 3 ? 2 : 1))}
            disabled={busy}
            className={CTA_GHOST}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK)}
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s === 1 ? 2 : 3))}
            disabled={!canAdvance}
            className={CTA_PRIMARY}
          >
            {loc(language, NEXT)}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onGenerate({ deadline: deadline || null, goals, subjects, hours })}
            disabled={busy || subjects.length === 0}
            className={CTA_PRIMARY}
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            )}
            {loc(language, busy ? REBUILDING : BUILD)}
          </button>
        )}
        {canCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className={`${FOCUS_RING} rounded-xl px-3 py-2.5 text-sm font-semibold text-slateink transition-colors hover:text-teal-dark`}
          >
            {loc(language, CANCEL)}
          </button>
        )}
      </div>
    </motion.section>
  );
};

/* --- page --- */

const PlanPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile, loading: authLoading } = useAuth();
  const reducedMotion = useReducedMotion();
  const firstName = profile?.full_name?.trim().split(/\s+/)[0] || null;

  // source — данные профиля и диагностики, из которых строится план;
  // plan — уже собранный и сохранённый план по неделям; busy/saveNote —
  // идёт ли сейчас сборка/сохранение и её результат; wizardOpen — показан
  // ли сейчас мастер настройки плана (открывается, если плана ещё нет,
  // или когда ученик нажимает «Пересобрать план»).
  const [source, setSource] = useState<PlanSource | null>(null);
  const [plan, setPlan] = useState<StudyPlanJson | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saveNote, setSaveNote] = useState<'saved' | 'error' | null>(null);
  // Короткая расшифровка причины неудачного сохранения (сообщение/код ошибки
  // базы) — показывается мелким шрифтом рядом с текстом ошибки.
  const [saveErrorDetail, setSaveErrorDetail] = useState<string | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);
  // AuthContext переизлучает `user` при фокусе вкладки/обновлении токена, из-за
  // чего эффект загрузки ниже перезапускается уже после того, как на экране
  // появился свежесобранный план. loadedRef не даёт этому повторному запуску
  // снова читать план из базы и затирать им актуальное состояние в памяти —
  // загрузка выполняется один раз за «сессию» входа (сбрасывается при выходе).
  const loadedRef = useRef(false);
  // Сколько автоповторов сохранения уже сделано за это монтирование: план, не
  // дошедший до базы, дозаписывается один раз, без циклов.
  const retrySaveRef = useRef(false);

  // Сохраняет собранный план в базу данных Supabase (таблица study_plans).
  // Вместе с флагом успеха возвращает короткую причину неудачи — она видна
  // в блоке ошибки, поэтому падение (например, отказ RLS) сразу заметно.
  const persistPlan = useCallback(
    async (
      planJson: StudyPlanJson,
      goal: string | null,
      examDate: string | null,
    ): Promise<PersistPlanResult> => {
      if (!user) return { ok: false };
      try {
        const row = {
          user_id: user.id,
          goal,
          exam_date: examDate,
          plan: planJson,
          updated_at: new Date().toISOString(),
        };
        const { error } = await supabase.from('study_plans').upsert(row, { onConflict: 'user_id' });
        if (!error) return { ok: true };
        // A stale access token in a long-open tab is the usual cause here, so
        // refresh the session and retry once before surfacing the error.
        console.error('study_plans upsert failed', error);
        const { error: refreshError } = await supabase.auth.refreshSession();
        if (refreshError) return { ok: false, message: describeDbError(refreshError) };
        const { error: retryError } = await supabase
          .from('study_plans')
          .upsert(row, { onConflict: 'user_id' });
        if (retryError) {
          console.error('study_plans retry failed', retryError);
          return { ok: false, message: describeDbError(retryError) };
        }
        return { ok: true };
      } catch {
        return { ok: false };
      }
    },
    [user],
  );

  // При входе загружаем из базы нужные поля профиля, результаты диагностики
  // и уже сохранённый план (если он есть). Если плана ещё нет — ниже
  // откроется мастер настройки, который соберёт план с нуля.
  // Load the profile fields, diagnostics and any saved plan. When nothing is
  // saved yet, the wizard collects the config before anything is generated.
  useEffect(() => {
    if (!user) {
      // Ученик вышел — сбрасываем флаги, чтобы следующий вход снова подгрузил
      // план из базы (а не молча остался с планом предыдущего пользователя).
      loadedRef.current = false;
      retrySaveRef.current = false;
      // Кэш привязан к user.id, но состояние страницы тоже чистим: план
      // прошлого входа не должен оставаться в памяти после выхода.
      setSource(null);
      setPlan(null);
      setUpdatedAt(null);
      setLoadError(false);
      setSaveNote(null);
      setSaveErrorDetail(null);
      setWizardOpen(false);
      return;
    }
    // Эффект уже выполнил первую загрузку в этом входе — дальнейшие
    // переизлучения `user` (фокус вкладки, обновление токена) не должны
    // повторно читать базу и перезаписывать план, собранный уже после этого.
    if (loadedRef.current) return;
    loadedRef.current = true;
    let cancelled = false;
    // Отличаем завершённую загрузку от отменённой: StrictMode в dev-режиме
    // сразу отменяет первый запуск эффекта, и защёлку нужно вернуть назад,
    // иначе второй запуск выйдет раньше времени и план не загрузится вовсе.
    let finished = false;
    const load = async () => {
      // Кэш последнего плана читаем до сетевых запросов и сразу ставим его в
      // состояние — план появляется мгновенно и не мигает старой строкой базы.
      const cache = readPlanCache(user.id);
      if (cache) {
        setPlan(cache.plan);
        setUpdatedAt(cache.updatedAt);
      }
      try {
        const [profileRes, diagRes, planRes] = await Promise.all([
          supabase
            .from('profiles')
            .select('grade, subjects, goal, goals, exam_date')
            .eq('id', user.id)
            .maybeSingle(),
          supabase
            .from('diagnostic_results')
            .select('subject, weak_topics, created_at')
            .order('created_at', { ascending: false }),
          supabase
            .from('study_plans')
            .select('goal, exam_date, plan, updated_at')
            .eq('user_id', user.id)
            .maybeSingle(),
        ]);
        if (cancelled) return;
        if (profileRes.error || diagRes.error || !profileRes.data) {
          setLoadError(true);
          return;
        }
        const profileRow = profileRes.data as ProfilePlanRow;
        const diagRows = (diagRes.data ?? []) as DiagnosticPlanRow[];

        // study_plans may not exist yet — treat any read failure as "no plan"
        const saved = planRes.error ? null : ((planRes.data ?? null) as SavedPlanRow | null);
        const savedPlan: ValidSavedPlan | null =
          saved !== null && isStudyPlan(saved.plan) ? { ...saved, plan: saved.plan } : null;

        // Кэш выигрывает, если он ещё не дождался записи в базу (такой план
        // заведомо самый свежий — независимо от дат), если в базе плана нет
        // вовсе или если он новее строки из базы по дате обновления.
        const cacheWins =
          cache !== null &&
          (cache.pendingSave ||
            savedPlan === null ||
            isNewerTimestamp(cache.updatedAt, savedPlan.updated_at));

        if (cache !== null && cacheWins) {
          setPlan(cache.plan);
          setUpdatedAt(cache.updatedAt);
          // Шапка и мастер должны показывать настройки свежего плана, а не
          // старые значения из профиля.
          setSource({
            profileRow: {
              ...profileRow,
              goal: cache.goal,
              goals: cache.goals,
              exam_date: cache.examDate,
            },
            diagRows,
          });
        } else {
          setSource({ profileRow, diagRows });
          if (savedPlan) {
            setPlan(savedPlan.plan);
            setUpdatedAt(savedPlan.updated_at);
            // Синхронизируем кэш с более свежей версией из базы, чтобы при
            // следующем заходе не мелькал устаревший локальный план.
            const savedGoals =
              parseConfig(savedPlan.plan.config)?.goals ??
              (savedPlan.goal !== null ? [savedPlan.goal] : []);
            writePlanCache(user.id, {
              plan: savedPlan.plan,
              goal: savedPlan.goal,
              examDate: savedPlan.exam_date,
              goals: savedGoals,
              updatedAt: savedPlan.updated_at ?? new Date().toISOString(),
              pendingSave: false,
            });
          }
        }

        // План из кэша не дошёл до базы — один раз тихо повторяем сохранение.
        if (cache !== null && cache.pendingSave && !retrySaveRef.current) {
          retrySaveRef.current = true;
          const retry = await persistPlan(cache.plan, cache.goal, cache.examDate);
          if (cancelled) return;
          writePlanCache(user.id, { ...cache, pendingSave: !retry.ok });
          setSaveNote(retry.ok ? 'saved' : 'error');
          setSaveErrorDetail(retry.ok ? null : retry.message ?? null);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      } finally {
        finished = true;
      }
    };
    void load();
    return () => {
      cancelled = true;
      if (!finished) loadedRef.current = false;
    };
  }, [user, persistPlan]);

  // Вызывается по кнопке «Собрать план» / «Пересобрать план» в мастере:
  // строит новый план по ответам ученика и сохраняет его в базу.
  const generate = async (config: PlanConfigJson) => {
    if (!user || !source || busy) return;
    setBusy(true);
    setSaveNote(null);
    setSaveErrorDetail(null);
    try {
      const built = buildPlan(source.profileRow, source.diagRows, config, Date.now());
      const goal = config.goals[0] ?? null;
      const generatedAt = new Date().toISOString();
      // Показываем свежий план сразу, не дожидаясь ответа базы: он должен
      // остаться на экране независимо от результата сохранения ниже и от
      // повторных срабатываний эффекта загрузки (см. loadedRef выше).
      setSource({
        profileRow: { ...source.profileRow, goal, goals: config.goals, exam_date: config.deadline },
        diagRows: source.diagRows,
      });
      setPlan(built);
      setUpdatedAt(generatedAt);
      setWizardOpen(false);
      // Кэшируем план в браузере ДО запроса к базе: если сохранение упадёт
      // (например, из-за RLS), план переживёт уход со страницы и вернётся при
      // следующем заходе с флагом pendingSave для автоповтора.
      const cached = {
        plan: built,
        goal,
        examDate: config.deadline,
        goals: config.goals,
        updatedAt: generatedAt,
      };
      writePlanCache(user.id, { ...cached, pendingSave: true });
      const result = await persistPlan(built, goal, config.deadline);
      writePlanCache(user.id, { ...cached, pendingSave: !result.ok });
      setSaveNote(result.ok ? 'saved' : 'error');
      setSaveErrorDetail(result.ok ? null : result.message ?? null);
    } catch {
      setSaveNote('error');
      setSaveErrorDetail(null);
    } finally {
      setBusy(false);
    }
  };

  // Кнопка «Повторить сохранение» в блоке ошибки: ещё одна попытка записать
  // текущий план в базу; кэш обновляется по результату попытки.
  const retrySave = async () => {
    if (!user || !source || !plan || busy) return;
    setBusy(true);
    setSaveNote(null);
    setSaveErrorDetail(null);
    try {
      const profileRow = source.profileRow;
      const result = await persistPlan(plan, profileRow.goal, profileRow.exam_date);
      writePlanCache(user.id, {
        plan,
        goal: profileRow.goal,
        examDate: profileRow.exam_date,
        goals: cleanSlugs(profileRow.goals),
        updatedAt: updatedAt ?? new Date().toISOString(),
        pendingSave: !result.ok,
      });
      setSaveNote(result.ok ? 'saved' : 'error');
      setSaveErrorDetail(result.ok ? null : result.message ?? null);
    } catch {
      setSaveNote('error');
      setSaveErrorDetail(null);
    } finally {
      setBusy(false);
    }
  };

  if (authLoading || !user) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const profileRow = source?.profileRow ?? null;
  const exam = profileRow ? parseFutureDate(profileRow.exam_date) : null;
  const daysLeft = exam ? Math.ceil((exam.getTime() - startOfToday().getTime()) / DAY_MS) : 0;
  // All selected goals, falling back to the legacy single-goal column.
  const goalValues = profileRow
    ? cleanSlugs(profileRow.goals).length > 0
      ? cleanSlugs(profileRow.goals)
      : profileRow.goal
        ? [profileRow.goal]
        : []
    : [];
  const goalLabel =
    goalValues.length > 0
      ? goalValues.map((g) => (GOAL_LABELS[g] ? loc(language, GOAL_LABELS[g]) : g)).join(', ')
      : loc(language, NO_GOAL_SHORT);

  const subjectLabel = (slug: string): string => {
    const known = SUBJECT_LABELS[slug];
    if (known) return loc(language, known);
    const planet = planetBySlug(slug);
    return planet ? loc(language, planet.name) : slug;
  };

  const updatedDate = updatedAt ? new Date(updatedAt) : null;
  const updatedText =
    updatedDate && !Number.isNaN(updatedDate.getTime())
      ? fill(loc(language, UPDATED_AT), {
          date: updatedDate.toLocaleDateString(DATE_LOCALE[language], {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        })
      : null;

  const activeWeek = plan ? currentWeekIndex(plan) : -1;

  const savedConfig = plan ? parseConfig(plan.config) : null;
  const showWizard = source !== null && source.diagRows.length > 0 && (!plan || wizardOpen);
  // Same condition as the plan-view branch below: the rebuild CTA lives in the header.
  const showRebuild =
    !loadError && source !== null && source.diagRows.length > 0 && !showWizard && plan !== null;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <header aria-labelledby="plan-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <RobotAvatar robot="nov1" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, ROBOT_LABEL)}
                </p>
                <h1
                  id="plan-heading"
                  className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
                >
                  {loc(language, TITLE(firstName))}
                </h1>
                <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                  {loc(language, SUB)}
                </p>
              </div>
            </div>
            {showRebuild && (
              <div className="flex flex-col items-stretch gap-2.5 sm:shrink-0 sm:items-end">
                <button
                  type="button"
                  onClick={() => {
                    setSaveNote(null);
                    setSaveErrorDetail(null);
                    setWizardOpen(true);
                  }}
                  disabled={busy}
                  className={`${FOCUS_RING} inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-teal px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_rgba(33,159,162,0.35)] transition hover:-translate-y-0.5 hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8 sm:py-4 sm:text-lg`}
                >
                  <RefreshCw className="h-5 w-5" aria-hidden="true" />
                  {loc(language, REBUILD)}
                </button>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
                  {saveNote === 'saved' && (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-teal-dark">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      {loc(language, SAVED_NOTE)}
                    </span>
                  )}
                  {saveNote === 'error' && (
                    // Блок ошибки сохранения: сам текст, короткая причина
                    // (сообщение/код ошибки базы) и кнопка повтора.
                    <div
                      role="alert"
                      className="flex flex-col items-start gap-2 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3"
                    >
                      <span className="flex items-center gap-1.5 text-sm font-medium text-coral">
                        <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {loc(language, SAVE_ERROR)}
                      </span>
                      {saveErrorDetail && (
                        <span className="break-words text-xs text-slateink">{saveErrorDetail}</span>
                      )}
                      <button
                        type="button"
                        onClick={() => void retrySave()}
                        disabled={busy}
                        className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-lg border border-coral/40 bg-white px-3 py-1.5 text-xs font-semibold text-coral transition-colors hover:bg-coral/10 disabled:cursor-not-allowed disabled:opacity-60`}
                      >
                        <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                        {loc(language, RETRY_SAVE)}
                      </button>
                    </div>
                  )}
                  {updatedText && <span className="text-xs text-slateink">{updatedText}</span>}
                </div>
              </div>
            )}
          </div>

          {profileRow && (
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-teal/30 bg-teal/5 px-5 py-4">
              <span className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4 shrink-0 text-teal-dark" aria-hidden="true" />
                <span className="text-slateink">{loc(language, GOAL_LINE_LABEL)}:</span>
                <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">
                  {goalLabel}
                </span>
              </span>
              {exam ? (
                <>
                  <span className="flex items-center gap-2 text-sm text-slateink">
                    <Calendar className="h-4 w-4 shrink-0 text-teal-dark" aria-hidden="true" />
                    {loc(language, EXAM_LABEL)}:{' '}
                    {exam.toLocaleDateString(DATE_LOCALE[language], {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="text-sm font-bold text-teal-dark">
                    {daysLeft} {daysWord(language, daysLeft)} {loc(language, UNTIL_EXAM)}
                  </span>
                </>
              ) : (
                <span className="text-sm text-slateink">{loc(language, DEFAULT_LENGTH)}</span>
              )}
            </div>
          )}
        </header>

        {/* Что показать вместо самого плана зависит от состояния: ошибка загрузки,
            данные ещё грузятся, диагностика ни разу не пройдена (без неё план
            строить не из чего), мастер настройки открыт, план ещё собирается,
            или план уже готов и показывается по неделям. */}
        {loadError ? (
          <div role="alert" className={`${CARD} mt-8 flex items-start gap-3 border-coral/40`}>
            <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
            <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD)}</p>
          </div>
        ) : !source ? (
          <div role="status" className={`${CARD} mt-8 flex items-center justify-center py-16`}>
            <Loader2 className="h-8 w-8 animate-spin text-teal" aria-hidden="true" />
            <span className="sr-only">{loc(language, LOADING)}</span>
          </div>
        ) : source.diagRows.length === 0 ? (
          <div className={`${CARD} mt-8`}>
            <div className="flex items-start gap-4">
              <RobotAvatar robot="nov1" className="h-14 w-14 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                  {loc(language, EMPTY_TITLE)}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slateink">{loc(language, EMPTY_TEXT)}</p>
                <Link to="/onboarding" className={`${CTA_PRIMARY} mt-5`}>
                  {loc(language, CTA_DIAG)}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        ) : showWizard ? (
          <PlanWizard
            // A stored config wins as a whole (its deadline may be null on
            // purpose); the profile only fills in for legacy plans without one.
            initialDeadline={savedConfig ? savedConfig.deadline ?? '' : profileRow?.exam_date ?? ''}
            initialGoals={savedConfig?.goals ?? goalValues}
            initialSubjects={savedConfig?.subjects ?? []}
            initialHours={savedConfig?.hours ?? 'h4-6'}
            busy={busy}
            canCancel={plan !== null}
            onCancel={() => setWizardOpen(false)}
            onGenerate={(config) => void generate(config)}
          />
        ) : !plan ? (
          <div role="status" className={`${CARD} mt-8 flex items-center justify-center py-16`}>
            <Loader2 className="h-8 w-8 animate-spin text-teal" aria-hidden="true" />
            <span className="sr-only">{loc(language, LOADING)}</span>
          </div>
        ) : (
          <>
            <ol
              aria-label={loc(language, TIMELINE_LABEL)}
              className="relative mt-8 space-y-6 border-l-2 border-line/60 pl-6"
            >
              {plan.weeks.map((week, index) => {
                const isCurrent = index === activeWeek;
                const robot = 'nov1';
                const robotLabel = week.phase === 'review' ? ROBOT_NOV3_LABEL : ROBOT_NOV2_LABEL;
                const groups = groupWeekThemes(week.items);
                const fixedItems = week.items.filter(
                  (item) => item.kind === 'mock' || item.kind === 'errors',
                );
                return (
                  <motion.li
                    key={`week-${index}`}
                    className="relative"
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-8 top-7 h-3.5 w-3.5 rounded-full border-2 border-canvas ${
                        isCurrent ? 'bg-teal-dark' : 'bg-teal'
                      }`}
                    />
                    <div
                      className={`rounded-2xl border p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-6 ${
                        isCurrent ? 'border-teal/50 bg-mist/40' : 'border-line/50 bg-white'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                          {fill(loc(language, WEEK_LABEL), { n: index + 1 })}
                        </h2>
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${PHASE_BADGE[week.phase]}`}
                        >
                          {loc(language, PHASE_LABELS[week.phase])}
                        </span>
                        {isCurrent && (
                          <span className="rounded-full bg-teal px-2.5 py-1 text-[11px] font-semibold text-white">
                            {loc(language, CURRENT_BADGE)}
                          </span>
                        )}
                        <span className="ml-auto flex items-center gap-1.5">
                          <RobotAvatar robot={robot} className="h-7 w-7 shrink-0" />
                          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-slateink">
                            {loc(language, robotLabel)}
                          </span>
                        </span>
                      </div>

                      {week.items.length === 0 ? (
                        <p className="mt-4 text-sm text-slateink">{loc(language, WEEK_FALLBACK)}</p>
                      ) : (
                        <>
                          {groups.map((group) => (
                            <div key={group.key} className="mt-4">
                              <div className="flex items-center gap-2">
                                <RobotAvatar robot={group.direction.robot} className="h-6 w-6 shrink-0" />
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slateink">
                                  {loc(language, TRACK_WORD)} {loc(language, group.direction.name)}
                                  {' · '}
                                  {subjectLabel(group.subject)}
                                  {' · '}
                                  {loc(language, SECTION_LABELS[group.section])}
                                </p>
                              </div>
                              <ul className="mt-2.5 space-y-2">
                                {group.items.map((item, itemIndex) => (
                                  <ThemeRow
                                    key={`${item.kind}-${item.ref ?? 'fixed'}-${itemIndex}`}
                                    item={item}
                                    reviewWeek={week.phase === 'review'}
                                    grade={profileRow?.grade ?? null}
                                  />
                                ))}
                              </ul>
                            </div>
                          ))}
                          {fixedItems.length > 0 && (
                            <ul className="mt-4 space-y-2.5">
                              {fixedItems.map((item, itemIndex) => (
                                <PlanItemRow key={`${item.kind}-${itemIndex}`} item={item} />
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </>
        )}
      </div>
    </main>
  );
};

export default PlanPage;
