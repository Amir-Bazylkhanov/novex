import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lock,
  Rocket,
  Telescope,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  bandForIndex,
  pickLangField,
  type AcademySection,
  type LevelBand,
} from '../../constants/academy/catalog.ts';
import { hasSubjects } from '../../constants/academy/subjects.ts';

// ============================================================
// Две вещи для страницы модуля (PlanetPage):
// 1) хранение прогресса ученика по уровням модуля — пока в памяти
//    браузера (localStorage): функции loadPlanetProgress,
//    markSectionCompleted, markSectionSkipped, markLessonRead;
// 2) горизонтальная полоса уровней с замками и плашки шагов
//    «Урок → Тест → Уровень пройден» — компоненты PlanetLevels
//    и LevelStepPills.
// ============================================================

/* --- planet progress (localStorage) ---
   Level gating state lives in localStorage for the MVP — persistence to the
   lesson_progress table in Supabase is a later pass. */

export interface PlanetProgress {
  completedSections: number[];
  skipped: number[];
  /** Sections whose lesson has been read (step 1 of Урок → Тест → Уровень
      пройден) but whose level test hasn't been passed yet. A section already
      present in `completedSections` — including data written before this
      field existed — counts as fully read too; callers should treat lesson
      "read" as `lessonRead.includes(i) || completedSections.includes(i)`. */
  lessonRead: number[];
}

/* Multi-subject planets (see constants/academy/subjects.ts) version their key:
   progress arrays there hold FLAT indices across all grades, which old
   grade-relative entries must not bleed into. */
const progressKey = (slug: string): string =>
  hasSubjects(slug) ? `novex.planet.v2.${slug}` : `novex.planet.${slug}`;

const sanitizeIndices = (value: unknown): number[] =>
  Array.isArray(value)
    ? value.filter((n): n is number => typeof n === 'number' && Number.isInteger(n) && n >= 0)
    : [];

// Читаем сохранённый прогресс из браузера; если записи нет или она
// испорчена — начинаем с чистого листа.
export const loadPlanetProgress = (slug: string): PlanetProgress => {
  try {
    const raw = window.localStorage.getItem(progressKey(slug));
    if (!raw) return { completedSections: [], skipped: [], lessonRead: [] };
    const parsed = JSON.parse(raw) as Partial<PlanetProgress>;
    return {
      completedSections: sanitizeIndices(parsed.completedSections),
      skipped: sanitizeIndices(parsed.skipped),
      lessonRead: sanitizeIndices(parsed.lessonRead),
    };
  } catch {
    return { completedSections: [], skipped: [], lessonRead: [] };
  }
};

const savePlanetProgress = (slug: string, progress: PlanetProgress): void => {
  try {
    window.localStorage.setItem(progressKey(slug), JSON.stringify(progress));
  } catch {
    /* storage full / unavailable — progress simply won't persist */
  }
};

const addToSorted = (list: number[], value: number): number[] =>
  list.includes(value) ? list : [...list, value].sort((a, b) => a - b);

// Отмечаем уровень пройденным (markSectionCompleted), пропущенным
// через тест (markSectionSkipped) или «урок прочитан» (markLessonRead)
// и сразу сохраняем результат в браузере.
export const markSectionCompleted = (slug: string, sectionIndex: number): PlanetProgress => {
  const current = loadPlanetProgress(slug);
  const next: PlanetProgress = {
    ...current,
    completedSections: addToSorted(current.completedSections, sectionIndex),
  };
  savePlanetProgress(slug, next);
  return next;
};

export const markSectionSkipped = (slug: string, sectionIndex: number): PlanetProgress => {
  const current = loadPlanetProgress(slug);
  const next: PlanetProgress = {
    ...current,
    completedSections: addToSorted(current.completedSections, sectionIndex),
    skipped: addToSorted(current.skipped, sectionIndex),
  };
  savePlanetProgress(slug, next);
  return next;
};

/** Step 1 of a level (Урок) — read but not yet tested/completed. */
export const markLessonRead = (slug: string, sectionIndex: number): PlanetProgress => {
  const current = loadPlanetProgress(slug);
  const next: PlanetProgress = {
    ...current,
    lessonRead: addToSorted(current.lessonRead, sectionIndex),
  };
  savePlanetProgress(slug, next);
  return next;
};

/* --- level swiper --- */

export type PlanetLevelStatus = 'done' | 'open' | 'locked';

const LEVEL_WORD: Localized = { ru: 'Уровень', kk: 'Деңгей', en: 'Level' };
const RECOMMENDED: Localized = { ru: 'Рекомендуется', kk: 'Ұсынылған', en: 'Recommended' };
const PREV_LEVEL: Localized = {
  ru: 'Предыдущий уровень',
  kk: 'Алдыңғы деңгей',
  en: 'Previous level',
};
const NEXT_LEVEL: Localized = {
  ru: 'Следующий уровень',
  kk: 'Келесі деңгей',
  en: 'Next level',
};

