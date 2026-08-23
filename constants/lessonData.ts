import type { Localized } from '../utils/i18n.ts';

// ============================================
// Каталог уроков раздела /learn (не путать с Академией из constants/academy/).
// Здесь описаны типы урока и вопроса, а ниже — сами уроки: и открытые
// (available: true, с полной теорией и вопросами), и «заглушки» (available:
// false, карточка показывается серой и никуда не ведёт). Отдельные уроки в
// массиве LESSONS ниже не комментируются — комментарии только для типов и
// вспомогательных функций внизу файла.
// ============================================
/**
 * NOV-01 Академик — lesson catalogue for the /learn module.
 *
 * Five real, fully-written lessons (`available: true`) plus locked placeholder
 * cards (`available: false`) that render muted in the catalogue and never
 * navigate. Placeholders intentionally carry empty `theory` / `questions`.
 *
 * Practice questions carry a `difficulty` (1–3): the LessonPage walks them
 * adaptively — two correct in a row jump to a harder question, a wrong
 * answer steps down. No question is ever repeated.
 *
 * Every answer key has been verified by hand — do not reorder options
 * without updating `correctIndex`.
 */

// Предметы, для которых есть уроки в /learn.
export type LessonSubject = 'math' | 'physics' | 'english' | 'informatics';
// Общая сложность урока (показывается на карточке).
export type LessonDifficulty = 'easy' | 'medium' | 'hard';
// Сложность отдельного вопроса внутри урока (используется для адаптивного
// порядка вопросов — см. QuestionDifficulty в комментарии к LessonQuestion).
export type QuestionDifficulty = 1 | 2 | 3;

// Один блок теории урока: заголовок, текст и разобранный пример.
export interface LessonTheoryBlock {
  heading: Localized;
  body: Localized;
  /** A worked example, shown in a tinted panel under the body text. */
  example: Localized;
}

// Один вопрос урока: текст, 4 варианта ответа, индекс правильного,
// объяснение и уровень сложности (для адаптивной практики).
export interface LessonQuestion {
  id: string;
  /** Short label surfaced in the finish summary for questions answered wrong. */
  topicLabel: Localized;
  question: Localized;
  options: [Localized, Localized, Localized, Localized];
  correctIndex: number;
  /** Step-by-step reasoning shown after answering — never just "correct". */
  explanation: Localized;
  /** Adaptive-practice level (as in the diagnostic): 1 basics → 3 hardest. */
  difficulty: QuestionDifficulty;
}

// Один урок целиком: метаданные (название, сложность, время, опыт) плюс
// теория и вопросы. available: false — это карточка-заглушка без контента.
export interface Lesson {
  slug: string;
  subject: LessonSubject;
  /** Stable topic slug, stored in lesson_progress.subject's row context. */
  topic: string;
  title: Localized;
  summary: Localized;
  difficulty: LessonDifficulty;
  minutes: number;
  xp: number;
  /** false = locked placeholder card; clicking it never navigates. */
  available: boolean;
  theory: LessonTheoryBlock[];
  questions: LessonQuestion[];
}

// Краткое описание предмета: его slug и название на трёх языках.
export interface LessonSubjectMeta {
  slug: LessonSubject;
  label: Localized;
}

