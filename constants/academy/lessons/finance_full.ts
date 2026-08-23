// ============================================
// Учебный контент планеты «Finance & Investing» (финансовая грамотность) —
// готовый учебный курс Академии Novex. Подключается в constants/academy/catalog.ts как одна из планет и
// показывается на странице /learn для соответствующего робота-наставника.
// Одна запись = один класс (ключ вида "Finance & Investing_8"..._12):
// введение + список секций, где у каждой секции — теория на трёх языках,
// формулы, термины, разобранные примеры и практические задачи.
// ============================================
import type { LessonContent } from '../lessonData.ts';

export const FINANCE_FULL: Record<string, LessonContent> = {
  "Finance & Investing_8": {
    planetName: "Finance & Investing",
    introduction: {
      en: "Learn the fundamentals of money management. Discover how earning, saving, and spending wisely can help you reach your goals and build a secure future.",
      ru: "Изучите основы управления деньгами. Узнайте, как разумный заработок, сбережения и расходы помогут достичь целей и построить надёжное будущее."
    },
    sections: [
      {
        title: "What is Money",
        titleRu: "Что такое деньги",
        titleKk: "Ақша дегеніміз не",
        content: "Money is a medium of exchange that people use to trade goods and services. Before money existed, people used barter — directly trading items they had for items they needed. Modern money comes in physical forms like coins and bills, and digital forms like bank balances and mobile payments.",
        contentRu: "Деньги — это средство обмена, которое люди используют для торговли товарами и услугами. До появления денег люди использовали бартер — прямой обмен имеющихся предметов на нужные. Современные деньги существуют в физической форме (монеты и банкноты) и цифровой (банковские счета и мобильные платежи).",
        contentKk: "Ақша — адамдар тауарлар мен қызметтерді алмасу үшін пайдаланатын айырбас құралы. Ақша пайда болғанға дейін адамдар бартерді — бар заттарды қажеттілеріне тікелей айырбастауды қолданды. Қазіргі ақша физикалық (монеталар мен банкноттар) және цифрлық (банк шоттары мен мобильді төлемдер) түрінде болады.",
        keyFormulas: [
          {
            formula: "Money = Medium of Exchange + Store of Value + Unit of Account",
            formulaRu: "Деньги = Средство обмена + Средство накопления + Единица учёта",
            formulaKk: "Ақша = Айырбас құралы + Жинақтау құралы + Есеп бірлігі",
            description: "The three core functions that define money",
            descriptionRu: "Три основные функции, определяющие деньги",
            descriptionKk: "Ақшаны анықтайтын үш негізгі функция"
          }
        ],
        solvedExamples: [
          {
            question: "A farmer has 10 kg of wheat and needs shoes. A shoemaker wants rice, not wheat. Explain why money solves this problem.",
            questionRu: "У фермера 10 кг пшеницы, и ему нужна обувь. Сапожнику нужен рис, а не пшеница. Объясните, как деньги решают эту проблему.",
            questionKk: "Фермерде 10 кг бидай бар, оған аяқ киім керек. Аяқ киім шеберіне бидай емес, күріш керек. Ақша бұл мәселені қалай шешетінін түсіндіріңіз.",
            steps: [
              { en: "Without money, the farmer must find someone who wants wheat AND has shoes — this is called the 'double coincidence of wants' problem.", ru: "Без денег фермер должен найти того, кто хочет пшеницу И имеет обувь — это называется проблемой 'двойного совпадения желаний'.", kk: "Ақшасыз фермер бидай қалайтын ЖӘНЕ аяқ киімі бар адамды табуы керек — бұл 'қажеттіліктердің қос сәйкестігі' мәселесі деп аталады." },
              { en: "With money, the farmer sells wheat to anyone, then uses the money to buy shoes from the shoemaker. Money eliminates the need for a direct match.", ru: "С деньгами фермер продаёт пшеницу кому угодно, а затем покупает обувь у сапожника. Деньги устраняют необходимость прямого совпадения.", kk: "Ақшамен фермер бидайды кез келген адамға сатып, содан кейін аяқ киім шеберінен аяқ киім сатып алады. Ақша тікелей сәйкестік қажеттілігін жояды." }
            ],
            answer: "Money acts as a medium of exchange, letting the farmer sell wheat to anyone and use the proceeds to buy shoes, solving the double coincidence of wants problem.",
            answerRu: "Деньги выступают средством обмена, позволяя фермеру продать пшеницу кому угодно и на вырученные деньги купить обувь, решая проблему двойного совпадения желаний.",
            answerKk: "Ақша айырбас құралы ретінде фермерге бидайды кез келген адамға сатып, түскен ақшаға аяқ киім сатып алуға мүмкіндік береді, сөйтіп қажеттіліктердің қос сәйкестігі мәселесін шешеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name the three functions of money.",
            questionRu: "Назовите три функции денег.",
            questionKk: "Ақшаның үш функциясын атаңыз.",
            answer: "Medium of exchange, store of value, and unit of account.",
            answerRu: "Средство обмена, средство сбережения и мера стоимости.",
            answerKk: "Айырбас құралы, құн сақтау құралы және есеп бірлігі.",
            hint: "Think about what money lets you do: trade, save, and measure.",
            hintRu: "Подумайте, что деньги позволяют делать: торговать, сохранять и измерять.",
            hintKk: "Ақша не істеуге мүмкіндік беретінін ойлаңыз: сауда жасау, сақтау және өлшеу.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Why is a diamond not ideal as everyday money, even though it is valuable?",
            questionRu: "Почему бриллиант не идеален как повседневные деньги, хотя он ценный?",
            questionKk: "Алмас неге күнделікті ақша ретінде идеалды емес, ол бағалы болса да?",
            answer: "Diamonds are not easily divisible into smaller units, are hard to verify for authenticity, and their value varies based on cut, clarity, and size — making them poor as a unit of account.",
            answerRu: "Бриллианты трудно разделить на мелкие части, их подлинность сложно проверить, а стоимость зависит от огранки, чистоты и размера — всё это делает их непригодными в качестве меры стоимости.",
            answerKk: "Алмастарды ұсақ бөліктерге бөлу қиын, олардың шынайылығын тексеру қиын, ал құны огранкаға, тазалығы мен өлшеміне байланысты өзгереді — сондықтан олар есеп бірлігі ретінде жарамсыз.",
            hint: "Think about whether you can make change with a diamond.",
            hintRu: "Подумайте, можно ли дать сдачу бриллиантом.",
            hintKk: "Алмазбен қайтарым бере алатыныңызды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In 2009, Zimbabwe abandoned its own currency due to hyperinflation and started using the US dollar. Using the three functions of money, explain which function failed first and why.",
            questionRu: "В 2009 году Зимбабве отказалась от своей валюты из-за гиперинфляции и перешла на доллар США. Используя три функции денег, объясните, какая функция отказала первой и почему.",
            questionKk: "2009 жылы Зимбабве гиперинфляция салдарынан өз валютасынан бас тартып, АҚШ долларына көшті. Ақшаның үш функциясын қолданып, қай функция бірінші бұзылғанын және неге екенін түсіндіріңіз.",
            answer: "Store of value failed first — rapid price increases meant money saved today lost most of its purchasing power within hours, causing people to lose trust and spend immediately or switch to foreign currencies.",
            answerRu: "Первой отказала функция средства сбережения — из-за быстрого роста цен деньги, отложенные сегодня, за считанные часы теряли большую часть покупательной способности, поэтому люди теряли доверие и старались сразу потратить их или перейти на иностранные валюты.",
            answerKk: "Алдымен құн сақтау функциясы бұзылды — бағаның күрт өсуінен бүгін жиналған ақша сатып алу қабілетінің көп бөлігін бірнеше сағат ішінде жоғалтты, сондықтан адамдар сенімін жоғалтып, ақшаны бірден жұмсауға немесе шетел валюталарына көшуге тырысты.",
            xp: 20
          }
        ]
      },
      {
        title: "Needs vs Wants",
        titleRu: "Потребности и желания",
        titleKk: "Қажеттіліктер мен тілектер",
        content: "Needs are things you must have to survive and function, like food, shelter, clothing, and healthcare. Wants are things that are nice to have but not essential, like video games, designer clothes, or eating at restaurants. Understanding the difference helps you make smarter spending decisions.",
        contentRu: "Потребности — это то, что необходимо для выживания: еда, жильё, одежда и медицина. Желания — это приятные, но не обязательные вещи: видеоигры, дизайнерская одежда или ужин в ресторане. Понимание разницы помогает тратить деньги разумнее.",
        contentKk: "Қажеттіліктер — тіршілік ету үшін қажет нәрселер: тамақ, баспана, киім және медицина. Тілектер — жақсы, бірақ міндетті емес нәрселер: видеоойындар, дизайнерлік киім немесе мейрамханада тамақтану. Айырмашылықты түсіну ақшаны ақылды жұмсауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Smart Spending = Needs First + Wants with Remaining Money",
            formulaRu: "Разумные траты = Сначала потребности + Желания на оставшиеся деньги",
            formulaKk: "Ақылды жұмсау = Алдымен қажеттіліктер + Қалған ақшаға қалаулар",
            description: "Always cover necessities before spending on luxuries",
            descriptionRu: "Сначала покрывайте необходимое, затем тратьте на удовольствия",
            descriptionKk: "Алдымен қажеттіліктерді жабыңыз, содан кейін қалған ақшаны тілектерге жұмсаңыз"
          }
        ],
        solvedExamples: [
          {
            question: "A student has $50 for the week. She needs $30 for school lunch and bus fare. She wants a $25 book. Can she afford both? What should she prioritize?",
            questionRu: "У ученицы $50 на неделю. Ей нужно $30 на обеды и проезд. Она хочет книгу за $25. Может ли она позволить и то, и другое? Что приоритетнее?",
            questionKk: "Оқушыда аптаға $50 бар. Оған мектеп түскі асы мен жол жүру ақысына $30 керек. Ол $25-тік кітап алғысы келеді. Екеуіне де жете ме? Нені басымдық ету керек?",
            steps: [
              { en: "Needs cost $30. Remaining money: $50 - $30 = $20.", ru: "Потребности стоят $30. Остаток: $50 - $30 = $20.", kk: "Қажеттіліктер $30 тұрады. Қалдық: $50 - $30 = $20." },
              { en: "The book costs $25 but only $20 remains after needs. She cannot afford both and should prioritize her needs.", ru: "Книга стоит $25, но после потребностей осталось только $20. Она не может позволить оба и должна приоритизировать потребности.", kk: "Кітап $25 тұрады, бірақ қажеттіліктерден кейін тек $20 қалды. Ол екеуіне де мүмкіндік жоқ, қажеттіліктерді басымдық ету керек." }
            ],
            answer: "No, she cannot afford both. After covering $30 in needs, only $20 remains, which is $5 short of the $25 book. Needs come first.",
            answerRu: "Нет, она не может позволить себе и то, и другое. После покрытия потребностей за $30 остаётся только $20 — это на $5 меньше стоимости книги за $25. Потребности — прежде всего.",
            answerKk: "Жоқ, ол екеуін де ала алмайды. Қажеттіліктерге $30 жұмсағаннан кейін тек $20 қалады — бұл $25-тік кітаптан $5 кем. Қажеттіліктер бірінші орында."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Classify each item as a need or want: winter jacket, smartphone case with gems, bread, movie ticket.",
            questionRu: "Классифицируйте как потребность или желание: зимняя куртка, чехол для телефона с камнями, хлеб, билет в кино.",
            questionKk: "Қажеттілік немесе тілек ретінде жіктеңіз: қысқы күрте, тастармен телефон қабы, нан, кино билеті.",
            answer: "Needs: winter jacket, bread. Wants: gem smartphone case, movie ticket.",
            answerRu: "Потребности: зимняя куртка, хлеб. Желания: чехол для телефона с камнями, билет в кино.",
            answerKk: "Қажеттіліктер: қысқы күрте, нан. Тілектер: тастармен телефон қабы, кино билеті.",
            hint: "Ask yourself: can I survive without this?",
            hintRu: "Спросите себя: смогу ли я выжить без этого?",
            hintKk: "Өзіңізге сұрақ қойыңыз: мен бұлсыз өмір сүре аламын ба?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You receive $100 as a gift. Your shoes have holes (new shoes cost $45), and you want a video game for $60. How would you allocate the money?",
            questionRu: "Вы получили $100 в подарок. Ваши ботинки порвались (новые стоят $45), и вы хотите видеоигру за $60. Как распределить деньги?",
            questionKk: "Сіз сыйлыққа $100 алдыңыз. Аяқ киіміңіз тесілген (жаңасы $45), сіз $60-тік видеоойын алғысыз. Ақшаны қалай бөлесіз?",
            answer: "Buy the shoes first ($45 need), leaving $55 — not enough for the $60 game. Save the remaining $55 or wait until you have $5 more for the game.",
            answerRu: "Сначала купите обувь ($45 — потребность), останется $55 — этого не хватит на игру за $60. Сохраните оставшиеся $55 или подождите, пока накопите ещё $5 на игру.",
            answerKk: "Алдымен аяқ киім сатып алыңыз ($45 — қажеттілік), $55 қалады — бұл $60-тік ойынға жетпейді. Қалған $55-ты сақтаңыз немесе ойынға тағы $5 жинағанша күтіңіз.",
            hint: "Cover the need first, then see what is left.",
            hintRu: "Сначала покройте потребность, затем посмотрите остаток.",
            hintKk: "Алдымен қажеттілікті жабыңыз, содан кейін қалғанын қараңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A family earns $2,000/month. Their needs (rent $800, food $400, utilities $200, transport $150) total $1,550. They want a streaming subscription ($15), gym membership ($40), and a vacation fund ($200/month). Which wants can they afford and in what priority order?",
            questionRu: "Семья зарабатывает $2000/мес. Потребности (аренда $800, еда $400, коммунальные $200, транспорт $150) = $1550. Они хотят подписку ($15), спортзал ($40) и фонд отпуска ($200/мес). Какие желания они могут позволить и в каком порядке?",
            questionKk: "Отбасы айына $2000 табады. Қажеттіліктер (жалға $800, тамақ $400, коммуналдық $200, көлік $150) = $1550. Олар ағынды қызмет ($15), спортзал ($40) және демалыс қоры (айына $200) алғысы келеді. Қай тілектерді орындай алады және қандай кезекпен?",
            answer: "Remaining: $2,000 - $1,550 = $450. They can afford all three wants ($15 + $40 + $200 = $255), with $195 left for savings. Priority: vacation fund (long-term goal), gym (health), then streaming (entertainment).",
            answerRu: "Остаток: $2,000 - $1,550 = $450. Они могут позволить все три желания ($15 + $40 + $200 = $255), и $195 останется на сбережения. Приоритет: фонд отпуска (долгосрочная цель), спортзал (здоровье), затем подписка (развлечения).",
            answerKk: "Қалдық: $2,000 - $1,550 = $450. Олар үш тілекті де орындай алады ($15 + $40 + $200 = $255), жинаққа $195 қалады. Кезектілік: демалыс қоры (ұзақ мерзімді мақсат), спортзал (денсаулық), содан кейін ағынды қызмет (ойын-сауық).",
            xp: 20
          }
        ]
      },
      {
        title: "Earning Money",
        titleRu: "Заработок денег",
        titleKk: "Ақша табу",
        content: "People earn money by providing value through labor, skills, or creativity. Active income comes from directly working, like a job or freelancing. Passive income comes from assets that generate money with minimal ongoing effort, like renting property or earning interest on savings.",
        contentRu: "Люди зарабатывают деньги, создавая ценность через труд, навыки или творчество. Активный доход приходит от непосредственной работы — должности или фриланса. Пассивный доход поступает от активов, приносящих деньги с минимальными усилиями — аренда или проценты по вкладам.",
        contentKk: "Адамдар еңбек, дағдылар немесе шығармашылық арқылы құндылық жасап ақша табады. Белсенді табыс тікелей жұмыстан — лауазым немесе фрилансерліктен келеді. Пассивті табыс аз күш жұмсаумен ақша әкелетін активтерден — жалға беру немесе салымдар бойынша пайыздардан келеді.",
        keyFormulas: [
          {
            formula: "Earnings = Hours Worked × Hourly Rate",
            formulaRu: "Заработок = Отработанные часы × Почасовая ставка",
            formulaKk: "Табыс = Жұмыс істеген сағат × Сағаттық ставка",
            description: "Basic calculation for active income from hourly work",
            descriptionRu: "Базовый расчёт активного дохода при почасовой работе",
            descriptionKk: "Сағаттық жұмыстан белсенді табысты есептеу"
          },
          {
            formula: "Total Income = Active Income + Passive Income",
            formulaRu: "Общий доход = Активный доход + Пассивный доход",
            formulaKk: "Жалпы табыс = Белсенді табыс + Пассивті табыс",
            description: "Your total earnings combine both types of income",
            descriptionRu: "Общий заработок объединяет оба вида дохода",
            descriptionKk: "Жалпы табыс табыстың екі түрін біріктіреді"
          }
        ],
        solvedExamples: [
          {
            question: "A student tutors math for $15/hour and works 8 hours per week. How much does she earn in a month (4 weeks)?",
            questionRu: "Ученица даёт уроки математики за $15/час и работает 8 часов в неделю. Сколько она заработает за месяц (4 недели)?",
            questionKk: "Оқушы математикадан $15/сағат репетиторлық жасайды және аптасына 8 сағат жұмыс істейді. Айына (4 апта) қанша табады?",
            steps: [
              { en: "Weekly earnings: $15 × 8 hours = $120 per week.", ru: "Недельный заработок: $15 × 8 часов = $120 в неделю.", kk: "Апталық табыс: $15 × 8 сағат = аптасына $120." },
              { en: "Monthly earnings: $120 × 4 weeks = $480 per month.", ru: "Месячный заработок: $120 × 4 недели = $480 в месяц.", kk: "Айлық табыс: $120 × 4 апта = айына $480." }
            ],
            answer: "$480 per month",
            answerRu: "$480 в месяц",
            answerKk: "айына $480"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A student earns $10/hour mowing lawns and works 5 hours. How much does he earn?",
            questionRu: "Ученик стрижёт газоны за $10/час и работает 5 часов. Сколько он заработает?",
            questionKk: "Оқушы шөп шабу үшін сағатына $10 алады және 5 сағат жұмыс істейді. Қанша табады?",
            answer: "$50",
            answerRu: "$50",
            answerKk: "$50",
            hint: "Multiply the hourly rate by hours worked.",
            hintRu: "Умножьте часовую ставку на отработанные часы.",
            hintKk: "Сағаттық мөлшерлемені жұмыс істелген сағатқа көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A teenager earns $12/hour at a café (20 hrs/week) and also earns $30/month from selling digital art online. What is her total monthly income?",
            questionRu: "Подросток зарабатывает $12/час в кафе (20 ч/нед) и $30/мес от продажи цифрового искусства. Каков общий месячный доход?",
            questionKk: "Жасөспірім кафеде сағатына $12 табады (аптасына 20 сағат) және цифрлық өнер сатудан айына $30 табады. Жалпы айлық табысы қанша?",
            answer: "$12 × 20 × 4 = $960 (active) + $30 (passive) = $990/month",
            answerRu: "$12 × 20 × 4 = $960 (активный) + $30 (пассивный) = $990/мес",
            answerKk: "$12 × 20 × 4 = $960 (белсенді) + $30 (пассивті) = айына $990",
            hint: "Calculate weekly active income first, multiply by 4, then add passive income.",
            hintRu: "Сначала рассчитайте недельный активный доход, умножьте на 4, затем прибавьте пассивный доход.",
            hintKk: "Алдымен апталық белсенді табысты есептеп, 4-ке көбейтіңіз, содан кейін пассивті табысты қосыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Two students each want to earn $600/month. Student A tutors for $20/hour. Student B sells handmade jewelry: each piece costs $5 to make and sells for $15. How many hours must A work, and how many pieces must B sell?",
            questionRu: "Два ученика хотят зарабатывать $600/мес. Ученик А даёт репетиторство за $20/час. Ученик Б продаёт украшения: себестоимость $5, цена $15. Сколько часов нужно А, и сколько изделий нужно Б?",
            questionKk: "Екі оқушы айына $600 табағысы келеді. А оқушы $20/сағат репетиторлық жасайды. Б оқушы зергерлік бұйымдар сатады: өзіндік құны $5, бағасы $15. А қанша сағат жұмыс істеуі керек, Б қанша бұйым сатуы керек?",
            answer: "Student A: $600 ÷ $20 = 30 hours/month. Student B: profit per piece = $15 - $5 = $10, so $600 ÷ $10 = 60 pieces/month.",
            answerRu: "Ученик А: $600 ÷ $20 = 30 часов в месяц. Ученик Б: прибыль с одного изделия = $15 - $5 = $10, значит $600 ÷ $10 = 60 изделий в месяц.",
            answerKk: "А оқушы: $600 ÷ $20 = айына 30 сағат. Б оқушы: бір бұйымнан пайда = $15 - $5 = $10, сондықтан $600 ÷ $10 = айына 60 бұйым.",
            xp: 20
          }
        ]
      },
      {
        title: "Saving Basics",
        titleRu: "Основы сбережений",
        titleKk: "Жинақтау негіздері",
        content: "Saving means setting aside a portion of your income for future use instead of spending it all now. The 'pay yourself first' principle means saving money before spending on anything else. Even small amounts saved regularly can grow into significant sums over time through consistency.",
        contentRu: "Сбережение — это откладывание части дохода на будущее вместо того, чтобы тратить всё сейчас. Принцип 'заплати сначала себе' означает сбережение до любых расходов. Даже небольшие суммы при регулярном откладывании вырастают в значительные благодаря постоянству.",
        contentKk: "Жинақтау — табыстың бір бөлігін бәрін қазір жұмсаудың орнына болашаққа сақтау. 'Алдымен өзіңе төле' қағидасы кез келген шығыннан бұрын ақша жинауды білдіреді. Тұрақты түрде жинақталған кішкентай сомалар да уақыт өте келе елеулі сомаларға айналады.",
        keyFormulas: [
          {
            formula: "Savings = Income - Expenses",
            formulaRu: "Сбережения = Доход - Расходы",
            formulaKk: "Жинақ = Табыс - Шығыстар",
            description: "What you keep is what you earn minus what you spend",
            descriptionRu: "Что вы сохраняете — это заработок минус расходы",
            descriptionKk: "Сіз сақтайтын нәрсе — табысыңыз минус шығындарыңыз"
          },
          {
            formula: "Monthly Savings Goal = Target Amount ÷ Number of Months",
            formulaRu: "Месячная цель накоплений = Целевая сумма ÷ Количество месяцев",
            formulaKk: "Айлық жинақ мақсаты = Мақсатты сома ÷ Айлар саны",
            description: "Break a big savings goal into manageable monthly amounts",
            descriptionRu: "Разделите большую цель на посильные ежемесячные суммы",
            descriptionKk: "Үлкен мақсатты қолжетімді айлық сомаларға бөліңіз"
          }
        ],
        solvedExamples: [
          {
            question: "A student earns $200/month from a part-time job and wants to save for a $480 laptop. If she saves 20% of her income each month, how long will it take?",
            questionRu: "Ученица зарабатывает $200/мес на подработке и хочет накопить на ноутбук за $480. Если она откладывает 20% дохода, сколько времени потребуется?",
            questionKk: "Оқушы жартылай жұмыстан айына $200 табады және $480-тік ноутбукқа жинағысы келеді. Табысының 20%-ін жинаса, қанша уақыт кетеді?",
            steps: [
              { en: "Monthly savings: $200 × 20% = $200 × 0.20 = $40/month.", ru: "Ежемесячные сбережения: $200 × 20% = $200 × 0,20 = $40/мес.", kk: "Айлық жинақ: $200 × 20% = $200 × 0,20 = айына $40." },
              { en: "Time needed: $480 ÷ $40 = 12 months.", ru: "Необходимое время: $480 ÷ $40 = 12 месяцев.", kk: "Қажетті уақыт: $480 ÷ $40 = 12 ай." }
            ],
            answer: "12 months",
            answerRu: "12 месяцев",
            answerKk: "12 ай"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You earn $50/week and save $10/week. How much will you have saved after 6 weeks?",
            questionRu: "Вы зарабатываете $50/нед и откладываете $10/нед. Сколько накопите за 6 недель?",
            questionKk: "Сіз аптасына $50 табасыз және $10 жинайсыз. 6 аптада қанша жинайсыз?",
            answer: "$60",
            answerRu: "$60",
            answerKk: "$60",
            hint: "Multiply weekly savings by the number of weeks.",
            hintRu: "Умножьте еженедельные сбережения на количество недель.",
            hintKk: "Апталық жинақты апталар санына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student wants to buy a $150 bicycle in 5 months. She currently saves $20/month. Will she reach her goal? If not, how much more per month does she need?",
            questionRu: "Ученица хочет купить велосипед за $150 через 5 месяцев. Она копит $20/мес. Достигнет ли она цели? Если нет, сколько ещё нужно в месяц?",
            questionKk: "Оқушы 5 айда $150-лік велосипед алғысы келеді. Ол айына $20 жинайды. Мақсатына жете ме? Болмаса, айына тағы қанша керек?",
            answer: "$20 × 5 = $100, which is $50 short. She needs $150 ÷ 5 = $30/month, so $10 more per month.",
            answerRu: "$20 × 5 = $100, что на $50 меньше цели. Ей нужно $150 ÷ 5 = $30/мес, то есть на $10 больше в месяц.",
            answerKk: "$20 × 5 = $100, бұл мақсаттан $50 кем. Оған $150 ÷ 5 = айына $30 керек, яғни айына тағы $10.",
            hint: "Calculate total savings at current rate, then compare to the goal.",
            hintRu: "Рассчитайте накопления при текущей ставке, сравните с целью.",
            hintKk: "Ағымдағы мөлшерлемемен жалпы жинақты есептеп, мақсатпен салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A family earns $3,000/month with $2,400 in expenses. They want to save $3,600 for a vacation and $1,200 for an emergency fund simultaneously. If they split their savings equally between both goals, how many months until each goal is reached?",
            questionRu: "Семья зарабатывает $3000/мес с расходами $2400. Они хотят одновременно копить $3600 на отпуск и $1200 на резервный фонд, деля сбережения поровну. Через сколько месяцев каждая цель будет достигнута?",
            questionKk: "Отбасы айына $3000 табады, шығындары $2400. Олар бір мезгілде демалысқа $3600 және төтенше жағдай қорына $1200 жинағысы келеді, жинақты тең бөледі. Әр мақсат қанша айда орындалады?",
            answer: "Monthly savings: $3,000 - $2,400 = $600, split = $300 each. Vacation: $3,600 ÷ $300 = 12 months. Emergency fund: $1,200 ÷ $300 = 4 months.",
            answerRu: "Ежемесячные сбережения: $3,000 - $2,400 = $600, поровну = по $300. Отпуск: $3,600 ÷ $300 = 12 месяцев. Резервный фонд: $1,200 ÷ $300 = 4 месяца.",
            answerKk: "Айлық жинақ: $3,000 - $2,400 = $600, теңдей бөледі = әрқайсысына $300. Демалыс: $3,600 ÷ $300 = 12 ай. Төтенше жағдай қоры: $1,200 ÷ $300 = 4 ай.",
            xp: 20
          }
        ]
      },
      {
        title: "Simple Budgeting",
        titleRu: "Простое бюджетирование",
        titleKk: "Қарапайым бюджеттеу",
        content: "A budget is a plan for how you will spend and save your money over a specific period. The 50/30/20 rule is a popular budgeting guideline: 50% for needs, 30% for wants, and 20% for savings. Tracking your spending helps you identify where money goes and find areas to cut back.",
        contentRu: "Бюджет — это план расходов и сбережений на определённый период. Правило 50/30/20 — популярный ориентир: 50% на потребности, 30% на желания и 20% на сбережения. Отслеживание расходов помогает понять, куда уходят деньги, и найти, на чём сэкономить.",
        contentKk: "Бюджет — белгілі бір кезеңге ақшаны қалай жұмсау және жинау жоспары. 50/30/20 ережесі танымал нұсқаулық: 50% қажеттіліктерге, 30% тілектерге және 20% жинақтарға. Шығындарды бақылау ақшаның қайда кететінін анықтауға және үнемдеу тұстарын табуға көмектеседі.",
        keyFormulas: [
          {
            formula: "50/30/20 Rule: Needs (50%) + Wants (30%) + Savings (20%) = 100% of Income",
            formulaRu: "Правило 50/30/20: Потребности (50%) + Желания (30%) + Сбережения (20%) = 100% дохода",
            formulaKk: "50/30/20 ережесі: Қажеттіліктер (50%) + Қалаулар (30%) + Жинақ (20%) = табыстың 100%",
            description: "A simple framework for allocating your income",
            descriptionRu: "Простая схема распределения дохода",
            descriptionKk: "Табысты бөлудің қарапайым схемасы"
          }
        ],
        solvedExamples: [
          {
            question: "A student earns $500/month. Using the 50/30/20 rule, how much should go to needs, wants, and savings?",
            questionRu: "Ученик зарабатывает $500/мес. По правилу 50/30/20, сколько на потребности, желания и сбережения?",
            questionKk: "Оқушы айына $500 табады. 50/30/20 ережесі бойынша қажеттіліктерге, тілектерге және жинақтарға қанша бөлінеді?",
            steps: [
              { en: "Needs: $500 × 50% = $250. Wants: $500 × 30% = $150.", ru: "Потребности: $500 × 50% = $250. Желания: $500 × 30% = $150.", kk: "Қажеттіліктер: $500 × 50% = $250. Тілектер: $500 × 30% = $150." },
              { en: "Savings: $500 × 20% = $100. Total: $250 + $150 + $100 = $500.", ru: "Сбережения: $500 × 20% = $100. Итого: $250 + $150 + $100 = $500.", kk: "Жинақтар: $500 × 20% = $100. Барлығы: $250 + $150 + $100 = $500." }
            ],
            answer: "Needs: $250, Wants: $150, Savings: $100",
            answerRu: "Потребности: $250, Желания: $150, Сбережения: $100",
            answerKk: "Қажеттіліктер: $250, Тілектер: $150, Жинақтар: $100"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Using the 50/30/20 rule, how much should you save from $200 of income?",
            questionRu: "По правилу 50/30/20, сколько нужно сберечь с $200 дохода?",
            questionKk: "$200 табыстан 50/30/20 ережесі бойынша қанша жинау керек?",
            answer: "$200 × 20% = $40",
            answerRu: "$200 × 20% = $40",
            answerKk: "$200 × 20% = $40",
            hint: "Savings is 20% of your income.",
            hintRu: "Сбережения — это 20% дохода.",
            hintKk: "Жинақтар — табыстың 20%-і.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student earns $800/month. She spends $450 on needs and $280 on wants. Is she following the 50/30/20 rule? What adjustments should she make?",
            questionRu: "Ученица зарабатывает $800/мес. Тратит $450 на потребности и $280 на желания. Соблюдает ли она правило? Что нужно изменить?",
            questionKk: "Оқушы айына $800 табады. Қажеттіліктерге $450 және тілектерге $280 жұмсайды. Ол ережені ұстана ма? Қандай өзгерістер керек?",
            answer: "Ideal: Needs $400, Wants $240, Savings $160. She overspends by $50 on needs and $40 on wants, leaving only $70 for savings instead of $160. She should cut $90 total from needs and wants.",
            answerRu: "Идеал: Потребности $400, Желания $240, Сбережения $160. Она перерасходует $50 на потребности и $40 на желания, поэтому на сбережения остаётся только $70 вместо $160. Ей нужно сократить потребности и желания в сумме на $90.",
            answerKk: "Идеал: Қажеттіліктер $400, Тілектер $240, Жинақтар $160. Ол қажеттіліктерге $50 және тілектерге $40 артық жұмсайды, сондықтан жинаққа $160 орнына тек $70 қалады. Ол қажеттіліктер мен тілектерді жиыны $90-ға қысқартуы керек.",
            hint: "Calculate the ideal amounts first, then compare.",
            hintRu: "Сначала рассчитайте идеальные суммы, затем сравните.",
            hintKk: "Алдымен идеалды сомаларды есептеп, содан кейін салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A family of 4 earns $4,500/month. Fixed needs are: rent $1,200, groceries $600, utilities $300, insurance $200. Remaining needs and wants are flexible. Create a budget using the 50/30/20 rule and show how much flexible spending they have for wants.",
            questionRu: "Семья из 4 человек зарабатывает $4500/мес. Фиксированные потребности: аренда $1200, продукты $600, коммунальные $300, страховка $200. Составьте бюджет по правилу 50/30/20 и покажите, сколько остаётся на гибкие расходы.",
            questionKk: "4 адамдық отбасы айына $4500 табады. Тұрақты қажеттіліктер: жалға $1200, азық-түлік $600, коммуналдық $300, сақтандыру $200. 50/30/20 ережесі бойынша бюджет жасаңыз және тілектерге қанша икемді шығын қалатынын көрсетіңіз.",
            answer: "Total budget: Needs $2,250 (50%), Wants $1,350 (30%), Savings $900 (20%). Fixed needs total $2,300 — this exceeds the $2,250 needs budget by $50. They should reduce wants to $1,300 to compensate, leaving $1,300 for flexible wants spending.",
            answerRu: "Весь бюджет: Потребности $2,250 (50%), Желания $1,350 (30%), Сбережения $900 (20%). Фиксированные потребности составляют $2,300 — это на $50 превышает бюджет потребностей в $2,250. Чтобы компенсировать это, им следует сократить желания до $1,300 — останется $1,300 на гибкие расходы.",
            answerKk: "Жалпы бюджет: Қажеттіліктер $2,250 (50%), Тілектер $1,350 (30%), Жинақтар $900 (20%). Тұрақты қажеттіліктер жиыны $2,300 — бұл $2,250 қажеттіліктер бюджетінен $50 асып түседі. Орнын толтыру үшін тілектерді $1,300-ға дейін қысқарту керек — тілектерге икемді шығынға $1,300 қалады.",
            xp: 20
          }
        ]
      },
      {
        title: "Banks & Accounts",
        titleRu: "Банки и счета",
        titleKk: "Банктер мен шоттар",
        content: "Banks are financial institutions that hold your money safely and offer services like checking accounts, savings accounts, and loans. A checking account is for daily transactions, while a savings account earns interest on deposited money. Banks use the money deposited by customers to make loans to others.",
        contentRu: "Банки — финансовые учреждения, которые безопасно хранят деньги и предлагают услуги: текущие счета, сберегательные счета и кредиты. Текущий счёт — для ежедневных транзакций, сберегательный — начисляет проценты на вклад. Банки используют вклады клиентов для выдачи кредитов другим.",
        contentKk: "Банктер — ақшаңызды қауіпсіз сақтайтын және ағымдағы шоттар, жинақ шоттар мен несиелер сияқты қызметтер ұсынатын қаржы мекемелері. Ағымдағы шот күнделікті операцияларға арналған, ал жинақ шот салынған ақшаға пайыз есептейді. Банктер клиенттердің салымдарын басқаларға несие беру үшін пайдаланады.",
        keyFormulas: [
          {
            formula: "Account Balance = Deposits - Withdrawals + Interest Earned",
            formulaRu: "Баланс счёта = Пополнения - Снятия + Начисленные проценты",
            formulaKk: "Шот балансы = Салымдар - Алулар + Есептелген пайыз",
            description: "Your balance changes with every deposit, withdrawal, and interest payment",
            descriptionRu: "Баланс меняется с каждым вкладом, снятием и начислением процентов",
            descriptionKk: "Балансыңыз әрбір салым, алу және пайыз есептеумен өзгереді"
          }
        ],
        solvedExamples: [
          {
            question: "A student opens a savings account with $200. She deposits $50/month for 3 months and earns $2 total interest. She withdraws $75. What is her final balance?",
            questionRu: "Ученица открывает сберегательный счёт с $200. Она вносит $50/мес 3 месяца и получает $2 процентов. Снимает $75. Каков итоговый баланс?",
            questionKk: "Оқушы $200-мен жинақ шот ашады. 3 ай бойы айына $50 салады және $2 пайыз алады. $75 алады. Соңғы балансы қанша?",
            steps: [
              { en: "Total deposits: $200 + ($50 × 3) = $200 + $150 = $350. Add interest: $350 + $2 = $352.", ru: "Всего вкладов: $200 + ($50 × 3) = $350. Плюс проценты: $350 + $2 = $352.", kk: "Жалпы салымдар: $200 + ($50 × 3) = $350. Пайыз қосу: $350 + $2 = $352." },
              { en: "After withdrawal: $352 - $75 = $277.", ru: "После снятия: $352 - $75 = $277.", kk: "Алғаннан кейін: $352 - $75 = $277." }
            ],
            answer: "$277",
            answerRu: "$277",
            answerKk: "$277"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the main difference between a checking account and a savings account?",
            questionRu: "В чём главное различие между текущим и сберегательным счётом?",
            questionKk: "Ағымдағы шот пен жинақ шоттың негізгі айырмашылығы не?",
            answer: "A checking account is for daily transactions (spending), while a savings account earns interest and is meant for storing money you don't need immediately.",
            answerRu: "Текущий счёт предназначен для повседневных операций (трат), а сберегательный счёт приносит проценты и предназначен для хранения денег, которые не нужны прямо сейчас.",
            answerKk: "Ағымдағы шот күнделікті операцияларға (жұмсауға) арналған, ал жинақ шот пайыз әкеледі және бірден қажет емес ақшаны сақтауға арналған.",
            hint: "Think about how often you access each type.",
            hintRu: "Подумайте, как часто вы используете каждый тип.",
            hintKk: "Әр түрді қаншалықты жиі пайдаланатыныңызды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You have $500 in a savings account. You deposit $100, earn $3 interest, then withdraw $250. What is your balance?",
            questionRu: "У вас $500 на сберегательном счёте. Вы вносите $100, получаете $3 процентов, затем снимаете $250. Каков баланс?",
            questionKk: "Жинақ шотыңызда $500 бар. $100 саласыз, $3 пайыз аласыз, содан кейін $250 аласыз. Балансыңыз қанша?",
            answer: "$500 + $100 + $3 - $250 = $353",
            answerRu: "$500 + $100 + $3 - $250 = $353",
            answerKk: "$500 + $100 + $3 - $250 = $353",
            hint: "Add deposits and interest, then subtract withdrawals.",
            hintRu: "Прибавьте вклады и проценты, затем вычтите снятия.",
            hintKk: "Салымдар мен пайызды қосыңыз, содан кейін алуларды шегеріңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Bank A offers a savings account with 2% annual interest. Bank B offers 1.5% but has no monthly fees, while Bank A charges $5/month. If you deposit $1,000 and leave it for one year, which bank gives you more money at the end?",
            questionRu: "Банк А предлагает 2% годовых, но берёт $5/мес комиссии. Банк Б — 1.5% без комиссий. Если вложить $1000 на год, какой банк выгоднее?",
            questionKk: "А банкі 2% жылдық пайыз ұсынады, бірақ айына $5 комиссия алады. Б банкі — 1,5% комиссиясыз. $1000 салып, бір жыл қалдырсаңыз, қай банк тиімдірек?",
            answer: "Bank A: $1,000 × 1.02 = $1,020 - ($5 × 12) = $1,020 - $60 = $960. Bank B: $1,000 × 1.015 = $1,015. Bank B is better by $55.",
            answerRu: "Банк А: $1,000 × 1.02 = $1,020 - ($5 × 12) = $1,020 - $60 = $960. Банк Б: $1,000 × 1.015 = $1,015. Банк Б выгоднее на $55.",
            answerKk: "А банкі: $1,000 × 1.02 = $1,020 - ($5 × 12) = $1,020 - $60 = $960. Б банкі: $1,000 × 1.015 = $1,015. Б банкі $55 тиімдірек.",
            xp: 20
          }
        ]
      },
      {
        title: "Interest Basics",
        titleRu: "Основы процентов",
        titleKk: "Пайыз негіздері",
        content: "Interest is the cost of borrowing money or the reward for saving it. When you save money in a bank, the bank pays you interest. When you borrow money, you pay interest to the lender. Simple interest is calculated only on the original amount (principal) and does not compound.",
        contentRu: "Процент — это плата за заём денег или вознаграждение за их хранение. Когда вы храните деньги в банке, банк платит вам проценты. Когда берёте кредит, вы платите проценты кредитору. Простой процент рассчитывается только на первоначальную сумму (основной капитал) и не накапливается.",
        contentKk: "Пайыз — ақша қарыз алудың құны немесе оны сақтаудың сыйақысы. Банкте ақша сақтағанда банк сізге пайыз төлейді. Ақша қарыз алғанда сіз несие берушіге пайыз төлейсіз. Жай пайыз тек бастапқы сомаға (негізгі капиталға) есептеледі және жинақталмайды.",
        keyFormulas: [
          {
            formula: "Simple Interest = Principal × Rate × Time",
            formulaRu: "Простой процент = Основная сумма × Ставка × Время",
            formulaKk: "Жай пайыз = Негізгі сома × Ставка × Уақыт",
            description: "Calculate interest earned or owed on the original amount",
            descriptionRu: "Расчёт процентов на первоначальную сумму",
            descriptionKk: "Бастапқы сомаға пайызды есептеу"
          },
          {
            formula: "Total Amount = Principal + Interest",
            formulaRu: "Итоговая сумма = Основная сумма + Проценты",
            formulaKk: "Жалпы сома = Негізгі сома + Пайыз",
            description: "The final amount including the original plus interest earned",
            descriptionRu: "Итоговая сумма с учётом основного капитала и процентов",
            descriptionKk: "Негізгі капитал мен пайызды қосқандағы соңғы сома"
          }
        ],
        solvedExamples: [
          {
            question: "You deposit $1,000 in a savings account with 5% simple annual interest. How much interest do you earn after 3 years? What is the total amount?",
            questionRu: "Вы вкладываете $1000 под 5% простых годовых. Сколько процентов за 3 года? Какова итоговая сумма?",
            questionKk: "Сіз $1000-ды 5% жай жылдық пайызбен саласыз. 3 жылда қанша пайыз табасыз? Жалпы сома қанша?",
            steps: [
              { en: "Interest = $1,000 × 0.05 × 3 = $150.", ru: "Проценты = $1000 × 0,05 × 3 = $150.", kk: "Пайыз = $1000 × 0,05 × 3 = $150." },
              { en: "Total = $1,000 + $150 = $1,150.", ru: "Итого = $1000 + $150 = $1150.", kk: "Барлығы = $1000 + $150 = $1150." }
            ],
            answer: "Interest: $150. Total amount: $1,150.",
            answerRu: "Проценты: $150. Итоговая сумма: $1,150.",
            answerKk: "Пайыз: $150. Жалпы сома: $1,150."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You save $500 at 4% simple annual interest for 1 year. How much interest do you earn?",
            questionRu: "Вы копите $500 под 4% простых годовых 1 год. Сколько процентов заработаете?",
            questionKk: "Сіз $500-ді 4% жай жылдық пайызбен 1 жылға сақтайсыз. Қанша пайыз табасыз?",
            answer: "$500 × 0.04 × 1 = $20",
            answerRu: "$500 × 0.04 × 1 = $20",
            answerKk: "$500 × 0.04 × 1 = $20",
            hint: "Use the formula: Principal × Rate × Time.",
            hintRu: "Используйте формулу: Капитал × Ставка × Время.",
            hintKk: "Формуланы қолданыңыз: Капитал × Мөлшерлеме × Уақыт.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student deposits $800 at 3% simple annual interest. How much total money will she have after 5 years?",
            questionRu: "Ученица кладёт $800 под 3% простых годовых. Сколько всего денег будет через 5 лет?",
            questionKk: "Оқушы $800-ді 3% жай жылдық пайызбен салады. 5 жылдан кейін жалпы қанша ақша болады?",
            answer: "Interest = $800 × 0.03 × 5 = $120. Total = $800 + $120 = $920.",
            answerRu: "Проценты = $800 × 0.03 × 5 = $120. Итого = $800 + $120 = $920.",
            answerKk: "Пайыз = $800 × 0.03 × 5 = $120. Барлығы = $800 + $120 = $920.",
            hint: "Find the interest first, then add it to the principal.",
            hintRu: "Сначала найдите проценты, затем прибавьте к основной сумме.",
            hintKk: "Алдымен пайызды тауып, негізгі сомаға қосыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You borrow $2,000 at 6% simple annual interest for 4 years. Your friend borrows $3,000 at 4% for 3 years. Who pays more total interest and by how much?",
            questionRu: "Вы берёте $2000 под 6% простых на 4 года. Друг берёт $3000 под 4% на 3 года. Кто платит больше процентов и на сколько?",
            questionKk: "Сіз $2000-ды 6% жай пайызбен 4 жылға аласыз. Досыңыз $3000-ды 4%-бен 3 жылға алады. Кім көп пайыз төлейді және қанша айырмашылық?",
            answer: "You: $2,000 × 0.06 × 4 = $480. Friend: $3,000 × 0.04 × 3 = $360. You pay $120 more in interest.",
            answerRu: "Вы: $2,000 × 0.06 × 4 = $480. Друг: $3,000 × 0.04 × 3 = $360. Вы платите на $120 больше процентов.",
            answerKk: "Сіз: $2,000 × 0.06 × 4 = $480. Досыңыз: $3,000 × 0.04 × 3 = $360. Сіз пайызға $120 көп төлейсіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Smart Spending",
        titleRu: "Разумные траты",
        titleKk: "Ақылды шығындар",
        content: "Smart spending means getting the most value for your money by comparing options, avoiding impulse purchases, and distinguishing between price and value. A low price does not always mean a good deal if the quality is poor. Waiting 24 hours before a non-essential purchase helps avoid buyer's remorse.",
        contentRu: "Разумные траты — это получение максимальной ценности за деньги путём сравнения вариантов, избегания импульсивных покупок и различения цены и ценности. Низкая цена не всегда означает выгодную сделку, если качество плохое. 24 часа ожидания перед необязательной покупкой помогает избежать сожаления.",
        contentKk: "Ақылды шығындар — нұсқаларды салыстыру, импульсивті сатып алулардан аулақ болу және баға мен құндылықты ажырату арқылы ақшаңыздан ең көп құндылық алу. Сапасы нашар болса, төмен баға әрқашан жақсы мәміле дегенді білдірмейді. Қажетті емес сатып алу алдында 24 сағат күту өкінуден сақтайды.",
        keyFormulas: [
          {
            formula: "Unit Price = Total Price ÷ Quantity",
            formulaRu: "Цена за единицу = Общая цена ÷ Количество",
            formulaKk: "Бірлік бағасы = Жалпы баға ÷ Саны",
            description: "Compare products by their cost per unit to find the best deal",
            descriptionRu: "Сравнивайте товары по цене за единицу для лучшей сделки",
            descriptionKk: "Ең жақсы мәмілені табу үшін өнімдерді бірлік бағасы бойынша салыстырыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "A 500g bag of rice costs $3.50 and a 750g bag costs $4.80. Which is the better deal per gram?",
            questionRu: "Пакет риса 500г стоит $3.50, а 750г — $4.80. Что выгоднее за грамм?",
            questionKk: "500г күріш $3.50, ал 750г $4.80 тұрады. Грамм үшін қайсысы тиімдірек?",
            steps: [
              { en: "500g bag: $3.50 ÷ 500 = $0.007 per gram.", ru: "500г: $3,50 ÷ 500 = $0,007 за грамм.", kk: "500г: $3,50 ÷ 500 = грамына $0,007." },
              { en: "750g bag: $4.80 ÷ 750 = $0.0064 per gram. The 750g bag is the better deal.", ru: "750г: $4,80 ÷ 750 = $0,0064 за грамм. 750г — выгоднее.", kk: "750г: $4,80 ÷ 750 = грамына $0,0064. 750г қалта тиімдірек." }
            ],
            answer: "The 750g bag at $0.0064/gram is cheaper than the 500g bag at $0.007/gram.",
            answerRu: "Пакет 750г по $0.0064/грамм дешевле, чем пакет 500г по $0.007/грамм.",
            answerKk: "Грамына $0.0064 тұратын 750г қалта грамына $0.007 тұратын 500г қалтадан арзанырақ."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A 6-pack of juice costs $4.20. What is the price per bottle?",
            questionRu: "Упаковка из 6 соков стоит $4.20. Какова цена за бутылку?",
            questionKk: "6 шырынның қаптамасы $4.20 тұрады. Бір бөтелкенің бағасы қанша?",
            answer: "$4.20 ÷ 6 = $0.70 per bottle",
            answerRu: "$4.20 ÷ 6 = $0.70 за бутылку",
            answerKk: "$4.20 ÷ 6 = бір бөтелкеге $0.70",
            hint: "Divide the total price by the number of bottles.",
            hintRu: "Разделите общую цену на количество бутылок.",
            hintKk: "Жалпы бағаны бөтелкелер санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Store A sells 12 eggs for $3.60. Store B sells 18 eggs for $5.04. Which store has the better price per egg?",
            questionRu: "Магазин А продаёт 12 яиц за $3.60. Магазин Б — 18 яиц за $5.04. Где яйца дешевле?",
            questionKk: "А дүкені 12 жұмыртқаны $3.60-қа сатады. Б дүкені 18 жұмыртқаны $5.04-ке сатады. Қай дүкенде жұмыртқа арзанырақ?",
            answer: "Store A: $3.60 ÷ 12 = $0.30/egg. Store B: $5.04 ÷ 18 = $0.28/egg. Store B is cheaper.",
            answerRu: "Магазин А: $3.60 ÷ 12 = $0.30/яйцо. Магазин Б: $5.04 ÷ 18 = $0.28/яйцо. В магазине Б дешевле.",
            answerKk: "А дүкені: $3.60 ÷ 12 = бір жұмыртқаға $0.30. Б дүкені: $5.04 ÷ 18 = бір жұмыртқаға $0.28. Б дүкенінде арзанырақ.",
            hint: "Calculate the unit price for each store.",
            hintRu: "Рассчитайте цену за единицу для каждого магазина.",
            hintKk: "Әр дүкен үшін бірлік бағасын есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You need a backpack for school. Option A costs $25 and lasts 1 year. Option B costs $60 and lasts 4 years. Option C costs $40 and lasts 2 years. Which has the lowest cost per year of use?",
            questionRu: "Вам нужен рюкзак. Вариант А: $25, служит 1 год. Б: $60, служит 4 года. В: $40, служит 2 года. У какого наименьшая стоимость в год?",
            questionKk: "Сізге мектепке рюкзак керек. А нұсқасы $25, 1 жыл қызмет етеді. Б $60, 4 жыл. В $40, 2 жыл. Қайсысының жылдық құны ең төмен?",
            answer: "A: $25/year. B: $60 ÷ 4 = $15/year. C: $40 ÷ 2 = $20/year. Option B at $15/year is the best value despite the highest upfront cost.",
            answerRu: "А: $25/год. Б: $60 ÷ 4 = $15/год. В: $40 ÷ 2 = $20/год. Вариант Б за $15/год — самый выгодный, несмотря на самую высокую начальную цену.",
            answerKk: "А: жылына $25. Б: $60 ÷ 4 = жылына $15. В: $40 ÷ 2 = жылына $20. Б нұсқасы жылына $15 — бастапқы бағасы ең жоғары болса да, ең тиімдісі.",
            xp: 20
          }
        ]
      },
      {
        title: "Charity & Giving",
        titleRu: "Благотворительность",
        titleKk: "Қайырымдылық",
        content: "Giving is the practice of sharing money, time, or resources with those in need. Charitable giving can be financial donations to organizations, volunteering time, or donating goods. Many financial plans include giving as a category because helping others is both a social responsibility and a source of personal fulfillment.",
        contentRu: "Благотворительность — это практика делиться деньгами, временем или ресурсами с нуждающимися. Она включает финансовые пожертвования организациям, волонтёрство или передачу вещей. Многие финансовые планы включают благотворительность как категорию, потому что помощь другим — это и социальная ответственность, и источник личного удовлетворения.",
        contentKk: "Қайырымдылық — мұқтаж адамдармен ақша, уақыт немесе ресурстарды бөлісу тәжірибесі. Ол ұйымдарға қаржылық қайырмалдықтарды, волонтёрлікті немесе заттар беруді қамтиды. Көптеген қаржылық жоспарлар қайырымдылықты санат ретінде қосады, өйткені басқаларға көмектесу — әлеуметтік жауапкершілік те, жеке қанағаттану көзі де.",
        keyFormulas: [
          {
            formula: "Giving Amount = Income × Giving Percentage",
            formulaRu: "Сумма пожертвования = Доход × Процент пожертвования",
            formulaKk: "Қайырымдылық сомасы = Табыс × Қайырымдылық пайызы",
            description: "A planned percentage of income dedicated to charity",
            descriptionRu: "Запланированный процент дохода на благотворительность",
            descriptionKk: "Қайырымдылыққа арналған табыстың жоспарланған пайызы"
          }
        ],
        solvedExamples: [
          {
            question: "A family decides to give 5% of their $4,000 monthly income to charity. They split it equally between two organizations. How much does each organization receive?",
            questionRu: "Семья решает отдавать 5% от $4000 ежемесячного дохода на благотворительность, поровну между двумя организациями. Сколько получит каждая?",
            questionKk: "Отбасы $4000 айлық табысының 5%-ін қайырымдылыққа беруді шешеді, екі ұйым арасында тең бөледі. Әр ұйым қанша алады?",
            steps: [
              { en: "Total giving: $4,000 × 5% = $200 per month.", ru: "Всего: $4000 × 5% = $200 в месяц.", kk: "Барлығы: $4000 × 5% = айына $200." },
              { en: "Per organization: $200 ÷ 2 = $100 each.", ru: "На организацию: $200 ÷ 2 = по $100.", kk: "Әр ұйымға: $200 ÷ 2 = $100." }
            ],
            answer: "$100 per organization per month",
            answerRu: "По $100 каждой организации в месяц",
            answerKk: "Әр ұйымға айына $100"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A student earns $80/month and donates 10%. How much does she donate?",
            questionRu: "Ученица зарабатывает $80/мес и жертвует 10%. Сколько она отдаёт?",
            questionKk: "Оқушы айына $80 табады және 10% қайырмалдық жасайды. Қанша береді?",
            answer: "$80 × 10% = $8",
            answerRu: "$80 × 10% = $8",
            answerKk: "$80 × 10% = $8",
            hint: "Multiply income by the giving percentage.",
            hintRu: "Умножьте доход на процент пожертвования.",
            hintKk: "Табысты қайырмалдық пайызына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A class of 30 students each donates $3 to a school fundraiser. The school matches 50% of what students raise. What is the total amount for charity?",
            questionRu: "30 учеников жертвуют по $3 на школьный сбор. Школа добавляет 50% от собранного. Какова итоговая сумма?",
            questionKk: "30 оқушы мектеп қоры үшін $3-тен бөледі. Мектеп жиналған сомаға 50% қосады. Жалпы сома қанша?",
            answer: "Students: 30 × $3 = $90. School match: $90 × 50% = $45. Total: $90 + $45 = $135.",
            answerRu: "Ученики: 30 × $3 = $90. Вклад школы: $90 × 50% = $45. Итого: $90 + $45 = $135.",
            answerKk: "Оқушылар: 30 × $3 = $90. Мектептің үлесі: $90 × 50% = $45. Барлығы: $90 + $45 = $135.",
            hint: "First find the student total, then calculate the school's match.",
            hintRu: "Сначала найдите сумму учеников, затем рассчитайте вклад школы.",
            hintKk: "Алдымен оқушылардың жалпы сомасын табыңыз, содан кейін мектептің үлесін есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A person earns $3,500/month and uses the 50/30/20 rule with an additional 5% for charity (taken from the wants category). Calculate the monthly allocation for needs, wants, savings, and charity.",
            questionRu: "Человек зарабатывает $3500/мес и использует правило 50/30/20 с дополнительными 5% на благотворительность (из категории желаний). Рассчитайте ежемесячное распределение.",
            questionKk: "Адам айына $3500 табады және 50/30/20 ережесін қосымша 5% қайырымдылықпен (тілектер санатынан) қолданады. Айлық бөлуді есептеңіз.",
            answer: "Needs: $3,500 × 50% = $1,750. Savings: $3,500 × 20% = $700. Charity: $3,500 × 5% = $175. Wants: $3,500 × 25% = $875 (reduced from 30% to 25%).",
            answerRu: "Потребности: $3,500 × 50% = $1,750. Сбережения: $3,500 × 20% = $700. Благотворительность: $3,500 × 5% = $175. Желания: $3,500 × 25% = $875 (снижено с 30% до 25%).",
            answerKk: "Қажеттіліктер: $3,500 × 50% = $1,750. Жинақтар: $3,500 × 20% = $700. Қайырымдылық: $3,500 × 5% = $175. Тілектер: $3,500 × 25% = $875 (30%-дан 25%-ға қысқартылды).",
            xp: 20
          }
        ]
      },
      {
        title: "Financial Goals",
        titleRu: "Финансовые цели",
        titleKk: "Қаржылық мақсаттар",
        content: "Financial goals are specific targets for what you want to achieve with your money. Short-term goals (under 1 year) might include buying a gadget, medium-term goals (1-5 years) could be saving for college, and long-term goals (5+ years) might be buying a house. SMART goals — Specific, Measurable, Achievable, Relevant, Time-bound — help you stay on track.",
        contentRu: "Финансовые цели — это конкретные ориентиры для достижения с помощью денег. Краткосрочные цели (до 1 года) — покупка гаджета, среднесрочные (1-5 лет) — накопление на обучение, долгосрочные (5+ лет) — покупка дома. SMART-цели — конкретные, измеримые, достижимые, актуальные, ограниченные по времени — помогают не сбиться с курса.",
        contentKk: "Қаржылық мақсаттар — ақшаңызбен қол жеткізгіңіз келетін нақты бағдарлар. Қысқа мерзімді мақсаттар (1 жылға дейін) гаджет сатып алу, орта мерзімді (1-5 жыл) колледжге жинау, ұзақ мерзімді (5+ жыл) үй сатып алу болуы мүмкін. SMART мақсаттар — нақты, өлшенетін, қол жетімді, өзекті, мерзімді — жолда қалуға көмектеседі.",
        keyFormulas: [
          {
            formula: "Monthly Savings Needed = Goal Amount ÷ Months Until Deadline",
            formulaRu: "Необходимые месячные накопления = Сумма цели ÷ Месяцев до срока",
            formulaKk: "Қажетті айлық жинақ = Мақсат сомасы ÷ Мерзімге дейінгі айлар",
            description: "Break any financial goal into a monthly savings target",
            descriptionRu: "Разделите любую цель на ежемесячную цель сбережений",
            descriptionKk: "Кез келген қаржылық мақсатты айлық жинақ мақсатына бөліңіз"
          }
        ],
        solvedExamples: [
          {
            question: "A student wants to save $600 for a new phone in 10 months. She currently saves $40/month. Is she on track? If not, what adjustments can she make?",
            questionRu: "Ученица хочет накопить $600 на телефон за 10 месяцев. Она копит $40/мес. Она на правильном пути? Если нет, что изменить?",
            questionKk: "Оқушы 10 айда жаңа телефонға $600 жинағысы келеді. Ол айына $40 жинайды. Ол дұрыс жолда ма? Болмаса, не өзгертуге болады?",
            steps: [
              { en: "Required monthly savings: $600 ÷ 10 = $60/month. Current savings: $40/month — she is $20/month short.", ru: "Нужно: $600 ÷ 10 = $60/мес. Сейчас: $40/мес — не хватает $20/мес.", kk: "Қажет: $600 ÷ 10 = айына $60. Қазір: айына $40 — айына $20 жетіспейді." },
              { en: "Options: increase savings by $20/month by earning more or cutting wants, OR extend the timeline to $600 ÷ $40 = 15 months.", ru: "Варианты: увеличить на $20/мес через доп. заработок или сокращение желаний, ИЛИ продлить срок до 15 месяцев.", kk: "Нұсқалар: қосымша табыс немесе тілектерді қысқарту арқылы айына $20 көбейту, НЕМЕСЕ мерзімді 15 айға ұзарту." }
            ],
            answer: "She is not on track — needs $60/month but saves $40. She can either increase monthly savings by $20 or extend the timeline to 15 months.",
            answerRu: "Она не успевает — нужно $60/мес, но она копит $40. Она может либо увеличить ежемесячные сбережения на $20, либо продлить срок до 15 месяцев.",
            answerKk: "Ол дұрыс жолда емес — айына $60 керек, бірақ ол $40 жинайды. Ол айлық жинағын $20-ға көбейте алады немесе мерзімді 15 айға ұзарта алады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You want to save $120 for a birthday gift in 6 months. How much should you save each month?",
            questionRu: "Вы хотите накопить $120 на подарок за 6 месяцев. Сколько откладывать в месяц?",
            questionKk: "Сіз 6 айда туған күн сыйлығына $120 жинағыңыз келеді. Айына қанша жинау керек?",
            answer: "$120 ÷ 6 = $20/month",
            answerRu: "$120 ÷ 6 = $20/мес",
            answerKk: "$120 ÷ 6 = айына $20",
            hint: "Divide the goal by the number of months.",
            hintRu: "Разделите цель на количество месяцев.",
            hintKk: "Мақсатты айлар санына бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Classify these goals as short-term, medium-term, or long-term: (a) Buy concert tickets next month, (b) Save for a car in 3 years, (c) Build a retirement fund, (d) Save for a summer camp in 8 months.",
            questionRu: "Классифицируйте цели: (а) Билет на концерт через месяц, (б) Накопить на авто за 3 года, (в) Пенсионный фонд, (г) Лагерь через 8 месяцев.",
            questionKk: "Мақсаттарды жіктеңіз: (а) Келесі айда концерт билеті, (б) 3 жылда көлікке жинау, (в) Зейнетақы қоры, (г) 8 айда жазғы лагерь.",
            answer: "(a) Short-term, (b) Medium-term, (c) Long-term, (d) Short-term",
            answerRu: "(а) Краткосрочная, (б) Среднесрочная, (в) Долгосрочная, (г) Краткосрочная",
            answerKk: "(а) Қысқа мерзімді, (б) Орта мерзімді, (в) Ұзақ мерзімді, (г) Қысқа мерзімді",
            hint: "Short-term: under 1 year. Medium-term: 1-5 years. Long-term: 5+ years.",
            hintRu: "Краткосрочные: до 1 года. Среднесрочные: 1-5 лет. Долгосрочные: 5+ лет.",
            hintKk: "Қысқа мерзімді: 1 жылға дейін. Орта мерзімді: 1-5 жыл. Ұзақ мерзімді: 5+ жыл.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A student has 3 goals: (1) $200 for a tablet in 4 months, (2) $1,500 for a study abroad trip in 18 months, (3) $50 for a friend's birthday in 2 months. She earns $180/month and has $2,400 in expenses over the next 18 months. Create a SMART savings plan.",
            questionRu: "У ученицы 3 цели: (1) $200 на планшет за 4 мес, (2) $1500 на поездку за 18 мес, (3) $50 на подарок за 2 мес. Она зарабатывает $180/мес, расходы $2400 за 18 мес. Составьте SMART-план.",
            questionKk: "Оқушыда 3 мақсат бар: (1) 4 айда планшетке $200, (2) 18 айда оқуға сапарға $1500, (3) 2 айда досқа сыйлыққа $50. Ол айына $180 табады, 18 айда шығындары $2400. SMART жинақ жоспарын жасаңыз.",
            answer: "Total income over 18 months: $180 × 18 = $3,240. After expenses: $3,240 - $2,400 = $840. Total goals: $1,750. She cannot afford all three. Priority plan: Goal 3 first ($25/month × 2 months), then Goal 1 ($50/month × 4 months), then remaining $590 toward Goal 2 — she needs to find $910 more through extra work or adjusting the trip budget.",
            answerRu: "Общий доход за 18 месяцев: $180 × 18 = $3,240. После расходов: $3,240 - $2,400 = $840. Всего на цели: $1,750. Она не может позволить все три. План по приоритетам: сначала Цель 3 ($25/мес × 2 месяца), затем Цель 1 ($50/мес × 4 месяца), затем оставшиеся $590 на Цель 2 — ей нужно найти ещё $910 через подработку или корректировку бюджета поездки.",
            answerKk: "18 айдағы жалпы табыс: $180 × 18 = $3,240. Шығындардан кейін: $3,240 - $2,400 = $840. Мақсаттар жиыны: $1,750. Ол үшеуіне де қол жеткізе алмайды. Кезектілік жоспары: алдымен 3-мақсат (айына $25 × 2 ай), содан кейін 1-мақсат (айына $50 × 4 ай), содан кейін қалған $590 2-мақсатқа — оған қосымша жұмыс немесе сапар бюджетін реттеу арқылы тағы $910 табу керек.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Finance & Investing_9": {
    planetName: "Finance & Investing",
    introduction: {
      en: "Deepen your financial literacy with budgeting strategies, compound interest, credit management, and economic concepts that affect your everyday decisions and future planning.",
      ru: "Углубите финансовую грамотность: стратегии бюджетирования, сложные проценты, управление кредитом и экономические концепции, влияющие на повседневные решения и планирование будущего."
    },
    sections: [
      {
        title: "Income & Expenses",
        titleRu: "Доходы и расходы",
        titleKk: "Кірістер мен шығыстар",
        content: "Income is all money coming in, including wages, allowances, and gifts. Expenses are all money going out, divided into fixed expenses (same amount each month, like rent) and variable expenses (changing amounts, like food or entertainment). Tracking both is the foundation of financial health.",
        contentRu: "Доход — все поступающие деньги: зарплата, карманные деньги, подарки. Расходы — все исходящие деньги, делятся на постоянные (одинаковая сумма каждый месяц, как аренда) и переменные (меняющиеся суммы, как еда или развлечения). Отслеживание обоих — основа финансового здоровья.",
        contentKk: "Кіріс — түсетін барлық ақша: жалақы, қалта ақша, сыйлықтар. Шығыстар — кететін барлық ақша, тұрақты (жалға алу сияқты ай сайын бірдей сома) және ауыспалы (тамақ немесе ойын-сауық сияқты өзгеретін сомалар) болып бөлінеді. Екеуін де қадағалау қаржылық денсаулықтың негізі.",
        keyFormulas: [
          {
            formula: "Net Income = Total Income - Total Expenses",
            formulaRu: "Чистый доход = Общий доход - Общие расходы",
            formulaKk: "Таза табыс = Жалпы табыс - Жалпы шығыстар",
            description: "Positive means surplus; negative means deficit",
            descriptionRu: "Положительное значит профицит; отрицательное — дефицит",
            descriptionKk: "Оң мән профицитті білдіреді; теріс — тапшылықты"
          },
          {
            formula: "Total Expenses = Fixed Expenses + Variable Expenses",
            formulaRu: "Общие расходы = Постоянные расходы + Переменные расходы",
            formulaKk: "Жалпы шығыстар = Тұрақты шығыстар + Айнымалы шығыстар",
            description: "The sum of all recurring and changing costs",
            descriptionRu: "Сумма всех постоянных и переменных затрат",
            descriptionKk: "Барлық тұрақты және ауыспалы шығындардың жиынтығы"
          }
        ],
        solvedExamples: [
          {
            question: "A student earns $600/month from a part-time job and $50 allowance. Fixed expenses: phone $30, transport $45. Variable expenses: food $120, entertainment $80. What is his net income?",
            questionRu: "Ученик зарабатывает $600/мес на подработке и $50 карманных. Постоянные расходы: телефон $30, транспорт $45. Переменные: еда $120, развлечения $80. Каков чистый доход?",
            questionKk: "Оқушы жартылай жұмыстан айына $600 және $50 қалта ақша табады. Тұрақты шығындар: телефон $30, көлік $45. Ауыспалы: тамақ $120, ойын-сауық $80. Таза кірісі қанша?",
            steps: [
              { en: "Total Income: $600 + $50 = $650. Total Expenses: $30 + $45 + $120 + $80 = $275.", ru: "Доход: $600 + $50 = $650. Расходы: $30 + $45 + $120 + $80 = $275.", kk: "Кіріс: $600 + $50 = $650. Шығыстар: $30 + $45 + $120 + $80 = $275." },
              { en: "Net Income: $650 - $275 = $375 surplus.", ru: "Чистый доход: $650 - $275 = $375 профицит.", kk: "Таза кіріс: $650 - $275 = $375 профицит." }
            ],
            answer: "$375 surplus per month",
            answerRu: "Профицит $375 в месяц",
            answerKk: "Айына $375 профицит"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A student earns $300/month and spends $220. Is she in surplus or deficit? By how much?",
            questionRu: "Ученица зарабатывает $300/мес и тратит $220. Профицит или дефицит? На сколько?",
            questionKk: "Оқушы айына $300 табады және $220 жұмсайды. Профицит пе, тапшылық па? Қанша?",
            answer: "Surplus of $80 ($300 - $220 = $80).",
            answerRu: "Профицит $80 ($300 - $220 = $80).",
            answerKk: "$80 профицит ($300 - $220 = $80).",
            hint: "Subtract expenses from income.",
            hintRu: "Вычтите расходы из дохода.",
            hintKk: "Кірістен шығысты шегеріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Classify these as fixed or variable: rent $900, groceries $350, car insurance $120, dining out $85, gym $40, electricity $75.",
            questionRu: "Классифицируйте как постоянные или переменные: аренда $900, продукты $350, автострахование $120, рестораны $85, спортзал $40, электричество $75.",
            questionKk: "Тұрақты немесе ауыспалы ретінде жіктеңіз: жалға $900, азық-түлік $350, көлік сақтандыруы $120, мейрамханалар $85, спортзал $40, электр $75.",
            answer: "Fixed: rent ($900), car insurance ($120), gym ($40). Variable: groceries ($350), dining out ($85), electricity ($75).",
            answerRu: "Постоянные: аренда ($900), автострахование ($120), спортзал ($40). Переменные: продукты ($350), рестораны ($85), электричество ($75).",
            answerKk: "Тұрақтылар: жалға ($900), көлік сақтандыруы ($120), спортзал ($40). Ауыспалылар: азық-түлік ($350), мейрамханалар ($85), электр ($75).",
            hint: "Fixed expenses stay the same each month. Variable expenses change.",
            hintRu: "Постоянные расходы одинаковы каждый месяц. Переменные меняются.",
            hintKk: "Тұрақты шығындар ай сайын бірдей. Ауыспалы шығындар өзгереді.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A family earns $5,000/month. Fixed expenses total $2,800. Variable expenses average $1,500 but ranged from $1,200 to $1,900 over the past 6 months. What is their best-case and worst-case net income? Should they budget based on average or worst case?",
            questionRu: "Семья зарабатывает $5000/мес. Постоянные расходы $2800. Переменные в среднем $1500, диапазон $1200-$1900 за 6 месяцев. Каков лучший и худший чистый доход? На основе чего планировать?",
            questionKk: "Отбасы айына $5000 табады. Тұрақты шығындар $2800. Ауыспалы шығындар орташа $1500, соңғы 6 айда $1200-ден $1900-ге дейін. Ең жақсы және ең нашар таза кіріс қандай? Неге негізделіп жоспарлау керек?",
            answer: "Best case: $5,000 - $2,800 - $1,200 = $1,000. Worst case: $5,000 - $2,800 - $1,900 = $300. They should budget based on worst case ($300 surplus) to ensure they can always cover expenses and still save.",
            answerRu: "Лучший случай: $5,000 - $2,800 - $1,200 = $1,000. Худший случай: $5,000 - $2,800 - $1,900 = $300. Им следует планировать бюджет по худшему случаю (профицит $300), чтобы всегда покрывать расходы и при этом откладывать.",
            answerKk: "Ең жақсы жағдай: $5,000 - $2,800 - $1,200 = $1,000. Ең нашар жағдай: $5,000 - $2,800 - $1,900 = $300. Олар шығындарды әрқашан жауып, жинақ жасау үшін ең нашар жағдайға ($300 профицит) негізделіп бюджет жасауы керек.",
            xp: 20
          }
        ]
      },
      {
        title: "Budget Planning",
        titleRu: "Планирование бюджета",
        titleKk: "Бюджетті жоспарлау",
        content: "Budget planning involves creating a detailed spending plan before the month begins. Zero-based budgeting assigns every dollar a job so income minus all allocated amounts equals zero. Envelope budgeting uses separate categories (physical or digital) to prevent overspending in any one area.",
        contentRu: "Планирование бюджета — это составление подробного плана расходов до начала месяца. Бюджетирование с нуля назначает каждому доллару задачу, чтобы доход минус все распределения равнялся нулю. Конвертный метод использует отдельные категории для предотвращения перерасхода.",
        contentKk: "Бюджетті жоспарлау — ай басталмас бұрын егжей-тегжейлі шығын жоспарын жасау. Нөлдік бюджеттеу әрбір долларға тапсырма береді, сондықтан кіріс минус барлық бөлулер нөлге тең. Конверттік бюджеттеу кез келген бір салада артық жұмсауды болдырмау үшін бөлек санаттарды пайдаланады.",
        keyFormulas: [
          {
            formula: "Zero-Based Budget: Income - All Allocations = $0",
            formulaRu: "Бюджет с нулевой базой: Доход - Все распределения = $0",
            formulaKk: "Нөлдік бюджет: Табыс - Барлық бөліністер = $0",
            description: "Every dollar is assigned a purpose — spending, saving, or giving",
            descriptionRu: "Каждый доллар имеет назначение — расходы, сбережения или пожертвования",
            descriptionKk: "Әрбір долларға мақсат белгіленеді — шығындар, жинақтар немесе қайырмалдықтар"
          }
        ],
        solvedExamples: [
          {
            question: "A student earns $1,000/month. Create a zero-based budget with: rent $350, food $200, transport $80, phone $40, entertainment $100, savings $150, giving $30. Is there money left to allocate?",
            questionRu: "Ученик зарабатывает $1000/мес. Создайте бюджет с нуля: аренда $350, еда $200, транспорт $80, телефон $40, развлечения $100, сбережения $150, пожертвования $30. Остались ли нераспределённые деньги?",
            questionKk: "Оқушы айына $1000 табады. Нөлдік бюджет жасаңыз: жалға $350, тамақ $200, көлік $80, телефон $40, ойын-сауық $100, жинақтар $150, қайырмалдық $30. Бөлінбеген ақша қалды ма?",
            steps: [
              { en: "Total allocated: $350 + $200 + $80 + $40 + $100 + $150 + $30 = $950.", ru: "Всего распределено: $350 + $200 + $80 + $40 + $100 + $150 + $30 = $950.", kk: "Барлық бөлінген: $350 + $200 + $80 + $40 + $100 + $150 + $30 = $950." },
              { en: "Remaining: $1,000 - $950 = $50 unallocated. This $50 should be assigned (e.g., add to savings) to reach zero.", ru: "Остаток: $1000 - $950 = $50. Эти $50 нужно распределить (напр., в сбережения), чтобы достичь нуля.", kk: "Қалдық: $1000 - $950 = $50 бөлінбеген. Нөлге жету үшін бұл $50 бөлінуі керек (мысалы, жинаққа қосу)." }
            ],
            answer: "$50 remains unallocated. Assign it to savings (new savings total: $200) or another category to complete the zero-based budget.",
            answerRu: "$50 остались нераспределёнными. Назначьте их в сбережения (новая сумма сбережений: $200) или в другую категорию, чтобы завершить бюджет с нуля.",
            answerKk: "$50 бөлінбей қалды. Нөлдік бюджетті аяқтау үшін оны жинаққа (жаңа жинақ жиыны: $200) немесе басқа санатқа бөліңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You earn $400/month. You have allocated $380 to various categories. How much is left to assign in a zero-based budget?",
            questionRu: "Вы зарабатываете $400/мес. Распределили $380. Сколько осталось назначить?",
            questionKk: "Сіз айына $400 табасыз. $380 бөлдіңіз. Нөлдік бюджетте қанша бөлу қалды?",
            answer: "$400 - $380 = $20 left to assign",
            answerRu: "$400 - $380 = осталось назначить $20",
            answerKk: "$400 - $380 = бөлуге $20 қалды",
            hint: "Subtract total allocations from income.",
            hintRu: "Вычтите все распределения из дохода.",
            hintKk: "Кірістен барлық бөлулерді шегеріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student uses envelope budgeting with 5 envelopes: Food $150, Transport $60, Fun $80, Clothes $50, Misc $40. She has spent $135 on food and $65 on transport. How much is left in each of those envelopes? Which one is over budget?",
            questionRu: "Ученица использует конвертный метод с 5 конвертами: Еда $150, Транспорт $60, Развлечения $80, Одежда $50, Прочее $40. Она потратила $135 на еду и $65 на транспорт. Сколько осталось? Какой конверт перерасходован?",
            questionKk: "Оқушы 5 конвертпен бюджеттейді: Тамақ $150, Көлік $60, Көңіл көтеру $80, Киім $50, Басқа $40. Ол тамаққа $135, көлікке $65 жұмсады. Әрқайсысында қанша қалды? Қайсысы асып кетті?",
            answer: "Food: $150 - $135 = $15 remaining. Transport: $60 - $65 = -$5 (over budget by $5). Transport envelope is over budget.",
            answerRu: "Еда: $150 - $135 = осталось $15. Транспорт: $60 - $65 = -$5 (перерасход $5). Конверт «Транспорт» перерасходован.",
            answerKk: "Тамақ: $150 - $135 = $15 қалды. Көлік: $60 - $65 = -$5 (бюджеттен $5 асып кетті). Көлік конверті асып кетті.",
            hint: "Subtract spending from the envelope amount. Negative means over budget.",
            hintRu: "Вычтите траты из суммы конверта. Отрицательное — перерасход.",
            hintKk: "Конверт сомасынан шығынды шегеріңіз. Теріс — артық жұмсалған.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A college student earns $1,800/month. Create a complete zero-based budget for her with these constraints: rent must be under 35% of income, savings at least 15%, food budget $250-$350, and she wants to save for a $2,400 study abroad trip in 12 months.",
            questionRu: "Студентка зарабатывает $1800/мес. Составьте полный бюджет: аренда менее 35% дохода, сбережения минимум 15%, еда $250-$350, и она хочет накопить $2400 на учёбу за рубежом за 12 месяцев.",
            questionKk: "Студент айына $1800 табады. Толық бюджет жасаңыз: жалға кірістің 35%-нан аз, жинақтар кемінде 15%, тамақ $250-$350, және ол 12 айда шетелде оқуға $2400 жинағысы келеді.",
            answer: "Rent: $1,800 × 35% = $630 max. Savings: $1,800 × 15% = $270 minimum. Trip fund: $2,400 ÷ 12 = $200/month. Food: $300. Sample budget: Rent $600, Food $300, Savings $270, Trip $200, Transport $100, Phone $50, Entertainment $80, Utilities $100, Misc $100. Total: $1,800.",
            answerRu: "Аренда: $1,800 × 35% = максимум $630. Сбережения: $1,800 × 15% = минимум $270. Фонд поездки: $2,400 ÷ 12 = $200/мес. Еда: $300. Пример бюджета: Аренда $600, Еда $300, Сбережения $270, Поездка $200, Транспорт $100, Телефон $50, Развлечения $80, Коммунальные $100, Прочее $100. Итого: $1,800.",
            answerKk: "Жалға: $1,800 × 35% = ең көбі $630. Жинақтар: $1,800 × 15% = кемінде $270. Сапар қоры: $2,400 ÷ 12 = айына $200. Тамақ: $300. Бюджет мысалы: Жалға $600, Тамақ $300, Жинақтар $270, Сапар $200, Көлік $100, Телефон $50, Ойын-сауық $80, Коммуналдық $100, Басқа $100. Барлығы: $1,800.",
            xp: 20
          }
        ]
      },
      {
        title: "Compound Interest",
        titleRu: "Сложные проценты",
        titleKk: "Күрделі пайыз",
        content: "Compound interest is interest earned on both the original principal and previously accumulated interest. Unlike simple interest, compound interest grows exponentially over time because each period's interest becomes part of the base for the next calculation. Albert Einstein reportedly called it the 'eighth wonder of the world.'",
        contentRu: "Сложные проценты — это проценты, начисляемые как на первоначальную сумму, так и на ранее накопленные проценты. В отличие от простых процентов, сложные растут экспоненциально, потому что проценты каждого периода становятся частью базы для следующего расчёта. Альберт Эйнштейн назвал их 'восьмым чудом света'.",
        contentKk: "Күрделі пайыз — бастапқы негізгі сомаға да, бұрын жинақталған пайызға да есептелетін пайыз. Жай пайыздан айырмашылығы, күрделі пайыз уақыт өте келе экспоненциалды түрде өседі, өйткені әрбір кезеңнің пайызы келесі есептеу үшін базаның бөлігі болады. Альберт Эйнштейн оны 'әлемнің сегізінші ғажайыбы' деп атаған.",
        keyFormulas: [
          {
            formula: "A = P × (1 + r)^n",
            description: "A = final amount, P = principal, r = rate per period, n = number of periods",
            descriptionRu: "A = итоговая сумма, P = капитал, r = ставка за период, n = количество периодов",
            descriptionKk: "A = соңғы сома, P = капитал, r = кезең бойынша мөлшерлеме, n = кезеңдер саны"
          },
          {
            formula: "Compound Interest = P × (1 + r)^n - P",
            formulaRu: "Сложный процент = P × (1 + r)^n - P",
            formulaKk: "Күрделі пайыз = P × (1 + r)^n - P",
            description: "The interest portion only, excluding the original principal",
            descriptionRu: "Только сумма процентов, без первоначального капитала",
            descriptionKk: "Бастапқы капиталсыз тек пайыз сомасы"
          }
        ],
        solvedExamples: [
          {
            question: "You invest $1,000 at 5% annual compound interest for 3 years. How much do you have at the end? How does this compare to simple interest?",
            questionRu: "Вы инвестируете $1000 под 5% сложных годовых на 3 года. Сколько будет в конце? Сравните с простыми процентами.",
            questionKk: "Сіз $1000-ды 5% жылдық күрделі пайызбен 3 жылға саласыз. Соңында қанша болады? Жай пайызбен салыстырыңыз.",
            steps: [
              { en: "Compound: A = $1,000 × (1.05)^3 = $1,000 × 1.157625 = $1,157.63.", ru: "Сложные: A = $1000 × (1,05)^3 = $1000 × 1,157625 = $1157,63.", kk: "Күрделі: A = $1000 × (1,05)^3 = $1000 × 1,157625 = $1157,63." },
              { en: "Simple: $1,000 + ($1,000 × 0.05 × 3) = $1,150. Compound earns $7.63 more.", ru: "Простые: $1000 + ($1000 × 0,05 × 3) = $1150. Сложные дают на $7,63 больше.", kk: "Жай: $1000 + ($1000 × 0,05 × 3) = $1150. Күрделі $7,63 көп береді." }
            ],
            answer: "$1,157.63 with compound interest vs $1,150 with simple interest — $7.63 more from compounding.",
            answerRu: "$1,157.63 со сложными процентами против $1,150 с простыми — на $7.63 больше благодаря капитализации.",
            answerKk: "Күрделі пайызбен $1,157.63, жай пайызбен $1,150 — капитализация арқасында $7.63 көп."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You invest $500 at 10% compound interest for 2 years. What is the final amount?",
            questionRu: "Вы инвестируете $500 под 10% сложных на 2 года. Какова итоговая сумма?",
            questionKk: "Сіз $500-ді 10% күрделі пайызбен 2 жылға саласыз. Соңғы сома қанша?",
            answer: "$500 × (1.10)^2 = $500 × 1.21 = $605",
            answerRu: "$500 × (1.10)^2 = $500 × 1.21 = $605",
            answerKk: "$500 × (1.10)^2 = $500 × 1.21 = $605",
            hint: "Use A = P × (1 + r)^n.",
            hintRu: "Используйте A = P × (1 + r)^n.",
            hintKk: "A = P × (1 + r)^n формуласын қолданыңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Compare two investments over 4 years: (A) $2,000 at 6% simple interest, (B) $2,000 at 5.5% compound interest. Which gives more money?",
            questionRu: "Сравните за 4 года: (А) $2000 под 6% простых, (Б) $2000 под 5,5% сложных. Что выгоднее?",
            questionKk: "4 жылда салыстырыңыз: (А) $2000 6% жай, (Б) $2000 5,5% күрделі. Қайсысы тиімдірек?",
            answer: "A: $2,000 + ($2,000 × 0.06 × 4) = $2,480. B: $2,000 × (1.055)^4 = $2,000 × 1.2388 = $2,477.60. Option A gives slightly more ($2.40) in this case.",
            answerRu: "А: $2,000 + ($2,000 × 0.06 × 4) = $2,480. Б: $2,000 × (1.055)^4 = $2,000 × 1.2388 = $2,477.60. Вариант А в данном случае даёт чуть больше ($2.40).",
            answerKk: "А: $2,000 + ($2,000 × 0.06 × 4) = $2,480. Б: $2,000 × (1.055)^4 = $2,000 × 1.2388 = $2,477.60. Бұл жағдайда А нұсқасы сәл көбірек ($2.40) береді.",
            hint: "Calculate each separately and compare the totals.",
            hintRu: "Рассчитайте каждый отдельно и сравните.",
            hintKk: "Әрқайсысын бөлек есептеп, жалпы сомаларды салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Twin sisters each receive $5,000 at age 15. Sister A invests at 7% compound interest. Sister B waits 5 years then invests at 7% compound. How much does each have at age 35?",
            questionRu: "Сёстры-близнецы получают по $5000 в 15 лет. Сестра А инвестирует под 7% сложных. Сестра Б ждёт 5 лет, потом инвестирует под 7%. Сколько у каждой в 35 лет?",
            questionKk: "Егіз апалылар 15 жаста $5000 алады. А апа 7% күрделі пайызбен салады. Б апа 5 жыл күтіп, содан кейін 7% салады. 35 жаста әрқайсысында қанша болады?",
            answer: "Sister A: 20 years, $5,000 × (1.07)^20 = $5,000 × 3.8697 = $19,348.42. Sister B: 15 years, $5,000 × (1.07)^15 = $5,000 × 2.7590 = $13,795.16. A has $5,553.26 more — 5 extra years of compounding made a huge difference.",
            answerRu: "Сестра А: 20 лет, $5,000 × (1.07)^20 = $5,000 × 3.8697 = $19,348.42. Сестра Б: 15 лет, $5,000 × (1.07)^15 = $5,000 × 2.7590 = $13,795.16. У А на $5,553.26 больше — 5 дополнительных лет капитализации сыграли огромную роль.",
            answerKk: "А апа: 20 жыл, $5,000 × (1.07)^20 = $5,000 × 3.8697 = $19,348.42. Б апа: 15 жыл, $5,000 × (1.07)^15 = $5,000 × 2.7590 = $13,795.16. А-да $5,553.26 көп — капитализацияның қосымша 5 жылы үлкен айырмашылық жасады.",
            xp: 20
          }
        ]
      },
      {
        title: "Debt & Credit",
        titleRu: "Долги и кредит",
        titleKk: "Қарыз және несие",
        content: "Credit is the ability to borrow money with the promise to repay it later, usually with interest. Good debt (like student loans or mortgages) can build value over time, while bad debt (like high-interest credit cards for luxuries) drains wealth. A credit score is a number that reflects how reliably you repay borrowed money.",
        contentRu: "Кредит — это возможность занять деньги с обещанием вернуть их позже, обычно с процентами. Хороший долг (студенческие кредиты, ипотека) со временем создаёт ценность, а плохой долг (кредитные карты с высокими процентами для роскоши) истощает богатство. Кредитный рейтинг — число, отражающее вашу надёжность как заёмщика.",
        contentKk: "Несие — ақшаны кейінірек, әдетте пайызбен қайтару уәдесімен қарызға алу мүмкіндігі. Жақсы қарыз (студенттік несиелер, ипотека) уақыт өте келе құндылық жасайды, ал жаман қарыз (сәнді заттарға жоғары пайызды кредиттік карталар) байлықты сарқады. Несие рейтингі — қарыз алушы ретіндегі сенімділігіңізді көрсететін сан.",
        keyFormulas: [
          {
            formula: "Total Repayment = Principal + (Principal × Interest Rate × Time)",
            formulaRu: "Общая сумма выплаты = Основная сумма + (Основная сумма × Процентная ставка × Время)",
            formulaKk: "Жалпы өтеу сомасы = Негізгі сома + (Негізгі сома × Пайыздық ставка × Уақыт)",
            description: "How much you pay back in total on a simple-interest loan",
            descriptionRu: "Сколько вы вернёте по кредиту с простыми процентами",
            descriptionKk: "Жай пайызды несие бойынша жалпы қанша қайтарасыз"
          }
        ],
        solvedExamples: [
          {
            question: "A student borrows $5,000 for college at 4% simple annual interest over 5 years. What is the total repayment and monthly payment?",
            questionRu: "Студент берёт $5000 на обучение под 4% простых на 5 лет. Каковы общая и ежемесячная выплаты?",
            questionKk: "Студент колледжге 4% жай пайызбен 5 жылға $5000 алады. Жалпы және айлық төлем қандай?",
            steps: [
              { en: "Total interest: $5,000 × 0.04 × 5 = $1,000. Total repayment: $5,000 + $1,000 = $6,000.", ru: "Проценты: $5000 × 0,04 × 5 = $1000. Всего: $5000 + $1000 = $6000.", kk: "Пайыз: $5000 × 0,04 × 5 = $1000. Барлығы: $5000 + $1000 = $6000." },
              { en: "Monthly payment: $6,000 ÷ (5 × 12) = $6,000 ÷ 60 = $100/month.", ru: "Ежемесячный платёж: $6000 ÷ 60 = $100/мес.", kk: "Айлық төлем: $6000 ÷ 60 = айына $100." }
            ],
            answer: "Total repayment: $6,000. Monthly payment: $100.",
            answerRu: "Общая выплата: $6,000. Ежемесячный платёж: $100.",
            answerKk: "Жалпы төлем: $6,000. Айлық төлем: $100."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Is a student loan for education an example of good debt or bad debt? Explain.",
            questionRu: "Студенческий кредит на образование — это хороший или плохой долг? Объясните.",
            questionKk: "Білім алуға студенттік несие — жақсы қарыз ба, жаман қарыз ба? Түсіндіріңіз.",
            answer: "Generally good debt — education increases future earning potential, which can more than offset the interest cost of the loan.",
            answerRu: "Обычно это хороший долг — образование повышает будущий заработок, что может с лихвой покрыть проценты по кредиту.",
            answerKk: "Әдетте бұл жақсы қарыз — білім болашақтағы табыс мүмкіндігін арттырады, бұл несие пайызының құнын жауып қана қоймай, одан да көп пайда әкелуі мүмкін.",
            hint: "Think about whether the debt helps you earn more in the future.",
            hintRu: "Подумайте, поможет ли долг зарабатывать больше в будущем.",
            hintKk: "Қарыз болашақта көбірек табуға көмектесетінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You borrow $1,200 on a credit card at 18% annual simple interest. If you pay it off in 2 years, how much total interest do you pay?",
            questionRu: "Вы берёте $1200 по кредитной карте под 18% простых. Если погасить за 2 года, сколько процентов заплатите?",
            questionKk: "Сіз кредиттік картадан 18% жай пайызбен $1200 аласыз. 2 жылда өтесеңіз, қанша пайыз төлейсіз?",
            answer: "$1,200 × 0.18 × 2 = $432 in interest",
            answerRu: "$1,200 × 0.18 × 2 = $432 процентов",
            answerKk: "$1,200 × 0.18 × 2 = $432 пайыз",
            hint: "Use Simple Interest = Principal × Rate × Time.",
            hintRu: "Используйте формулу простых процентов.",
            hintKk: "Жай пайыз формуласын қолданыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Person A borrows $10,000 at 5% for 10 years (student loan for degree). Person B borrows $10,000 at 20% for 3 years (credit card for vacation). Calculate total interest for each and explain which is better financially.",
            questionRu: "А берёт $10000 под 5% на 10 лет (образование). Б берёт $10000 под 20% на 3 года (отпуск). Рассчитайте проценты и объясните, что выгоднее.",
            questionKk: "А $10000-ды 5%-бен 10 жылға алады (білім). Б $10000-ды 20%-бен 3 жылға алады (демалыс). Пайыздарды есептеп, қайсысы тиімдірек екенін түсіндіріңіз.",
            answer: "A: $10,000 × 0.05 × 10 = $5,000 interest. B: $10,000 × 0.20 × 3 = $6,000 interest. Despite the shorter term, B pays more interest due to the high rate. Plus, A's loan funds education (good debt), while B's funds consumption (bad debt).",
            answerRu: "А: $10,000 × 0.05 × 10 = $5,000 процентов. Б: $10,000 × 0.20 × 3 = $6,000 процентов. Несмотря на более короткий срок, Б платит больше процентов из-за высокой ставки. К тому же кредит А финансирует образование (хороший долг), а кредит Б — потребление (плохой долг).",
            answerKk: "А: $10,000 × 0.05 × 10 = $5,000 пайыз. Б: $10,000 × 0.20 × 3 = $6,000 пайыз. Мерзімі қысқа болса да, Б жоғары мөлшерлеме кесірінен көп пайыз төлейді. Оның үстіне А-ның несиесі білімге жұмсалады (жақсы қарыз), ал Б-нікі — тұтынуға (жаман қарыз).",
            xp: 20
          }
        ]
      },
      {
        title: "Insurance",
        titleRu: "Страхование",
        titleKk: "Сақтандыру",
        content: "Insurance is a financial product where you pay regular premiums to a company that agrees to cover large unexpected costs. You transfer risk from yourself to the insurer. Common types include health, auto, home, and life insurance. The deductible is the amount you pay before insurance kicks in.",
        contentRu: "Страхование — финансовый продукт, где вы платите регулярные взносы (премии) компании, которая покрывает большие непредвиденные расходы. Вы передаёте риск от себя страховщику. Основные виды: медицинское, автомобильное, жилищное, страхование жизни. Франшиза — сумма, которую вы платите до начала покрытия.",
        contentKk: "Сақтандыру — үлкен күтпеген шығындарды жабуға келісетін компанияға тұрақты сыйлықақы төлейтін қаржылық өнім. Сіз тәуекелді өзіңізден сақтандырушыға аударасыз. Негізгі түрлері: денсаулық, автокөлік, тұрғын үй және өмірді сақтандыру. Франшиза — сақтандыру бастамас бұрын сіз төлейтін сома.",
        keyFormulas: [
          {
            formula: "Annual Insurance Cost = Monthly Premium × 12",
            formulaRu: "Годовая стоимость страховки = Месячная премия × 12",
            formulaKk: "Жылдық сақтандыру құны = Айлық сыйақы × 12",
            description: "The total yearly cost of maintaining insurance coverage",
            descriptionRu: "Годовая стоимость страхового покрытия",
            descriptionKk: "Сақтандыру қамтуын сақтаудың жылдық құны"
          },
          {
            formula: "Out-of-Pocket Cost = Deductible + Copay",
            formulaRu: "Расходы из своего кармана = Франшиза + Доплата",
            formulaKk: "Өз қалтасынан шығын = Франшиза + Қосымша төлем",
            description: "What you pay when making a claim before full coverage applies",
            descriptionRu: "Что вы платите при обращении до полного покрытия",
            descriptionKk: "Толық қамту қолданылмас бұрын өтініш берген кезде сіз төлейтін сома"
          }
        ],
        solvedExamples: [
          {
            question: "Car insurance costs $120/month with a $500 deductible. You have an accident with $3,000 in damages. How much do you pay out of pocket? How much does insurance cover? What is your annual premium?",
            questionRu: "Автострахование стоит $120/мес с франшизой $500. ДТП с ущербом $3000. Сколько платите вы? Сколько покрывает страховка? Какова годовая премия?",
            questionKk: "Автокөлік сақтандыруы $500 франшизамен айына $120. Сіз $3000 зақым келтірген апатқа тап болдыңыз. Қалтаңыздан қанша төлейсіз? Сақтандыру қанша жабады? Жылдық сыйлықақы қанша?",
            steps: [
              { en: "Out-of-pocket: $500 (deductible). Insurance covers: $3,000 - $500 = $2,500.", ru: "Из кармана: $500 (франшиза). Страховка покрывает: $3000 - $500 = $2500.", kk: "Қалтадан: $500 (франшиза). Сақтандыру жабады: $3000 - $500 = $2500." },
              { en: "Annual premium: $120 × 12 = $1,440/year.", ru: "Годовая премия: $120 × 12 = $1440/год.", kk: "Жылдық сыйлықақы: $120 × 12 = жылына $1440." }
            ],
            answer: "You pay $500 (deductible), insurance covers $2,500, annual premium is $1,440.",
            answerRu: "Вы платите $500 (франшизу), страховка покрывает $2,500, годовая премия — $1,440.",
            answerKk: "Сіз $500 (франшиза) төлейсіз, сақтандыру $2,500 жабады, жылдық сыйлықақы — $1,440."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Health insurance costs $200/month. What is the annual cost?",
            questionRu: "Медицинская страховка стоит $200/мес. Какова годовая стоимость?",
            questionKk: "Денсаулық сақтандыруы айына $200. Жылдық құны қанша?",
            answer: "$200 × 12 = $2,400/year",
            answerRu: "$200 × 12 = $2,400/год",
            answerKk: "$200 × 12 = жылына $2,400",
            hint: "Multiply the monthly premium by 12.",
            hintRu: "Умножьте ежемесячную премию на 12.",
            hintKk: "Айлық сыйлықақыны 12-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Plan A: $80/month premium, $1,000 deductible. Plan B: $130/month premium, $300 deductible. If you expect one $2,000 medical bill this year, which plan costs less in total?",
            questionRu: "План А: $80/мес, франшиза $1000. План Б: $130/мес, франшиза $300. При одном медицинском счёте $2000 за год, какой план дешевле?",
            questionKk: "А жоспары: айына $80, $1000 франшиза. Б жоспары: айына $130, $300 франшиза. Жылына бір $2000 медициналық шот болса, қай жоспар арзанырақ?",
            answer: "Plan A: ($80 × 12) + $1,000 = $1,960. Plan B: ($130 × 12) + $300 = $1,860. Plan B is cheaper by $100.",
            answerRu: "План А: ($80 × 12) + $1,000 = $1,960. План Б: ($130 × 12) + $300 = $1,860. План Б дешевле на $100.",
            answerKk: "А жоспары: ($80 × 12) + $1,000 = $1,960. Б жоспары: ($130 × 12) + $300 = $1,860. Б жоспары $100 арзанырақ.",
            hint: "Add annual premiums plus the deductible for each plan.",
            hintRu: "Сложите годовые премии и франшизу каждого плана.",
            hintKk: "Әр жоспар үшін жылдық сыйлықақылар мен франшизаны қосыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A 25-year-old pays $150/month for health insurance with a $500 deductible. Over 10 years without claims, she pays only premiums. If she then has a surgery costing $25,000, how much has she paid total (premiums + deductible)? Was insurance worth it?",
            questionRu: "25-летняя платит $150/мес за страховку с франшизой $500. За 10 лет без обращений — только премии. Затем операция за $25000. Сколько она заплатила всего? Стоила ли страховка того?",
            questionKk: "25 жастағы $500 франшизамен айына $150 сақтандыру төлейді. 10 жыл бойы өтініш болмаса — тек сыйлықақылар. Содан кейін $25000-тұратын операция. Барлығы қанша төледі? Сақтандыру тұрарлық болды ма?",
            answer: "Premiums: $150 × 12 × 10 = $18,000. Deductible for surgery: $500. Total paid: $18,500. Without insurance, the surgery alone would cost $25,000. Insurance saved her $6,500 on the surgery. Yes, it was worth it.",
            answerRu: "Премии: $150 × 12 × 10 = $18,000. Франшиза за операцию: $500. Всего заплачено: $18,500. Без страховки только операция обошлась бы в $25,000. Страховка сэкономила ей $6,500 на операции. Да, она того стоила.",
            answerKk: "Сыйлықақылар: $150 × 12 × 10 = $18,000. Операция бойынша франшиза: $500. Барлығы төленгені: $18,500. Сақтандырусыз операцияның өзі $25,000 тұрар еді. Сақтандыру оған операцияда $6,500 үнемдеді. Иә, ол тұрарлық болды.",
            xp: 20
          }
        ]
      },
      {
        title: "Taxes",
        titleRu: "Налоги",
        titleKk: "Салықтар",
        content: "Taxes are mandatory payments to the government used to fund public services like roads, schools, and healthcare. Income tax is a percentage of your earnings paid to the government. Progressive tax systems charge higher rates on higher income brackets, meaning wealthier people pay a larger percentage.",
        contentRu: "Налоги — обязательные платежи государству для финансирования общественных услуг: дорог, школ, медицины. Подоходный налог — процент от заработка. Прогрессивная система налогообложения применяет более высокие ставки к более высоким доходам, то есть богатые платят больший процент.",
        contentKk: "Салықтар — жолдар, мектептер, медицина сияқты қоғамдық қызметтерді қаржыландыру үшін мемлекетке міндетті төлемдер. Табыс салығы — табысыңыздың мемлекетке төленетін пайызы. Прогрессивті салық жүйесі жоғарырақ табыс кезеңдеріне жоғарырақ мөлшерлемелер қолданады, яғни бай адамдар үлкенірек пайыз төлейді.",
        keyFormulas: [
          {
            formula: "Tax Owed = Taxable Income × Tax Rate",
            formulaRu: "Сумма налога = Налогооблагаемый доход × Налоговая ставка",
            formulaKk: "Салық сомасы = Салық салынатын табыс × Салық ставкасы",
            description: "Basic tax calculation for a single tax bracket",
            descriptionRu: "Базовый расчёт налога для одной ставки",
            descriptionKk: "Бір салық кезеңі үшін негізгі салық есебі"
          },
          {
            formula: "Net Pay = Gross Pay - Taxes - Deductions",
            formulaRu: "Чистая зарплата = Валовая зарплата - Налоги - Удержания",
            formulaKk: "Таза жалақы = Жалпы жалақы - Салықтар - Ұсталымдар",
            description: "What you actually take home after all withholdings",
            descriptionRu: "Сколько вы реально получаете после всех вычетов",
            descriptionKk: "Барлық ұстаулардан кейін нақты қолыңызға тиетін сома"
          }
        ],
        solvedExamples: [
          {
            question: "A student earns $15,000/year. The first $10,000 is taxed at 10% and the next $5,000 at 15%. How much total tax does she owe?",
            questionRu: "Ученица зарабатывает $15000/год. Первые $10000 облагаются 10%, следующие $5000 — 15%. Какой общий налог?",
            questionKk: "Оқушы жылына $15000 табады. Алғашқы $10000 10%-бен, келесі $5000 15%-бен салық салынады. Жалпы салық қанша?",
            steps: [
              { en: "First bracket: $10,000 × 10% = $1,000.", ru: "Первая ступень: $10000 × 10% = $1000.", kk: "Бірінші кезең: $10000 × 10% = $1000." },
              { en: "Second bracket: $5,000 × 15% = $750. Total: $1,000 + $750 = $1,750.", ru: "Вторая ступень: $5000 × 15% = $750. Итого: $1000 + $750 = $1750.", kk: "Екінші кезең: $5000 × 15% = $750. Барлығы: $1000 + $750 = $1750." }
            ],
            answer: "$1,750 in total taxes",
            answerRu: "Всего налогов: $1,750",
            answerKk: "Барлық салық: $1,750"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You earn $500 and the tax rate is 10%. How much tax do you owe?",
            questionRu: "Вы заработали $500, ставка налога 10%. Какой налог?",
            questionKk: "Сіз $500 табасыз, салық мөлшерлемесі 10%. Салық қанша?",
            answer: "$500 × 10% = $50",
            answerRu: "$500 × 10% = $50",
            answerKk: "$500 × 10% = $50",
            hint: "Multiply income by the tax rate.",
            hintRu: "Умножьте доход на ставку налога.",
            hintKk: "Табысты салық мөлшерлемесіне көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A worker earns $40,000/year gross. Taxes are 20% and other deductions (healthcare, retirement) are $3,200/year. What is her annual net pay and monthly take-home?",
            questionRu: "Работник зарабатывает $40000/год. Налоги 20%, прочие вычеты $3200/год. Каков годовой и месячный чистый доход?",
            questionKk: "Жұмысшы жылына $40000 табады. Салықтар 20%, басқа ұстаулар жылына $3200. Жылдық және айлық таза табыс қанша?",
            answer: "Tax: $40,000 × 20% = $8,000. Net pay: $40,000 - $8,000 - $3,200 = $28,800/year. Monthly: $28,800 ÷ 12 = $2,400.",
            answerRu: "Налог: $40,000 × 20% = $8,000. Чистый доход: $40,000 - $8,000 - $3,200 = $28,800/год. Ежемесячно: $28,800 ÷ 12 = $2,400.",
            answerKk: "Салық: $40,000 × 20% = $8,000. Таза табыс: $40,000 - $8,000 - $3,200 = жылына $28,800. Айына: $28,800 ÷ 12 = $2,400.",
            hint: "Subtract both taxes and deductions from gross pay.",
            hintRu: "Вычтите и налоги, и вычеты из валового дохода.",
            hintKk: "Жалпы табыстан салықтарды да, ұстауларды да шегеріңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A progressive tax system: 0-$10,000 at 0%, $10,001-$40,000 at 12%, $40,001-$85,000 at 22%. A person earns $55,000. Calculate the total tax owed and effective tax rate.",
            questionRu: "Прогрессивная система: $0-$10000 — 0%, $10001-$40000 — 12%, $40001-$85000 — 22%. Человек зарабатывает $55000. Рассчитайте налог и эффективную ставку.",
            questionKk: "Прогрессивті жүйе: $0-$10000 — 0%, $10001-$40000 — 12%, $40001-$85000 — 22%. Адам $55000 табады. Жалпы салық пен тиімді мөлшерлемені есептеңіз.",
            answer: "Bracket 1: $10,000 × 0% = $0. Bracket 2: $30,000 × 12% = $3,600. Bracket 3: $15,000 × 22% = $3,300. Total: $6,900. Effective rate: $6,900 ÷ $55,000 = 12.5%.",
            answerRu: "Ступень 1: $10,000 × 0% = $0. Ступень 2: $30,000 × 12% = $3,600. Ступень 3: $15,000 × 22% = $3,300. Итого: $6,900. Эффективная ставка: $6,900 ÷ $55,000 = 12.5%.",
            answerKk: "1-кезең: $10,000 × 0% = $0. 2-кезең: $30,000 × 12% = $3,600. 3-кезең: $15,000 × 22% = $3,300. Барлығы: $6,900. Тиімді мөлшерлеме: $6,900 ÷ $55,000 = 12.5%.",
            xp: 20
          }
        ]
      },
      {
        title: "Inflation",
        titleRu: "Инфляция",
        titleKk: "Инфляция",
        content: "Inflation is the general increase in prices over time, which reduces the purchasing power of money. If inflation is 3% per year, something costing $100 today will cost $103 next year. This is why keeping all your money in cash or a low-interest account means you are effectively losing value over time.",
        contentRu: "Инфляция — общий рост цен со временем, снижающий покупательную способность денег. При инфляции 3% в год товар за $100 сегодня будет стоить $103 через год. Поэтому хранение денег в наличных или на низкопроцентном счёте означает фактическую потерю стоимости.",
        contentKk: "Инфляция — бағалардың уақыт өте келе жалпы өсуі, ол ақшаның сатып алу қабілетін төмендетеді. Инфляция жылына 3% болса, бүгін $100 тұратын нәрсе келесі жылы $103 тұрады. Сондықтан барлық ақшаңызды қолма-қол немесе төмен пайызды шотта ұстау уақыт өте келе құндылықты жоғалту дегенді білдіреді.",
        keyFormulas: [
          {
            formula: "Future Price = Current Price × (1 + Inflation Rate)^Years",
            formulaRu: "Будущая цена = Текущая цена × (1 + Уровень инфляции)^Годы",
            formulaKk: "Болашақ баға = Ағымдағы баға × (1 + Инфляция деңгейі)^Жылдар",
            description: "Estimate what something will cost in the future",
            descriptionRu: "Оцените будущую стоимость товара",
            descriptionKk: "Болашақта бір нәрсенің қанша тұратынын бағалаңыз"
          },
          {
            formula: "Real Return = Nominal Return - Inflation Rate",
            formulaRu: "Реальная доходность = Номинальная доходность - Уровень инфляции",
            formulaKk: "Нақты табыстылық = Номиналды табыстылық - Инфляция деңгейі",
            description: "The actual growth in purchasing power after accounting for inflation",
            descriptionRu: "Реальный рост покупательной способности с учётом инфляции",
            descriptionKk: "Инфляцияны ескергеннен кейінгі сатып алу қабілетінің нақты өсімі"
          }
        ],
        solvedExamples: [
          {
            question: "A movie ticket costs $12 today. With 4% annual inflation, how much will it cost in 5 years? If your savings account earns 2%, are you keeping up with inflation?",
            questionRu: "Билет в кино стоит $12. При инфляции 4% в год, сколько он будет стоить через 5 лет? Если ваш счёт даёт 2%, успеваете ли вы за инфляцией?",
            questionKk: "Кино билеті бүгін $12. Жылына 4% инфляциямен 5 жылдан кейін қанша тұрады? Жинақ шотыңыз 2% берсе, инфляцияға ілесесіз бе?",
            steps: [
              { en: "Future price: $12 × (1.04)^5 = $12 × 1.2167 = $14.60.", ru: "Будущая цена: $12 × (1,04)^5 = $12 × 1,2167 = $14,60.", kk: "Болашақ баға: $12 × (1,04)^5 = $12 × 1,2167 = $14,60." },
              { en: "Real return: 2% - 4% = -2%. No, you're losing 2% purchasing power per year.", ru: "Реальная доходность: 2% - 4% = -2%. Нет, вы теряете 2% покупательной способности в год.", kk: "Нақты қайтарым: 2% - 4% = -2%. Жоқ, сіз жылына 2% сатып алу қабілетін жоғалтасыз." }
            ],
            answer: "The ticket will cost $14.60. With 2% earnings and 4% inflation, you have a -2% real return — you're falling behind.",
            answerRu: "Билет будет стоить $14.60. При доходности 2% и инфляции 4% реальная доходность составляет -2% — вы отстаёте от инфляции.",
            answerKk: "Билет $14.60 тұрады. 2% табыс пен 4% инфляция кезінде нақты қайтарым -2% — сіз инфляциядан қалып қоясыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If inflation is 3%, what will a $50 item cost next year?",
            questionRu: "При инфляции 3%, сколько будет стоить товар за $50 через год?",
            questionKk: "Инфляция 3% болса, $50-лық тауар келесі жылы қанша тұрады?",
            answer: "$50 × 1.03 = $51.50",
            answerRu: "$50 × 1.03 = $51.50",
            answerKk: "$50 × 1.03 = $51.50",
            hint: "Multiply by (1 + inflation rate).",
            hintRu: "Умножьте на (1 + уровень инфляции).",
            hintKk: "(1 + инфляция мөлшерлемесі)-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Your savings account earns 3% interest but inflation is 5%. What is your real return? Are you gaining or losing purchasing power?",
            questionRu: "Ваш счёт приносит 3%, инфляция 5%. Какова реальная доходность? Вы выигрываете или проигрываете?",
            questionKk: "Жинақ шотыңыз 3% пайыз береді, бірақ инфляция 5%. Нақты қайтарымыңыз қандай? Сатып алу қабілетін қосасыз ба, жоғалтасыз ба?",
            answer: "Real return: 3% - 5% = -2%. You're losing 2% purchasing power each year.",
            answerRu: "Реальная доходность: 3% - 5% = -2%. Вы теряете 2% покупательной способности каждый год.",
            answerKk: "Нақты қайтарым: 3% - 5% = -2%. Сіз жыл сайын сатып алу қабілетінің 2%-ін жоғалтасыз.",
            hint: "Subtract inflation from your nominal return.",
            hintRu: "Вычтите инфляцию из номинальной доходности.",
            hintKk: "Номиналды қайтарымнан инфляцияны шегеріңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "College tuition is $20,000/year today. A child is 8 years old and will start college in 10 years. If tuition inflation is 5%/year, what will one year of tuition cost? How much should the family save monthly at 6% annual return to cover it?",
            questionRu: "Обучение стоит $20000/год. Ребёнку 8 лет, поступит через 10 лет. При росте 5%/год, сколько будет стоить год обучения? Сколько нужно копить ежемесячно при доходности 6%?",
            questionKk: "Оқу ақысы жылына $20000. Баланың жасы 8, колледжге 10 жылдан кейін түседі. Жылына 5% өссе, бір жылдық оқу ақысы қанша болады? 6% жылдық қайтарыммен айына қанша жинау керек?",
            answer: "Future tuition: $20,000 × (1.05)^10 = $20,000 × 1.6289 = $32,578. To save $32,578 in 10 years at 6% return, approximately $198/month (using future value of annuity calculation).",
            answerRu: "Будущая стоимость обучения: $20,000 × (1.05)^10 = $20,000 × 1.6289 = $32,578. Чтобы накопить $32,578 за 10 лет при доходности 6%, нужно примерно $198/мес (по расчёту будущей стоимости аннуитета).",
            answerKk: "Болашақ оқу ақысы: $20,000 × (1.05)^10 = $20,000 × 1.6289 = $32,578. 6% жылдық қайтарыммен 10 жылда $32,578 жинау үшін айына шамамен $198 керек (аннуитеттің болашақ құнын есептеу арқылы).",
            xp: 20
          }
        ]
      },
      {
        title: "Opportunity Cost",
        titleRu: "Альтернативная стоимость",
        titleKk: "Мүмкіндік құны",
        content: "Opportunity cost is the value of the next best alternative you give up when making a choice. Every decision has an opportunity cost because resources (money, time, energy) are limited. Understanding opportunity cost helps you make better decisions by considering what you are truly sacrificing.",
        contentRu: "Альтернативная стоимость — ценность лучшей альтернативы, от которой вы отказываетесь при выборе. Каждое решение имеет альтернативную стоимость, потому что ресурсы (деньги, время, энергия) ограничены. Понимание этого помогает принимать лучшие решения, учитывая реальные жертвы.",
        contentKk: "Мүмкіндік құны — таңдау жасағанда бас тартатын ең жақсы баламаның құндылығы. Әрбір шешімнің мүмкіндік құны бар, өйткені ресурстар (ақша, уақыт, энергия) шектеулі. Мүмкіндік құнын түсіну нақты құрбандықтарды ескере отырып, жақсырақ шешім қабылдауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Opportunity Cost = Value of Best Alternative Forgone",
            formulaRu: "Альтернативные издержки = Ценность лучшей упущенной альтернативы",
            formulaKk: "Балама шығын = Бас тартылған ең жақсы баламаның құны",
            description: "What you sacrifice by choosing one option over another",
            descriptionRu: "Чем вы жертвуете, выбирая один вариант вместо другого",
            descriptionKk: "Бір нұсқаны екіншісінен таңдау арқылы не құрбан етесіз"
          }
        ],
        solvedExamples: [
          {
            question: "A student has $200 and Saturday free. Option A: work a shift earning $80. Option B: buy a concert ticket for $200. Option C: study for a test worth 20% of her grade. She chooses the concert. What is the opportunity cost?",
            questionRu: "У ученицы $200 и свободная суббота. А: работать за $80. Б: билет на концерт за $200. В: учить к тесту (20% оценки). Она выбирает концерт. Какова альтернативная стоимость?",
            questionKk: "Оқушыда $200 және бос сенбі бар. А: $80 табу үшін жұмыс істеу. Б: $200-ге концерт билеті. В: бағасының 20%-ына тест оқу. Ол концертті таңдайды. Мүмкіндік құны қандай?",
            steps: [
              { en: "She gives up: $80 from work AND study time for an important test.", ru: "Она отказывается от: $80 за работу И времени на подготовку к важному тесту.", kk: "Ол бас тартады: жұмыстан $80 ЖӘНЕ маңызды тестке дайындалу уақытынан." },
              { en: "The opportunity cost is the BEST alternative forgone. If the test grade is worth more to her future than $80, studying is the opportunity cost. The total financial opportunity cost is $200 (ticket) + $80 (lost wages) = $280.", ru: "Альтернативная стоимость — ЛУЧШАЯ альтернатива. Если оценка важнее $80, учёба — альтернативная стоимость. Финансовая стоимость: $200 (билет) + $80 (потерянная зарплата) = $280.", kk: "Мүмкіндік құны — ЕҢ ЖАҚСЫ балама. Баға $80-тен маңыздырақ болса, оқу — мүмкіндік құны. Қаржылық құн: $200 (билет) + $80 (жоғалған жалақы) = $280." }
            ],
            answer: "The opportunity cost includes both the $80 in forgone wages and the study time for the important test. Financial opportunity cost is $280 total.",
            answerRu: "Альтернативная стоимость включает и $80 упущенного заработка, и время на подготовку к важному тесту. Финансовая альтернативная стоимость — всего $280.",
            answerKk: "Мүмкіндік құнына жоғалған $80 жалақы да, маңызды тестке дайындалу уақыты да кіреді. Қаржылық мүмкіндік құны жиыны $280."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You can spend $30 on a book or a T-shirt. You choose the book. What is the opportunity cost?",
            questionRu: "Вы можете потратить $30 на книгу или футболку. Выбираете книгу. Какова альтернативная стоимость?",
            questionKk: "Сіз $30 кітапқа немесе футболкаға жұмсай аласыз. Кітапты таңдайсыз. Мүмкіндік құны қандай?",
            answer: "The T-shirt you didn't buy — that's the next best alternative you gave up.",
            answerRu: "Футболка, которую вы не купили — это лучшая альтернатива, от которой вы отказались.",
            answerKk: "Сатып алмаған футболкаңыз — сіз бас тартқан ең жақсы балама.",
            hint: "What did you give up by choosing the book?",
            hintRu: "От чего вы отказались, выбрав книгу?",
            hintKk: "Кітапты таңдау арқылы неден бас тарттыңыз?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A student can work after school for $12/hour or attend a free coding class (3 hours). If the coding skills could lead to a $20/hour job later, what is the opportunity cost of each choice?",
            questionRu: "Ученик может работать после школы за $12/час или посещать бесплатный курс кодинга (3 часа). Навыки могут привести к работе за $20/час. Какова альтернативная стоимость каждого выбора?",
            questionKk: "Оқушы мектептен кейін $12/сағат жұмыс істей алады немесе тегін кодтау сабағына қатыса алады (3 сағат). Кодтау дағдылары $20/сағат жұмысқа әкелуі мүмкін. Әр таңдаудың мүмкіндік құны қандай?",
            answer: "Choosing work: opportunity cost is the coding skills (potential future $20/hour = $60/session value). Choosing class: opportunity cost is $12 × 3 = $36 in immediate wages. The coding class has higher long-term value.",
            answerRu: "Выбор работы: альтернативная стоимость — навыки программирования (потенциально $20/час в будущем = $60 за занятие). Выбор курсов: альтернативная стоимость — $12 × 3 = $36 немедленного заработка. Курсы программирования имеют бо́льшую долгосрочную ценность.",
            answerKk: "Жұмысты таңдау: мүмкіндік құны — кодтау дағдылары (болашақтағы ықтимал $20/сағат = сабақ сайын $60 құндылық). Сабақты таңдау: мүмкіндік құны — $12 × 3 = $36 лезде табыс. Кодтау сабағының ұзақ мерзімді құндылығы жоғары.",
            hint: "Compare the immediate vs long-term value of each option.",
            hintRu: "Сравните немедленную и долгосрочную ценность каждого варианта.",
            hintKk: "Әр нұсқаның дереу және ұзақ мерзімді құндылығын салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A high school graduate can: (A) start working immediately earning $30,000/year, or (B) attend college for 4 years at $15,000/year, then earn $50,000/year. Comparing the first 10 years after high school, which has the higher total earnings?",
            questionRu: "Выпускник может: (А) начать работать сразу за $30000/год, или (Б) учиться 4 года за $15000/год, потом зарабатывать $50000/год. За первые 10 лет после школы, что выгоднее?",
            questionKk: "Түлек: (А) бірден жылына $30000 жұмыс істей алады, немесе (Б) 4 жыл жылына $15000-ға оқиды, содан кейін жылына $50000 табады. Мектептен кейінгі алғашқы 10 жылды салыстырғанда, қайсысы тиімдірек?",
            answer: "Option A: $30,000 × 10 = $300,000. Option B: -$15,000 × 4 = -$60,000 (cost), then $50,000 × 6 = $300,000. Total B: $300,000 - $60,000 = $240,000. In 10 years, A earns $60,000 more. But after year 10, B earns $20,000/year more, overtaking A by year 13.",
            answerRu: "Вариант А: $30,000 × 10 = $300,000. Вариант Б: -$15,000 × 4 = -$60,000 (затраты), затем $50,000 × 6 = $300,000. Итого Б: $300,000 - $60,000 = $240,000. За 10 лет А зарабатывает на $60,000 больше. Но после 10-го года Б зарабатывает на $20,000/год больше и обгоняет А к 13-му году.",
            answerKk: "А нұсқасы: $30,000 × 10 = $300,000. Б нұсқасы: -$15,000 × 4 = -$60,000 (шығын), содан кейін $50,000 × 6 = $300,000. Б жиыны: $300,000 - $60,000 = $240,000. 10 жылда А $60,000 көп табады. Бірақ 10-жылдан кейін Б жылына $20,000 көп тауып, 13-жылға қарай А-ны басып озады.",
            xp: 20
          }
        ]
      },
      {
        title: "Comparison Shopping",
        titleRu: "Сравнительные покупки",
        titleKk: "Салыстырмалы сатып алу",
        content: "Comparison shopping means evaluating multiple options before purchasing to find the best value for your money. This includes comparing unit prices, reading reviews, checking for sales and coupons, and considering total cost of ownership. Online tools and price-tracking websites make comparison shopping easier than ever.",
        contentRu: "Сравнительные покупки — это оценка нескольких вариантов перед покупкой для лучшего соотношения цены и качества. Включает сравнение цен за единицу, чтение отзывов, проверку скидок и купонов, учёт полной стоимости владения. Онлайн-инструменты и сайты отслеживания цен облегчают этот процесс.",
        contentKk: "Салыстырмалы сатып алу — ақшаңызға ең жақсы құндылықты табу үшін сатып алудан бұрын бірнеше нұсқаны бағалау. Бұл бірлік бағаларын салыстыруды, пікірлерді оқуды, жеңілдіктер мен купондарды тексеруді және иеліктің жалпы құнын ескеруді қамтиды. Онлайн құралдар мен бағаларды бақылау сайттары бұл процесті жеңілдетеді.",
        keyFormulas: [
          {
            formula: "Total Cost of Ownership = Purchase Price + Maintenance + Operating Costs",
            formulaRu: "Общая стоимость владения = Цена покупки + Обслуживание + Эксплуатационные расходы",
            formulaKk: "Иелену құнының жиынтығы = Сатып алу бағасы + Күтім + Пайдалану шығындары",
            description: "The true cost includes all expenses over the product's lifetime",
            descriptionRu: "Истинная стоимость включает все расходы за весь срок службы",
            descriptionKk: "Нақты құн өнімнің бүкіл қызмет мерзімі бойы барлық шығындарды қамтиды"
          }
        ],
        solvedExamples: [
          {
            question: "Printer A costs $80 and ink cartridges cost $30 each (lasts 200 pages). Printer B costs $200 but uses ink costing $15 per cartridge (lasts 400 pages). You print 2,000 pages/year for 3 years. Which is cheaper in total?",
            questionRu: "Принтер А стоит $80, картриджи по $30 (200 стр.). Принтер Б стоит $200, картриджи по $15 (400 стр.). Вы печатаете 2000 стр./год 3 года. Что дешевле?",
            questionKk: "А принтері $80, картридждер $30 (200 бет). Б принтері $200, картридждер $15 (400 бет). Сіз 3 жыл бойы жылына 2000 бет басасыз. Қайсысы арзанырақ?",
            steps: [
              { en: "Total pages: 2,000 × 3 = 6,000. Printer A: $80 + (6,000 ÷ 200 × $30) = $80 + $900 = $980.", ru: "Всего страниц: 6000. А: $80 + (6000 ÷ 200 × $30) = $80 + $900 = $980.", kk: "Жалпы беттер: 6000. А: $80 + (6000 ÷ 200 × $30) = $80 + $900 = $980." },
              { en: "Printer B: $200 + (6,000 ÷ 400 × $15) = $200 + $225 = $425. Printer B saves $555.", ru: "Б: $200 + (6000 ÷ 400 × $15) = $200 + $225 = $425. Б экономит $555.", kk: "Б: $200 + (6000 ÷ 400 × $15) = $200 + $225 = $425. Б $555 үнемдейді." }
            ],
            answer: "Printer B costs $425 total vs Printer A's $980 — Printer B saves $555 despite costing $120 more upfront.",
            answerRu: "Принтер Б стоит всего $425 против $980 у принтера А — принтер Б экономит $555, хотя изначально дороже на $120.",
            answerKk: "Б принтерінің жалпы құны $425, А принтерінікі $980 — Б принтері бастапқы бағасы $120 қымбат болса да, $555 үнемдейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Brand A cereal: 400g for $3.20. Brand B cereal: 500g for $3.75. Which is the better deal per gram?",
            questionRu: "Каша А: 400г за $3.20. Каша Б: 500г за $3.75. Что выгоднее за грамм?",
            questionKk: "А бренді: 400г $3.20. Б бренді: 500г $3.75. Грамына қайсысы тиімдірек?",
            answer: "A: $3.20 ÷ 400 = $0.008/g. B: $3.75 ÷ 500 = $0.0075/g. Brand B is cheaper per gram.",
            answerRu: "А: $3.20 ÷ 400 = $0.008/г. Б: $3.75 ÷ 500 = $0.0075/г. Бренд Б дешевле за грамм.",
            answerKk: "А: $3.20 ÷ 400 = грамына $0.008. Б: $3.75 ÷ 500 = грамына $0.0075. Б бренді грамм бойынша арзанырақ.",
            hint: "Divide total price by grams for each.",
            hintRu: "Разделите цену на граммы для каждого.",
            hintKk: "Әрқайсысы үшін бағаны грамға бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Streaming Service A: $12/month, 10,000 titles. Service B: $8/month, 5,000 titles. Service C: $15/month, 20,000 titles. Which has the best cost per title? Does that make it the best value?",
            questionRu: "Стриминг А: $12/мес, 10000 наименований. Б: $8/мес, 5000. В: $15/мес, 20000. У кого лучшая цена за наименование? Это лучшая ценность?",
            questionKk: "Ағынды қызмет А: айына $12, 10000 атау. Б: айына $8, 5000. В: айына $15, 20000. Атауға қайсысы тиімдірек? Бұл ең жақсы құндылық па?",
            answer: "A: $0.0012/title. B: $0.0016/title. C: $0.00075/title. C is cheapest per title, but cost per title isn't everything — quality, relevance, and whether you'll watch 20,000 titles matters more.",
            answerRu: "А: $0.0012/наименование. Б: $0.0016/наименование. В: $0.00075/наименование. В — самое дешёвое за наименование, но цена за наименование — не всё: качество, актуальность и то, посмотрите ли вы 20,000 наименований, важнее.",
            answerKk: "А: атауына $0.0012. Б: атауына $0.0016. В: атауына $0.00075. В атау бойынша ең арзаны, бірақ атау құны бәрін шешпейді — сапа, өзектілік және 20,000 атауды қарап шығатыныңыз маңыздырақ.",
            hint: "Calculate price per title, but think about real usage.",
            hintRu: "Рассчитайте цену за наименование, но подумайте о реальном использовании.",
            hintKk: "Атау бағасын есептеңіз, бірақ нақты пайдалануды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Car A: $20,000 purchase, 30 mpg, $100/month insurance. Car B: $28,000 purchase, 45 mpg, $80/month insurance. Gas costs $4/gallon and you drive 15,000 miles/year. Which car is cheaper over 5 years?",
            questionRu: "Авто А: $20000, 30 миль/галлон, страховка $100/мес. Авто Б: $28000, 45 миль/галлон, страховка $80/мес. Бензин $4/галлон, пробег 15000 миль/год. Что дешевле за 5 лет?",
            questionKk: "А көлігі: $20000, 30 миля/галлон, сақтандыру $100/ай. Б көлігі: $28000, 45 миля/галлон, сақтандыру $80/ай. Бензин $4/галлон, жылына 15000 миля жүресіз. 5 жылда қайсысы арзанырақ?",
            answer: "Car A gas: 15,000 ÷ 30 × $4 = $2,000/year × 5 = $10,000. Insurance: $100 × 60 = $6,000. Total A: $36,000. Car B gas: 15,000 ÷ 45 × $4 = $1,333/year × 5 = $6,667. Insurance: $80 × 60 = $4,800. Total B: $39,467. Car A is cheaper by $3,467 over 5 years.",
            answerRu: "Бензин для Авто А: 15,000 ÷ 30 × $4 = $2,000/год × 5 = $10,000. Страховка: $100 × 60 = $6,000. Итого А: $36,000. Бензин для Авто Б: 15,000 ÷ 45 × $4 = $1,333/год × 5 = $6,667. Страховка: $80 × 60 = $4,800. Итого Б: $39,467. Авто А дешевле на $3,467 за 5 лет.",
            answerKk: "А көлігінің бензині: 15,000 ÷ 30 × $4 = жылына $2,000 × 5 = $10,000. Сақтандыру: $100 × 60 = $6,000. А жиыны: $36,000. Б көлігінің бензині: 15,000 ÷ 45 × $4 = жылына $1,333 × 5 = $6,667. Сақтандыру: $80 × 60 = $4,800. Б жиыны: $39,467. А көлігі 5 жылда $3,467 арзанырақ.",
            xp: 20
          }
        ]
      },
      {
        title: "Emergency Fund",
        titleRu: "Резервный фонд",
        titleKk: "Төтенше жағдай қоры",
        content: "An emergency fund is money set aside specifically for unexpected expenses like medical bills, car repairs, or job loss. Financial experts recommend saving 3-6 months of living expenses. This fund should be in a liquid, accessible account — not invested in stocks or locked in long-term deposits.",
        contentRu: "Резервный фонд — деньги на непредвиденные расходы: медицинские счета, ремонт авто, потеря работы. Эксперты рекомендуют 3-6 месяцев расходов на жизнь. Фонд должен быть на ликвидном, доступном счёте — не в акциях и не на долгосрочном депозите.",
        contentKk: "Төтенше жағдай қоры — медициналық шоттар, көлік жөндеу немесе жұмысты жоғалту сияқты күтпеген шығындарға арнайы бөлінген ақша. Қаржы сарапшылары 3-6 айлық тұрмыс шығындарын жинауды ұсынады. Бұл қор өтімді, қол жетімді шотта болуы керек — акцияларда немесе ұзақ мерзімді салымдарда емес.",
        keyFormulas: [
          {
            formula: "Emergency Fund Target = Monthly Expenses × Number of Months (3-6)",
            formulaRu: "Целевой резервный фонд = Месячные расходы × Количество месяцев (3-6)",
            formulaKk: "Төтенше жағдай қорының мақсаты = Айлық шығыстар × Айлар саны (3-6)",
            description: "How much you need saved for financial security",
            descriptionRu: "Сколько нужно накопить для финансовой безопасности",
            descriptionKk: "Қаржылық қауіпсіздік үшін қанша жинау керек"
          }
        ],
        solvedExamples: [
          {
            question: "A young professional has monthly expenses of $2,500. She wants a 4-month emergency fund and can save $400/month. How much does she need and how long will it take?",
            questionRu: "Молодой специалист тратит $2500/мес. Она хочет фонд на 4 месяца и может копить $400/мес. Сколько нужно и за какой срок?",
            questionKk: "Жас маман айына $2500 жұмсайды. Ол 4 айлық қор жинағысы келеді және айына $400 жинай алады. Қанша керек және қанша уақыт кетеді?",
            steps: [
              { en: "Target: $2,500 × 4 = $10,000.", ru: "Цель: $2500 × 4 = $10000.", kk: "Мақсат: $2500 × 4 = $10000." },
              { en: "Time: $10,000 ÷ $400 = 25 months (about 2 years and 1 month).", ru: "Время: $10000 ÷ $400 = 25 месяцев (около 2 лет и 1 месяца).", kk: "Уақыт: $10000 ÷ $400 = 25 ай (шамамен 2 жыл 1 ай)." }
            ],
            answer: "She needs $10,000 and it will take 25 months to build the fund.",
            answerRu: "Ей нужно $10,000, и на создание фонда уйдёт 25 месяцев.",
            answerKk: "Оған $10,000 керек, қор жинауға 25 ай кетеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Your monthly expenses are $800. How much do you need for a 3-month emergency fund?",
            questionRu: "Ваши месячные расходы $800. Сколько нужно для резервного фонда на 3 месяца?",
            questionKk: "Айлық шығындарыңыз $800. 3 айлық төтенше жағдай қорына қанша керек?",
            answer: "$800 × 3 = $2,400",
            answerRu: "$800 × 3 = $2,400",
            answerKk: "$800 × 3 = $2,400",
            hint: "Multiply monthly expenses by the number of months.",
            hintRu: "Умножьте ежемесячные расходы на количество месяцев.",
            hintKk: "Айлық шығындарды айлар санына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A family spends $3,200/month. They have $5,000 saved and add $500/month. How many more months until they reach a 6-month emergency fund?",
            questionRu: "Семья тратит $3200/мес. Накоплено $5000, добавляют $500/мес. Через сколько месяцев будет фонд на 6 месяцев?",
            questionKk: "Отбасы айына $3200 жұмсайды. $5000 жиналған, айына $500 қосады. 6 айлық қорға жету үшін тағы қанша ай керек?",
            answer: "Target: $3,200 × 6 = $19,200. Remaining: $19,200 - $5,000 = $14,200. Months: $14,200 ÷ $500 = 28.4 → 29 months.",
            answerRu: "Цель: $3,200 × 6 = $19,200. Осталось: $19,200 - $5,000 = $14,200. Месяцев: $14,200 ÷ $500 = 28.4 → 29 месяцев.",
            answerKk: "Мақсат: $3,200 × 6 = $19,200. Қалдығы: $19,200 - $5,000 = $14,200. Айлар: $14,200 ÷ $500 = 28.4 → 29 ай.",
            hint: "Find the target, subtract what you have, then divide by monthly savings.",
            hintRu: "Найдите цель, вычтите имеющееся, разделите на ежемесячные сбережения.",
            hintKk: "Мақсатты табыңыз, бар соманы шегеріңіз, айлық жинаққа бөліңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A freelancer has variable income: $2,000-$5,000/month with average expenses of $2,800. Should she base her emergency fund on 3, 6, or more months? Calculate the target for each and explain her best choice.",
            questionRu: "Фрилансер с переменным доходом: $2000-$5000/мес, средние расходы $2800. На сколько месяцев нужен фонд: 3, 6 или больше? Рассчитайте для каждого и обоснуйте выбор.",
            questionKk: "Фрилансердің ауыспалы табысы бар: айына $2000-$5000, орташа шығындар $2800. 3, 6 немесе одан көп айға қор жинау керек пе? Әрқайсысы үшін есептеп, таңдауын түсіндіріңіз.",
            answer: "3 months: $2,800 × 3 = $8,400. 6 months: $2,800 × 6 = $16,800. 9 months: $2,800 × 9 = $25,200. Because her income is variable and she could earn as low as $2,000 (below expenses), she should aim for 6-9 months ($16,800-$25,200) to cover periods when income drops below expenses.",
            answerRu: "3 месяца: $2,800 × 3 = $8,400. 6 месяцев: $2,800 × 6 = $16,800. 9 месяцев: $2,800 × 9 = $25,200. Поскольку её доход переменчивый и может опускаться до $2,000 (ниже расходов), ей стоит ориентироваться на 6-9 месяцев ($16,800-$25,200), чтобы покрыть периоды, когда доход падает ниже расходов.",
            answerKk: "3 ай: $2,800 × 3 = $8,400. 6 ай: $2,800 × 6 = $16,800. 9 ай: $2,800 × 9 = $25,200. Табысы ауыспалы және $2,000-ға дейін түсуі мүмкін болғандықтан (шығындардан төмен), табыс шығындардан төмен түсетін кезеңдерді жабу үшін оған 6-9 айды ($16,800-$25,200) мақсат еткен жөн.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Finance & Investing_10": {
    planetName: "Finance & Investing",
    introduction: {
      en: "Enter the world of investing. Learn how stock markets work, explore different investment vehicles like ETFs and bonds, and understand the principles of building a diversified portfolio.",
      ru: "Войдите в мир инвестиций. Узнайте, как работают фондовые рынки, исследуйте инвестиционные инструменты — ETF и облигации — и освойте принципы диверсифицированного портфеля."
    },
    sections: [
      {
        title: "Stock Market",
        titleRu: "Фондовый рынок",
        titleKk: "Қор нарығы",
        content: "The stock market is a marketplace where shares of publicly traded companies are bought and sold. Major stock exchanges include the NYSE (New York Stock Exchange) and NASDAQ. When you buy a stock, you become a partial owner of that company and can profit from price appreciation and dividends.",
        contentRu: "Фондовый рынок — площадка для покупки и продажи акций публичных компаний. Крупнейшие биржи — NYSE и NASDAQ. Покупая акцию, вы становитесь совладельцем компании и можете зарабатывать на росте цен и дивидендах.",
        contentKk: "Қор нарығы — жария компаниялардың акцияларын сатып алу және сату нарығы. Негізгі биржалар — NYSE және NASDAQ. Акция сатып алғанда сіз компанияның ішінара иесі боласыз және баға өсімі мен дивидендтерден пайда ала аласыз.",
        keyFormulas: [
          {
            formula: "Market Capitalization = Share Price × Total Shares Outstanding",
            formulaRu: "Рыночная капитализация = Цена акции × Общее количество акций в обращении",
            formulaKk: "Нарықтық капитализация = Акция бағасы × Айналымдағы акциялардың жалпы саны",
            description: "The total market value of a company's shares",
            descriptionRu: "Общая рыночная стоимость акций компании",
            descriptionKk: "Компания акцияларының жалпы нарықтық құны"
          }
        ],
        solvedExamples: [
          {
            question: "A company has 10 million shares outstanding and each share trades at $50. What is the company's market capitalization? If the price rises to $55, what is the new market cap?",
            questionRu: "У компании 10 млн акций по $50. Какова рыночная капитализация? Если цена вырастет до $55?",
            questionKk: "Компанияда 10 млн акция бар, әрқайсысы $50. Нарықтық капитализациясы қанша? Баға $55-ке көтерілсе ше?",
            steps: [
              { en: "Market Cap = 10,000,000 × $50 = $500,000,000 ($500 million).", ru: "Капитализация = 10 000 000 × $50 = $500 000 000 ($500 млн).", kk: "Капитализация = 10 000 000 × $50 = $500 000 000 ($500 млн)." },
              { en: "New Market Cap = 10,000,000 × $55 = $550,000,000 ($550 million). Increase of $50 million.", ru: "Новая = 10 000 000 × $55 = $550 000 000 ($550 млн). Рост на $50 млн.", kk: "Жаңа = 10 000 000 × $55 = $550 000 000 ($550 млн). $50 млн-ға өсті." }
            ],
            answer: "Original market cap: $500 million. New market cap: $550 million (10% increase).",
            answerRu: "Изначальная капитализация: $500 млн. Новая капитализация: $550 млн (рост на 10%).",
            answerKk: "Бастапқы капитализация: $500 млн. Жаңа капитализация: $550 млн (10%-ға өсті)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A company has 5 million shares at $20 each. What is its market capitalization?",
            questionRu: "У компании 5 млн акций по $20. Какова рыночная капитализация?",
            questionKk: "Компанияда 5 млн акция бар, әрқайсысы $20. Нарықтық капитализациясы қанша?",
            answer: "5,000,000 × $20 = $100,000,000 ($100 million)",
            answerRu: "5 000 000 × $20 = $100 000 000 ($100 млн)",
            answerKk: "5 000 000 × $20 = $100 000 000 ($100 млн)",
            hint: "Multiply shares by price per share.",
            hintRu: "Умножьте количество акций на цену.",
            hintKk: "Акциялар санын бір акцияның бағасына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Company A: 50 million shares at $30. Company B: 10 million shares at $120. Which company is worth more to the market?",
            questionRu: "Компания А: 50 млн акций по $30. Компания Б: 10 млн акций по $120. Какая компания стоит дороже?",
            questionKk: "А компаниясы: 50 млн акция $30-тен. Б компаниясы: 10 млн акция $120-тен. Қай компания нарыққа құндырақ?",
            answer: "A: 50M × $30 = $1.5 billion. B: 10M × $120 = $1.2 billion. Company A is worth more despite having a lower share price.",
            answerRu: "А: 50 млн × $30 = $1,5 млрд. Б: 10 млн × $120 = $1,2 млрд. Компания А стоит дороже, несмотря на более низкую цену акции.",
            answerKk: "А: 50 млн × $30 = $1,5 млрд. Б: 10 млн × $120 = $1,2 млрд. А компаниясы акция бағасы төмен болса да, құндырақ.",
            hint: "A higher stock price doesn't always mean a bigger company.",
            hintRu: "Более высокая цена акции не всегда означает более крупную компанию.",
            hintKk: "Жоғарырақ акция бағасы әрқашан үлкенірек компанияны білдірмейді.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A company has a market cap of $2 billion with 40 million shares. It announces a 2-for-1 stock split. After the split, what is the share price and number of shares? Does the market cap change?",
            questionRu: "Капитализация $2 млрд, 40 млн акций. Объявлен сплит 2-к-1. Каковы цена и количество акций после сплита? Меняется ли капитализация?",
            questionKk: "Капитализация $2 млрд, 40 млн акция. 2-ге-1 акция бөлу жарияланды. Бөлуден кейін акция бағасы мен саны қандай? Капитализация өзгере ме?",
            answer: "Original price: $2B ÷ 40M = $50. After 2-for-1 split: 80 million shares at $25 each. Market cap: 80M × $25 = $2 billion — unchanged. Stock splits don't change company value.",
            answerRu: "Исходная цена: $2 млрд ÷ 40 млн = $50. После сплита 2-к-1: 80 млн акций по $25. Капитализация: 80 млн × $25 = $2 млрд — не изменилась. Сплит акций не меняет стоимость компании.",
            answerKk: "Бастапқы баға: $2 млрд ÷ 40 млн = $50. 2-ге-1 бөлуден кейін: 80 млн акция, әрқайсысы $25. Капитализация: 80 млн × $25 = $2 млрд — өзгермеді. Акцияларды бөлу компания құнын өзгертпейді.",
            xp: 20
          }
        ]
      },
      {
        title: "How Stocks Work",
        titleRu: "Как работают акции",
        titleKk: "Акциялар қалай жұмыс істейді",
        content: "When you buy stock, you own a fraction of the company and share in its successes and failures. Stock prices move based on supply and demand — when more people want to buy (bullish), prices rise; when more want to sell (bearish), prices fall. You can profit two ways: selling at a higher price (capital gains) or receiving dividend payments.",
        contentRu: "Покупая акцию, вы владеете долей компании и разделяете её успехи и неудачи. Цены двигаются по спросу и предложению — при росте спроса (бычий рынок) цены растут, при росте продаж (медвежий) — падают. Заработать можно двумя способами: продажа дороже (прирост капитала) или получение дивидендов.",
        contentKk: "Акция сатып алғанда сіз компанияның бір бөлігіне ие боласыз және оның табыстары мен сәтсіздіктеріне ортақтасасыз. Акция бағасы сұраныс пен ұсынысқа байланысты қозғалады — көбірек адам сатып алғысы келсе (бұқалық), баға көтеріледі; көбірек сатқысы келсе (аюлық), баға түседі. Пайда табудың екі жолы бар: жоғары бағамен сату (капитал өсімі) немесе дивидендтер алу.",
        keyFormulas: [
          {
            formula: "Capital Gain = Selling Price - Purchase Price",
            formulaRu: "Прирост капитала = Цена продажи - Цена покупки",
            formulaKk: "Капитал өсімі = Сату бағасы - Сатып алу бағасы",
            description: "Your profit from selling a stock at a higher price than you bought it",
            descriptionRu: "Ваша прибыль от продажи акции дороже покупки",
            descriptionKk: "Акцияны сатып алғаннан жоғары бағамен сатудан түскен пайдаңыз"
          },
          {
            formula: "Total Return = Capital Gain + Dividends Received",
            formulaRu: "Общая доходность = Прирост капитала + Полученные дивиденды",
            formulaKk: "Жалпы табыстылық = Капитал өсімі + Алынған дивидендтер",
            description: "The complete profit from owning a stock",
            descriptionRu: "Полная прибыль от владения акцией",
            descriptionKk: "Акцияға ие болудан түскен толық пайда"
          }
        ],
        solvedExamples: [
          {
            question: "You buy 20 shares of a company at $45 each. Over the year, you receive $1.50/share in dividends. You sell all shares at $52. What is your total return?",
            questionRu: "Вы покупаете 20 акций по $45. За год получаете дивиденды $1.50/акция. Продаёте по $52. Какова общая доходность?",
            questionKk: "Сіз 20 акцияны $45-тен сатып аласыз. Жыл бойы $1.50/акция дивиденд аласыз. Барлығын $52-ден сатасыз. Жалпы қайтарымыңыз қанша?",
            steps: [
              { en: "Capital Gain: (52 - 45) × 20 = $7 × 20 = $140. Dividends: $1.50 × 20 = $30.", ru: "Прирост: (52 - 45) × 20 = $140. Дивиденды: $1,50 × 20 = $30.", kk: "Капитал өсімі: (52 - 45) × 20 = $140. Дивидендтер: $1,50 × 20 = $30." },
              { en: "Total Return: $140 + $30 = $170. Return on investment: $170 ÷ ($45 × 20) = $170 ÷ $900 = 18.9%.", ru: "Общий доход: $140 + $30 = $170. Доходность: $170 ÷ $900 = 18,9%.", kk: "Жалпы қайтарым: $140 + $30 = $170. Инвестиция қайтарымы: $170 ÷ $900 = 18,9%." }
            ],
            answer: "$170 total return (18.9% return on investment)",
            answerRu: "Общая доходность $170 (18,9% от вложенной суммы)",
            answerKk: "Жалпы қайтарым $170 (салынған соманың 18,9%)"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You buy a stock at $30 and sell it at $38. What is your capital gain per share?",
            questionRu: "Вы покупаете акцию за $30 и продаёте за $38. Каков прирост капитала на акцию?",
            questionKk: "Сіз акцияны $30-тен сатып алып, $38-ге сатасыз. Бір акцияға капитал өсімі қанша?",
            answer: "$38 - $30 = $8 per share",
            answerRu: "$38 - $30 = $8 на акцию",
            answerKk: "$38 - $30 = бір акцияға $8",
            hint: "Subtract purchase price from selling price.",
            hintRu: "Вычтите цену покупки из цены продажи.",
            hintKk: "Сату бағасынан сатып алу бағасын шегеріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You buy 50 shares at $25. The stock drops to $20. If you sell now, what is your loss? If you hold and it recovers to $30, what would be your gain instead?",
            questionRu: "Вы покупаете 50 акций по $25. Цена падает до $20. Каков убыток при продаже? Если дождаться $30, каков будет доход?",
            questionKk: "Сіз 50 акцияны $25-тен сатып аласыз. Баға $20-ға түседі. Қазір сатсаңыз залалыңыз қанша? $30-ға көтерілуін күтсеңіз, пайда қанша болар еді?",
            answer: "Sell at $20: (20 - 25) × 50 = -$250 loss. Hold to $30: (30 - 25) × 50 = +$250 gain. A $500 difference in outcome.",
            answerRu: "Продажа по $20: (20 - 25) × 50 = -$250 убытка. Удержание до $30: (30 - 25) × 50 = +$250 прибыли. Разница в результате — $500.",
            answerKk: "$20-ден сату: (20 - 25) × 50 = -$250 залал. $30-ге дейін ұстау: (30 - 25) × 50 = +$250 пайда. Нәтижедегі айырма — $500.",
            hint: "Calculate gain/loss for each scenario separately.",
            hintRu: "Рассчитайте прибыль/убыток для каждого сценария.",
            hintKk: "Әр сценарий үшін пайда/залалды бөлек есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Investor A buys 100 shares of a growth stock at $40 (no dividend). Investor B buys 100 shares of a dividend stock at $40 with $2/share annual dividend. After 3 years, A's stock is at $58 and B's is at $48. Who earned more in total return?",
            questionRu: "А покупает 100 акций растущей компании по $40 (без дивидендов). Б покупает 100 акций по $40 с дивидендами $2/акция/год. Через 3 года акция А стоит $58, Б — $48. Кто заработал больше?",
            questionKk: "А 100 өсу акциясын $40-тен сатып алады (дивидендсіз). Б 100 акцияны $40-тен $2/акция жылдық дивидендпен сатып алады. 3 жылдан кейін А акциясы $58, Б акциясы $48. Кім көп тапты?",
            answer: "A: Capital gain = (58-40) × 100 = $1,800. Total: $1,800. B: Capital gain = (48-40) × 100 = $800. Dividends = $2 × 100 × 3 = $600. Total: $1,400. Investor A earned $400 more.",
            answerRu: "А: прирост капитала = (58-40) × 100 = $1800. Итого: $1800. Б: прирост капитала = (48-40) × 100 = $800. Дивиденды = $2 × 100 × 3 = $600. Итого: $1400. Инвестор А заработал на $400 больше.",
            answerKk: "А: капитал өсімі = (58-40) × 100 = $1800. Барлығы: $1800. Б: капитал өсімі = (48-40) × 100 = $800. Дивидендтер = $2 × 100 × 3 = $600. Барлығы: $1400. А инвесторы $400-ге артық тапты.",
            xp: 20
          }
        ]
      },
      {
        title: "Stock Charts",
        titleRu: "Графики акций",
        titleKk: "Акция графиктері",
        content: "Stock charts visually display price movements over time, helping investors identify trends and patterns. A line chart shows closing prices, while a candlestick chart shows the open, high, low, and close for each period. Key concepts include support levels (price floor), resistance levels (price ceiling), and volume (number of shares traded).",
        contentRu: "Графики акций визуально отображают движение цен, помогая выявлять тренды и паттерны. Линейный график показывает цены закрытия, а свечной — открытие, максимум, минимум и закрытие за период. Ключевые понятия: уровни поддержки (ценовой пол), сопротивления (потолок) и объём (количество торгуемых акций).",
        contentKk: "Акция графиктері баға қозғалысын көрнекі түрде көрсетіп, инвесторларға трендтер мен заңдылықтарды анықтауға көмектеседі. Сызықтық график жабу бағаларын, ал шамшырақ графигі әр кезеңдегі ашу, ең жоғары, ең төмен және жабу бағаларын көрсетеді. Негізгі тұжырымдар: қолдау деңгейлері (баға едені), қарсылық деңгейлері (баға төбесі) және көлем (саудаланған акциялар саны).",
        keyFormulas: [
          {
            formula: "Price Change % = ((New Price - Old Price) ÷ Old Price) × 100",
            formulaRu: "Изменение цены % = ((Новая цена - Старая цена) ÷ Старая цена) × 100",
            formulaKk: "Баға өзгерісі % = ((Жаңа баға - Ескі баға) ÷ Ескі баға) × 100",
            description: "Measure how much a stock's price has moved in percentage terms",
            descriptionRu: "Процентное изменение цены акции",
            descriptionKk: "Акция бағасының пайыздық өзгерісін өлшеу"
          }
        ],
        solvedExamples: [
          {
            question: "A stock opened at $100, hit a high of $108, dropped to a low of $97, and closed at $104. Calculate the daily percentage change and the daily range.",
            questionRu: "Акция открылась по $100, максимум $108, минимум $97, закрытие $104. Рассчитайте дневное процентное изменение и диапазон.",
            questionKk: "Акция $100-тен ашылды, ең жоғары $108, ең төмен $97, жабу $104. Күнделікті пайыздық өзгеріс пен диапазонды есептеңіз.",
            steps: [
              { en: "Daily change: (($104 - $100) ÷ $100) × 100 = 4% gain.", ru: "Дневное изменение: (($104 - $100) ÷ $100) × 100 = рост 4%.", kk: "Күнделікті өзгеріс: (($104 - $100) ÷ $100) × 100 = 4% өсім." },
              { en: "Daily range: $108 - $97 = $11. This shows the stock was volatile within the day despite closing up only 4%.", ru: "Диапазон: $108 - $97 = $11. Акция была волатильна внутри дня, несмотря на рост всего 4%.", kk: "Диапазон: $108 - $97 = $11. Акция тек 4% көтерілсе де, күн ішінде құбылмалы болды." }
            ],
            answer: "Daily change: +4%. Daily range: $11 ($97 to $108).",
            answerRu: "Дневное изменение: +4%. Дневной диапазон: $11 (от $97 до $108).",
            answerKk: "Күнделікті өзгеріс: +4%. Күнделікті диапазон: $11 ($97-ден $108-ге дейін)."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A stock was $80 yesterday and is $84 today. What is the percentage change?",
            questionRu: "Акция стоила $80 вчера и $84 сегодня. Каков процент изменения?",
            questionKk: "Акция кеше $80, бүгін $84. Пайыздық өзгеріс қанша?",
            answer: "(($84 - $80) ÷ $80) × 100 = 5% increase",
            answerRu: "(($84 - $80) ÷ $80) × 100 = рост на 5%",
            answerKk: "(($84 - $80) ÷ $80) × 100 = 5% өсім",
            hint: "Divide the change by the original price, multiply by 100.",
            hintRu: "Разделите изменение на первоначальную цену и умножьте на 100.",
            hintKk: "Өзгерісті бастапқы бағаға бөліп, 100-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A stock drops from $120 to $96. What is the percentage decline? If it then rises 25% from $96, does it return to $120?",
            questionRu: "Акция падает с $120 до $96. Каков процент падения? Если потом вырастет на 25% от $96, вернётся ли к $120?",
            questionKk: "Акция $120-тен $96-ға түседі. Пайыздық төмендеу қанша? Содан кейін $96-дан 25% көтерілсе, $120-ге қайта ма?",
            answer: "Decline: (120-96)/120 × 100 = 20% drop. Recovery: $96 × 1.25 = $120. Yes, a 25% gain recovers a 20% loss — but note it takes a bigger percentage gain to recover from a loss.",
            answerRu: "Падение: (120-96)/120 × 100 = 20%. Восстановление: $96 × 1,25 = $120. Да, рост на 25% компенсирует падение на 20% — но обратите внимание, что для восстановления после убытка нужен больший процент роста.",
            answerKk: "Төмендеу: (120-96)/120 × 100 = 20%. Қалпына келу: $96 × 1,25 = $120. Иә, 25% өсім 20% залалды жабады — бірақ залалдан қалпына келу үшін үлкенірек пайыздық өсім керек екенін ескеріңіз.",
            hint: "Calculate each percentage change separately using its own base.",
            hintRu: "Рассчитайте каждое изменение от своей базы.",
            hintKk: "Әр пайыздық өзгерісті өз базасынан бөлек есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Stock X: Week 1 price $50, Week 2 $55, Week 3 $52, Week 4 $58. Stock Y: Week 1 $100, Week 2 $108, Week 3 $103, Week 4 $112. Which stock had a higher overall return? Which was more volatile?",
            questionRu: "Акция X: нед.1 $50, нед.2 $55, нед.3 $52, нед.4 $58. Акция Y: нед.1 $100, нед.2 $108, нед.3 $103, нед.4 $112. У какой выше доходность? Какая более волатильна?",
            questionKk: "X акциясы: 1-апта $50, 2-апта $55, 3-апта $52, 4-апта $58. Y акциясы: 1-апта $100, 2-апта $108, 3-апта $103, 4-апта $112. Қайсысының жалпы қайтарымы жоғары? Қайсысы көбірек құбылмалы?",
            answer: "X return: ($58-$50)/$50 = 16%. Y return: ($112-$100)/$100 = 12%. X had higher return. Volatility — X weekly changes: +10%, -5.5%, +11.5%. Y weekly changes: +8%, -4.6%, +8.7%. X was more volatile with larger swings.",
            answerRu: "Доходность X: ($58-$50)/$50 = 16%. Доходность Y: ($112-$100)/$100 = 12%. У X доходность выше. Волатильность — недельные изменения X: +10%, -5,5%, +11,5%. Изменения Y: +8%, -4,6%, +8,7%. X был более волатилен, с более резкими колебаниями.",
            answerKk: "X қайтарымы: ($58-$50)/$50 = 16%. Y қайтарымы: ($112-$100)/$100 = 12%. X қайтарымы жоғары. Құбылмалылық — X апталық өзгерістері: +10%, -5,5%, +11,5%. Y өзгерістері: +8%, -4,6%, +8,7%. X көбірек құбылмалы болды, өзгерістері үлкенірек.",
            xp: 20
          }
        ]
      },
      {
        title: "ETFs",
        titleRu: "ETF-фонды",
        titleKk: "ETF қорлары",
        content: "An ETF (Exchange-Traded Fund) is a basket of securities — stocks, bonds, or commodities — that trades on an exchange like a single stock. ETFs offer instant diversification because buying one share gives you exposure to many companies. They typically have lower fees than mutual funds and are popular with beginner investors.",
        contentRu: "ETF (биржевой фонд) — корзина ценных бумаг (акции, облигации, товары), которая торгуется на бирже как одна акция. ETF дают мгновенную диверсификацию — покупка одной доли открывает доступ ко многим компаниям. У них обычно ниже комиссии, чем у паевых фондов, они популярны среди начинающих инвесторов.",
        contentKk: "ETF (биржалық қор) — биржада бір акция сияқты саудаланатын бағалы қағаздар (акциялар, облигациялар, тауарлар) себеті. ETF лезде әртараптандыруды ұсынады, өйткені бір үлесті сатып алу көптеген компанияларға қол жеткізу береді. Олардың комиссиясы әдетте пай қорларына қарағанда төмен және жаңадан бастаған инвесторлар арасында танымал.",
        keyFormulas: [
          {
            formula: "Expense Ratio Cost = Investment Amount × Expense Ratio",
            formulaRu: "Стоимость комиссии фонда = Сумма инвестиций × Коэффициент расходов",
            formulaKk: "Қор комиссиясының құны = Инвестиция сомасы × Шығын коэффициенті",
            description: "Annual fee charged by the ETF, expressed as a percentage of your investment",
            descriptionRu: "Ежегодная комиссия ETF в процентах от инвестиции",
            descriptionKk: "ETF алатын жылдық комиссия, инвестицияңыздың пайызы ретінде"
          }
        ],
        solvedExamples: [
          {
            question: "An S&P 500 ETF has an expense ratio of 0.03% and you invest $10,000. A comparable mutual fund has a 1% expense ratio. How much does each cost in fees per year? How much do you save with the ETF over 10 years?",
            questionRu: "ETF на S&P 500 имеет комиссию 0,03%, вы инвестируете $10000. Паевой фонд — 1%. Сколько комиссий в год? Сколько вы экономите с ETF за 10 лет?",
            questionKk: "S&P 500 ETF-нің шығын коэффициенті 0,03%, сіз $10000 саласыз. Пай қорының комиссиясы 1%. Жылына комиссия қанша? ETF-пен 10 жылда қанша үнемдейсіз?",
            steps: [
              { en: "ETF fee: $10,000 × 0.0003 = $3/year. Mutual fund: $10,000 × 0.01 = $100/year.", ru: "ETF: $10000 × 0,0003 = $3/год. Фонд: $10000 × 0,01 = $100/год.", kk: "ETF: $10000 × 0,0003 = жылына $3. Қор: $10000 × 0,01 = жылына $100." },
              { en: "Annual savings: $100 - $3 = $97/year. Over 10 years: $97 × 10 = $970 saved with ETF.", ru: "Экономия: $97/год. За 10 лет: $970.", kk: "Жылдық үнемдеу: $97. 10 жылда: $970 үнемделді." }
            ],
            answer: "ETF costs $3/year vs mutual fund $100/year. Over 10 years, ETF saves $970 in fees.",
            answerRu: "ETF стоит $3/год против $100/год у паевого фонда. За 10 лет ETF экономит $970 на комиссиях.",
            answerKk: "ETF жылына $3 тұрады, ал пай қоры жылына $100. 10 жылда ETF комиссиядан $970 үнемдейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You invest $5,000 in an ETF with a 0.1% expense ratio. What is the annual fee?",
            questionRu: "Вы инвестируете $5000 в ETF с комиссией 0,1%. Какова годовая комиссия?",
            questionKk: "Сіз 0,1% шығын коэффициентті ETF-ке $5000 саласыз. Жылдық комиссия қанша?",
            answer: "$5,000 × 0.001 = $5/year",
            answerRu: "$5000 × 0,001 = $5/год",
            answerKk: "$5000 × 0,001 = жылына $5",
            hint: "Multiply your investment by the expense ratio.",
            hintRu: "Умножьте инвестицию на комиссию.",
            hintKk: "Инвестицияңызды шығын коэффициентіне көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "ETF A tracks the S&P 500 (500 US companies) with 0.03% fee. ETF B tracks international stocks (3,000 companies) with 0.11% fee. You have $20,000. How much would you pay in fees for each? Why might you own both?",
            questionRu: "ETF A — S&P 500 (500 компаний), комиссия 0,03%. ETF Б — международные акции (3000 компаний), комиссия 0,11%. У вас $20000. Каковы комиссии? Зачем иметь оба?",
            questionKk: "А ETF — S&P 500 (500 компания), 0,03% комиссия. Б ETF — халықаралық акциялар (3000 компания), 0,11% комиссия. Сізде $20000 бар. Әрқайсысының комиссиясы қанша? Неге екеуі де керек?",
            answer: "ETF A: $20,000 × 0.0003 = $6. ETF B: $20,000 × 0.0011 = $22. You might own both for geographic diversification — US and international markets don't always move together.",
            answerRu: "ETF A: $20000 × 0,0003 = $6. ETF Б: $20000 × 0,0011 = $22. Оба можно держать ради географической диверсификации — рынки США и международные не всегда движутся синхронно.",
            answerKk: "А ETF: $20000 × 0,0003 = $6. Б ETF: $20000 × 0,0011 = $22. Екеуін де ұстау географиялық әртараптандыру үшін орынды — АҚШ және халықаралық нарықтар әрқашан бірге қозғалмайды.",
            hint: "Calculate fees separately. Think about why spreading across countries helps.",
            hintRu: "Рассчитайте комиссии отдельно. Подумайте, зачем распределять по странам.",
            hintKk: "Комиссияларды бөлек есептеңіз. Елдер бойынша тарату неге көмектесетінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You invest $10,000 in an ETF earning 8%/year with a 0.05% expense ratio, and your friend invests $10,000 in a mutual fund earning 8%/year with a 1.2% expense ratio. After 20 years of compounding (net of fees), how much does each person have?",
            questionRu: "Вы вкладываете $10000 в ETF с доходностью 8% и комиссией 0,05%. Друг вкладывает $10000 в фонд с 8% и комиссией 1,2%. Через 20 лет с учётом компаундинга (за вычетом комиссий), сколько у каждого?",
            questionKk: "Сіз 8% кірістілік пен 0,05% комиссиялы ETF-ке $10000 саласыз. Досыңыз 8% кірістілік пен 1,2% комиссиялы қорға $10000 салады. 20 жылдан кейін (комиссиялар шегерілген) әрқайсысында қанша болады?",
            answer: "ETF net return: 8% - 0.05% = 7.95%. You: $10,000 × (1.0795)^20 = $46,174. Friend net return: 8% - 1.2% = 6.8%. Friend: $10,000 × (1.068)^20 = $37,338. The 1.15% fee difference costs your friend $8,836 over 20 years.",
            answerRu: "Чистая доходность ETF: 8% - 0,05% = 7,95%. У вас: $10000 × (1,0795)^20 = $46174. Чистая доходность фонда друга: 8% - 1,2% = 6,8%. У друга: $10000 × (1,068)^20 = $37338. Разница в комиссии 1,15% стоит другу $8836 за 20 лет.",
            answerKk: "ETF таза кірістілігі: 8% - 0,05% = 7,95%. Сізде: $10000 × (1,0795)^20 = $46174. Дос қорының таза кірістілігі: 8% - 1,2% = 6,8%. Досында: $10000 × (1,068)^20 = $37338. 1,15% комиссия айырмасы 20 жылда досыңызға $8836 шығынға түседі.",
            xp: 20
          }
        ]
      },
      {
        title: "Bonds",
        titleRu: "Облигации",
        titleKk: "Облигациялар",
        content: "A bond is a loan you make to a government or corporation in exchange for regular interest payments (coupon) and the return of your principal at maturity. Bonds are generally less risky than stocks but offer lower returns. Bond prices move inversely to interest rates — when rates rise, existing bond prices fall.",
        contentRu: "Облигация — это заём, который вы предоставляете государству или компании в обмен на регулярные процентные выплаты (купон) и возврат основной суммы в срок погашения. Облигации менее рискованны, чем акции, но приносят меньший доход. Цены облигаций обратно пропорциональны ставкам — при росте ставок цены падают.",
        contentKk: "Облигация — тұрақты пайыздық төлемдер (купон) және негізгі соманың мерзімі аяқталғанда қайтарылуы айырбасына мемлекетке немесе корпорацияға беретін несие. Облигациялар акцияларға қарағанда аз тәуекелді, бірақ төмен кіріс ұсынады. Облигация бағалары пайыздық мөлшерлемелерге кері пропорционал — мөлшерлемелер көтерілгенде бар облигация бағалары түседі.",
        keyFormulas: [
          {
            formula: "Annual Coupon Payment = Face Value × Coupon Rate",
            formulaRu: "Годовой купонный платёж = Номинальная стоимость × Купонная ставка",
            formulaKk: "Жылдық купон төлемі = Номиналды құн × Купон ставкасы",
            description: "The yearly interest payment you receive from a bond",
            descriptionRu: "Годовой процентный платёж по облигации",
            descriptionKk: "Облигациядан алатын жылдық пайыздық төлем"
          },
          {
            formula: "Current Yield = Annual Coupon ÷ Current Bond Price",
            formulaRu: "Текущая доходность = Годовой купон ÷ Текущая цена облигации",
            formulaKk: "Ағымдағы табыстылық = Жылдық купон ÷ Облигацияның ағымдағы бағасы",
            description: "The yield based on the price you actually pay for the bond",
            descriptionRu: "Доходность с учётом фактической цены покупки",
            descriptionKk: "Облигация үшін нақты төлеген бағаңыз негізіндегі кірістілік"
          }
        ],
        solvedExamples: [
          {
            question: "You buy a $1,000 government bond with a 4% annual coupon rate that matures in 5 years. How much do you receive in coupon payments each year and in total? What is your total return if held to maturity?",
            questionRu: "Вы покупаете гособлигацию на $1000 с купоном 4% на 5 лет. Сколько купонов в год и всего? Какова полная доходность при удержании до погашения?",
            questionKk: "Сіз $1000-тік мемлекеттік облигацияны 4% жылдық купонмен 5 жылға сатып аласыз. Жылына және барлығы қанша купон аласыз? Өтеу мерзіміне дейін ұстасаңыз жалпы қайтарым қанша?",
            steps: [
              { en: "Annual coupon: $1,000 × 4% = $40/year. Total coupons over 5 years: $40 × 5 = $200.", ru: "Годовой купон: $1000 × 4% = $40. За 5 лет: $40 × 5 = $200.", kk: "Жылдық купон: $1000 × 4% = $40. 5 жылда: $40 × 5 = $200." },
              { en: "At maturity you get back the $1,000 face value. Total return: $200 (coupons) + $1,000 (principal) = $1,200 on a $1,000 investment.", ru: "При погашении возвращается $1000. Общий доход: $200 + $1000 = $1200 на $1000 инвестиции.", kk: "Өтеу мерзімінде $1000 қайтарылады. Жалпы қайтарым: $200 + $1000 = $1000 инвестицияға $1200." }
            ],
            answer: "$40/year in coupons, $200 total coupon income, plus $1,000 principal returned = $1,200 total.",
            answerRu: "$40/год купонами, $200 общий купонный доход, плюс $1000 возврата основной суммы = $1200 всего.",
            answerKk: "Жылына $40 купон, барлығы $200 купон табысы, плюс $1000 негізгі сома қайтарылды = барлығы $1200."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A $500 bond has a 3% coupon rate. What is the annual coupon payment?",
            questionRu: "Облигация на $500 с купоном 3%. Каков годовой купон?",
            questionKk: "3% купонды $500 облигация. Жылдық купон төлемі қанша?",
            answer: "$500 × 3% = $15/year",
            answerRu: "$500 × 3% = $15/год",
            answerKk: "$500 × 3% = жылына $15",
            hint: "Multiply face value by coupon rate.",
            hintRu: "Умножьте номинал на ставку купона.",
            hintKk: "Номиналды купон мөлшерлемесіне көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A $1,000 bond with a 5% coupon is selling for $950 in the market. What is the annual coupon and current yield?",
            questionRu: "Облигация $1000 с купоном 5% продаётся за $950. Каков купон и текущая доходность?",
            questionKk: "5% купонды $1000 облигация нарықта $950-ге сатылады. Жылдық купон мен ағымдағы кірістілік қанша?",
            answer: "Coupon: $1,000 × 5% = $50. Current yield: $50 ÷ $950 = 5.26%. The yield is higher than 5% because you bought at a discount.",
            answerRu: "Купон: $1000 × 5% = $50. Текущая доходность: $50 ÷ $950 = 5,26%. Доходность выше 5%, потому что вы купили со скидкой.",
            answerKk: "Купон: $1000 × 5% = $50. Ағымдағы кірістілік: $50 ÷ $950 = 5,26%. Кірістілік 5%-дан жоғары, өйткені сіз төмен бағамен сатып алдыңыз.",
            hint: "Current yield uses the purchase price, not face value.",
            hintRu: "Текущая доходность использует цену покупки, а не номинал.",
            hintKk: "Ағымдағы кірістілік номинал емес, сатып алу бағасын пайдаланады.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You have $10,000 to invest. Option A: stocks expected to return 10%/year but could lose 30% in a bad year. Option B: bonds returning 4%/year with minimal risk. If you split 60% stocks and 40% bonds, what is the expected return? What is the worst-case scenario?",
            questionRu: "У вас $10000. А: акции с ожидаемой доходностью 10%, но могут упасть на 30%. Б: облигации с 4% без риска. При распределении 60% акции / 40% облигации, какова ожидаемая доходность? Худший сценарий?",
            questionKk: "Сізде $10000 бар. А: акциялар 10% күтілетін кірістілік, бірақ жаман жылда 30% жоғалтуы мүмкін. Б: 4% облигациялар аз тәуекелмен. 60% акциялар / 40% облигациялар бөлімінде күтілетін кірістілік қандай? Ең нашар сценарий?",
            answer: "Expected return: (60% × 10%) + (40% × 4%) = 6% + 1.6% = 7.6% ($760). Worst case: stocks drop 30%: ($6,000 × -30%) + ($4,000 × 4%) = -$1,800 + $160 = -$1,640 loss. Bonds cushion the blow.",
            answerRu: "Ожидаемая доходность: (60% × 10%) + (40% × 4%) = 6% + 1,6% = 7,6% ($760). Худший случай: акции падают на 30%: ($6000 × -30%) + ($4000 × 4%) = -$1800 + $160 = -$1640 убытка. Облигации смягчают удар.",
            answerKk: "Күтілетін кірістілік: (60% × 10%) + (40% × 4%) = 6% + 1,6% = 7,6% ($760). Ең нашар жағдай: акциялар 30% түседі: ($6000 × -30%) + ($4000 × 4%) = -$1800 + $160 = -$1640 залал. Облигациялар соққыны жұмсартады.",
            xp: 20
          }
        ]
      },
      {
        title: "Diversification",
        titleRu: "Диверсификация",
        titleKk: "Әртараптандыру",
        content: "Diversification means spreading your investments across different assets, sectors, and regions to reduce risk. The idea is that when one investment falls, others may rise or stay stable, protecting your overall portfolio. The saying 'don't put all your eggs in one basket' perfectly captures this concept.",
        contentRu: "Диверсификация — распределение инвестиций между разными активами, секторами и регионами для снижения риска. Идея в том, что когда одна инвестиция падает, другие растут или остаются стабильными, защищая портфель. Поговорка 'не клади все яйца в одну корзину' точно описывает эту концепцию.",
        contentKk: "Әртараптандыру — тәуекелді азайту үшін инвестицияларды әр түрлі активтерге, секторларға және аймақтарға тарату. Идея мынада: бір инвестиция түскенде басқалары көтерілуі немесе тұрақты қалуы мүмкін, бұл жалпы портфельді қорғайды. 'Барлық жұмыртқаңды бір себетке салма' мақалы бұл тұжырымдаманы дәл сипаттайды.",
        keyFormulas: [
          {
            formula: "Portfolio Return = Σ (Weight_i × Return_i)",
            formulaRu: "Доходность портфеля = Σ (Weight_i × Return_i)",
            formulaKk: "Портфель табыстылығы = Σ (Weight_i × Return_i)",
            description: "Total return is the weighted average of each investment's return",
            descriptionRu: "Доходность портфеля — средневзвешенная доходность каждой инвестиции",
            descriptionKk: "Портфель кірістілігі — әр инвестицияның кірістілігінің салмақты орташасы"
          }
        ],
        solvedExamples: [
          {
            question: "A portfolio has 40% in US stocks (return +12%), 30% in international stocks (return +5%), and 30% in bonds (return +3%). What is the portfolio's overall return?",
            questionRu: "Портфель: 40% акции США (+12%), 30% международные (+5%), 30% облигации (+3%). Какова общая доходность?",
            questionKk: "Портфель: 40% АҚШ акциялары (+12%), 30% халықаралық (+5%), 30% облигациялар (+3%). Жалпы кірістілік қанша?",
            steps: [
              { en: "US stocks: 40% × 12% = 4.8%. International: 30% × 5% = 1.5%. Bonds: 30% × 3% = 0.9%.", ru: "Акции США: 40% × 12% = 4,8%. Международные: 30% × 5% = 1,5%. Облигации: 30% × 3% = 0,9%.", kk: "АҚШ акциялары: 40% × 12% = 4,8%. Халықаралық: 30% × 5% = 1,5%. Облигациялар: 30% × 3% = 0,9%." },
              { en: "Portfolio return: 4.8% + 1.5% + 0.9% = 7.2%.", ru: "Доходность портфеля: 4,8% + 1,5% + 0,9% = 7,2%.", kk: "Портфель кірістілігі: 4,8% + 1,5% + 0,9% = 7,2%." }
            ],
            answer: "7.2% overall portfolio return",
            answerRu: "Общая доходность портфеля 7,2%",
            answerKk: "Портфельдің жалпы кірістілігі 7,2%"
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Investor A puts all $10,000 in one tech stock. Investor B splits $10,000 equally among 5 different sectors. Who is more diversified?",
            questionRu: "А вкладывает $10000 в одну техакцию. Б делит $10000 поровну между 5 секторами. Кто более диверсифицирован?",
            questionKk: "А $10000-ды бір технологиялық акцияға салады. Б $10000-ды 5 секторға тең бөледі. Кім көбірек әртараптандырылған?",
            answer: "Investor B is more diversified — if one sector drops, the others may offset the loss.",
            answerRu: "Инвестор Б более диверсифицирован — если один сектор падает, остальные могут компенсировать убыток.",
            answerKk: "Б инвесторы көбірек әртараптандырылған — бір сектор құласа, қалғандары залалды өтеуі мүмкін.",
            hint: "Think about what happens if the tech sector crashes.",
            hintRu: "Подумайте, что случится, если технологический сектор упадёт.",
            hintKk: "Технологиялық сектор құласа не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A portfolio is 50% stocks (+15%) and 50% bonds (-2%). What is the portfolio return? Compare to 100% stocks and 100% bonds.",
            questionRu: "Портфель: 50% акции (+15%), 50% облигации (-2%). Какова доходность? Сравните со 100% акций и 100% облигаций.",
            questionKk: "Портфель: 50% акциялар (+15%), 50% облигациялар (-2%). Кірістілік қанша? 100% акциялар мен 100% облигациялармен салыстырыңыз.",
            answer: "Mixed: (50%×15%) + (50%×-2%) = 7.5% - 1% = 6.5%. 100% stocks: 15%. 100% bonds: -2%. The mixed portfolio earned less than all-stock but avoided the bond loss.",
            answerRu: "Смешанный: (50%×15%) + (50%×-2%) = 7,5% - 1% = 6,5%. 100% акций: 15%. 100% облигаций: -2%. Смешанный портфель заработал меньше, чем чистые акции, но избежал убытка облигаций.",
            answerKk: "Аралас: (50%×15%) + (50%×-2%) = 7,5% - 1% = 6,5%. 100% акциялар: 15%. 100% облигациялар: -2%. Аралас портфель таза акциядан аз тапты, бірақ облигация залалынан аулақ болды.",
            hint: "Calculate the weighted return for each scenario.",
            hintRu: "Рассчитайте взвешенную доходность для каждого сценария.",
            hintKk: "Әр сценарий үшін салмақтанған кірістілікті есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Build a diversified portfolio with $50,000 using: US stocks, international stocks, bonds, and real estate (REITs). Assign percentages and explain your reasoning. If US stocks return 10%, international 6%, bonds 3%, and REITs 8%, what is your expected return?",
            questionRu: "Создайте портфель из $50000: акции США, международные акции, облигации, недвижимость (REITs). Назначьте проценты с обоснованием. При доходности акций США 10%, международных 6%, облигаций 3%, REITs 8% — какова ожидаемая доходность?",
            questionKk: "$50000-мен әртараптандырылған портфель жасаңыз: АҚШ акциялары, халықаралық акциялар, облигациялар және жылжымайтын мүлік (REIT). Пайыздар белгілеп, негіздемеңізді түсіндіріңіз. АҚШ акциялары 10%, халықаралық 6%, облигациялар 3%, REIT 8% кірістілікпен, күтілетін кірістілігіңіз қандай?",
            answer: "Example: US stocks 40%, International 20%, Bonds 25%, REITs 15%. Expected return: (40%×10%)+(20%×6%)+(25%×3%)+(15%×8%) = 4%+1.2%+0.75%+1.2% = 7.15%. This balances growth (stocks), stability (bonds), and income (REITs).",
            answerRu: "Пример: акции США 40%, международные 20%, облигации 25%, REITs 15%. Ожидаемая доходность: (40%×10%)+(20%×6%)+(25%×3%)+(15%×8%) = 4%+1,2%+0,75%+1,2% = 7,15%. Это балансирует рост (акции), стабильность (облигации) и доход (REITs).",
            answerKk: "Мысал: АҚШ акциялары 40%, халықаралық 20%, облигациялар 25%, REIT 15%. Күтілетін кірістілік: (40%×10%)+(20%×6%)+(25%×3%)+(15%×8%) = 4%+1,2%+0,75%+1,2% = 7,15%. Бұл өсімді (акциялар), тұрақтылықты (облигациялар) және табысты (REIT) теңестіреді.",
            xp: 20
          }
        ]
      },
      {
        title: "Risk vs Return",
        titleRu: "Риск и доходность",
        titleKk: "Тәуекел мен кірістілік",
        content: "In investing, risk and return are directly related — investments with higher potential returns typically carry higher risk. Cash and savings accounts are low-risk, low-return. Bonds offer moderate risk and return. Stocks are higher risk but offer higher long-term returns. Understanding your risk tolerance helps you choose appropriate investments.",
        contentRu: "В инвестициях риск и доходность напрямую связаны — инвестиции с более высокой потенциальной доходностью обычно несут больший риск. Наличные и сберегательные счета — низкий риск, низкая доходность. Облигации — умеренные. Акции — выше риск, но выше долгосрочная доходность. Понимание толерантности к риску помогает выбрать подходящие инвестиции.",
        contentKk: "Инвестицияларда тәуекел мен кірістілік тікелей байланысты — жоғарырақ потенциалды кірістілікті инвестициялар әдетте жоғарырақ тәуекел тасиды. Қолма-қол ақша мен жинақ шоттары — төмен тәуекел, төмен кірістілік. Облигациялар орташа деңгейде. Акциялар жоғары тәуекелді, бірақ ұзақ мерзімді кірістілігі жоғары. Тәуекелге төзімділігіңізді түсіну сәйкес инвестицияларды таңдауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Risk-Return Spectrum: Cash < Bonds < Stocks < Alternative Investments",
            formulaRu: "Спектр риск-доходность: Наличные < Облигации < Акции < Альтернативные инвестиции",
            formulaKk: "Тәуекел-табыс спектрі: Қолма-қол ақша < Облигациялар < Акциялар < Балама инвестициялар",
            description: "Assets ranked from lowest to highest risk and expected return",
            descriptionRu: "Активы от наименьшего к наибольшему риску и доходности",
            descriptionKk: "Активтер ең төмен тәуекелден ең жоғарыға дейін реттелген"
          }
        ],
        solvedExamples: [
          {
            question: "Three investments over 5 years: Savings account (2%/year, no risk), bond fund (5%/year, could lose 5% in a bad year), stock fund (10%/year average, could lose 30% in a bad year). If you invest $10,000 in each, what is the best and worst outcome for each?",
            questionRu: "Три инвестиции на 5 лет: вклад (2%, без риска), облигации (5%, -5% в худший год), акции (10% в среднем, -30% в худший). При $10000 в каждый, какой лучший и худший результат?",
            questionKk: "3 инвестиция 5 жылға: жинақ шоты (2%, тәуекелсіз), облигация қоры (5%, жаман жылда -5%), акция қоры (орташа 10%, жаман жылда -30%). Әрқайсысына $10000 салсаңыз, ең жақсы және ең нашар нәтиже қандай?",
            steps: [
              { en: "Savings: $10,000 × (1.02)^5 = $11,041 (always). No downside risk.", ru: "Вклад: $10000 × (1,02)^5 = $11041 (всегда). Нет риска.", kk: "Жинақ: $10000 × (1,02)^5 = $11041 (әрқашан). Тәуекел жоқ." },
              { en: "Bonds best: ~$12,763. Worst year: $10,000 falls to $9,500. Stocks best: ~$16,105. Worst year: $10,000 falls to $7,000. Higher return = higher risk.", ru: "Облигации лучший: ~$12763. Худший год: $9500. Акции лучший: ~$16105. Худший год: $7000. Выше доходность = выше риск.", kk: "Облигациялар жақсысы: ~$12763. Ең нашар жыл: $9500. Акциялар жақсысы: ~$16105. Ең нашар жыл: $7000. Жоғарырақ кірістілік = жоғарырақ тәуекел." }
            ],
            answer: "Savings: always $11,041. Bonds: up to ~$12,763, down to ~$9,500 in bad year. Stocks: up to ~$16,105, down to ~$7,000. Higher returns come with larger potential losses.",
            answerRu: "Вклад: всегда $11041. Облигации: до ~$12763, до ~$9500 в плохой год. Акции: до ~$16105, до ~$7000. Более высокая доходность сопровождается большими потенциальными убытками.",
            answerKk: "Жинақ: әрқашан $11041. Облигациялар: ~$12763-ке дейін, жаман жылда ~$9500-ге дейін. Акциялар: ~$16105-ке дейін, ~$7000-ге дейін. Жоғарырақ кірістілік үлкенірек әлеуетті залалмен келеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Rank these from lowest to highest risk: government bonds, startup stocks, savings account, blue-chip stocks.",
            questionRu: "Расположите от наименьшего к наибольшему риску: гособлигации, стартап-акции, вклад, акции крупных компаний.",
            questionKk: "Ең төмен тәуекелден жоғарыға қарай орналастырыңыз: мемлекеттік облигациялар, стартап акциялар, жинақ шоты, ірі компания акциялары.",
            answer: "Savings account → Government bonds → Blue-chip stocks → Startup stocks",
            answerRu: "Вклад → Гособлигации → Акции крупных компаний → Стартап-акции",
            answerKk: "Жинақ шоты → Мемлекеттік облигациялар → Ірі компания акциялары → Стартап акциялар",
            hint: "Think about which one you could lose the most money in.",
            hintRu: "Подумайте, где вы можете потерять больше всего.",
            hintKk: "Қайсысында ең көп ақша жоғалтуыңыз мүмкін екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A conservative 60-year-old and an aggressive 20-year-old both have $50,000 to invest. Suggest an appropriate stock/bond allocation for each and explain why.",
            questionRu: "Консервативный 60-летний и агрессивный 20-летний инвестируют по $50000. Предложите распределение акции/облигации для каждого с объяснением.",
            questionKk: "Консервативті 60 жастағы адам мен агрессивті 20 жастағы адам $50000 салады. Әрқайсысы үшін акциялар/облигациялар бөлуін ұсынып, неге екенін түсіндіріңіз.",
            answer: "60-year-old: 30% stocks / 70% bonds — needs stability and income near retirement. 20-year-old: 90% stocks / 10% bonds — has decades to recover from downturns and benefit from growth.",
            answerRu: "60-летний: 30% акции / 70% облигации — нужна стабильность и доход перед пенсией. 20-летний: 90% акции / 10% облигации — есть десятилетия на восстановление после спадов и получение выгоды от роста.",
            answerKk: "60 жастағы: 30% акциялар / 70% облигациялар — зейнеткерлікке жақын тұрақтылық пен табыс керек. 20 жастағы: 90% акциялар / 10% облигациялар — құлдыраудан қалпына келуге және өсімнен пайда табуға он жылдар уақыты бар.",
            hint: "Consider how much time each person has to recover from losses.",
            hintRu: "Учтите, сколько времени у каждого для восстановления от потерь.",
            hintKk: "Әр адамның залалдан қалпына келу үшін қанша уақыты бар екенін ескеріңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Investment A returns 12% with 20% standard deviation (volatility). Investment B returns 8% with 5% standard deviation. Calculate the Sharpe-like ratio (return ÷ risk) for each. Which offers better risk-adjusted returns?",
            questionRu: "А: доходность 12%, волатильность 20%. Б: 8%, волатильность 5%. Рассчитайте отношение доходности к риску для каждого. Что выгоднее с учётом риска?",
            questionKk: "А инвестициясы: 12% кірістілік, 20% стандарттық ауытқу. Б: 8% кірістілік, 5% стандарттық ауытқу. Әрқайсысы үшін кірістілік/тәуекел қатынасын есептеңіз. Қайсысы тәуекелге бейімделген кірістілігі жақсы?",
            answer: "A: 12% ÷ 20% = 0.60. B: 8% ÷ 5% = 1.60. Investment B has a much better risk-adjusted return — you get more return per unit of risk.",
            answerRu: "А: 12% ÷ 20% = 0,60. Б: 8% ÷ 5% = 1,60. У инвестиции Б доходность с учётом риска намного лучше — вы получаете больше дохода на единицу риска.",
            answerKk: "А: 12% ÷ 20% = 0,60. Б: 8% ÷ 5% = 1,60. Б инвестициясының тәуекелге бейімделген кірістілігі әлдеқайда жақсы — тәуекел бірлігіне көбірек кіріс аласыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Investment Accounts",
        titleRu: "Инвестиционные счета",
        titleKk: "Инвестициялық шоттар",
        content: "Investment accounts are specialized accounts for holding stocks, bonds, and funds. Brokerage accounts let you buy and sell anytime. Retirement accounts (like 401k or IRA in the US) offer tax advantages but restrict when you can withdraw. Many countries offer similar tax-advantaged accounts to encourage saving for retirement.",
        contentRu: "Инвестиционные счета — специальные счета для хранения акций, облигаций и фондов. Брокерские счета позволяют покупать и продавать в любое время. Пенсионные счета (401k, IRA в США) дают налоговые льготы, но ограничивают снятие средств. Многие страны предлагают аналогичные льготные счета для пенсионных накоплений.",
        contentKk: "Инвестициялық шоттар — акцияларды, облигацияларды және қорларды ұстауға арналған арнайы шоттар. Брокерлік шоттар кез келген уақытта сатып алу және сатуға мүмкіндік береді. Зейнетақы шоттары (АҚШ-тағы 401k немесе IRA) салықтық жеңілдіктер ұсынады, бірақ алу мерзімін шектейді. Көптеген елдер зейнетақыға жинауды ынталандыру үшін салық жеңілдіктері бар шоттар ұсынады.",
        keyFormulas: [
          {
            formula: "Tax Savings = Contribution × Tax Rate",
            formulaRu: "Налоговая экономия = Взнос × Налоговая ставка",
            formulaKk: "Салықтық үнемдеу = Жарна × Салық ставкасы",
            description: "How much you save in taxes by using a tax-advantaged account",
            descriptionRu: "Сколько налогов вы экономите, используя льготный счёт",
            descriptionKk: "Салық жеңілдігі бар шотты пайдалану арқылы қанша салық үнемдейсіз"
          }
        ],
        solvedExamples: [
          {
            question: "You earn $50,000/year and are in the 22% tax bracket. You contribute $5,000 to a tax-deferred retirement account. How much do you save in taxes this year? What is your taxable income after the contribution?",
            questionRu: "Вы зарабатываете $50000/год, ставка налога 22%. Вы вносите $5000 в пенсионный счёт с отложенным налогом. Сколько налогов экономите? Каков налогооблагаемый доход?",
            questionKk: "Сіз жылына $50000 табасыз, салық мөлшерлемесі 22%. Салықты кейінге қалдыратын зейнетақы шотына $5000 саласыз. Биыл қанша салық үнемдейсіз? Салық салынатын табысыңыз қанша?",
            steps: [
              { en: "Tax savings: $5,000 × 22% = $1,100 saved this year.", ru: "Экономия: $5000 × 22% = $1100 сэкономлено.", kk: "Салық үнемдеу: $5000 × 22% = биыл $1100 үнемделді." },
              { en: "New taxable income: $50,000 - $5,000 = $45,000. You pay taxes on $45,000 instead of $50,000.", ru: "Новый налогооблагаемый доход: $50000 - $5000 = $45000.", kk: "Жаңа салық салынатын табыс: $50000 - $5000 = $45000." }
            ],
            answer: "Tax savings: $1,100. Taxable income reduced from $50,000 to $45,000.",
            answerRu: "Экономия на налогах: $1100. Налогооблагаемый доход снижен с $50000 до $45000.",
            answerKk: "Салық үнемдеу: $1100. Салық салынатын табыс $50000-нан $45000-ға дейін төмендеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the main advantage of a retirement account compared to a regular brokerage account?",
            questionRu: "В чём главное преимущество пенсионного счёта перед обычным брокерским?",
            questionKk: "Зейнетақы шотының қарапайым брокерлік шоттан басты артықшылығы не?",
            answer: "Tax advantages — either tax-deferred growth (traditional) or tax-free withdrawals (Roth), which help your money grow faster.",
            answerRu: "Налоговые льготы — либо рост с отложенным налогом (традиционный счёт), либо безналоговое снятие (Roth), что помогает деньгам расти быстрее.",
            answerKk: "Салықтық жеңілдіктер — не салығы кейінге қалдырылған өсім (дәстүрлі шот), не салықсыз алу (Roth), бұл ақшаңыздың тезірек өсуіне көмектеседі.",
            hint: "Think about how taxes affect investment growth.",
            hintRu: "Подумайте, как налоги влияют на рост инвестиций.",
            hintKk: "Салықтардың инвестиция өсіміне қалай әсер ететінін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "An employer offers a 401k with 50% match up to 6% of salary. You earn $60,000 and contribute 6%. How much goes into your account per year (your contribution + employer match)?",
            questionRu: "Работодатель предлагает 401k с 50% добавкой до 6% зарплаты. Вы зарабатываете $60000 и вносите 6%. Сколько всего на счёте в год?",
            questionKk: "Жұмыс беруші жалақының 6%-ына дейін 50% сәйкестікпен 401k ұсынады. Сіз $60000 табасыз және 6% саласыз. Жылына шотыңызға жалпы қанша түседі?",
            answer: "Your contribution: $60,000 × 6% = $3,600. Employer match: $3,600 × 50% = $1,800. Total: $3,600 + $1,800 = $5,400/year.",
            answerRu: "Ваш взнос: $60000 × 6% = $3600. Добавка работодателя: $3600 × 50% = $1800. Итого: $3600 + $1800 = $5400/год.",
            answerKk: "Сіздің жарнаңыз: $60000 × 6% = $3600. Жұмыс беруші сәйкестігі: $3600 × 50% = $1800. Барлығы: $3600 + $1800 = жылына $5400.",
            hint: "Calculate your contribution first, then apply the match percentage.",
            hintRu: "Рассчитайте свой взнос, затем примените процент добавки.",
            hintKk: "Алдымен өз жарнаңызды есептеңіз, содан кейін сәйкестік пайызын қолданыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Traditional IRA: contribute $6,000 pre-tax at 22% bracket now, pay taxes on withdrawal at 15% in retirement. Roth IRA: contribute $6,000 after-tax now (actual cost: $6,000 from $7,692 gross), withdraw tax-free. Both grow at 7% for 30 years. Which gives more after-tax money?",
            questionRu: "Традиционная IRA: $6000 до налогов при 22%, при снятии налог 15%. Roth IRA: $6000 после налогов, снятие без налогов. Оба растут 7% за 30 лет. Что даёт больше после налогов?",
            questionKk: "Дәстүрлі IRA: 22% кезінде салықсыз $6000 салу, алу кезінде 15% салық. Roth IRA: салықтан кейін $6000 салу, салықсыз алу. Екеуі 30 жылда 7% өседі. Қайсысы салықтан кейін көбірек ақша береді?",
            answer: "Both grow to $6,000 × (1.07)^30 = $45,674. Traditional after-tax: $45,674 × (1 - 0.15) = $38,823. Roth: $45,674 (tax-free). Roth gives $6,851 more because the tax rate dropped — if rates stay equal, the result is the same.",
            answerRu: "Оба вырастают до $6000 × (1,07)^30 = $45674. Традиционный после налога: $45674 × (1 - 0,15) = $38823. Roth: $45674 (без налога). Roth даёт на $6851 больше, потому что ставка налога снизилась — если бы ставки остались равными, результат был бы одинаковым.",
            answerKk: "Екеуі де $6000 × (1,07)^30 = $45674-ке дейін өседі. Дәстүрлі шот салықтан кейін: $45674 × (1 - 0,15) = $38823. Roth: $45674 (салықсыз). Roth $6851-ге көбірек береді, өйткені салық мөлшерлемесі төмендеді — мөлшерлемелер тең болса, нәтиже де тең болар еді.",
            xp: 20
          }
        ]
      },
      {
        title: "Dollar-Cost Averaging",
        titleRu: "Усреднение стоимости",
        titleKk: "Құнды орташалау",
        content: "Dollar-cost averaging (DCA) is investing a fixed amount of money at regular intervals regardless of market price. When prices are low, you buy more shares; when prices are high, you buy fewer shares. This strategy removes the pressure of timing the market and typically results in a lower average cost per share over time.",
        contentRu: "Усреднение стоимости (DCA) — инвестирование фиксированной суммы через равные промежутки независимо от цены. При низких ценах вы покупаете больше долей, при высоких — меньше. Стратегия снимает необходимость угадывать рынок и обычно приводит к более низкой средней цене за долю.",
        contentKk: "Құнды орташалау (DCA) — нарық бағасына қарамастан, тұрақты аралықтарда белгіленген соманы инвестициялау. Бағалар төмен кезде көбірек үлес сатып аласыз; бағалар жоғары кезде — азырақ. Бұл стратегия нарықты уақыттау қысымын жояды және әдетте уақыт өте келе бір үлеске орташа құнды төмендетеді.",
        keyFormulas: [
          {
            formula: "Average Cost Per Share = Total Amount Invested ÷ Total Shares Bought",
            formulaRu: "Средняя цена за акцию = Общая инвестированная сумма ÷ Общее количество купленных акций",
            formulaKk: "Акцияның орташа бағасы = Жалпы инвестицияланған сома ÷ Сатып алынған акциялардың жалпы саны",
            description: "Your actual average price paid across all purchases",
            descriptionRu: "Ваша фактическая средняя цена за все покупки",
            descriptionKk: "Барлық сатып алулар бойынша нақты орташа бағаңыз"
          }
        ],
        solvedExamples: [
          {
            question: "You invest $300/month for 4 months. The share prices are: Month 1: $30, Month 2: $25, Month 3: $20, Month 4: $30. How many shares did you buy total and what is your average cost?",
            questionRu: "Вы вкладываете $300/мес 4 месяца. Цены: мес.1 $30, мес.2 $25, мес.3 $20, мес.4 $30. Сколько акций купили и какова средняя цена?",
            questionKk: "Сіз 4 ай бойы айына $300 саласыз. Бағалар: 1-ай $30, 2-ай $25, 3-ай $20, 4-ай $30. Қанша акция сатып алдыңыз және орташа бағаңыз қандай?",
            steps: [
              { en: "Shares bought: 10 + 12 + 15 + 10 = 47 shares. Total invested: $300 × 4 = $1,200.", ru: "Акции: 10 + 12 + 15 + 10 = 47. Вложено: $1200.", kk: "Акциялар: 10 + 12 + 15 + 10 = 47. Жалпы инвестиция: $1200." },
              { en: "Average cost: $1,200 ÷ 47 = $25.53/share. This is lower than the simple average price of ($30+$25+$20+$30)/4 = $26.25.", ru: "Средняя цена: $1200 ÷ 47 = $25,53. Это ниже простого среднего ($26,25).", kk: "Орташа құн: $1200 ÷ 47 = $25,53. Бұл қарапайым орташа бағадан ($26,25) төмен." }
            ],
            answer: "47 shares at an average cost of $25.53/share — lower than the average price of $26.25 because DCA buys more shares when prices are low.",
            answerRu: "47 акций по средней цене $25,53/акция — ниже средней цены $26,25, потому что DCA покупает больше акций при низких ценах.",
            answerKk: "Орташа құны $25,53/акция болатын 47 акция — орташа баға $26,25-тен төмен, өйткені DCA бағалар төмен кезде көбірек акция сатып алады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "You invest $100/month. The stock is $20/share this month. How many shares do you buy?",
            questionRu: "Вы инвестируете $100/мес. Акция стоит $20. Сколько акций вы купите?",
            questionKk: "Сіз айына $100 саласыз. Акция $20 тұрады. Қанша акция сатып аласыз?",
            answer: "$100 ÷ $20 = 5 shares",
            answerRu: "$100 ÷ $20 = 5 акций",
            answerKk: "$100 ÷ $20 = 5 акция",
            hint: "Divide the investment amount by the share price.",
            hintRu: "Разделите сумму инвестиции на цену акции.",
            hintKk: "Инвестиция сомасын акция бағасына бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You invest $500/month for 3 months. Prices: $50, $40, $50. How many shares total? What is your average cost? If you had invested all $1,500 in Month 1 at $50, how many shares would you have?",
            questionRu: "Вы вкладываете $500/мес 3 месяца. Цены: $50, $40, $50. Сколько акций? Средняя цена? Если бы вложили $1500 в 1-й месяц?",
            questionKk: "Сіз 3 ай бойы айына $500 саласыз. Бағалар: $50, $40, $50. Қанша акция? Орташа бағаңыз? $1500 бәрін 1-айда салсаңыз қанша акция болар еді?",
            answer: "DCA: 10 + 12.5 + 10 = 32.5 shares. Average: $1,500 ÷ 32.5 = $46.15. Lump sum: $1,500 ÷ $50 = 30 shares. DCA gave 2.5 more shares because you bought more when the price dipped.",
            answerRu: "DCA: 10 + 12,5 + 10 = 32,5 акции. Средняя цена: $1500 ÷ 32,5 = $46,15. Единовременно: $1500 ÷ $50 = 30 акций. DCA дал на 2,5 акции больше, потому что вы купили больше при падении цены.",
            answerKk: "DCA: 10 + 12,5 + 10 = 32,5 акция. Орташа: $1500 ÷ 32,5 = $46,15. Бір реткі салым: $1500 ÷ $50 = 30 акция. DCA 2,5 акцияға көбірек берді, өйткені баға түскенде сіз көбірек сатып алдыңыз.",
            hint: "Calculate shares bought each month, then sum them up.",
            hintRu: "Рассчитайте покупки каждый месяц, затем сложите.",
            hintKk: "Әр ай сатып алынған акцияларды есептеп, қосыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Investor A lump-sums $12,000 on January 1 when the ETF is $100/share. Investor B does DCA of $1,000/month for 12 months. Monthly ETF prices: $100, $90, $85, $80, $75, $70, $75, $80, $85, $95, $105, $110. Compare total shares and average cost.",
            questionRu: "А вкладывает $12000 1 января при цене $100. Б делает DCA $1000/мес 12 месяцев. Цены ETF: $100, $90, $85, $80, $75, $70, $75, $80, $85, $95, $105, $110. Сравните акции и среднюю цену.",
            questionKk: "А 1 қаңтарда ETF $100 болғанда $12000 салады. Б 12 ай бойы айына $1000 DCA жасайды. ETF бағалары: $100, $90, $85, $80, $75, $70, $75, $80, $85, $95, $105, $110. Жалпы акциялар мен орташа бағаны салыстырыңыз.",
            answer: "A: $12,000 ÷ $100 = 120 shares at $100 avg. Value at end: 120 × $110 = $13,200. B: 10+11.1+11.8+12.5+13.3+14.3+13.3+12.5+11.8+10.5+9.5+9.1 = 139.7 shares. Average: $12,000 ÷ 139.7 = $85.90. Value: 139.7 × $110 = $15,367. DCA won because prices dipped mid-year.",
            answerRu: "А: $12000 ÷ $100 = 120 акций по средней $100. Итоговая стоимость: 120 × $110 = $13200. Б: 10+11,1+11,8+12,5+13,3+14,3+13,3+12,5+11,8+10,5+9,5+9,1 = 139,7 акции. Средняя: $12000 ÷ 139,7 = $85,90. Стоимость: 139,7 × $110 = $15367. DCA победил, потому что цены упали в середине года.",
            answerKk: "А: $12000 ÷ $100 = орташа $100 бойынша 120 акция. Соңғы құны: 120 × $110 = $13200. Б: 10+11,1+11,8+12,5+13,3+14,3+13,3+12,5+11,8+10,5+9,5+9,1 = 139,7 акция. Орташа: $12000 ÷ 139,7 = $85,90. Құны: 139,7 × $110 = $15367. DCA жеңді, өйткені бағалар жыл ортасында түсті.",
            xp: 20
          }
        ]
      },
      {
        title: "Global Markets",
        titleRu: "Глобальные рынки",
        titleKk: "Жаһандық нарықтар",
        content: "Financial markets operate worldwide, with major exchanges in New York, London, Tokyo, Shanghai, and more. Global markets are interconnected — events in one country can affect markets everywhere. Investing internationally provides geographic diversification and exposure to different economies, currencies, and growth rates.",
        contentRu: "Финансовые рынки работают по всему миру: крупнейшие биржи в Нью-Йорке, Лондоне, Токио, Шанхае. Глобальные рынки взаимосвязаны — события в одной стране влияют на рынки повсюду. Международное инвестирование обеспечивает географическую диверсификацию и доступ к разным экономикам, валютам и темпам роста.",
        contentKk: "Қаржы нарықтары бүкіл әлемде жұмыс істейді, негізгі биржалар Нью-Йорк, Лондон, Токио, Шанхайда. Жаһандық нарықтар өзара байланысты — бір елдегі оқиғалар барлық жердегі нарықтарға әсер етеді. Халықаралық инвестициялау географиялық әртараптандыруды және әр түрлі экономикаларға, валюталарға, өсу қарқындарына қол жеткізуді қамтамасыз етеді.",
        keyFormulas: [
          {
            formula: "Return in Home Currency = Foreign Return + Currency Change",
            formulaRu: "Доходность в национальной валюте = Доходность в иностранной валюте + Изменение курса валюты",
            formulaKk: "Ұлттық валютадағы табыстылық = Шетел валютасындағы табыстылық + Валюта бағамының өзгеруі",
            description: "International returns are affected by both investment performance and exchange rates",
            descriptionRu: "Международная доходность зависит и от инвестиции, и от курса валют",
            descriptionKk: "Халықаралық кірістілік инвестиция нәтижесіне де, валюта бағамына да байланысты"
          }
        ],
        solvedExamples: [
          {
            question: "You invest $1,000 in a Japanese stock fund. The fund rises 8% in yen terms, but the yen weakens 3% against the dollar. What is your return in dollars?",
            questionRu: "Вы инвестируете $1000 в японский фонд. Фонд растёт на 8% в йенах, но йена слабеет на 3% к доллару. Какова доходность в долларах?",
            questionKk: "Сіз жапон акция қорына $1000 саласыз. Қор иенмен 8% өседі, бірақ иен долларға қарсы 3% әлсірейді. Доллардағы кірістілігіңіз қанша?",
            steps: [
              { en: "Fund return in yen: +8%. Currency effect: -3% (yen weakened against dollar).", ru: "Доходность в йенах: +8%. Валютный эффект: -3% (йена ослабла).", kk: "Иендегі кірістілік: +8%. Валюта әсері: -3% (иен әлсіреді)." },
              { en: "Approximate dollar return: 8% - 3% = 5%. Value: $1,000 × 1.05 = $1,050.", ru: "Приблизительная доходность в $: 8% - 3% = 5%. Сумма: $1050.", kk: "Доллардағы шамамен кірістілік: 8% - 3% = 5%. Сома: $1050." }
            ],
            answer: "Approximately 5% return ($1,050) — the currency depreciation reduced the gain from 8% to 5%.",
            answerRu: "Примерно 5% доходности ($1050) — ослабление валюты снизило доходность с 8% до 5%.",
            answerKk: "Шамамен 5% кірістілік ($1050) — валютаның әлсіреуі кірісті 8%-дан 5%-ға дейін төмендетті."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name three major stock exchanges from three different continents.",
            questionRu: "Назовите три крупные фондовые биржи с трёх разных континентов.",
            questionKk: "Үш түрлі континенттен үш ірі қор биржасын атаңыз.",
            answer: "NYSE (North America), London Stock Exchange (Europe), Tokyo Stock Exchange (Asia). Others include Shanghai, Euronext, Frankfurt, Mumbai.",
            answerRu: "NYSE (Северная Америка), Лондонская фондовая биржа (Европа), Токийская фондовая биржа (Азия). Также есть Шанхай, Euronext, Франкфурт, Мумбаи.",
            answerKk: "NYSE (Солтүстік Америка), Лондон қор биржасы (Еуропа), Токио қор биржасы (Азия). Тағы Шанхай, Euronext, Франкфурт, Мумбай бар.",
            hint: "Think about major financial cities around the world.",
            hintRu: "Подумайте о крупнейших финансовых центрах мира.",
            hintKk: "Әлемдегі ірі қаржы орталықтарын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You invest in a European stock fund. The fund returns 10% in euros, and the euro strengthens 2% against the dollar. What is your approximate return in dollars?",
            questionRu: "Вы инвестируете в европейский фонд. Доходность 10% в евро, евро укрепился на 2% к доллару. Какова приблизительная доходность в долларах?",
            questionKk: "Сіз еуропалық акция қорына инвестициялайсыз. Қор еуромен 10% қайтарады, еуро долларға қарсы 2% нығайды. Доллардағы шамамен кірістілігіңіз қанша?",
            answer: "Approx: 10% + 2% = 12%. The strengthening euro adds to your return because your euros are worth more in dollar terms.",
            answerRu: "Примерно: 10% + 2% = 12%. Укрепление евро добавляет к доходности, потому что ваши евро теперь стоят больше в долларах.",
            answerKk: "Шамамен: 10% + 2% = 12%. Еуроның нығаюы кірістілікті арттырады, өйткені еуроларыңыз доллармен есептегенде қымбаттады.",
            hint: "A strengthening foreign currency adds to your return.",
            hintRu: "Укрепление иностранной валюты увеличивает доходность.",
            hintKk: "Шетел валютасының нығаюы кірістілігіңізді арттырады.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Portfolio allocation: 50% US stocks (returned 15%), 25% European stocks (returned 8% in euros, euro +3% vs dollar), 25% Emerging markets (returned 20% in local currency, local currency -8% vs dollar). What is the total portfolio return in dollars?",
            questionRu: "Портфель: 50% акции США (+15%), 25% европейские (+8% в евро, евро +3%), 25% развивающиеся (+20% в местной валюте, валюта -8%). Какова доходность портфеля в долларах?",
            questionKk: "Портфель: 50% АҚШ акциялары (+15%), 25% еуропалық (+8% еуромен, еуро +3%), 25% дамушы нарықтар (+20% жергілікті валютамен, валюта -8%). Доллардағы жалпы портфель кірістілігі қанша?",
            answer: "US: 50% × 15% = 7.5%. Europe: 25% × (8%+3%) = 25% × 11% = 2.75%. Emerging: 25% × (20%-8%) = 25% × 12% = 3%. Total: 7.5% + 2.75% + 3% = 13.25%.",
            answerRu: "США: 50% × 15% = 7,5%. Европа: 25% × (8%+3%) = 25% × 11% = 2,75%. Развивающиеся: 25% × (20%-8%) = 25% × 12% = 3%. Итого: 7,5% + 2,75% + 3% = 13,25%.",
            answerKk: "АҚШ: 50% × 15% = 7,5%. Еуропа: 25% × (8%+3%) = 25% × 11% = 2,75%. Дамушы нарықтар: 25% × (20%-8%) = 25% × 12% = 3%. Барлығы: 7,5% + 2,75% + 3% = 13,25%.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Finance & Investing_11": {
    planetName: "Finance & Investing",
    introduction: {
      en: "Master advanced financial analysis including company valuation, alternative investments, options, and behavioral finance. Learn to evaluate opportunities like a professional investor.",
      ru: "Освойте продвинутый финансовый анализ: оценку компаний, альтернативные инвестиции, опционы и поведенческие финансы. Научитесь оценивать возможности как профессиональный инвестор."
    },
    sections: [
      {
        title: "Financial Statements",
        titleRu: "Финансовая отчётность",
        titleKk: "Қаржылық есептілік",
        content: "Financial statements are formal records of a company's financial activity. The three main statements are the income statement (revenue minus expenses equals profit), the balance sheet (assets equal liabilities plus equity), and the cash flow statement (tracks actual cash moving in and out). Together they give a complete picture of a company's financial health.",
        contentRu: "Финансовая отчётность — это официальные записи финансовой деятельности компании. Три основных отчёта: отчёт о прибылях и убытках (выручка минус расходы равно прибыль), балансовый отчёт (активы равны обязательствам плюс капитал) и отчёт о движении денежных средств (отслеживает фактическое движение денег). Вместе они дают полную картину финансового здоровья компании.",
        contentKk: "Қаржылық есептілік — компанияның қаржылық қызметінің ресми жазбалары. Үш негізгі есеп: пайда мен залал туралы есеп (табыс минус шығыстар тең пайда), бухгалтерлік баланс (активтер тең міндеттемелер қосу капитал) және ақша қаражатының қозғалысы туралы есеп (нақты ақшаның кіруі мен шығуын қадағалайды). Бірге олар компанияның қаржылық денсаулығының толық бейнесін береді.",
        keyFormulas: [
          {
            formula: "Assets = Liabilities + Shareholders' Equity",
            formulaRu: "Активы = Обязательства + Собственный капитал акционеров",
            formulaKk: "Активтер = Міндеттемелер + Акционерлердің меншікті капиталы",
            description: "The fundamental accounting equation — the balance sheet must always balance",
            descriptionRu: "Основное бухгалтерское уравнение — баланс всегда должен сходиться",
            descriptionKk: "Негізгі бухгалтерлік теңдеу — баланс әрқашан сәйкес келуі керек"
          },
          {
            formula: "Net Income = Revenue − Expenses",
            formulaRu: "Чистый доход = Выручка − Расходы",
            formulaKk: "Таза табыс = Кіріс − Шығыстар",
            description: "The bottom line of the income statement showing profit or loss",
            descriptionRu: "Итог отчёта о прибылях и убытках, показывающий прибыль или убыток",
            descriptionKk: "Пайда немесе залалды көрсететін пайда мен залал есебінің қорытындысы"
          }
        ],
        solvedExamples: [
          {
            question: "A company has $500,000 in assets and $300,000 in liabilities. What is the shareholders' equity? If it earned $200,000 in revenue and had $150,000 in expenses, what is net income?",
            questionRu: "Активы компании $500 000, обязательства $300 000. Каков акционерный капитал? Если выручка $200 000, расходы $150 000 — какова чистая прибыль?",
            questionKk: "Компанияның активтері $500 000, міндеттемелері $300 000. Акционерлік капитал қанша? Табысы $200 000, шығыстары $150 000 болса, таза пайда қанша?",
            steps: [
              { en: "Shareholders' Equity = Assets − Liabilities = $500,000 − $300,000 = $200,000.", ru: "Акционерный капитал = Активы − Обязательства = $500 000 − $300 000 = $200 000.", kk: "Акционерлік капитал = Активтер − Міндеттемелер = $500 000 − $300 000 = $200 000." },
              { en: "Net Income = Revenue − Expenses = $200,000 − $150,000 = $50,000.", ru: "Чистая прибыль = Выручка − Расходы = $200 000 − $150 000 = $50 000.", kk: "Таза пайда = Табыс − Шығыстар = $200 000 − $150 000 = $50 000." }
            ],
            answer: "Shareholders' equity is $200,000 and net income is $50,000.",
            answerRu: "Акционерный капитал составляет $200 000, а чистая прибыль — $50 000.",
            answerKk: "Акционерлік капитал $200 000, ал таза пайда $50 000."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Name the three main financial statements.",
            questionRu: "Назовите три основных финансовых отчёта.",
            questionKk: "Үш негізгі қаржылық есепті атаңыз.",
            answer: "Income statement, balance sheet, and cash flow statement.",
            answerRu: "Отчёт о прибылях и убытках, балансовый отчёт и отчёт о движении денежных средств.",
            answerKk: "Пайда мен залал туралы есеп, бухгалтерлік баланс және ақша қаражатының қозғалысы туралы есеп.",
            hint: "One shows profit, one shows what you own vs owe, one tracks cash.",
            hintRu: "Один показывает прибыль, другой — чем владеете и что должны, третий отслеживает деньги.",
            hintKk: "Бірі пайданы, бірі не иеленетініңізді және қарызыңызды, бірі ақша қозғалысын көрсетеді.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A company has $800,000 in assets. Liabilities are twice the shareholders' equity. Find both values.",
            questionRu: "Активы компании $800 000. Обязательства вдвое больше акционерного капитала. Найдите оба значения.",
            questionKk: "Компанияның активтері $800 000. Міндеттемелер акционерлік капиталдан екі есе көп. Екі мәнді де табыңыз.",
            answer: "Let equity = x. Then liabilities = 2x. x + 2x = $800,000 → 3x = $800,000 → equity = $266,667, liabilities = $533,333.",
            answerRu: "Пусть капитал = x. Тогда обязательства = 2x. x + 2x = $800 000 → 3x = $800 000 → капитал = $266 667, обязательства = $533 333.",
            answerKk: "Капитал = x болсын. Онда міндеттемелер = 2x. x + 2x = $800 000 → 3x = $800 000 → капитал = $266 667, міндеттемелер = $533 333.",
            hint: "Set equity as x, liabilities as 2x, and use the accounting equation.",
            hintRu: "Обозначьте капитал как x, обязательства как 2x и используйте бухгалтерское уравнение.",
            hintKk: "Капиталды x, міндеттемелерді 2x деп белгілеп, бухгалтерлік теңдеуді қолданыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Company A has revenue of $1M, expenses of $750K, assets of $2M, and liabilities of $1.2M. Company B has revenue of $500K, expenses of $300K, assets of $1M, and liabilities of $400K. Which company is in a stronger financial position and why?",
            questionRu: "Компания А: выручка $1М, расходы $750К, активы $2М, обязательства $1,2М. Компания Б: выручка $500К, расходы $300К, активы $1М, обязательства $400К. Какая компания в более сильной позиции и почему?",
            questionKk: "А компаниясы: табыс $1М, шығыстар $750К, активтер $2М, міндеттемелер $1,2М. Б компаниясы: табыс $500К, шығыстар $300К, активтер $1М, міндеттемелер $400К. Қай компания күшті позицияда және неге?",
            answer: "Company A: net income $250K (25% margin), equity $800K (40% of assets). Company B: net income $200K (40% margin), equity $600K (60% of assets). Company B is stronger — higher profit margin and lower debt relative to assets.",
            answerRu: "Компания А: чистая прибыль $250К (маржа 25%), капитал $800К (40% активов). Компания Б: чистая прибыль $200К (маржа 40%), капитал $600К (60% активов). Компания Б сильнее — выше маржа прибыли и ниже долг относительно активов.",
            answerKk: "А компаниясы: таза пайда $250К (25% маржа), капитал $800К (активтердің 40%). Б компаниясы: таза пайда $200К (40% маржа), капитал $600К (активтердің 60%). Б компаниясы күштірек — пайда маржасы жоғары және активтерге қатысты қарызы төмен.",
            xp: 20
          }
        ]
      },
      {
        title: "Company Valuation",
        titleRu: "Оценка компаний",
        titleKk: "Компанияны бағалау",
        content: "Company valuation is the process of determining how much a business is worth. The most common methods are discounted cash flow (projecting future earnings and discounting them to present value), comparable company analysis (comparing to similar public companies), and asset-based valuation. Market capitalization — share price times shares outstanding — shows what the market currently believes a company is worth.",
        contentRu: "Оценка компании — процесс определения стоимости бизнеса. Основные методы: дисконтирование денежных потоков (прогноз будущих доходов с приведением к текущей стоимости), сравнительный анализ (сравнение с аналогичными публичными компаниями) и оценка на основе активов. Рыночная капитализация — цена акции умноженная на количество акций — показывает текущую оценку рынком.",
        contentKk: "Компанияны бағалау — бизнестің қанша тұратынын анықтау процесі. Негізгі әдістер: дисконтталған ақша ағыны (болашақ табыстарды ағымдағы құнға келтіру), салыстырмалы талдау (ұқсас ашық компаниялармен салыстыру) және активтерге негізделген бағалау. Нарықтық капитализация — акция бағасы көбейтілген акциялар саны — нарықтың ағымдағы бағасын көрсетеді.",
        keyFormulas: [
          {
            formula: "Market Cap = Share Price × Shares Outstanding",
            formulaRu: "Рыночная капитализация = Цена акции × Количество акций в обращении",
            formulaKk: "Нарықтық капитализация = Акция бағасы × Айналымдағы акциялар саны",
            description: "The total market value of a company's equity",
            descriptionRu: "Общая рыночная стоимость акционерного капитала компании",
            descriptionKk: "Компанияның акционерлік капиталының жалпы нарықтық құны"
          },
          {
            formula: "Enterprise Value = Market Cap + Debt − Cash",
            formulaRu: "Стоимость предприятия = Рыночная капитализация + Долг − Денежные средства",
            formulaKk: "Кәсіпорын құны = Нарықтық капитализация + Қарыз − Ақша қаражаты",
            description: "The total value of a company including debt obligations",
            descriptionRu: "Полная стоимость компании с учётом долговых обязательств",
            descriptionKk: "Борыштық міндеттемелерді қоса алғандағы компанияның толық құны"
          }
        ],
        solvedExamples: [
          {
            question: "A company has 10 million shares trading at $45 each, $50 million in debt, and $20 million in cash. Calculate the market cap and enterprise value.",
            questionRu: "У компании 10 млн акций по $45, долг $50 млн, денежные средства $20 млн. Рассчитайте рыночную капитализацию и стоимость предприятия.",
            questionKk: "Компанияның 10 млн акциясы $45-тен саудаланады, қарызы $50 млн, қолма-қол ақшасы $20 млн. Нарықтық капитализацияны және кәсіпорын құнын есептеңіз.",
            steps: [
              { en: "Market Cap = 10,000,000 × $45 = $450,000,000 ($450M).", ru: "Рыночная капитализация = 10 000 000 × $45 = $450 000 000 ($450М).", kk: "Нарықтық капитализация = 10 000 000 × $45 = $450 000 000 ($450М)." },
              { en: "Enterprise Value = $450M + $50M − $20M = $480M.", ru: "Стоимость предприятия = $450М + $50М − $20М = $480М.", kk: "Кәсіпорын құны = $450М + $50М − $20М = $480М." }
            ],
            answer: "Market cap is $450 million and enterprise value is $480 million.",
            answerRu: "Рыночная капитализация — $450 млн, стоимость предприятия — $480 млн.",
            answerKk: "Нарықтық капитализация — $450 млн, кәсіпорын құны — $480 млн."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A company has 5 million shares at $20 each. What is its market cap?",
            questionRu: "У компании 5 млн акций по $20. Какова рыночная капитализация?",
            questionKk: "Компанияның 5 млн акциясы $20-дан. Нарықтық капитализация қанша?",
            answer: "Market Cap = 5,000,000 × $20 = $100,000,000 ($100M).",
            answerRu: "Капитализация = 5 000 000 × $20 = $100 000 000 ($100 млн).",
            answerKk: "Капитализация = 5 000 000 × $20 = $100 000 000 ($100 млн).",
            hint: "Multiply the number of shares by the price per share.",
            hintRu: "Умножьте количество акций на цену одной акции.",
            hintKk: "Акциялар санын бір акция бағасына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Company X has a market cap of $200M, debt of $80M, and cash of $30M. Company Y has a market cap of $180M, debt of $10M, and cash of $5M. Which has a higher enterprise value?",
            questionRu: "Компания X: капитализация $200М, долг $80М, наличные $30М. Компания Y: капитализация $180М, долг $10М, наличные $5М. У какой стоимость предприятия выше?",
            questionKk: "X компаниясы: капитализация $200М, қарыз $80М, қолма-қол $30М. Y компаниясы: капитализация $180М, қарыз $10М, қолма-қол $5М. Қайсысының кәсіпорын құны жоғары?",
            answer: "X: $200M + $80M − $30M = $250M. Y: $180M + $10M − $5M = $185M. Company X has the higher enterprise value at $250M.",
            answerRu: "X: $200М + $80М − $30М = $250М. Y: $180М + $10М − $5М = $185М. У компании X стоимость предприятия выше — $250М.",
            answerKk: "X: $200М + $80М − $30М = $250М. Y: $180М + $10М − $5М = $185М. X компаниясының кәсіпорын құны жоғары — $250М.",
            hint: "Enterprise Value = Market Cap + Debt − Cash for each company.",
            hintRu: "Стоимость предприятия = Капитализация + Долг − Наличные для каждой.",
            hintKk: "Кәсіпорын құны = Капитализация + Қарыз − Қолма-қол әр компания үшін.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A startup is projected to generate $2M, $3M, and $5M in free cash flow over the next 3 years. Using a 10% discount rate, what is the present value of these cash flows? (Use PV = CF / (1+r)^n for each year)",
            questionRu: "Стартап ожидает свободный денежный поток $2М, $3М и $5М за 3 года. При ставке дисконтирования 10% какова приведённая стоимость? (PV = CF / (1+r)^n)",
            questionKk: "Стартап 3 жылда $2М, $3М және $5М бос ақша ағынын күтеді. 10% дисконт мөлшерлемесімен ағымдағы құны қанша? (PV = CF / (1+r)^n)",
            answer: "Year 1: $2M/1.1 = $1.818M. Year 2: $3M/1.21 = $2.479M. Year 3: $5M/1.331 = $3.756M. Total PV = $1.818M + $2.479M + $3.756M = $8.053M.",
            answerRu: "Год 1: $2М/1,1 = $1,818М. Год 2: $3М/1,21 = $2,479М. Год 3: $5М/1,331 = $3,756М. Итоговая приведённая стоимость = $1,818М + $2,479М + $3,756М = $8,053М.",
            answerKk: "1-жыл: $2М/1,1 = $1,818М. 2-жыл: $3М/1,21 = $2,479М. 3-жыл: $5М/1,331 = $3,756М. Жалпы ағымдағы құн = $1,818М + $2,479М + $3,756М = $8,053М.",
            xp: 20
          }
        ]
      },
      {
        title: "P/E Ratio",
        titleRu: "Коэффициент P/E",
        titleKk: "P/E коэффициенті",
        content: "The Price-to-Earnings (P/E) ratio measures how much investors pay for each dollar of a company's earnings. A high P/E suggests investors expect strong future growth, while a low P/E may indicate a bargain or declining business. Comparing P/E ratios within the same industry helps determine if a stock is overvalued or undervalued relative to peers.",
        contentRu: "Коэффициент цена/прибыль (P/E) показывает, сколько инвесторы платят за каждый доллар прибыли компании. Высокий P/E говорит об ожидании сильного роста, низкий может означать выгодную покупку или упадок бизнеса. Сравнение P/E в одной отрасли помогает определить, переоценена или недооценена акция.",
        contentKk: "Баға/пайда (P/E) коэффициенті инвесторлардың компания пайдасының әр долларына қанша төлейтінін өлшейді. Жоғары P/E күшті болашақ өсуді күтуді білдіреді, төмен P/E тиімді сатып алуды немесе бизнестің құлдырауын білдіруі мүмкін. Бір саладағы P/E салыстыру акцияның артық немесе кем бағаланғанын анықтауға көмектеседі.",
        keyFormulas: [
          {
            formula: "P/E Ratio = Share Price / Earnings Per Share (EPS)",
            formulaRu: "Коэффициент P/E = Цена акции / Прибыль на акцию (EPS)",
            formulaKk: "P/E коэффициенті = Акция бағасы / Акцияға шаққандағы пайда (EPS)",
            description: "Shows how many dollars investors pay per dollar of earnings",
            descriptionRu: "Показывает, сколько долларов инвесторы платят за доллар прибыли",
            descriptionKk: "Инвесторлардың пайданың бір долларына қанша доллар төлейтінін көрсетеді"
          }
        ],
        solvedExamples: [
          {
            question: "Company A trades at $60/share with EPS of $4. Company B trades at $30/share with EPS of $1.50. Which is relatively cheaper?",
            questionRu: "Компания А торгуется по $60 с EPS $4. Компания Б — по $30 с EPS $1,50. Какая относительно дешевле?",
            questionKk: "А компаниясы $60-тан саудаланады, EPS $4. Б компаниясы $30-дан, EPS $1,50. Қайсысы салыстырмалы түрде арзанырақ?",
            steps: [
              { en: "Company A P/E = $60 / $4 = 15. Investors pay $15 for every $1 of earnings.", ru: "P/E компании А = $60 / $4 = 15. Инвесторы платят $15 за $1 прибыли.", kk: "А компаниясының P/E = $60 / $4 = 15. Инвесторлар пайданың $1-і үшін $15 төлейді." },
              { en: "Company B P/E = $30 / $1.50 = 20. Company A is relatively cheaper with a lower P/E of 15 vs 20.", ru: "P/E компании Б = $30 / $1,50 = 20. Компания А относительно дешевле: P/E 15 против 20.", kk: "Б компаниясының P/E = $30 / $1,50 = 20. А компаниясы салыстырмалы түрде арзанырақ: P/E 15 қарсы 20." }
            ],
            answer: "Company A (P/E = 15) is relatively cheaper than Company B (P/E = 20), despite having a higher share price.",
            answerRu: "Компания А (P/E = 15) относительно дешевле компании Б (P/E = 20), несмотря на более высокую цену акции.",
            answerKk: "А компаниясы (P/E = 15) акция бағасы жоғары болса да, Б компаниясынан (P/E = 20) салыстырмалы түрде арзан."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A stock trades at $50 per share with EPS of $5. What is its P/E ratio?",
            questionRu: "Акция торгуется по $50, EPS = $5. Каков P/E?",
            questionKk: "Акция $50-дан саудаланады, EPS = $5. P/E қанша?",
            answer: "P/E = $50 / $5 = 10.",
            answerRu: "P/E = $50 / $5 = 10.",
            answerKk: "P/E = $50 / $5 = 10.",
            hint: "Divide the share price by earnings per share.",
            hintRu: "Разделите цену акции на прибыль на акцию.",
            hintKk: "Акция бағасын бір акцияға шаққандағы пайдаға бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Tech company: P/E = 35. Bank: P/E = 10. Both earn $2/share. What does the difference suggest about investor expectations?",
            questionRu: "IT-компания: P/E = 35. Банк: P/E = 10. Обе зарабатывают $2/акция. Что разница говорит об ожиданиях инвесторов?",
            questionKk: "IT компания: P/E = 35. Банк: P/E = 10. Екеуі де $2/акция табады. Айырмашылық инвесторлардың күтулері туралы не айтады?",
            answer: "Investors expect the tech company's earnings to grow much faster. At $2 EPS, the tech stock costs $70 (35×$2) vs the bank at $20 (10×$2). The premium reflects anticipated future growth, not current profitability.",
            answerRu: "Инвесторы ожидают, что прибыль IT-компании будет расти намного быстрее. При EPS $2 акция IT-компании стоит $70 (35×$2) против $20 у банка (10×$2). Премия отражает ожидаемый будущий рост, а не текущую прибыльность.",
            answerKk: "Инвесторлар IT компанияның пайдасының әлдеқайда тезірек өсуін күтеді. EPS $2 болғанда IT акциясы $70 (35×$2) тұрады, ал банк $20 (10×$2). Үстеме баға ағымдағы табыстылықты емес, күтілетін болашақ өсуді көрсетеді.",
            hint: "Higher P/E means investors expect faster earnings growth.",
            hintRu: "Более высокий P/E означает ожидание более быстрого роста прибыли.",
            hintKk: "Жоғарырақ P/E пайданың тезірек өсуін күтуді білдіреді.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A company earns $10M net income with 2M shares outstanding. The stock trades at $75. The industry average P/E is 12. Is the stock overvalued or undervalued, and what would the 'fair' price be based on the industry average?",
            questionRu: "Компания зарабатывает $10М чистой прибыли, 2М акций в обращении. Акция торгуется по $75. Средний P/E отрасли — 12. Акция переоценена или недооценена? Какова 'справедливая' цена?",
            questionKk: "Компания $10М таза пайда табады, айналымдағы 2М акция. Акция $75-тен саудаланады. Саланың орташа P/E — 12. Акция артық ба, кем бағаланған ба? 'Әділ' баға қанша?",
            answer: "EPS = $10M / 2M = $5. Current P/E = $75 / $5 = 15. Industry avg P/E = 12. Fair price = $5 × 12 = $60. The stock is overvalued by $15 (20%) relative to industry peers.",
            answerRu: "EPS = $10М / 2М = $5. Текущий P/E = $75 / $5 = 15. Средний P/E отрасли = 12. Справедливая цена = $5 × 12 = $60. Акция переоценена на $15 (20%) относительно отрасли.",
            answerKk: "EPS = $10М / 2М = $5. Ағымдағы P/E = $75 / $5 = 15. Саланың орташа P/E = 12. Әділ баға = $5 × 12 = $60. Акция салаға қатысты $15-ке (20%) артық бағаланған.",
            xp: 20
          }
        ]
      },
      {
        title: "Dividend Investing",
        titleRu: "Дивидендное инвестирование",
        titleKk: "Дивидендтік инвестициялау",
        content: "Dividends are portions of a company's profits paid regularly to shareholders. Dividend investing focuses on buying stocks that pay consistent, growing dividends for reliable income. The dividend yield measures the annual dividend as a percentage of the stock price, helping investors compare income potential across different stocks.",
        contentRu: "Дивиденды — часть прибыли компании, регулярно выплачиваемая акционерам. Дивидендное инвестирование фокусируется на акциях с постоянными растущими выплатами для надёжного дохода. Дивидендная доходность измеряет годовой дивиденд как процент от цены акции, помогая сравнивать потенциальный доход.",
        contentKk: "Дивидендтер — акционерлерге үнемі төленетін компания пайдасының бөлігі. Дивидендтік инвестициялау сенімді табыс үшін тұрақты өсіп келе жатқан дивидендтер төлейтін акцияларды сатып алуға бағытталған. Дивидендтік кірістілік жылдық дивидендті акция бағасының пайызы ретінде өлшейді, әр түрлі акциялардың табыс әлеуетін салыстыруға көмектеседі.",
        keyFormulas: [
          {
            formula: "Dividend Yield = (Annual Dividend / Stock Price) × 100%",
            formulaRu: "Дивидендная доходность = (Годовой дивиденд / Цена акции) × 100%",
            formulaKk: "Дивидендтік табыстылық = (Жылдық дивиденд / Акция бағасы) × 100%",
            description: "Percentage return from dividends alone",
            descriptionRu: "Процентный доход только от дивидендов",
            descriptionKk: "Тек дивидендтерден алынатын пайыздық кіріс"
          },
          {
            formula: "Payout Ratio = (Dividends Paid / Net Income) × 100%",
            formulaRu: "Коэффициент выплат = (Выплаченные дивиденды / Чистый доход) × 100%",
            formulaKk: "Төлем коэффициенті = (Төленген дивидендтер / Таза табыс) × 100%",
            description: "What percentage of profits the company distributes as dividends",
            descriptionRu: "Какой процент прибыли компания распределяет в виде дивидендов",
            descriptionKk: "Компания пайдасының қанша пайызын дивиденд ретінде бөлетіні"
          }
        ],
        solvedExamples: [
          {
            question: "A stock costs $80 and pays $3.20 annually in dividends. The company earned $10/share. Calculate the dividend yield and payout ratio.",
            questionRu: "Акция стоит $80, годовой дивиденд $3,20. Компания заработала $10/акция. Рассчитайте дивидендную доходность и коэффициент выплат.",
            questionKk: "Акция $80 тұрады, жылдық дивиденд $3,20. Компания $10/акция тапты. Дивидендтік кірістілік пен төлем коэффициентін есептеңіз.",
            steps: [
              { en: "Dividend Yield = ($3.20 / $80) × 100% = 4%.", ru: "Дивидендная доходность = ($3,20 / $80) × 100% = 4%.", kk: "Дивидендтік кірістілік = ($3,20 / $80) × 100% = 4%." },
              { en: "Payout Ratio = ($3.20 / $10) × 100% = 32%. The company pays out 32% of earnings as dividends.", ru: "Коэффициент выплат = ($3,20 / $10) × 100% = 32%. Компания выплачивает 32% прибыли в виде дивидендов.", kk: "Төлем коэффициенті = ($3,20 / $10) × 100% = 32%. Компания пайдасының 32%-ін дивиденд ретінде төлейді." }
            ],
            answer: "Dividend yield is 4% and payout ratio is 32%.",
            answerRu: "Дивидендная доходность — 4%, коэффициент выплат — 32%.",
            answerKk: "Дивидендтік кірістілік — 4%, төлем коэффициенті — 32%."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A stock priced at $50 pays $2 in annual dividends. What is the dividend yield?",
            questionRu: "Акция стоит $50, годовой дивиденд $2. Какова дивидендная доходность?",
            questionKk: "Акция бағасы $50, жылдық дивиденд $2. Дивидендтік кірістілік қанша?",
            answer: "Dividend Yield = ($2 / $50) × 100% = 4%.",
            answerRu: "Дивидендная доходность = ($2 / $50) × 100% = 4%.",
            answerKk: "Дивидендтік кірістілік = ($2 / $50) × 100% = 4%.",
            hint: "Divide the annual dividend by the stock price and multiply by 100.",
            hintRu: "Разделите годовой дивиденд на цену акции и умножьте на 100.",
            hintKk: "Жылдық дивидендті акция бағасына бөліп, 100-ге көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You own 200 shares of a stock paying $1.50/quarter in dividends. The stock price is $60. What is your annual dividend income and the dividend yield?",
            questionRu: "У вас 200 акций с дивидендом $1,50/квартал. Цена акции $60. Каков годовой доход и дивидендная доходность?",
            questionKk: "Сізде тоқсанына $1,50 дивиденд төлейтін 200 акция бар. Акция бағасы $60. Жылдық дивидендтік табысыңыз бен кірістілік қанша?",
            answer: "Annual dividend per share = $1.50 × 4 = $6. Total annual income = 200 × $6 = $1,200. Yield = ($6 / $60) × 100% = 10%.",
            answerRu: "Годовой дивиденд на акцию = $1,50 × 4 = $6. Общий годовой доход = 200 × $6 = $1200. Доходность = ($6 / $60) × 100% = 10%.",
            answerKk: "Бір акцияға жылдық дивиденд = $1,50 × 4 = $6. Жалпы жылдық табыс = 200 × $6 = $1200. Кірістілік = ($6 / $60) × 100% = 10%.",
            hint: "Quarterly dividends × 4 = annual dividend.",
            hintRu: "Квартальный дивиденд × 4 = годовой дивиденд.",
            hintKk: "Тоқсандық дивиденд × 4 = жылдық дивиденд.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Stock A: price $100, dividend $2, growing dividends 8%/year. Stock B: price $40, dividend $3, growing dividends 2%/year. Which provides more dividend income after 5 years on a $10,000 investment? (Assume prices don't change)",
            questionRu: "Акция А: цена $100, дивиденд $2, рост 8%/год. Акция Б: цена $40, дивиденд $3, рост 2%/год. Какая даст больше дивидендов за 5 лет при инвестиции $10 000?",
            questionKk: "А акциясы: бағасы $100, дивиденд $2, өсім 8%/жыл. Б акциясы: бағасы $40, дивиденд $3, өсім 2%/жыл. $10 000 инвестициямен 5 жылда қайсысы көп дивиденд береді?",
            answer: "A: 100 shares. Dividends years 1-5: $2.00, $2.16, $2.33, $2.52, $2.72 = $11.73/share × 100 = $1,173. B: 250 shares. Dividends: $3.00, $3.06, $3.12, $3.18, $3.25 = $15.61/share × 250 = $3,903. Stock B provides more total income ($3,903 vs $1,173) due to higher initial yield despite slower growth.",
            answerRu: "А: 100 акций. Дивиденды за 1-5 годы: $2,00, $2,16, $2,33, $2,52, $2,72 = $11,73/акция × 100 = $1173. Б: 250 акций. Дивиденды: $3,00, $3,06, $3,12, $3,18, $3,25 = $15,61/акция × 250 = $3903. Акция Б даёт больше дохода ($3903 против $1173) благодаря более высокой начальной доходности, несмотря на более медленный рост.",
            answerKk: "А: 100 акция. 1-5 жылдардағы дивидендтер: $2,00, $2,16, $2,33, $2,52, $2,72 = $11,73/акция × 100 = $1173. Б: 250 акция. Дивидендтер: $3,00, $3,06, $3,12, $3,18, $3,25 = $15,61/акция × 250 = $3903. Б акциясы жоғарырақ бастапқы кірістілігінің арқасында, өсімі баяу болса да, көбірек жалпы табыс береді ($3903 қарсы $1173).",
            xp: 20
          }
        ]
      },
      {
        title: "Real Estate",
        titleRu: "Недвижимость",
        titleKk: "Жылжымайтын мүлік",
        content: "Real estate investing involves purchasing property to generate income through rent or appreciation in value. It is one of the oldest and most reliable wealth-building strategies. Key metrics include cap rate (net operating income divided by property value), cash-on-cash return, and appreciation rate. Real estate offers both regular cash flow and long-term equity growth.",
        contentRu: "Инвестирование в недвижимость — покупка объектов для получения дохода от аренды или роста стоимости. Это один из старейших и надёжнейших способов создания богатства. Ключевые показатели: ставка капитализации (чистый операционный доход / стоимость), доходность на вложенный капитал и темп роста стоимости.",
        contentKk: "Жылжымайтын мүлікке инвестициялау — жалға беру немесе құнның өсуінен табыс алу үшін мүлік сатып алу. Бұл байлық құрудың ең ежелгі және сенімді стратегияларының бірі. Негізгі көрсеткіштер: капитализация мөлшерлемесі (таза операциялық табыс / мүлік құны), салынған капиталдың кірістілігі және құнның өсу қарқыны.",
        keyFormulas: [
          {
            formula: "Cap Rate = (Net Operating Income / Property Value) × 100%",
            formulaRu: "Ставка капитализации = (Чистый операционный доход / Стоимость недвижимости) × 100%",
            formulaKk: "Капиталдандыру ставкасы = (Таза операциялық табыс / Жылжымайтын мүлік құны) × 100%",
            description: "The rate of return on a real estate investment based on income",
            descriptionRu: "Ставка доходности инвестиций в недвижимость на основе дохода",
            descriptionKk: "Табысқа негізделген жылжымайтын мүлік инвестициясының кірістілік мөлшерлемесі"
          }
        ],
        solvedExamples: [
          {
            question: "You buy a rental property for $200,000. Monthly rent is $1,500, and annual expenses (taxes, insurance, maintenance) are $6,000. Calculate the cap rate.",
            questionRu: "Вы покупаете арендный объект за $200 000. Месячная аренда $1 500, годовые расходы $6 000. Рассчитайте ставку капитализации.",
            questionKk: "Сіз $200 000-ға жалға берілетін мүлік сатып аласыз. Айлық жалдау ақысы $1 500, жылдық шығыстар $6 000. Капитализация мөлшерлемесін есептеңіз.",
            steps: [
              { en: "Annual rental income = $1,500 × 12 = $18,000. Net Operating Income = $18,000 − $6,000 = $12,000.", ru: "Годовой доход = $1 500 × 12 = $18 000. Чистый операционный доход = $18 000 − $6 000 = $12 000.", kk: "Жылдық жалдау табысы = $1 500 × 12 = $18 000. Таза операциялық табыс = $18 000 − $6 000 = $12 000." },
              { en: "Cap Rate = ($12,000 / $200,000) × 100% = 6%.", ru: "Ставка капитализации = ($12 000 / $200 000) × 100% = 6%.", kk: "Капитализация мөлшерлемесі = ($12 000 / $200 000) × 100% = 6%." }
            ],
            answer: "The cap rate is 6%, meaning the property generates 6% annual return on its value from rental income alone.",
            answerRu: "Ставка капитализации — 6%, то есть объект приносит 6% годовой доходности от своей стоимости только за счёт аренды.",
            answerKk: "Капитализация мөлшерлемесі — 6%, яғни мүлік тек жалдау табысынан құнының 6% жылдық кірісін әкеледі."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A property worth $150,000 has a net operating income of $9,000/year. What is the cap rate?",
            questionRu: "Недвижимость стоимостью $150 000, чистый операционный доход $9 000/год. Какова ставка капитализации?",
            questionKk: "Мүлік құны $150 000, таза операциялық табыс $9 000/жыл. Капитализация мөлшерлемесі қанша?",
            answer: "Cap Rate = ($9,000 / $150,000) × 100% = 6%.",
            answerRu: "Ставка капитализации = ($9000 / $150 000) × 100% = 6%.",
            answerKk: "Капитализация мөлшерлемесі = ($9000 / $150 000) × 100% = 6%.",
            hint: "Divide net operating income by property value.",
            hintRu: "Разделите чистый операционный доход на стоимость недвижимости.",
            hintKk: "Таза операциялық табысты мүлік құнына бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You put $40,000 down on a $200,000 property (mortgage covers the rest). Rent is $1,400/month, mortgage is $800/month, expenses are $300/month. What is your annual cash-on-cash return?",
            questionRu: "Вы вносите $40 000 за объект стоимостью $200 000. Аренда $1 400/мес, ипотека $800/мес, расходы $300/мес. Какова доходность на вложенный капитал?",
            questionKk: "Сіз $200 000 мүлік үшін $40 000 бастапқы жарна төлейсіз. Жалдау ақысы $1 400/ай, ипотека $800/ай, шығыстар $300/ай. Салынған капиталдың жылдық кірістілігі қанша?",
            answer: "Monthly cash flow = $1,400 − $800 − $300 = $300. Annual = $300 × 12 = $3,600. Cash-on-cash return = ($3,600 / $40,000) × 100% = 9%.",
            answerRu: "Месячный денежный поток = $1400 − $800 − $300 = $300. Годовой = $300 × 12 = $3600. Доходность на вложенный капитал = ($3600 / $40 000) × 100% = 9%.",
            answerKk: "Айлық ақша ағыны = $1400 − $800 − $300 = $300. Жылдық = $300 × 12 = $3600. Салынған капитал кірістілігі = ($3600 / $40 000) × 100% = 9%.",
            hint: "Cash flow = rent − mortgage − expenses. Return = annual cash flow / down payment.",
            hintRu: "Денежный поток = аренда − ипотека − расходы. Доходность = годовой поток / первоначальный взнос.",
            hintKk: "Ақша ағыны = жалдау − ипотека − шығыстар. Кірістілік = жылдық ағын / бастапқы жарна.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Property A: costs $300,000, cap rate 5%, appreciates 3%/year. Property B: costs $300,000, cap rate 8%, appreciates 0%/year. After 5 years, which has the higher total return (income + appreciation)?",
            questionRu: "Объект А: $300 000, ставка капитализации 5%, рост стоимости 3%/год. Объект Б: $300 000, ставка 8%, рост 0%. Через 5 лет какой даст больше (доход + рост стоимости)?",
            questionKk: "А мүлік: $300 000, кап. мөлшерлемесі 5%, бағасы 3%/жыл өседі. Б мүлік: $300 000, кап. мөлшерлемесі 8%, баға өсімі 0%. 5 жылдан кейін қайсысының жалпы кірістілігі жоғары (табыс + баға өсімі)?",
            answer: "A: 5-year income = 5 × $15,000 = $75,000. Appreciation = $300,000 × (1.03^5 − 1) = $47,782. Total = $122,782. B: 5-year income = 5 × $24,000 = $120,000. Appreciation = $0. Total = $120,000. Property A edges ahead ($122,782 vs $120,000) thanks to compounding appreciation.",
            answerRu: "А: доход за 5 лет = 5 × $15 000 = $75 000. Рост стоимости = $300 000 × (1,03^5 − 1) = $47 782. Итого = $122 782. Б: доход за 5 лет = 5 × $24 000 = $120 000. Рост стоимости = $0. Итого = $120 000. Объект А немного впереди ($122 782 против $120 000) благодаря сложному росту стоимости.",
            answerKk: "А: 5 жылдық табыс = 5 × $15 000 = $75 000. Баға өсімі = $300 000 × (1,03^5 − 1) = $47 782. Барлығы = $122 782. Б: 5 жылдық табыс = 5 × $24 000 = $120 000. Баға өсімі = $0. Барлығы = $120 000. А мүлкі күрделі баға өсімінің арқасында сәл алда ($122 782 қарсы $120 000).",
            xp: 20
          }
        ]
      },
      {
        title: "Crypto Fundamentals",
        titleRu: "Основы криптовалют",
        titleKk: "Криптовалюта негіздері",
        content: "Cryptocurrency is digital money that uses cryptography for security and operates on decentralized networks. Bitcoin, launched in 2009, was the first cryptocurrency. Unlike traditional currencies controlled by central banks, crypto operates on peer-to-peer networks. Key concepts include wallets (digital storage), exchanges (where you buy/sell), and the extreme price volatility that makes crypto both exciting and risky.",
        contentRu: "Криптовалюта — цифровые деньги, использующие криптографию и работающие на децентрализованных сетях. Биткоин (2009) стал первой криптовалютой. В отличие от обычных валют, контролируемых центральными банками, крипто работает в одноранговых сетях. Ключевые понятия: кошельки (хранение), биржи (покупка/продажа) и экстремальная волатильность.",
        contentKk: "Криптовалюта — қауіпсіздік үшін криптографияны қолданатын және орталықсыздандырылған желілерде жұмыс істейтін цифрлық ақша. 2009 жылы іске қосылған Bitcoin бірінші криптовалюта болды. Орталық банктер бақылайтын дәстүрлі валюталардан айырмашылығы, крипто теңдесті-теңдеске желілерінде жұмыс істейді. Негізгі ұғымдар: әмияндар (сақтау), биржалар (сатып алу/сату) және бағаның шектен тыс құбылмалылығы.",
        keyFormulas: [
          {
            formula: "Market Cap (Crypto) = Current Price × Circulating Supply",
            formulaRu: "Рыночная капитализация (крипто) = Текущая цена × Оборотное предложение",
            formulaKk: "Нарықтық капитализация (крипто) = Ағымдағы баға × Айналымдағы ұсыныс",
            description: "Total market value of a cryptocurrency",
            descriptionRu: "Общая рыночная стоимость криптовалюты",
            descriptionKk: "Криптовалютаның жалпы нарықтық құны"
          }
        ],
        solvedExamples: [
          {
            question: "Bitcoin trades at $60,000 with a circulating supply of 19.5 million coins. A new token trades at $0.50 with 10 billion coins. Compare their market caps.",
            questionRu: "Биткоин торгуется по $60 000, в обращении 19,5 млн монет. Новый токен — $0,50 при 10 млрд монет. Сравните рыночные капитализации.",
            questionKk: "Bitcoin $60 000-нан саудаланады, айналымда 19,5 млн монета. Жаңа токен $0,50-ден, 10 млрд монета. Нарықтық капитализацияларын салыстырыңыз.",
            steps: [
              { en: "Bitcoin market cap = $60,000 × 19,500,000 = $1.17 trillion.", ru: "Капитализация биткоина = $60 000 × 19 500 000 = $1,17 трлн.", kk: "Bitcoin нарықтық капитализациясы = $60 000 × 19 500 000 = $1,17 трлн." },
              { en: "New token market cap = $0.50 × 10,000,000,000 = $5 billion. Despite a 'cheap' price, the token's market cap is $5B vs Bitcoin's $1.17T — Bitcoin is 234× larger.", ru: "Капитализация нового токена = $0,50 × 10 000 000 000 = $5 млрд. Несмотря на 'дешёвую' цену, $5 млрд против $1,17 трлн — биткоин в 234 раза больше.", kk: "Жаңа токеннің нарықтық капитализациясы = $0,50 × 10 000 000 000 = $5 млрд. 'Арзан' бағаға қарамастан, $5 млрд қарсы $1,17 трлн — Bitcoin 234 есе үлкен." }
            ],
            answer: "Bitcoin: $1.17 trillion. New token: $5 billion. A low price per coin does not mean a small or cheap cryptocurrency — market cap is what matters.",
            answerRu: "Биткоин: $1,17 трлн. Новый токен: $5 млрд. Низкая цена монеты не означает маленькую или дешёвую криптовалюту — важна именно капитализация.",
            answerKk: "Bitcoin: $1,17 трлн. Жаңа токен: $5 млрд. Монетаның төмен бағасы криптовалютаның кіші немесе арзан екенін білдірмейді — маңыздысы капитализация."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A cryptocurrency has 500 million coins in circulation at $2 each. What is its market cap?",
            questionRu: "Криптовалюта: 500 млн монет по $2. Какова рыночная капитализация?",
            questionKk: "Криптовалюта: 500 млн монета, әрқайсысы $2. Нарықтық капитализация қанша?",
            answer: "Market Cap = 500,000,000 × $2 = $1,000,000,000 ($1 billion).",
            answerRu: "Капитализация = 500 000 000 × $2 = $1 000 000 000 ($1 млрд).",
            answerKk: "Капитализация = 500 000 000 × $2 = $1 000 000 000 ($1 млрд).",
            hint: "Multiply the price by the number of coins in circulation.",
            hintRu: "Умножьте цену на количество монет в обращении.",
            hintKk: "Бағаны айналымдағы монеталар санына көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You bought 0.5 Bitcoin at $40,000 per coin and 1,000 Ethereum at $2,000 each. Bitcoin is now $65,000 and Ethereum is $3,500. What is your total profit/loss?",
            questionRu: "Вы купили 0,5 биткоина по $40 000 и 1 000 Ethereum по $2 000. Биткоин сейчас $65 000, Ethereum — $3 500. Какова общая прибыль/убыток?",
            questionKk: "Сіз 0,5 Bitcoin-ді $40 000-нан және 1 000 Ethereum-ды $2 000-нан сатып алдыңыз. Bitcoin қазір $65 000, Ethereum $3 500. Жалпы пайдаңыз/залалыңыз қанша?",
            answer: "Bitcoin: cost = 0.5 × $40,000 = $20,000, now worth 0.5 × $65,000 = $32,500, profit = $12,500. Ethereum: cost = 1,000 × $2,000 = $2,000,000, now worth 1,000 × $3,500 = $3,500,000, profit = $1,500,000. Total profit = $1,512,500.",
            answerRu: "Bitcoin: стоимость покупки = 0,5 × $40 000 = $20 000, сейчас стоит 0,5 × $65 000 = $32 500, прибыль = $12 500. Ethereum: стоимость = 1000 × $2000 = $2 000 000, сейчас стоит 1000 × $3500 = $3 500 000, прибыль = $1 500 000. Общая прибыль = $1 512 500.",
            answerKk: "Bitcoin: құны = 0,5 × $40 000 = $20 000, қазір 0,5 × $65 000 = $32 500 тұрады, пайда = $12 500. Ethereum: құны = 1000 × $2000 = $2 000 000, қазір 1000 × $3500 = $3 500 000 тұрады, пайда = $1 500 000. Жалпы пайда = $1 512 500.",
            hint: "Calculate cost and current value for each, then find the difference.",
            hintRu: "Рассчитайте стоимость и текущую цену каждого, затем найдите разницу.",
            hintKk: "Әрқайсысының құнын және ағымдағы бағасын есептеп, айырмашылығын табыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A token launched at $1 with 100M supply. Over 2 years: price went to $50 (Year 1 peak), supply increased to 200M via inflation, then price crashed to $5 (Year 2). Calculate the peak market cap, final market cap, and the percentage loss from peak for investors who bought at the top.",
            questionRu: "Токен запущен по $1, 100М монет. За 2 года: пик $50 (год 1), выпуск вырос до 200М, затем цена упала до $5 (год 2). Рассчитайте пиковую и финальную капитализацию, процент потерь для купивших на пике.",
            questionKk: "Токен $1-ден, 100М монетамен іске қосылды. 2 жылда: ең жоғары бағасы $50 (1-жыл), шығарылым 200М-ға дейін өсті, содан кейін баға $5-ке түсті (2-жыл). Ең жоғары және соңғы капитализацияны, ең жоғары бағадан сатып алғандар үшін залал пайызын есептеңіз.",
            answer: "Peak market cap = $50 × 100M = $5B. Final market cap = $5 × 200M = $1B. Loss for peak buyers: ($50 − $5) / $50 = 90% loss. Note: total market cap dropped 80% ($5B to $1B), but individual investors lost 90% because supply dilution doesn't affect per-coin loss.",
            answerRu: "Пиковая капитализация = $50 × 100М = $5 млрд. Финальная капитализация = $5 × 200М = $1 млрд. Убыток покупателей на пике: ($50 − $5) / $50 = 90%. Обратите внимание: общая капитализация упала на 80% (с $5 до $1 млрд), но отдельные инвесторы потеряли 90%, потому что разводнение выпуска не влияет на убыток на монету.",
            answerKk: "Ең жоғары капитализация = $50 × 100М = $5 млрд. Соңғы капитализация = $5 × 200М = $1 млрд. Ең жоғары бағадан алғандардың залалы: ($50 − $5) / $50 = 90%. Ескеріңіз: жалпы капитализация 80%-ға түсті ($5-тен $1 млрд-қа), бірақ жеке инвесторлар 90% жоғалтты, өйткені шығарылымның сұйылуы монетаға шаққандағы залалға әсер етпейді.",
            xp: 20
          }
        ]
      },
      {
        title: "Blockchain",
        titleRu: "Блокчейн",
        titleKk: "Блокчейн",
        content: "Blockchain is a distributed digital ledger that records transactions across many computers so that records cannot be altered retroactively. Each block contains transaction data, a timestamp, and a cryptographic hash of the previous block, creating an unbreakable chain. This technology powers cryptocurrencies but also has applications in supply chain tracking, voting systems, and digital identity verification.",
        contentRu: "Блокчейн — распределённый цифровой реестр, записывающий транзакции на множестве компьютеров так, что записи нельзя изменить задним числом. Каждый блок содержит данные транзакций, временную метку и криптографический хеш предыдущего блока. Технология лежит в основе криптовалют, но применяется и в логистике, голосовании и цифровой идентификации.",
        contentKk: "Блокчейн — транзакцияларды көптеген компьютерлерде жазатын, жазбаларды кері өзгерту мүмкін емес етіп жасалған таратылған цифрлық тізілім. Әр блок транзакция деректерін, уақыт белгісін және алдыңғы блоктың криптографиялық хэшін қамтиды, бұзылмайтын тізбек құрады. Бұл технология криптовалюталарды қамтамасыз етеді, сонымен қатар жеткізу тізбегін бақылауда, дауыс беру жүйелерінде және цифрлық идентификацияда қолданылады.",
        keyFormulas: [
          {
            formula: "Block = Transaction Data + Timestamp + Previous Block Hash",
            formulaRu: "Блок = Данные транзакции + Метка времени + Хеш предыдущего блока",
            formulaKk: "Блок = Транзакция деректері + Уақыт белгісі + Алдыңғы блоктың хэші",
            description: "The structure of each block in the chain ensures integrity",
            descriptionRu: "Структура каждого блока обеспечивает целостность цепи",
            descriptionKk: "Тізбектегі әр блоктың құрылымы тұтастықты қамтамасыз етеді"
          }
        ],
        solvedExamples: [
          {
            question: "A blockchain processes 7 transactions per second with an average fee of $2. A competing chain processes 1,000 TPS with a $0.01 fee. Compare the daily fee revenue and transaction capacity.",
            questionRu: "Блокчейн обрабатывает 7 транзакций/сек с комиссией $2. Конкурент — 1 000 TPS с комиссией $0,01. Сравните суточный доход от комиссий и пропускную способность.",
            questionKk: "Блокчейн секундына 7 транзакция өңдейді, комиссия $2. Бәсекелес — 1 000 TPS, комиссия $0,01. Күнделікті комиссия табысы мен өткізу қабілетін салыстырыңыз.",
            steps: [
              { en: "Chain A: 7 TPS × 86,400 seconds/day = 604,800 transactions/day. Daily fees = 604,800 × $2 = $1,209,600.", ru: "Цепь А: 7 TPS × 86 400 сек/день = 604 800 транзакций/день. Комиссии = 604 800 × $2 = $1 209 600.", kk: "А тізбегі: 7 TPS × 86 400 сек/күн = 604 800 транзакция/күн. Комиссия = 604 800 × $2 = $1 209 600." },
              { en: "Chain B: 1,000 TPS × 86,400 = 86,400,000 transactions/day. Daily fees = 86,400,000 × $0.01 = $864,000. Chain B handles 143× more transactions but earns 29% less in fees.", ru: "Цепь Б: 1 000 × 86 400 = 86 400 000 транзакций/день. Комиссии = $864 000. Цепь Б обрабатывает в 143 раза больше транзакций, но зарабатывает на 29% меньше.", kk: "Б тізбегі: 1 000 × 86 400 = 86 400 000 транзакция/күн. Комиссия = $864 000. Б тізбегі 143 есе көп транзакция өңдейді, бірақ 29% аз табыс табады." }
            ],
            answer: "Chain A: 604,800 transactions, $1.2M in fees. Chain B: 86.4M transactions, $864K in fees. Higher throughput doesn't always mean more revenue.",
            answerRu: "Цепь А: 604 800 транзакций, $1,2М комиссий. Цепь Б: 86,4М транзакций, $864К комиссий. Более высокая пропускная способность не всегда означает больше дохода.",
            answerKk: "А тізбегі: 604 800 транзакция, $1,2М комиссия. Б тізбегі: 86,4М транзакция, $864К комиссия. Жоғарырақ өткізу қабілеті әрқашан көбірек табысты білдірмейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What three pieces of data does each block in a blockchain contain?",
            questionRu: "Какие три элемента данных содержит каждый блок?",
            questionKk: "Блокчейндегі әр блок қандай үш деректен тұрады?",
            answer: "Transaction data, a timestamp, and the cryptographic hash of the previous block.",
            answerRu: "Данные транзакций, временная метка и криптографический хеш предыдущего блока.",
            answerKk: "Транзакция деректері, уақыт белгісі және алдыңғы блоктың криптографиялық хэші.",
            hint: "Think about what makes the chain secure and ordered.",
            hintRu: "Подумайте, что делает цепь безопасной и упорядоченной.",
            hintKk: "Тізбекті қауіпсіз және реттелген ететін нәрсені ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Why can't someone change a transaction in block #500 of a 1,000-block chain without being detected?",
            questionRu: "Почему нельзя изменить транзакцию в блоке №500 из 1000 блоков незаметно?",
            questionKk: "Неге 1000 блоктық тізбектің №500 блогындағы транзакцияны байқалмай өзгерту мүмкін емес?",
            answer: "Changing block #500 would alter its hash, which wouldn't match the hash stored in block #501. This would break the chain for all 500 subsequent blocks, requiring recalculation of every block after #500 — a computationally impossible task on a decentralized network.",
            answerRu: "Изменение блока №500 изменит его хеш, который перестанет совпадать с хешем, хранящимся в блоке №501. Это разрушит цепь для всех 500 последующих блоков, требуя пересчёта каждого блока после №500 — вычислительно невозможная задача в децентрализованной сети.",
            answerKk: "№500 блокты өзгерту оның хэшін өзгертеді, ол №501 блокта сақталған хэшпен сәйкес келмей қалады. Бұл кейінгі 500 блоктың бәрі үшін тізбекті бұзады, №500-ден кейінгі әр блокты қайта есептеуді талап етеді — орталықсыздандырылған желіде есептеу тұрғысынан мүмкін емес міндет.",
            hint: "Each block stores the hash of the previous block.",
            hintRu: "Каждый блок хранит хеш предыдущего блока.",
            hintKk: "Әр блок алдыңғы блоктың хэшін сақтайды.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A Proof-of-Work blockchain requires miners to find a hash below a target value. If the target allows 1 in 10 trillion hashes to succeed and a miner has 100 TH/s (100 trillion hashes/second) of computing power, how long on average to mine one block? The network has 400 EH/s total. What is this miner's share of block rewards?",
            questionRu: "Блокчейн PoW требует хеш ниже целевого значения. Цель: 1 из 10 трлн хешей. Майнер: 100 TH/s. Сколько времени на блок? Сеть: 400 EH/s. Какова доля майнера в наградах?",
            questionKk: "PoW блокчейні мақсатты мәннен төмен хэш табуды талап етеді. Мақсат: 10 трлн хэштен 1. Майнер: 100 TH/s. Блок табуға орташа уақыт қанша? Желі: 400 EH/s. Майнердің блок сыйақысындағы үлесі қанша?",
            answer: "At 100 TH/s (10^14 H/s), finding 1 in 10^13 means ~10 hashes/second succeed on average → ~0.1 seconds per block for this miner alone. But the network is 400 EH/s = 4×10^20 H/s. Miner's share = 10^14 / (4×10^20) = 0.000025% of total rewards.",
            answerRu: "При 100 TH/s (10^14 H/s), с вероятностью успеха 1 из 10^13 в среднем успешны ~10 хешей/сек → ~0,1 секунды на блок только для этого майнера. Но сеть — 400 EH/s = 4×10^20 H/s. Доля майнера = 10^14 / (4×10^20) = 0,000025% от общих наград.",
            answerKk: "100 TH/s (10^14 H/s) кезінде, 10^13-тен 1 сәттілік деген — орташа есеппен секундына ~10 хэш сәтті болады → тек осы майнер үшін блокқа ~0,1 секунд. Бірақ желі 400 EH/s = 4×10^20 H/s. Майнердің үлесі = 10^14 / (4×10^20) = жалпы сыйақының 0,000025%.",
            xp: 20
          }
        ]
      },
      {
        title: "Options Intro",
        titleRu: "Введение в опционы",
        titleKk: "Опциондарға кіріспе",
        content: "Options are financial contracts that give the buyer the right, but not the obligation, to buy or sell an asset at a specified price before a certain date. A call option gives the right to buy, while a put option gives the right to sell. Options are used for speculation, hedging risk, and generating income. The price paid for an option is called the premium.",
        contentRu: "Опционы — финансовые контракты, дающие покупателю право, но не обязательство, купить или продать актив по определённой цене до определённой даты. Колл-опцион даёт право купить, пут-опцион — продать. Опционы используются для спекуляции, хеджирования рисков и получения дохода. Цена опциона называется премией.",
        contentKk: "Опциондар — сатып алушыға белгілі бір күнге дейін белгілі бір бағамен активті сатып алу немесе сату құқығын беретін, бірақ міндеттемейтін қаржылық келісімшарттар. Колл опцион сатып алу құқығын, пут опцион сату құқығын береді. Опциондар алыпсатарлық, тәуекелді хеджирлеу және табыс алу үшін қолданылады. Опцион үшін төленетін баға премиум деп аталады.",
        keyFormulas: [
          {
            formula: "Call Profit = Max(Stock Price − Strike Price, 0) − Premium",
            formulaRu: "Прибыль колл-опциона = Max(Цена акции − Цена исполнения, 0) − Премия",
            formulaKk: "Колл-опцион пайдасы = Max(Акция бағасы − Орындау бағасы, 0) − Сыйақы",
            description: "Profit from a call option at expiration",
            descriptionRu: "Прибыль колл-опциона на момент истечения",
            descriptionKk: "Колл опционның мерзімі аяқталғандағы пайдасы"
          },
          {
            formula: "Put Profit = Max(Strike Price − Stock Price, 0) − Premium",
            formulaRu: "Прибыль пут-опциона = Max(Цена исполнения − Цена акции, 0) − Премия",
            formulaKk: "Пут-опцион пайдасы = Max(Орындау бағасы − Акция бағасы, 0) − Сыйақы",
            description: "Profit from a put option at expiration",
            descriptionRu: "Прибыль пут-опциона на момент истечения",
            descriptionKk: "Пут опционның мерзімі аяқталғандағы пайдасы"
          }
        ],
        solvedExamples: [
          {
            question: "You buy a call option with a strike price of $50 for a premium of $3. At expiration, the stock is at $60. What is your profit?",
            questionRu: "Вы покупаете колл-опцион со страйком $50 за премию $3. При истечении акция стоит $60. Какова прибыль?",
            questionKk: "Сіз $50 страйк бағасымен колл опцион сатып аласыз, премиум $3. Мерзім аяқталғанда акция $60. Пайдаңыз қанша?",
            steps: [
              { en: "Intrinsic value = Max($60 − $50, 0) = $10. The option is 'in the money' by $10.", ru: "Внутренняя стоимость = Max($60 − $50, 0) = $10. Опцион 'в деньгах' на $10.", kk: "Ішкі құны = Max($60 − $50, 0) = $10. Опцион $10-ға 'ақшада'." },
              { en: "Profit = $10 − $3 premium = $7 per share. Return on investment = $7 / $3 = 233%.", ru: "Прибыль = $10 − $3 премия = $7 на акцию. Доходность = $7 / $3 = 233%.", kk: "Пайда = $10 − $3 премиум = акцияға $7. Инвестиция кірістілігі = $7 / $3 = 233%." }
            ],
            answer: "Profit is $7 per share (233% return). If the stock had stayed below $50, you'd lose only the $3 premium.",
            answerRu: "Прибыль составляет $7 на акцию (доходность 233%). Если бы акция осталась ниже $50, вы потеряли бы только премию в $3.",
            answerKk: "Пайда акцияға $7 (233% кірістілік). Акция $50-ден төмен қалса, сіз тек $3 премиумды жоғалтар едіңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the difference between a call option and a put option?",
            questionRu: "В чём разница между колл-опционом и пут-опционом?",
            questionKk: "Колл опцион мен пут опционның айырмашылығы неде?",
            answer: "A call option gives the right to buy at the strike price. A put option gives the right to sell at the strike price. Both require paying a premium upfront.",
            answerRu: "Колл-опцион даёт право купить по цене страйка. Пут-опцион даёт право продать по цене страйка. Оба требуют уплаты премии заранее.",
            answerKk: "Колл опцион страйк бағасымен сатып алу құқығын береді. Пут опцион страйк бағасымен сату құқығын береді. Екеуі де алдын ала премиум төлеуді талап етеді.",
            hint: "Call = right to buy (you 'call' the stock to you). Put = right to sell (you 'put' it away).",
            hintRu: "Колл = право купить. Пут = право продать.",
            hintKk: "Колл = сатып алу құқығы. Пут = сату құқығы.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You buy a put option with strike price $100 for a $5 premium. The stock drops to $85. What is your profit per share?",
            questionRu: "Пут-опцион со страйком $100, премия $5. Акция падает до $85. Какова прибыль на акцию?",
            questionKk: "$100 страйк бағасымен пут опцион сатып аласыз, премиум $5. Акция $85-ке түседі. Акцияға пайдаңыз қанша?",
            answer: "Put profit = Max($100 − $85, 0) − $5 = $15 − $5 = $10 per share.",
            answerRu: "Прибыль пут-опциона = Max($100 − $85, 0) − $5 = $15 − $5 = $10 на акцию.",
            answerKk: "Пут опцион пайдасы = Max($100 − $85, 0) − $5 = $15 − $5 = акцияға $10.",
            hint: "For puts, profit comes when the stock price is below the strike price.",
            hintRu: "Для пут-опциона прибыль возникает, когда цена акции ниже страйка.",
            hintKk: "Пут опциондар үшін пайда акция бағасы страйк бағасынан төмен болғанда пайда болады.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You think a stock at $100 will move big but aren't sure which direction. You buy both a call and a put at strike $100, each costing $6 (total $12). This is called a 'straddle.' At what prices do you break even? What's your profit if the stock goes to $125?",
            questionRu: "Акция стоит $100, вы ожидаете большое движение. Покупаете колл и пут со страйком $100 по $6 каждый ($12 всего). Это 'стрэддл'. При каких ценах безубыточность? Прибыль при $125?",
            questionKk: "Акция $100, сіз үлкен қозғалыс күтесіз. $100 страйкпен колл және пут сатып аласыз, әрқайсысы $6 ($12 барлығы). Бұл 'стрэддл'. Қай бағаларда залалсыз боласыз? Акция $125 болса пайдаңыз қанша?",
            answer: "Break even when stock moves $12 from strike in either direction: $88 or $112. At $125: Call profit = ($125−$100) − $6 = $19. Put expires worthless (−$6). Net = $19 − $6 = $13 profit per share.",
            answerRu: "Безубыточность при движении акции на $12 от страйка в любую сторону: $88 или $112. При $125: прибыль колла = ($125−$100) − $6 = $19. Пут истекает без стоимости (−$6). Итого = $19 − $6 = $13 прибыли на акцию.",
            answerKk: "Акция страйктен кез келген бағытта $12-ге қозғалғанда залалсыздық: $88 немесе $112. $125 болғанда: колл пайдасы = ($125−$100) − $6 = $19. Пут құнсыз аяқталады (−$6). Таза = $19 − $6 = акцияға $13 пайда.",
            xp: 20
          }
        ]
      },
      {
        title: "Behavioral Finance",
        titleRu: "Поведенческие финансы",
        titleKk: "Мінез-құлықтық қаржы",
        content: "Behavioral finance studies how psychological biases lead people to make irrational financial decisions. Common biases include loss aversion (feeling losses twice as strongly as gains), anchoring (relying too heavily on the first piece of information), and herd mentality (following the crowd). Understanding these biases helps investors make more rational decisions and avoid costly mistakes.",
        contentRu: "Поведенческие финансы изучают, как психологические предубеждения приводят к иррациональным финансовым решениям. Основные предубеждения: неприятие потерь (потери ощущаются вдвое сильнее выигрышей), якорение (чрезмерная зависимость от первой информации) и стадное мышление (следование за толпой). Понимание этих предубеждений помогает инвестировать рациональнее.",
        contentKk: "Мінез-құлықтық қаржы психологиялық бейімділіктердің адамдарды қалай иррационалды қаржылық шешімдер қабылдауға алып келетінін зерттейді. Жиі кездесетін бейімділіктер: залалдан қашу (залалды пайдадан екі есе күшті сезіну), якорлеу (бірінші ақпаратқа шамадан тыс сену) және үйір менталитеті (көпшілікке ілесу). Осы бейімділіктерді түсіну инвесторларға ұтымды шешімдер қабылдауға көмектеседі.",
        keyFormulas: [
          {
            formula: "Perceived Loss Impact ≈ 2 × Perceived Gain Impact",
            formulaRu: "Воспринимаемое влияние потери ≈ 2 × Воспринимаемое влияние выигрыша",
            formulaKk: "Жоғалтудың қабылданатын әсері ≈ 2 × Ұтыстың қабылданатын әсері",
            description: "Loss aversion: people feel losses about twice as intensely as equivalent gains",
            descriptionRu: "Неприятие потерь: люди ощущают потери примерно вдвое сильнее равных выигрышей",
            descriptionKk: "Залалдан қашу: адамдар залалды тең пайдадан шамамен екі есе күшті сезінеді"
          }
        ],
        solvedExamples: [
          {
            question: "An investor bought a stock at $100. It drops to $70. A rational analysis shows the company is worth $60. The investor holds, hoping to 'break even.' Identify the bias and explain the rational decision.",
            questionRu: "Инвестор купил акцию за $100. Она упала до $70. Анализ показывает, что компания стоит $60. Инвестор держит, надеясь 'выйти в ноль'. Определите предубеждение и рациональное решение.",
            questionKk: "Инвестор акцияны $100-ден сатып алды. Ол $70-ке түсті. Талдау компанияның $60 тұратынын көрсетеді. Инвестор 'залалсыз шығуды' күтіп ұстайды. Бейімділікті анықтаңыз және ұтымды шешімді түсіндіріңіз.",
            steps: [
              { en: "This is anchoring bias (fixated on $100 purchase price) combined with loss aversion (unwilling to realize the loss).", ru: "Это якорение (привязка к цене покупки $100) в сочетании с неприятием потерь (нежелание фиксировать убыток).", kk: "Бұл якорлеу бейімділігі ($100 сатып алу бағасына бекіну) залалдан қашумен (залалды мойындағысы келмеу) біріккен." },
              { en: "The rational decision: sell at $70 to avoid further loss to $60. The purchase price is a 'sunk cost' — only the current value and future outlook matter.", ru: "Рациональное решение: продать по $70, чтобы избежать дальнейшего падения до $60. Цена покупки — 'невозвратные затраты', важны только текущая стоимость и прогноз.", kk: "Ұтымды шешім: $60-қа дейін одан әрі залалды болдырмау үшін $70-тен сату. Сатып алу бағасы 'қайтарылмайтын шығын' — тек ағымдағы құн мен болашақ болжам маңызды." }
            ],
            answer: "The investor shows anchoring bias and loss aversion. Rationally, they should sell at $70 since the stock is headed to $60, saving $10/share regardless of what they originally paid.",
            answerRu: "Инвестор демонстрирует якорение и неприятие потерь. Рационально ему следует продать по $70, поскольку акция движется к $60, что сэкономит $10 на акцию независимо от изначальной цены покупки.",
            answerKk: "Инвестор якорлеу бейімділігі мен залалдан қашуды көрсетеді. Ұтымды түрде ол акция $60-қа бет алғандықтан $70-тен сатуы керек, бұл бастапқы сатып алу бағасына қарамастан акцияға $10 үнемдейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is loss aversion and how does it affect investors?",
            questionRu: "Что такое неприятие потерь и как оно влияет на инвесторов?",
            questionKk: "Залалдан қашу дегеніміз не және ол инвесторларға қалай әсер етеді?",
            answer: "Loss aversion means people feel the pain of losses about twice as strongly as the pleasure of equivalent gains. It causes investors to hold losing stocks too long (hoping to recover) and sell winning stocks too quickly (locking in gains).",
            answerRu: "Неприятие потерь означает, что люди ощущают боль от потерь примерно вдвое сильнее, чем радость от равного выигрыша. Это заставляет инвесторов слишком долго держать убыточные акции (в надежде на восстановление) и слишком быстро продавать прибыльные (фиксируя выигрыш).",
            answerKk: "Залалдан қашу дегеніміз — адамдар залалдың ауырсынуын тең пайданың қуанышынан шамамен екі есе күшті сезінеді. Бұл инвесторларды залалды акцияларды тым ұзақ ұстауға (қалпына келуін үміт етіп) және пайдалы акцияларды тым тез сатуға (пайданы бекітіп) мәжбүрлейді.",
            hint: "Losing $100 feels worse than gaining $100 feels good.",
            hintRu: "Потеря $100 ощущается хуже, чем выигрыш $100 — приятно.",
            hintKk: "$100 жоғалту $100 табудан гөрі жаман сезінеді.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "In 2021, many people bought a meme stock because 'everyone on social media was buying it.' The stock went from $20 to $400 and back to $40. What bias drove the buying? What should a rational investor have considered?",
            questionRu: "В 2021 году многие купили мем-акцию, потому что 'все в соцсетях покупали'. Акция выросла с $20 до $400 и упала до $40. Какое предубеждение? Что должен был учесть рациональный инвестор?",
            questionKk: "2021 жылы көптеген адамдар 'әлеуметтік желідегі барлығы сатып алып жатқандықтан' мем акциясын сатып алды. Акция $20-дан $400-ге көтеріліп, $40-қа түсті. Қандай бейімділік сатып алуды тудырды? Ұтымды инвестор нені ескеруі керек еді?",
            answer: "Herd mentality (following the crowd) and FOMO (fear of missing out). A rational investor should have analyzed the company's actual fundamentals — revenue, earnings, growth prospects — rather than following social media hype. At $400, the stock was wildly disconnected from intrinsic value.",
            answerRu: "Стадное мышление (следование за толпой) и FOMO (страх упустить выгоду). Рациональный инвестор должен был проанализировать реальные фундаментальные показатели компании — выручку, прибыль, перспективы роста — а не следовать хайпу в соцсетях. При $400 акция была совершенно оторвана от внутренней стоимости.",
            answerKk: "Үйір менталитеті (көпшілікке ілесу) және FOMO (мүмкіндікті жіберіп алудан қорқу). Ұтымды инвестор әлеуметтік желідегі хайпқа ілеспей, компанияның нақты негізгі көрсеткіштерін — табысын, пайдасын, өсу перспективаларын — талдауы керек еді. $400-де акция ішкі құннан мүлдем алшақтап кеткен еді.",
            hint: "When everyone is buying because others are buying, that's a specific bias.",
            hintRu: "Когда все покупают, потому что другие покупают — это определённое предубеждение.",
            hintKk: "Барлығы басқалар сатып алып жатқандықтан сатып алғанда — бұл нақты бейімділік.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "An investor has two stocks: Stock A is up 40% ($14,000 gain), Stock B is down 30% ($9,000 loss). They need $10,000 cash. Most investors sell Stock A. Explain why this is irrational and what a rational investor should consider instead.",
            questionRu: "У инвестора две акции: А выросла на 40% (+$14 000), Б упала на 30% (−$9 000). Нужны $10 000. Большинство продают А. Объясните, почему это нерационально и что должен учесть рациональный инвестор.",
            questionKk: "Инвестордың екі акциясы бар: А 40% өсті (+$14 000), Б 30% түсті (−$9 000). $10 000 қажет. Көпшілік А-ны сатады. Бұл неге ұтымсыз екенін және ұтымды инвестор нені ескеруі керек екенін түсіндіріңіз.",
            answer: "Selling the winner (A) is the 'disposition effect' — a form of loss aversion. A rational investor should consider: (1) Which stock has better future prospects? (2) Tax implications — selling B at a loss provides a tax deduction, while selling A triggers capital gains tax. (3) The decision should be forward-looking, not based on past gains/losses. Often, selling the loser is financially smarter.",
            answerRu: "Продажа прибыльной акции (А) — это 'эффект диспозиции', форма неприятия потерь. Рациональному инвестору стоит учесть: (1) У какой акции лучше перспективы? (2) Налоговые последствия — продажа Б с убытком даёт налоговый вычет, а продажа А облагается налогом на прирост капитала. (3) Решение должно смотреть в будущее, а не опираться на прошлые прибыли/убытки. Часто продавать убыточную акцию финансово разумнее.",
            answerKk: "Пайдалы акцияны (А) сату — 'диспозиция эффектісі', залалдан қашудың бір түрі. Ұтымды инвестор мыналарды ескеруі керек: (1) Қай акцияның болашақ перспективасы жақсы? (2) Салықтық салдары — Б-ны залалмен сату салық шегерімін береді, ал А-ны сату капитал өсімі салығын тудырады. (3) Шешім өткен пайда/залалға емес, болашаққа бағытталуы керек. Көбіне залалды акцияны сату қаржылық тұрғыдан ақылдырақ.",
            xp: 20
          }
        ]
      },
      {
        title: "Tax-Advantaged Investing",
        titleRu: "Инвестирование с налоговыми льготами",
        titleKk: "Салық жеңілдіктері бар инвестициялау",
        content: "Tax-advantaged accounts let your investments grow with reduced tax impact. Traditional accounts (like 401k, IRA) offer tax deductions now but tax withdrawals later. Roth accounts tax contributions now but allow tax-free withdrawals in retirement. Understanding these structures can save tens of thousands of dollars over an investing lifetime through the power of tax-deferred compounding.",
        contentRu: "Налоговые льготные счета позволяют инвестициям расти с уменьшенным налоговым воздействием. Традиционные счета (401k, IRA) дают налоговый вычет сейчас, но облагают снятие. Счета Roth облагают взносы сейчас, но позволяют безналоговое снятие на пенсии. Понимание этих структур экономит десятки тысяч долларов за инвестиционную жизнь.",
        contentKk: "Салық жеңілдіктері бар шоттар инвестицияларыңыздың салық әсерін азайтып өсуіне мүмкіндік береді. Дәстүрлі шоттар (401k, IRA) қазір салық шегерімін ұсынады, бірақ кейінірек ақша алғанда салық алынады. Roth шоттар қазір салық алады, бірақ зейнеткерлікте салықсыз ақша алуға мүмкіндік береді. Осы құрылымдарды түсіну инвестициялық өмір бойы ондаған мың доллар үнемдейді.",
        keyFormulas: [
          {
            formula: "Tax-Deferred Growth: FV = PV × (1 + r)^n (taxed only at withdrawal)",
            formulaRu: "Рост с отсрочкой налога: FV = PV × (1 + r)^n (налог только при снятии)",
            formulaKk: "Салығы кейінге қалдырылған өсім: FV = PV × (1 + r)^n (салық тек алу кезінде)",
            description: "Money grows without annual tax drag in tax-advantaged accounts",
            descriptionRu: "Деньги растут без ежегодного налогового бремени на льготных счетах",
            descriptionKk: "Ақша салық жеңілдіктері бар шоттарда жылдық салық ауыртпалығынсыз өседі"
          }
        ],
        solvedExamples: [
          {
            question: "Investor A puts $6,000/year in a taxable account (25% tax on gains annually). Investor B puts $6,000/year in a Roth IRA (no tax on growth). Both earn 8% annually for 30 years. Compare the outcomes.",
            questionRu: "Инвестор А вкладывает $6 000/год на обычный счёт (25% налог на прибыль ежегодно). Инвестор Б — $6 000/год в Roth IRA (без налога на рост). Оба зарабатывают 8% за 30 лет. Сравните результаты.",
            questionKk: "А инвестор жылына $6 000-ды кәдімгі шотқа салады (пайдаға жылдық 25% салық). Б инвестор $6 000-ды Roth IRA-ға салады (өсімге салық жоқ). Екеуі де 30 жыл бойы жылдық 8% табады. Нәтижелерін салыстырыңыз.",
            steps: [
              { en: "Investor B (Roth): $6,000/year × 8% for 30 years = approximately $680,000. All withdrawals are tax-free.", ru: "Инвестор Б (Roth): $6 000/год × 8% за 30 лет ≈ $680 000. Все снятия безналоговые.", kk: "Б инвестор (Roth): жылына $6 000 × 8% 30 жыл = шамамен $680 000. Барлық алулар салықсыз." },
              { en: "Investor A (taxable): effective annual return = 8% × (1 − 0.25) = 6%. $6,000/year × 6% for 30 years ≈ $475,000. The tax drag costs over $200,000.", ru: "Инвестор А (облагаемый): эффективная доходность = 8% × (1 − 0,25) = 6%. $6 000/год × 6% за 30 лет ≈ $475 000. Налоги стоили более $200 000.", kk: "А инвестор (салықты): тиімді кірістілік = 8% × (1 − 0,25) = 6%. жылына $6 000 × 6% 30 жыл ≈ $475 000. Салық ауыртпалығы $200 000-нан астам тұрды." }
            ],
            answer: "Roth IRA: ~$680,000 (tax-free). Taxable: ~$475,000. The tax-advantaged account earned ~$205,000 more by avoiding annual tax drag.",
            answerRu: "Roth IRA: ~$680 000 (без налога). Обычный счёт: ~$475 000. Льготный счёт заработал на ~$205 000 больше благодаря отсутствию ежегодного налога.",
            answerKk: "Roth IRA: ~$680 000 (салықсыз). Салықты шот: ~$475 000. Салық жеңілдігі бар шот жылдық салық ауыртпалығынсыз ~$205 000-ға көп тапты."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What is the key difference between a Traditional IRA and a Roth IRA?",
            questionRu: "В чём ключевое различие между традиционным IRA и Roth IRA?",
            questionKk: "Дәстүрлі IRA мен Roth IRA арасындағы негізгі айырмашылық неде?",
            answer: "Traditional IRA: tax deduction now, pay taxes on withdrawals later. Roth IRA: no tax deduction now, but withdrawals in retirement are completely tax-free.",
            answerRu: "Traditional IRA: налоговый вычет сейчас, налог на снятие позже. Roth IRA: нет вычета сейчас, но снятия на пенсии полностью безналоговые.",
            answerKk: "Traditional IRA: қазір салық шегерімі, кейін алуда салық төлейсіз. Roth IRA: қазір шегерім жоқ, бірақ зейнеткерлікте алу толығымен салықсыз.",
            hint: "One gives a tax break now, the other gives a tax break later.",
            hintRu: "Один даёт налоговую льготу сейчас, другой — потом.",
            hintKk: "Бірі қазір салық жеңілдігін береді, екіншісі кейін.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You're 25, in a 22% tax bracket, and expect to be in the 32% bracket at retirement. Should you choose Traditional or Roth contributions? Why?",
            questionRu: "Вам 25 лет, налоговая ставка 22%, на пенсии ожидаете 32%. Что выбрать — Traditional или Roth? Почему?",
            questionKk: "Сіз 25 жастасыз, салық мөлшерлемеңіз 22%, зейнеткерлікте 32% күтесіз. Traditional немесе Roth таңдауыңыз керек пе? Неге?",
            answer: "Choose Roth. You pay 22% tax now on contributions. If you chose Traditional, you'd save 22% now but pay 32% on withdrawals later — losing 10% more. Roth locks in today's lower rate.",
            answerRu: "Выберите Roth. Вы платите 22% налога сейчас на взносы. Если бы выбрали Traditional, сэкономили бы 22% сейчас, но платили бы 32% при снятии позже — на 10% больше потерь. Roth фиксирует сегодняшнюю более низкую ставку.",
            answerKk: "Roth таңдаңыз. Жарналарға қазір 22% салық төлейсіз. Traditional таңдасаңыз, қазір 22% үнемдер едіңіз, бірақ кейін алуда 32% төлер едіңіз — 10%-ға көп жоғалту. Roth бүгінгі төмен мөлшерлемені бекітеді.",
            hint: "Compare the tax rate when you put money in vs when you take it out.",
            hintRu: "Сравните налоговую ставку при вложении и при снятии.",
            hintKk: "Ақша салғандағы және алғандағы салық мөлшерлемесін салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "You have $19,500 to invest annually. Option 1: Max out a Traditional 401k ($19,500 pre-tax). Option 2: Max out a Roth 401k ($19,500 after-tax — meaning you need to earn $25,000 gross at 22% tax to contribute $19,500). Both grow at 7% for 35 years. Current tax rate 22%, retirement rate 32%. Which option yields more after taxes?",
            questionRu: "У вас $19 500/год. Вариант 1: Traditional 401k ($19 500 до налогов). Вариант 2: Roth 401k ($19 500 после налогов — нужно заработать $25 000 при 22%). Рост 7%, 35 лет. Ставки: 22% сейчас, 32% на пенсии. Какой вариант выгоднее?",
            questionKk: "Сізде жылына $19 500 бар. 1-нұсқа: Traditional 401k ($19 500 салыққа дейін). 2-нұсқа: Roth 401k ($19 500 салықтан кейін — 22% салықпен $25 000 табу керек). 7% өсім, 35 жыл. Мөлшерлемелер: қазір 22%, зейнеткерлікте 32%. Қай нұсқа тиімдірек?",
            answer: "Traditional: $19,500/yr at 7% for 35 years = ~$2.77M pre-tax. After 32% tax = ~$1.88M. Roth: $19,500/yr at 7% for 35 years = ~$2.77M tax-free. But you could only invest $19,500 at-tax, so this is the real amount. Roth wins: $2.77M vs $1.88M. The higher future tax rate makes Roth significantly better ($890K difference).",
            answerRu: "Traditional: $19 500/год под 7% за 35 лет = ~$2,77М до налога. После 32% налога = ~$1,88М. Roth: $19 500/год под 7% за 35 лет = ~$2,77М без налога. Но вложить можно было только $19 500 после налога, это и есть реальная сумма. Roth побеждает: $2,77М против $1,88М. Более высокая будущая ставка налога делает Roth значительно выгоднее (разница $890К).",
            answerKk: "Traditional: жылына $19 500, 7%-бен 35 жыл = ~$2,77М салыққа дейін. 32% салықтан кейін = ~$1,88М. Roth: жылына $19 500, 7%-бен 35 жыл = ~$2,77М салықсыз. Бірақ салықтан кейін тек $19 500 салуға болатын еді, бұл нақты сома. Roth жеңеді: $2,77М қарсы $1,88М. Болашақтағы жоғарырақ салық мөлшерлемесі Roth-ты айтарлықтай жақсы етеді ($890К айырма).",
            xp: 20
          }
        ]
      }
    ]
  },
  "Finance & Investing_12": {
    planetName: "Finance & Investing",
    introduction: {
      en: "Synthesize everything into a comprehensive financial strategy. Learn portfolio management, retirement planning, alternative investments, and how to build lasting wealth through disciplined, long-term financial planning.",
      ru: "Объедините всё в комплексную финансовую стратегию. Изучите управление портфелем, пенсионное планирование, альтернативные инвестиции и создание долгосрочного богатства через дисциплинированное финансовое планирование."
    },
    sections: [
      {
        title: "Portfolio Management",
        titleRu: "Управление портфелем",
        titleKk: "Портфельді басқару",
        content: "Portfolio management is the art and science of selecting and overseeing a group of investments that meet your financial goals. Modern Portfolio Theory shows that diversification can reduce risk without sacrificing returns. A well-managed portfolio balances growth potential against risk tolerance, time horizon, and financial needs through regular rebalancing.",
        contentRu: "Управление портфелем — искусство и наука отбора и контроля группы инвестиций для достижения финансовых целей. Современная портфельная теория показывает, что диверсификация снижает риск без ущерба доходности. Хорошо управляемый портфель балансирует потенциал роста с толерантностью к риску, горизонтом и финансовыми потребностями через регулярную ребалансировку.",
        contentKk: "Портфельді басқару — қаржылық мақсаттарыңызға сәйкес келетін инвестициялар тобын таңдау және бақылау өнері мен ғылымы. Заманауи портфель теориясы диверсификация кірістілікті құрбандыққа шалмай тәуекелді азайта алатынын көрсетеді. Жақсы басқарылатын портфель өсу әлеуетін тәуекелге төзімділікпен, уақыт көкжиегімен және қаржылық қажеттіліктермен тұрақты қайта теңестіру арқылы теңестіреді.",
        keyFormulas: [
          {
            formula: "Portfolio Return = Σ (Weight_i × Return_i)",
            formulaRu: "Доходность портфеля = Σ (Weight_i × Return_i)",
            formulaKk: "Портфель табыстылығы = Σ (Weight_i × Return_i)",
            description: "The weighted average of individual asset returns",
            descriptionRu: "Средневзвешенная доходность отдельных активов",
            descriptionKk: "Жеке актив кірістілігінің өлшенген орташа мәні"
          },
          {
            formula: "Sharpe Ratio = (Portfolio Return − Risk-Free Rate) / Portfolio Std Dev",
            formulaRu: "Коэффициент Шарпа = (Доходность портфеля − Безрисковая ставка) / Стандартное отклонение портфеля",
            formulaKk: "Шарп коэффициенті = (Портфель табыстылығы − Тәуекелсіз ставка) / Портфельдің стандартты ауытқуы",
            description: "Measures risk-adjusted return — higher is better",
            descriptionRu: "Измеряет доходность с учётом риска — чем выше, тем лучше",
            descriptionKk: "Тәуекелге түзетілген кірістілікті өлшейді — жоғары болған сайын жақсы"
          }
        ],
        solvedExamples: [
          {
            question: "A portfolio has 60% stocks (returned 12%) and 40% bonds (returned 4%). The risk-free rate is 2% and the portfolio standard deviation is 10%. Calculate the portfolio return and Sharpe ratio.",
            questionRu: "Портфель: 60% акции (+12%), 40% облигации (+4%). Безрисковая ставка 2%, стандартное отклонение 10%. Рассчитайте доходность и коэффициент Шарпа.",
            questionKk: "Портфель: 60% акциялар (+12%), 40% облигациялар (+4%). Тәуекелсіз мөлшерлеме 2%, стандартты ауытқу 10%. Портфель кірістілігі мен Шарп коэффициентін есептеңіз.",
            steps: [
              { en: "Portfolio Return = (0.60 × 12%) + (0.40 × 4%) = 7.2% + 1.6% = 8.8%.", ru: "Доходность = (0,60 × 12%) + (0,40 × 4%) = 7,2% + 1,6% = 8,8%.", kk: "Портфель кірістілігі = (0,60 × 12%) + (0,40 × 4%) = 7,2% + 1,6% = 8,8%." },
              { en: "Sharpe Ratio = (8.8% − 2%) / 10% = 6.8% / 10% = 0.68. A Sharpe above 0.5 is generally considered acceptable.", ru: "Коэффициент Шарпа = (8,8% − 2%) / 10% = 6,8% / 10% = 0,68. Шарп выше 0,5 считается приемлемым.", kk: "Шарп коэффициенті = (8,8% − 2%) / 10% = 6,8% / 10% = 0,68. 0,5-тен жоғары Шарп қолайлы деп саналады." }
            ],
            answer: "Portfolio return is 8.8% with a Sharpe ratio of 0.68.",
            answerRu: "Доходность портфеля — 8,8%, коэффициент Шарпа — 0,68.",
            answerKk: "Портфель кірістілігі — 8,8%, Шарп коэффициенті — 0,68."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A portfolio is 70% stocks (returned 10%) and 30% bonds (returned 3%). What is the portfolio return?",
            questionRu: "Портфель: 70% акции (+10%), 30% облигации (+3%). Какова доходность?",
            questionKk: "Портфель: 70% акциялар (+10%), 30% облигациялар (+3%). Портфель кірістілігі қанша?",
            answer: "Portfolio Return = (0.70 × 10%) + (0.30 × 3%) = 7% + 0.9% = 7.9%.",
            answerRu: "Доходность портфеля = (0,70 × 10%) + (0,30 × 3%) = 7% + 0,9% = 7,9%.",
            answerKk: "Портфель кірістілігі = (0,70 × 10%) + (0,30 × 3%) = 7% + 0,9% = 7,9%.",
            hint: "Multiply each asset's weight by its return and add them together.",
            hintRu: "Умножьте долю каждого актива на его доходность и сложите.",
            hintKk: "Әр активтің салмағын оның кірістілігіне көбейтіп, қосыңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Portfolio A: 8% return, 12% std dev. Portfolio B: 10% return, 20% std dev. Risk-free rate is 3%. Which portfolio has the better risk-adjusted return?",
            questionRu: "Портфель А: 8% доходность, 12% отклонение. Портфель Б: 10%, 20%. Безрисковая ставка 3%. Какой портфель лучше по соотношению доходность/риск?",
            questionKk: "А портфелі: 8% кірістілік, 12% ауытқу. Б портфелі: 10%, 20%. Тәуекелсіз мөлшерлеме 3%. Қай портфельдің тәуекелге түзетілген кірістілігі жақсы?",
            answer: "Sharpe A = (8%−3%)/12% = 0.42. Sharpe B = (10%−3%)/20% = 0.35. Portfolio A has the better risk-adjusted return despite lower absolute return.",
            answerRu: "Шарп А = (8%−3%)/12% = 0,42. Шарп Б = (10%−3%)/20% = 0,35. У портфеля А доходность с учётом риска лучше, несмотря на меньшую абсолютную доходность.",
            answerKk: "Шарп А = (8%−3%)/12% = 0,42. Шарп Б = (10%−3%)/20% = 0,35. А портфелінің тәуекелге түзетілген кірістілігі, абсолютті кірістілігі төмен болса да, жақсырақ.",
            hint: "Calculate the Sharpe ratio for each portfolio.",
            hintRu: "Рассчитайте коэффициент Шарпа для каждого портфеля.",
            hintKk: "Әр портфель үшін Шарп коэффициентін есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Your portfolio: 50% US stocks, 20% international stocks, 20% bonds, 10% real estate. US stocks dropped from 50% to 58% of your portfolio due to strong gains. Describe the rebalancing trades needed and explain why rebalancing improves long-term returns.",
            questionRu: "Портфель: 50% акции США, 20% международные, 20% облигации, 10% недвижимость. Акции США выросли с 50% до 58% из-за сильного роста. Опишите сделки ребалансировки и объясните, почему она улучшает доходность.",
            questionKk: "Портфеліңіз: 50% АҚШ акциялары, 20% халықаралық акциялар, 20% облигациялар, 10% жылжымайтын мүлік. АҚШ акциялары күшті өсімнен 50%-дан 58%-ға дейін өсті. Қайта теңестіру мәмілелерін сипаттаңыз және оның неге ұзақ мерзімді кірістілікті жақсартатынын түсіндіріңіз.",
            answer: "Sell enough US stocks to bring them back to 50%, and buy international stocks, bonds, and real estate to restore their targets. If portfolio = $100K, sell $8K of US stocks, buy ~$2.7K each of the other three. Rebalancing forces 'sell high, buy low' discipline — trimming winners and adding to lagging assets that may be due for recovery.",
            answerRu: "Продайте достаточно акций США, чтобы вернуть их к 50%, и купите международные акции, облигации и недвижимость до целевых долей. При портфеле $100К продайте $8К акций США, купите по ~$2,7К каждого из остальных трёх классов. Ребалансировка навязывает дисциплину 'продавай дорого, покупай дёшево' — подрезая победителей и добавляя в отстающие активы, которые могут быть готовы к восстановлению.",
            answerKk: "АҚШ акцияларын 50%-ға қайтару үшін жеткілікті сатыңыз, ал халықаралық акцияларды, облигацияларды және жылжымайтын мүлікті мақсатты деңгейге дейін сатып алыңыз. Портфель $100К болса, $8К АҚШ акцияларын сатып, қалған үш класстың әрқайсысынан ~$2,7К сатып алыңыз. Қайта теңестіру 'қымбат сат, арзан ал' тәртібін мәжбүрлейді — жеңімпаздарды қысқартып, қалпына келуі мүмкін артта қалған активтерге қосады.",
            xp: 20
          }
        ]
      },
      {
        title: "Asset Allocation",
        titleRu: "Распределение активов",
        titleKk: "Активтерді бөлу",
        content: "Asset allocation is deciding what percentage of your portfolio goes into different asset classes: stocks, bonds, real estate, cash, and alternatives. Research shows that asset allocation determines about 90% of a portfolio's long-term performance variability. The right mix depends on your age, goals, risk tolerance, and time horizon — younger investors can take more risk, while those near retirement need more stability.",
        contentRu: "Распределение активов — решение о том, какой процент портфеля направить в разные классы: акции, облигации, недвижимость, наличные. Исследования показывают, что распределение определяет ~90% вариативности долгосрочной доходности. Правильный микс зависит от возраста, целей, толерантности к риску и горизонта — молодые могут рисковать больше, а пенсионеры нуждаются в стабильности.",
        contentKk: "Активтерді бөлу — портфеліңіздің қанша пайызы әр түрлі актив кластарына — акциялар, облигациялар, жылжымайтын мүлік, қолма-қол ақша және баламалы активтерге — бағытталатынын шешу. Зерттеулер активтерді бөлу портфельдің ұзақ мерзімді өнімділік вариациясының ~90% анықтайтынын көрсетеді. Дұрыс қоспа сіздің жасыңызға, мақсаттарыңызға, тәуекелге төзімділігіңізге байланысты.",
        keyFormulas: [
          {
            formula: "Stock Allocation Rule of Thumb = 110 − Your Age",
            formulaRu: "Практическое правило доли акций = 110 − Ваш возраст",
            formulaKk: "Акция үлесінің тәжірибелік ережесі = 110 − Сіздің жасыңыз",
            description: "A starting guideline for the percentage of stocks in your portfolio",
            descriptionRu: "Начальный ориентир для доли акций в портфеле",
            descriptionKk: "Портфеліңіздегі акциялар пайызы үшін бастапқы нұсқаулық"
          }
        ],
        solvedExamples: [
          {
            question: "A 25-year-old and a 60-year-old both have $100,000 to invest. Using the '110 minus age' rule, determine each person's stock/bond allocation and explain the reasoning.",
            questionRu: "25-летний и 60-летний имеют по $100 000. Используя правило '110 минус возраст', определите распределение акции/облигации и объясните логику.",
            questionKk: "25 жастағы және 60 жастағы адамның әрқайсысында $100 000 бар. '110 минус жас' ережесін қолданып, акция/облигация бөлуін анықтаңыз және себебін түсіндіріңіз.",
            steps: [
              { en: "25-year-old: 110 − 25 = 85% stocks ($85,000), 15% bonds ($15,000). With 35+ years to retirement, they can ride out market volatility.", ru: "25-летний: 110 − 25 = 85% акций ($85 000), 15% облигаций ($15 000). С 35+ годами до пенсии можно пережить волатильность.", kk: "25 жастағы: 110 − 25 = 85% акциялар ($85 000), 15% облигациялар ($15 000). Зейнеткерлікке дейін 35+ жыл бар, нарық құбылмалылығын өтей алады." },
              { en: "60-year-old: 110 − 60 = 50% stocks ($50,000), 50% bonds ($50,000). Nearing retirement, they need more stability to protect accumulated wealth.", ru: "60-летний: 110 − 60 = 50% акций ($50 000), 50% облигаций ($50 000). Близко к пенсии, нужна стабильность для защиты накоплений.", kk: "60 жастағы: 110 − 60 = 50% акциялар ($50 000), 50% облигациялар ($50 000). Зейнеткерлікке жақын, жинақталған байлықты қорғау үшін тұрақтылық қажет." }
            ],
            answer: "25-year-old: 85/15 stocks/bonds. 60-year-old: 50/50. Younger investors have more time to recover from downturns, so they can hold more stocks.",
            answerRu: "25-летний: 85/15 акции/облигации. 60-летний: 50/50. У молодых инвесторов больше времени на восстановление после спадов, поэтому они могут держать больше акций.",
            answerKk: "25 жастағы: 85/15 акциялар/облигациялар. 60 жастағы: 50/50. Жас инвесторлардың құлдыраудан қалпына келуге уақыты көп, сондықтан олар көбірек акция ұстай алады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Using the '110 minus age' rule, what should a 30-year-old's stock allocation be?",
            questionRu: "По правилу '110 минус возраст', какова доля акций для 30-летнего?",
            questionKk: "'110 минус жас' ережесі бойынша 30 жастағы адамның акция бөлісі қанша болуы керек?",
            answer: "110 − 30 = 80% in stocks, 20% in bonds.",
            answerRu: "110 − 30 = 80% в акциях, 20% в облигациях.",
            answerKk: "110 − 30 = 80% акцияларда, 20% облигацияларда.",
            hint: "Subtract your age from 110.",
            hintRu: "Вычтите возраст из 110.",
            hintKk: "Жасыңызды 110-нан шегеріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Why might research show that asset allocation matters more than individual stock picking for long-term portfolio performance?",
            questionRu: "Почему исследования показывают, что распределение активов важнее выбора отдельных акций для долгосрочной доходности?",
            questionKk: "Зерттеулер неге активтерді бөлу ұзақ мерзімді портфель өнімділігі үшін жеке акция таңдаудан маңыздырақ екенін көрсетеді?",
            answer: "Different asset classes (stocks, bonds, real estate) have different risk/return profiles and don't move together perfectly. The mix determines your exposure to broad market movements, which drive most returns. Individual stock picks matter less because gains and losses within an asset class tend to average out over time.",
            answerRu: "Разные классы активов (акции, облигации, недвижимость) имеют разные профили риска/доходности и не движутся полностью синхронно. Микс определяет вашу подверженность широким рыночным движениям, которые формируют большую часть доходности. Выбор отдельных акций значит меньше, потому что прибыли и убытки внутри класса активов со временем усредняются.",
            answerKk: "Әр түрлі актив кластары (акциялар, облигациялар, жылжымайтын мүлік) әр түрлі тәуекел/кірістілік профиліне ие және толық синхронды қозғалмайды. Қоспа сіздің кең нарықтық қозғалыстарға ұшырауыңызды анықтайды, олар кірістіліктің көбін қалыптастырады. Жеке акция таңдау аз маңызды, өйткені актив класы ішіндегі пайда мен залал уақыт өте орташаланады.",
            hint: "Think about what drives most of the ups and downs in a portfolio.",
            hintRu: "Подумайте, что определяет большинство колебаний портфеля.",
            hintKk: "Портфельдегі көтерілулер мен құлдыраулардың көпшілігін не анықтайтынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A 40-year-old has $500,000 split as: 80% stocks, 10% bonds, 10% cash. They're moderately risk-tolerant and plan to retire at 65. Is this allocation appropriate? Propose an improved allocation and explain your reasoning.",
            questionRu: "40-летний: $500 000 — 80% акции, 10% облигации, 10% наличные. Умеренная толерантность к риску, пенсия в 65. Подходит ли это? Предложите улучшение.",
            questionKk: "40 жастағы адамның $500 000-ы: 80% акциялар, 10% облигациялар, 10% қолма-қол. Тәуекелге орташа төзімді, 65 жаста зейнетке шығуды жоспарлайды. Бұл бөлу дұрыс па? Жақсартылған бөлу ұсыныңыз.",
            answer: "Rule of thumb: 110 − 40 = 70% stocks. Current 80% is slightly aggressive for moderate risk tolerance. 10% cash is too high — cash loses to inflation. Suggested: 70% stocks, 25% bonds, 5% cash. This reduces stock risk by 10%, nearly triples bond allocation for stability, and keeps minimal cash for emergencies. Could also add 5-10% real estate/alternatives from the stock allocation.",
            answerRu: "Правило: 110 − 40 = 70% акций. Текущие 80% немного агрессивны для умеренной толерантности к риску. 10% наличных — слишком много, наличные проигрывают инфляции. Предложение: 70% акции, 25% облигации, 5% наличные. Это снижает риск акций на 10%, почти утраивает долю облигаций для стабильности и оставляет минимум наличных на экстренные случаи. Можно также добавить 5-10% недвижимости/альтернатив за счёт доли акций.",
            answerKk: "Ереже: 110 − 40 = 70% акциялар. Ағымдағы 80% орташа тәуекел төзімділігі үшін сәл агрессивті. 10% қолма-қол тым көп — қолма-қол ақша инфляциядан ұтылады. Ұсыныс: 70% акциялар, 25% облигациялар, 5% қолма-қол. Бұл акция тәуекелін 10%-ға азайтады, тұрақтылық үшін облигация үлесін дерлік үш еселейді және төтенше жағдайлар үшін минималды қолма-қол қалдырады. Акция үлесінен 5-10% жылжымайтын мүлік/баламалы активтер қосуға да болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Retirement Planning",
        titleRu: "Пенсионное планирование",
        titleKk: "Зейнеткерлік жоспарлау",
        content: "Retirement planning involves estimating how much money you need to live comfortably without working and creating a strategy to accumulate that amount. The '4% rule' suggests you can withdraw 4% of your retirement savings annually with low risk of running out over 30 years. Starting early is critical because compound interest needs time to work its magic — delaying by even 10 years can halve your final nest egg.",
        contentRu: "Пенсионное планирование — оценка суммы для комфортной жизни без работы и создание стратегии накопления. Правило 4% предполагает, что можно ежегодно снимать 4% пенсионных накоплений с низким риском исчерпания за 30 лет. Ранний старт критичен — сложные проценты нуждаются во времени, задержка на 10 лет может вдвое уменьшить итоговый капитал.",
        contentKk: "Зейнеткерлік жоспарлау — жұмыс істемей жайлы өмір сүру үшін қанша ақша қажет екенін бағалау және осы соманы жинақтау стратегиясын құру. 4% ережесі зейнеткерлік жинақтың 4%-ын жыл сайын 30 жыл бойы таусылу тәуекелі аз шегеруге болатынын ұсынады. Ерте бастау маңызды — күрделі пайыз уақытты қажет етеді, тіпті 10 жылға кешіктіру соңғы жинақтың жартысына азайтуы мүмкін.",
        keyFormulas: [
          {
            formula: "Required Nest Egg = Annual Expenses in Retirement / 0.04",
            formulaRu: "Необходимый пенсионный капитал = Годовые расходы на пенсии / 0.04",
            formulaKk: "Қажетті зейнетақы капиталы = Зейнеткерліктегі жылдық шығыстар / 0.04",
            description: "The 4% rule: how much you need saved to retire safely",
            descriptionRu: "Правило 4%: сколько нужно накопить для безопасной пенсии",
            descriptionKk: "4% ережесі: қауіпсіз зейнеткерлік үшін қанша жинау қажет"
          }
        ],
        solvedExamples: [
          {
            question: "You want $60,000/year in retirement. Using the 4% rule, how much do you need? If you're 25 and retirement is at 65, how much must you save monthly at 7% annual return?",
            questionRu: "Вы хотите $60 000/год на пенсии. По правилу 4%, сколько нужно? Вам 25, пенсия в 65. Сколько откладывать ежемесячно при 7%?",
            questionKk: "Сіз зейнеткерлікте жылына $60 000 қалайсыз. 4% ережесі бойынша қанша қажет? Сіз 25 жастасыз, зейнеткерлік 65 жаста. 7% жылдық кірістілікте ай сайын қанша жинау керек?",
            steps: [
              { en: "Required Nest Egg = $60,000 / 0.04 = $1,500,000.", ru: "Необходимая сумма = $60 000 / 0,04 = $1 500 000.", kk: "Қажетті жинақ = $60 000 / 0,04 = $1 500 000." },
              { en: "40 years at 7%: monthly savings ≈ $1,500,000 / (future value factor of ~2,600) ≈ $560/month. Starting at 35 instead would require ~$1,200/month — more than double.", ru: "40 лет при 7%: ≈ $560/мес. Начав в 35, нужно ≈ $1 200/мес — более чем вдвое.", kk: "40 жыл 7%-бен: ай сайынғы жинақ ≈ $560/ай. 35 жастан бастаса ~$1 200/ай қажет — екі еседен көп." }
            ],
            answer: "You need $1.5 million. Starting at 25, you'd save about $560/month. Waiting until 35 would require about $1,200/month.",
            answerRu: "Вам нужно $1,5 млн. Начав в 25, вы будете откладывать около $560/мес. Если дождаться 35 лет, понадобится около $1200/мес.",
            answerKk: "Сізге $1,5 млн керек. 25 жастан бастасаңыз, айына шамамен $560 жинайсыз. 35 жасқа дейін күтсеңіз, айына шамамен $1200 қажет болады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Using the 4% rule, how much do you need saved to withdraw $40,000 per year in retirement?",
            questionRu: "По правилу 4%, сколько нужно накопить для снятия $40 000/год?",
            questionKk: "4% ережесі бойынша зейнеткерлікте жылына $40 000 алу үшін қанша жинау қажет?",
            answer: "$40,000 / 0.04 = $1,000,000.",
            answerRu: "$40 000 / 0,04 = $1 000 000.",
            answerKk: "$40 000 / 0,04 = $1 000 000.",
            hint: "Divide your annual need by 0.04.",
            hintRu: "Разделите годовую потребность на 0,04.",
            hintKk: "Жылдық қажеттілігіңізді 0,04-ке бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Person A starts saving $500/month at age 22. Person B saves $1,000/month starting at age 35. Both earn 7% annually until age 65. Who has more at retirement?",
            questionRu: "А откладывает $500/мес с 22 лет. Б — $1 000/мес с 35 лет. Оба при 7% до 65 лет. У кого больше?",
            questionKk: "А 22 жастан $500/ай жинайды. Б 35 жастан $1 000/ай жинайды. Екеуі де 65 жасқа дейін 7% табады. Кімде көп болады?",
            answer: "A: $500/month for 43 years at 7% ≈ $1.6M. B: $1,000/month for 30 years at 7% ≈ $1.2M. Person A has ~$400K more despite investing half as much monthly, because they had 13 extra years of compounding.",
            answerRu: "А: $500/мес 43 года под 7% ≈ $1,6М. Б: $1000/мес 30 лет под 7% ≈ $1,2М. У А на ~$400К больше, хотя он вкладывал вдвое меньше в месяц, благодаря 13 дополнительным годам сложного процента.",
            answerKk: "А: $500/ай 43 жыл 7%-бен ≈ $1,6М. Б: $1000/ай 30 жыл 7%-бен ≈ $1,2М. А-да ~$400К көп, айына екі есе аз салса да, себебі оның күрделі пайызда 13 жыл артық уақыты болды.",
            hint: "Time in the market beats the amount invested — compound interest rewards early starters.",
            hintRu: "Время на рынке важнее суммы — сложные проценты вознаграждают ранний старт.",
            hintKk: "Нарықтағы уақыт инвестиция сомасынан маңыздырақ — күрделі пайыз ерте бастағандарды марапаттайды.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A couple wants $80,000/year in retirement (in today's dollars). They are 30, plan to retire at 65, and expect 2.5% annual inflation. What will they actually need per year at 65 in future dollars? How large a nest egg is required using the 4% rule on that future amount?",
            questionRu: "Пара хочет $80 000/год (в текущих долларах). Им 30, пенсия в 65, инфляция 2,5%. Сколько им нужно в будущих долларах в 65 лет? Какой капитал нужен по правилу 4%?",
            questionKk: "Жұбайлар зейнеткерлікте жылына $80 000 қалайды (бүгінгі доллармен). Олар 30 жаста, 65 жаста зейнетке шығады, инфляция 2,5%. 65 жаста болашақ доллармен қанша қажет? 4% ережесімен қанша жинақ қажет?",
            answer: "Future amount = $80,000 × (1.025)^35 = $80,000 × 2.373 = ~$189,840/year. Nest egg = $189,840 / 0.04 = ~$4,746,000. Inflation more than doubles the required savings — this is why planning must account for rising costs.",
            answerRu: "Будущая сумма = $80 000 × (1,025)^35 = $80 000 × 2,373 = ~$189 840/год. Капитал = $189 840 / 0,04 = ~$4 746 000. Инфляция более чем удваивает требуемые накопления — поэтому планирование должно учитывать рост цен.",
            answerKk: "Болашақ сома = $80 000 × (1,025)^35 = $80 000 × 2,373 = ~$189 840/жыл. Жинақ = $189 840 / 0,04 = ~$4 746 000. Инфляция қажетті жинақты екі еседен көп арттырады — сондықтан жоспарлау бағаның өсуін ескеруі керек.",
            xp: 20
          }
        ]
      },
      {
        title: "FIRE Movement",
        titleRu: "Движение FIRE",
        titleKk: "FIRE қозғалысы",
        content: "FIRE (Financial Independence, Retire Early) is a lifestyle movement focused on extreme savings rates (50-70% of income) and frugal living to achieve financial independence decades before traditional retirement age. The '25x rule' says you need 25 times your annual expenses saved to retire. Variations include Fat FIRE (luxurious retirement), Lean FIRE (minimalist), and Barista FIRE (part-time work to cover basics while investments grow).",
        contentRu: "FIRE (Финансовая Независимость, Ранний Выход на Пенсию) — движение за экстремальные нормы сбережений (50-70% дохода) и скромную жизнь для достижения независимости задолго до обычного пенсионного возраста. Правило 25x: нужно 25 годовых расходов. Варианты: Fat FIRE (роскошь), Lean FIRE (минимализм) и Barista FIRE (частичная занятость).",
        contentKk: "FIRE (Қаржылық Тәуелсіздік, Ерте Зейнеткерлік) — дәстүрлі зейнеткерлік жасына дейін ондаған жыл бұрын қаржылық тәуелсіздікке жету үшін экстремалды жинақ мөлшерлемелеріне (табыстың 50-70%) және үнемді өмір сүруге бағытталған өмір салты қозғалысы. '25x ережесі' зейнетке шығу үшін жылдық шығыстарыңыздың 25 есесін жинау қажет екенін айтады. Нұсқалары: Fat FIRE (сәнді), Lean FIRE (минималист) және Barista FIRE (инвестициялар өскенде жартылай жұмыс).",
        keyFormulas: [
          {
            formula: "FIRE Number = Annual Expenses × 25",
            formulaRu: "Число FIRE = Годовые расходы × 25",
            formulaKk: "FIRE саны = Жылдық шығыстар × 25",
            description: "The total savings needed to retire early (based on the 4% withdrawal rate)",
            descriptionRu: "Сумма для раннего выхода на пенсию (на основе 4% ставки снятия)",
            descriptionKk: "Ерте зейнетке шығу үшін қажетті жалпы жинақ (4% алу мөлшерлемесі негізінде)"
          }
        ],
        solvedExamples: [
          {
            question: "A person earns $80,000/year and saves 60%. What is their FIRE number? If they invest savings at 8% return, how many years until they reach FIRE?",
            questionRu: "Человек зарабатывает $80 000/год, сберегает 60%. Каков FIRE-номер? При 8% доходности, за сколько лет достигнет FIRE?",
            questionKk: "Адам жылына $80 000 табады, 60% жинайды. FIRE нөмірі қанша? 8% кірістілікпен FIRE-ге қанша жылда жетеді?",
            steps: [
              { en: "Annual expenses = $80,000 × 40% = $32,000. FIRE Number = $32,000 × 25 = $800,000.", ru: "Годовые расходы = $80 000 × 40% = $32 000. FIRE-число = $32 000 × 25 = $800 000.", kk: "Жылдық шығыстар = $80 000 × 40% = $32 000. FIRE нөмірі = $32 000 × 25 = $800 000." },
              { en: "Annual savings = $48,000. At 8% returns, reaching $800K takes approximately 12 years (using compound growth of $48K annual contributions).", ru: "Годовые сбережения = $48 000. При 8% доходности, $800 000 достигаются примерно за 12 лет.", kk: "Жылдық жинақ = $48 000. 8% кірістілікпен $800 000-ға шамамен 12 жылда жетеді." }
            ],
            answer: "FIRE number is $800,000. At a 60% savings rate and 8% returns, they can reach FIRE in approximately 12 years.",
            answerRu: "FIRE-число — $800 000. При норме сбережений 60% и доходности 8% они достигнут FIRE примерно за 12 лет.",
            answerKk: "FIRE нөмірі — $800 000. 60% жинақ мөлшерлемесі және 8% кірістілікпен олар шамамен 12 жылда FIRE-ге жетеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If your annual expenses are $50,000, what is your FIRE number?",
            questionRu: "Если годовые расходы $50 000, каков FIRE-номер?",
            questionKk: "Жылдық шығыстарыңыз $50 000 болса, FIRE нөміріңіз қанша?",
            answer: "$50,000 × 25 = $1,250,000.",
            answerRu: "$50 000 × 25 = $1 250 000.",
            answerKk: "$50 000 × 25 = $1 250 000.",
            hint: "Multiply your annual expenses by 25.",
            hintRu: "Умножьте годовые расходы на 25.",
            hintKk: "Жылдық шығыстарыңызды 25-ке көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "Person A spends $60,000/year. Person B spends $30,000/year. Both earn $100,000. Calculate each FIRE number and savings rate. Who reaches FIRE first?",
            questionRu: "А тратит $60 000/год, Б — $30 000. Оба зарабатывают $100 000. Рассчитайте FIRE-число и норму сбережений. Кто достигнет FIRE быстрее?",
            questionKk: "А жылына $60 000 жұмсайды, Б — $30 000. Екеуі де $100 000 табады. Әрқайсысының FIRE нөмірін және жинақ мөлшерлемесін есептеңіз. Кім FIRE-ге бірінші жетеді?",
            answer: "A: FIRE = $60K × 25 = $1.5M. Saves $40K/yr (40%). B: FIRE = $30K × 25 = $750K. Saves $70K/yr (70%). Person B reaches FIRE much faster — lower target AND higher savings. B needs ~8 years, A needs ~20+ years.",
            answerRu: "А: FIRE = $60К × 25 = $1,5М. Сберегает $40К/год (40%). Б: FIRE = $30К × 25 = $750К. Сберегает $70К/год (70%). Б достигает FIRE намного быстрее — меньшая цель И большие сбережения. Б нужно ~8 лет, А — ~20+ лет.",
            answerKk: "А: FIRE = $60К × 25 = $1,5М. Жылына $40К жинайды (40%). Б: FIRE = $30К × 25 = $750К. Жылына $70К жинайды (70%). Б FIRE-ге әлдеқайда тезірек жетеді — аз мақсат ЖӘНЕ көп жинақ. Б-ға ~8 жыл, А-ға ~20+ жыл керек.",
            hint: "Lower expenses = lower FIRE number AND higher savings rate (double benefit).",
            hintRu: "Меньшие расходы = меньший FIRE-номер И большая норма сбережений.",
            hintKk: "Аз шығыстар = аз FIRE нөмірі ЖӘНЕ жоғарырақ жинақ мөлшерлемесі (қос пайда).",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Compare three FIRE strategies: Lean FIRE ($25K/year expenses), Regular FIRE ($50K/year), and Fat FIRE ($100K/year). Each person earns $120K. Calculate the FIRE number, savings rate, and approximate years to FIRE at 8% returns for each.",
            questionRu: "Сравните три стратегии FIRE: Lean ($25К расходов), Regular ($50К), Fat ($100К). Каждый зарабатывает $120К. Рассчитайте FIRE-число, норму сбережений и примерные годы до FIRE при 8%.",
            questionKk: "Үш FIRE стратегиясын салыстырыңыз: Lean ($25К шығыстар), Regular ($50К), Fat ($100К). Әрқайсысы $120К табады. FIRE нөмірін, жинақ мөлшерлемесін және 8% кірістілікте FIRE-ге дейінгі шамамен жылдарды есептеңіз.",
            answer: "Lean: $625K target, saves $95K/yr (79%), ~6 years. Regular: $1.25M target, saves $70K/yr (58%), ~12 years. Fat: $2.5M target, saves $20K/yr (17%), ~40+ years. Lean reaches FIRE 7× faster than Fat. The savings rate is the most powerful variable in the FIRE equation.",
            answerRu: "Lean: цель $625К, сберегает $95К/год (79%), ~6 лет. Regular: цель $1,25М, сберегает $70К/год (58%), ~12 лет. Fat: цель $2,5М, сберегает $20К/год (17%), ~40+ лет. Lean достигает FIRE в 7 раз быстрее, чем Fat. Норма сбережений — самая мощная переменная в уравнении FIRE.",
            answerKk: "Lean: мақсат $625К, жылына $95К жинайды (79%), ~6 жыл. Regular: мақсат $1,25М, жылына $70К жинайды (58%), ~12 жыл. Fat: мақсат $2,5М, жылына $20К жинайды (17%), ~40+ жыл. Lean FIRE-ге Fat-тан 7 есе тезірек жетеді. Жинақ мөлшерлемесі FIRE теңдеуіндегі ең күшті айнымалы.",
            xp: 20
          }
        ]
      },
      {
        title: "Venture Capital",
        titleRu: "Венчурный капитал",
        titleKk: "Венчурлық капитал",
        content: "Venture capital (VC) is funding provided to early-stage startups with high growth potential in exchange for equity. VCs invest in many companies knowing most will fail, hoping that one or two huge winners will more than compensate for all losses. The typical VC model follows a power law: about 90% of returns come from the top 10% of investments. Funding typically progresses through seed, Series A, B, C rounds, with each round valuing the company higher.",
        contentRu: "Венчурный капитал — финансирование стартапов на ранней стадии с высоким потенциалом роста в обмен на долю. VC инвестируют во многие компании, зная, что большинство провалится, надеясь на несколько крупных победителей. Типичная модель следует степенному закону: ~90% доходов приносят 10% инвестиций. Финансирование проходит этапы: посевной, серии A, B, C.",
        contentKk: "Венчурлық капитал (VC) — жоғары өсу әлеуеті бар бастапқы кезеңдегі стартаптарға үлескерлік капитал үлесіне қарсы берілетін қаржыландыру. VC көптеген компанияларға инвестиция салады, көпшілігінің сәтсіз болатынын біледі, бірнеше үлкен жеңімпаздың барлық залалды өтеуін күтеді. Типтік VC моделі дәрежелік заңға сәйкес: кірістің ~90%-ы инвестициялардың 10%-ынан келеді. Қаржыландыру seed, Series A, B, C раундтары арқылы жүреді.",
        keyFormulas: [
          {
            formula: "Post-Money Valuation = Pre-Money Valuation + Investment Amount",
            formulaRu: "Оценка после инвестиций = Оценка до инвестиций + Сумма инвестиций",
            formulaKk: "Инвестициядан кейінгі баға = Инвестицияға дейінгі баға + Инвестиция сомасы",
            description: "The company's value after receiving new funding",
            descriptionRu: "Стоимость компании после получения нового финансирования",
            descriptionKk: "Жаңа қаржыландыру алғаннан кейінгі компания құны"
          }
        ],
        solvedExamples: [
          {
            question: "A VC invests $2M in a startup at a $8M pre-money valuation. What percentage does the VC own? If the company later sells for $200M, what is the VC's return?",
            questionRu: "VC инвестирует $2М в стартап при pre-money оценке $8М. Какой процент у VC? Если компания продаётся за $200М, какова доходность?",
            questionKk: "VC стартапқа $8М pre-money бағалаумен $2М инвестициялайды. VC қанша пайызға ие? Компания $200М-ға сатылса, VC кірістілігі қанша?",
            steps: [
              { en: "Post-money = $8M + $2M = $10M. VC owns $2M / $10M = 20%.", ru: "Post-money = $8М + $2М = $10М. VC владеет $2М / $10М = 20%.", kk: "Post-money = $8М + $2М = $10М. VC $2М / $10М = 20%-ға ие." },
              { en: "At $200M exit: VC's 20% = $40M. Return = $40M / $2M = 20× (2,000% return).", ru: "При выходе $200М: 20% VC = $40М. Доходность = $40М / $2М = 20× (2000%).", kk: "200М-дан шыққанда: VC-нің 20% = $40М. Кіріс = $40М / $2М = 20× (2000% кіріс)." }
            ],
            answer: "The VC owns 20% and earns $40M on a $2M investment — a 20× return.",
            answerRu: "VC владеет 20% и зарабатывает $40М на инвестиции $2М — доходность 20×.",
            answerKk: "VC 20%-ға ие және $2М инвестициядан $40М табады — 20× кіріс."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "A startup has a pre-money valuation of $5M. An investor puts in $1M. What is the post-money valuation and the investor's ownership percentage?",
            questionRu: "Pre-money оценка стартапа $5М. Инвестор вкладывает $1М. Какова post-money оценка и доля инвестора?",
            questionKk: "Стартаптың pre-money бағалауы $5М. Инвестор $1М салады. Post-money бағалау және инвестордың иелік пайызы қанша?",
            answer: "Post-money = $5M + $1M = $6M. Ownership = $1M / $6M = 16.7%.",
            answerRu: "Post-money = $5М + $1М = $6М. Доля = $1М / $6М = 16,7%.",
            answerKk: "Post-money = $5М + $1М = $6М. Иелік = $1М / $6М = 16,7%.",
            hint: "Post-money = pre-money + investment. Ownership = investment / post-money.",
            hintRu: "Post-money = pre-money + инвестиция. Доля = инвестиция / post-money.",
            hintKk: "Post-money = pre-money + инвестиция. Иелік = инвестиция / post-money.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "A VC fund invests $1M each in 10 startups. 7 fail completely, 2 return 3× ($3M each), and 1 returns 30× ($30M). What is the fund's total return?",
            questionRu: "VC-фонд инвестирует по $1М в 10 стартапов. 7 провалились, 2 вернули 3× ($3М), 1 — 30× ($30М). Какова общая доходность?",
            questionKk: "VC қоры 10 стартапқа $1М-нан инвестициялайды. 7 сәтсіз, 2 3× ($3М) қайтарды, 1 30× ($30М) қайтарды. Қордың жалпы кірістілігі қанша?",
            answer: "Total invested: $10M. Returns: 7 × $0 + 2 × $3M + 1 × $30M = $36M. Fund return = $36M / $10M = 3.6× (260% gain). The single 30× winner drove 83% of all returns — this is the power law in action.",
            answerRu: "Всего инвестировано: $10М. Доходы: 7 × $0 + 2 × $3М + 1 × $30М = $36М. Доходность фонда = $36М / $10М = 3,6× (прирост 260%). Единственный победитель с 30× обеспечил 83% всех доходов — это степенной закон в действии.",
            answerKk: "Жалпы инвестиция: $10М. Кірістер: 7 × $0 + 2 × $3М + 1 × $30М = $36М. Қор кірістілігі = $36М / $10М = 3,6× (260% өсім). Жалғыз 30× жеңімпаз барлық кірістің 83%-ын алып келді — бұл дәрежелік заңның іс-әрекеті.",
            hint: "Add up all returns and divide by total invested.",
            hintRu: "Сложите все доходы и разделите на общую сумму инвестиций.",
            hintKk: "Барлық кірістерді қосып, жалпы инвестиция сомасына бөліңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A startup raises: Seed ($500K at $2M pre-money), Series A ($3M at $12M pre-money), Series B ($10M at $50M pre-money). The seed investor didn't invest in later rounds. What percentage does the seed investor own after Series B? What is their stake worth at the Series B valuation?",
            questionRu: "Стартап привлекает: Seed ($500К при $2М), Series A ($3М при $12М), Series B ($10М при $50М). Seed-инвестор не участвовал в раундах. Какова его доля после Series B? Сколько стоит его доля при оценке Series B?",
            questionKk: "Стартап тартады: Seed ($500К, $2М pre-money), Series A ($3М, $12М pre-money), Series B ($10М, $50М pre-money). Seed инвестор кейінгі раундтарға қатыспады. Series B-ден кейін seed инвестордың иелік пайызы қанша? Series B бағалауында олардың үлесінің құны қанша?",
            answer: "Seed: post-money = $2.5M, owns 20%. Series A: post-money = $15M, dilution = $2.5M/$15M × 20% → seed now owns 20% × ($2.5M/$15M × 15M/15M) = 20% × (12/15) = 16%. Wait — simpler: after A, seed's 20% diluted by new shares. Seed keeps 20% × (pre-A shares/post-A shares). Seed fraction after A = 20% × ($12M/$15M) = 16%. After B: 16% × ($50M/$60M) = 13.3%. Value = 13.3% × $60M = $8M on a $500K investment = 16× return.",
            answerRu: "Seed: post-money = $2,5М, доля 20%. Series A: post-money = $15М, разводнение → доля seed после A = 20% × ($12М/$15М) = 16%. После B: 16% × ($50М/$60М) = 13,3%. Стоимость = 13,3% × $60М = $8М на инвестицию $500К = доходность 16×.",
            answerKk: "Seed: post-money = $2,5М, үлесі 20%. Series A: post-money = $15М, сұйылу → A-дан кейін seed үлесі = 20% × ($12М/$15М) = 16%. B-дан кейін: 16% × ($50М/$60М) = 13,3%. Құны = 13,3% × $60М = $500К инвестицияға $8М = 16× кіріс.",
            xp: 20
          }
        ]
      },
      {
        title: "Forex Markets",
        titleRu: "Валютный рынок",
        titleKk: "Валюта нарығы",
        content: "The foreign exchange (Forex) market is the world's largest financial market, trading over $7 trillion daily. Currencies trade in pairs (EUR/USD, GBP/JPY) where you buy one currency while selling another. Exchange rates are influenced by interest rates, inflation, political stability, and trade balances. Understanding forex is essential for international investing, travel, and global business.",
        contentRu: "Валютный рынок (Forex) — крупнейший финансовый рынок мира, с оборотом более $7 трлн в день. Валюты торгуются парами (EUR/USD, GBP/JPY): покупая одну, продаёте другую. Курсы зависят от процентных ставок, инфляции, политической стабильности и торгового баланса. Понимание форекс необходимо для международного инвестирования, путешествий и бизнеса.",
        contentKk: "Валюта нарығы (Forex) — күніне $7 трлн-нан астам саудаланатын әлемдегі ең үлкен қаржы нарығы. Валюталар жұптармен саудаланады (EUR/USD, GBP/JPY) — бір валютаны сатып алғанда, екіншісін сатасыз. Бағамдарға пайыздық мөлшерлемелер, инфляция, саяси тұрақтылық және сауда балансы әсер етеді. Forex-ті түсіну халықаралық инвестициялау, саяхат және жаһандық бизнес үшін маңызды.",
        keyFormulas: [
          {
            formula: "Cross Rate: A/C = (A/B) × (B/C)",
            formulaRu: "Кросс-курс: A/C = (A/B) × (B/C)",
            formulaKk: "Кросс-курс: A/C = (A/B) × (B/C)",
            description: "Calculate exchange rate between two currencies using a common third currency",
            descriptionRu: "Расчёт курса между двумя валютами через общую третью",
            descriptionKk: "Екі валюта арасындағы бағамды ортақ үшінші валюта арқылы есептеу"
          }
        ],
        solvedExamples: [
          {
            question: "EUR/USD = 1.10 (1 euro buys 1.10 dollars). USD/JPY = 150 (1 dollar buys 150 yen). What is the EUR/JPY cross rate? If you have €5,000, how many yen can you get?",
            questionRu: "EUR/USD = 1,10. USD/JPY = 150. Каков кросс-курс EUR/JPY? Если у вас €5 000, сколько иен можно получить?",
            questionKk: "EUR/USD = 1,10. USD/JPY = 150. EUR/JPY кросс бағамы қанша? Сізде €5 000 болса, қанша иен ала аласыз?",
            steps: [
              { en: "EUR/JPY = EUR/USD × USD/JPY = 1.10 × 150 = 165. One euro buys 165 yen.", ru: "EUR/JPY = EUR/USD × USD/JPY = 1,10 × 150 = 165. Один евро покупает 165 иен.", kk: "EUR/JPY = EUR/USD × USD/JPY = 1,10 × 150 = 165. Бір еуро 165 иен сатып алады." },
              { en: "€5,000 × 165 = ¥825,000.", ru: "€5 000 × 165 = ¥825 000.", kk: "€5 000 × 165 = ¥825 000." }
            ],
            answer: "EUR/JPY = 165. With €5,000 you get ¥825,000.",
            answerRu: "EUR/JPY = 165. За €5000 вы получите ¥825 000.",
            answerKk: "EUR/JPY = 165. €5000-ге ¥825 000 аласыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "If USD/KZT = 450 (1 dollar buys 450 tenge), how many tenge do you get for $200?",
            questionRu: "Если USD/KZT = 450, сколько тенге вы получите за $200?",
            questionKk: "USD/KZT = 450 болса, $200 үшін қанша теңге аласыз?",
            answer: "$200 × 450 = 90,000 tenge.",
            answerRu: "$200 × 450 = 90 000 тенге.",
            answerKk: "$200 × 450 = 90 000 теңге.",
            hint: "Multiply the dollar amount by the exchange rate.",
            hintRu: "Умножьте сумму в долларах на курс.",
            hintKk: "Доллар сомасын бағамға көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You exchange $1,000 to euros at EUR/USD = 1.08 (you pay $1.08 per euro). You spend €500 in Europe. You convert the remaining euros back when EUR/USD = 1.15. How much do you end up with in dollars total?",
            questionRu: "Вы меняете $1 000 на евро по EUR/USD = 1,08. Тратите €500. Обратный обмен при EUR/USD = 1,15. Сколько долларов у вас останется?",
            questionKk: "Сіз $1 000-ды EUR/USD = 1,08-мен еуроға айырбастайсыз. €500 жұмсайсыз. Қалған еуроны EUR/USD = 1,15 кезінде қайта айырбастайсыз. Жалпы қанша долларыңыз болады?",
            answer: "Euros received = $1,000 / 1.08 = €925.93. After spending €500: €425.93 remaining. Convert back: €425.93 × 1.15 = $489.82. Total value = €500 spent + $489.82 = $489.82 in cash (plus the €500 worth of goods/experiences).",
            answerRu: "Получено евро = $1000 / 1,08 = €925,93. После трат €500 остаётся €425,93. Обратный обмен: €425,93 × 1,15 = $489,82. Итог: €500 потрачено + $489,82 наличными (плюс товары/впечатления на €500).",
            answerKk: "Алынған еуро = $1000 / 1,08 = €925,93. €500 жұмсағаннан кейін €425,93 қалады. Кері айырбастау: €425,93 × 1,15 = $489,82. Жиынтығы: €500 жұмсалды + қолма-қол $489,82 (қосымша €500 тұратын тауар/әсер).",
            hint: "Convert to euros, subtract spending, convert remainder back at the new rate.",
            hintRu: "Конвертируйте в евро, вычтите расходы, обменяйте остаток обратно по новому курсу.",
            hintKk: "Еуроға айырбастаңыз, шығыстарды шегеріңіз, қалдықты жаңа бағаммен қайта айырбастаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Country A has 5% interest rates, Country B has 1%. According to interest rate parity, if the spot rate is A/B = 2.00, what should the 1-year forward rate be? What happens to the currency of the high-interest country over time and why?",
            questionRu: "Страна А: ставка 5%, Страна Б: 1%. По паритету ставок, при спот-курсе A/B = 2,00, каков форвардный курс через год? Что происходит с валютой страны с высокой ставкой?",
            questionKk: "А елінің пайыздық мөлшерлемесі 5%, Б елінікі 1%. Пайыздық мөлшерлеме паритеті бойынша, спот бағамы A/B = 2,00 болса, 1 жылдық форвардтық бағам қанша болуы керек? Жоғары пайыздық мөлшерлемелі ел валютасымен не болады?",
            answer: "Forward rate = Spot × (1 + rate_B) / (1 + rate_A) = 2.00 × 1.01/1.05 = 2.00 × 0.9619 = 1.9238. Currency A is expected to depreciate by ~3.8%. High interest rates often signal higher inflation, which erodes purchasing power. The forward market prices in this expected depreciation, preventing risk-free arbitrage between the two interest rates.",
            answerRu: "Форвардный курс = Спот × (1 + ставка_Б) / (1 + ставка_А) = 2,00 × 1,01/1,05 = 2,00 × 0,9619 = 1,9238. Ожидается обесценение валюты А примерно на 3,8%. Высокие ставки часто сигнализируют о более высокой инфляции, снижающей покупательную способность. Форвардный рынок закладывает это ожидаемое обесценение, предотвращая безрисковый арбитраж между двумя ставками.",
            answerKk: "Форвард бағамы = Спот × (1 + Б мөлшерлемесі) / (1 + А мөлшерлемесі) = 2,00 × 1,01/1,05 = 2,00 × 0,9619 = 1,9238. А валютасының шамамен 3,8%-ға құнсыздануы күтіледі. Жоғары пайыздық мөлшерлемелер көбіне сатып алу қабілетін төмендететін жоғарырақ инфляцияны білдіреді. Форвард нарығы осы күтілетін құнсыздануды бағаға енгізіп, екі мөлшерлеме арасындағы тәуекелсіз арбитражды болдырмайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Financial Planning",
        titleRu: "Финансовое планирование",
        titleKk: "Қаржылық жоспарлау",
        content: "Financial planning is the comprehensive process of setting financial goals, analyzing your current situation, and creating actionable strategies to achieve those goals. It covers budgeting, emergency funds, insurance, debt management, investing, and tax planning. A solid financial plan acts as a roadmap, helping you make confident decisions about money throughout every stage of life.",
        contentRu: "Финансовое планирование — комплексный процесс постановки финансовых целей, анализа текущей ситуации и создания стратегий для их достижения. Оно охватывает бюджетирование, резервный фонд, страхование, управление долгом, инвестирование и налоговое планирование. Твёрдый план служит дорожной картой для уверенных решений на каждом жизненном этапе.",
        contentKk: "Қаржылық жоспарлау — қаржылық мақсаттарды қою, ағымдағы жағдайыңызды талдау және осы мақсаттарға жету үшін іс-қимыл стратегияларын жасау процесі. Ол бюджеттеу, төтенше жағдай қоры, сақтандыру, қарызды басқару, инвестициялау және салық жоспарлауды қамтиды. Берік қаржылық жоспар өмірдің әр кезеңінде ақша туралы сенімді шешімдер қабылдауға көмектесетін жол картасы ретінде әрекет етеді.",
        keyFormulas: [
          {
            formula: "Emergency Fund = 3–6 Months of Essential Expenses",
            formulaRu: "Резервный фонд = 3–6 месяцев основных расходов",
            formulaKk: "Төтенше жағдай қоры = негізгі шығыстардың 3–6 айы",
            description: "The minimum cash reserve before investing aggressively",
            descriptionRu: "Минимальный денежный резерв до агрессивного инвестирования",
            descriptionKk: "Агрессивті инвестициялау алдындағы ең аз ақша резерві"
          }
        ],
        solvedExamples: [
          {
            question: "A new graduate earns $50,000/year. Monthly expenses: $2,500. Student loans: $30,000 at 5%. No savings. Create a prioritized financial plan.",
            questionRu: "Выпускник зарабатывает $50 000/год. Расходы $2 500/мес. Студенческий долг $30 000 под 5%. Нет сбережений. Составьте приоритетный план.",
            questionKk: "Жаңа түлек жылына $50 000 табады. Айлық шығыстар: $2 500. Студенттік қарыз: $30 000, 5%. Жинақ жоқ. Басымдықты қаржылық жоспар жасаңыз.",
            steps: [
              { en: "Step 1: Emergency fund first. Target = $2,500 × 3 months = $7,500 minimum. Save aggressively until this is funded.", ru: "Шаг 1: Резервный фонд. Цель = $2 500 × 3 = $7 500 минимум. Откладывать интенсивно до заполнения.", kk: "1-қадам: Алдымен төтенше жағдай қоры. Мақсат = $2 500 × 3 ай = $7 500 минимум. Толғанша белсенді жинаңыз." },
              { en: "Step 2: After emergency fund, split extra money: 50% to student loans (above minimum payments to save on interest), 50% to retirement account (capture any employer match first). Monthly take-home ≈ $3,500 after tax − $2,500 expenses = $1,000 available.", ru: "Шаг 2: После фонда — 50% на досрочное погашение долга, 50% на пенсионный счёт. Чистый доход ≈ $3 500 − $2 500 расходов = $1 000 свободных.", kk: "2-қадам: Қордан кейін қосымша ақшаны бөліңіз: 50% студенттік қарызға (пайызды үнемдеу үшін), 50% зейнеткерлік шотқа. Салықтан кейінгі табыс ≈ $3 500 − $2 500 шығыстар = $1 000 қолжетімді." }
            ],
            answer: "Priority order: (1) Build $7,500 emergency fund (~7-8 months), (2) Pay minimum on loans + split remaining $1,000: $500 extra on loans, $500 to retirement. (3) After loans paid off, increase retirement savings to 15-20% of income.",
            answerRu: "Порядок приоритетов: (1) Создать резервный фонд $7500 (~7-8 месяцев), (2) платить минимум по кредитам + распределить оставшиеся $1000: $500 сверх минимума по кредитам, $500 на пенсионный счёт. (3) После погашения кредитов увеличить пенсионные сбережения до 15-20% дохода.",
            answerKk: "Басымдық реті: (1) $7500 төтенше жағдай қорын құру (~7-8 ай), (2) несиелер бойынша минимумды төлеу + қалған $1000-ды бөлу: несиелерге қосымша $500, зейнеткерлікке $500. (3) Несиелер жабылғаннан кейін зейнеткерлік жинақты табыстың 15-20%-ына дейін арттыру."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Why should you build an emergency fund before investing in stocks?",
            questionRu: "Почему нужно создать резервный фонд до инвестирования в акции?",
            questionKk: "Акцияларға инвестициялау алдында неге төтенше жағдай қорын құру керек?",
            answer: "Without an emergency fund, unexpected expenses (job loss, medical bills, car repair) force you to sell investments — potentially at a loss during a market downturn. The emergency fund prevents turning temporary setbacks into permanent financial damage.",
            answerRu: "Без резервного фонда неожиданные расходы (потеря работы, медицинские счета, ремонт машины) вынуждают продавать инвестиции — возможно, с убытком во время падения рынка. Резервный фонд не даёт временным трудностям превратиться в постоянный финансовый ущерб.",
            answerKk: "Төтенше жағдай қорынсыз күтпеген шығыстар (жұмыстан айырылу, медициналық шоттар, көлік жөндеуі) сізді инвестицияларды сатуға мәжбүрлейді — мүмкін нарық құлдырауы кезінде залалмен. Төтенше жағдай қоры уақытша қиындықтардың тұрақты қаржылық зиянға айналуын болдырмайды.",
            hint: "Think about what happens if you need cash urgently during a market crash.",
            hintRu: "Подумайте, что будет, если срочно понадобятся деньги во время обвала рынка.",
            hintKk: "Нарық құлдырау кезінде шұғыл ақша қажет болса не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You have $500/month to allocate. You have: no emergency fund (need $10K), credit card debt ($3,000 at 22% APR), student loans ($20,000 at 5%), and no retirement savings. Prioritize your $500 allocation.",
            questionRu: "У вас $500/мес. Нет резерва (нужно $10К), долг по карте ($3 000 под 22%), студенческий кредит ($20 000 под 5%), нет пенсионных накоплений. Расставьте приоритеты.",
            questionKk: "Сізде $500/ай бар. Төтенше қоры жоқ ($10К қажет), кредиттік карта қарызы ($3 000, 22% APR), студенттік қарыз ($20 000, 5%), зейнеткерлік жинақ жоқ. $500 бөлуді басымдық бойынша жасаңыз.",
            answer: "Phase 1: $300 to credit card (highest interest!), $200 to mini emergency fund ($1,000). Phase 2: After credit card paid (~10 months), $300 to full emergency fund, $200 to retirement. Phase 3: After emergency fund, $300 to retirement, $200 extra on student loans. Always pay credit card first — 22% interest destroys wealth faster than any investment can build it.",
            answerRu: "Этап 1: $300 на кредитную карту (самая высокая ставка!), $200 на мини-резерв ($1000). Этап 2: после погашения карты (~10 месяцев) — $300 на полный резерв, $200 на пенсию. Этап 3: после резерва — $300 на пенсию, $200 сверх минимума по студенческому кредиту. Всегда сначала гасите кредитную карту — 22% ставка разрушает богатство быстрее, чем любая инвестиция может его создать.",
            answerKk: "1-кезең: $300 кредиттік картаға (ең жоғары мөлшерлеме!), $200 шағын төтенше қорға ($1000). 2-кезең: карта жабылғаннан кейін (~10 ай) $300 толық төтенше қорға, $200 зейнеткерлікке. 3-кезең: қордан кейін $300 зейнеткерлікке, $200 студенттік несиеге қосымша. Әрқашан алдымен кредиттік картаны жабыңыз — 22% мөлшерлеме байлықты кез келген инвестициядан жылдамырақ жояды.",
            hint: "Pay off the highest interest rate debt first — it's costing you the most.",
            hintRu: "Сначала погасите долг с наивысшей ставкой — он обходится дороже всего.",
            hintKk: "Алдымен ең жоғары пайыздық мөлшерлемелі қарызды жабыңыз — ол сізге ең қымбатқа түседі.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Create a complete financial milestone plan for someone from age 22 to 65. Include emergency fund, debt payoff, home purchase, children's education fund, and retirement. Assume $60K starting salary with 3% annual raises.",
            questionRu: "Составьте полный план финансовых вех от 22 до 65 лет. Включите резерв, погашение долгов, покупку жилья, фонд образования детей и пенсию. Начальная зарплата $60К с ростом 3%/год.",
            questionKk: "22-ден 65 жасқа дейін толық қаржылық кезең жоспарын жасаңыз. Төтенше қор, қарызды жабу, үй сатып алу, балалардың білім қоры және зейнеткерлікті қосыңыз. Бастапқы жалақы $60К, жыл сайын 3% өсіммен.",
            answer: "Ages 22-25: Build $15K emergency fund, pay off student loans, start 401k (10%+ of salary, capture employer match). Ages 26-30: Save for home down payment (20% of target price), increase retirement to 15%. Ages 30-35: Buy home, start 529 education fund for children ($200-400/month). Ages 35-45: Maximize retirement contributions, pay down mortgage, grow education fund. Ages 45-55: Peak earning years — max out all tax-advantaged accounts, diversify investments. Ages 55-65: Shift to conservative allocation, plan Social Security timing, ensure healthcare coverage. Key: automate savings and increase rates with every raise.",
            answerRu: "22-25 лет: создать резерв $15К, погасить студенческие кредиты, начать 401k (10%+ зарплаты, получить работодательскую добавку). 26-30 лет: копить на первый взнос за жильё (20% цены), увеличить пенсионные до 15%. 30-35 лет: купить жильё, открыть фонд образования 529 для детей ($200-400/мес). 35-45 лет: максимизировать пенсионные взносы, гасить ипотеку, наращивать фонд образования. 45-55 лет: пик заработка — максимально использовать все льготные счета, диверсифицировать инвестиции. 55-65 лет: перейти к консервативному распределению, спланировать сроки соцвыплат, обеспечить медицинское покрытие. Ключ: автоматизировать сбережения и увеличивать нормы с каждым повышением зарплаты.",
            answerKk: "22-25 жас: $15К төтенше қор құру, студенттік несиелерді жабу, 401k бастау (жалақының 10%+, жұмыс беруші қосымшасын алу). 26-30 жас: үй бастапқы жарнасына жинау (бағаның 20%), зейнеткерлікті 15%-ға дейін арттыру. 30-35 жас: үй сатып алу, балаларға 529 білім қорын бастау ($200-400/ай). 35-45 жас: зейнеткерлік жарналарды барынша арттыру, ипотеканы жабу, білім қорын өсіру. 45-55 жас: ең жоғары табыс жылдары — барлық салық жеңілдігі бар шоттарды толтыру, инвестицияларды әртараптандыру. 55-65 жас: консервативті бөлуге көшу, әлеуметтік төлемдер мерзімін жоспарлау, медициналық қамтуды қамтамасыз ету. Негізгісі: жинақты автоматтандыру және әр жалақы өсімімен мөлшерлемені арттыру.",
            xp: 20
          }
        ]
      },
      {
        title: "Estate Planning",
        titleRu: "Планирование наследства",
        titleKk: "Мұра жоспарлау",
        content: "Estate planning ensures your assets are distributed according to your wishes after death and minimizes taxes and legal complications for your heirs. Key documents include a will (directs asset distribution), trust (manages assets for beneficiaries), power of attorney (designates someone to make decisions if you're incapacitated), and beneficiary designations on accounts. Without a plan, the government decides how your assets are divided.",
        contentRu: "Планирование наследства обеспечивает распределение активов по вашему желанию после смерти и минимизирует налоги и юридические сложности для наследников. Ключевые документы: завещание, траст, доверенность и назначение бенефициаров на счетах. Без плана государство решает, как распределить ваши активы.",
        contentKk: "Мұра жоспарлау қайтыс болғаннан кейін активтеріңіздің сіздің тілегіңіз бойынша бөлінуін қамтамасыз етеді және мұрагерлеріңіз үшін салықтар мен заңды қиындықтарды азайтады. Негізгі құжаттар: өсиет (актив бөлуді бағыттайды), траст (бенефициарлар үшін активтерді басқарады), сенімхат (сіз әрекетке қабілетсіз болсаңыз шешім қабылдауға біреуді тағайындайды) және шоттардағы бенефициар тағайындамалары. Жоспарсыз мемлекет активтеріңіздің қалай бөлінетінін шешеді.",
        keyFormulas: [
          {
            formula: "Taxable Estate = Total Assets − Debts − Deductions − Exemptions",
            formulaRu: "Налогооблагаемое наследство = Общие активы − Долги − Вычеты − Освобождения",
            formulaKk: "Салық салынатын мұра = Жалпы активтер − Қарыздар − Шегерімдер − Босатулар",
            description: "The portion of an estate subject to estate tax",
            descriptionRu: "Часть наследства, облагаемая налогом",
            descriptionKk: "Мұра салығына жататын мүліктің бөлігі"
          }
        ],
        solvedExamples: [
          {
            question: "A person dies with $15M in assets, $1M in debts, and $500K in deductible expenses. The estate tax exemption is $12.92M and the rate is 40%. Calculate the estate tax owed.",
            questionRu: "Человек умирает с активами $15М, долгами $1М и вычитаемыми расходами $500К. Освобождение от налога $12,92М, ставка 40%. Рассчитайте налог.",
            questionKk: "Адам $15М активтермен, $1М қарызбен және $500К шегерілетін шығыстармен қайтыс болады. Салық босатылымы $12,92М, мөлшерлеме 40%. Мұра салығын есептеңіз.",
            steps: [
              { en: "Taxable estate = $15M − $1M − $0.5M − $12.92M = $0.58M.", ru: "Облагаемая часть = $15М − $1М − $0,5М − $12,92М = $0,58М.", kk: "Салық салынатын мұра = $15М − $1М − $0,5М − $12,92М = $0,58М." },
              { en: "Estate tax = $580,000 × 40% = $232,000.", ru: "Налог = $580 000 × 40% = $232 000.", kk: "Мұра салығы = $580 000 × 40% = $232 000." }
            ],
            answer: "The estate owes $232,000 in taxes. Without planning, this could have been reduced through trusts, charitable giving, or lifetime gifts.",
            answerRu: "Наследство должно $232 000 налогов. Без планирования эту сумму можно было бы снизить с помощью трастов, благотворительности или прижизненных подарков.",
            answerKk: "Мұра $232 000 салық төлеуге тиіс. Жоспарлаусыз бұл соманы трасттар, қайырымдылық немесе өмір бойы сыйлықтар арқылы азайтуға болар еді."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "What happens to your assets if you die without a will?",
            questionRu: "Что происходит с вашими активами, если вы умираете без завещания?",
            questionKk: "Өсиетсіз қайтыс болсаңыз активтеріңізге не болады?",
            answer: "Your assets are distributed according to your state's intestacy laws, which typically prioritize spouse and children. The government, not you, decides who gets what. This may not match your wishes and can cause family disputes and delays.",
            answerRu: "Ваши активы распределяются согласно законам штата о наследовании без завещания, которые обычно отдают приоритет супругу и детям. Не вы, а государство решает, кому что достанется. Это может не совпадать с вашими желаниями и вызывать семейные споры и задержки.",
            answerKk: "Активтеріңіз әдетте жұбайы мен балаларға басымдық беретін өсиетсіз мұрагерлік туралы заңдарға сәйкес бөлінеді. Кімге не тиетінін сіз емес, мемлекет шешеді. Бұл сіздің қалауыңызбен сәйкес келмеуі және отбасылық дау-жанжал мен кідірістер тудыруы мүмкін.",
            hint: "Without instructions, who decides how your things are divided?",
            hintRu: "Без указаний, кто решает, как делить ваше имущество?",
            hintKk: "Нұсқаусыз мүлкіңіздің қалай бөлінетінін кім шешеді?",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "What is the difference between a will and a trust? When might a trust be better than a will?",
            questionRu: "В чём разница между завещанием и трастом? Когда траст лучше?",
            questionKk: "Өсиет пен трасттың айырмашылығы неде? Траст қашан жақсы болады?",
            answer: "A will goes through probate (public, slow, costly) and takes effect only at death. A trust avoids probate, can be private, and can manage assets during your lifetime if you become incapacitated. Trusts are better for: large estates (tax planning), privacy, minor children (structured distributions), and blended families (complex wishes).",
            answerRu: "Завещание проходит через процедуру утверждения (публичную, медленную, дорогую) и вступает в силу только после смерти. Траст избегает этой процедуры, может быть конфиденциальным и управлять активами при вашей жизни в случае недееспособности. Трасты лучше подходят для: крупных наследств (налоговое планирование), конфиденциальности, несовершеннолетних детей (структурированные выплаты) и смешанных семей (сложные пожелания).",
            answerKk: "Өсиет соттық растау рәсімінен (жария, баяу, қымбат) өтеді және тек қайтыс болғаннан кейін ғана күшіне енеді. Траст бұл рәсімнен аулақ болады, құпия бола алады және сіз әрекетке қабілетсіз болсаңыз тірі кезіңізде активтерді басқара алады. Трасттар мыналар үшін жақсырақ: ірі мұралар (салық жоспарлауы), құпиялылық, кәмелетке толмаған балалар (құрылымдық төлемдер) және аралас отбасылар (күрделі тілектер).",
            hint: "Think about privacy, speed, and control over timing of distributions.",
            hintRu: "Подумайте о конфиденциальности, скорости и контроле над сроками распределения.",
            hintKk: "Құпиялылық, жылдамдық және бөлу мерзімдерін бақылау туралы ойлаңыз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "A wealthy couple has $30M in assets. The estate tax exemption is $12.92M per person ($25.84M combined for married couples). Without planning, how much tax is owed at death? Propose two strategies to reduce or eliminate the estate tax.",
            questionRu: "Состоятельная пара: $30М активов. Освобождение $12,92М/чел ($25,84М для пары). Без планирования, какой налог? Предложите две стратегии снижения.",
            questionKk: "Бай жұбайлар: $30М активтер. Босатылым $12,92М/адам ($25,84М жұпқа). Жоспарлаусыз қанша салық? Салықты азайтудың екі стратегиясын ұсыныңыз.",
            answer: "Without planning: taxable estate = $30M − $25.84M = $4.16M. Tax = $4.16M × 40% = $1.664M. Strategy 1: Irrevocable Life Insurance Trust (ILIT) — buy life insurance inside a trust. The death benefit isn't counted in the estate, providing tax-free liquidity. Strategy 2: Charitable Remainder Trust — donate assets to charity through a trust, receive income during lifetime, reduce estate by donated amount. Combined with annual gift exclusions ($17K/person/year) and spousal portability of exemptions, the couple could potentially eliminate estate tax entirely.",
            answerRu: "Без планирования: облагаемая часть = $30М − $25,84М = $4,16М. Налог = $4,16М × 40% = $1,664М. Стратегия 1: безотзывный страховой траст (ILIT) — купить страхование жизни внутри траста. Выплата не входит в наследство, обеспечивая безналоговую ликвидность. Стратегия 2: благотворительный траст с остатком — передать активы на благотворительность через траст, получать доход при жизни, уменьшить наследство на сумму пожертвования. В сочетании с ежегодными освобождениями от налога на подарки ($17К/чел/год) и переносимостью льгот между супругами пара могла бы полностью избежать налога на наследство.",
            answerKk: "Жоспарлаусыз: салық салынатын мұра = $30М − $25,84М = $4,16М. Салық = $4,16М × 40% = $1,664М. 1-стратегия: қайтарылмайтын өмірді сақтандыру трасты (ILIT) — трасттың ішінде өмірді сақтандыру сатып алу. Өлім жәрдемақысы мұраға есептелмейді, салықсыз өтімділік береді. 2-стратегия: қайырымдылық қалдық трасты — активтерді траст арқылы қайырымдылыққа беру, өмір бойы табыс алу, тартылған сомаға мұраны азайту. Жылдық сыйлық босатылымдарымен ($17К/адам/жыл) және жұбайлар арасындағы босатылым ауыстырылымымен біріктірілгенде, жұп мұра салығынан толығымен құтылуы мүмкін еді.",
            xp: 20
          }
        ]
      },
      {
        title: "Economics & Markets",
        titleRu: "Экономика и рынки",
        titleKk: "Экономика және нарықтар",
        content: "Understanding macroeconomics helps investors anticipate market movements. Key indicators include GDP growth (measures economic output), inflation (rising prices eroding purchasing power), unemployment rate, and interest rates set by central banks. The business cycle moves through expansion, peak, contraction, and trough. Markets tend to be forward-looking, pricing in expectations 6-12 months ahead of actual economic changes.",
        contentRu: "Понимание макроэкономики помогает инвесторам предвидеть движения рынка. Ключевые показатели: рост ВВП, инфляция, уровень безработицы и процентные ставки центральных банков. Деловой цикл проходит через расширение, пик, сокращение и дно. Рынки обычно опережают экономику на 6-12 месяцев, закладывая ожидания в цены.",
        contentKk: "Макроэкономиканы түсіну инвесторларға нарық қозғалыстарын болжауға көмектеседі. Негізгі көрсеткіштер: ЖІӨ өсімі (экономикалық өнімді өлшейді), инфляция (сатып алу қабілетін төмендететін бағалардың өсуі), жұмыссыздық деңгейі және орталық банктер белгілейтін пайыздық мөлшерлемелер. Іскерлік цикл кеңею, шыңы, қысқару және түбі арқылы өтеді. Нарықтар болашаққа бағытталған, нақты экономикалық өзгерістерден 6-12 ай бұрын күтулерді бағаға салады.",
        keyFormulas: [
          {
            formula: "Real Return = Nominal Return − Inflation Rate",
            formulaRu: "Реальная доходность = Номинальная доходность − Уровень инфляции",
            formulaKk: "Нақты табыстылық = Номиналды табыстылық − Инфляция деңгейі",
            description: "The actual purchasing power gain after accounting for inflation",
            descriptionRu: "Реальный прирост покупательной способности с учётом инфляции",
            descriptionKk: "Инфляцияны ескергендегі сатып алу қабілетінің нақты өсімі"
          }
        ],
        solvedExamples: [
          {
            question: "Your investments returned 10% this year. Inflation was 4%. What is your real return? If you had $100,000 at the start of the year, what is the real increase in your purchasing power?",
            questionRu: "Инвестиции принесли 10%, инфляция 4%. Какова реальная доходность? Если было $100 000, каков реальный рост покупательной способности?",
            questionKk: "Инвестицияларыңыз биыл 10% қайтарды. Инфляция 4% болды. Нақты кірістілігіңіз қанша? Жыл басында $100 000 болса, сатып алу қабілетіңіздің нақты өсімі қанша?",
            steps: [
              { en: "Real Return = 10% − 4% = 6%.", ru: "Реальная доходность = 10% − 4% = 6%.", kk: "Нақты кірістілік = 10% − 4% = 6%." },
              { en: "Real purchasing power increase = $100,000 × 6% = $6,000. While your account shows $110,000, only $6,000 represents genuine wealth increase — the other $4,000 just offsets inflation.", ru: "Реальный рост = $100 000 × 6% = $6 000. Хотя на счету $110 000, лишь $6 000 — настоящий рост, остальные $4 000 компенсируют инфляцию.", kk: "Сатып алу қабілетінің нақты өсімі = $100 000 × 6% = $6 000. Шотыңызда $110 000 көрсетсе де, тек $6 000 шынайы байлық өсімін білдіреді — қалған $4 000 жай инфляцияны өтейді." }
            ],
            answer: "Real return is 6%. On $100,000, your genuine wealth increase is $6,000 in today's purchasing power.",
            answerRu: "Реальная доходность — 6%. На $100 000 ваш настоящий прирост богатства составляет $6000 в сегодняшней покупательной способности.",
            answerKk: "Нақты кірістілік — 6%. $100 000-ға сіздің шынайы байлық өсіміңіз бүгінгі сатып алу қабілетімен $6000 құрайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Your savings account pays 3% interest. Inflation is 5%. Are you gaining or losing purchasing power?",
            questionRu: "Вклад приносит 3%, инфляция 5%. Вы приобретаете или теряете покупательную способность?",
            questionKk: "Жинақ шотыңыз 3% пайыз төлейді. Инфляция 5%. Сатып алу қабілетіңіз артып жатыр ма, әлде азайып жатыр ма?",
            answer: "Real return = 3% − 5% = −2%. You are losing 2% purchasing power each year. Your money is growing nominally but buying less.",
            answerRu: "Реальная доходность = 3% − 5% = −2%. Вы теряете 2% покупательной способности каждый год. Деньги растут номинально, но покупают меньше.",
            answerKk: "Нақты кірістілік = 3% − 5% = −2%. Сіз жыл сайын 2% сатып алу қабілетін жоғалтасыз. Ақшаңыз номиналды түрде өседі, бірақ азырақ сатып алады.",
            hint: "Subtract inflation from your interest rate.",
            hintRu: "Вычтите инфляцию из процентной ставки.",
            hintKk: "Пайыздық мөлшерлемеден инфляцияны шегеріңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "The central bank raises interest rates from 2% to 5%. How does this affect: (a) bond prices, (b) stock valuations, and (c) the housing market? Explain the mechanism for each.",
            questionRu: "Центробанк поднимает ставку с 2% до 5%. Как это влияет на: (а) цены облигаций, (б) оценки акций, (в) рынок жилья?",
            questionKk: "Орталық банк пайыздық мөлшерлемені 2%-дан 5%-ға көтереді. Бұл қалай әсер етеді: (а) облигация бағаларына, (б) акциялар бағалауына, (в) тұрғын үй нарығына?",
            answer: "(a) Bond prices fall — existing bonds paying 2% are less attractive than new bonds paying 5%, so their price drops until yields match. (b) Stock valuations fall — higher rates increase the discount rate for future earnings, making them worth less in present value. Also, borrowing costs rise for companies. (c) Housing cools — mortgage rates rise, monthly payments increase, fewer buyers can afford homes, reducing demand and slowing price growth.",
            answerRu: "(а) Цены облигаций падают — старые облигации под 2% менее привлекательны, чем новые под 5%, поэтому их цена падает, пока доходности не сравняются. (б) Оценки акций падают — более высокие ставки увеличивают ставку дисконтирования будущей прибыли, снижая её текущую стоимость. Также растут расходы компаний на заимствования. (в) Рынок жилья охлаждается — ипотечные ставки растут, ежемесячные платежи увеличиваются, меньше покупателей могут позволить себе жильё, снижая спрос и замедляя рост цен.",
            answerKk: "(а) Облигация бағалары түседі — 2% төлейтін ескі облигациялар 5% төлейтін жаңаларға қарағанда тартымдылығы аз, сондықтан кірістіліктер теңелгенше олардың бағасы түседі. (б) Акция бағалаулары түседі — жоғарырақ мөлшерлемелер болашақ пайданың дисконт мөлшерлемесін арттырып, ағымдағы құнын төмендетеді. Сондай-ақ компаниялардың қарыз алу шығындары өседі. (в) Тұрғын үй нарығы салқындайды — ипотека мөлшерлемелері өседі, айлық төлемдер артады, азырақ сатып алушы үй ала алады, бұл сұранысты төмендетіп, баға өсімін баяулатады.",
            hint: "Higher rates make borrowing expensive and future cash flows less valuable today.",
            hintRu: "Более высокие ставки делают заёмы дороже, а будущие потоки — менее ценными.",
            hintKk: "Жоғарырақ мөлшерлемелер қарыз алуды қымбаттатады және болашақ ақша ағындарын бүгін аз құнды етеді.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "In a recession, GDP is falling 2%/year, unemployment is rising, and inflation is 1%. Should the central bank raise or lower interest rates? What happens if instead inflation is 8% during the recession (stagflation)? Why is stagflation so difficult for policymakers?",
            questionRu: "Рецессия: ВВП падает 2%/год, безработица растёт, инфляция 1%. Повышать или понижать ставки? Что если инфляция 8% (стагфляция)? Почему стагфляция сложна для политиков?",
            questionKk: "Рецессияда ЖІӨ жылына 2% түсіп жатыр, жұмыссыздық артып жатыр, инфляция 1%. Орталық банк мөлшерлемені көтеру ме, түсіру ме керек? Егер инфляция 8% болса (стагфляция)? Неге стагфляция саясаткерлер үшін соншалықты қиын?",
            answer: "Normal recession (1% inflation): lower rates to stimulate borrowing, spending, and investment. This is textbook monetary policy. Stagflation (8% inflation + recession): the central bank faces an impossible choice. Lowering rates would stimulate growth but worsen inflation. Raising rates would fight inflation but deepen the recession. Stagflation is so difficult because the two standard tools (rate cuts for recession, rate hikes for inflation) contradict each other. Policymakers must choose which problem to fight first, and either choice causes pain.",
            answerRu: "Обычная рецессия (инфляция 1%): снизить ставки, чтобы стимулировать заимствования, расходы и инвестиции. Это классическая монетарная политика. Стагфляция (инфляция 8% + рецессия): центробанк сталкивается с невозможным выбором. Снижение ставок стимулировало бы рост, но усилило бы инфляцию. Повышение ставок боролось бы с инфляцией, но углубило бы рецессию. Стагфляция так сложна, потому что два стандартных инструмента (снижение ставок при рецессии, повышение при инфляции) противоречат друг другу. Политикам приходится выбирать, с какой проблемой бороться в первую очередь, и любой выбор причиняет боль.",
            answerKk: "Қалыпты рецессия (инфляция 1%): қарыз алуды, шығыстарды және инвестицияны ынталандыру үшін мөлшерлемені түсіру. Бұл классикалық монетарлық саясат. Стагфляция (инфляция 8% + рецессия): орталық банк мүмкін емес таңдаумен бетпе-бет келеді. Мөлшерлемені түсіру өсімді ынталандырар еді, бірақ инфляцияны күшейтер еді. Мөлшерлемені көтеру инфляциямен күресер еді, бірақ рецессияны тереңдетер еді. Стагфляция соншалықты қиын, өйткені екі стандартты құрал (рецессия үшін мөлшерлемені түсіру, инфляция үшін көтеру) бір-біріне қайшы келеді. Саясаткерлер қай мәселемен алдымен күресетінін таңдауы керек, және кез келген таңдау зиян келтіреді.",
            xp: 20
          }
        ]
      },
      {
        title: "Building Wealth",
        titleRu: "Создание богатства",
        titleKk: "Байлық құру",
        content: "Building lasting wealth comes down to a simple formula practiced consistently over decades: earn more, spend less, invest the difference wisely, and protect what you build. The three pillars are income growth (career development, multiple income streams), disciplined saving (automating transfers, avoiding lifestyle inflation), and patient investing (staying in the market through volatility). Wealth building is a marathon, not a sprint — consistency beats intensity every time.",
        contentRu: "Создание устойчивого богатства сводится к простой формуле: зарабатывать больше, тратить меньше, разумно инвестировать разницу и защищать накопленное. Три столпа: рост доходов (карьерный рост, множественные источники), дисциплина сбережений (автоматизация, избежание роста расходов) и терпеливое инвестирование (оставаться на рынке). Создание богатства — марафон, не спринт.",
        contentKk: "Тұрақты байлық құру ондаған жылдар бойы жүйелі түрде қолданылатын қарапайым формулаға келеді: көп тапқан, аз жұмсаңыз, айырмашылықты дұрыс инвестициялаңыз және құрғаныңызды қорғаңыз. Үш тірек: табыс өсімі (мансаптық даму, бірнеше табыс көзі), тәртіпті жинақ (аударымдарды автоматтандыру, өмір салтының инфляциясынан аулақ болу) және сабырлы инвестициялау (құбылмалылық кезінде нарықта қалу). Байлық құру — марафон, спринт емес.",
        keyFormulas: [
          {
            formula: "Wealth = (Income − Expenses) × Investment Returns × Time",
            formulaRu: "Богатство = (Доход − Расходы) × Доходность инвестиций × Время",
            formulaKk: "Байлық = (Табыс − Шығыстар) × Инвестиция табыстылығы × Уақыт",
            description: "The fundamental wealth-building equation",
            descriptionRu: "Фундаментальное уравнение создания богатства",
            descriptionKk: "Байлық құрудың іргелі теңдеуі"
          },
          {
            formula: "Rule of 72: Years to Double = 72 / Annual Return %",
            formulaRu: "Правило 72: Годы для удвоения = 72 / Годовая доходность %",
            formulaKk: "72 ережесі: Екі еселенуге қажет жылдар = 72 / Жылдық табыстылық %",
            description: "Quick estimate of how long it takes to double your money",
            descriptionRu: "Быстрая оценка времени удвоения капитала",
            descriptionKk: "Ақшаңызды екі есе арттыруға қанша уақыт кететінін жылдам бағалау"
          }
        ],
        solvedExamples: [
          {
            question: "Two people both invest from age 25 to 65. Person A earns $60K, saves 10% ($6K/year). Person B earns $120K, saves 5% ($6K/year). Both earn 8% annually. Who builds more wealth? Then Person C earns $60K, saves 20% ($12K/year) at 8%. Compare all three.",
            questionRu: "Двое инвестируют с 25 до 65 лет. А зарабатывает $60К, сберегает 10% ($6К). Б зарабатывает $120К, сберегает 5% ($6К). Оба при 8%. Кто богаче? Потом В: $60К, 20% ($12К) при 8%. Сравните всех.",
            questionKk: "Екі адам 25-тен 65 жасқа дейін инвестициялайды. А $60К табады, 10% жинайды ($6К/жыл). Б $120К табады, 5% жинайды ($6К/жыл). Екеуі де жылдық 8% табады. Кім көп байлық жинайды? В адамы $60К табады, 20% жинайды ($12К/жыл), 8%. Үшеуін салыстырыңыз.",
            steps: [
              { en: "A and B both save $6K/year for 40 years at 8% = ~$1.55M each. Despite B earning double, same savings = same wealth. Savings rate matters more than income.", ru: "А и Б оба сберегают $6К/год 40 лет при 8% = ~$1,55М каждый. Несмотря на двойной доход Б, одинаковые сбережения = одинаковое богатство.", kk: "А және Б екеуі де 40 жыл бойы жылына $6К жинайды, 8% = әрқайсысы ~$1,55М. Б екі есе көп тапқанына қарамастан, бірдей жинақ = бірдей байлық." },
              { en: "C saves $12K/year for 40 years at 8% = ~$3.1M. Person C (lower income, higher savings rate) builds double the wealth of Person B (higher income, lower rate). The savings rate is the most controllable and impactful variable.", ru: "В сберегает $12К/год 40 лет при 8% = ~$3,1М. В (меньший доход, высокая норма) создаёт вдвое больше Б (высокий доход, низкая норма).", kk: "В жылына $12К жинайды, 40 жыл, 8% = ~$3,1М. В (аз табыс, жоғары жинақ мөлшерлемесі) Б-дан (жоғары табыс, төмен мөлшерлеме) екі есе көп байлық жинайды." }
            ],
            answer: "A and B tie at ~$1.55M. C leads with ~$3.1M. The savings rate (not income level) is the strongest predictor of wealth. Person C earned half of B's salary but built double the wealth.",
            answerRu: "А и Б сравнялись на ~$1,55М. В лидирует с ~$3,1М. Норма сбережений (а не уровень дохода) — самый сильный предиктор богатства. Человек В зарабатывал вдвое меньше Б, но накопил вдвое больше богатства.",
            answerKk: "А мен Б ~$1,55М-де теңеседі. В ~$3,1М-мен көш бастайды. Жинақ мөлшерлемесі (табыс деңгейі емес) байлықтың ең күшті болжаушысы. В адамы Б-ның жалақысының жартысын тапса да, екі есе көп байлық жинады."
          }
        ],
        practiceProblems: [
          {
            difficulty: "easy",
            question: "Using the Rule of 72, how long does it take to double your money at 8% annual returns?",
            questionRu: "По правилу 72, за сколько лет удвоятся деньги при 8%?",
            questionKk: "72 ережесі бойынша жылдық 8% кірістілікте ақшаңызды екі есе арттыруға қанша уақыт кетеді?",
            answer: "72 / 8 = 9 years to double your money.",
            answerRu: "72 / 8 = 9 лет, чтобы удвоить деньги.",
            answerKk: "72 / 8 = ақшаңызды екі есе арттыру үшін 9 жыл.",
            hint: "Divide 72 by the annual return percentage.",
            hintRu: "Разделите 72 на процент годовой доходности.",
            hintKk: "72-ні жылдық кіріс пайызына бөліңіз.",
            xp: 5
          },
          {
            difficulty: "medium",
            question: "You get a $5,000 raise. Option A: increase your lifestyle spending by $5,000. Option B: invest the entire $5,000 annually at 8% for 30 years. What is the long-term cost of lifestyle inflation?",
            questionRu: "Вы получили прибавку $5 000. Вариант А: увеличить расходы на $5 000. Вариант Б: инвестировать $5 000/год при 8% за 30 лет. Какова цена инфляции образа жизни?",
            questionKk: "Сіз $5 000 жалақы қосымшасын аласыз. А нұсқасы: шығыстарды $5 000-ға арттыру. Б нұсқасы: жылына $5 000-ды 8%-бен 30 жыл инвестициялау. Өмір салты инфляциясының ұзақ мерзімді құны қанша?",
            answer: "$5,000/year at 8% for 30 years = ~$566,000. The 'cost' of lifestyle inflation from one single raise is over half a million dollars in lost future wealth. This is why automatically investing raises is one of the most powerful wealth-building habits.",
            answerRu: "$5000/год под 8% за 30 лет = ~$566 000. 'Цена' инфляции образа жизни от одной единственной прибавки — более полумиллиона долларов упущенного будущего богатства. Поэтому автоматическое инвестирование прибавок — одна из самых мощных привычек для создания богатства.",
            answerKk: "Жылына $5000, 8%-бен 30 жыл = ~$566 000. Бір ғана жалақы қосымшасынан болатын өмір салты инфляциясының 'құны' — жарты миллион доллардан асатын жоғалтылған болашақ байлық. Сондықтан жалақы қосымшаларын автоматты түрде инвестициялау байлық құрудың ең күшті әдеттерінің бірі.",
            hint: "Calculate the future value of $5,000 annual investments over 30 years.",
            hintRu: "Рассчитайте будущую стоимость $5 000 ежегодных инвестиций за 30 лет.",
            hintKk: "30 жыл бойы жылдық $5 000 инвестицияның болашақ құнын есептеңіз.",
            xp: 10
          },
          {
            difficulty: "hard",
            question: "Design a wealth-building strategy for a 22-year-old earning $45,000 in Kazakhstan (where average salary is $800/month). They want to reach $1M by age 50. Assume 10% average returns. What monthly savings rate is needed? What specific investment vehicles would you recommend and why?",
            questionRu: "Стратегия для 22-летнего с доходом $45 000 в Казахстане (средняя зарплата $800/мес). Цель — $1М к 50 годам. Доходность 10%. Какова необходимая норма сбережений? Какие инструменты порекомендуете?",
            questionKk: "Қазақстанда $45 000 табатын 22 жастағы адам үшін байлық құру стратегиясын жасаңыз (орташа жалақы $800/ай). 50 жасқа дейін $1М жету мақсаты. Орташа кірістілік 10%. Қажетті ай сайынғы жинақ мөлшерлемесі қанша? Қандай инвестициялық құралдарды ұсынар едіңіз?",
            answer: "28 years at 10%: need ~$500/month ($6,000/year). That's 13.3% of gross income — achievable. Vehicles: (1) Global index ETFs through an international brokerage (MSCI World, S&P 500) for core growth — local Kazakh market is too small/volatile for full allocation. (2) Kazakh pension fund (ENPF) contributions for tax advantage. (3) KZT deposits for emergency fund (high local rates often beat inflation). (4) As income grows, add real estate in Astana/Almaty for diversification. Key risks: currency risk (KZT volatility vs USD), so keep most long-term investments in USD-denominated global funds.",
            answerRu: "28 лет под 10%: нужно ~$500/мес ($6000/год). Это 13,3% от валового дохода — достижимо. Инструменты: (1) Глобальные индексные ETF через международного брокера (MSCI World, S&P 500) для основного роста — местный казахстанский рынок слишком мал/волатилен для полного распределения. (2) Взносы в казахстанский пенсионный фонд (ЕНПФ) ради налоговых льгот. (3) Вклады в тенге для резервного фонда (высокие местные ставки часто обгоняют инфляцию). (4) По мере роста дохода добавить недвижимость в Астане/Алматы для диверсификации. Ключевые риски: валютный риск (волатильность тенге к доллару), поэтому большую часть долгосрочных инвестиций держите в глобальных фондах, номинированных в долларах.",
            answerKk: "10%-бен 28 жыл: айына ~$500 ($6000/жыл) керек. Бұл жалпы табыстың 13,3%-ы — қолжетімді. Құралдар: (1) Негізгі өсім үшін халықаралық брокер арқылы жаһандық индекстік ETF-тер (MSCI World, S&P 500) — жергілікті қазақстандық нарық толық бөлу үшін тым кіші/құбылмалы. (2) Салық жеңілдігі үшін ЕНПФ жарналары. (3) Төтенше жағдай қоры үшін теңге депозиттері (жоғары жергілікті мөлшерлемелер көбіне инфляциядан асып түседі). (4) Табыс өскен сайын әртараптандыру үшін Астана/Алматыда жылжымайтын мүлік қосыңыз. Негізгі тәуекелдер: валюта тәуекелі (теңгенің долларға қатысты құбылмалылығы), сондықтан ұзақ мерзімді инвестицияларыңыздың көбін долларлық жаһандық қорларда ұстаңыз.",
            xp: 20
          }
        ]
      }
    ]
  }
};
