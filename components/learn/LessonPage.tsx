import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  Check,
  ChevronRight,
  Clock,
  ListChecks,
  Loader2,
  Lock,
  RotateCcw,
  TrendingDown,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import {
  lessonBySlug,
  subjectLabel,
  type Lesson,
  type LessonDifficulty,
} from '../../constants/lessonData.ts';

/* --- content --- */

const WORDMARK: Localized = { ru: 'Novex', kk: 'Novex', en: 'Novex' };
const ROBOT_LABEL: Localized = {
  ru: 'NOV-02 · Наставник',
  kk: 'NOV-02 · Тәлімгер',
  en: 'NOV-02 · Tutor',
};
const BACK: Localized = {
  ru: 'Ко всем модулям',
  kk: 'Барлық модульдерге',
  en: 'All modules',
};

const NOT_FOUND_TITLE: Localized = {
  ru: 'Урок не найден',
  kk: 'Сабақ табылмады',
  en: 'Lesson not found',
};
const NOT_FOUND_SUB: Localized = {
  ru: 'Такого урока нет в каталоге. Вернись к списку модулей.',
  kk: 'Каталогта мұндай сабақ жоқ. Модульдер тізіміне орал.',
  en: 'There is no such lesson in the catalogue. Head back to the module list.',
};

const SOON_TITLE: Localized = {
  ru: 'Скоро добавим',
  kk: 'Жақында қосамыз',
  en: 'Coming soon',
};
const SOON_SUB: Localized = {
  ru: 'Этот модуль ещё в разработке — мы честно об этом скажем, а не будем притворяться, что он работает. Загляни позже!',
  kk: 'Бұл модуль әлі дайындалуда — жұмыс істеп тұрғандай етіп көрсетпей, расын айтамыз. Кейінірек кел!',
  en: 'This module is still in the works — we would rather say so honestly than pretend it works. Check back soon!',
};

const THEORY_LABEL: Localized = { ru: 'Теория', kk: 'Теория', en: 'Theory' };
const EXAMPLE_LABEL: Localized = { ru: 'Пример', kk: 'Мысал', en: 'Example' };
const START_PRACTICE: Localized = {
  ru: 'Перейти к практике',
  kk: 'Практикаға өту',
  en: 'Start practice',
};
const ANSWER_BTN: Localized = { ru: 'Ответить', kk: 'Жауап беру', en: 'Answer' };
const ADAPT_UP: Localized = {
  ru: 'Сложность растёт',
  kk: 'Қиындық артып келеді',
  en: 'Difficulty is going up',
};
const ADAPT_DOWN: Localized = {
  ru: 'Сделаем полегче',
  kk: 'Сәл жеңілірек етейік',
  en: 'Let’s make it easier',
};
const NEXT_BTN: Localized = { ru: 'Дальше', kk: 'Келесі', en: 'Next' };
const FINISH_BTN: Localized = {
  ru: 'Завершить урок',
  kk: 'Сабақты аяқтау',
  en: 'Finish the lesson',
};

const CORRECT_LABEL: Localized = { ru: 'Верно!', kk: 'Дұрыс!', en: 'Correct!' };
const INCORRECT_LABEL: Localized = {
  ru: 'Неверно — сейчас разберём',
  kk: 'Қате — қазір талдаймыз',
  en: 'Not quite — let’s break it down',
};

const DONE_TITLE: Localized = {
  ru: 'Урок завершён',
  kk: 'Сабақ аяқталды',
  en: 'Lesson complete',
};
const REVIEW_TITLE: Localized = {
  ru: 'Что стоит повторить',
  kk: 'Нені қайталаған жөн',
  en: 'What to review',
};
const ALL_GOOD: Localized = {
  ru: 'Все ответы верные — повторять нечего. Отличная работа!',
  kk: 'Барлық жауап дұрыс — қайталайтын нәрсе жоқ. Керемет жұмыс!',
  en: 'All answers correct — nothing to review. Great job!',
};
const RETRY_BTN: Localized = {
  ru: 'Пройти ещё раз',
  kk: 'Қайта өту',
  en: 'Try again',
};

