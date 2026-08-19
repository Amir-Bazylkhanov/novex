import type { DiagnosticQuestion } from './types.ts';

/**
 * physics — diagnostic question bank, ordered easy → hard.
 *
 * Moved verbatim from constants/diagnosticData.ts; every answer key was
 * verified by hand — do not reorder options without updating `correctIndex`.
 * gradeMin/gradeMax tag the honest curriculum band (grades 7..12).
 */
export const PHYSICS_QUESTIONS: DiagnosticQuestion<'physics'>[] = [
  {
    id: 'physics-speed',
    subject: 'physics',
    topic: 'speed',
    topicLabel: { ru: 'Скорость', kk: 'Жылдамдық', en: 'Speed' },
    question: {
      ru: 'Автомобиль проехал 120 км за 2 часа. Какова его средняя скорость?',
      kk: 'Автокөлік 2 сағатта 120 км жол жүрді. Оның орташа жылдамдығы қандай?',
      en: 'A car travelled 120 km in 2 hours. What is its average speed?',
    },
    options: [
      { ru: '60 км/ч', kk: '60 км/сағ', en: '60 km/h' },
      { ru: '240 км/ч', kk: '240 км/сағ', en: '240 km/h' },
      { ru: '30 км/ч', kk: '30 км/сағ', en: '30 km/h' },
      { ru: '80 км/ч', kk: '80 км/сағ', en: '80 km/h' },
    ],
    correctIndex: 0, // v = 120 / 2 = 60
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'physics-units',
    subject: 'physics',
    topic: 'units',
    topicLabel: {
      ru: 'Единицы измерения',
      kk: 'Өлшем бірліктері',
      en: 'Units of measurement',
    },
    question: {
      ru: 'В каких единицах измеряется сила в системе СИ?',
      kk: 'SI жүйесінде күш қандай бірлікпен өлшенеді?',
      en: 'In which unit is force measured in the SI system?',
    },
    options: [
      { ru: 'Ньютон (Н)', kk: 'Ньютон (Н)', en: 'Newton (N)' },
      { ru: 'Джоуль (Дж)', kk: 'Джоуль (Дж)', en: 'Joule (J)' },
      { ru: 'Ватт (Вт)', kk: 'Ватт (Вт)', en: 'Watt (W)' },
      { ru: 'Паскаль (Па)', kk: 'Паскаль (Па)', en: 'Pascal (Pa)' },
    ],
    correctIndex: 0,
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'physics-newton-second-law',
    subject: 'physics',
    topic: 'newton-second-law',
    topicLabel: {
      ru: 'Второй закон Ньютона',
      kk: 'Ньютонның екінші заңы',
      en: "Newton's second law",
    },
    question: {
      ru: 'Тело массой 4 кг движется с ускорением 3 м/с². Какая сила действует на тело?',
      kk: 'Массасы 4 кг дене 3 м/с² үдеумен қозғалады. Денеге қандай күш әсер етеді?',
      en: 'A body of mass 4 kg moves with an acceleration of 3 m/s². What force acts on it?',
    },
    options: [
      { ru: '12 Н', kk: '12 Н', en: '12 N' },
      { ru: '7 Н', kk: '7 Н', en: '7 N' },
      { ru: '0,75 Н', kk: '0,75 Н', en: '0.75 N' },
      { ru: '48 Н', kk: '48 Н', en: '48 N' },
    ],
    correctIndex: 0, // F = ma = 4 × 3 = 12
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'physics-ohm-law',
    subject: 'physics',
    topic: 'ohm-law',
    topicLabel: { ru: 'Закон Ома', kk: 'Ом заңы', en: "Ohm's law" },
    question: {
      ru: 'Напряжение на участке цепи 12 В, сопротивление 4 Ом. Чему равна сила тока?',
      kk: 'Тізбек учаскесіндегі кернеу 12 В, кедергісі 4 Ом. Ток күші неге тең?',
      en: 'The voltage across a circuit is 12 V and the resistance is 4 Ω. What is the current?',
    },
    options: [
      { ru: '3 А', kk: '3 А', en: '3 A' },
      { ru: '48 А', kk: '48 А', en: '48 A' },
      { ru: '8 А', kk: '8 А', en: '8 A' },
      { ru: '0,33 А', kk: '0,33 А', en: '0.33 A' },
    ],
    correctIndex: 0, // I = U / R = 12 / 4 = 3
    difficulty: 2,
    gradeMin: 8,
    gradeMax: 9,
  },
  {
    id: 'physics-kinetic-energy',
    subject: 'physics',
    topic: 'kinetic-energy',
    topicLabel: {
      ru: 'Кинетическая энергия',
      kk: 'Кинетикалық энергия',
      en: 'Kinetic energy',
    },
    question: {
      ru: 'Тело массой 2 кг движется со скоростью 3 м/с. Чему равна его кинетическая энергия?',
      kk: 'Массасы 2 кг дене 3 м/с жылдамдықпен қозғалады. Оның кинетикалық энергиясы неге тең?',
      en: 'A body of mass 2 kg moves at 3 m/s. What is its kinetic energy?',
    },
    options: [
      { ru: '9 Дж', kk: '9 Дж', en: '9 J' },
      { ru: '6 Дж', kk: '6 Дж', en: '6 J' },
      { ru: '18 Дж', kk: '18 Дж', en: '18 J' },
      { ru: '3 Дж', kk: '3 Дж', en: '3 J' },
    ],
    correctIndex: 0, // E = mv²/2 = 2 × 9 / 2 = 9
    difficulty: 3,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'physics-heat-transfer',
    subject: 'physics',
    topic: 'heat-transfer',
    topicLabel: {
      ru: 'Виды теплопередачи',
      kk: 'Жылу берілу түрлері',
      en: 'Types of heat transfer',
    },
    question: {
      ru: 'Какой вид теплопередачи возможен в вакууме (без вещества)?',
      kk: 'Жылу берілудің қай түрі вакуумде (затсыз ортада) мүмкін?',
      en: 'Which type of heat transfer is possible in a vacuum (without matter)?',
    },
    options: [
      { ru: 'Конвекция', kk: 'Конвекция', en: 'Convection' },
      { ru: 'Излучение', kk: 'Сәулелену', en: 'Radiation' },
      { ru: 'Теплопроводность', kk: 'Жылуөткізгіштік', en: 'Thermal conduction' },
      { ru: 'Никакой', kk: 'Ешқайсысы', en: 'None' },
    ],
    correctIndex: 1, // излучение не требует среды (Солнце греет Землю через вакуум)
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'physics-density',
    subject: 'physics',
    topic: 'density',
    topicLabel: { ru: 'Плотность', kk: 'Тығыздық', en: 'Density' },
    question: {
      ru: 'Масса тела 200 г, объём 100 см³. Найдите плотность тела.',
      kk: 'Дененің массасы 200 г, көлемі 100 см³. Дененің тығыздығын табыңыз.',
      en: 'A body has a mass of 200 g and a volume of 100 cm³. Find its density.',
    },
    options: [
      { ru: '0,5 г/см³', kk: '0,5 г/см³', en: '0.5 g/cm³' },
      { ru: '2 г/см³', kk: '2 г/см³', en: '2 g/cm³' },
      { ru: '20 г/см³', kk: '20 г/см³', en: '20 g/cm³' },
      { ru: '200 г/см³', kk: '200 г/см³', en: '200 g/cm³' },
    ],
    correctIndex: 1, // ρ = m/V = 200/100 = 2
    difficulty: 1,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'physics-pressure',
    subject: 'physics',
    topic: 'pressure',
    topicLabel: { ru: 'Давление', kk: 'Қысым', en: 'Pressure' },
    question: {
      ru: 'Сила 100 Н действует перпендикулярно на площадь 2 м². Чему равно давление?',
      kk: '100 Н күш 2 м² ауданға перпендикуляр әсер етеді. Қысым неге тең?',
      en: 'A force of 100 N acts perpendicularly on an area of 2 m². What is the pressure?',
    },
    options: [
      { ru: '200 Па', kk: '200 Па', en: '200 Pa' },
      { ru: '50 Па', kk: '50 Па', en: '50 Pa' },
      { ru: '0,02 Па', kk: '0,02 Па', en: '0.02 Pa' },
      { ru: '102 Па', kk: '102 Па', en: '102 Pa' },
    ],
    correctIndex: 1, // p = F/S = 100/2 = 50
    difficulty: 2,
    gradeMin: 7,
    gradeMax: 8,
  },
  {
    id: 'physics-electric-power',
    subject: 'physics',
    topic: 'electric-power',
    topicLabel: { ru: 'Мощность тока', kk: 'Ток қуаты', en: 'Electric power' },
    question: {
      ru: 'Напряжение на приборе 220 В, сила тока 0,5 А. Найдите мощность тока.',
      kk: 'Прибордағы кернеу 220 В, ток күші 0,5 А. Ток қуатын табыңыз.',
      en: 'The voltage across a device is 220 V and the current is 0.5 A. Find the electric power.',
    },
    options: [
      { ru: '440 Вт', kk: '440 Вт', en: '440 W' },
      { ru: '55 Вт', kk: '55 Вт', en: '55 W' },
      { ru: '110 Вт', kk: '110 Вт', en: '110 W' },
      { ru: '220 Вт', kk: '220 Вт', en: '220 W' },
    ],
    correctIndex: 2, // P = UI = 220 × 0,5 = 110
    difficulty: 2,
    gradeMin: 8,
    gradeMax: 10,
  },
  {
    id: 'physics-oscillation-period',
    subject: 'physics',
    topic: 'oscillations',
    topicLabel: { ru: 'Колебания', kk: 'Тербелістер', en: 'Oscillations' },
    question: {
      ru: 'Частота колебаний тела 5 Гц. Чему равен период колебаний?',
      kk: 'Дененің тербеліс жиілігі 5 Гц. Тербеліс периоды неге тең?',
      en: 'The oscillation frequency of a body is 5 Hz. What is the period of oscillation?',
    },
    options: [
      { ru: '5 с', kk: '5 с', en: '5 s' },
      { ru: '2 с', kk: '2 с', en: '2 s' },
      { ru: '0,5 с', kk: '0,5 с', en: '0.5 s' },
      { ru: '0,2 с', kk: '0,2 с', en: '0.2 s' },
    ],
    correctIndex: 3, // T = 1/ν = 1/5 = 0,2
    difficulty: 2,
    gradeMin: 9,
    gradeMax: 10,
  },
  {
    id: 'physics-wave-speed',
    subject: 'physics',
    topic: 'waves',
    topicLabel: { ru: 'Волны', kk: 'Толқындар', en: 'Waves' },
    question: {
      ru: 'Длина волны 2 м, частота 5 Гц. Найдите скорость распространения волны.',
      kk: 'Толқын ұзындығы 2 м, жиілігі 5 Гц. Толқынның таралу жылдамдығын табыңыз.',
      en: 'The wavelength is 2 m and the frequency is 5 Hz. Find the wave speed.',
    },
    options: [
      { ru: '2,5 м/с', kk: '2,5 м/с', en: '2.5 m/s' },
      { ru: '7 м/с', kk: '7 м/с', en: '7 m/s' },
      { ru: '10 м/с', kk: '10 м/с', en: '10 m/s' },
      { ru: '0,4 м/с', kk: '0,4 м/с', en: '0.4 m/s' },
    ],
    correctIndex: 2, // v = λν = 2 × 5 = 10
    difficulty: 2,
    gradeMin: 10,
    gradeMax: 12,
  },
  {
    id: 'physics-thin-lens',
    subject: 'physics',
    topic: 'thin-lens',
    topicLabel: { ru: 'Тонкая линза', kk: 'Жіңішке линза', en: 'Thin lens' },
    question: {
      ru: 'Предмет находится в 20 см от собирающей линзы, его действительное изображение — тоже в 20 см. Найдите фокусное расстояние линзы.',
      kk: 'Зат жинағыш линзадан 20 см қашықтықта, оның нақты кескіні де 20 см қашықтықта. Линзаның фокус қашықтығын табыңыз.',
      en: 'An object is 20 cm from a converging lens and its real image is also 20 cm away. Find the focal length of the lens.',
    },
    options: [
      { ru: '10 см', kk: '10 см', en: '10 cm' },
      { ru: '20 см', kk: '20 см', en: '20 cm' },
      { ru: '40 см', kk: '40 см', en: '40 cm' },
      { ru: '5 см', kk: '5 см', en: '5 cm' },
    ],
    correctIndex: 0, // 1/F = 1/20 + 1/20 = 1/10 → F = 10
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'physics-half-life',
    subject: 'physics',
    topic: 'radioactivity',
    topicLabel: {
      ru: 'Радиоактивный распад',
      kk: 'Радиоактивті ыдырау',
      en: 'Radioactive decay',
    },
    question: {
      ru: 'Период полураспада изотопа 5 суток. Сколько вещества останется от 8 г через 15 суток?',
      kk: 'Изотоптың жартылай ыдырау периоды 5 тәулік. 8 г заттан 15 тәулік өткен соң қанша грамм қалады?',
      en: 'The half-life of an isotope is 5 days. How many grams of an 8 g sample remain after 15 days?',
    },
    options: [
      { ru: '0 г', kk: '0 г', en: '0 g' },
      { ru: '1 г', kk: '1 г', en: '1 g' },
      { ru: '2 г', kk: '2 г', en: '2 g' },
      { ru: '4 г', kk: '4 г', en: '4 g' },
    ],
    correctIndex: 1, // 15/5 = 3 периода: 8 → 4 → 2 → 1
    difficulty: 2,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'physics-alpha-particle',
    subject: 'physics',
    topic: 'nuclear-physics',
    topicLabel: {
      ru: 'Ядерная физика',
      kk: 'Ядролық физика',
      en: 'Nuclear physics',
    },
    question: {
      ru: 'Что представляет собой альфа-частица?',
      kk: 'Альфа-бөлшек дегеніміз не?',
      en: 'What is an alpha particle?',
    },
    options: [
      { ru: 'Протон', kk: 'Протон', en: 'A proton' },
      { ru: 'Электрон', kk: 'Электрон', en: 'An electron' },
      { ru: 'Ядро атома гелия ⁴₂He', kk: 'Гелий атомының ядросы ⁴₂He', en: 'A helium nucleus ⁴₂He' },
      { ru: 'Нейтрон', kk: 'Нейтрон', en: 'A neutron' },
    ],
    correctIndex: 2, // α-частица = ядро гелия ⁴₂He (2 протона + 2 нейтрона)
    difficulty: 1,
    gradeMin: 11,
    gradeMax: 12,
  },
  {
    id: 'physics-photon-energy',
    subject: 'physics',
    topic: 'photoelectric-effect',
    topicLabel: { ru: 'Фотоэффект', kk: 'Фотоэффект', en: 'Photoelectric effect' },
    question: {
      ru: 'Найдите энергию фотона с частотой 10¹⁵ Гц (h = 6,6·10⁻³⁴ Дж·с).',
      kk: 'Жиілігі 10¹⁵ Гц фотонның энергиясын табыңыз (h = 6,6·10⁻³⁴ Дж·с).',
      en: 'Find the energy of a photon with a frequency of 10¹⁵ Hz (h = 6.6·10⁻³⁴ J·s).',
    },
    options: [
      { ru: '6,6·10⁻¹⁹ Дж', kk: '6,6·10⁻¹⁹ Дж', en: '6.6·10⁻¹⁹ J' },
      { ru: '6,6·10⁻⁴⁹ Дж', kk: '6,6·10⁻⁴⁹ Дж', en: '6.6·10⁻⁴⁹ J' },
      { ru: '6,6·10⁻¹⁸ Дж', kk: '6,6·10⁻¹⁸ Дж', en: '6.6·10⁻¹⁸ J' },
      { ru: '1,5·10¹⁵ Дж', kk: '1,5·10¹⁵ Дж', en: '1.5·10¹⁵ J' },
    ],
    correctIndex: 0, // E = hν = 6,6·10⁻³⁴ × 10¹⁵ = 6,6·10⁻¹⁹
    difficulty: 3,
    gradeMin: 11,
    gradeMax: 12,
  },
];
