import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Atom,
  Calculator,
  Calendar,
  ChevronRight,
  Cpu,
  Languages,
  ListChecks,
  Loader2,
  School,
  Sparkles,
  Users,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth, type Role } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar, type MentorRobotId } from '../robots/RobotAvatars.tsx';
import RobotShowcase from './RobotShowcase.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  LESSON_SUBJECTS,
  LESSONS,
  type LessonSubject,
} from '../../constants/lessonData.ts';
import { LEARN_DIRECTIONS } from '../../constants/learnDirections.ts';
import { pickGradeContent, planetsByRobot } from '../../constants/academy/catalog.ts';

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
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
  ru: 'Выбери тему и начни урок. NOV-01 объяснит теорию и проверит тебя задачами.',
  kk: 'Тақырыпты таңдап, сабақты баста. NOV-01 теорияны түсіндіріп, тапсырмалармен тексереді.',
  en: 'Pick a topic and start a lesson. NOV-01 explains the theory and checks you with tasks.',
};

const SOON_BADGE: Localized = {
  ru: 'Скоро добавим',
  kk: 'Жақында қосамыз',
  en: 'Coming soon',
};

const RECOMMENDED_BADGE: Localized = {
  ru: 'Рекомендовано NOV-01',
  kk: 'NOV-01 ұсынған',
  en: 'Recommended by NOV-01',
};

const PICKER_TITLE: Localized = {
  ru: 'Выбери робота по направлению',
  kk: 'Бағытың бойынша роботты таңда',
  en: 'Pick a robot by track',
};
const PICKER_SUB: Localized = {
  ru: 'Каждый робот ведёт своё направление. Нажми на робота, чтобы увидеть его модули.',
  kk: 'Әр роботтың өз бағыты бар. Модульдерін көру үшін роботты бас.',
  en: 'Each robot leads its own track. Pick a robot to see its modules.',
};
const PLANETS_TITLE: Localized = {
  ru: 'Модули направления',
  kk: 'Бағыт модульдері',
  en: 'Direction modules',
};

const BACK_TO_MENTORS: Localized = {
  ru: 'Ко всем роботам',
  kk: 'Барлық роботтарға оралу',
  en: 'Back to all robots',
};

interface Mentor {
  id: MentorRobotId;
  codeLabel: Localized;
  name: Localized;
  tagline: Localized;
  subjects: LessonSubject[];
}

/* The three direction robots mirror Locus Academy's three galaxies: academic
   base, life skills and future skills. Direction names and subjects come from
   the shared learn-directions catalogue so /learn and /plan can never drift.
   Internal robot keys stay nov4/nov5/nov6 (the career module depends on them);
   only the displayed codes are renumbered to NOV-01/02/03. */
const MENTOR_EXTRAS: Record<MentorRobotId, Omit<Mentor, 'id' | 'name' | 'subjects'>> = {
  nov4: {
    codeLabel: { ru: 'NOV-01 · АКАДЕМИК', kk: 'NOV-01 · АКАДЕМИК', en: 'NOV-01 · ACADEMIC' },
    tagline: {
      ru: 'Школа и подготовка к вузу',
      kk: 'Мектеп және ЖОО-ға дайындық',
      en: 'School and university prep',
    },
  },
  nov5: {
    codeLabel: { ru: 'NOV-02 · ПРАКТИК', kk: 'NOV-02 · ПРАКТИК', en: 'NOV-02 · PRACTITIONER' },
    tagline: {
      ru: 'Навыки для реальной жизни',
      kk: 'Нақты өмірге арналған дағдылар',
      en: 'Skills for real life',
    },
  },
  nov6: {
    codeLabel: { ru: 'NOV-03 · КИБЕР', kk: 'NOV-03 · КИБЕР', en: 'NOV-03 · CYBER' },
    tagline: {
      ru: 'Код, ИИ и самопознание',
      kk: 'Код, ЖИ және өзін-өзі тану',
      en: 'Code, AI and self-knowledge',
    },
  },
};

const MENTORS: Mentor[] = LEARN_DIRECTIONS.map((direction) => ({
  id: direction.robot,
  name: direction.name,
  subjects: direction.subjects,
  ...MENTOR_EXTRAS[direction.robot],
}));

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

const planetsLine = (lang: 'ru' | 'kk' | 'en', total: number): string => {
  if (lang === 'kk') return `Модульдер: ${total}`;
  if (lang === 'en') return `Modules: ${total}`;
  return `Модули: ${total}`;
};