const SAVE_SAVING: Localized = {
  ru: 'Сохраняем прогресс…',
  kk: 'Прогресті сақтаудамыз…',
  en: 'Saving progress…',
};
const SAVE_OK: Localized = {
  ru: 'Прогресс сохранён',
  kk: 'Прогресс сақталды',
  en: 'Progress saved',
};
const SAVE_ERROR: Localized = {
  ru: 'Не удалось сохранить прогресс — проверь интернет и попробуй позже.',
  kk: 'Прогресті сақтай алмадық — интернетті тексеріп, кейінірек қайта көр.',
  en: 'Could not save your progress — check your connection and try again later.',
};
const SIGNED_OUT_NOTE: Localized = {
  ru: 'Ты не вошёл в аккаунт: результат показан, но не сохранён.',
  kk: 'Аккаунтқа кірмегенсің: нәтиже көрсетілді, бірақ сақталмады.',
  en: 'You are not signed in: your result is shown but not saved.',
};
const SIGN_IN: Localized = { ru: 'Войти', kk: 'Кіру', en: 'Sign in' };

const DIFFICULTY_LABEL: Record<LessonDifficulty, Localized> = {
  easy: { ru: 'Лёгкий', kk: 'Жеңіл', en: 'Easy' },
  medium: { ru: 'Средний', kk: 'Орташа', en: 'Medium' },
  hard: { ru: 'Сложный', kk: 'Қиын', en: 'Hard' },
};

const counterLine = (lang: 'ru' | 'kk' | 'en', current: number, total: number): string => {
  if (lang === 'kk') return `Сұрақ ${current} / ${total}`;
  if (lang === 'en') return `Question ${current} of ${total}`;
  return `Вопрос ${current} из ${total}`;
};

const questionsLine = (lang: 'ru' | 'kk' | 'en', total: number): string => {
  if (lang === 'kk') return `Сұрақтар: ${total}`;
  if (lang === 'en') return `Questions: ${total}`;
  return `Вопросов: ${total}`;
};

const scoreLine = (lang: 'ru' | 'kk' | 'en', score: number, total: number): string => {
  if (lang === 'kk') return `Дұрыс жауаптар: ${total} ішінен ${score}`;
  if (lang === 'en') return `Correct answers: ${score} out of ${total}`;
  return `Правильных ответов: ${score} из ${total}`;
};

