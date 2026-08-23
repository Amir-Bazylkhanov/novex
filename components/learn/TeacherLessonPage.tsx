import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  Check,
  ChevronRight,
  ListChecks,
  Loader2,
  RotateCcw,
  Users,
  X,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { shuffleOptions } from '../../services/practiceService.ts';

// ============================================================
// Страница одного урока, который создал учитель (/learn/class-lesson/:id).
// Видна только ученикам класса, для которого урок опубликован — это
// проверяется в базе данных (RLS), не на этой странице. Показывает
// теорию учителя, затем короткий тест по ней, а в конце — результат
// с возможностью пройти тест ещё раз.
// ============================================================

/* --- content --- */

const WORDMARK: Localized = { ru: 'Novex', kk: 'Novex', en: 'Novex' };
const BACK: Localized = {
  ru: 'К урокам',
  kk: 'Сабақтарға',
  en: 'Back to lessons',
};
const LOADING: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const NOT_FOUND_TITLE: Localized = {
  ru: 'Урок не найден',
  kk: 'Сабақ табылмады',
  en: 'Lesson not found',
};
const NOT_FOUND_SUB: Localized = {
  ru: 'Этот урок не существует или у тебя нет к нему доступа — он виден только ученикам класса.',
  kk: 'Бұл сабақ жоқ немесе оған қолжетімділігің жоқ — оны тек сол сыныптың оқушылары көре алады.',
  en: 'This lesson does not exist or you do not have access — only members of the class can view it.',
};

const TEACHER_BADGE: Localized = {
  ru: 'Урок учителя',
  kk: 'Мұғалім сабағы',
  en: 'Teacher lesson',
};
const THEORY_LABEL: Localized = { ru: 'Теория', kk: 'Теория', en: 'Theory' };
const START_PRACTICE: Localized = {
  ru: 'Перейти к практике',
  kk: 'Практикаға өту',
  en: 'Start practice',
};
const ANSWER_BTN: Localized = { ru: 'Ответить', kk: 'Жауап беру', en: 'Answer' };
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

