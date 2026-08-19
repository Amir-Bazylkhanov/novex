import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, X, XCircle } from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  pickLangField,
  pickLangFieldOptional,
  type AcademySection,
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
const SUBMIT_TEST: Localized = {
  ru: 'Проверить ответы',
  kk: 'Жауаптарды тексеру',
  en: 'Check answers',
};
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

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/* --- test construction ---
   Academy practiceProblems are free-form (short EN answers, no options), so a
   skip test is assembled into multiple choice: the problem's answer becomes
   the correct option, other problems' answers become distractors. Sections
   without enough short-answer problems fall back to a keyTerms quiz
   («What does term X mean?» with other terms' definitions as distractors).
   Everything is deterministic — options shuffle via the shared seeded
   shuffleOptions, so the same section always yields the same test. */

export interface SkipTestQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

interface Candidate {
  prompt: string;
  answer: string;
}

const MAX_QUESTIONS = 6;
const MIN_QUESTIONS = 4;
const MAX_OPTION_LEN = 80;
const SKIP_TEST_SEED = 21;
const PASS_THRESHOLD = 70;

const termPrompt = (language: Lang, term: string): string => {
  if (language === 'kk') return `«${term}» термині нені білдіреді?`;
  if (language === 'en') return `What does the term “${term}” mean?`;
  return `Что означает термин «${term}»?`;
};

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
    if (answer.length === 0 || answer.length > MAX_OPTION_LEN || seen.has(key)) continue;
    seen.add(key);
    out.push({
      prompt: pickLangField(language, problem.question, problem.questionRu, problem.questionKk),
      answer,
    });
    if (out.length >= MAX_QUESTIONS) break;
  }
  return out;
};

const termCandidates = (section: AcademySection, language: Lang): Candidate[] =>
  (section.keyTerms ?? []).map((term) => ({
    prompt: termPrompt(language, pickLangField(language, term.term, term.termRu, term.termKk)),
    answer: pickLangField(language, term.definition, term.definitionRu, term.definitionKk),
  }));

/** Build the skip test for a section, or null when no quiz can be assembled. */
export const buildSkipTest = (
  section: AcademySection,
  language: Lang,
): SkipTestQuestion[] | null => {
  const problems = problemCandidates(section, language);
  const terms = termCandidates(section, language);

  let pool: Candidate[];
  if (problems.length >= MIN_QUESTIONS) pool = problems;
  else if (terms.length >= MIN_QUESTIONS) pool = terms;
  else if (problems.length >= 2) pool = problems;
  else if (terms.length >= 2) pool = terms;
  else return null;

  return pool.slice(0, MAX_QUESTIONS).map((candidate, index) => {
    const distractors: string[] = [];
    for (let step = 1; distractors.length < 3 && step < pool.length; step += 1) {
      const other = pool[(index + step) % pool.length];
      if (other.answer === candidate.answer || distractors.includes(other.answer)) continue;
      distractors.push(other.answer);
    }
    const shuffled = shuffleOptions(
      [candidate.answer, ...distractors],
      0,
      SKIP_TEST_SEED * 31 + index + 1,
    );
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
  /** The PREVIOUS section whose material the test draws from. */
  section: AcademySection;
  /** Called once on a passing submit (>= 70%) — records skip + completion. */
  onPass: () => void;
  onClose: () => void;
}

const PlanetSkipTest: React.FC<PlanetSkipTestProps> = ({ section, onPass, onClose }) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<{ score: number; passed: boolean } | null>(null);

  const questions = useMemo(
    () => buildSkipTest(section, language) ?? [],
    [section, language],
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
  };

  const sectionTitle = pickLangField(language, section.title, section.titleRu, section.titleKk);
  const answeredCount = Object.keys(answers).length;

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
                  {loc(language, SKIP_TEST_TITLE)}
                </h2>
                <p className="mt-1 truncate text-sm font-semibold text-teal-dark">{sectionTitle}</p>
                <p className="mt-2 text-sm text-slateink">{loc(language, PASS_HINT)}</p>
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
                      {loc(language, PASS_TITLE)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal-dark">
                      {scoreLine(language, submitted.score)}
                    </p>
                    <p className="mt-2 max-w-sm text-sm text-slateink">{loc(language, PASS_SUB)}</p>
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
                    <p className="mt-2 max-w-sm text-sm text-slateink">{loc(language, FAIL_SUB)}</p>
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
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/40">
                    <div
                      className="h-full rounded-full bg-teal transition-all duration-300"
                      style={{
                        width: `${questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0}%`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                    {answeredCount}/{questions.length}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {questions.map((question, qi) => (
                    <div key={qi} className="rounded-2xl border border-line/50 bg-canvas p-5">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                        {loc(language, QUESTION_WORD)} {qi + 1}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-ink sm:text-base">
                        {question.prompt}
                      </p>
                      <div className="mt-3 space-y-2" role="radiogroup" aria-label={question.prompt}>
                        {question.options.map((option, oi) => {
                          const selected = answers[qi] === oi;
                          return (
                            <button
                              key={oi}
                              type="button"
                              role="radio"
                              aria-checked={selected}
                              onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
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
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={!allAnswered}
                  onClick={handleSubmit}
                  className={`${FOCUS_RING} mt-6 inline-flex w-full items-center justify-center rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  {loc(language, SUBMIT_TEST)}
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