const minutesLine = (lang: 'ru' | 'kk' | 'en', minutes: number): string => {
  if (lang === 'en') return `${minutes} min`;
  return `${minutes} мин`;
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const PRIMARY_BTN = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`;

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

type Phase = 'theory' | 'quiz' | 'done';
type SaveState = 'idle' | 'saving' | 'saved' | 'error' | 'skipped';

interface LessonAnswer {
  questionId: string;
  topicLabel: Localized;
  correct: boolean;
}

/** Back link + wordmark header shared by every state of the page. */
const PageChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-3">
          <Link
            to="/"
            className={`${FOCUS_RING} rounded font-display text-xl font-extrabold tracking-tight text-teal-dark`}
          >
            {loc(language, WORDMARK)}
          </Link>
          <Link
            to="/learn"
            className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK)}
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
};

/** One lesson: theory blocks, then scored practice with NOV-02 explanations. */
const LessonRunner: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const reducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>('theory');
  const [cursor, setCursor] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<LessonAnswer[]>([]);
  const [streak, setStreak] = useState(0);
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [adapted, setAdapted] = useState<'up' | 'down' | null>(null);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const savedRef = useRef(false);
  const startedRef = useRef(false);
  const questionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const doneHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const totalQuestions = lesson.questions.length;
  const currentQuestion = lesson.questions[cursor] ?? null;
  const score = answers.filter((a) => a.correct).length;
  const reviewTopics = answers
    .filter((a) => !a.correct)
    .map((a) => a.topicLabel)
    .filter((label, i, all) => all.findIndex((l) => l.ru === label.ru) === i);

  // move focus to the question whenever it changes
  useEffect(() => {
    if (phase === 'quiz' && currentQuestion) questionHeadingRef.current?.focus();
  }, [phase, currentQuestion]);

  useEffect(() => {
    if (phase === 'done') doneHeadingRef.current?.focus();
  }, [phase]);

  // persist an in_progress row when practice starts (signed-in users only)
  useEffect(() => {
    if (phase !== 'quiz' || !user || startedRef.current) return;
    startedRef.current = true;
    supabase
      .from('lesson_progress')
      .upsert(
        {
          user_id: user.id,
          lesson_slug: lesson.slug,
          subject: lesson.subject,
          status: 'in_progress',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,lesson_slug' },
      )
      .then(() => {
        // fire-and-forget: the finish upsert reports real errors
      });
  }, [phase, user, lesson]);

  // persist the completed result once (signed-in users only)
  useEffect(() => {
    if (phase !== 'done' || savedRef.current) return;
    savedRef.current = true;
    if (!user) {
      setSaveState('skipped');
      return;
    }
    setSaveState('saving');
    const persist = async () => {
      try {
        const { error } = await supabase.from('lesson_progress').upsert(
          {
            user_id: user.id,
            lesson_slug: lesson.slug,
            subject: lesson.subject,
            status: 'completed',
            score,
            total: totalQuestions,
            xp: lesson.xp,
            completed_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,lesson_slug' },
        );
        setSaveState(error ? 'error' : 'saved');
      } catch {
        setSaveState('error');
      }
    };
    persist();
  }, [phase, user, lesson, score, totalQuestions]);

  const startPractice = () => {
    setCursor(0);
    setSelected(null);
    setAnswered(false);
    setAnswers([]);
    setStreak(0);
    setNextCursor(null);
    setAdapted(null);
    setPhase('quiz');
  };

  const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentQuestion || selected === null || answered) return;
    const correct = selected === currentQuestion.correctIndex;
    const nextAnswers: LessonAnswer[] = [
      ...answers,
      {
        questionId: currentQuestion.id,
        topicLabel: currentQuestion.topicLabel,
        correct,
      },
    ];
    const nextStreak = correct ? streak + 1 : 0;

    // adaptive pick: two right in a row → one step harder, a wrong answer → one step down
    const askedIds = nextAnswers.map((a) => a.questionId);
    const unasked = lesson.questions
      .map((_, i) => i)
      .filter((i) => !askedIds.includes(lesson.questions[i].id));
    let next: number | null = null;
    let adapt: 'up' | 'down' | null = null;
    if (unasked.length > 0) {
      if (nextStreak >= 2) {
        const harder = unasked.filter(
          (i) => lesson.questions[i].difficulty > currentQuestion.difficulty,
        );
        if (harder.length > 0) {
          adapt = 'up';
          next = harder.reduce((best, i) => {
            const a = lesson.questions[best];
            const b = lesson.questions[i];
            return b.difficulty < a.difficulty || (b.difficulty === a.difficulty && i < best)
              ? i
              : best;
          });
        }
      } else if (!correct) {
        const easier = unasked.filter(
          (i) => lesson.questions[i].difficulty < currentQuestion.difficulty,
        );
        if (easier.length > 0) {
          adapt = 'down';
          next = easier.reduce((best, i) => {
            const a = lesson.questions[best];
            const b = lesson.questions[i];
            return b.difficulty > a.difficulty || (b.difficulty === a.difficulty && i < best)
              ? i
              : best;
          });
        }
      }
      if (next === null) next = unasked.find((i) => i > cursor) ?? unasked[0];
    }

    setAnswers(nextAnswers);
    setAnswered(true);
    setStreak(adapt ? 0 : nextStreak);
    setAdapted(adapt);
    setNextCursor(next);
  };

  const goNext = () => {
    if (nextCursor !== null) {
      setCursor(nextCursor);
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase('done');
    }
  };

  const retry = () => {
    savedRef.current = false;
    startedRef.current = false;
    setSaveState('idle');
    setPhase('theory');
    setCursor(0);
    setSelected(null);
    setAnswered(false);
    setAnswers([]);
    setStreak(0);
    setNextCursor(null);
    setAdapted(null);
  };

  return (
    <section id="lesson" aria-labelledby="lesson-heading">
      {/* lesson header — visible in every phase */}
      <div className="flex items-start gap-4">
        <RobotAvatar robot="nov2" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
            {loc(language, ROBOT_LABEL)}
          </p>
          <h1
            id="lesson-heading"
            className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            {loc(language, lesson.title)}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slateink">
            <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 font-semibold text-teal-dark">
              {loc(language, subjectLabel(lesson.subject))}
            </span>
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
        </div>
      </div>

      {/* --- theory --- */}
      {phase === 'theory' && (
        <div className="mt-6 space-y-4">
          <p className="text-sm text-slateink">{loc(language, lesson.summary)}</p>
          {lesson.theory.map((block, i) => (
            <motion.article
              key={i}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className={CARD}
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, THEORY_LABEL)} · {i + 1}/{lesson.theory.length}
              </p>
              <h2 className="mt-1.5 font-display text-lg font-bold tracking-tight text-ink">
                {loc(language, block.heading)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">
                {loc(language, block.body)}
              </p>
              <div className="mt-3 rounded-xl border border-teal/20 bg-mist/20 px-4 py-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, EXAMPLE_LABEL)}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink">
                  {loc(language, block.example)}
                </p>
              </div>
            </motion.article>
          ))}
          <button type="button" onClick={startPractice} className={`${PRIMARY_BTN} mt-2`}>
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            {loc(language, START_PRACTICE)} · {questionsLine(language, totalQuestions)}
          </button>
        </div>
      )}

      {/* --- quiz --- */}
      {phase === 'quiz' && currentQuestion && (
        <div className="mt-6">
          <div className="flex items-center justify-between gap-3">
            <p aria-live="polite" className="text-sm font-semibold text-ink">
              {counterLine(language, answers.length + 1, totalQuestions)}
            </p>
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
              {loc(language, ROBOT_LABEL)}
            </p>
          </div>
          <div
            className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist/40"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-valuenow={answers.length}
          >
            <div
              className="h-full rounded-full bg-teal transition-all duration-300"
              style={{ width: `${Math.round((answers.length / totalQuestions) * 100)}%` }}
            />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentQuestion.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className={`${CARD} mt-5`}
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                {loc(language, currentQuestion.topicLabel)}
              </p>
              {adapted && (
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {adapted === 'up' ? (
                    <TrendingUp className="h-3 w-3" aria-hidden="true" />
                  ) : (
                    <TrendingDown className="h-3 w-3" aria-hidden="true" />
                  )}
                  {loc(language, adapted === 'up' ? ADAPT_UP : ADAPT_DOWN)}
                </p>
              )}
              <h2
                ref={questionHeadingRef}
                tabIndex={-1}
                className="mt-2 font-display text-xl font-bold tracking-tight text-ink focus:outline-none sm:text-2xl"
              >
                {loc(language, currentQuestion.question)}
              </h2>

              <form onSubmit={submitAnswer} className="mt-5">
                <fieldset disabled={answered}>
                  <legend className="sr-only">{loc(language, currentQuestion.question)}</legend>
                  <div className="space-y-2.5">
                    {currentQuestion.options.map((option, i) => {
                      const isCorrect = i === currentQuestion.correctIndex;
                      const isSelected = i === selected;
                      let optionClass =
                        'flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors';
                      if (answered) {
                        if (isCorrect) {
                          optionClass += ' border-teal bg-teal/10 text-ink';
                        } else if (isSelected) {
                          optionClass += ' border-coral bg-coral/10 text-ink';
                        } else {
                          optionClass += ' border-line/60 bg-white text-slateink';
                        }
                      } else {
                        optionClass +=
                          ' border-line bg-white text-ink hover:border-teal/60 peer-checked:border-teal peer-checked:bg-teal/10 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas';
                      }
                      return (
                        <label
                          key={i}
                          className={answered ? 'block' : 'block cursor-pointer'}
                        >
                          <input
                            type="radio"
                            name={`answer-${currentQuestion.id}`}
                            value={i}
                            checked={isSelected}
                            onChange={() => setSelected(i)}
                            className="peer sr-only"
                          />
                          <span className={optionClass}>
                            <span
                              aria-hidden="true"
                              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist/30 font-mono text-[11px] font-semibold text-teal-dark"
                            >
                              {OPTION_LETTERS[i]}
                            </span>
                            <span className="min-w-0 flex-1">{loc(language, option)}</span>
                            {answered && isCorrect && (
                              <Check className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                            )}
                            {answered && isSelected && !isCorrect && (
                              <X className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
                            )}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                {!answered && (
                  <button
                    type="submit"
                    disabled={selected === null}
                    className={`${PRIMARY_BTN} mt-5`}
                  >
                    {loc(language, ANSWER_BTN)}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </form>

              {answered && (
                <motion.div
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  aria-live="polite"
                  className="mt-5 rounded-xl border border-teal/25 bg-mist/15 p-4"
                >
                  <div className="flex items-start gap-3">
                    <RobotAvatar robot="nov2" className="h-10 w-10 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                        {loc(language, ROBOT_LABEL)}
                      </p>
                      <p
                        className={`mt-0.5 text-sm font-bold ${
                          selected === currentQuestion.correctIndex
                            ? 'text-teal-dark'
                            : 'text-coral'
                        }`}
                      >
                        {loc(
                          language,
                          selected === currentQuestion.correctIndex
                            ? CORRECT_LABEL
                            : INCORRECT_LABEL,
                        )}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">
                        {loc(language, currentQuestion.explanation)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    className={`${PRIMARY_BTN} mt-4 w-full justify-center sm:w-auto`}
                  >
                    {loc(language, nextCursor !== null ? NEXT_BTN : FINISH_BTN)}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* --- done --- */}
      {phase === 'done' && (
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${CARD} mt-6`}
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal-dark">
              <Award className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2
                ref={doneHeadingRef}
                tabIndex={-1}
                className="font-display text-2xl font-extrabold tracking-tight text-ink focus:outline-none"
              >
                {loc(language, DONE_TITLE)}
              </h2>
              <p aria-live="polite" className="mt-1 text-sm font-semibold text-ink sm:text-base">
                {scoreLine(language, score, totalQuestions)} · +{lesson.xp} XP
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-line/40 pt-5">
            <h3 className="text-sm font-semibold text-ink">{loc(language, REVIEW_TITLE)}</h3>
            {reviewTopics.length > 0 ? (
              <ul className="mt-2 space-y-1.5">
                {reviewTopics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slateink">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                      aria-hidden="true"
                    />
                    {loc(language, topic)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-slateink">{loc(language, ALL_GOOD)}</p>
            )}
          </div>

          <div className="mt-5" aria-live="polite">
            {saveState === 'saving' && (
              <p role="status" className="inline-flex items-center gap-2 text-sm text-slateink">
                <Loader2 className="h-4 w-4 animate-spin text-teal" aria-hidden="true" />
                {loc(language, SAVE_SAVING)}
              </p>
            )}
            {saveState === 'saved' && (
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark">
                <Check className="h-4 w-4" aria-hidden="true" />
                {loc(language, SAVE_OK)}
              </p>
            )}
            {saveState === 'error' && (
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-coral">
                <X className="h-4 w-4" aria-hidden="true" />
                {loc(language, SAVE_ERROR)}
              </p>
            )}
            {saveState === 'skipped' && (
              <p className="text-sm text-slateink">
                {loc(language, SIGNED_OUT_NOTE)}{' '}
                <Link
                  to="/login"
                  className={`${FOCUS_RING} rounded font-semibold text-teal underline decoration-teal/40 underline-offset-2 hover:text-teal-dark`}
                >
                  {loc(language, SIGN_IN)}
                </Link>
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={retry}
              className={`${FOCUS_RING} inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {loc(language, RETRY_BTN)}
            </button>
            <Link to="/learn" className={`${PRIMARY_BTN} justify-center`}>
              {loc(language, BACK)}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
};

const LessonPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const lesson = slug ? lessonBySlug(slug) : undefined;

  if (!lesson) {
    return (
      <PageChrome>
        <div className={CARD}>
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
            {loc(language, NOT_FOUND_TITLE)}
          </h1>
          <p className="mt-2 text-sm text-slateink">{loc(language, NOT_FOUND_SUB)}</p>
        </div>
      </PageChrome>
    );
  }

  if (!lesson.available) {
    return (
      <PageChrome>
        <div className={CARD}>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist/30 text-slateink">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, subjectLabel(lesson.subject))}
              </p>
              <h1 className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink">
                {loc(language, lesson.title)}
              </h1>
              <p className="mt-1 inline-flex items-center rounded-full border border-line/60 px-2.5 py-1 text-[11px] font-semibold text-slateink">
                {loc(language, SOON_TITLE)}
              </p>
              <p className="mt-3 text-sm text-slateink">{loc(language, SOON_SUB)}</p>
            </div>
          </div>
        </div>
      </PageChrome>
    );
  }

  return (
    <PageChrome>
      <LessonRunner key={lesson.slug} lesson={lesson} />
    </PageChrome>
  );
};

export default LessonPage;
