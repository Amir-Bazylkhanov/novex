import type { LessonContent } from '../lessonData.ts';

export const CORE_SCIENCES_FULL: Record<string, LessonContent> = {
  // ═══════════════════════════════════════════════
  // GRADE 8 — Foundations of Math & Science
  // ═══════════════════════════════════════════════
  "Core Sciences_8": {
    planetName: "Core Sciences",
    introduction: {
      en: "Build a strong foundation in mathematics and science. You will master arithmetic rules, explore geometry, begin algebra, and discover the basics of physics, chemistry, and biology.",
      ru: "Постройте прочный фундамент в математике и науке. Вы освоите правила арифметики, изучите геометрию, начнёте алгебру и откроете основы физики, химии и биологии."
    },
    sections: [
      // ── Numbers & Operations → L1 Integers and rationals (3 sections) ──
      // Sections are prefixed with "Integers and rationals:" so LessonView filters
      // them to just this lesson (see LessonView.tsx:680).
      {
        title: "Integers and rationals: Number sets",
        titleRu: "Целые и рациональные: множества чисел",
        titleKk: "Бүтін және рационал сандар: сан жиындары",
        content: "Integers are whole numbers and their negatives: …, −3, −2, −1, 0, 1, 2, 3, … A rational number is any number that can be written as a fraction a/b where a and b are integers and b ≠ 0. Every integer is also rational (e.g. 5 = 5/1). Decimals that terminate (0.25) or repeat (0.333…) are rational; non-repeating decimals like π or √2 are irrational.",
        contentRu: "Целые числа — это натуральные числа и их отрицательные значения: …, −3, −2, −1, 0, 1, 2, 3, … Рациональное число — это любое число, которое можно записать в виде дроби a/b, где a и b — целые числа, а b ≠ 0. Каждое целое число также является рациональным (например, 5 = 5/1). Конечные (0.25) и периодические (0.333…) десятичные дроби — рациональные; непериодические бесконечные дроби, например π или √2, — иррациональные.",
        contentKk: "Бүтін сандар — натурал сандар мен олардың теріс мәндері: …, −3, −2, −1, 0, 1, 2, 3, … Рационал сан — a және b бүтін сан, b ≠ 0 болғанда a/b бөлшегі түрінде жазылатын кез келген сан. Әрбір бүтін сан да рационал (мысалы, 5 = 5/1). Шектеулі (0.25) немесе периодты (0.333…) ондық бөлшектер — рационал; π немесе √2 сияқты периодсыз шексіз бөлшектер — иррационал.",
        keyTerms: [
          {
            term: "Integer",
            termRu: "Целое число",
            termKk: "Бүтін сан",
            definition: "A whole number, positive, negative, or zero, with no fractional part.",
            definitionRu: "Натуральное, отрицательное число или ноль, без дробной части.",
            definitionKk: "Бөлшек бөлігі жоқ натурал, теріс сан немесе нөл."
          },
          {
            term: "Rational number",
            termRu: "Рациональное число",
            termKk: "Рационал сан",
            definition: "A number expressible as a fraction a/b of two integers, with b ≠ 0.",
            definitionRu: "Число, представимое в виде дроби a/b двух целых чисел, где b ≠ 0.",
            definitionKk: "Екі бүтін санның a/b бөлшегі түрінде жазылатын сан (b ≠ 0)."
          },
          {
            term: "Irrational number",
            termRu: "Иррациональное число",
            termKk: "Иррационал сан",
            definition: "A real number that cannot be written as a fraction of integers — e.g. π, √2, e.",
            definitionRu: "Действительное число, которое нельзя записать как дробь целых чисел — например, π, √2, e.",
            definitionKk: "Бүтін сандардың бөлшегі түрінде жазылмайтын нақты сан — мысалы, π, √2, e."
          }
        ],
        solvedExamples: [
          {
            question: "Is −7 a rational number? Justify.",
            questionRu: "Является ли −7 рациональным числом? Обоснуйте.",
            questionKk: "−7 рационал сан ба? Негіздеңіз.",
            steps: [
              { en: "Recall: a number is rational if it equals a/b for integers a, b with b ≠ 0.", ru: "Вспомним: число рационально, если его можно записать как a/b, где a и b — целые, b ≠ 0.", kk: "Естелік: сан рационал, егер оны a, b бүтін, b ≠ 0 болғанда a/b түрінде жазуға болса." },
              { en: "Write −7 as −7/1. Both numerator and denominator are integers, denominator ≠ 0.", ru: "Запишем −7 как −7/1. Числитель и знаменатель — целые, знаменатель ≠ 0.", kk: "−7 санын −7/1 түрінде жазамыз. Алым мен бөлім бүтін, бөлім ≠ 0." }
            ],
            answer: "Yes — every integer is rational (here, −7 = −7/1).",
            answerRu: "Да — каждое целое число рационально (здесь −7 = −7/1).",
            answerKk: "Иә — әрбір бүтін сан рационал (мұнда −7 = −7/1)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is 0.5 rational?",
            questionRu: "Является ли 0.5 рациональным?",
            questionKk: "0.5 рационал сан ба?",
            answer: "Yes (0.5 = 1/2)",
            answerRu: "Да (0.5 = 1/2)",
            answerKk: "Иә (0.5 = 1/2)",
            hint: "Try writing it as a fraction.",
            hintRu: "Попробуйте записать в виде дроби.",
            hintKk: "Бөлшек түрінде жазып көріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Write 0.75 as a fraction in lowest terms.",
            questionRu: "Запишите 0.75 как несократимую дробь.",
            questionKk: "0.75 санын қысқартылмайтын бөлшек түрінде жазыңыз.",
            answer: "3/4",
            answerRu: "3/4",
            answerKk: "3/4",
            hint: "0.75 = 75/100, then simplify by dividing top and bottom by 25.",
            hintRu: "0.75 = 75/100, затем сократите, разделив числитель и знаменатель на 25.",
            hintKk: "0.75 = 75/100, содан кейін алым мен бөлімді 25-ке бөліп қысқартыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Which of these is irrational: √16, √2, 22/7, 0.333…?",
            questionRu: "Какое из чисел иррациональное: √16, √2, 22/7, 0.333…?",
            questionKk: "Мыналардың қайсысы иррационал: √16, √2, 22/7, 0.333…?",
            answer: "√2",
            answerRu: "√2",
            answerKk: "√2",
            hint: "√16 = 4 (rational), 22/7 is a fraction, 0.333… repeats — only √2 has no exact fraction form.",
            hintRu: "√16 = 4 (рациональное), 22/7 — дробь, 0.333… периодическое — только √2 нельзя записать дробью.",
            hintKk: "√16 = 4 (рационал), 22/7 — бөлшек, 0.333… периодты — тек √2 дәл бөлшек түрінде жазылмайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Integers and rationals: Operations with integers",
        titleRu: "Целые и рациональные: операции с целыми числами",
        titleKk: "Бүтін және рационал сандар: бүтін сандармен амалдар",
        content: "When adding or subtracting integers, use the number line: + moves right, − moves left. When multiplying or dividing, two numbers with the SAME sign give a positive result, two numbers with DIFFERENT signs give a negative result. Subtracting is the same as adding the opposite: a − b = a + (−b).",
        contentRu: "При сложении и вычитании целых чисел используйте числовую прямую: + смещает вправо, − влево. При умножении и делении два числа с ОДИНАКОВЫМИ знаками дают положительный результат, с РАЗНЫМИ — отрицательный. Вычитание — это сложение с противоположным: a − b = a + (−b).",
        contentKk: "Бүтін сандарды қосу-азайтуда сандық түзуді қолданыңыз: + оңға, − солға жылжытады. Көбейтуде немесе бөлуде БІРДЕЙ таңбалы екі сан оң нәтиже береді, ӘРТҮРЛІ таңбалы екі сан теріс нәтиже береді. Азайту — қарама-қарсыны қосумен бірдей: a − b = a + (−b).",
        keyFormulas: [
          {
            formula: "(+) × (+) = (+) and (−) × (−) = (+)",
            tex: "(+) \\times (+) = (+),\\quad (-) \\times (-) = (+)",
            description: "Same signs → positive product/quotient",
            descriptionRu: "Одинаковые знаки → положительный результат",
            descriptionKk: "Бірдей таңбалар → нәтиже оң"
          },
          {
            formula: "(+) × (−) = (−) and (−) × (+) = (−)",
            tex: "(+) \\times (-) = (-),\\quad (-) \\times (+) = (-)",
            description: "Different signs → negative product/quotient",
            descriptionRu: "Разные знаки → отрицательный результат",
            descriptionKk: "Әртүрлі таңбалар → нәтиже теріс"
          },
          {
            formula: "a − b = a + (−b)",
            tex: "a - b = a + (-b)",
            description: "Subtraction rewritten as addition of the opposite",
            descriptionRu: "Вычитание как сложение с противоположным",
            descriptionKk: "Азайтуды қарама-қарсыны қосу ретінде жазу"
          }
        ],
        solvedExamples: [
          {
            question: "Compute: (−4) × (−6)",
            questionRu: "Вычислите: (−4) × (−6)",
            questionKk: "Есептеңіз: (−4) × (−6)",
            steps: [
              { en: "Both numbers are negative — same signs → product is positive.", ru: "Оба числа отрицательны — одинаковые знаки → произведение положительно.", kk: "Екі сан да теріс — таңбалары бірдей → көбейтінді оң." },
              { en: "Multiply magnitudes: 4 × 6 = 24.", ru: "Умножаем модули: 4 × 6 = 24.", kk: "Модульдерді көбейтеміз: 4 × 6 = 24." }
            ],
            answer: "24",
            answerRu: "24",
            answerKk: "24"
          },
          {
            question: "Compute: −8 + 3",
            questionRu: "Вычислите: −8 + 3",
            questionKk: "Есептеңіз: −8 + 3",
            steps: [
              { en: "Start at −8 on the number line, move 3 units to the right.", ru: "Начинаем с −8 на числовой прямой, смещаемся на 3 единицы вправо.", kk: "Сандық түзудегі −8-ден бастап оңға 3 бірлікке жылжимыз." },
              { en: "Landing position: −5.", ru: "Получаем: −5.", kk: "Нәтиже: −5." }
            ],
            answer: "−5",
            answerRu: "−5",
            answerKk: "−5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Compute: −5 + 2",
            questionRu: "Вычислите: −5 + 2",
            questionKk: "Есептеңіз: −5 + 2",
            answer: "−3",
            answerRu: "−3",
            answerKk: "−3",
            hint: "Move 2 units right from −5.",
            hintRu: "Сместитесь на 2 единицы вправо от −5.",
            hintKk: "−5-тен оңға 2 бірлікке жылжыңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Compute: (−7) × 3",
            questionRu: "Вычислите: (−7) × 3",
            questionKk: "Есептеңіз: (−7) × 3",
            answer: "−21",
            answerRu: "−21",
            answerKk: "−21",
            hint: "Different signs → negative. Multiply 7 × 3.",
            hintRu: "Разные знаки → отрицательно. Умножьте 7 × 3.",
            hintKk: "Әртүрлі таңбалар → теріс. 7 × 3-ті есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Compute: (−12) ÷ (−4) + (−3) × 2",
            questionRu: "Вычислите: (−12) ÷ (−4) + (−3) × 2",
            questionKk: "Есептеңіз: (−12) ÷ (−4) + (−3) × 2",
            answer: "−3",
            answerRu: "−3",
            answerKk: "−3",
            hint: "Do division and multiplication first: 3 + (−6) = −3.",
            hintRu: "Сначала деление и умножение: 3 + (−6) = −3.",
            hintKk: "Алдымен бөлу мен көбейту: 3 + (−6) = −3.",
            xp: 20
          }
        ]
      },
      {
        title: "Integers and rationals: Operations with rational numbers",
        titleRu: "Целые и рациональные: операции с рациональными числами",
        titleKk: "Бүтін және рационал сандар: рационал сандармен амалдар",
        content: "To add or subtract fractions, find a common denominator first. To multiply, multiply numerators and denominators straight across. To divide, flip the second fraction and multiply (multiply by the reciprocal). Always simplify the result by dividing top and bottom by their greatest common divisor.",
        contentRu: "Чтобы сложить или вычесть дроби, сначала приведите их к общему знаменателю. Чтобы умножить — перемножьте числители и знаменатели. Чтобы разделить — переверните вторую дробь и умножьте (умножение на обратное). Всегда сокращайте результат, деля числитель и знаменатель на их наибольший общий делитель.",
        contentKk: "Бөлшектерді қосу немесе азайту үшін алдымен ортақ бөлімге келтіріңіз. Көбейту үшін алымдарды да, бөлімдерді де көбейтіңіз. Бөлу үшін екінші бөлшекті аударып, көбейтіңіз (кері санға көбейту). Нәтижені әрқашан ең үлкен ортақ бөлгішке бөлу арқылы қысқартыңыз.",
        keyFormulas: [
          {
            formula: "a/b + c/d = (ad + bc) / (bd)",
            tex: "\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad + bc}{bd}",
            description: "Add fractions by cross-multiplying to a common denominator",
            descriptionRu: "Сложение дробей через общий знаменатель",
            descriptionKk: "Бөлшектерді ортақ бөлім арқылы қосу"
          },
          {
            formula: "a/b × c/d = (a × c) / (b × d)",
            tex: "\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{ac}{bd}",
            description: "Multiply fractions straight across",
            descriptionRu: "Умножение дробей: числитель на числитель, знаменатель на знаменатель",
            descriptionKk: "Бөлшектерді тікелей көбейту: алымды алымға, бөлімді бөлімге"
          },
          {
            formula: "a/b ÷ c/d = (a × d) / (b × c)",
            tex: "\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a \\times d}{b \\times c}",
            description: "Divide by flipping the second fraction and multiplying",
            descriptionRu: "Деление: переворачиваем вторую дробь и умножаем",
            descriptionKk: "Бөлу: екінші бөлшекті аударып көбейту"
          }
        ],
        solvedExamples: [
          {
            question: "Compute: 1/2 + 1/3",
            questionRu: "Вычислите: 1/2 + 1/3",
            questionKk: "Есептеңіз: 1/2 + 1/3",
            steps: [
              { en: "Common denominator of 2 and 3 is 6.", ru: "Общий знаменатель 2 и 3 равен 6.", kk: "2 мен 3-тің ортақ бөлімі — 6." },
              { en: "Rewrite: 1/2 = 3/6, 1/3 = 2/6.", ru: "Приводим: 1/2 = 3/6, 1/3 = 2/6.", kk: "Қайта жазамыз: 1/2 = 3/6, 1/3 = 2/6." },
              { en: "Add numerators: 3/6 + 2/6 = 5/6.", ru: "Складываем числители: 3/6 + 2/6 = 5/6.", kk: "Алымдарды қосамыз: 3/6 + 2/6 = 5/6." }
            ],
            answer: "5/6",
            answerRu: "5/6",
            answerKk: "5/6"
          },
          {
            question: "Compute: 2/3 ÷ 4/5",
            questionRu: "Вычислите: 2/3 ÷ 4/5",
            questionKk: "Есептеңіз: 2/3 ÷ 4/5",
            steps: [
              { en: "Flip the second fraction: 2/3 × 5/4.", ru: "Переворачиваем вторую: 2/3 × 5/4.", kk: "Екінші бөлшекті аударамыз: 2/3 × 5/4." },
              { en: "Multiply straight across: (2 × 5)/(3 × 4) = 10/12.", ru: "Умножаем: (2 × 5)/(3 × 4) = 10/12.", kk: "Тікелей көбейтеміз: (2 × 5)/(3 × 4) = 10/12." },
              { en: "Simplify by dividing top and bottom by 2: 5/6.", ru: "Сокращаем, деля числитель и знаменатель на 2: 5/6.", kk: "Алым мен бөлімді 2-ге бөліп қысқартамыз: 5/6." }
            ],
            answer: "5/6",
            answerRu: "5/6",
            answerKk: "5/6"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Compute: 1/2 + 1/4",
            questionRu: "Вычислите: 1/2 + 1/4",
            questionKk: "Есептеңіз: 1/2 + 1/4",
            answer: "3/4",
            answerRu: "3/4",
            answerKk: "3/4",
            hint: "Common denominator is 4. Rewrite 1/2 as 2/4.",
            hintRu: "Общий знаменатель 4. Замените 1/2 на 2/4.",
            hintKk: "Ортақ бөлім — 4. 1/2 санын 2/4 түрінде жазыңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Compute: 2/5 × 3/8 (give a simplified fraction)",
            questionRu: "Вычислите: 2/5 × 3/8 (сократите ответ)",
            questionKk: "Есептеңіз: 2/5 × 3/8 (қысқартылған бөлшек түрінде)",
            answer: "3/20",
            answerRu: "3/20",
            answerKk: "3/20",
            hint: "Multiply across: 6/40, then divide top and bottom by 2.",
            hintRu: "Перемножьте: 6/40, затем сократите на 2.",
            hintKk: "Көбейтіңіз: 6/40, содан кейін 2-ге қысқартыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Compute: 3/4 ÷ 1/2 − 1/8 (give a simplified fraction)",
            questionRu: "Вычислите: 3/4 ÷ 1/2 − 1/8 (сократите ответ)",
            questionKk: "Есептеңіз: 3/4 ÷ 1/2 − 1/8 (қысқартылған бөлшек)",
            answer: "11/8",
            answerRu: "11/8",
            answerKk: "11/8",
            hint: "Do division first: 3/4 × 2/1 = 6/4 = 3/2. Then 3/2 − 1/8 with common denominator 8: 12/8 − 1/8.",
            hintRu: "Сначала деление: 3/4 × 2/1 = 6/4 = 3/2. Затем 3/2 − 1/8 при общем знаменателе 8: 12/8 − 1/8.",
            hintKk: "Алдымен бөлу: 3/4 × 2/1 = 6/4 = 3/2. Содан кейін 3/2 − 1/8, ортақ бөлім — 8: 12/8 − 1/8.",
            xp: 20
          }
        ]
      },
      // ── 8-1 Order of Operations ──
      {
        title: "Order of Operations",
        titleRu: "Порядок действий",
        titleKk: "Амалдар реті",
        content: "The order of operations (PEMDAS) ensures everyone gets the same answer from the same expression. First evaluate Parentheses, then Exponents, then Multiplication and Division left to right, and finally Addition and Subtraction left to right. Ignoring this order is the most common source of arithmetic mistakes.",
        contentRu: "Порядок действий (PEMDAS) гарантирует, что все получат одинаковый ответ из одного выражения. Сначала вычисляются скобки, затем степени, затем умножение и деление слева направо, и наконец сложение и вычитание слева направо. Нарушение этого порядка — самая частая причина арифметических ошибок.",
        contentKk: "Амалдар реті (PEMDAS) бір өрнектен барлығының бірдей жауап алуын қамтамасыз етеді. Алдымен жақшалар, содан кейін дәрежелер, содан кейін көбейту мен бөлу солдан оңға, ең соңында қосу мен азайту солдан оңға есептеледі. Бұл ретті бұзу — арифметикалық қателердің ең жиі себебі.",
        keyFormulas: [
          {
            formula: "PEMDAS: Parentheses → Exponents → Multiplication/Division → Addition/Subtraction",
            description: "Order of operations rule",
            descriptionRu: "Правило порядка действий",
            descriptionKk: "Амалдар реті ережесі"
          },
          {
            formula: "a + b × c ≠ (a + b) × c",
            description: "Multiplication is performed before addition unless parentheses override",
            descriptionRu: "Умножение выполняется перед сложением, если скобки не указывают иначе",
            descriptionKk: "Жақшалар болмаса, көбейту қосудан бұрын орындалады"
          }
        ],
        solvedExamples: [
          {
            question: "Evaluate: 3 + 4 × 2 − (6 ÷ 3)",
            questionRu: "Вычислите: 3 + 4 × 2 − (6 ÷ 3)",
            questionKk: "Есептеңіз: 3 + 4 × 2 − (6 ÷ 3)",
            steps: [
              { en: "Parentheses first: 6 ÷ 3 = 2, then multiplication: 4 × 2 = 8", ru: "Сначала скобки: 6 ÷ 3 = 2, затем умножение: 4 × 2 = 8", kk: "Алдымен жақша: 6 ÷ 3 = 2, содан кейін көбейту: 4 × 2 = 8" },
              { en: "Left to right: 3 + 8 − 2 = 9", ru: "Слева направо: 3 + 8 − 2 = 9", kk: "Солдан оңға: 3 + 8 − 2 = 9" }
            ],
            answer: "9",
            answerRu: "9",
            answerKk: "9"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Evaluate: 5 + 3 × 2",
            questionRu: "Вычислите: 5 + 3 × 2",
            questionKk: "Есептеңіз: 5 + 3 × 2",
            answer: "11",
            answerRu: "11",
            answerKk: "11",
            hint: "Multiply before adding",
            hintRu: "Сначала умножьте, потом сложите",
            hintKk: "Алдымен көбейтіңіз, содан кейін қосыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Evaluate: (8 + 2) × 3 − 4²",
            questionRu: "Вычислите: (8 + 2) × 3 − 4²",
            questionKk: "Есептеңіз: (8 + 2) × 3 − 4²",
            answer: "14",
            answerRu: "14",
            answerKk: "14",
            hint: "Parentheses first, then exponent, then multiply, then subtract",
            hintRu: "Сначала скобки, затем степень, затем умножение, затем вычитание",
            hintKk: "Алдымен жақша, содан кейін дәреже, содан кейін көбейту, содан кейін азайту",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Evaluate: 2 × (3 + 5)² ÷ 4 − 10",
            questionRu: "Вычислите: 2 × (3 + 5)² ÷ 4 − 10",
            questionKk: "Есептеңіз: 2 × (3 + 5)² ÷ 4 − 10",
            answer: "22",
            answerRu: "22",
            answerKk: "22",
            hint: "Parentheses: 8, exponent: 64, then multiply/divide left to right, then subtract",
            hintRu: "Скобки: 8, степень: 64, затем умножение/деление слева направо, затем вычитание",
            hintKk: "Жақша: 8, дәреже: 64, содан кейін көбейту/бөлу солдан оңға, содан кейін азайту",
            xp: 20
          }
        ]
      },
      // ── 8-2 Fractions & Decimals ──
      {
        title: "Fractions & Decimals",
        titleRu: "Дроби и десятичные числа",
        titleKk: "Бөлшектер мен ондық сандар",
        content: "Fractions represent parts of a whole: the numerator tells how many parts you have and the denominator tells how many equal parts make the whole. To add or subtract fractions you need a common denominator. Decimals are another way to write fractions whose denominators are powers of 10, and converting between the two forms is a key skill.",
        contentRu: "Дроби представляют части целого: числитель показывает, сколько частей у вас есть, а знаменатель — сколько равных частей составляют целое. Для сложения или вычитания дробей нужен общий знаменатель. Десятичные числа — другой способ записи дробей со знаменателями-степенями 10, и умение переводить между формами — ключевой навык.",
        contentKk: "Бөлшектер бүтіннің бөліктерін көрсетеді: алымы сізде қанша бөлік барын, ал бөлімі бүтінді қанша тең бөлік құрайтынын көрсетеді. Бөлшектерді қосу немесе азайту үшін ортақ бөлім керек. Ондық сандар — бөлімі 10-ның дәрежесі болатын бөлшектерді жазудың тағы бір тәсілі, екі форма арасында ауыстыру маңызды дағды.",
        keyFormulas: [
          {
            formula: "a/b + c/d = (a×d + c×b) / (b×d)",
            description: "Adding fractions with different denominators",
            descriptionRu: "Сложение дробей с разными знаменателями",
            descriptionKk: "Бөлімдері әртүрлі бөлшектерді қосу"
          },
          {
            formula: "a/b = a ÷ b (decimal form)",
            description: "Convert a fraction to a decimal by dividing",
            descriptionRu: "Перевод дроби в десятичную — делением",
            descriptionKk: "Бөлшекті ондыққа айналдыру — бөлу арқылы"
          }
        ],
        solvedExamples: [
          {
            question: "Add: 2/3 + 1/4",
            questionRu: "Сложите: 2/3 + 1/4",
            questionKk: "Қосыңыз: 2/3 + 1/4",
            steps: [
              { en: "Find common denominator: LCD of 3 and 4 is 12. Rewrite: 8/12 + 3/12", ru: "Найдите общий знаменатель: НОК 3 и 4 = 12. Перепишем: 8/12 + 3/12", kk: "Ортақ бөлім табыңыз: 3 пен 4-тің ЕКЕ = 12. Қайта жазамыз: 8/12 + 3/12" },
              { en: "Add numerators: 8 + 3 = 11, so the answer is 11/12", ru: "Сложите числители: 8 + 3 = 11, ответ 11/12", kk: "Алымдарды қосыңыз: 8 + 3 = 11, жауабы 11/12" }
            ],
            answer: "11/12",
            answerRu: "11/12",
            answerKk: "11/12"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Convert 3/4 to a decimal",
            questionRu: "Переведите 3/4 в десятичную дробь",
            questionKk: "3/4 бөлшегін ондық санға айналдырыңыз",
            answer: "0.75",
            answerRu: "0.75",
            answerKk: "0.75",
            hint: "Divide 3 by 4",
            hintRu: "Разделите 3 на 4",
            hintKk: "3-ті 4-ке бөліңіз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Subtract: 5/6 − 1/4",
            questionRu: "Вычтите: 5/6 − 1/4",
            questionKk: "Азайтыңыз: 5/6 − 1/4",
            answer: "7/12",
            answerRu: "7/12",
            answerKk: "7/12",
            hint: "LCD of 6 and 4 is 12",
            hintRu: "НОК 6 и 4 равно 12",
            hintKk: "6 мен 4-тің ЕКЕ = 12",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Evaluate: 2/3 × 3/5 + 1/2",
            questionRu: "Вычислите: 2/3 × 3/5 + 1/2",
            questionKk: "Есептеңіз: 2/3 × 3/5 + 1/2",
            answer: "9/10",
            answerRu: "9/10",
            answerKk: "9/10",
            hint: "Multiply first (2/5), then add 1/2 with common denominator 10",
            hintRu: "Сначала умножьте (2/5), затем прибавьте 1/2 с общим знаменателем 10",
            hintKk: "Алдымен көбейтіңіз (2/5), содан кейін ортақ бөлімі 10 арқылы 1/2 қосыңыз",
            xp: 20
          }
        ]
      },
      // ── 8-3 Ratios & Proportions ──
      {
        title: "Ratios & Proportions",
        titleRu: "Отношения и пропорции",
        titleKk: "Қатынастар мен пропорциялар",
        content: "A ratio compares two quantities, such as 3:5, meaning for every 3 of one thing there are 5 of another. A proportion states that two ratios are equal: a/b = c/d. Cross-multiplication (a×d = b×c) is the fastest way to solve for an unknown in a proportion.",
        contentRu: "Отношение сравнивает две величины, например 3:5 означает, что на каждые 3 одного приходится 5 другого. Пропорция утверждает, что два отношения равны: a/b = c/d. Перекрёстное умножение (a×d = b×c) — самый быстрый способ найти неизвестное в пропорции.",
        contentKk: "Қатынас екі шаманы салыстырады, мысалы 3:5 — бірінің әр 3-іне екіншісінің 5-і бар дегенді білдіреді. Пропорция екі қатынастың тең екенін көрсетеді: a/b = c/d. Айқас көбейту (a×d = b×c) — пропорциядағы белгісізді табудың ең жылдам тәсілі.",
        keyFormulas: [
          {
            formula: "a/b = c/d → a × d = b × c",
            description: "Cross-multiplication to solve proportions",
            descriptionRu: "Перекрёстное умножение для решения пропорций",
            descriptionKk: "Пропорцияларды шешу үшін айқас көбейту"
          }
        ],
        solvedExamples: [
          {
            question: "If 4/x = 8/12, find x.",
            questionRu: "Если 4/x = 8/12, найдите x.",
            questionKk: "Егер 4/x = 8/12 болса, x-ті табыңыз.",
            steps: [
              { en: "Cross-multiply: 4 × 12 = 8 × x → 48 = 8x", ru: "Перекрёстное умножение: 4 × 12 = 8 × x → 48 = 8x", kk: "Айқас көбейту: 4 × 12 = 8 × x → 48 = 8x" },
              { en: "Divide both sides by 8: x = 48 ÷ 8 = 6", ru: "Разделите обе стороны на 8: x = 48 ÷ 8 = 6", kk: "Екі жағын 8-ге бөліңіз: x = 48 ÷ 8 = 6" }
            ],
            answer: "x = 6",
            answerRu: "x = 6",
            answerKk: "x = 6"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Simplify the ratio 12:8",
            questionRu: "Упростите отношение 12:8",
            questionKk: "12:8 қатынасын жеңілдетіңіз",
            answer: "3:2",
            answerRu: "3:2",
            answerKk: "3:2",
            hint: "Divide both numbers by their GCD (4)",
            hintRu: "Разделите оба числа на их НОД (4)",
            hintKk: "Екі санды ЕҮОБ-на (4) бөліңіз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Solve: 5/x = 15/27",
            questionRu: "Решите: 5/x = 15/27",
            questionKk: "Шешіңіз: 5/x = 15/27",
            answer: "x = 9",
            answerRu: "x = 9",
            answerKk: "x = 9",
            hint: "Cross-multiply: 5 × 27 = 15 × x",
            hintRu: "Перекрёстное умножение: 5 × 27 = 15 × x",
            hintKk: "Айқас көбейту: 5 × 27 = 15 × x",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A recipe uses flour and sugar in a 5:2 ratio. If you use 750g of flour, how much sugar do you need?",
            questionRu: "В рецепте мука и сахар в соотношении 5:2. Если вы используете 750 г муки, сколько сахара нужно?",
            questionKk: "Рецептте ұн мен қант 5:2 қатынасында. Егер 750 г ұн пайдалансаңыз, қанша қант керек?",
            answer: "300g",
            answerRu: "300 г",
            answerKk: "300 г",
            hint: "Set up proportion: 5/2 = 750/x and solve",
            hintRu: "Составьте пропорцию: 5/2 = 750/x и решите",
            hintKk: "Пропорция құрыңыз: 5/2 = 750/x және шешіңіз",
            xp: 20
          }
        ]
      },
      // ── 8-4 Basic Geometry - Shapes ──
      {
        title: "Basic Geometry - Shapes",
        titleRu: "Основы геометрии — Фигуры",
        titleKk: "Геометрия негіздері — Пішіндер",
        content: "Geometry studies shapes and their properties. Triangles have 3 sides and interior angles summing to 180°. Quadrilaterals (rectangles, squares, parallelograms, trapezoids) have 4 sides and interior angles summing to 360°. Circles are defined by a center point and a radius — the distance from center to edge.",
        contentRu: "Геометрия изучает фигуры и их свойства. Треугольники имеют 3 стороны, и сумма их внутренних углов равна 180°. Четырёхугольники (прямоугольники, квадраты, параллелограммы, трапеции) имеют 4 стороны, сумма углов 360°. Окружность определяется центром и радиусом — расстоянием от центра до края.",
        contentKk: "Геометрия пішіндер мен олардың қасиеттерін зерттейді. Үшбұрыштардың 3 қабырғасы бар және ішкі бұрыштарының қосындысы 180°. Төртбұрыштардың (тіктөртбұрыш, шаршы, параллелограмм, трапеция) 4 қабырғасы бар, бұрыштар қосындысы 360°. Шеңбер орталық нүкте мен радиуспен — орталықтан шетке дейінгі қашықтықпен анықталады.",
        keyFormulas: [
          {
            formula: "Sum of angles in a triangle = 180°",
            description: "Triangle angle sum property",
            descriptionRu: "Свойство суммы углов треугольника",
            descriptionKk: "Үшбұрыш бұрыштары қосындысының қасиеті"
          },
          {
            formula: "Sum of angles in a quadrilateral = 360°",
            description: "Quadrilateral angle sum property",
            descriptionRu: "Свойство суммы углов четырёхугольника",
            descriptionKk: "Төртбұрыш бұрыштары қосындысының қасиеті"
          }
        ],
        solvedExamples: [
          {
            question: "A triangle has angles of 50° and 60°. Find the third angle.",
            questionRu: "Углы треугольника 50° и 60°. Найдите третий угол.",
            questionKk: "Үшбұрыштың бұрыштары 50° және 60°. Үшінші бұрышты табыңыз.",
            steps: [
              { en: "Sum of angles in a triangle = 180°. So third angle = 180° − 50° − 60°", ru: "Сумма углов треугольника = 180°. Третий угол = 180° − 50° − 60°", kk: "Үшбұрыш бұрыштарының қосындысы = 180°. Үшінші бұрыш = 180° − 50° − 60°" },
              { en: "Third angle = 180° − 110° = 70°", ru: "Третий угол = 180° − 110° = 70°", kk: "Үшінші бұрыш = 180° − 110° = 70°" }
            ],
            answer: "70°",
            answerRu: "70°",
            answerKk: "70°"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How many degrees do the angles of a quadrilateral sum to?",
            questionRu: "Чему равна сумма углов четырёхугольника?",
            questionKk: "Төртбұрыш бұрыштарының қосындысы қанша градус?",
            answer: "360°",
            answerRu: "360°",
            answerKk: "360°",
            hint: "Think of a rectangle — all four corners are 90°",
            hintRu: "Подумайте о прямоугольнике — все четыре угла по 90°",
            hintKk: "Тіктөртбұрышты ойлаңыз — төрт бұрышы 90°",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A triangle has two equal angles of 65° each. What is the third angle?",
            questionRu: "У треугольника два равных угла по 65°. Чему равен третий угол?",
            questionKk: "Үшбұрыштың екі тең бұрышы 65°-тан. Үшінші бұрыш қандай?",
            answer: "50°",
            answerRu: "50°",
            answerKk: "50°",
            hint: "Subtract both known angles from 180°",
            hintRu: "Вычтите оба известных угла из 180°",
            hintKk: "Екі белгілі бұрышты 180°-тан азайтыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Three angles of a quadrilateral are 90°, 85°, and 110°. Find the fourth angle.",
            questionRu: "Три угла четырёхугольника: 90°, 85° и 110°. Найдите четвёртый угол.",
            questionKk: "Төртбұрыштың үш бұрышы: 90°, 85° және 110°. Төртінші бұрышты табыңыз.",
            answer: "75°",
            answerRu: "75°",
            answerKk: "75°",
            hint: "360° − (90° + 85° + 110°)",
            hintRu: "360° − (90° + 85° + 110°)",
            hintKk: "360° − (90° + 85° + 110°)",
            xp: 20
          }
        ]
      },
      // ── 8-5 Area & Perimeter ──
      {
        title: "Area & Perimeter",
        titleRu: "Площадь и периметр",
        titleKk: "Аудан мен периметр",
        content: "Perimeter is the total length around a shape, found by adding all side lengths. Area measures the space inside a shape in square units. Rectangles have area = length × width, triangles have area = ½ × base × height, and circles have area = πr².",
        contentRu: "Периметр — это общая длина вокруг фигуры, найденная сложением всех сторон. Площадь измеряет пространство внутри фигуры в квадратных единицах. У прямоугольника площадь = длина × ширина, у треугольника = ½ × основание × высота, у круга = πr².",
        contentKk: "Периметр — пішіннің айналасындағы жалпы ұзындық, барлық қабырғаларды қосу арқылы табылады. Аудан пішін ішіндегі кеңістікті шаршы бірліктермен өлшейді. Тіктөртбұрыштың ауданы = ұзындық × ен, үшбұрыштың = ½ × табан × биіктік, шеңбердің = πr².",
        keyFormulas: [
          {
            formula: "A_rectangle = l × w; P_rectangle = 2(l + w)",
            description: "Area and perimeter of a rectangle",
            descriptionRu: "Площадь и периметр прямоугольника",
            descriptionKk: "Тіктөртбұрыштың ауданы мен периметрі"
          },
          {
            formula: "A_triangle = ½ × b × h",
            description: "Area of a triangle",
            descriptionRu: "Площадь треугольника",
            descriptionKk: "Үшбұрыштың ауданы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the area and perimeter of a rectangle with length 8 cm and width 5 cm.",
            questionRu: "Найдите площадь и периметр прямоугольника с длиной 8 см и шириной 5 см.",
            questionKk: "Ұзындығы 8 см, ені 5 см тіктөртбұрыштың ауданы мен периметрін табыңыз.",
            steps: [
              { en: "Area = l × w = 8 × 5 = 40 cm²", ru: "Площадь = l × w = 8 × 5 = 40 см²", kk: "Аудан = l × w = 8 × 5 = 40 см²" },
              { en: "Perimeter = 2(l + w) = 2(8 + 5) = 2 × 13 = 26 cm", ru: "Периметр = 2(l + w) = 2(8 + 5) = 2 × 13 = 26 см", kk: "Периметр = 2(l + w) = 2(8 + 5) = 2 × 13 = 26 см" }
            ],
            answer: "Area = 40 cm², Perimeter = 26 cm",
            answerRu: "Площадь = 40 см², периметр = 26 см",
            answerKk: "Аудан = 40 см², периметр = 26 см"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the perimeter of a square with side 7 cm.",
            questionRu: "Найдите периметр квадрата со стороной 7 см.",
            questionKk: "Қабырғасы 7 см шаршының периметрін табыңыз.",
            answer: "28 cm",
            answerRu: "28 см",
            answerKk: "28 см",
            hint: "A square has 4 equal sides",
            hintRu: "У квадрата 4 равные стороны",
            hintKk: "Шаршының 4 тең қабырғасы бар",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the area of a triangle with base 10 cm and height 6 cm.",
            questionRu: "Найдите площадь треугольника с основанием 10 см и высотой 6 см.",
            questionKk: "Табаны 10 см, биіктігі 6 см үшбұрыштың ауданын табыңыз.",
            answer: "30 cm²",
            answerRu: "30 см²",
            answerKk: "30 см²",
            hint: "Use A = ½ × base × height",
            hintRu: "Используйте A = ½ × основание × высота",
            hintKk: "A = ½ × табан × биіктік формуласын қолданыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A rectangle has perimeter 36 cm and length 11 cm. Find its area.",
            questionRu: "Периметр прямоугольника 36 см, длина 11 см. Найдите площадь.",
            questionKk: "Тіктөртбұрыштың периметрі 36 см, ұзындығы 11 см. Ауданын табыңыз.",
            answer: "77 cm²",
            answerRu: "77 см²",
            answerKk: "77 см²",
            hint: "First find width from perimeter: w = (P/2) − l, then area = l × w",
            hintRu: "Сначала найдите ширину: w = (P/2) − l, затем площадь = l × w",
            hintKk: "Алдымен енді табыңыз: w = (P/2) − l, содан кейін аудан = l × w",
            xp: 20
          }
        ]
      },
      // ── 8-6 Intro to Variables ──
      {
        title: "Intro to Variables",
        titleRu: "Введение в переменные",
        titleKk: "Айнымалыларға кіріспе",
        content: "A variable is a letter (like x or y) that stands for an unknown number. Algebraic expressions combine variables with numbers and operations, such as 3x + 5. To evaluate an expression, substitute the given value for the variable and simplify using order of operations.",
        contentRu: "Переменная — это буква (например x или y), обозначающая неизвестное число. Алгебраические выражения объединяют переменные с числами и операциями, например 3x + 5. Чтобы вычислить выражение, подставьте данное значение вместо переменной и упростите по порядку действий.",
        contentKk: "Айнымалы — белгісіз санды білдіретін әріп (мысалы, x немесе y). Алгебралық өрнектер айнымалыларды сандармен және амалдармен біріктіреді, мысалы 3x + 5. Өрнекті есептеу үшін айнымалының орнына берілген мәнді қойып, амалдар реті бойынша жеңілдетіңіз.",
        keyFormulas: [
          {
            formula: "If x = 4, then 3x + 5 = 3(4) + 5 = 17",
            description: "Substituting a value into an expression",
            descriptionRu: "Подстановка значения в выражение",
            descriptionKk: "Өрнекке мән қою"
          }
        ],
        solvedExamples: [
          {
            question: "Evaluate 2x² − 3x + 1 when x = 3.",
            questionRu: "Вычислите 2x² − 3x + 1 при x = 3.",
            questionKk: "x = 3 болғанда 2x² − 3x + 1 есептеңіз.",
            steps: [
              { en: "Substitute x = 3: 2(3)² − 3(3) + 1 = 2(9) − 9 + 1", ru: "Подставим x = 3: 2(3)² − 3(3) + 1 = 2(9) − 9 + 1", kk: "x = 3 қоямыз: 2(3)² − 3(3) + 1 = 2(9) − 9 + 1" },
              { en: "Simplify: 18 − 9 + 1 = 10", ru: "Упростим: 18 − 9 + 1 = 10", kk: "Жеңілдетеміз: 18 − 9 + 1 = 10" }
            ],
            answer: "10",
            answerRu: "10",
            answerKk: "10"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Evaluate 5x when x = 6",
            questionRu: "Вычислите 5x при x = 6",
            questionKk: "x = 6 болғанда 5x есептеңіз",
            answer: "30",
            answerRu: "30",
            answerKk: "30",
            hint: "Multiply 5 by 6",
            hintRu: "Умножьте 5 на 6",
            hintKk: "5-ті 6-ға көбейтіңіз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Evaluate 4x − 7 when x = 5",
            questionRu: "Вычислите 4x − 7 при x = 5",
            questionKk: "x = 5 болғанда 4x − 7 есептеңіз",
            answer: "13",
            answerRu: "13",
            answerKk: "13",
            hint: "First multiply 4 × 5, then subtract 7",
            hintRu: "Сначала умножьте 4 × 5, затем вычтите 7",
            hintKk: "Алдымен 4 × 5 көбейтіңіз, содан кейін 7 азайтыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Evaluate (x + 2)(x − 3) when x = 7",
            questionRu: "Вычислите (x + 2)(x − 3) при x = 7",
            questionKk: "x = 7 болғанда (x + 2)(x − 3) есептеңіз",
            answer: "36",
            answerRu: "36",
            answerKk: "36",
            hint: "Substitute first: (7+2)(7−3) = 9 × 4",
            hintRu: "Сначала подставьте: (7+2)(7−3) = 9 × 4",
            hintKk: "Алдымен қойыңыз: (7+2)(7−3) = 9 × 4",
            xp: 20
          }
        ]
      },
      // ── 8-7 Linear Expressions ──
      {
        title: "Linear Expressions",
        titleRu: "Линейные выражения",
        titleKk: "Сызықтық өрнектер",
        content: "A linear expression has variables raised only to the first power, like 3x + 2y − 5. To simplify, combine like terms — terms with the same variable and exponent. The distributive property a(b + c) = ab + ac lets you expand or factor expressions.",
        contentRu: "Линейное выражение содержит переменные только в первой степени, например 3x + 2y − 5. Для упрощения объединяйте подобные члены — слагаемые с одинаковой переменной и степенью. Распределительное свойство a(b + c) = ab + ac позволяет раскрывать или факторизовать выражения.",
        contentKk: "Сызықтық өрнекте айнымалылар тек бірінші дәрежеде болады, мысалы 3x + 2y − 5. Жеңілдету үшін ұқсас мүшелерді — бірдей айнымалысы мен дәрежесі бар қосылғыштарды біріктіріңіз. Үлестірмелі қасиет a(b + c) = ab + ac өрнектерді жаюға немесе жинақтауға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "a(b + c) = ab + ac",
            description: "Distributive property",
            descriptionRu: "Распределительное свойство",
            descriptionKk: "Үлестірмелі қасиет"
          }
        ],
        solvedExamples: [
          {
            question: "Simplify: 3(2x + 4) − 5x",
            questionRu: "Упростите: 3(2x + 4) − 5x",
            questionKk: "Жеңілдетіңіз: 3(2x + 4) − 5x",
            steps: [
              { en: "Distribute: 6x + 12 − 5x", ru: "Раскроем скобки: 6x + 12 − 5x", kk: "Жақшаны ашамыз: 6x + 12 − 5x" },
              { en: "Combine like terms: (6x − 5x) + 12 = x + 12", ru: "Объединим подобные: (6x − 5x) + 12 = x + 12", kk: "Ұқсас мүшелерді біріктіреміз: (6x − 5x) + 12 = x + 12" }
            ],
            answer: "x + 12",
            answerRu: "x + 12",
            answerKk: "x + 12"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Simplify: 4x + 3x",
            questionRu: "Упростите: 4x + 3x",
            questionKk: "Жеңілдетіңіз: 4x + 3x",
            answer: "7x",
            answerRu: "7x",
            answerKk: "7x",
            hint: "These are like terms — add the coefficients",
            hintRu: "Это подобные члены — сложите коэффициенты",
            hintKk: "Бұлар ұқсас мүшелер — коэффициенттерді қосыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Expand and simplify: 2(3x − 1) + 4x",
            questionRu: "Раскройте и упростите: 2(3x − 1) + 4x",
            questionKk: "Жайып жеңілдетіңіз: 2(3x − 1) + 4x",
            answer: "10x − 2",
            answerRu: "10x − 2",
            answerKk: "10x − 2",
            hint: "Distribute 2 first, then combine like terms",
            hintRu: "Сначала раскройте скобки, затем объедините подобные",
            hintKk: "Алдымен 2-ні үлестіріңіз, содан кейін ұқсас мүшелерді біріктіріңіз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Simplify: 5(x + 3) − 2(2x − 4)",
            questionRu: "Упростите: 5(x + 3) − 2(2x − 4)",
            questionKk: "Жеңілдетіңіз: 5(x + 3) − 2(2x − 4)",
            answer: "x + 23",
            answerRu: "x + 23",
            answerKk: "x + 23",
            hint: "Distribute both: 5x + 15 − 4x + 8",
            hintRu: "Раскройте оба: 5x + 15 − 4x + 8",
            hintKk: "Екеуін де жайыңыз: 5x + 15 − 4x + 8",
            xp: 20
          }
        ]
      },
      // ── 8-8 Speed & Distance ──
      {
        title: "Speed & Distance",
        titleRu: "Скорость и расстояние",
        titleKk: "Жылдамдық пен қашықтық",
        content: "Speed tells how fast an object moves. The relationship between speed, distance, and time is: distance = speed × time. Average speed equals total distance divided by total time. These formulas are the foundation of motion problems in physics.",
        contentRu: "Скорость показывает, как быстро движется объект. Связь между скоростью, расстоянием и временем: расстояние = скорость × время. Средняя скорость равна общему расстоянию, делённому на общее время. Эти формулы — основа задач на движение в физике.",
        contentKk: "Жылдамдық нысанның қаншалықты тез қозғалатынын көрсетеді. Жылдамдық, қашықтық және уақыт арасындағы байланыс: қашықтық = жылдамдық × уақыт. Орташа жылдамдық жалпы қашықтықтың жалпы уақытқа бөлінуіне тең. Бұл формулалар физикадағы қозғалыс есептерінің негізі.",
        keyFormulas: [
          {
            formula: "d = v × t; v = d/t; t = d/v",
            description: "Distance-speed-time relationships",
            descriptionRu: "Связь расстояния, скорости и времени",
            descriptionKk: "Қашықтық, жылдамдық және уақыт байланысы"
          }
        ],
        solvedExamples: [
          {
            question: "A car travels at 60 km/h for 2.5 hours. How far does it go?",
            questionRu: "Автомобиль едет со скоростью 60 км/ч в течение 2,5 часов. Какое расстояние он проедет?",
            questionKk: "Автокөлік 60 км/сағ жылдамдықпен 2,5 сағат жүреді. Қанша қашықтық жүреді?",
            steps: [
              { en: "Use d = v × t: d = 60 × 2.5", ru: "Используем d = v × t: d = 60 × 2,5", kk: "d = v × t қолданамыз: d = 60 × 2,5" },
              { en: "d = 150 km", ru: "d = 150 км", kk: "d = 150 км" }
            ],
            answer: "150 km",
            answerRu: "150 км",
            answerKk: "150 км"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A cyclist rides at 15 km/h for 3 hours. What distance is covered?",
            questionRu: "Велосипедист едет со скоростью 15 км/ч 3 часа. Какое расстояние он проехал?",
            questionKk: "Велосипедші 15 км/сағ жылдамдықпен 3 сағат жүреді. Қанша қашықтық жүрді?",
            answer: "45 km",
            answerRu: "45 км",
            answerKk: "45 км",
            hint: "d = v × t",
            hintRu: "d = v × t",
            hintKk: "d = v × t",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A train covers 240 km in 4 hours. What is its average speed?",
            questionRu: "Поезд проезжает 240 км за 4 часа. Какова средняя скорость?",
            questionKk: "Пойыз 240 км-ді 4 сағатта жүреді. Орташа жылдамдығы қандай?",
            answer: "60 km/h",
            answerRu: "60 км/ч",
            answerKk: "60 км/сағ",
            hint: "v = d/t",
            hintRu: "v = d/t",
            hintKk: "v = d/t",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A runner goes 5 km at 10 km/h, then 3 km at 6 km/h. What is the average speed for the whole trip?",
            questionRu: "Бегун пробежал 5 км со скоростью 10 км/ч, затем 3 км со скоростью 6 км/ч. Какова средняя скорость?",
            questionKk: "Жүгіруші 5 км-ді 10 км/сағ, содан кейін 3 км-ді 6 км/сағ жүрді. Орташа жылдамдығы қандай?",
            answer: "8 km/h",
            answerRu: "8 км/ч",
            answerKk: "8 км/сағ",
            hint: "Total distance = 8 km; total time = 0.5 + 0.5 = 1 hour",
            hintRu: "Общее расстояние = 8 км; общее время = 0,5 + 0,5 = 1 час",
            hintKk: "Жалпы қашықтық = 8 км; жалпы уақыт = 0,5 + 0,5 = 1 сағат",
            xp: 20
          }
        ]
      },
      // ── 8-9 States of Matter ──
      {
        title: "States of Matter",
        titleRu: "Агрегатные состояния вещества",
        titleKk: "Заттың агрегаттық күйлері",
        content: "Matter exists in three main states: solid, liquid, and gas. In solids, particles are tightly packed and vibrate in place. In liquids, particles are close but can slide past each other. In gases, particles are far apart and move freely. Heating a substance adds energy to its particles, which can cause phase changes like melting or boiling.",
        contentRu: "Вещество существует в трёх основных состояниях: твёрдое, жидкое и газообразное. В твёрдых телах частицы плотно упакованы и вибрируют на месте. В жидкостях частицы близко, но могут скользить друг мимо друга. В газах частицы далеко и движутся свободно. Нагрев добавляет энергию частицам, что может вызвать фазовые переходы — плавление или кипение.",
        contentKk: "Зат үш негізгі күйде болады: қатты, сұйық және газ. Қатты заттарда бөлшектер тығыз орналасып, орнында тербеледі. Сұйықтықтарда бөлшектер жақын, бірақ бір-бірінен сырғи алады. Газдарда бөлшектер алыс орналасып, еркін қозғалады. Затты қыздыру бөлшектерге энергия қосады, бұл балқу немесе қайнау сияқты фазалық ауысуларға әкеледі.",
        keyFormulas: [
          {
            formula: "Solid → (melting) → Liquid → (boiling) → Gas",
            description: "Phase transitions with increasing temperature",
            descriptionRu: "Фазовые переходы при повышении температуры",
            descriptionKk: "Температура жоғарылағандағы фазалық ауысулар"
          }
        ],
        solvedExamples: [
          {
            question: "Water is at 90°C. What state is it in, and what happens at 100°C?",
            questionRu: "Вода при 90°C. В каком она состоянии и что произойдёт при 100°C?",
            questionKk: "Су 90°C-та. Ол қандай күйде және 100°C-та не болады?",
            steps: [
              { en: "At 90°C water is liquid because it is above 0°C (melting point) and below 100°C (boiling point).", ru: "При 90°C вода жидкая, так как выше 0°C (точка плавления) и ниже 100°C (точка кипения).", kk: "90°C-та су сұйық, себебі 0°C-тан (балқу нүктесі) жоғары және 100°C-тан (қайнау нүктесі) төмен." },
              { en: "At 100°C it begins to boil — changing from liquid to gas (steam).", ru: "При 100°C начинается кипение — переход из жидкости в газ (пар).", kk: "100°C-та қайнай бастайды — сұйықтан газға (буға) ауысады." }
            ],
            answer: "Liquid at 90°C; boils (becomes gas/steam) at 100°C",
            answerRu: "Жидкость при 90°C; кипит (переходит в газ/пар) при 100°C",
            answerKk: "90°C-та сұйық; 100°C-та қайнайды (газға/буға айналады)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name the three main states of matter.",
            questionRu: "Назовите три основных агрегатных состояния вещества.",
            questionKk: "Заттың үш негізгі агрегаттық күйін атаңыз.",
            answer: "Solid, liquid, gas",
            answerRu: "Твёрдое, жидкое, газообразное",
            answerKk: "Қатты, сұйық, газ",
            hint: "Think about ice, water, and steam",
            hintRu: "Подумайте о льде, воде и паре",
            hintKk: "Мұз, су және бу туралы ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What is the process called when a solid turns directly into a gas without becoming a liquid?",
            questionRu: "Как называется процесс, когда твёрдое вещество превращается в газ, минуя жидкость?",
            questionKk: "Қатты зат сұйыққа айналмай тікелей газға ауысу процесі қалай аталады?",
            answer: "Sublimation",
            answerRu: "Сублимация (возгонка)",
            answerKk: "Сублимация",
            hint: "Think of dry ice (solid CO₂) producing visible fog",
            hintRu: "Подумайте о сухом льде (твёрдый CO₂), который образует видимый туман",
            hintKk: "Құрғақ мұзды (қатты CO₂) ойлаңыз — ол көрінетін тұман шығарады",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain why temperature stays constant during a phase change even though heat is being added.",
            questionRu: "Объясните, почему температура остаётся постоянной во время фазового перехода, хотя тепло продолжает поступать.",
            questionKk: "Жылу қосылып жатса да, фазалық ауысу кезінде температура неге тұрақты қалатынын түсіндіріңіз.",
            answer: "The added energy is used to break intermolecular bonds (latent heat) rather than to increase kinetic energy, so temperature does not rise until the phase change is complete.",
            answerRu: "Добавляемая энергия расходуется на разрыв межмолекулярных связей (скрытая теплота), а не на увеличение кинетической энергии, поэтому температура не повышается, пока фазовый переход не завершится.",
            answerKk: "Қосылған энергия кинетикалық энергияны арттыруға емес, молекулааралық байланыстарды үзуге (жасырын жылу) жұмсалады, сондықтан фазалық ауысу аяқталғанша температура көтерілмейді.",
            hint: "The energy goes into changing the arrangement of particles, not their speed",
            hintRu: "Энергия идёт на изменение расположения частиц, а не их скорости",
            hintKk: "Энергия бөлшектердің жылдамдығына емес, орналасуын өзгертуге жұмсалады",
            xp: 20
          }
        ]
      },
      // ── 8-10 Cells & Organisms ──
      {
        title: "Cells & Organisms",
        titleRu: "Клетки и организмы",
        titleKk: "Жасушалар мен организмдер",
        content: "The cell is the basic unit of all living things. Plant cells have a cell wall, chloroplasts, and a large vacuole; animal cells lack these but have centrioles. Both types share a nucleus (containing DNA), mitochondria (energy production), and a cell membrane. Organisms can be unicellular (like bacteria) or multicellular, with cells organized into tissues, organs, and systems.",
        contentRu: "Клетка — основная единица всего живого. Растительные клетки имеют клеточную стенку, хлоропласты и большую вакуоль; животные клетки лишены этих структур, но имеют центриоли. Оба типа имеют ядро (с ДНК), митохондрии (производство энергии) и клеточную мембрану. Организмы бывают одноклеточными (как бактерии) или многоклеточными, с клетками, организованными в ткани, органы и системы.",
        contentKk: "Жасуша — барлық тірі заттардың негізгі бірлігі. Өсімдік жасушаларында жасуша қабырғасы, хлоропластар және үлкен вакуоль бар; жануар жасушаларында бұлар жоқ, бірақ центриольдер бар. Екі түрінде де ядро (ДНҚ бар), митохондриялар (энергия өндіру) және жасуша мембранасы бар. Организмдер бір жасушалы (бактериялар сияқты) немесе көп жасушалы болады, жасушалар тіндерге, ағзаларға және жүйелерге ұйымдастырылады.",
        keyFormulas: [
          {
            formula: "Cell → Tissue → Organ → Organ System → Organism",
            description: "Levels of biological organization",
            descriptionRu: "Уровни биологической организации",
            descriptionKk: "Биологиялық ұйымдасу деңгейлері"
          }
        ],
        solvedExamples: [
          {
            question: "A student observes a cell under a microscope and sees a cell wall and chloroplasts. Is it a plant or animal cell?",
            questionRu: "Ученик видит под микроскопом клетку с клеточной стенкой и хлоропластами. Это растительная или животная клетка?",
            questionKk: "Оқушы микроскоппен жасуша қабырғасы мен хлоропластары бар жасушаны көреді. Бұл өсімдік пе, жануар жасушасы ма?",
            steps: [
              { en: "Cell wall and chloroplasts are structures found only in plant cells, not animal cells.", ru: "Клеточная стенка и хлоропласты — структуры, присущие только растительным клеткам.", kk: "Жасуша қабырғасы мен хлоропластар тек өсімдік жасушаларында кездеседі." },
              { en: "Therefore, this is a plant cell.", ru: "Следовательно, это растительная клетка.", kk: "Демек, бұл өсімдік жасушасы." }
            ],
            answer: "Plant cell",
            answerRu: "Растительная клетка",
            answerKk: "Өсімдік жасушасы"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What organelle is the 'powerhouse' of the cell?",
            questionRu: "Какой органоид — «электростанция» клетки?",
            questionKk: "Жасушаның «энергия станциясы» қай органоид?",
            answer: "Mitochondria",
            answerRu: "Митохондрии",
            answerKk: "Митохондриялар",
            hint: "It produces ATP — the energy currency of the cell",
            hintRu: "Он производит АТФ — энергетическую валюту клетки",
            hintKk: "Ол АТФ — жасушаның энергия валютасын өндіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Name two structures found in plant cells but NOT in animal cells.",
            questionRu: "Назовите две структуры, которые есть в растительных клетках, но нет в животных.",
            questionKk: "Өсімдік жасушаларында бар, бірақ жануар жасушаларында жоқ екі құрылымды атаңыз.",
            answer: "Cell wall and chloroplasts (also acceptable: large central vacuole)",
            answerRu: "Клеточная стенка и хлоропласты (также допустимо: большая центральная вакуоль)",
            answerKk: "Жасуша қабырғасы мен хлоропластар (үлкен орталық вакуоль де жарайды)",
            hint: "Think about what plants need to do that animals don't — stand rigid and photosynthesize",
            hintRu: "Подумайте, что растения делают, а животные нет — стоят прямо и фотосинтезируют",
            hintKk: "Өсімдіктер не істейді, жануарлар не істемейді — тік тұрады және фотосинтез жасайды",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Arrange in order from simplest to most complex: organ, cell, tissue, organ system, organism.",
            questionRu: "Расположите от простого к сложному: орган, клетка, ткань, система органов, организм.",
            questionKk: "Қарапайымнан күрделіге қарай орналастырыңыз: ағза, жасуша, тін, ағза жүйесі, организм.",
            answer: "Cell → Tissue → Organ → Organ System → Organism",
            answerRu: "Клетка → ткань → орган → система органов → организм",
            answerKk: "Жасуша → тін → ағза → ағзалар жүйесі → организм",
            hint: "Cells group into tissues, tissues into organs, organs into systems",
            hintRu: "Клетки образуют ткани, ткани — органы, органы — системы",
            hintKk: "Жасушалар тіндерге, тіндер ағзаларға, ағзалар жүйелерге біріктіріледі",
            xp: 20
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // GRADE 9 — Algebra, Geometry & Natural Sciences
  // ═══════════════════════════════════════════════
  "Core Sciences_9": {
    planetName: "Core Sciences",
    introduction: {
      en: "Advance into algebra and geometry while exploring the laws of physics, chemistry, and biology. You will solve equations, prove geometric theorems, and understand how forces, atoms, and cells work.",
      ru: "Продвигайтесь в алгебре и геометрии, изучая законы физики, химии и биологии. Вы будете решать уравнения, доказывать геометрические теоремы и понимать, как работают силы, атомы и клетки."
    },
    sections: [
      // ── 9-1 Linear Equations ──
      {
        title: "Linear Equations",
        titleRu: "Линейные уравнения",
        titleKk: "Сызықтық теңдеулер",
        content: "A linear equation has the form ax + b = c, where x is unknown. To solve, isolate x by performing inverse operations on both sides: subtract b, then divide by a. The solution can always be checked by substituting back into the original equation.",
        contentRu: "Линейное уравнение имеет вид ax + b = c, где x — неизвестное. Для решения изолируйте x, выполняя обратные операции с обеих сторон: вычтите b, затем разделите на a. Решение всегда можно проверить подстановкой обратно в исходное уравнение.",
        contentKk: "Сызықтық теңдеудің түрі ax + b = c, мұнда x — белгісіз. Шешу үшін екі жағынан кері амалдар орындап x-ті оқшалаңыз: b-ны азайтыңыз, содан кейін a-ға бөліңіз. Шешімді әрқашан бастапқы теңдеуге қойып тексеруге болады.",
        keyFormulas: [
          {
            formula: "ax + b = c → x = (c − b) / a",
            description: "Solving a linear equation for x",
            descriptionRu: "Решение линейного уравнения относительно x",
            descriptionKk: "Сызықтық теңдеуді x бойынша шешу"
          }
        ],
        solvedExamples: [
          {
            question: "Solve: 3x + 7 = 22",
            questionRu: "Решите: 3x + 7 = 22",
            questionKk: "Шешіңіз: 3x + 7 = 22",
            steps: [
              { en: "Subtract 7 from both sides: 3x = 15", ru: "Вычтем 7 из обеих сторон: 3x = 15", kk: "Екі жағынан 7 азайтамыз: 3x = 15" },
              { en: "Divide both sides by 3: x = 5", ru: "Разделим обе стороны на 3: x = 5", kk: "Екі жағын 3-ке бөлеміз: x = 5" }
            ],
            answer: "x = 5",
            answerRu: "x = 5",
            answerKk: "x = 5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Solve: x + 9 = 14",
            questionRu: "Решите: x + 9 = 14",
            questionKk: "Шешіңіз: x + 9 = 14",
            answer: "x = 5",
            answerRu: "x = 5",
            answerKk: "x = 5",
            hint: "Subtract 9 from both sides",
            hintRu: "Вычтите 9 из обеих сторон",
            hintKk: "Екі жағынан 9 азайтыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Solve: 5x − 3 = 2x + 12",
            questionRu: "Решите: 5x − 3 = 2x + 12",
            questionKk: "Шешіңіз: 5x − 3 = 2x + 12",
            answer: "x = 5",
            answerRu: "x = 5",
            answerKk: "x = 5",
            hint: "Move x terms to one side: 3x = 15",
            hintRu: "Перенесите x на одну сторону: 3x = 15",
            hintKk: "x мүшелерін бір жаққа жинаңыз: 3x = 15",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Solve: 2(x + 4) − 3 = 3(x − 1)",
            questionRu: "Решите: 2(x + 4) − 3 = 3(x − 1)",
            questionKk: "Шешіңіз: 2(x + 4) − 3 = 3(x − 1)",
            answer: "x = 8",
            answerRu: "x = 8",
            answerKk: "x = 8",
            hint: "Expand both sides: 2x + 8 − 3 = 3x − 3 → 2x + 5 = 3x − 3",
            hintRu: "Раскройте обе стороны: 2x + 8 − 3 = 3x − 3",
            hintKk: "Екі жағын жайыңыз: 2x + 8 − 3 = 3x − 3",
            xp: 20
          }
        ]
      },
      // ── 9-2 Inequalities ──
      {
        title: "Inequalities",
        titleRu: "Неравенства",
        titleKk: "Теңсіздіктер",
        content: "An inequality uses <, >, ≤, or ≥ instead of =. Solving is similar to equations, but when you multiply or divide by a negative number you must flip the inequality sign. Solutions are often represented on a number line or in interval notation.",
        contentRu: "Неравенство использует знаки <, >, ≤ или ≥ вместо =. Решение похоже на уравнения, но при умножении или делении на отрицательное число знак неравенства меняется на противоположный. Решения часто изображают на числовой прямой или в интервальной записи.",
        contentKk: "Теңсіздік = орнына <, >, ≤ немесе ≥ белгілерін қолданады. Шешу теңдеулерге ұқсас, бірақ теріс санға көбейткенде немесе бөлгенде теңсіздік белгісін аудару керек. Шешімдер сан сызығында немесе аралық жазбасында көрсетіледі.",
        keyFormulas: [
          {
            formula: "If a > b and c < 0, then a×c < b×c",
            description: "Multiplying by a negative flips the inequality sign",
            descriptionRu: "Умножение на отрицательное число меняет знак неравенства",
            descriptionKk: "Теріс санға көбейту теңсіздік белгісін аударады"
          }
        ],
        solvedExamples: [
          {
            question: "Solve: −2x + 5 > 11",
            questionRu: "Решите: −2x + 5 > 11",
            questionKk: "Шешіңіз: −2x + 5 > 11",
            steps: [
              { en: "Subtract 5: −2x > 6", ru: "Вычтем 5: −2x > 6", kk: "5 азайтамыз: −2x > 6" },
              { en: "Divide by −2 and flip the sign: x < −3", ru: "Разделим на −2 и сменим знак: x < −3", kk: "−2-ге бөліп белгіні аударамыз: x < −3" }
            ],
            answer: "x < −3",
            answerRu: "x < −3",
            answerKk: "x < −3"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Solve: x + 4 > 10",
            questionRu: "Решите: x + 4 > 10",
            questionKk: "Шешіңіз: x + 4 > 10",
            answer: "x > 6",
            answerRu: "x > 6",
            answerKk: "x > 6",
            hint: "Subtract 4 from both sides",
            hintRu: "Вычтите 4 из обеих сторон",
            hintKk: "Екі жағынан 4 азайтыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Solve: 3x − 2 ≤ 13",
            questionRu: "Решите: 3x − 2 ≤ 13",
            questionKk: "Шешіңіз: 3x − 2 ≤ 13",
            answer: "x ≤ 5",
            answerRu: "x ≤ 5",
            answerKk: "x ≤ 5",
            hint: "Add 2, then divide by 3",
            hintRu: "Прибавьте 2, затем разделите на 3",
            hintKk: "2 қосыңыз, содан кейін 3-ке бөліңіз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Solve: −4x + 1 ≥ 2x − 11",
            questionRu: "Решите: −4x + 1 ≥ 2x − 11",
            questionKk: "Шешіңіз: −4x + 1 ≥ 2x − 11",
            answer: "x ≤ 2",
            answerRu: "x ≤ 2",
            answerKk: "x ≤ 2",
            hint: "Move x terms to one side: −6x ≥ −12, then divide by −6 and flip",
            hintRu: "Перенесите x: −6x ≥ −12, разделите на −6 и смените знак",
            hintKk: "x мүшелерін жинаңыз: −6x ≥ −12, −6-ға бөліп белгіні аударыңыз",
            xp: 20
          }
        ]
      },
      // ── 9-3 Systems of Equations ──
      {
        title: "Systems of Equations",
        titleRu: "Системы уравнений",
        titleKk: "Теңдеулер жүйесі",
        content: "A system of two linear equations has two unknowns (x and y). The substitution method solves one equation for one variable and substitutes into the other. The elimination method adds or subtracts equations to cancel one variable. The solution is the point where both lines intersect.",
        contentRu: "Система двух линейных уравнений имеет два неизвестных (x и y). Метод подстановки решает одно уравнение для одной переменной и подставляет в другое. Метод сложения складывает или вычитает уравнения для исключения одной переменной. Решение — точка пересечения двух прямых.",
        contentKk: "Екі сызықтық теңдеулер жүйесінің екі белгісізі (x және y) бар. Қою әдісі бір теңдеуді бір айнымалы бойынша шешіп, екіншісіне қояды. Жою әдісі бір айнымалыны жою үшін теңдеулерді қосады немесе азайтады. Шешім — екі түзудің қиылысу нүктесі.",
        keyFormulas: [
          {
            formula: "Substitution: solve one equation for y, plug into the other",
            description: "Substitution method for solving systems",
            descriptionRu: "Метод подстановки для решения систем",
            descriptionKk: "Жүйелерді шешудің қою әдісі"
          },
          {
            formula: "Elimination: add/subtract equations to cancel one variable",
            description: "Elimination method for solving systems",
            descriptionRu: "Метод исключения для решения систем",
            descriptionKk: "Жүйелерді шешудің жою әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Solve: x + y = 10 and 2x − y = 5",
            questionRu: "Решите: x + y = 10 и 2x − y = 5",
            questionKk: "Шешіңіз: x + y = 10 және 2x − y = 5",
            steps: [
              { en: "Add both equations: (x + y) + (2x − y) = 10 + 5 → 3x = 15 → x = 5", ru: "Сложим оба уравнения: (x + y) + (2x − y) = 15 → 3x = 15 → x = 5", kk: "Екі теңдеуді қосамыз: (x + y) + (2x − y) = 15 → 3x = 15 → x = 5" },
              { en: "Substitute x = 5 into first equation: 5 + y = 10 → y = 5", ru: "Подставим x = 5 в первое: 5 + y = 10 → y = 5", kk: "x = 5-ті біріншіге қоямыз: 5 + y = 10 → y = 5" }
            ],
            answer: "x = 5, y = 5",
            answerRu: "x = 5, y = 5",
            answerKk: "x = 5, y = 5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Solve: x + y = 7, x − y = 3",
            questionRu: "Решите: x + y = 7, x − y = 3",
            questionKk: "Шешіңіз: x + y = 7, x − y = 3",
            answer: "x = 5, y = 2",
            answerRu: "x = 5, y = 2",
            answerKk: "x = 5, y = 2",
            hint: "Add the two equations to eliminate y",
            hintRu: "Сложите два уравнения, чтобы исключить y",
            hintKk: "y-ді жою үшін екі теңдеуді қосыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Solve: 2x + 3y = 12, x − y = 1",
            questionRu: "Решите: 2x + 3y = 12, x − y = 1",
            questionKk: "Шешіңіз: 2x + 3y = 12, x − y = 1",
            answer: "x = 3, y = 2",
            answerRu: "x = 3, y = 2",
            answerKk: "x = 3, y = 2",
            hint: "From the second equation: x = y + 1, substitute into the first",
            hintRu: "Из второго уравнения: x = y + 1, подставьте в первое",
            hintKk: "Екінші теңдеуден: x = y + 1, біріншіге қойыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Solve: 3x + 2y = 16, 5x − 2y = 8",
            questionRu: "Решите: 3x + 2y = 16, 5x − 2y = 8",
            questionKk: "Шешіңіз: 3x + 2y = 16, 5x − 2y = 8",
            answer: "x = 3, y = 3.5",
            answerRu: "x = 3, y = 3.5",
            answerKk: "x = 3, y = 3.5",
            hint: "Add the equations: 8x = 24",
            hintRu: "Сложите уравнения: 8x = 24",
            hintKk: "Теңдеулерді қосыңыз: 8x = 24",
            xp: 20
          }
        ]
      },
      // ── 9-4 Coordinate Geometry ──
      {
        title: "Coordinate Geometry",
        titleRu: "Координатная геометрия",
        titleKk: "Координаталық геометрия",
        content: "The coordinate plane has an x-axis (horizontal) and y-axis (vertical) meeting at the origin (0,0). The distance between two points is found using the distance formula derived from the Pythagorean theorem. The midpoint formula gives the center point between two coordinates.",
        contentRu: "Координатная плоскость имеет ось x (горизонтальную) и ось y (вертикальную), пересекающиеся в начале координат (0,0). Расстояние между двумя точками находится по формуле расстояния, выведенной из теоремы Пифагора. Формула середины отрезка даёт центральную точку между двумя координатами.",
        contentKk: "Координаталық жазықтықта x осі (көлденең) және y осі (тік) бар, олар бас нүктеде (0,0) қиылысады. Екі нүкте арасындағы қашықтық Пифагор теоремасынан шыққан қашықтық формуласымен табылады. Орта нүкте формуласы екі координатаның арасындағы орталық нүктені береді.",
        keyFormulas: [
          {
            formula: "d = √[(x₂−x₁)² + (y₂−y₁)²]",
            tex: "d = \\sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}",
            description: "Distance between two points",
            descriptionRu: "Расстояние между двумя точками",
            descriptionKk: "Екі нүкте арасындағы қашықтық"
          },
          {
            formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            tex: "M = \\left(\\dfrac{x_{1} + x_{2}}{2},\\ \\dfrac{y_{1} + y_{2}}{2}\\right)",
            description: "Midpoint of a line segment",
            descriptionRu: "Середина отрезка",
            descriptionKk: "Кесіндінің орта нүктесі"
          }
        ],
        solvedExamples: [
          {
            question: "Find the distance between A(1, 2) and B(4, 6).",
            questionRu: "Найдите расстояние между A(1, 2) и B(4, 6).",
            questionKk: "A(1, 2) мен B(4, 6) арасындағы қашықтықты табыңыз.",
            steps: [
              { en: "d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25", ru: "d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25", kk: "d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25" },
              { en: "d = 5", ru: "d = 5", kk: "d = 5" }
            ],
            answer: "5 units",
            answerRu: "5 единиц",
            answerKk: "5 бірлік"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the midpoint of (2, 4) and (6, 8).",
            questionRu: "Найдите середину отрезка (2, 4) и (6, 8).",
            questionKk: "(2, 4) мен (6, 8) кесіндісінің орта нүктесін табыңыз.",
            answer: "(4, 6)",
            answerRu: "(4, 6)",
            answerKk: "(4, 6)",
            hint: "Average the x-coordinates and the y-coordinates",
            hintRu: "Усредните x-координаты и y-координаты",
            hintKk: "x-координаталарын және y-координаталарын орташалаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the distance between (−1, 3) and (5, −1).",
            questionRu: "Найдите расстояние между (−1, 3) и (5, −1).",
            questionKk: "(−1, 3) мен (5, −1) арасындағы қашықтықты табыңыз.",
            answer: "√52 ≈ 7.21",
            answerRu: "√52 ≈ 7.21",
            answerKk: "√52 ≈ 7.21",
            hint: "d = √[(5−(−1))² + (−1−3)²] = √[36 + 16]",
            hintRu: "d = √[(5−(−1))² + (−1−3)²] = √[36 + 16]",
            hintKk: "d = √[(5−(−1))² + (−1−3)²] = √[36 + 16]",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "The midpoint of segment AB is (3, 5). If A = (1, 2), find B.",
            questionRu: "Середина отрезка AB — (3, 5). Если A = (1, 2), найдите B.",
            questionKk: "AB кесіндісінің ортасы (3, 5). Егер A = (1, 2) болса, B-ны табыңыз.",
            answer: "B = (5, 8)",
            answerRu: "B = (5, 8)",
            answerKk: "B = (5, 8)",
            hint: "If midpoint = ((x₁+x₂)/2, (y₁+y₂)/2), then x₂ = 2×3 − 1 = 5",
            hintRu: "Если середина = ((x₁+x₂)/2, (y₁+y₂)/2), то x₂ = 2×3 − 1 = 5",
            hintKk: "Егер орта = ((x₁+x₂)/2, (y₁+y₂)/2) болса, x₂ = 2×3 − 1 = 5",
            xp: 20
          }
        ]
      },
      // ── 9-5 Triangles & Pythagorean Theorem ──
      {
        title: "Triangles & Pythagorean Theorem",
        titleRu: "Треугольники и теорема Пифагора",
        titleKk: "Үшбұрыштар мен Пифагор теоремасы",
        content: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c². This theorem is used to find unknown sides and to verify whether a triangle is right-angled. Common Pythagorean triples include (3,4,5), (5,12,13), and (8,15,17).",
        contentRu: "Теорема Пифагора гласит, что в прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов двух других сторон: a² + b² = c². Эта теорема используется для нахождения неизвестных сторон и для проверки, является ли треугольник прямоугольным. Частые тройки Пифагора: (3,4,5), (5,12,13), (8,15,17).",
        contentKk: "Пифагор теоремасы: тікбұрышты үшбұрышта гипотенузаның квадраты қалған екі қабырғаның квадраттарының қосындысына тең: a² + b² = c². Бұл теорема белгісіз қабырғаларды табуға және үшбұрыштың тікбұрышты екенін тексеруге қолданылады. Кең таралған Пифагор үштіктері: (3,4,5), (5,12,13), (8,15,17).",
        keyFormulas: [
          {
            formula: "a² + b² = c²",
            description: "Pythagorean theorem (c is the hypotenuse)",
            descriptionRu: "Теорема Пифагора (c — гипотенуза)",
            descriptionKk: "Пифагор теоремасы (c — гипотенуза)"
          }
        ],
        solvedExamples: [
          {
            question: "A right triangle has legs 6 and 8. Find the hypotenuse.",
            questionRu: "У прямоугольного треугольника катеты 6 и 8. Найдите гипотенузу.",
            questionKk: "Тікбұрышты үшбұрыштың катеттері 6 және 8. Гипотенузаны табыңыз.",
            steps: [
              { en: "Apply a² + b² = c²: 6² + 8² = 36 + 64 = 100", ru: "Применим a² + b² = c²: 36 + 64 = 100", kk: "a² + b² = c² қолданамыз: 36 + 64 = 100" },
              { en: "c = √100 = 10", ru: "c = √100 = 10", kk: "c = √100 = 10" }
            ],
            answer: "10",
            answerRu: "10",
            answerKk: "10"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A right triangle has legs 3 and 4. Find the hypotenuse.",
            questionRu: "Катеты прямоугольного треугольника 3 и 4. Найдите гипотенузу.",
            questionKk: "Тікбұрышты үшбұрыштың катеттері 3 және 4. Гипотенузаны табыңыз.",
            answer: "5",
            answerRu: "5",
            answerKk: "5",
            hint: "3² + 4² = 9 + 16 = 25",
            hintRu: "3² + 4² = 9 + 16 = 25",
            hintKk: "3² + 4² = 9 + 16 = 25",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.",
            questionRu: "Гипотенуза 13, один катет 5. Найдите второй катет.",
            questionKk: "Гипотенуза 13, бір катет 5. Екінші катетті табыңыз.",
            answer: "12",
            answerRu: "12",
            answerKk: "12",
            hint: "b² = c² − a² = 169 − 25 = 144",
            hintRu: "b² = c² − a² = 169 − 25 = 144",
            hintKk: "b² = c² − a² = 169 − 25 = 144",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Is a triangle with sides 7, 24, and 25 a right triangle?",
            questionRu: "Является ли треугольник со сторонами 7, 24, 25 прямоугольным?",
            questionKk: "Қабырғалары 7, 24, 25 болатын үшбұрыш тікбұрышты ма?",
            answer: "Yes, because 7² + 24² = 49 + 576 = 625 = 25²",
            answerRu: "Да, так как 7² + 24² = 49 + 576 = 625 = 25²",
            answerKk: "Иә, себебі 7² + 24² = 49 + 576 = 625 = 25²",
            hint: "Check if a² + b² = c² where c is the longest side",
            hintRu: "Проверьте a² + b² = c², где c — наибольшая сторона",
            hintKk: "a² + b² = c² тексеріңіз, мұнда c — ең ұзын қабырға",
            xp: 20
          }
        ]
      },
      // ── 9-6 Newton's Laws ──
      {
        title: "Newton's Laws",
        titleRu: "Законы Ньютона",
        titleKk: "Ньютон заңдары",
        content: "Newton's three laws describe how objects move. The first law (inertia): an object stays at rest or in motion unless acted on by an external force. The second law: force equals mass times acceleration (F = ma). The third law: for every action there is an equal and opposite reaction.",
        contentRu: "Три закона Ньютона описывают движение объектов. Первый закон (инерция): тело остаётся в покое или движении, пока на него не подействует внешняя сила. Второй закон: сила равна произведению массы на ускорение (F = ma). Третий закон: каждому действию есть равное и противоположное противодействие.",
        contentKk: "Ньютонның үш заңы нысандардың қозғалуын сипаттайды. Бірінші заң (инерция): сыртқы күш әсер етпейінше нысан тыныштықта немесе қозғалыста қалады. Екінші заң: күш массаны үдеуге көбейтуге тең (F = ma). Үшінші заң: әр әрекетке тең және қарама-қарсы кері әрекет бар.",
        keyFormulas: [
          {
            formula: "F = m × a",
            description: "Newton's second law: force equals mass times acceleration",
            descriptionRu: "Второй закон Ньютона: сила = масса × ускорение",
            descriptionKk: "Ньютонның екінші заңы: күш = масса × үдеу"
          }
        ],
        solvedExamples: [
          {
            question: "A 10 kg box is pushed with a force of 50 N. What is its acceleration?",
            questionRu: "Ящик массой 10 кг толкают силой 50 Н. Каково его ускорение?",
            questionKk: "10 кг жәшікке 50 Н күш түсіріледі. Оның үдеуі қандай?",
            steps: [
              { en: "F = ma, so a = F/m = 50/10", ru: "F = ma, значит a = F/m = 50/10", kk: "F = ma, демек a = F/m = 50/10" },
              { en: "a = 5 m/s²", ru: "a = 5 м/с²", kk: "a = 5 м/с²" }
            ],
            answer: "5 m/s²",
            answerRu: "5 м/с²",
            answerKk: "5 м/с²"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is Newton's first law also known as?",
            questionRu: "Как ещё называется первый закон Ньютона?",
            questionKk: "Ньютонның бірінші заңы тағы қалай аталады?",
            answer: "The law of inertia",
            answerRu: "Закон инерции",
            answerKk: "Инерция заңы",
            hint: "It describes the tendency of objects to resist changes in motion",
            hintRu: "Он описывает склонность тел сопротивляться изменениям движения",
            hintKk: "Ол нысандардың қозғалыс өзгерістеріне қарсылық көрсету бейімділігін сипаттайды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What force is needed to accelerate a 5 kg object at 3 m/s²?",
            questionRu: "Какая сила нужна для ускорения объекта массой 5 кг с ускорением 3 м/с²?",
            questionKk: "5 кг нысанды 3 м/с² үдеумен жылжыту үшін қандай күш керек?",
            answer: "15 N",
            answerRu: "15 Н",
            answerKk: "15 Н",
            hint: "F = m × a = 5 × 3",
            hintRu: "F = m × a = 5 × 3",
            hintKk: "F = m × a = 5 × 3",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A 2000 kg car accelerates from rest to 20 m/s in 10 seconds. What net force acts on it?",
            questionRu: "Автомобиль массой 2000 кг разгоняется с места до 20 м/с за 10 секунд. Какова равнодействующая сила?",
            questionKk: "2000 кг автокөлік тыныштықтан 10 секундта 20 м/с-ке дейін үдейді. Қорытқы күш қандай?",
            answer: "4000 N",
            answerRu: "4000 Н",
            answerKk: "4000 Н",
            hint: "First find a = Δv/t = 20/10 = 2 m/s², then F = ma",
            hintRu: "Сначала найдите a = Δv/t = 20/10 = 2 м/с², затем F = ma",
            hintKk: "Алдымен a = Δv/t = 20/10 = 2 м/с² табыңыз, содан кейін F = ma",
            xp: 20
          }
        ]
      },
      // ── 9-7 Work & Energy ──
      {
        title: "Work & Energy",
        titleRu: "Работа и энергия",
        titleKk: "Жұмыс пен энергия",
        content: "Work is done when a force moves an object over a distance: W = F × d. Energy is the ability to do work. Kinetic energy (KE = ½mv²) is the energy of motion, and potential energy (PE = mgh) is stored energy due to position. The law of conservation of energy states that energy cannot be created or destroyed, only transformed.",
        contentRu: "Работа совершается, когда сила перемещает объект: W = F × d. Энергия — способность совершать работу. Кинетическая энергия (KE = ½mv²) — энергия движения, потенциальная энергия (PE = mgh) — запасённая энергия из-за положения. Закон сохранения энергии: энергия не создаётся и не уничтожается, а только преобразуется.",
        contentKk: "Жұмыс күш нысанды қашықтыққа жылжытқанда жасалады: W = F × d. Энергия — жұмыс жасау қабілеті. Кинетикалық энергия (KE = ½mv²) — қозғалыс энергиясы, потенциалдық энергия (PE = mgh) — орналасуға байланысты жинақталған энергия. Энергия сақталу заңы: энергия жасалмайды және жойылмайды, тек түрленеді.",
        keyFormulas: [
          {
            formula: "W = F × d; KE = ½mv²; PE = mgh",
            description: "Work, kinetic energy, and potential energy formulas",
            descriptionRu: "Формулы работы, кинетической и потенциальной энергии",
            descriptionKk: "Жұмыс, кинетикалық және потенциалдық энергия формулалары"
          }
        ],
        solvedExamples: [
          {
            question: "A 3 kg ball moves at 4 m/s. What is its kinetic energy?",
            questionRu: "Мяч массой 3 кг движется со скоростью 4 м/с. Какова его кинетическая энергия?",
            questionKk: "3 кг доп 4 м/с жылдамдықпен қозғалады. Оның кинетикалық энергиясы қандай?",
            steps: [
              { en: "KE = ½mv² = ½ × 3 × 4² = ½ × 3 × 16", ru: "KE = ½mv² = ½ × 3 × 4² = ½ × 3 × 16", kk: "KE = ½mv² = ½ × 3 × 4² = ½ × 3 × 16" },
              { en: "KE = 24 J", ru: "KE = 24 Дж", kk: "KE = 24 Дж" }
            ],
            answer: "24 J",
            answerRu: "24 Дж",
            answerKk: "24 Дж"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How much work is done pushing a box with 20 N force over 5 m?",
            questionRu: "Какая работа совершается при толкании ящика силой 20 Н на 5 м?",
            questionKk: "Жәшікті 20 Н күшпен 5 м итергенде қанша жұмыс жасалады?",
            answer: "100 J",
            answerRu: "100 Дж",
            answerKk: "100 Дж",
            hint: "W = F × d",
            hintRu: "W = F × d",
            hintKk: "W = F × d",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A 2 kg object is at a height of 10 m. What is its potential energy? (g = 10 m/s²)",
            questionRu: "Объект массой 2 кг на высоте 10 м. Какова его потенциальная энергия? (g = 10 м/с²)",
            questionKk: "2 кг нысан 10 м биіктікте. Оның потенциалдық энергиясы қандай? (g = 10 м/с²)",
            answer: "200 J",
            answerRu: "200 Дж",
            answerKk: "200 Дж",
            hint: "PE = mgh = 2 × 10 × 10",
            hintRu: "PE = mgh = 2 × 10 × 10",
            hintKk: "PE = mgh = 2 × 10 × 10",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A 1 kg ball is dropped from 20 m. What is its speed just before hitting the ground? (g = 10 m/s²)",
            questionRu: "Мяч 1 кг падает с 20 м. Какова его скорость перед ударом о землю? (g = 10 м/с²)",
            questionKk: "1 кг доп 20 м биіктіктен түседі. Жерге тиер алдындағы жылдамдығы қандай? (g = 10 м/с²)",
            answer: "20 m/s",
            answerRu: "20 м/с",
            answerKk: "20 м/с",
            hint: "PE converts to KE: mgh = ½mv² → v = √(2gh) = √(2×10×20)",
            hintRu: "PE переходит в KE: mgh = ½mv² → v = √(2gh)",
            hintKk: "PE KE-ге айналады: mgh = ½mv² → v = √(2gh)",
            xp: 20
          }
        ]
      },
      // ── 9-8 Atoms & Elements ──
      {
        title: "Atoms & Elements",
        titleRu: "Атомы и элементы",
        titleKk: "Атомдар мен элементтер",
        content: "An atom is the smallest unit of an element, made up of protons (positive), neutrons (neutral) in the nucleus, and electrons (negative) orbiting outside. The atomic number is the number of protons and defines the element. The periodic table organizes elements by atomic number, with rows (periods) and columns (groups) revealing patterns in properties.",
        contentRu: "Атом — наименьшая единица элемента, состоящая из протонов (положительных) и нейтронов (нейтральных) в ядре, и электронов (отрицательных), вращающихся вокруг. Атомный номер — число протонов, определяющее элемент. Периодическая таблица организует элементы по атомному номеру, строки (периоды) и столбцы (группы) показывают закономерности в свойствах.",
        contentKk: "Атом — элементтің ең кіші бірлігі, ядродағы протондардан (оң), нейтрондардан (бейтарап) және сыртында айналатын электрондардан (теріс) тұрады. Атомдық нөмір — протондар саны, ол элементті анықтайды. Периодтық кесте элементтерді атомдық нөмір бойынша реттейді, жолдар (периодтар) мен бағандар (топтар) қасиеттердегі заңдылықтарды көрсетеді.",
        keyFormulas: [
          {
            formula: "Mass number = protons + neutrons; Atomic number = protons",
            description: "Relationship between atomic and mass numbers",
            descriptionRu: "Связь между атомным номером и массовым числом",
            descriptionKk: "Атомдық нөмір мен массалық санның байланысы"
          }
        ],
        solvedExamples: [
          {
            question: "Carbon has atomic number 6 and mass number 12. How many protons, neutrons, and electrons does it have?",
            questionRu: "У углерода атомный номер 6 и массовое число 12. Сколько у него протонов, нейтронов и электронов?",
            questionKk: "Көміртектің атомдық нөмірі 6, массалық саны 12. Оның қанша протоны, нейтроны және электроны бар?",
            steps: [
              { en: "Protons = atomic number = 6; electrons = protons = 6 (neutral atom)", ru: "Протоны = атомный номер = 6; электроны = протоны = 6 (нейтральный атом)", kk: "Протондар = атомдық нөмір = 6; электрондар = протондар = 6 (бейтарап атом)" },
              { en: "Neutrons = mass number − protons = 12 − 6 = 6", ru: "Нейтроны = массовое число − протоны = 12 − 6 = 6", kk: "Нейтрондар = массалық сан − протондар = 12 − 6 = 6" }
            ],
            answer: "6 protons, 6 neutrons, 6 electrons",
            answerRu: "6 протонов, 6 нейтронов, 6 электронов",
            answerKk: "6 протон, 6 нейтрон, 6 электрон"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What three subatomic particles make up an atom?",
            questionRu: "Из каких трёх субатомных частиц состоит атом?",
            questionKk: "Атом қандай үш субатомдық бөлшектен тұрады?",
            answer: "Protons, neutrons, and electrons",
            answerRu: "Протоны, нейтроны и электроны",
            answerKk: "Протондар, нейтрондар және электрондар",
            hint: "Two are in the nucleus, one orbits outside",
            hintRu: "Два в ядре, один вращается снаружи",
            hintKk: "Екеуі ядрода, бірі сыртында айналады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Oxygen has atomic number 8 and mass number 16. How many neutrons does it have?",
            questionRu: "У кислорода атомный номер 8 и массовое число 16. Сколько нейтронов?",
            questionKk: "Оттегінің атомдық нөмірі 8, массалық саны 16. Қанша нейтроны бар?",
            answer: "8 neutrons",
            answerRu: "8 нейтронов",
            answerKk: "8 нейтрон",
            hint: "Neutrons = mass number − atomic number",
            hintRu: "Нейтроны = массовое число − атомный номер",
            hintKk: "Нейтрондар = массалық сан − атомдық нөмір",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "An isotope of carbon has mass number 14. How does it differ from carbon-12?",
            questionRu: "Изотоп углерода имеет массовое число 14. Чем он отличается от углерода-12?",
            questionKk: "Көміртектің изотопының массалық саны 14. Ол көміртек-12-ден қалай ерекшеленеді?",
            answer: "Carbon-14 has 8 neutrons (instead of 6), but the same 6 protons. Isotopes differ in neutron count.",
            answerRu: "У углерода-14 восемь нейтронов (вместо 6), но те же 6 протонов. Изотопы различаются числом нейтронов.",
            answerKk: "Көміртек-14-те 8 нейтрон бар (6 орнына), бірақ протондар саны бұрынғыдай 6. Изотоптар нейтрон санымен ерекшеленеді.",
            hint: "Same number of protons, different number of neutrons",
            hintRu: "Одинаковое число протонов, разное число нейтронов",
            hintKk: "Протондар саны бірдей, нейтрондар саны әртүрлі",
            xp: 20
          }
        ]
      },
      // ── 9-9 Chemical Reactions ──
      {
        title: "Chemical Reactions",
        titleRu: "Химические реакции",
        titleKk: "Химиялық реакциялар",
        content: "A chemical reaction rearranges atoms to form new substances. Reactants (left side of the arrow) become products (right side). A balanced equation has equal numbers of each atom on both sides, satisfying the law of conservation of mass. Signs of a reaction include color change, gas production, precipitate formation, or temperature change.",
        contentRu: "Химическая реакция перестраивает атомы, образуя новые вещества. Реагенты (слева от стрелки) превращаются в продукты (справа). Уравненная реакция содержит одинаковое число каждого атома с обеих сторон, соблюдая закон сохранения массы. Признаки реакции: изменение цвета, выделение газа, образование осадка или изменение температуры.",
        contentKk: "Химиялық реакция атомдарды қайта орналастырып, жаңа заттар құрайды. Реагенттер (сол жақта) өнімдерге (оң жақта) айналады. Теңестірілген теңдеуде екі жақта әр атомның саны тең, масса сақталу заңын сақтайды. Реакция белгілері: түс өзгеруі, газ бөлінуі, тұнба түзілуі немесе температура өзгеруі.",
        keyFormulas: [
          {
            formula: "Reactants → Products (atoms are conserved)",
            description: "Law of conservation of mass in chemical reactions",
            descriptionRu: "Закон сохранения массы в химических реакциях",
            descriptionKk: "Химиялық реакциялардағы масса сақталу заңы"
          }
        ],
        solvedExamples: [
          {
            question: "Balance the equation: H₂ + O₂ → H₂O",
            questionRu: "Уравняйте: H₂ + O₂ → H₂O",
            questionKk: "Теңестіріңіз: H₂ + O₂ → H₂O",
            steps: [
              { en: "Count atoms: Left has 2H, 2O. Right has 2H, 1O. Oxygen is unbalanced.", ru: "Считаем атомы: слева 2H, 2O. Справа 2H, 1O. Кислород не уравнен.", kk: "Атомдарды санаймыз: сол жақта 2H, 2O. Оң жақта 2H, 1O. Оттегі теңестірілмеген." },
              { en: "Put 2 before H₂O: 2H₂ + O₂ → 2H₂O. Now: 4H, 2O on each side. Balanced!", ru: "Поставим 2 перед H₂O: 2H₂ + O₂ → 2H₂O. Теперь: 4H, 2O с каждой стороны.", kk: "H₂O алдына 2 қоямыз: 2H₂ + O₂ → 2H₂O. Енді: әр жақта 4H, 2O. Теңестірілді!" }
            ],
            answer: "2H₂ + O₂ → 2H₂O",
            answerRu: "2H₂ + O₂ → 2H₂O",
            answerKk: "2H₂ + O₂ → 2H₂O"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name two signs that a chemical reaction has occurred.",
            questionRu: "Назовите два признака того, что произошла химическая реакция.",
            questionKk: "Химиялық реакция болғанының екі белгісін атаңыз.",
            answer: "Any two of: color change, gas bubbles, precipitate, temperature change, light/smell",
            answerRu: "Любые два из: изменение цвета, пузырьки газа, осадок, изменение температуры, свет/запах",
            answerKk: "Кез келген екеуі: түс өзгеруі, газ көпіршіктері, тұнба, температура өзгеруі, жарық/иіс",
            hint: "Think about what you can observe when vinegar and baking soda mix",
            hintRu: "Подумайте, что наблюдается при смешивании уксуса и соды",
            hintKk: "Сірке мен сода араласқанда не байқалатынын ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Balance: Fe + O₂ → Fe₂O₃",
            questionRu: "Уравняйте: Fe + O₂ → Fe₂O₃",
            questionKk: "Теңестіріңіз: Fe + O₂ → Fe₂O₃",
            answer: "4Fe + 3O₂ → 2Fe₂O₃",
            answerRu: "4Fe + 3O₂ → 2Fe₂O₃",
            answerKk: "4Fe + 3O₂ → 2Fe₂O₃",
            hint: "You need 4 Fe on the left and 6 O atoms on each side",
            hintRu: "Нужно 4 Fe слева и по 6 атомов O с каждой стороны",
            hintKk: "Сол жақта 4 Fe және әр жақта 6 O атомы керек",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Balance: C₃H₈ + O₂ → CO₂ + H₂O",
            questionRu: "Уравняйте: C₃H₈ + O₂ → CO₂ + H₂O",
            questionKk: "Теңестіріңіз: C₃H₈ + O₂ → CO₂ + H₂O",
            answer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
            answerRu: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
            answerKk: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
            hint: "Balance C first (3), then H (8→4H₂O), then count O on the right (6+4=10→5O₂)",
            hintRu: "Сначала C (3), затем H (8→4H₂O), потом O справа (6+4=10→5O₂)",
            hintKk: "Алдымен C (3), содан кейін H (8→4H₂O), содан кейін оң жақтағы O (6+4=10→5O₂)",
            xp: 20
          }
        ]
      },
      // ── 9-10 Cell Division ──
      {
        title: "Cell Division",
        titleRu: "Деление клеток",
        titleKk: "Жасуша бөлінуі",
        content: "Cells divide to grow, repair, and reproduce. Mitosis produces two identical daughter cells for growth and repair, maintaining the same chromosome number. Meiosis produces four genetically unique cells with half the chromosomes, used for sexual reproduction. In humans, body cells have 46 chromosomes (diploid) and gametes have 23 (haploid).",
        contentRu: "Клетки делятся для роста, восстановления и размножения. Митоз даёт две идентичные дочерние клетки с тем же числом хромосом — для роста и восстановления. Мейоз даёт четыре генетически уникальные клетки с половинным числом хромосом — для полового размножения. У человека соматические клетки имеют 46 хромосом (диплоидные), а гаметы — 23 (гаплоидные).",
        contentKk: "Жасушалар өсу, қалпына келтіру және көбею үшін бөлінеді. Митоз өсу мен қалпына келтіру үшін бірдей хромосома санымен екі бірдей жасуша шығарады. Мейоз жыныстық көбею үшін хромосомалардың жартысымен төрт генетикалық бірегей жасуша шығарады. Адамда дене жасушаларында 46 хромосома (диплоидты), ал гаметаларда 23 (гаплоидты) болады.",
        keyFormulas: [
          {
            formula: "Mitosis: 1 cell → 2 identical cells (2n); Meiosis: 1 cell → 4 unique cells (n)",
            description: "Outcomes of mitosis vs meiosis",
            descriptionRu: "Результаты митоза и мейоза",
            descriptionKk: "Митоз бен мейоздың нәтижелері"
          }
        ],
        solvedExamples: [
          {
            question: "A human skin cell (46 chromosomes) undergoes mitosis. How many chromosomes does each daughter cell have?",
            questionRu: "Клетка кожи человека (46 хромосом) проходит митоз. Сколько хромосом у каждой дочерней клетки?",
            questionKk: "Адамның тері жасушасы (46 хромосома) митоздан өтеді. Әр жаңа жасушада қанша хромосома болады?",
            steps: [
              { en: "Mitosis produces identical copies, so chromosome number is preserved.", ru: "Митоз создаёт идентичные копии, число хромосом сохраняется.", kk: "Митоз бірдей көшірмелер жасайды, хромосома саны сақталады." },
              { en: "Each daughter cell has 46 chromosomes, same as the parent.", ru: "Каждая дочерняя клетка имеет 46 хромосом, как и родительская.", kk: "Әр жаңа жасушада ата-аналық жасушадағыдай 46 хромосома болады." }
            ],
            answer: "46 chromosomes",
            answerRu: "46 хромосом",
            answerKk: "46 хромосома"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How many daughter cells does mitosis produce?",
            questionRu: "Сколько дочерних клеток образует митоз?",
            questionKk: "Митоз қанша жаңа жасуша шығарады?",
            answer: "2",
            answerRu: "2",
            answerKk: "2",
            hint: "Mitosis splits one cell into two identical copies",
            hintRu: "Митоз делит одну клетку на две идентичные копии",
            hintKk: "Митоз бір жасушаны екі бірдей көшірмеге бөледі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A cell with 20 chromosomes undergoes meiosis. How many chromosomes does each resulting cell have?",
            questionRu: "Клетка с 20 хромосомами проходит мейоз. Сколько хромосом в каждой результирующей клетке?",
            questionKk: "20 хромосомалы жасуша мейоздан өтеді. Нәтижелі жасушаларда қанша хромосома болады?",
            answer: "10",
            answerRu: "10",
            answerKk: "10",
            hint: "Meiosis halves the chromosome number",
            hintRu: "Мейоз уменьшает число хромосом вдвое",
            hintKk: "Мейоз хромосома санын екіге бөледі",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain why meiosis is essential for sexual reproduction but mitosis is not sufficient.",
            questionRu: "Объясните, почему мейоз необходим для полового размножения, а митоз недостаточен.",
            questionKk: "Мейоздың жыныстық көбею үшін неге қажет екенін және митоздың неге жеткіліксіз екенін түсіндіріңіз.",
            answer: "Meiosis halves the chromosome number so that when two gametes fuse at fertilization, the normal diploid number is restored. If gametes were made by mitosis, chromosome number would double each generation.",
            answerRu: "Мейоз вдвое уменьшает число хромосом, чтобы при слиянии двух гамет во время оплодотворения восстанавливалось нормальное диплоидное число. Если бы гаметы образовывались путём митоза, число хромосом удваивалось бы в каждом поколении.",
            answerKk: "Мейоз хромосома санын екі есе азайтады, сөйтіп ұрықтану кезінде екі гамета қосылғанда қалыпты диплоидты сан қалпына келеді. Егер гаметалар митоз арқылы түзілсе, хромосома саны әр ұрпақта екі еселенер еді.",
            hint: "Think about what happens when egg and sperm fuse",
            hintRu: "Подумайте, что произойдёт при слиянии яйцеклетки и сперматозоида",
            hintKk: "Жұмыртқажасуша мен сперматозоид қосылғанда не болатынын ойлаңыз",
            xp: 20
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // GRADE 10 — Advanced Algebra, Trig & Sciences
  // ═══════════════════════════════════════════════
  "Core Sciences_10": {
    planetName: "Core Sciences",
    introduction: {
      en: "Tackle quadratic equations, trigonometry, and deeper science topics including kinematics, electricity, stoichiometry, and genetics. These skills prepare you for advanced study and standardized exams.",
      ru: "Изучите квадратные уравнения, тригонометрию и углублённые научные темы — кинематику, электричество, стехиометрию и генетику. Эти навыки подготовят вас к углублённому обучению и стандартизированным экзаменам."
    },
    sections: [
      // ── 10-1 Quadratic Equations ──
      {
        title: "Quadratic Equations",
        titleRu: "Квадратные уравнения",
        titleKk: "Квадрат теңдеулер",
        content: "A quadratic equation has the form ax² + bx + c = 0. It can be solved by factoring, completing the square, or using the quadratic formula. The discriminant (b² − 4ac) determines the number of real solutions: positive gives two, zero gives one, negative gives none.",
        contentRu: "Квадратное уравнение имеет вид ax² + bx + c = 0. Его можно решить разложением, дополнением до полного квадрата или формулой дискриминанта. Дискриминант (b² − 4ac) определяет число вещественных решений: положительный — два, ноль — одно, отрицательный — ни одного.",
        contentKk: "Квадрат теңдеудің түрі ax² + bx + c = 0. Оны жіктеу, толық квадратқа дейін толтыру немесе квадрат формула арқылы шешуге болады. Дискриминант (b² − 4ac) нақты шешімдер санын анықтайды: оң — екі, нөл — бір, теріс — шешім жоқ.",
        keyFormulas: [
          {
            formula: "x = (−b ± √(b²−4ac)) / 2a",
            tex: "x = \\dfrac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}",
            description: "Quadratic formula",
            descriptionRu: "Формула дискриминанта",
            descriptionKk: "Квадрат формула"
          },
          {
            formula: "D = b² − 4ac",
            tex: "D = b^{2} - 4ac",
            description: "Discriminant — determines number of real roots",
            descriptionRu: "Дискриминант — определяет число вещественных корней",
            descriptionKk: "Дискриминант — нақты түбірлер санын анықтайды"
          }
        ],
        solvedExamples: [
          {
            question: "Solve: x² − 5x + 6 = 0",
            questionRu: "Решите: x² − 5x + 6 = 0",
            questionKk: "Шешіңіз: x² − 5x + 6 = 0",
            steps: [
              { en: "Factor: (x − 2)(x − 3) = 0", ru: "Разложим: (x − 2)(x − 3) = 0", kk: "Жіктейміз: (x − 2)(x − 3) = 0" },
              { en: "Set each factor to zero: x = 2 or x = 3", ru: "Приравняем каждый множитель к нулю: x = 2 или x = 3", kk: "Әр көбейткішті нөлге теңестіреміз: x = 2 немесе x = 3" }
            ],
            answer: "x = 2 or x = 3",
            answerRu: "x = 2 или x = 3",
            answerKk: "x = 2 немесе x = 3"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Solve: x² − 9 = 0",
            questionRu: "Решите: x² − 9 = 0",
            questionKk: "Шешіңіз: x² − 9 = 0",
            answer: "x = 3 or x = −3",
            answerRu: "x = 3 или x = −3",
            answerKk: "x = 3 немесе x = −3",
            hint: "This is a difference of squares: (x−3)(x+3) = 0",
            hintRu: "Это разность квадратов: (x−3)(x+3) = 0",
            hintKk: "Бұл квадраттар айырмасы: (x−3)(x+3) = 0",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Solve using the quadratic formula: 2x² + 3x − 2 = 0",
            questionRu: "Решите по формуле: 2x² + 3x − 2 = 0",
            questionKk: "Формула арқылы шешіңіз: 2x² + 3x − 2 = 0",
            answer: "x = 0.5 or x = −2",
            answerRu: "x = 0.5 или x = −2",
            answerKk: "x = 0.5 немесе x = −2",
            hint: "a=2, b=3, c=−2. D = 9+16 = 25",
            hintRu: "a=2, b=3, c=−2. D = 9+16 = 25",
            hintKk: "a=2, b=3, c=−2. D = 9+16 = 25",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "For what values of k does x² + kx + 9 = 0 have exactly one solution?",
            questionRu: "При каких значениях k уравнение x² + kx + 9 = 0 имеет ровно одно решение?",
            questionKk: "x² + kx + 9 = 0 теңдеуінің дәл бір шешімі болу үшін k қандай мәндерде?",
            answer: "k = 6 or k = −6",
            answerRu: "k = 6 или k = −6",
            answerKk: "k = 6 немесе k = −6",
            hint: "One solution means D = 0: k² − 36 = 0",
            hintRu: "Одно решение значит D = 0: k² − 36 = 0",
            hintKk: "Бір шешім D = 0 дегенді білдіреді: k² − 36 = 0",
            xp: 20
          }
        ]
      },
      // ── 10-2 Polynomials ──
      {
        title: "Polynomials",
        titleRu: "Многочлены",
        titleKk: "Көпмүшелер",
        content: "A polynomial is an expression with one or more terms of the form axⁿ. The degree is the highest exponent. Polynomials can be added, subtracted, and multiplied by combining like terms. Factoring reverses multiplication and is essential for solving polynomial equations.",
        contentRu: "Многочлен — выражение с одним или более членами вида axⁿ. Степень — наибольший показатель. Многочлены можно складывать, вычитать и умножать, объединяя подобные члены. Факторизация — обратная операция умножению, необходимая для решения полиномиальных уравнений.",
        contentKk: "Көпмүше — axⁿ түріндегі бір немесе бірнеше мүшесі бар өрнек. Дәреже — ең жоғары дәреже көрсеткіші. Көпмүшелерді ұқсас мүшелерді біріктіру арқылы қосуға, азайтуға және көбейтуге болады. Жіктеу көбейтуді кері қайтарады және көпмүшелік теңдеулерді шешу үшін маңызды.",
        keyFormulas: [
          {
            formula: "(a + b)² = a² + 2ab + b²",
            description: "Square of a binomial",
            descriptionRu: "Квадрат двучлена",
            descriptionKk: "Екімүшенің квадраты"
          },
          {
            formula: "a² − b² = (a + b)(a − b)",
            description: "Difference of squares",
            descriptionRu: "Разность квадратов",
            descriptionKk: "Квадраттар айырмасы"
          }
        ],
        solvedExamples: [
          {
            question: "Expand: (2x + 3)²",
            questionRu: "Раскройте: (2x + 3)²",
            questionKk: "Жайыңыз: (2x + 3)²",
            steps: [
              { en: "Apply (a+b)² = a² + 2ab + b² where a=2x, b=3", ru: "Применим (a+b)² = a² + 2ab + b² где a=2x, b=3", kk: "(a+b)² = a² + 2ab + b² қолданамыз, мұнда a=2x, b=3" },
              { en: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9", ru: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9", kk: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9" }
            ],
            answer: "4x² + 12x + 9",
            answerRu: "4x² + 12x + 9",
            answerKk: "4x² + 12x + 9"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the degree of 5x³ − 2x + 7?",
            questionRu: "Какова степень 5x³ − 2x + 7?",
            questionKk: "5x³ − 2x + 7 көпмүшесінің дәрежесі қандай?",
            answer: "3",
            answerRu: "3",
            answerKk: "3",
            hint: "The degree is the highest power of x",
            hintRu: "Степень — наибольший показатель x",
            hintKk: "Дәреже — x-тің ең жоғары дәреже көрсеткіші",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Factor: x² − 16",
            questionRu: "Факторизуйте: x² − 16",
            questionKk: "Жіктеңіз: x² − 16",
            answer: "(x + 4)(x − 4)",
            answerRu: "(x + 4)(x − 4)",
            answerKk: "(x + 4)(x − 4)",
            hint: "Difference of squares: a² − b² = (a+b)(a−b)",
            hintRu: "Разность квадратов: a² − b² = (a+b)(a−b)",
            hintKk: "Квадраттар айырмасы: a² − b² = (a+b)(a−b)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Factor completely: 2x³ − 8x",
            questionRu: "Полностью разложите: 2x³ − 8x",
            questionKk: "Толық жіктеңіз: 2x³ − 8x",
            answer: "2x(x + 2)(x − 2)",
            answerRu: "2x(x + 2)(x − 2)",
            answerKk: "2x(x + 2)(x − 2)",
            hint: "First factor out 2x, then apply difference of squares",
            hintRu: "Сначала вынесите 2x, затем примените разность квадратов",
            hintKk: "Алдымен 2x шығарыңыз, содан кейін квадраттар айырмасын қолданыңыз",
            xp: 20
          }
        ]
      },
      // ── 10-3 Functions & Graphs ──
      {
        title: "Functions & Graphs",
        titleRu: "Функции и графики",
        titleKk: "Функциялар мен графиктер",
        content: "A function assigns exactly one output to each input: f(x) = expression. The graph of a linear function is a straight line; a quadratic function produces a parabola. The slope of a line (m = rise/run) describes its steepness, and the y-intercept is where it crosses the y-axis.",
        contentRu: "Функция сопоставляет каждому входному значению ровно одно выходное: f(x) = выражение. График линейной функции — прямая; квадратичной — парабола. Наклон прямой (m = подъём/пробег) описывает её крутизну, а точка пересечения с осью y — где она пересекает ось y.",
        contentKk: "Функция әр кіріске дәл бір шығыс береді: f(x) = өрнек. Сызықтық функция графигі — түзу сызық; квадраттық функция — парабола. Түзудің еңісі (m = көтерілу/жүгіру) оның тіктігін сипаттайды, ал y-ке қиылысу нүктесі — ол y осін қиятын жер.",
        keyFormulas: [
          {
            formula: "y = mx + b (slope-intercept form)",
            description: "Linear function where m is slope and b is y-intercept",
            descriptionRu: "Линейная функция, где m — наклон, b — пересечение с осью y",
            descriptionKk: "Сызықтық функция, мұнда m — еңіс, b — y-ке қиылысу"
          },
          {
            formula: "m = (y₂ − y₁) / (x₂ − x₁)",
            description: "Slope formula from two points",
            descriptionRu: "Формула наклона по двум точкам",
            descriptionKk: "Екі нүкте бойынша еңіс формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the slope and y-intercept of y = −2x + 5.",
            questionRu: "Найдите наклон и пересечение с осью y для y = −2x + 5.",
            questionKk: "y = −2x + 5 функциясының еңісі мен y-ке қиылысуын табыңыз.",
            steps: [
              { en: "Compare with y = mx + b: m = −2 (slope), b = 5 (y-intercept)", ru: "Сравним с y = mx + b: m = −2 (наклон), b = 5 (пересечение)", kk: "y = mx + b-мен салыстырамыз: m = −2 (еңіс), b = 5 (y-ке қиылысу)" },
              { en: "The line falls 2 units for every 1 unit right, and crosses the y-axis at (0, 5).", ru: "Прямая спускается на 2 единицы при движении вправо на 1 и пересекает ось y в (0, 5).", kk: "Түзу оңға 1 бірлік жылжығанда 2 бірлік төмендейді және y осін (0, 5)-те қиады." }
            ],
            answer: "Slope = −2, y-intercept = 5",
            answerRu: "Наклон = −2, пересечение с осью y = 5",
            answerKk: "Еңіс = −2, y осімен қиылысу = 5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If f(x) = 3x + 1, find f(4).",
            questionRu: "Если f(x) = 3x + 1, найдите f(4).",
            questionKk: "Егер f(x) = 3x + 1 болса, f(4) табыңыз.",
            answer: "13",
            answerRu: "13",
            answerKk: "13",
            hint: "Substitute x = 4: 3(4) + 1",
            hintRu: "Подставьте x = 4: 3(4) + 1",
            hintKk: "x = 4 қойыңыз: 3(4) + 1",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the slope of the line passing through (1, 3) and (4, 9).",
            questionRu: "Найдите наклон прямой, проходящей через (1, 3) и (4, 9).",
            questionKk: "(1, 3) мен (4, 9) арқылы өтетін түзудің еңісін табыңыз.",
            answer: "2",
            answerRu: "2",
            answerKk: "2",
            hint: "m = (9−3)/(4−1) = 6/3",
            hintRu: "m = (9−3)/(4−1) = 6/3",
            hintKk: "m = (9−3)/(4−1) = 6/3",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Write the equation of a line with slope 3 that passes through (2, 7).",
            questionRu: "Напишите уравнение прямой с наклоном 3, проходящей через (2, 7).",
            questionKk: "Еңісі 3 болатын және (2, 7) нүктесі арқылы өтетін түзу теңдеуін жазыңыз.",
            answer: "y = 3x + 1",
            answerRu: "y = 3x + 1",
            answerKk: "y = 3x + 1",
            hint: "Use point-slope: y − 7 = 3(x − 2), then simplify",
            hintRu: "Используйте y − 7 = 3(x − 2), затем упростите",
            hintKk: "y − 7 = 3(x − 2) қолданыңыз, содан кейін жеңілдетіңіз",
            xp: 20
          }
        ]
      },
      // ── 10-4 Circle Geometry ──
      {
        title: "Circle Geometry",
        titleRu: "Геометрия окружности",
        titleKk: "Шеңбер геометриясы",
        content: "A circle is defined by its center and radius. The circumference is C = 2πr and the area is A = πr². A chord is a line segment with both endpoints on the circle. A tangent line touches the circle at exactly one point and is perpendicular to the radius at that point.",
        contentRu: "Окружность определяется центром и радиусом. Длина окружности C = 2πr, площадь A = πr². Хорда — отрезок с концами на окружности. Касательная линия касается окружности в одной точке и перпендикулярна радиусу в этой точке.",
        contentKk: "Шеңбер орталығымен және радиусымен анықталады. Шеңбердің ұзындығы C = 2πr, ауданы A = πr². Хорда — екі ұшы шеңберде жатқан кесінді. Жанама сызық шеңберді бір нүктеде қиып, сол нүктеде радиусқа перпендикуляр.",
        keyFormulas: [
          {
            formula: "C = 2πr; A = πr²",
            description: "Circumference and area of a circle",
            descriptionRu: "Длина окружности и площадь круга",
            descriptionKk: "Шеңбер ұзындығы мен дөңгелек ауданы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the area and circumference of a circle with radius 7 cm. (Use π ≈ 22/7)",
            questionRu: "Найдите площадь и длину окружности с радиусом 7 см. (π ≈ 22/7)",
            questionKk: "Радиусы 7 см шеңбердің ауданы мен ұзындығын табыңыз. (π ≈ 22/7)",
            steps: [
              { en: "C = 2πr = 2 × (22/7) × 7 = 44 cm", ru: "C = 2πr = 2 × (22/7) × 7 = 44 см", kk: "C = 2πr = 2 × (22/7) × 7 = 44 см" },
              { en: "A = πr² = (22/7) × 49 = 154 cm²", ru: "A = πr² = (22/7) × 49 = 154 см²", kk: "A = πr² = (22/7) × 49 = 154 см²" }
            ],
            answer: "C = 44 cm, A = 154 cm²",
            answerRu: "C = 44 см, A = 154 см²",
            answerKk: "C = 44 см, A = 154 см²"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the circumference of a circle with diameter 10 cm. (Use π ≈ 3.14)",
            questionRu: "Найдите длину окружности с диаметром 10 см. (π ≈ 3,14)",
            questionKk: "Диаметрі 10 см шеңбер ұзындығын табыңыз. (π ≈ 3,14)",
            answer: "31.4 cm",
            answerRu: "31.4 см",
            answerKk: "31.4 см",
            hint: "C = πd or C = 2πr where r = 5",
            hintRu: "C = πd или C = 2πr где r = 5",
            hintKk: "C = πd немесе C = 2πr мұнда r = 5",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A circle has area 50.24 cm². Find its radius. (Use π ≈ 3.14)",
            questionRu: "Площадь круга 50,24 см². Найдите радиус. (π ≈ 3,14)",
            questionKk: "Дөңгелектің ауданы 50,24 см². Радиусын табыңыз. (π ≈ 3,14)",
            answer: "4 cm",
            answerRu: "4 см",
            answerKk: "4 см",
            hint: "r² = A/π = 50.24/3.14 = 16",
            hintRu: "r² = A/π = 50,24/3,14 = 16",
            hintKk: "r² = A/π = 50,24/3,14 = 16",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A circular garden has radius 10 m. A path 2 m wide is built around it. Find the area of the path. (Use π ≈ 3.14)",
            questionRu: "Радиус круглого сада 10 м. Вокруг построена дорожка шириной 2 м. Найдите площадь дорожки.",
            questionKk: "Дөңгелек бақтың радиусы 10 м. Айналасына 2 м ені жол салынған. Жолдың ауданын табыңыз.",
            answer: "138.16 m²",
            answerRu: "138.16 м²",
            answerKk: "138.16 м²",
            hint: "Path area = π(R²) − π(r²) = π(12² − 10²) = π × 44",
            hintRu: "Площадь = π(R²) − π(r²) = π(144 − 100) = π × 44",
            hintKk: "Аудан = π(R²) − π(r²) = π(144 − 100) = π × 44",
            xp: 20
          }
        ]
      },
      // ── 10-5 Trigonometry Basics ──
      {
        title: "Trigonometry Basics",
        titleRu: "Основы тригонометрии",
        titleKk: "Тригонометрия негіздері",
        content: "Trigonometry studies relationships between angles and sides of triangles. In a right triangle, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent (SOH-CAH-TOA). These ratios allow you to find unknown sides or angles when given partial information.",
        contentRu: "Тригонометрия изучает связи между углами и сторонами треугольников. В прямоугольном треугольнике sin θ = противолежащий/гипотенуза, cos θ = прилежащий/гипотенуза, tan θ = противолежащий/прилежащий (SOH-CAH-TOA). Эти соотношения позволяют находить неизвестные стороны или углы.",
        contentKk: "Тригонометрия үшбұрыштардың бұрыштары мен қабырғалары арасындағы байланысты зерттейді. Тікбұрышты үшбұрышта sin θ = қарсы/гипотенуза, cos θ = іргелес/гипотенуза, tan θ = қарсы/іргелес (SOH-CAH-TOA). Бұл қатынастар ішінара ақпарат берілгенде белгісіз қабырғаларды немесе бұрыштарды табуға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "sin θ = opp/hyp; cos θ = adj/hyp; tan θ = opp/adj",
            description: "SOH-CAH-TOA trigonometric ratios",
            descriptionRu: "Тригонометрические соотношения SOH-CAH-TOA",
            descriptionKk: "SOH-CAH-TOA тригонометриялық қатынастар"
          },
          {
            formula: "sin²θ + cos²θ = 1",
            description: "Fundamental trigonometric identity",
            descriptionRu: "Основное тригонометрическое тождество",
            descriptionKk: "Негізгі тригонометриялық тепе-теңдік"
          }
        ],
        solvedExamples: [
          {
            question: "In a right triangle, the angle is 30° and the hypotenuse is 10. Find the opposite side.",
            questionRu: "В прямоугольном треугольнике угол 30°, гипотенуза 10. Найдите противолежащий катет.",
            questionKk: "Тікбұрышты үшбұрышта бұрыш 30°, гипотенуза 10. Қарсы қабырғаны табыңыз.",
            steps: [
              { en: "sin 30° = opposite/hypotenuse → 0.5 = opposite/10", ru: "sin 30° = противолежащий/гипотенуза → 0,5 = противолежащий/10", kk: "sin 30° = қарсы/гипотенуза → 0,5 = қарсы/10" },
              { en: "opposite = 10 × 0.5 = 5", ru: "противолежащий = 10 × 0,5 = 5", kk: "қарсы = 10 × 0,5 = 5" }
            ],
            answer: "5",
            answerRu: "5",
            answerKk: "5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is sin 90°?",
            questionRu: "Чему равен sin 90°?",
            questionKk: "sin 90° неге тең?",
            answer: "1",
            answerRu: "1",
            answerKk: "1",
            hint: "At 90° the opposite side equals the hypotenuse",
            hintRu: "При 90° противолежащая сторона равна гипотенузе",
            hintKk: "90°-та қарсы қабырға гипотенузаға тең",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "In a right triangle, the opposite side is 5 and the adjacent side is 12. Find tan θ.",
            questionRu: "В прямоугольном треугольнике противолежащий катет 5, прилежащий 12. Найдите tan θ.",
            questionKk: "Тікбұрышты үшбұрышта қарсы қабырға 5, іргелес 12. tan θ табыңыз.",
            answer: "5/12 ≈ 0.417",
            answerRu: "5/12 ≈ 0.417",
            answerKk: "5/12 ≈ 0.417",
            hint: "tan θ = opposite/adjacent",
            hintRu: "tan θ = противолежащий/прилежащий",
            hintKk: "tan θ = қарсы/іргелес",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A ladder 13 m long leans against a wall, touching it at 12 m height. Find the angle the ladder makes with the ground.",
            questionRu: "Лестница длиной 13 м прислонена к стене на высоте 12 м. Найдите угол между лестницей и землёй.",
            questionKk: "13 м баспалдақ қабырғаға 12 м биіктікте тіреліп тұр. Баспалдақтың жермен жасайтын бұрышын табыңыз.",
            answer: "≈ 67.4°",
            answerRu: "≈ 67.4°",
            answerKk: "≈ 67.4°",
            hint: "sin θ = 12/13 → θ = arcsin(12/13)",
            hintRu: "sin θ = 12/13 → θ = arcsin(12/13)",
            hintKk: "sin θ = 12/13 → θ = arcsin(12/13)",
            xp: 20
          }
        ]
      },
      // ── 10-6 Kinematics ──
      {
        title: "Kinematics",
        titleRu: "Кинематика",
        titleKk: "Кинематика",
        content: "Kinematics describes motion using equations that relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t). These SUVAT equations work for uniformly accelerated motion. A common case is free fall, where acceleration equals g ≈ 9.8 m/s².",
        contentRu: "Кинематика описывает движение с помощью уравнений, связывающих перемещение (s), начальную скорость (u), конечную скорость (v), ускорение (a) и время (t). Эти уравнения SUVAT работают для равноускоренного движения. Частный случай — свободное падение, где a = g ≈ 9,8 м/с².",
        contentKk: "Кинематика қозғалысты орын ауыстыру (s), бастапқы жылдамдық (u), соңғы жылдамдық (v), үдеу (a) және уақыт (t) байланыстыратын теңдеулермен сипаттайды. Бұл SUVAT теңдеулері біркелкі үдемелі қозғалыс үшін жұмыс істейді. Жиі кездесетін жағдай — еркін түсу, мұнда a = g ≈ 9,8 м/с².",
        keyFormulas: [
          {
            formula: "v = u + at; s = ut + ½at²; v² = u² + 2as",
            description: "SUVAT equations for uniform acceleration",
            descriptionRu: "Уравнения SUVAT для равноускоренного движения",
            descriptionKk: "Біркелкі үдемелі қозғалыс үшін SUVAT теңдеулері"
          }
        ],
        solvedExamples: [
          {
            question: "A car starts from rest and accelerates at 2 m/s² for 8 seconds. Find the distance traveled.",
            questionRu: "Автомобиль стартует с места с ускорением 2 м/с² в течение 8 секунд. Найдите пройденный путь.",
            questionKk: "Автокөлік тыныштықтан 2 м/с² үдеумен 8 секунд жүреді. Жүрілген қашықтықты табыңыз.",
            steps: [
              { en: "u = 0, a = 2, t = 8. Use s = ut + ½at² = 0 + ½(2)(64)", ru: "u = 0, a = 2, t = 8. s = ut + ½at² = 0 + ½(2)(64)", kk: "u = 0, a = 2, t = 8. s = ut + ½at² = 0 + ½(2)(64)" },
              { en: "s = 64 m", ru: "s = 64 м", kk: "s = 64 м" }
            ],
            answer: "64 m",
            answerRu: "64 м",
            answerKk: "64 м"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A car accelerates from 0 to 20 m/s in 5 seconds. What is the acceleration?",
            questionRu: "Автомобиль разгоняется с 0 до 20 м/с за 5 секунд. Каково ускорение?",
            questionKk: "Автокөлік 0-ден 20 м/с-ке 5 секундта үдейді. Үдеуі қандай?",
            answer: "4 m/s²",
            answerRu: "4 м/с²",
            answerKk: "4 м/с²",
            hint: "a = (v − u)/t = 20/5",
            hintRu: "a = (v − u)/t = 20/5",
            hintKk: "a = (v − u)/t = 20/5",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "An object is dropped from rest. How far does it fall in 3 seconds? (g = 10 m/s²)",
            questionRu: "Объект падает из состояния покоя. Какой путь он пройдёт за 3 секунды? (g = 10 м/с²)",
            questionKk: "Нысан тыныштықтан түседі. 3 секундта қанша қашықтыққа түседі? (g = 10 м/с²)",
            answer: "45 m",
            answerRu: "45 м",
            answerKk: "45 м",
            hint: "s = ½gt² = ½ × 10 × 9",
            hintRu: "s = ½gt² = ½ × 10 × 9",
            hintKk: "s = ½gt² = ½ × 10 × 9",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A ball is thrown upward at 30 m/s. How high does it go before stopping? (g = 10 m/s²)",
            questionRu: "Мяч брошен вверх со скоростью 30 м/с. На какую высоту он поднимется? (g = 10 м/с²)",
            questionKk: "Доп 30 м/с жылдамдықпен жоғары лақтырылды. Қандай биіктікке көтеріледі? (g = 10 м/с²)",
            answer: "45 m",
            answerRu: "45 м",
            answerKk: "45 м",
            hint: "At max height v = 0. Use v² = u² − 2gs → s = u²/(2g)",
            hintRu: "На максимальной высоте v = 0. v² = u² − 2gs → s = u²/(2g)",
            hintKk: "Максимал биіктікте v = 0. v² = u² − 2gs → s = u²/(2g)",
            xp: 20
          }
        ]
      },
      // ── 10-7 Electricity Basics ──
      {
        title: "Electricity Basics",
        titleRu: "Основы электричества",
        titleKk: "Электр негіздері",
        content: "Electric current (I) is the flow of charge through a conductor. Voltage (V) is the energy per unit charge that drives the current. Resistance (R) opposes the flow. Ohm's law (V = IR) connects all three. Power is calculated as P = VI, representing the rate of energy use.",
        contentRu: "Электрический ток (I) — поток заряда через проводник. Напряжение (V) — энергия на единицу заряда, которая приводит ток в движение. Сопротивление (R) препятствует потоку. Закон Ома (V = IR) связывает все три величины. Мощность P = VI — скорость использования энергии.",
        contentKk: "Электр тогы (I) — өткізгіш арқылы зарядтың ағуы. Кернеу (V) — токты қозғайтын заряд бірлігіне шаққандағы энергия. Кедергі (R) ағынға қарсы тұрады. Ом заңы (V = IR) үшеуін байланыстырады. Қуат P = VI — энергияны пайдалану жылдамдығы.",
        keyFormulas: [
          {
            formula: "V = I × R; P = V × I",
            description: "Ohm's law and electrical power",
            descriptionRu: "Закон Ома и электрическая мощность",
            descriptionKk: "Ом заңы және электр қуаты"
          }
        ],
        solvedExamples: [
          {
            question: "A 12V battery is connected to a 4Ω resistor. Find the current and power.",
            questionRu: "Батарея 12В подключена к резистору 4 Ом. Найдите ток и мощность.",
            questionKk: "12В батарея 4Ω кедергіге қосылған. Ток пен қуатты табыңыз.",
            steps: [
              { en: "I = V/R = 12/4 = 3 A", ru: "I = V/R = 12/4 = 3 А", kk: "I = V/R = 12/4 = 3 А" },
              { en: "P = VI = 12 × 3 = 36 W", ru: "P = VI = 12 × 3 = 36 Вт", kk: "P = VI = 12 × 3 = 36 Вт" }
            ],
            answer: "I = 3 A, P = 36 W",
            answerRu: "I = 3 А, P = 36 Вт",
            answerKk: "I = 3 А, P = 36 Вт"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A 6V battery drives 2 A of current. What is the resistance?",
            questionRu: "Батарея 6В даёт ток 2 А. Каково сопротивление?",
            questionKk: "6В батарея 2 А ток береді. Кедергі қандай?",
            answer: "3 Ω",
            answerRu: "3 Ом",
            answerKk: "3 Ом",
            hint: "R = V/I",
            hintRu: "R = V/I",
            hintKk: "R = V/I",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A device uses 60 W of power at 120 V. What current does it draw?",
            questionRu: "Устройство потребляет 60 Вт при 120 В. Какой ток оно потребляет?",
            questionKk: "Құрылғы 120В-та 60 Вт қуат пайдаланады. Қанша ток жұмсайды?",
            answer: "0.5 A",
            answerRu: "0.5 А",
            answerKk: "0.5 А",
            hint: "I = P/V = 60/120",
            hintRu: "I = P/V = 60/120",
            hintKk: "I = P/V = 60/120",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Two resistors (6Ω and 3Ω) are connected in parallel to a 12V battery. Find the total current.",
            questionRu: "Два резистора (6 Ом и 3 Ом) параллельно подключены к 12В батарее. Найдите общий ток.",
            questionKk: "Екі кедергі (6Ω және 3Ω) 12В батареяға параллель қосылған. Жалпы токты табыңыз.",
            answer: "6 A",
            answerRu: "6 А",
            answerKk: "6 А",
            hint: "1/R_total = 1/6 + 1/3 = 1/2, so R = 2Ω. I = 12/2 = 6",
            hintRu: "1/R = 1/6 + 1/3 = 1/2, R = 2Ω. I = 12/2 = 6",
            hintKk: "1/R = 1/6 + 1/3 = 1/2, R = 2Ω. I = 12/2 = 6",
            xp: 20
          }
        ]
      },
      // ── 10-8 Stoichiometry ──
      {
        title: "Stoichiometry",
        titleRu: "Стехиометрия",
        titleKk: "Стехиометрия",
        content: "Stoichiometry uses balanced equations to calculate quantities of reactants and products. The mole (6.022 × 10²³ particles) bridges the gap between atomic-scale and lab-scale amounts. Molar mass (g/mol) converts between grams and moles. Coefficients in balanced equations give mole ratios for calculations.",
        contentRu: "Стехиометрия использует уравненные реакции для расчёта количеств реагентов и продуктов. Моль (6,022 × 10²³ частиц) связывает атомный и лабораторный масштабы. Молярная масса (г/моль) переводит между граммами и молями. Коэффициенты уравнения дают мольные соотношения для расчётов.",
        contentKk: "Стехиометрия теңестірілген теңдеулерді реагенттер мен өнімдердің мөлшерін есептеу үшін пайдаланады. Моль (6,022 × 10²³ бөлшек) атомдық және зертханалық масштабтарды байланыстырады. Молярлық масса (г/моль) граммдар мен мольдер арасын ауыстырады. Теңдеу коэффициенттері есептеу үшін моль қатынастарын береді.",
        keyFormulas: [
          {
            formula: "n = m / M (moles = mass / molar mass)",
            description: "Converting mass to moles",
            descriptionRu: "Перевод массы в моли",
            descriptionKk: "Массаны мольге ауыстыру"
          }
        ],
        solvedExamples: [
          {
            question: "How many moles are in 44 g of CO₂? (Molar mass of CO₂ = 44 g/mol)",
            questionRu: "Сколько молей в 44 г CO₂? (Молярная масса CO₂ = 44 г/моль)",
            questionKk: "44 г CO₂-да қанша моль бар? (CO₂ молярлық массасы = 44 г/моль)",
            steps: [
              { en: "n = m/M = 44/44", ru: "n = m/M = 44/44", kk: "n = m/M = 44/44" },
              { en: "n = 1 mol", ru: "n = 1 моль", kk: "n = 1 моль" }
            ],
            answer: "1 mol",
            answerRu: "1 моль",
            answerKk: "1 моль"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How many moles are in 18 g of water (H₂O)? (M = 18 g/mol)",
            questionRu: "Сколько молей в 18 г воды (H₂O)? (M = 18 г/моль)",
            questionKk: "18 г суда (H₂O) қанша моль бар? (M = 18 г/моль)",
            answer: "1 mol",
            answerRu: "1 моль",
            answerKk: "1 моль",
            hint: "n = m/M = 18/18",
            hintRu: "n = m/M = 18/18",
            hintKk: "n = m/M = 18/18",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What mass of NaCl contains 0.5 mol? (M = 58.5 g/mol)",
            questionRu: "Какая масса NaCl содержит 0,5 моль? (M = 58,5 г/моль)",
            questionKk: "0,5 моль NaCl-дің массасы қандай? (M = 58,5 г/моль)",
            answer: "29.25 g",
            answerRu: "29.25 г",
            answerKk: "29.25 г",
            hint: "m = n × M = 0.5 × 58.5",
            hintRu: "m = n × M = 0,5 × 58,5",
            hintKk: "m = n × M = 0,5 × 58,5",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In 2H₂ + O₂ → 2H₂O, how many grams of water are produced from 4 g of H₂? (M_H₂=2, M_H₂O=18)",
            questionRu: "В реакции 2H₂ + O₂ → 2H₂O, сколько граммов воды получится из 4 г H₂?",
            questionKk: "2H₂ + O₂ → 2H₂O реакциясында 4 г H₂-ден қанша грамм су түзіледі?",
            answer: "36 g",
            answerRu: "36 г",
            answerKk: "36 г",
            hint: "4g H₂ = 2 mol. Ratio is 2:2, so 2 mol H₂O. Mass = 2 × 18 = 36 g",
            hintRu: "4г H₂ = 2 моль. Соотношение 2:2, значит 2 моль H₂O. m = 2 × 18 = 36 г",
            hintKk: "4г H₂ = 2 моль. Қатынас 2:2, демек 2 моль H₂O. m = 2 × 18 = 36 г",
            xp: 20
          }
        ]
      },
      // ── 10-9 Acids & Bases ──
      {
        title: "Acids & Bases",
        titleRu: "Кислоты и основания",
        titleKk: "Қышқылдар мен негіздер",
        content: "Acids donate hydrogen ions (H⁺) and have pH below 7; bases accept H⁺ ions and have pH above 7. The pH scale runs from 0 (strongly acidic) to 14 (strongly basic), with 7 being neutral. Neutralization is the reaction between an acid and a base producing salt and water.",
        contentRu: "Кислоты отдают ионы водорода (H⁺) и имеют pH ниже 7; основания принимают H⁺ и имеют pH выше 7. Шкала pH от 0 (сильная кислота) до 14 (сильное основание), 7 — нейтральная среда. Нейтрализация — реакция кислоты и основания с образованием соли и воды.",
        contentKk: "Қышқылдар сутегі иондарын (H⁺) береді және pH 7-ден төмен; негіздер H⁺ иондарын қабылдайды және pH 7-ден жоғары. pH шкаласы 0-ден (күшті қышқыл) 14-ке (күшті негіз) дейін, 7 — бейтарап. Бейтараптандыру — қышқыл мен негіздің тұз бен су түзетін реакциясы.",
        keyFormulas: [
          {
            formula: "Acid + Base → Salt + Water",
            description: "Neutralization reaction",
            descriptionRu: "Реакция нейтрализации",
            descriptionKk: "Бейтараптандыру реакциясы"
          },
          {
            formula: "pH = −log[H⁺]",
            description: "pH calculation from hydrogen ion concentration",
            descriptionRu: "Расчёт pH по концентрации ионов водорода",
            descriptionKk: "Сутегі иондарының концентрациясынан pH есептеу"
          }
        ],
        solvedExamples: [
          {
            question: "What is the pH of a solution with [H⁺] = 0.001 M?",
            questionRu: "Каков pH раствора с [H⁺] = 0,001 М?",
            questionKk: "[H⁺] = 0,001 M болатын ерітіндінің pH-ы қандай?",
            steps: [
              { en: "pH = −log[H⁺] = −log(0.001) = −log(10⁻³)", ru: "pH = −log[H⁺] = −log(0,001) = −log(10⁻³)", kk: "pH = −log[H⁺] = −log(0,001) = −log(10⁻³)" },
              { en: "pH = 3 (acidic)", ru: "pH = 3 (кислая среда)", kk: "pH = 3 (қышқыл орта)" }
            ],
            answer: "pH = 3",
            answerRu: "pH = 3",
            answerKk: "pH = 3"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is a solution with pH 9 acidic, basic, or neutral?",
            questionRu: "Раствор с pH 9 — кислый, щелочной или нейтральный?",
            questionKk: "pH 9 ерітіндісі қышқыл, негіздік пе, бейтарап па?",
            answer: "Basic (alkaline)",
            answerRu: "Щелочной (основный)",
            answerKk: "Негіздік (сілтілік)",
            hint: "pH > 7 means basic",
            hintRu: "pH > 7 означает щелочную среду",
            hintKk: "pH > 7 негіздік ортаны білдіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Write the neutralization reaction: HCl + NaOH → ?",
            questionRu: "Напишите реакцию нейтрализации: HCl + NaOH → ?",
            questionKk: "Бейтараптандыру реакциясын жазыңыз: HCl + NaOH → ?",
            answer: "HCl + NaOH → NaCl + H₂O",
            answerRu: "HCl + NaOH → NaCl + H₂O",
            answerKk: "HCl + NaOH → NaCl + H₂O",
            hint: "Acid + base → salt + water",
            hintRu: "Кислота + основание → соль + вода",
            hintKk: "Қышқыл + негіз → тұз + су",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If pH = 5, what is the hydrogen ion concentration [H⁺]?",
            questionRu: "Если pH = 5, какова концентрация ионов водорода [H⁺]?",
            questionKk: "Егер pH = 5 болса, сутегі иондарының концентрациясы [H⁺] қандай?",
            answer: "10⁻⁵ M = 0.00001 M",
            answerRu: "10⁻⁵ M = 0.00001 M",
            answerKk: "10⁻⁵ M = 0.00001 M",
            hint: "[H⁺] = 10^(−pH) = 10⁻⁵",
            hintRu: "[H⁺] = 10^(−pH) = 10⁻⁵",
            hintKk: "[H⁺] = 10^(−pH) = 10⁻⁵",
            xp: 20
          }
        ]
      },
      // ── 10-10 Genetics & DNA ──
      {
        title: "Genetics & DNA",
        titleRu: "Генетика и ДНК",
        titleKk: "Генетика мен ДНҚ",
        content: "DNA is a double-helix molecule that carries genetic instructions. It is made of nucleotides, each containing a sugar, phosphate, and one of four bases: adenine (A), thymine (T), cytosine (C), guanine (G). Base pairing rules (A-T, C-G) allow DNA to replicate. Mendel's laws explain how traits are inherited through dominant and recessive alleles.",
        contentRu: "ДНК — молекула в виде двойной спирали, несущая генетические инструкции. Она состоит из нуклеотидов, каждый из которых содержит сахар, фосфат и одно из четырёх оснований: аденин (A), тимин (T), цитозин (C), гуанин (G). Правила спаривания (A-T, C-G) позволяют ДНК реплицироваться. Законы Менделя объясняют наследование через доминантные и рецессивные аллели.",
        contentKk: "ДНҚ — генетикалық нұсқауларды тасымалдайтын қос спиральді молекула. Ол нуклеотидтерден тұрады, әрқайсысында қант, фосфат және төрт негіздің бірі бар: аденин (A), тимин (T), цитозин (C), гуанин (G). Негіздердің жұптасу ережелері (A-T, C-G) ДНҚ-ның көшірілуіне мүмкіндік береді. Мендель заңдары қасиеттердің доминантты және рецессивті аллельдер арқылы қалай мұрагерлік ететінін түсіндіреді.",
        keyFormulas: [
          {
            formula: "A pairs with T; C pairs with G",
            description: "DNA base pairing rules (complementary bases)",
            descriptionRu: "Правила комплементарности оснований ДНК",
            descriptionKk: "ДНҚ негіздерінің жұптасу ережелері"
          }
        ],
        solvedExamples: [
          {
            question: "If one DNA strand reads ATCGGA, what is the complementary strand?",
            questionRu: "Если одна цепь ДНК: ATCGGA, какова комплементарная цепь?",
            questionKk: "Егер ДНҚ тізбегі ATCGGA болса, комплементарлы тізбегі қандай?",
            steps: [
              { en: "Apply base pairing: A→T, T→A, C→G, G→C, G→C, A→T", ru: "Применим правила: A→T, T→A, C→G, G→C, G→C, A→T", kk: "Ережелерді қолданамыз: A→T, T→A, C→G, G→C, G→C, A→T" },
              { en: "Complementary strand: TAGCCT", ru: "Комплементарная цепь: TAGCCT", kk: "Комплементарлы тізбек: TAGCCT" }
            ],
            answer: "TAGCCT",
            answerRu: "TAGCCT",
            answerKk: "TAGCCT"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What base pairs with adenine (A) in DNA?",
            questionRu: "Какое основание спаривается с аденином (A) в ДНК?",
            questionKk: "ДНҚ-да аденинмен (A) қандай негіз жұптасады?",
            answer: "Thymine (T)",
            answerRu: "Тимин (T)",
            answerKk: "Тимин (T)",
            hint: "A always pairs with T in DNA",
            hintRu: "A всегда спаривается с T в ДНК",
            hintKk: "ДНҚ-да A әрқашан T-мен жұптасады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Two heterozygous parents (Bb × Bb) have a child. What is the probability of a homozygous recessive (bb) child?",
            questionRu: "Два гетерозиготных родителя (Bb × Bb). Какова вероятность гомозиготного рецессивного (bb) ребёнка?",
            questionKk: "Екі гетерозиготты ата-ана (Bb × Bb). Гомозиготты рецессивті (bb) бала ықтималдығы қандай?",
            answer: "25% (1/4)",
            answerRu: "25% (1/4)",
            answerKk: "25% (1/4)",
            hint: "Use a Punnett square: BB, Bb, Bb, bb",
            hintRu: "Используйте решётку Пеннета: BB, Bb, Bb, bb",
            hintKk: "Пеннет торын қолданыңыз: BB, Bb, Bb, bb",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If a DNA sample has 30% adenine, what percentage is cytosine?",
            questionRu: "Если в образце ДНК 30% аденина, каков процент цитозина?",
            questionKk: "Егер ДНҚ үлгісінде 30% аденин болса, цитозин қанша пайыз?",
            answer: "20%",
            answerRu: "20%",
            answerKk: "20%",
            hint: "A = T = 30%, so C + G = 40%. Since C = G, each is 20%",
            hintRu: "A = T = 30%, значит C + G = 40%. Поскольку C = G, каждый = 20%",
            hintKk: "A = T = 30%, демек C + G = 40%. C = G болғандықтан, әрқайсысы = 20%",
            xp: 20
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // GRADE 11 — Pre-Calculus, Physics & Life Sciences
  // ═══════════════════════════════════════════════
  "Core Sciences_11": {
    planetName: "Core Sciences",
    introduction: {
      en: "Explore exponential and logarithmic functions, probability, waves, thermodynamics, organic chemistry, and ecology. These topics deepen your analytical skills and prepare you for university-level courses.",
      ru: "Изучите экспоненциальные и логарифмические функции, вероятность, волны, термодинамику, органическую химию и экологию. Эти темы углубят ваши аналитические навыки и подготовят к университету."
    },
    sections: [
      // ── 11-1 Exponential Functions ──
      {
        title: "Exponential Functions",
        titleRu: "Экспоненциальные функции",
        titleKk: "Экспоненциалдық функциялар",
        content: "An exponential function has the form f(x) = a·bˣ, where b > 0 and b ≠ 1. When b > 1 the function grows; when 0 < b < 1 it decays. Exponential growth models populations, compound interest, and radioactive decay. The natural base e ≈ 2.718 is especially important in calculus.",
        contentRu: "Экспоненциальная функция имеет вид f(x) = a·bˣ, где b > 0 и b ≠ 1. При b > 1 функция растёт; при 0 < b < 1 — убывает. Экспоненциальный рост моделирует популяции, сложные проценты и радиоактивный распад. Натуральное основание e ≈ 2,718 особенно важно в анализе.",
        contentKk: "Экспоненциалдық функцияның түрі f(x) = a·bˣ, мұнда b > 0 және b ≠ 1. b > 1 болғанда функция өседі; 0 < b < 1 болғанда азаяды. Экспоненциалдық өсу популяцияларды, күрделі пайызды және радиоактивті ыдырауды модельдейді. Табиғи негіз e ≈ 2,718 талдауда ерекше маңызды.",
        keyFormulas: [
          {
            formula: "f(x) = a·bˣ; Compound interest: A = P(1 + r/n)^(nt)",
            description: "General exponential function and compound interest formula",
            descriptionRu: "Общая экспоненциальная функция и формула сложных процентов",
            descriptionKk: "Жалпы экспоненциалдық функция және күрделі пайыз формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "You invest $1000 at 5% annual interest compounded yearly. How much after 3 years?",
            questionRu: "Вы вкладываете $1000 под 5% годовых с ежегодным начислением. Сколько через 3 года?",
            questionKk: "Сіз $1000-ды жылдық 5% пайызбен жыл сайын есептелетін салымға саласыз. 3 жылдан кейін қанша болады?",
            steps: [
              { en: "A = P(1 + r)ᵗ = 1000(1.05)³", ru: "A = P(1 + r)ᵗ = 1000(1,05)³", kk: "A = P(1 + r)ᵗ = 1000(1,05)³" },
              { en: "A = 1000 × 1.157625 ≈ $1157.63", ru: "A = 1000 × 1,157625 ≈ $1157,63", kk: "A = 1000 × 1,157625 ≈ $1157,63" }
            ],
            answer: "≈ $1157.63",
            answerRu: "≈ $1157.63",
            answerKk: "≈ $1157.63"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Evaluate: 2³",
            questionRu: "Вычислите: 2³",
            questionKk: "Есептеңіз: 2³",
            answer: "8",
            answerRu: "8",
            answerKk: "8",
            hint: "2 × 2 × 2",
            hintRu: "2 × 2 × 2",
            hintKk: "2 × 2 × 2",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A population of 500 bacteria doubles every hour. How many after 4 hours?",
            questionRu: "Популяция 500 бактерий удваивается каждый час. Сколько через 4 часа?",
            questionKk: "500 бактерия популяциясы сағат сайын екі есе артады. 4 сағаттан кейін қанша болады?",
            answer: "8000",
            answerRu: "8000",
            answerKk: "8000",
            hint: "N = 500 × 2⁴ = 500 × 16",
            hintRu: "N = 500 × 2⁴ = 500 × 16",
            hintKk: "N = 500 × 2⁴ = 500 × 16",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A radioactive substance has half-life 5 years. Starting with 200g, how much remains after 15 years?",
            questionRu: "Период полураспада 5 лет. Начальная масса 200 г. Сколько останется через 15 лет?",
            questionKk: "Жартылай ыдырау кезеңі 5 жыл. Бастапқы массасы 200 г. 15 жылдан кейін қанша қалады?",
            answer: "25 g",
            answerRu: "25 г",
            answerKk: "25 г",
            hint: "15 years = 3 half-lives. 200 × (½)³ = 200/8",
            hintRu: "15 лет = 3 периода. 200 × (½)³ = 200/8",
            hintKk: "15 жыл = 3 кезең. 200 × (½)³ = 200/8",
            xp: 20
          }
        ]
      },
      // ── 11-2 Logarithms ──
      {
        title: "Logarithms",
        titleRu: "Логарифмы",
        titleKk: "Логарифмдер",
        content: "A logarithm is the inverse of exponentiation: if bˣ = y, then log_b(y) = x. Common logarithms use base 10 (log), and natural logarithms use base e (ln). Key properties include: log(ab) = log a + log b, log(a/b) = log a − log b, and log(aⁿ) = n·log a.",
        contentRu: "Логарифм — обратная операция возведению в степень: если bˣ = y, то log_b(y) = x. Десятичные логарифмы используют основание 10 (log), натуральные — основание e (ln). Ключевые свойства: log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n·log a.",
        contentKk: "Логарифм — дәрежеге шығарудың кері амалы: егер bˣ = y болса, log_b(y) = x. Ондық логарифмдер 10 негізін (log), натурал логарифмдер e негізін (ln) пайдаланады. Негізгі қасиеттер: log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n·log a.",
        keyFormulas: [
          {
            formula: "log_b(y) = x ↔ bˣ = y",
            description: "Definition of logarithm",
            descriptionRu: "Определение логарифма",
            descriptionKk: "Логарифмнің анықтамасы"
          },
          {
            formula: "log(ab) = log a + log b; log(aⁿ) = n·log a",
            description: "Product and power rules of logarithms",
            descriptionRu: "Свойства произведения и степени логарифмов",
            descriptionKk: "Логарифмдердің көбейтінді және дәреже қасиеттері"
          }
        ],
        solvedExamples: [
          {
            question: "Solve: log₂(x) = 5",
            questionRu: "Решите: log₂(x) = 5",
            questionKk: "Шешіңіз: log₂(x) = 5",
            steps: [
              { en: "Convert to exponential form: 2⁵ = x", ru: "Переведём в экспоненциальную форму: 2⁵ = x", kk: "Экспоненциалдық түрге ауыстырамыз: 2⁵ = x" },
              { en: "x = 32", ru: "x = 32", kk: "x = 32" }
            ],
            answer: "x = 32",
            answerRu: "x = 32",
            answerKk: "x = 32"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is log₁₀(1000)?",
            questionRu: "Чему равен log₁₀(1000)?",
            questionKk: "log₁₀(1000) неге тең?",
            answer: "3",
            answerRu: "3",
            answerKk: "3",
            hint: "10³ = 1000",
            hintRu: "10³ = 1000",
            hintKk: "10³ = 1000",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Simplify: log₂(8) + log₂(4)",
            questionRu: "Упростите: log₂(8) + log₂(4)",
            questionKk: "Жеңілдетіңіз: log₂(8) + log₂(4)",
            answer: "5",
            answerRu: "5",
            answerKk: "5",
            hint: "log₂(8) = 3, log₂(4) = 2; or use log(8×4) = log₂(32) = 5",
            hintRu: "log₂(8) = 3, log₂(4) = 2; или log(8×4) = log₂(32) = 5",
            hintKk: "log₂(8) = 3, log₂(4) = 2; немесе log(8×4) = log₂(32) = 5",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Solve: 3ˣ = 81",
            questionRu: "Решите: 3ˣ = 81",
            questionKk: "Шешіңіз: 3ˣ = 81",
            answer: "x = 4",
            answerRu: "x = 4",
            answerKk: "x = 4",
            hint: "Take log base 3 of both sides, or recognize 3⁴ = 81",
            hintRu: "Возьмите логарифм по основанию 3 или вспомните, что 3⁴ = 81",
            hintKk: "Екі жағынан 3 негізді логарифм алыңыз немесе 3⁴ = 81 екенін еске алыңыз",
            xp: 20
          }
        ]
      },
      // ── 11-3 Sequences & Series ──
      {
        title: "Sequences & Series",
        titleRu: "Последовательности и ряды",
        titleKk: "Тізбектер мен қатарлар",
        content: "An arithmetic sequence has a constant difference d between terms: aₙ = a₁ + (n−1)d. A geometric sequence has a constant ratio r: aₙ = a₁·rⁿ⁻¹. The sum of an arithmetic series is Sₙ = n(a₁ + aₙ)/2. The sum of a geometric series is Sₙ = a₁(1 − rⁿ)/(1 − r) when r ≠ 1.",
        contentRu: "Арифметическая последовательность имеет постоянную разность d: aₙ = a₁ + (n−1)d. Геометрическая — постоянный знаменатель r: aₙ = a₁·rⁿ⁻¹. Сумма арифметического ряда Sₙ = n(a₁ + aₙ)/2. Сумма геометрического ряда Sₙ = a₁(1 − rⁿ)/(1 − r) при r ≠ 1.",
        contentKk: "Арифметикалық тізбектің тұрақты айырмасы d: aₙ = a₁ + (n−1)d. Геометриялық тізбектің тұрақты еселігі r: aₙ = a₁·rⁿ⁻¹. Арифметикалық қатар қосындысы Sₙ = n(a₁ + aₙ)/2. Геометриялық қатар қосындысы Sₙ = a₁(1 − rⁿ)/(1 − r), мұнда r ≠ 1.",
        keyFormulas: [
          {
            formula: "Arithmetic: aₙ = a₁ + (n−1)d; Sₙ = n(a₁ + aₙ)/2",
            description: "nth term and sum of arithmetic sequence",
            descriptionRu: "n-й член и сумма арифметической прогрессии",
            descriptionKk: "Арифметикалық тізбектің n-ші мүшесі мен қосындысы"
          },
          {
            formula: "Geometric: aₙ = a₁·rⁿ⁻¹; Sₙ = a₁(1−rⁿ)/(1−r)",
            description: "nth term and sum of geometric sequence",
            descriptionRu: "n-й член и сумма геометрической прогрессии",
            descriptionKk: "Геометриялық тізбектің n-ші мүшесі мен қосындысы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the 10th term and sum of the first 10 terms: 3, 7, 11, 15, ...",
            questionRu: "Найдите 10-й член и сумму первых 10 членов: 3, 7, 11, 15, ...",
            questionKk: "10-шы мүшені және алғашқы 10 мүшенің қосындысын табыңыз: 3, 7, 11, 15, ...",
            steps: [
              { en: "d = 4, a₁ = 3. a₁₀ = 3 + 9(4) = 39", ru: "d = 4, a₁ = 3. a₁₀ = 3 + 9(4) = 39", kk: "d = 4, a₁ = 3. a₁₀ = 3 + 9(4) = 39" },
              { en: "S₁₀ = 10(3 + 39)/2 = 10 × 21 = 210", ru: "S₁₀ = 10(3 + 39)/2 = 10 × 21 = 210", kk: "S₁₀ = 10(3 + 39)/2 = 10 × 21 = 210" }
            ],
            answer: "a₁₀ = 39, S₁₀ = 210",
            answerRu: "a₁₀ = 39, S₁₀ = 210",
            answerKk: "a₁₀ = 39, S₁₀ = 210"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the 5th term of the arithmetic sequence: 2, 5, 8, 11, ...",
            questionRu: "Найдите 5-й член: 2, 5, 8, 11, ...",
            questionKk: "5-ші мүшені табыңыз: 2, 5, 8, 11, ...",
            answer: "14",
            answerRu: "14",
            answerKk: "14",
            hint: "d = 3, a₅ = 2 + 4(3)",
            hintRu: "d = 3, a₅ = 2 + 4(3)",
            hintKk: "d = 3, a₅ = 2 + 4(3)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the 6th term of the geometric sequence: 3, 6, 12, 24, ...",
            questionRu: "Найдите 6-й член: 3, 6, 12, 24, ...",
            questionKk: "6-шы мүшені табыңыз: 3, 6, 12, 24, ...",
            answer: "96",
            answerRu: "96",
            answerKk: "96",
            hint: "r = 2, a₆ = 3 × 2⁵ = 3 × 32",
            hintRu: "r = 2, a₆ = 3 × 2⁵ = 3 × 32",
            hintKk: "r = 2, a₆ = 3 × 2⁵ = 3 × 32",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find the sum of the first 8 terms of geometric series: 1, 2, 4, 8, ...",
            questionRu: "Найдите сумму первых 8 членов: 1, 2, 4, 8, ...",
            questionKk: "Алғашқы 8 мүшенің қосындысын табыңыз: 1, 2, 4, 8, ...",
            answer: "255",
            answerRu: "255",
            answerKk: "255",
            hint: "S₈ = 1(1 − 2⁸)/(1 − 2) = (1 − 256)/(−1) = 255",
            hintRu: "S₈ = 1(1 − 2⁸)/(1 − 2) = (1 − 256)/(−1) = 255",
            hintKk: "S₈ = 1(1 − 2⁸)/(1 − 2) = (1 − 256)/(−1) = 255",
            xp: 20
          }
        ]
      },
      // ── 11-4 Analytic Geometry ──
      {
        title: "Analytic Geometry",
        titleRu: "Аналитическая геометрия",
        titleKk: "Аналитикалық геометрия",
        content: "Analytic geometry studies conic sections — curves formed by slicing a cone. A circle has equation (x−h)² + (y−k)² = r². A parabola has the form y = ax² + bx + c with vertex at (−b/2a, f(−b/2a)). Ellipses and hyperbolas extend these ideas to describe orbits and signal reflectors.",
        contentRu: "Аналитическая геометрия изучает конические сечения — кривые, образованные сечением конуса. Уравнение окружности: (x−h)² + (y−k)² = r². Парабола: y = ax² + bx + c с вершиной в (−b/2a, f(−b/2a)). Эллипсы и гиперболы описывают орбиты и отражатели.",
        contentKk: "Аналитикалық геометрия конустық қималарды зерттейді — конусты кесу арқылы түзілетін қисықтар. Шеңбер теңдеуі: (x−h)² + (y−k)² = r². Парабола: y = ax² + bx + c, төбесі (−b/2a, f(−b/2a)). Эллипстер мен гиперболалар орбиталар мен сигнал шағылдырғыштарды сипаттайды.",
        keyFormulas: [
          {
            formula: "(x−h)² + (y−k)² = r²",
            description: "Equation of a circle with center (h,k) and radius r",
            descriptionRu: "Уравнение окружности с центром (h,k) и радиусом r",
            descriptionKk: "Орталығы (h,k) және радиусы r шеңбер теңдеуі"
          },
          {
            formula: "Vertex of parabola: x = −b/(2a)",
            description: "x-coordinate of the vertex of y = ax² + bx + c",
            descriptionRu: "x-координата вершины параболы y = ax² + bx + c",
            descriptionKk: "y = ax² + bx + c параболасы төбесінің x-координатасы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the center and radius of (x−3)² + (y+2)² = 25.",
            questionRu: "Найдите центр и радиус: (x−3)² + (y+2)² = 25.",
            questionKk: "(x−3)² + (y+2)² = 25 шеңберінің орталығы мен радиусын табыңыз.",
            steps: [
              { en: "Compare with (x−h)² + (y−k)² = r²: h = 3, k = −2", ru: "Сравним с (x−h)² + (y−k)² = r²: h = 3, k = −2", kk: "(x−h)² + (y−k)² = r²-мен салыстырамыз: h = 3, k = −2" },
              { en: "Center = (3, −2), radius = √25 = 5", ru: "Центр = (3, −2), радиус = √25 = 5", kk: "Орталық = (3, −2), радиус = √25 = 5" }
            ],
            answer: "Center (3, −2), radius 5",
            answerRu: "Центр (3, −2), радиус 5",
            answerKk: "Орталығы (3, −2), радиусы 5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the radius of a circle with equation x² + y² = 49?",
            questionRu: "Каков радиус окружности x² + y² = 49?",
            questionKk: "x² + y² = 49 шеңберінің радиусы қандай?",
            answer: "7",
            answerRu: "7",
            answerKk: "7",
            hint: "r² = 49, so r = 7",
            hintRu: "r² = 49, значит r = 7",
            hintKk: "r² = 49, демек r = 7",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the vertex of y = x² − 6x + 5.",
            questionRu: "Найдите вершину параболы y = x² − 6x + 5.",
            questionKk: "y = x² − 6x + 5 параболасының төбесін табыңыз.",
            answer: "(3, −4)",
            answerRu: "(3, −4)",
            answerKk: "(3, −4)",
            hint: "x = −b/(2a) = 6/2 = 3, then y = 9 − 18 + 5 = −4",
            hintRu: "x = −b/(2a) = 6/2 = 3, затем y = 9 − 18 + 5 = −4",
            hintKk: "x = −b/(2a) = 6/2 = 3, содан кейін y = 9 − 18 + 5 = −4",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Write the equation of a circle with center (−1, 4) passing through (2, 8).",
            questionRu: "Напишите уравнение окружности с центром (−1, 4), проходящей через (2, 8).",
            questionKk: "Орталығы (−1, 4) және (2, 8) нүктесі арқылы өтетін шеңбер теңдеуін жазыңыз.",
            answer: "(x+1)² + (y−4)² = 25",
            answerRu: "(x+1)² + (y−4)² = 25",
            answerKk: "(x+1)² + (y−4)² = 25",
            hint: "r² = (2−(−1))² + (8−4)² = 9 + 16 = 25",
            hintRu: "r² = (2−(−1))² + (8−4)² = 9 + 16 = 25",
            hintKk: "r² = (2−(−1))² + (8−4)² = 9 + 16 = 25",
            xp: 20
          }
        ]
      },
      // ── 11-5 Probability & Statistics ──
      {
        title: "Probability & Statistics",
        titleRu: "Вероятность и статистика",
        titleKk: "Ықтималдық пен статистика",
        content: "Probability measures the likelihood of an event: P = favorable outcomes / total outcomes. The mean, median, and mode are measures of central tendency. Standard deviation measures data spread. For independent events, P(A and B) = P(A) × P(B); for mutually exclusive events, P(A or B) = P(A) + P(B).",
        contentRu: "Вероятность измеряет шанс события: P = благоприятные исходы / все исходы. Среднее, медиана и мода — меры центральной тенденции. Стандартное отклонение измеряет разброс данных. Для независимых событий P(A и B) = P(A) × P(B); для несовместных P(A или B) = P(A) + P(B).",
        contentKk: "Ықтималдық оқиғаның мүмкіндігін өлшейді: P = қолайлы нәтижелер / жалпы нәтижелер. Орташа, медиана және мода — орталық тенденция өлшемдері. Стандартты ауытқу деректердің таралуын өлшейді. Тәуелсіз оқиғалар үшін P(A және B) = P(A) × P(B); өзара жоқ оқиғалар үшін P(A немесе B) = P(A) + P(B).",
        keyFormulas: [
          {
            formula: "P(event) = favorable / total",
            description: "Basic probability formula",
            descriptionRu: "Основная формула вероятности",
            descriptionKk: "Негізгі ықтималдық формуласы"
          },
          {
            formula: "Mean = Σx / n",
            description: "Arithmetic mean (average)",
            descriptionRu: "Среднее арифметическое",
            descriptionKk: "Арифметикалық орташа"
          }
        ],
        solvedExamples: [
          {
            question: "A bag has 3 red, 5 blue, and 2 green marbles. What is the probability of picking a blue marble?",
            questionRu: "В мешке 3 красных, 5 синих и 2 зелёных шарика. Какова вероятность вытащить синий?",
            questionKk: "Қапта 3 қызыл, 5 көк және 2 жасыл шар бар. Көк шар алу ықтималдығы қандай?",
            steps: [
              { en: "Total marbles = 3 + 5 + 2 = 10. Favorable (blue) = 5.", ru: "Всего шариков = 10. Благоприятных (синих) = 5.", kk: "Барлық шар = 10. Қолайлы (көк) = 5." },
              { en: "P(blue) = 5/10 = 1/2 = 0.5", ru: "P(синий) = 5/10 = 1/2 = 0,5", kk: "P(көк) = 5/10 = 1/2 = 0,5" }
            ],
            answer: "1/2 or 50%",
            answerRu: "1/2 или 50%",
            answerKk: "1/2 немесе 50%"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the probability of rolling a 6 on a fair die?",
            questionRu: "Какова вероятность выбросить 6 на честном кубике?",
            questionKk: "Адал сүйекшеден 6 түсу ықтималдығы қандай?",
            answer: "1/6",
            answerRu: "1/6",
            answerKk: "1/6",
            hint: "1 favorable outcome out of 6 possible",
            hintRu: "1 благоприятный исход из 6 возможных",
            hintKk: "6 мүмкін нәтижеден 1 қолайлы",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the mean of: 4, 7, 9, 3, 12",
            questionRu: "Найдите среднее: 4, 7, 9, 3, 12",
            questionKk: "Орташасын табыңыз: 4, 7, 9, 3, 12",
            answer: "7",
            answerRu: "7",
            answerKk: "7",
            hint: "Sum = 35, count = 5. Mean = 35/5",
            hintRu: "Сумма = 35, количество = 5. Среднее = 35/5",
            hintKk: "Қосынды = 35, саны = 5. Орташа = 35/5",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Two dice are rolled. What is the probability the sum is 7?",
            questionRu: "Брошены два кубика. Какова вероятность, что сумма равна 7?",
            questionKk: "Екі сүйекше лақтырылды. Қосындысы 7 болу ықтималдығы қандай?",
            answer: "6/36 = 1/6",
            answerRu: "6/36 = 1/6",
            answerKk: "6/36 = 1/6",
            hint: "Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes out of 36",
            hintRu: "Пары с суммой 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 из 36",
            hintKk: "Қосындысы 7 болатын жұптар: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 36-дан 6",
            xp: 20
          }
        ]
      },
      // ── 11-6 Waves & Optics ──
      {
        title: "Waves & Optics",
        titleRu: "Волны и оптика",
        titleKk: "Толқындар мен оптика",
        content: "A wave transfers energy without transferring matter. Waves have amplitude (height), wavelength (λ), frequency (f), and speed (v = fλ). Light is an electromagnetic wave that can reflect (bounce off surfaces) and refract (bend when entering a new medium). Snell's law describes refraction: n₁ sin θ₁ = n₂ sin θ₂.",
        contentRu: "Волна передаёт энергию без переноса вещества. У волн есть амплитуда (высота), длина волны (λ), частота (f) и скорость (v = fλ). Свет — электромагнитная волна, которая может отражаться и преломляться. Закон Снеллиуса описывает преломление: n₁ sin θ₁ = n₂ sin θ₂.",
        contentKk: "Толқын затты тасымалдамай энергия береді. Толқындардың амплитудасы (биіктігі), толқын ұзындығы (λ), жиілігі (f) және жылдамдығы (v = fλ) бар. Жарық — шағылуы (бетінен секіру) және сынуы (жаңа ортаға кіргенде бұрылу) мүмкін электромагниттік толқын. Снелл заңы сынуды сипаттайды: n₁ sin θ₁ = n₂ sin θ₂.",
        keyFormulas: [
          {
            formula: "v = f × λ",
            description: "Wave speed = frequency × wavelength",
            descriptionRu: "Скорость волны = частота × длина волны",
            descriptionKk: "Толқын жылдамдығы = жиілік × толқын ұзындығы"
          },
          {
            formula: "n₁ sin θ₁ = n₂ sin θ₂",
            description: "Snell's law of refraction",
            descriptionRu: "Закон преломления Снеллиуса",
            descriptionKk: "Снеллдің сыну заңы"
          }
        ],
        solvedExamples: [
          {
            question: "A wave has frequency 500 Hz and wavelength 0.6 m. Find its speed.",
            questionRu: "Волна имеет частоту 500 Гц и длину волны 0,6 м. Найдите скорость.",
            questionKk: "Толқынның жиілігі 500 Гц, толқын ұзындығы 0,6 м. Жылдамдығын табыңыз.",
            steps: [
              { en: "v = f × λ = 500 × 0.6", ru: "v = f × λ = 500 × 0,6", kk: "v = f × λ = 500 × 0,6" },
              { en: "v = 300 m/s", ru: "v = 300 м/с", kk: "v = 300 м/с" }
            ],
            answer: "300 m/s",
            answerRu: "300 м/с",
            answerKk: "300 м/с"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A wave has speed 340 m/s and frequency 170 Hz. What is its wavelength?",
            questionRu: "Скорость волны 340 м/с, частота 170 Гц. Какова длина волны?",
            questionKk: "Толқын жылдамдығы 340 м/с, жиілігі 170 Гц. Толқын ұзындығы қандай?",
            answer: "2 m",
            answerRu: "2 м",
            answerKk: "2 м",
            hint: "λ = v/f = 340/170",
            hintRu: "λ = v/f = 340/170",
            hintKk: "λ = v/f = 340/170",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Light travels from air (n=1) into glass (n=1.5) at an angle of 30°. Find the refraction angle.",
            questionRu: "Свет переходит из воздуха (n=1) в стекло (n=1,5) под углом 30°. Найдите угол преломления.",
            questionKk: "Жарық ауадан (n=1) шыныға (n=1,5) 30° бұрышпен кіреді. Сыну бұрышын табыңыз.",
            answer: "≈ 19.5°",
            answerRu: "≈ 19.5°",
            answerKk: "≈ 19.5°",
            hint: "sin θ₂ = (n₁/n₂) sin θ₁ = (1/1.5) × 0.5 = 0.333",
            hintRu: "sin θ₂ = (n₁/n₂) sin θ₁ = (1/1,5) × 0,5 = 0,333",
            hintKk: "sin θ₂ = (n₁/n₂) sin θ₁ = (1/1,5) × 0,5 = 0,333",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A sound wave (340 m/s) has wavelength 0.85 m. If it enters water where speed is 1500 m/s, what is the new wavelength?",
            questionRu: "Звуковая волна (340 м/с) с длиной 0,85 м входит в воду (1500 м/с). Какова новая длина волны?",
            questionKk: "Дыбыс толқыны (340 м/с) 0,85 м толқын ұзындығымен суға (1500 м/с) кіреді. Жаңа толқын ұзындығы қандай?",
            answer: "3.75 m",
            answerRu: "3.75 м",
            answerKk: "3.75 м",
            hint: "Frequency stays the same: f = 340/0.85 = 400 Hz. New λ = 1500/400",
            hintRu: "Частота не меняется: f = 340/0,85 = 400 Гц. Новая λ = 1500/400",
            hintKk: "Жиілік өзгермейді: f = 340/0,85 = 400 Гц. Жаңа λ = 1500/400",
            xp: 20
          }
        ]
      },
      // ── 11-7 Thermodynamics ──
      {
        title: "Thermodynamics",
        titleRu: "Термодинамика",
        titleKk: "Термодинамика",
        content: "Thermodynamics studies heat and energy transfer. The first law states energy is conserved: ΔU = Q − W (internal energy change = heat added minus work done). The second law states entropy (disorder) of an isolated system always increases. Heat flows naturally from hot to cold objects until thermal equilibrium is reached.",
        contentRu: "Термодинамика изучает тепло и передачу энергии. Первый закон: энергия сохраняется: ΔU = Q − W (изменение внутренней энергии = подведённое тепло минус работа). Второй закон: энтропия (беспорядок) изолированной системы всегда растёт. Тепло естественно течёт от горячего к холодному до теплового равновесия.",
        contentKk: "Термодинамика жылу мен энергия берілуін зерттейді. Бірінші заң: энергия сақталады: ΔU = Q − W (ішкі энергия өзгерісі = қосылған жылу минус жасалған жұмыс). Екінші заң: оқшауланған жүйенің энтропиясы (ретсіздігі) әрқашан артады. Жылу ыстық нысаннан суыққа жылулық тепе-теңдікке жеткенше ағады.",
        keyFormulas: [
          {
            formula: "Q = mcΔT",
            description: "Heat energy = mass × specific heat × temperature change",
            descriptionRu: "Тепловая энергия = масса × удельная теплоёмкость × изменение температуры",
            descriptionKk: "Жылу энергиясы = масса × меншікті жылу сыйымдылық × температура өзгерісі"
          }
        ],
        solvedExamples: [
          {
            question: "How much heat is needed to raise 2 kg of water by 30°C? (c = 4200 J/kg°C)",
            questionRu: "Сколько тепла нужно, чтобы нагреть 2 кг воды на 30°C? (c = 4200 Дж/кг°C)",
            questionKk: "2 кг суды 30°C-қа қыздыру үшін қанша жылу керек? (c = 4200 Дж/кг°C)",
            steps: [
              { en: "Q = mcΔT = 2 × 4200 × 30", ru: "Q = mcΔT = 2 × 4200 × 30", kk: "Q = mcΔT = 2 × 4200 × 30" },
              { en: "Q = 252,000 J = 252 kJ", ru: "Q = 252 000 Дж = 252 кДж", kk: "Q = 252 000 Дж = 252 кДж" }
            ],
            answer: "252 kJ",
            answerRu: "252 кДж",
            answerKk: "252 кДж"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Does heat flow from cold to hot or from hot to cold naturally?",
            questionRu: "Тепло течёт от холодного к горячему или наоборот?",
            questionKk: "Жылу суықтан ыстыққа ма, ыстықтан суыққа ма табиғи түрде ағады?",
            answer: "From hot to cold",
            answerRu: "От горячего к холодному",
            answerKk: "Ыстықтан суыққа",
            hint: "Think about what happens when you put ice in warm water",
            hintRu: "Подумайте, что происходит, когда кладёте лёд в тёплую воду",
            hintKk: "Жылы суға мұз салғанда не болатынын ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "How much heat to raise 0.5 kg of aluminum by 20°C? (c = 900 J/kg°C)",
            questionRu: "Сколько тепла для нагрева 0,5 кг алюминия на 20°C? (c = 900 Дж/кг°C)",
            questionKk: "0,5 кг алюминийді 20°C-қа қыздыру үшін қанша жылу керек? (c = 900 Дж/кг°C)",
            answer: "9000 J",
            answerRu: "9000 Дж",
            answerKk: "9000 Дж",
            hint: "Q = mcΔT = 0.5 × 900 × 20",
            hintRu: "Q = mcΔT = 0,5 × 900 × 20",
            hintKk: "Q = mcΔT = 0,5 × 900 × 20",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "50 g of metal at 100°C is placed in 200 g of water at 20°C. Final temperature is 25°C. Find the metal's specific heat. (c_water = 4200 J/kg°C)",
            questionRu: "50 г металла при 100°C помещены в 200 г воды при 20°C. Конечная температура 25°C. Найдите удельную теплоёмкость металла.",
            questionKk: "100°C-тағы 50 г металл 20°C-тағы 200 г суға салынды. Соңғы температура 25°C. Металдың меншікті жылу сыйымдылығын табыңыз.",
            answer: "≈ 1120 J/kg°C",
            answerRu: "≈ 1120 Дж/кг°C",
            answerKk: "≈ 1120 Дж/кг°C",
            hint: "Heat lost by metal = heat gained by water: 0.05×c×75 = 0.2×4200×5",
            hintRu: "Теплота металла = теплота воды: 0,05×c×75 = 0,2×4200×5",
            hintKk: "Металдың жылуы = судың жылуы: 0,05×c×75 = 0,2×4200×5",
            xp: 20
          }
        ]
      },
      // ── 11-8 Organic Chemistry ──
      {
        title: "Organic Chemistry",
        titleRu: "Органическая химия",
        titleKk: "Органикалық химия",
        content: "Organic chemistry studies carbon-based compounds. Carbon can form four bonds, creating chains, rings, and branches. Hydrocarbons contain only carbon and hydrogen: alkanes (single bonds, CₙH₂ₙ₊₂), alkenes (double bond), and alkynes (triple bond). Functional groups like −OH (alcohol), −COOH (carboxylic acid), and −NH₂ (amine) determine chemical properties.",
        contentRu: "Органическая химия изучает соединения на основе углерода. Углерод образует четыре связи, создавая цепи, кольца и разветвления. Углеводороды содержат только углерод и водород: алканы (одинарные связи, CₙH₂ₙ₊₂), алкены (двойная связь), алкины (тройная связь). Функциональные группы −OH (спирт), −COOH (карбоновая кислота), −NH₂ (амин) определяют свойства.",
        contentKk: "Органикалық химия көміртегі негізіндегі қосылыстарды зерттейді. Көміртегі төрт байланыс түзе алады, тізбектер, сақиналар және тармақтар жасайды. Көмірсутектер тек көміртегі мен сутегіден тұрады: алкандар (жалғыз байланыс, CₙH₂ₙ₊₂), алкендер (қос байланыс), алкиндер (үш байланыс). −OH (спирт), −COOH (карбон қышқылы), −NH₂ (амин) сияқты функционалдық топтар химиялық қасиеттерді анықтайды.",
        keyFormulas: [
          {
            formula: "Alkanes: CₙH₂ₙ₊₂; Alkenes: CₙH₂ₙ; Alkynes: CₙH₂ₙ₋₂",
            description: "General formulas for hydrocarbons",
            descriptionRu: "Общие формулы углеводородов",
            descriptionKk: "Көмірсутектердің жалпы формулалары"
          }
        ],
        solvedExamples: [
          {
            question: "What is the molecular formula of an alkane with 3 carbon atoms?",
            questionRu: "Какова молекулярная формула алкана с 3 атомами углерода?",
            questionKk: "3 көміртегі атомы бар алканның молекулалық формуласы қандай?",
            steps: [
              { en: "Use CₙH₂ₙ₊₂ with n = 3: C₃H₂(₃)₊₂", ru: "Используем CₙH₂ₙ₊₂ при n = 3: C₃H₂(₃)₊₂", kk: "n = 3 кезінде CₙH₂ₙ₊₂ қолданамыз: C₃H₂(₃)₊₂" },
              { en: "C₃H₈ (propane)", ru: "C₃H₈ (пропан)", kk: "C₃H₈ (пропан)" }
            ],
            answer: "C₃H₈",
            answerRu: "C₃H₈",
            answerKk: "C₃H₈"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How many bonds can a carbon atom form?",
            questionRu: "Сколько связей может образовать атом углерода?",
            questionKk: "Көміртегі атомы қанша байланыс түзе алады?",
            answer: "4",
            answerRu: "4",
            answerKk: "4",
            hint: "Carbon has 4 valence electrons",
            hintRu: "У углерода 4 валентных электрона",
            hintKk: "Көміртегінің 4 валенттік электроны бар",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What is the molecular formula of an alkene with 4 carbons?",
            questionRu: "Какова формула алкена с 4 атомами углерода?",
            questionKk: "4 көміртегі атомы бар алкеннің формуласы қандай?",
            answer: "C₄H₈",
            answerRu: "C₄H₈",
            answerKk: "C₄H₈",
            hint: "Alkenes: CₙH₂ₙ with n = 4",
            hintRu: "Алкены: CₙH₂ₙ при n = 4",
            hintKk: "Алкендер: CₙH₂ₙ, n = 4 кезінде",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Ethanol (C₂H₅OH) and dimethyl ether (CH₃OCH₃) have the same molecular formula C₂H₆O. What is this phenomenon called?",
            questionRu: "Этанол (C₂H₅OH) и диметиловый эфир (CH₃OCH₃) имеют одну формулу C₂H₆O. Как называется это явление?",
            questionKk: "Этанол (C₂H₅OH) мен диметил эфирінің (CH₃OCH₃) молекулалық формуласы бірдей C₂H₆O. Бұл құбылыс қалай аталады?",
            answer: "Isomerism — same molecular formula but different structural arrangement",
            answerRu: "Изомерия — одинаковая молекулярная формула, но разное структурное строение",
            answerKk: "Изомерия — молекулалық формуласы бірдей, бірақ құрылысы әртүрлі",
            hint: "Same formula, different structure = different compounds",
            hintRu: "Одна формула, разная структура = разные вещества",
            hintKk: "Бір формула, әр құрылым = әр қосылыс",
            xp: 20
          }
        ]
      },
      // ── 11-9 Ecology & Ecosystems ──
      {
        title: "Ecology & Ecosystems",
        titleRu: "Экология и экосистемы",
        titleKk: "Экология мен экожүйелер",
        content: "An ecosystem includes all living organisms (biotic) and non-living factors (abiotic) in an area. Energy flows through food chains: producers (plants) → primary consumers (herbivores) → secondary consumers (carnivores) → decomposers. Only about 10% of energy transfers between trophic levels. Biodiversity measures the variety of species in an ecosystem.",
        contentRu: "Экосистема включает все живые организмы (биотические) и неживые факторы (абиотические) в области. Энергия проходит по пищевым цепям: продуценты (растения) → первичные консументы (травоядные) → вторичные консументы (хищники) → редуценты. Только около 10% энергии передаётся между трофическими уровнями. Биоразнообразие измеряет разнообразие видов.",
        contentKk: "Экожүйе аумақтағы барлық тірі организмдерді (биотикалық) және жансыз факторларды (абиотикалық) қамтиды. Энергия тағам тізбектері арқылы ағады: продуценттер (өсімдіктер) → бірінші ретті тұтынушылар (шөпқоректілер) → екінші ретті тұтынушылар (жыртқыштар) → ыдыратушылар. Трофикалық деңгейлер арасында энергияның шамамен 10%-ы ғана беріледі. Биоәртүрлілік түрлердің алуандығын өлшейді.",
        keyFormulas: [
          {
            formula: "Energy transfer ≈ 10% per trophic level",
            description: "The 10% rule of energy transfer in food chains",
            descriptionRu: "Правило 10% передачи энергии в пищевых цепях",
            descriptionKk: "Тағам тізбектеріндегі 10% энергия беру ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "If producers capture 10,000 kJ of energy, how much energy is available to secondary consumers?",
            questionRu: "Если продуценты захватывают 10 000 кДж, сколько энергии доступно вторичным консументам?",
            questionKk: "Егер продуценттер 10 000 кДж энергия жинаса, екінші ретті тұтынушыларға қанша энергия жетеді?",
            steps: [
              { en: "Primary consumers get 10%: 10,000 × 0.10 = 1,000 kJ", ru: "Первичные консументы: 10 000 × 0,10 = 1 000 кДж", kk: "Бірінші ретті тұтынушылар: 10 000 × 0,10 = 1 000 кДж" },
              { en: "Secondary consumers get 10% of that: 1,000 × 0.10 = 100 kJ", ru: "Вторичные: 1 000 × 0,10 = 100 кДж", kk: "Екінші ретті: 1 000 × 0,10 = 100 кДж" }
            ],
            answer: "100 kJ",
            answerRu: "100 кДж",
            answerKk: "100 кДж"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the difference between a food chain and a food web?",
            questionRu: "В чём разница между пищевой цепью и пищевой сетью?",
            questionKk: "Тағам тізбегі мен тағам торының айырмашылығы қандай?",
            answer: "A food chain is a single linear path; a food web is multiple interconnected food chains in an ecosystem.",
            answerRu: "Пищевая цепь — это один линейный путь; пищевая сеть — это множество взаимосвязанных пищевых цепей в экосистеме.",
            answerKk: "Тағам тізбегі — бір сызықтық жол; ал тағам торы — экожүйедегі өзара байланысты бірнеше тағам тізбегі.",
            hint: "One is simple and linear, the other is complex and branching",
            hintRu: "Одна простая и линейная, другая сложная и разветвлённая",
            hintKk: "Бірі қарапайым және сызықтық, екіншісі күрделі және тармақталған",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Name two abiotic factors in an ecosystem.",
            questionRu: "Назовите два абиотических фактора экосистемы.",
            questionKk: "Экожүйенің екі абиотикалық факторын атаңыз.",
            answer: "Any two: temperature, water, sunlight, soil, wind, minerals",
            answerRu: "Любые два: температура, вода, солнечный свет, почва, ветер, минералы",
            answerKk: "Кез келген екеуі: температура, су, күн сәулесі, топырақ, жел, минералдар",
            hint: "These are non-living things that affect organisms",
            hintRu: "Это неживые факторы, влияющие на организмы",
            hintKk: "Бұлар организмдерге әсер ететін жансыз факторлар",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If a grassland produces 20,000 kJ and has 4 trophic levels, how much energy reaches the top predator?",
            questionRu: "Луг производит 20 000 кДж и имеет 4 трофических уровня. Сколько энергии дойдёт до верхнего хищника?",
            questionKk: "Шалғын 20 000 кДж өндіреді және 4 трофикалық деңгейі бар. Ең жоғарғы жыртқышқа қанша энергия жетеді?",
            answer: "20 kJ",
            answerRu: "20 кДж",
            answerKk: "20 кДж",
            hint: "20,000 × 0.1 × 0.1 × 0.1 = 20",
            hintRu: "20 000 × 0,1 × 0,1 × 0,1 = 20",
            hintKk: "20 000 × 0,1 × 0,1 × 0,1 = 20",
            xp: 20
          }
        ]
      },
      // ── 11-10 Evolution ──
      {
        title: "Evolution",
        titleRu: "Эволюция",
        titleKk: "Эволюция",
        content: "Evolution is the change in inherited characteristics of populations over generations. Natural selection is the main mechanism: organisms with traits better suited to their environment survive and reproduce more. Evidence for evolution includes fossils, comparative anatomy (homologous structures), DNA similarities, and observed adaptation in populations.",
        contentRu: "Эволюция — изменение наследственных характеристик популяций из поколения в поколение. Естественный отбор — основной механизм: организмы с признаками, лучше подходящими к среде, выживают и размножаются больше. Доказательства: ископаемые, сравнительная анатомия (гомологичные структуры), сходство ДНК и наблюдаемая адаптация.",
        contentKk: "Эволюция — ұрпақтан ұрпаққа популяциялардың тұқым қуалайтын сипаттамаларының өзгеруі. Табиғи сұрыптау — негізгі механизм: ортаға жақсы бейімделген белгілері бар организмдер көбірек аман қалады және көбейеді. Дәлелдер: қазбалар, салыстырмалы анатомия (гомологиялық құрылымдар), ДНҚ ұқсастықтары және байқалған бейімделу.",
        keyFormulas: [
          {
            formula: "Natural Selection: Variation → Selection → Reproduction → Adaptation",
            description: "The four stages of natural selection",
            descriptionRu: "Четыре этапа естественного отбора",
            descriptionKk: "Табиғи сұрыптаудың төрт кезеңі"
          }
        ],
        solvedExamples: [
          {
            question: "In a population of beetles, green beetles are eaten less by birds than brown beetles. Over 10 generations, what happens to the green beetle population?",
            questionRu: "В популяции жуков зелёных жуков птицы едят реже, чем коричневых. Что произойдёт с популяцией зелёных жуков через 10 поколений?",
            questionKk: "Қоңыздар популяциясында құстар жасыл қоңыздарды қоңыр қоңыздарға қарағанда аз жейді. 10 ұрпақтан кейін жасыл қоңыздар популяциясына не болады?",
            steps: [
              { en: "Green beetles have a survival advantage (less predation), so they reproduce more.", ru: "Зелёные жуки имеют преимущество выживания (меньше хищничество), размножаются больше.", kk: "Жасыл қоңыздардың аман қалу артықшылығы бар (аз жеу), сондықтан көбірек көбейеді." },
              { en: "Over generations, natural selection increases the proportion of green beetles.", ru: "С поколениями естественный отбор увеличивает долю зелёных жуков.", kk: "Ұрпақтар бойы табиғи сұрыптау жасыл қоңыздардың үлесін арттырады." }
            ],
            answer: "The green beetle population increases as they have better survival and reproduction due to natural selection.",
            answerRu: "Популяция зелёных жуков возрастает, поскольку благодаря естественному отбору они лучше выживают и размножаются.",
            answerKk: "Табиғи сұрыптау арқасында жасыл қоңыздар жақсырақ аман қалып, көбірек көбейетіндіктен, олардың популяциясы артады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Who proposed the theory of natural selection?",
            questionRu: "Кто предложил теорию естественного отбора?",
            questionKk: "Табиғи сұрыптау теориясын кім ұсынды?",
            answer: "Charles Darwin",
            answerRu: "Чарльз Дарвин",
            answerKk: "Чарльз Дарвин",
            hint: "He traveled on the HMS Beagle and studied finches in the Galapagos",
            hintRu: "Он путешествовал на «Бигле» и изучал вьюрков на Галапагосах",
            hintKk: "Ол HMS Beagle кемесімен саяхаттап, Галапагостағы торғайларды зерттеді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What are homologous structures? Give an example.",
            questionRu: "Что такое гомологичные структуры? Приведите пример.",
            questionKk: "Гомологиялық құрылымдар дегеніміз не? Мысал келтіріңіз.",
            answer: "Structures with a common evolutionary origin but different functions. Example: human arm, whale flipper, bat wing — all have similar bone structure.",
            answerRu: "Структуры с общим эволюционным происхождением, но разными функциями. Пример: рука человека, ласт кита, крыло летучей мыши — у всех схожее строение костей.",
            answerKk: "Эволюциялық шығу тегі ортақ, бірақ қызметі әртүрлі құрылымдар. Мысалы: адамның қолы, киттің жүзбеқанаты, жарқанаттың қанаты — бәрінің сүйек құрылысы ұқсас.",
            hint: "Think about forelimbs in different mammals",
            hintRu: "Подумайте о передних конечностях разных млекопитающих",
            hintKk: "Әр түрлі сүтқоректілердің алдыңғы аяқтарын ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain how antibiotic resistance in bacteria is an example of natural selection.",
            questionRu: "Объясните, как устойчивость бактерий к антибиотикам — пример естественного отбора.",
            questionKk: "Бактериялардың антибиотикке төзімділігі табиғи сұрыптаудың мысалы екенін түсіндіріңіз.",
            answer: "Random mutations create some resistant bacteria. Antibiotics kill non-resistant ones, so resistant bacteria survive and reproduce, passing on the resistance gene. Over generations, the population becomes mostly resistant.",
            answerRu: "Случайные мутации приводят к появлению устойчивых бактерий. Антибиотики убивают неустойчивых, поэтому устойчивые бактерии выживают и размножаются, передавая ген устойчивости. С поколениями популяция становится в основном устойчивой.",
            answerKk: "Кездейсоқ мутациялар төзімді бактериялардың пайда болуына әкеледі. Антибиотиктер төзімсіздерін жояды, сондықтан төзімді бактериялар аман қалып, көбейіп, төзімділік генін ұрпаққа береді. Ұрпақтар бойы популяцияның көпшілігі төзімді болып кетеді.",
            hint: "Non-resistant bacteria die; resistant ones survive and pass on their genes",
            hintRu: "Нестойкие бактерии погибают; стойкие выживают и передают гены",
            hintKk: "Төзімсіз бактериялар өледі; төзімділер аман қалып, гендерін береді",
            xp: 20
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // GRADE 12 — Calculus, Vectors & Advanced Sciences
  // ═══════════════════════════════════════════════
  "Core Sciences_12": {
    planetName: "Core Sciences",
    introduction: {
      en: "Master calculus, vectors, and advanced science topics that form the bridge to university-level study. Explore limits, derivatives, integrals, electromagnetism, quantum physics, biochemistry, and human physiology.",
      ru: "Освойте анализ, векторы и углублённые научные темы, которые готовят к университету. Изучите пределы, производные, интегралы, электромагнетизм, квантовую физику, биохимию и физиологию человека."
    },
    sections: [
      // ── 12-1 Limits & Continuity ──
      {
        title: "Limits & Continuity",
        titleRu: "Пределы и непрерывность",
        titleKk: "Шектер мен үздіксіздік",
        content: "A limit describes what value a function approaches as x approaches a certain point. We write lim(x→a) f(x) = L. A function is continuous at a point if the limit equals the function value there. Limits are the foundation of calculus, enabling the definition of derivatives and integrals.",
        contentRu: "Предел описывает, к какому значению стремится функция при x → a. Запись: lim(x→a) f(x) = L. Функция непрерывна в точке, если предел равен значению функции. Пределы — фундамент анализа, на них строятся определения производных и интегралов.",
        contentKk: "Шек x белгілі нүктеге жақындағанда функцияның қандай мәнге ұмтылатынын сипаттайды. Жазылуы: lim(x→a) f(x) = L. Функция нүктеде үздіксіз, егер шек функция мәніне тең болса. Шектер — талдаудың негізі, туындылар мен интегралдардың анықтамаларын мүмкін етеді.",
        keyFormulas: [
          {
            formula: "lim(x→a) f(x) = L",
            tex: "\\lim_{x \\to a} f(x) = L",
            description: "Definition of a limit",
            descriptionRu: "Определение предела",
            descriptionKk: "Шектің анықтамасы"
          },
          {
            formula: "lim(x→0) sin(x)/x = 1",
            tex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
            description: "Important trigonometric limit",
            descriptionRu: "Важный тригонометрический предел",
            descriptionKk: "Маңызды тригонометриялық шек"
          }
        ],
        solvedExamples: [
          {
            question: "Find $\\lim_{x \\to 3} \\dfrac{x^{2} - 9}{x - 3}$",
            questionRu: "Найдите $\\lim_{x \\to 3} \\dfrac{x^{2} - 9}{x - 3}$",
            questionKk: "$\\lim_{x \\to 3} \\dfrac{x^{2} - 9}{x - 3}$ табыңыз",
            steps: [
              { en: "Factor the numerator: $\\dfrac{(x-3)(x+3)}{x-3}$. Cancel $(x-3)$.", ru: "Разложим числитель: $\\dfrac{(x-3)(x+3)}{x-3}$. Сократим $(x-3)$.", kk: "Алымды жіктейміз: $\\dfrac{(x-3)(x+3)}{x-3}$. $(x-3)$ қысқартамыз." },
              { en: "$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$", ru: "$\\lim_{x \\to 3} (x + 3) = 6$", kk: "$\\lim_{x \\to 3} (x + 3) = 6$" }
            ],
            answer: "$6$",
            answerRu: "$6$",
            answerKk: "$6$"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find $\\lim_{x \\to 2} (3x + 1)$",
            questionRu: "Найдите $\\lim_{x \\to 2} (3x + 1)$",
            questionKk: "$\\lim_{x \\to 2} (3x + 1)$ табыңыз",
            answer: "7",
            answerRu: "7",
            answerKk: "7",
            hint: "For a polynomial, just substitute $x = 2$",
            hintRu: "Для многочлена просто подставьте $x = 2$",
            hintKk: "Көпмүше үшін $x = 2$ қойыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find $\\lim_{x \\to 4} \\dfrac{x^{2} - 16}{x - 4}$",
            questionRu: "Найдите $\\lim_{x \\to 4} \\dfrac{x^{2} - 16}{x - 4}$",
            questionKk: "$\\lim_{x \\to 4} \\dfrac{x^{2} - 16}{x - 4}$ табыңыз",
            answer: "8",
            answerRu: "8",
            answerKk: "8",
            hint: "Factor: $\\dfrac{(x-4)(x+4)}{x-4} = x+4$",
            hintRu: "Разложите: $\\dfrac{(x-4)(x+4)}{x-4} = x+4$",
            hintKk: "Жіктеңіз: $\\dfrac{(x-4)(x+4)}{x-4} = x+4$",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find $\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^{2}}$",
            questionRu: "Найдите $\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^{2}}$",
            questionKk: "$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^{2}}$ табыңыз",
            answer: "$\\dfrac{1}{2}$",
            answerRu: "$\\dfrac{1}{2}$",
            answerKk: "$\\dfrac{1}{2}$",
            hint: "Use L'Hôpital's rule twice, or the identity $1 - \\cos x \\approx \\dfrac{x^{2}}{2}$ for small $x$",
            hintRu: "Примените правило Лопиталя дважды или приближение $1 - \\cos x \\approx \\dfrac{x^{2}}{2}$",
            hintKk: "Лопиталь ережесін екі рет қолданыңыз немесе $1 - \\cos x \\approx \\dfrac{x^{2}}{2}$ жуықтауын пайдаланыңыз",
            xp: 20
          }
        ]
      },
      // ── 12-2 Derivatives ──
      {
        title: "Derivatives",
        titleRu: "Производные",
        titleKk: "Туындылар",
        content: "The derivative measures the instantaneous rate of change of a function: f'(x) = lim(h→0) [f(x+h) − f(x)]/h. The power rule states d/dx[xⁿ] = nxⁿ⁻¹. The product rule, quotient rule, and chain rule handle more complex expressions. Derivatives have applications in finding slopes, velocities, and optimization problems.",
        contentRu: "Производная измеряет мгновенную скорость изменения функции: f'(x) = lim(h→0) [f(x+h) − f(x)]/h. Правило степени: d/dx[xⁿ] = nxⁿ⁻¹. Правила произведения, частного и цепное правило — для сложных выражений. Производные применяются для нахождения наклонов, скоростей и задач оптимизации.",
        contentKk: "Туынды функцияның лездік өзгеру жылдамдығын өлшейді: f'(x) = lim(h→0) [f(x+h) − f(x)]/h. Дәреже ережесі: d/dx[xⁿ] = nxⁿ⁻¹. Көбейтінді, бөлінді және тізбек ережелері күрделі өрнектер үшін қолданылады. Туындылар еңістерді, жылдамдықтарды табуда және оңтайландыру есептерінде қолданылады.",
        keyFormulas: [
          {
            formula: "d/dx[xⁿ] = nxⁿ⁻¹",
            tex: "\\dfrac{d}{dx}\\bigl[x^{n}\\bigr] = n\\,x^{n-1}",
            description: "Power rule for derivatives",
            descriptionRu: "Правило степени для производных",
            descriptionKk: "Туындылар үшін дәреже ережесі"
          },
          {
            formula: "d/dx[f·g] = f'g + fg' (product rule)",
            tex: "\\dfrac{d}{dx}\\bigl[f\\cdot g\\bigr] = f' g + f g'",
            description: "Product rule for derivatives",
            descriptionRu: "Правило произведения",
            descriptionKk: "Көбейтінді ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "Find the derivative of f(x) = 3x⁴ − 2x² + 5x − 7.",
            questionRu: "Найдите производную f(x) = 3x⁴ − 2x² + 5x − 7.",
            questionKk: "f(x) = 3x⁴ − 2x² + 5x − 7 туындысын табыңыз.",
            steps: [
              { en: "Apply power rule to each term: 3(4x³) − 2(2x) + 5(1) − 0", ru: "Правило степени для каждого члена: 3(4x³) − 2(2x) + 5(1) − 0", kk: "Әр мүшеге дәреже ережесін қолданамыз: 3(4x³) − 2(2x) + 5(1) − 0" },
              { en: "f'(x) = 12x³ − 4x + 5", ru: "f'(x) = 12x³ − 4x + 5", kk: "f'(x) = 12x³ − 4x + 5" }
            ],
            answer: "f'(x) = 12x³ − 4x + 5",
            answerRu: "f'(x) = 12x³ − 4x + 5",
            answerKk: "f'(x) = 12x³ − 4x + 5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the derivative of f(x) = x⁵.",
            questionRu: "Найдите производную f(x) = x⁵.",
            questionKk: "f(x) = x⁵ туындысын табыңыз.",
            answer: "5x⁴",
            answerRu: "5x⁴",
            answerKk: "5x⁴",
            hint: "Power rule: bring down the exponent and reduce by 1",
            hintRu: "Правило степени: выносим показатель и уменьшаем на 1",
            hintKk: "Дәреже ережесі: дәрежені түсіріп, 1-ге азайтыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find f'(x) if f(x) = 4x³ − 6x + 2.",
            questionRu: "Найдите f'(x), если f(x) = 4x³ − 6x + 2.",
            questionKk: "f(x) = 4x³ − 6x + 2 болса, f'(x) табыңыз.",
            answer: "12x² − 6",
            answerRu: "12x² − 6",
            answerKk: "12x² − 6",
            hint: "Differentiate each term: 4(3x²) − 6(1) + 0",
            hintRu: "Продифференцируйте каждый член: 4(3x²) − 6(1) + 0",
            hintKk: "Әр мүшенің туындысын алыңыз: 4(3x²) − 6(1) + 0",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find the derivative of f(x) = (2x + 1)³ using the chain rule.",
            questionRu: "Найдите производную f(x) = (2x + 1)³ по правилу цепочки.",
            questionKk: "f(x) = (2x + 1)³ туындысын тізбек ережесі арқылы табыңыз.",
            answer: "6(2x + 1)²",
            answerRu: "6(2x + 1)²",
            answerKk: "6(2x + 1)²",
            hint: "Chain rule: 3(2x+1)² × d/dx(2x+1) = 3(2x+1)² × 2",
            hintRu: "Цепное правило: 3(2x+1)² × (2x+1)' = 3(2x+1)² × 2",
            hintKk: "Тізбек ережесі: 3(2x+1)² × (2x+1)' = 3(2x+1)² × 2",
            xp: 20
          }
        ]
      },
      // ── 12-3 Integrals ──
      {
        title: "Integrals",
        titleRu: "Интегралы",
        titleKk: "Интегралдар",
        content: "Integration is the reverse of differentiation. The indefinite integral of xⁿ is xⁿ⁺¹/(n+1) + C. A definite integral from a to b computes the net area under a curve. The Fundamental Theorem of Calculus connects derivatives and integrals: ∫ₐᵇ f(x)dx = F(b) − F(a), where F'(x) = f(x).",
        contentRu: "Интегрирование — обратная операция дифференцированию. Неопределённый интеграл xⁿ = xⁿ⁺¹/(n+1) + C. Определённый интеграл от a до b вычисляет площадь под кривой. Основная теорема анализа связывает производные и интегралы: ∫ₐᵇ f(x)dx = F(b) − F(a), где F'(x) = f(x).",
        contentKk: "Интегралдау — дифференциалдаудың кері амалы. xⁿ-нің белгісіз интегралы xⁿ⁺¹/(n+1) + C. a-дан b-ге дейінгі анықталған интеграл қисық астындағы ауданды есептейді. Талдаудың негізгі теоремасы туындылар мен интегралдарды байланыстырады: ∫ₐᵇ f(x)dx = F(b) − F(a), мұнда F'(x) = f(x).",
        keyFormulas: [
          {
            formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)",
            tex: "\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
            description: "Power rule for integration",
            descriptionRu: "Правило степени для интегрирования",
            descriptionKk: "Интегралдау үшін дәреже ережесі"
          },
          {
            formula: "∫ₐᵇ f(x)dx = F(b) − F(a)",
            tex: "\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)",
            description: "Fundamental Theorem of Calculus",
            descriptionRu: "Основная теорема анализа",
            descriptionKk: "Талдаудың негізгі теоремасы"
          }
        ],
        solvedExamples: [
          {
            question: "Evaluate ∫₁³ 2x dx.",
            questionRu: "Вычислите ∫₁³ 2x dx.",
            questionKk: "∫₁³ 2x dx есептеңіз.",
            steps: [
              { en: "Antiderivative of 2x is x². Evaluate from 1 to 3: 3² − 1²", ru: "Первообразная 2x = x². Вычислим от 1 до 3: 3² − 1²", kk: "2x-тің алғашқы функциясы x². 1-ден 3-ке дейін есептейміз: 3² − 1²" },
              { en: "= 9 − 1 = 8", ru: "= 9 − 1 = 8", kk: "= 9 − 1 = 8" }
            ],
            answer: "8",
            answerRu: "8",
            answerKk: "8"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find ∫x³ dx.",
            questionRu: "Найдите ∫x³ dx.",
            questionKk: "∫x³ dx табыңыз.",
            answer: "x⁴/4 + C",
            answerRu: "x⁴/4 + C",
            answerKk: "x⁴/4 + C",
            hint: "Add 1 to exponent and divide by new exponent",
            hintRu: "Увеличьте показатель на 1 и разделите на новый",
            hintKk: "Дәрежеге 1 қосып, жаңа дәрежеге бөліңіз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Evaluate ∫₀² (3x² + 1) dx.",
            questionRu: "Вычислите ∫₀² (3x² + 1) dx.",
            questionKk: "∫₀² (3x² + 1) dx есептеңіз.",
            answer: "10",
            answerRu: "10",
            answerKk: "10",
            hint: "Antiderivative: x³ + x. Evaluate: (8+2) − (0+0) = 10",
            hintRu: "Первообразная: x³ + x. Вычислим: (8+2) − 0 = 10",
            hintKk: "Алғашқы функция: x³ + x. Есептейміз: (8+2) − 0 = 10",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find the area under y = x² between x = 0 and x = 3.",
            questionRu: "Найдите площадь под y = x² от x = 0 до x = 3.",
            questionKk: "x = 0-ден x = 3-ке дейін y = x² астындағы ауданды табыңыз.",
            answer: "9",
            answerRu: "9",
            answerKk: "9",
            hint: "∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9",
            hintRu: "∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9",
            hintKk: "∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9",
            xp: 20
          }
        ]
      },
      // ── 12-4 Vectors ──
      {
        title: "Vectors",
        titleRu: "Векторы",
        titleKk: "Векторлар",
        content: "A vector has both magnitude and direction, unlike a scalar which has only magnitude. Vectors can be represented as (x, y) components. Vector addition adds corresponding components. The dot product a·b = |a||b|cos θ gives a scalar, while the magnitude of a vector is |v| = √(x² + y²).",
        contentRu: "Вектор имеет величину и направление, в отличие от скаляра, имеющего только величину. Векторы представляются компонентами (x, y). Сложение векторов — сложение соответствующих компонент. Скалярное произведение a·b = |a||b|cos θ даёт скаляр. Модуль вектора |v| = √(x² + y²).",
        contentKk: "Вектордың шамасы мен бағыты бар, скалярдың тек шамасы ғана бар. Векторлар (x, y) компоненттерімен көрсетіледі. Векторларды қосу тиісті компоненттерді қосады. Скалярлық көбейтінді a·b = |a||b|cos θ скаляр береді. Вектордың модулі |v| = √(x² + y²).",
        keyFormulas: [
          {
            formula: "|v| = √(x² + y²); a·b = a₁b₁ + a₂b₂",
            description: "Vector magnitude and dot product",
            descriptionRu: "Модуль вектора и скалярное произведение",
            descriptionKk: "Вектор модулі мен скалярлық көбейтінді"
          }
        ],
        solvedExamples: [
          {
            question: "Find the magnitude of vector v = (3, 4) and the dot product of a = (2, 5) and b = (1, 3).",
            questionRu: "Найдите модуль v = (3, 4) и скалярное произведение a = (2, 5) и b = (1, 3).",
            questionKk: "v = (3, 4) модулін және a = (2, 5) мен b = (1, 3) скалярлық көбейтіндісін табыңыз.",
            steps: [
              { en: "|v| = √(9 + 16) = √25 = 5", ru: "|v| = √(9 + 16) = √25 = 5", kk: "|v| = √(9 + 16) = √25 = 5" },
              { en: "a·b = 2(1) + 5(3) = 2 + 15 = 17", ru: "a·b = 2(1) + 5(3) = 2 + 15 = 17", kk: "a·b = 2(1) + 5(3) = 2 + 15 = 17" }
            ],
            answer: "|v| = 5, a·b = 17",
            answerRu: "|v| = 5, a·b = 17",
            answerKk: "|v| = 5, a·b = 17"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Add vectors a = (2, 3) and b = (4, −1).",
            questionRu: "Сложите векторы a = (2, 3) и b = (4, −1).",
            questionKk: "a = (2, 3) және b = (4, −1) векторларын қосыңыз.",
            answer: "(6, 2)",
            answerRu: "(6, 2)",
            answerKk: "(6, 2)",
            hint: "Add corresponding components: (2+4, 3+(−1))",
            hintRu: "Сложите соответствующие компоненты: (2+4, 3+(−1))",
            hintKk: "Тиісті компоненттерді қосыңыз: (2+4, 3+(−1))",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the magnitude of vector (−5, 12).",
            questionRu: "Найдите модуль вектора (−5, 12).",
            questionKk: "(−5, 12) векторының модулін табыңыз.",
            answer: "13",
            answerRu: "13",
            answerKk: "13",
            hint: "|v| = √(25 + 144) = √169",
            hintRu: "|v| = √(25 + 144) = √169",
            hintKk: "|v| = √(25 + 144) = √169",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find the angle between vectors a = (1, 0) and b = (1, 1).",
            questionRu: "Найдите угол между a = (1, 0) и b = (1, 1).",
            questionKk: "a = (1, 0) мен b = (1, 1) арасындағы бұрышты табыңыз.",
            answer: "45°",
            answerRu: "45°",
            answerKk: "45°",
            hint: "cos θ = (a·b)/(|a||b|) = 1/(1×√2) = 1/√2 → θ = 45°",
            hintRu: "cos θ = (a·b)/(|a||b|) = 1/(1×√2) → θ = 45°",
            hintKk: "cos θ = (a·b)/(|a||b|) = 1/(1×√2) → θ = 45°",
            xp: 20
          }
        ]
      },
      // ── 12-5 Complex Numbers ──
      {
        title: "Complex Numbers",
        titleRu: "Комплексные числа",
        titleKk: "Кешенді сандар",
        content: "Complex numbers extend the real numbers with the imaginary unit i, where i² = −1. A complex number has the form a + bi. They can be added, multiplied, and represented on the complex plane. The modulus is |z| = √(a² + b²) and the conjugate of a + bi is a − bi.",
        contentRu: "Комплексные числа расширяют вещественные числа мнимой единицей i, где i² = −1. Комплексное число имеет вид a + bi. Их можно складывать, умножать и изображать на комплексной плоскости. Модуль |z| = √(a² + b²), сопряжённое к a + bi = a − bi.",
        contentKk: "Кешенді сандар нақты сандарды жорамал бірлік i арқылы кеңейтеді, мұнда i² = −1. Кешенді сан a + bi түрінде болады. Оларды қосуға, көбейтуге және кешенді жазықтықта көрсетуге болады. Модуль |z| = √(a² + b²), а + bi-дің түйіндесі a − bi.",
        keyFormulas: [
          {
            formula: "i² = −1; |z| = √(a² + b²)",
            description: "Imaginary unit and modulus of a complex number",
            descriptionRu: "Мнимая единица и модуль комплексного числа",
            descriptionKk: "Жорамал бірлік және кешенді санның модулі"
          }
        ],
        solvedExamples: [
          {
            question: "Multiply: (3 + 2i)(1 − 4i)",
            questionRu: "Умножьте: (3 + 2i)(1 − 4i)",
            questionKk: "Көбейтіңіз: (3 + 2i)(1 − 4i)",
            steps: [
              { en: "FOIL: 3(1) + 3(−4i) + 2i(1) + 2i(−4i) = 3 − 12i + 2i − 8i²", ru: "Раскроем: 3 − 12i + 2i − 8i²", kk: "Жаямыз: 3 − 12i + 2i − 8i²" },
              { en: "Since i² = −1: 3 − 10i − 8(−1) = 3 − 10i + 8 = 11 − 10i", ru: "Так как i² = −1: 3 − 10i + 8 = 11 − 10i", kk: "i² = −1 болғандықтан: 3 − 10i + 8 = 11 − 10i" }
            ],
            answer: "11 − 10i",
            answerRu: "11 − 10i",
            answerKk: "11 − 10i"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Add: (4 + 3i) + (2 − 5i)",
            questionRu: "Сложите: (4 + 3i) + (2 − 5i)",
            questionKk: "Қосыңыз: (4 + 3i) + (2 − 5i)",
            answer: "6 − 2i",
            answerRu: "6 − 2i",
            answerKk: "6 − 2i",
            hint: "Add real parts and imaginary parts separately",
            hintRu: "Сложите действительные и мнимые части отдельно",
            hintKk: "Нақты және жорамал бөліктерді бөлек қосыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the modulus of z = 3 + 4i.",
            questionRu: "Найдите модуль z = 3 + 4i.",
            questionKk: "z = 3 + 4i модулін табыңыз.",
            answer: "5",
            answerRu: "5",
            answerKk: "5",
            hint: "|z| = √(9 + 16) = √25",
            hintRu: "|z| = √(9 + 16) = √25",
            hintKk: "|z| = √(9 + 16) = √25",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Simplify: i¹⁷",
            questionRu: "Упростите: i¹⁷",
            questionKk: "Жеңілдетіңіз: i¹⁷",
            answer: "i",
            answerRu: "i",
            answerKk: "i",
            hint: "Powers of i cycle with period 4: i¹=i, i²=−1, i³=−i, i⁴=1. 17 mod 4 = 1",
            hintRu: "Степени i циклически повторяются с периодом 4: i¹=i, i²=−1, i³=−i, i⁴=1",
            hintKk: "i дәрежелері 4 кезеңмен қайталанады: i¹=i, i²=−1, i³=−i, i⁴=1",
            xp: 20
          }
        ]
      },
      // ── 12-6 Electromagnetism ──
      {
        title: "Electromagnetism",
        titleRu: "Электромагнетизм",
        titleKk: "Электромагнетизм",
        content: "Electric charges create electric fields, and moving charges (current) create magnetic fields. Coulomb's law gives the force between charges: F = kq₁q₂/r². A current-carrying wire in a magnetic field experiences a force (F = BIL). Electromagnetic induction (Faraday's law) shows that a changing magnetic field induces a voltage.",
        contentRu: "Электрические заряды создают электрические поля, а движущиеся заряды (ток) — магнитные. Закон Кулона даёт силу между зарядами: F = kq₁q₂/r². Провод с током в магнитном поле испытывает силу (F = BIL). Электромагнитная индукция (закон Фарадея): изменяющееся магнитное поле наводит напряжение.",
        contentKk: "Электр зарядтары электр өрістерін, ал қозғалатын зарядтар (ток) магнит өрістерін жасайды. Кулон заңы зарядтар арасындағы күшті береді: F = kq₁q₂/r². Магнит өрісіндегі тогы бар сым күш сезеді (F = BIL). Электромагниттік индукция (Фарадей заңы): өзгеретін магнит өрісі кернеу тудырады.",
        keyFormulas: [
          {
            formula: "F = kq₁q₂/r² (Coulomb's law)",
            description: "Force between two electric charges",
            descriptionRu: "Сила между двумя электрическими зарядами",
            descriptionKk: "Екі электр заряды арасындағы күш"
          },
          {
            formula: "F = BIL",
            description: "Force on a current-carrying wire in a magnetic field",
            descriptionRu: "Сила на проводник с током в магнитном поле",
            descriptionKk: "Магнит өрісіндегі тогы бар сымға әсер ететін күш"
          }
        ],
        solvedExamples: [
          {
            question: "Two charges of +3 μC and −5 μC are 0.1 m apart. Find the force between them. (k = 9 × 10⁹)",
            questionRu: "Два заряда +3 мкКл и −5 мкКл на расстоянии 0,1 м. Найдите силу. (k = 9 × 10⁹)",
            questionKk: "+3 мкКл және −5 мкКл зарядтар 0,1 м қашықтықта. Күшті табыңыз. (k = 9 × 10⁹)",
            steps: [
              { en: "F = k|q₁q₂|/r² = 9×10⁹ × 3×10⁻⁶ × 5×10⁻⁶ / (0.1)²", ru: "F = k|q₁q₂|/r² = 9×10⁹ × 3×10⁻⁶ × 5×10⁻⁶ / (0,1)²", kk: "F = k|q₁q₂|/r² = 9×10⁹ × 3×10⁻⁶ × 5×10⁻⁶ / (0,1)²" },
              { en: "F = 9×10⁹ × 15×10⁻¹² / 0.01 = 135×10⁻³ / 0.01 = 13.5 N (attractive)", ru: "F = 13,5 Н (притяжение)", kk: "F = 13,5 Н (тартылу)" }
            ],
            answer: "13.5 N (attractive)",
            answerRu: "13,5 Н (притяжение)",
            answerKk: "13,5 Н (тартылу)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Do like charges attract or repel each other?",
            questionRu: "Одноимённые заряды притягиваются или отталкиваются?",
            questionKk: "Бірдей зарядтар тартыла ма, тебіле ме?",
            answer: "Repel",
            answerRu: "Отталкиваются",
            answerKk: "Тебіледі",
            hint: "Like repels like; opposites attract",
            hintRu: "Одноимённые отталкиваются; разноимённые притягиваются",
            hintKk: "Бірдейлер тебіледі; қарама-қарсылар тартылады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A 2 m wire carrying 5 A of current is in a 0.3 T magnetic field. What force acts on it?",
            questionRu: "Провод 2 м с током 5 А в магнитном поле 0,3 Тл. Какая сила действует?",
            questionKk: "0,3 Тл магнит өрісіндегі 2 м сым 5 А ток тасымалдайды. Қандай күш әсер етеді?",
            answer: "3 N",
            answerRu: "3 Н",
            answerKk: "3 Н",
            hint: "F = BIL = 0.3 × 5 × 2",
            hintRu: "F = BIL = 0,3 × 5 × 2",
            hintKk: "F = BIL = 0,3 × 5 × 2",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If the distance between two charges is doubled, what happens to the electrostatic force?",
            questionRu: "Если расстояние между зарядами удвоить, что произойдёт с силой?",
            questionKk: "Егер екі заряд арасындағы қашықтық екі есе артса, электростатикалық күшке не болады?",
            answer: "The force decreases to 1/4 of its original value (inverse square law).",
            answerRu: "Сила уменьшается до 1/4 от первоначального значения (закон обратных квадратов).",
            answerKk: "Күш бастапқы мәнінің 1/4-іне дейін азаяды (кері квадраттар заңы).",
            hint: "F ∝ 1/r². If r → 2r, then F → F/(2²) = F/4",
            hintRu: "F ∝ 1/r². Если r → 2r, то F → F/4",
            hintKk: "F ∝ 1/r². Егер r → 2r болса, F → F/4",
            xp: 20
          }
        ]
      },
      // ── 12-7 Quantum Physics Intro ──
      {
        title: "Quantum Physics Intro",
        titleRu: "Введение в квантовую физику",
        titleKk: "Кванттық физикаға кіріспе",
        content: "Quantum physics describes behavior at the atomic scale where classical physics breaks down. Light behaves as both a wave and a particle (photon). The energy of a photon is E = hf, where h is Planck's constant. The photoelectric effect shows that light can eject electrons from metals, but only if its frequency exceeds a threshold.",
        contentRu: "Квантовая физика описывает поведение на атомном уровне, где классическая физика не работает. Свет ведёт себя и как волна, и как частица (фотон). Энергия фотона E = hf, где h — постоянная Планка. Фотоэффект показывает, что свет может выбивать электроны из металла, но только при достаточной частоте.",
        contentKk: "Кванттық физика классикалық физика жұмыс істемейтін атомдық масштабтағы мінез-құлықты сипаттайды. Жарық толқын және бөлшек (фотон) ретінде әрекет етеді. Фотонның энергиясы E = hf, мұнда h — Планк тұрақтысы. Фотоэлектр эффектісі жарықтың металдан электрондарды шығара алатынын, бірақ жиілігі шекті деңгейден асқанда ғана екенін көрсетеді.",
        keyFormulas: [
          {
            formula: "E = hf (h = 6.63 × 10⁻³⁴ J·s)",
            description: "Energy of a photon",
            descriptionRu: "Энергия фотона",
            descriptionKk: "Фотонның энергиясы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the energy of a photon with frequency 5 × 10¹⁴ Hz. (h = 6.63 × 10⁻³⁴ J·s)",
            questionRu: "Найдите энергию фотона с частотой 5 × 10¹⁴ Гц.",
            questionKk: "Жиілігі 5 × 10¹⁴ Гц фотонның энергиясын табыңыз.",
            steps: [
              { en: "E = hf = 6.63 × 10⁻³⁴ × 5 × 10¹⁴", ru: "E = hf = 6,63 × 10⁻³⁴ × 5 × 10¹⁴", kk: "E = hf = 6,63 × 10⁻³⁴ × 5 × 10¹⁴" },
              { en: "E = 3.315 × 10⁻¹⁹ J", ru: "E = 3,315 × 10⁻¹⁹ Дж", kk: "E = 3,315 × 10⁻¹⁹ Дж" }
            ],
            answer: "3.315 × 10⁻¹⁹ J",
            answerRu: "3,315 × 10⁻¹⁹ Дж",
            answerKk: "3,315 × 10⁻¹⁹ Дж"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is wave-particle duality?",
            questionRu: "Что такое корпускулярно-волновой дуализм?",
            questionKk: "Толқын-бөлшек дуализмі дегеніміз не?",
            answer: "The concept that light (and matter at small scales) exhibits both wave-like and particle-like properties.",
            answerRu: "Концепция, согласно которой свет (и материя в малых масштабах) проявляет свойства и волны, и частицы.",
            answerKk: "Жарық (және кіші масштабтағы зат) толқындық және бөлшектік қасиеттерді бірге көрсететін тұжырымдама.",
            hint: "Light can act as a wave (diffraction) and as a particle (photoelectric effect)",
            hintRu: "Свет может вести себя как волна (дифракция) и как частица (фотоэффект)",
            hintKk: "Жарық толқын (дифракция) және бөлшек (фотоэффект) ретінде әрекет ете алады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A photon has wavelength 600 nm. What is its frequency? (c = 3 × 10⁸ m/s)",
            questionRu: "Длина волны фотона 600 нм. Какова его частота? (c = 3 × 10⁸ м/с)",
            questionKk: "Фотонның толқын ұзындығы 600 нм. Жиілігі қандай? (c = 3 × 10⁸ м/с)",
            answer: "5 × 10¹⁴ Hz",
            answerRu: "5 × 10¹⁴ Гц",
            answerKk: "5 × 10¹⁴ Гц",
            hint: "f = c/λ = 3×10⁸ / 600×10⁻⁹",
            hintRu: "f = c/λ = 3×10⁸ / 600×10⁻⁹",
            hintKk: "f = c/λ = 3×10⁸ / 600×10⁻⁹",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In the photoelectric effect, the work function of a metal is 3.0 eV. What is the minimum frequency of light needed to eject electrons? (h = 4.14 × 10⁻¹⁵ eV·s)",
            questionRu: "Работа выхода металла 3,0 эВ. Какова минимальная частота? (h = 4,14 × 10⁻¹⁵ эВ·с)",
            questionKk: "Металдың шығу жұмысы 3,0 эВ. Ең аз жиілік қандай? (h = 4,14 × 10⁻¹⁵ эВ·с)",
            answer: "≈ 7.25 × 10¹⁴ Hz",
            answerRu: "≈ 7,25 × 10¹⁴ Гц",
            answerKk: "≈ 7,25 × 10¹⁴ Гц",
            hint: "f_min = W/h = 3.0 / 4.14×10⁻¹⁵",
            hintRu: "f_min = W/h = 3,0 / 4,14×10⁻¹⁵",
            hintKk: "f_min = W/h = 3,0 / 4,14×10⁻¹⁵",
            xp: 20
          }
        ]
      },
      // ── 12-8 Reaction Kinetics ──
      {
        title: "Reaction Kinetics",
        titleRu: "Кинетика реакций",
        titleKk: "Реакция кинетикасы",
        content: "Reaction kinetics studies how fast reactions occur. The rate depends on concentration, temperature, surface area, and catalysts. Increasing temperature increases the kinetic energy of particles, causing more frequent and energetic collisions. A catalyst lowers the activation energy without being consumed. The rate law expresses rate as a function of concentrations: rate = k[A]ᵐ[B]ⁿ.",
        contentRu: "Кинетика изучает скорость реакций. Она зависит от концентрации, температуры, площади поверхности и катализаторов. Повышение температуры увеличивает кинетическую энергию частиц — столкновения становятся чаще и энергичнее. Катализатор снижает энергию активации без расходования. Закон скорости: rate = k[A]ᵐ[B]ⁿ.",
        contentKk: "Реакция кинетикасы реакциялардың қаншалықты жылдам жүретінін зерттейді. Жылдамдық концентрацияға, температураға, бет ауданына және катализаторларға байланысты. Температураны жоғарылату бөлшектердің кинетикалық энергиясын арттырады, соқтығыстар жиі және қуатты болады. Катализатор белсендіру энергиясын жұмсалмай төмендетеді. Жылдамдық заңы: rate = k[A]ᵐ[B]ⁿ.",
        keyFormulas: [
          {
            formula: "rate = k[A]ᵐ[B]ⁿ",
            description: "Rate law — rate as a function of reactant concentrations",
            descriptionRu: "Закон скорости — скорость как функция концентраций реагентов",
            descriptionKk: "Жылдамдық заңы — реагент концентрацияларының функциясы ретіндегі жылдамдық"
          }
        ],
        solvedExamples: [
          {
            question: "If rate = k[A]² and [A] is doubled, what happens to the rate?",
            questionRu: "Если rate = k[A]² и [A] удвоилась, что произойдёт со скоростью?",
            questionKk: "Егер rate = k[A]² және [A] екі есе артса, жылдамдыққа не болады?",
            steps: [
              { en: "New rate = k(2[A])² = k × 4[A]² = 4 × original rate", ru: "Новая скорость = k(2[A])² = 4 × исходная", kk: "Жаңа жылдамдық = k(2[A])² = 4 × бастапқы" },
              { en: "The rate quadruples (increases by a factor of 4).", ru: "Скорость увеличивается в 4 раза.", kk: "Жылдамдық 4 есе артады." }
            ],
            answer: "The rate increases by a factor of 4.",
            answerRu: "Скорость увеличивается в 4 раза.",
            answerKk: "Жылдамдық 4 есе артады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name two factors that increase the rate of a chemical reaction.",
            questionRu: "Назовите два фактора, увеличивающих скорость реакции.",
            questionKk: "Химиялық реакция жылдамдығын арттыратын екі факторды атаңыз.",
            answer: "Any two: increasing temperature, increasing concentration, adding a catalyst, increasing surface area",
            answerRu: "Любые два: повышение температуры, увеличение концентрации, добавление катализатора, увеличение площади поверхности",
            answerKk: "Кез келген екеуі: температураны жоғарылату, концентрацияны арттыру, катализатор қосу, бет ауданын арттыру",
            hint: "Think about what gives particles more chances to collide",
            hintRu: "Подумайте, что даёт частицам больше шансов столкнуться",
            hintKk: "Бөлшектерге соқтығысу мүмкіндігін не арттыратынын ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What does a catalyst do? Is it consumed in the reaction?",
            questionRu: "Что делает катализатор? Расходуется ли он в реакции?",
            questionKk: "Катализатор не істейді? Ол реакцияда жұмсала ма?",
            answer: "A catalyst lowers the activation energy, speeding up the reaction. It is NOT consumed — it can be reused.",
            answerRu: "Катализатор снижает энергию активации, ускоряя реакцию. Он НЕ расходуется — его можно использовать повторно.",
            answerKk: "Катализатор белсендіру энергиясын төмендетіп, реакцияны жылдамдатады. Ол ЖҰМСАЛМАЙДЫ — оны қайта пайдалануға болады.",
            hint: "It provides an alternative pathway with lower energy barrier",
            hintRu: "Он предоставляет альтернативный путь с более низким энергетическим барьером",
            hintKk: "Ол төменірек энергия кедергісімен балама жол ұсынады",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "For rate = k[A][B]², if [A] is tripled and [B] is doubled, by what factor does the rate change?",
            questionRu: "Для rate = k[A][B]², если [A] утроится и [B] удвоится, во сколько раз изменится скорость?",
            questionKk: "rate = k[A][B]² үшін, егер [A] үш есе және [B] екі есе артса, жылдамдық қанша есе өзгереді?",
            answer: "12 times",
            answerRu: "12 раз",
            answerKk: "12 есе",
            hint: "Factor = 3 × 2² = 3 × 4 = 12",
            hintRu: "Фактор = 3 × 2² = 3 × 4 = 12",
            hintKk: "Фактор = 3 × 2² = 3 × 4 = 12",
            xp: 20
          }
        ]
      },
      // ── 12-9 Biochemistry ──
      {
        title: "Biochemistry",
        titleRu: "Биохимия",
        titleKk: "Биохимия",
        content: "Biochemistry studies the chemical processes in living organisms. The four major biomolecules are carbohydrates (energy source), lipids (energy storage, membranes), proteins (enzymes, structure), and nucleic acids (DNA, RNA — genetic information). ATP is the energy currency of the cell, produced mainly during cellular respiration.",
        contentRu: "Биохимия изучает химические процессы в живых организмах. Четыре основных биомолекулы: углеводы (источник энергии), липиды (запас энергии, мембраны), белки (ферменты, структура) и нуклеиновые кислоты (ДНК, РНК — генетическая информация). АТФ — энергетическая валюта клетки, производимая при клеточном дыхании.",
        contentKk: "Биохимия тірі организмдердегі химиялық процестерді зерттейді. Төрт негізгі биомолекула: көмірсулар (энергия көзі), липидтер (энергия қоры, мембраналар), белоктар (ферменттер, құрылым) және нуклеин қышқылдары (ДНҚ, РНҚ — генетикалық ақпарат). АТФ — жасуша тыныс алу кезінде өндірілетін жасушаның энергия валютасы.",
        keyFormulas: [
          {
            formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
            description: "Simplified cellular respiration equation",
            descriptionRu: "Упрощённое уравнение клеточного дыхания",
            descriptionKk: "Жеңілдетілген жасуша тыныс алу теңдеуі"
          }
        ],
        solvedExamples: [
          {
            question: "What are the four major biomolecules and their primary functions?",
            questionRu: "Назовите четыре основных биомолекулы и их функции.",
            questionKk: "Төрт негізгі биомолекуланы және олардың негізгі функцияларын атаңыз.",
            steps: [
              { en: "Carbohydrates provide quick energy; lipids store energy and form membranes.", ru: "Углеводы дают быструю энергию; липиды запасают энергию и формируют мембраны.", kk: "Көмірсулар жылдам энергия береді; липидтер энергия жинайды және мембрана түзеді." },
              { en: "Proteins catalyze reactions and provide structure; nucleic acids store genetic information.", ru: "Белки катализируют реакции и обеспечивают структуру; нуклеиновые кислоты хранят генетическую информацию.", kk: "Белоктар реакцияларды катализдейді және құрылым береді; нуклеин қышқылдары генетикалық ақпаратты сақтайды." }
            ],
            answer: "Carbohydrates (energy), Lipids (storage/membranes), Proteins (enzymes/structure), Nucleic acids (genetic info)",
            answerRu: "Углеводы (энергия), Липиды (запас/мембраны), Белки (ферменты/структура), Нуклеиновые кислоты (генетическая информация)",
            answerKk: "Көмірсулар (энергия), Липидтер (қор/мембраналар), Белоктар (ферменттер/құрылым), Нуклеин қышқылдары (генетикалық ақпарат)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the energy currency molecule of the cell?",
            questionRu: "Какая молекула является энергетической валютой клетки?",
            questionKk: "Жасушаның энергия валютасы қандай молекула?",
            answer: "ATP (adenosine triphosphate)",
            answerRu: "АТФ (аденозинтрифосфат)",
            answerKk: "АТФ (аденозинтрифосфат)",
            hint: "This three-letter molecule powers almost all cellular processes",
            hintRu: "Эта трёхбуквенная молекула питает почти все процессы клетки",
            hintKk: "Бұл үш әріпті молекула жасушаның барлық дерлік процестерін қуаттайды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What is the role of enzymes in biochemical reactions?",
            questionRu: "Какова роль ферментов в биохимических реакциях?",
            questionKk: "Биохимиялық реакцияларда ферменттердің рөлі қандай?",
            answer: "Enzymes are biological catalysts that speed up reactions by lowering activation energy. They are specific to their substrates (lock-and-key model).",
            answerRu: "Ферменты — биологические катализаторы, ускоряющие реакции путём снижения энергии активации. Они специфичны к своим субстратам (модель 'ключ-замок').",
            answerKk: "Ферменттер — белсендіру энергиясын төмендету арқылы реакцияларды жылдамдататын биологиялық катализаторлар. Олар өз субстраттарына тән ('кілт-құлып' моделі).",
            hint: "They are protein catalysts — very specific about what they work on",
            hintRu: "Это белковые катализаторы — очень специфичны к субстрату",
            hintKk: "Олар белокты катализаторлар — субстратына өте арнайы",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "How many ATP molecules are produced from one glucose molecule during aerobic cellular respiration?",
            questionRu: "Сколько молекул АТФ производится из одной молекулы глюкозы при аэробном дыхании?",
            questionKk: "Аэробты жасуша тыныс алу кезінде бір глюкоза молекуласынан қанша АТФ молекуласы өндіріледі?",
            answer: "Approximately 36-38 ATP",
            answerRu: "Примерно 36-38 АТФ",
            answerKk: "Шамамен 36-38 АТФ",
            hint: "Glycolysis (2) + Krebs cycle (2) + electron transport chain (32-34)",
            hintRu: "Гликолиз (2) + цикл Кребса (2) + электронная цепь (32-34)",
            hintKk: "Гликолиз (2) + Кребс циклі (2) + электрон тасымалдау тізбегі (32-34)",
            xp: 20
          }
        ]
      },
      // ── 12-10 Human Physiology ──
      {
        title: "Human Physiology",
        titleRu: "Физиология человека",
        titleKk: "Адам физиологиясы",
        content: "Human physiology studies how organ systems work together. The circulatory system (heart, blood vessels) transports oxygen and nutrients. The respiratory system exchanges O₂ and CO₂ in the lungs. The nervous system processes signals via neurons. The digestive system breaks down food into nutrients. Homeostasis is the body's ability to maintain stable internal conditions.",
        contentRu: "Физиология человека изучает совместную работу систем органов. Кровеносная система (сердце, сосуды) транспортирует кислород и питательные вещества. Дыхательная система обменивает O₂ и CO₂ в лёгких. Нервная система обрабатывает сигналы через нейроны. Пищеварительная система расщепляет пищу. Гомеостаз — способность тела поддерживать стабильные условия.",
        contentKk: "Адам физиологиясы ағза жүйелерінің бірге қалай жұмыс істейтінін зерттейді. Қан айналым жүйесі (жүрек, тамырлар) оттегі мен қоректік заттарды тасымалдайды. Тыныс алу жүйесі өкпеде O₂ мен CO₂ алмастырады. Жүйке жүйесі нейрондар арқылы сигналдарды өңдейді. Ас қорыту жүйесі тағамды қоректік заттарға бөледі. Гомеостаз — дененің тұрақты ішкі жағдайларды сақтау қабілеті.",
        keyFormulas: [
          {
            formula: "Heart: Right side → Lungs (pulmonary); Left side → Body (systemic)",
            description: "Double circulation: pulmonary and systemic circuits",
            descriptionRu: "Двойное кровообращение: малый и большой круги",
            descriptionKk: "Қос қан айналымы: кіші және үлкен шеңберлер"
          }
        ],
        solvedExamples: [
          {
            question: "Trace the path of blood from the right atrium back to the right atrium.",
            questionRu: "Проследите путь крови от правого предсердия и обратно.",
            questionKk: "Қанның оң жүрекшеден оң жүрекшеге дейінгі жолын бақылаңыз.",
            steps: [
              { en: "Right atrium → right ventricle → pulmonary artery → lungs (gas exchange) → pulmonary vein → left atrium", ru: "Правое предсердие → правый желудочек → лёгочная артерия → лёгкие (газообмен) → лёгочная вена → левое предсердие", kk: "Оң жүрекше → оң қарынша → өкпе артериясы → өкпе (газ алмасу) → өкпе венасы → сол жүрекше" },
              { en: "Left atrium → left ventricle → aorta → body (delivers O₂) → vena cava → right atrium", ru: "Левое предсердие → левый желудочек → аорта → тело (доставка O₂) → полая вена → правое предсердие", kk: "Сол жүрекше → сол қарынша → аорта → дене (O₂ жеткізу) → қуыс вена → оң жүрекше" }
            ],
            answer: "Right atrium → right ventricle → lungs → left atrium → left ventricle → body → right atrium",
            answerRu: "Правое предсердие → правый желудочек → лёгкие → левое предсердие → левый желудочек → тело → правое предсердие",
            answerKk: "Оң жүрекше → оң қарынша → өкпе → сол жүрекше → сол қарынша → дене → оң жүрекше"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What gas do we inhale and what gas do we exhale?",
            questionRu: "Какой газ мы вдыхаем и какой выдыхаем?",
            questionKk: "Біз қандай газ жұтамыз және қандай газ шығарамыз?",
            answer: "We inhale oxygen (O₂) and exhale carbon dioxide (CO₂).",
            answerRu: "Мы вдыхаем кислород (O₂) и выдыхаем углекислый газ (CO₂).",
            answerKk: "Біз оттегін (O₂) жұтамыз және көмірқышқыл газын (CO₂) шығарамыз.",
            hint: "Breathing brings in what cells need and removes their waste",
            hintRu: "Дыхание доставляет то, что нужно клеткам, и удаляет отходы",
            hintKk: "Тыныс алу жасушаларға қажеттісін жеткізіп, қалдықтарын шығарады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What is homeostasis? Give one example.",
            questionRu: "Что такое гомеостаз? Приведите пример.",
            questionKk: "Гомеостаз дегеніміз не? Бір мысал келтіріңіз.",
            answer: "Homeostasis is the maintenance of stable internal conditions. Example: body temperature regulation at ~37°C through sweating (cooling) and shivering (warming).",
            answerRu: "Гомеостаз — это поддержание стабильных внутренних условий. Пример: регуляция температуры тела на уровне ~37°C через потоотделение (охлаждение) и дрожь (согревание).",
            answerKk: "Гомеостаз — тұрақты ішкі жағдайларды сақтау. Мысал: дене температурасын ~37°C деңгейінде тершеу (салқындату) және дірілдеу (жылыту) арқылы реттеу.",
            hint: "Think about what your body does to maintain a constant temperature",
            hintRu: "Подумайте, как тело поддерживает постоянную температуру",
            hintKk: "Дене тұрақты температураны қалай сақтайтынын ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain how the nervous system and endocrine system differ in their methods of communication.",
            questionRu: "Объясните, как нервная и эндокринная системы различаются в способах передачи сигналов.",
            questionKk: "Жүйке жүйесі мен эндокриндік жүйенің байланыс тәсілдерінің айырмашылығын түсіндіріңіз.",
            answer: "The nervous system uses fast electrical signals (nerve impulses) transmitted along neurons for rapid, targeted responses. The endocrine system uses hormones released into the bloodstream for slower, longer-lasting, widespread effects.",
            answerRu: "Нервная система использует быстрые электрические сигналы (нервные импульсы), передаваемые по нейронам для быстрых, целенаправленных реакций. Эндокринная система использует гормоны, выделяемые в кровоток, для более медленных, длительных и широких эффектов.",
            answerKk: "Жүйке жүйесі жылдам, мақсатты жауаптар үшін нейрондар арқылы берілетін жылдам электрлік сигналдарды (жүйке импульстерін) қолданады. Эндокриндік жүйе баяу, ұзақ әрі кең әсерлер үшін қанға бөлінетін гормондарды қолданады.",
            hint: "One uses electricity (fast, precise); the other uses chemicals in the blood (slow, broad)",
            hintRu: "Одна использует электричество (быстро, точно); другая — химические вещества в крови (медленно, широко)",
            hintKk: "Бірі электр пайдаланады (жылдам, нақты); екіншісі қандағы химиялық заттарды (баяу, кең)",
            xp: 20
          }
        ]
      }
    ]
  }
};
