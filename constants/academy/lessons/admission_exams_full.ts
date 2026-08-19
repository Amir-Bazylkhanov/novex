import type { LessonContent } from '../lessonData.ts';

export const ADMISSION_EXAMS_FULL: Record<string, LessonContent> = {
  "Admission Exams_8": {
    planetName: "Admission Exams",
    introduction: {
      en: "Welcome to Admission Exams for Grade 8! Build foundational test-taking skills including reading comprehension, vocabulary, math word problems, grammar, and smart strategies for multiple-choice tests that will prepare you for future standardized exams.",
      ru: "Добро пожаловать в Вступительные экзамены для 8 класса! Освойте базовые навыки сдачи тестов, включая понимание прочитанного, словарный запас, математические задачи, грамматику и стратегии для тестов с множественным выбором, которые подготовят вас к будущим стандартизированным экзаменам."
    },
    sections: [
      {
        title: "Test-Taking Basics",
        titleRu: "Основы сдачи тестов",
        titleKk: "Тест тапсырудың негіздері",
        content: "Standardized tests measure your knowledge using a fixed format and scoring system. Understanding the test structure before exam day reduces anxiety and improves performance. Always read all instructions carefully, manage your time, and never leave a question blank if there is no penalty for guessing.",
        contentRu: "Стандартизированные тесты измеряют ваши знания с помощью фиксированного формата и системы оценки. Понимание структуры теста до дня экзамена снижает тревогу и улучшает результаты. Всегда внимательно читайте инструкции, управляйте временем и никогда не оставляйте вопрос пустым, если за угадывание нет штрафа.",
        contentKk: "Стандартталған тесттер сіздің білімді бекітілген формат пен бағалау жүйесі арқылы өлшейді. Емтихан күніне дейін тест құрылымын түсіну алаңдаушылықты азайтады және нәтижені жақсартады. Нұсқауларды мұқият оқыңыз, уақытты басқарыңыз және болжау үшін айыппұл болмаса, ешқашан сұрақты бос қалдырмаңыз.",
        keyFormulas: [
          {
            formula: "Score = (Correct Answers × Points per Question) − (Wrong Answers × Penalty)",
            description: "Basic scoring formula for standardized tests",
            descriptionRu: "Базовая формула оценки стандартизированных тестов",
            descriptionKk: "Стандартталған тесттердің негізгі бағалау формуласы"
          },
          {
            formula: "Time per Question = Total Time ÷ Number of Questions",
            description: "How to calculate the average time you can spend on each question",
            descriptionRu: "Как рассчитать среднее время на каждый вопрос",
            descriptionKk: "Әр сұраққа жұмсалатын орташа уақытты қалай есептеу керек"
          }
        ],
        solvedExamples: [
          {
            question: "A test has 60 questions and lasts 90 minutes with no penalty for wrong answers. How much time should you spend per question, and what should you do if you are stuck?",
            questionRu: "Тест содержит 60 вопросов и длится 90 минут без штрафа за неправильные ответы. Сколько времени нужно тратить на вопрос и что делать, если вы застряли?",
            questionKk: "Тестте 60 сұрақ бар және 90 минутқа созылады, қате жауаптар үшін айыппұл жоқ. Әр сұраққа қанша уақыт жұмсау керек және тұрып қалсаңыз не істеу керек?",
            steps: [
              { en: "Calculate time per question: 90 ÷ 60 = 1.5 minutes per question.", ru: "Рассчитайте время на вопрос: 90 ÷ 60 = 1,5 минуты на вопрос.", kk: "Сұраққа уақытты есептеңіз: 90 ÷ 60 = 1,5 минут." },
              { en: "Since there is no penalty, if stuck for more than 1.5 minutes, make your best guess, mark it, and move on — return later if time allows.", ru: "Поскольку штрафа нет, если вы застряли более чем на 1,5 минуты, сделайте лучшую догадку, отметьте вопрос и двигайтесь дальше — вернитесь позже, если останется время.", kk: "Айыппұл болмағандықтан, 1,5 минуттан артық тұрып қалсаңыз, ең жақсы болжамыңызды жасап, белгілеп, әрі қарай жүріңіз — уақыт қалса қайтып оралыңыз." }
            ],
            answer: "1.5 minutes per question. If stuck, guess and move on since there is no penalty."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A test has 40 questions and 60 minutes. How many minutes per question do you have?",
            questionRu: "Тест содержит 40 вопросов и длится 60 минут. Сколько минут на вопрос у вас есть?",
            questionKk: "Тестте 40 сұрақ бар және 60 минутқа созылады. Әр сұраққа қанша минут бар?",
            answer: "1.5 minutes per question",
            hint: "Divide total time by total questions.",
            hintRu: "Разделите общее время на количество вопросов.",
            hintKk: "Жалпы уақытты сұрақтар санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You answered 45 out of 50 questions correctly. Each correct answer is worth 2 points and each wrong answer loses 0.5 points. What is your score?",
            questionRu: "Вы ответили правильно на 45 из 50 вопросов. Каждый правильный ответ стоит 2 балла, каждый неправильный теряет 0,5 балла. Каков ваш результат?",
            questionKk: "Сіз 50 сұрақтың 45-іне дұрыс жауап бердіңіз. Әр дұрыс жауап 2 ұпай, әр қате жауап 0,5 ұпай жоғалтады. Нәтижеңіз қандай?",
            answer: "87.5 points (45×2 − 5×0.5 = 90 − 2.5 = 87.5)",
            hint: "Calculate correct points first, then subtract the penalty for wrong answers.",
            hintRu: "Сначала рассчитайте баллы за правильные ответы, затем вычтите штраф за неправильные.",
            hintKk: "Алдымен дұрыс жауаптардың ұпайын есептеңіз, содан кейін қате жауаптардың айыппұлын алып тастаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A test has 80 questions in 100 minutes. You spend the first 20 minutes on 10 hard questions. How much time per question do you have left for the remaining 70 questions? Is this a good strategy?",
            questionRu: "Тест содержит 80 вопросов за 100 минут. Вы потратили первые 20 минут на 10 сложных вопросов. Сколько времени на вопрос осталось для оставшихся 70? Хорошая ли это стратегия?",
            questionKk: "Тестте 100 минутта 80 сұрақ бар. Алғашқы 20 минутты 10 қиын сұраққа жұмсадыңыз. Қалған 70 сұраққа қанша уақыт қалды? Бұл жақсы стратегия ма?",
            answer: "80 ÷ 100 = 1.15 min/question remaining. No — spending 2 min each on hard questions first leaves only ~1.14 min for the rest, below the original 1.25 average. Skip hard questions and return later.",
            hint: "Compare the leftover pace to the original pace of 100÷80.",
            hintRu: "Сравните оставшийся темп с первоначальным темпом 100÷80.",
            hintKk: "Қалған қарқынды 100÷80 бастапқы қарқынмен салыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Reading Comprehension",
        titleRu: "Понимание прочитанного",
        titleKk: "Оқылғанды түсіну",
        content: "Reading comprehension tests your ability to understand, analyze, and draw conclusions from written passages. The key skills are identifying the main idea, understanding supporting details, and making inferences. Always read the questions first so you know what to look for in the passage.",
        contentRu: "Понимание прочитанного проверяет вашу способность понимать, анализировать и делать выводы из письменных текстов. Ключевые навыки — определение главной мысли, понимание подтверждающих деталей и умозаключения. Всегда сначала читайте вопросы, чтобы знать, что искать в тексте.",
        contentKk: "Оқылғанды түсіну жазбаша мәтіндерден түсіну, талдау және қорытынды жасау қабілетіңізді тексереді. Негізгі дағдылар — басты ойды анықтау, қосымша мәліметтерді түсіну және тұжырымдар жасау. Мәтіннен нені іздеу керектігін білу үшін әрқашан алдымен сұрақтарды оқыңыз.",
        keyFormulas: [
          {
            formula: "Main Idea = Topic + Author's Point about the Topic",
            description: "How to identify the central message of a passage",
            descriptionRu: "Как определить центральную мысль текста",
            descriptionKk: "Мәтіннің негізгі ойын қалай анықтау керек"
          },
          {
            formula: "Inference = Evidence from Text + Background Knowledge",
            description: "How to draw logical conclusions beyond what is explicitly stated",
            descriptionRu: "Как делать логические выводы за пределами прямо сказанного",
            descriptionKk: "Тікелей айтылғаннан тыс логикалық қорытынды қалай жасау керек"
          }
        ],
        solvedExamples: [
          {
            question: "A passage states: 'The Arctic fox changes its fur color from brown in summer to white in winter.' What can you infer about why this happens?",
            questionRu: "В тексте говорится: 'Песец меняет цвет меха с коричневого летом на белый зимой.' Какой вывод можно сделать о причине этого?",
            questionKk: "Мәтінде: 'Арктикалық түлкі жазда қоңыр түстен қыста ақ түске жүнін өзгертеді' делінген. Бұл неліктен болатыны туралы қандай тұжырым жасауға болады?",
            steps: [
              { en: "Identify the evidence: the fox's fur matches the seasonal environment color (brown earth in summer, white snow in winter).", ru: "Определите доказательство: мех песца совпадает с цветом сезонной среды (коричневая земля летом, белый снег зимой).", kk: "Дәлелді анықтаңыз: түлкінің жүні маусымдық орта түсіне сәйкес келеді (жазда қоңыр жер, қыста ақ қар)." },
              { en: "Apply background knowledge: animals that blend with their surroundings are using camouflage to hide from predators or sneak up on prey.", ru: "Примените фоновые знания: животные, сливающиеся с окружением, используют камуфляж для защиты от хищников или подкрадывания к добыче.", kk: "Негізгі білімді қолданыңыз: қоршаған ортамен сіңіп кететін жануарлар жыртқыштардан жасырыну немесе жемтікке жақындау үшін камуфляж қолданады." }
            ],
            answer: "The fox changes fur color for camouflage — to blend with seasonal surroundings and avoid predators or catch prey."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main idea of a passage that describes how bees pollinate flowers, help produce honey, and support crop growth?",
            questionRu: "Какова главная мысль текста, описывающего, как пчёлы опыляют цветы, производят мёд и поддерживают рост урожая?",
            questionKk: "Аралардың гүлдерді тозаңдандыруын, бал шығаруын және егін өсуіне көмегін сипаттайтын мәтіннің негізгі ойы қандай?",
            answer: "Bees play a vital role in agriculture and the ecosystem.",
            hint: "Look for the common thread connecting all three details.",
            hintRu: "Найдите общую нить, связывающую все три детали.",
            hintKk: "Үш мәліметті байланыстыратын ортақ жіпті табыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A passage says: 'Despite the heavy rain, the outdoor concert continued and fans cheered loudly.' What can you infer about the fans?",
            questionRu: "В тексте сказано: 'Несмотря на сильный дождь, концерт на открытом воздухе продолжился, и фанаты громко аплодировали.' Что можно сказать о фанатах?",
            questionKk: "Мәтінде: 'Қатты жаңбырға қарамастан, ашық аспан астындағы концерт жалғасты және жанкүйерлер қатты қошеметтеді' делінген. Жанкүйерлер туралы не тұжырымдауға болады?",
            answer: "The fans were very dedicated and passionate about the performer, since they stayed and cheered despite bad weather.",
            hint: "Think about what the fans' behavior in bad weather tells you about their feelings.",
            hintRu: "Подумайте, что поведение фанатов в плохую погоду говорит об их чувствах.",
            hintKk: "Нашар ауа-райындағы жанкүйерлердің мінез-құлқы олардың сезімдері туралы не айтатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Read two statements: (1) 'City A has invested heavily in public transit for 10 years.' (2) 'City A has 40% less traffic congestion than similar-sized cities.' What is the relationship between these statements?",
            questionRu: "Прочитайте два утверждения: (1) 'Город А активно инвестировал в общественный транспорт 10 лет.' (2) 'В городе А на 40% меньше пробок, чем в городах аналогичного размера.' Какова связь между утверждениями?",
            questionKk: "Екі мәлімдемені оқыңыз: (1) 'А қаласы 10 жыл бойы қоғамдық көлікке көп қаржы салды.' (2) 'А қаласында ұқсас қалалардан 40% аз кептеліс бар.' Осы мәлімдемелер арасындағы байланыс қандай?",
            answer: "Cause and effect — the investment in public transit (cause) likely led to reduced traffic congestion (effect) as more people chose public transport over cars.",
            hint: "Ask yourself: could one statement explain the other?",
            hintRu: "Спросите себя: может ли одно утверждение объяснить другое?",
            hintKk: "Өзіңізден сұраңыз: бір мәлімдеме екіншісін түсіндіре ала ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Vocabulary Building",
        titleRu: "Расширение словарного запаса",
        titleKk: "Сөздік қорды кеңейту",
        content: "A strong vocabulary helps you understand test passages and answer questions accurately. Context clues — words and sentences surrounding an unknown word — are your best tool for figuring out meaning during a test. Learning common roots, prefixes, and suffixes lets you decode unfamiliar words quickly.",
        contentRu: "Богатый словарный запас помогает понимать тексты тестов и точно отвечать на вопросы. Контекстные подсказки — слова и предложения вокруг незнакомого слова — лучший инструмент для определения значения во время теста. Изучение корней, приставок и суффиксов позволяет быстро расшифровывать незнакомые слова.",
        contentKk: "Мықты сөздік қор тест мәтіндерін түсінуге және сұрақтарға дәл жауап беруге көмектеседі. Контекст белгілері — белгісіз сөзді қоршаған сөздер мен сөйлемдер — тест кезінде мағынаны анықтаудың ең жақсы құралы. Түбірлерді, префикстерді және суффикстерді үйрену белгісіз сөздерді тез ашуға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Word Meaning ≈ Prefix + Root + Suffix",
            description: "Break a word into its parts to determine its meaning",
            descriptionRu: "Разбейте слово на части, чтобы определить его значение",
            descriptionKk: "Сөзді бөліктерге бөліп мағынасын анықтаңыз"
          },
          {
            formula: "Context Clue Types: Definition, Synonym, Antonym, Example",
            description: "Four ways surrounding text can reveal a word's meaning",
            descriptionRu: "Четыре способа, которыми окружающий текст может раскрыть значение слова",
            descriptionKk: "Қоршаған мәтін сөздің мағынасын ашатын төрт тәсіл"
          }
        ],
        solvedExamples: [
          {
            question: "What does 'benevolent' mean in this sentence: 'The benevolent teacher stayed after school every day to help struggling students'?",
            questionRu: "Что означает 'benevolent' в предложении: 'Доброжелательный учитель оставался после школы каждый день, чтобы помочь отстающим ученикам'?",
            questionKk: "'Benevolent' сөзі мына сөйлемде нені білдіреді: 'Мейірімді мұғалім күнде мектептен кейін қиналған оқушыларға көмектесу үшін қалды'?",
            steps: [
              { en: "Use context clues: the teacher 'stayed after school every day to help struggling students' — this shows kindness and selflessness.", ru: "Используйте контекст: учитель 'оставался после школы каждый день, чтобы помочь отстающим ученикам' — это показывает доброту и бескорыстие.", kk: "Контекст белгілерін қолданыңыз: мұғалім 'күнде мектептен кейін қиналған оқушыларға көмектесу үшін қалды' — бұл мейірімділік пен өзімшілсіздікті көрсетеді." },
              { en: "Use word parts: 'bene-' means good or well (like 'benefit'), '-volent' relates to wishing (like 'voluntary'). Together: well-wishing, kind.", ru: "Используйте части слова: 'bene-' означает хороший (как 'benefit'), '-volent' связано с желанием (как 'voluntary'). Вместе: доброжелательный.", kk: "Сөз бөліктерін қолданыңыз: 'bene-' жақсы дегенді білдіреді ('benefit' сияқты), '-volent' тілек білдіруге байланысты ('voluntary' сияқты). Бірге: мейірімді." }
            ],
            answer: "Benevolent means kind, generous, and well-meaning."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the prefix 'un-' mean in 'unhappy', 'unkind', and 'unusual'?",
            questionRu: "Что означает приставка 'un-' в словах 'unhappy', 'unkind' и 'unusual'?",
            questionKk: "'Unhappy', 'unkind' және 'unusual' сөздеріндегі 'un-' префиксі нені білдіреді?",
            answer: "'Un-' means 'not' — it reverses the meaning of the word (unhappy = not happy).",
            hint: "Compare each word with and without 'un-'.",
            hintRu: "Сравните каждое слово с приставкой 'un-' и без неё.",
            hintKk: "Әр сөзді 'un-' бар және жоқ нұсқасымен салыстырыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "In the sentence 'The arid desert receives less than 25 cm of rain per year,' what does 'arid' mean? What context clue helps you?",
            questionRu: "В предложении 'Засушливая пустыня получает менее 25 см осадков в год,' что означает 'arid'? Какая контекстная подсказка помогает?",
            questionKk: "'Құрғақ шөл жылына 25 см-ден аз жауын-шашын алады' сөйлемінде 'arid' нені білдіреді? Қандай контекст белгісі көмектеседі?",
            answer: "Arid means very dry. The context clue is 'less than 25 cm of rain per year' combined with 'desert,' which both indicate dryness.",
            hint: "What kind of place gets very little rain?",
            hintRu: "Какое место получает очень мало дождей?",
            hintKk: "Қандай жер өте аз жаңбыр алады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Break down the word 'autobiography' into its parts and explain its meaning. Then give two other words that share the root 'graph'.",
            questionRu: "Разберите слово 'autobiography' на части и объясните его значение. Затем назовите два других слова с корнем 'graph'.",
            questionKk: "'Autobiography' сөзін бөліктерге бөліп мағынасын түсіндіріңіз. Содан кейін 'graph' түбірі бар екі басқа сөз айтыңыз.",
            answer: "Auto (self) + bio (life) + graph (write) = a self-written life story. Other words: biography (life writing by someone else), geography (earth writing/mapping).",
            hint: "Think about what 'auto' means (self), 'bio' means (life), and 'graph' means (write).",
            hintRu: "Подумайте, что означает 'auto' (сам), 'bio' (жизнь) и 'graph' (писать).",
            hintKk: "'Auto' (өзі), 'bio' (өмір) және 'graph' (жазу) нені білдіретінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Math Word Problems",
        titleRu: "Математические текстовые задачи",
        titleKk: "Математикалық мәтінді есептер",
        content: "Math word problems test your ability to translate real-world situations into mathematical equations. The key is to identify what is given, what is asked, and which operation to use. Drawing a diagram or writing out the known values helps organize your thinking before solving.",
        contentRu: "Текстовые задачи проверяют вашу способность переводить реальные ситуации в математические уравнения. Главное — определить, что дано, что спрашивается и какую операцию использовать. Рисование схемы или запись известных значений помогает организовать мышление перед решением.",
        contentKk: "Мәтінді есептер нақты жағдайларды математикалық теңдеулерге аудару қабілетіңізді тексереді. Негізгісі — нені берілгенін, нені сұрағанын және қандай амалды қолдану керектігін анықтау. Сызба салу немесе белгілі мәндерді жазу шешімге дейін ойлауды ұйымдастыруға көмектеседі.",
        keyFormulas: [
          {
            formula: "Distance = Speed × Time",
            description: "Fundamental formula for motion problems",
            descriptionRu: "Основная формула для задач на движение",
            descriptionKk: "Қозғалыс есептерінің негізгі формуласы"
          },
          {
            formula: "Total Cost = Unit Price × Quantity",
            description: "Basic formula for price and shopping problems",
            descriptionRu: "Базовая формула для задач на цены и покупки",
            descriptionKk: "Баға және сатып алу есептерінің негізгі формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "A train travels at 80 km/h for 2.5 hours. How far does it travel?",
            questionRu: "Поезд движется со скоростью 80 км/ч в течение 2,5 часов. Какое расстояние он проедет?",
            questionKk: "Пойыз 80 км/сағ жылдамдықпен 2,5 сағат жүреді. Ол қанша қашықтық жүреді?",
            steps: [
              { en: "Identify the formula: Distance = Speed × Time.", ru: "Определите формулу: Расстояние = Скорость × Время.", kk: "Формуланы анықтаңыз: Қашықтық = Жылдамдық × Уақыт." },
              { en: "Substitute values: Distance = 80 × 2.5 = 200 km.", ru: "Подставьте значения: Расстояние = 80 × 2,5 = 200 км.", kk: "Мәндерді қойыңыз: Қашықтық = 80 × 2,5 = 200 км." }
            ],
            answer: "200 km"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A book costs $12. You buy 3 copies. How much do you spend in total?",
            questionRu: "Книга стоит 12 долларов. Вы покупаете 3 экземпляра. Сколько вы потратите?",
            questionKk: "Кітап 12 доллар тұрады. Сіз 3 дана сатып аласыз. Барлығы қанша жұмсайсыз?",
            answer: "$36 (12 × 3 = 36)",
            hint: "Multiply the price by the number of copies.",
            hintRu: "Умножьте цену на количество экземпляров.",
            hintKk: "Бағаны дана санына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Two cyclists start from the same point riding in opposite directions. One rides at 15 km/h and the other at 20 km/h. How far apart are they after 3 hours?",
            questionRu: "Два велосипедиста стартуют из одной точки в противоположных направлениях. Один едет со скоростью 15 км/ч, другой — 20 км/ч. Какое расстояние между ними через 3 часа?",
            questionKk: "Екі велосипедші бір нүктеден қарама-қарсы бағытта жүреді. Бірі 15 км/сағ, екіншісі 20 км/сағ жылдамдықпен жүреді. 3 сағаттан кейін олардың арасы қандай?",
            answer: "105 km ((15 + 20) × 3 = 105)",
            hint: "When moving in opposite directions, add their speeds together.",
            hintRu: "При движении в противоположных направлениях сложите их скорости.",
            hintKk: "Қарама-қарсы бағытта қозғалғанда жылдамдықтарын қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A store sells shirts for $25 each and offers a 'buy 3, get 1 free' deal. How much do you pay for 7 shirts?",
            questionRu: "Магазин продаёт рубашки по 25 долларов и предлагает акцию «купи 3, получи 1 бесплатно». Сколько вы заплатите за 7 рубашек?",
            questionKk: "Дүкен көйлектерді 25 доллардан сатады және '3 сатып ал, 1 тегін ал' акциясын ұсынады. 7 көйлекке қанша төлейсіз?",
            answer: "$150. For every 4 shirts you pay for 3. 7 shirts = 1 group of 4 (pay for 3) + 3 more = 6 paid × $25 = $150.",
            hint: "Figure out how many free shirts you get with 7 total.",
            hintRu: "Определите, сколько бесплатных рубашек вы получите при покупке 7.",
            hintKk: "7 көйлекпен қанша тегін көйлек алатыныңызды анықтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Data & Graphs",
        titleRu: "Данные и графики",
        titleKk: "Деректер мен графиктер",
        content: "Tests often include questions about bar graphs, line graphs, pie charts, and tables. You need to read values accurately, compare data points, and identify trends. Always check the axis labels, units, and scale before answering any question about a graph.",
        contentRu: "Тесты часто включают вопросы о столбчатых диаграммах, линейных графиках, круговых диаграммах и таблицах. Нужно точно считывать значения, сравнивать данные и выявлять тенденции. Всегда проверяйте подписи осей, единицы измерения и масштаб перед ответом.",
        contentKk: "Тесттерде жиі бағаналы диаграммалар, сызықтық графиктер, дөңгелек диаграммалар және кестелер туралы сұрақтар болады. Мәндерді дәл оқу, деректерді салыстыру және трендтерді анықтау қажет. Жауап бермес бұрын әрқашан ось белгілерін, бірліктерді және масштабты тексеріңіз.",
        keyFormulas: [
          {
            formula: "Mean (Average) = Sum of all values ÷ Number of values",
            description: "How to calculate the average of a data set",
            descriptionRu: "Как рассчитать среднее значение набора данных",
            descriptionKk: "Деректер жиынының орташа мәнін қалай есептеу керек"
          },
          {
            formula: "Percentage of a category = (Category value ÷ Total) × 100",
            description: "How to find what percentage one slice of a pie chart represents",
            descriptionRu: "Как найти, какой процент представляет один сектор круговой диаграммы",
            descriptionKk: "Дөңгелек диаграмманың бір секторы қанша пайызды білдіретінін қалай табу керек"
          }
        ],
        solvedExamples: [
          {
            question: "A bar graph shows monthly sales: Jan=200, Feb=350, Mar=300, Apr=450. What is the average monthly sales and which month had the biggest increase?",
            questionRu: "Столбчатая диаграмма показывает продажи по месяцам: Янв=200, Фев=350, Мар=300, Апр=450. Каковы средние продажи и в каком месяце был наибольший рост?",
            questionKk: "Бағаналы диаграмма айлық сатылымдарды көрсетеді: Қаңт=200, Ақп=350, Нау=300, Сәу=450. Орташа айлық сатылым қандай және қай айда ең үлкен өсім болды?",
            steps: [
              { en: "Calculate average: (200 + 350 + 300 + 450) ÷ 4 = 1300 ÷ 4 = 325.", ru: "Рассчитайте среднее: (200 + 350 + 300 + 450) ÷ 4 = 1300 ÷ 4 = 325.", kk: "Орташаны есептеңіз: (200 + 350 + 300 + 450) ÷ 4 = 1300 ÷ 4 = 325." },
              { en: "Find biggest increase: Jan→Feb = +150, Feb→Mar = −50, Mar→Apr = +150. Jan→Feb and Mar→Apr are tied at +150.", ru: "Найдите наибольший рост: Янв→Фев = +150, Фев→Мар = −50, Мар→Апр = +150. Янв→Фев и Мар→Апр одинаковы (+150).", kk: "Ең үлкен өсімді табыңыз: Қаңт→Ақп = +150, Ақп→Нау = −50, Нау→Сәу = +150. Қаңт→Ақп және Нау→Сәу тең (+150)." }
            ],
            answer: "Average = 325 units. Biggest increase = +150, occurring Jan→Feb and Mar→Apr."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Find the average of these test scores: 85, 90, 78, 92, 80.",
            questionRu: "Найдите среднее значение этих баллов: 85, 90, 78, 92, 80.",
            questionKk: "Мына баллдардың орташасын табыңыз: 85, 90, 78, 92, 80.",
            answer: "85 (sum = 425, divided by 5 = 85)",
            hint: "Add all scores together, then divide by 5.",
            hintRu: "Сложите все баллы, затем разделите на 5.",
            hintKk: "Барлық баллдарды қосыңыз, содан кейін 5-ке бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A pie chart shows a school's club membership: Sports 40%, Music 25%, Art 20%, Science 15%. If the school has 200 students in clubs, how many are in Sports and how many more are in Music than Science?",
            questionRu: "Круговая диаграмма показывает членство в кружках: Спорт 40%, Музыка 25%, Искусство 20%, Наука 15%. Если в кружках 200 учеников, сколько в Спорте и на сколько Музыка больше Науки?",
            questionKk: "Дөңгелек диаграмма үйірме мүшелігін көрсетеді: Спорт 40%, Музыка 25%, Өнер 20%, Ғылым 15%. Үйірмелерде 200 оқушы болса, Спортта қанша және Музыка Ғылымнан қаншаға көп?",
            answer: "Sports = 80 (40% of 200). Music − Science = 50 − 30 = 20 more students in Music.",
            hint: "Convert each percentage to a number by multiplying by 200 and dividing by 100.",
            hintRu: "Переведите каждый процент в число, умножив на 200 и разделив на 100.",
            hintKk: "Әр пайызды санға айналдырыңыз: 200-ге көбейтіп, 100-ге бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A line graph shows temperature over 5 days: Mon=18°C, Tue=22°C, Wed=20°C, Thu=25°C, Fri=15°C. What is the range, and between which two consecutive days was the biggest temperature drop?",
            questionRu: "Линейный график показывает температуру за 5 дней: Пн=18°C, Вт=22°C, Ср=20°C, Чт=25°C, Пт=15°C. Каков размах и между какими днями было наибольшее падение?",
            questionKk: "Сызықтық график 5 күн температурасын көрсетеді: Дс=18°C, Сс=22°C, Ср=20°C, Бс=25°C, Жм=15°C. Ауқым қандай және қай екі күн арасында ең үлкен төмендеу болды?",
            answer: "Range = 25 − 15 = 10°C. Biggest drop = Thu→Fri (25 − 15 = 10°C drop).",
            hint: "Range = highest value minus lowest value. Check each day-to-day change.",
            hintRu: "Размах = наибольшее значение минус наименьшее. Проверьте изменение между каждыми днями.",
            hintKk: "Ауқым = ең жоғары мән минус ең төменгі. Әр күндік өзгерісті тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Grammar Fundamentals",
        titleRu: "Основы грамматики",
        titleKk: "Грамматика негіздері",
        content: "Grammar questions on tests check your knowledge of sentence structure, subject-verb agreement, punctuation, and common errors. A complete sentence needs a subject and a verb and expresses a complete thought. The subject and verb must agree in number — singular subjects take singular verbs.",
        contentRu: "Грамматические вопросы тестов проверяют знание структуры предложений, согласования подлежащего и сказуемого, пунктуации и типичных ошибок. Полное предложение требует подлежащего и сказуемого и выражает законченную мысль. Подлежащее и сказуемое должны согласовываться в числе.",
        contentKk: "Тесттердегі грамматика сұрақтары сөйлем құрылымын, бастауыш-баяндауыш сәйкестігін, тыныс белгілерін және жиі кездесетін қателерді тексереді. Толық сөйлемде бастауыш пен баяндауыш болуы және аяқталған ойды білдіруі қажет. Бастауыш пен баяндауыш санда сәйкес келуі тиіс.",
        keyFormulas: [
          {
            formula: "Subject-Verb Agreement: Singular subject → singular verb; Plural subject → plural verb",
            description: "The fundamental rule for matching subjects with their verbs",
            descriptionRu: "Основное правило согласования подлежащего со сказуемым",
            descriptionKk: "Бастауышты баяндауышпен сәйкестендірудің негізгі ережесі"
          },
          {
            formula: "Comma Rules: Lists, Introductory phrases, Compound sentences (FANBOYS), Appositives",
            description: "Four key situations that require commas",
            descriptionRu: "Четыре ключевые ситуации, требующие запятой",
            descriptionKk: "Үтір қажет төрт негізгі жағдай"
          }
        ],
        solvedExamples: [
          {
            question: "Choose the correct sentence: (A) 'The group of students are ready.' (B) 'The group of students is ready.'",
            questionRu: "Выберите правильное предложение: (A) 'The group of students are ready.' (B) 'The group of students is ready.'",
            questionKk: "Дұрыс сөйлемді таңдаңыз: (A) 'The group of students are ready.' (B) 'The group of students is ready.'",
            steps: [
              { en: "Identify the subject: 'group' is the subject (singular), not 'students' (which is part of the prepositional phrase 'of students').", ru: "Определите подлежащее: 'group' — подлежащее (единственное число), а не 'students' (часть предложного оборота 'of students').", kk: "Бастауышты анықтаңыз: 'group' — бастауыш (жекеше), 'students' емес (ол 'of students' предложды тіркесінің бөлігі)." },
              { en: "Apply subject-verb agreement: singular subject 'group' requires singular verb 'is'. Answer is (B).", ru: "Примените согласование: единственное подлежащее 'group' требует глагол 'is'. Ответ — (B).", kk: "Бастауыш-баяндауыш сәйкестігін қолданыңыз: жекеше бастауыш 'group' жекеше 'is' етістігін талап етеді. Жауап — (B)." }
            ],
            answer: "(B) 'The group of students is ready.' — 'group' is singular."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Choose the correct verb: 'She (run/runs) every morning.'",
            questionRu: "Выберите правильный глагол: 'She (run/runs) every morning.'",
            questionKk: "Дұрыс етістікті таңдаңыз: 'She (run/runs) every morning.'",
            answer: "'runs' — singular subject 'She' requires singular verb 'runs'.",
            hint: "'She' is a singular subject. What form of the verb matches?",
            hintRu: "'She' — единственное число. Какая форма глагола подходит?",
            hintKk: "'She' — жекеше. Қай етістік формасы сәйкес?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Fix this sentence: 'Me and him went to the store yesterday and buyed some groceries.'",
            questionRu: "Исправьте предложение: 'Me and him went to the store yesterday and buyed some groceries.'",
            questionKk: "Осы сөйлемді түзетіңіз: 'Me and him went to the store yesterday and buyed some groceries.'",
            answer: "'He and I went to the store yesterday and bought some groceries.' (subject pronouns + correct past tense of 'buy')",
            hint: "Fix the pronoun case (subject position) and the irregular past tense.",
            hintRu: "Исправьте падеж местоимений (позиция подлежащего) и неправильное прошедшее время.",
            hintKk: "Есімдіктің септігін (бастауыш орны) және дұрыс емес өткен шақты түзетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Add commas where needed: 'After finishing her homework Sarah who is an excellent student went to the library to study for the math science and history exams.'",
            questionRu: "Поставьте запятые: 'After finishing her homework Sarah who is an excellent student went to the library to study for the math science and history exams.'",
            questionKk: "Үтірлерді қойыңыз: 'After finishing her homework Sarah who is an excellent student went to the library to study for the math science and history exams.'",
            answer: "'After finishing her homework, Sarah, who is an excellent student, went to the library to study for the math, science, and history exams.' (introductory phrase + appositive clause + list commas)",
            hint: "Look for an introductory phrase, a non-essential clause, and a list of three items.",
            hintRu: "Ищите вводную фразу, вводное придаточное предложение и список из трёх элементов.",
            hintKk: "Кіріспе сөз тіркесін, қосымша сөйлемшені және үш элементтен тұратын тізімді іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Time Management",
        titleRu: "Управление временем",
        titleKk: "Уақытты басқару",
        content: "Effective time management during tests means allocating your minutes wisely across sections and questions. The two-pass strategy is highly effective: on the first pass, answer all easy questions quickly; on the second pass, tackle harder ones with remaining time. This ensures you collect all the easy points first.",
        contentRu: "Эффективное управление временем на тестах означает разумное распределение минут между разделами и вопросами. Стратегия двух проходов очень эффективна: на первом проходе быстро ответьте на лёгкие вопросы; на втором — решите сложные за оставшееся время. Это гарантирует сбор всех лёгких баллов.",
        contentKk: "Тест кезінде уақытты тиімді басқару минуттарды бөлімдер мен сұрақтар арасында ақылмен бөлуді білдіреді. Екі өту стратегиясы өте тиімді: бірінші өтуде барлық оңай сұрақтарға тез жауап беріңіз; екінші өтуде қалған уақытта қиындарын шешіңіз. Бұл алдымен барлық оңай ұпайларды жинауды қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "Two-Pass Strategy: Pass 1 (easy questions, ~60% of time) → Pass 2 (hard questions, ~40% of time)",
            description: "Split your test time into two rounds for maximum efficiency",
            descriptionRu: "Разделите время теста на два раунда для максимальной эффективности",
            descriptionKk: "Максималды тиімділік үшін тест уақытын екі раундқа бөліңіз"
          }
        ],
        solvedExamples: [
          {
            question: "You have a 60-minute test with 3 sections: Section A (20 easy questions), Section B (15 medium questions), Section C (5 hard questions). How should you allocate your time?",
            questionRu: "У вас 60-минутный тест с 3 разделами: Раздел A (20 лёгких), Раздел B (15 средних), Раздел C (5 сложных). Как распределить время?",
            questionKk: "Сізде 3 бөлімді 60 минуттық тест бар: A бөлімі (20 оңай), B бөлімі (15 орташа), C бөлімі (5 қиын). Уақытты қалай бөлесіз?",
            steps: [
              { en: "Weight by difficulty: easy ~1 min each (20 min), medium ~2 min each (30 min), hard ~2 min each (10 min) = 60 min total.", ru: "Взвешивайте по сложности: лёгкие ~1 мин (20 мин), средние ~2 мин (30 мин), сложные ~2 мин (10 мин) = 60 мин.", kk: "Қиындық бойынша бөліңіз: оңай ~1 мин (20 мин), орташа ~2 мин (30 мин), қиын ~2 мин (10 мин) = 60 мин." },
              { en: "Apply two-pass: First pass — complete Section A and attempt all of B (~50 min). Second pass — tackle C and review flagged B questions (~10 min).", ru: "Два прохода: первый — раздел A и весь B (~50 мин). Второй — раздел C и проверка отмеченных вопросов B (~10 мин).", kk: "Екі өту: бірінші — A бөлімі мен B-нің барлығы (~50 мин). Екінші — C бөлімі мен белгіленген B сұрақтарын тексеру (~10 мин)." }
            ],
            answer: "Section A: ~20 min, Section B: ~30 min, Section C: ~10 min. Do easy questions first."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "You have 45 minutes for 30 questions. How many minutes per question do you have?",
            questionRu: "У вас 45 минут на 30 вопросов. Сколько минут на вопрос?",
            questionKk: "30 сұраққа 45 минутыңыз бар. Әр сұраққа қанша минут бар?",
            answer: "1.5 minutes per question (45 ÷ 30 = 1.5)",
            hint: "Divide total time by total questions.",
            hintRu: "Разделите общее время на количество вопросов.",
            hintKk: "Жалпы уақытты сұрақтар санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "In a 90-minute test, you spend 35 minutes on the first section of 25 questions. You have 35 questions left. What is your new pace and are you behind schedule?",
            questionRu: "В 90-минутном тесте вы потратили 35 минут на первый раздел из 25 вопросов. Осталось 35 вопросов. Каков ваш новый темп и отстаёте ли вы?",
            questionKk: "90 минуттық тестте бірінші бөлімнің 25 сұрағына 35 минут жұмсадыңыз. 35 сұрақ қалды. Жаңа қарқыныңыз қандай және кешіктіңіз бе?",
            answer: "Original pace: 90÷60 = 1.5 min/q. New pace: 55÷35 ≈ 1.57 min/q — slightly behind but manageable if you use the two-pass strategy.",
            hint: "Calculate your remaining time and divide by remaining questions.",
            hintRu: "Рассчитайте оставшееся время и разделите на оставшиеся вопросы.",
            hintKk: "Қалған уақытты есептеп, қалған сұрақтарға бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A test has 4 sections worth 25 points each (100 total) in 120 minutes. Section 1 has 10 easy questions, Section 2 has 8 medium, Section 3 has 5 hard, Section 4 is a 1-question essay. Create a time allocation plan.",
            questionRu: "Тест состоит из 4 разделов по 25 баллов (100 всего) за 120 минут. Раздел 1: 10 лёгких, Раздел 2: 8 средних, Раздел 3: 5 сложных, Раздел 4: 1 эссе. Составьте план распределения времени.",
            questionKk: "Тестте 120 минутта әрқайсысы 25 ұпай 4 бөлім (барлығы 100) бар. 1-бөлім: 10 оңай, 2-бөлім: 8 орташа, 3-бөлім: 5 қиын, 4-бөлім: 1 эссе. Уақыт бөлу жоспарын жасаңыз.",
            answer: "Section 1: ~20 min (2 min/q), Section 2: ~30 min (3.75 min/q), Section 3: ~30 min (6 min/q), Section 4: ~35 min for the essay, 5 min review. Allocate more time to harder/higher-value sections.",
            hint: "Each section is worth the same points, but harder sections need more time per question.",
            hintRu: "Каждый раздел стоит одинаково, но сложные разделы требуют больше времени на вопрос.",
            hintKk: "Әр бөлім бірдей ұпай береді, бірақ қиын бөлімдер сұраққа көбірек уақыт қажет.",
            xp: 20
          }
        ]
      },
      {
        title: "Multiple Choice Strategy",
        titleRu: "Стратегия множественного выбора",
        titleKk: "Көп таңдаулы стратегия",
        content: "Multiple choice questions have predictable patterns you can exploit. The process of elimination is your most powerful tool — even eliminating one wrong answer significantly improves your odds. Watch out for extreme words like 'always' and 'never,' which are usually incorrect, and look for answers that are more moderate.",
        contentRu: "Вопросы с множественным выбором имеют предсказуемые закономерности. Метод исключения — ваш самый мощный инструмент: даже исключение одного неправильного ответа значительно улучшает шансы. Остерегайтесь крайних слов вроде 'всегда' и 'никогда' — они обычно неверны.",
        contentKk: "Көп таңдаулы сұрақтардың болжауға болатын заңдылықтары бар. Элиминация әдісі ең қуатты құралыңыз — бір қате жауапты жоюдың өзі мүмкіндіктеріңізді айтарлықтай жақсартады. 'Әрқашан' және 'ешқашан' сияқты шеткі сөздерден сақ болыңыз — олар әдетте қате болады.",
        keyFormulas: [
          {
            formula: "Probability after elimination: 1 ÷ remaining choices (e.g., eliminate 2 of 4 → 1/2 = 50%)",
            description: "Your chance of guessing correctly increases as you eliminate wrong answers",
            descriptionRu: "Шанс угадать правильно растёт по мере исключения неправильных ответов",
            descriptionKk: "Дұрыс болжау мүмкіндігі қате жауаптарды жойған сайын артады"
          }
        ],
        solvedExamples: [
          {
            question: "A question has 4 choices. You can eliminate 2 as clearly wrong. What is your probability of guessing correctly from the remaining options, and should you guess?",
            questionRu: "Вопрос имеет 4 варианта. Вы можете исключить 2 как явно неправильных. Какова вероятность угадать и стоит ли угадывать?",
            questionKk: "Сұрақтың 4 нұсқасы бар. Сіз 2-ні анық қате деп жоя аласыз. Қалғандардан дұрыс болжау ықтималдығы қандай және болжау керек пе?",
            steps: [
              { en: "Calculate probability: 4 choices − 2 eliminated = 2 remaining. Probability = 1/2 = 50%.", ru: "Рассчитайте вероятность: 4 варианта − 2 исключены = 2 осталось. Вероятность = 1/2 = 50%.", kk: "Ықтималдықты есептеңіз: 4 нұсқа − 2 жойылды = 2 қалды. Ықтималдық = 1/2 = 50%." },
              { en: "Decision: 50% is much better than random guessing (25%). Always guess when you can eliminate at least one option.", ru: "Решение: 50% гораздо лучше случайного угадывания (25%). Всегда угадывайте, если можете исключить хотя бы один вариант.", kk: "Шешім: 50% кездейсоқ болжаудан (25%) әлдеқайда жақсы. Кем дегенде бір нұсқаны жоя алсаңыз, әрқашан болжаңыз." }
            ],
            answer: "50% chance — yes, always guess after eliminating options."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A question has 5 answer choices and no penalty for guessing. What is the probability of guessing correctly at random?",
            questionRu: "Вопрос имеет 5 вариантов ответа без штрафа за угадывание. Какова вероятность случайного угадывания?",
            questionKk: "Сұрақтың 5 жауап нұсқасы бар, болжау үшін айыппұл жоқ. Кездейсоқ дұрыс болжау ықтималдығы қандай?",
            answer: "1/5 = 20%",
            hint: "Divide 1 by the number of choices.",
            hintRu: "Разделите 1 на количество вариантов.",
            hintKk: "1-ді нұсқалар санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Which answer is most likely INCORRECT and why? (A) 'Plants always need sunlight to grow.' (B) 'Most plants require sunlight for photosynthesis.' (C) 'Sunlight is one factor in plant growth.'",
            questionRu: "Какой ответ скорее всего НЕПРАВИЛЬНЫЙ и почему? (A) 'Растения всегда нуждаются в солнечном свете.' (B) 'Большинство растений нуждаются в свете для фотосинтеза.' (C) 'Солнечный свет — один из факторов роста растений.'",
            questionKk: "Қай жауап ҚАТЕ болуы ықтимал және неліктен? (A) 'Өсімдіктер әрқашан күн сәулесін қажет етеді.' (B) 'Көптеген өсімдіктер фотосинтез үшін күн сәулесін қажет етеді.' (C) 'Күн сәулесі өсімдік өсуінің бір факторы.'",
            answer: "(A) is likely incorrect because of the extreme word 'always' — some plants grow without direct sunlight (e.g., mushrooms, deep-sea organisms).",
            hint: "Look for extreme words like 'always,' 'never,' or 'all.'",
            hintRu: "Ищите крайние слова вроде 'всегда', 'никогда' или 'все'.",
            hintKk: "'Әрқашан', 'ешқашан' немесе 'барлық' сияқты шеткі сөздерді іздеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "On a 50-question test with 4 choices each and a -0.25 penalty per wrong answer, you can eliminate 1 choice on 10 questions and 2 choices on 5 questions. Should you guess on these? Calculate your expected gain/loss.",
            questionRu: "В тесте из 50 вопросов с 4 вариантами и штрафом -0.25 за ошибку вы можете исключить 1 вариант в 10 вопросах и 2 варианта в 5 вопросах. Стоит ли угадывать? Рассчитайте ожидаемую выгоду/потерю.",
            questionKk: "50 сұрақты тестте 4 нұсқа және қате үшін -0.25 айыппұл бар. 10 сұрақта 1, 5 сұрақта 2 нұсқаны жоя аласыз. Болжау керек пе? Күтілетін пайда/шығынды есептеңіз.",
            answer: "Eliminate 1 (3 choices left): Expected = 10 × (1/3 × 1 + 2/3 × −0.25) = 10 × 0.167 = +1.67. Eliminate 2 (2 left): Expected = 5 × (1/2 × 1 + 1/2 × −0.25) = 5 × 0.375 = +1.875. Total expected gain: +3.54 points. Yes, guess on all of them.",
            hint: "Expected value = probability of correct × points gained + probability of wrong × penalty.",
            hintRu: "Ожидаемое значение = вероятность правильного × баллы + вероятность ошибки × штраф.",
            hintKk: "Күтілетін мән = дұрыс ықтималдығы × ұпай + қате ықтималдығы × айыппұл.",
            xp: 20
          }
        ]
      },
      {
        title: "Writing Basics",
        titleRu: "Основы письма",
        titleKk: "Жазу негіздері",
        content: "Good writing on tests means clear, organized paragraphs with a topic sentence, supporting details, and a conclusion. Every paragraph should focus on one main idea. Use transition words like 'however,' 'furthermore,' and 'in addition' to connect your ideas smoothly and show logical relationships.",
        contentRu: "Хорошее письмо на тестах означает чёткие, организованные абзацы с вступительным предложением, подтверждающими деталями и заключением. Каждый абзац должен быть сосредоточен на одной главной мысли. Используйте переходные слова для плавной связи идей.",
        contentKk: "Тесттердегі жақсы жазу тақырыптық сөйлем, қосымша мәліметтер және қорытындысы бар анық, ұйымдасқан абзацтарды білдіреді. Әр абзац бір негізгі ойға бағытталуы тиіс. Идеяларды тегіс байланыстыру үшін 'алайда', 'сонымен қатар' сияқты байланыстырғыш сөздерді қолданыңыз.",
        keyFormulas: [
          {
            formula: "Paragraph Structure: Topic Sentence → Supporting Detail 1 → Supporting Detail 2 → Concluding Sentence",
            description: "The standard structure for a well-organized paragraph",
            descriptionRu: "Стандартная структура организованного абзаца",
            descriptionKk: "Жақсы ұйымдасқан абзацтың стандартты құрылымы"
          },
          {
            formula: "Transition Words: Addition (also, furthermore) | Contrast (however, but) | Cause (because, therefore)",
            description: "Key connector words organized by function",
            descriptionRu: "Ключевые слова-связки, организованные по функции",
            descriptionKk: "Функциясы бойынша ұйымдастырылған негізгі байланыстырғыш сөздер"
          }
        ],
        solvedExamples: [
          {
            question: "Rewrite this weak paragraph opening: 'I'm going to talk about pollution. Pollution is bad. There are many types.'",
            questionRu: "Перепишите слабое начало абзаца: 'Я расскажу о загрязнении. Загрязнение — это плохо. Есть много видов.'",
            questionKk: "Осы әлсіз абзац басын қайта жазыңыз: 'Мен ластану туралы айтамын. Ластану нашар. Көптеген түрлері бар.'",
            steps: [
              { en: "Combine the three choppy sentences into one strong topic sentence that states the main idea clearly.", ru: "Объедините три рубленых предложения в одно сильное тематическое предложение, чётко излагающее главную мысль.", kk: "Үш қысқа сөйлемді басты ойды анық білдіретін бір күшті тақырыптық сөйлемге біріктіріңіз." },
              { en: "Add specificity: name types of pollution to give the reader a preview of what the paragraph will cover.", ru: "Добавьте конкретику: назовите виды загрязнения, чтобы дать читателю представление о содержании абзаца.", kk: "Нақтылық қосыңыз: абзац нені қамтитынын алдын ала көрсету үшін ластану түрлерін атаңыз." }
            ],
            answer: "'Pollution, including air, water, and soil contamination, poses one of the most serious threats to our environment and public health.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Write a topic sentence for a paragraph about the benefits of reading books.",
            questionRu: "Напишите вступительное предложение для абзаца о пользе чтения книг.",
            questionKk: "Кітап оқудың пайдасы туралы абзацқа тақырыптық сөйлем жазыңыз.",
            answer: "Example: 'Reading books regularly improves vocabulary, stimulates imagination, and builds critical thinking skills.'",
            hint: "Mention the topic (reading) and preview 2-3 specific benefits.",
            hintRu: "Упомяните тему (чтение) и обозначьте 2-3 конкретные пользы.",
            hintKk: "Тақырыпты (оқу) атап, 2-3 нақты пайдасын көрсетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Connect these two sentences using an appropriate transition word: 'Exercise improves physical health.' 'Exercise boosts mental well-being and reduces stress.'",
            questionRu: "Соедините два предложения с помощью переходного слова: 'Упражнения улучшают физическое здоровье.' 'Упражнения укрепляют ментальное здоровье и снижают стресс.'",
            questionKk: "Екі сөйлемді сәйкес байланыстырғыш сөзбен қосыңыз: 'Жаттығу дене денсаулығын жақсартады.' 'Жаттығу психикалық саулықты күшейтеді және стрессті азайтады.'",
            answer: "'Exercise improves physical health. Furthermore, it boosts mental well-being and reduces stress.' (or 'In addition,' / 'Moreover,')",
            hint: "The second sentence adds information to the first — use an addition transition.",
            hintRu: "Второе предложение дополняет первое — используйте связку добавления.",
            hintKk: "Екінші сөйлем біріншіні толықтырады — қосу байланыстырғышын қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a complete 4-sentence paragraph about why students should learn a second language. Include a topic sentence, two supporting details with transitions, and a concluding sentence.",
            questionRu: "Напишите полный абзац из 4 предложений о том, почему ученики должны учить второй язык. Включите тематическое предложение, два подтверждающих довода с переходами и заключение.",
            questionKk: "Оқушылардың неліктен екінші тілді үйренуі керектігі туралы 4 сөйлемді толық абзац жазыңыз. Тақырыптық сөйлем, байланыстырғыштары бар екі қосымша дәлел және қорытынды сөйлем қосыңыз.",
            answer: "Example: 'Learning a second language opens doors to new cultures and career opportunities. First, bilingual individuals can communicate with a wider range of people, deepening cross-cultural understanding. Moreover, studies show that speaking two languages improves cognitive skills like memory and problem-solving. Therefore, every student should embrace the challenge of learning a new language.'",
            hint: "Follow the structure: Topic → Detail 1 (First,...) → Detail 2 (Moreover,...) → Conclusion (Therefore,...).",
            hintRu: "Следуйте структуре: Тема → Довод 1 (Во-первых,...) → Довод 2 (Кроме того,...) → Заключение (Поэтому,...).",
            hintKk: "Құрылымды ұстаныңыз: Тақырып → Дәлел 1 (Біріншіден,...) → Дәлел 2 (Сонымен қатар,...) → Қорытынды (Сондықтан,...).",
            xp: 20
          }
        ]
      },
      {
        title: "Practice Test Overview",
        titleRu: "Обзор пробного теста",
        titleKk: "Сынақ тестіне шолу",
        content: "Taking practice tests is the single most effective way to prepare for standardized exams. Practice tests build familiarity with question formats, improve time management, and reveal weak areas. After each practice test, review every wrong answer to understand your mistakes — this review phase is where the real learning happens.",
        contentRu: "Прохождение пробных тестов — самый эффективный способ подготовки к экзаменам. Пробные тесты развивают знакомство с форматами, улучшают управление временем и выявляют слабые места. После каждого теста анализируйте каждый неправильный ответ — именно на этом этапе происходит настоящее обучение.",
        contentKk: "Сынақ тесттерін тапсыру стандартталған емтихандарға дайындалудың ең тиімді тәсілі. Сынақ тесттері форматтармен танысуды қалыптастырады, уақытты басқаруды жақсартады және әлсіз жақтарды анықтайды. Әр тесттен кейін барлық қате жауаптарды қарап шығыңыз — нақты оқу осы кезеңде болады.",
        keyFormulas: [
          {
            formula: "Improvement Rate = (Practice Test 2 Score − Practice Test 1 Score) ÷ Practice Test 1 Score × 100%",
            description: "How to measure your progress between practice tests",
            descriptionRu: "Как измерить прогресс между пробными тестами",
            descriptionKk: "Сынақ тесттері арасындағы прогресті қалай өлшеу керек"
          },
          {
            formula: "Error Analysis: Categorize mistakes → Content gaps, Careless errors, Time pressure, Misread questions",
            description: "Four categories for classifying why you got questions wrong",
            descriptionRu: "Четыре категории для классификации причин ошибок",
            descriptionKk: "Қателердің себебін жіктеудің төрт категориясы"
          }
        ],
        solvedExamples: [
          {
            question: "You scored 65% on Practice Test 1 and 78% on Practice Test 2. What is your improvement rate? Of your 22 wrong answers on Test 2, 10 were careless errors. What does this tell you?",
            questionRu: "Вы набрали 65% на первом пробном тесте и 78% на втором. Каков ваш прогресс? Из 22 ошибок на втором тесте 10 были по невнимательности. О чём это говорит?",
            questionKk: "1-сынақ тестінде 65%, 2-сінде 78% жинадыңыз. Прогрессіңіз қандай? 2-тесттегі 22 қатенің 10-ы абайсыздық болды. Бұл не туралы айтады?",
            steps: [
              { en: "Calculate improvement: (78 − 65) ÷ 65 × 100% = 13 ÷ 65 × 100% = 20% improvement.", ru: "Рассчитайте прогресс: (78 − 65) ÷ 65 × 100% = 13 ÷ 65 × 100% = 20% улучшение.", kk: "Прогресті есептеңіз: (78 − 65) ÷ 65 × 100% = 13 ÷ 65 × 100% = 20% жақсару." },
              { en: "Analyze errors: 10 of 22 errors (45%) are careless, meaning your content knowledge is stronger than your score shows. Focus on checking work carefully to gain easy points.", ru: "Анализ ошибок: 10 из 22 (45%) по невнимательности — ваши знания лучше, чем показывает оценка. Сосредоточьтесь на внимательной проверке работы.", kk: "Қателерді талдау: 22 қатенің 10-ы (45%) абайсыздық — біліміңіз ұпайдан жоғары. Жұмысты мұқият тексеруге назар аударыңыз." }
            ],
            answer: "20% improvement. Nearly half of remaining errors are careless — focusing on careful checking could raise your score to ~88%."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "You got 35 out of 50 questions right on a practice test. What is your percentage score?",
            questionRu: "Вы ответили правильно на 35 из 50 вопросов пробного теста. Каков ваш процент?",
            questionKk: "Сынақ тестінде 50 сұрақтың 35-іне дұрыс жауап бердіңіз. Пайызыңыз қандай?",
            answer: "70% (35 ÷ 50 × 100 = 70%)",
            hint: "Divide correct answers by total questions and multiply by 100.",
            hintRu: "Разделите правильные ответы на общее количество и умножьте на 100.",
            hintKk: "Дұрыс жауаптарды жалпы санға бөліп, 100-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "On Practice Test 1 you scored 60%, and on Practice Test 2 you scored 72%. What is your improvement rate? If you want to reach 85% on Test 3, how many more percentage points do you need?",
            questionRu: "На пробном тесте 1 вы набрали 60%, на тесте 2 — 72%. Каков ваш прогресс? Если вы хотите набрать 85% на тесте 3, сколько ещё процентных пунктов вам нужно?",
            questionKk: "1-сынақ тестінде 60%, 2-сінде 72% жинадыңыз. Прогрессіңіз қандай? 3-тестте 85% жеткіңіз келсе, тағы қанша пайыздық пункт қажет?",
            answer: "Improvement rate: (72−60)÷60×100 = 20%. Need 85−72 = 13 more percentage points to reach the goal.",
            hint: "Use the improvement formula, then subtract current score from target.",
            hintRu: "Используйте формулу прогресса, затем вычтите текущий балл из целевого.",
            hintKk: "Прогресс формуласын қолданыңыз, содан кейін ағымдағы баллды мақсаттан алып тастаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "After a practice test, you categorize your 20 wrong answers: 8 content gaps, 6 careless errors, 4 time pressure, 2 misread questions. Create a study plan prioritizing these categories.",
            questionRu: "После пробного теста вы классифицируете 20 ошибок: 8 пробелов в знаниях, 6 по невнимательности, 4 из-за нехватки времени, 2 из-за неправильного прочтения. Составьте план подготовки.",
            questionKk: "Сынақ тестінен кейін 20 қатеңізді жіктедіңіз: 8 білім олқылығы, 6 абайсыздық, 4 уақыт тапшылығы, 2 дұрыс оқымау. Осы категорияларды басымдық бойынша оқу жоспарын жасаңыз.",
            answer: "Priority 1: Content gaps (8 errors, 40%) — study weak topics. Priority 2: Careless errors (6, 30%) — practice checking work and reading carefully. Priority 3: Time pressure (4, 20%) — do timed drills. Priority 4: Misread questions (2, 10%) — practice underlining key words. This could recover up to 20 points.",
            hint: "Start with the largest error category — it has the most points to recover.",
            hintRu: "Начните с самой большой категории ошибок — там больше всего баллов для восстановления.",
            hintKk: "Ең үлкен қате категориясынан бастаңыз — онда қалпына келтіруге ең көп ұпай бар.",
            xp: 20
          }
        ]
      }
    ]
  },

  "Admission Exams_9": {
    planetName: "Admission Exams",
    introduction: {
      en: "Welcome to Admission Exams for Grade 9! Begin your standardized test preparation with SAT Math and Reading fundamentals, IELTS and TOEFL basics, ACT Science reasoning, and essay writing skills that form the foundation for competitive exam scores.",
      ru: "Добро пожаловать в Вступительные экзамены для 9 класса! Начните подготовку к стандартизированным тестам с основ математики и чтения SAT, базовых навыков IELTS и TOEFL, научного мышления ACT и навыков написания эссе, которые формируют основу для конкурентных результатов."
    },
    sections: [
      {
        title: "SAT Math Algebra",
        titleRu: "SAT Математика: Алгебра",
        titleKk: "SAT Математика: Алгебра",
        content: "The SAT Math section heavily tests algebra, including linear equations, systems of equations, and inequalities. You must be comfortable solving for unknown variables, interpreting equations in context, and translating word problems into algebraic expressions. About 35% of SAT Math questions involve algebra concepts.",
        contentRu: "Раздел математики SAT активно проверяет алгебру: линейные уравнения, системы уравнений и неравенства. Нужно уметь решать уравнения с неизвестными, интерпретировать уравнения в контексте и переводить текстовые задачи в алгебраические выражения. Около 35% вопросов математики SAT связаны с алгеброй.",
        contentKk: "SAT математика бөлімі алгебраны белсенді тексереді: сызықтық теңдеулер, теңдеулер жүйесі және теңсіздіктер. Белгісіз айнымалыларды шешу, теңдеулерді контексте түсіндіру және мәтінді есептерді алгебралық өрнектерге аудару қажет. SAT математика сұрақтарының шамамен 35%-ы алгебра тұжырымдамаларымен байланысты.",
        keyFormulas: [
          {
            formula: "Linear equation: y = mx + b (slope-intercept form)",
            description: "Standard form for a line where m is slope and b is y-intercept",
            descriptionRu: "Стандартная форма прямой, где m — наклон, b — пересечение с осью y",
            descriptionKk: "Түзудің стандартты формасы, мұнда m — көлбеулік, b — y-өсімен қиылысу"
          },
          {
            formula: "System of equations: solve by substitution or elimination",
            description: "Two methods to find values that satisfy two equations simultaneously",
            descriptionRu: "Два метода нахождения значений, удовлетворяющих обоим уравнениям",
            descriptionKk: "Екі теңдеуді бір уақытта қанағаттандыратын мәндерді табудың екі әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Solve the system: 2x + y = 10 and x − y = 2",
            questionRu: "Решите систему: 2x + y = 10 и x − y = 2",
            questionKk: "Жүйені шешіңіз: 2x + y = 10 және x − y = 2",
            steps: [
              { en: "Add both equations to eliminate y: (2x + y) + (x − y) = 10 + 2 → 3x = 12 → x = 4.", ru: "Сложите оба уравнения для исключения y: (2x + y) + (x − y) = 10 + 2 → 3x = 12 → x = 4.", kk: "y-ті жою үшін екі теңдеуді қосыңыз: (2x + y) + (x − y) = 10 + 2 → 3x = 12 → x = 4." },
              { en: "Substitute x = 4 into x − y = 2: 4 − y = 2 → y = 2.", ru: "Подставьте x = 4 в x − y = 2: 4 − y = 2 → y = 2.", kk: "x = 4-ті x − y = 2 теңдеуіне қойыңыз: 4 − y = 2 → y = 2." }
            ],
            answer: "x = 4, y = 2"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Solve for x: 3x + 7 = 22",
            questionRu: "Найдите x: 3x + 7 = 22",
            questionKk: "x-ті табыңыз: 3x + 7 = 22",
            answer: "x = 5 (3x = 15, x = 5)",
            hint: "Subtract 7 from both sides, then divide by 3.",
            hintRu: "Вычтите 7 из обеих сторон, затем разделите на 3.",
            hintKk: "Екі жағынан 7-ні алып тастаңыз, содан кейін 3-ке бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A phone plan costs $30/month plus $0.10 per text. Write an equation for total cost C in terms of texts t, and find the cost for 200 texts.",
            questionRu: "Тариф стоит 30 долларов в месяц плюс 0,10 за сообщение. Напишите уравнение стоимости C через количество сообщений t и найдите стоимость при 200 сообщениях.",
            questionKk: "Телефон тарифі айына 30 доллар плюс хабарламаға 0,10 доллар. Жалпы құн C-ні хабарламалар t арқылы теңдеу жазыңыз және 200 хабарлама үшін құнды табыңыз.",
            answer: "C = 30 + 0.10t. For 200 texts: C = 30 + 0.10(200) = 30 + 20 = $50.",
            hint: "The monthly fee is the y-intercept, and the per-text charge is the slope.",
            hintRu: "Ежемесячная плата — пересечение с осью y, плата за сообщение — наклон.",
            hintKk: "Айлық төлем — y-өсімен қиылысу, хабарлама құны — көлбеулік.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Solve the system: 3x + 2y = 16 and 5x − 2y = 24. Then verify your answer by substituting back.",
            questionRu: "Решите систему: 3x + 2y = 16 и 5x − 2y = 24. Затем проверьте ответ подстановкой.",
            questionKk: "Жүйені шешіңіз: 3x + 2y = 16 және 5x − 2y = 24. Содан кейін жауабыңызды қойып тексеріңіз.",
            answer: "Add equations: 8x = 40, x = 5. Then 3(5) + 2y = 16 → 2y = 1 → y = 0.5. Check: 5(5) − 2(0.5) = 25 − 1 = 24 ✓",
            hint: "The y terms have opposite signs — adding eliminates y directly.",
            hintRu: "Члены с y имеют противоположные знаки — сложение напрямую устраняет y.",
            hintKk: "y мүшелерінің қарама-қарсы таңбалары бар — қосу y-ді тікелей жояды.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Problem Solving",
        titleRu: "SAT Решение задач",
        titleKk: "SAT Есеп шығару",
        content: "SAT Problem Solving questions require you to apply mathematical reasoning to real-world scenarios involving ratios, percentages, and proportions. These questions test your ability to set up equations from word problems and interpret results in context. Reading carefully is just as important as the math itself.",
        contentRu: "Задачи SAT на решение проблем требуют применения математического мышления к реальным сценариям с пропорциями, процентами и соотношениями. Эти вопросы проверяют умение составлять уравнения из текстовых задач и интерпретировать результаты в контексте. Внимательное чтение так же важно, как и сама математика.",
        contentKk: "SAT есеп шығару сұрақтары қатынастар, пайыздар және пропорцияларды қамтитын нақты сценарийлерге математикалық ойлауды қолдануды талап етеді. Бұл сұрақтар мәтінді есептерден теңдеулер құру және нәтижелерді контексте түсіндіру қабілетіңізді тексереді. Мұқият оқу математиканың өзі сияқты маңызды.",
        keyFormulas: [
          {
            formula: "Proportion: a/b = c/d → ad = bc (cross multiplication)",
            description: "Method for solving proportion problems",
            descriptionRu: "Метод решения задач на пропорции",
            descriptionKk: "Пропорция есептерін шешу әдісі"
          },
          {
            formula: "Percent Change = (New − Original) ÷ Original × 100%",
            description: "How to calculate percentage increase or decrease",
            descriptionRu: "Как рассчитать процентное увеличение или уменьшение",
            descriptionKk: "Пайыздық артуды немесе азаюды қалай есептеу керек"
          }
        ],
        solvedExamples: [
          {
            question: "A shirt originally costs $40 and is on sale for 25% off. After the discount, a 10% tax is added. What is the final price?",
            questionRu: "Рубашка стоит 40 долларов со скидкой 25%. После скидки добавляется налог 10%. Какова итоговая цена?",
            questionKk: "Көйлек бастапқыда 40 доллар тұрады және 25% жеңілдікпен сатылады. Жеңілдіктен кейін 10% салық қосылады. Соңғы бағасы қандай?",
            steps: [
              { en: "Calculate discount: 40 × 0.25 = $10 off. Sale price = 40 − 10 = $30.", ru: "Рассчитайте скидку: 40 × 0,25 = 10 долларов. Цена со скидкой = 40 − 10 = 30 долларов.", kk: "Жеңілдікті есептеңіз: 40 × 0,25 = 10 доллар. Жеңілдік бағасы = 40 − 10 = 30 доллар." },
              { en: "Add tax: 30 × 0.10 = $3 tax. Final price = 30 + 3 = $33.", ru: "Добавьте налог: 30 × 0,10 = 3 доллара. Итого = 30 + 3 = 33 доллара.", kk: "Салықты қосыңыз: 30 × 0,10 = 3 доллар. Соңғы баға = 30 + 3 = 33 доллар." }
            ],
            answer: "$33"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is 15% of 200?",
            questionRu: "Чему равно 15% от 200?",
            questionKk: "200-дің 15%-ы қанша?",
            answer: "30 (200 × 0.15 = 30)",
            hint: "Convert the percentage to a decimal and multiply.",
            hintRu: "Переведите процент в десятичную дробь и умножьте.",
            hintKk: "Пайызды ондық бөлшекке аударып, көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A recipe for 4 people uses 3 cups of flour. How many cups are needed for 10 people?",
            questionRu: "Рецепт на 4 человека требует 3 стакана муки. Сколько стаканов нужно на 10 человек?",
            questionKk: "4 адамға арналған рецепт 3 стақан ұн қажет етеді. 10 адамға қанша стақан қажет?",
            answer: "7.5 cups (3/4 = x/10 → x = 30/4 = 7.5)",
            hint: "Set up a proportion: cups/people = cups/people.",
            hintRu: "Составьте пропорцию: стаканы/люди = стаканы/люди.",
            hintKk: "Пропорция құрыңыз: стақан/адам = стақан/адам.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A store raises prices by 20%, then offers a 20% discount. Is the final price the same as the original? Show your work with an original price of $100.",
            questionRu: "Магазин повышает цены на 20%, затем делает скидку 20%. Итоговая цена равна начальной? Покажите на примере 100 долларов.",
            questionKk: "Дүкен бағаларды 20% көтеріп, содан кейін 20% жеңілдік жасайды. Соңғы баға бастапқымен бірдей ме? 100 доллар мысалымен көрсетіңіз.",
            answer: "No. $100 + 20% = $120. Then $120 − 20% = $120 × 0.80 = $96. Final price is $96, which is $4 less than original. A percentage increase followed by the same percentage decrease always results in a net loss.",
            hint: "The 20% decrease is applied to the higher number, not the original.",
            hintRu: "20% снижение применяется к большему числу, а не к исходному.",
            hintKk: "20% төмендеу бастапқыға емес, жоғарырақ санға қолданылады.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Reading Main Idea",
        titleRu: "SAT Чтение: Главная мысль",
        titleKk: "SAT Оқу: Негізгі ой",
        content: "SAT Reading passages test your ability to identify the central argument or main purpose of a text. The main idea is usually expressed in the first or last paragraph, and every supporting paragraph relates back to it. When answering, look for the choice that captures the entire passage, not just one detail.",
        contentRu: "Тексты SAT по чтению проверяют умение определять центральный аргумент или основную цель текста. Главная мысль обычно выражена в первом или последнем абзаце, и каждый вспомогательный абзац связан с ней. При ответе ищите вариант, охватывающий весь текст, а не одну деталь.",
        contentKk: "SAT оқу мәтіндері мәтіннің орталық аргументін немесе негізгі мақсатын анықтау қабілетін тексереді. Негізгі ой әдетте бірінші немесе соңғы абзацта білдіріледі, ал әр қосымша абзац оған байланысты. Жауап бергенде бір мәліметті емес, бүкіл мәтінді қамтитын нұсқаны іздеңіз.",
        keyFormulas: [
          {
            formula: "Main Idea = What the entire passage is about + Author's perspective on it",
            description: "The main idea encompasses both the topic and the author's angle",
            descriptionRu: "Главная мысль охватывает и тему, и точку зрения автора",
            descriptionKk: "Негізгі ой тақырыпты да, автордың көзқарасын да қамтиды"
          }
        ],
        solvedExamples: [
          {
            question: "A passage discusses how urban gardens reduce food deserts, build community bonds, and improve mental health. Which is the main idea: (A) Gardening improves mental health, (B) Urban gardens provide multiple benefits to city communities, (C) Cities need more parks?",
            questionRu: "Текст обсуждает, как городские сады уменьшают продовольственные пустыни, укрепляют связи в сообществе и улучшают психическое здоровье. Какова главная мысль: (A) Садоводство улучшает здоровье, (B) Городские сады приносят множество преимуществ, (C) Городам нужно больше парков?",
            questionKk: "Мәтін қалалық бақтардың тағам шөлін азайтуын, қауымдастық байланыстарын нығайтуын және психикалық денсаулықты жақсартуын талқылайды. Негізгі ой қайсы: (A) Бағбандық денсаулықты жақсартады, (B) Қалалық бақтар қауымдастықтарға көптеген пайда әкеледі, (C) Қалаларға көбірек парк керек?",
            steps: [
              { en: "Eliminate too narrow: (A) only covers mental health — one of three points. (C) is about parks, not gardens — off topic.", ru: "Исключите слишком узкие: (A) охватывает только психическое здоровье — один из трёх пунктов. (C) о парках, а не о садах.", kk: "Тым тарларды жойыңыз: (A) тек психикалық денсаулықты қамтиды — үш тармақтың бірі. (C) бақтар емес, парктар туралы." },
              { en: "Choose the broadest accurate answer: (B) covers all three benefits mentioned and correctly focuses on urban gardens.", ru: "Выберите самый широкий точный ответ: (B) охватывает все три упомянутые преимущества и правильно фокусируется на городских садах.", kk: "(B) аталған барлық үш пайданы қамтиды және қалалық бақтарға дұрыс бағытталған — ең кең дәл жауап." }
            ],
            answer: "(B) Urban gardens provide multiple benefits to city communities."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A passage describes how recycling saves energy, reduces landfill waste, and conserves natural resources. What is the main idea?",
            questionRu: "Текст описывает, как переработка экономит энергию, уменьшает отходы и сохраняет природные ресурсы. Какова главная мысль?",
            questionKk: "Мәтін қайта өңдеудің энергияны үнемдейтінін, қоқыс қалдықтарын азайтатынын және табиғи ресурстарды сақтайтынын сипаттайды. Негізгі ой қандай?",
            answer: "Recycling provides important environmental benefits through energy savings, waste reduction, and resource conservation.",
            hint: "Find the common theme that connects all three details.",
            hintRu: "Найдите общую тему, объединяющую все три детали.",
            hintKk: "Үш мәліметті байланыстыратын ортақ тақырыпты табыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Which is likely the main idea of a passage? (A) 'Coffee contains caffeine.' (B) 'Coffee has shaped global trade, culture, and daily routines for centuries.' (C) 'Brazil produces the most coffee.'",
            questionRu: "Какова вероятная главная мысль? (A) 'Кофе содержит кофеин.' (B) 'Кофе формировал мировую торговлю, культуру и повседневные привычки веками.' (C) 'Бразилия производит больше всего кофе.'",
            questionKk: "Мәтіннің негізгі ойы қайсы болуы ықтимал? (A) 'Кофе кофеин құрамды.' (B) 'Кофе ғасырлар бойы әлемдік сауданы, мәдениетті және күнделікті тәртіпті қалыптастырды.' (C) 'Бразилия ең көп кофе өндіреді.'",
            answer: "(B) — it is the broadest statement that could encompass the others as supporting details.",
            hint: "The main idea should be broad enough to include the other statements as details.",
            hintRu: "Главная мысль должна быть достаточно широкой, чтобы включить другие утверждения как детали.",
            hintKk: "Негізгі ой басқа мәлімдемелерді мәліметтер ретінде қамтитындай кең болуы тиіс.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A passage argues that standardized testing has benefits but also significant limitations. The author concludes that tests should be one of many evaluation tools. What is the main idea, and is the author's tone supportive, critical, or balanced?",
            questionRu: "Текст утверждает, что стандартизированное тестирование имеет преимущества, но и значительные ограничения. Автор заключает, что тесты должны быть одним из многих инструментов оценки. Какова главная мысль и тон автора?",
            questionKk: "Мәтін стандартталған тестілеудің пайдасы бар, бірақ елеулі шектеулері де бар деп дәлелдейді. Автор тесттер көптеген бағалау құралдарының бірі болуы керек деп қорытындылайды. Негізгі ой қандай және автордың үні қолдаушы, сыни ма, теңгерілген бе?",
            answer: "Main idea: Standardized tests have value but should not be the sole measure of student ability. The tone is balanced — the author acknowledges both positives and negatives before recommending a middle-ground approach.",
            hint: "Look at the conclusion for the author's final position, and notice how they present both sides.",
            hintRu: "Посмотрите на заключение для итоговой позиции автора и обратите внимание на представление обеих сторон.",
            hintKk: "Автордың соңғы ұстанымы үшін қорытындыға қараңыз және екі жақтың қалай ұсынылғанына назар аударыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Reading Evidence",
        titleRu: "SAT Чтение: Доказательства",
        titleKk: "SAT Оқу: Дәлелдер",
        content: "SAT evidence-based questions ask you to identify which lines in the passage best support your answer to a previous question. The key strategy is to find direct textual evidence — not your own interpretation. Always match the evidence to the specific claim being made in the question.",
        contentRu: "Вопросы SAT на основе доказательств просят определить, какие строки текста лучше всего подтверждают ваш ответ на предыдущий вопрос. Ключевая стратегия — найти прямое текстовое доказательство, а не свою интерпретацию. Всегда сопоставляйте доказательство с конкретным утверждением вопроса.",
        contentKk: "SAT дәлелдерге негізделген сұрақтар алдыңғы сұраққа жауабыңызды ең жақсы қолдайтын мәтін жолдарын анықтауды сұрайды. Негізгі стратегия — өз түсіндірмеңізді емес, тікелей мәтіндік дәлелді табу. Дәлелді әрқашан сұрақтағы нақты тұжырыммен сәйкестендіріңіз.",
        keyFormulas: [
          {
            formula: "Evidence Question Strategy: Answer the main question first → Find the lines that directly prove your answer",
            description: "Always answer the content question before looking for evidence",
            descriptionRu: "Всегда отвечайте на содержательный вопрос перед поиском доказательства",
            descriptionKk: "Дәлел іздемес бұрын әрқашан мазмұндық сұраққа жауап беріңіз"
          }
        ],
        solvedExamples: [
          {
            question: "Question 1 asks: 'What is the author's view on social media?' You answered: 'The author believes it has both benefits and risks.' Which evidence best supports this: (A) 'Social media connects millions.' (B) 'While social media fosters connections, it also raises concerns about privacy and mental health.' (C) 'Many teens use Instagram.'",
            questionRu: "Вопрос 1: 'Каково мнение автора о соцсетях?' Вы ответили: 'Автор считает, что есть и плюсы, и риски.' Какое доказательство лучше: (A) 'Соцсети соединяют миллионы.' (B) 'Хотя соцсети укрепляют связи, они вызывают проблемы конфиденциальности и здоровья.' (C) 'Многие подростки используют Instagram.'",
            questionKk: "1-сұрақ: 'Автордың әлеуметтік медиа туралы көзқарасы қандай?' Сіз: 'Автор пайдасы да, тәуекелі де бар деп санайды' деп жауап бердіңіз. Қай дәлел ең жақсы қолдайды: (A) 'Әлеуметтік медиа миллиондарды байланыстырады.' (B) 'Әлеуметтік медиа байланыстарды нығайтса да, құпиялылық пен психикалық денсаулық мәселелерін туғызады.' (C) 'Көптеген жасөспірімдер Instagram қолданады.'",
            steps: [
              { en: "Match evidence to claim: your answer says 'both benefits and risks.' Only (B) mentions both — 'fosters connections' (benefit) and 'raises concerns' (risks).", ru: "Сопоставьте доказательство с утверждением: ваш ответ говорит о 'плюсах и рисках.' Только (B) упоминает оба — 'укрепляет связи' (плюс) и 'вызывает проблемы' (риск).", kk: "Дәлелді тұжырыммен сәйкестендіріңіз: жауабыңыз 'пайда да, тәуекел де' дейді. Тек (B) екеуін де атайды — 'байланыстарды нығайтады' (пайда) және 'мәселелерді туғызады' (тәуекел)." },
              { en: "Eliminate weak options: (A) only shows benefits, (C) is a fact with no opinion. (B) is the best evidence.", ru: "Исключите слабые: (A) показывает только плюсы, (C) — факт без мнения. (B) — лучшее доказательство.", kk: "Әлсіз нұсқаларды жойыңыз: (A) тек пайданы көрсетеді, (C) пікірсіз факт. (B) ең жақсы дәлел." }
            ],
            answer: "(B) — it directly shows the author expressing both benefits and concerns."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "If you claim 'the author supports renewable energy,' which evidence is strongest: (A) 'Solar panels exist.' (B) 'Renewable energy is our best path to a sustainable future.' (C) 'Energy prices vary.'",
            questionRu: "Если ваше утверждение: 'автор поддерживает возобновляемую энергию,' какое доказательство сильнее: (A) 'Солнечные панели существуют.' (B) 'Возобновляемая энергия — лучший путь к устойчивому будущему.' (C) 'Цены на энергию различаются.'",
            questionKk: "Егер сіздің тұжырымыңыз: 'автор жаңартылатын энергияны қолдайды,' қай дәлел күштірек: (A) 'Күн панельдері бар.' (B) 'Жаңартылатын энергия тұрақты болашаққа ең жақсы жол.' (C) 'Энергия бағалары өзгереді.'",
            answer: "(B) — it directly shows the author's positive opinion ('best path') about renewable energy.",
            hint: "Look for the quote that shows the author's opinion, not just a fact.",
            hintRu: "Ищите цитату с мнением автора, а не просто факт.",
            hintKk: "Тек фактті емес, автордың пікірін көрсететін дәйексөзді іздеңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You answered that 'the scientist was skeptical of the results.' Choose the best evidence: (A) 'The experiment was conducted in a lab.' (B) 'Dr. Lee noted that further trials are needed before drawing conclusions.' (C) 'The results showed a 30% improvement.'",
            questionRu: "Вы ответили, что 'учёный скептически отнёсся к результатам.' Выберите лучшее доказательство: (A) 'Эксперимент проводился в лаборатории.' (B) 'Доктор Ли отметил, что нужны дополнительные испытания.' (C) 'Результаты показали улучшение на 30%.'",
            questionKk: "Сіз 'ғалым нәтижелерге күмәнді қарады' деп жауап бердіңіз. Ең жақсы дәлелді таңдаңыз: (A) 'Тәжірибе зертханада жүргізілді.' (B) 'Доктор Ли қорытынды жасамас бұрын қосымша сынақтар қажет деп атап өтті.' (C) 'Нәтижелер 30% жақсаруды көрсетті.'",
            answer: "(B) — Dr. Lee's call for 'further trials before drawing conclusions' shows skepticism and caution about accepting the results.",
            hint: "Skepticism means the scientist is not fully convinced — look for caution or doubt.",
            hintRu: "Скептицизм означает, что учёный не полностью убеждён — ищите осторожность или сомнение.",
            hintKk: "Күмән ғалымның толық сенбегенін білдіреді — сақтық немесе күмәнді іздеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A paired evidence question: Q1 asks 'What change does the author recommend?' You chose 'Shorter school days.' Q2 asks for evidence. Options: (A) Lines 12-14: 'Students in Finland thrive with shorter school hours.' (B) Lines 20-22: 'Research shows mixed results on school day length.' (C) Lines 30-32: 'The school board voted on a new schedule.' Which is best and why might (B) actually undermine your Q1 answer?",
            questionRu: "Парный вопрос: В1 спрашивает 'Что рекомендует автор?' Вы выбрали 'Короткие учебные дни.' В2 просит доказательство. Варианты: (A) Строки 12-14: 'Ученики Финляндии преуспевают с коротким школьным днём.' (B) Строки 20-22: 'Исследования показывают неоднозначные результаты.' (C) Строки 30-32: 'Школьный совет проголосовал за новое расписание.' Какой лучший и почему (B) может подорвать ответ на В1?",
            questionKk: "Жұптық сұрақ: С1 'Автор не ұсынады?' Сіз 'Қысқа оқу күндері' таңдадыңыз. С2 дәлел сұрайды. Нұсқалар: (A) 12-14 жолдар: 'Финляндия оқушылары қысқа сабақтармен өркендейді.' (B) 20-22 жолдар: 'Зерттеулер аралас нәтижелер көрсетеді.' (C) 30-32 жолдар: 'Мектеп кеңесі жаңа кестеге дауыс берді.' Қайсысы ең жақсы және неліктен (B) С1 жауабыңызды әлсіретуі мүмкін?",
            answer: "(A) is the best evidence — it directly supports shorter school days with a positive example. (B) actually weakens the Q1 answer because 'mixed results' suggests the evidence is not clearly in favor of shorter days, which could mean your Q1 answer needs reconsideration.",
            hint: "Best evidence directly supports the claim. Watch for evidence that contradicts your answer.",
            hintRu: "Лучшее доказательство напрямую поддерживает утверждение. Следите за доказательствами, противоречащими ответу.",
            hintKk: "Ең жақсы дәлел тұжырымды тікелей қолдайды. Жауабыңызға қайшы дәлелдерге назар аударыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Writing Grammar",
        titleRu: "SAT Письмо: Грамматика",
        titleKk: "SAT Жазу: Грамматика",
        content: "The SAT Writing and Language section tests your ability to improve passages by fixing grammar, punctuation, word choice, and sentence structure. Common question types include subject-verb agreement, pronoun clarity, modifier placement, and parallel structure. Always read the full sentence before choosing an answer.",
        contentRu: "Раздел SAT по письму и языку проверяет умение улучшать тексты, исправляя грамматику, пунктуацию, выбор слов и структуру предложений. Частые типы вопросов: согласование, местоимения, модификаторы и параллельная структура. Всегда читайте полное предложение перед выбором ответа.",
        contentKk: "SAT жазу және тіл бөлімі грамматиканы, тыныс белгілерін, сөз таңдауын және сөйлем құрылымын түзету арқылы мәтіндерді жақсарту қабілетін тексереді. Жиі сұрақ түрлері: сәйкестік, есімдіктер, анықтауыштар және параллель құрылым. Жауап таңдамас бұрын әрқашан толық сөйлемді оқыңыз.",
        keyFormulas: [
          {
            formula: "Parallel Structure: A, B, and C must all be the same grammatical form",
            description: "Items in a list or comparison must match in structure",
            descriptionRu: "Элементы списка или сравнения должны совпадать по структуре",
            descriptionKk: "Тізімдегі немесе салыстырудағы элементтер құрылымда сәйкес болуы тиіс"
          },
          {
            formula: "Pronoun Agreement: pronoun must match its antecedent in number and gender",
            description: "A pronoun must clearly refer to a specific noun",
            descriptionRu: "Местоимение должно чётко ссылаться на определённое существительное",
            descriptionKk: "Есімдік нақты зат есімге анық сілтеме жасауы керек"
          }
        ],
        solvedExamples: [
          {
            question: "Fix the parallel structure error: 'She enjoys reading, to swim, and hiking.'",
            questionRu: "Исправьте ошибку параллельной структуры: 'She enjoys reading, to swim, and hiking.'",
            questionKk: "Параллель құрылым қатесін түзетіңіз: 'She enjoys reading, to swim, and hiking.'",
            steps: [
              { en: "Identify the pattern: 'reading' (gerund), 'to swim' (infinitive), 'hiking' (gerund). The forms are inconsistent.", ru: "Определите шаблон: 'reading' (герундий), 'to swim' (инфинитив), 'hiking' (герундий). Формы несовместимы.", kk: "Үлгіні анықтаңыз: 'reading' (герундий), 'to swim' (инфинитив), 'hiking' (герундий). Формалар сәйкес емес." },
              { en: "Make all items match: 'She enjoys reading, swimming, and hiking.' (all gerunds)", ru: "Сделайте все элементы одинаковыми: 'She enjoys reading, swimming, and hiking.' (все герундии)", kk: "Барлық элементтерді сәйкестендіріңіз: 'She enjoys reading, swimming, and hiking.' (барлығы герундий)" }
            ],
            answer: "'She enjoys reading, swimming, and hiking.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Choose the correct pronoun: 'Every student should bring (their/his or her) textbook to class.'",
            questionRu: "Выберите правильное местоимение: 'Every student should bring (their/his or her) textbook to class.'",
            questionKk: "Дұрыс есімдікті таңдаңыз: 'Every student should bring (their/his or her) textbook to class.'",
            answer: "Both are acceptable in modern usage. 'Their' is widely accepted as a singular pronoun. Traditional grammar prefers 'his or her.'",
            hint: "'Every student' is singular — the pronoun must agree.",
            hintRu: "'Every student' — единственное число — местоимение должно согласовываться.",
            hintKk: "'Every student' — жекеше — есімдік сәйкес болуы тиіс.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Fix the dangling modifier: 'Walking through the park, the flowers were beautiful.'",
            questionRu: "Исправьте висячий модификатор: 'Walking through the park, the flowers were beautiful.'",
            questionKk: "Ілулі анықтауышты түзетіңіз: 'Walking through the park, the flowers were beautiful.'",
            answer: "'Walking through the park, I noticed the beautiful flowers.' (The modifier must be followed by the person performing the action.)",
            hint: "Who was walking? The flowers were not walking — add the correct subject.",
            hintRu: "Кто шёл? Цветы не шли — добавьте правильное подлежащее.",
            hintKk: "Кім жүрді? Гүлдер жүрмеді — дұрыс бастауышты қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Identify and fix ALL errors: 'The team of researchers have published their findings, which shows that exercise help improving memory and reduces stress.'",
            questionRu: "Найдите и исправьте ВСЕ ошибки: 'The team of researchers have published their findings, which shows that exercise help improving memory and reduces stress.'",
            questionKk: "БАРЛЫҚ қателерді тауып, түзетіңіз: 'The team of researchers have published their findings, which shows that exercise help improving memory and reduces stress.'",
            answer: "'The team of researchers has published its findings, which show that exercise helps improve memory and reduces stress.' Fixes: have→has (team is singular), their→its (matches team), shows→show (which refers to findings, plural), help→helps (exercise is singular), improving→improve (helps + base form).",
            hint: "Check subject-verb agreement for 'team,' pronoun reference for 'their,' and verb forms throughout.",
            hintRu: "Проверьте согласование 'team,' ссылку 'their' и формы глаголов.",
            hintKk: "'Team' сәйкестігін, 'their' сілтемесін және барлық етістік формаларын тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Listening",
        titleRu: "IELTS Аудирование",
        titleKk: "IELTS Тыңдау",
        content: "The IELTS Listening test has four sections with increasing difficulty, lasting 30 minutes plus 10 minutes for transferring answers. You hear each recording only once, so prediction is critical — read the questions before each section starts and predict what kind of answer to expect (a number, a name, a place).",
        contentRu: "Тест IELTS по аудированию состоит из четырёх разделов с возрастающей сложностью, длится 30 минут плюс 10 минут на перенос ответов. Каждую запись слышите только раз, поэтому прогнозирование критически важно — читайте вопросы до начала каждого раздела и предугадывайте тип ответа.",
        contentKk: "IELTS тыңдау тесті қиындығы артатын төрт бөлімнен тұрады, 30 минут плюс жауаптарды көшіруге 10 минут. Әр жазбаны тек бір рет естисіз, сондықтан болжау өте маңызды — әр бөлім басталмас бұрын сұрақтарды оқыңыз және жауап түрін болжаңыз.",
        keyFormulas: [
          {
            formula: "IELTS Listening Sections: 1 (social conversation) → 2 (monologue) → 3 (academic discussion) → 4 (lecture)",
            description: "The four sections progress from easiest to hardest",
            descriptionRu: "Четыре раздела от самого лёгкого до самого сложного",
            descriptionKk: "Төрт бөлім ең оңайдан ең қиынға дейін жүреді"
          },
          {
            formula: "Prediction Strategy: Read questions → Underline keywords → Predict answer type → Listen for synonyms",
            description: "Four-step approach to IELTS listening success",
            descriptionRu: "Четырёхшаговый подход к успеху в аудировании IELTS",
            descriptionKk: "IELTS тыңдауда табысқа жетудің төрт қадамдық тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "The question says: 'The library closes at _____ on weekdays.' You hear: 'Our weekday hours are nine in the morning until half past eight in the evening.' What is the answer and what format should you use?",
            questionRu: "Вопрос: 'Библиотека закрывается в _____ по будням.' Вы слышите: 'Наши будничные часы — с девяти утра до половины девятого вечера.' Каков ответ и в каком формате?",
            questionKk: "Сұрақ: 'Кітапхана жұмыс күндері _____ жабылады.' Сіз естисіз: 'Біздің жұмыс күндерінің сағаттары таңғы тоғыздан кешкі сегіздің жартысына дейін.' Жауап қандай және қай форматта?",
            steps: [
              { en: "Predict answer type: the blank asks for a closing time, so expect a time format.", ru: "Предскажите тип ответа: пропуск спрашивает время закрытия, ожидайте формат времени.", kk: "Жауап түрін болжаңыз: бос орын жабылу уақытын сұрайды, уақыт форматын күтіңіз." },
              { en: "Convert spoken time to written: 'half past eight in the evening' = 8:30 PM.", ru: "Переведите устное время в письменное: 'половина девятого вечера' = 8:30 PM.", kk: "Айтылған уақытты жазбаша аударыңыз: 'кешкі сегіздің жартысы' = 8:30 PM." }
            ],
            answer: "8:30 PM (or 20:30)"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "In IELTS Listening, you hear the recording only once. What should you do before the recording starts?",
            questionRu: "В аудировании IELTS запись слышите только раз. Что нужно сделать до начала записи?",
            questionKk: "IELTS тыңдауда жазбаны тек бір рет естисіз. Жазба басталмас бұрын не істеу керек?",
            answer: "Read the questions ahead of time, underline key words, and predict what type of answer is needed (number, name, date, etc.).",
            hint: "Think about how you can prepare before the audio plays.",
            hintRu: "Подумайте, как подготовиться до воспроизведения аудио.",
            hintKk: "Аудио ойнатылмас бұрын қалай дайындалу керектігін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "The question asks for 'the type of accommodation.' You hear: 'Instead of the usual hotel, we've arranged for everyone to stay in a guest house near the beach.' What is the answer, and what trap should you avoid?",
            questionRu: "Вопрос спрашивает 'тип жилья.' Вы слышите: 'Вместо обычного отеля мы организовали проживание в гостевом доме у пляжа.' Каков ответ и какой ловушки избегать?",
            questionKk: "Сұрақ 'тұру түрі' сұрайды. Сіз естисіз: 'Кәдімгі қонақүйдің орнына жағажай жанындағы қонақ үйде тұруды ұйымдастырдық.' Жауап қандай және қандай тұзақтан аулақ болу керек?",
            answer: "'Guest house.' The trap is writing 'hotel' — the speaker mentions it but says 'instead of,' meaning it was changed.",
            hint: "Listen for words that signal a change: 'instead of,' 'actually,' 'but.'",
            hintRu: "Слушайте слова, сигнализирующие об изменении: 'вместо,' 'на самом деле,' 'но.'",
            hintKk: "Өзгерісті білдіретін сөздерді тыңдаңыз: 'орнына,' 'шын мәнінде,' 'бірақ.'",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to label a map in Section 2. The speaker says: 'The car park is directly behind the main building. If you walk east from the car park past the tennis courts, you will reach the swimming pool on your left.' Which building is east of the tennis courts?",
            questionRu: "Вам нужно подписать карту. Говорящий: 'Парковка прямо за главным зданием. Если идти на восток от парковки мимо теннисных кортов, бассейн будет слева.' Какое здание к востоку от кортов?",
            questionKk: "Картаны белгілеу керек. Сөйлеуші: 'Автотұрақ бас ғимараттың тікелей артында. Автотұрақтан шығысқа қарай теннис корттарынан өтсеңіз, сол жағыңызда бассейн болады.' Теннис корттарынан шығысқа қай ғимарат?",
            answer: "The swimming pool is east of the tennis courts (past the courts on the way east, on the left).",
            hint: "Trace the path: start at car park → walk east → pass tennis courts → what is next?",
            hintRu: "Проследите путь: начало у парковки → идёте на восток → проходите корты → что дальше?",
            hintKk: "Жолды бақылаңыз: автотұрақтан бастаңыз → шығысқа жүріңіз → корттардан өтіңіз → кезекті не?",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Reading",
        titleRu: "IELTS Чтение",
        titleKk: "IELTS Оқу",
        content: "The IELTS Reading test has three passages of increasing difficulty with 40 questions in 60 minutes. The most important skills are skimming for the main idea, scanning for specific details, and recognizing paraphrasing — IELTS questions almost never use the exact same words as the passage.",
        contentRu: "Тест IELTS по чтению содержит три текста с возрастающей сложностью, 40 вопросов за 60 минут. Главные навыки — беглый просмотр для главной мысли, сканирование для деталей и распознавание перефразирования — вопросы IELTS почти никогда не используют те же слова, что и текст.",
        contentKk: "IELTS оқу тесті қиындығы артатын үш мәтіннен тұрады, 60 минутта 40 сұрақ. Ең маңызды дағдылар — негізгі ой үшін жылдам қарап шығу, нақты мәліметтер үшін сканерлеу және перифразаны тану — IELTS сұрақтары мәтінмен бірдей сөздерді ешқашан дерлік қолданбайды.",
        keyFormulas: [
          {
            formula: "Time allocation: Passage 1 (~15 min) + Passage 2 (~20 min) + Passage 3 (~25 min) = 60 min",
            description: "Spend more time on harder passages to maximize your score",
            descriptionRu: "Уделяйте больше времени сложным текстам для максимизации балла",
            descriptionKk: "Ұпайды барынша арттыру үшін қиын мәтіндерге көбірек уақыт бөліңіз"
          }
        ],
        solvedExamples: [
          {
            question: "A True/False/Not Given question states: 'The company was founded in 1990.' The passage says: 'Established in the early 1990s, the company quickly grew.' Is this True, False, or Not Given?",
            questionRu: "Вопрос True/False/Not Given: 'Компания основана в 1990.' Текст: 'Основанная в начале 1990-х, компания быстро выросла.' Это True, False или Not Given?",
            questionKk: "True/False/Not Given сұрағы: 'Компания 1990 жылы құрылды.' Мәтін: '1990-шы жылдардың басында құрылған компания тез өсті.' Бұл True, False немесе Not Given?",
            steps: [
              { en: "Compare: the question says '1990' (specific year), but the passage says 'early 1990s' (a range: 1990-1993 approximately).", ru: "Сравните: вопрос указывает '1990' (конкретный год), текст говорит 'начало 1990-х' (диапазон: примерно 1990-1993).", kk: "Салыстырыңыз: сұрақ '1990' (нақты жыл) дейді, мәтін '1990-шы жылдардың басы' (ауқым: шамамен 1990-1993)." },
              { en: "The passage does not confirm the exact year 1990 — it could be 1991, 1992, or 1993. This is Not Given.", ru: "Текст не подтверждает точный 1990 год — это может быть 1991, 1992 или 1993. Ответ: Not Given.", kk: "Мәтін нақты 1990 жылды растамайды — бұл 1991, 1992 немесе 1993 болуы мүмкін. Жауап: Not Given." }
            ],
            answer: "Not Given — the passage says 'early 1990s' but does not specify exactly 1990."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between skimming and scanning a text?",
            questionRu: "В чём разница между беглым просмотром и сканированием текста?",
            questionKk: "Мәтінді жылдам қарап шығу мен сканерлеудің айырмашылығы неде?",
            answer: "Skimming = reading quickly for the overall main idea (look at first/last sentences). Scanning = searching for a specific piece of information (a name, date, or number).",
            hint: "One is about the big picture, the other is about finding details.",
            hintRu: "Одно о общей картине, другое о поиске деталей.",
            hintKk: "Бірі жалпы сурет туралы, екіншісі мәліметтерді табу туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "The passage says: 'Marine pollution has devastating consequences for ocean ecosystems.' A matching heading option says: 'The harmful effects of sea contamination.' Are these a match? Why?",
            questionRu: "Текст: 'Морское загрязнение имеет разрушительные последствия для экосистем.' Вариант заголовка: 'Вредные последствия загрязнения моря.' Совпадают ли они? Почему?",
            questionKk: "Мәтін: 'Теңіз ластануы мұхит экожүйелеріне жойқын салдар тигізеді.' Тақырып нұсқасы: 'Теңіз ластануының зиянды салдары.' Бұлар сәйкес пе? Неліктен?",
            answer: "Yes — 'marine pollution' = 'sea contamination' (synonym), 'devastating consequences' = 'harmful effects' (paraphrase), 'ocean ecosystems' is implied. IELTS uses paraphrasing extensively.",
            hint: "Look for synonyms: marine = sea, devastating = harmful, consequences = effects.",
            hintRu: "Ищите синонимы: marine = sea, devastating = harmful, consequences = effects.",
            hintKk: "Синонимдерді іздеңіз: marine = sea, devastating = harmful, consequences = effects.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have 20 minutes left and 15 questions remaining on IELTS Reading Passage 3. Seven are matching headings, five are sentence completion, and three are multiple choice. What order should you tackle them and why?",
            questionRu: "Осталось 20 минут и 15 вопросов к третьему тексту IELTS. 7 — подбор заголовков, 5 — завершение предложений, 3 — множественный выбор. В каком порядке решать и почему?",
            questionKk: "IELTS оқу 3-мәтініне 20 минут және 15 сұрақ қалды. 7 — тақырыптарды сәйкестендіру, 5 — сөйлемді аяқтау, 3 — көп таңдаулы. Қандай ретпен шешу керек және неліктен?",
            answer: "1st: Multiple choice (3 questions, quick if you skim well). 2nd: Sentence completion (5 questions, answers are in passage order). 3rd: Matching headings (7 questions, most time-consuming). This order maximizes questions answered if time runs out.",
            hint: "Start with the question types that are fastest to answer to maximize completed questions.",
            hintRu: "Начните с самых быстрых типов вопросов для максимального количества ответов.",
            hintKk: "Аяқталған сұрақтарды барынша арттыру үшін ең жылдам жауап берілетін сұрақ түрлерінен бастаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "TOEFL Structure",
        titleRu: "Структура TOEFL",
        titleKk: "TOEFL құрылымы",
        content: "The TOEFL iBT tests English proficiency across four sections: Reading (54-72 min), Listening (41-57 min), Speaking (17 min), and Writing (50 min). Unlike IELTS, TOEFL is entirely computer-based and uses American English. The total score ranges from 0 to 120, with each section scored 0-30.",
        contentRu: "TOEFL iBT проверяет владение английским по четырём разделам: Чтение (54-72 мин), Аудирование (41-57 мин), Говорение (17 мин) и Письмо (50 мин). В отличие от IELTS, TOEFL полностью компьютерный и использует американский английский. Общий балл: 0-120, каждый раздел: 0-30.",
        contentKk: "TOEFL iBT ағылшын тілін төрт бөлім бойынша тексереді: Оқу (54-72 мин), Тыңдау (41-57 мин), Сөйлеу (17 мин) және Жазу (50 мин). IELTS-тен айырмашылығы, TOEFL толығымен компьютерлік және американдық ағылшын тілін қолданады. Жалпы ұпай: 0-120, әр бөлім: 0-30.",
        keyFormulas: [
          {
            formula: "TOEFL Total = Reading (0-30) + Listening (0-30) + Speaking (0-30) + Writing (0-30) = 0-120",
            description: "TOEFL scoring breakdown by section",
            descriptionRu: "Структура оценивания TOEFL по разделам",
            descriptionKk: "TOEFL бөлімдер бойынша бағалау құрылымы"
          },
          {
            formula: "Note-taking: Keywords + Abbreviations + Symbols (→, =, ↑, ↓, ∴)",
            description: "Efficient note-taking is critical for TOEFL listening and integrated tasks",
            descriptionRu: "Эффективное конспектирование критически важно для аудирования и интегрированных заданий TOEFL",
            descriptionKk: "Тиімді жазба жасау TOEFL тыңдау және біріктірілген тапсырмалар үшін өте маңызды"
          }
        ],
        solvedExamples: [
          {
            question: "A student scores Reading: 24, Listening: 22, Speaking: 20, Writing: 23. What is the total score? If the target university requires 90+, does the student qualify?",
            questionRu: "Студент набрал Чтение: 24, Аудирование: 22, Говорение: 20, Письмо: 23. Каков общий балл? Если университет требует 90+, проходит ли студент?",
            questionKk: "Студент Оқу: 24, Тыңдау: 22, Сөйлеу: 20, Жазу: 23 жинады. Жалпы ұпай қандай? Университет 90+ талап етсе, студент өте ме?",
            steps: [
              { en: "Add all sections: 24 + 22 + 20 + 23 = 89.", ru: "Сложите все разделы: 24 + 22 + 20 + 23 = 89.", kk: "Барлық бөлімдерді қосыңыз: 24 + 22 + 20 + 23 = 89." },
              { en: "Compare to requirement: 89 < 90. The student does not meet the minimum. Speaking (20) is the weakest section to focus on.", ru: "Сравните с требованием: 89 < 90. Студент не проходит. Говорение (20) — самый слабый раздел для улучшения.", kk: "Талаппен салыстырыңыз: 89 < 90. Студент талапты қанағаттандырмайды. Сөйлеу (20) — жақсартуға назар аударатын ең әлсіз бөлім." }
            ],
            answer: "Total: 89. Does not meet 90+ requirement. Should focus on improving Speaking."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many sections does the TOEFL iBT have, and what is the maximum total score?",
            questionRu: "Сколько разделов в TOEFL iBT и каков максимальный балл?",
            questionKk: "TOEFL iBT-де қанша бөлім бар және максималды ұпай қандай?",
            answer: "4 sections (Reading, Listening, Speaking, Writing), maximum total score is 120 (30 per section).",
            hint: "Each of the four sections has a maximum of 30 points.",
            hintRu: "Каждый из четырёх разделов имеет максимум 30 баллов.",
            hintKk: "Төрт бөлімнің әрқайсысының максимумы 30 ұпай.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Name two key differences between TOEFL and IELTS in format and language variety.",
            questionRu: "Назовите два ключевых отличия TOEFL от IELTS по формату и варианту языка.",
            questionKk: "TOEFL мен IELTS арасындағы формат және тіл нұсқасы бойынша екі негізгі айырмашылықты атаңыз.",
            answer: "1) TOEFL is fully computer-based while IELTS has a paper option and face-to-face speaking. 2) TOEFL uses American English while IELTS uses British English (though both accept either accent).",
            hint: "Think about how you take each test and what English variant each uses.",
            hintRu: "Подумайте, как сдаётся каждый тест и какой вариант английского используется.",
            hintKk: "Әр тестті қалай тапсыратыныңызды және қандай ағылшын нұсқасы қолданылатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student needs a TOEFL score of 100 with minimums of 22 in each section. They scored Reading: 28, Listening: 25, Speaking: 19, Writing: 24. Do they meet the requirements? What is their strategy?",
            questionRu: "Студенту нужен TOEFL 100 с минимумом 22 в каждом разделе. Баллы: Чтение: 28, Аудирование: 25, Говорение: 19, Письмо: 24. Проходит ли? Какова стратегия?",
            questionKk: "Студентке TOEFL 100 қажет, әр бөлімде кемінде 22. Ұпайлар: Оқу: 28, Тыңдау: 25, Сөйлеу: 19, Жазу: 24. Талапты қанағаттандыра ма? Стратегиясы қандай?",
            answer: "Total: 96 (below 100) and Speaking: 19 (below 22 minimum). They fail on both criteria. Strategy: Focus heavily on Speaking (+3 points minimum needed), and gain 4+ more points across other sections. Speaking practice with templates and recording themselves is the priority.",
            hint: "Check both the total and each section minimum separately.",
            hintRu: "Проверьте отдельно общий балл и минимум по каждому разделу.",
            hintKk: "Жалпы ұпай мен әр бөлімнің минимумын бөлек тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "ACT Science",
        titleRu: "ACT Наука",
        titleKk: "ACT Ғылым",
        content: "The ACT Science section tests data interpretation, not science knowledge — you do not need to memorize facts. In 35 minutes, you answer 40 questions about graphs, tables, experiments, and conflicting viewpoints. The key is reading data displays quickly and accurately rather than understanding complex science theory.",
        contentRu: "Раздел науки ACT проверяет интерпретацию данных, а не научные знания — запоминать факты не нужно. За 35 минут вы отвечаете на 40 вопросов о графиках, таблицах, экспериментах и противоречивых точках зрения. Главное — быстро и точно читать данные, а не понимать сложную теорию.",
        contentKk: "ACT ғылым бөлімі ғылыми білімді емес, деректерді түсіндіруді тексереді — фактілерді жаттау қажет емес. 35 минутта графиктер, кестелер, тәжірибелер және қарама-қарсы көзқарастар туралы 40 сұраққа жауап бересіз. Негізгісі — күрделі ғылым теориясын түсіну емес, деректерді жылдам және дәл оқу.",
        keyFormulas: [
          {
            formula: "ACT Science: ~52 seconds per question (35 min ÷ 40 questions)",
            description: "Very fast pacing is required — do not overthink questions",
            descriptionRu: "Требуется очень быстрый темп — не задумывайтесь над вопросами",
            descriptionKk: "Өте жылдам қарқын қажет — сұрақтар үстінде тым ұзақ ойланбаңыз"
          }
        ],
        solvedExamples: [
          {
            question: "A table shows temperature vs. solubility: 20°C=36g, 40°C=65g, 60°C=110g, 80°C=170g. What trend do you observe? Predict solubility at 100°C.",
            questionRu: "Таблица показывает температуру и растворимость: 20°C=36г, 40°C=65г, 60°C=110г, 80°C=170г. Какую тенденцию вы наблюдаете? Предскажите растворимость при 100°C.",
            questionKk: "Кесте температура мен ерігіштікті көрсетеді: 20°C=36г, 40°C=65г, 60°C=110г, 80°C=170г. Қандай тренд байқайсыз? 100°C-дегі ерігіштікті болжаңыз.",
            steps: [
              { en: "Identify the trend: as temperature increases by 20°C, solubility increases (+29, +45, +60) — the rate of increase is accelerating.", ru: "Определите тенденцию: с ростом температуры на 20°C растворимость растёт (+29, +45, +60) — скорость увеличения ускоряется.", kk: "Трендті анықтаңыз: температура 20°C-ға артқан сайын ерігіштік артады (+29, +45, +60) — арту жылдамдығы жеделдейді." },
              { en: "Extrapolate: the increase is growing (~+15 per step). Next increase ≈ +75. Predicted solubility at 100°C ≈ 170 + 75 = 245g.", ru: "Экстраполируйте: рост увеличивается (~+15 за шаг). Следующий рост ≈ +75. Прогноз при 100°C ≈ 170 + 75 = 245г.", kk: "Экстраполяция жасаңыз: артуы өседі (қадамға ~+15). Келесі арту ≈ +75. 100°C-дегі болжам ≈ 170 + 75 = 245г." }
            ],
            answer: "Trend: solubility increases as temperature rises, at an accelerating rate. Predicted at 100°C: approximately 245g."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Does the ACT Science section require you to memorize science facts before the test?",
            questionRu: "Требует ли раздел науки ACT запоминания научных фактов перед тестом?",
            questionKk: "ACT ғылым бөлімі тест алдында ғылыми фактілерді жаттауды талап ете ме?",
            answer: "No. The ACT Science section tests your ability to interpret data from graphs, tables, and experiments. All information needed is provided in the passages.",
            hint: "Think about what 'data interpretation' means — does it require prior knowledge?",
            hintRu: "Подумайте, что значит 'интерпретация данных' — требуются ли предварительные знания?",
            hintKk: "'Деректерді түсіндіру' нені білдіреді — алдын ала білім қажет пе?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "An experiment tested plant growth with 3 fertilizers. Fertilizer A: 15cm growth, B: 22cm, C: 18cm, Control (no fertilizer): 10cm. Which fertilizer was most effective, and how do you know the fertilizers actually worked?",
            questionRu: "Эксперимент проверил рост растений с 3 удобрениями. A: 15см, B: 22см, C: 18см, Контроль (без удобрения): 10см. Какое удобрение эффективнее и как вы знаете, что удобрения работают?",
            questionKk: "Тәжірибе 3 тыңайтқышпен өсімдік өсуін тексерді. A: 15см, B: 22см, C: 18см, Бақылау (тыңайтқышсыз): 10см. Қай тыңайтқыш тиімдірек және тыңайтқыштардың жұмыс істегенін қалай білесіз?",
            answer: "Fertilizer B was most effective (22cm). We know they worked because all fertilizer groups grew more than the control group (10cm), which had no fertilizer.",
            hint: "Compare each result to the control group to determine effectiveness.",
            hintRu: "Сравните каждый результат с контрольной группой для определения эффективности.",
            hintKk: "Тиімділікті анықтау үшін әр нәтижені бақылау тобымен салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Two scientists disagree. Scientist 1 says global warming is primarily caused by CO2 emissions. Scientist 2 says natural solar cycles are the main driver. A graph shows CO2 rising steadily since 1950, while solar output has been flat since 1980 but temperatures keep rising. Which scientist does the data better support?",
            questionRu: "Два учёных спорят. Учёный 1 считает главной причиной потепления выбросы CO2. Учёный 2 — солнечные циклы. График показывает рост CO2 с 1950-х, а солнечная активность стабильна с 1980-х, но температура продолжает расти. Кого лучше поддерживают данные?",
            questionKk: "Екі ғалым келіспейді. 1-ғалым жылынудың негізгі себебін CO2 шығарындылары дейді. 2-ғалым — күн циклдері. График CO2-нің 1950-ден бері тұрақты өскенін, ал күн белсенділігінің 1980-ден бері тұрақты екенін көрсетеді, бірақ температура артуда. Деректер қай ғалымды жақсырақ қолдайды?",
            answer: "Scientist 1. Since 1980, solar output has been flat but temperatures continue rising alongside CO2 increases. If solar cycles were the main driver (Scientist 2), temperatures should have leveled off when solar output did. The correlation between CO2 and temperature, even when solar output is stable, supports CO2 as the primary cause.",
            hint: "Look at what changed and what stayed the same after 1980, and which factor matches the temperature trend.",
            hintRu: "Посмотрите, что изменилось и что осталось прежним после 1980, и какой фактор совпадает с трендом температуры.",
            hintKk: "1980-ден кейін не өзгергенін және не тұрақты қалғанын қараңыз және қай фактор температура трендіне сәйкес келеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Essay Writing",
        titleRu: "Написание эссе",
        titleKk: "Эссе жазу",
        content: "Essay writing on admission exams requires a clear thesis, organized body paragraphs, and a strong conclusion — all within a time limit. The five-paragraph essay structure (introduction, three body paragraphs, conclusion) is a reliable framework. Your thesis statement should clearly state your position and preview your main arguments.",
        contentRu: "Написание эссе на вступительных экзаменах требует чёткого тезиса, организованных основных абзацев и сильного заключения — в рамках ограниченного времени. Структура из пяти абзацев (введение, три основных, заключение) — надёжная основа. Тезис должен чётко выражать вашу позицию и предварять главные аргументы.",
        contentKk: "Қабылдау емтихандарында эссе жазу анық тезис, ұйымдасқан негізгі абзацтар және мықты қорытынды талап етеді — уақыт шегінде. Бес абзацтық эссе құрылымы (кіріспе, үш негізгі абзац, қорытынды) сенімді негіз. Тезис мәлімдемесі позицияңызды анық білдіріп, негізгі аргументтерді алдын ала көрсетуі тиіс.",
        keyFormulas: [
          {
            formula: "Essay Structure: Introduction (thesis) → Body 1 (argument + evidence) → Body 2 → Body 3 → Conclusion",
            description: "The standard five-paragraph essay format",
            descriptionRu: "Стандартный формат эссе из пяти абзацев",
            descriptionKk: "Стандартты бес абзацтық эссе форматы"
          },
          {
            formula: "Thesis = Topic + Your Position + 2-3 Reasons",
            description: "A strong thesis statement formula",
            descriptionRu: "Формула сильного тезиса",
            descriptionKk: "Мықты тезис мәлімдемесінің формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a thesis statement for the topic: 'Should schools require uniforms?'",
            questionRu: "Напишите тезис на тему: 'Должны ли школы требовать форму?'",
            questionKk: "'Мектептер форма кию міндеттеуі керек пе?' тақырыбына тезис жазыңыз.",
            steps: [
              { en: "Choose your position: Agree that schools should require uniforms.", ru: "Выберите позицию: Согласны, что школы должны требовать форму.", kk: "Позицияңызды таңдаңыз: Мектептер форма талап етуі керек деп келісесіз." },
              { en: "Add 2-3 reasons: reduces bullying, saves families money, creates focus on learning.", ru: "Добавьте 2-3 причины: уменьшает буллинг, экономит деньги семей, создаёт фокус на учёбе.", kk: "2-3 себеп қосыңыз: буллингті азайтады, отбасыларға ақша үнемдейді, оқуға назар аударады." }
            ],
            answer: "'Schools should require uniforms because they reduce bullying based on clothing, save families money on school wardrobes, and help students focus on learning rather than fashion.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of a five-paragraph essay?",
            questionRu: "Каковы три части эссе из пяти абзацев?",
            questionKk: "Бес абзацтық эссенің үш бөлігі қандай?",
            answer: "Introduction (with thesis), Body paragraphs (3 paragraphs with arguments and evidence), and Conclusion (restates thesis and summarizes).",
            hint: "Think about the beginning, middle, and end of an essay.",
            hintRu: "Подумайте о начале, середине и конце эссе.",
            hintKk: "Эссенің басы, ортасы және соңын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a thesis statement for: 'Is technology helpful or harmful for education?'",
            questionRu: "Напишите тезис: 'Технология полезна или вредна для образования?'",
            questionKk: "'Технология білім беру үшін пайдалы ма, зиянды ма?' тақырыбына тезис жазыңыз.",
            answer: "Example: 'While technology presents some distractions, it is overwhelmingly beneficial for education because it provides access to vast resources, enables personalized learning, and prepares students for a digital workforce.'",
            hint: "State your position clearly and give 2-3 reasons in one sentence.",
            hintRu: "Чётко изложите позицию и приведите 2-3 причины в одном предложении.",
            hintKk: "Позицияңызды анық білдіріп, бір сөйлемде 2-3 себеп беріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have 30 minutes to write an essay on 'Should the voting age be lowered to 16?' Create a complete outline with thesis, three body paragraph topics, one piece of evidence per body paragraph, and a conclusion strategy.",
            questionRu: "У вас 30 минут на эссе 'Нужно ли снизить возраст голосования до 16 лет?' Составьте полный план с тезисом, тремя темами абзацев, одним доказательством на абзац и стратегией заключения.",
            questionKk: "30 минутыңыз бар: 'Дауыс беру жасын 16-ға дейін төмендету керек пе?' Тезис, үш абзац тақырыбы, абзацқа бір дәлел және қорытынды стратегиясымен толық жоспар жасаңыз.",
            answer: "Thesis: 'The voting age should be lowered to 16 because teens are affected by political decisions, civic engagement improves with early participation, and many 16-year-olds are already contributing members of society.' Body 1: Teens affected by education/climate policy (evidence: school funding decisions). Body 2: Early voting builds lifelong habits (evidence: studies from Austria/Scotland where 16-year-olds can vote). Body 3: 16-year-olds can work and pay taxes (evidence: taxation without representation argument). Conclusion: Restate thesis, call to action for democratic inclusion.",
            hint: "Spend 5 minutes planning before writing. Each body paragraph needs a clear topic and one supporting fact.",
            hintRu: "Потратьте 5 минут на планирование. Каждый абзац — чёткая тема и один подтверждающий факт.",
            hintKk: "Жазбас бұрын 5 минут жоспарлауға жұмсаңыз. Әр абзацқа анық тақырып және бір қосымша факт қажет.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Admission Exams_10": {
    planetName: "Admission Exams",
    introduction: {
      en: "Welcome to Admission Exams for Grade 10! Dive deeper into SAT Advanced Algebra, Geometry & Trigonometry, Passage Analysis, and Writing & Language. Explore ACT Math and Reading strategies, and begin serious IELTS Writing and Speaking preparation alongside TOEFL Reading skills.",
      ru: "Добро пожаловать в Вступительные экзамены для 10 класса! Углубитесь в продвинутую алгебру SAT, геометрию и тригонометрию, анализ текстов и раздел письма. Изучите стратегии ACT по математике и чтению, а также начните серьёзную подготовку к IELTS Writing, Speaking и TOEFL Reading."
    },
    sections: [
      {
        title: "SAT Advanced Algebra",
        titleRu: "SAT Продвинутая алгебра",
        titleKk: "SAT Күрделі алгебра",
        content: "Advanced algebra on the SAT covers quadratic equations, polynomial operations, and exponential functions. You need to factor quadratics quickly, use the quadratic formula, and recognize how transformations shift parabolas on a graph. These topics appear in roughly 20% of SAT Math questions.",
        contentRu: "Продвинутая алгебра SAT охватывает квадратные уравнения, операции с многочленами и экспоненциальные функции. Нужно быстро раскладывать квадратные уравнения, использовать формулу дискриминанта и понимать, как преобразования сдвигают параболы на графике. Эти темы составляют около 20% вопросов математики SAT.",
        contentKk: "SAT күрделі алгебрасы квадрат теңдеулерді, көпмүшелік амалдарды және экспоненциалды функцияларды қамтиды. Квадрат теңдеулерді жылдам жіктеу, дискриминант формуласын қолдану және параболалардың графиктегі ауысуын тану қажет. Бұл тақырыптар SAT математика сұрақтарының шамамен 20%-ын құрайды.",
        keyFormulas: [
          {
            formula: "x = (−b ± √(b² − 4ac)) / 2a",
            description: "Quadratic formula for solving ax² + bx + c = 0",
            descriptionRu: "Формула дискриминанта для решения ax² + bx + c = 0",
            descriptionKk: "ax² + bx + c = 0 шешуге арналған квадрат формула"
          },
          {
            formula: "a² − b² = (a + b)(a − b)",
            description: "Difference of squares factoring pattern",
            descriptionRu: "Разложение разности квадратов",
            descriptionKk: "Квадраттар айырмасын жіктеу үлгісі"
          }
        ],
        solvedExamples: [
          {
            question: "Solve x² − 5x + 6 = 0 using factoring.",
            questionRu: "Решите x² − 5x + 6 = 0 методом разложения.",
            questionKk: "x² − 5x + 6 = 0 теңдеуін жіктеу арқылы шешіңіз.",
            steps: [
              { en: "Factor the quadratic: (x − 2)(x − 3) = 0.", ru: "Разложите квадратное уравнение: (x − 2)(x − 3) = 0.", kk: "Квадрат теңдеуді жіктеңіз: (x − 2)(x − 3) = 0." },
              { en: "Set each factor to zero: x = 2 or x = 3.", ru: "Приравняйте каждый множитель к нулю: x = 2 или x = 3.", kk: "Әр көбейткішті нөлге теңестіріңіз: x = 2 немесе x = 3." }
            ],
            answer: "x = 2 or x = 3"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Factor x² − 9.",
            questionRu: "Разложите x² − 9.",
            questionKk: "x² − 9 жіктеңіз.",
            answer: "(x + 3)(x − 3)",
            hint: "This is a difference of squares: a² − b² = (a+b)(a−b).",
            hintRu: "Это разность квадратов: a² − b² = (a+b)(a−b).",
            hintKk: "Бұл квадраттар айырмасы: a² − b² = (a+b)(a−b).",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Solve 2x² + 3x − 5 = 0 using the quadratic formula.",
            questionRu: "Решите 2x² + 3x − 5 = 0 с помощью формулы дискриминанта.",
            questionKk: "2x² + 3x − 5 = 0 теңдеуін квадрат формуламен шешіңіз.",
            answer: "x = 1 or x = −2.5",
            hint: "Identify a=2, b=3, c=−5 and plug into the quadratic formula.",
            hintRu: "Определите a=2, b=3, c=−5 и подставьте в формулу дискриминанта.",
            hintKk: "a=2, b=3, c=−5 анықтап, квадрат формулаға қойыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "The equation x² + kx + 9 = 0 has exactly one solution. Find all possible values of k.",
            questionRu: "Уравнение x² + kx + 9 = 0 имеет ровно одно решение. Найдите все возможные значения k.",
            questionKk: "x² + kx + 9 = 0 теңдеуінің тек бір шешімі бар. k-нің барлық мүмкін мәндерін табыңыз.",
            answer: "k = 6 or k = −6",
            hint: "For exactly one solution, the discriminant b² − 4ac must equal zero.",
            hintRu: "Для одного решения дискриминант b² − 4ac должен равняться нулю.",
            hintKk: "Бір ғана шешім үшін дискриминант b² − 4ac нөлге тең болуы керек.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Geometry & Trigonometry",
        titleRu: "SAT Геометрия и тригонометрия",
        titleKk: "SAT Геометрия және тригонометрия",
        content: "The SAT tests geometry concepts including area, volume, angles, triangles, circles, and basic trigonometry. You should know the Pythagorean theorem, special right triangles (30-60-90 and 45-45-90), and SOHCAHTOA for sine, cosine, and tangent ratios. These questions make up about 15% of the math section.",
        contentRu: "SAT проверяет геометрию: площади, объёмы, углы, треугольники, окружности и базовую тригонометрию. Нужно знать теорему Пифагора, особые прямоугольные треугольники (30-60-90 и 45-45-90) и SOHCAHTOA для отношений синуса, косинуса и тангенса. Эти вопросы составляют около 15% раздела математики.",
        contentKk: "SAT геометрия тұжырымдамаларын тексереді: аудандар, көлемдер, бұрыштар, үшбұрыштар, шеңберлер және негізгі тригонометрия. Пифагор теоремасын, ерекше тік бұрышты үшбұрыштарды (30-60-90 және 45-45-90) және синус, косинус, тангенс қатынастары үшін SOHCAHTOA білу қажет. Бұл сұрақтар математика бөлімінің шамамен 15%-ын құрайды.",
        keyFormulas: [
          {
            formula: "sin θ = opposite / hypotenuse; cos θ = adjacent / hypotenuse; tan θ = opposite / adjacent",
            description: "SOHCAHTOA — basic trigonometric ratios",
            descriptionRu: "SOHCAHTOA — основные тригонометрические отношения",
            descriptionKk: "SOHCAHTOA — негізгі тригонометриялық қатынастар"
          }
        ],
        solvedExamples: [
          {
            question: "A right triangle has legs of 6 and 8. Find the hypotenuse and sin of the angle opposite the side of length 6.",
            questionRu: "Прямоугольный треугольник имеет катеты 6 и 8. Найдите гипотенузу и синус угла, противолежащего стороне длиной 6.",
            questionKk: "Тік бұрышты үшбұрыштың катеттері 6 және 8. Гипотенузаны және 6 қабырғаға қарсы бұрыштың синусын табыңыз.",
            steps: [
              { en: "Hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10.", ru: "Гипотенуза = √(6² + 8²) = √(36 + 64) = √100 = 10.", kk: "Гипотенуза = √(6² + 8²) = √(36 + 64) = √100 = 10." },
              { en: "sin θ = opposite / hypotenuse = 6 / 10 = 0.6.", ru: "sin θ = противолежащий / гипотенуза = 6 / 10 = 0,6.", kk: "sin θ = қарсы жақ / гипотенуза = 6 / 10 = 0,6." }
            ],
            answer: "Hypotenuse = 10, sin θ = 0.6"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Find the area of a triangle with base 10 and height 7.",
            questionRu: "Найдите площадь треугольника с основанием 10 и высотой 7.",
            questionKk: "Табаны 10, биіктігі 7 үшбұрыштың ауданын табыңыз.",
            answer: "35 square units (A = ½ × 10 × 7 = 35)",
            hint: "Area of a triangle = ½ × base × height.",
            hintRu: "Площадь треугольника = ½ × основание × высота.",
            hintKk: "Үшбұрыш ауданы = ½ × табан × биіктік.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "In a 45-45-90 triangle, the hypotenuse is 10√2. What is the length of each leg?",
            questionRu: "В треугольнике 45-45-90 гипотенуза равна 10√2. Какова длина каждого катета?",
            questionKk: "45-45-90 үшбұрышта гипотенуза 10√2. Әр катеттің ұзындығы қандай?",
            answer: "Each leg = 10",
            hint: "In a 45-45-90 triangle, each leg = hypotenuse / √2.",
            hintRu: "В треугольнике 45-45-90 каждый катет = гипотенуза / √2.",
            hintKk: "45-45-90 үшбұрышта әр катет = гипотенуза / √2.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A circle has a central angle of 60° and radius 12. Find the arc length and the area of the sector.",
            questionRu: "Окружность имеет центральный угол 60° и радиус 12. Найдите длину дуги и площадь сектора.",
            questionKk: "Шеңбердің центрлік бұрышы 60° және радиусы 12. Доға ұзындығы мен сектор ауданын табыңыз.",
            answer: "Arc length = 4π ≈ 12.57; Sector area = 24π ≈ 75.40",
            hint: "Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².",
            hintRu: "Длина дуги = (θ/360) × 2πr; Площадь сектора = (θ/360) × πr².",
            hintKk: "Доға ұзындығы = (θ/360) × 2πr; Сектор ауданы = (θ/360) × πr².",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Passage Analysis",
        titleRu: "SAT Анализ текстов",
        titleKk: "SAT Мәтін талдау",
        content: "SAT Reading passages test your ability to understand main ideas, analyze evidence, interpret vocabulary in context, and draw inferences. Each passage is followed by questions that require close reading. Focus on identifying the author's purpose, tone, and how evidence supports claims.",
        contentRu: "Тексты SAT Reading проверяют понимание основных идей, анализ доказательств, интерпретацию словарного запаса в контексте и формулирование выводов. За каждым текстом следуют вопросы, требующие внимательного чтения. Сосредоточьтесь на определении цели автора, тона и того, как доказательства поддерживают утверждения.",
        contentKk: "SAT Reading мәтіндері негізгі идеяларды түсіну, дәлелдерді талдау, контекстегі сөздік қорын түсіндіру және қорытынды жасау қабілетін тексереді. Әр мәтіннен кейін мұқият оқуды талап ететін сұрақтар беріледі. Автордың мақсатын, үнін және дәлелдердің мәлімдемелерді қалай қолдайтынын анықтауға назар аударыңыз.",
        keyFormulas: [
          {
            formula: "Main Idea = What + So What (Topic + Author's Point about it)",
            description: "Framework for identifying the central argument of a passage",
            descriptionRu: "Метод определения центрального аргумента текста",
            descriptionKk: "Мәтіннің негізгі аргументін анықтау әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "A passage argues that urban gardens improve community health. One paragraph states: 'Residents who participated in the garden program reported 30% lower stress levels.' What role does this sentence play?",
            questionRu: "Текст утверждает, что городские сады улучшают здоровье сообщества. Один абзац гласит: 'Жители, участвующие в программе садоводства, сообщили о снижении стресса на 30%.' Какую роль играет это предложение?",
            questionKk: "Мәтін қалалық бақтардың қоғам денсаулығын жақсартатынын дәлелдейді. Бір абзацта: 'Бақ бағдарламасына қатысқан тұрғындар стресс деңгейінің 30%-ға төмендегенін хабарлады.' Бұл сөйлемнің рөлі қандай?",
            steps: [
              { en: "Identify the claim: urban gardens improve community health.", ru: "Определите утверждение: городские сады улучшают здоровье сообщества.", kk: "Мәлімдемені анықтаңыз: қалалық бақтар қоғам денсаулығын жақсартады." },
              { en: "The sentence provides quantitative evidence (30% lower stress) supporting the main claim.", ru: "Предложение предоставляет количественное доказательство (на 30% ниже стресс), подтверждающее основное утверждение.", kk: "Сөйлем негізгі мәлімдемені қолдайтын сандық дәлел береді (стресс 30%-ға төмен)." }
            ],
            answer: "It serves as supporting evidence for the passage's main argument that urban gardens improve health."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the first thing you should identify when reading an SAT passage?",
            questionRu: "Что нужно определить в первую очередь при чтении текста SAT?",
            questionKk: "SAT мәтінін оқығанда алдымен нені анықтау керек?",
            answer: "The main idea — what the passage is about and what point the author is making.",
            hint: "Think about the big picture: topic + author's argument.",
            hintRu: "Подумайте о общей картине: тема + аргумент автора.",
            hintKk: "Жалпы суретті ойлаңыз: тақырып + автордың аргументі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A passage states: 'The decline of pollinators threatens global food security.' Which of the following would best strengthen this claim? (A) Bees are fascinating insects. (B) 75% of food crops depend on animal pollination. (C) Some flowers are very beautiful.",
            questionRu: "Текст гласит: 'Сокращение опылителей угрожает продовольственной безопасности.' Что лучше укрепит утверждение? (A) Пчёлы — интересные насекомые. (B) 75% продовольственных культур зависят от животного опыления. (C) Некоторые цветы очень красивы.",
            questionKk: "Мәтінде: 'Тозаңдатқыштардың азаюы жаһандық азық-түлік қауіпсіздігіне қатер төндіреді.' Қайсысы мәлімдемені жақсы нығайтады? (A) Аралар қызықты жәндіктер. (B) Тамақ дақылдарының 75%-ы жануарлар тозаңдатуына тәуелді. (C) Кейбір гүлдер өте әдемі.",
            answer: "B — it provides a specific statistic directly linking pollinators to food production.",
            hint: "Look for the answer that provides direct, relevant evidence for the claim.",
            hintRu: "Ищите ответ, дающий прямое, релевантное доказательство.",
            hintKk: "Мәлімдемеге тікелей, сәйкес дәлел беретін жауапты іздеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "An author writes about renewable energy. Paragraph 2 discusses solar power's benefits; Paragraph 3 discusses its limitations. How would you describe the author's overall approach?",
            questionRu: "Автор пишет о возобновляемой энергии. Параграф 2 обсуждает преимущества солнечной энергии; параграф 3 — её ограничения. Как бы вы описали общий подход автора?",
            questionKk: "Автор жаңартылатын энергия туралы жазады. 2-абзац күн энергиясының артықшылықтарын; 3-абзац оның шектеулерін талқылайды. Автордың жалпы тәсілін қалай сипаттар едіңіз?",
            answer: "The author takes a balanced, analytical approach — presenting both advantages and disadvantages to give a nuanced view.",
            hint: "When an author presents both sides, the tone is usually balanced or analytical, not one-sided.",
            hintRu: "Когда автор представляет обе стороны, тон обычно сбалансированный или аналитический.",
            hintKk: "Автор екі жағын да көрсеткенде, үні әдетте теңдестірілген немесе аналитикалық.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Writing & Language",
        titleRu: "SAT Письмо и язык",
        titleKk: "SAT Жазу және тіл",
        content: "The SAT Writing & Language section tests grammar, punctuation, sentence structure, and rhetorical skills. You must identify and fix errors in passages covering subject-verb agreement, pronoun clarity, comma usage, and transitions. Strong writers also improve conciseness and logical flow.",
        contentRu: "Раздел SAT Writing & Language проверяет грамматику, пунктуацию, структуру предложений и риторические навыки. Нужно находить и исправлять ошибки в текстах: согласование подлежащего и сказуемого, ясность местоимений, использование запятых и переходы. Хорошие авторы также улучшают краткость и логическую связность.",
        contentKk: "SAT Writing & Language бөлімі грамматиканы, тыныс белгілерін, сөйлем құрылымын және риторикалық дағдыларды тексереді. Мәтіндердегі қателерді тауып түзету керек: бастауыш-баяндауыш сәйкестігі, есімдіктердің анықтығы, үтір қолдану және ауысулар. Жақсы жазушылар қысқалық пен логикалық ағынды да жақсартады.",
        keyFormulas: [
          {
            formula: "Subject-Verb Agreement: Singular subject → singular verb; Plural subject → plural verb",
            description: "Core grammar rule tested heavily on the SAT",
            descriptionRu: "Основное правило грамматики, активно проверяемое на SAT",
            descriptionKk: "SAT-та белсенді тексерілетін негізгі грамматика ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "Fix the error: 'The group of students were excited about the trip.'",
            questionRu: "Исправьте ошибку: 'The group of students were excited about the trip.'",
            questionKk: "Қатені түзетіңіз: 'The group of students were excited about the trip.'",
            steps: [
              { en: "Identify the subject: 'group' (singular), not 'students'.", ru: "Определите подлежащее: 'group' (единственное число), а не 'students'.", kk: "Бастауышты анықтаңыз: 'group' (жекеше), 'students' емес." },
              { en: "Correct to: 'The group of students was excited about the trip.'", ru: "Исправьте: 'The group of students was excited about the trip.'", kk: "Түзетіңіз: 'The group of students was excited about the trip.'" }
            ],
            answer: "'The group of students was excited about the trip.' — 'group' is singular and requires 'was'."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Choose the correct verb: 'Each of the answers (is/are) correct.'",
            questionRu: "Выберите правильный глагол: 'Each of the answers (is/are) correct.'",
            questionKk: "Дұрыс етістікті таңдаңыз: 'Each of the answers (is/are) correct.'",
            answer: "'is' — 'Each' is singular and takes a singular verb.",
            hint: "The subject is 'Each' (singular), not 'answers'.",
            hintRu: "Подлежащее — 'Each' (единственное число), а не 'answers'.",
            hintKk: "Бастауыш — 'Each' (жекеше), 'answers' емес.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Improve conciseness: 'Due to the fact that it was raining, the game was postponed to a later date.'",
            questionRu: "Сделайте предложение более кратким: 'Due to the fact that it was raining, the game was postponed to a later date.'",
            questionKk: "Сөйлемді қысқартыңыз: 'Due to the fact that it was raining, the game was postponed to a later date.'",
            answer: "'Because it was raining, the game was postponed.'",
            hint: "'Due to the fact that' = 'Because'; 'postponed to a later date' = 'postponed'.",
            hintRu: "'Due to the fact that' = 'Because'; 'postponed to a later date' = 'postponed'.",
            hintKk: "'Due to the fact that' = 'Because'; 'postponed to a later date' = 'postponed'.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Choose the best transition: 'Solar energy is becoming more affordable. ____, many homeowners are switching to solar panels.' Options: (A) Nevertheless (B) Consequently (C) Meanwhile (D) Furthermore",
            questionRu: "Выберите лучший переход: 'Солнечная энергия становится доступнее. ____, многие домовладельцы переходят на солнечные панели.' (A) Nevertheless (B) Consequently (C) Meanwhile (D) Furthermore",
            questionKk: "Ең жақсы ауысуды таңдаңыз: 'Күн энергиясы қолжетімді бола бастады. ____, көптеген үй иелері күн панельдеріне ауысуда.' (A) Nevertheless (B) Consequently (C) Meanwhile (D) Furthermore",
            answer: "B — Consequently. The second sentence is a result of the first, so a cause-effect transition is needed.",
            hint: "Ask: Is the second sentence a result, contrast, addition, or simultaneous event?",
            hintRu: "Спросите: второе предложение — результат, контраст, дополнение или одновременное событие?",
            hintKk: "Сұраңыз: екінші сөйлем нәтиже, қарама-қайшылық, қосымша немесе бір мезгілдегі оқиға ма?",
            xp: 20
          }
        ]
      },
      {
        title: "ACT Math",
        titleRu: "ACT Математика",
        titleKk: "ACT Математика",
        content: "The ACT Math section has 60 questions in 60 minutes, covering pre-algebra through trigonometry. Unlike the SAT, the ACT tests a broader range of topics but with more straightforward questions. Time management is critical — you have exactly one minute per question on average.",
        contentRu: "Раздел ACT Math содержит 60 вопросов за 60 минут, охватывая от пред-алгебры до тригонометрии. В отличие от SAT, ACT тестирует более широкий диапазон тем, но с более простыми вопросами. Управление временем критически важно — у вас ровно одна минута на вопрос.",
        contentKk: "ACT Math бөлімінде 60 минутта 60 сұрақ бар, алгебраға дейінгі тақырыптардан тригонометрияға дейін қамтиды. SAT-тан айырмашылығы, ACT тақырыптардың кеңірек ауқымын тексереді, бірақ сұрақтар қарапайымырақ. Уақытты басқару маңызды — әр сұраққа орташа бір минут бар.",
        keyFormulas: [
          {
            formula: "Distance = Rate × Time",
            description: "Fundamental formula for rate/distance problems common on the ACT",
            descriptionRu: "Фундаментальная формула для задач на скорость/расстояние на ACT",
            descriptionKk: "ACT-та жиі кездесетін жылдамдық/қашықтық есептерінің негізгі формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "A car travels at 60 mph for 2.5 hours, then at 45 mph for 1 hour. What is the total distance?",
            questionRu: "Автомобиль едет со скоростью 60 миль/ч 2,5 часа, затем 45 миль/ч 1 час. Каково общее расстояние?",
            questionKk: "Автокөлік 2,5 сағат 60 миль/сағ, содан кейін 1 сағат 45 миль/сағ жылдамдықпен жүреді. Жалпы қашықтық қандай?",
            steps: [
              { en: "First leg: 60 × 2.5 = 150 miles. Second leg: 45 × 1 = 45 miles.", ru: "Первый участок: 60 × 2,5 = 150 миль. Второй: 45 × 1 = 45 миль.", kk: "Бірінші бөлік: 60 × 2,5 = 150 миль. Екіншісі: 45 × 1 = 45 миль." },
              { en: "Total distance = 150 + 45 = 195 miles.", ru: "Общее расстояние = 150 + 45 = 195 миль.", kk: "Жалпы қашықтық = 150 + 45 = 195 миль." }
            ],
            answer: "195 miles"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "If a train travels at 80 km/h for 3 hours, how far does it go?",
            questionRu: "Если поезд едет со скоростью 80 км/ч в течение 3 часов, какое расстояние он проедет?",
            questionKk: "Пойыз 3 сағат бойы 80 км/сағ жылдамдықпен жүрсе, қанша қашықтықты жүреді?",
            answer: "240 km",
            hint: "Distance = Rate × Time.",
            hintRu: "Расстояние = Скорость × Время.",
            hintKk: "Қашықтық = Жылдамдық × Уақыт.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Two cyclists start from the same point riding in opposite directions. One rides at 15 mph and the other at 20 mph. How far apart are they after 2 hours?",
            questionRu: "Два велосипедиста стартуют из одной точки в противоположных направлениях. Один едет 15 миль/ч, другой 20 миль/ч. Как далеко они друг от друга через 2 часа?",
            questionKk: "Екі велосипедші бір нүктеден қарама-қарсы бағытта жүреді. Бірі 15 миль/сағ, екіншісі 20 миль/сағ. 2 сағаттан кейін олар бір-бірінен қаншалықты алыс?",
            answer: "70 miles (combined rate of 35 mph × 2 hours)",
            hint: "When moving in opposite directions, add the speeds to find the separation rate.",
            hintRu: "При движении в противоположных направлениях сложите скорости.",
            hintKk: "Қарама-қарсы бағытта жүргенде жылдамдықтарды қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A 60-question ACT Math test allows 60 minutes. You spend 30 seconds each on the first 40 questions. How many minutes remain for the last 20 questions, and how many seconds per question is that?",
            questionRu: "Тест ACT Math: 60 вопросов за 60 минут. Вы тратите 30 секунд на каждый из первых 40 вопросов. Сколько минут осталось на последние 20 вопросов и сколько секунд на каждый?",
            questionKk: "ACT Math тесті: 60 минутта 60 сұрақ. Алғашқы 40 сұраққа 30 секундтан жұмсайсыз. Соңғы 20 сұраққа қанша минут қалады және әр сұраққа қанша секунд?",
            answer: "40 minutes remain (60 − 20 = 40). That gives 40 × 60 / 20 = 120 seconds (2 minutes) per question.",
            hint: "First 40 questions take 40 × 30 = 1200 seconds = 20 minutes.",
            hintRu: "Первые 40 вопросов занимают 40 × 30 = 1200 секунд = 20 минут.",
            hintKk: "Алғашқы 40 сұрақ 40 × 30 = 1200 секунд = 20 минут алады.",
            xp: 20
          }
        ]
      },
      {
        title: "ACT Reading",
        titleRu: "ACT Чтение",
        titleKk: "ACT Оқу",
        content: "The ACT Reading section has 40 questions in 35 minutes across four passages from prose fiction, social science, humanities, and natural science. Speed is essential — you have about 8-9 minutes per passage. Practice skimming for main ideas and referring back to specific lines for detail questions.",
        contentRu: "Раздел ACT Reading содержит 40 вопросов за 35 минут по четырём текстам: художественная проза, социальные науки, гуманитарные науки и естественные науки. Скорость важна — у вас около 8-9 минут на текст. Тренируйтесь бегло читать для выявления основных идей и возвращаться к конкретным строкам для вопросов на детали.",
        contentKk: "ACT Reading бөлімінде 35 минутта 40 сұрақ бар, төрт мәтін бойынша: көркем проза, әлеуметтік ғылымдар, гуманитарлық ғылымдар және жаратылыстану. Жылдамдық маңызды — әр мәтінге 8-9 минут бар. Негізгі идеяларды жылдам оқуды және нақты жолдарға қайта оралуды үйреніңіз.",
        keyFormulas: [
          {
            formula: "Time Budget: 35 min ÷ 4 passages ≈ 8.75 min per passage (read 3-4 min, answer 4-5 min)",
            description: "Recommended time allocation for ACT Reading",
            descriptionRu: "Рекомендуемое распределение времени для ACT Reading",
            descriptionKk: "ACT Reading үшін ұсынылған уақыт бөлу"
          }
        ],
        solvedExamples: [
          {
            question: "You have 35 minutes for 4 ACT Reading passages and tend to score best on Science passages. In what order should you tackle the passages?",
            questionRu: "У вас 35 минут на 4 текста ACT Reading, и вы лучше всего справляетесь с текстами по науке. В каком порядке браться за тексты?",
            questionKk: "ACT Reading 4 мәтініне 35 минутыңыз бар және Ғылым мәтіндерінде жақсы нәтиже көрсетесіз. Мәтіндерді қандай ретпен орындау керек?",
            steps: [
              { en: "Start with your strongest passage type (Science) to build confidence and secure easy points.", ru: "Начните с сильнейшего типа (Наука), чтобы укрепить уверенность и набрать лёгкие баллы.", kk: "Сенімділік арттыру үшін ең күшті түрден (Ғылым) бастаңыз." },
              { en: "Save your weakest passage for last — if you run out of time, you lose the fewest potential points.", ru: "Оставьте слабейший текст на конец — если не хватит времени, потеряете меньше баллов.", kk: "Ең әлсіз мәтінді соңына қалдырыңыз — уақыт жетпесе, аз ұпай жоғалтасыз." }
            ],
            answer: "Start with your strongest passage type and end with your weakest to maximize your score."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many minutes per passage do you have on the ACT Reading section?",
            questionRu: "Сколько минут на текст у вас есть в разделе ACT Reading?",
            questionKk: "ACT Reading бөлімінде әр мәтінге қанша минутыңыз бар?",
            answer: "About 8 minutes and 45 seconds (35 ÷ 4 = 8.75 minutes).",
            hint: "Divide total time (35 minutes) by number of passages (4).",
            hintRu: "Разделите общее время (35 минут) на количество текстов (4).",
            hintKk: "Жалпы уақытты (35 минут) мәтіндер санына (4) бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A natural science passage discusses how coral reefs are affected by ocean acidification. A question asks: 'According to the passage, what is the primary cause of coral bleaching?' How should you approach this?",
            questionRu: "Текст по естественным наукам обсуждает влияние закисления океана на коралловые рифы. Вопрос: 'Согласно тексту, какова основная причина обесцвечивания кораллов?' Как подойти к ответу?",
            questionKk: "Жаратылыстану мәтіні мұхит қышқылдануының маржан рифтеріне әсерін талқылайды. Сұрақ: 'Мәтін бойынша маржан ағартуының негізгі себебі қандай?' Қалай жауап беру керек?",
            answer: "Scan the passage for keywords like 'bleaching' and 'cause.' The answer must come directly from the passage, not your outside knowledge.",
            hint: "ACT Reading answers must be supported by evidence in the passage — never rely on what you know from elsewhere.",
            hintRu: "Ответы ACT Reading должны подтверждаться текстом — не опирайтесь на знания извне.",
            hintKk: "ACT Reading жауаптары мәтіндегі дәлелдермен расталуы керек — сыртқы білімге сенбеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You finish 3 passages in 27 minutes on the ACT Reading. You have 8 minutes left for the last passage with 10 questions. Describe your strategy for maximizing your score.",
            questionRu: "Вы закончили 3 текста за 27 минут на ACT Reading. Осталось 8 минут на последний текст с 10 вопросами. Опишите стратегию для максимизации баллов.",
            questionKk: "ACT Reading-те 3 мәтінді 27 минутта аяқтадыңыз. Соңғы мәтін мен 10 сұраққа 8 минут қалды. Ұпайды барынша арттыру стратегиясын сипаттаңыз.",
            answer: "Spend 2-3 minutes skimming the passage for main ideas and paragraph topics. Then spend 5-6 minutes answering questions, tackling detail questions first (they point you to specific lines) and saving inference questions for last. Answer every question — there is no penalty for guessing on the ACT.",
            hint: "With limited time, skim for structure, answer line-reference questions first, guess on any remaining questions.",
            hintRu: "При ограниченном времени бегло просмотрите структуру, отвечайте сначала на вопросы со ссылками на строки, угадывайте оставшиеся.",
            hintKk: "Уақыт шектеулі болғанда құрылымды жылдам қараңыз, алдымен жол сілтемесі бар сұрақтарға жауап беріңіз, қалғандарын болжаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Writing Task 1",
        titleRu: "IELTS Writing Task 1",
        titleKk: "IELTS Writing Task 1",
        content: "IELTS Academic Writing Task 1 asks you to describe visual data — graphs, charts, tables, or diagrams — in at least 150 words within 20 minutes. You must identify key trends, make comparisons, and highlight significant features without giving opinions. Use formal, academic language and organize your response clearly.",
        contentRu: "IELTS Academic Writing Task 1 требует описать визуальные данные — графики, диаграммы, таблицы — минимум в 150 словах за 20 минут. Нужно выявить ключевые тенденции, сделать сравнения и выделить важные особенности без личного мнения. Используйте формальный академический язык и чёткую организацию.",
        contentKk: "IELTS Academic Writing Task 1 визуалды деректерді — графиктерді, диаграммаларды, кестелерді — 20 минутта кемінде 150 сөзбен сипаттауды талап етеді. Негізгі тенденцияларды анықтау, салыстыру жасау және маңызды ерекшеліктерді пікірсіз бөліп көрсету қажет. Ресми академиялық тіл қолданыңыз.",
        keyFormulas: [
          {
            formula: "Structure: Introduction (paraphrase the question) → Overview (2 key trends) → Details (2 body paragraphs with data)",
            description: "Standard structure for a high-scoring Task 1 response",
            descriptionRu: "Стандартная структура для высокобалльного ответа Task 1",
            descriptionKk: "Жоғары балл алатын Task 1 жауабының стандартты құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "A bar chart shows that car sales were 200 in 2010, 350 in 2015, and 500 in 2020. Write an overview sentence.",
            questionRu: "Столбчатая диаграмма показывает, что продажи автомобилей составили 200 в 2010, 350 в 2015 и 500 в 2020. Напишите обзорное предложение.",
            questionKk: "Бағаналы диаграмма автокөлік сатылымы 2010-да 200, 2015-те 350, 2020-да 500 болғанын көрсетеді. Шолу сөйлемін жазыңыз.",
            steps: [
              { en: "Identify the overall trend: car sales increased steadily over the period.", ru: "Определите общую тенденцию: продажи автомобилей стабильно росли за период.", kk: "Жалпы тенденцияны анықтаңыз: автокөлік сатылымы тұрақты өсті." },
              { en: "Write: 'Overall, car sales showed a consistent upward trend, more than doubling from 200 units in 2010 to 500 units in 2020.'", ru: "Напишите: 'В целом, продажи автомобилей демонстрировали стабильный рост, более чем удвоившись с 200 в 2010 до 500 в 2020.'", kk: "Жазыңыз: 'Жалпы, автокөлік сатылымы тұрақты өсу үрдісін көрсетті, 2010 жылғы 200-ден 2020 жылғы 500-ге дейін екі еседен астам артты.'" }
            ],
            answer: "'Overall, car sales showed a consistent upward trend, more than doubling from 200 units in 2010 to 500 units in 2020.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the minimum word count for IELTS Writing Task 1?",
            questionRu: "Каков минимальный объём слов для IELTS Writing Task 1?",
            questionKk: "IELTS Writing Task 1 үшін ең аз сөз саны қанша?",
            answer: "150 words",
            hint: "This is shorter than Task 2, which requires 250 words.",
            hintRu: "Это меньше, чем Task 2, для которого нужно 250 слов.",
            hintKk: "Бұл 250 сөз талап ететін Task 2-ден қысқа.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A line graph shows internet users: 2000 = 400 million, 2010 = 2 billion, 2020 = 4.5 billion. Write one sentence describing the trend using appropriate language.",
            questionRu: "Линейный график показывает интернет-пользователей: 2000 = 400 млн, 2010 = 2 млрд, 2020 = 4,5 млрд. Напишите одно предложение, описывающее тенденцию.",
            questionKk: "Сызықтық график интернет пайдаланушыларды көрсетеді: 2000 = 400 млн, 2010 = 2 млрд, 2020 = 4,5 млрд. Тенденцияны сипаттайтын бір сөйлем жазыңыз.",
            answer: "The number of internet users experienced dramatic growth, surging from 400 million in 2000 to 4.5 billion in 2020.",
            hint: "Use strong trend vocabulary: 'surged,' 'experienced dramatic growth,' 'rose sharply.'",
            hintRu: "Используйте сильную лексику тенденций: 'резко вырос', 'продемонстрировал значительный рост'.",
            hintKk: "Күшті тренд сөздерін қолданыңыз: 'күрт өсті', 'айтарлықтай өсу көрсетті'.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A pie chart shows household spending: Housing 35%, Food 25%, Transport 15%, Education 10%, Other 15%. Write a complete overview paragraph (2-3 sentences) suitable for IELTS Task 1.",
            questionRu: "Круговая диаграмма показывает расходы домохозяйств: Жильё 35%, Еда 25%, Транспорт 15%, Образование 10%, Прочее 15%. Напишите полный обзорный абзац (2-3 предложения) для IELTS Task 1.",
            questionKk: "Дөңгелек диаграмма үй шаруашылығы шығындарын көрсетеді: Тұрғын үй 35%, Тамақ 25%, Көлік 15%, Білім 10%, Басқа 15%. IELTS Task 1 үшін толық шолу абзацын (2-3 сөйлем) жазыңыз.",
            answer: "Overall, housing and food together accounted for the majority of household expenditure at 60%. In contrast, education represented the smallest share at just 10%, while transport and other expenses each comprised 15% of total spending.",
            hint: "Group large and small categories, mention the biggest and smallest, and use comparison language.",
            hintRu: "Сгруппируйте большие и малые категории, упомяните наибольшую и наименьшую, используйте язык сравнения.",
            hintKk: "Үлкен және кіші санаттарды топтаңыз, ең үлкен мен ең кішіні атаңыз, салыстыру тілін қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Writing Task 2",
        titleRu: "IELTS Writing Task 2",
        titleKk: "IELTS Writing Task 2",
        content: "IELTS Writing Task 2 is an essay of at least 250 words in 40 minutes. Common types include opinion, discussion, problem-solution, and advantages-disadvantages essays. A strong essay has a clear thesis, well-developed body paragraphs with examples, and a concise conclusion. Task 2 is worth twice as much as Task 1.",
        contentRu: "IELTS Writing Task 2 — эссе минимум 250 слов за 40 минут. Типы: мнение, дискуссия, проблема-решение и преимущества-недостатки. Сильное эссе имеет чёткий тезис, развёрнутые абзацы с примерами и краткое заключение. Task 2 оценивается вдвое выше, чем Task 1.",
        contentKk: "IELTS Writing Task 2 — 40 минутта кемінде 250 сөз эссе. Түрлері: пікір, талқылау, мәселе-шешім және артықшылықтар-кемшіліктер. Күшті эсседе анық тезис, мысалдармен жетілдірілген абзацтар және қысқа қорытынды болады. Task 2 Task 1-ден екі есе жоғары бағаланады.",
        keyFormulas: [
          {
            formula: "Essay Structure: Introduction (hook + thesis) → Body 1 (topic + evidence + explanation) → Body 2 (topic + evidence + explanation) → Conclusion (restate + final thought)",
            description: "Standard four-paragraph essay structure for IELTS Task 2",
            descriptionRu: "Стандартная структура эссе из четырёх абзацев для IELTS Task 2",
            descriptionKk: "IELTS Task 2 үшін стандартты төрт абзацтық эссе құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a thesis statement for: 'Some people believe university education should be free. To what extent do you agree or disagree?'",
            questionRu: "Напишите тезис: 'Некоторые считают, что университетское образование должно быть бесплатным. В какой степени вы согласны или не согласны?'",
            questionKk: "Тезис жазыңыз: 'Кейбіреулер университет білімі тегін болуы керек деп санайды. Қаншалықты келісесіз немесе келіспейсіз?'",
            steps: [
              { en: "Decide your position: partially agree — free education has benefits but also drawbacks.", ru: "Определите позицию: частично согласен — бесплатное образование имеет плюсы, но и минусы.", kk: "Позицияңызды анықтаңыз: ішінара келісесіз — тегін білім беру артықшылықтары мен кемшіліктері бар." },
              { en: "Write a clear thesis: 'While free university education would increase access for disadvantaged students, I believe a partially subsidized model is more sustainable as it balances equity with educational quality.'", ru: "Напишите чёткий тезис: 'Хотя бесплатное образование расширит доступ для малообеспеченных, частично субсидируемая модель более устойчива, сочетая равенство с качеством.'", kk: "Анық тезис жазыңыз: 'Тегін университет білімі аз қамтылған студенттер үшін мүмкіндікті кеңейтсе де, ішінара субсидияланатын модель теңдік пен сапаны теңестіретіндіктен тұрақтырақ деп санаймын.'" }
            ],
            answer: "'While free university education would increase access for disadvantaged students, I believe a partially subsidized model is more sustainable as it balances equity with educational quality.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many words minimum must an IELTS Task 2 essay be, and how much time is recommended?",
            questionRu: "Каков минимальный объём слов для эссе IELTS Task 2 и сколько времени рекомендуется?",
            questionKk: "IELTS Task 2 эссесі кемінде қанша сөз болуы керек және қанша уақыт ұсынылады?",
            answer: "At least 250 words in 40 minutes.",
            hint: "Task 2 is longer than Task 1 (150 words, 20 minutes).",
            hintRu: "Task 2 длиннее Task 1 (150 слов, 20 минут).",
            hintKk: "Task 2 Task 1-ден ұзынырақ (150 сөз, 20 минут).",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Classify this IELTS Task 2 question: 'Many people argue that social media has more disadvantages than advantages. Discuss both views and give your opinion.'",
            questionRu: "Классифицируйте этот вопрос IELTS Task 2: 'Многие считают, что у социальных сетей больше недостатков, чем преимуществ. Обсудите обе точки зрения и дайте своё мнение.'",
            questionKk: "Бұл IELTS Task 2 сұрағын жіктеңіз: 'Көптеген адамдар әлеуметтік желілердің артықшылықтардан гөрі кемшіліктері көп деп санайды. Екі көзқарасты талқылаңыз және өз пікіріңізді білдіріңіз.'",
            answer: "This is a 'Discussion + Opinion' essay. You must present both sides (advantages and disadvantages of social media) and then clearly state your own opinion.",
            hint: "'Discuss both views and give your opinion' = discussion + opinion essay type.",
            hintRu: "'Обсудите обе точки зрения и дайте мнение' = тип эссе дискуссия + мнение.",
            hintKk: "'Екі көзқарасты талқылаңыз және пікіріңізді білдіріңіз' = талқылау + пікір эссе түрі.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a complete introduction paragraph (3-4 sentences) for: 'In many countries, the proportion of older people is increasing. Is this a positive or negative development?'",
            questionRu: "Напишите полный вводный абзац (3-4 предложения): 'Во многих странах доля пожилых людей растёт. Это положительное или отрицательное явление?'",
            questionKk: "Толық кіріспе абзацын жазыңыз (3-4 сөйлем): 'Көптеген елдерде егде адамдардың үлесі артуда. Бұл оң немесе теріс даму ма?'",
            answer: "In many nations around the world, the elderly population is growing at an unprecedented rate due to advances in healthcare and declining birth rates. While some argue this trend places a strain on healthcare systems and pension funds, others see it as a sign of societal progress. In my view, although an aging population presents economic challenges, it is ultimately a positive development that reflects improved quality of life.",
            hint: "Start by paraphrasing the question, add context, then state your thesis clearly.",
            hintRu: "Начните с перефразирования вопроса, добавьте контекст, затем чётко сформулируйте тезис.",
            hintKk: "Сұрақты қайта тұжырымдаудан бастаңыз, контекст қосыңыз, содан кейін тезисті анық айтыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Speaking",
        titleRu: "IELTS Говорение",
        titleKk: "IELTS Сөйлеу",
        content: "The IELTS Speaking test has three parts: Part 1 (introduction and familiar topics, 4-5 minutes), Part 2 (long turn with a cue card, 3-4 minutes), and Part 3 (discussion, 4-5 minutes). You are scored on fluency, vocabulary, grammar, and pronunciation. Speaking naturally and extending your answers is more important than using complex words.",
        contentRu: "Тест IELTS Speaking состоит из трёх частей: Часть 1 (введение и знакомые темы, 4-5 минут), Часть 2 (монолог по карточке, 3-4 минуты) и Часть 3 (дискуссия, 4-5 минут). Оцениваются беглость, словарный запас, грамматика и произношение. Говорить естественно и развёрнуто важнее, чем использовать сложные слова.",
        contentKk: "IELTS Speaking тесті үш бөлімнен тұрады: 1-бөлім (кіріспе және таныс тақырыптар, 4-5 минут), 2-бөлім (карточка бойынша монолог, 3-4 минут) және 3-бөлім (талқылау, 4-5 минут). Еркін сөйлеу, сөздік қор, грамматика және айтылым бағаланады. Табиғи сөйлеу және жауаптарды кеңейту күрделі сөздерден маңыздырақ.",
        keyFormulas: [
          {
            formula: "PEEL: Point → Example → Explain → Link back to the question",
            description: "Framework for structuring extended speaking responses",
            descriptionRu: "Метод структурирования развёрнутых устных ответов",
            descriptionKk: "Кеңейтілген ауызша жауаптарды құрылымдау әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Part 1 question: 'Do you enjoy reading?' Give a model answer using the PEEL method.",
            questionRu: "Вопрос Части 1: 'Вам нравится читать?' Дайте модельный ответ методом PEEL.",
            questionKk: "1-бөлім сұрағы: 'Оқуды ұнатасыз ба?' PEEL әдісімен үлгі жауап беріңіз.",
            steps: [
              { en: "Point + Example: 'Yes, I really enjoy reading, especially historical novels. For instance, I recently finished a book about the Silk Road.'", ru: "Тезис + Пример: 'Да, я очень люблю читать, особенно исторические романы. Недавно закончил книгу о Шёлковом пути.'", kk: "Тезис + Мысал: 'Иә, оқуды өте ұнатамын, әсіресе тарихи романдар. Мысалы, жақында Жібек жолы туралы кітап оқып бітірдім.'" },
              { en: "Explain + Link: 'It taught me so much about trade and culture between Central Asia and China, which connects to my interest in history.'", ru: "Объяснение + Связь: 'Она многому научила меня о торговле и культуре между Центральной Азией и Китаем, что связано с моим интересом к истории.'", kk: "Түсіндіру + Байланыс: 'Ол маған Орталық Азия мен Қытай арасындағы сауда мен мәдениет туралы көп нәрсе үйретті, бұл менің тарихқа деген қызығушылығыммен байланысты.'" }
            ],
            answer: "'Yes, I really enjoy reading, especially historical novels. For instance, I recently finished a book about the Silk Road. It taught me so much about trade and culture between Central Asia and China, which connects to my interest in history.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many parts does the IELTS Speaking test have, and how long is the total test?",
            questionRu: "Сколько частей в тесте IELTS Speaking и какова общая длительность?",
            questionKk: "IELTS Speaking тестінде қанша бөлім бар және жалпы қанша уақыт?",
            answer: "3 parts, approximately 11-14 minutes total.",
            hint: "Part 1 is 4-5 min, Part 2 is 3-4 min, Part 3 is 4-5 min.",
            hintRu: "Часть 1: 4-5 мин, Часть 2: 3-4 мин, Часть 3: 4-5 мин.",
            hintKk: "1-бөлім: 4-5 мин, 2-бөлім: 3-4 мин, 3-бөлім: 4-5 мин.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You get a Part 2 cue card: 'Describe a skill you learned as a child.' You have 1 minute to prepare. List the 4 things you should note down.",
            questionRu: "Карточка Части 2: 'Опишите навык, который вы выучили в детстве.' У вас 1 минута на подготовку. Перечислите 4 вещи для записи.",
            questionKk: "2-бөлім карточкасы: 'Балалық шақта үйренген дағдыңызды сипаттаңыз.' Дайындалуға 1 минутыңыз бар. Жазып алатын 4 нәрсені атаңыз.",
            answer: "1) What the skill is, 2) When/where you learned it, 3) How you learned it, 4) Why it was important or how you felt about it.",
            hint: "Cue cards always have 3-4 bullet points — note a key word or phrase for each one.",
            hintRu: "Карточки всегда содержат 3-4 пункта — запишите ключевое слово для каждого.",
            hintKk: "Карточкаларда әрқашан 3-4 тармақ болады — әрқайсысына кілт сөз жазыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Part 3 question: 'Do you think technology will replace teachers in the future?' Prepare a full response (4-5 sentences) using PEEL, with at least one example and a balanced conclusion.",
            questionRu: "Вопрос Части 3: 'Как вы думаете, технологии заменят учителей в будущем?' Подготовьте полный ответ (4-5 предложений) по методу PEEL с примером и сбалансированным выводом.",
            questionKk: "3-бөлім сұрағы: 'Технология болашақта мұғалімдерді алмастырады деп ойлайсыз ба?' PEEL әдісімен толық жауап дайындаңыз (4-5 сөйлем), кемінде бір мысал және теңдестірілген қорытынды.",
            answer: "Point: I don't think technology will fully replace teachers, though it will certainly change their role. Example: For instance, AI tutoring tools like Khan Academy can teach math concepts effectively, but they cannot motivate a struggling student the way a human teacher can. Explain: Students need emotional support, mentorship, and social interaction that only a real person can provide. Link: So while technology will become a powerful teaching tool, I believe teachers will remain essential — they will just use technology to enhance their teaching rather than be replaced by it.",
            hint: "State your position, give a specific example, explain your reasoning, and connect it back to the question.",
            hintRu: "Изложите позицию, приведите пример, объясните рассуждение и свяжите с вопросом.",
            hintKk: "Позицияңызды айтыңыз, нақты мысал келтіріңіз, пайымдауыңызды түсіндіріңіз және сұраққа байланыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "TOEFL Reading",
        titleRu: "TOEFL Чтение",
        titleKk: "TOEFL Оқу",
        content: "The TOEFL Reading section has 2 passages with 10 questions each, lasting 35 minutes. Passages are academic texts from university-level subjects. Question types include vocabulary in context, factual detail, inference, rhetorical purpose, and summary. Unlike IELTS, TOEFL is entirely computer-based.",
        contentRu: "Раздел TOEFL Reading содержит 2 текста по 10 вопросов каждый за 35 минут. Тексты — академические материалы университетского уровня. Типы вопросов: словарный запас в контексте, фактические детали, выводы, риторическая цель и резюме. В отличие от IELTS, TOEFL полностью компьютерный.",
        contentKk: "TOEFL Reading бөлімінде 35 минутта әрқайсысы 10 сұрақтан тұратын 2 мәтін бар. Мәтіндер университет деңгейіндегі академиялық материалдар. Сұрақ түрлері: контекстегі сөздік қор, фактілік мәліметтер, қорытындылар, риторикалық мақсат және қысқаша мазмұн. IELTS-тен айырмашылығы, TOEFL толығымен компьютерлік.",
        keyFormulas: [
          {
            formula: "Time Budget: 35 min ÷ 2 passages ≈ 17.5 min per passage (read 5-6 min, answer 11-12 min)",
            description: "Recommended time allocation for TOEFL Reading",
            descriptionRu: "Рекомендуемое распределение времени для TOEFL Reading",
            descriptionKk: "TOEFL Reading үшін ұсынылған уақыт бөлу"
          }
        ],
        solvedExamples: [
          {
            question: "A TOEFL passage states: 'The proliferation of invasive species has had deleterious effects on native ecosystems.' The word 'deleterious' most likely means: (A) beneficial (B) harmful (C) unknown (D) temporary.",
            questionRu: "Текст TOEFL гласит: 'The proliferation of invasive species has had deleterious effects on native ecosystems.' Слово 'deleterious' скорее всего означает: (A) полезные (B) вредные (C) неизвестные (D) временные.",
            questionKk: "TOEFL мәтінінде: 'The proliferation of invasive species has had deleterious effects on native ecosystems.' 'Deleterious' сөзі ең ықтимал: (A) пайдалы (B) зиянды (C) белгісіз (D) уақытша.",
            steps: [
              { en: "Context clue: 'invasive species' are generally harmful. The sentence discusses negative impacts on native ecosystems.", ru: "Подсказка контекста: инвазивные виды обычно вредны. Предложение обсуждает негативное влияние на экосистемы.", kk: "Контекст кеңесі: инвазивті түрлер әдетте зиянды. Сөйлем экожүйелерге теріс әсерді талқылайды." },
              { en: "The answer is (B) harmful — 'deleterious' means causing harm or damage.", ru: "Ответ (B) вредные — 'deleterious' означает причиняющий вред.", kk: "Жауап (B) зиянды — 'deleterious' зиян келтіретін дегенді білдіреді." }
            ],
            answer: "B — harmful. 'Deleterious' means causing harm or damage."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many passages and questions are in the TOEFL Reading section?",
            questionRu: "Сколько текстов и вопросов в разделе TOEFL Reading?",
            questionKk: "TOEFL Reading бөлімінде қанша мәтін мен сұрақ бар?",
            answer: "2 passages with 10 questions each (20 questions total in 35 minutes).",
            hint: "The TOEFL iBT was updated — it now has fewer passages than the older format.",
            hintRu: "TOEFL iBT обновлён — теперь текстов меньше, чем в старом формате.",
            hintKk: "TOEFL iBT жаңартылды — ескі форматтан аз мәтін бар.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A passage discusses photosynthesis: 'During the light-dependent reactions, water molecules are split to release oxygen.' What type of question is this: 'According to the passage, what is released when water molecules are split?'",
            questionRu: "Текст обсуждает фотосинтез: 'В ходе светозависимых реакций молекулы воды расщепляются, высвобождая кислород.' К какому типу относится вопрос: 'Согласно тексту, что высвобождается при расщеплении молекул воды?'",
            questionKk: "Мәтін фотосинтезді талқылайды: 'Жарыққа тәуелді реакциялар кезінде су молекулалары ыдырап, оттегі шығарылады.' Сұрақ түрі қандай: 'Мәтін бойынша, су молекулалары ыдыраған кезде не шығарылады?'",
            answer: "This is a 'factual detail' question — the answer is stated directly in the passage (oxygen).",
            hint: "If the answer is directly stated in the text, it's a factual detail question.",
            hintRu: "Если ответ прямо указан в тексте, это вопрос на фактическую деталь.",
            hintKk: "Жауап мәтінде тікелей көрсетілсе, бұл фактілік мәлімет сұрағы.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A TOEFL summary question asks you to select 3 sentences that express the main ideas of a passage about the Industrial Revolution. Which strategy should you use to eliminate wrong answers?",
            questionRu: "Вопрос на резюме TOEFL просит выбрать 3 предложения с основными идеями текста о Промышленной революции. Какую стратегию использовать для исключения неверных ответов?",
            questionKk: "TOEFL қысқаша мазмұн сұрағы Өнеркәсіптік революция туралы мәтіннің негізгі идеяларын білдіретін 3 сөйлемді таңдауды сұрайды. Қате жауаптарды жою үшін қандай стратегия қолдану керек?",
            answer: "Eliminate sentences that (1) contain minor details not mentioned prominently, (2) contradict the passage, or (3) introduce information not in the passage. The correct answers will be broad statements covering main themes, not specific facts.",
            hint: "Summary answers are big-picture ideas, not small details. Eliminate anything too specific or contradictory.",
            hintRu: "Ответы на резюме — это главные идеи, не мелкие детали. Исключите слишком конкретные или противоречивые.",
            hintKk: "Қысқаша мазмұн жауаптары — негізгі идеялар, ұсақ мәліметтер емес. Тым нақты немесе қарама-қайшы нәрселерді алып тастаңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Admission Exams_11": {
    planetName: "Admission Exams",
    introduction: {
      en: "Welcome to Admission Exams for Grade 11! Master SAT Advanced Functions, Data Analysis, Critical Reading, and Essay Strategy. Tackle ACT English and Advanced Math, push for IELTS Band 7+, develop TOEFL Writing and Speaking skills, and learn essential test day preparation techniques.",
      ru: "Добро пожаловать в Вступительные экзамены для 11 класса! Освойте продвинутые функции SAT, анализ данных, критическое чтение и стратегию эссе. Покорите ACT English и продвинутую математику, стремитесь к IELTS Band 7+, развивайте навыки TOEFL Writing и Speaking, и изучите приёмы подготовки ко дню экзамена."
    },
    sections: [
      {
        title: "SAT Advanced Functions",
        titleRu: "SAT Продвинутые функции",
        titleKk: "SAT Күрделі функциялар",
        content: "The SAT tests your understanding of functions including linear, quadratic, exponential, and absolute value functions. You must interpret function notation f(x), analyze graphs, find domains and ranges, and understand function transformations such as shifts, reflections, and stretches.",
        contentRu: "SAT проверяет понимание функций: линейных, квадратных, экспоненциальных и модульных. Нужно интерпретировать запись функций f(x), анализировать графики, находить области определения и значений, понимать преобразования функций: сдвиги, отражения и растяжения.",
        contentKk: "SAT функцияларды түсінуді тексереді: сызықтық, квадраттық, экспоненциалды және абсолюттік мән функциялары. f(x) функция белгілемесін түсіндіру, графиктерді талдау, анықтау аймағы мен мәндер аймағын табу, және функция түрлендірулерін (жылжу, шағылысу, созылу) түсіну қажет.",
        keyFormulas: [
          {
            formula: "f(x + h) shifts left by h; f(x) + k shifts up by k; −f(x) reflects over x-axis",
            description: "Function transformation rules for graph analysis",
            descriptionRu: "Правила преобразования функций для анализа графиков",
            descriptionKk: "Графикті талдау үшін функция түрлендіру ережелері"
          },
          {
            formula: "Exponential growth: f(x) = a · bˣ where b > 1; decay: 0 < b < 1",
            description: "Exponential function model for growth and decay problems",
            descriptionRu: "Модель экспоненциальной функции для задач роста и убывания",
            descriptionKk: "Өсу және кему есептері үшін экспоненциалды функция моделі"
          }
        ],
        solvedExamples: [
          {
            question: "If f(x) = 2x² − 3, find f(4) and determine if the function is increasing or decreasing at x = 4.",
            questionRu: "Если f(x) = 2x² − 3, найдите f(4) и определите, возрастает или убывает функция при x = 4.",
            questionKk: "Егер f(x) = 2x² − 3 болса, f(4) табыңыз және функция x = 4-те өсетінін немесе кемитінін анықтаңыз.",
            steps: [
              { en: "f(4) = 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29.", ru: "f(4) = 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29.", kk: "f(4) = 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29." },
              { en: "Since 2x² is a parabola opening upward with vertex at x = 0, the function is increasing for all x > 0, so it is increasing at x = 4.", ru: "Поскольку 2x² — парабола, открытая вверх с вершиной в x = 0, функция возрастает при x > 0, значит возрастает при x = 4.", kk: "2x² жоғары ашылатын парабола, төбесі x = 0-де, функция x > 0 кезінде өседі, сондықтан x = 4-те өседі." }
            ],
            answer: "f(4) = 29, and the function is increasing at x = 4."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "If f(x) = 3x + 5, find f(−2).",
            questionRu: "Если f(x) = 3x + 5, найдите f(−2).",
            questionKk: "Егер f(x) = 3x + 5 болса, f(−2) табыңыз.",
            answer: "f(−2) = 3(−2) + 5 = −6 + 5 = −1",
            hint: "Substitute −2 for x in the expression.",
            hintRu: "Подставьте −2 вместо x в выражение.",
            hintKk: "Өрнекте x орнына −2 қойыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "The graph of g(x) = x² is shifted 3 units right and 2 units up. Write the new function.",
            questionRu: "График g(x) = x² сдвинут на 3 единицы вправо и 2 единицы вверх. Запишите новую функцию.",
            questionKk: "g(x) = x² графигі 3 бірлікке оңға және 2 бірлікке жоғары жылжытылды. Жаңа функцияны жазыңыз.",
            answer: "g(x) = (x − 3)² + 2",
            hint: "Right shift by h: replace x with (x − h). Up shift by k: add k.",
            hintRu: "Сдвиг вправо на h: замените x на (x − h). Сдвиг вверх на k: добавьте k.",
            hintKk: "h-ға оңға жылжу: x-ті (x − h) алмастырыңыз. k-ға жоғары жылжу: k қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A population starts at 500 and doubles every 3 years. Write an exponential function P(t) for the population after t years, and find the population after 9 years.",
            questionRu: "Популяция начинается с 500 и удваивается каждые 3 года. Запишите экспоненциальную функцию P(t) для популяции через t лет и найдите популяцию через 9 лет.",
            questionKk: "Популяция 500-ден басталады және әр 3 жылда екі есе артады. t жылдан кейінгі популяция үшін P(t) экспоненциалды функциясын жазыңыз және 9 жылдан кейінгі популяцияны табыңыз.",
            answer: "P(t) = 500 · 2^(t/3). After 9 years: P(9) = 500 · 2³ = 500 · 8 = 4000.",
            hint: "Doubling every 3 years means the base is 2 and the exponent is t/3.",
            hintRu: "Удвоение каждые 3 года: основание 2, показатель t/3.",
            hintKk: "Әр 3 жылда екі есе арту: негіз 2, дәреже t/3.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Data Analysis",
        titleRu: "SAT Анализ данных",
        titleKk: "SAT Деректерді талдау",
        content: "SAT Problem Solving and Data Analysis tests your ability to work with ratios, percentages, proportions, and statistical concepts. You must interpret data from tables, scatterplots, and graphs, calculate mean/median/mode, understand standard deviation conceptually, and analyze survey methodology for bias.",
        contentRu: "Раздел SAT по решению задач и анализу данных проверяет работу с пропорциями, процентами, соотношениями и статистикой. Нужно интерпретировать данные из таблиц, диаграмм рассеяния и графиков, вычислять среднее/медиану/моду, концептуально понимать стандартное отклонение и анализировать методологию опросов на предвзятость.",
        contentKk: "SAT есеп шығару және деректерді талдау бөлімі қатынастармен, пайыздармен, пропорциялармен және статистикалық тұжырымдамалармен жұмыс істеу қабілетін тексереді. Кестелерден, шашырау диаграммаларынан деректерді түсіндіру, орташа/медиана/мода есептеу, стандартты ауытқуды түсіну және сауалнама әдіснамасын талдау қажет.",
        keyFormulas: [
          {
            formula: "Mean = Sum of values ÷ Number of values; Median = Middle value when sorted",
            description: "Central tendency measures for statistical analysis",
            descriptionRu: "Меры центральной тенденции для статистического анализа",
            descriptionKk: "Статистикалық талдау үшін орталық тенденция өлшемдері"
          }
        ],
        solvedExamples: [
          {
            question: "Test scores: 72, 85, 88, 90, 95. Find the mean and median.",
            questionRu: "Баллы за тест: 72, 85, 88, 90, 95. Найдите среднее и медиану.",
            questionKk: "Тест балдары: 72, 85, 88, 90, 95. Орташа мен медиананы табыңыз.",
            steps: [
              { en: "Mean = (72 + 85 + 88 + 90 + 95) ÷ 5 = 430 ÷ 5 = 86.", ru: "Среднее = (72 + 85 + 88 + 90 + 95) ÷ 5 = 430 ÷ 5 = 86.", kk: "Орташа = (72 + 85 + 88 + 90 + 95) ÷ 5 = 430 ÷ 5 = 86." },
              { en: "Median: the data is already sorted, and the middle (3rd) value is 88.", ru: "Медиана: данные отсортированы, среднее (3-е) значение — 88.", kk: "Медиана: деректер сұрыпталған, ортаңғы (3-ші) мән — 88." }
            ],
            answer: "Mean = 86, Median = 88."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Find the mean of: 10, 20, 30, 40, 50.",
            questionRu: "Найдите среднее: 10, 20, 30, 40, 50.",
            questionKk: "Орташа мәнді табыңыз: 10, 20, 30, 40, 50.",
            answer: "30 (sum = 150, divide by 5 = 30)",
            hint: "Add all values and divide by the count.",
            hintRu: "Сложите все значения и разделите на количество.",
            hintKk: "Барлық мәндерді қосып, санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A class of 20 students has a mean test score of 78. A new student scores 98. What is the new class mean?",
            questionRu: "Класс из 20 учеников имеет средний балл 78. Новый ученик набрал 98. Каков новый средний балл?",
            questionKk: "20 оқушы класының орташа тест балы 78. Жаңа оқушы 98 балл жинады. Жаңа орташа бал қандай?",
            answer: "New mean = (20 × 78 + 98) ÷ 21 = (1560 + 98) ÷ 21 = 1658 ÷ 21 ≈ 78.95",
            hint: "Find the original total (mean × count), add the new score, divide by new count.",
            hintRu: "Найдите исходную сумму (среднее × количество), добавьте новый балл, разделите на новое количество.",
            hintKk: "Бастапқы қосындыны табыңыз (орташа × сан), жаңа балды қосыңыз, жаңа санға бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A survey finds that 60% of 200 respondents prefer online learning. The margin of error is ±5%. What range of the full population is likely to prefer online learning, and what could make this survey biased?",
            questionRu: "Опрос показывает, что 60% из 200 респондентов предпочитают онлайн-обучение. Погрешность ±5%. Какой диапазон полной популяции, вероятно, предпочитает онлайн-обучение? Что может сделать опрос предвзятым?",
            questionKk: "Сауалнама 200 респонденттің 60%-ы онлайн оқуды қалайтынын көрсетеді. Қателік маржасы ±5%. Толық популяцияның қандай диапазоны онлайн оқуды қалауы мүмкін? Сауалнаманы не бұрмалауы мүмкін?",
            answer: "Between 55% and 65% of the population likely prefers online learning. Bias could come from surveying only internet users (selection bias), as people without internet access are excluded and would likely have different preferences.",
            hint: "Apply margin of error to the percentage. Think about who was surveyed and who was left out.",
            hintRu: "Примените погрешность к проценту. Подумайте, кого опрашивали и кого исключили.",
            hintKk: "Қателік маржасын пайызға қолданыңыз. Кімді сұрағанын және кімді алып тастағанын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Critical Reading",
        titleRu: "SAT Критическое чтение",
        titleKk: "SAT Сыни оқу",
        content: "SAT Critical Reading requires analyzing paired passages, identifying how two authors agree or disagree, evaluating the strength of arguments, and understanding how rhetorical devices like analogy, irony, and counterargument shape meaning. You must go beyond comprehension to evaluation and synthesis.",
        contentRu: "Критическое чтение SAT требует анализа парных текстов, определения согласия или расхождения двух авторов, оценки силы аргументов и понимания риторических приёмов: аналогии, иронии и контраргументов. Нужно выйти за рамки понимания к оценке и синтезу.",
        contentKk: "SAT сыни оқу жұптық мәтіндерді талдауды, екі автордың келісу немесе келіспеу жағдайын анықтауды, аргументтердің күшін бағалауды және аналогия, ирония, қарсы аргумент сияқты риторикалық құралдарды түсінуді талап етеді. Түсінуден бағалау мен синтезге көшу қажет.",
        keyFormulas: [
          {
            formula: "Argument Strength = Claim + Evidence + Reasoning (all three must be present)",
            description: "Framework for evaluating the strength of an author's argument",
            descriptionRu: "Метод оценки силы аргумента автора",
            descriptionKk: "Автор аргументінің күшін бағалау әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Passage 1 argues that space exploration is essential for human survival. Passage 2 argues that the money should be spent on Earth's problems. What is the fundamental disagreement?",
            questionRu: "Текст 1 утверждает, что освоение космоса необходимо для выживания. Текст 2 утверждает, что деньги нужно тратить на земные проблемы. В чём фундаментальное разногласие?",
            questionKk: "1-мәтін ғарышты зерттеу адамзаттың өмір сүруі үшін қажет деп дәлелдейді. 2-мәтін ақшаны Жердегі мәселелерге жұмсау керек дейді. Негізгі келіспеушілік неде?",
            steps: [
              { en: "Identify each author's main claim: Author 1 prioritizes long-term survival; Author 2 prioritizes immediate needs.", ru: "Определите главное утверждение каждого: Автор 1 приоритизирует долгосрочное выживание; Автор 2 — немедленные потребности.", kk: "Әр автордың негізгі мәлімдемесін анықтаңыз: 1-автор ұзақ мерзімді өмір сүруді; 2-автор жедел қажеттіліктерді басымдық етеді." },
              { en: "The fundamental disagreement is about resource allocation priorities — whether humanity should invest in future possibilities or present crises.", ru: "Фундаментальное разногласие — приоритеты распределения ресурсов: инвестировать в будущее или решать текущие кризисы.", kk: "Негізгі келіспеушілік ресурстарды бөлу басымдықтары туралы — болашақ мүмкіндіктерге немесе қазіргі дағдарыстарға инвестиция салу." }
            ],
            answer: "The disagreement is about whether limited resources should be allocated to long-term space exploration or to solving immediate problems on Earth."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between 'comprehension' and 'critical reading'?",
            questionRu: "В чём разница между 'пониманием' и 'критическим чтением'?",
            questionKk: "'Түсіну' мен 'сыни оқу' арасындағы айырмашылық қандай?",
            answer: "Comprehension is understanding what the text says; critical reading is evaluating how well the author argues, what techniques they use, and whether the evidence supports the claims.",
            hint: "Comprehension = what does it say? Critical reading = how well does it say it?",
            hintRu: "Понимание = что говорится? Критическое чтение = насколько хорошо это аргументировано?",
            hintKk: "Түсіну = не айтылады? Сыни оқу = қаншалықты жақсы дәлелденген?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "An author argues: 'Social media has destroyed meaningful communication. People now prefer emojis over heartfelt conversations.' Identify the rhetorical technique and one weakness of this argument.",
            questionRu: "Автор утверждает: 'Социальные сети уничтожили осмысленное общение. Люди теперь предпочитают эмодзи искренним разговорам.' Определите риторический приём и одну слабость аргумента.",
            questionKk: "Автор дәлелдейді: 'Әлеуметтік желілер мағыналы қарым-қатынасты жойды. Адамдар енді жүректен шыққан әңгімелерге емодзиді таңдайды.' Риторикалық тәсілді және аргументтің бір әлсіздігін анықтаңыз.",
            answer: "Technique: hyperbole ('destroyed') and false dichotomy (emojis vs. conversations as if they cannot coexist). Weakness: lacks evidence — no data is provided, and the claim overgeneralizes about all people.",
            hint: "Look for exaggeration and either/or thinking. Ask: where is the evidence?",
            hintRu: "Ищите преувеличение и мышление «или/или». Спросите: где доказательства?",
            hintKk: "Асыра сілтеу мен 'не/не' ойлауды іздеңіз. Сұраңыз: дәлелдер қайда?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Two paired passages discuss education reform. Passage 1 uses statistics from Finland to argue for less homework. Passage 2 uses anecdotal evidence from a single teacher in Texas to argue for more homework. Which passage has the stronger evidence, and why?",
            questionRu: "Два парных текста обсуждают реформу образования. Текст 1 использует статистику Финляндии для аргумента за меньше домашних заданий. Текст 2 использует анекдотичный опыт одного учителя из Техаса за больше заданий. У какого текста сильнее доказательства и почему?",
            questionKk: "Екі жұптық мәтін білім реформасын талқылайды. 1-мәтін аз үй тапсырмасы үшін Финляндия статистикасын қолданады. 2-мәтін көп үй тапсырмасы үшін Техастағы бір мұғалімнің тәжірибесін қолданады. Қай мәтіннің дәлелі күштірек және неге?",
            answer: "Passage 1 has stronger evidence because it uses national-level statistics (large sample, systematic data) from a country with proven educational outcomes. Passage 2 relies on anecdotal evidence from a single person, which cannot be generalized and may reflect personal bias rather than a broader trend.",
            hint: "Compare the type of evidence: statistical vs. anecdotal. Consider sample size and generalizability.",
            hintRu: "Сравните тип доказательств: статистические vs. анекдотичные. Учтите размер выборки и обобщаемость.",
            hintKk: "Дәлелдер түрін салыстырыңыз: статистикалық пен анекдоттық. Іріктеме көлемі мен жалпылау мүмкіндігін ескеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "SAT Essay Strategy",
        titleRu: "SAT Стратегия эссе",
        titleKk: "SAT Эссе стратегиясы",
        content: "The SAT essay asks you to analyze how an author builds a persuasive argument. You do not give your own opinion — instead, you examine the author's use of evidence, reasoning, and stylistic elements. A top-scoring essay has a clear thesis, analyzes specific techniques with examples from the passage, and uses precise, academic language.",
        contentRu: "Эссе SAT просит анализировать, как автор строит убедительный аргумент. Вы не даёте своё мнение — вместо этого рассматриваете использование автором доказательств, рассуждений и стилистических приёмов. Лучшие эссе имеют чёткий тезис, анализируют конкретные приёмы с примерами из текста и используют точный академический язык.",
        contentKk: "SAT эссесі автордың сенімді аргументті қалай құратынын талдауды сұрайды. Өз пікіріңізді бермейсіз — оның орнына автордың дәлелдерді, пайымдауды және стилистикалық элементтерді қолдануын зерттейсіз. Ең жоғары балл алатын эссе анық тезиске, мәтіндегі мысалдармен нақты тәсілдерді талдауға және дәл академиялық тілге ие.",
        keyFormulas: [
          {
            formula: "SAT Essay Analysis = Evidence (facts, data, examples) + Reasoning (logic, cause-effect) + Style (word choice, tone, rhetorical devices)",
            description: "The three pillars of SAT essay analysis",
            descriptionRu: "Три столпа анализа эссе SAT",
            descriptionKk: "SAT эссе талдауының үш тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "An author argues for protecting national parks using vivid descriptions of wildlife, a statistic that parks generate $42 billion annually, and an appeal to preserving heritage for future generations. Identify the persuasive techniques.",
            questionRu: "Автор аргументирует защиту национальных парков яркими описаниями дикой природы, статистикой о доходе $42 млрд в год и призывом сохранить наследие для будущих поколений. Определите приёмы убеждения.",
            questionKk: "Автор ұлттық парктарды қорғауды жабайы табиғаттың жарқын сипаттамасымен, парктардың жыл сайын $42 млрд табыс әкелетін статистикасымен және болашақ ұрпаққа мұра сақтау шақыруымен дәлелдейді. Сенімділік тәсілдерін анықтаңыз.",
            steps: [
              { en: "Evidence: the $42 billion statistic provides concrete, verifiable data. Vivid wildlife descriptions use imagery (style) to create emotional connection.", ru: "Доказательства: статистика $42 млрд — конкретные данные. Яркие описания используют образность (стиль) для эмоциональной связи.", kk: "Дәлелдер: $42 млрд статистикасы нақты деректер. Жарқын сипаттамалар бейнелілікті (стиль) қолданып, эмоционалды байланыс жасайды." },
              { en: "Reasoning: the appeal to future generations uses cause-effect logic — if we don't protect parks now, future generations lose them. This combines reasoning with emotional appeal.", ru: "Рассуждение: призыв к будущим поколениям использует логику причины-следствия. Это сочетает рассуждение с эмоциональным призывом.", kk: "Пайымдау: болашақ ұрпаққа шақыру себеп-салдар логикасын қолданады. Бұл пайымдауды эмоционалды шақырумен біріктіреді." }
            ],
            answer: "Evidence: statistic ($42B). Style: vivid imagery of wildlife. Reasoning: cause-effect appeal to future generations."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "In the SAT essay, should you give your own opinion about the topic?",
            questionRu: "Нужно ли давать собственное мнение в эссе SAT?",
            questionKk: "SAT эссесінде өз пікіріңізді беру керек пе?",
            answer: "No. The SAT essay asks you to analyze how the author builds their argument, not to state whether you agree or disagree.",
            hint: "The prompt says 'analyze' — focus on the author's techniques, not your own views.",
            hintRu: "В задании написано 'analyze' — сосредоточьтесь на приёмах автора, а не на своих взглядах.",
            hintKk: "Тапсырмада 'analyze' делінген — өз көзқарасыңызға емес, автордың тәсілдеріне назар аударыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "An author writes: 'Every year, 8 million tons of plastic enter our oceans — equivalent to dumping a garbage truck of plastic into the sea every minute.' Identify the persuasive techniques used.",
            questionRu: "Автор пишет: 'Ежегодно 8 миллионов тонн пластика попадают в океаны — это равносильно выбрасыванию мусоровоза пластика в море каждую минуту.' Определите приёмы убеждения.",
            questionKk: "Автор жазады: 'Жыл сайын 8 миллион тонна пластик мұхитқа түседі — бұл әр минут сайын теңізге қоқыс машинасын төгумен тең.' Сенімділік тәсілдерін анықтаңыз.",
            answer: "Evidence: specific statistic (8 million tons). Style: vivid analogy (garbage truck every minute) makes the abstract number concrete and alarming. This combination of data and imagery creates both logical and emotional impact.",
            hint: "Look for data (evidence) and figurative language (style). How do they work together?",
            hintRu: "Ищите данные (доказательства) и образный язык (стиль). Как они работают вместе?",
            hintKk: "Деректерді (дәлел) және бейнелі тілді (стиль) іздеңіз. Олар бірге қалай жұмыс істейді?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a thesis statement for an SAT essay analyzing a passage where the author uses personal anecdotes, scientific research, and emotional language to argue that music education should be mandatory in schools.",
            questionRu: "Напишите тезис для эссе SAT, анализирующего текст, где автор использует личные истории, научные исследования и эмоциональный язык, чтобы аргументировать обязательность музыкального образования.",
            questionKk: "Автор музыка білімін міндетті ету керек деп дәлелдеу үшін жеке әңгімелер, ғылыми зерттеулер және эмоционалды тілді қолданатын мәтінді талдайтын SAT эссесі үшін тезис жазыңыз.",
            answer: "In the passage, the author builds a compelling case for mandatory music education by weaving together personal anecdotes that humanize the issue, citing scientific studies that lend credibility, and employing emotionally charged language that motivates readers to action.",
            hint: "Your thesis should name the three specific techniques and briefly explain how each contributes to the argument.",
            hintRu: "Тезис должен назвать три конкретных приёма и кратко объяснить вклад каждого.",
            hintKk: "Тезис үш нақты тәсілді атап, әрқайсысының аргументке қосқан үлесін қысқаша түсіндіруі керек.",
            xp: 20
          }
        ]
      },
      {
        title: "ACT English",
        titleRu: "ACT Английский",
        titleKk: "ACT Ағылшын тілі",
        content: "The ACT English section has 75 questions in 45 minutes across 5 passages. It tests grammar, punctuation, sentence structure, and rhetorical skills. Key topics include comma rules, apostrophes, parallel structure, redundancy, and sentence placement. Reading the full sentence and surrounding context is essential before choosing an answer.",
        contentRu: "Раздел ACT English содержит 75 вопросов за 45 минут по 5 текстам. Тестируются грамматика, пунктуация, структура предложений и риторика. Ключевые темы: правила запятых, апострофы, параллельные конструкции, избыточность и размещение предложений. Перед выбором ответа обязательно прочитайте полное предложение и контекст.",
        contentKk: "ACT English бөлімінде 5 мәтін бойынша 45 минутта 75 сұрақ бар. Грамматика, тыныс белгілер, сөйлем құрылымы және риторика тексеріледі. Негізгі тақырыптар: үтір ережелері, апостроф, параллель құрылым, артықшылық және сөйлемді орналастыру. Жауап таңдамас бұрын толық сөйлем мен контексті оқу маңызды.",
        keyFormulas: [
          {
            formula: "Comma Rules: (1) Before FANBOYS conjunctions in compound sentences. (2) After introductory phrases. (3) Around non-essential information.",
            description: "Three essential comma rules for ACT English",
            descriptionRu: "Три основных правила запятых для ACT English",
            descriptionKk: "ACT English үшін үш маңызды үтір ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "Choose the correct version: (A) 'The students, who passed the exam, celebrated.' (B) 'The students who passed the exam celebrated.'",
            questionRu: "Выберите правильный вариант: (A) 'The students, who passed the exam, celebrated.' (B) 'The students who passed the exam celebrated.'",
            questionKk: "Дұрыс нұсқаны таңдаңыз: (A) 'The students, who passed the exam, celebrated.' (B) 'The students who passed the exam celebrated.'",
            steps: [
              { en: "Determine if the clause is essential: 'who passed the exam' tells us which students — it is essential information.", ru: "Определите, важна ли часть предложения: 'who passed the exam' указывает, какие студенты — это существенная информация.", kk: "Сөйлем бөлігі маңызды ма анықтаңыз: 'who passed the exam' қай студенттер екенін айтады — бұл маңызды ақпарат." },
              { en: "Essential (restrictive) clauses do not use commas. Answer: (B).", ru: "Существенные (ограничительные) части не выделяются запятыми. Ответ: (B).", kk: "Маңызды (шектеуші) сөйлем бөліктері үтірмен бөлінбейді. Жауап: (B)." }
            ],
            answer: "B — 'The students who passed the exam celebrated.' No commas because the clause is essential."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many seconds per question do you have on the ACT English section?",
            questionRu: "Сколько секунд на вопрос у вас есть в разделе ACT English?",
            questionKk: "ACT English бөлімінде әр сұраққа қанша секунд бар?",
            answer: "36 seconds per question (45 minutes × 60 ÷ 75 = 36).",
            hint: "Convert minutes to seconds, then divide by the number of questions.",
            hintRu: "Переведите минуты в секунды и разделите на количество вопросов.",
            hintKk: "Минутты секундқа айналдырып, сұрақтар санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Fix the error: 'She enjoys hiking, swimming, and to ride her bike on weekends.'",
            questionRu: "Исправьте ошибку: 'She enjoys hiking, swimming, and to ride her bike on weekends.'",
            questionKk: "Қатені түзетіңіз: 'She enjoys hiking, swimming, and to ride her bike on weekends.'",
            answer: "'She enjoys hiking, swimming, and riding her bike on weekends.' — items in a list must have parallel structure (all gerunds).",
            hint: "Look at the pattern: hiking, swimming, and ___. All items should match the same form.",
            hintRu: "Посмотрите на шаблон: hiking, swimming, and ___. Все элементы должны быть в одной форме.",
            hintKk: "Үлгіге қараңыз: hiking, swimming, and ___. Барлық элементтер бір формада болуы керек.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A passage about renewable energy reads: 'Solar power is efficient. It is also cost-effective. Solar panels can be installed on rooftops. This makes them accessible.' The writer wants to combine these into one effective sentence. Write the revised version.",
            questionRu: "Текст о возобновляемой энергии: 'Solar power is efficient. It is also cost-effective. Solar panels can be installed on rooftops. This makes them accessible.' Автор хочет объединить в одно эффективное предложение. Напишите его.",
            questionKk: "Жаңартылатын энергия туралы мәтін: 'Solar power is efficient. It is also cost-effective. Solar panels can be installed on rooftops. This makes them accessible.' Жазушы бір тиімді сөйлемге біріктіргісі келеді. Жазыңыз.",
            answer: "'Solar power is both efficient and cost-effective, and because panels can be installed on rooftops, they are highly accessible.'",
            hint: "Combine related ideas using conjunctions and subordination. Remove repetition while keeping all key information.",
            hintRu: "Объедините связанные идеи союзами и подчинением. Уберите повторы, сохранив всю ключевую информацию.",
            hintKk: "Байланысты идеяларды жалғаулықтар мен бағыныңқы сөйлемдермен біріктіріңіз. Қайталауды жойып, барлық негізгі ақпаратты сақтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "ACT Advanced Math",
        titleRu: "ACT Продвинутая математика",
        titleKk: "ACT Күрделі математика",
        content: "ACT Advanced Math covers complex numbers, matrices, logarithms, conic sections, and sequences. These questions appear in the later portion of the test and tend to be more challenging. Familiarity with logarithmic properties, arithmetic and geometric sequences, and coordinate geometry of circles and ellipses is essential.",
        contentRu: "Продвинутая математика ACT охватывает комплексные числа, матрицы, логарифмы, конические сечения и последовательности. Эти вопросы появляются в конце теста и обычно сложнее. Необходимо знание свойств логарифмов, арифметических и геометрических прогрессий, координатной геометрии окружностей и эллипсов.",
        contentKk: "ACT күрделі математикасы комплексті сандарды, матрицаларды, логарифмдерді, конустық қималарды және тізбектерді қамтиды. Бұл сұрақтар тесттің соңында пайда болады және күрделірек. Логарифм қасиеттерін, арифметикалық және геометриялық прогрессияларды, шеңберлер мен эллипстердің координаталық геометриясын білу қажет.",
        keyFormulas: [
          {
            formula: "Arithmetic sequence: aₙ = a₁ + (n−1)d; Geometric sequence: aₙ = a₁ · r^(n−1)",
            description: "Formulas for finding the nth term of arithmetic and geometric sequences",
            descriptionRu: "Формулы для нахождения n-го члена арифметической и геометрической прогрессий",
            descriptionKk: "Арифметикалық және геометриялық прогрессиялардың n-ші мүшесін табу формулалары"
          }
        ],
        solvedExamples: [
          {
            question: "Find the 10th term of the arithmetic sequence: 3, 7, 11, 15, ...",
            questionRu: "Найдите 10-й член арифметической прогрессии: 3, 7, 11, 15, ...",
            questionKk: "Арифметикалық прогрессияның 10-шы мүшесін табыңыз: 3, 7, 11, 15, ...",
            steps: [
              { en: "Identify a₁ = 3 and d = 7 − 3 = 4.", ru: "Определите a₁ = 3 и d = 7 − 3 = 4.", kk: "a₁ = 3 және d = 7 − 3 = 4 анықтаңыз." },
              { en: "a₁₀ = 3 + (10−1)(4) = 3 + 36 = 39.", ru: "a₁₀ = 3 + (10−1)(4) = 3 + 36 = 39.", kk: "a₁₀ = 3 + (10−1)(4) = 3 + 36 = 39." }
            ],
            answer: "The 10th term is 39."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Find the common difference in the sequence: 5, 12, 19, 26, ...",
            questionRu: "Найдите разность в прогрессии: 5, 12, 19, 26, ...",
            questionKk: "Прогрессиядағы айырманы табыңыз: 5, 12, 19, 26, ...",
            answer: "d = 7 (each term increases by 7)",
            hint: "Subtract any term from the next one: 12 − 5 = ?",
            hintRu: "Вычтите любой член из следующего: 12 − 5 = ?",
            hintKk: "Кез келген мүшені келесіден алып тастаңыз: 12 − 5 = ?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Find the 8th term of the geometric sequence: 2, 6, 18, 54, ...",
            questionRu: "Найдите 8-й член геометрической прогрессии: 2, 6, 18, 54, ...",
            questionKk: "Геометриялық прогрессияның 8-ші мүшесін табыңыз: 2, 6, 18, 54, ...",
            answer: "a₈ = 2 · 3⁷ = 2 · 2187 = 4374",
            hint: "Find r = 6/2 = 3, then use aₙ = a₁ · r^(n−1).",
            hintRu: "Найдите r = 6/2 = 3, затем используйте aₙ = a₁ · r^(n−1).",
            hintKk: "r = 6/2 = 3 табыңыз, содан кейін aₙ = a₁ · r^(n−1) қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A circle has the equation (x − 3)² + (y + 2)² = 25. Find the center, radius, and determine whether the point (6, 2) lies inside, on, or outside the circle.",
            questionRu: "Окружность задана уравнением (x − 3)² + (y + 2)² = 25. Найдите центр, радиус и определите, лежит ли точка (6, 2) внутри, на или вне окружности.",
            questionKk: "(x − 3)² + (y + 2)² = 25 теңдеуімен берілген шеңбердің центрін, радиусын табыңыз және (6, 2) нүктесі шеңбердің ішінде, үстінде немесе сыртында жатқанын анықтаңыз.",
            answer: "Center (3, −2), radius = 5. Distance from center to (6, 2) = √((6−3)² + (2−(−2))²) = √(9+16) = √25 = 5. The point lies on the circle.",
            hint: "The equation (x−h)² + (y−k)² = r² gives center (h,k) and radius r. Calculate the distance from center to the point.",
            hintRu: "Уравнение (x−h)² + (y−k)² = r² даёт центр (h,k) и радиус r. Вычислите расстояние от центра до точки.",
            hintKk: "(x−h)² + (y−k)² = r² теңдеуі центр (h,k) және радиус r береді. Центрден нүктеге дейінгі қашықтықты есептеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Band 7+ Strategies",
        titleRu: "IELTS Стратегии для Band 7+",
        titleKk: "IELTS Band 7+ стратегиялары",
        content: "Achieving IELTS Band 7+ requires moving beyond basic competence to demonstrating flexibility and precision with language. You need a wide range of vocabulary with natural collocations, complex sentence structures with few errors, and the ability to develop ideas fully with relevant examples. Consistent use of cohesive devices and clear paragraph organization is essential.",
        contentRu: "Для достижения IELTS Band 7+ нужно выйти за рамки базовой компетенции к гибкости и точности языка. Требуется широкий словарный запас с естественными коллокациями, сложные предложения с минимумом ошибок и умение полностью развивать идеи с примерами. Последовательное использование связующих средств и чёткая организация абзацев обязательны.",
        contentKk: "IELTS Band 7+ алу үшін негізгі құзыреттен тілдің икемділігі мен дәлдігіне көшу керек. Табиғи коллокациялармен кең сөздік қор, аз қателермен күрделі сөйлем құрылымдары және идеяларды мысалдармен толық дамыту қабілеті қажет. Байланыстырушы құралдарды дәйекті қолдану және абзацтарды анық ұйымдастыру міндетті.",
        keyFormulas: [
          {
            formula: "Band 7 Writing = Task Achievement + Coherence/Cohesion + Lexical Resource + Grammatical Range (all ≥ 7)",
            description: "The four IELTS Writing assessment criteria",
            descriptionRu: "Четыре критерия оценки IELTS Writing",
            descriptionKk: "IELTS Writing бағалаудың төрт критерийі"
          }
        ],
        solvedExamples: [
          {
            question: "Upgrade this Band 5 sentence to Band 7+: 'Many people think technology is good for education because it helps students learn better.'",
            questionRu: "Повысьте это предложение уровня Band 5 до Band 7+: 'Many people think technology is good for education because it helps students learn better.'",
            questionKk: "Бұл Band 5 сөйлемін Band 7+ деңгейіне жақсартыңыз: 'Many people think technology is good for education because it helps students learn better.'",
            steps: [
              { en: "Replace generic vocabulary with precise collocations: 'think' → 'contend,' 'good for' → 'has a transformative impact on,' 'helps students learn better' → 'enables personalized learning experiences.'", ru: "Замените общую лексику точными коллокациями: 'think' → 'contend,' 'good for' → 'has a transformative impact on.'", kk: "Жалпы сөздікті дәл коллокациялармен алмастырыңыз: 'think' → 'contend,' 'good for' → 'has a transformative impact on.'" },
              { en: "Add complexity: 'A growing number of educators contend that technology has a transformative impact on education, as it enables personalized learning experiences tailored to individual student needs.'", ru: "Добавьте сложность: 'A growing number of educators contend that technology has a transformative impact on education, as it enables personalized learning experiences tailored to individual student needs.'", kk: "Күрделілік қосыңыз: 'A growing number of educators contend that technology has a transformative impact on education, as it enables personalized learning experiences tailored to individual student needs.'" }
            ],
            answer: "'A growing number of educators contend that technology has a transformative impact on education, as it enables personalized learning experiences tailored to individual student needs.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the four assessment criteria for IELTS Writing?",
            questionRu: "Каковы четыре критерия оценки IELTS Writing?",
            questionKk: "IELTS Writing бағалаудың төрт критерийі қандай?",
            answer: "1) Task Achievement/Response, 2) Coherence and Cohesion, 3) Lexical Resource, 4) Grammatical Range and Accuracy.",
            hint: "Think about: Did you answer the question? Is it organized? What vocabulary did you use? Is the grammar accurate?",
            hintRu: "Подумайте: Ответили ли на вопрос? Организовано ли? Какая лексика? Точна ли грамматика?",
            hintKk: "Ойлаңыз: Сұраққа жауап бердіңіз бе? Ұйымдастырылған ба? Қандай сөздік қор? Грамматика дәл бе?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Replace these basic words with Band 7+ vocabulary: (1) 'important' (2) 'bad' (3) 'many people'",
            questionRu: "Замените базовые слова на лексику Band 7+: (1) 'important' (2) 'bad' (3) 'many people'",
            questionKk: "Негізгі сөздерді Band 7+ сөздік қорымен алмастырыңыз: (1) 'important' (2) 'bad' (3) 'many people'",
            answer: "(1) crucial / paramount / vital (2) detrimental / adverse / harmful (3) a significant proportion of the population / a considerable number of individuals",
            hint: "Think of more precise, academic synonyms. Avoid overused words.",
            hintRu: "Подумайте о более точных, академических синонимах. Избегайте заезженных слов.",
            hintKk: "Дәлірек, академиялық синонимдерді ойлаңыз. Тым жиі қолданылатын сөздерден аулақ болыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Rewrite this Band 5 paragraph to Band 7+ level: 'Pollution is a big problem. It makes people sick. The government should do something about it. They should make laws to stop factories from polluting.'",
            questionRu: "Перепишите этот абзац уровня Band 5 до уровня Band 7+: 'Pollution is a big problem. It makes people sick. The government should do something about it. They should make laws to stop factories from polluting.'",
            questionKk: "Бұл Band 5 абзацын Band 7+ деңгейіне қайта жазыңыз: 'Pollution is a big problem. It makes people sick. The government should do something about it. They should make laws to stop factories from polluting.'",
            answer: "Environmental pollution has emerged as one of the most pressing challenges of the modern era, contributing to a range of health issues including respiratory diseases and cancer. To address this crisis, governments must implement stricter environmental regulations that hold industrial polluters accountable, including imposing substantial fines on factories that exceed emission limits.",
            hint: "Combine short sentences, use academic vocabulary, add specific examples, and use cohesive devices.",
            hintRu: "Объедините короткие предложения, используйте академическую лексику, добавьте конкретные примеры.",
            hintKk: "Қысқа сөйлемдерді біріктіріңіз, академиялық сөздік қор қолданыңыз, нақты мысалдар қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "TOEFL Writing",
        titleRu: "TOEFL Письмо",
        titleKk: "TOEFL Жазу",
        content: "The TOEFL Writing section has two tasks: an Integrated task (read a passage, listen to a lecture, write about how they relate in 20 minutes) and a Writing for an Academic Discussion task (contribute to an online discussion in 10 minutes). Strong responses demonstrate synthesis of sources, clear organization, and precise academic language.",
        contentRu: "Раздел TOEFL Writing включает два задания: Интегрированное (прочитайте текст, прослушайте лекцию, напишите о их связи за 20 минут) и Письмо для академической дискуссии (вклад в онлайн-дискуссию за 10 минут). Сильные ответы демонстрируют синтез источников, чёткую организацию и точный академический язык.",
        contentKk: "TOEFL Writing бөлімінде екі тапсырма бар: Интеграцияланған (мәтін оқу, лекция тыңдау, олардың байланысы туралы 20 минутта жазу) және Академиялық талқылау үшін жазу (онлайн талқылауға 10 минутта үлес қосу). Күшті жауаптар көздерді синтездеуді, анық ұйымдастыруды және дәл академиялық тілді көрсетеді.",
        keyFormulas: [
          {
            formula: "Integrated Writing Structure: Intro (topic + relationship) → Body 1 (Point from lecture that challenges/supports reading) → Body 2 (Second point) → Body 3 (Third point)",
            description: "Standard structure for the TOEFL Integrated Writing task",
            descriptionRu: "Стандартная структура интегрированного письменного задания TOEFL",
            descriptionKk: "TOEFL интеграцияланған жазу тапсырмасының стандартты құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "A reading passage claims that remote work increases productivity. The lecture argues it decreases collaboration. Write an introductory sentence for the integrated essay.",
            questionRu: "Текст утверждает, что удалённая работа повышает продуктивность. Лекция аргументирует, что она снижает сотрудничество. Напишите вводное предложение для интегрированного эссе.",
            questionKk: "Мәтін қашықтан жұмыс өнімділікті арттырады деп мәлімдейді. Лекция ол ынтымақтастықты төмендетеді деп дәлелдейді. Интеграцияланған эссе үшін кіріспе сөйлемін жазыңыз.",
            steps: [
              { en: "Identify the relationship: the lecture challenges the reading's claim.", ru: "Определите связь: лекция оспаривает утверждение текста.", kk: "Байланысты анықтаңыз: лекция мәтіннің мәлімдемесіне қарсы шығады." },
              { en: "Write: 'While the reading passage argues that remote work leads to higher productivity, the lecturer challenges this view by presenting evidence that it significantly reduces team collaboration.'", ru: "Напишите: 'Хотя текст утверждает, что удалённая работа повышает продуктивность, лектор оспаривает это, приводя доказательства снижения командного сотрудничества.'", kk: "Жазыңыз: 'Мәтін қашықтан жұмыс жоғары өнімділікке әкеледі деп дәлелдесе де, лектор бұл көзқарасқа команда ынтымақтастығын айтарлықтай төмендететін дәлелдер ұсына отырып қарсы шығады.'" }
            ],
            answer: "'While the reading passage argues that remote work leads to higher productivity, the lecturer challenges this view by presenting evidence that it significantly reduces team collaboration.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many writing tasks are on the TOEFL, and how much time is given for each?",
            questionRu: "Сколько письменных заданий на TOEFL и сколько времени даётся на каждое?",
            questionKk: "TOEFL-да қанша жазу тапсырмасы бар және әрқайсысына қанша уақыт беріледі?",
            answer: "Two tasks: Integrated Writing (20 minutes) and Writing for an Academic Discussion (10 minutes).",
            hint: "The integrated task is longer because you must read and listen before writing.",
            hintRu: "Интегрированное задание дольше, потому что нужно сначала прочитать и прослушать.",
            hintKk: "Интеграцияланған тапсырма ұзағырақ, себебі алдымен оқып, тыңдау керек.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "In the Integrated Writing task, the reading says deforestation is necessary for economic development. The lecture says it causes irreversible ecological damage. Write a topic sentence for the first body paragraph.",
            questionRu: "В интегрированном задании текст говорит, что вырубка лесов необходима для экономического развития. Лекция утверждает, что она наносит необратимый экологический ущерб. Напишите тематическое предложение для первого основного абзаца.",
            questionKk: "Интеграцияланған тапсырмада мәтін орман шабуды экономикалық даму үшін қажет дейді. Лекция оның қайтымсыз экологиялық зиян келтіретінін айтады. Бірінші негізгі абзац үшін тақырыптық сөйлем жазыңыз.",
            answer: "The lecturer directly challenges the reading's claim about economic necessity by arguing that deforestation causes irreversible biodiversity loss that ultimately undermines long-term economic stability.",
            hint: "Start with how the lecture responds to the reading. Show the contrast clearly.",
            hintRu: "Начните с того, как лекция отвечает тексту. Чётко покажите контраст.",
            hintKk: "Лекцияның мәтінге қалай жауап беретінінен бастаңыз. Контрастты анық көрсетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "For the Academic Discussion task, a professor asks: 'Should universities require all students to take a course in computer programming?' Student A says yes for career skills; Student B says no because not all careers need it. Write a 100-word response contributing a new perspective.",
            questionRu: "В академической дискуссии профессор спрашивает: 'Должны ли университеты требовать курс программирования?' Студент A говорит да, для карьерных навыков; Студент B говорит нет, не все карьеры требуют этого. Напишите ответ в 100 слов с новой перспективой.",
            questionKk: "Академиялық талқылауда профессор сұрайды: 'Университеттер барлық студенттерден бағдарламалау курсын талап етуі керек пе?' A студент иә дейді, мансап дағдылары үшін; B студент жоқ дейді, барлық мансаптарға қажет емес. Жаңа перспективамен 100 сөздік жауап жазыңыз.",
            answer: "While both students make valid points, I believe universities should offer computational thinking courses rather than strict programming. Computational thinking — which involves problem decomposition, pattern recognition, and logical reasoning — benefits students across all disciplines. A medical student, for example, can apply these skills to diagnostic reasoning, while a literature student might use them for textual analysis. Rather than mandating a specific programming language, universities should focus on the underlying problem-solving framework that programming teaches, making the course relevant regardless of career path.",
            hint: "Find a middle ground or a completely new angle. Add a specific example to strengthen your position.",
            hintRu: "Найдите золотую середину или совершенно новый угол. Добавьте конкретный пример.",
            hintKk: "Ортаңғы жол немесе мүлдем жаңа көзқарас табыңыз. Нақты мысал қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "TOEFL Speaking",
        titleRu: "TOEFL Говорение",
        titleKk: "TOEFL Сөйлеу",
        content: "The TOEFL Speaking section has 4 tasks in 17 minutes: 1 independent task (personal opinion) and 3 integrated tasks (combining reading, listening, and speaking). You get 15-30 seconds to prepare and 45-60 seconds to respond. Key skills include summarizing information accurately, speaking clearly with good pacing, and organizing responses logically.",
        contentRu: "Раздел TOEFL Speaking содержит 4 задания за 17 минут: 1 независимое (личное мнение) и 3 интегрированных (чтение + аудирование + говорение). На подготовку 15-30 секунд, на ответ 45-60 секунд. Ключевые навыки: точное обобщение информации, чёткая речь с хорошим темпом и логическая организация ответов.",
        contentKk: "TOEFL Speaking бөлімінде 17 минутта 4 тапсырма бар: 1 тәуелсіз (жеке пікір) және 3 интеграцияланған (оқу + тыңдау + сөйлеу). Дайындалуға 15-30 секунд, жауап беруге 45-60 секунд. Негізгі дағдылар: ақпаратты дәл қысқарту, жақсы қарқынмен анық сөйлеу және жауаптарды логикалық ұйымдастыру.",
        keyFormulas: [
          {
            formula: "Independent Task: State opinion → Reason 1 + Example → Reason 2 + Example (45 sec)",
            description: "Template for TOEFL Speaking independent task",
            descriptionRu: "Шаблон для независимого задания TOEFL Speaking",
            descriptionKk: "TOEFL Speaking тәуелсіз тапсырмасының үлгісі"
          }
        ],
        solvedExamples: [
          {
            question: "Independent task: 'Do you prefer studying alone or with a group?' Outline a 45-second response.",
            questionRu: "Независимое задание: 'Вы предпочитаете учиться один или в группе?' Составьте план ответа на 45 секунд.",
            questionKk: "Тәуелсіз тапсырма: 'Жалғыз оқуды ма, топпен оқуды ма таңдайсыз?' 45 секундтық жауап жоспарын құрыңыз.",
            steps: [
              { en: "State opinion (5 sec): 'I prefer studying with a group for two main reasons.'", ru: "Мнение (5 сек): 'Я предпочитаю учиться в группе по двум причинам.'", kk: "Пікір (5 сек): 'Екі себеппен топпен оқуды қалаймын.'" },
              { en: "Reason 1 + Example (18 sec): 'First, group study helps me understand difficult concepts. For example, when I struggled with calculus, my study group explained it in ways the textbook couldn't.' Reason 2 + Example (18 sec): 'Second, it keeps me motivated. Studying alone, I often get distracted, but with others I stay focused and accountable.'", ru: "Причина 1 + Пример (18 сек): 'Во-первых, группа помогает понять сложные концепции. Например, мне помогли с математикой.' Причина 2 + Пример (18 сек): 'Во-вторых, это мотивирует. Один я отвлекаюсь, а в группе остаюсь сосредоточенным.'", kk: "Себеп 1 + Мысал (18 сек): 'Біріншіден, топ күрделі тұжырымдамаларды түсінуге көмектеседі. Мысалы, математикадан қиналғанда топтасым түсіндірді.' Себеп 2 + Мысал (18 сек): 'Екіншіден, мотивация береді. Жалғыз оқығанда алаңдаймын, бірақ топпен назар аударамын.'" }
            ],
            answer: "'I prefer studying with a group for two main reasons. First, group study helps me understand difficult concepts — for example, my study group helped me with calculus. Second, it keeps me motivated and accountable, whereas studying alone I often get distracted.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many speaking tasks are on the TOEFL, and how long is the entire section?",
            questionRu: "Сколько заданий по говорению на TOEFL и сколько длится весь раздел?",
            questionKk: "TOEFL-да қанша сөйлеу тапсырмасы бар және бөлім қанша уақытқа созылады?",
            answer: "4 tasks in approximately 17 minutes.",
            hint: "1 independent + 3 integrated = 4 total tasks.",
            hintRu: "1 независимое + 3 интегрированных = 4 задания.",
            hintKk: "1 тәуелсіз + 3 интеграцияланған = барлығы 4 тапсырма.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have 30 seconds to prepare for a TOEFL integrated speaking task about a campus announcement. What should you write in your notes during preparation?",
            questionRu: "У вас 30 секунд на подготовку к интегрированному заданию о кампусном объявлении. Что записать в заметки?",
            questionKk: "Кампус хабарландыруы туралы интеграцияланған тапсырмаға дайындалуға 30 секундыңыз бар. Жазбаларыңызға не жазу керек?",
            answer: "Write: (1) The main change announced, (2) The two reasons given for the change in the reading, (3) The speaker's opinion (agree/disagree) and their two reasons from the listening.",
            hint: "Focus on the key facts: what changed, why (from reading), and the speaker's reaction (from listening).",
            hintRu: "Сосредоточьтесь на ключевых фактах: что изменилось, почему (из текста) и реакция говорящего (из аудио).",
            hintKk: "Негізгі фактіларға назар аударыңыз: не өзгерді, неге (мәтіннен) және сөйлеушінің реакциясы (аудиодан).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Integrated task: A reading says the university will close the campus bookstore and move to online-only sales. A student in the conversation disagrees. Outline a 60-second response summarizing both the announcement and the student's objections.",
            questionRu: "Интегрированное задание: текст сообщает, что университет закроет книжный магазин и перейдёт на онлайн-продажи. Студент в разговоре не согласен. Составьте план ответа на 60 секунд.",
            questionKk: "Интеграцияланған тапсырма: мәтін университет кітап дүкенін жабып, тек онлайн сатуға көшетінін хабарлайды. Әңгімедегі студент келіспейді. 60 секундтық жауап жоспарын құрыңыз.",
            answer: "Introduction (10 sec): 'The university announced it will close the campus bookstore and transition to online-only sales to reduce costs.' Objection 1 (20 sec): 'The student disagrees, arguing that many students need to physically browse textbooks before buying them, especially for courses where multiple editions exist.' Objection 2 (20 sec): 'Additionally, the student points out that the bookstore serves as a community space where students meet and study, and losing it would reduce campus social life.' Closing (10 sec): 'For these reasons, the student believes the university should keep the bookstore open.'",
            hint: "Summarize the announcement first (what and why), then present each of the student's objections clearly.",
            hintRu: "Сначала изложите объявление (что и почему), затем чётко представьте каждое возражение студента.",
            hintKk: "Алдымен хабарландыруды қысқартыңыз (не және неге), содан кейін студенттің әр қарсылығын анық көрсетіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Test Day Preparation",
        titleRu: "Подготовка ко дню экзамена",
        titleKk: "Емтихан күніне дайындық",
        content: "Test day preparation goes beyond studying content — it includes logistical planning, mental preparation, and performance optimization. Knowing what to bring, how to manage test anxiety, when to guess strategically, and how to pace yourself across sections can mean the difference between a good score and a great one.",
        contentRu: "Подготовка ко дню экзамена выходит за рамки изучения материала — включает логистику, ментальную подготовку и оптимизацию результатов. Знание что взять, как справиться с тревогой, когда стратегически угадывать и как распределить время по разделам — разница между хорошим и отличным результатом.",
        contentKk: "Емтихан күніне дайындық мазмұнды оқудан тыс — логистикалық жоспарлау, ментальды дайындық және нәтижені оңтайландыруды қамтиды. Не алу керектігін, емтихан алаңдаушылығын қалай басқаруды, қашан стратегиялық болжам жасауды және бөлімдер бойынша уақытты қалай бөлуді білу жақсы мен тамаша нәтиже арасындағы айырмашылық.",
        keyFormulas: [
          {
            formula: "Test Day Checklist: ID + Admission Ticket + Pencils + Calculator (if allowed) + Water + Snack + Watch",
            description: "Essential items to bring on test day",
            descriptionRu: "Необходимые вещи на день экзамена",
            descriptionKk: "Емтихан күні алу керек заттар"
          },
          {
            formula: "Anxiety Management: 4-7-8 Breathing (inhale 4 sec, hold 7 sec, exhale 8 sec)",
            description: "Quick breathing technique to reduce test anxiety",
            descriptionRu: "Быстрая дыхательная техника для снижения тревоги",
            descriptionKk: "Емтихан алаңдаушылығын азайту үшін тыныс алу техникасы"
          }
        ],
        solvedExamples: [
          {
            question: "You are taking the SAT and have 10 minutes left in the Math section with 8 questions remaining. Three look easy, three look medium, and two look very hard. What is your strategy?",
            questionRu: "Вы сдаёте SAT и осталось 10 минут в разделе математики с 8 оставшимися вопросами. Три выглядят лёгкими, три средними и два очень сложными. Какова стратегия?",
            questionKk: "SAT тапсырып жатырсыз, математика бөлімінде 10 минут қалды, 8 сұрақ қалды. Үшеуі оңай, үшеуі орташа, екеуі өте қиын. Стратегияңыз қандай?",
            steps: [
              { en: "First, answer the 3 easy questions quickly (about 3 minutes total). This secures guaranteed points.", ru: "Сначала быстро ответьте на 3 лёгких (примерно 3 минуты). Это гарантированные баллы.", kk: "Алдымен 3 оңай сұраққа жылдам жауап беріңіз (шамамен 3 минут). Бұл кепілдікті ұпайлар." },
              { en: "Next, spend about 5 minutes on the 3 medium questions. With remaining 2 minutes, attempt the hard questions or make educated guesses. Never leave any blank — there is no penalty.", ru: "Затем уделите 5 минут 3 средним. Оставшиеся 2 минуты — попытайтесь решить сложные или сделайте обоснованные догадки. Не оставляйте пустых — штрафа нет.", kk: "Содан кейін 3 орташа сұраққа 5 минут жұмсаңыз. Қалған 2 минутта қиын сұрақтарға тырысыңыз немесе негізделген болжам жасаңыз. Бос қалдырмаңыз — айыппұл жоқ." }
            ],
            answer: "Easy first (3 min) → Medium next (5 min) → Hard last or guess (2 min). Never leave questions blank."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three essential items you should bring on SAT/ACT test day.",
            questionRu: "Назовите три необходимые вещи на день SAT/ACT.",
            questionKk: "SAT/ACT емтихан күніне алу керек үш маңызды затты атаңыз.",
            answer: "Photo ID, admission ticket, and No. 2 pencils. (Also recommended: approved calculator, water, snack, and a watch.)",
            hint: "Think about identification, registration proof, and writing tools.",
            hintRu: "Подумайте об удостоверении личности, подтверждении регистрации и письменных принадлежностях.",
            hintKk: "Жеке куәлік, тіркеу растамасы және жазу құралдары туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You feel extremely anxious right before the test begins. Describe a 60-second technique to calm yourself down.",
            questionRu: "Вы чувствуете сильную тревогу прямо перед тестом. Опишите 60-секундную технику успокоения.",
            questionKk: "Тест басталар алдында өте алаңдайсыз. Тынышталу үшін 60 секундтық техниканы сипаттаңыз.",
            answer: "Use 4-7-8 breathing: inhale through your nose for 4 seconds, hold for 7 seconds, exhale slowly through your mouth for 8 seconds. Repeat 3 times (about 57 seconds). This activates your parasympathetic nervous system and reduces anxiety quickly.",
            hint: "Controlled breathing is the fastest way to reduce physical anxiety symptoms.",
            hintRu: "Контролируемое дыхание — самый быстрый способ снизить физические симптомы тревоги.",
            hintKk: "Бақыланатын тыныс алу — дене алаңдаушылығы белгілерін азайтудың ең жылдам жолы.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a complete 7-day test preparation schedule for someone taking the SAT next Saturday. Include study topics, practice tests, rest days, and test day logistics.",
            questionRu: "Составьте полный 7-дневный план подготовки для сдающего SAT в следующую субботу. Включите темы, пробные тесты, дни отдыха и логистику дня экзамена.",
            questionKk: "Келесі сенбіде SAT тапсыратын адамға 7 күндік толық дайындық кестесін жасаңыз. Тақырыптарды, пробные тесттерді, демалыс күндерін және емтихан күні логистикасын қосыңыз.",
            answer: "Sunday: Full practice test under timed conditions, review all wrong answers. Monday: Focus on weakest math topics (review errors from practice test). Tuesday: Focus on weakest reading/writing topics. Wednesday: Mixed practice — 1 math section + 1 reading section timed. Thursday: Light review of formulas and strategies only (no full tests). Friday: Complete rest day — no studying, prepare materials (ID, ticket, pencils, calculator, snack), set two alarms, go to bed early. Saturday (Test Day): Wake 2 hours before, light breakfast, arrive 30 minutes early, use breathing technique before start.",
            hint: "Include a full practice test early, focus on weak areas mid-week, taper off, and rest the day before.",
            hintRu: "Включите полный тест в начале, среди недели — слабые темы, снижайте нагрузку, отдыхайте накануне.",
            hintKk: "Басында толық тест қосыңыз, апта ортасында әлсіз тақырыптар, жүктемені азайтыңыз, алдыңғы күні демалыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Admission Exams_12": {
    planetName: "Admission Exams",
    introduction: {
      en: "Welcome to Admission Exams for Grade 12! This is your final exam preparation year. Master SAT score optimization and super-scoring, compare ACT vs SAT strategically, distinguish IELTS Academic from General Training, set TOEFL targets, conquer Subject SAT Math and Science, plan AP exam strategy, build your application timeline, and prove your readiness with final mock tests.",
      ru: "Добро пожаловать в Вступительные экзамены для 12 класса! Это ваш финальный год подготовки к экзаменам. Освойте оптимизацию баллов SAT и суперскоринг, стратегически сравните ACT и SAT, различайте IELTS Academic и General Training, установите целевые баллы TOEFL, покорите Subject SAT по математике и естественным наукам, спланируйте стратегию AP экзаменов, составьте график подачи документов и подтвердите свою готовность финальными пробными тестами."
    },
    sections: [
      {
        title: "SAT Score Optimization",
        titleRu: "Оптимизация баллов SAT",
        titleKk: "SAT ұпайларын оңтайландыру",
        content: "SAT score optimization means identifying your weakest question types through practice-test error analysis and allocating study time proportionally. Focus on high-yield topics — Heart of Algebra and Passport to Advanced Math together cover roughly 70% of the Math section. In Evidence-Based Reading, wrong-answer elimination and passage-mapping consistently boost scores by 40-80 points.",
        contentRu: "Оптимизация баллов SAT означает определение слабых типов вопросов через анализ ошибок пробных тестов и пропорциональное распределение учебного времени. Сосредоточьтесь на высокоэффективных темах — Heart of Algebra и Passport to Advanced Math покрывают около 70% раздела математики. В Evidence-Based Reading метод исключения неправильных ответов и картирование текста стабильно повышают баллы на 40-80 пунктов.",
        contentKk: "SAT ұпайларын оңтайландыру — пробный тест қателерін талдау арқылы әлсіз сұрақ түрлерін анықтап, оқу уақытын пропорционалды бөлу. Жоғары нәтижелі тақырыптарға назар аударыңыз — Heart of Algebra және Passport to Advanced Math математика бөлімінің шамамен 70%-ын қамтиды. Evidence-Based Reading бөлімінде қате жауаптарды алып тастау және мәтінді картаға түсіру ұпайларды 40-80 ұпайға тұрақты арттырады.",
        keyFormulas: [
          {
            formula: "Projected Score = Baseline + (Hours Studied × Average Points Gained per Hour)",
            description: "Estimate your score improvement based on focused study hours",
            descriptionRu: "Оценка улучшения баллов на основе целенаправленных часов подготовки",
            descriptionKk: "Мақсатты оқу сағаттарына негізделген ұпай жақсаруын бағалау"
          },
          {
            formula: "Error Rate = Wrong Answers in Category ÷ Total Questions in Category × 100%",
            description: "Calculate your error rate per question category to find weak areas",
            descriptionRu: "Рассчитайте процент ошибок по категории вопросов для выявления слабых мест",
            descriptionKk: "Әлсіз жақтарды табу үшін сұрақ санаты бойынша қателік деңгейін есептеңіз"
          }
        ],
        keyTerms: [
          {
            term: "Heart of Algebra",
            termRu: "Heart of Algebra",
            termKk: "Heart of Algebra",
            definition: "SAT Math subscore covering linear equations, systems, and inequalities — ~33% of the Math section.",
            definitionRu: "Подраздел SAT Math по линейным уравнениям, системам и неравенствам — около 33% математики.",
            definitionKk: "SAT Math бөлімінің сызықтық теңдеулер мен жүйелерге арналған бөлімі — математиканың ~33%.",
          },
          {
            term: "Passport to Advanced Math",
            termRu: "Passport to Advanced Math",
            termKk: "Passport to Advanced Math",
            definition: "SAT Math subscore focused on quadratics, polynomials, and exponential functions — ~28% of the Math section.",
            definitionRu: "Подраздел SAT Math: квадратные уравнения, многочлены, экспоненты — около 28% математики.",
            definitionKk: "SAT Math бөлімі: квадрат теңдеулер, көпмүшеліктер, экспонента — математиканың ~28%.",
          },
          {
            term: "Evidence-Based Reading & Writing (EBRW)",
            termRu: "Evidence-Based Reading & Writing (EBRW)",
            termKk: "Evidence-Based Reading & Writing (EBRW)",
            definition: "Combined verbal section of the SAT, scored 200-800, covering reading comprehension and writing/language.",
            definitionRu: "Объединённый вербальный раздел SAT (200-800 баллов): чтение и письмо/язык.",
            definitionKk: "SAT-тың біріктірілген вербалды бөлімі (200-800 ұпай): оқу және жазу/тіл.",
          },
          {
            term: "Error Analysis",
            termRu: "Анализ ошибок",
            termKk: "Қателер талдауы",
            definition: "Reviewing wrong answers on practice tests to identify recurring weaknesses and guide study allocation.",
            definitionRu: "Разбор неправильных ответов пробных тестов для выявления слабых мест и распределения времени.",
            definitionKk: "Әлсіз жақтарды анықтап, уақытты бөлу үшін пробный тесттердегі қате жауаптарды талдау.",
          },
        ],
        solvedExamples: [
          {
            question: "On a practice SAT, you scored 1150. You got 12 out of 20 Heart of Algebra questions wrong (your weakest area). If focused study can reduce errors by 50%, estimate your new score knowing each question is worth approximately 10 points.",
            questionRu: "На пробном SAT вы набрали 1150. Вы ошиблись в 12 из 20 вопросов Heart of Algebra (ваша слабая сторона). Если целенаправленная подготовка сократит ошибки на 50%, оцените новый балл, зная что каждый вопрос стоит примерно 10 баллов.",
            questionKk: "Пробный SAT-та 1150 ұпай жинадыңыз. Heart of Algebra 20 сұрағының 12-сінде қателестіңіз (ең әлсіз жағыңыз). Мақсатты дайындық қателерді 50%-ға азайтса, әр сұрақ шамамен 10 ұпай тұратынын біле отырып, жаңа ұпайды бағалаңыз.",
            steps: [
              { en: "Errors recovered = 12 × 50% = 6 additional correct answers.", ru: "Исправленные ошибки = 12 × 50% = 6 дополнительных правильных ответов.", kk: "Түзетілген қателер = 12 × 50% = 6 қосымша дұрыс жауап." },
              { en: "Estimated new score = 1150 + (6 × 10) = 1150 + 60 = 1210.", ru: "Расчётный новый балл = 1150 + (6 × 10) = 1150 + 60 = 1210.", kk: "Болжамды жаңа ұпай = 1150 + (6 × 10) = 1150 + 60 = 1210." }
            ],
            answer: "Estimated new score is 1210, a 60-point improvement from focused Heart of Algebra practice."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "You got 8 wrong out of 30 questions in the Passport to Advanced Math category. What is your error rate?",
            questionRu: "Вы ошиблись в 8 из 30 вопросов в категории Passport to Advanced Math. Каков ваш процент ошибок?",
            questionKk: "Passport to Advanced Math санатында 30 сұрақтың 8-інде қателестіңіз. Қателік деңгейіңіз қандай?",
            answer: "8 ÷ 30 × 100% ≈ 26.7%",
            hint: "Divide wrong answers by total questions, then multiply by 100.",
            hintRu: "Разделите неправильные ответы на общее количество вопросов и умножьте на 100.",
            hintKk: "Қате жауаптарды жалпы сұрақтар санына бөліп, 100-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your baseline SAT is 1080. After 40 hours of focused study you gain approximately 2 points per hour. What is your projected score?",
            questionRu: "Ваш базовый балл SAT — 1080. После 40 часов подготовки вы набираете примерно 2 балла в час. Каков прогнозируемый результат?",
            questionKk: "Бастапқы SAT ұпайыңыз 1080. 40 сағат мақсатты дайындықтан кейін сағатына шамамен 2 ұпай аласыз. Болжамды ұпай қандай?",
            answer: "1080 + (40 × 2) = 1080 + 80 = 1160",
            hint: "Use the projected score formula: Baseline + (Hours × Points per Hour).",
            hintRu: "Используйте формулу: Базовый балл + (Часы × Баллов в час).",
            hintKk: "Формуланы қолданыңыз: Бастапқы ұпай + (Сағаттар × Сағатына ұпай).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have 60 study hours before the SAT. Your error analysis shows: Heart of Algebra 40% error rate (high yield), Problem Solving & Data 25% error rate (medium yield), Passport to Advanced Math 35% error rate (high yield). Propose how to split your 60 hours and justify your allocation.",
            questionRu: "У вас 60 часов до SAT. Анализ ошибок показывает: Heart of Algebra 40% ошибок (высокий вес), Problem Solving & Data 25% (средний вес), Passport to Advanced Math 35% (высокий вес). Распределите 60 часов и обоснуйте.",
            questionKk: "SAT-қа дейін 60 сағатыңыз бар. Қателер талдауы: Heart of Algebra 40% қате (жоғары салмақ), Problem Solving & Data 25% (орташа салмақ), Passport to Advanced Math 35% (жоғары салмақ). 60 сағатты қалай бөлетініңізді ұсыныңыз және негіздеңіз.",
            answer: "Heart of Algebra: 25 hours (highest error rate + high yield), Passport to Advanced Math: 20 hours (second highest error + high yield), Problem Solving & Data: 10 hours (lower error rate + medium yield), Full practice tests: 5 hours. Justification: prioritize categories with both high error rates and high question counts for maximum point recovery.",
            hint: "Allocate more hours to categories with high error rates AND high question counts on the test.",
            hintRu: "Выделите больше часов категориям с высоким процентом ошибок И большим числом вопросов.",
            hintKk: "Қателік деңгейі жоғары ЖӘНЕ тесттегі сұрақтар саны көп санаттарға көбірек сағат бөліңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Super-scoring",
        titleRu: "Суперскоринг",
        titleKk: "Суперскоринг",
        content: "Super-scoring means colleges take your highest section scores across multiple SAT or ACT sittings and combine them into one composite. For example, if you scored higher in Math on your March SAT and higher in Evidence-Based Reading on your June SAT, a super-scoring school uses both highs. Over 90% of U.S. colleges super-score the SAT, making retaking the test a low-risk, high-reward strategy.",
        contentRu: "Суперскоринг означает, что колледжи берут ваши лучшие баллы по разделам из нескольких попыток SAT или ACT и объединяют в один композитный балл. Например, если математика была лучше в марте, а чтение — в июне, суперскоринговый вуз использует оба лучших балла. Более 90% вузов США суперскорят SAT, что делает пересдачу стратегией с низким риском и высокой отдачей.",
        contentKk: "Суперскоринг — колледждер бірнеше SAT немесе ACT тапсырудан ең жоғары бөлім ұпайларыңызды алып, бір композиттік ұпайға біріктіреді. Мысалы, наурыздағы SAT-та математика жоғары, маусымдағыда оқу жоғары болса, суперскоринг жасайтын оқу орны екеуін де қолданады. АҚШ колледждерінің 90%-дан астамы SAT-ты суперскорлайды, бұл қайта тапсыруды тәуекелі аз, пайдасы жоғары стратегияға айналдырады.",
        keyFormulas: [
          {
            formula: "Super-score = Highest Math (all sittings) + Highest EBRW (all sittings)",
            description: "How colleges calculate your SAT super-score from multiple test dates",
            descriptionRu: "Как колледжи считают ваш суперскор SAT из нескольких попыток",
            descriptionKk: "Колледждер бірнеше тапсырудан SAT суперскорыңызды қалай есептейді"
          }
        ],
        keyTerms: [
          {
            term: "Super-scoring",
            termRu: "Суперскоринг",
            termKk: "Суперскоринг",
            definition: "A college's practice of combining your highest section scores across multiple SAT/ACT sittings into one composite score.",
            definitionRu: "Практика вузов объединять ваши лучшие баллы по разделам из нескольких попыток SAT/ACT в один итог.",
            definitionKk: "Колледждердің бірнеше SAT/ACT тапсырудан ең жоғары бөлім ұпайларын бір композитке біріктіру тәжірибесі.",
          },
          {
            term: "Sitting",
            termRu: "Попытка (Sitting)",
            termKk: "Тапсыру (Sitting)",
            definition: "A single administration of the SAT or ACT on one test date.",
            definitionRu: "Одна отдельная сдача SAT или ACT в конкретную дату.",
            definitionKk: "Белгілі бір күнде SAT немесе ACT-ті бір рет тапсыру.",
          },
          {
            term: "Score Choice",
            termRu: "Score Choice",
            termKk: "Score Choice",
            definition: "College Board option letting students choose which SAT test dates to send to colleges.",
            definitionRu: "Опция College Board: выбрать, какие даты SAT отправлять в вузы.",
            definitionKk: "College Board мүмкіндігі: қай SAT күндерін колледждерге жіберетініңізді таңдау.",
          },
        ],
        solvedExamples: [
          {
            question: "March SAT: Math 620, EBRW 580. June SAT: Math 590, EBRW 640. What is the super-score?",
            questionRu: "Мартовский SAT: Математика 620, EBRW 580. Июньский SAT: Математика 590, EBRW 640. Каков суперскор?",
            questionKk: "Наурыз SAT: Математика 620, EBRW 580. Маусым SAT: Математика 590, EBRW 640. Суперскор қандай?",
            steps: [
              { en: "Highest Math = 620 (March). Highest EBRW = 640 (June).", ru: "Лучшая математика = 620 (март). Лучший EBRW = 640 (июнь).", kk: "Ең жоғары математика = 620 (наурыз). Ең жоғары EBRW = 640 (маусым)." },
              { en: "Super-score = 620 + 640 = 1260.", ru: "Суперскор = 620 + 640 = 1260.", kk: "Суперскор = 620 + 640 = 1260." }
            ],
            answer: "The super-score is 1260, compared to 1200 (March) or 1230 (June) individually."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Test 1: Math 550, EBRW 600. Test 2: Math 580, EBRW 570. What is the super-score?",
            questionRu: "Тест 1: Математика 550, EBRW 600. Тест 2: Математика 580, EBRW 570. Каков суперскор?",
            questionKk: "Тест 1: Математика 550, EBRW 600. Тест 2: Математика 580, EBRW 570. Суперскор қандай?",
            answer: "580 + 600 = 1180",
            hint: "Take the highest Math from either test and the highest EBRW from either test.",
            hintRu: "Возьмите лучший балл математики и лучший EBRW из обоих тестов.",
            hintKk: "Екі тесттен ең жоғары математика мен EBRW ұпайларын алыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student took the SAT three times: (Math 520, EBRW 560), (Math 580, EBRW 540), (Math 560, EBRW 610). What is the super-score, and how much higher is it than the best single sitting?",
            questionRu: "Студент сдавал SAT трижды: (Мат. 520, EBRW 560), (Мат. 580, EBRW 540), (Мат. 560, EBRW 610). Каков суперскор и насколько он выше лучшей одной попытки?",
            questionKk: "Оқушы SAT-ты үш рет тапсырды: (Мат. 520, EBRW 560), (Мат. 580, EBRW 540), (Мат. 560, EBRW 610). Суперскор қандай және ол ең жақсы жалғыз тапсырудан қаншаға жоғары?",
            answer: "Super-score = 580 + 610 = 1190. Best single sitting = 560 + 610 = 1170. Difference = 20 points.",
            hint: "Find the max Math and max EBRW across all sittings, then compare to the highest total from one sitting.",
            hintRu: "Найдите максимум математики и EBRW по всем попыткам, сравните с лучшей суммой одной попытки.",
            hintKk: "Барлық тапсырулардан ең жоғары математика мен EBRW-ді табыңыз, бір тапсырудың ең жоғары қосындысымен салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student's target super-score is 1400. After two sittings they have: (Math 670, EBRW 680) and (Math 710, EBRW 650). Do they need to retake? If so, which section should they focus on and what minimum score is needed?",
            questionRu: "Целевой суперскор студента — 1400. После двух попыток: (Мат. 670, EBRW 680) и (Мат. 710, EBRW 650). Нужна ли пересдача? Если да, на какой раздел сосредоточиться и какой минимальный балл нужен?",
            questionKk: "Оқушының мақсатты суперскоры 1400. Екі тапсырудан кейін: (Мат. 670, EBRW 680) және (Мат. 710, EBRW 650). Қайта тапсыру керек пе? Олай болса, қай бөлімге назар аудару керек және қандай ең аз ұпай қажет?",
            answer: "Current super-score = 710 + 680 = 1390, which is 10 points short. They should focus on EBRW since Math is already strong at 710. They need EBRW ≥ 690 on the next sitting to reach 710 + 690 = 1400.",
            hint: "Calculate current super-score, find the gap, and target the section with more room for improvement.",
            hintRu: "Рассчитайте текущий суперскор, найдите разницу и нацельтесь на раздел с большим потенциалом роста.",
            hintKk: "Ағымдағы суперскорды есептеңіз, айырмашылықты табыңыз және жақсару әлеуеті жоғары бөлімге бағытталыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "ACT vs SAT",
        titleRu: "ACT против SAT",
        titleKk: "ACT пен SAT салыстыру",
        content: "The ACT has four sections (English, Math, Reading, Science) scored 1-36 each, composited as their average. The SAT has two sections (Math and Evidence-Based Reading & Writing) scored 200-800 each, totaling 400-1600. The ACT is faster-paced (less time per question), includes a Science reasoning section, and allows a calculator on all math. The SAT has a no-calculator math section and emphasizes data interpretation. Choose the test that fits your strengths.",
        contentRu: "ACT состоит из четырёх разделов (English, Math, Reading, Science) с оценкой 1-36, композит — их среднее. SAT имеет два раздела (Math и EBRW) с оценкой 200-800, итого 400-1600. ACT быстрее (меньше времени на вопрос), включает раздел Science и разрешает калькулятор на всей математике. SAT имеет раздел без калькулятора и делает упор на интерпретацию данных. Выберите тест, соответствующий вашим сильным сторонам.",
        contentKk: "ACT төрт бөлімнен тұрады (English, Math, Reading, Science), әрқайсысы 1-36 ұпай, композит — олардың орташасы. SAT екі бөлімнен тұрады (Math және EBRW), әрқайсысы 200-800 ұпай, жалпы 400-1600. ACT жылдамырақ (сұраққа уақыт аз), Science бөлімі бар және барлық математикада калькулятор рұқсат. SAT-та калькуляторсыз математика бөлімі бар және деректерді түсіндіруге баса назар аударады. Күшті жақтарыңызға сай тестті таңдаңыз.",
        keyFormulas: [
          {
            formula: "ACT Composite = (English + Math + Reading + Science) ÷ 4",
            description: "ACT composite score is the average of the four section scores",
            descriptionRu: "Композитный балл ACT — среднее четырёх разделов",
            descriptionKk: "ACT композиттік ұпайы — төрт бөлім ұпайларының орташасы"
          },
          {
            formula: "SAT Total = Math (200–800) + EBRW (200–800)",
            description: "SAT total score is the sum of the two section scores",
            descriptionRu: "Общий балл SAT — сумма двух разделов",
            descriptionKk: "SAT жалпы ұпайы — екі бөлім ұпайларының қосындысы"
          }
        ],
        keyTerms: [
          {
            term: "Composite Score",
            termRu: "Композитный балл",
            termKk: "Композиттік ұпай",
            definition: "A single overall score derived by combining section scores — average for ACT, sum for SAT.",
            definitionRu: "Единый итоговый балл: среднее разделов (ACT) или сумма (SAT).",
            definitionKk: "Бөлімдерді біріктіретін жалпы ұпай: ACT-те орташа, SAT-та қосынды.",
          },
          {
            term: "Concordance Table",
            termRu: "Таблица соответствия",
            termKk: "Сәйкестік кестесі",
            definition: "Official lookup table that converts between ACT composite and SAT total scores.",
            definitionRu: "Официальная таблица перевода баллов между ACT и SAT.",
            definitionKk: "ACT пен SAT ұпайларын түрлендіретін ресми кесте.",
          },
          {
            term: "No-calculator section",
            termRu: "Раздел без калькулятора",
            termKk: "Калькуляторсыз бөлім",
            definition: "25-minute SAT Math sub-section where calculators are prohibited — the ACT has no such restriction.",
            definitionRu: "25-минутный подраздел SAT Math без калькулятора — у ACT такого ограничения нет.",
            definitionKk: "Калькуляторға тыйым салынған 25 минуттық SAT Math бөлімі — ACT-те мұндай шектеу жоқ.",
          },
        ],
        solvedExamples: [
          {
            question: "A student scores ACT: English 28, Math 32, Reading 26, Science 30. What is the composite? What approximate SAT equivalent is this?",
            questionRu: "Студент получил ACT: English 28, Math 32, Reading 26, Science 30. Каков композит? Какой примерный эквивалент SAT?",
            questionKk: "Оқушы ACT нәтижелері: English 28, Math 32, Reading 26, Science 30. Композит қандай? SAT баламасы шамамен қандай?",
            steps: [
              { en: "Composite = (28 + 32 + 26 + 30) ÷ 4 = 116 ÷ 4 = 29.", ru: "Композит = (28 + 32 + 26 + 30) ÷ 4 = 116 ÷ 4 = 29.", kk: "Композит = (28 + 32 + 26 + 30) ÷ 4 = 116 ÷ 4 = 29." },
              { en: "Using concordance tables, ACT 29 ≈ SAT 1340 (approximate).", ru: "По таблице соответствия ACT 29 ≈ SAT 1340 (приблизительно).", kk: "Сәйкестік кестесі бойынша ACT 29 ≈ SAT 1340 (шамамен)." }
            ],
            answer: "ACT composite is 29, approximately equivalent to SAT 1340."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A student scores ACT: English 24, Math 26, Reading 22, Science 24. What is the composite score?",
            questionRu: "Студент получил ACT: English 24, Math 26, Reading 22, Science 24. Каков композитный балл?",
            questionKk: "Оқушы ACT нәтижелері: English 24, Math 26, Reading 22, Science 24. Композиттік ұпай қандай?",
            answer: "(24 + 26 + 22 + 24) ÷ 4 = 96 ÷ 4 = 24",
            hint: "Add all four scores and divide by 4.",
            hintRu: "Сложите все четыре балла и разделите на 4.",
            hintKk: "Төрт ұпайды қосып, 4-ке бөліңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student excels at science reasoning but struggles with no-calculator math. Should they take the ACT or SAT? Explain.",
            questionRu: "Студент силён в научном рассуждении, но слаб в математике без калькулятора. ACT или SAT? Объясните.",
            questionKk: "Оқушы ғылыми пайымдауда күшті, бірақ калькуляторсыз математикада әлсіз. ACT немесе SAT? Түсіндіріңіз.",
            answer: "The ACT is likely better. It has a Science section where the student can earn strong scores, and all ACT Math allows calculator use, avoiding the no-calculator weakness. The SAT's no-calculator section would hurt their score.",
            hint: "Consider which test format plays to the student's strengths and avoids their weaknesses.",
            hintRu: "Подумайте, какой формат теста использует сильные стороны студента и избегает слабых.",
            hintKk: "Оқушының күшті жақтарын пайдаланатын және әлсіз жақтарынан қашатын тест форматын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student took both tests: SAT 1280 and ACT composite 27 (≈ SAT 1280 equivalent). However, their ACT breakdown is English 32, Math 22, Reading 28, Science 26. Advise whether they should retake one test and which, considering super-scoring potential.",
            questionRu: "Студент сдал оба теста: SAT 1280 и ACT композит 27 (≈ SAT 1280). Но разбивка ACT: English 32, Math 22, Reading 28, Science 26. Посоветуйте, стоит ли пересдать один тест и какой, учитывая потенциал суперскоринга.",
            questionKk: "Оқушы екі тестті де тапсырды: SAT 1280 және ACT композит 27 (≈ SAT 1280). Бірақ ACT бөлінісі: English 32, Math 22, Reading 28, Science 26. Суперскоринг әлеуетін ескере отырып, бір тестті қайта тапсыру керек пе және қайсысын қайта тапсыру керек?",
            answer: "Retake the ACT. The Math score of 22 is significantly dragging down the composite. If Math improves to 28+ on a retake, the composite rises to (32+28+28+26)÷4 = 28.5 → 29, equivalent to ~SAT 1340. The SAT super-score potential is less clear without section breakdowns. Also, the strong English 32 is already banked for ACT super-scoring.",
            hint: "Look at which section has the biggest gap between actual and potential performance.",
            hintRu: "Найдите раздел с наибольшим разрывом между фактическим и потенциальным результатом.",
            hintKk: "Нақты және ықтимал нәтиже арасындағы ең үлкен алшақтығы бар бөлімді табыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "IELTS Academic vs General",
        titleRu: "IELTS Academic и General",
        titleKk: "IELTS Academic пен General",
        content: "IELTS has two versions: Academic (required for university admissions and professional registration) and General Training (for immigration and work visas). Both share the same Listening and Speaking tests, but differ in Reading and Writing. Academic Reading uses longer, complex academic texts; General Training Reading uses everyday texts like advertisements and workplace documents. Academic Writing Task 1 requires describing graphs or charts; General Training Task 1 is letter writing.",
        contentRu: "IELTS имеет две версии: Academic (для поступления в вузы и профессиональной регистрации) и General Training (для иммиграции и рабочих виз). Listening и Speaking одинаковы, но Reading и Writing различаются. Academic Reading использует длинные академические тексты; General Training — повседневные тексты (объявления, рабочие документы). Academic Writing Task 1 — описание графиков; General Training Task 1 — написание письма.",
        contentKk: "IELTS екі нұсқада бар: Academic (университетке түсу және кәсіби тіркеу үшін) және General Training (иммиграция және жұмыс визасы үшін). Listening және Speaking бірдей, бірақ Reading және Writing ерекшеленеді. Academic Reading ұзын академиялық мәтіндерді қолданады; General Training — күнделікті мәтіндерді (жарнамалар, жұмыс құжаттары). Academic Writing Task 1 — график сипаттау; General Training Task 1 — хат жазу.",
        keyFormulas: [
          {
            formula: "IELTS Overall Band = (Listening + Reading + Writing + Speaking) ÷ 4, rounded to nearest 0.5",
            description: "IELTS overall band score calculation with standard rounding",
            descriptionRu: "Расчёт общего балла IELTS со стандартным округлением",
            descriptionKk: "Стандартты дөңгелектеумен IELTS жалпы балл есептеу"
          }
        ],
        solvedExamples: [
          {
            question: "A student applying to a UK university needs IELTS Academic. Their scores: Listening 7.0, Reading 6.5, Writing 6.0, Speaking 7.0. What is the overall band? Most UK universities require minimum 6.5 overall with no band below 6.0 — do they qualify?",
            questionRu: "Студент, поступающий в вуз Великобритании, сдал IELTS Academic: Listening 7.0, Reading 6.5, Writing 6.0, Speaking 7.0. Каков общий балл? Большинство вузов требуют минимум 6.5 общий и не ниже 6.0 по каждому разделу — проходит ли студент?",
            questionKk: "Ұлыбритания университетіне түсетін оқушы IELTS Academic тапсырды: Listening 7.0, Reading 6.5, Writing 6.0, Speaking 7.0. Жалпы балл қандай? Көптеген университеттер жалпы 6.5 және әр бөлімде 6.0-ден кем емес талап етеді — оқушы өте ме?",
            steps: [
              { en: "Overall = (7.0 + 6.5 + 6.0 + 7.0) ÷ 4 = 26.5 ÷ 4 = 6.625, rounded to 6.5.", ru: "Общий = (7.0 + 6.5 + 6.0 + 7.0) ÷ 4 = 26.5 ÷ 4 = 6.625, округляется до 6.5.", kk: "Жалпы = (7.0 + 6.5 + 6.0 + 7.0) ÷ 4 = 26.5 ÷ 4 = 6.625, 6.5-ке дөңгелектенеді." },
              { en: "Overall band is 6.5 and no section is below 6.0, so they meet the minimum requirement.", ru: "Общий балл 6.5 и ни один раздел не ниже 6.0 — минимальное требование выполнено.", kk: "Жалпы балл 6.5 және ешбір бөлім 6.0-ден төмен емес — ең аз талап орындалды." }
            ],
            answer: "Overall band is 6.5. Yes, they qualify — overall is 6.5 and all sections are at least 6.0."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "You are applying to a Canadian university for an undergraduate degree. Should you take IELTS Academic or IELTS General Training?",
            questionRu: "Вы поступаете в канадский университет на бакалавриат. Какой IELTS сдавать — Academic или General Training?",
            questionKk: "Канада университетіне бакалавриатқа түсесіз. IELTS Academic пе, әлде General Training тапсыру керек пе?",
            answer: "IELTS Academic. University admissions always require the Academic version, not General Training.",
            hint: "General Training is for immigration and work, not university admission.",
            hintRu: "General Training — для иммиграции и работы, не для поступления.",
            hintKk: "General Training — иммиграция және жұмыс үшін, университетке түсу үшін емес.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "IELTS scores: Listening 7.5, Reading 7.0, Writing 5.5, Speaking 6.5. The university requires 6.5 overall with no band below 6.0. Does the student qualify?",
            questionRu: "Баллы IELTS: Listening 7.5, Reading 7.0, Writing 5.5, Speaking 6.5. Университет требует 6.5 общий, не ниже 6.0 по разделам. Проходит ли студент?",
            questionKk: "IELTS ұпайлары: Listening 7.5, Reading 7.0, Writing 5.5, Speaking 6.5. Университет жалпы 6.5 және бөлімде 6.0-ден кем емес талап етеді. Оқушы өте ме?",
            answer: "Overall = (7.5 + 7.0 + 5.5 + 6.5) ÷ 4 = 26.5 ÷ 4 = 6.625 → 6.5. The overall is 6.5, but Writing is 5.5 which is below 6.0. The student does NOT qualify because of the Writing band.",
            hint: "Check both the overall score and each individual band against the requirements.",
            hintRu: "Проверьте и общий балл, и каждый раздел по отдельности.",
            hintKk: "Жалпы ұпайды да, әр бөлімді де жеке тексеріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student needs IELTS Academic 7.0 overall with no band below 6.5. Current scores: Listening 7.5, Reading 6.5, Writing 6.0, Speaking 7.0. What minimum Writing score is needed on retake, assuming other scores stay the same? Note: IELTS does not allow retaking individual sections.",
            questionRu: "Студенту нужен IELTS Academic 7.0 общий, не ниже 6.5 по разделам. Текущие баллы: Listening 7.5, Reading 6.5, Writing 6.0, Speaking 7.0. Какой минимальный балл Writing нужен при пересдаче, если остальные баллы сохранятся? Примечание: IELTS не позволяет пересдавать отдельные разделы.",
            questionKk: "Оқушыға IELTS Academic жалпы 7.0 және бөлімде 6.5-тен кем емес қажет. Ағымдағы ұпайлар: Listening 7.5, Reading 6.5, Writing 6.0, Speaking 7.0. Басқа ұпайлар сақталса, қайта тапсыруда Writing ең аз қанша болу керек? Ескерту: IELTS жеке бөлімдерді қайта тапсыруға рұқсат бермейді.",
            answer: "Need overall ≥ 7.0 so sum must be ≥ 28 (since 28÷4=7.0). Current non-Writing sum = 7.5+6.5+7.0 = 21. Need Writing ≥ 28−21 = 7.0. Also need Writing ≥ 6.5 for the band minimum. So Writing must be at least 7.0. But since IELTS requires retaking ALL sections, there is a risk other scores might drop — aim for Writing 7.0+ while maintaining other scores.",
            hint: "Set up an inequality: (7.5 + 6.5 + W + 7.0) ÷ 4 ≥ 7.0 and solve for W. Don't forget the per-band minimum.",
            hintRu: "Составьте неравенство: (7.5 + 6.5 + W + 7.0) ÷ 4 ≥ 7.0, решите для W. Не забудьте минимум по разделам.",
            hintKk: "Теңсіздік құрыңыз: (7.5 + 6.5 + W + 7.0) ÷ 4 ≥ 7.0, W үшін шешіңіз. Бөлім минимумын ұмытпаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "TOEFL Targets",
        titleRu: "Целевые баллы TOEFL",
        titleKk: "TOEFL мақсатты ұпайлар",
        content: "TOEFL iBT scores range from 0-120 (four sections of 0-30 each: Reading, Listening, Speaking, Writing). Top universities typically require 100+ total, while mid-tier schools accept 80-90. Many programs also have section minimums (commonly 20+ per section). Setting section-level targets based on your university shortlist is essential because a total of 100 with a 15 in Speaking may still disqualify you at schools requiring 22+ per section.",
        contentRu: "TOEFL iBT оценивается 0-120 (четыре раздела по 0-30: Reading, Listening, Speaking, Writing). Топовые вузы обычно требуют 100+, средние — 80-90. Многие программы имеют минимум по разделам (обычно 20+ за раздел). Установка целей по разделам на основе списка вузов необходима, потому что 100 баллов с 15 за Speaking может не подойти вузам, требующим 22+ по каждому разделу.",
        contentKk: "TOEFL iBT ұпайлары 0-120 (төрт бөлім, әрқайсысы 0-30: Reading, Listening, Speaking, Writing). Үздік университеттер әдетте 100+ талап етеді, орта деңгей — 80-90. Көптеген бағдарламаларда бөлім минимумдары бар (әдетте бөлімге 20+). Университеттер тізіміне негізделген бөлім деңгейіндегі мақсаттар қою маңызды, өйткені Speaking-те 15-пен жалпы 100 ұпай бөлімге 22+ талап ететін мектептерде жарамсыз болуы мүмкін.",
        keyFormulas: [
          {
            formula: "TOEFL Total = Reading (0–30) + Listening (0–30) + Speaking (0–30) + Writing (0–30)",
            description: "TOEFL iBT total score ranges from 0 to 120",
            descriptionRu: "Общий балл TOEFL iBT от 0 до 120",
            descriptionKk: "TOEFL iBT жалпы ұпайы 0-ден 120-ға дейін"
          }
        ],
        solvedExamples: [
          {
            question: "A student targets a university requiring TOEFL 100+ with 22+ per section. Their practice scores: Reading 28, Listening 25, Speaking 19, Writing 24. What is their total, and do they meet the requirement?",
            questionRu: "Студент нацелен на вуз, требующий TOEFL 100+ и 22+ по разделам. Пробные баллы: Reading 28, Listening 25, Speaking 19, Writing 24. Каков общий балл и проходят ли они?",
            questionKk: "Оқушы TOEFL 100+ және бөлімде 22+ талап ететін университетті мақсат еткен. Пробный ұпайлар: Reading 28, Listening 25, Speaking 19, Writing 24. Жалпы ұпай қандай және олар талапқа сай ма?",
            steps: [
              { en: "Total = 28 + 25 + 19 + 24 = 96. This is below 100.", ru: "Итого = 28 + 25 + 19 + 24 = 96. Это ниже 100.", kk: "Жалпы = 28 + 25 + 19 + 24 = 96. Бұл 100-ден төмен." },
              { en: "Speaking is 19, which is below the 22 minimum. They need to raise Speaking by at least 3 points and gain 4+ more total points.", ru: "Speaking 19 — ниже минимума 22. Нужно повысить Speaking минимум на 3 балла и набрать ещё 4+ баллов общих.", kk: "Speaking 19 — 22 минимумнан төмен. Speaking-ті кемінде 3 ұпайға көтеріп, жалпы тағы 4+ ұпай жинау керек." }
            ],
            answer: "Total is 96 (below 100), and Speaking 19 is below the 22-per-section minimum. They do not meet the requirement."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "TOEFL scores: Reading 26, Listening 24, Speaking 22, Writing 23. What is the total score?",
            questionRu: "Баллы TOEFL: Reading 26, Listening 24, Speaking 22, Writing 23. Каков общий балл?",
            questionKk: "TOEFL ұпайлары: Reading 26, Listening 24, Speaking 22, Writing 23. Жалпы ұпай қандай?",
            answer: "26 + 24 + 22 + 23 = 95",
            hint: "Add all four section scores together.",
            hintRu: "Сложите все четыре балла.",
            hintKk: "Төрт бөлім ұпайын қосыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A university requires TOEFL 90+ with no section below 20. A student scores: Reading 25, Listening 22, Speaking 18, Writing 26. Do they qualify? If not, what needs to change?",
            questionRu: "Университет требует TOEFL 90+ и не ниже 20 по разделам. Студент набрал: Reading 25, Listening 22, Speaking 18, Writing 26. Проходит ли? Если нет, что нужно изменить?",
            questionKk: "Университет TOEFL 90+ және бөлімде 20-дан кем емес талап етеді. Оқушы ұпайлары: Reading 25, Listening 22, Speaking 18, Writing 26. Өте ме? Олай болмаса, нені өзгерту керек?",
            answer: "Total = 25 + 22 + 18 + 26 = 91, which meets the 90+ requirement. However, Speaking is 18, below the 20 minimum. The student must raise Speaking to at least 20.",
            hint: "Check total score first, then check each section against the minimum.",
            hintRu: "Сначала проверьте общий балл, затем каждый раздел по минимуму.",
            hintKk: "Алдымен жалпы ұпайды, содан кейін әр бөлімді минимуммен салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student is applying to three universities with these TOEFL requirements: University A (100+, each ≥ 25), University B (90+, each ≥ 20), University C (80+, no section minimum). Their scores: Reading 27, Listening 23, Speaking 21, Writing 26. For which universities do they qualify, and what score improvements would they need for the others?",
            questionRu: "Студент подаёт в три вуза: A (100+, каждый ≥ 25), B (90+, каждый ≥ 20), C (80+, без минимума). Баллы: Reading 27, Listening 23, Speaking 21, Writing 26. В какие вузы проходит и что нужно для остальных?",
            questionKk: "Оқушы үш университетке түседі: A (100+, әрқайсысы ≥ 25), B (90+, әрқайсысы ≥ 20), C (80+, бөлім минимумы жоқ). Ұпайлар: Reading 27, Listening 23, Speaking 21, Writing 26. Қайсысына өтеді және қалғандары үшін не қажет?",
            answer: "Total = 97. University C (80+, no minimum): qualifies (97 > 80). University B (90+, each ≥ 20): qualifies (97 > 90, all sections ≥ 20). University A (100+, each ≥ 25): does not qualify — total is 97 (need 100+), Listening is 23 (need 25+), Speaking is 21 (need 25+). Needs +3 total points, +2 in Listening, and +4 in Speaking.",
            hint: "Check each university's requirements separately — both total and per-section minimums.",
            hintRu: "Проверьте требования каждого вуза отдельно — общий балл и минимумы по разделам.",
            hintKk: "Әр университеттің талаптарын жеке тексеріңіз — жалпы ұпай және бөлім минимумдары.",
            xp: 20
          }
        ]
      },
      {
        title: "Subject SAT Math",
        titleRu: "Предметный SAT: Математика",
        titleKk: "Пәндік SAT: Математика",
        content: "SAT Subject Tests in Math come in two levels: Math Level 1 (covers algebra, geometry, basic trigonometry, and statistics) and Math Level 2 (adds precalculus, advanced trigonometry, and more complex functions). Competitive STEM programs often expect Math Level 2 scores of 750+. Each test has 50 multiple-choice questions in 60 minutes, scored 200-800. Unlike the regular SAT, there is a 0.25-point penalty for wrong answers, so strategic guessing (eliminate at least one option) is critical.",
        contentRu: "Предметные тесты SAT по математике имеют два уровня: Math Level 1 (алгебра, геометрия, базовая тригонометрия, статистика) и Math Level 2 (добавляется предварительное исчисление, продвинутая тригонометрия, сложные функции). Конкурентные STEM-программы ожидают 750+ по Math Level 2. Каждый тест — 50 вопросов за 60 минут, оценка 200-800. В отличие от обычного SAT, есть штраф 0.25 балла за неправильный ответ, поэтому стратегическое угадывание (исключите хотя бы один вариант) критически важно.",
        contentKk: "SAT пәндік тесттерінің математика бойынша екі деңгейі бар: Math Level 1 (алгебра, геометрия, негізгі тригонометрия, статистика) және Math Level 2 (алдын ала есептеу, күрделі тригонометрия, күрделі функциялар қосылады). Бәсекеге қабілетті STEM бағдарламалар Math Level 2 бойынша 750+ күтеді. Әр тестте 60 минутта 50 сұрақ, ұпай 200-800. Кәдімгі SAT-тан айырмашылығы, қате жауап үшін 0.25 ұпай айыппұл бар, сондықтан стратегиялық болжау (кемінде бір нұсқаны алып тастау) өте маңызды.",
        keyFormulas: [
          {
            formula: "Raw Score = Correct − (Wrong × 0.25); Omitted = 0 points",
            description: "SAT Subject Test scoring with wrong-answer penalty",
            descriptionRu: "Подсчёт предметного SAT со штрафом за неправильные ответы",
            descriptionKk: "Қате жауап айыппұлымен пәндік SAT ұпай есептеу"
          },
          {
            formula: "Expected value of guessing = (1/remaining choices) × 1 − ((remaining−1)/remaining) × 0.25",
            description: "When to guess: if you can eliminate at least one answer, guessing has positive expected value",
            descriptionRu: "Когда угадывать: если исключили хотя бы один вариант, угадывание имеет положительное мат. ожидание",
            descriptionKk: "Қашан болжау керек: кемінде бір нұсқаны алып тастасаңыз, болжаудың оң мат. күтімі бар"
          }
        ],
        solvedExamples: [
          {
            question: "On the SAT Math Level 2, a student answers 40 questions correctly, 6 incorrectly, and omits 4. What is the raw score? If a raw score of 43+ typically maps to 790-800, what scaled score range are they in?",
            questionRu: "На SAT Math Level 2 студент ответил правильно на 40, неправильно на 6, пропустил 4. Каков сырой балл? Если 43+ сырых — это обычно 790-800, в каком диапазоне шкальный балл?",
            questionKk: "SAT Math Level 2-де оқушы 40 сұраққа дұрыс, 6-уына қате жауап берді, 4-ін өткізіп жіберді. Шикі ұпай қандай? Егер 43+ шикі ұпай әдетте 790-800-ге сәйкес келсе, олар қай диапазонда?",
            steps: [
              { en: "Raw = 40 − (6 × 0.25) = 40 − 1.5 = 38.5.", ru: "Сырой = 40 − (6 × 0.25) = 40 − 1.5 = 38.5.", kk: "Шикі = 40 − (6 × 0.25) = 40 − 1.5 = 38.5." },
              { en: "38.5 is below 43, so the scaled score is below 790 — typically around 750-770 range.", ru: "38.5 ниже 43, поэтому шкальный балл ниже 790 — обычно в диапазоне 750-770.", kk: "38.5 — 43-тен төмен, сондықтан шкалалық ұпай 790-нан төмен — әдетте 750-770 аралығында." }
            ],
            answer: "Raw score is 38.5, corresponding to approximately 750-770 scaled score."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "A student answers 35 correctly and 10 incorrectly on a 50-question SAT Subject Test (5 omitted). What is the raw score?",
            questionRu: "Студент ответил правильно на 35 и неправильно на 10 из 50 вопросов (5 пропущено). Каков сырой балл?",
            questionKk: "Оқушы 50 сұрақтық SAT пәндік тестінде 35 дұрыс, 10 қате жауап берді (5 өткізіп жіберді). Шикі ұпай қандай?",
            answer: "35 − (10 × 0.25) = 35 − 2.5 = 32.5",
            hint: "Subtract the penalty (wrong × 0.25) from the number of correct answers.",
            hintRu: "Вычтите штраф (неправильные × 0.25) из правильных ответов.",
            hintKk: "Дұрыс жауаптардан айыппұлды (қате × 0.25) алып тастаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have eliminated 2 out of 5 answer choices on a SAT Subject Test question. Is it worth guessing from the remaining 3? Calculate the expected value.",
            questionRu: "Вы исключили 2 из 5 вариантов ответа. Стоит ли угадывать из оставшихся 3? Рассчитайте математическое ожидание.",
            questionKk: "SAT пәндік тестінде 5 нұсқаның 2-сін алып тастадыңыз. Қалған 3-тен болжау тиімді ме? Мат. күтімді есептеңіз.",
            answer: "EV = (1/3)(1) − (2/3)(0.25) = 0.333 − 0.167 = +0.167. Yes, it is worth guessing — the expected value is positive.",
            hint: "Expected value = probability of correct × points gained − probability of wrong × penalty.",
            hintRu: "Мат. ожидание = вероятность правильного × очки − вероятность неправильного × штраф.",
            hintKk: "Мат. күтім = дұрыс ықтималдығы × ұпай − қате ықтималдығы × айыппұл.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student needs a scaled score of 780+ on Math Level 2 (raw score ~42 needed). They currently score: 38 correct, 8 wrong, 4 omitted (raw = 36). Devise a strategy to gain 6+ raw points. How many additional correct answers and how many fewer wrong answers are needed?",
            questionRu: "Студенту нужен 780+ по Math Level 2 (сырой ~42). Текущий результат: 38 правильных, 8 неправильных, 4 пропущенных (сырой = 36). Разработайте стратегию набора 6+ сырых баллов. Сколько дополнительных правильных и на сколько меньше неправильных нужно?",
            questionKk: "Оқушыға Math Level 2-де 780+ қажет (шикі ~42 қажет). Ағымдағы нәтиже: 38 дұрыс, 8 қате, 4 өткізілген (шикі = 36). 6+ шикі ұпай жинау стратегиясын жасаңыз. Қанша қосымша дұрыс жауап және қанша аз қате қажет?",
            answer: "Current raw = 38 − (8×0.25) = 36. Target = 42. Need +6 points. Strategy: convert 5 wrongs to correct (+5 points from gaining answers, +1.25 from removing penalties = +6.25). This means going from 38 correct/8 wrong to 43 correct/3 wrong. Focus study on the 8 question types you got wrong and the 4 omitted topics.",
            hint: "Each wrong-to-correct conversion gains 1.25 raw points (1 point for correct + 0.25 saved penalty).",
            hintRu: "Каждая конверсия неправильного в правильный даёт 1.25 сырых (1 за правильный + 0.25 сэкономленного штрафа).",
            hintKk: "Әр қатені дұрысқа айналдыру 1.25 шикі ұпай береді (1 дұрыс ұпай + 0.25 сақталған айыппұл).",
            xp: 20
          }
        ]
      },
      {
        title: "Subject SAT Science",
        titleRu: "Предметный SAT: Естественные науки",
        titleKk: "Пәндік SAT: Жаратылыстану",
        content: "SAT Subject Tests in Science include Biology (Ecological or Molecular), Chemistry, and Physics. Each has 80-85 questions in 60 minutes, scored 200-800, with the same 0.25 wrong-answer penalty. Biology E focuses on ecology and evolution; Biology M emphasizes biochemistry and cell biology. Chemistry covers stoichiometry, thermodynamics, and lab skills. Physics covers mechanics, electricity, waves, and modern physics. Choose based on your strongest AP/IB coursework.",
        contentRu: "Предметные тесты SAT по естественным наукам включают биологию (экологическую или молекулярную), химию и физику. Каждый содержит 80-85 вопросов за 60 минут, оценка 200-800, с тем же штрафом 0.25. Биология E — экология и эволюция; Биология M — биохимия и клеточная биология. Химия — стехиометрия, термодинамика, лабораторные навыки. Физика — механика, электричество, волны, современная физика. Выбирайте по сильнейшему курсу AP/IB.",
        contentKk: "SAT пәндік тесттерінің жаратылыстану бөлімі биология (экологиялық немесе молекулалық), химия және физиканы қамтиды. Әрқайсысында 60 минутта 80-85 сұрақ, ұпай 200-800, сол 0.25 айыппұлмен. Биология E — экология және эволюция; Биология M — биохимия және жасуша биологиясы. Химия — стехиометрия, термодинамика, зертханалық дағдылар. Физика — механика, электр, толқындар, заманауи физика. Ең күшті AP/IB курсыңызға қарай таңдаңыз.",
        keyFormulas: [
          {
            formula: "Raw Score = Correct − (Wrong × 0.25); same penalty as Math Subject Tests",
            description: "Science Subject Tests use the same scoring formula as Math",
            descriptionRu: "Предметные тесты по наукам используют ту же формулу, что и математика",
            descriptionKk: "Жаратылыстану пәндік тесттері математикамен бірдей формуланы қолданады"
          }
        ],
        solvedExamples: [
          {
            question: "A student is choosing between Biology E and Biology M for SAT Subject Tests. They earned an A in AP Environmental Science and a B+ in AP Biology (cell unit was hardest). Which version should they choose, and why?",
            questionRu: "Студент выбирает между Biology E и Biology M. Он получил A по AP Environmental Science и B+ по AP Biology (клеточный раздел был самым трудным). Какую версию выбрать и почему?",
            questionKk: "Оқушы Biology E мен Biology M арасында таңдайды. AP Environmental Science-тен A, AP Biology-ден B+ алған (жасуша бөлімі ең қиын болған). Қай нұсқаны таңдау керек және неге?",
            steps: [
              { en: "Biology E emphasizes ecology and evolution, aligning with AP Environmental Science strengths (A grade).", ru: "Biology E делает упор на экологию и эволюцию, что совпадает с сильной стороной AP Environmental Science (оценка A).", kk: "Biology E экология мен эволюцияға баса назар аударады, бұл AP Environmental Science күшті жағымен (A бағасы) сәйкес келеді." },
              { en: "Biology M emphasizes cell biology and biochemistry — the student's weakest area (hardest AP Biology unit). Choose Biology E.", ru: "Biology M делает упор на клеточную биологию и биохимию — слабейшую область студента. Выбирайте Biology E.", kk: "Biology M жасуша биологиясы мен биохимияға баса назар аударады — оқушының ең әлсіз аймағы. Biology E таңдаңыз." }
            ],
            answer: "Choose Biology E. It emphasizes ecology and evolution, matching the student's strength in environmental science, while avoiding the cell biology weakness."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "On the SAT Chemistry Subject Test, a student answers 62 correctly, 15 incorrectly, and omits 8 out of 85 questions. What is the raw score?",
            questionRu: "На предметном SAT по химии студент ответил правильно на 62, неправильно на 15, пропустил 8 из 85. Каков сырой балл?",
            questionKk: "SAT Химия пәндік тестінде оқушы 85 сұрақтан 62-ге дұрыс, 15-ке қате жауап берді, 8-ін өткізіп жіберді. Шикі ұпай қандай?",
            answer: "62 − (15 × 0.25) = 62 − 3.75 = 58.25",
            hint: "Apply the standard formula: Correct − (Wrong × 0.25).",
            hintRu: "Примените стандартную формулу: Правильные − (Неправильные × 0.25).",
            hintKk: "Стандартты формуланы қолданыңыз: Дұрыс − (Қате × 0.25).",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student plans to apply to biomedical engineering programs. They can take two SAT Subject Tests. They have strong grades in AP Physics C and AP Chemistry. Which two tests should they take?",
            questionRu: "Студент поступает на биомедицинскую инженерию. Можно сдать два предметных SAT. Сильные оценки по AP Physics C и AP Chemistry. Какие два теста выбрать?",
            questionKk: "Оқушы биомедициналық инженерия бағдарламасына түседі. Екі SAT пәндік тестін тапсыра алады. AP Physics C және AP Chemistry бойынша күшті бағалары бар. Қай екі тестті таңдау керек?",
            answer: "Physics and Chemistry. These directly align with their AP strengths and are the most relevant for biomedical engineering (which combines physics, chemistry, and biology). Math Level 2 could also be considered, but Physics + Chemistry best demonstrate science preparedness.",
            hint: "Match Subject Tests to both your AP strengths and the intended major's requirements.",
            hintRu: "Соотнесите предметные тесты с вашими сильными AP и требованиями специальности.",
            hintKk: "Пәндік тесттерді AP күшті жақтарыңызбен және мамандық талаптарымен сәйкестендіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student got a raw score of 52 on SAT Physics (85 questions), which maps to a scaled score of 700. They need 750+. They got 58 correct, 24 wrong, and omitted 3. How many wrong-to-correct conversions do they need to reach a raw score of 60 (which maps to ~750)?",
            questionRu: "Студент получил сырой 52 по SAT Physics (85 вопросов), шкальный 700. Нужно 750+. Он ответил 58 правильно, 24 неправильно, пропустил 3. Сколько конверсий неправильного в правильный нужно для сырого 60 (~750)?",
            questionKk: "Оқушы SAT Physics-тен шикі 52 алды (85 сұрақ), шкалалық 700. 750+ қажет. 58 дұрыс, 24 қате, 3 өткізілген. Шикі 60-қа (~750) жету үшін қанша қатені дұрысқа айналдыру қажет?",
            answer: "Current raw = 58 − (24 × 0.25) = 58 − 6 = 52. Target raw = 60. Gap = 8. Each wrong→correct conversion = +1.25 points. Conversions needed = 8 ÷ 1.25 = 6.4, so they need at least 7 conversions (turning 7 wrong answers into correct answers).",
            hint: "Each wrong→correct gains +1 (for the correct) and saves +0.25 (penalty removed) = 1.25 total.",
            hintRu: "Каждая конверсия: +1 (за правильный) + 0.25 (снятие штрафа) = 1.25 итого.",
            hintKk: "Әр конверсия: +1 (дұрыс үшін) + 0.25 (айыппұл алынып тасталды) = барлығы 1.25.",
            xp: 20
          }
        ]
      },
      {
        title: "AP Exam Strategy",
        titleRu: "Стратегия AP экзаменов",
        titleKk: "AP емтихан стратегиясы",
        content: "AP exams are scored 1-5, with 3+ generally considered passing and 4-5 earning college credit at most universities. Each exam has a multiple-choice section (typically 40-50% of score) and a free-response section (50-60%). Strategic preparation means focusing on FRQ practice since most students lose more points there. Top scorers write concise, formula-driven free responses and always show their work, even when unsure of the final answer, because AP graders award partial credit generously.",
        contentRu: "AP экзамены оцениваются 1-5, где 3+ обычно считается сдачей, а 4-5 дают зачёт в колледже. Каждый экзамен имеет часть с множественным выбором (40-50% оценки) и свободный ответ (50-60%). Стратегическая подготовка — фокус на FRQ, так как большинство теряет больше баллов там. Лучшие студенты пишут краткие ответы с формулами и всегда показывают ход решения, даже при неуверенности, потому что проверяющие AP щедро дают частичные баллы.",
        contentKk: "AP емтихандары 1-5 бағаланады, 3+ әдетте өту деп саналады, 4-5 көптеген университеттерде колледж кредитін береді. Әр емтиханда көп таңдаулы бөлім (ұпайдың 40-50%) және еркін жауап бөлімі (50-60%) бар. Стратегиялық дайындық — FRQ-ға назар аудару, себебі көпшілік ұпайлардың көбін сонда жоғалтады. Үздік оқушылар қысқа, формулаға негізделген еркін жауаптар жазады және соңғы жауапқа сенімсіз болса да, шешім жолын көрсетеді, себебі AP тексерушілері жартылай ұпайды жомарттықпен береді.",
        keyFormulas: [
          {
            formula: "AP Composite = (MC Raw × MC Weight) + (FRQ Raw × FRQ Weight)",
            description: "AP exams weight multiple-choice and free-response sections differently",
            descriptionRu: "AP экзамены по-разному взвешивают секции с множественным выбором и свободным ответом",
            descriptionKk: "AP емтихандары көп таңдаулы және еркін жауап бөлімдерін әртүрлі салмақтайды"
          }
        ],
        solvedExamples: [
          {
            question: "On an AP exam, the MC section has 55 questions (worth 50% of composite) and FRQ has 5 questions worth 15 points each (50% of composite). A student gets 42/55 MC correct and earns 48/75 on FRQs. Calculate the composite percentage.",
            questionRu: "На AP экзамене MC часть — 55 вопросов (50% композита), FRQ — 5 вопросов по 15 баллов (50% композита). Студент: 42/55 MC правильно и 48/75 на FRQ. Рассчитайте процент композита.",
            questionKk: "AP емтиханда MC бөлімі — 55 сұрақ (композиттің 50%), FRQ — 5 сұрақ, әрқайсысы 15 ұпай (50%). Оқушы: 42/55 MC дұрыс және FRQ-да 48/75. Композит пайызын есептеңіз.",
            steps: [
              { en: "MC percentage: 42/55 = 76.4%. Weighted: 76.4% × 0.50 = 38.2%.", ru: "MC процент: 42/55 = 76.4%. Взвешенный: 76.4% × 0.50 = 38.2%.", kk: "MC пайызы: 42/55 = 76.4%. Салмақталған: 76.4% × 0.50 = 38.2%." },
              { en: "FRQ percentage: 48/75 = 64.0%. Weighted: 64.0% × 0.50 = 32.0%. Composite = 38.2% + 32.0% = 70.2%, which typically earns a score of 4.", ru: "FRQ процент: 48/75 = 64.0%. Взвешенный: 64.0% × 0.50 = 32.0%. Композит = 38.2% + 32.0% = 70.2%, что обычно соответствует оценке 4.", kk: "FRQ пайызы: 48/75 = 64.0%. Салмақталған: 64.0% × 0.50 = 32.0%. Композит = 38.2% + 32.0% = 70.2%, бұл әдетте 4 бағасына сәйкес." }
            ],
            answer: "Composite is 70.2%, which typically corresponds to an AP score of 4."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "An AP exam is scored 1-5. What is the minimum score generally accepted for college credit?",
            questionRu: "AP экзамен оценивается 1-5. Какой минимальный балл обычно принимается для зачёта в колледже?",
            questionKk: "AP емтихан 1-5 бағаланады. Колледж кредиті үшін қабылданатын ең аз ұпай қандай?",
            answer: "A score of 3 is generally considered passing, though many selective colleges require 4 or 5 for credit.",
            hint: "Scores of 1-2 rarely earn credit, 3 is the threshold, 4-5 are strong.",
            hintRu: "Баллы 1-2 редко дают зачёт, 3 — порог, 4-5 — сильные.",
            hintKk: "1-2 ұпай сирек кредит береді, 3 — шек, 4-5 — күшті.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student scored 80% on MC (50% weight) and 55% on FRQ (50% weight). What is the composite percentage? If 65-75% typically earns a 4, and 75%+ earns a 5, what score do they likely receive?",
            questionRu: "Студент набрал 80% MC (вес 50%) и 55% FRQ (вес 50%). Каков процент композита? Если 65-75% — это 4, а 75%+ — 5, какой балл?",
            questionKk: "Оқушы MC-де 80% (салмағы 50%) және FRQ-да 55% (салмағы 50%) жинады. Композит пайызы қандай? Егер 65-75% — 4, ал 75%+ — 5 болса, қандай ұпай алады?",
            answer: "Composite = (80% × 0.50) + (55% × 0.50) = 40% + 27.5% = 67.5%. This falls in the 65-75% range, likely earning a score of 4.",
            hint: "Multiply each section's percentage by its weight, then add them.",
            hintRu: "Умножьте процент каждой секции на её вес и сложите.",
            hintKk: "Әр бөлімнің пайызын салмағына көбейтіп, қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student wants a 5 on AP Calculus (needs ~75% composite). MC is 45 questions (50% weight) and FRQ is 6 questions worth 9 points each (50% weight). They consistently score 38/45 on MC. What minimum FRQ score (out of 54) do they need?",
            questionRu: "Студент хочет 5 по AP Calculus (нужно ~75% композита). MC — 45 вопросов (вес 50%), FRQ — 6 вопросов по 9 баллов (вес 50%). MC стабильно 38/45. Какой минимум FRQ (из 54) нужен?",
            questionKk: "Оқушы AP Calculus-тен 5 алғысы келеді (~75% композит қажет). MC — 45 сұрақ (салмағы 50%), FRQ — 6 сұрақ, әрқайсысы 9 ұпай (салмағы 50%). MC-де тұрақты 38/45. FRQ-да (54-тен) ең аз қанша ұпай қажет?",
            answer: "MC contribution: (38/45) × 50% = 84.4% × 0.50 = 42.2%. Need total ≥ 75%, so FRQ contribution ≥ 75% − 42.2% = 32.8%. FRQ percentage needed: 32.8% ÷ 0.50 = 65.6%. Score needed: 54 × 65.6% = 35.4, so at least 36 out of 54 on FRQs.",
            hint: "Find the MC contribution first, then solve for the FRQ percentage needed to reach 75% total.",
            hintRu: "Найдите вклад MC, затем определите нужный процент FRQ для достижения 75%.",
            hintKk: "Алдымен MC үлесін табыңыз, содан кейін 75%-ға жету үшін қажетті FRQ пайызын анықтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Application Timeline",
        titleRu: "График подачи документов",
        titleKk: "Құжат тапсыру кестесі",
        content: "A successful application timeline starts in the summer before Grade 12: finalize your college list, draft essays, and request recommendation letters by September. Early Decision/Early Action deadlines are typically November 1-15; Regular Decision deadlines fall in January (most commonly January 1-15). Financial aid deadlines (FAFSA, CSS Profile) often precede or coincide with application deadlines. Missing any deadline can mean automatic rejection, so build a master calendar with all dates and set reminders two weeks before each one.",
        contentRu: "Успешный график начинается летом перед 12 классом: финализируйте список вузов, напишите черновики эссе и запросите рекомендательные письма к сентябрю. Дедлайны Early Decision/Early Action — обычно 1-15 ноября; Regular Decision — в январе (чаще 1-15 января). Дедлайны финансовой помощи (FAFSA, CSS Profile) часто предшествуют или совпадают с дедлайнами подачи. Пропуск любого дедлайна может означать автоматический отказ, поэтому создайте мастер-календарь со всеми датами и напоминаниями за две недели.",
        contentKk: "Табысты кесте 12-сынып алдындағы жазда басталады: колледж тізімін аяқтаңыз, эссе жобаларын жазыңыз және қыркүйекке дейін ұсыныс хаттарын сұраңыз. Early Decision/Early Action мерзімдері әдетте 1-15 қараша; Regular Decision — қаңтарда (көбінесе 1-15 қаңтар). Қаржылық көмек мерзімдері (FAFSA, CSS Profile) көбінесе өтінім мерзімдерінен бұрын немесе бір уақытта болады. Кез келген мерзімді жіберу автоматты бас тарту болуы мүмкін, сондықтан барлық күндермен мастер-күнтізбе жасап, әрқайсысынан екі апта бұрын еске салғыш орнатыңыз.",
        keyFormulas: [
          {
            formula: "Timeline Buffer = Deadline Date − 14 days (set reminder) − Estimated Days to Complete",
            description: "When to start each task to avoid last-minute rushing",
            descriptionRu: "Когда начинать каждую задачу, чтобы избежать спешки в последний момент",
            descriptionKk: "Соңғы сәттегі асығыстықтан аулақ болу үшін әр тапсырманы қашан бастау керек"
          }
        ],
        solvedExamples: [
          {
            question: "A student applies Early Decision (deadline November 1) and Regular Decision to 8 schools (deadline January 5). They need 3 weeks for essays, 1 week for recommendation follow-ups, and 1 week for final review. When should they start if they also need a 2-week buffer?",
            questionRu: "Студент подаёт Early Decision (дедлайн 1 ноября) и Regular Decision в 8 вузов (дедлайн 5 января). Нужно 3 недели на эссе, 1 неделя на рекомендации, 1 неделя на финальную проверку. Когда начать при 2-недельном запасе?",
            questionKk: "Оқушы Early Decision (мерзім 1 қараша) және 8 мектепке Regular Decision (мерзім 5 қаңтар) тапсырады. Эссеге 3 апта, ұсыныстарға 1 апта, соңғы тексеруге 1 апта қажет. 2 апталық қор кезінде қашан бастау керек?",
            steps: [
              { en: "For ED (Nov 1): 3 weeks essays + 1 week recs + 1 week review + 2 week buffer = 7 weeks. Start by September 13.", ru: "Для ED (1 ноября): 3 недели эссе + 1 неделя рекомендации + 1 неделя проверка + 2 недели запас = 7 недель. Начать к 13 сентября.", kk: "ED үшін (1 қараша): 3 апта эссе + 1 апта ұсыныстар + 1 апта тексеру + 2 апта қор = 7 апта. 13 қыркүйекке дейін бастау." },
              { en: "For RD (Jan 5): Same work but essays can be adapted from ED drafts — estimate 2 weeks for 8 schools. Start RD-specific work by early December after ED is submitted.", ru: "Для RD (5 января): Те же задачи, но эссе можно адаптировать из ED черновиков — 2 недели на 8 вузов. Начать RD-работу в начале декабря после подачи ED.", kk: "RD үшін (5 қаңтар): Сол жұмыс, бірақ эссені ED жобаларынан бейімдеуге болады — 8 мектепке 2 апта. ED тапсырғаннан кейін желтоқсан басында RD жұмысын бастау." }
            ],
            answer: "Start ED preparation by mid-September (7 weeks before Nov 1). Start RD-specific work by early December (about 4-5 weeks before Jan 5)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three common application deadlines that students should track on their master calendar.",
            questionRu: "Назовите три распространённых дедлайна, которые студенты должны отслеживать.",
            questionKk: "Оқушылар бақылауы тиіс үш жалпы өтінім мерзімін атаңыз.",
            answer: "Early Decision/Early Action deadline (typically Nov 1-15), Regular Decision deadline (typically Jan 1-15), and Financial Aid deadline (FAFSA/CSS Profile, often Oct-Feb depending on school).",
            hint: "Think about the different rounds of application and financial aid.",
            hintRu: "Подумайте о разных раундах подачи и финансовой помощи.",
            hintKk: "Өтінімнің әртүрлі кезеңдері мен қаржылық көмек туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student has Regular Decision deadlines of January 1, January 5, and January 15 for three different schools. They need 5 days per application for final polishing. Create a schedule working backward from the deadlines.",
            questionRu: "У студента дедлайны Regular Decision: 1 января, 5 января, 15 января. На финальную доработку каждой заявки нужно 5 дней. Составьте график, считая от дедлайнов назад.",
            questionKk: "Оқушының Regular Decision мерзімдері: 1 қаңтар, 5 қаңтар, 15 қаңтар. Әр өтінімді соңғы жетілдіруге 5 күн қажет. Мерзімдерден кері есептеп кесте жасаңыз.",
            answer: "School 1 (Jan 1): Start polishing Dec 27. School 2 (Jan 5): Start polishing Dec 31. School 3 (Jan 15): Start polishing Jan 10. Work on School 1 first (Dec 27-31), then School 2 (Jan 1-4), then School 3 (Jan 10-14), submitting each the day before or on the deadline.",
            hint: "Subtract 5 days from each deadline. Sequence the work so tasks don't overlap.",
            hintRu: "Отнимите 5 дней от каждого дедлайна. Распределите задачи без пересечений.",
            hintKk: "Әр мерзімнен 5 күн алып тастаңыз. Тапсырмалар қабаттаспайтындай реттеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student is applying to 12 schools: 2 Early Action (Nov 1), 1 Early Decision (Nov 15), 6 Regular Decision (Jan 1), and 3 Regular Decision (Jan 15). Each application needs a unique supplemental essay (2 days each), plus Common App essay (already done). Recommendation letters need 4 weeks notice. Financial aid (CSS Profile) is due Nov 15 for EA/ED schools and Feb 1 for RD schools. Build a complete timeline starting from August 1.",
            questionRu: "Студент подаёт в 12 вузов: 2 Early Action (1 ноября), 1 Early Decision (15 ноября), 6 Regular Decision (1 января), 3 Regular Decision (15 января). Каждая заявка требует уникальное эссе (2 дня каждое). Common App уже написан. Рекомендации нужны за 4 недели. CSS Profile: 15 ноября для EA/ED, 1 февраля для RD. Составьте полный график с 1 августа.",
            questionKk: "Оқушы 12 мектепке түседі: 2 Early Action (1 қараша), 1 Early Decision (15 қараша), 6 Regular Decision (1 қаңтар), 3 Regular Decision (15 қаңтар). Әрқайсысына бірегей эссе қажет (2 күн). Common App дайын. Ұсыныстар 4 апта бұрын қажет. CSS Profile: EA/ED үшін 15 қараша, RD үшін 1 ақпан. 1 тамыздан толық кесте жасаңыз.",
            answer: "Aug 1-7: Request recommendation letters (4 weeks before Sep 1 target). Aug 8-Sep 15: Write 3 EA/ED supplemental essays (6 days work + revision time). Sep 15: Follow up on recommendations. Oct 1-15: Complete CSS Profile for EA/ED schools (due Nov 15). Oct 15-31: Final review and submit 2 EA apps (Nov 1 deadline). Nov 1-14: Submit ED app (Nov 15) and CSS Profile. Nov 15-Dec 15: Write 6 RD(Jan 1) supplemental essays (12 days work + revision). Dec 15-31: Final review and submit 6 RD apps (Jan 1). Jan 1-12: Write 3 remaining RD essays (6 days + revision), submit by Jan 15. Jan 15-31: Complete CSS Profile for RD schools (Feb 1).",
            hint: "Group applications by deadline, work backward from each, and account for recommendation letter lead time.",
            hintRu: "Группируйте по дедлайнам, считайте назад и учтите время на рекомендации.",
            hintKk: "Өтінімдерді мерзім бойынша топтаңыз, әрқайсысынан кері есептеңіз және ұсыныс хаттарына уақыт беріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Final Mock Tests",
        titleRu: "Финальные пробные тесты",
        titleKk: "Қорытынды пробный тесттер",
        content: "Final mock tests should simulate real exam conditions exactly: full-length, timed, with only approved materials. Take your last full mock test 7-10 days before the real exam to allow time for targeted review without burnout. Analyze every wrong answer by categorizing errors as content gaps, careless mistakes, or time-management issues, then address only the most frequent error type in your remaining study days.",
        contentRu: "Финальные пробные тесты должны точно имитировать реальные условия: полная длина, ограничение по времени, только разрешённые материалы. Последний полный пробный тест сдайте за 7-10 дней до экзамена, чтобы оставить время на целенаправленный обзор без выгорания. Проанализируйте каждый неправильный ответ, классифицируя ошибки как пробелы в знаниях, невнимательность или проблемы с тайм-менеджментом, и в оставшиеся дни исправляйте только самый частый тип ошибок.",
        contentKk: "Қорытынды пробный тесттер нақты емтихан жағдайларын дәл қайталауы керек: толық ұзындық, уақыт шектеулі, тек рұқсат етілген материалдар. Соңғы толық пробный тестті нақты емтиханнан 7-10 күн бұрын тапсырыңыз, мақсатты қайталау үшін уақыт қалдырыңыз. Әр қате жауапты талдаңыз: білім олқылығы, абайсыздық немесе уақытты басқару мәселелері деп жіктеп, қалған күндерде тек ең жиі қате түрін түзетіңіз.",
        keyFormulas: [
          {
            formula: "Error Analysis: Content Gaps + Careless Mistakes + Time Issues = Total Errors",
            description: "Categorize all wrong answers to identify your most impactful area for improvement",
            descriptionRu: "Классифицируйте все неправильные ответы для определения наиболее важной области улучшения",
            descriptionKk: "Жақсартудың ең маңызды аймағын анықтау үшін барлық қате жауаптарды жіктеңіз"
          }
        ],
        solvedExamples: [
          {
            question: "On a final mock SAT, a student got 15 wrong answers. Error analysis: 6 content gaps (didn't know the concept), 5 careless mistakes (knew it but made errors), 4 time issues (ran out of time). The real SAT is in 8 days. What should they focus on?",
            questionRu: "На финальном пробном SAT студент допустил 15 ошибок. Анализ: 6 пробелов в знаниях, 5 ошибок невнимательности, 4 из-за нехватки времени. До SAT 8 дней. На чём сосредоточиться?",
            questionKk: "Қорытынды пробный SAT-та оқушы 15 қате жіберді. Талдау: 6 білім олқылығы, 5 абайсыздық қатесі, 4 уақыт мәселесі. SAT-қа 8 күн. Неге назар аудару керек?",
            steps: [
              { en: "Content gaps are the largest category (6/15 = 40%). List the specific topics: these are learnable in 8 days.", ru: "Пробелы в знаниях — самая большая категория (6/15 = 40%). Составьте список тем: их можно выучить за 8 дней.", kk: "Білім олқылықтары ең үлкен санат (6/15 = 40%). Нақты тақырыптарды тізімдеңіз: оларды 8 күнде үйренуге болады." },
              { en: "Days 1-5: Study the 6 content gap topics (about 1 topic per day). Days 6-7: Light review + pacing practice for the 4 time issues. Day 8: Rest completely.", ru: "Дни 1-5: Изучите 6 пробельных тем (1 тема в день). Дни 6-7: Лёгкий обзор + тренировка темпа. День 8: Полный отдых.", kk: "1-5 күн: 6 олқылық тақырыпты оқыңыз (күніне 1 тақырып). 6-7 күн: Жеңіл қайталау + қарқын жаттығуы. 8-күн: Толық демалыс." }
            ],
            answer: "Focus primarily on content gaps (40% of errors) since these are fixable through study. Dedicate 5 days to learning the 6 missing concepts, 2 days to pacing practice, and rest the final day."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you take your last full mock test 7-10 days before the real exam, not the day before?",
            questionRu: "Почему последний полный пробный тест нужно сдавать за 7-10 дней до экзамена, а не накануне?",
            questionKk: "Неге соңғы толық пробный тестті емтиханнан 7-10 күн бұрын тапсыру керек, алдыңғы күні емес?",
            answer: "Taking it 7-10 days before gives you time to analyze errors and do targeted review of weak areas. Taking it the day before causes fatigue and anxiety without time to fix weaknesses, leading to worse performance on test day.",
            hint: "Think about what you can do with the results if you have time versus no time.",
            hintRu: "Подумайте, что вы можете сделать с результатами при наличии времени и без него.",
            hintKk: "Уақыт болған кезде және болмаған кезде нәтижелермен не істей алатыныңызды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student's mock test error analysis shows: 3 content gaps, 8 careless mistakes, 2 time issues. What is the most impactful area to improve, and suggest one specific technique for it.",
            questionRu: "Анализ ошибок пробного теста: 3 пробела в знаниях, 8 ошибок невнимательности, 2 из-за нехватки времени. Какая область наиболее влияет и предложите одну технику.",
            questionKk: "Пробный тест қателерін талдау: 3 білім олқылығы, 8 абайсыздық қатесі, 2 уақыт мәселесі. Ең әсерлі аймақ қайсы және бір нақты техника ұсыныңыз.",
            answer: "Careless mistakes are the largest category (8/13 = 62%). Technique: use the 'double-check flag' method — on first pass, flag any question where you feel uncertain, then spend remaining time re-reading and re-solving only flagged questions. This catches sign errors, misread questions, and calculation mistakes.",
            hint: "The largest error category has the most room for improvement. Careless mistakes need a systematic checking strategy.",
            hintRu: "Самая большая категория — наибольший потенциал улучшения. Невнимательность требует системы проверки.",
            hintKk: "Ең үлкен санат — жақсарту әлеуеті ең жоғары. Абайсыздық жүйелі тексеру стратегиясын қажет етеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student has taken 3 mock SATs with scores 1180, 1220, and 1250. Their error breakdowns are: Mock 1: 10 content, 8 careless, 5 time. Mock 2: 6 content, 9 careless, 4 time. Mock 3: 4 content, 10 careless, 3 time. The real SAT is in 10 days. Analyze the trend, identify the persistent problem, and create a 10-day plan.",
            questionRu: "Студент сдал 3 пробных SAT: 1180, 1220, 1250. Ошибки: Пробный 1: 10 знания, 8 невнимательность, 5 время. Пробный 2: 6 знания, 9 невнимательность, 4 время. Пробный 3: 4 знания, 10 невнимательность, 3 время. SAT через 10 дней. Проанализируйте тренд, найдите устойчивую проблему и составьте план на 10 дней.",
            questionKk: "Оқушы 3 пробный SAT тапсырды: 1180, 1220, 1250. Қателер: Пробный 1: 10 білім, 8 абайсыздық, 5 уақыт. Пробный 2: 6 білім, 9 абайсыздық, 4 уақыт. Пробный 3: 4 білім, 10 абайсыздық, 3 уақыт. SAT-қа 10 күн. Үрдісті талдаңыз, тұрақты мәселені анықтаңыз және 10 күндік жоспар жасаңыз.",
            answer: "Trend: Content gaps are improving (10→6→4), time issues are improving (5→4→3), but careless mistakes are persistent and worsening (8→9→10). The persistent problem is careless mistakes. 10-day plan: Days 1-3: Practice sections with a 'double-check' protocol — solve each question, then immediately re-read the question before moving on. Days 4-5: Timed practice focusing on underlining key words in each question. Days 6-7: Take one final mock with the new checking habits. Days 8-9: Review the 4 remaining content gaps from Mock 3. Day 10: Complete rest, prepare materials. Target: reducing careless errors from 10 to 5 would add ~50 points, pushing toward 1300.",
            hint: "Look at which error type is NOT improving despite score increases. That is the bottleneck.",
            hintRu: "Найдите тип ошибок, который НЕ улучшается несмотря на рост баллов. Это узкое место.",
            hintKk: "Ұпай өсуіне қарамастан ЖАҚСАРМАЙТЫН қате түрін табыңыз. Бұл тар жер.",
            xp: 20
          }
        ]
      }
    ]
  }
};