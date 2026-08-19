import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  BookOpen,
  Calculator,
  Check,
  ChevronRight,
  Cpu,
  Dna,
  FlaskConical,
  GraduationCap,
  Landmark,
  Languages,
  ListChecks,
  Loader2,
  RotateCcw,
  School,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth, type Goal } from '../../context/AuthContext.tsx';
import { shuffleOptions } from '../../services/practiceService.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import DiagnosticResult from './DiagnosticResult.tsx';
import {
  DIAGNOSTIC_SUBJECTS,
  buildResults,
  hardQuestionsForSubject,
  questionsForSubject,
  type AnswerRecord,
  type DiagnosticSubject,
  type SubjectResult,
} from '../../constants/diagnosticData.ts';

/* --- content --- */

const WORDMARK: Localized = { ru: 'Novex', kk: 'Novex', en: 'Novex' };
const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Диагност',
  kk: 'NOV-01 · Диагност',
  en: 'NOV-01 · Diagnostician',
};
const LOADING: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const PROBE_TITLE: Localized = {
  ru: 'Тест уровнем выше',
  kk: 'Бір деңгей жоғары тест',
  en: 'Next-level test',
};
const SETUP_TITLE: Localized = {
  ru: 'Диагностика уровня',
  kk: 'Деңгей диагностикасы',
  en: 'Level diagnostic',
};
const SETUP_SUB: Localized = {
  ru: 'NOV-01 задаст несколько вопросов и сам подстроит сложность под твои ответы. Это займёт пару минут.',
  kk: 'NOV-01 бірнеше сұрақ қойып, қиындықты жауаптарыңа сай өзі баптайды. Бұл бірнеше минут алады.',
  en: 'NOV-01 will ask a few questions and tune the difficulty to your answers. It takes a couple of minutes.',
};
const GRADE_LABEL: Localized = {
  ru: 'В каком ты классе?',
  kk: 'Қай сыныпта оқисың?',
  en: 'Which grade are you in?',
};
const GOAL_LABEL: Localized = {
  ru: 'Какая у тебя цель?',
  kk: 'Мақсатың қандай?',
  en: 'What is your goal?',
};
const GOAL_HINT: Localized = {
  ru: 'Можно выбрать несколько.',
  kk: 'Бірнешеуін таңдауға болады.',
  en: 'You can pick several.',
};
const SUBJECTS_LABEL: Localized = {
  ru: 'Предметы, которые ты бы хотел изучать',
  kk: 'Оқығың келетін пәндер',
  en: 'Subjects you would like to study',
};
const SUBJECTS_HINT: Localized = {
  ru: 'Выбери от одного до трёх предметов.',
  kk: 'Бірден үш пәнге дейін таңда.',
  en: 'Pick between one and three subjects.',
};
const START_BTN: Localized = {
  ru: 'Начать диагностику',
  kk: 'Диагностиканы бастау',
  en: 'Start the diagnostic',
};

const ANSWER_BTN: Localized = {
  ru: 'Ответить',
  kk: 'Жауап беру',
  en: 'Answer',
};
const ADAPT_UP: Localized = {
  ru: 'NOV-01 · подстраивает сложность: выше',
  kk: 'NOV-01 · қиындықты баптауда: жоғары',
  en: 'NOV-01 · adapting difficulty: up',
};
const ADAPT_DOWN: Localized = {
  ru: 'NOV-01 · подстраивает сложность: ниже',
  kk: 'NOV-01 · қиындықты баптауда: төмен',
  en: 'NOV-01 · adapting difficulty: down',
};

