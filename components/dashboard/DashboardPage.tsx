import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Calendar,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { topicName } from '../../constants/diagnosticData.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth, type Goal } from '../../context/AuthContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import AnalyticsSection, { type NovaTransactionRow } from './AnalyticsSection.tsx';
import AchievementsTab from './AchievementsTab.tsx';

/* --- content --- */

const LOADING: Localized = { ru: 'Загружаем…', kk: 'Жүктелуде…', en: 'Loading…' };
const GREETING: Localized = { ru: 'Привет, {name}!', kk: 'Сәлем, {name}!', en: 'Hi, {name}!' };
const GREETING_FALLBACK: Localized = { ru: 'Привет!', kk: 'Сәлем!', en: 'Hi!' };
const GREETING_SUB: Localized = {
  ru: 'Вот как продвигается твоё обучение',
  kk: 'Оқуыңның барысы осы жерде',
  en: 'Here is how your learning is going',
};
const ERR_LOAD: Localized = {
  ru: 'Не удалось загрузить данные. Попробуй обновить страницу.',
  kk: 'Деректерді жүктеу мүмкін болмады. Бетті жаңартып көр.',
  en: 'We could not load your data. Try refreshing the page.',
};

const PROGRESS_TITLE: Localized = {
  ru: 'Твой прогресс',
  kk: 'Сенің прогресің',
  en: 'Your progress',
};
const PROGRESS_EMPTY_TITLE: Localized = {
  ru: 'Прогресса пока нет',
  kk: 'Әзірге прогресс жоқ',
  en: 'No progress yet',
};
const PROGRESS_EMPTY_TEXT: Localized = {
  ru: 'Заверши первый урок — и здесь появятся твои результаты и опыт.',
  kk: 'Алғашқы сабағыңды аяқта — бұл жерде нәтижелерің мен тәжірибең көрінеді.',
  en: 'Finish your first lesson and your results and XP will appear here.',
};
const CTA_START: Localized = { ru: 'Начать учиться', kk: 'Оқуды бастау', en: 'Start learning' };
const XP_LABEL: Localized = { ru: 'Всего XP', kk: 'Жалпы XP', en: 'Total XP' };
const DONE_LABEL: Localized = {
  ru: 'Уроков завершено',
  kk: 'Аяқталған сабақтар',
  en: 'Lessons completed',
};
const PROGRESS_LINE: Localized = {
  ru: '{done} из {total} уроков',
  kk: '{done} / {total} сабақ аяқталды',
  en: '{done} of {total} lessons',
};

const WEAK_TITLE: Localized = { ru: 'Слабые места', kk: 'Әлсіз тұстарың', en: 'Weak spots' };
const DIAG_NONE_TEXT: Localized = {
  ru: 'Ты ещё не проходил диагностику. NOV-01 определит твой уровень и найдёт темы, которые нужно подтянуть.',
  kk: 'Сен әлі диагностикадан өткен жоқсың. NOV-01 деңгейіңді анықтап, әлсіз тақырыптарыңды табады.',
  en: 'You have not taken the diagnostic yet. NOV-01 will assess your level and find the topics to work on.',
};
const CTA_DIAG: Localized = {
  ru: 'Пройти диагностику',
  kk: 'Диагностикадан өту',
  en: 'Take the diagnostic',
};
const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Диагност',
  kk: 'NOV-01 · Диагност',
  en: 'NOV-01 · Diagnostician',
};
const ROBOT_ADVICE: Localized = {
  ru: 'Начни с темы «{topic}» — закрой этот пробел первым.',
  kk: '«{topic}» тақырыбынан баста — осы олқылықты бірінші толтыр.',
  en: 'Start with "{topic}" — close this gap first.',
};
const WEAK_NONE: Localized = {
  ru: 'Пробелов не найдено — отличная работа!',
  kk: 'Олқылық табылмады — тамаша!',
  en: 'No gaps found — great work!',
};

