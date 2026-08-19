import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Telescope,
  Trophy,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  bandForIndex,
  pickLangField,
  type AcademySection,
  type LevelBand,
} from '../../constants/academy/catalog.ts';
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
const NEXT_QUESTION: Localized = { ru: 'Далее', kk: 'Келесі', en: 'Next' };
const BACK_QUESTION: Localized = { ru: 'Назад', kk: 'Артқа', en: 'Back' };
const PLACED_TITLE: Localized = { ru: 'Уровень подобран!', kk: 'Деңгей анықталды!', en: 'Level found!' };
const ACED_TITLE: Localized = { ru: 'Ты знаешь всё!', kk: 'Сен бәрін білесің!', en: 'You know it all!' };
const CONTINUE: Localized = { ru: 'Продолжить', kk: 'Жалғастыру', en: 'Continue' };
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };

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

const placementIntro = (language: Lang, directionCode: string, academic: boolean): string => {
  if (academic) {
    if (language === 'kk')
      return `Әртүрлі деңгейдегі сұрақтарға жауап бер — ${directionCode} сенің қай деңгейден бастау керектігін анықтайды.`;
    if (language === 'en')
      return `Answer questions from different levels — ${directionCode} will figure out where you should start.`;
    return `Ответь на вопросы разных уровней — ${directionCode} определит, с какого уровня тебе начать.`;
  }
  if (language === 'kk')
    return `${directionCode} сенің деңгейіңді анықтайды: бастауыш, орта немесе жоғары.`;
  if (language === 'en')
    return `${directionCode} will find your level: beginner, intermediate, or advanced.`;
  return `${directionCode} определит твой уровень: начальный, средний или продвинутый.`;
};

const placementResultLine = (
  language: Lang,
  levelLabel: string,
  sectionTitle: string,
  acedEverything: boolean,
): string => {
  if (acedEverything) {
    if (language === 'kk')
      return `Тамаша нәтиже! Сен модульдің барлық материалын білесің — соңғы деңгей «${sectionTitle}»-ден бастайсың, алдыңғы деңгейлердің барлығы ашық.`;
    if (language === 'en')
      return `Amazing result — you know the whole module's material! You'll start at the final level, “${sectionTitle}”, with everything before it unlocked.`;
    return `Отличный результат — ты знаешь весь материал модуля! Начнёшь с последнего уровня «${sectionTitle}», все уровни до него уже открыты.`;
  }
  if (language === 'kk')
    return `Сенің деңгейің: ${levelLabel} — «${sectionTitle}». Осыған дейінгі барлық деңгейлер ашық.`;
  if (language === 'en')
    return `Your level: ${levelLabel} — “${sectionTitle}”. Every level before it is unlocked.`;
  return `Твой уровень: ${levelLabel} — «${sectionTitle}». Все уровни до него открыты.`;
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
  /** Shown in the intro copy, e.g. "NOV-01". */
  directionCode: string;
  /** False for Жизненные навыки / Навыки будущего modules — the result and
      intro copy speak in beginner/intermediate/advanced bands instead of a
      grade-style level number. */
  academic: boolean;
  /** Called once the test is scored — apply sectionsToSkip via
      markSectionSkipped and move the swiper to assignedLevel. */
  onPlaced: (result: PlacementResult) => void;
  onClose: () => void;
}

const PlanetPlacementTest: React.FC<PlanetPlacementTestProps> = ({
  sections,
  directionCode,
  academic,
  onPlaced,
  onClose,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

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
  const assignedSectionTitle = result
    ? pickLangField(
        language,
        sections[result.assignedLevel].title,
        sections[result.assignedLevel].titleRu,
        sections[result.assignedLevel].titleKk,
      )
    : '';
  const assignedBand = result ? bandForIndex(result.assignedLevel, sections.length) : null;
  const levelLabel =
    result && !academic && assignedBand
      ? loc(language, BAND_LABEL[assignedBand])
      : result
        ? String(result.assignedLevel + 1)
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
                <p className="mt-2 text-sm text-slateink">
                  {placementIntro(language, directionCode, academic)}
                </p>
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
                    levelLabel,
                    assignedSectionTitle,
                    result.acedEverything,
                  )}
                </p>
                {!academic && assignedBand && (
                  <span
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 text-[11px] font-bold text-teal-dark"
                    title={loc(language, BAND_RANK[assignedBand].name)}
                  >
                    {(() => {
                      const RankIcon = BAND_RANK[assignedBand].icon;
                      return <RankIcon className="h-3 w-3" aria-hidden="true" />;
                    })()}
                    {loc(language, BAND_LABEL[assignedBand])}
                  </span>
                )}
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
                  {loc(language, isLastQuestion ? SUBMIT_PLACEMENT : NEXT_QUESTION)}
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
