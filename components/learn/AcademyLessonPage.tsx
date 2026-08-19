import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  ListChecks,
  Sigma,
  XCircle,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  directionById,
  pickGradeContent,
  pickLangField,
  pickLangFieldOptional,
  planetBySlug,
  type AcademySection,
} from '../../constants/academy/catalog.ts';
import { loadPlanetProgress, markLessonRead, markSectionCompleted } from './PlanetLevels.tsx';
import { buildSkipTest } from './PlanetSkipTest.tsx';

/* Lesson completion is written to the planet's localStorage progress
   (novex.planet.<slug>, see PlanetLevels.tsx) — DB persistence to
   lesson_progress is a later pass. */

/* --- content --- */

const NOT_FOUND_TITLE: Localized = {
  ru: 'Тема не найдена',
  kk: 'Тақырып табылмады',
  en: 'Topic not found',
};
const NOT_FOUND_SUB: Localized = {
  ru: 'Такой темы нет в этом модуле. Вернись к списку тем.',
  kk: 'Бұл модульде мұндай тақырып жоқ. Тақырыптар тізіміне орал.',
  en: 'There is no such topic in this module. Head back to the topic list.',
};
const BACK_TO_PLANET: Localized = {
  ru: 'Назад к модулю',
  kk: 'Модульге оралу',
  en: 'Back to module',
};
/* Displayed direction codes were renumbered NOV-04/05/06 → NOV-01/02/03;
   internal AcademyDirectionId keys stay 'nov04'|'nov05'|'nov06'. */
const DIRECTION_CODE = {
  nov04: 'NOV-01',
  nov05: 'NOV-02',
  nov06: 'NOV-03',
} as const;

const THEORY_LABEL: Localized = { ru: 'Теория', kk: 'Теория', en: 'Theory' };
const KEY_TERMS_LABEL: Localized = {
  ru: 'Ключевые термины',
  kk: 'Негізгі терминдер',
  en: 'Key terms',
};
const KEY_FORMULAS_LABEL: Localized = {
  ru: 'Ключевые формулы',
  kk: 'Негізгі формулалар',
  en: 'Key formulas',
};
const EXAMPLES_LABEL: Localized = {
  ru: 'Разобранные примеры',
  kk: 'Талданған мысалдар',
  en: 'Worked examples',
};
const EXAMPLE_BADGE: Localized = { ru: 'Пример', kk: 'Мысал', en: 'Example' };
const ANSWER_LABEL: Localized = { ru: 'Ответ', kk: 'Жауап', en: 'Answer' };
const PRACTICE_LABEL: Localized = { ru: 'Практика', kk: 'Практика', en: 'Practice' };
const PROBLEM_BADGE: Localized = { ru: 'Задача', kk: 'Тапсырма', en: 'Problem' };
const HINT_LABEL: Localized = { ru: 'Подсказка', kk: 'Кеңес', en: 'Hint' };
const SHOW_SOLUTION: Localized = {
  ru: 'Показать решение',
  kk: 'Шешімді көрсету',
  en: 'Show solution',
};
const HIDE_SOLUTION: Localized = {
  ru: 'Скрыть решение',
  kk: 'Шешімді жасыру',
  en: 'Hide solution',
};
const CHECK_ANSWER: Localized = { ru: 'Проверить', kk: 'Тексеру', en: 'Check' };
const ANSWER_CORRECT: Localized = { ru: 'Верно!', kk: 'Дұрыс!', en: 'Correct!' };
const ANSWER_WRONG: Localized = {
  ru: 'Пока нет — попробуй ещё',
  kk: 'Әзірге жоқ — тағы көріп көр',
  en: 'Not quite — try again',
};
const YOUR_ANSWER_LABEL: Localized = { ru: 'Твой ответ', kk: 'Жауабың', en: 'Your answer' };
const COMPLETE_LESSON: Localized = {
  ru: 'Завершить урок',
  kk: 'Сабақты аяқтау',
  en: 'Complete lesson',
};
const COMPLETE_HINT: Localized = {
  ru: 'Урок прочитан до конца? Засчитай его и переходи к следующему уровню.',
  kk: 'Сабақты соңына дейін оқыдың ба? Оны есепке алып, келесі деңгейге өт.',
  en: 'Finished the lesson? Mark it complete and move on to the next level.',
};
const GO_TO_LEVEL_TEST: Localized = {
  ru: 'К тесту уровня',
  kk: 'Деңгей тестіне',
  en: 'To the level test',
};
const GO_TO_TEST_HINT: Localized = {
  ru: 'Урок прочитан до конца? Пройди короткий тест по теме, чтобы засчитать уровень.',
  kk: 'Сабақты соңына дейін оқыдың ба? Деңгейді есепке алу үшін тақырып бойынша қысқа тест тапсыр.',
  en: 'Finished the lesson? Take a short test on this topic to complete the level.',
};
const LESSON_DONE_TITLE: Localized = {
  ru: 'Урок пройден!',
  kk: 'Сабақ өтілді!',
  en: 'Lesson completed!',
};
const LESSON_DONE_SUB: Localized = {
  ru: 'Прогресс сохранён — уровень модуля засчитан.',
  kk: 'Прогресс сақталды — модуль деңгейі есепке алынды.',
  en: 'Progress saved — the module level is complete.',
};

