import type { Localized } from '../utils/i18n.ts';

/**
 * NOV-01 Академик — scripted response bank for the chat widget demo.
 *
 * HONESTY NOTE: there is no live AI backend wired up in this project (the
 * provider keys live on a different Supabase project). These are pre-written,
 * hand-checked example answers for the five lesson topics the MVP teaches.
 * The widget labels itself "Demo mode" — do not present this bank as a live
 * model anywhere.
 *
 * Every explanation was verified by hand. Keep `keywords` lowercase; matching
 * is done by `findResponse` via simple substring scoring.
 */

export interface TutorQA {
  id: string;
  /** Topic shown next to the answer, e.g. "Математика · Квадратные уравнения". */
  topicLabel: Localized;
  /** Short form of the question — also used for the suggested-question chips. */
  question: Localized;
  /** Lowercase substrings to match against user input (any language). */
  keywords: string[];
  /** Step-by-step explanation, rendered as a numbered list. */
  steps: Localized[];
}

export const TUTOR_QA: TutorQA[] = [
  {
    id: 'quadratic-solve',
    topicLabel: {
      ru: 'Математика · Квадратные уравнения',
      kk: 'Математика · Квадрат теңдеулер',
      en: 'Mathematics · Quadratic equations',
    },
    question: {
      ru: 'Как решить x² − 5x + 6 = 0?',
      kk: 'x² − 5x + 6 = 0 теңдеуін қалай шешемін?',
      en: 'How do I solve x² − 5x + 6 = 0?',
    },
    keywords: [
      'квадрат',
      'дискриминант',
      'виета',
      'x²',
      'quadratic',
      'discriminant',
      'түбір',
      'корень',
      'корни',
      'root',
    ],
    steps: [
      {
        ru: 'Запишем уравнение в стандартном виде ax² + bx + c = 0: здесь a = 1, b = −5, c = 6.',
        kk: 'Теңдеуді ax² + bx + c = 0 стандартты түріне келтіреміз: мұнда a = 1, b = −5, c = 6.',
        en: 'Write the equation in standard form ax² + bx + c = 0: here a = 1, b = −5, c = 6.',
      },
      {
        ru: 'Найдём дискриминант: D = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1.',
        kk: 'Дискриминантты табамыз: D = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1.',
        en: 'Compute the discriminant: D = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1.',
      },
      {
        ru: 'D > 0, значит корней два: x = (−b ± √D) / 2a = (5 ± 1) / 2.',
        kk: 'D > 0 болғандықтан түбір екеу: x = (−b ± √D) / 2a = (5 ± 1) / 2.',
        en: 'D > 0, so there are two roots: x = (−b ± √D) / 2a = (5 ± 1) / 2.',
      },
      {
        ru: 'Ответ: x₁ = 2 и x₂ = 3. Проверка по теореме Виета: 2 + 3 = 5 и 2 · 3 = 6 — сходится.',
        kk: 'Жауабы: x₁ = 2 және x₂ = 3. Виет теоремасымен тексеру: 2 + 3 = 5 және 2 · 3 = 6 — дұрыс шықты.',
        en: 'Answer: x₁ = 2 and x₂ = 3. Check with Vieta’s theorem: 2 + 3 = 5 and 2 · 3 = 6 — it fits.',
      },
    ],
  },
  {
    id: 'quadratic-two-roots',
    topicLabel: {
      ru: 'Математика · Квадратные уравнения',
      kk: 'Математика · Квадрат теңдеулер',
      en: 'Mathematics · Quadratic equations',
    },
    question: {
      ru: 'Почему у квадратного уравнения два корня?',
      kk: 'Квадрат теңдеудің неге екі түбірі болады?',
      en: 'Why does a quadratic equation have two roots?',
    },
    keywords: [
      'два корня',
      'сколько корней',
      'почему корней',
      'парабол',
      'two roots',
      'parabola',
      'екі түбір',
      'парабола',
    ],
    steps: [
      {
        ru: 'Квадратное уравнение — это многочлен второй степени, а его график — парабола.',
        kk: 'Квадрат теңдеу — екінші дәрежелі көпмүше, ал оның графигі — парабола.',
        en: 'A quadratic equation is a second-degree polynomial, and its graph is a parabola.',
      },
      {
        ru: 'Парабола может пересекать ось x дважды, касаться её в одной точке или не пересекать вовсе — отсюда и число корней.',
        kk: 'Парабола x осін екі рет қиып өтуі, бір нүктеде жанасуы немесе мүлдем қимауы мүмкін — түбірлер саны осыған байланысты.',
        en: 'A parabola can cross the x-axis twice, touch it at one point, or miss it entirely — that is where the number of roots comes from.',
      },
      {
        ru: 'За это отвечает дискриминант: D > 0 — два корня, D = 0 — один корень, D < 0 — действительных корней нет.',
        kk: 'Мұны дискриминант анықтайды: D > 0 — екі түбір, D = 0 — бір түбір, D < 0 — нақты түбір жоқ.',
        en: 'The discriminant decides: D > 0 means two roots, D = 0 one root, D < 0 no real roots.',
      },
    ],
  },
  {
    id: 'linear-slope',
    topicLabel: {
      ru: 'Математика · Линейные функции',
      kk: 'Математика · Сызықтық функциялар',
      en: 'Mathematics · Linear functions',
    },
    question: {
      ru: 'Что такое угловой коэффициент k?',
      kk: 'Бұрыштық коэффициент k деген не?',
      en: 'What is the slope k?',
    },
    keywords: [
      'угловой коэффициент',
      'линейная функция',
      'slope',
      'linear function',
      'бұрыштық коэффициент',
      'сызықтық функция',
      'kx',
    ],
    steps: [
      {
        ru: 'Линейная функция записывается как y = kx + b. Её график — прямая линия.',
        kk: 'Сызықтық функция y = kx + b түрінде жазылады. Оның графигі — түзу сызық.',
        en: 'A linear function is written as y = kx + b. Its graph is a straight line.',
      },
      {
        ru: 'k — угловой коэффициент: он показывает, насколько круто прямая поднимается или опускается.',
        kk: 'k — бұрыштық коэффициент: түзудің қаншалықты тік көтерілетінін немесе төмендейтінін көрсетеді.',
        en: 'k is the slope: it shows how steeply the line rises or falls.',
      },
      {
        ru: 'Если k > 0, функция возрастает; если k < 0 — убывает. У y = −2x + 5 коэффициент k = −2, значит прямая идёт вниз.',
        kk: 'k > 0 болса, функция өседі; k < 0 болса — кемиді. y = −2x + 5 функциясында k = −2, демек түзу төмен қарай барады.',
        en: 'If k > 0 the function increases; if k < 0 it decreases. In y = −2x + 5 the slope is k = −2, so the line goes down.',
      },
      {
        ru: 'b — точка пересечения с осью y: у y = −2x + 5 это точка (0; 5).',
        kk: 'b — түзудің y осімен қиылысатын нүктесі: y = −2x + 5 үшін бұл (0; 5) нүктесі.',
        en: 'b is where the line crosses the y-axis: for y = −2x + 5 that is the point (0; 5).',
      },
    ],
  },
  {
    id: 'linear-plot',
    topicLabel: {
      ru: 'Математика · Линейные функции',
      kk: 'Математика · Сызықтық функциялар',
      en: 'Mathematics · Linear functions',
    },
    question: {
      ru: 'Как построить график y = 2x − 3?',
      kk: 'y = 2x − 3 графигін қалай саламын?',
      en: 'How do I plot y = 2x − 3?',
    },
    keywords: [
      'график',
      'построить',
      'plot',
      'graph',
      'графигін',
      'саламын',
      'координат',
    ],
    steps: [
      {
        ru: 'Прямая однозначно задаётся двумя точками, поэтому достаточно найти две.',
        kk: 'Түзу екі нүктемен бірмәнді анықталады, сондықтан екі нүктені табу жеткілікті.',
        en: 'A straight line is fully defined by two points, so finding two is enough.',
      },
      {
        ru: 'Подставим x = 0: y = 2·0 − 3 = −3 → точка (0; −3).',
        kk: 'x = 0 қоямыз: y = 2·0 − 3 = −3 → (0; −3) нүктесі.',
        en: 'Set x = 0: y = 2·0 − 3 = −3 → point (0; −3).',
      },
      {
        ru: 'Подставим x = 2: y = 2·2 − 3 = 1 → точка (2; 1).',
        kk: 'x = 2 қоямыз: y = 2·2 − 3 = 1 → (2; 1) нүктесі.',
        en: 'Set x = 2: y = 2·2 − 3 = 1 → point (2; 1).',
      },
      {
        ru: 'Отметь обе точки на координатной плоскости и проведи через них прямую — это и есть график функции.',
        kk: 'Екі нүктені координаталар жазықтығына белгілеп, олар арқылы түзу жүргіз — міне, функцияның графигі дайын.',
        en: 'Mark both points on the coordinate plane and draw a straight line through them — that is the graph of the function.',
      },
    ],
  },
  {
    id: 'newton-second',
    topicLabel: {
      ru: 'Физика · Законы Ньютона',
      kk: 'Физика · Ньютон заңдары',
      en: 'Physics · Newton’s laws',
    },
    question: {
      ru: 'Объясни второй закон Ньютона.',
      kk: 'Ньютонның екінші заңын түсіндірші.',
      en: 'Explain Newton’s second law.',
    },
    keywords: [
      'ньютон',
      'f = ma',
      'сила',
      'ускорен',
      'newton',
      'force',
      'acceleration',
      'күш',
      'үдеу',
    ],
    steps: [
      {
        ru: 'Второй закон Ньютона связывает силу, массу и ускорение: F = m·a.',
        kk: 'Ньютонның екінші заңы күшті, массаны және үдеуді байланыстырады: F = m·a.',
        en: 'Newton’s second law links force, mass and acceleration: F = m·a.',
      },
      {
        ru: 'Смысл простой: чем больше сила, тем сильнее тело ускоряется; чем больше масса, тем труднее его разогнать.',
        kk: 'Мәні қарапайым: күш неғұрлым үлкен болса, дене соғұрлым жылдам үдейді; масса неғұрлым үлкен болса, оны жылдамдату соғұрлым қиын.',
        en: 'The idea is simple: the bigger the force, the faster a body accelerates; the bigger the mass, the harder it is to speed up.',
      },
      {
        ru: 'Пример: тело массой 4 кг движется с ускорением 3 м/с² → F = 4 · 3 = 12 Н.',
        kk: 'Мысал: массасы 4 кг дене 3 м/с² үдеумен қозғалса → F = 4 · 3 = 12 Н.',
        en: 'Example: a 4 kg body accelerating at 3 m/s² → F = 4 · 3 = 12 N.',
      },
      {
        ru: 'Сила измеряется в ньютонах: 1 Н = 1 кг·м/с².',
        kk: 'Күш ньютонмен өлшенеді: 1 Н = 1 кг·м/с².',
        en: 'Force is measured in newtons: 1 N = 1 kg·m/s².',
      },
    ],
  },
  {
    id: 'newton-three',
    topicLabel: {
      ru: 'Физика · Законы Ньютона',
      kk: 'Физика · Ньютон заңдары',
      en: 'Physics · Newton’s laws',
    },
    question: {
      ru: 'Три закона Ньютона — коротко.',
      kk: 'Ньютонның үш заңы — қысқаша.',
      en: 'Newton’s three laws — briefly.',
    },
    keywords: [
      'три закона',
      'законы ньютона',
      'инерци',
      'противодейств',
      'inertia',
      'three laws',
      'үш заң',
      'инерция',
    ],
    steps: [
      {
        ru: 'Первый закон (закон инерции): тело сохраняет покой или равномерное прямолинейное движение, пока сила не изменит его состояние.',
        kk: 'Бірінші заң (инерция заңы): күш әсер етпейінше дене тыныштықты немесе бірқалыпты түзу сызықты қозғалысты сақтайды.',
        en: 'First law (inertia): a body stays at rest or in uniform straight-line motion until a force changes that state.',
      },
      {
        ru: 'Второй закон: F = m·a — сила сообщает телу ускорение.',
        kk: 'Екінші заң: F = m·a — күш денеге үдеу береді.',
        en: 'Second law: F = m·a — a force gives a body acceleration.',
      },
      {
        ru: 'Третий закон: на каждое действие есть равное противодействие. Толкаешь стену — стена толкает тебя с той же силой.',
        kk: 'Үшінші заң: әр әсерге тең қарсы әсер болады. Қабырғаны итерсең, қабырға да сені дәл сондай күшпен итереді.',
        en: 'Third law: every action has an equal and opposite reaction. Push a wall, and the wall pushes you back with the same force.',
      },
    ],
  },
  {
    id: 'english-present-perfect',
    topicLabel: {
      ru: 'Английский · Present Perfect',
      kk: 'Ағылшын тілі · Present Perfect',
      en: 'English · Present Perfect',
    },
    question: {
      ru: 'Когда использовать Present Perfect?',
      kk: 'Present Perfect-ті қашан қолданамын?',
      en: 'When do I use the Present Perfect?',
    },
    keywords: [
      'present perfect',
      'презент перфект',
      'have been',
      'has been',
      'have/has',
      'perfect',
      'past simple',
    ],
    steps: [
      {
        ru: 'Present Perfect нужен, когда действие связано с настоящим: результат важен сейчас, а точный момент не назван.',
        kk: 'Present Perfect іс-әрекет қазіргі уақытпен байланысты болғанда керек: нәтиже дәл қазір маңызды, ал нақты уақыт аталмайды.',
        en: 'Use the Present Perfect when the action is connected to now: the result matters, but the exact time is not stated.',
      },
      {
        ru: 'Формула: have/has + V3. I have been to Astana. She has finished the task.',
        kk: 'Формуласы: have/has + V3. I have been to Astana. She has finished the task.',
        en: 'The pattern is have/has + V3: I have been to Astana. She has finished the task.',
      },
      {
        ru: 'Слова-маркеры: already, just, ever, never, since, for — они почти всегда указывают на Present Perfect.',
        kk: 'Сигнал сөздер: already, just, ever, never, since, for — олар көбіне Present Perfect-ті білдіреді.',
        en: 'Signal words: already, just, ever, never, since, for — they almost always point to the Present Perfect.',
      },
      {
        ru: 'Если названо точное прошлое время (yesterday, in 2019) — используй Past Simple, а не Present Perfect.',
        kk: 'Егер өткен уақыт нақты көрсетілсе (yesterday, in 2019) — Present Perfect емес, Past Simple қолдан.',
        en: 'If an exact past time is named (yesterday, in 2019), use the Past Simple, not the Present Perfect.',
      },
    ],
  },
  {
    id: 'cs-algorithm-basics',
    topicLabel: {
      ru: 'Информатика · Основы алгоритмов',
      kk: 'Информатика · Алгоритм негіздері',
      en: 'Computer science · Algorithm basics',
    },
    question: {
      ru: 'Что такое алгоритм?',
      kk: 'Алгоритм деген не?',
      en: 'What is an algorithm?',
    },
    keywords: [
      'алгоритм',
      'algorithm',
      'программирован',
      'информатик',
      'цикл',
      'ветвлен',
      'loop',
      'code',
    ],
    steps: [
      {
        ru: 'Алгоритм — это точная последовательность шагов для решения задачи. Как рецепт, только для компьютера.',
        kk: 'Алгоритм — есепті шешуге арналған нақты қадамдар тізбегі. Рецепт сияқты, бірақ компьютерге арналған.',
        en: 'An algorithm is a precise sequence of steps for solving a problem — like a recipe, but for a computer.',
      },
      {
        ru: 'Три базовых блока: следование (шаги по порядку), ветвление (если…то) и цикл (повторять, пока…).',
        kk: 'Үш негізгі блок бар: тізбекті орындалу (қадамдар ретімен), тармақталу (егер…онда) және цикл (…болғанша қайталау).',
        en: 'There are three basic blocks: sequence (steps in order), branching (if…then), and loops (repeat until…).',
      },
      {
        ru: 'Пример: найти максимум из трёх чисел — сравниваем числа парами и запоминаем большее.',
        kk: 'Мысал: үш санның ең үлкенін табу — сандарды жұп-жұбымен салыстырып, үлкенін есте сақтаймыз.',
        en: 'Example: find the largest of three numbers — compare them pairwise and remember the bigger one.',
      },
      {
        ru: 'Хороший алгоритм конечен, однозначен и даёт верный ответ для любых допустимых данных.',
        kk: 'Жақсы алгоритм шектеулі, бірмәнді және кез келген рұқсат етілген деректерге дұрыс жауап береді.',
        en: 'A good algorithm is finite, unambiguous, and gives the right answer for any valid input.',
      },
    ],
  },
];

