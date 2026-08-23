import type { DiagnosticQuestion } from './types.ts';

// ============================================
// Банк вопросов диагностики по предмету «Информатика».
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
 * informatics — diagnostic question bank, ordered easy → hard.
 *
 * Every answer key has been verified by hand — do not reorder options
 * without updating `correctIndex`. gradeMin/gradeMax tag the honest
 * curriculum band (grades 7..12) so the grade filter never serves a
 * 12th-grader a grade-7 warm-up (or vice versa). Code snippets are kept
 * identical across languages; only the surrounding text is translated.
 */
export const INFORMATICS_QUESTIONS: DiagnosticQuestion<'informatics'>[] = [
  {
    id: 'informatics-bits-in-byte',
    subject: 'informatics',
    topic: 'data-units',
    topicLabel: {
      ru: 'Единицы информации',
      kk: 'Ақпарат бірліктері',
      en: 'Data units',
    },
    question: {
      ru: 'Сколько бит содержится в одном байте?',
      kk: 'Бір байтта неше бит бар?',
      en: 'How many bits are in one byte?',
    },
    options: [
      { ru: '8', kk: '8', en: '8' },
      { ru: '2', kk: '2', en: '2' },
      { ru: '16', kk: '16', en: '16' },
      { ru: '1024', kk: '1024', en: '1024' },
    ],
    correctIndex: 0,
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'informatics-logic-expression',
    subject: 'informatics',
    topic: 'boolean-logic',
    topicLabel: {
      ru: 'Логические выражения',
      kk: 'Логикалық өрнектер',
      en: 'Boolean expressions',
    },
    question: {
      ru: 'Чему равно значение выражения (A И B) ИЛИ (НЕ A), если A = ложь, B = истина?',
      kk: 'A = жалған, B = ақиқат болғанда (A ЖӘНЕ B) НЕМЕСЕ (A ЕМЕС) өрнегінің мәні неге тең?',
      en: 'What is the value of (A AND B) OR (NOT A) when A = false and B = true?',
    },
    options: [
      { ru: 'Истина', kk: 'Ақиқат', en: 'True' },
      { ru: 'Ложь', kk: 'Жалған', en: 'False' },
      { ru: 'Не определено', kk: 'Анықталмаған', en: 'Undefined' },
      {
        ru: 'Зависит от порядка вычислений',
        kk: 'Есептеу ретіне байланысты',
        en: 'Depends on evaluation order',
      },
    ],
    correctIndex: 0, // (false ∧ true) ∨ (¬false) = false ∨ true = true
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'informatics-flowchart-decision',
    subject: 'informatics',
    topic: 'algorithms-flowcharts',
    topicLabel: {
      ru: 'Алгоритмы и блок-схемы',
      kk: 'Алгоритмдер мен блок-схемалар',
      en: 'Algorithms and flowcharts',
    },
    question: {
      ru: 'Какой блок блок-схемы обозначает проверку условия (ветвление)?',
      kk: 'Блок-схемада шартты тексеру (тармақталу) қай блокпен белгіленеді?',
      en: 'Which flowchart block represents a condition check (branching)?',
    },
    options: [
      { ru: 'Ромб', kk: 'Ромб', en: 'Diamond' },
      { ru: 'Прямоугольник', kk: 'Тік төртбұрыш', en: 'Rectangle' },
      { ru: 'Овал', kk: 'Сопақша', en: 'Oval' },
      { ru: 'Параллелограмм', kk: 'Параллелограмм', en: 'Parallelogram' },
    ],
    correctIndex: 0, // условие — ромб; прямоугольник — действие, овал — начало/конец, параллелограмм — ввод/вывод
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'informatics-binary-to-decimal',
    subject: 'informatics',
    topic: 'number-systems',
    topicLabel: {
      ru: 'Системы счисления',
      kk: 'Санау жүйелері',
      en: 'Number systems',
    },
    question: {
      ru: 'Переведите число 1011₂ в десятичную систему счисления.',
      kk: '1011₂ санын ондық санау жүйесіне аударыңыз.',
      en: 'Convert the number 1011₂ to decimal.',
    },
    options: [
      { ru: '11', kk: '11', en: '11' },
      { ru: '13', kk: '13', en: '13' },
      { ru: '9', kk: '9', en: '9' },
      { ru: '12', kk: '12', en: '12' },
    ],
    correctIndex: 0, // 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'informatics-python-operators',
    subject: 'informatics',
    topic: 'python-basics',
    topicLabel: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    question: {
      ru: 'Что выведет программа? print(2 + 3 * 4)',
      kk: 'Бағдарлама нені басып шығарады? print(2 + 3 * 4)',
      en: 'What does the program print? print(2 + 3 * 4)',
    },
    options: [
      { ru: '14', kk: '14', en: '14' },
      { ru: '20', kk: '20', en: '20' },
      { ru: '24', kk: '24', en: '24' },
      { ru: '9', kk: '9', en: '9' },
    ],
    correctIndex: 0, // умножение первым: 3 · 4 = 12, затем 2 + 12 = 14
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'informatics-python-swap-trace',
    subject: 'informatics',
    topic: 'python-basics',
    topicLabel: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    question: {
      ru: 'Выполняется код: x = 3; y = 7; x = x + y; y = x − y. Чему равно значение y?',
      kk: 'Код орындалады: x = 3; y = 7; x = x + y; y = x − y. y айнымалысының мәні неге тең?',
      en: 'The code runs: x = 3; y = 7; x = x + y; y = x − y. What is the value of y?',
    },
    options: [
      { ru: '3', kk: '3', en: '3' },
      { ru: '7', kk: '7', en: '7' },
      { ru: '10', kk: '10', en: '10' },
      { ru: '4', kk: '4', en: '4' },
    ],
    correctIndex: 0, // x = 3 + 7 = 10; y = 10 − 7 = 3 (классический обмен значениями)
    difficulty: 3,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'informatics-decimal-to-binary',
    subject: 'informatics',
    topic: 'number-systems',
    topicLabel: {
      ru: 'Системы счисления',
      kk: 'Санау жүйелері',
      en: 'Number systems',
    },
    question: {
      ru: 'Переведите число 25₁₀ в двоичную систему счисления.',
      kk: '25₁₀ санын екілік санау жүйесіне аударыңыз.',
      en: 'Convert the number 25₁₀ to binary.',
    },
    options: [
      { ru: '11001', kk: '11001', en: '11001' },
      { ru: '10101', kk: '10101', en: '10101' },
      { ru: '10011', kk: '10011', en: '10011' },
      { ru: '11010', kk: '11010', en: '11010' },
    ],
    correctIndex: 0, // 25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰ = 11001₂
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'informatics-python-list-index',
    subject: 'informatics',
    topic: 'python-basics',
    topicLabel: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    question: {
      ru: 'Что выведет print(a[1]), если a = [10, 20, 30]?',
      kk: 'a = [10, 20, 30] болса, print(a[1]) нені шығарады?',
      en: 'What does print(a[1]) output if a = [10, 20, 30]?',
    },
    options: [
      { ru: '20', kk: '20', en: '20' },
      { ru: '10', kk: '10', en: '10' },
      { ru: '30', kk: '30', en: '30' },
      { ru: 'Ошибка', kk: 'Қате', en: 'Error' },
    ],
    correctIndex: 0, // индексация с нуля: a[0] = 10, a[1] = 20, a[2] = 30
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'informatics-python-loop-sum',
    subject: 'informatics',
    topic: 'python-basics',
    topicLabel: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    question: {
      ru: 'Чему равно s после выполнения кода: s = 0; for i in range(4): s = s + i?',
      kk: 'Код орындалғаннан кейін s мәні неге тең: s = 0; for i in range(4): s = s + i?',
      en: 'What is s after the code runs: s = 0; for i in range(4): s = s + i?',
    },
    options: [
      { ru: '6', kk: '6', en: '6' },
      { ru: '10', kk: '10', en: '10' },
      { ru: '4', kk: '4', en: '4' },
      { ru: '3', kk: '3', en: '3' },
    ],
    correctIndex: 0, // range(4) → 0, 1, 2, 3; сумма 0 + 1 + 2 + 3 = 6
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'informatics-logic-contradiction',
    subject: 'informatics',
    topic: 'boolean-logic',
    topicLabel: {
      ru: 'Логические выражения',
      kk: 'Логикалық өрнектер',
      en: 'Boolean expressions',
    },
    question: {
      ru: 'Каково значение выражения A И (НЕ A) при любом значении A?',
      kk: 'A-ның кез келген мәнінде (A ЖӘНЕ (A ЕМЕС)) өрнегінің мәні қандай?',
      en: 'What is the value of A AND (NOT A) for any value of A?',
    },
    options: [
      { ru: 'Всегда ложь', kk: 'Әрқашан жалған', en: 'Always false' },
      { ru: 'Всегда истина', kk: 'Әрқашан ақиқат', en: 'Always true' },
      { ru: 'Равно A', kk: 'A-ға тең', en: 'Equals A' },
      { ru: 'Не определено', kk: 'Анықталмаған', en: 'Undefined' },
    ],
    correctIndex: 0, // закон противоречия: A ∧ ¬A ≡ 0 для любого A
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'informatics-stack-lifo',
    subject: 'informatics',
    topic: 'data-structures',
    topicLabel: {
      ru: 'Структуры данных',
      kk: 'Деректер құрылымдары',
      en: 'Data structures',
    },
    question: {
      ru: 'По какому принципу работает стек?',
      kk: 'Стек қандай принциппен жұмыс істейді?',
      en: 'Which principle does a stack follow?',
    },
    options: [
      {
        ru: 'LIFO — последним пришёл, первым ушёл',
        kk: 'LIFO — соңғы келген, алғаш шығады',
        en: 'LIFO — last in, first out',
      },
      {
        ru: 'FIFO — первым пришёл, первым ушёл',
        kk: 'FIFO — алғаш келген, алғаш шығады',
        en: 'FIFO — first in, first out',
      },
      {
        ru: 'Случайный доступ к элементам',
        kk: 'Элементтерге кездейсоқ қол жеткізу',
        en: 'Random access to elements',
      },
      {
        ru: 'По приоритету элементов',
        kk: 'Элементтердің басымдығы бойынша',
        en: 'By element priority',
      },
    ],
    correctIndex: 0, // стек = LIFO; FIFO — это очередь
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'informatics-sql-select',
    subject: 'informatics',
    topic: 'databases-networks',
    topicLabel: {
      ru: 'Базы данных и сети',
      kk: 'Дерекқорлар мен желілер',
      en: 'Databases and networks',
    },
    question: {
      ru: 'Какая SQL-команда используется для выборки данных из таблицы?',
      kk: 'Кестеден деректерді іріктеп алу үшін қай SQL-командасы қолданылады?',
      en: 'Which SQL command is used to retrieve data from a table?',
    },
    options: [
      { ru: 'SELECT', kk: 'SELECT', en: 'SELECT' },
      { ru: 'INSERT', kk: 'INSERT', en: 'INSERT' },
      { ru: 'UPDATE', kk: 'UPDATE', en: 'UPDATE' },
      { ru: 'DELETE', kk: 'DELETE', en: 'DELETE' },
    ],
    correctIndex: 0, // SELECT — выборка; INSERT — вставка, UPDATE — изменение, DELETE — удаление
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'informatics-smtp-protocol',
    subject: 'informatics',
    topic: 'databases-networks',
    topicLabel: {
      ru: 'Базы данных и сети',
      kk: 'Дерекқорлар мен желілер',
      en: 'Databases and networks',
    },
    question: {
      ru: 'Какой протокол используется для отправки электронной почты?',
      kk: 'Электрондық поштаны жіберу үшін қай протокол қолданылады?',
      en: 'Which protocol is used to send email?',
    },
    options: [
      { ru: 'SMTP', kk: 'SMTP', en: 'SMTP' },
      { ru: 'HTTP', kk: 'HTTP', en: 'HTTP' },
      { ru: 'FTP', kk: 'FTP', en: 'FTP' },
      { ru: 'DHCP', kk: 'DHCP', en: 'DHCP' },
    ],
    correctIndex: 0, // SMTP — отправка почты; HTTP — веб-страницы, FTP — файлы, DHCP — выдача IP-адресов
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'informatics-python-recursion',
    subject: 'informatics',
    topic: 'python-basics',
    topicLabel: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    question: {
      ru: 'Дана функция: def f(n): return 1 if n <= 1 else n * f(n - 1). Что вернёт вызов f(4)?',
      kk: 'Берілген функция: def f(n): return 1 if n <= 1 else n * f(n - 1). f(4) шақыруы нені қайтарады?',
      en: 'Given the function: def f(n): return 1 if n <= 1 else n * f(n - 1). What does f(4) return?',
    },
    options: [
      { ru: '24', kk: '24', en: '24' },
      { ru: '10', kk: '10', en: '10' },
      { ru: '12', kk: '12', en: '12' },
      { ru: '16', kk: '16', en: '16' },
    ],
    correctIndex: 0, // f(4) = 4 · f(3) = 4 · 3 · 2 · 1 = 24 (факториал)
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'informatics-binary-search',
    subject: 'informatics',
    topic: 'data-structures',
    topicLabel: {
      ru: 'Структуры данных',
      kk: 'Деректер құрылымдары',
      en: 'Data structures',
    },
    question: {
      ru: 'Сколько сравнений (примерно) потребуется бинарному поиску в отсортированном массиве из 1000 элементов в худшем случае?',
      kk: '1000 элементі бар сұрыпталған массивте екілік іздеу ең нашар жағдайда шамамен неше салыстыруды қажет етеді?',
      en: 'Approximately how many comparisons does binary search need in the worst case on a sorted array of 1000 elements?',
    },
    options: [
      { ru: '10', kk: '10', en: '10' },
      { ru: '100', kk: '100', en: '100' },
      { ru: '500', kk: '500', en: '500' },
      { ru: '1000', kk: '1000', en: '1000' },
    ],
    correctIndex: 0, // каждое сравнение делит диапазон пополам: log₂(1000) ≈ 10
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
