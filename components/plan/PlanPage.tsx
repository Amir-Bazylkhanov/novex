import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Loader2,
  Lock,
  RefreshCw,
  Repeat,
  Target,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import { LESSONS, lessonBySlug } from '../../constants/lessonData.ts';

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

/** Localized names for the stable topic slugs stored in diagnostic_results.weak_topics. */
const TOPIC_LABELS: Record<string, Localized> = {
  'linear-equations': { ru: 'Линейные уравнения', kk: 'Сызықтық теңдеулер', en: 'Linear equations' },
  percentages: { ru: 'Проценты', kk: 'Пайыздар', en: 'Percentages' },
  'quadratic-equations': {
    ru: 'Квадратные уравнения',
    kk: 'Квадрат теңдеулер',
    en: 'Quadratic equations',
  },
  'linear-functions': { ru: 'Линейная функция', kk: 'Сызықтық функция', en: 'Linear functions' },
  'geometric-progression': {
    ru: 'Геометрическая прогрессия',
    kk: 'Геометриялық прогрессия',
    en: 'Geometric progression',
  },
  speed: { ru: 'Скорость', kk: 'Жылдамдық', en: 'Speed' },
  units: { ru: 'Единицы измерения', kk: 'Өлшем бірліктері', en: 'Units of measurement' },
  'newton-second-law': {
    ru: 'Второй закон Ньютона',
    kk: 'Ньютонның екінші заңы',
    en: "Newton's second law",
  },
  'ohm-law': { ru: 'Закон Ома', kk: 'Ом заңы', en: "Ohm's law" },
  'kinetic-energy': { ru: 'Кинетическая энергия', kk: 'Кинетикалық энергия', en: 'Kinetic energy' },
  'present-simple': { ru: 'Present Simple', kk: 'Present Simple', en: 'Present Simple' },
  'past-simple': { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
  'present-perfect': { ru: 'Present Perfect', kk: 'Present Perfect', en: 'Present Perfect' },
  comparatives: { ru: 'Сравнительная степень', kk: 'Салыстырмалы шырай', en: 'Comparatives' },
  'passive-voice': { ru: 'Пассивный залог', kk: 'Ырықсыз етіс', en: 'Passive voice' },
};

const DATE_LOCALE: Record<Lang, string> = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' };

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const CTA_PRIMARY = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60`;

/* --- data --- */

const DAY_MS = 86_400_000;
const DEFAULT_WEEKS = 8;

interface ProfilePlanRow {
  grade: number | null;
  subjects: string[] | null;
  goal: string | null;
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

interface StudyPlanJson {
  version: number;
  /** ISO day (yyyy-mm-dd) the plan was generated for. */
  start: string;
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
 */
const buildPlan = (profileRow: ProfilePlanRow, diagRows: DiagnosticPlanRow[]): StudyPlanJson => {
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

  const exam = parseFutureDate(profileRow.exam_date);
  const totalWeeks = weeksForExam(exam);
  const reviewWeekCount = totalWeeks >= 6 ? 2 : 1;
  const learningWeekCount = totalWeeks - reviewWeekCount;

  const allItems = [...weakItems, ...lessonItems];
  const chunkSize = Math.max(1, Math.ceil(allItems.length / learningWeekCount));
  const learningWeeks: PlanWeekJson[] = [];
  for (let i = 0; i < learningWeekCount; i += 1) {
    const items = allItems.slice(i * chunkSize, (i + 1) * chunkSize);
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
    version: 1,
    start: isoDay(startOfToday()),
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

const PlanItemRow: React.FC<{ item: PlanItemJson }> = ({ item }) => {
  const { language } = useLanguage();

  if (item.kind === 'mock' || item.kind === 'errors') {
    const Icon = item.kind === 'mock' ? ClipboardCheck : Repeat;
    const label = item.kind === 'mock' ? MOCK_ITEM : ERRORS_ITEM;
    return (
      <li className="flex items-center gap-2.5 text-sm font-medium text-ink">
        <Icon className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
        {loc(language, label)}
      </li>
    );
  }

  if (item.kind === 'lesson') {
    const lesson = item.ref ? lessonBySlug(item.ref) : undefined;
    if (!lesson) return null;
    return (
      <li className="flex items-center gap-2.5 text-sm">
        <BookOpen className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
        {lesson.available ? (
          <Link
            to={`/learn/${lesson.slug}`}
            className={`${FOCUS_RING} rounded font-medium text-teal-dark underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal`}
          >
            {loc(language, lesson.title)}
          </Link>
        ) : (
          <span className="flex items-center gap-1.5 font-medium text-slateink">
            {loc(language, lesson.title)}
            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </span>
        )}
      </li>
    );
  }

  const topic = item.ref ?? '';
  const known = TOPIC_LABELS[topic];
  const label: Localized = known ?? { ru: topic, kk: topic, en: topic };
  const lesson = LESSONS.find((l) => l.topic === topic && l.available);
  return (
    <li className="flex items-center gap-2.5 text-sm">
      <span className="h-2 w-2 shrink-0 rounded-full border-2 border-teal" aria-hidden="true" />
      {lesson ? (
        <Link
          to={`/learn/${lesson.slug}`}
          className={`${FOCUS_RING} rounded font-medium text-teal-dark underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal`}
        >
          {loc(language, label)}
        </Link>
      ) : (
        <span className="font-medium text-ink">{loc(language, label)}</span>
      )}
    </li>
  );
};

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

  const persistPlan = useCallback(
    async (planJson: StudyPlanJson, profileRow: ProfilePlanRow): Promise<boolean> => {
      if (!user) return false;
      try {
        const { error } = await supabase.from('study_plans').upsert(
          {
            user_id: user.id,
            goal: profileRow.goal,
            exam_date: profileRow.exam_date,
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
  // saved yet, build the plan locally and persist it.
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      try {
        const [profileRes, diagRes, planRes] = await Promise.all([
          supabase
            .from('profiles')
            .select('grade, subjects, goal, exam_date')
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
          return;
        }
        if (diagRows.length === 0) return; // empty state — nothing to build from
        const built = buildPlan(profileRow, diagRows);
        setPlan(built);
        void persistPlan(built, profileRow).then((ok) => {
          if (!cancelled && ok) setUpdatedAt(new Date().toISOString());
        });
      } catch {
        if (!cancelled) setLoadError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user, persistPlan]);

  const rebuild = async () => {
    if (!user || busy) return;
    setBusy(true);
    setSaveNote(null);
    try {
      const [profileRes, diagRes] = await Promise.all([
        supabase
          .from('profiles')
          .select('grade, subjects, goal, exam_date')
          .eq('id', user.id)
          .maybeSingle(),
        supabase
          .from('diagnostic_results')
          .select('subject, weak_topics, created_at')
          .order('created_at', { ascending: false }),
      ]);
      if (profileRes.error || diagRes.error || !profileRes.data) {
        setSaveNote('error');
        return;
      }
      const profileRow = profileRes.data as ProfilePlanRow;
      const diagRows = (diagRes.data ?? []) as DiagnosticPlanRow[];
      setSource({ profileRow, diagRows });
      if (diagRows.length === 0) {
        setPlan(null);
        setUpdatedAt(null);
        return;
      }
      const built = buildPlan(profileRow, diagRows);
      setPlan(built);
      const ok = await persistPlan(built, profileRow);
      setUpdatedAt(new Date().toISOString());
      setSaveNote(ok ? 'saved' : 'error');
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
  const goalLabel =
    profileRow?.goal && GOAL_LABELS[profileRow.goal]
      ? loc(language, GOAL_LABELS[profileRow.goal])
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

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
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
                onClick={() => void rebuild()}
                disabled={busy}
                className={CTA_PRIMARY}
              >
                {busy ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                )}
                {loc(language, busy ? REBUILDING : REBUILD)}
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
                const weekSubjects = Array.from(
                  new Set(
                    week.items
                      .map((item) => item.subject)
                      .filter((s): s is string => s !== null),
                  ),
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

                      {weekSubjects.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {weekSubjects.map((slug) => (
                            <span
                              key={slug}
                              className="rounded-full bg-mist/30 px-2.5 py-0.5 text-[11px] font-semibold text-teal-dark"
                            >
                              {subjectLabel(slug)}
                            </span>
                          ))}
                        </div>
                      )}

                      {week.items.length === 0 ? (
                        <p className="mt-4 text-sm text-slateink">{loc(language, WEEK_FALLBACK)}</p>
                      ) : (
                        <ul className="mt-4 space-y-2.5">
                          {week.items.map((item, itemIndex) => (
                            <PlanItemRow
                              key={`${item.kind}-${item.ref ?? 'fixed'}-${itemIndex}`}
                              item={item}
                            />
                          ))}
                        </ul>
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
