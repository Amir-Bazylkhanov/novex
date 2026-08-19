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

export interface LessonContent {
  planetName: string;
  introduction: {
    en: string;
    ru: string;
  };
  sections: Array<{
    title: string;
    titleRu: string;
    titleKk: string;
    content: string;
    contentRu: string;
    contentKk: string;
    keyFormulas?: Array<{
      formula: string;
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
