import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Telescope,
  X,
  XCircle,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  pickLangField,
  pickLangFieldOptional,
  type AcademySection,
  type LevelBand,
} from '../../constants/academy/catalog.ts';
import { shuffleOptions } from '../../services/practiceService.ts';

/* --- content --- */

const SKIP_TEST_TITLE: Localized = {
  ru: 'Тест на пропуск уровня',
  kk: 'Деңгейді өткізіп жіберу тесті',
  en: 'Level skip test',
};
const PASS_HINT: Localized = {
  ru: 'Набери 70% правильных ответов — и этот уровень откроется.',
  kk: '70% дұрыс жауап жина — бұл деңгей ашылады.',
  en: 'Score 70% and this level unlocks.',
};
const QUESTION_WORD: Localized = { ru: 'Вопрос', kk: 'Сұрақ', en: 'Question' };
const NEXT_QUESTION: Localized = { ru: 'Далее', kk: 'Келесі', en: 'Next' };
const FINISH_TEST: Localized = { ru: 'Завершить', kk: 'Аяқтау', en: 'Finish' };
const BACK_QUESTION: Localized = { ru: 'Назад', kk: 'Артқа', en: 'Back' };
const PASS_TITLE: Localized = {
  ru: 'Отлично! Уровень разблокирован',
  kk: 'Керемет! Деңгей ашылды',
  en: 'Well done! Level unlocked',
};
const PASS_SUB: Localized = {
  ru: 'Ты подтвердил знания тестом — можно идти дальше.',
  kk: 'Біліміңді тестпен растадың — әрі қарай жалғастыр.',
  en: 'You proved your knowledge — keep going.',
};
const CONTINUE: Localized = { ru: 'Продолжить', kk: 'Жалғастыру', en: 'Continue' };
const FAIL_TITLE: Localized = {
  ru: 'Пока не получилось',
  kk: 'Әзірге шықпады',
  en: 'Not quite yet',
};
const FAIL_SUB: Localized = {
  ru: 'Нужно хотя бы 70%. Загляни в урок предыдущего уровня и попробуй ещё раз.',
  kk: 'Кемінде 70% керек. Алдыңғы деңгей сабағын қарап, қайта көріп көр.',
  en: 'You need at least 70%. Peek at the previous level’s lesson and try again.',
};
const RETRY: Localized = { ru: 'Попробовать снова', kk: 'Қайталап көру', en: 'Try again' };
const LATER: Localized = { ru: 'Позже', kk: 'Кейінірек', en: 'Maybe later' };
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };

/* mode="level" copy — same test-building machinery, worded for the
   Урок → Тест → Уровень пройден in-level flow instead of a skip-ahead test. */
const LEVEL_TEST_TITLE: Localized = { ru: 'Тест уровня', kk: 'Деңгей тесті', en: 'Level test' };
const LEVEL_PASS_HINT: Localized = {
  ru: 'Набери 70% правильных ответов — и уровень будет засчитан.',
  kk: '70% дұрыс жауап жина — деңгей есепке алынады.',
  en: 'Score 70% and this level will be marked complete.',
};
const LEVEL_PASS_TITLE: Localized = {
  ru: 'Отлично! Уровень пройден',
  kk: 'Керемет! Деңгей өтілді',
  en: 'Well done! Level complete',
};
const LEVEL_PASS_SUB: Localized = {
  ru: 'Материал усвоен — можно двигаться дальше.',
  kk: 'Материал меңгерілді — әрі қарай жалғастыруға болады.',
  en: 'You’ve mastered the material — move on whenever you’re ready.',
};
const LEVEL_FAIL_SUB: Localized = {
  ru: 'Нужно хотя бы 70%. Перечитай урок этого уровня и попробуй ещё раз.',
  kk: 'Кемінде 70% керек. Осы деңгей сабағын қайта оқып, тағы көріп көр.',
  en: 'You need at least 70%. Re-read this level’s lesson and try again.',
};

/* Non-academic modules speak in bands instead of grade-style numbering — see
   PlanetLevels.tsx for the matching pill labels and the Locus rank mirror. */