const STRONG_TITLE: Localized = {
  ru: 'Сильные стороны',
  kk: 'Күшті тұстарың',
  en: 'Strengths',
};
const STRONG_NONE_TEXT: Localized = {
  ru: 'Темы, в которых ты сильнее всего, появятся здесь после диагностики.',
  kk: 'Ең мықты тақырыптарың диагностикадан кейін осында көрінеді.',
  en: 'Your strongest topics will appear here after the diagnostic.',
};

const GOAL_TITLE: Localized = { ru: 'Ближайшая цель', kk: 'Жақын мақсатың', en: 'Next goal' };
const UNT_DATE_LINE: Localized = {
  ru: 'Экзамен ЕНТ — 1 июня 2027',
  kk: 'ҰБТ емтиханы — 1 маусым 2027',
  en: 'UNT exam — June 1, 2027',
};
const UNT_CAPTION: Localized = {
  ru: 'до экзамена ЕНТ',
  kk: 'ҰБТ емтиханына дейін',
  en: 'until the UNT exam',
};
const YOUR_GOAL: Localized = { ru: 'Твоя цель', kk: 'Мақсатың', en: 'Your goal' };
const NO_GOAL: Localized = {
  ru: 'Цель ещё не выбрана — её можно указать в профиле.',
  kk: 'Мақсат әлі таңдалған жоқ — оны профильде көрсете аласың.',
  en: 'No goal selected yet — you can set one in your profile.',
};
const GOAL_LABELS: Record<Goal, Localized> = {
  ent: { ru: 'ЕНТ', kk: 'ҰБТ', en: 'UNT' },
  olympiad: { ru: 'Олимпиада', kk: 'Олимпиада', en: 'Olympiad' },
  revision: { ru: 'Повторение темы', kk: 'Тақырыпты қайталау', en: 'Topic revision' },
  admission: { ru: 'Поступление', kk: 'Оқуға түсу', en: 'Admission' },
};
const GOAL_COUNTDOWN: Localized = {
  ru: 'осталось {n} {word}',
  kk: '{n} {word} қалды',
  en: '{n} {word} left',
};
const GOAL_TODAY: Localized = { ru: 'сегодня!', kk: 'бүгін!', en: 'today!' };
const GOAL_OVERDUE: Localized = {
  ru: 'дата уже прошла — обнови её в профиле',
  kk: 'күн өтіп кетті — профильде жаңартып қой',
  en: 'the date has passed — update it in your profile',
};
const GOAL_NO_DATE_HINT: Localized = {
  ru: 'Укажи дату экзамена в профиле, чтобы видеть обратный отсчёт',
  kk: 'Кері санақты көру үшін емтихан күнін профильде көрсет',
  en: 'Set the exam date in your profile to see a countdown',
};
const GOAL_PLAN_LINK: Localized = {
  ru: 'План подготовки от NOV-03',
  kk: 'NOV-03 дайындық жоспары',
  en: 'Prep plan from NOV-03',
};

const REMINDERS_TITLE: Localized = {
  ru: 'Напоминания',
  kk: 'Еске салғыштар',
  en: 'Reminders',
};
const REMINDER_DEADLINE: Localized = {
  ru: 'До цели {n} {word} — держи темп!',
  kk: 'Мақсатқа {n} {word} қалды — қарқынды жоғалтпа!',
  en: '{n} {word} to your goal — keep up the pace!',
};
const REMINDER_REVIEW: Localized = {
  ru: 'Пора повторить: {topic}',
  kk: 'Қайталайтын уақыт келді: {topic}',
  en: 'Time to review: {topic}',
};

const ACHIEVEMENTS_TITLE: Localized = {
  ru: 'Достижения',
  kk: 'Жетістіктер',
  en: 'Achievements',
};
const TAB_OVERVIEW: Localized = { ru: 'Обзор', kk: 'Шолу', en: 'Overview' };
const TAB_GROUP_LABEL: Localized = {
  ru: 'Разделы дашборда',
  kk: 'Дашборд бөлімдері',
  en: 'Dashboard sections',
};

