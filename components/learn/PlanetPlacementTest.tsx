import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Trophy, X } from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { pickLangField, type AcademySection } from '../../constants/academy/catalog.ts';
import { buildSkipTest, type SkipTestQuestion } from './PlanetSkipTest.tsx';

/* --- content --- */

const PLACEMENT_TITLE: Localized = {
  ru: 'Тест на определение уровня',
  kk: 'Деңгейді анықтау тесті',
  en: 'Placement test',
};
const QUESTION_WORD: Localized = { ru: 'Вопрос', kk: 'Сұрақ', en: 'Question' };
const SUBMIT_PLACEMENT: Localized = {
  ru: 'Узнать свой уровень',
  kk: 'Деңгейімді анықтау',
  en: 'Find my level',
};
const PLACED_TITLE: Localized = { ru: 'Уровень подобран!', kk: 'Деңгей анықталды!', en: 'Level found!' };
const ACED_TITLE: Localized = { ru: 'Ты знаешь всё!', kk: 'Сен бәрін білесің!', en: 'You know it all!' };
const CONTINUE: Localized = { ru: 'Продолжить', kk: 'Жалғастыру', en: 'Continue' };
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const placementIntro = (language: Lang, directionCode: string): string => {
  if (language === 'kk')
    return `Әртүрлі деңгейдегі сұрақтарға жауап бер — ${directionCode} сенің қай деңгейден бастау керектігін анықтайды.`;
  if (language === 'en')
    return `Answer questions from different levels — ${directionCode} will figure out where you should start.`;
  return `Ответь на вопросы разных уровней — ${directionCode} определит, с какого уровня тебе начать.`;
};

const placementResultLine = (
  language: Lang,
  levelNumber: number,
  sectionTitle: string,
  acedEverything: boolean,
): string => {
  if (acedEverything) {
    if (language === 'kk')
      return `Тамаша нәтиже! Сен планетаның барлық материалын білесің — соңғы деңгей «${sectionTitle}»-ден бастайсың, алдыңғы деңгейлердің барлығы ашық.`;
    if (language === 'en')
      return `Amazing result — you know the whole planet's material! You'll start at the final level, “${sectionTitle}”, with everything before it unlocked.`;
    return `Отличный результат — ты знаешь весь материал планеты! Начнёшь с последнего уровня «${sectionTitle}», все уровни до него уже открыты.`;
  }
  if (language === 'kk')
    return `Сенің деңгейің: ${levelNumber} — «${sectionTitle}». Осыған дейінгі барлық деңгейлер ашық.`;
  if (language === 'en')
    return `Your level: ${levelNumber} — “${sectionTitle}”. Every level before it is unlocked.`;
  return `Твой уровень: ${levelNumber} — «${sectionTitle}». Все уровни до него открыты.`;
};

/* --- placement question sampling ---
   Reuses buildSkipTest's question-building per section, taking up to
   PER_SECTION questions from every section that can generate them,
   round-robin across sections for even coverage, capped at MAX_TOTAL. */

const PER_SECTION = 2;
const MAX_TOTAL = 12;

interface PlacementQuestion extends SkipTestQuestion {
  /** Index into `sections` this question was sampled from. */
  sectionIndex: number;
}

const buildPlacementTest = (sections: AcademySection[], language: Lang): PlacementQuestion[] => {
  const bySection: Array<{ sectionIndex: number; questions: SkipTestQuestion[] }> = [];
  sections.forEach((section, sectionIndex) => {
    const built = buildSkipTest(section, language, sections);
    if (built && built.length > 0) {
      bySection.push({ sectionIndex, questions: built.slice(0, PER_SECTION) });
    }
  });

  const out: PlacementQuestion[] = [];
  for (let round = 0; round < PER_SECTION && out.length < MAX_TOTAL; round += 1) {
    for (const { sectionIndex, questions } of bySection) {
      if (out.length >= MAX_TOTAL) break;
      const question = questions[round];
      if (question) out.push({ ...question, sectionIndex });
    }
  }
  return out;
};