const DIFFICULTY_LABEL: Record<'easy' | 'medium' | 'hard', Localized> = {
  easy: { ru: 'Лёгкая', kk: 'Жеңіл', en: 'Easy' },
  medium: { ru: 'Средняя', kk: 'Орташа', en: 'Medium' },
  hard: { ru: 'Сложная', kk: 'Қиын', en: 'Hard' },
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

type PracticeProblem = AcademySection['practiceProblems'][number];

/* --- answer checking (practice cards) ---
   Normalizes both sides (trim, lowercase, collapse whitespace, strip a
   trailing period). When both the user's text and the stored answer contain
   a parseable number (',' accepted as a decimal separator), the first
   numbers are compared numerically — this lets a short numeric answer
   ("375", "$375") match a verbose stored answer ("$375 surplus per month").
   Otherwise it falls back to full normalized-string equality. Checked
   against every localized answer variant (en/ru/kk) so a Russian-phrased
   answer also passes. */

const normalizeAnswer = (value: string): string =>
  value.trim().toLowerCase().replace(/\s+/g, ' ').replace(/\.+$/, '');

const firstNumber = (value: string): number | null => {
  const match = value.replace(/,/g, '.').match(/-?\d+(?:\.\d+)?/);
  if (!match) return null;
  const n = Number.parseFloat(match[0]);
  return Number.isFinite(n) ? n : null;
};

const answerMatches = (userInput: string, stored: string): boolean => {
  const normalizedUser = normalizeAnswer(userInput);
  if (normalizedUser.length === 0) return false;
  const userNumber = firstNumber(userInput);
  const storedNumber = firstNumber(stored);
  if (userNumber !== null && storedNumber !== null) {
    return Math.abs(userNumber - storedNumber) < 1e-9;
  }
  return normalizedUser === normalizeAnswer(stored);
};

const answerVariants = (problem: PracticeProblem): string[] => {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of [problem.answer, problem.answerRu, problem.answerKk]) {
    if (!value || value.trim().length === 0) continue;
    const key = normalizeAnswer(value);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out;
};

/** One free-form practice problem: question + hint + answer check + expandable solution. */
const PracticeProblemCard: React.FC<{ problem: PracticeProblem; index: number }> = ({
  problem,
  index,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [answerInput, setAnswerInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const hint = pickLangFieldOptional(language, problem.hint ?? '', problem.hintRu, problem.hintKk);
  const solved = status === 'correct';
  const solutionVisible = open || solved;

  const handleCheck = () => {
    if (answerInput.trim().length === 0) return;
    const correct = answerVariants(problem).some((variant) => answerMatches(answerInput, variant));
    setStatus(correct ? 'correct' : 'wrong');
  };

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={CARD}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
          {loc(language, PROBLEM_BADGE)} {index + 1}
        </span>
        <span className="inline-flex items-center rounded-full bg-mist/30 px-2.5 py-1 text-xs font-semibold text-teal-dark">
          {loc(language, DIFFICULTY_LABEL[problem.difficulty])}
        </span>
        <span className="text-xs font-semibold text-slateink">+{problem.xp} XP</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-ink sm:text-base">
        {pickLangField(language, problem.question, problem.questionRu, problem.questionKk)}
      </p>
      {hint.trim().length > 0 && (
        <p className="mt-3 flex items-start gap-2 rounded-xl border border-teal/20 bg-mist/20 px-4 py-3 text-sm leading-relaxed text-ink">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
          <span>
            <span className="font-semibold text-teal-dark">{loc(language, HINT_LABEL)}: </span>
            {hint}
          </span>
        </p>
      )}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          value={answerInput}
          disabled={solved}
          onChange={(e) => {
            setAnswerInput(e.target.value);
            if (status === 'wrong') setStatus('idle');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleCheck();
            }
          }}
          aria-label={loc(language, YOUR_ANSWER_LABEL)}
          className={`${FOCUS_RING} min-w-0 flex-1 rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slateink/60 disabled:cursor-not-allowed disabled:bg-mist/20 disabled:text-slateink`}
        />
        <button
          type="button"
          onClick={handleCheck}
          disabled={solved || answerInput.trim().length === 0}
          className={`${FOCUS_RING} inline-flex shrink-0 items-center justify-center rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {loc(language, CHECK_ANSWER)}
        </button>
      </div>
      {status === 'wrong' && (
        <p
          aria-live="polite"
          className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-coral"
        >
          <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {loc(language, ANSWER_WRONG)}
        </p>
      )}
      {solved && (
        <p
          aria-live="polite"
          className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-dark"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          {loc(language, ANSWER_CORRECT)}
        </p>
      )}
      {!solved && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`${FOCUS_RING} mt-4 inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
        >
          {loc(language, open ? HIDE_SOLUTION : SHOW_SOLUTION)}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}
      {solutionVisible && (
        <div
          aria-live="polite"
          className="mt-4 rounded-xl border border-teal/25 bg-mist/15 px-4 py-3"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
            {loc(language, ANSWER_LABEL)}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink">
            {pickLangFieldOptional(language, problem.answer, problem.answerRu, problem.answerKk)}
          </p>
        </div>
      )}
    </motion.article>
  );
};

/** One academy topic (a planet section) rendered as a rich read-only lesson. */
const AcademyLessonPage: React.FC = () => {
  const { planet: planetSlug, sectionIndex: sectionParam } = useParams<{
    planet: string;
    sectionIndex: string;
  }>();
  const { language } = useLanguage();
  const { profile } = useAuth();
  const reducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const planet = planetSlug ? planetBySlug(planetSlug) : undefined;
  const direction = planet ? directionById(planet.directionId) : undefined;
  const content = planet ? pickGradeContent(planet.lessons, profile?.grade ?? null) : undefined;
  const sectionIndex = sectionParam ? Number.parseInt(sectionParam, 10) : Number.NaN;
  const section =
    content && Number.isInteger(sectionIndex) ? content.sections[sectionIndex] : undefined;

  const [lessonDone, setLessonDone] = useState(false);

  // Completion comes from the planet's localStorage progress; re-read on every
  // planet/section change so same-route param changes stay correct.
  useEffect(() => {
    if (planet && Number.isInteger(sectionIndex)) {
      setLessonDone(loadPlanetProgress(planet.slug).completedSections.includes(sectionIndex));
    } else {
      setLessonDone(false);
    }
  }, [planet, sectionIndex]);

  if (!planet || !direction || !content || !section) {
    return (
      <main className="relative min-h-screen bg-canvas font-sans text-ink">
        <RobotBackdrop density="subtle" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
          <Link
            to={planet ? `/learn/p/${planet.slug}` : '/learn'}
            className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK_TO_PLANET)}
          </Link>
          <div className={`${CARD} mt-8`}>
            <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {loc(language, NOT_FOUND_TITLE)}
            </h1>
            <p className="mt-2 text-sm text-slateink">{loc(language, NOT_FOUND_SUB)}</p>
          </div>
        </div>
      </main>
    );
  }

  const directionLine = `${DIRECTION_CODE[direction.id]} · ${loc(language, direction.name)}`;
  const paragraphs = pickLangField(language, section.content, section.contentRu, section.contentKk)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  // Sections that can generate a level test go Урок → Тест → Уровень пройден;
  // sections that can't (too few practice problems/key terms) keep the old
  // complete-directly behavior.
  const hasLevelTest = buildSkipTest(section, language, content.sections) !== null;

  const handleCompleteLesson = () => {
    if (!Number.isInteger(sectionIndex)) return;
    if (hasLevelTest) {
      markLessonRead(planet.slug, sectionIndex);
      navigate(`/learn/p/${planet.slug}?test=${sectionIndex}`);
    } else {
      markSectionCompleted(planet.slug, sectionIndex);
      navigate(`/learn/p/${planet.slug}`);
    }
  };

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="academy-lesson" aria-labelledby="academy-lesson-heading">
          <Link
            to={`/learn/p/${planet.slug}`}
            className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK_TO_PLANET)} · {loc(language, planet.name)}
          </Link>

          <div className="mt-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
              {directionLine} · {loc(language, planet.name)}
            </p>
            <h1
              id="academy-lesson-heading"
              className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
            >
              {pickLangField(language, section.title, section.titleRu, section.titleKk)}
            </h1>
          </div>

          {/* theory */}
          <motion.article
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className={`${CARD} mt-6`}
          >
            <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, THEORY_LABEL)}
            </p>
            <div className="mt-3 space-y-3">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* key terms */}
          {section.keyTerms && section.keyTerms.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                {loc(language, KEY_TERMS_LABEL)}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {section.keyTerms.map((term, i) => (
                  <motion.div
                    key={i}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                  >
                    <h3 className="font-display text-sm font-bold tracking-tight text-teal-dark">
                      {pickLangField(language, term.term, term.termRu, term.termKk)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {pickLangField(
                        language,
                        term.definition,
                        term.definitionRu,
                        term.definitionKk,
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* key formulas */}
          {section.keyFormulas && section.keyFormulas.length > 0 && (
            <div className="mt-8">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/30 text-teal-dark">
                  <Sigma className="h-4 w-4" aria-hidden="true" />
                </span>
                {loc(language, KEY_FORMULAS_LABEL)}
              </h2>
              <div className="mt-4 space-y-3">
                {section.keyFormulas.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-2xl border border-teal/20 bg-mist/15 p-5"
                  >
                    {/* formulaRu/formulaKk only exist on formulas with English
                        prose; pickLangFieldOptional falls back ru→en, kk→ru→en.
                        Rendered as plain styled text — no tex/LaTeX path here. */}
                    <p className="font-mono text-sm font-semibold text-ink">
                      {pickLangFieldOptional(language, item.formula, item.formulaRu, item.formulaKk)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slateink">
                      {pickLangField(
                        language,
                        item.description,
                        item.descriptionRu,
                        item.descriptionKk,
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* worked examples — numbered step-by-step walkthroughs */}
          {section.solvedExamples.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                {loc(language, EXAMPLES_LABEL)}
              </h2>
              <div className="mt-4 space-y-4">
                {section.solvedExamples.map((example, exampleIndex) => (
                  <motion.article
                    key={exampleIndex}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4 }}
                    className={CARD}
                  >
                    <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                      {loc(language, EXAMPLE_BADGE)} {exampleIndex + 1}
                    </p>
                    <h3 className="mt-1.5 font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                      {pickLangField(language, example.question, example.questionRu, example.questionKk)}
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {example.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/10 font-mono text-[11px] font-semibold text-teal-dark"
                          >
                            {stepIndex + 1}
                          </span>
                          <p className="min-w-0 flex-1 pt-0.5 text-sm leading-relaxed text-ink">
                            {pickLangField(language, step.en, step.ru, step.kk)}
                          </p>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4 rounded-xl border border-teal/25 bg-mist/15 px-4 py-3">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                        {loc(language, ANSWER_LABEL)}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-ink">
                        {pickLangFieldOptional(language, example.answer, example.answerRu, example.answerKk)}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* practice — free-form problems with expandable solutions */}
          {section.practiceProblems.length > 0 && (
            <div className="mt-8">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/30 text-teal-dark">
                  <ListChecks className="h-4 w-4" aria-hidden="true" />
                </span>
                {loc(language, PRACTICE_LABEL)}
              </h2>
              <div className="mt-4 space-y-4">
                {section.practiceProblems.map((problem, i) => (
                  <PracticeProblemCard key={i} problem={problem} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* completion — writes the planet progress, unlocks the next level */}
          <div className={`${CARD} mt-8 flex flex-col items-center text-center`}>
            {lessonDone ? (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist/40 text-teal">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-3 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {loc(language, LESSON_DONE_TITLE)}
                </p>
                <p className="mt-1 text-sm text-slateink">{loc(language, LESSON_DONE_SUB)}</p>
                <Link
                  to={`/learn/p/${planet.slug}`}
                  className={`${FOCUS_RING} mt-4 inline-flex items-center rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  {loc(language, BACK_TO_PLANET)}
                </Link>
              </>
            ) : (
              <>
                <p className="max-w-md text-sm leading-relaxed text-slateink">
                  {loc(language, hasLevelTest ? GO_TO_TEST_HINT : COMPLETE_HINT)}
                </p>
                <button
                  type="button"
                  onClick={handleCompleteLesson}
                  className={`${FOCUS_RING} mt-4 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  {loc(language, hasLevelTest ? GO_TO_LEVEL_TEST : COMPLETE_LESSON)}
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AcademyLessonPage;