const RESULT_TITLE: Localized = { ru: 'Результат', kk: 'Нәтиже', en: 'Result' };
const RETRY_BTN: Localized = {
  ru: 'Пройти ещё раз',
  kk: 'Қайта өту',
  en: 'Try again',
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

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const PRIMARY_BTN = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`;

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

/* --- data --- */

interface TeacherQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface TeacherLesson {
  id: string;
  title: string;
  subject: string;
  theory: string;
  questions: TeacherQuestion[];
}

// Вопросы урока приходят из базы как «сырой» JSON, который заполнял учитель
// вручную, поэтому перед использованием их нужно проверить и отбросить
// всё некорректное (без текста вопроса, без вариантов, без правильного ответа).
/** The questions column is teacher-authored jsonb — validate before trusting it. */
const parseQuestions = (value: unknown): TeacherQuestion[] => {
  if (!Array.isArray(value)) return [];
  const parsed: TeacherQuestion[] = [];
  for (const item of value) {
    if (typeof item !== 'object' || item === null) continue;
    const raw = item as Record<string, unknown>;
    if (typeof raw.q !== 'string' || !Array.isArray(raw.options)) continue;
    const options = raw.options.filter((o): o is string => typeof o === 'string');
    const correct = typeof raw.correct === 'number' ? raw.correct : -1;
    if (options.length < 2 || correct < 0 || correct >= options.length) continue;
    parsed.push({
      q: raw.q,
      options,
      correct,
      explanation: typeof raw.explanation === 'string' ? raw.explanation : '',
    });
  }
  return parsed;
};

type Phase = 'theory' | 'quiz' | 'done';

// Общая «рамка» страницы: логотип и кнопка «Назад» — одинаковая для всех
// состояний (загрузка, урок не найден, сам урок).
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

/**
 * One teacher-authored lesson: theory paragraphs, then a linear scored quiz.
 * Mirrors the platform lesson answer flow, minus XP and progress writes.
 */
// Сам урок учителя: сначала показывается теория, потом ученик проходит
// вопросы один за другим, в конце видит счёт и может пройти ещё раз.
// В отличие от обычных уроков платформы, здесь НЕ начисляется опыт (XP)
// и прогресс ученика — это упрощённый, «домашний» формат учителя.
const ClassLessonRunner: React.FC<{ lesson: TeacherLesson }> = ({ lesson }) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();

  // phase — на каком этапе урока ученик; cursor — номер текущего вопроса;
  // selected/answered — выбранный вариант и отвечено ли уже на вопрос;
  // correctCount — сколько вопросов пройдено верно; roundSeed — меняется
  // при каждой новой попытке, чтобы варианты ответов перемешивались заново.
  const [phase, setPhase] = useState<Phase>('theory');
  const [cursor, setCursor] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  // Bumped on every practice start so a retake gets a fresh option order.
  const [roundSeed, setRoundSeed] = useState(0);

  const questionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const doneHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // Варианты ответов перемешиваются один раз за попытку (чтобы ученик не
  // запоминал позицию правильного ответа), а индекс правильного варианта
  // пересчитывается под новый порядок.
  // Options are shuffled ONCE per round (frozen in this memo) — the teacher's
  // `correct` index is remapped to the shuffled order.
  const roundQuestions = useMemo(
    () =>
      lesson.questions.map((q, i) => {
        const shuffled = shuffleOptions(q.options, q.correct, roundSeed * 31 + i + 1);
        return { ...q, options: shuffled.options, correct: shuffled.correctIndex };
      }),
    [lesson, roundSeed],
  );

  const totalQuestions = roundQuestions.length;
  const currentQuestion = roundQuestions[cursor] ?? null;
  const theoryParagraphs = lesson.theory
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  // Эти два эффекта переводят фокус на заголовок нового вопроса или на
  // заголовок результата — это помогает пользователям экранных дикторов
  // сразу услышать, что изменилось на странице.
  // move focus to the question whenever it changes
  useEffect(() => {
    if (phase === 'quiz' && currentQuestion) questionHeadingRef.current?.focus();
  }, [phase, currentQuestion]);

  useEffect(() => {
    if (phase === 'done') doneHeadingRef.current?.focus();
  }, [phase]);

  // Запускает прохождение вопросов: перемешивает варианты заново и переводит
  // на первый вопрос.
  const startPractice = () => {
    setRoundSeed((s) => s + 1);
    setCursor(0);
    setSelected(null);
    setAnswered(false);
    setPhase('quiz');
  };

  // Проверяет выбранный ответ и запоминает, верный он или нет.
  const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentQuestion || selected === null || answered) return;
    if (selected === currentQuestion.correct) setCorrectCount((c) => c + 1);
    setAnswered(true);
  };

  // Переходит к следующему вопросу или, если вопросы кончились, — к экрану результата.
  const goNext = () => {
    if (cursor + 1 < totalQuestions) {
      setCursor(cursor + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase('done');
    }
  };

  // Полный сброс урока к началу — снова показывается теория.
  const retry = () => {
    setPhase('theory');
    setCursor(0);
    setSelected(null);
    setAnswered(false);
    setCorrectCount(0);
  };

  return (
    <section id="class-lesson" aria-labelledby="class-lesson-heading">
      {/* lesson header — visible in every phase */}
      <div className="min-w-0">
        <h1
          id="class-lesson-heading"
          className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
        >
          {lesson.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slateink">
          <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 font-semibold text-teal-dark">
            {lesson.subject}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 font-semibold text-teal-dark">
            <Users className="h-3 w-3" aria-hidden="true" />
            {loc(language, TEACHER_BADGE)}
          </span>
          {totalQuestions > 0 && (
            <span className="inline-flex items-center gap-1">
              <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
              {questionsLine(language, totalQuestions)}
            </span>
          )}
        </div>
      </div>

      {/* Этап теории: конспект учителя и кнопка «Перейти к практике». */}
      {/* --- theory --- */}
      {phase === 'theory' && (
        <div className="mt-6 space-y-4">
          {theoryParagraphs.length > 0 && (
            <motion.article
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className={CARD}
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, THEORY_LABEL)}
              </p>
              <div className="mt-3 space-y-3">
                {theoryParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          )}
          {totalQuestions > 0 && (
            <button type="button" onClick={startPractice} className={`${PRIMARY_BTN} mt-2`}>
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              {loc(language, START_PRACTICE)} · {questionsLine(language, totalQuestions)}
            </button>
          )}
        </div>
      )}

      {/* Этап теста: один вопрос за раз с проверкой ответа. */}
      {/* --- quiz --- */}
      {phase === 'quiz' && currentQuestion && (
        <div className="mt-6">
          <p aria-live="polite" className="text-sm font-semibold text-ink">
            {counterLine(language, cursor + 1, totalQuestions)}
          </p>
          <div
            className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist/40"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-valuenow={cursor}
          >
            <div
              className="h-full rounded-full bg-teal transition-all duration-300"
              style={{ width: `${Math.round((cursor / totalQuestions) * 100)}%` }}
            />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={cursor}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className={`${CARD} mt-5`}
            >
              <h2
                ref={questionHeadingRef}
                tabIndex={-1}
                className="font-display text-xl font-bold tracking-tight text-ink focus:outline-none sm:text-2xl"
              >
                {currentQuestion.q}
              </h2>

              <form onSubmit={submitAnswer} className="mt-5">
                <fieldset disabled={answered}>
                  <legend className="sr-only">{currentQuestion.q}</legend>
                  <div className="space-y-2.5">
                    {currentQuestion.options.map((option, i) => {
                      const isCorrect = i === currentQuestion.correct;
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
                        <label key={i} className={answered ? 'block' : 'block cursor-pointer'}>
                          <input
                            type="radio"
                            name={`answer-${cursor}`}
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
                              {OPTION_LETTERS[i] ?? i + 1}
                            </span>
                            <span className="min-w-0 flex-1">{option}</span>
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
                  <button type="submit" disabled={selected === null} className={`${PRIMARY_BTN} mt-5`}>
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
                  <p
                    className={`text-sm font-bold ${
                      selected === currentQuestion.correct ? 'text-teal-dark' : 'text-coral'
                    }`}
                  >
                    {loc(
                      language,
                      selected === currentQuestion.correct ? CORRECT_LABEL : INCORRECT_LABEL,
                    )}
                  </p>
                  {currentQuestion.explanation && (
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {currentQuestion.explanation}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={goNext}
                    className={`${PRIMARY_BTN} mt-4 w-full justify-center sm:w-auto`}
                  >
                    {loc(language, cursor + 1 < totalQuestions ? NEXT_BTN : FINISH_BTN)}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Этап результата: счёт и кнопки «Пройти ещё раз» / «Назад». */}
      {/* --- result --- */}
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
                {loc(language, RESULT_TITLE)}
              </h2>
              <p aria-live="polite" className="mt-1 text-sm font-semibold text-ink sm:text-base">
                {scoreLine(language, correctCount, totalQuestions)}
              </p>
            </div>
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

// Точка входа страницы: по id из адреса загружает урок из базы Supabase
// и показывает либо загрузку, либо «урок не найден», либо сам урок.
const TeacherLessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const [lesson, setLesson] = useState<TeacherLesson | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing'>('loading');

  // Загружаем урок по id из адресной строки. Если строки в базе нет или
  // доступ запрещён политиками безопасности (RLS) — считаем урок «не найден»,
  // отдельно эти два случая не различаем (чтобы не палить чужие id).
  useEffect(() => {
    if (!id) {
      setStatus('missing');
      return;
    }
    let cancelled = false;
    setStatus('loading');
    supabase
      .from('teacher_lessons')
      .select('id, title, subject, theory, questions')
      .eq('id', id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        // RLS hides rows from non-members, so a missing row covers both
        // "no such lesson" and "no access"
        if (error || !data) {
          setStatus('missing');
          return;
        }
        const row = data as {
          id: string;
          title: string;
          subject: string;
          theory: string | null;
          questions: unknown;
        };
        setLesson({
          id: row.id,
          title: row.title,
          subject: row.subject,
          theory: row.theory ?? '',
          questions: parseQuestions(row.questions),
        });
        setStatus('ready');
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (status === 'loading') {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  if (status === 'missing' || !lesson) {
    return (
      <PageChrome>
        <div className={CARD}>
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
            {loc(language, NOT_FOUND_TITLE)}
          </h1>
          <p className="mt-2 text-sm text-slateink">{loc(language, NOT_FOUND_SUB)}</p>
          <Link to="/learn" className={`${PRIMARY_BTN} mt-5`}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK)}
          </Link>
        </div>
      </PageChrome>
    );
  }

  return (
    <PageChrome>
      <ClassLessonRunner key={lesson.id} lesson={lesson} />
    </PageChrome>
  );
};

export default TeacherLessonPage;
