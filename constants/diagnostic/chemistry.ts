import type { DiagnosticQuestion } from './types.ts';

/**
 * chemistry — diagnostic question bank, ordered easy → hard.
 *
 * 15 grade-tagged questions across the KZ curriculum (grades 7..12):
 * periodic system, chemical bonding, reactions and balancing, solutions,
 * acids/bases, redox, organic chemistry, electrolysis and equilibrium.
 * Every answer key has been verified by hand (see trailing comments) —
 * do not reorder options without updating `correctIndex`.
 * gradeMin/gradeMax tag the honest curriculum band (grades 7..12).
 */
export const CHEMISTRY_QUESTIONS: DiagnosticQuestion<'chemistry'>[] = [
  {
    id: 'chemistry-element-symbol-o',
    subject: 'chemistry',
    topic: 'chemical-symbols',
    topicLabel: {
      ru: 'Химические символы',
      kk: 'Химиялық таңбалар',
      en: 'Chemical symbols',
    },
    question: {
      ru: 'Какой химический элемент обозначается символом O?',
      kk: '«O» таңбасымен қай химиялық элемент белгіленеді?',
      en: 'Which chemical element is denoted by the symbol O?',
    },
    options: [
      { ru: 'Кислород', kk: 'Оттегі', en: 'Oxygen' },
      { ru: 'Осмий', kk: 'Осмий', en: 'Osmium' },
      { ru: 'Золото', kk: 'Алтын', en: 'Gold' },
      { ru: 'Олово', kk: 'Қалайы', en: 'Tin' },
    ],
    correctIndex: 0,
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'chemistry-molar-mass-h2so4',
    subject: 'chemistry',
    topic: 'molar-mass',
    topicLabel: {
      ru: 'Молярная масса',
      kk: 'Мольдік масса',
      en: 'Molar mass',
    },
    question: {
      ru: 'Чему равна молярная масса серной кислоты H₂SO₄? (H = 1, S = 32, O = 16)',
      kk: 'Күкірт қышқылы H₂SO₄-тың мольдік массасы неге тең? (H = 1, S = 32, O = 16)',
      en: 'What is the molar mass of sulfuric acid H₂SO₄? (H = 1, S = 32, O = 16)',
    },
    options: [
      { ru: '98 г/моль', kk: '98 г/моль', en: '98 g/mol' },
      { ru: '80 г/моль', kk: '80 г/моль', en: '80 g/mol' },
      { ru: '96 г/моль', kk: '96 г/моль', en: '96 g/mol' },
      { ru: '100 г/моль', kk: '100 г/моль', en: '100 g/mol' },
    ],
    correctIndex: 0, // 2 × 1 + 32 + 4 × 16 = 98
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  // --- Grades 7–8 ---
  {
    id: 'chemistry-periodic-na',
    subject: 'chemistry',
    topic: 'periodic-table',
    topicLabel: {
      ru: 'Периодическая система',
      kk: 'Мерзімдік жүйе',
      en: 'Periodic table',
    },
    question: {
      ru: 'Каков порядковый номер натрия (Na) в периодической системе?',
      kk: 'Натрийдің (Na) мерзімдік жүйедегі реттік нөмірі неше?',
      en: 'What is the atomic number of sodium (Na) in the periodic table?',
    },
    options: [
      { ru: '23', kk: '23', en: '23' },
      { ru: '11', kk: '11', en: '11' },
      { ru: '12', kk: '12', en: '12' },
      { ru: '3', kk: '3', en: '3' },
    ],
    correctIndex: 1, // Na — элемент №11; 23 — массовое число
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'chemistry-alkali-metals',
    subject: 'chemistry',
    topic: 'periodic-table',
    topicLabel: {
      ru: 'Периодическая система',
      kk: 'Мерзімдік жүйе',
      en: 'Periodic table',
    },
    question: {
      ru: 'Как называются элементы главной подгруппы I группы: Li, Na, K?',
      kk: 'I топтың бас топшасындағы Li, Na, K элементтері қалай аталады?',
      en: 'What are the elements of the main subgroup of Group I — Li, Na, K — called?',
    },
    options: [
      { ru: 'Галогены', kk: 'Галогендер', en: 'Halogens' },
      { ru: 'Благородные газы', kk: 'Асыл газдар', en: 'Noble gases' },
      { ru: 'Переходные металлы', kk: 'Өтпелі металдар', en: 'Transition metals' },
      { ru: 'Щелочные металлы', kk: 'Сілтілік металдар', en: 'Alkali metals' },
    ],
    correctIndex: 3, // IA-группа (Li, Na, K, Rb, Cs) — щелочные металлы
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'chemistry-ionic-bond-nacl',
    subject: 'chemistry',
    topic: 'chemical-bonds',
    topicLabel: {
      ru: 'Химическая связь',
      kk: 'Химиялық байланыс',
      en: 'Chemical bonding',
    },
    question: {
      ru: 'Какой тип химической связи в кристалле NaCl?',
      kk: 'NaCl кристалындағы химиялық байланыстың түрі қандай?',
      en: 'What type of chemical bond is present in an NaCl crystal?',
    },
    options: [
      {
        ru: 'Ковалентная полярная',
        kk: 'Ковалентті полярлы',
        en: 'Polar covalent',
      },
      { ru: 'Металлическая', kk: 'Металдық', en: 'Metallic' },
      { ru: 'Ионная', kk: 'Иондық', en: 'Ionic' },
      { ru: 'Водородная', kk: 'Сутектік', en: 'Hydrogen' },
    ],
    correctIndex: 2, // металл Na⁺ + неметалл Cl⁻ → ионная связь
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'chemistry-oxygen-fraction-co2',
    subject: 'chemistry',
    topic: 'molar-mass',
    topicLabel: {
      ru: 'Молярная масса',
      kk: 'Мольдік масса',
      en: 'Molar mass',
    },
    question: {
      ru: 'Чему равна массовая доля кислорода в CO₂? (C = 12, O = 16)',
      kk: 'CO₂-дегі оттегінің массалық үлесі неге тең? (C = 12, O = 16)',
      en: 'What is the mass fraction of oxygen in CO₂? (C = 12, O = 16)',
    },
    options: [
      { ru: '73%', kk: '73%', en: '73%' },
      { ru: '27%', kk: '27%', en: '27%' },
      { ru: '50%', kk: '50%', en: '50%' },
      { ru: '89%', kk: '89%', en: '89%' },
    ],
    correctIndex: 0, // M(CO₂) = 44; ω(O) = 32/44 ≈ 0.727 ≈ 73%
    difficulty: 3,
    gradeMin: 7,
    gradeMax: 8,
  },
  // --- Grades 9–10 ---
  {
    id: 'chemistry-balance-h2o',
    subject: 'chemistry',
    topic: 'chemical-reactions',
    topicLabel: {
      ru: 'Химические реакции',
      kk: 'Химиялық реакциялар',
      en: 'Chemical reactions',
    },
    question: {
      ru: 'Какой коэффициент стоит перед O₂ в уравнении 2H₂ + O₂ → 2H₂O?',
      kk: '2H₂ + O₂ → 2H₂O теңдеуінде O₂ алдындағы коэффициент неше?',
      en: 'What is the coefficient in front of O₂ in the equation 2H₂ + O₂ → 2H₂O?',
    },
    options: [
      { ru: '2', kk: '2', en: '2' },
      { ru: '1', kk: '1', en: '1' },
      { ru: '3', kk: '3', en: '3' },
      { ru: '4', kk: '4', en: '4' },
    ],
    correctIndex: 1, // слева 4 H и 2 O, справа 4 H и 2 O → перед O₂ стоит 1
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'chemistry-ph-acidic',
    subject: 'chemistry',
    topic: 'acids-bases',
    topicLabel: {
      ru: 'Кислоты и основания',
      kk: 'Қышқылдар мен негіздер',
      en: 'Acids and bases',
    },
    question: {
      ru: 'Раствор имеет pH = 3. Какова среда этого раствора?',
      kk: 'Ерітіндінің pH = 3. Бұл ерітіндінің ортасы қандай?',
      en: 'A solution has pH = 3. What is the medium of this solution?',
    },
    options: [
      { ru: 'Нейтральная', kk: 'Бейтарап', en: 'Neutral' },
      { ru: 'Щелочная', kk: 'Сілтілік', en: 'Alkaline' },
      { ru: 'Кислая', kk: 'Қышқылды', en: 'Acidic' },
      { ru: 'Слабощелочная', kk: 'Әлсіз сілтілік', en: 'Weakly alkaline' },
    ],
    correctIndex: 2, // pH < 7 → кислая среда
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'chemistry-solution-mass-fraction',
    subject: 'chemistry',
    topic: 'solutions',
    topicLabel: {
      ru: 'Растворы',
      kk: 'Ерітінділер',
      en: 'Solutions',
    },
    question: {
      ru: 'В 250 г раствора растворено 25 г соли. Чему равна массовая доля соли?',
      kk: '250 г ерітіндіде 25 г тұз ерітілген. Тұздың массалық үлесі неге тең?',
      en: '25 g of salt is dissolved in 250 g of solution. What is the mass fraction of the salt?',
    },
    options: [
      { ru: '25%', kk: '25%', en: '25%' },
      { ru: '5%', kk: '5%', en: '5%' },
      { ru: '1%', kk: '1%', en: '1%' },
      { ru: '10%', kk: '10%', en: '10%' },
    ],
    correctIndex: 3, // ω = 25 г / 250 г = 0.1 = 10%
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'chemistry-oxidation-sulfur',
    subject: 'chemistry',
    topic: 'redox',
    topicLabel: {
      ru: 'Окислительно-восстановительные реакции',
      kk: 'Тотығу-тотықсыздану реакциялары',
      en: 'Redox reactions',
    },
    question: {
      ru: 'Определите степень окисления серы в H₂SO₄.',
      kk: 'H₂SO₄-тегі күкірттің тотығу дәрежесін анықтаңыз.',
      en: 'Determine the oxidation state of sulfur in H₂SO₄.',
    },
    options: [
      { ru: '+6', kk: '+6', en: '+6' },
      { ru: '+4', kk: '+4', en: '+4' },
      { ru: '−2', kk: '−2', en: '−2' },
      { ru: '+2', kk: '+2', en: '+2' },
    ],
    correctIndex: 0, // x + 2·(+1) + 4·(−2) = 0 → x = +6
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  // --- Grades 11–12 ---
  {
    id: 'chemistry-alkanes-formula',
    subject: 'chemistry',
    topic: 'organic-chemistry',
    topicLabel: {
      ru: 'Органическая химия',
      kk: 'Органикалық химия',
      en: 'Organic chemistry',
    },
    question: {
      ru: 'Какова общая формула алканов?',
      kk: 'Алкандардың жалпы формуласы қандай?',
      en: 'What is the general formula of alkanes?',
    },
    options: [
      { ru: 'CₙH₂ₙ', kk: 'CₙH₂ₙ', en: 'CₙH₂ₙ' },
      { ru: 'CₙH₂ₙ₊₂', kk: 'CₙH₂ₙ₊₂', en: 'CₙH₂ₙ₊₂' },
      { ru: 'CₙH₂ₙ₋₂', kk: 'CₙH₂ₙ₋₂', en: 'CₙH₂ₙ₋₂' },
      { ru: 'CₙH₂ₙ₋₆', kk: 'CₙH₂ₙ₋₆', en: 'CₙH₂ₙ₋₆' },
    ],
    correctIndex: 1, // алканы CₙH₂ₙ₊₂; CₙH₂ₙ — алкены, CₙH₂ₙ₋₂ — алкины
    difficulty: 1,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'chemistry-aldehyde-group',
    subject: 'chemistry',
    topic: 'organic-chemistry',
    topicLabel: {
      ru: 'Органическая химия',
      kk: 'Органикалық химия',
      en: 'Organic chemistry',
    },
    question: {
      ru: 'Какая функциональная группа характерна для альдегидов?',
      kk: 'Альдегидтерге қандай функционалдық топ тән?',
      en: 'Which functional group is characteristic of aldehydes?',
    },
    options: [
      { ru: '−OH', kk: '−OH', en: '−OH' },
      { ru: '−COOH', kk: '−COOH', en: '−COOH' },
      { ru: '−CHO', kk: '−CHO', en: '−CHO' },
      { ru: '−NH₂', kk: '−NH₂', en: '−NH₂' },
    ],
    correctIndex: 2, // альдегидная группа −CHO; −COOH — кислоты, −OH — спирты
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'chemistry-ethylene-hydration',
    subject: 'chemistry',
    topic: 'organic-chemistry',
    topicLabel: {
      ru: 'Органическая химия',
      kk: 'Органикалық химия',
      en: 'Organic chemistry',
    },
    question: {
      ru: 'Какой продукт образуется при гидратации этилена: C₂H₄ + H₂O → ?',
      kk: 'Этилен гидратацияланғанда қандай өнім түзіледі: C₂H₄ + H₂O → ?',
      en: 'What product is formed by the hydration of ethylene: C₂H₄ + H₂O → ?',
    },
    options: [
      { ru: 'Этан C₂H₆', kk: 'Этан C₂H₆', en: 'Ethane C₂H₆' },
      { ru: 'Этаналь CH₃CHO', kk: 'Этаналь CH₃CHO', en: 'Ethanal CH₃CHO' },
      {
        ru: 'Уксусная кислота CH₃COOH',
        kk: 'Сірке қышқылы CH₃COOH',
        en: 'Acetic acid CH₃COOH',
      },
      { ru: 'Этанол C₂H₅OH', kk: 'Этанол C₂H₅OH', en: 'Ethanol C₂H₅OH' },
    ],
    correctIndex: 3, // C₂H₄ + H₂O → C₂H₅OH (реакция гидратации)
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'chemistry-electrolysis-nacl',
    subject: 'chemistry',
    topic: 'redox',
    topicLabel: {
      ru: 'Окислительно-восстановительные реакции',
      kk: 'Тотығу-тотықсыздану реакциялары',
      en: 'Redox reactions',
    },
    question: {
      ru: 'Что выделяется на катоде при электролизе расплава NaCl?',
      kk: 'Еріген NaCl-ді электролиздегенде катодта не бөлініп шығады?',
      en: 'What is released at the cathode during the electrolysis of molten NaCl?',
    },
    options: [
      { ru: 'Хлор Cl₂', kk: 'Хлор Cl₂', en: 'Chlorine Cl₂' },
      { ru: 'Натрий Na', kk: 'Натрий Na', en: 'Sodium Na' },
      { ru: 'Кислород O₂', kk: 'Оттегі O₂', en: 'Oxygen O₂' },
      { ru: 'Водород H₂', kk: 'Сутегі H₂', en: 'Hydrogen H₂' },
    ],
    correctIndex: 1, // катод: Na⁺ + e⁻ → Na; Cl₂ выделяется на аноде
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'chemistry-equilibrium-pressure',
    subject: 'chemistry',
    topic: 'chemical-equilibrium',
    topicLabel: {
      ru: 'Химическое равновесие',
      kk: 'Химиялық тепе-теңдік',
      en: 'Chemical equilibrium',
    },
    question: {
      ru: 'В какую сторону сместится равновесие N₂ + 3H₂ ⇌ 2NH₃ при увеличении давления?',
      kk: 'Қысым артқанда N₂ + 3H₂ ⇌ 2NH₃ тепе-теңдігі қай жаққа ығысады?',
      en: 'In which direction will the equilibrium N₂ + 3H₂ ⇌ 2NH₃ shift when the pressure increases?',
    },
    options: [
      {
        ru: 'Вправо, к продуктам',
        kk: 'Оңға, өнімдер жағына',
        en: 'To the right, toward the products',
      },
      {
        ru: 'Влево, к исходным веществам',
        kk: 'Солға, бастапқы заттар жағына',
        en: 'To the left, toward the reactants',
      },
      { ru: 'Не сместится', kk: 'Ығыспайды', en: 'It will not shift' },
      {
        ru: 'Сначала влево, затем вернётся',
        kk: 'Алдымен солға, кейін орнына қайтады',
        en: 'First to the left, then back',
      },
    ],
    correctIndex: 0, // 4 моль газа → 2 моль; по Ле Шателье — в сторону меньшего объёма
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
