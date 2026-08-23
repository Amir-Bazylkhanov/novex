// ============================================
// Тип LessonContent описывает структуру одного урока Академии (введение +
// список секций, у каждой секции — теория, формулы, термины, разобранные
// примеры и задачи для практики, всё на трёх языках). Сами данные лежат в
// файлах constants/academy/lessons/*_full.ts, а здесь они просто собираются
// в один общий объект LESSON_DATA по ключу "Название темы_класс".
// ============================================
import { CORE_SCIENCES_FULL } from './lessons/core_sciences_full.ts';
import { APIB_FULL } from './lessons/apib_full.ts';
import { ADMISSION_EXAMS_FULL } from './lessons/admission_exams_full.ts';
import { RESEARCH_FULL } from './lessons/research_full.ts';
import { FINANCE_FULL } from './lessons/finance_full.ts';
import { ENTREPRENEURSHIP_FULL } from './lessons/entrepreneurship_full.ts';
import { PROGRAMMING_FULL } from './lessons/programming_full.ts';
import { PSYCHOLOGY_FULL } from './lessons/psychology_full.ts';
import { COMMUNICATION_FULL } from './lessons/communication_full.ts';
import { CREATIVITY_FULL } from './lessons/creativity_full.ts';
import { PRODUCTIVITY_FULL } from './lessons/productivity_full.ts';
import { CAREER_FULL } from './lessons/career_full.ts';

// Один урок (для одного класса) внутри планеты Академии.
export interface LessonContent {
  planetName: string;
  introduction: {
    en: string;
    ru: string;
  };
  // Список секций (тем) урока — каждая со своей теорией, формулами,
  // терминами, разобранными примерами и задачами для практики.
  sections: Array<{
    title: string;
    titleRu: string;
    titleKk: string;
    content: string;
    contentRu: string;
    contentKk: string;
    keyFormulas?: Array<{
      formula: string;
      /** Only present when the formula contains English prose (pure math stays single-variant). */
      formulaRu?: string;
      formulaKk?: string;
      /** Optional explicit LaTeX. When present, overrides the auto-converter. */
      tex?: string;
      description: string;
      descriptionRu: string;
      descriptionKk: string;
    }>;
    keyTerms?: Array<{
      term: string;
      termRu: string;
      termKk: string;
      definition: string;
      definitionRu: string;
      definitionKk: string;
    }>;
    solvedExamples: Array<{
      question: string;
      questionRu: string;
      questionKk: string;
      steps: Array<{
        en: string;
        ru: string;
        kk: string;
      }>;
      answer: string;
      answerRu?: string;
      answerKk?: string;
    }>;
    practiceProblems: Array<{
      difficulty: 'easy' | 'medium' | 'hard';
      question: string;
      questionRu: string;
      questionKk: string;
      answer: string;
      answerRu?: string;
      answerKk?: string;
      hint?: string;
      hintRu?: string;
      hintKk?: string;
      xp: number;
    }>;
  }>;
}

// Все уроки Академии, объединённые из отдельных файлов *_full.ts в один
// общий объект (ключ — "Название темы_класс", например "Finance_9").
export const LESSON_DATA: Record<string, LessonContent> = {
  ...CORE_SCIENCES_FULL,
  ...APIB_FULL,
  ...ADMISSION_EXAMS_FULL,
  ...RESEARCH_FULL,
  ...FINANCE_FULL,
  ...ENTREPRENEURSHIP_FULL,
  ...PROGRAMMING_FULL,
  ...PSYCHOLOGY_FULL,
  ...COMMUNICATION_FULL,
  ...CREATIVITY_FULL,
  ...PRODUCTIVITY_FULL,
  ...CAREER_FULL,
};
