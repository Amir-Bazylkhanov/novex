// ============================================
// Учебный контент планеты «Communication & Leadership» (коммуникация и
// лидерство) — готовый учебный курс Академии Novex.
// Подключается в constants/academy/catalog.ts как одна из
// планет и показывается на странице /learn для соответствующего
// робота-наставника.
// Одна запись = один класс (ключ вида "Communication & Leadership_8"..._12):
// введение + список секций, где у каждой секции — теория на трёх языках,
// формулы, термины, разобранные примеры и практические задачи.
// ============================================
import type { LessonContent } from '../lessonData.ts';

export const COMMUNICATION_FULL: Record<string, LessonContent> = {
  "Communication & Leadership_8": {
    planetName: "Communication & Leadership",
    introduction: {
      en: "Welcome to the foundations of communication! Learn how to listen actively, speak clearly, read body language, and present yourself with confidence in everyday situations.",
      ru: "Добро пожаловать в основы коммуникации! Научитесь активно слушать, чётко говорить, читать язык тела и уверенно представлять себя в повседневных ситуациях."
    },
    sections: [
      {
        title: "Active Listening",
        titleRu: "Активное слушание",
        titleKk: "Белсенді тыңдау",
        content: "Active listening means fully concentrating on the speaker rather than passively hearing words. It involves making eye contact, nodding, and paraphrasing what was said to confirm understanding. Mastering this skill builds trust and prevents miscommunication.",
        contentRu: "Активное слушание означает полную концентрацию на говорящем, а не пассивное восприятие слов. Оно включает зрительный контакт, кивки и перефразирование сказанного для подтверждения понимания. Овладение этим навыком укрепляет доверие и предотвращает недопонимание.",
        contentKk: "Белсенді тыңдау — сөздерді енжар қабылдаудың орнына сөйлеушіге толық назар аудару. Ол көз контактісін сақтау, бас изеу және түсінуді растау үшін айтылғанды қайта баяндауды қамтиды. Бұл дағдыны меңгеру сенімді нығайтады және түсінбестікті болдырмайды.",
        keyFormulas: [
          {
            formula: "HEAR: Halt → Engage → Anticipate → Replay",
            formulaRu: "HEAR: Остановись → Включись → Предугадай → Повтори",
            formulaKk: "HEAR: Тоқта → Қатыс → Болжа → Қайтала",
            description: "Four-step active listening framework",
            descriptionRu: "Четырёхшаговая модель активного слушания",
            descriptionKk: "Белсенді тыңдаудың төрт қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your classmate is explaining why they are upset about a group project. Using the HEAR framework, what should you do?",
            questionRu: "Ваш одноклассник объясняет, почему расстроен из-за группового проекта. Используя модель HEAR, что вам следует сделать?",
            questionKk: "Сыныптасыңыз топтық жоба туралы неге ренжігенін түсіндіруде. HEAR моделін қолданып, не істеу керек?",
            steps: [
              { en: "Halt all distractions — put away your phone and face your classmate directly.", ru: "Уберите все отвлекающие факторы — отложите телефон и повернитесь к однокласснику.", kk: "Барлық алаңдататын нәрселерді тоқтатыңыз — телефонды жинап, сыныптасыңызға бетіңізді бұрыңыз." },
              { en: "Engage and Replay — nod as they speak, then say 'So you feel the workload was unfair?' to confirm understanding.", ru: "Вовлекитесь и повторите — кивайте, пока они говорят, затем скажите «Значит, ты считаешь, что нагрузка была несправедливой?».", kk: "Қатысыңыз және қайталаңыз — олар сөйлегенде бас изеңіз, содан кейін «Яғни жұмыс бөлінісі әділетсіз болды деп ойлайсың ба?» деңіз." }
            ],
            answer: "By halting distractions, engaging with eye contact and nodding, and replaying the main point, you show genuine understanding and build trust.",
            answerRu: "Прекратив отвлекаться, вовлекаясь через зрительный контакт и кивки и повторяя основную мысль, вы демонстрируете искреннее понимание и укрепляете доверие.",
            answerKk: "Алаңдатушылықты тоқтатып, көз контактісі мен бас изеу арқылы қатысып, негізгі ойды қайталау арқылы сіз шынайы түсінушілік танытып, сенімді нығайтасыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the 'R' in the HEAR framework stand for, and why is it important?",
            questionRu: "Что означает буква «R» в модели HEAR и почему это важно?",
            questionKk: "HEAR моделіндегі «R» әрпі нені білдіреді және неге маңызды?",
            answer: "Replay — repeating back what the speaker said in your own words to confirm you understood correctly.",
            answerRu: "Replay (повтор) — пересказ сказанного говорящим своими словами, чтобы подтвердить правильное понимание.",
            answerKk: "Replay (қайталау) — дұрыс түсінгеніңізді растау үшін сөйлеушінің айтқанын өз сөзіңізбен қайталап айту.",
            hint: "Think about what you do after listening to check your understanding.",
            hintRu: "Подумайте, что вы делаете после прослушивания, чтобы проверить понимание.",
            hintKk: "Тыңдағаннан кейін түсінуіңізді тексеру үшін не істейтініңізді ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A friend is talking to you but you realize you zoned out for 30 seconds. What active listening recovery strategy should you use?",
            questionRu: "Друг разговаривает с вами, но вы осознаёте, что отвлеклись на 30 секунд. Какую стратегию восстановления активного слушания следует применить?",
            questionKk: "Досыңыз сізбен сөйлесіп жатыр, бірақ 30 секунд бойы назарыңыз ауғанын түсінесіз. Қандай белсенді тыңдауды қалпына келтіру стратегиясын қолданасыз?",
            answer: "Honestly say 'I want to make sure I understand — could you repeat that last part?' This shows respect and keeps the conversation on track.",
            answerRu: "Честно скажите: «Я хочу убедиться, что правильно понял(а) — не могли бы вы повторить последнюю часть?» Это проявляет уважение и удерживает разговор в нужном русле.",
            answerKk: "Шыныменен айтыңыз: «Дұрыс түсінгеніме көз жеткізгім келеді — соңғы бөлікті қайталап бере аласыз ба?» Бұл құрметті білдіреді және әңгімені бағытында ұстайды.",
            hint: "It is better to admit you lost focus than to pretend you were listening.",
            hintRu: "Лучше признать потерю внимания, чем притворяться, что слушали.",
            hintKk: "Назар аудармағаныңызды мойындаған тыңдағандай болғаннан жақсы.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are in a study group where two members are arguing. Neither is listening to the other. Describe how you would use the HEAR framework to mediate.",
            questionRu: "Вы в учебной группе, где двое участников спорят. Никто не слушает другого. Опишите, как вы используете модель HEAR для посредничества.",
            questionKk: "Сіз оқу тобындасыз, мұнда екі мүше дауласуда. Ешқайсысы екіншісін тыңдамайды. HEAR моделін қолданып, қалай делдалдық жасайтыныңызды сипаттаңыз.",
            answer: "First, ask both to Halt and take turns speaking. Then have each person Engage by facing the other speaker. Ask each to Anticipate the other's feelings, then Replay what they heard. This forces mutual understanding before continuing the debate.",
            answerRu: "Сначала попросите обоих остановиться (Halt) и говорить по очереди. Затем пусть каждый вовлечётся (Engage), повернувшись лицом к собеседнику. Попросите каждого предугадать (Anticipate) чувства другого, а затем повторить (Replay) услышанное. Это обеспечивает взаимное понимание перед продолжением спора.",
            answerKk: "Алдымен екеуінен де тоқтап (Halt), кезекпен сөйлеуді сұраңыз. Содан кейін әрқайсысы (Engage) собеседникке бетін бұрып қатыссын. Әрқайсысынан екіншісінің сезімін болжауды (Anticipate) сұраңыз, содан кейін естігенін қайталасын (Replay). Бұл дауды жалғастырар алдында өзара түсіністікті қамтамасыз етеді.",
            hint: "Apply each HEAR step to both people, making them take turns.",
            hintRu: "Примените каждый шаг HEAR к обоим людям, заставив их говорить по очереди.",
            hintKk: "HEAR-дің әр қадамын екі адамға да қолданыңыз, оларды кезекпен сөйлетіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Clear Speaking",
        titleRu: "Чёткая речь",
        titleKk: "Анық сөйлеу",
        content: "Clear speaking means organizing your thoughts before you talk and using simple, direct language. A good speaker adjusts their pace and volume to suit the audience and situation. Practicing the PREP framework helps structure any message logically.",
        contentRu: "Чёткая речь означает упорядочивание мыслей перед разговором и использование простого, прямого языка. Хороший оратор регулирует темп и громкость в зависимости от аудитории и ситуации. Использование модели PREP помогает логически структурировать любое сообщение.",
        contentKk: "Анық сөйлеу — сөйлесу алдында ойларыңызды реттеу және қарапайым, тікелей тіл қолдану. Жақсы сөйлеуші қарқыны мен дауысын аудитория мен жағдайға бейімдейді. PREP моделін жаттықтыру кез келген хабарды логикалық құрылымдауға көмектеседі.",
        keyFormulas: [
          {
            formula: "PREP: Point → Reason → Example → Point (restate)",
            formulaRu: "PREP: Тезис → Причина → Пример → Тезис (повтор)",
            formulaKk: "PREP: Тезис → Себеп → Мысал → Тезис (қайталау)",
            description: "Framework for structuring a clear verbal message",
            descriptionRu: "Модель для структурирования чёткого устного сообщения",
            descriptionKk: "Анық ауызша хабарды құрылымдау моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Use the PREP model to explain why homework should be shorter.",
            questionRu: "Используйте модель PREP, чтобы объяснить, почему домашнее задание должно быть короче.",
            questionKk: "Үй тапсырмасы неге қысқа болу керектігін түсіндіру үшін PREP моделін қолданыңыз.",
            steps: [
              { en: "Point and Reason: 'Homework should be shorter because students need time for rest and extracurriculars to stay healthy.'", ru: "Тезис и причина: «Домашнее задание должно быть короче, потому что ученикам нужно время на отдых и внеклассные занятия для здоровья.»", kk: "Тезис және себеп: «Үй тапсырмасы қысқа болу керек, себебі оқушыларға денсаулық үшін демалыс пен қосымша сабақтарға уақыт қажет.»" },
              { en: "Example and Restate: 'For example, a Stanford study found shorter homework improved grades. So, reducing homework benefits both health and performance.'", ru: "Пример и повтор: «Например, исследование Стэнфорда показало, что сокращённое задание улучшило оценки. Итак, сокращение домашнего задания полезно для здоровья и успеваемости.»", kk: "Мысал және қайталау: «Мысалы, Стэнфорд зерттеуі қысқа тапсырма бағаларды жақсартқанын көрсетті. Демек, үй тапсырмасын қысқарту денсаулық пен үлгерімге пайдалы.»" }
            ],
            answer: "Point: Homework should be shorter. Reason: Students need rest time. Example: Stanford study showed improved grades. Point restated: Shorter homework benefits health and performance.",
            answerRu: "Тезис: Домашнее задание должно быть короче. Причина: Ученикам нужно время на отдых. Пример: Исследование Стэнфорда показало улучшение оценок. Повтор тезиса: Более короткое домашнее задание полезно для здоровья и успеваемости.",
            answerKk: "Тезис: Үй тапсырмасы қысқа болу керек. Себеп: Оқушыларға демалу уақыты қажет. Мысал: Стэнфорд зерттеуі бағалардың жақсарғанын көрсетті. Тезисті қайталау: Қысқа үй тапсырмасы денсаулық пен үлгерімге пайдалы."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What do the four letters in PREP stand for?",
            questionRu: "Что означают четыре буквы в модели PREP?",
            questionKk: "PREP моделіндегі төрт әріп нені білдіреді?",
            answer: "Point, Reason, Example, Point (restated).",
            answerRu: "Тезис, Причина, Пример, Тезис (повтор).",
            answerKk: "Тезис, Себеп, Мысал, Тезис (қайталау).",
            hint: "The first and last letters are the same.",
            hintRu: "Первая и последняя буквы одинаковые.",
            hintKk: "Бірінші және соңғы әріптер бірдей.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Use the PREP model to argue that schools should start later in the morning.",
            questionRu: "Используйте модель PREP, чтобы аргументировать, что занятия в школе должны начинаться позже утром.",
            questionKk: "Мектептер таңертең кешірек басталуы керек деп PREP моделімен дәлелдеңіз.",
            answer: "Point: Schools should start later. Reason: Teens need more sleep for brain development. Example: Schools that shifted to 8:30 AM saw fewer absences. Point: Therefore, later start times improve student wellbeing.",
            answerRu: "Тезис: Школы должны начинаться позже. Причина: Подросткам нужно больше сна для развития мозга. Пример: Школы, перешедшие на 8:30, отметили снижение пропусков. Тезис: Значит, более позднее начало занятий улучшает самочувствие учеников.",
            answerKk: "Тезис: Мектептер кешірек басталу керек. Себеп: Жасөспірімдерге ми дамуы үшін көбірек ұйқы қажет. Мысал: 8:30-ға көшкен мектептерде сабақ жіберу азайды. Тезис: Демек, кеш басталу оқушылардың жағдайын жақсартады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your teacher asks you to explain a complex topic — climate change — to a 5th grader in under one minute. How would you use PREP and what language adjustments would you make?",
            questionRu: "Учитель просит вас объяснить сложную тему — изменение климата — пятикласснику за одну минуту. Как бы вы использовали PREP и какие языковые корректировки сделали?",
            questionKk: "Мұғалім сізден күрделі тақырыпты — климат өзгерісін — 5-сыныптарға бір минутта түсіндіруді сұрайды. PREP-ті қалай қолданасыз және тілді қалай бейімдейсіз?",
            answer: "Use simple words, avoid jargon. Point: 'The Earth is getting warmer.' Reason: 'Because cars and factories release gases that trap heat.' Example: 'Like wearing too many blankets on a hot night.' Restate: 'So we need to reduce those gases to cool the Earth down.' Adjustments: short sentences, everyday comparisons, friendly tone.",
            answerRu: "Используйте простые слова, избегайте терминов. Тезис: «Земля становится теплее». Причина: «Потому что машины и заводы выделяют газы, удерживающие тепло». Пример: «Как будто надеть слишком много одеял в жаркую ночь». Повтор: «Поэтому нам нужно сократить эти газы, чтобы охладить Землю». Корректировки: короткие предложения, бытовые сравнения, дружелюбный тон.",
            answerKk: "Қарапайым сөздер қолданыңыз, терминдерден аулақ болыңыз. Тезис: «Жер жылынып жатыр». Себеп: «Себебі көліктер мен зауыттар жылуды ұстап тұратын газдар шығарады». Мысал: «Ыстық түнде тым көп жамылғы жамылғандай». Қайталау: «Сондықтан Жерді салқындату үшін осы газдарды азайту керек». Түзетулер: қысқа сөйлемдер, күнделікті салыстырулар, достық үн.",
            hint: "Think about what a younger student already knows and use comparisons they can relate to.",
            hintRu: "Подумайте, что младший ученик уже знает, и используйте понятные сравнения.",
            hintKk: "Кіші оқушы не білетінін ойлаңыз және олар түсінетін салыстыруларды қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Body Language",
        titleRu: "Язык тела",
        titleKk: "Дене тілі",
        content: "Body language includes facial expressions, gestures, posture, and eye contact that communicate without words. Research shows that over half of communication meaning comes from non-verbal cues. Learning to read and use body language makes you a more effective communicator.",
        contentRu: "Язык тела включает мимику, жесты, позу и зрительный контакт, которые передают информацию без слов. Исследования показывают, что более половины смысла общения передаётся невербальными сигналами. Умение читать и использовать язык тела делает вас более эффективным коммуникатором.",
        contentKk: "Дене тілі сөзсіз ақпарат беретін мимика, ым-ишара, дене қалпы және көз контактісін қамтиды. Зерттеулер қарым-қатынас мағынасының жартысынан көбі вербалды емес белгілерден келетінін көрсетеді. Дене тілін оқу және қолдану сізді тиімдірек коммуникатор етеді.",
        keyFormulas: [
          {
            formula: "Message = Words (7%) + Tone (38%) + Body Language (55%)",
            formulaRu: "Сообщение = Слова (7%) + Тон (38%) + Язык тела (55%)",
            formulaKk: "Хабарлама = Сөздер (7%) + Дауыс сазы (38%) + Дене тілі (55%)",
            description: "Mehrabian's communication model showing non-verbal dominance",
            descriptionRu: "Модель Меграбяна, показывающая доминирование невербального общения",
            descriptionKk: "Мехрабиан моделі — вербалды емес қатынастың басымдығын көрсетеді"
          },
          {
            formula: "OPEN posture: O(riented toward speaker) P(osture relaxed) E(ye contact) N(od occasionally)",
            formulaRu: "Поза OPEN: O(риентирована на собеседника) P(оза расслаблена) E(контакт глаз) N(кивки время от времени)",
            formulaKk: "OPEN позасы: O(сөйлеушіге бағытталған) P(поза еркін) E(көзбен байланыс) N(кейде бас изеу)",
            description: "Framework for approachable body language",
            descriptionRu: "Модель доступного языка тела",
            descriptionKk: "Қолжетімді дене тілінің моделі"
          }
        ],
        solvedExamples: [
          {
            question: "During a class presentation, you notice your audience members are crossing their arms and looking at the floor. What does this body language suggest and how should you respond?",
            questionRu: "Во время презентации вы замечаете, что слушатели скрещивают руки и смотрят в пол. Что означает этот язык тела и как вам реагировать?",
            questionKk: "Сынып презентациясы кезінде тыңдаушыларыңыздың қолдарын айқастырып, жерге қарап отырғанын байқайсыз. Бұл дене тілі нені білдіреді және қалай жауап беруіңіз керек?",
            steps: [
              { en: "Crossed arms and looking away typically signal disengagement or discomfort — the audience may be bored or confused.", ru: "Скрещённые руки и отведённый взгляд обычно означают отстранённость — аудитории может быть скучно или непонятно.", kk: "Айқасқан қолдар мен бұрылған көзқарас әдетте қызығушылықсыздықты білдіреді — аудитория зеріккен немесе түсінбеген болуы мүмкін." },
              { en: "Respond by changing your approach — ask a question, add a story, or move closer to re-engage their attention.", ru: "Измените подход — задайте вопрос, расскажите историю или подойдите ближе, чтобы вернуть внимание.", kk: "Тәсілді өзгертіңіз — сұрақ қойыңыз, оқиға айтыңыз немесе назарды қайтару үшін жақындаңыз." }
            ],
            answer: "Crossed arms and averted eyes suggest disengagement. Re-engage by asking a question, telling a brief story, or moving closer to the audience.",
            answerRu: "Скрещённые руки и отведённый взгляд говорят о потере вовлечённости. Верните внимание, задав вопрос, рассказав короткую историю или подойдя ближе к аудитории.",
            answerKk: "Айқасқан қолдар мен бұрылған көзқарас қызығушылықтың жоғалғанын білдіреді. Сұрақ қойып, қысқа оқиға айтып немесе аудиторияға жақындап назарды қайтарыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "According to Mehrabian's model, what percentage of communication comes from words alone?",
            questionRu: "Согласно модели Меграбяна, какой процент общения приходится только на слова?",
            questionKk: "Мехрабиан моделі бойынша қарым-қатынастың қанша пайызы тек сөздерден келеді?",
            answer: "7%",
            answerRu: "7%",
            answerKk: "7%",
            hint: "It is the smallest of the three components.",
            hintRu: "Это самая маленькая из трёх составляющих.",
            hintKk: "Бұл үш компоненттің ең кішісі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Name three positive body language signals you should use when meeting someone new.",
            questionRu: "Назовите три положительных сигнала языка тела при знакомстве с новым человеком.",
            questionKk: "Жаңа адаммен танысқанда қолданатын үш оң дене тілі белгісін атаңыз.",
            answer: "Smile genuinely, maintain comfortable eye contact, and offer a firm (not crushing) handshake with an open posture.",
            answerRu: "Искренне улыбайтесь, поддерживайте комфортный зрительный контакт и предложите крепкое (но не давящее) рукопожатие с открытой позой.",
            answerKk: "Шынайы күлімсіреңіз, ыңғайлы көз контактісін сақтаңыз және ашық дене қалпымен берік (бірақ қыспайтын) қол алысуды ұсыныңыз.",
            hint: "Think about the OPEN framework.",
            hintRu: "Вспомните модель OPEN.",
            hintKk: "OPEN моделін еске түсіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are giving a speech and notice one person smiling and nodding while another is frowning with arms crossed. How do you read these mixed signals and adjust your delivery for the whole room?",
            questionRu: "Вы выступаете с речью и замечаете, что один человек улыбается и кивает, а другой хмурится со скрещёнными руками. Как прочитать эти смешанные сигналы и адаптировать выступление?",
            questionKk: "Сіз сөз сөйлеп жатырсыз және бір адамның күлімсіреп бас изегенін, екіншісінің қабағын түйіп қолдарын айқастырғанын байқайсыз. Бұл аралас сигналдарды қалай оқып, баяндамаңызды бүкіл залға бейімдейсіз?",
            answer: "Do not focus only on the negative signals. The smiling person confirms your message works for some. For the frowning person, try engaging them directly with a question, add a concrete example to clarify your point, or adjust your tone to be more conversational. Mixed signals are normal in any audience — adapt without losing confidence.",
            answerRu: "Не сосредотачивайтесь только на негативных сигналах. Улыбающийся человек подтверждает, что ваше сообщение работает для кого-то. Для хмурящегося попробуйте вовлечь его напрямую вопросом, добавьте конкретный пример для пояснения или сделайте тон более разговорным. Смешанные сигналы — норма для любой аудитории — адаптируйтесь, не теряя уверенности.",
            answerKk: "Тек теріс сигналдарға назар аудармаңыз. Күлімсіреген адам хабарыңыздың кейбіреулерге әсер еткенін растайды. Қабағын түйген адам үшін оны сұрақпен тікелей тартуға тырысыңыз, ойыңызды нақтылау үшін нақты мысал қосыңыз немесе үніңізді жанданырақ етіңіз. Аралас сигналдар кез келген аудиторияда қалыпты жағдай — сенімділікті жоғалтпай бейімделіңіз.",
            hint: "Address the disengaged person without ignoring the engaged ones.",
            hintRu: "Обратитесь к незаинтересованному слушателю, не игнорируя заинтересованных.",
            hintKk: "Қызықпайтын тыңдаушыға назар аударыңыз, бірақ қызығушылары бар адамдарды елемеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Introducing Yourself",
        titleRu: "Самопрезентация",
        titleKk: "Өзін-өзі таныстыру",
        content: "A strong self-introduction creates a positive first impression and sets the tone for any interaction. The best introductions are brief, confident, and tailored to the context — a job fair introduction differs from a classroom one. Practicing a structured approach removes nervousness and makes introductions feel natural.",
        contentRu: "Хорошая самопрезентация создаёт положительное первое впечатление и задаёт тон для любого общения. Лучшие представления краткие, уверенные и адаптированные к контексту — представление на ярмарке вакансий отличается от классного. Практика структурированного подхода убирает нервозность.",
        contentKk: "Жақсы өзін-өзі таныстыру оң алғашқы әсер қалдырады және кез келген қарым-қатынастың тонын белгілейді. Ең жақсы таныстырулар қысқа, сенімді және контекстке бейімделген. Құрылымдық тәсілді жаттықтыру сенімсіздікті жояды.",
        keyFormulas: [
          {
            formula: "Elevator Pitch: Who you are + What you do/care about + Why it matters here",
            formulaRu: "Питч-визитка: Кто вы + Чем вы занимаетесь/что цените + Почему это важно здесь",
            formulaKk: "Лифт-питч: Сіз кімсіз + Немен айналысасыз/нені бағалайсыз + Бұл неге маңызды",
            description: "Three-part structure for a 30-second self-introduction",
            descriptionRu: "Трёхчастная структура 30-секундного представления",
            descriptionKk: "30 секундтық таныстырудың үш бөлімді құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "You are joining a new after-school club. Introduce yourself using the Elevator Pitch framework.",
            questionRu: "Вы вступаете в новый школьный клуб. Представьтесь, используя структуру Elevator Pitch.",
            questionKk: "Сіз жаңа мектеп клубына қосылудасыз. Elevator Pitch құрылымын қолданып өзіңізді таныстырыңыз.",
            steps: [
              { en: "Who you are: 'Hi, I'm Alex, an 8th grader who loves science and building things.'", ru: "Кто вы: «Привет, я Алекс, ученик 8 класса, который любит науку и мастерить.»", kk: "Сіз кімсіз: «Сәлем, мен Алекс, ғылым мен құрастыруды жақсы көретін 8-сынып оқушысымын.»" },
              { en: "What you care about + Why it matters: 'I'm really into robotics and joined this club because I want to learn how to program robots with a team.'", ru: "Что вам важно + Почему это здесь: «Я увлекаюсь робототехникой и пришёл в клуб, чтобы научиться программировать роботов в команде.»", kk: "Не маңызды + Неге осында: «Мен робототехникаға қызығамын және роботтарды командамен бағдарламалауды үйрену үшін клубқа қосылдым.»" }
            ],
            answer: "Hi, I'm Alex, an 8th grader who loves science and building things. I'm really into robotics and joined this club because I want to learn how to program robots with a team.",
            answerRu: "Привет, я Алекс, ученик 8 класса, который любит науку и мастерить. Я увлекаюсь робототехникой и вступил в этот клуб, потому что хочу научиться программировать роботов в команде.",
            answerKk: "Сәлем, мен Алекс, ғылым мен құрастыруды жақсы көретін 8-сынып оқушысымын. Мен робототехникаға қызығамын және роботтарды командамен бағдарламалауды үйрену үшін осы клубқа қосылдым."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of an Elevator Pitch introduction?",
            questionRu: "Каковы три части представления по модели Elevator Pitch?",
            questionKk: "Elevator Pitch таныстыруының үш бөлігі қандай?",
            answer: "Who you are, what you do or care about, and why it matters in this context.",
            answerRu: "Кто вы, чем вы занимаетесь или что вам важно, и почему это имеет значение в данном контексте.",
            answerKk: "Сіз кімсіз, немен айналысасыз немесе не маңызды, және бұл осы жағдайда неге маңызды екені.",
            hint: "Think: identity, passion, relevance.",
            hintRu: "Подумайте: личность, увлечение, актуальность.",
            hintKk: "Ойланыңыз: жеке тұлға, қызығушылық, өзектілік.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a 30-second introduction for yourself at a science fair.",
            questionRu: "Напишите 30-секундное представление себя на научной ярмарке.",
            questionKk: "Ғылыми жәрмеңкеде өзіңізді 30 секундта таныстырыңыз.",
            answer: "Example: 'Hi, I'm [Name], a student passionate about environmental science. I built a water filtration system from recycled materials, and I'm excited to share how simple engineering can solve real-world problems.'",
            answerRu: "Пример: «Привет, я [Имя], ученик(-ца), увлечённый(-ая) экологией. Я построил(а) систему фильтрации воды из переработанных материалов и рад(а) поделиться тем, как простая инженерия может решать реальные проблемы».",
            answerKk: "Мысал: «Сәлем, мен [Атыңыз], экологияға қызығатын оқушымын. Мен қайта өңделген материалдардан су сүзу жүйесін жасадым және қарапайым инженерияның нақты мәселелерді қалай шешетінін бөлісуге қуаныштымын».",
            hint: "Follow the Elevator Pitch formula and keep it under 4 sentences.",
            hintRu: "Следуйте формуле Elevator Pitch и уложитесь в 4 предложения.",
            hintKk: "Elevator Pitch формуласын ұстаныңыз және 4 сөйлемнен аспаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are introducing yourself to a group of students from another country who speak limited English. How would you adapt your Elevator Pitch for cross-cultural clarity?",
            questionRu: "Вы представляетесь группе учеников из другой страны с ограниченным знанием английского. Как адаптировать Elevator Pitch для межкультурной ясности?",
            questionKk: "Ағылшын тілін шектеулі білетін басқа елден келген оқушылар тобына өзіңізді таныстырудасыз. Elevator Pitch-ті мәдениетаралық түсінікті ету үшін қалай бейімдейсіз?",
            answer: "Use short, simple sentences. Avoid slang and idioms. Speak slowly and clearly. Add gestures or visuals. Smile warmly. Example: 'Hello! My name is [Name]. I like science. I made a water filter. It cleans dirty water.' Pause between sentences and check for understanding.",
            answerRu: "Используйте короткие, простые предложения. Избегайте сленга и идиом. Говорите медленно и чётко. Добавьте жесты или наглядные материалы. Тепло улыбайтесь. Пример: «Привет! Меня зовут [Имя]. Я люблю науку. Я сделал(а) фильтр для воды. Он очищает грязную воду». Делайте паузы между предложениями и проверяйте понимание.",
            answerKk: "Қысқа, қарапайым сөйлемдер қолданыңыз. Сленг пен идиомалардан аулақ болыңыз. Баяу әрі анық сөйлеңіз. Ым-ишара немесе көрнекі құралдар қосыңыз. Жылы күлімсіреңіз. Мысал: «Сәлем! Менің атым [Атыңыз]. Мен ғылымды жақсы көремін. Мен су сүзгісін жасадым. Ол лас суды тазартады». Сөйлемдер арасында үзіліс жасап, түсінгенін тексеріңіз.",
            hint: "Simplify vocabulary and use gestures to bridge language gaps.",
            hintRu: "Упростите лексику и используйте жесты для преодоления языкового барьера.",
            hintKk: "Сөздік қорды жеңілдетіңіз және тілдік кедергіні жеңу үшін ым-ишара қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Asking Questions",
        titleRu: "Умение задавать вопросы",
        titleKk: "Сұрақ қою",
        content: "Asking good questions is one of the most underrated communication skills. Open-ended questions invite detailed responses, while closed questions get quick facts. The Socratic method uses a chain of questions to deepen thinking and uncover assumptions.",
        contentRu: "Умение задавать хорошие вопросы — один из самых недооценённых навыков общения. Открытые вопросы приглашают к развёрнутым ответам, а закрытые — к быстрым фактам. Сократический метод использует цепочку вопросов для углубления мышления и выявления предположений.",
        contentKk: "Жақсы сұрақ қою — ең бағаланбайтын қарым-қатынас дағдыларының бірі. Ашық сұрақтар толық жауаптарға шақырады, ал жабық сұрақтар жылдам фактілер алады. Сократтық әдіс ойлауды тереңдету және болжамдарды ашу үшін сұрақтар тізбегін қолданады.",
        keyFormulas: [
          {
            formula: "Open vs Closed: 'What do you think about...?' (open) vs 'Did you like it?' (closed)",
            formulaRu: "Открытые и закрытые: «Что вы думаете о...?» (открытый) против «Вам понравилось?» (закрытый)",
            formulaKk: "Ашық және жабық: «...туралы не ойлайсыз?» (ашық) және «Ұнады ма?» (жабық)",
            description: "Open questions invite discussion; closed questions get yes/no answers",
            descriptionRu: "Открытые вопросы приглашают к дискуссии; закрытые требуют ответа да/нет",
            descriptionKk: "Ашық сұрақтар талқылауға шақырады; жабық сұрақтар иә/жоқ жауап алады"
          },
          {
            formula: "5W1H: Who, What, Where, When, Why, How",
            formulaRu: "5W1H: Кто, Что, Где, Когда, Почему, Как",
            formulaKk: "5W1H: Кім, Не, Қайда, Қашан, Неге, Қалай",
            description: "Six question types to explore any topic thoroughly",
            descriptionRu: "Шесть типов вопросов для полного изучения любой темы",
            descriptionKk: "Кез келген тақырыпты толық зерттеу үшін алты сұрақ түрі"
          }
        ],
        solvedExamples: [
          {
            question: "Your teacher explains a history event but you do not fully understand the cause. Use the 5W1H method to form one question.",
            questionRu: "Учитель объясняет историческое событие, но вы не полностью поняли причину. Используйте метод 5W1H, чтобы составить вопрос.",
            questionKk: "Мұғалім тарихи оқиғаны түсіндіреді, бірақ сіз себебін толық түсінбедіңіз. 5W1H әдісін қолданып сұрақ құрыңыз.",
            steps: [
              { en: "Identify the gap: you do not understand WHY the event happened — so choose 'Why' from 5W1H.", ru: "Определите пробел: вы не понимаете, ПОЧЕМУ событие произошло — выберите «Почему» из 5W1H.", kk: "Олқылықты анықтаңыз: оқиғаның НЕГЕ болғанын түсінбейсіз — 5W1H-тан «Неге» таңдаңыз." },
              { en: "Form an open question: 'Why did the industrial revolution start in Britain rather than in other European countries?'", ru: "Составьте открытый вопрос: «Почему промышленная революция началась в Британии, а не в других европейских странах?»", kk: "Ашық сұрақ құрыңыз: «Неліктен өнеркәсіп революциясы басқа еуропалық елдерде емес, Британияда басталды?»" }
            ],
            answer: "Why did the industrial revolution start in Britain rather than in other European countries? — This is an open-ended 'Why' question that invites a detailed explanation.",
            answerRu: "Почему промышленная революция началась в Британии, а не в других европейских странах? — Это открытый вопрос с «Почему», приглашающий к подробному объяснению.",
            answerKk: "Неліктен өнеркәсіп революциясы басқа еуропалық елдерде емес, Британияда басталды? — Бұл толық түсіндіруге шақыратын ашық «Неге» сұрағы."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Convert this closed question to an open one: 'Did you enjoy the field trip?'",
            questionRu: "Преобразуйте этот закрытый вопрос в открытый: «Тебе понравилась экскурсия?»",
            questionKk: "Бұл жабық сұрақты ашыққа айналдырыңыз: «Саған экскурсия ұнады ма?»",
            answer: "'What was the most interesting part of the field trip for you?' — This invites a detailed personal response.",
            answerRu: "«Что было самым интересным для тебя в этой экскурсии?» — Это приглашает к развёрнутому личному ответу.",
            answerKk: "«Экскурсияда сен үшін ең қызықты бөлігі не болды?» — Бұл толық жеке жауап беруге шақырады.",
            hint: "Start with 'What' or 'How' instead of 'Did'.",
            hintRu: "Начните с «Что» или «Как» вместо «Тебе».",
            hintKk: "«Ұнады ма?» орнына «Не» немесе «Қалай» деп бастаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are interviewing a local business owner for a school project. Write three questions using different 5W1H types.",
            questionRu: "Вы берёте интервью у владельца бизнеса для школьного проекта. Напишите три вопроса, используя разные типы из 5W1H.",
            questionKk: "Мектеп жобасы үшін жергілікті кәсіпкермен сұхбат жүргізесіз. 5W1H-тің әртүрлі типтерін қолданып үш сұрақ жазыңыз.",
            answer: "What inspired you to start your business? (What) When did you realize it would be successful? (When) How do you handle challenges during tough economic times? (How)",
            answerRu: "Что вдохновило вас начать свой бизнес? (Что) Когда вы поняли, что он будет успешным? (Когда) Как вы справляетесь с трудностями в тяжёлые экономические времена? (Как)",
            answerKk: "Сізді бизнес бастауға не шабыттандырды? (Не) Оның табысты болатынын қашан түсіндіңіз? (Қашан) Қиын экономикалық кезеңдерде қиындықтарды қалай шешесіз? (Қалай)",
            hint: "Pick three different question words from 5W1H and make each question open-ended.",
            hintRu: "Выберите три разных вопросительных слова из 5W1H и сделайте каждый вопрос открытым.",
            hintKk: "5W1H-тан үш түрлі сұрақ сөзін таңдап, әрқайсысын ашық сұрақ жасаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A classmate presents an argument that 'social media is entirely harmful for teens.' Use Socratic questioning to challenge this claim with three progressive questions.",
            questionRu: "Одноклассник утверждает, что «соцсети полностью вредны для подростков». Используйте сократические вопросы, чтобы оспорить это утверждение тремя последовательными вопросами.",
            questionKk: "Сыныптасыңыз «әлеуметтік желілер жасөспірімдерге толығымен зиянды» деп дәлелдейді. Бұл пікірді үш прогрессивті сұрақпен сократтық сұраумен жоққа шығарыңыз.",
            answer: "1) 'What evidence are you basing that on — have studies shown it is 100% harmful?' (challenges evidence) 2) 'Can you think of any ways social media has helped teens, such as connecting with support communities?' (explores counterexamples) 3) 'If social media has both benefits and risks, could the real issue be how we use it rather than the platform itself?' (reveals assumption)",
            answerRu: "1) «На каких данных вы это основываете — есть ли исследования, доказывающие 100% вред?» (оспаривает доказательства) 2) «Можете ли вы вспомнить способы, которыми соцсети помогли подросткам, например, связь с сообществами поддержки?» (ищет контрпримеры) 3) «Если у соцсетей есть и польза, и риски, может быть, настоящая проблема — в том, как мы их используем, а не в самой платформе?» (раскрывает предположение)",
            answerKk: "1) «Мұны қандай дәлелге сүйеніп айтып тұрсың — оның 100% зиянды екенін дәлелдейтін зерттеулер бар ма?» (дәлелді сынайды) 2) «Әлеуметтік желілер жасөспірімдерге көмектескен жағдайларды, мысалы, қолдау қауымдастықтарымен байланысты, еске түсіре аласың ба?» (қарсы мысалдарды іздейді) 3) «Егер әлеуметтік желілердің пайдасы да, қаупі де болса, шын мәселе платформаның өзінде емес, оны қалай пайдаланатынымызда болуы мүмкін бе?» (болжамды ашады)",
            hint: "Each question should go deeper — first challenge the evidence, then offer a counter-example, then question the underlying assumption.",
            hintRu: "Каждый вопрос должен идти глубже — сначала оспорьте доказательства, затем предложите контрпример, затем подвергните сомнению предположение.",
            hintKk: "Әр сұрақ тереңірек болуы керек — алдымен дәлелді сынаңыз, содан кейін қарсы мысал ұсыныңыз, содан кейін болжамды сұраңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Group Discussions",
        titleRu: "Групповые дискуссии",
        titleKk: "Топтық талқылаулар",
        content: "Group discussions require balancing speaking and listening so every member can contribute. Effective groups assign roles like facilitator, note-taker, and timekeeper to stay organized. Using structured turn-taking prevents dominant voices from overshadowing quieter members.",
        contentRu: "Групповые дискуссии требуют баланса между говорением и слушанием, чтобы каждый мог внести вклад. Эффективные группы распределяют роли: ведущий, секретарь и хронометрист. Структурированная очерёдность не позволяет доминирующим голосам заглушать тихих участников.",
        contentKk: "Топтық талқылаулар әр мүше үлес қоса алуы үшін сөйлеу мен тыңдау арасындағы тепе-теңдікті талап етеді. Тиімді топтар ұйымдастырушы, хатшы және уақытшы сияқты рөлдерді бөледі. Құрылымдық кезектілік басым дауыстардың тыныш мүшелерді басып кетуіне жол бермейді.",
        keyFormulas: [
          {
            formula: "Round Robin: Each person speaks in turn for a set time before open discussion",
            formulaRu: "Round Robin: Каждый говорит по очереди в течение заданного времени перед открытым обсуждением",
            formulaKk: "Round Robin: Ашық талқылауға дейін әрбір адам белгілі уақыт бойы кезекпен сөйлейді",
            description: "Structured turn-taking technique ensuring equal participation",
            descriptionRu: "Техника структурированной очерёдности, обеспечивающая равное участие",
            descriptionKk: "Тең қатысуды қамтамасыз ететін құрылымдық кезектілік техникасы"
          }
        ],
        solvedExamples: [
          {
            question: "Your group of five is planning a class event but two people dominate the conversation. How would you use Round Robin to fix this?",
            questionRu: "Ваша группа из пяти человек планирует классное мероприятие, но двое доминируют в разговоре. Как использовать Round Robin?",
            questionKk: "Бесеуіңіз сынып іс-шарасын жоспарлап жатырсыздар, бірақ екеуі сөйлесуде басым. Round Robin-ді қалай қолданасыз?",
            steps: [
              { en: "Propose the rule: each person gets 1 minute to share their idea uninterrupted, going clockwise around the table.", ru: "Предложите правило: каждый получает 1 минуту для изложения идеи без перебивания, по часовой стрелке.", kk: "Ереже ұсыныңыз: әрқайсысы сағат тілі бойынша 1 минут бойы ойын бөлінбей айтады." },
              { en: "After all five have spoken, open the floor for free discussion on the ideas that were shared.", ru: "После выступления всех пятерых откройте свободную дискуссию по предложенным идеям.", kk: "Бесеуі де сөйлегеннен кейін айтылған идеялар бойынша еркін талқылау ашыңыз." }
            ],
            answer: "Use Round Robin: give each person 1 minute to speak in turn, then open free discussion. This ensures all five voices are heard equally before debate begins.",
            answerRu: "Используйте Round Robin: дайте каждому по 1 минуте высказаться по очереди, затем начните свободное обсуждение. Это гарантирует, что все пять голосов будут услышаны на равных до начала дебатов.",
            answerKk: "Round Robin қолданыңыз: әрқайсысына кезекпен сөйлеуге 1 минут беріп, содан кейін еркін талқылау бастаңыз. Бұл дау басталар алдында бес адамның да пікірі тең түрде тыңдалуын қамтамасыз етеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three useful roles to assign in a group discussion.",
            questionRu: "Назовите три полезные роли в групповой дискуссии.",
            questionKk: "Топтық талқылаудағы үш пайдалы рөлді атаңыз.",
            answer: "Facilitator (keeps discussion on track), note-taker (records key points), and timekeeper (ensures fair time distribution).",
            answerRu: "Ведущий (удерживает дискуссию в русле), секретарь (фиксирует ключевые моменты) и хронометрист (следит за справедливым распределением времени).",
            answerKk: "Ұйымдастырушы (талқылауды бағытында ұстайды), хатшы (негізгі ойларды жазады) және уақытшы (уақытты әділ бөлуді қамтамасыз етеді).",
            hint: "Think about who guides, who records, and who watches the clock.",
            hintRu: "Подумайте: кто ведёт, кто записывает и кто следит за временем.",
            hintKk: "Кім басқарады, кім жазады және кім уақытты бақылайды деп ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During a group discussion, one member has not spoken at all. As the facilitator, how do you include them without putting them on the spot?",
            questionRu: "Во время дискуссии один участник совсем не говорил. Как ведущий, как вы включите его, не ставя в неловкое положение?",
            questionKk: "Талқылау кезінде бір мүше мүлде сөйлемеді. Ұйымдастырушы ретінде оны ыңғайсыз жағдайға қоймай қалай қосасыз?",
            answer: "Use a gentle invitation: 'We'd love to hear your perspective on this — do you have any thoughts to add?' This gives them an opening without forcing an immediate answer.",
            answerRu: "Используйте мягкое приглашение: «Нам было бы интересно узнать твоё мнение — хочешь что-то добавить?» Это даёт возможность высказаться, не заставляя отвечать немедленно.",
            answerKk: "Жұмсақ шақыру қолданыңыз: «Сенің пікіріңді естігіміз келеді — қосатын ойың бар ма?» Бұл дереу жауап беруге мәжбүрлемей, мүмкіндік береді.",
            hint: "Use an inviting question rather than a direct 'What do you think?'",
            hintRu: "Используйте приглашающий вопрос, а не прямое «Что ты думаешь?»",
            hintKk: "Тікелей «Не ойлайсың?» орнына шақырушы сұрақ қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your group must decide between two event ideas and opinions are split 3-2. How do you facilitate a fair decision without the minority feeling unheard?",
            questionRu: "Группа должна выбрать между двумя идеями, мнения разделились 3 к 2. Как провести справедливое решение, чтобы меньшинство не чувствовало себя неуслышанным?",
            questionKk: "Топ екі идея арасында таңдау жасауы керек, пікірлер 3-2 болып бөлінді. Азшылық тыңдалмады деп сезінбеуі үшін әділ шешімді қалай қабылдайсыз?",
            answer: "First, let the minority fully explain their concerns. Then explore if elements of their idea can be merged with the majority choice. If not, acknowledge their input, explain why the group is going with the majority, and give them a meaningful role in executing the chosen plan. This validates their contribution even when their idea was not selected.",
            answerRu: "Сначала дайте меньшинству полностью объяснить свои опасения. Затем изучите, можно ли объединить элементы их идеи с выбором большинства. Если нет, признайте их вклад, объясните, почему группа выбирает мнение большинства, и дайте им значимую роль в реализации выбранного плана. Это подтверждает ценность их вклада, даже если их идея не была выбрана.",
            answerKk: "Алдымен азшылыққа өз алаңдаушылығын толық түсіндіруге мүмкіндік беріңіз. Содан кейін олардың идеясының элементтерін көпшіліктің таңдауымен біріктіруге бола ма, соны қараңыз. Болмаса, олардың үлесін мойындаңыз, топтың неге көпшілік пікіріне жүгінетінін түсіндіріңіз және таңдалған жоспарды жүзеге асыруда оларға маңызды рөл беріңіз. Бұл идеясы таңдалмаса да, олардың үлесін растайды.",
            hint: "Combine active listening with compromise — can you merge the best parts of both ideas?",
            hintRu: "Сочетайте активное слушание с компромиссом — можно ли объединить лучшие части обеих идей?",
            hintKk: "Белсенді тыңдауды ымыраға қосыңыз — екі идеяның ең жақсы бөліктерін біріктіруге бола ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Giving Feedback",
        titleRu: "Обратная связь",
        titleKk: "Кері байланыс беру",
        content: "Giving feedback is about helping someone improve, not criticizing them. The Feedback Sandwich places constructive criticism between two positive observations to make it easier to receive. Good feedback is specific, actionable, and focused on behavior rather than personality.",
        contentRu: "Обратная связь — это помощь в улучшении, а не критика. «Сэндвич обратной связи» помещает конструктивную критику между двумя положительными наблюдениями. Хорошая обратная связь конкретна, практична и сфокусирована на поведении, а не на личности.",
        contentKk: "Кері байланыс беру — біреуге жақсаруға көмектесу, сынау емес. Кері байланыс сэндвичі конструктивті сынды екі оң бақылаудың арасына орналастырады. Жақсы кері байланыс нақты, іс-әрекетке бағытталған және мінезге емес, мінез-құлыққа бағытталған.",
        keyFormulas: [
          {
            formula: "Feedback Sandwich: Positive → Constructive criticism → Positive",
            formulaRu: "Сэндвич обратной связи: Позитив → Конструктивная критика → Позитив",
            formulaKk: "Кері байланыс сэндвичі: Оң пікір → Сындарлы сын → Оң пікір",
            description: "Structure for delivering criticism in a supportive way",
            descriptionRu: "Структура для подачи критики в поддерживающей форме",
            descriptionKk: "Сынды қолдау түрінде беру құрылымы"
          },
          {
            formula: "SBI: Situation → Behavior → Impact",
            formulaRu: "SBI: Ситуация → Поведение → Влияние",
            formulaKk: "SBI: Жағдай → Мінез-құлық → Әсер",
            description: "Framework for specific, non-personal feedback",
            descriptionRu: "Модель для конкретной, безличной обратной связи",
            descriptionKk: "Нақты, жеке емес кері байланыс моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your classmate gave a presentation with great visuals but spoke too fast. Use the Feedback Sandwich to respond.",
            questionRu: "Одноклассник сделал презентацию с отличными визуалами, но говорил слишком быстро. Используйте Feedback Sandwich.",
            questionKk: "Сыныптасыңыз тамаша визуалды презентация жасады, бірақ тым жылдам сөйледі. Feedback Sandwich қолданыңыз.",
            steps: [
              { en: "Positive: 'Your slides were visually stunning and really helped illustrate your points.'", ru: "Положительное: «Твои слайды были визуально впечатляющими и отлично иллюстрировали твои мысли.»", kk: "Оң: «Слайдтарыңыз көрнекі тұрғыдан тамаша болды және ойларыңызды жақсы көрсетті.»" },
              { en: "Constructive + Positive: 'If you slow down a bit, the audience will absorb your ideas better. Overall, it was one of the most engaging presentations in our class!'", ru: "Конструктив + Положительное: «Если немного замедлишь темп, аудитория лучше усвоит идеи. В целом это была одна из лучших презентаций!»", kk: "Конструктивті + Оң: «Сәл баяулатсаңыз, аудитория идеяларыңызды жақсырақ қабылдайды. Жалпы, бұл сыныптағы ең қызықты презентациялардың бірі болды!»" }
            ],
            answer: "Positive: Great visuals. Constructive: Slow down your speaking pace for better audience absorption. Positive: One of the most engaging presentations overall.",
            answerRu: "Положительное: Отличные визуалы. Конструктив: Замедли темп речи, чтобы аудитория лучше усваивала. Положительное: В целом одна из самых увлекательных презентаций.",
            answerKk: "Оң: Тамаша визуалдар. Конструктивті: Аудитория жақсырақ қабылдауы үшін сөйлеу қарқынын баяулатыңыз. Оң: Жалпы алғанда ең қызықты презентациялардың бірі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three layers of a Feedback Sandwich?",
            questionRu: "Каковы три слоя «сэндвича обратной связи»?",
            questionKk: "Кері байланыс сэндвичінің үш қабаты қандай?",
            answer: "Positive observation, constructive criticism, positive observation.",
            answerRu: "Положительное наблюдение, конструктивная критика, положительное наблюдение.",
            answerKk: "Оң бақылау, конструктивті сын, оң бақылау.",
            hint: "Think of bread (positive) on top and bottom with filling (criticism) in the middle.",
            hintRu: "Представьте хлеб (положительное) сверху и снизу, а начинку (критику) посередине.",
            hintKk: "Нан (оң) үстінде және астында, толтырғыш (сын) ортасында деп елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Use the SBI model to give feedback to a teammate who interrupted others during a group meeting.",
            questionRu: "Используйте модель SBI, чтобы дать обратную связь товарищу, который перебивал других на групповой встрече.",
            questionKk: "Топтық жиналыста басқалардың сөзін бөлген командаласыңызға SBI моделімен кері байланыс беріңіз.",
            answer: "Situation: 'During today's group meeting...' Behavior: '...you interrupted Maria twice while she was explaining her idea.' Impact: 'This made her lose her train of thought and she seemed discouraged from sharing further.'",
            answerRu: "Ситуация: «Во время сегодняшней групповой встречи...» Поведение: «...ты дважды перебил(а) Марию, пока она объясняла свою идею.» Влияние: «Из-за этого она потеряла нить мысли и, похоже, была обескуражена продолжать делиться идеями.»",
            answerKk: "Жағдай: «Бүгінгі топтық жиналыс кезінде...» Мінез-құлық: «...сен Марияның идеясын түсіндіріп жатқанда оны екі рет бөлдің.» Әсер: «Бұл оның ой жүйесін жоғалтуына әкелді және ол әрі қарай бөлісуден жасқанғандай көрінді.»",
            hint: "Describe the specific moment, the exact behavior, and its effect on others.",
            hintRu: "Опишите конкретный момент, точное поведение и его влияние на других.",
            hintKk: "Нақты сәтті, дәл мінез-құлықты және оның басқаларға әсерін сипаттаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A friend asks for honest feedback on their essay but gets defensive when you mention areas for improvement. How do you handle this while preserving the friendship and still being helpful?",
            questionRu: "Друг просит честную оценку эссе, но занимает оборонительную позицию, когда вы упоминаете области для улучшения. Как быть честным, сохранив дружбу?",
            questionKk: "Досыңыз эссесіне шынайы баға беруді сұрайды, бірақ жақсарту аймақтарын айтқанда қорғаныс позициясына тұрады. Достықты сақтай отырып, қалай пайдалы бола аласыз?",
            answer: "First, acknowledge their effort: 'I can see you put a lot of work into this.' Then ask permission: 'Would you like me to focus on strengths first or dive into suggestions?' Use SBI for specific feedback and always tie criticism to their goals: 'Since you want an A, strengthening the thesis will help.' End by affirming your support: 'I'm telling you this because I believe in your ability to make it even better.'",
            answerRu: "Сначала признайте их усилия: «Я вижу, ты вложил(а) в это много труда.» Затем спросите разрешения: «Хочешь, я сначала отмечу сильные стороны или сразу перейду к предложениям?» Используйте SBI для конкретной обратной связи и всегда связывайте критику с их целями: «Раз ты хочешь получить пятёрку, усиление тезиса поможет.» Завершите подтверждением поддержки: «Я говорю тебе это, потому что верю, что ты можешь сделать это ещё лучше.»",
            answerKk: "Алдымен күш-жігерін мойындаңыз: «Мұған көп еңбек сіңіргеніңді көріп тұрмын.» Содан кейін рұқсат сұраңыз: «Алдымен күшті жақтарын айтайын ба, әлде тікелей ұсыныстарға көшейік пе?» Нақты кері байланыс үшін SBI қолданыңыз және сынды әрқашан олардың мақсаттарымен байланыстырыңыз: «Ең жоғары бағаны алғың келсе, тезисті күшейту көмектеседі.» Қолдауыңызды растап аяқтаңыз: «Мен мұны саған оны одан да жақсы жасай алатыныңа сенгендіктен айтып тұрмын.»",
            hint: "Ask permission before giving criticism, and connect your suggestions to their goals.",
            hintRu: "Спросите разрешения перед критикой и свяжите предложения с их целями.",
            hintKk: "Сынау алдында рұқсат сұраңыз және ұсыныстарыңызды олардың мақсаттарымен байланыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Storytelling Basics",
        titleRu: "Основы сторителлинга",
        titleKk: "Әңгіме айту негіздері",
        content: "Storytelling transforms dry information into memorable messages by creating emotional connections. Every good story follows a structure: a relatable character faces a challenge and reaches a resolution. Even in school presentations, weaving in a short story makes your point stick.",
        contentRu: "Сторителлинг превращает сухую информацию в запоминающиеся сообщения, создавая эмоциональную связь. Каждая хорошая история следует структуре: понятный герой сталкивается с вызовом и приходит к решению. Даже в школьных презентациях короткая история делает вашу мысль запоминающейся.",
        contentKk: "Әңгіме айту құрғақ ақпаратты эмоциялық байланыс жасау арқылы есте қаларлық хабарларға айналдырады. Әр жақсы әңгіме құрылымға сәйкес: танысу оңай кейіпкер қиындыққа тап болып, шешімге жетеді. Мектеп презентацияларында да қысқа әңгіме ойыңызды есте қалдырады.",
        keyFormulas: [
          {
            formula: "Story Arc: Setup (character + setting) → Conflict (challenge) → Resolution (outcome + lesson)",
            formulaRu: "Сюжетная арка: Завязка (герой + место действия) → Конфликт (испытание) → Развязка (итог + урок)",
            formulaKk: "Сюжеттік арка: Бастама (кейіпкер + орта) → Қақтығыс (сын-қатер) → Шешім (нәтиже + сабақ)",
            description: "Three-part narrative structure for any story",
            descriptionRu: "Трёхчастная нарративная структура для любой истории",
            descriptionKk: "Кез келген әңгіме үшін үш бөлімді баяндау құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "You need to explain the importance of recycling to your class. Build a mini-story using the Story Arc.",
            questionRu: "Вам нужно объяснить классу важность переработки. Постройте мини-историю с помощью Story Arc.",
            questionKk: "Сыныпқа қайта өңдеудің маңыздылығын түсіндіру керек. Story Arc арқылы шағын әңгіме құрыңыз.",
            steps: [
              { en: "Setup: 'Last summer, my neighborhood had trash piling up because the recycling bins were removed.'", ru: "Завязка: «Прошлым летом в моём районе скопился мусор, потому что убрали контейнеры для переработки.»", kk: "Кіріспе: «Өткен жазда көршілігімде қайта өңдеу контейнерлерін алып тастағаннан кейін қоқыс үйіліп қалды.»" },
              { en: "Conflict + Resolution: 'Residents organized a petition and got new bins installed. Within a month, streets were clean again — proving that small community action makes a big difference.'", ru: "Конфликт + Развязка: «Жители организовали петицию и добились установки новых контейнеров. Через месяц улицы снова стали чистыми — доказав, что небольшое действие сообщества имеет большое значение.»", kk: "Қақтығыс + Шешім: «Тұрғындар петиция ұйымдастырып, жаңа контейнерлер орнатты. Бір айда көшелер таза болды — кішкентай қоғамдастық іс-әрекеттің үлкен маңызы бар екенін дәлелдеді.»" }
            ],
            answer: "Setup: Trash piled up after bins were removed. Conflict: Community was frustrated. Resolution: A petition restored bins and streets became clean — showing collective action works.",
            answerRu: "Завязка: Мусор скопился после того, как убрали контейнеры. Конфликт: Жители были разочарованы. Развязка: Петиция вернула контейнеры, и улицы стали чистыми — доказав, что коллективные действия работают.",
            answerKk: "Кіріспе: Контейнерлерді алып тастағаннан кейін қоқыс үйілді. Қақтығыс: Қоғамдастық көңілі қалды. Шешім: Петиция контейнерлерді қайтарды және көшелер таза болды — бұл ұжымдық іс-әрекеттің тиімді екенін көрсетті."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of a Story Arc?",
            questionRu: "Каковы три части Story Arc?",
            questionKk: "Story Arc-тың үш бөлігі қандай?",
            answer: "Setup (character + setting), Conflict (challenge), Resolution (outcome + lesson).",
            answerRu: "Завязка (герой + место действия), Конфликт (испытание), Развязка (итог + урок).",
            answerKk: "Кіріспе (кейіпкер + орта), Қақтығыс (қиындық), Шешім (нәтиже + сабақ).",
            hint: "Think: beginning, middle, end.",
            hintRu: "Подумайте: начало, середина, конец.",
            hintKk: "Ойланыңыз: басы, ортасы, соңы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Turn this fact into a mini-story: '60% of food waste comes from households.'",
            questionRu: "Превратите этот факт в мини-историю: «60% пищевых отходов приходится на домохозяйства.»",
            questionKk: "Бұл фактіні шағын әңгімеге айналдырыңыз: «Тағам қалдықтарының 60%-ы үй шаруашылықтарынан келеді.»",
            answer: "Setup: 'My family used to throw away leftovers every night.' Conflict: 'One week I weighed our food waste — it was 3 kg.' Resolution: 'We started meal planning and cut waste in half, saving money and helping the planet.'",
            answerRu: "Завязка: «Моя семья раньше каждый вечер выбрасывала остатки еды.» Конфликт: «Однажды я взвесил(а) наши пищевые отходы — вышло 3 кг.» Развязка: «Мы начали планировать питание и сократили отходы вдвое, сэкономив деньги и помогая планете.»",
            answerKk: "Кіріспе: «Менің отбасым бұрын әр кеші тағам қалдықтарын лақтыратын.» Қақтығыс: «Бір аптада тағам қалдықтарын өлшедім — 3 кг болды.» Шешім: «Біз тамақтануды жоспарлай бастадық және қалдықты екі есе азайттық, ақша үнемдеп, планетаға көмектесіп.»",
            hint: "Make it personal — use a character (you or your family) facing the problem.",
            hintRu: "Сделайте историю личной — используйте персонажа (вас или семью), столкнувшегося с проблемой.",
            hintKk: "Жеке етіңіз — мәселеге тап болған кейіпкерді (өзіңізді немесе отбасыңызды) қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are presenting a science project on climate change. Craft a 4-sentence story that makes the data feel personal and memorable to your classmates.",
            questionRu: "Вы презентуете научный проект по изменению климата. Создайте историю из 4 предложений, которая сделает данные личными и запоминающимися.",
            questionKk: "Сіз климат өзгерісі бойынша ғылыми жобаны презентациялап жатырсыз. Деректерді жеке және есте қаларлық ететін 4 сөйлемді әңгіме жазыңыз.",
            answer: "Setup: 'My grandmother tells me that the lake near her village used to freeze solid every winter.' Conflict: 'Last year, for the first time in her 70 years, the lake did not freeze at all.' Resolution: 'Scientists confirm the region has warmed 2 degrees in her lifetime. If we act now, my future grandchildren might still see that frozen lake.'",
            answerRu: "Завязка: «Моя бабушка рассказывает, что озеро возле её деревни раньше каждую зиму полностью замерзало.» Конфликт: «В прошлом году, впервые за её 70 лет, озеро вообще не замёрзло.» Развязка: «Учёные подтверждают, что регион потеплел на 2 градуса за её жизнь. Если мы будем действовать сейчас, мои будущие внуки, возможно, ещё увидят это замёрзшее озеро.»",
            answerKk: "Кіріспе: «Әжем оның ауылы маңындағы көл бұрын әр қыста толық қататынын айтады.» Қақтығыс: «Былтыр, оның 70 жылында алғаш рет, көл мүлдем қатпады.» Шешім: «Ғалымдар аймақтың оның өмірінде 2 градусқа жылынғанын растайды. Егер біз қазір іс-әрекет етсек, менің болашақ немерелерім сол қатқан көлді әлі де көруі мүмкін.»",
            hint: "Connect climate data to a real person's experience across time.",
            hintRu: "Свяжите данные о климате с реальным опытом человека во времени.",
            hintKk: "Климат деректерін нақты адамның уақыт бойынша тәжірибесімен байланыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Written Communication",
        titleRu: "Письменная коммуникация",
        titleKk: "Жазбаша қарым-қатынас",
        content: "Written communication must be clear, concise, and well-organized because readers cannot ask for instant clarification. Good writing follows a logical structure: introduction, body, conclusion. Proofreading before sending ensures your message is professional and error-free.",
        contentRu: "Письменная коммуникация должна быть ясной, краткой и хорошо организованной, потому что читатель не может мгновенно уточнить. Хорошее письмо следует логической структуре: введение, основная часть, заключение. Проверка перед отправкой гарантирует профессиональность и отсутствие ошибок.",
        contentKk: "Жазбаша қарым-қатынас анық, қысқа және жақсы ұйымдастырылған болуы керек, себебі оқырман бірден нақтылай алмайды. Жақсы жазу логикалық құрылымға сәйкес: кіріспе, негізгі бөлім, қорытынды. Жіберу алдында тексеру хабарыңыздың кәсіби және қатесіз болуын қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "CLEAR writing: C(oncise) L(ogical) E(rror-free) A(udience-aware) R(eadable)",
            formulaRu: "Письмо CLEAR: C(лаконично) L(огично) E(без ошибок) A(с учётом аудитории) R(читабельно)",
            formulaKk: "CLEAR жазу: C(қысқа) L(логикалы) E(қатесіз) A(аудиторияны ескерген) R(оқуға ыңғайлы)",
            description: "Five qualities of effective written communication",
            descriptionRu: "Пять качеств эффективной письменной коммуникации",
            descriptionKk: "Тиімді жазбаша қарым-қатынастың бес сапасы"
          }
        ],
        solvedExamples: [
          {
            question: "Rewrite this messy note to a teacher using the CLEAR framework: 'hey i cant come to class tomorrow cuz my mom has a thing and i need to go with her can u send me the homework plz thx'",
            questionRu: "Перепишите эту записку учителю, используя модель CLEAR: «привет я не смогу прийти завтра потому что у мамы дело и мне надо с ней можете прислать дз пж спс»",
            questionKk: "Бұл жазбаны CLEAR моделімен мұғалімге қайта жазыңыз: «сәлем мен ертең сабаққа келе алмаймын себебі анамның ісі бар маған онымен бару керек үй тапсырмасын жібере аласыз ба рахмет»",
            steps: [
              { en: "Identify the problems: informal greeting, no structure, abbreviations, missing punctuation.", ru: "Выявите проблемы: неформальное приветствие, нет структуры, сокращения, отсутствие пунктуации.", kk: "Мәселелерді анықтаңыз: бейресми сәлемдесу, құрылым жоқ, қысқартулар, тыныс белгілері жоқ." },
              { en: "Rewrite: 'Dear Ms. Smith, I will be absent from class tomorrow due to a family appointment. Could you please share any homework or materials I will miss? Thank you for your understanding. — [Your Name]'", ru: "Перепишите: «Уважаемая г-жа Смит, я буду отсутствовать на занятии завтра по семейным обстоятельствам. Не могли бы вы прислать домашнее задание? Спасибо за понимание. — [Ваше имя]»", kk: "Қайта жазыңыз: «Құрметті Смит ханым, мен ертең отбасылық іс бойынша сабаққа келе алмаймын. Үй тапсырмасын жібере аласыз ба? Түсіністігіңізге рахмет. — [Атыңыз]»" }
            ],
            answer: "Dear Ms. Smith, I will be absent from class tomorrow due to a family appointment. Could you please share any homework or materials I will miss? Thank you for your understanding.",
            answerRu: "Уважаемая г-жа Смит, завтра я буду отсутствовать на занятии по семейным обстоятельствам. Не могли бы вы прислать домашнее задание или материалы, которые я пропущу? Спасибо за понимание.",
            answerKk: "Құрметті Смит ханым, ертең мен отбасылық іс бойынша сабаққа қатыса алмаймын. Өткізіп алатын үй тапсырмасын немесе материалдарды жібере аласыз ба? Түсіністігіңізге рахмет."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the 'A' in CLEAR writing stand for?",
            questionRu: "Что означает буква «A» в модели CLEAR?",
            questionKk: "CLEAR моделіндегі «A» әрпі нені білдіреді?",
            answer: "Audience-aware — writing should be tailored to who will read it.",
            answerRu: "Учёт аудитории — текст должен быть адаптирован под того, кто его будет читать.",
            answerKk: "Аудиторияны ескеру — жазба оны оқитын адамға бейімделуі керек.",
            hint: "Think about who is going to read your writing.",
            hintRu: "Подумайте, кто будет читать ваш текст.",
            hintKk: "Жазбаңызды кім оқитынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this sentence to be more concise: 'In my personal opinion, I think that it is very important for students to actually study for their tests because it helps them a lot.'",
            questionRu: "Перепишите это предложение более кратко: «По моему личному мнению, я считаю, что очень важно, чтобы ученики действительно готовились к тестам, потому что это им очень помогает.»",
            questionKk: "Бұл сөйлемді қысқарақ қайта жазыңыз: «Менің жеке пікірімше, оқушылардың тестке дайындалуы өте маңызды деп ойлаймын, себебі бұл оларға көп көмектеседі.»",
            answer: "'Studying for tests significantly improves student performance.' — Removed redundancy ('personal opinion, I think'), filler words ('actually, a lot'), and vague language.",
            answerRu: "«Подготовка к тестам значительно улучшает успеваемость учеников.» — Убраны лишние слова («по моему мнению, я считаю»), слова-паразиты («действительно, очень») и расплывчатые формулировки.",
            answerKk: "«Тестке дайындалу оқушылардың үлгерімін айтарлықтай жақсартады.» — Артық сөздер («менің пікірімше, ойлаймын»), қажетсіз сөздер («шынымен, көп») және бұлдыр тұжырымдар алынып тасталды.",
            hint: "Remove phrases like 'in my opinion I think' and 'actually' — they add no meaning.",
            hintRu: "Удалите фразы вроде «по моему мнению, я считаю» — они не добавляют смысла.",
            hintKk: "«Менің пікірімше, ойлаймын» сияқты сөз тіркестерін алып тастаңыз — олар мағына қоспайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a 3-sentence email to your principal requesting a recycling program at school. Apply all five CLEAR principles.",
            questionRu: "Напишите письмо из 3 предложений директору с просьбой о программе переработки. Примените все пять принципов CLEAR.",
            questionKk: "Директорға мектепте қайта өңдеу бағдарламасын сұрайтын 3 сөйлемді электрондық хат жазыңыз. CLEAR-дің барлық бес принципін қолданыңыз.",
            answer: "Subject: Recycling Program Proposal. Dear Principal [Name], I am writing to propose a school recycling program that could reduce our waste by an estimated 40%. Our student council is prepared to organize bin placement and weekly collection schedules. Would you be available this week to discuss next steps? Sincerely, [Your Name].",
            answerRu: "Тема: Предложение программы переработки отходов. Уважаемый директор [Имя], я пишу, чтобы предложить школьную программу переработки, которая может сократить наши отходы примерно на 40%. Наш ученический совет готов организовать размещение контейнеров и еженедельный график сбора. Будет ли у вас время на этой неделе, чтобы обсудить следующие шаги? С уважением, [Ваше имя].",
            answerKk: "Тақырыбы: Қайта өңдеу бағдарламасы туралы ұсыныс. Құрметті директор [Атыңыз], мен қалдықтарымызды шамамен 40%-ға азайта алатын мектеп қайта өңдеу бағдарламасын ұсыну үшін жазып отырмын. Оқушылар кеңесі контейнерлерді орналастыруды және апта сайынғы жинау кестесін ұйымдастыруға дайын. Осы аптада келесі қадамдарды талқылауға уақытыңыз бар ма? Құрметпен, [Атыңыз].",
            hint: "Keep it to 3 sentences: state the request, provide one supporting fact, and include a call to action.",
            hintRu: "Уложитесь в 3 предложения: запрос, один подтверждающий факт и призыв к действию.",
            hintKk: "3 сөйлемге сыйдырыңыз: сұраныс, бір дәлел және іс-әрекетке шақыру.",
            xp: 20
          }
        ]
      },
      {
        title: "Digital Etiquette",
        titleRu: "Цифровой этикет",
        titleKk: "Цифрлық этикет",
        content: "Digital etiquette covers the unwritten rules of respectful online communication — from emails to group chats to social media. Tone is easily misread in text, so choosing words carefully and using emojis or punctuation for clarity is important. The THINK test helps you decide whether a message is worth sending.",
        contentRu: "Цифровой этикет охватывает неписаные правила уважительного онлайн-общения — от электронной почты до групповых чатов и соцсетей. Тон в тексте легко неправильно понять, поэтому важен тщательный выбор слов. Тест THINK помогает решить, стоит ли отправлять сообщение.",
        contentKk: "Цифрлық этикет — электрондық поштадан топтық чаттар мен әлеуметтік желілерге дейін құрметті онлайн қарым-қатынастың жазылмаған ережелерін қамтиды. Мәтінде тон оңай дұрыс түсінілмейді, сондықтан сөздерді мұқият таңдау маңызды. THINK тесті хабарды жіберуге тұрарлық па, соны шешуге көмектеседі.",
        keyFormulas: [
          {
            formula: "THINK: T(rue?) H(elpful?) I(nspiring?) N(ecessary?) K(ind?)",
            formulaRu: "THINK: T (Правда?) H (Полезно?) I (Вдохновляет?) N (Необходимо?) K (Доброжелательно?)",
            formulaKk: "THINK: T (Ақиқат па?) H (Пайдалы ма?) I (Шабыттандыра ма?) N (Қажет пе?) K (Мейірімді ме?)",
            description: "Five-question filter before posting or sending any message online",
            descriptionRu: "Пять вопросов-фильтров перед публикацией или отправкой сообщения",
            descriptionKk: "Кез келген хабарды жібермес бұрын бес сұрақ-сүзгі"
          }
        ],
        solvedExamples: [
          {
            question: "A classmate posts something embarrassing about another student in the group chat. You think it is funny but wonder if you should share it further. Apply the THINK test.",
            questionRu: "Одноклассник публикует в групповом чате что-то неловкое о другом ученике. Вам кажется это смешным, но вы думаете, стоит ли распространять. Примените тест THINK.",
            questionKk: "Сыныптас топтық чатта басқа оқушы туралы ұятты нәрсе жариялайды. Сізге күлкілі көрінеді, бірақ одан әрі таратуға тұрарлық па деп ойланасыз. THINK тестін қолданыңыз.",
            steps: [
              { en: "Apply each filter: True? Maybe. Helpful? No. Inspiring? No. Necessary? No. Kind? No — it could hurt the person's feelings.", ru: "Применяем фильтры: Правда? Возможно. Полезно? Нет. Вдохновляет? Нет. Необходимо? Нет. Добро? Нет — это может ранить.", kk: "Сүзгілерді қолданыңыз: Шын ба? Мүмкін. Пайдалы ма? Жоқ. Шабыттандырушы ма? Жоқ. Қажетті ме? Жоқ. Мейірімді ме? Жоқ — ол адамды ренжітуі мүмкін." },
              { en: "Since it fails four out of five filters, you should not share it. Instead, consider privately telling the original poster that the message could be hurtful.", ru: "Поскольку сообщение не проходит четыре из пяти фильтров, не стоит его распространять. Лучше лично сказать автору, что сообщение может ранить.", kk: "Бес сүзгінің төртеуінен өтпегендіктен, таратпаңыз. Оның орнына авторға хабардың зиянды болуы мүмкін екенін жеке айтуды қарастырыңыз." }
            ],
            answer: "The message fails the Helpful, Inspiring, Necessary, and Kind filters. Do not share it, and consider telling the poster that the message could hurt someone.",
            answerRu: "Сообщение не проходит фильтры «Полезно», «Вдохновляет», «Необходимо» и «Добро». Не распространяйте его и подумайте о том, чтобы сказать автору, что сообщение может кого-то ранить.",
            answerKk: "Хабар «Пайдалы», «Шабыттандырушы», «Қажетті» және «Мейірімді» сүзгілерінен өтпейді. Оны таратпаңыз және авторға хабардың біреуді ренжітуі мүмкін екенін айтуды қарастырыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does each letter in THINK stand for?",
            questionRu: "Что означает каждая буква в THINK?",
            questionKk: "THINK-тегі әр әріп нені білдіреді?",
            answer: "True, Helpful, Inspiring, Necessary, Kind.",
            answerRu: "Правда, Полезно, Вдохновляет, Необходимо, Добро.",
            answerKk: "Шын, Пайдалы, Шабыттандырушы, Қажетті, Мейірімді.",
            hint: "It spells out the word THINK.",
            hintRu: "Это слово THINK по буквам.",
            hintKk: "Бұл THINK сөзін әріптеп құрайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You receive a rude message in a group chat and want to respond angrily. What should you do before replying?",
            questionRu: "Вы получили грубое сообщение в групповом чате и хотите ответить гневно. Что следует сделать перед ответом?",
            questionKk: "Топтық чатта дөрекі хабар алдыңыз және ашулы жауап бергіңіз келеді. Жауап бермес бұрын не істеу керек?",
            answer: "Pause before responding. Apply the THINK test to your reply. Wait at least 10 minutes — if you are still upset, draft the message but do not send it. Consider whether a private conversation would be more productive than a public reply.",
            answerRu: "Сделайте паузу перед ответом. Примените тест THINK к своему ответу. Подождите хотя бы 10 минут — если вы всё ещё расстроены, напишите черновик, но не отправляйте. Подумайте, не будет ли личный разговор продуктивнее публичного ответа.",
            answerKk: "Жауап бермес бұрын кідіріңіз. Жауабыңызға THINK тестін қолданыңыз. Кемінде 10 минут күтіңіз — егер әлі де ренжіп тұрсаңыз, хабарды жазыңыз, бірақ жібермеңіз. Ашық жауаптан гөрі жеке әңгіме тиімдірек пе, соны ойланыңыз.",
            hint: "Never respond to anger with anger in a group chat — cool down first.",
            hintRu: "Никогда не отвечайте на злость злостью в групповом чате — сначала остыньте.",
            hintKk: "Топтық чатта ашуға ашумен жауап бермеңіз — алдымен сабыр сақтаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are creating rules for your school's online discussion forum. Write three rules that promote good digital etiquette and explain why each matters.",
            questionRu: "Вы создаёте правила для школьного онлайн-форума. Напишите три правила хорошего цифрового этикета и объясните, почему каждое важно.",
            questionKk: "Мектептің онлайн талқылау форумы үшін ережелер жасап жатырсыз. Жақсы цифрлық этикетті ілгерілететін үш ереже жазып, әрқайсысының маңызын түсіндіріңіз.",
            answer: "1) 'Apply THINK before posting' — prevents hurtful or unnecessary content. 2) 'Disagree respectfully — critique ideas, not people' — keeps discussions productive and safe. 3) 'No screenshots of private conversations shared publicly' — protects trust and privacy among students.",
            answerRu: "1) «Применяйте THINK перед публикацией» — предотвращает вредный или ненужный контент. 2) «Не соглашайтесь уважительно — критикуйте идеи, а не людей» — сохраняет обсуждения продуктивными и безопасными. 3) «Не публикуйте скриншоты личных переписок» — защищает доверие и конфиденциальность учеников.",
            answerKk: "1) «Жариялар алдында THINK қолданыңыз» — зиянды немесе қажетсіз мазмұнның алдын алады. 2) «Құрметпен келіспеңіз — адамдарды емес, идеяларды сынаңыз» — талқылауларды тиімді әрі қауіпсіз етеді. 3) «Жеке хат-хабарлардың скриншоттарын жария етпеңіз» — оқушылар арасындағы сенім мен құпиялылықты қорғайды.",
            hint: "Focus on prevention, respect, and privacy.",
            hintRu: "Сосредоточьтесь на предотвращении, уважении и конфиденциальности.",
            hintKk: "Алдын алу, құрмет және құпиялылыққа назар аударыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Communication & Leadership_9": {
    planetName: "Communication & Leadership",
    introduction: {
      en: "Build on your communication foundations with persuasion, debate, and professional writing. Learn to structure arguments, deliver presentations, and navigate team dynamics with confidence.",
      ru: "Развивайте основы коммуникации с помощью убеждения, дебатов и делового письма. Научитесь структурировать аргументы, проводить презентации и уверенно работать в команде."
    },
    sections: [
      {
        title: "Persuasive Speaking",
        titleRu: "Убедительная речь",
        titleKk: "Сендіру сөйлеуі",
        content: "Persuasive speaking aims to change your audience's opinion or inspire action through logic and emotion. A strong persuasive speech uses Ethos (credibility), Pathos (emotion), and Logos (logic) together. Knowing your audience's values helps you choose which appeal to emphasize.",
        contentRu: "Убедительная речь направлена на изменение мнения аудитории или побуждение к действию через логику и эмоции. Сильная речь использует Этос (авторитет), Пафос (эмоции) и Логос (логику) вместе. Знание ценностей аудитории помогает выбрать, на какой приём сделать акцент.",
        contentKk: "Сендіру сөйлеуі аудиторияның пікірін өзгертуді немесе логика мен эмоция арқылы іс-әрекетке шақыруды мақсат етеді. Күшті сендіру сөйлеуі Этос (сенімділік), Патос (эмоция) және Логос (логика) бірге қолданады. Аудиторияның құндылықтарын білу қай тәсілге баса назар аударуды таңдауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Aristotle's Triangle: Ethos (credibility) + Pathos (emotion) + Logos (logic)",
            formulaRu: "Треугольник Аристотеля: Этос (доверие) + Пафос (эмоции) + Логос (логика)",
            formulaKk: "Аристотель үшбұрышы: Этос (сенім) + Пафос (эмоция) + Логос (логика)",
            description: "Three modes of persuasion for any argument",
            descriptionRu: "Три способа убеждения для любого аргумента",
            descriptionKk: "Кез келген аргумент үшін сендірудің үш тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "You want to convince your school to add more vegetarian lunch options. Identify one Ethos, Pathos, and Logos appeal you could use.",
            questionRu: "Вы хотите убедить школу добавить больше вегетарианских обедов. Определите по одному приёму Этос, Пафос и Логос.",
            questionKk: "Мектепті вегетариандық түскі ас нұсқаларын көбейтуге сендіргіңіз келеді. Бір Этос, Патос және Логос тәсілін анықтаңыз.",
            steps: [
              { en: "Ethos: 'As a student who eats lunch here every day, I see firsthand that options are limited.' Pathos: 'Many students with dietary restrictions feel excluded at lunch.'", ru: "Этос: «Как ученик, который обедает здесь каждый день, я вижу, что выбор ограничен.» Пафос: «Многие ученики с диетическими ограничениями чувствуют себя исключёнными.»", kk: "Этос: «Мен күнде осында түскі ас ішетін оқушы ретінде таңдау шектеулі екенін көремін.» Патос: «Диеталық шектеулері бар көптеген оқушылар түскі аста өздерін шеттетілген сезінеді.»" },
              { en: "Logos: 'A survey of 200 students showed 45% want more vegetarian options, and plant-based meals cost 20% less to prepare.'", ru: "Логос: «Опрос 200 учеников показал, что 45% хотят больше вегетарианских вариантов, а растительные блюда на 20% дешевле.»", kk: "Логос: «200 оқушының сауалнамасы 45%-ы вегетариандық нұсқаларды қалайтынын көрсетті, ал өсімдік тағамдары дайындау құны 20%-ға арзан.»" }
            ],
            answer: "Ethos: personal daily experience; Pathos: students feeling excluded; Logos: survey data and cost savings. Together, these three appeals create a well-rounded persuasive argument.",
            answerRu: "Этос: личный ежедневный опыт; Пафос: ученики чувствуют себя исключёнными; Логос: данные опроса и экономия средств. Вместе эти три приёма создают всесторонний убедительный аргумент.",
            answerKk: "Этос: жеке күнделікті тәжірибе; Патос: оқушылар өздерін шеттетілген сезінеді; Логос: сауалнама деректері және шығынды үнемдеу. Бұл үш тәсіл бірге алғанда жан-жақты сендіру аргументін жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which of Aristotle's three appeals relies on statistics and facts?",
            questionRu: "Какой из трёх приёмов Аристотеля опирается на статистику и факты?",
            questionKk: "Аристотельдің үш тәсілінің қайсысы статистика мен фактілерге сүйенеді?",
            answer: "Logos — the appeal to logic and reason through evidence, data, and facts.",
            answerRu: "Логос — обращение к логике и разуму через доказательства, данные и факты.",
            answerKk: "Логос — дәлелдер, деректер және фактілер арқылы логика мен парасатқа жүгіну.",
            hint: "It sounds like 'logic.'",
            hintRu: "Звучит как «логика».",
            hintKk: "«Логика» сөзіне ұқсайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a one-sentence Pathos appeal to convince parents to support a school camping trip.",
            questionRu: "Напишите одно предложение с приёмом Пафос, чтобы убедить родителей поддержать школьный поход.",
            questionKk: "Ата-аналарды мектептік серуен сапарын қолдауға сендіру үшін бір сөйлемді Патос тәсілімен жазыңыз.",
            answer: "'Imagine the joy on your child's face as they roast marshmallows under the stars, creating memories that will last a lifetime.' — This evokes emotion and paints a vivid picture.",
            answerRu: "«Представьте радость на лице вашего ребёнка, когда он жарит зефир под звёздами, создавая воспоминания на всю жизнь.» — Это вызывает эмоции и рисует яркую картину.",
            answerKk: "«Балаңыздың жұлдыздар астында зефир қуырып, өмір бойы есте қалатын естеліктер жасап жатқандағы қуанышын елестетіңіз.» — Бұл эмоция тудырады және жарқын көрініс салады.",
            hint: "Use sensory language and emotional imagery.",
            hintRu: "Используйте чувственный язык и эмоциональные образы.",
            hintKk: "Сезімдік тіл мен эмоциялық бейнелерді қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A classmate argues: 'We should cancel all homework because it causes stress.' Build a counter-argument using all three of Aristotle's appeals.",
            questionRu: "Одноклассник утверждает: «Нужно отменить домашнее задание, потому что оно вызывает стресс.» Постройте контраргумент, используя все три приёма Аристотеля.",
            questionKk: "Сыныптас: «Үй тапсырмасын жою керек, себебі ол стресс тудырады» дейді. Аристотельдің үш тәсілін қолданып қарсы аргумент құрыңыз.",
            answer: "Ethos: 'As someone who struggles with homework too, I understand the frustration.' Pathos: 'But imagine graduating unprepared — that stress is far worse.' Logos: 'Research shows that moderate homework (under 1 hour) improves retention by 30% without increasing anxiety.' Conclusion: 'Rather than canceling homework, we should advocate for reasonable limits.'",
            answerRu: "Этос: «Как человек, которому тоже трудно даётся домашнее задание, я понимаю разочарование.» Пафос: «Но представьте, что вы окончите школу неподготовленными — этот стресс намного хуже.» Логос: «Исследования показывают, что умеренное домашнее задание (менее 1 часа) улучшает запоминание на 30% без увеличения тревожности.» Вывод: «Вместо отмены домашнего задания стоит выступать за разумные ограничения.»",
            answerKk: "Этос: «Үй тапсырмасымен өзім де қиналатын адам ретінде, ренішті түсінемін.» Патос: «Бірақ дайындықсыз бітіргенді елестетіңіз — бұл стресс әлдеқайда жаман.» Логос: «Зерттеулер көрсеткендей, орташа үй тапсырмасы (1 сағаттан аз) мазасыздықты арттырмай, есте сақтауды 30%-ға жақсартады.» Қорытынды: «Үй тапсырмасын жоюдың орнына ақылға қонымды шектеулерді жақтаған жөн.»",
            hint: "Acknowledge their point (Ethos), appeal to a bigger fear (Pathos), then use data (Logos).",
            hintRu: "Признайте их точку зрения (Этос), обратитесь к большему страху (Пафос), затем используйте данные (Логос).",
            hintKk: "Олардың пікірін мойындаңыз (Этос), үлкенірек қорқынышқа жүгініңіз (Патос), содан кейін деректерді қолданыңыз (Логос).",
            xp: 20
          }
        ]
      },
      {
        title: "Debate Fundamentals",
        titleRu: "Основы дебатов",
        titleKk: "Дебат негіздері",
        content: "Debate is a structured argument between two sides on a specific topic, called a motion. Each side must present evidence, refute opposing arguments, and summarize key points. Debate teaches you to think critically and argue any position, even one you personally disagree with.",
        contentRu: "Дебаты — это структурированный спор двух сторон по конкретной теме, называемой резолюцией. Каждая сторона должна представить доказательства, опровергнуть аргументы противника и подвести итоги. Дебаты учат критически мыслить и аргументировать любую позицию.",
        contentKk: "Дебат — белгілі бір тақырып бойынша екі жақтың құрылымды дауы. Әр жақ дәлелдер ұсынуы, қарсы аргументтерді жоққа шығаруы және негізгі тұжырымдарды қорытындылауы керек. Дебат сыни ойлауға және кез келген позицияны дәлелдеуге үйретеді.",
        keyFormulas: [
          {
            formula: "ARE model: Assertion → Reasoning → Evidence",
            formulaRu: "Модель ARE: Утверждение → Обоснование → Доказательство",
            formulaKk: "ARE моделі: Тұжырым → Негіздеме → Дәлел",
            description: "Three-step structure for building any debate argument",
            descriptionRu: "Трёхшаговая структура для построения аргумента в дебатах",
            descriptionKk: "Дебат аргументін құрудың үш қадамдық құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "The debate motion is: 'Social media should be banned for users under 16.' Build one argument FOR using the ARE model.",
            questionRu: "Тема дебатов: «Соцсети следует запретить для пользователей младше 16 лет.» Постройте один аргумент ЗА, используя модель ARE.",
            questionKk: "Дебат тақырыбы: «Әлеуметтік желілер 16 жасқа дейінгілерге тыйым салынуы керек.» ARE моделін қолданып бір ЖАҚТАУШЫ аргумент құрыңыз.",
            steps: [
              { en: "Assertion: 'Social media harms the mental health of young teens.' Reasoning: 'Teens under 16 are still developing emotional regulation and are more vulnerable to cyberbullying and comparison.'", ru: "Утверждение: «Соцсети вредят психическому здоровью подростков.» Аргумент: «Подростки до 16 лет ещё формируют эмоциональную регуляцию и более уязвимы к кибербуллингу.»", kk: "Тұжырым: «Әлеуметтік желілер жасөспірімдердің психикалық денсаулығына зиян.» Дәлел: «16 жасқа дейінгілер әлі эмоциялық реттеуді қалыптастыруда және кибербуллингке осал.»" },
              { en: "Evidence: 'A 2023 APA study found that teens spending 3+ hours on social media daily had double the risk of depression symptoms.'", ru: "Доказательство: «Исследование APA 2023 года показало, что у подростков, проводящих 3+ часа в соцсетях, риск депрессии удваивается.»", kk: "Дәлел: «2023 жылғы APA зерттеуі күніне 3+ сағат әлеуметтік желіде болатын жасөспірімдерде депрессия қаупі екі есе артқанын көрсетті.»" }
            ],
            answer: "Assertion: Social media harms teen mental health. Reasoning: Under-16s lack emotional maturity to handle cyberbullying and social comparison. Evidence: APA study shows doubled depression risk with 3+ hours daily use.",
            answerRu: "Утверждение: Соцсети вредят психическому здоровью подростков. Аргумент: Подросткам до 16 лет не хватает эмоциональной зрелости для противостояния кибербуллингу и социальному сравнению. Доказательство: исследование APA показывает удвоенный риск депрессии при использовании 3+ часов в день.",
            answerKk: "Тұжырым: Әлеуметтік желілер жасөспірімдердің психикалық денсаулығына зиян келтіреді. Дәлел: 16 жасқа дейінгілерде кибербуллинг пен әлеуметтік салыстыруға қарсы тұратын эмоциялық жетілу жетіспейді. Дәлел: APA зерттеуі күніне 3+ сағат қолданғанда депрессия қаупінің екі есе артатынын көрсетеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What do the three letters in the ARE model stand for?",
            questionRu: "Что означают три буквы в модели ARE?",
            questionKk: "ARE моделіндегі үш әріп нені білдіреді?",
            answer: "Assertion, Reasoning, Evidence.",
            answerRu: "Утверждение, Аргумент, Доказательство.",
            answerKk: "Тұжырым, Дәлел, Дәлелдеме.",
            hint: "The first letter is what you claim, the second is why, the third is proof.",
            hintRu: "Первая буква — утверждение, вторая — почему, третья — доказательство.",
            hintKk: "Бірінші — тұжырым, екінші — неге, үшінші — дәлел.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Build one ARE argument AGAINST the motion: 'Students should wear school uniforms.'",
            questionRu: "Постройте один аргумент ARE ПРОТИВ резолюции: «Ученики должны носить школьную форму.»",
            questionKk: "«Оқушылар мектеп формасын кию керек» қарсы бір ARE аргументін құрыңыз.",
            answer: "Assertion: Uniforms suppress individual expression. Reasoning: Adolescence is a critical period for identity development, and clothing is a primary form of self-expression. Evidence: A University of Nevada study found no measurable improvement in behavior or attendance in uniform schools.",
            answerRu: "Утверждение: Форма подавляет индивидуальное самовыражение. Аргумент: Подростковый возраст — критический период формирования идентичности, а одежда — основная форма самовыражения. Доказательство: исследование Университета Невады не выявило измеримого улучшения поведения или посещаемости в школах с формой.",
            answerKk: "Тұжырым: Форма жеке өзін-өзі көрсетуді басады. Дәлел: Жасөспірім кезеңі жеке басты қалыптастырудың маңызды кезеңі, ал киім — өзін-өзі көрсетудің негізгі формасы. Дәлелдеме: Невада университетінің зерттеуі форма киетін мектептерде мінез-құлық немесе қатысу деңгейінде өлшенетін жақсарту таппады.",
            hint: "Start with your claim, explain the logic, then find supporting evidence.",
            hintRu: "Начните с утверждения, объясните логику, затем найдите доказательство.",
            hintKk: "Тұжырымнан бастаңыз, логиканы түсіндіріңіз, содан кейін дәлел табыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your opponent argues: 'Homework should be abolished because Finland has no homework and ranks top in education.' Identify the logical flaw and construct a rebuttal using ARE.",
            questionRu: "Оппонент утверждает: «Домашнее задание надо отменить, потому что в Финляндии нет домашних заданий и она лидирует в образовании.» Найдите логическую ошибку и постройте опровержение с ARE.",
            questionKk: "Қарсыласыңыз: «Үй тапсырмасын жою керек, себебі Финляндияда үй тапсырмасы жоқ және білім беруде көшбасшы» дейді. Логикалық қатені тауып, ARE-мен жоққа шығарыңыз.",
            answer: "Flaw: Correlation does not equal causation — Finland's success involves many factors (teacher training, small classes, cultural values), not just lack of homework. Rebuttal ARE: Assertion: 'Finland's success cannot be attributed to no homework alone.' Reasoning: 'Multiple factors contribute, including highly trained teachers and cultural emphasis on education.' Evidence: 'Countries like South Korea and Singapore also rank top in education but assign significant homework, proving homework policy alone does not determine educational quality.'",
            answerRu: "Ошибка: корреляция не равна причинности — успех Финляндии зависит от многих факторов (подготовка учителей, маленькие классы, культурные ценности), а не только от отсутствия домашних заданий. Опровержение ARE: Утверждение: «Успех Финляндии нельзя объяснить только отсутствием домашних заданий.» Аргумент: «Свою роль играют многие факторы, включая высококвалифицированных учителей и культурный акцент на образование.» Доказательство: «Такие страны, как Южная Корея и Сингапур, тоже лидируют в образовании, но задают значительный объём домашних заданий, что доказывает: политика домашних заданий сама по себе не определяет качество образования.»",
            answerKk: "Қате: корреляция себептілікпен бірдей емес — Финляндияның табысы көптеген факторларға байланысты (мұғалімдерді дайындау, шағын сыныптар, мәдени құндылықтар), тек үй тапсырмасының жоқтығына емес. ARE жоққа шығару: Тұжырым: «Финляндияның табысын тек үй тапсырмасының жоқтығымен түсіндіруге болмайды.» Дәлел: «Жоғары білікті мұғалімдер мен білімге мәдени баса назар аудару сияқты көптеген факторлар үлес қосады.» Дәлелдеме: «Оңтүстік Корея мен Сингапур сияқты елдер де білім беруде көшбасшы, бірақ едәуір үй тапсырмасы береді, бұл үй тапсырмасы саясатының өзі білім сапасын анықтамайтынын дәлелдейді.»",
            hint: "The opponent assumes one factor (no homework) caused the result — but many other factors differ too.",
            hintRu: "Оппонент предполагает, что один фактор (отсутствие домашних заданий) вызвал результат — но другие факторы тоже отличаются.",
            hintKk: "Қарсылас бір фактор (үй тапсырмасы жоқ) нәтижеге себеп болды деп болжайды — бірақ басқа факторлар да ерекшеленеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Argument Structure",
        titleRu: "Структура аргумента",
        titleKk: "Аргумент құрылымы",
        content: "A well-structured argument follows a logical flow that makes your position easy to follow and hard to dismiss. The Toulmin model breaks arguments into a claim, grounds (evidence), and a warrant (the logical connection between them). Understanding this structure helps you build stronger arguments and spot weaknesses in others.",
        contentRu: "Хорошо структурированный аргумент следует логическому потоку, который делает вашу позицию лёгкой для понимания. Модель Тулмина разделяет аргументы на тезис, основания (доказательства) и гарант (логическую связь). Понимание этой структуры помогает строить сильные аргументы и находить слабости в чужих.",
        contentKk: "Жақсы құрылымдалған аргумент сіздің ұстанымыңызды оңай түсінуге мүмкіндік беретін логикалық ағымға сәйкес. Тулмин моделі аргументтерді тезис, негіздер (дәлелдер) және кепіл (логикалық байланыс) деп бөледі. Бұл құрылымды түсіну күшті аргументтер құруға көмектеседі.",
        keyFormulas: [
          {
            formula: "Toulmin Model: Claim + Grounds (evidence) + Warrant (logical link)",
            formulaRu: "Модель Тулмина: Тезис + Основания (доказательства) + Обоснование (логическая связь)",
            formulaKk: "Тулмин моделі: Тұжырым + Негіздер (дәлелдер) + Байланыс (логикалық негіздеме)",
            description: "Framework for constructing airtight arguments",
            descriptionRu: "Модель для построения безупречных аргументов",
            descriptionKk: "Мықты аргументтер құру моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Using the Toulmin Model, argue that schools should teach financial literacy.",
            questionRu: "Используя модель Тулмина, аргументируйте, что школы должны учить финансовой грамотности.",
            questionKk: "Тулмин моделін қолданып, мектептерде қаржылық сауаттылықты оқыту керек екенін дәлелдеңіз.",
            steps: [
              { en: "Claim: 'Schools should require a financial literacy course.' Grounds: 'A 2022 FINRA study found that 63% of adults cannot pass a basic financial literacy test.'", ru: "Тезис: «Школы должны ввести обязательный курс финансовой грамотности.» Основания: «Исследование FINRA 2022 года показало, что 63% взрослых не могут пройти базовый тест финансовой грамотности.»", kk: "Тезис: «Мектептерде қаржылық сауаттылық курсы міндетті болуы керек.» Негіздер: «2022 жылғы FINRA зерттеуі ересектердің 63%-ы қаржылық сауаттылықтың базалық тестінен өте алмайтынын көрсетті.»" },
              { en: "Warrant: 'Since schools are responsible for preparing students for adult life, and most adults lack financial skills, adding this course directly addresses a proven gap.'", ru: "Гарант: «Поскольку школы отвечают за подготовку к взрослой жизни, а большинство взрослых не владеют финансовыми навыками, такой курс напрямую устраняет доказанный пробел.»", kk: "Кепіл: «Мектептер оқушыларды ересек өмірге дайындауға жауапты болғандықтан және көптеген ересектерде қаржылық дағдылар жетіспейтіндіктен, бұл курс дәлелденген олқылықты тікелей шешеді.»" }
            ],
            answer: "Claim: Schools should require financial literacy. Grounds: 63% of adults fail basic financial tests. Warrant: Schools prepare students for adulthood, so they must address this proven skill gap.",
            answerRu: "Тезис: Школы должны сделать финансовую грамотность обязательной. Основания: 63% взрослых не проходят базовый финансовый тест. Гарант: Школы готовят учеников ко взрослой жизни, поэтому обязаны устранить этот доказанный пробел в навыках.",
            answerKk: "Тезис: Мектептер қаржылық сауаттылықты міндетті ету керек. Негіздер: Ересектердің 63%-ы базалық қаржылық тесттен өте алмайды. Кепіл: Мектептер оқушыларды ересек өмірге дайындайды, сондықтан бұл дәлелденген дағды олқылығын шешуі керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "In the Toulmin Model, what is the 'warrant'?",
            questionRu: "В модели Тулмина что такое «гарант»?",
            questionKk: "Тулмин моделінде «кепіл» дегеніміз не?",
            answer: "The warrant is the logical connection that explains why the grounds (evidence) support the claim.",
            answerRu: "Гарант — это логическая связь, которая объясняет, почему основания (доказательства) подтверждают тезис.",
            answerKk: "Кепіл — негіздердің (дәлелдердің) тезисті неге қолдайтынын түсіндіретін логикалық байланыс.",
            hint: "It is the bridge between your evidence and your conclusion.",
            hintRu: "Это мост между доказательством и выводом.",
            hintKk: "Бұл дәлел мен қорытындыңыз арасындағы көпір.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Identify the claim, grounds, and warrant in this argument: 'Students should get more recess because physical activity improves focus, and a CDC study shows active kids score 15% higher on attention tasks.'",
            questionRu: "Определите тезис, основания и гарант: «Ученикам нужно больше перемен, потому что физическая активность улучшает концентрацию, и исследование CDC показывает, что активные дети на 15% лучше справляются с задачами на внимание.»",
            questionKk: "Тезис, негіздер мен кепілді анықтаңыз: «Оқушыларға үзіліс көбірек керек, себебі дене белсенділігі назар аударуды жақсартады, және CDC зерттеуі белсенді балалардың назар тапсырмаларында 15% жоғары нәтиже көрсететінін дәлелдейді.»",
            answer: "Claim: Students should get more recess. Grounds: CDC study shows active kids score 15% higher on attention tasks. Warrant: Physical activity improves focus (this explains why the evidence supports the claim).",
            answerRu: "Тезис: Ученикам нужно больше перемен. Основания: исследование CDC показывает, что активные дети на 15% лучше справляются с задачами на внимание. Гарант: физическая активность улучшает концентрацию (это объясняет, почему доказательство подтверждает тезис).",
            answerKk: "Тезис: Оқушыларға көбірек үзіліс керек. Негіздер: CDC зерттеуі белсенді балалардың назар тапсырмаларында 15% жоғары нәтиже көрсететінін дәлелдейді. Кепіл: дене белсенділігі назар аударуды жақсартады (бұл дәлелдің тезисті неге қолдайтынын түсіндіреді).",
            hint: "The claim is what should happen, grounds are the data, warrant is why the data matters.",
            hintRu: "Тезис — что должно быть, основания — данные, гарант — почему данные важны.",
            hintKk: "Тезис — не болу керек, негіздер — деректер, кепіл — деректер неге маңызды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your opponent presents this argument: 'Video games cause violence because 70% of games contain violent content.' Identify the missing warrant and explain why the argument is weak.",
            questionRu: "Оппонент утверждает: «Видеоигры вызывают насилие, потому что 70% игр содержат жестокий контент.» Определите отсутствующий гарант и объясните, почему аргумент слаб.",
            questionKk: "Қарсыласыңыз: «Видеоойындар зорлық-зомбылық тудырады, себебі ойындардың 70%-ы зорлық-зомбылық мазмұнды» дейді. Жетіспейтін кепілді анықтаңыз және аргументтің неге әлсіз екенін түсіндіріңіз.",
            answer: "The missing warrant is: 'Exposure to violent content causes violent behavior in players.' This is weak because the grounds (70% of games are violent) only describe content — they do not prove a causal link to real-world violence. Millions play violent games without becoming violent. The argument confuses correlation with causation.",
            answerRu: "Отсутствующий гарант: «Воздействие жестокого контента вызывает агрессивное поведение у игроков.» Это слабо, потому что основания (70% игр жестокие) лишь описывают контент — они не доказывают причинную связь с реальным насилием. Миллионы играют в жестокие игры, не становясь агрессивными. Аргумент путает корреляцию с причинностью.",
            answerKk: "Жетіспейтін кепіл: «Зорлық-зомбылық мазмұнмен әсерлесу ойыншыларда зорлық-зомбылық мінез-құлқын тудырады.» Бұл әлсіз, себебі негіздер (ойындардың 70%-ы зорлық-зомбылықты) тек мазмұнды сипаттайды — олар нақты өмірдегі зорлық-зомбылықпен себептік байланысты дәлелдемейді. Миллиондаған адам зорлық-зомбылық ойындарын ойнайды, бірақ агрессивті болмайды. Аргумент корреляцияны себептілікпен шатастырады.",
            hint: "Ask: does the evidence actually prove the claim, or is there a logical gap?",
            hintRu: "Спросите: доказательства действительно подтверждают тезис или есть логический пробел?",
            hintKk: "Сұраңыз: дәлелдер шынымен тезисті растай ма, әлде логикалық олқылық бар ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Presentations",
        titleRu: "Презентации",
        titleKk: "Презентациялар",
        content: "A great presentation combines clear structure, engaging delivery, and audience awareness. Planning your opening hook, main points, and closing call-to-action ensures your message lands. Rehearsing out loud builds confidence and helps you manage timing.",
        contentRu: "Отличная презентация сочетает чёткую структуру, увлекательную подачу и внимание к аудитории. Планирование захватывающего начала, основных тезисов и призыва к действию в конце обеспечивает доходчивость. Репетиция вслух укрепляет уверенность и помогает контролировать время.",
        contentKk: "Тамаша презентация анық құрылым, тартымды баяндау және аудиторияға назар аударуды біріктіреді. Тартымды кіріспе, негізгі тезистер мен қорытынды іс-әрекетке шақыруды жоспарлау хабарыңыздың жетуін қамтамасыз етеді. Дауыстап жаттығу сенімділікті арттырады.",
        keyFormulas: [
          {
            formula: "Hook → 3 Key Points → Call to Action",
            formulaRu: "Крючок → 3 ключевые мысли → Призыв к действию",
            formulaKk: "Ілмек → 3 негізгі ой → Әрекетке шақыру",
            description: "Simple presentation structure that keeps audiences engaged",
            descriptionRu: "Простая структура презентации, удерживающая внимание аудитории",
            descriptionKk: "Аудитория назарын ұстайтын қарапайым презентация құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "You are presenting about water conservation to your class. Outline a presentation using Hook → 3 Key Points → Call to Action.",
            questionRu: "Вы презентуете тему экономии воды. Составьте план по схеме: Захват → 3 ключевых тезиса → Призыв к действию.",
            questionKk: "Суды үнемдеу туралы презентация жасап жатырсыз. Ілмек → 3 негізгі тезис → Іс-әрекетке шақыру бойынша жоспар құрыңыз.",
            steps: [
              { en: "Hook: 'What if I told you that a 5-minute shower uses 40 liters of water — enough for one person to drink for 20 days?'", ru: "Захват: «А что если 5-минутный душ расходует 40 литров воды — хватит одному человеку на 20 дней питья?»", kk: "Ілмек: «5 минуттық душ 40 литр су жұмсайды — бұл бір адамға 20 күнге жететін ішімдік су десем ше?»" },
              { en: "3 Points: (1) Global water scarcity is rising. (2) Simple daily habits save thousands of liters yearly. (3) Our school can lead by example. Call to Action: 'Take the 3-minute shower challenge this week.'", ru: "3 тезиса: (1) Мировой дефицит воды растёт. (2) Простые привычки экономят тысячи литров. (3) Наша школа может подать пример. Призыв: «Примите вызов 3-минутного душа на этой неделе.»", kk: "3 тезис: (1) Әлемдік су тапшылығы өсуде. (2) Қарапайым әдеттер мыңдаған литр үнемдейді. (3) Мектебіміз үлгі бола алады. Шақыру: «Осы аптада 3 минуттық душ челленджін қабылдаңыз.»" }
            ],
            answer: "Hook: Shocking water statistic. Point 1: Water scarcity is rising. Point 2: Small habits make big impact. Point 3: Our school can lead. CTA: Take the 3-minute shower challenge.",
            answerRu: "Захват: шокирующая статистика о воде. Тезис 1: дефицит воды растёт. Тезис 2: маленькие привычки дают большой эффект. Тезис 3: наша школа может подать пример. Призыв: примите вызов 3-минутного душа.",
            answerKk: "Ілмек: су туралы таңқаларлық статистика. Тезис 1: су тапшылығы өсуде. Тезис 2: кішкентай әдеттер үлкен әсер береді. Тезис 3: мектебіміз үлгі бола алады. Шақыру: 3 минуттық душ челленджін қабылдаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is starting a presentation with a 'hook' important?",
            questionRu: "Почему важно начинать презентацию с «захвата внимания»?",
            questionKk: "Презентацияны «ілмекпен» бастау неге маңызды?",
            answer: "A hook captures the audience's attention in the first few seconds, making them want to listen to the rest of your presentation.",
            answerRu: "Захват внимания удерживает аудиторию в первые несколько секунд, вызывая желание слушать презентацию дальше.",
            answerKk: "Ілмек алғашқы бірнеше секундта аудиторияның назарын аударып, презентацияны әрі қарай тыңдағысы келтіреді.",
            hint: "Think about what happens if you start with 'Today I will talk about...'",
            hintRu: "Подумайте, что будет, если начать с «Сегодня я расскажу о...»",
            hintKk: "«Бүгін мен ... туралы айтамын» деп бастасаңыз не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a compelling hook for a presentation about the importance of sleep for students.",
            questionRu: "Напишите захватывающее начало для презентации о важности сна для учащихся.",
            questionKk: "Оқушылар үшін ұйқының маңыздылығы туралы презентацияға тартымды ілмек жазыңыз.",
            answer: "'Right now, one in three of you is running on less than 6 hours of sleep — and science says your brain is performing as if you skipped an entire grade level.' — This uses a surprising statistic directly relevant to the audience.",
            answerRu: "«Прямо сейчас каждый третий из вас спит меньше 6 часов — и наука говорит, что ваш мозг работает так, будто вы пропустили целый учебный год.» — Используется удивительная статистика, напрямую касающаяся аудитории.",
            answerKk: "«Дәл қазір үшеуіңіздің біреуі 6 сағаттан аз ұйықтайды — ал ғылым сіздің миыңыз бүкіл сынып деңгейін өткізіп жібергендей жұмыс істейді дейді.» — Аудиторияға тікелей қатысты таңқаларлық статистика қолданылады.",
            hint: "Use a startling fact or question that directly involves the audience.",
            hintRu: "Используйте удивительный факт или вопрос, непосредственно касающийся аудитории.",
            hintKk: "Аудиторияға тікелей қатысты таңқаларлық факт немесе сұрақ қолданыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have 5 minutes to present on any topic you care about. Outline your full presentation structure including a hook, three distinct points with brief evidence, and a memorable closing call to action.",
            questionRu: "У вас 5 минут на презентацию любой темы. Составьте полную структуру: захват, три тезиса с краткими доказательствами и запоминающийся призыв к действию.",
            questionKk: "Сізге кез келген тақырыпқа 5 минуттық презентация жасау керек. Толық құрылым жасаңыз: ілмек, қысқа дәлелдермен үш тезис және есте қаларлық іс-әрекетке шақыру.",
            answer: "Example (topic: reading): Hook: 'The average teen spends 7 hours on screens daily but only 12 minutes reading — yet reading is the single best predictor of academic success.' Point 1: Reading improves vocabulary 3x faster than conversation. Point 2: Regular readers show 20% higher empathy scores. Point 3: Reading before bed reduces stress by 68%. CTA: 'Replace 15 minutes of screen time with reading tonight — your future self will thank you.'",
            answerRu: "Пример (тема: чтение): Захват: «Среднестатистический подросток проводит 7 часов у экранов ежедневно, но читает лишь 12 минут — хотя чтение является лучшим предиктором успеваемости.» Тезис 1: чтение улучшает словарный запас в 3 раза быстрее разговора. Тезис 2: постоянные читатели показывают на 20% выше уровень эмпатии. Тезис 3: чтение перед сном снижает стресс на 68%. Призыв: «Замени сегодня 15 минут экранного времени на чтение — твоё будущее «я» скажет спасибо.»",
            answerKk: "Мысал (тақырып: оқу): Ілмек: «Орташа жасөспірім күніне экранда 7 сағат өткізеді, бірақ тек 12 минут оқиды — дегенмен оқу үлгерімнің ең жақсы болжаушысы.» Тезис 1: оқу сөздік қорды әңгімеден 3 есе тезірек жақсартады. Тезис 2: тұрақты оқырмандар эмпатия деңгейі 20% жоғары болады. Тезис 3: ұйықтар алдында оқу стрессті 68%-ға азайтады. Шақыру: «Бүгін кешке экран уақытының 15 минутын оқуға ауыстыр — болашақ «сен» рахмет айтасың.»",
            hint: "Choose a topic you are passionate about and make sure each point has one piece of evidence.",
            hintRu: "Выберите тему, которая вас увлекает, и подкрепите каждый тезис одним доказательством.",
            hintKk: "Өзіңізге қызықты тақырып таңдаңыз және әр тезисті бір дәлелмен нығайтыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Visual Aids",
        titleRu: "Визуальные средства",
        titleKk: "Көрнекі құралдар",
        content: "Visual aids — slides, charts, images, and props — support your message but should never replace your speaking. The best visuals are simple, with minimal text and high-contrast design. Following the 6x6 rule keeps slides readable and prevents information overload.",
        contentRu: "Визуальные средства — слайды, графики, изображения и реквизит — поддерживают сообщение, но не заменяют речь. Лучшие визуалы просты, с минимумом текста и контрастным дизайном. Правило 6x6 сохраняет читабельность слайдов и предотвращает перегрузку информацией.",
        contentKk: "Көрнекі құралдар — слайдтар, диаграммалар, суреттер және реквизиттер — хабарыңызды қолдайды, бірақ сөйлеуіңізді алмастырмауы керек. Ең жақсы көрнекілер қарапайым, мәтін аз және контрастты дизайнды. 6x6 ережесі слайдтардың оқылуын сақтайды.",
        keyFormulas: [
          {
            formula: "6x6 Rule: Maximum 6 lines per slide, maximum 6 words per line",
            formulaRu: "Правило 6x6: Максимум 6 строк на слайде, максимум 6 слов в строке",
            formulaKk: "6x6 ережесі: Слайдта ең көбі 6 жол, жолда ең көбі 6 сөз",
            description: "Guideline for keeping presentation slides clean and readable",
            descriptionRu: "Правило для поддержания слайдов чистыми и читабельными",
            descriptionKk: "Слайдтарды таза және оқылатын ұстау ережесі"
          }
        ],
        solvedExamples: [
          {
            question: "A classmate's slide has a paragraph of 80 words in small font. How would you redesign it using the 6x6 rule?",
            questionRu: "На слайде одноклассника — абзац из 80 слов мелким шрифтом. Как переделать его по правилу 6x6?",
            questionKk: "Сыныптасыңыздың слайдында кіші қаріппен 80 сөзді абзац бар. 6x6 ережесімен қалай қайта жасайсыз?",
            steps: [
              { en: "Extract the 3-4 key points from the paragraph and turn each into a short bullet (6 words or fewer).", ru: "Извлеките 3-4 ключевые мысли и превратите каждую в короткий пункт (не более 6 слов).", kk: "3-4 негізгі ойды алып, әрқайсысын қысқа тармаққа (6 сөзден аспайтын) айналдырыңыз." },
              { en: "Add one relevant image or chart that visually represents the main idea, and increase font size to at least 24pt.", ru: "Добавьте одно изображение или диаграмму, визуально представляющую главную идею, и увеличьте шрифт до минимум 24pt.", kk: "Негізгі идеяны көрнекі түрде көрсететін бір сурет немесе диаграмма қосыңыз және қаріп өлшемін кемінде 24pt-ге арттырыңыз." }
            ],
            answer: "Replace the paragraph with 3-4 bullet points of 6 words or fewer, add a supporting image, and use large readable font. The speaker explains details verbally.",
            answerRu: "Замените абзац 3-4 короткими пунктами (не более 6 слов каждый), добавьте иллюстрирующее изображение и используйте крупный читабельный шрифт. Подробности спикер объясняет устно.",
            answerKk: "Абзацты 3-4 қысқа тармақпен (әрқайсысы 6 сөзден аспайтын) ауыстырыңыз, қолдаушы сурет қосыңыз және үлкен оқылатын қаріп қолданыңыз. Толық мәліметтерді сөйлеуші ауызша түсіндіреді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the 6x6 rule recommend for presentation slides?",
            questionRu: "Что рекомендует правило 6x6 для слайдов презентации?",
            questionKk: "6x6 ережесі презентация слайдтары үшін нені ұсынады?",
            answer: "Maximum 6 lines per slide and maximum 6 words per line.",
            answerRu: "Максимум 6 строк на слайде и максимум 6 слов в строке.",
            answerKk: "Слайдта ең көбі 6 жол және жолда ең көбі 6 сөз.",
            hint: "Think: 6 and 6.",
            hintRu: "Подумайте: 6 и 6.",
            hintKk: "Ойланыңыз: 6 және 6.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "When should you use a bar chart versus a pie chart in a presentation?",
            questionRu: "Когда использовать столбчатую диаграмму, а когда круговую?",
            questionKk: "Презентацияда бағандық диаграмманы қашан, дөңгелек диаграмманы қашан қолданасыз?",
            answer: "Use a bar chart to compare quantities across categories (e.g., test scores by class). Use a pie chart to show parts of a whole (e.g., budget allocation percentages). Pie charts work best with 5 or fewer segments.",
            answerRu: "Используйте столбчатую диаграмму для сравнения величин по категориям (например, результаты тестов по классам). Используйте круговую диаграмму для показа частей целого (например, проценты распределения бюджета). Круговые диаграммы лучше всего работают с 5 сегментами или меньше.",
            answerKk: "Санаттар бойынша шамаларды салыстыру үшін бағандық диаграмма қолданыңыз (мысалы, сыныптар бойынша тест нәтижелері). Тұтастың бөліктерін көрсету үшін дөңгелек диаграмма қолданыңыз (мысалы, бюджетті бөлу пайыздары). Дөңгелек диаграммалар 5 немесе одан аз сегментпен жақсы жұмыс істейді.",
            hint: "Bar charts compare; pie charts show proportions.",
            hintRu: "Столбчатые сравнивают; круговые показывают пропорции.",
            hintKk: "Бағандық салыстырады; дөңгелек пропорцияларды көрсетеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a 3-slide outline for a presentation about healthy eating. For each slide, describe the visual element and the text, following the 6x6 rule.",
            questionRu: "Создайте план из 3 слайдов о здоровом питании. Для каждого опишите визуальный элемент и текст по правилу 6x6.",
            questionKk: "Салауатты тамақтану туралы 3 слайдтық жоспар жасаңыз. Әр слайдқа 6x6 ережесі бойынша көрнекі элемент пен мәтінді сипаттаңыз.",
            answer: "Slide 1 — Hook: Image of fast food vs. fresh meal. Text: 'What you eat shapes your brain.' (6 words) Slide 2 — Key facts: Three bullet points with food icons. '• Fruits boost memory 23%' / '• Processed food lowers focus' / '• Water improves energy levels.' Slide 3 — CTA: Photo of a healthy lunchbox. Text: 'Pack one healthy meal tomorrow.'",
            answerRu: "Слайд 1 — Захват: изображение фастфуда против свежей еды. Текст: «То, что вы едите, формирует ваш мозг.» (6 слов) Слайд 2 — Ключевые факты: три пункта с иконками еды. «• Фрукты улучшают память на 23%» / «• Обработанная еда снижает концентрацию» / «• Вода повышает уровень энергии.» Слайд 3 — Призыв: фото здорового ланчбокса. Текст: «Собери один здоровый обед завтра.»",
            answerKk: "Слайд 1 — Ілмек: фастфуд пен таза тағамның суреті. Мәтін: «Не жесеңіз, миыңызды солай қалыптастырады.» (6 сөз) Слайд 2 — Негізгі фактілер: тағам белгішелерімен үш тармақ. «• Жемістер жадты 23%-ға жақсартады» / «• Өңделген тағам назарды төмендетеді» / «• Су энергия деңгейін арттырады.» Слайд 3 — Шақыру: салауатты түскі ас қорабының суреті. Мәтін: «Ертең бір салауатты тамақ дайында.»",
            hint: "Each slide should have one strong visual and minimal text that supports it.",
            hintRu: "Каждый слайд — одно сильное изображение и минимум текста.",
            hintKk: "Әр слайд — бір күшті көрнекі және оны қолдайтын ең аз мәтін.",
            xp: 20
          }
        ]
      },
      {
        title: "Email Writing",
        titleRu: "Написание электронных писем",
        titleKk: "Электрондық хат жазу",
        content: "Email is often your first professional impression, so mastering its format matters. Every email needs a clear subject line, a proper greeting, a concise body, and a professional closing. The BRIEF model ensures every email is purposeful and easy to act on.",
        contentRu: "Электронная почта часто создаёт первое профессиональное впечатление, поэтому важно владеть форматом. Каждое письмо требует чёткой темы, приветствия, краткого содержания и профессионального завершения. Модель BRIEF гарантирует целенаправленность каждого письма.",
        contentKk: "Электрондық пошта көбінесе сіздің бірінші кәсіби әсеріңіз, сондықтан оның форматын меңгеру маңызды. Әр хатқа анық тақырып, тиісті сәлемдесу, қысқа мазмұн және кәсіби жабу қажет. BRIEF моделі әр хаттың мақсатты болуын қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "BRIEF: Background → Reason → Information → End → Follow-up",
            formulaRu: "BRIEF: Предыстория → Причина → Информация → Итог → Дальнейшие шаги",
            formulaKk: "BRIEF: Алғышарт → Себеп → Ақпарат → Қорытынды → Келесі қадам",
            description: "Five-part structure for professional emails",
            descriptionRu: "Пятичастная структура профессионального письма",
            descriptionKk: "Кәсіби электрондық хаттың бес бөлімді құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a BRIEF email to a teacher asking for an extension on an assignment.",
            questionRu: "Напишите письмо учителю по модели BRIEF с просьбой о продлении срока задания.",
            questionKk: "Тапсырма мерзімін ұзартуды сұрайтын мұғалімге BRIEF моделімен хат жазыңыз.",
            steps: [
              { en: "Background + Reason: 'Subject: Extension Request — History Essay. Dear Mr. Johnson, I am writing regarding the history essay due Friday. I have been ill this week and missed two days of research time.'", ru: "Контекст + Причина: «Тема: Продление срока — Эссе по истории. Уважаемый г-н Джонсон, пишу по поводу эссе по истории, сдача в пятницу. Я болел на этой неделе и пропустил два дня исследования.»", kk: "Контекст + Себеп: «Тақырып: Мерзімді ұзарту — Тарих эссесі. Құрметті Джонсон мырза, жұмада тапсыру мерзімі бар тарих эссесі туралы жазып отырмын. Осы аптада ауырып, екі күн зерттеу уақытын жоғалттым.»" },
              { en: "Information + End + Follow-up: 'Would it be possible to submit by Monday instead? I want to ensure the quality reflects my best work. Thank you for considering this. I am happy to discuss further if needed. Sincerely, [Name]'", ru: "Информация + Завершение + Дальнейшие шаги: «Можно ли сдать в понедельник? Хочу, чтобы качество отражало мои лучшие усилия. Спасибо за рассмотрение. Готов обсудить при необходимости. С уважением, [Имя]»", kk: "Ақпарат + Аяқтау + Кейінгі қадамдар: «Дүйсенбіге тапсыруға болады ма? Сапа менің ең жақсы жұмысымды көрсетуін қалаймын. Қарастырғаныңызға рахмет. Қажет болса, талқылауға дайынмын. Құрметпен, [Аты]»" }
            ],
            answer: "A well-structured BRIEF email: clear subject line, context for the request, specific ask (Monday deadline), polite close, and openness to follow-up.",
            answerRu: "Хорошо структурированное письмо BRIEF: чёткая тема, контекст просьбы, конкретный запрос (срок — понедельник), вежливое завершение и готовность к дальнейшему обсуждению.",
            answerKk: "Жақсы құрылымдалған BRIEF хаты: анық тақырып, сұраныс контексті, нақты сұраныс (дүйсенбі мерзімі), сыпайы жабу және кейінгі талқылауға дайындық."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the most important part of an email that recipients see first?",
            questionRu: "Какую часть письма получатели видят первой?",
            questionKk: "Алушылар хаттың қай бөлігін бірінші көреді?",
            answer: "The subject line — it determines whether the email gets opened and read promptly.",
            answerRu: "Тема письма — она определяет, откроют ли письмо и прочитают ли его вовремя.",
            answerKk: "Хат тақырыбы — ол хаттың дереу ашылып, оқылатынын анықтайды.",
            hint: "It appears before you even open the email.",
            hintRu: "Она видна ещё до открытия письма.",
            hintKk: "Ол хатты ашпай-ақ көрінеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this subject line to be more professional and specific: 'hey question about stuff'",
            questionRu: "Перепишите тему письма профессиональнее и конкретнее: «привет вопрос по теме»",
            questionKk: "Бұл тақырып жолын кәсіби және нақтырақ қайта жазыңыз: «сәлем сұрақ бар»",
            answer: "'Question About Tomorrow's Biology Lab Assignment' — specific, professional, and tells the reader exactly what to expect.",
            answerRu: "«Вопрос о задании лабораторной по биологии на завтра» — конкретно, профессионально и сразу даёт понять читателю, чего ожидать.",
            answerKk: "«Ертеңгі биология зертханалық тапсырмасы туралы сұрақ» — нақты, кәсіби және оқырманға не күтуге болатынын дереу түсіндіреді.",
            hint: "Include the subject, the course, and a time reference if applicable.",
            hintRu: "Укажите предмет, курс и временную привязку.",
            hintKk: "Пәнді, курсты және уақыт сілтемесін қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to email a university admissions officer to ask about scholarship opportunities. Write the full email using the BRIEF model, keeping it under 100 words.",
            questionRu: "Вам нужно написать в приёмную комиссию университета о стипендиальных возможностях. Напишите полное письмо по модели BRIEF, не более 100 слов.",
            questionKk: "Университеттің қабылдау кеңсесіне стипендиялық мүмкіндіктер туралы хат жазу керек. BRIEF моделімен 100 сөзден аспайтын толық хат жазыңыз.",
            answer: "Subject: Scholarship Inquiry — Fall 2027 Admission. Dear Admissions Office, I am a 9th-grade student from Almaty, Kazakhstan, researching universities for future application (Background). I am interested in merit-based scholarships for international students (Reason). Could you share available scholarship types and application deadlines? (Information) Thank you for your time (End). I look forward to your response and am happy to provide any additional information (Follow-up). Sincerely, [Name].",
            answerRu: "Тема: Вопрос о стипендиях — приём осенью 2027 года. Уважаемая приёмная комиссия, я ученик(-ца) 9 класса из Алматы, Казахстан, изучаю университеты для будущей подачи документов (Контекст). Меня интересуют стипендии на основе успеваемости для иностранных студентов (Причина). Не могли бы вы поделиться доступными видами стипендий и сроками подачи? (Информация) Спасибо за уделённое время (Завершение). С нетерпением жду вашего ответа и готов(а) предоставить любую дополнительную информацию (Дальнейшие шаги). С уважением, [Имя].",
            answerKk: "Тақырыбы: Стипендия туралы сұрау — 2027 жылғы күзгі қабылдау. Құрметті қабылдау комиссиясы, мен Алматы, Қазақстаннан келген 9-сынып оқушысымын, болашақ өтінім үшін университеттерді зерттеп жатырмын (Контекст). Мен халықаралық студенттерге арналған үлгерімге негізделген стипендияларға қызығамын (Себеп). Қолжетімді стипендия түрлері мен өтінім мерзімдерін бөлісе аласыз ба? (Ақпарат) Уақытыңызға рахмет (Аяқтау). Жауабыңызды асыға күтемін және қосымша ақпарат беруге дайынмын (Кейінгі қадам). Құрметпен, [Аты].",
            hint: "Follow BRIEF: set context, state your purpose, ask specifically, close politely, mention follow-up.",
            hintRu: "Следуйте BRIEF: контекст, цель, конкретный вопрос, вежливое завершение, готовность к диалогу.",
            hintKk: "BRIEF-ке сүйеніңіз: контекст, мақсат, нақты сұрақ, сыпайы жабу, диалогқа дайындық.",
            xp: 20
          }
        ]
      },
      {
        title: "Team Roles",
        titleRu: "Роли в команде",
        titleKk: "Командадағы рөлдер",
        content: "Every effective team needs clearly defined roles so that responsibilities are distributed and accountability is maintained. Belbin's model identifies key roles like Coordinator, Implementer, and Creative that people naturally gravitate toward. Understanding your preferred role helps you contribute most effectively.",
        contentRu: "Каждая эффективная команда нуждается в чётко определённых ролях для распределения ответственности. Модель Белбина выделяет ключевые роли: Координатор, Исполнитель и Креативщик, к которым люди склоняются естественным образом. Понимание своей роли помогает вносить максимальный вклад.",
        contentKk: "Әр тиімді команда жауапкершілікті бөлу үшін анық рөлдерді қажет етеді. Белбин моделі Үйлестіруші, Орындаушы және Шығармашыл сияқты адамдар табиғи түрде ұмтылатын негізгі рөлдерді анықтайды. Өз рөліңізді түсіну ең тиімді үлес қосуға көмектеседі.",
        keyFormulas: [
          {
            formula: "Belbin Roles: Coordinator (organizes) + Implementer (executes) + Creative (generates ideas) + Evaluator (analyzes)",
            formulaRu: "Роли Белбина: Координатор (организует) + Исполнитель (реализует) + Генератор идей (придумывает) + Аналитик (оценивает)",
            formulaKk: "Белбин рөлдері: Үйлестіруші (ұйымдастырады) + Орындаушы (іске асырады) + Идея генераторы (ойлап табады) + Талдаушы (бағалайды)",
            description: "Four key team roles from Belbin's model",
            descriptionRu: "Четыре ключевые роли команды по модели Белбина",
            descriptionKk: "Белбин моделі бойынша төрт негізгі команда рөлі"
          }
        ],
        solvedExamples: [
          {
            question: "Your group of four needs to create a science fair project. Assign Belbin roles to maximize efficiency.",
            questionRu: "Ваша группа из четырёх человек создаёт проект для научной ярмарки. Распределите роли по Белбину для максимальной эффективности.",
            questionKk: "Төрт адамдық тобыңыз ғылыми жәрмеңке жобасын жасауы керек. Тиімділікті арттыру үшін Белбин рөлдерін бөліңіз.",
            steps: [
              { en: "Creative: brainstorms project ideas and innovative approaches. Evaluator: researches which idea is most feasible and scientifically sound.", ru: "Креативщик: генерирует идеи и инновационные подходы. Аналитик: исследует, какая идея наиболее осуществима.", kk: "Шығармашыл: жоба идеялары мен инновациялық тәсілдерді ойлап табады. Бағалаушы: қай идеяның ең мүмкін екенін зерттейді." },
              { en: "Coordinator: creates the timeline and delegates tasks. Implementer: builds the prototype and poster.", ru: "Координатор: составляет график и распределяет задачи. Исполнитель: создаёт прототип и постер.", kk: "Үйлестіруші: кесте жасап, тапсырмаларды бөледі. Орындаушы: прототип пен постерді жасайды." }
            ],
            answer: "Creative generates ideas, Evaluator assesses feasibility, Coordinator manages timeline and tasks, Implementer builds the project. Each person plays to their strength.",
            answerRu: "Креативщик генерирует идеи, Аналитик оценивает осуществимость, Координатор управляет графиком и задачами, Исполнитель создаёт проект. Каждый использует свои сильные стороны.",
            answerKk: "Шығармашыл идеялар ойлап табады, Бағалаушы мүмкіндікті бағалайды, Үйлестіруші кесте мен тапсырмаларды басқарады, Орындаушы жобаны жасайды. Әрқайсысы өз күшті жағын қолданады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the Coordinator role do in Belbin's model?",
            questionRu: "Что делает Координатор в модели Белбина?",
            questionKk: "Белбин моделінде Үйлестіруші не істейді?",
            answer: "The Coordinator organizes the team, sets objectives, delegates tasks, and ensures everyone stays on track.",
            answerRu: "Координатор организует команду, ставит цели, распределяет задачи и следит за тем, чтобы все оставались на верном пути.",
            answerKk: "Үйлестіруші команданы ұйымдастырады, мақсаттар қояды, тапсырмаларды бөледі және барлығының дұрыс бағытта қалуын қамтамасыз етеді.",
            hint: "Think of a team captain who organizes but does not do all the work.",
            hintRu: "Представьте капитана команды, который организует, но не делает всю работу сам.",
            hintKk: "Ұйымдастыратын, бірақ барлық жұмысты өзі жасамайтын команда капитанын елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You always come up with ideas but struggle to finish tasks. Which Belbin role fits you, and who should you partner with?",
            questionRu: "Вы всегда генерируете идеи, но с трудом доводите задачи до конца. Какая роль вам подходит и с кем стоит работать в паре?",
            questionKk: "Сіз әрқашан идеялар ойлап табасыз, бірақ тапсырмаларды аяқтауға қиналасыз. Қай Белбин рөлі сізге сәйкес және кіммен жұптасуыңыз керек?",
            answer: "You are likely a Creative (idea generator). Partner with an Implementer who excels at executing and completing tasks, and a Coordinator who can help manage timelines.",
            answerRu: "Вы, скорее всего, Креативщик (генератор идей). Работайте в паре с Исполнителем, который отлично выполняет и завершает задачи, и с Координатором, который поможет управлять сроками.",
            answerKk: "Сіз, ықтимал, Шығармашылсыз (идея генераторы). Тапсырмаларды орындауда және аяқтауда жақсы Орындаушымен, сондай-ақ мерзімдерді басқаруға көмектесетін Үйлестірушімен жұптасыңыз.",
            hint: "Creatives need Implementers to turn ideas into reality.",
            hintRu: "Креативщикам нужны Исполнители, чтобы воплотить идеи в жизнь.",
            hintKk: "Шығармашылдарға идеяларды жүзеге асыру үшін Орындаушылар қажет.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your team has two Creatives and two Implementers but no Coordinator or Evaluator. What problems might arise, and how would you solve them?",
            questionRu: "В команде два Креативщика и два Исполнителя, но нет Координатора и Аналитика. Какие проблемы могут возникнуть и как их решить?",
            questionKk: "Командада екі Шығармашыл және екі Орындаушы бар, бірақ Үйлестіруші мен Бағалаушы жоқ. Қандай мәселелер туындауы мүмкін және оларды қалай шешесіз?",
            answer: "Problems: Too many ideas with no one to evaluate feasibility (no Evaluator), and no one to coordinate timelines and delegate (no Coordinator). Solution: One Creative can take on the Evaluator role by critically assessing ideas before passing them to Implementers. One Implementer can serve as Coordinator by creating a schedule and checking progress. People can flex into secondary roles when needed.",
            answerRu: "Проблемы: слишком много идей, но некому оценить их осуществимость (нет Аналитика), и некому координировать сроки и распределять задачи (нет Координатора). Решение: один Креативщик может взять на себя роль Аналитика, критически оценивая идеи перед передачей Исполнителям. Один Исполнитель может выступить Координатором, составив график и отслеживая прогресс. При необходимости люди могут переключаться на вторичные роли.",
            answerKk: "Мәселелер: тым көп идея бар, бірақ мүмкіндікті бағалайтын ешкім жоқ (Бағалаушы жоқ), және мерзімдерді үйлестіретін және бөлетін ешкім жоқ (Үйлестіруші жоқ). Шешім: бір Шығармашыл идеяларды Орындаушыларға беру алдында сыни бағалап, Бағалаушы рөлін алуы мүмкін. Бір Орындаушы кесте жасап, прогресті бақылап, Үйлестіруші рөлін атқаруы мүмкін. Қажет болғанда адамдар қосымша рөлдерге бейімделе алады.",
            hint: "Think about what happens without leadership and without quality control.",
            hintRu: "Подумайте, что происходит без руководства и контроля качества.",
            hintKk: "Басшылық пен сапа бақылаусыз не болатынын ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Handling Disagreements",
        titleRu: "Работа с разногласиями",
        titleKk: "Келіспеушіліктерді шешу",
        content: "Disagreements are natural and can be productive when handled well. The key is to separate the person from the problem — attack ideas, not people. Using I-statements and active listening transforms conflict from destructive to constructive.",
        contentRu: "Разногласия естественны и могут быть продуктивными при правильном подходе. Ключ — отделить человека от проблемы: критикуйте идеи, а не людей. Использование «я-высказываний» и активного слушания превращает конфликт из деструктивного в конструктивный.",
        contentKk: "Келіспеушіліктер табиғи және дұрыс басқарылған кезде өнімді болуы мүмкін. Басты нәрсе — адамды мәселеден бөлу: адамдарды емес, идеяларды сынаңыз. «Мен-мәлімдемелерін» және белсенді тыңдауды қолдану қақтығысты жағымсыздан конструктивтіге айналдырады.",
        keyFormulas: [
          {
            formula: "DESC: Describe (situation) → Express (feelings) → Specify (solution) → Consequences (positive outcome)",
            formulaRu: "DESC: Опиши (ситуацию) → Выскажи (чувства) → Уточни (решение) → Последствия (позитивный итог)",
            formulaKk: "DESC: Сипатта (жағдайды) → Біл (сезімді) → Нақтыла (шешімді) → Салдары (оң нәтиже)",
            description: "Four-step framework for addressing disagreements assertively",
            descriptionRu: "Четырёхшаговая модель для настойчивого разрешения разногласий",
            descriptionKk: "Келіспеушіліктерді батыл шешудің төрт қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "A group member keeps changing the project plan without telling others. Use the DESC model to address this.",
            questionRu: "Член группы постоянно меняет план проекта, не уведомляя других. Используйте модель DESC.",
            questionKk: "Топ мүшесі жоба жоспарын басқаларға хабарламай өзгертіп жатады. DESC моделін қолданыңыз.",
            steps: [
              { en: "Describe + Express: 'I noticed the project outline was changed twice this week without a group discussion. I feel confused because I was working on the original plan.'", ru: "Опишите + Выразите: «Я заметил, что план проекта менялся дважды за неделю без обсуждения в группе. Я чувствую растерянность, потому что работал по первоначальному плану.»", kk: "Сипаттаңыз + Білдіріңіз: «Осы аптада жоба жоспары топтық талқылаусыз екі рет өзгергенін байқадым. Мен бастапқы жоспар бойынша жұмыс істегендіктен шатасып қалдым.»" },
              { en: "Specify + Consequences: 'Could we agree to discuss any changes in our group chat before implementing them? That way we all stay aligned and avoid redoing work.'", ru: "Уточните + Последствия: «Можем ли мы договориться обсуждать изменения в групповом чате перед их внедрением? Так мы будем согласованы и избежим переделок.»", kk: "Нақтылаңыз + Салдар: «Өзгерістерді енгізу алдында топтық чатта талқылауға келісе аламыз ба? Сонда біз барлығымыз үйлескен боламыз және қайта жұмыс істеуден аулақ боламыз.»" }
            ],
            answer: "DESC approach: Describe the behavior factually, express how it affects you, specify a solution (discuss changes first), and state the positive consequence (aligned teamwork).",
            answerRu: "Подход DESC: опишите поведение фактически, выразите, как оно на вас влияет, уточните решение (сначала обсуждать изменения) и укажите положительное следствие (слаженная командная работа).",
            answerKk: "DESC тәсілі: мінез-құлықты нақты сипаттаңыз, оның сізге қалай әсер ететінін білдіріңіз, шешімді нақтылаңыз (алдымен өзгерістерді талқылау) және оң салдарды көрсетіңіз (үйлескен командалық жұмыс)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the 'S' in DESC stand for?",
            questionRu: "Что означает буква «S» в модели DESC?",
            questionKk: "DESC моделіндегі «S» әрпі нені білдіреді?",
            answer: "Specify — propose a specific solution or change you would like to see.",
            answerRu: "Specify (уточнить) — предложить конкретное решение или изменение, которое вы хотели бы видеть.",
            answerKk: "Specify (нақтылау) — көргіңіз келетін нақты шешімді немесе өзгерісті ұсыну.",
            hint: "After describing and expressing, you need to suggest what should change.",
            hintRu: "После описания и выражения чувств нужно предложить, что изменить.",
            hintKk: "Сипаттағаннан және сезімді білдіргеннен кейін нені өзгерту керектігін ұсыну қажет.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Two friends disagree about where to eat lunch. One says 'You always pick, I never get a say!' Use DESC to help them resolve it.",
            questionRu: "Двое друзей спорят, где обедать. Один говорит: «Ты всегда выбираешь, а я ничего не решаю!» Используйте DESC.",
            questionKk: "Екі дос түскі ас қайда ішуді талқылап жатыр. Бірі: «Сен әрқашан таңдайсың, менің айтқаным жоқ!» дейді. DESC қолданыңыз.",
            answer: "D: 'We have eaten at your choice the last three days.' E: 'I feel like my preferences are not being considered.' S: 'How about we take turns choosing — you pick today, I pick tomorrow?' C: 'That way we both feel included and avoid this argument.'",
            answerRu: "D: «Последние три дня мы ели там, где выбирал ты.» E: «Я чувствую, что мои предпочтения не учитываются.» S: «Может, будем выбирать по очереди — сегодня ты, завтра я?» C: «Так мы оба будем чувствовать себя услышанными и избежим этого спора.»",
            answerKk: "D: «Соңғы үш күнде сен таңдаған жерде тамақтандық.» E: «Менің қалауым ескерілмейді деп сеземін.» S: «Кезекпен таңдасақ қалай? Бүгін сен, ертең мен?» C: «Сонда екеуміз де ескерілгендей сезінеміз және осы дауды болдырмаймыз.»",
            hint: "Keep it factual (3 days), express the feeling (excluded), propose a fair system (turns).",
            hintRu: "Будьте объективны (3 дня), выразите чувство (исключённость), предложите справедливую систему (по очереди).",
            hintKk: "Фактілі болыңыз (3 күн), сезімді білдіріңіз (шеттетілу), әділ жүйе ұсыныңыз (кезекпен).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "During a group project, you and a teammate have fundamentally different visions for the final product. Neither is wrong — they are just different. How do you handle this using DESC while also exploring compromise?",
            questionRu: "В групповом проекте у вас и коллеги принципиально разные видения конечного продукта. Ни одно не ошибочно — просто разные. Как применить DESC и найти компромисс?",
            questionKk: "Топтық жобада сіз бен командаласыңыздың соңғы өнім туралы түбегейлі әртүрлі көзқарастарыңыз бар. Екеуі де қате емес — тек әртүрлі. DESC қолданып, ымыраға қалай жетесіз?",
            answer: "D: 'We both have strong but different ideas for the project direction.' E: 'I feel stuck because neither of us wants to give up our vision, and I value both ideas.' S: 'Can we list the strengths of each approach and find elements to combine? Or we could present both concepts to the group and let majority input guide the final choice.' C: 'Merging the best parts would create a stronger project than either idea alone, and we both feel ownership.'",
            answerRu: "D: «У нас обоих сильные, но разные идеи направления проекта.» E: «Я чувствую себя в тупике, потому что ни один из нас не хочет отказаться от своего видения, а я ценю обе идеи.» S: «Может, перечислим сильные стороны каждого подхода и найдём, что можно объединить? Или представим обе концепции группе и позволим большинству направить окончательный выбор.» C: «Объединение лучших частей создаст более сильный проект, чем любая из идей по отдельности, и мы оба почувствуем свою причастность.»",
            answerKk: "D: «Екеуміздің де жоба бағыты бойынша күшті, бірақ әртүрлі идеяларымыз бар.» E: «Екеуміз де өз көзқарасымыздан бас тартқымыз келмейтіндіктен тығырыққа тірелдім деп сеземін, ал мен екі идеяны да бағалаймын.» S: «Әр тәсілдің күшті жақтарын тізіп, біріктіретін элементтерді табайық па? Немесе екі тұжырымдаманы да топқа ұсынып, соңғы таңдауды көпшілік пікірге қалдырайық.» C: «Ең жақсы бөліктерді біріктіру екі идеяның кез келгенінен де күшті жоба жасайды, әрі екеуміз де меншіктілік сезінеміз.»",
            hint: "When both ideas are valid, look for a synthesis rather than one person winning.",
            hintRu: "Когда оба варианта обоснованы, ищите синтез, а не победу одной стороны.",
            hintKk: "Екі идея да дұрыс болғанда, бір жақтың жеңуі емес, синтез іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Interviewing",
        titleRu: "Интервьюирование",
        titleKk: "Сұхбат жүргізу",
        content: "Whether you are conducting or taking an interview, preparation is the foundation of success. Good interviewees research the opportunity and prepare STAR stories for behavioral questions. Good interviewers prepare open-ended questions that reveal character and competence.",
        contentRu: "Будь вы интервьюер или интервьюируемый, подготовка — основа успеха. Хорошие кандидаты изучают возможность и готовят истории по методу STAR для поведенческих вопросов. Хорошие интервьюеры готовят открытые вопросы, раскрывающие характер и компетентность.",
        contentKk: "Сіз сұхбат жүргізсеңіз де, алсаңыз да, дайындық табыстың негізі. Жақсы үміткерлер мүмкіндікті зерттеп, мінез-құлық сұрақтарына STAR әңгімелерін дайындайды. Жақсы сұхбаттасушылар мінез бен құзыреттілікті ашатын ашық сұрақтар дайындайды.",
        keyFormulas: [
          {
            formula: "STAR: Situation → Task → Action → Result",
            formulaRu: "STAR: Ситуация → Задача → Действие → Результат",
            formulaKk: "STAR: Жағдай → Тапсырма → Әрекет → Нәтиже",
            description: "Framework for answering behavioral interview questions with a structured story",
            descriptionRu: "Модель для ответа на поведенческие вопросы с помощью структурированной истории",
            descriptionKk: "Мінез-құлық сұрақтарына құрылымдық әңгімемен жауап беру моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are interviewing for a student council position and are asked: 'Tell me about a time you showed leadership.' Use STAR to respond.",
            questionRu: "Вы проходите собеседование на должность в ученическом совете: «Расскажите о случае, когда вы проявили лидерство.» Ответьте по STAR.",
            questionKk: "Оқушылар кеңесіне сұхбат тапсырудасыз: «Көшбасшылық көрсеткен жағдайыңызды айтыңыз.» STAR-мен жауап беріңіз.",
            steps: [
              { en: "Situation + Task: 'Last semester, our group project team was falling behind on a science assignment with only 3 days left. No one had taken charge, so I stepped up to organize the effort.'", ru: "Ситуация + Задача: «В прошлом семестре наша группа отставала по научному проекту, осталось 3 дня. Никто не взял на себя руководство, и я решил организовать работу.»", kk: "Жағдай + Тапсырма: «Өткен семестрде біздің топтың ғылыми тапсырмасы 3 күн қалды, артта қалдық. Ешкім басшылық алмағанда, мен жұмысты ұйымдастыруды шештім.»" },
              { en: "Action + Result: 'I created a shared document, divided tasks based on each person's strengths, and set daily check-ins. We submitted on time and received an A — the teacher noted our strong collaboration.'", ru: "Действие + Результат: «Я создал общий документ, распределил задачи по сильным сторонам каждого и назначил ежедневные проверки. Мы сдали вовремя и получили отлично — учитель отметил нашу командную работу.»", kk: "Іс-әрекет + Нәтиже: «Мен ортақ құжат жасап, тапсырмаларды әр адамның күшті жақтарына бөлдім және күнделікті тексерулер белгіледім. Біз уақытында тапсырдық және A алдық — мұғалім біздің командалық жұмысымызды атап өтті.»" }
            ],
            answer: "STAR: Situation — team falling behind; Task — needed someone to organize; Action — created plan, divided tasks, daily check-ins; Result — submitted on time with an A.",
            answerRu: "STAR: Ситуация — команда отставала; Задача — нужен был организатор; Действие — создал план, распределил задачи, ежедневные проверки; Результат — сдали вовремя и получили отлично.",
            answerKk: "STAR: Жағдай — команда артта қалды; Тапсырма — ұйымдастырушы қажет болды; Іс-әрекет — жоспар жасадым, тапсырмаларды бөлдім, күнделікті тексерулер өткіздім; Нәтиже — уақытында тапсырдық және A алдық."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What do the four letters in STAR stand for?",
            questionRu: "Что означают четыре буквы в STAR?",
            questionKk: "STAR-дағы төрт әріп нені білдіреді?",
            answer: "Situation, Task, Action, Result.",
            answerRu: "Ситуация, Задача, Действие, Результат.",
            answerKk: "Жағдай, Тапсырма, Іс-әрекет, Нәтиже.",
            hint: "Think of telling a story: where, what needed to be done, what you did, and what happened.",
            hintRu: "Подумайте о рассказе: где, что нужно было сделать, что вы сделали и что получилось.",
            hintKk: "Әңгіме айту: қайда, не істеу керек болды, не істедіңіз, нәтиже не болды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are asked in an interview: 'Describe a time you failed.' Outline a STAR response that shows growth.",
            questionRu: "На собеседовании вас спрашивают: «Расскажите о случае, когда вы потерпели неудачу.» Составьте ответ по STAR, показывающий рост.",
            questionKk: "Сұхбатта сізден: «Сәтсіздікке ұшыраған жағдайыңызды айтыңыз» деп сұралады. Өсуді көрсететін STAR жауабын жоспарлаңыз.",
            answer: "S: Tried to organize a charity event with only 1 week of planning. T: Needed to sell 100 tickets. A: Did not delegate tasks and tried to do everything alone. R: Only sold 40 tickets. But I learned that delegation is essential, and the next event (where I used a team approach) sold 150 tickets.",
            answerRu: "S: Пытался организовать благотворительное мероприятие всего за 1 неделю планирования. T: Нужно было продать 100 билетов. A: Не делегировал задачи и пытался сделать всё сам. R: Продал только 40 билетов. Но я понял, что делегирование необходимо, и на следующем мероприятии (где я работал с командой) продал 150 билетов.",
            answerKk: "S: Тек 1 апталық жоспарлаумен қайырымдылық іс-шарасын ұйымдастыруға тырыстым. T: 100 билет сату керек еді. A: Тапсырмаларды бөлмей, барлығын өзім жасауға тырыстым. R: Тек 40 билет саттым. Бірақ тапсырмаларды бөлу маңызды екенін түсіндім, және келесі іс-шарада (командамен жұмыс істегенде) 150 билет саттым.",
            hint: "The key is showing what you learned and how you improved afterward.",
            hintRu: "Ключ — показать, чему вы научились и как улучшились.",
            hintKk: "Негізгі — не үйренгеніңізді және кейін қалай жақсарғаныңызды көрсету.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are conducting an interview for your school newspaper. Write three questions — one about skills, one about motivation, and one behavioral question — that would reveal whether the candidate is a good fit.",
            questionRu: "Вы проводите собеседование для школьной газеты. Напишите три вопроса — о навыках, мотивации и один поведенческий — чтобы понять, подходит ли кандидат.",
            questionKk: "Мектеп газеті үшін сұхбат жүргізудесіз. Үш сұрақ жазыңыз — дағдылар, мотивация және мінез-құлық — үміткердің сәйкестігін анықтау үшін.",
            answer: "Skills: 'What experience do you have with writing or editing, and can you share a writing sample?' Motivation: 'Why do you want to join the school newspaper, and what topics are you most passionate about covering?' Behavioral: 'Tell me about a time you had to meet a tight deadline — what did you do and what was the result?' — These three cover competence, fit, and real-world performance.",
            answerRu: "Навыки: «Какой у вас опыт письма или редактирования, и можете ли вы показать пример работы?» Мотивация: «Почему вы хотите присоединиться к школьной газете и какие темы вас больше всего увлекают?» Поведенческий: «Расскажите о случае, когда вам нужно было уложиться в жёсткий срок — что вы сделали и каков был результат?» — Эти три вопроса охватывают компетентность, соответствие и реальную эффективность.",
            answerKk: "Дағдылар: «Жазу немесе редакциялау бойынша қандай тәжірибеңіз бар, жазба үлгісін көрсете аласыз ба?» Мотивация: «Мектеп газетіне неге қосылғыңыз келеді және қай тақырыптарды жазуға қызығасыз?» Мінез-құлық: «Қатаң мерзімге үлгеру керек болған жағдайды айтыңыз — не істедіңіз және нәтиже қандай болды?» — Бұл үш сұрақ құзыреттілікті, сәйкестікті және нақты өнімділікті қамтиды.",
            hint: "Cover three dimensions: can they do it, do they want to do it, and have they done something similar before?",
            hintRu: "Охватите три измерения: могут ли, хотят ли, делали ли подобное раньше?",
            hintKk: "Үш өлшемді қамтыңыз: жасай ала ма, жасағысы келе ме, бұрын ұқсас нәрсе жасады ма?",
            xp: 20
          }
        ]
      },
      {
        title: "Social Media Communication",
        titleRu: "Общение в социальных сетях",
        titleKk: "Әлеуметтік желілерде қарым-қатынас",
        content: "Social media is a powerful communication tool, but everything you post creates a permanent digital footprint. The Grandma Test is a simple filter: if you would not want your grandmother to see it, do not post it. Building a positive online presence now can help with future college and career opportunities.",
        contentRu: "Социальные сети — мощный инструмент коммуникации, но каждая публикация создаёт постоянный цифровой след. «Тест бабушки» — простой фильтр: если бы вы не хотели, чтобы бабушка это увидела, не публикуйте. Позитивное присутствие онлайн помогает в будущем при поступлении и карьере.",
        contentKk: "Әлеуметтік желілер қуатты қарым-қатынас құралы, бірақ жариялаған барлық нәрсеңіз тұрақты цифрлық із қалдырады. Әже тесті — қарапайым сүзгі: әжеңіздің көргенін қаламасаңыз, жарияламаңыз. Қазір оң онлайн болмыс құру болашақ оқу және мансап мүмкіндіктеріне көмектеседі.",
        keyFormulas: [
          {
            formula: "Digital Footprint Check: Would I want my teacher, future employer, or grandmother to see this?",
            formulaRu: "Проверка цифрового следа: Хотел бы я, чтобы это увидели мой учитель, будущий работодатель или бабушка?",
            formulaKk: "Цифрлық ізді тексеру: Мұны мұғалімім, болашақ жұмыс берушім немесе әжем көргенін қалар едім бе?",
            description: "Quick filter for deciding what to post online",
            descriptionRu: "Быстрый фильтр для принятия решения о публикации",
            descriptionKk: "Онлайн не жариялау керектігін шешудің жылдам сүзгісі"
          }
        ],
        solvedExamples: [
          {
            question: "You took a funny but embarrassing video of a friend without their permission and are considering posting it. Apply the Digital Footprint Check.",
            questionRu: "Вы сняли смешное, но неловкое видео друга без разрешения и думаете опубликовать. Примените проверку цифрового следа.",
            questionKk: "Досыңыздың рұқсатынсыз күлкілі, бірақ ұятты видео түсірдіңіз және жариялауды ойлайсыз. Цифрлық із тексерісін қолданыңыз.",
            steps: [
              { en: "Apply the filter: Would your teacher approve? Probably not — it embarrasses someone. Would a future employer see this as good judgment? No. Would your grandmother be proud? No.", ru: "Примените фильтр: Одобрит ли учитель? Скорее нет — это кого-то смущает. Оценит ли будущий работодатель ваше решение? Нет. Гордилась бы бабушка? Нет.", kk: "Сүзгіні қолданыңыз: Мұғалім мақұлдай ма? Мүмкін жоқ — ол біреуді ұятқа қалдырады. Болашақ жұмыс беруші мұны жақсы шешім деп бағалай ма? Жоқ. Әжеңіз мақтан тұтар ма еді? Жоқ." },
              { en: "Decision: Do not post it. If you want to share the funny moment, keep it private between friends. Also, ask your friend before sharing anything involving them online.", ru: "Решение: Не публикуйте. Если хотите поделиться смешным моментом, оставьте его приватным. Также спросите друга перед публикацией.", kk: "Шешім: Жарияламаңыз. Күлкілі сәтпен бөліскіңіз келсе, оны достар арасында жеке сақтаңыз. Сондай-ақ, жариялаудан бұрын досыңыздан сұраңыз." }
            ],
            answer: "Do not post it. It fails the Digital Footprint Check on all three criteria, and sharing someone's embarrassing moment without permission is harmful regardless of intent.",
            answerRu: "Не публикуйте. Это не проходит проверку цифрового следа по всем трём критериям, а публикация чужого неловкого момента без разрешения вредна независимо от намерений.",
            answerKk: "Жарияламаңыз. Бұл цифрлық із тексерісінің үш критерийінің бәрінен өтпейді, әрі біреудің ұятты сәтін рұқсатсыз бөлісу ниетке қарамастан зиянды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a 'digital footprint'?",
            questionRu: "Что такое «цифровой след»?",
            questionKk: "«Цифрлық із» дегеніміз не?",
            answer: "A digital footprint is the permanent record of everything you post, like, comment on, or share online — it can be found by anyone, including future colleges and employers.",
            answerRu: "Цифровой след — это постоянная запись всего, что вы публикуете, лайкаете, комментируете или репостите онлайн — его может найти кто угодно, включая будущие вузы и работодателей.",
            answerKk: "Цифрлық із — сіз онлайн жариялаған, лайк басқан, пікір қалдырған немесе бөліскен барлық нәрсенің тұрақты жазбасы — оны кез келген адам, соның ішінде болашақ университеттер мен жұмыс берушілер таба алады.",
            hint: "Think of it as footprints in concrete — they never go away.",
            hintRu: "Представьте следы в бетоне — они никогда не исчезают.",
            hintKk: "Оны бетондағы із деп елестетіңіз — олар ешқашан жойылмайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give two examples of social media posts that could negatively affect a college application.",
            questionRu: "Приведите два примера постов в соцсетях, которые могут негативно повлиять на поступление в вуз.",
            questionKk: "Университетке түсуге теріс әсер ететін әлеуметтік желідегі жазбалардың екі мысалын келтіріңіз.",
            answer: "1) Photos or posts showing illegal activity (underage drinking, vandalism). 2) Bullying or hateful comments about classmates, teachers, or groups of people. Admissions officers routinely check applicants' public social media.",
            answerRu: "1) Фото или посты, показывающие незаконную деятельность (распитие алкоголя несовершеннолетними, вандализм). 2) Буллинг или ненавистнические комментарии об одноклассниках, учителях или группах людей. Приёмные комиссии регулярно проверяют публичные соцсети абитуриентов.",
            answerKk: "1) Заңсыз әрекетті көрсететін фото немесе жазбалар (кәмелетке толмағандардың алкоголь ішуі, вандализм). 2) Сыныптастар, мұғалімдер немесе адам топтары туралы буллинг немесе өшпенділік пікірлер. Қабылдау комиссиялары үміткерлердің жария әлеуметтік желілерін жиі тексереді.",
            hint: "Think about what an admissions officer would find concerning.",
            hintRu: "Подумайте, что может обеспокоить сотрудника приёмной комиссии.",
            hintKk: "Қабылдау кеңсесі қызметкерін не алаңдатуы мүмкін екенін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a positive social media strategy for a student who wants to showcase their passion for environmental science to future universities. What should they post, how often, and on which platforms?",
            questionRu: "Разработайте позитивную стратегию соцсетей для ученика, который хочет показать университетам свою страсть к экологии. Что, как часто и на каких платформах публиковать?",
            questionKk: "Болашақ университеттерге экологияға деген құмарлығын көрсеткісі келетін оқушы үшін оң әлеуметтік желі стратегиясын жасаңыз. Нені, қаншалықты жиі және қай платформаларда жариялау керек?",
            answer: "Platform: LinkedIn for professional network, Instagram for visual projects. Content: Weekly posts showing science experiments, volunteer cleanups, book reviews on environmental topics, and reflections on relevant news. Frequency: 2-3 times per week to stay active without spamming. Also: follow and engage with environmental organizations, universities, and scientists. This creates a digital portfolio that demonstrates genuine passion.",
            answerRu: "Платформа: LinkedIn для профессиональной сети, Instagram для визуальных проектов. Контент: еженедельные посты о научных экспериментах, волонтёрских уборках, обзорах книг по экологии и размышлениях по актуальным новостям. Частота: 2-3 раза в неделю, чтобы оставаться активным без спама. Также: подписывайтесь и взаимодействуйте с экологическими организациями, университетами и учёными. Это создаёт цифровое портфолио, демонстрирующее подлинную увлечённость.",
            answerKk: "Платформа: кәсіби желі үшін LinkedIn, көрнекі жобалар үшін Instagram. Мазмұн: ғылыми тәжірибелер, еріктілердің тазалау шаралары, экология тақырыбындағы кітап шолулары және өзекті жаңалықтар туралы ойлар жайлы апта сайынғы жазбалар. Жиілігі: спам жасамай белсенді болу үшін аптасына 2-3 рет. Сондай-ақ: экологиялық ұйымдарды, университеттерді және ғалымдарды қадағалап, олармен әрекеттесіңіз. Бұл шынайы құмарлықты көрсететін цифрлық портфолио жасайды.",
            hint: "Think of social media as a living portfolio — curate it intentionally.",
            hintRu: "Воспринимайте соцсети как живое портфолио — курируйте целенаправленно.",
            hintKk: "Әлеуметтік желілерді тірі портфолио деп қарастырыңыз — оны мақсатты түрде басқарыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Communication & Leadership_10": {
    planetName: "Communication & Leadership",
    introduction: {
      en: "Elevate your communication with public speaking, persuasion, storytelling, and professional writing. Learn to facilitate meetings, mediate conflicts, and build a personal brand that opens doors.",
      ru: "Поднимите коммуникацию на новый уровень: публичные выступления, убеждение, сторителлинг и деловое письмо. Научитесь вести собрания, посредничать в конфликтах и строить личный бренд."
    },
    sections: [
      {
        title: "Public Speaking",
        titleRu: "Публичные выступления",
        titleKk: "Көпшілік алдында сөйлеу",
        content: "Public speaking is the art of delivering a structured message to an audience with clarity and confidence. Managing stage fright starts with thorough preparation and controlled breathing. The best speakers connect with their audience through eye contact, pauses, and vocal variety.",
        contentRu: "Публичные выступления — это искусство донесения структурированного сообщения до аудитории с ясностью и уверенностью. Управление страхом сцены начинается с тщательной подготовки и контролируемого дыхания. Лучшие ораторы устанавливают связь с аудиторией через зрительный контакт, паузы и разнообразие голоса.",
        contentKk: "Көпшілік алдында сөйлеу — аудиторияға анық және сенімді түрде құрылымдалған хабарды жеткізу өнері. Сахна қорқынышын басқару мұқият дайындық пен бақыланатын тыныс алудан басталады. Ең жақсы шешендер аудиториямен көз контактісі, үзілістер және дауыс әртүрлілігі арқылы байланыс орнатады.",
        keyFormulas: [
          {
            formula: "STAGE: Structure → Tone → Audience → Gesture → Energy",
            formulaRu: "STAGE: Структура → Тон → Аудитория → Жесты → Энергия",
            formulaKk: "STAGE: Құрылым → Дауыс сазы → Аудитория → Ым-ишара → Энергия",
            description: "Five pillars of effective public speaking",
            descriptionRu: "Пять столпов эффективного публичного выступления",
            descriptionKk: "Тиімді көпшілік алдында сөйлеудің бес тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "You must give a 3-minute speech about climate change to your school. Using the STAGE framework, how do you prepare?",
            questionRu: "Вам нужно выступить с 3-минутной речью об изменении климата перед школой. Используя модель STAGE, как вы готовитесь?",
            questionKk: "Мектепте климат өзгерісі туралы 3 минуттық сөз сөйлеуіңіз керек. STAGE моделін қолданып, қалай дайындаласыз?",
            steps: [
              { en: "Structure your speech with a hook, three key points, and a call to action. Choose a confident Tone and research your Audience's concerns.", ru: "Структурируйте речь: зацепка, три ключевых пункта и призыв к действию. Выберите уверенный тон и изучите интересы аудитории.", kk: "Сөзіңізді ілмек, үш негізгі тармақ және іс-әрекетке шақыру арқылы құрылымдаңыз. Сенімді үн таңдаңыз және аудиторияңыздың мәселелерін зерттеңіз." },
              { en: "Practice Gestures that reinforce your points and maintain high Energy by varying your pace and making eye contact across the room.", ru: "Отрабатывайте жесты, подкрепляющие ваши тезисы, и поддерживайте энергию, меняя темп и устанавливая зрительный контакт по всему залу.", kk: "Тармақтарыңызды нығайтатын қимылдарды жаттықтырыңыз және қарқынды өзгертіп, бөлме бойынша көз контактісін сақтап, жоғары энергияны ұстаңыз." }
            ],
            answer: "By following STAGE, you create a well-organized speech with engaging delivery that connects with the audience emotionally and logically.",
            answerRu: "Следуя модели STAGE, вы создаёте хорошо организованную речь с увлекательной подачей, которая связывает вас с аудиторией эмоционально и логически.",
            answerKk: "STAGE моделін ұстанып, аудиториямен эмоциялық және логикалық тұрғыдан байланыс орнататын, тартымды жеткізілетін жақсы ұйымдастырылған сөз жасайсыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the 'A' in the STAGE framework stand for, and why does it matter?",
            questionRu: "Что означает буква «A» в модели STAGE и почему это важно?",
            questionKk: "STAGE моделіндегі «A» әрпі нені білдіреді және неге маңызды?",
            answer: "Audience — understanding who you are speaking to helps you tailor your message, examples, and tone to resonate with them.",
            answerRu: "Audience (аудитория) — понимание того, к кому вы обращаетесь, помогает адаптировать сообщение, примеры и тон, чтобы они резонировали.",
            answerKk: "Audience (аудитория) — кіммен сөйлесіп жатқаныңызды түсіну хабарыңызды, мысалдарыңызды және үніңізді солармен үндес болатындай бейімдеуге көмектеседі.",
            hint: "Think about who is listening to your speech.",
            hintRu: "Подумайте, кто слушает вашу речь.",
            hintKk: "Сөзіңізді кім тыңдап отырғанын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You notice your audience losing attention during a speech. Name two techniques to re-engage them.",
            questionRu: "Вы замечаете, что аудитория теряет внимание во время выступления. Назовите два приёма для повторного вовлечения.",
            questionKk: "Сөз сөйлеу кезінде аудиторияның назары ауып жатқанын байқадыңыз. Оларды қайта тарту үшін екі тәсілді атаңыз.",
            answer: "1) Ask a rhetorical or direct question to make the audience think. 2) Share a short, unexpected story or statistic to recapture curiosity.",
            answerRu: "1) Задайте риторический или прямой вопрос, чтобы заставить аудиторию задуматься. 2) Поделитесь короткой неожиданной историей или статистикой, чтобы вернуть любопытство.",
            answerKk: "1) Аудиторияны ойландыру үшін риторикалық немесе тікелей сұрақ қойыңыз. 2) Қызығушылықты қайтару үшін қысқа, күтпеген оқиға немесе статистика бөлісіңіз.",
            hint: "Interaction and surprise are powerful attention tools.",
            hintRu: "Взаимодействие и неожиданность — мощные инструменты внимания.",
            hintKk: "Өзара әрекеттесу мен кенеттілік — назарды аудартудың күшті құралдары.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Prepare an outline for a 5-minute persuasive speech convincing your school to start a recycling program. Include a hook, three arguments, and a closing call to action.",
            questionRu: "Подготовьте план 5-минутной убедительной речи, убеждающей школу начать программу переработки. Включите зацепку, три аргумента и завершающий призыв к действию.",
            questionKk: "Мектепті қайта өңдеу бағдарламасын бастауға сендіретін 5 минуттық сендіру сөзінің жоспарын дайындаңыз. Ілмек, үш дәлел және қорытынды іс-әрекетке шақыруды қосыңыз.",
            answer: "Hook: 'Our school throws away 200 kg of recyclable waste every month.' Argument 1: Recycling reduces landfill waste and environmental harm. Argument 2: Other schools have saved money through recycling programs. Argument 3: It teaches students responsibility and leadership. Call to action: 'Sign the petition this week and join the green team to make it happen.'",
            answerRu: "Захват: «Наша школа выбрасывает 200 кг перерабатываемых отходов ежемесячно.» Аргумент 1: Переработка сокращает свалочные отходы и вред окружающей среде. Аргумент 2: Другие школы сэкономили деньги благодаря программам переработки. Аргумент 3: Это учит учеников ответственности и лидерству. Призыв: «Подпишите петицию на этой неделе и присоединитесь к зелёной команде.»",
            answerKk: "Ілмек: «Мектебіміз ай сайын 200 кг қайта өңделетін қалдықты лақтырады.» Дәлел 1: Қайта өңдеу қоқыс полигонындағы қалдықты және қоршаған ортаға зиянды азайтады. Дәлел 2: Басқа мектептер қайта өңдеу бағдарламалары арқылы ақша үнемдеді. Дәлел 3: Бұл оқушыларды жауапкершілік пен көшбасшылыққа үйретеді. Шақыру: «Осы аптада петицияға қол қойып, жасыл командаға қосылыңыз.»",
            hint: "Start with a shocking fact, support with logic and examples, end with a clear next step.",
            hintRu: "Начните с шокирующего факта, подкрепите логикой и примерами, завершите чётким следующим шагом.",
            hintKk: "Таңғаларлық фактіден бастаңыз, логика мен мысалдармен қолдаңыз, нақты келесі қадаммен аяқтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Rhetoric & Persuasion",
        titleRu: "Риторика и убеждение",
        titleKk: "Риторика және сендіру",
        content: "Rhetoric is the study of effective communication and persuasion dating back to Aristotle. The three rhetorical appeals — ethos, pathos, and logos — work together to create compelling arguments. Understanding rhetorical devices like repetition, contrast, and metaphor makes your writing and speaking more powerful.",
        contentRu: "Риторика — наука об эффективной коммуникации и убеждении, восходящая к Аристотелю. Три риторических приёма — этос, пафос и логос — работают вместе для создания убедительных аргументов. Понимание риторических средств — повтора, контраста и метафоры — делает речь и письмо мощнее.",
        contentKk: "Риторика — Аристотельге дейін жететін тиімді қарым-қатынас және сендіру ғылымы. Үш риторикалық тәсіл — этос, пафос және логос — бірге жұмыс істеп, сенімді дәлелдер жасайды. Қайталау, қарама-қарсылық және метафора сияқты риторикалық құралдарды түсіну жазу мен сөйлеуді күшейтеді.",
        keyFormulas: [
          {
            formula: "Ethos (credibility) + Pathos (emotion) + Logos (logic) = Persuasion",
            formulaRu: "Этос (доверие) + Пафос (эмоции) + Логос (логика) = Убеждение",
            formulaKk: "Этос (сенім) + Пафос (эмоция) + Логос (логика) = Сендіру",
            description: "Aristotle's three rhetorical appeals",
            descriptionRu: "Три риторических приёма Аристотеля",
            descriptionKk: "Аристотельдің үш риторикалық тәсілі"
          },
          {
            formula: "CLAIM → EVIDENCE → REASONING → COUNTERARGUMENT → REBUTTAL",
            formulaRu: "ТЕЗИС → ДОКАЗАТЕЛЬСТВО → ОБОСНОВАНИЕ → КОНТРАРГУМЕНТ → ОПРОВЕРЖЕНИЕ",
            formulaKk: "ТҰЖЫРЫМ → ДӘЛЕЛ → НЕГІЗДЕМЕ → ҚАРСЫ ДӘЛЕЛ → ЖОҚҚА ШЫҒАРУ",
            description: "Five-step persuasive argument structure",
            descriptionRu: "Пятишаговая структура убедительного аргумента",
            descriptionKk: "Сендіру дәлелінің бес қадамдық құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a short persuasive paragraph arguing for more arts funding in schools, using all three rhetorical appeals.",
            questionRu: "Напишите короткий убедительный абзац в пользу увеличения финансирования искусства в школах, используя все три риторических приёма.",
            questionKk: "Мектептерде өнерді қаржыландыруды арттыру туралы барлық үш риторикалық тәсілді қолданып, қысқа сендіру абзацын жазыңыз.",
            steps: [
              { en: "Ethos: 'As someone who has seen art transform shy students into confident performers...' establishes personal credibility.", ru: "Этос: «Как человек, видевший, как искусство превращает застенчивых учеников в уверенных артистов...» — устанавливает личный авторитет.", kk: "Этос: «Өнердің ұялшақ оқушыларды сенімді орындаушыларға айналдырғанын көрген адам ретінде...» — жеке сенімділікті орнатады." },
              { en: "Pathos: 'Imagine a child discovering their voice through painting for the first time.' Logos: 'Studies show schools with arts programs have 20% higher graduation rates.'", ru: "Пафос: «Представьте ребёнка, впервые обретающего голос через рисование.» Логос: «Исследования показывают, что школы с программами искусства имеют на 20% выше уровень выпуска.»", kk: "Пафос: «Алғаш рет сурет арқылы өз дауысын тапқан баланы елестетіңіз.» Логос: «Зерттеулер көрсеткендей, өнер бағдарламалары бар мектептерде бітіру деңгейі 20% жоғары.»" }
            ],
            answer: "Combining ethos (personal experience), pathos (emotional imagery), and logos (statistics) creates a multi-layered argument that appeals to different audience members.",
            answerRu: "Сочетание этоса (личный опыт), пафоса (эмоциональные образы) и логоса (статистика) создаёт многослойный аргумент, который находит отклик у разных членов аудитории.",
            answerKk: "Этосты (жеке тәжірибе), патосты (эмоциялық бейнелер) және логосты (статистика) біріктіру аудиторияның әртүрлі мүшелеріне әсер ететін көп қабатты аргумент жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which rhetorical appeal does this sentence use: 'Nine out of ten doctors recommend this treatment'?",
            questionRu: "Какой риторический приём использует это предложение: «Девять из десяти врачей рекомендуют это лечение»?",
            questionKk: "Бұл сөйлем қандай риторикалық тәсілді қолданады: «Он дәрігердің тоғызы бұл емді ұсынады»?",
            answer: "Ethos — it uses the authority and credibility of doctors to persuade the audience.",
            answerRu: "Этос — использует авторитет и доверие к врачам, чтобы убедить аудиторию.",
            answerKk: "Этос — аудиторияны сендіру үшін дәрігерлердің беделі мен сенімділігін қолданады.",
            hint: "Think about whose authority is being invoked.",
            hintRu: "Подумайте, чей авторитет привлекается.",
            hintKk: "Кімнің беделіне сілтеме жасалып жатқанын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this weak argument using logos: 'We should have longer lunch breaks because everyone wants it.'",
            questionRu: "Перепишите этот слабый аргумент, используя логос: «Нам нужны более длинные обеденные перерывы, потому что все этого хотят.»",
            questionKk: "Бұл әлсіз дәлелді логос қолданып қайта жазыңыз: «Біз ұзағырақ түскі үзіліс алуымыз керек, өйткені бәрі соны қалайды.»",
            answer: "A survey of 300 students showed that 78% reported difficulty concentrating in afternoon classes. Research from the Journal of School Health found that a 45-minute lunch break improved test scores by 12% compared to 25-minute breaks.",
            answerRu: "Опрос 300 учеников показал, что 78% испытывают трудности с концентрацией на послеобеденных уроках. Исследование Journal of School Health показало, что 45-минутный обеденный перерыв улучшил результаты тестов на 12% по сравнению с 25-минутным.",
            answerKk: "300 оқушыға жүргізілген сауалнама 78%-ының түскі сабақтарда назарын шоғырландыруда қиналатынын көрсетті. Journal of School Health зерттеуі 45 минуттық түскі үзіліс тест нәтижелерін 25 минуттық үзіліспен салыстырғанда 12%-ға жақсартатынын анықтады.",
            hint: "Replace 'everyone wants it' with data, studies, or logical reasoning.",
            hintRu: "Замените «все этого хотят» данными, исследованиями или логическими рассуждениями.",
            hintKk: "«Бәрі соны қалайды» дегенді деректермен, зерттеулермен немесе логикалық пайымдаулармен ауыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Analyze a famous speech excerpt — 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.' Identify all rhetorical devices used.",
            questionRu: "Проанализируйте отрывок знаменитой речи — «У меня есть мечта, что мои четверо маленьких детей однажды будут жить в стране, где о них будут судить не по цвету кожи, а по содержанию характера.» Определите все использованные риторические средства.",
            questionKk: "Атақты сөздің үзіндісін талдаңыз — «Менің арманым бар, менің төрт кішкентай балам бір күні тері түсіне емес, мінез мазмұнына қарай бағаланатын елде өмір сүреді.» Қолданылған барлық риторикалық құралдарды анықтаңыз.",
            answer: "Pathos: 'my four little children' creates emotional connection. Anaphora: 'I have a dream' repeated throughout. Contrast/antithesis: 'color of their skin' vs 'content of their character.' Alliteration: 'content of their character.' Metaphor: 'dream' as a vision for the future. The combination creates a deeply emotional yet logically structured appeal for equality.",
            answerRu: "Пафос: «мои четверо маленьких детей» создаёт эмоциональную связь. Анафора: «У меня есть мечта» повторяется на протяжении речи. Контраст/антитеза: «цвет кожи» против «содержания характера». Аллитерация: «содержания характера» (content of their character). Метафора: «мечта» как видение будущего. Сочетание создаёт глубоко эмоциональный, но логически структурированный призыв к равенству.",
            answerKk: "Патос: «менің төрт кішкентай балам» эмоциялық байланыс жасайды. Анафора: «Менің арманым бар» бүкіл сөз бойы қайталанады. Қарама-қарсылық/антитеза: «тері түсі» мен «мінез мазмұны». Аллитерация: «content of their character» (ағылшынша дыбыс қайталауы). Метафора: болашақ көрінісі ретіндегі «арман». Бұл тіркесім теңдік үшін терең эмоционалды, бірақ логикалық құрылымдалған үндеу жасайды.",
            hint: "Look for emotional language, repetition, contrast between two ideas, and figurative language.",
            hintRu: "Ищите эмоциональный язык, повторы, контраст между двумя идеями и образный язык.",
            hintKk: "Эмоционалды тіл, қайталау, екі идея арасындағы қарама-қарсылық және бейнелі тілді іздеңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Storytelling for Impact",
        titleRu: "Сторителлинг для воздействия",
        titleKk: "Әсер ету үшін әңгімелеу",
        content: "Great communicators use stories to make abstract ideas memorable and relatable. A compelling story follows a clear arc — setup, conflict, and resolution — that mirrors the audience's own challenges. In presentations, college essays, and interviews, storytelling transforms facts into emotional experiences that stick.",
        contentRu: "Великие коммуникаторы используют истории, чтобы сделать абстрактные идеи запоминающимися и понятными. Убедительная история следует чёткой дуге — завязка, конфликт и развязка, — отражающей проблемы аудитории. В презентациях, эссе и интервью сторителлинг превращает факты в эмоциональные переживания.",
        contentKk: "Ұлы коммуникаторлар абстрактты идеяларды есте қаларлық және түсінікті ету үшін әңгімелер қолданады. Сенімді әңгіме нақты доғаны ұстанады — орнату, қақтығыс және шешім — бұл аудиторияның өз мәселелерін көрсетеді. Презентацияларда, эсселерде және сұхбаттарда әңгімелеу фактілерді есте қалатын эмоционалды тәжірибеге айналдырады.",
        keyFormulas: [
          {
            formula: "STORY Arc: Situation → Tension → Outcome → Reflection → Your takeaway",
            formulaRu: "Арка STORY: Ситуация → Напряжение → Итог → Рефлексия → Твой вывод",
            formulaKk: "STORY арка: Жағдай → Шиеленіс → Нәтиже → Рефлексия → Сенің қорытындың",
            description: "Five-part narrative structure for impactful storytelling",
            descriptionRu: "Пятичастная структура повествования для сторителлинга",
            descriptionKk: "Әсерлі әңгімелеу үшін бес бөлімді баяндау құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Use the STORY arc to tell a brief story about overcoming a challenge in a school project.",
            questionRu: "Используйте дугу STORY, чтобы кратко рассказать о преодолении трудности в школьном проекте.",
            questionKk: "Мектеп жобасындағы қиындықты жеңу туралы STORY доғасын қолданып қысқа әңгіме айтыңыз.",
            steps: [
              { en: "Situation: 'Our team had to build a robot for the science fair in two weeks.' Tension: 'Three days before the deadline, the motor broke and we had no spare parts.'", ru: "Ситуация: «Нашей команде нужно было построить робота для научной ярмарки за две недели.» Напряжение: «За три дня до дедлайна сломался мотор, а запасных частей не было.»", kk: "Жағдай: «Біздің команда ғылыми жәрмеңкеге екі аптада робот жасауы керек еді.» Шиеленіс: «Мерзімге үш күн қалғанда мотор бұзылды, қосалқы бөлшектер жоқ еді.»" },
              { en: "Outcome: 'We redesigned using recycled materials and won the creativity award.' Reflection & Takeaway: 'I learned that constraints spark innovation — now I see obstacles as creative opportunities.'", ru: "Результат: «Мы перепроектировали из переработанных материалов и выиграли приз за креативность.» Рефлексия: «Я понял, что ограничения рождают инновации — теперь я вижу препятствия как творческие возможности.»", kk: "Нәтиже: «Қайта өңделген материалдардан қайта жобаладық және шығармашылық сыйлығын жеңдік.» Рефлексия: «Шектеулер инновацияны тудырады — енді кедергілерді шығармашылық мүмкіндік ретінде көремін.»" }
            ],
            answer: "The STORY arc turns a simple project experience into a compelling narrative with emotional tension and a meaningful personal lesson.",
            answerRu: "Дуга STORY превращает простой опыт проекта в захватывающее повествование с эмоциональным напряжением и значимым личным уроком.",
            answerKk: "STORY доғасы қарапайым жоба тәжірибесін эмоционалды шиеленісі мен мәнді жеке сабағы бар тартымды баяндауға айналдырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the 'T' in the STORY framework, and why is it essential for a good story?",
            questionRu: "Что означает «T» в модели STORY и почему это важно для хорошей истории?",
            questionKk: "STORY моделіндегі «T» нені білдіреді және жақсы әңгіме үшін неге маңызды?",
            answer: "Tension — it is the conflict or challenge that creates suspense and keeps the audience engaged. Without tension, a story feels flat.",
            answerRu: "Tension (напряжение) — это конфликт или испытание, создающее интригу и удерживающее внимание аудитории. Без напряжения история кажется плоской.",
            answerKk: "Tension (шиеленіс) — бұл қызығушылық тудырып, аудиторияның назарын ұстайтын қақтығыс немесе қиындық. Шиеленіссіз әңгіме жалпақ болып көрінеді.",
            hint: "Think about what makes you keep reading or listening to a story.",
            hintRu: "Подумайте, что заставляет вас продолжать читать или слушать историю.",
            hintKk: "Әңгімені оқуды немесе тыңдауды жалғастыруға не мәжбүр ететінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this flat statement as a mini-story: 'I volunteered at a hospital and it was meaningful.'",
            questionRu: "Перепишите это скучное утверждение в мини-историю: «Я волонтёрил в больнице, и это было важно.»",
            questionKk: "Бұл жалпақ мәлімдемені шағын әңгімеге қайта жазыңыз: «Мен ауруханада еріктіл болдым, ол маңызды болды.»",
            answer: "On my first day volunteering, an elderly patient refused to eat. I sat with her, learned she missed her garden, and brought her a potted plant the next day. When she smiled and ate her entire lunch, I realized that healing is not just medicine — it is human connection.",
            answerRu: "В первый день волонтёрства пожилая пациентка отказывалась есть. Я посидел(а) с ней, узнал(а), что она скучает по своему саду, и на следующий день принёс(ла) ей комнатное растение. Когда она улыбнулась и съела весь обед, я понял(а), что исцеление — это не только медицина, но и человеческая связь.",
            answerKk: "Еріктілік жасаған алғашқы күнім бір қарт науқас тамақтанудан бас тартты. Мен онымен отырдым, оның бағын сағынғанын білдім және келесі күні оған көшет әкелдім. Ол күлімсіреп, түскі асын толық жегенде, емдеу тек медицина емес, адами байланыс екенін түсіндім.",
            hint: "Add a specific moment, a challenge, and an emotional resolution.",
            hintRu: "Добавьте конкретный момент, трудность и эмоциональное разрешение.",
            hintKk: "Нақты сәт, қиындық және эмоционалды шешім қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are writing a college application essay about a moment that changed your perspective. Use the full STORY arc to outline it with specific details for each stage.",
            questionRu: "Вы пишете эссе для поступления о моменте, изменившем ваш взгляд. Используйте полную дугу STORY с конкретными деталями для каждого этапа.",
            questionKk: "Сіз көзқарасыңызды өзгерткен сәт туралы университетке түсу эссесін жазып жатырсыз. Әр кезең үшін нақты мәліметтермен толық STORY доғасын қолданыңыз.",
            answer: "Situation: Growing up in a small town, I believed success meant leaving. Tension: During a community project, I met a local entrepreneur who built a tech startup without ever leaving our town. Outcome: Her company now employs 50 people and transformed the local economy. Reflection: I realized success is not about where you go but what you build. Takeaway: I now want to study business to bring innovation back to my community.",
            answerRu: "Ситуация: Взрослея в маленьком городе, я считал(а), что успех означает уехать. Напряжение: Во время общественного проекта я встретил(а) местную предпринимательницу, построившую технологический стартап, ни разу не покинув наш город. Результат: Её компания теперь нанимает 50 человек и преобразила местную экономику. Рефлексия: Я понял(а), что успех — это не то, куда ты едешь, а то, что ты строишь. Вывод: Теперь я хочу изучать бизнес, чтобы вернуть инновации в свою общину.",
            answerKk: "Жағдай: Кішкентай қалада өсіп, табыс дегеніміз кету деп ойладым. Шиеленіс: Қоғамдастық жобасы кезінде қаламыздан ешқашан кетпей технологиялық стартап құрған жергілікті кәсіпкермен таныстым. Нәтиже: Оның компаниясы қазір 50 адамды жұмыспен қамтамасыз етіп, жергілікті экономиканы өзгертті. Рефлексия: Табыс қайда баратыныңызда емес, не құратыныңызда екенін түсіндім. Қорытынды: Енді мен қоғамдастығыма инновация әкелу үшін бизнесті оқығым келеді.",
            hint: "Make each STORY stage personal and specific — admissions officers want to see your unique perspective.",
            hintRu: "Сделайте каждый этап STORY личным и конкретным — приёмные комиссии хотят увидеть вашу уникальную перспективу.",
            hintKk: "Әр STORY кезеңін жеке және нақты етіңіз — қабылдау комиссиялары сіздің бірегей көзқарасыңызды көргісі келеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Debate Preparation",
        titleRu: "Подготовка к дебатам",
        titleKk: "Пікірталасқа дайындық",
        content: "Debate preparation requires researching both sides of an issue and anticipating your opponent's arguments. A strong debater builds a case with evidence and logic while preparing rebuttals for the strongest counterarguments. Timed practice rounds build the quick thinking and composure needed for live debates.",
        contentRu: "Подготовка к дебатам требует изучения обеих сторон вопроса и предвидения аргументов оппонента. Сильный дебатёр строит дело с доказательствами и логикой, готовя опровержения сильнейших контраргументов. Тренировки на время развивают быстрое мышление и самообладание для живых дебатов.",
        contentKk: "Пікірталасқа дайындық мәселенің екі жағын зерттеуді және оппоненттің дәлелдерін болжауды талап етеді. Күшті пікірталасшы дәлелдемелер мен логикамен іс құрады, ең күшті қарсы дәлелдерге қарсы жауаптар дайындайды. Уақытты жаттығулар тікелей пікірталастар үшін жылдам ойлау мен сабырлылықты дамытады.",
        keyFormulas: [
          {
            formula: "ARE: Assertion → Reasoning → Evidence",
            formulaRu: "ARE: Утверждение → Обоснование → Доказательство",
            formulaKk: "ARE: Тұжырым → Негіздеме → Дәлел",
            description: "Three-step framework for building a debate argument",
            descriptionRu: "Трёхшаговая модель построения аргумента в дебатах",
            descriptionKk: "Пікірталас дәлелін құрудың үш қадамдық моделі"
          },
          {
            formula: "REBUT: Restate → Expose flaw → Back with evidence → Undermine → Tie back",
            formulaRu: "REBUT: Повтори тезис → Укажи на изъян → Подкрепи доказательством → Ослабь довод → Верни к теме",
            formulaKk: "REBUT: Тезисті қайтала → Кемшілікті көрсет → Дәлелмен растa → Дәйекті әлсірет → Тақырыпқа орал",
            description: "Framework for effective rebuttal in debates",
            descriptionRu: "Модель эффективного опровержения в дебатах",
            descriptionKk: "Пікірталаста тиімді қарсылық білдіру моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Prepare an ARE argument for the position: 'Schools should replace textbooks with tablets.'",
            questionRu: "Подготовьте аргумент ARE для позиции: «Школы должны заменить учебники планшетами.»",
            questionKk: "«Мектептер оқулықтарды планшеттермен ауыстыруы керек» позициясы үшін ARE дәлелін дайындаңыз.",
            steps: [
              { en: "Assertion: 'Schools should transition to tablets for all subjects.' Reasoning: 'Tablets allow instant updates, interactive content, and reduce the weight students carry daily.'", ru: "Утверждение: «Школы должны перейти на планшеты по всем предметам.» Обоснование: «Планшеты позволяют мгновенно обновлять контент, предлагают интерактивность и снижают вес школьных сумок.»", kk: "Тұжырым: «Мектептер барлық пәндер бойынша планшеттерге көшуі керек.» Негіздеме: «Планшеттер контентті лезде жаңартуға, интерактивті мазмұнға мүмкіндік береді және оқушылардың көтеретін салмағын азайтады.»" },
              { en: "Evidence: 'A 2023 study by the Education Technology Association found that tablet-based learning improved test scores by 15% in pilot schools, while reducing textbook costs by 40% over five years.'", ru: "Доказательство: «Исследование 2023 года Ассоциации образовательных технологий показало, что обучение на планшетах улучшило результаты тестов на 15% в пилотных школах и снизило расходы на учебники на 40% за пять лет.»", kk: "Дәлелдеме: «Білім технологиялары қауымдастығының 2023 жылғы зерттеуі планшетпен оқытудың пилоттық мектептерде тест нәтижелерін 15% жақсартып, оқулық шығындарын бес жылда 40% азайтқанын анықтады.»" }
            ],
            answer: "The ARE structure creates a clear, evidence-backed argument that is easy for judges to follow and difficult for opponents to dismiss.",
            answerRu: "Структура ARE создаёт чёткий, подкреплённый доказательствами аргумент, который легко понять судьям и трудно опровергнуть оппонентам.",
            answerKk: "ARE құрылымы судьяларға түсінуге оңай және оппоненттерге жоққа шығаруға қиын, дәлелдермен қолдалатын анық аргумент жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between an assertion and evidence in debate?",
            questionRu: "В чём разница между утверждением и доказательством в дебатах?",
            questionKk: "Пікірталаста тұжырым мен дәлелдеменің айырмашылығы неде?",
            answer: "An assertion is a claim or position you take ('Homework should be optional'), while evidence is the factual support for that claim (statistics, studies, expert opinions).",
            answerRu: "Утверждение — это заявление или позиция, которую вы занимаете («Домашнее задание должно быть необязательным»), а доказательство — фактическая поддержка этого утверждения (статистика, исследования, мнения экспертов).",
            answerKk: "Тұжырым — сіз ұстанатын мәлімдеме немесе позиция («Үй тапсырмасы міндетті болмауы керек»), ал дәлелдеме — осы тұжырымды нақты қолдау (статистика, зерттеулер, сарапшы пікірлері).",
            hint: "One is your opinion, the other proves your opinion.",
            hintRu: "Одно — ваше мнение, другое — доказательство мнения.",
            hintKk: "Бірі — сіздің пікіріңіз, екіншісі — пікіріңіздің дәлелі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your opponent argues: 'Social media should be banned for teens because it causes depression.' Use the REBUT framework to counter this.",
            questionRu: "Ваш оппонент утверждает: «Соцсети должны быть запрещены для подростков, потому что вызывают депрессию.» Используйте модель REBUT для опровержения.",
            questionKk: "Оппонентіңіз: «Әлеуметтік желілер жасөспірімдерге тыйым салынуы керек, себебі депрессияға әкеледі» деп дәлелдейді. REBUT моделін қолданып қарсылық білдіріңіз.",
            answer: "Restate: 'My opponent claims social media causes teen depression.' Expose flaw: 'Correlation is not causation — depression has many factors.' Back with evidence: 'The APA found that moderate social media use actually correlates with better social connectedness.' Undermine: 'Banning removes educational benefits like study groups and news literacy.' Tie back: 'Regulation and education, not bans, address the real issue.'",
            answerRu: "Повтор: «Мой оппонент утверждает, что соцсети вызывают подростковую депрессию.» Выявление ошибки: «Корреляция не причинность — у депрессии много факторов.» Подкрепление доказательством: «APA обнаружила, что умеренное использование соцсетей на самом деле связано с лучшей социальной связанностью.» Подрыв: «Запрет лишает образовательных преимуществ, таких как учебные группы и медиаграмотность.» Возврат к теме: «Регулирование и образование, а не запреты, решают настоящую проблему.»",
            answerKk: "Қайталау: «Оппонентім әлеуметтік желілер жасөспірімдер депрессиясын тудырады дейді.» Қатені ашу: «Корреляция себептілік емес — депрессияның көптеген факторлары бар.» Дәлелмен қолдау: «APA орташа әлеуметтік желі қолдану шын мәнінде жақсы әлеуметтік байланыспен байланысты екенін анықтады.» Әлсірету: «Тыйым салу оқу топтары мен жаңалық сауаттылығы сияқты білім беру артықшылықтарын жояды.» Қайта байланыстыру: «Нақты мәселені реттеу мен білім шешеді, тыйым емес.»",
            hint: "Find the logical flaw first, then support your counter with evidence.",
            hintRu: "Сначала найдите логическую ошибку, затем подкрепите контраргумент доказательствами.",
            hintKk: "Алдымен логикалық қатені табыңыз, содан кейін қарсы дәлеліңізді дәлелдемемен қолдаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are preparing for a debate on 'Universal basic income should be implemented.' Build both the strongest FOR argument and the strongest AGAINST argument using the ARE framework, then explain which side is harder to defend and why.",
            questionRu: "Вы готовитесь к дебатам на тему «Необходимо ввести безусловный базовый доход.» Постройте сильнейший аргумент ЗА и ПРОТИВ, используя ARE, и объясните, какую сторону труднее защищать.",
            questionKk: "«Әмбебап базалық табыс енгізілуі керек» тақырыбына пікірталасқа дайындалып жатырсыз. ARE моделін қолданып, ең күшті ЖАҚТАУШЫ және ҚАРСЫ дәлелді құрыңыз, содан кейін қай жақты қорғау қиынырақ екенін түсіндіріңіз.",
            answer: "FOR — Assertion: UBI eliminates poverty. Reasoning: It provides a financial floor so no one falls below subsistence. Evidence: Finland's UBI pilot showed reduced stress and improved job-seeking. AGAINST — Assertion: UBI is financially unsustainable. Reasoning: The cost would require massive tax increases or cuts to other programs. Evidence: The US Congressional Budget Office estimated $3 trillion annually. The AGAINST side is harder because it must counter emotional appeals about poverty while relying on abstract economic projections that audiences find less compelling.",
            answerRu: "ЗА — Утверждение: ББД устраняет бедность. Обоснование: он обеспечивает финансовый минимум, чтобы никто не оказался ниже прожиточного уровня. Доказательство: пилотный проект ББД в Финляндии показал снижение стресса и улучшение поиска работы. ПРОТИВ — Утверждение: ББД финансово неустойчив. Обоснование: стоимость потребует резкого повышения налогов или сокращения других программ. Доказательство: Бюджетное управление Конгресса США оценило затраты в 3 триллиона долларов ежегодно. Сторону ПРОТИВ защищать труднее, потому что нужно противостоять эмоциональным призывам о бедности, опираясь на абстрактные экономические прогнозы, которые аудитория считает менее убедительными.",
            answerKk: "ЖАҚТАУ — Тұжырым: ӘБТ кедейлікті жояды. Негіздеме: ол ешкім күнкөріс деңгейінен төмен түспеу үшін қаржылық минимум береді. Дәлелдеме: Финляндияның ӘБТ пилоттық жобасы стресстің азайғанын және жұмыс іздеудің жақсарғанын көрсетті. ҚАРСЫ — Тұжырым: ӘБТ қаржылық тұрғыдан тұрақсыз. Негіздеме: құны салықтарды үлкен көлемде арттыруды немесе басқа бағдарламаларды қысқартуды талап етеді. Дәлелдеме: АҚШ Конгресінің Бюджет басқармасы жылына 3 триллион доллар деп бағалады. ҚАРСЫ жақты қорғау қиынырақ, себебі аудитория аз сенімді деп есептейтін абстрактілі экономикалық болжамдарға сүйене отырып, кедейлік туралы эмоционалды үндеулерге қарсы тұру керек.",
            hint: "Build each side with equal strength, then analyze which argument relies on harder-to-prove claims.",
            hintRu: "Постройте обе стороны одинаково сильно, затем проанализируйте, какой аргумент опирается на труднодоказуемые утверждения.",
            hintKk: "Екі жақты бірдей күшті етіп құрыңыз, содан кейін қай дәлел дәлелдеу қиынырақ тұжырымдарға сүйенетінін талдаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Conflict Mediation",
        titleRu: "Посредничество в конфликтах",
        titleKk: "Жанжалда делдалдық",
        content: "Conflict mediation is the skill of helping two or more parties resolve a disagreement by facilitating constructive dialogue. A good mediator remains neutral, validates each side's feelings, and guides everyone toward a mutually acceptable solution. This skill is essential in group projects, friendships, and future professional settings.",
        contentRu: "Посредничество в конфликтах — это навык помощи сторонам в разрешении разногласий через конструктивный диалог. Хороший посредник остаётся нейтральным, признаёт чувства каждой стороны и ведёт всех к взаимоприемлемому решению. Этот навык необходим в групповых проектах, дружбе и профессиональной сфере.",
        contentKk: "Жанжалда делдалдық — конструктивті диалог арқылы тараптарға келіспеушілікті шешуге көмектесу дағдысы. Жақсы делдал бейтарап қалады, әр тараптың сезімін мойындайды және барлығын өзара қолайлы шешімге бағыттайды. Бұл дағды топтық жобаларда, достықта және кәсіби ортада маңызды.",
        keyFormulas: [
          {
            formula: "PEACE: Pause → Each side speaks → Acknowledge feelings → Create options → Establish agreement",
            formulaRu: "PEACE: Пауза → Каждая сторона высказывается → Признай чувства → Найди варианты → Достигни договорённости",
            formulaKk: "PEACE: Үзіліс → Әр тарап сөйлейді → Сезімді мойында → Нұсқа тап → Келісімге кел",
            description: "Five-step conflict mediation framework",
            descriptionRu: "Пятишаговая модель посредничества в конфликтах",
            descriptionKk: "Жанжалда делдалдықтың бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Two classmates are arguing about who should present which section of a group project. Use the PEACE framework to mediate.",
            questionRu: "Два одноклассника спорят о том, кто должен представлять какую часть группового проекта. Используйте модель PEACE для посредничества.",
            questionKk: "Екі сыныптас топтық жобаның қай бөлімін кім ұсыну керек екенін дауласуда. PEACE моделін қолданып делдалдық жасаңыз.",
            steps: [
              { en: "Pause the argument and set ground rules: no interrupting. Let Each side explain their preference and reasoning without judgment.", ru: "Остановите спор и установите правила: не перебивать. Дайте каждой стороне объяснить предпочтение и аргументы без осуждения.", kk: "Дауды тоқтатыңыз және ережелер қойыңыз: бөлмеу. Әр тарапқа өз қалауы мен дәлелдерін сынсыз түсіндіруге мүмкіндік беріңіз." },
              { en: "Acknowledge both feelings: 'I understand you both want to present the topic you worked hardest on.' Create options: each presents their strongest section, or they co-present. Establish agreement on the chosen solution.", ru: "Признайте чувства обоих: «Я понимаю, оба хотят представить тему, над которой больше работали.» Создайте варианты: каждый представляет свою сильную часть или совместная презентация. Зафиксируйте выбранное решение.", kk: "Екі жақтың сезімін мойындаңыз: «Екеуіңіз де ең көп жұмыс істеген тақырыпты ұсынғыңыз келетінін түсінемін.» Нұсқалар жасаңыз: әрқайсысы күшті бөлімін ұсынады немесе бірлесіп ұсынады. Таңдалған шешімге келісім орнатыңыз." }
            ],
            answer: "The PEACE framework de-escalates the conflict by ensuring both parties feel heard, then shifts focus from positions to collaborative solutions.",
            answerRu: "Модель PEACE снижает накал конфликта, обеспечивая, что обе стороны чувствуют себя услышанными, а затем переключает фокус с позиций на совместные решения.",
            answerKk: "PEACE моделі екі тараптың да тыңдалғанын сезінуін қамтамасыз ету арқылы жанжалды бәсеңдетеді, содан кейін назарды позициялардан бірлескен шешімдерге ауыстырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is the 'Pause' step important at the beginning of conflict mediation?",
            questionRu: "Почему шаг «Пауза» важен в начале посредничества?",
            questionKk: "Делдалдықтың басында «Үзіліс» қадамы неге маңызды?",
            answer: "Pausing stops the emotional escalation, gives everyone a moment to calm down, and creates space for rational conversation instead of reactive arguing.",
            answerRu: "Пауза останавливает эмоциональное нарастание, даёт всем момент успокоиться и создаёт пространство для рационального разговора вместо реактивного спора.",
            answerKk: "Үзіліс эмоционалдық шиеленісті тоқтатады, барлығына сабырға келуге сәт береді және импульсивті дау орнына парасатты әңгімеге орын жасайды.",
            hint: "Think about what happens when people argue without stopping.",
            hintRu: "Подумайте, что происходит, когда люди спорят, не останавливаясь.",
            hintKk: "Адамдар тоқтамай дауласқанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During mediation, one person says 'You never listen to me!' How should a mediator reframe this statement?",
            questionRu: "Во время посредничества один человек говорит: «Ты меня никогда не слушаешь!» Как посредник должен переформулировать это?",
            questionKk: "Делдалдық кезінде бір адам «Сен мені ешқашан тыңдамайсың!» дейді. Делдал бұл мәлімдемені қалай қайта тұжырымдауы керек?",
            answer: "The mediator should reframe it as a feeling: 'It sounds like you feel your ideas are not being heard in this group. Can you give a specific example so we can address it?' This removes blame and focuses on the underlying need.",
            answerRu: "Посредник должен переформулировать это как чувство: «Похоже, ты чувствуешь, что твои идеи не слышат в этой группе. Можешь привести конкретный пример, чтобы мы могли это решить?» Это снимает обвинение и фокусируется на истинной потребности.",
            answerKk: "Делдал мұны сезім ретінде қайта тұжырымдауы керек: «Бұл топта идеяларың тыңдалмайды деп сезінетін сияқтысың. Шешу үшін нақты мысал келтіре аласың ба?» Бұл айыптауды алып тастап, түпкі қажеттілікке назар аударады.",
            hint: "Convert accusations into feelings and ask for specific examples.",
            hintRu: "Превратите обвинения в чувства и попросите конкретные примеры.",
            hintKk: "Айыптауларды сезімдерге айналдырыңыз және нақты мысалдар сұраңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are mediating a conflict between two friends who had a falling out over a rumor. One spread it, the other is hurt. Design a complete mediation plan using the PEACE framework with specific dialogue examples for each step.",
            questionRu: "Вы посредничаете в конфликте двух друзей, поссорившихся из-за слуха. Один распространил его, другой обижен. Разработайте полный план посредничества по модели PEACE с примерами диалогов.",
            questionKk: "Сіз қауесет салдарынан араздасқан екі достың жанжалында делдалдық жасап жатырсыз. Бірі таратқан, екіншісі ренжіген. PEACE моделі бойынша әр қадам үшін нақты диалог мысалдарымен толық делдалдық жоспарын жасаңыз.",
            answer: "Pause: 'Let us take a breath. We are here to understand each other, not to win.' Each side speaks: Person A explains the hurt; Person B explains what happened. Acknowledge: 'A, I hear that you felt betrayed. B, it sounds like you did not intend harm.' Create options: B apologizes sincerely; they agree on communication boundaries; they decide how to move forward. Establish: Both sign a 'friendship agreement' about not sharing private info. Follow up in one week.",
            answerRu: "Пауза: «Давайте переведём дух. Мы здесь, чтобы понять друг друга, а не победить.» Каждая сторона говорит: A объясняет обиду; B объясняет, что произошло. Признание: «A, я слышу, что ты почувствовал(а) предательство. B, похоже, ты не хотел(а) навредить.» Создание вариантов: B искренне извиняется; они договариваются о границах общения; решают, как двигаться дальше. Установление: оба подписывают «дружеское соглашение» о нераспространении личной информации. Проверка через неделю.",
            answerKk: "Үзіліс: «Демалып алайық. Біз жеңу үшін емес, бір-бірімізді түсіну үшін осындамыз.» Әр тарап сөйлейді: A өз ренішін түсіндіреді; B не болғанын түсіндіреді. Мойындау: «A, сен опасыздыққа ұшырағандай сезінгеніңді естіп тұрмын. B, сен зиян тигізуді ойламағандайсың.» Нұсқалар жасау: B шынайы кешірім сұрайды; олар қарым-қатынас шекаралары туралы келіседі; әрі қарай қалай жүретінін шешеді. Орнату: екеуі де жеке ақпаратты бөліспеу туралы «достық келісіміне» қол қояды. Бір аптадан кейін қадағалау.",
            hint: "Write actual words you would say at each PEACE step — make it practical, not theoretical.",
            hintRu: "Напишите реальные слова для каждого шага PEACE — сделайте практичным, а не теоретическим.",
            hintKk: "Әр PEACE қадамында айтатын нақты сөздерді жазыңыз — теориялық емес, практикалық етіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Constructive Feedback",
        titleRu: "Конструктивная обратная связь",
        titleKk: "Конструктивті кері байланыс",
        content: "Constructive feedback focuses on behavior and outcomes rather than personal criticism. Delivering feedback effectively means being specific, timely, and solution-oriented so the receiver can actually improve. Learning to receive feedback gracefully is equally important — it accelerates growth and builds resilience.",
        contentRu: "Конструктивная обратная связь фокусируется на поведении и результатах, а не на личной критике. Эффективная обратная связь — конкретная, своевременная и ориентированная на решения, чтобы получатель мог улучшиться. Умение принимать обратную связь так же важно — оно ускоряет рост и развивает устойчивость.",
        contentKk: "Конструктивті кері байланыс жеке сынның орнына мінез-құлық пен нәтижелерге бағытталады. Кері байланысты тиімді беру — нақты, уақтылы және шешімге бағытталған болу, яғни қабылдаушы шынымен жақсара алады. Кері байланысты ұтымды қабылдауды үйрену де маңызды — ол өсуді жеделдетеді және төзімділікті арттырады.",
        keyFormulas: [
          {
            formula: "SBI: Situation → Behavior → Impact",
            formulaRu: "SBI: Ситуация → Поведение → Влияние",
            formulaKk: "SBI: Жағдай → Мінез-құлық → Әсер",
            description: "Framework for delivering specific, non-personal feedback",
            descriptionRu: "Модель конкретной, неличной обратной связи",
            descriptionKk: "Нақты, жеке емес кері байланыс моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your teammate frequently interrupts others during meetings. Use the SBI model to give constructive feedback.",
            questionRu: "Ваш коллега часто перебивает других на собраниях. Используйте модель SBI для конструктивной обратной связи.",
            questionKk: "Команда мүшеңіз жиналыстарда басқаларды жиі бөледі. SBI моделін қолданып конструктивті кері байланыс беріңіз.",
            steps: [
              { en: "Situation: 'During yesterday's project meeting...' Behavior: '...you interrupted Maria three times while she was explaining her research findings.'", ru: "Ситуация: «На вчерашнем собрании по проекту...» Поведение: «...ты перебил Марию три раза, когда она объясняла результаты исследования.»", kk: "Жағдай: «Кешегі жоба жиналысында...» Мінез-құлық: «...сен Марияны зерттеу нәтижелерін түсіндіріп жатқанда үш рет бөлдің.»" },
              { en: "Impact: 'This made Maria lose her train of thought and the team missed important details. It also made others hesitant to share their ideas.' Suggest: 'Could you try noting your thoughts and waiting for a natural pause?'", ru: "Влияние: «Из-за этого Мария потеряла мысль, и команда упустила важные детали. Другие тоже стали бояться делиться идеями.» Предложение: «Можешь попробовать записывать мысли и ждать паузы?»", kk: "Әсері: «Бұл Марияның ойын жоғалтуына және команданың маңызды мәліметтерді жіберуіне себеп болды. Басқалар да идеяларымен бөлісуден тартынды.» Ұсыныс: «Ойларыңызды жазып, табиғи үзілісті күтіп көрсеңіз ше?»" }
            ],
            answer: "SBI separates the person from the behavior, making the feedback feel helpful rather than attacking. Adding a suggestion turns criticism into a growth opportunity.",
            answerRu: "SBI отделяет человека от поведения, делая обратную связь полезной, а не атакующей. Добавление предложения превращает критику в возможность роста.",
            answerKk: "SBI адамды мінез-құлықтан бөліп, кері байланысты шабуыл емес, пайдалы етеді. Ұсыныс қосу сынды өсу мүмкіндігіне айналдырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is wrong with this feedback: 'You are so lazy — you never do your part of the project'?",
            questionRu: "Что не так с этой обратной связью: «Ты такой ленивый — ты никогда не делаешь свою часть проекта»?",
            questionKk: "Бұл кері байланыста не дұрыс емес: «Сен өте жалқаусың — жобадағы өз бөлігіңді ешқашан жасамайсың»?",
            answer: "It attacks the person ('lazy') instead of the behavior, uses absolutes ('never') which feel unfair, and offers no specific example or solution. Better: use SBI to describe a specific instance.",
            answerRu: "Это атакует человека («ленивый») вместо поведения, использует абсолюты («никогда»), которые ощущаются несправедливо, и не предлагает конкретного примера или решения. Лучше: использовать SBI для описания конкретного случая.",
            answerKk: "Бұл мінез-құлықтың орнына адамға шабуыл жасайды («жалқау»), әділетсіз көрінетін абсолюттерді («ешқашан») қолданады және нақты мысал немесе шешім ұсынбайды. Жақсырақ: нақты жағдайды сипаттау үшін SBI қолдану.",
            hint: "Think about whether this describes a behavior or labels a person.",
            hintRu: "Подумайте, описывает ли это поведение или навешивает ярлык на человека.",
            hintKk: "Бұл мінез-құлықты сипаттайды ма, әлде адамға белгі тағады ма, ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your friend asks you to review their college essay. It is unfocused and too long. Write SBI feedback that is honest but encouraging.",
            questionRu: "Друг просит проверить эссе для поступления. Оно расфокусировано и слишком длинное. Напишите SBI-отзыв — честный, но ободряющий.",
            questionKk: "Досыңыз колледж эссесін тексеруді сұрайды. Ол фокуссыз және тым ұзын. Адал, бірақ жігерлендіретін SBI кері байланыс жазыңыз.",
            answer: "Situation: 'In the essay you shared with me...' Behavior: 'The main idea does not appear until paragraph three, and the essay is 800 words over the limit.' Impact: 'A reader might lose interest before reaching your strongest point, and admissions officers may not read past the limit.' Suggestion: 'Your story about the robotics competition is compelling — what if you lead with that and cut the first two paragraphs?'",
            answerRu: "Ситуация: «В эссе, которым ты со мной поделился...» Поведение: «Главная мысль не появляется до третьего абзаца, и эссе на 800 слов превышает лимит.» Влияние: «Читатель может потерять интерес до того, как доберётся до твоего самого сильного момента, а приёмная комиссия может не читать после лимита.» Предложение: «Твоя история о соревновании по робототехнике впечатляет — что если начать с неё и убрать первые два абзаца?»",
            answerKk: "Жағдай: «Сен маған бөліскен эсседе...» Мінез-құлық: «Негізгі ой үшінші абзацқа дейін пайда болмайды, әрі эссе шектен 800 сөзге асып кетеді.» Әсері: «Оқырман ең күшті сәтіңе жеткенше қызығушылығын жоғалтуы мүмкін, ал қабылдау комиссиясы шектен асқанды оқымауы мүмкін.» Ұсыныс: «Робототехника жарысы туралы әңгімең әсерлі — содан бастап, алғашқы екі абзацты алып тастасаң қалай?»",
            hint: "Be specific about what to fix and highlight what is already strong.",
            hintRu: "Укажите конкретно, что исправить, и подчеркните, что уже хорошо.",
            hintKk: "Нені түзету керектігін нақты көрсетіңіз және бұрыннан күшті нені бөліп көрсетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are a team leader and one member consistently submits work late, affecting the whole team. Another member does excellent work but refuses to collaborate. Write SBI feedback for both individuals, considering their different issues.",
            questionRu: "Вы руководитель команды. Один участник постоянно сдаёт работу с опозданием, влияя на всю команду. Другой делает отличную работу, но отказывается сотрудничать. Напишите SBI-отзыв для обоих с учётом их разных проблем.",
            questionKk: "Сіз команда жетекшісісіз. Бір мүше жұмысты үнемі кеш тапсырады, бұл бүкіл командаға әсер етеді. Басқасы тамаша жұмыс жасайды, бірақ ынтымақтасудан бас тартады. Олардың әр түрлі мәселелерін ескере отырып, екеуіне де SBI кері байланыс жазыңыз.",
            answer: "Late member — Situation: 'In the last three assignments...' Behavior: 'Your sections arrived 2-3 days after the agreed deadline.' Impact: 'The team had to rush editing, and we lost points for late submission on two assignments.' Suggestion: 'Can we set earlier personal deadlines for you with check-ins?' Non-collaborator — Situation: 'During our group work sessions...' Behavior: 'You complete your section independently without discussing with the team.' Impact: 'Your work is excellent but does not connect with other sections, creating inconsistencies.' Suggestion: 'What if you joined our 15-minute planning chats so your expertise could guide the whole project?'",
            answerRu: "Опаздывающий участник — Ситуация: «В последних трёх заданиях...» Поведение: «Твои разделы приходили на 2-3 дня позже согласованного срока.» Влияние: «Команде приходилось спешно редактировать, и мы потеряли баллы за позднюю сдачу двух заданий.» Предложение: «Можем установить для тебя более ранние личные сроки с проверками?» Не сотрудничающий участник — Ситуация: «Во время наших групповых сессий...» Поведение: «Ты делаешь свой раздел самостоятельно, не обсуждая с командой.» Влияние: «Твоя работа отличная, но не связана с другими разделами, создавая несостыковки.» Предложение: «Что если ты присоединишься к нашим 15-минутным планёркам, чтобы твоя экспертиза направляла весь проект?»",
            answerKk: "Кешігетін мүше — Жағдай: «Соңғы үш тапсырмада...» Мінез-құлық: «Сенің бөлімдерің келісілген мерзімнен 2-3 күн кеш келді.» Әсері: «Команда асығыс өңдеуге мәжбүр болды және екі тапсырмада кешігу үшін ұпай жоғалттық.» Ұсыныс: «Саған тексерулермен ертерек жеке мерзімдер белгілей аламыз ба?» Ынтымақтаспайтын мүше — Жағдай: «Топтық жұмыс сессияларымызда...» Мінез-құлық: «Сен өз бөлігіңді командамен талқыламай, дербес орындайсың.» Әсері: «Жұмысың тамаша, бірақ басқа бөлімдермен байланыспайды, бұл сәйкессіздіктер тудырады.» Ұсыныс: «Сарапшылығың бүкіл жобаны бағыттауы үшін 15 минуттық жоспарлау чаттарымызға қосылсаң қалай?»",
            hint: "Tailor the feedback to each person's specific behavior — same framework, different approach.",
            hintRu: "Адаптируйте отзыв к конкретному поведению каждого — одна модель, разный подход.",
            hintKk: "Кері байланысты әр адамның нақты мінез-құлқына бейімдеңіз — бір модель, әр түрлі тәсіл.",
            xp: 20
          }
        ]
      },
      {
        title: "Cross-Cultural Communication",
        titleRu: "Межкультурная коммуникация",
        titleKk: "Мәдениетаралық қарым-қатынас",
        content: "Cross-cultural communication means adapting your style to effectively interact with people from different cultural backgrounds. Understanding dimensions like high-context vs. low-context communication, individualism vs. collectivism, and different attitudes toward hierarchy prevents misunderstandings. As Central Asian students preparing for global opportunities, this skill is your competitive advantage.",
        contentRu: "Межкультурная коммуникация означает адаптацию стиля для эффективного взаимодействия с людьми из разных культур. Понимание таких измерений, как высококонтекстная и низкоконтекстная коммуникация, индивидуализм и коллективизм, отношение к иерархии предотвращает недоразумения. Для студентов Центральной Азии, готовящихся к глобальным возможностям, этот навык — конкурентное преимущество.",
        contentKk: "Мәдениетаралық қарым-қатынас — әр түрлі мәдени ортадан келген адамдармен тиімді сөйлесу үшін стиліңізді бейімдеу. Жоғары контексттік және төмен контексттік қарым-қатынас, индивидуализм мен ұжымшылдық, иерархияға деген көзқарас сияқты өлшемдерді түсіну түсінбестіктерді болдырмайды. Жаһандық мүмкіндіктерге дайындалып жатқан Орталық Азия студенттері үшін бұл дағды — бәсекелік артықшылық.",
        keyFormulas: [
          {
            formula: "ADAPT: Awareness → Don't assume → Ask respectfully → Perspective-take → Tailor your style",
            formulaRu: "ADAPT: Осознанность → Не додумывай → Уважительно спрашивай → Смотри с другой стороны → Подстраивай свой стиль",
            formulaKk: "ADAPT: Аңғарымпаздық → Болжама жасама → Құрметпен сұра → Басқа көзқараспен қара → Стиліңді бейімде",
            description: "Framework for navigating cross-cultural interactions",
            descriptionRu: "Модель навигации в межкультурных взаимодействиях",
            descriptionKk: "Мәдениетаралық қарым-қатынаста бағдарлау моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are emailing a professor in Japan to request a research opportunity. How does the ADAPT framework guide your approach?",
            questionRu: "Вы пишете письмо профессору в Японии с просьбой о возможности исследования. Как модель ADAPT направляет ваш подход?",
            questionKk: "Сіз Жапониядағы профессорға зерттеу мүмкіндігін сұрап электрондық хат жазып жатырсыз. ADAPT моделі тәсіліңізді қалай бағыттайды?",
            steps: [
              { en: "Awareness: Japanese culture values hierarchy and formality in academic communication. Don't assume casual first-name greetings are appropriate.", ru: "Осознанность: японская культура ценит иерархию и формальность в академическом общении. Не предполагайте, что неформальное обращение по имени уместно.", kk: "Хабардарлық: жапон мәдениеті академиялық қарым-қатынаста иерархия мен ресмилікті бағалайды. Бейресми атымен сөйлесу орынды деп ойламаңыз." },
              { en: "Ask respectfully by using their title (Professor/Sensei), express admiration for specific research, and Tailor your style — be concise, humble, and show you have done your homework about their work.", ru: "Обращайтесь уважительно, используя титул (Профессор/Сэнсэй), выразите восхищение конкретными исследованиями и адаптируйте стиль — будьте кратким, скромным и покажите, что изучили их работу.", kk: "Құрметпен сұраңыз — атағын қолданыңыз (Профессор/Сэнсэй), нақты зерттеулерге құрмет білдіріңіз және стиліңізді бейімдеңіз — қысқа, кішіпейіл болыңыз және олардың жұмысын зерттегеніңізді көрсетіңіз." }
            ],
            answer: "Using ADAPT ensures your email respects Japanese academic norms, making a positive first impression and increasing your chance of a response.",
            answerRu: "Использование ADAPT гарантирует, что письмо уважает японские академические нормы, создавая положительное первое впечатление и повышая шанс на ответ.",
            answerKk: "ADAPT қолдану хатыңыздың жапон академиялық нормаларын құрметтеуін қамтамасыз етеді, оң алғашқы әсер қалдырады және жауап алу мүмкіндігін арттырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between high-context and low-context communication cultures?",
            questionRu: "В чём разница между высококонтекстной и низкоконтекстной культурами общения?",
            questionKk: "Жоғары контексттік және төмен контексттік қарым-қатынас мәдениеттерінің айырмашылығы неде?",
            answer: "High-context cultures (e.g., Japan, Central Asia) rely on implied meaning, tone, and shared understanding. Low-context cultures (e.g., USA, Germany) value direct, explicit communication where the message is in the words themselves.",
            answerRu: "Высококонтекстные культуры (например, Япония, Центральная Азия) полагаются на подразумеваемый смысл, тон и общее понимание. Низкоконтекстные культуры (например, США, Германия) ценят прямую, явную коммуникацию, где смысл заключён в самих словах.",
            answerKk: "Жоғары контексттік мәдениеттер (мысалы, Жапония, Орталық Азия) меңзелген мағынаға, үнге және ортақ түсінікке сүйенеді. Төмен контексттік мәдениеттер (мысалы, АҚШ, Германия) мағынасы сөздердің өзінде жатқан тікелей, анық қарым-қатынасты бағалайды.",
            hint: "Think about whether meaning is 'between the lines' or 'in the words.'",
            hintRu: "Подумайте, находится ли смысл «между строк» или «в самих словах».",
            hintKk: "Мағына «жолдар арасында» ма, әлде «сөздердің өзінде» ме, ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are working on a group project with students from the US, South Korea, and Brazil. Each has different communication norms. How do you set team communication guidelines?",
            questionRu: "Вы работаете над проектом с студентами из США, Южной Кореи и Бразилии. У каждого разные нормы общения. Как установить командные правила коммуникации?",
            questionKk: "АҚШ, Оңтүстік Корея және Бразилиядан келген студенттермен топтық жобада жұмыс істеп жатырсыз. Әрқайсысының қарым-қатынас нормалары әр түрлі. Команданың қарым-қатынас ережелерін қалай белгілейсіз?",
            answer: "Hold a first meeting to openly discuss preferences: Do you prefer direct feedback or gentle suggestions? Written or verbal updates? Use a shared document for decisions (accommodates different comfort levels with speaking up). Set clear deadlines in writing (helps low-context and high-context members equally). Establish that questions are welcome — no cultural judgment for asking or not asking.",
            answerRu: "Проведите первую встречу для открытого обсуждения предпочтений: прямая обратная связь или мягкие предложения? Письменные или устные обновления? Используйте общий документ для решений (учитывает разный уровень комфорта при высказывании). Установите чёткие сроки письменно (помогает и низко-, и высококонтекстным участникам одинаково). Установите, что вопросы приветствуются — без культурной оценки за то, что задал или не задал вопрос.",
            answerKk: "Қалауларды ашық талқылау үшін бірінші кездесу өткізіңіз: тікелей кері байланысты ма, әлде жұмсақ ұсыныстарды ма қалайсыз? Жазбаша немесе ауызша жаңартулар ма? Шешімдер үшін ортақ құжат қолданыңыз (айтуға деген ыңғайлылық деңгейінің әртүрлілігін ескереді). Мерзімдерді жазбаша анық белгілеңіз (төмен және жоғары контексттік мүшелерге бірдей көмектеседі). Сұрақтарға қуана қарайтыныңызды белгілеңіз — сұрағаны немесе сұрамағаны үшін мәдени баға жоқ.",
            hint: "Create explicit norms that accommodate all communication styles rather than defaulting to one.",
            hintRu: "Создайте явные нормы, учитывающие все стили коммуникации, вместо одного по умолчанию.",
            hintKk: "Бір стильге әдепкі орнына барлық қарым-қатынас стильдерін ескеретін нақты нормалар жасаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "As a Central Asian student, you receive an acceptance from an American university and a Korean university. Write two culturally appropriate thank-you emails — one to each university — explaining how you adapted your communication style for each.",
            questionRu: "Как студент из Центральной Азии, вы получили приглашение от американского и корейского университетов. Напишите два культурно адаптированных благодарственных письма и объясните, как вы адаптировали стиль.",
            questionKk: "Орталық Азия студенті ретінде сіз американдық және кореялық университеттен қабылдау хат алдыңыз. Екі мәдени тұрғыдан сәйкес алғыс хат жазыңыз және стиліңізді қалай бейімдегеніңізді түсіндіріңіз.",
            answer: "American email: Direct, enthusiastic tone. 'Dear Professor Smith, I am thrilled to accept! I look forward to contributing to the research lab and campus community.' — Uses first-person confidence, informal warmth, and specific excitement. Korean email: Formal, humble tone. 'Dear Professor Kim, I am deeply honored by this opportunity. I am committed to working diligently and learning from the distinguished faculty.' — Uses honorific language, emphasizes hard work and gratitude, shows respect for hierarchy. Adaptation: American culture values individual enthusiasm; Korean culture values humility and respect for the institution.",
            answerRu: "Американское письмо: прямой, воодушевлённый тон. «Уважаемый профессор Смит, я в восторге от того, что принимаю предложение! Жду возможности внести вклад в исследовательскую лабораторию и жизнь кампуса.» — Использует уверенность от первого лица, неформальную теплоту и конкретный энтузиазм. Корейское письмо: формальный, скромный тон. «Уважаемый профессор Ким, я глубоко польщён(а) этой возможностью. Я обязуюсь усердно работать и учиться у выдающегося преподавательского состава.» — Использует почтительный язык, подчёркивает усердие и благодарность, проявляет уважение к иерархии. Адаптация: американская культура ценит индивидуальный энтузиазм; корейская культура ценит скромность и уважение к учреждению.",
            answerKk: "Американдық хат: тікелей, ынталы үн. «Құрметті Смит профессор, қабылдағаныма қуаныштымын! Зерттеу зертханасы мен кампус қауымдастығына үлес қосуды асыға күтемін.» — Бірінші жақтан сенімділікті, бейресми жылылықты және нақты құлшынысты қолданады. Кореялық хат: ресми, кішіпейіл үн. «Құрметті Ким профессор, бұл мүмкіндікке терең ризамын. Еңбекқор жұмыс істеп, беделді оқытушылардан үйренуге міндеттенемін.» — Құрметті тілді қолданады, еңбекқорлық пен алғысты баса көрсетеді, иерархияға құрмет білдіреді. Бейімделу: американдық мәдениет жеке ынтаны бағалайды; кореялық мәдениет кішіпейілдік пен мекемеге құрметті бағалайды.",
            hint: "Think about what each culture values most in professional communication — confidence vs. humility, directness vs. formality.",
            hintRu: "Подумайте, что каждая культура ценит больше всего: уверенность или скромность, прямоту или формальность.",
            hintKk: "Әр мәдениет кәсіби қарым-қатынаста нені бағалайтынын ойлаңыз — сенімділік пен кішіпейілдік, тікелік пен ресмилік.",
            xp: 20
          }
        ]
      },
      {
        title: "Professional Writing",
        titleRu: "Деловое письмо",
        titleKk: "Кәсіби жазу",
        content: "Professional writing covers emails, reports, proposals, and formal letters that represent you in academic and business contexts. Clear structure, appropriate tone, and error-free language demonstrate competence and respect for the reader. Mastering professional writing early gives you an edge in internship applications, scholarship essays, and university correspondence.",
        contentRu: "Деловое письмо охватывает электронные письма, отчёты, предложения и официальные письма, представляющие вас в академических и деловых контекстах. Чёткая структура, уместный тон и безошибочный язык демонстрируют компетентность и уважение к читателю. Раннее овладение деловым письмом даёт преимущество при подаче на стажировки, стипендии и переписке с университетами.",
        contentKk: "Кәсіби жазу — сізді академиялық және іскери контексттерде көрсететін электрондық хаттар, есептер, ұсыныстар және ресми хаттарды қамтиды. Анық құрылым, сәйкес үн және қатесіз тіл құзыреттілік пен оқырманға құрметті көрсетеді. Кәсіби жазуды ерте меңгеру тағылымдамаларға, стипендияларға өтініш беру мен университетпен хат алмасуда артықшылық береді.",
        keyFormulas: [
          {
            formula: "CLEAR: Concise → Logical → Error-free → Audience-aware → Respectful",
            formulaRu: "CLEAR: Лаконично → Логично → Без ошибок → С учётом аудитории → Уважительно",
            formulaKk: "CLEAR: Қысқа → Логикалы → Қатесіз → Аудиторияны ескерген → Құрметті",
            description: "Five principles of professional writing",
            descriptionRu: "Пять принципов делового письма",
            descriptionKk: "Кәсіби жазудың бес қағидасы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a professional email to a university admissions officer requesting information about scholarship deadlines, using the CLEAR principles.",
            questionRu: "Напишите профессиональное письмо сотруднику приёмной комиссии с запросом о сроках стипендий, используя принципы CLEAR.",
            questionKk: "CLEAR қағидаларын қолданып, стипендия мерзімдері туралы ақпарат сұрайтын кәсіби хатты университеттің қабылдау кеңсесіне жазыңыз.",
            steps: [
              { en: "Subject line: 'Inquiry: Merit Scholarship Deadlines for Fall 2026.' Opening: 'Dear Admissions Office, I am a prospective international student from Kazakhstan writing to inquire about merit scholarship deadlines.'", ru: "Тема: «Запрос: сроки стипендий за заслуги на осень 2026.» Вступление: «Уважаемая приёмная комиссия, я потенциальный иностранный студент из Казахстана, пишу с запросом о сроках стипендий.»", kk: "Тақырып: «Сұрау: 2026 күз семестрі үшін стипендия мерзімдері.» Кіріспе: «Құрметті қабылдау кеңсесі, мен Қазақстаннан келген болашақ халықаралық студентпін, стипендия мерзімдері туралы сұрау жазып отырмын.»" },
              { en: "Body: State specific questions concisely. Closing: 'Thank you for your time. I look forward to your response. Best regards, [Name].' — Logical flow, error-free, respectful tone throughout.", ru: "Основная часть: конкретные вопросы кратко. Закрытие: «Благодарю за уделённое время. С уважением, [Имя].» — логичный поток, без ошибок, уважительный тон.", kk: "Негізгі бөлім: нақты сұрақтарды қысқаша жазыңыз. Қорытынды: «Уақытыңызға рахмет. Жауабыңызды күтемін. Құрметпен, [Аты].» — логикалық ағын, қатесіз, құрметті үн." }
            ],
            answer: "Following CLEAR principles creates a professional impression that makes admissions officers want to help you — clear communication signals a strong applicant.",
            answerRu: "Следование принципам CLEAR создаёт профессиональное впечатление, которое вызывает у сотрудников приёмной комиссии желание помочь — ясная коммуникация сигнализирует о сильном кандидате.",
            answerKk: "CLEAR қағидаларын ұстану қабылдау комиссиясы қызметкерлерінде сізге көмектескісі келетін кәсіби әсер қалдырады — анық қарым-қатынас күшті үміткерді білдіреді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is wrong with this email subject line: 'hey quick question'?",
            questionRu: "Что не так с этой темой письма: «привет быстрый вопрос»?",
            questionKk: "Бұл хат тақырыбында не дұрыс емес: «сәлем тез сұрақ»?",
            answer: "It is too casual for professional communication, lacks capitalization, and does not tell the reader what the email is about. A better subject: 'Question: Application Document Requirements for Fall 2026.'",
            answerRu: "Это слишком неформально для деловой коммуникации, без заглавных букв, и не сообщает читателю, о чём письмо. Лучшая тема: «Вопрос: требования к документам заявки на осень 2026.»",
            answerKk: "Бұл кәсіби қарым-қатынас үшін тым бейресми, бас әріптер жоқ және хаттың не туралы екенін оқырманға айтпайды. Жақсырақ тақырып: «Сұрақ: 2026 күз семестрі өтінім құжаттарына қойылатын талаптар.»",
            hint: "Think about whether a busy professional would know the email's purpose from the subject line alone.",
            hintRu: "Подумайте, поймёт ли занятой профессионал цель письма только по теме.",
            hintKk: "Бос емес маман хаттың мақсатын тек тақырыптан түсіне ала ма, ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this unprofessional email: 'Hi, so I was wondering if maybe you could possibly tell me about internships? I really need one. Thanks!!'",
            questionRu: "Перепишите это непрофессиональное письмо: «Привет, я тут подумал, может вы могли бы рассказать мне про стажировки? Мне очень нужна. Спасибо!!»",
            questionKk: "Бұл кәсіби емес хатты қайта жазыңыз: «Сәлем, мен тағылымдамалар туралы айтып берсеңіз деп ойладым? Маған өте қажет. Рахмет!!»",
            answer: "Subject: 'Inquiry: Summer 2026 Internship Opportunities.' 'Dear [Name/Team], I am a second-year computer science student at [University] interested in your summer internship program. Could you share details about application requirements and deadlines? I have attached my resume for reference. Thank you for your time. Best regards, [Name].'",
            answerRu: "Тема: «Запрос: возможности летней стажировки 2026.» «Уважаемый [Имя/Команда], я студент(ка) второго курса по информатике в [Университет], интересуюсь вашей программой летней стажировки. Не могли бы вы поделиться деталями о требованиях к заявке и сроках? Прилагаю резюме для ознакомления. Спасибо за уделённое время. С уважением, [Имя].»",
            answerKk: "Тақырыбы: «Сұрау: 2026 жазғы тағылымдама мүмкіндіктері.» «Құрметті [Аты/Топ], мен [Университет] информатика мамандығының 2-курс студентімін, жазғы тағылымдама бағдарламаңызға қызығамын. Өтінім талаптары мен мерзімдері туралы мәлімет бере аласыз ба? Танысу үшін түйіндемемді қоса тіркедім. Уақытыңызға рахмет. Құрметпен, [Аты].»",
            hint: "Add a clear subject, state who you are, ask specifically, and close professionally.",
            hintRu: "Добавьте чёткую тему, представьтесь, спросите конкретно и завершите профессионально.",
            hintKk: "Нақты тақырып қосыңыз, кім екеніңізді айтыңыз, нақты сұраңыз және кәсіби түрде аяқтаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a formal proposal letter (200 words max) to your school principal requesting the creation of a student mentorship program. Include: the problem, your proposed solution, benefits, and a call to action.",
            questionRu: "Напишите формальное предложение директору школы (до 200 слов) о создании программы менторства. Включите: проблему, решение, преимущества и призыв к действию.",
            questionKk: "Мектеп директорына студенттер менторлық бағдарламасын құру туралы ресми ұсыныс хат жазыңыз (200 сөзге дейін). Мәселені, ұсынылатын шешімді, артықшылықтарды және іс-әрекетке шақыруды қосыңыз.",
            answer: "Dear Principal [Name], New students at our school often struggle with academic adjustment and social integration during their first semester. I propose a Student Mentorship Program pairing each 8th-grader with a trained 10th-grade mentor. Mentors would meet their mentees weekly for 30 minutes to provide academic guidance and social support. Benefits include: improved 8th-grade retention rates, leadership development for mentors, and a stronger school community. Research from the National Mentoring Partnership shows that mentored students are 55% more likely to stay engaged in school. I would welcome the opportunity to present a detailed plan at the next faculty meeting. Thank you for considering this proposal. Respectfully, [Your Name].",
            answerRu: "Уважаемый директор [Имя], новые ученики нашей школы часто испытывают трудности с академической адаптацией и социальной интеграцией в первом семестре. Я предлагаю Программу наставничества, объединяющую каждого восьмиклассника с обученным десятиклассником-наставником. Наставники встречались бы с подопечными еженедельно по 30 минут для академической поддержки и социальной помощи. Преимущества: улучшение удержания восьмиклассников, развитие лидерства у наставников и более крепкое школьное сообщество. Исследование National Mentoring Partnership показывает, что ученики с наставниками на 55% чаще остаются вовлечёнными в учёбу. Буду рад(а) возможности представить подробный план на следующем собрании коллектива. Спасибо за рассмотрение этого предложения. С уважением, [Ваше имя].",
            answerKk: "Құрметті директор [Атыңыз], мектебіміздің жаңа оқушылары бірінші семестрде академиялық бейімделу мен әлеуметтік интеграцияда жиі қиналады. Мен әр 8-сынып оқушысын дайындалған 10-сынып менторымен біріктіретін Студенттік менторлық бағдарламасын ұсынамын. Менторлар менти-лерімен апта сайын 30 минут кездесіп, академиялық бағыт-бағдар мен әлеуметтік қолдау көрсетеді. Артықшылықтары: 8-сынып оқушыларының мектепте қалу деңгейінің жақсаруы, менторлар үшін көшбасшылықты дамыту және мектеп қауымдастығының нығаюы. National Mentoring Partnership зерттеуі менторланған оқушылардың мектепке 55% көбірек тартылатынын көрсетеді. Келесі оқытушылар жиналысында егжей-тегжейлі жоспарды ұсынуға мүмкіндік алсам қуанышты болар едім. Бұл ұсынысты қарастырғаныңызға рахмет. Құрметпен, [Атыңыз].",
            hint: "Follow a logical structure: problem, solution, evidence of benefits, and a clear next step.",
            hintRu: "Следуйте логической структуре: проблема, решение, доказательства преимуществ и чёткий следующий шаг.",
            hintKk: "Логикалық құрылымды ұстаныңыз: мәселе, шешім, артықшылық дәлелдемелері және нақты келесі қадам.",
            xp: 20
          }
        ]
      },
      {
        title: "Meeting Facilitation",
        titleRu: "Фасилитация собраний",
        titleKk: "Жиналысты басқару",
        content: "Meeting facilitation is the skill of guiding a group discussion to achieve clear outcomes efficiently. A good facilitator sets an agenda, manages time, ensures all voices are heard, and captures action items. Whether leading a study group, club meeting, or project check-in, facilitation skills make you the person everyone wants on their team.",
        contentRu: "Фасилитация собраний — навык управления групповой дискуссией для достижения чётких результатов. Хороший фасилитатор составляет повестку, управляет временем, обеспечивает участие всех и фиксирует решения. Будь то учебная группа, клуб или проект — навыки фасилитации делают вас незаменимым членом команды.",
        contentKk: "Жиналысты басқару — нақты нәтижелерге тиімді жету үшін топтық талқылауды бағыттау дағдысы. Жақсы фасилитатор күн тәртібін белгілейді, уақытты басқарады, барлық дауыстардың естілуін қамтамасыз етеді және іс-шаралар тізімін жасайды. Оқу тобын, клубты немесе жоба жиналысын басқарсаңыз да, фасилитация дағдылары сізді команданың ең құнды мүшесіне айналдырады.",
        keyFormulas: [
          {
            formula: "LEAD: Layout agenda → Engage everyone → Allocate time → Document decisions",
            formulaRu: "LEAD: Составь повестку → Вовлеки всех → Распредели время → Зафиксируй решения",
            formulaKk: "LEAD: Күн тәртібін құр → Барлығын тарт → Уақытты бөл → Шешімдерді тіркеп қой",
            description: "Four-step meeting facilitation framework",
            descriptionRu: "Четырёхшаговая модель фасилитации собраний",
            descriptionKk: "Жиналысты басқарудың төрт қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are facilitating a 30-minute group project meeting with 5 members. Using LEAD, plan how you would run it.",
            questionRu: "Вы ведёте 30-минутное собрание группового проекта из 5 человек. Используя LEAD, спланируйте проведение.",
            questionKk: "5 мүшеден тұратын топтық жобаның 30 минуттық жиналысын басқарасыз. LEAD қолданып, қалай өткізетініңізді жоспарлаңыз.",
            steps: [
              { en: "Layout: Share agenda beforehand — (1) progress updates 10 min, (2) blockers 10 min, (3) next steps 10 min. Engage: Start by asking each person for a 2-minute update so no one dominates.", ru: "Повестка: отправить заранее — (1) обновления 10 мин, (2) проблемы 10 мин, (3) следующие шаги 10 мин. Вовлечение: начать с 2-минутного обновления от каждого.", kk: "Күн тәртібі: алдын ала жіберу — (1) жаңартулар 10 мин, (2) кедергілер 10 мин, (3) келесі қадамдар 10 мин. Тарту: әркімнен 2 минуттық жаңартудан бастау." },
              { en: "Allocate: Use a timer visible to all. If a topic runs over, ask 'Should we table this or extend by 2 minutes?' Document: Capture each decision and action item with an owner and deadline in a shared doc.", ru: "Время: используйте видимый таймер. Если тема затягивается, спросите: «Отложим или продлим на 2 минуты?» Документирование: записывайте решения и задачи с ответственными и сроками.", kk: "Уақыт: барлығына көрінетін таймер қолданыңыз. Тақырып созылса: «Кейінге қалдырамыз ба, әлде 2 минутқа ұзартамыз ба?» деп сұраңыз. Құжаттау: шешімдер мен іс-шараларды жауапты тұлғалармен және мерзімдермен жазып алыңыз." }
            ],
            answer: "LEAD ensures meetings are productive and respectful of everyone's time, with clear outcomes and accountability.",
            answerRu: "LEAD гарантирует, что собрания продуктивны и уважают время каждого, с чёткими результатами и ответственностью.",
            answerKk: "LEAD жиналыстардың өнімді әрі әркімнің уақытын құрметтейтінін, нақты нәтижелер мен жауапкершілікпен өтетінін қамтамасыз етеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should a meeting agenda be shared before the meeting starts?",
            questionRu: "Почему повестку собрания нужно рассылать до начала?",
            questionKk: "Жиналыс күн тәртібін неге жиналыс басталмай жіберу керек?",
            answer: "Sharing the agenda in advance allows participants to prepare their thoughts, gather needed materials, and know what to expect. This makes the meeting shorter and more productive.",
            answerRu: "Заблаговременная рассылка повестки позволяет участникам подготовить мысли, собрать нужные материалы и знать, чего ожидать. Это делает собрание короче и продуктивнее.",
            answerKk: "Күн тәртібін алдын ала жіберу қатысушыларға ойларын дайындауға, қажетті материалдарды жинауға және не күтуге болатынын білуге мүмкіндік береді. Бұл жиналысты қысқа әрі өнімді етеді.",
            hint: "Think about what happens when people come to a meeting without knowing what will be discussed.",
            hintRu: "Подумайте, что происходит, когда люди приходят на собрание, не зная, что будут обсуждать.",
            hintKk: "Адамдар нені талқылайтынын білмей жиналысқа келгенде не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "During your meeting, one member talks for 10 minutes straight and others look frustrated. How do you intervene as facilitator?",
            questionRu: "На собрании один участник говорит 10 минут подряд, остальные выглядят расстроенными. Как вы вмешаетесь как фасилитатор?",
            questionKk: "Жиналыста бір мүше 10 минут бойы сөйлейді, қалғандары ренжіген. Фасилитатор ретінде қалай араласасыз?",
            answer: "Politely interject: 'Thank you for those insights — I want to make sure we hear from everyone. Let me note your remaining points and we can return to them. Who else has thoughts on this?' This respects the speaker while re-balancing participation.",
            answerRu: "Вежливо вмешайтесь: «Спасибо за эти мысли — я хочу убедиться, что мы услышим всех. Позвольте мне отметить твои оставшиеся пункты, и мы вернёмся к ним. У кого ещё есть мысли по этому поводу?» Это уважает выступающего, восстанавливая баланс участия.",
            answerKk: "Сыпайы араласыңыз: «Осы ойларыңа рахмет — барлығын тыңдағанымызға көз жеткізгім келеді. Қалған тармақтарыңды белгілеп қоямын, кейін ораламыз. Тағы кімнің осы бойынша ойы бар?» Бұл сөйлеушіні құрметтей отырып, қатысу теңгерімін қалпына келтіреді.",
            hint: "Acknowledge the speaker's contribution, then redirect to include others.",
            hintRu: "Признайте вклад выступающего, затем перенаправьте на включение остальных.",
            hintKk: "Сөйлеушінің үлесін мойындаңыз, содан кейін басқаларды қосу үшін қайта бағыттаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete facilitation plan for a 45-minute club meeting where you need to: (1) elect a new treasurer, (2) plan a fundraising event, and (3) address a complaint about meeting attendance. Include timing, facilitation techniques, and how you handle potential conflicts.",
            questionRu: "Разработайте полный план фасилитации 45-минутного заседания клуба: (1) выборы казначея, (2) планирование мероприятия для сбора средств, (3) обсуждение жалобы о посещаемости. Включите тайминг, техники и работу с конфликтами.",
            questionKk: "Клуб жиналысының 45 минуттық толық фасилитация жоспарын жасаңыз: (1) жаңа қазынашы сайлау, (2) қаражат жинау іс-шарасын жоспарлау, (3) жиналысқа қатысу туралы шағымды талқылау. Уақытты, техникаларды және ықтимал жанжалдарды басқаруды қосыңыз.",
            answer: "0-2 min: Welcome and share agenda. 2-12 min: Treasurer election — each candidate speaks 2 min, secret ballot vote, announce result. 12-30 min: Fundraiser planning — brainstorm 5 min (everyone writes ideas on sticky notes), vote on top 3, assign committees with deadlines. 30-42 min: Attendance discussion — present data neutrally, use round-robin so everyone shares one idea for improvement, vote on top solution. 42-45 min: Recap decisions and action items. Conflict strategy: If the attendance discussion gets personal, redirect to 'solutions, not blame' and use anonymous suggestion cards if needed.",
            answerRu: "0-2 мин: Приветствие и повестка. 2-12 мин: Выборы казначея — каждый кандидат говорит 2 мин, тайное голосование, объявление результата. 12-30 мин: Планирование сбора средств — мозговой штурм 5 мин (все пишут идеи на стикерах), голосование за топ-3, назначение комитетов со сроками. 30-42 мин: Обсуждение посещаемости — нейтральное представление данных, круговой опрос, чтобы каждый поделился одной идеей улучшения, голосование за лучшее решение. 42-45 мин: Подведение итогов решений и задач. Стратегия конфликта: если обсуждение посещаемости становится личным, перенаправьте на «решения, а не обвинения» и используйте анонимные карточки предложений при необходимости.",
            answerKk: "0-2 мин: Қарсы алу және күн тәртібі. 2-12 мин: Қазынашы сайлау — әр кандидат 2 мин сөйлейді, жасырын дауыс беру, нәтижені жариялау. 12-30 мин: Қаражат жинауды жоспарлау — 5 мин миға шабуыл (барлығы стикерлерге идеялар жазады), топ-3-ке дауыс беру, мерзімдермен комитеттер тағайындау. 30-42 мин: Қатысу туралы талқылау — деректерді бейтарап ұсыну, әркім бір жақсарту идеясын бөлісуі үшін кезекпен сөйлеу, ең жақсы шешімге дауыс беру. 42-45 мин: Шешімдер мен іс-шараларды қорытындылау. Жанжал стратегиясы: егер қатысу туралы талқылау жеке сипатқа айналса, «айыптау емес, шешім» бағытына бұрыңыз және қажет болса анонимді ұсыныс карталарын қолданыңыз.",
            hint: "Allocate time proportionally to complexity, use structured participation methods, and have a conflict de-escalation plan.",
            hintRu: "Распределяйте время пропорционально сложности, используйте структурированные методы участия и имейте план деэскалации.",
            hintKk: "Уақытты күрделілігіне пропорционалды бөліңіз, құрылымдалған қатысу әдістерін қолданыңыз және жанжалды тыныштандыру жоспары болсын.",
            xp: 20
          }
        ]
      },
      {
        title: "Personal Brand",
        titleRu: "Личный бренд",
        titleKk: "Жеке бренд",
        content: "Your personal brand is the unique combination of skills, values, and personality that you project to the world. In the digital age, it includes your online presence, how you introduce yourself, and the reputation you build through consistent actions. A strong personal brand helps you stand out in college applications, scholarship interviews, and future job searches.",
        contentRu: "Ваш личный бренд — уникальное сочетание навыков, ценностей и личности, которое вы транслируете миру. В цифровую эпоху он включает онлайн-присутствие, самопрезентацию и репутацию, построенную последовательными действиями. Сильный личный бренд помогает выделиться при поступлении, на собеседованиях и в поиске работы.",
        contentKk: "Жеке бренд — сіздің әлемге көрсететін дағдылар, құндылықтар және тұлғаның бірегей үйлесімі. Цифрлық дәуірде ол онлайн қатысуыңызды, өзіңізді қалай таныстыратыныңызды және дәйекті іс-әрекеттер арқылы құрған беделіңізді қамтиды. Күшті жеке бренд колледжге түсуде, стипендия сұхбаттарында және болашақ жұмыс іздеуде ерекшеленуге көмектеседі.",
        keyFormulas: [
          {
            formula: "BRAND: Beliefs → Results → Audience → Narrative → Digital presence",
            formulaRu: "BRAND: Убеждения → Результаты → Аудитория → Нарратив → Цифровое присутствие",
            formulaKk: "BRAND: Наным-сенімдер → Нәтижелер → Аудитория → Баяндау → Цифрлық қатысу",
            description: "Five-element personal brand building framework",
            descriptionRu: "Пятиэлементная модель построения личного бренда",
            descriptionKk: "Жеке бренд құрудың бес элементті моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Use the BRAND framework to outline a personal brand for a student passionate about environmental engineering who is applying to top universities.",
            questionRu: "Используйте модель BRAND для создания личного бренда студента, увлечённого экологической инженерией и поступающего в топ-университеты.",
            questionKk: "Жоғары университеттерге түсетін, экологиялық инженерияға құмар студент үшін BRAND моделін қолданып жеке бренд жоспарын жасаңыз.",
            steps: [
              { en: "Beliefs: 'I believe technology can solve environmental crises.' Results: Founded a school recycling program that diverted 2 tons of waste. Audience: Admissions officers at engineering programs.", ru: "Убеждения: «Я верю, что технологии могут решить экологические кризисы.» Результаты: основал школьную программу переработки, отведшую 2 тонны отходов. Аудитория: приёмные комиссии инженерных программ.", kk: "Сенімдер: «Технология экологиялық дағдарыстарды шеше алады деп сенемін.» Нәтижелер: 2 тонна қалдықты бұрған мектеп қайта өңдеу бағдарламасын құрды. Аудитория: инженерлік бағдарламалардың қабылдау комиссиялары." },
              { en: "Narrative: 'From building water filters in my garage to leading a city-wide cleanup — I engineer solutions for our planet.' Digital: LinkedIn profile showcasing projects, a blog documenting experiments, and an Instagram with environmental content.", ru: "Нарратив: «От создания водных фильтров в гараже до руководства городской уборкой — я создаю решения для планеты.» Цифровое: LinkedIn с проектами, блог с экспериментами, Instagram с экоконтентом.", kk: "Баяндау: «Гаражда су сүзгілерін жасаудан қалалық тазалау науқанына дейін — мен планетамыз үшін шешімдер жасаймын.» Цифрлық: жобаларды көрсететін LinkedIn, тәжірибелерді құжаттайтын блог және экологиялық мазмұнмен Instagram." }
            ],
            answer: "The BRAND framework creates a cohesive personal identity that admissions officers can easily remember and associate with environmental engineering leadership.",
            answerRu: "Модель BRAND создаёт целостную личную идентичность, которую сотрудники приёмной комиссии легко запомнят и свяжут с лидерством в экологической инженерии.",
            answerKk: "BRAND моделі қабылдау комиссиясы қызметкерлеріне оңай есте қалатын және экологиялық инженерия көшбасшылығымен байланыстыратын тұтас жеке бейне жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between a personal brand and a resume?",
            questionRu: "В чём разница между личным брендом и резюме?",
            questionKk: "Жеке бренд пен түйіндеменің айырмашылығы неде?",
            answer: "A resume is a formal document listing your experiences and qualifications. A personal brand is the broader story and impression you create across all interactions — online, in person, and on paper. Your resume is one tool within your brand.",
            answerRu: "Резюме — формальный документ, перечисляющий ваш опыт и квалификацию. Личный бренд — более широкая история и впечатление, которое вы создаёте во всех взаимодействиях — онлайн, лично и на бумаге. Резюме — один из инструментов вашего бренда.",
            answerKk: "Түйіндеме — тәжірибеңіз бен біліктілігіңізді тізетін ресми құжат. Жеке бренд — барлық қарым-қатынастарда — онлайн, жеке және қағазда — жасайтын кеңірек баяндау мен әсер. Түйіндеме — брендіңіздің бір құралы ғана.",
            hint: "Think of one as a document and the other as a reputation.",
            hintRu: "Представьте одно как документ, а другое как репутацию.",
            hintKk: "Бірін құжат, екіншісін беделді деп елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Audit your own digital presence. What three things would a university admissions officer find if they searched your name online? Are they aligned with your goals?",
            questionRu: "Проведите аудит своего цифрового присутствия. Что три вещи найдёт сотрудник приёмной комиссии, если загуглит ваше имя? Соответствуют ли они вашим целям?",
            questionKk: "Өзіңіздің цифрлық қатысуыңызды тексеріңіз. Қабылдау кеңсесі қызметкері атыңызды іздесе, қандай үш нәрсе табады? Олар мақсаттарыңызға сәйкес пе?",
            answer: "Example audit: 1) Instagram with travel photos (neutral but not strategic). 2) An old forum post with an embarrassing username (negative). 3) No LinkedIn profile (missed opportunity). To align: create a LinkedIn showcasing achievements, clean up old accounts, and post content related to your field of interest.",
            answerRu: "Пример аудита: 1) Instagram с фото путешествий (нейтрально, но не стратегично). 2) Старый пост на форуме с неловким никнеймом (негативно). 3) Нет профиля LinkedIn (упущенная возможность). Чтобы привести в соответствие: создайте LinkedIn с достижениями, приведите в порядок старые аккаунты и публикуйте контент, связанный с вашей сферой интересов.",
            answerKk: "Мысал аудит: 1) Саяхат фотолары бар Instagram (бейтарап, бірақ стратегиялық емес). 2) Ұятты лақап атпен ескі форум жазбасы (теріс). 3) LinkedIn профилі жоқ (жіберілген мүмкіндік). Сәйкестендіру үшін: жетістіктерді көрсететін LinkedIn жасаңыз, ескі аккаунттарды реттеңіз және қызығушылық саласыңызға қатысты мазмұн жариялаңыз.",
            hint: "Actually search your name and evaluate what comes up as if you were an admissions officer.",
            hintRu: "Реально загуглите своё имя и оцените результаты глазами приёмной комиссии.",
            hintKk: "Атыңызды шынымен іздеңіз және нәтижелерді қабылдау комиссиясының көзімен бағалаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a complete personal brand strategy for yourself using all five BRAND elements. Include specific actions you will take in the next 30 days to strengthen each element.",
            questionRu: "Создайте полную стратегию личного бренда, используя все пять элементов BRAND. Включите конкретные действия на ближайшие 30 дней для усиления каждого элемента.",
            questionKk: "BRAND-тың барлық бес элементін қолданып, өзіңіз үшін толық жеке бренд стратегиясын жасаңыз. Әр элементті нығайту үшін келесі 30 күндегі нақты іс-әрекеттерді қосыңыз.",
            answer: "Beliefs: 'I believe education should be accessible to all.' Action: Write a blog post about my tutoring experience. Results: Quantify my impact — '15 students improved math grades by at least one letter.' Action: Collect testimonials. Audience: Scholarship committees and education-focused universities. Action: Research 5 target schools and tailor materials. Narrative: 'From struggling student to peer tutor — I turn challenges into teaching moments.' Action: Practice my elevator pitch with 3 people. Digital: Action: Create LinkedIn, update all social media bios to reflect my brand, and share one education-related post per week for 30 days.",
            answerRu: "Убеждения: «Я верю, что образование должно быть доступно всем.» Действие: написать пост в блоге о опыте репетиторства. Результаты: количественно оценить влияние — «15 учеников улучшили оценки по математике минимум на один балл.» Действие: собрать отзывы. Аудитория: стипендиальные комитеты и университеты, ориентированные на образование. Действие: исследовать 5 целевых школ и адаптировать материалы. Нарратив: «От отстающего ученика до репетитора-сверстника — я превращаю трудности в моменты обучения.» Действие: отрепетировать свою самопрезентацию с 3 людьми. Цифровое: Действие: создать LinkedIn, обновить биографии во всех соцсетях в соответствии с брендом и публиковать один пост об образовании в неделю в течение 30 дней.",
            answerKk: "Сенімдер: «Білім барлығына қолжетімді болу керек деп сенемін.» Іс-әрекет: репетиторлық тәжірибем туралы блог жазбасын жазу. Нәтижелер: әсерімді сандық бағалау — «15 оқушы математика бағасын кемінде бір балға жақсартты.» Іс-әрекет: пікірлер жинау. Аудитория: стипендия комитеттері және білімге бағытталған университеттер. Іс-әрекет: 5 мақсатты мектепті зерттеу және материалдарды бейімдеу. Баяндау: «Қиналған оқушыдан құрдас-репетиторға дейін — мен қиындықтарды оқыту сәттеріне айналдырамын.» Іс-әрекет: elevator pitch-ті 3 адаммен жаттықтыру. Цифрлық: Іс-әрекет: LinkedIn жасау, барлық әлеуметтік желі биографияларын брендіме сәйкес жаңарту және 30 күн бойы аптасына бір білімге қатысты жазба бөлісу.",
            hint: "Be specific and realistic — vague plans never get executed. Include measurable actions for each element.",
            hintRu: "Будьте конкретны и реалистичны — размытые планы не выполняются. Включите измеримые действия.",
            hintKk: "Нақты және шынайы болыңыз — анық емес жоспарлар орындалмайды. Әр элемент үшін өлшенетін іс-әрекеттерді қосыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Communication & Leadership_11": {
    planetName: "Communication & Leadership",
    introduction: {
      en: "Step into leadership communication — master different leadership styles, motivate teams, negotiate effectively, and build executive presence. Learn to lead through crisis, across distances, and with emotional intelligence.",
      ru: "Перейдите к лидерской коммуникации — освойте стили лидерства, мотивируйте команды, эффективно ведите переговоры и развивайте харизму руководителя. Научитесь вести в кризис, на расстоянии и с эмоциональным интеллектом."
    },
    sections: [
      {
        title: "Leadership Styles",
        titleRu: "Стили лидерства",
        titleKk: "Көшбасшылық стильдері",
        content: "Effective leaders adapt their style to the situation — from democratic to authoritative to coaching. Understanding the six major leadership styles helps you choose the right approach for each team and challenge. Self-awareness about your natural style, combined with the flexibility to switch, is what separates good leaders from great ones.",
        contentRu: "Эффективные лидеры адаптируют стиль к ситуации — от демократического до авторитетного и коучингового. Понимание шести основных стилей лидерства помогает выбрать правильный подход для каждой команды и задачи. Осознание своего природного стиля и гибкость переключения отличают хороших лидеров от великих.",
        contentKk: "Тиімді көшбасшылар стилін жағдайға бейімдейді — демократиялықтан авторитеттікке және коучингтікке дейін. Алты негізгі көшбасшылық стилін түсіну әр команда мен міндет үшін дұрыс тәсілді таңдауға көмектеседі. Өзінің табиғи стилін білу мен ауыстыру икемділігі жақсы көшбасшыларды ұлыларынан ажыратады.",
        keyFormulas: [
          {
            formula: "FLEX: Feel the situation → Lead with purpose → Engage the team → eXecute and adapt",
            formulaRu: "FLEX: Почувствуй ситуацию → Веди с целью → Вовлеки команду → Действуй и адаптируйся",
            formulaKk: "FLEX: Жағдайды сезін → Мақсатпен жетекші бол → Топты тарт → Әрекет ет және бейімдел",
            description: "Framework for adaptive leadership across situations",
            descriptionRu: "Модель адаптивного лидерства в разных ситуациях",
            descriptionKk: "Әр түрлі жағдайларда бейімделгіш көшбасшылық моделі"
          },
          {
            formula: "6 Styles: Visionary → Coaching → Affiliative → Democratic → Pacesetting → Commanding",
            formulaRu: "6 стилей: Визионерский → Коучинговый → Аффилиативный → Демократичный → Задающий темп → Директивный",
            formulaKk: "6 стиль: Көрегендік → Коучингтік → Топтастырушы → Демократиялық → Қарқын белгілеуші → Бұйрықшыл",
            description: "Goleman's six leadership styles spectrum",
            descriptionRu: "Шесть стилей лидерства по Гоулману",
            descriptionKk: "Голманның алты көшбасшылық стилі"
          }
        ],
        solvedExamples: [
          {
            question: "You are leading a new project team where members do not know each other. Which leadership style should you start with and why? How might you shift styles as the team matures?",
            questionRu: "Вы руководите новой проектной командой, где участники не знают друг друга. С какого стиля лидерства начать и почему? Как менять стиль по мере развития команды?",
            questionKk: "Мүшелері бір-бірін білмейтін жаңа жоба командасын басқарасыз. Қай көшбасшылық стилінен бастауыңыз керек және неге? Команда жетілген сайын стильді қалай өзгертесіз?",
            steps: [
              { en: "Start with Affiliative style to build trust and relationships. Use team-building activities and one-on-one check-ins to create psychological safety.", ru: "Начните с аффилиативного стиля для построения доверия и отношений. Используйте командообразующие мероприятия и личные встречи для создания психологической безопасности.", kk: "Сенім мен қарым-қатынас құру үшін аффилиативті стильден бастаңыз. Психологиялық қауіпсіздік құру үшін команда құру іс-шаралары мен жеке кездесулерді қолданыңыз." },
              { en: "Transition to Democratic style once trust is established — involve members in decisions. For urgent deadlines, briefly shift to Commanding, then return to Coaching to develop individual skills.", ru: "Перейдите к демократическому стилю после построения доверия — вовлекайте участников в решения. При срочных дедлайнах кратко переключитесь на командный стиль, затем вернитесь к коучинговому.", kk: "Сенім орнағаннан кейін демократиялық стильге көшіңіз — мүшелерді шешімдерге тартыңыз. Шұғыл мерзімдерде қысқаша командалық стильге ауысыңыз, содан кейін коучингтікке оралыңыз." }
            ],
            answer: "Adaptive leadership means matching your style to the team's development stage and the task's urgency, not defaulting to one approach for every situation.",
            answerRu: "Адаптивное лидерство означает подбор стиля под стадию развития команды и срочность задачи, а не использование одного подхода для всех ситуаций.",
            answerKk: "Бейімделгіш көшбасшылық стильді команданың даму кезеңі мен тапсырманың шұғылдығына сәйкестендіруді білдіреді, барлық жағдайға бір тәсілді қолданбауды емес."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main difference between democratic and commanding leadership styles?",
            questionRu: "В чём главное различие между демократическим и командным стилями лидерства?",
            questionKk: "Демократиялық және командалық көшбасшылық стильдерінің негізгі айырмашылығы неде?",
            answer: "Democratic leadership involves the team in decision-making through discussion and voting. Commanding leadership makes decisions quickly without input from the team, useful in emergencies but damaging if overused.",
            answerRu: "Демократическое лидерство вовлекает команду в принятие решений через обсуждение и голосование. Командное лидерство быстро принимает решения без участия команды — полезно в чрезвычайных ситуациях, но вредно при частом использовании.",
            answerKk: "Демократиялық көшбасшылық команданы талқылау мен дауыс беру арқылы шешім қабылдауға тартады. Командалық көшбасшылық команда пікірінсіз тез шешім қабылдайды — төтенше жағдайларда пайдалы, бірақ жиі қолданса зиянды.",
            hint: "Think about who makes the final decision in each style.",
            hintRu: "Подумайте, кто принимает окончательное решение в каждом стиле.",
            hintKk: "Әр стильде соңғы шешімді кім қабылдайтынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your team is experienced and self-motivated but facing a tight deadline. Which leadership style is most appropriate and why?",
            questionRu: "Ваша команда опытна и мотивирована, но сталкивается с жёстким дедлайном. Какой стиль лидерства наиболее подходит и почему?",
            questionKk: "Командаңыз тәжірибелі және мотивацияланған, бірақ қатаң мерзімге тап болды. Қай көшбасшылық стилі ең қолайлы және неге?",
            answer: "Pacesetting — set high standards and lead by example. Since the team is already skilled and motivated, they do not need coaching or commands. They need a leader who models urgency and excellence. However, balance with brief affiliative moments to prevent burnout.",
            answerRu: "Задающий темп — устанавливает высокие стандарты и подаёт пример. Поскольку команда уже опытная и мотивированная, ей не нужен коучинг или команды. Ей нужен лидер, который показывает пример срочности и превосходства. Однако баланс с краткими аффилиативными моментами предотвращает выгорание.",
            answerKk: "Қарқын белгілеуші — жоғары стандарттар қойып, үлгі көрсетеді. Команда бұрыннан білікті және мотивацияланған болғандықтан, оларға коучинг немесе бұйрық керек емес. Оларға шұғылдық пен үздіктікті үлгі көрсететін көшбасшы қажет. Дегенмен, күйіп кетуден сақтану үшін қысқа аффилиативті сәттермен теңгеру керек.",
            hint: "Consider what an experienced, motivated team needs most under time pressure.",
            hintRu: "Подумайте, что больше всего нужно опытной мотивированной команде под давлением времени.",
            hintKk: "Тәжірибелі, мотивацияланған командаға уақыт қысымында не көбірек қажет екенін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Describe a scenario where you would need to use three different leadership styles within the same week. Explain the situation, which styles you would use, and why you would switch between them.",
            questionRu: "Опишите сценарий, в котором за одну неделю нужно использовать три разных стиля лидерства. Объясните ситуацию, какие стили и почему вы бы переключали.",
            questionKk: "Бір аптада үш түрлі көшбасшылық стилін қолдану қажет болатын сценарийді сипаттаңыз. Жағдайды, қай стильдерді қолданатыныңызды және неге ауыстыратыныңызды түсіндіріңіз.",
            answer: "Monday: A new team member joins — use Coaching style for one-on-one onboarding, teaching processes and answering questions patiently. Wednesday: A critical system failure requires immediate action — switch to Commanding style to assign tasks directly and coordinate the response without lengthy discussion. Friday: The team reflects on the week and plans next steps — use Democratic style to gather everyone's input on what went well and what to improve, building ownership and morale.",
            answerRu: "Понедельник: присоединяется новый участник команды — используйте коучинговый стиль для индивидуальной адаптации, обучая процессам и терпеливо отвечая на вопросы. Среда: критический сбой системы требует немедленных действий — переключитесь на командный стиль, чтобы напрямую распределить задачи и скоординировать реакцию без долгих обсуждений. Пятница: команда рефлексирует над неделей и планирует следующие шаги — используйте демократический стиль, чтобы собрать мнения всех о том, что прошло хорошо и что улучшить, укрепляя причастность и моральный дух.",
            answerKk: "Дүйсенбі: жаңа команда мүшесі қосылады — жеке бейімдеу үшін коучингтік стильді қолданыңыз, процестерді үйретіп, сұрақтарға шыдамдылықпен жауап беріңіз. Сәрсенбі: жүйенің маңызды ақауы дереу іс-әрекетті талап етеді — тапсырмаларды тікелей бөлу және ұзақ талқылаусыз жауапты үйлестіру үшін командалық стильге ауысыңыз. Жұма: команда апта туралы ой қорытады және келесі қадамдарды жоспарлайды — не жақсы болғаны және нені жақсарту керектігі туралы барлығының пікірін жинау, меншіктілік пен рухты нығайту үшін демократиялық стильді қолданыңыз.",
            hint: "Think about different events in a week that require different approaches — new people, emergencies, and planning sessions.",
            hintRu: "Подумайте о разных событиях недели, требующих разных подходов — новые люди, кризисы и планирование.",
            hintKk: "Аптадағы әр түрлі тәсілдерді талап ететін оқиғаларды ойлаңыз — жаңа адамдар, дағдарыстар және жоспарлау.",
            xp: 20
          }
        ]
      },
      {
        title: "Servant Leadership",
        titleRu: "Служащее лидерство",
        titleKk: "Қызмет көрсетуші көшбасшылық",
        content: "Servant leadership flips the traditional hierarchy — the leader's primary role is to serve the team and remove obstacles to their success. This approach builds deep loyalty, trust, and high performance because people give their best when they feel genuinely supported. Servant leaders ask 'How can I help you succeed?' rather than 'How can you serve my goals?'",
        contentRu: "Служащее лидерство переворачивает традиционную иерархию — главная роль лидера — служить команде и устранять препятствия. Этот подход строит глубокую лояльность, доверие и высокую продуктивность, потому что люди работают лучше, когда чувствуют поддержку. Служащий лидер спрашивает «Как я могу помочь вам добиться успеха?»",
        contentKk: "Қызмет көрсетуші көшбасшылық дәстүрлі иерархияны аударады — көшбасшының негізгі рөлі командаға қызмет ету және олардың сәттілігіне кедергілерді жою. Бұл тәсіл терең адалдық, сенім және жоғары нәтиже құрады, себебі адамдар шынайы қолдау сезінгенде ең жақсы жұмыс істейді. Қызмет көрсетуші көшбасшы «Сіздің табысыңызға қалай көмектесе аламын?» деп сұрайды.",
        keyFormulas: [
          {
            formula: "SERVE: Support → Empower → Remove obstacles → Value people → Elevate others",
            formulaRu: "SERVE: Поддерживай → Наделяй полномочиями → Устраняй препятствия → Цени людей → Возвышай других",
            formulaKk: "SERVE: Қолда → Өкілеттік бер → Кедергілерді жой → Адамдарды бағала → Басқаларды биіктет",
            description: "Five principles of servant leadership",
            descriptionRu: "Пять принципов служащего лидерства",
            descriptionKk: "Қызмет көрсетуші көшбасшылықтың бес қағидасы"
          }
        ],
        solvedExamples: [
          {
            question: "You lead a study group and notice one member is falling behind because they work part-time. How does a servant leader respond?",
            questionRu: "Вы ведёте учебную группу и замечаете, что один участник отстаёт из-за подработки. Как поступит служащий лидер?",
            questionKk: "Оқу тобын басқарасыз және бір мүшенің жартылай жұмыс істегендіктен артта қалып жатқанын байқадыңыз. Қызмет көрсетуші көшбасшы қалай жауап береді?",
            steps: [
              { en: "Support: Have a private, empathetic conversation to understand their schedule. Empower: Ask what accommodation would help most — different meeting times, recorded sessions, or shared notes.", ru: "Поддержка: проведите приватный, эмпатичный разговор для понимания графика. Расширение возможностей: спросите, какая адаптация поможет больше всего — другое время встреч, записи или общие конспекты.", kk: "Қолдау: олардың кестесін түсіну үшін жеке, эмпатиялық әңгіме жүргізіңіз. Мүмкіндік беру: қай бейімдеу көбірек көмектесетінін сұраңыз — басқа кездесу уақыттары, жазбалар немесе ортақ конспектілер." },
              { en: "Remove obstacles: Restructure the study schedule or pair them with a buddy for catch-up sessions. Value: Publicly acknowledge their dedication to balancing work and studies. Elevate: Give them a role matching their strengths so they still contribute meaningfully.", ru: "Устранение препятствий: перестройте расписание или назначьте напарника для дополнительных занятий. Оценка: публично отметьте их преданность совмещению работы и учёбы. Возвышение: дайте роль по их сильным сторонам.", kk: "Кедергілерді жою: оқу кестесін қайта құрыңыз немесе қосымша сабақтар үшін серіктес тағайындаңыз. Бағалау: жұмыс пен оқуды теңестіруге берілгендігін көпшілік алдында мойындаңыз. Көтеру: олардың күшті жақтарына сәйкес рөл беріңіз." }
            ],
            answer: "A servant leader focuses on removing the individual's barriers rather than criticizing their performance, creating loyalty and higher engagement from the entire group.",
            answerRu: "Служащий лидер фокусируется на устранении препятствий человека, а не на критике его результатов, создавая лояльность и более высокую вовлечённость всей группы.",
            answerKk: "Қызмет көрсетуші көшбасшы адамның нәтижесін сынаудың орнына оның кедергілерін жоюға назар аударады, бұл бүкіл топтың адалдығы мен жоғары қатысуын арттырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How does servant leadership differ from traditional top-down leadership?",
            questionRu: "Чем служащее лидерство отличается от традиционного нисходящего?",
            questionKk: "Қызмет көрсетуші көшбасшылық дәстүрлі жоғарыдан төменге көшбасшылықтан қалай ерекшеленеді?",
            answer: "Traditional leadership focuses on the leader giving orders and the team executing. Servant leadership focuses on the leader supporting the team, removing their obstacles, and helping them grow — the leader serves the team, not the other way around.",
            answerRu: "Традиционное лидерство фокусируется на том, что лидер отдаёт приказы, а команда исполняет. Служащее лидерство фокусируется на том, что лидер поддерживает команду, устраняет её препятствия и помогает расти — лидер служит команде, а не наоборот.",
            answerKk: "Дәстүрлі көшбасшылық көшбасшының бұйрық беруіне және команданың орындауына бағытталған. Қызмет көрсетуші көшбасшылық көшбасшының командаға қолдау көрсетуіне, кедергілерін жоюына және өсуіне көмектесуіне бағытталған — көшбасшы командаға қызмет етеді, керісінше емес.",
            hint: "Think about the direction of support — who serves whom?",
            hintRu: "Подумайте о направлении поддержки — кто кому служит?",
            hintKk: "Қолдау бағытын ойлаңыз — кім кімге қызмет етеді?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give an example of how a student club president could practice servant leadership when organizing a school event.",
            questionRu: "Приведите пример, как президент школьного клуба может практиковать служащее лидерство при организации мероприятия.",
            questionKk: "Мектеп клубының президенті мектеп іс-шарасын ұйымдастыруда қызмет көрсетуші көшбасшылықты қалай қолдана алатынына мысал келтіріңіз.",
            answer: "Instead of assigning all tasks top-down, the president asks each member what role they want and what support they need. They handle the unglamorous logistics (booking rooms, ordering supplies) so creative members can focus on content. They check in regularly to remove blockers and publicly credit the team for successes.",
            answerRu: "Вместо того чтобы назначать все задачи сверху вниз, президент спрашивает каждого участника, какую роль он хочет и какая поддержка нужна. Он берёт на себя непривлекательную логистику (бронирование помещений, заказ материалов), чтобы творческие участники могли сосредоточиться на содержании. Регулярно проверяет прогресс, устраняя препятствия, и публично признаёт заслуги команды.",
            answerKk: "Барлық тапсырмаларды жоғарыдан төменге бөлудің орнына, президент әр мүшеден қандай рөл қалайтынын және қандай қолдау қажет екенін сұрайды. Ол шығармашыл мүшелер мазмұнға назар аудара алуы үшін көрікті емес логистиканы (бөлмелерді брондау, жабдықтарды тапсырыс беру) өз мойнына алады. Кедергілерді жою үшін тұрақты тексереді және команданың табысын көпшілік алдында мойындайды.",
            hint: "Think about a leader who does the behind-the-scenes work so others can shine.",
            hintRu: "Подумайте о лидере, который делает закулисную работу, чтобы другие сияли.",
            hintKk: "Басқаларды жарқыратып көрсету үшін сахна артындағы жұмысты жасайтын көшбасшыны ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are a team captain and your best player is being selfish — scoring goals but not passing to teammates, causing resentment. How would a servant leader address this without losing the star player or team morale?",
            questionRu: "Вы капитан команды, и лучший игрок играет эгоистично — забивает, но не пасует, вызывая обиду. Как служащий лидер решит это, не потеряв звезду и не подорвав мораль?",
            questionKk: "Сіз команда капитанысыз және ең жақсы ойыншыңыз өзімшілдік жасауда — гол соғады, бірақ серіктестеріне пас бермейді, бұл ренжітеді. Қызмет көрсетуші көшбасшы жұлдыз ойыншыны жоғалтпай және команда рухын түсірмей мұны қалай шешеді?",
            answer: "Private conversation first — Support: 'I see your incredible talent and I want to help you reach the next level.' Reframe: 'The best players are remembered for making their team better — assists matter as much as goals.' Remove obstacles: 'What do you need from teammates to trust them with passes? Let us work on that in practice.' Value: Publicly celebrate their assists as much as goals. Elevate: 'You could be the player who transforms this whole team's performance.' This preserves their dignity while shifting behavior toward teamwork.",
            answerRu: "Сначала личный разговор — Поддержка: «Я вижу твой невероятный талант и хочу помочь тебе выйти на новый уровень.» Переосмысление: «Лучших игроков помнят за то, что они делают команду лучше — передачи важны не меньше голов.» Устранение препятствий: «Что тебе нужно, чтобы доверять партнёрам передачи? Давай поработаем над этим на тренировках.» Оценка: публично отмечайте их передачи так же, как голы. Возвышение: «Ты можешь стать игроком, который преобразит игру всей команды.» Это сохраняет их достоинство, меняя поведение в сторону командной игры.",
            answerKk: "Алдымен жеке әңгіме — Қолдау: «Сенің керемет талантыңды көріп тұрмын және келесі деңгейге жетуге көмектескім келеді.» Қайта тұжырымдау: «Ең жақсы ойыншылар командасын жақсартқаны үшін есте қалады — пастар голдар сияқты маңызды.» Кедергілерді жою: «Серіктестеріне пас беруге сену үшін не қажет? Мұны жаттығуда пысықтайық.» Бағалау: пастарын голдар сияқты көпшілік алдында мадақтаңыз. Көтеру: «Сен бүкіл команданың нәтижесін өзгертетін ойыншы бола аласың.» Бұл олардың абыройын сақтай отырып, мінез-құлықты командалық ойынға қарай өзгертеді.",
            hint: "Appeal to their ambition and redefine what greatness means, rather than criticizing.",
            hintRu: "Обращайтесь к их амбициям и переопределите понятие величия вместо критики.",
            hintKk: "Сынау орнына олардың амбициясына жүгініңіз және ұлылықтың мағынасын қайта анықтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Team Management",
        titleRu: "Управление командой",
        titleKk: "Команданы басқару",
        content: "Team management is the practical skill of organizing people, tasks, and timelines to achieve shared goals. It includes delegation, accountability, conflict resolution within teams, and recognizing each member's strengths. Strong team managers create clear roles, set expectations early, and build a culture where people want to contribute their best.",
        contentRu: "Управление командой — практический навык организации людей, задач и сроков для достижения общих целей. Оно включает делегирование, подотчётность, разрешение конфликтов и распознавание сильных сторон каждого. Сильные руководители создают чёткие роли, устанавливают ожидания рано и строят культуру, где люди хотят работать на максимуме.",
        contentKk: "Команданы басқару — ортақ мақсаттарға жету үшін адамдарды, тапсырмаларды және мерзімдерді ұйымдастырудың практикалық дағдысы. Ол делегирлеуді, есеп беруді, команда ішіндегі жанжалдарды шешуді және әр мүшенің күшті жақтарын тануды қамтиды. Күшті команда басшылары нақты рөлдер жасайды, күтулерді ерте белгілейді және адамдардың ең жақсысын беруге ынталы мәдениет құрады.",
        keyFormulas: [
          {
            formula: "TEAM: Tasks aligned → Expectations clear → Accountability shared → Milestones tracked",
            formulaRu: "TEAM: Задачи согласованы → Ожидания ясны → Ответственность разделена → Этапы отслеживаются",
            formulaKk: "TEAM: Тапсырмалар келісілген → Күтулер анық → Жауапкершілік бөлінген → Кезеңдер бақыланады",
            description: "Four pillars of effective team management",
            descriptionRu: "Четыре столпа эффективного управления командой",
            descriptionKk: "Тиімді команданы басқарудың төрт тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "You are managing a 4-person team for a science fair project due in 3 weeks. Use the TEAM framework to set up your project management.",
            questionRu: "Вы управляете командой из 4 человек для проекта научной ярмарки через 3 недели. Используйте модель TEAM для организации управления проектом.",
            questionKk: "3 аптада тапсыру мерзімі бар ғылыми жәрмеңке жобасы үшін 4 адамнан тұратын команданы басқарып жатырсыз. Жобаны басқаруды ұйымдастыру үшін TEAM моделін қолданыңыз.",
            steps: [
              { en: "Tasks aligned: Match each person to their strengths — the strong writer does the report, the creative thinker designs the poster, the detail-oriented person handles data, and you coordinate. Expectations clear: Define deliverables and quality standards for each role.", ru: "Задачи: распределите по сильным сторонам — хороший писатель пишет отчёт, креативщик делает постер, внимательный к деталям — данные, вы координируете. Ожидания: определите результаты и стандарты качества для каждой роли.", kk: "Тапсырмалар: әр адамды күшті жағына сәйкестендіріңіз — жақсы жазатын есеп жазады, шығармашыл ойлаушы постер жасайды, егжей-тегжейлі адам деректерді басқарады, сіз үйлестіресіз. Күтулер: әр рөл үшін нәтижелер мен сапа стандарттарын анықтаңыз." },
              { en: "Accountability shared: Weekly check-ins every Monday where each person reports progress. Milestones tracked: Week 1 — research complete, Week 2 — draft and design done, Week 3 — final assembly and practice.", ru: "Подотчётность: еженедельные проверки по понедельникам. Вехи: Неделя 1 — исследование, Неделя 2 — черновик и дизайн, Неделя 3 — финальная сборка и репетиция.", kk: "Есеп беру: дүйсенбі сайын апталық тексерулер. Белестер: 1-апта — зерттеу аяқталды, 2-апта — жоба және дизайн дайын, 3-апта — соңғы жинақтау және жаттығу." }
            ],
            answer: "The TEAM framework prevents the common failures of group projects — unclear roles, missed deadlines, and uneven workload — by creating structure from day one.",
            answerRu: "Модель TEAM предотвращает частые провалы групповых проектов — неясные роли, пропущенные сроки и неравномерную нагрузку — создавая структуру с первого дня.",
            answerKk: "TEAM моделі бірінші күннен бастап құрылым жасау арқылы топтық жобалардың жиі кездесетін сәтсіздіктерін — анық емес рөлдер, өткізіп алынған мерзімдер және теңсіз жүктеме — алдын алады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is it important to assign tasks based on team members' strengths rather than randomly?",
            questionRu: "Почему важно назначать задачи по сильным сторонам участников, а не случайно?",
            questionKk: "Тапсырмаларды кездейсоқ емес, команда мүшелерінің күшті жақтарына сәйкес беру неге маңызды?",
            answer: "Strength-based assignment means each person works on what they do best, producing higher quality work in less time. It also increases motivation because people enjoy tasks that match their abilities.",
            answerRu: "Распределение по сильным сторонам означает, что каждый работает над тем, что делает лучше всего, создавая более качественную работу за меньшее время. Это также повышает мотивацию, потому что людям нравятся задачи, соответствующие их способностям.",
            answerKk: "Күшті жаққа негізделген тапсырма беру әр адамның ең жақсы жасайтын нәрсемен айналысуын білдіреді, бұл аз уақытта жоғары сапалы жұмыс береді. Бұл сондай-ақ мотивацияны арттырады, себебі адамдар қабілеттеріне сәйкес тапсырмаларды ұнатады.",
            hint: "Think about how you feel doing something you are good at vs. something you struggle with.",
            hintRu: "Подумайте, как вы себя чувствуете, делая то, в чём сильны, и то, что даётся с трудом.",
            hintKk: "Жақсы істейтін нәрсені және қиналатын нәрсені жасағанда қалай сезінетіңізді ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "One team member consistently does less work than others. How do you address this fairly without creating resentment?",
            questionRu: "Один участник команды постоянно делает меньше других. Как справедливо решить это, не создавая обиду?",
            questionKk: "Бір команда мүшесі басқалардан аз жұмыс істейді. Ренжітусіз мұны әділ қалай шешесіз?",
            answer: "First, have a private conversation to understand if there are underlying issues (personal problems, unclear expectations, or skill gaps). Then, collaboratively set specific, measurable deliverables with deadlines. Share progress tracking with the whole team so accountability is transparent. If the behavior continues, discuss consequences established in the team agreement.",
            answerRu: "Сначала проведите личный разговор, чтобы понять, есть ли скрытые проблемы (личные трудности, неясные ожидания или пробелы в навыках). Затем совместно установите конкретные, измеримые результаты со сроками. Делитесь отслеживанием прогресса со всей командой, чтобы подотчётность была прозрачной. Если поведение продолжается, обсудите последствия, установленные в командном соглашении.",
            answerKk: "Алдымен жасырын мәселелер бар-жоғын түсіну үшін жеке әңгіме жүргізіңіз (жеке қиындықтар, анық емес күтулер немесе дағды олқылықтары). Содан кейін бірлесіп нақты, өлшенетін нәтижелерді мерзімдермен белгілеңіз. Есеп берудің ашық болуы үшін прогресті бақылауды бүкіл командамен бөлісіңіз. Мінез-құлық жалғасса, команда келісімінде белгіленген салдарларды талқылаңыз.",
            hint: "Start with empathy and understanding before moving to accountability structures.",
            hintRu: "Начните с эмпатии и понимания, прежде чем переходить к структурам подотчётности.",
            hintKk: "Есеп беру құрылымдарына көшу алдында эмпатия мен түсіністіктен бастаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are managing a cross-functional team of 6 students for a school entrepreneurship competition. Two are business students, two are tech students, and two are design students. Each subgroup wants to lead the project their way. Design a team management plan that leverages all perspectives without letting any group dominate.",
            questionRu: "Вы управляете кросс-функциональной командой из 6 студентов для конкурса предпринимательства. Двое — бизнес, двое — техника, двое — дизайн. Каждая подгруппа хочет вести по-своему. Разработайте план управления, использующий все перспективы.",
            questionKk: "Мектеп кәсіпкерлік конкурсы үшін 6 студенттен тұратын кросс-функционалды команданы басқарасыз. Екеуі бизнес, екеуі техника, екеуі дизайн студенттері. Әр топ жобаны өз жолымен басқарғысы келеді. Барлық перспективаларды пайдаланатын, бірақ ешбір топтың үстемдік етпейтін басқару жоспарын жасаңыз.",
            answer: "Structure: Assign a rotating 'Lead of the Week' from each subgroup so each perspective gets a turn at the helm. Create three workstreams (business plan, technical prototype, visual design) with each pair owning their stream but requiring sign-off from the other two pairs. Hold daily 10-minute standups where each pair shares progress. Decision rule: major decisions require at least 4 of 6 votes, ensuring no single subgroup can push through alone. Create a shared project board visible to all. This structure respects expertise while forcing collaboration.",
            answerRu: "Структура: назначайте ротационного «лидера недели» от каждой подгруппы, чтобы каждая точка зрения получала шанс возглавить. Создайте три рабочих потока (бизнес-план, технический прототип, визуальный дизайн), где каждая пара владеет своим потоком, но требуется одобрение двух других пар. Проводите ежедневные 10-минутные летучки, где каждая пара делится прогрессом. Правило решений: важные решения требуют минимум 4 из 6 голосов, гарантируя, что ни одна подгруппа не сможет продавить решение в одиночку. Создайте общую доску проекта, видимую всем. Эта структура уважает экспертизу, одновременно требуя сотрудничества.",
            answerKk: "Құрылым: әр топтан кезекпен «Апта көшбасшысын» тағайындаңыз, сонда әр көзқарас басқаруға кезек алады. Үш жұмыс ағынын құрыңыз (бизнес-жоспар, техникалық прототип, көрнекі дизайн), әр жұп өз ағынын иеленеді, бірақ басқа екі жұптың мақұлдауы қажет. Әр жұп прогресін бөлісетін күнделікті 10 минуттық жиналыстар өткізіңіз. Шешім ережесі: маңызды шешімдер 6-ның кемінде 4 дауысын талап етеді, бір топтың жалғыз шешім қабылдай алмауын қамтамасыз етеді. Барлығына көрінетін ортақ жоба тақтасын жасаңыз. Бұл құрылым сарапшылықты құрметтей отырып, ынтымақтастықты талап етеді.",
            hint: "Create a structure where expertise is respected but collaboration is required — no subgroup can succeed alone.",
            hintRu: "Создайте структуру, где экспертиза уважается, но сотрудничество обязательно — ни одна подгруппа не может преуспеть в одиночку.",
            hintKk: "Сарапшылық құрметтелетін, бірақ ынтымақтастық міндетті құрылым жасаңыз — ешбір топ жалғыз табысқа жете алмайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Motivating Others",
        titleRu: "Мотивация других",
        titleKk: "Басқаларды ынталандыру",
        content: "The ability to motivate others is a core leadership skill that goes beyond giving pep talks. Understanding intrinsic vs. extrinsic motivation helps you tailor your approach to what actually drives each person. Great motivators connect individual goals to the team's mission and create environments where people feel autonomous, competent, and connected.",
        contentRu: "Умение мотивировать других — ключевой лидерский навык, выходящий за рамки воодушевляющих речей. Понимание внутренней и внешней мотивации помогает адаптировать подход к тому, что движет каждым человеком. Великие мотиваторы связывают личные цели с миссией команды и создают среду автономии, компетентности и связи.",
        contentKk: "Басқаларды ынталандыру — ынталандыру сөздерінен асатын негізгі көшбасшылық дағдысы. Ішкі және сыртқы мотивацияны түсіну тәсіліңізді әр адамды шынымен қозғайтын нәрсеге бейімдеуге көмектеседі. Ұлы ынталандырушылар жеке мақсаттарды команда миссиясымен байланыстырады және адамдар автономия, құзыреттілік және байланыс сезінетін ортаны жасайды.",
        keyFormulas: [
          {
            formula: "DRIVE: Discovery of purpose → Recognition → Intrinsic connection → Vision sharing → Encouragement",
            formulaRu: "DRIVE: Осознание цели → Признание → Внутренняя связь → Общее видение → Поддержка",
            formulaKk: "DRIVE: Мақсатты түсіну → Мойындау → Ішкі байланыс → Ортақ көзқарас → Қолдау",
            description: "Five-element motivation framework for leaders",
            descriptionRu: "Пятиэлементная модель мотивации для лидеров",
            descriptionKk: "Көшбасшылар үшін бес элементті мотивация моделі"
          }
        ],
        solvedExamples: [
          {
            question: "A volunteer on your charity project is losing enthusiasm. Use the DRIVE framework to re-motivate them.",
            questionRu: "Волонтёр вашего благотворительного проекта теряет энтузиазм. Используйте модель DRIVE для повторной мотивации.",
            questionKk: "Қайырымдылық жобаңыздың еріктісі ынтасын жоғалтуда. DRIVE моделін қолданып, оларды қайта ынталандырыңыз.",
            steps: [
              { en: "Discovery: Ask 'What originally drew you to this project?' to reconnect them with their purpose. Recognition: 'Your fundraising idea last month raised $500 — that was incredible.'", ru: "Открытие: спросите «Что изначально привлекло тебя к этому проекту?» для воссоединения с целью. Признание: «Твоя идея сбора средств в прошлом месяце принесла $500 — это потрясающе.»", kk: "Ашу: «Бұл жобаға сені бастапқыда не тартты?» деп сұрап, мақсатымен қайта байланыстырыңыз. Мойындау: «Өткен айдағы қаражат жинау идеяң $500 жинады — бұл керемет болды.»" },
              { en: "Intrinsic connection: Link their work to personal values — 'You said you wanted to help kids access education — your work directly funds 3 scholarships.' Vision: Share the bigger picture and future impact. Encouragement: 'We need you — your creativity is what makes this team special.'", ru: "Внутренняя связь: свяжите работу с личными ценностями — «Ты хотел помочь детям получить образование — твоя работа финансирует 3 стипендии.» Видение: покажите общую картину. Поддержка: «Ты нам нужен — твоя креативность делает эту команду особенной.»", kk: "Ішкі байланыс: жұмысты жеке құндылықтармен байланыстырыңыз — «Балаларға білім алуға көмектескің келді — сенің жұмысың 3 стипендияны қаржыландырады.» Көру: жалпы суретті көрсетіңіз. Ынталандыру: «Сен бізге керексің — сенің шығармашылығың бұл команданы ерекше етеді.»" }
            ],
            answer: "DRIVE re-motivates by reconnecting the person with their original purpose and showing them the tangible impact of their contribution.",
            answerRu: "DRIVE повторно мотивирует, воссоединяя человека с его изначальной целью и показывая ощутимое влияние его вклада.",
            answerKk: "DRIVE адамды бастапқы мақсатымен қайта байланыстырып, үлесінің нақты әсерін көрсету арқылы қайта ынталандырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between intrinsic and extrinsic motivation? Give one example of each.",
            questionRu: "В чём разница между внутренней и внешней мотивацией? Приведите по одному примеру.",
            questionKk: "Ішкі және сыртқы мотивацияның айырмашылығы неде? Әрқайсысына бір мысал келтіріңіз.",
            answer: "Intrinsic motivation comes from within — doing something because you find it personally rewarding (e.g., reading because you love learning). Extrinsic motivation comes from external rewards or punishments (e.g., studying to get a good grade or avoid punishment).",
            answerRu: "Внутренняя мотивация исходит изнутри — вы делаете что-то, потому что находите это лично полезным (например, читаете, потому что любите учиться). Внешняя мотивация исходит из внешних наград или наказаний (например, учитесь, чтобы получить хорошую оценку или избежать наказания).",
            answerKk: "Ішкі мотивация ішіңізден келеді — бірдеңені жеке пайдалы деп тапқандықтан жасайсыз (мысалы, оқуды жақсы көргендіктен оқу). Сыртқы мотивация сыртқы марапаттар немесе жазалардан келеді (мысалы, жақсы баға алу немесе жазадан аулақ болу үшін оқу).",
            hint: "Think about the source of the desire — inside you or outside you.",
            hintRu: "Подумайте об источнике желания — внутри вас или снаружи.",
            hintKk: "Тілектің көзін ойлаңыз — сіздің ішіңізде ме, сыртыңызда ма.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your study group is unmotivated because they do not see the point of the subject. How do you help them find intrinsic motivation?",
            questionRu: "Ваша учебная группа не мотивирована, потому что не видит смысла в предмете. Как помочь найти внутреннюю мотивацию?",
            questionKk: "Оқу тобыңыз пәннің мағынасын көрмейді, сондықтан ынтасы жоқ. Ішкі мотивацияны табуға қалай көмектесесіз?",
            answer: "Connect the subject to their personal goals: 'This math concept is the basis for machine learning — your dream career.' Make it practical with real-world applications. Give them choice in how they study (autonomy). Celebrate small wins to build competence. Create group challenges that make it social and fun.",
            answerRu: "Свяжите предмет с их личными целями: «Эта математическая концепция — основа машинного обучения, твоей мечты о карьере.» Сделайте его практичным с примерами из реального мира. Дайте выбор в способах изучения (автономия). Отмечайте маленькие победы для укрепления компетентности. Создайте групповые челленджи, делающие процесс социальным и увлекательным.",
            answerKk: "Пәнді жеке мақсаттарымен байланыстырыңыз: «Бұл математикалық түсінік — армандаған мансабың, машиналық оқытудың негізі.» Оны нақты өмірден мысалдармен практикалық етіңіз. Оқу тәсілінде таңдау беріңіз (автономия). Құзыреттілікті нығайту үшін кішкентай жеңістерді атап өтіңіз. Процесті әлеуметтік әрі қызықты ететін топтық челленждер жасаңыз.",
            hint: "Connect the boring subject to something each person actually cares about.",
            hintRu: "Свяжите скучный предмет с тем, что каждому действительно важно.",
            hintKk: "Жалықтыратын пәнді әр адам шынымен қызығатын нәрсемен байланыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You lead a team where one person is motivated by competition, another by creativity, and a third by helping others. Design a project structure that motivates all three simultaneously without creating conflict between their different drives.",
            questionRu: "Вы руководите командой, где один мотивирован соревнованием, другой — творчеством, третий — помощью другим. Разработайте структуру проекта, мотивирующую всех троих без конфликта между их мотивами.",
            questionKk: "Біреуі бәсекелестікпен, екіншісі шығармашылықпен, үшіншісі басқаларға көмектесумен ынталанатын команданы басқарасыз. Үшеуін де олардың әр түрлі ынталары арасында жанжал тудырмай бір мезгілде ынталандыратын жоба құрылымын жасаңыз.",
            answer: "Structure the project in phases that activate each drive. Phase 1 (Creative): Open brainstorming where the creative person leads ideation — no wrong answers, maximum freedom. Phase 2 (Competitive): Set measurable goals with a leaderboard for each workstream — the competitor thrives on benchmarks. Phase 3 (Helping): The helper leads user testing and community feedback, directly seeing how the project benefits others. Cross-pollination: The competitor's drive for excellence pushes quality, the creative's ideas keep the project innovative, and the helper's empathy ensures the end product truly serves people. Weekly recognition highlights each person's unique contribution type.",
            answerRu: "Структурируйте проект по фазам, активирующим каждый драйв. Фаза 1 (Творческая): открытый мозговой штурм, где творческий человек ведёт генерацию идей — нет неправильных ответов, максимум свободы. Фаза 2 (Соревновательная): установите измеримые цели с таблицей лидеров для каждого рабочего потока — соперник процветает на бенчмарках. Фаза 3 (Помощь): помощник ведёт пользовательское тестирование и сбор отзывов сообщества, напрямую видя, как проект приносит пользу другим. Перекрёстное опыление: стремление соперника к совершенству повышает качество, идеи творческого человека сохраняют новаторство проекта, а эмпатия помощника гарантирует, что конечный продукт действительно служит людям. Еженедельное признание подчёркивает уникальный тип вклада каждого человека.",
            answerKk: "Жобаны әр драйвты іске қосатын кезеңдерге бөліңіз. 1-кезең (Шығармашылық): шығармашыл адам идея генерациясын басқаратын ашық миға шабуыл — қате жауап жоқ, максималды еркіндік. 2-кезең (Бәсекелестік): әр жұмыс ағыны үшін көшбасшылар кестесімен өлшенетін мақсаттар қойыңыз — бәсекелес бенчмарктарда өркендейді. 3-кезең (Көмек): көмекші пайдаланушы тестілеуін және қоғамдастық кері байланысын басқарады, жобаның басқаларға қалай пайда әкелетінін тікелей көреді. Айқасу: бәсекелестің үздіктікке ұмтылуы сапаны арттырады, шығармашылдың идеялары жобаны инновациялық етеді, ал көмекшінің эмпатиясы соңғы өнімнің шынымен адамдарға қызмет ететінін қамтамасыз етеді. Апта сайынғы тану әр адамның бірегей үлес түрін бөлектейді.",
            hint: "Design different project phases or roles that naturally align with each motivation type.",
            hintRu: "Разработайте фазы или роли проекта, естественно совпадающие с каждым типом мотивации.",
            hintKk: "Әр мотивация түріне табиғи түрде сәйкес келетін жоба кезеңдерін немесе рөлдерді жасаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Crisis Communication",
        titleRu: "Кризисная коммуникация",
        titleKk: "Дағдарыстық қарым-қатынас",
        content: "Crisis communication is the ability to communicate clearly, calmly, and decisively when things go wrong. Whether it is a project failure, a team conflict, or an unexpected setback, how you communicate during a crisis defines your leadership. The best crisis communicators are transparent about the problem, take responsibility, and focus on solutions.",
        contentRu: "Кризисная коммуникация — умение общаться ясно, спокойно и решительно, когда что-то идёт не так. Будь то провал проекта, конфликт в команде или неожиданная неудача — то, как вы общаетесь в кризис, определяет ваше лидерство. Лучшие кризисные коммуникаторы прозрачны в проблеме, берут ответственность и фокусируются на решениях.",
        contentKk: "Дағдарыстық қарым-қатынас — бірдеңе дұрыс болмағанда анық, сабырлы және шешімді түрде қарым-қатынас жасау қабілеті. Жоба сәтсіздігі, команда жанжалы немесе күтпеген кедергі болсын — дағдарыс кезінде қалай қарым-қатынас жасайтыныңыз көшбасшылығыңызды анықтайды. Ең жақсы дағдарыстық коммуникаторлар мәселеде ашық, жауапкершілік алады және шешімдерге бағытталады.",
        keyFormulas: [
          {
            formula: "CALM: Contain → Acknowledge → Lead with facts → Move to action",
            formulaRu: "CALM: Сдержи → Признай → Опирайся на факты → Переходи к действию",
            formulaKk: "CALM: Ұста → Мойында → Фактіге сүйен → Әрекетке көш",
            description: "Four-step crisis communication framework",
            descriptionRu: "Четырёхшаговая модель кризисной коммуникации",
            descriptionKk: "Дағдарыстық қарым-қатынастың төрт қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your team's presentation file gets corrupted 30 minutes before a major school competition. You are the team leader. Use the CALM framework to communicate with your team.",
            questionRu: "Файл презентации повредился за 30 минут до важного школьного конкурса. Вы — руководитель. Используйте модель CALM для коммуникации с командой.",
            questionKk: "Маңызды мектеп конкурсына 30 минут қалғанда презентация файлы бұзылды. Сіз команда жетекшісісіз. CALM моделін қолданып командамен қарым-қатынас жасаңыз.",
            steps: [
              { en: "Contain: 'Everyone, stop what you are doing and listen. We have a problem but we can handle it.' Acknowledge: 'Our presentation file is corrupted. I know this is stressful, but panicking will not help.'", ru: "Сдержать: «Все, остановитесь и слушайте. У нас проблема, но мы справимся.» Признать: «Файл повреждён. Я понимаю, это стресс, но паника не поможет.»", kk: "Тоқтату: «Барлығы, тыңдаңыздар. Мәселе бар, бірақ шеше аламыз.» Мойындау: «Презентация файлы бұзылды. Стресс екенін түсінемін, бірақ дүрбелең көмектеспейді.»" },
              { en: "Lead with facts: 'We have 30 minutes and three options: restore from cloud backup, recreate key slides, or present from notes.' Move to action: 'Alex, check the cloud. Sam, open a new file and recreate the title and key data slides. I will outline talking points on paper. We meet back in 10 minutes.'", ru: "Факты: «У нас 30 минут и три варианта: восстановить из облака, пересоздать ключевые слайды или презентовать по записям.» Действие: «Алекс — облако, Сэм — новый файл с ключевыми слайдами, я — план выступления на бумаге. Встречаемся через 10 минут.»", kk: "Фактілер: «30 минут және үш нұсқа бар: бұлттан қалпына келтіру, негізгі слайдтарды қайта жасау немесе жазбалардан ұсыну.» Іс-әрекет: «Алекс, бұлтты тексер. Сэм, жаңа файл ашып негізгі слайдтарды қайта жаса. Мен қағазға сөйлеу жоспарын жазамын. 10 минутта кездесеміз.»" }
            ],
            answer: "CALM prevents panic by giving the team structure, clear roles, and immediate action steps — turning a crisis into a manageable problem.",
            answerRu: "CALM предотвращает панику, давая команде структуру, чёткие роли и немедленные шаги действия — превращая кризис в управляемую проблему.",
            answerKk: "CALM командаға құрылым, анық рөлдер және дереу іс-әрекет қадамдарын беру арқылы дүрбелеңнің алдын алады — дағдарысты басқарылатын мәселеге айналдырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is it important for a leader to stay calm during a crisis, even if they feel panicked inside?",
            questionRu: "Почему лидеру важно сохранять спокойствие в кризис, даже если внутри паника?",
            questionKk: "Ішінде дүрбелең болса да, дағдарыс кезінде көшбасшының сабырлы болуы неге маңызды?",
            answer: "Teams take emotional cues from their leader. If the leader panics, the team panics and makes worse decisions. A calm leader gives the team confidence that the situation is manageable, allowing them to think clearly and act effectively.",
            answerRu: "Команды берут эмоциональный пример со своего лидера. Если лидер паникует, паникует и команда, принимая худшие решения. Спокойный лидер даёт команде уверенность, что ситуация под контролем, позволяя мыслить ясно и действовать эффективно.",
            answerKk: "Команда эмоционалды белгілерді өз көшбасшысынан алады. Көшбасшы дүрбелеңге түссе, команда да дүрбелеңге түсіп, нашар шешімдер қабылдайды. Сабырлы көшбасшы командаға жағдайдың басқарылатынына сенімділік береді, бұл олардың анық ойлап, тиімді әрекет етуіне мүмкіндік береді.",
            hint: "Think about how you react when someone around you is panicking vs. when they are calm.",
            hintRu: "Подумайте, как вы реагируете, когда кто-то рядом паникует, и когда он спокоен.",
            hintKk: "Жаныңыздағы біреу дүрбелеңге түскенде және сабырлы болғанда қалай әрекет ететініңізді ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your school club organized an event and only 10 people showed up instead of the expected 100. As president, what do you say to your disappointed team using the CALM framework?",
            questionRu: "Ваш школьный клуб организовал мероприятие, пришли только 10 человек вместо 100. Как президент, что скажете разочарованной команде по модели CALM?",
            questionKk: "Мектеп клубыңыз іс-шара ұйымдастырды, күтілген 100 орнына 10 адам ғана келді. Президент ретінде CALM моделі бойынша көңілі қалған командаға не айтасыз?",
            answer: "Contain: 'I know this is not what we hoped for, but let us focus on what we can control right now.' Acknowledge: 'We all worked hard and the turnout is disappointing — that is okay to feel.' Lead with facts: '10 people came — let us give them an amazing experience so they bring friends next time. Also, let us honestly evaluate what we missed in promotion.' Move to action: 'Right now, make tonight great for the 10 here. Tomorrow, we debrief and plan a better marketing strategy.'",
            answerRu: "Сдержать: «Я знаю, это не то, на что мы надеялись, но давайте сосредоточимся на том, что можем контролировать прямо сейчас.» Признать: «Мы все усердно работали, и явка разочаровывает — это нормально так себя чувствовать.» Факты: «Пришло 10 человек — дадим им потрясающий опыт, чтобы в следующий раз они привели друзей. Также честно оценим, что упустили в продвижении.» Действие: «Прямо сейчас сделаем сегодняшний вечер отличным для этих 10 человек. Завтра разберём и спланируем лучшую маркетинговую стратегию.»",
            answerKk: "Тоқтату: «Бұл біз күткен нәрсе емес екенін білемін, бірақ қазір бақылай алатын нәрсеге назар аударайық.» Мойындау: «Бәріміз қатты еңбектендік, келу саны көңіл көншітпейді — осылай сезінуге болады.» Фактілер: «10 адам келді — оларға керемет тәжірибе беріп, келесі жолы достарын алып келсін. Сондай-ақ жарнамалауда нені жіберіп алғанымызды адал бағалайық.» Іс-әрекет: «Дәл қазір бүгінгі кешті осы 10 адам үшін тамаша етейік. Ертең талдап, жақсырақ маркетинг стратегиясын жоспарлаймыз.»",
            hint: "Acknowledge the disappointment, find the silver lining, and redirect energy toward what you can still control.",
            hintRu: "Признайте разочарование, найдите позитив и перенаправьте энергию на то, что можно контролировать.",
            hintKk: "Көңілсіздікті мойындаңыз, жақсы жағын табыңыз және энергияны әлі бақылай алатын нәрсеге бағыттаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are student council president and a controversial school policy change is announced that affects all students. Half the students are angry and half support it. The principal asks you to address the student body. Write your crisis communication speech (150 words max) that acknowledges both sides without taking a political stance.",
            questionRu: "Вы президент ученического совета. Объявлено спорное изменение школьной политики. Половина студентов против, половина за. Директор просит выступить перед учениками. Напишите речь кризисной коммуникации (до 150 слов), признающую обе стороны без политической позиции.",
            questionKk: "Сіз оқушылар кеңесінің президентісіз. Даулы мектеп саясатының өзгерісі жарияланды. Оқушылардың жартысы ашуланған, жартысы қолдайды. Директор оқушылар алдында сөз сөйлеуді сұрайды. Саяси ұстаным қабылдамай, екі жақты мойындайтын дағдарыстық қарым-қатынас сөзін жазыңыз (150 сөзге дейін).",
            answer: "Fellow students, I know many of you have strong feelings about the new policy — some feel it is necessary and others feel it is unfair. Both perspectives are valid and deserve to be heard. As your student council president, my role is not to tell you what to think, but to make sure your voice reaches the administration. Here is what we are doing: First, we are organizing an open forum next Tuesday where students can share concerns directly with the principal. Second, we are creating an anonymous feedback form for those who prefer to write. Third, student council will compile all feedback and present it formally to the school board. Change is hard, and your right to be heard matters. Let us channel our energy into constructive dialogue. Thank you.",
            answerRu: "Дорогие ученики, я знаю, что у многих из вас сильные чувства насчёт новой политики — одни считают её необходимой, другие несправедливой. Обе точки зрения обоснованы и заслуживают быть услышанными. Как президент ученического совета, моя роль не в том, чтобы говорить вам, что думать, а в том, чтобы ваш голос дошёл до администрации. Вот что мы делаем: во-первых, организуем открытый форум в следующий вторник, где ученики смогут напрямую поделиться опасениями с директором. Во-вторых, создаём анонимную форму обратной связи для тех, кто предпочитает написать. В-третьих, ученический совет соберёт все отзывы и официально представит их школьному совету. Перемены даются нелегко, и ваше право быть услышанными важно. Давайте направим нашу энергию в конструктивный диалог. Спасибо.",
            answerKk: "Құрметті оқушылар, көпшілігіңіздің жаңа саясат туралы қатты сезімдеріңіз бар екенін білемін — кейбіреулер оны қажет деп санайды, басқалары әділетсіз деп есептейді. Екі көзқарас та негізді және тыңдалуға лайық. Оқушылар кеңесінің президенті ретінде менің рөлім не ойлау керектігін айту емес, дауысыңыздың әкімшілікке жетуін қамтамасыз ету. Біз мыналарды жасап жатырмыз: біріншіден, келесі сейсенбіде оқушылар алаңдаушылықтарын тікелей директормен бөлісе алатын ашық форум ұйымдастырамыз. Екіншіден, жазғанды қалайтындар үшін анонимді кері байланыс формасын жасаймыз. Үшіншіден, оқушылар кеңесі барлық пікірлерді жинап, мектеп кеңесіне ресми түрде ұсынады. Өзгеріс қиын, ал тыңдалу құқығыңыз маңызды. Энергиямызды конструктивті диалогқа бағыттайық. Рахмет.",
            hint: "Your role is to be a bridge between students and administration — validate emotions, provide process, and channel energy constructively.",
            hintRu: "Ваша роль — быть мостом между учениками и администрацией — признайте эмоции, предложите процесс и направьте энергию конструктивно.",
            hintKk: "Рөліңіз оқушылар мен әкімшілік арасындағы көпір болу — эмоцияларды мойындаңыз, процесс ұсыныңыз және энергияны конструктивті бағыттаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Negotiation Communication",
        titleRu: "Коммуникация в переговорах",
        titleKk: "Келіссөз қарым-қатынасы",
        content: "Negotiation is a structured conversation where two or more parties with different interests work toward an agreement. Effective negotiation communication requires preparation, active listening, and the ability to find win-win solutions rather than zero-sum outcomes. Whether negotiating a project role, a scholarship, or a business deal, these skills determine the value you create for everyone involved.",
        contentRu: "Переговоры — структурированная беседа, где стороны с разными интересами работают над соглашением. Эффективная коммуникация в переговорах требует подготовки, активного слушания и умения находить взаимовыгодные решения. Будь то роль в проекте, стипендия или сделка — эти навыки определяют ценность, которую вы создаёте.",
        contentKk: "Келіссөз — әр түрлі мүдделері бар тараптар келісімге жұмыс істейтін құрылымдалған әңгіме. Тиімді келіссөз қарым-қатынасы дайындықты, белсенді тыңдауды және нөлдік нәтижелердің орнына ұтымды шешімдерді табу қабілетін талап етеді. Жоба рөлін, стипендияны немесе іскери мәмілені келіссіз — бұл дағдылар сіз жасайтын құндылықты анықтайды.",
        keyFormulas: [
          {
            formula: "WIN: What do I want → Interests (theirs & mine) → Negotiate for mutual gain",
            formulaRu: "WIN: Чего я хочу → Интересы (их и мои) → Договаривайся о взаимной выгоде",
            formulaKk: "WIN: Мен нені қалаймын → Мүдделер (олардікі және менікі) → Өзара пайда үшін келіс",
            description: "Three-phase negotiation communication framework",
            descriptionRu: "Трёхфазная модель коммуникации в переговорах",
            descriptionKk: "Келіссөз қарым-қатынасының үш фазалы моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You want to change your assigned role in a group project from researcher to presenter. Your teammate currently has the presenter role. Use the WIN framework to negotiate.",
            questionRu: "Вы хотите сменить роль в проекте с исследователя на презентатора. У одноклассника сейчас роль презентатора. Используйте модель WIN для переговоров.",
            questionKk: "Топтық жобада тағайындалған рөліңізді зерттеушіден ұсынушыға өзгерткіңіз келеді. Сыныптасыңызда қазір ұсынушы рөлі бар. Келіссөз үшін WIN моделін қолданыңыз.",
            steps: [
              { en: "What do I want: The presenter role because I want to practice public speaking for upcoming scholarship interviews. Interests: My interest is building presentation skills. Their interest might be avoiding the research workload or also wanting presentation practice.", ru: "Чего хочу: роль презентатора для практики выступлений перед стипендиальными интервью. Интересы: мой — навыки презентации. Их — возможно, избежать объёма исследований или тоже практика выступлений.", kk: "Мен не қалаймын: алдағы стипендия сұхбаттарына дайындалу үшін ұсынушы рөлі. Мүдделер: менің — презентация дағдылары. Олардың — зерттеу жұмысынан аулақ болу немесе сондай-ақ презентация тәжірибесі." },
              { en: "Negotiate for mutual gain: 'I know you enjoy presenting, and I need practice for interviews. What if we co-present — you take the introduction and conclusion, I take the main body? That way we both get experience and the presentation has variety for the audience.'", ru: "Переговоры для обоюдной выгоды: «Знаю, тебе нравится выступать, а мне нужна практика для интервью. Может, выступим вместе — ты берёшь вступление и заключение, я — основную часть? Оба получим опыт, а презентация станет разнообразнее.»", kk: "Өзара пайда үшін келіссөз: «Сен ұсынуды ұнатасың, маған сұхбаттарға тәжірибе керек. Бірге ұсынсақ ше — сен кіріспе мен қорытындыны, мен негізгі бөлімді алсам? Екеуіміз де тәжірибе аламыз, ал презентация аудитория үшін әртүрлі болады.»" }
            ],
            answer: "The WIN framework shifts from 'I want your role' (competitive) to 'How can we both get what we need?' (collaborative), creating a better outcome for everyone.",
            answerRu: "Модель WIN сдвигает фокус с «я хочу твою роль» (конкурентный) на «как нам обоим получить то, что нужно?» (совместный), создавая лучший результат для всех.",
            answerKk: "WIN моделі «мен сенің рөліңді қалаймын» (бәсекелестік) дегеннен «екеуіміз де қалағанымызды қалай ала аламыз?» (ынтымақтастық) дегенге ауысады, бұл барлығы үшін жақсырақ нәтиже жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does 'win-win negotiation' mean, and why is it better than 'win-lose'?",
            questionRu: "Что означает «переговоры win-win» и почему это лучше, чем «win-lose»?",
            questionKk: "«Win-win келіссөз» не білдіреді және неге «win-lose»-тен жақсы?",
            answer: "Win-win means both parties gain something they value from the agreement. Win-lose means one side benefits at the other's expense. Win-win is better because it preserves relationships, builds trust, and creates lasting agreements that both sides want to honor.",
            answerRu: "Win-win означает, что обе стороны получают что-то ценное от соглашения. Win-lose означает, что одна сторона выигрывает за счёт другой. Win-win лучше, потому что сохраняет отношения, строит доверие и создаёт устойчивые соглашения, которые обе стороны хотят соблюдать.",
            answerKk: "Win-win екі тараптың да келісімнен өзіне құнды нәрсе алуын білдіреді. Win-lose бір тараптың екіншісінің есебінен пайда табуын білдіреді. Win-win жақсырақ, себебі ол қарым-қатынасты сақтайды, сенім құрады және екі тарап та құрметтегісі келетін тұрақты келісімдер жасайды.",
            hint: "Think about what happens after the negotiation — do both parties leave satisfied?",
            hintRu: "Подумайте, что происходит после переговоров — обе ли стороны довольны?",
            hintKk: "Келіссөзден кейін не болатынын ойлаңыз — екі тарап та қанағаттанды ма?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are negotiating with a classmate about dividing chapters for a book report. You both want the most interesting chapter. Find a creative win-win solution.",
            questionRu: "Вы договариваетесь с одноклассником о распределении глав для книжного отчёта. Оба хотят самую интересную главу. Найдите креативное win-win решение.",
            questionKk: "Кітап баяндамасы үшін тарауларды бөлу туралы сыныптаспен келіссөз жүргізесіз. Екеуіңіз де ең қызықты тарауды қалайсыз. Шығармашылық win-win шешім табыңыз.",
            answer: "Option 1: Both read the interesting chapter and each covers it from a different angle — one analyzes themes, the other analyzes characters. Option 2: Flip a coin for this report's interesting chapter, and the other person gets first pick on the next assignment. Option 3: Combine forces on the interesting chapter and split the remaining ones evenly. The key is expanding the options beyond 'I get it or you get it.'",
            answerRu: "Вариант 1: оба читают интересную главу и каждый освещает её с разного ракурса — один анализирует темы, другой персонажей. Вариант 2: подбросить монету для интересной главы в этом отчёте, а другой человек первым выбирает в следующем задании. Вариант 3: объединить усилия по интересной главе и поровну разделить остальные. Ключ — расширить варианты за пределы «мне достанется или тебе».",
            answerKk: "1-нұсқа: екеуі де қызықты тарауды оқиды және әрқайсысы басқа қырынан қарастырады — бірі тақырыптарды талдайды, екіншісі кейіпкерлерді. 2-нұсқа: осы баяндамадағы қызықты тарау үшін тиын лақтыру, ал келесі тапсырмада екінші адам бірінші таңдайды. 3-нұсқа: қызықты тарауда күш біріктіру және қалғандарын тең бөлу. Кілт — «маған тиеді немесе саған тиеді» дегеннен тыс нұсқаларды кеңейту.",
            hint: "Think beyond just dividing — can you share it, rotate, or create something new?",
            hintRu: "Думайте шире, чем просто деление — можно ли разделить, чередовать или создать что-то новое?",
            hintKk: "Тек бөлуден тыс ойлаңыз — оны бөлісуге, кезектесуге немесе жаңа нәрсе жасауға бола ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are leading a student team applying for a grant. Your team wants to spend the money on new equipment, but the grant committee prefers community outreach projects. Use the WIN framework to write a proposal that satisfies both parties.",
            questionRu: "Вы руководите командой, подающей заявку на грант. Команда хочет потратить на оборудование, но грантовый комитет предпочитает проекты для сообщества. Используя WIN, напишите предложение, удовлетворяющее обе стороны.",
            questionKk: "Грантқа өтінім беретін студенттік команданы басқарасыз. Команда ақшаны жаңа жабдыққа жұмсағысы келеді, бірақ грант комитеті қоғамдастық жобаларын қалайды. WIN моделін қолданып, екі тарапты қанағаттандыратын ұсыныс жазыңыз.",
            answer: "What we want: New lab equipment to improve our science projects. Their interests: Community impact, educational outreach, visible return on investment. Negotiate for mutual gain: Propose a 'Community Science Lab' — use the grant to buy equipment that will be used for both school research AND free weekend science workshops for younger students in the community. The equipment serves the team's need, the workshops serve the committee's outreach goal, and the proposal is stronger than either idea alone. Budget split: 60% equipment, 40% workshop materials and promotion. Measurable outcomes: 50 community students served per semester, plus improved school project quality.",
            answerRu: "Что мы хотим: новое лабораторное оборудование для улучшения научных проектов. Их интересы: влияние на сообщество, образовательный охват, видимая отдача от инвестиций. Переговоры для обоюдной выгоды: предложить «Общественную научную лабораторию» — использовать грант для покупки оборудования, которое будет использоваться как для школьных исследований, так И для бесплатных выходных научных мастер-классов для младших учеников сообщества. Оборудование служит нужде команды, мастер-классы служат цели охвата комитета, и предложение сильнее, чем любая идея по отдельности. Разделение бюджета: 60% оборудование, 40% материалы для мастер-классов и продвижение. Измеримые результаты: 50 учеников сообщества за семестр, плюс улучшенное качество школьных проектов.",
            answerKk: "Біз не қалаймыз: ғылыми жобаларымызды жақсарту үшін жаңа зертханалық жабдық. Олардың мүдделері: қоғамдастыққа әсер, білім беру қолжетімділігі, көрінетін инвестиция қайтарымы. Өзара пайда үшін келіссөз: «Қоғамдастық ғылыми зертханасы» ұсыну — грантты мектеп зерттеулері ҮШІН ДЕ, қоғамдастықтағы кіші оқушыларға арналған тегін демалыс күндері ғылыми шеберлік сабақтары ҮШІН ДЕ пайдаланылатын жабдық сатып алуға жұмсау. Жабдық команданың қажеттілігіне қызмет етеді, шеберлік сабақтары комитеттің қолжетімділік мақсатына қызмет етеді, ал ұсыныс кез келген идеядан жеке-жеке күштірек. Бюджет бөлінісі: 60% жабдық, 40% шеберлік сабақ материалдары мен жарнама. Өлшенетін нәтижелер: семестрге 50 қоғамдастық оқушысы, әрі мектеп жобаларының сапасының жақсаруы.",
            hint: "Find where your team's need and the committee's goal overlap — that intersection is your winning proposal.",
            hintRu: "Найдите пересечение потребностей команды и целей комитета — это и есть выигрышное предложение.",
            hintKk: "Команда қажеттілігі мен комитет мақсатының қиылысқан жерін табыңыз — бұл сіздің жеңімпаз ұсынысыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Networking",
        titleRu: "Нетворкинг",
        titleKk: "Байланыс құру",
        content: "Networking is the skill of building and maintaining professional relationships that create mutual value over time. It is not about collecting contacts but about genuine connection — showing interest in others, offering help before asking for it, and following up consistently. For students, networking opens doors to mentors, research opportunities, internships, and recommendations.",
        contentRu: "Нетворкинг — навык построения и поддержания профессиональных отношений, создающих взаимную ценность. Это не о сборе контактов, а об искренней связи — интерес к другим, помощь до просьб и последовательное поддержание контакта. Для студентов нетворкинг открывает двери к менторам, исследованиям, стажировкам и рекомендациям.",
        contentKk: "Байланыс құру — уақыт бойынша өзара құндылық жасайтын кәсіби қарым-қатынастарды құру және қолдау дағдысы. Бұл байланыстар жинау емес, шынайы байланыс — басқаларға қызығушылық білдіру, сұрау алдында көмек ұсыну және дәйекті түрде байланысты сақтау. Студенттер үшін байланыс құру менторларға, зерттеу мүмкіндіктеріне, тағылымдамаларға және ұсыныстарға есік ашады.",
        keyFormulas: [
          {
            formula: "CONNECT: Curiosity → Offer value → Note details → Nurture over time → Express gratitude → Come Through on promises",
            formulaRu: "CONNECT: Любопытство → Предложи ценность → Замечай детали → Развивай отношения со временем → Выражай благодарность → Выполняй обещания",
            formulaKk: "CONNECT: Қызығушылық → Құндылық ұсын → Егжей-тегжейді байқа → Уақыт өте дамыт → Алғыс біл → Уәдеңді орында",
            description: "Six-step networking relationship framework",
            descriptionRu: "Шестишаговая модель построения сетевых отношений",
            descriptionKk: "Желілік қарым-қатынас құрудың алты қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You attend a university open day and meet a professor whose research interests match yours. Use the CONNECT framework to build this relationship.",
            questionRu: "Вы посещаете день открытых дверей и встречаете профессора с похожими исследовательскими интересами. Используйте модель CONNECT для построения этих отношений.",
            questionKk: "Университеттің ашық есік күніне барасыз және зерттеу қызығушылықтары сіздікімен сәйкес келетін профессорды кездестіресіз. Бұл қарым-қатынасты құру үшін CONNECT моделін қолданыңыз.",
            steps: [
              { en: "Curiosity: Ask about their current research — 'I read your paper on renewable energy storage. What is your team working on now?' Offer value: 'I organized a similar experiment at my school — I would be happy to share my data if useful.'", ru: "Любопытство: спросите о текущих исследованиях — «Я читал вашу статью о хранении энергии. Над чем работает ваша группа сейчас?» Ценность: «Я провёл похожий эксперимент в школе — могу поделиться данными.»", kk: "Қызығушылық: қазіргі зерттеулері туралы сұраңыз — «Жаңартылатын энергия сақтау туралы мақалаңызды оқыдым. Тобыңыз қазір немен жұмыс істеп жатыр?» Құндылық ұсыну: «Мен мектепте ұқсас тәжірибе жүргіздім — деректерімді бөлісемін.»" },
              { en: "Note: Record their name, research focus, and conversation details in your contacts. Nurture: Send a thank-you email within 24 hours referencing the conversation. Express gratitude: 'Thank you for inspiring my interest in this field.' Come Through: If you promised to share data, do it within the week.", ru: "Записать: имя, исследовательский фокус, детали разговора. Развивать: благодарственное письмо в течение 24 часов со ссылкой на разговор. Благодарность: «Спасибо, что вдохновили мой интерес к этой области.» Выполнить: если обещали данные — отправить в течение недели.", kk: "Жазу: аты, зерттеу бағыты, әңгіме мәліметтерін байланыстарға жазыңыз. Дамыту: 24 сағат ішінде әңгімеге сілтеме жасап алғыс хат жіберіңіз. Алғыс: «Осы салаға қызығушылығымды шабыттандырғаныңызға рахмет.» Уәдені орындау: деректерді бөлісуге уәде берсеңіз, апта ішінде жасаңыз." }
            ],
            answer: "CONNECT transforms a brief meeting into a lasting professional relationship by combining genuine interest with consistent follow-through.",
            answerRu: "CONNECT превращает короткую встречу в долгосрочные профессиональные отношения, сочетая искренний интерес с последовательным выполнением обещаний.",
            answerKk: "CONNECT шынайы қызығушылықты дәйекті орындаумен біріктіру арқылы қысқа кездесуді ұзақ мерзімді кәсіби қарым-қатынасқа айналдырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is following up after meeting someone more important than the initial conversation?",
            questionRu: "Почему поддержание контакта после знакомства важнее самой первой беседы?",
            questionKk: "Біреумен кездесу кезіндегі алғашқы әңгімеден кейін байланысты сақтау неге маңыздырақ?",
            answer: "The initial conversation creates awareness, but the follow-up builds the actual relationship. Without follow-up, you are just another face in a crowd. A thoughtful follow-up email or message shows genuine interest and keeps you in their memory.",
            answerRu: "Первый разговор создаёт узнаваемость, но именно продолжение строит реальные отношения. Без последующего контакта вы — просто ещё одно лицо в толпе. Продуманное письмо-продолжение показывает искренний интерес и остаётся в памяти.",
            answerKk: "Алғашқы әңгіме танымал болуды жасайды, бірақ нақты қарым-қатынасты кейінгі байланыс құрады. Кейінгі байланыссыз сіз тек көптің бірісіз. Ойластырылған кейінгі хат немесе хабарлама шынайы қызығушылықты көрсетеді және есте қалдырады.",
            hint: "Think about how many people a professor meets at an open day — what makes one student memorable?",
            hintRu: "Подумайте, сколько людей профессор встречает на дне открытых дверей — что делает одного студента запоминающимся?",
            hintKk: "Ашық есік күнінде профессор қанша адаммен кездесетінін ойлаңыз — бір студентті есте қаларлық ететін не?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a follow-up email to a professional you met at a career fair who works at a company you are interested in. Make it natural and memorable.",
            questionRu: "Напишите письмо-продолжение профессионалу, которого вы встретили на ярмарке карьер и который работает в интересующей вас компании.",
            questionKk: "Мансап жәрмеңкесінде кездескен, сізді қызықтыратын компанияда жұмыс істейтін маманға кейінгі хат жазыңыз. Оны табиғи және есте қаларлық етіңіз.",
            answer: "Subject: 'Great meeting you at the Career Fair — a quick follow-up.' 'Dear Ms. Johnson, it was wonderful meeting you at yesterday's career fair. Your insights about how data science is transforming healthcare really resonated with me — especially the patient outcome prediction project you mentioned. As someone who has been building machine learning models for my school's science fair, I would love to learn more about internship opportunities at [Company]. I have attached my project portfolio in case it is helpful. Thank you for your time and inspiration. Best regards, [Name].'",
            answerRu: "Тема: «Рад(а) был(а) познакомиться на ярмарке карьер — короткое продолжение.» «Уважаемая г-жа Джонсон, было замечательно познакомиться с вами вчера на ярмарке карьер. Ваши мысли о том, как наука о данных трансформирует здравоохранение, действительно нашли отклик — особенно проект прогнозирования результатов лечения пациентов, о котором вы упомянули. Как человек, создающий модели машинного обучения для школьной научной ярмарки, я хотел(а) бы узнать больше о стажировках в [Компания]. Прилагаю портфолио своих проектов на случай, если пригодится. Спасибо за уделённое время и вдохновение. С уважением, [Имя].»",
            answerKk: "Тақырыбы: «Мансап жәрмеңкесінде танысқаныма қуаныштымын — қысқа жалғасы.» «Құрметті Джонсон ханым, кеше мансап жәрмеңкесінде танысқанымыз тамаша болды. Деректер ғылымының денсаулық сақтауды қалай өзгертіп жатқаны туралы ойларыңыз менде шынымен қызығушылық тудырды — әсіресе сіз айтқан пациенттердің нәтижесін болжау жобасы. Мектебімнің ғылыми жәрмеңкесі үшін машиналық оқыту модельдерін жасап жүрген адам ретінде, [Компания]-дағы тағылымдама мүмкіндіктері туралы көбірек білгім келеді. Пайдалы болар деп жоба портфолиомды қоса тіркедім. Уақытыңыз бен шабытыңызға рахмет. Құрметпен, [Аты].»",
            hint: "Reference something specific from your conversation to show you were genuinely listening.",
            hintRu: "Упомяните конкретную деталь из разговора, чтобы показать, что вы действительно слушали.",
            hintKk: "Шынымен тыңдағаныңызды көрсету үшін әңгімеден нақты бір мәліметке сілтеме жасаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a 6-month networking plan for a student who wants to build connections in the field of artificial intelligence. Include specific actions for each month, types of people to connect with, and how to maintain relationships over time.",
            questionRu: "Создайте 6-месячный план нетворкинга для студента, желающего наладить связи в области ИИ. Включите конкретные действия на каждый месяц, типы людей и способы поддержания отношений.",
            questionKk: "Жасанды интеллект саласында байланыс құрғысы келетін студент үшін 6 айлық байланыс құру жоспарын жасаңыз. Әр айға нақты іс-әрекеттерді, байланысатын адамдар түрлерін және қарым-қатынасты уақыт бойынша сақтау жолдарын қосыңыз.",
            answer: "Month 1: Join 3 online AI communities (Reddit ML, Discord AI servers, LinkedIn AI groups). Comment meaningfully on 5 posts per week. Month 2: Attend 2 virtual AI meetups or webinars. Introduce yourself to speakers afterward with specific questions. Month 3: Reach out to 3 university professors doing AI research — reference their papers and ask genuine questions. Month 4: Connect with 5 AI professionals on LinkedIn with personalized messages referencing shared interests. Offer to share your project or write about their work. Month 5: Apply to 2 AI-related programs, hackathons, or competitions to meet peers. Month 6: Organize a small virtual panel with 2-3 contacts you have built relationships with. Maintenance: Monthly check-ins with top 10 contacts, share relevant articles, congratulate on achievements. This builds a genuine network of 30+ connections across academia, industry, and peers.",
            answerRu: "Месяц 1: присоединитесь к 3 онлайн-сообществам ИИ (Reddit ML, Discord ИИ-серверы, LinkedIn ИИ-группы). Осмысленно комментируйте 5 постов в неделю. Месяц 2: посетите 2 виртуальных митапа или вебинара по ИИ. Представьтесь спикерам с конкретными вопросами. Месяц 3: обратитесь к 3 профессорам университетов, занимающимся исследованиями ИИ — сошлитесь на их статьи и задайте искренние вопросы. Месяц 4: свяжитесь с 5 ИИ-специалистами в LinkedIn с персонализированными сообщениями, ссылаясь на общие интересы. Предложите поделиться своим проектом или написать о их работе. Месяц 5: подайте заявки на 2 программы, хакатона или конкурса, связанных с ИИ, чтобы встретить единомышленников. Месяц 6: организуйте небольшую виртуальную панель с 2-3 контактами, с которыми вы построили отношения. Поддержание: ежемесячные проверки с топ-10 контактами, делитесь релевантными статьями, поздравляйте с достижениями. Это строит подлинную сеть из 30+ связей в академии, индустрии и среди сверстников.",
            answerKk: "1-ай: 3 онлайн ЖИ қауымдастығына қосылыңыз (Reddit ML, Discord ЖИ серверлері, LinkedIn ЖИ топтары). Аптасына 5 жазбаға мағыналы пікір қалдырыңыз. 2-ай: 2 виртуалды ЖИ кездесуіне немесе вебинарға қатысыңыз. Кейін спикерлерге нақты сұрақтармен танысыңыз. 3-ай: ЖИ зерттеулерімен айналысатын 3 университет профессорына хабарласыңыз — олардың мақалаларына сілтеме жасап, шынайы сұрақтар қойыңыз. 4-ай: LinkedIn-де 5 ЖИ мамандарымен ортақ қызығушылықтарға сілтеме жасайтын жеке хабарламалармен байланысыңыз. Жобаңызды бөлісуді немесе олардың жұмысы туралы жазуды ұсыныңыз. 5-ай: құрдастармен танысу үшін 2 ЖИ бағдарламасына, хакатонға немесе конкурсқа өтінім беріңіз. 6-ай: қарым-қатынас құрған 2-3 байланысыңызбен шағын виртуалды панель ұйымдастырыңыз. Қолдау: топ-10 байланыспен айлық тексерулер, тиісті мақалаларды бөлісу, жетістіктермен құттықтау. Бұл академия, индустрия және құрдастар арасында 30+ байланыстан тұратын шынайы желі құрады.",
            hint: "Build gradually from online to personal connections, and always give before you ask.",
            hintRu: "Развивайте постепенно от онлайн к личным связям и всегда давайте, прежде чем просить.",
            hintKk: "Онлайндан жеке байланыстарға біртіндеп дамытыңыз және әрқашан сұрау алдында беріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Executive Presence",
        titleRu: "Харизма руководителя",
        titleKk: "Басшы харизмасы",
        content: "Executive presence is the ability to project confidence, composure, and credibility in high-stakes situations. It combines how you look, how you communicate, and how you act under pressure. You do not need a title to have executive presence — it is about how others perceive your readiness to lead, even as a student.",
        contentRu: "Харизма руководителя — способность проецировать уверенность, хладнокровие и авторитет в ответственных ситуациях. Она сочетает внешний вид, манеру общения и поведение под давлением. Для харизмы не нужна должность — это то, как другие воспринимают вашу готовность вести, даже будучи студентом.",
        contentKk: "Басшы харизмасы — жоғары ставкалы жағдайларда сенімділік, сабырлылық және беделді көрсету қабілеті. Ол сіздің сыртқы түріңізді, қарым-қатынас тәсіліңізді және қысым астындағы әрекетіңізді біріктіреді. Басшы харизмасы үшін лауазым қажет емес — бұл басқалардың сіздің көшбасшылыққа дайындығыңызды қалай қабылдайтыны, тіпті студент кезінде де.",
        keyFormulas: [
          {
            formula: "POISE: Posture → Ownership of message → Intentional pauses → Steady voice → Eye contact",
            formulaRu: "POISE: Осанка → Владение сообщением → Осознанные паузы → Уверенный голос → Зрительный контакт",
            formulaKk: "POISE: Дене қалпы → Хабарламаны меңгеру → Саналы үзілістер → Сенімді дауыс → Көзбен байланыс",
            description: "Five elements of executive presence in communication",
            descriptionRu: "Пять элементов харизмы руководителя в коммуникации",
            descriptionKk: "Қарым-қатынаста басшы харизмасының бес элементі"
          }
        ],
        solvedExamples: [
          {
            question: "You are presenting your startup idea to a panel of investors at a school entrepreneurship competition. Use the POISE framework to maximize your executive presence.",
            questionRu: "Вы представляете стартап-идею жюри инвесторов на школьном конкурсе предпринимательства. Используйте модель POISE для максимальной харизмы.",
            questionKk: "Мектеп кәсіпкерлік конкурсында инвесторлар алқасына стартап идеяңызды ұсынып жатырсыз. Басшы харизмаңызды арттыру үшін POISE моделін қолданыңыз.",
            steps: [
              { en: "Posture: Stand tall with shoulders back, feet shoulder-width apart. Ownership: 'Our solution will reduce food waste by 40% in school cafeterias' — state claims with conviction, not apology. Intentional pauses: After key statistics, pause 2 seconds to let the number sink in.", ru: "Осанка: стойте прямо, плечи назад, ноги на ширине плеч. Владение: «Наше решение сократит пищевые отходы в столовых на 40%» — утверждайте уверенно, без извинений. Паузы: после ключевых цифр — пауза 2 секунды.", kk: "Тұрыс: иығыңызды артқа тартып, тік тұрыңыз. Иелік: «Біздің шешім мектеп асханаларында тамақ қалдықтарын 40% азайтады» — кешірусіз, сенімді түрде мәлімдеңіз. Қасақана үзілістер: маңызды сандардан кейін 2 секунд үзіліс жасаңыз." },
              { en: "Steady voice: Practice eliminating filler words ('um,' 'like'). Speak at a measured pace — slightly slower than normal conversation. Eye contact: Connect with each panel member for 3-5 seconds before moving to the next.", ru: "Голос: устраните слова-паразиты («эм», «ну»). Говорите в размеренном темпе — чуть медленнее обычного разговора. Зрительный контакт: смотрите на каждого члена жюри 3-5 секунд.", kk: "Тұрақты дауыс: толтырғыш сөздерді жойыңыз («мм», «типтік»). Өлшемді қарқынмен сөйлеңіз — қалыпты әңгімеден сәл баяу. Көз контактісі: келесіге ауысу алдында әр алқа мүшесімен 3-5 секунд байланыс орнатыңыз." }
            ],
            answer: "POISE transforms a nervous student pitch into a confident presentation that makes investors take you seriously — executive presence is the difference between 'interesting idea' and 'let us fund this.'",
            answerRu: "POISE превращает нервную студенческую презентацию в уверенное выступление, заставляющее инвесторов относиться к вам серьёзно — харизма руководителя — это разница между «интересная идея» и «давайте профинансируем это».",
            answerKk: "POISE жүйкелі студенттік ұсынысты инвесторлардың сізді байыппен қабылдауын қамтамасыз ететін сенімді презентацияға айналдырады — басшы харизмасы «қызықты идея» мен «мұны қаржыландырайық» дегеннің арасындағы айырмашылық."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why do intentional pauses make a speaker seem more confident, even when they feel nervous?",
            questionRu: "Почему намеренные паузы делают выступающего более уверенным, даже если он нервничает?",
            questionKk: "Қасақана үзілістер неге сөйлеушіні жүйкелі болса да сенімдірек етіп көрсетеді?",
            answer: "Pauses signal control — a nervous speaker rushes through words while a confident speaker trusts the silence. Pauses give the audience time to absorb key points, and they make the speaker appear thoughtful and in command rather than anxious to finish.",
            answerRu: "Паузы сигнализируют контроль — нервный оратор торопливо проговаривает слова, а уверенный доверяет тишине. Паузы дают аудитории время усвоить ключевые моменты и делают оратора вдумчивым и владеющим ситуацией, а не спешащим закончить.",
            answerKk: "Үзілістер бақылауды білдіреді — жүйкелі сөйлеуші сөздерді асығып айтады, ал сенімді сөйлеуші үнсіздікке сенеді. Үзілістер аудиторияға негізгі ойларды қабылдауға уақыт береді және сөйлеушіні асығыс емес, ойлы әрі жағдайды меңгерген етіп көрсетеді.",
            hint: "Think about the difference between someone rushing through a speech and someone who takes their time.",
            hintRu: "Подумайте о разнице между тем, кто торопится, и тем, кто не спешит.",
            hintKk: "Сөзді асығып сөйлейтін және уақыт алатын адам арасындағы айырмашылықты ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have a scholarship interview in one week. Design a daily practice routine to build your executive presence before the interview.",
            questionRu: "Через неделю у вас стипендиальное интервью. Разработайте ежедневную программу для развития харизмы руководителя.",
            questionKk: "Бір аптадан кейін стипендия сұхбатыңыз бар. Сұхбат алдында басшы харизмаңызды арттыру үшін күнделікті жаттығу бағдарламасын жасаңыз.",
            answer: "Day 1-2: Record yourself answering common interview questions. Watch for filler words, posture, and eye contact. Day 3-4: Practice the 2-second pause technique after every key statement. Time yourself to speak 20% slower than normal. Day 5: Mock interview with a friend who asks tough follow-up questions. Focus on maintaining composure. Day 6: Power posing for 2 minutes before practice sessions. Rehearse your opening and closing statements until they feel natural. Day 7: Final run-through with full professional attire. Record and review.",
            answerRu: "День 1-2: записывайте себя, отвечая на распространённые вопросы интервью. Следите за словами-паразитами, осанкой и зрительным контактом. День 3-4: практикуйте технику 2-секундной паузы после каждого ключевого утверждения. Засекайте время — говорите на 20% медленнее обычного. День 5: пробное интервью с другом, который задаёт сложные уточняющие вопросы. Сосредоточьтесь на сохранении самообладания. День 6: силовая поза 2 минуты перед тренировкой. Репетируйте вступительные и заключительные фразы, пока не станут естественными. День 7: финальный прогон в полной деловой одежде. Запишите и просмотрите.",
            answerKk: "1-2 күн: жиі кездесетін сұхбат сұрақтарына жауап беруді жазып алыңыз. Толтырғыш сөздерге, тұрысыңызға және көз контактісіне назар аударыңыз. 3-4 күн: әр негізгі мәлімдемеден кейін 2 секундтық үзіліс техникасын жаттықтырыңыз. Уақытты өлшеңіз — қалыптыдан 20%-ға баяу сөйлеңіз. 5-күн: қиын қосымша сұрақтар қоятын досыңызбен сынақ сұхбаты. Сабырлылықты сақтауға назар аударыңыз. 6-күн: жаттығу алдында 2 минут күшті дене қалпы. Кіріспе мен қорытынды сөздеріңізді табиғи болғанша жаттықтырыңыз. 7-күн: толық іскери киіммен соңғы жаттығу. Жазып алып, қараңыз.",
            hint: "Build one POISE element per day, then combine them all in the final practice.",
            hintRu: "Развивайте по одному элементу POISE в день, затем объедините все в финальной репетиции.",
            hintKk: "Күн сайын бір POISE элементін дамытыңыз, содан кейін соңғы жаттығуда бәрін біріктіріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "During a presentation, a panel member interrupts you with a challenging question you do not know the answer to. Using POISE principles, demonstrate how you would handle this moment while maintaining executive presence.",
            questionRu: "Во время презентации член жюри перебивает вас сложным вопросом, на который вы не знаете ответа. Используя принципы POISE, покажите, как сохранить харизму руководителя.",
            questionKk: "Презентация кезінде алқа мүшесі сізді білмейтін қиын сұрағыңызбен бөледі. POISE қағидаларын қолданып, басшы харизмасын сақтай отырып, бұл сәтті қалай шешетініңізді көрсетіңіз.",
            answer: "Posture: Maintain upright posture — do not shrink or look down. Ownership: 'That is an excellent question and an area I want to research further.' (Own the gap without apologizing.) Intentional pause: Take a 2-3 second pause to collect your thoughts — this signals confidence. Steady voice: 'Based on what I know, [share related knowledge]. I would want to verify the specific numbers before giving you a definitive answer. May I follow up with you after the presentation with the exact data?' Eye contact: Maintain direct eye contact with the questioner throughout. This response demonstrates intellectual honesty, composure under pressure, and commitment to accuracy — all signs of true executive presence.",
            answerRu: "Осанка: сохраняйте прямую осанку — не сжимайтесь и не смотрите вниз. Владение: «Это отличный вопрос и область, которую я хочу изучить глубже.» (Признайте пробел без извинений.) Намеренная пауза: возьмите паузу 2-3 секунды, чтобы собраться с мыслями — это сигнализирует уверенность. Устойчивый голос: «Исходя из того, что я знаю, [поделиться соответствующими знаниями]. Я хотел(а) бы проверить точные цифры перед тем, как дать окончательный ответ. Могу ли я вернуться к вам после презентации с точными данными?» Зрительный контакт: сохраняйте прямой зрительный контакт с задавшим вопрос на протяжении всего ответа. Этот ответ демонстрирует интеллектуальную честность, самообладание под давлением и приверженность точности — все признаки истинной харизмы руководителя.",
            answerKk: "Тұрыс: тік тұрысты сақтаңыз — жиырылмаңыз немесе төмен қарамаңыз. Иелік: «Бұл өте жақсы сұрақ және мен тереңірек зерттегім келетін сала.» (Кешірім сұрамай олқылықты мойындаңыз.) Қасақана үзіліс: ойларыңызды жинау үшін 2-3 секунд үзіліс алыңыз — бұл сенімділікті білдіреді. Тұрақты дауыс: «Білетінімнен шыға отырып, [тиісті білімді бөлісу]. Түпкілікті жауап беру алдында нақты сандарды тексергім келеді. Презентациядан кейін дәл деректермен сізге қайта хабарлассам бола ма?» Көз контактісі: жауап беру барысында сұрақ қойған адаммен тікелей көз контактісін сақтаңыз. Бұл жауап интеллектуалды адалдықты, қысым астындағы сабырлылықты және дәлдікке берілгендікті көрсетеді — нағыз басшы харизмасының белгілері.",
            hint: "Executive presence in uncertainty is about honesty with confidence — admit what you do not know without losing composure.",
            hintRu: "Харизма в неопределённости — это честность с уверенностью: признайте незнание, не теряя самообладания.",
            hintKk: "Белгісіздіктегі харизма — сенімділікпен шынайылық: сабырлылығыңызды жоғалтпай білмейтініңізді мойындаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Emotional Appeals",
        titleRu: "Эмоциональные обращения",
        titleKk: "Эмоционалды үндеулер",
        content: "Emotional appeals in communication use feelings — empathy, hope, fear, pride — to connect with an audience on a deeper level than logic alone. Ethical emotional appeals amplify truthful messages by making them personally resonant. The key is authenticity: audiences detect manipulation, but genuine emotional connection builds trust and inspires action.",
        contentRu: "Эмоциональные обращения используют чувства — эмпатию, надежду, страх, гордость — для связи с аудиторией на более глубоком уровне, чем логика. Этичные эмоциональные обращения усиливают правдивые сообщения, делая их личностно значимыми. Ключ — подлинность: аудитория чувствует манипуляцию, но искренняя эмоциональная связь строит доверие и вдохновляет.",
        contentKk: "Қарым-қатынастағы эмоционалды үндеулер сезімдерді — эмпатия, үміт, қорқыныш, мақтаныш — аудиториямен логикадан тереңірек деңгейде байланыс орнату үшін қолданады. Этикалық эмоционалды үндеулер шынайы хабарларды жеке маңызды ете отырып күшейтеді. Кілт — шынайылық: аудитория манипуляцияны сезеді, бірақ шынайы эмоционалды байланыс сенім құрады және іс-әрекетке шабыттандырады.",
        keyFormulas: [
          {
            formula: "HEART: Hook emotionally → Empathize → Amplify with story → Relate to audience → Transition to action",
            formulaRu: "HEART: Зацепи эмоционально → Прояви эмпатию → Усиль историей → Найди отклик у аудитории → Переходи к действию",
            formulaKk: "HEART: Эмоционалды тарт → Эмпатия таныт → Оқиғамен күшейт → Аудиториямен үндес → Әрекетке көш",
            description: "Five-step ethical emotional appeal framework",
            descriptionRu: "Пятишаговая модель этичного эмоционального обращения",
            descriptionKk: "Этикалық эмоционалды үндеудің бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are giving a speech to raise donations for a local food bank. Use the HEART framework to create an emotional appeal that is genuine and effective.",
            questionRu: "Вы произносите речь для сбора пожертвований в продовольственный банк. Используйте модель HEART для создания подлинного и эффективного эмоционального обращения.",
            questionKk: "Жергілікті тамақ банкіне қайырмалдық жинау үшін сөз сөйлеп жатырсыз. Шынайы және тиімді эмоционалды үндеу жасау үшін HEART моделін қолданыңыз.",
            steps: [
              { en: "Hook: 'Last Tuesday, a 7-year-old named Amir asked his teacher if he could take the leftover lunch home because there was no dinner waiting for him.' Empathize: 'Imagine being hungry and not knowing when your next meal will come.'", ru: "Зацепка: «В прошлый вторник 7-летний Амир попросил учительницу забрать остатки обеда домой, потому что дома ужина не было.» Эмпатия: «Представьте, что вы голодны и не знаете, когда будет следующий приём пищи.»", kk: "Ілмек: «Өткен сейсенбіде 7 жастағы Амір мұғалімінен қалған түскі асты үйге алып кетуін сұрады, себебі үйде кешкі ас күтпеді.» Эмпатия: «Аш болып, келесі тамақ қашан болатынын білмейтініңізді елестетіңіз.»" },
              { en: "Amplify: Tell Amir's fuller story — how the food bank helped his family through a difficult winter. Relate: 'Any of our families could face this — job loss, medical bills.' Transition: 'Today, $20 feeds a family for a week. Let us make sure no child in our community goes to bed hungry.'", ru: "Усиление: расскажите полную историю Амира — как банк помог его семье пережить трудную зиму. Связь: «Любая наша семья может столкнуться с этим.» Переход: «Сегодня $20 кормят семью неделю. Давайте убедимся, что ни один ребёнок не ложится спать голодным.»", kk: "Күшейту: Амірдің толық әңгімесін айтыңыз — тамақ банкі оның отбасына қиын қыс кезінде қалай көмектесті. Байланыстыру: «Біздің кез келген отбасы бұған тап болуы мүмкін.» Ауысу: «Бүгін $20 отбасын бір апта тамақтандырады. Қоғамдастығымыздағы бірде-бір бала аш ұйықтамайтынына көз жеткізейік.»" }
            ],
            answer: "HEART creates an ethical emotional appeal that moves people to act — the story is true, the emotion is genuine, and the call to action is clear and proportionate.",
            answerRu: "HEART создаёт этичное эмоциональное обращение, побуждающее людей к действию — история правдива, эмоция подлинна, а призыв к действию ясен и соразмерен.",
            answerKk: "HEART адамдарды әрекетке итермелейтін этикалық эмоционалды үндеу жасайды — оқиға шынайы, эмоция шынайы, ал іс-әрекетке шақыру анық әрі шамалас."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What makes an emotional appeal ethical vs. manipulative?",
            questionRu: "Что делает эмоциональное обращение этичным, а не манипулятивным?",
            questionKk: "Эмоционалды үндеуді манипулятивті емес, этикалық ететін не?",
            answer: "An ethical emotional appeal amplifies a truthful message — the facts are real, the stories are genuine, and the call to action is proportionate. A manipulative appeal exaggerates, uses false stories, hides information, or exploits vulnerable emotions to push people toward decisions that do not serve their interests.",
            answerRu: "Этичное эмоциональное обращение усиливает правдивое сообщение — факты реальны, истории подлинны, а призыв к действию соразмерен. Манипулятивное обращение преувеличивает, использует ложные истории, скрывает информацию или эксплуатирует уязвимые эмоции, чтобы подтолкнуть людей к решениям, не отвечающим их интересам.",
            answerKk: "Этикалық эмоционалды үндеу шынайы хабарды күшейтеді — фактілер нақты, оқиғалар шынайы, ал іс-әрекетке шақыру шамалас. Манипулятивті үндеу асыра сілтейді, жалған оқиғаларды қолданады, ақпаратты жасырады немесе адамдарды өз мүддесіне сай келмейтін шешімдерге итермелеу үшін осал эмоцияларды пайдаланады.",
            hint: "Think about whether the speaker is being honest and whether the audience benefits from acting on the appeal.",
            hintRu: "Подумайте, честен ли выступающий и выигрывает ли аудитория от действий по обращению.",
            hintKk: "Сөйлеуші адал ма және аудитория үндеу бойынша әрекет етуден пайда көре ме, ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Rewrite this dry statement as an emotional appeal for a college essay: 'I tutored students for two years and it was a good experience.'",
            questionRu: "Перепишите это сухое утверждение как эмоциональное обращение для эссе: «Я репетиторствовал два года, и это был хороший опыт.»",
            questionKk: "Колледж эссесі үшін бұл құрғақ мәлімдемені эмоционалды үндеуге қайта жазыңыз: «Мен екі жыл репетитор болдым, жақсы тәжірибе болды.»",
            answer: "When Dina first walked into tutoring, she would not make eye contact. She whispered 'I am stupid at math' before I could even introduce myself. Eight months later, she stood in front of our class explaining quadratic equations — not because I taught her formulas, but because someone finally told her she was capable. That moment — watching her transform from hiding to teaching — is why I want to dedicate my career to education.",
            answerRu: "Когда Дина впервые пришла на репетиторство, она не смотрела в глаза. Она прошептала «я тупая в математике», прежде чем я успел(а) даже представиться. Восемь месяцев спустя она стояла перед нашим классом, объясняя квадратные уравнения — не потому что я научил(а) её формулам, а потому что кто-то наконец сказал ей, что она способна. Этот момент — наблюдение за её превращением из прячущейся в обучающую — вот почему я хочу посвятить карьеру образованию.",
            answerKk: "Дина репетиторлыққа алғаш келгенде, көзге қарамайтын. Мен өзімді таныстырмай тұрып, ол «мен математикада ақымақпын» деп сыбырлады. Сегіз айдан кейін ол біздің сыныптың алдында квадрат теңдеулерді түсіндіріп тұрды — мен оған формулаларды үйреткендіктен емес, біреу ақыры оған қабілетті екенін айтқандықтан. Оның жасырынудан оқытуға өзгеруін көрген сол сәт — мен неге мансабымды білім беруге арнағым келетінінің себебі.",
            hint: "Show a specific moment of transformation with sensory details and emotional depth.",
            hintRu: "Покажите конкретный момент трансформации с сенсорными деталями и эмоциональной глубиной.",
            hintKk: "Сенсорлық мәліметтер мен эмоционалды тереңдікпен нақты трансформация сәтін көрсетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are writing a speech to convince your community to fund a new youth center. Create two versions of the same appeal — one using ethical emotional techniques and one using manipulative ones. Explain the differences and why the ethical version is more effective long-term.",
            questionRu: "Вы пишете речь для убеждения сообщества финансировать молодёжный центр. Создайте две версии — этичную и манипулятивную. Объясните различия и почему этичная эффективнее.",
            questionKk: "Қоғамдастығыңызды жаңа жасөспірімдер орталығын қаржыландыруға сендіру үшін сөз жазып жатырсыз. Бір үндеудің екі нұсқасын жасаңыз — этикалық және манипулятивті. Айырмашылықтарды және этикалық нұсқаның ұзақ мерзімде неге тиімдірек екенін түсіндіріңіз.",
            answer: "Ethical version: 'Last year, 3 teenagers from our neighborhood were arrested for vandalism. When I talked to them, they said there was nowhere to go after school. A youth center with mentors, sports, and study spaces could change that. The data supports this — cities with youth centers see a 30% reduction in juvenile incidents. For $50,000, we can give our kids a place to belong.' Manipulative version: 'If we do not build this center, your children could be next. Crime is skyrocketing and your family is at risk. Do you want to live in fear?' Differences: The ethical version uses real data, a true story, and proportionate concern. The manipulative version exaggerates risk ('skyrocketing'), uses fear ('your family at risk'), and offers no evidence. Long-term, the ethical version builds trust and sustained community support, while the manipulative version creates backlash when people realize they were misled.",
            answerRu: "Этичная версия: «В прошлом году 3 подростка из нашего района были арестованы за вандализм. Когда я поговорил(а) с ними, они сказали, что после школы им некуда пойти. Молодёжный центр с наставниками, спортом и местами для учёбы мог бы это изменить. Данные это подтверждают — в городах с молодёжными центрами число подростковых правонарушений снижается на 30%. За $50 000 мы можем дать нашим детям место, где они будут чувствовать себя нужными.» Манипулятивная версия: «Если мы не построим этот центр, следующими можете быть ваши дети. Преступность стремительно растёт, и ваша семья в опасности. Хотите жить в страхе?» Различия: этичная версия использует реальные данные, правдивую историю и соразмерную тревогу. Манипулятивная версия преувеличивает риск («стремительно растёт»), использует страх («ваша семья в опасности») и не предлагает доказательств. В долгосрочной перспективе этичная версия строит доверие и устойчивую поддержку сообщества, а манипулятивная вызывает негативную реакцию, когда люди понимают, что их ввели в заблуждение.",
            answerKk: "Этикалық нұсқа: «Былтыр аудандағы 3 жасөспірім вандализм үшін тұтқындалды. Олармен сөйлескенде, мектептен кейін баратын жер жоқ екенін айтты. Менторлары, спорты және оқу орындары бар жасөспірімдер орталығы мұны өзгерте алады. Деректер мұны растайды — жасөспірімдер орталықтары бар қалаларда жасөспірімдер құқық бұзушылығы 30%-ға азаяды. $50,000-қа біз балаларымызға тиесілі сезінетін орын бере аламыз.» Манипулятивті нұсқа: «Бұл орталықты салмасақ, келесі кезек балаларыңызға келуі мүмкін. Қылмыс тез өсуде, ал отбасыңыз қауіп астында. Қорқыныш ішінде өмір сүргіңіз келе ме?» Айырмашылықтар: этикалық нұсқа нақты деректерді, шынайы оқиғаны және шамалас алаңдаушылықты қолданады. Манипулятивті нұсқа қауіпті асыра сілтейді («тез өсуде»), қорқынышты пайдаланады («отбасыңыз қауіп астында») және дәлел ұсынбайды. Ұзақ мерзімде этикалық нұсқа сенім мен тұрақты қоғамдастық қолдауын құрады, ал манипулятивті нұсқа адамдар алданғанын түсінгенде теріс реакция тудырады.",
            hint: "The ethical version informs and empowers the audience to make a good decision. The manipulative version exploits fear to bypass rational thinking.",
            hintRu: "Этичная версия информирует и помогает принять хорошее решение. Манипулятивная эксплуатирует страх, обходя рациональное мышление.",
            hintKk: "Этикалық нұсқа аудиторияны хабардар етіп, жақсы шешім қабылдауға мүмкіндік береді. Манипулятивті нұсқа рационалды ойлауды айналып, қорқынышты пайдаланады.",
            xp: 20
          }
        ]
      },
      {
        title: "Leading Remote Teams",
        titleRu: "Руководство удалёнными командами",
        titleKk: "Қашықтағы командаларды басқару",
        content: "Leading remote teams requires intentional communication strategies since you cannot rely on hallway conversations or body language cues. Remote leaders must over-communicate expectations, create structured touchpoints, and build team culture across screens and time zones. This skill is increasingly essential as remote work and international collaboration become the norm in education and careers.",
        contentRu: "Руководство удалёнными командами требует осознанных коммуникационных стратегий, поскольку нельзя полагаться на случайные встречи и язык тела. Удалённые лидеры должны чётко доносить ожидания, создавать структурированные точки контакта и строить культуру через экраны и часовые пояса.",
        contentKk: "Қашықтағы командаларды басқару қасақана қарым-қатынас стратегияларын талап етеді, себебі дәліздегі әңгімелер мен дене тілі белгілеріне сену мүмкін емес. Қашықтағы көшбасшылар күтулерді артық хабарлау, құрылымдалған байланыс нүктелерін жасау және экрандар мен уақыт аймақтары арқылы команда мәдениетін құру керек.",
        keyFormulas: [
          {
            formula: "REMOTE: Rituals for connection → Over-communicate → Measure outcomes not hours → Optimize tools → Trust and empower",
            formulaRu: "REMOTE: Ритуалы для связи → Общайся с избытком → Оценивай результат, а не часы → Оптимизируй инструменты → Доверяй и наделяй полномочиями",
            formulaKk: "REMOTE: Байланыс рәсімдері → Артық қарым-қатынас жаса → Сағатты емес, нәтижені өлше → Құралдарды оңтайланд → Сен және өкілеттік бер",
            description: "Five principles for leading effective remote teams",
            descriptionRu: "Пять принципов руководства эффективными удалёнными командами",
            descriptionKk: "Тиімді қашықтағы командаларды басқарудың бес қағидасы"
          }
        ],
        solvedExamples: [
          {
            question: "You are leading a group project with teammates in three different cities. Using the REMOTE framework, how do you set up your team for success?",
            questionRu: "Вы руководите проектом с участниками в трёх городах. Используя модель REMOTE, как обеспечить успех команды?",
            questionKk: "Үш түрлі қаладағы серіктестермен топтық жобаны басқарып жатырсыз. REMOTE моделін қолданып, команданы табысқа қалай дайындайсыз?",
            steps: [
              { en: "Rituals: Weekly 30-minute video call every Monday for updates and a Friday 'wins of the week' message in the group chat. Over-communicate: Write every decision in a shared doc — never rely on 'I think we agreed verbally.'", ru: "Ритуалы: еженедельный 30-минутный видеозвонок по понедельникам и пятничное сообщение «победы недели» в групповом чате. Сверхкоммуникация: записывайте все решения в общий документ — никогда не полагайтесь на устные договорённости.", kk: "Рәсімдер: дүйсенбі сайын 30 минуттық апталық бейне қоңырау және жұма сайын топтық чатта «аптаның жеңістері» хабарламасы. Артық хабарлау: барлық шешімдерді ортақ құжатқа жазыңыз — «ауызша келістік деп ойлаймын» дегенге сенбеңіз." },
              { en: "Measure outcomes: Track deliverables and milestones, not who is online longest. Optimize tools: Use Notion for docs, Discord for quick chat, and Google Meet for face-to-face. Trust: Give autonomy on how and when people work — focus on what they deliver.", ru: "Результаты: отслеживайте достижения и вехи, а не кто дольше онлайн. Инструменты: Notion для документов, Discord для чата, Google Meet для встреч. Доверие: дайте автономию в том, как и когда работать — важен результат.", kk: "Нәтижелерді өлшеу: кім ұзақ онлайн болғанын емес, нәтижелер мен белестерді қадағалаңыз. Құралдарды оңтайландыру: құжаттар үшін Notion, жылдам чат үшін Discord, бетпе-бет кездесулер үшін Google Meet. Сенім: адамдарға қалай және қашан жұмыс істейтініне автономия беріңіз — нені жеткізетініне назар аударыңыз." }
            ],
            answer: "The REMOTE framework addresses the unique challenges of distributed teams by replacing physical proximity with intentional digital rituals and clear documentation.",
            answerRu: "Модель REMOTE решает уникальные проблемы распределённых команд, заменяя физическую близость осознанными цифровыми ритуалами и чёткой документацией.",
            answerKk: "REMOTE моделі физикалық жақындықты қасақана цифрлық рәсімдер мен анық құжаттамамен алмастыру арқылы бөлінген командалардың бірегей қиындықтарын шешеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is over-communication important in remote teams but less necessary in in-person teams?",
            questionRu: "Почему сверхкоммуникация важна в удалённых командах, но менее нужна при личной работе?",
            questionKk: "Артық хабарлау қашықтағы командаларда неге маңызды, бірақ бетпе-бет командаларда аз қажет?",
            answer: "In-person teams share information naturally through overhearing conversations, seeing body language, and quick hallway chats. Remote teams miss all of these cues, so information must be explicitly written and shared. Without over-communication, remote team members make assumptions, miss updates, and feel isolated.",
            answerRu: "Команды, работающие лично, естественно обмениваются информацией через случайно услышанные разговоры, язык тела и быстрые беседы в коридоре. Удалённые команды лишены всех этих сигналов, поэтому информация должна быть явно записана и передана. Без сверхкоммуникации участники удалённой команды строят предположения, пропускают обновления и чувствуют себя изолированными.",
            answerKk: "Бетпе-бет жұмыс істейтін командалар кездейсоқ естіген әңгімелер, дене тілі және дәліздегі жылдам әңгімелер арқылы табиғи түрде ақпарат алмасады. Қашықтағы командалар осы белгілердің бәрінен айырылады, сондықтан ақпарат нақты жазылып, бөлісілуі керек. Артық хабарлаусыз қашықтағы команда мүшелері болжам жасайды, жаңартуларды жіберіп алады және оқшауланған сезінеді.",
            hint: "Think about all the information you absorb just by being physically near your teammates.",
            hintRu: "Подумайте обо всей информации, которую вы получаете, просто находясь рядом с командой.",
            hintKk: "Команда мүшелеріңіздің жанында физикалық түрде бола отырып, қандай ақпарат алатыныңызды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A remote team member has not responded to messages for two days. How do you handle this as a remote team leader?",
            questionRu: "Удалённый участник не отвечает на сообщения два дня. Как вы поступите как лидер удалённой команды?",
            questionKk: "Қашықтағы команда мүшесі екі күн бойы хабарламаларға жауап бермеді. Қашықтағы команда жетекшісі ретінде мұны қалай шешесіз?",
            answer: "Step 1: Send a caring, non-accusatory direct message: 'Hey, I have not heard from you in a couple of days. Just checking in — is everything okay?' Step 2: If no response, try a different channel (text, call). Step 3: If they respond with a personal issue, offer support and flexibility. Step 4: If it becomes a pattern, have an honest conversation about communication expectations. Always assume good intent first — in remote work, people face invisible challenges.",
            answerRu: "Шаг 1: отправьте заботливое, необвиняющее сообщение: «Привет, я не получал(а) от тебя вестей пару дней. Просто проверяю — всё в порядке?» Шаг 2: если ответа нет, попробуйте другой канал (СМС, звонок). Шаг 3: если они отвечают личной проблемой, предложите поддержку и гибкость. Шаг 4: если это становится закономерностью, честно поговорите об ожиданиях по коммуникации. Всегда сначала предполагайте хорошие намерения — в удалённой работе люди сталкиваются с невидимыми трудностями.",
            answerKk: "1-қадам: қамқор, айыптамайтын хабарлама жіберіңіз: «Сәлем, бірнеше күн бойы сенен хабар болмады. Тексеріп қойып жатырмын — бәрі жақсы ма?» 2-қадам: жауап болмаса, басқа арнаны қолданып көріңіз (SMS, қоңырау). 3-қадам: олар жеке мәселемен жауап берсе, қолдау мен икемділік ұсыныңыз. 4-қадам: бұл заңдылыққа айналса, қарым-қатынас күтулері туралы шынайы әңгіме жүргізіңіз. Әрқашан алдымен жақсы ниетті болжаңыз — қашықтағы жұмыста адамдар көрінбейтін қиындықтарға тап болады.",
            hint: "Lead with empathy before accountability — you cannot see what is happening on their end.",
            hintRu: "Начните с эмпатии, а не подотчётности — вы не видите, что происходит на их стороне.",
            hintKk: "Есеп берушілік алдында эмпатиядан бастаңыз — олардың жағында не болып жатқанын көрмейсіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are leading a remote team across three time zones (GMT+5, GMT+1, and GMT-5) for a 6-week international school project. Design a complete communication and collaboration plan that respects everyone's schedule and ensures no one feels excluded.",
            questionRu: "Вы руководите удалённой командой в трёх часовых поясах (GMT+5, GMT+1, GMT-5) для 6-недельного международного школьного проекта. Разработайте полный план коммуникации и сотрудничества, уважающий расписание каждого.",
            questionKk: "6 апталық халықаралық мектеп жобасы үшін үш уақыт аймағында (GMT+5, GMT+1, GMT-5) қашықтағы команданы басқарып жатырсыз. Барлығының кестесін құрметтейтін және ешкім өзін шеттетілген сезінбейтін толық қарым-қатынас және ынтымақтастық жоспарын жасаңыз.",
            answer: "Overlap analysis: GMT+5 (4pm) = GMT+1 (12pm) = GMT-5 (7am). Use 12-1pm GMT+1 as the weekly sync window. Sync communication: One 45-min weekly video meeting in the overlap window, rotating the day so no one always sacrifices the same time. Async communication: Shared Notion workspace where all decisions are documented. Daily async standup in a group chat — each person posts their update within their morning. Rotating 'scribe' role records meeting notes for anyone who misses a meeting. Social connection: Monthly virtual hangout (game, show-and-tell from each city). Each person pairs with someone from a different timezone for a weekly 15-min buddy call. Fairness: Alternate who has to be on early/late calls. All critical deadlines posted in all three local times. Emergency protocol: direct message plus a backup contact for urgent issues.",
            answerRu: "Анализ пересечения: GMT+5 (16:00) = GMT+1 (12:00) = GMT-5 (7:00). Используйте окно 12:00-13:00 по GMT+1 как еженедельное окно синхронизации. Синхронная коммуникация: одна 45-минутная еженедельная видеовстреча в окне пересечения, чередование дня, чтобы никто постоянно не жертвовал одним временем. Асинхронная коммуникация: общее рабочее пространство Notion, где документируются все решения. Ежедневный асинхронный стендап в групповом чате — каждый публикует обновление в своё утро. Ротационная роль «секретаря» записывает протоколы для тех, кто пропустил встречу. Социальная связь: ежемесячная виртуальная встреча (игра, презентация каждого города). Каждый в паре с кем-то из другого часового пояса для еженедельного 15-минутного звонка. Справедливость: чередуйте, кто должен участвовать в ранних/поздних звонках. Все критические сроки публикуются во всех трёх местных временах. Протокол экстренных ситуаций: прямое сообщение плюс резервный контакт для срочных вопросов.",
            answerKk: "Қабаттасу талдауы: GMT+5 (16:00) = GMT+1 (12:00) = GMT-5 (7:00). Апталық синхрондау терезесі ретінде GMT+1 бойынша 12:00-13:00 қолданыңыз. Синхронды қарым-қатынас: қабаттасу терезесінде бір 45 минуттық апталық бейне кездесу, күнді ауыстырып отыру, сонда бір адам үнемі құрбан болмайды. Асинхронды қарым-қатынас: барлық шешімдер құжатталатын ортақ Notion жұмыс кеңістігі. Топтық чатта күнделікті асинхронды стендап — әрқайсысы өз таңында жаңартуын жариялайды. Кездесуді өткізіп алғандарға арналған кезектесетін «хатшы» рөлі кездесу жазбаларын жазады. Әлеуметтік байланыс: ай сайынғы виртуалды кездесу (ойын, әр қаладан презентация). Әрқайсысы басқа уақыт аймағынан біреумен апталық 15 минуттық серіктес қоңырауы үшін жұптасады. Әділдік: ерте/кеш қоңырауларға кім қатысатынын ауыстырыңыз. Барлық маңызды мерзімдер үш жергілікті уақытта да жарияланады. Төтенше жағдай хаттамасы: шұғыл мәселелер үшін тікелей хабарлама плюс резервтік байланыс.",
            hint: "Find the overlap window, build async-first culture, and rotate any inconvenience so the same people are not always sacrificing.",
            hintRu: "Найдите окно перекрытия, создайте асинхронную культуру и чередуйте неудобства, чтобы одни и те же люди не жертвовали постоянно.",
            hintKk: "Қабаттасу терезесін табыңыз, асинхронды мәдениет құрыңыз және кез келген ыңғайсыздықты ауыстырыңыз, яғни бір адамдар үнемі құрбан болмасын.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Communication & Leadership_12": {
    planetName: "Communication & Leadership",
    introduction: {
      en: "Master strategic communication and organizational leadership at the highest level. Learn to manage change, handle media, present to boards, build thought leadership, mentor others, lead globally, and create a communication portfolio that showcases your growth.",
      ru: "Освойте стратегическую коммуникацию и организационное лидерство на высшем уровне. Научитесь управлять изменениями, работать с медиа, выступать перед правлениями, развивать экспертное лидерство, менторить других и руководить глобально."
    },
    sections: [
      {
        title: "Strategic Communication",
        titleRu: "Стратегическая коммуникация",
        titleKk: "Стратегиялық қарым-қатынас",
        content: "Strategic communication aligns all messaging with long-term goals and organizational mission. Unlike everyday communication, it considers timing, audience segmentation, channel selection, and desired outcomes before crafting any message. Leaders who communicate strategically ensure every email, speech, and social post reinforces the same vision.",
        contentRu: "Стратегическая коммуникация выравнивает все сообщения с долгосрочными целями и миссией организации. В отличие от повседневного общения, она учитывает время, сегментацию аудитории, выбор канала и желаемые результаты. Стратегические лидеры обеспечивают единство видения во всех каналах.",
        contentKk: "Стратегиялық қарым-қатынас барлық хабарламаларды ұзақ мерзімді мақсаттар мен ұйым миссиясымен сәйкестендіреді. Күнделікті қарым-қатынастан айырмашылығы, ол кез келген хабарды жасау алдында уақытты, аудиторияны сегменттеуді, арна таңдауды және қалаған нәтижелерді ескереді. Стратегиялық көшбасшылар әр хат, сөз және жазбаның бір көзқарасты нығайтуын қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "SCOPE: Stakeholders → Channel → Objective → Positioning → Evaluation",
            formulaRu: "SCOPE: Заинтересованные стороны → Канал → Цель → Позиционирование → Оценка",
            formulaKk: "SCOPE: Мүдделі тараптар → Арна → Мақсат → Позициялау → Бағалау",
            description: "Five-step strategic communication planning framework",
            descriptionRu: "Пятишаговая модель планирования стратегической коммуникации",
            descriptionKk: "Стратегиялық қарым-қатынасты жоспарлаудың бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your student organization is launching a tutoring program. Use the SCOPE framework to create a strategic communication plan for the launch.",
            questionRu: "Ваша студенческая организация запускает программу репетиторства. Используйте модель SCOPE для создания стратегического плана коммуникации.",
            questionKk: "Студенттік ұйымыңыз репетиторлық бағдарламасын іске қосуда. Іске қосу үшін стратегиялық қарым-қатынас жоспарын жасау үшін SCOPE моделін қолданыңыз.",
            steps: [
              { en: "Stakeholders: Students needing help (primary), parents (secondary), teachers (allies), school administration (approvers). Channel: Instagram for students, email newsletter for parents, faculty meeting presentation for teachers.", ru: "Стейкхолдеры: студенты (первичные), родители (вторичные), учителя (союзники), администрация (утверждающие). Каналы: Instagram для студентов, email-рассылка для родителей, презентация на педсовете.", kk: "Мүдделі тараптар: көмек қажет оқушылар (бастапқы), ата-аналар (қосымша), мұғалімдер (одақтастар), мектеп әкімшілігі (бекітушілер). Арна: оқушыларға Instagram, ата-аналарға email бюллетені, мұғалімдерге педсовет ұсынысы." },
              { en: "Objective: 50 student sign-ups in the first month. Positioning: 'Free peer tutoring by top students — because everyone deserves to succeed.' Evaluation: Track sign-ups weekly, survey satisfaction monthly, adjust messaging based on which channels drive the most registrations.", ru: "Цель: 50 регистраций в первый месяц. Позиционирование: «Бесплатное репетиторство от лучших учеников — потому что каждый заслуживает успеха.» Оценка: еженедельный подсчёт регистраций, ежемесячный опрос, корректировка по каналам.", kk: "Мақсат: бірінші айда 50 оқушы тіркелуі. Позициялау: «Үздік оқушылардан тегін тьюторлық — әркім табысқа лайық.» Бағалау: апта сайын тіркелулерді қадағалау, ай сайын қанағаттануды сауалнамалау, қай арналар көбірек тіркеу әкелетініне қарай хабарламаны реттеу." }
            ],
            answer: "SCOPE ensures your launch reaches the right people, through the right channels, with the right message — maximizing impact with limited resources.",
            answerRu: "SCOPE гарантирует, что ваш запуск достигнет нужных людей, через нужные каналы, с нужным сообщением — максимизируя эффект при ограниченных ресурсах.",
            answerKk: "SCOPE іске қосуыңыздың дұрыс адамдарға, дұрыс арналар арқылы, дұрыс хабарламамен жетуін қамтамасыз етеді — шектеулі ресурстармен әсерді барынша арттырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you identify stakeholders before crafting a message?",
            questionRu: "Почему нужно определить стейкхолдеров до составления сообщения?",
            questionKk: "Хабарлама жасау алдында мүдделі тараптарды неге анықтау керек?",
            answer: "Different stakeholders have different concerns, priorities, and preferred communication channels. A message that resonates with students may not work for parents or administrators. Identifying stakeholders first lets you tailor each message for maximum relevance and impact.",
            answerRu: "У разных стейкхолдеров разные заботы, приоритеты и предпочитаемые каналы коммуникации. Сообщение, которое находит отклик у студентов, может не сработать для родителей или администраторов. Определение стейкхолдеров сначала позволяет адаптировать каждое сообщение для максимальной релевантности и эффекта.",
            answerKk: "Әр түрлі мүдделі тараптардың алаңдаушылықтары, басымдықтары және таңдаулы қарым-қатынас арналары әр түрлі. Оқушыларда қызығушылық тудыратын хабарлама ата-аналар немесе әкімшілер үшін жұмыс істемеуі мүмкін. Алдымен мүдделі тараптарды анықтау әр хабарламаны максималды өзектілік пен әсер үшін бейімдеуге мүмкіндік береді.",
            hint: "Think about how the same news would need different framing for different audiences.",
            hintRu: "Подумайте, как одна и та же новость требует разного обрамления для разных аудиторий.",
            hintKk: "Бір жаңалық әр түрлі аудиторияларға қалай әр түрлі контексттелу керектігін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Your school is introducing a new dress code. As student council communications director, create a SCOPE plan for announcing this to the student body.",
            questionRu: "Школа вводит новый дресс-код. Как директор по коммуникациям ученического совета, создайте план SCOPE для объявления студентам.",
            questionKk: "Мектеп жаңа дресс-код енгізуде. Оқушылар кеңесінің қарым-қатынас директоры ретінде оқушыларға хабарлау үшін SCOPE жоспарын жасаңыз.",
            answer: "Stakeholders: Students (most affected), parents (need to buy new clothes), teachers (enforcers). Channel: School assembly announcement + Instagram infographic + printed FAQ sheet. Objective: 90% student awareness within one week, minimize backlash. Positioning: Focus on what students gain (less morning stress, inclusive environment) not what they lose. Include student input — 'Your feedback shaped the final policy.' Evaluation: Monitor social media sentiment, track questions to FAQ, hold a follow-up Q&A session.",
            answerRu: "Стейкхолдеры: ученики (наиболее затронуты), родители (нужно покупать новую одежду), учителя (обеспечивают соблюдение). Канал: объявление на школьном собрании + инфографика в Instagram + печатный лист FAQ. Цель: 90% осведомлённости учеников за неделю, минимизация негатива. Позиционирование: фокус на том, что ученики получают (меньше утреннего стресса, инклюзивная среда), а не что теряют. Включить мнение учеников — «Ваш отзыв сформировал итоговую политику.» Оценка: мониторинг настроений в соцсетях, отслеживание вопросов в FAQ, проведение сессии вопросов и ответов.",
            answerKk: "Мүдделі тараптар: оқушылар (ең көп әсер етілгендер), ата-аналар (жаңа киім сатып алу керек), мұғалімдер (орындалуын қадағалаушылар). Арна: мектеп жиналысындағы хабарлама + Instagram инфографикасы + басып шығарылған FAQ парағы. Мақсат: бір апта ішінде оқушылардың 90% хабардар болуы, теріс реакцияны азайту. Позициялау: оқушылар не жоғалтатынына емес, не ұтатынына назар аудару (таңертеңгі стресстің азаюы, инклюзивті орта). Оқушы пікірін қосу — «Сіздің пікіріңіз соңғы саясатты қалыптастырды.» Бағалау: әлеуметтік желідегі көңіл-күйді бақылау, FAQ сұрақтарын қадағалау, кейінгі сұрақ-жауап сессиясын өткізу.",
            hint: "An unpopular policy requires extra strategic thinking — lead with benefits and inclusion of student voice.",
            hintRu: "Непопулярная политика требует стратегии — начните с преимуществ и учёта мнения учеников.",
            hintKk: "Танымал емес саясат қосымша стратегиялық ойлауды талап етеді — артықшылықтармен және оқушы пікірін қосумен бастаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a year-long strategic communication plan for a student-run charity that wants to grow from 20 to 200 active volunteers. Include quarterly objectives, channel strategy, key messages, and success metrics.",
            questionRu: "Разработайте годовой стратегический план коммуникаций для студенческой благотворительности, желающей вырасти с 20 до 200 активных волонтёров. Включите квартальные цели, стратегию каналов, ключевые сообщения и метрики успеха.",
            questionKk: "20 белсенді еріктіден 200-ге дейін өсуді қалайтын студенттік қайырымдылық ұйымы үшін жылдық стратегиялық қарым-қатынас жоспарын жасаңыз. Тоқсандық мақсаттарды, арна стратегиясын, негізгі хабарламаларды және табыс көрсеткіштерін қосыңыз.",
            answer: "Q1 (Awareness): Objective — reach 500 students. Channel: Instagram campaign with volunteer spotlight stories, school newsletter feature. Message: 'Real students, real impact — see what our volunteers achieved this year.' Metric: 500 Instagram impressions, 30 inquiries. Q2 (Recruitment): Objective — 80 new sign-ups. Channel: Recruitment fair booth, classroom presentations, referral program. Message: 'Join 50 students already making a difference — your skills matter.' Metric: 80 sign-ups, 50 attend first event. Q3 (Engagement): Objective — retain 70% of new volunteers. Channel: WhatsApp group for updates, monthly impact newsletter, social events. Message: 'Together we served 1,000 meals — here is what is next.' Metric: 70% retention, 3+ events per volunteer. Q4 (Growth): Objective — reach 200 active. Channel: Year-end impact report video, partner school outreach, alumni network. Message: 'From 20 to 200 — join the movement that is changing our community.' Metric: 200 active volunteers, 5 new school partnerships.",
            answerRu: "Q1 (Осведомлённость): Цель — охватить 500 учеников. Канал: кампания в Instagram с историями волонтёров, статья в школьной рассылке. Сообщение: «Реальные ученики, реальный эффект — узнайте, чего достигли наши волонтёры в этом году.» Метрика: 500 показов в Instagram, 30 обращений. Q2 (Набор): Цель — 80 новых регистраций. Канал: стенд на ярмарке вакансий, презентации в классах, реферальная программа. Сообщение: «Присоединяйся к 50 ученикам, уже меняющим мир — твои навыки важны.» Метрика: 80 регистраций, 50 на первом мероприятии. Q3 (Вовлечённость): Цель — удержать 70% новых волонтёров. Канал: WhatsApp-группа для обновлений, ежемесячная рассылка о влиянии, социальные мероприятия. Сообщение: «Вместе мы приготовили 1000 обедов — вот что дальше.» Метрика: 70% удержания, 3+ мероприятия на волонтёра. Q4 (Рост): Цель — достичь 200 активных. Канал: видео годового отчёта о влиянии, охват партнёрских школ, сеть выпускников. Сообщение: «От 20 до 200 — присоединяйся к движению, меняющему наше сообщество.» Метрика: 200 активных волонтёров, 5 новых школьных партнёрств.",
            answerKk: "Q1 (Хабардарлық): Мақсат — 500 оқушыға жету. Арна: еріктілер туралы әңгімелермен Instagram науқаны, мектеп бюллетеніндегі мақала. Хабарлама: «Нақты оқушылар, нақты әсер — еріктілеріміздің осы жылы не жеткізгенін көріңіз.» Көрсеткіш: 500 Instagram көрсетілімі, 30 сұрау. Q2 (Тарту): Мақсат — 80 жаңа тіркелу. Арна: жұмыс жәрмеңкесі стенді, сынып презентациялары, ұсыныс бағдарламасы. Хабарлама: «Өзгеріс жасап жатқан 50 оқушыға қосыл — сенің дағдыларың маңызды.» Көрсеткіш: 80 тіркелу, бірінші іс-шараға 50 адам. Q3 (Қатысу): Мақсат — жаңа еріктілердің 70%-ын ұстап қалу. Арна: жаңартулар үшін WhatsApp тобы, айлық әсер бюллетені, әлеуметтік іс-шаралар. Хабарлама: «Бірге 1000 тамақ дайындадық — келесісі не.» Көрсеткіш: 70% ұстап қалу, еріктіге 3+ іс-шара. Q4 (Өсу): Мақсат — 200 белсендіге жету. Арна: жыл соңы әсер туралы бейне есеп, серіктес мектептерге қолжетімділік, түлектер желісі. Хабарлама: «20-дан 200-ге — қоғамдастығымызды өзгертетін қозғалысқа қосыл.» Көрсеткіш: 200 белсенді еріктілер, 5 жаңа мектеп серіктестігі.",
            hint: "Build progressively — awareness before recruitment, recruitment before retention, retention before growth.",
            hintRu: "Стройте последовательно — осведомлённость перед набором, набор перед удержанием, удержание перед ростом.",
            hintKk: "Біртіндеп құрыңыз — тартудан бұрын хабардарлық, ұстаудан бұрын тарту, өсуден бұрын ұстау.",
            xp: 20
          }
        ]
      },
      {
        title: "Organizational Leadership",
        titleRu: "Организационное лидерство",
        titleKk: "Ұйымдастырушылық көшбасшылық",
        content: "Organizational leadership is the ability to guide an entire group or institution toward its mission through vision, structure, and culture. It goes beyond managing tasks to shaping how people work together, make decisions, and grow. Strong organizational leaders build systems that work even when they are not in the room.",
        contentRu: "Организационное лидерство — способность направлять группу или учреждение к миссии через видение, структуру и культуру. Оно выходит за рамки управления задачами, формируя способы совместной работы, принятия решений и роста людей. Сильные организационные лидеры строят системы, работающие даже в их отсутствие.",
        contentKk: "Ұйымдастырушылық көшбасшылық — көзқарас, құрылым және мәдениет арқылы бүкіл топты немесе мекемені миссиясына бағыттау қабілеті. Ол тапсырмаларды басқарудан асып, адамдардың бірге жұмыс істеу, шешім қабылдау және өсу тәсілдерін қалыптастырады. Күшті ұйымдық көшбасшылар олар болмаған кезде де жұмыс істейтін жүйелер құрады.",
        keyFormulas: [
          {
            formula: "VISION: Values → Inspire → Structure → Iterate → Own the culture",
            formulaRu: "VISION: Ценности → Вдохновляй → Структура → Итерации → Владей культурой",
            formulaKk: "VISION: Құндылықтар → Шабыттандыр → Құрылым → Қайталап жетілдіру → Мәдениетке ие бол",
            description: "Five-step organizational leadership framework",
            descriptionRu: "Пятишаговая модель организационного лидерства",
            descriptionKk: "Ұйымдастырушылық көшбасшылықтың бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are elected president of a struggling student club with declining membership. Use the VISION framework to revitalize it.",
            questionRu: "Вас избрали президентом клуба с падающим членством. Используйте модель VISION для его возрождения.",
            questionKk: "Мүшелігі азайып жатқан студенттік клубтың президенті болып сайландыңыз. Оны жандандыру үшін VISION моделін қолданыңыз.",
            steps: [
              { en: "Values: Survey existing members — what do they care about? What made them join? Inspire: Share a bold vision — 'This club will become the most impactful student organization in the school by the end of the year.' Structure: Create clear roles, a calendar of events, and onboarding for new members.", ru: "Ценности: опросите текущих членов — что им важно? Почему вступили? Вдохновить: смелое видение — «Клуб станет самой влиятельной организацией в школе к концу года.» Структура: чёткие роли, календарь событий, адаптация новых членов.", kk: "Құндылықтар: қазіргі мүшелерге сауалнама — оларға не маңызды? Неге қосылды? Шабыттандыру: батыл көзқарас — «Бұл клуб жыл соңына дейін мектептегі ең ықпалды студенттік ұйымға айналады.» Құрылым: нақты рөлдер, іс-шаралар күнтізбесі және жаңа мүшелерді бейімдеу." },
              { en: "Iterate: After each event, collect feedback and improve. Try new event formats, drop what does not work. Own the culture: Model the energy you want — be the first to volunteer, celebrate others' contributions, create traditions that members look forward to.", ru: "Итерировать: после каждого мероприятия собирайте обратную связь и улучшайте. Пробуйте новые форматы. Культура: моделируйте энергию — будьте первым волонтёром, празднуйте вклад других, создавайте традиции.", kk: "Қайталау: әр іс-шарадан кейін кері байланыс жинаңыз және жақсартыңыз. Жаңа форматтарды қолданып көріңіз. Мәдениетті иелену: қалаған энергияны модельдеңіз — бірінші ерікті болыңыз, басқалардың үлесін мерекелеңіз, мүшелер күтетін дәстүрлер жасаңыз." }
            ],
            answer: "VISION transforms a declining club by reconnecting with purpose, creating momentum through structure, and building a culture that attracts new members organically.",
            answerRu: "VISION преобразует угасающий клуб, воссоединяя его с целью, создавая импульс через структуру и строя культуру, которая органично привлекает новых членов.",
            answerKk: "VISION мақсатпен қайта байланыстыру, құрылым арқылы серпін жасау және жаңа мүшелерді табиғи түрде тартатын мәдениет құру арқылы құлдырап жатқан клубты өзгертеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between managing and leading an organization?",
            questionRu: "В чём разница между управлением и лидерством в организации?",
            questionKk: "Ұйымды басқару мен көшбасшылық ету арасындағы айырмашылық неде?",
            answer: "Managing focuses on tasks, processes, and efficiency — making sure things run smoothly today. Leading focuses on vision, culture, and growth — shaping where the organization goes tomorrow. The best organizational leaders do both.",
            answerRu: "Управление сосредоточено на задачах, процессах и эффективности — обеспечении бесперебойной работы сегодня. Лидерство сосредоточено на видении, культуре и росте — формировании того, куда организация пойдёт завтра. Лучшие организационные лидеры делают и то, и другое.",
            answerKk: "Басқару тапсырмаларға, процестерге және тиімділікке бағытталған — бүгін бәрінің тегіс жұмыс істеуін қамтамасыз ету. Көшбасшылық көзқарасқа, мәдениетке және өсуге бағытталған — ұйымның ертең қайда баратынын қалыптастыру. Ең жақсы ұйымдық көшбасшылар екеуін де жасайды.",
            hint: "One is about maintaining the present, the other is about creating the future.",
            hintRu: "Одно о поддержании настоящего, другое о создании будущего.",
            hintKk: "Бірі қазіргіні қолдау туралы, екіншісі болашақты жасау туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You notice your student organization makes decisions slowly because everyone waits for the president's approval. How do you fix this as an organizational leader?",
            questionRu: "Вы замечаете, что в вашей организации решения принимаются медленно, потому что все ждут одобрения президента. Как исправить это?",
            questionKk: "Студенттік ұйымыңызда шешімдер баяу қабылданатынын байқадыңыз, себебі бәрі президенттің мақұлдауын күтеді. Мұны ұйымдық көшбасшы ретінде қалай түзетесіз?",
            answer: "Create a decision-making framework: Tier 1 decisions (budget under $50, routine events) — committee leads decide independently. Tier 2 (budget $50-200, new initiatives) — require committee vote. Tier 3 (budget over $200, policy changes) — full board vote. This empowers people to act quickly on small decisions while maintaining oversight for big ones. Train committee leads on the framework and trust them to execute.",
            answerRu: "Создайте систему принятия решений: Уровень 1 (бюджет менее $50, рутинные мероприятия) — руководители комитетов решают самостоятельно. Уровень 2 (бюджет $50-200, новые инициативы) — требуется голосование комитета. Уровень 3 (бюджет свыше $200, изменения политики) — голосование всего правления. Это даёт людям возможность быстро действовать по мелким решениям, сохраняя надзор за крупными. Обучите руководителей комитетов этой системе и доверьте им исполнение.",
            answerKk: "Шешім қабылдау жүйесін жасаңыз: 1-деңгей шешімдер (бюджет $50-ден аз, рутиналық іс-шаралар) — комитет жетекшілері дербес шешеді. 2-деңгей ($50-200 бюджет, жаңа бастамалар) — комитеттің дауыс беруі қажет. 3-деңгей ($200-ден жоғары бюджет, саясат өзгерістері) — толық басқарма дауысы. Бұл адамдарға кіші шешімдерде тез әрекет етуге мүмкіндік бере отырып, үлкендеріне бақылауды сақтайды. Комитет жетекшілерін осы жүйеге үйретіп, орындауға сеніп тапсырыңыз.",
            hint: "Distribute decision-making power based on impact level — not everything needs top approval.",
            hintRu: "Распределите полномочия по уровню влияния — не всё требует одобрения сверху.",
            hintKk: "Шешім қабылдау өкілеттігін әсер деңгейіне қарай бөліңіз — бәрі жоғарғы мақұлдауды қажет етпейді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are stepping down as student council president after two years. Design a leadership transition plan that ensures the organization thrives after you leave. Include knowledge transfer, successor development, and culture preservation.",
            questionRu: "Вы уходите с поста президента студенческого совета после двух лет. Разработайте план передачи лидерства, обеспечивающий процветание организации после вашего ухода.",
            questionKk: "Екі жылдан кейін оқушылар кеңесі президентінің қызметінен кетіп жатырсыз. Сіз кеткеннен кейін ұйымның гүлденуін қамтамасыз ететін көшбасшылық ауысу жоспарын жасаңыз.",
            answer: "Knowledge transfer: Create an 'Operations Manual' documenting all processes, contacts, annual calendar, budget templates, and lessons learned. Include a 'mistakes I made' section. Successor development: Identify 2-3 potential successors 6 months early. Shadow them in key meetings, delegate increasing responsibility, and give candid feedback. Let them lead full events before the transition. Culture preservation: Document the organization's values and traditions. Create a 'founding principles' document the next president inherits. Establish an advisory role where you are available for questions in the first 3 months. Transition timeline: Month 1-2: Successor shadows you. Month 3-4: Successor co-leads with you. Month 5-6: Successor leads, you advise. Final step: Public handoff ceremony that transfers credibility to the new leader.",
            answerRu: "Передача знаний: создайте «Операционное руководство», документирующее все процессы, контакты, годовой календарь, шаблоны бюджета и извлечённые уроки. Включите раздел «мои ошибки». Развитие преемника: определите 2-3 потенциальных преемника за 6 месяцев вперёд. Позвольте им наблюдать за ключевыми встречами, делегируйте возрастающую ответственность и давайте честную обратную связь. Дайте им возможность полностью возглавить мероприятия до передачи власти. Сохранение культуры: задокументируйте ценности и традиции организации. Создайте документ «основополагающие принципы», который унаследует следующий президент. Установите консультативную роль, при которой вы доступны для вопросов в первые 3 месяца. Хронология перехода: Месяц 1-2: преемник наблюдает за вами. Месяц 3-4: преемник руководит совместно с вами. Месяц 5-6: преемник руководит, вы консультируете. Финальный шаг: публичная церемония передачи, придающая авторитет новому лидеру.",
            answerKk: "Білім беру: барлық процестерді, байланыстарды, жылдық күнтізбені, бюджет үлгілерін және алынған сабақтарды құжаттайтын «Операциялық нұсқаулық» жасаңыз. «Мен жіберген қателер» бөлімін қосыңыз. Мұрагерді дамыту: 6 ай бұрын 2-3 ықтимал мұрагерді анықтаңыз. Оларды негізгі кездесулерде байқатыңыз, жауапкершілікті біртіндеп тапсырыңыз және шынайы кері байланыс беріңіз. Ауысу алдында оларға толық іс-шараларды басқаруға мүмкіндік беріңіз. Мәдениетті сақтау: ұйымның құндылықтары мен дәстүрлерін құжаттаңыз. Келесі президент мұраланатын «құрылтай принциптері» құжатын жасаңыз. Алғашқы 3 айда сұрақтар үшін қолжетімді болатын кеңесші рөлін орнатыңыз. Ауысу мерзімі: 1-2-ай: мұрагер сізді байқайды. 3-4-ай: мұрагер сізбен бірге басқарады. 5-6-ай: мұрагер басқарады, сіз кеңес бересіз. Соңғы қадам: жаңа көшбасшыға сенімділік беретін жария тапсыру рәсімі.",
            hint: "The best leaders build organizations that do not depend on them — design for your absence, not your presence.",
            hintRu: "Лучшие лидеры строят организации, которые не зависят от них — проектируйте для своего отсутствия.",
            hintKk: "Ең жақсы көшбасшылар оларға тәуелді емес ұйымдар құрады — болмауыңыз үшін жобалаңыз, болуыңыз үшін емес.",
            xp: 20
          }
        ]
      },
      {
        title: "Change Management",
        titleRu: "Управление изменениями",
        titleKk: "Өзгерістерді басқару",
        content: "Change management is the structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state. People naturally resist change, so effective change leaders communicate the why before the what, involve stakeholders early, and celebrate small wins along the way. Mastering change communication is essential because every organization you join will undergo transformation.",
        contentRu: "Управление изменениями — структурированный подход к переводу людей, команд и организаций из текущего в желаемое состояние. Люди сопротивляются изменениям, поэтому эффективные лидеры объясняют «зачем» до «что», вовлекают стейкхолдеров рано и празднуют малые победы.",
        contentKk: "Өзгерістерді басқару — адамдарды, командаларды және ұйымдарды қазіргі күйден қалаған болашақ күйге ауыстырудың құрылымдалған тәсілі. Адамдар табиғи түрде өзгеріске қарсылық көрсетеді, сондықтан тиімді көшбасшылар нені алдында неге түсіндіреді, мүдделі тараптарды ерте тартады және жолда кіші жеңістерді мерекелейді.",
        keyFormulas: [
          {
            formula: "SHIFT: Story of why → Hear concerns → Involve early → First wins → Track and adjust",
            formulaRu: "SHIFT: История «почему» → Выслушай опасения → Вовлекай заранее → Первые победы → Отслеживай и корректируй",
            formulaKk: "SHIFT: «Неге» тарихы → Алаңдаушылықты тыңда → Ерте тарт → Алғашқы жетістіктер → Бақыла және түзет",
            description: "Five-step change management communication framework",
            descriptionRu: "Пятишаговая модель коммуникации при управлении изменениями",
            descriptionKk: "Өзгерістерді басқару қарым-қатынасының бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your school is switching from paper-based to digital homework submission. Many teachers and students are resistant. Use the SHIFT framework to manage this change.",
            questionRu: "Школа переходит с бумажных на цифровые домашние задания. Многие сопротивляются. Используйте модель SHIFT для управления изменением.",
            questionKk: "Мектебіңіз қағаз негізіндегі үй тапсырмасынан цифрлық тапсыруға ауысуда. Көп мұғалімдер мен оқушылар қарсылық көрсетуде. Бұл өзгерісті басқару үшін SHIFT моделін қолданыңыз.",
            steps: [
              { en: "Story of why: '30% of paper assignments are lost or damaged each year. Digital submission means no lost work, instant feedback, and access from any device.' Hear concerns: Host open Q&A sessions — teachers worry about tech issues, students worry about access to devices.", ru: "История зачем: «30% бумажных заданий теряются каждый год. Цифровая сдача — ничего не потеряется, мгновенная обратная связь.» Услышать: сессии вопросов и ответов — учителя волнуются о технологиях, ученики — о доступе к устройствам.", kk: "Неге деген әңгіме: «Қағаз тапсырмалардың 30% жыл сайын жоғалады. Цифрлық тапсыру — жоғалған жұмыс жоқ, лезде кері байланыс.» Алаңдаушылықтарды тыңдау: ашық сұрақ-жауап сессиялары — мұғалімдер техникалық мәселелерге, оқушылар құрылғыларға қол жетімділікке алаңдайды." },
              { en: "Involve early: Create a pilot group of willing teachers and tech-savvy students to test and give feedback. First wins: Start with one simple subject, celebrate when the first month shows zero lost assignments. Track: Survey monthly, adjust based on real problems, expand gradually.", ru: "Вовлечь рано: пилотная группа из желающих учителей и продвинутых учеников. Первые победы: начните с одного предмета, отметьте, когда за месяц ничего не потеряется. Отслеживать: ежемесячный опрос, корректировка.", kk: "Ерте тарту: ынталы мұғалімдер мен технологиядан хабардар оқушылардың пилоттық тобын жасаңыз. Алғашқы жеңістер: бір қарапайым пәннен бастаңыз, бірінші айда нөл жоғалған тапсырма көрсеткенде мерекелеңіз. Қадағалау: ай сайын сауалнама жүргізіңіз, нақты мәселелерге негіздеп реттеңіз." }
            ],
            answer: "SHIFT overcomes resistance by leading with purpose, genuinely listening to concerns, and proving value through small wins before scaling.",
            answerRu: "SHIFT преодолевает сопротивление, начиная с цели, искренне выслушивая опасения и доказывая ценность через малые победы перед масштабированием.",
            answerKk: "SHIFT мақсаттан бастау, алаңдаушылықтарды шынымен тыңдау және масштабтау алдында кіші жеңістер арқылы құндылықты дәлелдеу арқылы қарсылықты жеңеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why do people resist change, even when the change is beneficial?",
            questionRu: "Почему люди сопротивляются изменениям, даже когда они полезны?",
            questionKk: "Адамдар өзгеріс пайдалы болса да, неге қарсылық көрсетеді?",
            answer: "People resist change because of fear of the unknown, comfort with current routines, loss of control, and distrust of the decision-makers. Even beneficial change requires effort to learn new systems and abandon familiar habits.",
            answerRu: "Люди сопротивляются изменениям из-за страха неизвестности, комфорта привычных рутин, потери контроля и недоверия к принимающим решения. Даже полезное изменение требует усилий для изучения новых систем и отказа от привычных привычек.",
            answerKk: "Адамдар белгісіздіктен қорқу, қазіргі рутинамен ыңғайлылық, бақылауды жоғалту және шешім қабылдаушыларға сенімсіздік себебінен өзгеріске қарсылық көрсетеді. Тіпті пайдалы өзгеріс те жаңа жүйелерді үйрену және таныс әдеттерден бас тарту үшін күш-жігерді талап етеді.",
            hint: "Think about a time you resisted a change that turned out to be good — what held you back?",
            hintRu: "Вспомните, когда вы сопротивлялись изменению, которое оказалось хорошим — что вас удерживало?",
            hintKk: "Жақсы болып шыққан өзгеріске қарсылық көрсеткен кезіңізді еске түсіріңіз — не тоқтатты?",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "As a team leader, you need to change your team's weekly meeting from Monday morning to Friday afternoon. Several members are unhappy. How do you manage this change?",
            questionRu: "Как руководитель команды, вы должны перенести еженедельное собрание с утра понедельника на пятницу после обеда. Несколько участников недовольны. Как управлять этим изменением?",
            questionKk: "Команда жетекшісі ретінде апталық жиналысты дүйсенбі таңынан жұма түсте өзгертуіңіз керек. Бірнеше мүше бақытсыз. Бұл өзгерісті қалай басқарасыз?",
            answer: "Story: 'Monday meetings start the week without everyone having updates from the weekend. Friday meetings let us plan next week when everything is fresh.' Hear: Ask each person privately why they object — maybe someone has a Friday conflict. Involve: 'For the next two weeks, let us try Friday and compare. If it is worse, we switch back.' First win: After week one, highlight how the Friday meeting was more productive. Track: Survey after the trial period and make a data-driven final decision.",
            answerRu: "История: «Собрания в понедельник начинают неделю без обновлений после выходных. Собрания в пятницу позволяют планировать следующую неделю, пока всё свежо.» Услышать: спросите каждого лично, почему они против — возможно, у кого-то конфликт по пятницам. Вовлечь: «Давайте попробуем пятницу следующие две недели и сравним. Если хуже — вернёмся.» Первая победа: после первой недели отметьте, насколько продуктивнее была пятничная встреча. Отслеживать: опрос после пробного периода и итоговое решение на основе данных.",
            answerKk: "Әңгіме: «Дүйсенбілік кездесулер демалыстан кейінгі жаңартулар болмай аптаны бастайды. Жұмалық кездесулер бәрі жаңа болғанда келесі аптаны жоспарлауға мүмкіндік береді.» Тыңдау: әрқайсысынан жеке неге қарсы екенін сұраңыз — мүмкін біреудің жұма күні басқа ісі бар. Тарту: «Келесі екі аптада жұманы қолданып көрейік және салыстырайық. Нашар болса, қайта ораламыз.» Алғашқы жеңіс: бірінші аптадан кейін жұмалық кездесудің қаншалықты өнімді болғанын атап өтіңіз. Қадағалау: сынақ кезеңінен кейін сауалнама және деректерге негізделген түпкілікті шешім.",
            hint: "Even small changes benefit from the SHIFT approach — explain why, listen, test before committing.",
            hintRu: "Даже маленькие изменения выигрывают от подхода SHIFT — объясните зачем, выслушайте, протестируйте.",
            hintKk: "Кішкентай өзгерістер де SHIFT тәсілінен пайда көреді — неге екенін түсіндіріңіз, тыңдаңыз, міндеттеме алдында тексеріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your school is merging two rival student clubs into one. There is significant resistance from both sides. Design a complete change management and communication plan using SHIFT that addresses cultural clashes, power dynamics, and identity preservation.",
            questionRu: "Школа объединяет два конкурирующих клуба в один. Обе стороны активно сопротивляются. Разработайте полный план управления изменениями по модели SHIFT, учитывающий культурные столкновения, динамику власти и сохранение идентичности.",
            questionKk: "Мектеп екі бәсекелес студенттік клубты бірге біріктіруде. Екі жақтан да елеулі қарсылық бар. Мәдени қақтығыстарды, билік динамикасын және сәйкестікті сақтауды қарастыратын SHIFT моделін қолданып толық өзгерістерді басқару жоспарын жасаңыз.",
            answer: "Story: 'Separately, each club has 15 members and limited resources. Together, we would have 30 members, double the budget, and enough people for projects neither club could do alone. This is not about losing identity — it is about becoming more powerful.' Hear: Hold separate listening sessions with each club first, then a joint session. Map specific fears: loss of traditions, leadership positions, club name. Involve: Form a joint transition committee with equal representation. Let them co-design the new club name, logo, and mission. Both former presidents become co-presidents for the first semester. First wins: Plan a joint event that showcases both clubs' strengths — success builds shared identity. Preserve identity: Keep signature traditions from both clubs in the annual calendar. Track: Monthly pulse surveys, open door for concerns, revisit structure after one semester. Cultural integration: Create a 'founding story' that honors both clubs' histories.",
            answerRu: "История: «По отдельности у каждого клуба 15 членов и ограниченные ресурсы. Вместе у нас будет 30 членов, двойной бюджет и достаточно людей для проектов, которые ни один клуб не мог сделать в одиночку. Это не о потере идентичности — это о том, чтобы стать сильнее.» Услышать: сначала проведите отдельные сессии выслушивания с каждым клубом, затем совместную. Определите конкретные страхи: потеря традиций, руководящих позиций, названия клуба. Вовлечь: сформируйте совместный переходный комитет с равным представительством. Дайте им совместно разработать новое название, логотип и миссию клуба. Оба бывших президента становятся сопрезидентами на первый семестр. Первые победы: спланируйте совместное мероприятие, демонстрирующее сильные стороны обоих клубов — успех строит общую идентичность. Сохранение идентичности: сохраните фирменные традиции обоих клубов в годовом календаре. Отслеживание: ежемесячные опросы настроений, открытая дверь для беспокойств, пересмотр структуры через семестр. Культурная интеграция: создайте «историю основания», которая чтит историю обоих клубов.",
            answerKk: "Әңгіме: «Жеке-жеке әр клубта 15 мүше және шектеулі ресурстар бар. Бірге болсақ, 30 мүшеміз, екі есе бюджетіміз болады және ешбір клуб жеке жасай алмайтын жобаларға жеткілікті адамымыз болады. Бұл сәйкестікті жоғалту емес — күштірек болу туралы.» Тыңдау: алдымен әр клубпен жеке тыңдау сессиясын, содан кейін бірлескен сессия өткізіңіз. Нақты қорқыныштарды анықтаңыз: дәстүрлерді, көшбасшылық лауазымдарды, клуб атын жоғалту. Тарту: тең өкілдігі бар бірлескен ауысу комитетін құрыңыз. Оларға жаңа клуб атын, логотипін және миссиясын бірлесіп жасауға мүмкіндік беріңіз. Екі бұрынғы президент бірінші семестрге бірлескен президент болады. Алғашқы жеңістер: екі клубтың да күшті жақтарын көрсететін бірлескен іс-шараны жоспарлаңыз — табыс ортақ сәйкестік құрады. Сәйкестікті сақтау: екі клубтың да ерекше дәстүрлерін жылдық күнтізбеде сақтаңыз. Қадағалау: айлық көңіл-күй сауалнамалары, алаңдаушылықтар үшін ашық есік, бір семестрден кейін құрылымды қайта қарау. Мәдени интеграция: екі клубтың да тарихын құрметтейтін «құрылу тарихын» жасаңыз.",
            hint: "Address identity and power concerns head-on — people need to see themselves in the future organization.",
            hintRu: "Решайте вопросы идентичности и власти напрямую — людям нужно видеть себя в будущей организации.",
            hintKk: "Сәйкестік пен билік мәселелерін тікелей шешіңіз — адамдар болашақ ұйымда өздерін көруі керек.",
            xp: 20
          }
        ]
      },
      {
        title: "Public Relations",
        titleRu: "Связи с общественностью",
        titleKk: "Қоғаммен байланыс",
        content: "Public relations is the strategic management of how an organization communicates with the public to build trust, manage reputation, and shape perception. It includes press releases, media outreach, event promotion, and crisis response. For student leaders, PR skills help you promote events, manage your organization's image, and handle public scrutiny.",
        contentRu: "Связи с общественностью — стратегическое управление коммуникацией организации с общественностью для построения доверия и формирования восприятия. Это включает пресс-релизы, работу с медиа, продвижение мероприятий и кризисное реагирование. Для студенческих лидеров PR помогает продвигать события и управлять репутацией.",
        contentKk: "Қоғаммен байланыс — сенім құру, беделді басқару және қабылдауды қалыптастыру үшін ұйымның қоғаммен қарым-қатынасын стратегиялық басқару. Ол баспасөз релиздерін, медиа жұмысын, іс-шараларды жарнамалауды және дағдарысқа жауап беруді қамтиды. Студенттік көшбасшылар үшін PR дағдылары іс-шараларды жарнамалауға және ұйым имиджін басқаруға көмектеседі.",
        keyFormulas: [
          {
            formula: "IMAGE: Identify audience → Message craft → Amplify through channels → Gauge reaction → Evolve strategy",
            formulaRu: "IMAGE: Определи аудиторию → Создай сообщение → Усиль через каналы → Оцени реакцию → Развивай стратегию",
            formulaKk: "IMAGE: Аудиторияны анықта → Хабарлама құра → Арналар арқылы күшейт → Реакцияны бағала → Стратегияны дамыт",
            description: "Five-step public relations management framework",
            descriptionRu: "Пятишаговая модель управления связями с общественностью",
            descriptionKk: "Қоғаммен байланысты басқарудың бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "Your school charity event raised $5,000 for local families. Use the IMAGE framework to create a PR plan that maximizes positive coverage.",
            questionRu: "Школьное благотворительное мероприятие собрало $5,000 для местных семей. Используйте модель IMAGE для создания PR-плана.",
            questionKk: "Мектеп қайырымдылық іс-шарасы жергілікті отбасылар үшін $5,000 жинады. Оң жағдайды барынша арттыратын PR жоспарын жасау үшін IMAGE моделін қолданыңыз.",
            steps: [
              { en: "Identify: Local newspaper, school website, parents' Facebook group, student Instagram. Message: 'Students raised $5,000 in one day — enough to provide winter coats for 100 families.' Include a human interest angle — a family who will benefit.", ru: "Определить: местная газета, сайт школы, Facebook родителей, Instagram учеников. Сообщение: «Ученики собрали $5,000 за один день — хватит на зимние куртки для 100 семей.» Включить историю конкретной семьи.", kk: "Анықтау: жергілікті газет, мектеп вебсайты, ата-аналардың Facebook тобы, оқушылар Instagram-ы. Хабарлама: «Оқушылар бір күнде $5,000 жинады — 100 отбасыға қысқы пальто жеткілікті.» Пайда көретін отбасының нақты әңгімесін қосыңыз." },
              { en: "Amplify: Send a press release to the local paper, post photos and a thank-you video on social media, tag sponsors and volunteers. Gauge: Monitor comments, shares, and media pickups. Evolve: If the story gets traction, pitch a follow-up about the coat distribution with family photos.", ru: "Усилить: пресс-релиз в газету, фото и видео в соцсетях, отметить спонсоров. Оценить: отслеживать комментарии, репосты, публикации. Развить: если история популярна, предложить продолжение о раздаче курток с фото семей.", kk: "Күшейту: баспасөз релизін газетке жіберіңіз, фото мен алғыс бейнесін әлеуметтік желілерде жариялаңыз, демеушілер мен еріктілерді белгілеңіз. Бағалау: пікірлерді, бөлісулерді және медиа жарияланымдарды бақылаңыз. Дамыту: әңгіме танымал болса, отбасылық фотолармен пальто таратуы туралы жалғасын ұсыныңыз." }
            ],
            answer: "IMAGE turns a single event into an ongoing positive narrative that builds your organization's reputation and attracts future supporters.",
            answerRu: "IMAGE превращает одно мероприятие в непрерывное позитивное повествование, которое строит репутацию организации и привлекает будущих сторонников.",
            answerKk: "IMAGE бір іс-шараны ұйымыңыздың беделін құратын және болашақ қолдаушыларды тартатын үздіксіз оң баяндауға айналдырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between advertising and public relations?",
            questionRu: "В чём разница между рекламой и связями с общественностью?",
            questionKk: "Жарнама мен қоғаммен байланыстың айырмашылығы неде?",
            answer: "Advertising is paid promotion where you control the exact message (buying an ad). Public relations is earned coverage where you pitch stories to media and they decide how to cover it. PR is often more credible because it comes from an independent source, not a paid placement.",
            answerRu: "Реклама — это платное продвижение, где вы контролируете точное сообщение (покупка рекламы). Связи с общественностью — это заработанное освещение, где вы предлагаете истории медиа, а они решают, как их подать. PR часто более достоверен, потому что исходит из независимого источника, а не платного размещения.",
            answerKk: "Жарнама — сіз дәл хабарламаны бақылайтын ақылы жылжыту (жарнама сатып алу). Қоғаммен байланыс — сіз БАҚ-қа оқиғаларды ұсынатын, ал олар қалай жариялауды өздері шешетін еңбекпен табылған жариялану. PR көбінесе сенімдірек, себебі ол тәуелсіз көзден келеді, ақылы орналастыру емес.",
            hint: "Think about who controls the message — you or the media outlet.",
            hintRu: "Подумайте, кто контролирует сообщение — вы или СМИ.",
            hintKk: "Хабарламаны кім бақылайтынын ойлаңыз — сіз бе, әлде БАҚ ба.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A local newspaper incorrectly reports that your school club was involved in a vandalism incident. Write a response that corrects the record without being confrontational.",
            questionRu: "Местная газета ошибочно сообщает, что ваш клуб причастен к вандализму. Напишите ответ, исправляющий ситуацию, без конфронтации.",
            questionKk: "Жергілікті газет мектеп клубыңыздың бұзақылық оқиғасына қатысы бар деп қате хабарлады. Қарсыласпай, жазбаны түзететін жауап жазыңыз.",
            answer: "Dear Editor, We appreciate the newspaper's coverage of school events and want to respectfully clarify the report published on [date]. Our club, [name], was not involved in the incident described. At the time of the reported incident, our members were hosting a community service event at [location], which is documented with photos and attendance records. We would welcome the opportunity to share this information and request a correction. We value our positive relationship with the community and your publication. Respectfully, [Name, Title].",
            answerRu: "Уважаемый редактор, мы ценим освещение вашей газетой школьных событий и хотим уважительно уточнить сообщение, опубликованное [дата]. Наш клуб, [название], не был причастен к описанному инциденту. Во время указанного инцидента наши члены проводили мероприятие по общественной работе в [место], что задокументировано фотографиями и записями посещаемости. Мы будем рады возможности предоставить эту информацию и просим внести исправление. Мы ценим наши позитивные отношения с сообществом и вашим изданием. С уважением, [Имя, должность].",
            answerKk: "Құрметті редактор, газеттің мектеп оқиғаларын жариялауын бағалаймыз және [күні] жарияланған хабарды сыпайы түрде нақтылағымыз келеді. Біздің клуб, [атауы], сипатталған оқиғаға қатысы болған жоқ. Хабарланған оқиға уақытында біздің мүшелеріміз [орын] жерінде қоғамдық қызмет іс-шарасын өткізген, бұл фотосуреттер мен қатысу жазбаларымен құжатталған. Осы ақпаратты бөлісуге мүмкіндік алуды және түзету сұрауды қалаймыз. Біз қоғамдастықпен және басылымыңызбен оң қарым-қатынасымызды бағалаймыз. Құрметпен, [Аты, лауазымы].",
            hint: "Lead with appreciation, state facts calmly, offer evidence, and request a correction professionally.",
            hintRu: "Начните с благодарности, спокойно изложите факты, предложите доказательства и профессионально запросите исправление.",
            hintKk: "Алғыстан бастаңыз, фактілерді сабырлы баяндаңыз, дәлелдемелер ұсыныңыз және кәсіби түрде түзету сұраңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete PR campaign for a student-organized TEDx event at your school. Include pre-event, during-event, and post-event communication strategies across multiple channels, with specific tactics and a timeline.",
            questionRu: "Разработайте полную PR-кампанию для студенческого TEDx в школе. Включите стратегии до, во время и после мероприятия по нескольким каналам с конкретными тактиками и таймлайном.",
            questionKk: "Мектепте студенттер ұйымдастырған TEDx іс-шарасы үшін толық PR науқанын жасаңыз. Бірнеше арна бойынша іс-шараға дейінгі, кезіндегі және кейінгі қарым-қатынас стратегияларын нақты тактикалар мен уақыт кестесімен қосыңыз.",
            answer: "Pre-event (6 weeks): Week 1-2: Teaser campaign — 'Something big is coming' posts on Instagram. Week 3-4: Speaker announcements — one per day with their photo and topic. Week 5: Press release to local media, invitation to school board members. Week 6: Countdown posts, behind-the-scenes stories. During event: Live Instagram Stories and Twitter updates. Designated photographer and videographer. Live stream link shared across all channels. Post audience reactions and quotes from speakers in real-time. Post-event (2 weeks): Day 1: Thank-you post with group photo and attendance number. Day 2-3: Individual speaker highlight reels on social media. Week 1: Full event video posted to YouTube. Press release with key statistics and notable quotes sent to media. Week 2: Impact report shared with sponsors, school administration, and community partners. Collect testimonials for next year's sponsorship pitches.",
            answerRu: "До мероприятия (6 недель): Неделя 1-2: тизер-кампания — посты «Скоро что-то большое» в Instagram. Неделя 3-4: анонсы спикеров — по одному в день с фото и темой. Неделя 5: пресс-релиз в местные медиа, приглашение членов школьного совета. Неделя 6: посты обратного отсчёта, закулисные истории. Во время мероприятия: живые обновления в Instagram Stories и Twitter. Назначенный фотограф и видеооператор. Ссылка на прямую трансляцию во всех каналах. Публикация реакций аудитории и цитат спикеров в реальном времени. После мероприятия (2 недели): День 1: благодарственный пост с групповым фото и числом участников. День 2-3: индивидуальные хайлайты спикеров в соцсетях. Неделя 1: полное видео мероприятия на YouTube. Пресс-релиз с ключевой статистикой и заметными цитатами отправлен в медиа. Неделя 2: отчёт о влиянии, переданный спонсорам, администрации школы и партнёрам сообщества. Сбор отзывов для питчей спонсорства следующего года.",
            answerKk: "Іс-шараға дейін (6 апта): 1-2 апта: тизер науқаны — Instagram-да «Үлкен нәрсе келе жатыр» жазбалары. 3-4 апта: спикер хабарламалары — күніне біреуден, фотосы мен тақырыбымен. 5-апта: жергілікті медиаға баспасөз релизі, мектеп кеңесі мүшелерін шақыру. 6-апта: кері санақ жазбалары, сахна артындағы оқиғалар. Іс-шара кезінде: Instagram Stories мен Twitter-де тікелей жаңартулар. Тағайындалған фотограф пен видеооператор. Барлық арналарда тікелей трансляция сілтемесі. Аудитория реакциялары мен спикер дәйексөздерін нақты уақытта жариялау. Іс-шарадан кейін (2 апта): 1-күн: топтық фото және қатысушылар санымен алғыс жазбасы. 2-3-күн: әлеуметтік желілерде жеке спикер хайлайттары. 1-апта: толық іс-шара бейнесі YouTube-қа жүктелді. Негізгі статистика мен көрнекті дәйексөздермен баспасөз релизі медиаға жіберілді. 2-апта: демеушілерге, мектеп әкімшілігіне және қоғамдастық серіктестеріне әсер туралы есеп берілді. Келесі жылғы демеушілік ұсыныстары үшін пікірлер жиналды.",
            hint: "Build anticipation before, capture moments during, and extend the story after — PR is about the narrative arc, not just the event day.",
            hintRu: "Создайте ожидание до, запечатлейте моменты во время и продлите историю после — PR о дуге повествования, а не только о дне мероприятия.",
            hintKk: "Алдында күтуді арттырыңыз, кезінде сәттерді түсіріңіз және кейін әңгімені ұзартыңыз — PR тек іс-шара күні емес, баяндау доғасы туралы.",
            xp: 20
          }
        ]
      },
      {
        title: "Media Training",
        titleRu: "Медиатренинг",
        titleKk: "Медиа дайындық",
        content: "Media training prepares you to handle interviews, press conferences, and public statements with clarity and confidence. It teaches you to stay on message, bridge from difficult questions to your key points, and avoid common traps. Whether talking to a school newspaper or a national outlet, media-trained communicators control their narrative.",
        contentRu: "Медиатренинг готовит вас к интервью, пресс-конференциям и публичным заявлениям с ясностью и уверенностью. Он учит оставаться на своём послании, переводить трудные вопросы к ключевым тезисам и избегать ловушек. Подготовленные к медиа коммуникаторы контролируют свой нарратив.",
        contentKk: "Медиа дайындық сізді сұхбаттарға, баспасөз конференцияларына және қоғамдық мәлімдемелерге анықтық пен сенімділікпен дайындайды. Ол хабарламада қалуға, қиын сұрақтардан негізгі тармақтарға көпір жасауға және жиі кездесетін тұзақтардан аулақ болуға үйретеді. Медиаға дайын коммуникаторлар өз баяндамасын бақылайды.",
        keyFormulas: [
          {
            formula: "BRIDGE: Brief answer → Redirect → Illustrate with key message → Deliver soundbite → Guide back to agenda",
            formulaRu: "BRIDGE: Краткий ответ → Перенаправь → Проиллюстрируй ключевым сообщением → Дай яркую фразу → Верни к повестке",
            formulaKk: "BRIDGE: Қысқа жауап → Бағытты өзгерт → Негізгі хабарламамен көрсет → Жарқын сөйлем айт → Күн тәртібіне қайтар",
            description: "Five-step media interview response framework",
            descriptionRu: "Пятишаговая модель ответов в медиа-интервью",
            descriptionKk: "Медиа сұхбат жауабының бес қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "A reporter asks your student organization: 'Is it true that only wealthy students benefit from your tutoring program?' This is a leading question. Use the BRIDGE technique to respond.",
            questionRu: "Журналист спрашивает: «Правда ли, что от вашей программы репетиторства выигрывают только богатые студенты?» Это наводящий вопрос. Используйте BRIDGE.",
            questionKk: "Тілші студенттік ұйымыңыздан сұрайды: «Сіздің репетиторлық бағдарламаңыздан тек бай студенттер пайда көреді деген рас па?» Бұл жетектеуші сұрақ. BRIDGE техникасын қолданып жауап беріңіз.",
            steps: [
              { en: "Brief answer: 'Actually, the opposite is true.' Redirect: 'Let me share what we have actually seen...' Illustrate: '75% of our students come from families earning below the median income. We specifically recruit in underserved neighborhoods.'", ru: "Краткий ответ: «На самом деле, всё наоборот.» Перенаправление: «Позвольте рассказать, что мы видим на практике...» Пример: «75% наших учеников из семей с доходом ниже среднего. Мы целенаправленно набираем в необеспеченных районах.»", kk: "Қысқа жауап: «Шын мәнінде, керісінше.» Қайта бағыттау: «Біз шынымен не көргенімізді айтайын...» Иллюстрация: «Оқушыларымыздың 75% орташа табыстан төмен отбасылардан. Біз арнайы қамтылмаған аудандарда жалдаймыз.»" },
              { en: "Soundbite: 'Our mission is education equity — free tutoring for every student who needs it, regardless of family income.' Guide back: 'And that is exactly why we are expanding to three new schools next semester.'", ru: "Звуковой фрагмент: «Наша миссия — равенство в образовании: бесплатное репетиторство для каждого, кто нуждается.» Возврат: «Именно поэтому мы расширяемся на три новые школы в следующем семестре.»", kk: "Дыбыстық үзінді: «Біздің миссиямыз — білім теңдігі: қажет ететін әр оқушыға тегін репетиторлық.» Кері бағыттау: «Дәл сол себепті біз келесі семестрде үш жаңа мектепке кеңейіп жатырмыз.»" }
            ],
            answer: "BRIDGE lets you acknowledge a tough question without accepting its premise, then redirect to your strongest message — controlling the narrative without being evasive.",
            answerRu: "BRIDGE позволяет признать трудный вопрос, не принимая его посылку, а затем перенаправить к вашему самому сильному сообщению — контролировать нарратив, не уклоняясь.",
            answerKk: "BRIDGE қиын сұрақты оның алғышартын қабылдамай мойындауға, содан кейін ең күшті хабарламаңызға қайта бағыттауға мүмкіндік береді — жалтармай баяндауды бақылау."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is it important to prepare key messages before a media interview?",
            questionRu: "Почему важно подготовить ключевые сообщения до медиа-интервью?",
            questionKk: "Медиа сұхбат алдында негізгі хабарламаларды дайындау неге маңызды?",
            answer: "Without key messages, you risk rambling, going off-topic, or saying something that gets taken out of context. Prepared key messages keep you focused, ensure your most important points are delivered, and give you an anchor when difficult questions arise.",
            answerRu: "Без ключевых сообщений вы рискуете говорить бессвязно, отклоняться от темы или сказать что-то, что вырвут из контекста. Подготовленные ключевые сообщения помогают оставаться сфокусированным, гарантируют донесение самых важных мыслей и дают опору при сложных вопросах.",
            answerKk: "Негізгі хабарламаларсыз сіз шашыраңқы сөйлеу, тақырыптан ауытқу немесе контекстен тыс алынатын нәрсе айту қаупіне барасыз. Дайындалған негізгі хабарламалар назарыңызды сақтауға, ең маңызды ойларыңыздың жеткізілуін қамтамасыз етуге және қиын сұрақтар туындағанда тірек беруге көмектеседі.",
            hint: "Think about what happens when someone speaks without a plan — they often say things they regret.",
            hintRu: "Подумайте, что происходит, когда кто-то говорит без плана — часто жалеет о сказанном.",
            hintKk: "Біреу жоспарсыз сөйлегенде не болатынын ойлаңыз — жиі айтқанына өкінеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A journalist asks you a hypothetical trap question: 'What would you do if you found out one of your club officers was stealing funds?' Use the BRIDGE technique to respond without speculating.",
            questionRu: "Журналист задаёт гипотетический вопрос-ловушку: «Что бы вы сделали, если бы узнали, что один из ваших руководителей крадёт средства?» Используйте BRIDGE, не спекулируя.",
            questionKk: "Тілші сізге гипотетикалық тұзақ сұрақ қояды: «Клуб офицерлеріңіздің бірі қаражатты ұрлап жатқанын білсеңіз не істер едіңіз?» Болжам жасамай BRIDGE техникасын қолданыңыз.",
            answer: "Brief: 'We have never had that issue, and I would rather focus on what we are actually doing.' Redirect: 'What I can tell you is that we have strong financial controls in place.' Illustrate: 'Every transaction requires two signatures, and our treasurer reports monthly to the full board with receipts.' Soundbite: 'Transparency is built into how we operate — not as a reaction, but as a founding principle.' Guide back: 'That is why our donors trust us with their contributions, and we just surpassed our annual fundraising goal.'",
            answerRu: "Кратко: «У нас никогда не было такой проблемы, и я предпочитаю сосредоточиться на том, что мы реально делаем.» Перенаправление: «Могу сказать, что у нас действуют строгие финансовые механизмы контроля.» Пример: «Каждая транзакция требует двух подписей, и наш казначей ежемесячно отчитывается перед всем правлением с квитанциями.» Звуковой фрагмент: «Прозрачность заложена в том, как мы работаем — не как реакция, а как основополагающий принцип.» Возврат: «Именно поэтому наши доноры доверяют нам свои взносы, и мы только что превысили годовую цель сбора средств.»",
            answerKk: "Қысқаша: «Бізде мұндай мәселе ешқашан болған емес, және мен нақты не істеп жатқанымызға назар аударғанды жөн көремін.» Қайта бағыттау: «Айта аламын, бізде күшті қаржылық бақылау механизмдері бар.» Иллюстрация: «Әр транзакция екі қолтаңбаны талап етеді, және қазынашымыз ай сайын түбіртектермен толық басқармаға есеп береді.» Дыбыстық үзінді: «Ашықтық біздің жұмыс істеу тәсілімізге енгізілген — реакция ретінде емес, құрылтай принципі ретінде.» Кері бағыттау: «Дәл сол себепті демеушілеріміз өз үлестерін бізге сеніп тапсырады, және біз жуырда жылдық қаражат жинау мақсатымыздан асып түстік.»",
            hint: "Never accept the premise of a hypothetical accusation — redirect to your actual systems and track record.",
            hintRu: "Никогда не принимайте посылку гипотетического обвинения — перенаправляйте к вашим системам и реальному опыту.",
            hintKk: "Гипотетикалық айыптаудың алғышартын ешқашан қабылдамаңыз — нақты жүйелеріңіз бен тәжірибеңізге қайта бағыттаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are spokesperson for a student-organized environmental protest. Prepare three key messages and demonstrate how you would BRIDGE from these hostile questions: (1) 'Are you not just skipping class?' (2) 'What makes students qualified to talk about policy?' (3) 'Is not this protest causing more pollution with all the signs and waste?'",
            questionRu: "Вы пресс-секретарь студенческого экологического протеста. Подготовьте три ключевых сообщения и покажите BRIDGE для враждебных вопросов: (1) «Вы просто прогуливаете уроки?» (2) «Что даёт студентам право говорить о политике?» (3) «Этот протест не создаёт больше мусора?»",
            questionKk: "Сіз студенттер ұйымдастырған экологиялық наразылықтың баспасөз хатшысысыз. Үш негізгі хабарламаны дайындаңыз және осы дұшпандық сұрақтардан BRIDGE қалай жасайтыныңызды көрсетіңіз: (1) «Сіз жай сабақ тастап жатқан жоқсыз ба?» (2) «Студенттерді саясат туралы сөйлеуге не біліктілік береді?» (3) «Бұл наразылық барлық плакаттар мен қалдықтармен көбірек ластау жасамайды ма?»",
            answer: "Key messages: KM1: 'Our generation inherits this planet — we have both the right and responsibility to speak up.' KM2: 'We are not just protesting — we have a concrete 5-point policy proposal backed by scientific research.' KM3: 'This movement represents 500 students who care about their community's future.' BRIDGE for Q1: 'This is education in action. We organized this during free period, and every participant has parental permission. (KM1) Our generation inherits this planet — civic engagement is part of our education.' Q2: 'Our proposal was reviewed by three environmental science professors. (KM2) We have a concrete 5-point plan backed by published research — we are happy to share it.' Q3: 'Great question — all our signs are made from recycled materials and we have a cleanup crew ready. (KM3) These 500 students care so much about the environment that they planned a zero-waste protest. That dedication is exactly why our voice matters.'",
            answerRu: "Ключевые сообщения: КС1: «Наше поколение наследует эту планету — у нас есть и право, и обязанность высказываться.» КС2: «Мы не просто протестуем — у нас есть конкретное предложение из 5 пунктов, подкреплённое научными исследованиями.» КС3: «Это движение представляет 500 учеников, которым небезразлично будущее их сообщества.» BRIDGE для В1: «Это образование в действии. Мы организовали это в свободный период, и у каждого участника есть разрешение родителей. (КС1) Наше поколение наследует эту планету — гражданская активность — часть нашего образования.» В2: «Наше предложение рассмотрели три профессора экологических наук. (КС2) У нас есть конкретный план из 5 пунктов, подкреплённый опубликованными исследованиями — мы рады им поделиться.» В3: «Отличный вопрос — все наши плакаты сделаны из переработанных материалов, и у нас готова команда уборки. (КС3) Эти 500 учеников настолько заботятся об окружающей среде, что спланировали протест без отходов. Эта преданность — именно то, почему наш голос важен.»",
            answerKk: "Негізгі хабарламалар: НХ1: «Біздің ұрпағымыз бұл планетаны мұралайды — бізде сөйлеуге де құқық, де жауапкершілік бар.» НХ2: «Біз тек наразылық білдіріп жатқан жоқпыз — ғылыми зерттеулермен қолдалатын нақты 5 тармақты саясат ұсынысымыз бар.» НХ3: «Бұл қозғалыс қоғамдастығының болашағына алаңдайтын 500 оқушыны білдіреді.» С1-ге BRIDGE: «Бұл — іс жүзіндегі білім. Біз мұны бос сабақ уақытында ұйымдастырдық, және әр қатысушыда ата-ана рұқсаты бар. (НХ1) Біздің ұрпағымыз бұл планетаны мұралайды — азаматтық белсенділік біздің біліміміздің бөлігі.» С2: «Ұсынысымызды үш экология ғылымы профессоры қарап шықты. (НХ2) Жарияланған зерттеулермен қолдалатын нақты 5 тармақты жоспарымыз бар — оны бөлісуге қуаныштымыз.» С3: «Тамаша сұрақ — барлық плакаттарымыз қайта өңделген материалдардан жасалған және тазалау тобымыз дайын. (НХ3) Бұл 500 оқушы қоршаған ортаға сонша алаңдайды, тіпті қалдықсыз наразылықты жоспарлады. Дәл сол берілгендік дауысымыздың неге маңызды екенін көрсетеді.»",
            hint: "Prepare key messages that address the underlying criticism, then practice bridging from any question back to those messages.",
            hintRu: "Подготовьте ключевые сообщения, отвечающие на скрытую критику, и практикуйте переход от любого вопроса к этим сообщениям.",
            hintKk: "Негізгі сынды қарастыратын негізгі хабарламаларды дайындаңыз, содан кейін кез келген сұрақтан сол хабарламаларға көпір жасауды жаттықтырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Board Presentations",
        titleRu: "Презентации для правления",
        titleKk: "Басқарма алдында ұсыну",
        content: "Board presentations require a different communication style than regular presentations — they are shorter, data-driven, and decision-focused. Board members are busy executives who want bottom-line impact, clear recommendations, and risk analysis. Learning to present to a board — whether a school board, nonprofit board, or advisory committee — demonstrates senior-level communication readiness.",
        contentRu: "Презентации для правления требуют иного стиля — они короче, основаны на данных и сфокусированы на решениях. Члены правления — занятые руководители, которым нужны итоги, чёткие рекомендации и анализ рисков. Умение выступать перед правлением демонстрирует готовность к руководящей коммуникации.",
        contentKk: "Басқарма ұсыныстары қалыпты ұсыныстардан өзгеше қарым-қатынас стилін талап етеді — олар қысқарақ, деректерге негізделген және шешімге бағытталған. Басқарма мүшелері нәтижені, нақты ұсыныстарды және тәуекел талдауын қалайтын бос емес басшылар. Басқарма алдында ұсыну дағдысы жоғары деңгейлі қарым-қатынасқа дайындығын көрсетеді.",
        keyFormulas: [
          {
            formula: "BRIEF: Bottom line first → Rationale → Impact data → Feasibility → Executive ask",
            formulaRu: "BRIEF: Сначала суть → Обоснование → Данные о влиянии → Реализуемость → Запрос к руководству",
            formulaKk: "BRIEF: Алдымен мәні → Негіздеме → Әсер деректері → Іске асырымдылық → Басшылыққа сұраныс",
            description: "Five-part board presentation structure",
            descriptionRu: "Пятичастная структура презентации для правления",
            descriptionKk: "Басқарма ұсынысының бес бөлімді құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "You need to present a proposal to your school board for a $10,000 technology upgrade. Use the BRIEF framework to structure your 5-minute presentation.",
            questionRu: "Вам нужно представить школьному правлению предложение о технологическом обновлении на $10,000. Используйте модель BRIEF для структуры 5-минутной презентации.",
            questionKk: "Мектеп басқармасына $10,000 технологиялық жаңарту ұсынысын ұсынуыңыз керек. 5 минуттық ұсынысыңызды құрылымдау үшін BRIEF моделін қолданыңыз.",
            steps: [
              { en: "Bottom line: 'I am requesting $10,000 to upgrade our computer lab, which will improve student performance and reduce maintenance costs by $3,000 annually.' Rationale: 'Our current computers are 7 years old, crash daily, and cannot run the software required for the new curriculum.'", ru: "Итог: «Запрашиваю $10,000 на обновление компьютерного класса, что повысит успеваемость и сэкономит $3,000 в год.» Обоснование: «Текущим компьютерам 7 лет, они ежедневно зависают и не поддерживают ПО новой программы.»", kk: "Түпкі нәтиже: «Оқушылардың үлгерімін жақсартатын және техникалық қызмет көрсету шығындарын жылына $3,000 азайтатын компьютер зертханасын жаңарту үшін $10,000 сұраймын.» Негіздеме: «Қазіргі компьютерлер 7 жаста, күн сайын бұзылады және жаңа оқу бағдарламасына қажет бағдарламалық жасақтаманы іске қоса алмайды.»" },
              { en: "Impact: '85% of teachers report tech failures disrupt at least one class per week. Upgraded labs at peer schools showed a 22% improvement in digital literacy scores.' Feasibility: 'Three vendors quoted, best value at $9,800 with 3-year warranty. Installation during winter break — zero class disruption.' Ask: 'I request board approval to proceed with the purchase by December 15.'", ru: "Влияние: «85% учителей сообщают о технических сбоях. Обновлённые классы улучшили цифровую грамотность на 22%.» Реализуемость: «Три поставщика, лучшее предложение $9,800 с 3-летней гарантией. Установка на каникулах.» Запрос: «Прошу одобрить закупку до 15 декабря.»", kk: "Әсер: «Мұғалімдердің 85% техникалық ақаулар аптасына кемінде бір сабақты бұзатынын хабарлайды. Әріптес мектептердегі жаңартылған зертханалар цифрлық сауаттылық ұпайларын 22% жақсартты.» Мүмкіндік: «Үш жеткізуші баға ұсынды, ең жақсы құны $9,800, 3 жылдық кепілдікпен. Қысқы каникул кезінде орнату — сабаққа кедергі нөл.» Сұрау: «15 желтоқсанға дейін сатып алуды мақұлдауды сұраймын.»" }
            ],
            answer: "BRIEF respects the board's time by leading with the conclusion, supporting with data, and ending with a specific, actionable request.",
            answerRu: "BRIEF уважает время правления, начиная с вывода, подкрепляя данными и завершая конкретным, выполнимым запросом.",
            answerKk: "BRIEF қорытындыдан бастап, деректермен қолдап және нақты, орындалатын сұраумен аяқтау арқылы басқарманың уақытын құрметтейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should board presentations lead with the bottom line rather than building up to it?",
            questionRu: "Почему презентации для правления должны начинаться с итога, а не подводить к нему?",
            questionKk: "Басқарма ұсыныстары неге итогтан бастауы керек, оған біртіндеп жетудің орнына?",
            answer: "Board members are busy decision-makers with limited time. Leading with the bottom line lets them immediately understand what you want and why. If they need more detail, they will ask. Building up wastes their time and risks losing their attention before you reach your point.",
            answerRu: "Члены правления — занятые лица, принимающие решения, с ограниченным временем. Начиная с итога, вы сразу даёте понять, чего хотите и почему. Если им нужны детали, они спросят. Постепенное подведение тратит их время и рискует потерять внимание до того, как вы дойдёте до сути.",
            answerKk: "Басқарма мүшелері уақыты шектеулі, бос емес шешім қабылдаушылар. Итогтан бастау оларға не қалайтыныңызды және неге екенін бірден түсінуге мүмкіндік береді. Толығырақ керек болса, олар сұрайды. Біртіндеп жеткізу уақытын жоғалтады және мәніне жеткенше назарын жоғалту қаупін тудырады.",
            hint: "Think about how a CEO reads a report vs. how a student reads a textbook.",
            hintRu: "Подумайте, как CEO читает отчёт по сравнению с тем, как студент читает учебник.",
            hintKk: "CEO есепті қалай оқитынын студенттің оқулықты қалай оқитынымен салыстырыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Convert this rambling request into a BRIEF board-ready statement: 'So, we have been thinking, and like, our cafeteria food is not great, and students are unhappy, and maybe we could look into getting a salad bar, because health is important, and other schools have them, so yeah, we think it would be cool.'",
            questionRu: "Преобразуйте этот бессвязный запрос в формат BRIEF: «Ну, мы подумали, и типа, еда в столовой не очень, и ученики недовольны, и может посмотреть на салатный бар, потому что здоровье важно, и в других школах есть, ну вот.»",
            questionKk: "Бұл шашыранды сұрауды BRIEF форматына айналдырыңыз: «Иә, біз ойладық, асханадағы тамақ жақсы емес, оқушылар бақытсыз, салат бары алуды қарауға болар, себебі денсаулық маңызды, басқа мектептерде бар, иә, жақсы болар еді.»",
            answer: "Bottom line: 'I propose installing a salad bar in the cafeteria for $2,500 to improve student nutrition and satisfaction.' Rationale: 'Our student survey shows 68% are dissatisfied with lunch options, and 45% skip lunch entirely.' Impact: 'Schools with salad bars report 30% higher lunch participation and improved afternoon academic performance.' Feasibility: '$2,500 one-time cost, $200 monthly for fresh produce, can be offset by reducing untouched hot food waste.' Ask: 'We request approval to pilot the salad bar for one semester starting January.'",
            answerRu: "Итог: «Предлагаю установить салатный бар в столовой за $2,500 для улучшения питания и удовлетворённости учеников.» Обоснование: «Наш опрос показывает, что 68% недовольны обедами, а 45% вообще пропускают обед.» Влияние: «Школы с салатными барами сообщают о 30% росте участия в обедах и улучшении успеваемости во второй половине дня.» Реализуемость: «$2,500 разово, $200 в месяц на свежие продукты, можно компенсировать снижением отходов нетронутой горячей еды.» Запрос: «Просим одобрить пилот салатного бара на один семестр с января.»",
            answerKk: "Итог: «Оқушылардың тамақтануы мен қанағаттануын жақсарту үшін асханада $2,500-ге салат бар орнатуды ұсынамын.» Негіздеме: «Оқушылар сауалнамасы 68%-ының түскі ас нұсқаларына наразы екенін, ал 45%-ының түскі асты мүлдем өткізіп жіберетінін көрсетеді.» Әсер: «Салат бары бар мектептер түскі асқа қатысу 30%-ға артқанын және түстен кейінгі үлгерімнің жақсарғанын хабарлайды.» Мүмкіндік: «$2,500 бір реттік шығын, ай сайын $200 таза өнімге, тимеген ыстық тамақ қалдығын азайту арқылы өтелуі мүмкін.» Сұрау: «Қаңтардан бастап бір семестрге салат барды сынақтан өткізуге мақұлдау сұраймыз.»",
            hint: "Extract the core request, add data, remove filler, and end with a specific ask.",
            hintRu: "Извлеките основной запрос, добавьте данные, удалите лишнее и завершите конкретной просьбой.",
            hintKk: "Негізгі сұрауды алыңыз, деректер қосыңыз, артығын алыңыз және нақты сұраумен аяқтаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Prepare a full BRIEF board presentation for proposing a new student exchange program with a school in South Korea. Include budget, timeline, risk analysis, and a clear executive ask. Anticipate and prepare answers for three tough board questions.",
            questionRu: "Подготовьте полную презентацию BRIEF для правления с предложением программы студенческого обмена с школой в Южной Корее. Включите бюджет, сроки, анализ рисков и запрос. Подготовьте ответы на три сложных вопроса.",
            questionKk: "Оңтүстік Кореядағы мектеппен жаңа студенттер алмасу бағдарламасын ұсыну үшін толық BRIEF басқарма ұсынысын дайындаңыз. Бюджетті, уақыт кестесін, тәуекел талдауын және нақты сұрауды қосыңыз. Үш қиын басқарма сұрағына жауаптар дайындаңыз.",
            answer: "Bottom line: 'I propose a 2-week student exchange with Seoul International School, sending 10 students in spring and hosting 10 in fall, for a total cost of $15,000 partially offset by participant fees.' Rationale: 'Our school lacks international exposure. 92% of parents surveyed support exchange programs, and universities increasingly value cross-cultural experience.' Impact: 'Partner schools report 40% higher college acceptance rates for exchange participants. Students gain language skills, cultural competence, and global perspective.' Feasibility: Timeline — spring approval, summer planning, fall pilot. Budget: $15,000 total ($8,000 travel, $4,000 hosting, $3,000 program coordination). Revenue: $500 participant fee x 10 = $5,000. Net cost: $10,000. Risks: Student safety (mitigated by partnership with established school, insurance, 24/7 chaperones), cultural adjustments (pre-departure training program), cost overruns (10% contingency built in). Ask: 'I request board approval of $10,000 and authorization to sign the partnership agreement by March 1.' Tough Q1: 'What if a student gets sick abroad?' A: 'Every student has international health insurance, and Seoul International has an on-campus nurse and hospital partnership.' Q2: 'Is $15,000 worth it for only 10 students?' A: 'The pilot proves the model. Year 2 scales to 20 students at a lower per-student cost, and exchange students also enrich our entire school.' Q3: 'How do you ensure academic continuity?' A: 'Students complete a pre-approved independent study project during the exchange, supervised by both schools, earning full credit.'",
            answerRu: "Итог: «Предлагаю 2-недельный студенческий обмен с Seoul International School — отправка 10 учеников весной и приём 10 осенью, общая стоимость $15,000, частично компенсируемая взносами участников.» Обоснование: «Нашей школе не хватает международного опыта. 92% опрошенных родителей поддерживают программы обмена, а вузы всё больше ценят межкультурный опыт.» Влияние: «Партнёрские школы сообщают о 40% более высоком уровне поступления в вузы для участников обмена. Ученики получают языковые навыки, культурную компетентность и глобальную перспективу.» Реализуемость: Сроки — одобрение весной, планирование летом, пилот осенью. Бюджет: всего $15,000 ($8,000 проезд, $4,000 приём, $3,000 координация программы). Доход: взнос участника $500 x 10 = $5,000. Чистая стоимость: $10,000. Риски: безопасность учеников (смягчается партнёрством с установленной школой, страховкой, сопровождающими 24/7), культурная адаптация (программа подготовки перед отъездом), перерасход средств (заложен резерв 10%). Запрос: «Прошу одобрения правления на $10,000 и разрешения подписать соглашение о партнёрстве до 1 марта.» Сложный В1: «Что если ученик заболеет за границей?» О: «У каждого ученика есть международная медицинская страховка, а в Seoul International есть штатная медсестра и партнёрство с больницей.» В2: «Стоят ли $15,000 всего для 10 учеников?» О: «Пилот доказывает модель. Год 2 масштабируется до 20 учеников с меньшей стоимостью на ученика, а ученики по обмену также обогащают всю нашу школу.» В3: «Как вы обеспечите непрерывность обучения?» О: «Ученики выполняют заранее утверждённый проект самостоятельного изучения во время обмена под руководством обеих школ, получая полный зачёт.»",
            answerKk: "Итог: «Seoul International School мектебімен 2 апталық студенттер алмасуын ұсынамын — көктемде 10 оқушы жіберу және күзде 10 оқушыны қабылдау, жалпы құны $15,000, қатысушылар жарнасымен ішінара өтеледі.» Негіздеме: «Мектебімізде халықаралық тәжірибе жетіспейді. Сауалнамаға қатысқан ата-аналардың 92%-ы алмасу бағдарламаларын қолдайды, ал университеттер мәдениетаралық тәжірибені барған сайын бағалайды.» Әсер: «Серіктес мектептер алмасуға қатысушылардың университетке түсу деңгейі 40%-ға жоғары екенін хабарлайды. Оқушылар тілдік дағдылар, мәдени құзыреттілік және жаһандық көзқарас алады.» Мүмкіндік: Мерзімдер — көктемде бекіту, жазда жоспарлау, күзде сынақ. Бюджет: барлығы $15,000 ($8,000 сапар, $4,000 қабылдау, $3,000 бағдарламаны үйлестіру). Кіріс: қатысушы жарнасы $500 x 10 = $5,000. Таза құны: $10,000. Тәуекелдер: оқушы қауіпсіздігі (белгіленген мектеппен серіктестікпен, сақтандырумен, 24/7 қадағалаушылармен жеңілдетілген), мәдени бейімделу (аттанар алдындағы дайындық бағдарламасы), шығынның артуы (10% резерв енгізілген). Сұрау: «$10,000 басқарма мақұлдауын және 1 наурызға дейін серіктестік келісіміне қол қою рұқсатын сұраймын.» Қиын С1: «Оқушы шетелде ауырса ше?» Ж: «Әр оқушыда халықаралық медициналық сақтандыру бар, ал Seoul International-да штаттық медбике мен ауруханамен серіктестік бар.» С2: «$15,000 тек 10 оқушыға тұрарлық па?» Ж: «Сынақ модельді дәлелдейді. 2-жыл оқушыға арзан құнмен 20 оқушыға дейін кеңейеді, әрі алмасу оқушылары бүкіл мектебімізді байытады.» С3: «Академиялық үздіксіздікті қалай қамтамасыз етесіз?» Ж: «Оқушылар алмасу кезінде екі мектептің де қадағалауымен алдын ала бекітілген дербес зерттеу жобасын орындап, толық кредит алады.»",
            hint: "Board members worry about money, risk, and scalability — address all three proactively.",
            hintRu: "Члены правления беспокоятся о деньгах, рисках и масштабируемости — упредите все три.",
            hintKk: "Басқарма мүшелері ақша, тәуекел және масштабтау туралы алаңдайды — үшеуін де алдын ала қарастырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Thought Leadership",
        titleRu: "Экспертное лидерство",
        titleKk: "Сараптамалық көшбасшылық",
        content: "Thought leadership is establishing yourself as a trusted authority in a specific field by consistently sharing valuable insights, original ideas, and informed perspectives. It goes beyond knowledge — it is about contributing to the conversation in your field and inspiring others to think differently. Even as a student, you can build thought leadership through writing, speaking, and creating content.",
        contentRu: "Экспертное лидерство — утверждение себя как авторитета в определённой области через последовательный обмен ценными идеями, оригинальными мыслями и обоснованными перспективами. Оно выходит за рамки знаний — это вклад в дискуссию в своей области. Даже студент может строить экспертное лидерство через публикации, выступления и контент.",
        contentKk: "Сараптамалық көшбасшылық — құнды түсініктерді, түпнұсқа идеяларды және негізделген көзқарастарды дәйекті түрде бөлісу арқылы белгілі бір салада сенімді маман ретінде орнықтыру. Ол білімнен тыс — бұл саладағы әңгімеге үлес қосу және басқаларды басқаша ойлауға шабыттандыру. Тіпті студент жазу, сөйлеу және контент жасау арқылы сараптамалық көшбасшылық құра алады.",
        keyFormulas: [
          {
            formula: "VOICE: Value-driven content → Original perspective → Insight sharing → Consistent output → Engage community",
            formulaRu: "VOICE: Ценностный контент → Оригинальный взгляд → Обмен инсайтами → Постоянство публикаций → Вовлечение сообщества",
            formulaKk: "VOICE: Құндылыққа негізделген контент → Өзіндік көзқарас → Түйсікпен бөлісу → Тұрақты жариялау → Қауымдастықты тарту",
            description: "Five pillars of thought leadership building",
            descriptionRu: "Пять столпов построения экспертного лидерства",
            descriptionKk: "Сараптамалық көшбасшылық құрудың бес тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "You are passionate about AI ethics and want to establish yourself as a student thought leader in this space. Use the VOICE framework to create a plan.",
            questionRu: "Вы увлечены этикой ИИ и хотите стать студенческим экспертным лидером. Используйте модель VOICE для создания плана.",
            questionKk: "Сіз AI этикасына құмарсыз және осы салада студенттік сараптамалық көшбасшы болғыңыз келеді. Жоспар жасау үшін VOICE моделін қолданыңыз.",
            steps: [
              { en: "Value-driven: Write about AI ethics topics that help others understand the real-world implications. Original: Do not just summarize — add your unique Central Asian perspective on how AI bias affects developing countries differently.", ru: "Ценность: пишите о темах этики ИИ, помогающих понять реальные последствия. Оригинальность: не просто резюмируйте — добавьте уникальную центральноазиатскую перспективу о том, как предвзятость ИИ по-разному влияет на развивающиеся страны.", kk: "Құндылық: басқаларға нақты салдарларды түсінуге көмектесетін AI этикасы тақырыптары туралы жазыңыз. Түпнұсқалық: жай қорытындыламаңыз — AI бейтарапсыздығы дамушы елдерге қалай әр түрлі әсер ететіні туралы бірегей Орталық Азия көзқарасын қосыңыз." },
              { en: "Insight: Share analyses of current AI news — 'Here is what this regulation means for students.' Consistent: Publish one article or post per week. Engage: Comment on others' work, join AI ethics forums, and attend virtual conferences.", ru: "Инсайт: делитесь анализом новостей ИИ — «Вот что это регулирование значит для студентов.» Последовательно: одна публикация в неделю. Вовлечение: комментируйте работы других, участвуйте в форумах по этике ИИ.", kk: "Түсінік: қазіргі AI жаңалықтарының талдауларын бөлісіңіз — «Бұл реттеу студенттер үшін нені білдіреді.» Дәйекті: аптасына бір мақала немесе жазба жариялаңыз. Қатысу: басқалардың жұмыстарына пікір жазыңыз, AI этикасы форумдарына қосылыңыз." }
            ],
            answer: "VOICE builds thought leadership gradually through consistent, valuable content that establishes you as someone worth listening to — even before you have a degree or title.",
            answerRu: "VOICE постепенно строит экспертное лидерство через последовательный, ценный контент, который утверждает вас как человека, которого стоит слушать — ещё до получения степени или должности.",
            answerKk: "VOICE дәрежеңіз немесе лауазымыңыз болмаса да, сізді тыңдауға тұрарлық адам ретінде орнықтыратын дәйекті, құнды мазмұн арқылы сараптамалық көшбасшылықты біртіндеп құрады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Can a high school student be a thought leader? Why or why not?",
            questionRu: "Может ли школьник быть экспертным лидером? Почему да или нет?",
            questionKk: "Мектеп оқушысы сараптамалық көшбасшы бола ала ма? Неге иә немесе жоқ?",
            answer: "Yes, because thought leadership is about the quality and originality of your ideas, not your age or title. A student who consistently shares valuable insights about a topic they deeply understand can build a following and influence the conversation, especially through social media and blogging.",
            answerRu: "Да, потому что экспертное лидерство — о качестве и оригинальности ваших идей, а не о возрасте или должности. Ученик, последовательно делящийся ценными мыслями по теме, которую глубоко понимает, может создать аудиторию и влиять на дискуссию, особенно через соцсети и блоги.",
            answerKk: "Иә, себебі сараптамалық көшбасшылық жасыңызға немесе лауазымыңызға емес, идеяларыңыздың сапасы мен түпнұсқалығына байланысты. Терең түсінетін тақырып туралы құнды түсініктерді дәйекті түрде бөлісетін оқушы, әсіресе әлеуметтік желілер мен блог арқылы, аудитория құрып, пікірталасқа әсер ете алады.",
            hint: "Think about young people who have influenced major conversations — Greta Thunberg, Malala Yousafzai.",
            hintRu: "Подумайте о молодых людях, повлиявших на важные дискуссии — Грета Тунберг, Малала Юсуфзай.",
            hintKk: "Маңызды пікірталастарға әсер еткен жастарды ойлаңыз — Грета Тунберг, Малала Юсуфзай.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write the outline for your first thought leadership article on a topic you care about. Include: a compelling title, three key points, and a unique angle that differentiates your perspective.",
            questionRu: "Напишите план первой экспертной статьи на тему, которая вас волнует. Включите: привлекательный заголовок, три ключевых пункта и уникальный ракурс.",
            questionKk: "Сізді алаңдататын тақырыпта алғашқы сараптамалық мақалаңыздың жоспарын жазыңыз. Тартымды тақырыпты, үш негізгі тармақты және көзқарасыңызды ерекшелейтін бірегей бұрышты қосыңыз.",
            answer: "Example — Title: 'Why Central Asian Students Are the Future of Global Tech — And Why No One Is Talking About It.' Unique angle: Most tech thought leadership comes from Silicon Valley or Asia-Pacific perspectives. Point 1: Central Asia's multilingual, multicultural background creates uniquely adaptable thinkers for global tech teams. Point 2: The region's rapidly growing tech education scene is producing talent that combines Eastern and Western problem-solving approaches. Point 3: Companies ignoring Central Asian talent pools are missing a competitive advantage in the race for global innovation.",
            answerRu: "Пример — Заголовок: «Почему студенты Центральной Азии — будущее мировых технологий, и почему об этом никто не говорит.» Уникальный ракурс: большая часть экспертного лидерства в технологиях исходит из Кремниевой долины или Азиатско-Тихоокеанского региона. Тезис 1: многоязычная, мультикультурная база Центральной Азии создаёт уникально адаптируемых мыслителей для глобальных техкоманд. Тезис 2: быстрорастущая сфера техобразования региона выпускает таланты, сочетающие восточные и западные подходы к решению проблем. Тезис 3: компании, игнорирующие таланты Центральной Азии, упускают конкурентное преимущество в гонке за глобальные инновации.",
            answerKk: "Мысал — Тақырып: «Орталық Азия студенттері неге жаһандық технологияның болашағы — және неге бұл туралы ешкім айтпайды.» Бірегей бұрыш: технология саласындағы сараптамалық көшбасшылықтың көбі Кремний алқабынан немесе Азия-Тынық мұхиты аймағынан келеді. Тезис 1: Орталық Азияның көптілді, көпмәдениетті тегі жаһандық технология командалары үшін бірегей бейімделгіш ойшылдар жасайды. Тезис 2: аймақтың тез өсіп жатқан технологиялық білім саласы шығыс пен батыс мәселе шешу тәсілдерін біріктіретін таланттарды шығарады. Тезис 3: Орталық Азия таланттарын елемейтін компаниялар жаһандық инновация жарысында бәсекелестік артықшылықты жоғалтады.",
            hint: "Your unique angle should come from your personal experience or cultural background — that is what no one else can write.",
            hintRu: "Ваш уникальный ракурс должен идти из личного опыта или культурного контекста — это то, что никто другой не напишет.",
            hintKk: "Бірегей бұрышыңыз жеке тәжірибеңізден немесе мәдени тегіңізден шығуы керек — бұл басқа ешкім жаза алмайтын нәрсе.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a 12-month thought leadership building plan for a student who wants to become a recognized voice in sustainable fashion. Include content strategy, platform choices, networking goals, and milestones for measuring progress.",
            questionRu: "Создайте 12-месячный план построения экспертного лидерства для студента в области устойчивой моды. Включите контент-стратегию, выбор платформ, цели нетворкинга и вехи для измерения прогресса.",
            questionKk: "Тұрақты сәнде танылған дауыс болғысы келетін студент үшін 12 айлық сараптамалық көшбасшылық құру жоспарын жасаңыз. Контент стратегиясын, платформа таңдауын, байланыс құру мақсаттарын және прогресті өлшеу белестерін қосыңыз.",
            answer: "Months 1-3 (Foundation): Start a blog and Instagram account. Publish 2 blog posts and 3 Instagram posts per week analyzing sustainable fashion trends. Read 10 books on sustainable fashion. Follow and engage with 50 influencers and brands. Milestone: 200 followers, 10 blog posts. Months 4-6 (Growth): Guest post on 2 established sustainable fashion blogs. Start a monthly newsletter. Attend 2 virtual sustainable fashion conferences. Collaborate with a local thrift store for a content series. Milestone: 500 followers, 1 guest feature, 100 newsletter subscribers. Months 7-9 (Authority): Launch a podcast interviewing sustainable fashion designers and activists. Submit an op-ed to a student or local newspaper. Apply to speak at a school or local event. Connect with 3 industry professionals for mentorship. Milestone: 1,000 followers, 5 podcast episodes, 1 speaking engagement. Months 10-12 (Recognition): Partner with a sustainable fashion brand for a student ambassador role. Compile best content into a digital portfolio. Apply for a sustainable fashion internship or fellowship citing your thought leadership platform. Organize a school sustainable fashion show. Milestone: 2,000 followers, 1 brand partnership, portfolio complete.",
            answerRu: "Месяцы 1-3 (Основа): начните блог и аккаунт в Instagram. Публикуйте 2 поста в блоге и 3 поста в Instagram в неделю с анализом трендов устойчивой моды. Прочитайте 10 книг об устойчивой моде. Подпишитесь и взаимодействуйте с 50 инфлюенсерами и брендами. Веха: 200 подписчиков, 10 постов в блоге. Месяцы 4-6 (Рост): гостевой пост в 2 известных блогах об устойчивой моде. Запустите ежемесячную рассылку. Посетите 2 виртуальные конференции по устойчивой моде. Сотрудничайте с местным секонд-хендом для серии контента. Веха: 500 подписчиков, 1 гостевая публикация, 100 подписчиков рассылки. Месяцы 7-9 (Авторитет): запустите подкаст с интервью дизайнеров и активистов устойчивой моды. Отправьте колонку в студенческую или местную газету. Подайте заявку на выступление в школе или на местном мероприятии. Свяжитесь с 3 профессионалами индустрии для менторства. Веха: 1000 подписчиков, 5 эпизодов подкаста, 1 выступление. Месяцы 10-12 (Признание): партнёрство с брендом устойчивой моды в роли студенческого амбассадора. Соберите лучший контент в цифровое портфолио. Подайте заявку на стажировку или фелоушип по устойчивой моде, ссылаясь на вашу платформу экспертного лидерства. Организуйте школьное показ устойчивой моды. Веха: 2000 подписчиков, 1 партнёрство с брендом, портфолио готово.",
            answerKk: "1-3 ай (Негіз): блог пен Instagram аккаунтын бастаңыз. Тұрақты сән трендтерін талдайтын аптасына 2 блог жазбасы мен 3 Instagram жазбасын жариялаңыз. Тұрақты сән туралы 10 кітап оқыңыз. 50 инфлюенсер мен брендке жазылып, әрекеттесіңіз. Белес: 200 жазылушы, 10 блог жазбасы. 4-6 ай (Өсу): 2 танымал тұрақты сән блогында қонақ жазба. Айлық бюллетень бастаңыз. 2 виртуалды тұрақты сән конференциясына қатысыңыз. Контент сериясы үшін жергілікті секонд-хендпен ынтымақтасыңыз. Белес: 500 жазылушы, 1 қонақ мақала, 100 бюллетень жазылушысы. 7-9 ай (Бедел): тұрақты сән дизайнерлері мен белсенділерімен сұхбаттасатын подкаст іске қосыңыз. Студенттік немесе жергілікті газетке мақала жіберіңіз. Мектепте немесе жергілікті іс-шарада сөз сөйлеуге өтінім беріңіз. Менторлық үшін 3 сала маманымен байланысыңыз. Белес: 1000 жазылушы, 5 подкаст эпизоды, 1 сөз сөйлеу. 10-12 ай (Тану): студент елшісі рөлі үшін тұрақты сән брендімен серіктес болыңыз. Ең жақсы мазмұнды цифрлық портфолиоға жинаңыз. Сараптамалық көшбасшылық платформаңызды көрсете отырып, тұрақты сән тағылымдамасына немесе стипендиясына өтінім беріңіз. Мектепте тұрақты сән көрмесін ұйымдастырыңыз. Белес: 2000 жазылушы, 1 бренд серіктестігі, портфолио дайын.",
            hint: "Build in phases — foundation, growth, authority, recognition — with specific measurable milestones at each stage.",
            hintRu: "Стройте поэтапно — основа, рост, авторитет, признание — с измеримыми вехами на каждом этапе.",
            hintKk: "Кезеңдермен құрыңыз — негіз, өсу, беделділік, тану — әр кезеңде нақты өлшенетін белестермен.",
            xp: 20
          }
        ]
      },
      {
        title: "Mentoring & Coaching",
        titleRu: "Менторство и коучинг",
        titleKk: "Менторлық және коучинг",
        content: "Mentoring and coaching are leadership skills that develop others through guidance, questioning, and supportive accountability. A mentor shares experience and wisdom from their journey, while a coach asks powerful questions to help others discover their own solutions. Combining both approaches accelerates the growth of those around you and multiplies your leadership impact.",
        contentRu: "Менторство и коучинг — лидерские навыки развития других через руководство, вопросы и поддерживающую подотчётность. Ментор делится опытом и мудростью, коуч задаёт сильные вопросы, помогая другим найти собственные решения. Сочетание обоих подходов ускоряет рост окружающих и умножает ваше лидерское влияние.",
        contentKk: "Менторлық және коучинг — басқаларды бағыттау, сұрақ қою және қолдау көрсету арқылы дамытатын көшбасшылық дағдылары. Ментор өз жолынан тәжірибе мен даналығын бөліседі, ал коуч басқаларға өз шешімдерін табуға көмектесу үшін күшті сұрақтар қояды. Екі тәсілді біріктіру айналаңыздағылардың өсуін жеделдетеді және көшбасшылық әсеріңізді арттырады.",
        keyFormulas: [
          {
            formula: "GROW: Goal → Reality → Options → Will (commitment)",
            formulaRu: "GROW: Цель → Реальность → Варианты → Воля (обязательство)",
            formulaKk: "GROW: Мақсат → Шындық → Нұсқалар → Ерік (міндеттеме)",
            description: "Classic coaching conversation framework",
            descriptionRu: "Классическая модель коучинговой беседы",
            descriptionKk: "Классикалық коучинг әңгіме моделі"
          }
        ],
        solvedExamples: [
          {
            question: "A younger student asks you for advice because they are struggling with time management. Use the GROW model to coach them rather than just telling them what to do.",
            questionRu: "Младший ученик просит совета — он борется с управлением временем. Используйте модель GROW для коучинга, а не просто советов.",
            questionKk: "Кіші оқушы уақытты басқарумен қиналып жатқандықтан кеңес сұрайды. Не істеу керектігін айтудың орнына GROW моделін қолданып коучинг жасаңыз.",
            steps: [
              { en: "Goal: 'What would good time management look like for you? What specific outcome do you want?' (Let them define it — maybe it is finishing homework by 8pm, or having free weekends.) Reality: 'Walk me through a typical day — where does your time actually go?'", ru: "Цель: «Как для тебя выглядит хорошее управление временем? Какой конкретный результат ты хочешь?» Реальность: «Расскажи свой типичный день — куда на самом деле уходит время?»", kk: "Мақсат: «Жақсы уақытты басқару сен үшін қалай көрінеді? Қандай нақты нәтиже қалайсың?» Шындық: «Типтік күніңді сипатта — уақытың шынымен қайда кетеді?»" },
              { en: "Options: 'What are some strategies you could try? What has worked for other people you know?' (Guide them to generate their own ideas.) Will: 'Which option will you commit to trying this week? What might get in the way, and how will you handle it?'", ru: "Варианты: «Какие стратегии ты мог бы попробовать? Что работало у знакомых?» (Помогите генерировать свои идеи.) Воля: «Какой вариант ты готов попробовать на этой неделе? Что может помешать?»", kk: "Нұсқалар: «Қандай стратегияларды қолданып көруге болады? Басқаларда не жұмыс істеді?» (Олардың өз идеяларын генерациялауға бағыттаңыз.) Ерік: «Осы аптада қай нұсқаны қолданып көруге міндеттенесің? Не кедергі болуы мүмкін?»" }
            ],
            answer: "GROW empowers the student to create their own solution rather than following your prescription — this builds self-reliance and ensures the solution fits their unique situation.",
            answerRu: "GROW позволяет ученику создать собственное решение вместо следования вашему предписанию — это развивает самостоятельность и гарантирует, что решение подходит их уникальной ситуации.",
            answerKk: "GROW оқушыға сіздің нұсқауыңызды орындаудың орнына өз шешімін жасауға мүмкіндік береді — бұл дербестікті дамытады және шешімнің олардың бірегей жағдайына сәйкес келуін қамтамасыз етеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main difference between mentoring and coaching?",
            questionRu: "В чём главное различие между менторством и коучингом?",
            questionKk: "Менторлық пен коучингтің негізгі айырмашылығы неде?",
            answer: "A mentor shares their own experience and gives direct advice based on their journey ('When I was in your position, I did X'). A coach asks questions to help you find your own answers ('What options do you see? What would happen if you tried X?'). Mentoring transfers wisdom, coaching develops independent thinking.",
            answerRu: "Ментор делится собственным опытом и даёт прямые советы, основанные на своём пути («Когда я был на твоём месте, я сделал X»). Коуч задаёт вопросы, чтобы помочь найти собственные ответы («Какие варианты ты видишь? Что было бы, если попробовать X?»). Менторство передаёт мудрость, коучинг развивает независимое мышление.",
            answerKk: "Ментор өз тәжірибесін бөліседі және өз жолына негізделген тікелей кеңес береді («Мен сенің орныңда болғанда, X жасадым»). Коуч өз жауаптарыңды табуға көмектесу үшін сұрақтар қояды («Қандай нұсқаларды көресің? X-ті қолданып көрсең не болар еді?»). Менторлық даналықты береді, коучинг тәуелсіз ойлауды дамытады.",
            hint: "One tells you from experience, the other helps you discover for yourself.",
            hintRu: "Один говорит из опыта, другой помогает открыть самостоятельно.",
            hintKk: "Бірі тәжірибеден айтады, екіншісі өзіңіз ашуға көмектеседі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A student you are mentoring says 'I want to get into Harvard but my grades are not good enough.' Using the GROW model, write the questions you would ask at each stage.",
            questionRu: "Ученик говорит: «Я хочу поступить в Гарвард, но мои оценки недостаточно хороши.» Используя модель GROW, напишите вопросы для каждого этапа.",
            questionKk: "Менторлық жасап жатқан оқушы: «Гарвардқа түскім келеді, бірақ бағаларым жеткіліксіз» дейді. GROW моделін қолданып, әр кезең үшін сұрақтар жазыңыз.",
            answer: "Goal: 'What specifically attracts you to Harvard? Is it Harvard specifically, or the type of education and opportunities top schools offer? What does your ideal college outcome look like?' Reality: 'What are your current grades? What are your strongest extracurriculars? Have you researched Harvard's actual admissions criteria — what gaps do you see?' Options: 'What could you do to strengthen your application? Are there similar schools that might be a better fit? What if you applied to Harvard and 5 similar schools?' Will: 'What is one thing you will do this week to move closer to your goal? Who can help you with this — a counselor, teacher, or current student?'",
            answerRu: "Цель: «Что именно тебя привлекает в Гарварде? Именно Гарвард или тип образования и возможностей, которые дают топ-школы? Как выглядит твой идеальный результат поступления?» Реальность: «Какие у тебя текущие оценки? Какие твои сильнейшие внеклассные занятия? Изучал ли ты реальные критерии приёма Гарварда — какие пробелы видишь?» Варианты: «Что ты мог бы сделать для усиления заявки? Есть ли похожие школы, которые могли бы подойти лучше? Что если подать в Гарвард и 5 похожих школ?» Воля: «Что одно ты сделаешь на этой неделе, чтобы приблизиться к цели? Кто может тебе помочь — консультант, учитель или нынешний студент?»",
            answerKk: "Мақсат: «Гарвардта нақты сені не тартады? Дәл Гарвард па, әлде үздік мектептер ұсынатын білім мен мүмкіндіктер түрі ме? Идеал колледж нәтижең қалай көрінеді?» Шындық: «Қазіргі бағаларың қандай? Ең күшті сыныптан тыс іс-шараларың қайсы? Гарвардтың нақты қабылдау критерийлерін зерттедің бе — қандай олқылықтар көресің?» Нұсқалар: «Өтінімді күшейту үшін не істей аласың? Жақсырақ сәйкес келетін ұқсас мектептер бар ма? Гарвардқа және 5 ұқсас мектепке өтінім берсең ше?» Ерік: «Мақсатыңа жақындау үшін осы аптада бір нәрсе не істейсің? Мұнда саған кім көмектесе алады — кеңесші, мұғалім, әлде қазіргі студент?»",
            hint: "Do not dismiss their dream or validate unrealistic expectations — help them think clearly about the path forward.",
            hintRu: "Не отвергайте мечту и не подтверждайте нереалистичные ожидания — помогите ясно мыслить о пути вперёд.",
            hintKk: "Арманын жоққа шығармаңыз және шындыққа сай емес күтулерді растамаңыз — алдағы жол туралы анық ойлауға көмектесіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a peer mentoring program for your school where 11th-graders mentor 9th-graders. Include: program structure, mentor training curriculum, matching criteria, meeting format, success metrics, and a plan for handling difficulties like mentor-mentee conflicts or disengagement.",
            questionRu: "Разработайте программу взаимного менторства, где 11-классники менторят 9-классников. Включите: структуру, обучение менторов, критерии подбора, формат встреч, метрики успеха и план работы с трудностями.",
            questionKk: "11-сынып оқушылары 9-сынып оқушыларына менторлық жасайтын мектеп тең менторлық бағдарламасын жасаңыз. Бағдарлама құрылымын, ментор оқыту бағдарламасын, сәйкестендіру критерийлерін, кездесу форматын, табыс көрсеткіштерін және қиындықтарды шешу жоспарын қосыңыз.",
            answer: "Structure: September-May program. Each mentor paired with one mentee. Bi-weekly 30-minute meetings. Monthly group activities. Training (4 sessions before launch): Session 1 — Active listening and GROW model. Session 2 — Boundaries and confidentiality. Session 3 — Cultural sensitivity and different learning styles. Session 4 — Practice role-plays with feedback. Matching: Survey both groups on interests, academic goals, personality type, and language preferences. Match by shared interests first, complementary strengths second. Meeting format: 5 min check-in, 15 min focused topic (study skills, social navigation, goal setting), 10 min open conversation. Metrics: Mentee GPA change, mentee satisfaction survey (quarterly), mentor self-assessment, program retention rate. Difficulties: Conflicts — program coordinator mediates, can reassign pairs if needed. Disengagement — automated reminder system, monthly mentor check-ins with coordinator, recognition events to maintain motivation. Emergency protocol: If a mentee discloses serious issues (abuse, self-harm), mentors escalate to the school counselor immediately.",
            answerRu: "Структура: программа сентябрь-май. Каждый ментор в паре с одним подопечным. Двухнедельные 30-минутные встречи. Ежемесячные групповые мероприятия. Обучение (4 сессии перед запуском): Сессия 1 — активное слушание и модель GROW. Сессия 2 — границы и конфиденциальность. Сессия 3 — культурная чуткость и разные стили обучения. Сессия 4 — ролевые игры с обратной связью. Подбор пар: опрос обеих групп об интересах, академических целях, типе личности и языковых предпочтениях. Сначала подбор по общим интересам, затем по взаимодополняющим сильным сторонам. Формат встречи: 5 мин чек-ин, 15 мин фокусная тема (учебные навыки, социальная навигация, постановка целей), 10 мин открытый разговор. Метрики: изменение GPA подопечного, опрос удовлетворённости (ежеквартально), самооценка ментора, показатель удержания программы. Трудности: конфликты — координатор программы посредничает, может переназначить пары при необходимости. Отстранённость — автоматическая система напоминаний, ежемесячные проверки менторов с координатором, мероприятия признания для поддержания мотивации. Протокол экстренных ситуаций: если подопечный раскрывает серьёзные проблемы (насилие, самоповреждение), менторы немедленно обращаются к школьному психологу.",
            answerKk: "Құрылым: қыркүйек-мамыр бағдарламасы. Әр ментор бір ментимен жұптасады. Екі апта сайын 30 минуттық кездесулер. Айлық топтық іс-шаралар. Дайындық (іске қосу алдында 4 сессия): 1-сессия — белсенді тыңдау және GROW моделі. 2-сессия — шекаралар мен құпиялылық. 3-сессия — мәдени сезімталдық және әр түрлі оқу стильдері. 4-сессия — кері байланыспен рөлдік ойындарды жаттықтыру. Сәйкестендіру: екі топты да қызығушылықтары, академиялық мақсаттары, тұлға түрі және тіл қалаулары бойынша сауалнамалау. Алдымен ортақ қызығушылықтар, содан кейін толықтырушы күшті жақтар бойынша сәйкестендіру. Кездесу форматы: 5 мин тексеру, 15 мин негізгі тақырып (оқу дағдылары, әлеуметтік бағдарлау, мақсат қою), 10 мин ашық әңгіме. Көрсеткіштер: менти GPA өзгерісі, менти қанағаттану сауалнамасы (тоқсан сайын), ментор өзін-өзі бағалауы, бағдарлама ұстап қалу көрсеткіші. Қиындықтар: жанжалдар — бағдарлама үйлестірушісі делдалдық жасайды, қажет болса жұптарды қайта тағайындай алады. Ынтасыздық — автоматты еске салу жүйесі, үйлестірушімен айлық ментор тексерулері, мотивацияны сақтау үшін тану іс-шаралары. Төтенше жағдай хаттамасы: егер менти елеулі мәселелерді ашса (зорлық, өзіне зиян келтіру), менторлар дереу мектеп кеңесшісіне жүгінеді.",
            hint: "Think about what could go wrong and design the program to prevent those issues from the start.",
            hintRu: "Подумайте о том, что может пойти не так, и спроектируйте программу для предотвращения этих проблем.",
            hintKk: "Не дұрыс болмауы мүмкін екенін ойлаңыз және бағдарламаны сол мәселелерді басынан алдын алуға жобалаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Global Leadership",
        titleRu: "Глобальное лидерство",
        titleKk: "Жаһандық көшбасшылық",
        content: "Global leadership is the ability to lead across cultures, borders, and perspectives in an interconnected world. It requires cultural intelligence, systems thinking, and the humility to learn from diverse viewpoints. As Central Asian students positioned between East and West, you have a unique advantage in understanding multiple worldviews — an essential skill for 21st-century leadership.",
        contentRu: "Глобальное лидерство — способность руководить через культуры, границы и перспективы во взаимосвязанном мире. Оно требует культурного интеллекта, системного мышления и смирения учиться у разных точек зрения. Студенты Центральной Азии, расположенные между Востоком и Западом, имеют уникальное преимущество в понимании множественных мировоззрений.",
        contentKk: "Жаһандық көшбасшылық — өзара байланысты әлемде мәдениеттер, шекаралар және көзқарастар арқылы басқару қабілеті. Ол мәдени интеллектті, жүйелік ойлауды және әр түрлі көзқарастардан үйренудің кішіпейілділігін талап етеді. Шығыс пен Батыс арасында орналасқан Орталық Азия студенттері ретінде сізде бірнеше дүниетанымды түсінудің бірегей артықшылығы бар.",
        keyFormulas: [
          {
            formula: "GLOBE: Global awareness → Local sensitivity → Open mindset → Bridge cultures → Ethical leadership",
            formulaRu: "GLOBE: Глобальная осознанность → Чуткость к местному → Открытое мышление → Соединяй культуры → Этичное лидерство",
            formulaKk: "GLOBE: Жаһандық аңғарымпаздық → Жергілікті сезімталдық → Ашық ойлау → Мәдениеттерді жақындастыр → Этикалық көшбасшылық",
            description: "Five dimensions of global leadership",
            descriptionRu: "Пять измерений глобального лидерства",
            descriptionKk: "Жаһандық көшбасшылықтың бес өлшемі"
          }
        ],
        solvedExamples: [
          {
            question: "You are leading a virtual project team with members from Japan, Brazil, Nigeria, and Germany. Use the GLOBE framework to set up effective cross-cultural collaboration.",
            questionRu: "Вы руководите виртуальной командой с участниками из Японии, Бразилии, Нигерии и Германии. Используйте модель GLOBE для кросс-культурного сотрудничества.",
            questionKk: "Жапония, Бразилия, Нигерия және Германиядан келген мүшелермен виртуалды жоба командасын басқарып жатырсыз. Тиімді мәдениетаралық ынтымақтастықты орнату үшін GLOBE моделін қолданыңыз.",
            steps: [
              { en: "Global awareness: Research each culture's communication norms — Japan values consensus, Brazil values warmth, Nigeria values respect for elders, Germany values directness. Local sensitivity: Acknowledge holidays, time zones, and personal circumstances of each member.", ru: "Глобальная осведомлённость: изучите нормы — Япония ценит консенсус, Бразилия — теплоту, Нигерия — уважение к старшим, Германия — прямоту. Локальная чуткость: учитывайте праздники, часовые пояса и обстоятельства каждого.", kk: "Жаһандық хабардарлық: әр мәдениеттің қарым-қатынас нормаларын зерттеңіз — Жапония консенсусті, Бразилия жылылықты, Нигерия үлкендерге құрметті, Германия тікелікті бағалайды. Жергілікті сезімталдық: әр мүшенің мерекелерін, уақыт аймақтарын және жеке жағдайларын ескеріңіз." },
              { en: "Open mindset: Create a team agreement that 'different is not wrong — it is a resource.' Bridge: Assign cross-cultural buddy pairs for mutual learning. Ethical: Ensure decisions are fair, transparent, and consider each culture's perspective on equity.", ru: "Открытость: создайте командное соглашение «другое — не неправильное, а ресурс.» Мост: назначьте кросс-культурные пары для взаимного обучения. Этика: обеспечьте справедливость и прозрачность решений.", kk: "Ашық ой: «Басқа — дұрыс емес дегенді білдірмейді, ол ресурс» деген команда келісімін жасаңыз. Көпір: өзара оқу үшін мәдениетаралық серіктес жұптарды тағайындаңыз. Этика: шешімдердің әділ, ашық және әр мәдениеттің теңдік көзқарасын ескеретінін қамтамасыз етіңіз." }
            ],
            answer: "GLOBE ensures you lead with cultural humility and create an environment where diversity is a competitive advantage rather than a source of conflict.",
            answerRu: "GLOBE гарантирует, что вы руководите с культурным смирением и создаёте среду, где разнообразие — конкурентное преимущество, а не источник конфликта.",
            answerKk: "GLOBE мәдени кішіпейілдікпен басшылық етуіңізді және әртүрліліктің жанжал көзі емес, бәсекелестік артықшылық болатын ортаны құруыңызды қамтамасыз етеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is Central Asia's geographic and cultural position an advantage for global leadership?",
            questionRu: "Почему географическое и культурное положение Центральной Азии — преимущество для глобального лидерства?",
            questionKk: "Орталық Азияның географиялық және мәдени жағдайы неге жаһандық көшбасшылық үшін артықшылық?",
            answer: "Central Asia sits at the crossroads of East and West, with cultural ties to Russia, China, Turkey, the Middle East, and Europe. Students from this region naturally understand multiple communication styles, value systems, and worldviews. This cultural fluency is increasingly valuable in a globalized economy where businesses and organizations need leaders who can bridge diverse perspectives.",
            answerRu: "Центральная Азия находится на перекрёстке Востока и Запада, с культурными связями с Россией, Китаем, Турцией, Ближним Востоком и Европой. Студенты этого региона естественно понимают множество стилей коммуникации, систем ценностей и мировоззрений. Эта культурная гибкость всё более ценна в глобализированной экономике, где бизнесу и организациям нужны лидеры, способные соединять разные перспективы.",
            answerKk: "Орталық Азия Ресей, Қытай, Түркия, Таяу Шығыс және Еуропамен мәдени байланыстары бар Шығыс пен Батыстың қиылысында орналасқан. Осы аймақтың студенттері бірнеше қарым-қатынас стилін, құндылықтар жүйесін және дүниетанымды табиғи түрде түсінеді. Бұл мәдени икемділік бизнес пен ұйымдарға әр түрлі көзқарастарды байланыстыра алатын көшбасшылар қажет жаһандық экономикада барған сайын құнды болып келеді.",
            hint: "Think about how many different cultural influences shape Central Asian identity.",
            hintRu: "Подумайте, сколько культурных влияний формируют центральноазиатскую идентичность.",
            hintKk: "Орталық Азия сәйкестігін қанша мәдени ықпал қалыптастыратынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are organizing an international student conference with participants from 10 countries. What three things must you consider to ensure inclusive global leadership in the event design?",
            questionRu: "Вы организуете международную студенческую конференцию с участниками из 10 стран. Какие три вещи нужно учесть для инклюзивного глобального лидерства?",
            questionKk: "10 елден қатысушылармен халықаралық студенттер конференциясын ұйымдастырып жатырсыз. Іс-шара дизайнында инклюзивті жаһандық көшбасшылықты қамтамасыз ету үшін қандай үш нәрсені ескеру керек?",
            answer: "1) Time zones and scheduling: Rotate session times so no region always has the inconvenient slot. 2) Language and communication: Provide key materials in multiple languages, speak slowly and avoid idioms, and use visual aids. Offer both verbal and written participation options for cultures where people are less comfortable speaking up in large groups. 3) Cultural representation: Ensure speakers and panelists represent diverse regions, not just Western perspectives. Include ice-breakers that work across cultures and dietary options for all backgrounds.",
            answerRu: "1) Часовые пояса и расписание: чередуйте время сессий, чтобы ни один регион не получал неудобное время постоянно. 2) Язык и коммуникация: предоставьте ключевые материалы на нескольких языках, говорите медленно и избегайте идиом, используйте визуальные средства. Предложите как устный, так и письменный варианты участия для культур, где людям менее комфортно высказываться в больших группах. 3) Культурное представительство: обеспечьте, чтобы спикеры и участники панелей представляли разные регионы, а не только западные точки зрения. Включите ледоколы, работающие в разных культурах, и варианты питания для всех групп.",
            answerKk: "1) Уақыт аймақтары мен кесте: ешбір аймақ үнемі ыңғайсыз уақытты алмауы үшін сессия уақыттарын ауыстырып отырыңыз. 2) Тіл мен қарым-қатынас: негізгі материалдарды бірнеше тілде беріңіз, баяу сөйлеп, идиомалардан аулақ болыңыз және көрнекі құралдар қолданыңыз. Үлкен топтарда сөйлеуге ыңғайсыз сезінетін мәдениеттер үшін ауызша және жазбаша қатысу нұсқаларын ұсыныңыз. 3) Мәдени өкілдік: спикерлер мен панель мүшелерінің тек батыстық көзқарастарды емес, әр түрлі аймақтарды білдіретінін қамтамасыз етіңіз. Мәдениеттер арасында жұмыс істейтін таныстыру ойындарын және барлық топтарға тағамдық нұсқаларды қосыңыз.",
            hint: "Think about what would make someone from a very different culture feel equally included and valued.",
            hintRu: "Подумайте, что заставит человека из совсем другой культуры чувствовать себя равноценно включённым.",
            hintKk: "Мүлдем басқа мәдениеттен келген адамның тең дәрежеде қосылғанын және бағаланғанын қандай нәрсе сезіндіретінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a Global Leadership Manifesto (200 words max) that articulates your vision for how young Central Asian leaders can contribute to solving a major world challenge. Choose a specific challenge, explain your unique perspective, and call others to action.",
            questionRu: "Напишите Манифест глобального лидерства (до 200 слов) с видением того, как молодые центральноазиатские лидеры могут решить мировую проблему. Выберите конкретную проблему, объясните уникальную перспективу и призовите к действию.",
            questionKk: "Жас Орталық Азия көшбасшыларының негізгі әлемдік мәселені шешуге қалай үлес қоса алатыны туралы көзқарасыңызды білдіретін Жаһандық көшбасшылық манифестін жазыңыз (200 сөзге дейін). Нақты мәселені таңдаңыз, бірегей көзқарасыңызды түсіндіріңіз және басқаларды іс-әрекетке шақырыңыз.",
            answer: "The Water Crisis Manifesto: Central Asia knows water scarcity intimately — the Aral Sea disaster is our living lesson in what happens when resources are mismanaged. As young leaders from this region, we carry unique urgency and insight that boardrooms in New York and Geneva lack. We propose a Global Student Water Leadership Network connecting young people from water-stressed regions — Central Asia, Sub-Saharan Africa, the Middle East, and the American West — to share solutions, not just statistics. Our generation will not wait for policy changes. We will build grassroots innovation: affordable filtration systems, community water monitoring apps, and cross-border cooperation models born from our experience as landlocked nations sharing rivers. To our fellow students worldwide: water does not respect borders, and neither should our solutions. Join us in building a generation of leaders who protect the resource that sustains all life. The time to lead is not after graduation — it is now.",
            answerRu: "Манифест водного кризиса: Центральная Азия близко знакома с дефицитом воды — катастрофа Аральского моря — наш живой урок того, что происходит при неправильном управлении ресурсами. Как молодые лидеры из этого региона, мы несём уникальную срочность и понимание, которых не хватает залам заседаний в Нью-Йорке и Женеве. Мы предлагаем Глобальную студенческую сеть водного лидерства, объединяющую молодёжь из регионов с дефицитом воды — Центральной Азии, Африки южнее Сахары, Ближнего Востока и американского Запада — для обмена решениями, а не только статистикой. Наше поколение не будет ждать изменения политики. Мы будем строить низовые инновации: доступные системы фильтрации, приложения общественного мониторинга воды и модели трансграничного сотрудничества, рождённые из нашего опыта как не имеющих выхода к морю стран, делящих реки. Нашим товарищам-студентам по всему миру: вода не признаёт границ, и наши решения тоже не должны. Присоединяйтесь к нам в создании поколения лидеров, защищающих ресурс, поддерживающий всю жизнь. Время вести — не после выпуска, а сейчас.",
            answerKk: "Су дағдарысы манифесті: Орталық Азия су тапшылығын жақсы біледі — Арал теңізі апаты біздің ресурстарды дұрыс басқармаудың не әкелетіні туралы тірі сабағымыз. Осы аймақтың жас көшбасшылары ретінде, бізде Нью-Йорк пен Женева кеңес бөлмелерінде жетіспейтін бірегей шұғылдық пен түсінік бар. Біз су тапшылығы бар аймақтардың — Орталық Азия, Сахараның оңтүстігіндегі Африка, Таяу Шығыс және американдық Батыстың — жастарын тек статистика емес, шешімдерді бөлісу үшін біріктіретін Жаһандық студенттер су көшбасшылығы желісін ұсынамыз. Біздің ұрпағымыз саясат өзгеруін күтпейді. Біз халықтық инновация құрамыз: қолжетімді сүзу жүйелері, қоғамдастық су мониторингі қосымшалары және өзендерді бөлісетін теңізге шықпайтын елдер ретіндегі тәжірибемізден туындаған шекаралық ынтымақтастық модельдері. Бүкіл әлемдегі құрдас студенттерге: су шекараны құрметтемейді, біздің шешімдеріміз де солай болмауы керек. Барлық өмірді қолдайтын ресурсты қорғайтын көшбасшылар ұрпағын құруға бізге қосылыңыз. Көшбасшылық ету уақыты — бітіргеннен кейін емес, қазір.",
            hint: "Be specific about your chosen challenge, authentic about your Central Asian perspective, and bold in your call to action.",
            hintRu: "Будьте конкретны в выборе проблемы, аутентичны в центральноазиатской перспективе и смелы в призыве к действию.",
            hintKk: "Таңдалған мәселеде нақты, Орталық Азия көзқарасында шынайы және іс-әрекетке шақыруда батыл болыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Communication Portfolio",
        titleRu: "Коммуникационное портфолио",
        titleKk: "Қарым-қатынас портфолиосы",
        content: "A communication portfolio is a curated collection of your best communication work that demonstrates your growth and range as a communicator and leader. It includes speeches, essays, presentations, media appearances, leadership projects, and reflections on your development. Building this portfolio throughout high school gives you powerful evidence for college applications, scholarships, and job interviews.",
        contentRu: "Коммуникационное портфолио — подобранная коллекция лучших работ, демонстрирующая ваш рост как коммуникатора и лидера. Оно включает речи, эссе, презентации, медиа-появления, лидерские проекты и рефлексии. Создание портфолио в школе даёт мощные доказательства для поступления, стипендий и собеседований.",
        contentKk: "Қарым-қатынас портфолиосы — коммуникатор және көшбасшы ретіндегі өсуіңіз бен ауқымыңызды көрсететін ең жақсы қарым-қатынас жұмыстарыңыздың таңдамалы жинағы. Ол сөздерді, эсселерді, ұсыныстарды, медиа көріністерді, көшбасшылық жобаларды және даму рефлексияларын қамтиды. Бұл портфолионы мектеп кезінде құру колледжге түсу, стипендиялар және жұмыс сұхбаттары үшін күшті дәлелдемелер береді.",
        keyFormulas: [
          {
            formula: "SHOWCASE: Select best work → Highlight growth → Organize by skill → Write reflections → Curate for audience → Evolve continuously",
            formulaRu: "SHOWCASE: Выбери лучшие работы → Покажи рост → Организуй по навыкам → Напиши рефлексию → Подбери для аудитории → Постоянно развивайся",
            formulaKk: "SHOWCASE: Ең үздік жұмыстарды таңда → Өсуді көрсет → Дағды бойынша реттеу → Рефлексия жаз → Аудиторияға іріктеп бер → Үздіксіз дамы",
            description: "Six-step portfolio building framework",
            descriptionRu: "Шестишаговая модель создания портфолио",
            descriptionKk: "Портфолио құрудың алты қадамдық моделі"
          }
        ],
        solvedExamples: [
          {
            question: "You are building a communication portfolio for college applications. Use the SHOWCASE framework to plan what to include and how to organize it.",
            questionRu: "Вы создаёте коммуникационное портфолио для поступления. Используйте модель SHOWCASE для планирования содержания и организации.",
            questionKk: "Колледжге түсу үшін қарым-қатынас портфолиосын құрып жатырсыз. Нені қосу керектігін және қалай ұйымдастыру керектігін жоспарлау үшін SHOWCASE моделін қолданыңыз.",
            steps: [
              { en: "Select: Choose 8-10 pieces — your best speech (video), a persuasive essay, a project leadership report, a media interview clip, and a conflict resolution case study. Highlight growth: Include one early piece alongside a recent one to show improvement.", ru: "Выбор: 8-10 работ — лучшая речь (видео), убедительное эссе, отчёт о лидерстве в проекте, клип интервью, кейс медиации. Рост: включите раннюю и недавнюю работу для демонстрации прогресса.", kk: "Таңдау: 8-10 жұмыс — ең жақсы сөзіңіз (бейне), сендіру эссесі, жоба көшбасшылық есебі, медиа сұхбат клипі және жанжалды шешу кейс-стадиясы. Өсуді бөлектеу: жетілуді көрсету үшін ерте жұмыс пен соңғы жұмысты қосыңыз." },
              { en: "Organize by skill: Public Speaking, Written Communication, Leadership, Cross-Cultural. Write a 100-word reflection for each piece explaining context and what you learned. Curate for audience: Scholarship applications see leadership examples; communication programs see speaking samples. Evolve: Update quarterly with new work.", ru: "Организуйте по навыкам: ораторское искусство, письменная коммуникация, лидерство, межкультурное. Напишите 100-словную рефлексию к каждой работе. Курируйте под аудиторию: стипендии — лидерство, программы коммуникации — выступления. Обновляйте ежеквартально.", kk: "Дағды бойынша ұйымдастырыңыз: көпшілік алдында сөйлеу, жазбаша қарым-қатынас, көшбасшылық, мәдениетаралық. Әр жұмысқа контексті мен не үйренгеніңізді түсіндіретін 100 сөздік рефлексия жазыңыз. Аудиторияға бейімдеңіз: стипендиялар көшбасшылық мысалдарын көреді; қарым-қатынас бағдарламалары сөйлеу үлгілерін көреді. Жаңа жұмыстармен тоқсан сайын жаңартыңыз." }
            ],
            answer: "SHOWCASE creates a portfolio that tells the story of your communication journey — not just what you can do, but how you have grown and what drives you.",
            answerRu: "SHOWCASE создаёт портфолио, рассказывающее историю вашего пути в коммуникации — не только что вы умеете, но как вы выросли и что вас движет.",
            answerKk: "SHOWCASE тек не істей алатыныңызды емес, қалай өскеніңізді және сізді не қозғайтынын айтатын қарым-қатынас жолыңыздың әңгімесін баяндайтын портфолио жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is a communication portfolio more powerful than a simple list of activities on a resume?",
            questionRu: "Почему коммуникационное портфолио мощнее простого списка активностей в резюме?",
            questionKk: "Коммуникация портфолиосы неге түйіндемедегі қарапайым іс-шаралар тізімінен күштірек?",
            answer: "A resume lists what you did; a portfolio proves it with evidence. An admissions officer reading 'Led debate team' learns much less than watching a video of you winning a debate. A portfolio shows the quality and depth of your skills, not just their existence.",
            answerRu: "Резюме перечисляет, что вы делали; портфолио доказывает это доказательствами. Сотрудник приёмной комиссии, читающий «руководил дебатной командой», узнаёт гораздо меньше, чем видя видео вашей победы в дебатах. Портфолио показывает качество и глубину навыков, а не просто их наличие.",
            answerKk: "Түйіндеме не істегеніңізді тізеді; портфолио оны дәлелдермен дәлелдейді. «Дебат командасын басқардым» дегенді оқыған қабылдау комиссиясы қызметкері сіздің дебатта жеңіп жатқан бейнеңізді көргеннен әлдеқайда аз біледі. Портфолио дағдыларыңыздың бар екенін ғана емес, сапасы мен тереңдігін көрсетеді.",
            hint: "Think about the difference between someone saying they can cook vs. tasting their food.",
            hintRu: "Подумайте о разнице между тем, кто говорит, что умеет готовить, и тем, чью еду вы пробуете.",
            hintKk: "Біреудің тамақ пісіре алатынын айтуы мен тамағын татып көру арасындағы айырмашылықты ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a portfolio reflection (100 words) for a speech you gave about climate change at a school assembly. Include: the context, your preparation process, what went well, and what you would improve.",
            questionRu: "Напишите рефлексию для портфолио (100 слов) о речи на тему климата на школьном собрании. Включите: контекст, подготовку, что удалось и что улучшить.",
            questionKk: "Мектеп жиналысында климат өзгерісі туралы сөйлеген сөзіңіз үшін портфолио рефлексиясын жазыңыз (100 сөз). Контекстті, дайындық процесін, не жақсы болғанын және нені жақсартатыныңызды қосыңыз.",
            answer: "In March 2026, I delivered a 5-minute speech on climate change to 300 students at our school assembly. I prepared using the STAGE framework, spending two weeks researching local environmental data and practicing delivery. The emotional hook — sharing our town's air quality statistics — visibly engaged the audience. My vocal variety and eye contact were strong. However, I spoke too quickly during the data section, and one student asked a question I was unprepared for. Next time, I will practice the data section at half speed and prepare responses for five likely questions. This experience taught me that preparation builds confidence but flexibility comes from practice.",
            answerRu: "В марте 2026 года я произнёс(ла) 5-минутную речь об изменении климата перед 300 учениками на школьном собрании. Я готовился(ась), используя модель STAGE, потратив две недели на изучение местных экологических данных и отработку подачи. Эмоциональный захват — статистика качества воздуха нашего города — заметно вовлёк аудиторию. Разнообразие голоса и зрительный контакт были сильными сторонами. Однако я говорил(а) слишком быстро в разделе данных, и один ученик задал вопрос, к которому я не был(а) готов(а). В следующий раз я отработаю раздел данных на половинной скорости и подготовлю ответы на пять вероятных вопросов. Этот опыт научил меня, что подготовка строит уверенность, но гибкость приходит с практикой.",
            answerKk: "2026 жылдың наурызында мектеп жиналысында 300 оқушыға климат өзгерісі туралы 5 минуттық сөз сөйледім. STAGE моделін қолданып дайындалдым, жергілікті экологиялық деректерді зерттеуге және жеткізуді жаттықтыруға екі апта жұмсадым. Эмоционалды ілмек — қаламыздың ауа сапасы статистикасын бөлісу — аудиторияны айқын тартты. Дауыс әртүрлілігім мен көз контактім күшті болды. Дегенмен, деректер бөлімінде тым жылдам сөйледім, және бір оқушы дайын болмаған сұрақ қойды. Келесі жолы деректер бөлімін жарты жылдамдықпен жаттықтырамын және бес ықтимал сұраққа жауап дайындаймын. Бұл тәжірибе маған дайындықтың сенімділік құратынын, бірақ икемділіктің тәжірибеден келетінін үйретті.",
            hint: "Be honest about both strengths and areas for growth — self-awareness is what makes a reflection valuable.",
            hintRu: "Будьте честны о сильных сторонах и зонах роста — самосознание делает рефлексию ценной.",
            hintKk: "Күшті жақтар мен өсу аймақтары туралы адал болыңыз — өзін-өзі тану рефлексияны құнды етеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a complete table of contents for your Communication & Leadership portfolio that demonstrates mastery across all skills learned in grades 8-12. Include at least 12 entries organized by category, with a brief description of each piece and the skill it demonstrates.",
            questionRu: "Создайте полное оглавление портфолио коммуникации и лидерства, демонстрирующее мастерство по всем навыкам 8-12 классов. Включите минимум 12 записей по категориям с кратким описанием каждой работы.",
            questionKk: "8-12 сыныптарда үйренілген барлық дағдылар бойынша шеберлікті көрсететін Қарым-қатынас және Көшбасшылық портфолиоңыздың толық мазмұн кестесін жасаңыз. Санат бойынша ұйымдастырылған, әр жұмыстың қысқа сипаттамасы мен көрсететін дағдысымен кемінде 12 жазба қосыңыз.",
            answer: "COMMUNICATION & LEADERSHIP PORTFOLIO — Table of Contents. I. FOUNDATIONS (Grade 8-9): 1. 'Active Listening in Action' — Audio recording of peer mediation session demonstrating HEAR framework (Active Listening). 2. 'Why School Libraries Matter' — Persuasive speech video using Ethos/Pathos/Logos (Persuasive Speaking). 3. 'Digital Citizen Pledge' — Social media guidelines document I created for our school (Digital Communication). II. APPLIED SKILLS (Grade 10): 4. 'Climate Action Speech' — 5-minute recorded speech at school assembly with 300 attendees (Public Speaking). 5. 'The Aral Sea Story' — College essay draft using STORY arc (Storytelling). 6. 'Club Conflict Resolution' — Case study of mediating a real club dispute using PEACE (Conflict Mediation). 7. 'Scholarship Inquiry Email' — Professional email with response from MIT admissions (Professional Writing). III. LEADERSHIP (Grade 11): 8. 'Leading the Science Fair Team' — Project report documenting my leadership of a 6-person team to regional finals (Team Management). 9. 'Student Council Crisis' — Reflection on handling a budget shortfall using CALM (Crisis Communication). 10. 'Mock Negotiation' — Video of a simulated negotiation exercise with analysis (Negotiation). IV. STRATEGIC (Grade 12): 11. 'TEDx Organization' — Full PR campaign documentation for school TEDx event (Public Relations/Strategic Communication). 12. 'AI Ethics Blog' — 6-month collection of published thought leadership articles (Thought Leadership). 13. 'Global Student Conference' — Event planning documentation for international virtual conference (Global Leadership). 14. 'Growth Reflection' — 1,000-word essay comparing my Grade 8 and Grade 12 communication skills with evidence from the portfolio (Self-Assessment). Each entry includes: the artifact, a 100-word reflection, and a rubric self-assessment.",
            answerRu: "ПОРТФОЛИО КОММУНИКАЦИИ И ЛИДЕРСТВА — Оглавление. I. ОСНОВЫ (8-9 класс): 1. «Активное слушание в действии» — аудиозапись сессии медиации сверстников, демонстрирующая модель HEAR (Активное слушание). 2. «Почему школьные библиотеки важны» — видео убедительной речи с использованием Этоса/Пафоса/Логоса (Убедительная речь). 3. «Клятва цифрового гражданина» — документ с правилами соцсетей, созданный мной для школы (Цифровая коммуникация). II. ПРИКЛАДНЫЕ НАВЫКИ (10 класс): 4. «Речь о климатических действиях» — 5-минутная записанная речь на школьном собрании с 300 участниками (Публичные выступления). 5. «История Аральского моря» — черновик эссе для поступления по дуге STORY (Сторителлинг). 6. «Разрешение конфликта в клубе» — кейс-стади посредничества в реальном споре клуба с использованием PEACE (Посредничество в конфликтах). 7. «Письмо с запросом о стипендии» — деловое письмо с ответом от приёмной комиссии MIT (Деловое письмо). III. ЛИДЕРСТВО (11 класс): 8. «Руководство командой научной ярмарки» — отчёт о проекте, документирующий моё руководство командой из 6 человек до региональных финалов (Управление командой). 9. «Кризис ученического совета» — рефлексия об управлении дефицитом бюджета с использованием CALM (Кризисная коммуникация). 10. «Пробные переговоры» — видео симулированного упражнения по переговорам с анализом (Переговоры). IV. СТРАТЕГИЧЕСКОЕ (12 класс): 11. «Организация TEDx» — полная документация PR-кампании для школьного TEDx (Связи с общественностью/Стратегическая коммуникация). 12. «Блог об этике ИИ» — 6-месячная коллекция опубликованных статей экспертного лидерства (Экспертное лидерство). 13. «Глобальная студенческая конференция» — документация планирования международной виртуальной конференции (Глобальное лидерство). 14. «Рефлексия о росте» — эссе на 1000 слов, сравнивающее мои коммуникационные навыки в 8 и 12 классах с доказательствами из портфолио (Самооценка). Каждая запись включает: артефакт, рефлексию на 100 слов и самооценку по рубрике.",
            answerKk: "ҚАРЫМ-ҚАТЫНАС ЖӘНЕ КӨШБАСШЫЛЫҚ ПОРТФОЛИОСЫ — Мазмұны. I. НЕГІЗДЕР (8-9 сынып): 1. «Белсенді тыңдау іс жүзінде» — HEAR моделін көрсететін құрдастар делдалдығы сессиясының аудиожазбасы (Белсенді тыңдау). 2. «Мектеп кітапханалары неге маңызды» — Этос/Патос/Логосты қолданған сендіру сөзінің бейнесі (Сендіру сөйлеуі). 3. «Цифрлық азамат анты» — мектебім үшін жасаған әлеуметтік желі ережелері құжаты (Цифрлық қарым-қатынас). II. ҚОЛДАНБАЛЫ ДАҒДЫЛАР (10-сынып): 4. «Климаттық іс-әрекет сөзі» — мектеп жиналысында 300 қатысушыға жазылған 5 минуттық сөз (Көпшілік алдында сөйлеу). 5. «Арал теңізінің тарихы» — STORY доғасын қолданған колледж эссесінің жобасы (Әңгімелеу). 6. «Клубтағы жанжалды шешу» — PEACE қолданып нақты клуб дауын шешу кейс-стадиясы (Жанжалда делдалдық). 7. «Стипендия туралы сұрау хаты» — MIT қабылдау кеңсесінің жауабы бар кәсіби хат (Кәсіби жазу). III. КӨШБАСШЫЛЫҚ (11-сынып): 8. «Ғылыми жәрмеңке командасын басқару» — аймақтық финалға дейін 6 адамдық команданы басқаруымды құжаттайтын жоба есебі (Команданы басқару). 9. «Оқушылар кеңесінің дағдарысы» — CALM қолданып бюджет тапшылығын шешу туралы рефлексия (Дағдарыстық қарым-қатынас). 10. «Сынақ келіссөз» — талдаумен модельденген келіссөз жаттығуының бейнесі (Келіссөз). IV. СТРАТЕГИЯЛЫҚ (12-сынып): 11. «TEDx ұйымдастыру» — мектеп TEDx іс-шарасы үшін толық PR науқаны құжаттамасы (Қоғаммен байланыс/Стратегиялық қарым-қатынас). 12. «ЖИ этикасы блогы» — жарияланған сараптамалық көшбасшылық мақалаларының 6 айлық жинағы (Сараптамалық көшбасшылық). 13. «Жаһандық студенттер конференциясы» — халықаралық виртуалды конференцияны жоспарлау құжаттамасы (Жаһандық көшбасшылық). 14. «Өсу рефлексиясы» — портфолиодан дәлелдермен 8 және 12 сыныптағы қарым-қатынас дағдыларымды салыстыратын 1000 сөздік эссе (Өзін-өзі бағалау). Әр жазба мыналарды қамтиды: артефакт, 100 сөздік рефлексия және рубрика бойынша өзін-өзі бағалау.",
            hint: "Cover all major skill areas from the entire curriculum, show progression from foundational to strategic, and include different formats (written, video, audio, case studies).",
            hintRu: "Охватите все основные области навыков, покажите прогресс от базовых до стратегических и включите разные форматы.",
            hintKk: "Барлық негізгі дағды салаларын қамтыңыз, негізгіден стратегиялыққа дейінгі прогрессті көрсетіңіз және әр түрлі форматтарды қосыңыз (жазбаша, бейне, аудио, кейс-стадиялар).",
            xp: 20
          }
        ]
      }
    ]
  },
};