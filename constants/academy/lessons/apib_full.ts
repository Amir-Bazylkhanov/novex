import type { LessonContent } from '../lessonData.ts';

export const APIB_FULL: Record<string, LessonContent> = {
  "AP / IB Classes_8": {
    planetName: "AP / IB Classes",
    introduction: {
      en: "Welcome to the foundations of Advanced Placement and International Baccalaureate! In Grade 8, you will explore what AP and IB programs are, build pre-AP math and science skills, and develop the study habits needed for rigorous coursework ahead.",
      ru: "Добро пожаловать в основы Advanced Placement и International Baccalaureate! В 8-м классе вы узнаете, что такое программы AP и IB, заложите базу по математике и естественным наукам и разовьёте учебные навыки для подготовки к углублённым курсам."
    },
    sections: [
      {
        title: "What are AP/IB Programs",
        titleRu: "Что такое программы AP/IB",
        titleKk: "AP/IB бағдарламалары дегеніміз не",
        content: "Advanced Placement (AP) and International Baccalaureate (IB) are rigorous academic programs offered in high schools worldwide. AP offers individual college-level courses with standardized exams scored 1-5, while IB is a comprehensive two-year diploma program scored up to 45 points. Both programs can earn you college credit and demonstrate academic readiness to admissions committees.",
        contentRu: "Advanced Placement (AP) и International Baccalaureate (IB) — это углублённые академические программы, предлагаемые в школах по всему миру. AP предлагает отдельные курсы университетского уровня со стандартизированными экзаменами, оцениваемыми от 1 до 5, а IB — это комплексная двухлетняя дипломная программа с максимальным баллом 45. Обе программы могут дать вам зачёт в университете и продемонстрировать академическую готовность.",
        contentKk: "Advanced Placement (AP) және International Baccalaureate (IB) — бүкіл әлемдегі мектептерде ұсынылатын тереңдетілген академиялық бағдарламалар. AP жеке университеттік деңгейдегі курстарды 1-ден 5-ке дейін бағаланатын стандартталған емтихандармен ұсынады, ал IB — 45 балға дейін бағаланатын кешенді екі жылдық диплом бағдарламасы. Екі бағдарлама да университетте сынақ алуға және академиялық дайындығыңызды көрсетуге мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "AP Score: 1-5 scale (3+ = passing)",
            formulaRu: "Балл AP: шкала 1-5 (3+ = зачёт)",
            formulaKk: "AP баллы: 1-5 шкаласы (3+ = өту)",
            description: "AP exams are scored from 1 to 5; most colleges accept 3 or higher for credit",
            descriptionRu: "Экзамены AP оцениваются от 1 до 5; большинство вузов принимают 3 и выше для зачёта",
            descriptionKk: "AP емтихандары 1-ден 5-ке дейін бағаланады; көптеген университеттер 3 және одан жоғарыны сынақ ретінде қабылдайды"
          },
          {
            formula: "IB Score: 24/45 minimum for diploma",
            formulaRu: "Балл IB: минимум 24/45 для диплома",
            formulaKk: "IB баллы: дипломға минимум 24/45",
            description: "IB diploma requires at least 24 out of 45 total points",
            descriptionRu: "Диплом IB требует минимум 24 из 45 баллов",
            descriptionKk: "IB дипломы жалпы 45 балдан кемінде 24 балл алуды талап етеді"
          }
        ],
        solvedExamples: [
          {
            question: "A student scores 5 on AP Calculus and 4 on AP Biology. What is their average AP score?",
            questionRu: "Ученик получил 5 по AP Calculus и 4 по AP Biology. Каков средний балл AP?",
            questionKk: "Оқушы AP Calculus бойынша 5, AP Biology бойынша 4 алды. Орташа AP балы қанша?",
            steps: [
              { en: "Add the scores: 5 + 4 = 9", ru: "Сложим баллы: 5 + 4 = 9", kk: "Балдарды қосамыз: 5 + 4 = 9" },
              { en: "Divide by number of exams: 9 / 2 = 4.5", ru: "Разделим на количество экзаменов: 9 / 2 = 4,5", kk: "Емтихан санына бөлеміз: 9 / 2 = 4,5" }
            ],
            answer: "4.5",
            answerRu: "4,5",
            answerKk: "4,5"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the maximum score on a single AP exam?",
            questionRu: "Каков максимальный балл на одном экзамене AP?",
            questionKk: "Бір AP емтиханындағы ең жоғары балл қанша?",
            answer: "5",
            answerRu: "5",
            answerKk: "5",
            hint: "AP exams use a 1-5 scale",
            hintRu: "Экзамены AP используют шкалу 1-5",
            hintKk: "AP емтихандары 1-5 шкаласын қолданады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "An IB student scores 6, 5, 7, 4, 5, 6 on six subjects and gets 2 bonus points. What is their total IB score?",
            questionRu: "Ученик IB набрал 6, 5, 7, 4, 5, 6 по шести предметам и получил 2 бонусных балла. Каков общий балл IB?",
            questionKk: "IB оқушысы алты пән бойынша 6, 5, 7, 4, 5, 6 алып, 2 бонус балл алды. Жалпы IB балы қанша?",
            answer: "35",
            answerRu: "35",
            answerKk: "35",
            hint: "Add all six subject scores plus the bonus points",
            hintRu: "Сложите все шесть баллов по предметам и бонусные баллы",
            hintKk: "Алты пән балын және бонус балдарды қосыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student wants to take 5 AP exams. If each exam costs $98, and they receive a $34 fee reduction per exam for financial need, how much will they pay total?",
            questionRu: "Ученик хочет сдать 5 экзаменов AP. Если каждый экзамен стоит $98 и предоставляется скидка $34 за экзамен, сколько всего он заплатит?",
            questionKk: "Оқушы 5 AP емтиханын тапсырғысы келеді. Әр емтихан $98 тұрса және қаржылық қажеттілік бойынша $34 жеңілдік берілсе, жалпы қанша төлейді?",
            answer: "$320",
            answerRu: "$320",
            answerKk: "$320",
            hint: "Calculate (98 - 34) per exam, then multiply by 5",
            hintRu: "Вычислите (98 - 34) за экзамен, затем умножьте на 5",
            hintKk: "(98 - 34) әр емтихан үшін есептеп, 5-ке көбейтіңіз",
            xp: 20
          }
        ]
      },
      {
        title: "Pre-AP Math",
        titleRu: "Пре-AP математика",
        titleKk: "AP алды математика",
        content: "Pre-AP math focuses on building algebraic thinking through linear equations and proportional reasoning. Mastering the equation y = mx + b and understanding slope as a rate of change prepares you for AP-level calculus and statistics. These skills form the backbone of every quantitative AP and IB course.",
        contentRu: "Пре-AP математика сосредоточена на развитии алгебраического мышления через линейные уравнения и пропорциональное рассуждение. Освоение уравнения y = mx + b и понимание наклона как скорости изменения готовит вас к AP-курсам по матанализу и статистике. Эти навыки — основа каждого количественного курса AP и IB.",
        contentKk: "AP алды математика сызықтық теңдеулер мен пропорционалдық ойлау арқылы алгебралық ойлауды дамытуға бағытталған. y = mx + b теңдеуін меңгеру және көлбеуді өзгеру жылдамдығы ретінде түсіну сізді AP деңгейіндегі калькулюс пен статистикаға дайындайды. Бұл дағдылар барлық сандық AP және IB курстарының негізін құрайды.",
        keyFormulas: [
          {
            formula: "y = mx + b",
            description: "Slope-intercept form of a linear equation",
            descriptionRu: "Уравнение прямой в форме наклон-пересечение",
            descriptionKk: "Сызықтық теңдеудің көлбеу-қиылысу формасы"
          },
          {
            formula: "m = (y₂ - y₁) / (x₂ - x₁)",
            description: "Slope formula between two points",
            descriptionRu: "Формула наклона между двумя точками",
            descriptionKk: "Екі нүкте арасындағы көлбеу формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the slope of the line through (1, 2) and (4, 8).",
            questionRu: "Найдите наклон прямой через точки (1, 2) и (4, 8).",
            questionKk: "(1, 2) және (4, 8) нүктелері арқылы өтетін түзудің көлбеуін табыңыз.",
            steps: [
              { en: "Apply slope formula: m = (8 - 2) / (4 - 1) = 6 / 3", ru: "Применим формулу наклона: m = (8 - 2) / (4 - 1) = 6 / 3", kk: "Көлбеу формуласын қолданамыз: m = (8 - 2) / (4 - 1) = 6 / 3" },
              { en: "Simplify: m = 2", ru: "Упрощаем: m = 2", kk: "Жеңілдетеміз: m = 2" }
            ],
            answer: "m = 2",
            answerRu: "m = 2",
            answerKk: "m = 2"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the y-intercept of y = 3x + 7?",
            questionRu: "Какова точка пересечения с осью y для y = 3x + 7?",
            questionKk: "y = 3x + 7 теңдеуінің y осімен қиылысу нүктесі қандай?",
            answer: "7",
            answerRu: "7",
            answerKk: "7",
            hint: "In y = mx + b, the y-intercept is b",
            hintRu: "В y = mx + b точка пересечения с осью y — это b",
            hintKk: "y = mx + b теңдеуінде y осімен қиылысу нүктесі — b",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the slope of the line through (−2, 5) and (3, −5).",
            questionRu: "Найдите наклон прямой через (−2, 5) и (3, −5).",
            questionKk: "(−2, 5) және (3, −5) нүктелері арқылы өтетін түзудің көлбеуін табыңыз.",
            answer: "−2",
            answerRu: "−2",
            answerKk: "−2",
            hint: "m = (−5 − 5) / (3 − (−2))",
            hintRu: "m = (−5 − 5) / (3 − (−2))",
            hintKk: "m = (−5 − 5) / (3 − (−2))",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Write the equation of a line with slope 4 that passes through (2, 3).",
            questionRu: "Запишите уравнение прямой с наклоном 4, проходящей через (2, 3).",
            questionKk: "Көлбеуі 4 болып, (2, 3) нүктесі арқылы өтетін түзудің теңдеуін жазыңыз.",
            answer: "y = 4x − 5",
            answerRu: "y = 4x − 5",
            answerKk: "y = 4x − 5",
            hint: "Use point-slope form: y − y₁ = m(x − x₁), then convert to slope-intercept",
            hintRu: "Используйте форму точка-наклон: y − y₁ = m(x − x₁), затем преобразуйте",
            hintKk: "Нүкте-көлбеу формасын қолданыңыз: y − y₁ = m(x − x₁), содан кейін түрлендіріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "Scientific Method",
        titleRu: "Научный метод",
        titleKk: "Ғылыми әдіс",
        content: "The scientific method is the systematic approach used in all AP and IB science courses. It involves observation, forming a hypothesis, designing experiments, collecting data, and drawing conclusions. Understanding this process is essential because every lab report and research project you complete will follow these steps.",
        contentRu: "Научный метод — это систематический подход, используемый во всех курсах AP и IB по естественным наукам. Он включает наблюдение, формулирование гипотезы, планирование экспериментов, сбор данных и формулирование выводов. Понимание этого процесса необходимо, так как каждый лабораторный отчёт следует этим шагам.",
        contentKk: "Ғылыми әдіс — барлық AP және IB жаратылыстану курстарында қолданылатын жүйелі тәсіл. Ол бақылау, гипотеза құру, эксперимент жоспарлау, деректер жинау және қорытынды шығаруды қамтиды. Бұл процесті түсіну маңызды, себебі әрбір зертханалық есеп осы қадамдарды орындайды.",
        keyFormulas: [
          {
            formula: "Observation → Hypothesis → Experiment → Analysis → Conclusion",
            formulaRu: "Наблюдение → Гипотеза → Эксперимент → Анализ → Вывод",
            formulaKk: "Бақылау → Гипотеза → Тәжірибе → Талдау → Қорытынды",
            description: "The five core steps of the scientific method",
            descriptionRu: "Пять основных шагов научного метода",
            descriptionKk: "Ғылыми әдістің бес негізгі қадамы"
          }
        ],
        solvedExamples: [
          {
            question: "A student hypothesizes that plants grow faster with more sunlight. They grow 3 plants: one in shade (2 cm growth), one in partial sun (5 cm), and one in full sun (9 cm). Does the data support the hypothesis?",
            questionRu: "Ученик выдвигает гипотезу, что растения растут быстрее при большем количестве солнечного света. Он выращивает 3 растения: в тени (рост 2 см), при частичном солнце (5 см) и при полном солнце (9 см). Подтверждают ли данные гипотезу?",
            questionKk: "Оқушы өсімдіктер көбірек күн сәулесімен тезірек өседі деген гипотеза ұсынады. 3 өсімдік өсіреді: көлеңкеде (2 см), жартылай күнде (5 см), толық күнде (9 см). Деректер гипотезаны растайды ма?",
            steps: [
              { en: "Compare growth values across conditions: shade (2 cm) < partial (5 cm) < full sun (9 cm)", ru: "Сравним рост в разных условиях: тень (2 см) < частичное (5 см) < полное солнце (9 см)", kk: "Жағдайлар бойынша өсуді салыстырамыз: көлеңке (2 см) < жартылай (5 см) < толық күн (9 см)" },
              { en: "Growth increases with sunlight, so the data supports the hypothesis", ru: "Рост увеличивается с увеличением солнечного света, поэтому данные подтверждают гипотезу", kk: "Өсу күн сәулесімен артады, сондықтан деректер гипотезаны растайды" }
            ],
            answer: "Yes, the data supports the hypothesis — growth increases with more sunlight.",
            answerRu: "Да, данные подтверждают гипотезу — рост увеличивается с ростом солнечного света.",
            answerKk: "Иә, деректер гипотезаны растайды — күн сәулесі көбейген сайын өсу артады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What comes after forming a hypothesis in the scientific method?",
            questionRu: "Что следует после формулирования гипотезы в научном методе?",
            questionKk: "Ғылыми әдісте гипотеза құрғаннан кейін не келеді?",
            answer: "Experiment (testing the hypothesis)",
            answerRu: "Эксперимент (проверка гипотезы)",
            answerKk: "Эксперимент (гипотезаны тексеру)",
            hint: "Think about the five steps in order",
            hintRu: "Подумайте о пяти шагах по порядку",
            hintKk: "Бес қадамды ретімен ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "In an experiment testing whether fertilizer affects plant height, what is the independent variable?",
            questionRu: "В эксперименте по проверке влияния удобрения на высоту растения, что является независимой переменной?",
            questionKk: "Тыңайтқыштың өсімдік биіктігіне әсерін тексеретін тәжірибеде тәуелсіз айнымалы не?",
            answer: "The amount of fertilizer",
            answerRu: "Количество удобрения",
            answerKk: "Тыңайтқыш мөлшері",
            hint: "The independent variable is what the experimenter changes",
            hintRu: "Независимая переменная — это то, что экспериментатор изменяет",
            hintKk: "Тәуелсіз айнымалы — эксперименттеуші өзгертетін нәрсе",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student tests three brands of paper towels for absorbency. They measure water absorbed in mL. Why should they repeat each test at least 3 times?",
            questionRu: "Ученик тестирует три марки бумажных полотенец на впитываемость, измеряя объём впитанной воды в мл. Почему каждый тест нужно повторить минимум 3 раза?",
            questionKk: "Оқушы үш маркалы қағаз сүлгінің сіңіргіштігін сынайды, сіңірілген суды мл-мен өлшейді. Неге әр сынақты кемінде 3 рет қайталау керек?",
            answer: "To ensure reliability of results and reduce the effect of random errors/outliers",
            answerRu: "Чтобы обеспечить надёжность результатов и уменьшить влияние случайных ошибок/выбросов",
            answerKk: "Нәтижелердің сенімділігін қамтамасыз ету және кездейсоқ қателердің/ерекше мәндердің әсерін азайту үшін",
            hint: "Think about what could go wrong in a single trial",
            hintRu: "Подумайте, что может пойти не так в одном испытании",
            hintKk: "Бір сынақта не дұрыс болмауы мүмкін екенін ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "Analytical Reading",
        titleRu: "Аналитическое чтение",
        titleKk: "Аналитикалық оқу",
        content: "Analytical reading means going beyond surface understanding to examine an author's purpose, argument structure, and use of evidence. AP English and IB Language & Literature courses require you to identify rhetorical devices, evaluate claims, and synthesize information from multiple sources. Building this skill early gives you a major advantage in humanities-based AP/IB courses.",
        contentRu: "Аналитическое чтение означает выход за рамки поверхностного понимания для изучения цели автора, структуры аргумента и использования доказательств. Курсы AP English и IB Language & Literature требуют выявлять риторические приёмы, оценивать утверждения и синтезировать информацию из нескольких источников. Раннее развитие этого навыка даёт большое преимущество в гуманитарных курсах AP/IB.",
        contentKk: "Аналитикалық оқу — автордың мақсатын, дәлел құрылымын және дәлелдемелерді зерттеу үшін беткі түсіністіктен тыс шығуды білдіреді. AP English және IB Language & Literature курстары риторикалық тәсілдерді анықтауды, мәлімдемелерді бағалауды және бірнеше дереккөзден ақпаратты біріктіруді талап етеді. Бұл дағдыны ерте дамыту гуманитарлық AP/IB курстарында үлкен артықшылық береді.",
        keyFormulas: [
          {
            formula: "SOAPSTone: Speaker, Occasion, Audience, Purpose, Subject, Tone",
            formulaRu: "SOAPSTone: Автор, Повод, Аудитория, Цель, Тема, Тон",
            formulaKk: "SOAPSTone: Автор, Себеп, Аудитория, Мақсат, Тақырып, Тон",
            description: "Framework for analyzing rhetorical texts",
            descriptionRu: "Рамка для анализа риторических текстов",
            descriptionKk: "Риторикалық мәтіндерді талдау шеңбері"
          }
        ],
        solvedExamples: [
          {
            question: "A passage argues: 'Schools should start later because sleep-deprived teens perform 23% worse on tests (National Sleep Foundation, 2023).' Identify the claim and evidence.",
            questionRu: "В тексте утверждается: «Школы должны начинать позже, потому что невыспавшиеся подростки показывают результаты на 23% хуже (National Sleep Foundation, 2023)». Определите утверждение и доказательство.",
            questionKk: "Мәтінде: «Мектептер кешірек басталуы керек, себебі ұйқысы жеткіліксіз жасөспірімдер тесттерде 23% нашар нәтиже көрсетеді (National Sleep Foundation, 2023)» деп дәлелденеді. Мәлімдеме мен дәлелдемені анықтаңыз.",
            steps: [
              { en: "Identify the claim: 'Schools should start later' — this is the author's position", ru: "Определяем утверждение: «Школы должны начинать позже» — это позиция автора", kk: "Мәлімдемені анықтаймыз: «Мектептер кешірек басталуы керек» — бұл автордың ұстанымы" },
              { en: "Identify the evidence: '23% worse on tests (National Sleep Foundation, 2023)' — a statistic from a credible source", ru: "Определяем доказательство: «на 23% хуже на тестах (National Sleep Foundation, 2023)» — статистика из надёжного источника", kk: "Дәлелдемені анықтаймыз: «тесттерде 23% нашар (National Sleep Foundation, 2023)» — сенімді дереккөзден статистика" }
            ],
            answer: "Claim: Schools should start later. Evidence: 23% worse test performance (National Sleep Foundation, 2023).",
            answerRu: "Утверждение: школы должны начинать позже. Доказательство: результаты на 23% хуже (National Sleep Foundation, 2023).",
            answerKk: "Мәлімдеме: мектептер кешірек басталуы керек. Дәлелдеме: нәтижелер 23% нашар (National Sleep Foundation, 2023)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What does the 'P' in SOAPSTone stand for?",
            questionRu: "Что означает буква 'P' в SOAPSTone?",
            questionKk: "SOAPSTone ішіндегі 'P' нені білдіреді?",
            answer: "Purpose",
            answerRu: "Цель (Purpose)",
            answerKk: "Мақсат (Purpose)",
            hint: "It describes why the author wrote the text",
            hintRu: "Это описывает, зачем автор написал текст",
            hintKk: "Бұл автордың мәтінді неге жазғанын сипаттайды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Is the following statement a fact or an opinion? 'The Mona Lisa is the most beautiful painting ever created.'",
            questionRu: "Следующее утверждение — факт или мнение? «Мона Лиза — самая красивая картина в истории.»",
            questionKk: "Келесі мәлімдеме факт пе, пікір ме? «Мона Лиза — тарихтағы ең әдемі картина.»",
            answer: "Opinion — 'most beautiful' is a subjective judgment that cannot be objectively measured",
            answerRu: "Мнение — «самая красивая» является субъективным суждением, которое нельзя объективно измерить",
            answerKk: "Пікір — «ең әдемі» деген субъективті пайымдау, оны объективті өлшеу мүмкін емес",
            hint: "Can this claim be proven with data?",
            hintRu: "Можно ли доказать это утверждение данными?",
            hintKk: "Бұл мәлімдемені деректермен дәлелдеуге бола ма?",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "An author writes about climate change using emotional language like 'devastating' and 'catastrophic' while citing peer-reviewed studies. What rhetorical strategies are being combined?",
            questionRu: "Автор пишет о климатических изменениях, используя эмоциональный язык (опустошительный, катастрофический) и цитируя рецензированные исследования. Какие риторические стратегии совмещены?",
            questionKk: "Автор климат өзгерісі туралы «жойқын», «апатты» сияқты эмоционалды тілді қолданып, рецензияланған зерттеулерге сілтеме жасайды. Қандай риторикалық стратегиялар біріктірілген?",
            answer: "Pathos (emotional appeal through word choice) and logos (logical appeal through scientific evidence)",
            answerRu: "Пафос (эмоциональное воздействие через выбор слов) и логос (логическое воздействие через научные доказательства)",
            answerKk: "Пафос (сөз таңдау арқылы эмоционалды әсер) және логос (ғылыми дәлелдер арқылы логикалық әсер)",
            hint: "Think about Aristotle's three modes of persuasion",
            hintRu: "Подумайте о трёх способах убеждения Аристотеля",
            hintKk: "Аристотельдің үш сендіру тәсілін ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "Lab Safety",
        titleRu: "Безопасность в лаборатории",
        titleKk: "Зертхана қауіпсіздігі",
        content: "Lab safety is the first thing you learn in any AP or IB science course. Knowing how to handle chemicals, use equipment properly, and respond to emergencies protects you and your classmates. Every lab report must include a safety section, and AP/IB exams frequently test safety knowledge in experimental design questions.",
        contentRu: "Безопасность в лаборатории — первое, что вы изучаете в любом курсе AP или IB по естественным наукам. Умение обращаться с химическими веществами, правильно использовать оборудование и реагировать на чрезвычайные ситуации защищает вас и ваших одноклассников. Каждый лабораторный отчёт должен включать раздел безопасности.",
        contentKk: "Зертхана қауіпсіздігі — кез келген AP немесе IB жаратылыстану курсында алғаш үйренетін нәрсе. Химиялық заттармен жұмыс істеуді, жабдықтарды дұрыс пайдалануды және төтенше жағдайларда әрекет етуді білу сізді және сыныптастарыңызды қорғайды. Әрбір зертханалық есепке қауіпсіздік бөлімі қосылуы керек.",
        keyFormulas: [
          {
            formula: "WHMIS symbols: Flame, Oxidizer, Corrosion, Skull, Exclamation, Health Hazard",
            formulaRu: "Символы WHMIS: Пламя, Окислитель, Коррозия, Череп, Восклицательный знак, Опасность для здоровья",
            formulaKk: "WHMIS таңбалары: Жалын, Тотықтырғыш, Коррозия, Бас сүйек, Леп белгісі, Денсаулыққа қауіп",
            description: "Standard hazard symbols found on chemical labels",
            descriptionRu: "Стандартные символы опасности на этикетках химических веществ",
            descriptionKk: "Химиялық заттар белгілеріндегі стандартты қауіп белгілері"
          }
        ],
        solvedExamples: [
          {
            question: "A student spills a small amount of dilute acid on the lab bench. What are the correct steps to handle this?",
            questionRu: "Ученик пролил небольшое количество разбавленной кислоты на лабораторный стол. Какие шаги нужно предпринять?",
            questionKk: "Оқушы зертханалық үстелге аз мөлшерде сұйытылған қышқыл төкті. Қандай қадамдар жасау керек?",
            steps: [
              { en: "Alert the teacher and nearby students; put on gloves if not already wearing them", ru: "Предупредите учителя и ближайших учеников; наденьте перчатки, если их ещё нет", kk: "Мұғалімді және жақын отырған оқушыларды ескертіңіз; қолғап киіңіз" },
              { en: "Neutralize with baking soda (sodium bicarbonate), then wipe with paper towels and dispose properly", ru: "Нейтрализуйте пищевой содой, затем протрите бумажными полотенцами и утилизируйте правильно", kk: "Ас содасымен (натрий бикарбонаты) бейтараптаңыз, содан кейін қағаз сүлгімен сүртіп, дұрыс тастаңыз" }
            ],
            answer: "Alert teacher, neutralize with baking soda, clean up, and dispose of materials properly.",
            answerRu: "Предупредите учителя, нейтрализуйте пищевой содой, уберите и правильно утилизируйте материалы.",
            answerKk: "Мұғалімді ескертіңіз, ас содасымен бейтараптаңыз, тазалаңыз және материалдарды дұрыс тастаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Should you eat or drink in a science laboratory?",
            questionRu: "Можно ли есть или пить в научной лаборатории?",
            questionKk: "Ғылыми зертханада тамақ ішуге немесе су ішуге бола ма?",
            answer: "No — food and drink are never allowed in a lab",
            answerRu: "Нет — еда и напитки никогда не разрешены в лаборатории",
            answerKk: "Жоқ — тамақ пен сусынға зертханада ешқашан рұқсат етілмейді",
            hint: "Think about contamination risks",
            hintRu: "Подумайте о рисках загрязнения",
            hintKk: "Ластану қаупі туралы ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Why should you always add acid to water, not water to acid?",
            questionRu: "Почему кислоту всегда добавляют в воду, а не воду в кислоту?",
            questionKk: "Неге қышқылды суға қосады, суды қышқылға емес?",
            answer: "Adding acid to water allows the large volume of water to absorb the heat of the exothermic reaction safely; adding water to acid can cause violent boiling and splashing",
            answerRu: "Добавление кислоты в воду позволяет большому объёму воды безопасно поглотить тепло экзотермической реакции; добавление воды в кислоту может вызвать бурное кипение и разбрызгивание",
            answerKk: "Қышқылды суға қосу судың үлкен көлеміне экзотермиялық реакция жылуын қауіпсіз сіңіруге мүмкіндік береді; суды қышқылға қосу қатты қайнауға және шашырауға әкелуі мүмкін",
            hint: "Think about what happens with heat during mixing",
            hintRu: "Подумайте, что происходит с теплом при смешивании",
            hintKk: "Араластыру кезінде жылумен не болатынын ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Design a safety protocol for an experiment that involves heating an unknown liquid in a test tube. List at least 3 precautions.",
            questionRu: "Разработайте протокол безопасности для эксперимента с нагреванием неизвестной жидкости в пробирке. Перечислите минимум 3 меры предосторожности.",
            questionKk: "Сынақ түтігінде белгісіз сұйықтықты қыздыру тәжірибесі үшін қауіпсіздік хаттамасын жасаңыз. Кемінде 3 сақтық шарасын атаңыз.",
            answer: "1) Wear safety goggles and heat-resistant gloves. 2) Point test tube away from people when heating. 3) Heat gently and never heat a sealed container. 4) Work near a fire extinguisher.",
            answerRu: "1) Наденьте защитные очки и термостойкие перчатки. 2) Направляйте пробирку в сторону от людей при нагревании. 3) Нагревайте осторожно и никогда не нагревайте закрытый сосуд. 4) Работайте рядом с огнетушителем.",
            answerKk: "1) Қорғаныш көзілдірік пен ыстыққа төзімді қолғап киіңіз. 2) Қыздырғанда сынақ түтігін адамдардан алшақ бағыттаңыз. 3) Ақырын қыздырыңыз және жабық ыдысты ешқашан қыздырмаңыз. 4) Өрт сөндіргіштің жанында жұмыс істеңіз.",
            hint: "Consider eye protection, direction of the tube opening, and heating technique",
            hintRu: "Подумайте о защите глаз, направлении отверстия пробирки и технике нагрева",
            hintKk: "Көз қорғанысы, түтік саңылауының бағыты және қыздыру техникасы туралы ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "Data Collection",
        titleRu: "Сбор данных",
        titleKk: "Деректер жинау",
        content: "Proper data collection is critical for AP and IB lab work. You must distinguish between qualitative observations (color, smell, texture) and quantitative measurements (mass, volume, temperature). Recording data in organized tables with units and appropriate significant figures ensures your results are reproducible and scientifically valid.",
        contentRu: "Правильный сбор данных критически важен для лабораторных работ AP и IB. Вы должны различать качественные наблюдения (цвет, запах, текстура) и количественные измерения (масса, объём, температура). Запись данных в организованных таблицах с единицами измерения и значащими цифрами обеспечивает воспроизводимость результатов.",
        contentKk: "Дұрыс деректер жинау AP және IB зертханалық жұмысы үшін өте маңызды. Сапалық бақылауларды (түс, иіс, текстура) және сандық өлшемдерді (масса, көлем, температура) ажырату керек. Деректерді бірлігі мен мәнді сандарымен ұйымдастырылған кестелерде жазу нәтижелеріңіздің қайталанатынын қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "Percent Error = |Experimental − Theoretical| / Theoretical × 100%",
            formulaRu: "Процентная ошибка = |Экспериментальное − Теоретическое| / Теоретическое × 100%",
            formulaKk: "Пайыздық қате = |Тәжірибелік − Теориялық| / Теориялық × 100%",
            description: "Measures how far your result is from the accepted value",
            descriptionRu: "Измеряет, насколько ваш результат отличается от принятого значения",
            descriptionKk: "Нәтижеңіздің қабылданған мәннен қаншалықты алыс екенін өлшейді"
          },
          {
            formula: "Mean = Σx / n",
            formulaRu: "Среднее значение = Σx / n",
            formulaKk: "Орташа мән = Σx / n",
            description: "Average of a set of measurements",
            descriptionRu: "Среднее значение набора измерений",
            descriptionKk: "Өлшемдер жиынтығының орташа мәні"
          }
        ],
        solvedExamples: [
          {
            question: "A student measures the boiling point of water three times: 99.5°C, 100.2°C, 99.8°C. Calculate the mean and percent error (theoretical = 100.0°C).",
            questionRu: "Ученик измеряет температуру кипения воды три раза: 99,5°C, 100,2°C, 99,8°C. Вычислите среднее значение и процент погрешности (теоретическое = 100,0°C).",
            questionKk: "Оқушы судың қайнау температурасын үш рет өлшейді: 99,5°C, 100,2°C, 99,8°C. Орташа мән мен пайыздық қатені есептеңіз (теориялық = 100,0°C).",
            steps: [
              { en: "Calculate the mean: (99.5 + 100.2 + 99.8) / 3 = 299.5 / 3 = 99.83°C", ru: "Вычислим среднее: (99,5 + 100,2 + 99,8) / 3 = 299,5 / 3 = 99,83°C", kk: "Орташаны есептейміз: (99,5 + 100,2 + 99,8) / 3 = 299,5 / 3 = 99,83°C" },
              { en: "Percent error: |99.83 − 100.0| / 100.0 × 100% = 0.17%", ru: "Процент погрешности: |99,83 − 100,0| / 100,0 × 100% = 0,17%", kk: "Пайыздық қате: |99,83 − 100,0| / 100,0 × 100% = 0,17%" }
            ],
            answer: "Mean = 99.83°C, Percent error = 0.17%",
            answerRu: "Среднее = 99,83°C, Процент погрешности = 0,17%",
            answerKk: "Орташа = 99,83°C, Пайыздық қате = 0,17%"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is 'the solution turned blue' a qualitative or quantitative observation?",
            questionRu: "«Раствор стал синим» — это качественное или количественное наблюдение?",
            questionKk: "«Ерітінді көк түске айналды» — бұл сапалық па, сандық бақылау ма?",
            answer: "Qualitative",
            answerRu: "Качественное",
            answerKk: "Сапалық",
            hint: "Does it involve a number or a description?",
            hintRu: "Это связано с числом или описанием?",
            hintKk: "Бұл санмен байланысты ма, әлде сипаттамамен ме?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Calculate the mean of these mass measurements: 12.3 g, 12.5 g, 12.1 g, 12.4 g.",
            questionRu: "Вычислите среднее значение этих измерений массы: 12,3 г, 12,5 г, 12,1 г, 12,4 г.",
            questionKk: "Мына масса өлшемдерінің орташасын есептеңіз: 12,3 г, 12,5 г, 12,1 г, 12,4 г.",
            answer: "12.325 g",
            answerRu: "12,325 г",
            answerKk: "12,325 г",
            hint: "Add all values and divide by 4",
            hintRu: "Сложите все значения и разделите на 4",
            hintKk: "Барлық мәндерді қосып, 4-ке бөліңіз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student measures the density of aluminum as 2.85 g/cm³. The accepted value is 2.70 g/cm³. What is the percent error?",
            questionRu: "Ученик измерил плотность алюминия как 2,85 г/см³. Принятое значение — 2,70 г/см³. Каков процент погрешности?",
            questionKk: "Оқушы алюминийдің тығыздығын 2,85 г/см³ деп өлшеді. Қабылданған мән — 2,70 г/см³. Пайыздық қате қандай?",
            answer: "5.56%",
            answerRu: "5,56%",
            answerKk: "5,56%",
            hint: "|2.85 − 2.70| / 2.70 × 100%",
            hintRu: "|2,85 − 2,70| / 2,70 × 100%",
            hintKk: "|2,85 − 2,70| / 2,70 × 100%",
            xp: 20
          }
        ]
      },
      {
        title: "Graph Interpretation",
        titleRu: "Интерпретация графиков",
        titleKk: "Графиктерді түсіндіру",
        content: "Reading and interpreting graphs is a fundamental skill tested on every AP and IB science exam. You must be able to identify trends, calculate slopes from line graphs, and determine relationships between variables. Common graph types include line graphs for continuous data, bar graphs for categorical data, and scatter plots for correlation analysis.",
        contentRu: "Чтение и интерпретация графиков — фундаментальный навык, проверяемый на каждом экзамене AP и IB по естественным наукам. Вы должны уметь определять тенденции, вычислять наклон линейных графиков и определять связи между переменными. Основные типы: линейные графики, столбчатые диаграммы и диаграммы рассеяния.",
        contentKk: "Графиктерді оқу және түсіндіру — әрбір AP және IB жаратылыстану емтиханында тексерілетін негізгі дағды. Үрдістерді анықтау, сызықтық графиктерден көлбеу есептеу және айнымалылар арасындағы байланысты анықтау керек. Негізгі түрлері: сызықтық графиктер, бағаналы диаграммалар және шашырау диаграммалары.",
        keyFormulas: [
          {
            formula: "Slope of graph = Δy / Δx = (y₂ − y₁) / (x₂ − x₁)",
            formulaRu: "Наклон графика = Δy / Δx = (y₂ − y₁) / (x₂ − x₁)",
            formulaKk: "Графиктің көлбеуі = Δy / Δx = (y₂ − y₁) / (x₂ − x₁)",
            description: "Rate of change between two points on a graph",
            descriptionRu: "Скорость изменения между двумя точками на графике",
            descriptionKk: "Графиктегі екі нүкте арасындағы өзгеру жылдамдығы"
          }
        ],
        solvedExamples: [
          {
            question: "A distance-time graph shows a car at 20 km at t=1 hr and 80 km at t=3 hr. What is the car's speed?",
            questionRu: "График расстояние-время показывает автомобиль на 20 км при t=1 ч и 80 км при t=3 ч. Какова скорость автомобиля?",
            questionKk: "Қашықтық-уақыт графигі автомобильді t=1 сағ кезінде 20 км, t=3 сағ кезінде 80 км деп көрсетеді. Автомобильдің жылдамдығы қандай?",
            steps: [
              { en: "Calculate the slope: Δy/Δx = (80 − 20) / (3 − 1) = 60 / 2", ru: "Вычислим наклон: Δy/Δx = (80 − 20) / (3 − 1) = 60 / 2", kk: "Көлбеуді есептейміз: Δy/Δx = (80 − 20) / (3 − 1) = 60 / 2" },
              { en: "Speed = 30 km/hr", ru: "Скорость = 30 км/ч", kk: "Жылдамдық = 30 км/сағ" }
            ],
            answer: "30 km/hr",
            answerRu: "30 км/ч",
            answerKk: "30 км/сағ"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What type of graph is best for showing the relationship between temperature and time during heating?",
            questionRu: "Какой тип графика лучше всего показывает связь между температурой и временем при нагревании?",
            questionKk: "Қыздыру кезінде температура мен уақыт арасындағы байланысты қай тип график жақсы көрсетеді?",
            answer: "Line graph",
            answerRu: "Линейный график",
            answerKk: "Сызықтық график",
            hint: "Both variables are continuous",
            hintRu: "Обе переменные непрерывные",
            hintKk: "Екі айнымалы да үздіксіз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A graph shows population growing slowly, then rapidly, then leveling off. What type of growth curve is this?",
            questionRu: "На графике популяция растёт медленно, затем быстро, потом выходит на плато. Какой это тип кривой роста?",
            questionKk: "Графикте популяция баяу, содан кейін тез өсіп, кейін тұрақтанады. Бұл өсу қисығының қандай түрі?",
            answer: "S-curve (logistic growth curve)",
            answerRu: "S-образная кривая (логистическая кривая роста)",
            answerKk: "S-тәрізді қисық (логистикалық өсу қисығы)",
            hint: "Think about carrying capacity and resource limits",
            hintRu: "Подумайте о ёмкости среды и ограниченности ресурсов",
            hintKk: "Орта сыйымдылығы мен ресурстар шектеулілігі туралы ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A velocity-time graph shows a straight line from (0, 0) to (5, 20). What does the area under this line represent, and what is its value?",
            questionRu: "График скорость-время показывает прямую от (0, 0) до (5, 20). Что представляет площадь под этой прямой и каково её значение?",
            questionKk: "Жылдамдық-уақыт графигі (0, 0)-ден (5, 20)-ға дейінгі түзу сызықты көрсетеді. Бұл сызықтың астындағы аудан нені білдіреді және оның мәні қандай?",
            answer: "The area represents displacement. Area = ½ × base × height = ½ × 5 × 20 = 50 meters.",
            answerRu: "Площадь представляет перемещение. Площадь = ½ × основание × высота = ½ × 5 × 20 = 50 метров.",
            answerKk: "Аудан орын ауыстыруды білдіреді. Аудан = ½ × табан × биіктік = ½ × 5 × 20 = 50 метр.",
            hint: "Area under a v-t graph = displacement; the shape is a triangle",
            hintRu: "Площадь под графиком v-t = перемещение; фигура — треугольник",
            hintKk: "v-t графигінің астындағы аудан = орын ауыстыру; пішін — үшбұрыш",
            xp: 20
          }
        ]
      },
      {
        title: "Study Skills",
        titleRu: "Навыки учёбы",
        titleKk: "Оқу дағдылары",
        content: "AP and IB courses demand college-level study habits. Effective strategies include spaced repetition for memorization, active recall through practice problems, and the Pomodoro technique for sustained focus. Students who develop these habits before starting AP/IB courses perform significantly better than those who rely on cramming.",
        contentRu: "Курсы AP и IB требуют учебных навыков университетского уровня. Эффективные стратегии включают интервальное повторение для запоминания, активное воспроизведение через практические задачи и технику Помодоро для длительной концентрации. Студенты, развивающие эти привычки до начала курсов AP/IB, показывают значительно лучшие результаты.",
        contentKk: "AP және IB курстары университеттік деңгейдегі оқу дағдыларын талап етеді. Тиімді стратегиялар: есте сақтау үшін аралықты қайталау, практикалық есептер арқылы белсенді еске түсіру және ұзақ шоғырлану үшін Помодоро техникасы. Бұл дағдыларды AP/IB курстарынан бұрын дамытқан оқушылар айтарлықтай жақсы нәтиже көрсетеді.",
        keyFormulas: [
          {
            formula: "Pomodoro: 25 min focus + 5 min break × 4 = 1 long break (15-30 min)",
            formulaRu: "Помодоро: 25 мин концентрации + 5 мин перерыва × 4 = 1 длинный перерыв (15-30 мин)",
            formulaKk: "Помодоро: 25 мин шоғырлану + 5 мин үзіліс × 4 = 1 ұзақ үзіліс (15-30 мин)",
            description: "Time management technique for sustained study sessions",
            descriptionRu: "Техника управления временем для длительных учебных сессий",
            descriptionKk: "Ұзақ оқу сессиялары үшін уақытты басқару техникасы"
          }
        ],
        solvedExamples: [
          {
            question: "A student studies for 3 hours using Pomodoro (25 min work, 5 min break). How many complete Pomodoro cycles can they fit, and how much actual study time do they get?",
            questionRu: "Ученик занимается 3 часа, используя Помодоро (25 мин работы, 5 мин перерыв). Сколько полных циклов поместится и сколько реального времени учёбы получится?",
            questionKk: "Оқушы 3 сағат бойы Помодоро қолданады (25 мин жұмыс, 5 мин үзіліс). Қанша толық цикл сияды және нақты оқу уақыты қанша болады?",
            steps: [
              { en: "Each cycle = 25 + 5 = 30 min. Total time = 180 min. Cycles = 180/30 = 6 cycles", ru: "Каждый цикл = 25 + 5 = 30 мин. Общее время = 180 мин. Циклов = 180/30 = 6", kk: "Әр цикл = 25 + 5 = 30 мин. Жалпы уақыт = 180 мин. Циклдер = 180/30 = 6" },
              { en: "Actual study time = 6 × 25 = 150 min = 2.5 hours", ru: "Реальное время учёбы = 6 × 25 = 150 мин = 2,5 часа", kk: "Нақты оқу уақыты = 6 × 25 = 150 мин = 2,5 сағат" }
            ],
            answer: "6 cycles, 150 minutes (2.5 hours) of actual study time",
            answerRu: "6 циклов, 150 минут (2,5 часа) реального времени учёбы",
            answerKk: "6 цикл, 150 минут (2,5 сағат) нақты оқу уақыты"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the recommended work duration in one Pomodoro cycle?",
            questionRu: "Какова рекомендуемая продолжительность работы в одном цикле Помодоро?",
            questionKk: "Бір Помодоро циклінде ұсынылатын жұмыс ұзақтығы қанша?",
            answer: "25 minutes",
            answerRu: "25 минут",
            answerKk: "25 минут",
            hint: "It is named after a tomato-shaped kitchen timer",
            hintRu: "Название происходит от кухонного таймера в форме помидора",
            hintKk: "Атауы қызанақ тәріздес асхана таймерінен шыққан",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Which study method is more effective for long-term retention: re-reading notes or practice testing? Why?",
            questionRu: "Какой метод учёбы эффективнее для долгосрочного запоминания: перечитывание конспектов или практическое тестирование? Почему?",
            questionKk: "Ұзақ мерзімді есте сақтау үшін қай оқу әдісі тиімдірек: жазбаларды қайта оқу ма, практикалық тестілеу ме? Неге?",
            answer: "Practice testing — it forces active recall, which strengthens memory pathways more than passive re-reading",
            answerRu: "Практическое тестирование — оно заставляет активно вспоминать, что укрепляет пути памяти сильнее, чем пассивное перечитывание",
            answerKk: "Практикалық тестілеу — ол белсенді еске түсіруге мәжбүрлейді, бұл пассивті қайта оқудан гөрі есте сақтау жолдарын күшейтеді",
            hint: "Think about active vs. passive learning",
            hintRu: "Подумайте об активном и пассивном обучении",
            hintKk: "Белсенді және пассивті оқу туралы ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student has 5 AP exams in 2 weeks. They have 4 hours of study time per day. Design a spaced repetition schedule using percentages: how should they allocate time to each subject?",
            questionRu: "У ученика 5 экзаменов AP через 2 недели. У него 4 часа учёбы в день. Как распределить время между предметами по принципу интервального повторения?",
            questionKk: "Оқушының 2 аптада 5 AP емтиханы бар. Күніне 4 сағат оқу уақыты бар. Аралықты қайталау принципімен пәндерге уақытты қалай бөлу керек?",
            answer: "Allocate more time to weaker subjects (e.g., 30% weakest, 25% next, 20%, 15%, 10% strongest) and rotate subjects daily rather than studying one per day",
            answerRu: "Выделяйте больше времени слабым предметам (например, 30% самому слабому, 25% следующему, 20%, 15%, 10% самому сильному) и чередуйте предметы ежедневно, а не изучайте один предмет в день",
            answerKk: "Әлсіз пәндерге көбірек уақыт бөліңіз (мысалы, ең әлсізіне 30%, келесісіне 25%, 20%, 15%, ең күштісіне 10%) және пәндерді күн сайын ауыстырыңыз, күніне бір пән оқымаңыз",
            hint: "Spaced repetition means revisiting all subjects regularly, not blocking one subject per day",
            hintRu: "Интервальное повторение означает регулярное возвращение ко всем предметам, а не изучение одного в день",
            hintKk: "Аралықты қайталау — барлық пәндерге үнемі оралу, күніне бір пән емес",
            xp: 20
          }
        ]
      },
      {
        title: "Critical Thinking",
        titleRu: "Критическое мышление",
        titleKk: "Сыни ойлау",
        content: "Critical thinking is the ability to analyze information objectively and make reasoned judgments. AP and IB programs heavily emphasize this skill through essay writing, document-based questions, and experimental analysis. You must learn to question assumptions, evaluate evidence quality, and construct logical arguments supported by data.",
        contentRu: "Критическое мышление — это способность объективно анализировать информацию и делать обоснованные выводы. Программы AP и IB активно развивают этот навык через написание эссе, вопросы на основе документов и экспериментальный анализ. Нужно научиться ставить под сомнение предположения, оценивать качество доказательств и строить логические аргументы.",
        contentKk: "Сыни ойлау — ақпаратты объективті талдау және негізделген пайымдаулар жасау қабілеті. AP және IB бағдарламалары бұл дағдыны эссе жазу, құжатқа негізделген сұрақтар және эксперименттік талдау арқылы белсенді дамытады. Болжамдарды сұрау, дәлелдеме сапасын бағалау және деректермен қамтамасыз етілген логикалық дәлелдер құру керек.",
        keyFormulas: [
          {
            formula: "Claim → Evidence → Reasoning (CER)",
            formulaRu: "Утверждение → Доказательство → Рассуждение (CER)",
            formulaKk: "Тұжырым → Айғақ → Пайымдау (CER)",
            description: "Framework for constructing scientific arguments",
            descriptionRu: "Рамка для построения научных аргументов",
            descriptionKk: "Ғылыми дәлелдер құру шеңбері"
          }
        ],
        solvedExamples: [
          {
            question: "A news article claims 'Students who eat breakfast score 20% higher on tests.' Evaluate this claim critically.",
            questionRu: "Новостная статья утверждает: «Ученики, завтракающие утром, набирают на 20% больше на тестах». Оцените это утверждение критически.",
            questionKk: "Жаңалық мақаласы: «Таңғы ас ішетін оқушылар тесттерде 20% жоғары балл алады» деп мәлімдейді. Бұл мәлімдемені сыни бағалаңыз.",
            steps: [
              { en: "Check for correlation vs. causation: breakfast eating may correlate with higher scores, but other factors (family income, sleep quality) could be the real cause", ru: "Проверяем корреляцию vs. причинность: завтрак может коррелировать с высокими баллами, но настоящей причиной могут быть другие факторы (доход семьи, качество сна)", kk: "Корреляция мен себеп-салдарды тексереміз: таңғы ас жоғары балдармен байланысты болуы мүмкін, бірақ нақты себеп басқа факторлар болуы мүмкін (отбасы табысы, ұйқы сапасы)" },
              { en: "Ask: Who conducted the study? What was the sample size? Were confounding variables controlled?", ru: "Спрашиваем: Кто проводил исследование? Каков размер выборки? Были ли контролируемы мешающие переменные?", kk: "Сұраймыз: Зерттеуді кім жүргізді? Іріктеме көлемі қандай? Бөгет айнымалылар бақыланды ма?" }
            ],
            answer: "The claim shows correlation, not necessarily causation. We need to know the study design, sample size, and whether confounding variables were controlled.",
            answerRu: "Утверждение показывает корреляцию, но не обязательно причинность. Нужно знать дизайн исследования, размер выборки и учитывались ли мешающие переменные.",
            answerKk: "Мәлімдеме корреляцияны көрсетеді, бірақ міндетті түрде себеп-салдарлықты емес. Зерттеу дизайнын, іріктеме көлемін және бөгет айнымалылардың бақыланғанын білу керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the difference between a fact and an opinion?",
            questionRu: "В чём разница между фактом и мнением?",
            questionKk: "Факт пен пікірдің айырмашылығы неде?",
            answer: "A fact can be verified with evidence; an opinion is a personal judgment that cannot be objectively proven",
            answerRu: "Факт можно проверить доказательствами; мнение — это личное суждение, которое нельзя объективно доказать",
            answerKk: "Фактіні дәлелдермен тексеруге болады; пікір — объективті дәлелдеуге болмайтын жеке пайымдау",
            hint: "Can the statement be tested or measured?",
            hintRu: "Можно ли проверить или измерить утверждение?",
            hintKk: "Мәлімдемені тексеруге немесе өлшеуге бола ма?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A company claims their vitamin supplement 'boosts immunity by 50%.' What questions should you ask before believing this?",
            questionRu: "Компания утверждает, что их витамины «повышают иммунитет на 50%». Какие вопросы нужно задать, прежде чем верить этому?",
            questionKk: "Компания өз витамин қоспаларының «иммунитетті 50% арттырады» деп мәлімдейді. Бұған сенбес бұрын қандай сұрақтар қою керек?",
            answer: "Was there a peer-reviewed study? What was the sample size? Was there a control group? How was 'immunity' measured? Who funded the study?",
            answerRu: "Было ли рецензированное исследование? Каков размер выборки? Была ли контрольная группа? Как измерялся «иммунитет»? Кто финансировал исследование?",
            answerKk: "Рецензияланған зерттеу болды ма? Іріктеме көлемі қандай? Бақылау тобы болды ма? «Иммунитет» қалай өлшенді? Зерттеуді кім қаржыландырды?",
            hint: "Think about scientific rigor and potential bias",
            hintRu: "Подумайте о научной строгости и возможной предвзятости",
            hintKk: "Ғылыми қатаңдық пен ықтимал біржақтылық туралы ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Two studies on screen time and grades reach opposite conclusions. Study A (n=50 students, one school) finds no effect. Study B (n=5000 students, 100 schools) finds a negative correlation. Which is more reliable and why?",
            questionRu: "Два исследования о влиянии экранного времени на оценки дали противоположные выводы. Исследование A (50 учеников, 1 школа) — нет эффекта. Исследование B (5000 учеников, 100 школ) — отрицательная корреляция. Какое надёжнее и почему?",
            questionKk: "Экран уақыты мен бағалар туралы екі зерттеу қарама-қарсы қорытындыға келді. A зерттеу (50 оқушы, 1 мектеп) — әсер жоқ. B зерттеу (5000 оқушы, 100 мектеп) — теріс корреляция. Қайсысы сенімдірек және неге?",
            answer: "Study B is more reliable due to its much larger sample size (5000 vs 50) and broader representation (100 schools vs 1), which reduces sampling bias and increases statistical power",
            answerRu: "Исследование B надёжнее благодаря гораздо большему размеру выборки (5000 против 50) и более широкой репрезентативности (100 школ против 1), что снижает систематическую ошибку выборки и повышает статистическую мощность",
            answerKk: "B зерттеуі анағұрлым сенімдірек, себебі оның іріктемесі әлдеқайда үлкен (5000-ға қарсы 50) және өкілдігі кеңірек (100 мектепке қарсы 1), бұл іріктеме қателігін азайтып, статистикалық қуатты арттырады",
            hint: "Consider sample size and diversity of participants",
            hintRu: "Учтите размер выборки и разнообразие участников",
            hintKk: "Іріктеме көлемі мен қатысушылар алуантүрлілігін ескеріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP/IB Course Planning",
        titleRu: "Планирование курсов AP/IB",
        titleKk: "AP/IB курстарын жоспарлау",
        content: "Strategic course planning maximizes your AP/IB success and college admissions profile. You should consider prerequisites, workload balance, and alignment with your intended college major. Most experts recommend starting with 1-2 AP courses in 9th or 10th grade and building up to 3-5 by senior year, rather than overloading early.",
        contentRu: "Стратегическое планирование курсов максимизирует ваш успех в AP/IB и профиль для поступления. Следует учитывать предварительные требования, баланс нагрузки и соответствие предполагаемой специальности в университете. Эксперты рекомендуют начинать с 1-2 курсов AP в 9-10 классе и увеличивать до 3-5 к выпускному классу.",
        contentKk: "Стратегиялық курс жоспарлау AP/IB табысыңызды және университетке түсу профиліңізді барынша арттырады. Алдын ала талаптарды, жүктеме балансын және болашақ университеттік мамандығыңызбен сәйкестігін ескеру керек. Сарапшылар 9-10 сыныпта 1-2 AP курсынан бастап, бітіру сыныбына дейін 3-5-ке дейін арттыруды ұсынады.",
        keyFormulas: [
          {
            formula: "AP GPA Boost: A in AP = 5.0 (vs 4.0 in regular)",
            formulaRu: "Повышение GPA за AP: оценка A по AP = 5.0 (против 4.0 на обычном курсе)",
            formulaKk: "AP курсы бойынша GPA өсуі: AP-дегі A бағасы = 5.0 (әдеттегі курста 4.0-ге қарсы)",
            description: "Many schools weight AP courses higher in GPA calculations",
            descriptionRu: "Многие школы присваивают повышенный вес курсам AP при расчёте GPA",
            descriptionKk: "Көптеген мектептер GPA есептеуінде AP курстарына жоғары салмақ береді"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to major in engineering. They can take 3 APs in 10th grade. Which combination best supports their goal: (A) AP Human Geography, AP Art, AP Music Theory, or (B) AP Physics 1, AP Calc AB, AP Computer Science?",
            questionRu: "Ученик хочет изучать инженерию. Он может взять 3 AP в 10 классе. Какая комбинация лучше поддерживает его цель: (A) AP Human Geography, AP Art, AP Music Theory, или (B) AP Physics 1, AP Calc AB, AP Computer Science?",
            questionKk: "Оқушы инженерия мамандығын алғысы келеді. 10 сыныпта 3 AP ала алады. Қай комбинация мақсатын жақсы қолдайды: (A) AP Human Geography, AP Art, AP Music Theory, әлде (B) AP Physics 1, AP Calc AB, AP Computer Science?",
            steps: [
              { en: "Engineering requires strong STEM foundations: physics, calculus, and programming are directly relevant", ru: "Инженерия требует сильную базу STEM: физика, матанализ и программирование напрямую относятся к специальности", kk: "Инженерия күшті STEM негізін талап етеді: физика, калькулюс және бағдарламалау тікелей қатысты" },
              { en: "Option B aligns with engineering prerequisites; Option A, while valuable, does not build STEM skills", ru: "Вариант B соответствует предпосылкам инженерии; вариант A, хотя и ценен, не развивает STEM-навыки", kk: "B нұсқасы инженерия алдын ала талаптарына сәйкес; A нұсқасы құнды болғанымен, STEM дағдыларын дамытпайды" }
            ],
            answer: "Option B — AP Physics 1, AP Calc AB, AP Computer Science — best supports an engineering major.",
            answerRu: "Вариант B — AP Physics 1, AP Calc AB, AP Computer Science — лучше всего поддерживает инженерную специальность.",
            answerKk: "B нұсқасы — AP Physics 1, AP Calc AB, AP Computer Science — инженерия мамандығын жақсы қолдайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "How many AP courses do experts recommend starting with in 9th or 10th grade?",
            questionRu: "Сколько курсов AP эксперты рекомендуют начинать в 9-10 классе?",
            questionKk: "Сарапшылар 9-10 сыныпта қанша AP курсынан бастауды ұсынады?",
            answer: "1-2",
            answerRu: "1-2",
            answerKk: "1-2",
            hint: "Start small and build up gradually",
            hintRu: "Начните с малого и постепенно увеличивайте",
            hintKk: "Аздан бастап, біртіндеп арттырыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student wants to study medicine. Should they prioritize AP Biology and AP Chemistry, or AP European History and AP Art History? Why?",
            questionRu: "Ученик хочет изучать медицину. Что приоритетнее — AP Biology и AP Chemistry, или AP European History и AP Art History? Почему?",
            questionKk: "Оқушы медицина оқығысы келеді. AP Biology мен AP Chemistry-ге басымдық беру керек пе, әлде AP European History мен AP Art History-ге ме? Неге?",
            answer: "AP Biology and AP Chemistry — they are direct prerequisites for medical school and demonstrate science competency",
            answerRu: "AP Biology и AP Chemistry — они являются прямыми предпосылками для медицинской школы и демонстрируют научную компетентность",
            answerKk: "AP Biology және AP Chemistry — олар медицина мектебі үшін тікелей алдын ала талап және ғылыми құзыреттілікті көрсетеді",
            hint: "Think about what courses medical schools require",
            hintRu: "Подумайте, какие курсы требуют медицинские школы",
            hintKk: "Медицина мектептерінің қандай курстарды талап ететінін ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student has these AP scores: Calc AB (5), Physics 1 (3), English Lang (4), Biology (2). Their target university gives credit for 4+ only. How should they adjust their senior year plan?",
            questionRu: "У ученика баллы AP: Calc AB (5), Physics 1 (3), English Lang (4), Biology (2). Целевой университет засчитывает только 4+. Как скорректировать план на выпускной класс?",
            questionKk: "Оқушының AP балдары: Calc AB (5), Physics 1 (3), English Lang (4), Biology (2). Мақсатты университет тек 4+ қабылдайды. Бітіру сынып жоспарын қалай түзету керек?",
            answer: "Retake AP Biology (scored 2) to improve, consider AP Physics C to build on Physics 1 knowledge, take AP Calc BC to advance from the 5 in AB, and continue humanities strength with AP English Lit",
            answerRu: "Пересдать AP Biology (балл 2), рассмотреть AP Physics C для развития знаний Physics 1, взять AP Calc BC для развития от 5 по AB и продолжить гуманитарную силу с AP English Lit",
            answerKk: "AP Biology-ні қайта тапсыру (балы 2) керек, Physics 1 біліміне негізделген AP Physics C қарастыру, AB-дегі 5-тен дамыту үшін AP Calc BC алу және AP English Lit-пен гуманитарлық күшті жалғастыру",
            hint: "Focus on improving weak scores and advancing strong ones",
            hintRu: "Сосредоточьтесь на улучшении слабых баллов и развитии сильных",
            hintKk: "Әлсіз балдарды жақсартуға және күштілерді дамытуға шоғырланыңыз",
            xp: 20
          }
        ]
      }
    ]
  },

  "AP / IB Classes_9": {
    planetName: "AP / IB Classes",
    introduction: {
      en: "In Grade 9, you begin exploring actual AP and IB subject content. You will study cell biology, atomic structure, introductory physics concepts, mathematical logic, literary analysis, and human geography — building the knowledge base for upper-level AP and IB courses.",
      ru: "В 9-м классе вы начинаете изучать реальное содержание предметов AP и IB. Вы будете изучать клеточную биологию, строение атома, основы физики, математическую логику, литературный анализ и географию человечества — создавая базу знаний для курсов AP и IB старших классов."
    },
    sections: [
      {
        title: "AP Bio - Cell Structure",
        titleRu: "AP Биология — Строение клетки",
        titleKk: "AP Биология — Жасуша құрылымы",
        content: "Cells are the fundamental units of life and a core topic in AP Biology. Prokaryotic cells (bacteria) lack a nucleus, while eukaryotic cells (plants, animals, fungi) contain membrane-bound organelles. Key organelles include the nucleus (DNA storage), mitochondria (energy production), and ribosomes (protein synthesis).",
        contentRu: "Клетки — фундаментальные единицы жизни и ключевая тема AP Biology. Прокариотические клетки (бактерии) не имеют ядра, тогда как эукариотические (растения, животные, грибы) содержат мембранные органеллы. Ключевые органеллы: ядро (хранение ДНК), митохондрии (производство энергии) и рибосомы (синтез белков).",
        contentKk: "Жасушалар — тіршіліктің негізгі бірліктері және AP Biology-нің негізгі тақырыбы. Прокариоттық жасушаларда (бактериялар) ядро жоқ, ал эукариоттық жасушаларда (өсімдіктер, жануарлар, саңырауқұлақтар) мембраналы органеллалар бар. Негізгі органеллалар: ядро (ДНҚ сақтау), митохондриялар (энергия өндіру) және рибосомалар (ақуыз синтезі).",
        keyFormulas: [
          {
            formula: "Surface Area to Volume Ratio = SA / V",
            formulaRu: "Отношение площади поверхности к объёму = SA / V",
            formulaKk: "Беттік аудан мен көлемнің қатынасы = SA / V",
            description: "As cells grow larger, SA:V ratio decreases, limiting nutrient exchange",
            descriptionRu: "По мере увеличения клетки соотношение SA:V уменьшается, ограничивая обмен веществ",
            descriptionKk: "Жасуша ұлғайған сайын SA:V қатынасы азаяды, қоректік алмасуды шектейді"
          }
        ],
        solvedExamples: [
          {
            question: "A cube-shaped cell has sides of 2 μm. Calculate its surface area to volume ratio.",
            questionRu: "Кубовидная клетка имеет сторону 2 мкм. Вычислите соотношение площади поверхности к объёму.",
            questionKk: "Куб тәрізді жасушаның қабырғасы 2 мкм. Бет ауданының көлемге қатынасын есептеңіз.",
            steps: [
              { en: "SA = 6 × (2)² = 24 μm²; V = (2)³ = 8 μm³", ru: "SA = 6 × (2)² = 24 мкм²; V = (2)³ = 8 мкм³", kk: "SA = 6 × (2)² = 24 мкм²; V = (2)³ = 8 мкм³" },
              { en: "SA:V = 24/8 = 3:1", ru: "SA:V = 24/8 = 3:1", kk: "SA:V = 24/8 = 3:1" }
            ],
            answer: "SA:V = 3:1",
            answerRu: "SA:V = 3:1",
            answerKk: "SA:V = 3:1"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Which organelle is called the 'powerhouse of the cell'?",
            questionRu: "Какую органеллу называют «электростанцией клетки»?",
            questionKk: "Қай органелла «жасушаның энергия станциясы» деп аталады?",
            answer: "Mitochondria",
            answerRu: "Митохондрии",
            answerKk: "Митохондрия",
            hint: "It produces ATP through cellular respiration",
            hintRu: "Она производит АТФ через клеточное дыхание",
            hintKk: "Ол жасушалық тыныс алу арқылы АТФ өндіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Name two organelles found in plant cells but NOT in animal cells.",
            questionRu: "Назовите две органеллы, которые есть в растительных клетках, но отсутствуют в животных.",
            questionKk: "Өсімдік жасушаларында бар, бірақ жануар жасушаларында жоқ екі органелланы атаңыз.",
            answer: "Cell wall and chloroplasts",
            answerRu: "Клеточная стенка и хлоропласты",
            answerKk: "Жасуша қабырғасы және хлоропласттар",
            hint: "Think about what plants need for photosynthesis and structural support",
            hintRu: "Подумайте, что нужно растениям для фотосинтеза и структурной поддержки",
            hintKk: "Өсімдіктерге фотосинтез және құрылымдық қолдау үшін не керек екенін ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A cube cell with side 4 μm has SA:V = 1.5. A cube cell with side 1 μm has SA:V = 6. Explain why most cells are small.",
            questionRu: "Куб-клетка со стороной 4 мкм имеет SA:V = 1,5. Куб-клетка со стороной 1 мкм имеет SA:V = 6. Объясните, почему большинство клеток маленькие.",
            questionKk: "Қабырғасы 4 мкм куб жасушаның SA:V = 1,5. Қабырғасы 1 мкм куб жасушаның SA:V = 6. Неге көптеген жасушалар кішкентай екенін түсіндіріңіз.",
            answer: "Smaller cells have a higher SA:V ratio, allowing more efficient nutrient exchange and waste removal per unit volume. Large cells cannot transport materials fast enough to sustain their volume.",
            answerRu: "Меньшие клетки имеют более высокое соотношение SA:V, что обеспечивает более эффективный обмен веществ и удаление отходов на единицу объёма. Крупные клетки не могут транспортировать вещества достаточно быстро для поддержания своего объёма.",
            answerKk: "Кіші жасушаларда SA:V қатынасы жоғарырақ, бұл көлем бірлігіне қоректік алмасу мен қалдықтарды шығаруды тиімдірек етеді. Үлкен жасушалар өз көлемін қолдау үшін заттарды жеткілікті тез тасымалдай алмайды.",
            hint: "Think about how nutrients enter and wastes exit through the surface",
            hintRu: "Подумайте, как питательные вещества входят и отходы выходят через поверхность",
            hintKk: "Қоректік заттардың бет арқылы қалай кіретінін және қалдықтардың қалай шығатынын ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Photosynthesis",
        titleRu: "AP Биология — Фотосинтез",
        titleKk: "AP Биология — Фотосинтез",
        content: "Photosynthesis is the process by which plants convert light energy into chemical energy (glucose). It occurs in chloroplasts and consists of two stages: light-dependent reactions (in thylakoid membranes) and the Calvin cycle (in the stroma). This process is the foundation of nearly all food chains on Earth.",
        contentRu: "Фотосинтез — процесс, при котором растения преобразуют световую энергию в химическую (глюкозу). Он происходит в хлоропластах и состоит из двух стадий: светозависимые реакции (в мембранах тилакоидов) и цикл Кальвина (в строме). Этот процесс — основа почти всех пищевых цепей на Земле.",
        contentKk: "Фотосинтез — өсімдіктердің жарық энергиясын химиялық энергияға (глюкозаға) айналдыру процесі. Ол хлоропласттарда жүреді және екі кезеңнен тұрады: жарыққа тәуелді реакциялар (тилакоид мембраналарында) және Кальвин циклі (стромада). Бұл процесс Жердегі барлық дерлік тағам тізбектерінің негізі.",
        keyFormulas: [
          {
            formula: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
            formulaRu: "6CO₂ + 6H₂O + свет → C₆H₁₂O₆ + 6O₂",
            formulaKk: "6CO₂ + 6H₂O + жарық → C₆H₁₂O₆ + 6O₂",
            description: "Overall equation for photosynthesis",
            descriptionRu: "Общее уравнение фотосинтеза",
            descriptionKk: "Фотосинтездің жалпы теңдеуі"
          }
        ],
        solvedExamples: [
          {
            question: "In the photosynthesis equation, how many molecules of CO₂ are needed to produce one molecule of glucose?",
            questionRu: "В уравнении фотосинтеза сколько молекул CO₂ необходимо для производства одной молекулы глюкозы?",
            questionKk: "Фотосинтез теңдеуінде бір молекула глюкоза өндіру үшін қанша CO₂ молекуласы қажет?",
            steps: [
              { en: "Look at the balanced equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", ru: "Смотрим уравненное уравнение: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", kk: "Теңестірілген теңдеуге қараймыз: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂" },
              { en: "The coefficient in front of CO₂ is 6, meaning 6 molecules of CO₂ are needed per glucose", ru: "Коэффициент перед CO₂ равен 6, значит нужно 6 молекул CO₂ на молекулу глюкозы", kk: "CO₂ алдындағы коэффициент 6, яғни бір глюкозаға 6 молекула CO₂ қажет" }
            ],
            answer: "6 molecules of CO₂",
            answerRu: "6 молекул CO₂",
            answerKk: "6 молекула CO₂"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "In which organelle does photosynthesis occur?",
            questionRu: "В какой органелле происходит фотосинтез?",
            questionKk: "Фотосинтез қай органеллада жүреді?",
            answer: "Chloroplast",
            answerRu: "Хлоропласт",
            answerKk: "Хлоропласт",
            hint: "It contains the green pigment chlorophyll",
            hintRu: "Она содержит зелёный пигмент хлорофилл",
            hintKk: "Онда жасыл пигмент хлорофилл бар",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What are the two products of photosynthesis?",
            questionRu: "Каковы два продукта фотосинтеза?",
            questionKk: "Фотосинтездің екі өнімі қандай?",
            answer: "Glucose (C₆H₁₂O₆) and oxygen (O₂)",
            answerRu: "Глюкоза (C₆H₁₂O₆) и кислород (O₂)",
            answerKk: "Глюкоза (C₆H₁₂O₆) және оттегі (O₂)",
            hint: "Look at the right side of the photosynthesis equation",
            hintRu: "Посмотрите на правую часть уравнения фотосинтеза",
            hintKk: "Фотосинтез теңдеуінің оң жағына қараңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If a plant is placed in a sealed container with CO₂ but no light, will it produce oxygen? Explain why or why not.",
            questionRu: "Если растение поместить в герметичный контейнер с CO₂, но без света, будет ли оно производить кислород? Объясните.",
            questionKk: "Егер өсімдік CO₂ бар, бірақ жарықсыз тұйық ыдысқа қойылса, ол оттегі өндіре ме? Түсіндіріңіз.",
            answer: "No — photosynthesis requires light energy to drive the light-dependent reactions. Without light, the process cannot proceed, and no oxygen is produced. The plant will only perform cellular respiration, consuming O₂.",
            answerRu: "Нет — фотосинтез требует световой энергии для светозависимых реакций. Без света процесс не может происходить, кислород не образуется. Растение будет только осуществлять клеточное дыхание, потребляя O₂.",
            answerKk: "Жоқ — фотосинтез жарыққа тәуелді реакциялар үшін жарық энергиясын қажет етеді. Жарықсыз процесс жүрмейді, оттегі өндірілмейді. Өсімдік тек жасушалық тыныс алуды жүзеге асырып, O₂ жұмсайды.",
            hint: "Think about the role of light in the photosynthesis equation",
            hintRu: "Подумайте о роли света в уравнении фотосинтеза",
            hintKk: "Фотосинтез теңдеуіндегі жарықтың рөлін ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Atomic Structure",
        titleRu: "AP Химия — Строение атома",
        titleKk: "AP Химия — Атом құрылымы",
        content: "Understanding atomic structure is the foundation of AP Chemistry. Atoms consist of protons (positive charge, in the nucleus), neutrons (no charge, in the nucleus), and electrons (negative charge, in orbitals). The atomic number defines the element, while the mass number equals protons plus neutrons.",
        contentRu: "Понимание строения атома — основа AP Chemistry. Атомы состоят из протонов (положительный заряд, в ядре), нейтронов (без заряда, в ядре) и электронов (отрицательный заряд, на орбиталях). Атомный номер определяет элемент, а массовое число равно сумме протонов и нейтронов.",
        contentKk: "Атом құрылымын түсіну — AP Chemistry-нің негізі. Атомдар протондардан (оң заряд, ядрода), нейтрондардан (зарядсыз, ядрода) және электрондардан (теріс заряд, орбитальдарда) тұрады. Атомдық нөмір элементті анықтайды, ал массалық сан протондар мен нейтрондардың қосындысына тең.",
        keyFormulas: [
          {
            formula: "Mass number (A) = Protons (Z) + Neutrons (N)",
            formulaRu: "Массовое число (A) = Протоны (Z) + Нейтроны (N)",
            formulaKk: "Масса саны (A) = Протондар (Z) + Нейтрондар (N)",
            description: "Relationship between mass number, protons, and neutrons",
            descriptionRu: "Связь между массовым числом, протонами и нейтронами",
            descriptionKk: "Массалық сан, протондар және нейтрондар арасындағы байланыс"
          },
          {
            formula: "Electrons in neutral atom = Protons (Z)",
            formulaRu: "Электроны в нейтральном атоме = Протоны (Z)",
            formulaKk: "Бейтарап атомдағы электрондар = Протондар (Z)",
            description: "In a neutral atom, electron count equals proton count",
            descriptionRu: "В нейтральном атоме число электронов равно числу протонов",
            descriptionKk: "Бейтарап атомда электрон саны протон санына тең"
          }
        ],
        solvedExamples: [
          {
            question: "Carbon-14 has an atomic number of 6. How many protons, neutrons, and electrons does it have?",
            questionRu: "Углерод-14 имеет атомный номер 6. Сколько у него протонов, нейтронов и электронов?",
            questionKk: "Көміртегі-14 атомдық нөмірі 6. Оның қанша протоны, нейтроны және электроны бар?",
            steps: [
              { en: "Protons = atomic number = 6; Electrons = protons (neutral atom) = 6", ru: "Протоны = атомный номер = 6; Электроны = протоны (нейтральный атом) = 6", kk: "Протондар = атомдық нөмір = 6; Электрондар = протондар (бейтарап атом) = 6" },
              { en: "Neutrons = mass number − protons = 14 − 6 = 8", ru: "Нейтроны = массовое число − протоны = 14 − 6 = 8", kk: "Нейтрондар = массалық сан − протондар = 14 − 6 = 8" }
            ],
            answer: "6 protons, 8 neutrons, 6 electrons",
            answerRu: "6 протонов, 8 нейтронов, 6 электронов",
            answerKk: "6 протон, 8 нейтрон, 6 электрон"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the atomic number of oxygen (O)?",
            questionRu: "Каков атомный номер кислорода (O)?",
            questionKk: "Оттегінің (O) атомдық нөмірі қанша?",
            answer: "8",
            answerRu: "8",
            answerKk: "8",
            hint: "Look at the periodic table — atomic number is above the symbol",
            hintRu: "Посмотрите в таблицу Менделеева — атомный номер над символом",
            hintKk: "Периодтық кестеге қараңыз — атомдық нөмір символдың үстінде",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "How many neutrons are in an atom of Sodium-23 (Na, Z=11)?",
            questionRu: "Сколько нейтронов в атоме натрия-23 (Na, Z=11)?",
            questionKk: "Натрий-23 (Na, Z=11) атомында қанша нейтрон бар?",
            answer: "12",
            answerRu: "12",
            answerKk: "12",
            hint: "N = A − Z = 23 − 11",
            hintRu: "N = A − Z = 23 − 11",
            hintKk: "N = A − Z = 23 − 11",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Chlorine has two stable isotopes: Cl-35 (75.77%) and Cl-37 (24.23%). Calculate the average atomic mass.",
            questionRu: "Хлор имеет два стабильных изотопа: Cl-35 (75,77%) и Cl-37 (24,23%). Вычислите среднюю атомную массу.",
            questionKk: "Хлордың екі тұрақты изотопы бар: Cl-35 (75,77%) және Cl-37 (24,23%). Орташа атомдық массаны есептеңіз.",
            answer: "35.48 amu",
            answerRu: "35,48 а.е.м.",
            answerKk: "35,48 а.б.б.",
            hint: "Average = (35 × 0.7577) + (37 × 0.2423)",
            hintRu: "Среднее = (35 × 0,7577) + (37 × 0,2423)",
            hintKk: "Орташа = (35 × 0,7577) + (37 × 0,2423)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Periodic Trends",
        titleRu: "AP Химия — Периодические закономерности",
        titleKk: "AP Химия — Периодтық заңдылықтар",
        content: "The periodic table organizes elements by atomic number, revealing predictable trends in properties. Atomic radius decreases across a period (left to right) due to increasing nuclear charge, and increases down a group due to additional electron shells. Electronegativity and ionization energy follow similar but opposite trends.",
        contentRu: "Периодическая таблица организует элементы по атомному номеру, выявляя предсказуемые закономерности свойств. Атомный радиус уменьшается по периоду (слева направо) из-за увеличения заряда ядра и увеличивается вниз по группе из-за дополнительных электронных оболочек. Электроотрицательность и энергия ионизации следуют схожим, но противоположным тенденциям.",
        contentKk: "Периодтық кесте элементтерді атомдық нөмір бойынша ұйымдастырады, қасиеттердің болжамды заңдылықтарын анықтайды. Атомдық радиус период бойынша (солдан оңға) ядро зарядының артуынан кішірейеді, ал топ бойынша қосымша электрон қабаттарынан ұлғаяды. Электртерістік және иондану энергиясы ұқсас, бірақ қарама-қарсы үрдістерге сәйкес.",
        keyFormulas: [
          {
            formula: "Atomic radius: ← increases across period | ↓ increases down group",
            formulaRu: "Атомный радиус: ← увеличивается вдоль периода | ↓ увеличивается вниз по группе",
            formulaKk: "Атом радиусы: ← период бойымен артады | ↓ топ бойымен төмен қарай артады",
            description: "Atomic radius trend across the periodic table",
            descriptionRu: "Тенденция атомного радиуса в периодической таблице",
            descriptionKk: "Периодтық кестедегі атомдық радиус үрдісі"
          },
          {
            formula: "Electronegativity: → increases across period | ↑ increases up group",
            formulaRu: "Электроотрицательность: → увеличивается вдоль периода | ↑ увеличивается вверх по группе",
            formulaKk: "Электртерістігі: → период бойымен артады | ↑ топ бойымен жоғары қарай артады",
            description: "Electronegativity trend (Fluorine is the most electronegative)",
            descriptionRu: "Тенденция электроотрицательности (фтор — самый электроотрицательный)",
            descriptionKk: "Электртерістік үрдісі (фтор — ең электртеріс)"
          }
        ],
        solvedExamples: [
          {
            question: "Which has a larger atomic radius: Na (sodium) or Cl (chlorine)? Both are in Period 3.",
            questionRu: "Что имеет больший атомный радиус: Na (натрий) или Cl (хлор)? Оба в 3 периоде.",
            questionKk: "Қайсысының атомдық радиусы үлкен: Na (натрий) немесе Cl (хлор)? Екеуі де 3 периодта.",
            steps: [
              { en: "Both are in Period 3. Na is on the left (Group 1), Cl is on the right (Group 17)", ru: "Оба в 3 периоде. Na слева (группа 1), Cl справа (группа 17)", kk: "Екеуі де 3 периодта. Na сол жақта (1 топ), Cl оң жақта (17 топ)" },
              { en: "Atomic radius decreases left to right across a period, so Na > Cl", ru: "Атомный радиус уменьшается слева направо по периоду, значит Na > Cl", kk: "Атомдық радиус период бойынша солдан оңға кішірейеді, сондықтан Na > Cl" }
            ],
            answer: "Na (sodium) has a larger atomic radius than Cl",
            answerRu: "Na (натрий) имеет больший атомный радиус, чем Cl",
            answerKk: "Na (натрий) атомдық радиусы Cl-ден үлкен"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Which element is more electronegative: oxygen or sulfur?",
            questionRu: "Какой элемент более электроотрицателен: кислород или сера?",
            questionKk: "Қай элемент электртерістігірек: оттегі немесе күкірт?",
            answer: "Oxygen",
            answerRu: "Кислород",
            answerKk: "Оттегі",
            hint: "Electronegativity increases going up a group",
            hintRu: "Электроотрицательность увеличивается вверх по группе",
            hintKk: "Электртерістік топ бойынша жоғары қарай артады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Rank these elements by increasing atomic radius: K, Na, Li.",
            questionRu: "Расположите элементы в порядке увеличения атомного радиуса: K, Na, Li.",
            questionKk: "Элементтерді атомдық радиустың артуы бойынша орналастырыңыз: K, Na, Li.",
            answer: "Li < Na < K",
            answerRu: "Li < Na < K",
            answerKk: "Li < Na < K",
            hint: "All are in Group 1; atomic radius increases going down",
            hintRu: "Все в группе 1; атомный радиус увеличивается вниз",
            hintKk: "Барлығы 1 топта; атомдық радиус төмен қарай артады",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain why the first ionization energy of Mg (738 kJ/mol) is higher than that of Al (577 kJ/mol), even though Al is to the right of Mg.",
            questionRu: "Объясните, почему первая энергия ионизации Mg (738 кДж/моль) выше, чем у Al (577 кДж/моль), хотя Al правее Mg.",
            questionKk: "Неге Mg-ның бірінші иондану энергиясы (738 кДж/моль) Al-дан (577 кДж/моль) жоғары, Al оң жақта тұрса да?",
            answer: "Mg has a full 3s² sublevel which is extra stable. Al's outer electron is in 3p¹, which is easier to remove because p orbitals are higher in energy and less shielded than s orbitals.",
            answerRu: "У Mg заполненный подуровень 3s², который особенно стабилен. Внешний электрон Al находится на 3p¹, его легче удалить, так как p-орбитали имеют более высокую энергию и хуже экранированы, чем s-орбитали.",
            answerKk: "Mg-да толық 3s² деңгейшесі бар, ол ерекше тұрақты. Al-дың сыртқы электроны 3p¹-де орналасқан, оны алу оңайырақ, себебі p-орбитальдар энергиясы жоғары және s-орбитальдарға қарағанда нашар экрандалған.",
            hint: "Think about electron configuration stability — full sublevels are extra stable",
            hintRu: "Подумайте о стабильности электронной конфигурации — полные подуровни особенно стабильны",
            hintKk: "Электрон конфигурациясының тұрақтылығын ойлаңыз — толық деңгейшелер ерекше тұрақты",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Vectors",
        titleRu: "AP Физика — Векторы",
        titleKk: "AP Физика — Векторлар",
        content: "Vectors are quantities that have both magnitude and direction, such as velocity, force, and displacement. Unlike scalars (mass, temperature), vectors must be added using component methods or graphical techniques. Mastering vector addition and decomposition is essential for all AP Physics courses.",
        contentRu: "Векторы — это величины, имеющие как величину, так и направление, например скорость, сила и перемещение. В отличие от скаляров (масса, температура), векторы складываются методом компонент или графически. Владение сложением и разложением векторов необходимо для всех курсов AP Physics.",
        contentKk: "Векторлар — жылдамдық, күш және орын ауыстыру сияқты шамасы да, бағыты да бар шамалар. Скалярлардан (масса, температура) айырмашылығы, векторлар компонент әдісімен немесе графикалық тәсілмен қосылады. Вектор қосу мен ыдыратуды меңгеру барлық AP Physics курстары үшін маңызды.",
        keyFormulas: [
          {
            formula: "Vx = V cos θ; Vy = V sin θ",
            description: "Decomposing a vector into x and y components",
            descriptionRu: "Разложение вектора на компоненты x и y",
            descriptionKk: "Векторды x және y компоненттеріне ыдырату"
          },
          {
            formula: "|V| = √(Vx² + Vy²)",
            description: "Magnitude of a vector from its components",
            descriptionRu: "Модуль вектора по его компонентам",
            descriptionKk: "Компоненттері бойынша вектордың модулі"
          }
        ],
        solvedExamples: [
          {
            question: "A force of 10 N acts at 30° above the horizontal. Find its horizontal and vertical components.",
            questionRu: "Сила 10 Н действует под углом 30° к горизонтали. Найдите горизонтальную и вертикальную составляющие.",
            questionKk: "10 Н күш көлденеңнен 30° бұрышпен әрекет етеді. Көлденең және тік компоненттерін табыңыз.",
            steps: [
              { en: "Fx = 10 × cos 30° = 10 × 0.866 = 8.66 N", ru: "Fx = 10 × cos 30° = 10 × 0,866 = 8,66 Н", kk: "Fx = 10 × cos 30° = 10 × 0,866 = 8,66 Н" },
              { en: "Fy = 10 × sin 30° = 10 × 0.5 = 5.0 N", ru: "Fy = 10 × sin 30° = 10 × 0,5 = 5,0 Н", kk: "Fy = 10 × sin 30° = 10 × 0,5 = 5,0 Н" }
            ],
            answer: "Fx = 8.66 N, Fy = 5.0 N",
            answerRu: "Fx = 8,66 Н, Fy = 5,0 Н",
            answerKk: "Fx = 8,66 Н, Fy = 5,0 Н"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is temperature a vector or a scalar?",
            questionRu: "Температура — вектор или скаляр?",
            questionKk: "Температура — вектор ма, скаляр ма?",
            answer: "Scalar",
            answerRu: "Скаляр",
            answerKk: "Скаляр",
            hint: "Does temperature have a direction?",
            hintRu: "Имеет ли температура направление?",
            hintKk: "Температураның бағыты бар ма?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the magnitude of a vector with components Vx = 3 and Vy = 4.",
            questionRu: "Найдите модуль вектора с компонентами Vx = 3 и Vy = 4.",
            questionKk: "Vx = 3 және Vy = 4 компоненттері бар вектордың модулін табыңыз.",
            answer: "5",
            answerRu: "5",
            answerKk: "5",
            hint: "Use the Pythagorean theorem: |V| = √(3² + 4²)",
            hintRu: "Используйте теорему Пифагора: |V| = √(3² + 4²)",
            hintKk: "Пифагор теоремасын қолданыңыз: |V| = √(3² + 4²)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Two forces act on an object: F₁ = 6 N east and F₂ = 8 N north. Find the magnitude and direction of the resultant force.",
            questionRu: "На объект действуют две силы: F₁ = 6 Н на восток и F₂ = 8 Н на север. Найдите модуль и направление результирующей силы.",
            questionKk: "Нысанға екі күш әрекет етеді: F₁ = 6 Н шығысқа және F₂ = 8 Н солтүстікке. Қорытқы күштің модулі мен бағытын табыңыз.",
            answer: "10 N at 53.1° north of east",
            answerRu: "10 Н под углом 53,1° к северу от востока",
            answerKk: "10 Н, шығыстан солтүстікке қарай 53,1° бұрышпен",
            hint: "Magnitude = √(6² + 8²); angle = arctan(8/6)",
            hintRu: "Модуль = √(6² + 8²); угол = arctan(8/6)",
            hintKk: "Модуль = √(6² + 8²); бұрыш = arctan(8/6)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Motion Graphs",
        titleRu: "AP Физика — Графики движения",
        titleKk: "AP Физика — Қозғалыс графиктері",
        content: "Motion graphs are essential tools in AP Physics for visualizing and analyzing movement. Position-time graphs show location over time (slope = velocity), velocity-time graphs show speed changes (slope = acceleration, area = displacement). Understanding these relationships lets you extract complete motion information from any graph.",
        contentRu: "Графики движения — важнейшие инструменты AP Physics для визуализации и анализа движения. Графики положение-время показывают местоположение (наклон = скорость), графики скорость-время — изменение скорости (наклон = ускорение, площадь = перемещение). Понимание этих связей позволяет извлечь полную информацию о движении.",
        contentKk: "Қозғалыс графиктері AP Physics-те қозғалысты визуализациялау мен талдау үшін маңызды құралдар. Орын-уақыт графиктері орналасуды көрсетеді (көлбеу = жылдамдық), жылдамдық-уақыт графиктері жылдамдық өзгерісін көрсетеді (көлбеу = үдеу, аудан = орын ауыстыру). Бұл байланыстарды түсіну кез келген графиктен толық қозғалыс ақпаратын алуға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Slope of x-t graph = velocity; Slope of v-t graph = acceleration",
            formulaRu: "Наклон графика x-t = скорость; Наклон графика v-t = ускорение",
            formulaKk: "x-t графигінің көлбеуі = жылдамдық; v-t графигінің көлбеуі = үдеу",
            description: "Key relationships between motion graph slopes and physical quantities",
            descriptionRu: "Ключевые связи между наклонами графиков движения и физическими величинами",
            descriptionKk: "Қозғалыс графиктерінің көлбеулері мен физикалық шамалар арасындағы негізгі байланыстар"
          }
        ],
        solvedExamples: [
          {
            question: "A velocity-time graph shows constant velocity of 5 m/s for 4 seconds. What is the displacement?",
            questionRu: "График скорость-время показывает постоянную скорость 5 м/с в течение 4 секунд. Каково перемещение?",
            questionKk: "Жылдамдық-уақыт графигі 4 секунд бойы 5 м/с тұрақты жылдамдықты көрсетеді. Орын ауыстыру қандай?",
            steps: [
              { en: "Displacement = area under v-t graph = base × height for a rectangle", ru: "Перемещение = площадь под графиком v-t = основание × высота для прямоугольника", kk: "Орын ауыстыру = v-t графигінің астындағы аудан = тіктөртбұрыш үшін негіз × биіктік" },
              { en: "Displacement = 5 m/s × 4 s = 20 m", ru: "Перемещение = 5 м/с × 4 с = 20 м", kk: "Орын ауыстыру = 5 м/с × 4 с = 20 м" }
            ],
            answer: "20 m",
            answerRu: "20 м",
            answerKk: "20 м"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "On a position-time graph, what does a horizontal line represent?",
            questionRu: "На графике положение-время что означает горизонтальная линия?",
            questionKk: "Орын-уақыт графигінде көлденең сызық нені білдіреді?",
            answer: "The object is at rest (not moving)",
            answerRu: "Объект находится в состоянии покоя (не движется)",
            answerKk: "Нысан тыныштық күйінде (қозғалмайды)",
            hint: "A horizontal line means position is not changing",
            hintRu: "Горизонтальная линия означает, что положение не меняется",
            hintKk: "Көлденең сызық орынның өзгермейтінін білдіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A position-time graph shows a straight line from (0, 0) to (5, 15). What is the velocity?",
            questionRu: "График положение-время показывает прямую от (0, 0) до (5, 15). Какова скорость?",
            questionKk: "Орын-уақыт графигі (0, 0)-ден (5, 15)-ке дейінгі түзу сызықты көрсетеді. Жылдамдық қандай?",
            answer: "3 m/s",
            answerRu: "3 м/с",
            answerKk: "3 м/с",
            hint: "Velocity = slope = Δx/Δt = (15-0)/(5-0)",
            hintRu: "Скорость = наклон = Δx/Δt = (15-0)/(5-0)",
            hintKk: "Жылдамдық = көлбеу = Δx/Δt = (15-0)/(5-0)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A v-t graph shows velocity increasing linearly from 0 to 10 m/s over 4 seconds, then staying constant at 10 m/s for 3 seconds. What is the total displacement?",
            questionRu: "График v-t показывает линейное увеличение скорости от 0 до 10 м/с за 4 секунды, затем постоянную скорость 10 м/с в течение 3 секунд. Каково общее перемещение?",
            questionKk: "v-t графигі жылдамдықтың 4 секундта 0-ден 10 м/с-ке дейін сызықтық артуын, содан кейін 3 секунд бойы 10 м/с тұрақты жылдамдықты көрсетеді. Жалпы орын ауыстыру қандай?",
            answer: "50 m",
            answerRu: "50 м",
            answerKk: "50 м",
            hint: "Area = triangle (½ × 4 × 10) + rectangle (3 × 10)",
            hintRu: "Площадь = треугольник (½ × 4 × 10) + прямоугольник (3 × 10)",
            hintKk: "Аудан = үшбұрыш (½ × 4 × 10) + тіктөртбұрыш (3 × 10)",
            xp: 20
          }
        ]
      },
      {
        title: "IB Math - Sets & Logic",
        titleRu: "IB Математика — Множества и логика",
        titleKk: "IB Математика — Жиындар және логика",
        content: "Sets and logic form the foundation of IB Mathematics. A set is a collection of distinct objects; operations include union (∪), intersection (∩), and complement. Logic involves propositions, truth values, and connectives (AND, OR, NOT, IF-THEN). These concepts underpin proofs and reasoning across all IB math topics.",
        contentRu: "Множества и логика — основа IB Mathematics. Множество — это совокупность различных объектов; операции включают объединение (∪), пересечение (∩) и дополнение. Логика включает высказывания, значения истинности и связки (И, ИЛИ, НЕ, ЕСЛИ-ТО). Эти концепции лежат в основе доказательств во всех темах IB математики.",
        contentKk: "Жиындар мен логика — IB Mathematics-тің негізі. Жиын — ерекше объектілердің жинағы; операциялар: біріктіру (∪), қиылысу (∩) және толықтауыш. Логика пропозициялар, ақиқат мәндер және байланыстырушыларды (ЖӘНЕ, НЕМЕСЕ, ЕМЕС, ЕГЕР-ОНДА) қамтиды. Бұл концепциялар барлық IB математика тақырыптарындағы дәлелдеулер мен ой-пікірлердің негізін құрайды.",
        keyFormulas: [
          {
            formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
            description: "Inclusion-exclusion principle for counting elements in a union",
            descriptionRu: "Принцип включения-исключения для подсчёта элементов объединения",
            descriptionKk: "Біріктірудегі элементтерді санау үшін қосу-алу принципі"
          }
        ],
        solvedExamples: [
          {
            question: "In a class of 30 students, 18 play soccer, 12 play basketball, and 5 play both. How many play at least one sport?",
            questionRu: "В классе из 30 учеников 18 играют в футбол, 12 — в баскетбол, 5 — в оба. Сколько играют хотя бы в один вид спорта?",
            questionKk: "30 оқушы бар сыныпта 18 футбол, 12 баскетбол, 5 екеуін де ойнайды. Кем дегенде бір спортпен қаншасы шұғылданады?",
            steps: [
              { en: "Apply inclusion-exclusion: n(S ∪ B) = n(S) + n(B) − n(S ∩ B) = 18 + 12 − 5", ru: "Применяем включение-исключение: n(S ∪ B) = n(S) + n(B) − n(S ∩ B) = 18 + 12 − 5", kk: "Қосу-алу принципін қолданамыз: n(S ∪ B) = n(S) + n(B) − n(S ∩ B) = 18 + 12 − 5" },
              { en: "n(S ∪ B) = 25 students play at least one sport", ru: "n(S ∪ B) = 25 учеников играют хотя бы в один спорт", kk: "n(S ∪ B) = 25 оқушы кем дегенде бір спортпен шұғылданады" }
            ],
            answer: "25 students",
            answerRu: "25 учеников",
            answerKk: "25 оқушы"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
            questionRu: "Если A = {1, 2, 3} и B = {3, 4, 5}, что такое A ∩ B?",
            questionKk: "Егер A = {1, 2, 3} және B = {3, 4, 5} болса, A ∩ B нені білдіреді?",
            answer: "{3}",
            answerRu: "{3}",
            answerKk: "{3}",
            hint: "Intersection means elements in BOTH sets",
            hintRu: "Пересечение — элементы, принадлежащие ОБОИМ множествам",
            hintKk: "Қиылысу — ЕКЕУ жиынға да тиесілі элементтер",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Set A has 15 elements, set B has 10 elements, and A ∩ B has 4 elements. How many elements are in A ∪ B?",
            questionRu: "Множество A содержит 15 элементов, B — 10, A ∩ B — 4. Сколько элементов в A ∪ B?",
            questionKk: "A жиынында 15 элемент, B-де 10, A ∩ B-де 4 элемент бар. A ∪ B-де қанша элемент бар?",
            answer: "21",
            answerRu: "21",
            answerKk: "21",
            hint: "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
            hintRu: "Используйте n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
            hintKk: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) қолданыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Given the proposition p: 'It is raining' and q: 'I carry an umbrella,' write the symbolic form and truth value of: 'If it is NOT raining, then I do NOT carry an umbrella.' Is this logically equivalent to p → q?",
            questionRu: "Дано высказывание p: «Идёт дождь» и q: «Я беру зонт». Запишите символическую форму и определите, логически ли эквивалентно выражение «Если НЕ идёт дождь, то я НЕ беру зонт» выражению p → q.",
            questionKk: "p: «Жаңбыр жауып тұр» және q: «Мен қолшатыр аламын» пропозициялары берілген. «Егер жаңбыр жаумаса, мен қолшатыр алмаймын» символдық формасын жазыңыз. Бұл p → q-ға логикалық эквивалент пе?",
            answer: "¬p → ¬q (inverse of p → q). This is NOT logically equivalent to p → q. It is equivalent to q → p (the converse).",
            answerRu: "¬p → ¬q (обратное к p → q). Оно НЕ логически эквивалентно p → q. Оно эквивалентно q → p (обращению).",
            answerKk: "¬p → ¬q (p → q-ға кері). Бұл p → q-ға логикалық эквивалент ЕМЕС. Ол q → p-ға (айналдырылғанға) эквивалент.",
            hint: "The inverse ¬p → ¬q is NOT the same as the original p → q; it equals the converse q → p",
            hintRu: "Обратное ¬p → ¬q НЕ равно исходному p → q; оно равно обращению q → p",
            hintKk: "Кері ¬p → ¬q бастапқы p → q-ға ТЕҢ ЕМЕС; ол q → p-ға тең",
            xp: 20
          }
        ]
      },
      {
        title: "IB English - Literary Analysis",
        titleRu: "IB Английский — Литературный анализ",
        titleKk: "IB Ағылшын — Әдеби талдау",
        content: "Literary analysis in IB English requires examining how authors use language, structure, and literary devices to convey meaning. You must identify techniques such as metaphor, symbolism, irony, and foreshadowing, then explain their effect on the reader. Strong analysis always connects technique to purpose and theme.",
        contentRu: "Литературный анализ в IB English требует изучения того, как авторы используют язык, структуру и литературные приёмы для передачи смысла. Нужно определять такие приёмы, как метафора, символизм, ирония и предзнаменование, и объяснять их влияние на читателя. Сильный анализ всегда связывает приём с целью и темой.",
        contentKk: "IB English-тегі әдеби талдау авторлардың мағына жеткізу үшін тілді, құрылымды және әдеби тәсілдерді қалай қолданатынын зерттеуді талап етеді. Метафора, символизм, ирония және алдын ала болжау сияқты тәсілдерді анықтап, олардың оқырманға әсерін түсіндіру керек. Күшті талдау әрқашан тәсілді мақсат пен тақырыппен байланыстырады.",
        keyFormulas: [
          {
            formula: "PEE: Point → Evidence → Explanation",
            formulaRu: "PEE: Тезис → Доказательство → Объяснение",
            formulaKk: "PEE: Тезис → Айғақ → Түсіндіру",
            description: "Structure for literary analysis paragraphs",
            descriptionRu: "Структура абзацев литературного анализа",
            descriptionKk: "Әдеби талдау параграфтарының құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "In the sentence 'The classroom was a zoo,' identify the literary device and explain its effect.",
            questionRu: "В предложении «Класс был зоопарком» определите литературный приём и объясните его эффект.",
            questionKk: "«Сынып хайуанатхана болды» сөйлемінде әдеби тәсілді анықтап, оның әсерін түсіндіріңіз.",
            steps: [
              { en: "Identify the device: This is a metaphor — it directly compares the classroom to a zoo without using 'like' or 'as'", ru: "Определяем приём: Это метафора — прямое сравнение класса с зоопарком без слов «как» или «подобно»", kk: "Тәсілді анықтаймыз: Бұл метафора — сынып хайуанатханамен «сияқты» сөзінсіз тікелей салыстырылады" },
              { en: "Explain the effect: It creates a vivid image of chaos and noise, suggesting the students are loud and uncontrolled", ru: "Объясняем эффект: Создаёт яркий образ хаоса и шума, предполагая, что ученики громкие и неуправляемые", kk: "Әсерін түсіндіреміз: Бұл тәртіпсіздік пен шудың жарқын бейнесін жасайды, оқушылардың шулы және бақыланбайтынын білдіреді" }
            ],
            answer: "Metaphor — it vividly conveys the chaotic, noisy atmosphere of the classroom.",
            answerRu: "Метафора — она ярко передаёт хаотичную, шумную атмосферу класса.",
            answerKk: "Метафора — ол сыныптың тәртіпсіз, шулы атмосферасын жарқын жеткізеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What literary device is used in: 'Her smile was like sunshine'?",
            questionRu: "Какой литературный приём использован в: «Её улыбка была как солнечный свет»?",
            questionKk: "«Оның күлкісі күн сәулесіндей болды» сөйлемінде қандай әдеби тәсіл қолданылған?",
            answer: "Simile",
            answerRu: "Сравнение (симиле)",
            answerKk: "Теңеу (симиле)",
            hint: "Look for comparison words: 'like' or 'as'",
            hintRu: "Ищите слова сравнения: «как» или «подобно»",
            hintKk: "Салыстыру сөздерін іздеңіз: «сияқты» немесе «тәрізді»",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A story about a sinking ship features a character who says 'What a lovely day for sailing!' What literary device is this?",
            questionRu: "В рассказе о тонущем корабле персонаж говорит: «Какой прекрасный день для плавания!» Какой это литературный приём?",
            questionKk: "Батып жатқан кеме туралы әңгімеде кейіпкер: «Жүзуге қандай тамаша күн!» дейді. Бұл қандай әдеби тәсіл?",
            answer: "Verbal irony (or situational irony) — the character says the opposite of the reality",
            answerRu: "Словесная ирония (или ситуативная ирония) — персонаж говорит противоположное реальности",
            answerKk: "Сөздік ирония (немесе жағдаяттық ирония) — кейіпкер шындыққа қарама-қайшы нәрсе айтады",
            hint: "When someone says the opposite of what the situation suggests",
            hintRu: "Когда кто-то говорит противоположное тому, что предполагает ситуация",
            hintKk: "Біреу жағдайға қарама-қайшы нәрсе айтқанда",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Write a PEE paragraph analyzing: 'In Orwell's 1984, the slogan WAR IS PEACE uses oxymoron.' Complete the Evidence and Explanation.",
            questionRu: "Напишите абзац PEE, анализируя: «В «1984» Оруэлла лозунг ВОЙНА — ЭТО МИР использует оксюморон». Дополните доказательство и объяснение.",
            questionKk: "PEE параграфын жазыңыз: «Оруэллдің 1984 романында «СОҒЫС — БҰЛ БЕЙБІТШІЛІК» ұраны оксюморон қолданады». Дәлелдеме мен түсіндірмені толтырыңыз.",
            answer: "Point: Orwell uses oxymoron. Evidence: 'WAR IS PEACE' combines contradictory terms. Explanation: This reveals how the totalitarian government manipulates language to control thought — by making citizens accept contradictions as truth, the Party eliminates critical thinking.",
            answerRu: "Утверждение: Оруэлл использует оксюморон. Доказательство: «ВОЙНА — ЭТО МИР» объединяет противоречивые термины. Объяснение: это показывает, как тоталитарное правительство манипулирует языком для контроля мышления — заставляя граждан принимать противоречия за истину, Партия устраняет критическое мышление.",
            answerKk: "Мәлімдеме: Оруэлл оксюморон қолданады. Дәлелдеме: «СОҒЫС — БҰЛ БЕЙБІТШІЛІК» қарама-қайшы терминдерді біріктіреді. Түсіндірме: бұл тоталитарлық үкіметтің ойлауды бақылау үшін тілді қалай манипуляциялайтынын көрсетеді — азаматтарды қайшылықтарды ақиқат деп қабылдатып, Партия сыни ойлауды жояды.",
            hint: "Connect the oxymoron to the theme of language manipulation and totalitarian control",
            hintRu: "Свяжите оксюморон с темой манипуляции языком и тоталитарного контроля",
            hintKk: "Оксюморонды тіл манипуляциясы мен тоталитарлық бақылау тақырыбымен байланыстырыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Human Geography",
        titleRu: "AP География человечества",
        titleKk: "AP Адам географиясы",
        content: "AP Human Geography examines how humans organize space and interact with their environment. Key concepts include population distribution, migration patterns, cultural landscapes, and urbanization. The course uses spatial analysis — maps, GIS data, and geographic models — to understand why people live where they do and how human activities shape the world.",
        contentRu: "AP Human Geography изучает, как люди организуют пространство и взаимодействуют со средой. Ключевые понятия: распределение населения, миграционные паттерны, культурные ландшафты и урбанизация. Курс использует пространственный анализ — карты, данные ГИС и географические модели — для понимания, почему люди живут там, где живут.",
        contentKk: "AP Human Geography адамдардың кеңістікті қалай ұйымдастыратынын және қоршаған ортамен қалай өзара әрекеттесетінін зерттейді. Негізгі ұғымдар: халықтың таралуы, көші-қон заңдылықтары, мәдени ландшафтар және урбанизация. Курс адамдардың неге белгілі жерде тұратынын түсіну үшін кеңістіктік талдауды — карталарды, ГАЖ деректерін және географиялық модельдерді қолданады.",
        keyFormulas: [
          {
            formula: "Population Density = Population / Area",
            formulaRu: "Плотность населения = Население / Площадь",
            formulaKk: "Халық тығыздығы = Халық саны / Аудан",
            description: "Average number of people per unit of area",
            descriptionRu: "Среднее количество людей на единицу площади",
            descriptionKk: "Бір аудан бірлігіне орташа адам саны"
          },
          {
            formula: "Natural Increase Rate = Birth Rate − Death Rate",
            formulaRu: "Коэффициент естественного прироста = Коэффициент рождаемости − Коэффициент смертности",
            formulaKk: "Табиғи өсім коэффициенті = Туу коэффициенті − Өлім коэффициенті",
            description: "Population growth rate excluding migration",
            descriptionRu: "Темп роста населения без учёта миграции",
            descriptionKk: "Көші-қонсыз халық өсу жылдамдығы"
          }
        ],
        solvedExamples: [
          {
            question: "A country has 50 million people in an area of 200,000 km². What is its population density?",
            questionRu: "В стране 50 миллионов человек на площади 200 000 км². Какова плотность населения?",
            questionKk: "Елде 200 000 км² аумақта 50 миллион адам тұрады. Халық тығыздығы қандай?",
            steps: [
              { en: "Apply the formula: Density = Population / Area = 50,000,000 / 200,000", ru: "Применяем формулу: Плотность = Население / Площадь = 50 000 000 / 200 000", kk: "Формуланы қолданамыз: Тығыздық = Халық / Аудан = 50 000 000 / 200 000" },
              { en: "Density = 250 people per km²", ru: "Плотность = 250 человек на км²", kk: "Тығыздық = 250 адам/км²" }
            ],
            answer: "250 people/km²",
            answerRu: "250 человек/км²",
            answerKk: "250 адам/км²"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the term for the movement of people from rural areas to cities?",
            questionRu: "Как называется перемещение людей из сельских районов в города?",
            questionKk: "Адамдардың ауылдық жерлерден қалаларға көшуі қалай аталады?",
            answer: "Urbanization",
            answerRu: "Урбанизация",
            answerKk: "Урбанизация",
            hint: "It is related to the word 'urban'",
            hintRu: "Это связано со словом «городской»",
            hintKk: "Бұл «қалалық» сөзімен байланысты",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A country has a birth rate of 25 per 1000 and a death rate of 10 per 1000. What is the natural increase rate?",
            questionRu: "В стране уровень рождаемости 25 на 1000, смертности — 10 на 1000. Каков естественный прирост?",
            questionKk: "Елдің туу коэффициенті 1000-ға 25, өлім коэффициенті 1000-ға 10. Табиғи өсу жылдамдығы қандай?",
            answer: "15 per 1000 (or 1.5%)",
            answerRu: "15 на 1000 (или 1,5%)",
            answerKk: "1000-ға 15 (немесе 1,5%)",
            hint: "NIR = Birth Rate − Death Rate",
            hintRu: "ЕП = Рождаемость − Смертность",
            hintKk: "ТӨ = Туу коэффициенті − Өлім коэффициенті",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain why Bangladesh (population density ~1,200/km²) is more densely populated than Australia (~3/km²), considering both physical and human factors.",
            questionRu: "Объясните, почему Бангладеш (плотность ~1200/км²) намного гуще населён, чем Австралия (~3/км²), учитывая физические и человеческие факторы.",
            questionKk: "Неге Бангладеш (тығыздығы ~1200/км²) Австралиядан (~3/км²) әлдеқайда тығыз қоныстанған, физикалық және адами факторларды ескере отырып түсіндіріңіз.",
            answer: "Bangladesh: fertile river delta (Ganges-Brahmaputra), monsoon climate supports rice farming, small land area. Australia: vast interior desert (arid), population concentrated on coasts, large land area with low agricultural potential inland.",
            answerRu: "Бангладеш: плодородная речная дельта (Ганг-Брахмапутра), муссонный климат поддерживает рисоводство, небольшая площадь. Австралия: обширная внутренняя пустыня (засушливая), население сосредоточено на побережьях, большая площадь с низким сельскохозяйственным потенциалом внутри страны.",
            answerKk: "Бангладеш: құнарлы өзен атырауы (Ганг-Брахмапутра), муссондық климат күріш өсіруге қолайлы, аумағы кіші. Австралия: кең ішкі шөл (құрғақ), халық жағалауларда шоғырланған, аумағы үлкен, бірақ ішкі бөлігінде ауыл шаруашылық әлеуеті төмен.",
            hint: "Consider climate, farming potential, land area, and where people can actually live",
            hintRu: "Учтите климат, сельскохозяйственный потенциал, площадь и где люди могут реально жить",
            hintKk: "Климатты, ауыл шаруашылық әлеуетін, аумақты және адамдардың нақты тұра алатын жерін ескеріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "Building AP/IB Schedule",
        titleRu: "Составление расписания AP/IB",
        titleKk: "AP/IB кестесін құру",
        content: "Building a balanced AP/IB schedule requires matching course rigor with your capacity and goals. Consider prerequisite chains (e.g., AP Calc AB before BC), workload distribution across semesters, and the balance between STEM and humanities. A well-planned schedule shows colleges intentional academic growth without risking burnout.",
        contentRu: "Составление сбалансированного расписания AP/IB требует соответствия строгости курсов вашим возможностям и целям. Учитывайте цепочки предпосылок (например, AP Calc AB перед BC), распределение нагрузки по семестрам и баланс между STEM и гуманитарными науками. Хорошо спланированное расписание демонстрирует целенаправленный рост.",
        contentKk: "Теңгерімді AP/IB кестесін құру курс қатаңдығын сіздің мүмкіндіктеріңіз бен мақсаттарыңызға сәйкестендіруді талап етеді. Алдын ала талап тізбектерін (мысалы, BC алдындағы AP Calc AB), жүктемені семестрлер бойынша бөлуді және STEM мен гуманитарлық ғылымдар арасындағы тепе-теңдікті ескеріңіз. Жақсы жоспарланған кесте мақсатты академиялық өсуді көрсетеді.",
        keyFormulas: [
          {
            formula: "Recommended AP load: Grade 9-10 (1-2), Grade 11 (3-4), Grade 12 (4-5)",
            formulaRu: "Рекомендуемая нагрузка AP: 9-10 класс (1-2), 11 класс (3-4), 12 класс (4-5)",
            formulaKk: "Ұсынылатын AP жүктемесі: 9-10 сынып (1-2), 11 сынып (3-4), 12 сынып (4-5)",
            description: "Suggested number of AP courses by grade level",
            descriptionRu: "Рекомендуемое количество курсов AP по классам",
            descriptionKk: "Сыныптар бойынша ұсынылатын AP курстарының саны"
          }
        ],
        solvedExamples: [
          {
            question: "A 9th grader wants to take AP Physics C, which requires calculus knowledge. They have not taken calculus. What should they do?",
            questionRu: "Девятиклассник хочет взять AP Physics C, который требует знания матанализа. Он не изучал матанализ. Что делать?",
            questionKk: "9-сынып оқушысы калькулюс білімін талап ететін AP Physics C алғысы келеді. Ол калькулюсты оқымаған. Не істеу керек?",
            steps: [
              { en: "Identify the prerequisite gap: AP Physics C requires concurrent or prior calculus (AP Calc AB minimum)", ru: "Определяем пробел: AP Physics C требует одновременного или предварительного изучения матанализа (минимум AP Calc AB)", kk: "Алдын ала талап олқылығын анықтаймыз: AP Physics C бір мезгілде немесе алдын ала калькулюсты талап етеді (кемінде AP Calc AB)" },
              { en: "Better path: Take AP Physics 1 in 9th grade, AP Calc AB in 10th, then AP Physics C in 11th", ru: "Лучший путь: AP Physics 1 в 9 классе, AP Calc AB в 10 классе, затем AP Physics C в 11 классе", kk: "Жақсы жол: 9-сыныпта AP Physics 1, 10-сыныпта AP Calc AB, содан кейін 11-сыныпта AP Physics C" }
            ],
            answer: "Take AP Physics 1 first, build calculus skills, then take AP Physics C in a later year.",
            answerRu: "Сначала возьмите AP Physics 1, развейте навыки матанализа, затем возьмите AP Physics C в следующем году.",
            answerKk: "Алдымен AP Physics 1 алыңыз, калькулюс дағдыларын дамытыңыз, содан кейін кейінгі жылы AP Physics C алыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Should you take AP Calculus BC before AP Calculus AB?",
            questionRu: "Нужно ли проходить AP Calculus BC до AP Calculus AB?",
            questionKk: "AP Calculus AB алдында AP Calculus BC алу керек пе?",
            answer: "No — AP Calc AB is the prerequisite for BC (AB content is included in BC)",
            answerRu: "Нет — AP Calc AB является предпосылкой для BC (содержание AB включено в BC)",
            answerKk: "Жоқ — AP Calc AB BC үшін алдын ала талап (AB мазмұны BC-ге кіреді)",
            hint: "Think about which course is more advanced",
            hintRu: "Подумайте, какой курс более продвинутый",
            hintKk: "Қай курс жоғарырақ деңгейлі екенін ойлаңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student takes 5 AP courses in 11th grade and their GPA drops from 3.8 to 3.2. Was this a good decision? Why or why not?",
            questionRu: "Ученик берёт 5 AP-курсов в 11 классе, и GPA падает с 3,8 до 3,2. Было ли это хорошим решением? Почему?",
            questionKk: "Оқушы 11-сыныпта 5 AP курсын алады және GPA 3,8-ден 3,2-ге түседі. Бұл дұрыс шешім бе? Неге?",
            answer: "Likely not — a significant GPA drop suggests overloading. Colleges prefer strong grades in fewer APs over poor grades in many. 3-4 APs with a 3.8 GPA is stronger than 5 APs with a 3.2.",
            answerRu: "Скорее всего нет — значительное падение GPA указывает на перегрузку. Вузы предпочитают высокие оценки в меньшем числе AP, чем низкие во многих. 3-4 AP с GPA 3,8 сильнее, чем 5 AP с 3,2.",
            answerKk: "Ықтимал жоқ — GPA-дың айтарлықтай төмендеуі шамадан тыс жүктемені білдіреді. Университеттер көп AP-тегі нашар бағалардан гөрі аз AP-тегі жоғары бағаларды жөн көреді. GPA 3,8-мен 3-4 AP, GPA 3,2-мен 5 AP-ден күштірек.",
            hint: "Colleges look at both course rigor AND grades",
            hintRu: "Вузы смотрят и на сложность курсов, И на оценки",
            hintKk: "Университеттер курс қатаңдығын ДА, бағаларды ДА қарайды",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Create a 4-year AP plan for a student interested in pre-med who is currently in 8th grade. Include at least 2 APs per year starting in 10th grade.",
            questionRu: "Составьте 4-летний план AP для будущего студента медицины, который сейчас в 8 классе. Включите минимум 2 AP в год начиная с 10 класса.",
            questionKk: "Қазір 8-сыныптағы болашақ медицина студенті үшін 4 жылдық AP жоспарын жасаңыз. 10-сыныптан бастап жылына кемінде 2 AP қосыңыз.",
            answer: "Grade 9: Honors Bio, Honors Chem (prep). Grade 10: AP Biology, AP Chemistry. Grade 11: AP Calc AB, AP Physics 1, AP English Lang. Grade 12: AP Calc BC, AP Physics C, AP Psychology, AP Statistics.",
            answerRu: "9 класс: углублённая биология, углублённая химия (подготовка). 10 класс: AP Biology, AP Chemistry. 11 класс: AP Calc AB, AP Physics 1, AP English Lang. 12 класс: AP Calc BC, AP Physics C, AP Psychology, AP Statistics.",
            answerKk: "9-сынып: тереңдетілген биология, тереңдетілген химия (дайындық). 10-сынып: AP Biology, AP Chemistry. 11-сынып: AP Calc AB, AP Physics 1, AP English Lang. 12-сынып: AP Calc BC, AP Physics C, AP Psychology, AP Statistics.",
            hint: "Pre-med needs strong science (bio, chem, physics), math (calc, stats), and well-rounded humanities",
            hintRu: "Для медицины нужны сильные науки (био, хим, физика), математика (матанализ, статистика) и гуманитарные предметы",
            hintKk: "Медицина үшін күшті ғылымдар (био, хим, физика), математика (калькулюс, статистика) және гуманитарлық пәндер қажет",
            xp: 20
          }
        ]
      }
    ]
  },

  "AP / IB Classes_10": {
    planetName: "AP / IB Classes",
    introduction: {
      en: "In Grade 10, you dive into core AP and IB content — functions, limits, kinematics, stoichiometry, genetics, and the foundations of IB Theory of Knowledge. These topics form the backbone of upper-level AP exams and the IB diploma programme.",
      ru: "В 10-м классе вы погружаетесь в основное содержание AP и IB — функции, пределы, кинематика, стехиометрия, генетика и основы теории познания IB. Эти темы составляют основу экзаменов AP старших классов и дипломной программы IB."
    },
    sections: [
      {
        title: "AP Calc - Functions Review",
        titleRu: "AP Матанализ — Обзор функций",
        titleKk: "AP Калькулюс — Функцияларды шолу",
        content: "Functions are the foundation of AP Calculus. A function maps each input to exactly one output, written as f(x). You must master function types (linear, quadratic, polynomial, rational, exponential, logarithmic, trigonometric), domain and range, and transformations (shifts, stretches, reflections).",
        contentRu: "Функции — основа AP Calculus. Функция сопоставляет каждому входу ровно один выход, записывается как f(x). Необходимо освоить типы функций (линейные, квадратичные, полиномиальные, рациональные, экспоненциальные, логарифмические, тригонометрические), область определения и значений, и преобразования.",
        contentKk: "Функциялар — AP Calculus-тың негізі. Функция әрбір кіріске дәл бір шығыс сәйкестендіреді, f(x) түрінде жазылады. Функция түрлерін (сызықтық, квадраттық, полиномдық, рационалдық, экспоненциалдық, логарифмдік, тригонометриялық), анықталу облысы мен мәндер облысын және түрлендірулерді меңгеру қажет.",
        keyFormulas: [
          {
            formula: "f(g(x)) — composite function; f⁻¹(x) — inverse function",
            formulaRu: "f(g(x)) — сложная функция; f⁻¹(x) — обратная функция",
            formulaKk: "f(g(x)) — күрделі функция; f⁻¹(x) — кері функция",
            description: "Composition combines two functions; inverse reverses the mapping",
            descriptionRu: "Композиция объединяет две функции; обратная функция меняет соответствие",
            descriptionKk: "Композиция екі функцияны біріктіреді; кері функция сәйкестікті өзгертеді"
          }
        ],
        solvedExamples: [
          {
            question: "If f(x) = 2x + 3 and g(x) = x², find f(g(2)).",
            questionRu: "Если f(x) = 2x + 3 и g(x) = x², найдите f(g(2)).",
            questionKk: "Егер f(x) = 2x + 3 және g(x) = x² болса, f(g(2))-ні табыңыз.",
            steps: [
              { en: "First find g(2): g(2) = 2² = 4", ru: "Сначала найдём g(2): g(2) = 2² = 4", kk: "Алдымен g(2)-ні табамыз: g(2) = 2² = 4" },
              { en: "Then find f(4): f(4) = 2(4) + 3 = 11", ru: "Затем найдём f(4): f(4) = 2(4) + 3 = 11", kk: "Содан кейін f(4)-ті табамыз: f(4) = 2(4) + 3 = 11" }
            ],
            answer: "f(g(2)) = 11",
            answerRu: "f(g(2)) = 11",
            answerKk: "f(g(2)) = 11"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the domain of f(x) = 1/x?",
            questionRu: "Какова область определения f(x) = 1/x?",
            questionKk: "f(x) = 1/x функциясының анықталу облысы қандай?",
            answer: "All real numbers except x = 0",
            answerRu: "Все действительные числа, кроме x = 0",
            answerKk: "x = 0-ден басқа барлық нақты сандар",
            hint: "What value of x makes the denominator zero?",
            hintRu: "Какое значение x делает знаменатель нулём?",
            hintKk: "x-тің қандай мәні бөлімді нөлге айналдырады?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the inverse of f(x) = 3x − 7.",
            questionRu: "Найдите обратную функцию для f(x) = 3x − 7.",
            questionKk: "f(x) = 3x − 7 функциясының кері функциясын табыңыз.",
            answer: "f⁻¹(x) = (x + 7)/3",
            answerRu: "f⁻¹(x) = (x + 7)/3",
            answerKk: "f⁻¹(x) = (x + 7)/3",
            hint: "Swap x and y, then solve for y",
            hintRu: "Поменяйте x и y, затем выразите y",
            hintKk: "x пен y-ді ауыстырып, y-ті табыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "If f(x) = x² + 1 and g(x) = √(x − 1), find g(f(x)) and state its domain.",
            questionRu: "Если f(x) = x² + 1 и g(x) = √(x − 1), найдите g(f(x)) и определите область определения.",
            questionKk: "Егер f(x) = x² + 1 және g(x) = √(x − 1) болса, g(f(x))-ті тауып, анықталу облысын көрсетіңіз.",
            answer: "g(f(x)) = √(x²) = |x|; domain is all real numbers",
            answerRu: "g(f(x)) = √(x²) = |x|; область определения — все действительные числа",
            answerKk: "g(f(x)) = √(x²) = |x|; анықталу облысы — барлық нақты сандар",
            hint: "Substitute f(x) into g: √((x² + 1) − 1) = √(x²)",
            hintRu: "Подставьте f(x) в g: √((x² + 1) − 1) = √(x²)",
            hintKk: "f(x)-ті g-ға қойыңыз: √((x² + 1) − 1) = √(x²)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Calc - Limits",
        titleRu: "AP Матанализ — Пределы",
        titleKk: "AP Калькулюс — Шектер",
        content: "Limits describe the value a function approaches as the input approaches a specific value. They are the foundation of calculus — derivatives and integrals are both defined using limits. You must learn to evaluate limits algebraically, graphically, and using techniques like factoring and rationalization.",
        contentRu: "Пределы описывают значение, к которому функция приближается при приближении входа к определённому значению. Они — основа матанализа: производные и интегралы определяются через пределы. Нужно научиться вычислять пределы алгебраически, графически и с помощью разложения на множители и рационализации.",
        contentKk: "Шектер функцияның кіріс белгілі бір мәнге жақындағандағы мәнін сипаттайды. Олар калькулюстің негізі — туындылар мен интегралдар шектер арқылы анықталады. Шектерді алгебралық, графикалық және множителіктерге жіктеу мен рационализация тәсілдерімен есептеуді үйрену керек.",
        keyFormulas: [
          {
            formula: "lim(x→a) f(x) = L",
            description: "As x approaches a, f(x) approaches L",
            descriptionRu: "При x, стремящемся к a, f(x) стремится к L",
            descriptionKk: "x a-ға жақындағанда f(x) L-ге жақындайды"
          },
          {
            formula: "lim(x→a) [f(x)/g(x)] where both → 0: factor and simplify",
            formulaRu: "lim(x→a) [f(x)/g(x)], если обе части → 0: разложите на множители и упростите",
            formulaKk: "lim(x→a) [f(x)/g(x)], екеуі де → 0 болса: көбейткіштерге жіктеп, ықшамдаңыз",
            description: "The 0/0 indeterminate form requires algebraic manipulation",
            descriptionRu: "Неопределённость 0/0 требует алгебраического преобразования",
            descriptionKk: "0/0 анықталмаған формасы алгебралық түрлендіруді талап етеді"
          }
        ],
        solvedExamples: [
          {
            question: "Find lim(x→3) (x² − 9)/(x − 3).",
            questionRu: "Найдите lim(x→3) (x² − 9)/(x − 3).",
            questionKk: "lim(x→3) (x² − 9)/(x − 3) табыңыз.",
            steps: [
              { en: "Factor the numerator: x² − 9 = (x + 3)(x − 3)", ru: "Разложим числитель: x² − 9 = (x + 3)(x − 3)", kk: "Алымды множителіктерге жіктейміз: x² − 9 = (x + 3)(x − 3)" },
              { en: "Cancel (x − 3): lim(x→3) (x + 3) = 3 + 3 = 6", ru: "Сокращаем (x − 3): lim(x→3) (x + 3) = 3 + 3 = 6", kk: "(x − 3) қысқартамыз: lim(x→3) (x + 3) = 3 + 3 = 6" }
            ],
            answer: "6",
            answerRu: "6",
            answerKk: "6"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find lim(x→2) (3x + 1).",
            questionRu: "Найдите lim(x→2) (3x + 1).",
            questionKk: "lim(x→2) (3x + 1) табыңыз.",
            answer: "7",
            answerRu: "7",
            answerKk: "7",
            hint: "For continuous functions, just substitute x = 2",
            hintRu: "Для непрерывных функций просто подставьте x = 2",
            hintKk: "Үздіксіз функциялар үшін x = 2 қойыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find lim(x→4) (x² − 16)/(x − 4).",
            questionRu: "Найдите lim(x→4) (x² − 16)/(x − 4).",
            questionKk: "lim(x→4) (x² − 16)/(x − 4) табыңыз.",
            answer: "8",
            answerRu: "8",
            answerKk: "8",
            hint: "Factor x² − 16 as a difference of squares",
            hintRu: "Разложите x² − 16 как разность квадратов",
            hintKk: "x² − 16 квадраттар айырмасы ретінде жіктеңіз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find lim(x→0) (√(x+4) − 2)/x.",
            questionRu: "Найдите lim(x→0) (√(x+4) − 2)/x.",
            questionKk: "lim(x→0) (√(x+4) − 2)/x табыңыз.",
            answer: "1/4",
            answerRu: "1/4",
            answerKk: "1/4",
            hint: "Multiply numerator and denominator by the conjugate (√(x+4) + 2)",
            hintRu: "Умножьте числитель и знаменатель на сопряжённое (√(x+4) + 2)",
            hintKk: "Алым мен бөлімді түйіндес өрнекке көбейтіңіз (√(x+4) + 2)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Kinematics",
        titleRu: "AP Физика — Кинематика",
        titleKk: "AP Физика — Кинематика",
        content: "Kinematics describes motion without considering its causes. The four kinematic equations relate displacement, initial velocity, final velocity, acceleration, and time. These equations apply only to constant acceleration, which includes free fall under gravity (g ≈ 9.8 m/s²).",
        contentRu: "Кинематика описывает движение без учёта его причин. Четыре кинематических уравнения связывают перемещение, начальную скорость, конечную скорость, ускорение и время. Эти уравнения применимы только при постоянном ускорении, включая свободное падение (g ≈ 9,8 м/с²).",
        contentKk: "Кинематика қозғалысты оның себептерін ескермей сипаттайды. Төрт кинематикалық теңдеу орын ауыстыруды, бастапқы жылдамдықты, соңғы жылдамдықты, үдеуді және уақытты байланыстырады. Бұл теңдеулер тек тұрақты үдеуде, соның ішінде еркін түсуде (g ≈ 9,8 м/с²) қолданылады.",
        keyFormulas: [
          {
            formula: "v = v₀ + at",
            description: "Final velocity from initial velocity, acceleration, and time",
            descriptionRu: "Конечная скорость из начальной скорости, ускорения и времени",
            descriptionKk: "Бастапқы жылдамдық, үдеу және уақыттан соңғы жылдамдық"
          },
          {
            formula: "Δx = v₀t + ½at²",
            description: "Displacement with constant acceleration",
            descriptionRu: "Перемещение при постоянном ускорении",
            descriptionKk: "Тұрақты үдеудегі орын ауыстыру"
          }
        ],
        solvedExamples: [
          {
            question: "A ball is dropped from rest. How far does it fall in 3 seconds? (g = 9.8 m/s²)",
            questionRu: "Мяч падает из состояния покоя. Как далеко он упадёт за 3 секунды? (g = 9,8 м/с²)",
            questionKk: "Доп тыныштық күйден түседі. 3 секундта қаншалықты құлайды? (g = 9,8 м/с²)",
            steps: [
              { en: "Use Δx = v₀t + ½at²; v₀ = 0, a = 9.8, t = 3", ru: "Используем Δx = v₀t + ½at²; v₀ = 0, a = 9,8, t = 3", kk: "Δx = v₀t + ½at² қолданамыз; v₀ = 0, a = 9,8, t = 3" },
              { en: "Δx = 0 + ½(9.8)(3²) = ½(9.8)(9) = 44.1 m", ru: "Δx = 0 + ½(9,8)(3²) = ½(9,8)(9) = 44,1 м", kk: "Δx = 0 + ½(9,8)(3²) = ½(9,8)(9) = 44,1 м" }
            ],
            answer: "44.1 m",
            answerRu: "44,1 м",
            answerKk: "44,1 м"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A car accelerates from rest at 2 m/s². What is its velocity after 5 seconds?",
            questionRu: "Автомобиль разгоняется из покоя с ускорением 2 м/с². Какова его скорость через 5 секунд?",
            questionKk: "Автомобиль тыныштық күйден 2 м/с² үдеумен жылдамдайды. 5 секундтан кейін жылдамдығы қандай?",
            answer: "10 m/s",
            answerRu: "10 м/с",
            answerKk: "10 м/с",
            hint: "v = v₀ + at = 0 + 2(5)",
            hintRu: "v = v₀ + at = 0 + 2(5)",
            hintKk: "v = v₀ + at = 0 + 2(5)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A car traveling at 20 m/s brakes to a stop in 4 seconds. What is its acceleration?",
            questionRu: "Автомобиль, движущийся со скоростью 20 м/с, тормозит до остановки за 4 секунды. Каково ускорение?",
            questionKk: "20 м/с жылдамдықпен жүретін автомобиль 4 секундта тоқтайды. Үдеуі қандай?",
            answer: "−5 m/s²",
            answerRu: "−5 м/с²",
            answerKk: "−5 м/с²",
            hint: "a = (v − v₀)/t = (0 − 20)/4",
            hintRu: "a = (v − v₀)/t = (0 − 20)/4",
            hintKk: "a = (v − v₀)/t = (0 − 20)/4",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A ball is thrown upward at 15 m/s from the ground. How high does it go? (g = 9.8 m/s²)",
            questionRu: "Мяч брошен вверх со скоростью 15 м/с с земли. На какую высоту он поднимется? (g = 9,8 м/с²)",
            questionKk: "Доп жерден 15 м/с жылдамдықпен жоғары лақтырылады. Қандай биіктікке көтеріледі? (g = 9,8 м/с²)",
            answer: "11.48 m",
            answerRu: "11,48 м",
            answerKk: "11,48 м",
            hint: "At maximum height v = 0. Use v² = v₀² + 2aΔx where a = −9.8",
            hintRu: "На максимальной высоте v = 0. Используйте v² = v₀² + 2aΔx где a = −9,8",
            hintKk: "Ең жоғары биіктікте v = 0. v² = v₀² + 2aΔx қолданыңыз, мұнда a = −9,8",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Free Body Diagrams",
        titleRu: "AP Физика — Диаграммы свободного тела",
        titleKk: "AP Физика — Еркін дене диаграммалары",
        content: "Free body diagrams (FBDs) are essential tools for solving force problems in AP Physics. An FBD shows all forces acting on a single object as arrows pointing in the direction of each force. Common forces include gravity (weight), normal force, friction, tension, and applied forces. Newton's second law (F = ma) is then applied to the net force.",
        contentRu: "Диаграммы свободного тела (FBD) — важнейший инструмент для решения задач на силы в AP Physics. FBD показывает все силы, действующие на один объект, в виде стрелок в направлении каждой силы. Основные силы: гравитация (вес), нормальная сила, трение, натяжение и приложенные силы. Затем применяется второй закон Ньютона (F = ma).",
        contentKk: "Еркін дене диаграммалары (FBD) AP Physics-те күш есептерін шешу үшін маңызды құралдар. FBD бір нысанға әрекет ететін барлық күштерді әр күштің бағытындағы көрсеткілер түрінде көрсетеді. Негізгі күштер: ауырлық (салмақ), тірек күші, үйкеліс, керілу және қолданылған күштер. Содан кейін Ньютонның екінші заңы (F = ma) қолданылады.",
        keyFormulas: [
          {
            formula: "ΣF = ma (Newton's Second Law)",
            formulaRu: "ΣF = ma (Второй закон Ньютона)",
            formulaKk: "ΣF = ma (Ньютонның екінші заңы)",
            description: "Net force equals mass times acceleration",
            descriptionRu: "Результирующая сила равна произведению массы на ускорение",
            descriptionKk: "Қорытқы күш массаның үдеуге көбейтіндісіне тең"
          },
          {
            formula: "W = mg (Weight)",
            formulaRu: "W = mg (Вес)",
            formulaKk: "W = mg (Салмақ)",
            description: "Weight is mass times gravitational acceleration",
            descriptionRu: "Вес равен произведению массы на ускорение свободного падения",
            descriptionKk: "Салмақ массаның еркін түсу үдеуіне көбейтіндісіне тең"
          }
        ],
        solvedExamples: [
          {
            question: "A 5 kg box sits on a table. Draw the FBD and find the normal force.",
            questionRu: "Коробка массой 5 кг стоит на столе. Нарисуйте FBD и найдите нормальную силу.",
            questionKk: "5 кг жәшік үстелде тұр. FBD салыңыз және тірек күшін табыңыз.",
            steps: [
              { en: "Forces: Weight W = mg = 5 × 9.8 = 49 N downward; Normal force N upward", ru: "Силы: Вес W = mg = 5 × 9,8 = 49 Н вниз; Нормальная сила N вверх", kk: "Күштер: Салмақ W = mg = 5 × 9,8 = 49 Н төмен; Тірек күші N жоғары" },
              { en: "Since a = 0 (at rest), ΣF = 0, so N − W = 0, thus N = 49 N", ru: "Так как a = 0 (покой), ΣF = 0, значит N − W = 0, следовательно N = 49 Н", kk: "a = 0 (тыныштықта) болғандықтан, ΣF = 0, сондықтан N − W = 0, демек N = 49 Н" }
            ],
            answer: "N = 49 N upward",
            answerRu: "N = 49 Н вверх",
            answerKk: "N = 49 Н жоғары"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the weight of a 10 kg object on Earth? (g = 9.8 m/s²)",
            questionRu: "Каков вес объекта массой 10 кг на Земле? (g = 9,8 м/с²)",
            questionKk: "Жерде 10 кг нысанның салмағы қандай? (g = 9,8 м/с²)",
            answer: "98 N",
            answerRu: "98 Н",
            answerKk: "98 Н",
            hint: "W = mg = 10 × 9.8",
            hintRu: "W = mg = 10 × 9,8",
            hintKk: "W = mg = 10 × 9,8",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A 3 kg block is pushed with a 15 N horizontal force on a frictionless surface. What is the acceleration?",
            questionRu: "Блок массой 3 кг толкают горизонтальной силой 15 Н по поверхности без трения. Каково ускорение?",
            questionKk: "3 кг блокты үйкеліссіз бетте 15 Н көлденең күшпен итереді. Үдеуі қандай?",
            answer: "5 m/s²",
            answerRu: "5 м/с²",
            answerKk: "5 м/с²",
            hint: "a = F/m = 15/3",
            hintRu: "a = F/m = 15/3",
            hintKk: "a = F/m = 15/3",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A 4 kg block on a surface has μₖ = 0.3. A 20 N horizontal force is applied. Find the acceleration. (g = 10 m/s²)",
            questionRu: "Блок массой 4 кг на поверхности с μₖ = 0,3. Приложена горизонтальная сила 20 Н. Найдите ускорение. (g = 10 м/с²)",
            questionKk: "Бетте μₖ = 0,3 болатын 4 кг блок. 20 Н көлденең күш қолданылады. Үдеуді табыңыз. (g = 10 м/с²)",
            answer: "2 m/s²",
            answerRu: "2 м/с²",
            answerKk: "2 м/с²",
            hint: "Friction = μₖ × N = 0.3 × 40 = 12 N. Net force = 20 − 12 = 8 N. a = 8/4",
            hintRu: "Трение = μₖ × N = 0,3 × 40 = 12 Н. Результирующая = 20 − 12 = 8 Н. a = 8/4",
            hintKk: "Үйкеліс = μₖ × N = 0,3 × 40 = 12 Н. Қорытқы күш = 20 − 12 = 8 Н. a = 8/4",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Stoichiometry",
        titleRu: "AP Химия — Стехиометрия",
        titleKk: "AP Химия — Стехиометрия",
        content: "Stoichiometry is the quantitative study of reactants and products in chemical reactions. It uses balanced equations and molar ratios to predict how much product forms from given reactants. The mole concept (1 mol = 6.022 × 10²³ particles) bridges the gap between atomic-scale chemistry and laboratory-scale measurements.",
        contentRu: "Стехиометрия — количественное изучение реагентов и продуктов в химических реакциях. Она использует сбалансированные уравнения и молярные соотношения для предсказания количества продукта. Понятие моля (1 моль = 6,022 × 10²³ частиц) соединяет атомный масштаб химии с лабораторными измерениями.",
        contentKk: "Стехиометрия — химиялық реакциялардағы реагенттер мен өнімдерді сандық зерттеу. Ол теңестірілген теңдеулер мен молярлық қатынастарды қолданып, берілген реагенттерден қанша өнім түзілетінін болжайды. Моль ұғымы (1 моль = 6,022 × 10²³ бөлшек) атомдық масштабты зертханалық өлшемдермен байланыстырады.",
        keyFormulas: [
          {
            formula: "n = m / M (moles = mass / molar mass)",
            formulaRu: "n = m / M (моли = масса / молярная масса)",
            formulaKk: "n = m / M (мольдер = масса / молярлық масса)",
            description: "Converting between grams and moles",
            descriptionRu: "Перевод между граммами и молями",
            descriptionKk: "Грамм мен моль арасындағы түрлендіру"
          },
          {
            formula: "1 mol = 6.022 × 10²³ particles (Avogadro's number)",
            formulaRu: "1 моль = 6.022 × 10²³ частиц (число Авогадро)",
            formulaKk: "1 моль = 6.022 × 10²³ бөлшек (Авогадро саны)",
            description: "Number of particles in one mole of any substance",
            descriptionRu: "Число частиц в одном моле любого вещества",
            descriptionKk: "Кез келген заттың бір моліндегі бөлшектер саны"
          }
        ],
        solvedExamples: [
          {
            question: "How many moles are in 36 g of water (H₂O)? (M = 18 g/mol)",
            questionRu: "Сколько молей в 36 г воды (H₂O)? (M = 18 г/моль)",
            questionKk: "36 г суда (H₂O) қанша моль бар? (M = 18 г/моль)",
            steps: [
              { en: "Apply n = m/M: n = 36 g / 18 g/mol", ru: "Применяем n = m/M: n = 36 г / 18 г/моль", kk: "n = m/M қолданамыз: n = 36 г / 18 г/моль" },
              { en: "n = 2 mol", ru: "n = 2 моль", kk: "n = 2 моль" }
            ],
            answer: "2 mol",
            answerRu: "2 моль",
            answerKk: "2 моль"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the molar mass of CO₂? (C = 12, O = 16)",
            questionRu: "Какова молярная масса CO₂? (C = 12, O = 16)",
            questionKk: "CO₂-нің молярлық массасы қандай? (C = 12, O = 16)",
            answer: "44 g/mol",
            answerRu: "44 г/моль",
            answerKk: "44 г/моль",
            hint: "Add: 12 + 16 + 16",
            hintRu: "Сложите: 12 + 16 + 16",
            hintKk: "Қосыңыз: 12 + 16 + 16",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "How many grams are in 3 mol of NaCl? (M = 58.44 g/mol)",
            questionRu: "Сколько граммов в 3 молях NaCl? (M = 58,44 г/моль)",
            questionKk: "3 моль NaCl-де қанша грамм бар? (M = 58,44 г/моль)",
            answer: "175.32 g",
            answerRu: "175,32 г",
            answerKk: "175,32 г",
            hint: "m = n × M = 3 × 58.44",
            hintRu: "m = n × M = 3 × 58,44",
            hintKk: "m = n × M = 3 × 58,44",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In the reaction 2H₂ + O₂ → 2H₂O, how many grams of water are produced from 4 g of H₂? (M_H₂ = 2, M_H₂O = 18)",
            questionRu: "В реакции 2H₂ + O₂ → 2H₂O, сколько граммов воды образуется из 4 г H₂? (M_H₂ = 2, M_H₂O = 18)",
            questionKk: "2H₂ + O₂ → 2H₂O реакциясында 4 г H₂-ден қанша грамм су түзіледі? (M_H₂ = 2, M_H₂O = 18)",
            answer: "36 g",
            answerRu: "36 г",
            answerKk: "36 г",
            hint: "4g H₂ = 2 mol H₂ → 2 mol H₂O (1:1 ratio from equation) → 2 × 18 = 36 g",
            hintRu: "4г H₂ = 2 моль H₂ → 2 моль H₂O (соотношение 1:1) → 2 × 18 = 36 г",
            hintKk: "4г H₂ = 2 моль H₂ → 2 моль H₂O (1:1 қатынасы) → 2 × 18 = 36 г",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Gas Laws",
        titleRu: "AP Химия — Газовые законы",
        titleKk: "AP Химия — Газ заңдары",
        content: "Gas laws describe the relationships between pressure, volume, temperature, and amount of gas. Boyle's law relates pressure and volume inversely at constant temperature. Charles's law relates volume and temperature directly at constant pressure. The ideal gas law PV = nRT combines all relationships into one equation.",
        contentRu: "Газовые законы описывают связи между давлением, объёмом, температурой и количеством газа. Закон Бойля связывает давление и объём обратно пропорционально при постоянной температуре. Закон Шарля связывает объём и температуру прямо пропорционально при постоянном давлении. Закон идеального газа PV = nRT объединяет все связи.",
        contentKk: "Газ заңдары қысым, көлем, температура және газ мөлшері арасындағы байланыстарды сипаттайды. Бойль заңы тұрақты температурада қысым мен көлемді кері пропорционалды байланыстырады. Шарль заңы тұрақты қысымда көлем мен температураны тура пропорционалды байланыстырады. Идеал газ заңы PV = nRT барлық байланыстарды біріктіреді.",
        keyFormulas: [
          {
            formula: "PV = nRT (Ideal Gas Law)",
            formulaRu: "PV = nRT (Уравнение состояния идеального газа)",
            formulaKk: "PV = nRT (Идеал газ заңы)",
            description: "R = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)",
            descriptionRu: "R = 0,0821 л·атм/(моль·К) или 8,314 Дж/(моль·К)",
            descriptionKk: "R = 0,0821 л·атм/(моль·К) немесе 8,314 Дж/(моль·К)"
          },
          {
            formula: "P₁V₁/T₁ = P₂V₂/T₂ (Combined Gas Law)",
            formulaRu: "P₁V₁/T₁ = P₂V₂/T₂ (Объединённый газовый закон)",
            formulaKk: "P₁V₁/T₁ = P₂V₂/T₂ (Біріктірілген газ заңы)",
            description: "Relates initial and final states of a gas",
            descriptionRu: "Связывает начальное и конечное состояния газа",
            descriptionKk: "Газдың бастапқы және соңғы күйлерін байланыстырады"
          }
        ],
        solvedExamples: [
          {
            question: "A gas occupies 2 L at 1 atm. What is its volume at 3 atm (constant temperature)?",
            questionRu: "Газ занимает 2 л при 1 атм. Каков его объём при 3 атм (постоянная температура)?",
            questionKk: "Газ 1 атм кезінде 2 л алады. 3 атм кезінде көлемі қандай (тұрақты температура)?",
            steps: [
              { en: "Boyle's Law: P₁V₁ = P₂V₂ → 1 × 2 = 3 × V₂", ru: "Закон Бойля: P₁V₁ = P₂V₂ → 1 × 2 = 3 × V₂", kk: "Бойль заңы: P₁V₁ = P₂V₂ → 1 × 2 = 3 × V₂" },
              { en: "V₂ = 2/3 = 0.667 L", ru: "V₂ = 2/3 = 0,667 л", kk: "V₂ = 2/3 = 0,667 л" }
            ],
            answer: "0.667 L",
            answerRu: "0,667 л",
            answerKk: "0,667 л"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "In Boyle's Law, if pressure doubles, what happens to volume (at constant temperature)?",
            questionRu: "По закону Бойля, если давление удваивается, что происходит с объёмом (при постоянной температуре)?",
            questionKk: "Бойль заңы бойынша, егер қысым екі есе артса, көлем не болады (тұрақты температурада)?",
            answer: "Volume is halved",
            answerRu: "Объём уменьшается вдвое",
            answerKk: "Көлем екі есе кемиді",
            hint: "Pressure and volume are inversely proportional",
            hintRu: "Давление и объём обратно пропорциональны",
            hintKk: "Қысым мен көлем кері пропорционалды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "How many moles of gas are in a 10 L container at 2 atm and 300 K? (R = 0.0821)",
            questionRu: "Сколько молей газа в контейнере 10 л при 2 атм и 300 К? (R = 0,0821)",
            questionKk: "2 атм және 300 К кезінде 10 л ыдыста қанша моль газ бар? (R = 0,0821)",
            answer: "0.812 mol",
            answerRu: "0,812 моль",
            answerKk: "0,812 моль",
            hint: "n = PV/(RT) = (2 × 10)/(0.0821 × 300)",
            hintRu: "n = PV/(RT) = (2 × 10)/(0,0821 × 300)",
            hintKk: "n = PV/(RT) = (2 × 10)/(0,0821 × 300)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A gas at 27°C and 1 atm occupies 5 L. What volume will it occupy at 127°C and 2 atm?",
            questionRu: "Газ при 27°C и 1 атм занимает 5 л. Какой объём он займёт при 127°C и 2 атм?",
            questionKk: "27°C және 1 атм кезінде газ 5 л алады. 127°C және 2 атм кезінде қандай көлем алады?",
            answer: "3.33 L",
            answerRu: "3,33 л",
            answerKk: "3,33 л",
            hint: "Convert to Kelvin first (add 273). Then use P₁V₁/T₁ = P₂V₂/T₂",
            hintRu: "Сначала переведите в Кельвины (прибавьте 273). Затем используйте P₁V₁/T₁ = P₂V₂/T₂",
            hintKk: "Алдымен Кельвинге айналдырыңыз (273 қосыңыз). Содан кейін P₁V₁/T₁ = P₂V₂/T₂ қолданыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Genetics",
        titleRu: "AP Биология — Генетика",
        titleKk: "AP Биология — Генетика",
        content: "Genetics studies how traits are inherited from parents to offspring. Gregor Mendel's laws of segregation and independent assortment explain inheritance patterns. Punnett squares predict the probability of offspring genotypes and phenotypes. Dominant alleles mask recessive ones, and codominance and incomplete dominance add complexity.",
        contentRu: "Генетика изучает, как признаки передаются от родителей к потомству. Законы Менделя о расщеплении и независимом комбинировании объясняют модели наследования. Решётки Пеннета предсказывают вероятность генотипов и фенотипов потомства. Доминантные аллели маскируют рецессивные, а кодоминирование и неполное доминирование усложняют картину.",
        contentKk: "Генетика белгілердің ата-аналардан ұрпаққа қалай мұрагерлік болатынын зерттейді. Мендельдің бөліну және тәуелсіз комбинация заңдары мұрагерлік заңдылықтарын түсіндіреді. Пеннет торы ұрпақ генотиптері мен фенотиптерінің ықтималдығын болжайды. Доминантты аллельдер рецессивтілерді жасырады, ал кодоминанттылық пен толық емес доминанттылық күрделілік қосады.",
        keyFormulas: [
          {
            formula: "Monohybrid cross: Aa × Aa → 1 AA : 2 Aa : 1 aa (genotype 1:2:1; phenotype 3:1)",
            formulaRu: "Моногибридное скрещивание: Aa × Aa → 1 AA : 2 Aa : 1 aa (генотип 1:2:1; фенотип 3:1)",
            formulaKk: "Моногибридті будандастыру: Aa × Aa → 1 AA : 2 Aa : 1 aa (генотип 1:2:1; фенотип 3:1)",
            description: "Expected ratios from crossing two heterozygous parents",
            descriptionRu: "Ожидаемые соотношения при скрещивании двух гетерозиготных родителей",
            descriptionKk: "Екі гетерозиготалы ата-ананы будандастыру кезіндегі күтілетін қатынастар"
          }
        ],
        solvedExamples: [
          {
            question: "Two heterozygous tall plants (Tt) are crossed. What fraction of offspring will be short (tt)?",
            questionRu: "Скрещиваются два гетерозиготных высоких растения (Tt). Какая доля потомства будет низкой (tt)?",
            questionKk: "Екі гетерозиготалы биік өсімдік (Tt) будандастырылады. Ұрпақтың қандай бөлігі аласа (tt) болады?",
            steps: [
              { en: "Set up Punnett square: Tt × Tt gives TT, Tt, Tt, tt", ru: "Составим решётку Пеннета: Tt × Tt даёт TT, Tt, Tt, tt", kk: "Пеннет торын құрамыз: Tt × Tt нәтижесі TT, Tt, Tt, tt" },
              { en: "Count tt: 1 out of 4 = 25%", ru: "Считаем tt: 1 из 4 = 25%", kk: "tt-ні санаймыз: 4-тен 1 = 25%" }
            ],
            answer: "1/4 or 25%",
            answerRu: "1/4 или 25%",
            answerKk: "1/4 немесе 25%"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "In a Punnett square, what does 'Tt' represent — homozygous or heterozygous?",
            questionRu: "В решётке Пеннета 'Tt' — это гомозиготный или гетерозиготный генотип?",
            questionKk: "Пеннет торында 'Tt' — гомозиготалы ма, гетерозиготалы ма?",
            answer: "Heterozygous",
            answerRu: "Гетерозиготный",
            answerKk: "Гетерозиготалы",
            hint: "Hetero means different — the two alleles are different",
            hintRu: "Гетеро означает разный — два аллеля различаются",
            hintKk: "Гетеро — әртүрлі дегенді білдіреді — екі аллель әртүрлі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Cross Tt × tt. What percentage of offspring will be tall (T_)?",
            questionRu: "Скрестите Tt × tt. Какой процент потомства будет высоким (T_)?",
            questionKk: "Tt × tt будандастырыңыз. Ұрпақтың қанша пайызы биік (T_) болады?",
            answer: "50%",
            answerRu: "50%",
            answerKk: "50%",
            hint: "Punnett square gives Tt, Tt, tt, tt",
            hintRu: "Решётка Пеннета даёт Tt, Tt, tt, tt",
            hintKk: "Пеннет торы Tt, Tt, tt, tt береді",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In a dihybrid cross (AaBb × AaBb), what fraction of offspring will have the genotype AABB?",
            questionRu: "При дигибридном скрещивании (AaBb × AaBb), какая доля потомства будет иметь генотип AABB?",
            questionKk: "Дигибридті будандастыруда (AaBb × AaBb) ұрпақтың қандай бөлігі AABB генотипіне ие болады?",
            answer: "1/16",
            answerRu: "1/16",
            answerKk: "1/16",
            hint: "P(AA) = 1/4 and P(BB) = 1/4; multiply independent probabilities",
            hintRu: "P(AA) = 1/4 и P(BB) = 1/4; умножьте независимые вероятности",
            hintKk: "P(AA) = 1/4 және P(BB) = 1/4; тәуелсіз ықтималдықтарды көбейтіңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Evolution",
        titleRu: "AP Биология — Эволюция",
        titleKk: "AP Биология — Эволюция",
        content: "Evolution by natural selection is the central organizing principle of biology and a major AP Bio topic. Organisms with traits better suited to their environment survive and reproduce more, passing those traits to offspring. Evidence for evolution includes the fossil record, comparative anatomy, DNA sequence similarities, and direct observation of natural selection.",
        contentRu: "Эволюция путём естественного отбора — центральный организующий принцип биологии и ключевая тема AP Bio. Организмы с признаками, лучше приспособленными к среде, выживают и размножаются чаще, передавая эти признаки потомству. Доказательства эволюции: ископаемые, сравнительная анатомия, сходство последовательностей ДНК и прямое наблюдение.",
        contentKk: "Табиғи сұрыптау арқылы эволюция — биологияның орталық ұйымдастыру принципі және AP Bio-ның негізгі тақырыбы. Ортаға жақсырақ бейімделген белгілері бар организмдер тірі қалып, көбірек көбейеді, сол белгілерді ұрпаққа береді. Эволюция дәлелдері: қазба жазбалары, салыстырмалы анатомия, ДНҚ тізбектерінің ұқсастығы және табиғи сұрыптауды тікелей бақылау.",
        keyFormulas: [
          {
            formula: "Hardy-Weinberg: p² + 2pq + q² = 1; p + q = 1",
            description: "Allele frequencies in a non-evolving population",
            descriptionRu: "Частоты аллелей в неэволюционирующей популяции",
            descriptionKk: "Эволюцияланбайтын популяциядағы аллель жиіліктері"
          }
        ],
        solvedExamples: [
          {
            question: "In a population, 16% show the recessive phenotype (aa). Find the frequency of the dominant allele (p).",
            questionRu: "В популяции 16% проявляют рецессивный фенотип (aa). Найдите частоту доминантного аллеля (p).",
            questionKk: "Популяцияда 16% рецессивті фенотипті (aa) көрсетеді. Доминантты аллель жиілігін (p) табыңыз.",
            steps: [
              { en: "q² = 0.16, so q = √0.16 = 0.4", ru: "q² = 0,16, значит q = √0,16 = 0,4", kk: "q² = 0,16, сондықтан q = √0,16 = 0,4" },
              { en: "p = 1 − q = 1 − 0.4 = 0.6", ru: "p = 1 − q = 1 − 0,4 = 0,6", kk: "p = 1 − q = 1 − 0,4 = 0,6" }
            ],
            answer: "p = 0.6",
            answerRu: "p = 0,6",
            answerKk: "p = 0,6"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the term for structures in different species that share a common evolutionary origin (e.g., human arm and whale flipper)?",
            questionRu: "Как называются структуры у разных видов, имеющие общее эволюционное происхождение (например, рука человека и плавник кита)?",
            questionKk: "Ортақ эволюциялық шығу тегі бар әр түрлі түрлердегі құрылымдар қалай аталады (мысалы, адам қолы мен кит жүзгіші)?",
            answer: "Homologous structures",
            answerRu: "Гомологичные структуры",
            answerKk: "Гомологиялық құрылымдар",
            hint: "Homo- means same; these structures have the same origin but different functions",
            hintRu: "Гомо- означает одинаковый; эти структуры имеют одинаковое происхождение, но разные функции",
            hintKk: "Гомо- бірдей дегенді білдіреді; бұл құрылымдар бірдей шығу тегіне ие, бірақ функциялары әртүрлі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "If q = 0.3 in a Hardy-Weinberg population, what is the frequency of heterozygotes (2pq)?",
            questionRu: "Если q = 0,3 в популяции Харди-Вайнберга, какова частота гетерозигот (2pq)?",
            questionKk: "Харди-Вайнберг популяциясында q = 0,3 болса, гетерозиготалардың жиілігі (2pq) қандай?",
            answer: "0.42",
            answerRu: "0,42",
            answerKk: "0,42",
            hint: "p = 1 − 0.3 = 0.7; 2pq = 2(0.7)(0.3)",
            hintRu: "p = 1 − 0,3 = 0,7; 2pq = 2(0,7)(0,3)",
            hintKk: "p = 1 − 0,3 = 0,7; 2pq = 2(0,7)(0,3)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Explain why antibiotic resistance in bacteria is an example of natural selection, not Lamarckian evolution.",
            questionRu: "Объясните, почему устойчивость бактерий к антибиотикам — пример естественного отбора, а не ламаркизма.",
            questionKk: "Неге бактериялардың антибиотикке төзімділігі табиғи сұрыптаудың мысалы, Ламарк эволюциясы емес екенін түсіндіріңіз.",
            answer: "Resistant bacteria existed before antibiotic exposure due to random mutations. The antibiotic kills susceptible bacteria, leaving resistant ones to reproduce — this is selection of pre-existing variation, not bacteria 'acquiring' resistance through effort (Lamarckian).",
            answerRu: "Устойчивые бактерии существовали до контакта с антибиотиком из-за случайных мутаций. Антибиотик убивает восприимчивые бактерии, оставляя устойчивые размножаться — это отбор уже существующей изменчивости, а не «приобретение» устойчивости бактериями через усилие (ламаркизм).",
            answerKk: "Төзімді бактериялар кездейсоқ мутациялар салдарынан антибиотикпен жанасудан бұрын болған. Антибиотик сезімтал бактерияларды өлтіреді, төзімділерін көбеюге қалдырады — бұл бар-болмысты сұрыптау, бактериялардың күш салып «иеленуі» емес (ламаркизм).",
            hint: "Focus on whether the trait existed before or after the environmental pressure",
            hintRu: "Сосредоточьтесь на том, существовал ли признак до или после воздействия среды",
            hintKk: "Белгі қоршаған орта қысымына дейін немесе кейін бар болғанына назар аударыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "IB TOK",
        titleRu: "IB Теория познания",
        titleKk: "IB Таным теориясы",
        content: "Theory of Knowledge (TOK) is a core component of the IB diploma that explores how we know what we claim to know. It examines knowledge claims through areas of knowledge (natural sciences, human sciences, arts, mathematics, history, ethics) and ways of knowing (reason, emotion, language, perception). TOK develops critical thinking about the nature and limits of knowledge.",
        contentRu: "Теория познания (TOK) — ключевой компонент диплома IB, который исследует, как мы знаем то, что утверждаем. Она рассматривает утверждения через области знания (естественные науки, гуманитарные науки, искусство, математика, история, этика) и способы познания (разум, эмоции, язык, восприятие). TOK развивает критическое мышление о природе и пределах знания.",
        contentKk: "Таным теориясы (TOK) — IB дипломының негізгі компоненті, ол біз білетінімізді қалай білетінімізді зерттейді. Ол білім талаптарын білім салалары (жаратылыстану ғылымдары, гуманитарлық ғылымдар, өнер, математика, тарих, этика) және тану жолдары (ақыл, эмоция, тіл, қабылдау) арқылы қарастырады. TOK білімнің табиғаты мен шектеулері туралы сыни ойлауды дамытады.",
        keyFormulas: [
          {
            formula: "Knowledge Claim → Justification → Evidence → Evaluation",
            formulaRu: "Утверждение знания → Обоснование → Доказательство → Оценка",
            formulaKk: "Білім тұжырымы → Негіздеу → Айғақ → Бағалау",
            description: "Framework for evaluating knowledge claims in TOK",
            descriptionRu: "Рамка для оценки утверждений о знании в TOK",
            descriptionKk: "TOK-та білім талаптарын бағалау шеңбері"
          }
        ],
        solvedExamples: [
          {
            question: "Is the statement 'The Earth orbits the Sun' justified through reason, perception, or both? Explain.",
            questionRu: "Утверждение «Земля вращается вокруг Солнца» обосновано разумом, восприятием или обоими? Объясните.",
            questionKk: "«Жер Күнді айналады» мәлімдемесі ақылмен, қабылдаумен немесе екеуімен де дәлелденген бе? Түсіндіріңіз.",
            steps: [
              { en: "Perception: We observe day/night cycles and seasonal changes, but direct perception suggests the Sun moves around Earth", ru: "Восприятие: Мы наблюдаем смену дня и ночи, но прямое восприятие подсказывает, что Солнце движется вокруг Земли", kk: "Қабылдау: Күн мен түн ауысуын бақылаймыз, бірақ тікелей қабылдау Күннің Жерді айналатынын көрсетеді" },
              { en: "Reason: Mathematical models and scientific evidence (Copernicus, Kepler, gravity) override our perception — reason corrects the senses", ru: "Разум: Математические модели и научные доказательства (Коперник, Кеплер, гравитация) опровергают восприятие — разум корректирует чувства", kk: "Ақыл: Математикалық модельдер мен ғылыми дәлелдемелер (Коперник, Кеплер, гравитация) қабылдауды жоққа шығарады — ақыл сезімдерді түзетеді" }
            ],
            answer: "Both, but reason overrides perception. Our senses suggest the Sun moves, but mathematical and scientific reasoning proves Earth orbits the Sun.",
            answerRu: "Оба, но разум преобладает над восприятием. Наши чувства подсказывают, что Солнце движется, но математические и научные рассуждения доказывают, что Земля вращается вокруг Солнца.",
            answerKk: "Екеуі де, бірақ ақыл қабылдаудан басым. Сезімдеріміз Күн қозғалады дегенді айтады, бірақ математикалық және ғылыми пайымдау Жердің Күнді айналатынын дәлелдейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name two of the four main 'ways of knowing' in TOK.",
            questionRu: "Назовите два из четырёх основных «способов познания» в TOK.",
            questionKk: "TOK-тағы төрт негізгі «тану жолының» екеуін атаңыз.",
            answer: "Any two of: reason, emotion, language, perception (also: faith, intuition, imagination, memory)",
            answerRu: "Любые два из: разум, эмоции, язык, восприятие (также: вера, интуиция, воображение, память)",
            answerKk: "Мыналардың кез келген екеуі: ақыл, эмоция, тіл, қабылдау (сонымен қатар: сенім, интуиция, қиял, есте сақтау)",
            hint: "How do we acquire knowledge? Through thinking, feeling, speaking, or sensing",
            hintRu: "Как мы получаем знания? Через мышление, чувства, язык или ощущения",
            hintKk: "Біз білімді қалай аламыз? Ойлау, сезу, тіл немесе қабылдау арқылы",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Can emotions be a reliable way of knowing? Give one argument for and one against.",
            questionRu: "Могут ли эмоции быть надёжным способом познания? Приведите один аргумент «за» и один «против».",
            questionKk: "Эмоциялар сенімді тану жолы бола ала ма? Бір «иә» және бір «жоқ» дәлел келтіріңіз.",
            answer: "For: Emotions can signal danger (fear) or injustice (moral outrage), guiding us to important truths. Against: Emotions can be biased, irrational, and lead to confirmation bias, making us believe what feels right rather than what is true.",
            answerRu: "За: Эмоции могут сигнализировать об опасности (страх) или несправедливости (моральное возмущение), направляя нас к важным истинам. Против: Эмоции могут быть предвзятыми, иррациональными и приводить к предвзятости подтверждения, заставляя нас верить в то, что кажется правильным, а не в то, что истинно.",
            answerKk: "Иә: Эмоциялар қауіп туралы (қорқыныш) немесе әділетсіздік туралы (моральдық ашу) сигнал беріп, маңызды ақиқаттарға бағыттай алады. Жоқ: Эмоциялар біржақты, иррационалды болып, растау қателігіне әкеліп, ақиқат емес, дұрыс сезілетін нәрсеге сендіруі мүмкін.",
            hint: "Think about when emotions help vs. when they mislead",
            hintRu: "Подумайте, когда эмоции помогают и когда вводят в заблуждение",
            hintKk: "Эмоциялар қашан көмектесетінін және қашан адастыратынын ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A historian and a physicist both claim to produce 'knowledge.' How might the nature of knowledge differ between history and natural science? Consider methodology and evidence.",
            questionRu: "Историк и физик оба утверждают, что производят «знание». Как может различаться природа знания в истории и естественной науке? Рассмотрите методологию и доказательства.",
            questionKk: "Тарихшы мен физик екеуі де «білім» шығарамыз дейді. Тарих пен жаратылыстану ғылымдарында білімнің табиғаты қалай ерекшеленуі мүмкін? Әдіснама мен дәлелдемелерді қарастырыңыз.",
            answer: "Natural science uses controlled experiments, reproducibility, and falsifiable hypotheses — it seeks universal laws. History relies on interpretation of unique past events through primary sources, testimony, and context — it produces narrative explanations, not universal laws. Both are valid knowledge but differ in methodology, certainty, and generalizability.",
            answerRu: "Естественная наука использует контролируемые эксперименты, воспроизводимость и опровержимые гипотезы — она ищет универсальные законы. История опирается на интерпретацию уникальных прошлых событий через первичные источники, свидетельства и контекст — она создаёт нарративные объяснения, а не универсальные законы. Оба вида знания достоверны, но различаются методологией, определённостью и обобщаемостью.",
            answerKk: "Жаратылыстану ғылымы бақыланатын тәжірибелерді, қайталанатындықты және теріске шығарылатын гипотезаларды қолданады — ол әмбебап заңдарды іздейді. Тарих бірегей өткен оқиғаларды бастапқы дереккөздер, куәліктер мен контекст арқылы түсіндіруге сүйенеді — ол әмбебап заңдар емес, баяндау түсіндірмелерін шығарады. Екеуі де жарамды білім, бірақ әдіснама, айқындық және жалпылау бойынша ерекшеленеді.",
            hint: "Compare: experiments vs. source analysis; universal laws vs. unique events; reproducibility vs. interpretation",
            hintRu: "Сравните: эксперименты vs. анализ источников; универсальные законы vs. уникальные события; воспроизводимость vs. интерпретация",
            hintKk: "Салыстырыңыз: тәжірибелер vs. дереккөздерді талдау; әмбебап заңдар vs. бірегей оқиғалар; қайталанатындық vs. түсіндіру",
            xp: 20
          }
        ]
      },
      {
        title: "IB Extended Essay Planning",
        titleRu: "IB Расширенное эссе — Планирование",
        titleKk: "IB Кеңейтілген эссе — Жоспарлау",
        content: "The Extended Essay (EE) is a 4,000-word independent research paper required for the IB diploma. Planning begins in Grade 10 with selecting a subject, developing a focused research question, and designing your methodology. A strong EE demonstrates critical thinking, academic writing skills, and deep engagement with your chosen topic.",
        contentRu: "Расширенное эссе (EE) — это самостоятельная исследовательская работа объёмом 4000 слов, обязательная для диплома IB. Планирование начинается в 10 классе с выбора предмета, разработки сфокусированного исследовательского вопроса и проектирования методологии. Сильное EE демонстрирует критическое мышление, навыки академического письма и глубокое погружение в тему.",
        contentKk: "Кеңейтілген эссе (EE) — IB дипломы үшін қажетті 4000 сөздік тәуелсіз зерттеу жұмысы. Жоспарлау 10-сыныпта пәнді таңдау, бағытталған зерттеу сұрағын әзірлеу және әдіснаманы жобалаумен басталады. Күшті EE сыни ойлауды, академиялық жазу дағдыларын және таңдалған тақырыпқа терең қатысуды көрсетеді.",
        keyFormulas: [
          {
            formula: "EE Structure: Introduction → Body (argument/analysis) → Conclusion → Bibliography",
            formulaRu: "Структура EE: Введение → Основная часть (аргумент/анализ) → Заключение → Библиография",
            formulaKk: "EE құрылымы: Кіріспе → Негізгі бөлім (дәлел/талдау) → Қорытынды → Библиография",
            description: "Standard structure of the IB Extended Essay",
            descriptionRu: "Стандартная структура расширенного эссе IB",
            descriptionKk: "IB кеңейтілген эссесінің стандартты құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to write about 'climate change.' Transform this into a focused EE research question.",
            questionRu: "Ученик хочет написать о «климатических изменениях». Преобразуйте это в сфокусированный исследовательский вопрос EE.",
            questionKk: "Оқушы «климат өзгерісі» туралы жазғысы келеді. Мұны бағытталған EE зерттеу сұрағына айналдырыңыз.",
            steps: [
              { en: "Narrow the topic: Choose a specific aspect (e.g., impact on one region, one species, or one policy)", ru: "Сузим тему: Выберите конкретный аспект (воздействие на один регион, один вид или одну политику)", kk: "Тақырыпты тарылтамыз: Нақты аспектіні таңдаңыз (бір аймаққа, бір түрге немесе бір саясатқа әсері)" },
              { en: "Formulate as a question: 'To what extent has glacial retreat in the Tian Shan mountains accelerated since 2000 due to rising temperatures?'", ru: "Сформулируем вопрос: «В какой степени отступление ледников в горах Тянь-Шань ускорилось с 2000 года из-за роста температур?»", kk: "Сұрақ түрінде тұжырымдаймыз: «2000 жылдан бері температураның жоғарылауына байланысты Тянь-Шань тауларындағы мұздық шегінісі қаншалықты жылдамдады?»" }
            ],
            answer: "'To what extent has glacial retreat in the Tian Shan mountains accelerated since 2000 due to rising temperatures?' — specific, researchable, and analytical.",
            answerRu: "«В какой степени отступление ледников в горах Тянь-Шань ускорилось с 2000 года из-за роста температур?» — конкретный, исследуемый и аналитический вопрос.",
            answerKk: "«2000 жылдан бері температураның жоғарылауына байланысты Тянь-Шань тауларындағы мұздық шегінісі қаншалықты жылдамдады?» — нақты, зерттелетін және аналитикалық сұрақ."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the maximum word count for an IB Extended Essay?",
            questionRu: "Каков максимальный объём слов для расширенного эссе IB?",
            questionKk: "IB кеңейтілген эссесінің сөздердің ең көп саны қанша?",
            answer: "4,000 words",
            answerRu: "4000 слов",
            answerKk: "4000 сөз",
            hint: "It is a specific limit that you must not exceed",
            hintRu: "Это конкретный лимит, который нельзя превышать",
            hintKk: "Бұл аспауға тиіс нақты шектеу",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Which is a better EE research question: (A) 'What is artificial intelligence?' or (B) 'To what extent can GPT-based AI models accurately diagnose skin cancer compared to dermatologists?'",
            questionRu: "Какой исследовательский вопрос лучше: (A) «Что такое искусственный интеллект?» или (B) «В какой степени модели ИИ на основе GPT могут точно диагностировать рак кожи по сравнению с дерматологами?»",
            questionKk: "Қай зерттеу сұрағы жақсырақ: (A) «Жасанды интеллект дегеніміз не?» немесе (B) «GPT-негізіндегі ЖИ модельдері тері обырын дерматологтармен салыстырғанда қаншалықты дәл диагноздай алады?»",
            answer: "B — it is specific, comparative, analytical, and researchable within 4000 words",
            answerRu: "B — он конкретный, сравнительный, аналитический и исследуемый в пределах 4000 слов",
            answerKk: "B — ол нақты, салыстырмалы, аналитикалық және 4000 сөз шегінде зерттелетін",
            hint: "Good EE questions are narrow, analytical (not just descriptive), and use phrases like 'to what extent'",
            hintRu: "Хорошие вопросы EE узкие, аналитические (не просто описательные) и используют фразы вроде «в какой степени»",
            hintKk: "Жақсы EE сұрақтары тар, аналитикалық (жай сипаттамалы емес) және «қаншалықты» сияқты сөз тіркестерін қолданады",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You want to write a Biology EE on antibiotic resistance. Your school lab cannot culture dangerous bacteria. Propose an alternative methodology that is still scientifically valid.",
            questionRu: "Вы хотите написать EE по биологии об устойчивости к антибиотикам. Школьная лаборатория не может культивировать опасные бактерии. Предложите альтернативную методологию.",
            questionKk: "Антибиотикке төзімділік туралы Biology EE жазғыңыз келеді. Мектеп зертханасы қауіпті бактерияларды өсіре алмайды. Баламалы әдіснаманы ұсыныңыз.",
            answer: "Use non-pathogenic bacteria (E. coli K-12 lab strain) with common antibiotics, measure zones of inhibition using disk diffusion assays. Alternatively, conduct a secondary data analysis using published research databases to compare resistance rates across regions.",
            answerRu: "Используйте непатогенные бактерии (лабораторный штамм E. coli K-12) с обычными антибиотиками, измеряйте зоны подавления методом диско-диффузии. Альтернативно проведите вторичный анализ данных с использованием опубликованных научных баз для сравнения уровней устойчивости по регионам.",
            answerKk: "Кәдімгі антибиотиктермен патогенді емес бактерияларды (E. coli K-12 зертханалық штаммы) қолданыңыз, дискілі диффузия әдісімен тежелу аймақтарын өлшеңіз. Балама ретінде аймақтар бойынша төзімділік деңгейлерін салыстыру үшін жарияланған зерттеу дерекқорларымен қайталама деректер талдауын жүргізіңіз.",
            hint: "Consider using safe lab strains or published data instead of dangerous pathogens",
            hintRu: "Рассмотрите использование безопасных лабораторных штаммов или опубликованных данных вместо опасных патогенов",
            hintKk: "Қауіпті патогендердің орнына қауіпсіз зертханалық штаммдарды немесе жарияланған деректерді қолдануды қарастырыңыз",
            xp: 20
          }
        ]
      }
    ]
  },

  "AP / IB Classes_11": {
    planetName: "AP / IB Classes",
    introduction: {
      en: "Grade 11 is the heart of AP and IB coursework. You will tackle derivatives and their applications, energy and momentum in physics, thermochemistry and equilibrium in chemistry, molecular genetics and ecology in biology, IB Internal Assessment design, and AP exam preparation strategies.",
      ru: "11-й класс — сердце курсов AP и IB. Вы изучите производные и их применения, энергию и импульс в физике, термохимию и равновесие в химии, молекулярную генетику и экологию в биологии, проектирование внутренней оценки IB и стратегии подготовки к экзаменам AP."
    },
    sections: [
      {
        title: "AP Calc - Derivatives",
        titleRu: "AP Матанализ — Производные",
        titleKk: "AP Калькулюс — Туындылар",
        content: "The derivative measures the instantaneous rate of change of a function at a point. It is defined as the limit of the difference quotient: f'(x) = lim(h→0) [f(x+h) − f(x)] / h. The power rule, product rule, quotient rule, and chain rule are the essential differentiation techniques for AP Calculus.",
        contentRu: "Производная измеряет мгновенную скорость изменения функции в точке. Она определяется как предел разностного отношения: f'(x) = lim(h→0) [f(x+h) − f(x)] / h. Правило степени, произведения, частного и цепное правило — основные методы дифференцирования в AP Calculus.",
        contentKk: "Туынды функцияның нүктедегі лездік өзгеру жылдамдығын өлшейді. Ол айырымдық бөліктің шегі ретінде анықталады: f'(x) = lim(h→0) [f(x+h) − f(x)] / h. Дәреже ережесі, көбейтінді ережесі, бөлінді ережесі және тізбек ережесі — AP Calculus-тағы негізгі дифференциалдау әдістері.",
        keyFormulas: [
          {
            formula: "Power Rule: d/dx [xⁿ] = nxⁿ⁻¹",
            formulaRu: "Степенное правило: d/dx [xⁿ] = nxⁿ⁻¹",
            formulaKk: "Дәрежелік ереже: d/dx [xⁿ] = nxⁿ⁻¹",
            description: "Derivative of x raised to any power",
            descriptionRu: "Производная x в любой степени",
            descriptionKk: "Кез келген дәрежедегі x-тің туындысы"
          },
          {
            formula: "Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x)",
            formulaRu: "Правило цепочки: d/dx [f(g(x))] = f'(g(x)) · g'(x)",
            formulaKk: "Тізбек ережесі: d/dx [f(g(x))] = f'(g(x)) · g'(x)",
            description: "Derivative of a composite function",
            descriptionRu: "Производная составной функции",
            descriptionKk: "Құрама функцияның туындысы"
          }
        ],
        solvedExamples: [
          {
            question: "Find the derivative of f(x) = 3x⁴ − 2x² + 5.",
            questionRu: "Найдите производную f(x) = 3x⁴ − 2x² + 5.",
            questionKk: "f(x) = 3x⁴ − 2x² + 5 функциясының туындысын табыңыз.",
            steps: [
              { en: "Apply the power rule to each term: d/dx[3x⁴] = 12x³, d/dx[−2x²] = −4x, d/dx[5] = 0", ru: "Применяем правило степени к каждому члену: d/dx[3x⁴] = 12x³, d/dx[−2x²] = −4x, d/dx[5] = 0", kk: "Әр мүшеге дәреже ережесін қолданамыз: d/dx[3x⁴] = 12x³, d/dx[−2x²] = −4x, d/dx[5] = 0" },
              { en: "f'(x) = 12x³ − 4x", ru: "f'(x) = 12x³ − 4x", kk: "f'(x) = 12x³ − 4x" }
            ],
            answer: "f'(x) = 12x³ − 4x",
            answerRu: "f'(x) = 12x³ − 4x",
            answerKk: "f'(x) = 12x³ − 4x"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Find the derivative of f(x) = 5x³.",
            questionRu: "Найдите производную f(x) = 5x³.",
            questionKk: "f(x) = 5x³ функциясының туындысын табыңыз.",
            answer: "15x²",
            answerRu: "15x²",
            answerKk: "15x²",
            hint: "Power rule: bring down the exponent and reduce by 1",
            hintRu: "Правило степени: опустите показатель и уменьшите на 1",
            hintKk: "Дәреже ережесі: дәрежені түсіріп, 1-ге азайтыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the derivative of f(x) = (2x + 1)⁵.",
            questionRu: "Найдите производную f(x) = (2x + 1)⁵.",
            questionKk: "f(x) = (2x + 1)⁵ функциясының туындысын табыңыз.",
            answer: "10(2x + 1)⁴",
            answerRu: "10(2x + 1)⁴",
            answerKk: "10(2x + 1)⁴",
            hint: "Chain rule: 5(2x + 1)⁴ × d/dx[2x + 1] = 5(2x + 1)⁴ × 2",
            hintRu: "Цепное правило: 5(2x + 1)⁴ × d/dx[2x + 1] = 5(2x + 1)⁴ × 2",
            hintKk: "Тізбек ережесі: 5(2x + 1)⁴ × d/dx[2x + 1] = 5(2x + 1)⁴ × 2",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Find the derivative of f(x) = x² · sin(x).",
            questionRu: "Найдите производную f(x) = x² · sin(x).",
            questionKk: "f(x) = x² · sin(x) функциясының туындысын табыңыз.",
            answer: "2x·sin(x) + x²·cos(x)",
            answerRu: "2x·sin(x) + x²·cos(x)",
            answerKk: "2x·sin(x) + x²·cos(x)",
            hint: "Product rule: (u·v)' = u'v + uv' where u = x², v = sin(x)",
            hintRu: "Правило произведения: (u·v)' = u'v + uv' где u = x², v = sin(x)",
            hintKk: "Көбейтінді ережесі: (u·v)' = u'v + uv' мұнда u = x², v = sin(x)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Calc - Derivative Applications",
        titleRu: "AP Матанализ — Применения производных",
        titleKk: "AP Калькулюс — Туынды қолданбалары",
        content: "Derivatives have powerful real-world applications: finding slopes of tangent lines, determining where functions increase or decrease, locating maximum and minimum values, and solving optimization problems. The first derivative test identifies local extrema, while the second derivative test determines concavity.",
        contentRu: "Производные имеют мощные практические приложения: нахождение наклонов касательных, определение интервалов возрастания и убывания, нахождение максимумов и минимумов, решение задач оптимизации. Первый производный тест определяет локальные экстремумы, а второй — вогнутость.",
        contentKk: "Туындылардың қуатты нақты қолданбалары бар: жанама сызықтардың көлбеулерін табу, функциялардың артатын немесе кемитін жерлерін анықтау, максимум мен минимум мәндерін табу және оңтайландыру есептерін шешу. Бірінші туынды тесті жергілікті экстремумдарды анықтайды, ал екіші туынды тесті ойыстықты анықтайды.",
        keyFormulas: [
          {
            formula: "f'(x) = 0 at critical points; f''(x) > 0 → minimum, f''(x) < 0 → maximum",
            formulaRu: "f'(x) = 0 в критических точках; f''(x) > 0 → минимум, f''(x) < 0 → максимум",
            formulaKk: "f'(x) = 0 критикалық нүктелерде; f''(x) > 0 → минимум, f''(x) < 0 → максимум",
            description: "Second derivative test for classifying extrema",
            descriptionRu: "Тест второй производной для классификации экстремумов",
            descriptionKk: "Экстремумдарды жіктеу үшін екінші туынды тесті"
          }
        ],
        solvedExamples: [
          {
            question: "Find the local maximum of f(x) = −x² + 4x + 1.",
            questionRu: "Найдите локальный максимум f(x) = −x² + 4x + 1.",
            questionKk: "f(x) = −x² + 4x + 1 функциясының жергілікті максимумын табыңыз.",
            steps: [
              { en: "Find critical point: f'(x) = −2x + 4 = 0 → x = 2", ru: "Найдём критическую точку: f'(x) = −2x + 4 = 0 → x = 2", kk: "Критикалық нүктені табамыз: f'(x) = −2x + 4 = 0 → x = 2" },
              { en: "f''(x) = −2 < 0, so x = 2 is a maximum. f(2) = −4 + 8 + 1 = 5", ru: "f''(x) = −2 < 0, значит x = 2 — максимум. f(2) = −4 + 8 + 1 = 5", kk: "f''(x) = −2 < 0, сондықтан x = 2 максимум. f(2) = −4 + 8 + 1 = 5" }
            ],
            answer: "Local maximum at (2, 5)",
            answerRu: "Локальный максимум в точке (2, 5)",
            answerKk: "Жергілікті максимум (2, 5) нүктесінде"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If f'(x) > 0 on an interval, is f increasing or decreasing on that interval?",
            questionRu: "Если f'(x) > 0 на интервале, функция f возрастает или убывает?",
            questionKk: "Егер аралықта f'(x) > 0 болса, f артады ма, кемиді ме?",
            answer: "Increasing",
            answerRu: "Возрастает",
            answerKk: "Артады",
            hint: "Positive derivative means the function is going up",
            hintRu: "Положительная производная означает, что функция растёт",
            hintKk: "Оң туынды функцияның артып жатқанын білдіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the critical points of f(x) = x³ − 3x.",
            questionRu: "Найдите критические точки f(x) = x³ − 3x.",
            questionKk: "f(x) = x³ − 3x функциясының критикалық нүктелерін табыңыз.",
            answer: "x = 1 and x = −1",
            answerRu: "x = 1 и x = −1",
            answerKk: "x = 1 және x = −1",
            hint: "Set f'(x) = 3x² − 3 = 0 and solve",
            hintRu: "Приравняйте f'(x) = 3x² − 3 = 0 и решите",
            hintKk: "f'(x) = 3x² − 3 = 0 теңдеп, шешіңіз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A farmer has 100 m of fencing to enclose a rectangular garden against a barn wall (so only 3 sides need fencing). What dimensions maximize the area?",
            questionRu: "У фермера 100 м забора для прямоугольного сада у стены сарая (нужно оградить 3 стороны). Какие размеры максимизируют площадь?",
            questionKk: "Фермерде қора қабырғасына тірейтін тіктөртбұрышты бақша қоршау үшін 100 м қоршау бар (тек 3 жағын қоршау керек). Қандай өлшемдер ауданды максималдайды?",
            answer: "Width = 25 m, Length = 50 m, Maximum area = 1250 m²",
            answerRu: "Ширина = 25 м, Длина = 50 м, Максимальная площадь = 1250 м²",
            answerKk: "Ені = 25 м, Ұзындығы = 50 м, Максималды аудан = 1250 м²",
            hint: "Let width = x. Then length = 100 − 2x. A = x(100 − 2x). Find dA/dx = 0.",
            hintRu: "Пусть ширина = x. Тогда длина = 100 − 2x. A = x(100 − 2x). Найдите dA/dx = 0.",
            hintKk: "Ені = x болсын. Онда ұзындығы = 100 − 2x. A = x(100 − 2x). dA/dx = 0 табыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Energy & Momentum",
        titleRu: "AP Физика — Энергия и импульс",
        titleKk: "AP Физика — Энергия және импульс",
        content: "Energy conservation and momentum conservation are two of the most powerful principles in physics. Kinetic energy (½mv²) and potential energy (mgh) can transform into each other but total mechanical energy is conserved in the absence of friction. Momentum (p = mv) is conserved in all collisions, making it essential for analyzing impacts.",
        contentRu: "Сохранение энергии и импульса — два самых мощных принципа физики. Кинетическая энергия (½mv²) и потенциальная (mgh) могут превращаться друг в друга, но суммарная механическая энергия сохраняется при отсутствии трения. Импульс (p = mv) сохраняется во всех столкновениях.",
        contentKk: "Энергияның сақталуы мен импульстың сақталуы — физикадағы ең қуатты екі принцип. Кинетикалық энергия (½mv²) мен потенциалдық энергия (mgh) бір-біріне айнала алады, бірақ үйкеліс болмаған жағдайда жалпы механикалық энергия сақталады. Импульс (p = mv) барлық соқтығыстарда сақталады.",
        keyFormulas: [
          {
            formula: "KE = ½mv²; PE = mgh; KE₁ + PE₁ = KE₂ + PE₂",
            description: "Conservation of mechanical energy",
            descriptionRu: "Сохранение механической энергии",
            descriptionKk: "Механикалық энергияның сақталуы"
          },
          {
            formula: "p = mv; m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'",
            description: "Conservation of momentum in collisions",
            descriptionRu: "Сохранение импульса при столкновениях",
            descriptionKk: "Соқтығыстардағы импульстің сақталуы"
          }
        ],
        solvedExamples: [
          {
            question: "A 2 kg ball is dropped from 5 m height. What is its speed just before hitting the ground? (g = 10 m/s²)",
            questionRu: "Мяч массой 2 кг падает с высоты 5 м. Какова его скорость перед ударом о землю? (g = 10 м/с²)",
            questionKk: "2 кг доп 5 м биіктіктен түсіріледі. Жерге тиер алдында жылдамдығы қандай? (g = 10 м/с²)",
            steps: [
              { en: "Energy conservation: mgh = ½mv² → v² = 2gh = 2(10)(5) = 100", ru: "Сохранение энергии: mgh = ½mv² → v² = 2gh = 2(10)(5) = 100", kk: "Энергия сақталуы: mgh = ½mv² → v² = 2gh = 2(10)(5) = 100" },
              { en: "v = √100 = 10 m/s", ru: "v = √100 = 10 м/с", kk: "v = √100 = 10 м/с" }
            ],
            answer: "10 m/s",
            answerRu: "10 м/с",
            answerKk: "10 м/с"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the kinetic energy of a 3 kg object moving at 4 m/s?",
            questionRu: "Какова кинетическая энергия объекта массой 3 кг, движущегося со скоростью 4 м/с?",
            questionKk: "4 м/с жылдамдықпен қозғалатын 3 кг нысанның кинетикалық энергиясы қандай?",
            answer: "24 J",
            answerRu: "24 Дж",
            answerKk: "24 Дж",
            hint: "KE = ½mv² = ½(3)(16)",
            hintRu: "KE = ½mv² = ½(3)(16)",
            hintKk: "KE = ½mv² = ½(3)(16)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A 1500 kg car at 20 m/s collides with a stationary 1000 kg car. They stick together. What is their final velocity?",
            questionRu: "Автомобиль массой 1500 кг при 20 м/с сталкивается с неподвижным автомобилем 1000 кг. Они сцепляются. Какова конечная скорость?",
            questionKk: "1500 кг автомобиль 20 м/с жылдамдықпен тұрған 1000 кг автомобильге соғылады. Олар біріге қалады. Соңғы жылдамдық қандай?",
            answer: "12 m/s",
            answerRu: "12 м/с",
            answerKk: "12 м/с",
            hint: "m₁v₁ = (m₁ + m₂)v_f → 1500(20) = 2500 × v_f",
            hintRu: "m₁v₁ = (m₁ + m₂)v_f → 1500(20) = 2500 × v_f",
            hintKk: "m₁v₁ = (m₁ + m₂)v_f → 1500(20) = 2500 × v_f",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A roller coaster car (500 kg) starts from rest at the top of a 30 m hill. What is its speed at the top of a 10 m hill? (Assume no friction, g = 10 m/s²)",
            questionRu: "Вагонетка аттракциона (500 кг) стартует с вершины холма 30 м. Какова скорость на вершине холма 10 м? (Без трения, g = 10 м/с²)",
            questionKk: "Аттракцион вагоны (500 кг) 30 м төбеден тыныштық күйден бастайды. 10 м төбеде жылдамдығы қандай? (Үйкеліссіз, g = 10 м/с²)",
            answer: "20 m/s",
            answerRu: "20 м/с",
            answerKk: "20 м/с",
            hint: "mgh₁ = ½mv² + mgh₂ → v² = 2g(h₁ − h₂) = 2(10)(30 − 10)",
            hintRu: "mgh₁ = ½mv² + mgh₂ → v² = 2g(h₁ − h₂) = 2(10)(30 − 10)",
            hintKk: "mgh₁ = ½mv² + mgh₂ → v² = 2g(h₁ − h₂) = 2(10)(30 − 10)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics - Rotation",
        titleRu: "AP Физика — Вращение",
        titleKk: "AP Физика — Айналу",
        content: "Rotational motion extends linear mechanics to spinning objects. Angular velocity (ω), angular acceleration (α), and torque (τ) are the rotational analogs of velocity, acceleration, and force. The moment of inertia (I) replaces mass, and Newton's second law becomes τ = Iα. Rotational kinetic energy is ½Iω².",
        contentRu: "Вращательное движение расширяет линейную механику на вращающиеся объекты. Угловая скорость (ω), угловое ускорение (α) и момент силы (τ) — вращательные аналоги скорости, ускорения и силы. Момент инерции (I) заменяет массу, а второй закон Ньютона принимает вид τ = Iα.",
        contentKk: "Айналмалы қозғалыс сызықтық механиканы айналатын нысандарға кеңейтеді. Бұрыштық жылдамдық (ω), бұрыштық үдеу (α) және айналдыру моменті (τ) — жылдамдық, үдеу және күштің айналмалы аналогтары. Инерция моменті (I) массаны алмастырады, ал Ньютонның екінші заңы τ = Iα болады.",
        keyFormulas: [
          {
            formula: "τ = Iα; τ = r × F",
            description: "Torque equals moment of inertia times angular acceleration; also force times lever arm",
            descriptionRu: "Момент силы = момент инерции × угловое ускорение; также сила × плечо",
            descriptionKk: "Айналдыру моменті = инерция моменті × бұрыштық үдеу; сондай-ақ күш × иін"
          },
          {
            formula: "KE_rot = ½Iω²",
            description: "Rotational kinetic energy",
            descriptionRu: "Вращательная кинетическая энергия",
            descriptionKk: "Айналмалы кинетикалық энергия"
          }
        ],
        solvedExamples: [
          {
            question: "A torque of 12 N·m is applied to a wheel with moment of inertia 3 kg·m². What is the angular acceleration?",
            questionRu: "К колесу с моментом инерции 3 кг·м² приложен момент силы 12 Н·м. Каково угловое ускорение?",
            questionKk: "Инерция моменті 3 кг·м² дөңгелекке 12 Н·м айналдыру моменті қолданылады. Бұрыштық үдеу қандай?",
            steps: [
              { en: "Apply τ = Iα: 12 = 3 × α", ru: "Применяем τ = Iα: 12 = 3 × α", kk: "τ = Iα қолданамыз: 12 = 3 × α" },
              { en: "α = 12/3 = 4 rad/s²", ru: "α = 12/3 = 4 рад/с²", kk: "α = 12/3 = 4 рад/с²" }
            ],
            answer: "4 rad/s²",
            answerRu: "4 рад/с²",
            answerKk: "4 рад/с²"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the rotational analog of force?",
            questionRu: "Что является вращательным аналогом силы?",
            questionKk: "Күштің айналмалы аналогы не?",
            answer: "Torque (τ)",
            answerRu: "Момент силы (τ)",
            answerKk: "Айналдыру моменті (τ)",
            hint: "It causes rotational acceleration, just as force causes linear acceleration",
            hintRu: "Он вызывает угловое ускорение, как сила вызывает линейное",
            hintKk: "Ол бұрыштық үдеуді тудырады, күш сызықтық үдеуді тудыратындай",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A wrench applies a force of 40 N at a distance of 0.3 m from the bolt. What is the torque?",
            questionRu: "Гаечный ключ прикладывает силу 40 Н на расстоянии 0,3 м от болта. Каков момент силы?",
            questionKk: "Кілт бұрамадан 0,3 м қашықтықта 40 Н күш қолданады. Айналдыру моменті қандай?",
            answer: "12 N·m",
            answerRu: "12 Н·м",
            answerKk: "12 Н·м",
            hint: "τ = r × F = 0.3 × 40",
            hintRu: "τ = r × F = 0,3 × 40",
            hintKk: "τ = r × F = 0,3 × 40",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A solid disk (I = ½MR²) has mass 4 kg and radius 0.5 m. It spins at 10 rad/s. What is its rotational kinetic energy?",
            questionRu: "Сплошной диск (I = ½MR²) массой 4 кг и радиусом 0,5 м вращается со скоростью 10 рад/с. Какова вращательная кинетическая энергия?",
            questionKk: "Тұтас диск (I = ½MR²) массасы 4 кг, радиусы 0,5 м, 10 рад/с жылдамдықпен айналады. Айналмалы кинетикалық энергиясы қандай?",
            answer: "25 J",
            answerRu: "25 Дж",
            answerKk: "25 Дж",
            hint: "I = ½(4)(0.5²) = 0.5; KE = ½Iω² = ½(0.5)(100)",
            hintRu: "I = ½(4)(0,5²) = 0,5; KE = ½Iω² = ½(0,5)(100)",
            hintKk: "I = ½(4)(0,5²) = 0,5; KE = ½Iω² = ½(0,5)(100)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Thermochemistry",
        titleRu: "AP Химия — Термохимия",
        titleKk: "AP Химия — Термохимия",
        content: "Thermochemistry studies heat changes in chemical reactions. Exothermic reactions release heat (ΔH < 0), while endothermic reactions absorb heat (ΔH > 0). Hess's law states that the total enthalpy change is independent of the pathway, allowing calculation of ΔH using known reactions. Calorimetry measures heat experimentally using q = mcΔT.",
        contentRu: "Термохимия изучает тепловые изменения в химических реакциях. Экзотермические реакции выделяют теплоту (ΔH < 0), эндотермические — поглощают (ΔH > 0). Закон Гесса гласит, что общее изменение энтальпии не зависит от пути реакции. Калориметрия измеряет теплоту экспериментально: q = mcΔT.",
        contentKk: "Термохимия химиялық реакциялардағы жылу өзгерістерін зерттейді. Экзотермиялық реакциялар жылу бөледі (ΔH < 0), эндотермиялық реакциялар жылу сіңіреді (ΔH > 0). Гесс заңы жалпы энтальпия өзгерісі жолға тәуелсіз екенін айтады. Калориметрия жылуды эксперименталды түрде q = mcΔT арқылы өлшейді.",
        keyFormulas: [
          {
            formula: "q = mcΔT",
            description: "Heat absorbed or released: mass × specific heat × temperature change",
            descriptionRu: "Поглощённая или выделенная теплота: масса × удельная теплоёмкость × изменение температуры",
            descriptionKk: "Сіңірілген немесе бөлінген жылу: масса × меншікті жылу сыйымдылығы × температура өзгерісі"
          },
          {
            formula: "ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)",
            formulaRu: "ΔH°реакции = ΣΔH°f(продукты) − ΣΔH°f(реагенты)",
            formulaKk: "ΔH°реакциясы = ΣΔH°f(өнімдер) − ΣΔH°f(реагенттер)",
            description: "Enthalpy of reaction from standard enthalpies of formation",
            descriptionRu: "Энтальпия реакции из стандартных энтальпий образования",
            descriptionKk: "Стандартты түзілу энтальпияларынан реакция энтальпиясы"
          }
        ],
        solvedExamples: [
          {
            question: "How much heat is needed to raise the temperature of 200 g of water from 20°C to 70°C? (c = 4.18 J/g·°C)",
            questionRu: "Сколько теплоты нужно, чтобы нагреть 200 г воды с 20°C до 70°C? (c = 4,18 Дж/г·°C)",
            questionKk: "200 г судың температурасын 20°C-тан 70°C-қа көтеру үшін қанша жылу қажет? (c = 4,18 Дж/г·°C)",
            steps: [
              { en: "ΔT = 70 − 20 = 50°C", ru: "ΔT = 70 − 20 = 50°C", kk: "ΔT = 70 − 20 = 50°C" },
              { en: "q = mcΔT = 200 × 4.18 × 50 = 41,800 J = 41.8 kJ", ru: "q = mcΔT = 200 × 4,18 × 50 = 41 800 Дж = 41,8 кДж", kk: "q = mcΔT = 200 × 4,18 × 50 = 41 800 Дж = 41,8 кДж" }
            ],
            answer: "41,800 J (41.8 kJ)",
            answerRu: "41 800 Дж (41,8 кДж)",
            answerKk: "41 800 Дж (41,8 кДж)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is a reaction with ΔH = −100 kJ exothermic or endothermic?",
            questionRu: "Реакция с ΔH = −100 кДж — экзотермическая или эндотермическая?",
            questionKk: "ΔH = −100 кДж реакция экзотермиялық па, эндотермиялық па?",
            answer: "Exothermic",
            answerRu: "Экзотермическая",
            answerKk: "Экзотермиялық",
            hint: "Negative ΔH means heat is released",
            hintRu: "Отрицательный ΔH означает выделение теплоты",
            hintKk: "Теріс ΔH жылу бөлінетінін білдіреді",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "How much heat is released when 100 g of water cools from 80°C to 30°C? (c = 4.18 J/g·°C)",
            questionRu: "Сколько теплоты выделяется при охлаждении 100 г воды с 80°C до 30°C? (c = 4,18 Дж/г·°C)",
            questionKk: "100 г су 80°C-тан 30°C-қа дейін салқындағанда қанша жылу бөлінеді? (c = 4,18 Дж/г·°C)",
            answer: "20,900 J (20.9 kJ)",
            answerRu: "20 900 Дж (20,9 кДж)",
            answerKk: "20 900 Дж (20,9 кДж)",
            hint: "q = 100 × 4.18 × 50",
            hintRu: "q = 100 × 4,18 × 50",
            hintKk: "q = 100 × 4,18 × 50",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Given: C + O₂ → CO₂ (ΔH = −393.5 kJ) and CO + ½O₂ → CO₂ (ΔH = −283.0 kJ). Find ΔH for C + ½O₂ → CO using Hess's law.",
            questionRu: "Дано: C + O₂ → CO₂ (ΔH = −393,5 кДж) и CO + ½O₂ → CO₂ (ΔH = −283,0 кДж). Найдите ΔH для C + ½O₂ → CO по закону Гесса.",
            questionKk: "Берілген: C + O₂ → CO₂ (ΔH = −393,5 кДж) және CO + ½O₂ → CO₂ (ΔH = −283,0 кДж). Гесс заңы бойынша C + ½O₂ → CO үшін ΔH табыңыз.",
            answer: "−110.5 kJ",
            answerRu: "−110,5 кДж",
            answerKk: "−110,5 кДж",
            hint: "Use reaction 1 and reverse reaction 2: ΔH = −393.5 − (−283.0)",
            hintRu: "Используйте реакцию 1 и обратную реакцию 2: ΔH = −393,5 − (−283,0)",
            hintKk: "1-реакцияны және 2-реакцияны кері қолданыңыз: ΔH = −393,5 − (−283,0)",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Equilibrium",
        titleRu: "AP Химия — Химическое равновесие",
        titleKk: "AP Химия — Химиялық тепе-теңдік",
        content: "Chemical equilibrium occurs when the rates of forward and reverse reactions are equal, so concentrations of reactants and products remain constant. The equilibrium constant (K) quantifies the ratio of products to reactants at equilibrium. Le Chatelier's principle predicts how the system responds to disturbances in concentration, pressure, or temperature.",
        contentRu: "Химическое равновесие наступает, когда скорости прямой и обратной реакций равны, и концентрации реагентов и продуктов остаются постоянными. Константа равновесия (K) количественно выражает соотношение продуктов к реагентам. Принцип Ле Шателье предсказывает, как система реагирует на изменения концентрации, давления или температуры.",
        contentKk: "Химиялық тепе-теңдік тура және кері реакциялардың жылдамдықтары тең болғанда, реагенттер мен өнімдердің концентрациялары тұрақты қалғанда орнайды. Тепе-теңдік константасы (K) тепе-теңдіктегі өнімдердің реагенттерге қатынасын сандық тұрғыдан білдіреді. Ле Шателье принципі жүйенің концентрация, қысым немесе температура өзгерістеріне қалай жауап беретінін болжайды.",
        keyFormulas: [
          {
            formula: "K = [Products]ⁿ / [Reactants]ᵐ",
            formulaRu: "K = [Продукты]ⁿ / [Реагенты]ᵐ",
            formulaKk: "K = [Өнімдер]ⁿ / [Реагенттер]ᵐ",
            description: "Equilibrium constant expression (concentrations at equilibrium)",
            descriptionRu: "Выражение константы равновесия (концентрации при равновесии)",
            descriptionKk: "Тепе-теңдік константасының өрнегі (тепе-теңдіктегі концентрациялар)"
          }
        ],
        solvedExamples: [
          {
            question: "For N₂ + 3H₂ ⇌ 2NH₃, write the equilibrium expression and determine: if K = 0.5, does the reaction favor products or reactants?",
            questionRu: "Для N₂ + 3H₂ ⇌ 2NH₃ запишите выражение равновесия. Если K = 0,5, реакция сдвинута в сторону продуктов или реагентов?",
            questionKk: "N₂ + 3H₂ ⇌ 2NH₃ үшін тепе-теңдік өрнегін жазыңыз. K = 0,5 болса, реакция өнімдерге ме, реагенттерге ме ығысқан?",
            steps: [
              { en: "K = [NH₃]² / ([N₂][H₂]³)", ru: "K = [NH₃]² / ([N₂][H₂]³)", kk: "K = [NH₃]² / ([N₂][H₂]³)" },
              { en: "K < 1 means reactants are favored at equilibrium (more reactants than products)", ru: "K < 1 означает, что реагенты преобладают при равновесии", kk: "K < 1 тепе-теңдікте реагенттер басым екенін білдіреді" }
            ],
            answer: "K = [NH₃]²/([N₂][H₂]³); K = 0.5 < 1, so reactants are favored.",
            answerRu: "K = [NH₃]²/([N₂][H₂]³); K = 0,5 < 1, значит преобладают реагенты.",
            answerKk: "K = [NH₃]²/([N₂][H₂]³); K = 0,5 < 1, сондықтан реагенттер басым."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If K >> 1, does the equilibrium lie toward products or reactants?",
            questionRu: "Если K >> 1, равновесие сдвинуто в сторону продуктов или реагентов?",
            questionKk: "Егер K >> 1 болса, тепе-теңдік өнімдерге ме, реагенттерге ме ығысқан?",
            answer: "Products",
            answerRu: "Продукты",
            answerKk: "Өнімдер",
            hint: "K = products/reactants; if K is large, the numerator is large",
            hintRu: "K = продукты/реагенты; если K велик, числитель велик",
            hintKk: "K = өнімдер/реагенттер; K үлкен болса, алым үлкен",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Using Le Chatelier's principle: if you add more N₂ to N₂ + 3H₂ ⇌ 2NH₃ at equilibrium, which direction does the reaction shift?",
            questionRu: "По принципу Ле Шателье: если добавить N₂ к равновесию N₂ + 3H₂ ⇌ 2NH₃, в какую сторону сдвинется реакция?",
            questionKk: "Ле Шателье принципі бойынша: N₂ + 3H₂ ⇌ 2NH₃ тепе-теңдігіне N₂ қосылса, реакция қай бағытқа ығысады?",
            answer: "Shifts to the right (toward products) to consume the added N₂",
            answerRu: "Сдвигается вправо (в сторону продуктов), чтобы израсходовать добавленный N₂",
            answerKk: "Қосылған N₂-ні жұмсау үшін оңға (өнімдерге қарай) ығысады",
            hint: "The system adjusts to counteract the change — it uses up the added reactant",
            hintRu: "Система подстраивается, чтобы компенсировать изменение — расходует добавленный реагент",
            hintKk: "Жүйе өзгеріске қарсы әрекет етеді — қосылған реагентті жұмсайды",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "For 2SO₂ + O₂ ⇌ 2SO₃, at equilibrium: [SO₂] = 0.2 M, [O₂] = 0.1 M, [SO₃] = 0.6 M. Calculate K.",
            questionRu: "Для 2SO₂ + O₂ ⇌ 2SO₃ при равновесии: [SO₂] = 0,2 М, [O₂] = 0,1 М, [SO₃] = 0,6 М. Вычислите K.",
            questionKk: "2SO₂ + O₂ ⇌ 2SO₃ тепе-теңдігінде: [SO₂] = 0,2 М, [O₂] = 0,1 М, [SO₃] = 0,6 М. K-ні есептеңіз.",
            answer: "90",
            answerRu: "90",
            answerKk: "90",
            hint: "K = [SO₃]²/([SO₂]²[O₂]) = (0.6)²/((0.2)²(0.1))",
            hintRu: "K = [SO₃]²/([SO₂]²[O₂]) = (0,6)²/((0,2)²(0,1))",
            hintKk: "K = [SO₃]²/([SO₂]²[O₂]) = (0,6)²/((0,2)²(0,1))",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Molecular Genetics",
        titleRu: "AP Биология — Молекулярная генетика",
        titleKk: "AP Биология — Молекулалық генетика",
        content: "Molecular genetics examines how DNA encodes proteins through transcription and translation. DNA replication ensures genetic information is copied accurately. Transcription converts DNA to mRNA in the nucleus, and translation converts mRNA to protein at ribosomes. Mutations in DNA can alter protein structure and function.",
        contentRu: "Молекулярная генетика изучает, как ДНК кодирует белки через транскрипцию и трансляцию. Репликация ДНК обеспечивает точное копирование генетической информации. Транскрипция преобразует ДНК в мРНК в ядре, а трансляция — мРНК в белок на рибосомах. Мутации в ДНК могут изменить структуру и функцию белка.",
        contentKk: "Молекулалық генетика ДНҚ-ның транскрипция және трансляция арқылы ақуыздарды қалай кодтайтынын зерттейді. ДНҚ репликациясы генетикалық ақпараттың дәл көшірілуін қамтамасыз етеді. Транскрипция ДНҚ-ны ядрода мРНҚ-ға айналдырады, ал трансляция мРНҚ-ны рибосомаларда ақуызға айналдырады. ДНҚ-дағы мутациялар ақуыз құрылымы мен функциясын өзгерте алады.",
        keyFormulas: [
          {
            formula: "DNA → (transcription) → mRNA → (translation) → Protein",
            formulaRu: "ДНК → (транскрипция) → мРНК → (трансляция) → Белок",
            formulaKk: "ДНҚ → (транскрипция) → мРНҚ → (трансляция) → Ақуыз",
            description: "The central dogma of molecular biology",
            descriptionRu: "Центральная догма молекулярной биологии",
            descriptionKk: "Молекулалық биологияның орталық догмасы"
          },
          {
            formula: "Codon = 3 nucleotides → 1 amino acid",
            formulaRu: "Кодон = 3 нуклеотида → 1 аминокислота",
            formulaKk: "Кодон = 3 нуклеотид → 1 амин қышқылы",
            description: "Each group of three mRNA bases codes for one amino acid",
            descriptionRu: "Каждая тройка оснований мРНК кодирует одну аминокислоту",
            descriptionKk: "мРНҚ негіздерінің әр үштігі бір амин қышқылын кодтайды"
          }
        ],
        solvedExamples: [
          {
            question: "A DNA template strand reads 3'-TAC-GCA-AAT-5'. What is the mRNA sequence and how many amino acids will it code for?",
            questionRu: "Матричная нить ДНК: 3'-TAC-GCA-AAT-5'. Какова последовательность мРНК и сколько аминокислот она кодирует?",
            questionKk: "ДНҚ үлгі тізбегі: 3'-TAC-GCA-AAT-5'. мРНҚ тізбегі қандай және қанша амин қышқылын кодтайды?",
            steps: [
              { en: "Transcribe DNA → mRNA (A→U, T→A, C→G, G→C): 5'-AUG-CGU-UUA-3'", ru: "Транскрибируем ДНК → мРНК (A→U, T→A, C→G, G→C): 5'-AUG-CGU-UUA-3'", kk: "ДНҚ → мРНҚ транскрибциялаймыз (A→U, T→A, C→G, G→C): 5'-AUG-CGU-UUA-3'" },
              { en: "3 codons = 3 amino acids (AUG = Met/start, CGU = Arg, UUA = Leu)", ru: "3 кодона = 3 аминокислоты (AUG = Мет/старт, CGU = Арг, UUA = Лей)", kk: "3 кодон = 3 амин қышқылы (AUG = Мет/бастау, CGU = Арг, UUA = Лей)" }
            ],
            answer: "mRNA: 5'-AUG-CGU-UUA-3'; codes for 3 amino acids (Met-Arg-Leu)",
            answerRu: "мРНК: 5'-AUG-CGU-UUA-3'; кодирует 3 аминокислоты (Мет-Арг-Лей)",
            answerKk: "мРНҚ: 5'-AUG-CGU-UUA-3'; 3 амин қышқылын кодтайды (Мет-Арг-Лей)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What molecule carries genetic information from the nucleus to the ribosome?",
            questionRu: "Какая молекула переносит генетическую информацию из ядра к рибосоме?",
            questionKk: "Генетикалық ақпаратты ядродан рибосомаға қай молекула тасиды?",
            answer: "mRNA (messenger RNA)",
            answerRu: "мРНК (матричная РНК)",
            answerKk: "мРНҚ (хабаршы РНҚ)",
            hint: "It is a type of RNA that acts as a messenger",
            hintRu: "Это тип РНК, который действует как посредник",
            hintKk: "Бұл хабаршы ретінде әрекет ететін РНҚ түрі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "If an mRNA strand has 300 nucleotides (excluding the stop codon), how many amino acids will the resulting protein contain?",
            questionRu: "Если мРНК содержит 300 нуклеотидов (исключая стоп-кодон), сколько аминокислот будет в белке?",
            questionKk: "мРНҚ тізбегінде 300 нуклеотид болса (тоқтау кодонын есептемегенде), алынған ақуызда қанша амин қышқылы болады?",
            answer: "100 amino acids",
            answerRu: "100 аминокислот",
            answerKk: "100 амин қышқылы",
            hint: "Each codon is 3 nucleotides: 300/3 = 100",
            hintRu: "Каждый кодон состоит из 3 нуклеотидов: 300/3 = 100",
            hintKk: "Әр кодон 3 нуклеотидтен тұрады: 300/3 = 100",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A point mutation changes a codon from GAG to GUG. GAG codes for glutamic acid, GUG codes for valine. This is the sickle cell mutation. Explain why this single change causes disease.",
            questionRu: "Точечная мутация изменяет кодон GAG на GUG. GAG кодирует глутаминовую кислоту, GUG — валин. Это мутация серповидноклеточной анемии. Объясните, почему одно изменение вызывает болезнь.",
            questionKk: "Нүктелік мутация GAG кодонын GUG-ға өзгертеді. GAG глутамин қышқылын, GUG валинді кодтайды. Бұл орақ жасушалы мутация. Неге бұл бір өзгеріс ауруды тудыратынын түсіндіріңіз.",
            answer: "Valine is hydrophobic while glutamic acid is hydrophilic. This changes the protein's shape, causing hemoglobin molecules to stick together and form rigid rods. Red blood cells become sickle-shaped, blocking blood vessels and reducing oxygen delivery.",
            answerRu: "Валин гидрофобен, а глутаминовая кислота гидрофильна. Это меняет форму белка, заставляя молекулы гемоглобина слипаться и образовывать жёсткие стержни. Эритроциты приобретают серповидную форму, блокируя сосуды и снижая доставку кислорода.",
            answerKk: "Валин гидрофобты, ал глутамин қышқылы гидрофильді. Бұл ақуыздың пішінін өзгертіп, гемоглобин молекулаларын жабысып, қатты таяқшалар түзуге мәжбүрлейді. Эритроциттер орақ тәрізді пішінге ие болып, қан тамырларын бітейді және оттегі жеткізілуін азайтады.",
            hint: "Think about how amino acid properties (hydrophobic vs. hydrophilic) affect protein folding",
            hintRu: "Подумайте, как свойства аминокислот (гидрофобные vs. гидрофильные) влияют на укладку белка",
            hintKk: "Амин қышқылдарының қасиеттерінің (гидрофобты vs. гидрофильді) ақуыз бүктелуіне қалай әсер ететінін ойлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Ecology",
        titleRu: "AP Биология — Экология",
        titleKk: "AP Биология — Экология",
        content: "Ecology studies interactions between organisms and their environment at multiple levels: populations, communities, ecosystems, and the biosphere. Key concepts include food webs, energy flow through trophic levels, nutrient cycling, and population dynamics. The 10% rule states that only about 10% of energy transfers between trophic levels.",
        contentRu: "Экология изучает взаимодействия организмов со средой на нескольких уровнях: популяции, сообщества, экосистемы и биосфера. Ключевые концепции: пищевые сети, поток энергии по трофическим уровням, круговорот веществ и динамика популяций. Правило 10% гласит, что только ~10% энергии передаётся между трофическими уровнями.",
        contentKk: "Экология организмдер мен олардың ортасы арасындағы өзара әрекеттестікті бірнеше деңгейде зерттейді: популяциялар, қоғамдастықтар, экожүйелер және биосфера. Негізгі ұғымдар: қоректік торлар, трофикалық деңгейлер арқылы энергия ағыны, қоректік заттар айналымы және популяция динамикасы. 10% ережесі трофикалық деңгейлер арасында энергияның тек ~10% берілетінін айтады.",
        keyFormulas: [
          {
            formula: "Energy transfer ≈ 10% between trophic levels",
            formulaRu: "Передача энергии ≈ 10% между трофическими уровнями",
            formulaKk: "Энергия берілуі ≈ трофикалық деңгейлер арасында 10%",
            description: "Only ~10% of energy passes from one trophic level to the next",
            descriptionRu: "Только ~10% энергии передаётся с одного трофического уровня на следующий",
            descriptionKk: "Бір трофикалық деңгейден келесіге энергияның тек ~10% беріледі"
          }
        ],
        solvedExamples: [
          {
            question: "Producers in an ecosystem capture 10,000 kJ of energy. How much energy is available to secondary consumers?",
            questionRu: "Продуценты в экосистеме захватывают 10 000 кДж энергии. Сколько энергии доступно вторичным консументам?",
            questionKk: "Экожүйедегі продуценттер 10 000 кДж энергия алады. Екінші реттік тұтынушыларға қанша энергия қол жетімді?",
            steps: [
              { en: "Producers → primary consumers: 10,000 × 10% = 1,000 kJ", ru: "Продуценты → первичные консументы: 10 000 × 10% = 1000 кДж", kk: "Продуценттер → бірінші реттік тұтынушылар: 10 000 × 10% = 1000 кДж" },
              { en: "Primary consumers → secondary consumers: 1,000 × 10% = 100 kJ", ru: "Первичные → вторичные консументы: 1000 × 10% = 100 кДж", kk: "Бірінші реттік → екінші реттік тұтынушылар: 1000 × 10% = 100 кДж" }
            ],
            answer: "100 kJ",
            answerRu: "100 кДж",
            answerKk: "100 кДж"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What trophic level do herbivores occupy?",
            questionRu: "На каком трофическом уровне находятся травоядные?",
            questionKk: "Шөпқоректілер қай трофикалық деңгейде орналасқан?",
            answer: "Primary consumers (second trophic level)",
            answerRu: "Первичные консументы (второй трофический уровень)",
            answerKk: "Бірінші реттік тұтынушылар (екінші трофикалық деңгей)",
            hint: "They eat producers (plants), so they are the first level of consumers",
            hintRu: "Они едят продуцентов (растения), значит это первый уровень консументов",
            hintKk: "Олар продуценттерді (өсімдіктерді) жейді, сондықтан тұтынушылардың бірінші деңгейі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "An ecosystem has 50,000 kJ at the producer level. How much energy reaches the tertiary consumers?",
            questionRu: "В экосистеме 50 000 кДж на уровне продуцентов. Сколько энергии дойдёт до третичных консументов?",
            questionKk: "Экожүйеде продуцент деңгейінде 50 000 кДж бар. Үшінші реттік тұтынушыларға қанша энергия жетеді?",
            answer: "50 kJ",
            answerRu: "50 кДж",
            answerKk: "50 кДж",
            hint: "Apply 10% rule three times: 50,000 → 5,000 → 500 → 50",
            hintRu: "Примените правило 10% три раза: 50 000 → 5000 → 500 → 50",
            hintKk: "10% ережесін үш рет қолданыңыз: 50 000 → 5000 → 500 → 50",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A lake ecosystem receives excess nitrogen from agricultural runoff. Predict the ecological consequences and explain the mechanism.",
            questionRu: "Озёрная экосистема получает избыток азота из сельскохозяйственного стока. Предскажите экологические последствия и объясните механизм.",
            questionKk: "Көл экожүйесі ауыл шаруашылық ағынынан артық азот алады. Экологиялық салдарларды болжап, механизмді түсіндіріңіз.",
            answer: "Eutrophication: excess nitrogen causes algal bloom → algae block sunlight → submerged plants die → dead organisms decomposed by bacteria → bacteria consume dissolved oxygen → oxygen depletion (hypoxia) → fish and other organisms die → dead zone.",
            answerRu: "Эвтрофикация: избыток азота вызывает цветение водорослей → водоросли блокируют солнечный свет → подводные растения гибнут → мёртвые организмы разлагаются бактериями → бактерии потребляют растворённый кислород → истощение кислорода (гипоксия) → рыба и другие организмы гибнут → мёртвая зона.",
            answerKk: "Эвтрофикация: артық азот балдырлардың гүлденуін тудырады → балдырлар күн сәулесін бөгейді → су асты өсімдіктері қырылады → өлі организмдерді бактериялар ыдыратады → бактериялар еріген оттегіні жұмсайды → оттегі тапшылығы (гипоксия) → балықтар мен басқа организмдер қырылады → өлі аймақ.",
            hint: "Think about the chain: nutrient excess → algal growth → oxygen depletion",
            hintRu: "Думайте о цепочке: избыток питательных веществ → рост водорослей → истощение кислорода",
            hintKk: "Тізбекті ойлаңыз: қоректік заттар артықшылығы → балдырлар өсуі → оттегі тапшылығы",
            xp: 20
          }
        ]
      },
      {
        title: "IB IA Design",
        titleRu: "IB Внутренняя оценка — Проектирование",
        titleKk: "IB Ішкі бағалау — Жобалау",
        content: "The IB Internal Assessment (IA) is a student-designed investigation worth 20% of your IB science grade. You must formulate a focused research question, identify variables (independent, dependent, controlled), design a repeatable methodology, collect and process data, and evaluate your results critically. The IA assesses your skills in personal engagement, exploration, analysis, evaluation, and communication.",
        contentRu: "Внутренняя оценка IB (IA) — это исследование, разработанное учеником, составляющее 20% оценки по естественным наукам IB. Нужно сформулировать исследовательский вопрос, определить переменные (независимая, зависимая, контролируемые), разработать повторяемую методологию, собрать и обработать данные и критически оценить результаты.",
        contentKk: "IB Ішкі бағалау (IA) — IB ғылым бағасының 20%-ын құрайтын оқушы жобалаған зерттеу. Бағытталған зерттеу сұрағын тұжырымдау, айнымалыларды анықтау (тәуелсіз, тәуелді, бақыланатын), қайталанатын әдіснаманы жобалау, деректерді жинау және өңдеу, нәтижелерді сыни бағалау қажет.",
        keyFormulas: [
          {
            formula: "Variables: IV (what you change) → DV (what you measure) → CV (what you keep constant)",
            formulaRu: "Переменные: IV (что вы меняете) → DV (что вы измеряете) → CV (что вы оставляете постоянным)",
            formulaKk: "Айнымалылар: IV (сіз өзгертетін нәрсе) → DV (сіз өлшейтін нәрсе) → CV (сіз тұрақты ұстайтын нәрсе)",
            description: "The three types of variables in experimental design",
            descriptionRu: "Три типа переменных в экспериментальном дизайне",
            descriptionKk: "Эксперименттік жобалаудағы айнымалылардың үш түрі"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to investigate how temperature affects the rate of enzyme activity. Identify the IV, DV, and two CVs.",
            questionRu: "Ученик хочет исследовать, как температура влияет на скорость ферментативной активности. Определите IV, DV и два CV.",
            questionKk: "Оқушы температураның фермент белсенділігі жылдамдығына қалай әсер ететінін зерттегісі келеді. IV, DV және екі CV анықтаңыз.",
            steps: [
              { en: "IV = temperature (what the student changes). DV = rate of enzyme activity (what is measured, e.g., time for reaction to complete or amount of product)", ru: "IV = температура (что изменяет ученик). DV = скорость ферментативной активности (что измеряется)", kk: "IV = температура (оқушы не өзгертеді). DV = фермент белсенділігінің жылдамдығы (не өлшенеді)" },
              { en: "CVs: concentration of enzyme solution, pH of solution, volume of substrate, type of enzyme", ru: "CV: концентрация раствора фермента, pH раствора, объём субстрата, тип фермента", kk: "CV: фермент ерітіндісінің концентрациясы, ерітіндінің pH-ы, субстрат көлемі, фермент түрі" }
            ],
            answer: "IV: temperature. DV: rate of enzyme activity. CVs: enzyme concentration, pH, substrate volume.",
            answerRu: "IV: температура. DV: скорость ферментативной активности. CV: концентрация фермента, pH, объём субстрата.",
            answerKk: "IV: температура. DV: фермент белсенділігінің жылдамдығы. CV: фермент концентрациясы, pH, субстрат көлемі."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "In an experiment, the independent variable is what the scientist ___.",
            questionRu: "В эксперименте независимая переменная — это то, что учёный ___.",
            questionKk: "Тәжірибеде тәуелсіз айнымалы — ғалымның ___ нәрсесі.",
            answer: "Changes (manipulates)",
            answerRu: "Изменяет (управляет)",
            answerKk: "Өзгертетін (басқаратын)",
            hint: "It is the variable the experimenter has control over",
            hintRu: "Это переменная, которой экспериментатор управляет",
            hintKk: "Бұл эксперименттеуші басқаратын айнымалы",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Why is it important to repeat trials in an IA experiment?",
            questionRu: "Почему важно повторять опыты в эксперименте IA?",
            questionKk: "IA тәжірибесінде сынақтарды неге қайталау маңызды?",
            answer: "To improve reliability by identifying and reducing the effect of random errors, and to calculate meaningful averages and standard deviations",
            answerRu: "Чтобы повысить надёжность, выявляя и снижая влияние случайных ошибок, и вычислить значимые средние и стандартные отклонения",
            answerKk: "Кездейсоқ қателердің әсерін анықтап, азайту арқылы сенімділікті арттыру және мағыналы орташа мәндер мен стандартты ауытқуларды есептеу үшін",
            hint: "Think about reliability, random errors, and statistical validity",
            hintRu: "Подумайте о надёжности, случайных ошибках и статистической достоверности",
            hintKk: "Сенімділік, кездейсоқ қателер және статистикалық дұрыстық туралы ойлаңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Design an IA research question for Biology investigating the effect of salt concentration on osmosis in potato cells. Include IV, DV, one CV, and the expected trend.",
            questionRu: "Разработайте исследовательский вопрос IA по биологии, изучающий влияние концентрации соли на осмос в клетках картофеля. Укажите IV, DV, один CV и ожидаемую тенденцию.",
            questionKk: "Картоп жасушаларындағы осмосқа тұз концентрациясының әсерін зерттейтін Biology IA зерттеу сұрағын жасаңыз. IV, DV, бір CV және күтілетін үрдісті көрсетіңіз.",
            answer: "RQ: 'How does the concentration of NaCl solution (0%, 2%, 4%, 6%, 8%) affect the percentage change in mass of potato cylinders after 30 minutes?' IV: NaCl concentration. DV: % mass change. CV: potato variety, cylinder size, temperature, time. Expected: higher salt → more water leaves cells (osmosis) → greater mass loss.",
            answerRu: "RQ: «Как концентрация раствора NaCl (0%, 2%, 4%, 6%, 8%) влияет на процентное изменение массы цилиндров картофеля за 30 минут?» IV: концентрация NaCl. DV: % изменения массы. CV: сорт картофеля, размер цилиндра, температура, время. Ожидание: больше соли → больше воды выходит из клеток (осмос) → больше потеря массы.",
            answerKk: "RQ: «NaCl ерітіндісінің концентрациясы (0%, 2%, 4%, 6%, 8%) картоп цилиндрлерінің массасының 30 минуттан кейінгі пайыздық өзгерісіне қалай әсер етеді?» IV: NaCl концентрациясы. DV: массаның % өзгерісі. CV: картоп сорты, цилиндр өлшемі, температура, уақыт. Күтілетін: тұз көп → жасушадан су көбірек шығады (осмос) → масса көбірек жоғалады.",
            hint: "Use measurable variables and consider osmosis direction at different concentrations",
            hintRu: "Используйте измеримые переменные и учтите направление осмоса при разных концентрациях",
            hintKk: "Өлшенетін айнымалыларды қолданыңыз және әр түрлі концентрацияларда осмос бағытын ескеріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Exam Prep",
        titleRu: "Подготовка к экзаменам AP",
        titleKk: "AP емтиханына дайындық",
        content: "Effective AP exam preparation requires understanding the exam format, time management, and strategic practice. AP exams typically have a multiple-choice section and a free-response section. Knowing the scoring rubrics, practicing past exam questions under timed conditions, and focusing on your weakest content areas yield the highest score improvements.",
        contentRu: "Эффективная подготовка к экзаменам AP требует понимания формата, управления временем и стратегической практики. Экзамены AP обычно включают секцию с выбором ответа и секцию свободных ответов. Знание критериев оценивания, практика на прошлых экзаменах в условиях ограниченного времени и акцент на слабых темах дают максимальный прирост баллов.",
        contentKk: "AP емтиханына тиімді дайындық емтихан форматын, уақытты басқаруды және стратегиялық тәжірибені түсінуді талап етеді. AP емтихандары әдетте көп таңдаулы бөлім мен еркін жауап бөлімінен тұрады. Бағалау критерийлерін білу, өткен емтихан сұрақтарымен уақыт шектеуінде жаттығу және ең әлсіз тақырыптарға назар аудару ең жоғары балл жақсартуын береді.",
        keyFormulas: [
          {
            formula: "AP Score = Multiple Choice (50%) + Free Response (50%) → curved to 1-5",
            formulaRu: "Балл AP = Тест с выбором ответа (50%) + Задания со свободным ответом (50%) → приводится к шкале 1-5",
            formulaKk: "AP баллы = Таңдаулы жауап тесті (50%) + Еркін жауап тапсырмалары (50%) → 1-5 шкаласына келтіріледі",
            description: "Typical AP exam scoring structure (varies by subject)",
            descriptionRu: "Типичная структура оценивания AP экзаменов (зависит от предмета)",
            descriptionKk: "AP емтихандарының типтік бағалау құрылымы (пәнге байланысты)"
          }
        ],
        solvedExamples: [
          {
            question: "A student has 90 minutes for 45 multiple-choice questions. How much time per question? If they get stuck, what strategy should they use?",
            questionRu: "У ученика 90 минут на 45 вопросов с выбором ответа. Сколько времени на вопрос? Если застрял, какую стратегию использовать?",
            questionKk: "Оқушының 45 көп таңдаулы сұраққа 90 минуты бар. Бір сұраққа қанша уақыт? Тұрып қалса, қандай стратегия қолдану керек?",
            steps: [
              { en: "Time per question: 90/45 = 2 minutes per question", ru: "Время на вопрос: 90/45 = 2 минуты на вопрос", kk: "Бір сұраққа уақыт: 90/45 = 2 минут" },
              { en: "Strategy: Mark difficult questions and skip them. Answer all easy/medium questions first, then return. There is no penalty for guessing on AP exams, so never leave a blank.", ru: "Стратегия: Отметьте сложные вопросы и пропустите. Ответьте на лёгкие/средние, затем вернитесь. На AP нет штрафа за угадывание, поэтому не оставляйте пустых.", kk: "Стратегия: Қиын сұрақтарды белгілеп, өтіп кетіңіз. Алдымен жеңіл/орташа сұрақтарға жауап беріп, кейін оралыңыз. AP емтихандарында болжау үшін айыппұл жоқ, сондықтан бос қалдырмаңыз." }
            ],
            answer: "2 minutes per question. Skip difficult ones, return later, never leave blanks.",
            answerRu: "2 минуты на вопрос. Пропускайте сложные, возвращайтесь позже, никогда не оставляйте пустых.",
            answerKk: "Әр сұраққа 2 минут. Қиындарын өткізіп жіберіп, кейін оралыңыз, ешқашан бос қалдырмаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is there a penalty for wrong answers on current AP exams?",
            questionRu: "Есть ли штраф за неправильные ответы на текущих экзаменах AP?",
            questionKk: "Қазіргі AP емтихандарында дұрыс емес жауаптар үшін айыппұл бар ма?",
            answer: "No — there is no penalty for guessing, so you should answer every question",
            answerRu: "Нет — за угадывание штрафа нет, поэтому нужно отвечать на каждый вопрос",
            answerKk: "Жоқ — болжау үшін айыппұл жоқ, сондықтан әр сұраққа жауап беру керек",
            hint: "This changed in 2011 — the guessing penalty was removed",
            hintRu: "Это изменилось в 2011 году — штраф за угадывание был отменён",
            hintKk: "Бұл 2011 жылы өзгерді — болжау айыппұлы алынып тасталды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student scored 60% on MC and 40% on FRQ in a practice AP Calc exam. Which section should they focus on to improve their composite score most efficiently?",
            questionRu: "Ученик набрал 60% на MC и 40% на FRQ на пробном AP Calc. На какую секцию сосредоточиться для максимального прироста?",
            questionKk: "Оқушы AP Calc сынақ емтиханында MC-де 60%, FRQ-де 40% алды. Жинақталған балды тиімді жақсарту үшін қай бөлімге назар аудару керек?",
            answer: "FRQ — it has more room for improvement (40% vs 60%) and the same weight. Improving FRQ by 20% has the same impact as improving MC by 20%.",
            answerRu: "FRQ — у неё больше потенциал для роста (40% против 60%) при том же весе. Улучшение FRQ на 20% даёт тот же эффект, что и улучшение MC на 20%.",
            answerKk: "FRQ — оның жақсарту әлеуеті көбірек (40% қарсы 60%), салмағы бірдей. FRQ-ны 20%-ға жақсарту MC-ны 20%-ға жақсартумен бірдей әсер береді.",
            hint: "Focus on the section with the lower score — it has the most room for growth",
            hintRu: "Сосредоточьтесь на секции с более низким баллом — там больше потенциала для роста",
            hintKk: "Балы төмен бөлімге назар аударыңыз — онда өсу әлеуеті көбірек",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Create a 4-week study plan for an AP Biology exam. You have 2 hours per day. The exam covers: Cell Biology (20%), Genetics (20%), Evolution (20%), Ecology (20%), Body Systems (20%). Your mock scores: Cell Bio 85%, Genetics 60%, Evolution 70%, Ecology 50%, Body Systems 75%.",
            questionRu: "Составьте 4-недельный план подготовки к AP Biology. У вас 2 часа в день. Темы: Клеточная биология (20%), Генетика (20%), Эволюция (20%), Экология (20%), Системы организма (20%). Пробные баллы: Клетка 85%, Генетика 60%, Эволюция 70%, Экология 50%, Системы 75%.",
            questionKk: "AP Biology емтиханына 4 апталық оқу жоспарын жасаңыз. Күніне 2 сағат. Тақырыптар: Жасуша биологиясы (20%), Генетика (20%), Эволюция (20%), Экология (20%), Дене жүйелері (20%). Сынақ балдары: Жасуша 85%, Генетика 60%, Эволюция 70%, Экология 50%, Жүйелер 75%.",
            answer: "Week 1: Ecology (weakest, 50%) — 1.5 hrs/day + 30 min daily review of other topics. Week 2: Genetics (60%) — 1.5 hrs + review. Week 3: Evolution + Body Systems (70-75%) — split time equally. Week 4: Full practice exams + targeted review of remaining weak points. Cell Bio (85%) gets maintenance review only. Do timed practice FRQs every other day.",
            answerRu: "Неделя 1: Экология (слабейшая, 50%) — 1,5 ч/день + 30 мин ежедневного повторения других тем. Неделя 2: Генетика (60%) — 1,5 ч + повторение. Неделя 3: Эволюция + Системы организма (70-75%) — поровну. Неделя 4: Полные пробные экзамены + целевое повторение оставшихся слабых мест. Клеточная биология (85%) — только поддерживающее повторение. Практикуйте FRQ на время через день.",
            answerKk: "1-апта: Экология (ең әлсіз, 50%) — күніне 1,5 сағ + басқа тақырыптарды күнделікті 30 мин қайталау. 2-апта: Генетика (60%) — 1,5 сағ + қайталау. 3-апта: Эволюция + Дене жүйелері (70-75%) — уақытты тең бөлу. 4-апта: Толық сынақ емтихандары + қалған әлсіз жерлерді бағытталған қайталау. Жасуша биологиясы (85%) — тек қолдаушы қайталау. FRQ-ды күн ара уақыт шектеуімен жаттығыңыз.",
            hint: "Allocate the most time to your weakest topics (Ecology, Genetics) and less to strengths (Cell Bio)",
            hintRu: "Уделите больше времени слабым темам (Экология, Генетика) и меньше сильным (Клеточная биология)",
            hintKk: "Ең әлсіз тақырыптарға (Экология, Генетика) көбірек уақыт бөліп, күштілерге (Жасуша биологиясы) аз бөліңіз",
            xp: 20
          }
        ]
      }
    ]
  },
  "AP / IB Classes_12": {
    planetName: "AP / IB Classes",
    introduction: {
      en: "Grade 12 is your culminating year — master advanced integration and series for AP Calculus BC, electrostatics and circuits for AP Physics C, electrochemistry and organic chemistry for AP Chem, body systems for AP Bio, craft your IB Extended Essay, optimize AP scores, and convert your results into real college credit.",
      ru: "12-й класс — ваш завершающий год: освойте продвинутое интегрирование и ряды для AP Calculus BC, электростатику и цепи для AP Physics C, электрохимию и органическую химию для AP Chem, системы организма для AP Bio, напишите расширенное эссе IB, оптимизируйте баллы AP и конвертируйте результаты в реальные университетские кредиты."
    },
    sections: [
      {
        title: "AP Calc BC - Integration",
        titleRu: "AP Матанализ BC — Интегрирование",
        titleKk: "AP Калькулюс BC — Интегралдау",
        content: "AP Calculus BC extends integration techniques beyond AB with integration by parts, partial fractions, and improper integrals. Integration by parts uses the formula ∫u dv = uv − ∫v du to handle products of functions. Mastering these methods is essential for the BC exam, where roughly 40% of questions involve integration.",
        contentRu: "AP Calculus BC расширяет методы интегрирования за рамки AB: интегрирование по частям, разложение на простые дроби и несобственные интегралы. Интегрирование по частям использует формулу ∫u dv = uv − ∫v du для работы с произведениями функций. Владение этими методами критически важно для экзамена BC, где около 40% вопросов связано с интегрированием.",
        contentKk: "AP Calculus BC интегралдау әдістерін AB-дан тыс кеңейтеді: бөліктеп интегралдау, жай бөлшектерге жіктеу және меншіксіз интегралдар. Бөліктеп интегралдау функциялар көбейтіндісімен жұмыс істеу үшін ∫u dv = uv − ∫v du формуласын пайдаланады. Бұл әдістерді меңгеру BC емтиханы үшін маңызды, мұнда сұрақтардың шамамен 40%-ы интегралдауға қатысты.",
        keyFormulas: [
          {
            formula: "∫u dv = uv − ∫v du",
            description: "Integration by parts — used when the integrand is a product of two functions",
            descriptionRu: "Интегрирование по частям — используется, когда подынтегральное выражение является произведением двух функций",
            descriptionKk: "Бөліктеп интегралдау — интегралданатын өрнек екі функцияның көбейтіндісі болғанда қолданылады"
          },
          {
            formula: "∫₁^∞ 1/xᵖ dx converges if p > 1",
            formulaRu: "∫₁^∞ 1/xᵖ dx сходится, если p > 1",
            formulaKk: "∫₁^∞ 1/xᵖ dx жинақталады, егер p > 1 болса",
            description: "p-series convergence test for improper integrals",
            descriptionRu: "Тест сходимости p-ряда для несобственных интегралов",
            descriptionKk: "Меншіксіз интегралдар үшін p-қатар жинақтылық тесті"
          }
        ],
        solvedExamples: [
          {
            question: "Evaluate ∫x·eˣ dx using integration by parts.",
            questionRu: "Вычислите ∫x·eˣ dx методом интегрирования по частям.",
            questionKk: "Бөліктеп интегралдау әдісімен ∫x·eˣ dx есептеңіз.",
            steps: [
              { en: "Let u = x, dv = eˣ dx → du = dx, v = eˣ", ru: "Пусть u = x, dv = eˣ dx → du = dx, v = eˣ", kk: "u = x, dv = eˣ dx делік → du = dx, v = eˣ" },
              { en: "Apply formula: ∫x·eˣ dx = x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C", ru: "Применяем формулу: ∫x·eˣ dx = x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C", kk: "Формуланы қолданамыз: ∫x·eˣ dx = x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C" }
            ],
            answer: "eˣ(x − 1) + C",
            answerRu: "eˣ(x − 1) + C",
            answerKk: "eˣ(x − 1) + C"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Evaluate ∫x² dx from 0 to 3.",
            questionRu: "Вычислите ∫x² dx от 0 до 3.",
            questionKk: "∫x² dx интегралын 0-ден 3-ке дейін есептеңіз.",
            answer: "x³/3 evaluated from 0 to 3 = 27/3 − 0 = 9",
            answerRu: "x³/3 от 0 до 3 = 27/3 − 0 = 9",
            answerKk: "x³/3, 0-ден 3-ке дейін = 27/3 − 0 = 9",
            hint: "Use the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1)",
            hintRu: "Используйте правило степени: ∫xⁿ dx = xⁿ⁺¹/(n+1)",
            hintKk: "Дәреже ережесін қолданыңыз: ∫xⁿ dx = xⁿ⁺¹/(n+1)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Evaluate ∫ln(x) dx using integration by parts.",
            questionRu: "Вычислите ∫ln(x) dx методом интегрирования по частям.",
            questionKk: "Бөліктеп интегралдау әдісімен ∫ln(x) dx есептеңіз.",
            answer: "x·ln(x) − x + C. Let u = ln(x), dv = dx, then du = 1/x dx, v = x.",
            answerRu: "x·ln(x) − x + C. Пусть u = ln(x), dv = dx, тогда du = 1/x dx, v = x.",
            answerKk: "x·ln(x) − x + C. u = ln(x), dv = dx делік, онда du = 1/x dx, v = x.",
            hint: "Set u = ln(x) and dv = dx, then apply ∫u dv = uv − ∫v du",
            hintRu: "Пусть u = ln(x), dv = dx, затем примените ∫u dv = uv − ∫v du",
            hintKk: "u = ln(x), dv = dx деп алып, ∫u dv = uv − ∫v du қолданыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Determine whether ∫₁^∞ (x²+1)/(x⁴) dx converges or diverges, and if it converges, find its value.",
            questionRu: "Определите, сходится или расходится ∫₁^∞ (x²+1)/(x⁴) dx, и если сходится, найдите значение.",
            questionKk: "∫₁^∞ (x²+1)/(x⁴) dx жинақтала ма әлде ыдырай ма анықтаңыз, жинақталса мәнін табыңыз.",
            answer: "Rewrite as ∫₁^∞ (1/x² + 1/x⁴) dx. Both terms converge (p=2>1, p=4>1). Value = [−1/x − 1/(3x³)]₁^∞ = 0 − (−1 − 1/3) = 4/3.",
            answerRu: "Перепишем как ∫₁^∞ (1/x² + 1/x⁴) dx. Оба слагаемых сходятся (p=2>1, p=4>1). Значение = [−1/x − 1/(3x³)]₁^∞ = 0 − (−1 − 1/3) = 4/3.",
            answerKk: "∫₁^∞ (1/x² + 1/x⁴) dx түрінде қайта жазамыз. Екі мүше де жинақталады (p=2>1, p=4>1). Мәні = [−1/x − 1/(3x³)]₁^∞ = 0 − (−1 − 1/3) = 4/3.",
            hint: "Split the fraction into simpler terms and test each with the p-series rule",
            hintRu: "Разбейте дробь на простые слагаемые и проверьте каждое с помощью p-ряда",
            hintKk: "Бөлшекті қарапайым қосылғыштарға бөліп, әрқайсысын p-қатар ережесімен тексеріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Calc BC - Series",
        titleRu: "AP Матанализ BC — Ряды",
        titleKk: "AP Калькулюс BC — Қатарлар",
        content: "Infinite series are a major BC-only topic. A series ∑aₙ converges if the sequence of partial sums approaches a finite limit. Key convergence tests include the ratio test, root test, integral test, and comparison test. Taylor and Maclaurin series let you represent functions as infinite polynomials centered at a point.",
        contentRu: "Бесконечные ряды — основная тема, эксклюзивная для BC. Ряд ∑aₙ сходится, если последовательность частичных сумм стремится к конечному пределу. Ключевые тесты сходимости: признак Даламбера, радикальный признак, интегральный признак и признак сравнения. Ряды Тейлора и Маклорена позволяют представить функции в виде бесконечных полиномов.",
        contentKk: "Шексіз қатарлар — тек BC-ге тән негізгі тақырып. ∑aₙ қатары жартылай қосындылар тізбегі шектеулі шекке жақындаса жинақталады. Негізгі жинақтылық тесттері: қатынас тесті, түбір тесті, интегралдық тест және салыстыру тесті. Тейлор және Маклорен қатарлары функцияларды нүктеге центрленген шексіз көпмүшелер түрінде көрсетуге мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Ratio Test: L = lim |aₙ₊₁/aₙ| → converges if L < 1, diverges if L > 1",
            formulaRu: "Признак Даламбера: L = lim |aₙ₊₁/aₙ| → сходится, если L < 1, расходится, если L > 1",
            formulaKk: "Даламбер белгісі: L = lim |aₙ₊₁/aₙ| → L < 1 болса жинақталады, L > 1 болса алшақтайды",
            description: "The ratio test determines convergence by examining the limit of consecutive term ratios",
            descriptionRu: "Признак Даламбера определяет сходимость по пределу отношения последовательных членов",
            descriptionKk: "Қатынас тесті қатар жинақтылығын қатарлас мүшелер қатынасының шегі арқылы анықтайды"
          },
          {
            formula: "eˣ = ∑(n=0→∞) xⁿ/n! = 1 + x + x²/2! + x³/3! + …",
            description: "Maclaurin series for eˣ — converges for all real x",
            descriptionRu: "Ряд Маклорена для eˣ — сходится для всех действительных x",
            descriptionKk: "eˣ үшін Маклорен қатары — барлық нақты x үшін жинақталады"
          }
        ],
        solvedExamples: [
          {
            question: "Determine whether ∑(n=1→∞) n/2ⁿ converges using the ratio test.",
            questionRu: "Определите, сходится ли ∑(n=1→∞) n/2ⁿ, используя признак Даламбера.",
            questionKk: "Қатынас тестін пайдаланып ∑(n=1→∞) n/2ⁿ жинақтала ма анықтаңыз.",
            steps: [
              { en: "Compute L = lim |aₙ₊₁/aₙ| = lim |(n+1)/2ⁿ⁺¹ · 2ⁿ/n| = lim (n+1)/(2n)", ru: "Вычислим L = lim |aₙ₊₁/aₙ| = lim |(n+1)/2ⁿ⁺¹ · 2ⁿ/n| = lim (n+1)/(2n)", kk: "L = lim |aₙ₊₁/aₙ| = lim |(n+1)/2ⁿ⁺¹ · 2ⁿ/n| = lim (n+1)/(2n) есептейміз" },
              { en: "L = lim (n+1)/(2n) = 1/2. Since 1/2 < 1, the series converges by the ratio test.", ru: "L = lim (n+1)/(2n) = 1/2. Так как 1/2 < 1, ряд сходится по признаку Даламбера.", kk: "L = lim (n+1)/(2n) = 1/2. 1/2 < 1 болғандықтан, қатар қатынас тесті бойынша жинақталады." }
            ],
            answer: "The series converges (L = 1/2 < 1).",
            answerRu: "Ряд сходится (L = 1/2 < 1).",
            answerKk: "Қатар жинақталады (L = 1/2 < 1)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Does the geometric series ∑(n=0→∞) (1/3)ⁿ converge or diverge? If it converges, find the sum.",
            questionRu: "Сходится или расходится геометрический ряд ∑(n=0→∞) (1/3)ⁿ? Если сходится, найдите сумму.",
            questionKk: "∑(n=0→∞) (1/3)ⁿ геометриялық қатары жинақтала ма әлде ыдырай ма? Жинақталса, қосындысын табыңыз.",
            answer: "Converges. Sum = 1/(1 − 1/3) = 3/2.",
            answerRu: "Сходится. Сумма = 1/(1 − 1/3) = 3/2.",
            answerKk: "Жинақталады. Қосындысы = 1/(1 − 1/3) = 3/2.",
            hint: "A geometric series ∑rⁿ converges when |r| < 1 with sum = 1/(1−r)",
            hintRu: "Геометрический ряд ∑rⁿ сходится при |r| < 1, сумма = 1/(1−r)",
            hintKk: "∑rⁿ геометриялық қатары |r| < 1 болғанда жинақталады, қосындысы = 1/(1−r)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the first three nonzero terms of the Maclaurin series for sin(x).",
            questionRu: "Найдите первые три ненулевых члена ряда Маклорена для sin(x).",
            questionKk: "sin(x) үшін Маклорен қатарының алғашқы үш нөлдік емес мүшесін табыңыз.",
            answer: "sin(x) = x − x³/3! + x⁵/5! = x − x³/6 + x⁵/120",
            answerRu: "sin(x) = x − x³/3! + x⁵/5! = x − x³/6 + x⁵/120",
            answerKk: "sin(x) = x − x³/3! + x⁵/5! = x − x³/6 + x⁵/120",
            hint: "sin(x) = ∑(−1)ⁿ · x²ⁿ⁺¹/(2n+1)! — only odd powers of x appear",
            hintRu: "sin(x) = ∑(−1)ⁿ · x²ⁿ⁺¹/(2n+1)! — только нечётные степени x",
            hintKk: "sin(x) = ∑(−1)ⁿ · x²ⁿ⁺¹/(2n+1)! — тек x-тің тақ дәрежелері кіреді",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Use the ratio test to find the interval of convergence for ∑(n=1→∞) (x−2)ⁿ/(n·3ⁿ).",
            questionRu: "Используя признак Даламбера, найдите интервал сходимости для ∑(n=1→∞) (x−2)ⁿ/(n·3ⁿ).",
            questionKk: "Қатынас тестін пайдаланып ∑(n=1→∞) (x−2)ⁿ/(n·3ⁿ) жинақтылық аралығын табыңыз.",
            answer: "L = |x−2|/3. Converges when |x−2| < 3, i.e., −1 < x < 5. At x=−1: ∑(−1)ⁿ/n converges (alternating). At x=5: ∑1/n diverges (harmonic). Interval: [−1, 5).",
            answerRu: "L = |x−2|/3. Сходится при |x−2| < 3, т.е. −1 < x < 5. При x=−1: ∑(−1)ⁿ/n сходится (знакочередующийся). При x=5: ∑1/n расходится (гармонический). Интервал: [−1, 5).",
            answerKk: "L = |x−2|/3. |x−2| < 3 болғанда жинақталады, яғни −1 < x < 5. x=−1: ∑(−1)ⁿ/n жинақталады (алмасымалы). x=5: ∑1/n ыдырайды (гармоникалық). Аралық: [−1, 5).",
            hint: "Apply the ratio test, then check endpoints separately with known series tests",
            hintRu: "Примените признак Даламбера, затем проверьте граничные точки отдельно",
            hintKk: "Қатынас тестін қолданып, шеткі нүктелерді белгілі қатар тесттерімен бөлек тексеріңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics C - Electrostatics",
        titleRu: "AP Физика C — Электростатика",
        titleKk: "AP Физика C — Электростатика",
        content: "AP Physics C: Electricity and Magnetism begins with electrostatics — the study of stationary charges and their fields. Coulomb's law gives the force between point charges, and Gauss's law relates electric flux through a closed surface to the enclosed charge. These principles are the foundation for understanding capacitors, circuits, and electromagnetic phenomena.",
        contentRu: "AP Physics C: Электричество и магнетизм начинается с электростатики — изучения неподвижных зарядов и их полей. Закон Кулона определяет силу между точечными зарядами, а закон Гаусса связывает электрический поток через замкнутую поверхность с заключённым зарядом. Эти принципы лежат в основе понимания конденсаторов, цепей и электромагнитных явлений.",
        contentKk: "AP Physics C: Электр және магнетизм электростатикадан басталады — қозғалмайтын зарядтар мен олардың өрістерін зерттеу. Кулон заңы нүктелік зарядтар арасындағы күшті береді, ал Гаусс заңы тұйық бет арқылы электр ағынын қоршалған зарядпен байланыстырады. Бұл принциптер конденсаторларды, тізбектерді және электромагниттік құбылыстарды түсінудің негізі болып табылады.",
        keyFormulas: [
          {
            formula: "F = k·q₁·q₂/r² where k = 8.99×10⁹ N·m²/C²",
            formulaRu: "F = k·q₁·q₂/r², где k = 8.99×10⁹ N·m²/C²",
            formulaKk: "F = k·q₁·q₂/r², мұндағы k = 8.99×10⁹ N·m²/C²",
            description: "Coulomb's law — electrostatic force between two point charges",
            descriptionRu: "Закон Кулона — электростатическая сила между двумя точечными зарядами",
            descriptionKk: "Кулон заңы — екі нүктелік заряд арасындағы электростатикалық күш"
          },
          {
            formula: "∮E·dA = Q_enc/ε₀",
            description: "Gauss's law — electric flux through a closed surface equals enclosed charge divided by ε₀",
            descriptionRu: "Закон Гаусса — электрический поток через замкнутую поверхность равен заключённому заряду, делённому на ε₀",
            descriptionKk: "Гаусс заңы — тұйық бет арқылы электр ағыны қоршалған зарядтың ε₀-ге бөлгеніне тең"
          }
        ],
        solvedExamples: [
          {
            question: "Two charges, q₁ = +3μC and q₂ = −5μC, are separated by 0.2 m. Find the magnitude of the electrostatic force between them.",
            questionRu: "Два заряда q₁ = +3 мкКл и q₂ = −5 мкКл разделены расстоянием 0,2 м. Найдите величину электростатической силы.",
            questionKk: "q₁ = +3 мкКл және q₂ = −5 мкКл екі заряд 0,2 м қашықтықта орналасқан. Электростатикалық күштің шамасын табыңыз.",
            steps: [
              { en: "F = k|q₁||q₂|/r² = (8.99×10⁹)(3×10⁻⁶)(5×10⁻⁶)/(0.2)²", ru: "F = k|q₁||q₂|/r² = (8,99×10⁹)(3×10⁻⁶)(5×10⁻⁶)/(0,2)²", kk: "F = k|q₁||q₂|/r² = (8,99×10⁹)(3×10⁻⁶)(5×10⁻⁶)/(0,2)²" },
              { en: "F = (8.99×10⁹)(15×10⁻¹²)/(0.04) = 0.13485/0.04 ≈ 3.37 N (attractive)", ru: "F = (8,99×10⁹)(15×10⁻¹²)/(0,04) = 0,13485/0,04 ≈ 3,37 Н (притяжение)", kk: "F = (8,99×10⁹)(15×10⁻¹²)/(0,04) = 0,13485/0,04 ≈ 3,37 Н (тартылыс)" }
            ],
            answer: "≈ 3.37 N (attractive force)",
            answerRu: "≈ 3,37 Н (сила притяжения)",
            answerKk: "≈ 3,37 Н (тартылыс күші)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the electric field at a distance of 1 m from a point charge of +2μC?",
            questionRu: "Каково электрическое поле на расстоянии 1 м от точечного заряда +2 мкКл?",
            questionKk: "+2 мкКл нүктелік зарядтан 1 м қашықтықтағы электр өрісі қандай?",
            answer: "E = kq/r² = (8.99×10⁹)(2×10⁻⁶)/1² = 1.80×10⁴ N/C",
            answerRu: "E = kq/r² = (8,99×10⁹)(2×10⁻⁶)/1² = 1,80×10⁴ Н/Кл",
            answerKk: "E = kq/r² = (8,99×10⁹)(2×10⁻⁶)/1² = 1,80×10⁴ Н/Кл",
            hint: "Use E = kq/r² with k = 8.99×10⁹ N·m²/C²",
            hintRu: "Используйте E = kq/r², где k = 8,99×10⁹ Н·м²/Кл²",
            hintKk: "E = kq/r² қолданыңыз, мұнда k = 8,99×10⁹ Н·м²/Кл²",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A parallel plate capacitor has plates of area 0.01 m² separated by 0.001 m. Find its capacitance. (ε₀ = 8.85×10⁻¹² F/m)",
            questionRu: "Плоский конденсатор имеет пластины площадью 0,01 м², разделённые 0,001 м. Найдите ёмкость. (ε₀ = 8,85×10⁻¹² Ф/м)",
            questionKk: "Жазық конденсатордың пластиналар ауданы 0,01 м², ара қашықтығы 0,001 м. Сыйымдылығын табыңыз. (ε₀ = 8,85×10⁻¹² Ф/м)",
            answer: "C = ε₀A/d = (8.85×10⁻¹²)(0.01)/(0.001) = 8.85×10⁻¹¹ F ≈ 88.5 pF",
            answerRu: "C = ε₀A/d = (8,85×10⁻¹²)(0,01)/(0,001) = 8,85×10⁻¹¹ Ф ≈ 88,5 пФ",
            answerKk: "C = ε₀A/d = (8,85×10⁻¹²)(0,01)/(0,001) = 8,85×10⁻¹¹ Ф ≈ 88,5 пФ",
            hint: "For a parallel plate capacitor: C = ε₀A/d",
            hintRu: "Для плоского конденсатора: C = ε₀A/d",
            hintKk: "Жазық конденсатор үшін: C = ε₀A/d",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Use Gauss's law to derive the electric field outside a uniformly charged sphere of total charge Q and radius R, at distance r > R from the center.",
            questionRu: "Используя закон Гаусса, выведите электрическое поле снаружи равномерно заряженной сферы с зарядом Q и радиусом R на расстоянии r > R от центра.",
            questionKk: "Гаусс заңын пайдаланып, жалпы заряды Q және радиусы R біркелкі зарядталған сфераның сыртындағы r > R қашықтықтағы электр өрісін шығарыңыз.",
            answer: "Choose a Gaussian sphere of radius r > R. By symmetry, E is constant on this surface and points radially. ∮E·dA = E(4πr²) = Q/ε₀. Therefore E = Q/(4πε₀r²) = kQ/r², identical to a point charge.",
            answerRu: "Выберем гауссову сферу радиуса r > R. По симметрии E постоянно на этой поверхности и направлено радиально. ∮E·dA = E(4πr²) = Q/ε₀. Следовательно E = Q/(4πε₀r²) = kQ/r², как у точечного заряда.",
            answerKk: "Радиусы r > R Гаусс сферасын таңдаймыз. Симметрия бойынша E бұл бетте тұрақты және радиалды бағытталған. ∮E·dA = E(4πr²) = Q/ε₀. Демек E = Q/(4πε₀r²) = kQ/r², нүктелік зарядтағыдай.",
            hint: "Choose a spherical Gaussian surface of radius r > R and exploit the spherical symmetry",
            hintRu: "Выберите сферическую гауссову поверхность радиуса r > R и используйте сферическую симметрию",
            hintKk: "Радиусы r > R сфералық Гаусс бетін таңдап, сфералық симметрияны пайдаланыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Physics C - Circuits",
        titleRu: "AP Физика C — Электрические цепи",
        titleKk: "AP Физика C — Электр тізбектері",
        content: "DC circuits in AP Physics C involve resistors, capacitors, and batteries analyzed with Kirchhoff's laws. Kirchhoff's junction rule states that currents entering a node equal currents leaving. The loop rule states that the sum of voltage changes around any closed loop is zero. RC circuits exhibit exponential charging and discharging behavior with time constant τ = RC.",
        contentRu: "Цепи постоянного тока в AP Physics C включают резисторы, конденсаторы и батареи, анализируемые по законам Кирхгофа. Правило узлов: сумма токов, входящих в узел, равна сумме выходящих. Правило контуров: сумма изменений напряжения в замкнутом контуре равна нулю. RC-цепи демонстрируют экспоненциальный заряд и разряд с постоянной времени τ = RC.",
        contentKk: "AP Physics C-дегі тұрақты ток тізбектері Кирхгоф заңдарымен талданатын резисторлар, конденсаторлар мен батареяларды қамтиды. Кирхгофтың түйін ережесі: түйінге кіретін токтар шығатындарға тең. Контур ережесі: тұйық контурдағы кернеу өзгерістерінің қосындысы нөлге тең. RC тізбектері τ = RC уақыт тұрақтысымен экспоненциалды зарядталу мен разрядталуды көрсетеді.",
        keyFormulas: [
          {
            formula: "V = IR (Ohm's Law); Series: R_total = R₁+R₂; Parallel: 1/R_total = 1/R₁+1/R₂",
            formulaRu: "V = IR (Закон Ома); Последовательное соединение: R_total = R₁+R₂; Параллельное соединение: 1/R_total = 1/R₁+1/R₂",
            formulaKk: "V = IR (Ом заңы); Тізбектей қосылу: R_total = R₁+R₂; Параллель қосылу: 1/R_total = 1/R₁+1/R₂",
            description: "Ohm's law and resistor combination rules for DC circuits",
            descriptionRu: "Закон Ома и правила соединения резисторов для цепей постоянного тока",
            descriptionKk: "Ом заңы және тұрақты ток тізбектері үшін резисторларды қосу ережелері"
          },
          {
            formula: "τ = RC; V_c(t) = V₀(1 − e^(−t/τ)) charging; V_c(t) = V₀·e^(−t/τ) discharging",
            formulaRu: "τ = RC; V_c(t) = V₀(1 − e^(−t/τ)) при зарядке; V_c(t) = V₀·e^(−t/τ) при разрядке",
            formulaKk: "τ = RC; V_c(t) = V₀(1 − e^(−t/τ)) зарядталу кезінде; V_c(t) = V₀·e^(−t/τ) разрядталу кезінде",
            description: "RC circuit time constant and voltage equations for charging/discharging",
            descriptionRu: "Постоянная времени RC-цепи и уравнения напряжения для зарядки/разрядки",
            descriptionKk: "RC тізбегінің уақыт тұрақтысы және зарядтау/разрядтау кернеу теңдеулері"
          }
        ],
        solvedExamples: [
          {
            question: "A 10V battery is connected to a 2kΩ resistor and a 50μF capacitor in series. Find the time constant and the voltage across the capacitor after 0.1 s.",
            questionRu: "Батарея 10 В подключена к резистору 2 кОм и конденсатору 50 мкФ последовательно. Найдите постоянную времени и напряжение на конденсаторе через 0,1 с.",
            questionKk: "10 В батарея 2 кОм резистор мен 50 мкФ конденсаторға тізбектей қосылған. Уақыт тұрақтысын және 0,1 с кейінгі конденсатордағы кернеуді табыңыз.",
            steps: [
              { en: "τ = RC = (2000)(50×10⁻⁶) = 0.1 s", ru: "τ = RC = (2000)(50×10⁻⁶) = 0,1 с", kk: "τ = RC = (2000)(50×10⁻⁶) = 0,1 с" },
              { en: "V_c = 10(1 − e^(−0.1/0.1)) = 10(1 − e⁻¹) = 10(1 − 0.368) ≈ 6.32 V", ru: "V_c = 10(1 − e^(−0,1/0,1)) = 10(1 − e⁻¹) = 10(1 − 0,368) ≈ 6,32 В", kk: "V_c = 10(1 − e^(−0,1/0,1)) = 10(1 − e⁻¹) = 10(1 − 0,368) ≈ 6,32 В" }
            ],
            answer: "τ = 0.1 s; V_c ≈ 6.32 V after one time constant",
            answerRu: "τ = 0,1 с; V_c ≈ 6,32 В через одну постоянную времени",
            answerKk: "τ = 0,1 с; V_c ≈ 6,32 В бір уақыт тұрақтысынан кейін"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the total resistance of a 4Ω and 6Ω resistor connected in series?",
            questionRu: "Каково общее сопротивление резисторов 4 Ом и 6 Ом, соединённых последовательно?",
            questionKk: "Тізбектей қосылған 4 Ом және 6 Ом резисторлардың жалпы кедергісі қандай?",
            answer: "R_total = 4 + 6 = 10Ω",
            answerRu: "R_total = 4 + 6 = 10 Ом",
            answerKk: "R_total = 4 + 6 = 10 Ом",
            hint: "In series, resistances simply add up",
            hintRu: "При последовательном соединении сопротивления складываются",
            hintKk: "Тізбектей қосылғанда кедергілер қосылады",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Find the total resistance of a 4Ω and 6Ω resistor connected in parallel.",
            questionRu: "Найдите общее сопротивление резисторов 4 Ом и 6 Ом, соединённых параллельно.",
            questionKk: "Параллель қосылған 4 Ом және 6 Ом резисторлардың жалпы кедергісін табыңыз.",
            answer: "1/R = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 → R = 12/5 = 2.4Ω",
            answerRu: "1/R = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 → R = 12/5 = 2,4 Ом",
            answerKk: "1/R = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 → R = 12/5 = 2,4 Ом",
            hint: "For parallel resistors: 1/R_total = 1/R₁ + 1/R₂",
            hintRu: "Для параллельных резисторов: 1/R = 1/R₁ + 1/R₂",
            hintKk: "Параллель резисторлар үшін: 1/R = 1/R₁ + 1/R₂",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "An RC circuit has R = 5kΩ and C = 20μF. The capacitor is fully charged to 12V, then the battery is removed. How long until the capacitor voltage drops to 3V?",
            questionRu: "RC-цепь имеет R = 5 кОм и C = 20 мкФ. Конденсатор полностью заряжен до 12 В, затем батарея убрана. Через сколько напряжение упадёт до 3 В?",
            questionKk: "RC тізбегінде R = 5 кОм, C = 20 мкФ. Конденсатор 12 В-қа толық зарядталған, содан кейін батарея алынды. Конденсатор кернеуі 3 В-қа дейін қашан түседі?",
            answer: "τ = RC = 0.1 s. V = 12·e^(−t/0.1) = 3 → e^(−t/0.1) = 0.25 → −t/0.1 = ln(0.25) = −1.386 → t ≈ 0.139 s",
            answerRu: "τ = RC = 0,1 с. V = 12·e^(−t/0,1) = 3 → e^(−t/0,1) = 0,25 → −t/0,1 = ln(0,25) = −1,386 → t ≈ 0,139 с",
            answerKk: "τ = RC = 0,1 с. V = 12·e^(−t/0,1) = 3 → e^(−t/0,1) = 0,25 → −t/0,1 = ln(0,25) = −1,386 → t ≈ 0,139 с",
            hint: "Use V = V₀·e^(−t/τ) and solve for t with natural logarithm",
            hintRu: "Используйте V = V₀·e^(−t/τ) и решите для t через натуральный логарифм",
            hintKk: "V = V₀·e^(−t/τ) қолданып, натурал логарифм арқылы t-ні шешіңіз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Electrochemistry",
        titleRu: "AP Химия — Электрохимия",
        titleKk: "AP Химия — Электрохимия",
        content: "Electrochemistry connects chemical reactions to electrical energy. In galvanic (voltaic) cells, spontaneous redox reactions generate electric current, while electrolytic cells use external current to drive non-spontaneous reactions. The standard cell potential E°cell = E°cathode − E°anode predicts spontaneity, and the Nernst equation adjusts for non-standard conditions.",
        contentRu: "Электрохимия связывает химические реакции с электрической энергией. В гальванических элементах спонтанные окислительно-восстановительные реакции генерируют ток, а электролитические ячейки используют внешний ток для несамопроизвольных реакций. Стандартный потенциал E°cell = E°катод − E°анод предсказывает самопроизвольность, а уравнение Нернста корректирует для нестандартных условий.",
        contentKk: "Электрохимия химиялық реакцияларды электр энергиясымен байланыстырады. Гальваникалық элементтерде спонтанды тотығу-тотықсыздану реакциялары электр тогін тудырады, ал электролиттік ұяшықтар спонтанды емес реакциялар үшін сыртқы токты пайдаланады. Стандартты ұяшық потенциалы E°cell = E°катод − E°анод спонтандылықты болжайды, ал Нернст теңдеуі стандартты емес жағдайларға түзетеді.",
        keyFormulas: [
          {
            formula: "E°cell = E°cathode − E°anode; spontaneous if E°cell > 0",
            formulaRu: "E°cell = E°cathode − E°anode; самопроизвольная реакция, если E°cell > 0",
            formulaKk: "E°cell = E°cathode − E°anode; E°cell > 0 болса, өздігінен жүретін реакция",
            description: "Standard cell potential — determines whether a redox reaction is spontaneous",
            descriptionRu: "Стандартный потенциал ячейки — определяет самопроизвольность окислительно-восстановительной реакции",
            descriptionKk: "Стандартты ұяшық потенциалы — тотығу-тотықсыздану реакциясының спонтандылығын анықтайды"
          },
          {
            formula: "E = E° − (RT/nF)ln(Q) or E = E° − (0.0592/n)log(Q) at 25°C",
            formulaRu: "E = E° − (RT/nF)ln(Q) или E = E° − (0.0592/n)log(Q) при 25°C",
            formulaKk: "E = E° − (RT/nF)ln(Q) немесе E = E° − (0.0592/n)log(Q), 25°C кезінде",
            description: "Nernst equation — adjusts cell potential for non-standard concentrations",
            descriptionRu: "Уравнение Нернста — корректирует потенциал ячейки для нестандартных концентраций",
            descriptionKk: "Нернст теңдеуі — стандартты емес концентрациялар үшін ұяшық потенциалын түзетеді"
          }
        ],
        solvedExamples: [
          {
            question: "Calculate the standard cell potential for a galvanic cell with Zn²⁺/Zn (E° = −0.76V) and Cu²⁺/Cu (E° = +0.34V). Identify the anode and cathode.",
            questionRu: "Рассчитайте стандартный потенциал гальванического элемента с Zn²⁺/Zn (E° = −0,76 В) и Cu²⁺/Cu (E° = +0,34 В). Определите анод и катод.",
            questionKk: "Zn²⁺/Zn (E° = −0,76 В) және Cu²⁺/Cu (E° = +0,34 В) гальваникалық элементтің стандартты потенциалын есептеңіз. Анод пен катодты анықтаңыз.",
            steps: [
              { en: "Zn has lower E°, so Zn is oxidized (anode). Cu²⁺ is reduced (cathode).", ru: "Zn имеет более низкий E°, поэтому Zn окисляется (анод). Cu²⁺ восстанавливается (катод).", kk: "Zn-нің E° төмен, сондықтан Zn тотығады (анод). Cu²⁺ тотықсызданады (катод)." },
              { en: "E°cell = E°cathode − E°anode = (+0.34) − (−0.76) = +1.10 V (spontaneous)", ru: "E°cell = E°катод − E°анод = (+0,34) − (−0,76) = +1,10 В (самопроизвольная)", kk: "E°cell = E°катод − E°анод = (+0,34) − (−0,76) = +1,10 В (спонтанды)" }
            ],
            answer: "E°cell = +1.10 V. Anode: Zn; Cathode: Cu.",
            answerRu: "E°cell = +1,10 В. Анод: Zn; Катод: Cu.",
            answerKk: "E°cell = +1,10 В. Анод: Zn; Катод: Cu."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "In a galvanic cell, does oxidation occur at the anode or cathode?",
            questionRu: "В гальваническом элементе окисление происходит на аноде или катоде?",
            questionKk: "Гальваникалық элементте тотығу анодта ма әлде катодта ма жүреді?",
            answer: "Oxidation always occurs at the anode (remember: AN OX — anode oxidation).",
            answerRu: "Окисление всегда происходит на аноде (запомните: АН ОК — анод окисление).",
            answerKk: "Тотығу әрқашан анодта жүреді (есте сақтаңыз: АН ОК — анод тотығу).",
            hint: "Think of the mnemonic: AN OX and RED CAT",
            hintRu: "Запомните мнемонику: АН ОК (анод — окисление) и КАТ ВОС (катод — восстановление)",
            hintKk: "Мнемониканы есте сақтаңыз: АН ОК (анод — тотығу) және КАТ ТОТ (катод — тотықсыздану)",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Calculate E°cell for Fe³⁺/Fe (E° = −0.04V) and Ag⁺/Ag (E° = +0.80V). Is the reaction spontaneous?",
            questionRu: "Рассчитайте E°cell для Fe³⁺/Fe (E° = −0,04 В) и Ag⁺/Ag (E° = +0,80 В). Реакция самопроизвольна?",
            questionKk: "Fe³⁺/Fe (E° = −0,04 В) және Ag⁺/Ag (E° = +0,80 В) үшін E°cell есептеңіз. Реакция спонтанды ма?",
            answer: "E°cell = +0.80 − (−0.04) = +0.84 V. Yes, spontaneous (E°cell > 0). Fe is oxidized, Ag⁺ is reduced.",
            answerRu: "E°cell = +0,80 − (−0,04) = +0,84 В. Да, самопроизвольная (E°cell > 0). Fe окисляется, Ag⁺ восстанавливается.",
            answerKk: "E°cell = +0,80 − (−0,04) = +0,84 В. Иә, спонтанды (E°cell > 0). Fe тотығады, Ag⁺ тотықсызданады.",
            hint: "The metal with the lower reduction potential gets oxidized (is the anode)",
            hintRu: "Металл с более низким потенциалом восстановления окисляется (анод)",
            hintKk: "Тотықсыздану потенциалы төмен металл тотығады (анод болады)",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Using the Nernst equation, find the cell potential at 25°C for the Zn-Cu cell (E° = 1.10V) when [Zn²⁺] = 0.1 M and [Cu²⁺] = 2.0 M. (n = 2 electrons transferred)",
            questionRu: "Используя уравнение Нернста, найдите потенциал Zn-Cu элемента при 25°C (E° = 1,10 В), если [Zn²⁺] = 0,1 М и [Cu²⁺] = 2,0 М. (n = 2)",
            questionKk: "Нернст теңдеуін пайдаланып, [Zn²⁺] = 0,1 М және [Cu²⁺] = 2,0 М болғанда 25°C-де Zn-Cu ұяшығының потенциалын табыңыз (E° = 1,10 В, n = 2).",
            answer: "E = 1.10 − (0.0592/2)log([Zn²⁺]/[Cu²⁺]) = 1.10 − 0.0296·log(0.1/2.0) = 1.10 − 0.0296·log(0.05) = 1.10 − 0.0296·(−1.301) = 1.10 + 0.0385 ≈ 1.14 V",
            answerRu: "E = 1,10 − (0,0592/2)log([Zn²⁺]/[Cu²⁺]) = 1,10 − 0,0296·log(0,1/2,0) = 1,10 − 0,0296·log(0,05) = 1,10 − 0,0296·(−1,301) = 1,10 + 0,0385 ≈ 1,14 В",
            answerKk: "E = 1,10 − (0,0592/2)log([Zn²⁺]/[Cu²⁺]) = 1,10 − 0,0296·log(0,1/2,0) = 1,10 − 0,0296·log(0,05) = 1,10 − 0,0296·(−1,301) = 1,10 + 0,0385 ≈ 1,14 В",
            hint: "Q = [products]/[reactants] = [Zn²⁺]/[Cu²⁺] since Zn is oxidized and Cu²⁺ is reduced",
            hintRu: "Q = [продукты]/[реагенты] = [Zn²⁺]/[Cu²⁺], так как Zn окисляется, а Cu²⁺ восстанавливается",
            hintKk: "Q = [өнімдер]/[реагенттер] = [Zn²⁺]/[Cu²⁺], себебі Zn тотығады, Cu²⁺ тотықсызданады",
            xp: 20
          }
        ]
      },
      {
        title: "AP Chem - Organic Chemistry",
        titleRu: "AP Химия — Органическая химия",
        titleKk: "AP Химия — Органикалық химия",
        content: "Organic chemistry on the AP exam covers carbon-based molecules, functional groups, and basic reaction types. Hydrocarbons form the backbone: alkanes (single bonds), alkenes (double bonds), and alkynes (triple bonds). Functional groups like hydroxyl (−OH), carboxyl (−COOH), and amino (−NH₂) determine a molecule's chemical properties and reactivity.",
        contentRu: "Органическая химия на экзамене AP охватывает углеродсодержащие молекулы, функциональные группы и основные типы реакций. Углеводороды составляют основу: алканы (одинарные связи), алкены (двойные) и алкины (тройные). Функциональные группы — гидроксильная (−OH), карбоксильная (−COOH) и аминогруппа (−NH₂) — определяют химические свойства и реакционную способность молекулы.",
        contentKk: "AP емтиханындағы органикалық химия көміртегі негізіндегі молекулаларды, функционалдық топтарды және негізгі реакция түрлерін қамтиды. Көмірсутектер негізді құрайды: алкандар (бірлік байланыстар), алкендер (қос байланыстар) және алкиндер (үштік байланыстар). Гидроксил (−OH), карбоксил (−COOH) және амин (−NH₂) функционалдық топтары молекуланың химиялық қасиеттері мен реакциялық қабілетін анықтайды.",
        keyFormulas: [
          {
            formula: "CₙH₂ₙ₊₂ (alkane); CₙH₂ₙ (alkene); CₙH₂ₙ₋₂ (alkyne)",
            formulaRu: "CₙH₂ₙ₊₂ (алкан); CₙH₂ₙ (алкен); CₙH₂ₙ₋₂ (алкин)",
            formulaKk: "CₙH₂ₙ₊₂ (алкан); CₙH₂ₙ (алкен); CₙH₂ₙ₋₂ (алкин)",
            description: "General formulas for hydrocarbons — each double/triple bond reduces hydrogen count",
            descriptionRu: "Общие формулы углеводородов — каждая кратная связь уменьшает число атомов водорода",
            descriptionKk: "Көмірсутектердің жалпы формулалары — әр еселік байланыс сутегі санын азайтады"
          }
        ],
        solvedExamples: [
          {
            question: "Identify the functional groups in the amino acid glycine (H₂N−CH₂−COOH) and predict whether it is more soluble in water or hexane.",
            questionRu: "Определите функциональные группы в аминокислоте глицине (H₂N−CH₂−COOH) и предскажите, в чём он лучше растворяется — в воде или гексане.",
            questionKk: "Глицин аминқышқылындағы (H₂N−CH₂−COOH) функционалдық топтарды анықтап, ол суда ма әлде гександа ма жақсы ериді деп болжаңыз.",
            steps: [
              { en: "Glycine contains an amino group (−NH₂) and a carboxyl group (−COOH) — both are polar and can form hydrogen bonds.", ru: "Глицин содержит аминогруппу (−NH₂) и карбоксильную группу (−COOH) — обе полярные и образуют водородные связи.", kk: "Глицинде амин тобы (−NH₂) және карбоксил тобы (−COOH) бар — екеуі де полярлы және сутектік байланыстар түзеді." },
              { en: "Since both groups are polar and hydrophilic, glycine is highly soluble in water (polar solvent) and insoluble in hexane (nonpolar).", ru: "Поскольку обе группы полярные и гидрофильные, глицин хорошо растворим в воде (полярный растворитель) и нерастворим в гексане (неполярный).", kk: "Екі топ та полярлы және гидрофильді болғандықтан, глицин суда (полярлы еріткіш) жақсы ериді және гександа (полярлы емес) ерімейді." }
            ],
            answer: "Functional groups: amino (−NH₂) and carboxyl (−COOH). Glycine is water-soluble due to polar, hydrogen-bonding groups.",
            answerRu: "Функциональные группы: амино (−NH₂) и карбоксил (−COOH). Глицин хорошо растворим в воде благодаря полярным группам, образующим водородные связи.",
            answerKk: "Функционалдық топтар: амин (−NH₂) және карбоксил (−COOH). Глицин полярлы, сутектік байланыс түзетін топтар арқасында суда жақсы ериді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the molecular formula of butane (a 4-carbon alkane)?",
            questionRu: "Какова молекулярная формула бутана (алкан с 4 атомами углерода)?",
            questionKk: "Бутанның (4 көміртекті алкан) молекулалық формуласы қандай?",
            answer: "C₄H₁₀ (using CₙH₂ₙ₊₂: n=4 → 2(4)+2 = 10 hydrogens)",
            answerRu: "C₄H₁₀ (по формуле CₙH₂ₙ₊₂: n=4 → 2(4)+2 = 10 атомов водорода)",
            answerKk: "C₄H₁₀ (CₙH₂ₙ₊₂ формуласы бойынша: n=4 → 2(4)+2 = 10 сутегі атомы)",
            hint: "Use the alkane formula CₙH₂ₙ₊₂ with n = 4",
            hintRu: "Используйте формулу алканов CₙH₂ₙ₊₂ при n = 4",
            hintKk: "n = 4 болғанда CₙH₂ₙ₊₂ алкан формуласын қолданыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Classify these molecules by functional group: CH₃OH, CH₃COOH, CH₃NH₂, CH₃CHO.",
            questionRu: "Классифицируйте молекулы по функциональным группам: CH₃OH, CH₃COOH, CH₃NH₂, CH₃CHO.",
            questionKk: "Молекулаларды функционалдық топтар бойынша жіктеңіз: CH₃OH, CH₃COOH, CH₃NH₂, CH₃CHO.",
            answer: "CH₃OH = alcohol (−OH); CH₃COOH = carboxylic acid (−COOH); CH₃NH₂ = amine (−NH₂); CH₃CHO = aldehyde (−CHO).",
            answerRu: "CH₃OH = спирт (−OH); CH₃COOH = карбоновая кислота (−COOH); CH₃NH₂ = амин (−NH₂); CH₃CHO = альдегид (−CHO).",
            answerKk: "CH₃OH = спирт (−OH); CH₃COOH = карбон қышқылы (−COOH); CH₃NH₂ = амин (−NH₂); CH₃CHO = альдегид (−CHO).",
            hint: "Look at the group attached to the carbon chain: −OH, −COOH, −NH₂, −CHO",
            hintRu: "Посмотрите на группу, присоединённую к углеродной цепи: −OH, −COOH, −NH₂, −CHO",
            hintKk: "Көміртек тізбегіне қосылған топты қараңыз: −OH, −COOH, −NH₂, −CHO",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Draw all structural isomers of C₃H₈O (molecular formula). How many distinct isomers exist and what functional groups do they contain?",
            questionRu: "Нарисуйте все структурные изомеры C₃H₈O. Сколько различных изомеров существует и какие функциональные группы они содержат?",
            questionKk: "C₃H₈O-ның барлық құрылымдық изомерлерін салыңыз. Қанша бөлек изомер бар және олар қандай функционалдық топтарды қамтиды?",
            answer: "3 isomers: 1-propanol (CH₃CH₂CH₂OH, primary alcohol), 2-propanol (CH₃CH(OH)CH₃, secondary alcohol), and methyl ethyl ether (CH₃OCH₂CH₃, ether). Two are alcohols (−OH) and one is an ether (C−O−C).",
            answerRu: "3 изомера: 1-пропанол (CH₃CH₂CH₂OH, первичный спирт), 2-пропанол (CH₃CH(OH)CH₃, вторичный спирт) и метилэтиловый эфир (CH₃OCH₂CH₃, эфир). Два — спирты (−OH), один — эфир (C−O−C).",
            answerKk: "3 изомер: 1-пропанол (CH₃CH₂CH₂OH, біріншілік спирт), 2-пропанол (CH₃CH(OH)CH₃, екіншілік спирт) және метилэтил эфирі (CH₃OCH₂CH₃, эфир). Екеуі — спирттер (−OH), біреуі — эфир (C−O−C).",
            hint: "Consider both alcohol (−OH) and ether (C−O−C) functional groups with 3 carbons",
            hintRu: "Рассмотрите как спирты (−OH), так и простые эфиры (C−O−C) с 3 углеродами",
            hintKk: "3 көміртекпен спирт (−OH) және қарапайым эфир (C−O−C) функционалдық топтарын қарастырыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Bio - Body Systems",
        titleRu: "AP Биология — Системы организма",
        titleKk: "AP Биология — Дене жүйелері",
        content: "AP Biology covers major human body systems and how they maintain homeostasis. The nervous system uses electrochemical signals for rapid communication, while the endocrine system uses hormones for slower, longer-lasting regulation. The immune system distinguishes self from non-self through innate and adaptive responses, including B-cell antibody production and T-cell mediated immunity.",
        contentRu: "AP Biology охватывает основные системы человеческого организма и поддержание гомеостаза. Нервная система использует электрохимические сигналы для быстрой связи, а эндокринная — гормоны для медленной, но длительной регуляции. Иммунная система различает «своё» и «чужое» через врождённый и адаптивный ответ, включая выработку антител B-клетками и клеточный иммунитет T-клеток.",
        contentKk: "AP Biology адам денесінің негізгі жүйелері мен гомеостазды сақтауды қамтиды. Жүйке жүйесі жылдам байланыс үшін электрохимиялық сигналдарды пайдаланады, ал эндокриндік жүйе баяу, ұзақ реттеу үшін гормондарды қолданады. Иммундық жүйе туа біткен және бейімделгіш жауаптар арқылы «өзін» мен «бөтенді» ажыратады, соның ішінде В-жасуша антиденелері мен Т-жасуша медиациялық иммунитет.",
        keyFormulas: [
          {
            formula: "Stimulus → Receptor → Afferent nerve → CNS → Efferent nerve → Effector → Response",
            formulaRu: "Стимул → Рецептор → Афферентный нерв → ЦНС → Эфферентный нерв → Эффектор → Реакция",
            formulaKk: "Тітіркендіргіш → Рецептор → Афферентті жүйке → ОЖЖ → Эфферентті жүйке → Эффектор → Жауап",
            description: "Nervous system reflex arc — the pathway for rapid involuntary responses",
            descriptionRu: "Рефлекторная дуга нервной системы — путь быстрых непроизвольных ответов",
            descriptionKk: "Жүйке жүйесінің рефлекторлық доғасы — жылдам ерікті емес жауаптардың жолы"
          }
        ],
        solvedExamples: [
          {
            question: "Explain how the body maintains blood glucose homeostasis after eating a high-sugar meal. Include the roles of the pancreas and liver.",
            questionRu: "Объясните, как организм поддерживает гомеостаз глюкозы в крови после приёма пищи с высоким содержанием сахара. Укажите роль поджелудочной железы и печени.",
            questionKk: "Қанттылығы жоғары тамақтан кейін дене қан глюкозасының гомеостазын қалай сақтайтынын түсіндіріңіз. Ұйқы безі мен бауырдың рөлін көрсетіңіз.",
            steps: [
              { en: "After eating, blood glucose rises. Beta cells in the pancreas detect this and secrete insulin into the bloodstream.", ru: "После еды уровень глюкозы в крови повышается. Бета-клетки поджелудочной железы определяют это и выделяют инсулин в кровоток.", kk: "Тамақтан кейін қан глюкозасы көтеріледі. Ұйқы безінің бета-жасушалары мұны анықтап, қанға инсулин бөледі." },
              { en: "Insulin signals liver and muscle cells to absorb glucose and store it as glycogen (glycogenesis), lowering blood glucose back to normal — a classic negative feedback loop.", ru: "Инсулин сигнализирует печени и мышцам поглощать глюкозу и запасать её в виде гликогена (гликогенез), снижая глюкозу до нормы — классическая отрицательная обратная связь.", kk: "Инсулин бауыр мен бұлшықет жасушаларына глюкозаны сіңіріп, гликоген түрінде сақтауды (гликогенез) сигнал береді, қан глюкозасын қалыпқа түсіреді — классикалық теріс кері байланыс." }
            ],
            answer: "Pancreas secretes insulin → liver/muscles store glucose as glycogen → blood glucose decreases (negative feedback).",
            answerRu: "Поджелудочная железа выделяет инсулин → печень/мышцы запасают глюкозу как гликоген → уровень глюкозы в крови снижается (отрицательная обратная связь).",
            answerKk: "Ұйқы безі инсулин бөледі → бауыр/бұлшықеттер глюкозаны гликоген түрінде сақтайды → қан глюкозасы төмендейді (теріс кері байланыс)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Which type of immune response is faster: innate or adaptive? Why?",
            questionRu: "Какой тип иммунного ответа быстрее: врождённый или адаптивный? Почему?",
            questionKk: "Қай иммундық жауап жылдамырақ: туа біткен бе, әлде бейімделгіш пе? Неліктен?",
            answer: "Innate immunity is faster because it is non-specific and always ready — no time needed to identify specific pathogens. Adaptive immunity takes days to develop targeted antibodies.",
            answerRu: "Врождённый иммунитет быстрее, потому что он неспецифичен и всегда готов — не нужно время на идентификацию конкретных патогенов. Адаптивному иммунитету требуются дни для выработки целевых антител.",
            answerKk: "Туа біткен иммунитет жылдамырақ, себебі ол бейспецификалық және әрдайым дайын — нақты патогендерді анықтауға уақыт қажет емес. Бейімделгіш иммунитетке мақсатты антиденелер шығару үшін бірнеше күн қажет.",
            hint: "Think about which system needs to 'learn' about the pathogen first",
            hintRu: "Подумайте, какой системе нужно сначала «узнать» патоген",
            hintKk: "Қай жүйенің алдымен патогенді «танып білуі» керектігін ойланыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Compare and contrast the nervous system and endocrine system in terms of signal type, speed, and duration of effect.",
            questionRu: "Сравните нервную и эндокринную системы по типу сигнала, скорости и длительности эффекта.",
            questionKk: "Жүйке жүйесі мен эндокриндік жүйені сигнал түрі, жылдамдығы және әсер ұзақтығы бойынша салыстырыңыз.",
            answer: "Nervous: electrical impulses, very fast (milliseconds), short duration. Endocrine: chemical hormones via blood, slower (seconds to hours), longer-lasting effects. Both maintain homeostasis but operate on different timescales.",
            answerRu: "Нервная: электрические импульсы, очень быстро (миллисекунды), короткая продолжительность. Эндокринная: химические гормоны через кровь, медленнее (секунды-часы), более долгий эффект. Обе поддерживают гомеостаз, но работают в разных временных масштабах.",
            answerKk: "Жүйке: электр импульстары, өте жылдам (миллисекундтар), қысқа ұзақтық. Эндокрин: қан арқылы химиялық гормондар, баяуырақ (секундтар-сағаттар), ұзағырақ әсер. Екеуі де гомеостазды сақтайды, бірақ әртүрлі уақыт шкаласында жұмыс істейді.",
            hint: "Consider: What carries the signal? How fast does it travel? How long does the effect last?",
            hintRu: "Подумайте: что переносит сигнал? Как быстро он распространяется? Как долго длится эффект?",
            hintKk: "Ойланыңыз: сигналды не тасымалдайды? Қаншалықты жылдам таралады? Әсері қанша уақыт созылады?",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A patient receives an organ transplant. Explain why immunosuppressive drugs are necessary, describing the specific immune mechanisms that would cause rejection without them.",
            questionRu: "Пациент получает пересадку органа. Объясните, почему иммуносупрессивные препараты необходимы, описав конкретные иммунные механизмы, которые вызвали бы отторжение без них.",
            questionKk: "Пациент орган трансплантациясын алады. Иммуносупрессивті дәрілердің неліктен қажет екенін, оларсыз қабылдамауды тудыратын нақты иммундық механизмдерді сипаттай отырып түсіндіріңіз.",
            answer: "Without immunosuppression, the adaptive immune system recognizes donor MHC proteins as foreign. Helper T-cells activate cytotoxic T-cells that directly attack donor cells. B-cells produce antibodies against donor antigens (humoral rejection). Memory cells form, making future rejection faster. Immunosuppressants inhibit T-cell activation (e.g., cyclosporine blocks IL-2 signaling) to prevent these responses.",
            answerRu: "Без иммуносупрессии адаптивная иммунная система распознаёт MHC-белки донора как чужеродные. Т-хелперы активируют цитотоксические Т-клетки, которые атакуют клетки донора. В-клетки вырабатывают антитела против антигенов донора (гуморальное отторжение). Образуются клетки памяти, ускоряя будущее отторжение. Иммуносупрессанты подавляют активацию Т-клеток (например, циклоспорин блокирует сигнал IL-2), предотвращая эти реакции.",
            answerKk: "Иммуносупрессиясыз бейімделгіш иммундық жүйе донор MHC ақуыздарын бөгде деп таниды. Т-хелперлер донор жасушаларына тікелей шабуыл жасайтын цитотоксикалық Т-жасушаларды белсендіреді. В-жасушалар донор антигендеріне қарсы антиденелер шығарады (гуморалды қабылдамау). Есте сақтау жасушалары түзіліп, болашақ қабылдамауды жылдамдатады. Иммуносупрессанттар Т-жасуша белсенділігін тежейді (мысалы, циклоспорин IL-2 сигналын бөгейді), осы жауаптардың алдын алады.",
            hint: "Focus on how T-cells and B-cells recognize 'non-self' MHC markers on the transplanted organ",
            hintRu: "Сосредоточьтесь на том, как T- и B-клетки распознают «чужие» MHC-маркеры на пересаженном органе",
            hintKk: "T-жасушалар мен B-жасушалардың трансплантацияланған органдағы «бөтен» MHC маркерлерін қалай танитынына назар аударыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "IB Extended Essay",
        titleRu: "IB Расширенное эссе",
        titleKk: "IB Кеңейтілген эссе",
        content: "The IB Extended Essay (EE) is a 4,000-word independent research paper required for the IB Diploma. Students choose a subject, formulate a focused research question, conduct original research, and present a structured academic argument. The EE is assessed on criteria including focus, knowledge, critical thinking, presentation, and engagement with the research process.",
        contentRu: "Расширенное эссе IB (EE) — это самостоятельная исследовательская работа объёмом 4000 слов, обязательная для диплома IB. Ученики выбирают предмет, формулируют узкий исследовательский вопрос, проводят оригинальное исследование и представляют структурированный академический аргумент. EE оценивается по критериям: фокус, знания, критическое мышление, презентация и вовлечённость в исследовательский процесс.",
        contentKk: "IB Кеңейтілген эссе (EE) — IB Дипломы үшін қажетті 4000 сөзден тұратын дербес зерттеу жұмысы. Оқушылар пән таңдап, нақты зерттеу сұрағын тұжырымдайды, түпнұсқа зерттеу жүргізеді және құрылымдық академиялық дәлел ұсынады. EE фокус, білім, сыни ойлау, презентация және зерттеу процесіне қатысу критерийлері бойынша бағаланады.",
        keyFormulas: [
          {
            formula: "EE Structure: Introduction → Body (analysis) → Conclusion → Bibliography (4,000 words max)",
            formulaRu: "Структура EE: Введение → Основная часть (анализ) → Заключение → Библиография (максимум 4000 слов)",
            formulaKk: "EE құрылымы: Кіріспе → Негізгі бөлім (талдау) → Қорытынды → Библиография (ең көбі 4000 сөз)",
            description: "Standard Extended Essay structure — must include a clear research question and sustained argument",
            descriptionRu: "Стандартная структура Расширенного эссе — должна включать чёткий исследовательский вопрос и последовательный аргумент",
            descriptionKk: "Кеңейтілген эссенің стандартты құрылымы — нақты зерттеу сұрағы мен тұрақты дәлелді қамтуы керек"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to write an EE in Biology about antibiotic resistance. Their initial question is 'Is antibiotic resistance bad?' Improve this research question and outline the essay structure.",
            questionRu: "Ученик хочет написать EE по биологии об устойчивости к антибиотикам. Его вопрос: «Плоха ли устойчивость к антибиотикам?» Улучшите вопрос и наметьте структуру.",
            questionKk: "Оқушы антибиотиктерге төзімділік туралы биологиядан EE жазғысы келеді. Бастапқы сұрағы: «Антибиотиктерге төзімділік жаман ба?» Зерттеу сұрағын жақсартып, эссе құрылымын сызыңыз.",
            steps: [
              { en: "Improve the research question to be specific and measurable: 'To what extent does sub-inhibitory concentration of tetracycline promote horizontal gene transfer of resistance plasmids in E. coli?'", ru: "Улучшите вопрос, сделав его конкретным и измеримым: «В какой степени субингибирующая концентрация тетрациклина способствует горизонтальному переносу плазмид резистентности у E. coli?»", kk: "Зерттеу сұрағын нақты және өлшенетін етіп жақсартыңыз: «Тетрациклиннің субингибиторлық концентрациясы E. coli-де резистенттік плазмидтердің көлденең ген тасымалын қаншалықты ынталандырады?»" },
              { en: "Structure: Introduction (background on antibiotic resistance + RQ), Body (methodology, data collection from experiments/literature, analysis of results), Conclusion (answer to RQ, limitations, implications), Bibliography.", ru: "Структура: Введение (предпосылки + исследовательский вопрос), Основная часть (методология, сбор данных, анализ), Заключение (ответ, ограничения, значение), Библиография.", kk: "Құрылым: Кіріспе (антибиотик резистенттілігі + зерттеу сұрағы), Негізгі бөлім (әдіснама, деректер жинау, талдау), Қорытынды (жауап, шектеулер, маңыздылық), Әдебиеттер." }
            ],
            answer: "Revised RQ: 'To what extent does sub-inhibitory tetracycline concentration promote horizontal gene transfer of resistance plasmids in E. coli?' — specific, measurable, and researchable within 4,000 words.",
            answerRu: "Пересмотренный вопрос: «В какой степени субингибирующая концентрация тетрациклина способствует горизонтальному переносу плазмид резистентности у E. coli?» — конкретный, измеримый и исследуемый в пределах 4000 слов.",
            answerKk: "Түзетілген сұрақ: «Тетрациклиннің субингибиторлық концентрациясы E. coli-де резистенттік плазмидтердің көлденең ген тасымалын қаншалықты ынталандырады?» — нақты, өлшенетін және 4000 сөз шегінде зерттелетін."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the maximum word count for an IB Extended Essay?",
            questionRu: "Каков максимальный объём слов для Расширенного эссе IB?",
            questionKk: "IB Кеңейтілген эссенің максималды сөз саны қандай?",
            answer: "4,000 words. This does not include the bibliography, table of contents, or appendices.",
            answerRu: "4000 слов. Это не включает библиографию, оглавление или приложения.",
            answerKk: "4000 сөз. Бұған әдебиеттер тізімі, мазмұны немесе қосымшалар кірмейді.",
            hint: "The word limit is a strict maximum — exceeding it results in a penalty",
            hintRu: "Лимит строгий — превышение штрафуется",
            hintKk: "Сөз шегі қатаң — асыру айыппұлға әкеледі",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Evaluate this EE research question: 'What is the effect of temperature on enzyme activity?' Suggest two specific improvements.",
            questionRu: "Оцените исследовательский вопрос: «Как температура влияет на активность ферментов?» Предложите два конкретных улучшения.",
            questionKk: "Бұл зерттеу сұрағын бағалаңыз: «Температураның фермент белсенділігіне әсері қандай?» Екі нақты жақсарту ұсыныңыз.",
            answer: "Too broad. Improvement 1: Specify the enzyme (e.g., amylase, catalase). Improvement 2: Define the temperature range and measurable outcome (e.g., 'How does temperature between 20-80°C affect the rate of starch hydrolysis by salivary amylase, measured by iodine test?').",
            answerRu: "Слишком широко. Улучшение 1: Уточните фермент (например, амилаза, каталаза). Улучшение 2: Определите диапазон температур и измеримый результат (например, «Как температура 20-80°C влияет на скорость гидролиза крахмала слюнной амилазой, измеряемую йодным тестом?»).",
            answerKk: "Тым кең. Жақсарту 1: Ферментті нақтылаңыз (мысалы, амилаза, каталаза). Жақсарту 2: Температура диапазоны мен өлшенетін нәтижені анықтаңыз (мысалы, «Температура 20-80°C аралығында сілекей амилазасының крахмал гидролизі жылдамдығына йод тестімен өлшенгенде қалай әсер етеді?»).",
            hint: "A good EE question specifies the variables, the organism/enzyme, and how results will be measured",
            hintRu: "Хороший вопрос EE указывает переменные, организм/фермент и способ измерения",
            hintKk: "Жақсы EE сұрағы айнымалыларды, организмді/ферментті және нәтижелерді өлшеу тәсілін көрсетеді",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You are writing an EE in Economics about minimum wage effects. Draft a focused research question, identify your primary and secondary sources, and explain what methodology you would use (quantitative, qualitative, or mixed).",
            questionRu: "Вы пишете EE по экономике о влиянии минимальной зарплаты. Сформулируйте вопрос, определите источники и методологию (количественная, качественная или смешанная).",
            questionKk: "Ең төменгі жалақы әсерлері туралы экономикадан EE жазып жатырсыз. Нақты зерттеу сұрағын жасап, бастапқы және қосалқы дереккөздерді анықтаңыз, әдіснаманы (сандық, сапалық немесе аралас) түсіндіріңіз.",
            answer: "RQ: 'To what extent did Kazakhstan's 2024 minimum wage increase affect youth unemployment rates in Almaty?' Primary: Kazakhstan Bureau of Statistics employment data, government wage reports. Secondary: academic papers on minimum wage elasticity, ILO reports. Methodology: Mixed — quantitative analysis of unemployment data (before/after comparison) with qualitative context from economic theory and policy analysis.",
            answerRu: "Вопрос: «В какой степени повышение минимальной зарплаты в Казахстане в 2024 году повлияло на уровень безработицы среди молодёжи в Алматы?» Первичные источники: данные Бюро статистики РК, отчёты о зарплатах. Вторичные: научные статьи об эластичности минимальной зарплаты, отчёты МОТ. Методология: смешанная — количественный анализ данных о безработице (сравнение до/после) с качественным контекстом из экономической теории.",
            answerKk: "Сұрақ: «Қазақстанда 2024 жылы ең төменгі жалақының көтерілуі Алматыдағы жастар жұмыссыздығына қаншалықты әсер етті?» Бастапқы дереккөздер: ҚР Статистика бюросының жұмыспен қамту деректері, жалақы туралы есептер. Қосалқы: ең төменгі жалақы серпінділігі туралы ғылыми мақалалар, ХЕҰ есептері. Әдіснама: аралас — жұмыссыздық деректерін сандық талдау (дейін/кейін салыстыру) экономикалық теориядан сапалық контекстпен.",
            hint: "Focus on a specific country, time period, and measurable economic indicator",
            hintRu: "Сфокусируйтесь на конкретной стране, периоде и измеримом экономическом показателе",
            hintKk: "Нақты елге, уақыт кезеңіне және өлшенетін экономикалық көрсеткішке назар аударыңыз",
            xp: 20
          }
        ]
      },
      {
        title: "AP Score Optimization",
        titleRu: "Оптимизация баллов AP",
        titleKk: "AP балдарын оңтайландыру",
        content: "Scoring a 5 on AP exams requires strategic preparation beyond content mastery. Understanding the scoring rubric, knowing the curve (you rarely need 100% raw score for a 5), and allocating study time based on point value per question type are essential. Free-response questions often follow predictable patterns, and partial credit strategies can rescue points even on problems you cannot fully solve.",
        contentRu: "Получение 5 на AP экзаменах требует стратегической подготовки помимо знания материала. Понимание критериев оценки, кривой (для 5 редко нужно 100% сырых баллов) и распределение времени на подготовку по ценности баллов за тип вопроса критически важны. Вопросы со свободным ответом часто следуют предсказуемым шаблонам, а стратегии частичного зачёта могут спасти баллы даже на задачах, которые вы не можете полностью решить.",
        contentKk: "AP емтихандарында 5 алу мазмұнды білуден тыс стратегиялық дайындықты талап етеді. Бағалау критерийлерін, қисықты (5 үшін 100% шикі балл сирек қажет) түсіну және сұрақ түрінің балл құндылығына негізделген оқу уақытын бөлу маңызды. Еркін жауап сұрақтары жиі болжамды үлгілерге сәйкес келеді, ал ішінара кредит стратегиялары толық шеше алмайтын есептерде де балл сақтай алады.",
        keyFormulas: [
          {
            formula: "AP 5 threshold ≈ 60-70% composite (varies by subject and year)",
            formulaRu: "Порог для AP 5 ≈ 60-70% совокупного балла (варьируется по предмету и году)",
            formulaKk: "AP 5 шегі ≈ жиынтық баллдың 60-70% (пән мен жылға байланысты өзгереді)",
            description: "You typically need only 60-70% of total raw points to score a 5 — perfection is not required",
            descriptionRu: "Для 5 обычно нужно лишь 60-70% сырых баллов — совершенство не требуется",
            descriptionKk: "5 алу үшін әдетте жалпы шикі балдың тек 60-70% қажет — мінсіздік талап етілмейді"
          }
        ],
        solvedExamples: [
          {
            question: "An AP Physics C exam has 35 MC questions (50% of score) and 3 FRQ (50% of score, 15 points each = 45 total). A student scores 28/35 on MC and averages 10/15 on FRQ. Estimate their composite percentage and likely AP score.",
            questionRu: "AP Physics C: 35 MC вопросов (50% оценки) и 3 FRQ (50%, по 15 баллов = 45 всего). Ученик набрал 28/35 на MC и в среднем 10/15 на FRQ. Оцените процент и вероятный балл AP.",
            questionKk: "AP Physics C емтиханында 35 MC сұрақ (бағаның 50%) және 3 FRQ (50%, әрқайсысы 15 балл = барлығы 45) бар. Оқушы MC-де 28/35, FRQ-де орташа 10/15 алды. Жинақталған пайызын және AP балын бағалаңыз.",
            steps: [
              { en: "MC: 28/35 = 80%. FRQ: 30/45 = 66.7%. Composite = 0.5(80%) + 0.5(66.7%) = 73.3%", ru: "MC: 28/35 = 80%. FRQ: 30/45 = 66,7%. Композит = 0,5(80%) + 0,5(66,7%) = 73,3%", kk: "MC: 28/35 = 80%. FRQ: 30/45 = 66,7%. Композит = 0,5(80%) + 0,5(66,7%) = 73,3%" },
              { en: "73.3% composite is well above the typical 60-70% threshold for a 5 in AP Physics C. Likely AP score: 5.", ru: "73,3% значительно выше типичного порога 60-70% для 5 по AP Physics C. Вероятный балл AP: 5.", kk: "73,3% AP Physics C-де 5 алу үшін типтік 60-70% шегінен анық жоғары. Ықтимал AP балы: 5." }
            ],
            answer: "Composite ≈ 73.3%. Likely AP score: 5.",
            answerRu: "Композит ≈ 73,3%. Вероятный балл AP: 5.",
            answerKk: "Композит ≈ 73,3%. Ықтимал AP балы: 5."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If the threshold for a score of 5 on AP Chemistry is approximately 65%, and you scored 70% on a practice exam, are you on track?",
            questionRu: "Если порог для 5 на AP Chemistry — примерно 65%, а вы набрали 70% на пробном, вы на верном пути?",
            questionKk: "AP Chemistry-де 5 алу шегі шамамен 65% болса және сіз сынақта 70% алсаңыз, дұрыс жолдасыз ба?",
            answer: "Yes — 70% exceeds the 65% threshold, so you are on track for a 5. Continue practice to maintain or improve.",
            answerRu: "Да — 70% превышает порог 65%, значит вы на верном пути к 5. Продолжайте практику, чтобы удержать или улучшить результат.",
            answerKk: "Иә — 70% 65% шегінен асады, яғни 5 балға дұрыс жолдасыз. Нәтижені сақтау немесе жақсарту үшін жаттығуды жалғастырыңыз.",
            hint: "Compare your score directly to the threshold percentage",
            hintRu: "Сравните свой балл непосредственно с пороговым процентом",
            hintKk: "Балыңызды шекті пайызбен тікелей салыстырыңыз",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "On an AP exam, you have 15 minutes left and 3 FRQ parts remaining. Each part is worth 3 points. You can fully answer 1 part in 15 minutes, or partially attempt all 3. Which strategy earns more points and why?",
            questionRu: "На AP экзамене осталось 15 минут и 3 части FRQ. Каждая по 3 балла. Можно полностью решить 1 или частично попробовать все 3. Что даст больше баллов?",
            questionKk: "AP емтиханында 15 минут және 3 FRQ бөлімі қалды. Әрқайсысы 3 балл. 15 минутта 1-ін толық шешуге немесе 3-ін ішінара шешуге болады. Қай стратегия көбірек балл береді?",
            answer: "Partially attempt all 3. Full answer on 1 = 3 points max. Partial attempts on 3 (writing setup equations, known formulas, correct units, diagrams) typically earns 1-2 points each = 3-6 points total. AP FRQ grading awards partial credit generously.",
            answerRu: "Частично попробуйте все 3. Полный ответ на 1 = максимум 3 балла. Частичные попытки на 3 (запись начальных уравнений, известных формул, правильных единиц, диаграмм) обычно дают 1-2 балла каждая = 3-6 баллов всего. Оценивание AP FRQ щедро начисляет частичные баллы.",
            answerKk: "3-еуін де ішінара шешіп көріңіз. 1-іне толық жауап = максимум 3 балл. 3-еуіне ішінара әрекет (бастапқы теңдеулерді, белгілі формулаларды, дұрыс өлшем бірліктерін, диаграммаларды жазу) әдетте әрқайсысына 1-2 балл = жалпы 3-6 балл береді. AP FRQ бағалауы ішінара баллды кеңінен береді.",
            hint: "AP FRQ scoring awards partial credit — even writing the correct equation earns points",
            hintRu: "AP FRQ щедро начисляет частичные баллы — даже правильное уравнение приносит баллы",
            hintKk: "AP FRQ бағалауы ішінара кредит береді — тіпті дұрыс теңдеу жазу да балл әкеледі",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You are taking 4 AP exams in May: Calc BC, Physics C, Chemistry, and Biology. You have 8 weeks to prepare and can study 3 hours per day. Your practice scores are: Calc BC 75%, Physics C 55%, Chem 62%, Bio 68%. Create an optimized study allocation plan.",
            questionRu: "В мае вы сдаёте 4 AP экзамена: Calc BC, Physics C, Chemistry, Biology. 8 недель, 3 часа в день. Пробные: Calc BC 75%, Physics C 55%, Chem 62%, Bio 68%. Составьте оптимальный план.",
            questionKk: "Мамырда 4 AP емтихан тапсырасыз: Calc BC, Physics C, Chemistry, Biology. 8 апта, күніне 3 сағат. Сынақ балдары: Calc BC 75%, Physics C 55%, Chem 62%, Bio 68%. Оңтайландырылған оқу жоспарын жасаңыз.",
            answer: "Total: 168 hours. Allocate by gap from 5-threshold (~65%): Physics C (55%, biggest gap) = 30% → 50 hrs. Chemistry (62%) = 25% → 42 hrs. Biology (68%) = 25% → 42 hrs. Calc BC (75%, already above 5 threshold) = 20% → 34 hrs. Schedule: Weeks 1-4 heavy on Physics C and Chem. Weeks 5-6 balanced across all. Weeks 7-8 full practice exams + targeted review. Study chronologically by exam date in May.",
            answerRu: "Всего: 168 часов. Распределение по разрыву от порога 5 (~65%): Physics C (55%, наибольший разрыв) = 30% → 50 ч. Chemistry (62%) = 25% → 42 ч. Biology (68%) = 25% → 42 ч. Calc BC (75%, уже выше порога) = 20% → 34 ч. График: Недели 1-4 упор на Physics C и Chem. Недели 5-6 сбалансировано по всем. Недели 7-8 полные пробные экзамены + целевое повторение. Учитесь хронологически по датам экзаменов в мае.",
            answerKk: "Барлығы: 168 сағат. 5 шегінен алшақтыққа қарай бөлу (~65%): Physics C (55%, ең үлкен алшақтық) = 30% → 50 сағ. Chemistry (62%) = 25% → 42 сағ. Biology (68%) = 25% → 42 сағ. Calc BC (75%, шектен жоғары) = 20% → 34 сағ. Кесте: 1-4 апталар Physics C пен Chem-ге басым. 5-6 апталар барлығына тең бөлінген. 7-8 апталар толық сынақ емтихандар + бағытталған қайталау. Мамырдағы емтихан күндеріне қарай хронологиялық оқыңыз.",
            hint: "Allocate the most time to subjects furthest below the score-5 threshold, and arrange study by exam date",
            hintRu: "Больше времени — предметам далеко от порога 5, и планируйте по дате экзамена",
            hintKk: "5 балл шегінен ең алыс пәндерге көбірек уақыт бөліп, емтихан күніне қарай жоспарлаңыз",
            xp: 20
          }
        ]
      },
      {
        title: "College Credit",
        titleRu: "Университетские кредиты",
        titleKk: "Университеттік кредиттер",
        content: "AP and IB scores can translate into real college credit, saving time and tuition money. Most US universities accept AP scores of 3-5 for credit, though selective schools often require 4 or 5. IB Higher Level scores of 5-7 are widely accepted. Understanding each target university's credit policy is essential for maximizing the value of your AP/IB work.",
        contentRu: "Баллы AP и IB могут конвертироваться в реальные университетские кредиты, экономя время и деньги. Большинство вузов США принимают баллы AP от 3 до 5, хотя селективные часто требуют 4 или 5. Баллы IB Higher Level 5-7 широко принимаются. Понимание кредитной политики каждого целевого вуза необходимо для максимизации ценности работы по AP/IB.",
        contentKk: "AP және IB балдары нақты университеттік кредиттерге айналып, уақыт пен оқу ақысын үнемдей алады. АҚШ университеттерінің көпшілігі 3-тен 5-ке дейін AP балдарын кредитке қабылдайды, бірақ іріктемелі мектептер жиі 4 немесе 5 талап етеді. IB Higher Level 5-7 балдары кеңінен қабылданады. Әр мақсатты университеттің кредит саясатын түсіну AP/IB жұмысыңыздың құндылығын арттыру үшін маңызды.",
        keyFormulas: [
          {
            formula: "Credit savings ≈ (credits earned) × (cost per credit hour) — can save $3,000-$15,000+ per course",
            formulaRu: "Экономия на кредитах ≈ (полученные кредиты) × (стоимость кредит-часа) — можно сэкономить $3,000-$15,000+ за курс",
            formulaKk: "Кредиттен үнемдеу ≈ (алынған кредиттер) × (кредит-сағат құны) — курс сайын $3,000-$15,000+ үнемдеуге болады",
            description: "Financial value of AP/IB credit — varies dramatically by institution",
            descriptionRu: "Финансовая ценность кредитов AP/IB — сильно зависит от учебного заведения",
            descriptionKk: "AP/IB кредиттерінің қаржылық құндылығы — оқу орнына байланысты айтарлықтай өзгереді"
          }
        ],
        solvedExamples: [
          {
            question: "A student scored AP Calc BC: 5, AP Physics C (Mech): 4, AP Chemistry: 3, AP Biology: 4. Their target university gives 8 credits for Calc BC (5), 4 credits for Physics C (4+), 0 credits for Chem (needs 4+), and 4 credits for Bio (4+). At $500/credit hour, how much did they save?",
            questionRu: "Ученик набрал: AP Calc BC: 5, AP Physics C: 4, AP Chem: 3, AP Bio: 4. Вуз даёт 8 кредитов за Calc BC (5), 4 за Physics C (4+), 0 за Chem (нужно 4+), 4 за Bio (4+). При $500/кредит-час, сколько сэкономил?",
            questionKk: "Оқушы AP Calc BC: 5, AP Physics C: 4, AP Chem: 3, AP Bio: 4 алды. Университет Calc BC (5) үшін 8 кредит, Physics C (4+) үшін 4, Chem (4+ қажет) үшін 0, Bio (4+) үшін 4 кредит береді. $500/кредит сағат болса, қанша үнемдеді?",
            steps: [
              { en: "Credits earned: Calc BC (8) + Physics C (4) + Chem (0 — scored 3, needs 4+) + Bio (4) = 16 credits total.", ru: "Полученные кредиты: Calc BC (8) + Physics C (4) + Chem (0 — набрал 3, нужно 4+) + Bio (4) = 16 кредитов.", kk: "Алынған кредиттер: Calc BC (8) + Physics C (4) + Chem (0 — 3 алды, 4+ қажет) + Bio (4) = 16 кредит." },
              { en: "Savings = 16 credits × $500/credit = $8,000 saved. Note: the AP Chem score of 3 earned no credit at this university.", ru: "Экономия = 16 × $500 = $8 000. Примечание: балл 3 по AP Chem не дал кредитов в этом вузе.", kk: "Үнемдеу = 16 × $500 = $8,000. Ескертпе: AP Chem-дегі 3 балл бұл университетте кредит бермеді." }
            ],
            answer: "16 credits earned, $8,000 saved. AP Chem (score 3) earned no credit at this university.",
            answerRu: "Получено 16 кредитов, сэкономлено $8000. AP Chem (балл 3) не дал кредита в этом вузе.",
            answerKk: "16 кредит алынды, $8000 үнемделді. AP Chem (балы 3) бұл университетте кредит бермеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the minimum AP score generally accepted for college credit at most US universities?",
            questionRu: "Какой минимальный балл AP обычно принимается для зачёта в большинстве университетов США?",
            questionKk: "АҚШ университеттерінің көпшілігінде кредит үшін қабылданатын ең төменгі AP балы қандай?",
            answer: "A score of 3 is the minimum accepted at most US universities, though more selective schools may require 4 or 5.",
            answerRu: "Балл 3 — минимум, принимаемый большинством вузов США, хотя более селективные вузы могут требовать 4 или 5.",
            answerKk: "3 балл — АҚШ университеттерінің көпшілігінде қабылданатын ең төменгі балл, бірақ іріктемелі университеттер 4 немесе 5 талап етуі мүмкін.",
            hint: "AP scores range from 1-5, and most universities set the credit threshold at the passing score",
            hintRu: "Баллы AP от 1 до 5, большинство вузов устанавливают порог на проходном балле",
            hintKk: "AP балдары 1-ден 5-ке дейін, университеттердің көпшілігі шекті өту балына қояды",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Compare the credit policies: University A gives credit for AP scores 3+ but caps at 30 credits. University B only accepts 4+ but has no credit cap. A student has twelve AP scores of 3, 3, 3, 4, 4, 4, 5, 5, 5, 3, 4, 5 (each worth 3 credits). How many credits at each university?",
            questionRu: "Сравните: Вуз A принимает AP 3+, но максимум 30 кредитов. Вуз B — только 4+, без ограничений. У студента 12 баллов AP: 3,3,3,4,4,4,5,5,5,3,4,5 (по 3 кредита). Сколько кредитов в каждом?",
            questionKk: "Салыстырыңыз: A университеті AP 3+ қабылдайды, бірақ 30 кредитпен шектеледі. B университеті тек 4+ қабылдайды, шектеусіз. Оқушыда 12 AP балы бар: 3,3,3,4,4,4,5,5,5,3,4,5 (әрқайсысы 3 кредит). Әр университетте қанша кредит?",
            answer: "University A: All 12 qualify (3+) = 36 credits, but capped at 30 credits. University B: 8 scores are 4+ (four 4s and four 5s) = 24 credits (no cap). University A: 30, University B: 24.",
            answerRu: "Вуз A: Все 12 подходят (3+) = 36 кредитов, но ограничено 30 кредитами. Вуз B: 8 баллов 4+ (четыре 4 и четыре 5) = 24 кредита (без лимита). Вуз A: 30, Вуз B: 24.",
            answerKk: "A университеті: Барлық 12 сәйкес келеді (3+) = 36 кредит, бірақ 30 кредитпен шектелген. B университеті: 8 балл 4+ (төрт 4 және төрт 5) = 24 кредит (шектеусіз). A университеті: 30, B университеті: 24.",
            hint: "Count qualifying scores for each policy, then apply any credit caps",
            hintRu: "Подсчитайте проходные баллы для каждой политики, затем примените лимиты",
            hintKk: "Әр саясат бойынша өту балдарын санап, кредит шектерін қолданыңыз",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student is choosing between: (A) Taking 6 AP exams and scoring an average of 3.5, or (B) Taking 4 AP exams and scoring an average of 4.5. Their target university gives 4 credits for scores of 3, 4 credits for 4, and 8 credits for 5. Assuming realistic score distributions, which option likely yields more credits and why?",
            questionRu: "Студент выбирает: (A) Сдать 6 AP экзаменов со средним 3,5 или (B) 4 AP со средним 4,5. Вуз даёт 4 кредита за 3, 4 за 4, 8 за 5. С реалистичным распределением, что даст больше кредитов?",
            questionKk: "Оқушы таңдайды: (A) 6 AP емтихан, орташа 3,5 немесе (B) 4 AP емтихан, орташа 4,5. Университет 3 үшін 4 кредит, 4 үшін 4, 5 үшін 8 кредит береді. Шынайы балл бөлінісімен қайсысы көбірек кредит береді?",
            answer: "Option A (avg 3.5): Realistic distribution might be three 3s and three 4s = 3(4) + 3(4) = 24 credits. Option B (avg 4.5): Realistic distribution might be two 4s and two 5s = 2(4) + 2(8) = 24 credits. Credits are equal, BUT Option B is better: fewer exams means less stress, higher scores look better on transcripts, and scores of 5 are more likely to transfer at selective universities. Quality over quantity.",
            answerRu: "Вариант A (сред. 3,5): Реалистичное распределение — три 3 и три 4 = 3(4) + 3(4) = 24 кредита. Вариант B (сред. 4,5): Реалистичное распределение — два 4 и два 5 = 2(4) + 2(8) = 24 кредита. Кредиты равны, НО вариант B лучше: меньше экзаменов — меньше стресса, высокие баллы лучше смотрятся в транскрипте, а баллы 5 с большей вероятностью зачтутся в селективных вузах. Качество важнее количества.",
            answerKk: "A нұсқасы (орт. 3,5): Шынайы бөлініс — үш 3 және үш 4 = 3(4) + 3(4) = 24 кредит. B нұсқасы (орт. 4,5): Шынайы бөлініс — екі 4 және екі 5 = 2(4) + 2(8) = 24 кредит. Кредиттер тең, БІРАҚ B нұсқасы жақсырақ: аз емтихан — аз стресс, жоғары балдар транскриптте жақсы көрінеді, әрі 5 балдар іріктемелі университеттерде есептелу ықтималдығы жоғары. Сан емес, сапа маңызды.",
            hint: "Calculate credits for realistic score distributions, then consider factors beyond raw credit count",
            hintRu: "Рассчитайте кредиты для реалистичных распределений, затем учтите факторы помимо количества кредитов",
            hintKk: "Шынайы балл бөлінісі үшін кредиттерді есептеп, шикі кредит санынан тыс факторларды қарастырыңыз",
            xp: 20
          }
        ]
      }
    ]
  }
};