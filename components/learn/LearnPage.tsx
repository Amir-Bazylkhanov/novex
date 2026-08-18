import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Atom,
  Calculator,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Languages,
  ListChecks,
  Loader2,
  Lock,
  School,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth, type Role } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar, type MentorRobotId } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  LESSON_SUBJECTS,
  LESSONS,
  type Lesson,
  type LessonDifficulty,
  type LessonSubject,
} from '../../constants/lessonData.ts';

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-02 · Наставник',
  kk: 'NOV-02 · Тәлімгер',
  en: 'NOV-02 · Tutor',
};
const LOADING: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const TITLE: Localized = {
  ru: 'Модули обучения',
  kk: 'Оқу модульдері',
  en: 'Learning modules',
};
const SUB: Localized = {
  ru: 'Выбери тему и начни урок. NOV-02 объяснит теорию и проверит тебя задачами.',
  kk: 'Тақырыпты таңдап, сабақты баста. NOV-02 теорияны түсіндіріп, тапсырмалармен тексереді.',
  en: 'Pick a topic and start a lesson. NOV-02 explains the theory and checks you with tasks.',
};

const SOON_BADGE: Localized = {
  ru: 'Скоро добавим',
  kk: 'Жақында қосамыз',
  en: 'Coming soon',
};
const SOON_NOTE: Localized = {
  ru: 'Этот модуль ещё в разработке — мы добавим его совсем скоро. Пока попробуй один из доступных уроков.',
  kk: 'Бұл модуль әлі дайындалуда — оны жақын арада қосамыз. Әзірге қолжетімді сабақтардың бірін көр.',
  en: 'This module is still in the works — we will add it soon. Meanwhile, try one of the available lessons.',
};

const RECOMMENDED_BADGE: Localized = {
  ru: 'Рекомендовано NOV-02',
  kk: 'NOV-02 ұсынған',
  en: 'Recommended by NOV-02',
};

const PICKER_TITLE: Localized = {
  ru: 'Выбери наставника по направлению',
  kk: 'Бағытың бойынша тәлімгерді таңда',
  en: 'Choose your mentor by subject',
};
const PICKER_SUB: Localized = {
  ru: 'Каждый робот ведёт своё направление. Нажми на наставника, чтобы увидеть его уроки.',
  kk: 'Әр роботтың өз бағыты бар. Сабақтарын көру үшін тәлімгерді бас.',
  en: 'Each robot leads its own track. Pick a mentor to see their lessons.',
};
const BACK_TO_MENTORS: Localized = {
  ru: 'Ко всем наставникам',
  kk: 'Барлық тәлімгерге оралу',
  en: 'Back to all mentors',
};

interface Mentor {
  id: MentorRobotId;
  codeLabel: Localized;
  name: Localized;
  tagline: Localized;
  subjects: LessonSubject[];
}

const MENTORS: Mentor[] = [
  {
    id: 'nov4',
    codeLabel: { ru: 'NOV-04 · ЛОГИК', kk: 'NOV-04 · ЛОГИК', en: 'NOV-04 · LOGIC' },
    name: { ru: 'Логик', kk: 'Логик', en: 'Logic' },
    tagline: {
      ru: 'Точные науки: от уравнений до законов Ньютона',
      kk: 'Дәл ғылымдар: теңдеулерден Ньютон заңдарына дейін',
      en: "Exact sciences: from equations to Newton's laws",
    },
    subjects: ['math', 'physics'],
  },
  {
    id: 'nov5',
    codeLabel: { ru: 'NOV-05 · ПОЛИГЛОТ', kk: 'NOV-05 · ПОЛИГЛОТ', en: 'NOV-05 · POLYGLOT' },
    name: { ru: 'Полиглот', kk: 'Полиглот', en: 'Polyglot' },
    tagline: {
      ru: 'Языки: понимать и говорить уверенно',
      kk: 'Тілдер: терең түсініп, сенімді сөйлеу',
      en: 'Languages: understand and speak with confidence',
    },
    subjects: ['english'],
  },
  {
    id: 'nov6',
    codeLabel: { ru: 'NOV-06 · КИБЕР', kk: 'NOV-06 · КИБЕР', en: 'NOV-06 · CYBER' },
    name: { ru: 'Кибер', kk: 'Кибер', en: 'Cyber' },
    tagline: {
      ru: 'Алгоритмы и код — мышление будущего',
      kk: 'Алгоритмдер мен код — болашақтың ойлау әдісі',
      en: 'Algorithms and code — the thinking of the future',
    },
    subjects: ['informatics'],
  },
];