/* Non-academic modules (Жизненные навыки / Навыки будущего) label their
   sections with Locus Academy's difficulty bands instead of grade-style
   numbering. */
const BAND_LABEL: Record<LevelBand, Localized> = {
  beginner: { ru: 'Начальный', kk: 'Бастауыш', en: 'Beginner' },
  intermediate: { ru: 'Средний', kk: 'Орта', en: 'Intermediate' },
  advanced: { ru: 'Продвинутый', kk: 'Жоғары', en: 'Advanced' },
};

/* Mirrors Locus Academy's second level type — the account-wide XP rank
   ladder (Explorer → Voyager → Pioneer → Innovator → Founder), which Locus
   pairs an icon with a localized name for. Each difficulty band here maps to
   the matching rank tier (first three of that ladder) so the pill carries
   both classifications, the way Locus does. */
const BAND_RANK: Record<LevelBand, { icon: LucideIcon; name: Localized }> = {
  beginner: { icon: Telescope, name: { ru: 'Исследователь', kk: 'Зерттеуші', en: 'Explorer' } },
  intermediate: { icon: Rocket, name: { ru: 'Путешественник', kk: 'Саяхатшы', en: 'Voyager' } },
  advanced: { icon: Zap, name: { ru: 'Пионер', kk: 'Пионер', en: 'Pioneer' } },
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

interface NavArrowProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  label: string;
  onClick: () => void;
}

const NavArrow: React.FC<NavArrowProps> = ({ direction, disabled, label, onClick }) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className={`${FOCUS_RING} flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line/60 bg-white text-slateink transition-colors hover:border-teal/50 hover:text-teal disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line/60 disabled:hover:text-slateink`}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
    ) : (
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    )}
  </button>
);

interface PlanetLevelsProps {
  sections: AcademySection[];
  /** Per-section state, aligned with `sections` by index. */
  statuses: PlanetLevelStatus[];
  activeIdx: number;
  /** First incomplete level («Рекомендуется» chip); -1 when all is done. */
  recommendedIdx: number;
  /** Академическая база modules keep grade-style "Уровень N" numbering;
      every other direction labels pills with beginner/intermediate/advanced
      bands instead (see `bandForIndex`). */
  isAcademic: boolean;
  /** Optional per-section grade chip («8 класс» / "Grade 8"), parallel to
      `sections`; subject ladders pass it so the grade climb stays visible.
      Absent → pills render exactly as before. */
  gradeLabels?: (string | null)[];
  onSelect: (idx: number) => void;
}

