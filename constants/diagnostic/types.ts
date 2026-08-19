import type { Localized } from '../../utils/i18n.ts';

/**
 * Shared types for the NOV-01 diagnostic question bank.
 *
 * Kept in a separate module so the per-subject banks (./math.ts, …) can
 * import them without an import cycle: ../diagnosticData.ts aggregates all
 * banks back into one pool and re-exports these types, so every existing
 * import path keeps working.
 */

export type DiagnosticSubject =
  | 'math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'informatics'
  | 'kazakh'
  | 'english'
  | 'history';

export type DiagnosticDifficulty = 1 | 2 | 3;
export type DiagnosticLevel = 'beginner' | 'intermediate' | 'advanced';

export interface DiagnosticQuestion<S extends DiagnosticSubject = DiagnosticSubject> {
  id: string;
  subject: S;
  /** Stable topic slug, stored in diagnostic_results.weak_topics / strong_topics. */
  topic: string;
  topicLabel: Localized;
  question: Localized;
  options: [Localized, Localized, Localized, Localized];
  correctIndex: number;
  difficulty: DiagnosticDifficulty;
  /** Grade band (7..12) this question honestly matches; used by the grade filter. */
  gradeMin: number;
  gradeMax: number;
}

export interface DiagnosticSubjectMeta {
  slug: DiagnosticSubject;
  label: Localized;
}