const STATUS_IN_PROGRESS: Localized = {
  ru: 'В процессе',
  kk: 'Орындалуда',
  en: 'In progress',
};
const STATUS_NOT_STARTED: Localized = {
  ru: 'Не начат',
  kk: 'Басталмаған',
  en: 'Not started',
};

const CLASS_SECTION_TITLE: Localized = {
  ru: 'Уроки моего класса',
  kk: 'Сыныбымның сабақтары',
  en: 'My class lessons',
};
const CLASS_SECTION_EMPTY: Localized = {
  ru: 'Учитель пока не добавил уроки для твоего класса.',
  kk: 'Мұғалім әзірге сыныбыңа сабақ қосқан жоқ.',
  en: 'Your teacher has not added any lessons for your class yet.',
};
const TEACHER_BADGE: Localized = {
  ru: 'Урок учителя',
  kk: 'Мұғалім сабағы',
  en: 'Teacher lesson',
};
const JOIN_BANNER_TEXT: Localized = {
  ru: 'Присоединись к своему классу, чтобы видеть уроки учителя',
  kk: 'Мұғалімнің сабақтарын көру үшін сыныбыңа қосыл',
  en: 'Join your class to see your teacher’s lessons',
};
const JOIN_BANNER_BTN: Localized = {
  ru: 'Выбрать класс',
  kk: 'Сыныпты таңдау',
  en: 'Choose your class',
};

const DIFFICULTY_LABEL: Record<LessonDifficulty, Localized> = {
  easy: { ru: 'Лёгкий', kk: 'Жеңіл', en: 'Easy' },
  medium: { ru: 'Средний', kk: 'Орташа', en: 'Medium' },
  hard: { ru: 'Сложный', kk: 'Қиын', en: 'Hard' },
};

const completedLine = (lang: 'ru' | 'kk' | 'en', score: number, total: number): string => {
  if (lang === 'kk') return `Аяқталды · ${score}/${total}`;
  if (lang === 'en') return `Completed · ${score}/${total}`;
  return `Пройден · ${score}/${total}`;
};

const minutesLine = (lang: 'ru' | 'kk' | 'en', minutes: number): string => {
  if (lang === 'en') return `${minutes} min`;
  return `${minutes} мин`;
};

const questionsLine = (lang: 'ru' | 'kk' | 'en', total: number): string => {
  if (lang === 'kk') return `Сұрақтар: ${total}`;
  if (lang === 'en') return `Questions: ${total}`;
  return `Вопросов: ${total}`;
};

const mentorLessonsLine = (lang: 'ru' | 'kk' | 'en', total: number, completed: number): string => {
  if (lang === 'kk') return `Сабақтар: ${total} · аяқталғаны: ${completed}`;
  if (lang === 'en') return `Lessons: ${total} · completed: ${completed}`;
  return `Уроки: ${total} · пройдено: ${completed}`;
};

const dateLine = (lang: 'ru' | 'kk' | 'en', iso: string): string =>
  new Intl.DateTimeFormat(lang === 'kk' ? 'kk-KZ' : lang === 'en' ? 'en-GB' : 'ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const SUBJECT_ICONS: Record<LessonSubject, React.ReactNode> = {
  math: <Calculator className="h-4 w-4" aria-hidden="true" />,
  physics: <Atom className="h-4 w-4" aria-hidden="true" />,
  english: <Languages className="h-4 w-4" aria-hidden="true" />,
  informatics: <Cpu className="h-4 w-4" aria-hidden="true" />,
};

interface LessonProgressRow {
  lesson_slug: string;
  status: 'in_progress' | 'completed';
  score: number | null;
  total: number | null;
}

interface DiagnosticResultRow {
  subject: string;
  weak_topics: string[] | null;
}

interface ClassRow {
  id: string;
  school: string;
  label: string;
}

interface TeacherLessonRow {
  id: string;
  title: string;
  subject: string;
  questions: unknown;
  created_at: string;
}

