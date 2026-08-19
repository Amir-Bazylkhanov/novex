import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
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
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import { LESSONS, lessonBySlug } from '../../constants/lessonData.ts';
import { directionForSubject, type LearnDirection } from '../../constants/learnDirections.ts';
import { topicName } from '../../constants/diagnosticData.ts';

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-03 · Куратор',
  kk: 'NOV-03 · Куратор',
  en: 'NOV-03 · Curator',
};
const TITLE: Localized = {
  ru: 'Твой план подготовки',
  kk: 'Сенің дайындық жоспарың',
  en: 'Your study plan',
};
const SUB: Localized = {
  ru: 'NOV-03 Куратор собрал маршрут по неделям: сначала закрываем слабые темы, потом новые уроки, в конце — повторение и пробный тест.',
  kk: 'NOV-03 Куратор апталық бағыт құрды: алдымен әлсіз тақырыптар жабылады, содан кейін жаңа сабақтар, соңында қайталау мен байқама тестісі.',
  en: 'NOV-03 the Curator mapped your route week by week: weak topics first, then new lessons, then review and a mock test at the end.',
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
  ru: 'NOV-03 строит план по результатам диагностики NOV-01. Пройди её — и маршрут к цели появится здесь.',
  kk: 'NOV-03 жоспарды NOV-01 диагностикасының нәтижесі бойынша құрады. Диагностикадан өт — мақсатқа бағыт осында пайда болады.',
  en: 'NOV-03 builds the plan from your NOV-01 diagnostic results. Take it and your roadmap will appear here.',
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
  ru: 'NOV-02 · Наставник',
  kk: 'NOV-02 · Тәлімгер',
  en: 'NOV-02 · Tutor',
};
const ROBOT_NOV3_LABEL: Localized = {
  ru: 'NOV-03 · Куратор',
  kk: 'NOV-03 · Куратор',
  en: 'NOV-03 · Curator',
};

/* --- wizard content --- */