const BAND_LABEL: Record<LevelBand, Localized> = {
  beginner: { ru: 'Начальный', kk: 'Бастауыш', en: 'Beginner' },
  intermediate: { ru: 'Средний', kk: 'Орта', en: 'Intermediate' },
  advanced: { ru: 'Продвинутый', kk: 'Жоғары', en: 'Advanced' },
};
const BAND_RANK: Record<LevelBand, { icon: LucideIcon; name: Localized }> = {
  beginner: { icon: Telescope, name: { ru: 'Исследователь', kk: 'Зерттеуші', en: 'Explorer' } },
  intermediate: { icon: Rocket, name: { ru: 'Путешественник', kk: 'Саяхатшы', en: 'Voyager' } },
  advanced: { icon: Zap, name: { ru: 'Пионер', kk: 'Пионер', en: 'Pioneer' } },
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/* --- test construction ---
   Academy practiceProblems are free-form (short EN answers, no options), so a
   skip test is assembled into multiple choice: the problem's answer becomes
   the correct option, other problems' answers become distractors — same
   section first, padded from other sections of the same planet when a
   section is too small to supply 3 distinct distractors on its own (life-
   skills sections routinely have only 3 problems and no keyTerms). The
   keyTerms path («What does term X mean?» with other terms' definitions as
   distractors) is an additional source mixed into the same pool.

   Distractor candidates are scored against the correct answer (see
   `distractorScore`) on length proximity, surface features (leading number,
   currency symbol, formula/percentage), and same-section origin, and the
   top 3 are taken — this keeps an out-of-context wall-of-text answer from
   sitting next to a one-line correct answer. When the correct answer leads
   with a number and too few real distractors also do, plausible numeric
   distractors are synthesized by perturbing the correct number (kept in the
   same $/₸/€ format). Options render in full — no truncation, they wrap to
   as many lines as needed. Everything is deterministic — options shuffle via
   the shared seeded shuffleOptions, so the same section always yields the
   same test. */

export interface SkipTestQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

interface Candidate {
  prompt: string;
  answer: string;
}

const MAX_QUESTIONS = 5;
const SKIP_TEST_SEED = 21;
const PASS_THRESHOLD = 70;

const termPrompt = (language: Lang, term: string): string => {
  if (language === 'kk') return `«${term}» термині нені білдіреді?`;
  if (language === 'en') return `What does the term “${term}” mean?`;
  return `Что означает термин «${term}»?`;
};

/* --- distractor scoring --- */

const LEADING_NUMBER = /^[$€₸]?\s?-?\d[\d.,]*/;
const LEADING_NUMBER_CAPTURE = /^([$€₸]?)\s?(-?\d[\d.,]*)/;
const FORMULA_OR_PERCENT = /[=%]|\d\s*[-+×x*/]\s*\d/;
const CURRENCY_SYMBOL = /[$€₸]/;

const startsWithNumber = (text: string): boolean => LEADING_NUMBER.test(text.trim());

interface TextFeatures {
  leadingNumber: boolean;
  currency: boolean;
  formula: boolean;
}

const textFeatures = (text: string): TextFeatures => ({
  leadingNumber: startsWithNumber(text),
  currency: CURRENCY_SYMBOL.test(text),
  formula: FORMULA_OR_PERCENT.test(text),
});

/** Higher = a better-fitting distractor for `correct`: close in length,
    matching surface features, same-section origin. */
const distractorScore = (
  text: string,
  correctAnswer: string,
  correctFeatures: TextFeatures,
  sameSection: boolean,
): number => {
  const features = textFeatures(text);
  const lenRatio =
    Math.min(text.length, correctAnswer.length) / Math.max(text.length, correctAnswer.length, 1);
  let score = lenRatio * 4;
  if (sameSection) score += 3;
  if (features.leadingNumber === correctFeatures.leadingNumber) score += 1;
  if (correctFeatures.leadingNumber && features.leadingNumber) score += 1;
  if (features.currency === correctFeatures.currency) score += 1;
  if (features.formula === correctFeatures.formula) score += 1;
  return score;
};

/** Perturbs the correct answer's leading number (±25%, ±40%, ×2, ÷2 —
    deterministic per seed) to synthesize a plausible numeric distractor in
    the same format (currency prefix, decimal places). Last-resort only, for
    numeric-leading answers with too few real numeric-leading distractors;
    internal-only "synthetic" — indistinguishable from a real option to the
    student. Returns null when the answer doesn't actually lead with a
    parseable number. */
const synthesizeNumericDistractor = (correctAnswer: string, multiplier: number): string | null => {
  const match = correctAnswer.match(LEADING_NUMBER_CAPTURE);
  if (!match) return null;
  const [, prefix, numText] = match;
  const decimals = numText.includes('.') ? numText.split('.')[1].length : 0;
  const value = parseFloat(numText.replace(/,/g, ''));
  if (!Number.isFinite(value) || value === 0) return null;
  const perturbed = value * multiplier;
  const formatted = decimals > 0 ? perturbed.toFixed(decimals) : String(Math.round(perturbed));
  const rest = correctAnswer.slice(match[0].length);
  return `${prefix}${formatted}${rest}`;
};

const SYNTHETIC_MULTIPLIERS = [1.25, 0.75, 2, 0.5, 1.4, 0.6];

const problemCandidates = (section: AcademySection, language: Lang): Candidate[] => {
  const seen = new Set<string>();
  const out: Candidate[] = [];
  for (const problem of section.practiceProblems) {
    const answer = pickLangFieldOptional(
      language,
      problem.answer,
      problem.answerRu,
      problem.answerKk,
    ).trim();
    const key = answer.toLowerCase();
    if (answer.length === 0 || seen.has(key)) continue;
    seen.add(key);
    out.push({
      prompt: pickLangField(language, problem.question, problem.questionRu, problem.questionKk),
      answer,
    });
  }
  return out;
};

const termCandidates = (section: AcademySection, language: Lang): Candidate[] =>
  (section.keyTerms ?? []).map((term) => ({
    prompt: termPrompt(language, pickLangField(language, term.term, term.termRu, term.termKk)),
    answer: pickLangField(language, term.definition, term.definitionRu, term.definitionKk),
  }));

/** Other sections' practiceProblem answers, deduped — the padding source
    when `section`'s own pool can't supply 3 distinct distractors. */
const foreignProblemAnswers = (
  section: AcademySection,
  allSections: AcademySection[],
  language: Lang,
): string[] => {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const other of allSections) {
    if (other === section) continue;
    for (const problem of other.practiceProblems) {
      const answer = pickLangFieldOptional(
        language,
        problem.answer,
        problem.answerRu,
        problem.answerKk,
      ).trim();
      const key = answer.toLowerCase();
      if (answer.length === 0 || seen.has(key)) continue;
      seen.add(key);
      out.push(answer);
    }
  }
  return out;
};

