import type { Localized } from '../../utils/i18n.ts';
import type { AcademyPlanet, AcademySection } from './catalog.ts';

/* Multi-subject planets (core_sciences, apib, admission_exams) interleave
   several subjects inside every grade's sections[] — so the raw grade-picked
   strip reads "Level 1–4 = math, Level 5–6 = physics…". This module splits
   those planets into per-subject difficulty ladders: every section of one
   subject across ALL grades, ascending grade order, then in-file order.
   All other planets are untouched and keep the grade-picked flow. */

export interface AcademyTrackSubject {
  id: string;
  name: Localized;
}

const GENERAL_PREP: Localized = {
  ru: 'Общая подготовка',
  kk: 'Жалпы дайындық',
  en: 'General',
};

export const PLANET_SUBJECTS: Record<string, AcademyTrackSubject[]> = {
  core_sciences: [
    { id: 'math', name: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
    { id: 'physics', name: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
    { id: 'chemistry', name: { ru: 'Химия', kk: 'Химия', en: 'Chemistry' } },
    { id: 'biology', name: { ru: 'Биология', kk: 'Биология', en: 'Biology' } },
  ],
  apib: [
    { id: 'ap_calc', name: { ru: 'AP Calculus', kk: 'AP Calculus', en: 'AP Calculus' } },
    { id: 'ap_physics', name: { ru: 'AP Physics', kk: 'AP Physics', en: 'AP Physics' } },
    { id: 'ap_chem', name: { ru: 'AP Chemistry', kk: 'AP Chemistry', en: 'AP Chemistry' } },
    { id: 'ap_bio', name: { ru: 'AP Biology', kk: 'AP Biology', en: 'AP Biology' } },
    { id: 'ib', name: { ru: 'IB', kk: 'IB', en: 'IB' } },
    { id: 'general', name: GENERAL_PREP },
  ],
  admission_exams: [
    { id: 'sat', name: { ru: 'SAT', kk: 'SAT', en: 'SAT' } },
    { id: 'act', name: { ru: 'ACT', kk: 'ACT', en: 'ACT' } },
    { id: 'ielts', name: { ru: 'IELTS', kk: 'IELTS', en: 'IELTS' } },
    { id: 'toefl', name: { ru: 'TOEFL', kk: 'TOEFL', en: 'TOEFL' } },
    { id: 'general', name: GENERAL_PREP },
  ],
};

export const hasSubjects = (slug: string): boolean => PLANET_SUBJECTS[slug] !== undefined;

/* Exhaustive title → subject table for core_sciences: every section title in
   lessons/core_sciences_full.ts (grades 8–12), keyed by the ENGLISH title.
   Grade-12 "Biochemistry" reads as chemistry (chemical processes in living
   organisms, biomolecules, the respiration equation), so it sits in chemistry. */
const CORE_SCIENCES_SUBJECT: Record<string, string> = {
  // math — grade 8
  'Integers and rationals: Number sets': 'math',
  'Integers and rationals: Operations with integers': 'math',
  'Integers and rationals: Operations with rational numbers': 'math',
  'Order of Operations': 'math',
  'Fractions & Decimals': 'math',
  'Ratios & Proportions': 'math',
  'Basic Geometry - Shapes': 'math',
  'Area & Perimeter': 'math',
  'Intro to Variables': 'math',
  'Linear Expressions': 'math',
  // math — grade 9
  'Linear Equations': 'math',
  Inequalities: 'math',
  'Systems of Equations': 'math',
  'Coordinate Geometry': 'math',
  'Triangles & Pythagorean Theorem': 'math',
  // math — grade 10
  'Quadratic Equations': 'math',
  Polynomials: 'math',
  'Functions & Graphs': 'math',
  'Circle Geometry': 'math',
  'Trigonometry Basics': 'math',
  // math — grade 11
  'Exponential Functions': 'math',
  Logarithms: 'math',
  'Sequences & Series': 'math',
  'Analytic Geometry': 'math',
  'Probability & Statistics': 'math',
  // math — grade 12
  'Limits & Continuity': 'math',
  Derivatives: 'math',
  Integrals: 'math',
  Vectors: 'math',
  'Complex Numbers': 'math',
  // physics
  'Speed & Distance': 'physics',
  "Newton's Laws": 'physics',
  'Work & Energy': 'physics',
  Kinematics: 'physics',
  'Electricity Basics': 'physics',
  'Waves & Optics': 'physics',
  Thermodynamics: 'physics',
  Electromagnetism: 'physics',
  'Quantum Physics Intro': 'physics',
  // chemistry
  'States of Matter': 'chemistry',
  'Atoms & Elements': 'chemistry',
  'Chemical Reactions': 'chemistry',
  Stoichiometry: 'chemistry',
  'Acids & Bases': 'chemistry',
  'Organic Chemistry': 'chemistry',
  'Reaction Kinetics': 'chemistry',
  Biochemistry: 'chemistry',
  // biology
  'Cells & Organisms': 'biology',
  'Cell Division': 'biology',
  'Genetics & DNA': 'biology',
  'Ecology & Ecosystems': 'biology',
  Evolution: 'biology',
  'Human Physiology': 'biology',
};

const apibSubjectId = (title: string): string => {
  if (title.startsWith('AP Calc') || title.startsWith('Pre-AP Math')) return 'ap_calc';
  if (title.startsWith('AP Physics')) return 'ap_physics';
  if (title.startsWith('AP Chem')) return 'ap_chem';
  if (title.startsWith('AP Bio')) return 'ap_bio';
  if (title.startsWith('IB')) return 'ib';
  return 'general';
};

const admissionExamsSubjectId = (title: string): string => {
  if (title.startsWith('SAT') || title.startsWith('Subject SAT')) return 'sat';
  if (title.startsWith('ACT')) return 'act';
  if (title.startsWith('IELTS')) return 'ielts';
  if (title.startsWith('TOEFL')) return 'toefl';
  return 'general';
};

/** Classify a section into its subject by the ENGLISH title. Unknown titles
    fall back to the planet's first subject (defensive — the tables above are
    meant to be exhaustive). */
export const sectionSubjectId = (planetSlug: string, sectionTitle: string): string => {
  const subjects = PLANET_SUBJECTS[planetSlug];
  const fallback = subjects?.[0]?.id ?? '';
  switch (planetSlug) {
    case 'core_sciences':
      return CORE_SCIENCES_SUBJECT[sectionTitle] ?? fallback;
    case 'apib':
      return apibSubjectId(sectionTitle);
    case 'admission_exams':
      return admissionExamsSubjectId(sectionTitle);
    default:
      return fallback;
  }
};

export interface FlatSection {
  /** Position across all grades concatenated — the identity progress, routes
      (`/learn/p/<slug>/<flatIndex>`) and plan refs (`slug::flatIndex`) use. */
  flatIndex: number;
  grade: number | null;
  section: AcademySection;
  subjectId: string;
}

/* flattenPlanetSections is called from several pages per render — memoize per
   planet slug (lesson data is a static module constant). */
const flatCache = new Map<string, FlatSection[]>();

/** All of a planet's sections, grades ascending (trailing `_N` key), then
    in-file order, each stamped with its running flat index. */
export const flattenPlanetSections = (planet: AcademyPlanet): FlatSection[] => {
  const cached = flatCache.get(planet.slug);
  if (cached) return cached;
  const byGrade = Object.entries(planet.lessons)
    .map(([key, lesson]) => {
      const match = key.match(/_(\d+)$/);
      return { grade: match ? Number.parseInt(match[1], 10) : null, lesson };
    })
    .sort((a, b) => (a.grade ?? 0) - (b.grade ?? 0));
  const flat: FlatSection[] = [];
  for (const { grade, lesson } of byGrade) {
    for (const section of lesson.sections) {
      flat.push({
        flatIndex: flat.length,
        grade,
        section,
        subjectId: sectionSubjectId(planet.slug, section.title),
      });
    }
  }
  flatCache.set(planet.slug, flat);
  return flat;
};

/** One subject's difficulty ladder: its sections across all grades, in
    ascending grade order. */
export const ladderForSubject = (planet: AcademyPlanet, subjectId: string): FlatSection[] =>
  flattenPlanetSections(planet).filter((entry) => entry.subjectId === subjectId);
