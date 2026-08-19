import type { DiagnosticQuestion } from './types.ts';

/**
 * history (История Казахстана) — diagnostic question bank, ordered easy → hard.
 *
 * Every answer key has been verified by hand — do not reorder options
 * without updating `correctIndex`. gradeMin/gradeMax tag the honest
 * curriculum band (grades 7..12) so the grade filter never serves a
 * 12th-grader a grade-7 warm-up (or vice versa).
 */
export const HISTORY_QUESTIONS: DiagnosticQuestion<'history'>[] = [
  {
    id: 'history-independence-year',
    subject: 'history',
    topic: 'independence',
    topicLabel: {
      ru: 'Независимость Казахстана',
      kk: 'Қазақстан тәуелсіздігі',
      en: 'Independence of Kazakhstan',
    },
    question: {
      ru: 'В каком году была провозглашена независимость Казахстана?',
      kk: 'Қазақстанның тәуелсіздігі қай жылы жарияланды?',
      en: 'In which year was the independence of Kazakhstan proclaimed?',
    },
    options: [
      { ru: '1991', kk: '1991', en: '1991' },
      { ru: '1989', kk: '1989', en: '1989' },
      { ru: '1993', kk: '1993', en: '1993' },
      { ru: '1995', kk: '1995', en: '1995' },
    ],
    correctIndex: 0, // 16 декабря 1991 года
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 12,
  },
  {
    id: 'history-alash-party',
    subject: 'history',
    topic: 'alash-movement',
    topicLabel: {
      ru: 'Движение Алаш',
      kk: 'Алаш қозғалысы',
      en: 'Alash movement',
    },
    question: {
      ru: 'В каком году была создана партия «Алаш»?',
      kk: '«Алаш» партиясы қай жылы құрылды?',
      en: 'In which year was the Alash party founded?',
    },
    options: [
      { ru: '1917', kk: '1917', en: '1917' },
      { ru: '1905', kk: '1905', en: '1905' },
      { ru: '1916', kk: '1916', en: '1916' },
      { ru: '1920', kk: '1920', en: '1920' },
    ],
    correctIndex: 0, // июль 1917, Первый всеказахский съезд
    difficulty: 3,
    gradeMin: 10,
    gradeMax: 11,
  },
  {
    id: 'history-golden-man',
    subject: 'history',
    topic: 'ancient-tribes',
    topicLabel: {
      ru: 'Древние племена Казахстана',
      kk: 'Қазақстанның ежелгі тайпалары',
      en: 'Ancient tribes of Kazakhstan',
    },
    question: {
      ru: '«Золотой человек», найденный в Иссыкском кургане, относится к эпохе…',
      kk: 'Есік обасынан табылған «Алтын адам» қай дәуірге жатады?',
      en: 'The "Golden Man" found in the Issyk burial mound belongs to the era of…',
    },
    options: [
      { ru: 'саков', kk: 'сақтар', en: 'the Saka' },
      { ru: 'усуней', kk: 'үйсіндер', en: 'the Wusun' },
      { ru: 'Тюркского каганата', kk: 'Түрік қағанаты', en: 'the Turkic Khaganate' },
      { ru: 'Монгольской империи', kk: 'Моңғол империясы', en: 'the Mongol Empire' },
    ],
    correctIndex: 0, // «Золотой человек» — сакский воин, Иссыкский курган, найден в 1969 г.
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'history-yaksart',
    subject: 'history',
    topic: 'ancient-tribes',
    topicLabel: {
      ru: 'Древние племена Казахстана',
      kk: 'Қазақстанның ежелгі тайпалары',
      en: 'Ancient tribes of Kazakhstan',
    },
    question: {
      ru: 'Какое современное название имеет река, которую древние греки называли Яксарт?',
      kk: 'Ежелгі гректер Яксарт деп атаған өзеннің қазіргі атауы қандай?',
      en: 'What is the modern name of the river the ancient Greeks called Yaxartes?',
    },
    options: [
      { ru: 'Сырдарья', kk: 'Сырдария', en: 'Syr Darya' },
      { ru: 'Амударья', kk: 'Әмудария', en: 'Amu Darya' },
      { ru: 'Иртыш', kk: 'Ертіс', en: 'Irtysh' },
      { ru: 'Или', kk: 'Іле', en: 'Ili' },
    ],
    correctIndex: 0, // Яксарт = Сырдарья (Амударья древние называли Оксом)
    difficulty: 3,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'history-khanate-foundation',
    subject: 'history',
    topic: 'kazakh-khanate',
    topicLabel: {
      ru: 'Казахское ханство',
      kk: 'Қазақ хандығы',
      en: 'Kazakh Khanate',
    },
    question: {
      ru: 'В каком году было основано Казахское ханство?',
      kk: 'Қазақ хандығы қай жылы құрылды?',
      en: 'In which year was the Kazakh Khanate founded?',
    },
    options: [
      { ru: '1465', kk: '1465', en: '1465' },
      { ru: '1456', kk: '1456', en: '1456' },
      { ru: '1500', kk: '1500', en: '1500' },
      { ru: '1521', kk: '1521', en: '1521' },
    ],
    correctIndex: 0, // 1465 г. — султаны Керей и Жанибек основали Казахское ханство
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'history-khanate-founders',
    subject: 'history',
    topic: 'kazakh-khanate',
    topicLabel: {
      ru: 'Казахское ханство',
      kk: 'Қазақ хандығы',
      en: 'Kazakh Khanate',
    },
    question: {
      ru: 'Кто стал первыми правителями Казахского ханства?',
      kk: 'Қазақ хандығының тұңғыш билеушілері кімдер болды?',
      en: 'Who were the first rulers of the Kazakh Khanate?',
    },
    options: [
      {
        ru: 'Керей и Жанибек',
        kk: 'Керей мен Жәнібек',
        en: 'Kerey and Zhanibek',
      },
      {
        ru: 'Абулхаир и Аблай',
        kk: 'Әбілхайыр мен Абылай',
        en: 'Abulkhair and Abylay',
      },
      {
        ru: 'Тауке и Касым',
        kk: 'Тәуке мен Қасым',
        en: 'Tauke and Kasym',
      },
      {
        ru: 'Есим и Жангир',
        kk: 'Есім мен Жәңгір',
        en: 'Yesim and Zhangir',
      },
    ],
    correctIndex: 0, // ханство основали султаны Керей и Жанибек (1465 г.)
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'history-zhety-zhargy',
    subject: 'history',
    topic: 'kazakh-khanate',
    topicLabel: {
      ru: 'Казахское ханство',
      kk: 'Қазақ хандығы',
      en: 'Kazakh Khanate',
    },
    question: {
      ru: 'При каком хане был создан свод законов «Жеты жаргы»?',
      kk: '«Жеті жарғы» заңдар жинағы қай ханның тұсында жасалды?',
      en: 'Under which khan was the code of laws "Zhety Zhargy" created?',
    },
    options: [
      { ru: 'Тауке', kk: 'Тәуке', en: 'Tauke' },
      { ru: 'Касым', kk: 'Қасым', en: 'Kasym' },
      { ru: 'Есим', kk: 'Есім', en: 'Yesim' },
      { ru: 'Абулхаир', kk: 'Әбілхайыр', en: 'Abulkhair' },
    ],
    correctIndex: 0, // «Жеты жаргы» — свод законов Тауке хана (конец XVII — начало XVIII в.)
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'history-1916-uprising',
    subject: 'history',
    topic: 'colonial-period',
    topicLabel: {
      ru: 'Колониальный период',
      kk: 'Отаршылдық кезең',
      en: 'Colonial period',
    },
    question: {
      ru: 'Что стало непосредственной причиной восстания 1916 года?',
      kk: '1916 жылғы көтерілістің тікелей себебі не болды?',
      en: 'What was the immediate cause of the 1916 uprising?',
    },
    options: [
      {
        ru: 'Указ о мобилизации казахов на тыловые работы',
        kk: 'Қазақтарды тыл жұмыстарына жұмылдыру туралы жарлық',
        en: 'The decree mobilizing Kazakhs for rear-line labour',
      },
      {
        ru: 'Введение всеобщей воинской повинности',
        kk: 'Жалпыға бірдей әскери міндеттеменің енгізілуі',
        en: 'The introduction of universal conscription',
      },
      {
        ru: 'Запрет кочевого скотоводства',
        kk: 'Көшпелі мал шаруашылығына тыйым салынуы',
        en: 'A ban on nomadic livestock breeding',
      },
      {
        ru: 'Создание партии «Алаш»',
        kk: '«Алаш» партиясының құрылуы',
        en: 'The founding of the Alash party',
      },
    ],
    correctIndex: 0, // указ от 25 июня 1916 г. о призыве «инородцев» на тыловые работы
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'history-1731-abulkhair',
    subject: 'history',
    topic: 'colonial-period',
    topicLabel: {
      ru: 'Колониальный период',
      kk: 'Отаршылдық кезең',
      en: 'Colonial period',
    },
    question: {
      ru: 'В 1731 году присягу на подданство России принял хан Младшего жуза…',
      kk: '1731 жылы Кіші жүздің қай ханы Ресей бодандығын қабылдады?',
      en: 'In 1731, the khan of the Junior Zhuz who swore allegiance to Russia was…',
    },
    options: [
      { ru: 'Абулхаир', kk: 'Әбілхайыр', en: 'Abulkhair' },
      { ru: 'Аблай', kk: 'Абылай', en: 'Abylay' },
      { ru: 'Кенесары', kk: 'Кенесары', en: 'Kenesary' },
      { ru: 'Барак', kk: 'Барақ', en: 'Barak' },
    ],
    correctIndex: 0, // 1731 г. — присяга Абулхаира, начало вхождения Младшего жуза в состав России
    difficulty: 1,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'history-alashorda-leader',
    subject: 'history',
    topic: 'alash-movement',
    topicLabel: {
      ru: 'Движение Алаш',
      kk: 'Алаш қозғалысы',
      en: 'Alash movement',
    },
    question: {
      ru: 'Кто возглавлял правительство Алаш-Орды?',
      kk: 'Алашорда үкіметіне кім басшылық етті?',
      en: 'Who headed the Alash-Orda government?',
    },
    options: [
      {
        ru: 'Алихан Букейханов',
        kk: 'Әлихан Бөкейханов',
        en: 'Alikhan Bukeikhanov',
      },
      {
        ru: 'Ахмет Байтурсынулы',
        kk: 'Ахмет Байтұрсынұлы',
        en: 'Akhmet Baitursynuly',
      },
      {
        ru: 'Миржакып Дулатов',
        kk: 'Міржақып Дулатов',
        en: 'Myrzhakyp Dulatov',
      },
      {
        ru: 'Мустафа Шокай',
        kk: 'Мұстафа Шоқай',
        en: 'Mustafa Shokay',
      },
    ],
    correctIndex: 0, // председателем Алаш-Орды был Алихан Букейханов
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'history-zheltoksan',
    subject: 'history',
    topic: 'soviet-period',
    topicLabel: {
      ru: 'Советский период',
      kk: 'Кеңес дәуірі',
      en: 'Soviet period',
    },
    question: {
      ru: 'В каком году произошли декабрьские события (Желтоксан) в Алма-Ате?',
      kk: 'Алматыдағы Желтоқсан оқиғасы қай жылы орын алды?',
      en: 'In which year did the December events (Zheltoksan) take place in Almaty?',
    },
    options: [
      { ru: '1986', kk: '1986', en: '1986' },
      { ru: '1985', kk: '1985', en: '1985' },
      { ru: '1989', kk: '1989', en: '1989' },
      { ru: '1991', kk: '1991', en: '1991' },
    ],
    correctIndex: 0, // Желтоксан — 16–17 декабря 1986 г.
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'history-famine-1930s',
    subject: 'history',
    topic: 'soviet-period',
    topicLabel: {
      ru: 'Советский период',
      kk: 'Кеңес дәуірі',
      en: 'Soviet period',
    },
    question: {
      ru: 'В какие годы в Казахстане был массовый голод, вызванный насильственной коллективизацией?',
      kk: 'Зорлық-зомбылықпен жүргізілген ұжымдастыру салдарынан болған жаппай ашаршылық қай жылдарға түсті?',
      en: 'In which years did the mass famine caused by forced collectivization strike Kazakhstan?',
    },
    options: [
      { ru: '1931–1933', kk: '1931–1933', en: '1931–1933' },
      { ru: '1921–1922', kk: '1921–1922', en: '1921–1922' },
      { ru: '1937–1938', kk: '1937–1938', en: '1937–1938' },
      { ru: '1941–1945', kk: '1941–1945', en: '1941–1945' },
    ],
    correctIndex: 0, // ашаршылық 1931–1933 гг. — последствие коллективизации (погибло около трети казахов)
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'history-virgin-lands',
    subject: 'history',
    topic: 'soviet-period',
    topicLabel: {
      ru: 'Советский период',
      kk: 'Кеңес дәуірі',
      en: 'Soviet period',
    },
    question: {
      ru: 'В каком году началась кампания по освоению целинных земель в Казахстане?',
      kk: 'Қазақстанда тың жерлерін игеру науқаны қай жылы басталды?',
      en: 'In which year did the Virgin Lands campaign begin in Kazakhstan?',
    },
    options: [
      { ru: '1954', kk: '1954', en: '1954' },
      { ru: '1949', kk: '1949', en: '1949' },
      { ru: '1959', kk: '1959', en: '1959' },
      { ru: '1965', kk: '1965', en: '1965' },
    ],
    correctIndex: 0, // освоение целины стартовало в 1954 г. (февральско-мартовский пленум ЦК КПСС)
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'history-kazakh-assr',
    subject: 'history',
    topic: 'soviet-period',
    topicLabel: {
      ru: 'Советский период',
      kk: 'Кеңес дәуірі',
      en: 'Soviet period',
    },
    question: {
      ru: 'В каком году была образована Казакская АССР в составе РСФСР?',
      kk: 'РКФСР құрамындағы Қазақ АКСР-і қай жылы құрылды?',
      en: 'In which year was the Kazakh ASSR formed within the RSFSR?',
    },
    options: [
      { ru: '1920', kk: '1920', en: '1920' },
      { ru: '1924', kk: '1924', en: '1924' },
      { ru: '1936', kk: '1936', en: '1936' },
      { ru: '1917', kk: '1917', en: '1917' },
    ],
    correctIndex: 0, // Киргизская (Казакская) АССР создана 26 августа 1920 г.; союзной республикой стала в 1936 г.
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'history-first-constitution',
    subject: 'history',
    topic: 'independence',
    topicLabel: {
      ru: 'Независимость Казахстана',
      kk: 'Қазақстан тәуелсіздігі',
      en: 'Independence of Kazakhstan',
    },
    question: {
      ru: 'В каком году была принята первая Конституция независимого Казахстана?',
      kk: 'Тәуелсіз Қазақстанның тұңғыш Конституциясы қай жылы қабылданды?',
      en: 'In which year was the first Constitution of independent Kazakhstan adopted?',
    },
    options: [
      { ru: '1993', kk: '1993', en: '1993' },
      { ru: '1991', kk: '1991', en: '1991' },
      { ru: '1995', kk: '1995', en: '1995' },
      { ru: '1990', kk: '1990', en: '1990' },
    ],
    correctIndex: 0, // первая Конституция — 28 января 1993 г.; действующая принята 30 августа 1995 г.
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
