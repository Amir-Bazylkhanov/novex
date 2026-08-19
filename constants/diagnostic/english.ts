import type { DiagnosticQuestion } from './types.ts';

/**
 * english — diagnostic question bank, ordered easy → hard.
 *
 * Moved verbatim from constants/diagnosticData.ts; the exercise text stays
 * in English in all languages. Every answer key was verified by hand — do
 * not reorder options without updating `correctIndex`. gradeMin/gradeMax
 * tag the honest curriculum band (grades 7..12).
 */
export const ENGLISH_QUESTIONS: DiagnosticQuestion<'english'>[] = [
  {
    id: 'english-present-simple',
    subject: 'english',
    topic: 'present-simple',
    topicLabel: { ru: 'Present Simple', kk: 'Present Simple', en: 'Present Simple' },
    question: {
      ru: 'She ___ to school every day.',
      kk: 'She ___ to school every day.',
      en: 'She ___ to school every day.',
    },
    options: [
      { ru: 'goes', kk: 'goes', en: 'goes' },
      { ru: 'go', kk: 'go', en: 'go' },
      { ru: 'going', kk: 'going', en: 'going' },
      { ru: 'went', kk: 'went', en: 'went' },
    ],
    correctIndex: 0, // third person singular
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'english-past-simple',
    subject: 'english',
    topic: 'past-simple',
    topicLabel: { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
    question: {
      ru: 'Yesterday we ___ a football match.',
      kk: 'Yesterday we ___ a football match.',
      en: 'Yesterday we ___ a football match.',
    },
    options: [
      { ru: 'watched', kk: 'watched', en: 'watched' },
      { ru: 'watch', kk: 'watch', en: 'watch' },
      { ru: 'watches', kk: 'watches', en: 'watches' },
      { ru: 'watching', kk: 'watching', en: 'watching' },
    ],
    correctIndex: 0, // yesterday → past simple
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'english-present-perfect',
    subject: 'english',
    topic: 'present-perfect',
    topicLabel: { ru: 'Present Perfect', kk: 'Present Perfect', en: 'Present Perfect' },
    question: {
      ru: 'I ___ never ___ to Astana.',
      kk: 'I ___ never ___ to Astana.',
      en: 'I ___ never ___ to Astana.',
    },
    options: [
      { ru: 'have / been', kk: 'have / been', en: 'have / been' },
      { ru: 'has / been', kk: 'has / been', en: 'has / been' },
      { ru: 'did / be', kk: 'did / be', en: 'did / be' },
      { ru: 'have / was', kk: 'have / was', en: 'have / was' },
    ],
    correctIndex: 0, // present perfect: have + V3 (been)
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 11,
  },
  {
    id: 'english-comparatives',
    subject: 'english',
    topic: 'comparatives',
    topicLabel: {
      ru: 'Сравнительная степень',
      kk: 'Салыстырмалы шырай',
      en: 'Comparatives',
    },
    question: {
      ru: 'This task is ___ than the last one.',
      kk: 'This task is ___ than the last one.',
      en: 'This task is ___ than the last one.',
    },
    options: [
      { ru: 'more difficult', kk: 'more difficult', en: 'more difficult' },
      { ru: 'difficulter', kk: 'difficulter', en: 'difficulter' },
      { ru: 'most difficult', kk: 'most difficult', en: 'most difficult' },
      { ru: 'much difficult', kk: 'much difficult', en: 'much difficult' },
    ],
    correctIndex: 0, // long adjectives form the comparative with "more"
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'english-passive-voice',
    subject: 'english',
    topic: 'passive-voice',
    topicLabel: {
      ru: 'Пассивный залог',
      kk: 'Ырықсыз етіс',
      en: 'Passive voice',
    },
    question: {
      ru: 'The letter ___ yesterday.',
      kk: 'The letter ___ yesterday.',
      en: 'The letter ___ yesterday.',
    },
    options: [
      { ru: 'was written', kk: 'was written', en: 'was written' },
      { ru: 'wrote', kk: 'wrote', en: 'wrote' },
      { ru: 'is written', kk: 'is written', en: 'is written' },
      { ru: 'has written', kk: 'has written', en: 'has written' },
    ],
    correctIndex: 0, // past simple passive: was + V3
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'english-zero-conditional',
    subject: 'english',
    topic: 'conditionals',
    topicLabel: {
      ru: 'Условные предложения',
      kk: 'Шартты рай сөйлемдері',
      en: 'Conditionals',
    },
    question: {
      ru: 'If you heat ice, it ___.',
      kk: 'If you heat ice, it ___.',
      en: 'If you heat ice, it ___.',
    },
    options: [
      { ru: 'melts', kk: 'melts', en: 'melts' },
      { ru: 'melt', kk: 'melt', en: 'melt' },
      { ru: 'melted', kk: 'melted', en: 'melted' },
      { ru: 'will melts', kk: 'will melts', en: 'will melts' },
    ],
    correctIndex: 0, // zero conditional: if + present, present; ice melts at 0°C
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'english-modal-should',
    subject: 'english',
    topic: 'modal-verbs',
    topicLabel: {
      ru: 'Модальные глаголы',
      kk: 'Модальды етістіктер',
      en: 'Modal verbs',
    },
    question: {
      ru: 'You ___ brush your teeth twice a day.',
      kk: 'You ___ brush your teeth twice a day.',
      en: 'You ___ brush your teeth twice a day.',
    },
    options: [
      { ru: 'should', kk: 'should', en: 'should' },
      { ru: 'should to', kk: 'should to', en: 'should to' },
      { ru: "mustn't", kk: "mustn't", en: "mustn't" },
      { ru: "can't", kk: "can't", en: "can't" },
    ],
    correctIndex: 0, // advice → should; modal + bare infinitive, no "to"
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'english-vocab-synonym-rapid',
    subject: 'english',
    topic: 'vocabulary-in-context',
    topicLabel: {
      ru: 'Лексика в контексте',
      kk: 'Контекстегі лексика',
      en: 'Vocabulary in context',
    },
    question: {
      ru: "Choose the word closest in meaning to 'rapid'. / Выберите слово, ближайшее по значению к «rapid».",
      kk: '«Rapid» сөзіне мағынасы ең жақын сөзді таңдаңыз. / Choose the word closest in meaning to “rapid”.',
      en: "Choose the word closest in meaning to 'rapid'.",
    },
    options: [
      { ru: 'fast', kk: 'fast', en: 'fast' },
      { ru: 'slow', kk: 'slow', en: 'slow' },
      { ru: 'loud', kk: 'loud', en: 'loud' },
      { ru: 'heavy', kk: 'heavy', en: 'heavy' },
    ],
    correctIndex: 0, // rapid = fast (синонимы)
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'english-first-conditional',
    subject: 'english',
    topic: 'conditionals',
    topicLabel: {
      ru: 'Условные предложения',
      kk: 'Шартты рай сөйлемдері',
      en: 'Conditionals',
    },
    question: {
      ru: 'If it rains tomorrow, we ___ at home.',
      kk: 'If it rains tomorrow, we ___ at home.',
      en: 'If it rains tomorrow, we ___ at home.',
    },
    options: [
      { ru: 'will stay', kk: 'will stay', en: 'will stay' },
      { ru: 'would stay', kk: 'would stay', en: 'would stay' },
      { ru: 'stayed', kk: 'stayed', en: 'stayed' },
      { ru: 'stay', kk: 'stay', en: 'stay' },
    ],
    correctIndex: 0, // first conditional: if + present, will + V
    difficulty: 2,
    gradeMin: 8,
    gradeMax: 10,
  },
  {
    id: 'english-modal-prohibition',
    subject: 'english',
    topic: 'modal-verbs',
    topicLabel: {
      ru: 'Модальные глаголы',
      kk: 'Модальды етістіктер',
      en: 'Modal verbs',
    },
    question: {
      ru: "You ___ smoke here. It's a hospital.",
      kk: "You ___ smoke here. It's a hospital.",
      en: "You ___ smoke here. It's a hospital.",
    },
    options: [
      { ru: "mustn't", kk: "mustn't", en: "mustn't" },
      { ru: "don't have to", kk: "don't have to", en: "don't have to" },
      { ru: "needn't", kk: "needn't", en: "needn't" },
      { ru: 'must', kk: 'must', en: 'must' },
    ],
    correctIndex: 0, // prohibition → mustn't (don't have to = не обязательно, частая ошибка)
    difficulty: 2,
    gradeMin: 8,
    gradeMax: 10,
  },
  {
    id: 'english-vocab-discovery',
    subject: 'english',
    topic: 'vocabulary-in-context',
    topicLabel: {
      ru: 'Лексика в контексте',
      kk: 'Контекстегі лексика',
      en: 'Vocabulary in context',
    },
    question: {
      ru: 'The scientist made an important ___.',
      kk: 'The scientist made an important ___.',
      en: 'The scientist made an important ___.',
    },
    options: [
      { ru: 'discovery', kk: 'discovery', en: 'discovery' },
      { ru: 'invention', kk: 'invention', en: 'invention' },
      { ru: 'research', kk: 'research', en: 'research' },
      { ru: 'experiment', kk: 'experiment', en: 'experiment' },
    ],
    correctIndex: 0, // collocation: to make a discovery (do research, conduct an experiment)
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 11,
  },
  {
    id: 'english-reported-statement',
    subject: 'english',
    topic: 'reported-speech',
    topicLabel: {
      ru: 'Косвенная речь',
      kk: 'Ауыспа сөйлем',
      en: 'Reported speech',
    },
    question: {
      ru: 'He said: “I am tired.” → He said (that) ___.',
      kk: 'He said: “I am tired.” → He said (that) ___.',
      en: 'He said: “I am tired.” → He said (that) ___.',
    },
    options: [
      { ru: 'he was tired', kk: 'he was tired', en: 'he was tired' },
      { ru: 'he is tired', kk: 'he is tired', en: 'he is tired' },
      { ru: 'he had been tired', kk: 'he had been tired', en: 'he had been tired' },
      { ru: 'he is being tired', kk: 'he is being tired', en: 'he is being tired' },
    ],
    correctIndex: 0, // backshift: am → was
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 11,
  },
  {
    id: 'english-second-conditional',
    subject: 'english',
    topic: 'conditionals',
    topicLabel: {
      ru: 'Условные предложения',
      kk: 'Шартты рай сөйлемдері',
      en: 'Conditionals',
    },
    question: {
      ru: 'If I ___ rich, I would travel the world.',
      kk: 'If I ___ rich, I would travel the world.',
      en: 'If I ___ rich, I would travel the world.',
    },
    options: [
      { ru: 'were', kk: 'were', en: 'were' },
      { ru: 'was', kk: 'was', en: 'was' },
      { ru: 'am', kk: 'am', en: 'am' },
      { ru: 'would be', kk: 'would be', en: 'would be' },
    ],
    correctIndex: 0, // second conditional: if + past (were for all persons), would + V
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'english-reported-question',
    subject: 'english',
    topic: 'reported-speech',
    topicLabel: {
      ru: 'Косвенная речь',
      kk: 'Ауыспа сөйлем',
      en: 'Reported speech',
    },
    question: {
      ru: 'She asked: “Where do you live?” → She asked ___.',
      kk: 'She asked: “Where do you live?” → She asked ___.',
      en: 'She asked: “Where do you live?” → She asked ___.',
    },
    options: [
      { ru: 'where I lived', kk: 'where I lived', en: 'where I lived' },
      { ru: 'where did I live', kk: 'where did I live', en: 'where did I live' },
      { ru: 'where do I live', kk: 'where do I live', en: 'where do I live' },
      { ru: 'where I live', kk: 'where I live', en: 'where I live' },
    ],
    correctIndex: 0, // reported question: statement word order + backshift live → lived
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'english-reported-command',
    subject: 'english',
    topic: 'reported-speech',
    topicLabel: {
      ru: 'Косвенная речь',
      kk: 'Ауыспа сөйлем',
      en: 'Reported speech',
    },
    question: {
      ru: 'The teacher said: “Open your books.” → The teacher ___.',
      kk: 'The teacher said: “Open your books.” → The teacher ___.',
      en: 'The teacher said: “Open your books.” → The teacher ___.',
    },
    options: [
      { ru: 'told us to open our books', kk: 'told us to open our books', en: 'told us to open our books' },
      { ru: 'said us to open our books', kk: 'said us to open our books', en: 'said us to open our books' },
      { ru: 'told that we open our books', kk: 'told that we open our books', en: 'told that we open our books' },
      { ru: 'asked opening our books', kk: 'asked opening our books', en: 'asked opening our books' },
    ],
    correctIndex: 0, // reported command: tell/ask + object + to-infinitive
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 12,
  },
];
