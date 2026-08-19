import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { pickLangField, type AcademySection } from '../../constants/academy/catalog.ts';

/* --- planet progress (localStorage) ---
   Level gating state lives in localStorage for the MVP — persistence to the
   lesson_progress table in Supabase is a later pass. */

export interface PlanetProgress {
  completedSections: number[];
  skipped: number[];
}

const progressKey = (slug: string): string => `novex.planet.${slug}`;

const sanitizeIndices = (value: unknown): number[] =>
  Array.isArray(value)
    ? value.filter((n): n is number => typeof n === 'number' && Number.isInteger(n) && n >= 0)
    : [];

export const loadPlanetProgress = (slug: string): PlanetProgress => {
  try {
    const raw = window.localStorage.getItem(progressKey(slug));
    if (!raw) return { completedSections: [], skipped: [] };
    const parsed = JSON.parse(raw) as Partial<PlanetProgress>;
    return {
      completedSections: sanitizeIndices(parsed.completedSections),
      skipped: sanitizeIndices(parsed.skipped),
    };
  } catch {
    return { completedSections: [], skipped: [] };
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
    completedSections: addToSorted(current.completedSections, sectionIndex),
    skipped: addToSorted(current.skipped, sectionIndex),
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
  onSelect: (idx: number) => void;
}

/** Horizontal level rail: planet sections as sequential locked/unlocked pills. */
const PlanetLevels: React.FC<PlanetLevelsProps> = ({
  sections,
  statuses,
  activeIdx,
  recommendedIdx,
  onSelect,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const stripRef = useRef<HTMLDivElement | null>(null);

  // Keep the active pill in view as the level changes.
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
        {sections.map((section, idx) => {
          const status = statuses[idx] ?? 'open';
          const isActive = idx === activeIdx;
          const isLocked = status === 'locked';
          const isRecommended = idx === recommendedIdx;
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
              <span>
                {loc(language, LEVEL_WORD)} {idx + 1} ·{' '}
              </span>
              <span className="max-w-40 truncate sm:max-w-56">
                {pickLangField(language, section.title, section.titleRu, section.titleKk)}
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
            </button>
          );
        })}
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