/** Small meta row shared by real and placeholder cards. */
const LessonMeta: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const { language } = useLanguage();
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slateink">
      <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 font-semibold text-teal-dark">
        {loc(language, DIFFICULTY_LABEL[lesson.difficulty])}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {minutesLine(language, lesson.minutes)}
      </span>
      <span className="inline-flex items-center gap-1">
        <Zap className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
        {lesson.xp} XP
      </span>
    </div>
  );
};

const LearnPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, loading: authLoading } = useAuth();
  const reducedMotion = useReducedMotion();

  const [progress, setProgress] = useState<Record<string, LessonProgressRow>>({});
  const [recommendedSubjects, setRecommendedSubjects] = useState<Set<string>>(new Set());
  const [role, setRole] = useState<Role | null>(null);
  const [myClass, setMyClass] = useState<ClassRow | null>(null);
  const [teacherLessons, setTeacherLessons] = useState<TeacherLessonRow[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [lockedSlug, setLockedSlug] = useState<string | null>(null);
  // in-page two-level navigation: null = robot picker, otherwise the mentor's lessons
  const [selectedRobot, setSelectedRobot] = useState<MentorRobotId | null>(null);

  // load the signed-in user's lesson progress, diagnostic results and class
  // membership (with its teacher lessons); signed-out users just see cards
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setProgress({});
      setRecommendedSubjects(new Set());
      setRole(null);
      setMyClass(null);
      setTeacherLessons([]);
      setLoadingProgress(false);
      return;
    }
    let cancelled = false;
    const load = async () => {
      const profileRes = await supabase
        .from('profiles')
        .select('role, class_id')
        .eq('id', user.id)
        .maybeSingle();
      const profileRow =
        !profileRes.error && profileRes.data
          ? (profileRes.data as { role: Role; class_id: string | null })
          : null;

      const [progressRes, diagnosticRes] = await Promise.all([
        supabase
          .from('lesson_progress')
          .select('lesson_slug, status, score, total')
          .eq('user_id', user.id),
        supabase
          .from('diagnostic_results')
          .select('subject, weak_topics')
          .eq('user_id', user.id),
      ]);

      let classRow: ClassRow | null = null;
      let classLessons: TeacherLessonRow[] = [];
      if (profileRow?.role === 'student' && profileRow.class_id) {
        const [classRes, lessonsRes] = await Promise.all([
          supabase
            .from('classes')
            .select('id, school, label')
            .eq('id', profileRow.class_id)
            .maybeSingle(),
          supabase
            .from('teacher_lessons')
            .select('id, title, subject, questions, created_at')
            .eq('class_id', profileRow.class_id)
            .order('created_at', { ascending: false }),
        ]);
        if (!classRes.error && classRes.data) classRow = classRes.data as ClassRow;
        if (!lessonsRes.error && lessonsRes.data) {
          classLessons = lessonsRes.data as TeacherLessonRow[];
        }
      }

      if (cancelled) return;
      setRole(profileRow?.role ?? null);
      setMyClass(classRow);
      setTeacherLessons(classLessons);
      if (!progressRes.error && progressRes.data) {
        const map: Record<string, LessonProgressRow> = {};
        for (const row of progressRes.data as LessonProgressRow[]) map[row.lesson_slug] = row;
        setProgress(map);
      }
      if (!diagnosticRes.error && diagnosticRes.data) {
        const subjects = new Set<string>();
        for (const row of diagnosticRes.data as DiagnosticResultRow[]) {
          const topics = row.weak_topics ?? [];
          if (topics.some((t) => typeof t === 'string' && t.trim().length > 0)) {
            subjects.add(row.subject);
          }
        }
        setRecommendedSubjects(subjects);
      }
      setLoadingProgress(false);
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  if (authLoading || loadingProgress) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const isRecommended = (lesson: Lesson): boolean =>
    lesson.available && recommendedSubjects.has(lesson.subject);

  const statusBadge = (lesson: Lesson) => {
    const row = progress[lesson.slug];
    if (row?.status === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal-dark">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          {row.score !== null && row.total !== null
            ? completedLine(language, row.score, row.total)
            : completedLine(language, 0, 0)}
        </span>
      );
    }
    if (row?.status === 'in_progress') {
      return (
        <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 text-xs font-semibold text-teal-dark">
          {loc(language, STATUS_IN_PROGRESS)}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full border border-line/60 px-2.5 py-1 text-xs font-medium text-slateink">
        {loc(language, STATUS_NOT_STARTED)}
      </span>
    );
  };

  const activeMentor = MENTORS.find((m) => m.id === selectedRobot) ?? null;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="full" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="learn" aria-labelledby="learn-heading">
          <div className="flex items-start gap-4">
            <RobotAvatar robot="nov2" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, ROBOT_LABEL)}
              </p>
              <h1
                id="learn-heading"
                className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
              >
                {loc(language, TITLE)}
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                {loc(language, SUB)}
              </p>
            </div>
          </div>

          {/* teacher-authored lessons for the student's own class */}
          {role === 'student' && myClass && (
            <div className="mt-10">
              <h2 className="flex flex-wrap items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/30 text-teal-dark">
                  <Users className="h-4 w-4" aria-hidden="true" />
                </span>
                {loc(language, CLASS_SECTION_TITLE)}
                <span className="rounded-full bg-teal/10 px-2.5 py-1 font-sans text-xs font-semibold text-teal-dark">
                  {myClass.school} · {myClass.label}
                </span>
              </h2>
              {teacherLessons.length > 0 ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {teacherLessons.map((lesson, index) => (
                    <motion.div
                      key={lesson.id}
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link
                        to={`/learn/class/${lesson.id}`}
                        className={`${FOCUS_RING} group flex h-full flex-col rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-base font-bold tracking-tight text-ink group-hover:text-teal-dark">
                            {lesson.title}
                          </h3>
                          <ChevronRight
                            className="mt-0.5 h-4 w-4 shrink-0 text-slateink transition-colors group-hover:text-teal"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slateink">
                          <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 font-semibold text-teal-dark">
                            {lesson.subject}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
                            {questionsLine(
                              language,
                              Array.isArray(lesson.questions) ? lesson.questions.length : 0,
                            )}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                            {dateLine(language, lesson.created_at)}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2 pt-1">
                          <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal-dark">
                            <Users className="h-3 w-3" aria-hidden="true" />
                            {loc(language, TEACHER_BADGE)}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slateink">{loc(language, CLASS_SECTION_EMPTY)}</p>
              )}
            </div>
          )}

          {/* nudge for students who have not joined a class yet */}
          {role === 'student' && !myClass && (
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
              <School className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
              <p className="min-w-0 flex-1 text-sm font-medium text-ink">
                {loc(language, JOIN_BANNER_TEXT)}
              </p>
              <Link
                to="/profile"
                className={`${FOCUS_RING} inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
              >
                {loc(language, JOIN_BANNER_BTN)}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          {activeMentor === null ? (
            /* LEVEL 1 — robot picker */
            <div className="mt-10" aria-labelledby="mentor-picker-heading">
              <motion.div
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  id="mentor-picker-heading"
                  className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
                >
                  {loc(language, PICKER_TITLE)}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                  {loc(language, PICKER_SUB)}
                </p>
              </motion.div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {MENTORS.map((mentor, index) => {
                  const mentorLessons = LESSONS.filter((l) =>
                    mentor.subjects.includes(l.subject),
                  );
                  const completedCount = mentorLessons.filter(
                    (l) => progress[l.slug]?.status === 'completed',
                  ).length;
                  const isMentorRecommended =
                    role !== 'teacher' &&
                    mentor.subjects.some((s) => recommendedSubjects.has(s));
                  return (
                    <motion.div
                      key={mentor.id}
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={reducedMotion ? undefined : { y: -4 }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedRobot(mentor.id)}
                        className={`${FOCUS_RING} group flex h-full w-full flex-col items-center rounded-2xl border border-line/50 bg-white px-6 py-8 text-center shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-colors duration-200 hover:border-teal/60`}
                      >
                        <RobotAvatar robot={mentor.id} className="h-32 w-32 sm:h-36 sm:w-36" />
                        <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                          {loc(language, mentor.codeLabel)}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-teal-dark">
                          {loc(language, mentor.name)}
                        </h3>
                        <p className="mt-1.5 text-sm text-slateink">
                          {loc(language, mentor.tagline)}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                          {LESSON_SUBJECTS.filter((s) =>
                            mentor.subjects.includes(s.slug),
                          ).map((s) => (
                            <span
                              key={s.slug}
                              className="inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 text-xs font-semibold text-teal-dark"
                            >
                              {SUBJECT_ICONS[s.slug]}
                              {loc(language, s.label)}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-xs font-medium text-slateink">
                          {mentorLessonsLine(language, mentorLessons.length, completedCount)}
                        </p>
                        {isMentorRecommended && (
                          <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-coral/40 px-2.5 py-1 text-[11px] font-semibold text-coral">
                            <Sparkles className="h-3 w-3" aria-hidden="true" />
                            {loc(language, RECOMMENDED_BADGE)}
                          </span>
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* LEVEL 2 — the chosen mentor's lessons */
            <div className="mt-10">
              <button
                type="button"
                onClick={() => setSelectedRobot(null)}
                className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {loc(language, BACK_TO_MENTORS)}
              </button>

              <div className="mt-6 flex items-start gap-4">
                <RobotAvatar
                  robot={activeMentor.id}
                  className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
                />
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, activeMentor.codeLabel)}
                  </p>
                  <h2 className="mt-0.5 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                    {loc(language, activeMentor.name)}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                    {loc(language, activeMentor.tagline)}
                  </p>
                </div>
              </div>

              {LESSON_SUBJECTS.filter((subject) =>
                activeMentor.subjects.includes(subject.slug),
              ).map((subject) => {
            // stable sort: lessons recommended from the diagnostics go first
            const lessons = LESSONS.filter((l) => l.subject === subject.slug).sort(
              (a, b) => Number(isRecommended(b)) - Number(isRecommended(a)),
            );
            if (lessons.length === 0) return null;
            return (
              <div key={subject.slug} className="mt-10">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/30 text-teal-dark">
                    {SUBJECT_ICONS[subject.slug]}
                  </span>
                  {loc(language, subject.label)}
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lessons.map((lesson, index) =>
                    lesson.available ? (
                      <motion.div
                        key={lesson.slug}
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Link
                          to={`/learn/${lesson.slug}`}
                          className={`${FOCUS_RING} group flex h-full flex-col rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display text-base font-bold tracking-tight text-ink group-hover:text-teal-dark">
                              {loc(language, lesson.title)}
                            </h3>
                            <ChevronRight
                              className="mt-0.5 h-4 w-4 shrink-0 text-slateink transition-colors group-hover:text-teal"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="mt-1.5 text-sm text-slateink">
                            {loc(language, lesson.summary)}
                          </p>
                          <LessonMeta lesson={lesson} />
                          <div className="mt-3 flex flex-wrap items-center gap-2 pt-1">
                            {statusBadge(lesson)}
                            {isRecommended(lesson) && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-coral/40 px-2.5 py-1 text-[11px] font-semibold text-coral">
                                <Sparkles className="h-3 w-3" aria-hidden="true" />
                                {loc(language, RECOMMENDED_BADGE)}
                              </span>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={lesson.slug}
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setLockedSlug((prev) => (prev === lesson.slug ? null : lesson.slug))
                          }
                          aria-expanded={lockedSlug === lesson.slug}
                          className={`${FOCUS_RING} flex h-full w-full flex-col rounded-2xl border border-dashed border-line bg-mist/10 p-5 text-left`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display text-base font-bold tracking-tight text-slateink">
                              {loc(language, lesson.title)}
                            </h3>
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line/60 px-2.5 py-1 text-[11px] font-semibold text-slateink">
                              <Lock className="h-3 w-3" aria-hidden="true" />
                              {loc(language, SOON_BADGE)}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm text-slateink">
                            {loc(language, lesson.summary)}
                          </p>
                          <LessonMeta lesson={lesson} />
                          {lockedSlug === lesson.slug && (
                            <p
                              aria-live="polite"
                              className="mt-3 rounded-xl border border-teal/30 bg-teal/5 px-3 py-2 text-xs font-medium text-teal-dark"
                            >
                              {loc(language, SOON_NOTE)}
                            </p>
                          )}
                        </button>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            );
          })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default LearnPage;