const CONTINUE_TITLE: Localized = {
  ru: 'Продолжить обучение',
  kk: 'Оқуды жалғастыр',
  en: 'Continue learning',
};
const CONTINUE_TEXT: Localized = {
  ru: 'NOV-02 Наставник подберёт задания под твой уровень и объяснит каждую ошибку.',
  kk: 'NOV-02 Тәлімгер деңгейіңе сай тапсырмалар таңдап, әр қатені түсіндіреді.',
  en: 'NOV-02 Tutor will pick tasks for your level and explain every mistake.',
};
const CTA_LESSONS: Localized = {
  ru: 'Перейти к урокам',
  kk: 'Сабақтарға өту',
  en: 'Go to lessons',
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

/* The ЕНТ target is fixed for the MVP demo — clearly labelled as the exam date. */
const ENT_TARGET = new Date('2027-06-01T00:00:00');

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const CTA_PRIMARY = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`;

const HEADING_ICON = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg';

/* --- data --- */

interface LessonProgressRow {
  lesson_slug: string;
  subject: string;
  status: string;
  xp: number | null;
  completed_at: string | null;
}

interface DiagnosticRow {
  subject: string;
  weak_topics: string[] | null;
  strong_topics: string[] | null;
  created_at: string;
}

interface DashboardData {
  lessons: LessonProgressRow[];
  diagnostic: DiagnosticRow | null;
  transactions: NovaTransactionRow[];
  hasPlan: boolean;
  hasTeacherModules: boolean;
  profileCreatedAt: string | null;
}

interface SubjectStat {
  subject: string;
  done: number;
  total: number;
  pct: number;
}

const cleanTopics = (topics: string[] | null): string[] =>
  (topics ?? []).filter((t) => typeof t === 'string' && t.trim().length > 0);

const buildSubjectStats = (lessons: LessonProgressRow[]): SubjectStat[] => {
  const bySubject = new Map<string, Map<string, boolean>>();
  for (const row of lessons) {
    let slugs = bySubject.get(row.subject);
    if (!slugs) {
      slugs = new Map<string, boolean>();
      bySubject.set(row.subject, slugs);
    }
    slugs.set(row.lesson_slug, slugs.get(row.lesson_slug) === true || row.status === 'completed');
  }
  return Array.from(bySubject.entries()).map(([subject, slugs]) => {
    const total = slugs.size;
    const done = Array.from(slugs.values()).filter((v) => v).length;
    return { subject, done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
  });
};

const daysUntilEnt = (): number =>
  Math.max(0, Math.ceil((ENT_TARGET.getTime() - Date.now()) / 86_400_000));

/* Whole days from today to an ISO date (YYYY-MM-DD); negative means overdue. */
const daysUntilDate = (iso: string): number | null => {
  const target = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
};

const daysWord = (lang: Lang, days: number): string => {
  if (lang === 'kk') return 'күн';
  if (lang === 'en') return days === 1 ? 'day' : 'days';
  const mod10 = days % 10;
  const mod100 = days % 100;
  if (mod10 === 1 && mod100 !== 11) return 'день';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'дня';
  return 'дней';
};

const fill = (template: string, vars: Record<string, string | number>): string =>
  Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template,
  );

const DashboardPage: React.FC = () => {
  const { user, profile, loading } = useAuth();
  const { language } = useLanguage();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements'>('overview');

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      try {
        const [lessonsRes, diagRes, txRes, planRes, modulesRes, profileRes] = await Promise.all([
          supabase
            .from('lesson_progress')
            .select('lesson_slug, subject, status, xp, completed_at'),
          supabase
            .from('diagnostic_results')
            .select('subject, weak_topics, strong_topics, created_at')
            .order('created_at', { ascending: false })
            .limit(1),
          supabase
            .from('nova_transactions')
            .select('amount, action_type, description, created_at')
            .order('created_at', { ascending: false })
            .limit(15),
          supabase.from('study_plans').select('user_id').eq('user_id', user.id).maybeSingle(),
          supabase.from('teacher_modules').select('id').limit(1),
          supabase.from('profiles').select('created_at').eq('id', user.id).maybeSingle(),
        ]);
        if (cancelled) return;
        if (lessonsRes.error || diagRes.error) {
          setLoadError(true);
          return;
        }
        const lessons = (lessonsRes.data ?? []) as LessonProgressRow[];
        const diagRows = (diagRes.data ?? []) as DiagnosticRow[];
        // Secondary reads degrade to empty defaults — a missing table or RLS
        // denial must not break the whole dashboard.
        const transactions = txRes.error
          ? []
          : ((txRes.data ?? []) as NovaTransactionRow[]);
        const profileRow = profileRes.error
          ? null
          : ((profileRes.data ?? null) as { created_at: string } | null);
        setData({
          lessons,
          diagnostic: diagRows[0] ?? null,
          transactions,
          hasPlan: !planRes.error && planRes.data !== null,
          hasTeacherModules: !modulesRes.error && (modulesRes.data ?? []).length > 0,
          profileCreatedAt: profileRow?.created_at ?? null,
        });
      } catch {
        if (!cancelled) setLoadError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading || !user || !profile) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <span
          className="h-10 w-10 animate-spin rounded-full border-[3px] border-line border-t-teal"
          aria-hidden="true"
        />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const subjectLabel = (slug: string): string => {
    const known = SUBJECT_LABELS[slug];
    return known ? loc(language, known) : slug;
  };

  const lessons = data?.lessons ?? [];
  const stats = buildSubjectStats(lessons);
  const totalXp = lessons.reduce((sum, row) => sum + (row.xp ?? 0), 0);
  const doneTotal = stats.reduce((sum, s) => sum + s.done, 0);

  const diagnostic = data?.diagnostic ?? null;
  const weakTopics = diagnostic ? cleanTopics(diagnostic.weak_topics) : [];
  const strongTopics = diagnostic ? cleanTopics(diagnostic.strong_topics) : [];
  const firstWeak = weakTopics.length > 0 ? weakTopics[0] : null;

  const diagCreated = diagnostic ? new Date(diagnostic.created_at) : null;
  const diagDate =
    diagCreated && !Number.isNaN(diagCreated.getTime())
      ? diagCreated.toLocaleDateString(DATE_LOCALE[language], {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '';
  const diagMeta = diagnostic
    ? [loc(language, ROBOT_LABEL), subjectLabel(diagnostic.subject), diagDate]
        .filter((part) => part.length > 0)
        .join(' · ')
    : '';

  const days = daysUntilEnt();
  const examDays = profile.examDate ? daysUntilDate(profile.examDate) : null;
  // All selected goals, falling back to the legacy single-goal column.
  const displayGoals: Goal[] =
    profile.goals.length > 0 ? profile.goals : profile.goal ? [profile.goal] : [];

  const reminders: Array<{ key: string; text: string; to: string | null }> = [];
  if (examDays !== null && examDays >= 0 && examDays <= 30) {
    reminders.push({
      key: 'deadline',
      text: fill(loc(language, REMINDER_DEADLINE), {
        n: examDays,
        word: daysWord(language, examDays),
      }),
      to: null,
    });
  }
  if (firstWeak) {
    reminders.push({
      key: 'review',
      text: fill(loc(language, REMINDER_REVIEW), { topic: topicName(language, firstWeak) }),
      to: '/learn',
    });
  }
  const visibleReminders = reminders.slice(0, 2);

  const transactions = data?.transactions ?? [];
  const novasEarned = transactions.reduce((sum, tx) => sum + (tx.amount > 0 ? tx.amount : 0), 0);
  const novasSpent = transactions.reduce((sum, tx) => sum + (tx.amount < 0 ? -tx.amount : 0), 0);
  const distinctLessonDays = new Set(
    lessons
      .filter((row) => row.status === 'completed' && row.completed_at)
      .map((row) => (row.completed_at ?? '').slice(0, 10)),
  ).size;

  const profileCreatedAt = data?.profileCreatedAt ?? null;
  const profileCreatedMs = profileCreatedAt ? new Date(profileCreatedAt).getTime() : NaN;
  const daysWithUs = Number.isNaN(profileCreatedMs)
    ? null
    : Math.max(1, Math.ceil((Date.now() - profileCreatedMs) / 86_400_000));

  const displayName = profile.full_name?.trim() || user.email;
  const greeting = displayName
    ? fill(loc(language, GREETING), { name: displayName })
    : loc(language, GREETING_FALLBACK);

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <header aria-labelledby="dash-heading">
          <h1
            id="dash-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl"
          >
            {greeting}
          </h1>
          <p className="mt-2 text-sm text-slateink md:text-base">
            {loc(language, GREETING_SUB)}
          </p>
        </header>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="group"
          aria-label={loc(language, TAB_GROUP_LABEL)}
        >
          {(
            [
              { key: 'overview', label: TAB_OVERVIEW },
              { key: 'achievements', label: ACHIEVEMENTS_TITLE },
            ] as const
          ).map(({ key, label }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                aria-selected={active}
                onClick={() => setActiveTab(key)}
                className={`${FOCUS_RING} rounded-full border px-5 py-2 text-sm transition-colors ${
                  active
                    ? 'border-teal bg-mist/40 font-semibold text-teal-dark'
                    : 'border-line bg-white font-medium text-slateink hover:border-teal/60 hover:text-teal-dark'
                }`}
              >
                {loc(language, label)}
              </button>
            );
          })}
        </div>

        {activeTab === 'overview' ? (
          <>
        {visibleReminders.length > 0 && (
          <section
            aria-labelledby="dash-reminders-heading"
            className="mt-6 rounded-2xl border border-line/50 bg-white p-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:px-6"
          >
            <div className="flex items-center gap-3">
              <span className={`${HEADING_ICON} bg-mist/40`}>
                <Bell className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              </span>
              <h2
                id="dash-reminders-heading"
                className="font-display text-lg font-bold tracking-tight text-ink"
              >
                {loc(language, REMINDERS_TITLE)}
              </h2>
            </div>
            <ul className="mt-3 space-y-2">
              {visibleReminders.map((reminder) => (
                <li key={reminder.key}>
                  {reminder.to ? (
                    <Link
                      to={reminder.to}
                      className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-teal-dark underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal`}
                    >
                      {reminder.text}
                    </Link>
                  ) : (
                    <p className="text-sm text-ink">{reminder.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {loadError ? (
            <div role="alert" className={`${CARD} flex items-start gap-3 border-coral/40 lg:col-span-2`}>
              <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD)}</p>
            </div>
          ) : !data ? (
            <div role="status" className={`${CARD} flex items-center justify-center py-16 lg:col-span-2`}>
              <span
                className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
                aria-hidden="true"
              />
              <span className="sr-only">{loc(language, LOADING)}</span>
            </div>
          ) : (
            <>
              {/* Твой прогресс */}
              <section aria-labelledby="dash-progress-heading" className={`${CARD} lg:col-span-2`}>
                <div className="flex items-center gap-3">
                  <span className={`${HEADING_ICON} bg-mist/40`}>
                    <TrendingUp className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h2
                    id="dash-progress-heading"
                    className="font-display text-xl font-bold tracking-tight text-ink"
                  >
                    {loc(language, PROGRESS_TITLE)}
                  </h2>
                </div>

                {lessons.length === 0 ? (
                  <div className="mt-5 rounded-xl border border-line/50 bg-canvas p-5">
                    <p className="font-display text-base font-bold text-ink">
                      {loc(language, PROGRESS_EMPTY_TITLE)}
                    </p>
                    <p className="mt-1 text-sm text-slateink">
                      {loc(language, PROGRESS_EMPTY_TEXT)}
                    </p>
                    <a href="/learn" className={`${CTA_PRIMARY} mt-4`}>
                      {loc(language, CTA_START)}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <>
                    <dl className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-line/50 bg-canvas px-4 py-3">
                        <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slateink">
                          <Award className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                          {loc(language, XP_LABEL)}
                        </dt>
                        <dd className="mt-1 font-display text-2xl font-extrabold text-ink">
                          {totalXp}
                        </dd>
                      </div>
                      <div className="rounded-xl border border-line/50 bg-canvas px-4 py-3">
                        <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slateink">
                          <BookOpen className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                          {loc(language, DONE_LABEL)}
                        </dt>
                        <dd className="mt-1 font-display text-2xl font-extrabold text-ink">
                          {doneTotal}
                        </dd>
                      </div>
                    </dl>

                    <ul className="mt-6 space-y-5">
                      {stats.map((s) => (
                        <li key={s.subject}>
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-sm font-semibold text-ink">
                              {subjectLabel(s.subject)}
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-widest text-slateink">
                              {s.pct}%
                            </span>
                          </div>
                          <div
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={s.pct}
                            aria-label={subjectLabel(s.subject)}
                            className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-mist/40"
                          >
                            <div
                              className="h-full rounded-full bg-teal"
                              style={{ width: `${s.pct}%` }}
                            />
                          </div>
                          <p className="mt-1.5 text-xs text-slateink">
                            {fill(loc(language, PROGRESS_LINE), { done: s.done, total: s.total })}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>

              {/* Слабые места */}
              <section aria-labelledby="dash-weak-heading" className={CARD}>
                <div className="flex items-center gap-3">
                  <span className={`${HEADING_ICON} bg-coral/15`}>
                    <AlertTriangle className="h-5 w-5 text-coral" aria-hidden="true" />
                  </span>
                  <h2
                    id="dash-weak-heading"
                    className="font-display text-xl font-bold tracking-tight text-ink"
                  >
                    {loc(language, WEAK_TITLE)}
                  </h2>
                </div>

                {!diagnostic ? (
                  <div className="mt-5">
                    <p className="text-sm text-slateink">{loc(language, DIAG_NONE_TEXT)}</p>
                    <a href="/onboarding" className={`${CTA_PRIMARY} mt-4`}>
                      {loc(language, CTA_DIAG)}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                ) : weakTopics.length === 0 ? (
                  <div className="mt-5 flex items-start gap-4 rounded-xl border border-line/50 bg-canvas p-4">
                    <RobotAvatar robot="nov1" className="h-12 w-12 shrink-0" />
                    <div>
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                        {diagMeta}
                      </p>
                      <p className="mt-1 text-sm text-ink">{loc(language, WEAK_NONE)}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {weakTopics.map((topic) => (
                        <li
                          key={topic}
                          className="inline-flex items-center rounded-full border border-coral/40 bg-coral/10 px-3.5 py-1.5 text-sm font-semibold text-ink"
                        >
                          {topicName(language, topic)}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-start gap-4 rounded-xl border border-line/50 bg-canvas p-4">
                      <RobotAvatar robot="nov1" className="h-12 w-12 shrink-0" />
                      <div>
                        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                          {diagMeta}
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {firstWeak
                            ? fill(loc(language, ROBOT_ADVICE), { topic: topicName(language, firstWeak) })
                            : loc(language, WEAK_NONE)}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </section>

              {/* Сильные стороны */}
              <section aria-labelledby="dash-strong-heading" className={CARD}>
                <div className="flex items-center gap-3">
                  <span className={`${HEADING_ICON} bg-teal/10`}>
                    <Sparkles className="h-5 w-5 text-teal" aria-hidden="true" />
                  </span>
                  <h2
                    id="dash-strong-heading"
                    className="font-display text-xl font-bold tracking-tight text-ink"
                  >
                    {loc(language, STRONG_TITLE)}
                  </h2>
                </div>

                {!diagnostic ? (
                  <div className="mt-5">
                    <p className="text-sm text-slateink">{loc(language, DIAG_NONE_TEXT)}</p>
                    <a href="/onboarding" className={`${CTA_PRIMARY} mt-4`}>
                      {loc(language, CTA_DIAG)}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                ) : strongTopics.length === 0 ? (
                  <p className="mt-5 text-sm text-slateink">{loc(language, STRONG_NONE_TEXT)}</p>
                ) : (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {strongTopics.map((topic) => (
                      <li
                        key={topic}
                        className="inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1.5 text-sm font-semibold text-teal-dark"
                      >
                        {topicName(language, topic)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Ближайшая цель */}
              <section aria-labelledby="dash-goal-heading" className={CARD}>
                <div className="flex items-center gap-3">
                  <span className={`${HEADING_ICON} bg-mist/40`}>
                    <Target className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h2
                    id="dash-goal-heading"
                    className="font-display text-xl font-bold tracking-tight text-ink"
                  >
                    {loc(language, GOAL_TITLE)}
                  </h2>
                </div>

                <div className="mt-5 rounded-xl border border-teal/30 bg-teal/5 p-5">
                  <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {loc(language, UNT_DATE_LINE)}
                  </p>
                  <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-teal-dark sm:text-5xl">
                    {days}{' '}
                    <span className="text-xl font-bold text-ink sm:text-2xl">
                      {daysWord(language, days)}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-slateink">{loc(language, UNT_CAPTION)}</p>
                </div>

                {displayGoals.length > 0 ? (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-slateink">
                      {loc(language, YOUR_GOAL)}:
                    </span>
                    {displayGoals.map((g) => (
                      <span
                        key={g}
                        className="inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1.5 text-sm font-semibold text-teal-dark"
                      >
                        {loc(language, GOAL_LABELS[g])}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-slateink">{loc(language, NO_GOAL)}</p>
                )}

                {examDays !== null && (
                  <p
                    className={`mt-3 text-sm font-semibold ${
                      examDays < 0 ? 'text-coral' : 'text-teal-dark'
                    }`}
                  >
                    {examDays === 0
                      ? loc(language, GOAL_TODAY)
                      : examDays < 0
                        ? loc(language, GOAL_OVERDUE)
                        : fill(loc(language, GOAL_COUNTDOWN), {
                            n: examDays,
                            word: daysWord(language, examDays),
                          })}
                  </p>
                )}
                {!profile.examDate && profile.goal && (
                  <Link
                    to="/profile"
                    className={`${FOCUS_RING} mt-3 inline-block rounded-md text-sm font-medium text-slateink underline decoration-line underline-offset-4 transition-colors hover:text-teal`}
                  >
                    {loc(language, GOAL_NO_DATE_HINT)}
                  </Link>
                )}

                <Link
                  to="/plan"
                  className={`${FOCUS_RING} mt-4 inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                >
                  {loc(language, GOAL_PLAN_LINK)}
                  <ArrowRight className="h-4 w-4 text-teal" aria-hidden="true" />
                </Link>
              </section>

              {/* Продолжить обучение */}
              <section aria-labelledby="dash-continue-heading" className={CARD}>
                <div className="flex items-center gap-3">
                  <span className={`${HEADING_ICON} bg-mist/40`}>
                    <BookOpen className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h2
                    id="dash-continue-heading"
                    className="font-display text-xl font-bold tracking-tight text-ink"
                  >
                    {loc(language, CONTINUE_TITLE)}
                  </h2>
                </div>
                <p className="mt-4 text-sm text-slateink">{loc(language, CONTINUE_TEXT)}</p>
                <a href="/learn" className={`${CTA_PRIMARY} mt-5`}>
                  {loc(language, CTA_LESSONS)}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </section>
            </>
          )}
        </div>

        {!loadError && data && (
          <AnalyticsSection
            totalXp={totalXp}
            lessonsDone={doneTotal}
            daysWithUs={daysWithUs}
            transactions={transactions}
          />
        )}
          </>
        ) : loadError ? (
          <div role="alert" className={`${CARD} mt-8 flex items-start gap-3 border-coral/40`}>
            <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
            <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD)}</p>
          </div>
        ) : !data ? (
          <div role="status" className={`${CARD} mt-8 flex items-center justify-center py-16`}>
            <span
              className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
              aria-hidden="true"
            />
            <span className="sr-only">{loc(language, LOADING)}</span>
          </div>
        ) : (
          <AchievementsTab
            data={{
              lessonsDone: doneTotal,
              totalXp,
              hasDiagnostic: diagnostic !== null,
              hasGoal: profile.goal !== null,
              hasPlan: data.hasPlan,
              hasTeacherModules: data.hasTeacherModules,
              novasEarned,
              novasSpent,
              distinctLessonDays,
              profileCreatedAt,
            }}
          />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
