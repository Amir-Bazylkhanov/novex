// ============================================
// Учебный контент планеты «Programming & AI» (программирование и ИИ) —
// готовый учебный курс Академии Novex. Подключается в constants/academy/catalog.ts как одна из планет и
// показывается на странице /learn для соответствующего робота-наставника.
// Одна запись = один класс (ключ вида "Programming & AI_8"..._12):
// введение + список секций, где у каждой секции — теория на трёх языках,
// формулы, термины, разобранные примеры и практические задачи.
// ============================================
import type { LessonContent } from '../lessonData.ts';

export const PROGRAMMING_FULL: Record<string, LessonContent> = {
  "Programming & AI_8": {
    planetName: "Programming & AI",
    introduction: {
      en: "Welcome to Programming & AI! You will learn what programming is, how algorithms work, and write your very first programs using Scratch and Python.",
      ru: "Добро пожаловать в Программирование и ИИ! Вы узнаете, что такое программирование, как работают алгоритмы, и напишете свои первые программы на Scratch и Python."
    },
    sections: [
      {
        title: "What is Programming",
        titleRu: "Что такое программирование",
        titleKk: "Программалау дегеніміз не",
        content: "Programming is the process of writing instructions that a computer can execute. These instructions, called code, tell the computer exactly what to do step by step. Programming is used everywhere — from mobile apps and video games to spacecraft and medical devices.",
        contentRu: "Программирование — это процесс написания инструкций, которые компьютер может выполнить. Эти инструкции, называемые кодом, говорят компьютеру, что именно делать шаг за шагом. Программирование используется повсюду — от мобильных приложений и видеоигр до космических аппаратов и медицинских устройств.",
        contentKk: "Программалау — компьютер орындай алатын нұсқаулар жазу процесі. Код деп аталатын бұл нұсқаулар компьютерге не істеу керектігін қадам-қадаммен айтады. Программалау барлық жерде қолданылады — мобильді қосымшалар мен видеоойындардан бастап ғарыш аппараттары мен медициналық құрылғыларға дейін.",
        keyFormulas: [
          {
            formula: "print('Hello, World!')",
            description: "The classic first program that displays text on screen",
            descriptionRu: "Классическая первая программа, выводящая текст на экран",
            descriptionKk: "Экранға мәтін шығаратын классикалық бірінші бағдарлама"
          }
        ],
        solvedExamples: [
          {
            question: "What does the command print('Hello') do in Python?",
            questionRu: "Что делает команда print('Hello') в Python?",
            questionKk: "Python-да print('Hello') командасы не істейді?",
            steps: [
              { en: "The print() function sends text to the screen output.", ru: "Функция print() отправляет текст на экран.", kk: "print() функциясы мәтінді экранға жібереді." },
              { en: "The text inside the quotes 'Hello' is displayed exactly as written.", ru: "Текст в кавычках 'Hello' выводится точно так, как написан.", kk: "Тырнақшадағы 'Hello' мәтіні жазылғандай дәл көрсетіледі." }
            ],
            answer: "It displays the word Hello on the screen.",
            answerRu: "Она выводит слово Hello на экран.",
            answerKk: "Ол Hello сөзін экранға шығарады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name two things that are created using programming.",
            questionRu: "Назовите две вещи, созданные с помощью программирования.",
            questionKk: "Программалау арқылы жасалған екі нәрсені атаңыз.",
            answer: "Mobile apps and video games (or any two valid examples).",
            answerRu: "Мобильные приложения и видеоигры (или любые два подходящих примера).",
            answerKk: "Мобильді қосымшалар мен видеоойындар (немесе кез келген екі жарамды мысал).",
            hint: "Think about what you use on your phone or computer daily.",
            hintRu: "Подумайте, чем вы пользуетесь на телефоне или компьютере каждый день.",
            hintKk: "Күнделікті телефоныңызда немесе компьютеріңізде не пайдаланатыныңызды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a Python command that prints your name on the screen.",
            questionRu: "Напишите команду Python, которая выводит ваше имя на экран.",
            questionKk: "Экранға атыңызды шығаратын Python командасын жазыңыз.",
            answer: "print('YourName') — replacing YourName with your actual name.",
            answerRu: "print('YourName') — замените YourName на своё настоящее имя.",
            answerKk: "print('YourName') — YourName орнына өз атыңызды жазыңыз.",
            hint: "Use the print() function with your name in quotes.",
            hintRu: "Используйте функцию print() с вашим именем в кавычках.",
            hintKk: "print() функциясын тырнақшадағы атыңызбен пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain why computers need programming languages instead of understanding human speech directly.",
            questionRu: "Объясните, почему компьютерам нужны языки программирования, а не прямое понимание человеческой речи.",
            questionKk: "Компьютерлерге адам тілін тікелей түсінудің орнына программалау тілдері неге қажет екенін түсіндіріңіз.",
            answer: "Human language is ambiguous — one word can have many meanings. Programming languages are precise and unambiguous so the computer always knows exactly what to do.",
            answerRu: "Человеческий язык неоднозначен — одно слово может иметь много значений. Языки программирования точны и однозначны, поэтому компьютер всегда знает, что именно делать.",
            answerKk: "Адам тілі көп мағыналы — бір сөздің бірнеше мағынасы болуы мүмкін. Программалау тілдері нақты және бір мағыналы, сондықтан компьютер не істеу керектігін әрқашан дәл біледі.",
            hint: "Think about words with multiple meanings, like 'bank'.",
            hintRu: "Подумайте о словах с несколькими значениями, например 'ключ'.",
            hintKk: "'Жүру' сияқты бірнеше мағынасы бар сөздерді ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Algorithms & Flowcharts",
        titleRu: "Алгоритмы и блок-схемы",
        titleKk: "Алгоритмдер және блок-схемалар",
        content: "An algorithm is a step-by-step set of instructions for solving a problem. Flowcharts are visual diagrams that represent algorithms using shapes: ovals for start/end, rectangles for processes, diamonds for decisions, and arrows for flow direction. Drawing a flowchart before coding helps you plan your logic clearly.",
        contentRu: "Алгоритм — это пошаговый набор инструкций для решения задачи. Блок-схемы — это визуальные диаграммы, представляющие алгоритмы с помощью фигур: овалы для начала/конца, прямоугольники для процессов, ромбы для решений и стрелки для направления потока. Рисование блок-схемы перед кодированием помогает чётко спланировать логику.",
        contentKk: "Алгоритм — есепті шешуге арналған қадамдық нұсқаулар жиынтығы. Блок-схемалар алгоритмдерді фигуралар арқылы бейнелейтін көрнекі диаграммалар: бастау/аяқтау үшін сопақшалар, процестер үшін тіктөртбұрыштар, шешімдер үшін ромбтар және ағын бағыты үшін жебелер. Кодтау алдында блок-схема салу логиканы анық жоспарлауға көмектеседі.",
        keyFormulas: [
          {
            formula: "START → Process → Decision(Yes/No) → END",
            formulaRu: "НАЧАЛО → Обработка → Решение(Да/Нет) → КОНЕЦ",
            formulaKk: "БАСТАУ → Өңдеу → Шешім(Иә/Жоқ) → АЯҚТАУ",
            description: "Basic flowchart structure with decision branching",
            descriptionRu: "Базовая структура блок-схемы с ветвлением решений",
            descriptionKk: "Шешім тармақталуы бар блок-схеманың негізгі құрылымы"
          },
          {
            formula: "Algorithm = Input → Process → Output",
            formulaRu: "Алгоритм = Ввод → Обработка → Вывод",
            formulaKk: "Алгоритм = Кіріс → Өңдеу → Шығыс",
            description: "Every algorithm receives input, processes it, and produces output",
            descriptionRu: "Каждый алгоритм получает вход, обрабатывает и выдаёт результат",
            descriptionKk: "Әр алгоритм кіріс алады, өңдейді және нәтиже шығарады"
          }
        ],
        solvedExamples: [
          {
            question: "Draw a flowchart algorithm to check if a number is positive or negative.",
            questionRu: "Нарисуйте алгоритм блок-схемы для проверки, является ли число положительным или отрицательным.",
            questionKk: "Санның оң немесе теріс екенін тексеру үшін блок-схема алгоритмін сызыңыз.",
            steps: [
              { en: "START → Read number N → Decision: Is N >= 0?", ru: "НАЧАЛО → Прочитать число N → Решение: N >= 0?", kk: "БАСТАЛУ → N санын оқу → Шешім: N >= 0?" },
              { en: "If Yes → Print 'Positive'; If No → Print 'Negative' → END.", ru: "Если Да → Вывести 'Положительное'; Если Нет → Вывести 'Отрицательное' → КОНЕЦ.", kk: "Иә болса → 'Оң' шығару; Жоқ болса → 'Теріс' шығару → АЯҚТАЛУ." }
            ],
            answer: "START → Read N → If N>=0 print Positive, else print Negative → END.",
            answerRu: "НАЧАЛО → Прочитать N → Если N>=0, вывести Положительное, иначе вывести Отрицательное → КОНЕЦ.",
            answerKk: "БАСТАЛУ → N санын оқу → Егер N>=0 болса, Оң деп шығару, әйтпесе Теріс деп шығару → АЯҚТАЛУ."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What shape represents a decision in a flowchart?",
            questionRu: "Какая фигура обозначает решение в блок-схеме?",
            questionKk: "Блок-схемада шешім қандай фигурамен белгіленеді?",
            answer: "A diamond (rhombus).",
            answerRu: "Ромб.",
            answerKk: "Ромб.",
            hint: "It has four sides and looks like a tilted square.",
            hintRu: "У неё четыре стороны, и она похожа на наклонённый квадрат.",
            hintKk: "Оның төрт жағы бар және еңкейген шаршыға ұқсайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a simple algorithm (in words) to make a cup of tea.",
            questionRu: "Напишите простой алгоритм (словами) для приготовления чашки чая.",
            questionKk: "Бір шыны шай дайындау үшін қарапайым алгоритм жазыңыз (сөзбен).",
            answer: "1. Boil water. 2. Put tea bag in cup. 3. Pour hot water. 4. Wait 3 minutes. 5. Remove tea bag. 6. Drink.",
            answerRu: "1. Вскипятить воду. 2. Положить чайный пакетик в чашку. 3. Залить горячей водой. 4. Подождать 3 минуты. 5. Вынуть чайный пакетик. 6. Пить.",
            answerKk: "1. Суды қайнату. 2. Кесеге шай пакетін салу. 3. Ыстық су құю. 4. 3 минут күту. 5. Шай пакетін алып тастау. 6. Ішу.",
            hint: "Think of each physical action as one step.",
            hintRu: "Представьте каждое физическое действие как один шаг.",
            hintKk: "Әр физикалық әрекетті бір қадам ретінде елестетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write an algorithm to find the largest of three numbers A, B, and C.",
            questionRu: "Напишите алгоритм нахождения наибольшего из трёх чисел A, B и C.",
            questionKk: "A, B және C үш санның ішіндегі ең үлкенін табу алгоритмін жазыңыз.",
            answer: "Set max=A. If B>max then max=B. If C>max then max=C. Print max.",
            answerRu: "Присвоить max=A. Если B>max, то max=B. Если C>max, то max=C. Вывести max.",
            answerKk: "max=A деп алу. Егер B>max болса, онда max=B. Егер C>max болса, онда max=C. max мәнін шығару.",
            hint: "Start by assuming the first number is the largest, then compare.",
            hintRu: "Начните с предположения, что первое число — наибольшее, затем сравните.",
            hintKk: "Бірінші сан ең үлкен деп бастаңыз, содан кейін салыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Variables & Data Types",
        titleRu: "Переменные и типы данных",
        titleKk: "Айнымалылар және деректер түрлері",
        content: "A variable is a named container that stores a value in the computer's memory. In Python, you create a variable by assigning a value with the equals sign: name = 'Alice'. The main data types are integers (whole numbers), floats (decimals), strings (text), and booleans (True/False).",
        contentRu: "Переменная — это именованный контейнер, хранящий значение в памяти компьютера. В Python переменная создаётся присвоением значения через знак равенства: name = 'Alice'. Основные типы данных: целые числа (int), дробные (float), строки (str) и логические (bool — True/False).",
        contentKk: "Айнымалы — компьютер жадында мән сақтайтын аталған контейнер. Python-да айнымалы теңдік белгісімен мән беру арқылы жасалады: name = 'Alice'. Негізгі деректер түрлері: бүтін сандар (int), ондық бөлшектер (float), жолдар (str) және логикалық мәндер (bool — True/False).",
        keyFormulas: [
          {
            formula: "variable_name = value",
            description: "Assignment operator stores a value in a variable",
            descriptionRu: "Оператор присваивания сохраняет значение в переменной",
            descriptionKk: "Меншіктеу операторы мәнді айнымалыға сақтайды"
          },
          {
            formula: "type(variable) → int, float, str, bool",
            description: "The type() function reveals the data type of a variable",
            descriptionRu: "Функция type() показывает тип данных переменной",
            descriptionKk: "type() функциясы айнымалының деректер түрін көрсетеді"
          }
        ],
        solvedExamples: [
          {
            question: "What is the data type of each: x = 10, y = 3.14, z = 'hello'?",
            questionRu: "Каков тип данных каждого: x = 10, y = 3.14, z = 'hello'?",
            questionKk: "Әрқайсысының деректер түрі қандай: x = 10, y = 3.14, z = 'hello'?",
            steps: [
              { en: "x = 10 is a whole number, so its type is int (integer).", ru: "x = 10 — целое число, поэтому его тип — int.", kk: "x = 10 бүтін сан, сондықтан оның түрі — int." },
              { en: "y = 3.14 has a decimal point so it is float; z = 'hello' is text in quotes so it is str (string).", ru: "y = 3.14 имеет десятичную точку — float; z = 'hello' — текст в кавычках — str (строка).", kk: "y = 3.14 ондық нүктесі бар — float; z = 'hello' тырнақшадағы мәтін — str (жол)." }
            ],
            answer: "x is int, y is float, z is str.",
            answerRu: "x — int, y — float, z — str.",
            answerKk: "x — int, y — float, z — str."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Create a variable called age and assign it the value 15.",
            questionRu: "Создайте переменную age и присвойте ей значение 15.",
            questionKk: "age деген айнымалы жасап, оған 15 мәнін беріңіз.",
            answer: "age = 15",
            answerRu: "age = 15",
            answerKk: "age = 15",
            hint: "Use the = sign to assign a value.",
            hintRu: "Используйте знак = для присвоения значения.",
            hintKk: "Мән беру үшін = белгісін пайдаланыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the result of type(True) in Python?",
            questionRu: "Каков результат type(True) в Python?",
            questionKk: "Python-да type(True) нәтижесі қандай?",
            answer: "<class 'bool'> — True is a boolean value.",
            answerRu: "<class 'bool'> — True это логическое значение.",
            answerKk: "<class 'bool'> — True логикалық мән болып табылады.",
            hint: "True and False are special values that represent logic.",
            hintRu: "True и False — специальные значения, представляющие логику.",
            hintKk: "True және False — логиканы білдіретін арнайы мәндер.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "What happens if you run: x = '5' + 3 in Python? Explain why.",
            questionRu: "Что произойдёт при выполнении: x = '5' + 3 в Python? Объясните почему.",
            questionKk: "Python-да x = '5' + 3 орындалса не болады? Неге екенін түсіндіріңіз.",
            answer: "TypeError — you cannot add a string '5' to an integer 3. You must convert one type: int('5') + 3 = 8 or '5' + str(3) = '53'.",
            answerRu: "TypeError — нельзя сложить строку '5' с целым числом 3. Нужно преобразовать один из типов: int('5') + 3 = 8 или '5' + str(3) = '53'.",
            answerKk: "TypeError — '5' жолын 3 бүтін санына қосу мүмкін емес. Түрлердің бірін түрлендіру керек: int('5') + 3 = 8 немесе '5' + str(3) = '53'.",
            hint: "Python does not automatically convert between strings and numbers.",
            hintRu: "Python не конвертирует автоматически между строками и числами.",
            hintKk: "Python жолдар мен сандар арасында автоматты түрде түрлендірмейді.",
            xp: 20
          }
        ]
      },
      {
        title: "Input & Output",
        titleRu: "Ввод и вывод",
        titleKk: "Кіріс және шығыс",
        content: "Input allows a program to receive data from the user, and output displays results back. In Python, input() reads text from the keyboard and print() displays text on screen. Since input() always returns a string, you must convert it with int() or float() for math operations.",
        contentRu: "Ввод позволяет программе получать данные от пользователя, а вывод отображает результаты. В Python input() считывает текст с клавиатуры, а print() выводит текст на экран. Поскольку input() всегда возвращает строку, для математических операций нужно преобразовать её с помощью int() или float().",
        contentKk: "Кіріс бағдарламаға пайдаланушыдан деректер алуға мүмкіндік береді, ал шығыс нәтижелерді көрсетеді. Python-да input() пернетақтадан мәтін оқиды, print() экранға мәтін шығарады. input() әрқашан жол қайтаратындықтан, математикалық амалдар үшін int() немесе float() арқылы түрлендіру керек.",
        keyFormulas: [
          {
            formula: "name = input('Enter your name: ')",
            formulaRu: "name = input('Введите ваше имя: ')",
            formulaKk: "name = input('Атыңызды енгізіңіз: ')",
            description: "Reads user keyboard input and stores it as a string",
            descriptionRu: "Считывает ввод пользователя с клавиатуры и сохраняет как строку",
            descriptionKk: "Пайдаланушының пернетақта енгізуін оқиды және жол ретінде сақтайды"
          },
          {
            formula: "num = int(input('Enter a number: '))",
            formulaRu: "num = int(input('Введите число: '))",
            formulaKk: "num = int(input('Санды енгізіңіз: '))",
            description: "Reads input and converts the string to an integer",
            descriptionRu: "Считывает ввод и преобразует строку в целое число",
            descriptionKk: "Енгізуді оқиды және жолды бүтін санға түрлендіреді"
          }
        ],
        solvedExamples: [
          {
            question: "Write a program that asks the user for their age and prints it.",
            questionRu: "Напишите программу, которая спрашивает возраст пользователя и выводит его.",
            questionKk: "Пайдаланушының жасын сұрайтын және шығаратын бағдарлама жазыңыз.",
            steps: [
              { en: "Use input() to ask: age = input('How old are you? ')", ru: "Используйте input(): age = input('Сколько вам лет? ')", kk: "input() пайдаланыңыз: age = input('Жасыңыз нешеде? ')" },
              { en: "Use print() to display: print('You are ' + age + ' years old')", ru: "Используйте print(): print('Вам ' + age + ' лет')", kk: "print() пайдаланыңыз: print('Сіздің жасыңыз ' + age)" }
            ],
            answer: "age = input('How old are you? ') then print('You are ' + age + ' years old')",
            answerRu: "age = input('How old are you? ') then print('You are ' + age + ' years old')",
            answerKk: "age = input('How old are you? ') then print('You are ' + age + ' years old')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What function do you use to get input from a user in Python?",
            questionRu: "Какую функцию вы используете для получения ввода от пользователя в Python?",
            questionKk: "Python-да пайдаланушыдан енгізу алу үшін қай функцияны пайдаланасыз?",
            answer: "input()",
            answerRu: "input()",
            answerKk: "input()",
            hint: "It literally asks for input.",
            hintRu: "Она буквально запрашивает ввод.",
            hintKk: "Ол сөзбе-сөз енгізу сұрайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write code that asks for two numbers and prints their sum.",
            questionRu: "Напишите код, который запрашивает два числа и выводит их сумму.",
            questionKk: "Екі сан сұрайтын және олардың қосындысын шығаратын код жазыңыз.",
            answer: "a = int(input('First: ')) \\n b = int(input('Second: ')) \\n print(a + b)",
            answerRu: "a = int(input('First: ')) \\n b = int(input('Second: ')) \\n print(a + b)",
            answerKk: "a = int(input('First: ')) \\n b = int(input('Second: ')) \\n print(a + b)",
            hint: "Remember to convert input to int before adding.",
            hintRu: "Не забудьте преобразовать ввод в int перед сложением.",
            hintKk: "Қоспас бұрын енгізуді int-ке түрлендіруді ұмытпаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "What happens if the user types 'abc' when your code runs int(input('Number: '))? How can you prevent a crash?",
            questionRu: "Что произойдёт, если пользователь введёт 'abc' при выполнении int(input('Число: '))? Как предотвратить сбой?",
            questionKk: "int(input('Сан: ')) орындалғанда пайдаланушы 'abc' терсе не болады? Бұзылуды қалай болдырмауға болады?",
            answer: "A ValueError occurs. Use try/except to catch the error and ask again.",
            answerRu: "Возникает ValueError. Используйте try/except, чтобы перехватить ошибку и запросить ввод снова.",
            answerKk: "ValueError пайда болады. Қатені ұстап, қайта сұрау үшін try/except пайдаланыңыз.",
            hint: "Python cannot convert letters to an integer.",
            hintRu: "Python не может преобразовать буквы в целое число.",
            hintKk: "Python әріптерді бүтін санға түрлендіре алмайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Conditionals",
        titleRu: "Условные операторы",
        titleKk: "Шартты операторлар",
        content: "Conditionals let your program make decisions using if, elif, and else statements. The condition after if must be a boolean expression that evaluates to True or False. Python uses indentation (4 spaces) to define which code belongs inside each branch.",
        contentRu: "Условные операторы позволяют программе принимать решения с помощью if, elif и else. Условие после if должно быть логическим выражением, результат которого True или False. Python использует отступы (4 пробела) для определения кода внутри каждой ветки.",
        contentKk: "Шартты операторлар бағдарламаға if, elif және else арқылы шешім қабылдауға мүмкіндік береді. if-тен кейінгі шарт True немесе False болатын логикалық өрнек болуы керек. Python әр тармақ ішіндегі кодты анықтау үшін шегіністі (4 бос орын) пайдаланады.",
        keyFormulas: [
          {
            formula: "if condition:\\n    do_something\\nelif other:\\n    do_other\\nelse:\\n    default",
            description: "Basic if/elif/else branching structure in Python",
            descriptionRu: "Базовая структура ветвления if/elif/else в Python",
            descriptionKk: "Python-дағы if/elif/else тармақталу құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Write code that checks if a number is positive, negative, or zero.",
            questionRu: "Напишите код, проверяющий, является ли число положительным, отрицательным или нулём.",
            questionKk: "Санның оң, теріс немесе нөл екенін тексеретін код жазыңыз.",
            steps: [
              { en: "Use if n > 0 to check positive, elif n < 0 for negative.", ru: "Используйте if n > 0 для положительного, elif n < 0 для отрицательного.", kk: "Оң үшін if n > 0, теріс үшін elif n < 0 пайдаланыңыз." },
              { en: "Use else for zero since it is the only remaining possibility.", ru: "Используйте else для нуля, так как это единственная оставшаяся возможность.", kk: "Нөл үшін else пайдаланыңыз, себебі ол жалғыз қалған мүмкіндік." }
            ],
            answer: "if n > 0: print('Positive') elif n < 0: print('Negative') else: print('Zero')",
            answerRu: "if n > 0: print('Positive') elif n < 0: print('Negative') else: print('Zero')",
            answerKk: "if n > 0: print('Positive') elif n < 0: print('Negative') else: print('Zero')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What keyword do you use after if when you have another condition to check?",
            questionRu: "Какое ключевое слово используется после if для проверки другого условия?",
            questionKk: "Басқа шартты тексеру үшін if-тен кейін қай кілт сөз пайдаланылады?",
            answer: "elif",
            answerRu: "elif",
            answerKk: "elif",
            hint: "It is short for 'else if'.",
            hintRu: "Это сокращение от 'else if'.",
            hintKk: "Бұл 'else if' қысқартылған нұсқасы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write an if/else statement that prints 'Adult' if age >= 18, otherwise prints 'Minor'.",
            questionRu: "Напишите if/else, который выводит 'Взрослый' если age >= 18, иначе 'Несовершеннолетний'.",
            questionKk: "age >= 18 болса 'Ересек', әйтпесе 'Кәмелетке толмаған' шығаратын if/else жазыңыз.",
            answer: "if age >= 18: print('Adult') else: print('Minor')",
            answerRu: "if age >= 18: print('Adult') else: print('Minor')",
            answerKk: "if age >= 18: print('Adult') else: print('Minor')",
            hint: "Use >= for 'greater than or equal to'.",
            hintRu: "Используйте >= для 'больше или равно'.",
            hintKk: "'Үлкен немесе тең' үшін >= пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write code that assigns a letter grade based on a score: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).",
            questionRu: "Напишите код, присваивающий буквенную оценку по баллу: A (90-100), B (80-89), C (70-79), D (60-69), F (ниже 60).",
            questionKk: "Ұпай бойынша әріптік баға беретін код жазыңыз: A (90-100), B (80-89), C (70-79), D (60-69), F (60-тан төмен).",
            answer: "if score >= 90: grade='A' elif score >= 80: grade='B' elif score >= 70: grade='C' elif score >= 60: grade='D' else: grade='F'",
            answerRu: "if score >= 90: grade='A' elif score >= 80: grade='B' elif score >= 70: grade='C' elif score >= 60: grade='D' else: grade='F'",
            answerKk: "if score >= 90: grade='A' elif score >= 80: grade='B' elif score >= 70: grade='C' elif score >= 60: grade='D' else: grade='F'",
            hint: "Check from the highest range first, working down.",
            hintRu: "Проверяйте от наивысшего диапазона, двигаясь вниз.",
            hintKk: "Ең жоғарғы диапазоннан бастап, төмен қарай тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Loops",
        titleRu: "Циклы",
        titleKk: "Циклдер",
        content: "Loops repeat a block of code multiple times. Python has two main loop types: for loops iterate over a sequence (like a range of numbers), and while loops repeat as long as a condition is True. Loops save you from writing the same code over and over.",
        contentRu: "Циклы повторяют блок кода несколько раз. В Python два основных типа циклов: цикл for перебирает последовательность (например, диапазон чисел), а цикл while повторяется, пока условие истинно. Циклы избавляют от написания одного и того же кода многократно.",
        contentKk: "Циклдер код блогын бірнеше рет қайталайды. Python-да циклдің екі негізгі түрі бар: for циклі тізбекті (мысалы, сандар диапазонын) қайталайды, ал while циклі шарт True болғанша қайталанады. Циклдер бір кодты қайта-қайта жазудан құтқарады.",
        keyFormulas: [
          {
            formula: "for i in range(n):\\n    # repeats n times",
            formulaRu: "for i in range(n):\\n    # повторяется n раз",
            formulaKk: "for i in range(n):\\n    # n рет қайталанады",
            description: "For loop repeats code n times, with i going from 0 to n-1",
            descriptionRu: "Цикл for повторяет код n раз, i идёт от 0 до n-1",
            descriptionKk: "for циклі кодты n рет қайталайды, i 0-ден n-1-ге дейін жүреді"
          },
          {
            formula: "while condition:\\n    # repeats while True",
            formulaRu: "while condition:\\n    # повторяется, пока True",
            formulaKk: "while condition:\\n    # True болғанша қайталанады",
            description: "While loop repeats as long as the condition is True",
            descriptionRu: "Цикл while повторяется, пока условие истинно",
            descriptionKk: "while циклі шарт True болғанша қайталанады"
          }
        ],
        solvedExamples: [
          {
            question: "Print the numbers 1 through 5 using a for loop.",
            questionRu: "Выведите числа от 1 до 5 с помощью цикла for.",
            questionKk: "for циклін пайдаланып 1-ден 5-ке дейінгі сандарды шығарыңыз.",
            steps: [
              { en: "Use range(1, 6) because range stops before the end value.", ru: "Используйте range(1, 6), так как range останавливается перед конечным значением.", kk: "range(1, 6) пайдаланыңыз, себебі range соңғы мәннің алдында тоқтайды." },
              { en: "for i in range(1, 6): print(i) — this prints 1, 2, 3, 4, 5.", ru: "for i in range(1, 6): print(i) — выводит 1, 2, 3, 4, 5.", kk: "for i in range(1, 6): print(i) — бұл 1, 2, 3, 4, 5 шығарады." }
            ],
            answer: "for i in range(1, 6): print(i)",
            answerRu: "for i in range(1, 6): print(i)",
            answerKk: "for i in range(1, 6): print(i)"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does range(5) produce?",
            questionRu: "Что выдаёт range(5)?",
            questionKk: "range(5) не шығарады?",
            answer: "The numbers 0, 1, 2, 3, 4 (five numbers starting from 0).",
            answerRu: "Числа 0, 1, 2, 3, 4 (пять чисел, начиная с 0).",
            answerKk: "0, 1, 2, 3, 4 сандары (0-ден басталатын бес сан).",
            hint: "range starts at 0 and stops before the given number.",
            hintRu: "range начинается с 0 и останавливается перед указанным числом.",
            hintKk: "range 0-ден басталады және берілген санның алдында тоқтайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a while loop that prints numbers from 10 down to 1.",
            questionRu: "Напишите цикл while, который выводит числа от 10 до 1.",
            questionKk: "10-нан 1-ге дейін сандарды шығаратын while циклін жазыңыз.",
            answer: "n = 10\\nwhile n >= 1:\\n    print(n)\\n    n = n - 1",
            answerRu: "n = 10\\nwhile n >= 1:\\n    print(n)\\n    n = n - 1",
            answerKk: "n = 10\\nwhile n >= 1:\\n    print(n)\\n    n = n - 1",
            hint: "Start at 10 and subtract 1 each time until you reach 1.",
            hintRu: "Начните с 10 и вычитайте 1 каждый раз, пока не дойдёте до 1.",
            hintKk: "10-нан бастаңыз және 1-ге жеткенше әр рет 1-ді азайтыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a for loop that calculates the sum of all even numbers from 2 to 100.",
            questionRu: "Напишите цикл for, вычисляющий сумму всех чётных чисел от 2 до 100.",
            questionKk: "2-ден 100-ге дейінгі барлық жұп сандардың қосындысын есептейтін for циклін жазыңыз.",
            answer: "total = 0\\nfor i in range(2, 101, 2):\\n    total += i\\nprint(total)  # 2550",
            answerRu: "total = 0\\nfor i in range(2, 101, 2):\\n    total += i\\nprint(total)  # 2550",
            answerKk: "total = 0\\nfor i in range(2, 101, 2):\\n    total += i\\nprint(total)  # 2550",
            hint: "range() has a third argument for step size — use step=2.",
            hintRu: "У range() есть третий аргумент для шага — используйте шаг=2.",
            hintKk: "range() қадам өлшемі үшін үшінші аргументі бар — step=2 пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Simple Functions",
        titleRu: "Простые функции",
        titleKk: "Қарапайым функциялар",
        content: "A function is a reusable block of code that performs a specific task. You define a function with the def keyword, give it a name, and optionally add parameters in parentheses. Functions help organize code, reduce repetition, and make programs easier to read and debug.",
        contentRu: "Функция — это многоразовый блок кода, выполняющий конкретную задачу. Функция определяется ключевым словом def, получает имя и, при необходимости, параметры в скобках. Функции помогают организовать код, уменьшить повторения и сделать программы понятнее.",
        contentKk: "Функция — белгілі бір тапсырманы орындайтын қайта пайдалануға болатын код блогы. Функция def кілт сөзімен анықталады, атау беріледі және жақша ішінде параметрлер қосылады. Функциялар кодты ұйымдастыруға, қайталануды азайтуға және бағдарламаларды оқуға жеңілдетуге көмектеседі.",
        keyFormulas: [
          {
            formula: "def function_name(params):\\n    return result",
            description: "Basic function definition with parameters and return value",
            descriptionRu: "Базовое определение функции с параметрами и возвращаемым значением",
            descriptionKk: "Параметрлері және қайтарылатын мәні бар негізгі функция анықтамасы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a function that takes two numbers and returns their sum.",
            questionRu: "Напишите функцию, которая принимает два числа и возвращает их сумму.",
            questionKk: "Екі сан қабылдайтын және олардың қосындысын қайтаратын функция жазыңыз.",
            steps: [
              { en: "Define the function: def add(a, b):", ru: "Определите функцию: def add(a, b):", kk: "Функцияны анықтаңыз: def add(a, b):" },
              { en: "Return the sum: return a + b. Call it: print(add(3, 5)) outputs 8.", ru: "Верните сумму: return a + b. Вызов: print(add(3, 5)) выведет 8.", kk: "Қосындыны қайтарыңыз: return a + b. Шақыру: print(add(3, 5)) 8 шығарады." }
            ],
            answer: "def add(a, b): return a + b",
            answerRu: "def add(a, b): return a + b",
            answerKk: "def add(a, b): return a + b"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What keyword starts a function definition in Python?",
            questionRu: "Какое ключевое слово начинает определение функции в Python?",
            questionKk: "Python-да функция анықтамасын қай кілт сөз бастайды?",
            answer: "def",
            answerRu: "def",
            answerKk: "def",
            hint: "It is short for 'define'.",
            hintRu: "Это сокращение от 'define' (определить).",
            hintKk: "Бұл 'define' (анықтау) сөзінің қысқартылған нұсқасы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a function called double that takes a number and returns it multiplied by 2.",
            questionRu: "Напишите функцию double, которая принимает число и возвращает его, умноженное на 2.",
            questionKk: "Сан қабылдайтын және оны 2-ге көбейтіп қайтаратын double функциясын жазыңыз.",
            answer: "def double(n): return n * 2",
            answerRu: "def double(n): return n * 2",
            answerKk: "def double(n): return n * 2",
            hint: "Use the * operator for multiplication.",
            hintRu: "Используйте оператор * для умножения.",
            hintKk: "Көбейту үшін * операторын пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function is_even(n) that returns True if n is even, False otherwise. Then use it in a loop to print all even numbers from 1 to 20.",
            questionRu: "Напишите функцию is_even(n), возвращающую True для чётных чисел. Затем используйте её в цикле для вывода чётных чисел от 1 до 20.",
            questionKk: "n жұп болса True қайтаратын is_even(n) функциясын жазыңыз. Содан кейін оны циклде 1-ден 20-ға дейінгі жұп сандарды шығару үшін пайдаланыңыз.",
            answer: "def is_even(n): return n % 2 == 0\\nfor i in range(1, 21):\\n    if is_even(i): print(i)",
            answerRu: "def is_even(n): return n % 2 == 0\\nfor i in range(1, 21):\\n    if is_even(i): print(i)",
            answerKk: "def is_even(n): return n % 2 == 0\\nfor i in range(1, 21):\\n    if is_even(i): print(i)",
            hint: "Use the modulo operator % to check divisibility by 2.",
            hintRu: "Используйте оператор % для проверки делимости на 2.",
            hintKk: "2-ге бөлінгіштігін тексеру үшін % операторын пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Debugging",
        titleRu: "Отладка",
        titleKk: "Жөндеу (debugging)",
        content: "Debugging is the process of finding and fixing errors (bugs) in your code. There are three types of errors: syntax errors (typos that prevent code from running), runtime errors (crashes during execution), and logic errors (code runs but gives wrong results). Reading error messages carefully is the most important debugging skill.",
        contentRu: "Отладка — это процесс поиска и исправления ошибок (багов) в коде. Существует три типа ошибок: синтаксические (опечатки, из-за которых код не запускается), ошибки выполнения (сбои во время работы) и логические (код работает, но даёт неверный результат). Внимательное чтение сообщений об ошибках — важнейший навык отладки.",
        contentKk: "Жөндеу (debugging) — кодтағы қателерді (бағдар) табу және түзету процесі. Қателердің үш түрі бар: синтаксистік қателер (кодтың іске қосылуына кедергі келтіретін қателер), орындалу қателері (орындау кезіндегі бұзылулар) және логикалық қателер (код жұмыс істейді, бірақ қате нәтиже береді). Қате хабарламаларын мұқият оқу — ең маңызды жөндеу дағдысы.",
        keyFormulas: [
          {
            formula: "print(variable) # debug by printing values",
            formulaRu: "print(variable) # отладка через вывод значений",
            formulaKk: "print(variable) # мәндерді шығару арқылы жөндеу",
            description: "Insert print statements to check variable values at different points",
            descriptionRu: "Вставляйте print для проверки значений переменных в разных местах",
            descriptionKk: "Әр түрлі жерлерде айнымалы мәндерін тексеру үшін print қосыңыз"
          },
          {
            formula: "SyntaxError → RuntimeError → LogicError",
            description: "Three error categories from easiest to hardest to find",
            descriptionRu: "Три категории ошибок от простых к сложным для поиска",
            descriptionKk: "Табуға оңайдан қиынға дейін үш қате санаты"
          }
        ],
        solvedExamples: [
          {
            question: "Find the bug: for i in range(5) print(i)",
            questionRu: "Найдите ошибку: for i in range(5) print(i)",
            questionKk: "Қатені табыңыз: for i in range(5) print(i)",
            steps: [
              { en: "Python shows SyntaxError — the for line is missing a colon (:) at the end.", ru: "Python показывает SyntaxError — в строке for отсутствует двоеточие (:) в конце.", kk: "Python SyntaxError көрсетеді — for жолының соңында қос нүкте (:) жетіспейді." },
              { en: "Fix: for i in range(5): print(i) — adding the colon fixes the syntax.", ru: "Исправление: for i in range(5): print(i) — добавление двоеточия исправляет синтаксис.", kk: "Түзету: for i in range(5): print(i) — қос нүкте қосу синтаксисті түзетеді." }
            ],
            answer: "Missing colon after range(5). Correct: for i in range(5): print(i)",
            answerRu: "Пропущено двоеточие после range(5). Правильно: for i in range(5): print(i)",
            answerKk: "range(5) кейін қос нүкте жоқ. Дұрысы: for i in range(5): print(i)"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What type of error is a missing colon in Python?",
            questionRu: "Какой тип ошибки — пропущенное двоеточие в Python?",
            questionKk: "Python-да жетіспейтін қос нүкте қандай қате түрі?",
            answer: "SyntaxError",
            answerRu: "SyntaxError",
            answerKk: "SyntaxError",
            hint: "The code cannot even start running.",
            hintRu: "Код даже не может начать выполнение.",
            hintKk: "Код тіпті іске қосыла алмайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "This code should print 10 but prints 9. Find the bug: x = 5; y = 4; print(x + y)",
            questionRu: "Код должен вывести 10, но выводит 9. Найдите ошибку: x = 5; y = 4; print(x + y)",
            questionKk: "Бұл код 10 шығаруы керек, бірақ 9 шығарады. Қатені табыңыз: x = 5; y = 4; print(x + y)",
            answer: "Logic error: y should be 5, not 4. Fix: y = 5.",
            answerRu: "Логическая ошибка: y должен быть 5, а не 4. Исправление: y = 5.",
            answerKk: "Логикалық қате: y 5 болуы керек, 4 емес. Түзету: y = 5.",
            hint: "Check if the variable values match what you expect.",
            hintRu: "Проверьте, совпадают ли значения переменных с ожидаемыми.",
            hintKk: "Айнымалы мәндерінің күтілгенмен сәйкес келетінін тексеріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "This code should calculate the average of a list but crashes: nums = [10, 20, 30]; avg = sum(nums) / len(num); print(avg). Find and fix the bug.",
            questionRu: "Код должен вычислить среднее списка, но падает: nums = [10, 20, 30]; avg = sum(nums) / len(num); print(avg). Найдите и исправьте.",
            questionKk: "Бұл код тізімнің орташа мәнін есептеуі керек, бірақ бұзылады: nums = [10, 20, 30]; avg = sum(nums) / len(num); print(avg). Қатені тауып түзетіңіз.",
            answer: "NameError: 'num' is not defined. Should be len(nums) not len(num). Fix the typo.",
            answerRu: "NameError: 'num' не определена. Должно быть len(nums), а не len(num). Исправьте опечатку.",
            answerKk: "NameError: 'num' анықталмаған. len(num) емес, len(nums) болуы керек. Қатені түзетіңіз.",
            hint: "Look carefully at the variable name inside len().",
            hintRu: "Внимательно посмотрите на имя переменной внутри len().",
            hintKk: "len() ішіндегі айнымалы атын мұқият қараңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Scratch Projects",
        titleRu: "Проекты на Scratch",
        titleKk: "Scratch жобалары",
        content: "Scratch is a visual block-based programming language created by MIT where you snap colorful blocks together to create programs. It teaches programming concepts like loops, conditionals, and events without worrying about syntax. Scratch projects can include animations, games, and interactive stories.",
        contentRu: "Scratch — это визуальный блочный язык программирования от MIT, где вы соединяете цветные блоки для создания программ. Он обучает концепциям программирования — циклам, условиям и событиям — без беспокойства о синтаксисе. В Scratch можно создавать анимации, игры и интерактивные истории.",
        contentKk: "Scratch — MIT жасаған визуалды блоктық программалау тілі, онда түрлі-түсті блоктарды біріктіріп бағдарламалар жасайсыз. Ол синтаксис туралы алаңдамай программалау концепцияларын — циклдерді, шартты операторларды және оқиғаларды үйретеді. Scratch жобаларына анимациялар, ойындар және интерактивті оқиғалар кіреді.",
        keyFormulas: [
          {
            formula: "when [green flag] clicked → repeat(10) → move(10) steps",
            description: "Scratch event-driven pattern: trigger → loop → action",
            descriptionRu: "Событийный паттерн Scratch: триггер → цикл → действие",
            descriptionKk: "Scratch оқиғаға негізделген үлгі: триггер → цикл → әрекет"
          }
        ],
        solvedExamples: [
          {
            question: "How would you make a sprite move in a square in Scratch?",
            questionRu: "Как заставить спрайт двигаться по квадрату в Scratch?",
            questionKk: "Scratch-те спрайтты шаршы бойынша қалай жылжытасыз?",
            steps: [
              { en: "Use a repeat(4) block since a square has 4 sides.", ru: "Используйте блок repeat(4), так как у квадрата 4 стороны.", kk: "Шаршының 4 жағы болғандықтан repeat(4) блогын пайдаланыңыз." },
              { en: "Inside: move(100) steps, then turn(90) degrees. The sprite draws a square.", ru: "Внутри: move(100) шагов, затем turn(90) градусов. Спрайт рисует квадрат.", kk: "Ішінде: move(100) қадам, содан кейін turn(90) градус. Спрайт шаршы сызады." }
            ],
            answer: "repeat(4): move 100 steps, turn 90 degrees.",
            answerRu: "repeat(4): move 100 steps, turn 90 degrees.",
            answerKk: "repeat(4): move 100 steps, turn 90 degrees."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What block starts most Scratch programs?",
            questionRu: "Какой блок запускает большинство программ Scratch?",
            questionKk: "Scratch бағдарламаларының көпшілігін қай блок бастайды?",
            answer: "When green flag clicked.",
            answerRu: "Когда щёлкнут по зелёному флагу.",
            answerKk: "Жасыл жалауша басылғанда.",
            hint: "It is the green flag at the top of the stage.",
            hintRu: "Это зелёный флажок в верхней части сцены.",
            hintKk: "Бұл сахна жоғарғы жағындағы жасыл жалауша.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How would you make a sprite bounce off the edges of the screen in Scratch?",
            questionRu: "Как сделать, чтобы спрайт отскакивал от краёв экрана в Scratch?",
            questionKk: "Scratch-те спрайтты экран шеттерінен қалай шағылыстырасыз?",
            answer: "Use the 'if on edge, bounce' block inside a forever loop with 'move steps'.",
            answerRu: "Используйте блок 'if on edge, bounce' внутри бесконечного цикла вместе с 'move steps'.",
            answerKk: "'if on edge, bounce' блогын мәңгі цикл ішінде 'move steps' блогымен бірге пайдаланыңыз.",
            hint: "There is a special motion block for edge detection.",
            hintRu: "Есть специальный блок движения для определения края.",
            hintKk: "Шетті анықтау үшін арнайы қозғалыс блогы бар.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a Scratch project concept: a simple catching game where a sprite moves left/right to catch falling objects. List the 4 key blocks you would need.",
            questionRu: "Спроектируйте концепт Scratch-проекта: простая игра-ловилка, где спрайт двигается влево/вправо. Назовите 4 ключевых блока.",
            questionKk: "Scratch жоба тұжырымдамасын жасаңыз: спрайт солға/оңға жылжып түсетін нысандарды ұстайтын қарапайым ойын. 4 негізгі блокты атаңыз.",
            answer: "1. when green flag clicked (start), 2. forever loop (game loop), 3. if key pressed (movement), 4. if touching (collision detection).",
            answerRu: "1. when green flag clicked (старт), 2. forever loop (игровой цикл), 3. if key pressed (движение), 4. if touching (обнаружение столкновений).",
            answerKk: "1. when green flag clicked (бастау), 2. forever loop (ойын циклі), 3. if key pressed (қозғалыс), 4. if touching (соқтығысуды анықтау).",
            hint: "Think about: starting, repeating, moving, and detecting collisions.",
            hintRu: "Подумайте о: запуске, повторении, движении и обнаружении столкновений.",
            hintKk: "Бастау, қайталау, жылжыту және соқтығысуды анықтау туралы ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "First Python Program",
        titleRu: "Первая программа на Python",
        titleKk: "Python-дағы бірінші бағдарлама",
        content: "Python is one of the most popular programming languages because it is easy to read and write. To run Python, you can use an online editor like replit.com or install it on your computer. Your first complete program will combine variables, input, conditionals, and print to create something interactive.",
        contentRu: "Python — один из самых популярных языков программирования, потому что его легко читать и писать. Для запуска Python можно использовать онлайн-редактор вроде replit.com или установить на компьютер. Ваша первая полная программа объединит переменные, ввод, условия и print для создания интерактивного приложения.",
        contentKk: "Python — ең танымал программалау тілдерінің бірі, себебі оны оқу және жазу оңай. Python-ды іске қосу үшін replit.com сияқты онлайн редакторды пайдалануға немесе компьютерге орнатуға болады. Сіздің бірінші толық бағдарламаңыз айнымалыларды, енгізуді, шартты операторларды және print-ті біріктіріп интерактивті қосымша жасайды.",
        keyFormulas: [
          {
            formula: "# This is a comment — Python ignores it",
            formulaRu: "# Это комментарий — Python его игнорирует",
            formulaKk: "# Бұл түсініктеме — Python оны елемейді",
            description: "Comments document your code for human readers",
            descriptionRu: "Комментарии документируют код для читателей",
            descriptionKk: "Түсініктемелер кодты оқырмандар үшін құжаттайды"
          },
          {
            formula: "f'Hello, {name}! You are {age} years old.'",
            formulaRu: "f'Привет, {name}! Тебе {age} лет.'",
            formulaKk: "f'Сәлем, {name}! Сен {age} жастасың.'",
            description: "F-strings let you embed variables directly inside text",
            descriptionRu: "F-строки позволяют вставлять переменные прямо в текст",
            descriptionKk: "F-жолдар айнымалыларды мәтін ішіне тікелей енгізуге мүмкіндік береді"
          }
        ],
        solvedExamples: [
          {
            question: "Write a complete program that asks the user's name and age, then tells them the year they were born.",
            questionRu: "Напишите программу, которая спрашивает имя и возраст, затем сообщает год рождения.",
            questionKk: "Пайдаланушының атын және жасын сұрайтын, содан кейін туған жылын айтатын бағдарлама жазыңыз.",
            steps: [
              { en: "Get input: name = input('Name: ') and age = int(input('Age: '))", ru: "Получите ввод: name = input('Имя: ') и age = int(input('Возраст: '))", kk: "Енгізу алыңыз: name = input('Атыңыз: ') және age = int(input('Жасыңыз: '))" },
              { en: "Calculate and print: birth_year = 2026 - age; print(f'{name}, you were born in {birth_year}')", ru: "Вычислите и выведите: birth_year = 2026 - age; print(f'{name}, вы родились в {birth_year}')", kk: "Есептеп шығарыңыз: birth_year = 2026 - age; print(f'{name}, сіз {birth_year} жылы туғансыз')" }
            ],
            answer: "name = input('Name: ')\\nage = int(input('Age: '))\\nbirth_year = 2026 - age\\nprint(f'{name}, you were born in {birth_year}')",
            answerRu: "name = input('Name: ')\\nage = int(input('Age: '))\\nbirth_year = 2026 - age\\nprint(f'{name}, you were born in {birth_year}')",
            answerKk: "name = input('Name: ')\\nage = int(input('Age: '))\\nbirth_year = 2026 - age\\nprint(f'{name}, you were born in {birth_year}')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What symbol starts a comment in Python?",
            questionRu: "Какой символ начинает комментарий в Python?",
            questionKk: "Python-да түсініктеме қай символдан басталады?",
            answer: "The hash symbol #",
            answerRu: "Знак решётки #",
            answerKk: "Тор белгісі #",
            hint: "It looks like a number sign.",
            hintRu: "Он выглядит как знак номера.",
            hintKk: "Ол нөмір белгісіне ұқсайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a program that converts Celsius to Fahrenheit. Formula: F = C * 9/5 + 32.",
            questionRu: "Напишите программу перевода Цельсия в Фаренгейт. Формула: F = C * 9/5 + 32.",
            questionKk: "Цельсийді Фаренгейтке аударатын бағдарлама жазыңыз. Формула: F = C * 9/5 + 32.",
            answer: "c = float(input('Celsius: '))\\nf = c * 9/5 + 32\\nprint(f'{c}C = {f}F')",
            answerRu: "c = float(input('Celsius: '))\\nf = c * 9/5 + 32\\nprint(f'{c}C = {f}F')",
            answerKk: "c = float(input('Celsius: '))\\nf = c * 9/5 + 32\\nprint(f'{c}C = {f}F')",
            hint: "Use float() for decimal temperatures.",
            hintRu: "Используйте float() для дробных температур.",
            hintKk: "Ондық температуралар үшін float() пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a number guessing game: generate a random number 1-10, let the user guess, tell them if they are too high, too low, or correct.",
            questionRu: "Напишите игру угадывания числа: сгенерируйте число 1-10, дайте пользователю угадать, скажите — больше, меньше или правильно.",
            questionKk: "Санды болжау ойынын жазыңыз: 1-10 аралығында кездейсоқ сан жасаңыз, пайдаланушыға болжатыңыз, жоғары, төмен немесе дұрыс екенін айтыңыз.",
            answer: "import random\\nsecret = random.randint(1, 10)\\nguess = int(input('Guess 1-10: '))\\nif guess == secret: print('Correct!')\\nelif guess < secret: print('Too low')\\nelse: print('Too high')",
            answerRu: "import random\\nsecret = random.randint(1, 10)\\nguess = int(input('Guess 1-10: '))\\nif guess == secret: print('Correct!')\\nelif guess < secret: print('Too low')\\nelse: print('Too high')",
            answerKk: "import random\\nsecret = random.randint(1, 10)\\nguess = int(input('Guess 1-10: '))\\nif guess == secret: print('Correct!')\\nelif guess < secret: print('Too low')\\nelse: print('Too high')",
            hint: "Use import random and random.randint(1, 10).",
            hintRu: "Используйте import random и random.randint(1, 10).",
            hintKk: "import random және random.randint(1, 10) пайдаланыңыз.",
            xp: 20
          }
        ]
      }
    ]
  },

  "Programming & AI_9": {
    planetName: "Programming & AI",
    introduction: {
      en: "Welcome to Programming & AI! You will deepen your Python skills by mastering data structures, functions, file handling, and building complete applications like games and calculators.",
      ru: "Добро пожаловать в Программирование и ИИ! Вы углубите навыки Python, освоив структуры данных, функции, работу с файлами и создание полноценных приложений — игр и калькуляторов."
    },
    sections: [
      {
        title: "Python Data Types",
        titleRu: "Типы данных Python",
        titleKk: "Python деректер түрлері",
        content: "Python has several built-in data types. Numeric types include int (whole numbers), float (decimals), and complex. Text is represented by str. Collections include list, tuple, dict, and set. Understanding when to use each type is key to writing efficient programs.",
        contentRu: "Python имеет несколько встроенных типов данных. Числовые типы: int (целые), float (дробные) и complex. Текст представлен типом str. Коллекции включают list, tuple, dict и set. Понимание, когда использовать каждый тип — ключ к эффективному программированию.",
        contentKk: "Python-да бірнеше кіріктірілген деректер түрлері бар. Сандық түрлер: int (бүтін сандар), float (ондық бөлшектер) және complex. Мәтін str түрімен берілген. Жинақтар list, tuple, dict және set қамтиды. Әр түрді қашан пайдалану керектігін түсіну — тиімді программалаудың кілті.",
        keyFormulas: [
          {
            formula: "isinstance(value, type) → True/False",
            description: "Check if a value belongs to a specific data type",
            descriptionRu: "Проверяет, принадлежит ли значение конкретному типу данных",
            descriptionKk: "Мәннің белгілі бір деректер түріне жататынын тексереді"
          },
          {
            formula: "int() / float() / str() / bool() — type casting",
            formulaRu: "int() / float() / str() / bool() — приведение типов",
            formulaKk: "int() / float() / str() / bool() — типті түрлендіру",
            description: "Convert between data types explicitly",
            descriptionRu: "Явное преобразование между типами данных",
            descriptionKk: "Деректер түрлері арасында нақты түрлендіру"
          }
        ],
        solvedExamples: [
          {
            question: "Convert the string '42' to an integer, add 8, and print the result.",
            questionRu: "Преобразуйте строку '42' в целое число, прибавьте 8 и выведите результат.",
            questionKk: "'42' жолын бүтін санға түрлендіріп, 8 қосып, нәтижені шығарыңыз.",
            steps: [
              { en: "Convert: num = int('42') — this gives the integer 42.", ru: "Преобразуйте: num = int('42') — получаем целое число 42.", kk: "Түрлендіріңіз: num = int('42') — бұл 42 бүтін санын береді." },
              { en: "Add and print: print(num + 8) — outputs 50.", ru: "Сложите и выведите: print(num + 8) — выводит 50.", kk: "Қосып шығарыңыз: print(num + 8) — 50 шығарады." }
            ],
            answer: "50",
            answerRu: "50",
            answerKk: "50"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the type of 3.14 in Python?",
            questionRu: "Какой тип у 3.14 в Python?",
            questionKk: "Python-да 3.14 қандай түрге жатады?",
            answer: "float",
            answerRu: "float",
            answerKk: "float",
            hint: "It has a decimal point.",
            hintRu: "Оно имеет десятичную точку.",
            hintKk: "Онда ондық нүкте бар.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the result of bool(0), bool(''), and bool('hello')?",
            questionRu: "Каков результат bool(0), bool('') и bool('hello')?",
            questionKk: "bool(0), bool('') және bool('hello') нәтижесі қандай?",
            answer: "False, False, True — zero and empty strings are falsy, non-empty strings are truthy.",
            answerRu: "False, False, True — ноль и пустые строки ложны, непустые строки истинны.",
            answerKk: "False, False, True — нөл мен бос жолдар жалған, бос емес жолдар ақиқат.",
            hint: "In Python, 'empty' values are considered False.",
            hintRu: "В Python 'пустые' значения считаются False.",
            hintKk: "Python-да 'бос' мәндер False болып саналады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write code that takes a user input and determines if it is an integer, float, or plain text string.",
            questionRu: "Напишите код, определяющий, является ли ввод пользователя целым числом, дробным или текстом.",
            questionKk: "Пайдаланушы енгізуінің бүтін сан, ондық бөлшек немесе мәтін екенін анықтайтын код жазыңыз.",
            answer: "s = input('Enter: ')\\nif s.isdigit(): print('integer')\\nelif s.replace('.','',1).isdigit(): print('float')\\nelse: print('string')",
            answerRu: "s = input('Enter: ')\\nif s.isdigit(): print('integer')\\nelif s.replace('.','',1).isdigit(): print('float')\\nelse: print('string')",
            answerKk: "s = input('Enter: ')\\nif s.isdigit(): print('integer')\\nelif s.replace('.','',1).isdigit(): print('float')\\nelse: print('string')",
            hint: "Use .isdigit() for integers and check for a single decimal point for floats.",
            hintRu: "Используйте .isdigit() для целых и проверку одной точки для дробных.",
            hintKk: "Бүтін сандар үшін .isdigit(), ондық бөлшектер үшін бір нүкте тексеруін пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Strings",
        titleRu: "Строки",
        titleKk: "Жолдар",
        content: "Strings are sequences of characters enclosed in quotes. Python provides many string methods like .upper(), .lower(), .strip(), .split(), and .replace(). Strings are immutable — you cannot change a character in place, but you can create new strings from old ones. String slicing with [start:end] extracts substrings.",
        contentRu: "Строки — это последовательности символов в кавычках. Python предоставляет множество строковых методов: .upper(), .lower(), .strip(), .split() и .replace(). Строки неизменяемы — нельзя изменить символ на месте, но можно создать новую строку из старой. Срезы строк [start:end] извлекают подстроки.",
        contentKk: "Жолдар — тырнақшадағы таңбалар тізбегі. Python көптеген жол әдістерін ұсынады: .upper(), .lower(), .strip(), .split() және .replace(). Жолдар өзгермейтін — таңбаны орнында өзгерту мүмкін емес, бірақ ескіден жаңа жол жасауға болады. [start:end] жол кесіндісі ішкі жолдарды шығарады.",
        keyFormulas: [
          {
            formula: "string[start:end:step]",
            description: "Slice a string to extract a substring",
            descriptionRu: "Срез строки для извлечения подстроки",
            descriptionKk: "Ішкі жолды шығару үшін жолды кесу"
          },
          {
            formula: "'separator'.join(list) / string.split('separator')",
            description: "Join list items into a string, or split string into a list",
            descriptionRu: "Объединить элементы списка в строку или разделить строку на список",
            descriptionKk: "Тізім элементтерін жолға біріктіру немесе жолды тізімге бөлу"
          }
        ],
        solvedExamples: [
          {
            question: "Reverse the string 'Python' using slicing.",
            questionRu: "Переверните строку 'Python' с помощью среза.",
            questionKk: "'Python' жолын кесінді арқылы кері аударыңыз.",
            steps: [
              { en: "Use slicing with step -1: 'Python'[::-1]", ru: "Используйте срез с шагом -1: 'Python'[::-1]", kk: "Қадамы -1 болатын кесінді пайдаланыңыз: 'Python'[::-1]" },
              { en: "The result is 'nohtyP' — each character is read from right to left.", ru: "Результат — 'nohtyP': каждый символ читается справа налево.", kk: "Нәтиже — 'nohtyP': әр таңба оңнан солға оқылады." }
            ],
            answer: "'nohtyP'",
            answerRu: "'nohtyP'",
            answerKk: "'nohtyP'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does 'hello'.upper() return?",
            questionRu: "Что возвращает 'hello'.upper()?",
            questionKk: "'hello'.upper() не қайтарады?",
            answer: "'HELLO'",
            answerRu: "'HELLO'",
            answerKk: "'HELLO'",
            hint: "upper() converts all letters to uppercase.",
            hintRu: "upper() переводит все буквы в верхний регистр.",
            hintKk: "upper() барлық әріптерді бас әріпке түрлендіреді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Extract the word 'World' from 'Hello, World!' using slicing.",
            questionRu: "Извлеките слово 'World' из 'Hello, World!' с помощью среза.",
            questionKk: "'Hello, World!' ішінен 'World' сөзін кесінді арқылы шығарыңыз.",
            answer: "'Hello, World!'[7:12]",
            answerRu: "'Hello, World!'[7:12]",
            answerKk: "'Hello, World!'[7:12]",
            hint: "Count the character positions starting from 0. W is at index 7.",
            hintRu: "Считайте позиции символов с 0. W находится по индексу 7.",
            hintKk: "Таңба позицияларын 0-ден бастап санаңыз. W индексі 7.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards), ignoring case and spaces.",
            questionRu: "Напишите функцию проверки, является ли строка палиндромом, игнорируя регистр и пробелы.",
            questionKk: "Жолдың палиндром екенін тексеретін функция жазыңыз, регистр мен бос орындарды елемей.",
            answer: "def is_palindrome(s):\\n    s = s.lower().replace(' ', '')\\n    return s == s[::-1]",
            answerRu: "def is_palindrome(s):\\n    s = s.lower().replace(' ', '')\\n    return s == s[::-1]",
            answerKk: "def is_palindrome(s):\\n    s = s.lower().replace(' ', '')\\n    return s == s[::-1]",
            hint: "First normalize the string, then compare it to its reverse.",
            hintRu: "Сначала нормализуйте строку, затем сравните с обратной.",
            hintKk: "Алдымен жолды қалыпқа келтіріңіз, содан кейін кері нұсқасымен салыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Lists & Tuples",
        titleRu: "Списки и кортежи",
        titleKk: "Тізімдер және кортеждер",
        content: "Lists are ordered, mutable collections created with square brackets: [1, 2, 3]. You can add items with .append(), remove with .remove(), and sort with .sort(). Tuples are similar but immutable — created with parentheses: (1, 2, 3). Use lists when data changes and tuples when it should stay fixed.",
        contentRu: "Списки — упорядоченные изменяемые коллекции в квадратных скобках: [1, 2, 3]. Можно добавлять элементы через .append(), удалять через .remove(), сортировать через .sort(). Кортежи похожи, но неизменяемы — создаются в круглых скобках: (1, 2, 3). Используйте списки для изменяемых данных, кортежи — для постоянных.",
        contentKk: "Тізімдер — тік жақшалармен жасалған реттелген, өзгертілетін жинақтар: [1, 2, 3]. .append() арқылы элемент қосуға, .remove() арқылы жоюға, .sort() арқылы сұрыптауға болады. Кортеждер ұқсас, бірақ өзгертілмейді — дөңгелек жақшалармен жасалады: (1, 2, 3). Деректер өзгерсе тізімдерді, тұрақты болса кортеждерді пайдаланыңыз.",
        keyFormulas: [
          {
            formula: "list.append(item) / list.pop() / list.sort()",
            description: "Common list methods for adding, removing, and sorting items",
            descriptionRu: "Основные методы списка для добавления, удаления и сортировки",
            descriptionKk: "Элементтерді қосу, жою және сұрыптау үшін негізгі тізім әдістері"
          },
          {
            formula: "len(collection) → number of items",
            formulaRu: "len(collection) → количество элементов",
            formulaKk: "len(collection) → элементтер саны",
            description: "Returns the number of elements in a list or tuple",
            descriptionRu: "Возвращает количество элементов в списке или кортеже",
            descriptionKk: "Тізім немесе кортеждегі элементтер санын қайтарады"
          }
        ],
        solvedExamples: [
          {
            question: "Create a list of 3 fruits, add a 4th, and print the list length.",
            questionRu: "Создайте список из 3 фруктов, добавьте 4-й и выведите длину списка.",
            questionKk: "3 жемістен тізім жасаңыз, 4-ін қосыңыз және тізім ұзындығын шығарыңыз.",
            steps: [
              { en: "Create list: fruits = ['apple', 'banana', 'cherry']", ru: "Создайте список: fruits = ['apple', 'banana', 'cherry']", kk: "Тізім жасаңыз: fruits = ['apple', 'banana', 'cherry']" },
              { en: "Add and print: fruits.append('date'); print(len(fruits)) — outputs 4.", ru: "Добавьте и выведите: fruits.append('date'); print(len(fruits)) — выводит 4.", kk: "Қосып шығарыңыз: fruits.append('date'); print(len(fruits)) — 4 шығарады." }
            ],
            answer: "4",
            answerRu: "4",
            answerKk: "4"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How do you add an item to the end of a list in Python?",
            questionRu: "Как добавить элемент в конец списка в Python?",
            questionKk: "Python-да тізімнің соңына элементті қалай қосасыз?",
            answer: "Use the .append() method.",
            answerRu: "Используйте метод .append().",
            answerKk: ".append() әдісін пайдаланыңыз.",
            hint: "It 'appends' the item to the end.",
            hintRu: "Он 'присоединяет' элемент в конец.",
            hintKk: "Ол элементті соңына 'қосады'.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the difference between a list and a tuple?",
            questionRu: "В чём разница между списком и кортежем?",
            questionKk: "Тізім мен кортеждің айырмашылығы неде?",
            answer: "Lists are mutable (can be changed), tuples are immutable (cannot be changed after creation).",
            answerRu: "Списки изменяемы (их можно менять), кортежи неизменяемы (их нельзя менять после создания).",
            answerKk: "Тізімдер өзгермелі (оларды өзгертуге болады), ал кортеждер өзгермейді (оларды жасағаннан кейін өзгерту мүмкін емес).",
            hint: "Try assigning to an index in each and see which fails.",
            hintRu: "Попробуйте присвоить значение по индексу в каждом — и увидите, что не работает.",
            hintKk: "Әрқайсысында индекс бойынша мән беріп көріңіз — қайсысы сәтсіз болатынын көріңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function that takes a list of numbers and returns a new list with only the unique values, preserving order.",
            questionRu: "Напишите функцию, которая принимает список чисел и возвращает новый список только с уникальными значениями, сохраняя порядок.",
            questionKk: "Сандар тізімін қабылдайтын және тек бірегей мәндері бар жаңа тізім қайтаратын функция жазыңыз, ретті сақтай отырып.",
            answer: "def unique(lst):\\n    seen = []\\n    for x in lst:\\n        if x not in seen:\\n            seen.append(x)\\n    return seen",
            answerRu: "def unique(lst):\\n    seen = []\\n    for x in lst:\\n        if x not in seen:\\n            seen.append(x)\\n    return seen",
            answerKk: "def unique(lst):\\n    seen = []\\n    for x in lst:\\n        if x not in seen:\\n            seen.append(x)\\n    return seen",
            hint: "Keep a separate list of values you have already seen.",
            hintRu: "Ведите отдельный список уже встреченных значений.",
            hintKk: "Бұрын көрген мәндердің жеке тізімін жүргізіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Dictionaries",
        titleRu: "Словари",
        titleKk: "Сөздіктер",
        content: "Dictionaries store data as key-value pairs using curly braces: {'name': 'Alice', 'age': 15}. Keys must be unique and immutable (strings, numbers, tuples). You access values by key: d['name']. Dictionaries are perfect for representing structured data like student records or game inventories.",
        contentRu: "Словари хранят данные в виде пар ключ-значение в фигурных скобках: {'name': 'Alice', 'age': 15}. Ключи должны быть уникальными и неизменяемыми (строки, числа, кортежи). Доступ к значениям по ключу: d['name']. Словари идеальны для структурированных данных — записей студентов или игровых инвентарей.",
        contentKk: "Сөздіктер деректерді кілт-мән жұптары ретінде фигуралық жақшаларда сақтайды: {'name': 'Alice', 'age': 15}. Кілттер бірегей және өзгертілмейтін болуы керек (жолдар, сандар, кортеждер). Мәндерге кілт арқылы қол жеткізіледі: d['name']. Сөздіктер құрылымдық деректер — студент жазбалары немесе ойын инвентарлары үшін тамаша.",
        keyFormulas: [
          {
            formula: "d = {'key': 'value'}; d['key'] → 'value'",
            description: "Create a dictionary and access values by key",
            descriptionRu: "Создание словаря и доступ к значениям по ключу",
            descriptionKk: "Сөздік жасау және мәндерге кілт арқылы қол жеткізу"
          },
          {
            formula: "d.get('key', default) / d.keys() / d.values() / d.items()",
            description: "Safe access with default, and methods to get keys, values, or pairs",
            descriptionRu: "Безопасный доступ с умолчанием и методы для получения ключей, значений или пар",
            descriptionKk: "Әдепкі мәнмен қауіпсіз қол жеткізу және кілттерді, мәндерді немесе жұптарды алу әдістері"
          }
        ],
        solvedExamples: [
          {
            question: "Create a dictionary for a student with name, age, and grade, then add a new key 'school'.",
            questionRu: "Создайте словарь для студента с именем, возрастом и классом, затем добавьте ключ 'school'.",
            questionKk: "Аты, жасы және сыныбы бар оқушы үшін сөздік жасаңыз, содан кейін 'school' кілтін қосыңыз.",
            steps: [
              { en: "Create: student = {'name': 'Ali', 'age': 15, 'grade': 9}", ru: "Создайте: student = {'name': 'Ali', 'age': 15, 'grade': 9}", kk: "Жасаңыз: student = {'name': 'Ali', 'age': 15, 'grade': 9}" },
              { en: "Add key: student['school'] = 'NIS'. Now the dictionary has 4 key-value pairs.", ru: "Добавьте ключ: student['school'] = 'NIS'. Теперь в словаре 4 пары.", kk: "Кілт қосыңыз: student['school'] = 'NIS'. Енді сөздікте 4 жұп бар." }
            ],
            answer: "{'name': 'Ali', 'age': 15, 'grade': 9, 'school': 'NIS'}",
            answerRu: "{'name': 'Ali', 'age': 15, 'grade': 9, 'school': 'NIS'}",
            answerKk: "{'name': 'Ali', 'age': 15, 'grade': 9, 'school': 'NIS'}"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How do you access the value for key 'name' in dictionary d?",
            questionRu: "Как получить значение по ключу 'name' в словаре d?",
            questionKk: "d сөздігінде 'name' кілтінің мәніне қалай қол жеткізесіз?",
            answer: "d['name']",
            answerRu: "d['name']",
            answerKk: "d['name']",
            hint: "Use square brackets with the key name.",
            hintRu: "Используйте квадратные скобки с именем ключа.",
            hintKk: "Кілт атымен тік жақшаларды пайдаланыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write code that counts how many times each word appears in a list: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'].",
            questionRu: "Напишите код, подсчитывающий количество вхождений каждого слова в списке: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'].",
            questionKk: "Тізімдегі әр сөздің қанша рет кездесетінін есептейтін код жазыңыз: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'].",
            answer: "counts = {}\\nfor word in words:\\n    counts[word] = counts.get(word, 0) + 1\\n# {'apple': 3, 'banana': 2, 'cherry': 1}",
            answerRu: "counts = {}\\nfor word in words:\\n    counts[word] = counts.get(word, 0) + 1\\n# {'apple': 3, 'banana': 2, 'cherry': 1}",
            answerKk: "counts = {}\\nfor word in words:\\n    counts[word] = counts.get(word, 0) + 1\\n# {'apple': 3, 'banana': 2, 'cherry': 1}",
            hint: "Use .get(key, 0) to start counting from 0 for new words.",
            hintRu: "Используйте .get(key, 0) для начала счёта с 0 для новых слов.",
            hintKk: "Жаңа сөздер үшін 0-ден санауды бастау үшін .get(key, 0) пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function that takes two dictionaries and merges them. If both have the same key, sum the values.",
            questionRu: "Напишите функцию, объединяющую два словаря. Если оба имеют одинаковый ключ, сложите значения.",
            questionKk: "Екі сөздікті біріктіретін функция жазыңыз. Екеуінде де бірдей кілт болса, мәндерді қосыңыз.",
            answer: "def merge_sum(d1, d2):\\n    result = dict(d1)\\n    for k, v in d2.items():\\n        result[k] = result.get(k, 0) + v\\n    return result",
            answerRu: "def merge_sum(d1, d2):\\n    result = dict(d1)\\n    for k, v in d2.items():\\n        result[k] = result.get(k, 0) + v\\n    return result",
            answerKk: "def merge_sum(d1, d2):\\n    result = dict(d1)\\n    for k, v in d2.items():\\n        result[k] = result.get(k, 0) + v\\n    return result",
            hint: "Copy the first dict, then iterate over the second and add values.",
            hintRu: "Скопируйте первый словарь, затем переберите второй и сложите значения.",
            hintKk: "Бірінші сөздікті көшіріңіз, содан кейін екіншісін қарап мәндерді қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Functions & Parameters",
        titleRu: "Функции и параметры",
        titleKk: "Функциялар және параметрлер",
        content: "Functions can have default parameters, accept variable numbers of arguments with *args, and return multiple values using tuples. Understanding scope is important: variables inside a function are local and do not exist outside it. Well-designed functions do one thing and do it well.",
        contentRu: "Функции могут иметь параметры по умолчанию, принимать переменное число аргументов через *args и возвращать несколько значений через кортежи. Понимание области видимости важно: переменные внутри функции — локальные и не существуют снаружи. Хорошая функция делает одну задачу и делает её хорошо.",
        contentKk: "Функциялардың әдепкі параметрлері болуы, *args арқылы айнымалы санды аргументтер қабылдауы және кортеждер арқылы бірнеше мән қайтаруы мүмкін. Көріну аймағын түсіну маңызды: функция ішіндегі айнымалылар жергілікті және сыртында жоқ. Жақсы жобаланған функция бір нәрсені жасайды және оны жақсы жасайды.",
        keyFormulas: [
          {
            formula: "def func(a, b=10, *args):\\n    return a + b",
            description: "Function with default parameter and variable arguments",
            descriptionRu: "Функция с параметром по умолчанию и переменными аргументами",
            descriptionKk: "Әдепкі параметрі және айнымалы аргументтері бар функция"
          }
        ],
        solvedExamples: [
          {
            question: "Write a function greet(name, greeting='Hello') that returns a greeting message.",
            questionRu: "Напишите функцию greet(name, greeting='Hello'), возвращающую приветствие.",
            questionKk: "Сәлемдесу хабарламасын қайтаратын greet(name, greeting='Hello') функциясын жазыңыз.",
            steps: [
              { en: "Define with default: def greet(name, greeting='Hello'):", ru: "Определите с умолчанием: def greet(name, greeting='Hello'):", kk: "Әдепкі мәнмен анықтаңыз: def greet(name, greeting='Hello'):" },
              { en: "Return: return f'{greeting}, {name}!'. greet('Ali') returns 'Hello, Ali!', greet('Ali', 'Hi') returns 'Hi, Ali!'.", ru: "Верните: return f'{greeting}, {name}!'. greet('Ali') → 'Hello, Ali!', greet('Ali', 'Hi') → 'Hi, Ali!'.", kk: "Қайтарыңыз: return f'{greeting}, {name}!'. greet('Ali') → 'Hello, Ali!', greet('Ali', 'Hi') → 'Hi, Ali!'." }
            ],
            answer: "def greet(name, greeting='Hello'): return f'{greeting}, {name}!'",
            answerRu: "def greet(name, greeting='Hello'): return f'{greeting}, {name}!'",
            answerKk: "def greet(name, greeting='Hello'): return f'{greeting}, {name}!'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a default parameter in a function?",
            questionRu: "Что такое параметр по умолчанию в функции?",
            questionKk: "Функциядағы әдепкі параметр дегеніміз не?",
            answer: "A parameter that has a pre-set value used when no argument is provided for it.",
            answerRu: "Параметр, имеющий заранее установленное значение, которое используется, если аргумент для него не передан.",
            answerKk: "Аргумент берілмеген кезде қолданылатын, алдын ала орнатылған мәні бар параметр.",
            hint: "Think about what happens when you call a function with fewer arguments than parameters.",
            hintRu: "Подумайте, что происходит при вызове функции с меньшим числом аргументов, чем параметров.",
            hintKk: "Функцияны параметрлерден аз аргументтермен шақырғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a function that returns both the minimum and maximum of a list of numbers.",
            questionRu: "Напишите функцию, возвращающую минимум и максимум списка чисел.",
            questionKk: "Сандар тізімінің минимумы мен максимумын қайтаратын функция жазыңыз.",
            answer: "def min_max(lst): return (min(lst), max(lst))",
            answerRu: "def min_max(lst): return (min(lst), max(lst))",
            answerKk: "def min_max(lst): return (min(lst), max(lst))",
            hint: "Return a tuple with two values.",
            hintRu: "Верните кортеж с двумя значениями.",
            hintKk: "Екі мәні бар кортеж қайтарыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function calculate(a, b, operation='add') that supports 'add', 'subtract', 'multiply', 'divide' operations with error handling for division by zero.",
            questionRu: "Напишите функцию calculate(a, b, operation='add'), поддерживающую 'add', 'subtract', 'multiply', 'divide' с обработкой деления на ноль.",
            questionKk: "calculate(a, b, operation='add') функциясын жазыңыз, ол 'add', 'subtract', 'multiply', 'divide' амалдарын нөлге бөлу қатесін өңдеумен қолдайды.",
            answer: "def calculate(a, b, op='add'):\\n    if op == 'add': return a + b\\n    elif op == 'subtract': return a - b\\n    elif op == 'multiply': return a * b\\n    elif op == 'divide': return a / b if b != 0 else 'Error: division by zero'",
            answerRu: "def calculate(a, b, op='add'):\\n    if op == 'add': return a + b\\n    elif op == 'subtract': return a - b\\n    elif op == 'multiply': return a * b\\n    elif op == 'divide': return a / b if b != 0 else 'Error: division by zero'",
            answerKk: "def calculate(a, b, op='add'):\\n    if op == 'add': return a + b\\n    elif op == 'subtract': return a - b\\n    elif op == 'multiply': return a * b\\n    elif op == 'divide': return a / b if b != 0 else 'Error: division by zero'",
            hint: "Use if/elif for each operation and check b != 0 before dividing.",
            hintRu: "Используйте if/elif для каждой операции и проверку b != 0 перед делением.",
            hintKk: "Әр амал үшін if/elif пайдаланыңыз және бөлу алдында b != 0 тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "File I/O",
        titleRu: "Работа с файлами",
        titleKk: "Файлдармен жұмыс",
        content: "Python can read from and write to files using the open() function. Always use 'with' statements to ensure files are properly closed. The main modes are 'r' for reading, 'w' for writing (overwrites), and 'a' for appending. File I/O is essential for saving data between program runs.",
        contentRu: "Python может читать и записывать файлы с помощью функции open(). Всегда используйте оператор 'with' для гарантированного закрытия файлов. Основные режимы: 'r' — чтение, 'w' — запись (перезаписывает), 'a' — добавление. Работа с файлами необходима для сохранения данных между запусками программы.",
        contentKk: "Python open() функциясы арқылы файлдарды оқи және жаза алады. Файлдардың дұрыс жабылуын қамтамасыз ету үшін әрқашан 'with' операторын пайдаланыңыз. Негізгі режимдер: 'r' — оқу, 'w' — жазу (қайта жазады), 'a' — қосу. Файлдармен жұмыс бағдарлама іске қосулары арасында деректерді сақтау үшін қажет.",
        keyFormulas: [
          {
            formula: "with open('file.txt', 'r') as f:\\n    data = f.read()",
            description: "Safely open and read a file using a context manager",
            descriptionRu: "Безопасное открытие и чтение файла через контекстный менеджер",
            descriptionKk: "Контекст менеджері арқылы файлды қауіпсіз ашу және оқу"
          }
        ],
        solvedExamples: [
          {
            question: "Write a program that saves a list of names to a file, one per line.",
            questionRu: "Напишите программу, сохраняющую список имён в файл, по одному на строку.",
            questionKk: "Аттар тізімін файлға, әр жолға біреуден сақтайтын бағдарлама жазыңыз.",
            steps: [
              { en: "Open file for writing: with open('names.txt', 'w') as f:", ru: "Откройте файл для записи: with open('names.txt', 'w') as f:", kk: "Файлды жазу үшін ашыңыз: with open('names.txt', 'w') as f:" },
              { en: "Loop and write: for name in names: f.write(name + '\\n')", ru: "Цикл и запись: for name in names: f.write(name + '\\n')", kk: "Цикл және жазу: for name in names: f.write(name + '\\n')" }
            ],
            answer: "names = ['Alice', 'Bob']\\nwith open('names.txt', 'w') as f:\\n    for name in names:\\n        f.write(name + '\\n')",
            answerRu: "names = ['Alice', 'Bob']\\nwith open('names.txt', 'w') as f:\\n    for name in names:\\n        f.write(name + '\\n')",
            answerKk: "names = ['Alice', 'Bob']\\nwith open('names.txt', 'w') as f:\\n    for name in names:\\n        f.write(name + '\\n')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What mode do you use to read a file in Python: 'r', 'w', or 'a'?",
            questionRu: "Какой режим используется для чтения файла в Python: 'r', 'w' или 'a'?",
            questionKk: "Python-да файлды оқу үшін қай режим пайдаланылады: 'r', 'w' немесе 'a'?",
            answer: "'r' — read mode.",
            answerRu: "'r' — режим чтения.",
            answerKk: "'r' — оқу режимі.",
            hint: "It stands for 'read'.",
            hintRu: "Это сокращение от 'read' (чтение).",
            hintKk: "Бұл 'read' (оқу) сөзінің қысқартуы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write code that reads a file and prints the number of lines in it.",
            questionRu: "Напишите код, читающий файл и выводящий количество строк в нём.",
            questionKk: "Файлды оқитын және ондағы жолдар санын шығаратын код жазыңыз.",
            answer: "with open('file.txt', 'r') as f:\\n    lines = f.readlines()\\n    print(len(lines))",
            answerRu: "with open('file.txt', 'r') as f:\\n    lines = f.readlines()\\n    print(len(lines))",
            answerKk: "with open('file.txt', 'r') as f:\\n    lines = f.readlines()\\n    print(len(lines))",
            hint: "Use .readlines() to get a list of lines, then use len().",
            hintRu: "Используйте .readlines() для списка строк, затем len().",
            hintKk: "Жолдар тізімін алу үшін .readlines(), содан кейін len() пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a program that reads a CSV-like file where each line has 'name,score', and prints the student with the highest score.",
            questionRu: "Напишите программу, читающую CSV-файл, где каждая строка 'имя,балл', и выводящую студента с наивысшим баллом.",
            questionKk: "Әр жолда 'аты,ұпай' бар CSV-файлды оқитын және ең жоғары ұпайлы оқушыны шығаратын бағдарлама жазыңыз.",
            answer: "with open('scores.csv') as f:\\n    best_name, best_score = '', 0\\n    for line in f:\\n        name, score = line.strip().split(',')\\n        if int(score) > best_score:\\n            best_name, best_score = name, int(score)\\nprint(f'{best_name}: {best_score}')",
            answerRu: "with open('scores.csv') as f:\\n    best_name, best_score = '', 0\\n    for line in f:\\n        name, score = line.strip().split(',')\\n        if int(score) > best_score:\\n            best_name, best_score = name, int(score)\\nprint(f'{best_name}: {best_score}')",
            answerKk: "with open('scores.csv') as f:\\n    best_name, best_score = '', 0\\n    for line in f:\\n        name, score = line.strip().split(',')\\n        if int(score) > best_score:\\n            best_name, best_score = name, int(score)\\nprint(f'{best_name}: {best_score}')",
            hint: "Split each line by comma and compare scores as integers.",
            hintRu: "Разделите строку по запятой и сравнивайте баллы как целые числа.",
            hintKk: "Әр жолды үтір бойынша бөліп, ұпайларды бүтін сандар ретінде салыстырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Error Handling",
        titleRu: "Обработка ошибок",
        titleKk: "Қателерді өңдеу",
        content: "Error handling with try/except prevents your program from crashing when something goes wrong. You wrap risky code in a try block and catch specific exceptions in except blocks. Common exceptions include ValueError, TypeError, FileNotFoundError, and ZeroDivisionError. Always catch specific exceptions rather than using bare except.",
        contentRu: "Обработка ошибок через try/except предотвращает сбой программы при ошибках. Рискованный код оборачивается в блок try, а конкретные исключения перехватываются в except. Частые исключения: ValueError, TypeError, FileNotFoundError, ZeroDivisionError. Всегда перехватывайте конкретные исключения, а не используйте голый except.",
        contentKk: "try/except арқылы қателерді өңдеу бір нәрсе дұрыс болмағанда бағдарламаның бұзылуын болдырмайды. Қауіпті кодты try блогына оралады және нақты ерекшеліктер except блоктарында ұсталады. Жиі кездесетін ерекшеліктер: ValueError, TypeError, FileNotFoundError, ZeroDivisionError. Жалаң except пайдаланудың орнына әрқашан нақты ерекшеліктерді ұстаңыз.",
        keyFormulas: [
          {
            formula: "try:\\n    risky_code()\\nexcept ValueError as e:\\n    handle_error(e)\\nfinally:\\n    cleanup()",
            description: "Try/except/finally structure for safe error handling",
            descriptionRu: "Структура try/except/finally для безопасной обработки ошибок",
            descriptionKk: "Қауіпсіз қателерді өңдеу үшін try/except/finally құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "Write code that safely converts user input to an integer, handling invalid input.",
            questionRu: "Напишите код, безопасно преобразующий ввод пользователя в целое число с обработкой некорректного ввода.",
            questionKk: "Пайдаланушы енгізуін бүтін санға қауіпсіз түрлендіретін, жарамсыз енгізуді өңдейтін код жазыңыз.",
            steps: [
              { en: "Wrap the conversion in try: try: num = int(input('Number: '))", ru: "Оберните преобразование в try: try: num = int(input('Число: '))", kk: "Түрлендіруді try-ге оралаңыз: try: num = int(input('Сан: '))" },
              { en: "Catch ValueError: except ValueError: print('Please enter a valid number')", ru: "Перехватите ValueError: except ValueError: print('Введите корректное число')", kk: "ValueError ұстаңыз: except ValueError: print('Жарамды сан енгізіңіз')" }
            ],
            answer: "try:\\n    num = int(input('Number: '))\\nexcept ValueError:\\n    print('Please enter a valid number')",
            answerRu: "try:\\n    num = int(input('Number: '))\\nexcept ValueError:\\n    print('Please enter a valid number')",
            answerKk: "try:\\n    num = int(input('Number: '))\\nexcept ValueError:\\n    print('Please enter a valid number')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What keywords are used for error handling in Python?",
            questionRu: "Какие ключевые слова используются для обработки ошибок в Python?",
            questionKk: "Python-да қателерді өңдеу үшін қандай кілт сөздер пайдаланылады?",
            answer: "try, except, finally",
            answerRu: "try, except, finally",
            answerKk: "try, except, finally",
            hint: "You 'try' code and catch 'exceptions'.",
            hintRu: "Вы 'пробуете' код и ловите 'исключения'.",
            hintKk: "Сіз кодты 'байқап' көресіз және 'ерекшеліктерді' ұстайсыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What exception is raised when you divide by zero in Python?",
            questionRu: "Какое исключение возникает при делении на ноль в Python?",
            questionKk: "Python-да нөлге бөлгенде қандай ерекшелік пайда болады?",
            answer: "ZeroDivisionError",
            answerRu: "ZeroDivisionError",
            answerKk: "ZeroDivisionError",
            hint: "The name describes exactly what happened.",
            hintRu: "Название описывает именно то, что произошло.",
            hintKk: "Атауы не болғанын дәл сипаттайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function safe_divide(a, b) that returns the result of a/b, but returns None and prints an error message if b is zero or if inputs are not numbers.",
            questionRu: "Напишите функцию safe_divide(a, b), возвращающую a/b, но возвращающую None с сообщением об ошибке при делении на ноль или нечисловых входных данных.",
            questionKk: "a/b нәтижесін қайтаратын safe_divide(a, b) функциясын жазыңыз, бірақ b нөл болса немесе енгізулер сан болмаса None қайтарып қате хабарлама шығарсын.",
            answer: "def safe_divide(a, b):\\n    try:\\n        return a / b\\n    except ZeroDivisionError:\\n        print('Cannot divide by zero')\\n        return None\\n    except TypeError:\\n        print('Inputs must be numbers')\\n        return None",
            answerRu: "def safe_divide(a, b):\\n    try:\\n        return a / b\\n    except ZeroDivisionError:\\n        print('Cannot divide by zero')\\n        return None\\n    except TypeError:\\n        print('Inputs must be numbers')\\n        return None",
            answerKk: "def safe_divide(a, b):\\n    try:\\n        return a / b\\n    except ZeroDivisionError:\\n        print('Cannot divide by zero')\\n        return None\\n    except TypeError:\\n        print('Inputs must be numbers')\\n        return None",
            hint: "Catch ZeroDivisionError and TypeError separately.",
            hintRu: "Перехватите ZeroDivisionError и TypeError отдельно.",
            hintKk: "ZeroDivisionError және TypeError жеке ұстаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Modules & Libraries",
        titleRu: "Модули и библиотеки",
        titleKk: "Модульдер және кітапханалар",
        content: "Modules are Python files that contain reusable code. You import them with the import keyword. Python's standard library includes math, random, datetime, os, and many more. Third-party libraries like requests and pygame are installed with pip. Using libraries saves enormous amounts of development time.",
        contentRu: "Модули — это файлы Python с многоразовым кодом. Их импортируют ключевым словом import. Стандартная библиотека Python включает math, random, datetime, os и многие другие. Сторонние библиотеки (requests, pygame) устанавливаются через pip. Использование библиотек экономит огромное количество времени разработки.",
        contentKk: "Модульдер — қайта пайдалануға болатын коды бар Python файлдары. Оларды import кілт сөзімен импорттайды. Python стандартты кітапханасы math, random, datetime, os және басқаларды қамтиды. Үшінші тарап кітапханалары (requests, pygame) pip арқылы орнатылады. Кітапханаларды пайдалану әзірлеу уақытын үнемдейді.",
        keyFormulas: [
          {
            formula: "import math / from random import randint",
            description: "Import an entire module or specific functions from it",
            descriptionRu: "Импортировать весь модуль или конкретные функции из него",
            descriptionKk: "Бүкіл модульді немесе одан нақты функцияларды импорттау"
          }
        ],
        solvedExamples: [
          {
            question: "Use the math module to calculate the square root of 144.",
            questionRu: "Используйте модуль math для вычисления квадратного корня из 144.",
            questionKk: "144-тің квадрат түбірін есептеу үшін math модулін пайдаланыңыз.",
            steps: [
              { en: "Import the module: import math", ru: "Импортируйте модуль: import math", kk: "Модульді импорттаңыз: import math" },
              { en: "Use the function: print(math.sqrt(144)) — outputs 12.0", ru: "Используйте функцию: print(math.sqrt(144)) — выводит 12.0", kk: "Функцияны пайдаланыңыз: print(math.sqrt(144)) — 12.0 шығарады" }
            ],
            answer: "import math; print(math.sqrt(144)) → 12.0",
            answerRu: "import math; print(math.sqrt(144)) → 12.0",
            answerKk: "import math; print(math.sqrt(144)) → 12.0"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What keyword is used to import a module in Python?",
            questionRu: "Какое ключевое слово используется для импорта модуля в Python?",
            questionKk: "Python-да модуль импорттау үшін қай кілт сөз пайдаланылады?",
            answer: "import",
            answerRu: "import",
            answerKk: "import",
            hint: "You literally 'import' the module.",
            hintRu: "Вы буквально 'импортируете' модуль.",
            hintKk: "Сіз модульді сөзбе-сөз 'импорттайсыз'.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write code that generates a random number between 1 and 100 using the random module.",
            questionRu: "Напишите код, генерирующий случайное число от 1 до 100 с помощью модуля random.",
            questionKk: "random модулін пайдаланып 1-ден 100-ге дейін кездейсоқ сан генерациялайтын код жазыңыз.",
            answer: "import random\\nnum = random.randint(1, 100)\\nprint(num)",
            answerRu: "import random\\nnum = random.randint(1, 100)\\nprint(num)",
            answerKk: "import random\\nnum = random.randint(1, 100)\\nprint(num)",
            hint: "Use random.randint(min, max) for an inclusive random integer.",
            hintRu: "Используйте random.randint(min, max) для включительного случайного целого числа.",
            hintKk: "Қоса алғандағы кездейсоқ бүтін сан үшін random.randint(min, max) пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a program using the datetime module that calculates how many days are left until New Year (January 1 of next year).",
            questionRu: "Напишите программу с модулем datetime, вычисляющую, сколько дней осталось до Нового года (1 января следующего года).",
            questionKk: "Жаңа жылға (келесі жылдың 1 қаңтарына) қанша күн қалғанын есептейтін datetime модулі бар бағдарлама жазыңыз.",
            answer: "from datetime import date\\ntoday = date.today()\\nnew_year = date(today.year + 1, 1, 1)\\ndays_left = (new_year - today).days\\nprint(f'{days_left} days until New Year')",
            answerRu: "from datetime import date\\ntoday = date.today()\\nnew_year = date(today.year + 1, 1, 1)\\ndays_left = (new_year - today).days\\nprint(f'{days_left} days until New Year')",
            answerKk: "from datetime import date\\ntoday = date.today()\\nnew_year = date(today.year + 1, 1, 1)\\ndays_left = (new_year - today).days\\nprint(f'{days_left} days until New Year')",
            hint: "Subtract two date objects to get a timedelta with .days attribute.",
            hintRu: "Вычтите два объекта date для получения timedelta с атрибутом .days.",
            hintKk: "Екі date объектісін алып .days атрибуты бар timedelta алыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Simple Games",
        titleRu: "Простые игры",
        titleKk: "Қарапайым ойындар",
        content: "Building games is an exciting way to apply programming skills. A text-based game combines loops, conditionals, functions, and random numbers. The game loop pattern — show state, get input, update state, repeat — is used in virtually all games. Start with simple games like Rock-Paper-Scissors or hangman before attempting complex ones.",
        contentRu: "Создание игр — увлекательный способ применить навыки программирования. Текстовая игра сочетает циклы, условия, функции и случайные числа. Паттерн игрового цикла — показать состояние, получить ввод, обновить состояние, повторить — используется практически во всех играх. Начните с простых игр, таких как «Камень-ножницы-бумага» или «Виселица».",
        contentKk: "Ойындар жасау — программалау дағдыларын қолданудың қызықты жолы. Мәтінге негізделген ойын циклдерді, шартты операторларды, функцияларды және кездейсоқ сандарды біріктіреді. Ойын циклінің үлгісі — күйді көрсету, енгізу алу, күйді жаңарту, қайталау — барлық ойындарда қолданылады. Күрделі ойындарға дейін «Тас-қайшы-қағаз» сияқты қарапайым ойындардан бастаңыз.",
        keyFormulas: [
          {
            formula: "while playing:\\n    show_state()\\n    get_input()\\n    update_state()",
            description: "The game loop pattern used in virtually all games",
            descriptionRu: "Паттерн игрового цикла, используемый практически во всех играх",
            descriptionKk: "Барлық ойындарда қолданылатын ойын циклінің үлгісі"
          }
        ],
        solvedExamples: [
          {
            question: "Write a Rock-Paper-Scissors game against the computer.",
            questionRu: "Напишите игру «Камень-ножницы-бумага» против компьютера.",
            questionKk: "Компьютерге қарсы «Тас-қайшы-қағаз» ойынын жазыңыз.",
            steps: [
              { en: "Computer picks randomly: import random; computer = random.choice(['rock', 'paper', 'scissors']); player = input('Choose: ')", ru: "Компьютер выбирает случайно: import random; computer = random.choice(['rock', 'paper', 'scissors']); player = input('Выберите: ')", kk: "Компьютер кездейсоқ таңдайды: import random; computer = random.choice(['rock', 'paper', 'scissors']); player = input('Таңдаңыз: ')" },
              { en: "Compare: if player == computer → tie; rock beats scissors, scissors beats paper, paper beats rock.", ru: "Сравните: player == computer → ничья; камень побеждает ножницы, ножницы — бумагу, бумага — камень.", kk: "Салыстырыңыз: player == computer → тең; тас қайшыны, қайшы қағазды, қағаз тасты жеңеді." }
            ],
            answer: "import random\\nchoices = ['rock', 'paper', 'scissors']\\ncomputer = random.choice(choices)\\nplayer = input('rock/paper/scissors: ')\\nif player == computer: print('Tie')\\nelif (player=='rock' and computer=='scissors') or (player=='scissors' and computer=='paper') or (player=='paper' and computer=='rock'): print('You win!')\\nelse: print('Computer wins!')",
            answerRu: "import random\\nchoices = ['rock', 'paper', 'scissors']\\ncomputer = random.choice(choices)\\nplayer = input('rock/paper/scissors: ')\\nif player == computer: print('Tie')\\nelif (player=='rock' and computer=='scissors') or (player=='scissors' and computer=='paper') or (player=='paper' and computer=='rock'): print('You win!')\\nelse: print('Computer wins!')",
            answerKk: "import random\\nchoices = ['rock', 'paper', 'scissors']\\ncomputer = random.choice(choices)\\nplayer = input('rock/paper/scissors: ')\\nif player == computer: print('Tie')\\nelif (player=='rock' and computer=='scissors') or (player=='scissors' and computer=='paper') or (player=='paper' and computer=='rock'): print('You win!')\\nelse: print('Computer wins!')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three main parts of a game loop?",
            questionRu: "Какие три основные части игрового цикла?",
            questionKk: "Ойын циклінің үш негізгі бөлігі қандай?",
            answer: "Show state, get input, update state.",
            answerRu: "Показать состояние, получить ввод, обновить состояние.",
            answerKk: "Күйін көрсету, енгізуді алу, күйін жаңарту.",
            hint: "Think: display, interact, change.",
            hintRu: "Подумайте: показать, взаимодействовать, изменить.",
            hintKk: "Ойлаңыз: көрсету, өзара әрекеттесу, өзгерту.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How would you let a player play Rock-Paper-Scissors multiple rounds until they type 'quit'?",
            questionRu: "Как позволить игроку играть в «Камень-ножницы-бумагу» несколько раундов, пока не введёт 'quit'?",
            questionKk: "Ойыншыға 'quit' тергенше бірнеше раунд «Тас-қайшы-қағаз» ойнатуды қалай жасайсыз?",
            answer: "Wrap the game in a while True loop and break when input equals 'quit'.",
            answerRu: "Оберните игру в цикл while True и прерывайте его, когда ввод равен 'quit'.",
            answerKk: "Ойынды while True цикліне ораңыз да, енгізу 'quit' болғанда циклді тоқтатыңыз.",
            hint: "Use while True with a break condition.",
            hintRu: "Используйте while True с условием break.",
            hintKk: "break шартымен while True пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a number guessing game where the computer picks 1-100, gives 'higher/lower' hints, and counts the number of guesses. Print the count when the player wins.",
            questionRu: "Спроектируйте игру угадывания числа: компьютер загадывает 1-100, даёт подсказки 'больше/меньше', считает попытки. Выведите счёт при победе.",
            questionKk: "Компьютер 1-100 таңдайтын, 'жоғары/төмен' кеңестер беретін және болжау санын есептейтін сан болжау ойынын жобалаңыз. Ойыншы жеңгенде санды шығарыңыз.",
            answer: "import random\\nsecret = random.randint(1, 100)\\nguesses = 0\\nwhile True:\\n    guess = int(input('Guess: '))\\n    guesses += 1\\n    if guess == secret:\\n        print(f'Correct in {guesses} guesses!')\\n        break\\n    elif guess < secret: print('Higher')\\n    else: print('Lower')",
            answerRu: "import random\\nsecret = random.randint(1, 100)\\nguesses = 0\\nwhile True:\\n    guess = int(input('Guess: '))\\n    guesses += 1\\n    if guess == secret:\\n        print(f'Correct in {guesses} guesses!')\\n        break\\n    elif guess < secret: print('Higher')\\n    else: print('Lower')",
            answerKk: "import random\\nsecret = random.randint(1, 100)\\nguesses = 0\\nwhile True:\\n    guess = int(input('Guess: '))\\n    guesses += 1\\n    if guess == secret:\\n        print(f'Correct in {guesses} guesses!')\\n        break\\n    elif guess < secret: print('Higher')\\n    else: print('Lower')",
            hint: "Use a counter variable that increments each loop iteration.",
            hintRu: "Используйте переменную-счётчик, увеличивающуюся каждую итерацию.",
            hintKk: "Әр цикл итерациясында артатын санауыш айнымалысын пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Calculator App",
        titleRu: "Приложение-калькулятор",
        titleKk: "Калькулятор қосымшасы",
        content: "Building a calculator app combines everything you have learned: input/output, functions, conditionals, loops, and error handling. A good calculator handles basic operations, validates input, and runs in a loop until the user quits. This is a complete real-world project that demonstrates practical Python skills.",
        contentRu: "Создание калькулятора объединяет всё изученное: ввод/вывод, функции, условия, циклы и обработку ошибок. Хороший калькулятор выполняет базовые операции, валидирует ввод и работает в цикле до выхода пользователя. Это полноценный практический проект, демонстрирующий навыки Python.",
        contentKk: "Калькулятор жасау сіз үйренгеннің бәрін біріктіреді: енгізу/шығару, функциялар, шартты операторлар, циклдер және қателерді өңдеу. Жақсы калькулятор негізгі амалдарды орындайды, енгізуді тексереді және пайдаланушы шыққанша циклде жұмыс істейді. Бұл Python дағдыларын көрсететін толық практикалық жоба.",
        keyFormulas: [
          {
            formula: "eval() — avoid! Use explicit operations instead",
            formulaRu: "eval() — избегайте! Используйте явные операции вместо этого",
            formulaKk: "eval() — қолданбаңыз! Оның орнына нақты амалдарды пайдаланыңыз",
            description: "Never use eval() for user input — it is a security risk; use if/elif for operations",
            descriptionRu: "Никогда не используйте eval() для пользовательского ввода — это риск безопасности; используйте if/elif",
            descriptionKk: "Пайдаланушы енгізуі үшін eval() ешқашан пайдаланбаңыз — бұл қауіпсіздік тәуекелі; if/elif пайдаланыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "Write a basic calculator that performs +, -, *, / based on user input.",
            questionRu: "Напишите базовый калькулятор, выполняющий +, -, *, / на основе ввода пользователя.",
            questionKk: "Пайдаланушы енгізуі негізінде +, -, *, / орындайтын негізгі калькулятор жазыңыз.",
            steps: [
              { en: "Get inputs: a = float(input('First number: ')); op = input('Operator (+,-,*,/): '); b = float(input('Second number: '))", ru: "Получите ввод: a = float(input('Первое число: ')); op = input('Оператор (+,-,*,/): '); b = float(input('Второе число: '))", kk: "Енгізулерді алыңыз: a = float(input('Бірінші сан: ')); op = input('Оператор (+,-,*,/): '); b = float(input('Екінші сан: '))" },
              { en: "Use if/elif to match the operator and calculate: if op == '+': print(a + b) and so on for each operator.", ru: "Используйте if/elif для сопоставления оператора: if op == '+': print(a + b) и так далее.", kk: "Операторды сәйкестендіру үшін if/elif пайдаланыңыз: if op == '+': print(a + b) және әрбір оператор үшін." }
            ],
            answer: "a = float(input('First: '))\\nop = input('Operator: ')\\nb = float(input('Second: '))\\nif op == '+': print(a + b)\\nelif op == '-': print(a - b)\\nelif op == '*': print(a * b)\\nelif op == '/': print(a / b if b != 0 else 'Error')\\nelse: print('Unknown operator')",
            answerRu: "a = float(input('First: '))\\nop = input('Operator: ')\\nb = float(input('Second: '))\\nif op == '+': print(a + b)\\nelif op == '-': print(a - b)\\nelif op == '*': print(a * b)\\nelif op == '/': print(a / b if b != 0 else 'Error')\\nelse: print('Unknown operator')",
            answerKk: "a = float(input('First: '))\\nop = input('Operator: ')\\nb = float(input('Second: '))\\nif op == '+': print(a + b)\\nelif op == '-': print(a - b)\\nelif op == '*': print(a * b)\\nelif op == '/': print(a / b if b != 0 else 'Error')\\nelse: print('Unknown operator')"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you not use eval() to process user input in a calculator?",
            questionRu: "Почему нельзя использовать eval() для обработки пользовательского ввода в калькуляторе?",
            questionKk: "Калькуляторда пайдаланушы енгізуін өңдеу үшін eval() неге пайдаланбау керек?",
            answer: "eval() executes any Python code the user types, which is a security risk — they could run malicious commands.",
            answerRu: "eval() выполняет любой введённый пользователем Python-код, что представляет угрозу безопасности — могут быть выполнены вредоносные команды.",
            answerKk: "eval() пайдаланушы терген кез келген Python кодын орындайды, бұл қауіпсіздікке қауіп төндіреді — зиянды командалар орындалуы мүмкін.",
            hint: "Think about what happens if the user types os.remove('important_file').",
            hintRu: "Подумайте, что будет, если пользователь введёт os.remove('important_file').",
            hintKk: "Пайдаланушы os.remove('important_file') терсе не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Add a 'history' feature to the calculator that stores the last 5 calculations and can display them.",
            questionRu: "Добавьте функцию 'история', хранящую последние 5 вычислений и позволяющую их отобразить.",
            questionKk: "Соңғы 5 есептеуді сақтайтын және оларды көрсете алатын 'тарих' мүмкіндігін қосыңыз.",
            answer: "Use a list: history = []. After each calculation, history.append(f'{a} {op} {b} = {result}'). If len(history) > 5: history.pop(0).",
            answerRu: "Используйте список: history = []. После каждого вычисления выполняйте history.append(f'{a} {op} {b} = {result}'). Если len(history) > 5: history.pop(0).",
            answerKk: "Тізім пайдаланыңыз: history = []. Әр есептеуден кейін history.append(f'{a} {op} {b} = {result}') орындаңыз. Егер len(history) > 5 болса: history.pop(0).",
            hint: "Append each calculation as a string to a list.",
            hintRu: "Добавляйте каждое вычисление как строку в список.",
            hintKk: "Әр есептеуді тізімге жол ретінде қосыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Enhance the calculator to support parentheses by implementing a simple expression parser for input like '(2 + 3) * 4'. Describe the approach.",
            questionRu: "Улучшите калькулятор для поддержки скобок, реализовав простой парсер выражений для ввода вроде '(2 + 3) * 4'. Опишите подход.",
            questionKk: "'(2 + 3) * 4' сияқты енгізу үшін қарапайым өрнек талдағышын жүзеге асырып, калькуляторды жақшаларды қолдау үшін жақсартыңыз. Тәсілді сипаттаңыз.",
            answer: "Use the Shunting Yard algorithm: tokenize input, use two stacks (operators and values), handle operator precedence, evaluate parenthesized sub-expressions first by pushing/popping from stacks.",
            answerRu: "Используйте алгоритм сортировочной станции: разбейте ввод на токены, используйте два стека (операторов и значений), учитывайте приоритет операторов, выражения в скобках вычисляйте первыми, добавляя и извлекая элементы из стеков.",
            answerKk: "Сұрыптау станциясы алгоритмін пайдаланыңыз: енгізуді токендерге бөліңіз, екі стек (операторлар мен мәндер) қолданыңыз, операторлар басымдығын ескеріңіз, жақша ішіндегі өрнектерді стектерге қосу/алю арқылы бірінші есептеңіз.",
            hint: "Research the Shunting Yard algorithm — it uses two stacks to handle precedence.",
            hintRu: "Изучите алгоритм сортировочной станции — он использует два стека для обработки приоритетов.",
            hintKk: "Shunting Yard алгоритмін зерттеңіз — ол басымдықты өңдеу үшін екі стек пайдаланады.",
            xp: 20
          }
        ]
      }
    ]
  },

  "Programming & AI_10": {
    planetName: "Programming & AI",
    introduction: {
      en: "Welcome to Programming & AI! You will learn object-oriented programming, web development with HTML/CSS/JavaScript, working with APIs and databases, and using Git for version control.",
      ru: "Добро пожаловать в Программирование и ИИ! Вы изучите объектно-ориентированное программирование, веб-разработку с HTML/CSS/JavaScript, работу с API и базами данных, а также Git для управления версиями."
    },
    sections: [
      {
        title: "OOP Concepts",
        titleRu: "Концепции ООП",
        titleKk: "ООП тұжырымдамалары",
        content: "Object-Oriented Programming (OOP) organizes code around objects that combine data (attributes) and behavior (methods). The four pillars of OOP are encapsulation, abstraction, inheritance, and polymorphism. OOP models real-world entities, making complex programs easier to design and maintain.",
        contentRu: "Объектно-ориентированное программирование (ООП) организует код вокруг объектов, объединяющих данные (атрибуты) и поведение (методы). Четыре столпа ООП: инкапсуляция, абстракция, наследование и полиморфизм. ООП моделирует реальные сущности, упрощая проектирование и поддержку сложных программ.",
        contentKk: "Объектіге бағытталған программалау (ООП) кодты деректер (атрибуттар) мен мінез-құлықты (әдістерді) біріктіретін объектілер айналасында ұйымдастырады. ООП-тің төрт тірегі: инкапсуляция, абстракция, мұрагерлік және полиморфизм. ООП нақты әлем нысандарын модельдейді, күрделі бағдарламаларды жобалау мен қолдауды жеңілдетеді.",
        keyFormulas: [
          {
            formula: "class ClassName:\\n    def __init__(self, attrs):\\n        self.attr = attrs",
            description: "Basic class structure with constructor in Python",
            descriptionRu: "Базовая структура класса с конструктором в Python",
            descriptionKk: "Python-дағы конструкторы бар негізгі класс құрылымы"
          },
          {
            formula: "Encapsulation → Abstraction → Inheritance → Polymorphism",
            formulaRu: "Инкапсуляция → Абстракция → Наследование → Полиморфизм",
            formulaKk: "Инкапсуляция → Абстракция → Мұрагерлік → Полиморфизм",
            description: "The four pillars of object-oriented programming",
            descriptionRu: "Четыре столпа объектно-ориентированного программирования",
            descriptionKk: "Объектіге бағытталған программалаудың төрт тірегі"
          }
        ],
        solvedExamples: [
          {
            question: "Explain encapsulation with a real-world example.",
            questionRu: "Объясните инкапсуляцию на примере из реальной жизни.",
            questionKk: "Инкапсуляцияны нақты өмірден мысал арқылы түсіндіріңіз.",
            steps: [
              { en: "Encapsulation means bundling data and methods together while hiding internal details. Example: a car hides its engine mechanics — you just use the steering wheel and pedals.", ru: "Инкапсуляция означает объединение данных и методов с сокрытием внутренних деталей. Пример: автомобиль скрывает механику двигателя — вы используете руль и педали.", kk: "Инкапсуляция деректер мен әдістерді біріктіру және ішкі мәліметтерді жасыру дегенді білдіреді. Мысал: автомобиль қозғалтқыш механикасын жасырады — сіз тек рөлді және педальдарды пайдаланасыз." },
              { en: "In code: class Car has private attributes like __engine_temp and public methods like drive(). Users interact only through public methods.", ru: "В коде: класс Car имеет приватные атрибуты __engine_temp и публичные методы drive(). Пользователи работают только через публичные методы.", kk: "Кодта: Car класында __engine_temp сияқты жабық атрибуттар мен drive() сияқты ашық әдістер бар. Пайдаланушылар тек ашық әдістер арқылы жұмыс істейді." }
            ],
            answer: "Encapsulation bundles data and methods together, hiding internal complexity behind a simple interface — like a car hiding engine details behind steering and pedals.",
            answerRu: "Инкапсуляция объединяет данные и методы, скрывая внутреннюю сложность за простым интерфейсом — как автомобиль скрывает детали двигателя за рулём и педалями.",
            answerKk: "Инкапсуляция деректер мен әдістерді біріктіріп, ішкі күрделілікті қарапайым интерфейс артына жасырады — көлік қозғалтқыш бөлшектерін рөл мен педальдар артына жасырғандай."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the four pillars of OOP?",
            questionRu: "Какие четыре столпа ООП?",
            questionKk: "ООП-тің төрт тірегі қандай?",
            answer: "Encapsulation, Abstraction, Inheritance, Polymorphism.",
            answerRu: "Инкапсуляция, абстракция, наследование, полиморфизм.",
            answerKk: "Инкапсуляция, абстракция, мұрагерлік, полиморфизм.",
            hint: "Think of the acronym EAIP.",
            hintRu: "Подумайте об аббревиатуре ИАНО.",
            hintKk: "ИАМП аббревиатурасын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the difference between a class and an object?",
            questionRu: "В чём разница между классом и объектом?",
            questionKk: "Класс пен объектінің айырмашылығы неде?",
            answer: "A class is a blueprint/template; an object is a specific instance created from that class.",
            answerRu: "Класс — это чертёж/шаблон; объект — это конкретный экземпляр, созданный из этого класса.",
            answerKk: "Класс — жоба/үлгі; объект — сол класстан жасалған нақты дана.",
            hint: "Think of a class as a cookie cutter and objects as the cookies.",
            hintRu: "Представьте класс как формочку для печенья, а объекты — как печенье.",
            hintKk: "Классты печенье қалыбы, ал объектілерді печенье деп елестетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain polymorphism with a code example involving a parent class Animal and child classes Dog and Cat.",
            questionRu: "Объясните полиморфизм на примере кода с родительским классом Animal и дочерними Dog и Cat.",
            questionKk: "Animal ата класы мен Dog және Cat бала кластарын қамтитын код мысалымен полиморфизмді түсіндіріңіз.",
            answer: "Polymorphism means the same method name behaves differently in different classes. Animal has speak(), Dog.speak() returns 'Woof', Cat.speak() returns 'Meow'. Calling animal.speak() works correctly regardless of the actual type.",
            answerRu: "Полиморфизм означает, что одно и то же имя метода ведёт себя по-разному в разных классах. У Animal есть speak(), Dog.speak() возвращает 'Woof', Cat.speak() возвращает 'Meow'. Вызов animal.speak() работает корректно независимо от фактического типа.",
            answerKk: "Полиморфизм — бір әдіс атауының әртүрлі класстарда әртүрлі жұмыс істеуі. Animal-да speak() бар, Dog.speak() 'Woof' қайтарады, Cat.speak() 'Meow' қайтарады. animal.speak() шақыруы нақты түріне қарамастан дұрыс жұмыс істейді.",
            hint: "The same method name produces different results depending on the object's class.",
            hintRu: "Одно и то же имя метода даёт разные результаты в зависимости от класса объекта.",
            hintKk: "Бір әдіс атауы объектінің класына байланысты әртүрлі нәтижелер береді.",
            xp: 20
          }
        ]
      },
      {
        title: "Classes & Objects",
        titleRu: "Классы и объекты",
        titleKk: "Кластар және объектілер",
        content: "In Python, you define a class using the class keyword. The __init__ method is the constructor that initializes new objects. self refers to the current instance. Methods are functions defined inside a class that operate on the object's data. Creating well-structured classes is the foundation of professional software development.",
        contentRu: "В Python класс определяется ключевым словом class. Метод __init__ — конструктор, инициализирующий новые объекты. self ссылается на текущий экземпляр. Методы — функции внутри класса, работающие с данными объекта. Создание хорошо структурированных классов — основа профессиональной разработки.",
        contentKk: "Python-да класс class кілт сөзімен анықталады. __init__ әдісі жаңа объектілерді инициализациялайтын конструктор. self ағымдағы данаға сілтеме жасайды. Әдістер — класс ішінде анықталған, объект деректерімен жұмыс істейтін функциялар. Жақсы құрылымдалған кластар жасау — кәсіби бағдарламалық жасақтама әзірлеудің негізі.",
        keyFormulas: [
          {
            formula: "class Dog:\\n    def __init__(self, name):\\n        self.name = name\\n    def bark(self):\\n        return f'{self.name} says Woof!'",
            formulaRu: "class Dog:\\n    def __init__(self, name):\\n        self.name = name\\n    def bark(self):\\n        return f'{self.name} говорит: Гав-гав!'",
            formulaKk: "class Dog:\\n    def __init__(self, name):\\n        self.name = name\\n    def bark(self):\\n        return f'{self.name} Ав-ав дейді!'",
            description: "Complete class definition with constructor and method",
            descriptionRu: "Полное определение класса с конструктором и методом",
            descriptionKk: "Конструкторы мен әдісі бар толық класс анықтамасы"
          }
        ],
        solvedExamples: [
          {
            question: "Create a Student class with name, age, and a method introduce() that prints a greeting.",
            questionRu: "Создайте класс Student с именем, возрастом и методом introduce(), выводящим приветствие.",
            questionKk: "Аты, жасы және сәлемдесу шығаратын introduce() әдісі бар Student класын жасаңыз.",
            steps: [
              { en: "Define the class and constructor: class Student: def __init__(self, name, age): self.name = name; self.age = age", ru: "Определите класс и конструктор: class Student: def __init__(self, name, age): self.name = name; self.age = age", kk: "Классты және конструкторды анықтаңыз: class Student: def __init__(self, name, age): self.name = name; self.age = age" },
              { en: "Add method: def introduce(self): return f'Hi, I am {self.name}, age {self.age}'. Create instance: s = Student('Ali', 15); print(s.introduce())", ru: "Добавьте метод: def introduce(self): return f'Привет, я {self.name}, мне {self.age}'. Создайте: s = Student('Ali', 15); print(s.introduce())", kk: "Әдіс қосыңыз: def introduce(self): return f'Сәлем, мен {self.name}, жасым {self.age}'. Жасаңыз: s = Student('Ali', 15); print(s.introduce())" }
            ],
            answer: "class Student:\\n    def __init__(self, name, age):\\n        self.name = name\\n        self.age = age\\n    def introduce(self):\\n        return f'Hi, I am {self.name}, age {self.age}'",
            answerRu: "class Student:\\n    def __init__(self, name, age):\\n        self.name = name\\n        self.age = age\\n    def introduce(self):\\n        return f'Hi, I am {self.name}, age {self.age}'",
            answerKk: "class Student:\\n    def __init__(self, name, age):\\n        self.name = name\\n        self.age = age\\n    def introduce(self):\\n        return f'Hi, I am {self.name}, age {self.age}'"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the __init__ method do in a Python class?",
            questionRu: "Что делает метод __init__ в классе Python?",
            questionKk: "Python класындағы __init__ әдісі не істейді?",
            answer: "It is the constructor that initializes a new object's attributes when it is created.",
            answerRu: "Это конструктор, который инициализирует атрибуты нового объекта при его создании.",
            answerKk: "Бұл — жаңа объект жасалған кезде оның атрибуттарын инициализациялайтын конструктор.",
            hint: "It is called automatically when you create a new object.",
            hintRu: "Он вызывается автоматически при создании нового объекта.",
            hintKk: "Ол жаңа объект жасалғанда автоматты түрде шақырылады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a Rectangle class with width and height attributes and an area() method.",
            questionRu: "Создайте класс Rectangle с атрибутами width, height и методом area().",
            questionKk: "width және height атрибуттары мен area() әдісі бар Rectangle класын жасаңыз.",
            answer: "class Rectangle:\\n    def __init__(self, w, h):\\n        self.width = w\\n        self.height = h\\n    def area(self):\\n        return self.width * self.height",
            answerRu: "class Rectangle:\\n    def __init__(self, w, h):\\n        self.width = w\\n        self.height = h\\n    def area(self):\\n        return self.width * self.height",
            answerKk: "class Rectangle:\\n    def __init__(self, w, h):\\n        self.width = w\\n        self.height = h\\n    def area(self):\\n        return self.width * self.height",
            hint: "Area = width * height.",
            hintRu: "Площадь = ширина * высота.",
            hintKk: "Аудан = ені * биіктігі.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a BankAccount class with deposit(), withdraw(), and get_balance() methods. Withdraw should not allow negative balance.",
            questionRu: "Создайте класс BankAccount с методами deposit(), withdraw() и get_balance(). Снятие не должно допускать отрицательный баланс.",
            questionKk: "deposit(), withdraw() және get_balance() әдістері бар BankAccount класын жасаңыз. Алу теріс балансқа жол бермеуі керек.",
            answer: "class BankAccount:\\n    def __init__(self): self.balance = 0\\n    def deposit(self, amount): self.balance += amount\\n    def withdraw(self, amount):\\n        if amount > self.balance: return 'Insufficient funds'\\n        self.balance -= amount\\n    def get_balance(self): return self.balance",
            answerRu: "class BankAccount:\\n    def __init__(self): self.balance = 0\\n    def deposit(self, amount): self.balance += amount\\n    def withdraw(self, amount):\\n        if amount > self.balance: return 'Insufficient funds'\\n        self.balance -= amount\\n    def get_balance(self): return self.balance",
            answerKk: "class BankAccount:\\n    def __init__(self): self.balance = 0\\n    def deposit(self, amount): self.balance += amount\\n    def withdraw(self, amount):\\n        if amount > self.balance: return 'Insufficient funds'\\n        self.balance -= amount\\n    def get_balance(self): return self.balance",
            hint: "Check if the withdrawal amount exceeds the balance before subtracting.",
            hintRu: "Проверьте, превышает ли сумма снятия баланс, перед вычитанием.",
            hintKk: "Алу сомасы баланстан асатынын алып тастамас бұрын тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Inheritance",
        titleRu: "Наследование",
        titleKk: "Мұрагерлік",
        content: "Inheritance lets a child class reuse code from a parent class while adding new features. The child class inherits all attributes and methods from the parent. Use super().__init__() to call the parent constructor. Inheritance promotes code reuse and creates logical hierarchies like Animal → Dog, Vehicle → Car.",
        contentRu: "Наследование позволяет дочернему классу использовать код родительского, добавляя новые возможности. Дочерний класс наследует все атрибуты и методы родителя. super().__init__() вызывает конструктор родителя. Наследование способствует повторному использованию кода и создаёт логические иерархии: Animal → Dog, Vehicle → Car.",
        contentKk: "Мұрагерлік бала класқа жаңа мүмкіндіктер қоса отырып, ата класстың кодын қайта пайдалануға мүмкіндік береді. Бала класс ата класстың барлық атрибуттары мен әдістерін мұраға алады. super().__init__() ата конструкторын шақырады. Мұрагерлік кодты қайта пайдалануға ықпал етеді: Animal → Dog, Vehicle → Car.",
        keyFormulas: [
          {
            formula: "class Child(Parent):\\n    def __init__(self):\\n        super().__init__()",
            description: "Child class inherits from Parent and calls parent constructor",
            descriptionRu: "Дочерний класс наследует от родителя и вызывает его конструктор",
            descriptionKk: "Бала класс ата класстан мұраға алады және ата конструкторын шақырады"
          }
        ],
        solvedExamples: [
          {
            question: "Create an Animal parent class and a Dog child class that adds a breed attribute.",
            questionRu: "Создайте родительский класс Animal и дочерний Dog с дополнительным атрибутом breed.",
            questionKk: "Animal ата класын және breed атрибутын қосатын Dog бала класын жасаңыз.",
            steps: [
              { en: "Define parent: class Animal: def __init__(self, name): self.name = name", ru: "Определите родителя: class Animal: def __init__(self, name): self.name = name", kk: "Ата класты анықтаңыз: class Animal: def __init__(self, name): self.name = name" },
              { en: "Define child: class Dog(Animal): def __init__(self, name, breed): super().__init__(name); self.breed = breed", ru: "Определите дочерний: class Dog(Animal): def __init__(self, name, breed): super().__init__(name); self.breed = breed", kk: "Бала класты анықтаңыз: class Dog(Animal): def __init__(self, name, breed): super().__init__(name); self.breed = breed" }
            ],
            answer: "class Animal:\\n    def __init__(self, name): self.name = name\\nclass Dog(Animal):\\n    def __init__(self, name, breed): super().__init__(name); self.breed = breed",
            answerRu: "class Animal:\\n    def __init__(self, name): self.name = name\\nclass Dog(Animal):\\n    def __init__(self, name, breed): super().__init__(name); self.breed = breed",
            answerKk: "class Animal:\\n    def __init__(self, name): self.name = name\\nclass Dog(Animal):\\n    def __init__(self, name, breed): super().__init__(name); self.breed = breed"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What keyword is used to call a parent class method from a child class?",
            questionRu: "Какое ключевое слово вызывает метод родительского класса из дочернего?",
            questionKk: "Бала класстан ата класс әдісін шақыру үшін қай кілт сөз пайдаланылады?",
            answer: "super()",
            answerRu: "super()",
            answerKk: "super()",
            hint: "It refers to the 'superior' (parent) class.",
            hintRu: "Оно ссылается на 'вышестоящий' (родительский) класс.",
            hintKk: "Ол 'жоғары тұрған' (ата) класқа сілтеме жасайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Create a Shape parent class with a color attribute and a Circle child class that adds a radius attribute and an area() method.",
            questionRu: "Создайте родительский класс Shape с атрибутом color и дочерний Circle с radius и методом area().",
            questionKk: "color атрибуты бар Shape ата класын және radius атрибуты мен area() әдісі бар Circle бала класын жасаңыз.",
            answer: "class Shape:\\n    def __init__(self, color): self.color = color\\nclass Circle(Shape):\\n    def __init__(self, color, radius): super().__init__(color); self.radius = radius\\n    def area(self): return 3.14159 * self.radius ** 2",
            answerRu: "class Shape:\\n    def __init__(self, color): self.color = color\\nclass Circle(Shape):\\n    def __init__(self, color, radius): super().__init__(color); self.radius = radius\\n    def area(self): return 3.14159 * self.radius ** 2",
            answerKk: "class Shape:\\n    def __init__(self, color): self.color = color\\nclass Circle(Shape):\\n    def __init__(self, color, radius): super().__init__(color); self.radius = radius\\n    def area(self): return 3.14159 * self.radius ** 2",
            hint: "Use super().__init__(color) to pass color to the parent.",
            hintRu: "Используйте super().__init__(color) для передачи color родителю.",
            hintKk: "color-ды ата класқа беру үшін super().__init__(color) пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a Vehicle → ElectricCar hierarchy. Vehicle has make, model, year. ElectricCar adds battery_kwh and a range_km() method that returns battery_kwh * 6.",
            questionRu: "Создайте иерархию Vehicle → ElectricCar. Vehicle имеет make, model, year. ElectricCar добавляет battery_kwh и метод range_km(), возвращающий battery_kwh * 6.",
            questionKk: "Vehicle → ElectricCar иерархиясын жасаңыз. Vehicle-де make, model, year бар. ElectricCar battery_kwh және battery_kwh * 6 қайтаратын range_km() әдісін қосады.",
            answer: "class Vehicle:\\n    def __init__(self, make, model, year): self.make = make; self.model = model; self.year = year\\nclass ElectricCar(Vehicle):\\n    def __init__(self, make, model, year, battery_kwh): super().__init__(make, model, year); self.battery_kwh = battery_kwh\\n    def range_km(self): return self.battery_kwh * 6",
            answerRu: "class Vehicle:\\n    def __init__(self, make, model, year): self.make = make; self.model = model; self.year = year\\nclass ElectricCar(Vehicle):\\n    def __init__(self, make, model, year, battery_kwh): super().__init__(make, model, year); self.battery_kwh = battery_kwh\\n    def range_km(self): return self.battery_kwh * 6",
            answerKk: "class Vehicle:\\n    def __init__(self, make, model, year): self.make = make; self.model = model; self.year = year\\nclass ElectricCar(Vehicle):\\n    def __init__(self, make, model, year, battery_kwh): super().__init__(make, model, year); self.battery_kwh = battery_kwh\\n    def range_km(self): return self.battery_kwh * 6",
            hint: "Pass make, model, year to super().__init__() and store battery_kwh separately.",
            hintRu: "Передайте make, model, year в super().__init__() и сохраните battery_kwh отдельно.",
            hintKk: "make, model, year-ды super().__init__()-ге беріп, battery_kwh-ды бөлек сақтаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "HTML & CSS",
        titleRu: "HTML и CSS",
        titleKk: "HTML және CSS",
        content: "HTML (HyperText Markup Language) structures web page content using tags like <h1>, <p>, <div>, and <img>. CSS (Cascading Style Sheets) controls the visual presentation — colors, fonts, spacing, and layout. Together they form the foundation of every website. Modern CSS uses Flexbox and Grid for responsive layouts.",
        contentRu: "HTML (язык гипертекстовой разметки) структурирует содержимое веб-страницы с помощью тегов: <h1>, <p>, <div>, <img>. CSS (каскадные таблицы стилей) управляет визуальным оформлением — цветами, шрифтами, отступами и макетом. Вместе они составляют основу каждого сайта. Современный CSS использует Flexbox и Grid для адаптивных макетов.",
        contentKk: "HTML (гипермәтінді белгілеу тілі) веб-бет мазмұнын <h1>, <p>, <div>, <img> сияқты тегтер арқылы құрылымдайды. CSS (каскадты стильдер кестесі) визуалды безендіруді — түстерді, қаріптерді, аралықтарды және орналасуды басқарады. Бірге олар әр веб-сайттың негізін құрайды. Заманауи CSS бейімделгіш орналасулар үшін Flexbox және Grid пайдаланады.",
        keyFormulas: [
          {
            formula: "<tag attribute='value'>content</tag>",
            description: "Basic HTML element structure with opening and closing tags",
            descriptionRu: "Базовая структура HTML-элемента с открывающим и закрывающим тегами",
            descriptionKk: "Ашу және жабу тегтері бар негізгі HTML элемент құрылымы"
          },
          {
            formula: "selector { property: value; }",
            description: "CSS rule structure: select elements and apply styles",
            descriptionRu: "Структура CSS-правила: выбрать элементы и применить стили",
            descriptionKk: "CSS ережесінің құрылымы: элементтерді таңдап, стильдерді қолдану"
          }
        ],
        solvedExamples: [
          {
            question: "Create a simple HTML page with a heading, paragraph, and a blue background.",
            questionRu: "Создайте простую HTML-страницу с заголовком, абзацем и синим фоном.",
            questionKk: "Тақырыбы, абзацы және көк фоны бар қарапайым HTML бетін жасаңыз.",
            steps: [
              { en: "Write HTML structure: <html><body><h1>Hello</h1><p>Welcome to my page.</p></body></html>", ru: "Напишите структуру HTML: <html><body><h1>Привет</h1><p>Добро пожаловать.</p></body></html>", kk: "HTML құрылымын жазыңыз: <html><body><h1>Сәлем</h1><p>Менің бетіме қош келдіңіз.</p></body></html>" },
              { en: "Add CSS in a <style> tag: body { background-color: blue; color: white; }", ru: "Добавьте CSS в теге <style>: body { background-color: blue; color: white; }", kk: "<style> тегінде CSS қосыңыз: body { background-color: blue; color: white; }" }
            ],
            answer: "<html><head><style>body { background-color: blue; color: white; }</style></head><body><h1>Hello</h1><p>Welcome to my page.</p></body></html>",
            answerRu: "<html><head><style>body { background-color: blue; color: white; }</style></head><body><h1>Hello</h1><p>Welcome to my page.</p></body></html>",
            answerKk: "<html><head><style>body { background-color: blue; color: white; }</style></head><body><h1>Hello</h1><p>Welcome to my page.</p></body></html>"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does HTML stand for?",
            questionRu: "Что означает HTML?",
            questionKk: "HTML нені білдіреді?",
            answer: "HyperText Markup Language.",
            answerRu: "Язык гипертекстовой разметки.",
            answerKk: "Гипермәтінді белгілеу тілі.",
            hint: "It is a markup language, not a programming language.",
            hintRu: "Это язык разметки, а не программирования.",
            hintKk: "Бұл программалау тілі емес, белгілеу тілі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write CSS to center a div horizontally on the page using Flexbox.",
            questionRu: "Напишите CSS для центрирования div по горизонтали с помощью Flexbox.",
            questionKk: "Flexbox пайдаланып div-ті бетте көлденеңінен ортаға қоятын CSS жазыңыз.",
            answer: ".container { display: flex; justify-content: center; }",
            answerRu: ".container { display: flex; justify-content: center; }",
            answerKk: ".container { display: flex; justify-content: center; }",
            hint: "Flexbox uses justify-content for horizontal alignment.",
            hintRu: "Flexbox использует justify-content для горизонтального выравнивания.",
            hintKk: "Flexbox көлденең туралау үшін justify-content пайдаланады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a responsive card layout using CSS Grid that shows 3 columns on desktop and 1 column on mobile (below 768px).",
            questionRu: "Создайте адаптивный макет карточек на CSS Grid: 3 колонки на десктопе, 1 на мобильном (менее 768px).",
            questionKk: "CSS Grid арқылы бейімделгіш карточка орналасуын жасаңыз: жұмыс үстелінде 3 баған, мобильде (768px-тен төмен) 1 баған.",
            answer: ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\\n@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }",
            answerRu: ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\\n@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }",
            answerKk: ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\\n@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }",
            hint: "Use @media query to change grid-template-columns on small screens.",
            hintRu: "Используйте @media для изменения grid-template-columns на маленьких экранах.",
            hintKk: "Кіші экрандарда grid-template-columns өзгерту үшін @media пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "JavaScript Intro",
        titleRu: "Введение в JavaScript",
        titleKk: "JavaScript кіріспесі",
        content: "JavaScript is the programming language of the web, running directly in browsers. It adds interactivity to web pages — handling button clicks, form validation, animations, and dynamic content updates. JavaScript uses let/const for variables, arrow functions, and is event-driven. It shares many concepts with Python but has a different syntax.",
        contentRu: "JavaScript — язык программирования веба, работающий прямо в браузерах. Он добавляет интерактивность — обработку кликов, валидацию форм, анимации и динамическое обновление контента. JavaScript использует let/const для переменных, стрелочные функции и является событийно-ориентированным. Он разделяет многие концепции с Python, но имеет другой синтаксис.",
        contentKk: "JavaScript — тікелей браузерлерде жұмыс істейтін веб программалау тілі. Ол веб-беттерге интерактивтілік қосады — батырма басуларын өңдеу, формаларды тексеру, анимациялар және динамикалық мазмұн жаңарту. JavaScript айнымалылар үшін let/const, көрсеткі функцияларды пайдаланады және оқиғаларға негізделген. Ол Python-мен көптеген тұжырымдамаларды бөліседі, бірақ синтаксисі басқа.",
        keyFormulas: [
          {
            formula: "const name = 'value'; let count = 0;",
            description: "const for constants, let for variables that change",
            descriptionRu: "const для констант, let для изменяемых переменных",
            descriptionKk: "Тұрақтылар үшін const, өзгеретін айнымалылар үшін let"
          },
          {
            formula: "const fn = (a, b) => a + b;",
            description: "Arrow function syntax — concise way to write functions",
            descriptionRu: "Синтаксис стрелочной функции — краткий способ записи функций",
            descriptionKk: "Көрсеткі функция синтаксисі — функцияларды жазудың қысқа жолы"
          }
        ],
        solvedExamples: [
          {
            question: "Write a JavaScript function that takes a name and returns a greeting.",
            questionRu: "Напишите JavaScript-функцию, принимающую имя и возвращающую приветствие.",
            questionKk: "Ат қабылдайтын және сәлемдесу қайтаратын JavaScript функциясын жазыңыз.",
            steps: [
              { en: "Define using arrow function: const greet = (name) => `Hello, ${name}!`;", ru: "Определите стрелочной функцией: const greet = (name) => `Привет, ${name}!`;", kk: "Көрсеткі функциямен анықтаңыз: const greet = (name) => `Сәлем, ${name}!`;" },
              { en: "Call it: console.log(greet('Ali')); — outputs 'Hello, Ali!' in the browser console.", ru: "Вызовите: console.log(greet('Ali')); — выводит 'Привет, Ali!' в консоль.", kk: "Шақырыңыз: console.log(greet('Ali')); — браузер консоліне 'Сәлем, Ali!' шығарады." }
            ],
            answer: "const greet = (name) => `Hello, ${name}!`;",
            answerRu: "const greet = (name) => `Hello, ${name}!`;",
            answerKk: "const greet = (name) => `Hello, ${name}!`;"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between let and const in JavaScript?",
            questionRu: "В чём разница между let и const в JavaScript?",
            questionKk: "JavaScript-те let пен const айырмашылығы неде?",
            answer: "let declares a variable that can be reassigned; const declares a variable that cannot be reassigned.",
            answerRu: "let объявляет переменную, которую можно переопределить; const объявляет переменную, которую нельзя переопределить.",
            answerKk: "let қайта мән беруге болатын айнымалыны жариялайды; const қайта мән беруге болмайтын айнымалыны жариялайды.",
            hint: "const means 'constant' — it does not change.",
            hintRu: "const означает 'константа' — она не меняется.",
            hintKk: "const 'тұрақты' дегенді білдіреді — ол өзгермейді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a JavaScript for loop that prints numbers 1 to 10.",
            questionRu: "Напишите цикл for на JavaScript, выводящий числа от 1 до 10.",
            questionKk: "1-ден 10-ға дейінгі сандарды шығаратын JavaScript for циклін жазыңыз.",
            answer: "for (let i = 1; i <= 10; i++) { console.log(i); }",
            answerRu: "for (let i = 1; i <= 10; i++) { console.log(i); }",
            answerKk: "for (let i = 1; i <= 10; i++) { console.log(i); }",
            hint: "JavaScript for loops use (init; condition; increment) syntax.",
            hintRu: "Циклы for в JS используют синтаксис (init; condition; increment).",
            hintKk: "JavaScript for циклдері (init; condition; increment) синтаксисін пайдаланады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare Python and JavaScript: write a function to check if a number is prime in both languages.",
            questionRu: "Сравните Python и JavaScript: напишите функцию проверки простого числа на обоих языках.",
            questionKk: "Python мен JavaScript-ті салыстырыңыз: екі тілде де жай сан тексеретін функция жазыңыз.",
            answer: "Python: def is_prime(n): return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\\nJS: const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return true; };",
            answerRu: "Python: def is_prime(n): return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\\nJS: const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return true; };",
            answerKk: "Python: def is_prime(n): return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\\nJS: const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return true; };",
            hint: "Check divisibility from 2 to sqrt(n). The logic is the same, only syntax differs.",
            hintRu: "Проверяйте делимость от 2 до sqrt(n). Логика одинакова, различается только синтаксис.",
            hintKk: "2-ден sqrt(n)-ге дейін бөлінгіштікті тексеріңіз. Логика бірдей, тек синтаксис ерекшеленеді.",
            xp: 20
          }
        ]
      },
      {
        title: "DOM Manipulation",
        titleRu: "Работа с DOM",
        titleKk: "DOM-мен жұмыс",
        content: "The DOM (Document Object Model) is a tree representation of an HTML page that JavaScript can read and modify. You select elements with document.querySelector() and change their content, style, or attributes. Event listeners let you respond to user actions like clicks and key presses. DOM manipulation is how web pages become interactive.",
        contentRu: "DOM (объектная модель документа) — древовидное представление HTML-страницы, которое JavaScript может читать и изменять. Элементы выбираются через document.querySelector(), после чего можно менять их содержимое, стили или атрибуты. Обработчики событий позволяют реагировать на действия пользователя — клики и нажатия клавиш. Работа с DOM делает страницы интерактивными.",
        contentKk: "DOM (құжат объект моделі) — JavaScript оқи және өзгерте алатын HTML беттің ағаш тәрізді көрінісі. Элементтерді document.querySelector() арқылы таңдап, олардың мазмұнын, стилін немесе атрибуттарын өзгертуге болады. Оқиға тыңдаушылары пайдаланушы әрекеттеріне — басулар мен пернелерге жауап беруге мүмкіндік береді. DOM манипуляциясы веб-беттерді интерактивті етеді.",
        keyFormulas: [
          {
            formula: "document.querySelector('.class') / element.addEventListener('click', fn)",
            description: "Select an element and attach an event listener to it",
            descriptionRu: "Выбрать элемент и прикрепить к нему обработчик события",
            descriptionKk: "Элементті таңдау және оған оқиға тыңдаушысын тіркеу"
          }
        ],
        solvedExamples: [
          {
            question: "Write JS that changes a paragraph's text when a button is clicked.",
            questionRu: "Напишите JS, меняющий текст параграфа при нажатии кнопки.",
            questionKk: "Батырма басылғанда абзац мәтінін өзгертетін JS жазыңыз.",
            steps: [
              { en: "Select elements: const btn = document.querySelector('#myBtn'); const p = document.querySelector('#myText');", ru: "Выберите элементы: const btn = document.querySelector('#myBtn'); const p = document.querySelector('#myText');", kk: "Элементтерді таңдаңыз: const btn = document.querySelector('#myBtn'); const p = document.querySelector('#myText');" },
              { en: "Add listener: btn.addEventListener('click', () => { p.textContent = 'Button was clicked!'; });", ru: "Добавьте обработчик: btn.addEventListener('click', () => { p.textContent = 'Кнопка нажата!'; });", kk: "Тыңдаушы қосыңыз: btn.addEventListener('click', () => { p.textContent = 'Батырма басылды!'; });" }
            ],
            answer: "const btn = document.querySelector('#myBtn');\\nconst p = document.querySelector('#myText');\\nbtn.addEventListener('click', () => { p.textContent = 'Clicked!'; });",
            answerRu: "const btn = document.querySelector('#myBtn');\\nconst p = document.querySelector('#myText');\\nbtn.addEventListener('click', () => { p.textContent = 'Clicked!'; });",
            answerKk: "const btn = document.querySelector('#myBtn');\\nconst p = document.querySelector('#myText');\\nbtn.addEventListener('click', () => { p.textContent = 'Clicked!'; });"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does DOM stand for?",
            questionRu: "Что означает DOM?",
            questionKk: "DOM нені білдіреді?",
            answer: "Document Object Model.",
            answerRu: "Объектная модель документа.",
            answerKk: "Құжаттың объекттік моделі.",
            hint: "It is a model of the HTML document as objects.",
            hintRu: "Это модель HTML-документа в виде объектов.",
            hintKk: "Бұл HTML құжатының объектілер түріндегі моделі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write JavaScript to change the background color of a div with id 'box' to red.",
            questionRu: "Напишите JavaScript для изменения цвета фона div с id 'box' на красный.",
            questionKk: "'box' id-лі div фон түсін қызылға өзгертетін JavaScript жазыңыз.",
            answer: "document.querySelector('#box').style.backgroundColor = 'red';",
            answerRu: "document.querySelector('#box').style.backgroundColor = 'red';",
            answerKk: "document.querySelector('#box').style.backgroundColor = 'red';",
            hint: "Use .style.backgroundColor to change CSS properties via JavaScript.",
            hintRu: "Используйте .style.backgroundColor для изменения CSS-свойств через JS.",
            hintKk: "CSS қасиеттерін JS арқылы өзгерту үшін .style.backgroundColor пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Create a simple counter with +/- buttons using HTML and JavaScript. Display the count and do not let it go below 0.",
            questionRu: "Создайте простой счётчик с кнопками +/- на HTML и JavaScript. Отображайте счёт и не позволяйте ему стать отрицательным.",
            questionKk: "HTML және JavaScript арқылы +/- батырмалары бар қарапайым есептегіш жасаңыз. Санды көрсетіңіз және оның 0-ден төмен болуына жол бермеңіз.",
            answer: "let count = 0; const display = document.querySelector('#count');\\ndocument.querySelector('#plus').addEventListener('click', () => { count++; display.textContent = count; });\\ndocument.querySelector('#minus').addEventListener('click', () => { if (count > 0) count--; display.textContent = count; });",
            answerRu: "let count = 0; const display = document.querySelector('#count');\\ndocument.querySelector('#plus').addEventListener('click', () => { count++; display.textContent = count; });\\ndocument.querySelector('#minus').addEventListener('click', () => { if (count > 0) count--; display.textContent = count; });",
            answerKk: "let count = 0; const display = document.querySelector('#count');\\ndocument.querySelector('#plus').addEventListener('click', () => { count++; display.textContent = count; });\\ndocument.querySelector('#minus').addEventListener('click', () => { if (count > 0) count--; display.textContent = count; });",
            hint: "Use a variable to track count, and check count > 0 before decrementing.",
            hintRu: "Используйте переменную для отслеживания счёта и проверяйте count > 0 перед уменьшением.",
            hintKk: "Санды қадағалау үшін айнымалы пайдаланыңыз және азайтудан бұрын count > 0 тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "APIs & JSON",
        titleRu: "API и JSON",
        titleKk: "API және JSON",
        content: "An API (Application Programming Interface) allows programs to communicate with each other over the internet. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to exchange data. JSON (JavaScript Object Notation) is the standard data format for APIs — it looks like Python dictionaries. The fetch() function in JavaScript makes API calls.",
        contentRu: "API (интерфейс программирования приложений) позволяет программам общаться друг с другом через интернет. REST API используют HTTP-методы (GET, POST, PUT, DELETE) для обмена данными. JSON (JavaScript Object Notation) — стандартный формат данных для API, похожий на словари Python. Функция fetch() в JavaScript выполняет API-запросы.",
        contentKk: "API (қосымша программалау интерфейсі) бағдарламаларға интернет арқылы бір-бірімен байланысуға мүмкіндік береді. REST API деректер алмасу үшін HTTP әдістерін (GET, POST, PUT, DELETE) пайдаланады. JSON (JavaScript Object Notation) — API үшін стандартты деректер форматы, Python сөздіктеріне ұқсайды. JavaScript-тегі fetch() функциясы API шақыруларын жасайды.",
        keyFormulas: [
          {
            formula: "fetch(url).then(res => res.json()).then(data => console.log(data))",
            description: "JavaScript fetch API pattern for making HTTP requests",
            descriptionRu: "Паттерн fetch API в JavaScript для HTTP-запросов",
            descriptionKk: "HTTP сұраулары жасау үшін JavaScript fetch API үлгісі"
          }
        ],
        solvedExamples: [
          {
            question: "What does a typical JSON response look like for a user profile API?",
            questionRu: "Как выглядит типичный JSON-ответ API профиля пользователя?",
            questionKk: "Пайдаланушы профилі API-сінің типтік JSON жауабы қандай болады?",
            steps: [
              { en: "JSON uses key-value pairs in curly braces: {\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"}", ru: "JSON использует пары ключ-значение в фигурных скобках: {\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"}", kk: "JSON фигуралық жақшаларда кілт-мән жұптарын пайдаланады: {\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"}" },
              { en: "Access data: data.name gives 'Ali', data.age gives 16. Arrays use square brackets: [1, 2, 3].", ru: "Доступ к данным: data.name даёт 'Ali', data.age — 16. Массивы в квадратных скобках: [1, 2, 3].", kk: "Деректерге қол жеткізу: data.name 'Ali' береді, data.age — 16. Массивтер тік жақшаларда: [1, 2, 3]." }
            ],
            answer: "{\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"} — JSON objects look like JavaScript objects or Python dictionaries.",
            answerRu: "{\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"} — JSON-объекты выглядят как объекты JavaScript или словари Python.",
            answerKk: "{\"name\": \"Ali\", \"age\": 16, \"city\": \"Almaty\"} — JSON объекттері JavaScript объекттеріне немесе Python сөздіктеріне ұқсайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does API stand for?",
            questionRu: "Что означает API?",
            questionKk: "API нені білдіреді?",
            answer: "Application Programming Interface.",
            answerRu: "Интерфейс программирования приложений.",
            answerKk: "Қолданбалы бағдарламалау интерфейсі.",
            hint: "It is an interface for programming applications.",
            hintRu: "Это интерфейс для программирования приложений.",
            hintKk: "Бұл қосымшаларды программалау үшін интерфейс.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What are the four main HTTP methods used in REST APIs?",
            questionRu: "Какие четыре основных HTTP-метода используются в REST API?",
            questionKk: "REST API-де пайдаланылатын төрт негізгі HTTP әдісі қандай?",
            answer: "GET (read), POST (create), PUT (update), DELETE (remove).",
            answerRu: "GET (чтение), POST (создание), PUT (обновление), DELETE (удаление).",
            answerKk: "GET (оқу), POST (жасау), PUT (жаңарту), DELETE (жою).",
            hint: "Think CRUD: Create, Read, Update, Delete.",
            hintRu: "Подумайте CRUD: Create, Read, Update, Delete.",
            hintKk: "CRUD ойлаңыз: Create, Read, Update, Delete.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write JavaScript fetch code that gets data from 'https://api.example.com/users' and displays each user's name in a list on the page.",
            questionRu: "Напишите JS fetch-код, получающий данные с 'https://api.example.com/users' и отображающий имя каждого пользователя в списке на странице.",
            questionKk: "'https://api.example.com/users'-тен деректер алатын және әр пайдаланушының атын бетте тізім ретінде көрсететін JS fetch кодын жазыңыз.",
            answer: "fetch('https://api.example.com/users')\\n  .then(res => res.json())\\n  .then(users => {\\n    const ul = document.querySelector('#userList');\\n    users.forEach(u => {\\n      const li = document.createElement('li');\\n      li.textContent = u.name;\\n      ul.appendChild(li);\\n    });\\n  });",
            answerRu: "fetch('https://api.example.com/users')\\n  .then(res => res.json())\\n  .then(users => {\\n    const ul = document.querySelector('#userList');\\n    users.forEach(u => {\\n      const li = document.createElement('li');\\n      li.textContent = u.name;\\n      ul.appendChild(li);\\n    });\\n  });",
            answerKk: "fetch('https://api.example.com/users')\\n  .then(res => res.json())\\n  .then(users => {\\n    const ul = document.querySelector('#userList');\\n    users.forEach(u => {\\n      const li = document.createElement('li');\\n      li.textContent = u.name;\\n      ul.appendChild(li);\\n    });\\n  });",
            hint: "Use .forEach() to iterate over users and createElement('li') for each.",
            hintRu: "Используйте .forEach() для перебора пользователей и createElement('li') для каждого.",
            hintKk: "Пайдаланушыларды қарау үшін .forEach() және әрқайсысы үшін createElement('li') пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Databases Intro",
        titleRu: "Введение в базы данных",
        titleKk: "Деректер қорына кіріспе",
        content: "Databases store and organize large amounts of data persistently. SQL (Structured Query Language) is used to interact with relational databases like PostgreSQL and MySQL. The four basic operations are CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE). NoSQL databases like MongoDB store data as flexible documents instead of tables.",
        contentRu: "Базы данных хранят и организуют большие объёмы данных постоянно. SQL (язык структурированных запросов) используется для работы с реляционными БД, такими как PostgreSQL и MySQL. Четыре базовые операции — CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE). NoSQL-базы вроде MongoDB хранят данные как гибкие документы вместо таблиц.",
        contentKk: "Деректер қоры деректердің үлкен көлемін тұрақты сақтайды және ұйымдастырады. SQL (құрылымдық сұрау тілі) PostgreSQL және MySQL сияқты реляциялық деректер қорларымен жұмыс істеу үшін пайдаланылады. Төрт негізгі амал — CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE). MongoDB сияқты NoSQL деректер қорлары кестелердің орнына икемді құжаттар ретінде деректер сақтайды.",
        keyFormulas: [
          {
            formula: "SELECT column FROM table WHERE condition;",
            description: "Basic SQL query to read data from a database table",
            descriptionRu: "Базовый SQL-запрос для чтения данных из таблицы",
            descriptionKk: "Деректер қоры кестесінен деректерді оқу үшін негізгі SQL сұрау"
          }
        ],
        solvedExamples: [
          {
            question: "Write a SQL query to find all students older than 16 from a 'students' table.",
            questionRu: "Напишите SQL-запрос для поиска всех студентов старше 16 из таблицы 'students'.",
            questionKk: "'students' кестесінен 16-дан үлкен барлық оқушыларды табатын SQL сұрау жазыңыз.",
            steps: [
              { en: "Use SELECT to choose columns and FROM to specify the table: SELECT name, age FROM students", ru: "Используйте SELECT для выбора столбцов и FROM для таблицы: SELECT name, age FROM students", kk: "Бағандарды таңдау үшін SELECT және кестені көрсету үшін FROM пайдаланыңыз: SELECT name, age FROM students" },
              { en: "Add WHERE clause to filter: WHERE age > 16; — this returns only students over 16.", ru: "Добавьте WHERE для фильтрации: WHERE age > 16; — вернёт только студентов старше 16.", kk: "Сүзу үшін WHERE қосыңыз: WHERE age > 16; — тек 16-дан үлкен оқушыларды қайтарады." }
            ],
            answer: "SELECT name, age FROM students WHERE age > 16;",
            answerRu: "SELECT name, age FROM students WHERE age > 16;",
            answerKk: "SELECT name, age FROM students WHERE age > 16;"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does SQL stand for?",
            questionRu: "Что означает SQL?",
            questionKk: "SQL нені білдіреді?",
            answer: "Structured Query Language.",
            answerRu: "Структурированный язык запросов.",
            answerKk: "Құрылымдық сұраныстар тілі.",
            hint: "It is a language for querying structured data.",
            hintRu: "Это язык для запросов к структурированным данным.",
            hintKk: "Бұл құрылымдық деректерге сұрау жасау тілі.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a SQL query to insert a new student named 'Dana', age 15, grade 10 into a 'students' table.",
            questionRu: "Напишите SQL-запрос для вставки студента 'Dana', возраст 15, класс 10 в таблицу 'students'.",
            questionKk: "'students' кестесіне 'Dana' атты, 15 жасты, 10 сыныпты жаңа оқушы кірістіретін SQL сұрау жазыңыз.",
            answer: "INSERT INTO students (name, age, grade) VALUES ('Dana', 15, 10);",
            answerRu: "INSERT INTO students (name, age, grade) VALUES ('Dana', 15, 10);",
            answerKk: "INSERT INTO students (name, age, grade) VALUES ('Dana', 15, 10);",
            hint: "Use INSERT INTO table (columns) VALUES (values) syntax.",
            hintRu: "Используйте синтаксис INSERT INTO table (columns) VALUES (values).",
            hintKk: "INSERT INTO table (columns) VALUES (values) синтаксисін пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain the difference between SQL and NoSQL databases and give one use case for each.",
            questionRu: "Объясните разницу между SQL и NoSQL базами данных и приведите по одному примеру использования.",
            questionKk: "SQL және NoSQL деректер қорларының айырмашылығын түсіндіріңіз және әрқайсысы үшін бір қолдану жағдайын келтіріңіз.",
            answer: "SQL databases store data in structured tables with fixed schemas — ideal for banking systems. NoSQL stores flexible documents without fixed schemas — ideal for social media feeds where data structure varies.",
            answerRu: "SQL-базы данных хранят данные в структурированных таблицах с фиксированной схемой — идеально для банковских систем. NoSQL хранит гибкие документы без фиксированной схемы — идеально для лент соцсетей, где структура данных меняется.",
            answerKk: "SQL дерекқорлары деректерді тұрақты схемасы бар құрылымдық кестелерде сақтайды — банк жүйелері үшін таптырмас шешім. NoSQL тұрақты схемасы жоқ икемді құжаттарды сақтайды — деректер құрылымы өзгеріп отыратын әлеуметтік желі тасқындалары үшін таптырмас шешім.",
            hint: "Think about when you need strict structure vs. flexibility.",
            hintRu: "Подумайте, когда нужна строгая структура, а когда — гибкость.",
            hintKk: "Қатаң құрылым қашан керек, ал икемділік қашан керек екенін ойлаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Git & Version Control",
        titleRu: "Git и управление версиями",
        titleKk: "Git және нұсқаларды басқару",
        content: "Git is a version control system that tracks changes to your code over time. It lets you save snapshots (commits), create branches for new features, and collaborate with others. GitHub is a platform that hosts Git repositories online. Every professional developer uses Git daily — it is an essential skill for any programmer.",
        contentRu: "Git — система управления версиями, отслеживающая изменения кода. Она позволяет сохранять снимки (коммиты), создавать ветки для новых функций и работать совместно с другими. GitHub — платформа для размещения Git-репозиториев онлайн. Каждый профессиональный разработчик использует Git ежедневно — это важнейший навык программиста.",
        contentKk: "Git — кодтағы өзгерістерді уақыт бойынша қадағалайтын нұсқаларды басқару жүйесі. Ол суреттерді (коммиттерді) сақтауға, жаңа мүмкіндіктер үшін тармақтар жасауға және басқалармен бірлесіп жұмыс істеуге мүмкіндік береді. GitHub — Git репозиторийлерін онлайн орналастыратын платформа. Әр кәсіби әзірлеуші Git-ті күнделікті пайдаланады — бұл кез келген программист үшін маңызды дағды.",
        keyFormulas: [
          {
            formula: "git add . → git commit -m 'message' → git push",
            description: "Basic Git workflow: stage changes, commit, push to remote",
            descriptionRu: "Базовый рабочий процесс Git: подготовить, зафиксировать, отправить",
            descriptionKk: "Негізгі Git жұмыс ағыны: дайындау, бекіту, қашықтыққа жіберу"
          },
          {
            formula: "git branch feature → git checkout feature → git merge feature",
            description: "Create a branch, switch to it, and merge it back",
            descriptionRu: "Создать ветку, переключиться на неё и слить обратно",
            descriptionKk: "Тармақ жасау, оған ауысу және кері біріктіру"
          }
        ],
        solvedExamples: [
          {
            question: "Describe the workflow to save your code changes using Git.",
            questionRu: "Опишите процесс сохранения изменений кода с помощью Git.",
            questionKk: "Git арқылы код өзгерістерін сақтау жұмыс ағынын сипаттаңыз.",
            steps: [
              { en: "Stage changes with 'git add .' to mark files for the next commit.", ru: "Подготовьте изменения командой 'git add .' для следующего коммита.", kk: "Келесі коммит үшін файлдарды белгілеу үшін 'git add .' арқылы өзгерістерді дайындаңыз." },
              { en: "Commit with 'git commit -m \"Add login feature\"' to save a snapshot, then 'git push' to upload to GitHub.", ru: "Зафиксируйте 'git commit -m \"Add login\"' для сохранения снимка, затем 'git push' для загрузки на GitHub.", kk: "Суретті сақтау үшін 'git commit -m \"Add login\"', содан кейін GitHub-қа жүктеу үшін 'git push' жазыңыз." }
            ],
            answer: "git add . → git commit -m 'message' → git push",
            answerRu: "git add . → git commit -m 'message' → git push",
            answerKk: "git add . → git commit -m 'message' → git push"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What Git command saves a snapshot of your staged changes?",
            questionRu: "Какая команда Git сохраняет снимок подготовленных изменений?",
            questionKk: "Қай Git командасы дайындалған өзгерістердің суретін сақтайды?",
            answer: "git commit",
            answerRu: "git commit",
            answerKk: "git commit",
            hint: "You 'commit' to saving your changes.",
            hintRu: "Вы 'фиксируете' сохранение изменений.",
            hintKk: "Сіз өзгерістерді сақтауды 'бекітесіз'.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the purpose of Git branches?",
            questionRu: "Зачем нужны ветки в Git?",
            questionKk: "Git тармақтарының мақсаты қандай?",
            answer: "Branches let you work on new features or fixes in isolation without affecting the main codebase until you are ready to merge.",
            answerRu: "Ветки позволяют работать над новыми функциями или исправлениями изолированно, не затрагивая основную кодовую базу, пока вы не готовы к слиянию.",
            answerKk: "Тармақтар жаңа мүмкіндіктер немесе түзетулер үстінде біріктіруге дайын болғанша негізгі код базасына әсер етпей, оқшау жұмыс істеуге мүмкіндік береді.",
            hint: "Think of branches as parallel copies of your code.",
            hintRu: "Представьте ветки как параллельные копии вашего кода.",
            hintKk: "Тармақтарды кодтың параллель көшірмелері ретінде елестетіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain what a merge conflict is, when it happens, and how to resolve it.",
            questionRu: "Объясните, что такое конфликт слияния, когда он возникает и как его разрешить.",
            questionKk: "Біріктіру қақтығысы деген не, ол қашан пайда болады және оны қалай шешуге болады, түсіндіріңіз.",
            answer: "A merge conflict occurs when two branches modify the same line of a file differently. Git marks the conflicting sections with <<<< ==== >>>> markers. You manually choose which version to keep, remove the markers, then commit the resolved file.",
            answerRu: "Конфликт слияния возникает, когда две ветки по-разному изменяют одну и ту же строку файла. Git помечает конфликтные участки маркерами <<<< ==== >>>>. Вы вручную выбираете, какую версию оставить, удаляете маркеры и фиксируете исправленный файл.",
            answerKk: "Біріктіру жанжалы екі тармақ файлдың бір жолын әртүрлі өзгерткенде пайда болады. Git жанжалды бөліктерді <<<< ==== >>>> маркерлерімен белгілейді. Қай нұсқаны қалдыратынын өзіңіз таңдап, маркерлерді алып тастайсыз да, түзетілген файлды коммиттейсіз.",
            hint: "It happens when Git cannot automatically decide which change to keep.",
            hintRu: "Это происходит, когда Git не может автоматически решить, какое изменение сохранить.",
            hintKk: "Бұл Git қай өзгерісті сақтау керектігін автоматты түрде шеше алмағанда болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Web App Project",
        titleRu: "Проект веб-приложения",
        titleKk: "Веб-қосымша жобасы",
        content: "A web application project combines everything you have learned: HTML for structure, CSS for styling, JavaScript for interactivity, APIs for data, and Git for version control. Good project planning includes wireframing, breaking work into small tasks, and testing each feature. Building a portfolio project demonstrates your skills to universities and employers.",
        contentRu: "Проект веб-приложения объединяет всё изученное: HTML для структуры, CSS для стилей, JavaScript для интерактивности, API для данных и Git для версий. Хорошее планирование включает создание макетов, разбиение работы на мелкие задачи и тестирование каждой функции. Портфолио-проект демонстрирует навыки университетам и работодателям.",
        contentKk: "Веб-қосымша жобасы сіз үйренгеннің бәрін біріктіреді: құрылым үшін HTML, стильдер үшін CSS, интерактивтілік үшін JavaScript, деректер үшін API және нұсқаларды басқару үшін Git. Жақсы жоспарлау макеттерді құру, жұмысты шағын тапсырмаларға бөлу және әр мүмкіндікті тестілеуді қамтиды. Портфолио жобасы дағдыларыңызды университеттер мен жұмыс берушілерге көрсетеді.",
        keyFormulas: [
          {
            formula: "Plan → Wireframe → Build → Test → Deploy",
            formulaRu: "План → Каркас → Разработка → Тестирование → Развёртывание",
            formulaKk: "Жоспар → Қаңқа → Әзірлеу → Тестілеу → Іске қосу",
            description: "Standard web development project lifecycle",
            descriptionRu: "Стандартный жизненный цикл проекта веб-разработки",
            descriptionKk: "Стандартты веб-әзірлеу жобасының өмірлік циклі"
          }
        ],
        solvedExamples: [
          {
            question: "Plan a simple to-do list web app. What pages and features would it need?",
            questionRu: "Спланируйте простое веб-приложение списка задач. Какие страницы и функции нужны?",
            questionKk: "Қарапайым тапсырмалар тізімі веб-қосымшасын жоспарлаңыз. Қандай беттер мен мүмкіндіктер қажет?",
            steps: [
              { en: "Core features: add task, mark as complete, delete task. Single page with an input field, add button, and task list.", ru: "Основные функции: добавить задачу, отметить выполненной, удалить. Одна страница с полем ввода, кнопкой и списком задач.", kk: "Негізгі мүмкіндіктер: тапсырма қосу, аяқталған деп белгілеу, жою. Енгізу өрісі, қосу батырмасы және тапсырмалар тізімі бар бір бет." },
              { en: "Tech stack: HTML for structure, CSS for styling, JavaScript for adding/removing tasks, localStorage for saving data between sessions.", ru: "Стек: HTML для структуры, CSS для стилей, JS для добавления/удаления, localStorage для сохранения между сессиями.", kk: "Технологиялар: құрылым үшін HTML, стильдер үшін CSS, қосу/жою үшін JS, сессиялар арасында сақтау үшін localStorage." }
            ],
            answer: "A to-do app needs: input field + add button, task list with checkboxes and delete buttons, localStorage for persistence, clean CSS styling.",
            answerRu: "Для приложения со списком дел нужны: поле ввода + кнопка добавления, список задач с чекбоксами и кнопками удаления, localStorage для сохранения данных, аккуратное CSS-оформление.",
            answerKk: "Істер тізімі қосымшасына қажет: енгізу өрісі + қосу түймесі, жалаушалар мен жою түймелері бар тапсырмалар тізімі, деректерді сақтауға арналған localStorage, ұқыпты CSS безендіруі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three core technologies used to build a web page?",
            questionRu: "Какие три основные технологии используются для создания веб-страницы?",
            questionKk: "Веб-бет жасау үшін пайдаланылатын үш негізгі технология қандай?",
            answer: "HTML (structure), CSS (styling), JavaScript (interactivity).",
            answerRu: "HTML (структура), CSS (стилизация), JavaScript (интерактивность).",
            answerKk: "HTML (құрылым), CSS (стильдеу), JavaScript (интерактивтілік).",
            hint: "Content, appearance, and behavior.",
            hintRu: "Содержимое, внешний вид и поведение.",
            hintKk: "Мазмұн, сыртқы көрініс және мінез-құлық.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is localStorage and why is it useful for web apps?",
            questionRu: "Что такое localStorage и почему он полезен для веб-приложений?",
            questionKk: "localStorage деген не және ол веб-қосымшалар үшін неге пайдалы?",
            answer: "localStorage is a browser API that stores key-value data persistently on the user's device. It is useful for saving user preferences, to-do items, or session data without needing a server database.",
            answerRu: "localStorage — это браузерный API, который постоянно хранит данные в формате ключ-значение на устройстве пользователя. Он полезен для сохранения настроек пользователя, списка дел или данных сессии без серверной базы данных.",
            answerKk: "localStorage — пайдаланушы құрылғысында кілт-мән пішіміндегі деректерді тұрақты сақтайтын браузерлік API. Ол серверлік дерекқорсыз пайдаланушы параметрлерін, істер тізімін немесе сеанс деректерін сақтауға пайдалы.",
            hint: "It stores data in the browser even after you close the tab.",
            hintRu: "Он хранит данные в браузере даже после закрытия вкладки.",
            hintKk: "Ол қойынды жабылғаннан кейін де деректерді браузерде сақтайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Describe the steps to deploy a web app to the internet using a free hosting platform.",
            questionRu: "Опишите шаги развёртывания веб-приложения в интернете на бесплатном хостинге.",
            questionKk: "Тегін хостинг платформасы арқылы веб-қосымшаны интернетке орналастыру қадамдарын сипаттаңыз.",
            answer: "1. Push code to GitHub. 2. Connect repo to Vercel/Netlify. 3. Configure build settings (if needed). 4. Deploy — the platform gives you a live URL. 5. Set up a custom domain (optional).",
            answerRu: "1. Отправьте код на GitHub. 2. Подключите репозиторий к Vercel/Netlify. 3. Настройте параметры сборки (если нужно). 4. Задеплойте — платформа даст вам рабочий URL. 5. Подключите собственный домен (по желанию).",
            answerKk: "1. Кодты GitHub-қа жіберіңіз. 2. Репозиторийді Vercel/Netlify-ға қосыңыз. 3. Құрастыру параметрлерін реттеңіз (қажет болса). 4. Деплой жасаңыз — платформа сізге жұмыс істейтін URL береді. 5. Өз доменіңізді қосыңыз (қалау бойынша).",
            hint: "Platforms like Vercel and Netlify auto-deploy from GitHub repos.",
            hintRu: "Платформы вроде Vercel и Netlify автоматически развёртывают из GitHub-репозиториев.",
            hintKk: "Vercel және Netlify сияқты платформалар GitHub репозиторийлерінен автоматты түрде орналастырады.",
            xp: 20
          }
        ]
      }
    ]
  },

  "Programming & AI_11": {
    planetName: "Programming & AI",
    introduction: {
      en: "Welcome to Programming & AI! You will master data structures and algorithms — the core of computer science — including sorting, searching, recursion, trees, graphs, and get your first introduction to AI and machine learning.",
      ru: "Добро пожаловать в Программирование и ИИ! Вы освоите структуры данных и алгоритмы — основу информатики — включая сортировку, поиск, рекурсию, деревья, графы, а также получите первое введение в ИИ и машинное обучение."
    },
    sections: [
      {
        title: "Arrays & Data Structures",
        titleRu: "Массивы и структуры данных",
        titleKk: "Массивтер және деректер құрылымдары",
        content: "Data structures are organized ways to store and access data efficiently. Arrays (lists in Python) store elements in contiguous memory with O(1) index access. Choosing the right data structure is crucial — it can mean the difference between a program that runs in seconds versus hours. Common structures include arrays, linked lists, stacks, queues, trees, and hash maps.",
        contentRu: "Структуры данных — организованные способы хранения и эффективного доступа к данным. Массивы (списки в Python) хранят элементы в непрерывной памяти с доступом O(1) по индексу. Выбор правильной структуры критичен — он может определить, работает программа секунды или часы. Основные структуры: массивы, связные списки, стеки, очереди, деревья, хеш-таблицы.",
        contentKk: "Деректер құрылымдары — деректерді тиімді сақтау және оларға қол жеткізудің ұйымдасқан тәсілдері. Массивтер (Python-дағы тізімдер) элементтерді O(1) индекстік қол жеткізумен үздіксіз жадта сақтайды. Дұрыс құрылымды таңдау маңызды — ол бағдарламаның секундтарда немесе сағаттарда жұмыс істеуін анықтайды. Негізгі құрылымдар: массивтер, байланысқан тізімдер, стектер, кезектер, ағаштар, хеш-кестелер.",
        keyFormulas: [
          {
            formula: "Array access: O(1) | Search: O(n) | Insert/Delete: O(n)",
            formulaRu: "Доступ к массиву: O(1) | Поиск: O(n) | Вставка/Удаление: O(n)",
            formulaKk: "Массивке қатынау: O(1) | Іздеу: O(n) | Қосу/Жою: O(n)",
            description: "Time complexity of basic array operations",
            descriptionRu: "Временная сложность базовых операций массива",
            descriptionKk: "Массивтің негізгі амалдарының уақыттық күрделілігі"
          },
          {
            formula: "Hash Map: O(1) average for get/set/delete",
            formulaRu: "Хэш-таблица: O(1) в среднем для get/set/delete",
            formulaKk: "Хэш-кесте: get/set/delete үшін орта есеппен O(1)",
            description: "Hash maps provide constant-time average access by key",
            descriptionRu: "Хеш-таблицы обеспечивают доступ по ключу за константное время в среднем",
            descriptionKk: "Хеш-кестелер кілт бойынша орташа тұрақты уақыттық қол жеткізуді қамтамасыз етеді"
          }
        ],
        solvedExamples: [
          {
            question: "Compare array and hash map for looking up a student by ID from 10,000 records.",
            questionRu: "Сравните массив и хеш-таблицу для поиска студента по ID из 10 000 записей.",
            questionKk: "10 000 жазбадан ID бойынша оқушыны іздеу үшін массив пен хеш-кестені салыстырыңыз.",
            steps: [
              { en: "Array: must scan each element until found — O(n), up to 10,000 checks in the worst case.", ru: "Массив: нужно проверить каждый элемент — O(n), до 10 000 проверок в худшем случае.", kk: "Массив: әр элементті тексеру керек — O(n), ең нашар жағдайда 10 000 тексеру." },
              { en: "Hash map: directly access by key — O(1) average, just one lookup regardless of size.", ru: "Хеш-таблица: прямой доступ по ключу — O(1) в среднем, одна проверка независимо от размера.", kk: "Хеш-кесте: кілт бойынша тікелей қол жеткізу — орташа O(1), өлшемге қарамастан бір іздеу." }
            ],
            answer: "Hash map is far better for lookups by key: O(1) vs O(n). Use a dictionary/hash map when you need fast access by a unique identifier.",
            answerRu: "Хеш-таблица намного лучше для поиска по ключу: O(1) против O(n). Используйте словарь/хеш-таблицу, когда нужен быстрый доступ по уникальному идентификатору.",
            answerKk: "Кілт бойынша іздеуге хеш-кесте әлдеқайда жақсы: O(1) бен O(n). Бірегей идентификатор бойынша жылдам қол жеткізу керек болса, сөздік/хеш-кесте пайдаланыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the time complexity of accessing an element by index in an array?",
            questionRu: "Какова временная сложность доступа к элементу по индексу в массиве?",
            questionKk: "Массивте индекс бойынша элементке қол жеткізудің уақыттық күрделілігі қандай?",
            answer: "O(1) — constant time.",
            answerRu: "O(1) — константное время.",
            answerKk: "O(1) — тұрақты уақыт.",
            hint: "The computer can jump directly to any position using the index.",
            hintRu: "Компьютер может перейти к любой позиции напрямую по индексу.",
            hintKk: "Компьютер индекс арқылы кез келген позицияға тікелей өте алады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "When would you choose a list over a dictionary in Python?",
            questionRu: "Когда вы выберете список вместо словаря в Python?",
            questionKk: "Python-да сөздіктің орнына тізімді қашан таңдайсыз?",
            answer: "Use a list when you need ordered data accessed by position/index. Use a dictionary when you need fast lookup by a unique key.",
            answerRu: "Используйте список, когда нужны упорядоченные данные с доступом по позиции/индексу. Используйте словарь, когда нужен быстрый поиск по уникальному ключу.",
            answerKk: "Орны/индексі бойынша қол жеткізілетін реттелген деректер керек болса, тізім пайдаланыңыз. Бірегей кілт бойынша жылдам іздеу керек болса, сөздік пайдаланыңыз.",
            hint: "Think about how you will access the data — by position or by name.",
            hintRu: "Подумайте, как вы будете обращаться к данным — по позиции или по имени.",
            hintKk: "Деректерге қалай қол жеткізетініңізді ойлаңыз — позиция бойынша ма, атау бойынша ма.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement a function that finds two numbers in an array that sum to a target. Use a hash map for O(n) time instead of O(n^2).",
            questionRu: "Реализуйте функцию поиска двух чисел в массиве с заданной суммой. Используйте хеш-таблицу для O(n) вместо O(n^2).",
            questionKk: "Массивтен берілген мақсатты қосындыға тең екі санды табатын функцияны жүзеге асырыңыз. O(n^2) орнына O(n) үшін хеш-кесте пайдаланыңыз.",
            answer: "def two_sum(nums, target):\\n    seen = {}\\n    for i, n in enumerate(nums):\\n        diff = target - n\\n        if diff in seen: return [seen[diff], i]\\n        seen[n] = i",
            answerRu: "def two_sum(nums, target):\\n    seen = {}\\n    for i, n in enumerate(nums):\\n        diff = target - n\\n        if diff in seen: return [seen[diff], i]\\n        seen[n] = i",
            answerKk: "def two_sum(nums, target):\\n    seen = {}\\n    for i, n in enumerate(nums):\\n        diff = target - n\\n        if diff in seen: return [seen[diff], i]\\n        seen[n] = i",
            hint: "For each number, check if (target - number) is already in your hash map.",
            hintRu: "Для каждого числа проверяйте, есть ли (target - число) в хеш-таблице.",
            hintKk: "Әр сан үшін (мақсат - сан) хеш-кестеде бар-жоғын тексеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Stacks & Queues",
        titleRu: "Стеки и очереди",
        titleKk: "Стектер және кезектер",
        content: "Stacks follow LIFO (Last In, First Out) — like a stack of plates where you take from the top. Queues follow FIFO (First In, First Out) — like a line at a store where the first person is served first. Both are fundamental in computer science for managing function calls, undo operations, breadth-first search, and task scheduling.",
        contentRu: "Стеки работают по принципу LIFO (последний вошёл — первый вышел) — как стопка тарелок. Очереди — по FIFO (первый вошёл — первый вышел) — как очередь в магазине. Обе структуры фундаментальны для управления вызовами функций, отмены действий, поиска в ширину и планирования задач.",
        contentKk: "Стектер LIFO (соңғы кірген — бірінші шыққан) принципі бойынша жұмыс істейді — тарелка үйіндісі сияқты. Кезектер FIFO (бірінші кірген — бірінші шыққан) бойынша — дүкендегі кезек сияқты. Екеуі де функция шақыруларын, болдырмау әрекеттерін, ені бойынша іздеуді және тапсырмаларды жоспарлауды басқару үшін іргелі.",
        keyFormulas: [
          {
            formula: "Stack: push(item) / pop() — LIFO",
            formulaRu: "Стек: push(item) / pop() — LIFO",
            formulaKk: "Стек: push(item) / pop() — LIFO",
            description: "Stack operations: push adds to top, pop removes from top",
            descriptionRu: "Операции стека: push добавляет наверх, pop удаляет сверху",
            descriptionKk: "Стек амалдары: push жоғарыға қосады, pop жоғарыдан жояды"
          },
          {
            formula: "Queue: enqueue(item) / dequeue() — FIFO",
            formulaRu: "Очередь: enqueue(item) / dequeue() — FIFO",
            formulaKk: "Кезек: enqueue(item) / dequeue() — FIFO",
            description: "Queue operations: enqueue adds to back, dequeue removes from front",
            descriptionRu: "Операции очереди: enqueue добавляет в конец, dequeue удаляет из начала",
            descriptionKk: "Кезек амалдары: enqueue соңына қосады, dequeue басынан жояды"
          }
        ],
        solvedExamples: [
          {
            question: "Use a stack to check if parentheses in a string are balanced: '((()))'.",
            questionRu: "Используйте стек для проверки сбалансированности скобок: '((()))'.",
            questionKk: "Жолдағы жақшалардың теңгерімділігін тексеру үшін стек пайдаланыңыз: '((()))'.",
            steps: [
              { en: "For each '(' push to stack. For each ')' pop from stack. If pop fails (empty), unbalanced.", ru: "Для каждой '(' — push. Для каждой ')' — pop. Если pop не удаётся (пусто), несбалансировано.", kk: "Әр '(' үшін push. Әр ')' үшін pop. Егер pop сәтсіз болса (бос), теңгерімсіз." },
              { en: "After processing all characters, if the stack is empty, the string is balanced.", ru: "После обработки всех символов, если стек пуст, строка сбалансирована.", kk: "Барлық таңбалар өңделгеннен кейін, стек бос болса, жол теңгерімді." }
            ],
            answer: "def is_balanced(s):\\n    stack = []\\n    for c in s:\\n        if c == '(': stack.append(c)\\n        elif c == ')': \\n            if not stack: return False\\n            stack.pop()\\n    return len(stack) == 0",
            answerRu: "def is_balanced(s):\\n    stack = []\\n    for c in s:\\n        if c == '(': stack.append(c)\\n        elif c == ')': \\n            if not stack: return False\\n            stack.pop()\\n    return len(stack) == 0",
            answerKk: "def is_balanced(s):\\n    stack = []\\n    for c in s:\\n        if c == '(': stack.append(c)\\n        elif c == ')': \\n            if not stack: return False\\n            stack.pop()\\n    return len(stack) == 0"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does LIFO stand for?",
            questionRu: "Что означает LIFO?",
            questionKk: "LIFO нені білдіреді?",
            answer: "Last In, First Out.",
            answerRu: "Последним пришёл — первым ушёл (LIFO).",
            answerKk: "Соңғы кірген — бірінші шығады (LIFO).",
            hint: "The last item placed on a stack is the first one taken off.",
            hintRu: "Последний элемент, помещённый в стек, первым извлекается.",
            hintKk: "Стекке соңғы қойылған элемент бірінші алынады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give a real-world example of a queue and explain why FIFO makes sense there.",
            questionRu: "Приведите пример очереди из реальной жизни и объясните, почему FIFO там уместен.",
            questionKk: "Кезектің нақты өмірден мысалын келтіріңіз және FIFO неге сол жерде мағынасы бар екенін түсіндіріңіз.",
            answer: "A printer queue: print jobs are processed in the order they were submitted. The first document sent should be printed first — FIFO is fair.",
            answerRu: "Очередь принтера: задания печати обрабатываются в порядке отправки. Первый отправленный документ должен печататься первым — FIFO справедлив.",
            answerKk: "Принтер кезегі: басып шығару тапсырмалары жіберілген ретімен өңделеді. Бірінші жіберілген құжат бірінші басылып шығуы керек — FIFO әділ.",
            hint: "Think about waiting in line for something.",
            hintRu: "Подумайте о том, как вы стоите в очереди.",
            hintKk: "Бір нәрсеге кезекте тұруды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement a stack using only two queues. Describe the push and pop operations.",
            questionRu: "Реализуйте стек, используя только две очереди. Опишите push и pop.",
            questionKk: "Тек екі кезекті пайдаланып стек жүзеге асырыңыз. push және pop амалдарын сипаттаңыз.",
            answer: "Push: enqueue to q1. Pop: move all but last from q1 to q2, dequeue the last item from q1 (this is the 'top'), swap q1 and q2. This gives LIFO behavior using FIFO queues.",
            answerRu: "Push: добавить в очередь q1. Pop: переместить все элементы, кроме последнего, из q1 в q2, извлечь последний элемент из q1 (это «вершина»), поменять q1 и q2 местами. Это даёт поведение LIFO с использованием очередей FIFO.",
            answerKk: "Push: q1 кезегіне қосу. Pop: q1-ден соңғысынан басқа барлық элементті q2-ға жылжытып, q1-ден соңғы элементті алу (бұл — «төбе»), q1 мен q2 орнын ауыстыру. Бұл FIFO кезектерін пайдаланып LIFO мінез-құлқын береді.",
            hint: "For pop, you need to get to the last item added — move everything else to the other queue.",
            hintRu: "Для pop нужно добраться до последнего добавленного — переместите остальное в другую очередь.",
            hintKk: "Pop үшін соңғы қосылған элементке жету керек — қалғанын басқа кезекке жылжытыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Linked Lists",
        titleRu: "Связные списки",
        titleKk: "Байланысқан тізімдер",
        content: "A linked list is a data structure where each element (node) contains a value and a pointer to the next node. Unlike arrays, linked lists do not require contiguous memory, making insertion and deletion O(1) at known positions. However, accessing an element by index requires O(n) traversal. Linked lists are the building blocks for stacks, queues, and more complex structures.",
        contentRu: "Связный список — структура данных, где каждый элемент (узел) содержит значение и указатель на следующий узел. В отличие от массивов, связные списки не требуют непрерывной памяти, что делает вставку и удаление O(1) в известных позициях. Однако доступ по индексу требует O(n) обхода.",
        contentKk: "Байланысқан тізім — әр элемент (түйін) мән мен келесі түйінге сілтемені қамтитын деректер құрылымы. Массивтерден айырмашылығы, байланысқан тізімдер үздіксіз жад қажет етпейді, бұл белгілі позицияларда кірістіру мен жоюды O(1) етеді. Алайда, индекс бойынша қол жеткізу O(n) өтуді қажет етеді.",
        keyFormulas: [
          {
            formula: "class Node:\\n    def __init__(self, val):\\n        self.val = val\\n        self.next = None",
            description: "Basic linked list node with value and next pointer",
            descriptionRu: "Базовый узел связного списка со значением и указателем next",
            descriptionKk: "Мәні мен next сілтемесі бар негізгі байланысқан тізім түйіні"
          }
        ],
        solvedExamples: [
          {
            question: "Create a linked list with values 1 → 2 → 3 and traverse it to print all values.",
            questionRu: "Создайте связный список 1 → 2 → 3 и обойдите его для вывода всех значений.",
            questionKk: "1 → 2 → 3 мәндері бар байланысқан тізім жасаңыз және барлық мәндерді шығару үшін оны өтіңіз.",
            steps: [
              { en: "Create nodes: a = Node(1); b = Node(2); c = Node(3); a.next = b; b.next = c", ru: "Создайте узлы: a = Node(1); b = Node(2); c = Node(3); a.next = b; b.next = c", kk: "Түйіндерді жасаңыз: a = Node(1); b = Node(2); c = Node(3); a.next = b; b.next = c" },
              { en: "Traverse: current = a; while current: print(current.val); current = current.next — prints 1, 2, 3.", ru: "Обход: current = a; while current: print(current.val); current = current.next — выводит 1, 2, 3.", kk: "Өту: current = a; while current: print(current.val); current = current.next — 1, 2, 3 шығарады." }
            ],
            answer: "Create three nodes, link them with .next, traverse with a while loop following .next until None.",
            answerRu: "Создайте три узла, свяжите их через .next и обойдите циклом while, следуя по .next до None.",
            answerKk: "Үш түйін жасап, оларды .next арқылы байланыстырыңыз да, .next бойынша None-ға дейін while циклімен өтіңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the two parts of a linked list node?",
            questionRu: "Из каких двух частей состоит узел связного списка?",
            questionKk: "Байланысқан тізім түйінінің екі бөлігі қандай?",
            answer: "A value (data) and a pointer/reference to the next node.",
            answerRu: "Значение (данные) и указатель/ссылка на следующий узел.",
            answerKk: "Мән (деректер) және келесі түйінге көрсеткіш/сілтеме.",
            hint: "One part holds data, the other points to the rest of the list.",
            hintRu: "Одна часть хранит данные, другая указывает на остаток списка.",
            hintKk: "Бір бөлігі деректерді сақтайды, екіншісі тізімнің қалған бөлігіне нұсқайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What advantage does a linked list have over an array for insertions?",
            questionRu: "Какое преимущество связного списка перед массивом при вставке?",
            questionKk: "Кірістіру кезінде байланысқан тізімнің массив алдында қандай артықшылығы бар?",
            answer: "Inserting at a known position in a linked list is O(1) — just update pointers. In an array, insertion requires shifting all subsequent elements, which is O(n).",
            answerRu: "Вставка в известную позицию связного списка — O(1): достаточно обновить указатели. В массиве вставка требует сдвига всех последующих элементов, что составляет O(n).",
            answerKk: "Байланыс тізімінің белгілі орнына енгізу — O(1): тек сілтемелерді жаңарту жеткілікті. Массивте енгізу кейінгі барлық элементті жылжытуды қажет етеді, бұл O(n).",
            hint: "Think about what happens to other elements when you insert in the middle.",
            hintRu: "Подумайте, что происходит с другими элементами при вставке в середину.",
            hintKk: "Ортасына кірістіргенде басқа элементтерге не болатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a function to reverse a singly linked list in-place.",
            questionRu: "Напишите функцию разворота односвязного списка на месте.",
            questionKk: "Бір бағытты байланысқан тізімді орнында кері аударатын функция жазыңыз.",
            answer: "def reverse(head):\\n    prev = None\\n    current = head\\n    while current:\\n        next_node = current.next\\n        current.next = prev\\n        prev = current\\n        current = next_node\\n    return prev",
            answerRu: "def reverse(head):\\n    prev = None\\n    current = head\\n    while current:\\n        next_node = current.next\\n        current.next = prev\\n        prev = current\\n        current = next_node\\n    return prev",
            answerKk: "def reverse(head):\\n    prev = None\\n    current = head\\n    while current:\\n        next_node = current.next\\n        current.next = prev\\n        prev = current\\n        current = next_node\\n    return prev",
            hint: "Use three pointers: previous, current, and next. Reverse each link as you go.",
            hintRu: "Используйте три указателя: previous, current, next. Разворачивайте каждую связь.",
            hintKk: "Үш сілтеме пайдаланыңыз: previous, current, next. Әр байланысты кері бұрыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Sorting Algorithms",
        titleRu: "Алгоритмы сортировки",
        titleKk: "Сұрыптау алгоритмдері",
        content: "Sorting puts data in order (ascending or descending). Simple algorithms like Bubble Sort and Selection Sort are O(n^2) — fine for small lists but slow for large ones. Efficient algorithms like Merge Sort and Quick Sort are O(n log n) on average. Understanding sorting is fundamental because many other algorithms require sorted data.",
        contentRu: "Сортировка упорядочивает данные (по возрастанию или убыванию). Простые алгоритмы — Bubble Sort и Selection Sort — имеют сложность O(n^2): подходят для маленьких списков, но медленны для больших. Эффективные — Merge Sort и Quick Sort — O(n log n) в среднем. Понимание сортировки фундаментально, так как многие алгоритмы требуют отсортированных данных.",
        contentKk: "Сұрыптау деректерді ретке (өсу немесе кему бойынша) келтіреді. Bubble Sort және Selection Sort сияқты қарапайым алгоритмдер O(n^2) — кіші тізімдер үшін жарайды, бірақ үлкен тізімдер үшін баяу. Merge Sort және Quick Sort сияқты тиімді алгоритмдер орташа O(n log n). Сұрыптауды түсіну маңызды, себебі көптеген алгоритмдер сұрыпталған деректерді қажет етеді.",
        keyFormulas: [
          {
            formula: "Bubble Sort: O(n^2) | Merge Sort: O(n log n) | Quick Sort: O(n log n) avg",
            formulaRu: "Пузырьковая сортировка: O(n^2) | Сортировка слиянием: O(n log n) | Быстрая сортировка: O(n log n) в среднем",
            formulaKk: "Көпіршікті сұрыптау: O(n^2) | Қосу арқылы сұрыптау: O(n log n) | Жылдам сұрыптау: орта есеппен O(n log n)",
            description: "Time complexities of common sorting algorithms",
            descriptionRu: "Временные сложности популярных алгоритмов сортировки",
            descriptionKk: "Танымал сұрыптау алгоритмдерінің уақыттық күрделіліктері"
          }
        ],
        solvedExamples: [
          {
            question: "Trace through Bubble Sort for [5, 3, 1]: show each pass.",
            questionRu: "Проследите Bubble Sort для [5, 3, 1]: покажите каждый проход.",
            questionKk: "[5, 3, 1] үшін Bubble Sort-ты қадамдап көрсетіңіз: әр өтуді көрсетіңіз.",
            steps: [
              { en: "Pass 1: compare 5,3 → swap → [3,5,1]; compare 5,1 → swap → [3,1,5]. Largest (5) is now at end.", ru: "Проход 1: сравнить 5,3 → обмен → [3,5,1]; сравнить 5,1 → обмен → [3,1,5]. Наибольший (5) в конце.", kk: "1-өту: 5,3 салыстыру → ауыстыру → [3,5,1]; 5,1 салыстыру → ауыстыру → [3,1,5]. Ең үлкен (5) соңында." },
              { en: "Pass 2: compare 3,1 → swap → [1,3,5]. Now sorted! Total: 3 comparisons, 3 swaps.", ru: "Проход 2: сравнить 3,1 → обмен → [1,3,5]. Отсортировано! Итого: 3 сравнения, 3 обмена.", kk: "2-өту: 3,1 салыстыру → ауыстыру → [1,3,5]. Сұрыпталды! Барлығы: 3 салыстыру, 3 ауыстыру." }
            ],
            answer: "[5,3,1] → [3,1,5] → [1,3,5]. Bubble Sort repeatedly swaps adjacent elements.",
            answerRu: "[5,3,1] → [3,1,5] → [1,3,5]. Сортировка пузырьком многократно меняет местами соседние элементы.",
            answerKk: "[5,3,1] → [3,1,5] → [1,3,5]. Көпіршік сұрыптау көршілес элементтерді қайта-қайта ауыстырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the time complexity of Bubble Sort?",
            questionRu: "Какова временная сложность Bubble Sort?",
            questionKk: "Bubble Sort уақыттық күрделілігі қандай?",
            answer: "O(n^2).",
            answerRu: "O(n^2).",
            answerKk: "O(n^2).",
            hint: "It uses nested loops — each element is compared with every other.",
            hintRu: "Он использует вложенные циклы — каждый элемент сравнивается с каждым.",
            hintKk: "Ол кірістірілген циклдерді пайдаланады — әр элемент әр басқасымен салыстырылады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why is Merge Sort faster than Bubble Sort for large datasets?",
            questionRu: "Почему Merge Sort быстрее Bubble Sort для больших данных?",
            questionKk: "Merge Sort неге үлкен деректер жиындары үшін Bubble Sort-тан жылдам?",
            answer: "Merge Sort is O(n log n) while Bubble Sort is O(n^2). For 1 million items: Merge Sort does ~20 million operations vs Bubble Sort's ~1 trillion.",
            answerRu: "Сортировка слиянием — O(n log n), а пузырьковая сортировка — O(n^2). Для 1 миллиона элементов: сортировка слиянием выполняет ~20 миллионов операций против ~1 триллиона у пузырьковой.",
            answerKk: "Біріктіру сұрыптауы — O(n log n), ал көпіршік сұрыптау — O(n^2). 1 миллион элемент үшін: біріктіру сұрыптауы ~20 миллион амал орындаса, көпіршік сұрыптау ~1 триллион амал орындайды.",
            hint: "Compare n^2 vs n log n for large n.",
            hintRu: "Сравните n^2 и n log n для больших n.",
            hintKk: "Үлкен n үшін n^2 мен n log n салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement Merge Sort in Python.",
            questionRu: "Реализуйте Merge Sort на Python.",
            questionKk: "Python-да Merge Sort жүзеге асырыңыз.",
            answer: "def merge_sort(arr):\\n    if len(arr) <= 1: return arr\\n    mid = len(arr) // 2\\n    left = merge_sort(arr[:mid])\\n    right = merge_sort(arr[mid:])\\n    return merge(left, right)\\ndef merge(l, r):\\n    result = []\\n    i = j = 0\\n    while i < len(l) and j < len(r):\\n        if l[i] <= r[j]: result.append(l[i]); i += 1\\n        else: result.append(r[j]); j += 1\\n    return result + l[i:] + r[j:]",
            answerRu: "def merge_sort(arr):\\n    if len(arr) <= 1: return arr\\n    mid = len(arr) // 2\\n    left = merge_sort(arr[:mid])\\n    right = merge_sort(arr[mid:])\\n    return merge(left, right)\\ndef merge(l, r):\\n    result = []\\n    i = j = 0\\n    while i < len(l) and j < len(r):\\n        if l[i] <= r[j]: result.append(l[i]); i += 1\\n        else: result.append(r[j]); j += 1\\n    return result + l[i:] + r[j:]",
            answerKk: "def merge_sort(arr):\\n    if len(arr) <= 1: return arr\\n    mid = len(arr) // 2\\n    left = merge_sort(arr[:mid])\\n    right = merge_sort(arr[mid:])\\n    return merge(left, right)\\ndef merge(l, r):\\n    result = []\\n    i = j = 0\\n    while i < len(l) and j < len(r):\\n        if l[i] <= r[j]: result.append(l[i]); i += 1\\n        else: result.append(r[j]); j += 1\\n    return result + l[i:] + r[j:]",
            hint: "Split the array in half recursively, then merge sorted halves.",
            hintRu: "Рекурсивно разделите массив пополам, затем слейте отсортированные половины.",
            hintKk: "Массивті рекурсивті түрде екіге бөліңіз, содан кейін сұрыпталған жартыларды біріктіріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Searching",
        titleRu: "Алгоритмы поиска",
        titleKk: "Іздеу алгоритмдері",
        content: "Linear search checks every element one by one — O(n) time. Binary search works only on sorted data by repeatedly halving the search space — O(log n) time. For 1 million sorted items, binary search needs at most 20 comparisons versus 1 million for linear search. Choosing the right search algorithm is essential for performance.",
        contentRu: "Линейный поиск проверяет каждый элемент — O(n). Бинарный поиск работает только с отсортированными данными, многократно деля пространство поиска пополам — O(log n). Для 1 миллиона отсортированных элементов бинарный поиск делает максимум 20 сравнений против 1 миллиона у линейного. Выбор алгоритма поиска критичен для производительности.",
        contentKk: "Сызықтық іздеу әр элементті біртіндеп тексереді — O(n). Екілік іздеу тек сұрыпталған деректермен жұмыс істейді, іздеу кеңістігін қайта-қайта екіге бөледі — O(log n). 1 миллион сұрыпталған элемент үшін екілік іздеу ең көбі 20 салыстыру жасайды, сызықтық іздеу 1 миллион. Дұрыс іздеу алгоритмін таңдау өнімділік үшін маңызды.",
        keyFormulas: [
          {
            formula: "Linear: O(n) | Binary: O(log n) — requires sorted data",
            formulaRu: "Линейный: O(n) | Бинарный: O(log n) — требует отсортированных данных",
            formulaKk: "Сызықтық: O(n) | Бинарлық: O(log n) — сұрыпталған деректерді талап етеді",
            description: "Time complexities of linear and binary search",
            descriptionRu: "Временные сложности линейного и бинарного поиска",
            descriptionKk: "Сызықтық және екілік іздеудің уақыттық күрделіліктері"
          }
        ],
        solvedExamples: [
          {
            question: "Use binary search to find 7 in [1, 3, 5, 7, 9, 11]. Show each step.",
            questionRu: "Найдите 7 в [1, 3, 5, 7, 9, 11] бинарным поиском. Покажите каждый шаг.",
            questionKk: "[1, 3, 5, 7, 9, 11] ішінен екілік іздеумен 7-ні табыңыз. Әр қадамды көрсетіңіз.",
            steps: [
              { en: "Step 1: mid index = 2, value = 5. Target 7 > 5, so search right half [7, 9, 11].", ru: "Шаг 1: середина = индекс 2, значение 5. Цель 7 > 5, ищем в правой половине [7, 9, 11].", kk: "1-қадам: ортасы = 2 индекс, мәні 5. Мақсат 7 > 5, оң жартысында іздейміз [7, 9, 11]." },
              { en: "Step 2: mid of [7,9,11] is 9. Target 7 < 9, search left → find 7 at index 3. Done in 3 steps!", ru: "Шаг 2: середина [7,9,11] = 9. Цель 7 < 9, ищем слева → нашли 7 по индексу 3. Готово за 3 шага!", kk: "2-қадам: [7,9,11] ортасы = 9. Мақсат 7 < 9, солда іздейміз → 3 индексте 7-ні таптық. 3 қадамда дайын!" }
            ],
            answer: "Found 7 at index 3 in 3 comparisons (vs 4 for linear search).",
            answerRu: "Число 7 найдено по индексу 3 за 3 сравнения (против 4 при линейном поиске).",
            answerKk: "7 саны 3 индексінен 3 салыстыруда табылды (сызықтық іздеудегі 4-ке қарсы)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Can you use binary search on an unsorted array?",
            questionRu: "Можно ли использовать бинарный поиск в неотсортированном массиве?",
            questionKk: "Сұрыпталмаған массивте екілік іздеуді пайдалануға бола ма?",
            answer: "No. Binary search requires the array to be sorted first.",
            answerRu: "Нет. Бинарный поиск требует, чтобы массив был предварительно отсортирован.",
            answerKk: "Жоқ. Бинарлық іздеу үшін массив алдымен сұрыпталған болуы керек.",
            hint: "Binary search relies on being able to eliminate half the data at each step.",
            hintRu: "Бинарный поиск полагается на возможность отбросить половину данных на каждом шаге.",
            hintKk: "Екілік іздеу әр қадамда деректердің жартысын жоя алуға тәуелді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "How many comparisons does binary search need for an array of 1,024 elements in the worst case?",
            questionRu: "Сколько сравнений нужно бинарному поиску для массива из 1024 элементов в худшем случае?",
            questionKk: "Екілік іздеу 1024 элементті массив үшін ең нашар жағдайда қанша салыстыру қажет етеді?",
            answer: "10 comparisons. log2(1024) = 10.",
            answerRu: "10 сравнений. log2(1024) = 10.",
            answerKk: "10 салыстыру. log2(1024) = 10.",
            hint: "How many times can you halve 1024 before reaching 1?",
            hintRu: "Сколько раз можно поделить 1024 пополам до 1?",
            hintKk: "1024-ті 1-ге жеткенше қанша рет екіге бөлуге болады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement binary search in Python, returning the index or -1 if not found.",
            questionRu: "Реализуйте бинарный поиск на Python, возвращая индекс или -1.",
            questionKk: "Python-да екілік іздеуді жүзеге асырыңыз, индексті немесе -1 қайтарыңыз.",
            answer: "def binary_search(arr, target):\\n    lo, hi = 0, len(arr) - 1\\n    while lo <= hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] == target: return mid\\n        elif arr[mid] < target: lo = mid + 1\\n        else: hi = mid - 1\\n    return -1",
            answerRu: "def binary_search(arr, target):\\n    lo, hi = 0, len(arr) - 1\\n    while lo <= hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] == target: return mid\\n        elif arr[mid] < target: lo = mid + 1\\n        else: hi = mid - 1\\n    return -1",
            answerKk: "def binary_search(arr, target):\\n    lo, hi = 0, len(arr) - 1\\n    while lo <= hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] == target: return mid\\n        elif arr[mid] < target: lo = mid + 1\\n        else: hi = mid - 1\\n    return -1",
            hint: "Use two pointers (lo, hi) and update them based on comparison with mid element.",
            hintRu: "Используйте два указателя (lo, hi), обновляя их по сравнению с серединой.",
            hintKk: "Екі сілтеме (lo, hi) пайдаланып, оларды орта элементпен салыстыру бойынша жаңартыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Big-O Notation",
        titleRu: "Нотация Big-O",
        titleKk: "Big-O нотациясы",
        content: "Big-O notation describes how an algorithm's time or space grows as input size increases. O(1) is constant, O(log n) is logarithmic, O(n) is linear, O(n log n) is linearithmic, O(n^2) is quadratic, and O(2^n) is exponential. Understanding Big-O helps you choose efficient algorithms and predict performance for large inputs.",
        contentRu: "Нотация Big-O описывает, как время или память алгоритма растёт с увеличением входных данных. O(1) — константа, O(log n) — логарифмическая, O(n) — линейная, O(n log n) — линейно-логарифмическая, O(n^2) — квадратичная, O(2^n) — экспоненциальная. Big-O помогает выбирать эффективные алгоритмы и прогнозировать производительность.",
        contentKk: "Big-O нотациясы алгоритмнің уақыты немесе кеңістігі кіріс өлшемі ұлғайған сайын қалай өсетінін сипаттайды. O(1) — тұрақты, O(log n) — логарифмдік, O(n) — сызықтық, O(n log n) — сызықтық-логарифмдік, O(n^2) — квадраттық, O(2^n) — экспоненциалды. Big-O тиімді алгоритмдерді таңдауға және үлкен кірістер үшін өнімділікті болжауға көмектеседі.",
        keyFormulas: [
          {
            formula: "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)",
            description: "Common Big-O complexities from fastest to slowest",
            descriptionRu: "Типичные сложности Big-O от быстрых к медленным",
            descriptionKk: "Жылдамнан баяуға дейінгі типтік Big-O күрделіліктері"
          }
        ],
        solvedExamples: [
          {
            question: "What is the Big-O of: for i in range(n): for j in range(n): print(i, j)?",
            questionRu: "Какова Big-O для: for i in range(n): for j in range(n): print(i, j)?",
            questionKk: "for i in range(n): for j in range(n): print(i, j) үшін Big-O қандай?",
            steps: [
              { en: "The outer loop runs n times. The inner loop also runs n times for each outer iteration.", ru: "Внешний цикл выполняется n раз. Внутренний — тоже n раз для каждой итерации внешнего.", kk: "Сыртқы цикл n рет жүреді. Ішкі цикл сыртқы циклдің әр итерациясы үшін n рет жүреді." },
              { en: "Total operations: n × n = n^2. The Big-O is O(n^2) — quadratic.", ru: "Всего операций: n × n = n^2. Big-O = O(n^2) — квадратичная.", kk: "Жалпы амалдар: n × n = n^2. Big-O = O(n^2) — квадраттық." }
            ],
            answer: "O(n^2) — nested loops each running n times.",
            answerRu: "O(n^2) — вложенные циклы, каждый выполняется n раз.",
            answerKk: "O(n^2) — әрқайсысы n рет орындалатын ішкі циклдер."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the Big-O of accessing an element in a dictionary by key?",
            questionRu: "Какова Big-O доступа к элементу словаря по ключу?",
            questionKk: "Сөздікте кілт бойынша элементке қол жеткізудің Big-O қандай?",
            answer: "O(1) — constant time on average.",
            answerRu: "O(1) — константное время в среднем.",
            answerKk: "O(1) — орта есеппен тұрақты уақыт.",
            hint: "Hash maps provide direct access by key.",
            hintRu: "Хеш-таблицы обеспечивают прямой доступ по ключу.",
            hintKk: "Хеш-кестелер кілт бойынша тікелей қол жеткізуді қамтамасыз етеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A function has a loop that halves n each iteration until n <= 1. What is its Big-O?",
            questionRu: "Функция с циклом, делящим n пополам до n <= 1. Какова Big-O?",
            questionKk: "n <= 1 болғанша n-ді екіге бөлетін циклі бар функция. Big-O қандай?",
            answer: "O(log n) — halving the input each step is logarithmic.",
            answerRu: "O(log n) — деление входа пополам на каждом шаге даёт логарифмическую сложность.",
            answerKk: "O(log n) — әр қадамда енгізуді екіге бөлу логарифмдік күрделілік береді.",
            hint: "How many times can you halve n? That is log base 2 of n.",
            hintRu: "Сколько раз можно поделить n пополам? Это log2(n).",
            hintKk: "n-ді қанша рет екіге бөлуге болады? Бұл log2(n).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Analyze this function: def mystery(n): if n <= 1: return 1; return mystery(n-1) + mystery(n-1). What is its time complexity?",
            questionRu: "Проанализируйте: def mystery(n): if n <= 1: return 1; return mystery(n-1) + mystery(n-1). Какова сложность?",
            questionKk: "Мынаны талдаңыз: def mystery(n): if n <= 1: return 1; return mystery(n-1) + mystery(n-1). Уақыттық күрделілігі қандай?",
            answer: "O(2^n) — each call spawns 2 more calls, creating a binary tree of calls with depth n.",
            answerRu: "O(2^n) — каждый вызов порождает ещё 2 вызова, образуя двоичное дерево вызовов глубиной n.",
            answerKk: "O(2^n) — әр шақыру тағы 2 шақыру тудырады, нәтижесінде тереңдігі n болатын бинарлық шақыру ағашы пайда болады.",
            hint: "Draw the call tree: each level doubles the number of calls.",
            hintRu: "Нарисуйте дерево вызовов: каждый уровень удваивает число вызовов.",
            hintKk: "Шақыру ағашын сызыңыз: әр деңгей шақырулар санын екі есе арттырады.",
            xp: 20
          }
        ]
      },
      {
        title: "Recursion",
        titleRu: "Рекурсия",
        titleKk: "Рекурсия",
        content: "Recursion is when a function calls itself to solve smaller sub-problems. Every recursive function needs a base case (when to stop) and a recursive case (the self-call with smaller input). Classic examples include factorial, Fibonacci, and tree traversal. Recursion can be elegant but may cause stack overflow for very deep calls.",
        contentRu: "Рекурсия — когда функция вызывает саму себя для решения подзадач. Каждая рекурсивная функция нуждается в базовом случае (когда остановиться) и рекурсивном случае (вызов себя с меньшим входом). Классические примеры: факториал, Фибоначчи, обход дерева. Рекурсия элегантна, но может вызвать переполнение стека при глубоких вызовах.",
        contentKk: "Рекурсия — функция кішірек ішкі есептерді шешу үшін өзін-өзі шақырғанда. Әр рекурсивті функцияға негізгі жағдай (қашан тоқтау) және рекурсивті жағдай (кішірек кіріспен өзін-өзі шақыру) қажет. Классикалық мысалдар: факториал, Фибоначчи, ағашты өту. Рекурсия талғампаз, бірақ өте терең шақыруларда стек толуын тудыруы мүмкін.",
        keyFormulas: [
          {
            formula: "def factorial(n):\\n    if n <= 1: return 1  # base case\\n    return n * factorial(n - 1)  # recursive case",
            formulaRu: "def factorial(n):\\n    if n <= 1: return 1  # базовый случай\\n    return n * factorial(n - 1)  # рекурсивный случай",
            formulaKk: "def factorial(n):\\n    if n <= 1: return 1  # негізгі жағдай\\n    return n * factorial(n - 1)  # рекурсиялық жағдай",
            description: "Recursive factorial with base case and recursive case",
            descriptionRu: "Рекурсивный факториал с базовым и рекурсивным случаями",
            descriptionKk: "Негізгі және рекурсивті жағдайлары бар рекурсивті факториал"
          }
        ],
        solvedExamples: [
          {
            question: "Trace factorial(4) step by step.",
            questionRu: "Проследите factorial(4) пошагово.",
            questionKk: "factorial(4)-ді қадамдап көрсетіңіз.",
            steps: [
              { en: "factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1)", ru: "factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1)", kk: "factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1)" },
              { en: "factorial(1) = 1 (base case). Unwinding: 4 * 3 * 2 * 1 = 24.", ru: "factorial(1) = 1 (базовый случай). Раскрутка: 4 * 3 * 2 * 1 = 24.", kk: "factorial(1) = 1 (негізгі жағдай). Кері ашу: 4 * 3 * 2 * 1 = 24." }
            ],
            answer: "factorial(4) = 24. The function calls itself 3 times before hitting the base case.",
            answerRu: "factorial(4) = 24. Функция вызывает сама себя 3 раза, прежде чем достигнет базового случая.",
            answerKk: "factorial(4) = 24. Функция базалық жағдайға жеткенше өзін-өзі 3 рет шақырады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the two essential parts of every recursive function?",
            questionRu: "Какие два обязательных элемента каждой рекурсивной функции?",
            questionKk: "Әр рекурсивті функцияның екі міндетті бөлігі қандай?",
            answer: "A base case (stopping condition) and a recursive case (self-call).",
            answerRu: "Базовый случай (условие остановки) и рекурсивный случай (самовызов).",
            answerKk: "Базалық жағдай (тоқтау шарты) және рекурсивті жағдай (өзін-өзі шақыру).",
            hint: "Without one of them, the function would run forever or not work at all.",
            hintRu: "Без одного из них функция будет работать вечно или не будет работать.",
            hintKk: "Біреуінсіз функция мәңгі жұмыс істейді немесе мүлде жұмыс істемейді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write a recursive function to calculate the sum of digits of a positive integer (e.g., 123 → 6).",
            questionRu: "Напишите рекурсивную функцию для суммы цифр положительного числа (например, 123 → 6).",
            questionKk: "Оң бүтін санның цифрлар қосындысын есептейтін рекурсивті функция жазыңыз (мысалы, 123 → 6).",
            answer: "def digit_sum(n):\\n    if n < 10: return n\\n    return n % 10 + digit_sum(n // 10)",
            answerRu: "def digit_sum(n):\\n    if n < 10: return n\\n    return n % 10 + digit_sum(n // 10)",
            answerKk: "def digit_sum(n):\\n    if n < 10: return n\\n    return n % 10 + digit_sum(n // 10)",
            hint: "Get the last digit with n % 10, remove it with n // 10.",
            hintRu: "Получите последнюю цифру через n % 10, уберите её через n // 10.",
            hintKk: "Соңғы цифрды n % 10 арқылы алыңыз, оны n // 10 арқылы жойыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a recursive function to generate all permutations of a list [1, 2, 3].",
            questionRu: "Напишите рекурсивную функцию для генерации всех перестановок списка [1, 2, 3].",
            questionKk: "[1, 2, 3] тізімінің барлық орын алмасуларын генерациялайтын рекурсивті функция жазыңыз.",
            answer: "def permutations(lst):\\n    if len(lst) <= 1: return [lst]\\n    result = []\\n    for i, item in enumerate(lst):\\n        rest = lst[:i] + lst[i+1:]\\n        for perm in permutations(rest):\\n            result.append([item] + perm)\\n    return result",
            answerRu: "def permutations(lst):\\n    if len(lst) <= 1: return [lst]\\n    result = []\\n    for i, item in enumerate(lst):\\n        rest = lst[:i] + lst[i+1:]\\n        for perm in permutations(rest):\\n            result.append([item] + perm)\\n    return result",
            answerKk: "def permutations(lst):\\n    if len(lst) <= 1: return [lst]\\n    result = []\\n    for i, item in enumerate(lst):\\n        rest = lst[:i] + lst[i+1:]\\n        for perm in permutations(rest):\\n            result.append([item] + perm)\\n    return result",
            hint: "Pick each element as first, recursively permute the rest, and combine.",
            hintRu: "Выберите каждый элемент первым, рекурсивно переставьте остальные и объедините.",
            hintKk: "Әр элементті бірінші ретінде таңдаңыз, қалғанын рекурсивті ауыстырыңыз және біріктіріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Trees & Graphs",
        titleRu: "Деревья и графы",
        titleKk: "Ағаштар және графтар",
        content: "Trees are hierarchical data structures with a root node and child nodes — like file systems and family trees. Binary trees have at most two children per node. Graphs are networks of nodes connected by edges — used for social networks, maps, and the internet. Traversal algorithms (BFS, DFS) visit every node systematically.",
        contentRu: "Деревья — иерархические структуры с корневым узлом и дочерними — как файловые системы и генеалогические деревья. Бинарные деревья имеют максимум два потомка на узел. Графы — сети узлов, соединённых рёбрами — для соцсетей, карт и интернета. Алгоритмы обхода (BFS, DFS) посещают каждый узел систематически.",
        contentKk: "Ағаштар — түбірлік түйіні мен бала түйіндері бар иерархиялық құрылымдар — файлдық жүйелер мен отбасы ағаштары сияқты. Екілік ағаштардың әр түйінде ең көбі екі бала бар. Графтар — шеттермен байланысқан түйіндер желілері — әлеуметтік желілер, карталар және интернет үшін. Өту алгоритмдері (BFS, DFS) әр түйінді жүйелі түрде аралайды.",
        keyFormulas: [
          {
            formula: "BFS uses a Queue | DFS uses a Stack (or recursion)",
            formulaRu: "BFS использует очередь | DFS использует стек (или рекурсию)",
            formulaKk: "BFS кезекті қолданады | DFS стекті (немесе рекурсияны) қолданады",
            description: "Breadth-first search explores level by level; depth-first goes deep first",
            descriptionRu: "BFS обходит уровень за уровнем; DFS углубляется сначала",
            descriptionKk: "BFS деңгей-деңгеймен аралайды; DFS алдымен тереңге барады"
          }
        ],
        solvedExamples: [
          {
            question: "Perform BFS on a tree: root A, children B and C, B's children D and E. List the visit order.",
            questionRu: "Выполните BFS на дереве: корень A, потомки B и C, у B потомки D и E. Укажите порядок обхода.",
            questionKk: "Ағашта BFS орындаңыз: түбір A, балалары B және C, B-нің балалары D және E. Аралау ретін көрсетіңіз.",
            steps: [
              { en: "BFS uses a queue. Start with A. Dequeue A, enqueue its children B, C. Queue: [B, C].", ru: "BFS использует очередь. Начало: A. Извлекаем A, добавляем B, C. Очередь: [B, C].", kk: "BFS кезек пайдаланады. A-дан бастаңыз. A-ны шығарыңыз, балалары B, C-ні қосыңыз. Кезек: [B, C]." },
              { en: "Dequeue B → enqueue D, E. Queue: [C, D, E]. Dequeue C, D, E. Visit order: A, B, C, D, E.", ru: "Извлекаем B → добавляем D, E. Очередь: [C, D, E]. Извлекаем C, D, E. Порядок: A, B, C, D, E.", kk: "B шығарыңыз → D, E қосыңыз. Кезек: [C, D, E]. C, D, E шығарыңыз. Рет: A, B, C, D, E." }
            ],
            answer: "BFS visit order: A → B → C → D → E (level by level).",
            answerRu: "Порядок обхода BFS: A → B → C → D → E (уровень за уровнем).",
            answerKk: "BFS өту реті: A → B → C → D → E (деңгейлеп)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What data structure does BFS use and what does DFS use?",
            questionRu: "Какую структуру данных использует BFS, а какую DFS?",
            questionKk: "BFS қай деректер құрылымын пайдаланады, ал DFS қайсысын?",
            answer: "BFS uses a queue (FIFO); DFS uses a stack (LIFO) or recursion.",
            answerRu: "BFS использует очередь (FIFO); DFS использует стек (LIFO) или рекурсию.",
            answerKk: "BFS кезекті (FIFO) пайдаланады; DFS стекті (LIFO) немесе рекурсияны пайдаланады.",
            hint: "Breadth = wide/level-by-level = queue. Depth = deep = stack.",
            hintRu: "Ширина = уровень за уровнем = очередь. Глубина = вглубь = стек.",
            hintKk: "Ені = деңгей-деңгеймен = кезек. Тереңдігі = тереңге = стек.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Give a real-world example of a graph and explain what the nodes and edges represent.",
            questionRu: "Приведите пример графа из реальной жизни и объясните, что представляют узлы и рёбра.",
            questionKk: "Графтың нақты өмірден мысалын келтіріңіз және түйіндер мен шеттер нені білдіретінін түсіндіріңіз.",
            answer: "A social network: nodes are users, edges are friendships. If Ali follows Bob, there is a directed edge from Ali to Bob.",
            answerRu: "Социальная сеть: узлы — это пользователи, рёбра — дружеские связи. Если Али подписан на Боба, существует направленное ребро от Али к Бобу.",
            answerKk: "Әлеуметтік желі: түйіндер — пайдаланушылар, қабырғалар — достық байланыстар. Егер Али Бобқа жазылса, Алиден Бобқа бағытталған қабырға бар.",
            hint: "Think about networks where things are connected.",
            hintRu: "Подумайте о сетях, где вещи связаны.",
            hintKk: "Нәрселер байланысқан желілерді ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement DFS for a graph represented as an adjacency list in Python.",
            questionRu: "Реализуйте DFS для графа, представленного списком смежности, на Python.",
            questionKk: "Python-да көршілік тізімі ретінде берілген граф үшін DFS жүзеге асырыңыз.",
            answer: "def dfs(graph, start):\\n    visited = set()\\n    stack = [start]\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            print(node)\\n            for neighbor in graph[node]:\\n                if neighbor not in visited:\\n                    stack.append(neighbor)\\n    return visited",
            answerRu: "def dfs(graph, start):\\n    visited = set()\\n    stack = [start]\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            print(node)\\n            for neighbor in graph[node]:\\n                if neighbor not in visited:\\n                    stack.append(neighbor)\\n    return visited",
            answerKk: "def dfs(graph, start):\\n    visited = set()\\n    stack = [start]\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            print(node)\\n            for neighbor in graph[node]:\\n                if neighbor not in visited:\\n                    stack.append(neighbor)\\n    return visited",
            hint: "Use a stack and a visited set. Pop from stack, mark as visited, push unvisited neighbors.",
            hintRu: "Используйте стек и множество visited. Pop из стека, пометить, добавить непосещённых соседей.",
            hintKk: "Стек және visited жиынтығын пайдаланыңыз. Стектен шығарыңыз, белгілеңіз, аралмаған көршілерді қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "AI/ML Concepts",
        titleRu: "Концепции ИИ/ML",
        titleKk: "ЖИ/ML тұжырымдамалары",
        content: "Artificial Intelligence (AI) is the field of creating systems that can perform tasks requiring human intelligence. Machine Learning (ML) is a subset where computers learn from data instead of being explicitly programmed. The three main types are supervised learning (labeled data), unsupervised learning (finding patterns), and reinforcement learning (learning from rewards).",
        contentRu: "Искусственный интеллект (ИИ) — область создания систем, выполняющих задачи, требующие человеческого интеллекта. Машинное обучение (ML) — подмножество ИИ, где компьютеры учатся на данных. Три основных типа: обучение с учителем (размеченные данные), без учителя (поиск паттернов) и с подкреплением (обучение через награды).",
        contentKk: "Жасанды интеллект (ЖИ) — адам интеллектін қажет ететін тапсырмаларды орындай алатын жүйелер жасау саласы. Машиналық оқыту (ML) — компьютерлер нақты программалаудың орнына деректерден үйренетін ЖИ ішкі жиыны. Үш негізгі түрі: басқарылатын оқыту (белгіленген деректер), басқарылмайтын оқыту (заңдылықтарды табу) және күшейтілген оқыту (марапаттардан үйрену).",
        keyFormulas: [
          {
            formula: "AI ⊃ ML ⊃ Deep Learning ⊃ Neural Networks",
            formulaRu: "AI ⊃ ML ⊃ Глубокое обучение ⊃ Нейронные сети",
            formulaKk: "AI ⊃ ML ⊃ Терең оқыту ⊃ Нейрондық желілер",
            description: "AI is the broadest field; ML, deep learning, and neural networks are nested subsets",
            descriptionRu: "ИИ — самая широкая область; ML, глубокое обучение и нейросети — вложенные подмножества",
            descriptionKk: "ЖИ — ең кең сала; ML, терең оқыту және нейрожелілер — кірістірілген ішкі жиындар"
          }
        ],
        solvedExamples: [
          {
            question: "Classify these tasks: spam detection, customer segmentation, game-playing AI. Which type of ML does each use?",
            questionRu: "Классифицируйте задачи: обнаружение спама, сегментация клиентов, ИИ для игр. Какой тип ML использует каждая?",
            questionKk: "Тапсырмаларды жіктеңіз: спам анықтау, тұтынушыларды сегменттеу, ойын ойнайтын ЖИ. Әрқайсысы ML-дің қай түрін пайдаланады?",
            steps: [
              { en: "Spam detection uses labeled emails (spam/not spam) → supervised learning. Customer segmentation finds groups in unlabeled data → unsupervised learning.", ru: "Обнаружение спама использует размеченные письма (спам/не спам) → обучение с учителем. Сегментация находит группы в неразмеченных данных → без учителя.", kk: "Спам анықтау белгіленген хаттарды (спам/спам емес) пайдаланады → басқарылатын оқыту. Тұтынушыларды сегменттеу белгіленбеген деректерде топтар табады → басқарылмайтын оқыту." },
              { en: "Game-playing AI learns through trial and error with rewards → reinforcement learning.", ru: "ИИ для игр учится методом проб и ошибок с наградами → обучение с подкреплением.", kk: "Ойын ойнайтын ЖИ марапаттармен сынақ-қате әдісі арқылы үйренеді → күшейтілген оқыту." }
            ],
            answer: "Spam detection → supervised; customer segmentation → unsupervised; game AI → reinforcement learning.",
            answerRu: "Определение спама → обучение с учителем; сегментация клиентов → обучение без учителя; игровой ИИ → обучение с подкреплением.",
            answerKk: "Спамды анықтау → бақыланатын оқыту; клиенттерді сегменттеу → бақыланбайтын оқыту; ойын ИИ → бекіту арқылы оқыту."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between AI and Machine Learning?",
            questionRu: "В чём разница между ИИ и машинным обучением?",
            questionKk: "ЖИ мен машиналық оқытудың айырмашылығы неде?",
            answer: "AI is the broad field of intelligent systems. ML is a subset of AI where systems learn from data rather than being explicitly programmed.",
            answerRu: "ИИ — это широкая область интеллектуальных систем. МО — это подмножество ИИ, в котором системы учатся на данных, а не программируются явно.",
            answerKk: "ИИ — интеллектуалды жүйелердің кең саласы. МО — ИИ-дің ішкі жиыны, онда жүйелер тікелей бағдарламаланбай, деректерден үйренеді.",
            hint: "All ML is AI, but not all AI is ML.",
            hintRu: "Всё ML — это ИИ, но не всё ИИ — это ML.",
            hintKk: "Барлық ML — ЖИ, бірақ барлық ЖИ — ML емес.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Explain supervised learning with a concrete example.",
            questionRu: "Объясните обучение с учителем на конкретном примере.",
            questionKk: "Басқарылатын оқытуды нақты мысалмен түсіндіріңіз.",
            answer: "In supervised learning, you train a model on labeled data. Example: showing a model 10,000 photos labeled 'cat' or 'dog', then it predicts labels for new photos it has never seen.",
            answerRu: "В обучении с учителем модель обучается на размеченных данных. Пример: модели показывают 10 000 фото с метками 'cat' или 'dog', после чего она предсказывает метки для новых фото, которые никогда не видела.",
            answerKk: "Бақыланатын оқытуда модель белгіленген деректер арқылы оқытылады. Мысалы: модельге 'cat' немесе 'dog' деп белгіленген 10 000 фотосурет көрсетіледі, содан кейін ол бұрын көрмеген жаңа суреттердің белгілерін болжайды.",
            hint: "Think 'supervised' = someone (the labels) is teaching the model.",
            hintRu: "Думайте: 'с учителем' = кто-то (метки) обучает модель.",
            hintKk: "'Басқарылатын' = біреу (белгілер) модельді оқытады деп ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Describe how you would build a simple spam classifier using supervised learning. What data, features, and steps would you need?",
            questionRu: "Опишите, как построить простой спам-классификатор с обучением с учителем. Какие данные, признаки и шаги нужны?",
            questionKk: "Басқарылатын оқытуды пайдаланып қарапайым спам классификаторын қалай жасайтыныңызды сипаттаңыз. Қандай деректер, белгілер және қадамдар қажет?",
            answer: "1. Collect labeled emails (spam/not spam). 2. Extract features (word frequencies, sender, links count). 3. Split into training and test sets. 4. Train a classifier (e.g., Naive Bayes). 5. Evaluate accuracy on test set. 6. Deploy to filter new emails.",
            answerRu: "1. Соберите размеченные письма (спам/не спам). 2. Извлеките признаки (частоты слов, отправитель, число ссылок). 3. Разбейте на обучающую и тестовую выборки. 4. Обучите классификатор (например, наивный Байес). 5. Оцените точность на тестовой выборке. 6. Разверните для фильтрации новых писем.",
            answerKk: "1. Белгіленген хаттарды жинаңыз (спам/спам емес). 2. Белгілерді алыңыз (сөз жиіліктері, жіберуші, сілтемелер саны). 3. Оқыту және тест жиындарына бөліңіз. 4. Классификаторды оқытыңыз (мысалы, наив Байес). 5. Тест жиынында дәлдікті бағалаңыз. 6. Жаңа хаттарды сүзу үшін енгізіңіз.",
            hint: "Think about the pipeline: data → features → model → evaluation.",
            hintRu: "Подумайте о пайплайне: данные → признаки → модель → оценка.",
            hintKk: "Құбыр туралы ойлаңыз: деректер → белгілер → модель → бағалау.",
            xp: 20
          }
        ]
      },
      {
        title: "Neural Networks Intro",
        titleRu: "Введение в нейросети",
        titleKk: "Нейрожелілерге кіріспе",
        content: "Neural networks are ML models inspired by the human brain. They consist of layers of interconnected nodes (neurons): an input layer, hidden layers, and an output layer. Each connection has a weight that is adjusted during training. Deep learning uses neural networks with many hidden layers. Neural networks power modern AI applications like ChatGPT, image recognition, and self-driving cars.",
        contentRu: "Нейронные сети — модели ML, вдохновлённые мозгом человека. Они состоят из слоёв взаимосвязанных узлов (нейронов): входной слой, скрытые слои и выходной слой. Каждая связь имеет вес, корректируемый при обучении. Глубокое обучение использует сети с множеством скрытых слоёв. Нейросети лежат в основе ChatGPT, распознавания изображений и автопилотов.",
        contentKk: "Нейрожелілер — адам миынан шабыт алған ML модельдері. Олар өзара байланысқан түйіндер (нейрондар) қабаттарынан тұрады: кіріс қабаты, жасырын қабаттар және шығыс қабаты. Әр байланыстың оқыту кезінде реттелетін салмағы бар. Терең оқыту көптеген жасырын қабаттары бар нейрожелілерді пайдаланады. Нейрожелілер ChatGPT, кескінді тану және өзін-өзі басқаратын автомобильдер сияқты заманауи ЖИ қосымшаларын қуаттайды.",
        keyFormulas: [
          {
            formula: "output = activation(sum(weight_i * input_i) + bias)",
            description: "A single neuron computes weighted sum of inputs, adds bias, applies activation function",
            descriptionRu: "Один нейрон вычисляет взвешенную сумму входов, добавляет смещение, применяет функцию активации",
            descriptionKk: "Бір нейрон кірістердің салмақтанған қосындысын есептейді, ығысу қосады, белсендіру функциясын қолданады"
          }
        ],
        solvedExamples: [
          {
            question: "A neuron has inputs [2, 3], weights [0.5, -1], and bias 1. Calculate its output before activation.",
            questionRu: "Нейрон имеет входы [2, 3], веса [0.5, -1] и смещение 1. Вычислите выход до активации.",
            questionKk: "Нейронның кірістері [2, 3], салмақтары [0.5, -1] және ығысуы 1. Белсендіруге дейінгі шығысын есептеңіз.",
            steps: [
              { en: "Weighted sum: (2 * 0.5) + (3 * -1) = 1 + (-3) = -2", ru: "Взвешенная сумма: (2 * 0.5) + (3 * -1) = 1 + (-3) = -2", kk: "Салмақтанған қосынды: (2 * 0.5) + (3 * -1) = 1 + (-3) = -2" },
              { en: "Add bias: -2 + 1 = -1. The output before activation is -1.", ru: "Добавить смещение: -2 + 1 = -1. Выход до активации: -1.", kk: "Ығысу қосу: -2 + 1 = -1. Белсендіруге дейінгі шығыс: -1." }
            ],
            answer: "-1 (before applying the activation function).",
            answerRu: "-1 (до применения функции активации).",
            answerKk: "-1 (активация функциясын қолданғанға дейін)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three types of layers in a neural network?",
            questionRu: "Какие три типа слоёв в нейронной сети?",
            questionKk: "Нейрожелідегі қабаттардың үш түрі қандай?",
            answer: "Input layer, hidden layer(s), and output layer.",
            answerRu: "Входной слой, скрытые слои и выходной слой.",
            answerKk: "Кіріс қабаты, жасырын қабаттар және шығыс қабаты.",
            hint: "Data goes in, gets processed in the middle, and results come out.",
            hintRu: "Данные входят, обрабатываются посередине, результат выходит.",
            hintKk: "Деректер кіреді, ортада өңделеді, нәтиже шығады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the purpose of an activation function in a neural network?",
            questionRu: "Зачем нужна функция активации в нейронной сети?",
            questionKk: "Нейрожелідегі белсендіру функциясының мақсаты қандай?",
            answer: "Activation functions introduce non-linearity, allowing the network to learn complex patterns beyond simple linear relationships.",
            answerRu: "Функции активации вносят нелинейность, позволяя сети изучать сложные закономерности за пределами простых линейных зависимостей.",
            answerKk: "Активация функциялары бейсызықтылық қосып, желіге қарапайым сызықтық байланыстардан тыс күрделі заңдылықтарды үйренуге мүмкіндік береді.",
            hint: "Without it, stacking layers would be no different from a single linear function.",
            hintRu: "Без неё наложение слоёв ничем бы не отличалось от одной линейной функции.",
            hintKk: "Онсыз қабаттарды үйіп тастау бір сызықтық функциядан ешқандай айырмашылығы болмас еді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Explain backpropagation in simple terms: how does a neural network learn from its mistakes?",
            questionRu: "Объясните обратное распространение простыми словами: как нейросеть учится на ошибках?",
            questionKk: "Кері таралуды қарапайым сөздермен түсіндіріңіз: нейрожелі қателерінен қалай үйренеді?",
            answer: "1. Forward pass: input goes through layers to produce a prediction. 2. Compare prediction to correct answer (calculate loss/error). 3. Backward pass: calculate how much each weight contributed to the error. 4. Update weights slightly to reduce error. 5. Repeat thousands of times until accurate.",
            answerRu: "1. Прямой проход: вход проходит через слои и даёт предсказание. 2. Сравните предсказание с правильным ответом (вычислите ошибку). 3. Обратный проход: вычислите, насколько каждый вес повлиял на ошибку. 4. Немного обновите веса, чтобы уменьшить ошибку. 5. Повторите тысячи раз до достижения точности.",
            answerKk: "1. Тура өту: кіріс қабаттар арқылы өтіп, болжам береді. 2. Болжамды дұрыс жауапмен салыстырыңыз (қатені есептеңіз). 3. Кері өту: әр салмақтың қатеге қаншалықты әсер еткенін есептеңіз. 4. Қатені азайту үшін салмақтарды сәл жаңартыңыз. 5. Дәл нәтижеге жеткенше мыңдаған рет қайталаңыз.",
            hint: "Think of it like adjusting a recipe: taste the result, figure out what to change, adjust ingredients, try again.",
            hintRu: "Подумайте как о корректировке рецепта: попробовать результат, понять что менять, скорректировать, повторить.",
            hintKk: "Рецептті түзету сияқты ойлаңыз: нәтижені дәмдеу, нені өзгерту керектігін түсіну, реттеу, қайталау.",
            xp: 20
          }
        ]
      }
    ]
  },

  "Programming & AI_12": {
    planetName: "Programming & AI",
    introduction: {
      en: "Welcome to Programming & AI! You will tackle advanced topics: dynamic programming, graph algorithms, system design, machine learning pipelines, NLP, computer vision, AI ethics, cloud deployment, technical interviews, and building a portfolio project.",
      ru: "Добро пожаловать в Программирование и ИИ! Вы освоите продвинутые темы: динамическое программирование, алгоритмы на графах, проектирование систем, ML-пайплайны, NLP, компьютерное зрение, этику ИИ, облачное развёртывание, технические собеседования и создание портфолио-проекта."
    },
    sections: [
      {
        title: "Dynamic Programming",
        titleRu: "Динамическое программирование",
        titleKk: "Динамикалық программалау",
        content: "Dynamic programming (DP) solves complex problems by breaking them into overlapping sub-problems and storing their solutions to avoid redundant computation. The two approaches are top-down (memoization with recursion) and bottom-up (tabulation with iteration). DP transforms exponential-time algorithms into polynomial time — for example, naive Fibonacci is O(2^n) but DP Fibonacci is O(n).",
        contentRu: "Динамическое программирование (DP) решает сложные задачи, разбивая их на перекрывающиеся подзадачи и сохраняя решения для избежания повторных вычислений. Два подхода: сверху вниз (мемоизация с рекурсией) и снизу вверх (табуляция с итерацией). DP превращает экспоненциальные алгоритмы в полиномиальные — наивный Фибоначчи O(2^n), а DP-версия O(n).",
        contentKk: "Динамикалық программалау (DP) күрделі есептерді қабаттасатын ішкі есептерге бөліп, қайталанатын есептеулерді болдырмау үшін олардың шешімдерін сақтау арқылы шешеді. Екі тәсіл: жоғарыдан төмен (рекурсиямен мемоизация) және төменнен жоғары (итерациямен табуляция). DP экспоненциалды алгоритмдерді полиномдыққа айналдырады — аңғал Фибоначчи O(2^n), бірақ DP Фибоначчи O(n).",
        keyFormulas: [
          {
            formula: "memo = {}\\ndef fib(n):\\n    if n in memo: return memo[n]\\n    if n <= 1: return n\\n    memo[n] = fib(n-1) + fib(n-2)\\n    return memo[n]",
            description: "Top-down memoized Fibonacci — O(n) time and space",
            descriptionRu: "Мемоизированный Фибоначчи сверху вниз — O(n) по времени и памяти",
            descriptionKk: "Жоғарыдан төменге мемоизацияланған Фибоначчи — O(n) уақыт пен кеңістік"
          },
          {
            formula: "dp[i] = dp[i-1] + dp[i-2]  # bottom-up",
            formulaRu: "dp[i] = dp[i-1] + dp[i-2]  # снизу вверх",
            formulaKk: "dp[i] = dp[i-1] + dp[i-2]  # төменнен жоғары қарай",
            description: "Bottom-up tabulation builds the answer from base cases upward",
            descriptionRu: "Табуляция снизу вверх строит ответ от базовых случаев",
            descriptionKk: "Төменнен жоғарыға табуляция жауапты негізгі жағдайлардан бастап құрады"
          }
        ],
        solvedExamples: [
          {
            question: "Solve the climbing stairs problem: you can climb 1 or 2 steps. How many ways to reach step n=5?",
            questionRu: "Решите задачу подъёма по лестнице: можно шагать на 1 или 2 ступени. Сколько способов добраться до ступени n=5?",
            questionKk: "Баспалдақпен көтерілу есебін шешіңіз: 1 немесе 2 баспалдақ аттай аласыз. n=5 баспалдаққа жетудің қанша жолы бар?",
            steps: [
              { en: "Build DP array: dp[0]=1, dp[1]=1, dp[2]=2, dp[3]=3, dp[4]=5, dp[5]=8.", ru: "Построим массив: dp[0]=1, dp[1]=1, dp[2]=2, dp[3]=3, dp[4]=5, dp[5]=8.", kk: "DP массивін құрыңыз: dp[0]=1, dp[1]=1, dp[2]=2, dp[3]=3, dp[4]=5, dp[5]=8." },
              { en: "Each step: dp[i] = dp[i-1] + dp[i-2] because you can arrive from 1 or 2 steps back.", ru: "Каждый шаг: dp[i] = dp[i-1] + dp[i-2], так как можно прийти с 1 или 2 ступеней назад.", kk: "Әр қадам: dp[i] = dp[i-1] + dp[i-2], себебі 1 немесе 2 баспалдақ артынан келуге болады." }
            ],
            answer: "8 ways to reach step 5.",
            answerRu: "8 способов добраться до 5-й ступени.",
            answerKk: "5-ші баспалдаққа жетудің 8 жолы."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What problem does dynamic programming solve that plain recursion does not?",
            questionRu: "Какую проблему решает DP, которую не решает обычная рекурсия?",
            questionKk: "Динамикалық программалау қарапайым рекурсия шешпейтін қандай мәселені шешеді?",
            answer: "DP avoids redundant computation of overlapping sub-problems by storing previously computed results.",
            answerRu: "Динамическое программирование избегает повторных вычислений пересекающихся подзадач, сохраняя ранее вычисленные результаты.",
            answerKk: "Динамикалық бағдарламалау қабаттасатын ішкі есептердің қайта есептелуін бұрын есептелген нәтижелерді сақтау арқылы болдырмайды.",
            hint: "Think about what happens when the same sub-problem is solved multiple times.",
            hintRu: "Подумайте, что происходит, когда одна подзадача решается многократно.",
            hintKk: "Бір ішкі есеп бірнеше рет шешілгенде не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Write bottom-up DP code for Fibonacci number n=10.",
            questionRu: "Напишите DP-код снизу вверх для числа Фибоначчи n=10.",
            questionKk: "n=10 Фибоначчи саны үшін төменнен жоғарыға DP кодын жазыңыз.",
            answer: "dp = [0, 1]\\nfor i in range(2, 11):\\n    dp.append(dp[i-1] + dp[i-2])\\nprint(dp[10])  # 55",
            answerRu: "dp = [0, 1]\\nfor i in range(2, 11):\\n    dp.append(dp[i-1] + dp[i-2])\\nprint(dp[10])  # 55",
            answerKk: "dp = [0, 1]\\nfor i in range(2, 11):\\n    dp.append(dp[i-1] + dp[i-2])\\nprint(dp[10])  # 55",
            hint: "Start with dp[0]=0, dp[1]=1 and build up to dp[10].",
            hintRu: "Начните с dp[0]=0, dp[1]=1 и стройте до dp[10].",
            hintKk: "dp[0]=0, dp[1]=1 бастаңыз және dp[10]-ға дейін құрыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Solve the 0/1 Knapsack problem: items with weights [2,3,4,5] and values [3,4,5,6], capacity 8. What is the maximum value?",
            questionRu: "Решите задачу рюкзака 0/1: предметы весом [2,3,4,5] и ценностью [3,4,5,6], вместимость 8. Максимальная ценность?",
            questionKk: "0/1 рюкзак есебін шешіңіз: салмақтары [2,3,4,5] және құндылықтары [3,4,5,6] заттар, сыйымдылық 8. Максималды құндылық қандай?",
            answer: "Maximum value = 12. Take items with weights 3 and 5 (values 4+6=10) — actually take weights 2,3,5 impossible (total 10>8). Best: weights 3+5=8, values 4+6=10. Or weights 2+3+... Try all: w[2,3]=5 v=7; w[2,5]=7 v=9; w[3,5]=8 v=10; w[2,4]=6 v=8; w[3,4]=7 v=9; w[4,5]=9>8; w[2,3,4]=9>8. Answer: 10.",
            answerRu: "Максимальная ценность = 12. Берём предметы с весами 3 и 5 (ценности 4+6=10) — на самом деле взять веса 2,3,5 невозможно (итого 10>8). Лучший вариант: веса 3+5=8, ценности 4+6=10. Или веса 2+3+... Переберём все: w[2,3]=5 v=7; w[2,5]=7 v=9; w[3,5]=8 v=10; w[2,4]=6 v=8; w[3,4]=7 v=9; w[4,5]=9>8; w[2,3,4]=9>8. Ответ: 10.",
            answerKk: "Максимал құндылық = 12. Салмақтары 3 және 5 заттарды аламыз (құндылықтары 4+6=10) — шын мәнінде 2,3,5 салмақтарын алу мүмкін емес (барлығы 10>8). Ең жақсысы: салмақтар 3+5=8, құндылықтар 4+6=10. Немесе салмақтар 2+3+... Барлығын қарастырамыз: w[2,3]=5 v=7; w[2,5]=7 v=9; w[3,5]=8 v=10; w[2,4]=6 v=8; w[3,4]=7 v=9; w[4,5]=9>8; w[2,3,4]=9>8. Жауап: 10.",
            hint: "Use a 2D DP table where dp[i][w] = max value using first i items with capacity w.",
            hintRu: "Используйте 2D таблицу dp[i][w] = макс. ценность из первых i предметов с вместимостью w.",
            hintKk: "dp[i][w] = бірінші i затпен w сыйымдылықтағы макс. құндылық болатын 2D кесте пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Graph Algorithms",
        titleRu: "Алгоритмы на графах",
        titleKk: "Граф алгоритмдері",
        content: "Graph algorithms solve problems on networks of nodes and edges. Dijkstra's algorithm finds the shortest path in weighted graphs. Topological sort orders tasks with dependencies. Minimum spanning tree (Kruskal's/Prim's) connects all nodes with minimum total edge weight. These algorithms power GPS navigation, network routing, and project scheduling.",
        contentRu: "Алгоритмы на графах решают задачи на сетях узлов и рёбер. Алгоритм Дейкстры находит кратчайший путь во взвешенных графах. Топологическая сортировка упорядочивает задачи с зависимостями. Минимальное остовное дерево (Крускал/Прим) соединяет все узлы с минимальным весом рёбер. Эти алгоритмы используются в GPS-навигации, маршрутизации и планировании проектов.",
        contentKk: "Граф алгоритмдері түйіндер мен шеттер желілеріндегі есептерді шешеді. Дейкстра алгоритмі салмақталған графтарда ең қысқа жолды табады. Топологиялық сұрыптау тәуелділіктері бар тапсырмаларды реттейді. Минималды қаңқалы ағаш (Крускал/Прим) барлық түйіндерді ең аз жалпы шет салмағымен байланыстырады. Бұл алгоритмдер GPS навигациясын, желі маршруттауын және жоба жоспарлауын қуаттайды.",
        keyFormulas: [
          {
            formula: "Dijkstra: O((V + E) log V) with priority queue",
            formulaRu: "Dijkstra: O((V + E) log V) с приоритетной очередью",
            formulaKk: "Dijkstra: басымдық кезегімен O((V + E) log V)",
            description: "Dijkstra's shortest path algorithm complexity using a min-heap",
            descriptionRu: "Сложность алгоритма Дейкстры с приоритетной очередью",
            descriptionKk: "Басымдық кезегі бар Дейкстра алгоритмінің күрделілігі"
          }
        ],
        solvedExamples: [
          {
            question: "Find the shortest path from A to D in: A→B(1), A→C(4), B→C(2), B→D(6), C→D(3).",
            questionRu: "Найдите кратчайший путь от A до D: A→B(1), A→C(4), B→C(2), B→D(6), C→D(3).",
            questionKk: "A-дан D-ге ең қысқа жолды табыңыз: A→B(1), A→C(4), B→C(2), B→D(6), C→D(3).",
            steps: [
              { en: "From A: dist[B]=1, dist[C]=4. Visit B: dist[C]=min(4, 1+2)=3, dist[D]=1+6=7.", ru: "Из A: dist[B]=1, dist[C]=4. Посещаем B: dist[C]=min(4, 1+2)=3, dist[D]=1+6=7.", kk: "A-дан: dist[B]=1, dist[C]=4. B-ні аралаймыз: dist[C]=min(4, 1+2)=3, dist[D]=1+6=7." },
              { en: "Visit C: dist[D]=min(7, 3+3)=6. Path: A→B→C→D, cost=6.", ru: "Посещаем C: dist[D]=min(7, 3+3)=6. Путь: A→B→C→D, стоимость=6.", kk: "C-ні аралаймыз: dist[D]=min(7, 3+3)=6. Жол: A→B→C→D, құны=6." }
            ],
            answer: "Shortest path: A→B→C→D with cost 6.",
            answerRu: "Кратчайший путь: A→B→C→D со стоимостью 6.",
            answerKk: "Ең қысқа жол: A→B→C→D, құны 6."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does Dijkstra's algorithm find?",
            questionRu: "Что находит алгоритм Дейкстры?",
            questionKk: "Дейкстра алгоритмі нені табады?",
            answer: "The shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights.",
            answerRu: "Кратчайший путь от исходного узла до всех остальных узлов во взвешенном графе с неотрицательными весами рёбер.",
            answerKk: "Қабырға салмақтары теріс емес салмақты графтағы бастапқы түйіннен барлық басқа түйіндерге дейінгі ең қысқа жол.",
            hint: "Think about GPS finding the fastest route.",
            hintRu: "Подумайте о GPS, находящем кратчайший маршрут.",
            hintKk: "GPS-тің ең жылдам маршрутты табуын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is topological sorting and when is it used?",
            questionRu: "Что такое топологическая сортировка и когда она применяется?",
            questionKk: "Топологиялық сұрыптау деген не және ол қашан пайдаланылады?",
            answer: "Topological sorting orders nodes of a directed acyclic graph (DAG) so that every edge goes from earlier to later in the order. Used for task scheduling, build dependencies, and course prerequisites.",
            answerRu: "Топологическая сортировка упорядочивает узлы направленного ациклического графа (DAG) так, что каждое ребро идёт от более раннего узла к более позднему. Используется для планирования задач, зависимостей сборки и предварительных требований курсов.",
            answerKk: "Топологиялық сұрыптау бағытталған циклсіз графтың (DAG) түйіндерін әр қабырға бұрынғыдан кейінгіге қарай бағытталатындай етіп реттейді. Тапсырмаларды жоспарлауда, құрастыру тәуелділіктерінде және курстардың алдын ала талаптарында қолданылады.",
            hint: "Think about a course schedule where some courses must come before others.",
            hintRu: "Подумайте о расписании курсов, где одни должны быть пройдены раньше других.",
            hintKk: "Кейбір курстар басқалардан бұрын өтілуі керек курс кестесін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Implement Dijkstra's algorithm in Python using a priority queue (heapq).",
            questionRu: "Реализуйте алгоритм Дейкстры на Python с приоритетной очередью (heapq).",
            questionKk: "Python-да басымдық кезегін (heapq) пайдаланып Дейкстра алгоритмін жүзеге асырыңыз.",
            answer: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {node: float('inf') for node in graph}\\n    dist[start] = 0\\n    pq = [(0, start)]\\n    while pq:\\n        d, u = heapq.heappop(pq)\\n        if d > dist[u]: continue\\n        for v, w in graph[u]:\\n            if dist[u] + w < dist[v]:\\n                dist[v] = dist[u] + w\\n                heapq.heappush(pq, (dist[v], v))\\n    return dist",
            answerRu: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {node: float('inf') for node in graph}\\n    dist[start] = 0\\n    pq = [(0, start)]\\n    while pq:\\n        d, u = heapq.heappop(pq)\\n        if d > dist[u]: continue\\n        for v, w in graph[u]:\\n            if dist[u] + w < dist[v]:\\n                dist[v] = dist[u] + w\\n                heapq.heappush(pq, (dist[v], v))\\n    return dist",
            answerKk: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {node: float('inf') for node in graph}\\n    dist[start] = 0\\n    pq = [(0, start)]\\n    while pq:\\n        d, u = heapq.heappop(pq)\\n        if d > dist[u]: continue\\n        for v, w in graph[u]:\\n            if dist[u] + w < dist[v]:\\n                dist[v] = dist[u] + w\\n                heapq.heappush(pq, (dist[v], v))\\n    return dist",
            hint: "Use heapq as a min-heap. Skip nodes already processed with shorter distance.",
            hintRu: "Используйте heapq как мин-кучу. Пропускайте уже обработанные узлы с меньшим расстоянием.",
            hintKk: "heapq-ны мин-үйінді ретінде пайдаланыңыз. Қысқа қашықтықпен бұрын өңделген түйіндерді өткізіп жіберіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "System Design",
        titleRu: "Проектирование систем",
        titleKk: "Жүйелерді жобалау",
        content: "System design is the process of defining the architecture of a software system — its components, data flow, and how they interact. Key concepts include client-server model, databases, caching, load balancing, and microservices. Understanding system design helps you build scalable applications and is a major topic in technical interviews at top companies.",
        contentRu: "Проектирование систем — процесс определения архитектуры ПО: компоненты, потоки данных и их взаимодействие. Ключевые концепции: клиент-сервер, базы данных, кэширование, балансировка нагрузки и микросервисы. Понимание проектирования систем помогает строить масштабируемые приложения и является основной темой собеседований в топ-компаниях.",
        contentKk: "Жүйелерді жобалау — бағдарламалық жүйенің архитектурасын анықтау процесі: оның компоненттері, деректер ағыны және олардың өзара әрекеттесуі. Негізгі тұжырымдамалар: клиент-сервер моделі, деректер қоры, кэштеу, жүктеме теңестіру және микросервистер. Жүйелерді жобалауды түсіну масштабталатын қосымшалар жасауға көмектеседі және жетекші компаниялардағы техникалық сұхбаттардың негізгі тақырыбы.",
        keyFormulas: [
          {
            formula: "Client → Load Balancer → Server(s) → Cache → Database",
            formulaRu: "Клиент → Балансировщик нагрузки → Сервер(ы) → Кэш → База данных",
            formulaKk: "Клиент → Жүктемені теңгеруші → Сервер(лер) → Кэш → Дерекқор",
            description: "Typical web application architecture layers",
            descriptionRu: "Типичные слои архитектуры веб-приложения",
            descriptionKk: "Веб-қосымша архитектурасының типтік қабаттары"
          }
        ],
        solvedExamples: [
          {
            question: "Design a URL shortener (like bit.ly). What components are needed?",
            questionRu: "Спроектируйте сокращатель URL (как bit.ly). Какие компоненты нужны?",
            questionKk: "URL қысқартқышын (bit.ly сияқты) жобалаңыз. Қандай компоненттер қажет?",
            steps: [
              { en: "Components: API server (receives long URL, returns short code), database (maps short codes to long URLs), redirect service (looks up short code, redirects to long URL).", ru: "Компоненты: API-сервер (принимает длинный URL, возвращает короткий код), база данных (соответствие кодов URL-ам), сервис перенаправления (ищет код, перенаправляет).", kk: "Компоненттер: API сервер (ұзын URL қабылдайды, қысқа код қайтарады), деректер қоры (қысқа кодтарды ұзын URL-дарға сәйкестендіреді), қайта бағыттау сервисі (қысқа кодты іздейді, қайта бағыттайды)." },
              { en: "Scale: add caching (Redis) for popular URLs, load balancer for multiple servers, analytics tracking for click counts.", ru: "Масштабирование: кэширование (Redis) для популярных URL, балансировщик для серверов, аналитика для подсчёта кликов.", kk: "Масштабтау: танымал URL-дар үшін кэштеу (Redis), серверлер үшін жүктеме теңестіргіш, басу санауыштары үшін аналитика." }
            ],
            answer: "API server + database + cache + load balancer + analytics. Generate unique short codes using base62 encoding of an auto-increment ID.",
            answerRu: "API-сервер + база данных + кэш + балансировщик нагрузки + аналитика. Генерируйте уникальные короткие коды с помощью base62-кодирования автоинкрементного ID.",
            answerKk: "API сервер + дерекқор + кэш + жүктеме баланстағыш + аналитика. Автокөбейтілетін ID-ді base62 кодтауы арқылы бірегей қысқа кодтар жасаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the client-server model?",
            questionRu: "Что такое модель клиент-сервер?",
            questionKk: "Клиент-сервер моделі дегеніміз не?",
            answer: "The client (browser/app) sends requests to a server, which processes them and returns responses. The server hosts the data and business logic.",
            answerRu: "Клиент (браузер/приложение) отправляет запросы серверу, который обрабатывает их и возвращает ответы. Сервер хранит данные и бизнес-логику.",
            answerKk: "Клиент (браузер/қосымша) серверге сұраныстар жібереді, сервер оларды өңдеп, жауап қайтарады. Сервер деректер мен бизнес-логиканы сақтайды.",
            hint: "Think of a restaurant: the client orders, the kitchen (server) prepares.",
            hintRu: "Представьте ресторан: клиент заказывает, кухня (сервер) готовит.",
            hintKk: "Мейрамхананы елестетіңіз: клиент тапсырыс береді, ас үй (сервер) дайындайды.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is caching and why is it important in system design?",
            questionRu: "Что такое кэширование и почему оно важно в проектировании систем?",
            questionKk: "Кэштеу деген не және ол жүйелерді жобалауда неге маңызды?",
            answer: "Caching stores frequently accessed data in fast memory (like Redis) to avoid repeatedly querying the database. It dramatically reduces response time and database load.",
            answerRu: "Кэширование хранит часто используемые данные в быстрой памяти (например, Redis), чтобы не запрашивать базу данных повторно. Это значительно сокращает время ответа и нагрузку на базу данных.",
            answerKk: "Кэштеу жиі пайдаланылатын деректерді жылдам жадта (мысалы, Redis) сақтап, дерекқорға қайта-қайта сұраныс жіберуден құтқарады. Бұл жауап уақыты мен дерекқор жүктемесін күрт азайтады.",
            hint: "It is like keeping a book on your desk instead of walking to the library each time.",
            hintRu: "Это как держать книгу на столе вместо похода в библиотеку каждый раз.",
            hintKk: "Бұл кітапты әр рет кітапханаға бармай, үстелде ұстау сияқты.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a simple chat application. Describe the components, data flow, and how you would handle real-time messages.",
            questionRu: "Спроектируйте простое чат-приложение. Опишите компоненты, потоки данных и обработку сообщений в реальном времени.",
            questionKk: "Қарапайым чат қосымшасын жобалаңыз. Компоненттерді, деректер ағынын және нақты уақыттағы хабарларды қалай өңдейтіңізді сипаттаңыз.",
            answer: "Components: React frontend, WebSocket server for real-time messaging, REST API for auth/history, PostgreSQL for message storage, Redis for online status. Data flow: user sends message via WebSocket → server broadcasts to recipient(s) → stored in DB. Use WebSockets instead of polling for real-time delivery.",
            answerRu: "Компоненты: фронтенд на React, WebSocket-сервер для обмена сообщениями в реальном времени, REST API для аутентификации/истории, PostgreSQL для хранения сообщений, Redis для статуса онлайн. Поток данных: пользователь отправляет сообщение через WebSocket → сервер рассылает его получателям → сохраняется в БД. Для доставки в реальном времени используйте WebSockets вместо опроса.",
            answerKk: "Құрамдас бөліктер: React фронтенді, нақты уақытта хабар алмасуға арналған WebSocket сервер, аутентификация/тарих үшін REST API, хабарларды сақтауға арналған PostgreSQL, онлайн күйіне арналған Redis. Деректер ағыны: пайдаланушы WebSocket арқылы хабар жібереді → сервер оны алушыларға таратады → дерекқорда сақталады. Нақты уақытта жеткізу үшін сауалнама орнына WebSockets пайдаланыңыз.",
            hint: "HTTP is request-response. For real-time, you need persistent connections like WebSockets.",
            hintRu: "HTTP — запрос-ответ. Для реального времени нужны постоянные соединения — WebSocket.",
            hintKk: "HTTP — сұрау-жауап. Нақты уақыт үшін WebSocket сияқты тұрақты байланыстар қажет.",
            xp: 20
          }
        ]
      },
      {
        title: "ML Pipeline",
        titleRu: "ML-пайплайн",
        titleKk: "ML құбыры",
        content: "A machine learning pipeline is the end-to-end process of building an ML model: data collection, cleaning, feature engineering, model selection, training, evaluation, and deployment. Each stage is critical — garbage data produces garbage models. Cross-validation and metrics like accuracy, precision, recall, and F1-score measure model quality.",
        contentRu: "ML-пайплайн — сквозной процесс создания ML-модели: сбор данных, очистка, создание признаков, выбор модели, обучение, оценка и развёртывание. Каждый этап критичен — мусорные данные порождают мусорные модели. Кросс-валидация и метрики (accuracy, precision, recall, F1-score) измеряют качество модели.",
        contentKk: "Машиналық оқыту құбыры — ML моделін құрудың басынан аяғына дейінгі процесі: деректер жинау, тазалау, белгілер жасау, модельді таңдау, оқыту, бағалау және орналастыру. Әр кезең маңызды — қоқыс деректер қоқыс модельдер шығарады. Кросс-валидация және accuracy, precision, recall, F1-score сияқты метрикалар модель сапасын өлшейді.",
        keyFormulas: [
          {
            formula: "Data → Clean → Features → Train/Test Split → Model → Evaluate → Deploy",
            formulaRu: "Данные → Очистка → Признаки → Разделение на обучающую/тестовую выборки → Модель → Оценка → Развёртывание",
            formulaKk: "Деректер → Тазалау → Белгілер → Оқыту/тест жиынтығына бөлу → Модель → Бағалау → Іске қосу",
            description: "Standard ML pipeline stages from data to deployment",
            descriptionRu: "Стандартные этапы ML-пайплайна от данных до развёртывания",
            descriptionKk: "Деректерден орналастыруға дейінгі стандартты ML құбыр кезеңдері"
          },
          {
            formula: "Accuracy = correct / total | F1 = 2 * (P * R) / (P + R)",
            formulaRu: "Точность = верно / всего | F1 = 2 * (P * R) / (P + R)",
            formulaKk: "Дәлдік = дұрыс / барлығы | F1 = 2 * (P * R) / (P + R)",
            description: "Key metrics for evaluating classification models",
            descriptionRu: "Ключевые метрики для оценки моделей классификации",
            descriptionKk: "Классификация модельдерін бағалау үшін негізгі метрикалар"
          }
        ],
        solvedExamples: [
          {
            question: "A spam classifier has 90 correct out of 100 predictions, with 5 false positives and 5 false negatives. Calculate accuracy, precision, and recall.",
            questionRu: "Спам-классификатор: 90 правильных из 100, 5 ложноположительных, 5 ложноотрицательных. Вычислите accuracy, precision и recall.",
            questionKk: "Спам классификаторы: 100 болжамнан 90 дұрыс, 5 жалған оң, 5 жалған теріс. Accuracy, precision және recall есептеңіз.",
            steps: [
              { en: "Accuracy = 90/100 = 90%. If 50 actual spam: TP=45, FP=5, FN=5, TN=45.", ru: "Accuracy = 90/100 = 90%. Если 50 спам: TP=45, FP=5, FN=5, TN=45.", kk: "Accuracy = 90/100 = 90%. 50 нақты спам болса: TP=45, FP=5, FN=5, TN=45." },
              { en: "Precision = TP/(TP+FP) = 45/50 = 90%. Recall = TP/(TP+FN) = 45/50 = 90%.", ru: "Precision = TP/(TP+FP) = 45/50 = 90%. Recall = TP/(TP+FN) = 45/50 = 90%.", kk: "Precision = TP/(TP+FP) = 45/50 = 90%. Recall = TP/(TP+FN) = 45/50 = 90%." }
            ],
            answer: "Accuracy = 90%, Precision = 90%, Recall = 90%, F1 = 90%.",
            answerRu: "Accuracy = 90%, Precision = 90%, Recall = 90%, F1 = 90%.",
            answerKk: "Accuracy = 90%, Precision = 90%, Recall = 90%, F1 = 90%."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the first step in any ML pipeline?",
            questionRu: "Каков первый шаг любого ML-пайплайна?",
            questionKk: "Кез келген ML құбырының бірінші қадамы қандай?",
            answer: "Data collection — you cannot build a model without data.",
            answerRu: "Сбор данных — без данных невозможно построить модель.",
            answerKk: "Дерек жинау — дерексіз модель құру мүмкін емес.",
            hint: "Models learn from data, so you need data first.",
            hintRu: "Модели учатся на данных, поэтому сначала нужны данные.",
            hintKk: "Модельдер деректерден үйренеді, сондықтан алдымен деректер керек.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why do you split data into training and test sets?",
            questionRu: "Зачем разделять данные на обучающую и тестовую выборки?",
            questionKk: "Деректерді оқыту және тест жиындарына неге бөлеміз?",
            answer: "To evaluate the model on data it has never seen during training. This tests if the model generalizes well or just memorized the training data (overfitting).",
            answerRu: "Чтобы оценить модель на данных, которые она никогда не видела при обучении. Это проверяет, хорошо ли модель обобщает или просто запомнила обучающие данные (переобучение).",
            answerKk: "Модельді оқыту кезінде көрмеген деректер арқылы бағалау үшін. Бұл модельдің жақсы қорытындылайтынын немесе оқыту деректерін жаттап алғанын (артық оқыту) тексереді.",
            hint: "Testing on training data would be like giving students the exam answers beforehand.",
            hintRu: "Тестировать на обучающих данных — как дать студентам ответы экзамена заранее.",
            hintKk: "Оқыту деректерінде тестілеу — оқушыларға емтихан жауаптарын алдын ала беру сияқты.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Using scikit-learn, write code to train a decision tree classifier on the Iris dataset and print its accuracy.",
            questionRu: "С помощью scikit-learn обучите классификатор Decision Tree на наборе Iris и выведите точность.",
            questionKk: "scikit-learn пайдаланып, Iris деректер жиынтығында Decision Tree классификаторын оқытып, дәлдігін шығарыңыз.",
            answer: "from sklearn.datasets import load_iris\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.tree import DecisionTreeClassifier\\nfrom sklearn.metrics import accuracy_score\\nX, y = load_iris(return_X_y=True)\\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\\nmodel = DecisionTreeClassifier()\\nmodel.fit(X_train, y_train)\\nprint(accuracy_score(y_test, model.predict(X_test)))",
            answerRu: "from sklearn.datasets import load_iris\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.tree import DecisionTreeClassifier\\nfrom sklearn.metrics import accuracy_score\\nX, y = load_iris(return_X_y=True)\\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\\nmodel = DecisionTreeClassifier()\\nmodel.fit(X_train, y_train)\\nprint(accuracy_score(y_test, model.predict(X_test)))",
            answerKk: "from sklearn.datasets import load_iris\\nfrom sklearn.model_selection import train_test_split\\nfrom sklearn.tree import DecisionTreeClassifier\\nfrom sklearn.metrics import accuracy_score\\nX, y = load_iris(return_X_y=True)\\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\\nmodel = DecisionTreeClassifier()\\nmodel.fit(X_train, y_train)\\nprint(accuracy_score(y_test, model.predict(X_test)))",
            hint: "Use load_iris, train_test_split, DecisionTreeClassifier, and accuracy_score.",
            hintRu: "Используйте load_iris, train_test_split, DecisionTreeClassifier и accuracy_score.",
            hintKk: "load_iris, train_test_split, DecisionTreeClassifier және accuracy_score пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "NLP Basics",
        titleRu: "Основы NLP",
        titleKk: "NLP негіздері",
        content: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. Key techniques include tokenization (splitting text into words), stemming/lemmatization (reducing words to roots), and sentiment analysis (detecting positive/negative tone). Modern NLP uses transformer models like GPT and BERT that understand context through attention mechanisms.",
        contentRu: "Обработка естественного языка (NLP) позволяет компьютерам понимать и генерировать человеческий язык. Ключевые техники: токенизация (разбиение текста на слова), стемминг/лемматизация (приведение слов к основе) и анализ тональности (определение позитивного/негативного тона). Современный NLP использует трансформеры (GPT, BERT), понимающие контекст через механизмы внимания.",
        contentKk: "Табиғи тілді өңдеу (NLP) компьютерлерге адам тілін түсінуге, интерпретациялауға және генерациялауға мүмкіндік береді. Негізгі техникалар: токенизация (мәтінді сөздерге бөлу), стемминг/лемматизация (сөздерді түбірге келтіру) және сезім талдауы (оң/теріс тонды анықтау). Заманауи NLP назар аудару механизмдері арқылы контексті түсінетін GPT және BERT сияқты трансформер модельдерін пайдаланады.",
        keyFormulas: [
          {
            formula: "Text → Tokenize → Remove Stopwords → Stem/Lemmatize → Vectorize → Model",
            formulaRu: "Текст → Токенизация → Удаление стоп-слов → Стемминг/Лемматизация → Векторизация → Модель",
            formulaKk: "Мәтін → Токенизация → Стоп-сөздерді алып тастау → Стемминг/Лемматизация → Векторлау → Модель",
            description: "Standard NLP text preprocessing pipeline",
            descriptionRu: "Стандартный конвейер предобработки текста NLP",
            descriptionKk: "Стандартты NLP мәтін алдын ала өңдеу құбыры"
          }
        ],
        solvedExamples: [
          {
            question: "Tokenize and remove stopwords from: 'The cat is sitting on the mat'.",
            questionRu: "Токенизируйте и удалите стоп-слова из: 'The cat is sitting on the mat'.",
            questionKk: "'The cat is sitting on the mat' сөйлемін токенизациялаңыз және тоқтау сөздерді жойыңыз.",
            steps: [
              { en: "Tokenize: ['The', 'cat', 'is', 'sitting', 'on', 'the', 'mat']", ru: "Токенизация: ['The', 'cat', 'is', 'sitting', 'on', 'the', 'mat']", kk: "Токенизация: ['The', 'cat', 'is', 'sitting', 'on', 'the', 'mat']" },
              { en: "Remove stopwords (the, is, on): ['cat', 'sitting', 'mat'] — only meaningful words remain.", ru: "Удаляем стоп-слова (the, is, on): ['cat', 'sitting', 'mat'] — остаются значимые слова.", kk: "Тоқтау сөздерді жою (the, is, on): ['cat', 'sitting', 'mat'] — тек мағыналы сөздер қалады." }
            ],
            answer: "['cat', 'sitting', 'mat']",
            answerRu: "['cat', 'sitting', 'mat']",
            answerKk: "['cat', 'sitting', 'mat']"
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does NLP stand for?",
            questionRu: "Что означает NLP?",
            questionKk: "NLP нені білдіреді?",
            answer: "Natural Language Processing.",
            answerRu: "Обработка естественного языка.",
            answerKk: "Табиғи тілді өңдеу.",
            hint: "It processes natural (human) language.",
            hintRu: "Обрабатывает естественный (человеческий) язык.",
            hintKk: "Ол табиғи (адам) тілін өңдейді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the difference between stemming and lemmatization?",
            questionRu: "В чём разница между стеммингом и лемматизацией?",
            questionKk: "Стемминг пен лемматизацияның айырмашылығы неде?",
            answer: "Stemming cuts off word endings with rules (running → runn), which may not be real words. Lemmatization uses a dictionary to find the actual root form (running → run).",
            answerRu: "Стемминг отсекает окончания слов по правилам (running → runn), и результат может не быть настоящим словом. Лемматизация использует словарь, чтобы найти настоящую начальную форму (running → run).",
            answerKk: "Стемминг сөз жалғауларын ережелер бойынша қысқартады (running → runn), нәтиже нақты сөз болмауы мүмкін. Лемматизация сөздікті пайдаланып, нақты түбір формасын табады (running → run).",
            hint: "One is crude cutting, the other is intelligent lookup.",
            hintRu: "Одно — грубая обрезка, другое — интеллектуальный поиск основы.",
            hintKk: "Біреуі дөрекі кесу, екіншісі — ақылды іздеу.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write Python code using NLTK to tokenize a sentence, remove stopwords, and print the result.",
            questionRu: "Напишите Python-код с NLTK для токенизации предложения, удаления стоп-слов и вывода результата.",
            questionKk: "NLTK пайдаланып сөйлемді токенизациялайтын, тоқтау сөздерді жоятын және нәтижені шығаратын Python кодын жазыңыз.",
            answer: "import nltk\\nfrom nltk.corpus import stopwords\\nfrom nltk.tokenize import word_tokenize\\ntext = 'The cat is sitting on the mat'\\ntokens = word_tokenize(text.lower())\\nstop = set(stopwords.words('english'))\\nfiltered = [w for w in tokens if w not in stop and w.isalpha()]\\nprint(filtered)  # ['cat', 'sitting', 'mat']",
            answerRu: "import nltk\\nfrom nltk.corpus import stopwords\\nfrom nltk.tokenize import word_tokenize\\ntext = 'The cat is sitting on the mat'\\ntokens = word_tokenize(text.lower())\\nstop = set(stopwords.words('english'))\\nfiltered = [w for w in tokens if w not in stop and w.isalpha()]\\nprint(filtered)  # ['cat', 'sitting', 'mat']",
            answerKk: "import nltk\\nfrom nltk.corpus import stopwords\\nfrom nltk.tokenize import word_tokenize\\ntext = 'The cat is sitting on the mat'\\ntokens = word_tokenize(text.lower())\\nstop = set(stopwords.words('english'))\\nfiltered = [w for w in tokens if w not in stop and w.isalpha()]\\nprint(filtered)  # ['cat', 'sitting', 'mat']",
            hint: "Use word_tokenize for tokenization and stopwords.words('english') for the stopword list.",
            hintRu: "Используйте word_tokenize и stopwords.words('english').",
            hintKk: "word_tokenize және stopwords.words('english') пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Computer Vision",
        titleRu: "Компьютерное зрение",
        titleKk: "Компьютерлік көру",
        content: "Computer vision enables machines to interpret visual information from images and videos. Key tasks include image classification, object detection, and segmentation. Convolutional Neural Networks (CNNs) are the foundation — they use filters/kernels to detect features like edges, textures, and shapes. Libraries like OpenCV and PyTorch make computer vision accessible.",
        contentRu: "Компьютерное зрение позволяет машинам интерпретировать визуальную информацию из изображений и видео. Ключевые задачи: классификация изображений, обнаружение объектов и сегментация. Свёрточные нейросети (CNN) — основа: они используют фильтры/ядра для обнаружения признаков — краёв, текстур, форм. Библиотеки OpenCV и PyTorch делают компьютерное зрение доступным.",
        contentKk: "Компьютерлік көру машиналарға кескіндер мен бейнелерден визуалды ақпаратты интерпретациялауға мүмкіндік береді. Негізгі тапсырмалар: кескінді жіктеу, объектіні анықтау және сегменттеу. Конволюциялық нейрожелілер (CNN) негіз болып табылады — олар шеттер, текстуралар және пішіндер сияқты белгілерді анықтау үшін сүзгілерді/ядроларды пайдаланады. OpenCV және PyTorch сияқты кітапханалар компьютерлік көруді қолжетімді етеді.",
        keyFormulas: [
          {
            formula: "Input Image → Conv Layer → Pooling → Conv → Pooling → Flatten → Dense → Output",
            formulaRu: "Входное изображение → Свёрточный слой → Пулинг → Свёртка → Пулинг → Уплощение → Полносвязный слой → Выход",
            formulaKk: "Кіріс сурет → Конволюциялық қабат → Пулинг → Конволюция → Пулинг → Тегістеу → Толық байланысқан қабат → Шығыс",
            description: "Typical CNN architecture for image classification",
            descriptionRu: "Типичная архитектура CNN для классификации изображений",
            descriptionKk: "Кескінді жіктеу үшін типтік CNN архитектурасы"
          }
        ],
        solvedExamples: [
          {
            question: "Explain how a CNN recognizes a cat in an image, layer by layer.",
            questionRu: "Объясните, как CNN распознаёт кошку на изображении, слой за слоем.",
            questionKk: "CNN кескіндегі мысықты қабат-қабатымен қалай танитынын түсіндіріңіз.",
            steps: [
              { en: "Early conv layers detect simple features: edges, corners, textures. Pooling layers reduce size while keeping important features.", ru: "Ранние свёрточные слои обнаруживают простые признаки: края, углы, текстуры. Слои пулинга уменьшают размер, сохраняя важные признаки.", kk: "Алғашқы конволюциялық қабаттар қарапайым белгілерді анықтайды: шеттер, бұрыштар, текстуралар. Пулинг қабаттары маңызды белгілерді сақтай отырып өлшемді азайтады." },
              { en: "Deeper layers combine simple features into complex ones: eyes, ears, whiskers → cat face. Final dense layer outputs class probabilities: 95% cat, 5% dog.", ru: "Глубокие слои объединяют признаки в сложные: глаза, уши, усы → морда кошки. Финальный слой выводит вероятности: 95% кошка, 5% собака.", kk: "Терең қабаттар қарапайым белгілерді күрделіге біріктіреді: көздер, құлақтар, мұрттар → мысық беті. Соңғы тығыз қабат класс ықтималдықтарын шығарады: 95% мысық, 5% ит." }
            ],
            answer: "CNN layers progressively detect: edges → shapes → body parts → whole cat. Each layer builds on features from the previous one.",
            answerRu: "Слои CNN последовательно обнаруживают: края → формы → части тела → целого кота. Каждый слой строится на признаках предыдущего.",
            answerKk: "CNN қабаттары кезең-кезеңімен анықтайды: жиектер → пішіндер → дене бөліктері → толық мысық. Әр қабат алдыңғы қабаттың белгілеріне негізделеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does CNN stand for in the context of deep learning?",
            questionRu: "Что означает CNN в контексте глубокого обучения?",
            questionKk: "Терең оқыту контексінде CNN нені білдіреді?",
            answer: "Convolutional Neural Network.",
            answerRu: "Свёрточная нейронная сеть.",
            answerKk: "Конволюциялық нейрон желі.",
            hint: "It uses convolution operations on images.",
            hintRu: "Использует операции свёртки над изображениями.",
            hintKk: "Ол кескіндер үстінде конволюция амалдарын пайдаланады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the purpose of pooling layers in a CNN?",
            questionRu: "Зачем нужны слои пулинга в CNN?",
            questionKk: "CNN-дегі пулинг қабаттарының мақсаты қандай?",
            answer: "Pooling layers reduce the spatial dimensions of feature maps, making computation faster and the model more robust to small position changes in the input.",
            answerRu: "Слои пулинга уменьшают пространственные размеры карт признаков, ускоряя вычисления и делая модель более устойчивой к небольшим изменениям положения на входе.",
            answerKk: "Пулинг қабаттары белгі карталарының кеңістіктік өлшемдерін кішірейтіп, есептеуді жылдамдатады және модельді кірістегі шағын орын ауысуларға төзімді етеді.",
            hint: "They shrink the data while keeping the most important information.",
            hintRu: "Они уменьшают данные, сохраняя самую важную информацию.",
            hintKk: "Олар ең маңызды ақпаратты сақтай отырып деректерді кішірейтеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write Python code using OpenCV to load an image, convert it to grayscale, and detect edges using the Canny algorithm.",
            questionRu: "Напишите Python-код с OpenCV: загрузите изображение, преобразуйте в оттенки серого и обнаружьте края алгоритмом Canny.",
            questionKk: "OpenCV пайдаланып кескін жүктейтін, оны сұр реңкке түрлендіретін және Canny алгоритмі арқылы шеттерді анықтайтын Python кодын жазыңыз.",
            answer: "import cv2\\nimg = cv2.imread('photo.jpg')\\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\\nedges = cv2.Canny(gray, 100, 200)\\ncv2.imwrite('edges.jpg', edges)",
            answerRu: "import cv2\\nimg = cv2.imread('photo.jpg')\\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\\nedges = cv2.Canny(gray, 100, 200)\\ncv2.imwrite('edges.jpg', edges)",
            answerKk: "import cv2\\nimg = cv2.imread('photo.jpg')\\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\\nedges = cv2.Canny(gray, 100, 200)\\ncv2.imwrite('edges.jpg', edges)",
            hint: "Use cv2.imread, cv2.cvtColor for grayscale, and cv2.Canny for edge detection.",
            hintRu: "Используйте cv2.imread, cv2.cvtColor для серого и cv2.Canny для детекции краёв.",
            hintKk: "cv2.imread, сұр реңк үшін cv2.cvtColor және шетті анықтау үшін cv2.Canny пайдаланыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "AI Ethics",
        titleRu: "Этика ИИ",
        titleKk: "ЖИ этикасы",
        content: "AI ethics addresses the moral implications of AI systems. Key concerns include bias in training data (leading to unfair predictions for certain groups), privacy (collecting personal data), transparency (explainable AI vs. black-box models), job displacement, and autonomous weapons. Responsible AI development requires diverse teams, careful testing, and ongoing monitoring.",
        contentRu: "Этика ИИ рассматривает моральные последствия систем ИИ. Ключевые вопросы: предвзятость обучающих данных (несправедливые прогнозы для групп), конфиденциальность (сбор персональных данных), прозрачность (объяснимый ИИ vs чёрный ящик), вытеснение рабочих мест и автономное оружие. Ответственная разработка ИИ требует разнообразных команд, тщательного тестирования и постоянного мониторинга.",
        contentKk: "ЖИ этикасы ЖИ жүйелерінің моральдық салдарларын қарастырады. Негізгі мәселелер: оқыту деректеріндегі біржақтылық (белгілі топтар үшін әділетсіз болжамдар), құпиялылық (жеке деректерді жинау), ашықтық (түсіндірілетін ЖИ vs қара жәшік модельдер), жұмыс орындарын ығыстыру және автономды қару. Жауапты ЖИ әзірлеу әртүрлі командаларды, мұқият тестілеуді және үздіксіз мониторингті қажет етеді.",
        keyFormulas: [
          {
            formula: "Fairness + Transparency + Privacy + Accountability = Ethical AI",
            formulaRu: "Справедливость + Прозрачность + Приватность + Подотчётность = Этичный AI",
            formulaKk: "Әділдік + Ашықтық + Құпиялылық + Есептілік = Этикалық AI",
            description: "Core principles of responsible AI development",
            descriptionRu: "Основные принципы ответственной разработки ИИ",
            descriptionKk: "Жауапты ЖИ әзірлеудің негізгі принциптері"
          }
        ],
        solvedExamples: [
          {
            question: "A hiring AI trained on historical data rejects more female applicants. Explain the ethical issue and a solution.",
            questionRu: "ИИ для найма, обученный на исторических данных, отклоняет больше женщин. Объясните этическую проблему и решение.",
            questionKk: "Тарихи деректерде оқытылған жалдау ЖИ-ы әйел үміткерлерді көбірек қабылдамайды. Этикалық мәселені және шешімін түсіндіріңіз.",
            steps: [
              { en: "The issue: historical data reflects past bias (fewer women hired). The AI learned to replicate this discrimination.", ru: "Проблема: исторические данные отражают прошлую предвзятость (меньше женщин нанимали). ИИ научился воспроизводить дискриминацию.", kk: "Мәселе: тарихи деректер өткен біржақтылықты көрсетеді (аз әйел жалданған). ЖИ бұл кемсітуді қайталауды үйренді." },
              { en: "Solution: audit training data for bias, remove gender as a feature, test model fairness across groups, use diverse evaluation panels.", ru: "Решение: проверить данные на предвзятость, удалить пол как признак, тестировать справедливость по группам, использовать разнообразные оценочные панели.", kk: "Шешім: оқыту деректерін біржақтылыққа тексеру, жынысты белгі ретінде жою, топтар бойынша әділдікті тестілеу, әртүрлі бағалау панельдерін пайдалану." }
            ],
            answer: "The AI inherited historical bias. Fix: remove biased features, diversify training data, audit for fairness, add human oversight.",
            answerRu: "ИИ унаследовал историческую предвзятость. Решение: удалить предвзятые признаки, разнообразить обучающие данные, проводить аудит на справедливость, добавить человеческий контроль.",
            answerKk: "ИИ тарихи алалауды мұраға алды. Шешімі: алалайтын белгілерді алып тастау, оқыту деректерін әртараптандыру, әділдікке аудит жүргізу, адам бақылауын қосу."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name one major ethical concern with AI systems.",
            questionRu: "Назовите одну главную этическую проблему систем ИИ.",
            questionKk: "ЖИ жүйелерінің бір негізгі этикалық мәселесін атаңыз.",
            answer: "Bias — AI can discriminate against certain groups if trained on biased data.",
            answerRu: "Предвзятость — ИИ может дискриминировать определённые группы, если обучен на предвзятых данных.",
            answerKk: "Алалау — ИИ алалайтын деректер арқылы оқытылса, белгілі бір топтарды кемсітуі мүмкін.",
            hint: "Think about what happens when AI is trained on unfair historical data.",
            hintRu: "Подумайте, что происходит, когда ИИ обучают на несправедливых исторических данных.",
            hintKk: "ЖИ әділетсіз тарихи деректерде оқытылғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the 'black box' problem in AI and why does it matter?",
            questionRu: "Что такое проблема 'чёрного ящика' в ИИ и почему она важна?",
            questionKk: "ЖИ-дағы 'қара жәшік' мәселесі деген не және ол неге маңызды?",
            answer: "Some AI models (especially deep neural networks) make decisions that cannot be explained. This matters in critical areas like healthcare and criminal justice where people need to understand why a decision was made.",
            answerRu: "Некоторые модели ИИ (особенно глубокие нейронные сети) принимают решения, которые невозможно объяснить. Это важно в таких критических областях, как здравоохранение и уголовное правосудие, где людям нужно понимать, почему принято решение.",
            answerKk: "Кейбір ИИ модельдері (әсіресе терең нейрон желілері) түсіндіру мүмкін емес шешімдер қабылдайды. Бұл денсаулық сақтау мен қылмыстық әділет сияқты маңызды салаларда өте өзекті, онда адамдарға шешімнің неге қабылданғанын түсіну қажет.",
            hint: "Would you trust a doctor who says 'take this pill' but cannot explain why?",
            hintRu: "Доверились бы вы врачу, который говорит 'пейте таблетку', но не может объяснить зачем?",
            hintKk: "'Мынау дәріні ішіңіз' деп айтып, неге екенін түсіндіре алмайтын дәрігерге сенер ме едіңіз?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design an ethical framework for deploying an AI-powered content moderation system for a social media platform. Address bias, transparency, privacy, and accountability.",
            questionRu: "Разработайте этический фреймворк для развёртывания ИИ-модерации контента соцсети. Учтите предвзятость, прозрачность, конфиденциальность и подотчётность.",
            questionKk: "Әлеуметтік медиа платформасы үшін ЖИ-негізделген мазмұнды модерациялау жүйесін орналастырудың этикалық шеңберін жобалаңыз. Біржақтылық, ашықтық, құпиялылық және есеп берушілікті қарастырыңыз.",
            answer: "1. Bias: test across languages/cultures, regular audits, diverse training data. 2. Transparency: explain why content was removed, provide appeal process. 3. Privacy: do not use personal data for training without consent, data minimization. 4. Accountability: human review for appeals, public reports on error rates, clear ownership of decisions.",
            answerRu: "1. Предвзятость: тестирование на разных языках/культурах, регулярные аудиты, разнообразные обучающие данные. 2. Прозрачность: объясняйте, почему контент удалён, предоставляйте процесс обжалования. 3. Конфиденциальность: не используйте персональные данные для обучения без согласия, минимизация данных. 4. Ответственность: проверка обжалований человеком, публичные отчёты о частоте ошибок, чёткое закрепление ответственности за решения.",
            answerKk: "1. Алалау: әртүрлі тілдер мен мәдениеттерде тестілеу, тұрақты аудит, әртараптандырылған оқыту деректері. 2. Ашықтық: контенттің неге жойылғанын түсіндіру, шағым жасау процесін ұсыну. 3. Құпиялылық: жеке деректерді келісімсіз оқытуға пайдаланбау, деректерді барынша азайту. 4. Жауапкершілік: шағымдарды адамның қарауы, қате деңгейлері туралы ашық есептер, шешімдерге жауапкершілікті нақты бекіту.",
            hint: "Think about each ethical principle separately and how it applies to content moderation.",
            hintRu: "Подумайте о каждом принципе отдельно и как он применяется к модерации.",
            hintKk: "Әр этикалық принцип туралы бөлек ойлаңыз және ол мазмұнды модерациялауға қалай қолданылатынын қарастырыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Cloud & Deployment",
        titleRu: "Облако и развёртывание",
        titleKk: "Бұлт және орналастыру",
        content: "Cloud computing provides on-demand computing resources (servers, storage, databases) over the internet. Major providers are AWS, Google Cloud, and Azure. Deployment is the process of making your application available to users. Modern deployment uses CI/CD pipelines, Docker containers, and serverless functions. Understanding cloud infrastructure is essential for building production applications.",
        contentRu: "Облачные вычисления предоставляют вычислительные ресурсы (серверы, хранилище, базы данных) через интернет по запросу. Основные провайдеры: AWS, Google Cloud, Azure. Развёртывание — процесс предоставления приложения пользователям. Современное развёртывание использует CI/CD, Docker-контейнеры и бессерверные функции. Понимание облачной инфраструктуры необходимо для промышленных приложений.",
        contentKk: "Бұлтты есептеу интернет арқылы сұраныс бойынша есептеу ресурстарын (серверлер, сақтау, деректер қоры) ұсынады. Негізгі провайдерлер: AWS, Google Cloud, Azure. Орналастыру — қосымшаны пайдаланушыларға қолжетімді ету процесі. Заманауи орналастыру CI/CD құбырларын, Docker контейнерлерін және серверсіз функцияларды пайдаланады. Бұлтты инфрақұрылымды түсіну өндірістік қосымшалар жасау үшін маңызды.",
        keyFormulas: [
          {
            formula: "Code → Build → Test → Deploy → Monitor (CI/CD pipeline)",
            formulaRu: "Код → Сборка → Тестирование → Развёртывание → Мониторинг (CI/CD пайплайн)",
            formulaKk: "Код → Құрастыру → Тестілеу → Іске қосу → Мониторинг (CI/CD пайплайны)",
            description: "Continuous Integration / Continuous Deployment workflow",
            descriptionRu: "Рабочий процесс непрерывной интеграции / развёртывания",
            descriptionKk: "Үздіксіз интеграция / үздіксіз орналастыру жұмыс ағыны"
          }
        ],
        solvedExamples: [
          {
            question: "Explain the difference between IaaS, PaaS, and SaaS with examples.",
            questionRu: "Объясните разницу между IaaS, PaaS и SaaS с примерами.",
            questionKk: "IaaS, PaaS және SaaS арасындағы айырмашылықты мысалдармен түсіндіріңіз.",
            steps: [
              { en: "IaaS (Infrastructure as a Service): rent virtual machines — AWS EC2. You manage OS, runtime, and app. PaaS (Platform as a Service): deploy code without managing servers — Vercel, Heroku.", ru: "IaaS: аренда ВМ — AWS EC2. Вы управляете ОС и приложением. PaaS: развёртывание кода без управления серверами — Vercel, Heroku.", kk: "IaaS: виртуалды машиналарды жалдау — AWS EC2. Сіз ОЖ және қосымшаны басқарасыз. PaaS: серверлерді басқармай код орналастыру — Vercel, Heroku." },
              { en: "SaaS (Software as a Service): use ready-made software — Gmail, Slack. Users manage nothing technical.", ru: "SaaS: готовое ПО — Gmail, Slack. Пользователи ничем техническим не управляют.", kk: "SaaS: дайын бағдарламалық қамтамасыз ету — Gmail, Slack. Пайдаланушылар техникалық ештеңені басқармайды." }
            ],
            answer: "IaaS = rent servers (EC2), PaaS = deploy code (Vercel), SaaS = use software (Gmail). Each level abstracts more infrastructure.",
            answerRu: "IaaS = аренда серверов (EC2), PaaS = развёртывание кода (Vercel), SaaS = использование программного обеспечения (Gmail). Каждый уровень абстрагирует всё больше инфраструктуры.",
            answerKk: "IaaS = серверлерді жалға алу (EC2), PaaS = кодты деплой жасау (Vercel), SaaS = бағдарламалық қамтамасыз етуді пайдалану (Gmail). Әр деңгей инфрақұрылымның көбірек бөлігін абстрактайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name the three major cloud computing providers.",
            questionRu: "Назовите три основных поставщика облачных вычислений.",
            questionKk: "Бұлтты есептеудің үш негізгі провайдерін атаңыз.",
            answer: "AWS (Amazon), Google Cloud, and Microsoft Azure.",
            answerRu: "AWS (Amazon), Google Cloud и Microsoft Azure.",
            answerKk: "AWS (Amazon), Google Cloud және Microsoft Azure.",
            hint: "Think of the three biggest tech companies that rent out servers.",
            hintRu: "Подумайте о трёх крупнейших технологических компаниях, сдающих серверы.",
            hintKk: "Серверлерді жалға беретін үш ірі технология компаниясын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is Docker and why is it useful for deployment?",
            questionRu: "Что такое Docker и чем он полезен для развёртывания?",
            questionKk: "Docker деген не және ол орналастыру үшін неге пайдалы?",
            answer: "Docker packages your application and all its dependencies into a container that runs consistently anywhere — your laptop, staging, or production. It eliminates 'works on my machine' problems.",
            answerRu: "Docker упаковывает ваше приложение и все его зависимости в контейнер, который одинаково работает где угодно — на вашем ноутбуке, в staging или в production. Это устраняет проблему «у меня на машине работает».",
            answerKk: "Docker қолданбаңызды және оның барлық тәуелділіктерін кез келген жерде — ноутбуғыңызда, staging-те немесе production-да бірдей жұмыс істейтін контейнерге орайды. Бұл «менің компьютерімде жұмыс істейді» мәселесін жояды.",
            hint: "Think of it as a shipping container for software — same box, any ship.",
            hintRu: "Представьте контейнер для перевозки ПО — одна коробка, любой корабль.",
            hintKk: "Бағдарламалық жасақтама үшін жүк контейнерін елестетіңіз — бір қорап, кез келген кеме.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Write a basic Dockerfile for a Python Flask web application that runs on port 5000.",
            questionRu: "Напишите базовый Dockerfile для Python Flask веб-приложения на порту 5000.",
            questionKk: "5000 портта жұмыс істейтін Python Flask веб-қосымшасы үшін негізгі Dockerfile жазыңыз.",
            answer: "FROM python:3.11-slim\\nWORKDIR /app\\nCOPY requirements.txt .\\nRUN pip install -r requirements.txt\\nCOPY . .\\nEXPOSE 5000\\nCMD [\"python\", \"app.py\"]",
            answerRu: "FROM python:3.11-slim\\nWORKDIR /app\\nCOPY requirements.txt .\\nRUN pip install -r requirements.txt\\nCOPY . .\\nEXPOSE 5000\\nCMD [\"python\", \"app.py\"]",
            answerKk: "FROM python:3.11-slim\\nWORKDIR /app\\nCOPY requirements.txt .\\nRUN pip install -r requirements.txt\\nCOPY . .\\nEXPOSE 5000\\nCMD [\"python\", \"app.py\"]",
            hint: "Start FROM a Python base image, COPY files, RUN pip install, EXPOSE port, CMD to start.",
            hintRu: "Начните FROM базового образа Python, COPY файлы, RUN pip install, EXPOSE порт, CMD для запуска.",
            hintKk: "Python базалық кескінінен FROM бастаңыз, файлдарды COPY, pip install RUN, портты EXPOSE, бастау үшін CMD.",
            xp: 20
          }
        ]
      },
      {
        title: "Technical Interviews",
        titleRu: "Технические собеседования",
        titleKk: "Техникалық сұхбаттар",
        content: "Technical interviews test problem-solving, coding ability, and communication skills. They typically include coding challenges (algorithms/data structures), system design questions, and behavioral questions. The key is to think out loud, ask clarifying questions, start with a brute force solution, then optimize. Practice on platforms like LeetCode and HackerRank.",
        contentRu: "Технические собеседования проверяют навыки решения задач, кодирования и коммуникации. Они включают задачи на алгоритмы и структуры данных, проектирование систем и поведенческие вопросы. Ключ — думать вслух, задавать уточняющие вопросы, начать с простого решения, затем оптимизировать. Практика на LeetCode и HackerRank.",
        contentKk: "Техникалық сұхбаттар есеп шешу, кодтау және коммуникация дағдыларын тексереді. Олар әдетте кодтау тапсырмаларын (алгоритмдер/деректер құрылымдары), жүйе жобалау сұрақтарын және мінез-құлық сұрақтарын қамтиды. Кілті — дауыстап ойлау, нақтылау сұрақтарын қою, қарапайым шешімнен бастау, содан кейін оңтайландыру. LeetCode және HackerRank платформаларында жаттығыңыз.",
        keyFormulas: [
          {
            formula: "Clarify → Brute Force → Optimize → Code → Test",
            formulaRu: "Уточнение → Полный перебор → Оптимизация → Код → Тестирование",
            formulaKk: "Нақтылау → Толық іздеу → Оңтайландыру → Код → Тестілеу",
            description: "Step-by-step approach to solving coding interview problems",
            descriptionRu: "Пошаговый подход к решению задач на собеседовании",
            descriptionKk: "Кодтау сұхбат есептерін шешудің қадамдық тәсілі"
          }
        ],
        solvedExamples: [
          {
            question: "Interview question: Given an array of integers, find two numbers that sum to a target. Walk through the solution process.",
            questionRu: "Вопрос собеседования: найдите два числа в массиве с заданной суммой. Покажите процесс решения.",
            questionKk: "Сұхбат сұрағы: бүтін сандар массивінен мақсатты қосындыға тең екі сан табыңыз. Шешу процесін көрсетіңіз.",
            steps: [
              { en: "Clarify: duplicates allowed? sorted? Then brute force: check all pairs O(n^2).", ru: "Уточните: дубликаты? отсортирован? Грубая сила: проверить все пары O(n^2).", kk: "Нақтылаңыз: қайталанулар бар ма? сұрыпталған ба? Дөрекі күш: барлық жұптарды тексеру O(n^2)." },
              { en: "Optimize: use a hash map. For each number, check if (target - num) exists in the map. O(n) time, O(n) space.", ru: "Оптимизация: хеш-таблица. Для каждого числа проверить (target - num) в таблице. O(n) времени, O(n) памяти.", kk: "Оңтайландыру: хеш-кесте пайдаланыңыз. Әр сан үшін кестеде (мақсат - сан) бар-жоғын тексеріңіз. O(n) уақыт, O(n) кеңістік." }
            ],
            answer: "Hash map approach: iterate once, for each num check if complement is in map. O(n) time.",
            answerRu: "Подход с хеш-таблицей: один проход, для каждого числа проверяем, есть ли дополнение в таблице. Время O(n).",
            answerKk: "Хеш-кесте тәсілі: бір рет өту, әр сан үшін толықтауыш кестеде бар ма, соны тексеру. Уақыты O(n)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the first thing you should do when given a coding interview problem?",
            questionRu: "Что нужно сделать первым делом при получении задачи на собеседовании?",
            questionKk: "Кодтау сұхбат есебін алғанда бірінші не істеу керек?",
            answer: "Ask clarifying questions — understand the input format, constraints, edge cases, and expected output before coding.",
            answerRu: "Задавайте уточняющие вопросы — разберитесь с форматом ввода, ограничениями, граничными случаями и ожидаемым выводом, прежде чем писать код.",
            answerKk: "Нақтылаушы сұрақтар қойыңыз — код жазбас бұрын енгізу пішімін, шектеулерді, шеткі жағдайларды және күтілетін нәтижені түсініңіз.",
            hint: "Do not start coding immediately — understand the problem first.",
            hintRu: "Не начинайте кодировать сразу — сначала поймите задачу.",
            hintKk: "Бірден кодтауды бастамаңыз — алдымен есепті түсініңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Solve: given a string, find the length of the longest substring without repeating characters. Input: 'abcabcbb'.",
            questionRu: "Решите: найдите длину самой длинной подстроки без повторяющихся символов. Вход: 'abcabcbb'.",
            questionKk: "Шешіңіз: қайталанбайтын таңбалары бар ең ұзын ішкі жолдың ұзындығын табыңыз. Кіріс: 'abcabcbb'.",
            answer: "3 — the longest substring is 'abc'. Use a sliding window with a set to track current characters. When a duplicate is found, shrink the window from the left.",
            answerRu: "3 — самая длинная подстрока это 'abc'. Используйте скользящее окно с множеством для отслеживания текущих символов. При обнаружении дубликата сужайте окно слева.",
            answerKk: "3 — ең ұзын ішкі жол 'abc'. Ағымдағы таңбаларды бақылау үшін жиынтығы бар жылжымалы терезе пайдаланыңыз. Қайталанған таңба табылғанда, терезені сол жағынан тарылтыңыз.",
            hint: "Use two pointers (sliding window) and a set to track unique characters.",
            hintRu: "Используйте два указателя (скользящее окно) и множество для отслеживания уникальных символов.",
            hintKk: "Бірегей таңбаларды қадағалау үшін екі сілтеме (жылжымалы терезе) және жиынтық пайдаланыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Solve: given an array of stock prices by day, find the maximum profit from one buy and one sell. You must buy before you sell. Input: [7, 1, 5, 3, 6, 4].",
            questionRu: "Решите: массив цен акций по дням, найдите максимальную прибыль от одной покупки и продажи. Вход: [7, 1, 5, 3, 6, 4].",
            questionKk: "Шешіңіз: күн бойынша акция бағалары массиві берілген, бір сатып алу мен бір сатудан максималды пайда табыңыз. Кіріс: [7, 1, 5, 3, 6, 4].",
            answer: "Maximum profit = 5 (buy at 1, sell at 6). Algorithm: track the minimum price seen so far, and at each day calculate profit = price - min_price. Keep the maximum profit. O(n) time, O(1) space.",
            answerRu: "Максимальная прибыль = 5 (купить за 1, продать за 6). Алгоритм: отслеживайте минимальную цену до текущего дня и для каждого дня считайте прибыль = price - min_price. Сохраняйте максимальную прибыль. Время O(n), память O(1).",
            answerKk: "Максимал пайда = 5 (1-ге сатып алып, 6-ға сату). Алгоритм: осы уақытқа дейінгі ең төмен бағаны бақылап, әр күн үшін пайда = price - min_price есептеңіз. Максимал пайданы сақтаңыз. Уақыты O(n), жады O(1).",
            hint: "Track the minimum price so far and the maximum profit so far in a single pass.",
            hintRu: "Отслеживайте минимальную цену и максимальную прибыль за один проход.",
            hintKk: "Бір өтуде осы уақытқа дейінгі минималды бағаны және максималды пайданы қадағалаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Portfolio Project",
        titleRu: "Портфолио-проект",
        titleKk: "Портфолио жобасы",
        content: "A portfolio project is a substantial application that showcases your skills to universities and employers. The best portfolios demonstrate full-stack ability: frontend, backend, database, API integration, and deployment. Document your process with a README, include clean code with comments, use Git for version control, and deploy it live. Quality matters more than quantity — one excellent project beats ten mediocre ones.",
        contentRu: "Портфолио-проект — значительное приложение, демонстрирующее навыки университетам и работодателям. Лучшие портфолио показывают полный стек: фронтенд, бэкенд, базу данных, API и развёртывание. Документируйте процесс в README, пишите чистый код с комментариями, используйте Git и разверните проект онлайн. Качество важнее количества — один отличный проект лучше десяти посредственных.",
        contentKk: "Портфолио жобасы — университеттер мен жұмыс берушілерге дағдыларыңызды көрсететін маңызды қосымша. Ең жақсы портфолиолар толық стекті көрсетеді: фронтенд, бэкенд, деректер қоры, API интеграциясы және орналастыру. Процесті README-мен құжаттаңыз, түсініктемелері бар таза код жазыңыз, нұсқаларды басқару үшін Git пайдаланыңыз және оны тірі орналастырыңыз. Сапа санды маңыздырақ — бір тамаша жоба он орташадан жақсы.",
        keyFormulas: [
          {
            formula: "Idea → Plan → Build → Test → Document → Deploy → Share",
            formulaRu: "Идея → План → Разработка → Тестирование → Документирование → Развёртывание → Публикация",
            formulaKk: "Идея → Жоспар → Әзірлеу → Тестілеу → Құжаттау → Іске қосу → Тарату",
            description: "Portfolio project development lifecycle",
            descriptionRu: "Жизненный цикл разработки портфолио-проекта",
            descriptionKk: "Портфолио жобасын әзірлеудің өмірлік циклі"
          }
        ],
        solvedExamples: [
          {
            question: "Plan a portfolio-worthy project: a study group finder app for students. Outline the tech stack and key features.",
            questionRu: "Спланируйте портфолио-проект: приложение поиска учебных групп. Опишите стек и ключевые функции.",
            questionKk: "Портфолиоға лайықты жобаны жоспарлаңыз: оқушылар үшін оқу тобын іздеу қосымшасы. Технологиялар стегі мен негізгі мүмкіндіктерін сипаттаңыз.",
            steps: [
              { en: "Tech stack: React frontend, Node.js/Express backend, PostgreSQL database, deployed on Vercel + Railway.", ru: "Стек: React фронтенд, Node.js/Express бэкенд, PostgreSQL, Vercel + Railway.", kk: "Технологиялар стегі: React фронтенд, Node.js/Express бэкенд, PostgreSQL, Vercel + Railway-де орналастырылған." },
              { en: "Features: user auth, create/join study groups, filter by subject/time, real-time chat (WebSocket), profile page showing groups and study hours.", ru: "Функции: авторизация, создание/вступление в группы, фильтрация по предмету/времени, чат реального времени, профиль с группами и часами.", kk: "Мүмкіндіктер: пайдаланушы аутентификациясы, оқу топтарын жасау/қосылу, пән/уақыт бойынша сүзу, нақты уақыттағы чат (WebSocket), топтар мен оқу сағаттарын көрсететін профиль беті." }
            ],
            answer: "Full-stack app with React + Node.js + PostgreSQL. Key features: auth, group CRUD, search/filter, real-time chat, deployed live.",
            answerRu: "Full-stack приложение на React + Node.js + PostgreSQL. Ключевые функции: аутентификация, CRUD групп, поиск/фильтры, чат в реальном времени, развёрнуто в продакшене.",
            answerKk: "React + Node.js + PostgreSQL негізіндегі full-stack қосымша. Негізгі мүмкіндіктер: аутентификация, топтар CRUD, іздеу/сүзу, нақты уақыттағы чат, өндіріске шығарылған."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What should every portfolio project have in its GitHub repository?",
            questionRu: "Что должно быть в GitHub-репозитории каждого портфолио-проекта?",
            questionKk: "Әр портфолио жобасының GitHub репозиторийінде не болуы керек?",
            answer: "A clear README with project description, setup instructions, screenshots/demo link, and technologies used.",
            answerRu: "Понятный README с описанием проекта, инструкциями по установке, скриншотами/ссылкой на демо и использованными технологиями.",
            answerKk: "Жоба сипаттамасы, орнату нұсқаулары, скриншоттар/демо сілтемесі және пайдаланылған технологиялар жазылған түсінікті README.",
            hint: "Think about what a visitor would need to understand and run your project.",
            hintRu: "Подумайте, что нужно посетителю, чтобы понять и запустить ваш проект.",
            hintKk: "Келушіге жобаңызды түсіну және іске қосу үшін не қажет екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why is deploying a project online better than just having code on GitHub?",
            questionRu: "Почему развёртывание проекта онлайн лучше, чем просто код на GitHub?",
            questionKk: "Жобаны онлайн орналастыру неге тек GitHub-тағы кодтан жақсы?",
            answer: "A live demo lets reviewers (universities, employers) immediately see and interact with your project without needing to download and run it. It also proves you understand deployment, which is a real-world skill.",
            answerRu: "Рабочее демо позволяет проверяющим (университетам, работодателям) сразу увидеть ваш проект и взаимодействовать с ним без скачивания и запуска. Это также доказывает, что вы разбираетесь в деплое — реальном рабочем навыке.",
            answerKk: "Жұмыс істейтін демо тексерушілерге (университеттерге, жұмыс берушілерге) жобаны жүктеп, іске қосусыз бірден көруге және онымен жұмыс істеуге мүмкіндік береді. Сондай-ақ бұл сіздің деплойды түсінетініңізді дәлелдейді — бұл нақты өмірде қажетті дағды.",
            hint: "Would you rather look at code or click through a working app?",
            hintRu: "Что бы вы предпочли — смотреть код или кликать по рабочему приложению?",
            hintKk: "Кодты қарағанды немесе жұмыс істейтін қосымшаны басқанды қалайсыз ба?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a complete portfolio project from scratch: choose a problem, define the tech stack, list 5 features, and describe your deployment plan.",
            questionRu: "Спроектируйте портфолио-проект с нуля: выберите проблему, стек, 5 функций и план развёртывания.",
            questionKk: "Нөлден портфолио жобасын жобалаңыз: мәселені таңдаңыз, технологиялар стегін анықтаңыз, 5 мүмкіндікті тізімдеңіз және орналастыру жоспарыңызды сипаттаңыз.",
            answer: "Problem: Student budget tracker. Stack: React + TypeScript, Supabase (auth + DB), Tailwind CSS, Vercel. Features: 1) expense tracking with categories, 2) monthly budget goals, 3) charts/visualizations, 4) recurring expenses, 5) export to CSV. Deployment: GitHub repo → Vercel auto-deploy, Supabase hosted DB, environment variables for secrets.",
            answerRu: "Проблема: трекер студенческого бюджета. Стек: React + TypeScript, Supabase (аутентификация + БД), Tailwind CSS, Vercel. Функции: 1) отслеживание расходов по категориям, 2) месячные бюджетные цели, 3) графики/визуализации, 4) регулярные расходы, 5) экспорт в CSV. Развёртывание: репозиторий GitHub → автодеплой на Vercel, размещённая БД Supabase, переменные окружения для секретов.",
            answerKk: "Мәселе: студент бюджетінің трекері. Стек: React + TypeScript, Supabase (аутентификация + дерекқор), Tailwind CSS, Vercel. Мүмкіндіктер: 1) шығыстарды санаттар бойынша бақылау, 2) айлық бюджет мақсаттары, 3) графиктер/визуализациялар, 4) тұрақты шығыстар, 5) CSV-ға экспорт. Деплой: GitHub репозиторийі → Vercel автодеплоеы, Supabase дерекқоры, құпияларға арналған орта айнымалылары.",
            hint: "Pick a problem you personally face — it will be more authentic and easier to explain in interviews.",
            hintRu: "Выберите проблему, с которой сталкиваетесь лично — это будет аутентичнее и легче объяснить.",
            hintKk: "Жеке басыңызда кездесетін мәселені таңдаңыз — ол аутентті болады және сұхбаттарда түсіндіру оңай.",
            xp: 20
          }
        ]
      }
    ]
  }
};