/** True when the planet has enough content to run a placement test at all. */
export const canBuildPlacementTest = (sections: AcademySection[], language: Lang): boolean =>
  buildPlacementTest(sections, language).length > 0;

/* --- scoring: first section under 50% on its own questions wins ---
   Sections with no sampled questions are treated as known (skipped over).
   If nothing fails, the student is placed at the last section. */

export interface PlacementResult {
  assignedLevel: number;
  /** Every section strictly before assignedLevel — caller marks these
      skipped + completed via the existing PlanetLevels helpers. */
  sectionsToSkip: number[];
  acedEverything: boolean;
}

const scorePlacement = (
  sections: AcademySection[],
  questions: PlacementQuestion[],
  answers: Record<number, number>,
): PlacementResult => {
  const bySection = new Map<number, { correct: number; total: number }>();
  questions.forEach((question, i) => {
    const stat = bySection.get(question.sectionIndex) ?? { correct: 0, total: 0 };
    stat.total += 1;
    if (answers[i] === question.correctIndex) stat.correct += 1;
    bySection.set(question.sectionIndex, stat);
  });

  let assignedLevel = sections.length - 1;
  let acedEverything = true;
  for (let i = 0; i < sections.length; i += 1) {
    const stat = bySection.get(i);
    if (!stat) continue; // unrepresented — treated as known
    if (stat.correct / stat.total < 0.5) {
      assignedLevel = i;
      acedEverything = false;
      break;
    }
  }

  return {
    assignedLevel,
    sectionsToSkip: Array.from({ length: assignedLevel }, (_, i) => i),
    acedEverything,
  };
};

/* --- component --- */

interface PlanetPlacementTestProps {
  sections: AcademySection[];
  /** Shown in the intro copy, e.g. "NOV-04". */
  directionCode: string;
  /** Called once the test is scored — apply sectionsToSkip via
      markSectionSkipped and move the swiper to assignedLevel. */
  onPlaced: (result: PlacementResult) => void;
  onClose: () => void;
}

const PlanetPlacementTest: React.FC<PlanetPlacementTestProps> = ({
  sections,
  directionCode,
  onPlaced,
  onClose,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);

  const questions = useMemo(() => buildPlacementTest(sections, language), [sections, language]);
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  // Defensive: the caller only opens this when questions exist, but bail
  // cleanly if a planet somehow has none.
  useEffect(() => {
    if (questions.length === 0) onClose();
  }, [questions.length, onClose]);

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

  if (questions.length === 0) return null;

  const handleSubmit = () => {
    if (!allAnswered || result) return;
    const scored = scorePlacement(sections, questions, answers);
    setResult(scored);
    onPlaced(scored);
  };

  const answeredCount = Object.keys(answers).length;
  const assignedSectionTitle = result
    ? pickLangField(
        language,
        sections[result.assignedLevel].title,
        sections[result.assignedLevel].titleRu,
        sections[result.assignedLevel].titleKk,
      )
    : '';

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
            aria-labelledby="placement-test-title"
            className="w-full max-w-2xl rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.18)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2
                  id="placement-test-title"
                  className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
                >
                  {loc(language, PLACEMENT_TITLE)}
                </h2>
                <p className="mt-2 text-sm text-slateink">{placementIntro(language, directionCode)}</p>
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

            {result ? (
              <div className="mt-6 flex flex-col items-center rounded-2xl border border-line/50 bg-canvas px-6 py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mist/40 text-teal">
                  {result.acedEverything ? (
                    <Trophy className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  )}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {loc(language, result.acedEverything ? ACED_TITLE : PLACED_TITLE)}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slateink">
                  {placementResultLine(
                    language,
                    result.assignedLevel + 1,
                    assignedSectionTitle,
                    result.acedEverything,
                  )}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className={`${FOCUS_RING} mt-6 inline-flex items-center justify-center rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  {loc(language, CONTINUE)}
                </button>
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
                  {loc(language, SUBMIT_PLACEMENT)}
                </button>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PlanetPlacementTest;
