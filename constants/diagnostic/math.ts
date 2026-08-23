import type { DiagnosticQuestion } from './types.ts';

// ============================================
// Банк вопросов диагностики по предмету «Математика».
// Служит для определения уровня ученика ещё до начала обучения на курсе.
// Вопросы собираются в constants/diagnosticData.ts вместе с другими
// предметами и показываются на странице вступительного диагностического
// теста (адаптивно: 2 правильных подряд — вопрос сложнее, 2 неправильных —
// проще). Файл отсортирован от лёгких вопросов к сложным.
// Каждая запись — это: id, тема (topic), сам вопрос и 4 варианта ответа
// (на русском/казахском/английском), индекс правильного варианта,
// сложность (1–3) и диапазон классов (gradeMin–gradeMax), которым вопрос
// честно подходит по школьной программе.
// ============================================
/**
 * math — diagnostic question bank, ordered easy → hard.
 *
 * Moved verbatim from constants/diagnosticData.ts; every answer key was
 * verified by hand — do not reorder options without updating `correctIndex`.
 * gradeMin/gradeMax tag the honest curriculum band (grades 7..12) so the
 * grade filter never serves a 12th-grader a grade-7 warm-up (or vice versa).
 */
export const MATH_QUESTIONS: DiagnosticQuestion<'math'>[] = [
  {
    id: 'math-linear-equation',
    subject: 'math',
    topic: 'linear-equations',
    topicLabel: {
      ru: 'Линейные уравнения',
      kk: 'Сызықтық теңдеулер',
      en: 'Linear equations',
    },
    question: {
      ru: 'Решите уравнение: 3x − 7 = 8',
      kk: 'Теңдеуді шешіңіз: 3x − 7 = 8',
      en: 'Solve the equation: 3x − 7 = 8',
    },
    options: [
      { ru: 'x = 5', kk: 'x = 5', en: 'x = 5' },
      { ru: 'x = 3', kk: 'x = 3', en: 'x = 3' },
      { ru: 'x = 7/3', kk: 'x = 7/3', en: 'x = 7/3' },
      { ru: 'x = 15', kk: 'x = 15', en: 'x = 15' },
    ],
    correctIndex: 0, // 3x = 15 → x = 5
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'math-percentages',
    subject: 'math',
    topic: 'percentages',
    topicLabel: { ru: 'Проценты', kk: 'Пайыздар', en: 'Percentages' },
    question: {
      ru: 'Сколько будет 25% от 240?',
      kk: '240 санының 25%-ы нешеге тең?',
      en: 'What is 25% of 240?',
    },
    options: [
      { ru: '60', kk: '60', en: '60' },
      { ru: '24', kk: '24', en: '24' },
      { ru: '80', kk: '80', en: '80' },
      { ru: '96', kk: '96', en: '96' },
    ],
    correctIndex: 0, // 240 × 0.25 = 60
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'math-quadratic',
    subject: 'math',
    topic: 'quadratic-equations',
    topicLabel: {
      ru: 'Квадратные уравнения',
      kk: 'Квадрат теңдеулер',
      en: 'Quadratic equations',
    },
    question: {
      ru: 'Решите уравнение: x² − 5x + 6 = 0',
      kk: 'Теңдеуді шешіңіз: x² − 5x + 6 = 0',
      en: 'Solve the equation: x² − 5x + 6 = 0',
    },
    options: [
      { ru: 'x = 2 и x = 3', kk: 'x = 2 және x = 3', en: 'x = 2 and x = 3' },
      { ru: 'x = −2 и x = −3', kk: 'x = −2 және x = −3', en: 'x = −2 and x = −3' },
      { ru: 'x = 1 и x = 6', kk: 'x = 1 және x = 6', en: 'x = 1 and x = 6' },
      { ru: 'x = −1 и x = −6', kk: 'x = −1 және x = −6', en: 'x = −1 and x = −6' },
    ],
    correctIndex: 0, // (x − 2)(x − 3) = x² − 5x + 6
    difficulty: 2,
    gradeMin: 8,
    gradeMax: 10,
  },
  {
    id: 'math-linear-function',
    subject: 'math',
    topic: 'linear-functions',
    topicLabel: {
      ru: 'Линейная функция',
      kk: 'Сызықтық функция',
      en: 'Linear functions',
    },
    question: {
      ru: 'Чему равен угловой коэффициент прямой y = −2x + 5?',
      kk: 'y = −2x + 5 түзуінің бұрыштық коэффициенті неге тең?',
      en: 'What is the slope of the line y = −2x + 5?',
    },
    options: [
      { ru: '−2', kk: '−2', en: '−2' },
      { ru: '5', kk: '5', en: '5' },
      { ru: '2', kk: '2', en: '2' },
      { ru: '0', kk: '0', en: '0' },
    ],
    correctIndex: 0, // y = kx + b, k = −2
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'math-geometric-progression',
    subject: 'math',
    topic: 'geometric-progression',
    topicLabel: {
      ru: 'Геометрическая прогрессия',
      kk: 'Геометриялық прогрессия',
      en: 'Geometric progression',
    },
    question: {
      ru: 'В геометрической прогрессии b₁ = 3 и q = 2. Найдите b₅.',
      kk: 'Геометриялық прогрессияда b₁ = 3 және q = 2. b₅ мәнін табыңыз.',
      en: 'In a geometric progression b₁ = 3 and q = 2. Find b₅.',
    },
    options: [
      { ru: '48', kk: '48', en: '48' },
      { ru: '24', kk: '24', en: '24' },
      { ru: '96', kk: '96', en: '96' },
      { ru: '15', kk: '15', en: '15' },
    ],
    correctIndex: 0, // b₅ = 3 × 2⁴ = 48
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 11,
  },
  {
    id: 'math-powers',
    subject: 'math',
    topic: 'powers',
    topicLabel: { ru: 'Степени', kk: 'Дәрежелер', en: 'Powers' },
    question: {
      ru: 'Вычислите: 2³ · 2²',
      kk: 'Есептеңіз: 2³ · 2²',
      en: 'Evaluate: 2³ · 2²',
    },
    options: [
      { ru: '64', kk: '64', en: '64' },
      { ru: '16', kk: '16', en: '16' },
      { ru: '32', kk: '32', en: '32' },
      { ru: '10', kk: '10', en: '10' },
    ],
    correctIndex: 2, // 2³ · 2² = 2^(3+2) = 2⁵ = 32
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'math-triangle-angles',
    subject: 'math',
    topic: 'triangle-angles',
    topicLabel: {
      ru: 'Углы треугольника',
      kk: 'Үшбұрыш бұрыштары',
      en: 'Angles of a triangle',
    },
    question: {
      ru: 'Два угла треугольника равны 50° и 60°. Найдите третий угол.',
      kk: 'Үшбұрыштың екі бұрышы 50° және 60°-қа тең. Үшінші бұрышын табыңыз.',
      en: 'Two angles of a triangle are 50° and 60°. Find the third angle.',
    },
    options: [
      { ru: '110°', kk: '110°', en: '110°' },
      { ru: '90°', kk: '90°', en: '90°' },
      { ru: '80°', kk: '80°', en: '80°' },
      { ru: '70°', kk: '70°', en: '70°' },
    ],
    correctIndex: 3, // 180° − 50° − 60° = 70°
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'math-system-of-equations',
    subject: 'math',
    topic: 'systems-of-equations',
    topicLabel: {
      ru: 'Системы уравнений',
      kk: 'Теңдеулер жүйесі',
      en: 'Systems of equations',
    },
    question: {
      ru: 'Решите систему уравнений: x + y = 10, x − y = 2',
      kk: 'Теңдеулер жүйесін шешіңіз: x + y = 10, x − y = 2',
      en: 'Solve the system of equations: x + y = 10, x − y = 2',
    },
    options: [
      { ru: 'x = 4, y = 6', kk: 'x = 4, y = 6', en: 'x = 4, y = 6' },
      { ru: 'x = 6, y = 4', kk: 'x = 6, y = 4', en: 'x = 6, y = 4' },
      { ru: 'x = 7, y = 3', kk: 'x = 7, y = 3', en: 'x = 7, y = 3' },
      { ru: 'x = 5, y = 5', kk: 'x = 5, y = 5', en: 'x = 5, y = 5' },
    ],
    correctIndex: 1, // сложим: 2x = 12 → x = 6, y = 10 − 6 = 4
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 9,
  },
  {
    id: 'math-arithmetic-progression',
    subject: 'math',
    topic: 'arithmetic-progression',
    topicLabel: {
      ru: 'Арифметическая прогрессия',
      kk: 'Арифметикалық прогрессия',
      en: 'Arithmetic progression',
    },
    question: {
      ru: 'В арифметической прогрессии a₁ = 5 и d = 3. Найдите a₁₀.',
      kk: 'Арифметикалық прогрессияда a₁ = 5 және d = 3. a₁₀ мәнін табыңыз.',
      en: 'In an arithmetic progression a₁ = 5 and d = 3. Find a₁₀.',
    },
    options: [
      { ru: '27', kk: '27', en: '27' },
      { ru: '35', kk: '35', en: '35' },
      { ru: '32', kk: '32', en: '32' },
      { ru: '30', kk: '30', en: '30' },
    ],
    correctIndex: 2, // a₁₀ = a₁ + 9d = 5 + 9·3 = 32
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'math-sin-30',
    subject: 'math',
    topic: 'trigonometric-values',
    topicLabel: {
      ru: 'Значения тригонометрических функций',
      kk: 'Тригонометриялық функциялардың мәндері',
      en: 'Values of trigonometric functions',
    },
    question: {
      ru: 'Найдите значение sin 30°',
      kk: 'sin 30° мәнін табыңыз',
      en: 'Find the value of sin 30°',
    },
    options: [
      { ru: '√3/2', kk: '√3/2', en: '√3/2' },
      { ru: '1/2', kk: '1/2', en: '1/2' },
      { ru: '√2/2', kk: '√2/2', en: '√2/2' },
      { ru: '1', kk: '1', en: '1' },
    ],
    correctIndex: 1, // sin 30° = 1/2 (табличное значение)
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'math-trig-equation',
    subject: 'math',
    topic: 'trigonometric-equations',
    topicLabel: {
      ru: 'Тригонометрические уравнения',
      kk: 'Тригонометриялық теңдеулер',
      en: 'Trigonometric equations',
    },
    question: {
      ru: 'Решите уравнение: cos x = 0',
      kk: 'Теңдеуді шешіңіз: cos x = 0',
      en: 'Solve the equation: cos x = 0',
    },
    options: [
      { ru: 'x = πn', kk: 'x = πn', en: 'x = πn' },
      { ru: 'x = 2πn', kk: 'x = 2πn', en: 'x = 2πn' },
      { ru: 'x = π/2 + 2πn', kk: 'x = π/2 + 2πn', en: 'x = π/2 + 2πn' },
      { ru: 'x = π/2 + πn', kk: 'x = π/2 + πn', en: 'x = π/2 + πn' },
    ],
    correctIndex: 3, // cos x = 0 при x = π/2 + πn, n ∈ Z
    difficulty: 2,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'math-derivative-power',
    subject: 'math',
    topic: 'derivative',
    topicLabel: { ru: 'Производная', kk: 'Туынды', en: 'Derivative' },
    question: {
      ru: 'Найдите f′(2), если f(x) = x³',
      kk: 'f(x) = x³ болса, f′(2) мәнін табыңыз',
      en: 'Find f′(2) if f(x) = x³',
    },
    options: [
      { ru: '8', kk: '8', en: '8' },
      { ru: '6', kk: '6', en: '6' },
      { ru: '12', kk: '12', en: '12' },
      { ru: '9', kk: '9', en: '9' },
    ],
    correctIndex: 2, // f′(x) = 3x², f′(2) = 3·4 = 12
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'math-derivative-sin',
    subject: 'math',
    topic: 'derivative',
    topicLabel: { ru: 'Производная', kk: 'Туынды', en: 'Derivative' },
    question: {
      ru: 'Найдите производную функции y = sin x',
      kk: 'y = sin x функциясының туындысын табыңыз',
      en: 'Find the derivative of the function y = sin x',
    },
    options: [
      { ru: 'y′ = −cos x', kk: 'y′ = −cos x', en: 'y′ = −cos x' },
      { ru: 'y′ = −sin x', kk: 'y′ = −sin x', en: 'y′ = −sin x' },
      { ru: 'y′ = tg x', kk: 'y′ = tg x', en: 'y′ = tan x' },
      { ru: 'y′ = cos x', kk: 'y′ = cos x', en: 'y′ = cos x' },
    ],
    correctIndex: 3, // (sin x)′ = cos x
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'math-logarithm-sum',
    subject: 'math',
    topic: 'logarithms',
    topicLabel: { ru: 'Логарифмы', kk: 'Логарифмдер', en: 'Logarithms' },
    question: {
      ru: 'Вычислите: log₅ 25 + log₅ 5',
      kk: 'Есептеңіз: log₅ 25 + log₅ 5',
      en: 'Evaluate: log₅ 25 + log₅ 5',
    },
    options: [
      { ru: '2', kk: '2', en: '2' },
      { ru: '3', kk: '3', en: '3' },
      { ru: '5', kk: '5', en: '5' },
      { ru: '10', kk: '10', en: '10' },
    ],
    correctIndex: 1, // log₅ 25 = 2, log₅ 5 = 1, сумма = 3
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'math-minimum-point',
    subject: 'math',
    topic: 'derivative',
    topicLabel: { ru: 'Производная', kk: 'Туынды', en: 'Derivative' },
    question: {
      ru: 'При каком значении x функция f(x) = x² − 6x + 5 принимает наименьшее значение?',
      kk: 'f(x) = x² − 6x + 5 функциясы x-тің қандай мәнінде ең кіші мәнге ие болады?',
      en: 'For which value of x does the function f(x) = x² − 6x + 5 take its minimum value?',
    },
    options: [
      { ru: 'x = 3', kk: 'x = 3', en: 'x = 3' },
      { ru: 'x = −3', kk: 'x = −3', en: 'x = −3' },
      { ru: 'x = 6', kk: 'x = 6', en: 'x = 6' },
      { ru: 'x = 0', kk: 'x = 0', en: 'x = 0' },
    ],
    correctIndex: 0, // f′(x) = 2x − 6 = 0 → x = 3 (вершина параболы, ветви вверх)
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