const counterLine = (lang: 'ru' | 'kk' | 'en', current: number, total: number): string => {
  if (lang === 'kk') return `Сұрақ ${current} / ${total}`;
  if (lang === 'en') return `Question ${current} of ${total}`;
  return `Вопрос ${current} из ${total}`;
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const CHIP =
  'inline-flex items-center justify-center rounded-xl border text-sm font-semibold transition-colors peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas';
const CHIP_ON = 'border-teal bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)]';
const CHIP_OFF = 'border-line bg-white text-ink hover:border-teal/60 hover:text-teal';

const GRADES: readonly number[] = [7, 8, 9, 10, 11, 12];
const MAX_SUBJECTS = 3;
/** Questions asked per subject in one run (fewer when the grade band pool is smaller). */
const QUESTIONS_PER_RUN = 10;

const SUBJECT_ICONS: Record<DiagnosticSubject, React.ReactNode> = {
  math: <Calculator className="h-4 w-4" aria-hidden="true" />,
  physics: <Atom className="h-4 w-4" aria-hidden="true" />,
  chemistry: <FlaskConical className="h-4 w-4" aria-hidden="true" />,
  biology: <Dna className="h-4 w-4" aria-hidden="true" />,
  informatics: <Cpu className="h-4 w-4" aria-hidden="true" />,
  kazakh: <BookOpen className="h-4 w-4" aria-hidden="true" />,
  english: <Languages className="h-4 w-4" aria-hidden="true" />,
  history: <Landmark className="h-4 w-4" aria-hidden="true" />,
};

const GOAL_OPTIONS: readonly { value: Goal; label: Localized; icon: React.ReactNode }[] = [
  {
    value: 'ent',
    label: { ru: 'ЕНТ', kk: 'ҰБТ', en: 'ENT' },
    icon: <GraduationCap className="h-4 w-4" aria-hidden="true" />,
  },
  {
    value: 'olympiad',
    label: { ru: 'Олимпиада', kk: 'Олимпиада', en: 'Olympiad' },
    icon: <Trophy className="h-4 w-4" aria-hidden="true" />,
  },
  {
    value: 'revision',
    label: { ru: 'Повторение темы', kk: 'Тақырыпты қайталау', en: 'Topic revision' },
    icon: <RotateCcw className="h-4 w-4" aria-hidden="true" />,
  },
  {
    value: 'admission',
    label: { ru: 'Поступление', kk: 'Оқуға түсу', en: 'Admission' },
    icon: <School className="h-4 w-4" aria-hidden="true" />,
  },
];

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

type Phase = 'setup' | 'quiz' | 'result';

const DiagnosticPage: React.FC = () => {
  const { language } = useLanguage();
  const { profile, loading, updateProfile } = useAuth();
  const reducedMotion = useReducedMotion();
  const [searchParams] = useSearchParams();

  // Grade-up probe mode: /onboarding?probe=<subject> skips setup and runs
  // only the hardest questions of that one subject.
  const probeParam = searchParams.get('probe');
  const probeSubject: DiagnosticSubject | null = DIAGNOSTIC_SUBJECTS.some(
    (s) => s.slug === probeParam,
  )
    ? (probeParam as DiagnosticSubject)
    : null;

  const [phase, setPhase] = useState<Phase>(probeSubject ? 'quiz' : 'setup');
  const [grade, setGrade] = useState<number | null>(null);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [picked, setPicked] = useState<DiagnosticSubject[]>(
    probeSubject ? [probeSubject] : [],
  );

  // quiz state
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [askedIds, setAskedIds] = useState<string[]>([]);
  const [cursor, setCursor] = useState(0);
  const [streak, setStreak] = useState(0);
  const [adapted, setAdapted] = useState<'up' | 'down' | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<SubjectResult[] | null>(null);
  // Bumped on every quiz start so each run gets a fresh option order.
  const [runSeed, setRunSeed] = useState(0);

  const hydratedRef = useRef(false);
  const questionHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // prefill grade and subjects from the profile once it arrives
  useEffect(() => {
    if (profile && !hydratedRef.current) {
      hydratedRef.current = true;
      setGrade(profile.grade);
      setGoals(profile.goals);
      if (!probeSubject) {
        setPicked(
          profile.subjects.filter((s): s is DiagnosticSubject =>
            DIAGNOSTIC_SUBJECTS.some((d) => d.slug === s),
          ),
        );
      }
    }
  }, [profile, probeSubject]);

  const activeSubject = picked[subjectIndex];
  // In probe mode the grade comes from the profile (the student already onboarded).
  const effectiveGrade = grade ?? profile?.grade ?? null;
  // Options are shuffled ONCE per run (frozen in this memo) — answer records
  // key on question id and scoring uses the remapped correctIndex.
  const subjectQuestions = useMemo(() => {
    const g = effectiveGrade ?? undefined;
    const bank = activeSubject
      ? probeSubject
        ? hardQuestionsForSubject(activeSubject, g)
        : questionsForSubject(activeSubject, g)
      : [];
    return bank.map((q, i) => {
      const shuffled = shuffleOptions(q.options, q.correctIndex, runSeed * 31 + i + 1);
      return { ...q, options: shuffled.options, correctIndex: shuffled.correctIndex };
    });
  }, [activeSubject, probeSubject, runSeed, effectiveGrade]);
  const currentQuestion = subjectQuestions[cursor] ?? null;
  // A run is QUESTIONS_PER_RUN answers per subject, or the whole (band-filtered)
  // pool when it is smaller. Probe runs always take the full hard-question pool.
  const runLength = probeSubject
    ? subjectQuestions.length
    : Math.min(QUESTIONS_PER_RUN, subjectQuestions.length);

  // move focus to the question whenever it changes
  useEffect(() => {
    if (phase === 'quiz' && currentQuestion) {
      questionHeadingRef.current?.focus();
    }
  }, [phase, currentQuestion]);

  if (loading) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const toggleSubject = (slug: DiagnosticSubject) =>
    setPicked((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length >= MAX_SUBJECTS
          ? prev
          : [...prev, slug],
    );

  const toggleGoal = (value: Goal) =>
    setGoals((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value],
    );

  const startQuiz = () => {
    if (!grade || goals.length === 0 || picked.length === 0) return;
    // Persist the chosen goals right away (the legacy goal column is rewritten
    // as goals[0] by updateProfile; DiagnosticResult re-saves it with the rest
    // of the onboarding fields when the run finishes).
    void updateProfile({ goals: [...goals] });
    setRunSeed((s) => s + 1);
    setAnswers([]);
    setSubjectIndex(0);
    setAskedIds([]);
    setCursor(0);
    setStreak(0);
    setAdapted(null);
    setSelected(null);
    setResults(null);
    setPhase('quiz');
  };

  const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentQuestion || selected === null || !activeSubject) return;

    const correct = selected === currentQuestion.correctIndex;
    const nextAnswers: AnswerRecord[] = [
      ...answers,
      {
        questionId: currentQuestion.id,
        subject: currentQuestion.subject,
        topic: currentQuestion.topic,
        topicLabel: currentQuestion.topicLabel,
        correct,
      },
    ];
    const nextAsked = [...askedIds, currentQuestion.id];
    const nextStreak = correct ? Math.max(streak, 0) + 1 : Math.min(streak, 0) - 1;

    // adaptive pick: two right in a row → hardest unasked, two wrong → easiest;
    // the subject run ends after runLength answers or when the pool is exhausted
    const unasked = subjectQuestions
      .map((_, i) => i)
      .filter((i) => !nextAsked.includes(subjectQuestions[i].id));
    const subjectDone = nextAsked.length >= runLength || unasked.length === 0;
    let next: number | null = null;
    let adapt: 'up' | 'down' | null = null;
    if (!subjectDone) {
      if (nextStreak >= 2) {
        adapt = 'up';
        next = unasked.reduce((best, i) => {
          const a = subjectQuestions[best];
          const b = subjectQuestions[i];
          return b.difficulty > a.difficulty || (b.difficulty === a.difficulty && i > best)
            ? i
            : best;
        });
      } else if (nextStreak <= -2) {
        adapt = 'down';
        next = unasked.reduce((best, i) => {
          const a = subjectQuestions[best];
          const b = subjectQuestions[i];
          return b.difficulty < a.difficulty || (b.difficulty === a.difficulty && i < best)
            ? i
            : best;
        });
      } else {
        next = unasked.find((i) => i > cursor) ?? unasked[0];
      }
    }

    setAnswers(nextAnswers);
    setSelected(null);
    setAdapted(adapt);

    if (next !== null) {
      setAskedIds(nextAsked);
      setCursor(next);
      setStreak(adapt ? 0 : nextStreak);
    } else if (subjectIndex + 1 < picked.length) {
      // subject exhausted — hand over to the next one
      setSubjectIndex(subjectIndex + 1);
      setAskedIds([]);
      setCursor(0);
      setStreak(0);
    } else {
      setResults(buildResults(picked, nextAnswers));
      setPhase('result');
    }
  };

  const totalQuestions = probeSubject
    ? subjectQuestions.length
    : picked.reduce(
        (sum, s) =>
          sum +
          Math.min(
            QUESTIONS_PER_RUN,
            questionsForSubject(s, effectiveGrade ?? undefined).length,
          ),
        0,
      );
  const answeredCount = answers.length;
  const activeSubjectLabel =
    DIAGNOSTIC_SUBJECTS.find((s) => s.slug === activeSubject)?.label ?? { ru: '', kk: '', en: '' };

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className={`${FOCUS_RING} rounded font-display text-xl font-extrabold tracking-tight text-teal-dark`}
          >
            {loc(language, WORDMARK)}
          </Link>
        </div>

        <section id="diagnostic" aria-labelledby="diagnostic-heading">
          {phase === 'setup' && (
            <div className={CARD}>
              <div className="flex items-start gap-4">
                <RobotAvatar robot="nov1" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, ROBOT_LABEL)}
                  </p>
                  <h1
                    id="diagnostic-heading"
                    className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
                  >
                    {loc(language, SETUP_TITLE)}
                  </h1>
                  <p className="mt-1 text-sm text-slateink">{loc(language, SETUP_SUB)}</p>
                </div>
              </div>

              <fieldset className="mt-7">
                <legend className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <GraduationCap className="h-4 w-4 text-teal" aria-hidden="true" />
                  {loc(language, GRADE_LABEL)}
                </legend>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {GRADES.map((g) => (
                    <label key={g} className="cursor-pointer">
                      <input
                        type="radio"
                        name="diagnostic-grade"
                        value={g}
                        checked={grade === g}
                        onChange={() => setGrade(g)}
                        className="peer sr-only"
                      />
                      <span className={`${CHIP} h-11 w-11 ${grade === g ? CHIP_ON : CHIP_OFF}`}>
                        {g}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Target className="h-4 w-4 text-teal" aria-hidden="true" />
                  {loc(language, GOAL_LABEL)}
                </legend>
                <p className="mt-1 text-xs text-slateink">{loc(language, GOAL_HINT)}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {GOAL_OPTIONS.map((g) => {
                    const isPicked = goals.includes(g.value);
                    return (
                      <label key={g.value} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="diagnostic-goals"
                          value={g.value}
                          checked={isPicked}
                          onChange={() => toggleGoal(g.value)}
                          className="peer sr-only"
                        />
                        <span
                          className={`${CHIP} gap-1.5 px-4 py-2.5 ${isPicked ? CHIP_ON : CHIP_OFF}`}
                        >
                          {g.icon}
                          {loc(language, g.label)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <ListChecks className="h-4 w-4 text-teal" aria-hidden="true" />
                  {loc(language, SUBJECTS_LABEL)}
                </legend>
                <p className="mt-1 text-xs text-slateink">{loc(language, SUBJECTS_HINT)}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {DIAGNOSTIC_SUBJECTS.map((s) => {
                    const isPicked = picked.includes(s.slug);
                    return (
                      <label key={s.slug} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="diagnostic-subjects"
                          value={s.slug}
                          checked={isPicked}
                          onChange={() => toggleSubject(s.slug)}
                          className="peer sr-only"
                        />
                        <span
                          className={`${CHIP} gap-1.5 px-4 py-2.5 ${isPicked ? CHIP_ON : CHIP_OFF}`}
                        >
                          {isPicked ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            SUBJECT_ICONS[s.slug]
                          )}
                          {loc(language, s.label)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <button
                type="button"
                disabled={!grade || goals.length === 0 || picked.length === 0}
                onClick={startQuiz}
                className={`${FOCUS_RING} mt-8 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`}
              >
                {loc(language, START_BTN)}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}

          {phase === 'quiz' && currentQuestion && (
            <div>
              {probeSubject && (
                <h1
                  id="diagnostic-heading"
                  className="mb-4 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
                >
                  {loc(language, PROBE_TITLE)} · {loc(language, activeSubjectLabel)}
                </h1>
              )}
              {/* progress */}
              <div className="flex items-center justify-between gap-3">
                <p aria-live="polite" className="text-sm font-semibold text-ink">
                  {counterLine(language, answeredCount + 1, totalQuestions)}
                  <span className="ml-2 font-normal text-slateink">
                    · {loc(language, activeSubjectLabel)}
                  </span>
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
                aria-valuenow={answeredCount}
              >
                <div
                  className="h-full rounded-full bg-teal transition-all duration-300"
                  style={{ width: `${Math.round((answeredCount / totalQuestions) * 100)}%` }}
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
                  <div className="flex items-start gap-4">
                    <RobotAvatar robot="nov1" className="h-10 w-10 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                        {loc(language, currentQuestion.topicLabel)}
                      </p>
                      {adapted && (
                        <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                          {adapted === 'up' ? (
                            <TrendingUp className="h-3 w-3" aria-hidden="true" />
                          ) : (
                            <TrendingDown className="h-3 w-3" aria-hidden="true" />
                          )}
                          {loc(language, adapted === 'up' ? ADAPT_UP : ADAPT_DOWN)}
                        </p>
                      )}
                    </div>
                  </div>

                  <h2
                    ref={questionHeadingRef}
                    tabIndex={-1}
                    className="mt-4 font-display text-xl font-bold tracking-tight text-ink focus:outline-none sm:text-2xl"
                  >
                    {loc(language, currentQuestion.question)}
                  </h2>

                  <form onSubmit={submitAnswer} className="mt-5">
                    <fieldset>
                      <legend className="sr-only">
                        {loc(language, currentQuestion.question)}
                      </legend>
                      <div className="space-y-2.5">
                        {currentQuestion.options.map((option, i) => (
                          <label key={i} className="block cursor-pointer">
                            <input
                              type="radio"
                              name={`answer-${currentQuestion.id}`}
                              value={i}
                              checked={selected === i}
                              onChange={() => setSelected(i)}
                              className="peer sr-only"
                            />
                            <span className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-teal/60 peer-checked:border-teal peer-checked:bg-teal/10 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas">
                              <span
                                aria-hidden="true"
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist/30 font-mono text-[11px] font-semibold text-teal-dark"
                              >
                                {OPTION_LETTERS[i]}
                              </span>
                              {loc(language, option)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <button
                      type="submit"
                      disabled={selected === null}
                      className={`${FOCUS_RING} mt-5 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`}
                    >
                      {loc(language, ANSWER_BTN)}
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {phase === 'result' && results && effectiveGrade !== null && (
            <DiagnosticResult
              results={results}
              grade={effectiveGrade}
              subjects={picked}
              goal={goals[0] ?? null}
              isProbe={probeSubject !== null}
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default DiagnosticPage;
