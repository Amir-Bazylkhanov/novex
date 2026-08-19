import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  bandForIndex,
  directionById,
  isAcademicPlanet,
  pickGradeContent,
  pickLangField,
  planetBySlug,
} from '../../constants/academy/catalog.ts';
import PlanetLevels, {
  LevelStepPills,
  loadPlanetProgress,
  markSectionCompleted,
  markSectionSkipped,
  type LevelStepState,
  type PlanetLevelStatus,
  type PlanetProgress,
} from './PlanetLevels.tsx';
import PlanetSkipTest, { buildSkipTest } from './PlanetSkipTest.tsx';
import PlanetPlacementTest, {
  canBuildPlacementTest,
  type PlacementResult,
} from './PlanetPlacementTest.tsx';

/* --- content --- */

const BACK: Localized = {
  ru: 'Ко всем направлениям',
  kk: 'Барлық бағыттарға',
  en: 'All tracks',
};
const NOT_FOUND_TITLE: Localized = {
  ru: 'Модуль не найден',
  kk: 'Модуль табылмады',
  en: 'Module not found',
};
const NOT_FOUND_SUB: Localized = {
  ru: 'Такого модуля нет в каталоге академии. Вернись к списку направлений.',
  kk: 'Академия каталогында мұндай модуль жоқ. Бағыттар тізіміне орал.',
  en: 'There is no such module in the academy catalogue. Head back to the track list.',
};
/* Displayed direction codes were renumbered NOV-04/05/06 → NOV-01/02/03;
   internal AcademyDirectionId keys stay 'nov04'|'nov05'|'nov06'. */
const DIRECTION_CODE = {
  nov04: 'NOV-01',
  nov05: 'NOV-02',
  nov06: 'NOV-03',
} as const;
const BANNER_TITLE: Localized = {
  ru: 'Уже знаете часть материала?',
  kk: 'Бұл тақырыптарды білесіз бе?',
  en: 'Already know some of this?',
};
const BANNER_BODY: Localized = {
  ru: 'Подтвердите тестом и пропустите знакомые уровни.',
  kk: 'Тест арқылы дәлелдеп, таныс деңгейлерді өткізіп жіберіңіз.',
  en: 'Prove it with a test and skip past levels you already know.',
};
const BANNER_CTA: Localized = {
  ru: 'Подобрать уровень',
  kk: 'Деңгейімді табу',
  en: 'Find my level',
};
const LOCKED_NOTE: Localized = {
  ru: 'Этот уровень заблокирован. Сдай тест предыдущего уровня, чтобы открыть его.',
  kk: 'Бұл деңгей бұғатталған. Оны ашу үшін алдыңғы деңгейдің тестінен өтіңіз.',
  en: 'This level is locked. Pass the previous level’s test to unlock it.',
};
const SKIP_LEVEL_TEST: Localized = {
  ru: 'Сдать тест и пропустить уровень',
  kk: 'Тест тапсырып, деңгейді өткізіп жіберу',
  en: 'Take the test and skip this level',
};
const SKIP_UNAVAILABLE: Localized = {
  ru: 'Тест для пропуска пока недоступен — пройди урок предыдущего уровня.',
  kk: 'Өткізу тесті әзірге қолжетімсіз — алдыңғы деңгейдің сабағын өт.',
  en: 'No skip test available yet — complete the previous level’s lesson instead.',
};
const LESSON_WORD: Localized = { ru: 'Урок', kk: 'Сабақ', en: 'Lesson' };
const START_LESSON: Localized = {
  ru: 'Начать урок',
  kk: 'Сабақты бастау',
  en: 'Start lesson',
};
const START_LEVEL_TEST: Localized = {
  ru: 'Пройти тест уровня',
  kk: 'Деңгей тестін тапсыру',
  en: 'Take the level test',
};
const LEVEL_DONE: Localized = {
  ru: 'Уровень пройден',
  kk: 'Деңгей өтілді',
  en: 'Level completed',
};
const TESTED_OUT: Localized = {
  ru: 'Зачтено тестом',
  kk: 'Тестпен расталды',
  en: 'Tested out',
};

