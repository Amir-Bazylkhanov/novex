import type { LessonContent } from '../lessonData.ts';

export const PRODUCTIVITY_FULL: Record<string, LessonContent> = {
  "Productivity & Learning Systems_8": {
    planetName: "Productivity & Learning Systems",
    introduction: {
      en: "Welcome to Productivity & Learning Systems for Grade 8! Build foundational habits for homework, note-taking, reading, and test preparation that will set you up for academic success.",
      ru: "Добро пожаловать в Продуктивность и системы обучения для 8 класса! Сформируйте базовые привычки для домашних заданий, конспектирования, чтения и подготовки к тестам, которые обеспечат вам академический успех."
    },
    sections: [
      {
        title: "Homework Routines",
        titleRu: "Режим домашних заданий",
        titleKk: "Үй тапсырмасының тәртібі",
        content: "A consistent homework routine trains your brain to focus automatically at the same time each day. Choose a fixed time and quiet place, then list all tasks before starting so you know exactly what to do. Tackle the hardest subject first while your energy is highest.",
        contentRu: "Постоянный режим домашних заданий приучает мозг автоматически концентрироваться в одно и то же время каждый день. Выберите фиксированное время и тихое место, затем перечислите все задачи перед началом. Беритесь за самый сложный предмет первым, пока энергия на высоте.",
        contentKk: "Тұрақты үй тапсырмасы тәртібі миыңызды күн сайын бір уақытта автоматты түрде зейін қоюға үйретеді. Белгілі бір уақыт пен тыныш орын таңдаңыз, содан кейін бастамас бұрын барлық тапсырмаларды тізіңіз. Энергияңыз жоғары кезде ең қиын пәнді бірінші орындаңыз.",
        keyFormulas: [
          {
            formula: "Fixed Time + Fixed Place + Task List = Automatic Study Habit",
            description: "The three pillars of a homework routine",
            descriptionRu: "Три столпа режима домашних заданий",
            descriptionKk: "Үй тапсырмасы тәртібінің үш тірегі"
          },
          {
            formula: "Hardest First → Easiest Last",
            description: "Do demanding work when energy is highest",
            descriptionRu: "Выполняйте сложную работу при максимальной энергии",
            descriptionKk: "Энергия жоғары кезде қиын жұмысты орындаңыз"
          }
        ],
        solvedExamples: [
          {
            question: "You have math (40 min), English (20 min), and science (15 min). You sit down at 4 PM. Plan your session with 5-minute breaks.",
            questionRu: "У вас математика (40 мин), английский (20 мин) и наука (15 мин). Вы садитесь в 16:00. Спланируйте сессию с 5-минутными перерывами.",
            questionKk: "Сізде математика (40 мин), ағылшын (20 мин) және жаратылыстану (15 мин) бар. Сағат 16:00-де отырасыз. 5 минуттық үзілістермен сабақты жоспарлаңыз.",
            steps: [
              { en: "Order by difficulty: Math (hardest) first, then science, then English.", ru: "Порядок по сложности: математика (самая сложная) первой, потом наука, потом английский.", kk: "Қиындығы бойынша: математика (ең қиын) бірінші, содан кейін жаратылыстану, содан кейін ағылшын." },
              { en: "Schedule: 4:00–4:40 Math, 4:40–4:45 break, 4:45–5:00 Science, 5:00–5:05 break, 5:05–5:25 English. Done by 5:25 PM.", ru: "Расписание: 16:00–16:40 математика, 16:40–16:45 перерыв, 16:45–17:00 наука, 17:00–17:05 перерыв, 17:05–17:25 английский. Готово к 17:25.", kk: "Кесте: 16:00–16:40 математика, 16:40–16:45 үзіліс, 16:45–17:00 жаратылыстану, 17:00–17:05 үзіліс, 17:05–17:25 ағылшын. 17:25-ке дейін аяқталады." }
            ],
            answer: "Math 4:00–4:40, break, Science 4:45–5:00, break, English 5:05–5:25. Finish by 5:25 PM.",
            answerRu: "Математика 4:00–4:40, перерыв, наука 4:45–5:00, перерыв, английский 5:05–5:25. Закончить к 5:25 PM.",
            answerKk: "Математика 4:00–4:40, үзіліс, жаратылыстану 4:45–5:00, үзіліс, ағылшын 5:05–5:25. 5:25 PM-ға дейін аяқталады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three elements of a good homework routine?",
            questionRu: "Какие три элемента хорошего режима домашних заданий?",
            questionKk: "Жақсы үй тапсырмасы тәртібінің үш элементі қандай?",
            answer: "Fixed time, fixed place, and a task list before starting.",
            answerRu: "Фиксированное время, фиксированное место и список задач перед началом.",
            answerKk: "Тұрақты уақыт, тұрақты орын және бастар алдында тапсырмалар тізімі.",
            hint: "Think about when, where, and what.",
            hintRu: "Подумайте о когда, где и что.",
            hintKk: "Қашан, қайда және не екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have 3 subjects tonight: history (easy, 15 min), chemistry (hard, 35 min), and literature (medium, 25 min). In what order should you do them and why?",
            questionRu: "Сегодня у вас 3 предмета: история (лёгкий, 15 мин), химия (сложный, 35 мин) и литература (средний, 25 мин). В каком порядке их выполнять и почему?",
            questionKk: "Бүгін 3 пәніңіз бар: тарих (жеңіл, 15 мин), химия (қиын, 35 мин) және әдебиет (орташа, 25 мин). Оларды қай ретпен орындау керек және неліктен?",
            answer: "Chemistry first (hardest, needs most energy), then literature (medium), then history (easiest). This uses your peak energy for the toughest task.",
            answerRu: "Сначала химия (самая сложная, требует больше всего энергии), затем литература (средняя), затем история (самая лёгкая). Так ваша пиковая энергия уходит на самую трудную задачу.",
            answerKk: "Алдымен химия (ең қиын, ең көп энергия қажет), содан кейін әдебиет (орташа), содан кейін тарих (ең жеңіл). Сөйтіп ең қиын тапсырманы энергияңыз ең жоғары кезде орындайсыз.",
            hint: "Which subject needs the most brainpower?",
            hintRu: "Какой предмет требует больше всего умственных усилий?",
            hintKk: "Қай пән ең көп ой жұмысын қажет етеді?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a weekly homework routine for a student who has soccer practice Mon/Wed/Fri from 4–5:30 PM and free afternoons on Tue/Thu. They average 90 minutes of homework per night.",
            questionRu: "Разработайте недельный режим для ученика, у которого футбол Пн/Ср/Пт с 16:00 до 17:30, а Вт/Чт — свободные. Среднее время на уроки — 90 минут в день.",
            questionKk: "Дс/Ср/Жм 16:00–17:30 футбол жаттығуы бар және Сс/Бс түстен кейін бос оқушыға апталық үй тапсырмасы тәртібін жасаңыз. Күніне орташа 90 минут үй тапсырмасы.",
            answer: "Tue/Thu: start homework at 4 PM (fresh energy, finish by 5:30). Mon/Wed/Fri: start at 6 PM after practice and a snack, finish by 7:30 PM. Weekend: review and catch up on any missed work.",
            answerRu: "Вт/Чт: начинать домашние задания в 4 PM (свежая энергия, закончить к 5:30). Пн/Ср/Пт: начинать в 6 PM после тренировки и перекуса, закончить к 7:30 PM. Выходные: повторение и наверстывание пропущенного.",
            answerKk: "Сс/Бс: үй тапсырмасын 4 PM-да бастау (жаңа энергия, 5:30-ға дейін аяқтау). Дс/Ср/Жм: жаттығу мен тағамнан кейін 6 PM-да бастау, 7:30 PM-ға дейін аяқтау. Демалыс күндері: қайталау және өткізіп алғанды толықтыру.",
            hint: "Adjust the start time around soccer practice and remember to allow time for rest after exercise.",
            hintRu: "Скорректируйте время начала с учётом тренировки и отдыха после неё.",
            hintKk: "Бастау уақытын футбол жаттығуына қарай реттеңіз және жаттығудан кейін демалуға уақыт қалдырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Organized Workspace",
        titleRu: "Организованное рабочее место",
        titleKk: "Ұйымдасқан жұмыс орны",
        content: "A clean, organized workspace reduces distractions and helps you focus faster. Keep only what you need for the current task on your desk — textbook, notebook, and one pen. Put your phone in another room or turn it face-down to avoid notifications pulling your attention away.",
        contentRu: "Чистое, организованное рабочее место уменьшает отвлечения и помогает быстрее сосредоточиться. Держите на столе только то, что нужно для текущей задачи — учебник, тетрадь и одну ручку. Уберите телефон в другую комнату или положите экраном вниз.",
        contentKk: "Таза, ұйымдасқан жұмыс орны алаңдауды азайтады және тезірек зейін қоюға көмектеседі. Үстелде тек ағымдағы тапсырмаға қажет нәрсені сақтаңыз — оқулық, дәптер және бір қалам. Телефонды басқа бөлмеге қойыңыз немесе экранын төмен қаратыңыз.",
        keyFormulas: [
          {
            formula: "Clear Desk + Phone Away = Focused Mind",
            description: "Minimize visual and digital distractions",
            descriptionRu: "Минимизируйте визуальные и цифровые отвлечения",
            descriptionKk: "Визуалды және цифрлық алаңдауды азайтыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "Maria's desk has textbooks from 5 subjects, snacks, her phone, headphones, and art supplies. She needs to study math. What should she change?",
            questionRu: "На столе Марии учебники по 5 предметам, перекусы, телефон, наушники и принадлежности для рисования. Ей нужно учить математику. Что ей изменить?",
            questionKk: "Марияның үстелінде 5 пәннің оқулықтары, тағам, телефон, құлақаспап және сурет салу құралдары бар. Оған математика оқу керек. Нені өзгерту керек?",
            steps: [
              { en: "Remove everything not related to math: other textbooks, art supplies, and snacks go to a shelf or drawer.", ru: "Уберите всё, не связанное с математикой: другие учебники, арт-принадлежности и перекусы — на полку или в ящик.", kk: "Математикаға қатысы жоқ нәрсені алыңыз: басқа оқулықтар, сурет құралдары мен тағамды сөреге немесе жәшікке қойыңыз." },
              { en: "Put her phone in another room and keep only the math textbook, notebook, calculator, and one pen on the desk.", ru: "Положите телефон в другую комнату и оставьте только учебник по математике, тетрадь, калькулятор и одну ручку.", kk: "Телефонды басқа бөлмеге қойыңыз, үстелде тек математика оқулығын, дәптерді, калькуляторды және бір қаламды қалдырыңыз." }
            ],
            answer: "Keep only math textbook, notebook, calculator, and one pen. Remove all other items and put phone in another room.",
            answerRu: "Оставьте только учебник по математике, тетрадь, калькулятор и одну ручку. Уберите все остальные предметы и положите телефон в другую комнату.",
            answerKk: "Тек математика оқулығын, дәптерді, калькуляторды және бір қаламды қалдырыңыз. Басқа заттардың бәрін алып тастап, телефонды басқа бөлмеге қойыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name two things you should remove from your desk before studying.",
            questionRu: "Назовите две вещи, которые нужно убрать со стола перед учёбой.",
            questionKk: "Оқу алдында үстелден алып тастау керек екі затты атаңыз.",
            answer: "Phone and unrelated textbooks (or any other distracting items like snacks, toys, etc.).",
            answerRu: "Телефон и ненужные учебники (или любые другие отвлекающие предметы: перекусы, игрушки и т. д.).",
            answerKk: "Телефон және қатысы жоқ оқулықтар (немесе тағам, ойыншық сияқты кез келген алаңдататын заттар).",
            hint: "What pulls your attention away from studying?",
            hintRu: "Что отвлекает ваше внимание от учёбы?",
            hintKk: "Не сіздің зейініңізді оқудан алаңдатады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend studies on the couch with the TV on and says they can multitask. Explain why a dedicated workspace is more effective.",
            questionRu: "Ваш друг учится на диване с включённым телевизором и говорит, что может делать несколько дел одновременно. Объясните, почему отдельное рабочее место эффективнее.",
            questionKk: "Досыңыз теледидар қосулы диванда оқиды және бірнеше іс жасай алатынын айтады. Неліктен арнайы жұмыс орны тиімдірек екенін түсіндіріңіз.",
            answer: "Research shows the brain cannot truly multitask — it switches between tasks, losing time and accuracy each switch. A dedicated workspace with no TV trains the brain to associate that space with focus, making studying faster and more effective.",
            answerRu: "Исследования показывают, что мозг не способен на настоящую многозадачность — он переключается между задачами, теряя время и точность при каждом переключении. Специальное рабочее место без телевизора приучает мозг ассоциировать это пространство с концентрацией, делая учёбу быстрее и эффективнее.",
            answerKk: "Зерттеулер ми шынымен көп тапсырма орындай алмайтынын көрсетеді — ол тапсырмалар арасында ауысады, әр ауысуда уақыт пен дәлдікті жоғалтады. Теледидарсыз арнайы жұмыс орны миды ол кеңістікті зейін қоюмен байланыстыруға үйретеді, оқуды жылдам әрі тиімді етеді.",
            hint: "Does the brain really do two things at once, or does it switch?",
            hintRu: "Мозг действительно делает два дела одновременно или переключается?",
            hintKk: "Ми шынымен екі нәрсені бірден жасай ма, әлде ауысады ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You share a room with a sibling who watches videos while you need to study. Design a solution that works for both of you without causing conflict.",
            questionRu: "Вы делите комнату с братом/сестрой, который смотрит видео, пока вам нужно учиться. Найдите решение, подходящее обоим без конфликта.",
            questionKk: "Сіз бейне көретін бауырыңызбен бір бөлмені бөлісесіз, ал сіз оқуыңыз керек. Екеуіңізге де жанжалсыз жарайтын шешім табыңыз.",
            answer: "Options: agree on quiet study hours (e.g., 4–6 PM), sibling uses headphones during study time, use a room divider or study at the kitchen table, or alternate — one studies while the other takes a break. Communication and compromise are key.",
            answerRu: "Варианты: договориться о тихих часах для учёбы (например, 4–6 PM), брат/сестра использует наушники во время учёбы, использовать перегородку или учиться за кухонным столом, или чередовать — один учится, пока другой отдыхает. Общение и компромисс — ключ к решению.",
            answerKk: "Нұсқалар: тыныш оқу сағаттары туралы келісу (мысалы, 4–6 PM), бауырыңыз оқу уақытында құлақаспап қолданады, бөлме пердесін пайдалану немесе ас үй үстелінде оқу, не кезектесу — біреуі оқиды, екіншісі демалады. Қарым-қатынас пен ымыраға келу — басты кілт.",
            hint: "Think about time-sharing, headphones, or finding an alternative study spot.",
            hintRu: "Подумайте о распределении времени, наушниках или альтернативном месте для учёбы.",
            hintKk: "Уақытты бөлісу, құлақаспап немесе балама оқу орны туралы ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Note-Taking Basics",
        titleRu: "Основы конспектирования",
        titleKk: "Жазба жасаудың негіздері",
        content: "Good notes are a learning tool, not just a record. Write key ideas in your own words instead of copying the teacher word-for-word — this forces your brain to process the information. Use headings and bullet points to organize your notes so they are easy to review later.",
        contentRu: "Хорошие конспекты — это инструмент обучения, а не просто запись. Записывайте ключевые идеи своими словами вместо дословного копирования — это заставляет мозг обрабатывать информацию. Используйте заголовки и маркированные списки для организации заметок.",
        contentKk: "Жақсы жазбалар — тек жазба емес, оқу құралы. Мұғалімнің сөзін сөзбе-сөз көшірудің орнына негізгі идеяларды өз сөзіңізбен жазыңыз — бұл миыңызды ақпаратты өңдеуге мәжбүрлейді. Жазбаларыңызды реттеу үшін тақырыптар мен таңбалы тізімдерді қолданыңыз.",
        keyFormulas: [
          {
            formula: "Listen → Process → Write in Own Words",
            description: "Active note-taking cycle that aids memory",
            descriptionRu: "Цикл активного конспектирования для улучшения памяти",
            descriptionKk: "Есте сақтауды жақсартатын белсенді жазба жасау циклі"
          },
          {
            formula: "Headings + Bullets + Key Terms = Scannable Notes",
            description: "Structured format makes review efficient",
            descriptionRu: "Структурированный формат делает повторение эффективным",
            descriptionKk: "Құрылымдалған пішім қайталауды тиімді етеді"
          }
        ],
        solvedExamples: [
          {
            question: "A teacher explains: 'Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. It happens in the chloroplasts.' Write concise notes from this.",
            questionRu: "Учитель объясняет: «Фотосинтез — это процесс, при котором растения превращают солнечный свет, воду и углекислый газ в глюкозу и кислород. Происходит в хлоропластах.» Напишите краткий конспект.",
            questionKk: "Мұғалім түсіндіреді: «Фотосинтез — өсімдіктердің күн сәулесін, суды және көмірқышқыл газын глюкоза мен оттекке айналдыру процесі. Хлоропласттарда жүреді.» Қысқаша жазба жасаңыз.",
            steps: [
              { en: "Identify the key concept and its definition: Photosynthesis = plants make food from sunlight.", ru: "Определите ключевое понятие: фотосинтез = растения создают пищу из солнечного света.", kk: "Негізгі ұғымды анықтаңыз: фотосинтез = өсімдіктер күн сәулесінен тағам жасайды." },
              { en: "Write in own words with structure: 'Photosynthesis — sunlight + water + CO₂ → glucose + O₂. Location: chloroplasts.'", ru: "Запишите своими словами: «Фотосинтез — свет + вода + CO₂ → глюкоза + O₂. Место: хлоропласты.»", kk: "Өз сөзіңізбен жазыңыз: «Фотосинтез — жарық + су + CO₂ → глюкоза + O₂. Орны: хлоропласттар.»" }
            ],
            answer: "Photosynthesis — sunlight + water + CO₂ → glucose + O₂. Location: chloroplasts.",
            answerRu: "Фотосинтез — солнечный свет + вода + CO₂ → глюкоза + O₂. Место: хлоропласты.",
            answerKk: "Фотосинтез — күн сәулесі + су + CO₂ → глюкоза + O₂. Орны: хлоропласттар."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you write notes in your own words instead of copying the teacher exactly?",
            questionRu: "Почему нужно записывать конспекты своими словами, а не копировать учителя дословно?",
            questionKk: "Неліктен жазбаларды мұғалімді сөзбе-сөз көшірудің орнына өз сөзіңізбен жазу керек?",
            answer: "Writing in your own words forces your brain to process and understand the information, which improves memory and comprehension.",
            answerRu: "Запись своими словами заставляет мозг обрабатывать и понимать информацию, что улучшает память и понимание.",
            answerKk: "Өз сөзіңізбен жазу миыңызды ақпаратты өңдеуге және түсінуге мәжбүрлейді, бұл есте сақтау мен түсінуді жақсартады.",
            hint: "Think about what your brain does when you rephrase something.",
            hintRu: "Подумайте, что делает мозг, когда вы перефразируете.",
            hintKk: "Бір нәрсені қайта тұжырымдағанда миыңыз не істейтінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend shows you their notes — it is three pages of solid text with no headings or bullet points. Suggest two specific improvements.",
            questionRu: "Друг показывает свои заметки — три страницы сплошного текста без заголовков и маркеров. Предложите два конкретных улучшения.",
            questionKk: "Досыңыз жазбаларын көрсетеді — тақырыпсыз және таңбасыз үш бет тұтас мәтін. Екі нақты жақсарту ұсыныңыз.",
            answer: "1) Add headings for each topic or subtopic to break the text into sections. 2) Use bullet points for key facts so they stand out during review.",
            answerRu: "1) Добавьте заголовки для каждой темы или подтемы, чтобы разбить текст на разделы. 2) Используйте маркированные списки для ключевых фактов, чтобы они выделялись при повторении.",
            answerKk: "1) Мәтінді бөлімдерге бөлу үшін әр тақырыпқа немесе тақырыпшаға тақырып қосыңыз. 2) Қайталау кезінде ерекшеленуі үшін негізгі фактілерге таңбалы тізімдер қолданыңыз.",
            hint: "What makes notes easy to scan quickly before a test?",
            hintRu: "Что делает заметки удобными для быстрого просмотра перед тестом?",
            hintKk: "Тесттің алдында жазбаларды тез қарауды не жеңілдетеді?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "During a fast-paced history lecture, you cannot write everything down. Develop a strategy to capture the most important information without falling behind.",
            questionRu: "На быстрой лекции по истории вы не успеваете всё записать. Разработайте стратегию для захвата самой важной информации без отставания.",
            questionKk: "Жылдам тарих лекциясында бәрін жазып үлгермейсіз. Артта қалмай ең маңызды ақпаратты алу стратегиясын жасаңыз.",
            answer: "Use abbreviations and symbols (→ for leads to, w/ for with, etc.), write only key terms and dates, leave gaps to fill in later, and review notes within 24 hours to complete missing parts while memory is fresh.",
            answerRu: "Используйте сокращения и символы (→ — «ведёт к», w/ — «с» и т. д.), записывайте только ключевые термины и даты, оставляйте пробелы, чтобы заполнить позже, и повторите конспект в течение 24 часов, чтобы дополнить пропущенное, пока память свежа.",
            answerKk: "Қысқартулар мен белгілерді пайдаланыңыз (→ «әкеледі», w/ «бірге» дегенді білдіреді және т.б.), тек негізгі терминдер мен даталарды жазыңыз, кейін толтыру үшін бос орын қалдырыңыз және жадыңыз жаңа кезде 24 сағат ішінде жазбаларды қарап, жетіспейтін тұстарын толықтырыңыз.",
            hint: "You do not need to write full sentences — what shortcuts can you use?",
            hintRu: "Полные предложения не нужны — какие сокращения можно использовать?",
            hintKk: "Толық сөйлемдер жазу міндет емес — қандай қысқартулар қолдануға болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Flashcard Method",
        titleRu: "Метод карточек",
        titleKk: "Карточка әдісі",
        content: "Flashcards are one of the most effective memorization tools because they use active recall — you must retrieve the answer from memory rather than just re-reading it. Write one question or term per card with the answer on the back. Shuffle the deck each time to prevent order-based memorization.",
        contentRu: "Карточки — один из самых эффективных инструментов запоминания, потому что используют активное припоминание — вы должны извлечь ответ из памяти, а не просто перечитать. Пишите один вопрос или термин на карточке с ответом на обороте. Перемешивайте колоду каждый раз.",
        contentKk: "Карточкалар ең тиімді есте сақтау құралдарының бірі, өйткені олар белсенді еске түсіруді пайдаланады — жауапты жай қайта оқудың орнына есіңізден алуыңыз керек. Әр карточкаға бір сұрақ немесе термин жазып, жауабын артқы жағына жазыңыз. Реттік есте сақтауды болдырмау үшін әр жолы араластырыңыз.",
        keyFormulas: [
          {
            formula: "One Question per Card + Shuffle Each Session = Effective Recall",
            description: "Flashcard best practices for memory",
            descriptionRu: "Лучшие практики карточек для памяти",
            descriptionKk: "Есте сақтау үшін карточканың ең жақсы тәжірибесі"
          }
        ],
        solvedExamples: [
          {
            question: "You need to memorize 20 vocabulary words for a test in 3 days. How should you use flashcards effectively?",
            questionRu: "Вам нужно выучить 20 слов к тесту за 3 дня. Как эффективно использовать карточки?",
            questionKk: "Тестке 3 күнде 20 сөз жаттау керек. Карточкаларды қалай тиімді пайдалану керек?",
            steps: [
              { en: "Day 1: Make all 20 cards. Study them all, then separate into 'know' and 'don't know' piles. Focus on the 'don't know' pile.", ru: "День 1: Сделайте все 20 карточек. Изучите все, разделите на «знаю» и «не знаю». Сосредоточьтесь на «не знаю».", kk: "1-күн: 20 карточканы жасаңыз. Бәрін оқыңыз, «білемін» және «білмеймін» деп бөліңіз. «Білмеймін» тобына зейін қойыңыз." },
              { en: "Days 2–3: Review all cards shuffled. Move mastered cards out. By test day, you should cycle through the full deck with few errors.", ru: "Дни 2–3: Повторяйте все карточки в перемешанном виде. Отложите выученные. К тесту вы должны пройти всю колоду с малым числом ошибок.", kk: "2–3 күн: Барлық карточкаларды араластырып қайталаңыз. Жаттағандарын бөлек қойыңыз. Тест күніне дейін аз қатемен бүкіл жинақты аяқтауыңыз керек." }
            ],
            answer: "Make cards on Day 1, sort into know/don't-know piles, focus on weak cards, and review shuffled deck daily until the test.",
            answerRu: "Сделайте карточки в День 1, разделите на стопки «знаю»/«не знаю», сосредоточьтесь на слабых карточках и повторяйте перемешанную колоду ежедневно до теста.",
            answerKk: "1-күні карточкаларды жасаңыз, «білемін»/«білмеймін» топтарына бөліңіз, әлсіз карточкаларға зейін қойыңыз және тестке дейін щодана араластырылған жинақты қайталаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you shuffle your flashcards each time you study?",
            questionRu: "Почему нужно перемешивать карточки каждый раз при повторении?",
            questionKk: "Неліктен карточкаларды әр оқу кезінде араластыру керек?",
            answer: "Shuffling prevents you from memorizing the order of cards instead of the actual content.",
            answerRu: "Перемешивание не даёт запомнить порядок карточек вместо их реального содержания.",
            answerKk: "Араластыру карточкалардың ретін нақты мазмұнының орнына жаттап алудың алдын алады.",
            hint: "What happens if you always see Card 1 before Card 2?",
            hintRu: "Что произойдёт, если вы всегда видите карточку 1 перед карточкой 2?",
            hintKk: "Әрқашан 1-карточканы 2-карточкадан бұрын көрсеңіз не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have 50 flashcards but only 15 minutes to study. How do you prioritize which cards to review?",
            questionRu: "У вас 50 карточек, но только 15 минут на учёбу. Как определить приоритетные карточки?",
            questionKk: "Сізде 50 карточка бар, бірақ оқуға тек 15 минут. Қай карточкаларды қарауды қалай басымдыққа қоясыз?",
            answer: "Focus on the cards you got wrong last time (your weak spots). Quickly flip through the ones you know to confirm, then spend most time on the difficult cards.",
            answerRu: "Сосредоточьтесь на карточках, в которых ошиблись в прошлый раз (ваши слабые места). Быстро просмотрите те, что знаете, для подтверждения, а затем уделите большую часть времени сложным карточкам.",
            answerKk: "Алдыңғы жолы қате жауап берген карточкаларға (әлсіз тұстарыңызға) зейін қойыңыз. Білетіндеріңізді растау үшін жылдам қарап шығыңыз, содан кейін көп уақытты қиын карточкаларға жұмсаңыз.",
            hint: "Which cards need the most attention — the ones you know or the ones you struggle with?",
            hintRu: "Какие карточки требуют больше внимания — те, которые вы знаете, или те, с которыми трудности?",
            hintKk: "Қай карточкаларға көбірек назар аудару керек — білетіндеріңізге ме, қиындық тудыратындарға ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare flashcards to re-reading your textbook as study methods. Which is more effective for a test and why? Give two reasons.",
            questionRu: "Сравните карточки с перечитыванием учебника. Что эффективнее для теста и почему? Приведите две причины.",
            questionKk: "Карточкаларды оқулықты қайта оқумен салыстырыңыз. Тест үшін қайсысы тиімдірек және неліктен? Екі себеп келтіріңіз.",
            answer: "Flashcards are more effective: 1) They use active recall (retrieving answers strengthens memory more than passive re-reading). 2) They let you identify weak spots — you can sort cards into known and unknown piles, while re-reading treats all material equally.",
            answerRu: "Карточки эффективнее: 1) Они используют активное припоминание (извлечение ответов укрепляет память сильнее, чем пассивное перечитывание). 2) Они позволяют выявить слабые места — карточки можно разделить на известные и неизвестные стопки, тогда как перечитывание воспринимает весь материал одинаково.",
            answerKk: "Карточкалар тиімдірек: 1) Олар белсенді еске түсіруді пайдаланады (жауаптарды естен алу жадыны пассивті қайта оқудан гөрі көбірек нығайтады). 2) Олар әлсіз тұстарды анықтауға мүмкіндік береді — карточкаларды білетін және білмейтін топтарға бөлуге болады, ал қайта оқу барлық материалды бірдей қарастырады.",
            hint: "Think about what your brain does during each method — retrieving vs. recognizing.",
            hintRu: "Подумайте, что мозг делает при каждом методе — извлечение vs. узнавание.",
            hintKk: "Әр әдіс кезінде ми не істейтінін ойлаңыз — еске түсіру мен тану.",
            xp: 20
          }
        ]
      },
      {
        title: "Reading Strategies",
        titleRu: "Стратегии чтения",
        titleKk: "Оқу стратегиялары",
        content: "Effective reading is not about speed — it is about comprehension. Before reading, scan headings and bold words to preview the content. While reading, pause at the end of each paragraph to summarize the main idea in one sentence. This simple habit dramatically improves understanding and retention.",
        contentRu: "Эффективное чтение — это не скорость, а понимание. Перед чтением просмотрите заголовки и выделенные слова для предварительного обзора. Во время чтения останавливайтесь в конце каждого абзаца, чтобы резюмировать главную мысль одним предложением. Это резко улучшает понимание и запоминание.",
        contentKk: "Тиімді оқу жылдамдық емес — түсіну. Оқу алдында тақырыптар мен қалың сөздерді қарап шығыңыз. Оқу кезінде әр абзацтың соңында негізгі идеяны бір сөйлеммен қорытыңыз. Бұл қарапайым әдет түсіну мен есте сақтауды күрт жақсартады.",
        keyFormulas: [
          {
            formula: "Preview → Read → Pause → Summarize = Deep Comprehension",
            description: "Four-step active reading cycle",
            descriptionRu: "Четырёхшаговый цикл активного чтения",
            descriptionKk: "Белсенді оқудың төрт қадамдық циклі"
          }
        ],
        solvedExamples: [
          {
            question: "You need to read a 10-page science chapter. Apply the Preview-Read-Summarize strategy.",
            questionRu: "Вам нужно прочитать главу по науке на 10 страниц. Примените стратегию предварительный просмотр — чтение — резюмирование.",
            questionKk: "10 беттік жаратылыстану тарауын оқу керек. Алдын ала қарау — оқу — қорытындылау стратегиясын қолданыңыз.",
            steps: [
              { en: "Preview: Spend 2 minutes scanning all headings, bold terms, and diagrams to get the big picture of the chapter.", ru: "Предварительный просмотр: потратьте 2 минуты на заголовки, выделенные термины и диаграммы для общей картины.", kk: "Алдын ала қарау: тарауды жалпы түсіну үшін тақырыптарды, қалың терминдерді және диаграммаларды 2 минут қараңыз." },
              { en: "Read each section actively: after each paragraph, pause and write one sentence summarizing the main point.", ru: "Читайте каждый раздел активно: после каждого абзаца остановитесь и запишите одно предложение с главной мыслью.", kk: "Әр бөлімді белсенді оқыңыз: әр абзацтан кейін тоқтап, негізгі ойды бір сөйлеммен жазыңыз." }
            ],
            answer: "Preview headings and visuals (2 min), then read section by section, pausing after each paragraph to write a one-sentence summary.",
            answerRu: "Просмотрите заголовки и иллюстрации (2 мин), затем читайте раздел за разделом, останавливаясь после каждого абзаца, чтобы записать резюме одним предложением.",
            answerKk: "Тақырыптар мен көрнекіліктерді алдын ала қараңыз (2 мин), содан кейін әр бөлімді оқыңыз, әр абзацтан кейін тоқтап, негізгі ойды бір сөйлеммен жазыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What should you do before reading a textbook chapter?",
            questionRu: "Что нужно сделать перед чтением главы учебника?",
            questionKk: "Оқулық тарауын оқу алдында не істеу керек?",
            answer: "Scan the headings, bold words, and any images or diagrams to preview the content.",
            answerRu: "Просмотрите заголовки, выделенные слова, а также изображения или диаграммы для предварительного обзора содержания.",
            answerKk: "Мазмұнды алдын ала қарау үшін тақырыптарды, қалың сөздерді және кескіндер мен диаграммаларды қарап шығыңыз.",
            hint: "Do not start reading from the first word — what can you look at first?",
            hintRu: "Не начинайте читать с первого слова — что можно посмотреть сначала?",
            hintKk: "Бірінші сөзден бастамаңыз — алдымен нені қарауға болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "After reading a paragraph about the water cycle, write a one-sentence summary without looking back at the text.",
            questionRu: "После прочтения абзаца о круговороте воды напишите резюме одним предложением, не подглядывая в текст.",
            questionKk: "Су айналымы туралы абзацты оқығаннан кейін мәтінге қарамай бір сөйлемді қорытынды жазыңыз.",
            answer: "Example: 'Water evaporates from oceans, forms clouds, falls as rain, and flows back to oceans in a continuous cycle.' Any accurate one-sentence summary is acceptable.",
            answerRu: "Пример: «Вода испаряется из океанов, образует облака, выпадает дождём и возвращается в океаны в непрерывном цикле.» Подходит любое точное резюме одним предложением.",
            answerKk: "Мысал: «Су мұхиттардан буланып, бұлт түзеді, жаңбыр болып жауады және үздіксіз айналыммен қайта мұхиттарға құяды.» Кез келген дәл бір сөйлемді қорытынды жарайды.",
            hint: "What is the main idea of the paragraph in the simplest terms?",
            hintRu: "Какова главная идея абзаца самыми простыми словами?",
            hintKk: "Абзацтың негізгі идеясы ең қарапайым сөздермен қандай?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You find a history chapter boring and keep losing focus after two paragraphs. Design a reading strategy that keeps you engaged for the full chapter.",
            questionRu: "Глава по истории кажется скучной, и вы теряете концентрацию после двух абзацев. Разработайте стратегию чтения для всей главы.",
            questionKk: "Тарих тарауы қызықсыз және екі абзацтан кейін зейініңіз бөлінеді. Бүкіл тарауға белсенді оқу стратегиясын жасаңыз.",
            answer: "1) Turn headings into questions before reading (e.g., 'Causes of WWI' becomes 'What caused WWI?'). 2) Read to answer your questions — this creates purpose. 3) Take a 2-minute break every 2 pages. 4) After each section, tell yourself what you learned out loud. This transforms passive reading into an active quest for answers.",
            answerRu: "1) Превратите заголовки в вопросы перед чтением (например, «Причины Первой мировой» становится «Что стало причиной Первой мировой?»). 2) Читайте, чтобы ответить на свои вопросы — это создаёт цель. 3) Делайте 2-минутный перерыв каждые 2 страницы. 4) После каждого раздела проговаривайте вслух, что узнали. Это превращает пассивное чтение в активный поиск ответов.",
            answerKk: "1) Оқу алдында тақырыптарды сұраққа айналдырыңыз (мысалы, «Бірінші дүниежүзілік соғыстың себептері» → «Бірінші дүниежүзілік соғысқа не себеп болды?»). 2) Сұрақтарыңызға жауап беру үшін оқыңыз — бұл мақсат береді. 3) Әр 2 бет сайын 2 минуттық үзіліс жасаңыз. 4) Әр бөлімнен кейін не үйренгеніңізді дауыстап айтыңыз. Бұл пассивті оқуды белсенді жауап іздеуге айналдырады.",
            hint: "Try turning each heading into a question you want to answer.",
            hintRu: "Попробуйте превратить каждый заголовок в вопрос.",
            hintKk: "Әр тақырыпты жауап бергіңіз келетін сұраққа айналдырып көріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Simple Planning",
        titleRu: "Простое планирование",
        titleKk: "Қарапайым жоспарлау",
        content: "Planning ahead prevents last-minute panic. Every evening, spend 5 minutes writing tomorrow's task list — homework, chores, and activities. Number the tasks in order of importance so you always know what to do next. A simple written plan is far more reliable than trying to remember everything in your head.",
        contentRu: "Планирование предотвращает панику в последний момент. Каждый вечер тратьте 5 минут на список задач на завтра — домашние задания, дела и мероприятия. Пронумеруйте задачи по важности, чтобы всегда знать, что делать дальше. Простой письменный план надёжнее, чем запоминание всего в голове.",
        contentKk: "Алдын ала жоспарлау соңғы сәттегі дүрбелеңнің алдын алады. Әр кеште ертеңгі тапсырмалар тізімін жазуға 5 минут жұмсаңыз — үй тапсырмасы, жұмыстар, іс-шаралар. Маңыздылық бойынша нөмірлеңіз. Қарапайым жазбаша жоспар бәрін есте сақтаудан әлдеқайда сенімдірек.",
        keyFormulas: [
          {
            formula: "5-Minute Evening Plan: List Tasks → Number by Importance → Check Off Next Day",
            description: "Simple daily planning routine",
            descriptionRu: "Простой ежедневный ритуал планирования",
            descriptionKk: "Қарапайым күнделікті жоспарлау тәртібі"
          }
        ],
        solvedExamples: [
          {
            question: "Tomorrow you have: a science project due, a math worksheet, basketball practice at 5 PM, and you need to buy a birthday gift. Create a prioritized plan.",
            questionRu: "Завтра у вас: сдача научного проекта, рабочий лист по математике, баскетбольная тренировка в 17:00 и нужно купить подарок. Составьте план по приоритетам.",
            questionKk: "Ертең: жаратылыстану жобасын тапсыру, математика жұмыс парағы, 17:00-де баскетбол жаттығуы және сыйлық сатып алу керек. Басымдылық бойынша жоспар жасаңыз.",
            steps: [
              { en: "Rank by urgency: 1) Science project (due tomorrow — highest priority), 2) Math worksheet (also due), 3) Buy gift (can be done on the way to practice), 4) Basketball (fixed time).", ru: "Ранжируйте по срочности: 1) Научный проект (сдавать завтра), 2) Рабочий лист по математике, 3) Купить подарок (по пути на тренировку), 4) Баскетбол (фиксированное время).", kk: "Шұғылдығы бойынша: 1) Жаратылыстану жобасы (ертең тапсыру), 2) Математика парағы, 3) Сыйлық сатып алу (жаттығуға бара жатып), 4) Баскетбол (тұрақты уақыт)." },
              { en: "Plan: After school do science project first, then math. Buy gift at 4:30 on the way to practice. Basketball at 5.", ru: "План: после школы — научный проект, потом математика. Купить подарок в 16:30 по пути на тренировку. Баскетбол в 17:00.", kk: "Жоспар: мектептен кейін жаратылыстану жобасын, содан кейін математиканы орында. 16:30-да жаттығуға бара жатып сыйлық ал. 17:00-де баскетбол." }
            ],
            answer: "1) Science project (highest priority), 2) Math worksheet, 3) Buy gift at 4:30 on the way to basketball, 4) Basketball at 5 PM.",
            answerRu: "1) Научный проект (наивысший приоритет), 2) Рабочий лист по математике, 3) Купить подарок в 4:30 по пути на баскетбол, 4) Баскетбол в 5 PM.",
            answerKk: "1) Жаратылыстану жобасы (ең жоғары басымдық), 2) Математика жұмыс парағы, 3) 4:30-да баскетболға бара жатып сыйлық сатып алу, 4) Баскетбол 5 PM-да."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "When is the best time to write tomorrow's task list — morning or evening? Why?",
            questionRu: "Когда лучше писать список задач на завтра — утром или вечером? Почему?",
            questionKk: "Ертеңгі тапсырмалар тізімін қашан жазу жақсы — таңертең бе, кеште ме? Неліктен?",
            answer: "Evening is better because you can plan when your mind is clear about what happened today, and you wake up already knowing what to do.",
            answerRu: "Вечер лучше, потому что вы планируете, когда в голове свежо всё произошедшее за день, и просыпаетесь уже зная, что делать.",
            answerKk: "Кеш жақсырақ, өйткені күні бойы болған оқиғалар есіңізде жаңа тұрғанда жоспарлайсыз және не істеу керектігін біліп оянасыз.",
            hint: "When do you have the freshest memory of what needs to be done?",
            hintRu: "Когда у вас самая свежая память о том, что нужно сделать?",
            hintKk: "Не істеу керектігі туралы есіңіз қашан ең жаңа болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You wrote a task list but keep ignoring it and doing whatever feels easiest. How can you fix this behavior?",
            questionRu: "Вы написали список задач, но постоянно его игнорируете и делаете то, что проще. Как исправить это поведение?",
            questionKk: "Тапсырмалар тізімін жаздыңыз, бірақ оны елемей, жеңілін жасайсыз. Бұл мінез-құлықты қалай түзетуге болады?",
            answer: "Number tasks by priority and commit to doing #1 first. Set a rule: you cannot start task #2 until #1 is complete. This builds discipline and prevents cherry-picking easy tasks.",
            answerRu: "Пронумеруйте задачи по приоритету и обязуйтесь сделать №1 первой. Установите правило: нельзя начинать задачу №2, пока не завершена №1. Это воспитывает дисциплину и мешает выбирать только лёгкие задачи.",
            answerKk: "Тапсырмаларды басымдығы бойынша нөмірлеп, №1-ді бірінші орындауға уәде беріңіз. Ереже қойыңыз: №1 аяқталмайынша №2-ні бастауға болмайды. Бұл тәртіп қалыптастырып, тек жеңіл тапсырмаларды таңдап алудың алдын алады.",
            hint: "What if you made a rule about which task to do first?",
            hintRu: "Что если установить правило, какую задачу делать первой?",
            hintKk: "Қай тапсырманы бірінші орындау керек деген ереже қойсаңыз ше?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a complete evening planning template that a student could use every night in under 5 minutes. Include categories and a format.",
            questionRu: "Создайте шаблон вечернего планирования, который ученик сможет использовать каждый вечер за 5 минут. Включите категории и формат.",
            questionKk: "Оқушы әр кеште 5 минутта пайдалана алатын толық кешкі жоспарлау шаблонын жасаңыз. Санаттар мен пішімді қосыңыз.",
            answer: "Template: Date at top. Three columns: 1) Homework (list subjects + estimated time), 2) Activities (practice, clubs, fixed-time events), 3) Personal (chores, errands). Below: number all items by priority. Star the top 3 must-do items. At the bottom: note what time to start homework based on activities.",
            answerRu: "Шаблон: дата сверху. Три колонки: 1) Домашние задания (предметы + примерное время), 2) Активности (тренировки, кружки, события с фиксированным временем), 3) Личное (домашние дела, поручения). Ниже: пронумеруйте все пункты по приоритету. Отметьте звёздочкой 3 главных обязательных пункта. Внизу: запишите время начала домашних заданий с учётом активностей.",
            answerKk: "Шаблон: жоғарыда күні. Үш баған: 1) Үй тапсырмасы (пәндер + шамалы уақыт), 2) Іс-шаралар (жаттығулар, үйірмелер, уақыты бекітілген оқиғалар), 3) Жеке (үй шаруалары, тапсырмалар). Төменде: барлық тармақтарды басымдығы бойынша нөмірлеңіз. Ең маңызды 3 тармақты жұлдызшамен белгілеңіз. Ең төменде: іс-шараларға қарай үй тапсырмасын бастау уақытын жазыңыз.",
            hint: "Think about the main categories of a student's day: school, activities, personal.",
            hintRu: "Подумайте об основных категориях дня ученика: школа, активности, личное.",
            hintKk: "Оқушы күнінің негізгі санаттарын ойлаңыз: мектеп, іс-шаралар, жеке.",
            xp: 20
          }
        ]
      },
      {
        title: "Avoiding Procrastination",
        titleRu: "Борьба с прокрастинацией",
        titleKk: "Кейінге қалдырудан аулақ болу",
        content: "Procrastination happens when a task feels too big, too boring, or too hard. The best cure is the 2-minute rule: if you do not feel like starting, commit to working for just 2 minutes. Almost always, once you start, you will keep going. Breaking big tasks into small steps also makes them less intimidating.",
        contentRu: "Прокрастинация возникает, когда задача кажется слишком большой, скучной или сложной. Лучшее лекарство — правило 2 минут: если не хочется начинать, пообещайте себе поработать всего 2 минуты. Почти всегда, начав, вы продолжите. Разбивка больших задач на мелкие шаги также снижает страх.",
        contentKk: "Кейінге қалдыру тапсырма тым үлкен, тым қызықсыз немесе тым қиын болып көрінгенде болады. Ең жақсы ем — 2 минут ережесі: бастағыңыз келмесе, тек 2 минут жұмыс істеуге уәде беріңіз. Бастағаннан кейін жалғастыратыныңыз сөзсіз. Үлкен тапсырмаларды кіші қадамдарға бөлу де қорқынышты азайтады.",
        keyFormulas: [
          {
            formula: "2-Minute Rule: Just start for 2 minutes → Momentum carries you forward",
            description: "Overcoming the initial resistance to starting",
            descriptionRu: "Преодоление начального сопротивления",
            descriptionKk: "Бастаудағы бастапқы қарсылықты жеңу"
          },
          {
            formula: "Big Task → Small Steps → Less Intimidation",
            description: "Breaking tasks down reduces procrastination",
            descriptionRu: "Разбивка задач уменьшает прокрастинацию",
            descriptionKk: "Тапсырмаларды бөлу кейінге қалдыруды азайтады"
          }
        ],
        solvedExamples: [
          {
            question: "You have a book report due in 5 days but have not started. Every time you think about it, you feel overwhelmed and watch YouTube instead. Apply the strategies.",
            questionRu: "Сочинение по книге нужно сдать через 5 дней, но вы не начали. Каждый раз, думая об этом, вы чувствуете перегрузку и смотрите YouTube. Примените стратегии.",
            questionKk: "Кітап баяндамасын 5 күнде тапсыру керек, бірақ бастаған жоқсыз. Ойлаған сайын шамадан тыс сезініп, YouTube көресіз. Стратегияларды қолданыңыз.",
            steps: [
              { en: "Break it into small steps: Day 1 — read 30 pages, Day 2 — read 30 more, Day 3 — outline the report, Day 4 — write draft, Day 5 — revise.", ru: "Разбейте на шаги: День 1 — прочитать 30 страниц, День 2 — ещё 30, День 3 — составить план, День 4 — написать черновик, День 5 — отредактировать.", kk: "Кіші қадамдарға бөліңіз: 1-күн — 30 бет оқу, 2-күн — тағы 30, 3-күн — жоспар жасау, 4-күн — жоба жазу, 5-күн — түзету." },
              { en: "Use the 2-minute rule: tell yourself 'I will just open the book and read one page.' Once you start, momentum keeps you going.", ru: "Используйте правило 2 минут: скажите себе «Я просто открою книгу и прочитаю одну страницу.» Начав, импульс понесёт вас дальше.", kk: "2 минут ережесін қолданыңыз: «Кітапты ашып бір бет оқиын» деп айтыңыз. Бастағаннан кейін серпін сізді алға апарады." }
            ],
            answer: "Break the report into 5 daily mini-tasks and use the 2-minute rule to start each session. Small steps + starting is the cure for procrastination.",
            answerRu: "Разбейте доклад на 5 ежедневных мини-задач и используйте правило 2 минут, чтобы начать каждую сессию. Маленькие шаги + старт — лекарство от прокрастинации.",
            answerKk: "Баяндаманы күн сайынғы 5 мини-тапсырмаға бөліп, әр сессияны бастау үшін 2 минут ережесін қолданыңыз. Кіші қадамдар + бастау — кейінге қалдырудың емі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the 2-minute rule for procrastination?",
            questionRu: "Что такое правило 2 минут для борьбы с прокрастинацией?",
            questionKk: "Кейінге қалдырумен күресудің 2 минут ережесі дегеніміз не?",
            answer: "Commit to working on the task for just 2 minutes. Once you start, you usually continue because the hardest part is beginning.",
            answerRu: "Пообещайте поработать над задачей всего 2 минуты. Начав, вы обычно продолжаете, потому что самое сложное — начать.",
            answerKk: "Тапсырмамен тек 2 минут жұмыс істеуге уәде беріңіз. Бастағаннан кейін әдетте жалғастырасыз, өйткені ең қиыны — бастау.",
            hint: "It is about lowering the barrier to getting started.",
            hintRu: "Это о снижении барьера для начала работы.",
            hintKk: "Бұл бастау кедергісін азайту туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your classmate says 'I work better under pressure, so I always wait until the last night.' Is this true? Explain why or why not.",
            questionRu: "Одноклассник говорит: «Я лучше работаю под давлением, поэтому всегда жду последнего вечера.» Это правда? Объясните.",
            questionKk: "Сыныптасыңыз: «Қысым астында жақсырақ жұмыс істеймін, сондықтан әрқашан соңғы кешке дейін күтемін» дейді. Бұл дұрыс па? Түсіндіріңіз.",
            answer: "Research shows this is usually false. Last-minute work is faster but lower quality. The pressure creates stress, not better thinking. Work done over multiple days allows revision and deeper understanding.",
            answerRu: "Исследования показывают, что обычно это неправда. Работа в последний момент выполняется быстрее, но с более низким качеством. Давление создаёт стресс, а не лучшее мышление. Работа, растянутая на несколько дней, позволяет вносить правки и понимать глубже.",
            answerKk: "Зерттеулер бұл әдетте дұрыс емес екенін көрсетеді. Соңғы сәттегі жұмыс жылдам, бірақ сапасы төмен. Қысым жақсырақ ойлауды емес, стресс тудырады. Бірнеше күнге бөлінген жұмыс түзетуге және тереңірек түсінуге мүмкіндік береді.",
            hint: "Compare the quality of rushed work vs. work done over several days.",
            hintRu: "Сравните качество срочной работы и работы, выполненной за несколько дней.",
            hintKk: "Асығыс жұмыс пен бірнеше күнде жасалған жұмыстың сапасын салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Identify three specific reasons you personally procrastinate and create a custom anti-procrastination plan for each reason.",
            questionRu: "Определите три конкретные причины вашей прокрастинации и создайте план борьбы для каждой.",
            questionKk: "Кейінге қалдырудың үш нақты себебін анықтаңыз және әрқайсысы үшін жеке жоспар жасаңыз.",
            answer: "Example: 1) Task feels too big → break into 15-minute chunks. 2) Task is boring → reward yourself after completing it. 3) Do not know where to start → ask the teacher for clarification or start with the easiest part first. Each plan should address the root cause.",
            answerRu: "Пример: 1) Задача кажется слишком большой → разбейте на 15-минутные части. 2) Задача скучная → наградите себя после выполнения. 3) Не знаете, с чего начать → попросите учителя разъяснить или начните с самой лёгкой части. Каждый план должен устранять коренную причину.",
            answerKk: "Мысал: 1) Тапсырма тым үлкен көрінеді → 15 минуттық бөліктерге бөліңіз. 2) Тапсырма қызықсыз → орындағаннан кейін өзіңізді марапаттаңыз. 3) Қайдан бастарды білмейсіз → мұғалімнен түсіндіруді сұраңыз немесе ең жеңіл бөлігінен бастаңыз. Әр жоспар түпкі себепті жоюы керек.",
            hint: "Think: is it because the task is big, boring, confusing, or something else?",
            hintRu: "Подумайте: задача слишком большая, скучная, непонятная или что-то другое?",
            hintKk: "Ойланыңыз: тапсырма тым үлкен бе, қызықсыз ба, түсініксіз бе, әлде басқа ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Test Prep Basics",
        titleRu: "Основы подготовки к тестам",
        titleKk: "Тестке дайындықтың негіздері",
        content: "Effective test preparation starts days before the exam, not the night before. Review your notes a little each day in the week leading up to the test — this distributes your effort and strengthens memory. On the night before, do a light review and get a good sleep instead of cramming.",
        contentRu: "Эффективная подготовка к тесту начинается за несколько дней до экзамена, а не накануне. Просматривайте записи понемногу каждый день в течение недели перед тестом — это распределяет усилия и укрепляет память. Накануне сделайте лёгкое повторение и хорошо выспитесь.",
        contentKk: "Тиімді тестке дайындық емтихан алдындағы түнде емес, бірнеше күн бұрын басталады. Тестке дейінгі аптада жазбаларыңызды күн сайын аздап қарап шығыңыз — бұл күшіңізді бөледі және есте сақтауды нығайтады. Алдыңғы түні жеңіл қайталау жасап, жақсы ұйықтаңыз.",
        keyFormulas: [
          {
            formula: "Spread Study Over Days > Cram in One Night",
            description: "Distributed practice beats cramming for long-term retention",
            descriptionRu: "Распределённая практика лучше зубрёжки для долгосрочного запоминания",
            descriptionKk: "Бөлінген тәжірибе ұзақ мерзімді есте сақтау үшін зубрежкадан жақсы"
          }
        ],
        solvedExamples: [
          {
            question: "You have a history test on Friday covering 4 chapters. It is Monday. Create a study plan for the week.",
            questionRu: "В пятницу тест по истории по 4 главам. Сейчас понедельник. Составьте план подготовки на неделю.",
            questionKk: "Жұмада 4 тарау бойынша тарих тесті бар. Қазір дүйсенбі. Аптаға дайындық жоспарын жасаңыз.",
            steps: [
              { en: "Divide: Mon — Chapter 1, Tue — Chapter 2, Wed — Chapter 3, Thu — Chapter 4 + review weak areas.", ru: "Разделите: Пн — Глава 1, Вт — Глава 2, Ср — Глава 3, Чт — Глава 4 + повторение слабых мест.", kk: "Бөліңіз: Дс — 1-тарау, Сс — 2-тарау, Ср — 3-тарау, Бс — 4-тарау + әлсіз жерлерді қайталау." },
              { en: "Thursday evening: light review of all 4 chapters using flashcards, then go to bed early for a rested brain on Friday.", ru: "Четверг вечером: лёгкое повторение всех 4 глав по карточкам, затем ранний отход ко сну для свежей головы в пятницу.", kk: "Бейсенбі кешінде: карточкалармен 4 тарауды жеңіл қайталау, содан кейін жұмаға серпінді ми үшін ерте ұйықтау." }
            ],
            answer: "Study one chapter per day (Mon–Thu), review all on Thursday evening, and sleep well before the Friday test.",
            answerRu: "Учите по одной главе в день (Пн–Чт), повторите всё в четверг вечером и хорошо выспитесь перед пятничным тестом.",
            answerKk: "Күніне бір тарау оқыңыз (Дс–Бс), бейсенбі кешінде бәрін қайталаңыз және жұмадағы тест алдында жақсы ұйықтаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is studying a little each day better than cramming the night before?",
            questionRu: "Почему учить понемногу каждый день лучше, чем зубрить накануне?",
            questionKk: "Неліктен күн сайын аздап оқу алдыңғы түні зубрежкадан жақсы?",
            answer: "Spreading study over days gives your brain time to process and consolidate information during sleep, leading to stronger long-term memory.",
            answerRu: "Распределение учёбы по дням даёт мозгу время обработать и закрепить информацию во сне, что ведёт к более сильной долговременной памяти.",
            answerKk: "Оқуды күндерге бөлу миға ақпаратты ұйқы кезінде өңдеуге және бекітуге уақыт береді, бұл ұзақ мерзімді жадыны нығайтады.",
            hint: "Think about what happens to your memory while you sleep.",
            hintRu: "Подумайте, что происходит с памятью, пока вы спите.",
            hintKk: "Ұйықтағанда есіңізге не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You studied for 3 hours but still feel unprepared. What might you be doing wrong, and how can you fix it?",
            questionRu: "Вы учились 3 часа, но всё ещё чувствуете себя неподготовленным. Что может быть не так и как исправить?",
            questionKk: "3 сағат оқыдыңыз, бірақ әлі дайын емессіз. Не қате болуы мүмкін және қалай түзетуге болады?",
            answer: "You might be passively re-reading instead of actively testing yourself. Fix: close the book and try to recall key points, use flashcards, or explain concepts out loud. Active recall is more effective than passive review.",
            answerRu: "Возможно, вы пассивно перечитываете вместо активной самопроверки. Исправление: закройте книгу и попробуйте вспомнить ключевые пункты, используйте карточки или объясняйте концепции вслух. Активное припоминание эффективнее пассивного повторения.",
            answerKk: "Мүмкін сіз өзіңізді белсенді тексерудің орнына пассивті қайта оқып жатырсыз. Түзету: кітапты жауып, негізгі ойларды еске түсіруге тырысыңыз, карточкалар қолданыңыз немесе ұғымдарды дауыстап түсіндіріңіз. Белсенді еске түсіру пассивті қайталаудан тиімдірек.",
            hint: "Are you testing yourself or just reading the same pages again?",
            hintRu: "Вы проверяете себя или просто перечитываете?",
            hintKk: "Өзіңізді тексеріп жатырсыз ба, әлде жай қайта оқып жатырсыз ба?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete 5-day test preparation plan for a student who has tests in math, science, and English all on the same day.",
            questionRu: "Разработайте 5-дневный план подготовки для ученика, у которого в один день тесты по математике, науке и английскому.",
            questionKk: "Бір күнде математика, жаратылыстану және ағылшын тесттері бар оқушы үшін 5 күндік дайындық жоспарын жасаңыз.",
            answer: "Day 1: Math (hardest topics). Day 2: Science (hardest topics). Day 3: English (hardest topics). Day 4: Rotate — 30 min each subject, focus on weak areas. Day 5 (night before): Light review of all three using flashcards, then early bed. Key: never spend more than 45 min on one subject in a sitting.",
            answerRu: "День 1: математика (самые сложные темы). День 2: наука (самые сложные темы). День 3: английский (самые сложные темы). День 4: чередование — по 30 мин на предмет, фокус на слабых местах. День 5 (накануне): лёгкое повторение всех трёх по карточкам, затем ранний отход ко сну. Ключевое: не сидите над одним предметом дольше 45 мин за раз.",
            answerKk: "1-күн: математика (ең қиын тақырыптар). 2-күн: жаратылыстану (ең қиын тақырыптар). 3-күн: ағылшын (ең қиын тақырыптар). 4-күн: кезектестіру — әр пәнге 30 мин, әлсіз жерлерге зейін. 5-күн (алдыңғы түні): үшеуін де карточкалармен жеңіл қайталау, содан кейін ерте ұйықтау. Бастысы: бір пәнге бір отырғанда 45 минуттан артық жұмсамаңыз.",
            hint: "Rotate between subjects and focus on weak areas, not just the easy parts.",
            hintRu: "Чередуйте предметы и фокусируйтесь на слабых местах.",
            hintKk: "Пәндерді кезектестіріңіз және әлсіз жерлерге зейін қойыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Sleep & Learning",
        titleRu: "Сон и обучение",
        titleKk: "Ұйқы және оқу",
        content: "Sleep is not wasted time — it is when your brain consolidates what you learned during the day. Students who get 8–9 hours of sleep perform significantly better on tests than those who stay up late cramming. Studying before bed is especially effective because sleep immediately strengthens those fresh memories.",
        contentRu: "Сон — не потерянное время, а период, когда мозг закрепляет изученное за день. Ученики, которые спят 8–9 часов, значительно лучше сдают тесты, чем те, кто засиживается допоздна. Учёба перед сном особенно эффективна, потому что сон сразу укрепляет свежие воспоминания.",
        contentKk: "Ұйқы бос уақыт емес — ми күндіз үйренгенді бекітетін кезең. 8–9 сағат ұйықтайтын оқушылар тестте кеш отыратындардан әлдеқайда жақсы нәтиже көрсетеді. Ұйықтар алдында оқу ерекше тиімді, өйткені ұйқы жаңа естеліктерді бірден нығайтады.",
        keyFormulas: [
          {
            formula: "8–9 Hours of Sleep + Study Before Bed = Stronger Memory",
            description: "Sleep consolidates learning into long-term memory",
            descriptionRu: "Сон закрепляет обучение в долговременной памяти",
            descriptionKk: "Ұйқы оқуды ұзақ мерзімді есте сақтауға бекітеді"
          }
        ],
        solvedExamples: [
          {
            question: "Two students study the same material. Student A studies from 9–11 PM and sleeps at 11. Student B studies from 11 PM–1 AM and sleeps at 1. Who will likely remember more?",
            questionRu: "Два ученика учат одинаковый материал. Ученик А учится с 21:00 до 23:00 и спит в 23:00. Ученик Б учится с 23:00 до 01:00 и спит в 01:00. Кто запомнит больше?",
            questionKk: "Екі оқушы бірдей материалды оқиды. А оқушы 21:00–23:00 оқып 23:00-де ұйықтайды. Б оқушы 23:00–01:00 оқып 01:00-де ұйықтайды. Кім көбірек есте сақтайды?",
            steps: [
              { en: "Both study 2 hours, but Student A gets more sleep (assuming 7 AM wake). Student A gets ~8 hours of sleep, Student B gets ~6 hours.", ru: "Оба учатся 2 часа, но ученик А больше спит (при подъёме в 7:00). А спит ~8 часов, Б спит ~6 часов.", kk: "Екеуі де 2 сағат оқиды, бірақ А оқушы көбірек ұйықтайды (7:00-де тұрса). А ~8 сағат, Б ~6 сағат ұйықтайды." },
              { en: "Student A will remember more because their brain has more sleep time to consolidate the material, and they studied during a less fatigued state.", ru: "Ученик А запомнит больше, так как его мозг имеет больше времени сна для закрепления материала, и он учился в менее утомлённом состоянии.", kk: "А оқушы көбірек есте сақтайды, өйткені миында материалды бекітуге көбірек ұйқы уақыты бар және аз шаршаған кезде оқыды." }
            ],
            answer: "Student A will remember more — they get more sleep for memory consolidation and study when less tired.",
            answerRu: "Ученик А запомнит больше — он получает больше сна для закрепления памяти и учится в менее утомлённом состоянии.",
            answerKk: "А оқушы көбірек есте сақтайды — оның миы жадыны бекітуге көбірек ұйқы алады және ол азырақ шаршаған кезде оқыды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many hours of sleep should students aim for each night?",
            questionRu: "Сколько часов сна нужно ученикам каждую ночь?",
            questionKk: "Оқушылар әр түні қанша сағат ұйықтауы керек?",
            answer: "8 to 9 hours of sleep per night for optimal learning and memory.",
            answerRu: "8–9 часов сна каждую ночь для оптимального обучения и памяти.",
            answerKk: "Оптималды оқу мен жады үшін әр түні 8–9 сағат ұйқы.",
            hint: "It is more than most students actually get!",
            hintRu: "Это больше, чем большинство учеников на самом деле спят!",
            hintKk: "Бұл көптеген оқушылардың шындығында ұйықтайтынынан көп!",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why is studying right before bed more effective than studying in the morning and then going about your day?",
            questionRu: "Почему учёба перед сном эффективнее, чем учёба утром с последующими повседневными делами?",
            questionKk: "Неліктен ұйықтар алдында оқу таңертең оқып, содан кейін күнделікті іс жасаудан тиімдірек?",
            answer: "When you study before bed, your brain immediately begins consolidating those memories during sleep without interference from other activities. Morning study is followed by many new experiences that can interfere with memory formation.",
            answerRu: "Когда вы учитесь перед сном, мозг сразу начинает закреплять эти воспоминания во сне без помех от других занятий. После утренней учёбы следует множество новых впечатлений, которые могут мешать формированию памяти.",
            answerKk: "Ұйықтар алдында оқығанда, ми басқа әрекеттердің кедергісінсіз ұйқы кезінде сол естеліктерді бірден бекіте бастайды. Таңертеңгі оқудан кейін жадының қалыптасуына кедергі келтіруі мүмкін көптеген жаңа әсерлер болады.",
            hint: "What happens between studying and sleeping in each scenario?",
            hintRu: "Что происходит между учёбой и сном в каждом сценарии?",
            hintKk: "Әр сценарийде оқу мен ұйқы арасында не болады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student says: 'I only need 5 hours of sleep — I have trained myself.' Using what you know about sleep and learning, explain why this belief is problematic.",
            questionRu: "Ученик говорит: «Мне хватает 5 часов сна — я натренировался.» Используя знания о сне и обучении, объясните, почему это убеждение ошибочно.",
            questionKk: "Оқушы: «Маған 5 сағат ұйқы жеткілікті — мен өзімді үйреттім» дейді. Ұйқы мен оқу туралы білімді пайдаланып, бұл сенімнің неліктен қате екенін түсіндіріңіз.",
            answer: "Research shows very few people can function well on less than 7 hours. Sleep-deprived people often do not realize their performance is impaired — they feel fine but test scores, reaction time, and creativity are measurably worse. During sleep, the brain moves information from short-term to long-term memory. Less sleep means less consolidation and weaker recall on exams.",
            answerRu: "Исследования показывают, что очень немногие люди могут нормально функционировать менее чем с 7 часами сна. Недосыпающие часто не осознают, что их работоспособность снижена — они чувствуют себя нормально, но результаты тестов, время реакции и креативность измеримо хуже. Во время мозг переводит информацию из кратковременной памяти в долговременную. Меньше сна — меньше закрепления и более слабое воспроизведение на экзаменах.",
            answerKk: "Зерттеулер 7 сағаттан аз ұйқымен өте аз адамның ғана жақсы жұмыс істей алатынын көрсетеді. Ұйқысы қанбағандар өнімділігінің төмендегенін жиі байқамайды — өздерін жақсы сезінеді, бірақ тест нәтижелері, реакция уақыты және шығармашылық өлшенетіндей нашарлайды. Ұйқы кезінде ми ақпаратты қысқа мерзімді жадтан ұзақ мерзімді жадқа көшіреді. Аз ұйқы — аз бекіту және емтиханда әлсіз еске түсіру деген сөз.",
            hint: "Can you truly 'train' yourself to need less sleep, or do you just get used to feeling tired?",
            hintRu: "Можно ли действительно «натренироваться» меньше спать, или вы просто привыкаете к усталости?",
            hintKk: "Аз ұйықтауға шынымен «үйрену» мүмкін бе, әлде сіз жай шаршауға үйреніп кетесіз бе?",
            xp: 20
          }
        ]
      },
      {
        title: "Weekly Review",
        titleRu: "Еженедельный обзор",
        titleKk: "Апталық шолу",
        content: "A weekly review is 20–30 minutes every Sunday where you look back at the week and plan ahead. Review what you learned, check what assignments are coming up, and identify any topics you are confused about. This habit prevents surprises and keeps you in control of your schoolwork.",
        contentRu: "Еженедельный обзор — это 20–30 минут каждое воскресенье, когда вы оглядываетесь на неделю и планируете следующую. Просмотрите, что изучили, проверьте предстоящие задания и определите непонятные темы. Эта привычка предотвращает сюрпризы и держит учёбу под контролем.",
        contentKk: "Апталық шолу — әр жексенбі 20–30 минут, аптаға артқа қарап, алдағыны жоспарлау. Не үйренгеніңізді қараңыз, алдағы тапсырмаларды тексеріңіз және түсініксіз тақырыптарды анықтаңыз. Бұл әдет тосын жағдайлардың алдын алады және оқуды бақылауда ұстайды.",
        keyFormulas: [
          {
            formula: "Look Back + Look Ahead + Identify Gaps = Weekly Review",
            description: "Three components of an effective weekly review",
            descriptionRu: "Три компонента эффективного еженедельного обзора",
            descriptionKk: "Тиімді апталық шолудың үш компоненті"
          }
        ],
        solvedExamples: [
          {
            question: "It is Sunday evening. This week you learned about fractions in math, the water cycle in science, and read two chapters of a novel. Next week you have a science quiz on Tuesday and an English essay due Friday. Do your weekly review.",
            questionRu: "Воскресенье вечер. На этой неделе вы изучили дроби, круговорот воды и прочитали две главы романа. На следующей неделе — тест по науке во вторник и сочинение по английскому в пятницу. Проведите еженедельный обзор.",
            questionKk: "Жексенбі кешінде. Осы аптада бөлшектерді, су айналымын үйренділ және романның екі тарауын оқыдыңыз. Келесі аптада сейсенбіде жаратылыстану тесті және жұмада ағылшын эссесі. Апталық шолуды жасаңыз.",
            steps: [
              { en: "Look back: I understood fractions well but am confused about evaporation vs. condensation. I need to re-read those notes. Novel chapters were clear.", ru: "Оглянемся: дроби понял хорошо, но путаю испарение и конденсацию — нужно перечитать записи. Главы романа понятны.", kk: "Артқа қарау: бөлшектерді жақсы түсіндім, бірақ буланумен конденсацияны шатастырамын — жазбаларды қайта оқу керек. Роман тараулары түсінікті." },
              { en: "Look ahead: Monday — review water cycle for Tuesday quiz. Wednesday–Thursday — outline and draft English essay. Friday morning — final check on essay.", ru: "Заглянем вперёд: Понедельник — повторить круговорот воды. Среда–четверг — план и черновик сочинения. Пятница утром — финальная проверка.", kk: "Алдағыға қарау: Дүйсенбі — сейсенбі тестіне су айналымын қайталау. Сәрсенбі–бейсенбі — эссе жоспары мен жобасы. Жұма таңертең — соңғы тексеру." }
            ],
            answer: "Look back: fractions OK, need to review evaporation vs. condensation. Look ahead: Monday review science, Wed–Thu draft essay, Friday finalize. Gap identified: water cycle confusion.",
            answerRu: "Взгляд назад: дроби в порядке, нужно повторить испарение и конденсацию. Взгляд вперёд: в понедельник повторить науку, ср–чт черновик эссе, в пятницу закончить. Выявленный пробел: путаница с круговоротом воды.",
            answerKk: "Артқа қарау: бөлшектер жақсы, булану мен конденсацияны қайталау керек. Алға қарау: дүйсенбіде жаратылыстануды қайталау, сәрсенбі–бейсенбі эссе жобасы, жұмада аяқтау. Анықталған олқылық: су айналымын шатастыру."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the three parts of a weekly review.",
            questionRu: "Назовите три части еженедельного обзора.",
            questionKk: "Апталық шолудың үш бөлігін атаңыз.",
            answer: "1) Look back at what you learned, 2) Look ahead at upcoming assignments and tests, 3) Identify gaps or topics you are confused about.",
            answerRu: "1) Оглядка на то, что вы изучили, 2) Взгляд на предстоящие задания и тесты, 3) Определение пробелов или непонятных тем.",
            answerKk: "1) Не үйренгеніңізге артқа қарау, 2) Алдағы тапсырмалар мен тесттерге алға қарау, 3) Олқылықтарды немесе түсініксіз тақырыптарды анықтау.",
            hint: "Past, future, and problems.",
            hintRu: "Прошлое, будущее и проблемы.",
            hintKk: "Өткен, болашақ және мәселелер.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During your weekly review you realize you are behind in two subjects and have three tests next week. How do you prioritize?",
            questionRu: "Во время обзора вы понимаете, что отстаёте по двум предметам и на следующей неделе три теста. Как расставить приоритеты?",
            questionKk: "Апталық шолу кезінде екі пәннен артта қалғаныңызды және келесі аптада үш тестіңіз бар екенін түсінесіз. Қалай басымдық қоясыз?",
            answer: "Prioritize by date: study for the earliest test first. For the subjects you are behind in, identify the specific topics you missed and spend 20 minutes on each. Ask teachers for help on the most confusing topics rather than trying to figure everything out alone.",
            answerRu: "Расставляйте приоритеты по дате: сначала готовьтесь к ближайшему тесту. Для предметов, по которым отстаёте, определите конкретные пропущенные темы и потратьте по 20 минут на каждую. Просите учителей помочь с самыми запутанными темами, вместо того чтобы разбираться во всём самостоятельно.",
            answerKk: "Күн бойынша басымдық қойыңыз: алдымен ең жақын тестке дайындалыңыз. Артта қалған пәндер бойынша өткізіп алған нақты тақырыптарды анықтап, әрқайсысына 20 минут жұмсаңыз. Бәрін өз бетіңізше түсінуге тырыспай, ең шатастыратын тақырыптар бойынша мұғалімдерден көмек сұраңыз.",
            hint: "Which test comes first? Which gaps are most critical?",
            hintRu: "Какой тест первый? Какие пробелы самые критичные?",
            hintKk: "Қай тест бірінші? Қай олқылықтар ең маңызды?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a weekly review template with specific questions to ask yourself every Sunday. Include at least 6 questions covering academics, schedule, and self-reflection.",
            questionRu: "Создайте шаблон еженедельного обзора с конкретными вопросами для каждого воскресенья. Включите минимум 6 вопросов об учёбе, расписании и рефлексии.",
            questionKk: "Әр жексенбіде өзіңізге қоятын нақты сұрақтары бар апталық шолу шаблонын жасаңыз. Оқу, кесте және өзін-өзі бағалау бойынша кемінде 6 сұрақ қосыңыз.",
            answer: "Template: 1) What did I learn well this week? 2) What topics confused me? 3) What assignments and tests are due next week? 4) Did I follow my homework routine every day? 5) What could I do differently next week? 6) Am I getting enough sleep? 7) Do I need to ask a teacher for help on anything?",
            answerRu: "Шаблон: 1) Что я хорошо усвоил на этой неделе? 2) Какие темы меня запутали? 3) Какие задания и тесты на следующей неделе? 4) Соблюдал ли я режим домашних заданий каждый день? 5) Что я мог бы сделать иначе на следующей неделе? 6) Достаточно ли я сплю? 7) Нужно ли мне попросить учителя о помощи в чём-то?",
            answerKk: "Шаблон: 1) Осы аптада нені жақсы үйрендім? 2) Қай тақырыптар мені шатастырды? 3) Келесі аптада қандай тапсырмалар мен тесттер бар? 4) Үй тапсырмасы тәртібін күн сайын сақтадым ба? 5) Келесі аптада нені басқаша істей аламын? 6) Ұйқым жеткілікті ме? 7) Бірдеңе бойынша мұғалімнен көмек сұрауым керек пе?",
            hint: "Cover three areas: what you learned, what is coming, and how you are doing overall.",
            hintRu: "Охватите три области: что изучили, что впереди и как дела в целом.",
            hintKk: "Үш саланы қамтыңыз: не үйрендіңіз, алда не бар және жалпы жағдайыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Productivity & Learning Systems_9": {
    planetName: "Productivity & Learning Systems",
    introduction: {
      en: "Welcome to Productivity & Learning Systems for Grade 9! Level up your study skills with time management, the Pomodoro Technique, advanced note-taking, and memory techniques that top students use.",
      ru: "Добро пожаловать в Продуктивность и системы обучения для 9 класса! Повысьте свои учебные навыки с помощью тайм-менеджмента, техники Помодоро, продвинутого конспектирования и техник запоминания лучших учеников."
    },
    sections: [
      {
        title: "Time Management",
        titleRu: "Управление временем",
        titleKk: "Уақытты басқару",
        content: "Time management is about making conscious choices about how you spend your hours. Track your time for one day and you will discover hidden time wasters like social media scrolling or excessive gaming. Once you see where your time goes, you can redirect wasted hours toward your goals.",
        contentRu: "Управление временем — это осознанный выбор того, как вы проводите свои часы. Отследите время за один день, и вы обнаружите скрытые пожиратели времени — соцсети или чрезмерные игры. Увидев, куда уходит время, вы сможете направить потерянные часы на достижение целей.",
        contentKk: "Уақытты басқару — сағаттарыңызды қалай өткізетініңіз туралы саналы таңдау жасау. Бір күн уақытыңызды қадағалаңыз — әлеуметтік медиа немесе шамадан тыс ойын сияқты жасырын уақыт жұтқыштарын табасыз. Уақытыңыздың қайда кететінін көргенде, жоғалған сағаттарды мақсаттарыңызға бағыттай аласыз.",
        keyFormulas: [
          {
            formula: "Track Time → Find Wasters → Redirect Hours to Goals",
            description: "Three-step time management process",
            descriptionRu: "Трёхшаговый процесс управления временем",
            descriptionKk: "Уақытты басқарудың үш қадамдық процесі"
          },
          {
            formula: "24 hours − Sleep − School − Activities = Available Study Time",
            description: "Calculate your real available time each day",
            descriptionRu: "Рассчитайте реальное доступное время каждый день",
            descriptionKk: "Күн сайынғы нақты бос уақытыңызды есептеңіз"
          }
        ],
        solvedExamples: [
          {
            question: "A student tracks their after-school time: 3:30–4:30 social media, 4:30–5:00 snack and TV, 5:00–6:00 homework, 6:00–7:00 dinner, 7:00–9:00 gaming, 9:00–10:00 more homework. How can they improve?",
            questionRu: "Ученик отследил время после школы: 15:30–16:30 соцсети, 16:30–17:00 перекус и ТВ, 17:00–18:00 уроки, 18:00–19:00 ужин, 19:00–21:00 игры, 21:00–22:00 ещё уроки. Как улучшить?",
            questionKk: "Оқушы мектептен кейінгі уақытын бақылады: 15:30–16:30 әлеуметтік медиа, 16:30–17:00 тамақ пен ТД, 17:00–18:00 үй тапсырмасы, 18:00–19:00 кешкі ас, 19:00–21:00 ойын, 21:00–22:00 тағы тапсырма. Қалай жақсарту керек?",
            steps: [
              { en: "Identify wasters: 1 hour of social media and 2 hours of gaming = 3 hours of low-value time. Homework is split across the evening, reducing focus.", ru: "Определите пожирателей: 1 час соцсетей и 2 часа игр = 3 часа малоценного времени. Уроки разбиты по вечеру, что снижает фокус.", kk: "Уақыт жұтқыштарды анықтаңыз: 1 сағат әлеуметтік медиа және 2 сағат ойын = 3 сағат аз құнды уақыт. Тапсырма кеш бойы бөлінген, зейінді азайтады." },
              { en: "Improved schedule: 3:30–3:45 snack, 3:45–5:45 homework (all at once), 5:45–6:00 break, 6:00–7:00 dinner, 7:00–9:00 free time (gaming/social). Work first, then enjoy free time guilt-free.", ru: "Улучшенное расписание: 15:30–15:45 перекус, 15:45–17:45 уроки (все сразу), 17:45–18:00 перерыв, 18:00–19:00 ужин, 19:00–21:00 свободное время. Сначала работа, потом отдых без вины.", kk: "Жақсартылған кесте: 15:30–15:45 тамақ, 15:45–17:45 тапсырма (бәрін бірден), 17:45–18:00 үзіліс, 18:00–19:00 кешкі ас, 19:00–21:00 бос уақыт. Алдымен жұмыс, содан кейін тегін демалыс." }
            ],
            answer: "Do all homework first (3:45–5:45) in one focused block, then enjoy gaming and social media afterward without guilt. This saves time lost to context-switching.",
            answerRu: "Сначала сделайте все домашние задания (3:45–5:45) одним сфокусированным блоком, а затем без чувства вины наслаждайтесь играми и соцсетями. Это экономит время, теряемое на переключение между задачами.",
            answerKk: "Алдымен барлық үй тапсырмасын (3:45–5:45) бір фокусталған блокта орындаңыз, содан кейін ойындар мен әлеуметтік медианы кінәсез демалып көріңіз. Бұл контекст ауыстырудан жоғалатын уақытты үнемдейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "If you sleep 8 hours, attend school for 7 hours, and have 1 hour of activities, how many hours are left for study and free time?",
            questionRu: "Если вы спите 8 часов, в школе 7 часов и 1 час на кружки, сколько часов остаётся на учёбу и свободное время?",
            questionKk: "8 сағат ұйықтасаңыз, мектепте 7 сағат, 1 сағат іс-шара болса, оқу мен бос уақытқа қанша сағат қалады?",
            answer: "24 − 8 − 7 − 1 = 8 hours available for homework, meals, commuting, and free time.",
            answerRu: "24 − 8 − 7 − 1 = 8 часов остаётся на домашние задания, еду, дорогу и свободное время.",
            answerKk: "24 − 8 − 7 − 1 = 8 сағат үй тапсырмасына, тамаққа, жолға және бос уақытқа қалады.",
            hint: "Subtract from 24 hours.",
            hintRu: "Вычтите из 24 часов.",
            hintKk: "24 сағаттан алып тастаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Track how you spend time from 3 PM to 9 PM today. Identify your biggest time waster and propose a specific change.",
            questionRu: "Отследите, как вы проводите время с 15:00 до 21:00 сегодня. Определите главного пожирателя времени и предложите конкретное изменение.",
            questionKk: "Бүгін 15:00-ден 21:00-ге дейін уақытыңызды қалай өткізетініңізді бақылаңыз. Ең үлкен уақыт жұтқышты анықтап, нақты өзгеріс ұсыныңыз.",
            answer: "Example: 'I spent 90 minutes on TikTok. I will set a 30-minute timer and use the saved 60 minutes for studying.' Any honest tracking with a concrete improvement is acceptable.",
            answerRu: "Пример: «Я провёл 90 минут в TikTok. Я поставлю таймер на 30 минут и использую сэкономленные 60 минут для учёбы.» Подходит любое честное отслеживание с конкретным улучшением.",
            answerKk: "Мысал: «TikTok-та 90 минут өткіздім. 30 минуттық таймер қойып, үнемделген 60 минутты оқуға жұмсаймын.» Нақты жақсартуы бар кез келген шынайы бақылау жарайды.",
            hint: "Be honest — no one is grading your time log.",
            hintRu: "Будьте честны — никто не оценивает ваш журнал.",
            hintKk: "Шынайы болыңыз — сіздің уақыт журналыңызды ешкім бағаламайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student claims they have 'no time' to study but spends 3 hours daily on their phone. Create a realistic weekly schedule that includes 2 hours of study, 1 hour of phone use, and all their other activities.",
            questionRu: "Ученик утверждает, что у него «нет времени» учиться, но проводит 3 часа в день в телефоне. Составьте реалистичное недельное расписание с 2 часами учёбы, 1 часом телефона и остальными делами.",
            questionKk: "Оқушы оқуға «уақыт жоқ» дейді, бірақ күніне 3 сағат телефонда. 2 сағат оқу, 1 сағат телефон және басқа іс-шараларды қамтитын шынайы апталық кесте жасаңыз.",
            answer: "Sample weekday: 7–8 AM wake and school prep, 8–3 PM school, 3:30–5:30 PM homework (2 hrs), 5:30–6:30 PM dinner, 6:30–7:30 PM phone time (1 hr), 7:30–9 PM activities/hobbies, 9–10 PM relax and bed prep, 10 PM sleep. The student gains 2 study hours by cutting phone from 3 to 1 hour.",
            answerRu: "Пример буднего дня: 7–8 AM подъём и сборы в школу, 8–3 PM школа, 3:30–5:30 PM домашние задания (2 ч), 5:30–6:30 PM ужин, 6:30–7:30 PM телефон (1 ч), 7:30–9 PM занятия/хобби, 9–10 PM отдых и подготовка ко сну, 10 PM сон. Ученик получает 2 часа учёбы, сократив телефон с 3 до 1 часа.",
            answerKk: "Жұмыс күнінің үлгісі: 7–8 AM тұру және мектепке дайындалу, 8–3 PM мектеп, 3:30–5:30 PM үй тапсырмасы (2 сағ), 5:30–6:30 PM кешкі ас, 6:30–7:30 PM телефон уақыты (1 сағ), 7:30–9 PM іс-шаралар/хобби, 9–10 PM демалыс және ұйқыға дайындық, 10 PM ұйқы. Оқушы телефонды 3 сағаттан 1 сағатқа қысқартып, 2 сағат оқу уақытын алады.",
            hint: "Where does the phone time go if you reduce it from 3 hours to 1?",
            hintRu: "Куда уходит время от сокращения телефона с 3 до 1 часа?",
            hintKk: "Телефон уақытын 3 сағаттан 1-ге азайтсаңыз, бос уақыт қайда кетеді?",
            xp: 20
          }
        ]
      },
      {
        title: "Pomodoro Technique",
        titleRu: "Техника Помодоро",
        titleKk: "Помодоро техникасы",
        content: "The Pomodoro Technique uses a timer to create focused work sprints: study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15–30 minute break. This works because our brains focus best in short bursts, and the timer creates urgency that fights procrastination.",
        contentRu: "Техника Помодоро использует таймер для создания сфокусированных рабочих спринтов: 25 минут учёбы, затем 5 минут отдыха. После 4 циклов — длинный перерыв 15–30 минут. Это работает, потому что мозг лучше концентрируется короткими отрезками, а таймер создаёт срочность, которая борется с прокрастинацией.",
        contentKk: "Помодоро техникасы фокусталған жұмыс спринттерін жасау үшін таймер қолданады: 25 минут оқу, содан кейін 5 минут демалыс. 4 циклден кейін 15–30 минуттық ұзақ үзіліс. Бұл жұмыс істейді, өйткені ми қысқа мерзімде жақсы зейін қояды, ал таймер кейінге қалдырумен күресетін шұғылдық тудырады.",
        keyFormulas: [
          {
            formula: "25 min work + 5 min break = 1 Pomodoro. After 4 Pomodoros → 15–30 min long break",
            description: "The standard Pomodoro cycle",
            descriptionRu: "Стандартный цикл Помодоро",
            descriptionKk: "Стандартты Помодоро циклі"
          }
        ],
        solvedExamples: [
          {
            question: "You need to study for 2 hours. How many Pomodoros is that, and what does the full session look like?",
            questionRu: "Вам нужно учиться 2 часа. Сколько это Помодоро и как выглядит полная сессия?",
            questionKk: "2 сағат оқу керек. Бұл қанша Помодоро және толық сессия қалай көрінеді?",
            steps: [
              { en: "Calculate: 4 Pomodoros × 25 min = 100 min of work, plus 3 short breaks (15 min) + 1 long break (15 min) = 130 min total ≈ 2 hours 10 min.", ru: "Расчёт: 4 Помодоро × 25 мин = 100 мин работы, плюс 3 коротких перерыва (15 мин) + 1 длинный (15 мин) = 130 мин ≈ 2 часа 10 мин.", kk: "Есептеу: 4 Помодоро × 25 мин = 100 мин жұмыс, қосымша 3 қысқа үзіліс (15 мин) + 1 ұзын (15 мин) = 130 мин ≈ 2 сағат 10 мин." },
              { en: "Session: Pom 1 (25 min) → break (5) → Pom 2 (25) → break (5) → Pom 3 (25) → break (5) → Pom 4 (25) → long break (15). Total: 2 hours 10 minutes.", ru: "Сессия: Пом 1 (25 мин) → перерыв (5) → Пом 2 (25) → перерыв (5) → Пом 3 (25) → перерыв (5) → Пом 4 (25) → длинный перерыв (15). Итого: 2 часа 10 минут.", kk: "Сессия: Пом 1 (25 мин) → үзіліс (5) → Пом 2 (25) → үзіліс (5) → Пом 3 (25) → үзіліс (5) → Пом 4 (25) → ұзақ үзіліс (15). Барлығы: 2 сағат 10 минут." }
            ],
            answer: "4 Pomodoros with 3 short breaks and 1 long break. Total session: about 2 hours 10 minutes for 100 minutes of focused work.",
            answerRu: "4 Помодоро с 3 короткими перерывами и 1 длинным. Вся сессия: около 2 часов 10 минут при 100 минутах сфокусированной работы.",
            answerKk: "3 қысқа және 1 ұзақ үзілісі бар 4 Помодоро. Барлық сессия: шамамен 2 сағат 10 минут — 100 минут фокусталған жұмыс."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How long is one Pomodoro cycle (work + break)?",
            questionRu: "Какова длительность одного цикла Помодоро (работа + перерыв)?",
            questionKk: "Бір Помодоро циклінің ұзақтығы қанша (жұмыс + үзіліс)?",
            answer: "30 minutes total: 25 minutes of focused work plus a 5-minute break.",
            answerRu: "Всего 30 минут: 25 минут сфокусированной работы плюс 5 минут перерыва.",
            answerKk: "Барлығы 30 минут: 25 минут фокусталған жұмыс және 5 минуттық үзіліс.",
            hint: "Add the work time and the break time.",
            hintRu: "Сложите время работы и отдыха.",
            hintKk: "Жұмыс уақыты мен үзіліс уақытын қосыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During a Pomodoro, you get a text from a friend. What should you do?",
            questionRu: "Во время Помодоро вам приходит сообщение от друга. Что делать?",
            questionKk: "Помодоро кезінде достан хабарлама келеді. Не істеу керек?",
            answer: "Write down 'reply to friend' on a notepad and continue working. Respond during your 5-minute break. The key rule of Pomodoro is: never interrupt a work sprint.",
            answerRu: "Запишите «ответить другу» в блокнот и продолжайте работать. Ответьте во время 5-минутного перерыва. Главное правило Помодоро: никогда не прерывайте рабочий спринт.",
            answerKk: "«Досқа жауап беру» деп блокнотқа жазып қойыңыз да, жұмысты жалғастырыңыз. 5 минуттық үзіліс кезінде жауап беріңіз. Помодородың басты ережесі: жұмыс спринтін ешқашан үзбеу.",
            hint: "Should you interrupt your focus or handle it later?",
            hintRu: "Стоит ли прерывать концентрацию или заняться этим позже?",
            hintKk: "Зейініңізді үзу керек пе, әлде кейінірек жасау керек пе?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You try the Pomodoro Technique but find 25 minutes too short — you are just getting into deep focus when the timer rings. Should you adjust the times? Design your custom version.",
            questionRu: "Вы пробуете Помодоро, но 25 минут слишком мало — вы только входите в фокус, когда звонит таймер. Стоит ли менять время? Создайте свою версию.",
            questionKk: "Помодоро техникасын қолданасыз, бірақ 25 минут тым аз — таймер сырылғанда тереңге ену басталады. Уақытты өзгерту керек пе? Өзіңіздің нұсқаңызды жасаңыз.",
            answer: "Yes, adjust! If 25 minutes is too short, try 45–50 minute work blocks with 10-minute breaks. The Pomodoro is a framework, not a rigid rule. The key principles to keep: use a timer, take regular breaks, and work in focused sprints. Some people use 90-minute blocks matching the body's natural ultradian rhythm.",
            answerRu: "Да, корректируйте! Если 25 минут слишком мало, попробуйте рабочие блоки по 45–50 минут с 10-минутными перерывами. Помодоро — это каркас, а не жёсткое правило. Ключевые принципы, которые стоит сохранить: использовать таймер, делать регулярные перерывы и работать сфокусированными спринтами. Некоторые используют 90-минутные блоки, соответствующие естественному ультрадианному ритму организма.",
            answerKk: "Иә, реттеңіз! Егер 25 минут тым қысқа болса, 10 минуттық үзілістері бар 45–50 минуттық жұмыс блоктарын қолданып көріңіз. Помодоро — қатаң ереже емес, негіздеме. Сақталатын басты қағидалар: таймер қолдану, тұрақты үзіліс жасау және фокусталған спринттермен жұмыс істеу. Кейбіреулер ағзаның табиғи ультрадиандық ырғағына сәйкес 90 минуттық блоктарды пайдаланады.",
            hint: "The Pomodoro Technique is flexible — what timer length matches your natural focus span?",
            hintRu: "Техника Помодоро гибкая — какая длительность подходит вашему естественному фокусу?",
            hintKk: "Помодоро техникасы икемді — қандай таймер ұзақтығы табиғи зейініңізге сәйкес?",
            xp: 20
          }
        ]
      },
      {
        title: "Calendar & Planner",
        titleRu: "Календарь и ежедневник",
        titleKk: "Күнтізбе және жоспарлағыш",
        content: "A planner or calendar turns invisible deadlines into visible commitments. Write every assignment, test, and activity as soon as you learn about it. Use a monthly view to see the big picture and a daily view for specific tasks. Color-coding by subject makes it easy to spot busy weeks at a glance.",
        contentRu: "Ежедневник или календарь превращает невидимые дедлайны в видимые обязательства. Записывайте каждое задание, тест и мероприятие сразу, как узнаёте. Используйте месячный обзор для общей картины и дневной — для конкретных задач. Цветовое кодирование по предметам помогает видеть загруженные недели.",
        contentKk: "Жоспарлағыш немесе күнтізбе көрінбейтін мерзімдерді көрінетін міндеттемелерге айналдырады. Әр тапсырманы, тестті және іс-шараны білген бойда жазыңыз. Жалпы суретті көру үшін айлық көріністі, нақты тапсырмалар үшін күнделікті көріністі қолданыңыз. Пәндер бойынша түспен кодтау бос емес апталарды бірден көруге мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Write It Down Immediately + Monthly View + Daily View = No Missed Deadlines",
            description: "Calendar system that catches everything",
            descriptionRu: "Система календаря, которая ничего не упускает",
            descriptionKk: "Ештеңені жіберіп алмайтын күнтізбе жүйесі"
          }
        ],
        solvedExamples: [
          {
            question: "On Monday, your teachers announce: math test Friday, science project due next Wednesday, English essay due in 2 weeks. How do you enter these into your planner?",
            questionRu: "В понедельник учителя объявляют: тест по математике в пятницу, научный проект в следующую среду, сочинение по английскому через 2 недели. Как внести в ежедневник?",
            questionKk: "Дүйсенбіде мұғалімдер хабарлайды: жұмада математика тесті, келесі сәрсенбіде жаратылыстану жобасы, 2 аптадан кейін ағылшын эссесі. Жоспарлағышқа қалай жазасыз?",
            steps: [
              { en: "Enter each deadline on its due date. Also add prep reminders: 'Start studying math' on Wednesday, 'Start science project' on Saturday, 'Start English essay' next Monday.", ru: "Внесите каждый дедлайн на дату сдачи. Добавьте напоминания: «Начать учить математику» в среду, «Начать научный проект» в субботу, «Начать сочинение» в понедельник.", kk: "Әр мерзімді тапсыру күніне жазыңыз. Дайындық еске салғыштарын қосыңыз: сәрсенбіде «Математиканы оқуды бастау», сенбіде «Жаратылыстану жобасын бастау», дүйсенбіде «Эссені бастау»." },
              { en: "Color-code: math in blue, science in green, English in red. Now you can see at a glance which weeks are busy.", ru: "Цветовое кодирование: математика — синий, наука — зелёный, английский — красный. Теперь видно загруженные недели.", kk: "Түс кодтау: математика — көк, жаратылыстану — жасыл, ағылшын — қызыл. Енді бос емес апталарды бірден көресіз." }
            ],
            answer: "Write deadlines on due dates, add start-preparation reminders earlier in the week, and color-code by subject.",
            answerRu: "Запишите дедлайны на даты сдачи, добавьте напоминания о начале подготовки раньше в течение недели и используйте цветовое кодирование по предметам.",
            answerKk: "Мерзімдерді тапсыру күндеріне жазыңыз, апта ішінде дайындықты бастау туралы еске салғыштар қосыңыз және пәндер бойынша түспен кодтаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you write down a deadline the moment you hear it, instead of later?",
            questionRu: "Почему дедлайн нужно записывать сразу, как узнали, а не потом?",
            questionKk: "Неліктен мерзімді кейінірек емес, естіген сәтте бірден жазу керек?",
            answer: "If you wait, you might forget. Writing it immediately guarantees you will not miss it.",
            answerRu: "Если подождать, можно забыть. Немедленная запись гарантирует, что вы ничего не пропустите.",
            answerKk: "Күтсеңіз, ұмытып қалуыңыз мүмкін. Бірден жазып алу оны жіберіп алмайтыныңызға кепілдік береді.",
            hint: "What happens if you say 'I will remember it' but forget?",
            hintRu: "Что будет, если вы скажете «Я запомню» и забудете?",
            hintKk: "«Есімде сақтаймын» деп ұмытып қалсаңыз не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Digital calendar or paper planner — which is better for a student? Give one advantage of each.",
            questionRu: "Цифровой календарь или бумажный ежедневник — что лучше для ученика? Назовите одно преимущество каждого.",
            questionKk: "Цифрлық күнтізбе немесе қағаз жоспарлағыш — оқушыға қайсысы жақсы? Әрқайсысының бір артықшылығын атаңыз.",
            answer: "Digital: can set automatic reminders and sync across devices. Paper: writing by hand improves memory and has no phone distractions. Either works if used consistently.",
            answerRu: "Цифровой: можно ставить автоматические напоминания и синхронизировать между устройствами. Бумажный: письмо от руки улучшает память и не отвлекает на телефон. Подойдёт любой, если пользоваться им постоянно.",
            answerKk: "Цифрлық: автоматты еске салғыштар қоюға және құрылғылар арасында синхрондауға болады. Қағаз: қолмен жазу жадыны жақсартады және телефонға алаңдатпайды. Тұрақты пайдалансаңыз, екеуі де жарайды.",
            hint: "Think about reminders vs. memory benefits.",
            hintRu: "Подумайте о напоминаниях vs. пользе для памяти.",
            hintKk: "Еске салғыштар мен есте сақтау пайдасын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a color-coding system for a student taking 6 subjects, plus extracurricular activities and personal tasks. Explain the logic behind your color choices.",
            questionRu: "Разработайте систему цветового кодирования для ученика с 6 предметами, кружками и личными делами. Объясните логику выбора цветов.",
            questionKk: "6 пән, қосымша іс-шаралар және жеке тапсырмалар бар оқушы үшін түс кодтау жүйесін жасаңыз. Түс таңдаудың логикасын түсіндіріңіз.",
            answer: "Example: Math (blue — logical/cool), Science (green — nature), English (red — important/attention), History (brown — earth/past), Art (purple — creative), Foreign Language (orange — warm/cultural), Extracurriculars (yellow — energy), Personal (gray — neutral). Logic: use distinct colors that are easy to tell apart, and associate colors with the subject's feel.",
            answerRu: "Пример: математика (синий — логика/холод), наука (зелёный — природа), английский (красный — важное/внимание), история (коричневый — земля/прошлое), рисование (фиолетовый — творчество), иностранный язык (оранжевый — тепло/культура), кружки (жёлтый — энергия), личное (серый — нейтральное). Логика: использовать хорошо различимые цвета и связывать цвета с ощущением предмета.",
            answerKk: "Мысал: математика (көк — логика/салқын), жаратылыстану (жасыл — табиғат), ағылшын (қызыл — маңызды/назар), тарих (қоңыр — жер/өткен), сурет (күлгін — шығармашылық), шет тілі (қызғылт сары — жылу/мәдениет), қосымша іс-шаралар (сары — энергия), жеке (сұр — бейтарап). Логика: бір-бірінен оңай ажыратылатын түстерді пайдаланып, түстерді пәннің сипатымен байланыстыру.",
            hint: "Choose colors that look very different from each other so you can scan quickly.",
            hintRu: "Выбирайте цвета, хорошо отличающиеся друг от друга для быстрого сканирования.",
            hintKk: "Тез қарау үшін бір-бірінен жақсы ерекшеленетін түстерді таңдаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Prioritization",
        titleRu: "Расстановка приоритетов",
        titleKk: "Басымдық қою",
        content: "Not all tasks are equally important. Prioritization means deciding which tasks matter most and doing those first. A simple method: label each task as A (must do today), B (should do soon), or C (can wait). Always finish all A tasks before starting any B task.",
        contentRu: "Не все задачи одинаково важны. Расстановка приоритетов означает определение самых важных задач и выполнение их первыми. Простой метод: пометьте задачи как A (сделать сегодня), B (сделать скоро), C (может подождать). Всегда завершайте все задачи A, прежде чем переходить к B.",
        contentKk: "Барлық тапсырмалар бірдей маңызды емес. Басымдық қою — ең маңызды тапсырмаларды анықтап, оларды бірінші орындау. Қарапайым әдіс: тапсырмаларды A (бүгін орындау), B (жақында орындау), C (күте алады) деп белгілеңіз. B тапсырмасын бастамас бұрын барлық A тапсырмаларын аяқтаңыз.",
        keyFormulas: [
          {
            formula: "A (Must Do Today) → B (Should Do Soon) → C (Can Wait)",
            description: "ABC prioritization method",
            descriptionRu: "Метод приоритизации ABC",
            descriptionKk: "ABC басымдық қою әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Your task list: study for tomorrow's quiz, clean your room, start a project due next week, reply to a friend's text, buy supplies for art class on Thursday. Prioritize using ABC.",
            questionRu: "Ваш список: подготовиться к завтрашнему тесту, убрать комнату, начать проект (сдача через неделю), ответить другу, купить материалы для урока рисования в четверг. Расставьте приоритеты ABC.",
            questionKk: "Тізіміңіз: ертеңгі тестке дайындалу, бөлмені жинау, келесі аптадағы жобаны бастау, досқа жауап жазу, бейсенбідегі сурет сабағына материал сатып алу. ABC басымдығын қойыңыз.",
            steps: [
              { en: "A tasks (must do today): study for tomorrow's quiz. B tasks (should do soon): start the project, buy art supplies. C tasks (can wait): clean room, reply to friend.", ru: "A (сделать сегодня): подготовка к тесту. B (скоро): начать проект, купить материалы. C (может подождать): уборка, ответ другу.", kk: "A (бүгін орындау): тестке дайындалу. B (жақында): жобаны бастау, материал сатып алу. C (күте алады): бөлмені жинау, досқа жауап." },
              { en: "Do A first (study), then B if time remains. Reply to friend during a break (takes 2 minutes). Clean room on the weekend.", ru: "Сначала A (учёба), потом B при наличии времени. Ответ другу — на перерыве (2 минуты). Уборка — на выходных.", kk: "Алдымен A (оқу), уақыт қалса B. Досқа жауап — үзілісте (2 минут). Бөлмені жинау — демалыс күні." }
            ],
            answer: "A: Study for quiz. B: Start project, buy art supplies. C: Clean room, reply to friend. Do all A tasks first.",
            answerRu: "A: подготовиться к тесту. B: начать проект, купить материалы для рисования. C: убрать комнату, ответить другу. Сначала выполните все задачи A.",
            answerKk: "A: тестке дайындалу. B: жобаны бастау, сурет материалдарын сатып алу. C: бөлмені жинау, досқа жауап беру. Алдымен барлық A тапсырмаларын орындаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does 'A priority' mean in the ABC method?",
            questionRu: "Что означает «приоритет A» в методе ABC?",
            questionKk: "ABC әдісінде «A басымдығы» нені білдіреді?",
            answer: "A priority means it must be done today — it is urgent and important.",
            answerRu: "Приоритет A означает, что задачу нужно сделать сегодня — она срочная и важная.",
            answerKk: "A басымдығы тапсырманы бүгін орындау керек дегенді білдіреді — ол шұғыл әрі маңызды.",
            hint: "Think of A as 'absolutely must do.'",
            hintRu: "Подумайте об A как «абсолютно необходимо сделать».",
            hintKk: "A-ны «міндетті түрде орындау» деп ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have two A-priority tasks but only time for one. How do you decide which to do first?",
            questionRu: "У вас две задачи приоритета A, но время только на одну. Как решить, какую делать первой?",
            questionKk: "Екі A-басымдықты тапсырма бар, бірақ біреуіне ғана уақыт жетеді. Қайсысын бірінші орындауды қалай шешесіз?",
            answer: "Choose by consequence: which task has a worse outcome if not done? If a quiz is worth 20% of your grade and the other task can be partially done, prioritize the quiz. Also consider which deadline is earlier.",
            answerRu: "Выбирайте по последствиям: у какой задачи будет хуже результат, если её не сделать? Если тест составляет 20% оценки, а другую задачу можно выполнить частично, отдайте приоритет тесту. Также учитывайте, какой дедлайн раньше.",
            answerKk: "Зардабы бойынша таңдаңыз: орындалмаса, қай тапсырманың нәтижесі нашарырақ? Егер тест бағаның 20%-ын құраса және екінші тапсырманы ішінара орындауға болса, тестке басымдық беріңіз. Қай мерзімнің жақынырақ екенін де ескеріңіз.",
            hint: "Which one has bigger consequences if you skip it?",
            hintRu: "Какая задача имеет более серьёзные последствия при пропуске?",
            hintKk: "Қай тапсырманы жіберіп алсаңыз ауырлау зардаптар болады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have 8 tasks to do today. Assign each an ABC priority and create a schedule: homework (due tomorrow), grocery shopping (mom asked), video game tournament (today 7 PM), dentist at 4 PM, clean room, study for Friday test, call grandma (birthday today), finish a library book (due today).",
            questionRu: "Сегодня 8 задач. Присвойте каждой приоритет ABC и составьте расписание: домашнее задание (на завтра), продукты (мама просила), турнир по видеоиграм (сегодня 19:00), стоматолог в 16:00, уборка, подготовка к пятничному тесту, позвонить бабушке (у неё день рождения), вернуть книгу в библиотеку (срок сегодня).",
            questionKk: "Бүгін 8 тапсырма. Әрқайсысына ABC басымдығын қойып, кесте жасаңыз: үй тапсырмасы (ертеңге), азық-түлік (анам сұрады), видеоойын турнирі (бүгін 19:00), 16:00-де тіс дәрігері, бөлмені жинау, жұмалық тестке дайындық, әжеге қоңырау (бүгін туған күні), кітапхана кітабын қайтару (мерзімі бүгін).",
            answer: "A: Homework (due tomorrow), return library book (due today), call grandma (birthday today), dentist at 4 PM (fixed appointment). B: Study for Friday test (important but not urgent today), grocery shopping (mom asked). C: Clean room (can wait), video game tournament (fun but lowest priority). Schedule: morning — homework + library book, 12 PM call grandma, 4 PM dentist, evening — study for Friday test, buy groceries.",
            answerRu: "A: домашнее задание (сдача завтра), вернуть библиотечную книгу (срок сегодня), позвонить бабушке (день рождения сегодня), стоматолог в 4 PM (фиксированная запись). B: подготовка к пятничному тесту (важно, но сегодня не срочно), продукты (мама просила). C: убрать комнату (может подождать), турнир по видеоиграм (весело, но самый низкий приоритет). Расписание: утром — домашнее задание + библиотечная книга, в 12 PM позвонить бабушке, в 4 PM стоматолог, вечером — подготовка к пятничному тесту, покупка продуктов.",
            answerKk: "A: үй тапсырмасы (ертең тапсыру), кітапхана кітабын қайтару (мерзімі бүгін), әжеге қоңырау шалу (бүгін туған күні), 4 PM-да тіс дәрігері (бекітілген қабылдау). B: жұмалық тестке дайындық (маңызды, бірақ бүгін шұғыл емес), азық-түлік сатып алу (анам сұрады). C: бөлмені жинау (күте алады), видеоойын турнирі (қызық, бірақ ең төмен басымдық). Кесте: таңертең — үй тапсырмасы + кітапхана кітабы, 12 PM әжеге қоңырау, 4 PM тіс дәрігері, кеште — жұмалық тестке дайындық, азық-түлік сатып алу.",
            hint: "Fixed-time events and deadlines automatically become A priorities.",
            hintRu: "Мероприятия с фиксированным временем и дедлайны автоматически становятся приоритетом A.",
            hintKk: "Тұрақты уақытты іс-шаралар мен мерзімдер автоматты түрде A басымдығы болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Cornell Notes",
        titleRu: "Конспекты Корнелла",
        titleKk: "Корнелл жазбалары",
        content: "The Cornell Note-Taking System divides your page into three sections: a narrow left column for cue questions, a wide right column for notes during class, and a bottom section for a summary. After class, write questions in the left column based on your notes, then cover the right side and quiz yourself using the cues.",
        contentRu: "Система конспектирования Корнелла делит страницу на три части: узкая левая колонка для вопросов-подсказок, широкая правая — для заметок на уроке, и нижняя часть — для резюме. После урока напишите вопросы слева на основе заметок, затем закройте правую часть и проверьте себя по подсказкам.",
        contentKk: "Корнелл жазба жүйесі бетті үш бөлікке бөледі: сұрақтар үшін тар сол жақ баған, сабақ кезіндегі жазбалар үшін кең оң жақ баған және қорытынды үшін төменгі бөлік. Сабақтан кейін жазбаларыңызға негізделген сұрақтарды сол жаққа жазыңыз, содан кейін оң жақты жауып, сұрақтар бойынша өзіңізді тексеріңіз.",
        keyFormulas: [
          {
            formula: "Left Column (Cues) + Right Column (Notes) + Bottom (Summary) = Cornell System",
            description: "Three zones of the Cornell note page",
            descriptionRu: "Три зоны страницы конспекта Корнелла",
            descriptionKk: "Корнелл жазба бетінің үш аймағы"
          }
        ],
        solvedExamples: [
          {
            question: "During a biology class on cells, the teacher explains: 'The cell membrane controls what enters and exits the cell. The nucleus contains DNA and controls cell activities. Mitochondria produce energy.' Create Cornell Notes.",
            questionRu: "На уроке биологии о клетках учитель объясняет: «Клеточная мембрана контролирует вход и выход веществ. Ядро содержит ДНК и управляет деятельностью клетки. Митохондрии производят энергию.» Создайте конспект Корнелла.",
            questionKk: "Жасушалар туралы биология сабағында мұғалім түсіндіреді: «Жасуша мембранасы жасушаға кіретін және шығатын заттарды бақылайды. Ядро ДНҚ-ны қамтиды және жасуша қызметін басқарады. Митохондриялар энергия өндіреді.» Корнелл жазбасын жасаңыз.",
            steps: [
              { en: "Right column (during class): '• Cell membrane — controls entry/exit. • Nucleus — has DNA, controls activities. • Mitochondria — produce energy.'", ru: "Правая колонка (на уроке): «• Мембрана — контролирует вход/выход. • Ядро — содержит ДНК, управляет. • Митохондрии — производят энергию.»", kk: "Оң жақ баған (сабақта): «• Мембрана — кіру/шығуды бақылайды. • Ядро — ДНҚ бар, басқарады. • Митохондриялар — энергия өндіреді.»" },
              { en: "Left column (after class): 'What does the cell membrane do? Where is DNA found? What produces energy in a cell?' Bottom summary: 'Three key cell parts: membrane (gatekeeper), nucleus (command center), mitochondria (power plant).'", ru: "Левая колонка (после урока): «Что делает мембрана? Где находится ДНК? Что производит энергию?» Резюме: «Три части клетки: мембрана (страж), ядро (центр управления), митохондрии (электростанция).»", kk: "Сол жақ баған (сабақтан кейін): «Мембрана не істейді? ДНҚ қайда? Энергияны не өндіреді?» Қорытынды: «Жасушаның үш бөлігі: мембрана (қақпашы), ядро (басқару орталығы), митохондриялар (электр станциясы).»" }
            ],
            answer: "Notes column: bullet-pointed facts. Cue column: questions from those facts. Summary: one-sentence overview connecting all three cell parts.",
            answerRu: "Колонка заметок: факты маркированным списком. Колонка подсказок: вопросы по этим фактам. Резюме: обзор одним предложением, связывающий все три части клетки.",
            answerKk: "Жазба бағаны: таңбалы тізімдегі фактілер. Сұрақ бағаны: сол фактілер бойынша сұрақтар. Қорытынды: жасушаның үш бөлігін байланыстыратын бір сөйлемді шолу."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three sections of a Cornell Note page?",
            questionRu: "Какие три раздела на странице конспекта Корнелла?",
            questionKk: "Корнелл жазба бетінің үш бөлімі қандай?",
            answer: "Left column for cue questions, right column for notes, and bottom section for a summary.",
            answerRu: "Левая колонка для вопросов-подсказок, правая колонка для заметок и нижняя часть для резюме.",
            answerKk: "Сол жақ баған — сұрақтар үшін, оң жақ баған — жазбалар үшін, төменгі бөлік — қорытынды үшін.",
            hint: "Think about left, right, and bottom of the page.",
            hintRu: "Подумайте о левой, правой и нижней частях страницы.",
            hintKk: "Беттің сол, оң және төменгі бөліктерін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How do you use Cornell Notes to study for a test? Describe the self-quizzing process.",
            questionRu: "Как использовать конспекты Корнелла для подготовки к тесту? Опишите процесс самопроверки.",
            questionKk: "Тестке дайындалу үшін Корнелл жазбаларын қалай қолданасыз? Өзін-өзі тексеру процесін сипаттаңыз.",
            answer: "Cover the right column (notes) with a sheet of paper. Read each question in the left column and try to answer it from memory. Uncover to check. Mark questions you got wrong and review those again.",
            answerRu: "Закройте правую колонку (заметки) листом бумаги. Прочитайте каждый вопрос в левой колонке и попробуйте ответить по памяти. Откройте и проверьте. Отметьте вопросы, в которых ошиблись, и повторите их снова.",
            answerKk: "Оң жақ бағанды (жазбаларды) қағаз парағымен жабыңыз. Сол жақ бағандағы әр сұрақты оқып, жадыдан жауап беруге тырысыңыз. Ашып тексеріңіз. Қате жауап берген сұрақтарды белгілеп, оларды қайта қарап шығыңыз.",
            hint: "Which column do you cover — the questions or the answers?",
            hintRu: "Какую колонку закрывать — вопросы или ответы?",
            hintKk: "Қай бағанды жабасыз — сұрақтарды ма, жауаптарды ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare Cornell Notes to regular note-taking (just writing everything down). Explain two specific advantages of the Cornell system for learning.",
            questionRu: "Сравните конспекты Корнелла с обычным конспектированием. Объясните два конкретных преимущества системы Корнелла для обучения.",
            questionKk: "Корнелл жазбаларын кәдімгі жазба жасаумен салыстырыңыз. Корнелл жүйесінің оқу үшін екі нақты артықшылығын түсіндіріңіз.",
            answer: "1) Built-in review tool: the cue column creates a ready-made self-quiz, turning notes into an active study tool rather than a passive record. 2) Forces summarization: the bottom summary requires you to distill the main idea, which deepens understanding. Regular notes lack both these features.",
            answerRu: "1) Встроенный инструмент повторения: колонка подсказок создаёт готовую самопроверку, превращая заметки в активный инструмент учёбы, а не пассивную запись. 2) Заставляет резюмировать: нижнее резюме требует выделить главную мысль, что углубляет понимание. Обычные конспекты лишены обеих этих особенностей.",
            answerKk: "1) Кіріктірілген қайталау құралы: сұрақ бағаны дайын өзін-өзі тексеруді құрайды, жазбаларды пассивті жазба емес, белсенді оқу құралына айналдырады. 2) Қорытындылауға мәжбүрлейді: төменгі қорытынды негізгі ойды түйіндіруді талап етеді, бұл түсінуді тереңдетеді. Кәдімгі жазбаларда осы екі мүмкіндік те жоқ.",
            hint: "What can you do with Cornell Notes that you cannot do with plain notes?",
            hintRu: "Что можно делать с конспектами Корнелла, но нельзя с обычными записями?",
            hintKk: "Корнелл жазбаларымен не істей аласыз, бірақ кәдімгі жазбалармен істей алмайсыз?",
            xp: 20
          }
        ]
      },
      {
        title: "Active Reading",
        titleRu: "Активное чтение",
        titleKk: "Белсенді оқу",
        content: "Active reading means engaging with the text instead of passively scanning words. Before reading, turn each heading into a question. While reading, highlight or underline only key phrases, not full sentences. After reading each section, close the book and explain the main idea in your own words.",
        contentRu: "Активное чтение означает взаимодействие с текстом, а не пассивное сканирование слов. Перед чтением превратите каждый заголовок в вопрос. Во время чтения выделяйте только ключевые фразы, а не полные предложения. После каждого раздела закройте книгу и объясните главную мысль своими словами.",
        contentKk: "Белсенді оқу — сөздерді пассивті қарау емес, мәтінмен өзара әрекеттесу. Оқу алдында әр тақырыпты сұраққа айналдырыңыз. Оқу кезінде толық сөйлемдерді емес, тек негізгі сөз тіркестерін белгілеңіз. Әр бөлімнен кейін кітапты жабып, негізгі идеяны өз сөзіңізбен түсіндіріңіз.",
        keyFormulas: [
          {
            formula: "Question → Read → Highlight Key Phrases → Explain Without Looking",
            description: "Four-step active reading process",
            descriptionRu: "Четырёхшаговый процесс активного чтения",
            descriptionKk: "Белсенді оқудың төрт қадамдық процесі"
          }
        ],
        solvedExamples: [
          {
            question: "A textbook section is titled 'Causes of World War I.' Apply the active reading technique.",
            questionRu: "Раздел учебника называется «Причины Первой мировой войны». Примените технику активного чтения.",
            questionKk: "Оқулық бөлімі «Бірінші дүниежүзілік соғыстың себептері» деп аталады. Белсенді оқу техникасын қолданыңыз.",
            steps: [
              { en: "Turn heading into a question: 'What were the causes of World War I?' Now read with purpose — you are searching for answers.", ru: "Превратите заголовок в вопрос: «Каковы были причины Первой мировой войны?» Читайте целенаправленно — ищите ответы.", kk: "Тақырыпты сұраққа айналдырыңыз: «Бірінші дүниежүзілік соғыстың себептері қандай болды?» Мақсатты оқыңыз — жауаптарды іздеңіз." },
              { en: "After reading, close the book and answer: 'The four main causes were alliances, imperialism, militarism, and nationalism (MAIN).' Check your answer against the text.", ru: "После чтения закройте книгу и ответьте: «Четыре основные причины: союзы, империализм, милитаризм и национализм.» Проверьте по тексту.", kk: "Оқығаннан кейін кітапты жабып жауап беріңіз: «Төрт негізгі себеп: одақтар, империализм, милитаризм және ұлтшылдық.» Мәтінмен тексеріңіз." }
            ],
            answer: "Question: 'What caused WWI?' Read to find answers, then close the book and recall: alliances, imperialism, militarism, nationalism.",
            answerRu: "Вопрос: «Что стало причиной Первой мировой войны?» Читайте, чтобы найти ответы, затем закройте книгу и вспомните: союзы, империализм, милитаризм, национализм.",
            answerKk: "Сұрақ: «Бірінші дүниежүзілік соғысқа не себеп болды?» Жауаптарын табу үшін оқыңыз, содан кейін кітапты жауып еске түсіріңіз: одақтар, империализм, милитаризм, ұлтшылдық."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Turn this heading into a question: 'The Structure of an Atom.'",
            questionRu: "Превратите заголовок в вопрос: «Строение атома».",
            questionKk: "Мына тақырыпты сұраққа айналдырыңыз: «Атомның құрылысы».",
            answer: "'What is the structure of an atom?' or 'What parts make up an atom?'",
            answerRu: "«Каково строение атома?» или «Из каких частей состоит атом?»",
            answerKk: "«Атомның құрылысы қандай?» немесе «Атомды қандай бөліктер құрайды?»",
            hint: "Start with 'What,' 'How,' or 'Why.'",
            hintRu: "Начните с «Что», «Как» или «Почему».",
            hintKk: "«Не», «Қалай» немесе «Неліктен» деп бастаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend highlights almost every sentence in the textbook in yellow. Why is this ineffective and what should they do instead?",
            questionRu: "Ваш друг выделяет почти каждое предложение в учебнике жёлтым. Почему это неэффективно и что делать вместо этого?",
            questionKk: "Досыңыз оқулықтағы әр сөйлемді сары түспен белгілейді. Бұл неліктен тиімсіз және оның орнына не істеу керек?",
            answer: "Highlighting everything is the same as highlighting nothing — it does not distinguish important from unimportant. Instead, highlight only key terms and short phrases (roughly 10-15% of the text). This forces the brain to decide what matters.",
            answerRu: "Выделить всё — то же самое, что не выделить ничего: это не отличает важное от неважного. Вместо этого выделяйте только ключевые термины и короткие фразы (примерно 10-15% текста). Это заставляет мозг решать, что действительно важно.",
            answerKk: "Бәрін белгілеу — ештеңені белгілемеумен бірдей: маңыздыны маңызды емес еместен ажыратпайды. Оның орнына тек негізгі терминдер мен қысқа сөз тіркестерін белгілеңіз (мәтіннің шамамен 10-15%-ы). Бұл миды не маңызды екенін шешуге мәжбүрлейді.",
            hint: "If everything is highlighted, does anything stand out?",
            hintRu: "Если всё выделено, что-нибудь выделяется?",
            hintKk: "Бәрі белгіленсе, бірдеңе ерекшелене ме?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete active reading worksheet that a student could use for any textbook chapter. Include at least 4 sections with instructions.",
            questionRu: "Разработайте полный рабочий лист активного чтения для любой главы учебника. Включите минимум 4 раздела с инструкциями.",
            questionKk: "Кез келген оқулық тарауы үшін толық белсенді оқу жұмыс парағын жасаңыз. Нұсқаулықтары бар кемінде 4 бөлімді қосыңыз.",
            answer: "Worksheet: 1) Pre-Reading: write the chapter title as a question, list what you already know. 2) During Reading: for each section, write the heading-question and 2-3 key points. 3) Post-Reading: close the book and write a 3-sentence summary. 4) Self-Check: list 3 things you learned and 1 thing you are still confused about. 5) Review: come back tomorrow and try to answer your heading-questions from memory.",
            answerRu: "Рабочий лист: 1) Перед чтением: запишите название главы как вопрос, перечислите, что уже знаете. 2) Во время чтения: для каждого раздела запишите вопрос-заголовок и 2-3 ключевых пункта. 3) После чтения: закройте книгу и напишите резюме из 3 предложений. 4) Самопроверка: перечислите 3 вещи, которые узнали, и 1 вещь, которая всё ещё непонятна. 5) Повторение: вернитесь завтра и попробуйте ответить на вопросы-заголовки по памяти.",
            answerKk: "Жұмыс парағы: 1) Оқу алдында: тарау атауын сұрақ түрінде жазыңыз, не білетініңізді тізіңіз. 2) Оқу кезінде: әр бөлімге тақырып-сұрақ және 2-3 негізгі ой жазыңыз. 3) Оқудан кейін: кітапты жауып, 3 сөйлемді қорытынды жазыңыз. 4) Өзін-өзі тексеру: үйренген 3 нәрсені және әлі түсініксіз 1 нәрсені тізіңіз. 5) Қайталау: ертең қайта оралып, тақырып-сұрақтарға жадыдан жауап беруге тырысыңыз.",
            hint: "Include before, during, and after reading sections.",
            hintRu: "Включите секции до, во время и после чтения.",
            hintKk: "Оқу алдындағы, кезіндегі және кейінгі бөлімдерді қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Memory Techniques",
        titleRu: "Техники запоминания",
        titleKk: "Есте сақтау техникалары",
        content: "Memory techniques transform boring facts into memorable images and stories. Mnemonics like acronyms (ROY G. BIV for rainbow colors) and the method of loci (placing items in imaginary rooms) help you recall information by linking it to something vivid. The more unusual or funny the image, the better you will remember it.",
        contentRu: "Техники запоминания превращают скучные факты в запоминающиеся образы и истории. Мнемоники — акронимы (Каждый Охотник Желает Знать для цветов радуги) и метод локусов (размещение предметов в воображаемых комнатах) — помогают вспоминать, связывая информацию с ярким образом. Чем необычнее образ, тем лучше запомните.",
        contentKk: "Есте сақтау техникалары қызықсыз фактілерді есте қаларлық бейнелер мен оқиғаларға айналдырады. Мнемоникалар — аббревиатуралар және орын әдісі (заттарды елес бөлмелерге орналастыру) — ақпаратты жарқын бейнемен байланыстырып есте сақтауға көмектеседі. Бейне неғұрлым ерекше болса, соғұрлым жақсы есте сақтайсыз.",
        keyFormulas: [
          {
            formula: "Abstract Fact + Vivid Image = Memorable Association",
            description: "Core principle of mnemonics",
            descriptionRu: "Основной принцип мнемоник",
            descriptionKk: "Мнемониканың негізгі қағидасы"
          },
          {
            formula: "Method of Loci: Place each item in a room of your imaginary house",
            description: "Spatial memory technique for ordered lists",
            descriptionRu: "Техника пространственной памяти для упорядоченных списков",
            descriptionKk: "Реттелген тізімдер үшін кеңістіктік есте сақтау техникасы"
          }
        ],
        solvedExamples: [
          {
            question: "You need to memorize the order of the planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Create a mnemonic.",
            questionRu: "Нужно запомнить порядок планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун. Создайте мнемонику.",
            questionKk: "Планеталардың ретін жаттау керек: Меркурий, Шолпан, Жер, Марс, Юпитер, Сатурн, Уран, Нептун. Мнемоника жасаңыз.",
            steps: [
              { en: "Take the first letter of each planet: M, V, E, M, J, S, U, N.", ru: "Возьмите первые буквы: М, В, З, М, Ю, С, У, Н.", kk: "Әр планетаның бірінші әрпін алыңыз: М, Ш, Ж, М, Ю, С, У, Н." },
              { en: "Create a sentence: 'My Very Excited Mother Just Served Us Nachos.' The sillier the sentence, the easier to remember.", ru: "Создайте предложение: «Мой Весёлый Зонтик Мчался Южным Светлым Утром Напрямик.» Чем смешнее, тем легче запомнить.", kk: "Сөйлем жасаңыз: «Менің Шынайы Жүрегім Маңайда Жүріп Сағынды Ұзақ Нұрды.» Неғұрлым күлкілі болса, соғұрлым оңай есте қалады." }
            ],
            answer: "'My Very Excited Mother Just Served Us Nachos' — M(ercury), V(enus), E(arth), M(ars), J(upiter), S(aturn), U(ranus), N(eptune).",
            answerRu: "«Мой Весёлый Зонтик Мчался Южным Светлым Утром Напрямик» — М(еркурий), В(енера), З(емля), М(арс), Ю(питер), С(атурн), У(ран), Н(ептун).",
            answerKk: "«Менің Шынайы Жүрегім Маңайда Жүріп Сағынды Ұзақ Нұрды» — М(еркурий), Ш(олпан), Ж(ер), М(арс), Ю(питер), С(атурн), У(ран), Н(ептун)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Create a mnemonic for the Great Lakes: Huron, Ontario, Michigan, Erie, Superior.",
            questionRu: "Создайте мнемонику для Великих озёр: Гурон, Онтарио, Мичиган, Эри, Верхнее.",
            questionKk: "Ұлы көлдер үшін мнемоника жасаңыз: Гурон, Онтарио, Мичиган, Эри, Жоғарғы.",
            answer: "HOMES: Huron, Ontario, Michigan, Erie, Superior. The acronym spells a common word, making it easy to remember.",
            answerRu: "HOMES: Huron, Ontario, Michigan, Erie, Superior. Аббревиатура складывается в обычное слово, поэтому её легко запомнить.",
            answerKk: "HOMES: Huron, Ontario, Michigan, Erie, Superior. Аббревиатура жиі кездесетін сөзді құрайды, сондықтан оны есте сақтау оңай.",
            hint: "Try using the first letters to spell a word.",
            hintRu: "Попробуйте составить слово из первых букв.",
            hintKk: "Бірінші әріптерден сөз құрастырып көріңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Use the method of loci to memorize a grocery list of 5 items: milk, bread, apples, chicken, and rice. Describe the mental images.",
            questionRu: "Используйте метод локусов для запоминания списка из 5 продуктов: молоко, хлеб, яблоки, курица, рис. Опишите мысленные образы.",
            questionKk: "5 азық-түлікті жаттау үшін орын әдісін қолданыңыз: сүт, нан, алма, тауық, күріш. Ойдағы бейнелерді сипаттаңыз.",
            answer: "Front door: a giant milk carton blocks the entrance. Hallway: bread loaves line the floor like stepping stones. Kitchen: apples are raining from the ceiling. Living room: a live chicken sits on the couch watching TV. Bedroom: the bed is filled with rice instead of blankets. The more absurd, the more memorable.",
            answerRu: "Входная дверь: гигантский пакет молока загораживает вход. Коридор: батоны хлеба лежат на полу, как камни для перешагивания. Кухня: с потолка сыплются яблоки. Гостиная: живая курица сидит на диване и смотрит телевизор. Спальня: кровать засыпана рисом вместо одеял. Чем абсурднее, тем лучше запомнится.",
            answerKk: "Кіреберіс есік: алып сүт қорабы кірер жолды бөгеп тұр. Дәліз: нан бөліктері еденде секіріп өтетін тастардай тізілген. Ас үй: төбеден алма жауып тұр. Қонақ бөлме: тірі тауық диванда отырып теледидар көріп тұр. Жатын бөлме: төсек көрпенің орнына күрішке толтырылған. Неғұрлым абсурд болса, соғұрлым есте қалады.",
            hint: "Walk through your house and place each item in a different room with a crazy image.",
            hintRu: "Пройдите по дому и поместите каждый продукт в отдельную комнату с безумным образом.",
            hintKk: "Үйіңізден өтіп, әр затты ерекше бейнемен бөлек бөлмеге орналастырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to memorize the first 10 elements of the periodic table in order: Hydrogen, Helium, Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine, Neon. Create both an acronym mnemonic AND a method-of-loci memory palace.",
            questionRu: "Нужно запомнить первые 10 элементов: Водород, Гелий, Литий, Бериллий, Бор, Углерод, Азот, Кислород, Фтор, Неон. Создайте и акроним, и дворец памяти.",
            questionKk: "Алғашқы 10 элементті жаттау керек: Сутек, Гелий, Литий, Бериллий, Бор, Көміртек, Азот, Оттек, Фтор, Неон. Аббревиатура мен ес сарайын жасаңыз.",
            answer: "Acronym: 'Happy Henry Likes Beer But Could Not Obtain Four Nuts' (H, He, Li, Be, B, C, N, O, F, Ne). Memory palace: Front gate — a hydrogen balloon floats. Mailbox — filled with helium balloons. Door — a lithium battery taped to it. Hallway — berries (beryllium) on floor. Kitchen — boring (boron) empty room. Dining room — carbon charcoal on table. Bathroom — nitrogen fog everywhere. Bedroom — oxygen mask on pillow. Closet — fluorescent (fluorine) lights. Garage — neon signs flashing.",
            answerRu: "Акроним: 'Happy Henry Likes Beer But Could Not Obtain Four Nuts' (H, He, Li, Be, B, C, N, O, F, Ne). Дворец памяти: входные ворота — парит водородный шарик. Почтовый ящик — наполнен гелиевыми шариками. Дверь — к ней приклеен литиевый аккумулятор. Коридор — ягоды (бериллий) на полу. Кухня — скучная (бор) пустая комната. Столовая — уголь (углерод) на столе. Ванная — везде азотный туман. Спальня — кислородная маска на подушке. Шкаф — люминесцентные (фтор) лампы. Гараж — мигающие неоновые вывески.",
            answerKk: "Аббревиатура: 'Happy Henry Likes Beer But Could Not Obtain Four Nuts' (H, He, Li, Be, B, C, N, O, F, Ne). Ес сарайы: қақпа — сутек шары ұшып тұр. Пошта жәшігі — гелий шарларына толған. Есік — литий батареясы жапсырылған. Дәліз — еденде жидектер (бериллий). Ас үй — зеріктіретін (бор) бос бөлме. Ас бөлмесі — үстелде көміртек көмірі. Жуынатын бөлме — бәрі жерде азот тұманы. Жатын бөлме — жастықта оттегі маскасы. Шкаф — флуоресцентті (фтор) шамдар. Гараж — неон белгілер жыпылықтайды.",
            hint: "For the acronym, use the first letter of each element. For the memory palace, create vivid images in 10 locations.",
            hintRu: "Для акронима используйте первые буквы. Для дворца памяти создайте яркие образы в 10 местах.",
            hintKk: "Аббревиатура үшін бірінші әріптерді қолданыңыз. Ес сарайы үшін 10 орында жарқын бейнелер жасаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Study Groups",
        titleRu: "Учебные группы",
        titleKk: "Оқу топтары",
        content: "Study groups combine different perspectives and make learning social. The key to effective study groups: keep them small (3–4 people), set a clear agenda before meeting, and take turns teaching each other concepts. Teaching a topic to someone else is the most powerful way to solidify your own understanding.",
        contentRu: "Учебные группы объединяют разные точки зрения и делают обучение социальным. Ключи к эффективным группам: маленький размер (3–4 человека), чёткая повестка перед встречей и поочерёдное объяснение тем друг другу. Объяснение темы кому-то — самый мощный способ закрепить собственное понимание.",
        contentKk: "Оқу топтары әртүрлі көзқарастарды біріктіреді және оқуды әлеуметтік етеді. Тиімді топтардың кілті: кіші көлем (3–4 адам), кездесу алдында нақты жоспар және кезекпен тұжырымдамаларды бір-біріне үйрету. Тақырыпты біреуге түсіндіру — өз түсінігіңізді нығайтудың ең күшті жолы.",
        keyFormulas: [
          {
            formula: "3–4 People + Agenda + Teach Each Other = Effective Study Group",
            description: "Three rules for productive group study",
            descriptionRu: "Три правила продуктивной групповой учёбы",
            descriptionKk: "Өнімді топтық оқудың үш ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "You form a study group for a history test covering 4 topics. There are 4 members. How should you organize the session?",
            questionRu: "Вы формируете группу для подготовки к тесту по истории по 4 темам. В группе 4 человека. Как организовать занятие?",
            questionKk: "4 тақырыпты қамтитын тарих тестіне дайындалу тобын құрасыз. Топта 4 мүше. Сабақты қалай ұйымдастыру керек?",
            steps: [
              { en: "Assign one topic to each person to become the 'expert' on. Each person studies their topic deeply before the meeting.", ru: "Назначьте каждому по теме. Каждый глубоко изучает свою тему перед встречей.", kk: "Әр адамға бір тақырып тағайындаңыз. Әркім кездесу алдында өз тақырыбын терең оқиды." },
              { en: "During the meeting: each expert teaches their topic for 15 minutes. Others ask questions. After all 4 presentations, quiz each other on all topics.", ru: "На встрече: каждый эксперт объясняет свою тему 15 минут. Остальные задают вопросы. После всех 4 презентаций — взаимный опрос.", kk: "Кездесу кезінде: әр сарапшы 15 минут тақырыбын түсіндіреді. Басқалар сұрақ қояды. 4 презентациядан кейін бір-бірін барлық тақырыптар бойынша тексереді." }
            ],
            answer: "Each person becomes an expert on 1 topic, teaches it to the group (15 min each), then the group quizzes each other. Total: about 1.5 hours for full coverage.",
            answerRu: "Каждый становится экспертом по одной теме и объясняет её группе (по 15 минут), затем группа опрашивает друг друга. Итого: около 1,5 часов для полного охвата.",
            answerKk: "Әр адам бір тақырыптың сарапшысы болып, оны топқа түсіндіреді (әрқайсысы 15 минут), содан кейін топ бір-бірін тексереді. Барлығы: толық қамту үшін шамамен 1,5 сағат."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the ideal size for a study group and why?",
            questionRu: "Каков идеальный размер учебной группы и почему?",
            questionKk: "Оқу тобының идеалды көлемі қанша және неліктен?",
            answer: "3–4 people. Too few (2) limits perspectives, too many (5+) leads to distraction and unequal participation.",
            answerRu: "3–4 человека. Слишком мало (2) ограничивает точки зрения, слишком много (5+) ведёт к отвлечениям и неравному участию.",
            answerKk: "3–4 адам. Тым аз (2) көзқарастарды шектейді, тым көп (5+) алаңдауға және теңсіз қатысуға әкеледі.",
            hint: "Think about what happens when a group gets too big.",
            hintRu: "Подумайте, что происходит, когда группа становится слишком большой.",
            hintKk: "Топ тым үлкен болғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your study group keeps getting off topic and chatting about unrelated things. Suggest two rules to keep the group focused.",
            questionRu: "Ваша учебная группа постоянно отвлекается и болтает на посторонние темы. Предложите два правила для поддержания фокуса.",
            questionKk: "Оқу тобыңыз тақырыптан ауытқып, бөгде нәрселер туралы сөйлеседі. Топты фокуста ұстау үшін екі ереже ұсыныңыз.",
            answer: "1) Write an agenda with specific topics and time limits before meeting. 2) Use a 'parking lot' — write off-topic ideas on a separate paper to discuss after study time is done.",
            answerRu: "1) Составьте повестку с конкретными темами и лимитами времени до встречи. 2) Используйте «парковку» — записывайте посторонние идеи на отдельном листе, чтобы обсудить их после окончания учёбы.",
            answerKk: "1) Кездесу алдында нақты тақырыптар мен уақыт шектеулері бар жоспар жазыңыз. 2) «Тұрақ» әдісін қолданыңыз — тақырыптан тыс идеяларды бөлек қағазға жазып, оқу уақыты біткеннен кейін талқылаңыз.",
            hint: "What keeps meetings on track in the adult world?",
            hintRu: "Что удерживает встречи в рамках в мире взрослых?",
            hintKk: "Ересектер әлемінде кездесулерді жоспарда не ұстайды?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain why teaching a concept to someone else is more effective than just reading about it. Connect this to how memory works.",
            questionRu: "Объясните, почему объяснение концепции другим эффективнее простого чтения. Свяжите с работой памяти.",
            questionKk: "Тұжырымдаманы біреуге түсіндіру неліктен жай оқудан тиімдірек екенін түсіндіріңіз. Мұны естің жұмысымен байланыстырыңыз.",
            answer: "Teaching requires you to: 1) Retrieve information from memory (active recall), 2) Organize it logically so others understand, 3) Identify and fill your own knowledge gaps when you cannot explain something. Reading is passive — your brain recognizes words but may not deeply process them. Teaching forces deep processing across multiple brain areas (language, logic, memory), creating stronger neural connections.",
            answerRu: "Объяснение требует: 1) извлечь информацию из памяти (активное припоминание), 2) логически организовать её, чтобы другие поняли, 3) выявить и заполнить собственные пробелы в знаниях, когда вы не можете что-то объяснить. Чтение пассивно — мозг распознаёт слова, но может не обрабатывать их глубоко. Объяснение заставляет мозг глубоко обрабатывать информацию в нескольких областях (язык, логика, память), создавая более прочные нейронные связи.",
            answerKk: "Түсіндіру мынаны талап етеді: 1) ақпаратты жадыдан еске түсіру (белсенді еске түсіру), 2) басқалар түсінуі үшін оны логикалық түрде ұйымдастыру, 3) бір нәрсені түсіндіре алмағанда өз біліміңіздегі олқылықтарды анықтап, толтыру. Оқу — пассивті: ми сөздерді таниды, бірақ оларды терең өңдемеуі мүмкін. Түсіндіру мидың бірнеше аймағында (тіл, логика, жады) терең өңдеуге мәжбүрлеп, күштірек нейрондық байланыстар түзеді.",
            hint: "What does your brain have to do differently when teaching vs. reading?",
            hintRu: "Что мозг делает по-другому при объяснении по сравнению с чтением?",
            hintKk: "Оқу мен түсіндіру кезінде миыңыз не басқаша жасайды?",
            xp: 20
          }
        ]
      },
      {
        title: "Digital Organization",
        titleRu: "Цифровая организация",
        titleKk: "Цифрлық ұйымдастыру",
        content: "Digital organization means keeping your computer and phone files as tidy as your physical desk. Create folders for each subject and use clear file names like 'Math_Ch5_Notes_Sep15' instead of 'Untitled Document.' Regularly delete old files and back up important work to the cloud so you never lose assignments.",
        contentRu: "Цифровая организация означает содержание файлов на компьютере и телефоне в таком же порядке, как и на физическом столе. Создайте папки для каждого предмета и используйте понятные имена файлов, например «Математика_Гл5_Заметки_15Сент». Регулярно удаляйте старые файлы и делайте резервные копии в облаке.",
        contentKk: "Цифрлық ұйымдастыру — компьютер мен телефон файлдарын физикалық үстел сияқты ретті ұстау. Әр пән үшін қалта жасап, файлдарға «Математика_Тар5_Жазба_15Қыр» сияқты түсінікті атаулар беріңіз. Ескі файлдарды жүйелі түрде жойыңыз және маңызды жұмыстарды бұлтқа сақтаңыз.",
        keyFormulas: [
          {
            formula: "Subject Folders + Clear File Names + Cloud Backup = Digital Organization",
            description: "Three pillars of digital file management",
            descriptionRu: "Три столпа цифрового управления файлами",
            descriptionKk: "Цифрлық файлдарды басқарудың үш тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "Your computer desktop has 47 files with names like 'doc1', 'homework', 'stuff', and 'final final v2'. Organize them.",
            questionRu: "На рабочем столе 47 файлов с именами «doc1», «homework», «stuff», «final final v2». Организуйте их.",
            questionKk: "Жұмыс үстелінде «doc1», «homework», «stuff», «final final v2» сияқты атаулары бар 47 файл бар. Оларды ұйымдастырыңыз.",
            steps: [
              { en: "Create folders: School (with sub-folders for each subject), Personal, and Archive. Move each file to the correct folder.", ru: "Создайте папки: Школа (с подпапками по предметам), Личное и Архив. Переместите файлы в правильные папки.", kk: "Қалталар жасаңыз: Мектеп (әр пән үшін ішкі қалталармен), Жеке және Мұрағат. Файлдарды дұрыс қалталарға жылжытыңыз." },
              { en: "Rename files clearly: 'doc1' → 'Math_Homework_Ch3_Oct10', 'final final v2' → 'English_Essay_Final_Oct15'. Delete duplicates and truly unneeded files.", ru: "Переименуйте: «doc1» → «Математика_ДЗ_Гл3_10Окт», «final final v2» → «Англ_Сочинение_Финал_15Окт». Удалите дубликаты.", kk: "Атауларын өзгертіңіз: «doc1» → «Математика_ҮТ_Тар3_10Қаз», «final final v2» → «Ағылш_Эссе_Соңғы_15Қаз». Көшірмелерді жойыңыз." }
            ],
            answer: "Create subject folders, rename files with Subject_Type_Topic_Date format, delete duplicates, and keep desktop clean.",
            answerRu: "Создайте папки по предметам, переименуйте файлы в формате Предмет_Тип_Тема_Дата, удалите дубликаты и поддерживайте рабочий стол чистым.",
            answerKk: "Пәндер бойынша қалталар жасаңыз, файлдарды Пән_Түрі_Тақырып_Күн пішімінде қайта атаңыз, көшірмелерді жойыңыз және жұмыс үстелін таза ұстаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which is a better file name: 'homework' or 'Biology_Lab_Report_Oct20'? Why?",
            questionRu: "Какое имя файла лучше: «homework» или «Biology_Lab_Report_Oct20»? Почему?",
            questionKk: "Қай файл атауы жақсы: «homework» немесе «Biology_Lab_Report_Oct20»? Неліктен?",
            answer: "'Biology_Lab_Report_Oct20' is better because it tells you the subject, type of work, and date — you can find it instantly. 'homework' tells you nothing specific.",
            answerRu: "«Biology_Lab_Report_Oct20» лучше, потому что указывает предмет, тип работы и дату — файл можно найти мгновенно. «homework» не говорит ничего конкретного.",
            answerKk: "«Biology_Lab_Report_Oct20» жақсырақ, өйткені ол пәннің, жұмыс түрінің және күннің атын көрсетеді — файлды бірден табуға болады. «homework» ешқандай нақты ақпарат бермейді.",
            hint: "Which name helps you find the file three months later?",
            hintRu: "Какое имя поможет найти файл через три месяца?",
            hintKk: "Қай атау файлды үш айдан кейін табуға көмектеседі?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design a folder structure for a student taking 5 subjects. Include at least 2 levels of sub-folders.",
            questionRu: "Разработайте структуру папок для ученика с 5 предметами. Включите минимум 2 уровня подпапок.",
            questionKk: "5 пәні бар оқушы үшін қалта құрылымын жасаңыз. Кемінде 2 деңгейлі ішкі қалталарды қосыңыз.",
            answer: "School/ → Math/ (Notes/, Homework/, Tests/), Science/ (Notes/, Labs/, Projects/), English/ (Notes/, Essays/, Reading/), History/ (Notes/, Assignments/), Art/ (Projects/, References/). Also: Archive/ for completed semesters and Personal/ for non-school files.",
            answerRu: "School/ → Math/ (Notes/, Homework/, Tests/), Science/ (Notes/, Labs/, Projects/), English/ (Notes/, Essays/, Reading/), History/ (Notes/, Assignments/), Art/ (Projects/, References/). Плюс: Archive/ для завершённых семестров и Personal/ для внешкольных файлов.",
            answerKk: "School/ → Math/ (Notes/, Homework/, Tests/), Science/ (Notes/, Labs/, Projects/), English/ (Notes/, Essays/, Reading/), History/ (Notes/, Assignments/), Art/ (Projects/, References/). Қосымша: аяқталған семестрлерге арналған Archive/ және мектепке қатысы жоқ файлдарға арналған Personal/.",
            hint: "Think of each subject as a main folder with sub-folders for different types of work.",
            hintRu: "Представьте каждый предмет как основную папку с подпапками для разных типов работ.",
            hintKk: "Әр пәнді әртүрлі жұмыс түрлері үшін ішкі қалталары бар негізгі қалта ретінде елестетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student lost their final essay because their computer crashed and they had no backup. Create a complete backup strategy that protects against data loss.",
            questionRu: "Ученик потерял финальное сочинение из-за сбоя компьютера и отсутствия резервной копии. Создайте полную стратегию резервного копирования.",
            questionKk: "Оқушы компьютер бұзылып, сақтық көшірме болмағандықтан соңғы эссесін жоғалтты. Деректерді жоғалтудан қорғайтын толық сақтық көшірме стратегиясын жасаңыз.",
            answer: "3-2-1 rule: 3 copies of important files, on 2 different media, with 1 off-site. Practical: 1) Save to computer (local), 2) Auto-sync to cloud (Google Drive/OneDrive), 3) USB backup weekly. Also: turn on auto-save in all apps, and name versions clearly (v1, v2) instead of overwriting.",
            answerRu: "Правило 3-2-1: 3 копии важных файлов, на 2 разных носителях, 1 вне дома. Практически: 1) сохранение на компьютере (локально), 2) автосинхронизация с облаком (Google Drive/OneDrive), 3) еженедельная резервная копия на USB. Также: включите автосохранение во всех приложениях и давайте версиям понятные имена (v1, v2) вместо перезаписи.",
            answerKk: "3-2-1 ережесі: маңызды файлдардың 3 көшірмесі, 2 түрлі тасымалдағышта, 1 сыртта. Практикалық: 1) компьютерге сақтау (локальды), 2) бұлтқа автосинхрондау (Google Drive/OneDrive), 3) апта сайын USB сақтық көшірмесі. Қосымша: барлық қосымшада автосақтауды қосыңыз және нұсқаларға қайта жазудың орнына түсінікті атау беріңіз (v1, v2).",
            hint: "What if your computer breaks, gets stolen, or a file gets corrupted?",
            hintRu: "Что если компьютер сломается, украдут или файл повредится?",
            hintKk: "Компьютер бұзылса, ұрланса немесе файл зақымдалса не болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Goal Setting",
        titleRu: "Постановка целей",
        titleKk: "Мақсат қою",
        content: "Goals give your studying direction and purpose. Without clear goals, you study aimlessly. Effective goals are specific and measurable: instead of 'do better in math,' say 'raise my math grade from B to A by the end of the semester.' Write your goals down and review them weekly to stay on track.",
        contentRu: "Цели придают учёбе направление и смысл. Без чётких целей вы учитесь бесцельно. Эффективные цели конкретны и измеримы: вместо «учиться лучше по математике» скажите «поднять оценку по математике с B до A к концу семестра». Запишите цели и проверяйте их еженедельно.",
        contentKk: "Мақсаттар оқуға бағыт пен мақсат береді. Нақты мақсатсыз мақсатсыз оқисыз. Тиімді мақсаттар нақты және өлшенетін: «математикадан жақсырақ оқу» орнына «семестр соңына дейін математика бағасын B-ден A-ға көтеру» деңіз. Мақсаттарыңызды жазып, жолда болу үшін апта сайын тексеріңіз.",
        keyFormulas: [
          {
            formula: "Vague Goal → Specific + Measurable + Deadline = Effective Goal",
            description: "Transform wishes into actionable targets",
            descriptionRu: "Превратите желания в действенные цели",
            descriptionKk: "Тілектерді іс-қимылды мақсаттарға айналдырыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "A student says their goal is 'study more.' Transform this into an effective, specific goal.",
            questionRu: "Ученик говорит, что его цель — «больше учиться». Превратите это в эффективную, конкретную цель.",
            questionKk: "Оқушы мақсаты «көбірек оқу» дейді. Мұны тиімді, нақты мақсатқа айналдырыңыз.",
            steps: [
              { en: "Make it specific: What subject? How much more? By when? → 'Study math for 30 minutes every weekday after school.'", ru: "Сделайте конкретным: Какой предмет? Насколько больше? К какому сроку? → «Учить математику 30 минут каждый будний день после школы.»", kk: "Нақтылаңыз: Қай пән? Қаншаға көбірек? Қашанға дейін? → «Мектептен кейін әр жұмыс күні 30 минут математика оқу.»" },
              { en: "Add a measurable outcome: 'Raise my math test scores from 70% to 85% by December.' Now you can track progress.", ru: "Добавьте измеримый результат: «Поднять оценки по математике с 70% до 85% к декабрю.» Теперь можно отслеживать прогресс.", kk: "Өлшенетін нәтиже қосыңыз: «Желтоқсанға дейін математика тест бағасын 70%-дан 85%-ға көтеру.» Енді прогресті бақылай аласыз." }
            ],
            answer: "'Study math for 30 minutes every weekday and raise test scores from 70% to 85% by December.' This is specific, measurable, and has a deadline.",
            answerRu: "«Учить математику 30 минут каждый будний день и поднять результаты теста с 70% до 85% к декабрю.» Это конкретно, измеримо и имеет дедлайн.",
            answerKk: "«Әр жұмыс күні 30 минут математика оқып, желтоқсанға дейін тест бағасын 70%-дан 85%-ға көтеру.» Бұл нақты, өлшенетін және мерзімі бар."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What makes 'get better grades' a weak goal?",
            questionRu: "Почему «получить лучшие оценки» — слабая цель?",
            questionKk: "Неліктен «жақсы баға алу» әлсіз мақсат?",
            answer: "It is vague — it does not specify which subject, how much better, or by when. You cannot measure if you have achieved it.",
            answerRu: "Она расплывчата — не указывает, какой предмет, насколько лучше и к какому сроку. Невозможно измерить, достигли вы её или нет.",
            answerKk: "Ол анық емес — қай пән, қаншалықты жақсы және қашанға дейін екенін көрсетпейді. Оған жеткеніңізді өлшеу мүмкін емес.",
            hint: "Can you measure 'better'? Better than what?",
            hintRu: "Можно ли измерить «лучше»? Лучше чего?",
            hintKk: "«Жақсырақ» деп өлшей аласыз ба? Неден жақсырақ?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Transform this vague goal into a specific one: 'I want to read more books this year.'",
            questionRu: "Превратите расплывчатую цель в конкретную: «Хочу читать больше книг в этом году».",
            questionKk: "Бұл анық емес мақсатты нақтыға айналдырыңыз: «Биыл көбірек кітап оқығым келеді».",
            answer: "Example: 'I will read 1 book per month (12 books total) by reading 20 pages every night before bed.' This specifies quantity, frequency, and method.",
            answerRu: "Пример: «Я буду читать 1 книгу в месяц (12 книг за год), читая 20 страниц каждый вечер перед сном.» Здесь указаны количество, частота и способ.",
            answerKk: "Мысал: «Күн сайын ұйықтар алдында 20 бет оқып, айына 1 кітап (жылына 12 кітап) оқимын.» Мұнда мөлшер, жиілік және тәсіл нақты көрсетілген.",
            hint: "How many books? How often? When will you read?",
            hintRu: "Сколько книг? Как часто? Когда будете читать?",
            hintKk: "Қанша кітап? Қаншалықты жиі? Қашан оқисыз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Set three academic goals for this semester: one for your strongest subject, one for your weakest, and one for a personal skill. Each must be specific, measurable, and have a deadline.",
            questionRu: "Поставьте три академические цели на семестр: для сильного предмета, слабого и личного навыка. Каждая должна быть конкретной, измеримой и с дедлайном.",
            questionKk: "Осы семестрге үш академиялық мақсат қойыңыз: күшті пән, әлсіз пән және жеке дағды үшін. Әрқайсысы нақты, өлшенетін және мерзімді болуы керек.",
            answer: "Example: Strongest (Math): Maintain A average and complete all bonus problems by semester end. Weakest (English): Raise grade from C+ to B by writing one extra practice essay per week. Personal: Improve time management by using a planner every day for 60 consecutive days. Each has a clear target and deadline.",
            answerRu: "Пример: Сильный (математика): поддерживать средний балл A и выполнить все бонусные задачи к концу семестра. Слабый (английский): поднять оценку с C+ до B за счёт одного дополнительного тренировочного эссе в неделю. Личный: улучшить тайм-менеджмент, пользуясь ежедневником каждый день 60 дней подряд. У каждой цели есть чёткий ориентир и дедлайн.",
            answerKk: "Мысал: Күшті пән (математика): семестр соңына дейін A орташа бағасын ұстап, барлық бонустық есептерді орындау. Әлсіз пән (ағылшын): аптасына бір қосымша жаттығу эссесін жазып, бағаны C+-дан B-ға көтеру. Жеке: 60 күн қатарынан күн сайын жоспарлағыш қолданып, уақытты басқаруды жақсарту. Әрқайсысының нақты мақсаты мен мерзімі бар.",
            hint: "Use the format: 'I will [specific action] to achieve [measurable result] by [deadline].'",
            hintRu: "Формат: «Я буду [конкретное действие] для достижения [измеримого результата] к [дедлайну].»",
            hintKk: "Пішім: «Мен [нақты әрекет] жасаймын, [өлшенетін нәтижеге] [мерзімге] дейін жету үшін.»",
            xp: 20
          }
        ]
      }
    ]
  },
  "Productivity & Learning Systems_10": {
    planetName: "Productivity & Learning Systems",
    introduction: {
      en: "Welcome to Productivity & Learning Systems for Grade 10! Master advanced learning techniques like spaced repetition, deep work, and strategic planning that will transform how you study and manage your time.",
      ru: "Добро пожаловать в Продуктивность и системы обучения для 10 класса! Освойте продвинутые техники обучения: интервальное повторение, глубокую работу и стратегическое планирование, которые преобразят вашу учёбу и управление временем."
    },
    sections: [
      {
        title: "Spaced Repetition",
        titleRu: "Интервальное повторение",
        titleKk: "Аралықты қайталау",
        content: "Spaced repetition schedules reviews at increasing intervals — 1 day, 3 days, 7 days, 21 days — to move knowledge into long-term memory. Each review right before you would forget strengthens the neural pathway dramatically. Tools like Anki automate this scheduling for you.",
        contentRu: "Интервальное повторение планирует повторения через увеличивающиеся промежутки — 1 день, 3 дня, 7 дней, 21 день — для переноса знаний в долговременную память. Каждое повторение прямо перед забыванием значительно укрепляет нейронные связи. Инструменты вроде Anki автоматизируют это расписание.",
        contentKk: "Аралықты қайталау шолуларды ұлғаятын аралықтармен жоспарлайды — 1 күн, 3 күн, 7 күн, 21 күн — білімді ұзақ мерзімді жадыға ауыстыру үшін. Ұмытар алдында жасалған әрбір қайталау нейрондық жолды күрт нығайтады. Anki сияқты құралдар бұл кестені автоматтандырады.",
        keyFormulas: [
          {
            formula: "Review at Day 1 → Day 3 → Day 7 → Day 21 → Day 60",
            description: "Optimal spaced repetition intervals for long-term retention",
            descriptionRu: "Оптимальные интервалы повторения для долговременного запоминания",
            descriptionKk: "Ұзақ мерзімді есте сақтау үшін оңтайлы қайталау аралықтары"
          },
          {
            formula: "Forgetting Curve + Timely Review = Permanent Memory",
            description: "Review just before forgetting to maximize retention",
            descriptionRu: "Повторяйте перед забыванием для максимального запоминания",
            descriptionKk: "Есте сақтауды барынша арттыру үшін ұмытар алдында қайталаңыз"
          }
        ],
        solvedExamples: [
          {
            question: "You learn 30 biology terms on Monday. Design a spaced repetition schedule for the next month.",
            questionRu: "Вы выучили 30 терминов по биологии в понедельник. Составьте расписание интервального повторения на месяц.",
            questionKk: "Дүйсенбіде 30 биология терминін үйрендіңіз. Келесі айға аралықты қайталау кестесін жасаңыз.",
            steps: [
              { en: "First review on Tuesday (Day 1), second on Thursday (Day 3), third on the following Monday (Day 7).", ru: "Первое повторение во вторник (день 1), второе в четверг (день 3), третье в следующий понедельник (день 7).", kk: "Бірінші қайталау сейсенбіде (1-күн), екіншісі бейсенбіде (3-күн), үшіншісі келесі дүйсенбіде (7-күн)." },
              { en: "Fourth review three weeks after learning (Day 21). By then, most terms should be in long-term memory with minimal effort.", ru: "Четвёртое повторение через три недели (день 21). К этому времени большинство терминов будут в долговременной памяти с минимальными усилиями.", kk: "Төртінші қайталау үйренгеннен кейін үш аптадан соң (21-күн). Сол кезде көптеген терминдер аз күшпен ұзақ мерзімді жадыда болады." }
            ],
            answer: "Review on Day 1 (Tue), Day 3 (Thu), Day 7 (next Mon), Day 21 (three weeks later). Each session takes less time as memory strengthens."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the core principle behind spaced repetition?",
            questionRu: "Каков основной принцип интервального повторения?",
            questionKk: "Аралықты қайталаудың негізгі принципі қандай?",
            answer: "Reviewing material at increasing intervals just before you forget it, which strengthens long-term memory.",
            hint: "Think about when you should review — right after learning or right before forgetting?",
            hintRu: "Подумайте, когда лучше повторять — сразу после изучения или перед забыванием?",
            hintKk: "Қашан қайталау керек — үйренгеннен кейін бірден бе, әлде ұмытар алдында ма?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have a history exam in 4 weeks. You need to memorize 60 key dates. Create a spaced repetition plan splitting the dates into groups.",
            questionRu: "Экзамен по истории через 4 недели. Нужно запомнить 60 ключевых дат. Создайте план интервального повторения, разделив даты на группы.",
            questionKk: "4 аптадан кейін тарих емтиханы бар. 60 маңызды күнді жаттау керек. Күндерді топтарға бөліп, аралықты қайталау жоспарын жасаңыз.",
            answer: "Split into 4 groups of 15 dates. Learn Group 1 in Week 1, Group 2 in Week 2, etc. Review each group at 1, 3, 7, and 21-day intervals. Earlier groups get more review cycles before the exam.",
            hint: "Don't try to learn all 60 at once. How can you stagger the groups?",
            hintRu: "Не пытайтесь учить все 60 сразу. Как распределить группы по времени?",
            hintKk: "Барлық 60-ты бірден үйренуге тырыспаңыз. Топтарды қалай бөлуге болады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare spaced repetition with cramming. A student studies 3 hours the night before vs. 30 minutes across 6 sessions over 3 weeks. Which approach leads to better retention and why?",
            questionRu: "Сравните интервальное повторение с зубрёжкой. Ученик занимается 3 часа накануне экзамена vs. 30 минут в 6 сессиях за 3 недели. Какой подход лучше для запоминания и почему?",
            questionKk: "Аралықты қайталауды жаттауменен салыстырыңыз. Оқушы емтихан алдында 3 сағат оқиды vs. 3 апта ішінде 6 сессияда 30 минут. Қай тәсіл есте сақтау үшін жақсы және неліктен?",
            answer: "The 6-session approach wins. Same total time (3 hours), but spaced practice exploits the forgetting curve — each retrieval strengthens memory. Cramming creates short-term recall that fades within days, while spaced repetition builds durable long-term memory.",
            hint: "Total study time is equal. Focus on what happens to memory over time with each approach.",
            hintRu: "Общее время одинаково. Сосредоточьтесь на том, что происходит с памятью с течением времени.",
            hintKk: "Жалпы оқу уақыты тең. Әр тәсілде жады уақыт өте келе қалай өзгеретініне назар аударыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Active Recall",
        titleRu: "Активное воспроизведение",
        titleKk: "Белсенді еске түсіру",
        content: "Active recall means testing yourself on material instead of passively re-reading it. Closing your textbook and writing everything you remember forces your brain to retrieve information, which strengthens memory far more than highlighting or re-reading. Studies show active recall improves test scores by 50% compared to passive review.",
        contentRu: "Активное воспроизведение — это тестирование себя по материалу вместо пассивного перечитывания. Закройте учебник и запишите всё, что помните — это заставляет мозг извлекать информацию, что укрепляет память гораздо эффективнее подчёркивания. Исследования показывают улучшение результатов на 50%.",
        contentKk: "Белсенді еске түсіру — материалды енжар қайта оқудың орнына өзіңізді тексеру. Оқулықты жауып, есте қалғанның бәрін жазу миыңызды ақпаратты алуға мәжбүр етеді, бұл жадыны бөлектеуден әлдеқайда жақсы нығайтады. Зерттеулер белсенді еске түсіру нәтижелерді 50%-ға жақсартатынын көрсетеді.",
        keyFormulas: [
          {
            formula: "Close Book → Write What You Remember → Check → Repeat Gaps",
            description: "The four-step active recall cycle",
            descriptionRu: "Четырёхэтапный цикл активного воспроизведения",
            descriptionKk: "Белсенді еске түсірудің төрт қадамды циклі"
          }
        ],
        solvedExamples: [
          {
            question: "You just finished reading a chapter on photosynthesis. Apply active recall to study it.",
            questionRu: "Вы прочитали главу о фотосинтезе. Примените активное воспроизведение для изучения.",
            questionKk: "Фотосинтез туралы тарауды оқып бітірдіңіз. Оны оқу үшін белсенді еске түсіруді қолданыңыз.",
            steps: [
              { en: "Close the textbook. On a blank sheet, write everything you remember about photosynthesis — the equation, stages, inputs, outputs.", ru: "Закройте учебник. На чистом листе напишите всё, что помните о фотосинтезе — уравнение, этапы, вход, выход.", kk: "Оқулықты жабыңыз. Таза парақта фотосинтез туралы есіңізде қалғанның бәрін жазыңыз — теңдеу, кезеңдер, кірістер, шығыстар." },
              { en: "Open the book and compare. Highlight gaps — maybe you forgot the Calvin cycle details. Rewrite those gaps from memory again until complete.", ru: "Откройте книгу и сравните. Выделите пробелы — возможно, забыли детали цикла Кальвина. Перепишите пробелы по памяти до полного усвоения.", kk: "Кітапты ашып салыстырыңыз. Олқылықтарды белгілеңіз — мүмкін Кальвин циклінің мәліметтерін ұмыттыңыз. Олқылықтарды толық болғанша қайта жазыңыз." }
            ],
            answer: "Close book, write from memory, check against text, re-test gaps. Repeat until you can reproduce the key concepts completely from memory."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is active recall more effective than re-reading your notes?",
            questionRu: "Почему активное воспроизведение эффективнее перечитывания конспектов?",
            questionKk: "Неліктен белсенді еске түсіру конспектілерді қайта оқудан тиімдірек?",
            answer: "Active recall forces your brain to retrieve information, strengthening neural pathways. Re-reading creates a false sense of familiarity without actually testing memory.",
            hint: "Think about the difference between recognizing information and producing it.",
            hintRu: "Подумайте о разнице между узнаванием информации и её воспроизведением.",
            hintKk: "Ақпаратты тану мен оны шығару арасындағы айырмашылықты ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design an active recall study session for a vocabulary list of 40 foreign language words.",
            questionRu: "Разработайте сессию активного воспроизведения для списка из 40 иностранных слов.",
            questionKk: "40 шет тілі сөзінің тізімі үшін белсенді еске түсіру сабағын жасаңыз.",
            answer: "Split into 4 groups of 10. Study Group 1, then cover the list and write translations from memory. Check and mark errors. Repeat errors only. Move to Group 2. After all groups, do a combined test of all 40.",
            hint: "Break the list into smaller chunks and test yourself after each chunk.",
            hintRu: "Разбейте список на маленькие части и тестируйте себя после каждой.",
            hintKk: "Тізімді кішірек бөліктерге бөліп, әрқайсысынан кейін өзіңізді тексеріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student highlights their textbook and reads notes before exams but scores poorly. Redesign their entire study approach using active recall principles.",
            questionRu: "Ученик выделяет текст и перечитывает конспекты перед экзаменами, но получает плохие оценки. Перестройте весь подход к учёбе, используя принципы активного воспроизведения.",
            questionKk: "Оқушы мәтінді бөлектеп, емтихан алдында конспектілерді қайта оқиды, бірақ нашар баға алады. Белсенді еске түсіру принциптерін қолданып, бүкіл оқу тәсілін қайта құрыңыз.",
            answer: "Replace highlighting with question generation: after each section, write 3-5 questions. Replace re-reading with self-testing: cover notes and answer your own questions. Use blank-page recall after each study session. Create practice tests that mimic exam format. Study with a partner by quizzing each other.",
            hint: "Replace every passive activity with an active one that forces retrieval.",
            hintRu: "Замените каждое пассивное действие активным, требующим воспроизведения.",
            hintKk: "Әрбір енжар әрекетті еске түсіруді талап ететін белсенді әрекетпен ауыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Feynman Technique",
        titleRu: "Техника Фейнмана",
        titleKk: "Фейнман техникасы",
        content: "The Feynman Technique involves explaining a concept in simple language as if teaching a child. When you cannot explain something simply, you have found a gap in your understanding. Go back to the source, fill the gap, then simplify your explanation again until it is crystal clear.",
        contentRu: "Техника Фейнмана заключается в объяснении концепции простым языком, как если бы вы учили ребёнка. Если не можете объяснить просто — вы нашли пробел в понимании. Вернитесь к источнику, заполните пробел и упростите объяснение до полной ясности.",
        contentKk: "Фейнман техникасы түсінікті балаға үйреткендей қарапайым тілде түсіндіруді қамтиды. Бір нәрсені қарапайым түсіндіре алмасаңыз, түсінігіңіздегі олқылықты таптыңыз. Көзге оралыңыз, олқылықты толтырыңыз, содан кейін түсіндірмеңізді мүлдем анық болғанша қайта жеңілдетіңіз.",
        keyFormulas: [
          {
            formula: "Choose Concept → Explain Simply → Find Gaps → Simplify Again",
            description: "The four steps of the Feynman Technique",
            descriptionRu: "Четыре шага техники Фейнмана",
            descriptionKk: "Фейнман техникасының төрт қадамы"
          }
        ],
        solvedExamples: [
          {
            question: "Use the Feynman Technique to study the concept of supply and demand in economics.",
            questionRu: "Используйте технику Фейнмана для изучения концепции спроса и предложения в экономике.",
            questionKk: "Экономикадағы сұраныс пен ұсыныс тұжырымдамасын оқу үшін Фейнман техникасын қолданыңыз.",
            steps: [
              { en: "Write 'Supply and Demand' at the top of a page. Explain it simply: 'When more people want something and there's less of it, the price goes up. When nobody wants it or there's too much, the price drops.'", ru: "Напишите «Спрос и предложение» вверху страницы. Объясните просто: «Когда больше людей хотят что-то и его мало, цена растёт. Когда никто не хочет или слишком много — цена падает.»", kk: "Парақтың жоғарғы жағына «Сұраныс пен ұсыныс» деп жазыңыз. Қарапайым түсіндіріңіз: «Бір нәрсені көп адам қаласа және ол аз болса, баға көтеріледі. Ешкім қаламаса немесе тым көп болса, баға түседі.»" },
              { en: "Identify gaps: Can you explain equilibrium price? What shifts the curves? Go back to your textbook for those specifics, then re-explain until a 10-year-old could understand.", ru: "Найдите пробелы: можете ли объяснить равновесную цену? Что сдвигает кривые? Вернитесь к учебнику и объясните заново, пока даже 10-летний поймёт.", kk: "Олқылықтарды анықтаңыз: тепе-теңдік бағасын түсіндіре аласыз ба? Қисықтарды не жылжытады? Оқулыққа оралыңыз, содан кейін 10 жасар бала түсінгенше қайта түсіндіріңіз." }
            ],
            answer: "Write a simple explanation, identify where you get stuck or use jargon, research those gaps, then rewrite until the explanation is clear enough for a child."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main goal of the Feynman Technique?",
            questionRu: "Какова главная цель техники Фейнмана?",
            questionKk: "Фейнман техникасының басты мақсаты қандай?",
            answer: "To identify gaps in your understanding by trying to explain a concept in simple terms, then filling those gaps.",
            hint: "What happens when you try to explain something and get stuck?",
            hintRu: "Что происходит, когда вы пытаетесь объяснить и застреваете?",
            hintKk: "Бір нәрсені түсіндіруге тырысып, тұрып қалғанда не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Apply the Feynman Technique to explain how a computer's CPU works to a 12-year-old.",
            questionRu: "Примените технику Фейнмана, чтобы объяснить работу процессора компьютера 12-летнему.",
            questionKk: "12 жасар балаға компьютер процессорының жұмысын түсіндіру үшін Фейнман техникасын қолданыңыз.",
            answer: "A CPU is like a super-fast calculator that follows instructions one by one. It fetches an instruction (like 'add 2+3'), does the math, and stores the result — billions of times per second. If you can't explain fetch-decode-execute simply, that's your gap to study.",
            hint: "Use an analogy. Where do you get stuck in your explanation?",
            hintRu: "Используйте аналогию. Где вы застреваете в объяснении?",
            hintKk: "Ұқсастық қолданыңыз. Түсіндірмеде қай жерде тұрып қаласыз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Choose a topic you recently studied. Write a Feynman-style explanation, identify at least two gaps, research them, and rewrite the improved explanation.",
            questionRu: "Выберите недавно изученную тему. Напишите объяснение в стиле Фейнмана, найдите минимум два пробела, изучите их и перепишите улучшенное объяснение.",
            questionKk: "Жақында оқыған тақырыпты таңдаңыз. Фейнман стиліндегі түсіндірме жазыңыз, кемінде екі олқылық тауып, оларды зерттеңіз және жақсартылған түсіндірмені қайта жазыңыз.",
            answer: "Example: Topic — Natural Selection. First attempt: 'Animals that fit their environment survive and have babies.' Gaps found: What about genetic variation? What drives mutations? After research, improved: 'Random genetic mutations create variation. Individuals with traits suited to their environment survive longer and reproduce more, passing those traits on. Over generations, the population shifts.'",
            hint: "Pick something you learned this week. Write it out, find where you use vague words or get confused.",
            hintRu: "Выберите тему этой недели. Запишите и найдите, где используете расплывчатые слова.",
            hintKk: "Осы аптада үйренген тақырыпты таңдаңыз. Жазып шығыңыз, қай жерде түсініксіз сөздер қолданатыныңызды табыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Mind Mapping",
        titleRu: "Ментальные карты",
        titleKk: "Ойлау картасы",
        content: "Mind mapping is a visual technique where you place a central topic in the middle and branch out related ideas radially. It mirrors how your brain naturally connects concepts, making it easier to see relationships between topics. Color-coding and images boost memory retention significantly.",
        contentRu: "Ментальная карта — визуальная техника, где центральная тема размещается в середине, а связанные идеи расходятся радиально. Это отражает естественные связи мозга, облегчая видение взаимосвязей. Цветовое кодирование и изображения значительно улучшают запоминание.",
        contentKk: "Ойлау картасы — орталық тақырыпты ортаға қойып, байланысты идеяларды радиалды түрде тармақтайтын визуалды техника. Бұл миыңыздың тұжырымдамаларды табиғи түрде байланыстыру тәсілін көрсетеді. Түспен кодтау мен суреттер есте сақтауды айтарлықтай жақсартады.",
        keyFormulas: [
          {
            formula: "Central Topic → Main Branches → Sub-branches → Keywords + Colors",
            description: "The structure of an effective mind map",
            descriptionRu: "Структура эффективной ментальной карты",
            descriptionKk: "Тиімді ойлау картасының құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Create a mind map structure for studying World War II for a history exam.",
            questionRu: "Создайте структуру ментальной карты для изучения Второй мировой войны к экзамену по истории.",
            questionKk: "Тарих емтиханына Екінші дүниежүзілік соғысты оқу үшін ойлау картасының құрылымын жасаңыз.",
            steps: [
              { en: "Place 'World War II' in the center. Create main branches: Causes, Key Battles, Leaders, Home Front, Outcome. Use different colors for each branch.", ru: "Поместите «Вторая мировая война» в центр. Создайте главные ветви: Причины, Ключевые битвы, Лидеры, Тыл, Итоги. Используйте разные цвета.", kk: "«Екінші дүниежүзілік соғыс» ортаға қойыңыз. Негізгі тармақтар жасаңыз: Себептер, Негізгі шайқастар, Көшбасшылар, Тыл, Нәтижелер. Әр тармаққа түрлі түс қолданыңыз." },
              { en: "Add sub-branches: under Causes — Treaty of Versailles, Rise of Fascism, Appeasement. Under Key Battles — Stalingrad, D-Day, Midway. Add small icons or sketches to aid memory.", ru: "Добавьте подветви: под Причинами — Версальский договор, Рост фашизма, Политика умиротворения. Под Битвами — Сталинград, День Д, Мидуэй. Добавьте иконки для запоминания.", kk: "Ішкі тармақтар қосыңыз: Себептер астында — Версаль шарты, Фашизмнің өсуі, Бітімгершілік. Шайқастар астында — Сталинград, Д-күні, Мидуэй. Есте сақтау үшін шағын белгішелер қосыңыз." }
            ],
            answer: "Center: WWII. Five color-coded branches (Causes, Battles, Leaders, Home Front, Outcome) each with 3-4 keyword sub-branches and simple icons."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the key elements of an effective mind map?",
            questionRu: "Каковы ключевые элементы эффективной ментальной карты?",
            questionKk: "Тиімді ойлау картасының негізгі элементтері қандай?",
            answer: "A central topic, main branches for key themes, sub-branches for details, keywords (not full sentences), colors, and images or icons.",
            hint: "Think about what goes in the center and what radiates outward.",
            hintRu: "Подумайте, что в центре и что расходится наружу.",
            hintKk: "Ортада не тұрады және сыртқа не тараса ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How would you use a mind map to plan a research essay on climate change?",
            questionRu: "Как использовать ментальную карту для планирования эссе о климатических изменениях?",
            questionKk: "Климат өзгерісі туралы зерттеу эссесін жоспарлау үшін ойлау картасын қалай қолданар едіңіз?",
            answer: "Center: Climate Change. Branches: Causes (fossil fuels, deforestation), Effects (sea level, weather), Solutions (renewable energy, policy), Evidence (data, studies). Each branch becomes a paragraph or section of the essay.",
            hint: "Each main branch could become a section of your essay.",
            hintRu: "Каждая главная ветвь может стать разделом эссе.",
            hintKk: "Әрбір негізгі тармақ эссеңіздің бір бөлімі бола алады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare mind mapping with traditional linear note-taking. When is each more effective? Give specific examples.",
            questionRu: "Сравните ментальные карты с традиционным линейным конспектированием. Когда каждый метод эффективнее? Приведите конкретные примеры.",
            questionKk: "Ойлау картасын дәстүрлі сызықтық жазбамен салыстырыңыз. Әрқайсысы қашан тиімдірек? Нақты мысалдар келтіріңіз.",
            answer: "Mind maps excel for brainstorming, seeing connections between topics, and revision (e.g., planning an essay, studying a broad topic like ecosystems). Linear notes are better for sequential processes, step-by-step procedures, and detailed formulas (e.g., math proofs, coding algorithms). Best approach: use mind maps for overview, linear notes for details.",
            hint: "Think about when you need to see the big picture vs. when you need step-by-step detail.",
            hintRu: "Подумайте, когда нужна общая картина, а когда — пошаговые детали.",
            hintKk: "Жалпы суретті қашан көру керек және қашан қадам-қадам мәліметтер қажет екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Deep Work",
        titleRu: "Глубокая работа",
        titleKk: "Терең жұмыс",
        content: "Deep work is the ability to focus without distraction on a cognitively demanding task. In a world of constant notifications, this skill is increasingly rare and valuable. A single deep work session of 90 minutes can accomplish more than an entire day of distracted, shallow work.",
        contentRu: "Глубокая работа — способность сосредоточиться без отвлечений на когнитивно сложной задаче. В мире постоянных уведомлений этот навык становится всё более редким и ценным. Одна 90-минутная сессия глубокой работы может дать больше, чем целый день рассеянной работы.",
        contentKk: "Терең жұмыс — когнитивті күрделі тапсырмаға алаңдамай зейін қою қабілеті. Тұрақты хабарландырулар әлемінде бұл дағды барған сайын сирек және құнды. Бір 90 минуттық терең жұмыс сеансы алаңдаулы жұмыстың бүкіл күнінен көбірек нәтиже бере алады.",
        keyFormulas: [
          {
            formula: "No Distractions + Focused Task + Time Block = Deep Work",
            description: "The three requirements for a deep work session",
            descriptionRu: "Три требования для сессии глубокой работы",
            descriptionKk: "Терең жұмыс сеансы үшін үш талап"
          }
        ],
        solvedExamples: [
          {
            question: "Design a deep work protocol for writing a 2000-word research paper.",
            questionRu: "Разработайте протокол глубокой работы для написания исследовательской работы на 2000 слов.",
            questionKk: "2000 сөздік зерттеу жұмысын жазу үшін терең жұмыс хаттамасын жасаңыз.",
            steps: [
              { en: "Prepare: put phone in another room, close all browser tabs except research sources, tell family you are unavailable for 90 minutes, set a clear goal ('write the introduction and first body paragraph').", ru: "Подготовка: телефон в другую комнату, закройте все вкладки кроме источников, предупредите семью о 90 минутах, поставьте чёткую цель («написать введение и первый абзац»).", kk: "Дайындық: телефонды басқа бөлмеге қойыңыз, зерттеу көздерінен басқа барлық қойындыларды жабыңыз, отбасыңызға 90 минут бос емес екеніңізді айтыңыз, нақты мақсат қойыңыз." },
              { en: "Work in one 90-minute block. If you get stuck, stay with it — do not switch to email or social media. After the session, take a 20-minute break with physical movement.", ru: "Работайте одним 90-минутным блоком. Если застряли — не переключайтесь на почту или соцсети. После сессии — 20-минутный перерыв с физической активностью.", kk: "Бір 90 минуттық блокта жұмыс істеңіз. Тұрып қалсаңыз, электрондық поштаға немесе әлеуметтік медиаға ауыспаңыз. Сеанстан кейін физикалық қозғалыспен 20 минуттық үзіліс жасаңыз." }
            ],
            answer: "Remove all distractions, set a specific writing goal, work for 90 uninterrupted minutes, then take a restorative break."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three common distractions that prevent deep work and how to eliminate each.",
            questionRu: "Назовите три распространённых отвлечения, мешающих глубокой работе, и как устранить каждое.",
            questionKk: "Терең жұмысқа кедергі болатын үш кең таралған алаңдауды және әрқайсысын қалай жоюға болатынын атаңыз.",
            answer: "Phone notifications — put phone in another room. Social media — use a website blocker. Noisy environment — use noise-canceling headphones or find a quiet space.",
            hint: "Think about what pulls your attention away most often when studying.",
            hintRu: "Подумайте, что чаще всего отвлекает ваше внимание при учёбе.",
            hintKk: "Оқу кезінде назарыңызды жиі не алатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You only have 2 hours after school before an evening activity. Schedule a deep work session within this window.",
            questionRu: "У вас только 2 часа после школы до вечернего мероприятия. Спланируйте сессию глубокой работы в этом окне.",
            questionKk: "Мектептен кейін кешкі іс-шараға дейін тек 2 сағатыңыз бар. Осы терезеде терең жұмыс сеансын жоспарлаңыз.",
            answer: "First 10 minutes: snack and set up workspace, silence phone. Next 70 minutes: deep work on the most important/difficult task. 10-minute break. Final 20 minutes: lighter tasks (review notes, organize materials). 10 minutes to transition to evening activity.",
            hint: "You don't need the full 2 hours for deep work — but protect the core block.",
            hintRu: "Вам не нужны все 2 часа для глубокой работы — но защитите основной блок.",
            hintKk: "Терең жұмыс үшін толық 2 сағат қажет емес — бірақ негізгі блокты қорғаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student claims they 'study for 5 hours' each evening but their grades are declining. Analyze what might be wrong and redesign their evening using deep work principles.",
            questionRu: "Ученик утверждает, что «учится 5 часов» каждый вечер, но оценки падают. Проанализируйте проблему и перестройте вечер по принципам глубокой работы.",
            questionKk: "Оқушы әр кеш «5 сағат оқимын» дейді, бірақ бағалары төмендеуде. Мәселені талдаңыз және терең жұмыс принциптерімен кешін қайта құрыңыз.",
            answer: "Problem: likely shallow work — constantly checking phone, switching between tasks, music with lyrics, open social media. Redesign: Two 90-minute deep work blocks with a 30-minute break between them. Phone locked away, specific goals for each block, website blocker active. The remaining time for review and light tasks. Total focused time: 3 hours, but more effective than 5 hours of distracted study.",
            hint: "Quality of focus matters more than quantity of hours. What's happening during those 5 hours?",
            hintRu: "Качество фокуса важнее количества часов. Что происходит в течение этих 5 часов?",
            hintKk: "Зейіннің сапасы сағат санынан маңыздырақ. Сол 5 сағатта не болып жатыр?",
            xp: 20
          }
        ]
      },
      {
        title: "Eisenhower Matrix",
        titleRu: "Матрица Эйзенхауэра",
        titleKk: "Эйзенхауэр матрицасы",
        content: "The Eisenhower Matrix sorts tasks into four quadrants based on urgency and importance. Urgent-and-important tasks are done first, important-but-not-urgent tasks are scheduled, urgent-but-not-important tasks are delegated, and neither-urgent-nor-important tasks are eliminated. Most students spend too much time in the urgent quadrants and neglect important long-term work.",
        contentRu: "Матрица Эйзенхауэра распределяет задачи по четырём квадрантам на основе срочности и важности. Срочные и важные — делаются первыми, важные но не срочные — планируются, срочные но не важные — делегируются, ни срочные ни важные — устраняются. Большинство студентов проводят слишком много времени в срочных квадрантах.",
        contentKk: "Эйзенхауэр матрицасы тапсырмаларды шұғылдық пен маңыздылық негізінде төрт квадрантқа бөледі. Шұғыл және маңызды — бірінші орындалады, маңызды бірақ шұғыл емес — жоспарланады, шұғыл бірақ маңызды емес — тапсырылады, шұғыл да маңызды да емес — жойылады.",
        keyFormulas: [
          {
            formula: "Q1: Urgent + Important = Do Now | Q2: Important + Not Urgent = Schedule | Q3: Urgent + Not Important = Delegate | Q4: Not Urgent + Not Important = Eliminate",
            description: "The four quadrants of the Eisenhower Matrix",
            descriptionRu: "Четыре квадранта матрицы Эйзенхауэра",
            descriptionKk: "Эйзенхауэр матрицасының төрт квадранты"
          }
        ],
        solvedExamples: [
          {
            question: "Categorize these tasks: exam tomorrow, college research (deadline in 2 months), friend asking for video game session, scrolling social media.",
            questionRu: "Распределите задачи: экзамен завтра, исследование колледжей (дедлайн через 2 месяца), друг зовёт играть в видеоигры, листание соцсетей.",
            questionKk: "Тапсырмаларды бөліңіз: ертең емтихан, колледж зерттеуі (мерзімі 2 айдан кейін), дос видео ойынға шақырады, әлеуметтік медианы айналдыру.",
            steps: [
              { en: "Q1 (Do Now): Exam tomorrow — urgent and important. Q2 (Schedule): College research — important but not urgent, schedule weekly sessions.", ru: "Q1 (Сделать сейчас): Экзамен завтра — срочно и важно. Q2 (Запланировать): Исследование колледжей — важно, но не срочно.", kk: "Q1 (Қазір орында): Ертеңгі емтихан — шұғыл және маңызды. Q2 (Жоспарла): Колледж зерттеуі — маңызды бірақ шұғыл емес." },
              { en: "Q3 (Delegate/Decline politely): Gaming session — feels urgent due to social pressure but isn't important for goals. Q4 (Eliminate): Social media scrolling — neither urgent nor important.", ru: "Q3 (Вежливо отклонить): Игры — кажутся срочными из-за социального давления, но не важны. Q4 (Устранить): Листание соцсетей — ни срочно, ни важно.", kk: "Q3 (Сыпайы бас тарту): Ойын сеансы — әлеуметтік қысымнан шұғыл сезілсе де маңызды емес. Q4 (Жою): Әлеуметтік медиа — шұғыл да маңызды да емес." }
            ],
            answer: "Q1: Exam prep (do now). Q2: College research (schedule). Q3: Gaming (politely decline). Q4: Social media (eliminate)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which quadrant of the Eisenhower Matrix should you spend the MOST time in for long-term success?",
            questionRu: "В каком квадранте матрицы Эйзенхауэра нужно проводить БОЛЬШЕ ВСЕГО времени для долгосрочного успеха?",
            questionKk: "Ұзақ мерзімді табыс үшін Эйзенхауэр матрицасының ҚАЙСЫ квадрантында ең көп уақыт өткізу керек?",
            answer: "Quadrant 2 (Important but Not Urgent) — this is where planning, skill-building, relationship-building, and prevention happen. Investing here reduces future crises.",
            hint: "Which quadrant involves proactive, forward-thinking work?",
            hintRu: "Какой квадрант связан с проактивной, перспективной работой?",
            hintKk: "Қай квадрант белсенді, болашаққа бағытталған жұмысты қамтиды?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Sort these tasks into the Eisenhower Matrix: studying for next week's quiz, organizing your desk, replying to a classmate's urgent text about homework, preparing for university applications (due in 6 months).",
            questionRu: "Распределите по матрице: подготовка к тесту на следующей неделе, уборка стола, срочный ответ однокласснику о домашнем задании, подготовка к поступлению (через 6 месяцев).",
            questionKk: "Эйзенхауэр матрицасына бөліңіз: келесі аптаның тестіне дайындық, үстелді реттеу, сыныптастың үй тапсырмасы туралы шұғыл хабарына жауап, университетке түсуге дайындық (6 айдан кейін).",
            answer: "Q1: Replying about homework (urgent + important for academic cooperation). Q2: Quiz prep and university applications (important, not yet urgent — schedule them). Q3: Organizing desk (feels productive but not truly important). Q4: None listed, but social media would go here.",
            hint: "Ask two questions for each task: Is it urgent? Is it important for my goals?",
            hintRu: "Задайте два вопроса для каждой задачи: Это срочно? Это важно для моих целей?",
            hintKk: "Әр тапсырма үшін екі сұрақ қойыңыз: Бұл шұғыл ма? Мақсаттарым үшін маңызды ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student spends most of their time in Q1 (crisis mode) — always cramming for exams, submitting assignments last minute, dealing with emergencies. Design a plan to gradually shift them to Q2.",
            questionRu: "Ученик проводит большую часть времени в Q1 (режим кризиса) — зубрёжка, сдача в последний момент. Разработайте план постепенного перехода в Q2.",
            questionKk: "Оқушы уақытының көп бөлігін Q1-де (дағдарыс режимі) өткізеді — жаттау, соңғы минутта тапсыру. Q2-ге біртіндеп ауысу жоспарын жасаңыз.",
            answer: "Week 1: List all upcoming deadlines for the semester on a calendar — visibility prevents crises. Week 2: Start each assignment the day it is assigned, even if just for 15 minutes. Week 3: Build a weekly review habit — Sunday evening planning for the week ahead. Week 4: Create a study schedule with built-in buffers so nothing becomes last-minute. Over time, fewer tasks will reach Q1 because they are handled in Q2.",
            hint: "Q1 crises usually happen because Q2 planning was skipped. How do you prevent things from becoming urgent?",
            hintRu: "Кризисы Q1 возникают из-за пропуска планирования Q2. Как предотвратить превращение задач в срочные?",
            hintKk: "Q1 дағдарыстары Q2 жоспарлауын өткізіп жіберуден болады. Тапсырмалардың шұғылға айналуын қалай болдырмайсыз?",
            xp: 20
          }
        ]
      },
      {
        title: "Habit Formation",
        titleRu: "Формирование привычек",
        titleKk: "Дағды қалыптастыру",
        content: "Habits form through a loop: cue, routine, reward. A cue triggers the behavior, the routine is the action itself, and the reward reinforces repetition. Research shows it takes an average of 66 days to form a new habit. Starting small — as little as 2 minutes — is more effective than ambitious plans that collapse.",
        contentRu: "Привычки формируются через цикл: сигнал, действие, награда. Сигнал запускает поведение, действие — сама привычка, награда закрепляет повторение. Исследования показывают, что формирование привычки занимает в среднем 66 дней. Начинать с малого — даже 2 минуты — эффективнее амбициозных планов.",
        contentKk: "Дағдылар цикл арқылы қалыптасады: белгі, тәртіп, марапат. Белгі мінез-құлықты іске қосады, тәртіп — әрекеттің өзі, марапат қайталауды нығайтады. Зерттеулер жаңа дағды қалыптастыру орташа есеппен 66 күн алатынын көрсетеді. Аздан бастау — тіпті 2 минут — құлайтын өршіл жоспарлардан тиімдірек.",
        keyFormulas: [
          {
            formula: "Cue → Routine → Reward = Habit Loop",
            description: "The three components of any habit",
            descriptionRu: "Три компонента любой привычки",
            descriptionKk: "Кез келген дағдының үш компоненті"
          },
          {
            formula: "Start with 2 Minutes → Build Gradually → 66 Days to Automaticity",
            description: "The path to sustainable habit formation",
            descriptionRu: "Путь к устойчивому формированию привычек",
            descriptionKk: "Тұрақты дағды қалыптастыру жолы"
          }
        ],
        solvedExamples: [
          {
            question: "Design a habit loop for a student who wants to start reading 30 minutes every day but currently reads zero.",
            questionRu: "Создайте цикл привычки для ученика, который хочет читать 30 минут ежедневно, но сейчас не читает вообще.",
            questionKk: "Қазір мүлдем оқымайтын, бірақ күнде 30 минут оқығысы келетін оқушы үшін дағды циклін жасаңыз.",
            steps: [
              { en: "Start with 2 minutes, not 30. Cue: right after brushing teeth at night. Routine: read one page. Reward: check off a day on a visible streak calendar.", ru: "Начните с 2 минут, не 30. Сигнал: сразу после чистки зубов вечером. Действие: прочитать одну страницу. Награда: отметить день в видимом календаре.", kk: "30 емес, 2 минуттан бастаңыз. Белгі: кешкі тіс тазалағаннан кейін. Тәртіп: бір бет оқу. Марапат: көрінетін күнтізбеде күнді белгілеу." },
              { en: "After 2 weeks of consistency, increase to 5 minutes, then 10, then 15, then 30. The habit of sitting down to read is more important than the duration at first.", ru: "После 2 недель стабильности увеличьте до 5 минут, потом 10, 15, 30. Привычка садиться читать важнее длительности на первом этапе.", kk: "2 апта тұрақтылықтан кейін 5 минутқа, содан кейін 10, 15, 30-ға арттырыңыз. Оқуға отыру дағдысы алғашында ұзақтықтан маңыздырақ." }
            ],
            answer: "Cue: after brushing teeth. Routine: read one page (2 min). Reward: mark streak calendar. Gradually increase duration over weeks."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of the habit loop?",
            questionRu: "Какие три части цикла привычки?",
            questionKk: "Дағды циклінің үш бөлігі қандай?",
            answer: "Cue (trigger), Routine (the behavior), and Reward (the positive reinforcement).",
            hint: "What starts the habit, what is the habit itself, and what keeps you doing it?",
            hintRu: "Что запускает привычку, что является самой привычкой и что поддерживает её?",
            hintKk: "Дағдыны не бастайды, дағдының өзі не және оны не жалғастырады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design a habit loop for exercising every morning before school.",
            questionRu: "Создайте цикл привычки для утренних упражнений перед школой.",
            questionKk: "Мектепке дейін таңертең жаттығу жасау үшін дағды циклін жасаңыз.",
            answer: "Cue: alarm goes off, immediately put on workout clothes laid out the night before. Routine: start with just 5 minutes of stretching (2-minute rule). Reward: enjoy a favorite breakfast only after exercising. Increase duration gradually over weeks.",
            hint: "Make the cue obvious, the routine easy, and the reward immediate.",
            hintRu: "Сделайте сигнал очевидным, действие лёгким, а награду немедленной.",
            hintKk: "Белгіні айқын, тәртіпті жеңіл, марапатты бірден етіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student wants to build three new habits simultaneously: daily exercise, daily reading, and daily journaling. Why might this fail, and how would you restructure the approach?",
            questionRu: "Ученик хочет выработать три привычки одновременно: ежедневные упражнения, чтение и ведение дневника. Почему это может не сработать и как перестроить подход?",
            questionKk: "Оқушы бір уақытта үш дағды қалыптастырғысы келеді: күнделікті жаттығу, оқу және күнделік жазу. Неліктен бұл сәтсіз болуы мүмкін және тәсілді қалай қайта құрар едіңіз?",
            answer: "Starting three habits at once depletes willpower and creates overwhelm. Restructure: Month 1 — only journaling (2 min/day). Month 2 — add reading (2 min/day) while maintaining journaling. Month 3 — add exercise (5 min/day). Each habit is well-established before adding the next. The 'habit stacking' approach builds on existing routines.",
            hint: "Willpower is limited. How can you sequence the habits instead of starting all at once?",
            hintRu: "Сила воли ограничена. Как выстроить привычки последовательно?",
            hintKk: "Ерік-жігер шектеулі. Дағдыларды бірден бастаудың орнына қалай ретімен құруға болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Focus Management",
        titleRu: "Управление фокусом",
        titleKk: "Зейінді басқару",
        content: "Focus management goes beyond eliminating distractions — it involves understanding your biological attention cycles. Most people can sustain intense focus for 25-90 minutes before needing a break. Learning to recognize when your focus fades and strategically resting allows you to maintain high performance throughout the day.",
        contentRu: "Управление фокусом выходит за рамки устранения отвлечений — оно включает понимание биологических циклов внимания. Большинство людей могут поддерживать интенсивный фокус 25-90 минут. Умение распознать угасание фокуса и стратегически отдыхать позволяет поддерживать высокую продуктивность весь день.",
        contentKk: "Зейінді басқару алаңдауларды жоюдан асады — ол биологиялық зейін циклдерін түсінуді қамтиды. Көптеген адамдар 25-90 минут қарқынды зейін сақтай алады. Зейініңіздің қашан сөнетінін тани білу және стратегиялық демалу күні бойы жоғары өнімділікті сақтауға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Peak Focus (25-90 min) → Strategic Break (5-20 min) → Reset → Repeat",
            description: "The focus-rest cycle for sustained performance",
            descriptionRu: "Цикл фокус-отдых для устойчивой продуктивности",
            descriptionKk: "Тұрақты өнімділік үшін зейін-демалыс циклі"
          }
        ],
        solvedExamples: [
          {
            question: "A student loses focus after 20 minutes of math homework. Design a focus management strategy.",
            questionRu: "Ученик теряет фокус после 20 минут математики. Разработайте стратегию управления фокусом.",
            questionKk: "Оқушы математика үй тапсырмасынан 20 минуттан кейін зейінін жоғалтады. Зейінді басқару стратегиясын жасаңыз.",
            steps: [
              { en: "Accept the 20-minute limit and work with it. Set a timer for 20 minutes of pure math focus with all distractions removed.", ru: "Примите 20-минутный лимит и работайте с ним. Поставьте таймер на 20 минут чистого фокуса на математике.", kk: "20 минуттық шекті қабылдап, онымен жұмыс істеңіз. Барлық алаңдаулар жойылған 20 минуттық таза математика зейіні үшін таймер қойыңыз." },
              { en: "After 20 minutes, take a 5-minute physical break (walk, stretch). Then do another 20-minute block. Over weeks, gradually extend to 25, then 30 minutes as focus stamina builds.", ru: "После 20 минут — 5-минутный физический перерыв (прогулка, растяжка). Затем ещё один 20-минутный блок. Постепенно увеличивайте до 25, затем 30 минут.", kk: "20 минуттан кейін 5 минуттық физикалық үзіліс жасаңыз (серуен, созылу). Содан кейін тағы бір 20 минуттық блок. Апталар бойы біртіндеп 25, содан кейін 30 минутқа дейін ұзартыңыз." }
            ],
            answer: "Use 20-minute focus blocks with 5-minute breaks. Gradually increase block length over weeks as focus stamina improves."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How long can most people maintain intense focus before needing a break?",
            questionRu: "Как долго большинство людей могут поддерживать интенсивный фокус до перерыва?",
            questionKk: "Көптеген адамдар үзілісті қажет етпестен қанша уақыт қарқынды зейін сақтай алады?",
            answer: "Between 25 and 90 minutes, depending on the person, the task, and their training. Most students start around 25-30 minutes.",
            hint: "Think about the Pomodoro Technique you learned in Grade 9.",
            hintRu: "Вспомните технику Помодоро из 9 класса.",
            hintKk: "9-сыныпта үйренген Помодоро техникасын еске түсіріңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What makes a good break between focus sessions? Compare a social media break vs. a walking break.",
            questionRu: "Что делает перерыв между сессиями фокуса хорошим? Сравните перерыв в соцсетях и прогулку.",
            questionKk: "Зейін сеанстары арасындағы жақсы үзіліс қандай? Әлеуметтік медиа үзілісі мен серуен үзілісін салыстырыңыз.",
            answer: "A walking break is far better — it gives your brain genuine rest through physical movement and visual change. Social media actually taxes the same attention circuits, making it harder to refocus. A good break involves physical movement, nature, or simply closing your eyes.",
            hint: "Does scrolling social media actually rest your brain or just stimulate it differently?",
            hintRu: "Листание соцсетей действительно отдыхает мозг или просто стимулирует иначе?",
            hintKk: "Әлеуметтік медианы айналдыру миыңызды шын мәнінде демалдыра ма, әлде жай басқаша ынталандыра ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Map your personal focus pattern for one study day. Identify your peak focus hours, average session length before losing concentration, and energy dips. Then create an optimized schedule.",
            questionRu: "Составьте карту вашего фокуса на один учебный день. Определите пиковые часы, среднюю длину сессии и спады энергии. Создайте оптимизированное расписание.",
            questionKk: "Бір оқу күніне жеке зейін үлгіңізді сызыңыз. Ең жоғары зейін сағаттарыңызды, орташа сеанс ұзақтығын және энергия құлдырауларын анықтаңыз. Оңтайландырылған кесте жасаңыз.",
            answer: "Example: Peak hours 9-11 AM and 3-5 PM. Average focus: 35 minutes. Energy dip: 1-2 PM after lunch. Optimized: Schedule hardest subjects (math, science) during 9-11 AM peaks in 35-min blocks. Use post-lunch dip for light review or organizing. Second peak (3-5 PM) for creative work and essays. Evening for spaced repetition review only.",
            hint: "Track when you feel most alert and when you feel tired. Match task difficulty to energy levels.",
            hintRu: "Отследите, когда вы наиболее бодры и когда устаёте. Сопоставьте сложность задач с уровнем энергии.",
            hintKk: "Қашан ең серігіз және қашан шаршайтыныңызды бақылаңыз. Тапсырма қиындығын энергия деңгейімен сәйкестендіріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Project Planning",
        titleRu: "Планирование проектов",
        titleKk: "Жобаны жоспарлау",
        content: "Project planning breaks large assignments into smaller milestones with deadlines, preventing last-minute panic. Working backward from the due date and building in buffer time ensures you finish early rather than scrambling. The key insight is that every large project is just a series of small, manageable tasks.",
        contentRu: "Планирование проектов разбивает большие задания на маленькие этапы с дедлайнами, предотвращая панику в последний момент. Работа от дедлайна назад с запасом времени обеспечивает раннее завершение. Ключевое понимание: каждый большой проект — это серия маленьких управляемых задач.",
        contentKk: "Жобаны жоспарлау үлкен тапсырмаларды мерзімдері бар кішірек кезеңдерге бөліп, соңғы минуттағы үрейді болдырмайды. Мерзімнен кері жұмыс істеу және қор уақыт қалдыру ертерек аяқтауды қамтамасыз етеді. Негізгі түсінік: әрбір үлкен жоба — кішігірім, басқарылатын тапсырмалар тізбегі.",
        keyFormulas: [
          {
            formula: "Due Date → Work Backward → Set Milestones → Add Buffer Time",
            description: "The backward planning method for projects",
            descriptionRu: "Метод обратного планирования проектов",
            descriptionKk: "Жобаларды кері жоспарлау әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "You have a 10-page research paper due in 3 weeks. Create a backward plan with milestones.",
            questionRu: "Исследовательская работа на 10 страниц через 3 недели. Создайте обратный план с этапами.",
            questionKk: "3 аптадан кейін 10 беттік зерттеу жұмысы тапсыру керек. Кезеңдері бар кері жоспар жасаңыз.",
            steps: [
              { en: "Work backward: Week 3 — final proofread and submit (2 days buffer). Days 15-17 — revise and edit. Days 10-14 — write body paragraphs. Days 5-9 — write introduction and gather remaining sources. Days 1-4 — choose topic, outline, initial research.", ru: "Обратный план: Неделя 3 — финальная проверка (2 дня запас). Дни 15-17 — редактирование. Дни 10-14 — основной текст. Дни 5-9 — введение и источники. Дни 1-4 — тема, план, исследование.", kk: "Кері жоспар: 3-апта — соңғы тексеру (2 күн қор). 15-17 күндер — түзету. 10-14 күндер — негізгі мәтін. 5-9 күндер — кіріспе және дереккөздер. 1-4 күндер — тақырып, жоспар, зерттеу." },
              { en: "Each milestone has a specific deliverable. If you fall behind on one, the buffer days at the end protect you from missing the deadline.", ru: "Каждый этап имеет конкретный результат. Если отстанете — буферные дни в конце защитят от пропуска дедлайна.", kk: "Әр кезеңнің нақты нәтижесі бар. Бір кезеңде артта қалсаңыз, соңындағы қор күндер мерзімді өткізбеуге қорғайды." }
            ],
            answer: "Days 1-4: topic + outline. Days 5-9: intro + sources. Days 10-14: body paragraphs. Days 15-17: revision. Days 18-19: buffer. Day 21: submit."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is working backward from a deadline more effective than working forward?",
            questionRu: "Почему работа от дедлайна назад эффективнее, чем вперёд?",
            questionKk: "Мерзімнен кері жұмыс істеу алға қарай жұмыс істеуден неліктен тиімдірек?",
            answer: "Working backward forces you to allocate specific time for each phase and reveals if you have enough time. Working forward often leads to procrastination because the deadline feels far away.",
            hint: "What happens when you start from 'I have 3 weeks' vs. 'I need to submit on Day 21'?",
            hintRu: "Что происходит, когда вы начинаете с «у меня 3 недели» vs. «сдать нужно к 21-му дню»?",
            hintKk: "«Менде 3 апта бар» деп бастаудан vs. «21-күні тапсыру керек» деп бастаудың айырмашылығы қандай?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a project plan for a group science fair project due in 6 weeks with 4 team members.",
            questionRu: "Создайте план для группового научного проекта (4 человека) на 6 недель.",
            questionKk: "6 аптада 4 топ мүшесімен ғылыми жоба жәрмеңкесі жобасының жоспарын жасаңыз.",
            answer: "Week 1: Brainstorm and choose topic as a group. Week 2: Divide research — each person takes one section. Week 3: Conduct experiment/gather data. Week 4: Analyze results, each person writes their section. Week 5: Combine sections, create presentation/poster. Week 6: Practice presentation, buffer for issues. Assign a project manager to track milestones.",
            hint: "How do you divide work fairly and ensure everyone contributes on time?",
            hintRu: "Как справедливо разделить работу и убедиться, что все вносят вклад вовремя?",
            hintKk: "Жұмысты әділ бөліп, барлығының уақытында үлес қосуын қалай қамтамасыз етесіз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are managing three overlapping projects: a history essay (due Week 2), a math portfolio (due Week 4), and a biology presentation (due Week 3). Create an integrated project plan.",
            questionRu: "Три пересекающихся проекта: эссе по истории (неделя 2), портфолио по математике (неделя 4) и презентация по биологии (неделя 3). Создайте интегрированный план.",
            questionKk: "Үш қабаттасқан жоба басқарасыз: тарих эссесі (2-апта), математика портфолиосы (4-апта) және биология презентациясы (3-апта). Біріктірілген жоба жоспарын жасаңыз.",
            answer: "Week 1: History essay — research and draft (priority, due soonest). Begin biology research in evenings. Week 2: Finalize history essay Monday-Tuesday. Switch focus to biology presentation (Wed-Sun). Start math portfolio outline. Week 3: Complete biology presentation by Wednesday. Shift to math portfolio (Thu-Sun). Week 4: Finish math portfolio with Monday-Wednesday buffer. Key: identify which project is most urgent each week and give it primary focus while maintaining progress on others.",
            hint: "Which deadline comes first? Work backward from each deadline and see where they overlap.",
            hintRu: "Какой дедлайн ближе? Работайте назад от каждого и найдите пересечения.",
            hintKk: "Қай мерзім бірінші? Әрқайсысынан кері жұмыс істеп, қабаттасатын жерлерді табыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Exam Strategy",
        titleRu: "Стратегия экзаменов",
        titleKk: "Емтихан стратегиясы",
        content: "Exam strategy combines all your productivity skills into a systematic approach to test preparation. It starts weeks before the exam with a study plan and ends with specific techniques for the exam day itself. Students who prepare strategically consistently outperform those who simply study harder.",
        contentRu: "Стратегия экзаменов объединяет все навыки продуктивности в систематический подход к подготовке. Она начинается за недели до экзамена с плана и заканчивается техниками для дня экзамена. Стратегически готовящиеся ученики стабильно превосходят тех, кто просто учится больше.",
        contentKk: "Емтихан стратегиясы барлық өнімділік дағдыларын тест дайындығына жүйелі тәсілге біріктіреді. Ол емтиханнан бірнеше апта бұрын жоспармен басталып, емтихан күніне арналған нақты техникалармен аяқталады. Стратегиялық дайындалатын оқушылар жай көбірек оқитындардан тұрақты түрде озады.",
        keyFormulas: [
          {
            formula: "Study Plan (weeks before) → Active Review (days before) → Exam Day Protocol → Post-Exam Reflection",
            description: "The complete exam preparation cycle",
            descriptionRu: "Полный цикл подготовки к экзамену",
            descriptionKk: "Емтиханға дайындықтың толық циклі"
          }
        ],
        solvedExamples: [
          {
            question: "You have a comprehensive biology exam in 2 weeks covering 8 chapters. Design an exam strategy.",
            questionRu: "Через 2 недели комплексный экзамен по биологии по 8 главам. Разработайте стратегию.",
            questionKk: "2 аптадан кейін 8 тарауды қамтитын биология емтиханы бар. Емтихан стратегиясын жасаңыз.",
            steps: [
              { en: "Week 1: Review 2 chapters per day using active recall. Create flashcards for key terms. Take practice tests after each chapter. Identify weak chapters by Day 7.", ru: "Неделя 1: Повторять 2 главы в день через активное воспроизведение. Создать карточки. Пробные тесты после каждой главы. К дню 7 — определить слабые главы.", kk: "1-апта: Күніне 2 тарауды белсенді еске түсірумен қайталау. Карточкалар жасау. Әр тараудан кейін тест. 7-күнге дейін әлсіз тарауларды анықтау." },
              { en: "Week 2: Focus extra time on weak chapters. Days 12-13: full practice exam under timed conditions. Day 14 (exam eve): light review only — read mind maps, no cramming. Exam day: arrive early, read all questions first, start with what you know best.", ru: "Неделя 2: Дополнительное время на слабые главы. Дни 12-13: полный пробный экзамен с таймером. День 14 (канун): лёгкий обзор — ментальные карты, без зубрёжки. День экзамена: прийти рано, прочитать все вопросы, начать с того, что знаете лучше.", kk: "2-апта: Әлсіз тарауларға қосымша уақыт. 12-13 күндер: уақытпен толық емтихан. 14-күн (алдыңғы кеш): жеңіл шолу — ойлау карталары, жаттау жоқ. Емтихан күні: ерте келіңіз, барлық сұрақтарды оқыңыз, ең жақсы білетініңізден бастаңыз." }
            ],
            answer: "Week 1: Review all chapters with active recall and identify weak spots. Week 2: Focus on weaknesses, take timed practice exams. Day before: light review only. Exam day: read all questions first, start with strongest topics."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What should you do the night before a big exam — cram all night or do a light review and sleep early?",
            questionRu: "Что делать накануне важного экзамена — зубрить всю ночь или лёгкий обзор и ранний сон?",
            questionKk: "Үлкен емтихан алдындағы кеште не істеу керек — бүкіл түні жаттау ма, әлде жеңіл шолу мен ерте ұйықтау ма?",
            answer: "Light review and sleep early. Sleep consolidates memory and keeps your brain sharp. Cramming causes exhaustion and anxiety, which hurt performance more than the extra studying helps.",
            hint: "What does sleep do for memory? What does exhaustion do for test performance?",
            hintRu: "Что сон делает для памяти? Что усталость делает для результатов теста?",
            hintKk: "Ұйқы жадыға не істейді? Шаршау тест нәтижелеріне не істейді?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During an exam, you encounter a difficult question worth 20 points that you are unsure about. You have 45 minutes left and 10 questions remaining. What should you do?",
            questionRu: "На экзамене вы встретили сложный вопрос на 20 баллов, в котором не уверены. Осталось 45 минут и 10 вопросов. Что делать?",
            questionKk: "Емтихан кезінде 20 ұпайлық қиын сұраққа тап болдыңыз, сенімді емессіз. 45 минут пен 10 сұрақ қалды. Не істеу керек?",
            answer: "Skip it temporarily and answer the remaining 9 questions you are more confident about. Return to the hard question with remaining time. Write down any partial knowledge — partial credit is better than leaving it blank. Budget roughly 4 minutes per remaining question and save at least 10 minutes for the hard one.",
            hint: "Should you spend a lot of time on one question or secure easy points first?",
            hintRu: "Стоит ли тратить много времени на один вопрос или сначала набрать лёгкие баллы?",
            hintKk: "Бір сұраққа көп уақыт жұмсау керек пе, әлде алдымен оңай ұпайларды жинау керек пе?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete 3-week exam preparation strategy for finals week where you have 5 exams across different subjects in the same week.",
            questionRu: "Разработайте полную 3-недельную стратегию подготовки к неделе финальных экзаменов — 5 экзаменов по разным предметам.",
            questionKk: "Бір аптада 5 түрлі пәннен емтихан болатын қорытынды апта үшін толық 3 апталық дайындық стратегиясын жасаңыз.",
            answer: "Week 1: Create summary sheets and flashcards for all 5 subjects. Study 2 subjects per day using active recall. Identify weak areas in each. Week 2: Focus on weak areas. Alternate subjects to avoid fatigue (morning: Subject A, afternoon: Subject B). Take practice tests. Week 3: Schedule based on exam order — study for Monday's exam first. Two days before each exam: timed practice test. One day before: light review and early sleep. Between exams: brief targeted review for the next one only. Key: avoid spending all time on one subject at the expense of others.",
            hint: "How do you distribute study time across 5 subjects without neglecting any?",
            hintRu: "Как распределить время между 5 предметами, не забросив ни одного?",
            hintKk: "5 пән арасында оқу уақытын ешқайсысын ұмытпай қалай бөлесіз?",
            xp: 20
          }
        ]
      }
    ]
  },
  "Productivity & Learning Systems_11": {
    planetName: "Productivity & Learning Systems",
    introduction: {
      en: "Welcome to Productivity & Learning Systems for Grade 11! Build sophisticated systems for goal-setting, energy management, and strategic planning that will prepare you for university-level demands and beyond.",
      ru: "Добро пожаловать в Продуктивность и системы обучения для 11 класса! Постройте продвинутые системы целеполагания, управления энергией и стратегического планирования, которые подготовят вас к университетским требованиям и не только."
    },
    sections: [
      {
        title: "SMART Goals",
        titleRu: "Цели SMART",
        titleKk: "SMART мақсаттар",
        content: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. Vague goals like 'study more' fail because there is no clear target or deadline. Converting every goal into SMART format dramatically increases your chance of achieving it because you know exactly what success looks like.",
        contentRu: "Цели SMART — конкретные, измеримые, достижимые, релевантные и ограниченные по времени. Расплывчатые цели вроде «учиться больше» терпят неудачу из-за отсутствия чёткой цели и дедлайна. Перевод каждой цели в формат SMART резко увеличивает шансы на её достижение.",
        contentKk: "SMART мақсаттар — нақты, өлшенетін, қол жеткізілетін, өзекті және мерзімді. «Көбірек оқу» сияқты анық емес мақсаттар нақты нысана немесе мерзім болмағандықтан сәтсіздікке ұшырайды. Әрбір мақсатты SMART форматына ауыстыру оған жету мүмкіндігін күрт арттырады.",
        keyFormulas: [
          {
            formula: "S (Specific) + M (Measurable) + A (Achievable) + R (Relevant) + T (Time-bound) = Effective Goal",
            description: "The five components of a SMART goal",
            descriptionRu: "Пять компонентов цели SMART",
            descriptionKk: "SMART мақсаттың бес компоненті"
          }
        ],
        solvedExamples: [
          {
            question: "Convert this vague goal into a SMART goal: 'I want to get better grades in math.'",
            questionRu: "Переведите расплывчатую цель в SMART: «Хочу улучшить оценки по математике.»",
            questionKk: "Бұл анық емес мақсатты SMART мақсатқа айналдырыңыз: «Математикадан бағаларымды жақсартқым келеді.»",
            steps: [
              { en: "Apply each letter: Specific — raise math grade from B to A. Measurable — score 90%+ on all remaining tests. Achievable — currently at 83%, so 90% is realistic with effort.", ru: "Применяем каждую букву: Specific — поднять оценку с B до A. Measurable — 90%+ на всех оставшихся тестах. Achievable — сейчас 83%, 90% реалистично.", kk: "Әр әріпті қолданыңыз: Specific — бағаны B-ден A-ға көтеру. Measurable — барлық қалған тесттерде 90%+. Achievable — қазір 83%, 90% күш-жігермен шынайы." },
              { en: "Relevant — math grade matters for university applications. Time-bound — by the end of this semester (December 15). Final SMART goal: 'I will raise my math grade to an A by scoring 90%+ on all remaining tests by December 15.'", ru: "Relevant — оценка по математике важна для поступления. Time-bound — к концу семестра (15 декабря). Итог: «Я подниму оценку до A, набирая 90%+ на всех тестах до 15 декабря.»", kk: "Relevant — математика бағасы университетке түсу үшін маңызды. Time-bound — осы семестр соңына дейін (15 желтоқсан). SMART мақсат: «15 желтоқсанға дейін барлық тесттерде 90%+ жинап, математика бағамды A-ға көтеремін.»" }
            ],
            answer: "SMART goal: 'I will raise my math grade to an A by scoring 90% or above on all remaining tests by December 15, using daily 30-minute practice sessions.'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does each letter in SMART stand for?",
            questionRu: "Что означает каждая буква в SMART?",
            questionKk: "SMART-тағы әр әріп нені білдіреді?",
            answer: "S — Specific, M — Measurable, A — Achievable, R — Relevant, T — Time-bound.",
            hint: "Think about what makes a goal clear, trackable, realistic, meaningful, and deadline-driven.",
            hintRu: "Подумайте, что делает цель ясной, отслеживаемой, реалистичной, значимой и с дедлайном.",
            hintKk: "Мақсатты анық, қадағаланатын, шынайы, мағыналы және мерзімді ететін нені ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Convert this vague goal into a SMART goal: 'I want to read more books this year.'",
            questionRu: "Переведите в SMART: «Хочу читать больше книг в этом году.»",
            questionKk: "Бұл анық емес мақсатты SMART-қа айналдырыңыз: «Биыл көбірек кітап оқығым келеді.»",
            answer: "Example: 'I will read 1 book per month (12 books total) by reading 20 pages every night before bed.' This specifies quantity, frequency, and method.",
            answerRu: "Пример: «Я буду читать 1 книгу в месяц (12 книг за год), читая 20 страниц каждый вечер перед сном.» Здесь указаны количество, частота и способ.",
            answerKk: "Мысал: «Күн сайын ұйықтар алдында 20 бет оқып, айына 1 кітап (жылына 12 кітап) оқимын.» Мұнда мөлшер, жиілік және тәсіл нақты көрсетілген.",
            hint: "How many books? How often? When will you read?",
            hintRu: "Сколько книг? Как часто? Когда будете читать?",
            hintKk: "Қанша кітап? Қаншалықты жиі? Қашан оқисыз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Set three academic goals for this semester: one for your strongest subject, one for your weakest, and one for a personal skill. Each must follow the SMART framework with specific metrics and deadlines.",
            questionRu: "Поставьте три академические цели на семестр: для сильного предмета, слабого и личного навыка. Каждая должна соответствовать SMART с метриками и дедлайнами.",
            questionKk: "Осы семестрге үш академиялық мақсат қойыңыз: күшті пән, әлсіз пән және жеке дағды үшін. Әрқайсысы метрикалары мен мерзімдері бар SMART форматында болуы керек.",
            answer: "Example: Strongest (Math): Maintain A average and complete all bonus problems by semester end. Weakest (English): Raise grade from C+ to B by writing one extra practice essay per week. Personal: Improve time management by using a planner every day for 60 consecutive days. Each has a clear target and deadline.",
            answerRu: "Пример: Сильный (математика): поддерживать средний балл A и выполнить все бонусные задачи к концу семестра. Слабый (английский): поднять оценку с C+ до B за счёт одного дополнительного тренировочного эссе в неделю. Личный: улучшить тайм-менеджмент, пользуясь ежедневником каждый день 60 дней подряд. У каждой цели есть чёткий ориентир и дедлайн.",
            answerKk: "Мысал: Күшті пән (математика): семестр соңына дейін A орташа бағасын ұстап, барлық бонустық есептерді орындау. Әлсіз пән (ағылшын): аптасына бір қосымша жаттығу эссесін жазып, бағаны C+-дан B-ға көтеру. Жеке: 60 күн қатарынан күн сайын жоспарлағыш қолданып, уақытты басқаруды жақсарту. Әрқайсысының нақты мақсаты мен мерзімі бар.",
            hint: "Use the format: 'I will [specific action] to achieve [measurable result] by [deadline].'",
            hintRu: "Формат: «Я буду [конкретное действие] для достижения [измеримого результата] к [дедлайну].»",
            hintKk: "Пішім: «Мен [нақты әрекет] жасаймын, [өлшенетін нәтижеге] [мерзімге] дейін жету үшін.»",
            xp: 20
          }
        ]
      },
      {
        title: "Habit Stacking",
        titleRu: "Стыковка привычек",
        titleKk: "Дағдыларды тізбектеу",
        content: "Habit stacking links a new habit to an existing one using the formula 'After I [current habit], I will [new habit].' By anchoring new behaviors to established routines, you leverage existing neural pathways instead of building from scratch. This makes new habits dramatically easier to remember and execute.",
        contentRu: "Стыковка привычек связывает новую привычку с существующей по формуле «После [текущая привычка] я буду [новая привычка]». Привязывая новые действия к устоявшимся рутинам, вы используете существующие нейронные связи вместо построения с нуля. Это делает новые привычки значительно легче.",
        contentKk: "Дағдыларды тізбектеу жаңа дағдыны бар дағдыға «[ағымдағы дағды] орындағаннан кейін [жаңа дағды] жасаймын» формуласымен байланыстырады. Жаңа мінез-құлықтарды қалыптасқан тәртіптерге бекіту арқылы нөлден құрудың орнына бар нейрондық жолдарды пайдаланасыз.",
        keyFormulas: [
          {
            formula: "After I [CURRENT HABIT], I will [NEW HABIT]",
            description: "The habit stacking formula",
            descriptionRu: "Формула стыковки привычек",
            descriptionKk: "Дағдыларды тізбектеу формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to start reviewing flashcards daily but keeps forgetting. Create a habit stack.",
            questionRu: "Ученик хочет ежедневно повторять карточки, но постоянно забывает. Создайте стыковку привычек.",
            questionKk: "Оқушы күн сайын карточкаларды қайталағысы келеді, бірақ үнемі ұмытады. Дағды тізбегін жасаңыз.",
            steps: [
              { en: "Identify an existing daily habit the student already does consistently — for example, eating lunch at school.", ru: "Определите существующую ежедневную привычку ученика — например, обед в школе.", kk: "Оқушының бар тұрақты күнделікті дағдысын анықтаңыз — мысалы, мектепте түскі ас." },
              { en: "Create the stack: 'After I sit down for lunch, I will review 10 flashcards before eating.' The lunch cue is already automatic, so the flashcard review piggybacks on it.", ru: "Создайте стыковку: «Как сяду обедать, повторю 10 карточек перед едой.» Обеденный сигнал уже автоматический, карточки привязываются к нему.", kk: "Тізбекті жасаңыз: «Түскі асқа отырғанда, жемес бұрын 10 карточканы қайталаймын.» Түскі ас белгісі автоматты, карточкалар оған бекітіледі." }
            ],
            answer: "Habit stack: 'After I sit down for lunch, I will review 10 flashcards before eating.' This links the new habit to an existing daily trigger."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the basic formula for habit stacking?",
            questionRu: "Какова базовая формула стыковки привычек?",
            questionKk: "Дағдыларды тізбектеудің негізгі формуласы қандай?",
            answer: "'After I [current habit], I will [new habit].' You attach the new behavior to something you already do automatically.",
            hint: "The key is linking something new to something you already do every day.",
            hintRu: "Ключ — привязать новое к тому, что вы уже делаете каждый день.",
            hintKk: "Кілті — жаңа нәрсені күн сайын жасап жатқаныңызға байланыстыру.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create three habit stacks for a student who wants to: (1) drink more water, (2) practice gratitude, (3) review vocabulary.",
            questionRu: "Создайте три стыковки для ученика, который хочет: (1) пить больше воды, (2) практиковать благодарность, (3) повторять слова.",
            questionKk: "Мына нәрселерді қалайтын оқушы үшін үш дағды тізбегін жасаңыз: (1) көбірек су ішу, (2) алғыс білдіру, (3) сөздерді қайталау.",
            answer: "(1) 'After I sit down at my desk for class, I will drink a full glass of water.' (2) 'After I get into bed at night, I will write three things I am grateful for.' (3) 'After I finish breakfast, I will review 10 vocabulary words on my phone.'",
            hint: "Find three different existing habits that happen at different times of day.",
            hintRu: "Найдите три разные существующие привычки в разное время дня.",
            hintKk: "Күннің әр уақытында болатын үш түрлі бар дағдыны табыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete morning routine using habit stacking, chaining at least 5 productive habits together. Explain why the order matters.",
            questionRu: "Создайте полную утреннюю рутину, связав минимум 5 продуктивных привычек. Объясните, почему порядок важен.",
            questionKk: "Кемінде 5 өнімді дағдыны тізбектеп, толық таңғы тәртіп жасаңыз. Неліктен реті маңызды екенін түсіндіріңіз.",
            answer: "Chain: After alarm → make bed (1 min, creates first win). After making bed → drink water (hydration). After drinking water → 5-minute stretch (wake up body). After stretching → review today's top 3 priorities (focus). After reviewing priorities → 10-minute focused study (hardest task). Order matters because each habit builds momentum — physical first (bed, water, stretch), then mental (priorities, study). Early wins create motivation for harder tasks.",
            hint: "Start with the easiest physical habits to build momentum, then progress to mental tasks.",
            hintRu: "Начните с самых лёгких физических привычек для набора момента, затем переходите к умственным.",
            hintKk: "Серпін жинау үшін ең жеңіл физикалық дағдылардан бастаңыз, содан кейін ақыл-ой тапсырмаларына көшіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Time Blocking",
        titleRu: "Блокировка времени",
        titleKk: "Уақытты блоктау",
        content: "Time blocking assigns every hour of your day to a specific task or category, turning your calendar into a concrete plan rather than an open wishlist. Unlike a to-do list that shows what to do, a time-blocked schedule shows when to do it. Research shows that people who time-block are 30% more productive because they eliminate decision fatigue.",
        contentRu: "Блокировка времени назначает каждый час дня конкретной задаче, превращая календарь в конкретный план. В отличие от списка дел, который показывает что делать, блокировка показывает когда. Исследования показывают, что блокирующие время на 30% продуктивнее благодаря устранению усталости от решений.",
        contentKk: "Уақытты блоктау күннің әр сағатын нақты тапсырмаға тағайындайды, күнтізбені ашық тілектер тізімінен нақты жоспарға айналдырады. Не істеу керектігін көрсететін тапсырмалар тізімінен айырмашылығы, уақыт блоктау кестесі қашан істеу керектігін көрсетеді. Зерттеулер уақытты блоктайтын адамдар 30% өнімдірек екенін көрсетеді.",
        keyFormulas: [
          {
            formula: "Every Hour Gets a Task → No Open Gaps → Decision Fatigue Eliminated",
            description: "The core principle of time blocking",
            descriptionRu: "Основной принцип блокировки времени",
            descriptionKk: "Уақытты блоктаудың негізгі принципі"
          }
        ],
        solvedExamples: [
          {
            question: "Create a time-blocked schedule for a school day from 3 PM to 9 PM, including homework, dinner, and free time.",
            questionRu: "Создайте блокировку времени для школьного дня с 15:00 до 21:00, включая уроки, ужин и свободное время.",
            questionKk: "Сағат 15:00-ден 21:00-ге дейін мектеп күніне уақыт блоктау кестесін жасаңыз, үй тапсырмасы, кешкі ас және бос уақытты қоса.",
            steps: [
              { en: "3:00-3:15 — Snack and transition. 3:15-4:15 — Deep work: hardest homework subject. 4:15-4:30 — Break (walk, stretch). 4:30-5:15 — Second homework subject.", ru: "15:00-15:15 — Перекус и переход. 15:15-16:15 — Глубокая работа: самый сложный предмет. 16:15-16:30 — Перерыв. 16:30-17:15 — Второй предмет.", kk: "15:00-15:15 — Тамақ және ауысу. 15:15-16:15 — Терең жұмыс: ең қиын пән. 16:15-16:30 — Үзіліс. 16:30-17:15 — Екінші пән." },
              { en: "5:15-5:45 — Light homework/review. 5:45-6:30 — Dinner and family time. 6:30-7:30 — Free time (hobby, sports, social). 7:30-8:15 — Reading or spaced repetition review. 8:15-9:00 — Prepare for tomorrow, wind down.", ru: "17:15-17:45 — Лёгкие задания. 17:45-18:30 — Ужин и семья. 18:30-19:30 — Свободное время. 19:30-20:15 — Чтение или интервальное повторение. 20:15-21:00 — Подготовка к завтрашнему дню.", kk: "17:15-17:45 — Жеңіл тапсырмалар. 17:45-18:30 — Кешкі ас және отбасы. 18:30-19:30 — Бос уақыт. 19:30-20:15 — Оқу немесе аралықты қайталау. 20:15-21:00 — Ертеңгі күнге дайындық." }
            ],
            answer: "Every 30-60 minute block has a designated purpose. Hardest work comes first, breaks are scheduled, and free time is protected — not leftover."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main difference between a to-do list and a time-blocked schedule?",
            questionRu: "В чём главное различие между списком дел и блокировкой времени?",
            questionKk: "Тапсырмалар тізімі мен уақытты блоктау кестесінің басты айырмашылығы неде?",
            answer: "A to-do list tells you WHAT to do, but a time-blocked schedule tells you WHEN to do each task. Time blocking gives every task a specific slot on your calendar.",
            hint: "One shows tasks, the other shows tasks placed in specific time slots.",
            hintRu: "Один показывает задачи, другой — задачи в конкретных временных слотах.",
            hintKk: "Бірі тапсырмаларды көрсетеді, екіншісі — нақты уақыт аралықтарындағы тапсырмаларды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your time-blocked schedule gets disrupted when a friend calls during your study block. How should you handle this?",
            questionRu: "Друг звонит во время вашего учебного блока. Как поступить?",
            questionKk: "Оқу блогыңыз кезінде дос қоңырау шалады. Мұны қалай шешесіз?",
            answer: "Politely tell your friend you are studying and offer to call back during your scheduled free time block. If it is truly urgent, handle it briefly and extend your study block by the same amount of time lost. The key is protecting your blocks while remaining flexible — shift, don't skip.",
            hint: "You don't have to ignore your friend forever — just redirect to the right time block.",
            hintRu: "Не нужно игнорировать друга — просто перенаправьте на правильный временной блок.",
            hintKk: "Досыңызды елемеу шарт емес — тек дұрыс уақыт блогына бағыттаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a full weekly time-blocked schedule that balances school (8 AM - 3 PM), extracurriculars (3 days/week), homework (2 hrs/day), social life, exercise, and sleep (8 hours).",
            questionRu: "Создайте полное недельное расписание, балансируя школу (8-15), кружки (3 дня/неделю), уроки (2 ч/день), общение, спорт и сон (8 часов).",
            questionKk: "Мектеп (8-15), қосымша шаралар (аптасына 3 күн), үй тапсырмасы (күніне 2 сағат), қарым-қатынас, спорт және ұйқыны (8 сағат) теңестіретін толық апталық кесте жасаңыз.",
            answer: "Mon/Wed/Fri (extracurricular days): 8-3 school, 3-5 extracurricular, 5-5:30 snack/transition, 5:30-7:30 homework (two 50-min blocks), 7:30-8 dinner, 8-9 free time, 9-9:30 prep for tomorrow, 9:30-10 wind down, 10 sleep. Tue/Thu: 8-3 school, 3-3:30 exercise, 3:30-5:30 homework, 5:30-6 dinner, 6-8 social/hobby time, 8-9 light review, 9:30 sleep. Weekends: sleep in to 8, morning exercise, 2-hour study block, rest is flexible for social life and hobbies.",
            hint: "Start with fixed commitments (school, extracurriculars, sleep), then fill in the remaining blocks.",
            hintRu: "Начните с фиксированных обязательств (школа, кружки, сон), затем заполните оставшиеся блоки.",
            hintKk: "Тұрақты міндеттемелерден (мектеп, үйірмелер, ұйқы) бастаңыз, содан кейін қалған блоктарды толтырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Zettelkasten",
        titleRu: "Цеттелькастен",
        titleKk: "Цеттелькастен",
        content: "Zettelkasten is a note-taking system where each note contains one idea and is linked to related notes, creating a web of connected knowledge. Unlike linear notebooks, Zettelkasten grows organically as you add notes and discover connections between subjects. It was used by prolific scholars to produce groundbreaking work across multiple fields.",
        contentRu: "Цеттелькастен — система заметок, где каждая заметка содержит одну идею и связана с другими, создавая сеть связанных знаний. В отличие от линейных тетрадей, Цеттелькастен растёт органически по мере добавления заметок и обнаружения связей между предметами.",
        contentKk: "Цеттелькастен — әр жазба бір идеяны қамтитын және байланысты жазбаларға сілтелген жазба жүйесі, байланысты білім торын құрайды. Сызықтық дәптерлерден айырмашылығы, Цеттелькастен жазбалар қосылып, пәндер арасындағы байланыстар табылған сайын органикалық түрде өседі.",
        keyFormulas: [
          {
            formula: "One Idea per Note → Link to Related Notes → Discover Connections Over Time",
            description: "The core principles of Zettelkasten",
            descriptionRu: "Основные принципы Цеттелькастен",
            descriptionKk: "Цеттелькастеннің негізгі принциптері"
          }
        ],
        solvedExamples: [
          {
            question: "Start a Zettelkasten system for your biology and chemistry classes. Show how notes would connect across subjects.",
            questionRu: "Начните систему Цеттелькастен для биологии и химии. Покажите связи заметок между предметами.",
            questionKk: "Биология және химия сабақтары үшін Цеттелькастен жүйесін бастаңыз. Жазбалардың пәндер арасында қалай байланысатынын көрсетіңіз.",
            steps: [
              { en: "Create individual notes: Note 1 — 'Cell Respiration' (biology), Note 2 — 'Chemical Bonds' (chemistry), Note 3 — 'ATP Energy' (biology), Note 4 — 'Oxidation-Reduction Reactions' (chemistry).", ru: "Создайте отдельные заметки: 1 — «Клеточное дыхание» (биология), 2 — «Химические связи» (химия), 3 — «Энергия АТФ» (биология), 4 — «Окислительно-восстановительные реакции» (химия).", kk: "Жеке жазбалар жасаңыз: 1 — «Жасушалық тыныс алу» (биология), 2 — «Химиялық байланыстар» (химия), 3 — «АТФ энергиясы» (биология), 4 — «Тотығу-тотықсыздану реакциялары» (химия)." },
              { en: "Link them: Note 1 links to Note 3 (cell respiration produces ATP) and Note 4 (respiration involves redox reactions). Note 4 links to Note 2 (redox involves breaking and forming bonds). These cross-subject links deepen understanding.", ru: "Свяжите: Заметка 1 → Заметка 3 (дыхание производит АТФ) и Заметка 4 (дыхание включает редокс). Заметка 4 → Заметка 2 (редокс связан со связями). Межпредметные связи углубляют понимание.", kk: "Байланыстырыңыз: 1-жазба → 3-жазба (тыныс алу АТФ шығарады) және 4-жазба (тыныс алу редокс реакцияларын қамтиды). 4-жазба → 2-жазба (редокс байланыстарды бұзу мен құруды қамтиды). Пәнаралық байланыстар түсінікті тереңдетеді." }
            ],
            answer: "Each note contains one concept. Links connect ideas across biology and chemistry, revealing that cell respiration is essentially a series of chemical redox reactions that produce ATP."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the key rule of Zettelkasten note-taking?",
            questionRu: "Каково ключевое правило ведения заметок Цеттелькастен?",
            questionKk: "Цеттелькастен жазба жасаудың негізгі ережесі қандай?",
            answer: "One idea per note, written in your own words, with links to related notes. Notes should be atomic — small, self-contained, and clearly connected.",
            hint: "How many ideas should each note contain?",
            hintRu: "Сколько идей должна содержать каждая заметка?",
            hintKk: "Әр жазба қанша идеяны қамтуы керек?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How does Zettelkasten differ from traditional note-taking in a notebook? Name three advantages.",
            questionRu: "Чем Цеттелькастен отличается от обычного конспектирования? Назовите три преимущества.",
            questionKk: "Цеттелькастен дәстүрлі дәптердегі жазбадан қалай ерекшеленеді? Үш артықшылығын атаңыз.",
            answer: "1) Ideas are linked, not trapped in chronological order — you can find connections across subjects. 2) The system grows smarter over time as new notes connect to old ones. 3) When writing an essay or studying for exams, you can follow link chains to build complete arguments from your existing notes.",
            hint: "Think about finding information, cross-subject connections, and long-term growth.",
            hintRu: "Подумайте о поиске информации, межпредметных связях и долгосрочном росте.",
            hintKk: "Ақпарат табу, пәнаралық байланыстар және ұзақ мерзімді өсу туралы ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Set up a Zettelkasten system for all your current subjects. Create 5 example notes with links between them that cross at least 2 different subjects.",
            questionRu: "Настройте систему Цеттелькастен для всех текущих предметов. Создайте 5 заметок со связями между минимум 2 предметами.",
            questionKk: "Барлық ағымдағы пәндеріңіз үшін Цеттелькастен жүйесін орнатыңыз. Кемінде 2 түрлі пәнді қиып өтетін байланыстары бар 5 мысал жазба жасаңыз.",
            answer: "Example: Note A — 'Photosynthesis' (Bio), Note B — 'Carbon Cycle' (Geo), Note C — 'Chemical Equations' (Chem), Note D — 'Industrial Revolution' (History), Note E — 'Climate Change' (Geo). Links: A→C (photosynthesis is a chemical equation), A→B (photosynthesis drives the carbon cycle), B→E (carbon cycle disruption causes climate change), D→E (Industrial Revolution increased CO2 emissions), C→A (balancing equations applies to photosynthesis). The web shows how science and history connect.",
            hint: "Look for concepts in different subjects that share underlying principles or cause-effect relationships.",
            hintRu: "Ищите концепции в разных предметах с общими принципами или причинно-следственными связями.",
            hintKk: "Түрлі пәндерде ортақ принциптері немесе себеп-салдар байланыстары бар тұжырымдамаларды іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Second Brain",
        titleRu: "Второй мозг",
        titleKk: "Екінші ми",
        content: "A Second Brain is a digital system for capturing, organizing, and retrieving everything you learn. Instead of relying on memory alone, you store notes, highlights, ideas, and resources in a searchable digital system. The method follows PARA: Projects, Areas, Resources, Archives — organizing by actionability rather than topic.",
        contentRu: "Второй мозг — цифровая система для захвата, организации и извлечения всего изученного. Вместо того чтобы полагаться только на память, вы храните заметки, идеи и ресурсы в поисковой цифровой системе. Метод следует PARA: Проекты, Области, Ресурсы, Архивы — организация по действенности.",
        contentKk: "Екінші ми — үйренгеніңіздің бәрін түсіру, ұйымдастыру және алу үшін цифрлық жүйе. Тек жадыға сенудің орнына жазбаларды, идеяларды және ресурстарды іздеуге болатын цифрлық жүйеде сақтайсыз. Әдіс PARA жүйесін ұстанады: Жобалар, Салалар, Ресурстар, Мұрағаттар.",
        keyFormulas: [
          {
            formula: "Capture → Organize (PARA) → Distill → Express",
            description: "The CODE method for building a Second Brain",
            descriptionRu: "Метод CODE для построения Второго мозга",
            descriptionKk: "Екінші миды құрудың CODE әдісі"
          }
        ],
        solvedExamples: [
          {
            question: "Set up a Second Brain system using the PARA method for a high school student.",
            questionRu: "Настройте систему Второго мозга по методу PARA для старшеклассника.",
            questionKk: "Жоғары сынып оқушысы үшін PARA әдісімен Екінші ми жүйесін орнатыңыз.",
            steps: [
              { en: "Projects (active, with deadlines): Current essay, science fair project, college applications. Areas (ongoing responsibilities): Math course, English course, health/fitness, family. Resources (topics of interest): Study techniques, career exploration, interesting articles. Archives (completed): Last semester's notes, finished projects.", ru: "Проекты (активные, с дедлайнами): Текущее эссе, научный проект, поступление. Области (постоянные): Курс математики, английского, здоровье, семья. Ресурсы (интересные темы): Техники учёбы, карьера, статьи. Архивы: Заметки прошлого семестра, завершённые проекты.", kk: "Жобалар (белсенді, мерзімді): Ағымдағы эссе, ғылыми жоба, университетке түсу. Салалар (тұрақты): Математика курсы, ағылшын, денсаулық, отбасы. Ресурстар (қызықтыратын тақырыптар): Оқу техникалары, мансап, мақалалар. Мұрағаттар: Өткен семестр жазбалары." },
              { en: "Use a digital tool (Notion, Google Drive, or simple folders). When you encounter useful information, capture it immediately. File it under the project or area it supports. When a project is complete, move it to Archives.", ru: "Используйте цифровой инструмент (Notion, Google Drive). При встрече полезной информации — сразу захватите. Поместите в соответствующий проект или область. По завершении — в архив.", kk: "Цифрлық құрал қолданыңыз (Notion, Google Drive). Пайдалы ақпаратты кездестірсеңіз, бірден түсіріңіз. Оны қолдайтын жобаға немесе салаға қойыңыз. Жоба аяқталғанда мұрағатқа жылжытыңыз." }
            ],
            answer: "Organize a digital workspace into Projects, Areas, Resources, and Archives. Capture information immediately and file it by which project or area it supports."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does PARA stand for in the Second Brain system?",
            questionRu: "Что означает PARA в системе Второго мозга?",
            questionKk: "Екінші ми жүйесіндегі PARA нені білдіреді?",
            answer: "Projects (active tasks with deadlines), Areas (ongoing responsibilities), Resources (topics of interest), Archives (completed or inactive items).",
            hint: "P is for active work, A is for ongoing duties, R is for reference material, A is for finished work.",
            hintRu: "P — активная работа, A — постоянные обязанности, R — справочный материал, A — завершённое.",
            hintKk: "P — белсенді жұмыс, A — тұрақты міндеттер, R — анықтамалық материал, A — аяқталған жұмыс.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You found a great article about study techniques while researching for a biology project. Where does it go in PARA and why?",
            questionRu: "Вы нашли отличную статью о техниках учёбы во время исследования для проекта по биологии. Куда её поместить в PARA?",
            questionKk: "Биология жобасын зерттеу кезінде оқу техникалары туралы тамаша мақала таптыңыз. PARA-да ол қайда кетеді және неліктен?",
            answer: "It goes to Resources (study techniques), not the biology Project folder — because the article is broadly useful beyond this one project. However, you could add a link or reference to it in the biology project folder too. Resources are for long-term reference material you might need across multiple projects.",
            hint: "Is this article only useful for the biology project, or could it help with future projects too?",
            hintRu: "Статья полезна только для биологии или пригодится и в будущем?",
            hintKk: "Бұл мақала тек биология жобасы үшін пайдалы ма, әлде болашақ жобалар үшін де пайдалы бола ала ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete Second Brain workflow for managing all your schoolwork, extracurriculars, college prep, and personal interests. Include tools, capture methods, and weekly review process.",
            questionRu: "Разработайте полный рабочий процесс Второго мозга для школы, кружков, поступления и личных интересов. Включите инструменты, методы захвата и еженедельный обзор.",
            questionKk: "Барлық мектеп жұмысын, қосымша шараларды, университетке дайындықты және жеке қызығушылықтарды басқару үшін толық Екінші ми жұмыс процесін жасаңыз. Құралдар, түсіру әдістері және апталық шолу процесін қосыңыз.",
            answer: "Tool: Notion (free for students). Capture: Quick-capture inbox for all ideas/notes during the day. Processing: Every evening, move inbox items to the correct PARA folder. Projects: Each school assignment, college app, extracurricular event. Areas: Each subject, health, family duties. Resources: Study methods, career research, interesting topics. Archives: Completed projects/semesters. Weekly review (Sunday, 30 min): Check all active projects for progress, review upcoming deadlines, move completed items to archive, identify top 3 priorities for the week.",
            hint: "Think about how information flows: capture → organize → review → use.",
            hintRu: "Подумайте о потоке информации: захват → организация → обзор → использование.",
            hintKk: "Ақпарат ағыны туралы ойлаңыз: түсіру → ұйымдастыру → шолу → пайдалану.",
            xp: 20
          }
        ]
      },
      {
        title: "Energy Management",
        titleRu: "Управление энергией",
        titleKk: "Энергияны басқару",
        content: "Energy management recognizes that time alone is not enough — you need the right energy level for each task. Your energy follows predictable cycles throughout the day based on sleep, food, and activity. Matching high-energy periods to demanding tasks and low-energy periods to routine tasks multiplies your effectiveness.",
        contentRu: "Управление энергией признаёт, что одного времени недостаточно — нужен правильный уровень энергии для каждой задачи. Энергия следует предсказуемым циклам на основе сна, питания и активности. Совмещение высокоэнергетических периодов со сложными задачами умножает эффективность.",
        contentKk: "Энергияны басқару уақыттың жеткіліксіз екенін мойындайды — әр тапсырма үшін дұрыс энергия деңгейі қажет. Энергияңыз ұйқы, тамақ және белсенділікке негізделген болжамды циклдерді ұстанады. Жоғары энергиялы кезеңдерді күрделі тапсырмалармен сәйкестендіру тиімділікті еселейді.",
        keyFormulas: [
          {
            formula: "High Energy + Hard Tasks | Low Energy + Easy Tasks = Maximum Output",
            description: "Match task difficulty to energy levels",
            descriptionRu: "Совмещайте сложность задач с уровнем энергии",
            descriptionKk: "Тапсырма қиындығын энергия деңгейімен сәйкестендіріңіз"
          }
        ],
        solvedExamples: [
          {
            question: "A student feels most alert from 9-11 AM and has an energy dip after lunch (1-2 PM). How should they schedule their study subjects?",
            questionRu: "Ученик наиболее бодр с 9 до 11 утра и чувствует спад после обеда (13-14). Как распределить предметы?",
            questionKk: "Оқушы таңғы 9-11 арасында ең серік және түскі астан кейін (13-14) энергия құлдырауын сезінеді. Оқу пәндерін қалай жоспарлау керек?",
            steps: [
              { en: "Schedule the hardest subjects (math, physics, essay writing) during the 9-11 AM peak when cognitive ability is highest.", ru: "Запланируйте самые сложные предметы (математика, физика, эссе) на пик 9-11, когда когнитивные способности максимальны.", kk: "Ең қиын пәндерді (математика, физика, эссе жазу) когнитивтік қабілет ең жоғары болатын таңғы 9-11 шыңына жоспарлаңыз." },
              { en: "During the post-lunch dip, do light tasks: organizing notes, reviewing flashcards, or administrative work. Save creative tasks for the afternoon recovery period (3-5 PM).", ru: "Во время послеобеденного спада — лёгкие задачи: организация заметок, карточки, административная работа. Творческие задачи — на восстановление (15-17).", kk: "Түскі астан кейінгі құлдырау кезінде жеңіл тапсырмалар жасаңыз: жазбаларды ұйымдастыру, карточкаларды қайталау. Шығармашылық тапсырмаларды түстен кейінгі қалпына келтіру кезеңіне (15-17) сақтаңыз." }
            ],
            answer: "9-11 AM peak: hardest subjects. 1-2 PM dip: light review and organizing. 3-5 PM recovery: creative and moderate tasks."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is managing energy just as important as managing time?",
            questionRu: "Почему управление энергией так же важно, как управление временем?",
            questionKk: "Энергияны басқару неліктен уақытты басқару сияқты маңызды?",
            answer: "Because having an hour of free time means nothing if you are too tired to focus. A 30-minute study session at peak energy can produce more than 2 hours of studying while exhausted.",
            hint: "What happens if you have plenty of time but no energy?",
            hintRu: "Что будет, если времени достаточно, но энергии нет?",
            hintKk: "Уақыт жеткілікті, бірақ энергия болмаса не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Track your energy levels for one day (rate 1-10 each hour from wake to sleep). Identify your peak, dip, and recovery periods.",
            questionRu: "Отследите уровень энергии за один день (оценка 1-10 каждый час). Определите пик, спад и восстановление.",
            questionKk: "Бір күн энергия деңгейіңізді бақылаңыз (оянудан ұйқыға дейін сағат сайын 1-10 баллмен бағалаңыз). Шың, құлдырау және қалпына келтіру кезеңдерін анықтаңыз.",
            answer: "Example: Morning peak (8-10 AM, energy 8-9), midday steady (10 AM-12 PM, energy 7), post-lunch dip (1-2 PM, energy 4-5), afternoon recovery (3-5 PM, energy 6-7), evening decline (7-9 PM, energy 5-4). Use this map to assign tasks by difficulty.",
            hint: "Be honest about when you feel sharp and when you feel foggy during the day.",
            hintRu: "Будьте честны о том, когда чувствуете ясность, а когда — туман.",
            hintKk: "Күндіз қашан анық сезінетініңіз және қашан тұманды сезінетініңіз туралы адал болыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a comprehensive energy management plan that includes sleep, nutrition, exercise, and study scheduling. Explain how each factor affects cognitive performance.",
            questionRu: "Разработайте комплексный план управления энергией, включающий сон, питание, спорт и расписание учёбы. Объясните влияние каждого фактора на когнитивную деятельность.",
            questionKk: "Ұйқы, тамақтану, жаттығу және оқу кестесін қамтитын жан-жақты энергияны басқару жоспарын жасаңыз. Әр фактордың когнитивтік өнімділікке қалай әсер ететінін түсіндіріңіз.",
            answer: "Sleep: 8-9 hours, consistent bedtime/wake time (regulates circadian rhythm, memory consolidation happens during sleep). Nutrition: Breakfast with protein and complex carbs (steady blood sugar = steady focus), avoid sugar spikes before study sessions. Exercise: 30 minutes daily (increases BDNF which enhances learning, improves mood and focus for 2-3 hours after). Study schedule: Hardest tasks at energy peak (morning for most), creative tasks during moderate energy, review during low energy. Hydration: 2L water daily (even mild dehydration reduces cognitive performance by 25%).",
            hint: "Consider the four pillars: sleep, food, movement, and how you schedule tasks around them.",
            hintRu: "Рассмотрите четыре столпа: сон, питание, движение и планирование задач вокруг них.",
            hintKk: "Төрт тіректі қарастырыңыз: ұйқы, тамақ, қозғалыс және олардың айналасында тапсырмаларды жоспарлау.",
            xp: 20
          }
        ]
      },
      {
        title: "Batch Processing",
        titleRu: "Пакетная обработка",
        titleKk: "Топтамалық өңдеу",
        content: "Batch processing groups similar tasks together and completes them in one dedicated session, rather than switching between different types of work. Every time you switch tasks, your brain needs 15-25 minutes to fully refocus. By batching similar activities — all emails at once, all reading at once, all math problems at once — you eliminate costly context switches.",
        contentRu: "Пакетная обработка группирует похожие задачи и выполняет их в одной сессии, вместо переключения между разными типами работы. При каждом переключении мозгу нужно 15-25 минут для полной перефокусировки. Группируя похожие действия — все письма сразу, всё чтение сразу — вы устраняете переключения контекста.",
        contentKk: "Топтамалық өңдеу ұқсас тапсырмаларды біріктіріп, бір арнайы сеанста орындайды, жұмыстың түрлі түрлері арасында ауыспай. Тапсырманы ауыстырған сайын миыңызға толық қайта зейін қою үшін 15-25 минут қажет. Ұқсас әрекеттерді топтау — барлық хаттар бірден, барлық оқу бірден — контекстті ауыстыру шығынын жояды.",
        keyFormulas: [
          {
            formula: "Group Similar Tasks → Single Session → No Context Switching = Saved Time",
            description: "The batch processing efficiency principle",
            descriptionRu: "Принцип эффективности пакетной обработки",
            descriptionKk: "Топтамалық өңдеудің тиімділік принципі"
          }
        ],
        solvedExamples: [
          {
            question: "A student checks email 20 times a day and does homework in random order. Redesign their workflow using batch processing.",
            questionRu: "Ученик проверяет почту 20 раз в день и делает уроки в случайном порядке. Перестройте процесс с помощью пакетной обработки.",
            questionKk: "Оқушы күніне 20 рет электрондық поштаны тексеріп, үй тапсырмасын кездейсоқ ретпен орындайды. Топтамалық өңдеуді қолданып жұмыс процесін қайта құрыңыз.",
            steps: [
              { en: "Batch email: Check only 3 times a day — morning, after school, and evening. Reply to all messages in one 10-minute session each time.", ru: "Пакетная почта: проверять только 3 раза в день — утром, после школы и вечером. Отвечать на все сообщения за 10-минутную сессию.", kk: "Топтамалық пошта: күніне тек 3 рет тексеріңіз — таңертең, мектептен кейін және кешке. Әр жолы 10 минуттық сеанста барлық хабарларға жауап беріңіз." },
              { en: "Batch homework by type: all reading assignments together, all math problems together, all writing assignments together. This keeps your brain in the same mode and eliminates 15-25 minute refocusing penalties.", ru: "Группировка уроков по типу: всё чтение вместе, вся математика вместе, всё письмо вместе. Мозг остаётся в одном режиме без 15-25 минутных потерь.", kk: "Үй тапсырмасын түрі бойынша топтау: барлық оқу тапсырмалары бірге, барлық математика есептері бірге, барлық жазу тапсырмалары бірге. Бұл миды бір режимде ұстайды және 15-25 минуттық жоғалтуларды жояды." }
            ],
            answer: "Batch email to 3 daily sessions. Group homework by type: all reading together, all math together, all writing together. This eliminates constant context switching."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why does switching between different types of tasks reduce productivity?",
            questionRu: "Почему переключение между разными типами задач снижает продуктивность?",
            questionKk: "Тапсырмалардың түрлі түрлері арасында ауысу неліктен өнімділікті төмендетеді?",
            answer: "Your brain needs 15-25 minutes to fully refocus after switching tasks. This 'switching cost' means you lose significant time and mental energy with every change, even if you feel like you're being productive.",
            hint: "Think about what happens in your brain when you switch from math to reading to math again.",
            hintRu: "Подумайте, что происходит в мозге при переключении с математики на чтение и обратно.",
            hintKk: "Математикадан оқуға, содан кейін қайтадан математикаға ауысқанда миыңызда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have tonight: 2 chapters of history reading, 15 math problems, an English essay outline, and 3 science worksheets. Organize these into batches and explain your ordering.",
            questionRu: "На вечер: 2 главы истории, 15 задач по математике, план эссе по английскому и 3 листа по науке. Организуйте в пакеты.",
            questionKk: "Бүгін кешке: тарихтан 2 тарау оқу, 15 математика есебі, ағылшын эссесінің жоспары және 3 жаратылыстану жұмыс парағы. Оларды топтамаларға ұйымдастырып, ретін түсіндіріңіз.",
            answer: "Batch 1 (Analytical/Math): Math problems + Science worksheets (both use logical/quantitative thinking). Batch 2 (Reading): History chapters (sustained reading mode). Batch 3 (Creative/Writing): English essay outline (writing mode). Order: Start with Batch 1 (hardest, needs most energy), then Batch 2, then Batch 3. Take 10-minute breaks between batches.",
            hint: "Group by the type of thinking required, not by subject name.",
            hintRu: "Группируйте по типу мышления, а не по названию предмета.",
            hintKk: "Пән атауы бойынша емес, қажет ойлау түрі бойынша топтаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student does homework for 4 hours every night but constantly switches between subjects, checks their phone, and reorganizes their notes between tasks. Calculate the approximate time lost to context switching and redesign their evening.",
            questionRu: "Ученик делает уроки 4 часа, но постоянно переключается между предметами, проверяет телефон и реорганизует заметки. Рассчитайте потери времени и перестройте вечер.",
            questionKk: "Оқушы 4 сағат үй тапсырмасын орындайды, бірақ пәндер арасында үнемі ауысады, телефонын тексереді және жазбаларын реттейді. Контекстті ауыстыруға жоғалтылған шамамен уақытты есептеп, кешін қайта құрыңыз.",
            answer: "If the student switches tasks 8 times in 4 hours (every 30 min on average) and each switch costs 15 minutes of refocusing, that is up to 2 hours of lost productivity — half the evening! Redesign: 3 batches of 60-70 minutes each with 10-minute breaks between. Phone locked away. Batch by thinking type. Notes organized once at the end. The same work gets done in 3 hours with better quality, freeing an hour for relaxation.",
            hint: "Multiply the number of task switches by the refocusing cost (15 minutes) to see how much time is wasted.",
            hintRu: "Умножьте количество переключений на стоимость перефокусировки (15 мин), чтобы увидеть потери.",
            hintKk: "Ауыстырулар санын қайта зейін қою құнына (15 мин) көбейтіп, қанша уақыт жоғалтылғанын көріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "80/20 Rule",
        titleRu: "Правило 80/20",
        titleKk: "80/20 ережесі",
        content: "The Pareto Principle (80/20 Rule) states that roughly 80% of results come from 20% of efforts. In studying, this means a small number of concepts, problems, or techniques produce most of your grade improvement. Identifying and focusing on that critical 20% lets you study smarter, not harder.",
        contentRu: "Принцип Парето (правило 80/20) гласит, что примерно 80% результатов приходится на 20% усилий. В учёбе это означает, что небольшое количество концепций даёт большую часть улучшения оценок. Определение и фокус на этих критических 20% позволяет учиться умнее, а не усерднее.",
        contentKk: "Парето принципі (80/20 ережесі) нәтижелердің шамамен 80%-ы күш-жігердің 20%-ынан келетінін айтады. Оқуда бұл тұжырымдамалардың аз саны баға жақсартуының көп бөлігін береді дегенді білдіреді. Сол маңызды 20%-ға назар аудару көбірек емес, ақылды оқуға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "20% of Topics → 80% of Exam Questions | Find the Vital Few → Focus There",
            description: "Apply the Pareto Principle to studying",
            descriptionRu: "Применение принципа Парето к учёбе",
            descriptionKk: "Парето принципін оқуға қолдану"
          }
        ],
        solvedExamples: [
          {
            question: "You have a chemistry exam covering 10 chapters. Past exams show that 3 chapters consistently make up 75% of the questions. How should you allocate study time?",
            questionRu: "Экзамен по химии по 10 главам. Прошлые экзамены показывают, что 3 главы составляют 75% вопросов. Как распределить время?",
            questionKk: "10 тарауды қамтитын химия емтиханы бар. Өткен емтихандар 3 тараудың сұрақтардың 75%-ын құрайтынын көрсетеді. Оқу уақытын қалай бөлу керек?",
            steps: [
              { en: "Allocate 60% of study time to the 3 high-yield chapters. Use active recall and practice problems focused on these topics.", ru: "Выделите 60% времени на 3 высокоценных главы. Используйте активное воспроизведение и задачи по этим темам.", kk: "Оқу уақытының 60%-ын 3 жоғары нәтижелі тарауға бөліңіз. Осы тақырыптарға бағытталған белсенді еске түсіру мен есептер қолданыңыз." },
              { en: "Spend the remaining 40% on a basic review of the other 7 chapters, focusing on key concepts and formulas. This ensures you score well on the majority of questions while still being prepared for the rest.", ru: "Оставшиеся 40% — на обзор остальных 7 глав, фокус на ключевых концепциях. Это обеспечивает хорошие баллы за большинство вопросов.", kk: "Қалған 40%-ды басқа 7 тарауды негізгі тұжырымдамалар мен формулаларға бағыттап шолуға жұмсаңыз. Бұл сұрақтардың көпшілігі бойынша жақсы ұпай алуды қамтамасыз етеді." }
            ],
            answer: "Spend 60% of study time on the 3 chapters that account for 75% of questions. Use remaining 40% for a general review of other chapters."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Explain the 80/20 Rule in your own words with a study-related example.",
            questionRu: "Объясните правило 80/20 своими словами с примером из учёбы.",
            questionKk: "80/20 ережесін оқуға қатысты мысалмен өз сөзіңізбен түсіндіріңіз.",
            answer: "A small portion of your efforts produces most of your results. Example: In math, mastering 5 key problem types might prepare you for 80% of test questions, while the other 20 problem types only cover 20% of the test.",
            hint: "Think about which topics appear most frequently on exams.",
            hintRu: "Подумайте, какие темы чаще всего встречаются на экзаменах.",
            hintKk: "Емтихандарда қай тақырыптар жиі кездесетінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Identify the 20% of study activities that produce 80% of your learning results. Compare these with the activities you currently spend the most time on.",
            questionRu: "Определите 20% учебных активностей, дающих 80% результатов. Сравните с тем, на что тратите больше всего времени.",
            questionKk: "Оқу нәтижелеріңіздің 80%-ын беретін оқу әрекеттерінің 20%-ын анықтаңыз. Оларды қазір ең көп уақыт жұмсайтын әрекеттермен салыстырыңыз.",
            answer: "High-yield 20%: Active recall testing, solving practice problems, and teaching concepts to others. These force deep engagement. Most students instead spend 80% of time on low-yield activities: re-reading notes, highlighting, and recopying. The fix: flip the ratio — spend most time on active methods.",
            hint: "Which activities force you to think hard vs. which feel productive but are passive?",
            hintRu: "Какие активности заставляют думать vs. какие кажутся продуктивными, но пассивны?",
            hintKk: "Қай әрекеттер қатты ойлануға мәжбүр етеді vs. қайсысы өнімді сезілсе де енжар?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Apply the 80/20 Rule to redesign your entire study approach for one subject. Analyze past exams to find the vital 20%, create a focused study plan, and explain what you would eliminate.",
            questionRu: "Примените правило 80/20 для перестройки подхода к одному предмету. Проанализируйте прошлые экзамены, найдите ключевые 20% и объясните, что исключите.",
            questionKk: "Бір пән бойынша бүкіл оқу тәсілін қайта құру үшін 80/20 ережесін қолданыңыз. Маңызды 20%-ды табу үшін өткен емтихандарды талдаңыз, бағытталған оқу жоспарын жасаңыз және нені жоятыныңызды түсіндіріңіз.",
            answer: "Example for History: Analyze 3 past exams — find that essay questions focus on causes/effects (not dates), and 4 themes (revolution, economics, social change, foreign policy) appear repeatedly. Plan: Focus 70% of study time on understanding causes/effects of events within those 4 themes using active recall. Reduce time spent memorizing obscure dates (low-yield). Eliminate: recopying textbook passages, color-coding notes excessively, reading supplementary chapters that never appear on tests.",
            hint: "Look at past exams first. What topics and question types appear repeatedly?",
            hintRu: "Сначала изучите прошлые экзамены. Какие темы и типы вопросов повторяются?",
            hintKk: "Алдымен өткен емтихандарды қараңыз. Қандай тақырыптар мен сұрақ түрлері қайталанады?",
            xp: 20
          }
        ]
      },
      {
        title: "Accountability",
        titleRu: "Подотчётность",
        titleKk: "Есеп беру",
        content: "Accountability means making your commitments visible to others, which dramatically increases follow-through. Studies show that telling someone your goal raises your success rate from 33% to 72%. An accountability partner, study group, or public commitment creates positive social pressure that keeps you on track when motivation fades.",
        contentRu: "Подотчётность означает сделать свои обязательства видимыми для других, что резко увеличивает выполнение. Исследования показывают, что озвучивание цели повышает вероятность успеха с 33% до 72%. Партнёр по подотчётности или группа создают позитивное социальное давление.",
        contentKk: "Есеп беру міндеттемелеріңізді басқаларға көрінетін ету дегенді білдіреді, бұл орындауды күрт арттырады. Зерттеулер мақсатыңызды біреуге айту табыс мөлшерлемесін 33%-дан 72%-ға дейін арттыратынын көрсетеді. Есеп беру серіктесі немесе оқу тобы мотивация сөнгенде сізді жолда ұстайтын оң әлеуметтік қысым жасайды.",
        keyFormulas: [
          {
            formula: "Public Commitment + Regular Check-ins + Consequences = High Follow-through",
            description: "The three elements of effective accountability",
            descriptionRu: "Три элемента эффективной подотчётности",
            descriptionKk: "Тиімді есеп берудің үш элементі"
          }
        ],
        solvedExamples: [
          {
            question: "Set up an accountability system for a student who procrastinates on college application essays.",
            questionRu: "Настройте систему подотчётности для ученика, откладывающего эссе для поступления.",
            questionKk: "Университетке түсу эссесін кейінге қалдыратын оқушы үшін есеп беру жүйесін орнатыңыз.",
            steps: [
              { en: "Find an accountability partner — a friend also applying to college or a mentor. Share specific weekly goals: 'By Sunday, I will have a complete draft of Essay #1.'", ru: "Найдите партнёра — друга, тоже поступающего, или наставника. Делитесь конкретными целями: «К воскресенью у меня будет черновик эссе №1.»", kk: "Есеп беру серіктесін табыңыз — университетке де түсетін дос немесе тәлімгер. Нақты апталық мақсаттармен бөлісіңіз: «Жексенбіге дейін №1 эссенің толық жобасы дайын болады.»" },
              { en: "Schedule weekly check-ins every Sunday evening where both partners share progress. Add a consequence: if the goal is missed, donate to a cause you dislike or give up a privilege for the week.", ru: "Планируйте еженедельные проверки каждое воскресенье, где оба партнёра делятся прогрессом. Добавьте последствие: при невыполнении — пожертвование или лишение привилегии на неделю.", kk: "Әр жексенбі кешінде апталық тексеруді жоспарлаңыз, екі серіктес те ілгерілеуді бөліседі. Салдар қосыңыз: мақсат орындалмаса, ұнатпайтын ұйымға қайырымдылық жасау немесе аптаға артықшылықтан бас тарту." }
            ],
            answer: "Get an accountability partner, share specific weekly goals, check in every Sunday, and set real consequences for missed targets."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why does telling someone about your goal make you more likely to achieve it?",
            questionRu: "Почему озвучивание цели делает её достижение вероятнее?",
            questionKk: "Мақсатыңызды біреуге айту неліктен оған жетуді ықтималырақ етеді?",
            answer: "It creates social pressure — you don't want to let the other person down or appear unreliable. It also makes the goal feel more real and concrete, and you have someone to celebrate with when you succeed.",
            hint: "How do you feel when you promise someone something and then don't follow through?",
            hintRu: "Что вы чувствуете, когда обещаете что-то и не выполняете?",
            hintKk: "Біреуге бір нәрсе уәде беріп, орындамағанда не сезінесіз?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design an accountability system for a study group of 4 students preparing for final exams.",
            questionRu: "Создайте систему подотчётности для группы из 4 учеников, готовящихся к финальным экзаменам.",
            questionKk: "Қорытынды емтиханға дайындалатын 4 оқушыдан тұратын оқу тобы үшін есеп беру жүйесін жасаңыз.",
            answer: "Each member sets 3 specific weekly goals and posts them in a group chat Monday morning. Daily 2-minute text check-in: what did you accomplish today? Wednesday mid-week review call (15 min). Sunday accountability meeting (30 min): share progress, identify blockers, set next week's goals. Members who miss goals must teach the group one concept they struggled with (positive consequence).",
            hint: "Combine public commitment, regular check-ins, and a positive consequence for missed goals.",
            hintRu: "Объедините публичные обязательства, регулярные проверки и позитивное последствие.",
            hintKk: "Қоғамдық міндеттемені, тұрақты тексерулерді және орындалмаған мақсаттар үшін оң салдарды біріктіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student has no friends interested in studying together and feels they have no one to be accountable to. Design three alternative accountability strategies they can use independently.",
            questionRu: "У ученика нет друзей, заинтересованных в совместной учёбе. Разработайте три альтернативные стратегии подотчётности.",
            questionKk: "Оқушының бірге оқуға мүдделі достары жоқ. Өз бетімен қолдана алатын үш балама есеп беру стратегиясын жасаңыз.",
            answer: "1) Public commitment via social media or blog — post weekly goals and progress updates. The audience creates accountability even without a direct partner. 2) Self-accountability journal: Every evening, rate today's goal completion (1-10) and write why. Track streaks — the visible record creates self-accountability. 3) Use an accountability app or online study community (like StudyStream or Discord study servers) where strangers hold each other accountable through co-working sessions. The key: any external visibility of your commitments increases follow-through.",
            hint: "Accountability doesn't require a close friend — it requires making your commitments visible to anyone.",
            hintRu: "Подотчётность не требует близкого друга — она требует видимости обязательств для кого-то.",
            hintKk: "Есеп беру жақын досты қажет етпейді — ол міндеттемелеріңіздің кез келген адамға көрінуін қажет етеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Semester Planning",
        titleRu: "Планирование семестра",
        titleKk: "Семестрді жоспарлау",
        content: "Semester planning takes a bird's-eye view of your entire term, mapping all major deadlines, exams, projects, and personal commitments on one timeline. This prevents surprises and allows you to distribute workload evenly. Students who plan their semester in the first week consistently outperform those who react to deadlines as they come.",
        contentRu: "Планирование семестра даёт обзор всего семестра, отображая все дедлайны, экзамены, проекты и личные обязательства на одной шкале. Это предотвращает сюрпризы и позволяет равномерно распределить нагрузку. Студенты, планирующие семестр в первую неделю, стабильно превосходят реагирующих на дедлайны.",
        contentKk: "Семестрді жоспарлау бүкіл семестрге құс көзімен қарау, барлық негізгі мерзімдерді, емтихандарды, жобаларды және жеке міндеттемелерді бір уақыт шкаласында бейнелеу. Бұл тосын жағдайларды болдырмайды және жұмыс жүктемесін біркелкі бөлуге мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "All Syllabi → One Master Calendar → Weekly Breakdown → Daily Actions",
            description: "The top-down approach to semester planning",
            descriptionRu: "Нисходящий подход к планированию семестра",
            descriptionKk: "Семестрді жоспарлаудың жоғарыдан төменге тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "It is the first week of the semester. You have 6 courses, each with a syllabus listing major deadlines. Create a semester planning process.",
            questionRu: "Первая неделя семестра. У вас 6 предметов с программами. Создайте процесс планирования семестра.",
            questionKk: "Семестрдің бірінші аптасы. Негізгі мерзімдері бар силлабустары бар 6 пәніңіз бар. Семестрді жоспарлау процесін жасаңыз.",
            steps: [
              { en: "Step 1: Collect all 6 syllabi. Transfer every exam date, essay deadline, project due date, and presentation date to a master calendar (digital or wall-sized paper). Color-code by subject.", ru: "Шаг 1: Соберите все 6 программ. Перенесите все даты экзаменов, эссе, проектов на мастер-календарь. Цветовое кодирование по предметам.", kk: "1-қадам: Барлық 6 силлабусты жинаңыз. Барлық емтихан, эссе, жоба мерзімдерін негізгі күнтізбеге ауыстырыңыз. Пәндер бойынша түспен кодтаңыз." },
              { en: "Step 2: Identify 'crunch weeks' where multiple deadlines overlap. For those weeks, start work 2 weeks earlier than you normally would. Break the semester into 4-week blocks and set sub-goals for each block. Review and adjust the plan every Sunday.", ru: "Шаг 2: Определите 'напряжённые недели' с наложением дедлайнов. Для них начинайте работу на 2 недели раньше. Разбейте семестр на 4-недельные блоки с подцелями. Обзор каждое воскресенье.", kk: "2-қадам: Бірнеше мерзім қабаттасатын 'қысым апталарын' анықтаңыз. Ол апталар үшін жұмысты әдеттегіден 2 апта бұрын бастаңыз. Семестрді 4 апталық блоктарға бөліп, әрқайсысына ішкі мақсаттар қойыңыз. Әр жексенбіде шолу жасаңыз." }
            ],
            answer: "Transfer all deadlines to a master calendar, identify crunch weeks, start early for overlapping deadlines, break into 4-week blocks, review weekly."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the first step in semester planning?",
            questionRu: "Каков первый шаг планирования семестра?",
            questionKk: "Семестрді жоспарлаудың бірінші қадамы қандай?",
            answer: "Collect all course syllabi and transfer every major deadline, exam, and project due date to a single master calendar so you can see the whole semester at once.",
            hint: "You need one place to see everything — what information do you gather first?",
            hintRu: "Вам нужно одно место для всего — какую информацию собираете первой?",
            hintKk: "Барлығын көру үшін бір орын қажет — алдымен қандай ақпарат жинайсыз?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Looking at your master calendar, you see that Week 10 has 3 exams and 2 project deadlines. How do you prepare for this crunch week?",
            questionRu: "На мастер-календаре видно, что на неделе 10 — 3 экзамена и 2 дедлайна проектов. Как подготовиться?",
            questionKk: "Негізгі күнтізбеде 10-аптада 3 емтихан мен 2 жоба мерзімі бар екенін көресіз. Бұл қысым аптасына қалай дайындаласыз?",
            answer: "Start preparing in Week 7-8: begin project drafts and exam study 2-3 weeks early. By Week 9, projects should be 80% complete and exam review should be in the active recall phase. Week 10: final revisions and light exam review only. The crunch week should be for finishing, not starting.",
            hint: "The key is starting early enough that Week 10 is for polishing, not panicking.",
            hintRu: "Ключ — начать достаточно рано, чтобы неделя 10 была для финала, а не паники.",
            hintKk: "Кілті — 10-апта үрейленуге емес, аяқтауға арналатындай ерте бастау.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a complete semester plan for a student taking 6 courses who also has extracurricular activities (3 hrs/week), a part-time job (8 hrs/week), and is applying to universities.",
            questionRu: "Создайте полный семестровый план для ученика с 6 предметами, кружками (3 ч/нед), подработкой (8 ч/нед) и подготовкой к поступлению.",
            questionKk: "6 пән, қосымша шаралар (аптасына 3 сағат), жартылай жұмыс (аптасына 8 сағат) және университетке түсу дайындығы бар оқушы үшін толық семестрлік жоспар жасаңыз.",
            answer: "Master calendar: all course deadlines + university app deadlines + work schedule. Weekly template: 30 hrs school, 8 hrs work, 3 hrs extracurricular, 14 hrs study (2 hrs/day), 56 hrs sleep, 8 hrs meals, leaves ~49 hrs for commute, social, personal time. Monthly blocks: Months 1-2 — focus on coursework foundation + start university essays. Month 3 — midterms prep + finalize university applications. Month 4 — semester projects + finals prep. Sunday weekly review (30 min): check all deadlines for next 2 weeks, adjust daily schedule. Key: university apps are treated as a 7th course with their own weekly time block.",
            hint: "Treat university applications as an additional course. Map out all time commitments to find available hours.",
            hintRu: "Рассматривайте поступление как дополнительный предмет. Подсчитайте все обязательства.",
            hintKk: "Университетке түсу дайындығын қосымша пән ретінде қарастырыңыз. Барлық уақыт міндеттемелерін картаға түсіріңіз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Productivity & Learning Systems_12": {
    planetName: "Productivity & Learning Systems",
    introduction: {
      en: "Welcome to Productivity & Learning Systems for Grade 12! Master professional-grade systems for knowledge management, life design, automation, and lifelong learning that will serve you through university and your entire career.",
      ru: "Добро пожаловать в Продуктивность и системы обучения для 12 класса! Освойте профессиональные системы управления знаниями, проектирования жизни, автоматизации и непрерывного обучения, которые будут служить вам в университете и на протяжении всей карьеры."
    },
    sections: [
      {
        title: "Personal Knowledge Management",
        titleRu: "Управление личными знаниями",
        titleKk: "Жеке білімді басқару",
        content: "Personal Knowledge Management (PKM) is a lifelong system for acquiring, organizing, and applying knowledge across all areas of your life. Unlike studying for a single exam, PKM builds a compounding knowledge asset where everything you learn connects to and strengthens everything else. The best PKM systems make past learning instantly accessible for future projects.",
        contentRu: "Управление личными знаниями (PKM) — пожизненная система приобретения, организации и применения знаний во всех сферах жизни. В отличие от подготовки к одному экзамену, PKM создаёт накапливающийся актив знаний, где всё изученное связано и усиливает друг друга.",
        contentKk: "Жеке білімді басқару (PKM) — өміріңіздің барлық салаларында білім алу, ұйымдастыру және қолдану үшін өмір бойғы жүйе. Бір емтиханға дайындалудан айырмашылығы, PKM үйренгеніңіздің бәрі бір-бірімен байланысып, нығайтатын жинақталатын білім активін құрады.",
        keyFormulas: [
          {
            formula: "Capture → Process → Connect → Create → Share",
            description: "The five stages of personal knowledge management",
            descriptionRu: "Пять этапов управления личными знаниями",
            descriptionKk: "Жеке білімді басқарудың бес кезеңі"
          },
          {
            formula: "Knowledge Compounding: Each New Idea × Existing Connections = Exponential Growth",
            description: "Why PKM becomes more powerful over time",
            descriptionRu: "Почему PKM становится мощнее со временем",
            descriptionKk: "PKM неліктен уақыт өте келе күштірек болады"
          }
        ],
        solvedExamples: [
          {
            question: "Set up a PKM system that will transition with you from high school to university.",
            questionRu: "Настройте систему PKM, которая перейдёт с вами из школы в университет.",
            questionKk: "Мектептен университетке сізбен бірге ауысатын PKM жүйесін орнатыңыз.",
            steps: [
              { en: "Choose a platform-agnostic approach: use a digital tool (Notion, Obsidian) with a consistent structure. Create zones: Inbox (raw captures), Notes (processed ideas), Projects (active work), Archive (completed). Every note gets tagged by topic and linked to related notes.", ru: "Выберите платформо-независимый подход: цифровой инструмент (Notion, Obsidian) с единой структурой. Зоны: Входящие (сырые записи), Заметки (обработанные идеи), Проекты (активная работа), Архив. Каждая заметка с тегами и связями.", kk: "Платформаға тәуелсіз тәсіл таңдаңыз: тұрақты құрылымы бар цифрлық құрал (Notion, Obsidian). Аймақтар жасаңыз: Кіріс (өңделмеген жазбалар), Жазбалар (өңделген идеялар), Жобалар (белсенді жұмыс), Мұрағат. Әр жазба тақырып бойынша тегтеледі және байланысты жазбаларға сілтеледі." },
              { en: "Build the habit: capture at least 3 ideas daily, process inbox weekly, and do a monthly review to find connections between subjects. When you start university, your existing knowledge base gives you a massive head start.", ru: "Выработайте привычку: захватывайте минимум 3 идеи в день, обрабатывайте входящие еженедельно, ежемесячный обзор для связей. В университете ваша база знаний даст огромное преимущество.", kk: "Дағдыны қалыптастырыңыз: күніне кемінде 3 идея түсіріңіз, аптасына кірісті өңдеңіз, пәндер арасындағы байланыстарды табу үшін айлық шолу жасаңыз. Университетте бар білім базаңыз үлкен артықшылық береді." }
            ],
            answer: "Use a digital tool with Inbox/Notes/Projects/Archive zones. Capture daily, process weekly, review monthly for connections. The system grows with you into university."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What makes Personal Knowledge Management different from regular note-taking?",
            questionRu: "Чем управление личными знаниями отличается от обычного конспектирования?",
            questionKk: "Жеке білімді басқару кәдімгі жазба жасаудан немен ерекшеленеді?",
            answer: "Regular note-taking is one-directional (capture and forget), while PKM is a living system where notes are connected, reviewed, and actively used to create new knowledge. PKM grows more valuable over time.",
            hint: "What happens to your regular notes after the exam vs. what happens in a PKM system?",
            hintRu: "Что происходит с обычными конспектами после экзамена vs. что происходит в системе PKM?",
            hintKk: "Кәдімгі жазбаларыңыз емтиханнан кейін не болады vs. PKM жүйесінде не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You read an interesting article about artificial intelligence that connects to your computer science class, your philosophy class (ethics), and your future career interests. How do you process this in a PKM system?",
            questionRu: "Вы прочитали статью об ИИ, связанную с информатикой, философией (этика) и карьерными интересами. Как обработать это в PKM?",
            questionKk: "Жасанды интеллект туралы компьютер ғылымы сабағына, философия сабағына (этика) және болашақ мансап қызығушылықтарына байланысты қызықты мақала оқыдыңыз. Мұны PKM жүйесінде қалай өңдейсіз?",
            answer: "Capture the key ideas in your own words (not copy-paste). Create separate notes for distinct concepts (e.g., 'AI Ethics Dilemmas', 'Machine Learning Basics', 'AI Career Paths'). Link each note to relevant existing notes in your CS, philosophy, and career folders. Tag with #AI #ethics #career. This single article now enriches three areas of your knowledge base.",
            hint: "Break the article into separate atomic ideas and link each to existing notes in different subjects.",
            hintRu: "Разбейте статью на отдельные идеи и свяжите каждую с заметками по разным предметам.",
            hintKk: "Мақаланы жеке атомдық идеяларға бөліп, әрқайсысын түрлі пәндердегі бар жазбаларға сілтеңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a PKM workflow that handles inputs from classes, books, podcasts, conversations, and personal insights. Include capture, processing, connection, and retrieval methods.",
            questionRu: "Создайте процесс PKM для входных данных из уроков, книг, подкастов, бесед и личных инсайтов. Включите захват, обработку, связывание и извлечение.",
            questionKk: "Сабақтардан, кітаптардан, подкасттардан, әңгімелерден және жеке түсініктерден кіріс деректерді өңдейтін PKM жұмыс процесін жасаңыз. Түсіру, өңдеу, байланыстыру және алу әдістерін қосыңыз.",
            answer: "Capture: Classes — quick notes in phone during/after class. Books — highlights + margin notes, transfer weekly. Podcasts — voice memos of key insights. Conversations — jot key points immediately after. Personal insights — dedicated 'ideas' note always accessible. Processing (daily 10 min): Move all captures to inbox, rewrite in own words, identify the core idea. Connection (weekly 30 min): Link new notes to existing ones, look for cross-subject patterns, update project notes. Retrieval: When starting any project, search the PKM system first — past insights become building blocks for new work. Monthly review: What themes are emerging? What gaps exist?",
            hint: "Different inputs need different capture methods, but all flow through the same processing pipeline.",
            hintRu: "Разные источники требуют разных методов захвата, но все проходят через один процесс обработки.",
            hintKk: "Түрлі кірістер түрлі түсіру әдістерін қажет етеді, бірақ барлығы бір өңдеу құбыры арқылы өтеді.",
            xp: 20
          }
        ]
      },
      {
        title: "GTD System",
        titleRu: "Система GTD",
        titleKk: "GTD жүйесі",
        content: "Getting Things Done (GTD) is David Allen's system for managing tasks and commitments by capturing everything in a trusted external system, then processing each item into actionable next steps. The power of GTD is that it frees your brain from remembering tasks, allowing you to focus entirely on execution. Your mind becomes clear when nothing is left untracked.",
        contentRu: "Getting Things Done (GTD) — система Дэвида Аллена для управления задачами путём захвата всего во внешнюю доверенную систему, затем обработки каждого элемента в конкретные действия. Сила GTD в освобождении мозга от запоминания задач для полного фокуса на выполнении.",
        contentKk: "Getting Things Done (GTD) — барлығын сенімді сыртқы жүйеге түсіру, содан кейін әр элементті іс-әрекетке жарамды келесі қадамдарға өңдеу арқылы тапсырмалар мен міндеттемелерді басқаруға арналған Дэвид Алленнің жүйесі. GTD күші миыңызды тапсырмаларды есте сақтаудан босатып, орындауға толық зейін қоюға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Capture → Clarify → Organize → Reflect → Engage",
            description: "The five steps of the GTD workflow",
            descriptionRu: "Пять шагов процесса GTD",
            descriptionKk: "GTD жұмыс процесінің бес қадамы"
          }
        ],
        solvedExamples: [
          {
            question: "Apply the GTD workflow to process a student's overflowing inbox of tasks: buy textbook, study for quiz, call grandma, fix bike, research scholarships, return library book.",
            questionRu: "Примените GTD для обработки переполненного списка: купить учебник, подготовиться к тесту, позвонить бабушке, починить велосипед, найти стипендии, вернуть книгу.",
            questionKk: "GTD жұмыс процесін оқушының толып кеткен тапсырмалар кірісін өңдеу үшін қолданыңыз: оқулық сатып алу, тестке дайындалу, әжеге қоңырау шалу, велосипедті жөндеу, стипендияларды зерттеу, кітапханаға кітапты қайтару.",
            steps: [
              { en: "Clarify each item by asking 'What is the next action?': Buy textbook → order online now (2 min). Study for quiz → review chapter 5 notes (30 min, schedule for tonight). Call grandma → call at 7 PM (2 min, calendar). Fix bike → take to repair shop Saturday (calendar). Research scholarships → bookmark 3 scholarship sites (project, break into steps). Return library book → put in backpack now (2 min, do immediately).", ru: "Уточните каждый пункт: Купить учебник → заказать онлайн (2 мин). Тест → повторить главу 5 (30 мин, на вечер). Бабушка → позвонить в 19:00 (календарь). Велосипед → отвезти в ремонт в субботу. Стипендии → найти 3 сайта (проект). Книга → положить в рюкзак сейчас (2 мин).", kk: "Әр элементті нақтылаңыз: Оқулық сатып алу → қазір онлайн тапсырыс беру (2 мин). Тестке дайындалу → 5-тарау жазбаларын қайталау (30 мин, бүгін кешке). Әжеге қоңырау → сағат 19:00-де (күнтізбе). Велосипедті жөндеу → сенбіде жөндеу шеберханасына апару. Стипендиялар → 3 сайтты бетбелгілеу (жоба). Кітапты қайтару → қазір рюкзакка салу (2 мин)." },
              { en: "Apply the 2-minute rule: anything taking less than 2 minutes, do immediately (order textbook, put book in bag). Schedule the rest in your calendar or project list. The inbox is now empty and your mind is clear.", ru: "Правило 2 минут: всё, что занимает меньше 2 минут, делайте сразу (заказ учебника, книга в рюкзак). Остальное — в календарь или список проектов. Входящие пусты, голова свободна.", kk: "2 минут ережесін қолданыңыз: 2 минуттан аз уақыт алатын нәрсені бірден орындаңыз (оқулықты тапсырыс беру, кітапты сөмкеге салу). Қалғанын күнтізбе немесе жоба тізіміне жоспарлаңыз. Кіріс қазір бос және ойыңыз таза." }
            ],
            answer: "Do 2-minute tasks immediately (order book, pack library book). Schedule the rest with specific next actions. Break 'research scholarships' into a project with steps. Inbox is now empty."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the '2-minute rule' in GTD and why is it powerful?",
            questionRu: "Что такое «правило 2 минут» в GTD и почему оно эффективно?",
            questionKk: "GTD-дегі «2 минут ережесі» деген не және ол неліктен тиімді?",
            answer: "If a task takes less than 2 minutes, do it immediately instead of adding it to your list. It is powerful because small tasks pile up and create mental clutter. Handling them instantly keeps your system clean and your mind free.",
            hint: "What happens when many tiny tasks accumulate on your to-do list?",
            hintRu: "Что происходит, когда много мелких задач накапливается в списке?",
            hintKk: "Тапсырмалар тізімінде көптеген ұсақ тапсырмалар жиналғанда не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Explain the difference between a 'project' and a 'next action' in GTD. Give an example of each for a university application.",
            questionRu: "Объясните разницу между «проектом» и «следующим действием» в GTD. Приведите пример для поступления.",
            questionKk: "GTD-дегі «жоба» мен «келесі әрекет» арасындағы айырмашылықты түсіндіріңіз. Университетке түсу үшін әрқайсысына мысал келтіріңіз.",
            answer: "A project is any outcome requiring more than one step (e.g., 'Complete university application for MIT'). A next action is the single, concrete, physical step you can do right now (e.g., 'Open MIT application portal and fill in personal information section'). GTD requires that every project always has a clear next action — otherwise it stalls.",
            hint: "A project has multiple steps. A next action is just one specific, doable step.",
            hintRu: "Проект имеет несколько шагов. Следующее действие — один конкретный выполнимый шаг.",
            hintKk: "Жобаның бірнеше қадамы бар. Келесі әрекет — бір нақты, орындалатын қадам.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement a complete GTD system for managing your final semester of high school, including academics, university applications, social commitments, and personal projects. Describe the tools, workflow, and weekly review process.",
            questionRu: "Внедрите полную систему GTD для последнего семестра: учёба, поступление, социальные обязательства и личные проекты. Опишите инструменты, процесс и еженедельный обзор.",
            questionKk: "Мектептің соңғы семестрін басқару үшін толық GTD жүйесін енгізіңіз: оқу, университетке түсу, әлеуметтік міндеттемелер және жеке жобалар. Құралдарды, жұмыс процесін және апталық шолу процесін сипаттаңыз.",
            answer: "Tools: Todoist (tasks) + Google Calendar (time-specific) + Notion (reference/projects). Workflow: Every thought/task goes to Todoist inbox immediately. Daily processing (10 min): clarify each item, apply 2-min rule, sort into projects or calendar. Projects list: each course, each university app, each personal goal — all with clear next actions. Contexts: @school, @home, @computer, @phone (do tasks based on where you are). Weekly review (Sunday, 45 min): Clear inbox to zero, review all projects for stalled items, check calendar for upcoming deadlines, identify top 3 priorities for the week, celebrate wins from last week.",
            hint: "Think about capture tools, processing rules, project lists, contexts, and the weekly review ritual.",
            hintRu: "Подумайте об инструментах захвата, правилах обработки, списках проектов, контекстах и еженедельном обзоре.",
            hintKk: "Түсіру құралдары, өңдеу ережелері, жоба тізімдері, контексттер және апталық шолу рәсімі туралы ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Annual Planning",
        titleRu: "Годовое планирование",
        titleKk: "Жылдық жоспарлау",
        content: "Annual planning zooms out to a 12-month view of your life, setting major goals across academics, personal growth, relationships, health, and career preparation. Breaking the year into quarters with specific milestones keeps you on track without feeling overwhelmed. The most successful people review and adjust their annual plan quarterly.",
        contentRu: "Годовое планирование даёт 12-месячный обзор жизни, устанавливая крупные цели в учёбе, личном росте, отношениях, здоровье и карьере. Разделение года на кварталы с конкретными вехами помогает двигаться без перегрузки. Успешные люди пересматривают план ежеквартально.",
        contentKk: "Жылдық жоспарлау өміріңізге 12 айлық көзқарас береді, академиялық, жеке өсу, қарым-қатынас, денсаулық және мансапқа дайындық бойынша негізгі мақсаттар қояды. Жылды нақты кезеңдері бар тоқсандарға бөлу шамадан тыс жүктемесіз жолда қалуды қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "Annual Vision → Quarterly Goals → Monthly Milestones → Weekly Actions",
            description: "The cascade from yearly vision to daily execution",
            descriptionRu: "Каскад от годового видения к ежедневному выполнению",
            descriptionKk: "Жылдық көзқарастан күнделікті орындауға дейінгі каскад"
          }
        ],
        solvedExamples: [
          {
            question: "Create an annual plan for your Grade 12 year, balancing academics, university prep, and personal goals.",
            questionRu: "Создайте годовой план для 12 класса, балансируя учёбу, подготовку к поступлению и личные цели.",
            questionKk: "Оқуды, университетке дайындықты және жеке мақсаттарды теңестіріп, 12-сынып жылына жылдық жоспар жасаңыз.",
            steps: [
              { en: "Set annual vision: Graduate with strong grades, get accepted to top 3 university choices, develop one meaningful skill. Break into quarters: Q1 (Sep-Nov) — maintain GPA above 3.8, complete all university applications, start a personal project. Q2 (Dec-Feb) — finals prep, scholarship applications, deepen personal project.", ru: "Годовое видение: закончить с хорошими оценками, поступить в топ-3 вуза, развить навык. Кварталы: Q1 (сен-ноя) — GPA 3.8+, все заявки, начать проект. Q2 (дек-фев) — экзамены, стипендии, развитие проекта.", kk: "Жылдық көзқарас: жақсы бағалармен бітіру, үздік 3 университетке қабылдану, бір маңызды дағдыны дамыту. Тоқсандарға бөлу: Q1 (қыр-қар) — GPA 3.8+, барлық өтініштер, жеке жоба бастау. Q2 (жел-ақп) — емтихандар, стипендиялар, жобаны тереңдету." },
              { en: "Q3 (Mar-May) — maintain grades, receive decisions, prepare for graduation. Q4 (Jun-Aug) — graduate, prepare for university transition, summer reading and skill-building. Each quarter has 2-3 measurable milestones. Monthly check-in adjusts the plan as needed.", ru: "Q3 (мар-май) — поддерживать оценки, получить решения, подготовка к выпуску. Q4 (июн-авг) — выпуск, подготовка к университету, летнее чтение. Каждый квартал — 2-3 измеримые вехи. Ежемесячный обзор корректирует план.", kk: "Q3 (нау-мам) — бағаларды сақтау, шешімдер алу, бітіруге дайындық. Q4 (мау-там) — бітіру, университетке ауысуға дайындық, жазғы оқу. Әр тоқсанда 2-3 өлшенетін кезең. Айлық тексеру жоспарды қажетінше реттейді." }
            ],
            answer: "Annual vision cascades into quarterly goals, monthly milestones, and weekly actions. Each quarter focuses on 2-3 key areas with measurable targets."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is it better to plan in quarters rather than trying to achieve everything at once?",
            questionRu: "Почему лучше планировать по кварталам, а не пытаться достичь всего сразу?",
            questionKk: "Неліктен бәрін бірден жасауға тырысудан гөрі тоқсандар бойынша жоспарлау жақсы?",
            answer: "Quarterly planning breaks overwhelming annual goals into manageable 3-month sprints. It allows you to focus on a few priorities at a time, measure progress regularly, and adjust course without losing the whole year.",
            hint: "What happens when you try to focus on 10 goals simultaneously for 12 months?",
            hintRu: "Что будет, если пытаться фокусироваться на 10 целях одновременно 12 месяцев?",
            hintKk: "12 ай бойы бір уақытта 10 мақсатқа назар аударуға тырыссаңыз не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "It is the end of Q1 and you achieved 2 out of 3 quarterly goals. The missed goal was 'complete all university applications.' How do you adjust your Q2 plan?",
            questionRu: "Конец Q1, достигнуты 2 из 3 целей. Пропущенная — «завершить все заявки в вузы». Как скорректировать Q2?",
            questionKk: "Q1 соңы және тоқсандық 3 мақсаттың 2-сіне жеттіңіз. Жіберілген мақсат — «барлық университет өтініштерін аяқтау». Q2 жоспарын қалай реттейсіз?",
            answer: "Move the incomplete application work to the first 2 weeks of Q2 as top priority. Adjust Q2 goals to accommodate: perhaps defer one Q2 goal to Q3. Set a hard deadline for applications (e.g., January 15) and work backward. Analyze why Q1 failed — was it poor time estimation, procrastination, or unexpected events? Address the root cause to prevent repeating the pattern.",
            hint: "Don't just add it to Q2 — something else may need to shift. Also ask why it was missed.",
            hintRu: "Не просто добавляйте в Q2 — что-то другое может потребовать сдвига. Также спросите, почему не выполнено.",
            hintKk: "Q2-ге жай қоспаңыз — басқа нәрсе ауысуы мүмкін. Сондай-ақ неліктен орындалмағанын сұраңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a comprehensive annual plan that covers 5 life areas: academics, health, relationships, skills, and finances. Include quarterly milestones and a review process for each area.",
            questionRu: "Создайте комплексный годовой план по 5 сферам: учёба, здоровье, отношения, навыки, финансы. Включите квартальные вехи и процесс обзора.",
            questionKk: "5 өмір саласын қамтитын жан-жақты жылдық жоспар жасаңыз: оқу, денсаулық, қарым-қатынас, дағдылар және қаржы. Тоқсандық кезеңдер мен шолу процесін қосыңыз.",
            answer: "Academics: Q1 — GPA 3.8+, Q2 — finals A average, Q3 — graduate with honors, Q4 — university prep reading. Health: Q1 — exercise 3x/week habit, Q2 — add nutrition tracking, Q3 — run a 5K, Q4 — maintain routine. Relationships: Q1 — weekly family dinner, monthly friend meetup, Q2-Q4 — maintain and deepen. Skills: Q1 — start learning programming, Q2 — build first project, Q3 — complete online course, Q4 — contribute to open source. Finances: Q1 — track all spending, Q2 — save 20% of any income, Q3 — apply for 5 scholarships, Q4 — build 3-month emergency fund. Review: Monthly 30-min check on all 5 areas. Quarterly 2-hour deep review: score each area 1-10, adjust next quarter's goals.",
            hint: "Each area needs its own quarterly milestones. The review process keeps everything aligned.",
            hintRu: "Каждая сфера нуждается в квартальных вехах. Процесс обзора поддерживает баланс.",
            hintKk: "Әр саланың өзіндік тоқсандық кезеңдері қажет. Шолу процесі бәрін сәйкестендіріп ұстайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Life Design",
        titleRu: "Проектирование жизни",
        titleKk: "Өмірді жобалау",
        content: "Life design applies design thinking to your future — prototyping different possible lives instead of committing to a single rigid plan. You create multiple 'Odyssey Plans' for the next 5 years, explore each through informational interviews and small experiments, and iterate based on what you discover. This approach reduces the pressure of choosing one 'right' path.",
        contentRu: "Проектирование жизни применяет дизайн-мышление к будущему — прототипирование разных возможных жизней вместо жёсткого единственного плана. Вы создаёте несколько «планов Одиссеи» на 5 лет, исследуете каждый через интервью и эксперименты. Это снижает давление выбора единственного «правильного» пути.",
        contentKk: "Өмірді жобалау дизайн ойлауды болашағыңызға қолданады — бір қатаң жоспарға бекінудің орнына түрлі мүмкін өмірлерді прототиптеу. Келесі 5 жылға бірнеше «Одиссей жоспарын» жасайсыз, әрқайсысын ақпараттық сұхбаттар мен шағын тәжірибелер арқылы зерттейсіз. Бұл тәсіл бір «дұрыс» жолды таңдау қысымын азайтады.",
        keyFormulas: [
          {
            formula: "Create 3 Odyssey Plans → Prototype Each → Gather Data → Choose Based on Experience",
            description: "The life design approach to major decisions",
            descriptionRu: "Подход проектирования жизни к важным решениям",
            descriptionKk: "Маңызды шешімдерге өмірді жобалау тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "A student is torn between medicine, engineering, and starting a business. Apply life design principles.",
            questionRu: "Ученик колеблется между медициной, инженерией и бизнесом. Примените принципы проектирования жизни.",
            questionKk: "Оқушы медицина, инженерия және бизнес бастау арасында таңдай алмай жатыр. Өмірді жобалау принциптерін қолданыңыз.",
            steps: [
              { en: "Create three 5-year Odyssey Plans: Plan A (Medicine) — pre-med courses, hospital volunteering, med school. Plan B (Engineering) — engineering degree, internship at tech company, product development. Plan C (Business) — business degree, start small online business during university, scale after graduation.", ru: "Три плана Одиссеи на 5 лет: План A (Медицина) — подготовительные курсы, волонтёрство, медшкола. План B (Инженерия) — степень, стажировка в IT, разработка продуктов. План C (Бизнес) — бизнес-степень, онлайн-бизнес в университете.", kk: "Үш 5 жылдық Одиссей жоспарын жасаңыз: А жоспары (Медицина) — алдын ала медициналық курстар, ауруханада еріктілік, мед мектеп. Б жоспары (Инженерия) — инженерлік дәреже, IT компанияда тағылымдама. В жоспары (Бизнес) — бизнес дәрежесі, университетте онлайн бизнес бастау." },
              { en: "Prototype each: shadow a doctor for a day, attend an engineering open house, interview a young entrepreneur. Rate each experience on engagement (1-10), energy (1-10), and excitement about that future (1-10). The data from real experiences is far better than guessing.", ru: "Прототипируйте: день с врачом, день открытых дверей инженерии, интервью с молодым предпринимателем. Оцените вовлечённость, энергию и воодушевление (1-10). Данные из опыта лучше догадок.", kk: "Прототиптеңіз: бір күн дәрігермен бірге жүріңіз, инженерлік ашық есік күніне барыңыз, жас кәсіпкермен сұхбат жасаңыз. Әр тәжірибені қатысу (1-10), энергия (1-10) және болашақ туралы қуаныш (1-10) бойынша бағалаңыз." }
            ],
            answer: "Create three 5-year plans, prototype each through real-world experiences (shadowing, interviews, experiments), rate them on engagement and energy, then choose based on data rather than guessing."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is an 'Odyssey Plan' and why do you create three instead of one?",
            questionRu: "Что такое «план Одиссеи» и почему создают три, а не один?",
            questionKk: "«Одиссей жоспары» деген не және неге бірдің орнына үшеу жасалады?",
            answer: "An Odyssey Plan is a detailed 5-year life plan. You create three different versions to explore multiple possibilities, reduce the pressure of finding one 'perfect' path, and discover options you might never have considered with just one plan.",
            hint: "What if your first idea isn't the best one? How does having alternatives help?",
            hintRu: "Что если первая идея не лучшая? Как помогают альтернативы?",
            hintKk: "Бірінші идеяңыз ең жақсы болмаса ше? Баламалар қалай көмектеседі?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Design a small prototype experiment to test whether you would enjoy a career in data science without committing years of study.",
            questionRu: "Создайте небольшой эксперимент для проверки, понравится ли вам карьера в Data Science, без долгих лет учёбы.",
            questionKk: "Деректер ғылымындағы мансапты ұнататыныңызды жылдар бойы оқуға міндеттенбей тексеру үшін шағын прототип тәжірибесін жасаңыз.",
            answer: "1) Complete a free online data science intro course (10 hours). 2) Work through a real dataset on Kaggle and build a simple analysis. 3) Interview 2 data scientists about their daily work (15 min each). 4) Rate your experience: Did you enjoy the problem-solving? Did you lose track of time? Would you want to do this daily? This prototype costs days, not years, and gives you real data about your interest.",
            hint: "What's the smallest, cheapest experiment that would give you real information about this career?",
            hintRu: "Какой самый маленький и дешёвый эксперимент даст реальную информацию об этой карьере?",
            hintKk: "Бұл мансап туралы нақты ақпарат беретін ең кішкентай, ең арзан тәжірибе қандай?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create three complete Odyssey Plans for your next 5 years after graduation. Each plan should include education, career path, location, lifestyle, and personal growth goals. Rate each on resources, likability, confidence, and coherence.",
            questionRu: "Создайте три полных плана Одиссеи на 5 лет после выпуска. Каждый должен включать образование, карьеру, место, образ жизни и цели роста. Оцените по ресурсам, привлекательности, уверенности и согласованности.",
            questionKk: "Бітіргеннен кейінгі 5 жылға үш толық Одиссей жоспарын жасаңыз. Әрқайсысы білім, мансап жолы, орналасу, өмір салты және жеке өсу мақсаттарын қамтуы керек. Ресурстар, ұнату, сенімділік және келісімділік бойынша бағалаңыз.",
            answer: "Example: Plan A (Traditional): Local university → Computer Science degree → Internship at a tech company → Full-time software engineer → Own apartment in the city. Plan B (Adventurous): Study abroad in Europe → Double major in Business + Design → Freelance while traveling → Start a design agency → Live in multiple cities. Plan C (Impact): Scholarship to a top university → Social entrepreneurship program → Build an ed-tech startup → Work in developing countries → Combine profit with purpose. Rate each 1-10 on: Resources (can I afford/access this?), Likability (does this excite me?), Confidence (do I believe I can do this?), Coherence (does this fit my values?). Use ratings to guide exploration, not to eliminate options prematurely.",
            hint: "Make the plans genuinely different — don't create three variations of the same path.",
            hintRu: "Сделайте планы действительно разными — не три варианта одного пути.",
            hintKk: "Жоспарларды шынымен әр түрлі етіңіз — бір жолдың үш нұсқасын жасамаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Productivity Tech",
        titleRu: "Технологии продуктивности",
        titleKk: "Өнімділік технологиялары",
        content: "Productivity technology amplifies your systems when chosen carefully, but can become a distraction when you constantly switch tools. The best approach is to master a minimal tech stack: one tool for tasks, one for calendar, one for notes, and one for communication. The tool matters less than the consistency of using it.",
        contentRu: "Технологии продуктивности усиливают ваши системы при правильном выборе, но могут стать отвлечением при постоянной смене инструментов. Лучший подход — минимальный набор: один инструмент для задач, один для календаря, один для заметок, один для общения. Важнее не инструмент, а последовательность использования.",
        contentKk: "Өнімділік технологиясы мұқият таңдалғанда жүйелеріңізді күшейтеді, бірақ құралдарды үнемі ауыстырғанда алаңдауға айналуы мүмкін. Ең жақсы тәсіл — минималды технологиялық жинақты меңгеру: тапсырмалар үшін бір құрал, күнтізбе үшін бір, жазбалар үшін бір, байланыс үшін бір.",
        keyFormulas: [
          {
            formula: "Task Manager + Calendar + Notes App + Communication Tool = Complete Productivity Stack",
            description: "The minimal tech stack for productivity",
            descriptionRu: "Минимальный технологический набор для продуктивности",
            descriptionKk: "Өнімділік үшін минималды технологиялық жинақ"
          }
        ],
        solvedExamples: [
          {
            question: "A student uses 7 different apps for productivity and feels overwhelmed. Simplify their tech stack.",
            questionRu: "Ученик использует 7 приложений для продуктивности и чувствует перегрузку. Упростите.",
            questionKk: "Оқушы өнімділік үшін 7 түрлі қолданба қолданады және шамадан тыс жүктелген сезінеді. Технологиялық жинақты жеңілдетіңіз.",
            steps: [
              { en: "Audit current tools: likely has separate apps for to-do lists, reminders, notes, calendar, habit tracking, Pomodoro timer, and file storage. Consolidate to 3-4: Todoist (tasks + habits + reminders), Google Calendar (all time-based items), Notion (notes + reference), and the school's platform (assignments).", ru: "Аудит текущих инструментов: вероятно, отдельные приложения для задач, напоминаний, заметок, календаря, привычек, таймера, хранения. Консолидация до 3-4: Todoist (задачи + привычки), Google Calendar (время), Notion (заметки), школьная платформа.", kk: "Ағымдағы құралдарды тексеру: тапсырмалар, еске салулар, жазбалар, күнтізбе, дағды бақылау, таймер, файл сақтау үшін бөлек қолданбалар болуы мүмкін. 3-4-ке біріктіріңіз: Todoist (тапсырмалар + дағдылар), Google Calendar (уақытқа негізделген), Notion (жазбалар), мектеп платформасы." },
              { en: "Migrate all data to the new tools over one weekend. Delete the extra apps. Spend 2 weeks learning the new stack deeply instead of superficially knowing 7 tools.", ru: "Перенесите все данные за выходные. Удалите лишние приложения. Потратьте 2 недели на глубокое изучение нового набора вместо поверхностного знания 7 инструментов.", kk: "Бір демалыс күні барлық деректерді жаңа құралдарға көшіріңіз. Қосымша қолданбаларды жойыңыз. 7 құралды үстірт білудің орнына жаңа жинақты терең үйренуге 2 апта жұмсаңыз." }
            ],
            answer: "Consolidate to 3-4 tools maximum: task manager, calendar, notes app, school platform. Master these deeply rather than using 7 tools superficially."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is using fewer productivity tools often more effective than using many?",
            questionRu: "Почему меньше инструментов продуктивности часто эффективнее, чем много?",
            questionKk: "Неліктен аз өнімділік құралдарын қолдану көбінесе көптен тиімдірек?",
            answer: "Fewer tools mean less time switching between apps, less cognitive overhead remembering where information lives, and deeper mastery of each tool. Many tools create their own overhead — you spend time managing tools instead of doing work.",
            hint: "What happens when information is scattered across 7 different apps?",
            hintRu: "Что происходит, когда информация разбросана по 7 приложениям?",
            hintKk: "Ақпарат 7 түрлі қолданбаға шашылғанда не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Recommend a productivity tech stack for a Grade 12 student and explain why each tool was chosen.",
            questionRu: "Рекомендуйте набор технологий для 12-классника и объясните выбор каждого инструмента.",
            questionKk: "12-сынып оқушысына өнімділік технологиялық жинағын ұсыныңыз және әр құралдың таңдалу себебін түсіндіріңіз.",
            answer: "1) Google Calendar (free, syncs everywhere — for class schedule, deadlines, appointments). 2) Todoist or Microsoft To Do (free — for daily tasks, homework tracking, habit streaks). 3) Notion or Google Docs (free — for notes, projects, Second Brain, university application drafts). 4) Google Drive (free — for file backup and collaboration). Why: all free, cross-platform, cloud-synced, and integrate with each other. A student can access everything from phone, school computer, or home laptop.",
            hint: "Consider cost, accessibility across devices, and integration between tools.",
            hintRu: "Учитывайте стоимость, доступность на устройствах и интеграцию.",
            hintKk: "Құны, құрылғылардағы қолжетімділігі және құралдар арасындағы интеграцияны ескеріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design an integrated productivity system using technology that connects your task management, calendar, notes, and spaced repetition into one seamless workflow. Explain how data flows between tools.",
            questionRu: "Создайте интегрированную систему продуктивности, связывающую задачи, календарь, заметки и интервальное повторение. Опишите поток данных.",
            questionKk: "Тапсырмаларды басқару, күнтізбе, жазбалар және аралықты қайталауды бір үздіксіз жұмыс процесіне байланыстыратын интеграцияланған өнімділік жүйесін жасаңыз. Деректер құралдар арасында қалай ағатынын түсіндіріңіз.",
            answer: "System: Notion (hub) + Google Calendar + Todoist + Anki. Flow: Class notes go into Notion, tagged by subject. Key concepts from Notion are converted into Anki flashcards for spaced repetition. Assignments from Notion are added to Todoist with due dates. Due dates from Todoist sync to Google Calendar. Weekly review in Notion triggers: create new Anki cards from recent notes, check Todoist for overdue items, review Calendar for upcoming deadlines. The system is circular: Learn (Notion) → Retain (Anki) → Execute (Todoist) → Schedule (Calendar) → Review (Notion). Automation: Todoist due dates auto-appear on Calendar. Notion templates auto-create task checklists for recurring assignments.",
            hint: "Think about how information moves from capture (notes) to retention (flashcards) to action (tasks) to time (calendar).",
            hintRu: "Подумайте о движении информации от захвата (заметки) к удержанию (карточки) к действию (задачи) к времени (календарь).",
            hintKk: "Ақпараттың түсіруден (жазбалар) есте сақтауға (карточкалар), әрекетке (тапсырмалар), уақытқа (күнтізбе) қалай қозғалатынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Automation",
        titleRu: "Автоматизация",
        titleKk: "Автоматтандыру",
        content: "Automation eliminates repetitive tasks by creating systems that run without your constant attention. From email filters and calendar templates to automated backups and recurring reminders, every automated task saves minutes daily that compound into hours weekly. The rule of thumb: if you do something more than three times, automate it.",
        contentRu: "Автоматизация устраняет повторяющиеся задачи, создавая системы, работающие без постоянного внимания. От фильтров почты и шаблонов календаря до автоматических бэкапов — каждая автоматизированная задача экономит минуты, складывающиеся в часы. Правило: если делаете что-то более 3 раз — автоматизируйте.",
        contentKk: "Автоматтандыру тұрақты назарыңызсыз жұмыс істейтін жүйелер құру арқылы қайталанатын тапсырмаларды жояды. Электрондық пошта сүзгілері мен күнтізбе үлгілерінен автоматты сақтық көшірмелерге дейін, әрбір автоматтандырылған тапсырма күнделікті минуттарды үнемдейді, олар аптасына сағаттарға жинақталады.",
        keyFormulas: [
          {
            formula: "If Done 3+ Times → Create Template or Automation → Save Cumulative Hours",
            description: "The automation decision rule",
            descriptionRu: "Правило принятия решения об автоматизации",
            descriptionKk: "Автоматтандыру шешім ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "Identify 5 repetitive tasks in a student's life and automate each one.",
            questionRu: "Определите 5 повторяющихся задач в жизни ученика и автоматизируйте каждую.",
            questionKk: "Оқушы өмірінде 5 қайталанатын тапсырманы анықтап, әрқайсысын автоматтандырыңыз.",
            steps: [
              { en: "Identify repetitive tasks: 1) Setting up homework folder structure each week. 2) Checking assignment deadlines. 3) Backing up schoolwork. 4) Sorting emails from teachers. 5) Creating study session schedules.", ru: "Повторяющиеся задачи: 1) Создание структуры папок каждую неделю. 2) Проверка дедлайнов. 3) Бэкап работ. 4) Сортировка писем от учителей. 5) Создание расписания занятий.", kk: "Қайталанатын тапсырмалар: 1) Апта сайын үй тапсырмасы қалтасын құру. 2) Тапсырма мерзімдерін тексеру. 3) Мектеп жұмыстарының сақтық көшірмесі. 4) Мұғалімдерден келген хаттарды сұрыптау. 5) Оқу сеанстарының кестесін жасау." },
              { en: "Automate: 1) Template folder on Google Drive — duplicate each week. 2) Sync school portal with Google Calendar for auto-reminders. 3) Auto-backup to cloud (Google Drive sync). 4) Email filters: auto-label by teacher name. 5) Recurring calendar blocks for study sessions — set once, repeat weekly.", ru: "Автоматизация: 1) Шаблон папки — дублировать каждую неделю. 2) Синхронизация портала с Google Calendar. 3) Автобэкап в облако. 4) Фильтры почты по имени учителя. 5) Повторяющиеся блоки в календаре.", kk: "Автоматтандыру: 1) Google Drive-тағы үлгі қалта — апта сайын көшіру. 2) Мектеп порталын Google Calendar-мен синхрондау. 3) Бұлтқа автоматты сақтық көшірме. 4) Электрондық пошта сүзгілері: мұғалім аты бойынша белгілеу. 5) Оқу сеанстары үшін қайталанатын күнтізбе блоктары." }
            ],
            answer: "Template folders (duplicate weekly), calendar sync for deadlines, cloud auto-backup, email filters by teacher, recurring calendar blocks for study sessions."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the 'rule of 3' for automation?",
            questionRu: "Что такое «правило 3» для автоматизации?",
            questionKk: "Автоматтандыру үшін «3 ережесі» деген не?",
            answer: "If you do a task more than 3 times, it is worth spending time to automate it. The upfront time investment pays off through cumulative time savings over weeks and months.",
            hint: "How many times should you repeat a task before it's worth automating?",
            hintRu: "Сколько раз нужно повторить задачу, прежде чем автоматизировать?",
            hintKk: "Автоматтандыруға тұрарлық болу үшін тапсырманы қанша рет қайталау керек?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Set up 3 email automation rules that would save a student at least 30 minutes per week.",
            questionRu: "Настройте 3 правила автоматизации почты, экономящих минимум 30 минут в неделю.",
            questionKk: "Оқушыға аптасына кемінде 30 минут үнемдейтін 3 электрондық пошта автоматтандыру ережесін орнатыңыз.",
            answer: "1) Auto-filter: All emails from teachers → 'School' label + star, so you never miss important messages. 2) Auto-filter: All newsletter/promotional emails → 'Read Later' label, skip inbox — check once a week. 3) Auto-filter: All school portal notifications → 'Assignments' label with auto-forward to your task manager. Combined savings: no manual sorting (10 min/day × 5 days = 50 min/week).",
            hint: "Think about how much time you spend sorting, reading, and searching for emails each day.",
            hintRu: "Подумайте, сколько времени тратите на сортировку и поиск писем каждый день.",
            hintKk: "Күн сайын хаттарды сұрыптауға, оқуға және іздеуге қанша уақыт жұмсайтыныңызды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Audit your entire weekly routine and identify every task that could be automated or templated. Calculate the total time saved per month and design the automation system.",
            questionRu: "Проведите аудит всей недельной рутины. Определите все задачи для автоматизации или шаблонизации. Рассчитайте месячную экономию и создайте систему.",
            questionKk: "Бүкіл апталық тәртібіңізді тексеріңіз және автоматтандыруға немесе үлгілеуге болатын барлық тапсырмаларды анықтаңыз. Айына жалпы үнемделген уақытты есептеп, автоматтандыру жүйесін жасаңыз.",
            answer: "Audit findings: Email sorting (10 min/day = 5 hrs/month), weekly folder setup (15 min/week = 1 hr/month), checking deadlines across platforms (10 min/day = 5 hrs/month), creating study schedules (20 min/week = 1.5 hrs/month), backing up files (15 min/week = 1 hr/month). Total potential savings: ~13.5 hrs/month. System: Email filters (auto-sort), template folder structure (duplicate weekly), calendar sync with school portal (auto-deadline import), recurring calendar blocks (set-and-forget study schedule), Google Drive auto-sync (continuous backup). Implementation: one Saturday afternoon (3 hours) to set everything up. ROI: 3 hours invested, 13.5 hours saved monthly — pays for itself in the first week.",
            hint: "List every recurring task, estimate time per occurrence and frequency, then calculate monthly totals.",
            hintRu: "Перечислите все повторяющиеся задачи, оцените время и частоту, рассчитайте месячные итоги.",
            hintKk: "Барлық қайталанатын тапсырмаларды тізіп, әр орындалу уақытын және жиілігін бағалап, айлық жиынтықтарды есептеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Decision Frameworks",
        titleRu: "Фреймворки принятия решений",
        titleKk: "Шешім қабылдау фреймворктары",
        content: "Decision frameworks provide structured approaches to making important choices, reducing the influence of emotions, biases, and short-term thinking. Whether choosing a university, a career path, or how to spend your time, frameworks like weighted scoring, reversibility testing, and pre-mortem analysis lead to better outcomes consistently.",
        contentRu: "Фреймворки принятия решений обеспечивают структурированный подход к важным выборам, уменьшая влияние эмоций, предубеждений и краткосрочного мышления. Будь то выбор университета, карьеры или распределение времени — фреймворки ведут к лучшим решениям.",
        contentKk: "Шешім қабылдау фреймворктары маңызды таңдаулар жасауға құрылымдық тәсілдер ұсынады, эмоциялар, біржақтылық және қысқа мерзімді ойлаудың әсерін азайтады. Университет, мансап немесе уақытты қалай өткізу керектігін таңдау кезінде салмақты бағалау, кері қайтарымдылық тесті сияқты фреймворктар жақсы нәтижелерге әкеледі.",
        keyFormulas: [
          {
            formula: "List Options → Define Criteria → Weight Criteria → Score Each Option → Choose Highest",
            description: "The weighted decision matrix framework",
            descriptionRu: "Фреймворк взвешенной матрицы решений",
            descriptionKk: "Салмақталған шешім матрицасы фреймворкі"
          }
        ],
        solvedExamples: [
          {
            question: "Use a weighted decision matrix to choose between 3 universities: University A (prestigious, expensive, far), University B (good program, affordable, moderate distance), University C (average, cheap, close to home).",
            questionRu: "Используйте взвешенную матрицу для выбора из 3 университетов: A (престижный, дорогой, далеко), B (хорошая программа, доступный, средняя удалённость), C (средний, дешёвый, рядом).",
            questionKk: "3 университет арасынан таңдау үшін салмақталған шешім матрицасын қолданыңыз: A (беделді, қымбат, алыс), B (жақсы бағдарлама, қолжетімді, орташа қашықтық), C (орташа, арзан, үйге жақын).",
            steps: [
              { en: "Define and weight criteria (total = 100): Academic Quality (30), Affordability (25), Career Opportunities (20), Campus Life (15), Distance from Home (10). Score each university 1-10 on each criterion.", ru: "Определите и взвесьте критерии (всего 100): Качество обучения (30), Доступность (25), Карьерные возможности (20), Кампусная жизнь (15), Расстояние (10). Оцените каждый вуз 1-10.", kk: "Критерийлерді анықтап, салмақтаңыз (барлығы 100): Оқу сапасы (30), Қолжетімділік (25), Мансап мүмкіндіктері (20), Кампус өмірі (15), Үйден қашықтық (10). Әр университетті әр критерий бойынша 1-10 бағалаңыз." },
              { en: "Calculate: Uni A: (9×30)+(3×25)+(9×20)+(8×15)+(3×10) = 270+75+180+120+30 = 675. Uni B: (7×30)+(8×25)+(7×20)+(7×15)+(6×10) = 210+200+140+105+60 = 715. Uni C: (5×30)+(9×25)+(4×20)+(5×15)+(9×10) = 150+225+80+75+90 = 620. University B scores highest.", ru: "Расчёт: Вуз A: 675. Вуз B: 715. Вуз C: 620. Вуз B набирает больше всего баллов.", kk: "Есептеу: A университеті: 675. B университеті: 715. C университеті: 620. B университеті ең жоғары ұпай жинады." }
            ],
            answer: "University B (715) scores highest in the weighted matrix, balancing good academics with affordability and reasonable distance."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why are decision frameworks better than 'going with your gut' for important choices?",
            questionRu: "Почему фреймворки лучше «интуиции» для важных решений?",
            questionKk: "Маңызды таңдаулар үшін шешім фреймворктары «ішкі сезімге» сенуден неліктен жақсы?",
            answer: "Gut feelings are influenced by emotions, biases, recent experiences, and social pressure. Frameworks force you to consider all relevant factors systematically, weight what truly matters, and make the reasoning visible so you can review and defend your choice.",
            hint: "What biases might affect a gut decision about universities? (Prestige bias? Cost avoidance? Proximity preference?)",
            hintRu: "Какие предубеждения могут повлиять на интуитивное решение о вузе?",
            hintKk: "Университеттер туралы ішкі сезім шешіміне қандай біржақтылықтар әсер етуі мүмкін?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You need to decide whether to take a part-time job or use that time for extracurriculars. Apply the reversibility test and opportunity cost analysis.",
            questionRu: "Вам нужно решить: подработка или кружки. Примените тест обратимости и анализ альтернативных издержек.",
            questionKk: "Жартылай жұмыс істеу немесе сол уақытты қосымша шараларға жұмсау туралы шешім қабылдау керек. Кері қайтарымдылық тестін және мүмкіндік шығын талдауын қолданыңыз.",
            answer: "Reversibility test: Can you undo each choice? A part-time job can be quit (reversible). Missing a year of extracurriculars during Grade 12 cannot be recovered (less reversible). This favors extracurriculars. Opportunity cost: Job gives $200/week but costs 15 hrs. Those 15 hrs in extracurriculars could build leadership experience, unique skills, and stronger university applications — which may lead to scholarships worth far more than $200/week. Decision: extracurriculars likely have higher long-term value, but consider a smaller job (5 hrs/week) to have both.",
            hint: "Ask: Which option is harder to reverse? What do you lose by choosing one over the other?",
            hintRu: "Спросите: Какой вариант труднее отменить? Что вы теряете, выбирая один вместо другого?",
            hintKk: "Сұраңыз: Қай нұсқаны кері қайтару қиынырақ? Бірін таңдау арқылы нені жоғалтасыз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Apply a pre-mortem analysis to your university choice. Imagine it is 2 years from now and things have gone badly. What went wrong? Use this to strengthen your decision now.",
            questionRu: "Проведите pre-mortem анализ выбора университета. Представьте — через 2 года всё пошло плохо. Что случилось? Используйте для укрепления решения.",
            questionKk: "Университет таңдауыңызға pre-mortem талдау жасаңыз. 2 жылдан кейін бәрі нашар болды деп елестетіңіз. Не болды? Бұны қазір шешіміңізді нығайту үшін пайдаланыңыз.",
            answer: "Pre-mortem for choosing University X: Possible failures: 1) Couldn't afford tuition after Year 1 — prevention: research financial aid thoroughly, have backup funding plan. 2) Hated the city/culture — prevention: visit campus, connect with current students before committing. 3) Program wasn't as strong as expected — prevention: check recent alumni outcomes, not just rankings. 4) Felt isolated without support system — prevention: research student organizations, visit, find community early. 5) Changed career interests and the university is too specialized — prevention: choose a university with flexible programs and easy major-switching. Each identified risk becomes a prevention action item before you commit.",
            hint: "Imagine everything went wrong. What are the most likely reasons? Now prevent each one.",
            hintRu: "Представьте, что всё пошло не так. Каковы наиболее вероятные причины? Теперь предотвратите каждую.",
            hintKk: "Бәрі нашар болды деп елестетіңіз. Ең ықтимал себептер қандай? Қазір әрқайсысын алдын алыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Work-Life Balance",
        titleRu: "Баланс работы и жизни",
        titleKk: "Жұмыс-өмір балансы",
        content: "Work-life balance means intentionally protecting time for rest, relationships, hobbies, and health alongside academic pursuits. Burning out from non-stop studying actually reduces performance — your brain needs recovery to consolidate learning. The most productive students schedule fun and rest as seriously as they schedule study sessions.",
        contentRu: "Баланс работы и жизни означает сознательную защиту времени для отдыха, отношений, хобби и здоровья наряду с учёбой. Выгорание от непрерывной учёбы снижает результаты — мозгу нужно восстановление для закрепления знаний. Самые продуктивные студенты планируют отдых так же серьёзно, как учёбу.",
        contentKk: "Жұмыс-өмір балансы академиялық ізденістермен қатар демалыс, қарым-қатынас, хобби және денсаулық үшін уақытты саналы түрде қорғауды білдіреді. Тоқтаусыз оқудан кейін күйіп қалу өнімділікті төмендетеді — миыңызға оқуды бекіту үшін қалпына келтіру қажет.",
        keyFormulas: [
          {
            formula: "Intentional Rest + Protected Social Time + Physical Activity = Sustainable High Performance",
            description: "The three pillars of work-life balance",
            descriptionRu: "Три столпа баланса работы и жизни",
            descriptionKk: "Жұмыс-өмір балансының үш тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "A straight-A student studies 6 hours every day including weekends and has no hobbies or social life. They feel exhausted and their grades are starting to slip. Redesign their week.",
            questionRu: "Отличник учится 6 часов каждый день, включая выходные, без хобби и общения. Чувствует себя измотанным, оценки начали падать. Перестройте неделю.",
            questionKk: "Үздік оқушы демалыс күндерін қоса күн сайын 6 сағат оқиды, хобби немесе әлеуметтік өмірі жоқ. Шаршау сезінеді және бағалары төмендей бастады. Апталығын қайта құрыңыз.",
            steps: [
              { en: "Reduce study hours from 42/week to 28/week (4 hours/day weekdays, 4 hours total on weekends). Use the freed 14 hours for: exercise (5 hrs/week), social time (4 hrs/week), hobby (3 hrs/week), extra sleep (2 hrs/week).", ru: "Уменьшить учёбу с 42 до 28 часов/неделю (4 часа/день по будням, 4 часа на выходных). Освободившиеся 14 часов: спорт (5), общение (4), хобби (3), сон (2).", kk: "Оқу сағаттарын аптасына 42-ден 28-ге азайтыңыз (жұмыс күндері 4 сағат/күн, демалыс күндері барлығы 4 сағат). Босаған 14 сағат: жаттығу (5 сағ/апта), әлеуметтік уақыт (4 сағ/апта), хобби (3 сағ/апта), қосымша ұйқы (2 сағ/апта)." },
              { en: "Make the 28 study hours more effective using deep work, active recall, and batch processing. Fewer but higher-quality hours with proper rest will produce better results than 42 exhausted hours. Schedule one full rest day per week (Sunday) with no studying.", ru: "Сделать 28 часов эффективнее через глубокую работу, активное воспроизведение и пакетную обработку. Меньше, но качественнее с отдыхом — лучше, чем 42 часа в измотанном состоянии. Один полный день отдыха (воскресенье).", kk: "28 оқу сағатын терең жұмыс, белсенді еске түсіру және топтамалық өңдеу арқылы тиімдірек етіңіз. Дұрыс демалыспен аз, бірақ сапалы сағаттар 42 шаршаған сағаттан жақсы нәтиже береді. Аптасына бір толық демалыс күнін (жексенбі) оқусыз жоспарлаңыз." }
            ],
            answer: "Cut to 28 focused hours/week, add exercise, social time, hobby, and extra sleep. Use productivity techniques to make fewer hours more effective. Schedule a full rest day weekly."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why can studying less sometimes lead to better grades?",
            questionRu: "Почему меньшее количество учёбы иногда ведёт к лучшим оценкам?",
            questionKk: "Неліктен кейде аз оқу жақсы бағаларға әкелуі мүмкін?",
            answer: "Because exhaustion and burnout reduce cognitive performance. A rested brain learns faster, remembers better, and thinks more clearly. Fewer high-quality study hours with adequate sleep, exercise, and breaks outperform more hours in a depleted state.",
            hint: "What happens to your brain when you study for hours without adequate rest?",
            hintRu: "Что происходит с мозгом, когда учитесь часами без достаточного отдыха?",
            hintKk: "Жеткілікті демалыссыз сағаттар бойы оқығанда миыңызға не болады?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a 'non-negotiable rest' schedule that protects personal time while maintaining academic performance during exam season.",
            questionRu: "Создайте расписание «необсуждаемого отдыха», защищающее личное время при поддержании успеваемости во время экзаменов.",
            questionKk: "Емтихан маусымында академиялық үлгерімді сақтай отырып, жеке уақытты қорғайтын «келіссөзсіз демалыс» кестесін жасаңыз.",
            answer: "Non-negotiables: 8 hours sleep every night (no exceptions). 30 minutes exercise daily (morning, before studying). One meal per day with family/friends (social connection). 1 hour of hobby/fun daily (evening wind-down). Full day off on Sunday OR Saturday. These are blocked on the calendar like exams — they cannot be moved. Study time fills the remaining hours using focused techniques.",
            hint: "Block rest time first, then fit studying around it — not the other way around.",
            hintRu: "Сначала заблокируйте время отдыха, затем вписывайте учёбу — не наоборот.",
            hintKk: "Алдымен демалыс уақытын блоктаңыз, содан кейін оқуды оның айналасына сыйдырыңыз — керісінше емес.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A student is involved in 5 extracurriculars, takes 6 AP courses, works part-time, and sleeps 5 hours per night. They refuse to drop anything because 'everything matters for college applications.' Build a case for why and how they should reduce commitments.",
            questionRu: "Ученик: 5 кружков, 6 AP-курсов, подработка, 5 часов сна. Отказывается бросать, потому что «всё важно для поступления». Обоснуйте сокращение и предложите план.",
            questionKk: "Оқушы 5 қосымша шарада, 6 AP курста, жартылай жұмыста және түнде 5 сағат ұйықтайды. «Бәрі университетке түсу үшін маңызды» деп ештеңені тастағысы келмейді. Міндеттемелерді қысқартудың қажеттілігін негіздеңіз.",
            answer: "Case: 1) Sleep deprivation reduces GPA — studies show each lost hour of sleep drops GPA by 0.1-0.2 points, so 5hrs sleep may cost a full grade point. 2) Universities prefer depth over breadth — 2-3 activities with leadership roles impress more than 5 with surface-level participation. 3) Burnout risk is high — collapsing before applications are submitted helps no one. Plan: Use the 80/20 rule: Which 2-3 activities show the most leadership and passion? Keep those, drop or reduce the rest. Reduce to 4-5 AP courses (still impressive). Sleep 7+ hours (non-negotiable). The result: better grades, deeper involvement, stronger applications, and a sustainable lifestyle.",
            hint: "Universities value depth and leadership, not a long list. What would happen if this student burns out in November?",
            hintRu: "Университеты ценят глубину, а не длинный список. Что если ученик выгорит в ноябре?",
            hintKk: "Университеттер ұзын тізімді емес, тереңдік пен көшбасшылықты бағалайды. Оқушы қарашада күйіп қалса не болады?",
            xp: 20
          }
        ]
      },
      {
        title: "Building Systems",
        titleRu: "Построение систем",
        titleKk: "Жүйелер құру",
        content: "Systems beat goals because goals are outcomes you hope for, while systems are processes you control. A goal says 'get an A in math' — a system says 'solve 10 practice problems every morning before school.' When you build reliable systems, results become inevitable rather than dependent on willpower or motivation.",
        contentRu: "Системы побеждают цели, потому что цели — желаемые результаты, а системы — контролируемые процессы. Цель: «получить A по математике» — система: «решать 10 задач каждое утро перед школой». Когда вы строите надёжные системы, результаты становятся неизбежными.",
        contentKk: "Жүйелер мақсаттарды жеңеді, себебі мақсаттар — сіз үміттенетін нәтижелер, ал жүйелер — сіз бақылайтын процестер. Мақсат: «математикадан A алу» — жүйе: «мектепке дейін күн сайын таңертең 10 есеп шығару». Сенімді жүйелер құрғанда, нәтижелер ерік-жігер мен мотивацияға тәуелді емес, сөзсіз болады.",
        keyFormulas: [
          {
            formula: "Goals = What You Want | Systems = What You Do Daily → Systems Win Long-term",
            description: "Why systems outperform goals",
            descriptionRu: "Почему системы превосходят цели",
            descriptionKk: "Жүйелер неліктен мақсаттардан озады"
          }
        ],
        solvedExamples: [
          {
            question: "Convert three common student goals into systems.",
            questionRu: "Преобразуйте три обычные цели ученика в системы.",
            questionKk: "Оқушылардың үш кең таралған мақсатын жүйелерге айналдырыңыз.",
            steps: [
              { en: "Goal 1: 'Get fit.' System: 'Exercise for 20 minutes every day at 7 AM before breakfast.' Goal 2: 'Read more books.' System: 'Read 15 pages every night before bed.' Goal 3: 'Get better at writing.' System: 'Write 200 words every morning for 30 days.'", ru: "Цель 1: «Быть в форме.» Система: «20 минут упражнений в 7 утра.» Цель 2: «Читать больше.» Система: «15 страниц перед сном.» Цель 3: «Лучше писать.» Система: «200 слов каждое утро 30 дней.»", kk: "1-мақсат: «Дене бітімін жақсарту.» Жүйе: «Таңертең 7-де таңғы астан бұрын 20 минут жаттығу.» 2-мақсат: «Көбірек оқу.» Жүйе: «Ұйықтар алдында 15 бет оқу.» 3-мақсат: «Жазуды жақсарту.» Жүйе: «30 күн бойы таңертең 200 сөз жазу.»" },
              { en: "Notice: each system is specific (what), scheduled (when), and small enough to do every day. You don't need motivation for a 20-minute workout or 15 pages — you just need to show up. Over time, the system produces the goal automatically.", ru: "Заметьте: каждая система конкретна (что), запланирована (когда) и достаточно мала для ежедневного выполнения. Не нужна мотивация для 20 минут или 15 страниц — просто начните. Со временем система автоматически создаёт результат.", kk: "Назар аударыңыз: әр жүйе нақты (не), жоспарланған (қашан) және күн сайын орындау үшін жеткілікті шағын. 20 минуттық жаттығу немесе 15 бет үшін мотивация қажет емес — жай бастаңыз. Уақыт өте келе жүйе мақсатты автоматты түрде жасайды." }
            ],
            answer: "Replace vague goals with specific daily actions: 20-min daily exercise, 15 pages before bed, 200 words every morning. Systems are controllable processes that make results inevitable."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the key difference between a goal and a system?",
            questionRu: "В чём ключевая разница между целью и системой?",
            questionKk: "Мақсат пен жүйенің басты айырмашылығы неде?",
            answer: "A goal is a desired outcome (e.g., 'lose 10 kg'). A system is a daily process you follow (e.g., 'walk 30 minutes and eat vegetables with every meal'). You can control a system; a goal depends on factors beyond your control.",
            hint: "Which one can you do today? The goal or the system?",
            hintRu: "Что из этого вы можете сделать сегодня — цель или систему?",
            hintKk: "Мұның қайсысын бүгін жасай аласыз — мақсатты ма, жүйені ме?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student says 'I want to get into a top university.' Convert this goal into a system of daily and weekly actions.",
            questionRu: "Ученик говорит: «Хочу поступить в топ-вуз.» Преобразуйте в систему ежедневных и еженедельных действий.",
            questionKk: "Оқушы «Үздік университетке түскім келеді» дейді. Бұл мақсатты күнделікті және апталық әрекеттер жүйесіне айналдырыңыз.",
            answer: "Daily system: 1) Study 3 focused hours using active recall (maintains GPA). 2) Spend 20 minutes on SAT/ACT practice. 3) Read 15 pages (builds vocabulary and knowledge). Weekly system: 4) 2 hours on extracurricular leadership activities. 5) 1 hour on essay writing/revision. 6) 30-minute university research session. Monthly: 7) Meet with a counselor. 8) Complete one section of the application. The daily system, followed consistently, makes the goal almost inevitable.",
            hint: "Break 'top university' into component requirements (grades, test scores, essays, extracurriculars) and create daily systems for each.",
            hintRu: "Разложите «топ-вуз» на компоненты (оценки, тесты, эссе, кружки) и создайте системы для каждого.",
            hintKk: "«Үздік университетті» компоненттерге бөліңіз (бағалар, тест ұпайлары, эсселер, қосымша шаралар) және әрқайсысы үшін жүйелер жасаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete 'operating system for life' that integrates all the productivity techniques you have learned: habits, time blocking, energy management, automation, accountability, and review cycles. Show how they work together as one coherent system.",
            questionRu: "Создайте полную «операционную систему жизни», интегрирующую все изученные техники: привычки, блокировку времени, управление энергией, автоматизацию, подотчётность и циклы обзора.",
            questionKk: "Үйренген барлық өнімділік техникаларын біріктіретін толық «өмірдің операциялық жүйесін» жасаңыз: дағдылар, уақытты блоктау, энергияны басқару, автоматтандыру, есеп беру және шолу циклдері.",
            answer: "Morning System: Wake at 6:30, habit stack (make bed → water → stretch → review priorities → 30-min deep work). Daily System: Time-blocked calendar with energy mapping (hard tasks at peak hours, light tasks at low energy). Automation handles: email filters, recurring calendar blocks, cloud backups, assignment reminders. Weekly System: Sunday 45-min review — clear inboxes (GTD), review projects, plan next week's time blocks, update accountability partner. Monthly System: Review SMART goals, check semester plan progress, adjust quarterly targets, archive completed projects. Habit tracking: streak calendar for core daily habits. Accountability: weekly check-in with study partner, monthly with mentor. The key insight: each component reinforces the others. Habits make daily execution automatic. Time blocking ensures the right work gets done. Energy management maximizes each hour's output. Automation eliminates friction. Accountability prevents drift. Reviews keep everything aligned.",
            hint: "Think of each technique as a component that plugs into a larger operating system. How do they feed into each other?",
            hintRu: "Думайте о каждой технике как о компоненте более крупной операционной системы. Как они связаны?",
            hintKk: "Әр техниканы үлкенірек операциялық жүйеге қосылатын компонент ретінде ойлаңыз. Олар бір-бірін қалай нығайтады?",
            xp: 20
          }
        ]
      },
      {
        title: "Lifelong Learning",
        titleRu: "Непрерывное обучение",
        titleKk: "Өмір бойы оқу",
        content: "Lifelong learning is the recognition that formal education is just the beginning — the most successful people continue learning deliberately throughout their entire lives. In a rapidly changing world, the ability to learn new skills quickly is more valuable than any single skill. Building a learning habit now ensures you stay relevant and growing for decades to come.",
        contentRu: "Непрерывное обучение — осознание того, что формальное образование лишь начало. Самые успешные люди продолжают учиться осознанно всю жизнь. В быстро меняющемся мире способность быстро осваивать новые навыки ценнее любого отдельного навыка. Привычка учиться обеспечивает актуальность и рост на десятилетия.",
        contentKk: "Өмір бойы оқу — формалды білім беру тек бастама екенін мойындау. Ең табысты адамдар бүкіл өмір бойы саналы түрде оқуды жалғастырады. Тез өзгеретін әлемде жаңа дағдыларды тез үйрену қабілеті кез келген жеке дағдыдан құндырақ. Қазір оқу дағдысын қалыптастыру ондаған жылдар бойы өзекті болуыңызды қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "Curiosity + Deliberate Practice + Reflection = Continuous Growth",
            description: "The three engines of lifelong learning",
            descriptionRu: "Три двигателя непрерывного обучения",
            descriptionKk: "Өмір бойы оқудың үш қозғалтқышы"
          },
          {
            formula: "Learn → Apply → Teach → Learn Deeper",
            description: "The learning cycle that compounds knowledge",
            descriptionRu: "Цикл обучения, накапливающий знания",
            descriptionKk: "Білімді жинақтайтын оқу циклі"
          }
        ],
        solvedExamples: [
          {
            question: "Design a lifelong learning plan for a student graduating from high school who wants to stay a continuous learner.",
            questionRu: "Разработайте план непрерывного обучения для выпускника школы, стремящегося учиться всю жизнь.",
            questionKk: "Мектепті бітіріп, үздіксіз оқушы болғысы келетін оқушы үшін өмір бойы оқу жоспарын жасаңыз.",
            steps: [
              { en: "Build three learning habits: 1) Read 30 minutes daily on diverse topics (books, quality articles). 2) Learn one new skill each quarter (coding, a language, an instrument, cooking). 3) Maintain a learning journal — weekly reflection on what you learned and how to apply it.", ru: "Три привычки обучения: 1) 30 минут чтения на разные темы ежедневно. 2) Один новый навык каждый квартал (программирование, язык, инструмент). 3) Дневник обучения — еженедельная рефлексия.", kk: "Үш оқу дағдысын қалыптастырыңыз: 1) Күн сайын 30 минут әртүрлі тақырыптарда оқу. 2) Әр тоқсанда бір жаңа дағды үйрену (бағдарламалау, тіл, музыка аспабы). 3) Оқу күнделігі — апта сайын не үйренгеніңіз және оны қалай қолдануға болатыны туралы рефлексия." },
              { en: "Create a learning ecosystem: curate 5 high-quality information sources (podcasts, newsletters, YouTube channels). Join one community of learners (online or local). Teach what you learn — start a blog, tutor, or explain concepts to friends. Teaching is the deepest form of learning.", ru: "Создайте экосистему: 5 качественных источников (подкасты, рассылки, YouTube). Присоединитесь к сообществу учащихся. Обучайте других — блог, репетиторство, объяснение друзьям. Обучение — глубочайшая форма учёбы.", kk: "Оқу экожүйесін құрыңыз: 5 сапалы ақпарат көзін таңдаңыз (подкасттар, ақпараттық бюллетеньдер, YouTube). Бір оқушылар қоғамдастығына қосылыңыз. Үйренгеніңізді үйретіңіз — блог бастаңыз, репетиторлық жасаңыз. Үйрету — оқудың ең терең түрі." }
            ],
            answer: "Three daily/quarterly learning habits, curated information sources, a learning community, and teaching what you learn to deepen understanding."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is the ability to learn quickly more valuable in today's world than having a fixed set of knowledge?",
            questionRu: "Почему способность быстро учиться ценнее фиксированного набора знаний в современном мире?",
            questionKk: "Неліктен қазіргі әлемде тез үйрену қабілеті тұрақты білім жиынтығынан құндырақ?",
            answer: "Because knowledge becomes outdated quickly — technology, industries, and job requirements change constantly. Someone who learns quickly can adapt to any change, while someone with fixed knowledge becomes obsolete. Meta-learning (learning how to learn) is the ultimate skill.",
            hint: "Think about how many jobs exist today that didn't exist 10 years ago.",
            hintRu: "Подумайте, сколько профессий сегодня не существовало 10 лет назад.",
            hintKk: "10 жыл бұрын болмаған бүгінгі қанша мамандықтың бар екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a quarterly learning plan to master a completely new skill in 3 months using the productivity techniques from this course.",
            questionRu: "Создайте квартальный план освоения нового навыка за 3 месяца, используя техники из этого курса.",
            questionKk: "Осы курстағы өнімділік техникаларын қолданып, 3 айда мүлдем жаңа дағдыны меңгеру үшін тоқсандық оқу жоспарын жасаңыз.",
            answer: "Skill: Basic web development. Month 1: Daily 45-min learning blocks, intro course, build simple pages from memory. Month 2: Build 3 projects with increasing complexity, use Feynman Technique, join a community. Month 3: Build a real portfolio project, teach what you learned. Throughout: use time-blocking, spaced repetition, accountability, and weekly reviews.",
            hint: "Apply the techniques: spaced repetition for memorization, deep work for practice, Feynman for understanding, accountability for consistency.",
            hintRu: "Примените техники: интервальное повторение, глубокую работу, технику Фейнмана, подотчётность.",
            hintKk: "Техникаларды қолданыңыз: аралықты қайталау, терең жұмыс, Фейнман техникасы, есеп беру.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a letter to your future self (5 years from now) outlining the learning systems you will maintain, the habits you will protect, and how you will continue growing after formal education ends. Use specific techniques from this entire course.",
            questionRu: "Напишите письмо будущему себе (через 5 лет): какие системы обучения поддерживать, какие привычки защитить, как продолжать расти. Используйте техники из всего курса.",
            questionKk: "Болашақ өзіңізге (5 жылдан кейін) хат жазыңыз: қандай оқу жүйелерін сақтайсыз, қандай дағдыларды қорғайсыз және формалды білім аяқталғаннан кейін қалай өсуді жалғастырасыз. Бүкіл курстағы нақты техникаларды қолданыңыз.",
            answer: "Example letter outline: 'Dear Future Me: Here are the systems I commit to maintaining: 1) PKM system in Notion — capture daily, process weekly, review monthly (from PKM + Second Brain). 2) Daily learning habit: 30 min reading + 15 min Anki (from Spaced Repetition + Habit Formation). 3) Quarterly skill sprints: learn one new skill every 3 months using deep work blocks (from Deep Work + Annual Planning). 4) GTD weekly review: every Sunday, clear inboxes and plan the week (from GTD + Semester Planning). 5) Energy-optimized schedule: hard creative work in the morning, routine tasks after lunch (from Energy Management + Time Blocking). 6) Annual Odyssey Plan update: revisit my 3 life paths each year (from Life Design). 7) Teach what I learn: blog, mentor, or tutor regularly (from Feynman Technique + Lifelong Learning). The habits I will protect: 8 hours sleep, daily exercise, weekly social connection, one rest day. These are non-negotiable because sustainable performance requires recovery (from Work-Life Balance). Remember: systems beat goals, consistency beats intensity, and the compound effect of daily learning is extraordinary.'",
            hint: "Reference specific techniques by name. What daily, weekly, monthly, and annual systems will keep you growing?",
            hintRu: "Ссылайтесь на конкретные техники по названиям. Какие системы будут поддерживать рост?",
            hintKk: "Нақты техникаларға атауы бойынша сілтеме жасаңыз. Қандай күнделікті, апталық, айлық және жылдық жүйелер сізді өсіруді жалғастырады?",
            xp: 20
          }
        ]
      }
    ]
  }
};