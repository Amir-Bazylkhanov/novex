import type { Localized } from '../../utils/i18n.ts';

// ============================================
// Общие типы (описания структуры данных) для банка вопросов вступительной
// диагностики. Вынесены в отдельный файл, чтобы файлы с вопросами по
// предметам (math.ts, physics.ts и т.д.) могли их использовать напрямую, а
// ../diagnosticData.ts потом собирал всё вместе и заново их же экспортировал
// — так старые пути импорта продолжают работать без изменений.
// ============================================
/**
 * Shared types for the NOV-01 Академик diagnostic question bank.
 *
 * Kept in a separate module so the per-subject banks (./math.ts, …) can
 * import them without an import cycle: ../diagnosticData.ts aggregates all
 * banks back into one pool and re-exports these types, so every existing
 * import path keeps working.
 */

// Список предметов, по которым есть банк вопросов диагностики.
export type DiagnosticSubject =
  | 'math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'informatics'
  | 'kazakh'
  | 'english'
  | 'history';

// Сложность вопроса: 1 — лёгкий, 2 — средний, 3 — сложный.
export type DiagnosticDifficulty = 1 | 2 | 3;
// Итоговый уровень ученика по предмету после диагностики.
export type DiagnosticLevel = 'beginner' | 'intermediate' | 'advanced';

// Один вопрос диагностики: текст, 4 варианта ответа, индекс правильного,
// сложность и класс(ы), которым он подходит.
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

// Краткое описание предмета: его slug и название на трёх языках.
export interface DiagnosticSubjectMeta {
  slug: DiagnosticSubject;
  label: Localized;
}