const problemsLine = (language: 'ru' | 'kk' | 'en', total: number): string => {
  if (language === 'kk') return `Тапсырмалар: ${total}`;
  if (language === 'en') return `Problems: ${total}`;
  return `Задач: ${total}`;
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/** Planet page: sections as sequential levels — swiper strip on top, the
    active level's (locked or unlocked) content below. Level N unlocks when
    level N−1 is completed, or by passing the previous section's skip test. */
const PlanetPage: React.FC = () => {
  const { planet: planetSlug } = useParams<{ planet: string }>();
  const { language } = useLanguage();
  const { profile } = useAuth();
  const reducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const planet = planetSlug ? planetBySlug(planetSlug) : undefined;
  const direction = planet ? directionById(planet.directionId) : undefined;
  // grade-matched copy of the content (falls back to the lowest grade)
  const content = planet ? pickGradeContent(planet.lessons, profile?.grade ?? null) : undefined;

  const [progress, setProgress] = useState<PlanetProgress>(() =>
    loadPlanetProgress(planetSlug ?? ''),
  );
  const [activeIdx, setActiveIdx] = useState(0);
  /** Locked level whose skip test is open (the test covers level − 1). */
  const [skipTestFor, setSkipTestFor] = useState<number | null>(null);
  /** Unlocked level whose in-level test is open (Урок → Тест → Уровень пройден). */
  const [levelTestFor, setLevelTestFor] = useState<number | null>(null);
  /** «Подобрать уровень» — cross-planet placement test open. */
  const [placementTestOpen, setPlacementTestOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Re-sync progress + land on the first incomplete level per planet, or on
  // the level named by ?test= (set by the lesson page's "К тесту уровня").
  useEffect(() => {
    const loaded = loadPlanetProgress(planetSlug ?? '');
    setProgress(loaded);
    setSkipTestFor(null);
    setLevelTestFor(null);

    const testParam = searchParams.get('test');
    const testIdx = testParam !== null ? Number.parseInt(testParam, 10) : Number.NaN;

    if (content) {
      if (Number.isInteger(testIdx) && testIdx >= 0 && testIdx < content.sections.length) {
        setActiveIdx(testIdx);
        setLevelTestFor(testIdx);
        setSearchParams({}, { replace: true });
      } else {
        const firstIncomplete = content.sections.findIndex(
          (_, i) => !loaded.completedSections.includes(i),
        );
        setActiveIdx(firstIncomplete >= 0 ? firstIncomplete : 0);
      }
    } else {
      setActiveIdx(0);
    }
    // Only re-run on planet/content change — ?test= is consumed once, on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planetSlug, content]);

  if (!planet || !direction || !content) {
    return (
      <main className="relative min-h-screen bg-canvas font-sans text-ink">
        <RobotBackdrop density="subtle" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
          <Link
            to="/learn"
            className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK)}
          </Link>
          <div className="mt-8 rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8">
            <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {loc(language, NOT_FOUND_TITLE)}
            </h1>
            <p className="mt-2 text-sm text-slateink">{loc(language, NOT_FOUND_SUB)}</p>
          </div>
        </div>
      </main>
    );
  }

  const Icon = planet.icon;
  const academic = isAcademicPlanet(planet);
  const directionLine = `${DIRECTION_CODE[direction.id]} · ${loc(language, direction.name)}`;

  const safeActiveIdx = Math.max(0, Math.min(activeIdx, content.sections.length - 1));
  const statuses: PlanetLevelStatus[] = content.sections.map((_, i) =>
    progress.completedSections.includes(i)
      ? 'done'
      : i > 0 && !progress.completedSections.includes(i - 1)
        ? 'locked'
        : 'open',
  );
  const firstIncomplete = content.sections.findIndex(
    (_, i) => !progress.completedSections.includes(i),
  );
  const hasLockedLevel = statuses.some((status) => status === 'locked');

  const activeSection = content.sections[safeActiveIdx];
  const activeStatus = statuses[safeActiveIdx];
  const activeCompleted = progress.completedSections.includes(safeActiveIdx);
  const activeSkipped = progress.skipped.includes(safeActiveIdx);

  // Урок → Тест → Уровень пройден for the active level. lessonRead entries
  // written before this field existed are implied by completedSections.
  const activeLessonRead =
    progress.lessonRead.includes(safeActiveIdx) || activeCompleted;
  const activeSectionHasTest = buildSkipTest(activeSection, language, content.sections) !== null;
  const lessonStepState: LevelStepState = activeLessonRead ? 'done' : 'active';
  const testStepState: LevelStepState = activeCompleted
    ? 'done'
    : activeLessonRead
      ? 'active'
      : 'locked';
  const doneStepState: LevelStepState = activeCompleted ? 'done' : 'locked';

  const activeIntro =
    pickLangField(language, activeSection.content, activeSection.contentRu, activeSection.contentKk)
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0)[0] ?? '';
  const activeTitle = pickLangField(
    language,
    activeSection.title,
    activeSection.titleRu,
    activeSection.titleKk,
  );
  const prevSection = safeActiveIdx > 0 ? content.sections[safeActiveIdx - 1] : undefined;
  const skipTestAvailable =
    activeStatus === 'locked' &&
    prevSection !== undefined &&
    buildSkipTest(prevSection, language, content.sections) !== null;

  const jumpToRecommended = () => setActiveIdx(firstIncomplete >= 0 ? firstIncomplete : 0);
  const handleSkipPass = () => {
    if (skipTestFor === null) return;
    setProgress(markSectionSkipped(planet.slug, skipTestFor - 1));
  };
  const handleLevelTestPass = () => {
    if (levelTestFor === null) return;
    setProgress(markSectionCompleted(planet.slug, levelTestFor));
  };
  // Sections before the assigned level are unlocked via the same skip helper
  // the locked-level flow uses; the assigned level itself is left open (not
  // completed) so the student still takes its lesson/test, unless the test
  // already implied mastery of the whole planet (acedEverything).
  const handlePlacementResult = (result: PlacementResult) => {
    let latest = progress;
    for (const idx of result.sectionsToSkip) {
      latest = markSectionSkipped(planet.slug, idx);
    }
    setProgress(latest);
    setActiveIdx(result.assignedLevel);
  };
  const canPlacementTest = canBuildPlacementTest(content.sections, language);
  const handleBannerCta = () => {
    if (canPlacementTest) setPlacementTestOpen(true);
    else jumpToRecommended();
  };
  const lessonPath = `/learn/p/${planet.slug}/${safeActiveIdx}`;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="planet" aria-labelledby="planet-heading">
          <Link
            to="/learn"
            className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line/60 bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:border-teal/50 hover:text-teal`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(language, BACK)}
          </Link>

          <div className="mt-6 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist/30 text-teal-dark sm:h-16 sm:w-16">
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {directionLine}
              </p>
              <h1
                id="planet-heading"
                className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
              >
                {loc(language, planet.name)}
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-slateink sm:text-base">
                {pickLangField(
                  language,
                  content.introduction.en,
                  content.introduction.ru,
                  undefined,
                )}
              </p>
            </div>
          </div>

          {/* level swiper — planet sections as sequential levels */}
          <div className="mt-8">
            <PlanetLevels
              sections={content.sections}
              statuses={statuses}
              activeIdx={safeActiveIdx}
              recommendedIdx={firstIncomplete}
              isAcademic={academic}
              onSelect={setActiveIdx}
            />
          </div>

          {/* placement banner — test out of levels you already know */}
          {hasLockedLevel && (
            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-teal/25 bg-mist/15 px-5 py-4 sm:flex-row sm:items-center">
              <Sparkles className="hidden h-5 w-5 shrink-0 text-teal sm:block" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold tracking-tight text-ink">
                  {loc(language, BANNER_TITLE)}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slateink sm:text-[13px]">
                  {loc(language, BANNER_BODY)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleBannerCta}
                className={`${FOCUS_RING} inline-flex shrink-0 items-center gap-2 rounded-xl border border-teal bg-white px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:bg-teal/10`}
              >
                {loc(language, BANNER_CTA)}
              </button>
            </div>
          )}

          {/* active level body */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={safeActiveIdx}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
              className="mt-6"
            >
              {activeStatus === 'locked' ? (
                /* locked level — pass the previous level's test to open it */
                <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-dashed border-line/70 bg-white/70 px-6 py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist/30 text-teal-dark">
                    <Lock className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-slateink">
                    {loc(language, LOCKED_NOTE)}
                  </p>
                  {skipTestAvailable && prevSection ? (
                    <button
                      type="button"
                      onClick={() => setSkipTestFor(safeActiveIdx)}
                      className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-teal bg-white px-5 py-2.5 text-sm font-semibold text-teal-dark shadow-[0_6px_18px_rgba(33,159,162,0.18)] transition-colors hover:bg-teal/10`}
                    >
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      {loc(language, SKIP_LEVEL_TEST)}
                    </button>
                  ) : (
                    <p className="text-xs text-slateink">{loc(language, SKIP_UNAVAILABLE)}</p>
                  )}
                </div>
              ) : (
                /* unlocked level — the section's lesson entry, UnitCard-style */
                <article className="overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_8px_24px_rgba(17,26,42,0.06)]">
                  <div className="flex items-start gap-3 border-b border-line/40 px-5 py-4 sm:px-6">
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                        activeCompleted ? 'bg-teal text-white' : 'bg-mist/40 text-slateink'
                      }`}
                    >
                      {activeCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        safeActiveIdx + 1
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                        {pickLangField(
                          language,
                          activeSection.title,
                          activeSection.titleRu,
                          activeSection.titleKk,
                        )}
                      </h2>
                      {activeSkipped ? (
                        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-dark">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                          {loc(language, TESTED_OUT)}
                        </span>
                      ) : (
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                          {loc(language, LESSON_WORD)} 1 ·{' '}
                          {problemsLine(language, activeSection.practiceProblems.length)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* progress bar */}
                  <div aria-hidden="true" className="relative h-1 bg-line/30">
                    <div
                      className="absolute inset-y-0 left-0 bg-teal transition-all duration-500"
                      style={{ width: activeCompleted ? '100%' : '0%' }}
                    />
                  </div>

                  <div className="px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-slateink">{activeIntro}</p>

                    <Link
                      to={lessonPath}
                      className={`${FOCUS_RING} group mt-4 flex w-full items-center gap-3 rounded-xl border border-line/40 bg-canvas px-4 py-3 text-left transition-colors hover:border-teal/40 hover:bg-teal/5`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          activeCompleted ? 'bg-teal text-white' : 'bg-mist/40 text-slateink'
                        }`}
                      >
                        {activeCompleted ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <BookOpen className="h-4 w-4" />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block truncate text-sm font-semibold text-ink group-hover:text-teal-dark"
                          title={activeTitle}
                        >
                          {activeTitle}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wider text-slateink">
                          {loc(language, LESSON_WORD)} 1
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="px-5 pb-5 sm:px-6">
                    <LevelStepPills
                      lessonState={lessonStepState}
                      testState={activeSectionHasTest ? testStepState : undefined}
                      doneState={doneStepState}
                      onLessonClick={() => navigate(lessonPath)}
                      onTestClick={
                        testStepState === 'active' ? () => setLevelTestFor(safeActiveIdx) : undefined
                      }
                    />
                    <div className="mt-4">
                      {activeCompleted ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-teal/40 bg-mist/20 px-4 py-3.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal text-white">
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-semibold text-teal-dark">
                            {activeSkipped ? loc(language, TESTED_OUT) : loc(language, LEVEL_DONE)}
                          </span>
                        </div>
                      ) : activeSectionHasTest && activeLessonRead ? (
                        <button
                          type="button"
                          onClick={() => setLevelTestFor(safeActiveIdx)}
                          className={`${FOCUS_RING} inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                        >
                          {loc(language, START_LEVEL_TEST)}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <Link
                          to={lessonPath}
                          className={`${FOCUS_RING} inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                        >
                          {loc(language, START_LESSON)}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* skip test for the previous section — passing unlocks this level */}
      {skipTestFor !== null && prevSection && (
        <PlanetSkipTest
          section={prevSection}
          allSections={content.sections}
          academic={academic}
          band={bandForIndex(skipTestFor, content.sections.length)}
          onPass={handleSkipPass}
          onClose={() => setSkipTestFor(null)}
        />
      )}

      {/* level test for the active section — passing marks it fully completed */}
      {levelTestFor !== null && content.sections[levelTestFor] && (
        <PlanetSkipTest
          mode="level"
          section={content.sections[levelTestFor]}
          allSections={content.sections}
          academic={academic}
          band={bandForIndex(levelTestFor, content.sections.length)}
          onPass={handleLevelTestPass}
          onClose={() => setLevelTestFor(null)}
        />
      )}

      {/* placement test — «Подобрать уровень», samples questions across every level */}
      {placementTestOpen && (
        <PlanetPlacementTest
          sections={content.sections}
          directionCode={DIRECTION_CODE[direction.id]}
          academic={academic}
          onPlaced={handlePlacementResult}
          onClose={() => setPlacementTestOpen(false)}
        />
      )}
    </main>
  );
};

export default PlanetPage;