const WIZARD_TITLE: Localized = {
  ru: 'Собери свой план',
  kk: 'Жоспарыңды құрастыр',
  en: 'Build your plan',
};
const WIZARD_SUB: Localized = {
  ru: 'Три шага — и NOV-03 разложит подготовку по неделям.',
  kk: 'Үш қадам — NOV-03 дайындықты апталарға бөліп шығады.',
  en: 'Three steps and NOV-03 will lay your prep out week by week.',
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
  ru: 'Можно выбрать несколько.',
  kk: 'Бірнешеуін таңдауға болады.',
  en: 'You can pick several.',
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

interface PlanItemJson {
  kind: 'topic' | 'lesson' | 'mock' | 'errors';
  /** Topic slug or lesson slug; null for mock/errors items. */
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

/**
 * Deterministic roadmap: weak topics first (subject by subject), then the
 * remaining lessons of the user's subjects, then 1–2 review/mock weeks.
 * The wizard config sets the deadline and the weekly load (themes per week).
 */
const buildPlan = (
  profileRow: ProfilePlanRow,
  diagRows: DiagnosticPlanRow[],
  config: PlanConfigJson,
): StudyPlanJson => {
  // diagRows arrive sorted by created_at desc — keep only the latest per subject
  const weakBySubject = new Map<string, string[]>();
  for (const row of diagRows) {
    if (!weakBySubject.has(row.subject)) {
      weakBySubject.set(row.subject, cleanSlugs(row.weak_topics));
    }
  }

  const subjects = cleanSlugs(profileRow.subjects);

  const weakItems: PlanItemJson[] = [];
  const lessonItems: PlanItemJson[] = [];
  const seenTopics = new Set<string>();
  for (const subject of subjects) {
    for (const topic of weakBySubject.get(subject) ?? []) {
      if (seenTopics.has(topic)) continue;
      seenTopics.add(topic);
      weakItems.push({ kind: 'topic', ref: topic, subject });
    }
    for (const lesson of LESSONS) {
      if (lesson.subject !== subject || seenTopics.has(lesson.topic)) continue;
      seenTopics.add(lesson.topic);
      lessonItems.push({ kind: 'lesson', ref: lesson.slug, subject });
    }
  }

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
    (item.kind === 'topic' || item.kind === 'lesson' || item.kind === 'mock' || item.kind === 'errors') &&
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

/** Loose-parse the wizard config stored in a saved plan; null when absent/legacy. */
const parseConfig = (value: unknown): PlanConfigJson | null => {
  if (typeof value !== 'object' || value === null) return null;
  const c = value as Record<string, unknown>;
  if (!(c.deadline === null || typeof c.deadline === 'string')) return null;
  if (!Array.isArray(c.goals) || !c.goals.every((g) => typeof g === 'string')) return null;
  if (!isHoursChoice(c.hours)) return null;
  return { deadline: c.deadline, goals: c.goals, hours: c.hours };
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
const ThemeRow: React.FC<{ item: PlanItemJson; reviewWeek: boolean }> = ({ item, reviewWeek }) => {
  const { language } = useLanguage();

  let title: string;
  let lessonSlug: string | null = null;
  let lessonAvailable = false;
  if (item.kind === 'lesson') {
    const lesson = item.ref ? lessonBySlug(item.ref) : undefined;
    if (!lesson) return null;
    title = loc(language, lesson.title);
    lessonSlug = lesson.slug;
    lessonAvailable = lesson.available;
  } else {
    const topic = item.ref ?? '';
    title = topicName(language, topic);
    const lesson = LESSONS.find((l) => l.topic === topic && l.available);
    lessonSlug = lesson?.slug ?? null;
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
          {lessonSlug && lessonAvailable ? (
            <Link to={`/learn/${lessonSlug}`} className={CHIP_LINK}>
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
      group = { key, direction: directionForSubject(subject), subject, section, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
};

/* --- wizard --- */

interface PlanWizardProps {
  initialDeadline: string;
  initialGoals: string[];
  initialHours: HoursChoice;
  busy: boolean;
  canCancel: boolean;
  onCancel: () => void;
  onGenerate: (config: PlanConfigJson) => void;
}

const PlanWizard: React.FC<PlanWizardProps> = ({
  initialDeadline,
  initialGoals,
  initialHours,
  busy,
  canCancel,
  onCancel,
  onGenerate,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [deadline, setDeadline] = useState(initialDeadline);
  const [goals, setGoals] = useState<string[]>(initialGoals);
  const [hours, setHours] = useState<HoursChoice>(initialHours);

  const toggleGoal = (slug: string) =>
    setGoals((prev) => (prev.includes(slug) ? prev.filter((g) => g !== slug) : [...prev, slug]));

  const stepTitle = step === 1 ? STEP_DEADLINE : step === 2 ? STEP_GOAL : STEP_HOURS;
  const canAdvance = step !== 2 || goals.length > 0;

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
        <div className="mt-3">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {Object.entries(GOAL_LABELS).map(([slug, label]) => {
              const selected = goals.includes(slug);
              return (
                <button
                  key={slug}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleGoal(slug)}
                  className={`${FOCUS_RING} flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                    selected
                      ? 'border-teal bg-teal/5 text-teal-dark'
                      : 'border-line/60 bg-white text-ink hover:border-teal/50'
                  }`}
                >
                  {loc(language, label)}
                  {selected && <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-sm text-slateink">{loc(language, GOAL_HINT)}</p>
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
            onClick={() => onGenerate({ deadline: deadline || null, goals, hours })}
            disabled={busy || goals.length === 0}
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
  const { user, loading: authLoading } = useAuth();
  const reducedMotion = useReducedMotion();

  const [source, setSource] = useState<PlanSource | null>(null);
  const [plan, setPlan] = useState<StudyPlanJson | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saveNote, setSaveNote] = useState<'saved' | 'error' | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);

  const persistPlan = useCallback(
    async (planJson: StudyPlanJson, goal: string | null, examDate: string | null): Promise<boolean> => {
      if (!user) return false;
      try {
        const { error } = await supabase.from('study_plans').upsert(
          {
            user_id: user.id,
            goal,
            exam_date: examDate,
            plan: planJson,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id' },
        );
        return !error;
      } catch {
        return false;
      }
    },
    [user],
  );

  // Load the profile fields, diagnostics and any saved plan. When nothing is
  // saved yet, the wizard collects the config before anything is generated.
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
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
        setSource({ profileRow, diagRows });

        // study_plans may not exist yet — treat any read failure as "no plan"
        const saved = planRes.error ? null : ((planRes.data ?? null) as SavedPlanRow | null);
        if (saved && isStudyPlan(saved.plan)) {
          setPlan(saved.plan);
          setUpdatedAt(saved.updated_at);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user, persistPlan]);

  const generate = async (config: PlanConfigJson) => {
    if (!user || !source || busy) return;
    setBusy(true);
    setSaveNote(null);
    try {
      const built = buildPlan(source.profileRow, source.diagRows, config);
      const goal = config.goals[0] ?? null;
      const ok = await persistPlan(built, goal, config.deadline);
      setSource({
        profileRow: { ...source.profileRow, goal, goals: config.goals, exam_date: config.deadline },
        diagRows: source.diagRows,
      });
      setPlan(built);
      setUpdatedAt(new Date().toISOString());
      setSaveNote(ok ? 'saved' : 'error');
      setWizardOpen(false);
    } catch {
      setSaveNote('error');
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
    return known ? loc(language, known) : slug;
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

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <header aria-labelledby="plan-heading">
          <div className="flex items-start gap-4">
            <RobotAvatar robot="nov3" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, ROBOT_LABEL)}
              </p>
              <h1
                id="plan-heading"
                className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
              >
                {loc(language, TITLE)}
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                {loc(language, SUB)}
              </p>
            </div>
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
              <RobotAvatar robot="nov3" className="h-14 w-14 shrink-0" />
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSaveNote(null);
                  setWizardOpen(true);
                }}
                disabled={busy}
                className={CTA_PRIMARY}
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                {loc(language, REBUILD)}
              </button>
              {saveNote === 'saved' && (
                <span className="flex items-center gap-1.5 text-sm font-medium text-teal-dark">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  {loc(language, SAVED_NOTE)}
                </span>
              )}
              {saveNote === 'error' && (
                <span role="alert" className="flex items-center gap-1.5 text-sm font-medium text-coral">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  {loc(language, SAVE_ERROR)}
                </span>
              )}
              {updatedText && <span className="text-xs text-slateink">{updatedText}</span>}
            </div>

            <ol
              aria-label={loc(language, TIMELINE_LABEL)}
              className="relative mt-8 space-y-6 border-l-2 border-line/60 pl-6"
            >
              {plan.weeks.map((week, index) => {
                const isCurrent = index === activeWeek;
                const robot = week.phase === 'review' ? 'nov3' : 'nov2';
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