interface ScoredDistractor {
  text: string;
  score: number;
  order: number;
}

const pickDistractors = (
  pool: Candidate[],
  candidateIndex: number,
  foreignAnswers: string[],
  seed: number,
): string[] => {
  const candidate = pool[candidateIndex];
  const correctFeatures = textFeatures(candidate.answer);
  const seen = new Set<string>([candidate.answer.toLowerCase()]);
  const scored: ScoredDistractor[] = [];
  let order = 0;

  // same-section candidates, scored
  for (let step = 1; step < pool.length; step += 1) {
    const other = pool[(candidateIndex + step) % pool.length];
    const key = other.answer.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    scored.push({
      text: other.answer,
      score: distractorScore(other.answer, candidate.answer, correctFeatures, true),
      order: order++,
    });
  }

  // other-section candidates, scored (weaker same-section bonus)
  for (let step = 0; step < foreignAnswers.length; step += 1) {
    const answer = foreignAnswers[(seed + step) % foreignAnswers.length];
    const key = answer.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    scored.push({
      text: answer,
      score: distractorScore(answer, candidate.answer, correctFeatures, false),
      order: order++,
    });
  }

  scored.sort((a, b) => b.score - a.score || a.order - b.order);
  const distractors = scored.slice(0, 3).map((s) => s.text);

  // last resort: synthesize numeric distractors when the correct answer
  // leads with a number and real candidates couldn't fill all 3 slots
  if (distractors.length < 3 && correctFeatures.leadingNumber) {
    for (let i = 0; distractors.length < 3 && i < SYNTHETIC_MULTIPLIERS.length; i += 1) {
      const multiplier = SYNTHETIC_MULTIPLIERS[(seed + i) % SYNTHETIC_MULTIPLIERS.length];
      const synthetic = synthesizeNumericDistractor(candidate.answer, multiplier);
      if (!synthetic) break;
      const key = synthetic.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      distractors.push(synthetic);
    }
  }

  return distractors;
};

