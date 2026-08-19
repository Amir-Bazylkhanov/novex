import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  directionById,
  pickGradeContent,
  pickLangField,
  planetBySlug,
} from '../../constants/academy/catalog.ts';
import PlanetLevels, {
  loadPlanetProgress,
  markSectionSkipped,
  type PlanetLevelStatus,
  type PlanetProgress,
} from './PlanetLevels.tsx';
import PlanetSkipTest, { buildSkipTest } from './PlanetSkipTest.tsx';

/* --- content --- */

const BACK: Localized = {
  ru: 'Ко всем направлениям',
  kk: 'Барлық бағыттарға',
  en: 'All tracks',
};
const NOT_FOUND_TITLE: Localized = {
  ru: 'Планета не найдена',
  kk: 'Планета табылмады',
  en: 'Planet not found',
};
const NOT_FOUND_SUB: Localized = {
  ru: 'Такой планеты нет в каталоге академии. Вернись к списку направлений.',
  kk: 'Академия каталогында мұндай планета жоқ. Бағыттар тізіміне орал.',
  en: 'There is no such planet in the academy catalogue. Head back to the track list.',
};
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

  // Re-sync progress + land on the first incomplete level per planet.
  useEffect(() => {
    const loaded = loadPlanetProgress(planetSlug ?? '');
    setProgress(loaded);
    setSkipTestFor(null);
    if (content) {
      const firstIncomplete = content.sections.findIndex(
        (_, i) => !loaded.completedSections.includes(i),
      );
      setActiveIdx(firstIncomplete >= 0 ? firstIncomplete : 0);
    } else {
      setActiveIdx(0);
    }
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
  const directionLine = `NOV-${direction.id.slice(3)} · ${loc(language, direction.name)}`;

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
  const activeIntro =
    pickLangField(language, activeSection.content, activeSection.contentRu, activeSection.contentKk)
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0)[0] ?? '';
  const prevSection = safeActiveIdx > 0 ? content.sections[safeActiveIdx - 1] : undefined;
  const skipTestAvailable =
    activeStatus === 'locked' && prevSection !== undefined && buildSkipTest(prevSection, language) !== null;

  const jumpToRecommended = () => setActiveIdx(firstIncomplete >= 0 ? firstIncomplete : 0);
  const handleSkipPass = () => {
    if (skipTestFor === null) return;
    setProgress(markSectionSkipped(planet.slug, skipTestFor - 1));
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
                onClick={jumpToRecommended}
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
                        <span className="block truncate text-sm font-semibold text-ink group-hover:text-teal-dark">
                          {pickLangField(
                            language,
                            activeSection.title,
                            activeSection.titleRu,
                            activeSection.titleKk,
                          )}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wider text-slateink">
                          {loc(language, LESSON_WORD)} 1
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="px-5 pb-5 sm:px-6">
                    {activeCompleted ? (
                      <div className="flex items-center gap-3 rounded-2xl border border-teal/40 bg-mist/20 px-4 py-3.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal text-white">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-semibold text-teal-dark">
                          {activeSkipped ? loc(language, TESTED_OUT) : loc(language, LEVEL_DONE)}
                        </span>
                      </div>
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
          onPass={handleSkipPass}
          onClose={() => setSkipTestFor(null)}
        />
      )}
    </main>
  );
};

export default PlanetPage;
