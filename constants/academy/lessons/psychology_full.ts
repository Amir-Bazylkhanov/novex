import type { LessonContent } from '../lessonData.ts';

export const PSYCHOLOGY_FULL: Record<string, LessonContent> = {
  "Psychology & Social Intelligence_8": {
    planetName: "Psychology & Social Intelligence",
    introduction: {
      en: "Welcome to Psychology & Social Intelligence for Grade 8! You will learn to identify and understand your emotions, build empathy, strengthen friendships, manage anger, and develop self-esteem. These foundational skills will help you navigate school, home, and social life with confidence.",
      ru: "Добро пожаловать в Психологию и социальный интеллект для 8 класса! Вы научитесь определять и понимать свои эмоции, развивать эмпатию, укреплять дружбу, управлять гневом и повышать самооценку. Эти базовые навыки помогут вам уверенно ориентироваться в школе, дома и в обществе."
    },
    sections: [
      {
        title: "Understanding Emotions",
        titleRu: "Понимание эмоций",
        titleKk: "Эмоцияларды түсіну",
        content: "Emotions are natural signals from our brain that help us respond to the world. Psychologist Paul Ekman identified six basic emotions shared by all humans: happiness, sadness, anger, fear, surprise, and disgust. Learning to name your emotions is the first step toward emotional intelligence.",
        contentRu: "Эмоции — это естественные сигналы нашего мозга, которые помогают реагировать на мир. Психолог Пол Экман выделил шесть базовых эмоций, общих для всех людей: радость, грусть, гнев, страх, удивление и отвращение. Научиться называть свои эмоции — первый шаг к эмоциональному интеллекту.",
        contentKk: "Эмоциялар — миымыздың әлемге жауап беруге көмектесетін табиғи сигналдары. Психолог Пол Экман барлық адамдарға ортақ алты негізгі эмоцияны анықтады: қуаныш, қайғы, ашу, қорқыныш, таңдану және жиіркену. Эмоцияларыңызды атауды үйрену — эмоциялық интеллекттің бірінші қадамы.",
        keyFormulas: [
          {
            formula: "Ekman's 6 Basic Emotions: Happiness, Sadness, Anger, Fear, Surprise, Disgust",
            description: "Six universal emotions identified across all cultures",
            descriptionRu: "Шесть универсальных эмоций, выявленных во всех культурах",
            descriptionKk: "Барлық мәдениеттерде анықталған алты әмбебап эмоция"
          },
          {
            formula: "Emotion Cycle: Trigger → Thought → Feeling → Behavior",
            description: "How an emotion develops from an event to an action",
            descriptionRu: "Как эмоция развивается от события до действия",
            descriptionKk: "Эмоция оқиғадан іс-әрекетке дейін қалай дамиды"
          }
        ],
        solvedExamples: [
          {
            question: "Your friend cancels plans at the last minute. Trace the emotion cycle: trigger, thought, feeling, and behavior.",
            questionRu: "Ваш друг отменяет планы в последний момент. Проследите цикл эмоций: триггер, мысль, чувство и поведение.",
            questionKk: "Досыңыз соңғы сәтте жоспарды бұзады. Эмоция циклін бақылаңыз: триггер, ой, сезім және мінез-құлық.",
            steps: [
              { en: "Identify the trigger and thought: The trigger is the cancellation. A possible thought is 'They don't care about me' or 'Maybe something came up.'", ru: "Определите триггер и мысль: Триггер — отмена планов. Возможная мысль: «Ему всё равно» или «Может, что-то случилось».", kk: "Триггер мен ойды анықтаңыз: Триггер — жоспардың бұзылуы. Мүмкін ой: «Оған бәрібір» немесе «Бірдеңе болған шығар»." },
              { en: "Name the feeling and choose behavior: The feeling is likely disappointment or sadness. Best behavior: calmly ask if everything is okay rather than reacting angrily.", ru: "Назовите чувство и выберите поведение: Чувство — вероятно, разочарование или грусть. Лучшее поведение: спокойно спросить, всё ли хорошо.", kk: "Сезімді атаңыз және мінез-құлықты таңдаңыз: Сезім — көңілсіздік немесе қайғы. Ең жақсы мінез-құлық: бәрі жақсы ма деп сабырмен сұрау." }
            ],
            answer: "Trigger: cancelled plans → Thought: they don't care / something came up → Feeling: disappointment → Best behavior: ask calmly what happened.",
            answerRu: "Триггер: отмена планов → Мысль: ему всё равно / что-то случилось → Чувство: разочарование → Лучшее поведение: спокойно спросить, что случилось.",
            answerKk: "Триггер: жоспардың бұзылуы → Ой: оған бәрібір / бірдеңе болған шығар → Сезім: көңілсіздік → Ең жақсы мінез-құлық: не болғанын сабырмен сұрау."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the six basic emotions identified by Paul Ekman.",
            questionRu: "Назовите шесть базовых эмоций, выделенных Полом Экманом.",
            questionKk: "Пол Экман анықтаған алты негізгі эмоцияны атаңыз.",
            answer: "Happiness, sadness, anger, fear, surprise, disgust.",
            answerRu: "Радость, грусть, гнев, страх, удивление, отвращение.",
            answerKk: "Қуаныш, қайғы, ашу, қорқыныш, таңдану, жиіркену.",
            hint: "Think of the characters from the movie 'Inside Out'.",
            hintRu: "Вспомните персонажей мультфильма «Головоломка».",
            hintKk: "«Inside Out» мультфильміндегі кейіпкерлерді еске түсіріңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You got a lower grade than expected on a test. Identify the emotion, rate it on a 1-5 scale, and suggest one healthy coping strategy.",
            questionRu: "Вы получили оценку ниже ожидаемой. Определите эмоцию, оцените её по шкале 1-5 и предложите одну здоровую стратегию.",
            questionKk: "Күткеннен төмен баға алдыңыз. Эмоцияны анықтаңыз, 1-5 шкаласы бойынша бағалаңыз және бір сау стратегия ұсыныңыз.",
            answer: "Emotion: disappointment or frustration, intensity 3-4. Healthy strategy: talk to the teacher about how to improve next time.",
            answerRu: "Эмоция: разочарование или досада, интенсивность 3-4. Здоровая стратегия: поговорить с учителем о том, как улучшить результат в следующий раз.",
            answerKk: "Эмоция: көңілсіздік немесе ашуланшақтық, қарқындылығы 3-4. Сау стратегия: келесі жолы нәтижені қалай жақсартуға болатынын мұғаліммен талқылау.",
            hint: "Consider how your body feels — tense shoulders or a lump in your throat are clues.",
            hintRu: "Обратите внимание на тело — напряжённые плечи или ком в горле — это подсказки.",
            hintKk: "Денеңізге назар аударыңыз — қысылған иықтар немесе тамақтағы кому — бұл белгілер.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Describe a situation where two different people might experience two different emotions from the same trigger. Explain why using the emotion cycle.",
            questionRu: "Опишите ситуацию, где два разных человека испытывают разные эмоции от одного триггера. Объясните почему, используя цикл эмоций.",
            questionKk: "Бір триггерден екі адамның әртүрлі эмоцияларды сезінетін жағдайды сипаттаңыз. Эмоция циклін қолданып түсіндіріңіз.",
            answer: "Example: A surprise party — one person feels happiness (thought: 'they care about me'), another feels fear (thought: 'I hate unexpected situations'). The difference lies in the thought step of the cycle.",
            answerRu: "Пример: вечеринка-сюрприз — один человек испытывает радость (мысль: «обо мне заботятся»), другой — страх (мысль: «я ненавижу неожиданности»). Разница — в шаге «мысль» цикла эмоций.",
            answerKk: "Мысал: тосынсый кеш — бір адам қуаныш сезінеді (ой: «олар мені қадірлейді»), екіншісі қорқыныш сезінеді (ой: «мен тосын жағдайларды жек көремін»). Айырмашылық эмоция циклінің «ой» қадамында.",
            hint: "The key difference is in the 'thought' step — different interpretations lead to different feelings.",
            hintRu: "Ключевое различие — в шаге «мысль»: разные интерпретации ведут к разным чувствам.",
            hintKk: "Негізгі айырмашылық «ой» қадамында — әртүрлі түсіндірмелер әртүрлі сезімдерге әкеледі.",
            xp: 20
          }
        ]
      },
      {
        title: "Empathy",
        titleRu: "Эмпатия",
        titleKk: "Эмпатия",
        content: "Empathy is the ability to understand and share the feelings of another person. There are two main types: cognitive empathy (understanding what someone thinks) and affective empathy (feeling what someone feels). Empathy is the foundation of all strong relationships and can be developed with practice.",
        contentRu: "Эмпатия — это способность понимать и разделять чувства другого человека. Существует два основных типа: когнитивная эмпатия (понимание мыслей другого) и аффективная эмпатия (ощущение чувств другого). Эмпатия — основа всех крепких отношений, и её можно развить практикой.",
        contentKk: "Эмпатия — басқа адамның сезімдерін түсіну және бөлісу қабілеті. Екі негізгі түрі бар: когнитивті эмпатия (біреудің не ойлайтынын түсіну) және аффективті эмпатия (біреудің не сезетінін сезіну). Эмпатия барлық берік қарым-қатынастардың негізі және жаттығумен дамытылады.",
        keyFormulas: [
          {
            formula: "Cognitive Empathy: Understanding another's perspective",
            description: "Thinking about what someone else might be thinking or experiencing",
            descriptionRu: "Размышление о том, что другой человек может думать или переживать",
            descriptionKk: "Басқа адамның не ойлайтынын немесе не сезетінін ойлау"
          },
          {
            formula: "Affective Empathy: Sharing another's emotional state",
            description: "Actually feeling the emotions that another person is experiencing",
            descriptionRu: "Реальное ощущение эмоций, которые испытывает другой человек",
            descriptionKk: "Басқа адамның сезіп жатқан эмоцияларын шынымен сезіну"
          }
        ],
        solvedExamples: [
          {
            question: "Your classmate looks upset after getting a bad test score. How would you use cognitive and affective empathy to respond?",
            questionRu: "Ваш одноклассник расстроен после плохой оценки. Как бы вы использовали когнитивную и аффективную эмпатию?",
            questionKk: "Сыныптасыңыз нашар баға алғаннан кейін ренжіген. Когнитивті және аффективті эмпатияны қалай қолданар едіңіз?",
            steps: [
              { en: "Use cognitive empathy: Think about their perspective — they probably studied hard and feel like their effort was wasted. They may worry about their parents' reaction.", ru: "Используйте когнитивную эмпатию: Подумайте об их перспективе — они, вероятно, много учились и чувствуют, что усилия пропали зря.", kk: "Когнитивті эмпатияны қолданыңыз: Олардың көзқарасын ойлаңыз — олар көп оқып, күш-жігерін босқа кеткендей сезінуі мүмкін." },
              { en: "Use affective empathy: Let yourself feel their disappointment. Then say something like 'I can see you are upset — I would feel the same way. Want to study together next time?'", ru: "Используйте аффективную эмпатию: Позвольте себе почувствовать их разочарование. Скажите: «Я вижу, что тебе грустно — я бы чувствовал то же. Давай в следующий раз вместе готовиться?»", kk: "Аффективті эмпатияны қолданыңыз: Олардың көңілсіздігін сезіңіз. «Сенің ренжігеніңді көріп тұрмын — мен де солай сезінер едім. Келесі жолы бірге дайындаламыз ба?» деңіз." }
            ],
            answer: "Cognitive empathy: understand they feel their effort was wasted. Affective empathy: share their disappointment and offer support by suggesting studying together.",
            answerRu: "Когнитивная эмпатия: понять, что они чувствуют, будто их усилия пропали зря. Аффективная эмпатия: разделить их разочарование и предложить поддержку, предложив готовиться вместе.",
            answerKk: "Когнитивті эмпатия: олар күш-жігері босқа кетті деп сезінетінін түсіну. Аффективті эмпатия: олардың көңілсіздігін бөлісіп, бірге дайындалуды ұсынып қолдау көрсету."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between cognitive empathy and affective empathy?",
            questionRu: "В чём разница между когнитивной и аффективной эмпатией?",
            questionKk: "Когнитивті эмпатия мен аффективті эмпатияның айырмашылығы неде?",
            answer: "Cognitive empathy is understanding what someone thinks; affective empathy is feeling what someone feels.",
            answerRu: "Когнитивная эмпатия — понимание того, что человек думает; аффективная эмпатия — ощущение того, что он чувствует.",
            answerKk: "Когнитивті эмпатия — адамның не ойлайтынын түсіну; аффективті эмпатия — оның не сезетінін сезіну.",
            hint: "One is about thinking, the other is about feeling.",
            hintRu: "Одна связана с мышлением, другая — с чувствами.",
            hintKk: "Біреуі ойлаумен, екіншісі сезіммен байланысты.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A new student joins your class mid-year and sits alone at lunch. Describe how you would use both types of empathy to help them.",
            questionRu: "Новый ученик приходит в ваш класс посреди года и сидит один за обедом. Опишите, как бы вы использовали оба типа эмпатии.",
            questionKk: "Жаңа оқушы жыл ортасында сыныпқа келіп, түскі асқа жалғыз отырады. Эмпатияның екі түрін қалай қолданатыныңызды сипаттаңыз.",
            answer: "Cognitive: they probably feel nervous and lonely in an unfamiliar environment. Affective: remember how you felt on your first day somewhere new. Action: invite them to sit with you and introduce them to friends.",
            answerRu: "Когнитивная: они, вероятно, нервничают и чувствуют себя одиноко в незнакомой обстановке. Аффективная: вспомните, как вы себя чувствовали в первый день в новом месте. Действие: пригласите их сесть с вами и познакомьте с друзьями.",
            answerKk: "Когнитивті: олар бейтаныс ортада алаңдап, жалғызсырауы мүмкін. Аффективті: жаңа жердегі алғашқы күніңізде не сезгеніңізді еске түсіріңіз. Әрекет: оларды өзіңізбен бірге отыруға шақырып, достарыңызбен таныстырыңыз.",
            hint: "Think about how you would feel if you were the new student.",
            hintRu: "Подумайте, что бы вы чувствовали, будь вы новым учеником.",
            hintKk: "Жаңа оқушы болсаңыз не сезінетініңізді ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain why someone might have strong cognitive empathy but weak affective empathy. Give a real-life example and discuss whether this is a problem.",
            questionRu: "Объясните, почему у кого-то может быть сильная когнитивная, но слабая аффективная эмпатия. Приведите пример и обсудите, является ли это проблемой.",
            questionKk: "Біреудің когнитивті эмпатиясы күшті, бірақ аффективті эмпатиясы әлсіз болуының себебін түсіндіріңіз. Мысал келтіріп, бұл мәселе ме екенін талқылаңыз.",
            answer: "Example: a doctor who understands a patient's pain intellectually but has learned to not absorb it emotionally to function professionally. This is not necessarily a problem — it can be healthy in some roles — but in personal relationships, lack of affective empathy can make others feel unsupported.",
            answerRu: "Пример: врач, который интеллектуально понимает боль пациента, но научился не принимать её эмоционально, чтобы профессионально выполнять свою работу. Это не обязательно проблема — в некоторых ролях это может быть полезно, — но в личных отношениях нехватка аффективной эмпатии может заставлять других чувствовать себя без поддержки.",
            answerKk: "Мысал: науқастың ауырсынуын интеллектуалды түрде түсінетін, бірақ кәсіби жұмыс істеу үшін оны эмоционалды қабылдамауды үйренген дәрігер. Бұл міндетті түрде мәселе емес — кейбір рөлдерде пайдалы болуы мүмкін, — бірақ жеке қарым-қатынастарда аффективті эмпатияның жетіспеушілігі басқаларды қолдаусыз сезіндіруі мүмкін.",
            hint: "Think about professions where emotional distance might actually be helpful.",
            hintRu: "Подумайте о профессиях, где эмоциональная дистанция может быть полезна.",
            hintKk: "Эмоциялық қашықтық пайдалы болуы мүмкін мамандықтарды ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Friendship Skills",
        titleRu: "Навыки дружбы",
        titleKk: "Достық дағдылары",
        content: "Strong friendships are built on trust, mutual respect, and good communication. Key friendship skills include active listening, being reliable, and showing appreciation. Research shows that quality friendships improve mental health, academic performance, and overall life satisfaction.",
        contentRu: "Крепкая дружба строится на доверии, взаимном уважении и хорошей коммуникации. Ключевые навыки дружбы включают активное слушание, надёжность и выражение признательности. Исследования показывают, что качественная дружба улучшает психическое здоровье, учёбу и удовлетворённость жизнью.",
        contentKk: "Берік достық сенім, өзара құрмет және жақсы қарым-қатынасқа негізделеді. Достық дағдыларына белсенді тыңдау, сенімді болу және ризашылық білдіру жатады. Зерттеулер сапалы достықтың психикалық денсаулықты, оқу үлгерімін және өмірге қанағаттануды жақсартатынын көрсетеді.",
        keyFormulas: [
          {
            formula: "Trust Equation: Reliability + Honesty + Vulnerability = Trust",
            description: "The three building blocks of trust in any friendship",
            descriptionRu: "Три строительных блока доверия в любой дружбе",
            descriptionKk: "Кез келген достықтағы сенімнің үш құрылыс блогы"
          },
          {
            formula: "Friendship Maintenance: Regular contact + Support in hard times + Celebrating wins",
            description: "How to keep friendships strong over time",
            descriptionRu: "Как поддерживать дружбу крепкой со временем",
            descriptionKk: "Достықты уақыт өте берік ұстау жолы"
          }
        ],
        solvedExamples: [
          {
            question: "Your best friend told someone else a secret you shared. Using the Trust Equation, analyze what happened and decide how to respond.",
            questionRu: "Ваш лучший друг рассказал кому-то ваш секрет. Используя Уравнение доверия, проанализируйте ситуацию и решите, как реагировать.",
            questionKk: "Жақын досыңыз сіздің құпияңызды басқаға айтты. Сенім теңдеуін қолданып, жағдайды талдаңыз және қалай жауап беруді шешіңіз.",
            steps: [
              { en: "Analyze using the Trust Equation: Honesty was broken (they did not keep the secret), which damages overall trust. Reliability may also be questioned.", ru: "Анализ по Уравнению доверия: Честность была нарушена (секрет не сохранён), что подрывает общее доверие. Надёжность тоже под вопросом.", kk: "Сенім теңдеуі бойынша талдау: Адалдық бұзылды (құпия сақталмады), бұл жалпы сенімге нұқсан келтіреді. Сенімділік те күмән тудырады." },
              { en: "Respond constructively: Have an honest conversation — explain how it made you feel, listen to their side, and set a clear boundary about secrets going forward.", ru: "Ответьте конструктивно: Проведите честный разговор — объясните свои чувства, выслушайте их сторону и установите границу о секретах.", kk: "Конструктивті жауап беріңіз: Адал әңгіме жүргізіңіз — сезімдеріңізді түсіндіріңіз, олардың жағын тыңдаңыз және құпиялар туралы нақты шекара қойыңыз." }
            ],
            answer: "The honesty component of trust was broken. Best response: have an honest conversation about feelings and set boundaries, rather than ending the friendship immediately.",
            answerRu: "Компонент честности доверия был нарушен. Лучшая реакция: провести честный разговор о чувствах и установить границы, а не сразу прекращать дружбу.",
            answerKk: "Сенімнің адалдық құрамдас бөлігі бұзылды. Ең жақсы жауап: достықты бірден үзбей, сезімдер туралы адал әңгіме жүргізіп, шекаралар қою."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the three components of the Trust Equation.",
            questionRu: "Назовите три компонента Уравнения доверия.",
            questionKk: "Сенім теңдеуінің үш компонентін атаңыз.",
            answer: "Reliability, Honesty, and Vulnerability.",
            answerRu: "Надёжность, честность и уязвимость.",
            answerKk: "Сенімділік, адалдық және осалдық.",
            hint: "Think about what makes you trust someone — can you count on them, are they honest, and do they open up to you?",
            hintRu: "Подумайте, что заставляет вас доверять — можно ли на них положиться, честны ли они, открываются ли они?",
            hintKk: "Біреуге не үшін сенетініңізді ойлаңыз — оларға сене аласыз ба, адал ма, ашыла ма?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend is going through a tough time at home and has been distant at school. Using the Friendship Maintenance framework, what should you do?",
            questionRu: "Ваш друг переживает трудности дома и отдалился в школе. Используя подход поддержания дружбы, что вы должны сделать?",
            questionKk: "Досыңыз үйде қиын кезеңді бастан кешіріп, мектепте алыстап кетті. Достықты ұстау тәсілін қолданып, не істеуіңіз керек?",
            answer: "Focus on 'Support in hard times': reach out gently, let them know you are there without pressuring them, and check in regularly even if they don't respond immediately.",
            answerRu: "Сосредоточьтесь на «Поддержке в трудные времена»: мягко проявите инициативу, дайте понять, что вы рядом, не давя на них, и регулярно интересуйтесь их делами, даже если они не отвечают сразу.",
            answerKk: "«Қиын кездегі қолдауға» назар аударыңыз: жұмсақ байланысыңыз, қысым жасамай жанында екеніңізді білдіріңіз және олар бірден жауап бермесе де үнемі хал-жағдайын сұрап тұрыңыз.",
            hint: "Which part of the Friendship Maintenance formula is most relevant right now?",
            hintRu: "Какая часть формулы поддержания дружбы сейчас наиболее актуальна?",
            hintKk: "Достықты ұстау формуласының қай бөлігі қазір ең өзекті?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You notice two of your friends are in a conflict and both want you to pick a side. Design a plan using friendship skills to help resolve the situation without losing either friendship.",
            questionRu: "Два ваших друга в конфликте, и оба хотят, чтобы вы выбрали сторону. Разработайте план, используя навыки дружбы.",
            questionKk: "Екі досыңыз дауласып жатыр және екеуі де сіздің жақ таңдауыңызды қалайды. Достық дағдыларын қолданып жоспар жасаңыз.",
            answer: "Plan: (1) Refuse to pick sides — explain you value both friendships. (2) Listen to each friend separately using active listening. (3) Encourage them to talk directly to each other. (4) Offer to mediate if both agree. (5) Maintain regular contact with both throughout.",
            answerRu: "План: (1) Откажитесь выбирать сторону — объясните, что цените обе дружбы. (2) Выслушайте каждого друга отдельно, используя активное слушание. (3) Поощряйте их говорить напрямую друг с другом. (4) Предложите посредничество, если оба согласны. (5) Всё это время поддерживайте регулярный контакт с обоими.",
            answerKk: "Жоспар: (1) Жақ таңдаудан бас тартыңыз — екі достықты да бағалайтыныңызды түсіндіріңіз. (2) Белсенді тыңдауды қолданып, әр досыңызды жеке тыңдаңыз. (3) Оларды бір-бірімен тікелей сөйлесуге ынталандырыңыз. (4) Екеуі келіссе, делдал болуды ұсыныңыз. (5) Осы уақыт аралығында екеуімен де тұрақты байланыста болыңыз.",
            hint: "Picking a side usually makes things worse. Think about how you can help them communicate with each other.",
            hintRu: "Выбор стороны обычно ухудшает ситуацию. Подумайте, как помочь им общаться друг с другом.",
            hintKk: "Жақ таңдау әдетте жағдайды нашарлатады. Оларға бір-бірімен сөйлесуге қалай көмектесуге болатынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Handling Anger",
        titleRu: "Управление гневом",
        titleKk: "Ашуды басқару",
        content: "Anger is a normal emotion, but how we express it matters greatly. The STOP technique (Stop, Think, Options, Proceed) helps you pause before reacting impulsively. Understanding your anger triggers and physical warning signs allows you to intervene before anger escalates into harmful behavior.",
        contentRu: "Гнев — нормальная эмоция, но способ его выражения имеет большое значение. Техника СТОП (Стой, Думай, Варианты, Действуй) помогает сделать паузу перед импульсивной реакцией. Понимание триггеров гнева и физических сигналов позволяет вмешаться до эскалации.",
        contentKk: "Ашу — қалыпты эмоция, бірақ оны қалай білдіретініміз маңызды. СТОП техникасы (Тоқта, Ойлан, Нұсқалар, Әрекет ет) импульсивті реакциядан бұрын кідіруге көмектеседі. Ашу триггерлерін және дене белгілерін түсіну зиянды мінез-құлыққа дейін араласуға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "STOP Technique: Stop → Think → Options → Proceed",
            description: "A four-step method to manage anger before reacting",
            descriptionRu: "Четырёхшаговый метод управления гневом перед реакцией",
            descriptionKk: "Реакциядан бұрын ашуды басқарудың төрт қадамдық әдісі"
          },
          {
            formula: "Anger Escalation Ladder: Annoyance → Frustration → Anger → Rage",
            description: "Anger builds in stages — intervene early for best results",
            descriptionRu: "Гнев нарастает поэтапно — вмешивайтесь рано для лучшего результата",
            descriptionKk: "Ашу кезеңдермен өседі — ең жақсы нәтиже үшін ерте араласыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "A classmate makes fun of your presentation in front of the whole class. Use the STOP technique to handle your anger.",
            questionRu: "Одноклассник высмеивает вашу презентацию перед всем классом. Используйте технику СТОП для управления гневом.",
            questionKk: "Сыныптасыңыз бүкіл сынып алдында презентацияңызды мазақтайды. Ашуды басқару үшін СТОП техникасын қолданыңыз.",
            steps: [
              { en: "Stop and Think: Pause, take a deep breath. Notice your body signs (clenched fists, hot face). Think: 'Reacting angrily will make this worse and give them more attention.'", ru: "Стой и Думай: Сделайте паузу, глубоко вдохните. Заметьте сигналы тела (сжатые кулаки, горящее лицо). Подумайте: «Злая реакция только ухудшит ситуацию».", kk: "Тоқта және Ойлан: Кідіріңіз, терең тыныс алыңыз. Дене белгілерін байқаңыз (жұдырық, ыстық бет). Ойлаңыз: «Ашулану жағдайды нашарлатады»." },
              { en: "Options and Proceed: Options include (a) calmly say 'That was hurtful,' (b) talk to the teacher after class, (c) ignore and discuss later privately. Choose the option that protects your dignity without escalating conflict.", ru: "Варианты и Действуй: Варианты: (а) спокойно сказать «Это обидно», (б) поговорить с учителем после урока, (в) проигнорировать и обсудить позже. Выберите вариант, защищающий достоинство без эскалации.", kk: "Нұсқалар және Әрекет ет: Нұсқалар: (а) сабырмен «Бұл ренжітті» деу, (б) сабақтан кейін мұғаліммен сөйлесу, (в) елемей, кейін талқылау. Қайшылықты ушықтырмай абыройыңызды қорғайтын нұсқаны таңдаңыз." }
            ],
            answer: "STOP: Pause and breathe → Think about consequences → Options: speak calmly, tell teacher, or address privately later → Proceed with the option that avoids escalation.",
            answerRu: "СТОП: Сделайте паузу и подышите → Подумайте о последствиях → Варианты: спокойно высказаться, сказать учителю или обсудить позже наедине → Действуйте по варианту, который не допускает эскалации.",
            answerKk: "СТОП: Кідіріп, тыныс алыңыз → Салдары туралы ойлаңыз → Нұсқалар: сабырмен айту, мұғалімге хабарлау немесе кейін жеке талқылау → Ушықудан аулақтататын нұсқамен әрекет етіңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What do the four letters in the STOP technique stand for?",
            questionRu: "Что означают четыре буквы в технике СТОП?",
            questionKk: "СТОП техникасындағы төрт әріп нені білдіреді?",
            answer: "Stop, Think, Options, Proceed.",
            answerRu: "Стой, Думай, Варианты, Действуй.",
            answerKk: "Тоқта, Ойлан, Нұсқалар, Әрекет ет.",
            hint: "It is an acronym that guides you through managing anger step by step.",
            hintRu: "Это аббревиатура, которая пошагово помогает управлять гневом.",
            hintKk: "Бұл ашуды қадаммен басқаруға көмектесетін аббревиатура.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your younger sibling broke your favorite headphones. You feel yourself at the 'Frustration' level on the Anger Escalation Ladder. What should you do before it becomes 'Anger'?",
            questionRu: "Младший брат или сестра сломал(а) ваши любимые наушники. Вы на уровне «Раздражение». Что сделать, чтобы не дойти до «Гнева»?",
            questionKk: "Кіші бауырыңыз сүйікті құлаққаптарыңызды сындырды. Сіз «Ренжу» деңгейіндесіз. «Ашуға» жетпес үшін не істеу керек?",
            answer: "Intervene early: leave the room to cool down, take deep breaths, remind yourself it was probably an accident, then calmly explain to your sibling why you are upset and how to be more careful.",
            answerRu: "Вмешайтесь рано: выйдите из комнаты, чтобы остыть, сделайте глубокие вдохи, напомните себе, что это, вероятно, была случайность, затем спокойно объясните брату или сестре, почему вы расстроены и как быть осторожнее.",
            answerKk: "Ерте араласыңыз: сабырға келу үшін бөлмеден шығыңыз, терең тыныс алыңыз, бұл кездейсоқ болған шығар деп өзіңізге еске салыңыз, содан кейін бауырыңызға неге ренжігеніңізді және қалай абай болу керектігін сабырмен түсіндіріңіз.",
            hint: "The best time to use the STOP technique is before anger reaches the highest level.",
            hintRu: "Лучшее время для техники СТОП — до того, как гнев достигнет максимума.",
            hintKk: "СТОП техникасын қолданудың ең жақсы уақыты — ашу ең жоғары деңгейге жеткенге дейін.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare the STOP technique with simply 'counting to ten.' Which is more effective and why? Provide specific reasons using the anger escalation model.",
            questionRu: "Сравните технику СТОП с простым «счётом до десяти». Что эффективнее и почему? Используйте модель эскалации гнева.",
            questionKk: "СТОП техникасын «онға дейін санау» әдісімен салыстырыңыз. Қайсысы тиімдірек және неліктен? Ашу эскалациясы моделін қолданыңыз.",
            answer: "STOP is more effective because counting to ten only addresses the 'Stop' step — it pauses you but does not guide thinking about consequences (Think), generating alternatives (Options), or choosing an action (Proceed). The STOP technique intervenes at every stage of the escalation ladder by providing a structured decision-making process.",
            answerRu: "СТОП эффективнее, потому что счёт до десяти охватывает только шаг «Стой» — он даёт паузу, но не направляет думать о последствиях (Думай), искать альтернативы (Варианты) и выбирать действие (Действуй). Техника СТОП вмешивается на каждой ступени лестницы эскалации, предоставляя структурированный процесс принятия решений.",
            answerKk: "СТОП тиімдірек, өйткені онға дейін санау тек «Тоқта» қадамын ғана қамтиды — ол кідіртеді, бірақ салдары туралы ойлауға (Ойлан), баламалар табуға (Нұсқалар) немесе әрекет таңдауға (Әрекет ет) бағыттамайды. СТОП техникасы эскалация баспалдағының әр сатысында құрылымдалған шешім қабылдау процесін ұсынып араласады.",
            hint: "Think about what happens after you finish counting to ten — do you have a plan?",
            hintRu: "Подумайте, что происходит после счёта до десяти — есть ли у вас план?",
            hintKk: "Онға дейін санағаннан кейін не болатынын ойлаңыз — жоспарыңыз бар ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Self-Esteem",
        titleRu: "Самооценка",
        titleKk: "Өзін-өзі бағалау",
        content: "Self-esteem is how you value and perceive yourself. Healthy self-esteem means recognizing your strengths while accepting your weaknesses. It is built through accomplishments, positive self-talk, and supportive relationships. Low self-esteem often comes from constant comparison to others or negative inner dialogue.",
        contentRu: "Самооценка — это то, как вы цените и воспринимаете себя. Здоровая самооценка означает признание своих сильных сторон при принятии слабых. Она строится через достижения, позитивный внутренний диалог и поддерживающие отношения. Низкая самооценка часто возникает из-за постоянного сравнения с другими.",
        contentKk: "Өзін-өзі бағалау — өзіңізді қалай бағалайтыныңыз. Сау өзін-өзі бағалау күшті жақтарыңызды мойындай отырып, әлсіз жақтарыңызды қабылдауды білдіреді. Ол жетістіктер, позитивті ішкі диалог және қолдаушы қарым-қатынастар арқылы қалыптасады.",
        keyFormulas: [
          {
            formula: "Self-Esteem = Achievements ÷ Expectations (William James)",
            description: "Your self-esteem depends on the gap between what you achieve and what you expect",
            descriptionRu: "Ваша самооценка зависит от разрыва между достижениями и ожиданиями",
            descriptionKk: "Өзін-өзі бағалау жетістіктер мен күтулер арасындағы алшақтыққа байланысты"
          },
          {
            formula: "Positive Self-Talk: Replace 'I can't' with 'I can't yet'",
            description: "Reframing negative thoughts into growth-oriented statements",
            descriptionRu: "Переформулирование негативных мыслей в ориентированные на рост утверждения",
            descriptionKk: "Теріс ойларды өсуге бағытталған мәлімдемелерге қайта құру"
          }
        ],
        solvedExamples: [
          {
            question: "Dana always compares her grades to the top student and feels bad about herself, even though she improved from a C to a B. How can she improve her self-esteem using James's formula?",
            questionRu: "Дана всегда сравнивает свои оценки с лучшим учеником и чувствует себя плохо, хотя улучшила оценку с C до B. Как ей повысить самооценку по формуле Джеймса?",
            questionKk: "Дана үнемі бағаларын үздік оқушымен салыстырып, өзін жаман сезінеді, бірақ C-ден B-ге көтерілді. Джеймс формуласы бойынша өзін-өзі бағалауды қалай жақсартуға болады?",
            steps: [
              { en: "Apply James's formula: Dana's achievement improved (C→B), but her expectation is to match the top student (A+). The gap between achievement and expectation is large, so self-esteem feels low.", ru: "Применяем формулу Джеймса: Достижения Даны улучшились (C→B), но ожидание — догнать лучшего ученика (A+). Большой разрыв снижает самооценку.", kk: "Джеймс формуласын қолданыңыз: Дананың жетістігі жақсарды (C→B), бірақ күтуі — үздік оқушыға жету (A+). Үлкен алшақтық өзін-өзі бағалауды төмендетеді." },
              { en: "Solution: Adjust expectations to be self-referential — compare to her own past performance, not others. Her self-esteem rises because her achievement (B) now exceeds her adjusted expectation (better than C).", ru: "Решение: Скорректировать ожидания на себя — сравнивать с собственным прогрессом, а не с другими. Самооценка растёт, потому что достижение (B) превышает скорректированное ожидание.", kk: "Шешім: Күтулерді өзіне бағыттау — басқалармен емес, өз прогресімен салыстыру. Жетістік (B) түзетілген күтуден (C-ден жақсы) асып түсетіндіктен, өзін-өзі бағалау көтеріледі." }
            ],
            answer: "By adjusting expectations to focus on personal progress (C→B improvement) instead of comparing to others, Dana's self-esteem improves because her achievements exceed her self-referential expectations.",
            answerRu: "Скорректировав ожидания так, чтобы фокусироваться на личном прогрессе (улучшение с C до B), а не на сравнении с другими, Дана повышает самооценку, потому что её достижения превышают её самооориентированные ожидания.",
            answerKk: "Күтулерді басқалармен салыстыруға емес, жеке прогреске (C→B жақсаруы) бағыттап түзету арқылы Дана өзін-өзі бағалауын жақсартады, өйткені оның жетістіктері өзіне бағытталған күтулерден асып түседі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "According to William James, what two factors determine self-esteem?",
            questionRu: "Согласно Уильяму Джеймсу, какие два фактора определяют самооценку?",
            questionKk: "Уильям Джеймс бойынша, өзін-өзі бағалауды қандай екі фактор анықтайды?",
            answer: "Achievements and Expectations. Self-esteem = Achievements ÷ Expectations.",
            answerRu: "Достижения и ожидания. Самооценка = Достижения ÷ Ожидания.",
            answerKk: "Жетістіктер мен күтулер. Өзін-өзі бағалау = Жетістіктер ÷ Күтулер.",
            hint: "It is a ratio — one thing divided by another.",
            hintRu: "Это соотношение — одно делится на другое.",
            hintKk: "Бұл қатынас — бір нәрсе екіншіге бөлінеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite these three negative self-talk statements into positive ones: 'I'm terrible at math,' 'Nobody likes me,' 'I always fail.'",
            questionRu: "Перепишите три негативных утверждения в позитивные: «Я ужасен в математике», «Никто меня не любит», «Я всегда терплю неудачу».",
            questionKk: "Үш теріс мәлімдемені позитивке қайта жазыңыз: «Мен математикадан нашармын», «Мені ешкім ұнатпайды», «Мен әрқашан сәтсіздікке ұшыраймын».",
            answer: "'I'm still learning math and improving,' 'I have people who care about me and I can build new connections,' 'I learn from setbacks and keep trying.'",
            answerRu: "«Я ещё учусь математике и становлюсь лучше», «У меня есть люди, которым я не безразличен, и я могу строить новые связи», «Я учусь на неудачах и продолжаю пробовать».",
            answerKk: "«Мен математиканы әлі үйреніп жатырмын және жақсарып келемін», «Мені қадірлейтін адамдар бар және мен жаңа байланыстар орната аламын», «Мен сәтсіздіктерден үйреніп, әрекеттенуді жалғастырамын».",
            hint: "Add 'yet' or 'still learning' to transform fixed statements into growth statements.",
            hintRu: "Добавьте «пока» или «ещё учусь», чтобы превратить фиксированные утверждения в утверждения роста.",
            hintKk: "Тіркелген мәлімдемелерді өсу мәлімдемелеріне айналдыру үшін «әлі» немесе «үйреніп жатырмын» қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student has high achievements but still has low self-esteem. Using James's formula, explain how this is possible and suggest two strategies to fix it.",
            questionRu: "У ученика высокие достижения, но низкая самооценка. Используя формулу Джеймса, объясните, как это возможно, и предложите две стратегии.",
            questionKk: "Оқушының жетістіктері жоғары, бірақ өзін-өзі бағалауы төмен. Джеймс формуласын қолданып, бұл қалай мүмкін екенін түсіндіріңіз және екі стратегия ұсыныңыз.",
            answer: "If expectations are extremely high (e.g., perfectionism), even high achievements produce a low ratio. Strategies: (1) Set realistic, incremental goals instead of perfection. (2) Practice self-compassion — celebrate what you have achieved before raising the bar.",
            answerRu: "Если ожидания чрезвычайно высоки (например, перфекционизм), даже высокие достижения дают низкое соотношение. Стратегии: (1) Ставьте реалистичные, постепенные цели вместо идеала. (2) Практикуйте самосострадание — отмечайте достигнутое, прежде чем поднимать планку.",
            answerKk: "Күтулер өте жоғары болса (мысалы, перфекционизм), тіпті жоғары жетістіктердің өзі төмен қатынас береді. Стратегиялар: (1) Мінсіздіктің орнына шынайы, кезеңді мақсаттар қойыңыз. (2) Өзіңізге мейірімді болуды жаттықтырыңыз — белгіні көтермес бұрын жеткен жетістігіңізді бағалаңыз.",
            hint: "What happens to the ratio when the denominator (expectations) is very, very large?",
            hintRu: "Что происходит с соотношением, когда знаменатель (ожидания) очень велик?",
            hintKk: "Бөлгіш (күтулер) өте үлкен болғанда қатынасқа не болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Dealing with Bullying",
        titleRu: "Борьба с буллингом",
        titleKk: "Буллингпен күресу",
        content: "Bullying is repeated aggressive behavior intended to harm, intimidate, or control another person. It can be physical, verbal, social, or cyber. The Upstander Model encourages witnesses to safely intervene rather than remain passive bystanders. Knowing how to respond — whether as a target or witness — is a critical life skill.",
        contentRu: "Буллинг — это повторяющееся агрессивное поведение с целью причинить вред, запугать или контролировать другого. Он бывает физическим, вербальным, социальным или кибер. Модель Заступника поощряет свидетелей безопасно вмешиваться, а не оставаться пассивными наблюдателями.",
        contentKk: "Буллинг — басқа адамға зиян келтіруге, қорқытуға немесе бақылауға бағытталған қайталанатын агрессивті мінез-құлық. Ол физикалық, вербалды, әлеуметтік немесе кибер болуы мүмкін. Қорғаушы моделі куәгерлерді пассивті бақылаушы болмай, қауіпсіз араласуға ынталандырады.",
        keyFormulas: [
          {
            formula: "Types of Bullying: Physical, Verbal, Social (exclusion/rumors), Cyber",
            description: "The four main categories of bullying behavior",
            descriptionRu: "Четыре основных категории буллинга",
            descriptionKk: "Буллинг мінез-құлқының төрт негізгі санаты"
          },
          {
            formula: "Upstander Model: Notice → Assess safety → Act (support victim, report, distract bully)",
            description: "How to safely intervene when witnessing bullying",
            descriptionRu: "Как безопасно вмешаться, став свидетелем буллинга",
            descriptionKk: "Буллингке куә болғанда қауіпсіз араласу жолы"
          }
        ],
        solvedExamples: [
          {
            question: "You see a group of students mocking a classmate's accent in the hallway. Use the Upstander Model to decide what to do.",
            questionRu: "Вы видите, как группа учеников высмеивает акцент одноклассника в коридоре. Используйте Модель Заступника.",
            questionKk: "Дәлізде оқушылар тобы сыныптасының акцентін мазақтап жатқанын көресіз. Қорғаушы моделін қолданыңыз.",
            steps: [
              { en: "Notice and Assess: You see verbal bullying (mocking accent). Assess safety — the group is not physically threatening, so you can intervene.", ru: "Заметьте и оцените: Вы видите вербальный буллинг (насмешка над акцентом). Оцените безопасность — группа не угрожает физически, можно вмешаться.", kk: "Байқаңыз және бағалаңыз: Вербалды буллинг көресіз (акцентті мазақтау). Қауіпсіздікті бағалаңыз — топ физикалық қауіп төндірмейді, араласуға болады." },
              { en: "Act: Walk up to the victim and start a normal conversation ('Hey, did you finish the homework?') to distract the bullies. Later, privately ask the victim if they are okay and suggest reporting to a teacher together.", ru: "Действуйте: Подойдите к жертве и начните обычный разговор («Привет, ты сделал домашку?»), чтобы отвлечь обидчиков. Потом спросите жертву, всё ли хорошо, и предложите вместе обратиться к учителю.", kk: "Әрекет етіңіз: Құрбанға барып, қалыпты әңгіме бастаңыз («Сәлем, үй тапсырмасын аяқтадың ба?»). Кейін құрбаннан жағдайын сұрап, мұғалімге бірге хабарлауды ұсыныңыз." }
            ],
            answer: "Notice the verbal bullying → Assess it is safe to act → Act by distracting with conversation, then privately support the victim and report together.",
            answerRu: "Заметить вербальный буллинг → Оценить, что действовать безопасно → Действовать: отвлечь разговором, затем поддержать жертву наедине и вместе сообщить о случившемся.",
            answerKk: "Вербалды буллингті байқаңыз → Әрекет етудің қауіпсіз екенін бағалаңыз → Әңгімемен назарын аудартып әрекет етіңіз, содан кейін құрбанға жеке қолдау көрсетіп, бірге хабарлаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the four types of bullying.",
            questionRu: "Назовите четыре типа буллинга.",
            questionKk: "Буллингтің төрт түрін атаңыз.",
            answer: "Physical, Verbal, Social (exclusion/rumors), and Cyber.",
            answerRu: "Физический, вербальный, социальный (изоляция/слухи) и кибер.",
            answerKk: "Физикалық, вербалды, әлеуметтік (шеттету/қауесет) және кибер.",
            hint: "Think about bullying that involves bodies, words, social groups, and technology.",
            hintRu: "Подумайте о буллинге через тело, слова, социальные группы и технологии.",
            hintKk: "Дене, сөз, әлеуметтік топтар және технология арқылы буллингті ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student is being cyberbullied through anonymous messages on social media. Explain why this is particularly harmful and suggest two actions the student can take.",
            questionRu: "Ученик подвергается кибербуллингу через анонимные сообщения в соцсетях. Объясните, почему это особенно вредно, и предложите два действия.",
            questionKk: "Оқушы әлеуметтік желілердегі анонимді хабарламалар арқылы кибербуллингке ұшырайды. Бұл неліктен ерекше зиянды екенін түсіндіріңіз және екі іс-әрекет ұсыныңыз.",
            answer: "Cyberbullying is especially harmful because it follows the victim everywhere (24/7 access), the anonymity emboldens bullies, and the audience is potentially unlimited. Actions: (1) Save screenshots as evidence. (2) Report to a trusted adult and the platform.",
            answerRu: "Кибербуллинг особенно вреден, потому что он следует за жертвой повсюду (доступ 24/7), анонимность придаёт обидчикам смелости, а аудитория потенциально неограничена. Действия: (1) Сохранить скриншоты как доказательство. (2) Сообщить доверенному взрослому и администрации платформы.",
            answerKk: "Кибербуллинг ерекше зиянды, өйткені ол құрбанға әр жерде ілеседі (24/7 қолжетімділік), анонимділік обидчиктерге батылдылық береді және аудитория әлеуетті шексіз. Іс-әрекеттер: (1) Скриншоттарды дәлел ретінде сақтаңыз. (2) Сенімді ересек адамға және платформа әкімшілігіне хабарлаңыз.",
            hint: "Think about what makes online bullying different from in-person bullying.",
            hintRu: "Подумайте, чем онлайн-буллинг отличается от буллинга лицом к лицу.",
            hintKk: "Онлайн буллингтің жеке буллингтен несімен ерекшеленетінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a school-wide anti-bullying program using the Upstander Model. Include at least three specific initiatives and explain how each addresses a different type of bullying.",
            questionRu: "Разработайте школьную программу против буллинга на основе Модели Заступника. Включите минимум три инициативы для разных типов буллинга.",
            questionKk: "Қорғаушы моделін қолданып, мектеп деңгейіндегі буллингке қарсы бағдарлама жасаңыз. Буллингтің әртүрлі түрлеріне арналған кемінде үш бастама қосыңыз.",
            answer: "Program: (1) Upstander training workshops for all students — teaches safe intervention for physical and verbal bullying. (2) Anonymous reporting app — addresses cyberbullying by giving targets a safe way to report. (3) Inclusion campaigns and buddy systems — combats social bullying by ensuring no student is isolated. Each initiative creates a culture where bystanders become upstanders.",
            answerRu: "Программа: (1) Тренинги заступников для всех учеников — учат безопасному вмешательству при физическом и вербальном буллинге. (2) Анонимное приложение для жалоб — решает проблему кибербуллинга, давая жертвам безопасный способ сообщить. (3) Кампании вовлечения и система напарников — борются с социальным буллингом, чтобы ни один ученик не был изолирован. Каждая инициатива создаёт культуру, где наблюдатели становятся заступниками.",
            answerKk: "Бағдарлама: (1) Барлық оқушыларға арналған қорғаушылар тренингтері — физикалық және вербалды буллинг кезінде қауіпсіз араласуды үйретеді. (2) Анонимді хабарлау қосымшасы — құрбандарға хабарлаудың қауіпсіз жолын бере отырып, кибербуллинг мәселесін шешеді. (3) Инклюзия науқандары мен серіктестік жүйесі — бірде-бір оқушының оқшауланбауын қамтамасыз етіп, әлеуметтік буллингпен күреседі. Әр бастама бақылаушылардың қорғаушыға айналу мәдениетін қалыптастырады.",
            hint: "Match each initiative to a specific type of bullying: physical/verbal, cyber, and social.",
            hintRu: "Сопоставьте каждую инициативу с типом буллинга: физический/вербальный, кибер, социальный.",
            hintKk: "Әр бастаманы буллинг түрімен сәйкестендіріңіз: физикалық/вербалды, кибер, әлеуметтік.",
            xp: 20
          }
        ]
      },
      {
        title: "Gratitude",
        titleRu: "Благодарность",
        titleKk: "Ризашылық",
        content: "Gratitude is the practice of recognizing and appreciating the good things in your life. Research by psychologist Robert Emmons shows that regularly practicing gratitude improves mood, strengthens relationships, and even boosts physical health. A simple daily gratitude journal can create lasting positive changes in your brain.",
        contentRu: "Благодарность — практика распознавания и оценки хорошего в жизни. Исследования психолога Роберта Эммонса показывают, что регулярная практика благодарности улучшает настроение, укрепляет отношения и даже улучшает физическое здоровье. Простой ежедневный дневник благодарности может создать устойчивые позитивные изменения в мозге.",
        contentKk: "Ризашылық — өміріңіздегі жақсы нәрселерді тану және бағалау тәжірибесі. Психолог Роберт Эммонстың зерттеулері ризашылық практикасының көңіл-күйді жақсартатынын, қарым-қатынасты нығайтатынын және тіпті физикалық денсаулықты жақсартатынын көрсетеді. Қарапайым күнделікті ризашылық күнделігі миыңызда тұрақты оң өзгерістер жасай алады.",
        keyFormulas: [
          {
            formula: "Gratitude Journal: Write 3 things you are grateful for each day",
            description: "A daily practice shown to increase happiness by up to 25%",
            descriptionRu: "Ежедневная практика, повышающая уровень счастья до 25%",
            descriptionKk: "Бақытты 25%-ға дейін арттыратын күнделікті тәжірибе"
          },
          {
            formula: "Gratitude Letter: Write and deliver a thank-you letter to someone important",
            description: "A powerful one-time exercise that boosts well-being for both writer and recipient",
            descriptionRu: "Мощное разовое упражнение, повышающее благополучие и пишущего, и получающего",
            descriptionKk: "Жазушы мен алушының әл-ауқатын арттыратын күшті бір реттік жаттығу"
          }
        ],
        solvedExamples: [
          {
            question: "Marat has been feeling down lately. His friend suggests trying a gratitude journal. Help Marat write his first three entries and explain why this might help.",
            questionRu: "Марат в последнее время чувствует себя подавленным. Друг предлагает попробовать дневник благодарности. Помогите Марату написать первые три записи и объясните, почему это поможет.",
            questionKk: "Марат соңғы кезде көңілсіз. Досы ризашылық күнделігін ұсынады. Маратқа алғашқы үш жазбаны жазуға көмектесіңіз және бұл неге көмектесетінін түсіндіріңіз.",
            steps: [
              { en: "Write three entries: (1) 'I am grateful for my friend who noticed I was feeling down.' (2) 'I am grateful for the warm meal my mom made.' (3) 'I am grateful that I finished my homework on time today.'", ru: "Напишите три записи: (1) «Благодарен другу, который заметил моё настроение.» (2) «Благодарен за тёплый ужин от мамы.» (3) «Благодарен, что сегодня закончил домашнее задание вовремя.»", kk: "Үш жазба жазыңыз: (1) «Көңіл-күйімді байқаған досыма ризамын.» (2) «Анамның жылы тамағы үшін ризамын.» (3) «Бүгін үй тапсырмасын уақытында аяқтағаныма ризамын.»" },
              { en: "Explain the science: Gratitude journaling shifts focus from what is going wrong to what is going right. Emmons's research shows this rewires the brain to notice more positive things over time, reducing depressive symptoms.", ru: "Объясните науку: Дневник благодарности переключает внимание с плохого на хорошее. Исследования Эммонса показывают, что это перестраивает мозг замечать больше позитивного.", kk: "Ғылымды түсіндіріңіз: Ризашылық күнделігі назарды жаманнан жақсыға ауыстырады. Эммонстың зерттеулері бұл миды уақыт өте позитивті нәрселерді байқауға қайта бағдарлайтынын көрсетеді." }
            ],
            answer: "Three entries focusing on people, basic needs, and personal accomplishments. This works because it trains the brain to scan for positives instead of negatives, improving mood over time.",
            answerRu: "Три записи, сфокусированные на людях, базовых потребностях и личных достижениях. Это работает, потому что тренирует мозг искать позитивное вместо негативного, со временем улучшая настроение.",
            answerKk: "Адамдарға, негізгі қажеттіліктерге және жеке жетістіктерге бағытталған үш жазба. Бұл жұмыс істейді, өйткені миды негативтің орнына позитивті іздеуге жаттықтырып, уақыт өте көңіл-күйді жақсартады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many things should you write in a gratitude journal each day according to the standard practice?",
            questionRu: "Сколько вещей нужно записывать в дневник благодарности ежедневно по стандартной практике?",
            questionKk: "Стандартты тәжірибе бойынша ризашылық күнделігіне күнде неше нәрсе жазу керек?",
            answer: "Three things you are grateful for each day.",
            answerRu: "Три вещи, за которые вы благодарны каждый день.",
            answerKk: "Әр күні риза болған үш нәрсе.",
            hint: "It is a small number that makes the habit easy to maintain.",
            hintRu: "Это небольшое число, которое делает привычку легко поддерживаемой.",
            hintKk: "Бұл әдетті оңай ұстауға мүмкіндік беретін шағын сан.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a short gratitude letter (2-3 sentences) to someone who has positively influenced your life. Then explain one psychological benefit of writing it.",
            questionRu: "Напишите короткое письмо благодарности (2-3 предложения) человеку, положительно повлиявшему на вашу жизнь. Затем объясните одну психологическую пользу.",
            questionKk: "Өміріңізге оң әсер еткен біреуге қысқа ризашылық хат жазыңыз (2-3 сөйлем). Содан кейін бір психологиялық пайдасын түсіндіріңіз.",
            answer: "Example: 'Dear Grandma, thank you for always listening when I need to talk. Your stories about your childhood help me see problems from a bigger perspective.' Benefit: Writing gratitude letters increases positive emotions and strengthens social bonds.",
            answerRu: "Пример: «Дорогая бабушка, спасибо, что всегда слушаешь, когда мне нужно поговорить. Твои истории о детстве помогают мне видеть проблемы в более широкой перспективе.» Польза: написание писем благодарности усиливает позитивные эмоции и укрепляет социальные связи.",
            answerKk: "Мысал: «Қымбатты әже, сөйлескім келгенде әрқашан тыңдайтыныңыз үшін рахмет. Сіздің балалық шағыңыз туралы әңгімелеріңіз мәселелерге кеңірек қарауға көмектеседі.» Пайдасы: ризашылық хаттарын жазу оң эмоцияларды арттырып, әлеуметтік байланыстарды нығайтады.",
            hint: "Think of someone who has helped you recently or has been consistently supportive.",
            hintRu: "Подумайте о том, кто недавно помог вам или постоянно поддерживает.",
            hintKk: "Жақында көмектескен немесе тұрақты қолдау көрсететін адамды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A skeptic says 'Gratitude journals are just fake positivity — they ignore real problems.' Use Emmons's research to argue why this criticism is wrong.",
            questionRu: "Скептик говорит: «Дневники благодарности — просто фальшивый позитив, игнорирующий реальные проблемы.» Используя исследования Эммонса, опровергните это.",
            questionKk: "Скептик: «Ризашылық күнделіктері жалған позитив — шынайы мәселелерді елемейді.» Эммонстың зерттеулерін қолданып, бұл сынды теріске шығарыңыз.",
            answer: "Emmons's research shows gratitude does not deny problems — it broadens perspective so people see both challenges AND good things. Participants who kept gratitude journals actually dealt with problems more effectively because they had better emotional resources. Gratitude improves resilience, not avoidance.",
            answerRu: "Исследования Эммонса показывают, что благодарность не отрицает проблемы — она расширяет перспективу, так что люди видят и трудности, и хорошее. Участники, которые вели дневники благодарности, на самом деле справлялись с проблемами эффективнее, потому что у них было больше эмоциональных ресурсов. Благодарность развивает устойчивость, а не избегание.",
            answerKk: "Эммонстың зерттеулері ризашылық мәселелерді жоққа шығармайтынын көрсетеді — ол көзқарасты кеңейтіп, адамдар қиындықтарды да, жақсы нәрселерді де көреді. Ризашылық күнделігін жүргізген қатысушылар мәселелермен шын мәнінде тиімдірек күресті, өйткені олардың эмоциялық ресурстары мол болды. Ризашылық қашып-құтылуды емес, төзімділікті жақсартады.",
            hint: "Does gratitude replace problem-solving, or does it give you more emotional energy to solve problems?",
            hintRu: "Благодарность заменяет решение проблем или даёт больше эмоциональной энергии для этого?",
            hintKk: "Ризашылық мәселелерді шешуді алмастыра ма, әлде оларды шешуге көбірек эмоциялық энергия бере ме?",
            xp: 20
          }
        ]
      },
      {
        title: "Communication in Relationships",
        titleRu: "Коммуникация в отношениях",
        titleKk: "Қарым-қатынастағы коммуникация",
        content: "Effective communication is the backbone of every healthy relationship. Using 'I' statements instead of 'You' statements reduces defensiveness and keeps conversations productive. The Gottman Ratio suggests that healthy relationships maintain at least five positive interactions for every one negative interaction.",
        contentRu: "Эффективная коммуникация — основа каждых здоровых отношений. Использование «Я»-высказываний вместо «Ты»-высказываний снижает защитную реакцию и делает разговоры продуктивными. Коэффициент Готтмана предполагает, что здоровые отношения поддерживают минимум пять позитивных взаимодействий на одно негативное.",
        contentKk: "Тиімді коммуникация — әр сау қарым-қатынастың негізі. «Мен» мәлімдемелерін «Сен» мәлімдемелерінің орнына қолдану қорғаныс реакциясын азайтады. Готтман коэффициенті сау қарым-қатынастар әр бір теріс әрекетке кемінде бес оң әрекетті ұстайтынын көрсетеді.",
        keyFormulas: [
          {
            formula: "I-Statement: 'I feel [emotion] when [situation] because [reason]'",
            description: "A communication formula that expresses feelings without blaming others",
            descriptionRu: "Формула коммуникации, выражающая чувства без обвинений",
            descriptionKk: "Басқаларды кінәламай сезімдерді білдіретін коммуникация формуласы"
          },
          {
            formula: "Gottman Ratio: 5 positive interactions : 1 negative interaction",
            description: "The minimum ratio of positive to negative interactions in healthy relationships",
            descriptionRu: "Минимальное соотношение позитивных и негативных взаимодействий в здоровых отношениях",
            descriptionKk: "Сау қарым-қатынастардағы оң және теріс әрекеттердің ең аз қатынасы"
          }
        ],
        solvedExamples: [
          {
            question: "Your sibling keeps borrowing your things without asking. Convert the accusation 'You always take my stuff!' into an I-statement.",
            questionRu: "Ваш брат/сестра берёт ваши вещи без спроса. Превратите обвинение «Ты всегда берёшь мои вещи!» в Я-высказывание.",
            questionKk: "Бауырыңыз сұрамай заттарыңызды алады. «Сен әрқашан заттарымды аласың!» деген айыптауды Мен-мәлімдемесіне айналдырыңыз.",
            steps: [
              { en: "Identify the emotion and situation: You feel frustrated (emotion) when your sibling borrows things without asking (situation) because it feels disrespectful of your belongings (reason).", ru: "Определите эмоцию и ситуацию: Вы чувствуете раздражение (эмоция), когда брат/сестра берёт вещи без спроса (ситуация), потому что это неуважение к вашим вещам (причина).", kk: "Эмоция мен жағдайды анықтаңыз: Бауырыңыз сұрамай заттарыңызды алғанда (жағдай) ренжисіз (эмоция), себебі бұл заттарыңызға құрметсіздік (себеп)." },
              { en: "Form the I-statement: 'I feel frustrated when my things are borrowed without asking because I want my belongings to be respected. Could you please ask me first?'", ru: "Сформируйте Я-высказывание: «Я чувствую раздражение, когда мои вещи берут без спроса, потому что хочу уважения к моим вещам. Можешь спрашивать?»", kk: "Мен-мәлімдемесін құрыңыз: «Заттарымды сұрамай алғанда ренжимін, себебі заттарыма құрмет күтемін. Алдымен сұрай аласың ба?»" }
            ],
            answer: "'I feel frustrated when my things are borrowed without asking because I want my belongings to be respected. Could you please ask me first?' This avoids blame and opens dialogue.",
            answerRu: "«Я злюсь, когда мои вещи берут без спроса, потому что хочу, чтобы к моим вещам относились с уважением. Пожалуйста, спрашивай меня сначала». Это позволяет избежать обвинений и открывает диалог.",
            answerKk: "«Заттарымды сұрамай алғанда ренжимін, себебі заттарыма құрмет көрсетілгенін қалаймын. Алдымен менен сұрай аласың ба?» Бұл кінәлаудан аулақтатып, диалог ашады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Fill in the I-statement template: 'I feel ___ when ___ because ___.'",
            questionRu: "Заполните шаблон Я-высказывания: «Я чувствую ___, когда ___, потому что ___».",
            questionKk: "Мен-мәлімдеме үлгісін толтырыңыз: «Мен ___ сезінемін, ___ кезде, себебі ___».",
            answer: "Example: 'I feel worried when you come home late because I care about your safety.' Any valid I-statement is acceptable.",
            answerRu: "Пример: «Я волнуюсь, когда ты приходишь домой поздно, потому что забочусь о твоей безопасности.» Подойдёт любое правильное Я-высказывание.",
            answerKk: "Мысал: «Үйге кеш келгенде алаңдаймын, себебі сенің қауіпсіздігіңе қамқорлық жасаймын.» Кез келген дұрыс Мен-мәлімдемесі қабылданады.",
            hint: "Start with an emotion, then describe the situation, then explain why it matters to you.",
            hintRu: "Начните с эмоции, затем опишите ситуацию, затем объясните, почему это важно.",
            hintKk: "Эмоциядан бастаңыз, содан кейін жағдайды сипаттаңыз, содан кейін оның маңыздылығын түсіндіріңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Using the Gottman Ratio, analyze this scenario: In one week, a couple had 3 arguments and 10 positive interactions (compliments, kind gestures, laughing together). Is this relationship in a healthy zone?",
            questionRu: "Используя коэффициент Готтмана, проанализируйте: за неделю у пары было 3 ссоры и 10 позитивных взаимодействий. Здоровая ли это зона?",
            questionKk: "Готтман коэффициентін қолданып талдаңыз: бір аптада жұптың 3 дауы және 10 оң әрекеті болды. Бұл сау аймақта ма?",
            answer: "Ratio is 10:3, which is approximately 3.3:1. This is below the healthy minimum of 5:1, so the relationship needs more positive interactions to stay healthy.",
            answerRu: "Соотношение 10:3, то есть примерно 3,3:1. Это ниже здорового минимума 5:1, поэтому отношениям нужно больше позитивных взаимодействий, чтобы оставаться здоровыми.",
            answerKk: "Қатынас 10:3, яғни шамамен 3,3:1. Бұл сау минимум 5:1-ден төмен, сондықтан қарым-қатынасты сау ұстау үшін оң әрекеттер көбірек болуы керек.",
            hint: "Divide the positive interactions by the negative ones and compare to 5:1.",
            hintRu: "Разделите позитивные взаимодействия на негативные и сравните с 5:1.",
            hintKk: "Оң әрекеттерді теріске бөліп, 5:1 мен салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some cultures consider 'I' statements to be too individualistic. How might you adapt the I-statement approach for a collectivist culture while still avoiding blame?",
            questionRu: "В некоторых культурах «Я»-высказывания считаются слишком индивидуалистичными. Как адаптировать этот подход для коллективистской культуры, избегая обвинений?",
            questionKk: "Кейбір мәдениеттер «Мен» мәлімдемелерін тым жеке санайды. Кінәлаудан аулақ бола отырып, бұл тәсілді коллективистік мәдениетке қалай бейімдейсіз?",
            answer: "Adapt by using 'We' statements: 'We might feel better if we discussed borrowing things first' or 'Our relationship is important, so I want us to communicate better about this.' This preserves the anti-blame benefit while respecting the collectivist emphasis on group harmony.",
            answerRu: "Адаптируйте, используя «Мы»-высказывания: «Нам было бы лучше, если бы мы сначала обсуждали, когда берём вещи друг друга» или «Наши отношения важны, поэтому я хочу, чтобы мы лучше общались об этом». Это сохраняет преимущество без обвинений, уважая коллективистский акцент на групповой гармонии.",
            answerKk: "«Біз» мәлімдемелерін қолданып бейімдеңіз: «Заттарды алмас бұрын талқыласақ, өзімізді жақсы сезінер едік» немесе «Біздің қарым-қатынасымыз маңызды, сондықтан осы туралы жақсырақ сөйлескенімізді қалаймын». Бұл кінәламау артықшылығын сақтай отырып, топтық үйлесімге коллективистік баса назар аударуды құрметтейді.",
            hint: "Think about replacing 'I' with 'We' or 'Our relationship' to emphasize shared goals.",
            hintRu: "Замените «Я» на «Мы» или «Наши отношения» для акцента на общих целях.",
            hintKk: "«Мен» дегенді «Біз» немесе «Біздің қарым-қатынасымыз» деп ауыстырып, ортақ мақсаттарға баса назар аударыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Respecting Differences",
        titleRu: "Уважение различий",
        titleKk: "Айырмашылықтарды құрметтеу",
        content: "Every person brings a unique combination of culture, beliefs, abilities, and experiences. Respecting differences means valuing diversity rather than fearing it. The Cultural Iceberg Model shows that visible differences like language and dress are only the surface — deeper values, beliefs, and assumptions lie beneath.",
        contentRu: "Каждый человек привносит уникальное сочетание культуры, убеждений, способностей и опыта. Уважение различий означает ценить разнообразие, а не бояться его. Модель Культурного айсберга показывает, что видимые различия — лишь поверхность, а глубинные ценности и убеждения скрыты под ней.",
        contentKk: "Әр адам мәдениет, сенім, қабілет және тәжірибенің бірегей үйлесімін ұсынады. Айырмашылықтарды құрметтеу — әртүрлілікті қорқудан емес, бағалауды білдіреді. Мәдени айсберг моделі тіл мен киім сияқты көрінетін айырмашылықтар тек бетті көрсетеді — терең құндылықтар мен сенімдер астында жатыр.",
        keyFormulas: [
          {
            formula: "Cultural Iceberg: Visible (10%) — language, food, dress | Hidden (90%) — values, beliefs, norms",
            description: "Most cultural differences are invisible and lie below the surface",
            descriptionRu: "Большинство культурных различий невидимы и скрыты под поверхностью",
            descriptionKk: "Мәдени айырмашылықтардың көпшілігі көрінбейді және бет астында жатыр"
          },
          {
            formula: "Perspective-Taking: Pause → Ask → Listen → Learn",
            description: "A process for understanding someone from a different background",
            descriptionRu: "Процесс понимания человека из другой среды",
            descriptionKk: "Басқа ортадағы адамды түсіну процесі"
          }
        ],
        solvedExamples: [
          {
            question: "A new student from another country eats unfamiliar food at lunch and some classmates laugh. Use the Cultural Iceberg Model to explain why the laughter is harmful and what lies beneath the surface.",
            questionRu: "Новый ученик из другой страны ест незнакомую еду, и одноклассники смеются. Используя модель Культурного айсберга, объясните, почему смех вреден.",
            questionKk: "Басқа елден келген жаңа оқушы бейтаныс тамақ жейді, сыныптастары күледі. Мәдени айсберг моделін қолданып, күлкі неге зиянды екенін түсіндіріңіз.",
            steps: [
              { en: "Identify the visible element: Food is a visible part of culture (above the waterline). Laughing at it disrespects the surface-level expression of a much deeper identity.", ru: "Определите видимый элемент: Еда — видимая часть культуры (над ватерлинией). Смех над ней неуважает поверхностное выражение гораздо более глубокой идентичности.", kk: "Көрінетін элементті анықтаңыз: Тамақ — мәдениеттің көрінетін бөлігі (су сызығынан жоғары). Оған күлу әлдеқайда терең сәйкестіктің бет көрінісін құрметтемеу." },
              { en: "Explain what is beneath: The food connects to family traditions, values about health and community, and the student's sense of home and belonging. Laughing at food means laughing at their identity and heritage.", ru: "Объясните скрытое: Еда связана с семейными традициями, ценностями здоровья и общности, чувством дома. Смех над едой — это смех над их идентичностью.", kk: "Астындағыны түсіндіріңіз: Тамақ отбасы дәстүрлеріне, денсаулық пен қоғамдастық құндылықтарына және үй сезіміне байланысты. Тамаққа күлу — олардың бірегейлігіне күлу." }
            ],
            answer: "Food (visible, 10%) connects to deep values of family, tradition, and belonging (hidden, 90%). Laughing at food disrespects the entire cultural identity beneath the surface.",
            answerRu: "Еда (видимое, 10%) связана с глубинными ценностями семьи, традиций и принадлежности (скрытое, 90%). Смех над едой проявляет неуважение ко всей культурной идентичности, скрытой под поверхностью.",
            answerKk: "Тамақ (көрінетін, 10%) отбасы, дәстүр және өз орнына тиесілілік терең құндылықтарына байланысты (жасырын, 90%). Тамаққа күлу — бет астындағы бүкіл мәдени бірегейлікті құрметтемеу."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "In the Cultural Iceberg Model, what percentage of cultural differences is visible versus hidden?",
            questionRu: "В модели Культурного айсберга какой процент культурных различий виден и какой скрыт?",
            questionKk: "Мәдени айсберг моделінде мәдени айырмашылықтардың қанша пайызы көрінеді және қанша пайызы жасырын?",
            answer: "About 10% is visible (language, food, dress) and 90% is hidden (values, beliefs, norms).",
            answerRu: "Около 10% видимо (язык, еда, одежда), а 90% скрыто (ценности, убеждения, нормы).",
            answerKk: "Шамамен 10%-ы көрінеді (тіл, тамақ, киім), ал 90%-ы жасырын (құндылықтар, сенімдер, нормалар).",
            hint: "Think of an iceberg — how much is above water versus below?",
            hintRu: "Подумайте об айсберге — сколько над водой и сколько под водой?",
            hintKk: "Айсбергті ойлаңыз — судың үстінде қаншасы, астында қаншасы?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give two examples of 'visible' cultural elements and two examples of 'hidden' cultural elements from the Iceberg Model.",
            questionRu: "Приведите два примера «видимых» и два примера «скрытых» культурных элементов из модели Айсберга.",
            questionKk: "Айсберг моделінен «көрінетін» мәдени элементтердің екі мысалын және «жасырын» элементтердің екі мысалын келтіріңіз.",
            answer: "Visible: traditional clothing, spoken language. Hidden: attitudes toward authority, concepts of personal space.",
            answerRu: "Видимое: традиционная одежда, разговорный язык. Скрытое: отношение к авторитету, представления о личном пространстве.",
            answerKk: "Көрінетін: дәстүрлі киім, сөйлеу тілі. Жасырын: билікке деген көзқарас, жеке кеңістік туралы түсінік.",
            hint: "Visible means you can see or hear it. Hidden means you can only discover it through deeper interaction.",
            hintRu: "Видимое можно увидеть или услышать. Скрытое обнаруживается только через глубокое общение.",
            hintKk: "Көрінетінді көруге немесе естуге болады. Жасырынды тек терең қарым-қатынас арқылы ашуға болады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Two students from different cultures have a disagreement about personal space — one stands very close while talking, the other feels uncomfortable. Analyze this using the Cultural Iceberg Model and propose a resolution.",
            questionRu: "Два ученика из разных культур спорят о личном пространстве — один стоит близко, другой чувствует дискомфорт. Проанализируйте по модели Айсберга и предложите решение.",
            questionKk: "Екі оқушы жеке кеңістік туралы дауласады — біреуі жақын тұрады, екіншісі ыңғайсыз сезінеді. Айсберг моделі бойынша талдаңыз және шешім ұсыныңыз.",
            answer: "Personal space is a hidden cultural element (below the waterline). In some cultures, close proximity shows warmth and trust; in others, it feels invasive. Resolution: Both students learn about each other's cultural norms through perspective-taking (Pause, Ask, Listen, Learn), then agree on a comfortable middle ground.",
            answerRu: "Личное пространство — скрытый культурный элемент (под ватерлинией). В одних культурах близкое расстояние показывает теплоту и доверие; в других — ощущается как вторжение. Решение: оба ученика узнают культурные нормы друг друга через принятие перспективы (Пауза, Спросить, Выслушать, Узнать), затем находят комфортную золотую середину.",
            answerKk: "Жеке кеңістік — жасырын мәдени элемент (су сызығынан төмен). Кейбір мәдениеттерде жақын тұру жылылық пен сенімді білдіреді; басқаларында ол баса-көктеу сияқты сезіледі. Шешім: екі оқушы көзқарасты қабылдау арқылы (Тоқта, Сұра, Тыңда, Үйрен) бір-бірінің мәдени нормаларын үйренеді, содан кейін ыңғайлы ортақ шешімге келеді.",
            hint: "Is personal space a visible or hidden cultural element? What deeper value does each student's preference reflect?",
            hintRu: "Личное пространство — видимый или скрытый культурный элемент? Какую глубинную ценность отражает предпочтение каждого?",
            hintKk: "Жеке кеңістік көрінетін немесе жасырын мәдени элемент пе? Әр оқушының қалауы қандай терең құндылықты көрсетеді?",
            xp: 20
          }
        ]
      },
      {
        title: "Mindfulness",
        titleRu: "Осознанность",
        titleKk: "Саналылық",
        content: "Mindfulness is the practice of paying full attention to the present moment without judgment. Research by Jon Kabat-Zinn shows that mindfulness reduces stress, improves focus, and enhances emotional regulation. Even five minutes of daily mindful breathing can measurably change brain activity and reduce anxiety.",
        contentRu: "Осознанность — практика полного внимания к настоящему моменту без осуждения. Исследования Джона Кабат-Зинна показывают, что осознанность снижает стресс, улучшает концентрацию и усиливает эмоциональную регуляцию. Даже пять минут осознанного дыхания в день заметно меняют активность мозга.",
        contentKk: "Саналылық — сынсыз қазіргі сәтке толық назар аудару тәжірибесі. Джон Кабат-Зинннің зерттеулері саналылықтың стрессті азайтатынын, зейінді жақсартатынын және эмоциялық реттеуді күшейтетінін көрсетеді. Күніне бес минут саналы тыныс алу ми белсенділігін өзгертеді.",
        keyFormulas: [
          {
            formula: "5-4-3-2-1 Grounding: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste",
            description: "A sensory technique to bring attention back to the present moment",
            descriptionRu: "Сенсорная техника для возвращения внимания к настоящему моменту",
            descriptionKk: "Назарды қазіргі сәтке қайтарудың сенсорлық техникасы"
          },
          {
            formula: "Mindful Breathing: Inhale 4 counts → Hold 4 counts → Exhale 4 counts",
            description: "A box breathing pattern that activates the calm response in your nervous system",
            descriptionRu: "Паттерн дыхания, активирующий реакцию спокойствия в нервной системе",
            descriptionKk: "Жүйке жүйесіндегі тыныштық реакциясын іске қосатын тыныс алу үлгісі"
          }
        ],
        solvedExamples: [
          {
            question: "You are about to take a big exam and feel panicked. Use the 5-4-3-2-1 grounding technique to calm yourself.",
            questionRu: "Вы собираетесь сдавать важный экзамен и чувствуете панику. Используйте технику заземления 5-4-3-2-1.",
            questionKk: "Үлкен емтиханға кіргелі жатырсыз және дүр сілкінесіз. 5-4-3-2-1 жерге тұру техникасын қолданыңыз.",
            steps: [
              { en: "Engage your senses: See — desk, pen, clock, window, door. Touch — the smoothness of the desk, your shirt fabric, the chair seat, the pen in your hand. Hear — the clock ticking, someone coughing, the air conditioner.", ru: "Задействуйте чувства: Вижу — парту, ручку, часы, окно, дверь. Касаюсь — гладкой парты, ткани рубашки, стула, ручки. Слышу — тиканье часов, чей-то кашель, кондиционер.", kk: "Сезімдеріңізді қосыңыз: Көремін — үстел, қалам, сағат, терезе, есік. Ұстаймын — тегіс үстел, көйлек матасы, орындық, қалам. Естимін — сағат тықылы, біреудің жөтелі, кондиционер." },
              { en: "Continue: Smell — two things like the room's air freshener and your eraser. Taste — one thing like the mint gum you chewed earlier. This grounds you in the present and interrupts the panic spiral.", ru: "Продолжите: Запах — освежитель воздуха и ластик. Вкус — мятная жвачка. Это заземляет вас и прерывает спираль паники.", kk: "Жалғастырыңыз: Иіс — бөлменің хош иісі мен өшіргіш. Дәм — жалбыз сағыз. Бұл сізді қазіргіге бекітеді және дүрлігу спиралін тоқтатады." }
            ],
            answer: "By systematically engaging all five senses (5 see, 4 touch, 3 hear, 2 smell, 1 taste), you anchor your mind to the present moment and break the panic cycle.",
            answerRu: "Систематически задействуя все пять чувств (5 вижу, 4 касаюсь, 3 слышу, 2 ощущаю запах, 1 ощущаю вкус), вы закрепляете разум в настоящем моменте и прерываете цикл паники.",
            answerKk: "Бес сезімнің барлығын жүйелі түрде қоса отырып (5 көремін, 4 ұстаймын, 3 естимін, 2 иіс сеземін, 1 дәм сеземін), ойыңызды қазіргі сәтке бекітіп, дүрлігу циклін үзесіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "List the five senses used in the 5-4-3-2-1 grounding technique and how many items you identify for each.",
            questionRu: "Перечислите пять чувств техники 5-4-3-2-1 и количество элементов для каждого.",
            questionKk: "5-4-3-2-1 техникасында қолданылатын бес сезімді және әрқайсысы үшін неше элемент анықтайтыныңызды атаңыз.",
            answer: "See (5 items), Touch (4 items), Hear (3 items), Smell (2 items), Taste (1 item).",
            answerRu: "Зрение (5 элементов), осязание (4 элемента), слух (3 элемента), обоняние (2 элемента), вкус (1 элемент).",
            answerKk: "Көру (5 элемент), ұстау (4 элемент), есту (3 элемент), иіс сезу (2 элемент), дәм сезу (1 элемент).",
            hint: "The numbers count down from 5 to 1, each matching a different sense.",
            hintRu: "Числа уменьшаются от 5 до 1, каждое соответствует чувству.",
            hintKk: "Сандар 5-тен 1-ге дейін кемиді, әрқайсысы әр сезімге сәйкес.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Explain the difference between mindfulness and relaxation. Are they the same thing? Why or why not?",
            questionRu: "Объясните разницу между осознанностью и релаксацией. Это одно и то же? Почему?",
            questionKk: "Саналылық пен релаксацияның айырмашылығын түсіндіріңіз. Бұл бір нәрсе ме? Неліктен?",
            answer: "They are not the same. Relaxation aims to feel calm. Mindfulness aims to observe the present moment without judgment — you might notice stress, pain, or discomfort and simply observe it without trying to change it. Mindfulness often leads to relaxation, but that is a side effect, not the goal.",
            answerRu: "Это не одно и то же. Релаксация направлена на то, чтобы почувствовать спокойствие. Осознанность направлена на наблюдение настоящего момента без осуждения — вы можете заметить стресс, боль или дискомфорт и просто наблюдать их, не пытаясь изменить. Осознанность часто ведёт к релаксации, но это побочный эффект, а не цель.",
            answerKk: "Бұл бір нәрсе емес. Релаксацияның мақсаты — тыныштық сезіну. Саналылықтың мақсаты — қазіргі сәтті бағалаусыз бақылау: стресс, ауырсыну немесе ыңғайсыздықты байқап, оны өзгертуге тырыспай, жай ғана бақылай аласыз. Саналылық көбіне релаксацияға әкеледі, бірақ бұл жанама әсер, мақсат емес.",
            hint: "Can you practice mindfulness while feeling uncomfortable? Can you relax while being mindless?",
            hintRu: "Можно ли практиковать осознанность, чувствуя дискомфорт? Можно ли расслабляться неосознанно?",
            hintKk: "Ыңғайсыздық сезіне отырып саналылықты практикалай аласыз ба? Санасыз релаксация жасауға бола ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a 5-minute daily mindfulness routine for a stressed student that combines breathing and grounding techniques. Explain why each component is included.",
            questionRu: "Разработайте 5-минутную ежедневную практику осознанности для стрессового ученика, сочетающую дыхание и заземление. Объясните каждый компонент.",
            questionKk: "Стресстегі оқушы үшін тыныс алу мен жерге тұру техникаларын біріктіретін 5 минуттық күнделікті саналылық тәртібін жасаңыз. Әр компонентті түсіндіріңіз.",
            answer: "Routine: (1) 1 minute box breathing (4-4-4) — activates parasympathetic nervous system. (2) 2 minutes 5-4-3-2-1 grounding — anchors to present moment. (3) 1 minute body scan (notice sensations from head to toes without judging) — builds body awareness. (4) 1 minute gratitude thought (think of one good thing) — ends on a positive note. Each component targets a different aspect: calm body, present mind, body awareness, positive framing.",
            answerRu: "Практика: (1) 1 минута дыхания по квадрату (4-4-4) — активирует парасимпатическую нервную систему. (2) 2 минуты заземления 5-4-3-2-1 — закрепляет в настоящем моменте. (3) 1 минута сканирования тела (замечайте ощущения от головы до пальцев ног без осуждения) — развивает осознание тела. (4) 1 минута мысли благодарности (подумайте об одном хорошем) — завершает на позитивной ноте. Каждый компонент нацелен на свой аспект: спокойное тело, присутствующий ум, осознание тела, позитивный настрой.",
            answerKk: "Тәртіп: (1) 1 минут шаршылы тыныс алу (4-4-4) — парасимпатикалық жүйке жүйесін белсендіреді. (2) 2 минут 5-4-3-2-1 жерге тұру — қазіргі сәтке бекітеді. (3) 1 минут денені сканерлеу (бастан аяқ ұшына дейінгі сезімдерді бағалаусыз байқау) — дене хабардарлығын дамытады. (4) 1 минут ризашылық ойы (бір жақсы нәрсені ойлау) — позитивті нотпен аяқтайды. Әр компонент әртүрлі аспектіге бағытталған: тыныш дене, қазіргі ой, дене хабардарлығы, позитивті бағдар.",
            hint: "Think about combining breathing, sensory awareness, and positive thinking into a short sequence.",
            hintRu: "Подумайте о сочетании дыхания, сенсорного осознания и позитивного мышления в короткой последовательности.",
            hintKk: "Тыныс алу, сенсорлық хабардарлық және позитивті ойлауды қысқа ретке біріктіру туралы ойлаңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Psychology & Social Intelligence_9": {
    planetName: "Psychology & Social Intelligence",
    introduction: {
      en: "Welcome to Psychology & Social Intelligence for Grade 9! You will deepen your self-awareness, learn to regulate emotions, resist peer pressure, resolve conflicts, and build resilience through a growth mindset. These skills prepare you for the social complexities of adolescence.",
      ru: "Добро пожаловать в Психологию и социальный интеллект для 9 класса! Вы углубите самосознание, научитесь регулировать эмоции, противостоять давлению сверстников, разрешать конфликты и строить устойчивость через мышление роста. Эти навыки подготовят вас к социальным сложностям подросткового возраста."
    },
    sections: [
      {
        title: "Self-Awareness",
        titleRu: "Самосознание",
        titleKk: "Өзін-өзі тану",
        content: "Self-awareness is the ability to accurately recognize your own emotions, thoughts, and values, and understand how they influence your behavior. Daniel Goleman identifies it as the foundation of emotional intelligence. The Johari Window model helps you see what you know about yourself versus what others see in you.",
        contentRu: "Самосознание — способность точно распознавать свои эмоции, мысли и ценности и понимать их влияние на поведение. Дэниел Гоулман определяет его как основу эмоционального интеллекта. Модель «Окно Джохари» помогает увидеть, что вы знаете о себе и что видят другие.",
        contentKk: "Өзін-өзі тану — өз эмоцияларыңызды, ойларыңызды және құндылықтарыңызды дәл тану және олардың мінез-құлқыңызға әсерін түсіну қабілеті. Дэниел Гоулман оны эмоциялық интеллекттің негізі деп анықтайды. Джохари терезесі моделі өзіңіз туралы не білетініңізді және басқалар не көретінін көруге көмектеседі.",
        keyFormulas: [
          {
            formula: "Johari Window: Open (known to self & others), Blind (known to others only), Hidden (known to self only), Unknown",
            description: "A model for understanding self-awareness through four quadrants",
            descriptionRu: "Модель понимания самосознания через четыре квадранта",
            descriptionKk: "Өзін-өзі тануды төрт квадрант арқылы түсіну моделі"
          },
          {
            formula: "Self-Reflection Loop: Experience → Observe → Analyze → Adjust",
            description: "A cyclical process for building deeper self-awareness over time",
            descriptionRu: "Циклический процесс для углубления самосознания со временем",
            descriptionKk: "Уақыт өте өзін-өзі тануды тереңдетудің циклдік процесі"
          }
        ],
        solvedExamples: [
          {
            question: "Amir thinks he is a great listener, but his friends say he always interrupts. Use the Johari Window to explain this discrepancy.",
            questionRu: "Амир считает себя отличным слушателем, но друзья говорят, что он всегда перебивает. Объясните это с помощью Окна Джохари.",
            questionKk: "Амір өзін тамаша тыңдаушы деп санайды, бірақ достары оның әрқашан сөзін бөлетінін айтады. Джохари терезесі арқылы түсіндіріңіз.",
            steps: [
              { en: "Identify the quadrant: Amir's interrupting habit is in his Blind Spot — known to others but not to himself. He genuinely believes he listens well.", ru: "Определите квадрант: Привычка Амира перебивать — в его Слепой зоне: другие видят, а он нет. Он искренне верит, что хорошо слушает.", kk: "Квадрантты анықтаңыз: Амірдің сөз бөлу әдеті оның Соқыр аймағында — басқалар көреді, бірақ ол көрмейді." },
              { en: "Solution: Amir needs feedback to move this trait from Blind to Open. He could ask friends to signal when he interrupts, then use the Self-Reflection Loop to observe and adjust his behavior.", ru: "Решение: Амиру нужна обратная связь, чтобы перевести эту черту из Слепой зоны в Открытую. Он может попросить друзей сигнализировать, когда перебивает.", kk: "Шешім: Амір бұл қасиетті Соқыр аймақтан Ашық аймаққа ауыстыру үшін кері байланыс қажет. Достарынан сөз бөлгенде белгі беруді сұрай алады." }
            ],
            answer: "The interrupting habit is in Amir's Blind Spot (known to others, not to self). He needs feedback to make it an Open trait, then use self-reflection to change the behavior.",
            answerRu: "Привычка перебивать находится в Слепой зоне Амира (известна другим, но не ему самому). Ему нужна обратная связь, чтобы сделать её Открытой чертой, а затем использовать саморефлексию, чтобы изменить поведение.",
            answerKk: "Сөз бөлу әдеті Амірдің Соқыр аймағында (басқаларға белгілі, өзіне белгісіз). Оны Ашық қасиетке айналдыру үшін оған кері байланыс қажет, содан кейін мінез-құлықты өзгерту үшін өзін-өзі бақылауды қолданады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the four quadrants of the Johari Window.",
            questionRu: "Назовите четыре квадранта Окна Джохари.",
            questionKk: "Джохари терезесінің төрт квадрантын атаңыз.",
            answer: "Open (known to self and others), Blind (known to others only), Hidden (known to self only), Unknown (known to neither).",
            answerRu: "Открытое (известно себе и другим), Слепое (известно только другим), Скрытое (известно только себе), Неизвестное (не известно никому).",
            answerKk: "Ашық (өзіне де, басқаларға да белгілі), Соқыр (тек басқаларға белгілі), Жасырын (тек өзіне белгілі), Белгісіз (ешкімге белгісіз).",
            hint: "Think about combinations of 'known to self' and 'known to others' as yes/no.",
            hintRu: "Подумайте о комбинациях «известно себе» и «известно другим» как да/нет.",
            hintKk: "«Өзіне белгілі» және «басқаларға белгілі» комбинацияларын иә/жоқ ретінде ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give one personal example for each Johari Window quadrant: Open, Blind, Hidden, and Unknown.",
            questionRu: "Приведите по одному личному примеру для каждого квадранта Окна Джохари: Открытый, Слепой, Скрытый, Неизвестный.",
            questionKk: "Джохари терезесінің әр квадрантына бір жеке мысал келтіріңіз: Ашық, Соқыр, Жасырын, Белгісіз.",
            answer: "Example: Open — I know I am friendly and others agree. Blind — I might fidget when nervous without realizing it. Hidden — I am worried about my grades but have not told anyone. Unknown — talents or reactions I have not yet discovered.",
            answerRu: "Пример: Открытое — я знаю, что я дружелюбный, и другие с этим согласны. Слепое — я могу ёрзать, когда нервничаю, не замечая этого. Скрытое — я переживаю за оценки, но никому об этом не говорил. Неизвестное — таланты или реакции, которые я ещё не открыл.",
            answerKk: "Мысал: Ашық — менің ақкөңіл екенімді білемін және басқалар да келіседі. Соқыр — алаңдаған кезде өзім байқамай орындықта қозғала беруім мүмкін. Жасырын — бағаларым үшін уайымдаймын, бірақ ешкімге айтқан жоқпын. Белгісіз — әлі ашылмаған таланттар немесе реакциялар.",
            hint: "Start with something obvious everyone knows about you, then think about what you hide.",
            hintRu: "Начните с очевидного, что все знают, затем подумайте о скрытом.",
            hintKk: "Барлығы білетін айқын нәрседен бастаңыз, содан кейін жасырын нәрсені ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "How can actively seeking feedback from others reduce your Blind Spot in the Johari Window? What are the risks and benefits of this approach?",
            questionRu: "Как активный поиск обратной связи может уменьшить вашу Слепую зону? Каковы риски и преимущества?",
            questionKk: "Басқалардан белсенді кері байланыс іздеу Джохари терезесіндегі Соқыр аймағыңызды қалай азайтады? Тәуекелдер мен пайдалар қандай?",
            answer: "Benefits: reduces blind spots, improves relationships, accelerates personal growth, builds trust. Risks: receiving harsh feedback can hurt self-esteem, some feedback may be biased or inaccurate. Mitigation: ask trusted people, be specific about what feedback you want, and process it with the Self-Reflection Loop rather than reacting immediately.",
            answerRu: "Преимущества: уменьшает слепые зоны, улучшает отношения, ускоряет личностный рост, укрепляет доверие. Риски: жёсткая обратная связь может задеть самооценку, часть отзывов может быть предвзятой или неточной. Смягчение: спрашивайте доверенных людей, уточняйте, какую именно обратную связь хотите, и обдумывайте её через Петлю саморефлексии, а не реагируйте сразу.",
            answerKk: "Пайдалары: соқыр аймақтарды азайтады, қарым-қатынасты жақсартады, жеке өсуді жылдамдатады, сенім орнатады. Тәуекелдер: қатаң кері байланыс өзін-өзі бағалауға нұқсан келтіруі мүмкін, кейбір пікірлер бейтарап болмауы немесе дәл болмауы мүмкін. Жұмсарту: сенімді адамдардан сұраңыз, қандай кері байланыс қажет екенін нақтылаңыз және бірден реакция жасамай, оны Өзін-өзі бақылау циклі арқылы талдаңыз.",
            hint: "Think about both why feedback is valuable and why it can be uncomfortable.",
            hintRu: "Подумайте, почему обратная связь ценна и почему она может быть некомфортна.",
            hintKk: "Кері байланыстың неліктен құнды және неліктен ыңғайсыз болуы мүмкін екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Emotional Regulation",
        titleRu: "Эмоциональная регуляция",
        titleKk: "Эмоциялық реттеу",
        content: "Emotional regulation is the ability to manage and modify your emotional responses to situations. James Gross's Process Model identifies five points where you can intervene: situation selection, situation modification, attentional deployment, cognitive reappraisal, and response modulation. Cognitive reappraisal — reframing how you think about a situation — is the most effective long-term strategy.",
        contentRu: "Эмоциональная регуляция — способность управлять своими эмоциональными реакциями. Процессная модель Джеймса Гросса определяет пять точек вмешательства: выбор ситуации, модификация ситуации, распределение внимания, когнитивная переоценка и модуляция реакции. Когнитивная переоценка — самая эффективная долгосрочная стратегия.",
        contentKk: "Эмоциялық реттеу — жағдайларға эмоциялық жауаптарыңызды басқару қабілеті. Джеймс Гросстың Процесс моделі араласуға болатын бес нүктені анықтайды: жағдай таңдау, жағдайды өзгерту, назарды бағыттау, когнитивті қайта бағалау және жауап модуляциясы. Когнитивті қайта бағалау ең тиімді ұзақ мерзімді стратегия.",
        keyFormulas: [
          {
            formula: "Gross's Process Model: Situation Selection → Situation Modification → Attention Deployment → Cognitive Reappraisal → Response Modulation",
            description: "Five intervention points for regulating emotions, from earliest to latest",
            descriptionRu: "Пять точек вмешательства для регуляции эмоций, от ранних к поздним",
            descriptionKk: "Эмоцияларды реттеудің бес араласу нүктесі, ертеден кешке дейін"
          },
          {
            formula: "Cognitive Reappraisal: 'This is terrible' → 'This is challenging but I can learn from it'",
            description: "Reframing a negative interpretation into a more balanced one",
            descriptionRu: "Переосмысление негативной интерпретации в более сбалансированную",
            descriptionKk: "Теріс түсіндірмені теңгерімді түсіндірмеге қайта құру"
          }
        ],
        solvedExamples: [
          {
            question: "You did not get picked for the school basketball team. Use cognitive reappraisal to regulate your emotional response.",
            questionRu: "Вас не взяли в школьную баскетбольную команду. Используйте когнитивную переоценку для регуляции эмоций.",
            questionKk: "Сізді мектеп баскетбол командасына алмады. Эмоциялық жауабыңызды реттеу үшін когнитивті қайта бағалауды қолданыңыз.",
            steps: [
              { en: "Identify the automatic thought: 'I'm not good enough' or 'I'll never make the team.' Notice the emotion: disappointment, shame, or frustration.", ru: "Определите автоматическую мысль: «Я недостаточно хорош» или «Я никогда не попаду в команду.» Заметьте эмоцию: разочарование, стыд или расстройство.", kk: "Автоматты ойды анықтаңыз: «Мен жеткіліксізбін» немесе «Мен ешқашан команданаға кірмеймін.» Эмоцияны байқаңыз: көңілсіздік, ұят немесе ренжу." },
              { en: "Reappraise: 'Not making the team this year shows me what I need to work on. I can practice specific skills and try again next season. Many professional athletes faced early rejection.' This shifts the emotion from helplessness to determination.", ru: "Переоцените: «Непопадание в команду показывает, над чем работать. Я могу тренировать навыки и попробовать снова. Многие профессиональные спортсмены сталкивались с ранним отказом.»", kk: "Қайта бағалаңыз: «Командаға кірмеу маған не үстінде жұмыс істеу керектігін көрсетеді. Дағдыларды жаттықтырып, қайта сынай аламын. Көптеген кәсіби спортшылар ерте бас тартуға тап болған.»" }
            ],
            answer: "Reappraise from 'I'm not good enough' to 'This shows me what to improve — I can practice and try again.' This shifts emotion from helplessness to determination.",
            answerRu: "Переосмыслите с «Я недостаточно хорош» на «Это показывает мне, что улучшать — я могу тренироваться и попробовать снова». Это переводит эмоцию от беспомощности к решимости.",
            answerKk: "«Мен жеткіліксізбін» деген ойды «Бұл маған нені жақсарту керектігін көрсетеді — жаттығып, қайта тырыса аламын» деп қайта бағалаңыз. Бұл эмоцияны дәрменсіздіктен табандылыққа ауыстырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is cognitive reappraisal in simple terms?",
            questionRu: "Что такое когнитивная переоценка простыми словами?",
            questionKk: "Когнитивті қайта бағалау қарапайым сөзбен не?",
            answer: "Changing how you think about a situation to change how you feel about it.",
            answerRu: "Изменение того, как вы думаете о ситуации, чтобы изменить то, что вы о ней чувствуете.",
            answerKk: "Жағдай туралы сезіміңізді өзгерту үшін ол туралы ойыңызды өзгерту.",
            hint: "It is about changing your thoughts, not the situation itself.",
            hintRu: "Речь о смене мыслей, а не самой ситуации.",
            hintKk: "Бұл жағдайдың өзін емес, ойларыңызды өзгерту туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Reappraise this thought using cognitive reappraisal: 'My presentation was a disaster — everyone thinks I'm stupid.'",
            questionRu: "Переоцените эту мысль: «Моя презентация была катастрофой — все думают, что я глупый.»",
            questionKk: "Бұл ойды қайта бағалаңыз: «Презентациям апат болды — барлығы мені ақымақ деп ойлайды.»",
            answer: "Reappraisal: 'My presentation didn't go as planned, but most people were probably focused on their own. I can learn from the specific parts that went wrong and prepare better next time. One bad presentation doesn't define my intelligence.'",
            answerRu: "Переоценка: «Моя презентация прошла не по плану, но большинство людей, вероятно, были сосредоточены на своём. Я могу сделать выводы из конкретных моментов, которые пошли не так, и лучше подготовиться в следующий раз. Одна плохая презентация не определяет мой интеллект.»",
            answerKk: "Қайта бағалау: «Презентациям жоспар бойынша өтпеді, бірақ көпшілік өз ішімен айналысқан болуы мүмкін. Сәтсіз шыққан нақты бөліктерден үйреніп, келесі жолы жақсырақ дайындала аламын. Бір нашар презентация менің зияткерлігімді анықтамайды.»",
            hint: "Challenge the words 'disaster,' 'everyone,' and 'stupid' — are they really accurate?",
            hintRu: "Поставьте под сомнение слова «катастрофа», «все» и «глупый» — точны ли они?",
            hintKk: "«Апат», «барлығы» және «ақымақ» сөздеріне күмән келтіріңіз — олар дәл ме?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Using Gross's Process Model, identify at which of the five stages you could have intervened to prevent exam anxiety, and describe a specific strategy for each stage.",
            questionRu: "Используя модель Гросса, определите, на каком из пяти этапов можно было вмешаться для предотвращения экзаменационной тревоги, и опишите стратегию для каждого.",
            questionKk: "Гросс моделін қолданып, емтихан алаңдаушылығын болдырмау үшін бес кезеңнің қайсысында араласуға болатынын анықтаңыз және әр кезең үшін стратегия сипаттаңыз.",
            answer: "(1) Situation Selection: Start studying early to avoid last-minute cramming. (2) Situation Modification: Study in a quiet library instead of a noisy room. (3) Attention Deployment: Focus on one topic at a time rather than worrying about everything. (4) Cognitive Reappraisal: Reframe 'I'll fail' as 'I've prepared and will do my best.' (5) Response Modulation: Use deep breathing right before the exam to calm physical symptoms.",
            answerRu: "(1) Выбор ситуации: Начните готовиться заранее, чтобы избежать зубрёжки в последний момент. (2) Модификация ситуации: Готовьтесь в тихой библиотеке вместо шумной комнаты. (3) Распределение внимания: Сосредоточьтесь на одной теме за раз, а не переживайте обо всём сразу. (4) Когнитивная переоценка: Переформулируйте «Я провалюсь» в «Я подготовился и сделаю всё возможное». (5) Модуляция реакции: Используйте глубокое дыхание прямо перед экзаменом, чтобы успокоить физические симптомы.",
            answerKk: "(1) Жағдай таңдау: Соңғы сәтте жаттап алуға жол бермес үшін ертерек оқи бастаңыз. (2) Жағдайды өзгерту: Шулы бөлменің орнына тыныш кітапханада оқыңыз. (3) Назарды бағыттау: Бәріне бірдей уайымдамай, бір уақытта бір тақырыпқа шоғырланыңыз. (4) Когнитивті қайта бағалау: «Құлап қаламын» деген ойды «Дайындалдым және барымды саламын» деп өзгертіңіз. (5) Жауап модуляциясы: Дене белгілерін тыныштандыру үшін емтихан алдында терең тыныс алуды қолданыңыз.",
            hint: "Work through the five stages in order — each one happens earlier or later in the emotional process.",
            hintRu: "Пройдите пять этапов по порядку — каждый происходит раньше или позже в эмоциональном процессе.",
            hintKk: "Бес кезеңді ретімен қарастырыңыз — әрқайсысы эмоциялық процесте ертерек немесе кешірек болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Peer Pressure",
        titleRu: "Давление сверстников",
        titleKk: "Құрдастар қысымы",
        content: "Peer pressure is the influence exerted by a peer group to encourage conformity. It can be direct (someone telling you to do something) or indirect (feeling you need to fit in). The Refusal Skills Model provides structured ways to say no while maintaining friendships and self-respect.",
        contentRu: "Давление сверстников — влияние группы, побуждающее к конформизму. Оно бывает прямым (кто-то говорит что-то сделать) или косвенным (чувство необходимости вписаться). Модель навыков отказа предлагает структурированные способы говорить «нет», сохраняя дружбу и самоуважение.",
        contentKk: "Құрдастар қысымы — сәйкестікті ынталандыру үшін құрдастар тобының ықпалы. Ол тікелей (біреу бірдеңе істеуді айтады) немесе жанама (сәйкес келу қажеттілігін сезіну) болуы мүмкін. Бас тарту дағдылары моделі достықты және өзін-өзі құрметтеуді сақтай отырып «жоқ» деудің құрылымдалған жолдарын ұсынады.",
        keyFormulas: [
          {
            formula: "Refusal Skills Model: Say No clearly → Give a reason → Suggest alternative → Walk away if needed",
            description: "A four-step approach to resisting peer pressure assertively",
            descriptionRu: "Четырёхшаговый подход к ассертивному сопротивлению давлению",
            descriptionKk: "Құрдастар қысымына батыл қарсы тұрудың төрт қадамдық тәсілі"
          },
          {
            formula: "Direct vs. Indirect Pressure: Direct = explicit request | Indirect = unspoken expectation",
            description: "Two forms of peer pressure that require different responses",
            descriptionRu: "Две формы давления сверстников, требующие разных ответов",
            descriptionKk: "Әртүрлі жауаптарды қажет ететін құрдастар қысымының екі формасы"
          }
        ],
        solvedExamples: [
          {
            question: "Your friends want you to skip class to go to a mall. Use the Refusal Skills Model to decline without damaging the friendship.",
            questionRu: "Друзья хотят, чтобы вы прогуляли урок и пошли в торговый центр. Используйте модель отказа, чтобы отказаться без ущерба для дружбы.",
            questionKk: "Достарыңыз сабақты тастап, сауда орталығына баруды қалайды. Достыққа зиян келтірмей бас тарту үшін Бас тарту моделін қолданыңыз.",
            steps: [
              { en: "Say No and Give a reason: 'I can't skip class — I have a quiz today and my grades matter to me. I don't want to risk getting in trouble.'", ru: "Скажите нет и дайте причину: «Не могу прогулять — сегодня контрольная и оценки важны. Не хочу рисковать.»", kk: "Жоқ деңіз және себеп айтыңыз: «Сабақты тастай алмаймын — бүгін бақылау жұмысы бар және бағалар маңызды. Қиындыққа тап болғым келмейді.»" },
              { en: "Suggest alternative: 'Let's go to the mall after school or this weekend instead.' Walk away if they keep pushing: 'I've made up my mind — see you later!'", ru: "Предложите альтернативу: «Давайте пойдём в ТЦ после школы или на выходных.» Уйдите, если давят: «Я решил — увидимся позже!»", kk: "Баламасын ұсыныңыз: «Сабақтан кейін немесе демалыс күні бара қоялық.» Қысымды жалғастырса: «Мен шештім — кейін кездесеміз!»" }
            ],
            answer: "Say No: 'I can't skip class.' Reason: 'I have a quiz.' Alternative: 'Let's go after school.' Walk away if pressured. This maintains self-respect and offers a compromise.",
            answerRu: "Скажите Нет: «Я не могу прогулять урок.» Причина: «У меня контрольная.» Альтернатива: «Давайте пойдём после школы.» Уйдите, если продолжают давить. Это сохраняет самоуважение и предлагает компромисс.",
            answerKk: "Жоқ деңіз: «Сабақты тастай алмаймын.» Себеп: «Бақылау жұмысым бар.» Балама: «Сабақтан кейін барайық.» Қысым жалғасса — кетіңіз. Бұл өзін-өзі құрметтеуді сақтап, ымыра ұсынады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the four steps of the Refusal Skills Model?",
            questionRu: "Каковы четыре шага модели навыков отказа?",
            questionKk: "Бас тарту дағдылары моделінің төрт қадамы қандай?",
            answer: "Say No clearly, Give a reason, Suggest an alternative, Walk away if needed.",
            answerRu: "Чётко сказать Нет, Дать причину, Предложить альтернативу, Уйти при необходимости.",
            answerKk: "Анық жоқ деңіз, Себеп айтыңыз, Балама ұсыныңыз, Қажет болса кетіңіз.",
            hint: "Think of it as a conversation flow: refuse, explain, redirect, exit.",
            hintRu: "Представьте как поток разговора: отказать, объяснить, перенаправить, уйти.",
            hintKk: "Оны әңгіме ағыны ретінде елестетіңіз: бас тарту, түсіндіру, бағыттау, кету.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Describe the difference between direct and indirect peer pressure. Give one example of each.",
            questionRu: "Опишите разницу между прямым и косвенным давлением сверстников. Приведите по одному примеру.",
            questionKk: "Тікелей және жанама құрдастар қысымының айырмашылығын сипаттаңыз. Әрқайсысына бір мысал келтіріңіз.",
            answer: "Direct: a friend says 'Come on, just try one cigarette.' Indirect: everyone at the party is drinking and you feel you should too, even though nobody asked you to. Direct is an explicit request; indirect is an unspoken expectation.",
            answerRu: "Прямое: друг говорит «Давай, попробуй всего одну сигарету.» Косвенное: все на вечеринке пьют, и вы чувствуете, что тоже должны, хотя никто вас не просил. Прямое — это явная просьба; косвенное — невысказанное ожидание.",
            answerKk: "Тікелей: досыңыз «Кәне, бір темекіні ғана тартып көрші» дейді. Жанама: кештегілердің бәрі ішіп жатыр және ешкім сұрамаса да сіз де солай істеуіңіз керектей сезінесіз. Тікелей — ашық өтініш; жанама — айтылмаған үміт.",
            hint: "One involves words spoken to you; the other involves feeling pressure from the environment.",
            hintRu: "Одно связано с прямыми словами; другое — с давлением окружения.",
            hintKk: "Біреуі тікелей сөздерді қамтиды; екіншісі — ортаның қысымын сезіну.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Why is indirect peer pressure often harder to resist than direct pressure? Propose two strategies specifically designed for handling indirect pressure.",
            questionRu: "Почему косвенному давлению часто труднее противостоять, чем прямому? Предложите две стратегии для косвенного давления.",
            questionKk: "Жанама құрдастар қысымына неліктен тікелейге қарағанда қарсы тұру қиынырақ? Жанама қысымға арналған екі стратегия ұсыныңыз.",
            answer: "Indirect pressure is harder because there is no specific person to say 'no' to — it comes from the environment and social norms. Strategies: (1) Pre-commitment: decide in advance what you will and won't do before entering the situation. (2) Find an accountability partner — a friend who shares your values and will support your decisions in group settings.",
            answerRu: "Косвенному давлению труднее противостоять, потому что нет конкретного человека, которому можно сказать «нет» — оно исходит от окружения и социальных норм. Стратегии: (1) Предварительное обязательство: заранее решите, что вы будете и не будете делать, прежде чем окажетесь в ситуации. (2) Найдите партнёра по ответственности — друга, который разделяет ваши ценности и поддержит ваши решения в группе.",
            answerKk: "Жанама қысымға қарсы тұру қиынырақ, өйткені «жоқ» дейтін нақты адам жоқ — ол орта мен әлеуметтік нормалардан туады. Стратегиялар: (1) Алдын ала міндеттеме: жағдайға тап болмас бұрын не істейтініңізді және не істемейтініңізді алдын ала шешіп алыңыз. (2) Жауапкершілік серіктесін табыңыз — құндылықтарыңызды бөлісетін және топтағы шешімдеріңізді қолдайтын дос.",
            hint: "Think about why it's easier to refuse a person than to refuse an atmosphere.",
            hintRu: "Подумайте, почему легче отказать человеку, чем атмосфере.",
            hintKk: "Адамға бас тартудан гөрі атмосфераға бас тартудың неге қиынырақ екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Conflict Resolution",
        titleRu: "Разрешение конфликтов",
        titleKk: "Жанжалдарды шешу",
        content: "Conflict is a natural part of human relationships, but how we handle it determines the outcome. The Thomas-Kilmann model identifies five conflict styles: Competing, Accommodating, Avoiding, Compromising, and Collaborating. The most effective long-term approach is usually Collaborating, where both parties work together to find a solution that satisfies everyone.",
        contentRu: "Конфликт — естественная часть отношений, но способ его разрешения определяет результат. Модель Томаса-Килманна выделяет пять стилей: Соревнование, Приспособление, Избегание, Компромисс и Сотрудничество. Наиболее эффективный долгосрочный подход — Сотрудничество, где обе стороны находят решение, удовлетворяющее всех.",
        contentKk: "Жанжал — адам қарым-қатынастарының табиғи бөлігі, бірақ оны қалай шешетініміз нәтижені анықтайды. Томас-Килманн моделі бес жанжал стилін анықтайды: Бәсекелесу, Бейімделу, Қашу, Ымыраға келу және Ынтымақтасу. Ең тиімді ұзақ мерзімді тәсіл — Ынтымақтасу, мұнда екі тарап бәріне қанағаттанарлық шешім табады.",
        keyFormulas: [
          {
            formula: "Thomas-Kilmann 5 Styles: Competing, Accommodating, Avoiding, Compromising, Collaborating",
            description: "Five approaches to conflict based on assertiveness and cooperativeness",
            descriptionRu: "Пять подходов к конфликту на основе настойчивости и кооперативности",
            descriptionKk: "Батылдық пен ынтымақтастыққа негізделген жанжалға бес тәсіл"
          },
          {
            formula: "WIN Method: What do I want? → Identify what they want → Navigate to a shared solution",
            description: "A simple framework for approaching any conflict collaboratively",
            descriptionRu: "Простой подход к совместному разрешению любого конфликта",
            descriptionKk: "Кез келген жанжалды бірлесіп шешудің қарапайым тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "You and your partner disagree about how to divide work on a group project — you want to split it evenly, they want to each do what they are best at. Use the WIN method to find a solution.",
            questionRu: "Вы и партнёр спорите о распределении работы в проекте — вы за равное разделение, он хочет делать то, в чём силён. Используйте метод WIN.",
            questionKk: "Серіктесіңізбен топтық жобадағы жұмысты бөлу туралы келіспейсіздер. WIN әдісін қолданып шешім табыңыз.",
            steps: [
              { en: "What do I want: Fair workload so nobody does more. Identify what they want: to use their strengths so the project quality is higher.", ru: "Что хочу я: Справедливая нагрузка, чтобы никто не делал больше. Чего хотят они: использовать свои сильные стороны для высокого качества.", kk: "Мен не қалаймын: Ешкім көп істемейтін әділ жүктеме. Олар не қалайды: сапа үшін күшті жақтарын пайдалану." },
              { en: "Navigate: Combine both — assign tasks based on strengths BUT ensure the total hours are roughly equal. Track time spent so fairness is measurable.", ru: "Решение: Объедините — распределите по сильным сторонам, НО следите за равным объёмом часов. Отслеживайте время для справедливости.", kk: "Шарлау: Екеуін біріктіріңіз — тапсырмаларды күшті жақтар бойынша бөліңіз, БІРАҚ жалпы сағаттар шамамен тең болсын." }
            ],
            answer: "Using WIN: Both wants are valid — fairness AND quality. Solution: assign tasks by strength while tracking hours to ensure equal workload. This is the Collaborating style.",
            answerRu: "Используя WIN: Оба желания важны — справедливость И качество. Решение: распределяйте задачи по сильным сторонам, отслеживая часы, чтобы нагрузка была равной. Это стиль Сотрудничества.",
            answerKk: "WIN әдісін қолдану: Екі қалау да негізді — әділдік ЖӘНЕ сапа. Шешім: тең жүктемені қамтамасыз ету үшін сағаттарды бақылай отырып, тапсырмаларды күшті жақтар бойынша бөлу. Бұл — Ынтымақтасу стилі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the five conflict styles from the Thomas-Kilmann model.",
            questionRu: "Назовите пять стилей конфликта по модели Томаса-Килманна.",
            questionKk: "Томас-Килманн моделі бойынша бес жанжал стилін атаңыз.",
            answer: "Competing, Accommodating, Avoiding, Compromising, and Collaborating.",
            answerRu: "Соревнование, Приспособление, Избегание, Компромисс и Сотрудничество.",
            answerKk: "Бәсекелесу, Бейімделу, Қашу, Ымыраға келу және Ынтымақтасу.",
            hint: "Think of how assertive and how cooperative each style is.",
            hintRu: "Подумайте, насколько настойчив и насколько кооперативен каждый стиль.",
            hintKk: "Әр стильдің қаншалықты батыл және қаншалықты ынтымақтас екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your two friends want to do different activities on a Saturday — one wants to play video games, the other wants to go hiking. Identify which conflict style 'Let's play games in the morning and hike in the afternoon' represents.",
            questionRu: "Два друга хотят разного в субботу — один играть, другой на поход. Какой стиль конфликта: «Утром играем, днём идём в поход»?",
            questionKk: "Екі достыңыз сенбіде әртүрлі нәрсе қалайды. «Таңертең ойын ойнайық, түстен кейін серуенге барайық» қандай стильді білдіреді?",
            answer: "This is Compromising — both parties give up something (full day of their activity) and get something (half day). A Collaborating solution might find an activity both enjoy equally, like a nature video game or geocaching.",
            answerRu: "Это Компромисс — каждая сторона чем-то жертвует (целый день своего занятия) и что-то получает (полдня). Решение в стиле Сотрудничества могло бы найти занятие, которое обоим одинаково нравится, например видеоигра на природе или геокэшинг.",
            answerKk: "Бұл Ымыраға келу — екі тарап та бірдеңеден бас тартады (өз белсенділігінің толық күні) және бірдеңе алады (жарты күн). Ынтымақтасу шешімі екеуіне де бірдей ұнайтын белсенділікті табу болуы мүмкін, мысалы табиғаттағы бейнеойын немесе геокэшинг.",
            hint: "Is each person getting everything they want, or is each giving something up?",
            hintRu: "Каждый получает всё, что хочет, или каждый чем-то жертвует?",
            hintKk: "Әрқайсысы қалағанның бәрін ала ма, әлде бірдеңеден бас тарта ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "When is Avoiding actually the best conflict style? Describe a specific scenario where avoiding conflict is wiser than collaborating, and explain why.",
            questionRu: "Когда Избегание — лучший стиль? Опишите сценарий, где избегание конфликта мудрее сотрудничества, и объясните почему.",
            questionKk: "Қашу қашан ең жақсы жанжал стилі болады? Жанжалдан қашу ынтымақтасудан ақылдырақ сценарийді сипаттаңыз және неліктен екенін түсіндіріңіз.",
            answer: "Avoiding is best when: the issue is trivial and not worth the emotional energy, when you need time to cool down before addressing a heated topic, or when the other person is in a position of power and confrontation could cause serious harm. Example: A stranger makes a rude comment on the street — engaging them could escalate to danger. Avoiding protects your safety when collaboration is not possible.",
            answerRu: "Избегание лучше всего, когда: вопрос мелкий и не стоит эмоциональных затрат, когда нужно время остыть перед обсуждением острой темы, или когда другой человек находится в позиции власти и конфронтация может серьёзно навредить. Пример: незнакомец грубо комментирует на улице — ввязывание может перерасти в опасность. Избегание защищает вашу безопасность, когда сотрудничество невозможно.",
            answerKk: "Қашу мына жағдайларда ең жақсы: мәселе ұсақ және эмоциялық энергияға тұрарлық емес, қызған тақырыпты талқыламас бұрын сабырға келуге уақыт қажет болғанда немесе екінші адам билік позициясында болып, қақтығыс елеулі зиян келтіруі мүмкін болғанда. Мысал: бейтаныс адам көшеде дөрекі пікір айтты — араласу қауіпке дейін ушығуы мүмкін. Ынтымақтасу мүмкін болмағанда, қашу қауіпсіздігіңізді қорғайды.",
            hint: "Think about situations where engaging in conflict could make things worse, not better.",
            hintRu: "Подумайте о ситуациях, где участие в конфликте может ухудшить, а не улучшить дело.",
            hintKk: "Жанжалға қатысу жағдайды жақсартпай, нашарлатуы мүмкін жағдайларды ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Active Listening",
        titleRu: "Активное слушание",
        titleKk: "Белсенді тыңдау",
        content: "Active listening means fully concentrating on what someone is saying rather than just waiting for your turn to speak. It involves verbal cues like paraphrasing and asking clarifying questions, and nonverbal cues like eye contact and nodding. Carl Rogers identified active listening as the cornerstone of effective communication and therapeutic relationships.",
        contentRu: "Активное слушание — полная концентрация на том, что говорит собеседник, а не ожидание своей очереди. Оно включает вербальные сигналы (перефразирование, уточняющие вопросы) и невербальные (зрительный контакт, кивки). Карл Роджерс определил его как краеугольный камень эффективной коммуникации.",
        contentKk: "Белсенді тыңдау — біреу не айтып жатқанына толық шоғырлану, сөз кезегіңізді күтпеу. Ол вербалды белгілерді (қайта тұжырымдау, нақтылау сұрақтары) және вербалды емес белгілерді (көз контактісі, бас изеу) қамтиды. Карл Роджерс оны тиімді коммуникацияның негіз тасы деп анықтады.",
        keyFormulas: [
          {
            formula: "Active Listening SOLER: Sit squarely, Open posture, Lean forward, Eye contact, Relax",
            description: "Five body language elements that show you are actively listening",
            descriptionRu: "Пять элементов языка тела, показывающих активное слушание",
            descriptionKk: "Белсенді тыңдауды көрсететін дене тілінің бес элементі"
          },
          {
            formula: "Paraphrase Formula: 'So what you're saying is...' + repeat key point in your own words",
            description: "A verbal technique to confirm understanding and show engagement",
            descriptionRu: "Вербальная техника для подтверждения понимания и вовлечённости",
            descriptionKk: "Түсінуді растау және қатысуды көрсетудің вербалды техникасы"
          }
        ],
        solvedExamples: [
          {
            question: "Your friend is telling you about a problem with their parents, but you catch yourself thinking about your own plans. How do you refocus using active listening techniques?",
            questionRu: "Друг рассказывает о проблеме с родителями, но вы ловите себя на мыслях о своих планах. Как сфокусироваться, используя активное слушание?",
            questionKk: "Досыңыз ата-анасымен мәселе туралы айтады, бірақ сіз өз жоспарларыңыз туралы ойлап кеткеніңізді байқайсыз. Белсенді тыңдау техникаларын қолданып қалай шоғырланасыз?",
            steps: [
              { en: "Apply SOLER: Physically reorient — face them directly, uncross your arms, lean slightly forward, make eye contact. This physical shift helps your mind refocus.", ru: "Примените SOLER: Физически переориентируйтесь — повернитесь лицом, раскрестите руки, немного наклонитесь вперёд, смотрите в глаза.", kk: "SOLER қолданыңыз: Физикалық қайта бағытталыңыз — бетпе-бет отырыңыз, қолдарыңызды айқастырмаңыз, алға еңкейіңіз, көз контактісін жасаңыз." },
              { en: "Use paraphrasing: When they pause, say 'So what you're saying is your parents don't understand your point of view?' This forces you to process their words and shows you care.", ru: "Перефразируйте: Когда они замолчат, скажите «Ты имеешь в виду, что родители не понимают твою точку зрения?» Это заставляет обработать их слова.", kk: "Қайта тұжырымдаңыз: Олар тоқтағанда: «Сен ата-анаң көзқарасыңды түсінбейді дегенді айтасың ба?» деңіз. Бұл олардың сөздерін өңдеуге мәжбүрлейді." }
            ],
            answer: "Refocus physically using SOLER (face them, open posture, lean in, eye contact, relax), then re-engage verbally by paraphrasing what they said to confirm understanding.",
            answerRu: "Физически перефокусируйтесь с помощью SOLER (повернитесь лицом, открытая поза, наклонитесь вперёд, зрительный контакт, расслабьтесь), затем снова вовлекитесь в разговор, перефразировав сказанное для подтверждения понимания.",
            answerKk: "SOLER арқылы физикалық қайта шоғырланыңыз (бетпе-бет отырыңыз, ашық қалып, алға еңкейіңіз, көз контактісі, босаңсыңыз), содан кейін түсінгеніңізді растау үшін айтылғанды қайта тұжырымдап, сөзбен қайта араласыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does SOLER stand for in active listening?",
            questionRu: "Что означает SOLER в активном слушании?",
            questionKk: "Белсенді тыңдаудағы SOLER нені білдіреді?",
            answer: "Sit squarely, Open posture, Lean forward, Eye contact, Relax.",
            answerRu: "Сидеть прямо (повернувшись к собеседнику), Открытая поза, Наклониться вперёд, Зрительный контакт, Расслабленность.",
            answerKk: "Тіке отыру, Ашық қалып, Алға еңкею, Көз контактісі, Босаңсу.",
            hint: "Each letter describes a body position or action.",
            hintRu: "Каждая буква описывает положение тела или действие.",
            hintKk: "Әр әріп дене қалпын немесе іс-әрекетті сипаттайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your teacher is explaining a complicated math concept. Practice active listening by writing a paraphrase of this statement: 'When you multiply both sides of an equation by the same number, the equation stays balanced.'",
            questionRu: "Учитель объясняет сложную математическую концепцию. Практикуйте активное слушание, перефразировав: «Когда вы умножаете обе стороны уравнения на одно число, уравнение остаётся сбалансированным.»",
            questionKk: "Мұғалім күрделі математикалық концепцияны түсіндіріп жатыр. Мына мәлімдемені қайта тұжырымдаңыз: «Теңдеудің екі жағын бір санға көбейткенде, теңдеу теңгерімді болып қалады.»",
            answer: "Paraphrase: 'So you're saying that if I do the same multiplication on both sides, the equation remains equal — like a seesaw that stays level when you add equal weight to both sides.'",
            answerRu: "Перефразирование: «То есть вы говорите, что если я выполню одно и то же умножение с обеих сторон, уравнение останется равным — как качели, которые сохраняют равновесие, когда с обеих сторон добавляют одинаковый вес.»",
            answerKk: "Қайта тұжырым: «Яғни, екі жағына да бірдей көбейтуді орындасам, теңдеу тең болып қалады — хұдды екі жағына бірдей салмақ қосқанда теңгерімін сақтайтын әткеншек сияқты.»",
            hint: "Put it in your own words and add an analogy if possible.",
            hintRu: "Скажите своими словами и добавьте аналогию.",
            hintKk: "Өз сөздеріңізбен айтыңыз және мүмкін болса ұқсастық қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Why is active listening more difficult in digital communication (texting, social media) than face-to-face? Suggest two adaptations of the SOLER model for digital contexts.",
            questionRu: "Почему активное слушание труднее в цифровой коммуникации, чем лицом к лицу? Предложите две адаптации SOLER для цифрового контекста.",
            questionKk: "Белсенді тыңдау неліктен цифрлық қарым-қатынаста бетпе-бетке қарағанда қиынырақ? Цифрлық контекст үшін SOLER моделінің екі бейімделуін ұсыныңыз.",
            answer: "Digital communication lacks body language, tone of voice, and immediate feedback, making SOLER impossible to apply literally. Adaptations: (1) Replace 'Eye contact' with 'Full attention' — put away other devices and close unrelated tabs when messaging. (2) Replace 'Lean forward' with 'Respond promptly and substantively' — show engagement by replying thoughtfully rather than with one-word answers or emojis.",
            answerRu: "В цифровой коммуникации нет языка тела, тона голоса и мгновенной обратной связи, поэтому SOLER невозможно применить буквально. Адаптации: (1) Замените «Зрительный контакт» на «Полное внимание» — отложите другие устройства и закройте посторонние вкладки при переписке. (2) Замените «Наклониться вперёд» на «Отвечать быстро и по существу» — показывайте вовлечённость продуманными ответами, а не односложными сообщениями или эмодзи.",
            answerKk: "Цифрлық қарым-қатынаста дене тілі, дауыс ырғағы және жедел кері байланыс жоқ, сондықтан SOLER-ді тікелей қолдану мүмкін емес. Бейімделулер: (1) «Көз контактісін» «Толық назар аударуға» ауыстырыңыз — хабарлама жазғанда басқа құрылғыларды алыстап, қатысы жоқ қойындыларды жабыңыз. (2) «Алға еңкеюді» «Жедел және мазмұнды жауап беруге» ауыстырыңыз — қатысуды бір сөздік жауаптармен немесе эмодзимен емес, ойлы жауаптармен көрсетіңіз.",
            hint: "Think about which SOLER elements are physical and how you might translate them into digital behaviors.",
            hintRu: "Подумайте, какие элементы SOLER физические и как перевести их в цифровое поведение.",
            hintKk: "SOLER элементтерінің қайсысы физикалық екенін және оларды цифрлық мінез-құлыққа қалай аударуға болатынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Stress Management",
        titleRu: "Управление стрессом",
        titleKk: "Стрессті басқару",
        content: "Stress is the body's response to demands or threats, activating the fight-or-flight system. Hans Selye's General Adaptation Syndrome describes three stages: Alarm, Resistance, and Exhaustion. While short-term stress can improve performance, chronic stress damages health. Effective coping strategies include problem-focused coping (addressing the stressor) and emotion-focused coping (managing your feelings).",
        contentRu: "Стресс — реакция организма на требования или угрозы, активирующая систему «бей или беги». Общий адаптационный синдром Ганса Селье описывает три стадии: Тревога, Сопротивление и Истощение. Хотя кратковременный стресс улучшает производительность, хронический вредит здоровью. Эффективные стратегии: проблемно-ориентированное и эмоционально-ориентированное совладание.",
        contentKk: "Стресс — денеңіздің талаптарға немесе қатерлерге жауабы, «ұр немесе қаш» жүйесін іске қосады. Ганс Селье сипаттаған Жалпы бейімделу синдромы үш кезеңді қамтиды: Дабыл, Қарсылық және Сарқылу. Қысқа мерзімді стресс өнімділікті жақсартса, созылмалы стресс денсаулыққа зиян. Тиімді стратегиялар: мәселеге бағытталған және эмоцияға бағытталған күрес.",
        keyFormulas: [
          {
            formula: "Selye's GAS: Alarm → Resistance → Exhaustion",
            description: "The three stages the body goes through during prolonged stress",
            descriptionRu: "Три стадии, через которые проходит тело при длительном стрессе",
            descriptionKk: "Ұзақ стресс кезінде дене өтетін үш кезең"
          },
          {
            formula: "Coping: Problem-Focused (fix the cause) vs. Emotion-Focused (manage the feeling)",
            description: "Two fundamental approaches to dealing with stress",
            descriptionRu: "Два фундаментальных подхода к борьбе со стрессом",
            descriptionKk: "Стресспен күресудің екі іргелі тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "You have three major assignments due in the same week and feel overwhelmed. Identify which stage of Selye's GAS you are in and use both coping strategies.",
            questionRu: "У вас три важных задания за одну неделю и вы перегружены. Определите стадию GAS и используйте обе стратегии совладания.",
            questionKk: "Бір аптада үш маңызды тапсырма бар және басыңыз қатты. Селье GAS кезеңін анықтаңыз және екі күрес стратегиясын қолданыңыз.",
            steps: [
              { en: "Identify stage: You are in Alarm (initial stress response) or early Resistance (trying to cope). The feeling of being overwhelmed suggests your body is mobilizing energy to deal with the challenge.", ru: "Определите стадию: Вы на этапе Тревоги (начальный ответ) или раннего Сопротивления (попытка справиться). Чувство перегрузки говорит, что тело мобилизует энергию.", kk: "Кезеңді анықтаңыз: Сіз Дабыл (бастапқы жауап) немесе ерте Қарсылық кезеңіндесіз. Басылу сезімі дене энергия жинап жатқанын көрсетеді." },
              { en: "Apply both coping styles: Problem-focused — make a schedule breaking each assignment into smaller daily tasks. Emotion-focused — use box breathing when anxiety rises and remind yourself you have handled busy weeks before.", ru: "Применяйте оба стиля: Проблемно-ориентированный — составьте расписание, разбив задания на мелкие. Эмоционально-ориентированный — дышите коробочным методом при тревоге.", kk: "Екі күрес стилін қолданыңыз: Мәселеге бағытталған — әр тапсырманы күнделікті шағын тапсырмаларға бөлетін кесте жасаңыз. Эмоцияға бағытталған — алаңдау кезінде қорапша тыныс алуды қолданыңыз." }
            ],
            answer: "Stage: Alarm/early Resistance. Problem-focused: create a schedule with small daily tasks. Emotion-focused: use breathing techniques and self-reassurance. Both together prevent reaching Exhaustion.",
            answerRu: "Стадия: Тревога/раннее Сопротивление. Проблемно-ориентированное: составьте расписание с небольшими ежедневными задачами. Эмоционально-ориентированное: используйте дыхательные техники и самоподдержку. Вместе они предотвращают переход в Истощение.",
            answerKk: "Кезең: Дабыл/ерте Қарсылық. Мәселеге бағытталған: күнделікті шағын тапсырмалардан тұратын кесте жасаңыз. Эмоцияға бағытталған: тыныс алу техникаларын және өз-өзіңізді жұбатуды қолданыңыз. Екеуі бірге Сарқылуға жеткізбейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the three stages of Selye's General Adaptation Syndrome.",
            questionRu: "Назовите три стадии Общего адаптационного синдрома Селье.",
            questionKk: "Селье Жалпы бейімделу синдромының үш кезеңін атаңыз.",
            answer: "Alarm, Resistance, Exhaustion.",
            answerRu: "Тревога, Сопротивление, Истощение.",
            answerKk: "Дабыл, Қарсылық, Сарқылу.",
            hint: "Think of what happens first (alert), then (fight back), then (burnout).",
            hintRu: "Подумайте: сначала (сигнал тревоги), потом (борьба), затем (выгорание).",
            hintKk: "Алдымен (дабыл), содан кейін (қарсыласу), содан кейін (сарқылу) не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "For each scenario, decide if problem-focused or emotion-focused coping is more appropriate: (a) You have a test tomorrow you haven't studied for. (b) Your grandparent is sick and there's nothing you can do.",
            questionRu: "Для каждого сценария определите подходящий тип совладания: (а) Завтра тест, вы не готовились. (б) Бабушка/дедушка болеет, вы ничего не можете сделать.",
            questionKk: "Әр сценарий үшін қайсы күрес тәсілі қолайлы екенін анықтаңыз: (а) Ертеңгі тестке дайындалмадыңыз. (б) Ата/әже ауырып жатыр, сіз ештеңе істей алмайсыз.",
            answer: "(a) Problem-focused: study now — you can still act. (b) Emotion-focused: manage your feelings through talking to someone, journaling, or spending quality time with your grandparent — the situation itself is out of your control.",
            answerRu: "(а) Проблемно-ориентированное: учитесь сейчас — вы ещё можете действовать. (б) Эмоционально-ориентированное: управляйте чувствами через разговор с кем-нибудь, ведение дневника или качественное время с бабушкой/дедушкой — сама ситуация вне вашего контроля.",
            answerKk: "(а) Мәселеге бағытталған: қазір оқыңыз — әлі де әрекет жасай аласыз. (б) Эмоцияға бағытталған: сезімдеріңізді біреумен сөйлесу, күнделік жүргізу немесе ата/әжеңізбен сапалы уақыт өткізу арқылы басқарыңыз — жағдайдың өзі сіздің бақылауыңыздан тыс.",
            hint: "Ask: Can I change the situation? If yes, problem-focused. If no, emotion-focused.",
            hintRu: "Спросите: Могу ли я изменить ситуацию? Да — проблемно-ориентированное. Нет — эмоционально-ориентированное.",
            hintKk: "Сұраңыз: Жағдайды өзгерте аламын ба? Иә — мәселеге бағытталған. Жоқ — эмоцияға бағытталған.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student is in the Exhaustion stage of Selye's GAS after months of overwork. What physical and psychological symptoms might they show, and what recovery plan would you recommend?",
            questionRu: "Ученик находится на стадии Истощения после месяцев перегрузки. Какие симптомы могут проявиться и какой план восстановления вы порекомендуете?",
            questionKk: "Оқушы айларлап артық жұмыс істегеннен кейін Сарқылу кезеңінде. Қандай белгілер көрсетуі мүмкін және қандай қалпына келтіру жоспарын ұсынар едіңіз?",
            answer: "Symptoms: constant fatigue, frequent illness, difficulty concentrating, irritability, insomnia, feeling hopeless. Recovery plan: (1) Immediately reduce workload — prioritize and eliminate non-essential tasks. (2) Restore sleep schedule — 8+ hours consistently. (3) Reintroduce exercise and healthy eating. (4) Talk to a counselor or trusted adult. (5) Gradually rebuild with scheduled breaks to prevent relapse.",
            answerRu: "Симптомы: постоянная усталость, частые болезни, трудности с концентрацией, раздражительность, бессонница, чувство безнадёжности. План восстановления: (1) Немедленно уменьшить нагрузку — расставить приоритеты и убрать необязательные задачи. (2) Восстановить режим сна — стабильно 8+ часов. (3) Вернуть физические нагрузки и здоровое питание. (4) Поговорить с психологом или доверенным взрослым. (5) Постепенно восстанавливаться с запланированными перерывами, чтобы не допустить рецидива.",
            answerKk: "Белгілер: тұрақты шаршау, жиі ауыру, назар аудару қиындығы, ашуланшақтық, ұйқысыздық, үмітсіздік сезімі. Қалпына келтіру жоспары: (1) Жүктемені дереу азайтыңыз — басымдықтарды анықтап, маңызды емес тапсырмаларды алып тастаңыз. (2) Ұйқы кестесін қалпына келтіріңіз — тұрақты 8+ сағат. (3) Жаттығу мен сау тамақтануды қайта енгізіңіз. (4) Кеңесшімен немесе сенімді ересекпен сөйлесіңіз. (5) Қайталанбауы үшін жоспарланған үзілістермен біртіндеп қалпына келтіріңіз.",
            hint: "Exhaustion means the body's resources are depleted — think about what needs to be restored.",
            hintRu: "Истощение означает, что ресурсы тела исчерпаны — подумайте, что нужно восстановить.",
            hintKk: "Сарқылу дене ресурстарының таусылғанын білдіреді — нені қалпына келтіру керектігін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Growth Mindset",
        titleRu: "Мышление роста",
        titleKk: "Өсу ойлауы",
        content: "Psychologist Carol Dweck discovered that people have either a fixed mindset (believing abilities are innate and unchangeable) or a growth mindset (believing abilities can be developed through effort and learning). Students with a growth mindset perform better academically because they see challenges as opportunities to grow rather than threats to their identity.",
        contentRu: "Психолог Кэрол Двек обнаружила два типа мышления: фиксированное (способности врождённые и неизменные) и мышление роста (способности развиваются через усилия). Ученики с мышлением роста учатся лучше, потому что воспринимают трудности как возможности для роста, а не угрозы.",
        contentKk: "Психолог Кэрол Двек адамдардың тіркелген ойлауы (қабілеттер туа біткен және өзгермейді) немесе өсу ойлауы (қабілеттер күш-жігер арқылы дамиды) бар екенін анықтады. Өсу ойлауы бар оқушылар қиындықтарды сәйкестілікке қатер емес, өсу мүмкіндіктері ретінде қабылдайтындықтан жақсы оқиды.",
        keyFormulas: [
          {
            formula: "Fixed Mindset: 'I'm bad at this' | Growth Mindset: 'I'm not good at this YET'",
            description: "The power of adding 'yet' to transform a limiting belief",
            descriptionRu: "Сила добавления «пока» для трансформации ограничивающего убеждения",
            descriptionKk: "Шектеуші сенімді өзгерту үшін «әлі» қосудың күші"
          },
          {
            formula: "Effort → Struggle → Learning → Mastery (the growth path)",
            description: "The natural progression from beginner to expert through persistent effort",
            descriptionRu: "Естественное продвижение от новичка к эксперту через настойчивые усилия",
            descriptionKk: "Тұрақты күш-жігер арқылы жаңа бастаушыдан сарапшыға дейінгі табиғи ілгерілеу"
          }
        ],
        solvedExamples: [
          {
            question: "A student says 'I failed the test — I'm just not a math person.' Identify the mindset and help them reframe it.",
            questionRu: "Ученик говорит: «Я провалил тест — я просто не математик.» Определите тип мышления и помогите переосмыслить.",
            questionKk: "Оқушы: «Тестті тапсырмадым — мен математик емеспін.» Ойлау түрін анықтаңыз және қайта құруға көмектесіңіз.",
            steps: [
              { en: "Identify: This is a fixed mindset statement — 'not a math person' implies math ability is an innate trait that cannot change.", ru: "Определите: Это фиксированное мышление — «не математик» подразумевает, что математические способности врождённые и неизменные.", kk: "Анықтаңыз: Бұл тіркелген ойлау — «математик емес» математикалық қабілеттің туа біткен және өзгермейтін қасиет екенін білдіреді." },
              { en: "Reframe to growth: 'I haven't mastered this math topic yet. The test showed me exactly what I need to study more. With different strategies and practice, I can improve my score next time.'", ru: "Переосмыслите на рост: «Я ещё не освоил эту тему. Тест показал, что нужно изучить. С другими стратегиями и практикой я улучшу результат.»", kk: "Өсуге қайта құрыңыз: «Мен бұл математика тақырыбын әлі меңгерген жоқпын. Тест маған не оқу керектігін көрсетті. Басқа стратегиялар мен жаттығу арқылы бағамды жақсарта аламын.»" }
            ],
            answer: "Fixed mindset: 'not a math person' = innate, unchangeable. Reframe: 'I haven't mastered this yet — the test shows what to work on, and with practice I will improve.'",
            answerRu: "Фиксированное мышление: «не математик» = врождённое, неизменное. Переосмысление: «Я ещё не освоил это — тест показывает, над чем работать, и с практикой я улучшусь».",
            answerKk: "Тіркелген ойлау: «мен математик емеспін» = туа біткен, өзгермейтін. Қайта құру: «Мен мұны әлі меңгермедім — тест ненің үстінде жұмыс істеу керектігін көрсетеді, жаттығу арқылы мен жақсарамын»."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the key difference between a fixed mindset and a growth mindset?",
            questionRu: "В чём ключевое различие между фиксированным мышлением и мышлением роста?",
            questionKk: "Тіркелген ойлау мен өсу ойлауының басты айырмашылығы неде?",
            answer: "Fixed mindset believes abilities are innate and cannot change. Growth mindset believes abilities can be developed through effort and learning.",
            answerRu: "Фиксированное мышление считает, что способности врождённые и не могут измениться. Мышление роста считает, что способности можно развить через усилия и обучение.",
            answerKk: "Тіркелген ойлау қабілеттер туа біткен және өзгермейді деп санайды. Өсу ойлауы қабілеттерді күш-жігер мен оқу арқылы дамытуға болады деп санайды.",
            hint: "One says 'I can't,' the other says 'I can't yet.'",
            hintRu: "Одно говорит «я не могу», другое — «я пока не могу».",
            hintKk: "Біреуі «мен қолымнан келмейді» дейді, екіншісі «мен әлі қолымнан келмейді» дейді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite these fixed mindset statements as growth mindset statements: (a) 'I'll never be good at public speaking.' (b) 'She's just naturally talented — I can't compete.'",
            questionRu: "Перепишите фиксированные утверждения как утверждения роста: (а) «Я никогда не буду хорошо выступать.» (б) «У неё просто природный талант — мне не соревноваться.»",
            questionKk: "Тіркелген ойлау мәлімдемелерін өсу ойлауына қайта жазыңыз: (а) «Мен ешқашан жақсы сөйлей алмаймын.» (б) «Оның табиғи таланты бар — мен бәсекелесе алмаймын.»",
            answer: "(a) 'I'm still developing my public speaking skills — each presentation is practice that makes me better.' (b) 'She has practiced a lot to get where she is. I can develop my own skills with similar dedication.'",
            answerRu: "(а) «Я всё ещё развиваю навыки публичных выступлений — каждая презентация делает меня лучше.» (б) «Она много практиковалась, чтобы достичь своего уровня. Я могу развить свои навыки с такой же самоотдачей.»",
            answerKk: "(а) «Мен көпшілік алдында сөйлеу дағдыларымды әлі дамытып жатырмын — әр презентация мені жақсартады.» (б) «Ол қазіргі деңгейіне жету үшін көп жаттықты. Мен де сондай адалдықпен өз дағдыларымды дамыта аламын.»",
            hint: "Replace 'never' and 'can't' with 'not yet' and 'can with effort.'",
            hintRu: "Замените «никогда» и «не могу» на «пока не» и «могу с усилием».",
            hintKk: "«Ешқашан» және «қолымнан келмейді» сөздерін «әлі емес» және «күш-жігермен қолымнан келеді» деп ауыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A parent praises their child by saying 'You're so smart!' Explain why Carol Dweck considers this problematic and suggest a better alternative using growth mindset research.",
            questionRu: "Родитель хвалит ребёнка: «Ты такой умный!» Объясните, почему Кэрол Двек считает это проблематичным, и предложите альтернативу.",
            questionKk: "Ата-ана баласын: «Сен өте ақылдысың!» деп мақтайды. Кэрол Двек мұны неліктен проблемалы деп санайтынын түсіндіріңіз және баламасын ұсыныңыз.",
            answer: "Praising intelligence ('You're so smart') reinforces a fixed mindset — the child learns their worth comes from being smart, so they avoid challenges that might make them look not smart. Better alternative: praise effort and process — 'I'm really proud of how hard you worked on this' or 'Your strategy of breaking the problem into parts was very clever.' This teaches that success comes from effort, not innate ability.",
            answerRu: "Похвала за ум («Ты такой умный») закрепляет фиксированное мышление — ребёнок усваивает, что его ценность в уме, и избегает задач, где может выглядеть неумным. Лучшая альтернатива: хвалите усилия и процесс — «Я очень горжусь тем, как усердно ты над этим работал» или «Твоя стратегия разбить задачу на части была очень умной». Это учит, что успех приходит от усилий, а не от врождённых способностей.",
            answerKk: "Ақылды мақтау («Сен өте ақылдысың») тіркелген ойлауды нығайтады — бала өз құндылығы ақылды болудан туады деп үйренеді, сондықтан ақылсыз көрсетуі мүмкін сын-қатерлерден қашады. Жақсырақ балама: күш-жігер мен процесті мақтау — «Бұның үстінде қандай қатты жұмыс істегеніңмен мақтан тұтамын» немесе «Мәселені бөліктерге бөлу стратегияң өте тапқыр болды». Бұл табыс туа біткен қабілеттен емес, күш-жігерден келетінін үйретеді.",
            hint: "What happens when a 'smart' child faces a problem they can't solve easily?",
            hintRu: "Что происходит, когда «умный» ребёнок сталкивается с задачей, которую не может решить?",
            hintKk: "«Ақылды» бала оңай шеше алмайтын мәселеге тап болғанда не болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Social Media & Mental Health",
        titleRu: "Социальные сети и психическое здоровье",
        titleKk: "Әлеуметтік желілер және психикалық денсаулық",
        content: "Social media can connect people and provide information, but excessive use is linked to anxiety, depression, and low self-esteem, especially in teenagers. The Social Comparison Theory explains why we feel worse after scrolling — we compare our real lives to others' curated highlights. Setting intentional boundaries around social media use protects mental health.",
        contentRu: "Социальные сети соединяют людей и предоставляют информацию, но чрезмерное использование связано с тревогой, депрессией и низкой самооценкой, особенно у подростков. Теория социального сравнения объясняет, почему после скроллинга нам хуже — мы сравниваем реальную жизнь с отредактированными моментами других.",
        contentKk: "Әлеуметтік желілер адамдарды байланыстырады, бірақ шамадан тыс пайдалану алаңдаушылық, депрессия және төмен өзін-өзі бағалаумен байланысты. Әлеуметтік салыстыру теориясы жылжытқаннан кейін неліктен нашар сезінетінімізді түсіндіреді — біз нақты өмірімізді басқалардың таңдамалы сәттерімен салыстырамыз.",
        keyFormulas: [
          {
            formula: "Social Comparison Theory (Festinger): Upward comparison (to 'better' people) → decreased self-esteem",
            description: "Comparing yourself to people who seem more successful lowers your mood",
            descriptionRu: "Сравнение с теми, кто кажется успешнее, снижает настроение",
            descriptionKk: "Табысты көрінетін адамдармен салыстыру көңіл-күйді төмендетеді"
          },
          {
            formula: "Digital Wellness Plan: Set time limits → Curate your feed → Schedule offline time",
            description: "A three-step approach to healthier social media habits",
            descriptionRu: "Трёхшаговый подход к здоровым привычкам в соцсетях",
            descriptionKk: "Әлеуметтік желілердегі сау әдеттерге үш қадамдық тәсіл"
          }
        ],
        solvedExamples: [
          {
            question: "Aliya spends 4 hours daily on Instagram and feels ugly after seeing influencer photos. Use Social Comparison Theory to explain what is happening and suggest a Digital Wellness Plan.",
            questionRu: "Алия проводит 4 часа в день в Instagram и чувствует себя некрасивой после фото инфлюенсеров. Используйте Теорию социального сравнения и предложите план.",
            questionKk: "Алия күніне 4 сағат Instagram-да өткізеді және инфлюенсер фотоларынан кейін өзін сұлу емеспін деп сезінеді. Әлеуметтік салыстыру теориясын қолданып, жоспар ұсыныңыз.",
            steps: [
              { en: "Explain the mechanism: Aliya is engaging in upward social comparison — comparing her unfiltered life to influencers' curated, edited highlights. This creates an unrealistic standard and lowers self-esteem.", ru: "Объясните механизм: Алия занимается восходящим сравнением — сравнивает реальную жизнь с отредактированными фото инфлюенсеров. Это создаёт нереалистичный стандарт.", kk: "Механизмді түсіндіріңіз: Алия жоғары бағытты салыстырумен айналысады — нақты өмірін инфлюенсерлердің өңделген фотоларымен салыстырады. Бұл шындыққа сай емес стандарт жасайды." },
              { en: "Digital Wellness Plan: (1) Set a 1-hour daily limit on Instagram. (2) Unfollow accounts that make her feel bad and follow body-positive and educational accounts. (3) Replace one hour of scrolling with an offline hobby like drawing or walking.", ru: "План: (1) Ограничить Instagram до 1 часа в день. (2) Отписаться от аккаунтов, вызывающих негатив, подписаться на позитивные. (3) Заменить час скроллинга офлайн-хобби.", kk: "Жоспар: (1) Instagram-ды күніне 1 сағатпен шектеу. (2) Жаман сезіндіретін аккаунттардан бас тарту, позитивтілерге жазылу. (3) Бір сағат жылжытуды офлайн хоббимен ауыстыру." }
            ],
            answer: "Upward social comparison to curated influencer content lowers self-esteem. Solution: Set time limits (1 hr), curate feed (unfollow negative, follow positive), add offline activities.",
            answerRu: "Восходящее социальное сравнение с отредактированным контентом инфлюенсеров снижает самооценку. Решение: установить лимиты времени (1 ч), курировать ленту (отписаться от негативных, подписаться на позитивные), добавить офлайн-активности.",
            answerKk: "Инфлюенсерлердің өңделген мазмұнымен жоғары бағытты әлеуметтік салыстыру өзін-өзі бағалауды төмендетеді. Шешім: уақыт шектерін қою (1 сағ), ленталарды кураторлау (жағымсыздан бас тарту, жағымдыға жазылу), офлайн әрекеттер қосу."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is upward social comparison according to Festinger's theory?",
            questionRu: "Что такое восходящее социальное сравнение по теории Фестингера?",
            questionKk: "Фестингер теориясы бойынша жоғары бағытты әлеуметтік салыстыру деген не?",
            answer: "Comparing yourself to people who seem better, more successful, or more attractive than you, which often lowers self-esteem.",
            answerRu: "Сравнение себя с людьми, которые кажутся лучше, успешнее или привлекательнее вас, что часто снижает самооценку.",
            answerKk: "Өзіңізді жақсырақ, табыстырақ немесе тартымдырақ көрінетін адамдармен салыстыру, бұл жиі өзін-өзі бағалауды төмендетеді.",
            hint: "Think of looking 'up' at someone you perceive as better.",
            hintRu: "Представьте, что смотрите «вверх» на того, кто кажется лучше.",
            hintKk: "Жақсырақ көрінетін біреуге «жоғары» қарауды елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a personal Digital Wellness Plan with three specific rules for your own social media use.",
            questionRu: "Создайте личный план цифрового здоровья с тремя конкретными правилами для использования соцсетей.",
            questionKk: "Әлеуметтік желілерді пайдалану үшін үш нақты ережемен жеке Цифрлық денсаулық жоспарын жасаңыз.",
            answer: "Example: (1) No phone for the first 30 minutes after waking up. (2) Unfollow 5 accounts that make me feel bad this week. (3) Spend at least 1 hour daily on offline hobbies. Any valid, specific rules are acceptable.",
            answerRu: "Пример: (1) Не брать телефон первые 30 минут после пробуждения. (2) Отписаться от 5 аккаунтов, вызывающих плохие чувства, на этой неделе. (3) Проводить минимум 1 час в день на офлайн-хобби. Подойдут любые обоснованные конкретные правила.",
            answerKk: "Мысал: (1) Оянғаннан кейінгі алғашқы 30 минутта телефон ұстамау. (2) Осы аптада жаман сезіндіретін 5 аккаунттан бас тарту. (3) Күн сайын кемінде 1 сағат офлайн хоббиге жұмсау. Кез келген негізделген нақты ережелер жарайды.",
            hint: "Think about time limits, content choices, and offline alternatives.",
            hintRu: "Подумайте о лимитах времени, выборе контента и офлайн-альтернативах.",
            hintKk: "Уақыт шектеулері, мазмұн таңдау және офлайн балама туралы ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some argue that social media is beneficial because it connects people globally. Using Social Comparison Theory, explain why connection and comparison can coexist, and propose how platforms could be redesigned to maximize connection while minimizing harmful comparison.",
            questionRu: "Некоторые утверждают, что соцсети полезны, так как объединяют людей. Объясните, как связь и сравнение сосуществуют, и предложите, как перепроектировать платформы.",
            questionKk: "Кейбіреулер әлеуметтік желілер пайдалы деп тұжырымдайды, себебі адамдарды байланыстырады. Байланыс пен салыстыру қалай бірге өмір сүретінін түсіндіріңіз және платформаларды қалай қайта жобалауға болатынын ұсыныңыз.",
            answer: "Connection and comparison coexist because the same features (profiles, photos, likes) enable both. Redesign proposals: (1) Hide like counts to reduce quantified comparison. (2) Prioritize close friends' content over influencers in the algorithm. (3) Add prompts that encourage genuine interaction (commenting, calling) over passive scrolling. (4) Include daily usage summaries with well-being check-ins. These changes keep connection while reducing the triggers for upward comparison.",
            answerRu: "Связь и сравнение сосуществуют, потому что одни и те же функции (профили, фото, лайки) обеспечивают и то, и другое. Предложения по редизайну: (1) Скрыть количество лайков, чтобы снизить количественное сравнение. (2) В алгоритме отдавать приоритет контенту близких друзей перед инфлюенсерами. (3) Добавить подсказки, поощряющие настоящее взаимодействие (комментарии, звонки) вместо пассивного скроллинга. (4) Включить ежедневные сводки использования с проверками самочувствия. Эти изменения сохраняют связь, снижая триггеры восходящего сравнения.",
            answerKk: "Байланыс пен салыстыру бірге өмір сүреді, себебі бірдей мүмкіндіктер (профильдер, фотолар, лайктар) екеуін де қамтамасыз етеді. Қайта жобалау ұсыныстары: (1) Сандық салыстыруды азайту үшін лайк санын жасыру. (2) Алгоритмде инфлюенсерлерден бұрын жақын достардың мазмұнына басымдық беру. (3) Пассивті жылжытудың орнына нағыз өзара әрекеттесуді (пікір жазу, қоңырау шалу) ынталандыратын кеңестер қосу. (4) Әл-ауқатты тексерумен күнделікті пайдалану қорытындыларын қосу. Бұл өзгерістер жоғары бағытты салыстыру триггерлерін азайта отырып, байланысты сақтайды.",
            hint: "Think about which specific features drive comparison (likes, followers, curated photos) versus which drive connection (messaging, groups, events).",
            hintRu: "Подумайте, какие функции стимулируют сравнение (лайки, подписчики) и какие — связь (сообщения, группы).",
            hintKk: "Қандай мүмкіндіктер салыстыруды (лайктар, жазылушылар) және қандай мүмкіндіктер байланысты (хабарламалар, топтар) ынталандыратынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Body Language",
        titleRu: "Язык тела",
        titleKk: "Дене тілі",
        content: "Research by Albert Mehrabian suggests that in emotional communication, only 7% of meaning comes from words, while 38% comes from tone of voice and 55% from body language. Understanding nonverbal cues like posture, facial expressions, gestures, and personal space helps you read situations more accurately and present yourself more effectively.",
        contentRu: "Исследования Альберта Мехрабиана показывают, что в эмоциональной коммуникации лишь 7% значения передаётся словами, 38% — тоном голоса и 55% — языком тела. Понимание невербальных сигналов помогает точнее читать ситуации и представлять себя эффективнее.",
        contentKk: "Альберт Мехрабианның зерттеулері эмоциялық коммуникацияда мағынаның тек 7%-ы сөздерден, 38%-ы дауыс тонынан және 55%-ы дене тілінен келетінін көрсетеді. Бейвербалды белгілерді түсіну жағдайларды дәлірек оқуға және өзіңізді тиімдірек ұсынуға көмектеседі.",
        keyFormulas: [
          {
            formula: "Mehrabian's Rule: 7% words + 38% tone + 55% body language = 100% of emotional message",
            description: "In emotional contexts, how you say it matters far more than what you say",
            descriptionRu: "В эмоциональных контекстах то, как вы говорите, важнее того, что вы говорите",
            descriptionKk: "Эмоциялық контексттерде не айтатыныңыздан гөрі қалай айтатыныңыз маңыздырақ"
          },
          {
            formula: "Open vs. Closed Body Language: Open (uncrossed arms, eye contact, leaning in) vs. Closed (crossed arms, looking away, leaning back)",
            description: "Two contrasting sets of nonverbal signals indicating receptivity or defensiveness",
            descriptionRu: "Два набора невербальных сигналов: открытость или защита",
            descriptionKk: "Қабылдауды немесе қорғанысты білдіретін екі контрасты бейвербалды сигнал жиыны"
          }
        ],
        solvedExamples: [
          {
            question: "During a group project meeting, your teammate says 'I'm fine with whatever you decide' while crossing their arms and avoiding eye contact. What is the real message?",
            questionRu: "На встрече по проекту одноклассник говорит «Мне всё равно, решайте» со скрещенными руками и без зрительного контакта. Каково настоящее сообщение?",
            questionKk: "Топтық жоба кездесуінде серіктесіңіз «Маған бәрібір, өздеріңіз шешіңіздер» деп қолдарын айқастырып, көз контактісінен қашады. Нақты хабарлама қандай?",
            steps: [
              { en: "Analyze the mismatch: Words say 'I'm fine' (agreement), but body language (crossed arms = closed, no eye contact = disengagement) says 'I disagree but don't want to say it.'", ru: "Проанализируйте несоответствие: Слова говорят «всё хорошо» (согласие), но тело (скрещенные руки, нет контакта глаз) говорит «я не согласен, но не хочу это говорить».", kk: "Сәйкессіздікті талдаңыз: Сөздер «жақсы» дейді (келісім), бірақ дене тілі (айқастырылған қолдар, көз контактісі жоқ) «келіспеймін, бірақ айтқым келмейді» дейді." },
              { en: "Apply Mehrabian: Since 93% of the emotional message is nonverbal, trust the body language over the words. The teammate likely disagrees. Respond by asking: 'I notice you seem hesitant — is there something you'd like to suggest?'", ru: "Применяйте Мехрабиана: 93% эмоционального сообщения невербально, доверяйте телу. Спросите: «Ты, кажется, сомневаешься — хочешь что-то предложить?»", kk: "Мехрабианды қолданыңыз: Эмоциялық хабарламаның 93%-ы бейвербалды, дене тіліне сеніңіз. Сұраңыз: «Сен тартыншақ көрінесің — бірдеңе ұсынғың келе ме?»" }
            ],
            answer: "The body language (closed posture, no eye contact) contradicts the words ('I'm fine'). Per Mehrabian, trust the nonverbal cues — the teammate likely disagrees. Address it by gently asking for their real opinion.",
            answerRu: "Язык тела (закрытая поза, нет зрительного контакта) противоречит словам («мне всё равно»). По Мехрабиану, доверяйте невербальным сигналам — товарищ, скорее всего, не согласен. Решите это, мягко спросив его настоящее мнение.",
            answerKk: "Дене тілі (жабық позиция, көз контактісі жоқ) сөздерге («маған бәрібір») қайшы келеді. Мехрабиан бойынша бейвербалды белгілерге сеніңіз — серіктес, бәлкім, келіспейді. Оның нақты пікірін жұмсақ сұрап шешіңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "According to Mehrabian, what percentage of emotional communication comes from body language?",
            questionRu: "Согласно Мехрабиану, какой процент эмоциональной коммуникации приходится на язык тела?",
            questionKk: "Мехрабиан бойынша, эмоциялық коммуникацияның қанша пайызы дене тілінен келеді?",
            answer: "55% comes from body language.",
            answerRu: "55% приходится на язык тела.",
            answerKk: "55%-ы дене тілінен келеді.",
            hint: "It is the largest of the three channels (words, tone, body).",
            hintRu: "Это самый большой из трёх каналов (слова, тон, тело).",
            hintKk: "Бұл үш арнаның (сөздер, тон, дене) ішіндегі ең үлкені.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "List three examples of open body language and three examples of closed body language.",
            questionRu: "Приведите три примера открытого и три примера закрытого языка тела.",
            questionKk: "Ашық дене тілінің үш мысалын және жабық дене тілінің үш мысалын келтіріңіз.",
            answer: "Open: uncrossed arms, maintaining eye contact, leaning slightly forward. Closed: crossed arms, avoiding eye contact, turning body away.",
            answerRu: "Открытый: нескрещенные руки, зрительный контакт, лёгкий наклон вперёд. Закрытый: скрещенные руки, избегание зрительного контакта, отворачивание тела.",
            answerKk: "Ашық: айқастырылмаған қолдар, көз контактісін сақтау, сәл алға еңкею. Жабық: айқастырылған қолдар, көз контактісінен қашу, денені бұру.",
            hint: "Open body language makes you look approachable; closed makes you look defensive.",
            hintRu: "Открытый язык тела делает вас доступным; закрытый — защищающимся.",
            hintKk: "Ашық дене тілі сізді жақын етеді; жабық — қорғанышты көрсетеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Mehrabian's 7-38-55 rule is often misquoted as applying to all communication. Explain the original context of his research and why applying it universally is a mistake.",
            questionRu: "Правило Мехрабиана 7-38-55 часто ошибочно применяют ко всей коммуникации. Объясните оригинальный контекст и почему универсальное применение — ошибка.",
            questionKk: "Мехрабианның 7-38-55 ережесі жиі барлық коммуникацияға қолданылады. Бастапқы контекстін түсіндіріңіз және неліктен әмбебап қолдану қате.",
            answer: "Mehrabian's research specifically studied emotional communication — when someone is expressing feelings or attitudes, especially when words and tone/body conflict. It does NOT apply to all communication. For factual information ('The meeting is at 3pm'), words carry nearly 100% of the meaning. The rule only applies when there is incongruence between verbal and nonverbal channels in emotional expression.",
            answerRu: "Исследование Мехрабиана конкретно изучало эмоциональную коммуникацию — когда кто-то выражает чувства или отношение, особенно когда слова и тон/тело противоречат друг другу. Оно НЕ применяется ко всей коммуникации. Для фактической информации («встреча в 15:00») слова несут почти 100% смысла. Правило действует только при несоответствии вербальных и невербальных каналов в эмоциональном выражении.",
            answerKk: "Мехрабианның зерттеуі нақты эмоциялық коммуникацияны зерттеді — біреу сезімдерін немесе көзқарасын білдіргенде, әсіресе сөздер мен тон/дене қайшы келгенде. Ол барлық коммуникацияға ҚОЛДАНЫЛМАЙДЫ. Фактілік ақпарат үшін («кездесу 15:00-де») сөздер мағынаның дерлік 100%-ын алып жүреді. Ереже эмоциялық көрініс кезінде вербалды және бейвербалды арналар арасында сәйкессіздік болғанда ғана қолданылады.",
            hint: "Think about whether a factual statement like 'water boils at 100 degrees' depends on body language.",
            hintRu: "Подумайте, зависит ли фактическое утверждение «вода кипит при 100°» от языка тела.",
            hintKk: "«Су 100 градуста қайнайды» сияқты фактілік мәлімдеме дене тіліне байланысты ма, ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Building Trust",
        titleRu: "Построение доверия",
        titleKk: "Сенім орнату",
        content: "Trust is the foundation of every meaningful relationship — personal, academic, and professional. The Trust Equation by David Maister states that trust is built through credibility, reliability, and intimacy, but is diminished by self-orientation. Building trust takes time and consistent action, but it can be destroyed by a single betrayal.",
        contentRu: "Доверие — основа каждых значимых отношений: личных, учебных и профессиональных. Уравнение доверия Дэвида Мейстера гласит, что доверие строится через компетентность, надёжность и близость, но уменьшается эгоцентричностью. Построение доверия требует времени, но может быть разрушено одним предательством.",
        contentKk: "Сенім — әр мағыналы қарым-қатынастың негізі: жеке, оқу және кәсіби. Дэвид Мейстердің Сенім теңдеуі сенімнің сенімділік, тұрақтылық және жақындық арқылы құрылатынын, бірақ эгоцентрлікпен азаятынын айтады. Сенім құру уақытты талап етеді, бірақ бір сатқындықпен бұзылуы мүмкін.",
        keyFormulas: [
          {
            formula: "Maister's Trust Equation: Trust = (Credibility + Reliability + Intimacy) ÷ Self-Orientation",
            description: "Trust increases with competence, consistency, and closeness, but decreases when someone is self-focused",
            descriptionRu: "Доверие растёт с компетентностью, последовательностью и близостью, но падает при эгоцентричности",
            descriptionKk: "Сенім құзыреттілік, тұрақтылық және жақындықпен өседі, бірақ эгоцентрлікте төмендейді"
          },
          {
            formula: "Trust Repair: Acknowledge → Apologize → Make amends → Consistent change over time",
            description: "The process for rebuilding trust after it has been broken",
            descriptionRu: "Процесс восстановления доверия после его нарушения",
            descriptionKk: "Бұзылған сенімді қалпына келтіру процесі"
          }
        ],
        solvedExamples: [
          {
            question: "Your friend lied to you about where they were last weekend. Use the Trust Equation to analyze which component was damaged, and suggest how they could repair trust.",
            questionRu: "Друг солгал вам о том, где был на выходных. Используя Уравнение доверия, определите повреждённый компонент и предложите восстановление.",
            questionKk: "Досыңыз демалыс күні қайда болғаны туралы өтірік айтты. Сенім теңдеуін қолданып, қандай компонент зақымдалғанын анықтаңыз және сенімді қалпына келтіруді ұсыныңыз.",
            steps: [
              { en: "Identify the damaged component: Credibility (they said something untrue) and Reliability (you can no longer count on their word) are both damaged. This significantly lowers the numerator of the Trust Equation.", ru: "Определите повреждённый компонент: Компетентность (сказали неправду) и Надёжность (нельзя полагаться на слово) повреждены. Числитель Уравнения доверия снижен.", kk: "Зақымдалған компонентті анықтаңыз: Сенімділік (шындықты айтпады) және Тұрақтылық (сөзіне сенуге болмайды) зақымдалған. Сенім теңдеуінің алымы төмендеді." },
              { en: "Suggest repair: Follow the Trust Repair process — (1) Acknowledge the lie honestly, (2) Apologize sincerely, (3) Explain why they lied, (4) Demonstrate consistent honesty over the following weeks to rebuild credibility and reliability.", ru: "Предложите восстановление: (1) Честно признать ложь, (2) Искренне извиниться, (3) Объяснить причину, (4) Показать последовательную честность в следующие недели.", kk: "Қалпына келтіруді ұсыныңыз: (1) Өтірікті адал мойындау, (2) Шын жүректен кешірім сұрау, (3) Себебін түсіндіру, (4) Келесі апталарда тұрақты адалдық көрсету." }
            ],
            answer: "Credibility and Reliability were damaged. Repair: Acknowledge the lie → Apologize sincerely → Explain the reason → Show consistent honesty over time to rebuild the trust equation's numerator.",
            answerRu: "Пострадали Компетентность и Надёжность. Восстановление: признать ложь → искренне извиниться → объяснить причину → показывать последовательную честность со временем, чтобы восстановить числитель уравнения доверия.",
            answerKk: "Сенімділік пен Тұрақтылық зақымдалды. Қалпына келтіру: өтірікті мойындау → шын жүректен кешірім сұрау → себебін түсіндіру → сенім теңдеуінің алымын қалпына келтіру үшін уақыт өте тұрақты адалдық көрсету."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the four components of Maister's Trust Equation?",
            questionRu: "Каковы четыре компонента Уравнения доверия Мейстера?",
            questionKk: "Мейстердің Сенім теңдеуінің төрт компоненті қандай?",
            answer: "Credibility, Reliability, and Intimacy (in the numerator) and Self-Orientation (in the denominator).",
            answerRu: "Компетентность, Надёжность и Близость (в числителе) и Эгоцентричность (в знаменателе).",
            answerKk: "Сенімділік, Тұрақтылық және Жақындық (алымда) және Эгоцентрлік (бөлімде).",
            hint: "Three things build trust and one thing destroys it.",
            hintRu: "Три вещи строят доверие, одна разрушает.",
            hintKk: "Үш нәрсе сенім орнатады, бір нәрсе бұзады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A team leader always talks about their own accomplishments and rarely asks about team members' ideas. Which component of the Trust Equation is the problem, and how does it affect trust?",
            questionRu: "Лидер команды всегда говорит о своих достижениях и редко спрашивает об идеях участников. Какой компонент проблематичен?",
            questionKk: "Команда лидері әрқашан өз жетістіктері туралы сөйлейді және мүшелердің идеяларын сирек сұрайды. Қай компонент мәселе?",
            answer: "High Self-Orientation is the problem. Even if the leader is credible and reliable, their self-focus increases the denominator in the Trust Equation, which divides and reduces overall trust. Solution: Ask more questions, listen to others, and share credit.",
            answerRu: "Проблема — высокая Эгоцентричность. Даже если лидер компетентен и надёжен, его сосредоточенность на себе увеличивает знаменатель Уравнения доверия, что снижает общее доверие. Решение: задавать больше вопросов, слушать других и делиться заслугами.",
            answerKk: "Мәселе — жоғары Эгоцентрлік. Көшбасшы сенімді әрі тұрақты болса да, оның өзіне бағытталуы Сенім теңдеуінің бөлгішін арттырып, жалпы сенімді азайтады. Шешім: көбірек сұрақ қою, басқаларды тыңдау және еңбекті бөлісу.",
            hint: "Look at the denominator of the equation — what increases there?",
            hintRu: "Посмотрите на знаменатель уравнения — что там увеличивается?",
            hintKk: "Теңдеудің бөлгішіне қараңыз — онда не артады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Is it possible to fully rebuild trust after a major betrayal? Argue both sides using the Trust Equation and Trust Repair framework, then give your reasoned conclusion.",
            questionRu: "Можно ли полностью восстановить доверие после серьёзного предательства? Аргументируйте обе стороны, используя Уравнение доверия и рамку восстановления.",
            questionKk: "Үлкен сатқындықтан кейін сенімді толық қалпына келтіруге бола ма? Сенім теңдеуі мен Қалпына келтіру шеңберін қолданып, екі жағын да дәлелдеңіз.",
            answer: "For: Trust Repair (acknowledge, apologize, amends, consistent change) can rebuild all three numerator components over time. People do forgive and relationships can become stronger after surviving betrayal. Against: The memory of betrayal may permanently increase perceived Self-Orientation ('they might be lying again for their own benefit'), keeping the denominator high. Conclusion: Full trust can be rebuilt in many cases, but it requires significantly more consistent positive behavior than the original trust-building did. Some relationships recover stronger; others remain permanently weakened. The outcome depends on the severity of the betrayal and the quality of the repair effort.",
            answerRu: "За: Восстановление доверия (признание, извинение, возмещение, последовательные изменения) может со временем восстановить все три компонента числителя. Люди прощают, и отношения могут стать крепче после преодоления предательства. Против: память о предательстве может навсегда повысить воспринимаемую Эгоцентричность («возможно, они снова лгут ради своей выгоды»), удерживая знаменатель высоким. Вывод: полное доверие можно восстановить во многих случаях, но это требует значительно более последовательного позитивного поведения, чем изначальное построение доверия. Некоторые отношения становятся крепче; другие остаются навсегда ослабленными. Результат зависит от тяжести предательства и качества усилий по восстановлению.",
            answerKk: "Жақтаушылар: Сенімді қалпына келтіру (мойындау, кешірім сұрау, өтеу, тұрақты өзгеру) уақыт өте келе алымның үш компонентін де қалпына келтіре алады. Адамдар кешіреді, ал қарым-қатынастар сатқындықтан аман қалғаннан кейін күштірек болуы мүмкін. Қарсылар: сатқындық естелігі қабылданатын Эгоцентрлікті мәңгі арттыруы мүмкін («олар өз пайдасы үшін тағы да өтірік айтуы мүмкін»), бөлгішті жоғары ұстайды. Қорытынды: көп жағдайда толық сенімді қалпына келтіруге болады, бірақ бұл бастапқы сенім құрудан әлдеқайда тұрақты оң мінез-құлықты талап етеді. Кейбір қарым-қатынастар күштірек қалпына келеді; басқалары мәңгі әлсіз қалады. Нәтиже сатқындықтың ауырлығына және қалпына келтіру күш-жігерінің сапасына байланысты.",
            hint: "Think about whether the Trust Equation can return to its previous level, or whether something permanently changes.",
            hintRu: "Подумайте, может ли Уравнение доверия вернуться к прежнему уровню, или что-то меняется навсегда.",
            hintKk: "Сенім теңдеуі бұрынғы деңгейіне оралу мүмкін бе, әлде бірдеңе мәңгілік өзгере ме, ойлаңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Psychology & Social Intelligence_10": {
    planetName: "Psychology & Social Intelligence",
    introduction: {
      en: "Welcome to Psychology & Social Intelligence for Grade 10! You will explore cognitive biases, motivation theory, persuasion principles, group dynamics, decision making, memory, habits, and emotional intelligence assessment. These tools will sharpen your critical thinking and interpersonal effectiveness.",
      ru: "Добро пожаловать в Психологию и социальный интеллект для 10 класса! Вы изучите когнитивные искажения, теорию мотивации, принципы убеждения, групповую динамику, принятие решений, память, привычки и оценку эмоционального интеллекта. Эти инструменты улучшат ваше критическое мышление и межличностную эффективность."
    },
    sections: [
      {
        title: "Cognitive Biases",
        titleRu: "Когнитивные искажения",
        titleKk: "Когнитивті бұрмалаулар",
        content: "Cognitive biases are systematic errors in thinking that affect our judgments and decisions. Daniel Kahneman's dual-process theory explains that our fast, intuitive System 1 often produces these biases, while slower, analytical System 2 can catch them. Recognizing biases is the first step to making better decisions.",
        contentRu: "Когнитивные искажения — систематические ошибки мышления, влияющие на суждения и решения. Теория двойного процесса Даниэля Канемана объясняет, что быстрая интуитивная Система 1 часто порождает эти искажения, а медленная аналитическая Система 2 может их выявлять. Распознавание искажений — первый шаг к лучшим решениям.",
        contentKk: "Когнитивті бұрмалаулар — пайымдаулар мен шешімдерге әсер ететін жүйелі ойлау қателіктері. Даниэль Канеманның қос процесс теориясы жылдам, интуитивті Жүйе 1 бұл бұрмалауларды жиі тудыратынын, ал баяу, аналитикалық Жүйе 2 оларды анықтай алатынын түсіндіреді. Бұрмалауларды тану — жақсы шешімдерге бірінші қадам.",
        keyFormulas: [
          {
            formula: "Dual-Process Theory: System 1 (fast, intuitive, automatic) vs System 2 (slow, deliberate, analytical)",
            description: "Kahneman's two modes of thinking that explain how biases arise",
            descriptionRu: "Два режима мышления Канемана, объясняющие возникновение искажений",
            descriptionKk: "Канеманның бұрмалаулардың пайда болуын түсіндіретін екі ойлау режимі"
          },
          {
            formula: "Bias Detection: Pause → Identify the bias → Apply System 2 → Decide rationally",
            description: "A simple framework for catching cognitive biases before they affect decisions",
            descriptionRu: "Простая схема для выявления когнитивных искажений до принятия решений",
            descriptionKk: "Шешімдерге әсер етпес бұрын когнитивті бұрмалауларды анықтау схемасы"
          }
        ],
        solvedExamples: [
          {
            question: "A student studies only the night before exams and always passes. He concludes that cramming is the best study method. What bias is at work?",
            questionRu: "Ученик готовится только накануне экзаменов и всегда сдаёт. Он заключает, что зубрёжка — лучший метод. Какое искажение работает?",
            questionKk: "Оқушы тек емтихан алдында дайындалады және әрқашан тапсырады. Ол жаттау ең жақсы әдіс деп қорытынды жасайды. Қандай бұрмалау жұмыс істейді?",
            steps: [
              { en: "Identify the bias: This is Survivorship Bias combined with Confirmation Bias. The student only counts successes (passing) and ignores data like lower grades, forgotten material, or stress.", ru: "Определите искажение: Это ошибка выжившего в сочетании с предвзятостью подтверждения. Ученик считает только успехи и игнорирует низкие оценки, забытый материал или стресс.", kk: "Бұрмалауды анықтаңыз: Бұл Тірі қалған қателігі мен Растау бұрмалауының қосындысы. Оқушы тек табыстарды санайды және төмен бағаларды, ұмытылған материалды немесе стрессті елемейді." },
              { en: "Apply System 2: Compare cramming results with spaced study results objectively — look at long-term retention, exam scores, and stress levels. The data would likely show that spaced repetition outperforms cramming.", ru: "Примените Систему 2: Объективно сравните результаты зубрёжки с распределённым обучением — долгосрочное запоминание, баллы, стресс. Данные покажут преимущество интервального повторения.", kk: "Жүйе 2-ні қолданыңыз: Жаттау нәтижелерін аралықты оқумен объективті салыстырыңыз — ұзақ мерзімді есте сақтау, балл, стресс. Деректер аралықты қайталаудың артықшылығын көрсетеді." }
            ],
            answer: "Survivorship Bias and Confirmation Bias. The student only counts passing results while ignoring lower grades and poor retention. System 2 analysis comparing cramming vs spaced study would reveal cramming is inferior for long-term learning.",
            answerRu: "Ошибка выжившего и предвзятость подтверждения. Ученик считает только успешные результаты, игнорируя более низкие оценки и плохое запоминание. Анализ Системой 2, сравнивающий зубрёжку с распределённой учёбой, показал бы, что зубрёжка хуже для долгосрочного обучения.",
            answerKk: "Тірі қалған қателігі және Растау бұрмалауы. Оқушы тек табысты нәтижелерді санап, төмен бағалар мен нашар есте сақтауды елемейді. Жаттауды аралықты оқумен салыстыратын Жүйе 2 талдауы жаттаудың ұзақ мерзімді оқу үшін нашарырақ екенін көрсетер еді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between System 1 and System 2 thinking?",
            questionRu: "В чём разница между мышлением Системы 1 и Системы 2?",
            questionKk: "Жүйе 1 мен Жүйе 2 ойлауының айырмашылығы неде?",
            answer: "System 1 is fast, automatic, and intuitive — it handles routine decisions. System 2 is slow, deliberate, and analytical — it handles complex reasoning. Biases mostly come from System 1.",
            answerRu: "Система 1 быстрая, автоматическая и интуитивная — она обрабатывает рутинные решения. Система 2 медленная, обдуманная и аналитическая — она обрабатывает сложные рассуждения. Искажения в основном возникают из Системы 1.",
            answerKk: "Жүйе 1 жылдам, автоматты және интуитивті — ол күнделікті шешімдерді өңдейді. Жүйе 2 баяу, ойластырылған және аналитикалық — ол күрделі пайымдауларды өңдейді. Бұрмалаулар негізінен Жүйе 1-ден туындайды.",
            hint: "One is quick and effortless, the other requires concentration.",
            hintRu: "Одна быстрая и не требует усилий, другая требует концентрации.",
            hintKk: "Бірі жылдам және күш жұмсамайды, екіншісі шоғырлануды қажет етеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You see a news headline: '90% of successful entrepreneurs dropped out of college.' Explain why this is misleading using the concept of cognitive bias.",
            questionRu: "Вы видите заголовок: «90% успешных предпринимателей бросили колледж.» Объясните, почему это вводит в заблуждение, используя когнитивное искажение.",
            questionKk: "Сіз тақырыпты көресіз: «Табысты кәсіпкерлердің 90%-ы колледжді тастаған.» Когнитивті бұрмалау тұрғысынан бұның неліктен адастыратынын түсіндіріңіз.",
            answer: "This is Survivorship Bias. We only see successful dropouts, not the millions who dropped out and failed. The base rate of success among all dropouts is very low. A fair comparison would include all dropouts, not just the famous ones.",
            answerRu: "Это ошибка выжившего. Мы видим только успешных бросивших учёбу, а не миллионы тех, кто бросил и потерпел неудачу. Базовый уровень успеха среди всех бросивших очень низкий. Справедливое сравнение включало бы всех бросивших, а не только знаменитых.",
            answerKk: "Бұл Тірі қалған қателігі. Біз тек табысты оқудан шыққандарды көреміз, оқудан шығып сәтсіздікке ұшыраған миллиондарды емес. Барлық оқудан шыққандар арасында табыстың базалық деңгейі өте төмен. Әділ салыстыру тек танымалдарды емес, барлық оқудан шыққандарды қамтыр еді.",
            hint: "Think about who is missing from this statistic.",
            hintRu: "Подумайте, кого не хватает в этой статистике.",
            hintKk: "Бұл статистикада кім жетіспейтінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a personal 'bias audit' for a major decision you need to make (e.g., choosing a university). List at least three biases that might affect you and explain how you would counteract each one.",
            questionRu: "Разработайте личный «аудит искажений» для важного решения (например, выбор университета). Назовите минимум три искажения и объясните, как им противодействовать.",
            questionKk: "Маңызды шешім үшін жеке «бұрмалау аудитін» жасаңыз (мысалы, университет таңдау). Кемінде үш бұрмалауды атап, әрқайсысына қалай қарсы тұратыныңызды түсіндіріңіз.",
            answer: "Example audit: (1) Anchoring Bias — I might fixate on the first university I researched. Counter: research at least 5 options before narrowing down. (2) Availability Bias — I might overweight universities I see in media. Counter: use objective ranking data. (3) Bandwagon Effect — I might choose where my friends are going. Counter: evaluate based on my personal career goals and program strength. Apply System 2 by creating a weighted comparison spreadsheet.",
            answerRu: "Пример аудита: (1) Эффект якоря — я могу зациклиться на первом изученном университете. Противодействие: изучить минимум 5 вариантов перед сужением выбора. (2) Предвзятость доступности — я могу переоценивать университеты, которые вижу в СМИ. Противодействие: использовать объективные рейтинговые данные. (3) Эффект подражания толпе — я могу выбрать вуз, куда идут друзья. Противодействие: оценивать на основе личных карьерных целей и силы программы. Применить Систему 2, создав взвешенную сравнительную таблицу.",
            answerKk: "Аудит мысалы: (1) Зәкір бұрмалауы — мен зерттеген алғашқы университетке бекініп қалуым мүмкін. Қарсы шара: таңдауды тарылтпас бұрын кемінде 5 нұсқаны зерттеу. (2) Қолжетімділік бұрмалауы — мен БАҚ-та көретін университеттерді асыра бағалауым мүмкін. Қарсы шара: объективті рейтинг деректерін пайдалану. (3) Көпшілікке еру эффектісі — мен достарым баратын жерді таңдауым мүмкін. Қарсы шара: жеке мансап мақсаттары мен бағдарлама күшіне негізделіп бағалау. Салмақталған салыстыру кестесін жасап, Жүйе 2-ні қолдану.",
            hint: "Think about what mental shortcuts might distort your evaluation of universities.",
            hintRu: "Подумайте, какие ментальные короткие пути могут исказить вашу оценку университетов.",
            hintKk: "Қандай ақыл-ой тіректері университеттерді бағалауыңызды бұрмалауы мүмкін екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Confirmation Bias & Anchoring",
        titleRu: "Предвзятость подтверждения и эффект якоря",
        titleKk: "Растау бұрмалауы және зәкір эффектісі",
        content: "Confirmation bias is the tendency to search for, interpret, and remember information that confirms our existing beliefs. Anchoring bias occurs when we rely too heavily on the first piece of information we encounter. Together, these biases can lock us into poor decisions by narrowing our perspective.",
        contentRu: "Предвзятость подтверждения — склонность искать, интерпретировать и запоминать информацию, подтверждающую наши убеждения. Эффект якоря возникает, когда мы слишком полагаемся на первую полученную информацию. Вместе эти искажения могут заблокировать нас в плохих решениях, сужая перспективу.",
        contentKk: "Растау бұрмалауы — бар сенімдерімізді растайтын ақпаратты іздеу, түсіндіру және есте сақтау бейімділігі. Зәкір бұрмалауы кездескен алғашқы ақпаратқа шамадан тыс сенгенде пайда болады. Бірге бұл бұрмалаулар біздің көзқарасымызды тарылтып, нашар шешімдерге бекітеді.",
        keyFormulas: [
          {
            formula: "Confirmation Bias Loop: Belief → Selective Search → Biased Interpretation → Reinforced Belief",
            description: "How confirmation bias creates a self-reinforcing cycle",
            descriptionRu: "Как предвзятость подтверждения создаёт самоподкрепляющийся цикл",
            descriptionKk: "Растау бұрмалауы өзін-өзі нығайтатын циклді қалай жасайды"
          }
        ],
        solvedExamples: [
          {
            question: "A hiring manager interviews a candidate and notices the candidate went to the same university as the manager. The manager then focuses on the candidate's strengths and overlooks weaknesses. Identify the biases.",
            questionRu: "Менеджер проводит собеседование и замечает, что кандидат окончил тот же университет. Менеджер фокусируется на сильных сторонах и игнорирует слабые. Определите искажения.",
            questionKk: "Менеджер сұхбат жүргізеді және кандидаттың сол университетті бітіргенін байқайды. Менеджер күшті жақтарға назар аударып, әлсіздіктерді елемейді. Бұрмалауларды анықтаңыз.",
            steps: [
              { en: "The shared university creates an Anchoring effect — this first positive impression becomes the reference point for the entire evaluation.", ru: "Общий университет создаёт эффект якоря — первое положительное впечатление становится точкой отсчёта.", kk: "Ортақ университет зәкір эффектісін жасайды — бірінші оң әсер бағалаудың бүкіл негізіне айналады." },
              { en: "Confirmation Bias then kicks in: the manager selectively notices evidence that supports 'this is a good candidate' and downplays contradictory evidence. Solution: use a structured interview scorecard that evaluates all candidates on the same criteria.", ru: "Затем срабатывает предвзятость подтверждения: менеджер замечает только доказательства в пользу кандидата. Решение: использовать структурированную оценочную карту.", kk: "Содан кейін Растау бұрмалауы іске қосылады: менеджер тек кандидатты қолдайтын дәлелдерді байқайды. Шешім: құрылымдық бағалау картасын қолдану." }
            ],
            answer: "Anchoring Bias (first impression from shared university) plus Confirmation Bias (selectively noticing strengths). Counter with structured interview scorecards evaluating all candidates on identical criteria.",
            answerRu: "Эффект якоря (первое впечатление от общего университета) плюс предвзятость подтверждения (избирательное замечание сильных сторон). Противодействовать структурированными оценочными картами собеседования, оценивающими всех кандидатов по одинаковым критериям.",
            answerKk: "Зәкір бұрмалауы (ортақ университеттен алғашқы әсер) плюс Растау бұрмалауы (күшті жақтарды таңдап байқау). Барлық кандидаттарды бірдей критерийлер бойынша бағалайтын құрылымдық сұхбат бағалау карталарымен қарсы тұру."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Define confirmation bias in one sentence.",
            questionRu: "Дайте определение предвзятости подтверждения в одном предложении.",
            questionKk: "Растау бұрмалауын бір сөйлеммен анықтаңыз.",
            answer: "Confirmation bias is the tendency to seek, interpret, and remember information that confirms what we already believe.",
            answerRu: "Предвзятость подтверждения — это склонность искать, интерпретировать и запоминать информацию, подтверждающую то, во что мы уже верим.",
            answerKk: "Растау бұрмалауы — біз бұрыннан сенетін нәрсені растайтын ақпаратты іздеу, түсіндіру және есте сақтау бейімділігі.",
            hint: "It is about favoring information that matches your existing views.",
            hintRu: "Это о предпочтении информации, совпадающей с вашими убеждениями.",
            hintKk: "Бұл бар сенімдеріңізге сәйкес келетін ақпаратты таңдау туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A store prices a jacket at $500, then marks it down to $200. Why do shoppers feel it is a great deal, even if the jacket is only worth $150? Explain using anchoring bias.",
            questionRu: "Магазин оценивает куртку в $500, затем снижает до $200. Почему покупатели считают это выгодной сделкой, даже если куртка стоит только $150?",
            questionKk: "Дүкен күртеше бағасын $500 деп қойып, $200-ге дейін түсіреді. Неліктен сатып алушылар бұл тиімді мәміле деп санайды, тіпті күртеше тек $150 тұрса да?",
            answer: "The $500 original price serves as an anchor. Shoppers compare $200 to $500 rather than to the jacket's actual value. The 60% discount feels like a bargain even though $200 still exceeds the real worth of $150. To counter this, shoppers should compare prices across stores rather than relying on the marked-down price alone.",
            answerRu: "Первоначальная цена $500 служит якорем. Покупатели сравнивают $200 с $500, а не с реальной стоимостью куртки. Скидка в 60% кажется выгодной сделкой, хотя $200 всё равно превышает реальную стоимость $150. Чтобы противодействовать этому, покупателям следует сравнивать цены в разных магазинах, а не полагаться только на цену со скидкой.",
            answerKk: "Бастапқы $500 бағасы зәкір ретінде қызмет етеді. Сатып алушылар $200-ді күртешенің нақты құнымен емес, $500-мен салыстырады. 60% жеңілдік тиімді мәміле болып көрінеді, тіпті $200 нақты $150 құнынан асып тұрса да. Мұған қарсы тұру үшін сатып алушылар тек жеңілдік бағасына сенбей, дүкендер арасында бағаны салыстыруы керек.",
            hint: "What number are shoppers unconsciously comparing the sale price to?",
            hintRu: "С каким числом покупатели бессознательно сравнивают цену со скидкой?",
            hintKk: "Сатып алушылар жеңілдік бағасын қай санмен бейсаналық түрде салыстырады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "How might confirmation bias affect someone researching whether a specific diet is healthy? Describe the bias cycle and propose a debiasing strategy.",
            questionRu: "Как предвзятость подтверждения может повлиять на того, кто исследует пользу определённой диеты? Опишите цикл и предложите стратегию устранения.",
            questionKk: "Растау бұрмалауы белгілі бір диетаның пайдалы екенін зерттеп жатқан адамға қалай әсер етуі мүмкін? Циклді сипаттап, бұрмалауды жою стратегиясын ұсыныңыз.",
            answer: "Cycle: Person believes the diet works → searches 'benefits of X diet' (not 'risks') → reads only positive articles → ignores studies showing harm → belief strengthens. Debiasing: (1) actively search for counter-evidence ('risks of X diet'), (2) read peer-reviewed meta-analyses rather than blogs, (3) consult professionals who have no financial interest in the diet, (4) keep a decision journal noting evidence for and against.",
            answerRu: "Цикл: Человек верит, что диета работает → ищет «пользу диеты X» (а не «риски») → читает только позитивные статьи → игнорирует исследования о вреде → убеждение усиливается. Устранение искажения: (1) активно искать контрдоказательства («риски диеты X»), (2) читать рецензируемые метаанализы, а не блоги, (3) консультироваться со специалистами, не имеющими финансового интереса в диете, (4) вести дневник решений, отмечая доказательства за и против.",
            answerKk: "Цикл: Адам диета жұмыс істейді деп сенеді → «X диетасының пайдасын» іздейді («қауіптерін» емес) → тек оң мақалаларды оқиды → зиянды көрсететін зерттеулерді елемейді → сенім күшейеді. Бұрмалауды жою: (1) белсенді түрде қарсы дәлелдерді іздеу («X диетасының қауіптері»), (2) блогтарды емес, рецензияланған мета-талдауларды оқу, (3) диетада қаржылық мүддесі жоқ мамандармен кеңесу, (4) жақтаушы және қарсы дәлелдерді белгілейтін шешім күнделігін жүргізу.",
            hint: "Think about what search terms they would use and what sources they would trust.",
            hintRu: "Подумайте, какие поисковые запросы они используют и каким источникам доверяют.",
            hintKk: "Олар қандай іздеу сұраныстарын қолданатынын және қандай дереккөздерге сенетінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Maslow's Hierarchy",
        titleRu: "Пирамида Маслоу",
        titleKk: "Маслоу пирамидасы",
        content: "Abraham Maslow proposed that human needs form a hierarchy: physiological, safety, love and belonging, esteem, and self-actualization. Lower needs must generally be satisfied before higher ones become motivating. Understanding this hierarchy helps explain why people behave differently depending on which needs are unmet.",
        contentRu: "Абрахам Маслоу предположил, что потребности человека образуют иерархию: физиологические, безопасность, любовь и принадлежность, уважение и самоактуализация. Низшие потребности должны быть удовлетворены, прежде чем высшие станут мотивирующими. Понимание иерархии объясняет поведение людей.",
        contentKk: "Абрахам Маслоу адам қажеттіліктері иерархия құрайды деп ұсынды: физиологиялық, қауіпсіздік, махаббат пен тиесілілік, құрмет және өзін-өзі жүзеге асыру. Төменгі қажеттіліктер жоғарғылар мотивация бермес бұрын қанағаттандырылуы керек.",
        keyFormulas: [
          {
            formula: "Maslow's Hierarchy (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-Actualization",
            description: "Five levels of human needs from most basic to highest",
            descriptionRu: "Пять уровней потребностей человека от базовых до высших",
            descriptionKk: "Адам қажеттіліктерінің бес деңгейі, базалықтан жоғарыға дейін"
          },
          {
            formula: "Deficit Needs (D-needs) vs Growth Needs (B-needs): Levels 1-4 are deficit needs; Level 5 is a growth need",
            description: "Deficit needs arise from deprivation; growth needs arise from desire to develop",
            descriptionRu: "Дефицитные потребности возникают от нехватки; потребности роста — от желания развиваться",
            descriptionKk: "Тапшылық қажеттіліктер жетіспеушіліктен, өсу қажеттіліктері даму тілегінен туады"
          }
        ],
        solvedExamples: [
          {
            question: "A refugee student has just arrived at a new school. She struggles to focus on learning and making friends. Use Maslow's Hierarchy to explain why and suggest what the school should do first.",
            questionRu: "Ученица-беженка прибыла в новую школу. Ей трудно учиться и заводить друзей. Объясните с помощью пирамиды Маслоу и предложите, что школа должна сделать первым.",
            questionKk: "Босқын оқушы жаңа мектепке келді. Ол оқуға және достар табуға қиналады. Маслоу пирамидасымен түсіндіріп, мектеп алдымен не істеуі керектігін ұсыныңыз.",
            steps: [
              { en: "Identify unmet needs: The student likely has unmet Safety needs (unfamiliar environment, possible trauma) and Belonging needs (no social connections yet). These are Levels 2 and 3.", ru: "Определите неудовлетворённые потребности: У ученицы, вероятно, не удовлетворены потребности Безопасности (незнакомая среда, возможная травма) и Принадлежности (нет социальных связей). Это уровни 2 и 3.", kk: "Қанағаттандырылмаған қажеттіліктерді анықтаңыз: Оқушыда Қауіпсіздік (бейтаныс орта, мүмкін жарақат) және Тиесілілік (әлеуметтік байланыс жоқ) қажеттіліктері қанағаттандырылмаған. Бұл 2 және 3-деңгейлер." },
              { en: "School should address lower needs first: Assign a buddy or mentor (belonging), create a safe quiet space (safety), ensure basic needs are met (meals, supplies). Only then can she focus on Esteem (academic success) and Self-Actualization (personal growth).", ru: "Школа должна сначала обеспечить низшие потребности: назначить наставника (принадлежность), создать безопасное пространство, обеспечить базовые нужды. Потом ученица сможет стремиться к успехам.", kk: "Мектеп алдымен төменгі қажеттіліктерді қамтамасыз етуі керек: тәлімгер тағайындау (тиесілілік), қауіпсіз кеңістік жасау, базалық қажеттіліктерді қамтамасыз ету. Содан кейін ғана ол табыстарға ұмтыла алады." }
            ],
            answer: "Safety and Belonging needs are unmet. The school should first ensure physical safety, assign a mentor for social connection, and meet basic needs. Academic expectations (Esteem level) can follow once lower needs are secured.",
            answerRu: "Потребности Безопасности и Принадлежности не удовлетворены. Школа сначала должна обеспечить физическую безопасность, назначить наставника для социальной связи и удовлетворить базовые потребности. Академические ожидания (уровень Уважения) могут следовать, когда низшие потребности обеспечены.",
            answerKk: "Қауіпсіздік пен Тиесілілік қажеттіліктері қанағаттандырылмаған. Мектеп алдымен физикалық қауіпсіздікті қамтамасыз етіп, әлеуметтік байланыс үшін тәлімгер тағайындауы және базалық қажеттіліктерді қанағаттандыруы керек. Академиялық күтулер (Құрмет деңгейі) төменгі қажеттіліктер қамтамасыз етілгеннен кейін орын алады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "List the five levels of Maslow's Hierarchy from bottom to top.",
            questionRu: "Перечислите пять уровней пирамиды Маслоу снизу вверх.",
            questionKk: "Маслоу пирамидасының бес деңгейін төменнен жоғарыға атаңыз.",
            answer: "Physiological, Safety, Love/Belonging, Esteem, Self-Actualization.",
            answerRu: "Физиологические, Безопасность, Любовь/Принадлежность, Уважение, Самоактуализация.",
            answerKk: "Физиологиялық, Қауіпсіздік, Махаббат/Тиесілілік, Құрмет, Өзін-өзі жүзеге асыру.",
            hint: "Start with basic survival needs and work up to personal growth.",
            hintRu: "Начните с базовых потребностей выживания и двигайтесь к личностному росту.",
            hintKk: "Тіршілік етудің базалық қажеттіліктерінен бастап, жеке дамуға жетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why might a student who is being bullied struggle academically, even if they are intelligent? Explain using Maslow's Hierarchy.",
            questionRu: "Почему ученик, подвергающийся буллингу, может плохо учиться, даже если он умён? Объясните через пирамиду Маслоу.",
            questionKk: "Неліктен бұллингке ұшыраған оқушы ақылды болса да оқуда қиналуы мүмкін? Маслоу пирамидасымен түсіндіріңіз.",
            answer: "Bullying threatens Safety (Level 2) and Belonging (Level 3) needs. When these lower needs are unmet, the student cannot effectively pursue Esteem needs like academic achievement (Level 4). Their mental energy is consumed by fear and social pain rather than learning.",
            answerRu: "Буллинг угрожает потребностям Безопасности (уровень 2) и Принадлежности (уровень 3). Когда эти низшие потребности не удовлетворены, ученик не может эффективно стремиться к потребностям Уважения, таким как учебные достижения (уровень 4). Его умственная энергия расходуется на страх и социальную боль, а не на учёбу.",
            answerKk: "Бұллинг Қауіпсіздік (2-деңгей) және Тиесілілік (3-деңгей) қажеттіліктеріне қауіп төндіреді. Бұл төменгі қажеттіліктер қанағаттандырылмағанда, оқушы академиялық жетістік сияқты Құрмет қажеттіліктеріне (4-деңгей) тиімді ұмтыла алмайды. Оның ой-энергиясы оқуға емес, қорқыныш пен әлеуметтік ауыртпалыққа жұмсалады.",
            hint: "Which levels of the hierarchy are threatened by bullying?",
            hintRu: "Какие уровни иерархии угрожает буллинг?",
            hintKk: "Бұллинг иерархияның қай деңгейлеріне қауіп төндіреді?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Critique Maslow's Hierarchy: give one real-world example that contradicts it and explain why the model still has value despite this limitation.",
            questionRu: "Критикуйте пирамиду Маслоу: приведите пример из жизни, который ей противоречит, и объясните, почему модель всё ещё ценна.",
            questionKk: "Маслоу пирамидасын сынаңыз: оған қайшы келетін бір нақты мысал келтіріп, модель неліктен әлі құнды екенін түсіндіріңіз.",
            answer: "Contradiction: Artists or activists may pursue Self-Actualization (creating art, fighting for justice) while Safety or Physiological needs are unmet — for example, a starving artist or a political dissident risking their life. This shows that humans do not always follow the hierarchy strictly. Despite this, the model remains valuable as a general framework for understanding motivation — it correctly predicts that most people prioritize basic needs, even if exceptional individuals sometimes skip levels.",
            answerRu: "Противоречие: художники или активисты могут стремиться к Самоактуализации (создание искусства, борьба за справедливость), пока их потребности Безопасности или Физиологические не удовлетворены — например, голодающий художник или политический диссидент, рискующий жизнью. Это показывает, что люди не всегда строго следуют иерархии. Несмотря на это, модель остаётся ценной как общая рамка понимания мотивации — она верно предсказывает, что большинство людей отдают приоритет базовым потребностям, даже если исключительные личности иногда пропускают уровни.",
            answerKk: "Қайшылық: суретшілер немесе белсенділер Қауіпсіздік немесе Физиологиялық қажеттіліктері қанағаттандырылмаса да Өзін-өзі жүзеге асыруға (өнер жасау, әділдік үшін күресу) ұмтылуы мүмкін — мысалы, аш суретші немесе өмірін тәуекелге тігетін саяси диссидент. Бұл адамдар әрқашан иерархияны қатаң ұстанбайтынын көрсетеді. Мұған қарамастан, модель мотивацияны түсінудің жалпы негізі ретінде құнды болып қалады — ол көпшілік адамдардың базалық қажеттіліктерге басымдық беретінін дұрыс болжайды, тіпті ерекше тұлғалар кейде деңгейлерді өткізіп жіберсе де.",
            hint: "Think of people who sacrificed safety or comfort for a higher purpose.",
            hintRu: "Подумайте о людях, которые жертвовали безопасностью ради высшей цели.",
            hintKk: "Жоғары мақсат үшін қауіпсіздікті құрбан еткен адамдарды ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Motivation Theory",
        titleRu: "Теория мотивации",
        titleKk: "Мотивация теориясы",
        content: "Motivation drives behavior toward goals. Self-Determination Theory by Deci and Ryan identifies three innate psychological needs: autonomy, competence, and relatedness. Intrinsic motivation (doing something because it is inherently interesting) is more sustainable than extrinsic motivation (doing something for external rewards or to avoid punishment).",
        contentRu: "Мотивация направляет поведение к целям. Теория самодетерминации Деси и Райана выделяет три врождённые психологические потребности: автономию, компетентность и связанность. Внутренняя мотивация устойчивее внешней.",
        contentKk: "Мотивация мінез-құлықты мақсаттарға бағыттайды. Деси мен Райанның Өзін-өзі анықтау теориясы үш туа біткен психологиялық қажеттілікті анықтайды: автономия, құзыреттілік және байланыстылық. Ішкі мотивация сыртқы мотивациядан тұрақтырақ.",
        keyFormulas: [
          {
            formula: "Self-Determination Theory: Autonomy + Competence + Relatedness = Intrinsic Motivation",
            description: "Three psychological needs that fuel sustainable inner motivation",
            descriptionRu: "Три психологические потребности, питающие устойчивую внутреннюю мотивацию",
            descriptionKk: "Тұрақты ішкі мотивацияны қамтамасыз ететін үш психологиялық қажеттілік"
          },
          {
            formula: "Motivation Spectrum: Amotivation → External → Introjected → Identified → Integrated → Intrinsic",
            description: "The continuum from no motivation to fully internalized motivation",
            descriptionRu: "Континуум от отсутствия мотивации до полностью интернализированной мотивации",
            descriptionKk: "Мотивация болмаудан толық ішкі мотивацияға дейінгі континуум"
          }
        ],
        solvedExamples: [
          {
            question: "A parent pays their child $5 for every A grade. At first the child works hard, but over time loses interest in learning. Explain this using motivation theory.",
            questionRu: "Родитель платит ребёнку $5 за каждую пятёрку. Сначала ребёнок старается, но со временем теряет интерес к учёбе. Объясните с помощью теории мотивации.",
            questionKk: "Ата-ана балаға әр A бағасы үшін $5 төлейді. Алдымен бала тырысады, бірақ уақыт өте оқуға деген қызығушылығын жоғалтады. Мотивация теориясымен түсіндіріңіз.",
            steps: [
              { en: "Identify the problem: The external reward ($5) has replaced intrinsic motivation. This is called the Overjustification Effect — when external rewards undermine existing internal interest.", ru: "Определите проблему: Внешнее вознаграждение ($5) заменило внутреннюю мотивацию. Это эффект чрезмерного оправдания — внешние награды подрывают существующий внутренний интерес.", kk: "Мәселені анықтаңыз: Сыртқы сыйақы ($5) ішкі мотивацияны ауыстырды. Бұл Шамадан тыс негіздеу эффектісі — сыртқы сыйақылар бар ішкі қызығушылықты бұзады." },
              { en: "Solution using SDT: Support autonomy (let child choose what subjects to explore), build competence (praise effort and strategies, not just grades), and foster relatedness (study together, discuss interesting ideas). This shifts motivation from external to intrinsic.", ru: "Решение через ТСД: поддержите автономию (пусть ребёнок выбирает предметы), развивайте компетентность (хвалите усилия, не только оценки), укрепляйте связанность (учитесь вместе).", kk: "ӨАТ арқылы шешім: автономияны қолдаңыз (бала пәндерді таңдасын), құзыреттілікті дамытыңыз (тек бағаларды емес, күш-жігерді мақтаңыз), байланыстылықты нығайтыңыз (бірге оқыңыз)." }
            ],
            answer: "The Overjustification Effect: external rewards ($5 per A) replaced intrinsic curiosity. Solution: support autonomy, competence, and relatedness per Self-Determination Theory to rebuild internal motivation.",
            answerRu: "Эффект чрезмерного оправдания: внешние награды ($5 за A) заменили внутреннее любопытство. Решение: поддерживать автономию, компетентность и связанность по Теории самодетерминации, чтобы восстановить внутреннюю мотивацию.",
            answerKk: "Шамадан тыс негіздеу эффектісі: сыртқы сыйақылар (әр A үшін $5) ішкі қызығушылықты ауыстырды. Шешім: ішкі мотивацияны қалпына келтіру үшін Өзін-өзі анықтау теориясы бойынша автономия, құзыреттілік және байланыстылықты қолдау."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the three needs in Self-Determination Theory.",
            questionRu: "Назовите три потребности Теории самодетерминации.",
            questionKk: "Өзін-өзі анықтау теориясындағы үш қажеттілікті атаңыз.",
            answer: "Autonomy (feeling in control of your choices), Competence (feeling capable and effective), and Relatedness (feeling connected to others).",
            answerRu: "Автономия (ощущение контроля над своим выбором), Компетентность (ощущение способности и эффективности) и Связанность (ощущение связи с другими).",
            answerKk: "Автономия (таңдауыңызды бақылап отырғаныңызды сезіну), Құзыреттілік (қабілетті және тиімді екеніңізді сезіну) және Байланыстылық (басқалармен байланыста екеніңізді сезіну).",
            hint: "Think: choice, skill, and connection.",
            hintRu: "Подумайте: выбор, навык и связь.",
            hintKk: "Ойланыңыз: таңдау, дағды және байланыс.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give an example of how a teacher could increase intrinsic motivation in students using each of the three SDT needs.",
            questionRu: "Приведите пример того, как учитель может повысить внутреннюю мотивацию, используя каждую из трёх потребностей ТСД.",
            questionKk: "Мұғалім ӨАТ-тың үш қажеттілігінің әрқайсысын қолданып, ішкі мотивацияны қалай арттыра алатынына мысал келтіріңіз.",
            answer: "Autonomy: let students choose their own essay topics or project formats. Competence: provide clear rubrics and constructive feedback so students feel they are improving. Relatedness: use collaborative projects and class discussions so students feel part of a learning community.",
            answerRu: "Автономия: разрешить ученикам самим выбирать темы эссе или формат проектов. Компетентность: давать чёткие критерии и конструктивную обратную связь, чтобы ученики чувствовали прогресс. Связанность: использовать групповые проекты и обсуждения, чтобы ученики чувствовали себя частью учебного сообщества.",
            answerKk: "Автономия: оқушыларға эссе тақырыптарын немесе жоба форматтарын өздері таңдауға рұқсат ету. Құзыреттілік: оқушылар жақсарып жатқанын сезінуі үшін нақты критерийлер мен конструктивті кері байланыс беру. Байланыстылық: оқушылар оқу қауымдастығының бөлігі екенін сезінуі үшін топтық жобалар мен сынып талқылауларын қолдану.",
            hint: "Think about one practical classroom strategy for each need.",
            hintRu: "Подумайте об одной практической стратегии для каждой потребности.",
            hintKk: "Әр қажеттілік үшін бір практикалық сынып стратегиясын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A company offers large bonuses for hitting sales targets. Some employees thrive, but others burn out and quit. Using SDT and the motivation spectrum, explain why the same incentive produces different outcomes.",
            questionRu: "Компания предлагает большие бонусы за выполнение плана продаж. Одни сотрудники процветают, другие выгорают и увольняются. Объясните, почему одинаковый стимул даёт разные результаты.",
            questionKk: "Компания сату мақсаттарына жету үшін үлкен бонустар ұсынады. Кейбір қызметкерлер гүлденеді, басқалары күйіп қалып, кетеді. Неліктен бірдей ынталандыру әр түрлі нәтижелер беретінін түсіндіріңіз.",
            answer: "Employees who thrive likely have their SDT needs met: they feel autonomous in their approach, competent in sales skills, and connected to their team. For them, the bonus is supplementary to intrinsic motivation. Employees who burn out likely experience the bonus as controlling (reduced autonomy), feel pressured beyond their competence, or feel isolated in competition. On the motivation spectrum, the first group has integrated the goal internally, while the second group operates on external or introjected regulation, which is exhausting long-term.",
            answerRu: "У преуспевающих сотрудников, вероятно, удовлетворены потребности ТСД: они чувствуют автономию в своём подходе, компетентность в навыках продаж и связь с командой. Для них бонус дополняет внутреннюю мотивацию. Выгорающие сотрудники, вероятно, воспринимают бонус как контролирующий (сниженная автономия), чувствуют давление сверх своей компетентности или изоляцию в конкуренции. На спектре мотивации первая группа интегрировала цель внутренне, а вторая работает на внешней или интроецированной регуляции, что изматывает в долгосрочной перспективе.",
            answerKk: "Гүлденетін қызметкерлердің ӨАТ қажеттіліктері, шамасы, қанағаттандырылған: олар өз тәсілінде автономды, сату дағдыларында құзыретті және командамен байланысты сезінеді. Олар үшін бонус ішкі мотивацияны толықтырады. Күйіп қалатын қызметкерлер, шамасы, бонусты бақылаушы ретінде сезінеді (автономия төмендейді), құзыретінен асатын қысымды сезінеді немесе бәсекеде оқшауланған сезінеді. Мотивация спектрінде бірінші топ мақсатты ішкі түрде біріктірген, ал екінші топ сыртқы немесе интроецирленген реттеумен жұмыс істейді, бұл ұзақ мерзімде сарқады.",
            hint: "Consider how the same reward can feel empowering to one person and controlling to another.",
            hintRu: "Подумайте, как одна награда может ощущаться вдохновляющей для одного и контролирующей для другого.",
            hintKk: "Бірдей сыйақы бір адамға күш беріп, екіншісін бақылайтындай сезілуі мүмкін екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Persuasion Principles",
        titleRu: "Принципы убеждения",
        titleKk: "Сендіру принциптері",
        content: "Robert Cialdini identified six principles of persuasion: reciprocity, commitment and consistency, social proof, authority, liking, and scarcity. These principles explain why people say yes and can be used ethically to communicate more effectively. Understanding them also helps you recognize when others are trying to influence you.",
        contentRu: "Роберт Чалдини выделил шесть принципов убеждения: взаимность, обязательство и последовательность, социальное доказательство, авторитет, симпатия и дефицит. Эти принципы объясняют, почему люди соглашаются, и помогают распознавать чужое влияние.",
        contentKk: "Роберт Чалдини сендірудің алты принципін анықтады: өзара қайтарым, міндеттеме мен дәйектілік, әлеуметтік дәлел, билік, ұнату және тапшылық. Бұл принциптер адамдардың неге келісетінін түсіндіреді және басқалардың ықпалын тануға көмектеседі.",
        keyFormulas: [
          {
            formula: "Cialdini's 6 Principles: Reciprocity, Commitment/Consistency, Social Proof, Authority, Liking, Scarcity",
            description: "Six evidence-based principles that drive human compliance and persuasion",
            descriptionRu: "Шесть научно обоснованных принципов, управляющих согласием и убеждением",
            descriptionKk: "Адамның келісімі мен сендіруін басқаратын алты ғылыми негізделген принцип"
          }
        ],
        solvedExamples: [
          {
            question: "An online store shows 'Only 2 left in stock!' and 'Trusted by 50,000 customers.' Which persuasion principles are being used?",
            questionRu: "Интернет-магазин показывает «Осталось только 2!» и «Доверяют 50,000 клиентов.» Какие принципы убеждения используются?",
            questionKk: "Интернет-дүкен «Тек 2-еу қалды!» және «50,000 тұтынушы сенеді» деп көрсетеді. Қандай сендіру принциптері қолданылады?",
            steps: [
              { en: "'Only 2 left' uses Scarcity — creating urgency by implying limited availability. This triggers fear of missing out and pushes faster decisions.", ru: "«Осталось 2» — Дефицит: создание срочности через ограниченную доступность. Это вызывает страх упущения и ускоряет решение.", kk: "«Тек 2 қалды» — Тапшылық: шектеулі қолжетімділік арқылы шұғылдық жасау. Бұл жіберіп алу қорқынышын тудырады." },
              { en: "'Trusted by 50,000 customers' uses Social Proof — people assume that if many others bought the product, it must be good. Combined, these principles create a powerful push to buy immediately.", ru: "«Доверяют 50,000» — Социальное доказательство: люди считают, что если многие купили, продукт хороший. Вместе эти принципы создают мощный стимул к покупке.", kk: "«50,000 сенеді» — Әлеуметтік дәлел: адамдар көптеген басқалар сатып алса, өнім жақсы деп ойлайды. Бірге бұл принциптер сатып алуға мықты ынталандыру жасайды." }
            ],
            answer: "Scarcity ('Only 2 left' creates urgency) and Social Proof ('50,000 customers' signals that many trust it). Together they pressure quick purchasing decisions.",
            answerRu: "Дефицит («Осталось только 2» создаёт срочность) и Социальное доказательство («50,000 клиентов» сигнализирует, что многие доверяют товару). Вместе они подталкивают к быстрому решению о покупке.",
            answerKk: "Тапшылық («Тек 2-еу қалды» шұғылдық жасайды) және Әлеуметтік дәлел («50,000 тұтынушы» көптеген адамдар сенетінін білдіреді). Бірге олар жылдам сатып алу шешіміне қысым жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "List all six of Cialdini's persuasion principles.",
            questionRu: "Перечислите все шесть принципов убеждения Чалдини.",
            questionKk: "Чалдинидің сендірудің барлық алты принципін атаңыз.",
            answer: "Reciprocity, Commitment and Consistency, Social Proof, Authority, Liking, and Scarcity.",
            answerRu: "Взаимность, Обязательство и последовательность, Социальное доказательство, Авторитет, Симпатия и Дефицит.",
            answerKk: "Өзара қайтарым, Міндеттеме мен дәйектілік, Әлеуметтік дәлел, Билік, Ұнату және Тапшылық.",
            hint: "Remember: RCSSALS — Reciprocity, Commitment, Social proof, Scarcity, Authority, Liking.",
            hintRu: "Запомните аббревиатуру: ВОПАСД — Взаимность, Обязательство, Привлекательность, Авторитет, Социальное доказательство, Дефицит.",
            hintKk: "Есте сақтаңыз: ÖMÄБТҰ — Өзара, Міндеттеме, Әлеуметтік, Билік, Тапшылық, Ұнату.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your school wants to increase recycling. Suggest three specific strategies using three different Cialdini principles.",
            questionRu: "Ваша школа хочет увеличить переработку мусора. Предложите три стратегии, используя три разных принципа Чалдини.",
            questionKk: "Мектебіңіз қайта өңдеуді арттырғысы келеді. Чалдинидің үш түрлі принципін қолданып, үш стратегия ұсыныңыз.",
            answer: "Social Proof: display a sign saying '85% of students in this school recycle.' Authority: have a respected teacher or the principal publicly endorse recycling. Commitment/Consistency: ask students to sign a pledge to recycle, making them more likely to follow through due to consistency.",
            answerRu: "Социальное доказательство: разместить табличку «85% учеников этой школы перерабатывают отходы». Авторитет: уважаемый учитель или директор публично поддерживает переработку. Обязательство/последовательность: попросить учеников подписать обещание перерабатывать, что повышает вероятность выполнения из-за стремления к последовательности.",
            answerKk: "Әлеуметтік дәлел: «Осы мектептің оқушыларының 85%-ы қайта өңдейді» деген белгі қою. Билік: құрметті мұғалім немесе директор қайта өңдеуді жария түрде қолдайды. Міндеттеме/дәйектілік: оқушылардан қайта өңдеуге уәде қағазына қол қоюды сұрау, бұл дәйектілікке ұмтылу арқылы орындау мүмкіндігін арттырады.",
            hint: "Think about what would make students feel that recycling is normal, endorsed, and something they have committed to.",
            hintRu: "Подумайте, что заставит учеников чувствовать, что переработка — это нормально, одобрено и взято на себя.",
            hintKk: "Оқушыларға қайта өңдеуді қалыпты, мақұлданған және өздері міндеттеніп алған нәрсе ретінде сезіндіретін нәрсені ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "When does persuasion cross the line into manipulation? Discuss the ethical boundaries using at least two Cialdini principles as examples.",
            questionRu: "Когда убеждение переходит границу и становится манипуляцией? Обсудите этические границы на примере двух принципов Чалдини.",
            questionKk: "Сендіру қашан шекті бұзып, манипуляцияға айналады? Кемінде екі Чалдини принципі мысалында этикалық шекараларды талқылаңыз.",
            answer: "Persuasion becomes manipulation when it is used to benefit the persuader at the expense of the target. Example 1: Scarcity — ethically, informing customers of genuine limited stock is fine; manipulatively, creating artificial scarcity to exploit fear. Example 2: Reciprocity — ethically, doing genuine favors builds relationships; manipulatively, giving small gifts specifically to obligate large return favors. The ethical test: Would the person still agree if they fully understood the technique being used? If yes, it is persuasion. If no, it is manipulation.",
            answerRu: "Убеждение становится манипуляцией, когда используется в пользу убеждающего за счёт цели. Пример 1: Дефицит — этично сообщать покупателям о реальном ограниченном запасе; манипулятивно — создавать искусственный дефицит для эксплуатации страха. Пример 2: Взаимность — этично оказывать настоящие услуги для укрепления отношений; манипулятивно — дарить мелкие подарки специально, чтобы обязать к крупной ответной услуге. Этический тест: согласился бы человек, если бы полностью понимал используемую технику? Если да — это убеждение. Если нет — манипуляция.",
            answerKk: "Сендіру мақсатты адамның есебінен сендірушінің пайдасы үшін қолданылғанда манипуляцияға айналады. 1-мысал: Тапшылық — этикалық түрде тұтынушыларға нақты шектеулі қорды хабарлау дұрыс; манипулятивті түрде — қорқынышты пайдалану үшін жасанды тапшылық жасау. 2-мысал: Өзара қайтарым — этикалық түрде қарым-қатынасты нығайту үшін шынайы қызмет көрсету; манипулятивті түрде — үлкен жауап қызметке міндеттеу үшін арнайы шағын сыйлықтар беру. Этикалық тест: адам қолданылып жатқан тәсілді толық түсінсе де келісер ме еді? Иә болса — бұл сендіру. Жоқ болса — манипуляция.",
            hint: "Think about intent and transparency — who benefits and does the target know what is happening?",
            hintRu: "Подумайте о намерении и прозрачности — кто выигрывает и знает ли объект о происходящем?",
            hintKk: "Ниет пен ашықтық туралы ойлаңыз — кім пайда көреді және мақсатты адам не болып жатқанын біле ме?",
            xp: 20
          }
        ]
      },
      {
        title: "Group Dynamics",
        titleRu: "Групповая динамика",
        titleKk: "Топтық динамика",
        content: "Group dynamics refers to the psychological processes that occur within and between social groups. Tuckman's model describes four stages of group development: Forming, Storming, Norming, and Performing. Groupthink, identified by Irving Janis, is a dangerous phenomenon where the desire for harmony overrides critical thinking.",
        contentRu: "Групповая динамика — психологические процессы внутри и между социальными группами. Модель Такмана описывает четыре стадии развития группы: Формирование, Шторм, Нормирование и Выполнение. Групповое мышление — опасное явление, когда желание гармонии подавляет критическое мышление.",
        contentKk: "Топтық динамика — әлеуметтік топтар ішінде және арасында болатын психологиялық процестер. Такман моделі топ дамуының төрт кезеңін сипаттайды: Қалыптасу, Дауыл, Нормалану және Орындау. Топтық ойлау — үйлесімге деген ұмтылыс сыни ойлауды басатын қауіпті құбылыс.",
        keyFormulas: [
          {
            formula: "Tuckman's Stages: Forming → Storming → Norming → Performing",
            description: "Four stages teams go through as they develop from strangers to high performers",
            descriptionRu: "Четыре стадии развития команды от незнакомцев до высокоэффективной группы",
            descriptionKk: "Топтың бейтаныстардан жоғары нәтижелі топқа дейін дамуының төрт кезеңі"
          },
          {
            formula: "Groupthink Warning Signs: Illusion of invulnerability, Collective rationalization, Pressure on dissenters, Self-censorship",
            description: "Red flags indicating a group is suppressing critical thinking",
            descriptionRu: "Тревожные признаки подавления группой критического мышления",
            descriptionKk: "Топтың сыни ойлауды басып жатқанын көрсететін қауіп белгілері"
          }
        ],
        solvedExamples: [
          {
            question: "A project team has been arguing frequently about roles and methods. The team leader is frustrated. What stage is the team in and what should the leader do?",
            questionRu: "Проектная команда часто спорит о ролях и методах. Лидер разочарован. На какой стадии команда и что делать лидеру?",
            questionKk: "Жоба тобы рөлдер мен әдістер туралы жиі дауласады. Жетекші көңілсіз. Топ қай кезеңде және жетекші не істеуі керек?",
            steps: [
              { en: "Identify the stage: This is the Storming stage — characterized by conflict, power struggles, and disagreements about how to work together. This is a normal and necessary phase.", ru: "Определите стадию: Это Шторм — конфликты, борьба за власть и разногласия. Это нормальная и необходимая фаза.", kk: "Кезеңді анықтаңыз: Бұл Дауыл кезеңі — жанжалдар, билік күресі және келіспеушіліктер. Бұл қалыпты және қажетті кезең." },
              { en: "Leader should: facilitate open discussion of disagreements rather than suppressing them, clarify roles and responsibilities, establish shared norms, and remind the team of their common goal. This helps the team move into the Norming stage.", ru: "Лидер должен: способствовать открытому обсуждению разногласий, уточнить роли и ответственности, установить общие нормы и напомнить об общей цели. Это поможет перейти к Нормированию.", kk: "Жетекші: келіспеушіліктерді басу орнына ашық талқылауды жеңілдетуі, рөлдерді нақтылауы, ортақ нормаларды белгілеуі және ортақ мақсатты еске салуы керек. Бұл Нормалану кезеңіне өтуге көмектеседі." }
            ],
            answer: "The team is in the Storming stage (conflict over roles and methods). The leader should facilitate open dialogue, clarify roles, establish norms, and reinforce shared goals to help the team progress to Norming.",
            answerRu: "Команда находится на стадии Шторма (конфликт из-за ролей и методов). Лидеру следует способствовать открытому диалогу, уточнить роли, установить нормы и укрепить общие цели, чтобы помочь команде перейти к Нормированию.",
            answerKk: "Топ Дауыл кезеңінде (рөлдер мен әдістер бойынша жанжал). Жетекші ашық диалогты жеңілдетуі, рөлдерді нақтылауы, нормаларды белгілеуі және топты Нормалану кезеңіне жылжытуға көмектесу үшін ортақ мақсаттарды нығайтуы керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the four stages of Tuckman's model in order.",
            questionRu: "Назовите четыре стадии модели Такмана по порядку.",
            questionKk: "Такман моделінің төрт кезеңін ретімен атаңыз.",
            answer: "Forming, Storming, Norming, Performing.",
            answerRu: "Формирование, Шторм, Нормирование, Выполнение.",
            answerKk: "Қалыптасу, Дауыл, Нормалану, Орындау.",
            hint: "Think of what happens when a new group first meets and gradually becomes effective.",
            hintRu: "Подумайте, что происходит, когда новая группа впервые встречается и постепенно становится эффективной.",
            hintKk: "Жаңа топ алғаш кездесіп, біртіндеп тиімді болғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give a real-world example of groupthink and explain which warning signs were present.",
            questionRu: "Приведите реальный пример группового мышления и объясните, какие тревожные признаки присутствовали.",
            questionKk: "Топтық ойлаудың нақты мысалын келтіріп, қандай қауіп белгілері болғанын түсіндіріңіз.",
            answer: "Example: The Space Shuttle Challenger disaster (1986). Engineers warned about O-ring failure in cold weather, but NASA leadership pressured ahead with launch. Warning signs: pressure on dissenters (engineers who raised concerns), collective rationalization ('it worked before'), and illusion of invulnerability ('nothing has gone wrong yet').",
            answerRu: "Пример: катастрофа шаттла «Челленджер» (1986). Инженеры предупреждали об отказе уплотнительных колец в холодную погоду, но руководство NASA настояло на запуске. Признаки: давление на несогласных (инженеров, выразивших опасения), коллективная рационализация («раньше срабатывало»), иллюзия неуязвимости («пока ничего не случилось»).",
            answerKk: "Мысал: «Челленджер» кемесінің апаты (1986). Инженерлер суық ауа райында сақина сынуы мүмкін деп ескертті, бірақ NASA басшылығы ұшыруды талап етті. Белгілер: келіспегендерге қысым (қауіп туралы айтқан инженерлерге), ұжымдық ақтау («бұрын жұмыс істеген»), және жарамсыздық иллюзиясы («әзірге ештеңе болған жоқ»).",
            hint: "Think of a famous disaster where a group ignored warning signs.",
            hintRu: "Вспомните известную катастрофу, где группа игнорировала предупреждения.",
            hintKk: "Топ ескерту белгілерін елемеген белгілі апатты ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a set of team rules that would prevent groupthink. Explain how each rule addresses a specific groupthink warning sign.",
            questionRu: "Разработайте правила команды, предотвращающие групповое мышление. Объясните, как каждое правило противодействует конкретному признаку.",
            questionKk: "Топтық ойлаудың алдын алатын топ ережелерін жасаңыз. Әр ереженің нақты қауіп белгісіне қалай қарсы тұратынын түсіндіріңіз.",
            answer: "Rules: (1) Assign a Devil's Advocate who must argue against the majority in each meeting — counters pressure on dissenters and self-censorship. (2) Require independent written opinions before group discussion — prevents anchoring to the first speaker. (3) Invite outside experts periodically — counters illusion of invulnerability and collective rationalization. (4) Leader speaks last — prevents authority bias from shaping the discussion early. (5) Explicitly ask 'What could go wrong?' in every decision — counters collective rationalization.",
            answerRu: "Правила: (1) Назначить «адвоката дьявола», который должен спорить против большинства на каждой встрече — противодействует давлению на несогласных и самоцензуре. (2) Требовать независимые письменные мнения до группового обсуждения — предотвращает привязку к первому выступающему. (3) Периодически приглашать внешних экспертов — противодействует иллюзии неуязвимости и коллективной рационализации. (4) Лидер говорит последним — предотвращает раннее влияние предвзятости авторитета на обсуждение. (5) Явно спрашивать «Что может пойти не так?» при каждом решении — противодействует коллективной рационализации.",
            answerKk: "Ережелер: (1) Әр кездесуде көпшілікке қарсы дәлелдеуі керек «шайтанның адвокатын» тағайындау — келіспегендерге қысым мен өзін-өзі цензуралауға қарсы тұрады. (2) Топтық талқылау алдында тәуелсіз жазбаша пікірлерді талап ету — бірінші сөйлеушіге бекінуден сақтайды. (3) Мезгіл-мезгіл сыртқы сарапшыларды шақыру — жарамсыздық иллюзиясы мен ұжымдық ақтауға қарсы тұрады. (4) Жетекші соңынан сөйлейді — билік бұрмалауының талқылауды ерте бағыттауын болдырмайды. (5) Әр шешімде «Не дұрыс болмауы мүмкін?» деп нақты сұрау — ұжымдық ақтауға қарсы тұрады.",
            hint: "Think about one rule for each major warning sign of groupthink.",
            hintRu: "Придумайте одно правило для каждого основного признака группового мышления.",
            hintKk: "Топтық ойлаудың әр негізгі қауіп белгісі үшін бір ереже ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Decision Making",
        titleRu: "Принятие решений",
        titleKk: "Шешім қабылдау",
        content: "Good decision making requires balancing intuition with analysis. The WRAP model by Chip and Dan Heath provides a structured approach: Widen your options, Reality-test your assumptions, Attain distance before deciding, and Prepare to be wrong. This counters common decision traps like narrow framing and overconfidence.",
        contentRu: "Хорошие решения требуют баланса интуиции и анализа. Модель WRAP братьев Хит предлагает структурированный подход: Расширьте варианты, Проверьте предположения, Получите дистанцию и Подготовьтесь к ошибкам. Это противодействует ловушкам вроде узкого фрейминга и самоуверенности.",
        contentKk: "Жақсы шешім қабылдау интуиция мен талдауды теңестіруді талап етеді. Хит ағайындардың WRAP моделі құрылымдық тәсілді ұсынады: Нұсқаларды кеңейтіңіз, Болжамдарды тексеріңіз, Шешім алдында арақашықтық алыңыз және Қателесуге дайын болыңыз.",
        keyFormulas: [
          {
            formula: "WRAP Model: Widen options → Reality-test assumptions → Attain distance → Prepare to be wrong",
            description: "A four-step framework for making better decisions",
            descriptionRu: "Четырёхшаговая модель для принятия лучших решений",
            descriptionKk: "Жақсырақ шешімдер қабылдаудың төрт қадамдық моделі"
          },
          {
            formula: "10/10/10 Rule: How will I feel about this decision in 10 minutes? 10 months? 10 years?",
            description: "A time-perspective tool for attaining emotional distance from a decision",
            descriptionRu: "Инструмент временной перспективы для эмоциональной дистанции от решения",
            descriptionKk: "Шешімнен эмоциялық арақашықтық алу үшін уақыт перспективасы құралы"
          }
        ],
        solvedExamples: [
          {
            question: "You are choosing between two universities: one prestigious but far from home, another local but less well-known. You are leaning toward the prestigious one because your favorite teacher went there. Apply the WRAP model.",
            questionRu: "Вы выбираете между двумя университетами: престижный, но далеко от дома, и местный, но менее известный. Вы склоняетесь к престижному, потому что туда ходил ваш любимый учитель. Примените модель WRAP.",
            questionKk: "Екі университет арасында таңдап жатырсыз: беделді, бірақ үйден алыс, және жергілікті, бірақ аз белгілі. Сүйікті мұғаліміңіз оқығандықтан, беделдіге бейімсіз. WRAP моделін қолданыңыз.",
            steps: [
              { en: "Widen options: Are there only two choices? Research 3-5 more universities. Reality-test: Visit both campuses, talk to current students, compare actual program quality — not just prestige or one teacher's experience.", ru: "Расширьте варианты: Только два выбора? Изучите ещё 3-5 университетов. Проверьте реальность: посетите оба кампуса, поговорите со студентами, сравните качество программ.", kk: "Нұсқаларды кеңейтіңіз: Тек екі таңдау ма? Тағы 3-5 университетті зерттеңіз. Шындықты тексеріңіз: екі кампусты да барыңыз, студенттермен сөйлесіңіз, бағдарлама сапасын салыстырыңыз." },
              { en: "Attain distance: Apply the 10/10/10 rule — in 10 years, will prestige matter more than education quality and personal happiness? Prepare to be wrong: What if the prestigious university is not the right fit? Have a transfer plan or gap-year option.", ru: "Дистанцируйтесь: Примените 10/10/10 — через 10 лет престиж будет важнее качества образования? Подготовьтесь к ошибке: Что если престижный вуз не подойдёт? Имейте план перевода.", kk: "Арақашықтық алыңыз: 10/10/10 қолданыңыз — 10 жылдан кейін беделділік білім сапасынан маңыздырақ бола ма? Қателесуге дайын болыңыз: Беделді университет сәйкес келмесе ше? Ауысу жоспарыңыз болсын." }
            ],
            answer: "WRAP: Widen to 5+ options, reality-test by visiting and comparing program quality (not just prestige), attain distance with 10/10/10 rule, prepare to be wrong with a transfer plan. This prevents anchoring on one teacher's experience.",
            answerRu: "WRAP: расширить до 5+ вариантов, проверить реальность, посетив и сравнив качество программ (а не только престиж), обрести дистанцию с помощью правила 10/10/10, подготовиться к ошибке с планом перевода. Это предотвращает привязку к опыту одного учителя.",
            answerKk: "WRAP: 5+ нұсқаға дейін кеңейту, барып, бағдарлама сапасын салыстырып шындықты тексеру (тек беделділікті емес), 10/10/10 ережесімен арақашықтық алу, ауысу жоспарымен қателесуге дайын болу. Бұл бір мұғалімнің тәжірибесіне бекінуден сақтайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the acronym WRAP stand for in the WRAP decision model?",
            questionRu: "Что означает аббревиатура WRAP в модели принятия решений?",
            questionKk: "WRAP шешім моделіндегі WRAP аббревиатурасы нені білдіреді?",
            answer: "Widen your options, Reality-test your assumptions, Attain distance before deciding, Prepare to be wrong.",
            answerRu: "Расширьте варианты, Проверьте реальность предположений, Обретите дистанцию перед решением, Подготовьтесь к ошибке.",
            answerKk: "Нұсқаларды кеңейтіңіз, Болжамдардың шындығын тексеріңіз, Шешім алдында арақашықтық алыңыз, Қателесуге дайын болыңыз.",
            hint: "Each letter represents one step in better decision-making.",
            hintRu: "Каждая буква — один шаг в принятии лучших решений.",
            hintKk: "Әр әріп жақсырақ шешім қабылдаудағы бір қадамды білдіреді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Apply the 10/10/10 rule to this decision: Your friend invites you to skip studying for a test to go to a concert tonight.",
            questionRu: "Примените правило 10/10/10: Друг приглашает вас прогулять подготовку к тесту ради концерта сегодня.",
            questionKk: "10/10/10 ережесін қолданыңыз: Досыңыз бүгін емтиханға дайындалуды тастап, концертке шақырады.",
            answer: "10 minutes: Excited about the concert, relieved to skip studying. 10 months: If the test was important, a bad grade could affect your average and future applications. The concert memory fades. 10 years: Neither will matter much, but a pattern of choosing fun over responsibility could. Decision: Study for the test; you can attend concerts another time.",
            answerRu: "10 минут: Взволнован концертом, рад пропустить учёбу. 10 месяцев: Если тест был важен, плохая оценка может повлиять на средний балл и будущие заявки. Воспоминание о концерте тускнеет. 10 лет: Ни то, ни другое не будет особо важным, но привычка выбирать развлечения вместо ответственности — может. Решение: учиться к тесту; на концерт можно сходить в другой раз.",
            answerKk: "10 минут: Концертке қуанып, оқудан құтылғаныма разымын. 10 ай: Тест маңызды болса, нашар баға орташа балл мен болашақ өтініштерге әсер етуі мүмкін. Концерт естелігі бұлыңғырланады. 10 жыл: Екеуі де аса маңызды болмайды, бірақ жауапкершіліктен гөрі көңіл көтеруді таңдау үлгісі маңызды болуы мүмкін. Шешім: тестке дайындалу керек; концертке басқа уақытта баруға болады.",
            hint: "How will you feel about each option at three different time scales?",
            hintRu: "Как вы будете себя чувствовать по каждому варианту через 10 минут, 10 месяцев и 10 лет?",
            hintKk: "Әр нұсқа бойынша 10 минуттан, 10 айдан және 10 жылдан кейін не сезінесіз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare the WRAP model to System 1/System 2 thinking. Which WRAP steps specifically activate System 2, and why is this important for major life decisions?",
            questionRu: "Сравните модель WRAP с мышлением Системы 1/Системы 2. Какие шаги WRAP активируют Систему 2 и почему это важно?",
            questionKk: "WRAP моделін Жүйе 1/Жүйе 2 ойлауымен салыстырыңыз. WRAP-тың қай қадамдары Жүйе 2-ні іске қосады және бұл неліктен маңызды?",
            answer: "All four WRAP steps activate System 2: Widen forces analytical exploration beyond the first option (counters System 1's narrow framing). Reality-test demands evidence-gathering instead of gut feeling. Attain distance creates time for System 2 to override emotional System 1 reactions. Prepare to be wrong engages probabilistic thinking. For major life decisions like university choice or career changes, System 1 shortcuts like anchoring and emotional attachment lead to costly errors. WRAP systematically forces slow, deliberate analysis.",
            answerRu: "Все четыре шага WRAP активируют Систему 2: Расширение заставляет аналитически исследовать за пределами первого варианта (противодействует узкому фреймингу Системы 1). Проверка реальности требует сбора доказательств вместо интуиции. Обретение дистанции даёт время Системе 2 подавить эмоциональные реакции Системы 1. Подготовка к ошибке задействует вероятностное мышление. Для важных жизненных решений, таких как выбор университета или смена карьеры, короткие пути Системы 1, вроде якорения и эмоциональной привязанности, приводят к дорогостоящим ошибкам. WRAP систематически заставляет к медленному, обдуманному анализу.",
            answerKk: "WRAP-тың төрт қадамы да Жүйе 2-ні іске қосады: Кеңейту бірінші нұсқадан тыс аналитикалық зерттеуге мәжбүрлейді (Жүйе 1-дің тар шеңберленуіне қарсы тұрады). Шындықты тексеру ішкі сезім орнына дәлел жинауды талап етеді. Арақашықтық алу Жүйе 2-ге Жүйе 1-дің эмоциялық реакцияларын жеңуге уақыт береді. Қателесуге дайын болу ықтималдық ойлауды іске қосады. Университет таңдау немесе мансап өзгерту сияқты маңызды өмірлік шешімдер үшін зәкірлеу мен эмоциялық байланыс сияқты Жүйе 1 қысқа жолдары қымбат қателерге әкеледі. WRAP жүйелі түрде баяу, ойластырылған талдауға мәжбүрлейді.",
            hint: "Think about which cognitive errors each WRAP step prevents.",
            hintRu: "Подумайте, какие когнитивные ошибки предотвращает каждый шаг WRAP.",
            hintKk: "Әр WRAP қадамы қандай когнитивті қателіктердің алдын алатынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Memory & Learning",
        titleRu: "Память и обучение",
        titleKk: "Жады және оқу",
        content: "Understanding how memory works transforms how effectively you learn. Ebbinghaus's Forgetting Curve shows that we forget approximately 70% of new information within 24 hours without review. Spaced repetition — reviewing material at increasing intervals — is the most evidence-based strategy for long-term retention.",
        contentRu: "Понимание работы памяти трансформирует эффективность обучения. Кривая забывания Эббингауза показывает, что мы забываем около 70% новой информации за 24 часа без повторения. Интервальное повторение — повторение материала через увеличивающиеся промежутки — самая доказательная стратегия.",
        contentKk: "Жадтың қалай жұмыс істейтінін түсіну оқу тиімділігін өзгертеді. Эббингауздың Ұмыту қисығы қайталаусыз 24 сағатта жаңа ақпараттың шамамен 70%-ын ұмытатынымызды көрсетеді. Аралықты қайталау — ең дәлелденген ұзақ мерзімді стратегия.",
        keyFormulas: [
          {
            formula: "Ebbinghaus Forgetting Curve: Retention drops ~70% within 24 hours without review",
            description: "How rapidly we forget new information without reinforcement",
            descriptionRu: "Как быстро мы забываем новую информацию без подкрепления",
            descriptionKk: "Нығайтусыз жаңа ақпаратты қаншалықты тез ұмытатынымыз"
          },
          {
            formula: "Spaced Repetition Schedule: Review at 1 day → 3 days → 7 days → 14 days → 30 days",
            description: "Optimal review intervals for transferring information to long-term memory",
            descriptionRu: "Оптимальные интервалы повторения для переноса информации в долговременную память",
            descriptionKk: "Ақпаратты ұзақ мерзімді жадқа ауыстыру үшін оңтайлы қайталау аралықтары"
          }
        ],
        solvedExamples: [
          {
            question: "A student studies history for 6 hours the night before the exam and gets a B. Another student studies 1 hour per day for 6 days and gets an A. Explain the difference using memory science.",
            questionRu: "Ученик готовит историю 6 часов ночью перед экзаменом и получает B. Другой учится по 1 часу 6 дней и получает A. Объясните разницу с помощью науки о памяти.",
            questionKk: "Оқушы емтихан алдында бір түнде 6 сағат тарих дайындайды және B алады. Басқа оқушы 6 күн бойы күніне 1 сағат оқиды және A алады. Жады ғылымын қолданып айырмашылықты түсіндіріңіз.",
            steps: [
              { en: "Student 1 crammed — this creates short-term memory traces that fade quickly (Forgetting Curve). They remembered enough for a B but will forget most within days.", ru: "Ученик 1 зубрил — это создаёт кратковременные следы памяти, быстро затухающие (Кривая забывания). Запомнил достаточно для B, но забудет большинство за дни.", kk: "1-оқушы жаттады — бұл тез өшетін қысқа мерзімді жады іздерін жасайды (Ұмыту қисығы). B-ге жеткілікті есте сақтады, бірақ күндер ішінде көбін ұмытады." },
              { en: "Student 2 used spaced repetition — each review session strengthened the memory trace before it faded. After 6 sessions across 6 days, the information was deeply encoded in long-term memory, producing both a better grade and lasting knowledge.", ru: "Ученик 2 использовал интервальное повторение — каждое занятие укрепляло след памяти. После 6 сеансов за 6 дней информация глубоко закодировалась в долговременной памяти.", kk: "2-оқушы аралықты қайталауды қолданды — әр қайталау жады ізін нығайтты. 6 күнде 6 сеанстан кейін ақпарат ұзақ мерзімді жадқа терең кодталды." }
            ],
            answer: "Cramming creates weak short-term traces (Forgetting Curve). Spaced repetition across 6 days strengthens long-term encoding. Same total time, vastly different results because of timing.",
            answerRu: "Зубрёжка создаёт слабые кратковременные следы (Кривая забывания). Интервальное повторение за 6 дней укрепляет долговременное кодирование. Одинаковое общее время, но совершенно разные результаты из-за распределения по времени.",
            answerKk: "Жаттау әлсіз қысқа мерзімді іздер жасайды (Ұмыту қисығы). 6 күн бойы аралықты қайталау ұзақ мерзімді кодтауды нығайтады. Жалпы уақыт бірдей, бірақ уақыт бөлінуіне байланысты нәтижелер мүлдем әр түрлі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "According to the Forgetting Curve, approximately what percentage of new information do we forget within 24 hours without review?",
            questionRu: "Согласно Кривой забывания, какой процент новой информации мы забываем за 24 часа без повторения?",
            questionKk: "Ұмыту қисығы бойынша, қайталаусыз 24 сағатта жаңа ақпараттың шамамен қанша пайызын ұмытамыз?",
            answer: "Approximately 70% of new information is forgotten within 24 hours without review.",
            answerRu: "Примерно 70% новой информации забывается за 24 часа без повторения.",
            answerKk: "Қайталаусыз 24 сағатта жаңа ақпараттың шамамен 70%-ы ұмытылады.",
            hint: "It is a surprisingly high number — more than half.",
            hintRu: "Это удивительно высокое число — больше половины.",
            hintKk: "Бұл таңқаларлық жоғары сан — жартысынан көп.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a one-week spaced repetition study plan for a vocabulary list of 50 new words.",
            questionRu: "Создайте недельный план интервального повторения для списка из 50 новых слов.",
            questionKk: "50 жаңа сөздің сөздік тізімі үшін бір апталық аралықты қайталау жоспарын жасаңыз.",
            answer: "Day 1: Learn all 50 words (initial encoding). Day 2: Review all 50 (first reinforcement — catches the Forgetting Curve drop). Day 4: Review words you got wrong on Day 2 plus a random sample. Day 7: Full review of all 50. Each review session should use active recall (test yourself, do not just re-read). This schedule provides reviews at Day 1, 2, 4, and 7 — approximating optimal spaced repetition intervals.",
            answerRu: "День 1: выучить все 50 слов (первичное кодирование). День 2: повторить все 50 (первое закрепление — перехватывает падение по Кривой забывания). День 4: повторить слова, ошибочные в День 2, плюс случайная выборка. День 7: полное повторение всех 50. Каждая сессия повторения должна использовать активное воспроизведение (тестируйте себя, а не просто перечитывайте). Это расписание даёт повторения в дни 1, 2, 4 и 7 — приближаясь к оптимальным интервалам интервального повторения.",
            answerKk: "1-күн: барлық 50 сөзді үйрену (алғашқы кодтау). 2-күн: барлық 50-ні қайталау (алғашқы нығайту — Ұмыту қисығының құлдырауын ұстайды). 4-күн: 2-күні қате жауап берген сөздерді және кездейсоқ таңдауды қайталау. 7-күн: барлық 50-нің толық қайталауы. Әр қайталау сеансы белсенді еске түсіруді қолдануы керек (тек қайта оқымай, өзін-өзі тестілеу). Бұл кесте 1, 2, 4 және 7-күндерде қайталау береді — оңтайлы аралықты қайталау аралықтарына жақындайды.",
            hint: "Plan reviews at increasing intervals: 1 day, 2 days, 3 days apart.",
            hintRu: "Планируйте повторения через увеличивающиеся интервалы: 1 день, 2 дня, 3 дня.",
            hintKk: "Қайталауларды арттыру аралықтарымен жоспарлаңыз: 1 күн, 2 күн, 3 күн.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student claims: 'I learn best by re-reading my notes.' Using memory research, explain why this is ineffective and propose two better alternatives.",
            questionRu: "Ученик утверждает: «Мне лучше всего помогает перечитывание конспектов.» Объясните, почему это неэффективно, и предложите две лучшие альтернативы.",
            questionKk: "Оқушы: «Маған жазбаларымды қайта оқу ең жақсы көмектеседі» дейді. Бұның неліктен тиімсіз екенін түсіндіріп, екі жақсы балама ұсыныңыз.",
            answer: "Re-reading creates an illusion of fluency — the material feels familiar but is not deeply encoded. Research by Roediger and Karpicke shows that retrieval practice (testing yourself) produces 50% better retention than re-reading. Two better alternatives: (1) Active Recall — close your notes and try to write everything you remember, then check. This strengthens retrieval pathways. (2) Elaborative Interrogation — ask 'why?' and 'how?' about each concept and explain it in your own words. This creates deeper semantic connections. Both methods are harder than re-reading but far more effective for long-term retention.",
            answerRu: "Перечитывание создаёт иллюзию беглости — материал кажется знакомым, но не закодирован глубоко. Исследование Родигера и Карпике показывает, что практика извлечения (самотестирование) даёт на 50% лучшее запоминание, чем перечитывание. Две лучшие альтернативы: (1) Активное воспроизведение — закройте конспект и попробуйте записать всё, что помните, затем проверьте. Это укрепляет пути извлечения. (2) Развёрнутый опрос — задавайте вопросы «почему?» и «как?» о каждом понятии и объясняйте его своими словами. Это создаёт более глубокие смысловые связи. Оба метода сложнее перечитывания, но гораздо эффективнее для долговременного запоминания.",
            answerKk: "Қайта оқу еркіндік иллюзиясын жасайды — материал таныс сезілгенімен терең кодталмаған. Родигер мен Карпикенің зерттеуі алу тәжірибесінің (өзін-өзі тестілеу) қайта оқудан 50%-ға жақсы есте сақтау беретінін көрсетеді. Екі жақсы балама: (1) Белсенді еске түсіру — жазбаларыңызды жауып, есіңізде қалғанның бәрін жазуға тырысыңыз, содан кейін тексеріңіз. Бұл алу жолдарын нығайтады. (2) Кеңейтілген сұрау — әр ұғым туралы «неге?» және «қалай?» деп сұрап, оны өз сөзіңізбен түсіндіріңіз. Бұл тереңірек мағыналық байланыстар жасайды. Екі әдіс те қайта оқудан қиынырақ, бірақ ұзақ мерзімді есте сақтау үшін әлдеқайда тиімдірек.",
            hint: "Think about why recognizing information (re-reading) is different from retrieving it (testing yourself).",
            hintRu: "Подумайте, почему узнавание информации (перечитывание) отличается от извлечения (самотестирование).",
            hintKk: "Ақпаратты тану (қайта оқу) мен алу (өзін-өзі тестілеу) неліктен ерекшеленетінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Habits & Behavior Change",
        titleRu: "Привычки и изменение поведения",
        titleKk: "Әдеттер және мінез-құлықты өзгерту",
        content: "Habits are automatic behaviors triggered by environmental cues. Charles Duhigg's Habit Loop model identifies three components: Cue, Routine, and Reward. James Clear's Atomic Habits framework builds on this with four laws: make it obvious, make it attractive, make it easy, and make it satisfying. Understanding these models gives you power over your behavior.",
        contentRu: "Привычки — автоматические действия, запускаемые сигналами среды. Модель Петли привычки Чарльза Дахигга выделяет три компонента: Сигнал, Рутина, Вознаграждение. Фреймворк Джеймса Клира «Атомные привычки» добавляет четыре закона: сделайте очевидным, привлекательным, лёгким и удовлетворяющим.",
        contentKk: "Әдеттер — орта белгілерімен іске қосылатын автоматты мінез-құлық. Чарльз Дахиггтің Әдет тізбегі моделі үш компонентті анықтайды: Белгі, Күнделікті іс, Сыйлық. Джеймс Клирдің Атомдық әдеттер шеңбері төрт заңмен толықтырады: айқын етіңіз, тартымды етіңіз, оңай етіңіз және қанағаттандыратын етіңіз.",
        keyFormulas: [
          {
            formula: "Habit Loop: Cue → Routine → Reward",
            description: "The three-part cycle that drives all habitual behavior",
            descriptionRu: "Трёхчастный цикл, управляющий всем привычным поведением",
            descriptionKk: "Барлық әдетті мінез-құлықты басқаратын үш бөлімді цикл"
          },
          {
            formula: "4 Laws of Behavior Change: (1) Make it Obvious (2) Make it Attractive (3) Make it Easy (4) Make it Satisfying",
            description: "James Clear's framework for building good habits and breaking bad ones",
            descriptionRu: "Фреймворк Клира для создания хороших привычек и устранения плохих",
            descriptionKk: "Жақсы әдеттер қалыптастыру және жаман әдеттерден арылу үшін Клирдің шеңбері"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to build a daily reading habit but keeps forgetting. Design a habit system using the Habit Loop and the 4 Laws.",
            questionRu: "Ученик хочет выработать привычку ежедневного чтения, но постоянно забывает. Создайте систему привычки, используя Петлю привычки и 4 Закона.",
            questionKk: "Оқушы күнделікті оқу әдетін қалыптастырғысы келеді, бірақ үнемі ұмытады. Әдет тізбегі мен 4 Заңды қолданып, әдет жүйесін жасаңыз.",
            steps: [
              { en: "Habit Loop: Cue = place book on pillow each morning (impossible to miss at bedtime). Routine = read for 10 minutes before sleep. Reward = check off a reading tracker (visual satisfaction).", ru: "Петля: Сигнал = класть книгу на подушку утром. Рутина = читать 10 минут перед сном. Вознаграждение = отмечать в трекере чтения.", kk: "Тізбек: Белгі = кітапты таңертең жастыққа қою. Күнделікті іс = ұйықтар алдында 10 минут оқу. Сыйлық = оқу трекерінде белгі қою." },
              { en: "4 Laws: (1) Obvious — book on pillow is a visual cue. (2) Attractive — choose a book you genuinely enjoy, not one you 'should' read. (3) Easy — start with just 2 pages (lower the barrier). (4) Satisfying — use a streak tracker and reward yourself after 30 days.", ru: "4 Закона: (1) Очевидно — книга на подушке. (2) Привлекательно — выберите книгу, которая нравится. (3) Легко — начните с 2 страниц. (4) Удовлетворяюще — используйте трекер серий и наградите себя через 30 дней.", kk: "4 Заң: (1) Айқын — жастықтағы кітап. (2) Тартымды — ұнайтын кітапты таңдаңыз. (3) Оңай — 2 беттен бастаңыз. (4) Қанағаттандыратын — серия трекерін қолданып, 30 күннен кейін өзіңізді марапаттаңыз." }
            ],
            answer: "Cue: book on pillow. Routine: read 10 minutes. Reward: tracker checkmark. Apply 4 Laws: obvious (visual cue), attractive (enjoyable book), easy (start with 2 pages), satisfying (streak tracker + 30-day reward).",
            answerRu: "Сигнал: книга на подушке. Рутина: читать 10 минут. Награда: отметка в трекере. Применение 4 Законов: очевидно (визуальный сигнал), привлекательно (приятная книга), легко (начать с 2 страниц), удовлетворяюще (трекер серий + награда через 30 дней).",
            answerKk: "Белгі: жастықтағы кітап. Күнделікті іс: 10 минут оқу. Сыйлық: трекерде белгі қою. 4 Заңды қолдану: айқын (көрнекі белгі), тартымды (ұнамды кітап), оңай (2 беттен бастау), қанағаттандыратын (серия трекері + 30 күндік марапат)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of the Habit Loop?",
            questionRu: "Какие три части Петли привычки?",
            questionKk: "Әдет тізбегінің үш бөлігі қандай?",
            answer: "Cue (the trigger), Routine (the behavior), and Reward (the benefit you get).",
            answerRu: "Сигнал (триггер), Рутина (поведение) и Вознаграждение (польза, которую вы получаете).",
            answerKk: "Белгі (триггер), Күнделікті іс (мінез-құлық) және Сыйлық (алатын пайдаңыз).",
            hint: "Think: what starts it, what you do, and what you get.",
            hintRu: "Подумайте: что запускает, что вы делаете и что получаете.",
            hintKk: "Ойланыңыз: не бастайды, не істейсіз және не аласыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Use the 4 Laws of Behavior Change to design a plan for breaking a phone-scrolling-before-bed habit.",
            questionRu: "Используйте 4 Закона изменения поведения, чтобы разработать план избавления от привычки листать телефон перед сном.",
            questionKk: "Ұйықтар алдында телефонды айналдыру әдетінен құтылу жоспарын жасау үшін Мінез-құлықты өзгертудің 4 Заңын қолданыңыз.",
            answer: "Invert the 4 Laws: (1) Make it invisible — charge phone in another room, not on the nightstand. (2) Make it unattractive — remind yourself that blue light disrupts sleep and scrolling increases anxiety. (3) Make it difficult — set a screen time limit that locks social media after 9 PM. (4) Make it unsatisfying — track your screen time and share it with an accountability partner. Replace with a positive routine: put a book where the phone used to be.",
            answerRu: "Инвертируйте 4 Закона: (1) Сделайте невидимым — заряжайте телефон в другой комнате, не у кровати. (2) Сделайте непривлекательным — напоминайте себе, что синий свет мешает сну, а скроллинг усиливает тревогу. (3) Сделайте трудным — установите лимит экранного времени, блокирующий соцсети после 21:00. (4) Сделайте неудовлетворяющим — отслеживайте экранное время и делитесь им с партнёром по подотчётности. Замените позитивной рутиной: положите книгу туда, где раньше был телефон.",
            answerKk: "4 Заңды керісінше қолданыңыз: (1) Көрінбейтін ету — телефонды төсек жанында емес, басқа бөлмеде зарядтаңыз. (2) Тартымсыз ету — көк жарық ұйқыға кедергі келтіретінін және айналдыру алаңдаушылықты арттыратынын өзіңізге еске салыңыз. (3) Қиын ету — 21:00-ден кейін әлеуметтік медианы бұғаттайтын экран уақыты шегін орнатыңыз. (4) Қанағаттандырмайтын ету — экран уақытыңызды бақылап, есеп беру серіктесімен бөлісіңіз. Позитивті күнделікті іспен ауыстырыңыз: телефон тұрған жерге кітап қойыңыз.",
            hint: "To break a bad habit, invert each law: invisible, unattractive, difficult, unsatisfying.",
            hintRu: "Чтобы сломать привычку, инвертируйте законы: невидимо, непривлекательно, трудно, неудовлетворительно.",
            hintKk: "Жаман әдетті жою үшін заңдарды керісінше қолданыңыз: көрінбейтін, тартымсыз, қиын, қанағаттандырмайтын.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Why do most New Year's resolutions fail within a month? Analyze using both the Habit Loop and the 4 Laws, and design a resolution that would actually stick.",
            questionRu: "Почему большинство новогодних обещаний терпят неудачу в течение месяца? Проанализируйте с помощью Петли привычки и 4 Законов и создайте обещание, которое действительно сработает.",
            questionKk: "Неліктен Жаңа жылдық уәделердің көбі бір айда сәтсіздікке ұшырайды? Әдет тізбегі мен 4 Заңды қолданып талдаңыз және шынымен жұмыс істейтін уәде жасаңыз.",
            answer: "Failure analysis: Most resolutions lack a clear Cue (no specific trigger), have too large a Routine (e.g., 'go to gym daily' instead of '5 pushups'), and have delayed or no Reward (results take months). By the 4 Laws: not obvious (no environmental redesign), not attractive (motivation fades), not easy (too ambitious), not satisfying (no immediate feedback). Sticky resolution example: 'I will do 5 pushups (easy) after brushing my teeth (obvious cue) every morning, and mark an X on my calendar (satisfying). After 2 weeks, I will increase to 10.' This uses habit stacking (cue), starts tiny (easy), has an immediate reward (tracker), and builds gradually.",
            answerRu: "Анализ провала: у большинства обещаний нет чёткого Сигнала (нет конкретного триггера), слишком большая Рутина (например, «ходить в спортзал каждый день» вместо «5 отжиманий»), и отложенная или отсутствующая Награда (результаты приходят через месяцы). По 4 Законам: не очевидно (нет перестройки среды), не привлекательно (мотивация угасает), не легко (слишком амбициозно), не удовлетворяюще (нет мгновенной обратной связи). Пример работающего обещания: «Я буду делать 5 отжиманий (легко) после чистки зубов (очевидный сигнал) каждое утро и отмечать X в календаре (удовлетворяюще). Через 2 недели увеличу до 10.» Это использует стыковку привычек (сигнал), начинается с малого (легко), даёт мгновенную награду (трекер) и растёт постепенно.",
            answerKk: "Сәтсіздік талдауы: көптеген уәделерде нақты Белгі жоқ (нақты триггер жоқ), тым үлкен Күнделікті іс бар (мысалы, «5 итерілу» орнына «күн сайын спортзалға бару»), кешіктірілген немесе жоқ Сыйлық (нәтижелер айлар бойы келеді). 4 Заң бойынша: айқын емес (орта қайта құрылмаған), тартымды емес (мотивация сөнеді), оңай емес (тым өршіл), қанағаттандырмайды (жедел кері байланыс жоқ). Жұмыс істейтін уәде мысалы: «Мен әр таңертең тіс тазалағаннан кейін (айқын белгі) 5 итерілу жасаймын (оңай) және күнтізбеме X белгісін қоямын (қанағаттандыратын). 2 аптадан кейін 10-ға дейін арттырамын.» Бұл дағды тізбектеуді (белгі) қолданады, кішкентайдан басталады (оңай), жедел сыйлығы бар (трекер) және біртіндеп өседі.",
            hint: "Think about what is missing in a typical resolution: specific trigger, small behavior, immediate reward.",
            hintRu: "Подумайте, чего не хватает в типичном обещании: конкретный триггер, маленькое действие, немедленная награда.",
            hintKk: "Әдеттегі уәдеде не жетіспейтінін ойлаңыз: нақты триггер, кішкентай іс-әрекет, жедел сыйлық.",
            xp: 20
          }
        ]
      },
      {
        title: "EQ Assessment",
        titleRu: "Оценка эмоционального интеллекта",
        titleKk: "Эмоциялық интеллектті бағалау",
        content: "Emotional Intelligence (EQ) can be measured and developed. Daniel Goleman's model identifies five components: self-awareness, self-regulation, motivation, empathy, and social skills. The EQ Assessment framework helps you evaluate your current level in each component and create a targeted development plan.",
        contentRu: "Эмоциональный интеллект (EQ) можно измерить и развить. Модель Дэниела Гоулмана выделяет пять компонентов: самосознание, саморегуляция, мотивация, эмпатия и социальные навыки. Фреймворк оценки EQ помогает оценить текущий уровень и создать план развития.",
        contentKk: "Эмоциялық интеллектті (EQ) өлшеуге және дамытуға болады. Дэниел Гоулманның моделі бес компонентті анықтайды: өзін-өзі тану, өзін-өзі реттеу, мотивация, эмпатия және әлеуметтік дағдылар. EQ бағалау шеңбері ағымдағы деңгейіңізді бағалауға және даму жоспарын жасауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Goleman's EQ Model: Self-Awareness + Self-Regulation + Motivation + Empathy + Social Skills",
            description: "Five components of emotional intelligence that predict personal and professional success",
            descriptionRu: "Пять компонентов эмоционального интеллекта, предсказывающих личный и профессиональный успех",
            descriptionKk: "Жеке және кәсіби табысты болжайтын эмоциялық интеллекттің бес компоненті"
          },
          {
            formula: "EQ Development Cycle: Assess → Set Goal → Practice → Reflect → Reassess",
            description: "A continuous improvement loop for developing emotional intelligence",
            descriptionRu: "Цикл непрерывного улучшения для развития эмоционального интеллекта",
            descriptionKk: "Эмоциялық интеллектті дамыту үшін үздіксіз жақсарту циклі"
          }
        ],
        solvedExamples: [
          {
            question: "A team leader scores high on motivation and social skills but low on self-regulation. She often sends angry emails when stressed. Create an EQ development plan for her weakest area.",
            questionRu: "Руководитель команды имеет высокие баллы по мотивации и социальным навыкам, но низкие по саморегуляции. Она часто отправляет злые письма при стрессе. Создайте план развития EQ.",
            questionKk: "Топ жетекшісі мотивация мен әлеуметтік дағдыларда жоғары, бірақ өзін-өзі реттеуде төмен балл алады. Ол стресс кезінде жиі ашулы хаттар жібереді. EQ даму жоспарын жасаңыз.",
            steps: [
              { en: "Assess: The weakness is Self-Regulation, specifically impulse control under stress. The angry emails are the symptom, and the trigger is workplace stress.", ru: "Оценка: Слабое место — Саморегуляция, а именно контроль импульсов при стрессе. Злые письма — симптом, рабочий стресс — триггер.", kk: "Бағалау: Әлсіз жағы — Өзін-өзі реттеу, нақтырақ стресс кезіндегі импульсті бақылау. Ашулы хаттар — белгі, жұмыс стрессі — триггер." },
              { en: "Development Plan: (1) Set a rule: never send an email written while upset — save as draft, review after 1 hour. (2) Practice the STOP technique: Stop, Take a breath, Observe your emotion, Proceed thoughtfully. (3) Weekly reflection: review any stressful situations and grade your response. Reassess after 30 days.", ru: "План: (1) Правило: не отправлять письмо, написанное в расстройстве — сохранить черновик, проверить через час. (2) Техника СТОП: Остановись, Вдохни, Наблюдай эмоцию, Действуй обдуманно. (3) Еженедельная рефлексия.", kk: "Жоспар: (1) Ереже: ренжіп жазылған хатты жібермеу — қаралама ретінде сақтап, 1 сағаттан кейін тексеру. (2) ТОҚТА техникасы: Тоқта, Тыныс ал, Эмоцияңды байқа, Ойланып әрекет ет. (3) Апта сайынғы рефлексия." }
            ],
            answer: "Target: Self-Regulation (impulse control). Plan: 1-hour email cooling rule, STOP technique for in-the-moment control, weekly reflection journal. Reassess in 30 days using the EQ Development Cycle.",
            answerRu: "Цель: Саморегуляция (контроль импульсов). План: правило «остыть 1 час» перед письмом, техника СТОП для контроля в моменте, еженедельный дневник рефлексии. Переоценка через 30 дней по Циклу развития EQ.",
            answerKk: "Мақсат: Өзін-өзі реттеу (импульс бақылауы). Жоспар: хат жіберу алдында 1 сағат салқындату ережесі, сол сәттегі бақылау үшін ТОҚТА техникасы, апта сайынғы рефлексия күнделігі. EQ Даму циклі бойынша 30 күннен кейін қайта бағалау."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "List the five components of Goleman's Emotional Intelligence model.",
            questionRu: "Перечислите пять компонентов модели эмоционального интеллекта Гоулмана.",
            questionKk: "Гоулманның эмоциялық интеллект моделінің бес компонентін атаңыз.",
            answer: "Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills.",
            answerRu: "Самосознание, Саморегуляция, Мотивация, Эмпатия и Социальные навыки.",
            answerKk: "Өзін-өзі тану, Өзін-өзі реттеу, Мотивация, Эмпатия және Әлеуметтік дағдылар.",
            hint: "Two are about 'self,' one about drive, one about understanding others, and one about interacting.",
            hintRu: "Два о «себе», один о драйве, один о понимании других, один о взаимодействии.",
            hintKk: "Екеуі «өзі» туралы, бірі жігер туралы, бірі басқаларды түсіну, бірі қарым-қатынас туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rate yourself 1-5 on each EQ component and explain your reasoning for your lowest score. What specific action could improve it?",
            questionRu: "Оцените себя 1-5 по каждому компоненту EQ и объясните причину самого низкого балла. Какое действие его улучшит?",
            questionKk: "Әр EQ компонентінде өзіңізді 1-5 бағалаңыз және ең төменгі баллдың себебін түсіндіріңіз. Қандай нақты әрекет оны жақсартады?",
            answer: "Example: Self-Awareness 4/5 (I journal regularly), Self-Regulation 3/5 (I sometimes react impulsively), Motivation 4/5 (I set goals consistently), Empathy 3/5 (I sometimes miss others' feelings), Social Skills 4/5 (I communicate well). Lowest: Empathy at 3. Action: Practice active listening — in each conversation, summarize what the other person said before responding. This forces attention to their perspective.",
            answerRu: "Пример: Самосознание 4/5 (я регулярно веду дневник), Саморегуляция 3/5 (иногда реагирую импульсивно), Мотивация 4/5 (последовательно ставлю цели), Эмпатия 3/5 (иногда упускаю чувства других), Социальные навыки 4/5 (хорошо общаюсь). Самый низкий: Эмпатия — 3. Действие: практиковать активное слушание — в каждом разговоре пересказывать сказанное собеседником перед ответом. Это заставляет обращать внимание на его точку зрения.",
            answerKk: "Мысал: Өзін-өзі тану 4/5 (тұрақты күнделік жүргіземін), Өзін-өзі реттеу 3/5 (кейде импульсивті әрекет етемін), Мотивация 4/5 (тұрақты мақсат қоямын), Эмпатия 3/5 (кейде басқалардың сезімін байқамаймын), Әлеуметтік дағдылар 4/5 (жақсы қарым-қатынас жасаймын). Ең төмен: Эмпатия — 3. Әрекет: белсенді тыңдауды жаттықтыру — әр әңгімеде жауап беру алдында әңгімелесушінің айтқанын қайталап шығу. Бұл оның көзқарасына назар аударуға мәжбүрлейді.",
            hint: "Be honest about which emotional skill you find most challenging in daily life.",
            hintRu: "Будьте честны о том, какой эмоциональный навык для вас самый сложный.",
            hintKk: "Күнделікті өмірде қай эмоциялық дағды сізге ең қиын екені туралы шынайы болыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Critics say EQ is not a real intelligence — it is just personality. Evaluate this critique using evidence for and against, and form your own conclusion.",
            questionRu: "Критики говорят, что EQ — не настоящий интеллект, а просто личность. Оцените эту критику с доказательствами за и против.",
            questionKk: "Сыншылар EQ нақты интеллект емес — жай тұлға дейді. Бұл сынды жақтаушы және қарсы дәлелдермен бағалаңыз.",
            answer: "For the critique: EQ measures overlap significantly with personality traits like agreeableness and conscientiousness (Big Five). Some EQ tests have questionable reliability and validity. Self-report EQ tests can be easily faked. Against the critique: Performance-based EQ tests (like MSCEIT) do predict outcomes beyond IQ and personality, including job performance, leadership effectiveness, and relationship quality. EQ can be trained and improved, unlike fixed personality traits. Meta-analyses show EQ adds predictive value above and beyond personality alone. Conclusion: EQ is likely a real but overlapping construct — it captures emotional processing skills that are related to personality but not identical. The strongest evidence supports ability-based EQ measures over self-report ones.",
            answerRu: "За критику: показатели EQ значительно пересекаются с чертами личности вроде доброжелательности и добросовестности (Большая пятёрка). Некоторые тесты EQ имеют сомнительную надёжность и валидность. Самоотчётные тесты EQ легко подделать. Против критики: тесты EQ, основанные на производительности (например, MSCEIT), действительно предсказывают результаты сверх IQ и личности, включая рабочую эффективность, лидерство и качество отношений. EQ можно тренировать и улучшать, в отличие от фиксированных черт личности. Метаанализы показывают, что EQ добавляет прогностическую ценность сверх одной личности. Вывод: EQ, вероятно, реальный, но пересекающийся конструкт — он отражает навыки эмоциональной обработки, связанные с личностью, но не идентичные ей. Наиболее убедительные доказательства поддерживают тесты EQ на основе способностей, а не самоотчёты.",
            answerKk: "Сынды жақтайтын: EQ көрсеткіштері келісімшілдік пен ұқыптылық (Үлкен бестік) сияқты тұлғалық белгілермен айтарлықтай қабаттасады. Кейбір EQ тесттерінің сенімділігі мен жарамдылығы күмәнді. Өзін-өзі бағалау EQ тесттерін оңай жалғандауға болады. Сынға қарсы: өнімділікке негізделген EQ тесттері (MSCEIT сияқты) IQ мен тұлғадан тыс нәтижелерді, соның ішінде жұмыс өнімділігін, көшбасшылық тиімділігін және қарым-қатынас сапасын болжайды. Тұрақты тұлғалық белгілерден айырмашылығы, EQ-ны жаттықтыруға және жақсартуға болады. Мета-талдаулар EQ жеке тұлғадан тыс болжамдық құндылық қосатынын көрсетеді. Қорытынды: EQ, шамасы, нақты, бірақ қабаттасатын құрылым — ол тұлғамен байланысты, бірақ бірдей емес эмоциялық өңдеу дағдыларын қамтиды. Ең күшті дәлелдер өзін-өзі бағалауға емес, қабілетке негізделген EQ өлшемдерін қолдайды.",
            hint: "Think about whether EQ tests measure something different from personality tests.",
            hintRu: "Подумайте, измеряют ли тесты EQ что-то отличное от тестов личности.",
            hintKk: "EQ тесттері тұлға тесттерінен ерекше нәрсені өлшей ме, ойлаңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Psychology & Social Intelligence_11": {
    planetName: "Psychology & Social Intelligence",
    introduction: {
      en: "Welcome to Psychology & Social Intelligence for Grade 11! You will master negotiation tactics, leadership psychology, cross-cultural understanding, cognitive-behavioral techniques, resilience building, and advanced conflict resolution. These skills prepare you for real-world leadership and professional success.",
      ru: "Добро пожаловать в Психологию и социальный интеллект для 11 класса! Вы освоите тактики переговоров, психологию лидерства, межкультурное понимание, когнитивно-поведенческие техники, развитие устойчивости и продвинутое управление конфликтами. Эти навыки подготовят вас к лидерству и профессиональному успеху."
    },
    sections: [
      {
        title: "Negotiation Tactics",
        titleRu: "Тактики переговоров",
        titleKk: "Келіссөз тактикалары",
        content: "Negotiation is a structured dialogue where parties with different interests seek a mutually acceptable outcome. Key tactics include anchoring (setting the first offer to frame the range), mirroring (repeating the last few words to build rapport), and labeling (naming the other party's emotions to defuse tension). Skilled negotiators prepare their BATNA — Best Alternative to a Negotiated Agreement — before entering any discussion.",
        contentRu: "Переговоры — это структурированный диалог, в котором стороны с разными интересами ищут взаимоприемлемый результат. Ключевые тактики включают якорение (первое предложение задаёт диапазон), зеркалирование (повторение последних слов для установления контакта) и маркировку (называние эмоций другой стороны для снижения напряжения). Опытные переговорщики готовят BATNA — лучшую альтернативу переговорному соглашению.",
        contentKk: "Келіссөз — әртүрлі мүдделері бар тараптардың өзара қолайлы нәтижеге қол жеткізуге бағытталған құрылымдық диалог. Негізгі тактикаларға якорлеу (бірінші ұсыныс ауқымды белгілейді), айналау (соңғы сөздерді қайталау) және белгілеу (екінші тараптың эмоцияларын атау) жатады. Тәжірибелі келіссөзшілер BATNA — келіссөздік келісімнің ең жақсы баламасын — дайындайды.",
        keyFormulas: [
          {
            formula: "BATNA: Best Alternative to a Negotiated Agreement — your walkaway option",
            description: "Your fallback plan if negotiation fails, determines your leverage",
            descriptionRu: "Ваш запасной план при провале переговоров, определяет вашу силу",
            descriptionKk: "Келіссөз сәтсіз болған жағдайдағы сіздің резервтік жоспарыңыз"
          },
          {
            formula: "Anchoring Effect: First Offer → Sets the Negotiation Range",
            description: "The first number mentioned disproportionately influences the final outcome",
            descriptionRu: "Первое названное число непропорционально влияет на итоговый результат",
            descriptionKk: "Алғаш аталған сан соңғы нәтижеге шамадан тыс әсер етеді"
          }
        ],
        solvedExamples: [
          {
            question: "You want to buy a used laptop listed at $800. Your budget is $600. How would you use anchoring and BATNA?",
            questionRu: "Вы хотите купить б/у ноутбук за $800. Ваш бюджет $600. Как использовать якорение и BATNA?",
            questionKk: "Сіз $800 тұратын қолданылған ноутбук алғыңыз келеді. Бюджетіңіз $600. Якорлеу мен BATNA-ны қалай қолданасыз?",
            steps: [
              { en: "Prepare your BATNA: Research alternative laptops — you found a comparable model online for $550. This is your walkaway option, giving you confidence to negotiate firmly.", ru: "Подготовьте BATNA: Изучите альтернативы — вы нашли аналогичную модель за $550. Это ваш запасной вариант, дающий уверенность.", kk: "BATNA дайындаңыз: Балама ноутбуктерді зерттеңіз — $550-ге ұқсас модель таптыңыз. Бұл сіздің кету нұсқаңыз." },
              { en: "Use anchoring: Open with $450 (below your budget) to set a low anchor. The seller counters at $700. You meet near $575, within budget and below the alternative. If they won't go below $600, you can walk away to your BATNA.", ru: "Используйте якорение: Начните с $450, чтобы задать низкий якорь. Продавец ответит $700. Вы сойдётесь на ~$575. Если не опустятся ниже $600 — уходите к BATNA.", kk: "Якорлеуді қолданыңыз: $450-ден бастаңыз. Сатушы $700 дейді. Шамамен $575-те келісесіз. $600-ден төмендемесе — BATNA-ға кетіңіз." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does BATNA stand for and why is it important before any negotiation?",
            questionRu: "Что означает BATNA и почему это важно перед переговорами?",
            questionKk: "BATNA нені білдіреді және келіссөз алдында неге маңызды?",
            answer: "BATNA stands for Best Alternative to a Negotiated Agreement. It is important because it defines your walkaway point — if the negotiation offers less than your BATNA, you should leave. It gives you confidence and prevents accepting bad deals.",
            answerRu: "BATNA означает «лучшая альтернатива переговорному соглашению». Это важно, потому что определяет вашу точку ухода — если предложение хуже BATNA, стоит уйти. Это даёт уверенность и предотвращает принятие плохих сделок.",
            answerKk: "BATNA «келіссөздік келісімнің ең жақсы баламасы» дегенді білдіреді. Бұл маңызды, себебі ол кету нүктеңізді анықтайды — егер ұсыныс BATNA-дан нашар болса, кету керек. Бұл сенімділік береді және нашар мәмілелерді қабылдаудан сақтайды.",
            hint: "Think about what happens if you cannot reach a deal.",
            hintRu: "Подумайте, что будет, если соглашение не достигнуто.",
            hintKk: "Келісімге қол жеткізе алмасаңыз не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend wants to split chores 70/30 (you do 70%). Use anchoring and mirroring to negotiate a fairer split. Describe your approach step by step.",
            questionRu: "Друг хочет разделить обязанности 70/30 (вы делаете 70%). Используйте якорение и зеркалирование для справедливого разделения.",
            questionKk: "Досыңыз міндеттерді 70/30 бөлгісі келеді (сіз 70%). Якорлеу мен айналауды қолданып әділ бөлуді сипаттаңыз.",
            answer: "Step 1: Counter-anchor at 40/60 (you do 40%) to set a low starting point. Step 2: When your friend says '70 is fair because I'm busier,' mirror by saying 'You're busier?' — this prompts them to explain and often soften their position. Step 3: Negotiate toward 50/50 or 55/45, which is closer to your anchor than theirs. The anchoring pulled the range toward your side.",
            answerRu: "Шаг 1: Контр-якорь 40/60 (вы делаете 40%), чтобы задать низкую стартовую точку. Шаг 2: Когда друг говорит «70 справедливо, потому что я занятее», отзеркальте: «Ты занятее?» — это побуждает объяснить и часто смягчает позицию. Шаг 3: Договоритесь на 50/50 или 55/45, что ближе к вашему якорю. Якорение сдвинуло диапазон в вашу сторону.",
            answerKk: "1-қадам: Төмен бастапқы нүкте белгілеу үшін 40/60 (сіз 40% жасайсыз) қарсы якорь қойыңыз. 2-қадам: Досыңыз «70 әділ, өйткені мен бос емеспін» дегенде, «Сен бос емессің бе?» деп айналаңыз — бұл түсіндіруге итермелейді және көбіне позицияны жұмсартады. 3-қадам: Якоріңізге жақынырақ 50/50 немесе 55/45-ке келісіңіз. Якорлеу ауқымды сіздің жаққа тартты.",
            hint: "Start with an offer that favors you more than 50/50 to leave room for compromise.",
            hintRu: "Начните с предложения, которое выгоднее вам, чтобы оставить место для компромисса.",
            hintKk: "Ымыраға орын қалдыру үшін сізге тиімдірек ұсыныстан бастаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A company offers you a summer internship at $12/hr. You researched that similar roles pay $15-18/hr. Design a full negotiation strategy using BATNA, anchoring, and labeling.",
            questionRu: "Компания предлагает стажировку за $12/час. Аналогичные позиции платят $15-18/час. Разработайте стратегию переговоров с BATNA, якорением и маркировкой.",
            questionKk: "Компания $12/сағ жазғы тәжірибе ұсынады. Ұқсас лауазымдар $15-18/сағ төлейді. BATNA, якорлеу және белгілеуді қолданып стратегия жасаңыз.",
            answer: "BATNA: You have another internship offer at $14/hr at a smaller company. This means you won't accept below $14. Anchoring: Open by requesting $18/hr (top of market range), citing your research. The company may counter at $13-14. Labeling: When the recruiter says the budget is tight, respond with 'It sounds like you're working within strict constraints' — this validates their position and builds rapport. Final strategy: Aim to settle at $15-16, which exceeds your BATNA and is within market range. If they cannot reach $14, activate your BATNA.",
            answerRu: "BATNA: у вас есть другое предложение стажировки за $14/час в меньшей компании. Это значит, что вы не согласитесь на меньше $14. Якорение: начните с запроса $18/час (верх рыночного диапазона), ссылаясь на исследование. Компания может ответить $13-14. Маркировка: когда рекрутёр говорит, что бюджет ограничен, ответьте: «Похоже, вы работаете в жёстких рамках» — это подтверждает их позицию и создаёт контакт. Финальная стратегия: стремитесь договориться на $15-16, что превышает ваш BATNA и находится в рыночном диапазоне. Если они не могут дойти до $14, активируйте BATNA.",
            answerKk: "BATNA: сізде кішірек компанияда $14/сағ тағы бір тәжірибе ұсынысы бар. Бұл $14-тен төмен келіспейтініңізді білдіреді. Якорлеу: зерттеуіңізге сүйеніп $18/сағ (нарық ауқымының жоғарғы жағы) сұраудан бастаңыз. Компания $13-14 деп жауап беруі мүмкін. Белгілеу: рекрутер бюджет тар дегенде, «Сіз қатаң шектеулерде жұмыс істейтін сияқтысыз» деп жауап беріңіз — бұл олардың позициясын растап, байланыс орнатады. Соңғы стратегия: BATNA-дан асатын және нарық ауқымындағы $15-16-ға келісуге тырысыңыз. $14-ке жете алмаса, BATNA-ны іске қосыңыз.",
            hint: "Your BATNA sets the floor, your anchor sets the ceiling, and labeling keeps the conversation collaborative.",
            hintRu: "BATNA задаёт минимум, якорь — максимум, а маркировка поддерживает сотрудничество.",
            hintKk: "BATNA минимумды, якорь максимумды белгілейді, белгілеу ынтымақтастықты сақтайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Win-Win Strategies",
        titleRu: "Стратегии «выигрыш-выигрыш»",
        titleKk: "«Ұтыс-ұтыс» стратегиялары",
        content: "Win-win negotiation focuses on expanding the pie rather than dividing it. The Harvard Negotiation Project's principled negotiation method separates people from the problem, focuses on interests rather than positions, generates options for mutual gain, and insists on objective criteria. Integrative bargaining creates value by identifying complementary interests between parties.",
        contentRu: "Переговоры «выигрыш-выигрыш» фокусируются на увеличении пирога, а не его разделении. Метод принципиальных переговоров Гарварда разделяет людей и проблему, фокусируется на интересах, а не позициях, создаёт варианты взаимной выгоды и настаивает на объективных критериях. Интегративный торг создаёт ценность через взаимодополняющие интересы.",
        contentKk: "«Ұтыс-ұтыс» келіссөздері пирогты бөлудің орнына оны ұлғайтуға бағытталады. Гарвардтың принципті келіссөз әдісі адамдарды мәселеден бөледі, позициялардың орнына мүдделерге назар аударады, өзара пайда нұсқаларын жасайды және объективті критерийлерге сүйенеді.",
        keyFormulas: [
          {
            formula: "Harvard Method: Separate People from Problem → Focus on Interests → Generate Options → Use Objective Criteria",
            description: "Four principles of principled negotiation for win-win outcomes",
            descriptionRu: "Четыре принципа для достижения взаимовыгодного результата",
            descriptionKk: "Өзара тиімді нәтижеге қол жеткізудің төрт принципі"
          }
        ],
        solvedExamples: [
          {
            question: "Two siblings want the last orange. One wants juice, the other wants the peel for baking. Show how win-win thinking solves this.",
            questionRu: "Двое детей хотят последний апельсин. Один хочет сок, другой — цедру для выпечки. Покажите решение «выигрыш-выигрыш».",
            questionKk: "Екі бала соңғы апельсинді қалайды. Бірі шырын, екіншісі пісіруге қабығын қалайды. «Ұтыс-ұтыс» шешімін көрсетіңіз.",
            steps: [
              { en: "Focus on interests, not positions: Both say 'I want the orange' (position), but their interests differ — one needs the juice inside, the other needs the peel outside.", ru: "Фокус на интересах: Оба говорят «Я хочу апельсин» (позиция), но интересы разные — одному нужен сок, другому — цедра.", kk: "Мүдделерге назар аударыңыз: Екеуі де «Апельсин маған керек» дейді (позиция), бірақ мүдделері әртүрлі — біреуіне шырын, екіншісіне қабық керек." },
              { en: "Generate a mutual-gain option: Squeeze the juice for one sibling and give the peel to the other. Both get 100% of what they actually need — this is integrative bargaining at work.", ru: "Создайте взаимовыгодный вариант: Выжать сок одному, отдать цедру другому. Оба получают 100% нужного.", kk: "Өзара тиімді нұсқа жасаңыз: Біреуіне шырын сығып, екіншісіне қабықты беріңіз. Екеуі де қажетінің 100%-ын алады." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between a 'position' and an 'interest' in negotiation? Give one example.",
            questionRu: "Какая разница между «позицией» и «интересом» в переговорах? Приведите пример.",
            questionKk: "Келіссөздегі «позиция» мен «мүдде» арасындағы айырмашылық қандай? Бір мысал келтіріңіз.",
            answer: "A position is what someone says they want ('I want the window open'). An interest is the underlying reason why ('I want fresh air'). Another person's position might be 'I want the window closed' (interest: 'I don't want to feel cold'). Understanding interests allows creative solutions — like opening a window in another room.",
            answerRu: "Позиция — это то, что человек заявляет как своё желание («Хочу, чтобы окно было открыто»). Интерес — это основная причина («Хочу свежего воздуха»). Позиция другого человека может быть «Хочу, чтобы окно было закрыто» (интерес: «Не хочу мёрзнуть»). Понимание интересов позволяет находить творческие решения — например, открыть окно в другой комнате.",
            answerKk: "Позиция — адамның қалайтыны деп айтатыны («Терезе ашық тұрсын дегім келеді»). Мүдде — оның астарындағы себеп («Таза ауа қажет»). Басқа адамның позициясы «Терезе жабық тұрсын» болуы мүмкін (мүдде: «Тоңғым келмейді»). Мүдделерді түсіну шығармашылық шешімдер табуға мүмкіндік береді — мысалы, басқа бөлмеде терезе ашу.",
            hint: "A position is the 'what,' an interest is the 'why.'",
            hintRu: "Позиция — это «что», интерес — «почему».",
            hintKk: "Позиция — «не», мүдде — «неге».",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Two classmates both want to be team leader for a project. Apply the Harvard Method to find a win-win solution.",
            questionRu: "Два одноклассника хотят быть лидером проекта. Примените Гарвардский метод для решения «выигрыш-выигрыш».",
            questionKk: "Екі сыныптас жоба жетекшісі болғысы келеді. Гарвард әдісін қолданып «ұтыс-ұтыс» шешімін табыңыз.",
            answer: "1) Separate people from problem: This isn't personal rivalry — it's about project success. 2) Focus on interests: Student A wants to develop leadership skills; Student B wants to ensure a good grade. 3) Generate options: A leads the team coordination while B leads the content quality and presentation. 4) Objective criteria: Use project rubric to define roles based on grading weight. Both lead different aspects, satisfying their core interests.",
            answerRu: "1) Отделите людей от проблемы: это не личное соперничество — речь об успехе проекта. 2) Сосредоточьтесь на интересах: ученик А хочет развить лидерские навыки; ученик Б хочет обеспечить хорошую оценку. 3) Создайте варианты: А руководит координацией команды, Б — качеством контента и презентацией. 4) Объективные критерии: используйте критерии оценки проекта для распределения ролей по весу оценки. Оба руководят разными аспектами, удовлетворяя свои основные интересы.",
            answerKk: "1) Адамдарды мәселеден бөліңіз: бұл жеке қарсыластық емес — жобаның табысы туралы. 2) Мүдделерге назар аударыңыз: А оқушысы көшбасшылық дағдыларын дамытқысы келеді; Б оқушысы жақсы баға алғысы келеді. 3) Нұсқалар жасаңыз: А топ үйлестіруін басқарады, Б мазмұн сапасы мен презентацияны басқарады. 4) Объективті критерийлер: рөлдерді баға салмағына қарай белгілеу үшін жоба критерийін қолданыңыз. Екеуі де әр түрлі аспектілерді басқарып, өз негізгі мүдделерін қанағаттандырады.",
            hint: "Ask yourself: why does each person really want to lead?",
            hintRu: "Спросите: почему каждый действительно хочет быть лидером?",
            hintKk: "Сұраңыз: әрқайсысы неге шынымен жетекші болғысы келеді?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A school wants to cut arts funding to increase STEM budgets. The arts department opposes this. Design a win-win proposal using integrative bargaining that addresses both sides' core interests.",
            questionRu: "Школа хочет сократить финансирование искусств ради STEM. Отдел искусств против. Разработайте предложение «выигрыш-выигрыш».",
            questionKk: "Мектеп STEM үшін өнер қаржыландыруын қысқартқысы келеді. Өнер бөлімі қарсы. «Ұтыс-ұтыс» ұсынысын жасаңыз.",
            answer: "Interests: School administration wants better STEM outcomes and college placement rates. Arts department wants creative expression, student well-being, and program survival. Integrative proposal: Create STEAM (Science, Technology, Engineering, Arts, Math) integrated courses that count toward STEM credits while preserving arts. Apply for STEAM-specific grants to supplement both budgets. Use art students to create STEM visualizations and marketing materials. Objective criteria: Track student engagement, college acceptance rates, and grant revenue. This expands the pie by creating new funding sources and cross-disciplinary value.",
            answerRu: "Интересы: администрация школы хочет лучших результатов по STEM и показателей поступления в вузы. Отдел искусств хочет творческого самовыражения, благополучия учеников и выживания программы. Интегративное предложение: создать интегрированные курсы STEAM (наука, технологии, инженерия, искусство, математика), которые засчитываются как STEM-кредиты, сохраняя искусство. Подать заявки на гранты STEAM для пополнения обоих бюджетов. Использовать учеников искусств для создания STEM-визуализаций и маркетинговых материалов. Объективные критерии: отслеживать вовлечённость учеников, показатели поступления и доход от грантов. Это расширяет «пирог», создавая новые источники финансирования и межпредметную ценность.",
            answerKk: "Мүдделер: мектеп әкімшілігі жақсырақ STEM нәтижелерін және университетке түсу көрсеткіштерін қалайды. Өнер бөлімі шығармашылық көрініс, оқушылардың әл-ауқаты және бағдарламаның аман қалуын қалайды. Интегративті ұсыныс: өнерді сақтай отырып STEM кредиттеріне саналатын STEAM (Ғылым, Технология, Инженерия, Өнер, Математика) біріктірілген курстарын құру. Екі бюджетті толықтыру үшін STEAM грантына өтініш беру. STEM визуализациялары мен маркетингтік материалдар жасау үшін өнер оқушыларын пайдалану. Объективті критерийлер: оқушылардың қатысуын, университетке түсу көрсеткіштерін және грант табысын бақылау. Бұл жаңа қаржыландыру көздері мен пәнаралық құндылық жасау арқылы «пирогты» кеңейтеді.",
            hint: "Look for ways the two departments can create more value together than apart.",
            hintRu: "Ищите способы, как два отдела создают больше ценности вместе.",
            hintKk: "Екі бөлім бірге көбірек құндылық жасай алатын жолдарды іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Leadership Psychology",
        titleRu: "Психология лидерства",
        titleKk: "Көшбасшылық психологиясы",
        content: "Leadership psychology studies how individuals inspire, motivate, and guide others toward shared goals. Transformational leaders elevate followers beyond self-interest through idealized influence, inspirational motivation, intellectual stimulation, and individualized consideration. Situational leadership theory suggests that effective leaders adapt their style — directing, coaching, supporting, or delegating — based on followers' competence and commitment levels.",
        contentRu: "Психология лидерства изучает, как люди вдохновляют и направляют других к общим целям. Трансформационные лидеры поднимают последователей выше личных интересов через идеализированное влияние, вдохновляющую мотивацию, интеллектуальную стимуляцию и индивидуальный подход. Ситуационная теория лидерства предлагает адаптировать стиль — направление, коучинг, поддержку или делегирование.",
        contentKk: "Көшбасшылық психологиясы адамдардың басқаларды ортақ мақсаттарға қалай шабыттандыратынын зерттейді. Трансформациялық көшбасшылар ізбасарларды идеализацияланған ықпал, шабыттандырушы мотивация, интеллектуалды ынталандыру және жеке көзқарас арқылы көтереді. Ситуациялық көшбасшылық теориясы стильді — бағыттау, коучинг, қолдау немесе делегирлеу — бейімдеуді ұсынады.",
        keyFormulas: [
          {
            formula: "Transformational Leadership: Idealized Influence + Inspirational Motivation + Intellectual Stimulation + Individualized Consideration",
            description: "Four components that elevate followers beyond self-interest",
            descriptionRu: "Четыре компонента, которые поднимают последователей выше личных интересов",
            descriptionKk: "Ізбасарларды жеке мүдделерден жоғары көтеретін төрт компонент"
          },
          {
            formula: "Situational Leadership: Style = f(Follower Competence, Follower Commitment)",
            description: "Leaders adapt between directing, coaching, supporting, and delegating based on follower readiness",
            descriptionRu: "Лидеры адаптируют стиль между направлением, коучингом, поддержкой и делегированием",
            descriptionKk: "Көшбасшылар ізбасардың дайындығына байланысты стильді бейімдейді"
          }
        ],
        solvedExamples: [
          {
            question: "A new team member is enthusiastic but inexperienced. Which situational leadership style should you use and why?",
            questionRu: "Новый член команды полон энтузиазма, но неопытен. Какой ситуационный стиль лидерства выбрать?",
            questionKk: "Жаңа команда мүшесі ынталы, бірақ тәжірибесіз. Қай ситуациялық көшбасшылық стилін таңдайсыз?",
            steps: [
              { en: "Assess competence and commitment: The team member has low competence (inexperienced) but high commitment (enthusiastic). This matches the 'coaching' quadrant in situational leadership.", ru: "Оцените компетенцию и приверженность: Низкая компетенция (неопытен), но высокая приверженность (энтузиазм). Это соответствует стилю «коучинг».", kk: "Құзыретті және адалдықты бағалаңыз: Төмен құзырет (тәжірибесіз), бірақ жоғары адалдық (ынталы). Бұл «коучинг» стиліне сәйкес." },
              { en: "Apply coaching style: Provide clear direction and structure (like directing) while also explaining decisions, soliciting input, and encouraging growth. Example: 'Here's how we do this task — try it, and I'll give you feedback along the way.'", ru: "Примените коучинг: Давайте чёткие указания, объясняя решения и поощряя рост. Пример: «Вот как делать эту задачу — попробуйте, я дам обратную связь».", kk: "Коучингті қолданыңыз: Нақты бағыт беріңіз, шешімдерді түсіндіріп, дамуды ынталандырыңыз. Мысал: «Мына тапсырманы осылай орындайды — көріңіз, мен кері байланыс беремін»." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the four components of transformational leadership and briefly explain one.",
            questionRu: "Назовите четыре компонента трансформационного лидерства и кратко объясните один.",
            questionKk: "Трансформациялық көшбасшылықтың төрт компонентін атаңыз және біреуін қысқаша түсіндіріңіз.",
            answer: "The four components are: Idealized Influence (being a role model), Inspirational Motivation (communicating a compelling vision), Intellectual Stimulation (challenging followers to think creatively), and Individualized Consideration (attending to each person's unique needs). For example, Intellectual Stimulation means a leader asks 'What if we tried it differently?' rather than insisting on one approach.",
            answerRu: "Четыре компонента: Идеализированное влияние (быть примером для подражания), Вдохновляющая мотивация (передача убедительного видения), Интеллектуальная стимуляция (побуждение мыслить творчески) и Индивидуализированный подход (внимание к уникальным потребностям каждого). Например, Интеллектуальная стимуляция — это когда лидер спрашивает «А что если попробовать иначе?» вместо настаивания на одном подходе.",
            answerKk: "Төрт компонент: Идеалдандырылған ықпал (үлгі болу), Шабыттандырушы мотивация (сендіретін көзқарасты жеткізу), Интеллектуалды ынталандыру (шығармашылық ойлауға шақыру) және Жеке көзқарас (әр адамның бірегей қажеттіліктеріне назар аудару). Мысалы, Интеллектуалды ынталандыру — көшбасшы бір тәсілге бекінудің орнына «Басқаша көрсек ше?» деп сұрайды дегенді білдіреді.",
            hint: "Think about what makes someone inspiring to follow — it goes beyond just giving orders.",
            hintRu: "Подумайте, что делает человека вдохновляющим лидером — это больше, чем просто приказы.",
            hintKk: "Адамды шабыттандыратын не екенін ойлаңыз — бұл бұйрықтардан артық.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your study group has four members: A is experienced and motivated, B is experienced but bored, C is new but eager, D is new and discouraged. Assign a situational leadership style to each and explain.",
            questionRu: "В группе четыре участника: A — опытный и мотивированный, B — опытный, но скучает, C — новичок, но увлечённый, D — новичок и обескуражен. Назначьте стиль для каждого.",
            questionKk: "Топта төрт мүше: A — тәжірибелі және ынталы, B — тәжірибелі, бірақ зерігеді, C — жаңа, бірақ құмар, D — жаңа және көңілсіз. Әрқайсысына стиль тағайындаңыз.",
            answer: "A (high competence, high commitment) → Delegating: trust them with autonomy, minimal supervision. B (high competence, low commitment) → Supporting: don't teach skills but re-engage their motivation through shared decisions and recognition. C (low competence, high commitment) → Coaching: provide direction while encouraging and explaining. D (low competence, low commitment) → Directing: give clear, specific instructions and close supervision to build basic skills and confidence.",
            answerRu: "A (высокая компетентность, высокая приверженность) → Делегирование: доверять автономию, минимальный контроль. B (высокая компетентность, низкая приверженность) → Поддержка: не учить навыкам, а восстанавливать мотивацию через совместные решения и признание. C (низкая компетентность, высокая приверженность) → Коучинг: давать направление, поощряя и объясняя. D (низкая компетентность, низкая приверженность) → Директивность: давать чёткие конкретные указания и плотный контроль для формирования базовых навыков и уверенности.",
            answerKk: "A (жоғары құзырет, жоғары адалдық) → Делегирлеу: автономияға сеніп, минималды бақылау. B (жоғары құзырет, төмен адалдық) → Қолдау: дағдыны үйретпей, ортақ шешімдер мен мойындау арқылы мотивациясын қалпына келтіру. C (төмен құзырет, жоғары адалдық) → Коучинг: ынталандырып, түсіндіре отырып бағыт беру. D (төмен құзырет, төмен адалдық) → Бағыттау: базалық дағдылар мен сенімділік қалыптастыру үшін нақты, анық нұсқаулар мен тығыз бақылау беру.",
            hint: "Match each person's skill level and motivation to one of the four styles.",
            hintRu: "Сопоставьте уровень навыков и мотивацию каждого с одним из четырёх стилей.",
            hintKk: "Әр адамның дағды деңгейі мен мотивациясын төрт стильдің біріне сәйкестендіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare transformational and transactional leadership. In what situations would transactional leadership be more effective than transformational? Provide two specific scenarios.",
            questionRu: "Сравните трансформационное и транзакционное лидерство. Когда транзакционное эффективнее? Приведите два сценария.",
            questionKk: "Трансформациялық және транзакциялық көшбасшылықты салыстырыңыз. Транзакциялық қашан тиімдірек? Екі сценарий келтіріңіз.",
            answer: "Transformational leadership inspires through vision and personal growth; transactional leadership motivates through clear rewards and consequences. Transactional is more effective in: 1) Crisis situations (e.g., emergency evacuation) — clear directives and compliance matter more than inspiration; people need to know exactly what to do, not why. 2) Routine operational work (e.g., factory assembly line) — consistent output requires standardized procedures and performance-based rewards, not creative innovation. Transformational works better for long-term change, innovation, and building commitment, but transactional excels when the priority is immediate compliance, consistency, and measurable results.",
            answerRu: "Трансформационное лидерство вдохновляет через видение и личностный рост; транзакционное мотивирует через чёткие награды и последствия. Транзакционное эффективнее: 1) В кризисных ситуациях (например, экстренная эвакуация) — чёткие указания и подчинение важнее вдохновения; людям нужно точно знать, что делать, а не почему. 2) В рутинной операционной работе (например, конвейер) — стабильный результат требует стандартизированных процедур и наград за результат, а не творческих инноваций. Трансформационное лучше подходит для долгосрочных изменений, инноваций и формирования приверженности, а транзакционное превосходит, когда приоритет — немедленное подчинение, стабильность и измеримые результаты.",
            answerKk: "Трансформациялық көшбасшылық көзқарас пен жеке өсу арқылы шабыттандырады; транзакциялық көшбасшылық нақты марапаттар мен салдарлар арқылы ынталандырады. Транзакциялық тиімдірек: 1) Дағдарыс жағдайларында (мысалы, шұғыл эвакуация) — нақты нұсқаулар мен бағыну шабыттан маңыздырақ; адамдарға неге емес, дәл не істеу керегін білу керек. 2) Күнделікті операциялық жұмыста (мысалы, конвейер) — тұрақты нәтиже стандартталған процедураларды және нәтижеге негізделген марапаттарды талап етеді, шығармашылық инновацияны емес. Трансформациялық ұзақ мерзімді өзгеріс, инновация және адалдық қалыптастыру үшін жақсырақ жұмыс істейді, ал транзакциялық басымдық жедел бағыну, тұрақтылық және өлшенетін нәтижелер болғанда басым түседі.",
            hint: "Think about when following exact instructions matters more than creative inspiration.",
            hintRu: "Подумайте, когда точное выполнение инструкций важнее творческого вдохновения.",
            hintKk: "Нақты нұсқауларды орындау шығармашылық шабыттан маңыздырақ болатын кезді ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Influence Without Authority",
        titleRu: "Влияние без полномочий",
        titleKk: "Өкілетсіз ықпал",
        content: "Influence without authority is the ability to shape decisions and behaviors when you have no formal power. Robert Cialdini's six principles of influence — reciprocity, commitment/consistency, social proof, authority, liking, and scarcity — work even without a title. Building trust, demonstrating expertise, and creating alliances are essential strategies for leading laterally among peers.",
        contentRu: "Влияние без полномочий — способность формировать решения, не имея формальной власти. Шесть принципов влияния Чалдини — взаимность, последовательность, социальное доказательство, авторитет, симпатия и дефицит — работают без должности. Доверие, экспертиза и создание союзов — ключевые стратегии горизонтального лидерства.",
        contentKk: "Өкілетсіз ықпал — ресми билігіңіз болмаған кезде шешімдер мен мінез-құлыққа әсер ету қабілеті. Чалдинидің алты ықпал принципі — өзара алмасу, дәйектілік, әлеуметтік дәлел, беделділік, ұнатылу және тапшылық — лауазымсыз жұмыс істейді. Сенім, сарапшылық және одақтар құру — көлденең көшбасшылықтың негізгі стратегиялары.",
        keyFormulas: [
          {
            formula: "Cialdini's 6 Principles: Reciprocity, Commitment, Social Proof, Authority, Liking, Scarcity",
            description: "Six evidence-based principles that drive human compliance and persuasion",
            descriptionRu: "Шесть научно обоснованных принципов, управляющих убеждением",
            descriptionKk: "Адамның сенімін және көндіруін басқаратын алты ғылыми негізделген принцип"
          }
        ],
        solvedExamples: [
          {
            question: "You want your school club to adopt a new community service project, but you are not the president. How can you use two of Cialdini's principles?",
            questionRu: "Вы хотите, чтобы школьный клуб принял новый проект, но вы не президент. Как использовать два принципа Чалдини?",
            questionKk: "Мектеп клубыңыздың жаңа жобаны қабылдауын қалайсыз, бірақ президент емессіз. Чалдинидің екі принципін қалай қолданасыз?",
            steps: [
              { en: "Use Social Proof: Show that three other successful clubs at nearby schools run similar projects. People follow what others are already doing.", ru: "Социальное доказательство: Покажите, что три других клуба уже реализуют подобные проекты. Люди следуют за тем, что делают другие.", kk: "Әлеуметтік дәлел: Үш басқа клуб осындай жобаларды іске асыратынын көрсетіңіз. Адамдар басқалардың ісіне еріледі." },
              { en: "Use Reciprocity: Volunteer to do extra work on the current project first, building goodwill. When you then propose the new idea, members feel inclined to reciprocate your effort by supporting it.", ru: "Взаимность: Сначала возьмите дополнительную работу по текущему проекту. Когда предложите идею, участники захотят ответить взаимностью.", kk: "Өзара алмасу: Алдымен ағымдағы жобада қосымша жұмыс алыңыз. Жаңа идея ұсынғанда мүшелер жауап қайтарғысы келеді." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Explain the principle of reciprocity and give a real-life example of how it influences behavior.",
            questionRu: "Объясните принцип взаимности и приведите пример его влияния на поведение.",
            questionKk: "Өзара алмасу принципін түсіндіріп, мінез-құлыққа қалай әсер ететінін мысалмен көрсетіңіз.",
            answer: "Reciprocity means people feel obligated to return favors. Example: When a grocery store offers free samples, customers feel a subtle pressure to buy the product. The free gift creates a sense of indebtedness that influences purchasing behavior.",
            answerRu: "Взаимность означает, что люди чувствуют себя обязанными отвечать взаимностью на услуги. Пример: когда продуктовый магазин предлагает бесплатные образцы, покупатели чувствуют лёгкое давление купить продукт. Бесплатный подарок создаёт чувство долга, влияющее на покупательское поведение.",
            answerKk: "Өзара алмасу адамдардың жақсылыққа жауап беруге міндетті сезінетінін білдіреді. Мысал: азық-түлік дүкені тегін үлгі ұсынғанда, тұтынушылар өнімді сатып алуға жеңіл қысым сезінеді. Тегін сыйлық сатып алу мінез-құлқына әсер ететін борыш сезімін тудырады.",
            hint: "Think about what happens when someone does you a favor — how do you feel?",
            hintRu: "Подумайте, что вы чувствуете, когда кто-то делает вам услугу.",
            hintKk: "Біреу сізге жақсылық жасағанда не сезінетініңізді ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are a student representative trying to convince the principal to allow a student lounge. You have no decision-making power. Use three of Cialdini's principles in your pitch.",
            questionRu: "Вы представитель учеников, убеждающий директора разрешить комнату отдыха. У вас нет власти. Используйте три принципа Чалдини.",
            questionKk: "Сіз директорды студенттік бөлмеге рұқсат беруге сендіретін оқушы өкілісіз. Билігіңіз жоқ. Чалдинидің үш принципін қолданыңыз.",
            answer: "1) Authority: Present research from education journals showing student lounges improve academic performance and reduce stress — citing expert sources adds credibility. 2) Social Proof: Show that 5 out of 7 nearby schools already have student lounges with positive results. 3) Scarcity: Emphasize that a donated furniture set is available now but will be given to another school if the decision is delayed. This creates urgency without pressure.",
            answerRu: "1) Авторитет: представьте исследования из образовательных журналов, показывающие, что комнаты отдыха улучшают успеваемость и снижают стресс — ссылка на экспертные источники добавляет достоверности. 2) Социальное доказательство: покажите, что 5 из 7 соседних школ уже имеют комнаты отдыха с положительными результатами. 3) Дефицит: подчеркните, что подаренный набор мебели доступен сейчас, но будет передан другой школе, если решение отложат. Это создаёт срочность без давления.",
            answerKk: "1) Билік: студенттік бөлмелердің академиялық үлгерімді жақсартып, стрессті азайтатынын көрсететін білім журналдарынан зерттеулер ұсыныңыз — сарапшы дереккөздерге сілтеме сенімділік қосады. 2) Әлеуметтік дәлел: жақын жердегі 7 мектептің 5-інде студенттік бөлмелер оң нәтижелермен бар екенін көрсетіңіз. 3) Тапшылық: сыйға тартылған жиһаз жиынтығы қазір қолжетімді, бірақ шешім кешіктірілсе басқа мектепке берілетінін атап өтіңіз. Бұл қысымсыз шұғылдық жасайды.",
            hint: "Think about what would make the principal trust your idea and feel urgency to act.",
            hintRu: "Подумайте, что заставит директора доверять идее и почувствовать срочность.",
            hintKk: "Директорды идеяға сенуге және шұғыл әрекет жасауға не итермелейтінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Cialdini's principles can be used ethically or manipulatively. For each of the six principles, give one ethical and one manipulative use, and explain where the ethical line falls.",
            questionRu: "Принципы Чалдини можно использовать этично или манипулятивно. Для каждого из шести приведите этичное и манипулятивное использование.",
            questionKk: "Чалдини принциптерін этикалық немесе манипуляциялық пайдалануға болады. Алтауының әрқайсысына этикалық және манипуляциялық қолдануды келтіріңіз.",
            answer: "Reciprocity — Ethical: giving genuine help and building relationships. Manipulative: giving small gifts to create obligation for large favors. Commitment — Ethical: helping people set goals they truly want. Manipulative: foot-in-the-door technique to escalate unwanted commitments. Social Proof — Ethical: sharing testimonials to inform decisions. Manipulative: fabricating reviews to mislead. Authority — Ethical: citing real expertise to guide. Manipulative: using fake credentials. Liking — Ethical: building genuine rapport. Manipulative: flattery to exploit. Scarcity — Ethical: honestly noting limited availability. Manipulative: creating false urgency. The ethical line: influence is ethical when it serves the other person's genuine interest and uses truthful information; it becomes manipulation when it deceives or exploits.",
            answerRu: "Взаимность — Этично: оказывать настоящую помощь и строить отношения. Манипулятивно: дарить мелкие подарки для создания обязательства крупных услуг. Обязательство — Этично: помогать людям ставить цели, которые они действительно хотят. Манипулятивно: техника «нога в двери» для эскалации нежелательных обязательств. Социальное доказательство — Этично: делиться отзывами для информирования решений. Манипулятивно: фабриковать отзывы для введения в заблуждение. Авторитет — Этично: ссылаться на реальную экспертизу. Манипулятивно: использовать поддельные полномочия. Симпатия — Этично: строить настоящий контакт. Манипулятивно: лесть для эксплуатации. Дефицит — Этично: честно указывать ограниченную доступность. Манипулятивно: создавать ложную срочность. Этическая граница: влияние этично, когда служит истинным интересам другого человека и использует правдивую информацию; становится манипуляцией, когда обманывает или эксплуатирует.",
            answerKk: "Өзара алмасу — Этикалық: шынайы көмек көрсету және қарым-қатынас құру. Манипуляциялық: үлкен қызметке міндеттеу үшін шағын сыйлықтар беру. Міндеттеме — Этикалық: адамдарға шынымен қалайтын мақсаттарын қоюға көмектесу. Манипуляциялық: қаламаған міндеттемелерді ұлғайту үшін «есіктегі аяқ» тәсілі. Әлеуметтік дәлел — Этикалық: шешімдерді хабарлау үшін пікірлермен бөлісу. Манипуляциялық: адастыру үшін пікірлерді жалғандау. Билік — Этикалық: бағыттау үшін нақты сараптамаға сілтеме жасау. Манипуляциялық: жалған сенімхаттарды қолдану. Ұнату — Этикалық: шынайы байланыс құру. Манипуляциялық: пайдалану үшін жағымпаздық. Тапшылық — Этикалық: шектеулі қолжетімділікті адал көрсету. Манипуляциялық: жалған шұғылдық жасау. Этикалық шекара: ықпал басқа адамның шынайы мүддесіне қызмет еткенде және шынайы ақпаратты қолданғанда этикалық болады; алдағанда немесе пайдаланғанда манипуляцияға айналады.",
            hint: "For each principle, the ethical version benefits both parties; the manipulative version benefits only the influencer.",
            hintRu: "Этичная версия выгодна обеим сторонам; манипулятивная — только влияющему.",
            hintKk: "Этикалық нұсқа екі тарапқа тиімді; манипуляциялық — тек ықпал етушіге.",
            xp: 20
          }
        ]
      },
      {
        title: "Organizational Behavior",
        titleRu: "Организационное поведение",
        titleKk: "Ұйымдық мінез-құлық",
        content: "Organizational behavior (OB) studies how people interact within groups and organizations. Key concepts include organizational culture (shared values and norms that shape behavior), team roles (Belbin identified nine roles including coordinator, implementer, and creative), and psychological safety — the belief that you can speak up without punishment. Google's Project Aristotle found psychological safety to be the top predictor of team effectiveness.",
        contentRu: "Организационное поведение (ОП) изучает взаимодействие людей в группах и организациях. Ключевые концепции: организационная культура (общие ценности), командные роли (Белбин выделил девять ролей) и психологическая безопасность — уверенность, что можно высказаться без наказания. Проект Aristotle Google показал, что психологическая безопасность — главный предиктор эффективности команды.",
        contentKk: "Ұйымдық мінез-құлық (ҰМ) адамдардың топтар мен ұйымдарда қалай өзара әрекеттесетінін зерттейді. Негізгі тұжырымдамалар: ұйымдық мәдениет (ортақ құндылықтар), командалық рөлдер (Белбин тоғыз рөлді анықтады) және психологиялық қауіпсіздік — жазасыз пікір білдіре алу сенімі. Google-дің Aristotle жобасы психологиялық қауіпсіздіктің команда тиімділігінің басты болжамшысы екенін анықтады.",
        keyFormulas: [
          {
            formula: "Google's Project Aristotle: Psychological Safety > Dependability > Structure > Meaning > Impact",
            description: "Five key dynamics of effective teams, ranked by importance",
            descriptionRu: "Пять ключевых динамик эффективных команд в порядке важности",
            descriptionKk: "Тиімді командалардың маңыздылық бойынша бес негізгі динамикасы"
          }
        ],
        solvedExamples: [
          {
            question: "A project team avoids disagreeing with the team leader, even when they see problems. Diagnose the issue using OB concepts and suggest a fix.",
            questionRu: "Проектная команда избегает несогласия с лидером, даже видя проблемы. Диагностируйте проблему и предложите решение.",
            questionKk: "Жоба командасы мәселелерді көрсе де жетекшімен келіспеуден қашады. Мәселені диагностикалаңыз және шешім ұсыныңыз.",
            steps: [
              { en: "Diagnose: The team lacks psychological safety — members fear negative consequences for speaking up. This creates groupthink, where the desire for harmony overrides honest evaluation.", ru: "Диагноз: Команде не хватает психологической безопасности — участники боятся последствий. Это создаёт групповое мышление.", kk: "Диагноз: Командада психологиялық қауіпсіздік жетіспейді — мүшелер салдардан қорқады. Бұл топтық ойлауды тудырады." },
              { en: "Fix: The leader should model vulnerability by admitting their own mistakes first. Implement a 'pre-mortem' exercise where the team imagines the project has failed and identifies reasons why. This normalizes dissent and builds psychological safety.", ru: "Решение: Лидер должен первым признавать ошибки. Внедрите «пре-мортем» — команда представляет провал проекта и ищет причины. Это нормализует несогласие.", kk: "Шешім: Жетекші алдымен өз қателерін мойындауы керек. «Пре-мортем» енгізіңіз — команда жоба сәтсіздігін елестетіп, себептерін іздейді. Бұл келіспеушілікті қалыптастырады." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is psychological safety and why did Google's Project Aristotle rank it as the most important team factor?",
            questionRu: "Что такое психологическая безопасность и почему проект Aristotle считает её главным фактором?",
            questionKk: "Психологиялық қауіпсіздік дегеніміз не және Aristotle жобасы оны неге бірінші орынға қойды?",
            answer: "Psychological safety is the shared belief that a team is safe for interpersonal risk-taking — you can ask questions, admit mistakes, and propose ideas without fear of embarrassment or punishment. Google ranked it first because teams with high psychological safety made more mistakes but learned faster, innovated more, and ultimately outperformed 'safe' teams that avoided risk.",
            answerRu: "Психологическая безопасность — это общая уверенность, что команда безопасна для межличностного риска — можно задавать вопросы, признавать ошибки и предлагать идеи без страха смущения или наказания. Google поставил её на первое место, потому что команды с высокой психологической безопасностью совершали больше ошибок, но быстрее учились, больше инновировали и в итоге превосходили «безопасные» команды, избегавшие риска.",
            answerKk: "Психологиялық қауіпсіздік — команда тұлғааралық тәуекел үшін қауіпсіз деген ортақ сенім — ұялу немесе жазадан қорықпай сұрақ қоюға, қателерді мойындауға және идеялар ұсынуға болады. Google оны бірінші орынға қойды, себебі психологиялық қауіпсіздігі жоғары командалар көбірек қателесті, бірақ тезірек үйренді, көбірек инновация жасады және сайып келгенде тәуекелден қашқан «қауіпсіз» командалардан асып түсті.",
            hint: "It is about feeling safe to be imperfect in front of your team.",
            hintRu: "Это о том, чтобы чувствовать себя в безопасности, будучи несовершенным перед командой.",
            hintKk: "Бұл команда алдында кемшіліксіз болмауға қауіпсіздік сезіну туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You join a new study group where one person dominates discussions and others stay quiet. Using OB concepts, explain what is happening and propose two interventions.",
            questionRu: "В новой группе один человек доминирует, остальные молчат. Объясните ситуацию с позиции ОП и предложите два вмешательства.",
            questionKk: "Жаңа топта бір адам басымдыққа ие, қалғандары тыныш. ҰМ тұрғысынан түсіндіріп, екі шара ұсыныңыз.",
            answer: "OB Diagnosis: The group has low psychological safety and unbalanced participation — one member has assumed an informal authority role while others exhibit social loafing or fear of judgment. Intervention 1: Implement round-robin speaking turns so every person shares before discussion opens up. This uses structural change to redistribute participation. Intervention 2: Use anonymous written brainstorming before group discussion — each person writes ideas on paper, then they are shared anonymously. This separates idea quality from social dominance.",
            answerRu: "Диагноз ОП: группа имеет низкую психологическую безопасность и неравномерное участие — один участник взял на себя неформальную роль авторитета, а другие проявляют социальную леность или страх осуждения. Вмешательство 1: внедрить очерёдность выступлений, чтобы каждый высказался до открытого обсуждения. Это структурное изменение перераспределяет участие. Вмешательство 2: использовать анонимный письменный мозговой штурм до группового обсуждения — каждый пишет идеи на бумаге, затем они делятся анонимно. Это отделяет качество идеи от социального доминирования.",
            answerKk: "ҰМ диагнозы: топта психологиялық қауіпсіздік төмен және қатысу теңгерімсіз — бір мүше бейресми билік рөлін алды, ал басқалары әлеуметтік енжарлық немесе сотталудан қорқу көрсетеді. 1-шара: талқылау ашылмас бұрын әркім сөйлейтіндей кезектесіп сөйлеу тәртібін енгізу. Бұл құрылымдық өзгеріс қатысуды қайта бөледі. 2-шара: топтық талқылау алдында анонимді жазбаша ой шақыруды қолдану — әркім қағазға идея жазады, содан кейін олар анонимді бөліседі. Бұл идея сапасын әлеуметтік үстемдіктен бөледі.",
            hint: "Think about structural changes that give quieter members an equal voice.",
            hintRu: "Подумайте о структурных изменениях, дающих тихим участникам равный голос.",
            hintKk: "Тыныш мүшелерге тең мүмкіндік беретін құрылымдық өзгерістерді ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare Belbin's team role theory with Google's Project Aristotle findings. Do they contradict or complement each other? Build an argument using evidence from both.",
            questionRu: "Сравните теорию командных ролей Белбина с результатами проекта Aristotle. Они противоречат или дополняют друг друга?",
            questionKk: "Белбиннің командалық рөл теориясын Aristotle жобасымен салыстырыңыз. Олар қарама-қайшы ма, әлде бір-бірін толықтырады ма?",
            answer: "They complement each other at different levels. Belbin focuses on WHAT roles a team needs — coordinator, implementer, creative, etc. — to ensure all functions are covered. Project Aristotle focuses on HOW the team interacts — psychological safety, dependability, etc. A team could have perfect Belbin role coverage but still fail if members don't feel safe to use those roles. Conversely, high psychological safety without complementary skills means good communication but poor execution. The synthesis: Belbin answers 'who should be on the team,' Aristotle answers 'how should the team work together.' Both are necessary — team composition (Belbin) enables potential, team dynamics (Aristotle) realizes it.",
            answerRu: "Они дополняют друг друга на разных уровнях. Белбин фокусируется на том, КАКИЕ роли нужны команде — координатор, исполнитель, генератор идей и т. д. — чтобы обеспечить покрытие всех функций. Проект Aristotle фокусируется на том, КАК команда взаимодействует — психологическая безопасность, надёжность и т. д. Команда может иметь идеальный набор ролей по Белбину, но всё равно потерпеть неудачу, если участники не чувствуют себя в безопасности, используя эти роли. И наоборот, высокая психологическая безопасность без взаимодополняющих навыков означает хорошее общение, но плохое исполнение. Синтез: Белбин отвечает на вопрос «кто должен быть в команде», Aristotle — «как команда должна работать вместе». Оба необходимы — состав команды (Белбин) создаёт потенциал, динамика команды (Aristotle) его реализует.",
            answerKk: "Олар әр түрлі деңгейде бір-бірін толықтырады. Белбин командаға ҚАНДАЙ рөлдер қажет екеніне назар аударады — үйлестіруші, орындаушы, шығармашыл және т.б. — барлық функциялардың қамтылуын қамтамасыз ету үшін. Aristotle жобасы команданың ҚАЛАЙ өзара әрекеттесетініне назар аударады — психологиялық қауіпсіздік, сенімділік және т.б. Команда Белбин бойынша тамаша рөл жабуы болуы мүмкін, бірақ мүшелер сол рөлдерді қолдануға қауіпсіз сезінбесе, сәтсіздікке ұшырауы мүмкін. Керісінше, толықтырушы дағдыларсыз жоғары психологиялық қауіпсіздік жақсы қарым-қатынасты, бірақ нашар орындауды білдіреді. Синтез: Белбин «командада кім болуы керек» деген сұраққа, Aristotle «команда қалай бірге жұмыс істеуі керек» деген сұраққа жауап береді. Екеуі де қажет — команда құрамы (Белбин) әлеуетті мүмкіндік береді, команда динамикасы (Aristotle) оны жүзеге асырады.",
            hint: "One theory is about team composition, the other is about team dynamics — consider how they layer.",
            hintRu: "Одна теория о составе команды, другая о динамике — подумайте, как они сочетаются.",
            hintKk: "Бір теория команда құрамы туралы, екіншісі динамика туралы — олар қалай үйлесетінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Cross-Cultural Psychology",
        titleRu: "Кросс-культурная психология",
        titleKk: "Мәдениетаралық психология",
        content: "Cross-cultural psychology examines how culture shapes thought, emotion, and behavior. Hofstede's cultural dimensions — individualism vs. collectivism, power distance, uncertainty avoidance, masculinity vs. femininity, long-term vs. short-term orientation, and indulgence vs. restraint — provide a framework for understanding cultural differences. Central Asian cultures typically score high on collectivism and power distance, which shapes communication styles, family expectations, and workplace norms.",
        contentRu: "Кросс-культурная психология изучает, как культура формирует мышление, эмоции и поведение. Культурные измерения Хофстеде — индивидуализм vs коллективизм, дистанция власти, избегание неопределённости, маскулинность vs феминность, долгосрочная vs краткосрочная ориентация — помогают понять культурные различия. Центральноазиатские культуры обычно имеют высокий коллективизм и дистанцию власти.",
        contentKk: "Мәдениетаралық психология мәдениеттің ойлау, эмоция және мінез-құлықты қалай қалыптастыратынын зерттейді. Хофстеденің мәдени өлшемдері — индивидуализм vs коллективизм, билік қашықтығы, белгісіздікті болдырмау, ерлік vs әйелдік, ұзақ мерзімді vs қысқа мерзімді бағдар — мәдени айырмашылықтарды түсіну құрылымын ұсынады. Орталық Азия мәдениеттері әдетте коллективизм мен билік қашықтығы жоғары.",
        keyFormulas: [
          {
            formula: "Hofstede's 6 Cultural Dimensions: Individualism/Collectivism, Power Distance, Uncertainty Avoidance, Masculinity/Femininity, Long/Short-Term Orientation, Indulgence/Restraint",
            description: "Framework for comparing cultural values across societies",
            descriptionRu: "Фреймворк для сравнения культурных ценностей между обществами",
            descriptionKk: "Қоғамдар арасындағы мәдени құндылықтарды салыстыру құрылымы"
          },
          {
            formula: "Cultural Intelligence (CQ): CQ Drive + CQ Knowledge + CQ Strategy + CQ Action",
            description: "Four capabilities for effective functioning in culturally diverse settings",
            descriptionRu: "Четыре способности для эффективной работы в межкультурной среде",
            descriptionKk: "Мәдени алуан түрлі ортада тиімді жұмыс істеуге арналған төрт қабілет"
          }
        ],
        solvedExamples: [
          {
            question: "A Kazakh student studying in the US is surprised that classmates openly disagree with professors. Explain this using Hofstede's dimensions.",
            questionRu: "Казахстанский студент в США удивлён, что одноклассники открыто не соглашаются с преподавателями. Объясните через измерения Хофстеде.",
            questionKk: "АҚШ-та оқитын қазақстандық студент сыныптастарының оқытушылармен ашық келіспейтініне таңданады. Хофстеде өлшемдері арқылы түсіндіріңіз.",
            steps: [
              { en: "Identify the relevant dimension: This involves Power Distance — the degree to which less powerful members accept and expect unequal power distribution. Kazakhstan scores high on power distance (respecting authority, avoiding open disagreement with superiors).", ru: "Определите измерение: Дистанция власти — степень принятия неравного распределения власти. Казахстан имеет высокую дистанцию власти (уважение авторитета).", kk: "Өлшемді анықтаңыз: Билік қашықтығы — билік теңсіздігін қабылдау дәрежесі. Қазақстанда билік қашықтығы жоғары (беделді сыйлау)." },
              { en: "Apply the contrast: The US scores low on power distance — students see professors as approachable equals whose ideas can be challenged. In Kazakhstan, challenging a teacher publicly would be seen as disrespectful. Neither approach is wrong; they reflect different cultural values about hierarchy and authority.", ru: "Примените контраст: США имеет низкую дистанцию власти — студенты видят профессоров как равных. В Казахстане публичное несогласие с учителем — проявление неуважения. Оба подхода верны в своих культурах.", kk: "Контрастты қолданыңыз: АҚШ-та билік қашықтығы төмен — студенттер профессорларды тең деп көреді. Қазақстанда мұғалімге ашық қарсылық — құрметсіздік. Екі көзқарас та өз мәдениетінде дұрыс." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Explain the difference between individualist and collectivist cultures. Which one describes most Central Asian societies?",
            questionRu: "Объясните разницу между индивидуалистскими и коллективистскими культурами. Какая описывает Центральную Азию?",
            questionKk: "Индивидуалистік және коллективистік мәдениеттер арасындағы айырмашылықты түсіндіріңіз. Орталық Азияға қайсысы сәйкес?",
            answer: "Individualist cultures (US, Western Europe) prioritize personal goals, independence, and individual achievement. Collectivist cultures prioritize group harmony, family obligations, and shared identity. Most Central Asian societies are collectivist — family and community needs often come before individual desires, decisions involve extended family input, and social harmony is valued over personal expression.",
            answerRu: "Индивидуалистские культуры (США, Западная Европа) ставят во главу угла личные цели, независимость и индивидуальные достижения. Коллективистские культуры ставят во главу угла групповую гармонию, семейные обязательства и общую идентичность. Большинство центральноазиатских обществ коллективистские — потребности семьи и общины часто важнее личных желаний, решения принимаются с учётом мнения расширенной семьи, а социальная гармония ценится выше личного самовыражения.",
            answerKk: "Индивидуалистік мәдениеттер (АҚШ, Батыс Еуропа) жеке мақсаттарды, тәуелсіздікті және жеке жетістікті бірінші орынға қояды. Коллективистік мәдениеттер топтық үйлесімділікті, отбасылық міндеттемелерді және ортақ бірегейлікті бірінші орынға қояды. Орталық Азия қоғамдарының көпшілігі коллективистік — отбасы мен қауымдастықтың қажеттіліктері көбіне жеке қалаулардан маңызды, шешімдер кең отбасының пікірін ескере отырып қабылданады, ал әлеуметтік үйлесімділік жеке көрінуден жоғары бағаланады.",
            hint: "Think about whether 'I' or 'we' comes first in daily decisions.",
            hintRu: "Подумайте, что важнее в ежедневных решениях — «я» или «мы».",
            hintKk: "Күнделікті шешімдерде «мен» немесе «біз» алдымен келетінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A multinational team has members from Japan (high uncertainty avoidance), Brazil (high indulgence), and Germany (high masculinity). Predict one workplace conflict and propose a culturally intelligent solution.",
            questionRu: "Команда из Японии (высокое избегание неопределённости), Бразилии (высокая снисходительность) и Германии (высокая маскулинность). Предскажите конфликт и предложите решение.",
            questionKk: "Командада Жапония (белгісіздікті болдырмау жоғары), Бразилия (рұқсат ету жоғары) және Германия (ерлік жоғары) мүшелері бар. Конфликтті болжап, шешім ұсыныңыз.",
            answer: "Predicted conflict: The Japanese members want detailed planning with clear rules before starting (uncertainty avoidance), while Brazilian members prefer flexible, spontaneous approaches (indulgence favors enjoyment and freedom). German members push for aggressive deadlines and competition-based performance metrics (masculinity). Solution: Create a structured project framework with defined milestones (satisfies Japan) but allow flexibility in how tasks are completed between milestones (satisfies Brazil). Use performance metrics that balance individual achievement with team collaboration (satisfies Germany while not alienating others). Hold a team norming session where cultural preferences are openly discussed.",
            answerRu: "Предполагаемый конфликт: японские участники хотят детального планирования с чёткими правилами перед началом (избегание неопределённости), в то время как бразильские участники предпочитают гибкий, спонтанный подход (снисходительность благоприятствует удовольствию и свободе). Немецкие участники настаивают на жёстких дедлайнах и метриках эффективности, основанных на конкуренции (маскулинность). Решение: создать структурированную рамку проекта с чёткими вехами (удовлетворяет Японию), но допустить гибкость в способах выполнения задач между вехами (удовлетворяет Бразилию). Использовать метрики эффективности, балансирующие индивидуальные достижения с командным сотрудничеством (удовлетворяет Германию, не отталкивая остальных). Провести сессию по формированию командных норм, где культурные предпочтения открыто обсуждаются.",
            answerKk: "Болжамды жанжал: жапон мүшелері бастамас бұрын нақты ережелермен егжей-тегжейлі жоспарлауды қалайды (белгісіздікті болдырмау), ал бразилиялық мүшелер икемді, өздігінен туындайтын тәсілдерді қалайды (рұқсат ету рахат пен еркіндікті жақтайды). Неміс мүшелері қатаң мерзімдер мен бәсекеге негізделген өнімділік көрсеткіштерін талап етеді (ерлік). Шешім: нақты кезеңдері бар құрылымдық жоба шеңберін құру (Жапонияны қанағаттандырады), бірақ кезеңдер арасында тапсырмаларды орындау тәсілінде икемділікке жол беру (Бразилияны қанағаттандырады). Германияны қанағаттандыратын, бірақ басқаларды алшақтатпайтын жеке жетістік пен командалық ынтымақтастықты теңестіретін өнімділік көрсеткіштерін қолдану. Мәдени артықшылықтар ашық талқыланатын команда нормалау сессиясын өткізу.",
            hint: "Think about how different attitudes toward rules, fun, and competition would clash.",
            hintRu: "Подумайте, как разное отношение к правилам, отдыху и конкуренции может столкнуться.",
            hintKk: "Ережелерге, демалысқа және бәсекеге деген әртүрлі көзқарастар қалай қайшы келетінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Critics argue Hofstede's model oversimplifies cultures by treating them as monolithic. Evaluate this critique: what are two strengths and two limitations of the model? How would you supplement it?",
            questionRu: "Критики утверждают, что модель Хофстеде упрощает культуры. Оцените: два преимущества и два ограничения модели. Чем бы вы её дополнили?",
            questionKk: "Сыншылар Хофстеде моделі мәдениеттерді шамадан тыс жеңілдетеді дейді. Бағалаңыз: модельдің екі артықшылығы мен екі шектеуі. Оны немен толықтырар едіңіз?",
            answer: "Strengths: 1) Provides a common vocabulary for discussing cultural differences — dimensions like individualism/collectivism are widely understood and empirically validated across 70+ countries. 2) Practical predictive value — companies use it successfully to anticipate cross-cultural misunderstandings. Limitations: 1) Treats nations as culturally uniform — a person from urban Istanbul and rural Anatolia may differ more than Turkish vs. Greek averages suggest. 2) Based primarily on IBM employee surveys from the 1970s — cultures evolve, and a corporate sample may not represent the whole society. Supplement: Use Hofstede as a starting point, then add Cultural Intelligence (CQ) theory to account for individual variation within cultures, and GLOBE Study data for more recent and nuanced measurements.",
            answerRu: "Сильные стороны: 1) Даёт общий словарь для обсуждения культурных различий — измерения вроде индивидуализма/коллективизма широко понятны и эмпирически подтверждены в 70+ странах. 2) Практическая предсказательная ценность — компании успешно используют её для предвидения межкультурных недопониманий. Ограничения: 1) Рассматривает нации как культурно однородные — человек из городского Стамбула и сельской Анатолии может отличаться больше, чем средние показатели Турции и Греции. 2) Основана в основном на опросах сотрудников IBM 1970-х годов — культуры меняются, а корпоративная выборка может не отражать всё общество. Дополнение: использовать Хофстеде как отправную точку, затем добавить теорию Культурного интеллекта (CQ) для учёта индивидуальных различий внутри культур, а также данные исследования GLOBE для более свежих и детальных измерений.",
            answerKk: "Күшті жақтары: 1) Мәдени айырмашылықтарды талқылауға ортақ сөздік қор береді — индивидуализм/коллективизм сияқты өлшемдер 70+ елде кеңінен түсінікті және эмпирикалық расталған. 2) Практикалық болжамдық құндылық — компаниялар оны мәдениетаралық түсінбеушіліктерді болжау үшін сәтті қолданады. Шектеулер: 1) Ұлттарды мәдени біртекті деп қарастырады — қала Стамбулынан және ауыл Анатолиясынан шыққан адам түрік пен грек орташа көрсеткіштерінен көбірек ерекшеленуі мүмкін. 2) Негізінен 1970-жылдардағы IBM қызметкерлерінің сауалнамаларына негізделген — мәдениеттер өзгереді, ал корпоративтік үлгі бүкіл қоғамды білдірмеуі мүмкін. Толықтыру: Хофстедені бастапқы нүкте ретінде қолданып, мәдениет ішіндегі жеке айырмашылықтарды ескеру үшін Мәдени интеллект (CQ) теориясын және заманауи, нюансты өлшемдер үшін GLOBE зерттеу деректерін қосу.",
            hint: "Consider whether knowing a country's average score tells you everything about any individual from that country.",
            hintRu: "Подумайте, говорит ли средний балл страны всё о каждом её жителе.",
            hintKk: "Елдің орташа көрсеткіші сол елдің кез келген адамы туралы бәрін айтады ма, ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "CBT Model",
        titleRu: "Модель КПТ",
        titleKk: "КМТ моделі",
        content: "Cognitive Behavioral Therapy (CBT) is an evidence-based approach that shows how thoughts, feelings, and behaviors are interconnected. The core idea is that distorted thinking patterns (cognitive distortions) cause negative emotions and maladaptive behaviors. By identifying and challenging these distortions — such as catastrophizing, all-or-nothing thinking, and mind reading — you can change how you feel and act. The ABC model (Activating event → Belief → Consequence) provides a practical framework for this process.",
        contentRu: "Когнитивно-поведенческая терапия (КПТ) — научно обоснованный подход, показывающий взаимосвязь мыслей, чувств и поведения. Искажённые модели мышления (когнитивные искажения) вызывают негативные эмоции и неадаптивное поведение. Выявляя и оспаривая искажения — катастрофизацию, чёрно-белое мышление, чтение мыслей — можно изменить чувства и действия. Модель ABC (Активирующее событие → Убеждение → Последствие) — практический инструмент.",
        contentKk: "Когнитивті-мінез-құлықтық терапия (КМТ) — ойлар, сезімдер мен мінез-құлықтың өзара байланысын көрсететін ғылыми негізделген тәсіл. Бұрмаланған ойлау үлгілері (когнитивті бұрмалаулар) жағымсыз эмоциялар мен бейімсіз мінез-құлықты тудырады. Осы бұрмалауларды — апатизация, ақ-қара ойлау, ой оқу — анықтап, оларға қарсы шығу арқылы сезімдер мен іс-әрекеттерді өзгертуге болады. ABC моделі (Белсендіруші оқиға → Сенім → Салдар) практикалық құрал болып табылады.",
        keyFormulas: [
          {
            formula: "ABC Model: Activating Event → Belief → Consequence (Emotional/Behavioral)",
            description: "It is not events that upset us but our beliefs about them",
            descriptionRu: "Нас расстраивают не события, а наши убеждения о них",
            descriptionKk: "Бізді оқиғалар емес, олар туралы сенімдеріміз ренжітеді"
          },
          {
            formula: "Common Cognitive Distortions: Catastrophizing, All-or-Nothing Thinking, Mind Reading, Overgeneralization, Personalization",
            description: "Thinking errors that amplify negative emotions beyond what evidence supports",
            descriptionRu: "Ошибки мышления, усиливающие негативные эмоции сверх подтверждённого",
            descriptionKk: "Жағымсыз эмоцияларды дәлелдерден тыс күшейтетін ойлау қателері"
          }
        ],
        solvedExamples: [
          {
            question: "You got a B on a test and feel devastated, thinking 'I am a failure.' Use the ABC model to challenge this thought.",
            questionRu: "Вы получили B за тест и чувствуете себя ужасно, думая «Я неудачник». Используйте модель ABC для оспаривания.",
            questionKk: "Тесттен B алдыңыз және «Мен сәтсізбін» деп ойлап, қайғыланасыз. ABC моделін қолданып осы ойға қарсы шығыңыз.",
            steps: [
              { en: "Identify A, B, and C: A (Activating event) = Got a B on the test. B (Belief) = 'I am a failure' — this is all-or-nothing thinking. C (Consequence) = Feeling devastated, possibly giving up studying.", ru: "Определите A, B, C: A = Получил B за тест. B = «Я неудачник» — чёрно-белое мышление. C = Чувство ужаса, возможный отказ от учёбы.", kk: "A, B, C анықтаңыз: A = Тесттен B алу. B = «Мен сәтсізбін» — ақ-қара ойлау. C = Қайғы, оқудан бас тарту мүмкіндігі." },
              { en: "Challenge the Belief and find alternative: A B is above average — evidence does not support 'failure.' Alternative belief: 'I did not get the grade I wanted, but a B shows I understood most of the material. I can identify what I missed and improve.' New consequence: Motivated to review mistakes, not devastated.", ru: "Оспорьте убеждение: B — выше среднего. Альтернатива: «Я не получил желаемую оценку, но B показывает понимание материала. Могу улучшить.» Новое последствие: мотивация, не отчаяние.", kk: "Сенімге қарсы шығыңыз: B — орташадан жоғары. Балама: «Қалаған бағаны алмадым, бірақ B материалды түсінгенімді көрсетеді. Жақсарта аламын.» Жаңа салдар: мотивация, қайғы емес." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is catastrophizing? Give an example from a student's life.",
            questionRu: "Что такое катастрофизация? Приведите пример из жизни студента.",
            questionKk: "Апатизация дегеніміз не? Студент өмірінен мысал келтіріңіз.",
            answer: "Catastrophizing is a cognitive distortion where you assume the worst possible outcome will happen. Example: A student submits an assignment one day late and thinks 'The teacher will give me a zero, I'll fail the course, I won't get into university, my life is ruined.' In reality, the likely consequence is a small late penalty.",
            answerRu: "Катастрофизация — это когнитивное искажение, при котором вы предполагаете, что произойдёт худший возможный исход. Пример: студент сдаёт задание на день позже и думает: «Учитель поставит мне ноль, я провалю курс, не поступлю в университет, моя жизнь разрушена». В реальности вероятное последствие — небольшой штраф за опоздание.",
            answerKk: "Апатизация — ең нашар мүмкін нәтиже болады деп болжайтын когнитивті бұрмалау. Мысал: студент тапсырманы бір күн кешіктіріп тапсырады да, «Мұғалім маған нөл қояды, курстан құламын, университетке түспеймін, өмірім бітті» деп ойлайды. Шындығында, ықтимал салдар — кешіктіру үшін шағын айыппұл.",
            hint: "Think about turning a small problem into the absolute worst-case scenario in your mind.",
            hintRu: "Подумайте о превращении маленькой проблемы в наихудший сценарий в уме.",
            hintKk: "Кішкентай мәселені ойыңызда ең нашар сценарийге айналдыруды елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend says 'Nobody likes me' after not being invited to one party. Identify the cognitive distortion and use the ABC model to help them reframe.",
            questionRu: "Друг говорит «Никто меня не любит» после того, как его не пригласили на вечеринку. Определите искажение и используйте модель ABC.",
            questionKk: "Досыңыз бір кешке шақырылмағаннан кейін «Мені ешкім ұнатпайды» дейді. Бұрмалауды анықтап, ABC моделін қолданыңыз.",
            answer: "Cognitive distortion: Overgeneralization — drawing a broad conclusion ('nobody') from a single event (one party). ABC Analysis: A = Not invited to one party. B = 'Nobody likes me.' C = Sadness, withdrawal from social activities. Challenge: Ask 'Is it true that NOBODY likes you? What about your three close friends who hung out with you yesterday?' Alternative B: 'I wasn't invited to this one party, which stings, but it doesn't mean I'm universally disliked. People have limited guest lists.' New C: Mild disappointment instead of despair, continues socializing normally.",
            answerRu: "Когнитивное искажение: сверхобобщение — вывод «никто» из одного события (одна вечеринка). Анализ ABC: A = Не пригласили на одну вечеринку. B = «Меня никто не любит». C = Грусть, уход от общения. Оспаривание: спросите «Правда ли, что ВООБЩЕ никто тебя не любит? А как же три близких друга, с которыми ты вчера гулял?» Альтернатива B: «Меня не пригласили на эту вечеринку, это обидно, но не значит, что меня все не любят. У людей ограниченные списки гостей». Новое C: лёгкое разочарование вместо отчаяния, продолжает общаться как обычно.",
            answerKk: "Когнитивті бұрмалау: шамадан тыс жалпылау — бір оқиғадан («ешкім») кең қорытынды жасау. ABC талдауы: A = Бір кешке шақырылмады. B = «Мені ешкім ұнатпайды». C = Қайғы, әлеуметтік әрекеттерден бас тарту. Қарсы шығу: «Шынымен ЕШКІМ сені ұнатпайды ма? Кеше сенімен бірге болған үш жақын досың ше?» деп сұраңыз. Балама B: «Мені осы бір кешке шақырмады, бұл ренжітеді, бірақ бәрі мені ұнатпайды дегенді білдірмейді. Адамдардың қонақ тізімі шектеулі». Жаңа C: үмітсіздіктің орнына жеңіл көңілсіздік, қалыпты қарым-қатынасын жалғастырады.",
            hint: "Notice the absolute word 'nobody' — is it really true that not a single person likes them?",
            hintRu: "Обратите внимание на абсолютное слово «никто» — правда ли, что ни один человек его не любит?",
            hintKk: "«Ешкім» деген абсолютті сөзге назар аударыңыз — шынымен бір адам да ұнатпайды ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some psychologists argue that CBT focuses too much on changing thoughts and not enough on validating emotions. Evaluate this critique: when might challenging thoughts be harmful, and how could CBT be adapted?",
            questionRu: "Некоторые психологи считают, что КПТ слишком фокусируется на изменении мыслей и недостаточно валидирует эмоции. Оцените критику.",
            questionKk: "Кейбір психологтар КМТ ойларды өзгертуге шамадан тыс назар аударады және эмоцияларды жеткілікті түрде растамайды дейді. Сынды бағалаңыз.",
            answer: "Valid critique: In situations involving genuine grief, trauma, or injustice, immediately challenging thoughts can feel dismissive — telling a grieving person 'your thinking is distorted' invalidates real pain. Also, some distortions are actually accurate assessments (a person facing discrimination is not 'catastrophizing'). When challenging is harmful: 1) Acute grief — the person needs empathy first, not cognitive restructuring. 2) Systemic injustice — reframing 'I face discrimination' as a cognitive distortion gaslights the individual. Adaptation: Modern CBT integrates validation through 'third-wave' approaches like Acceptance and Commitment Therapy (ACT) — accept the emotion without judgment, then choose values-based action. This preserves CBT's evidence base while adding emotional validation. The sequence matters: validate first, then gently explore whether thinking patterns are adding unnecessary suffering on top of real pain.",
            answerRu: "Обоснованная критика: в ситуациях подлинного горя, травмы или несправедливости немедленное оспаривание мыслей может восприниматься как обесценивание — сказать скорбящему человеку «твоё мышление искажено» отрицает реальную боль. Также некоторые искажения на самом деле являются точными оценками (человек, сталкивающийся с дискриминацией, не «катастрофизирует»). Когда оспаривание вредно: 1) Острое горе — человеку сначала нужна эмпатия, а не когнитивная перестройка. 2) Системная несправедливость — переформулирование «я сталкиваюсь с дискриминацией» как когнитивного искажения газлайтит человека. Адаптация: современная КПТ интегрирует валидацию через подходы «третьей волны», такие как терапия принятия и ответственности (ACT) — принять эмоцию без осуждения, затем выбрать действие на основе ценностей. Это сохраняет доказательную базу КПТ, добавляя эмоциональную валидацию. Порядок важен: сначала валидировать, затем мягко исследовать, не добавляют ли модели мышления лишнее страдание поверх реальной боли.",
            answerKk: "Негізделген сын: шынайы қайғы, жарақат немесе әділетсіздік жағдайларында ойларға бірден қарсы шығу елемеушілік сияқты сезілуі мүмкін — қайғырушы адамға «ойлауың бұрмаланған» деу нақты ауыртпалықты жоққа шығарады. Сондай-ақ кейбір бұрмалаулар шын мәнінде дәл бағалаулар (кемсітушілікке тап болған адам «апатизациялап» жатқан жоқ). Қарсы шығу зиянды болатын кездер: 1) Ауыр қайғы — адамға алдымен эмпатия керек, когнитивті қайта құру емес. 2) Жүйелі әділетсіздік — «мен кемсітушілікке тап боламын» дегенді когнитивті бұрмалау ретінде қайта тұжырымдау адамды газдайт етеді. Бейімделу: заманауи КМТ Қабылдау және міндеттеме терапиясы (ACT) сияқты «үшінші толқын» тәсілдері арқылы растауды біріктіреді — эмоцияны сотсыз қабылдау, содан кейін құндылыққа негізделген әрекетті таңдау. Бұл КМТ-ның дәлелдік базасын сақтай отырып, эмоциялық растауды қосады. Реті маңызды: алдымен растау, содан кейін ойлау үлгілері нақты ауыртпалыққа қажетсіз азап қосып жатқанын жұмсақ зерттеу.",
            hint: "Consider situations where negative thoughts are actually accurate reflections of reality.",
            hintRu: "Рассмотрите ситуации, когда негативные мысли — точное отражение реальности.",
            hintKk: "Жағымсыз ойлар шынымен шындықтың дәл көрінісі болатын жағдайларды қарастырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Resilience",
        titleRu: "Устойчивость (Резильентность)",
        titleKk: "Төзімділік (Резильенттілік)",
        content: "Resilience is the ability to recover from adversity, adapt to change, and keep going in the face of difficulty. Research by Ann Masten shows resilience is 'ordinary magic' — it comes from everyday protective factors like supportive relationships, self-regulation skills, and a sense of purpose. The growth mindset, developed by Carol Dweck, is closely linked: believing abilities can be developed through effort makes setbacks feel temporary rather than permanent.",
        contentRu: "Устойчивость — способность восстанавливаться после невзгод, адаптироваться к изменениям и продолжать путь. Исследования Энн Мастен показывают, что устойчивость — «обычная магия», основанная на поддерживающих отношениях, саморегуляции и чувстве цели. Установка на рост Кэрол Дуэк тесно связана: вера в развитие способностей через усилие делает неудачи временными.",
        contentKk: "Төзімділік — қиындықтардан кейін қалпына келу, өзгерістерге бейімделу және жолды жалғастыру қабілеті. Энн Мастеннің зерттеулері төзімділіктің «кәдімгі сиқыр» екенін көрсетеді — ол қолдаушы қарым-қатынастар, өзін-өзі реттеу дағдылары мен мақсат сезімінен туындайды. Кэрол Дуэктің өсу ойлауы тығыз байланысты: қабілеттерді күш арқылы дамытуға сену сәтсіздіктерді уақытша етеді.",
        keyFormulas: [
          {
            formula: "Resilience = Protective Factors (Relationships + Self-Regulation + Purpose) / Risk Factors",
            description: "Resilience increases when protective factors outweigh risk factors",
            descriptionRu: "Устойчивость растёт, когда защитные факторы превышают факторы риска",
            descriptionKk: "Қорғаныш факторлары тәуекел факторларынан басым болғанда төзімділік артады"
          }
        ],
        solvedExamples: [
          {
            question: "A student fails an important exam and says 'I'll never be good at this.' Show how growth mindset and resilience concepts can help them recover.",
            questionRu: "Студент провалил важный экзамен и говорит «Я никогда не буду в этом хорош». Покажите, как установка на рост и устойчивость помогут.",
            questionKk: "Студент маңызды емтиханнан құлап, «Мен бұған ешқашан жақсы болмаймын» дейді. Өсу ойлауы мен төзімділік қалай көмектесетінін көрсетіңіз.",
            steps: [
              { en: "Identify the fixed mindset belief: 'I'll never be good at this' treats ability as permanent and unchangeable. Reframe with growth mindset: 'I haven't mastered this YET — failure is data about what to study differently, not evidence of permanent inability.'", ru: "Определите фиксированное убеждение: «Никогда не буду хорош» воспринимает способность как постоянную. Перефразируйте: «Я ещё не освоил это — неудача — данные о том, что изучать иначе».", kk: "Тұрақты ойлау сенімін анықтаңыз: «Ешқашан жақсы болмаймын» қабілетті тұрақты деп қабылдайды. Қайта құрыңыз: «Мен мұны ӘЛДЕ меңгерген жоқпын — сәтсіздік нені басқаша оқу керектігі туралы деректер»." },
              { en: "Activate protective factors: Seek support from a study partner or teacher (relationships). Create a concrete study plan targeting weak areas (self-regulation). Connect the subject to a larger goal like career aspirations (purpose). These three protective factors build resilience and transform failure into a growth opportunity.", ru: "Активируйте защитные факторы: Поддержка (партнёр/учитель), план изучения слабых мест (саморегуляция), связь предмета с целями карьеры (цель). Три фактора превращают неудачу в возможность роста.", kk: "Қорғаныш факторларын белсендіріңіз: Қолдау (серіктес/мұғалім), әлсіз жақтарды оқу жоспары (өзін-өзі реттеу), пәнді мансап мақсаттарымен байланыстыру (мақсат). Үш фактор сәтсіздікті өсу мүмкіндігіне айналдырады." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between a fixed mindset and a growth mindset? Give one example of each.",
            questionRu: "Какая разница между фиксированной и установкой на рост? Приведите по одному примеру.",
            questionKk: "Тұрақты ойлау мен өсу ойлауының айырмашылығы қандай? Әрқайсысына мысал келтіріңіз.",
            answer: "Fixed mindset believes abilities are innate and unchangeable. Example: 'I'm just not a math person.' Growth mindset believes abilities develop through effort and practice. Example: 'I'm not good at math yet, but with practice I can improve.' The key word is 'yet' — it transforms a statement of limitation into one of possibility.",
            answerRu: "Фиксированное мышление верит, что способности врождённые и неизменные. Пример: «Я просто не математик». Мышление роста верит, что способности развиваются через усилия и практику. Пример: «Я пока не силён в математике, но с практикой могу улучшиться». Ключевое слово — «пока»: оно превращает утверждение об ограничении в утверждение о возможности.",
            answerKk: "Тұрақты ойлау қабілеттер туа біткен және өзгермейді деп сенеді. Мысал: «Мен жай ғана математик емеспін». Өсу ойлауы қабілеттер күш-жігер мен жаттығу арқылы дамиды деп сенеді. Мысал: «Мен математикада әлі жақсы емеспін, бірақ жаттығумен жақсарта аламын». Негізгі сөз — «әлі»: ол шектеу туралы тұжырымды мүмкіндік туралы тұжырымға айналдырады.",
            hint: "Listen for the word 'yet' — it signals growth mindset.",
            hintRu: "Слово «ещё» — сигнал установки на рост.",
            hintKk: "«Әлі» сөзін тыңдаңыз — ол өсу ойлауының белгісі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Identify three protective factors in your own life that contribute to your resilience. For each, explain how it has helped you through a specific difficult situation.",
            questionRu: "Определите три защитных фактора в вашей жизни. Для каждого объясните, как он помог в конкретной трудной ситуации.",
            questionKk: "Өмірдегі үш қорғаныш факторды анықтаңыз. Әрқайсысы нақты қиын жағдайда қалай көмектескенін түсіндіріңіз.",
            answer: "Example response: 1) Relationships: My best friend checked on me daily when I was stressed about university applications — having someone who listens reduced my anxiety and helped me stay on track. 2) Self-regulation: I use journaling to process difficult emotions — when my parents argued, writing helped me separate their conflict from my own worth. 3) Purpose: My goal of becoming a doctor keeps me motivated through hard courses — when organic chemistry felt impossible, connecting it to my future patients helped me persist.",
            answerRu: "Пример ответа: 1) Отношения: лучший друг проверял, как я, каждый день, когда я переживал из-за поступления — наличие того, кто слушает, снизило тревогу и помогло держаться курса. 2) Саморегуляция: я веду дневник, чтобы обрабатывать сложные эмоции — когда родители ссорились, письмо помогло отделить их конфликт от моей самооценки. 3) Цель: моя цель стать врачом поддерживает мотивацию на трудных курсах — когда органическая химия казалась невозможной, связь с будущими пациентами помогла продолжать.",
            answerKk: "Мысал жауап: 1) Қарым-қатынас: университетке түсуден алаңдағанда ең жақын досым мені күн сайын тексеретін — тыңдайтын адамның болуы алаңдаушылықты азайтып, жолда қалуға көмектесті. 2) Өзін-өзі реттеу: қиын эмоцияларды өңдеу үшін күнделік жүргіземін — ата-анам дауласқанда, жазу олардың жанжалын өз құндылығымнан бөлуге көмектесті. 3) Мақсат: дәрігер болу мақсатым қиын курстарда мотивацияны сақтайды — органикалық химия мүмкін емес сияқты сезілгенде, оны болашақ пациенттеріммен байланыстыру жалғастыруға көмектесті.",
            hint: "Think about people, habits, and goals that have helped you bounce back from hard times.",
            hintRu: "Подумайте о людях, привычках и целях, которые помогли вам восстановиться.",
            hintKk: "Қиын кезеңдерден қалпына келуге көмектескен адамдар, әдеттер мен мақсаттарды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some researchers argue that the resilience narrative places too much burden on individuals and ignores systemic factors. Evaluate this critique: when does telling someone to 'be resilient' become harmful?",
            questionRu: "Некоторые исследователи утверждают, что нарратив устойчивости перекладывает ответственность на индивида. Когда призыв «будь устойчивым» становится вредным?",
            questionKk: "Кейбір зерттеушілер төзімділік нарративі жауапкершілікті адамға артады дейді. «Төзімді бол» деу қашан зиянды болады?",
            answer: "The critique has merit. 'Be resilient' becomes harmful when: 1) It replaces systemic change — telling students in underfunded schools to 'be resilient' instead of funding their education shifts responsibility from institutions to individuals. It implies the problem is their lack of resilience, not the system's lack of support. 2) It minimizes real suffering — saying 'bounce back' to someone facing poverty, discrimination, or abuse dismisses the severity of their situation. Resilience without resources is just survival, not thriving. 3) It creates shame — people who struggle despite being told to 'be resilient' may feel personally deficient rather than recognizing their situation is genuinely harder. Balanced approach: Resilience is valuable AND systemic support is necessary. Build individual skills while simultaneously advocating for structural change. True resilience programs should include both personal coping strategies and efforts to reduce the adversity itself.",
            answerRu: "Критика обоснована. «Будь устойчивым» становится вредным, когда: 1) Заменяет системные изменения — говорить ученикам недофинансируемых школ «быть устойчивыми» вместо финансирования их образования перекладывает ответственность с институтов на людей. Это подразумевает, что проблема в их недостатке устойчивости, а не в отсутствии поддержки системы. 2) Преуменьшает реальные страдания — говорить «соберись» человеку, столкнувшемуся с бедностью, дискриминацией или насилием, обесценивает серьёзность ситуации. Устойчивость без ресурсов — это просто выживание, а не процветание. 3) Создаёт стыд — люди, которые борются несмотря на призыв «быть устойчивыми», могут чувствовать личную несостоятельность вместо признания, что их ситуация действительно сложнее. Сбалансированный подход: устойчивость ценна, И системная поддержка необходима. Развивать индивидуальные навыки, одновременно выступая за структурные изменения. Настоящие программы устойчивости должны включать и личные стратегии совладания, и усилия по снижению самих трудностей.",
            answerKk: "Сынның негізі бар. «Төзімді бол» мыналарда зиянды болады: 1) Жүйелік өзгерісті ауыстырады — қаржыландырылмаған мектеп оқушыларына білімін қаржыландырудың орнына «төзімді бол» деу жауапкершілікті институттардан адамдарға ауыстырады. Бұл мәселе олардың төзімділігінің жетіспеуінде, жүйенің қолдау көрсетпеуінде емес дегенді білдіреді. 2) Нақты азапты азайтады — кедейлікке, кемсітушілікке немесе зорлыққа тап болған адамға «қалпыңа кел» деу жағдайдың ауырлығын жоққа шығарады. Ресурссыз төзімділік — жай ғана аман қалу, гүлдену емес. 3) Ұят тудырады — «төзімді бол» дегенге қарамастан күресетін адамдар жағдайының шынымен қиынырақ екенін мойындаудың орнына жеке кемшілікті сезінуі мүмкін. Теңгерімді тәсіл: төзімділік құнды ЖӘНЕ жүйелік қолдау қажет. Жеке дағдыларды дамыту, сонымен бірге құрылымдық өзгерісті жақтау. Нағыз төзімділік бағдарламалары жеке күресу стратегияларын да, қиындықтың өзін азайту күш-жігерін де қамтуы керек.",
            hint: "Consider who benefits when we tell individuals to be tougher instead of changing the system that harms them.",
            hintRu: "Подумайте, кому выгодно, когда мы говорим быть сильнее, вместо того чтобы менять систему.",
            hintKk: "Жүйені өзгертудің орнына адамдарға күштірек болуды айтқанда кімге тиімді екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Advanced Conflict Management",
        titleRu: "Продвинутое управление конфликтами",
        titleKk: "Жетілдірілген қақтығыстарды басқару",
        content: "Advanced conflict management goes beyond basic resolution to address structural and systemic conflicts. The Thomas-Kilmann Conflict Mode Instrument identifies five styles: competing, collaborating, compromising, avoiding, and accommodating — each appropriate in different contexts. Mediation and restorative justice are structured processes that transform destructive conflict into constructive dialogue by focusing on needs, impact, and repair rather than blame.",
        contentRu: "Продвинутое управление конфликтами выходит за рамки базового разрешения, затрагивая структурные и системные конфликты. Инструмент Томаса-Килманна выделяет пять стилей: соревнование, сотрудничество, компромисс, избегание и уступка. Медиация и восстановительное правосудие — структурированные процессы, превращающие деструктивный конфликт в конструктивный диалог.",
        contentKk: "Жетілдірілген қақтығыстарды басқару негізгі шешімнен асып, құрылымдық және жүйелік қақтығыстарды қамтиды. Томас-Килманн құралы бес стильді анықтайды: бәсекелесу, ынтымақтасу, ымыра, болдырмау және бейімделу. Медиация мен қалпына келтіру әділеті — деструктивті қақтығысты конструктивті диалогқа айналдыратын құрылымдық процестер.",
        keyFormulas: [
          {
            formula: "Thomas-Kilmann Model: Competing (high assertiveness, low cooperation) | Collaborating (high both) | Compromising (moderate both) | Avoiding (low both) | Accommodating (low assertiveness, high cooperation)",
            description: "Five conflict styles mapped on assertiveness and cooperativeness axes",
            descriptionRu: "Пять стилей конфликта на осях настойчивости и сотрудничества",
            descriptionKk: "Бес қақтығыс стилі белсенділік және ынтымақтастық осьтерінде"
          },
          {
            formula: "Restorative Justice: What happened → Who was affected → What needs to happen to repair harm",
            description: "A three-question framework that shifts focus from punishment to healing",
            descriptionRu: "Три вопроса, переключающие фокус с наказания на исцеление",
            descriptionKk: "Фокусты жазалаудан емделуге ауыстыратын үш сұрақ"
          }
        ],
        solvedExamples: [
          {
            question: "Two students had a fight and one damaged the other's project. The school wants to use restorative justice instead of suspension. Design the process.",
            questionRu: "Два ученика подрались, один повредил проект другого. Школа хочет использовать восстановительное правосудие. Опишите процесс.",
            questionKk: "Екі оқушы жанжалдасып, бірі екіншісінің жобасын бүлдірді. Мектеп қалпына келтіру әділетін қолданғысы келеді. Процесті сипаттаңыз.",
            steps: [
              { en: "Facilitate 'What happened' and 'Who was affected': Each student shares their version without interruption. The harmed student explains the impact — hours of work lost, feelings of anger and betrayal, grade consequences. The offending student hears the full impact of their actions.", ru: "Проведите «Что произошло» и «Кто пострадал»: Каждый рассказывает свою версию. Пострадавший объясняет последствия — потерянные часы, чувства. Обидчик слышит полное влияние своих действий.", kk: "«Не болды» және «Кім зардап шекті» өткізіңіз: Әрқайсысы өз нұсқасын айтады. Зардап шеккен салдарды түсіндіреді — жоғалған сағаттар, сезімдер. Кінәлі іс-әрекетінің толық әсерін естиді." },
              { en: "Agree on 'What needs to happen to repair harm': The offending student agrees to help rebuild the project (tangible repair), writes a genuine apology letter (relational repair), and commits to conflict resolution training (preventive action). Both students agree to a check-in meeting in two weeks. This addresses harm without creating more harm through suspension.", ru: "Согласуйте восстановление: Обидчик помогает восстановить проект (материальное), пишет искреннее извинение (отношения), проходит тренинг (профилактика). Встреча через две недели.", kk: "Қалпына келтіру туралы келісіңіз: Кінәлі жобаны қалпына келтіруге көмектеседі (материалдық), шын кешірім хат жазады (қарым-қатынас), тренинг өтеді (алдын алу). Екі аптадан кездесу." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the five Thomas-Kilmann conflict styles and give a one-sentence description of each.",
            questionRu: "Назовите пять стилей конфликта Томаса-Килманна и дайте краткое описание каждого.",
            questionKk: "Томас-Килманның бес қақтығыс стилін атаңыз және әрқайсысын бір сөйлеммен сипаттаңыз.",
            answer: "1) Competing: Pursuing your own goals at the other's expense ('My way'). 2) Collaborating: Working together to find a solution that fully satisfies both ('Our way'). 3) Compromising: Each side gives up something ('Halfway'). 4) Avoiding: Withdrawing from the conflict entirely ('No way'). 5) Accommodating: Yielding to the other's wishes ('Your way').",
            answerRu: "1) Соперничество: преследование своих целей за счёт другого («По-моему»). 2) Сотрудничество: совместный поиск решения, полностью устраивающего обе стороны («По-нашему»). 3) Компромисс: каждая сторона чем-то жертвует («Наполовину»). 4) Избегание: полный уход от конфликта («Никак»). 5) Уступчивость: уступка желаниям другой стороны («По-твоему»).",
            answerKk: "1) Бәсекелесу: басқаның есебінен өз мақсатыңды көздеу («Менің жолым»). 2) Ынтымақтасу: екі жақты да толық қанағаттандыратын шешімді бірге табу («Біздің жолымыз»). 3) Ымыра: әр тарап бірдеңеден бас тартады («Жартылай»). 4) Болдырмау: қақтығыстан толық шеттелу («Ешқандай жол»). 5) Бейімделу: басқа тараптың қалауына бағыну («Сенің жолың»).",
            hint: "Think of five different ways people react when they disagree.",
            hintRu: "Подумайте о пяти способах реагирования на разногласие.",
            hintKk: "Адамдардың келіспегенде жауап берудің бес түрлі тәсілін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "For each Thomas-Kilmann style, give one specific scenario where it would be the BEST choice. Explain why.",
            questionRu: "Для каждого стиля Томаса-Килманна приведите сценарий, где он — лучший выбор. Объясните.",
            questionKk: "Томас-Килманның әр стиліне ЕҢ жақсы таңдау болатын сценарий келтіріңіз. Түсіндіріңіз.",
            answer: "Competing: A safety emergency where you must override objections to evacuate a building — there is no time for discussion. Collaborating: A long-term business partnership where both sides need a sustainable solution — investing time in collaboration prevents future conflicts. Compromising: Scheduling a meeting when both people have partial availability — neither gets their ideal time but both can attend. Avoiding: A minor disagreement with a stranger you'll never see again — the issue is too trivial to invest energy in. Accommodating: Your teammate needs a deadline extension for a valid family emergency — the relationship is more important than the schedule.",
            answerRu: "Соперничество: экстренная ситуация с безопасностью, когда нужно проигнорировать возражения ради эвакуации здания — нет времени на обсуждение. Сотрудничество: долгосрочное деловое партнёрство, где обеим сторонам нужно устойчивое решение — время, вложенное в сотрудничество, предотвращает будущие конфликты. Компромисс: планирование встречи, когда у обоих частичная доступность — никто не получает идеального времени, но оба могут прийти. Избегание: незначительное разногласие с незнакомцем, которого больше не увидите — вопрос слишком мелкий, чтобы тратить энергию. Уступчивость: товарищу нужна отсрочка дедлайна из-за настоящей семейной чрезвычайной ситуации — отношения важнее графика.",
            answerKk: "Бәсекелесу: ғимаратты эвакуациялау үшін қарсылықтарды елемей шешім қабылдау керек қауіпсіздік төтенше жағдайы — талқылауға уақыт жоқ. Ынтымақтасу: екі тарапқа да тұрақты шешім қажет ұзақ мерзімді іскерлік серіктестік — ынтымақтастыққа жұмсалған уақыт болашақ қақтығыстардың алдын алады. Ымыра: екеуінің де уақыты жартылай бос кезде кездесу жоспарлау — ешқайсысы идеал уақытын алмайды, бірақ екеуі де қатыса алады. Болдырмау: енді ешқашан көрмейтін бейтаныс адаммен болмашы келіспеушілік — мәселе энергия жұмсауға тым болмашы. Бейімделу: серіктесіңізге шынайы отбасылық төтенше жағдай үшін мерзім ұзарту қажет — қарым-қатынас кестеден маңыздырақ.",
            hint: "Match each style to a situation where its particular trade-off makes the most sense.",
            hintRu: "Подберите для каждого стиля ситуацию, где его компромисс наиболее оправдан.",
            hintKk: "Әр стильді оның ерекше қасиеті ең мағыналы болатын жағдаймен сәйкестендіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare traditional punitive discipline (detention, suspension) with restorative justice approaches in schools. Argue for which system produces better long-term outcomes, using at least three pieces of evidence or reasoning.",
            questionRu: "Сравните традиционную наказательную дисциплину с восстановительным правосудием в школах. Аргументируйте, какая система даёт лучшие долгосрочные результаты.",
            questionKk: "Мектептердегі дәстүрлі жазалау тәртібін қалпына келтіру әділетімен салыстырыңыз. Қай жүйе ұзақ мерзімді нәтижелерді жақсы береді?",
            answer: "Restorative justice produces better long-term outcomes. Evidence: 1) Recidivism: Schools implementing restorative practices report 50-60% reductions in repeat offenses, while suspension often increases future misbehavior because students fall behind academically and feel alienated. 2) Racial equity: Punitive systems disproportionately suspend Black and minority students. Restorative justice reduces racial disparities in discipline by focusing on behavior rather than identity. 3) Skill development: Punitive discipline teaches what NOT to do but not what TO do. Restorative justice builds empathy, accountability, and conflict resolution skills that transfer to adult life. Counterargument: Some severe behaviors (weapons, drugs) may still require removal for safety. A hybrid approach uses restorative practices as the default with punitive measures reserved for genuine safety threats.",
            answerRu: "Восстановительное правосудие даёт лучшие долгосрочные результаты. Доказательства: 1) Рецидив: школы, внедряющие восстановительные практики, сообщают о снижении повторных нарушений на 50-60%, тогда как отстранение часто усиливает будущее плохое поведение, потому что ученики отстают в учёбе и чувствуют себя изолированными. 2) Расовое равенство: карательные системы непропорционально отстраняют чернокожих и учеников из меньшинств. Восстановительное правосудие снижает расовые диспропорции в дисциплине, фокусируясь на поведении, а не идентичности. 3) Развитие навыков: карательная дисциплина учит, чего НЕ делать, но не тому, что ДЕЛАТЬ. Восстановительное правосудие развивает эмпатию, ответственность и навыки разрешения конфликтов, переносимые во взрослую жизнь. Контраргумент: некоторые серьёзные проступки (оружие, наркотики) всё же могут требовать изоляции ради безопасности. Гибридный подход использует восстановительные практики по умолчанию, оставляя карательные меры для настоящих угроз безопасности.",
            answerKk: "Қалпына келтіру әділеті ұзақ мерзімді жақсырақ нәтижелер береді. Дәлелдер: 1) Қайталану: қалпына келтіру тәжірибесін енгізген мектептер қайталанатын бұзушылықтардың 50-60%-ға азайғанын хабарлайды, ал шеттету көбіне болашақ жаман мінез-құлықты арттырады, себебі оқушылар оқудан қалып, оқшауланған сезінеді. 2) Нәсілдік теңдік: жазалау жүйелері қара және азшылық оқушыларды пропорционалды емес түрде шеттетеді. Қалпына келтіру әділеті бірегейлікке емес, мінез-құлыққа назар аудару арқылы тәртіптегі нәсілдік алшақтықты азайтады. 3) Дағды дамыту: жазалау тәртібі НЕ ІСТЕУ керегін үйретеді, бірақ НЕ ІСТЕУ керегін үйретпейді. Қалпына келтіру әділеті ересек өмірге ауысатын эмпатия, жауапкершілік және қақтығысты шешу дағдыларын дамытады. Қарсы дәлел: кейбір ауыр мінез-құлықтар (қару, есірткі) қауіпсіздік үшін әлі де оқшаулауды талап етуі мүмкін. Гибридті тәсіл қалпына келтіру тәжірибесін әдепкі ретінде қолданып, жазалау шараларын нақты қауіпсіздік қатерлеріне сақтайды.",
            hint: "Consider what each system teaches students about taking responsibility for their actions.",
            hintRu: "Подумайте, чему каждая система учит об ответственности за действия.",
            hintKk: "Әр жүйе оқушыларға іс-әрекеттеріне жауапкершілік туралы не үйрететінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Psychology of Success",
        titleRu: "Психология успеха",
        titleKk: "Табыс психологиясы",
        content: "The psychology of success examines what drives achievement beyond talent. Angela Duckworth's research on grit — passion and perseverance for long-term goals — shows it predicts success better than IQ. Anders Ericsson's deliberate practice theory demonstrates that expertise requires focused, structured practice with feedback, not just repetition. Combined with Mihaly Csikszentmihalyi's concept of flow — the state of complete absorption where challenge matches skill — these frameworks explain why some people consistently outperform others.",
        contentRu: "Психология успеха изучает, что движет достижениями помимо таланта. Исследования Анджелы Дакворт о гриде (упорстве) — страсти и настойчивости для долгосрочных целей — показывают, что грид предсказывает успех лучше IQ. Теория осознанной практики Эрикссона показывает, что мастерство требует целенаправленной практики с обратной связью. Концепция потока Чиксентмихайи — полного погружения — объясняет, почему некоторые стабильно превосходят других.",
        contentKk: "Табыс психологиясы талантпен қатар жетістікті не қозғайтынын зерттейді. Анджела Дакворттың грит зерттеуі — ұзақ мерзімді мақсаттарға деген құмарлық пен табандылық — IQ-дан гөрі табысты жақсы болжайтынын көрсетеді. Эрикссонның мақсатты практика теориясы сарапшылық кері байланыспен бағытталған практиканы талап ететінін көрсетеді. Чиксентмихайидың ағын тұжырымдамасы — дағды мен сынақ сәйкес келетін толық сіңу — кейбір адамдардың неге үнемі асып түсетінін түсіндіреді.",
        keyFormulas: [
          {
            formula: "Grit = Passion (consistency of interest) × Perseverance (effort despite setbacks)",
            description: "Duckworth's formula showing success depends on sustained effort toward long-term goals",
            descriptionRu: "Формула Дакворт: успех зависит от устойчивого усилия к долгосрочным целям",
            descriptionKk: "Дакворт формуласы: табыс ұзақ мерзімді мақсаттарға тұрақты күшке байланысты"
          },
          {
            formula: "Flow State: Skill Level ≈ Challenge Level (both high) → Complete Absorption",
            description: "Flow occurs when high skill meets high challenge, producing peak performance",
            descriptionRu: "Поток возникает при соответствии высокого навыка и высокого вызова",
            descriptionKk: "Ағын жоғары дағды мен жоғары сынақ сәйкес келгенде пайда болады"
          }
        ],
        solvedExamples: [
          {
            question: "Two students study piano for 10 years each. One becomes excellent, the other remains mediocre. Using Ericsson's deliberate practice theory, explain why.",
            questionRu: "Два ученика занимаются фортепиано 10 лет. Один стал отличным, другой — посредственным. Объясните через осознанную практику Эрикссона.",
            questionKk: "Екі оқушы 10 жыл бойы фортепиано ойнайды. Бірі тамаша, екіншісі орташа. Эрикссонның мақсатты практика теориясы арқылы түсіндіріңіз.",
            steps: [
              { en: "Distinguish deliberate practice from mere repetition: The excellent student practices deliberately — targeting specific weak passages, working with a teacher who provides immediate feedback, gradually increasing difficulty, and mentally engaging with each practice session.", ru: "Различите осознанную практику от повторения: Отличный ученик целенаправленно практикуется — работает над слабыми местами, получает обратную связь от учителя, повышает сложность.", kk: "Мақсатты практиканы қайталаудан ажыратыңыз: Тамаша оқушы мақсатты түрде жаттығады — әлсіз тұстарға жұмыс жасайды, мұғалімнен кері байланыс алады, қиындықты арттырады." },
              { en: "Explain the mediocre outcome: The mediocre student puts in the same hours but repeats what they already know (comfortable pieces), practices without focused goals, and does not seek specific feedback. Time alone does not create expertise — it requires structured, effortful practice at the edge of current ability.", ru: "Объясните посредственный результат: Ученик тратит столько же часов, но повторяет знакомое, без целей и обратной связи. Время без структуры не создаёт мастерства.", kk: "Орташа нәтижені түсіндіріңіз: Оқушы сондай сағат жұмсайды, бірақ білетінін қайталайды, мақсатсыз, кері байланыссыз. Құрылымсыз уақыт шеберлік жасамайды." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is grit according to Angela Duckworth, and why might it matter more than IQ for long-term success?",
            questionRu: "Что такое грит по Дакворт и почему он может быть важнее IQ для долгосрочного успеха?",
            questionKk: "Дакворт бойынша грит дегеніміз не және ол ұзақ мерзімді табыс үшін неге IQ-дан маңыздырақ?",
            answer: "Grit is the combination of passion (sustained interest in a long-term goal) and perseverance (continued effort despite failures and setbacks). It may matter more than IQ because talent without persistence leads to unrealized potential. Many high-IQ individuals never achieve their goals because they quit when things get hard, while grittier individuals with average IQ persist through obstacles and ultimately achieve more.",
            answerRu: "Грит — это сочетание страсти (устойчивого интереса к долгосрочной цели) и настойчивости (продолжающихся усилий несмотря на неудачи). Он может быть важнее IQ, потому что талант без настойчивости приводит к нереализованному потенциалу. Многие люди с высоким IQ никогда не достигают целей, потому что сдаются, когда становится трудно, тогда как более упорные люди со средним IQ преодолевают препятствия и в итоге достигают большего.",
            answerKk: "Грит — құмарлық (ұзақ мерзімді мақсатқа тұрақты қызығушылық) пен табандылықтың (сәтсіздіктерге қарамастан жалғасатын күш-жігер) қосындысы. Ол IQ-дан маңыздырақ болуы мүмкін, себебі табандылықсыз талант жүзеге аспаған әлеуетке әкеледі. Жоғары IQ-лы көптеген адамдар мақсаттарына жетпейді, себебі қиындағанда бас тартады, ал орташа IQ-лы табандырақ адамдар кедергілерден өтіп, сайып келгенде көбірек жетістікке жетеді.",
            hint: "Think about why some talented people never reach their potential.",
            hintRu: "Подумайте, почему некоторые талантливые люди не реализуют потенциал.",
            hintKk: "Кейбір дарынды адамдар неге әлеуетіне жете алмайтынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Describe a time you experienced flow (or its absence). What conditions were present or missing? How could you create flow more often in your studies?",
            questionRu: "Опишите момент потока (или его отсутствия). Какие условия были? Как создать поток чаще в учёбе?",
            questionKk: "Ағын (немесе оның болмауы) кезінде болған уақытты сипаттаңыз. Қандай шарттар болды? Оқуда ағынды жиірек қалай жасауға болады?",
            answer: "Example: I experienced flow while coding a game — the challenge matched my skill, I had clear goals (make each level work), immediate feedback (the game either ran or crashed), and no distractions. Time seemed to disappear. I lacked flow in history class — the material was too easy (no challenge), goals were vague (just 'read the chapter'), and feedback was delayed (test in three weeks). To create flow in studies: 1) Match challenge to skill — choose slightly harder problems. 2) Set clear micro-goals — 'understand this one concept' not 'study for 2 hours.' 3) Get immediate feedback — use practice quizzes, not just reading. 4) Eliminate distractions — phone in another room.",
            answerRu: "Пример: я испытал поток, программируя игру — вызов соответствовал навыку, были чёткие цели (заставить каждый уровень работать), мгновенная обратная связь (игра либо работала, либо падала), без отвлечений. Время словно исчезло. Мне не хватало потока на истории — материал был слишком лёгким (нет вызова), цели расплывчаты («просто прочитать главу»), обратная связь отложена (тест через три недели). Чтобы создать поток в учёбе: 1) Соответствие вызова навыку — выбирать чуть более сложные задачи. 2) Чёткие микроцели — «понять это одно понятие», а не «учиться 2 часа». 3) Мгновенная обратная связь — практические тесты, а не просто чтение. 4) Устранить отвлечения — телефон в другой комнате.",
            answerKk: "Мысал: ойын бағдарламалағанда ағынды сезіндім — сынақ дағдыма сай болды, нақты мақсаттар болды (әр деңгейді жұмыс істету), лезде кері байланыс болды (ойын не жұмыс істеді, не құлады), алаңдау болмады. Уақыт жоғалғандай сезілді. Тарих сабағында ағын болмады — материал тым жеңіл болды (сынақ жоқ), мақсаттар анық емес болды («тарауды оқы» ғана), кері байланыс кешіктірілді (үш аптадан кейін тест). Оқуда ағын жасау үшін: 1) Сынақты дағдыға сәйкестендіру — сәл қиынырақ есептерді таңдау. 2) Нақты микромақсаттар қою — «2 сағат оқу» емес, «осы бір ұғымды түсіну». 3) Лезде кері байланыс алу — тек оқу емес, жаттығу тесттерін қолдану. 4) Алаңдатушыларды жою — телефонды басқа бөлмеге қою.",
            hint: "Flow requires high challenge + high skill + clear goals + immediate feedback + no distractions.",
            hintRu: "Поток требует: высокий вызов + навык + ясные цели + обратная связь + без отвлечений.",
            hintKk: "Ағын: жоғары сынақ + дағды + нақты мақсаттар + лезде кері байланыс + алаңдаусыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Critically evaluate the grit concept: is Duckworth's theory sufficient to explain success, or does it ignore structural factors like privilege, access, and systemic barriers? Build a nuanced argument.",
            questionRu: "Критически оцените концепцию грита: достаточна ли теория для объяснения успеха или она игнорирует привилегии и системные барьеры?",
            questionKk: "Грит тұжырымдамасын сыни бағалаңыз: теория табысты түсіндіруге жеткілікті ме, әлде артықшылықтар мен жүйелік кедергілерді елемей ме?",
            answer: "Grit is necessary but not sufficient for success. Duckworth's research validly shows that within a given context, grittier individuals outperform less gritty peers. However, the theory has significant blind spots: 1) Privilege gap: A student with tutors, stable housing, and no job can dedicate far more deliberate practice time than an equally gritty student working part-time to support family. Grit without opportunity has a ceiling. 2) Selection bias: Duckworth's studies (West Point, Spelling Bee) examine populations that already passed privilege filters — you need resources to reach those starting lines. 3) Systemic barriers: Discrimination, poverty, and lack of access create friction that grit alone cannot overcome — a grittier student in a school without AP courses cannot grit their way into those courses. Nuanced view: Grit is a real psychological trait that matters, AND structural factors determine the playing field on which grit operates. The most complete model of success is: Success = Grit × Opportunity × Systemic Access.",
            answerRu: "Грит необходим, но недостаточен для успеха. Исследования Дакворт обоснованно показывают, что в рамках данного контекста более упорные люди превосходят менее упорных сверстников. Однако у теории есть значительные слепые зоны: 1) Разрыв привилегий: ученик с репетиторами, стабильным жильём и без работы может посвятить гораздо больше времени осознанной практике, чем такой же упорный ученик, подрабатывающий для поддержки семьи. Грит без возможностей имеет потолок. 2) Систематическая ошибка отбора: исследования Дакворт (Вест-Пойнт, конкурс по орфографии) изучают группы, уже прошедшие фильтры привилегий — нужны ресурсы, чтобы достичь этих стартовых линий. 3) Системные барьеры: дискриминация, бедность и недостаток доступа создают трение, которое один только грит преодолеть не может — более упорный ученик в школе без AP-курсов не может «выгритить» себе путь в эти курсы. Взвешенный взгляд: грит — это реальная психологическая черта, которая имеет значение, И структурные факторы определяют игровое поле, на котором действует грит. Наиболее полная модель успеха: Успех = Грит × Возможность × Системный доступ.",
            answerKk: "Грит қажет, бірақ табыс үшін жеткіліксіз. Дакворттың зерттеуі берілген контексте табандырақ адамдар аз табанды құрдастарынан асып түсетінін негізді көрсетеді. Дегенмен теорияда елеулі соқыр аймақтар бар: 1) Артықшылық алшақтығы: репетиторы бар, тұрақты тұрғын үйі бар және жұмыс істемейтін оқушы отбасын қолдау үшін жартылай жұмыс істейтін бірдей табанды оқушыдан әлдеқайда көп мақсатты практика уақытын жұмсай алады. Мүмкіндіксіз грит шегі бар. 2) Таңдау қателігі: Дакворттың зерттеулері (Вест-Пойнт, емле байқауы) артықшылық сүзгілерінен өткен популяцияларды зерттейді — сол бастапқы сызықтарға жету үшін ресурстар қажет. 3) Жүйелік кедергілер: кемсітушілік, кедейлік және қолжетімділіктің болмауы гриттің өзі жеңе алмайтын үйкелісті тудырады — AP курстары жоқ мектептегі табандырақ оқушы сол курстарға «гриттеп» кіре алмайды. Нюансты көзқарас: грит маңызды нақты психологиялық қасиет, ЖӘНЕ құрылымдық факторлар грит жұмыс істейтін ойын алаңын анықтайды. Табыстың ең толық моделі: Табыс = Грит × Мүмкіндік × Жүйелік қолжетімділік.",
            hint: "Ask yourself: can two equally gritty people from different backgrounds achieve the same outcomes?",
            hintRu: "Спросите: могут ли два одинаково упорных человека из разных условий достичь одинаковых результатов?",
            hintKk: "Сұраңыз: әртүрлі жағдайдағы екі бірдей табанды адам бірдей нәтижеге жете ала ма?",
            xp: 20
          }
        ]
      }
    ]
  },
  "Psychology & Social Intelligence_12": {
    planetName: "Psychology & Social Intelligence",
    introduction: {
      en: "Welcome to Psychology & Social Intelligence for Grade 12! You will explore behavioral economics, nudge theory, ethical influence, psychometrics, personality theories, landmark social psychology experiments, therapeutic communication, applied psychology, and build your own EQ portfolio. These capstone topics integrate everything you have learned into professional-level psychological literacy.",
      ru: "Добро пожаловать в Психологию и социальный интеллект для 12 класса! Вы изучите поведенческую экономику, теорию подталкивания, этическое влияние, психометрику, теории личности, знаковые эксперименты социальной психологии, терапевтическую коммуникацию, прикладную психологию и создадите собственное портфолио EQ. Эти завершающие темы объединяют все знания в профессиональную психологическую грамотность."
    },
    sections: [
      {
        title: "Behavioral Economics",
        titleRu: "Поведенческая экономика",
        titleKk: "Мінез-құлықтық экономика",
        content: "Behavioral economics merges psychology and economics to explain why people make irrational financial decisions. Daniel Kahneman's prospect theory shows that losses feel roughly twice as painful as equivalent gains feel pleasurable — this loss aversion drives much of human behavior. System 1 (fast, intuitive) and System 2 (slow, deliberate) thinking explain why we rely on mental shortcuts (heuristics) that often lead to predictable errors.",
        contentRu: "Поведенческая экономика объединяет психологию и экономику для объяснения иррациональных финансовых решений. Теория перспектив Канемана показывает, что потери ощущаются примерно вдвое болезненнее эквивалентных приобретений. Система 1 (быстрая, интуитивная) и Система 2 (медленная, обдуманная) объясняют, почему мы полагаемся на эвристики, ведущие к предсказуемым ошибкам.",
        contentKk: "Мінез-құлықтық экономика психология мен экономиканы біріктіріп, адамдардың неге иррационалды қаржылық шешімдер қабылдайтынын түсіндіреді. Канеманның перспективалар теориясы шығындардың тиісті пайдадан шамамен екі есе ауырырақ сезілетінін көрсетеді. 1-жүйе (жылдам, интуитивті) мен 2-жүйе (баяу, мұқият) ойлау біздің эвристикаларға сүйенетінімізді түсіндіреді.",
        keyFormulas: [
          {
            formula: "Prospect Theory: Pain of Loss ≈ 2× Pleasure of Equivalent Gain",
            description: "People are more motivated to avoid losing $100 than to gain $100",
            descriptionRu: "Люди больше мотивированы избежать потери $100, чем получить $100",
            descriptionKk: "Адамдар $100 жоғалтпауға $100 алудан гөрі көбірек ынталанады"
          },
          {
            formula: "Dual Process: System 1 (Fast, Automatic, Emotional) vs System 2 (Slow, Deliberate, Logical)",
            description: "Two modes of thinking that explain decision-making shortcuts and errors",
            descriptionRu: "Два режима мышления, объясняющие ошибки при принятии решений",
            descriptionKk: "Шешім қабылдаудағы қателерді түсіндіретін ойлаудың екі режимі"
          }
        ],
        solvedExamples: [
          {
            question: "A store advertises 'Last 3 items!' and you buy something you did not plan to. Explain this behavior using behavioral economics concepts.",
            questionRu: "Магазин рекламирует «Осталось 3 штуки!» и вы покупаете незапланированное. Объясните через поведенческую экономику.",
            questionKk: "Дүкен «Соңғы 3 дана!» деп жарнамалайды және сіз жоспарламаған нәрсені сатып аласыз. Мінез-құлықтық экономика арқылы түсіндіріңіз.",
            steps: [
              { en: "Identify the mechanisms: Scarcity triggers loss aversion — you fear losing the opportunity more than you value the item. System 1 thinking kicks in, making a fast emotional decision ('I might miss out!') without engaging System 2 to ask 'Do I actually need this?'", ru: "Определите механизмы: Дефицит запускает страх потери — вы боитесь упустить возможность. Система 1 принимает быстрое эмоциональное решение без участия Системы 2.", kk: "Механизмдерді анықтаңыз: Тапшылық жоғалту қорқынышын іске қосады — мүмкіндікті жоғалтудан қорқасыз. 1-жүйе жылдам эмоциялық шешім қабылдайды, 2-жүйе қатыспайды." },
              { en: "Apply prospect theory: The potential loss ('missing out on the deal') feels more powerful than the gain ('saving money by not buying'). To counter this: pause, engage System 2 by asking 'Would I buy this at full price?' If no, the scarcity is manipulating your loss aversion.", ru: "Примените теорию перспектив: Потенциальная потеря («упустить сделку») ощущается сильнее, чем выигрыш. Противодействие: пауза, спросите «Купил бы я это за полную цену?»", kk: "Перспективалар теориясын қолданыңыз: Ықтимал жоғалту («мәмілені жіберіп алу») пайдадан күштірек сезіледі. Қарсы шара: кідіріс, «Толық бағамен алар ма едім?» деп сұраңыз." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is loss aversion and how does it explain why people hold onto losing investments instead of selling?",
            questionRu: "Что такое страх потерь и почему люди держат убыточные инвестиции вместо продажи?",
            questionKk: "Жоғалту қорқынышы дегеніміз не және адамдар неге шығынды инвестицияларды сатпай ұстайды?",
            answer: "Loss aversion means the pain of losing is psychologically about twice as powerful as the pleasure of gaining. People hold losing investments because selling would 'lock in' the loss, making it real and painful. As long as they hold, the loss feels theoretical. They irrationally hope it will recover, even when evidence says it won't — because realizing the loss triggers disproportionate psychological pain.",
            answerRu: "Страх потерь означает, что боль от потери психологически примерно вдвое сильнее удовольствия от приобретения. Люди держат убыточные инвестиции, потому что продажа «зафиксирует» потерю, сделав её реальной и болезненной. Пока они держат, потеря кажется теоретической. Они иррационально надеются на восстановление, даже когда доказательства говорят об обратном — потому что признание потери вызывает непропорциональную психологическую боль.",
            answerKk: "Жоғалту қорқынышы жоғалту ауыртпалығы психологиялық тұрғыдан пайда әкелу рахатынан шамамен екі есе күшті екенін білдіреді. Адамдар шығынды инвестицияларды ұстайды, себебі сату шығынды «бекітіп», нақты әрі ауыртпалықты етеді. Ұстап тұрғанша, шығын теориялық сезіледі. Олар дәлелдер керісінше көрсетсе де, қалпына келуіне иррационалды түрде үміттенеді — себебі шығынды мойындау пропорционалды емес психологиялық ауыртпалық тудырады.",
            hint: "Think about why admitting a loss feels worse than the actual money lost.",
            hintRu: "Подумайте, почему признание потери ощущается хуже, чем сама потеря денег.",
            hintKk: "Шығынды мойындау неге нақты жоғалған ақшадан жаман сезілетінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give three examples of how businesses exploit System 1 thinking to increase sales. For each, explain what System 2 question would counter it.",
            questionRu: "Приведите три примера, как бизнес эксплуатирует Систему 1. Для каждого предложите вопрос Системы 2.",
            questionKk: "Бизнестің 1-жүйе ойлауды пайдаланудың үш мысалын келтіріңіз. Әрқайсысына 2-жүйе сұрағын ұсыныңыз.",
            answer: "1) Decoy pricing: A small coffee is $3, medium $5.50, large $6. System 1 sees the large as a 'deal' compared to the medium. System 2 counter: 'Do I actually want a large, or am I just avoiding the bad-value medium?' 2) Free shipping thresholds: 'Free shipping over $50!' when your cart is $35. System 1 adds items to 'save' on shipping. System 2: 'Is spending $15 more worth saving $5 shipping?' 3) Countdown timers: 'Sale ends in 2:34:17!' creates urgency. System 1 panics about missing out. System 2: 'This sale happens every week — is this truly scarce?'",
            answerRu: "1) Ценообразование-приманка: маленький кофе $3, средний $5.50, большой $6. Система 1 видит большой как «выгоду» по сравнению со средним. Контрвопрос Системы 2: «Действительно ли я хочу большой, или просто избегаю невыгодного среднего?» 2) Пороги бесплатной доставки: «Бесплатная доставка от $50!» при корзине $35. Система 1 добавляет товары, чтобы «сэкономить» на доставке. Система 2: «Стоит ли тратить на $15 больше ради экономии $5 на доставке?» 3) Таймеры обратного отсчёта: «Акция заканчивается через 2:34:17!» создаёт срочность. Система 1 паникует. Система 2: «Эта акция бывает каждую неделю — действительно ли это дефицит?»",
            answerKk: "1) Жем баға: кіші кофе $3, орта $5.50, үлкен $6. 1-жүйе үлкенді ортамен салыстырғанда «тиімді» деп көреді. 2-жүйе қарсы сұрағы: «Мен шынымен үлкенді қалаймын ба, әлде тиімсіз ортадан қашып жатырмын ба?» 2) Тегін жеткізу шегі: себет $35 болғанда «$50-ден жоғары тегін жеткізу!». 1-жүйе жеткізуден «үнемдеу» үшін тауар қосады. 2-жүйе: «$5 жеткізуді үнемдеу үшін $15 артық жұмсау тұрарлық па?» 3) Кері санақ таймерлері: «Акция 2:34:17-де аяқталады!» шұғылдық жасайды. 1-жүйе жіберіп алудан үрейленеді. 2-жүйе: «Бұл акция апта сайын болады — бұл шынымен тапшылық па?»",
            hint: "Look for situations where you make fast purchasing decisions without thinking carefully.",
            hintRu: "Ищите ситуации, где вы быстро покупаете, не обдумывая.",
            hintKk: "Мұқият ойланбай жылдам сатып алу шешімін қабылдайтын жағдайларды іздеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Kahneman argues humans are fundamentally irrational decision-makers. Classical economists argue humans are rational. Evaluate both positions and propose a synthesis. Which model better predicts real-world behavior?",
            questionRu: "Канеман утверждает, что люди иррациональны. Классические экономисты — что рациональны. Оцените обе позиции и предложите синтез.",
            questionKk: "Канеман адамдардың иррационалды шешім қабылдайтынын айтады. Классикалық экономистер рационалды дейді. Екі позицияны бағалап, синтез ұсыныңыз.",
            answer: "Classical economics (Homo Economicus) assumes people maximize utility with perfect information — this model is elegant and mathematically tractable but empirically weak. It fails to explain bubbles, panic selling, brand loyalty to inferior products, and gambling. Kahneman's behavioral model shows systematic biases (anchoring, framing, loss aversion) that violate rational choice theory — this better predicts real behavior but risks portraying humans as helplessly irrational. Synthesis: Herbert Simon's 'bounded rationality' — humans are rational WITHIN constraints of limited information, cognitive capacity, and time. We use heuristics not because we're irrational but because they're efficient for most decisions. Behavioral economics better predicts individual choices; classical economics better models aggregate market behavior over long periods. The best model: people are 'predictably irrational' (Ariely) — their biases are systematic and therefore can be modeled.",
            answerRu: "Классическая экономика (Homo Economicus) предполагает, что люди максимизируют полезность при полной информации — модель изящна и математически удобна, но эмпирически слаба. Она не объясняет пузыри, паническую распродажу, лояльность к худшим брендам и азартные игры. Поведенческая модель Канемана показывает систематические искажения (якорение, фрейминг, страх потерь), нарушающие теорию рационального выбора — она лучше предсказывает реальное поведение, но рискует представлять людей беспомощно иррациональными. Синтез: «ограниченная рациональность» Герберта Саймона — люди рациональны В ПРЕДЕЛАХ ограничений информации, когнитивных возможностей и времени. Мы используем эвристики не потому что иррациональны, а потому что они эффективны для большинства решений. Поведенческая экономика лучше предсказывает индивидуальные выборы; классическая — лучше моделирует совокупное рыночное поведение на долгих периодах. Лучшая модель: люди «предсказуемо иррациональны» (Ариэли) — их искажения систематичны и потому их можно моделировать.",
            answerKk: "Классикалық экономика (Homo Economicus) адамдар толық ақпаратпен пайдалылықты барынша арттырады деп болжайды — модель әдемі және математикалық тұрғыдан ыңғайлы, бірақ эмпирикалық тұрғыдан әлсіз. Ол көпіршіктерді, дүрбелең сатуды, нашар брендтерге адалдықты және құмар ойындарды түсіндірмейді. Канеманның мінез-құлықтық моделі рационалды таңдау теориясын бұзатын жүйелі бұрмалауларды (якорлеу, фреймдеу, жоғалту қорқынышы) көрсетеді — бұл нақты мінез-құлықты жақсырақ болжайды, бірақ адамдарды дәрменсіз иррационалды етіп көрсету қаупі бар. Синтез: Герберт Саймонның «шектелген рационалдылығы» — адамдар шектеулі ақпарат, когнитивтік мүмкіндік және уақыт шектеулерінде рационалды. Біз эвристикаларды иррационалды болғандықтан емес, олар көптеген шешімдер үшін тиімді болғандықтан қолданамыз. Мінез-құлықтық экономика жеке таңдауларды жақсырақ болжайды; классикалық экономика ұзақ мерзімде жиынтық нарық мінез-құлқын жақсырақ модельдейді. Ең жақсы модель: адамдар «болжамды иррационалды» (Ариели) — олардың бұрмалаулары жүйелі, сондықтан модельдеуге болады.",
            hint: "Neither extreme is fully correct — look for a middle position that acknowledges both rational goals and cognitive limitations.",
            hintRu: "Ни одна крайность не полностью верна — ищите позицию, учитывающую рациональные цели и когнитивные ограничения.",
            hintKk: "Ешбір шеткі позиция толық дұрыс емес — рационалды мақсаттар мен когнитивті шектеулерді ескеретін орта позицияны іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Nudge Theory",
        titleRu: "Теория подталкивания",
        titleKk: "Нұқу теориясы",
        content: "Nudge theory, developed by Richard Thaler and Cass Sunstein, proposes that small changes in how choices are presented (choice architecture) can significantly influence decisions without restricting freedom. Default options, framing, and social norms are powerful nudges. For example, making organ donation opt-out rather than opt-in dramatically increases donation rates. Libertarian paternalism — guiding people toward better choices while preserving their freedom to choose otherwise — is the ethical foundation of nudge theory.",
        contentRu: "Теория подталкивания Талера и Санстейна предлагает, что небольшие изменения в представлении выбора (архитектура выбора) значительно влияют на решения без ограничения свободы. Опции по умолчанию, фрейминг и социальные нормы — мощные подталкивания. Либертарианский патернализм — направление к лучшим решениям при сохранении свободы выбора — этическая основа теории.",
        contentKk: "Талер мен Санстейннің нұқу теориясы таңдаудың ұсыну тәсіліндегі (таңдау архитектурасы) шағын өзгерістер шешімдерге еркіндікті шектемей айтарлықтай әсер ететінін ұсынады. Әдепкі опциялар, фреймдеу және әлеуметтік нормалар — күшті нұқулар. Либертариандық патернализм — таңдау еркіндігін сақтай отырып, жақсы шешімдерге бағыттау — теорияның этикалық негізі.",
        keyFormulas: [
          {
            formula: "Choice Architecture: Default Option + Framing + Social Norms → Predictable Behavior Change",
            description: "How the presentation of choices shapes decisions without force or bans",
            descriptionRu: "Как представление выбора формирует решения без принуждения",
            descriptionKk: "Таңдаудың ұсынылу тәсілі шешімдерді мәжбүрлеусіз қалай қалыптастырады"
          }
        ],
        solvedExamples: [
          {
            question: "A school cafeteria wants students to eat healthier without banning junk food. Design three nudges using choice architecture.",
            questionRu: "Школьная столовая хочет, чтобы ученики ели здоровее, не запрещая фастфуд. Разработайте три подталкивания.",
            questionKk: "Мектеп асханасы тез тамақты тыймай оқушыларды сауатты тамақтандырғысы келеді. Үш нұқуды жобалаңыз.",
            steps: [
              { en: "Apply default option and placement: Place fruits and vegetables at the beginning of the line and at eye level (default visibility). Put less healthy options further back. Research shows items placed first are chosen 25% more often.", ru: "Размещение по умолчанию: Поставьте фрукты и овощи в начале линии на уровне глаз. Менее здоровые — дальше. Исследования показывают +25% выбора первых продуктов.", kk: "Әдепкі орналастыру: Жемістер мен көкөністерді қатардың басына көз деңгейіне қойыңыз. Аз пайдалыларды алысқа. Зерттеулер бірінші өнімдерді 25% жиі таңдайтынын көрсетеді." },
              { en: "Add social norms and framing: Display a sign saying 'Most students at this school choose a fruit with lunch' (social proof nudge). Frame the salad bar as 'Power Fuel Station' rather than 'Diet Options' (positive framing). These nudges guide behavior while students remain completely free to choose chips and soda.", ru: "Социальные нормы и фрейминг: Повесьте табличку «Большинство учеников выбирают фрукт на обед». Назовите салат-бар «Станция энергии», а не «Диетическое». Подталкивание без ограничения свободы.", kk: "Әлеуметтік нормалар мен фреймдеу: «Мектептегі оқушылардың көпшілігі түскі асқа жеміс таңдайды» деген белгі ілініз. Салат барын «Диеталық» емес, «Энергия станциясы» деп атаңыз. Еркіндікті шектемей нұқу." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a 'default option' nudge? Give one example of how it changes behavior.",
            questionRu: "Что такое подталкивание «опцией по умолчанию»? Приведите пример изменения поведения.",
            questionKk: "«Әдепкі опция» нұқуы дегеніміз не? Мінез-құлықты қалай өзгертетініне мысал келтіріңіз.",
            answer: "A default option nudge is when the pre-selected choice is the one the designer wants people to pick — people tend to stick with whatever is already selected because changing requires effort. Example: When a new app sets privacy settings to 'maximum protection' by default, most users keep it, even though they could change to lower protection. If the default were 'minimum protection,' most would also keep that. The default shapes behavior without forcing anyone.",
            answerRu: "Подталкивание опцией по умолчанию — когда заранее выбранный вариант является тем, который дизайнер хочет, чтобы люди выбрали — люди склонны придерживаться того, что уже выбрано, потому что изменение требует усилий. Пример: когда новое приложение устанавливает настройки конфиденциальности на «максимальную защиту» по умолчанию, большинство пользователей оставляют это, хотя могли бы снизить защиту. Если бы по умолчанию была «минимальная защита», большинство тоже оставили бы её. Значение по умолчанию формирует поведение, никого не принуждая.",
            answerKk: "Әдепкі опция нұқуы — алдын ала таңдалған нұсқа дизайнердің адамдар таңдағанын қалайтын нұсқасы болғанда — адамдар өзгерту күш салуды талап ететіндіктен бұрыннан таңдалғанды сақтауға бейім. Мысал: жаңа қолданба құпиялылық параметрлерін әдепкі бойынша «максималды қорғаныс» деп қойғанда, көптеген пайдаланушылар оны сақтайды, тіпті төмен қорғанысқа өзгерте алса да. Әдепкі «минималды қорғаныс» болса, көпшілігі соны да сақтар еді. Әдепкі параметр ешкімді мәжбүрлемей мінез-құлықты қалыптастырады.",
            hint: "Think about what happens when a form already has a box checked for you.",
            hintRu: "Подумайте, что происходит, когда в форме уже стоит галочка.",
            hintKk: "Пішінде сіз үшін құсбелгі қойылып тұрғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design two nudges to help students at your school study more effectively. Explain the choice architecture principle behind each.",
            questionRu: "Разработайте два подталкивания для более эффективной учёбы. Объясните принцип архитектуры выбора для каждого.",
            questionKk: "Мектеп оқушыларының тиімдірек оқуына көмектесетін екі нұқу жобалаңыз. Әрқайсысының архитектура принципін түсіндіріңіз.",
            answer: "Nudge 1 — Social Norms Display: Post a weekly board showing '78% of students who visited the library this week reported feeling more prepared for exams.' Principle: Social proof — people conform to perceived majority behavior. Seeing that most peers use the library normalizes and encourages library use. Nudge 2 — Default Study Schedule: When students register for courses, auto-generate a recommended study schedule in their calendar app (2 hours per course per week). Principle: Default option — students can delete or modify it, but having a pre-set schedule means many will follow it simply because it exists. Changing it requires effort; keeping it is effortless.",
            answerRu: "Нудж 1 — Табло социальных норм: еженедельно вывешивать «78% учеников, посетивших библиотеку на этой неделе, сообщили, что чувствуют себя более готовыми к экзаменам». Принцип: социальное доказательство — люди соответствуют воспринимаемому поведению большинства. Видя, что большинство сверстников пользуется библиотекой, это нормализует и поощряет её использование. Нудж 2 — Расписание учёбы по умолчанию: при записи на курсы автоматически создавать рекомендуемое расписание учёбы в календаре (2 часа на курс в неделю). Принцип: опция по умолчанию — ученики могут удалить или изменить его, но наличие предустановленного расписания означает, что многие будут следовать ему просто потому, что оно существует. Изменение требует усилий; сохранение — нет.",
            answerKk: "1-нұқу — Әлеуметтік нормалар тақтасы: апта сайын «Осы аптада кітапханаға барған оқушылардың 78%-ы емтиханға дайынырақ сезінгенін хабарлады» деген тақта ілу. Принцип: әлеуметтік дәлел — адамдар қабылданған көпшілік мінез-құлқына сай келеді. Көптеген құрдастардың кітапхананы қолданатынын көру оны қалыпты етіп, пайдалануды ынталандырады. 2-нұқу — Әдепкі оқу кестесі: оқушылар курстарға тіркелгенде, күнтізбе қолданбасында ұсынылатын оқу кестесін автоматты жасау (пәнге аптасына 2 сағат). Принцип: әдепкі опция — оқушылар оны жоюға немесе өзгертуге болады, бірақ алдын ала орнатылған кесте болуы көптеген оқушылардың оны жай ғана бар болғандықтан ұстанатынын білдіреді. Өзгерту күш салуды талап етеді; сақтау күш салмайды.",
            hint: "Think about what small environmental changes would make studying the 'easy' choice.",
            hintRu: "Подумайте, какие маленькие изменения среды сделают учёбу «лёгким» выбором.",
            hintKk: "Оқуды «оңай» таңдау жасайтын кішкентай орта өзгерістерін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Critics argue that nudging is manipulative because it exploits cognitive biases rather than correcting them. Defenders say it preserves freedom of choice. Evaluate both sides and determine: when does a nudge cross the ethical line into manipulation?",
            questionRu: "Критики утверждают, что подталкивание манипулятивно, так как эксплуатирует когнитивные искажения. Защитники говорят, что сохраняет свободу выбора. Когда подталкивание переходит этическую линию?",
            questionKk: "Сыншылар нұқу когнитивті бұрмалауларды пайдаланатындықтан манипуляция деп санайды. Қорғаушылар таңдау еркіндігін сақтайды дейді. Нұқу қашан этикалық шекараны бұзады?",
            answer: "For nudging: 1) People ALWAYS face some choice architecture — there is no 'neutral' presentation, so deliberately designing it for good outcomes is responsible, not manipulative. 2) Freedom is preserved — unlike mandates, people can always choose differently. 3) Nudges correct biases that hurt people (low retirement savings, poor health choices). Against nudging: 1) It exploits the same biases it claims to correct — rather than teaching critical thinking, it works around it. 2) 'Good outcomes' are defined by the architect, not the individual — who decides what is 'better'? 3) Transparency problem — most nudges work precisely because people don't notice them. The ethical line: A nudge becomes manipulation when: (a) it is not transparent — people cannot discover the nudge if they look for it; (b) it serves the architect's interests, not the individual's; (c) reversing the choice is made deliberately difficult; (d) it exploits vulnerable populations who cannot engage System 2. Ethical nudges are transparent, serve the nudged person's stated interests, and are easy to override.",
            answerRu: "За подталкивание: 1) Люди ВСЕГДА сталкиваются с какой-то архитектурой выбора — «нейтрального» представления не существует, поэтому намеренное проектирование для хороших результатов ответственно, а не манипулятивно. 2) Свобода сохраняется — в отличие от предписаний, люди всегда могут выбрать иначе. 3) Наджи исправляют искажения, вредящие людям (низкие пенсионные накопления, плохой выбор здоровья). Против подталкивания: 1) Оно эксплуатирует те же искажения, которые якобы исправляет — вместо обучения критическому мышлению, оно их обходит. 2) «Хорошие результаты» определяет архитектор, а не человек — кто решает, что «лучше»? 3) Проблема прозрачности — большинство наджей работают именно потому, что их не замечают. Этическая граница: надж становится манипуляцией, когда: (a) он непрозрачен — люди не могут обнаружить надж, даже ища его; (b) он служит интересам архитектора, а не человека; (c) отмена выбора намеренно затруднена; (d) он эксплуатирует уязвимые группы, неспособные задействовать Систему 2. Этичные наджи прозрачны, служат заявленным интересам подталкиваемого человека и легко отменяются.",
            answerKk: "Нұқуды жақтайтын: 1) Адамдар ӘРҚАШАН қандай да бір таңдау архитектурасына тап болады — «бейтарап» ұсыныс жоқ, сондықтан жақсы нәтижелер үшін оны әдейі жобалау жауапкершілікті, манипуляциялық емес. 2) Еркіндік сақталады — міндеттемелерден айырмашылығы, адамдар әрқашан басқаша таңдай алады. 3) Наджалар адамдарға зиян тигізетін бұрмалауларды түзетеді (төмен зейнетақы жинағы, нашар денсаулық таңдауы). Нұқуға қарсы: 1) Ол түзейтін дейтін сол бұрмалауларды пайдаланады — сыни ойлауды үйретудің орнына, оны айналып өтеді. 2) «Жақсы нәтижелерді» адам емес, архитектор анықтайды — кім «жақсырақты» шешеді? 3) Ашықтық мәселесі — көптеген наджалар дәл байқалмайтындықтан жұмыс істейді. Этикалық шекара: надж мына жағдайларда манипуляцияға айналады: (a) ашық емес — адамдар іздесе де наджды таба алмайды; (b) ол адамның емес, архитектордың мүддесіне қызмет етеді; (c) таңдауды кері қайтару әдейі қиындатылған; (d) ол 2-жүйені қоса алмайтын осал топтарды пайдаланады. Этикалық наджалар ашық, нұқылатын адамның мәлімделген мүдделеріне қызмет етеді және оңай болдырмауға болады.",
            hint: "The key ethical question is: who benefits from the nudge — the person being nudged or the person doing the nudging?",
            hintRu: "Ключевой этический вопрос: кому выгодно подталкивание — подталкиваемому или подталкивающему?",
            hintKk: "Басты этикалық сұрақ: нұқудан кім пайда көреді — нұқылатын адам ба, әлде нұқитын адам ба?",
            xp: 20
          }
        ]
      },
      {
        title: "Dark Psychology Awareness",
        titleRu: "Осведомлённость о тёмной психологии",
        titleKk: "Қараңғы психология туралы хабардарлық",
        content: "Dark psychology refers to the study of manipulation, coercion, and exploitation tactics used to control others. The Dark Triad — narcissism, Machiavellianism, and psychopathy — describes personality traits associated with manipulative behavior. Understanding these patterns is not about using them but about recognizing when they are being used against you. Gaslighting, love bombing, triangulation, and emotional blackmail are common manipulation tactics that exploit psychological vulnerabilities.",
        contentRu: "Тёмная психология изучает тактики манипуляции, принуждения и эксплуатации. Тёмная триада — нарциссизм, макиавеллизм и психопатия — описывает черты, связанные с манипулятивным поведением. Понимание этих паттернов нужно не для использования, а для распознавания. Газлайтинг, лав-бомбинг, триангуляция и эмоциональный шантаж — распространённые тактики манипуляции.",
        contentKk: "Қараңғы психология басқаларды басқаруға арналған манипуляция, мәжбүрлеу және пайдалану тактикаларын зерттейді. Қараңғы триада — нарциссизм, макиавеллизм және психопатия — манипуляциялық мінез-құлыққа байланысты тұлға қасиеттерін сипаттайды. Бұл үлгілерді түсіну оларды қолдану үшін емес, сізге қарсы қолданылғанда тану үшін. Газлайтинг, лав-бомбинг, триангуляция және эмоциялық шантаж — жиі кездесетін манипуляция тактикалары.",
        keyFormulas: [
          {
            formula: "Dark Triad: Narcissism (grandiosity + need for admiration) + Machiavellianism (strategic manipulation) + Psychopathy (low empathy + impulsivity)",
            description: "Three personality traits associated with exploitative interpersonal behavior",
            descriptionRu: "Три черты личности, связанные с эксплуатативным межличностным поведением",
            descriptionKk: "Пайдаланушы тұлғааралық мінез-құлыққа байланысты үш тұлға қасиеті"
          }
        ],
        solvedExamples: [
          {
            question: "A friend consistently tells you events happened differently from how you remember them, making you doubt your own memory. Identify the tactic and explain how to respond.",
            questionRu: "Друг постоянно говорит, что события были не такими, как вы помните. Определите тактику и объясните, как реагировать.",
            questionKk: "Дос оқиғалардың сіз есіңізде қалғаннан өзгеше болғанын үнемі айтады. Тактиканы анықтап, қалай жауап беру керектігін түсіндіріңіз.",
            steps: [
              { en: "Identify the tactic: This is gaslighting — a manipulation technique where someone makes you question your own reality, memory, or perception. The goal is to make you dependent on their version of events, increasing their control over you.", ru: "Определите тактику: Это газлайтинг — манипуляция, заставляющая сомневаться в своей реальности. Цель — сделать вас зависимым от их версии событий.", kk: "Тактиканы анықтаңыз: Бұл газлайтинг — сізді өз шындығыңызға күмәндандыратын манипуляция. Мақсат — сізді олардың оқиғалар нұсқасына тәуелді ету." },
              { en: "Respond with evidence and boundaries: Start documenting events in writing (journal, text messages) to create objective records. When they contradict your memory, calmly say 'I remember it differently and I trust my memory.' If the pattern persists, recognize this as a toxic dynamic and seek support from other trusted people who can validate your experience.", ru: "Ответьте доказательствами и границами: Документируйте события письменно. Спокойно говорите «Я помню иначе и доверяю своей памяти». Если паттерн сохраняется — это токсичная динамика.", kk: "Дәлелдермен және шекаралармен жауап беріңіз: Оқиғаларды жазбаша құжаттаңыз. Сабырмен «Мен басқаша есімде және есіме сенемін» деңіз. Үлгі жалғасса — бұл улы динамика." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three components of the Dark Triad? Briefly describe each.",
            questionRu: "Каковы три компонента Тёмной триады? Кратко опишите каждый.",
            questionKk: "Қараңғы триаданың үш компоненті қандай? Әрқайсысын қысқаша сипаттаңыз.",
            answer: "1) Narcissism: An inflated sense of self-importance, a deep need for excessive admiration, and a lack of empathy for others. 2) Machiavellianism: A strategic, calculating approach to social interactions focused on personal gain through manipulation and deception. 3) Psychopathy: Characterized by persistent antisocial behavior, low empathy, impulsivity, and superficial charm used to exploit others.",
            answerRu: "1) Нарциссизм: раздутое чувство собственной значимости, глубокая потребность в чрезмерном восхищении и недостаток эмпатии к другим. 2) Макиавеллизм: стратегический, расчётливый подход к социальным взаимодействиям, сосредоточенный на личной выгоде через манипуляцию и обман. 3) Психопатия: характеризуется устойчивым антисоциальным поведением, низкой эмпатией, импульсивностью и поверхностным обаянием, используемым для эксплуатации других.",
            answerKk: "1) Нарциссизм: өзін-өзі шамадан тыс маңызды сезіну, шектен тыс сүйсінуге терең қажеттілік және басқаларға эмпатияның болмауы. 2) Макиавеллизм: манипуляция мен алдау арқылы жеке пайдаға бағытталған әлеуметтік өзара әрекеттесуге стратегиялық, есептейтін көзқарас. 3) Психопатия: тұрақты әлеуметке қарсы мінез-құлық, төмен эмпатия, импульсивтілік және басқаларды пайдалану үшін қолданылатын үстірт сүйкімділікпен сипатталады.",
            hint: "Each trait describes a different way of exploiting other people.",
            hintRu: "Каждая черта описывает разный способ эксплуатации других людей.",
            hintKk: "Әр қасиет басқа адамдарды пайдаланудың әртүрлі тәсілін сипаттайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Describe the tactics of love bombing and triangulation. For each, explain one warning sign and one protective strategy.",
            questionRu: "Опишите тактики лав-бомбинга и триангуляции. Для каждой — один тревожный сигнал и одна стратегия защиты.",
            questionKk: "Лав-бомбинг және триангуляция тактикаларын сипаттаңыз. Әрқайсысына бір ескерту белгісі мен бір қорғаныс стратегиясын түсіндіріңіз.",
            answer: "Love bombing: Overwhelming someone with excessive affection, gifts, and attention early in a relationship to create dependency. Warning sign: The intensity feels disproportionate to how long you've known the person — they declare deep love after one week, text 50 times a day, or demand all your time. Protection: Set and enforce boundaries early; genuine affection respects your pace. Triangulation: Introducing a third person (real or imagined) into a relationship to create jealousy, insecurity, or competition. Warning sign: They frequently mention how attractive or interested other people are in them, or compare you unfavorably to others. Protection: Refuse to compete — calmly state 'I'm not interested in competing for your attention' and observe whether they stop or escalate.",
            answerRu: "Лав-бомбинг: подавление человека избыточной привязанностью, подарками и вниманием в начале отношений для создания зависимости. Тревожный сигнал: интенсивность непропорциональна тому, как долго вы знаете человека — он объявляет о глубокой любви через неделю, пишет 50 раз в день или требует всего вашего времени. Защита: устанавливайте и отстаивайте границы рано; настоящая привязанность уважает ваш темп. Триангуляция: введение третьего лица (реального или воображаемого) в отношения для создания ревности, неуверенности или соперничества. Тревожный сигнал: он часто упоминает, насколько привлекателен или заинтересован в нём кто-то другой, или сравнивает вас с другими не в вашу пользу. Защита: откажитесь соревноваться — спокойно скажите «Я не заинтересован соревноваться за твоё внимание» и наблюдайте, остановится он или усилит давление.",
            answerKk: "Лав-бомбинг: тәуелділік жасау үшін қарым-қатынастың басында адамды шамадан тыс сүйіспеншілікпен, сыйлықтармен және назармен басу. Ескерту белгісі: қарқындылық адамды қанша уақыт білетініңізге сай емес — ол бір аптадан кейін терең махаббат жариялайды, күніне 50 рет жазады немесе бүкіл уақытыңызды талап етеді. Қорғаныс: шекараларды ерте орнатып, сақтаңыз; нағыз сүйіспеншілік сіздің қарқыныңызды сыйлайды. Триангуляция: қызғаныш, сенімсіздік немесе бәсекелестік тудыру үшін қарым-қатынасқа үшінші адамды (нақты немесе қиялдағы) енгізу. Ескерту белгісі: ол басқа адамдардың оған қаншалықты тартымды немесе қызығушылық танытатынын жиі айтады немесе сізді басқалармен қолайсыз салыстырады. Қорғаныс: бәсекелесуден бас тартыңыз — сабырмен «Мен сенің назарың үшін бәсекелесуге қызықпаймын» деп айтыңыз және ол тоқтай ма, әлде күшейте ме, бақылаңыз.",
            hint: "Both tactics create emotional dependency — look for the control mechanism behind the 'nice' behavior.",
            hintRu: "Обе тактики создают эмоциональную зависимость — ищите механизм контроля за «хорошим» поведением.",
            hintKk: "Екі тактика да эмоциялық тәуелділік жасайды — «жақсы» мінез-құлықтың артындағы бақылау механизмін іздеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some argue that teaching Dark Psychology creates more manipulators. Others say awareness is the best defense. Evaluate both positions and argue why this knowledge should or should not be part of a psychology curriculum.",
            questionRu: "Некоторые утверждают, что обучение тёмной психологии создаёт манипуляторов. Другие — что осведомлённость — лучшая защита. Должно ли это быть в учебной программе?",
            questionKk: "Кейбіреулер қараңғы психологияны оқыту манипуляторлар жасайды дейді. Басқалары хабардарлық — ең жақсы қорғаныс дейді. Бұл білім оқу бағдарламасында болуы керек пе?",
            answer: "For inclusion: 1) Manipulation exists whether we teach about it or not — manipulators learn from experience, not textbooks. Teaching awareness levels the playing field for potential victims. 2) Recognizing gaslighting, love bombing, and emotional blackmail reduces domestic violence, fraud, and psychological abuse — these are public health issues. 3) Medical students study diseases not to spread them but to cure them; similarly, psychology students should study manipulation to recognize and counter it. Against inclusion: 1) Some students may misuse the knowledge — learning specific tactics could serve as a 'how-to guide.' 2) Labeling normal personality traits as 'dark' may increase stigma against people with narcissistic or antisocial traits who are not manipulative. Position: The knowledge SHOULD be included but with explicit ethical framing — teach recognition and defense, not deployment. Include case studies of harm caused, discuss the legal and moral consequences of manipulation, and focus on building protective skills rather than offensive ones.",
            answerRu: "За включение: 1) Манипуляция существует независимо от того, учим мы о ней или нет — манипуляторы учатся на опыте, а не по учебникам. Обучение осведомлённости уравнивает шансы потенциальных жертв. 2) Распознавание газлайтинга, лав-бомбинга и эмоционального шантажа снижает домашнее насилие, мошенничество и психологическое насилие — это вопросы общественного здоровья. 3) Студенты-медики изучают болезни не чтобы их распространять, а чтобы лечить; так же студенты-психологи должны изучать манипуляцию, чтобы распознавать и противостоять ей. Против включения: 1) Некоторые ученики могут злоупотребить знанием — изучение конкретных тактик может стать «руководством к действию». 2) Обозначение нормальных черт личности как «тёмных» может усилить стигму против людей с нарциссическими или антисоциальными чертами, которые не манипулятивны. Позиция: знание СЛЕДУЕТ включить, но с явной этической рамкой — учить распознаванию и защите, а не применению. Включить кейсы причинённого вреда, обсудить юридические и моральные последствия манипуляции и сосредоточиться на защитных, а не наступательных навыках.",
            answerKk: "Қосуды жақтайтын: 1) Манипуляция біз үйретсек те, үйретпесек те бар — манипуляторлар оқулықтан емес, тәжірибеден үйренеді. Хабардарлықты үйрету әлеуетті құрбандар үшін жағдайды теңестіреді. 2) Газлайтинг, лав-бомбинг және эмоциялық шантажды тануды үйрету отбасылық зорлық, алаяқтық және психологиялық зорлықты азайтады — бұл қоғамдық денсаулық мәселелері. 3) Медицина студенттері ауруларды тарату үшін емес, емдеу үшін оқиды; сол сияқты психология студенттері манипуляцияны тану және оған қарсы тұру үшін оқуы керек. Қосуға қарсы: 1) Кейбір оқушылар білімді теріс пайдалануы мүмкін — нақты тактикаларды үйрену «қалай жасау керек» нұсқаулығына айналуы мүмкін. 2) Қалыпты тұлға қасиеттерін «қараңғы» деп белгілеу манипуляциялық емес нарциссистік немесе әлеуметке қарсы қасиеттері бар адамдарға қарсы стигманы арттыруы мүмкін. Позиция: білім НАҚТЫ этикалық шеңбермен қосылуы КЕРЕК — қолдануды емес, тануды және қорғауды үйрету. Келтірілген зиян жағдайларын қосу, манипуляцияның заңды және моральдық салдарын талқылау және шабуыл дағдыларының орнына қорғаныс дағдыларын дамытуға назар аудару.",
            hint: "Think about whether ignorance or knowledge is a better defense against exploitation.",
            hintRu: "Подумайте, что лучше защищает от эксплуатации — неведение или знание.",
            hintKk: "Пайдаланудан қайсысы жақсы қорғайтынын ойлаңыз — білмеу ме, әлде білім бе.",
            xp: 20
          }
        ]
      },
      {
        title: "Ethical Influence",
        titleRu: "Этичное влияние",
        titleKk: "Этикалық ықпал",
        content: "Ethical influence uses persuasion to benefit all parties while respecting autonomy and truth. Unlike manipulation, ethical influence is transparent about intent, relies on accurate information, and serves the other person's genuine interests. The ETHICS framework — Empathy, Transparency, Honesty, Informed consent, Consequences considered, and Serve the other — provides a checklist for ensuring influence remains ethical. Servant leadership, which prioritizes others' growth and well-being, exemplifies ethical influence in practice.",
        contentRu: "Этичное влияние использует убеждение на благо всех сторон, уважая автономию и правду. В отличие от манипуляции, этичное влияние прозрачно, основано на точной информации и служит интересам другого. Фреймворк ETHICS — Эмпатия, Прозрачность, Честность, Информированное согласие, Учёт последствий, Служение другому — обеспечивает проверку этичности влияния.",
        contentKk: "Этикалық ықпал автономия мен шындықты сыйлай отырып, барлық тараптарға пайда әкелу үшін сендіруді қолданады. Манипуляциядан айырмашылығы, этикалық ықпал ниет туралы ашық, дәл ақпаратқа сүйенеді және екінші адамның шынайы мүдделеріне қызмет етеді. ETHICS құрылымы — Эмпатия, Ашықтық, Адалдық, Ақпараттандырылған келісім, Салдарды ескеру, Басқаға қызмет ету — этикалық тексеру парағын ұсынады.",
        keyFormulas: [
          {
            formula: "ETHICS Framework: Empathy + Transparency + Honesty + Informed consent + Consequences considered + Serve the other",
            description: "Six-point checklist distinguishing ethical persuasion from manipulation",
            descriptionRu: "Шесть критериев, отличающих этичное убеждение от манипуляции",
            descriptionKk: "Этикалық сендіруді манипуляциядан ажыратудың алты критерийі"
          }
        ],
        solvedExamples: [
          {
            question: "A student council president wants to convince the school to adopt a recycling program. Apply the ETHICS framework to design an ethical persuasion strategy.",
            questionRu: "Президент студсовета хочет убедить школу принять программу переработки. Примените фреймворк ETHICS для этичной стратегии.",
            questionKk: "Студенттік кеңес президенті мектепті қайта өңдеу бағдарламасын қабылдауға сендіргісі келеді. Этикалық стратегия жасау үшін ETHICS құрылымын қолданыңыз.",
            steps: [
              { en: "Apply E, T, H: Empathy — understand the administration's concerns (cost, logistics, effort). Transparency — openly state your goal and why you care. Honesty — present accurate data about costs and benefits, including challenges, not just positives.", ru: "Примените E, T, H: Эмпатия — поймите опасения администрации. Прозрачность — открыто заявите цель. Честность — представьте точные данные, включая сложности.", kk: "E, T, H қолданыңыз: Эмпатия — әкімшіліктің алаңдаушылығын түсініңіз. Ашықтық — мақсатыңызды ашық айтыңыз. Адалдық — қиындықтарды қоса, дәл деректерді ұсыныңыз." },
              { en: "Apply I, C, S: Informed consent — let decision-makers review all information before committing. Consequences — acknowledge the recycling program will require budget reallocation and volunteer time. Serve the other — frame the proposal around the school's interest (environmental reputation, student engagement) not just your personal passion.", ru: "Примените I, C, S: Информированное согласие — дайте время на изучение информации. Последствия — признайте необходимость бюджетных изменений. Служение — аргументируйте интересами школы, а не своей страстью.", kk: "I, C, S қолданыңыз: Ақпараттандырылған келісім — шешім қабылдаушыларға ақпаратты зерттеу уақытын беріңіз. Салдар — бюджет өзгерістерін мойындаңыз. Қызмет ету — мектеп мүддесіне (беделі, оқушы тартылуы) сілтеңіз." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the key difference between ethical influence and manipulation? Give one example of each.",
            questionRu: "Какова ключевая разница между этичным влиянием и манипуляцией? Приведите примеры.",
            questionKk: "Этикалық ықпал мен манипуляция арасындағы негізгі айырмашылық қандай? Мысалдар келтіріңіз.",
            answer: "The key difference is transparency and whose interests are served. Ethical influence: A doctor explains the risks and benefits of a treatment honestly, recommends a course of action, but lets the patient decide — transparent, truthful, serves the patient. Manipulation: A salesperson hides product defects, creates false urgency, and uses emotional pressure to close a sale — deceptive, self-serving, exploits the buyer's emotions.",
            answerRu: "Ключевое различие — прозрачность и то, чьим интересам служит влияние. Этичное влияние: врач честно объясняет риски и преимущества лечения, рекомендует курс действий, но оставляет решение за пациентом — прозрачно, правдиво, служит пациенту. Манипуляция: продавец скрывает дефекты товара, создаёт ложную срочность и использует эмоциональное давление для закрытия продажи — обманчиво, эгоистично, эксплуатирует эмоции покупателя.",
            answerKk: "Негізгі айырмашылық — ашықтық және кімнің мүддесіне қызмет ететіні. Этикалық ықпал: дәрігер емдеудің қауіптері мен пайдасын шынайы түсіндіреді, әрекет бағытын ұсынады, бірақ шешімді пациентке қалдырады — ашық, шынайы, пациентке қызмет етеді. Манипуляция: сатушы өнім кемшіліктерін жасырып, жалған шұғылдық жасайды және сатуды жабу үшін эмоциялық қысым қолданады — алдамшы, өзімшіл, сатып алушының эмоцияларын пайдаланады.",
            hint: "Ask: is the influencer being honest, and who benefits most?",
            hintRu: "Спросите: честен ли влияющий и кто получает наибольшую выгоду?",
            hintKk: "Сұраңыз: ықпал етуші шынайы ма және кім көбірек пайда көреді?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Take one of Cialdini's six influence principles and show how the same principle can be used both ethically and unethically. Use the ETHICS framework to explain the difference.",
            questionRu: "Возьмите один принцип Чалдини и покажите его этичное и неэтичное использование через фреймворк ETHICS.",
            questionKk: "Чалдинидің бір ықпал принципін алып, оны этикалық және этикаға жатпайтын қолдануды ETHICS құрылымы арқылы көрсетіңіз.",
            answer: "Principle: Social Proof. Ethical use: A health campaign shows '80% of students in your dorm wash hands regularly' to encourage hygiene. ETHICS check: Empathy (addresses health concern), Transparent (openly displayed), Honest (statistic is real), Informed (people see the message clearly), Consequences (better health for all), Serves others (reduces disease spread). Unethical use: A company displays '5,000 five-star reviews' when most are fake paid reviews. ETHICS violation: Dishonest (fabricated evidence), not transparent (hidden payment), serves only the company, exploits trust. The principle itself is neutral — ethics depend on truthfulness of the evidence and whose interest it serves.",
            answerRu: "Принцип: Социальное доказательство. Этичное использование: кампания здоровья показывает «80% студентов в вашем общежитии регулярно моют руки» для поощрения гигиены. Проверка ETHICS: Эмпатия (решает проблему здоровья), Прозрачность (открыто показано), Честность (статистика реальна), Информированность (люди ясно видят сообщение), Последствия (лучшее здоровье для всех), Служение другим (снижает распространение болезни). Неэтичное использование: компания показывает «5000 пятизвёздочных отзывов», хотя большинство — фальшивые оплаченные отзывы. Нарушение ETHICS: нечестно (сфабрикованные доказательства), непрозрачно (скрытая оплата), служит только компании, эксплуатирует доверие. Сам принцип нейтрален — этика зависит от правдивости доказательств и того, чьим интересам они служат.",
            answerKk: "Принцип: Әлеуметтік дәлел. Этикалық қолдану: денсаулық науқаны гигиенаны ынталандыру үшін «жатақханаңыздағы оқушылардың 80%-ы тұрақты қол жуады» деп көрсетеді. ETHICS тексеруі: Эмпатия (денсаулық мәселесін шешеді), Ашықтық (ашық көрсетілген), Адалдық (статистика нақты), Ақпараттандырылған (адамдар хабарды анық көреді), Салдар (барлығына жақсырақ денсаулық), Басқаларға қызмет ету (аурудың таралуын азайтады). Этикаға жатпайтын қолдану: компания «5000 бес жұлдызды пікір» көрсетеді, ал көбісі жалған ақылы пікірлер. ETHICS бұзылуы: адал емес (жасанды дәлел), ашық емес (жасырын төлем), тек компанияға қызмет етеді, сенімді пайдаланады. Принциптің өзі бейтарап — этика дәлелдің шынайылығына және кімнің мүддесіне қызмет ететініне байланысты.",
            hint: "The same psychological mechanism can be deployed with real data (ethical) or fake data (unethical).",
            hintRu: "Один механизм можно использовать с реальными данными (этично) или поддельными (неэтично).",
            hintKk: "Бір механизмді нақты деректермен (этикалық) немесе жалған деректермен (этикаға жатпайтын) қолдануға болады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Is 'libertarian paternalism' (the philosophical basis of nudge theory) a contradiction? Can you truly preserve freedom while steering people's choices? Build a philosophical argument for and against, and state your own position.",
            questionRu: "«Либертарианский патернализм» — это противоречие? Можно ли сохранять свободу, направляя выбор? Постройте аргументы за и против.",
            questionKk: "«Либертариандық патернализм» қарама-қайшылық па? Таңдауды бағыттай отырып, еркіндікті сақтай аласыз ба? Жақтаушы және қарсы аргументтер құрыңыз.",
            answer: "For (not contradictory): Every choice environment has a default architecture — putting healthy food first or junk food first both 'steer' behavior. Since neutral design is impossible, choosing the design that benefits people is responsible, not paternalistic. Freedom is preserved because the person can always choose differently — it just takes slightly more effort. This is different from bans or mandates. Against (contradictory): If freedom means the ability to choose without external influence, then deliberately engineering the choice environment IS limiting freedom — just subtly. The 'you can always choose otherwise' argument ignores that nudges work precisely because most people DON'T override them. True libertarianism would require informing people of the nudge and letting them opt in. My position: Libertarian paternalism is not a contradiction but it requires strict ethical guardrails. It is ethical when: nudges are disclosed, they align with the person's own stated values, opting out is genuinely easy, and the nudger does not financially benefit. It becomes paternalism without the libertarian part when nudges are hidden, serve the architect's interests, or exploit vulnerable populations.",
            answerRu: "За (не противоречие): у каждой среды выбора есть архитектура по умолчанию — размещение здоровой еды первой или нездоровой первой оба «направляют» поведение. Поскольку нейтральный дизайн невозможен, выбор дизайна на пользу людям — ответственность, а не патернализм. Свобода сохраняется, потому что человек всегда может выбрать иначе — просто это требует чуть больше усилий. Это отличается от запретов или предписаний. Против (противоречие): если свобода означает способность выбирать без внешнего влияния, то намеренное проектирование среды выбора ЯВЛЯЕТСЯ ограничением свободы — просто тонким. Аргумент «вы всегда можете выбрать иначе» игнорирует, что наджи работают именно потому, что большинство людей их НЕ отменяют. Настоящий либертарианизм требовал бы информирования людей о надже и добровольного согласия. Моя позиция: либертарианский патернализм — не противоречие, но требует строгих этических ограждений. Он этичен, когда: наджи раскрыты, соответствуют собственным заявленным ценностям человека, отказ действительно прост, и подталкивающий не получает финансовой выгоды. Он становится патернализмом без либертарианской части, когда наджи скрыты, служат интересам архитектора или эксплуатируют уязвимые группы.",
            answerKk: "Жақтаушы (қайшылық емес): әр таңдау ортасының әдепкі архитектурасы бар — сау тағамды бірінші немесе зиянды тағамды бірінші қою екеуі де мінез-құлықты «бағыттайды». Бейтарап дизайн мүмкін емес болғандықтан, адамдарға пайдалы дизайнды таңдау жауапкершілік, патернализм емес. Еркіндік сақталады, себебі адам әрқашан басқаша таңдай алады — тек сәл көбірек күш салуды талап етеді. Бұл тыйым немесе міндеттемелерден өзгеше. Қарсы (қайшылық): егер еркіндік сыртқы әсерсіз таңдау қабілетін білдірсе, онда таңдау ортасын әдейі жобалау еркіндікті ШЕКТЕЙДІ — тек нәзік түрде. «Сіз әрқашан басқаша таңдай аласыз» дәлелі наджалардың дәл көпшілік адамдар оларды болдырмайтындықтан жұмыс істейтінін елемейді. Нағыз либертариандық адамдарға надж туралы хабарлауды және өз еркімен қосылуды талап етер еді. Менің позициям: либертариандық патернализм қайшылық емес, бірақ қатаң этикалық шектеулерді талап етеді. Ол мына жағдайда этикалық: наджалар ашылған, адамның мәлімделген құндылықтарына сай келеді, бас тарту шынымен оңай, және нұқушы қаржылық пайда таппайды. Наджалар жасырын болғанда, архитектордың мүддесіне қызмет еткенде немесе осал топтарды пайдаланғанда ол либертариандық бөліксіз патернализмге айналады.",
            hint: "Consider whether 'freedom to choose' is meaningful when the choice architecture is deliberately designed to guide you.",
            hintRu: "Подумайте, значима ли «свобода выбора», когда архитектура выбора намеренно направляет вас.",
            hintKk: "Таңдау архитектурасы сізді бағыттауға арнайы жасалған кезде «таңдау еркіндігі» мағыналы ма, ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Psychometrics",
        titleRu: "Психометрика",
        titleKk: "Психометрика",
        content: "Psychometrics is the science of measuring psychological attributes — intelligence, personality, aptitude, and mental health. A good psychometric test must have reliability (consistent results over time and across conditions) and validity (actually measuring what it claims to measure). The most widely used tests include IQ tests (Wechsler, Stanford-Binet), personality inventories (Big Five/OCEAN, MBTI), and clinical assessments (Beck Depression Inventory, PHQ-9).",
        contentRu: "Психометрика — наука об измерении психологических свойств: интеллекта, личности, способностей и психического здоровья. Хороший тест должен обладать надёжностью (стабильные результаты) и валидностью (измеряет то, что заявлено). Наиболее используемые тесты: IQ (Векслер, Стэнфорд-Бине), личностные опросники (Большая пятёрка/OCEAN, MBTI) и клинические шкалы (шкала депрессии Бека, PHQ-9).",
        contentKk: "Психометрика — интеллект, тұлға, қабілет және психикалық денсаулық сияқты психологиялық қасиеттерді өлшеу ғылымы. Жақсы психометрикалық тест сенімділікке (уақыт бойынша тұрақты нәтижелер) және валидтілікке (шынымен өлшейтінін өлшеу) ие болуы керек. Ең кең қолданылатын тесттер: IQ тесттері (Векслер, Стэнфорд-Бине), тұлға сауалнамалары (Үлкен бестік/OCEAN, MBTI) және клиникалық бағалаулар (Бек депрессия шкаласы, PHQ-9).",
        keyFormulas: [
          {
            formula: "Test Quality: Reliability (consistency) + Validity (accuracy) = Trustworthy Measurement",
            description: "Both reliability and validity are required — a test can be reliable but not valid",
            descriptionRu: "Нужны оба: тест может быть надёжным, но невалидным",
            descriptionKk: "Екеуі де қажет: тест сенімді, бірақ валидті емес болуы мүмкін"
          },
          {
            formula: "Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
            description: "Five broad personality dimensions supported by cross-cultural research",
            descriptionRu: "Пять широких измерений личности, подтверждённых кросс-культурными исследованиями",
            descriptionKk: "Мәдениетаралық зерттеулермен расталған бес кең тұлға өлшемі"
          }
        ],
        solvedExamples: [
          {
            question: "A company uses an online 'personality test' with 10 yes/no questions to hire employees. Evaluate this test's likely reliability and validity.",
            questionRu: "Компания использует онлайн-тест из 10 вопросов да/нет для найма. Оцените надёжность и валидность этого теста.",
            questionKk: "Компания жалдау үшін 10 иә/жоқ сұрақтан тұратын онлайн тест қолданады. Тесттің сенімділігі мен валидтілігін бағалаңыз.",
            steps: [
              { en: "Evaluate reliability: 10 questions is too few for stable measurement — personality is complex and cannot be captured with binary responses. Test-retest reliability would likely be low because answers to such brief questions can change with mood. The test is probably NOT reliable.", ru: "Оцените надёжность: 10 вопросов слишком мало для стабильного измерения. Ретестовая надёжность будет низкой. Тест вероятно НЕ надёжен.", kk: "Сенімділікті бағалаңыз: 10 сұрақ тұрақты өлшем үшін тым аз. Қайта тестілеу сенімділігі төмен болады. Тест сенімді ЕМЕС." },
              { en: "Evaluate validity: Yes/no format cannot capture personality nuance (vs. Likert scales in validated tests like Big Five). The test likely has no published validation studies. Even if the test gives consistent results (reliable), it probably does not measure the personality traits relevant to job performance (not valid). Recommendation: Use validated instruments like the Big Five Inventory or structured behavioral interviews instead.", ru: "Оцените валидность: Формат да/нет не улавливает нюансы. У теста нет опубликованных исследований валидности. Рекомендация: используйте валидированные инструменты.", kk: "Валидтілікті бағалаңыз: Иә/жоқ форматы нюанстарды ұстамайды. Тесттің валидтілік зерттеулері жоқ. Ұсыныс: валидтелген құралдарды қолданыңыз." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Explain the difference between reliability and validity using a simple analogy.",
            questionRu: "Объясните разницу между надёжностью и валидностью с помощью аналогии.",
            questionKk: "Сенімділік пен валидтілік арасындағы айырмашылықты қарапайым ұқсастықпен түсіндіріңіз.",
            answer: "Analogy: A bathroom scale. Reliability = The scale shows the same weight every time you step on it (consistent). Validity = The weight it shows is your ACTUAL weight (accurate). A scale could be reliable but not valid — it consistently shows 5 pounds too heavy every time. It could also be valid on average but not reliable — it fluctuates randomly around your true weight. The ideal test is both: consistent AND accurate.",
            answerRu: "Аналогия: напольные весы. Надёжность = весы показывают один и тот же вес каждый раз, когда вы встаёте (стабильно). Валидность = показанный вес — это ваш РЕАЛЬНЫЙ вес (точно). Весы могут быть надёжными, но не валидными — они стабильно показывают на 5 кг больше каждый раз. Они также могут быть валидными в среднем, но не надёжными — случайно колеблются вокруг истинного веса. Идеальный тест — оба: стабильный И точный.",
            answerKk: "Ұқсастық: ванна таразысы. Сенімділік = таразы әр тұрған сайын бірдей салмақ көрсетеді (тұрақты). Валидтілік = көрсетілген салмақ сіздің НАҚТЫ салмағыңыз (дәл). Таразы сенімді, бірақ валидті болмауы мүмкін — ол әр жолы тұрақты түрде 5 кг артық көрсетеді. Ол сондай-ақ орта есеппен валидті, бірақ сенімсіз болуы мүмкін — нақты салмақ айналасында кездейсоқ ауытқиды. Идеал тест екеуі де: тұрақты ЖӘНЕ дәл.",
            hint: "Think about a measuring tool that gives the same wrong answer every time.",
            hintRu: "Подумайте об инструменте, который стабильно даёт неправильный ответ.",
            hintKk: "Әр кезде бірдей қате жауап беретін өлшеу құралын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Compare the Big Five (OCEAN) personality model with the MBTI. Which has stronger scientific support and why?",
            questionRu: "Сравните модель Большой пятёрки (OCEAN) с MBTI. У какой сильнее научная поддержка и почему?",
            questionKk: "Үлкен бестік (OCEAN) тұлға моделін MBTI-мен салыстырыңыз. Қайсысының ғылыми қолдауы күштірек және неге?",
            answer: "The Big Five has significantly stronger scientific support. Reasons: 1) Reliability: Big Five uses continuous scales (you score somewhere on a spectrum), while MBTI forces binary categories (Introvert OR Extravert). About 50% of people get a different MBTI type when retested, making it unreliable. 2) Validity: Big Five dimensions predict job performance, academic success, and mental health outcomes. MBTI has weak predictive validity for real-world outcomes. 3) Cross-cultural validation: Big Five structure has been replicated across 50+ cultures. MBTI's four dimensions have not been consistently found in factor analyses. 4) Scientific consensus: Big Five is the standard in research psychology; MBTI is primarily used in corporate settings and pop psychology despite its weak psychometric properties.",
            answerRu: "Большая пятёрка имеет значительно более сильную научную поддержку. Причины: 1) Надёжность: Большая пятёрка использует непрерывные шкалы (баллы где-то на спектре), тогда как MBTI навязывает бинарные категории (Интроверт ИЛИ Экстраверт). Около 50% людей получают другой тип MBTI при повторном тесте, что делает его ненадёжным. 2) Валидность: измерения Большой пятёрки предсказывают рабочую эффективность, академический успех и психическое здоровье. У MBTI слабая предсказательная валидность для реальных результатов. 3) Кросс-культурная проверка: структура Большой пятёрки воспроизведена в 50+ культурах. Четыре измерения MBTI не подтверждались стабильно в факторном анализе. 4) Научный консенсус: Большая пятёрка — стандарт в исследовательской психологии; MBTI в основном используется в корпоративной среде и поп-психологии, несмотря на слабые психометрические свойства.",
            answerKk: "Үлкен бестіктің ғылыми қолдауы едәуір күштірек. Себептері: 1) Сенімділік: Үлкен бестік үздіксіз шкалаларды қолданады (спектрдің бір жерінде балл аласыз), ал MBTI бинарлы санаттарды мәжбүрлейді (Интроверт НЕМЕСЕ Экстраверт). Адамдардың шамамен 50%-ы қайта тестіленгенде басқа MBTI түрін алады, бұл оны сенімсіз етеді. 2) Валидтілік: Үлкен бестік өлшемдері жұмыс өнімділігін, академиялық табысты және психикалық денсаулық нәтижелерін болжайды. MBTI-дің нақты әлемдегі нәтижелерге болжамдық валидтілігі әлсіз. 3) Мәдениетаралық растау: Үлкен бестік құрылымы 50+ мәдениетте қайталанды. MBTI-дің төрт өлшемі факторлық талдауда тұрақты табылмады. 4) Ғылыми келісім: Үлкен бестік зерттеу психологиясының стандарты; MBTI негізінен әлсіз психометрикалық қасиеттеріне қарамастан корпоративтік ортада және поп-психологияда қолданылады.",
            hint: "Consider test-retest reliability and whether continuous traits or forced categories better represent personality.",
            hintRu: "Рассмотрите ретестовую надёжность и что лучше представляет личность — спектр или категории.",
            hintKk: "Қайта тестілеу сенімділігін және тұлғаны спектр немесе санаттардың қайсысы жақсы көрсететінін қарастырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "IQ tests have been criticized as culturally biased, measuring Western-educated intelligence rather than universal cognitive ability. Evaluate this critique with evidence and propose how intelligence testing could be made more equitable.",
            questionRu: "IQ-тесты критикуют за культурную предвзятость. Оцените критику с доказательствами и предложите, как сделать тестирование справедливее.",
            questionKk: "IQ тесттерін мәдени біржақтылықпен сынайды. Сынды дәлелдермен бағалап, тестілеуді әділірек етуді ұсыныңыз.",
            answer: "Evidence for cultural bias: 1) Language-dependent items favor native speakers — vocabulary and verbal reasoning sections disadvantage multilingual test-takers. 2) Content reflects Western cultural knowledge — questions about Western cultural references (specific animals, objects, or scenarios) may be unfamiliar in other cultures. 3) Testing environment: The format itself (timed, individual, paper-based) reflects Western educational norms; cultures that emphasize collaborative problem-solving are disadvantaged. Evidence against (IQ tests are useful): 1) Some subtests (pattern recognition, spatial reasoning) are less culturally loaded. 2) IQ scores do predict academic and job performance cross-culturally, suggesting they measure something real. 3) Culture-fair tests (Raven's Progressive Matrices) attempt to reduce bias. Making testing more equitable: 1) Use culture-fair tests as primary measures. 2) Supplement with dynamic assessment — measure learning potential (how quickly someone improves with instruction) rather than static knowledge. 3) Assess multiple intelligences (Gardner) including musical, kinesthetic, and interpersonal, not just logical-verbal. 4) Norm tests on local populations rather than using Western norms as universal standards.",
            answerRu: "Доказательства культурной предвзятости: 1) Языкозависимые задания благоприятствуют носителям языка — разделы словарного запаса и вербального мышления ставят в невыгодное положение многоязычных тестируемых. 2) Содержание отражает западные культурные знания — вопросы о западных культурных отсылках могут быть незнакомы в других культурах. 3) Среда тестирования: сам формат (на время, индивидуально, на бумаге) отражает западные образовательные нормы; культуры, ценящие совместное решение проблем, находятся в невыгодном положении. Доказательства против (IQ-тесты полезны): 1) Некоторые субтесты (распознавание паттернов, пространственное мышление) менее культурно нагружены. 2) Баллы IQ действительно предсказывают академическую и рабочую эффективность кросс-культурно, предполагая измерение чего-то реального. 3) Культурно нейтральные тесты (прогрессивные матрицы Равена) пытаются снизить предвзятость. Сделать тестирование справедливее: 1) Использовать культурно нейтральные тесты как основные измерения. 2) Дополнить динамической оценкой — измерять потенциал обучения, а не статичные знания. 3) Оценивать множественный интеллект (Гарднер), включая музыкальный, кинестетический и межличностный, а не только логико-вербальный. 4) Нормировать тесты на местных популяциях, а не использовать западные нормы как универсальные стандарты.",
            answerKk: "Мәдени біржақтылық дәлелдері: 1) Тілге тәуелді тапсырмалар ана тілінде сөйлейтіндерге тиімді — сөздік қор мен вербалды пайымдау бөлімдері көптілді тестіленушілерге тиімсіз. 2) Мазмұн батыс мәдени білімін көрсетеді — батыс мәдени сілтемелері туралы сұрақтар басқа мәдениеттерде таныс болмауы мүмкін. 3) Тестілеу ортасы: форматтың өзі (уақыты шектелген, жеке, қағазда) батыс білім беру нормаларын көрсетеді; бірлескен мәселе шешуді бағалайтын мәдениеттер тиімсіз жағдайда. Қарсы дәлелдер (IQ тесттері пайдалы): 1) Кейбір субтесттер (үлгіні тану, кеңістіктік пайымдау) мәдени тұрғыдан аз жүктелген. 2) IQ баллдары мәдениетаралық түрде академиялық және жұмыс өнімділігін болжайды, бұл нақты бірдеңені өлшейтінін білдіреді. 3) Мәдениетке әділ тесттер (Равен прогрессивті матрицалары) біржақтылықты азайтуға тырысады. Тестілеуді әділірек ету: 1) Мәдениетке әділ тесттерді негізгі өлшем ретінде қолдану. 2) Статикалық білімнің орнына оқу әлеуетін өлшейтін динамикалық бағалаумен толықтыру. 3) Тек логикалық-вербалды емес, музыкалық, кинестетикалық және тұлғааралық интеллектті қоса көптеген интеллектті (Гарднер) бағалау. 4) Тесттерді батыс нормаларын әмбебап стандарт ретінде қолданудың орнына жергілікті популяцияларда нормалау.",
            hint: "Consider whether the test measures cognitive ability or familiarity with a specific culture's way of thinking.",
            hintRu: "Подумайте, измеряет ли тест когнитивные способности или знакомство с определённой культурой мышления.",
            hintKk: "Тест когнитивті қабілетті немесе белгілі бір мәдениеттің ойлау тәсілімен таныстықты өлшейтінін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Personality Theories",
        titleRu: "Теории личности",
        titleKk: "Тұлға теориялары",
        content: "Personality theories attempt to explain the consistent patterns of thinking, feeling, and behaving that make each person unique. Freud's psychodynamic theory proposed that unconscious drives (id, ego, superego) shape behavior. Humanistic theories by Maslow and Rogers emphasized self-actualization and personal growth. Trait theories (Allport, Cattell, Big Five) focus on measurable dimensions. Social-cognitive theory (Bandura) emphasizes the interaction between person, behavior, and environment through reciprocal determinism.",
        contentRu: "Теории личности объясняют устойчивые паттерны мышления, чувств и поведения. Психодинамическая теория Фрейда предложила, что бессознательные влечения (Ид, Эго, Суперэго) формируют поведение. Гуманистические теории Маслоу и Роджерса акцентировали самоактуализацию. Теории черт (Олпорт, Кеттелл, Большая пятёрка) фокусируются на измеримых параметрах. Социально-когнитивная теория Бандуры подчёркивает реципрокный детерминизм.",
        contentKk: "Тұлға теориялары әр адамды ерекше ететін ойлау, сезу және мінез-құлықтың тұрақты үлгілерін түсіндіруге тырысады. Фрейдтің психодинамикалық теориясы бейсаналық ұмтылыстар (ид, эго, суперэго) мінез-құлықты қалыптастыратынын ұсынды. Маслоу мен Роджерстің гуманистік теориялары өзін-өзі жүзеге асыруды атап өтті. Қасиет теориялары (Олпорт, Кеттелл, Үлкен бестік) өлшенетін параметрлерге назар аударады. Бандураның әлеуметтік-когнитивті теориясы өзара детерминизмді баса көрсетеді.",
        keyFormulas: [
          {
            formula: "Reciprocal Determinism (Bandura): Person ↔ Behavior ↔ Environment (all three continuously influence each other)",
            description: "Personality is shaped by the ongoing interaction of internal traits, actions, and context",
            descriptionRu: "Личность формируется взаимодействием внутренних черт, действий и контекста",
            descriptionKk: "Тұлға ішкі қасиеттер, іс-әрекеттер және контексттің өзара әрекеті арқылы қалыптасады"
          },
          {
            formula: "Freud's Structure: Id (pleasure principle) + Ego (reality principle) + Superego (morality principle)",
            description: "Three components of personality in psychodynamic theory",
            descriptionRu: "Три компонента личности в психодинамической теории",
            descriptionKk: "Психодинамикалық теориядағы тұлғаның үш компоненті"
          }
        ],
        solvedExamples: [
          {
            question: "A shy student joins a drama club and gradually becomes more outgoing. Explain this change using Bandura's reciprocal determinism.",
            questionRu: "Застенчивый ученик вступил в драмкружок и постепенно стал общительнее. Объясните через реципрокный детерминизм Бандуры.",
            questionKk: "Ұялшақ оқушы драма үйірмесіне кіріп, біртіндеп ашық болды. Бандураның өзара детерминизмі арқылы түсіндіріңіз.",
            steps: [
              { en: "Identify the three factors: Person = shy temperament and low social confidence. Environment = drama club with supportive peers and performance opportunities. Behavior = acting, speaking on stage, collaborating with others.", ru: "Определите три фактора: Личность = застенчивость. Среда = драмкружок с поддержкой. Поведение = выступления, сотрудничество.", kk: "Үш факторды анықтаңыз: Тұлға = ұялшақтық. Орта = қолдаушы драма үйірмесі. Мінез-құлық = сахнада сөйлеу, ынтымақтастық." },
              { en: "Show reciprocal influence: The supportive environment encourages the person to try new behaviors (performing). Successful performances change the person's self-concept (from 'I'm shy' to 'I can be expressive'). This new self-concept leads to seeking more social environments, which provide more opportunities for outgoing behavior. All three factors — person, behavior, environment — continuously reshape each other.", ru: "Покажите взаимное влияние: Среда побуждает новое поведение. Успех меняет самооценку. Новая самооценка ведёт к новым социальным средам. Все три фактора непрерывно влияют друг на друга.", kk: "Өзара ықпалды көрсетіңіз: Орта жаңа мінез-құлықты ынталандырады. Табыс өзін-өзі бағалауды өзгертеді. Жаңа бағалау жаңа әлеуметтік ортаға жетелейді. Үш фактор бір-біріне үздіксіз әсер етеді." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Explain Freud's id, ego, and superego using a simple everyday example.",
            questionRu: "Объясните Ид, Эго и Суперэго Фрейда на простом примере.",
            questionKk: "Фрейдтің ид, эго және суперэгосын қарапайым мысалмен түсіндіріңіз.",
            answer: "Example: You see a delicious cake at a friend's party. Id says: 'Take the whole cake! I want it now!' (pure desire, no rules). Superego says: 'Don't eat any cake, you're being selfish and unhealthy' (strict morality). Ego mediates: 'I'll take one reasonable slice and enjoy it politely' (balances desire with social reality). The ego finds a realistic compromise between the id's impulses and the superego's ideals.",
            answerRu: "Пример: вы видите вкусный торт на вечеринке друга. Ид говорит: «Возьми весь торт! Хочу сейчас!» (чистое желание, без правил). Суперэго говорит: «Не ешь торт, ты эгоистичен и вредишь здоровью» (строгая мораль). Эго посредничает: «Возьму один разумный кусок и вежливо его съем» (баланс желания с социальной реальностью). Эго находит реалистичный компромисс между импульсами Ид и идеалами Суперэго.",
            answerKk: "Мысал: досыңыздың кешінде дәмді торт көресіз. Ид дейді: «Бүкіл тортты ал! Қазір қалаймын!» (таза қалау, ережесіз). Суперэго дейді: «Тортты жеме, сен өзімшілсің әрі денсаулыққа зиян жасайсың» (қатаң моральдық). Эго делдалдық жасайды: «Бір орынды бөлік алып, сыпайы жеймін» (қалауды әлеуметтік шындықпен теңестіру). Эго ид ынтасы мен суперэго идеалдары арасында шынайы ымыраны табады.",
            hint: "Think of a situation where you wanted something, felt guilty about it, and found a middle ground.",
            hintRu: "Вспомните ситуацию, когда вы хотели что-то, чувствовали вину и находили компромисс.",
            hintKk: "Бір нәрсені қалап, кінәлі сезініп, ортаңғы жол тапқан жағдайды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Compare the psychodynamic (Freud), humanistic (Maslow/Rogers), and trait (Big Five) approaches to personality. What does each emphasize, and what does each miss?",
            questionRu: "Сравните психодинамический, гуманистический и черт-подходы к личности. Что подчёркивает и что упускает каждый?",
            questionKk: "Психодинамикалық, гуманистік және қасиет тәсілдерін салыстырыңыз. Әрқайсысы нені баса көрсетеді және нені жіберіп алады?",
            answer: "Psychodynamic (Freud): Emphasizes unconscious drives, childhood experiences, and internal conflict. Misses: Hard to test scientifically; overemphasizes sexuality and early childhood; undervalues conscious choice. Humanistic (Maslow/Rogers): Emphasizes growth, self-actualization, and positive potential. Misses: Overly optimistic about human nature; vague concepts that are hard to measure; neglects how environment constrains growth. Trait (Big Five): Emphasizes measurable, stable personality dimensions across cultures. Misses: Describes personality but does not explain WHY traits develop; treats personality as static when it can change over time; ignores unconscious and situational influences.",
            answerRu: "Психодинамический (Фрейд): подчёркивает бессознательные влечения, детский опыт и внутренний конфликт. Упускает: трудно проверить научно; переоценивает сексуальность и раннее детство; недооценивает сознательный выбор. Гуманистический (Маслоу/Роджерс): подчёркивает рост, самоактуализацию и позитивный потенциал. Упускает: чрезмерный оптимизм о человеческой природе; расплывчатые концепции, которые трудно измерить; игнорирует, как среда ограничивает рост. Черт (Большая пятёрка): подчёркивает измеримые, стабильные измерения личности в разных культурах. Упускает: описывает личность, но не объясняет, ПОЧЕМУ черты развиваются; рассматривает личность как статичную, хотя она может меняться со временем; игнорирует бессознательные и ситуативные влияния.",
            answerKk: "Психодинамикалық (Фрейд): бейсаналық ұмтылыстарды, балалық тәжірибені және ішкі қайшылықты баса көрсетеді. Жіберіп алады: ғылыми тексеру қиын; жыныстық қатынас пен ерте балалық шақты шамадан тыс бағалайды; саналы таңдауды бағаламайды. Гуманистік (Маслоу/Роджерс): өсуді, өзін-өзі жүзеге асыруды және оң әлеуетті баса көрсетеді. Жіберіп алады: адам табиғаты туралы шамадан тыс оптимистік; өлшеу қиын анық емес тұжырымдамалар; ортаның өсуді қалай шектейтінін елемейді. Қасиет (Үлкен бестік): мәдениеттер бойынша өлшенетін, тұрақты тұлға өлшемдерін баса көрсетеді. Жіберіп алады: тұлғаны сипаттайды, бірақ қасиеттердің НЕГЕ дамитынын түсіндірмейді; тұлғаны уақыт өте өзгеруі мүмкін болса да статикалық деп қарастырады; бейсаналық және жағдайлық әсерлерді елемейді.",
            hint: "Each theory spotlights one aspect of personality while leaving others in shadow.",
            hintRu: "Каждая теория освещает один аспект личности, оставляя другие в тени.",
            hintKk: "Әр теория тұлғаның бір аспектісін жарықтандырады, басқаларын көлеңкеде қалдырады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Is personality fixed by adulthood, or can it fundamentally change? Use evidence from at least two personality theories and cite relevant research findings to support your argument.",
            questionRu: "Фиксируется ли личность к зрелости или может измениться? Используйте минимум две теории и исследования.",
            questionKk: "Тұлға ересек кезде бекітіле ме, әлде түбегейлі өзгере ала ма? Кемінде екі теория мен зерттеу нәтижелерін қолданыңыз.",
            answer: "Personality can and does change, but gradually. Evidence for change: 1) Big Five research shows personality shifts throughout life — people become more conscientious and agreeable from age 20 to 60 (Roberts et al., 2006 meta-analysis). Neuroticism decreases with age. These are not minor shifts — they represent meaningful personality change. 2) Bandura's reciprocal determinism predicts change: new environments (college, career, relationships) create new behavioral patterns that reshape personality traits over time. 3) Therapeutic interventions (CBT, psychodynamic therapy) produce measurable personality changes — a 2017 meta-analysis by Roberts et al. showed therapy changed neuroticism and extraversion significantly in as little as 4-8 weeks. Evidence for stability: 1) Trait theory shows moderate stability — correlations of ~0.60 between personality measurements taken decades apart, meaning about 60% is consistent. 2) Freud argued core personality is established by age 5-6, though modern psychodynamic theory is less rigid. Conclusion: Personality is like a river — it has a consistent current (trait stability) but its course can shift over time through significant experiences, deliberate effort, and environmental change.",
            answerRu: "Личность может меняться и меняется, но постепенно. Доказательства изменения: 1) Исследования Большой пятёрки показывают сдвиги личности на протяжении жизни — люди становятся более добросовестными и доброжелательными с 20 до 60 лет (метаанализ Робертса и др., 2006). Нейротизм снижается с возрастом. Это не мелкие сдвиги — они представляют значимое изменение личности. 2) Реципрокный детерминизм Бандуры предсказывает изменение: новые среды (колледж, карьера, отношения) создают новые поведенческие паттерны, меняющие черты личности со временем. 3) Терапевтические вмешательства (КПТ, психодинамическая терапия) дают измеримые изменения личности — метаанализ Робертса и др. 2017 года показал, что терапия значимо изменила нейротизм и экстраверсию всего за 4-8 недель. Доказательства стабильности: 1) Теория черт показывает умеренную стабильность — корреляции ~0,60 между измерениями личности через десятилетия, то есть около 60% стабильно. 2) Фрейд утверждал, что основа личности формируется к 5-6 годам, хотя современная психодинамическая теория менее жёсткая. Вывод: личность подобна реке — у неё стабильное течение (стабильность черт), но её русло может смещаться со временем через значимый опыт, осознанные усилия и изменения среды.",
            answerKk: "Тұлға өзгере алады және өзгереді, бірақ бірте-бірте. Өзгеру дәлелдері: 1) Үлкен бестік зерттеулері тұлғаның өмір бойы өзгеретінін көрсетеді — адамдар 20-дан 60 жасқа дейін ұқыптырақ және келісімшілірек болады (Робертс және басқалар, 2006 мета-талдауы). Нейротизм жасымен төмендейді. Бұл шағын өзгерістер емес — олар мағыналы тұлға өзгерісін білдіреді. 2) Бандураның өзара детерминизмі өзгерісті болжайды: жаңа орталар (колледж, мансап, қарым-қатынас) уақыт өте тұлға қасиеттерін қайта қалыптастыратын жаңа мінез-құлық үлгілерін жасайды. 3) Терапевтік араласулар (КМТ, психодинамикалық терапия) өлшенетін тұлға өзгерістерін береді — Робертс пен басқалардың 2017 жылғы мета-талдауы терапияның нейротизм мен экстраверсияны небәрі 4-8 аптада айтарлықтай өзгерткенін көрсетті. Тұрақтылық дәлелдері: 1) Қасиет теориясы орташа тұрақтылықты көрсетеді — ондаған жылдар аралығында алынған тұлға өлшемдері арасында ~0,60 корреляция, яғни шамамен 60%-ы тұрақты. 2) Фрейд негізгі тұлға 5-6 жасқа дейін қалыптасады деп тұжырымдады, дегенмен заманауи психодинамикалық теория аз қатаң. Қорытынды: тұлға өзен сияқты — оның тұрақты ағысы бар (қасиет тұрақтылығы), бірақ оның арнасы маңызды тәжірибелер, саналы күш-жігер және орта өзгерістері арқылы уақыт өте ауысуы мүмкін.",
            hint: "Look for evidence that personality DOES change — then ask how much and under what conditions.",
            hintRu: "Ищите доказательства изменения личности — затем спросите, насколько и при каких условиях.",
            hintKk: "Тұлғаның өзгеретініне дәлел іздеңіз — содан кейін қаншалықты және қандай жағдайларда екенін сұраңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Social Psychology Experiments",
        titleRu: "Эксперименты социальной психологии",
        titleKk: "Әлеуметтік психология эксперименттері",
        content: "Landmark social psychology experiments reveal how powerfully situations shape behavior. Milgram's obedience study showed that 65% of ordinary people delivered maximum electric shocks when instructed by an authority figure. Zimbardo's Stanford Prison Experiment demonstrated how quickly roles and power dynamics corrupt behavior. Asch's conformity experiments revealed that people conform to obviously wrong group answers about one-third of the time. These experiments fundamentally changed our understanding of human nature.",
        contentRu: "Знаковые эксперименты социальной психологии показывают, как ситуации формируют поведение. Исследование подчинения Милгрэма показало, что 65% людей наносили максимальные удары по указанию авторитета. Стэнфордский тюремный эксперимент Зимбардо продемонстрировал, как быстро роли и власть развращают. Эксперименты конформизма Аша показали, что люди соглашаются с очевидно неверными ответами группы в трети случаев.",
        contentKk: "Әлеуметтік психологияның маңызды эксперименттері жағдайлардың мінез-құлықты қаншалықты күшті қалыптастыратынын көрсетеді. Милгрэмнің бағыну зерттеуі қарапайым адамдардың 65%-ы билік тұлғасының нұсқауымен максималды электр соққыларын беретінін көрсетті. Зимбардоның Стэнфорд түрме эксперименті рөлдер мен билік динамикасының мінез-құлықты қаншалықты тез бұзатынын көрсетті. Ашның конформизм эксперименттері адамдардың анық қате жауаптарға шамамен үштен бір уақытта бағынатынын көрсетті.",
        keyFormulas: [
          {
            formula: "Milgram's Finding: 65% obedience rate to harmful authority commands in ordinary people",
            description: "Situational authority can override personal morality in the majority of people",
            descriptionRu: "Ситуационный авторитет может преодолеть личную мораль у большинства",
            descriptionKk: "Ситуациялық билік көпшіліктің жеке моралін басып кете алады"
          },
          {
            formula: "Asch Conformity: ~33% conformity rate to obviously wrong group answers",
            description: "Social pressure causes people to deny their own perception one-third of the time",
            descriptionRu: "Социальное давление заставляет отрицать собственное восприятие в трети случаев",
            descriptionKk: "Әлеуметтік қысым адамдарды уақыттың үштен бірінде өз қабылдауынан бас тартуға мәжбүрлейді"
          }
        ],
        solvedExamples: [
          {
            question: "A student witnesses classmates cheating on a test but says nothing. Use Milgram's and Asch's findings to explain this behavior.",
            questionRu: "Ученик видит, как одноклассники списывают, но молчит. Объясните через Милгрэма и Аша.",
            questionKk: "Оқушы сыныптастарының көшіріп жазғанын көреді, бірақ үндемейді. Милгрэм мен Аш тұжырымдары арқылы түсіндіріңіз.",
            steps: [
              { en: "Apply Asch's conformity: The student sees that multiple classmates are cheating (the 'group norm'). Asch showed that even when the correct answer is obvious, group pressure makes people conform. The student thinks 'Everyone is doing it, maybe I'm the weird one for NOT cheating' — conformity pressure silences dissent.", ru: "Конформизм Аша: Ученик видит, что все списывают (групповая норма). Аш показал, что давление группы заставляет соглашаться. Мысль: «Все делают, может я странный, что не списываю».", kk: "Ашның конформизмі: Оқушы барлығы көшіретінін көреді (топ нормасы). Аш топ қысымы адамдарды бағындыратынын көрсетті. Ой: «Барлығы жасап жатыр, мүмкін көшірмейтін мен ғажап»." },
              { en: "Apply Milgram's obedience: If the teacher is absent or appears to tolerate cheating (implicit authority), students may perceive 'authority isn't stopping it, so it must be acceptable.' Milgram showed people defer to perceived authority even when it conflicts with their values. Combined: conformity to peers + obedience to (absent) authority = silence.", ru: "Подчинение Милгрэма: Если учитель отсутствует, ученики воспринимают «власть не останавливает — значит допустимо». Конформизм + подчинение = молчание.", kk: "Милгрэмнің бағынуы: Мұғалім болмаса, оқушылар «билік тоқтатпайды — демек рұқсат» деп қабылдайды. Конформизм + бағыну = үнсіздік." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Describe Asch's conformity experiment: what was the task, what did participants do, and what does it tell us about social pressure?",
            questionRu: "Опишите эксперимент конформизма Аша: задание, поведение участников и выводы о социальном давлении.",
            questionKk: "Ашның конформизм эксперименттін сипаттаңыз: тапсырма не болды, қатысушылар не істеді және әлеуметтік қысым туралы не айтады?",
            answer: "In Asch's experiment, participants were shown a line and asked to match it to one of three comparison lines — the correct answer was obvious. However, confederates (fake participants) deliberately gave the wrong answer. Results: about 33% of the time, real participants conformed to the wrong answer, even though they could clearly see it was incorrect. This tells us that social pressure is powerful enough to make people deny their own perception — we prioritize fitting in with the group over being right, especially when we're the only dissenter.",
            answerRu: "В эксперименте Аша участникам показывали линию и просили сопоставить её с одной из трёх сравнительных линий — правильный ответ был очевиден. Однако подставные участники намеренно давали неверный ответ. Результаты: примерно в 33% случаев настоящие участники соглашались с неверным ответом, даже видя, что он неправильный. Это говорит, что социальное давление достаточно сильно, чтобы заставить людей отрицать собственное восприятие — мы ставим соответствие группе выше правоты, особенно когда единственные несогласны.",
            answerKk: "Аш экспериментінде қатысушыларға сызық көрсетіліп, оны үш салыстыру сызығының біреуімен сәйкестендіру сұралды — дұрыс жауап анық еді. Дегенмен, жасанды қатысушылар әдейі қате жауап берді. Нәтижелер: шамамен 33% жағдайда нақты қатысушылар қате жауапты қабылдады, тіпті ол қате екенін анық көрсе де. Бұл әлеуметтік қысымның адамдарды өз қабылдауынан бас тартуға мәжбүрлейтіндей күшті екенін көрсетеді — біз дұрыс болудан гөрі топқа сай келуді бірінші орынға қоямыз, әсіресе жалғыз келіспегенде.",
            hint: "The task was simple and the correct answer was obvious — that is what makes the conformity so surprising.",
            hintRu: "Задание было простым, ответ очевиден — именно это делает конформизм таким удивительным.",
            hintKk: "Тапсырма қарапайым, жауап анық болды — конформизмді таңғалдыратын нәрсе осы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Both Milgram and Zimbardo showed that situations powerfully shape behavior. But their experiments would not be approved today. Identify two specific ethical violations in each study and explain what ethical safeguards should have been in place.",
            questionRu: "Милгрэм и Зимбардо показали силу ситуации, но их эксперименты не были бы одобрены сегодня. Укажите по два нарушения этики в каждом.",
            questionKk: "Милгрэм мен Зимбардо жағдайдың күшін көрсетті, бірақ эксперименттері бүгін мақұлданбас еді. Әрқайсысында екі этикалық бұзушылықты анықтаңыз.",
            answer: "Milgram: 1) Deception — participants believed they were genuinely shocking someone, causing extreme psychological distress. Safeguard: Full informed consent about the nature of the study. 2) No right to withdraw — participants were pressured with verbal prods ('The experiment requires you to continue') when they wanted to stop. Safeguard: Clear, repeated reminders that they could stop at any time without consequences. Zimbardo: 1) Lack of oversight — Zimbardo acted as both researcher and 'prison superintendent,' losing objectivity. Safeguard: Independent ethics monitor with authority to stop the study. 2) Psychological harm — 'prisoners' experienced breakdowns; the study continued beyond the point of clear harm. Safeguard: Predetermined stopping criteria based on participant distress levels, daily mental health check-ins. Both studies contributed enormously to psychology but at an unacceptable human cost.",
            answerRu: "Милгрэм: 1) Обман — участники верили, что действительно бьют кого-то током, вызывая крайний психологический стресс. Защита: полное информированное согласие о природе исследования. 2) Отсутствие права выйти — участников подталкивали словесно («Эксперимент требует продолжения»), когда они хотели остановиться. Защита: чёткие, повторяющиеся напоминания, что можно остановиться в любой момент без последствий. Зимбардо: 1) Отсутствие надзора — Зимбардо действовал и как исследователь, и как «начальник тюрьмы», теряя объективность. Защита: независимый этический наблюдатель с полномочием остановить исследование. 2) Психологический вред — «заключённые» переживали срывы; исследование продолжалось за пределами явного вреда. Защита: заранее определённые критерии остановки на основе уровня стресса участников, ежедневные проверки психического здоровья. Оба исследования внесли огромный вклад в психологию, но ценой недопустимых человеческих издержек.",
            answerKk: "Милгрэм: 1) Алдау — қатысушылар шынымен біреуге ток соғып жатырмыз деп сенді, бұл шектен тыс психологиялық күйзеліс тудырды. Қорғаныс: зерттеу сипаты туралы толық ақпараттандырылған келісім. 2) Бас тарту құқығының болмауы — тоқтағысы келгенде қатысушыларға ауызша қысым жасалды («Эксперимент жалғастыруды талап етеді»). Қорғаныс: кез келген уақытта салдарсыз тоқтауға болатыны туралы анық, қайталанатын еске салулар. Зимбардо: 1) Бақылаудың болмауы — Зимбардо зерттеуші әрі «түрме бастығы» рөлдерін атқарып, объективтілігін жоғалтты. Қорғаныс: зерттеуді тоқтатуға өкілеттігі бар тәуелсіз этика бақылаушысы. 2) Психологиялық зиян — «тұтқындар» дағдарысқа ұшырады; зерттеу нақты зиян нүктесінен өтіп жалғасты. Қорғаныс: қатысушылардың күйзеліс деңгейіне негізделген алдын ала белгіленген тоқтату критерийлері, күнделікті психикалық денсаулық тексерулері. Екі зерттеу де психологияға зор үлес қосты, бірақ жол берілмейтін адами шығынмен.",
            hint: "Think about informed consent, the right to withdraw, and the prevention of psychological harm.",
            hintRu: "Подумайте об информированном согласии, праве на отказ и предотвращении вреда.",
            hintKk: "Ақпараттандырылған келісім, бас тарту құқығы және психологиялық зиянды болдырмау туралы ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "The 'replication crisis' in social psychology has challenged findings from classic experiments — some Milgram and Asch replications show different results. Does this mean the original findings were wrong? Evaluate what replication failures tell us about psychology as a science.",
            questionRu: "«Кризис воспроизводимости» поставил под сомнение классические эксперименты. Означает ли это, что оригинальные результаты были неверны?",
            questionKk: "Әлеуметтік психологиядағы «қайталау дағдарысы» классикалық эксперименттерді күмән тудырды. Бастапқы нәтижелер қате болды деген сөз бе?",
            answer: "Replication failures don't necessarily mean original findings were 'wrong' — they add nuance. What replication teaches us: 1) Context dependency: Milgram's 65% obedience rate varies by culture, era, and setting. A 2009 partial replication found 70% obedience, but a different cultural context showed lower rates. The PRINCIPLE (authority influences behavior) holds, but the exact PERCENTAGE is context-dependent. 2) Effect sizes may be inflated: Small sample sizes and publication bias (only publishing significant results) in early studies likely inflated effect sizes. Replications with larger samples find real but smaller effects. 3) Science is self-correcting: The replication crisis is not a failure of psychology — it IS psychology working correctly. Identifying unreliable findings strengthens the field. 4) Lessons learned: Pre-registration of hypotheses, larger samples, open data sharing, and multi-site replications are now standard, making modern psychology more rigorous. Conclusion: Classic experiments were groundbreaking but imprecise. Replication refines rather than refutes them — the core insights about conformity, obedience, and situational power remain valid, even if specific numbers need updating.",
            answerRu: "Неудачи репликации не обязательно означают, что оригинальные результаты были «неверными» — они добавляют нюансы. Чему учит репликация: 1) Контекстная зависимость: уровень подчинения 65% у Милгрэма варьируется по культуре, эпохе и условиям. Частичная репликация 2009 года обнаружила 70% подчинения, но другой культурный контекст показал более низкие показатели. ПРИНЦИП (авторитет влияет на поведение) сохраняется, но точный ПРОЦЕНТ зависит от контекста. 2) Размеры эффекта могут быть завышены: малые выборки и предвзятость публикаций (публикуют только значимые результаты) в ранних исследованиях, вероятно, завышали эффекты. Репликации с большими выборками находят реальные, но меньшие эффекты. 3) Наука самокорректируется: кризис репликации — не провал психологии, это ЕСТЬ психология, работающая правильно. Выявление ненадёжных результатов укрепляет область. 4) Извлечённые уроки: предрегистрация гипотез, большие выборки, открытый обмен данными и многоцентровые репликации теперь стандарт, делая современную психологию строже. Вывод: классические эксперименты были прорывными, но неточными. Репликация уточняет, а не опровергает их — основные выводы о конформизме, подчинении и ситуационной власти остаются верными, даже если конкретные цифры нужно обновить.",
            answerKk: "Қайталау сәтсіздіктері бастапқы нәтижелер «қате» болды дегенді міндетті түрде білдірмейді — олар нюанс қосады. Қайталау бізге не үйретеді: 1) Контекстке тәуелділік: Милгрэмнің 65% бағыну деңгейі мәдениетке, дәуірге және жағдайға қарай өзгереді. 2009 жылғы жартылай қайталау 70% бағынуды тапты, бірақ басқа мәдени контекст төменірек көрсеткіштер көрсетті. ПРИНЦИП (билік мінез-құлыққа әсер етеді) сақталады, бірақ нақты ПАЙЫЗ контекстке тәуелді. 2) Әсер өлшемдері асыра көрсетілуі мүмкін: ерте зерттеулердегі шағын үлгілер мен жариялау біржақтылығы (тек маңызды нәтижелерді жариялау) әсерлерді асыра көрсеткен болуы мүмкін. Үлкен үлгілермен қайталаулар нақты, бірақ кішірек әсерлерді табады. 3) Ғылым өзін-өзі түзетеді: қайталау дағдарысы психологияның сәтсіздігі емес — бұл дұрыс жұмыс істеп жатқан психологияның ӨЗІ. Сенімсіз нәтижелерді анықтау саланы нығайтады. 4) Алынған сабақтар: гипотезаларды алдын ала тіркеу, үлкен үлгілер, ашық деректер алмасу және көп орталықты қайталаулар қазір стандарт болып, заманауи психологияны қатаңырақ етеді. Қорытынды: классикалық эксперименттер жаңашыл, бірақ дәл емес болды. Қайталау оларды жоққа шығармайды, нақтылайды — конформизм, бағыну және ситуациялық билік туралы негізгі түсініктер жарамды болып қалады, тіпті нақты сандарды жаңарту қажет болса да.",
            hint: "A finding can be 'real' but its size and universality may be overstated — replication clarifies the boundaries.",
            hintRu: "Результат может быть «реальным», но его масштаб преувеличен — репликация уточняет границы.",
            hintKk: "Нәтиже «шынайы» болуы мүмкін, бірақ масштабы асыра айтылуы мүмкін — қайталау шекараларды нақтылайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Therapeutic Communication",
        titleRu: "Терапевтическая коммуникация",
        titleKk: "Терапевтік қарым-қатынас",
        content: "Therapeutic communication is a set of techniques used to support emotional well-being in others. Carl Rogers identified three core conditions: unconditional positive regard (accepting the person without judgment), empathy (deeply understanding their perspective), and congruence (being genuine). Active listening skills — reflective listening, open-ended questions, and emotional validation — create safety for honest communication and are used in counseling, healthcare, education, and everyday relationships.",
        contentRu: "Терапевтическая коммуникация — набор техник поддержки эмоционального благополучия. Карл Роджерс определил три условия: безусловное позитивное отношение (принятие без осуждения), эмпатия (глубокое понимание) и конгруэнтность (подлинность). Навыки активного слушания — рефлексивное слушание, открытые вопросы и эмоциональная валидация — создают безопасность для честного общения.",
        contentKk: "Терапевтік қарым-қатынас — басқалардың эмоциялық саулығын қолдау техникалары жиынтығы. Карл Роджерс үш негізгі шартты анықтады: шартсыз оң қабылдау (адамды сынсыз қабылдау), эмпатия (олардың көзқарасын терең түсіну) және конгруэнттік (шынайы болу). Белсенді тыңдау дағдылары — рефлексивті тыңдау, ашық сұрақтар және эмоциялық растау — адал қарым-қатынасқа қауіпсіздік жасайды.",
        keyFormulas: [
          {
            formula: "Rogers' Core Conditions: Unconditional Positive Regard + Empathy + Congruence = Therapeutic Relationship",
            description: "Three conditions necessary for creating a safe, growth-promoting relationship",
            descriptionRu: "Три условия для безопасных, способствующих росту отношений",
            descriptionKk: "Қауіпсіз, өсуге ықпал ететін қарым-қатынас үшін үш шарт"
          }
        ],
        solvedExamples: [
          {
            question: "A friend tells you 'I feel like I'm failing at everything.' Show how to respond using therapeutic communication vs. common but unhelpful responses.",
            questionRu: "Друг говорит «Я чувствую, что проваливаюсь во всём». Покажите терапевтический ответ vs обычные, но бесполезные ответы.",
            questionKk: "Дос «Бәрінде сәтсіздікке ұшырап жатқандаймын» дейді. Терапевтік жауапты пайдасыз жауаптармен салыстырыңыз.",
            steps: [
              { en: "Identify unhelpful responses: 'Don't worry, you'll be fine' (dismissive). 'At least you're not failing as bad as...' (minimizing). 'You should try harder' (advice-giving without understanding). These all fail Rogers' conditions — they judge, dismiss, or redirect rather than accepting and understanding.", ru: "Неполезные ответы: «Не переживай» (отмахивание). «Хотя бы ты не так плох, как...» (минимизация). «Старайся больше» (совет без понимания). Все нарушают условия Роджерса.", kk: "Пайдасыз жауаптар: «Уайымдама» (елемеу). «Кем дегенде ... сияқты нашар емессің» (азайту). «Көбірек тырыс» (түсінусіз кеңес). Барлығы Роджерс шарттарын бұзады." },
              { en: "Apply therapeutic communication: Use reflective listening: 'It sounds like you're feeling really overwhelmed right now' (empathy). Use unconditional positive regard: 'I'm here for you no matter what — there's nothing you could say that would change that' (acceptance). Ask an open-ended question: 'Can you tell me more about what's been weighing on you?' (inviting deeper sharing). Be congruent: 'I care about you and it's hard for me to hear you're struggling' (genuine feeling).", ru: "Терапевтический ответ: Рефлексия: «Похоже, ты сейчас очень перегружен» (эмпатия). Безусловное принятие: «Я рядом, что бы ни было». Открытый вопрос: «Расскажешь подробнее?» Конгруэнтность: «Мне тяжело слышать, что тебе плохо».", kk: "Терапевтік жауап: Рефлексия: «Қазір шамадан тыс жүктемені сезініп тұрғандайсың» (эмпатия). Шартсыз қабылдау: «Не болса да жаныңдамын». Ашық сұрақ: «Нақтырақ айта аласың ба?» Конгруэнттік: «Саған қиын екенін есту маған да ауыр»." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is unconditional positive regard and why is it important in helping relationships?",
            questionRu: "Что такое безусловное позитивное отношение и почему оно важно?",
            questionKk: "Шартсыз оң қабылдау дегеніміз не және көмек қарым-қатынастарында неге маңызды?",
            answer: "Unconditional positive regard means accepting and supporting someone regardless of what they say, feel, or do — without conditions like 'I'll accept you IF you behave well.' It is important because people only share their true feelings when they feel safe from judgment. If a person fears being criticized or rejected, they will hide their real problems, making it impossible to help them. It creates the psychological safety needed for honest self-exploration.",
            answerRu: "Безусловное позитивное отношение означает принятие и поддержку человека независимо от того, что он говорит, чувствует или делает — без условий вроде «я приму тебя, ЕСЛИ ты будешь хорошо себя вести». Это важно, потому что люди делятся истинными чувствами, только когда чувствуют себя в безопасности от осуждения. Если человек боится критики или отвержения, он скроет реальные проблемы, что делает помощь невозможной. Это создаёт психологическую безопасность, необходимую для честного самоисследования.",
            answerKk: "Шартсыз оң қабылдау адамды не айтса да, не сезінсе де, не істесе де қабылдау мен қолдауды білдіреді — «жақсы жүрсең ҒАНА қабылдаймын» сияқты шарттарсыз. Бұл маңызды, себебі адамдар сотталудан қауіпсіз сезінгенде ғана шынайы сезімдерімен бөліседі. Адам сынды немесе бас тартуды қорықса, ол нақты мәселелерін жасырады, бұл көмек көрсетуді мүмкін етпейді. Бұл адал өзін-өзі зерттеу үшін қажетті психологиялық қауіпсіздікті жасайды.",
            hint: "Think about what you need to feel before you share something vulnerable.",
            hintRu: "Подумайте, что вам нужно чувствовать, прежде чем поделиться чем-то уязвимым.",
            hintKk: "Осал нәрсені бөлісу алдында не сезіну керек екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite these three unhelpful statements into therapeutically effective responses: (a) 'Stop crying, it's not that bad.' (b) 'You should just break up with them.' (c) 'I know exactly how you feel.'",
            questionRu: "Перепишите три бесполезные фразы терапевтически: (а) «Хватит плакать, не так всё плохо.» (б) «Просто расстанься.» (в) «Я точно знаю, что ты чувствуешь.»",
            questionKk: "Үш пайдасыз сөйлемді терапевтік тиімді жауаптарға қайта жазыңыз: (а) «Жылама, соншалықты жаман емес.» (б) «Олармен айырылыс.» (в) «Не сезініп тұрғаныңды нақты білемін.»",
            answer: "(a) Instead of 'Stop crying, it's not that bad' → 'I can see this is really painful for you. It's okay to cry — take the time you need.' This validates rather than dismisses the emotion. (b) Instead of 'You should just break up' → 'That sounds like a really difficult relationship. What do you think would help you feel better about this situation?' This empowers their decision rather than imposing yours. (c) Instead of 'I know exactly how you feel' → 'I can only imagine how hard this must be for you. Help me understand what you're going through.' This shows humility and genuine interest rather than claiming to fully understand someone else's unique experience.",
            answerRu: "(а) Вместо «Хватит плакать, не так всё плохо» → «Я вижу, что тебе действительно больно. Плакать — это нормально, не торопись». Это подтверждает эмоцию, а не отмахивается от неё. (б) Вместо «Просто расстанься» → «Похоже, это действительно трудные отношения. Как думаешь, что помогло бы тебе почувствовать себя лучше?» Это даёт человеку право на своё решение, а не навязывает ваше. (в) Вместо «Я точно знаю, что ты чувствуешь» → «Могу только представить, как тебе сейчас тяжело. Помоги мне понять, через что ты проходишь». Это показывает смирение и искренний интерес, а не претензию на полное понимание чужого уникального опыта.",
            answerKk: "(а) «Жылама, соншалықты жаман емес» орнына → «Бұл саған шынымен ауыр екенін көріп тұрмын. Жылау — қалыпты, асықпа». Бұл эмоцияны елемей емес, растайды. (б) «Олармен айырылыс» орнына → «Бұл шынымен қиын қарым-қатынас сияқты. Сенің ойыңша, бұл жағдайда өзіңді жақсырақ сезінуге не көмектеседі?» Бұл сіздің шешіміңізді таңудың орнына оның шешіміне күш береді. (в) «Не сезініп тұрғаныңды нақты білемін» орнына → «Бұл саған қаншалықты қиын екенін тек елестете аламын. Не бастан кешіп жатқаныңды түсінуге көмектес». Бұл басқа адамның бірегей тәжірибесін толық түсінемін деп мәлімдеудің орнына кішіпейілдік пен шынайы қызығушылықты көрсетеді.",
            hint: "Replace judgment with validation, advice with questions, and certainty with curiosity.",
            hintRu: "Замените осуждение валидацией, советы — вопросами, уверенность — любопытством.",
            hintKk: "Сынды растаумен, кеңесті сұрақтармен, сенімділікті қызығушылықпен ауыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Rogers believed that empathy, unconditional positive regard, and congruence are sufficient conditions for personal growth — no techniques needed. Modern CBT argues that specific techniques (thought challenging, behavioral experiments) are necessary. Who is right? Build an argument integrating both perspectives.",
            questionRu: "Роджерс считал эмпатию, принятие и конгруэнтность достаточными условиями. КПТ утверждает, что нужны техники. Кто прав?",
            questionKk: "Роджерс эмпатия, қабылдау мен конгруэнттікті жеткілікті шарттар деп санады. КМТ нақты техникалар қажет дейді. Кім дұрыс?",
            answer: "Both are partially right — they address different aspects of change. Rogers is right that: The therapeutic relationship is the foundation. Research consistently shows that the quality of the therapist-client relationship (alliance) is the strongest predictor of therapy outcomes — stronger than any specific technique. Without safety, empathy, and genuineness, even the best techniques fail because clients disengage. CBT is right that: For specific problems (phobias, depression, anxiety), structured techniques produce faster and more measurable results. Thought challenging directly addresses cognitive distortions; behavioral experiments create new learning. These tools give clients concrete skills to use independently. Integration (the strongest position): Rogers' conditions are NECESSARY but not always SUFFICIENT. Start with Rogerian conditions to build safety and trust (the foundation). Then layer CBT techniques to address specific problems (the tools). This is what modern integrative therapy actually does — research on Cognitive-Behavioral Therapy effectiveness shows it works best when delivered within a strong therapeutic relationship.",
            answerRu: "Оба частично правы — они касаются разных аспектов изменений. Роджерс прав в том, что: терапевтические отношения — основа. Исследования стабильно показывают, что качество отношений терапевт-клиент (альянс) — самый сильный предиктор результатов терапии, сильнее любой конкретной техники. Без безопасности, эмпатии и подлинности даже лучшие техники терпят неудачу, потому что клиенты отстраняются. КПТ права в том, что: для конкретных проблем (фобии, депрессия, тревога) структурированные техники дают более быстрые и измеримые результаты. Оспаривание мыслей напрямую устраняет когнитивные искажения; поведенческие эксперименты создают новое обучение. Эти инструменты дают клиентам конкретные навыки для самостоятельного использования. Интеграция (самая сильная позиция): условия Роджерса НЕОБХОДИМЫ, но не всегда ДОСТАТОЧНЫ. Начните с роджерианских условий для создания безопасности и доверия (основа). Затем добавьте техники КПТ для решения конкретных проблем (инструменты). Именно это делает современная интегративная терапия — исследования эффективности КПТ показывают, что она работает лучше всего в рамках прочных терапевтических отношений.",
            answerKk: "Екеуі де ішінара дұрыс — олар өзгерістің әр түрлі аспектілеріне қатысты. Роджерс мынада дұрыс: терапевтік қарым-қатынас негіз болып табылады. Зерттеулер терапевт-клиент қарым-қатынасының (альянс) сапасы терапия нәтижелерінің ең күшті болжаушысы екенін тұрақты көрсетеді — кез келген нақты техникадан күштірек. Қауіпсіздік, эмпатия және шынайылықсыз тіпті ең жақсы техникалар да сәтсіздікке ұшырайды, себебі клиенттер алшақтайды. КМТ мынада дұрыс: нақты мәселелер үшін (фобиялар, депрессия, алаңдаушылық) құрылымдық техникалар жылдамырақ және өлшенетін нәтижелер береді. Ойды сынау когнитивті бұрмалауларды тікелей шешеді; мінез-құлықтық тәжірибелер жаңа оқуды жасайды. Бұл құралдар клиенттерге өз бетінше қолдануға арналған нақты дағдылар береді. Интеграция (ең күшті позиция): Роджерс шарттары ҚАЖЕТ, бірақ әрқашан ЖЕТКІЛІКТІ емес. Қауіпсіздік пен сенімді құру үшін роджерлік шарттардан бастаңыз (негіз). Содан кейін нақты мәселелерді шешу үшін КМТ техникаларын қабаттастырыңыз (құралдар). Заманауи интегративті терапия дәл осылай істейді — КМТ тиімділігі туралы зерттеулер оның мықты терапевтік қарым-қатынас шеңберінде берілгенде ең жақсы жұмыс істейтінін көрсетеді.",
            hint: "Consider whether one provides the foundation and the other provides the tools.",
            hintRu: "Подумайте, не является ли одно основой, а другое — инструментами.",
            hintKk: "Бірі негіз, екіншісі құралдар болуы мүмкін бе, ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Applied Psychology",
        titleRu: "Прикладная психология",
        titleKk: "Қолданбалы психология",
        content: "Applied psychology takes research findings and uses them to solve real-world problems across domains. Industrial-organizational (I/O) psychology improves workplace productivity and employee well-being. Health psychology applies behavioral science to promote wellness and prevent illness. Forensic psychology aids the legal system through criminal profiling, witness evaluation, and jury selection. Educational psychology optimizes learning through evidence-based teaching strategies and assessment design.",
        contentRu: "Прикладная психология использует исследования для решения реальных проблем. Индустриально-организационная (I/O) психология улучшает продуктивность и благополучие сотрудников. Психология здоровья применяет поведенческую науку для профилактики. Судебная психология помогает правовой системе. Педагогическая психология оптимизирует обучение через научно обоснованные стратегии.",
        contentKk: "Қолданбалы психология зерттеу нәтижелерін нақты мәселелерді шешуге пайдаланады. Индустриалды-ұйымдастырушылық (I/O) психология жұмыс орнының өнімділігін жақсартады. Денсаулық психологиясы мінез-құлықтық ғылымды денсаулықты нығайтуға қолданады. Сот психологиясы құқықтық жүйеге көмектеседі. Педагогикалық психология ғылыми негізделген стратегиялар арқылы оқытуды оңтайландырады.",
        keyFormulas: [
          {
            formula: "Applied Psychology Branches: I/O (workplace) + Health (wellness) + Forensic (legal) + Educational (learning) + Clinical (treatment)",
            description: "Five major applied branches that translate research into practice",
            descriptionRu: "Пять основных прикладных направлений, переводящих исследования в практику",
            descriptionKk: "Зерттеулерді тәжірибеге аударатын бес негізгі қолданбалы бағыт"
          }
        ],
        solvedExamples: [
          {
            question: "A company has high employee turnover. Show how an I/O psychologist would diagnose and address this problem.",
            questionRu: "В компании высокая текучесть. Покажите, как I/O психолог диагностирует и решит проблему.",
            questionKk: "Компанияда қызметкерлер ауысымы жоғары. I/O психолог мәселені қалай диагностикалайтынын және шешетінін көрсетіңіз.",
            steps: [
              { en: "Diagnose using I/O psychology methods: Conduct anonymous employee surveys measuring job satisfaction, perceived fairness, workload, and management quality. Analyze exit interview data for patterns. Apply Herzberg's two-factor theory: check whether hygiene factors (salary, conditions) are adequate AND whether motivators (recognition, growth, autonomy) are present.", ru: "Диагностика методами I/O: Анонимные опросы удовлетворённости, анализ выходных интервью. Применение двухфакторной теории Герцберга: проверить гигиенические факторы и мотиваторы.", kk: "I/O әдістерімен диагностика: Қанағаттану бойынша анонимді сауалнамалар, шығу сұхбаттарын талдау. Герцбергтің екі факторлы теориясын қолдану: гигиеналық факторлар мен мотиваторларды тексеру." },
              { en: "Implement evidence-based interventions: If diagnosis shows lack of recognition and growth — implement a mentorship program and quarterly recognition awards (motivators). If it shows unfair pay — benchmark salaries against industry standards (hygiene). If it shows poor management — provide leadership training using situational leadership model. Measure turnover rate quarterly to evaluate intervention effectiveness.", ru: "Внедрите вмешательства: Если проблема в признании — менторство и награды. Если в зарплате — сравнение с рынком. Если в управлении — тренинг лидерства. Измеряйте текучесть ежеквартально.", kk: "Дәлелді шараларды енгізіңіз: Мойындау жетіспесе — тәлімгерлік және марапаттар. Жалақы мәселесі болса — нарықтық салыстыру. Басқару мәселесі болса — көшбасшылық тренинг. Тоқсан сайын ауысымды өлшеңіз." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three branches of applied psychology and give one real-world problem each branch addresses.",
            questionRu: "Назовите три направления прикладной психологии и одну проблему, которую решает каждое.",
            questionKk: "Қолданбалы психологияның үш бағытын атаңыз және әрқайсысы шешетін бір мәселені келтіріңіз.",
            answer: "1) I/O Psychology — addresses employee burnout by redesigning work schedules and improving management practices. 2) Health Psychology — addresses smoking cessation by designing behavioral interventions based on the stages-of-change model. 3) Educational Psychology — addresses achievement gaps by developing evidence-based teaching methods like spaced repetition and active retrieval practice.",
            answerRu: "1) I/O психология — решает выгорание сотрудников, перестраивая рабочие графики и улучшая методы управления. 2) Психология здоровья — решает отказ от курения, разрабатывая поведенческие вмешательства на основе модели стадий изменения. 3) Педагогическая психология — решает разрыв в успеваемости, разрабатывая научно обоснованные методы обучения, такие как интервальное повторение и активное воспроизведение.",
            answerKk: "1) I/O психология — жұмыс кестелерін қайта құрып, басқару тәжірибесін жақсарту арқылы қызметкерлердің күйіп қалуын шешеді. 2) Денсаулық психологиясы — өзгеру кезеңдері моделіне негізделген мінез-құлықтық араласуларды жобалау арқылы темекі шегуден бас тартуды шешеді. 3) Педагогикалық психология — аралықты қайталау мен белсенді еске түсіру сияқты ғылыми негізделген оқыту әдістерін дамыту арқылы үлгерім алшақтығын шешеді.",
            hint: "Think about workplace, health, and school — each has a psychology branch dedicated to it.",
            hintRu: "Подумайте о работе, здоровье и школе — для каждого есть направление психологии.",
            hintKk: "Жұмыс орны, денсаулық және мектеп туралы ойлаңыз — әрқайсысына психология бағыты бар.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design a health psychology intervention to help university students reduce stress during exam season. Use at least two psychological principles you have learned in this course.",
            questionRu: "Разработайте интервенцию психологии здоровья для снижения стресса студентов во время сессии. Используйте два психологических принципа.",
            questionKk: "Емтихан кезінде студенттердің стрессін азайтуға арналған денсаулық психологиясы шарасын жобалаңыз. Кемінде екі психологиялық принципті қолданыңыз.",
            answer: "Intervention: 'Exam Season Wellness Program.' Principle 1 — Nudge Theory: Make stress-reduction resources the default. Auto-enroll all students in a 10-minute daily mindfulness notification (opt-out, not opt-in). Place relaxation rooms in high-traffic areas near libraries with visible signage. Principle 2 — CBT Techniques: Offer workshops teaching students to identify exam-related cognitive distortions ('If I fail this test, my life is over' = catastrophizing) and replace them with balanced thoughts ('This test matters but is not the only factor in my grade'). Principle 3 — Social Proof: Display campus-wide data: '73% of students who used the wellness center reported lower stress.' This normalizes help-seeking. Measurement: Pre/post surveys measuring perceived stress (PSS-10) and academic performance correlation.",
            answerRu: "Вмешательство: «Программа здоровья в сезон экзаменов». Принцип 1 — Теория подталкивания: сделать ресурсы снижения стресса стандартом по умолчанию. Автоматически подписать всех студентов на 10-минутное ежедневное уведомление о осознанности (с возможностью отказаться, а не подписаться). Разместить комнаты релаксации в людных местах рядом с библиотеками с видимыми указателями. Принцип 2 — Техники КПТ: провести семинары, обучающие студентов выявлять связанные с экзаменами когнитивные искажения («Если я провалю этот тест, моя жизнь кончена» = катастрофизация) и заменять их сбалансированными мыслями («Этот тест важен, но не единственный фактор моей оценки»). Принцип 3 — Социальное доказательство: показать данные по всему кампусу: «73% студентов, использовавших центр здоровья, сообщили о снижении стресса». Это нормализует обращение за помощью. Измерение: опросы до/после, измеряющие воспринимаемый стресс (PSS-10) и корреляцию с академической успеваемостью.",
            answerKk: "Араласу: «Емтихан маусымы саулық бағдарламасы». 1-принцип — Нұқу теориясы: стрессті азайту ресурстарын әдепкі етіп жасау. Барлық студенттерді 10 минуттық күнделікті зейінділік хабарландыруына автоматты жазу (бас тартуға болатын, жазылу емес). Кітапханалар маңындағы көп адам жүретін жерлерге көрінетін белгілермен демалыс бөлмелерін орналастыру. 2-принцип — КМТ техникалары: студенттерге емтиханға байланысты когнитивті бұрмалауларды анықтауды үйрететін семинарлар өткізу («Осы тесттен құласам, өмірім бітті» = апатизация) және оларды теңгерімді ойлармен алмастыру («Бұл тест маңызды, бірақ бағамның жалғыз факторы емес»). 3-принцип — Әлеуметтік дәлел: кампус бойынша деректерді көрсету: «Саулық орталығын қолданған студенттердің 73%-ы стресстің төмендегенін хабарлады». Бұл көмек сұрауды қалыпты етеді. Өлшеу: қабылданған стрессті (PSS-10) және академиялық үлгерім корреляциясын өлшейтін алдын ала/кейінгі сауалнамалар.",
            hint: "Combine changing the environment (nudge) with changing the thinking (CBT).",
            hintRu: "Сочетайте изменение среды (подталкивание) с изменением мышления (КПТ).",
            hintKk: "Ортаны өзгертуді (нұқу) ойлауды өзгертумен (КМТ) біріктіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Some argue that psychology should remain a pure science focused on understanding behavior, not an applied field focused on changing it. Others argue the whole point of psychology is practical application. Evaluate both positions and argue for where the balance should lie.",
            questionRu: "Некоторые считают психологию чистой наукой, другие — что смысл в практическом применении. Где должен быть баланс?",
            questionKk: "Кейбіреулер психология таза ғылым болуы керек дейді, басқалары практикалық қолданудың мәні бар дейді. Теңгерім қайда болуы керек?",
            answer: "For pure science: 1) Rushing to application without understanding can be harmful — lobotomies, conversion therapy, and eugenics were all 'applied psychology' based on flawed science. Good application requires good theory first. 2) Basic research creates knowledge that enables multiple applications — understanding memory mechanisms (pure) led to spaced repetition learning techniques (applied). 3) Applied pressures can corrupt science — funding from companies may bias research toward profitable rather than truthful findings. For applied focus: 1) Psychology exists to help people — knowledge without application is academic self-indulgence while people suffer from treatable conditions. 2) Application tests theory — real-world results reveal whether theories actually work, improving science through feedback. 3) Funding and public support depend on demonstrated value — pure research that produces no tangible benefit struggles for resources. Balance: Psychology needs both, with a firewall between them. Basic research should be curiosity-driven without pressure for immediate application. Applied research should be evidence-based, drawing only from well-replicated findings. The feedback loop — pure discovers, applied tests, failures refine pure theory — makes both stronger.",
            answerRu: "За чистую науку: 1) Спешка с применением без понимания может навредить — лоботомии, конверсионная терапия и евгеника были «прикладной психологией», основанной на порочной науке. Хорошее применение сначала требует хорошей теории. 2) Фундаментальные исследования создают знания, дающие множество применений — понимание механизмов памяти (чистое) привело к техникам интервального повторения (прикладное). 3) Прикладное давление может испортить науку — финансирование компаниями может смещать исследования к прибыльным, а не правдивым результатам. За прикладной фокус: 1) Психология существует, чтобы помогать людям — знание без применения — академическая самоснисходительность, пока люди страдают от излечимых состояний. 2) Применение проверяет теорию — реальные результаты показывают, работают ли теории, улучшая науку через обратную связь. 3) Финансирование и общественная поддержка зависят от продемонстрированной ценности — чистые исследования без ощутимой пользы борются за ресурсы. Баланс: психологии нужно и то, и другое, с «файрволом» между ними. Фундаментальные исследования должны быть движимы любопытством без давления немедленного применения. Прикладные исследования должны опираться только на хорошо реплицированные выводы. Цикл обратной связи — чистая наука открывает, прикладная проверяет, неудачи уточняют чистую теорию — делает обе сильнее.",
            answerKk: "Таза ғылымды жақтайтын: 1) Түсінусіз қолдануға асығу зиян тигізуі мүмкін — лоботомия, конверсиялық терапия және евгеника бәрі кемшін ғылымға негізделген «қолданбалы психология» болды. Жақсы қолдану алдымен жақсы теорияны талап етеді. 2) Іргелі зерттеулер бірнеше қолдануға мүмкіндік беретін білім жасайды — жады механизмдерін түсіну (таза) аралықты қайталау оқыту техникаларына (қолданбалы) әкелді. 3) Қолданбалы қысым ғылымды бұзуы мүмкін — компаниялардың қаржыландыруы зерттеулерді шынайы емес, тиімді нәтижелерге қарай бұрмалауы мүмкін. Қолданбалы бағытты жақтайтын: 1) Психология адамдарға көмектесу үшін бар — қолдануссыз білім адамдар емделетін жағдайлардан зардап шеккенде академиялық өзімшілдік. 2) Қолдану теорияны тексереді — нақты нәтижелер теориялардың шынымен жұмыс істейтінін көрсетіп, кері байланыс арқылы ғылымды жақсартады. 3) Қаржыландыру мен қоғамдық қолдау көрсетілген құндылыққа байланысты — нақты пайда бермейтін таза зерттеулер ресурс үшін күреседі. Теңгерім: психологияға екеуі де керек, олардың арасында қорғаныс болуы керек. Іргелі зерттеулер жедел қолдану қысымынсыз қызығушылықпен басқарылуы керек. Қолданбалы зерттеулер тек жақсы қайталанған нәтижелерге сүйенуі керек. Кері байланыс циклі — таза ғылым ашады, қолданбалы тексереді, сәтсіздіктер таза теорияны нақтылайды — екеуін де күшейтеді.",
            hint: "Consider what happens when you apply findings that haven't been thoroughly tested, and what happens when you never apply them at all.",
            hintRu: "Подумайте о последствиях применения непроверенных выводов и о неприменении проверенных.",
            hintKk: "Жақсы тексерілмеген нәтижелерді қолданудың және тексерілгендерді ешқашан қолданбаудың салдарын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "EQ Portfolio",
        titleRu: "Портфолио EQ",
        titleKk: "EQ портфолиосы",
        content: "An EQ Portfolio is a reflective collection that documents your emotional intelligence development journey. It integrates self-awareness (recognizing your emotions and triggers), self-regulation (managing emotional responses), motivation (driving yourself toward goals), empathy (understanding others' emotions), and social skills (navigating relationships effectively). Building an EQ Portfolio requires honest self-assessment, evidence of growth, and actionable development plans — it is both a mirror and a roadmap for lifelong emotional intelligence development.",
        contentRu: "Портфолио EQ — рефлексивная коллекция, документирующая развитие эмоционального интеллекта. Оно интегрирует самосознание (распознавание эмоций и триггеров), саморегуляцию (управление реакциями), мотивацию (движение к целям), эмпатию (понимание чужих эмоций) и социальные навыки (навигация в отношениях). Построение портфолио требует честной самооценки, доказательств роста и планов развития.",
        contentKk: "EQ портфолиосы — эмоциялық интеллект дамуыңызды құжаттайтын рефлексивті жинақ. Ол өзін-өзі тану (эмоциялар мен триггерлерді тану), өзін-өзі реттеу (эмоциялық жауаптарды басқару), мотивация (мақсаттарға ұмтылу), эмпатия (басқалардың эмоцияларын түсіну) және әлеуметтік дағдылар (қарым-қатынастарда нәтижелі болу) біріктіреді. EQ портфолиосын құру адал өзін-өзі бағалауды, өсу дәлелдерін және даму жоспарларын талап етеді.",
        keyFormulas: [
          {
            formula: "EQ Portfolio Components: Self-Assessment + Growth Evidence + Reflection Journal + Development Plan + Peer Feedback",
            description: "Five elements that create a comprehensive emotional intelligence development record",
            descriptionRu: "Пять элементов комплексного документирования развития эмоционального интеллекта",
            descriptionKk: "Эмоциялық интеллект дамуын жан-жақты құжаттайтын бес элемент"
          },
          {
            formula: "Goleman's 5 EQ Domains: Self-Awareness + Self-Regulation + Motivation + Empathy + Social Skills",
            description: "Five domains of emotional intelligence that form the portfolio structure",
            descriptionRu: "Пять доменов эмоционального интеллекта, формирующих структуру портфолио",
            descriptionKk: "Портфолио құрылымын қалыптастыратын эмоциялық интеллекттің бес домені"
          }
        ],
        solvedExamples: [
          {
            question: "Create a sample EQ Portfolio entry for the 'Self-Regulation' domain, including a specific situation, your response, reflection, and improvement plan.",
            questionRu: "Создайте образец записи портфолио EQ для домена «Саморегуляция» с ситуацией, реакцией, рефлексией и планом улучшения.",
            questionKk: "«Өзін-өзі реттеу» домені үшін нақты жағдай, жауабыңыз, рефлексия және жақсарту жоспарын қамтитын EQ портфолиосының үлгі жазбасын жасаңыз.",
            steps: [
              { en: "Document the situation and response: Situation: During a group project, a teammate criticized my work harshly in front of everyone. My initial impulse was to snap back defensively. Instead, I took three deep breaths, said 'I'd like to hear your specific suggestions,' and addressed the feedback point by point after class.", ru: "Документируйте ситуацию: Во время группового проекта одноклассник резко раскритиковал мою работу при всех. Вместо защитной реакции я сделал три вдоха и попросил конкретные предложения.", kk: "Жағдайды құжаттаңыз: Топтық жобада сыныптас жұмысымды барлығының алдында қатты сынады. Қорғаныс реакциясының орнына үш рет терең дем алып, нақты ұсыныстарды сұрадым." },
              { en: "Reflect and plan: Reflection: I managed to regulate my anger in the moment, which is growth from six months ago when I would have argued back. However, I noticed my voice was tense and my body language was closed — I was controlling words but not yet controlling nonverbal signals. Improvement plan: Practice open body language during stressful conversations. Set a goal: in the next three feedback conversations, consciously maintain uncrossed arms and steady eye contact.", ru: "Рефлексия и план: Я смог контролировать гнев — рост по сравнению с полугодом назад. Но голос был напряжённым. План: практиковать открытый язык тела в стрессе. Цель: три следующих разговора с обратной связью — открытая поза.", kk: "Рефлексия мен жоспар: Ашуымды бақылай алдым — алты ай бұрынмен салыстырғанда өсу. Бірақ дауысым қатаң болды. Жоспар: стресс кезінде ашық дене тілін жаттығу. Мақсат: келесі үш кері байланыс сөйлесуде — ашық поза." }
            ],
            answer: "See the detailed steps above for the complete solution.",
            answerRu: "См. подробные шаги выше для полного решения.",
            answerKk: "Толық шешім үшін жоғарыдағы толық қадамдарды қараңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "List the five domains of Goleman's EQ model and give a one-sentence example of each in your daily life.",
            questionRu: "Назовите пять доменов модели EQ Гоулмана и приведите по одному примеру из повседневной жизни.",
            questionKk: "Голманның EQ моделінің бес доменін атаңыз және әрқайсысына күнделікті өмірден мысал келтіріңіз.",
            answer: "1) Self-Awareness: I noticed I get irritable when I skip lunch — recognizing hunger as an emotional trigger. 2) Self-Regulation: When my sibling annoyed me, I chose to take a walk instead of yelling. 3) Motivation: I studied for an extra hour despite being tired because my goal of getting into university matters to me. 4) Empathy: I noticed my friend was unusually quiet and asked if something was wrong, rather than assuming they were just tired. 5) Social Skills: I mediated a disagreement between two friends by listening to both sides and finding common ground.",
            answerRu: "1) Самосознание: я заметил, что раздражаюсь, пропуская обед — распознавание голода как эмоционального триггера. 2) Саморегуляция: когда брат/сестра раздражал(а) меня, я решил прогуляться вместо крика. 3) Мотивация: я учился ещё час, несмотря на усталость, потому что цель поступления в университет важна для меня. 4) Эмпатия: я заметил, что друг необычно молчалив, и спросил, всё ли в порядке, вместо того чтобы решить, что он просто устал. 5) Социальные навыки: я урегулировал разногласие между двумя друзьями, выслушав обе стороны и найдя общий язык.",
            answerKk: "1) Өзін-өзі тану: түскі асты өткізіп жібергенде ашуланшақ боламын — ашты эмоциялық триггер ретінде тану. 2) Өзін-өзі реттеу: бауырым мені ашуландырғанда, айқайлаудың орнына серуендеуді таңдадым. 3) Мотивация: шаршасам да, университетке түсу мақсатым маңызды болғандықтан, тағы бір сағат оқыдым. 4) Эмпатия: досымның әдеттен тыс үнсіз екенін байқап, жай ғана шаршады деп ойламай, бірдеңе болды ма деп сұрадым. 5) Әлеуметтік дағдылар: екі жақты да тыңдап, ортақ тіл табу арқылы екі достың арасындағы келіспеушілікті реттедім.",
            hint: "All five are things you already use — just name what you do naturally in each category.",
            hintRu: "Все пять вы уже используете — просто назовите, что делаете в каждой категории.",
            hintKk: "Бесеуін де қолданып жүрсіз — әр санаттағы табиғи іс-әрекетіңізді атаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write an EQ Portfolio entry for the 'Empathy' domain. Include a specific situation where you succeeded or struggled with empathy, your reflection on what happened, and one measurable goal for improvement.",
            questionRu: "Напишите запись портфолио EQ для домена «Эмпатия». Включите ситуацию, рефлексию и измеримую цель улучшения.",
            questionKk: "«Эмпатия» домені үшін EQ портфолио жазбасын жазыңыз. Жағдайды, рефлексияны және жақсартудың өлшенетін мақсатын қосыңыз.",
            answer: "Situation: My younger sibling was upset about not making the school basketball team. I initially said 'There are other things you're good at' (redirecting, not empathizing). They walked away looking more upset. Reflection: I minimized their pain instead of sitting with it. I was uncomfortable with their sadness and tried to 'fix' it rather than feel it with them. A better response would have been: 'That must be really disappointing — you practiced so hard for tryouts. I can see how much this meant to you.' Goal: For the next month, when someone shares a negative emotion with me, I will validate their feeling FIRST before offering any advice or perspective. I will track this in my journal — target: 4 out of 5 times.",
            answerRu: "Ситуация: младший брат/сестра расстроился, не попав в школьную баскетбольную команду. Я сначала сказал: «У тебя есть другие таланты» (перенаправление, а не эмпатия). Он/она ушёл(ушла) ещё более расстроенным(ой). Рефлексия: я преуменьшил его/её боль вместо того, чтобы побыть с ней. Мне было некомфортно с его/её грустью, и я попытался её «исправить», а не прочувствовать вместе с ним/ней. Лучшим ответом было бы: «Это, должно быть, очень обидно — ты так усердно готовился(ась) к отбору. Вижу, как много это для тебя значило». Цель: в следующем месяце, когда кто-то делится со мной негативной эмоцией, я сначала подтвержу его чувство, прежде чем давать совет или мнение. Буду отслеживать это в дневнике — цель: 4 из 5 раз.",
            answerKk: "Жағдай: кіші бауырым мектеп баскетбол командасына түсе алмай ренжіді. Алдымен «Сенің басқа да қабілеттерің бар» дедім (бағыттау, эмпатия емес). Ол одан сайын ренжіп кетті. Рефлексия: мен оның ауыртпалығымен бірге болудың орнына оны азайттым. Оның қайғысымен ыңғайсыз болдым және оны бірге сезінудің орнына «түзетуге» тырыстым. Жақсырақ жауап мынадай болар еді: «Бұл шынымен көңілсіз болды — сен іріктеуге сонша қатты дайындалдың. Бұл саған қаншалықты маңызды екенін көріп тұрмын». Мақсат: келесі ай ішінде біреу маған жағымсыз эмоциямен бөліскенде, кез келген кеңес немесе көзқарас ұсынбас бұрын, алдымен оның сезімін растаймын. Мұны күнделігімде қадағалаймын — мақсат: 5-тен 4 рет.",
            hint: "The best empathy entry shows a struggle or mistake, not just a success — growth comes from honest reflection.",
            hintRu: "Лучшая запись об эмпатии показывает ошибку — рост приходит из честной рефлексии.",
            hintKk: "Ең жақсы эмпатия жазбасы сәтсіздікті көрсетеді — өсу адал рефлексиядан келеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete EQ Portfolio structure for a graduating high school student. Include all five Goleman domains, specific assessment methods for each, a peer feedback mechanism, and explain how this portfolio could be used in university applications or job interviews.",
            questionRu: "Разработайте полную структуру портфолио EQ для выпускника школы. Включите пять доменов, методы оценки, механизм обратной связи и применение.",
            questionKk: "Мектеп түлегі үшін толық EQ портфолио құрылымын жобалаңыз. Бес доменді, бағалау әдістерін, кері байланыс механизмін және қолдану жолдарын қосыңыз.",
            answer: "EQ Portfolio Structure: Section 1 — Self-Assessment Baseline: Complete a validated EQ assessment (e.g., TEIQue or EQ-i) at the start and end of the year. Score each of Goleman's five domains 1-10 with written justification. Section 2 — Domain Entries (minimum 2 per domain, 10 total): Each entry includes: date, situation description, emotional response, outcome, reflection, and lessons learned. Self-Awareness entries: situations where you recognized your emotional triggers. Self-Regulation entries: times you managed impulses effectively (or failed and learned). Motivation entries: evidence of persisting through setbacks. Empathy entries: moments of understanding others' perspectives. Social Skills entries: examples of resolving conflicts, leading teams, or building relationships. Section 3 — Peer Feedback: Two peers complete anonymous assessments rating your EQ in each domain with specific examples. This cross-validates your self-assessment. Section 4 — Growth Metrics: Compare baseline and final assessments. Document measurable improvement (e.g., 'reduced angry outbursts from 3/week to 1/month'). Section 5 — Development Plan: For each domain, one specific SMART goal for the next year. Application: In university essays, specific EQ entries demonstrate character and growth more powerfully than abstract claims. In job interviews, concrete examples of self-regulation under pressure or empathetic leadership are directly relevant to behavioral interview questions ('Tell me about a time when...'). The portfolio provides ready-made, reflected-upon answers.",
            answerRu: "Структура портфолио EQ: Раздел 1 — Базовая самооценка: пройти валидированную оценку EQ (например, TEIQue или EQ-i) в начале и конце года. Оценить каждый из пяти доменов Гоулмана 1-10 с письменным обоснованием. Раздел 2 — Записи по доменам (минимум 2 на домен, всего 10): каждая запись включает: дату, описание ситуации, эмоциональную реакцию, результат, рефлексию и извлечённые уроки. Записи самосознания: ситуации распознавания эмоциональных триггеров. Записи саморегуляции: случаи эффективного управления импульсами (или неудачи и уроки). Записи мотивации: свидетельства настойчивости через неудачи. Записи эмпатии: моменты понимания чужой точки зрения. Записи социальных навыков: примеры разрешения конфликтов, лидерства в командах или построения отношений. Раздел 3 — Обратная связь от сверстников: два сверстника проходят анонимную оценку вашего EQ по каждому домену с конкретными примерами. Это перепроверяет вашу самооценку. Раздел 4 — Метрики роста: сравнение базовой и финальной оценок. Документирование измеримого улучшения (например, «снижение вспышек гнева с 3/неделю до 1/месяц»). Раздел 5 — План развития: для каждого домена — одна конкретная SMART-цель на следующий год. Применение: в университетских эссе конкретные записи EQ демонстрируют характер и рост убедительнее абстрактных заявлений. На собеседованиях конкретные примеры саморегуляции под давлением или эмпатичного лидерства напрямую релевантны поведенческим вопросам собеседования («Расскажите о случае, когда...»). Портфолио даёт готовые, продуманные ответы.",
            answerKk: "EQ портфолиосының құрылымы: 1-бөлім — Бастапқы өзін-өзі бағалау: жыл басы мен соңында валидтелген EQ бағалауын (мысалы, TEIQue немесе EQ-i) өту. Голманның бес доменінің әрқайсысын жазбаша негіздемемен 1-10 бағалау. 2-бөлім — Домен жазбалары (әр доменге кемінде 2, барлығы 10): әр жазба мыналарды қамтиды: күні, жағдай сипаттамасы, эмоциялық жауап, нәтиже, рефлексия және алынған сабақтар. Өзін-өзі тану жазбалары: эмоциялық триггерлерді тану жағдайлары. Өзін-өзі реттеу жазбалары: импульстарды тиімді басқарған (немесе сәтсіз болып, үйренген) жағдайлар. Мотивация жазбалары: кедергілерден өту дәлелдері. Эмпатия жазбалары: басқалардың көзқарасын түсіну сәттері. Әлеуметтік дағдылар жазбалары: жанжалдарды шешу, топтарды басқару немесе қарым-қатынас құру мысалдары. 3-бөлім — Құрдастар кері байланысы: екі құрдас нақты мысалдармен әр доменде EQ-ыңызды анонимді бағалайды. Бұл өзін-өзі бағалауды өзара тексереді. 4-бөлім — Өсу көрсеткіштері: бастапқы және соңғы бағалауларды салыстыру. Өлшенетін жақсартуды құжаттау (мысалы, «ашулы жарылыстарды аптасына 3-тен айына 1-ге дейін азайту»). 5-бөлім — Даму жоспары: әр доменге келесі жылға арналған бір нақты SMART мақсат. Қолдану: университет эсселерінде нақты EQ жазбалары дерексіз мәлімдемелерден гөрі мінез бен өсуді күштірек көрсетеді. Жұмысқа сұхбатта қысым астындағы өзін-өзі реттеудің немесе эмпатиялық көшбасшылықтың нақты мысалдары мінез-құлықтық сұхбат сұрақтарына тікелей қатысты («Мынадай жағдай туралы айтып беріңізші...»). Портфолио дайын, ойластырылған жауаптар береді.",
            hint: "Think about what would make this portfolio genuinely useful — both for personal growth and as a professional document.",
            hintRu: "Подумайте, что сделает портфолио действительно полезным — для личного роста и как профессиональный документ.",
            hintKk: "Портфолионы шынымен пайдалы ететін нәрсені ойлаңыз — жеке өсу үшін де, кәсіби құжат ретінде де.",
            xp: 20
          }
        ]
      }
    ]
  },
};