/** Build the skip test for a section, or null when no quiz can be assembled.
    `allSections` (the planet's full section list) enables cross-section
    distractor padding; omit it to source distractors from `section` alone. */
export const buildSkipTest = (
  section: AcademySection,
  language: Lang,
  allSections?: AcademySection[],
): SkipTestQuestion[] | null => {
  const pool = [...problemCandidates(section, language), ...termCandidates(section, language)];
  if (pool.length < 2) return null;

  const foreignAnswers = allSections ? foreignProblemAnswers(section, allSections, language) : [];
  const selected = pool.slice(0, MAX_QUESTIONS);

  return selected.map((candidate, index) => {
    const distractors = pickDistractors(pool, index, foreignAnswers, SKIP_TEST_SEED * 31 + index + 1);
    const options = [candidate.answer, ...distractors];
    const shuffled = shuffleOptions(options, 0, SKIP_TEST_SEED * 31 + index + 1);
    return { prompt: candidate.prompt, options: shuffled.options, correctIndex: shuffled.correctIndex };
  });
};

const scoreLine = (language: Lang, score: number): string => {
  if (language === 'kk') return `Нәтижеңіз: ${score}%`;
  if (language === 'en') return `Your score: ${score}%`;
  return `Твой результат: ${score}%`;
};

/* --- component --- */

interface PlanetSkipTestProps {
  /** The section whose material the test draws from — the PREVIOUS section
      for mode="skip" (skip-ahead), or the CURRENT section for mode="level"
      (in-level test taken right after reading its lesson). */
  section: AcademySection;
  /** The planet's full section list, for cross-section distractor padding
      (see buildSkipTest). Omit only when unavailable. */
  allSections?: AcademySection[];
  /** False for Жизненные навыки / Навыки будущего modules — shows the
      section's difficulty band instead of grade-style level numbering. */
  academic: boolean;
  /** The band the section being tested belongs to; required when
      `academic` is false. */
  band?: LevelBand;
  /** Called once on a passing submit (>= 70%) — records skip/completion. */
  onPass: () => void;
  onClose: () => void;
  /** "skip" (default): the locked-level skip-ahead test. "level": the
      Урок → Тест → Уровень пройден in-level test, worded accordingly. */
  mode?: 'skip' | 'level';
}

