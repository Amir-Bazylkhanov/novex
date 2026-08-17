import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  Calculator,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Languages,
  Loader2,
  Lock,
  Zap,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import {
  LESSON_SUBJECTS,
  LESSONS,
  type Lesson,
  type LessonDifficulty,
  type LessonSubject,
} from '../../constants/lessonData.ts';

/* --- content --- */

const WORDMARK: Localized = { ru: 'Novex', kk: 'Novex', en: 'Novex' };
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
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [lockedSlug, setLockedSlug] = useState<string | null>(null);

  // load the signed-in user's lesson progress; signed-out users just see cards
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setProgress({});
      setLoadingProgress(false);
      return;
    }
    let cancelled = false;
    supabase
      .from('lesson_progress')
      .select('lesson_slug, status, score, total')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data) {
          const map: Record<string, LessonProgressRow> = {};
          for (const row of data as LessonProgressRow[]) map[row.lesson_slug] = row;
          setProgress(map);
        }
        setLoadingProgress(false);
      });
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

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className={`${FOCUS_RING} rounded font-display text-xl font-extrabold tracking-tight text-teal-dark`}
          >
            {loc(language, WORDMARK)}
          </Link>
        </div>

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

          {LESSON_SUBJECTS.map((subject) => {
            const lessons = LESSONS.filter((l) => l.subject === subject.slug);
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
                          <div className="mt-3 pt-1">{statusBadge(lesson)}</div>
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
        </section>
      </div>
    </main>
  );
};

export default LearnPage;
