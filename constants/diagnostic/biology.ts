import type { DiagnosticQuestion } from './types.ts';

/**
 * biology — diagnostic question bank, ordered easy → hard.
 *
 * 15 grade-tagged questions across the KZ curriculum (grades 7..12):
 * cell biology, botany/zoology for grades 7–8, human anatomy, genetics,
 * ecology and evolution for the senior grades. Every answer key has been
 * verified by hand (see trailing comments) — do not reorder options
 * without updating `correctIndex`.
 * gradeMin/gradeMax tag the honest curriculum band (grades 7..12).
 */
export const BIOLOGY_QUESTIONS: DiagnosticQuestion<'biology'>[] = [
  {
    id: 'biology-photosynthesis-organelle',
    subject: 'biology',
    topic: 'cell-organelles',
    topicLabel: {
      ru: 'Органоиды клетки',
      kk: 'Жасуша органоидтері',
      en: 'Cell organelles',
    },
    question: {
      ru: 'В какой органелле растительной клетки происходит фотосинтез?',
      kk: 'Өсімдік жасушасында фотосинез қай органоидта жүреді?',
      en: 'In which organelle of a plant cell does photosynthesis take place?',
    },
    options: [
      { ru: 'Хлоропласт', kk: 'Хлоропласт', en: 'Chloroplast' },
      { ru: 'Митохондрия', kk: 'Митохондрия', en: 'Mitochondrion' },
      { ru: 'Ядро', kk: 'Ядро', en: 'Nucleus' },
      { ru: 'Рибосома', kk: 'Рибосома', en: 'Ribosome' },
    ],
    correctIndex: 0,
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'biology-glycolysis-product',
    subject: 'biology',
    topic: 'cell-respiration',
    topicLabel: {
      ru: 'Клеточное дыхание',
      kk: 'Жасуша тынысы',
      en: 'Cellular respiration',
    },
    question: {
      ru: 'Какое вещество образуется в результате гликолиза из одной молекулы глюкозы?',
      kk: 'Гликолиз нәтижесінде бір глюкоза молекуласына қандай зат түзіледі?',
      en: 'Which substance is produced by glycolysis from one molecule of glucose?',
    },
    options: [
      {
        ru: 'Пировиноградная кислота (пируват)',
        kk: 'Пировиноград қышқылы (пируват)',
        en: 'Pyruvic acid (pyruvate)',
      },
      { ru: 'Молочная кислота', kk: 'Сүт қышқылы', en: 'Lactic acid' },
      { ru: 'Углекислый газ', kk: 'Көмірқышқыл газы', en: 'Carbon dioxide' },
      { ru: 'Этиловый спирт', kk: 'Этил спирті', en: 'Ethanol' },
    ],
    correctIndex: 0, // glycolysis: glucose → 2 pyruvate
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 11,
  },
  // --- Grades 7–8 ---
  {
    id: 'biology-cell-nucleus-dna',
    subject: 'biology',
    topic: 'cell-organelles',
    topicLabel: {
      ru: 'Органоиды клетки',
      kk: 'Жасуша органоидтері',
      en: 'Cell organelles',
    },
    question: {
      ru: 'В какой органелле клетки хранится наследственная информация (ДНК)?',
      kk: 'Жасушада тұқымқуалаушылық ақпарат (ДНҚ) қай органоидта сақталады?',
      en: 'In which organelle of the cell is the hereditary information (DNA) stored?',
    },
    options: [
      { ru: 'Митохондрия', kk: 'Митохондрия', en: 'Mitochondrion' },
      { ru: 'Хлоропласт', kk: 'Хлоропласт', en: 'Chloroplast' },
      { ru: 'Рибосома', kk: 'Рибосома', en: 'Ribosome' },
      { ru: 'Ядро', kk: 'Ядро', en: 'Nucleus' },
    ],
    correctIndex: 3, // ДНК хромосом находится в ядре
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'biology-plant-organ-root',
    subject: 'biology',
    topic: 'plant-anatomy',
    topicLabel: {
      ru: 'Строение растений',
      kk: 'Өсімдіктер құрылысы',
      en: 'Plant structure',
    },
    question: {
      ru: 'Какой орган растения поглощает воду и минеральные соли из почвы?',
      kk: 'Өсімдіктің қай мүшесі топырақтан су мен минералды тұздарды сіңіреді?',
      en: 'Which plant organ absorbs water and mineral salts from the soil?',
    },
    options: [
      { ru: 'Стебель', kk: 'Сабақ', en: 'Stem' },
      { ru: 'Лист', kk: 'Жапырақ', en: 'Leaf' },
      { ru: 'Корень', kk: 'Тамыр', en: 'Root' },
      { ru: 'Цветок', kk: 'Гүл', en: 'Flower' },
    ],
    correctIndex: 2, // корень — орган поглощения воды и минеральных солей
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'biology-spider-class',
    subject: 'biology',
    topic: 'zoology',
    topicLabel: {
      ru: 'Зоология',
      kk: 'Зоология',
      en: 'Zoology',
    },
    question: {
      ru: 'К какому классу членистоногих относятся пауки?',
      kk: 'Өрмекшілер буынаяқтылардың қай класына жатады?',
      en: 'To which class of arthropods do spiders belong?',
    },
    options: [
      {
        ru: 'Паукообразные',
        kk: 'Өрмекшітәрізділер',
        en: 'Arachnids',
      },
      { ru: 'Насекомые', kk: 'Бөлектер', en: 'Insects' },
      { ru: 'Ракообразные', kk: 'Шаяндар', en: 'Crustaceans' },
      { ru: 'Многоножки', kk: 'Көпаяқтылар', en: 'Myriapods' },
    ],
    correctIndex: 0, // пауки — класс паукообразных (4 пары ног), не насекомые
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'biology-bird-heart',
    subject: 'biology',
    topic: 'zoology',
    topicLabel: {
      ru: 'Зоология',
      kk: 'Зоология',
      en: 'Zoology',
    },
    question: {
      ru: 'У какого из перечисленных животных четырёхкамерное сердце?',
      kk: 'Төмендегі жануарлардың қайсысының жүрегі төрт камералы?',
      en: 'Which of the following animals has a four-chambered heart?',
    },
    options: [
      { ru: 'Лягушка', kk: 'Бақа', en: 'Frog' },
      { ru: 'Карась', kk: 'Сазан', en: 'Crucian carp' },
      { ru: 'Голубь', kk: 'Көгершін', en: 'Pigeon' },
      { ru: 'Ящерица', kk: 'Кесіртке', en: 'Lizard' },
    ],
    correctIndex: 2, // птицы и млекопитающие — 4 камеры; лягушка и ящерица — 3, рыба — 2
    difficulty: 3,
    gradeMin: 7,
    gradeMax: 8,
  },
  // --- Grades 9–10 ---
  {
    id: 'biology-dna-complementary-base',
    subject: 'biology',
    topic: 'genetics',
    topicLabel: {
      ru: 'Генетика',
      kk: 'Генетика',
      en: 'Genetics',
    },
    question: {
      ru: 'Какое азотистое основание комплементарно аденину в молекуле ДНК?',
      kk: 'ДНҚ молекуласында аденинге комплементарлы азотты негіз қайсы?',
      en: 'Which nitrogenous base is complementary to adenine in a DNA molecule?',
    },
    options: [
      { ru: 'Гуанин', kk: 'Гуанин', en: 'Guanine' },
      { ru: 'Цитозин', kk: 'Цитозин', en: 'Cytosine' },
      { ru: 'Урацил', kk: 'Урацил', en: 'Uracil' },
      { ru: 'Тимин', kk: 'Тимин', en: 'Thymine' },
    ],
    correctIndex: 3, // пары ДНК: А–Т, Г–Ц; урацил — только в РНК
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'biology-neuron',
    subject: 'biology',
    topic: 'human-anatomy',
    topicLabel: {
      ru: 'Анатомия человека',
      kk: 'Адам анатомиясы',
      en: 'Human anatomy',
    },
    question: {
      ru: 'Как называется основная клетка нервной системы?',
      kk: 'Жүйке жүйесінің негізгі жасушасы қалай аталады?',
      en: 'What is the basic cell of the nervous system called?',
    },
    options: [
      { ru: 'Эритроцит', kk: 'Эритроцит', en: 'Erythrocyte' },
      { ru: 'Нейрон', kk: 'Нейрон', en: 'Neuron' },
      { ru: 'Лейкоцит', kk: 'Лейкоцит', en: 'Leukocyte' },
      { ru: 'Остеоцит', kk: 'Остеоцит', en: 'Osteocyte' },
    ],
    correctIndex: 1, // нейрон — структурная единица нервной ткани
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'biology-systemic-circulation',
    subject: 'biology',
    topic: 'human-anatomy',
    topicLabel: {
      ru: 'Анатомия человека',
      kk: 'Адам анатомиясы',
      en: 'Human anatomy',
    },
    question: {
      ru: 'Из какого отдела сердца начинается большой круг кровообращения?',
      kk: 'Үлкен қан айналым шеңбері жүректің қай бөлімінен басталады?',
      en: 'From which chamber of the heart does the systemic circulation begin?',
    },
    options: [
      { ru: 'Правое предсердие', kk: 'Оң жақ алқабы', en: 'Right atrium' },
      { ru: 'Левое предсердие', kk: 'Сол жақ алқабы', en: 'Left atrium' },
      { ru: 'Правый желудочек', kk: 'Оң жақ қарынша', en: 'Right ventricle' },
      { ru: 'Левый желудочек', kk: 'Сол жақ қарынша', en: 'Left ventricle' },
    ],
    correctIndex: 3, // большой круг: левый желудочек → аорта → тело
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'biology-mitosis',
    subject: 'biology',
    topic: 'cell-division',
    topicLabel: {
      ru: 'Деление клетки',
      kk: 'Жасушаның бөлінуі',
      en: 'Cell division',
    },
    question: {
      ru: 'При каком делении клетки дочерние клетки сохраняют число хромосом материнской?',
      kk: 'Жасуша бөлінуінің қай түрінде туған жасушаларда хромосомдар саны сақталады?',
      en: 'In which type of cell division do daughter cells keep the chromosome number of the mother cell?',
    },
    options: [
      { ru: 'Митоз', kk: 'Митоз', en: 'Mitosis' },
      { ru: 'Мейоз', kk: 'Мейоз', en: 'Meiosis' },
      { ru: 'Амитоз', kk: 'Амитоз', en: 'Amitosis' },
      {
        ru: 'Бинарное деление',
        kk: 'Екіге бөліну',
        en: 'Binary fission',
      },
    ],
    correctIndex: 0, // митоз: 2n → 2n; при мейозе число хромосом уменьшается вдвое
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'biology-monohybrid-cross',
    subject: 'biology',
    topic: 'genetics',
    topicLabel: {
      ru: 'Генетика',
      kk: 'Генетика',
      en: 'Genetics',
    },
    question: {
      ru: 'Каково расщепление по генотипу в потомстве при скрещивании Aa × Aa?',
      kk: 'Aa × Aa шағылыстырғанда ұрпақта генотип бойынша айырылу қатынасы қандай?',
      en: 'What is the genotypic ratio in the offspring of the cross Aa × Aa?',
    },
    options: [
      { ru: '3 : 1', kk: '3 : 1', en: '3 : 1' },
      { ru: '1 : 1', kk: '1 : 1', en: '1 : 1' },
      { ru: '1 : 2 : 1', kk: '1 : 2 : 1', en: '1 : 2 : 1' },
      { ru: '9 : 3 : 3 : 1', kk: '9 : 3 : 3 : 1', en: '9 : 3 : 3 : 1' },
    ],
    correctIndex: 2, // Aa × Aa → 1 AA : 2 Aa : 1 aa (3:1 — по фенотипу)
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  // --- Grades 11–12 ---
  {
    id: 'biology-darwin-natural-selection',
    subject: 'biology',
    topic: 'evolution',
    topicLabel: {
      ru: 'Эволюция',
      kk: 'Эволюция',
      en: 'Evolution',
    },
    question: {
      ru: 'Какой фактор Ч. Дарвин считал главной движущей силой эволюции?',
      kk: 'Ч. Дарвин эволюцияның басты қозғаушы күші деп нені санады?',
      en: 'Which factor did Charles Darwin consider the main driving force of evolution?',
    },
    options: [
      { ru: 'Мутации', kk: 'Мутациялар', en: 'Mutations' },
      {
        ru: 'Естественный отбор',
        kk: 'Табиғи сұрыпталу',
        en: 'Natural selection',
      },
      { ru: 'Модификации', kk: 'Модификациялар', en: 'Modifications' },
      {
        ru: 'Упражнение органов',
        kk: 'Мүшелерді жаттықтыру',
        en: 'Exercise of organs',
      },
    ],
    correctIndex: 1, // по Дарвину — естественный отбор; упражнение органов — Ламарк
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'biology-ecosystem-producers',
    subject: 'biology',
    topic: 'ecology',
    topicLabel: {
      ru: 'Экология',
      kk: 'Экология',
      en: 'Ecology',
    },
    question: {
      ru: 'Какие организмы являются продуцентами в экосистеме?',
      kk: 'Экожүйеде продуценттер болып қай организмдер табылады?',
      en: 'Which organisms are the producers in an ecosystem?',
    },
    options: [
      {
        ru: 'Зелёные растения',
        kk: 'Жасыл өсімдіктер',
        en: 'Green plants',
      },
      { ru: 'Грибы', kk: 'Саңырауқұлақтар', en: 'Fungi' },
      { ru: 'Животные', kk: 'Жануарлар', en: 'Animals' },
      {
        ru: 'Бактерии гниения',
        kk: 'Шірітуші бактериялар',
        en: 'Decomposer bacteria',
      },
    ],
    correctIndex: 0, // продуценты — автотрофы (фотосинтез); грибы и бактерии гниения — редуценты
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'biology-translation',
    subject: 'biology',
    topic: 'genetics',
    topicLabel: {
      ru: 'Генетика',
      kk: 'Генетика',
      en: 'Genetics',
    },
    question: {
      ru: 'Как называется процесс синтеза белка на рибосоме по матрице иРНК?',
      kk: 'Рибосомада иРНҚ матрицасы бойынша ақуыз синтезделу процесі қалай аталады?',
      en: 'What is the process of protein synthesis on the ribosome using mRNA as a template called?',
    },
    options: [
      { ru: 'Транскрипция', kk: 'Транскрипция', en: 'Transcription' },
      { ru: 'Трансляция', kk: 'Трансляция', en: 'Translation' },
      { ru: 'Репликация', kk: 'Репликация', en: 'Replication' },
      { ru: 'Редупликация', kk: 'Редупликация', en: 'Reduplication' },
    ],
    correctIndex: 1, // трансляция = синтез белка; транскрипция — синтез иРНК на ДНК
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'biology-gene-mutation',
    subject: 'biology',
    topic: 'genetics',
    topicLabel: {
      ru: 'Генетика',
      kk: 'Генетика',
      en: 'Genetics',
    },
    question: {
      ru: 'Замена одного нуклеотида в гене — это мутация какого типа?',
      kk: 'Гендегі бір нуклеотидтің ауысып кетуі — мутацияның қай түрі?',
      en: 'The replacement of a single nucleotide in a gene is what type of mutation?',
    },
    options: [
      {
        ru: 'Хромосомная',
        kk: 'Хромосомалық',
        en: 'Chromosomal',
      },
      { ru: 'Геномная', kk: 'Геномдық', en: 'Genomic' },
      {
        ru: 'Генная (точечная)',
        kk: 'Гендік (нүктелік)',
        en: 'Gene (point) mutation',
      },
      {
        ru: 'Модификационная',
        kk: 'Модификациялық',
        en: 'Modification (non-hereditary)',
      },
    ],
    correctIndex: 2, // замена одного нуклеотида = генная (точечная) мутация
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