/** Horizontal level rail: planet sections as sequential locked/unlocked pills. */
// Полоса уровней: круглые кнопки-уровни. Заблокированные показаны
// с замком, следующий непройденный — с пометкой «Рекомендуется».
// Активный уровень автоматически прокручивается в поле зрения.
const PlanetLevels: React.FC<PlanetLevelsProps> = ({
  sections,
  statuses,
  activeIdx,
  recommendedIdx,
  isAcademic,
  gradeLabels,
  onSelect,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const stripRef = useRef<HTMLDivElement | null>(null);

  // Keep the active pill in view as the level changes.
  // При смене уровня прокручиваем полосу так, чтобы активная кнопка
  // оставалась видимой.
  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(`[data-level-idx="${activeIdx}"]`);
    el?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeIdx, reducedMotion]);

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-line/50 bg-white p-2 shadow-[0_1px_3px_rgba(17,26,42,0.04)]">
      <NavArrow
        direction="prev"
        disabled={activeIdx === 0}
        label={loc(language, PREV_LEVEL)}
        onClick={() => onSelect(Math.max(0, activeIdx - 1))}
      />
      <div
        ref={stripRef}
        role="tablist"
        aria-label={loc(language, LEVEL_WORD)}
        className="planet-levels-strip flex flex-1 items-center gap-1.5 overflow-x-auto px-0.5 py-0.5"
      >
        {(() => {
          // Running per-band ordinal (1-based position within its band),
          // computed once per render in section order.
          let bandOrdinal = 0;
          let lastBand: LevelBand | null = null;
          return sections.map((section, idx) => {
            const status = statuses[idx] ?? 'open';
            const isActive = idx === activeIdx;
            const isLocked = status === 'locked';
            const isRecommended = idx === recommendedIdx;
            const fullTitle = pickLangField(
              language,
              section.title,
              section.titleRu,
              section.titleKk,
            );
            const band = bandForIndex(idx, sections.length);
            if (band !== lastBand) {
              lastBand = band;
              bandOrdinal = 1;
            } else {
              bandOrdinal += 1;
            }
            const RankIcon = BAND_RANK[band].icon;
            const gradeLabel = gradeLabels?.[idx] ?? null;
            const pillBody = (
              <>
                {isAcademic ? (
                  <span>
                    {loc(language, LEVEL_WORD)} {idx + 1} ·{' '}
                  </span>
                ) : (
                  <span
                    className="inline-flex shrink-0 items-center gap-1"
                    title={loc(language, BAND_RANK[band].name)}
                  >
                    <RankIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                    {loc(language, BAND_LABEL[band])} {bandOrdinal} ·
                  </span>
                )}
                <span className="max-w-48 truncate sm:max-w-64" title={fullTitle}>
                  {fullTitle}
                </span>
                {isRecommended && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none text-coral ${
                      isActive ? 'bg-white' : 'bg-coral/10'
                    }`}
                  >
                    {loc(language, RECOMMENDED)}
                  </span>
                )}
              </>
            );
            return (
              <button
                key={`${section.title}-${idx}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-level-idx={idx}
                onClick={() => onSelect(idx)}
                className={`${FOCUS_RING} inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-teal bg-teal text-white shadow-[0_4px_12px_rgba(33,159,162,0.25)]'
                    : isLocked
                      ? 'border-line/40 bg-mist/30 text-slateink/70 hover:border-line/70'
                      : 'border-line/60 bg-white text-slateink hover:border-teal/40 hover:text-teal-dark'
                }`}
              >
                {isLocked && <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />}
                {gradeLabel !== null ? (
                  <span className="flex flex-col items-start">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-slateink'}`}
                    >
                      {gradeLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">{pillBody}</span>
                  </span>
                ) : (
                  pillBody
                )}
              </button>
            );
          });
        })()}
      </div>
      <NavArrow
        direction="next"
        disabled={activeIdx === sections.length - 1}
        label={loc(language, NEXT_LEVEL)}
        onClick={() => onSelect(Math.min(sections.length - 1, activeIdx + 1))}
      />
      <style>{`.planet-levels-strip{scrollbar-width:none}.planet-levels-strip::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
};

export default PlanetLevels;

/* --- level step pills (Урок → Тест → Уровень пройден) --- */

// Плашки шагов внутри карточки уровня: «Урок → Тест → Уровень пройден».
// Шаг «Тест» скрывается, если для уровня нельзя собрать тест.

export type LevelStepState = 'done' | 'active' | 'locked';

const STEP_LESSON: Localized = { ru: 'Урок', kk: 'Сабақ', en: 'Lesson' };
const STEP_TEST: Localized = { ru: 'Тест', kk: 'Тест', en: 'Test' };
const STEP_DONE: Localized = { ru: 'Уровень пройден', kk: 'Деңгей өтілді', en: 'Level completed' };

const stepPillClass = (state: LevelStepState): string =>
  state === 'done'
    ? 'border-teal bg-teal/10 text-teal-dark'
    : state === 'active'
      ? 'border-teal bg-teal text-white'
      : 'border-line/50 bg-mist/20 text-slateink/70';

interface LevelStepPillsProps {
  lessonState: LevelStepState;
  /** Omit when the section can't generate a test — the flow collapses to
      Урок → Уровень пройден, same as before. */
  testState?: LevelStepState;
  doneState: LevelStepState;
  /** Called when the Урок pill is clicked — opens the level's lesson. Stays
      wired up when 'done' too, so a finished lesson can be re-read. */
  onLessonClick?: () => void;
  /** Called when the Тест pill is clicked; only wired up while it's 'active'. */
  onTestClick?: () => void;
}

/** Three-step progress pills for the active level card: Урок → Тест →
    Уровень пройден (Тест omitted when the section has no generatable test). */
export const LevelStepPills: React.FC<LevelStepPillsProps> = ({
  lessonState,
  testState,
  doneState,
  onLessonClick,
  onTestClick,
}) => {
  const { language } = useLanguage();
  const steps: Array<{
    key: string;
    label: Localized;
    state: LevelStepState;
    onClick?: () => void;
  }> = [
    { key: 'lesson', label: STEP_LESSON, state: lessonState, onClick: onLessonClick },
    ...(testState !== undefined
      ? [
          {
            key: 'test',
            label: STEP_TEST,
            state: testState,
            onClick: testState === 'active' ? onTestClick : undefined,
          },
        ]
      : []),
    { key: 'done', label: STEP_DONE, state: doneState },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => {
        const inner = (
          <>
            {step.state === 'done' && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            {loc(language, step.label)}
          </>
        );
        return (
          <React.Fragment key={step.key}>
            {i > 0 && <span aria-hidden="true" className="h-px w-4 shrink-0 bg-line/60" />}
            {step.onClick ? (
              <button
                type="button"
                onClick={step.onClick}
                className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-teal-dark ${stepPillClass(step.state)}`}
              >
                {inner}
              </button>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${stepPillClass(step.state)}`}
              >
                {inner}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