// Список предметов, которые показываются как фильтр на странице /learn.
export const LESSON_SUBJECTS: LessonSubjectMeta[] = [
  { slug: 'math', label: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
  { slug: 'physics', label: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
  { slug: 'english', label: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' } },
  {
    slug: 'informatics',
    label: { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' },
  },
];

// Названия предметов на трёх языках (используется функцией subjectLabel ниже).
const SUBJECT_LABEL: Record<LessonSubject, Localized> = {
  math: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' },
  physics: { ru: 'Физика', kk: 'Физика', en: 'Physics' },
  english: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' },
  informatics: { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' },
};

// Сами уроки (открытые и заглушки), по всем предметам. Ниже — контент, его
// отдельные записи не комментируются (см. пояснение в шапке файла).
export const LESSONS: Lesson[] = [
  // -------------------------------------------------------------------------
  // math / quadratic-equations — REAL
  // -------------------------------------------------------------------------
  {
    slug: 'quadratic-equations',
    subject: 'math',
    topic: 'quadratic-equations',
    title: {
      ru: 'Квадратные уравнения: дискриминант и корни',
      kk: 'Квадрат теңдеулер: дискриминант және түбірлер',
      en: 'Quadratic equations: the discriminant and roots',
    },
    summary: {
      ru: 'Учимся решать уравнения вида ax² + bx + c = 0 через дискриминант и по теореме Виета.',
      kk: 'ax² + bx + c = 0 түріндегі теңдеулерді дискриминант арқылы және Виет теоремасымен шешуді үйренеміз.',
      en: "Learn to solve equations of the form ax² + bx + c = 0 using the discriminant and Vieta's theorem.",
    },
    difficulty: 'medium',
    minutes: 12,
    xp: 40,
    available: true,
    theory: [
      {
        heading: {
          ru: 'Что такое квадратное уравнение',
          kk: 'Квадрат теңдеу дегеніміз не',
          en: 'What a quadratic equation is',
        },
        body: {
          ru: 'Квадратное уравнение — это уравнение вида ax² + bx + c = 0, где a не равно нулю. Числа a, b и c называют коэффициентами: a — старший, b — средний, c — свободный член.',
          kk: 'Квадрат теңдеу — ax² + bx + c = 0 түріндегі теңдеу, мұндағы a нөлге тең емес. a, b және c сандары коэффициенттер деп аталады: a — үлкен, b — ортаңғы, c — бос мүше.',
          en: 'A quadratic equation has the form ax² + bx + c = 0, where a is not zero. The numbers a, b and c are called coefficients: a is the leading coefficient, b the middle one, c the constant term.',
        },
        example: {
          ru: 'Пример: 2x² − 5x + 3 = 0. Здесь a = 2, b = −5, c = 3. Важно брать коэффициенты со знаком: b = −5, а не 5.',
          kk: 'Мысал: 2x² − 5x + 3 = 0. Мұнда a = 2, b = −5, c = 3. Коэффициенттерді таңбасымен алу маңызды: b = −5, 5 емес.',
          en: 'Example: 2x² − 5x + 3 = 0. Here a = 2, b = −5, c = 3. Take the signs with the coefficients: b is −5, not 5.',
        },
      },
      {
        heading: {
          ru: 'Дискриминант',
          kk: 'Дискриминант',
          en: 'The discriminant',
        },
        body: {
          ru: 'Дискриминант считают по формуле D = b² − 4ac. Он показывает, сколько корней у уравнения: если D > 0 — два корня, если D = 0 — один корень, если D < 0 — корней нет.',
          kk: 'Дискриминант D = b² − 4ac формуласымен есептеледі. Ол теңдеудің неше түбірі барын көрсетеді: D > 0 болса — екі түбір, D = 0 болса — бір түбір, D < 0 болса — түбір жоқ.',
          en: 'The discriminant is D = b² − 4ac. It tells you how many roots the equation has: D > 0 means two roots, D = 0 means one root, D < 0 means no roots.',
        },
        example: {
          ru: 'Пример: x² − 5x + 6 = 0. Считаем: D = (−5)² − 4·1·6 = 25 − 24 = 1. D > 0, значит корней два.',
          kk: 'Мысал: x² − 5x + 6 = 0. Есептейміз: D = (−5)² − 4·1·6 = 25 − 24 = 1. D > 0, демек екі түбір бар.',
          en: 'Example: x² − 5x + 6 = 0. Compute D = (−5)² − 4·1·6 = 25 − 24 = 1. Since D > 0, there are two roots.',
        },
      },
      {
        heading: {
          ru: 'Формула корней',
          kk: 'Түбірлер формуласы',
          en: 'The quadratic formula',
        },
        body: {
          ru: 'Если D ≥ 0, корни находят по формуле x = (−b ± √D) / (2a). Сначала считают с плюсом, потом с минусом — получается два значения.',
          kk: 'Егер D ≥ 0 болса, түбірлер x = (−b ± √D) / (2a) формуласымен табылады. Алдымен плюспен, содан кейін минуспен есептейміз — екі мән шығады.',
          en: 'If D ≥ 0, the roots are x = (−b ± √D) / (2a). Compute once with the plus and once with the minus to get the two values.',
        },
        example: {
          ru: 'Пример: x² − 5x + 6 = 0, D = 1. x₁ = (5 + 1)/2 = 3, x₂ = (5 − 1)/2 = 2. Проверка: 2² − 5·2 + 6 = 4 − 10 + 6 = 0. Верно!',
          kk: 'Мысал: x² − 5x + 6 = 0, D = 1. x₁ = (5 + 1)/2 = 3, x₂ = (5 − 1)/2 = 2. Тексеру: 2² − 5·2 + 6 = 4 − 10 + 6 = 0. Дұрыс!',
          en: 'Example: x² − 5x + 6 = 0, D = 1. x₁ = (5 + 1)/2 = 3, x₂ = (5 − 1)/2 = 2. Check: 2² − 5·2 + 6 = 4 − 10 + 6 = 0. Correct!',
        },
      },
      {
        heading: {
          ru: 'Теорема Виета — быстрый способ',
          kk: 'Виет теоремасы — жылдам әдіс',
          en: "Vieta's theorem — the quick way",
        },
        body: {
          ru: 'Для приведённого уравнения x² + px + q = 0 сумма корней равна −p, а произведение равно q. Часто корни можно просто подобрать, найдя два подходящих числа.',
          kk: 'Келтірілген x² + px + q = 0 теңдеуінде түбірлердің қосындысы −p-ға, көбейтіндісі q-ға тең. Көбінесе түбірлерді сәйкес екі санды таңдап табуға болады.',
          en: 'For a monic equation x² + px + q = 0 the sum of the roots is −p and their product is q. You can often find the roots by picking two numbers that fit.',
        },
        example: {
          ru: 'Пример: x² − 7x + 12 = 0. Нужны два числа с суммой 7 и произведением 12. Это 3 и 4: 3 + 4 = 7, 3 · 4 = 12. Ответ: x = 3 и x = 4.',
          kk: 'Мысал: x² − 7x + 12 = 0. Қосындысы 7, көбейтіндісі 12 болатын екі сан керек. Бұл 3 пен 4: 3 + 4 = 7, 3 · 4 = 12. Жауабы: x = 3 және x = 4.',
          en: 'Example: x² − 7x + 12 = 0. You need two numbers with sum 7 and product 12. Those are 3 and 4: 3 + 4 = 7, 3 · 4 = 12. Answer: x = 3 and x = 4.',
        },
      },
    ],
    questions: [
      {
        id: 'qe-roots-count',
        topicLabel: { ru: 'Дискриминант', kk: 'Дискриминант', en: 'The discriminant' },
        question: {
          ru: 'Сколько корней имеет уравнение x² + 4x + 4 = 0?',
          kk: 'x² + 4x + 4 = 0 теңдеуінің неше түбірі бар?',
          en: 'How many roots does x² + 4x + 4 = 0 have?',
        },
        options: [
          { ru: 'Один корень', kk: 'Бір түбір', en: 'One root' },
          { ru: 'Два корня', kk: 'Екі түбір', en: 'Two roots' },
          { ru: 'Нет корней', kk: 'Түбірі жоқ', en: 'No roots' },
          { ru: 'Бесконечно много', kk: 'Шексіз көп', en: 'Infinitely many' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: определим коэффициенты — a = 1, b = 4, c = 4. Шаг 2: D = b² − 4ac = 16 − 16 = 0. Шаг 3: когда D = 0, у уравнения ровно один корень. Это и есть ответ: один корень.',
          kk: '1-қадам: коэффициенттерді анықтаймыз — a = 1, b = 4, c = 4. 2-қадам: D = b² − 4ac = 16 − 16 = 0. 3-қадам: D = 0 болғанда теңдеудің дәл бір түбірі болады. Демек, жауап — бір түбір.',
          en: 'Step 1: identify the coefficients — a = 1, b = 4, c = 4. Step 2: D = b² − 4ac = 16 − 16 = 0. Step 3: when D = 0 the equation has exactly one root. So the answer is one root.',
        },
        difficulty: 1,
      },
      {
        id: 'qe-solve',
        topicLabel: { ru: 'Формула корней', kk: 'Түбірлер формуласы', en: 'The quadratic formula' },
        question: {
          ru: 'Решите уравнение: x² − 3x − 10 = 0',
          kk: 'Теңдеуді шешіңіз: x² − 3x − 10 = 0',
          en: 'Solve the equation: x² − 3x − 10 = 0',
        },
        options: [
          { ru: 'x = 5 и x = −2', kk: 'x = 5 және x = −2', en: 'x = 5 and x = −2' },
          { ru: 'x = −5 и x = 2', kk: 'x = −5 және x = 2', en: 'x = −5 and x = 2' },
          { ru: 'x = 10 и x = −1', kk: 'x = 10 және x = −1', en: 'x = 10 and x = −1' },
          { ru: 'x = 3 и x = −10', kk: 'x = 3 және x = −10', en: 'x = 3 and x = −10' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: D = (−3)² − 4·1·(−10) = 9 + 40 = 49. Шаг 2: √49 = 7. Шаг 3: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2. Обрати внимание: −b = −(−3) = 3, а не −3.',
          kk: '1-қадам: D = (−3)² − 4·1·(−10) = 9 + 40 = 49. 2-қадам: √49 = 7. 3-қадам: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2. Назар аудар: −b = −(−3) = 3, −3 емес.',
          en: 'Step 1: D = (−3)² − 4·1·(−10) = 9 + 40 = 49. Step 2: √49 = 7. Step 3: x₁ = (3 + 7)/2 = 5, x₂ = (3 − 7)/2 = −2. Note that −b = −(−3) = 3, not −3.',
        },
        difficulty: 2,
      },
      {
        id: 'qe-discriminant',
        topicLabel: { ru: 'Дискриминант', kk: 'Дискриминант', en: 'The discriminant' },
        question: {
          ru: 'Найдите дискриминант уравнения 2x² − 4x + 1 = 0',
          kk: '2x² − 4x + 1 = 0 теңдеуінің дискриминантын табыңыз',
          en: 'Find the discriminant of 2x² − 4x + 1 = 0',
        },
        options: [
          { ru: '8', kk: '8', en: '8' },
          { ru: '−8', kk: '−8', en: '−8' },
          { ru: '24', kk: '24', en: '24' },
          { ru: '12', kk: '12', en: '12' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: a = 2, b = −4, c = 1. Шаг 2: D = b² − 4ac = (−4)² − 4·2·1. Шаг 3: (−4)² = 16, а 4·2·1 = 8. Шаг 4: D = 16 − 8 = 8. Ответ: 8.',
          kk: '1-қадам: a = 2, b = −4, c = 1. 2-қадам: D = b² − 4ac = (−4)² − 4·2·1. 3-қадам: (−4)² = 16, ал 4·2·1 = 8. 4-қадам: D = 16 − 8 = 8. Жауабы: 8.',
          en: 'Step 1: a = 2, b = −4, c = 1. Step 2: D = b² − 4ac = (−4)² − 4·2·1. Step 3: (−4)² = 16 and 4·2·1 = 8. Step 4: D = 16 − 8 = 8. The answer is 8.',
        },
        difficulty: 2,
      },
      {
        id: 'qe-vieta',
        topicLabel: { ru: 'Теорема Виета', kk: 'Виет теоремасы', en: "Vieta's theorem" },
        question: {
          ru: 'Не решая уравнение полностью, найдите корни x² + x − 6 = 0 по теореме Виета.',
          kk: 'Теңдеуді толық шешпей, Виет теоремасы бойынша x² + x − 6 = 0 түбірлерін табыңыз.',
          en: "Without solving fully, find the roots of x² + x − 6 = 0 using Vieta's theorem.",
        },
        options: [
          { ru: 'x = 2 и x = −3', kk: 'x = 2 және x = −3', en: 'x = 2 and x = −3' },
          { ru: 'x = −2 и x = 3', kk: 'x = −2 және x = 3', en: 'x = −2 and x = 3' },
          { ru: 'x = 1 и x = −6', kk: 'x = 1 және x = −6', en: 'x = 1 and x = −6' },
          { ru: 'x = 6 и x = −1', kk: 'x = 6 және x = −1', en: 'x = 6 and x = −1' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: для x² + px + q = 0 сумма корней равна −p, а произведение — q. Здесь сумма должна быть −1, произведение −6. Шаг 2: подбираем: 2 + (−3) = −1 и 2 · (−3) = −6. Подходит! Ответ: x = 2 и x = −3.',
          kk: '1-қадам: x² + px + q = 0 үшін түбірлер қосындысы −p, көбейтіндісі q. Мұнда қосынды −1, көбейтінді −6 болуы керек. 2-қадам: таңдаймыз: 2 + (−3) = −1 және 2 · (−3) = −6. Сәйкес келеді! Жауабы: x = 2 және x = −3.',
          en: 'Step 1: for x² + px + q = 0 the sum of the roots is −p and the product is q. Here the sum must be −1 and the product −6. Step 2: try 2 and −3: 2 + (−3) = −1 and 2 · (−3) = −6. That fits! Answer: x = 2 and x = −3.',
        },
        difficulty: 3,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // math / linear-functions — REAL
  // -------------------------------------------------------------------------
  {
    slug: 'linear-functions',
    subject: 'math',
    topic: 'linear-functions',
    title: {
      ru: 'Линейная функция y = kx + b',
      kk: 'Сызықтық функция y = kx + b',
      en: 'Linear functions: y = kx + b',
    },
    summary: {
      ru: 'Разбираемся, что означают k и b, и учимся строить график прямой по двум точкам.',
      kk: 'k мен b нені білдіретінін түсініп, түзу графигін екі нүкте бойынша салуды үйренеміз.',
      en: 'Understand what k and b mean and learn to plot a line from two points.',
    },
    difficulty: 'easy',
    minutes: 10,
    xp: 30,
    available: true,
    theory: [
      {
        heading: {
          ru: 'Что такое линейная функция',
          kk: 'Сызықтық функция дегеніміз не',
          en: 'What a linear function is',
        },
        body: {
          ru: 'Линейная функция — это правило вида y = kx + b: каждому значению x она ставит в пару одно значение y. Её график — всегда прямая линия, отсюда и название.',
          kk: 'Сызықтық функция — y = kx + b түріндегі ереже: әр x мәніне бір ғана y мәні сәйкес келеді. Оның графигі — әрқашан түзу сызық, аты да сонан шыққан.',
          en: 'A linear function is a rule of the form y = kx + b: each value of x gets exactly one value of y. Its graph is always a straight line — hence the name.',
        },
        example: {
          ru: 'Пример: y = 2x + 1. Если x = 0, то y = 1; если x = 1, то y = 3; если x = 2, то y = 5. Точки (0; 1), (1; 3), (2; 5) лежат на одной прямой.',
          kk: 'Мысал: y = 2x + 1. Егер x = 0 болса, y = 1; x = 1 болса, y = 3; x = 2 болса, y = 5. (0; 1), (1; 3), (2; 5) нүктелері бір түзуде жатады.',
          en: 'Example: y = 2x + 1. If x = 0 then y = 1; if x = 1 then y = 3; if x = 2 then y = 5. The points (0; 1), (1; 3), (2; 5) all lie on one straight line.',
        },
      },
      {
        heading: {
          ru: 'Коэффициент k — наклон прямой',
          kk: 'k коэффициенті — түзудің еңкейуі',
          en: 'The coefficient k — the slope',
        },
        body: {
          ru: 'k называют угловым коэффициентом — он задаёт наклон прямой. Если k > 0, функция возрастает: график идёт вверх слева направо. Если k < 0 — убывает, график идёт вниз. Чем больше |k|, тем круче прямая.',
          kk: 'k бұрыштық коэффициент деп аталады — ол түзудің еңкейуін береді. k > 0 болса, функция өспелі: график солдан оңға қарай жоғары көтеріледі. k < 0 болса — кемімелі, график төмен түседі. |k| неғұрлым үлкен болса, түзу соғұрлым тік болады.',
          en: 'k is called the slope — it sets how steep the line is. If k > 0 the function increases: the graph rises left to right. If k < 0 it decreases, the graph falls. The bigger |k|, the steeper the line.',
        },
        example: {
          ru: 'Пример: у y = 3x − 2 коэффициент k = 3 > 0 — прямая растёт и довольно крутая. А у y = −0,5x + 4 коэффициент k = −0,5 < 0 — прямая плавно спускается.',
          kk: 'Мысал: y = 3x − 2 функциясында k = 3 > 0 — түзу өседі және тым тік. Ал y = −0,5x + 4 функциясында k = −0,5 < 0 — түзу жайлап төмендейді.',
          en: 'Example: for y = 3x − 2 the slope k = 3 > 0 — the line rises steeply. For y = −0.5x + 4 the slope k = −0.5 < 0 — the line gently falls.',
        },
      },
      {
        heading: {
          ru: 'Свободный член b — пересечение с осью y',
          kk: 'b бос мүшесі — y осімен қиылысу',
          en: 'The constant b — the y-intercept',
        },
        body: {
          ru: 'b показывает, где прямая пересекает ось y. Когда x = 0, получается y = b. Значит, график всегда проходит через точку (0; b).',
          kk: 'b түзудің y осін қай нүктеде қиятындығын көрсетеді. x = 0 болғанда y = b шығады. Демек, график әрқашан (0; b) нүктесі арқылы өтеді.',
          en: 'b shows where the line crosses the y-axis. When x = 0 you get y = b, so the graph always passes through the point (0; b).',
        },
        example: {
          ru: 'Пример: у функции y = −x + 4 свободный член b = 4, поэтому прямая пересекает ось y в точке (0; 4).',
          kk: 'Мысал: y = −x + 4 функциясында b = 4, сондықтан түзу y осін (0; 4) нүктесінде қияды.',
          en: 'Example: for y = −x + 4 the constant b = 4, so the line crosses the y-axis at (0; 4).',
        },
      },
      {
        heading: {
          ru: 'Как построить график',
          kk: 'Графикті қалай саламыз',
          en: 'How to plot the graph',
        },
        body: {
          ru: 'Прямая однозначно задаётся двумя точками. Возьми любые два значения x, посчитай y, отметь точки и проведи через них прямую. Удобнее всего брать x = 0 — тогда y = b сразу известен.',
          kk: 'Түзу екі нүктемен толық анықталады. Кез келген екі x мәнін алып, y-ты есептеп, нүктелерді белгіле және солар арқылы түзу жүргіз. Ең ыңғайлысы x = 0 алу — онда y = b бірден белгілі.',
          en: 'A line is fully determined by two points. Pick any two values of x, compute y, mark the points and draw the line through them. The easiest choice is x = 0 — then y = b is already known.',
        },
        example: {
          ru: 'Пример: y = 2x − 3. При x = 0: y = −3, точка (0; −3). При x = 2: y = 1, точка (2; 1). Проводим прямую через (0; −3) и (2; 1) — график готов.',
          kk: 'Мысал: y = 2x − 3. x = 0 кезінде: y = −3, нүкте (0; −3). x = 2 кезінде: y = 1, нүкте (2; 1). (0; −3) және (2; 1) нүктелері арқылы түзу жүргіземіз — график дайын.',
          en: 'Example: y = 2x − 3. At x = 0: y = −3, point (0; −3). At x = 2: y = 1, point (2; 1). Draw a line through (0; −3) and (2; 1) — the graph is done.',
        },
      },
    ],
    questions: [
      {
        id: 'lf-slope',
        topicLabel: {
          ru: 'Угловой коэффициент',
          kk: 'Бұрыштық коэффициент',
          en: 'The slope',
        },
        question: {
          ru: 'Чему равен угловой коэффициент функции y = −5x + 2?',
          kk: 'y = −5x + 2 функциясының бұрыштық коэффициенті неге тең?',
          en: 'What is the slope of y = −5x + 2?',
        },
        options: [
          { ru: '−5', kk: '−5', en: '−5' },
          { ru: '2', kk: '2', en: '2' },
          { ru: '5', kk: '5', en: '5' },
          { ru: 'x', kk: 'x', en: 'x' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: запишем общий вид: y = kx + b. Шаг 2: сравним с нашей функцией y = −5x + 2. Шаг 3: k — это число перед x, то есть −5. Число 2 — это b, свободный член. Ответ: k = −5.',
          kk: '1-қадам: жалпы түрін жазамыз: y = kx + b. 2-қадам: y = −5x + 2 функциясымен салыстырамыз. 3-қадам: k — x-тың алдындағы сан, яғни −5. Ал 2 саны — b, бос мүше. Жауабы: k = −5.',
          en: 'Step 1: recall the general form y = kx + b. Step 2: compare with y = −5x + 2. Step 3: k is the number in front of x, which is −5. The number 2 is b, the constant term. Answer: k = −5.',
        },
        difficulty: 1,
      },
      {
        id: 'lf-intercept',
        topicLabel: { ru: 'Свободный член', kk: 'Бос мүше', en: 'The constant term' },
        question: {
          ru: 'График функции y = 2x + 3 пересекает ось y в точке…',
          kk: 'y = 2x + 3 функциясының графигі y осін қай нүктеде қияды…',
          en: 'The graph of y = 2x + 3 crosses the y-axis at…',
        },
        options: [
          { ru: '(0; 3)', kk: '(0; 3)', en: '(0; 3)' },
          { ru: '(3; 0)', kk: '(3; 0)', en: '(3; 0)' },
          { ru: '(0; 2)', kk: '(0; 2)', en: '(0; 2)' },
          { ru: '(2; 3)', kk: '(2; 3)', en: '(2; 3)' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: на оси y всегда x = 0. Шаг 2: подставим: y = 2·0 + 3 = 3. Шаг 3: точка пересечения — (0; 3). Быстрый способ: это просто точка (0; b).',
          kk: '1-қадам: y осінде әрқашан x = 0. 2-қадам: қоямыз: y = 2·0 + 3 = 3. 3-қадам: қиылысу нүктесі — (0; 3). Жылдам әдіс: бұл жай ғана (0; b) нүктесі.',
          en: 'Step 1: on the y-axis x is always 0. Step 2: substitute: y = 2·0 + 3 = 3. Step 3: the intersection point is (0; 3). Quick way: it is simply the point (0; b).',
        },
        difficulty: 1,
      },
      {
        id: 'lf-increasing',
        topicLabel: {
          ru: 'Возрастание и убывание',
          kk: 'Өсуі және кемуі',
          en: 'Increasing and decreasing',
        },
        question: {
          ru: 'Какая из функций возрастает?',
          kk: 'Қай функция өспелі?',
          en: 'Which of these functions is increasing?',
        },
        options: [
          { ru: 'y = 0,5x − 7', kk: 'y = 0,5x − 7', en: 'y = 0.5x − 7' },
          { ru: 'y = −x + 1', kk: 'y = −x + 1', en: 'y = −x + 1' },
          { ru: 'y = −3x', kk: 'y = −3x', en: 'y = −3x' },
          { ru: 'y = 4', kk: 'y = 4', en: 'y = 4' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: функция возрастает, когда k > 0. Шаг 2: смотрим на коэффициенты: 0,5 > 0, а −1 и −3 меньше нуля. Шаг 3: y = 4 — это константа, её график горизонтальный: она не растёт и не убывает. Ответ: y = 0,5x − 7.',
          kk: '1-қадам: функция k > 0 болғанда өспелі болады. 2-қадам: коэффициенттерге қараймыз: 0,5 > 0, ал −1 мен −3 нөлден кіші. 3-қадам: y = 4 — тұрақты сан, графигі көлденең: ол өспейді де, кемімейді де. Жауабы: y = 0,5x − 7.',
          en: 'Step 1: a function increases when k > 0. Step 2: check the slopes: 0.5 > 0, while −1 and −3 are negative. Step 3: y = 4 is a constant — its graph is horizontal, neither rising nor falling. Answer: y = 0.5x − 7.',
        },
        difficulty: 2,
      },
      {
        id: 'lf-point',
        topicLabel: { ru: 'Точка на графике', kk: 'Графиктегі нүкте', en: 'Point on the graph' },
        question: {
          ru: 'Принадлежит ли точка (2; 7) графику функции y = 3x + 1?',
          kk: '(2; 7) нүктесі y = 3x + 1 функциясының графигіне тиісті ме?',
          en: 'Does the point (2; 7) lie on the graph of y = 3x + 1?',
        },
        options: [
          { ru: 'Да, принадлежит', kk: 'Иә, тиісті', en: 'Yes, it does' },
          { ru: 'Нет, не принадлежит', kk: 'Жоқ, тиісті емес', en: "No, it doesn't" },
          { ru: 'Нельзя определить', kk: 'Анықтау мүмкін емес', en: 'Cannot be determined' },
          { ru: 'Только если x = 0', kk: 'Тек x = 0 болса ғана', en: 'Only if x = 0' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: точка принадлежит графику, если её координаты превращают формулу в верное равенство. Шаг 2: подставим x = 2: y = 3·2 + 1 = 7. Шаг 3: получили ровно 7 — совпало с координатой точки. Значит, точка (2; 7) лежит на графике.',
          kk: '1-қадам: нүктенің координаттары формуланы дұрыс теңдікке айналдырса, ол графикке тиісті. 2-қадам: x = 2 қоямыз: y = 3·2 + 1 = 7. 3-қадам: дәл 7 шықты — нүктенің координатымен сәйкес. Демек, (2; 7) нүктесі графикте жатады.',
          en: 'Step 1: a point lies on the graph if its coordinates make the formula a true equality. Step 2: substitute x = 2: y = 3·2 + 1 = 7. Step 3: we got exactly 7, matching the point. So (2; 7) is on the graph.',
        },
        difficulty: 3,
      },
    ],
  },


  // -------------------------------------------------------------------------
  // physics / newtons-laws — REAL
  // -------------------------------------------------------------------------
  {
    slug: 'newtons-laws',
    subject: 'physics',
    topic: 'newtons-laws',
    title: {
      ru: 'Три закона Ньютона',
      kk: 'Ньютонның үш заңы',
      en: "Newton's three laws",
    },
    summary: {
      ru: 'Почему тела движутся или покоятся, как связаны сила, масса и ускорение, и почему действие всегда вызывает противодействие.',
      kk: 'Денелер неге қозғалатыны немесе тыныш қалатыны, күш, масса және үдеу қалай байланысатыны және әсер неге әрқашан қарсы әсер тудыратыны.',
      en: 'Why bodies move or stay still, how force, mass and acceleration are connected, and why every action has a reaction.',
    },
    difficulty: 'medium',
    minutes: 12,
    xp: 40,
    available: true,
    theory: [
      {
        heading: {
          ru: 'Первый закон — закон инерции',
          kk: 'Бірінші заң — инерция заңы',
          en: 'The first law — inertia',
        },
        body: {
          ru: 'Если на тело не действуют силы или они скомпенсированы, тело сохраняет состояние покоя или равномерного прямолинейного движения. Это свойство тел «сопротивляться» изменению скорости называется инерцией.',
          kk: 'Егер денеге күштер әсер етпесе немесе олар теңгерілсе, дене тыныштық күйін немесе бірқалыпты түзу сызықты қозғалысын сақтайды. Денелердің жылдамдық өзгерісіне «кедергі келтіру» қасиеті инерция деп аталады.',
          en: 'If no forces act on a body, or they balance out, the body stays at rest or keeps moving uniformly in a straight line. This tendency of bodies to "resist" changes in velocity is called inertia.',
        },
        example: {
          ru: 'Пример: автобус резко тормозит, а пассажиры наклоняются вперёд. Их тела по инерции продолжают двигаться с прежней скоростью, хотя автобус уже замедлился.',
          kk: 'Мысал: автобус кенеттен тежелсе, жолаушылар алға еңкейеді. Автобус баяулағанымен, олардың денелері инерция бойынша бұрынғы жылдамдықпен қозғала береді.',
          en: 'Example: a bus brakes sharply and the passengers lean forward. By inertia their bodies keep moving at the previous speed even though the bus has already slowed down.',
        },
      },
      {
        heading: {
          ru: 'Второй закон — F = ma',
          kk: 'Екінші заң — F = ma',
          en: 'The second law — F = ma',
        },
        body: {
          ru: 'Сила равна произведению массы тела на ускорение: F = ma. Чем больше сила, тем больше ускорение; чем больше масса, тем труднее разогнать тело. Сила измеряется в ньютонах: 1 Н = 1 кг·м/с².',
          kk: 'Күш дене массасы мен үдеудің көбейтіндісіне тең: F = ma. Күш неғұрлым үлкен болса, үдеу соғұрлым үлкен; масса неғұрлым үлкен болса, денені жеделдету соғұрлым қиын. Күш ньютонмен өлшенеді: 1 Н = 1 кг·м/с².',
          en: 'Force equals mass times acceleration: F = ma. The greater the force, the greater the acceleration; the greater the mass, the harder it is to speed the body up. Force is measured in newtons: 1 N = 1 kg·m/s².',
        },
        example: {
          ru: 'Пример: на тело массой 2 кг действует сила, дающая ускорение 3 м/с². Сила равна F = 2 · 3 = 6 Н.',
          kk: 'Мысал: массасы 2 кг денеге 3 м/с² үдеу беретін күш әсер етеді. Күш F = 2 · 3 = 6 Н.',
          en: 'Example: a force gives a 2 kg body an acceleration of 3 m/s². The force is F = 2 · 3 = 6 N.',
        },
      },
      {
        heading: {
          ru: 'Третий закон — действие и противодействие',
          kk: 'Үшінші заң — әсер мен қарсы әсер',
          en: 'The third law — action and reaction',
        },
        body: {
          ru: 'Тела действуют друг на друга с силами, равными по величине и противоположными по направлению: F₁ = −F₂. Важно: эти силы приложены к разным телам, поэтому они не компенсируют друг друга.',
          kk: 'Денелер бір-біріне шамасы бойынша тең, бағыты бойынша қарама-қарсы күштермен әсер етеді: F₁ = −F₂. Маңыздысы: бұл күштер әртүрлі денелерге түседі, сондықтан олар бір-бірін теңгермейді.',
          en: 'Bodies act on each other with forces equal in size and opposite in direction: F₁ = −F₂. Important: these forces act on different bodies, so they do not cancel each other.',
        },
        example: {
          ru: 'Пример: гребец отталкивает веслом воду назад, а вода толкает лодку вперёд. Или книга давит на стол вниз, а стол давит на книгу вверх с такой же силой.',
          kk: 'Мысал: қайықшы ескекпен суды артқа итереді, ал су қайықты алға итереді. Немесе кітап үстелді төмен басады, ал үстел кітапты дәл сондай күшпен жоғары басады.',
          en: 'Example: a rower pushes the water backwards with an oar, and the water pushes the boat forwards. Or a book presses down on a table, and the table presses up on the book with the same force.',
        },
      },
      {
        heading: {
          ru: 'Сила тяжести — частный случай F = mg',
          kk: 'Ауырлық күші — F = mg жеке жағдайы',
          en: 'Gravity — the special case F = mg',
        },
        body: {
          ru: 'Земля притягивает все тела с силой тяжести F = mg, где g ≈ 10 м/с² — ускорение свободного падения. Это тот же второй закон, только ускорение всегда равно g и направлено вниз.',
          kk: 'Жер барлық денені F = mg ауырлық күшімен тартады, мұндағы g ≈ 10 м/с² — еркін түсу үдеуі. Бұл — сол екінші заң, бірақ үдеу әрқашан g-ға тең және төмен бағытталған.',
          en: 'The Earth attracts every body with the force of gravity F = mg, where g ≈ 10 m/s² is the acceleration of free fall. It is the same second law, except the acceleration is always g, directed downwards.',
        },
        example: {
          ru: 'Пример: рюкзак массой 5 кг. Сила тяжести: F = 5 · 10 = 50 Н. Именно столько «весит» рюкзак на Земле.',
          kk: 'Мысал: массасы 5 кг рюкзак. Ауырлық күші: F = 5 · 10 = 50 Н. Рюкзак Жер бетінде дәл осыншалық «салмақ түсіреді».',
          en: 'Example: a backpack of mass 5 kg. The force of gravity is F = 5 · 10 = 50 N. That is how much the backpack "weighs" on Earth.',
        },
      },
    ],
    questions: [
      {
        id: 'nl-second-law',
        topicLabel: { ru: 'Второй закон', kk: 'Екінші заң', en: 'The second law' },
        question: {
          ru: 'Тело массой 3 кг движется с ускорением 2 м/с². Какая сила действует на тело?',
          kk: 'Массасы 3 кг дене 2 м/с² үдеумен қозғалады. Денеге қандай күш әсер етеді?',
          en: 'A body of mass 3 kg accelerates at 2 m/s². What force acts on it?',
        },
        options: [
          { ru: '6 Н', kk: '6 Н', en: '6 N' },
          { ru: '5 Н', kk: '5 Н', en: '5 N' },
          { ru: '1,5 Н', kk: '1,5 Н', en: '1.5 N' },
          { ru: '9 Н', kk: '9 Н', en: '9 N' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: выпишем данные: m = 3 кг, a = 2 м/с². Шаг 2: по второму закону Ньютона F = ma. Шаг 3: подставим: F = 3 · 2 = 6 Н. Ответ: 6 Н.',
          kk: '1-қадам: берілгендерін жазамыз: m = 3 кг, a = 2 м/с². 2-қадам: Ньютонның екінші заңы бойынша F = ma. 3-қадам: қоямыз: F = 3 · 2 = 6 Н. Жауабы: 6 Н.',
          en: "Step 1: write down the data: m = 3 kg, a = 2 m/s². Step 2: by Newton's second law F = ma. Step 3: substitute: F = 3 · 2 = 6 N. Answer: 6 N.",
        },
        difficulty: 1,
      },
      {
        id: 'nl-inertia',
        topicLabel: { ru: 'Инерция', kk: 'Инерция', en: 'Inertia' },
        question: {
          ru: 'Почему при резком торможении автобуса пассажиры наклоняются вперёд?',
          kk: 'Автобус кенеттен тежелгенде жолаушылар неге алға еңкейеді?',
          en: 'Why do passengers lean forward when a bus brakes sharply?',
        },
        options: [
          {
            ru: 'Тела по инерции продолжают двигаться с прежней скоростью',
            kk: 'Денелер инерция бойынша бұрынғы жылдамдықпен қозғала береді',
            en: 'Their bodies keep moving at the previous speed by inertia',
          },
          {
            ru: 'На них действует сила, толкающая вперёд',
            kk: 'Оларды алға итеретін күш әсер етеді',
            en: 'A forward force pushes them',
          },
          {
            ru: 'Сила тяжести резко возрастает',
            kk: 'Ауырлық күші кенеттен артады',
            en: 'Gravity suddenly increases',
          },
          {
            ru: 'Это действие третьего закона Ньютона',
            kk: 'Бұл Ньютонның үшінші заңының әсері',
            en: "It is Newton's third law at work",
          },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: до торможения пассажир и автобус двигались с одинаковой скоростью. Шаг 2: автобус резко замедляется, но к пассажиру почти не приложена сила. Шаг 3: по первому закону тело сохраняет скорость, пока сила её не изменит, — пассажир «уезжает» вперёд относительно автобуса. Это проявление инерции.',
          kk: '1-қадам: тежелгенге дейін жолаушы мен автобус бірдей жылдамдықпен қозғалды. 2-қадам: автобус кенеттен баяулайды, бірақ жолаушыға күш дерлік әсер етпейді. 3-қадам: бірінші заң бойынша күш жылдамдықты өзгерткенше дене оны сақтайды — жолаушы автобуске қарағанда «алға кетеді». Бұл — инерцияның көрінісі.',
          en: 'Step 1: before braking, the passenger and the bus moved at the same speed. Step 2: the bus slows sharply, but almost no force acts on the passenger. Step 3: by the first law a body keeps its velocity until a force changes it — so the passenger "moves ahead" relative to the bus. This is inertia.',
        },
        difficulty: 2,
      },
      {
        id: 'nl-third-law',
        topicLabel: { ru: 'Третий закон', kk: 'Үшінші заң', en: 'The third law' },
        question: {
          ru: 'Книга давит на стол с силой, направленной вниз. Что говорит третий закон Ньютона?',
          kk: 'Кітап үстелге төмен бағытталған күшпен әсер етеді. Ньютонның үшінші заңы не дейді?',
          en: "A book presses down on a table. What does Newton's third law say?",
        },
        options: [
          {
            ru: 'Стол давит на книгу вверх с такой же по величине силой',
            kk: 'Үстел кітапты дәл сондай шамадағы күшпен жоғары басады',
            en: 'The table pushes up on the book with an equal force',
          },
          {
            ru: 'Стол не действует на книгу',
            kk: 'Үстел кітапқа әсер етпейді',
            en: 'The table exerts no force on the book',
          },
          {
            ru: 'Книга давит сильнее, чем стол',
            kk: 'Кітап үстелден күштірек басады',
            en: 'The book pushes harder than the table',
          },
          {
            ru: 'Силы компенсируются внутри книги',
            kk: 'Күштер кітаптың ішінде теңгеріледі',
            en: 'The forces cancel inside the book',
          },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: третий закон — действию всегда есть равное и противоположное противодействие. Шаг 2: книга действует на стол вниз, значит стол действует на книгу вверх. Шаг 3: силы равны по величине, но приложены к разным телам (столу и книге), поэтому не уничтожают друг друга.',
          kk: '1-қадам: үшінші заң — әр әсерге тең әрі қарама-қарсы қарсы әсер сәйкес келеді. 2-қадам: кітап үстелге төмен әсер етеді, демек үстел кітапқа жоғары әсер етеді. 3-қадам: күштер шамасы жөнінен тең, бірақ әртүрлі денелерге (үстел мен кітапқа) түседі, сондықтан бірін-бірі жоймайды.',
          en: 'Step 1: the third law — every action has an equal and opposite reaction. Step 2: the book pushes down on the table, so the table pushes up on the book. Step 3: the forces are equal in size but act on different bodies (the table and the book), so they do not cancel out.',
        },
        difficulty: 2,
      },
      {
        id: 'nl-weight',
        topicLabel: { ru: 'Сила тяжести', kk: 'Ауырлық күші', en: 'Gravity' },
        question: {
          ru: 'Чему равна сила тяжести, действующая на пакет массой 500 г? Считайте g = 10 м/с².',
          kk: 'Массасы 500 г пакетке әсер ететін ауырлық күші неге тең? g = 10 м/с² деп алыңыз.',
          en: 'What is the force of gravity on a 500 g bag? Take g = 10 m/s².',
        },
        options: [
          { ru: '5 Н', kk: '5 Н', en: '5 N' },
          { ru: '50 Н', kk: '50 Н', en: '50 N' },
          { ru: '500 Н', kk: '500 Н', en: '500 N' },
          { ru: '0,5 Н', kk: '0,5 Н', en: '0.5 N' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: переведём массу в килограммы: 500 г = 0,5 кг. Шаг 2: сила тяжести F = mg. Шаг 3: F = 0,5 · 10 = 5 Н. Ответ: 5 Н. Частая ошибка — подставить 500 и получить 5000 Н: всегда переводи в единицы СИ!',
          kk: '1-қадам: массаны килограмға айналдырамыз: 500 г = 0,5 кг. 2-қадам: ауырлық күші F = mg. 3-қадам: F = 0,5 · 10 = 5 Н. Жауабы: 5 Н. Жиі кездесетін қате — 500-ді қойып 5000 Н алу: әрқашан SI жүйесіне айналдыр!',
          en: 'Step 1: convert the mass to kilograms: 500 g = 0.5 kg. Step 2: the force of gravity is F = mg. Step 3: F = 0.5 · 10 = 5 N. Answer: 5 N. A common mistake is plugging in 500 and getting 5000 N — always convert to SI units!',
        },
        difficulty: 3,
      },
    ],
  },


  // -------------------------------------------------------------------------
  // english / present-perfect — REAL
  // (exercise sentences stay in English in all languages, as in diagnosticData)
  // -------------------------------------------------------------------------
  {
    slug: 'present-perfect',
    subject: 'english',
    topic: 'present-perfect',
    title: {
      ru: 'Present Perfect: have/has + V3',
      kk: 'Present Perfect: have/has + V3',
      en: 'Present Perfect: have/has + V3',
    },
    summary: {
      ru: 'Учимся говорить о результате и опыте: когда нужен Present Perfect, как его строить и чем он отличается от Past Simple.',
      kk: 'Нәтиже мен тәжірибе туралы айтуды үйренеміз: Present Perfect қашан керек, ол қалай жасалады және Past Simple-дан қандай айырмашылығы бар.',
      en: 'Learn to talk about results and experience: when to use the Present Perfect, how to build it, and how it differs from the Past Simple.',
    },
    difficulty: 'medium',
    minutes: 10,
    xp: 30,
    available: true,
    theory: [
      {
        heading: {
          ru: 'Когда используем Present Perfect',
          kk: 'Present Perfect қашан қолданылады',
          en: 'When to use the Present Perfect',
        },
        body: {
          ru: 'Present Perfect нужен, когда действие произошло в прошлом, но важен его результат сейчас: «я потерял ключи» значит «у меня их нет сейчас». Также его используют для жизненного опыта: «я был в Астане» — когда именно, неважно.',
          kk: 'Present Perfect іс-әрекет өткенде болғанымен, оның нәтижесі қазір маңызды болғанда қолданылады: «I have lost my keys» дегеніміз — кілттерім қазір жоқ. Сондай-ақ ол өмірлік тәжірибе үшін қолданылады: «мен Астанада болғам» — қашан болғаны маңызды емес.',
          en: 'Use the Present Perfect when something happened in the past but the result matters now: "I have lost my keys" means "I do not have them now". It is also used for life experience: "I have been to Astana" — when exactly does not matter.',
        },
        example: {
          ru: 'Пример: I have lost my keys. — Я потерял ключи (до сих пор не могу найти, результат важен сейчас).',
          kk: 'Мысал: I have lost my keys. — Кілттерімді жоғалттым (әлі тапқан жоқпын, нәтиже қазір маңызды).',
          en: 'Example: I have lost my keys. — I lost them and still cannot find them; the result matters now.',
        },
      },
      {
        heading: {
          ru: 'Как построить: have/has + V3',
          kk: 'Қалай жасаймыз: have/has + V3',
          en: 'How to build it: have/has + V3',
        },
        body: {
          ru: 'Формула: подлежащее + have/has + третья форма глагола (V3). Have используем с I, you, we, they; has — с he, she, it. Третья форма правильных глаголов заканчивается на -ed (finished), а неправильные нужно запомнить (go → gone, see → seen).',
          kk: 'Формула: ісшіл + have/has + етістіктің үшінші формасы (V3). Have — I, you, we, they есімдіктерімен; has — he, she, it есімдіктерімен қолданылады. Дұрыс етістіктердің үшінші формасы -ed-мен бітеді (finished), ал дұрыс еместерін жаттау керек (go → gone, see → seen).',
          en: 'The formula: subject + have/has + the third form of the verb (V3). Use have with I, you, we, they; use has with he, she, it. Regular verbs add -ed (finished); irregular ones must be memorised (go → gone, see → seen).',
        },
        example: {
          ru: 'Пример: She has finished her homework. — Она закончила домашнюю работу. She → has, finish → finished.',
          kk: 'Мысал: She has finished her homework. — Ол үй тапсырмасын бітірді. She → has, finish → finished.',
          en: 'Example: She has finished her homework. She → has, finish → finished.',
        },
      },
      {
        heading: {
          ru: 'Слова-маркеры',
          kk: 'Сөз-белгілер',
          en: 'Signal words',
        },
        body: {
          ru: 'Present Perfect часто идёт со словами just (только что), already (уже), yet (ещё, в вопросах и отрицаниях), never (никогда), ever (когда-либо), since (с какого-то момента), for (в течение какого-то периода).',
          kk: 'Present Perfect көбіне just (дәл қазір), already (әлдеқашан), yet (әлі, сұрақ мен болымсыз сөйлемдерде), never (ешқашан), ever (қандай да бір уақытта), since (белгілі бір сәттен бері), for (белгілі бір мерзім бойы) сөздерімен келеді.',
          en: 'The Present Perfect often comes with just, already, yet (in questions and negatives), never, ever, since (from a point in time) and for (over a period).',
        },
        example: {
          ru: 'Пример: I have lived in Almaty since 2015. — Я живу в Алматы с 2015 года. Обрати внимание: since + момент (since 2015), for + период (for ten years).',
          kk: 'Мысал: I have lived in Almaty since 2015. — 2015 жылдан бері Алматыда тұрамын. Назар аудар: since + сәт (since 2015), for + мерзім (for ten years).',
          en: 'Example: I have lived in Almaty since 2015. Note: since + a point in time (since 2015), for + a period (for ten years).',
        },
      },
      {
        heading: {
          ru: 'Present Perfect против Past Simple',
          kk: 'Present Perfect пен Past Simple айырмасы',
          en: 'Present Perfect vs Past Simple',
        },
        body: {
          ru: 'Если есть точное время в прошлом — yesterday, last week, in 2010 — нужен Past Simple, а не Present Perfect. Present Perfect как раз «не любит» точное прошлое время: он про связь прошлого с настоящим.',
          kk: 'Егер өткен шақтың нақты уақыты көрсетілсе — yesterday, last week, in 2010 — Present Perfect емес, Past Simple керек. Present Perfect нақты өткен уақытты «ұнатпайды»: ол өткен мен бүгіннің байланысы туралы.',
          en: 'If a precise past time is given — yesterday, last week, in 2010 — you need the Past Simple, not the Present Perfect. The Present Perfect actually dislikes a precise past time: it is about the link between past and present.',
        },
        example: {
          ru: 'Пример: I saw this film yesterday. (точное время → Past Simple). Но: I have seen this film. (без времени, важен опыт → Present Perfect).',
          kk: 'Мысал: I saw this film yesterday. (нақты уақыт → Past Simple). Бірақ: I have seen this film. (уақытсыз, тәжірибе маңызды → Present Perfect).',
          en: 'Example: I saw this film yesterday. (a precise time → Past Simple). But: I have seen this film. (no time given, the experience matters → Present Perfect).',
        },
      },
    ],
    questions: [
      {
        id: 'pp-form',
        topicLabel: {
          ru: 'Формула have/has + V3',
          kk: 'have/has + V3 формуласы',
          en: 'The have/has + V3 formula',
        },
        question: {
          ru: 'She ___ her homework.',
          kk: 'She ___ her homework.',
          en: 'She ___ her homework.',
        },
        options: [
          { ru: 'has finished', kk: 'has finished', en: 'has finished' },
          { ru: 'have finished', kk: 'have finished', en: 'have finished' },
          { ru: 'has finish', kk: 'has finish', en: 'has finish' },
          { ru: 'finished has', kk: 'finished has', en: 'finished has' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: подлежащее She — третье лицо единственного числа, поэтому нужен has. Шаг 2: после has ставим третью форму глагола: finish → finished. Шаг 3: собираем: She has finished her homework. Вариант «has finish» невозможен: после have/has всегда идёт V3.',
          kk: '1-қадам: ісшіл She — үшінші жақ жекеше, сондықтан has керек. 2-қадам: has-тен кейін етістіктің үшінші формасы келеді: finish → finished. 3-қадам: жинаймыз: She has finished her homework. «Has finish» нұсқасы мүмкін емес: have/has-тен кейін әрқашан V3 тұрады.',
          en: 'Step 1: the subject is She — third person singular, so we need has. Step 2: after has comes the third form of the verb: finish → finished. Step 3: put it together: She has finished her homework. "Has finish" is impossible: have/has is always followed by V3.',
        },
        difficulty: 1,
      },
      {
        id: 'pp-since-for',
        topicLabel: { ru: 'Since и for', kk: 'Since және for', en: 'Since and for' },
        question: {
          ru: 'I have lived here ___ 2015.',
          kk: 'I have lived here ___ 2015.',
          en: 'I have lived here ___ 2015.',
        },
        options: [
          { ru: 'since', kk: 'since', en: 'since' },
          { ru: 'for', kk: 'for', en: 'for' },
          { ru: 'from', kk: 'from', en: 'from' },
          { ru: 'at', kk: 'at', en: 'at' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: since употребляется с моментом времени (since 2015, since Monday), а for — с периодом (for ten years). Шаг 2: 2015 — это момент, а не период. Шаг 3: значит, правильно since: I have lived here since 2015. Вариант from с Present Perfect не употребляется.',
          kk: '1-қадам: since уақыт сәтімен қолданылады (since 2015, since Monday), ал for — мерзіммен (for ten years). 2-қадам: 2015 — мерзім емес, сәт. 3-қадам: демек, дұрысы since: I have lived here since 2015. From нұсқасы Present Perfect-пен қолданылмайды.',
          en: 'Step 1: since goes with a point in time (since 2015, since Monday); for goes with a period (for ten years). Step 2: 2015 is a point, not a period. Step 3: so the correct word is since: I have lived here since 2015. "From" is not used with the Present Perfect.',
        },
        difficulty: 2,
      },
      {
        id: 'pp-vs-past',
        topicLabel: {
          ru: 'Present Perfect или Past Simple',
          kk: 'Present Perfect немесе Past Simple',
          en: 'Present Perfect or Past Simple',
        },
        question: {
          ru: 'I ___ this film yesterday.',
          kk: 'I ___ this film yesterday.',
          en: 'I ___ this film yesterday.',
        },
        options: [
          { ru: 'watched', kk: 'watched', en: 'watched' },
          { ru: 'have watched', kk: 'have watched', en: 'have watched' },
          { ru: 'has watched', kk: 'has watched', en: 'has watched' },
          { ru: 'watch', kk: 'watch', en: 'watch' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: ищем маркер времени — yesterday, точное прошлое время. Шаг 2: с точным прошлым временем Present Perfect не употребляется: нужен Past Simple. Шаг 3: вторая форма глагола watch — watched. Правильно: I watched this film yesterday.',
          kk: '1-қадам: уақыт белгісін іздейміз — yesterday, нақты өткен уақыт. 2-қадам: нақты өткен уақытпен Present Perfect қолданылмайды: Past Simple керек. 3-қадам: watch етістігінің екінші формасы — watched. Дұрысы: I watched this film yesterday.',
          en: 'Step 1: look for a time marker — yesterday, a precise past time. Step 2: the Present Perfect is not used with a precise past time; you need the Past Simple. Step 3: the second form of watch is watched. Correct: I watched this film yesterday.',
        },
        difficulty: 2,
      },
      {
        id: 'pp-irregular',
        topicLabel: {
          ru: 'Неправильные глаголы',
          kk: 'Дұрыс емес етістіктер',
          en: 'Irregular verbs',
        },
        question: {
          ru: 'He has ___ to Astana twice.',
          kk: 'He has ___ to Astana twice.',
          en: 'He has ___ to Astana twice.',
        },
        options: [
          { ru: 'been', kk: 'been', en: 'been' },
          { ru: 'was', kk: 'was', en: 'was' },
          { ru: 'beed', kk: 'beed', en: 'beed' },
          { ru: 'goed', kk: 'goed', en: 'goed' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: после has нужна третья форма глагола. Шаг 2: «побывать где-то» — это have been to; третья форма глагола be — been (be → was/were → been). Шаг 3: was — вторая форма, после has она не ставится; beed и goed вообще не существуют. Правильно: He has been to Astana twice.',
          kk: '1-қадам: has-тен кейін етістіктің үшінші формасы керек. 2-қадам: «бір жерде болған» — have been to; be етістігінің үшінші формасы — been (be → was/were → been). 3-қадам: was — екінші форма, has-тен кейін қойылмайды; beed және goed деген сөздер мүлдем жоқ. Дұрысы: He has been to Astana twice.',
          en: 'Step 1: after has we need the third form of the verb. Step 2: "have been to" means "have visited"; the third form of be is been (be → was/were → been). Step 3: was is the second form and cannot follow has; beed and goed do not exist. Correct: He has been to Astana twice.',
        },
        difficulty: 3,
      },
    ],
  },


  // -------------------------------------------------------------------------
  // informatics / algorithms-basics — REAL
  // -------------------------------------------------------------------------
  {
    slug: 'algorithms-basics',
    subject: 'informatics',
    topic: 'algorithms-basics',
    title: {
      ru: 'Что такое алгоритм',
      kk: 'Алгоритм дегеніміз не',
      en: 'What an algorithm is',
    },
    summary: {
      ru: 'От рецепта чая до блок-схем: линейные алгоритмы, ветвления и циклы простыми словами.',
      kk: 'Шай рецептінен блок-схемаларға дейін: сызықтық алгоритмдер, тармақталу және циклдар жай тілмен.',
      en: 'From a tea recipe to flowcharts: linear algorithms, branches and loops in plain words.',
    },
    difficulty: 'easy',
    minutes: 10,
    xp: 30,
    available: true,
    theory: [
      {
        heading: {
          ru: 'Определение',
          kk: 'Анықтама',
          en: 'The definition',
        },
        body: {
          ru: 'Алгоритм — это конечная последовательность точных шагов, которая приводит к результату. Алгоритмы окружают нас: рецепт блюда, инструкция по сборке, маршрут в навигаторе — всё это алгоритмы.',
          kk: 'Алгоритм — нәтижеге жеткізетін нақты қадамдардың шекті тізбегі. Алгоритмдер бізді қоршап тұр: тағам рецепті, құрастыру нұсқаулығы, навигатордағы маршрут — бәрі алгоритм.',
          en: 'An algorithm is a finite sequence of precise steps that leads to a result. Algorithms are everywhere: a recipe, assembly instructions, a route in a navigator — all of these are algorithms.',
        },
        example: {
          ru: 'Пример: алгоритм «завари чай»: 1) вскипяти воду, 2) положи заварку в чайник, 3) залей кипятком, 4) подожди 5 минут. Чёткие шаги, понятный результат.',
          kk: 'Мысал: «шай демдеу» алгоритмі: 1) суды қайнат, 2) шәйнекке шай сал, 3) қайнаған су құй, 4) 5 минут күт. Нақты қадамдар, түсінікті нәтиже.',
          en: 'Example: the "brew tea" algorithm: 1) boil water, 2) put tea leaves in the teapot, 3) pour in the boiling water, 4) wait 5 minutes. Clear steps, a clear result.',
        },
      },
      {
        heading: {
          ru: 'Свойства алгоритма',
          kk: 'Алгоритмнің қасиеттері',
          en: 'Properties of an algorithm',
        },
        body: {
          ru: 'Хороший алгоритм обладает тремя свойствами. Конечность: он завершается после конечного числа шагов. Однозначность: каждый шаг понятен и не допускает двух толкований. Результативность: после выполнения получается результат.',
          kk: 'Жақсы алгоритмнің үш қасиеті бар. Шектілік: ол шекті қадамнан кейін аяқталады. Айқындылық: әр қадам түсінікті және екі мағынада түсінілмейді. Нәтижелілік: орындалғаннан кейін нәтиже алынады.',
          en: 'A good algorithm has three properties. Finiteness: it ends after a limited number of steps. Definiteness: every step is clear and unambiguous. Effectiveness: executing it produces a result.',
        },
        example: {
          ru: 'Пример плохого шага: «добавь соли по вкусу» — это неоднозначно. Хороший шаг: «добавь 1 чайную ложку соли» — точно и однозначно.',
          kk: 'Мысал, нашар қадам: «дәміне қарап тұз сал» — бұл айқын емес. Жақсы қадам: «1 шай қасық тұз сал» — нақты және айқын.',
          en: 'Example of a bad step: "add salt to taste" — that is ambiguous. A good step: "add 1 teaspoon of salt" — precise and unambiguous.',
        },
      },
      {
        heading: {
          ru: 'Блок-схемы',
          kk: 'Блок-схемалар',
          en: 'Flowcharts',
        },
        body: {
          ru: 'Алгоритм удобно рисовать блок-схемой. Овал — начало или конец. Параллелограмм — ввод или вывод данных. Прямоугольник — действие. Ромб — условие, из которого выходят ветки «да» и «нет».',
          kk: 'Алгоритмді блок-схемамен сызған ыңғайлы. Сопақша — басын немесе соңын білдіреді. Параллелограмм — деректерді енгізу немесе шығару. Тік төртбұрыш — әрекет. Ромб — шарт, одан «иә» және «жоқ» тармақтары шығады.',
          en: 'It is convenient to draw an algorithm as a flowchart. An oval marks the start or end. A parallelogram is input or output of data. A rectangle is an action. A diamond is a condition, with "yes" and "no" branches leaving it.',
        },
        example: {
          ru: 'Пример: алгоритм «большее из двух чисел»: ввод a и b (параллелограмм) → проверка a > b (ромб) → вывод a или вывод b (параллелограммы) → конец (овал).',
          kk: 'Мысал: «еки санның үлкені» алгоритмі: a мен b-ны енгізу (параллелограмм) → a > b тексеруі (ромб) → a-ны немесе b-ны шығару (параллелограммдер) → соңы (сопақша).',
          en: 'Example: the "greater of two numbers" algorithm: input a and b (parallelogram) → check a > b (diamond) → output a or output b (parallelograms) → end (oval).',
        },
      },
      {
        heading: {
          ru: 'Три типа алгоритмов',
          kk: 'Алгоритмнің үш түрі',
          en: 'Three types of algorithms',
        },
        body: {
          ru: 'Линейный алгоритм — шаги идут один за другим без условий. Ветвление — есть условие «если…, то…», и путь зависит от ответа. Цикл — шаги повторяются, пока выполняется условие.',
          kk: 'Сызықтық алгоритм — қадамдар шартсыз бірінен кейін бірі орындалады. Тармақталу — «егер…, онда…» шарты бар, жол жауапқа байланысты болады. Цикл — шарт орындалып тұрғанша қадамдар қайталанады.',
          en: 'A linear algorithm runs its steps one after another with no conditions. A branch has an "if…, then…" condition, and the path depends on the answer. A loop repeats steps while a condition holds.',
        },
        example: {
          ru: 'Пример: «умойся, позавтракай, иди в школу» — линейный. «Если идёт дождь, возьми зонт» — ветвление. «Решай задачи, пока не решишь все десять» — цикл.',
          kk: 'Мысал: «жуын, таңғы ас іш, мектепке бар» — сызықтық. «Егер жаңбыр жауса, қолшатыр ал» — тармақталу. «Он есептің бәрін шығарғанша есеп шығар» — цикл.',
          en: 'Example: "wash up, eat breakfast, go to school" is linear. "If it is raining, take an umbrella" is a branch. "Keep solving problems until all ten are done" is a loop.',
        },
      },
    ],
    questions: [
      {
        id: 'ab-definition',
        topicLabel: {
          ru: 'Определение алгоритма',
          kk: 'Алгоритмнің анықтамасы',
          en: 'Definition of an algorithm',
        },
        question: {
          ru: 'Что такое алгоритм?',
          kk: 'Алгоритм дегеніміз не?',
          en: 'What is an algorithm?',
        },
        options: [
          {
            ru: 'Конечная последовательность точных шагов, приводящая к результату',
            kk: 'Нәтижеге жеткізетін нақты қадамдардың шекті тізбегі',
            en: 'A finite sequence of precise steps that leads to a result',
          },
          {
            ru: 'Любая программа на компьютере',
            kk: 'Компьютердегі кез келген бағдарлама',
            en: 'Any program on a computer',
          },
          {
            ru: 'Устройство для вычислений',
            kk: 'Есептеуге арналған құрылғы',
            en: 'A computing device',
          },
          {
            ru: 'Сложная математическая формула',
            kk: 'Күрделі математикалық формула',
            en: 'A complicated mathematical formula',
          },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: вспомним определение — алгоритм это последовательность шагов. Шаг 2: уточним ключевые слова: шагов конечное число, каждый шаг точный, и в итоге получается результат. Шаг 3: программа — лишь запись алгоритма на языке компьютера, а сам алгоритм существует и без компьютера (рецепт, инструкция).',
          kk: '1-қадам: анықтаманы еске түсірейік — алгоритм қадамдар тізбегі. 2-қадам: кілт сөздерді нақтылайық: қадамдар саны шекті, әр қадам нақты, соңында нәтиже алынады. 3-қадам: бағдарлама — алгоритмнің компьютер тілінде жазылуы ғана, ал алгоритм компьютерсіз де бар (рецепт, нұсқаулық).',
          en: 'Step 1: recall the definition — an algorithm is a sequence of steps. Step 2: highlight the key words: the number of steps is finite, each step is precise, and a result is produced. Step 3: a program is only an algorithm written in a computer language; the algorithm itself exists without a computer (a recipe, an instruction).',
        },
        difficulty: 1,
      },
      {
        id: 'ab-flowchart',
        topicLabel: { ru: 'Блок-схемы', kk: 'Блок-схемалар', en: 'Flowcharts' },
        question: {
          ru: 'Какой фигурой на блок-схеме обозначают условие?',
          kk: 'Блок-схемада шарт қай фигурамен белгіленеді?',
          en: 'Which shape marks a condition on a flowchart?',
        },
        options: [
          { ru: 'Ромб', kk: 'Ромб', en: 'Diamond' },
          { ru: 'Овал', kk: 'Сопақша', en: 'Oval' },
          { ru: 'Прямоугольник', kk: 'Тік төртбұрыш', en: 'Rectangle' },
          { ru: 'Параллелограмм', kk: 'Параллелограмм', en: 'Parallelogram' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: овал — это начало и конец. Шаг 2: прямоугольник — действие, параллелограмм — ввод и вывод. Шаг 3: условие обозначают ромбом — из него выходят две ветки: «да» и «нет».',
          kk: '1-қадам: сопақша — басы мен соңы. 2-қадам: тік төртбұрыш — әрекет, параллелограмм — енгізу мен шығару. 3-қадам: шарт ромбмен белгіленеді — одан «иә» және «жоқ» екі тармақ шығады.',
          en: 'Step 1: the oval is the start and end. Step 2: the rectangle is an action, the parallelogram is input and output. Step 3: a condition is drawn as a diamond — two branches leave it: "yes" and "no".',
        },
        difficulty: 1,
      },
      {
        id: 'ab-branch',
        topicLabel: { ru: 'Ветвление', kk: 'Тармақталу', en: 'Branching' },
        question: {
          ru: '«Если идёт дождь, возьми зонт, иначе надень кепку» — это алгоритм какого типа?',
          kk: '«Егер жаңбыр жауса, қолшатыр ал, әйтпесе қалпақ кий» — бұл алгоритмнің қай түрі?',
          en: '"If it is raining, take an umbrella, otherwise put on a cap" — what type of algorithm is this?',
        },
        options: [
          { ru: 'Ветвление', kk: 'Тармақталу', en: 'Branch' },
          { ru: 'Линейный', kk: 'Сызықтық', en: 'Linear' },
          { ru: 'Цикл', kk: 'Цикл', en: 'Loop' },
          { ru: 'Это не алгоритм', kk: 'Бұл алгоритм емес', en: 'Not an algorithm' },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: проверяем, есть ли условие: «если идёт дождь» — есть. Шаг 2: от ответа зависит, какой шаг выполнять: зонт или кепку. Шаг 3: повторений нет, значит это не цикл; путь не один, значит не линейный. Это ветвление.',
          kk: '1-қадам: шарт бар ма, тексереміз: «егер жаңбыр жауса» — бар. 2-қадам: жауапқа байланысты қай қадам орындалатыны шешіледі: қолшатыр ма, қалпақ па. 3-қадам: қайталау жоқ, демек цикл емес; жол біреу емес, демек сызықтық емес. Бұл — тармақталу.',
          en: 'Step 1: check for a condition: "if it is raining" — there is one. Step 2: which step runs depends on the answer: umbrella or cap. Step 3: nothing repeats, so it is not a loop; there is more than one path, so it is not linear. It is a branch.',
        },
        difficulty: 2,
      },
      {
        id: 'ab-loop',
        topicLabel: { ru: 'Цикл', kk: 'Цикл', en: 'Loop' },
        question: {
          ru: 'Какое действие является циклом?',
          kk: 'Қай әрекет цикл болып табылады?',
          en: 'Which action is a loop?',
        },
        options: [
          { ru: 'Подпрыгни 10 раз', kk: '10 рет секір', en: 'Jump 10 times' },
          {
            ru: 'Помой руки и сядь обедать',
            kk: 'Қолыңды жуып, түскі асқа отыр',
            en: 'Wash your hands and sit down for lunch',
          },
          {
            ru: 'Если холодно, надень куртку',
            kk: 'Егер суық болса, күртеше кий',
            en: 'If it is cold, put on a jacket',
          },
          {
            ru: 'Прочитай главу книги',
            kk: 'Кітаптың бір тарауын оқы',
            en: 'Read a chapter of a book',
          },
        ],
        correctIndex: 0,
        explanation: {
          ru: 'Шаг 1: цикл — это повторение шагов, пока выполняется условие. Шаг 2: «подпрыгни 10 раз» — прыжок повторяется, пока счётчик не дойдёт до десяти. Шаг 3: остальные варианты — линейные шаги или ветвление («если холодно»), повторения в них нет.',
          kk: '1-қадам: цикл — шарт орындалып тұрғанша қадамдарды қайталау. 2-қадам: «10 рет секір» — секіру саны онға жеткенше қайталанады. 3-қадам: қалған нұсқалар — сызықтық қадамдар немесе тармақталу («егер суық болса»), оларда қайталау жоқ.',
          en: 'Step 1: a loop repeats steps while a condition holds. Step 2: "jump 10 times" — the jump repeats until the count reaches ten. Step 3: the other options are linear steps or a branch ("if it is cold") — there is no repetition in them.',
        },
        difficulty: 3,
      },
    ],
  },


  // -------------------------------------------------------------------------
  // Locked placeholders — visible in the catalogue, muted, never navigable.
  // -------------------------------------------------------------------------
  {
    slug: 'geometric-progression',
    subject: 'math',
    topic: 'geometric-progression',
    title: {
      ru: 'Геометрическая прогрессия',
      kk: 'Геометриялық прогрессия',
      en: 'Geometric progression',
    },
    summary: {
      ru: 'Прогрессии, знаменатель q и формула n-го члена.',
      kk: 'Прогрессиялар, q еселігі және n-ші мүше формуласы.',
      en: 'Progressions, the common ratio q and the nth term formula.',
    },
    difficulty: 'hard',
    minutes: 15,
    xp: 50,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'trigonometry-basics',
    subject: 'math',
    topic: 'trigonometry-basics',
    title: {
      ru: 'Основы тригонометрии',
      kk: 'Тригонометрия негіздері',
      en: 'Trigonometry basics',
    },
    summary: {
      ru: 'Синус, косинус и тангенс в прямоугольном треугольнике.',
      kk: 'Тікбұрышты үшбұрыштағы синус, косинус және тангенс.',
      en: 'Sine, cosine and tangent in a right triangle.',
    },
    difficulty: 'hard',
    minutes: 15,
    xp: 50,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'ohm-law',
    subject: 'physics',
    topic: 'ohm-law',
    title: { ru: 'Закон Ома', kk: 'Ом заңы', en: "Ohm's law" },
    summary: {
      ru: 'Ток, напряжение и сопротивление: I = U / R.',
      kk: 'Ток күші, кернеу және кедергі: I = U / R.',
      en: 'Current, voltage and resistance: I = U / R.',
    },
    difficulty: 'medium',
    minutes: 12,
    xp: 40,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'kinematics',
    subject: 'physics',
    topic: 'kinematics',
    title: {
      ru: 'Кинематика: скорость и ускорение',
      kk: 'Кинематика: жылдамдық және үдеу',
      en: 'Kinematics: speed and acceleration',
    },
    summary: {
      ru: 'Путь, скорость и ускорение при равноускоренном движении.',
      kk: 'Бірқалыпты үдемелі қозғалыстағы жол, жылдамдық және үдеу.',
      en: 'Distance, speed and acceleration in uniformly accelerated motion.',
    },
    difficulty: 'medium',
    minutes: 12,
    xp: 40,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'past-simple',
    subject: 'english',
    topic: 'past-simple',
    title: { ru: 'Past Simple', kk: 'Past Simple', en: 'Past Simple' },
    summary: {
      ru: 'Говорим о завершённых событиях прошлого.',
      kk: 'Өткен шақтағы аяқталған оқиғалар туралы айтамыз.',
      en: 'Talking about finished past events.',
    },
    difficulty: 'easy',
    minutes: 10,
    xp: 30,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'passive-voice',
    subject: 'english',
    topic: 'passive-voice',
    title: { ru: 'Passive Voice', kk: 'Passive Voice', en: 'Passive Voice' },
    summary: {
      ru: 'Когда действие важнее исполнителя: be + V3.',
      kk: 'Әрекет орындаушыдан маңызды болғанда: be + V3.',
      en: 'When the action matters more than the doer: be + V3.',
    },
    difficulty: 'hard',
    minutes: 15,
    xp: 50,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'python-basics',
    subject: 'informatics',
    topic: 'python-basics',
    title: {
      ru: 'Основы Python',
      kk: 'Python негіздері',
      en: 'Python basics',
    },
    summary: {
      ru: 'Переменные, вывод и первые программы.',
      kk: 'Айнымалылар, шығару командасы және алғашқы бағдарламалар.',
      en: 'Variables, output and your first programs.',
    },
    difficulty: 'medium',
    minutes: 15,
    xp: 40,
    available: false,
    theory: [],
    questions: [],
  },
  {
    slug: 'binary-numbers',
    subject: 'informatics',
    topic: 'binary-numbers',
    title: {
      ru: 'Двоичная система счисления',
      kk: 'Екілік санау жүйесі',
      en: 'Binary numbers',
    },
    summary: {
      ru: 'Как компьютер считает нулями и единицами.',
      kk: 'Компьютер нөлдер мен бірлермен қалай санайды.',
      en: 'How computers count in zeros and ones.',
    },
    difficulty: 'medium',
    minutes: 12,
    xp: 40,
    available: false,
    theory: [],
    questions: [],
  },
];

/** Look up a lesson (real or placeholder) by slug. */
// Находит урок по его slug (используется на странице конкретного урока).
export function lessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

/** Localized display name for a subject slug. */
// Название предмета на текущем языке интерфейса.
export function subjectLabel(subject: LessonSubject): Localized {
  return SUBJECT_LABEL[subject];
}