const topicsLine = (lang: 'ru' | 'kk' | 'en', total: number): string => {
  if (lang === 'kk') return `Тақырыптар: ${total}`;
  if (lang === 'en') return `Topics: ${total}`;
  return `Тем: ${total}`;
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

const LearnPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile, loading: authLoading } = useAuth();
  const reducedMotion = useReducedMotion();

  const [progress, setProgress] = useState<Record<string, LessonProgressRow>>({});
  const [recommendedSubjects, setRecommendedSubjects] = useState<Set<string>>(new Set());
  const [role, setRole] = useState<Role | null>(null);
  const [myClass, setMyClass] = useState<ClassRow | null>(null);
  const [teacherLessons, setTeacherLessons] = useState<TeacherLessonRow[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);
  // in-page two-level navigation: null = robot picker, otherwise the
  // direction's module catalog
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

  const activeMentor = MENTORS.find((m) => m.id === selectedRobot) ?? null;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="full" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="learn" aria-labelledby="learn-heading">
          <div className="flex items-start gap-4">
            <RobotAvatar robot="nov1" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
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
              <div className="learn-heading-in">
                <h2
                  id="mentor-picker-heading"
                  className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
                >
                  {loc(language, PICKER_TITLE)}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                  {loc(language, PICKER_SUB)}
                </p>
              </div>

              <RobotShowcase
                robots={MENTORS.map((mentor) => {
                  const mentorLessons = LESSONS.filter((l) =>
                    mentor.subjects.includes(l.subject),
                  );
                  const completedCount = mentorLessons.filter(
                    (l) => progress[l.slug]?.status === 'completed',
                  ).length;
                  const mentorPlanets = planetsByRobot(mentor.id);
                  return {
                    id: mentor.id,
                    idLine: loc(language, mentor.codeLabel),
                    name: loc(language, mentor.name),
                    tagline: loc(language, mentor.tagline),
                    chips: LESSON_SUBJECTS.filter((s) =>
                      mentor.subjects.includes(s.slug),
                    ).map((s) => ({
                      icon: SUBJECT_ICONS[s.slug],
                      label: loc(language, s.label),
                    })),
                    countsLine:
                      mentorLessons.length > 0
                        ? mentorPlanets.length > 0
                          ? `${mentorLessonsLine(language, mentorLessons.length, completedCount)} · ${planetsLine(language, mentorPlanets.length)}`
                          : mentorLessonsLine(language, mentorLessons.length, completedCount)
                        : mentorPlanets.length > 0
                          ? planetsLine(language, mentorPlanets.length)
                          : loc(language, SOON_BADGE),
                    recommended:
                      role !== 'teacher' &&
                      mentor.subjects.some((s) => recommendedSubjects.has(s)),
                    recommendedBadge: loc(language, RECOMMENDED_BADGE),
                    onSelect: () => setSelectedRobot(mentor.id),
                  };
                })}
              />
            </div>
          ) : (
            /* LEVEL 2 — the chosen direction's module catalog */
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

              {/* academy modules of this direction (Locus curriculum) */}
              {(() => {
                const mentorPlanets = planetsByRobot(activeMentor.id);
                if (mentorPlanets.length === 0) return null;
                return (
                  <div className="mt-10">
                    <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/30 text-teal-dark">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {loc(language, PLANETS_TITLE)}
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {mentorPlanets.map((planet, index) => {
                        const Icon = planet.icon;
                        const topics =
                          pickGradeContent(planet.lessons, profile?.grade ?? null)?.sections
                            .length ?? 0;
                        return (
                          <motion.div
                            key={planet.slug}
                            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                          >
                            <Link
                              to={`/learn/p/${planet.slug}`}
                              className={`${FOCUS_RING} group flex h-full flex-col rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist/30 text-teal-dark">
                                  <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <ChevronRight
                                  className="mt-0.5 h-4 w-4 shrink-0 text-slateink transition-colors group-hover:text-teal"
                                  aria-hidden="true"
                                />
                              </div>
                              <h3 className="mt-3 font-display text-base font-bold tracking-tight text-ink group-hover:text-teal-dark">
                                {loc(language, planet.name)}
                              </h3>
                              <p className="mt-2 text-xs text-slateink">
                                {topicsLine(language, topics)}
                              </p>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default LearnPage;