/** The five lesson topics, listed in the fallback answer. */
export const TUTOR_TOPICS: Localized[] = [
  { ru: 'квадратные уравнения', kk: 'квадрат теңдеулер', en: 'quadratic equations' },
  { ru: 'линейные функции', kk: 'сызықтық функциялар', en: 'linear functions' },
  { ru: 'законы Ньютона', kk: 'Ньютон заңдары', en: 'Newton’s laws' },
  { ru: 'Present Perfect', kk: 'Present Perfect', en: 'the Present Perfect' },
  { ru: 'основы алгоритмов', kk: 'алгоритм негіздері', en: 'algorithm basics' },
];

/**
 * Fallback shown for unmatched input. Honest by design: it says plainly that
 * demo mode only answers pre-written questions, then lists the topics it can
 * cover (TUTOR_TOPICS is rendered after it).
 */
export const FALLBACK_TEXT: Localized = {
  ru: 'В демо-режиме я отвечаю только заранее подготовленными примерами, и на этот вопрос готового ответа у меня нет. Живую модель ещё подключают. Зато я хорошо объясняю эти темы:',
  kk: 'Демо режимінде мен тек алдын ала дайындалған мысалдармен жауап беремін, бұл сұраққа дайын жауабым жоқ. Нақты модель әлі қосылуда. Дегенмен мына тақырыптарды жақсы түсіндіремін:',
  en: 'In demo mode I can only answer with pre-written examples, and I do not have a prepared answer for that question — the live model is still being connected. Here is what I can explain well:',
};

/**
 * Match user input to the best prepared answer.
 *
 * Simple keyword scoring: each keyword found in the input adds to the entry's
 * score; multi-word phrases and longer (more specific) keywords count double.
 * The entry must reach a score of 2 to win — otherwise the caller shows the
 * fallback. Returns `null` when nothing matches well enough.
 */
export function findResponse(input: string): TutorQA | null {
  const text = input.toLowerCase();
  let best: TutorQA | null = null;
  let bestScore = 0;

  for (const qa of TUTOR_QA) {
    let score = 0;
    for (const keyword of qa.keywords) {
      if (text.includes(keyword)) {
        score += keyword.includes(' ') || keyword.length >= 6 ? 2 : 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = qa;
    }
  }

  return bestScore >= 2 ? best : null;
}