const PlanetSkipTest: React.FC<PlanetSkipTestProps> = ({
  section,
  allSections,
  academic,
  band,
  onPass,
  onClose,
  mode = 'skip',
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<{ score: number; passed: boolean } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const title = mode === 'level' ? LEVEL_TEST_TITLE : SKIP_TEST_TITLE;
  const passHint = mode === 'level' ? LEVEL_PASS_HINT : PASS_HINT;
  const passTitle = mode === 'level' ? LEVEL_PASS_TITLE : PASS_TITLE;
  const passSub = mode === 'level' ? LEVEL_PASS_SUB : PASS_SUB;
  const failSub = mode === 'level' ? LEVEL_FAIL_SUB : FAIL_SUB;

  const questions = useMemo(
    () => buildSkipTest(section, language, allSections) ?? [],
    [section, language, allSections],
  );
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  // Lock page scroll behind the modal; Escape closes it.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = () => {
    if (!allAnswered || submitted) return;
    const correct = questions.filter((q, i) => answers[i] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= PASS_THRESHOLD;
    if (passed) onPass();
    setSubmitted({ score, passed });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(null);
    setCurrentIndex(0);
    setDirection(1);
  };

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const currentAnswered = answers[currentIndex] !== undefined;

  const goNext = () => {
    if (!currentAnswered) return;
    if (isLastQuestion) {
      handleSubmit();
      return;
    }
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  };

  const goBack = () => {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  };

  const sectionTitle = pickLangField(language, section.title, section.titleRu, section.titleKk);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[60] overflow-y-auto bg-ink/40 backdrop-blur-sm"
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skip-test-title"
            className="w-full max-w-2xl rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.18)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2
                  id="skip-test-title"
                  className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
                >
                  {loc(language, title)}
                </h2>
                <p className="mt-1 truncate text-sm font-semibold text-teal-dark">{sectionTitle}</p>
                {!academic && band && (
                  <span
                    className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 text-[11px] font-bold text-teal-dark"
                    title={loc(language, BAND_RANK[band].name)}
                  >
                    {(() => {
                      const RankIcon = BAND_RANK[band].icon;
                      return <RankIcon className="h-3 w-3" aria-hidden="true" />;
                    })()}
                    {loc(language, BAND_LABEL[band])}
                  </span>
                )}
                <p className="mt-2 text-sm text-slateink">{loc(language, passHint)}</p>
              </div>
              <button
                type="button"
                aria-label={loc(language, CLOSE)}
                onClick={onClose}
                className={`${FOCUS_RING} flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line/60 bg-white text-slateink transition-colors hover:border-teal/50 hover:text-teal`}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center rounded-2xl border border-line/50 bg-canvas px-6 py-10 text-center">
                {submitted.passed ? (
                  <>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mist/40 text-teal">
                      <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                      {loc(language, passTitle)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal-dark">
                      {scoreLine(language, submitted.score)}
                    </p>
                    <p className="mt-2 max-w-sm text-sm text-slateink">{loc(language, passSub)}</p>
                    <button
                      type="button"
                      onClick={onClose}
                      className={`${FOCUS_RING} mt-6 inline-flex items-center justify-center rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                    >
                      {loc(language, CONTINUE)}
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/10 text-coral">
                      <XCircle className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                      {loc(language, FAIL_TITLE)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal-dark">
                      {scoreLine(language, submitted.score)}
                    </p>
                    <p className="mt-2 max-w-sm text-sm text-slateink">{loc(language, failSub)}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleRetry}
                        className={`${FOCUS_RING} inline-flex items-center justify-center rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                      >
                        {loc(language, RETRY)}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className={`${FOCUS_RING} inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                      >
                        {loc(language, LATER)}
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={loc(language, BACK_QUESTION)}
                    onClick={goBack}
                    disabled={currentIndex === 0}
                    tabIndex={currentIndex === 0 ? -1 : 0}
                    className={`${FOCUS_RING} flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slateink transition-opacity hover:text-teal ${
                      currentIndex === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/40">
                    <div
                      className="h-full rounded-full bg-teal transition-all duration-300"
                      style={{
                        width: `${questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0}%`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                    {currentIndex + 1}/{questions.length}
                  </span>
                </div>

                <div className="relative mt-5">
                  <AnimatePresence mode="wait" initial={false}>
                    {currentQuestion && (
                      <motion.div
                        key={currentIndex}
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 * direction }}
                        transition={{ duration: 0.2 }}
                        className="rounded-2xl border border-line/50 bg-canvas p-5"
                      >
                        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                          {loc(language, QUESTION_WORD)} {currentIndex + 1}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-ink sm:text-base">
                          {currentQuestion.prompt}
                        </p>
                        <div
                          className="mt-3 space-y-2"
                          role="radiogroup"
                          aria-label={currentQuestion.prompt}
                        >
                          {currentQuestion.options.map((option, oi) => {
                            const selected = answers[currentIndex] === oi;
                            return (
                              <button
                                key={oi}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() =>
                                  setAnswers((prev) => ({ ...prev, [currentIndex]: oi }))
                                }
                                className={`${FOCUS_RING} flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-relaxed transition-colors ${
                                  selected
                                    ? 'border-teal bg-teal/10 text-ink'
                                    : 'border-line bg-white text-ink hover:border-teal/50'
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold ${
                                    selected ? 'bg-teal text-white' : 'bg-mist/40 text-teal-dark'
                                  }`}
                                >
                                  {String.fromCharCode(65 + oi)}
                                </span>
                                <span className="min-w-0">{option}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  disabled={!currentAnswered}
                  onClick={goNext}
                  className={`${FOCUS_RING} mt-6 inline-flex w-full items-center justify-center rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  {loc(language, isLastQuestion ? FINISH_TEST : NEXT_QUESTION)}
                </button>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PlanetSkipTest;
