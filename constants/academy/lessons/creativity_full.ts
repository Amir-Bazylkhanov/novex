// ============================================
// Учебный контент планеты «Digital Creativity» (креативность и цифровое
// искусство) — готовый учебный курс Академии Novex.
// Подключается в constants/academy/catalog.ts как одна из
// планет и показывается на странице /learn для соответствующего
// робота-наставника.
// Одна запись = один класс (ключ вида "Digital Creativity_8"..._12):
// введение + список секций, где у каждой секции — теория на трёх языках,
// формулы, термины, разобранные примеры и практические задачи.
// ============================================
import type { LessonContent } from '../lessonData.ts';

export const CREATIVITY_FULL: Record<string, LessonContent> = {
  "Digital Creativity_8": {
    planetName: "Digital Creativity",
    introduction: {
      en: "Welcome to Digital Creativity! You will explore the foundations of digital art — from color theory and pixel art to photo editing, typography, and building your first digital portfolio.",
      ru: "Добро пожаловать в Цифровое Творчество! Вы изучите основы цифрового искусства — от теории цвета и пиксель-арта до редактирования фотографий, типографики и создания первого цифрового портфолио."
    },
    sections: [
      {
        title: "Digital Art Basics",
        titleRu: "Основы цифрового искусства",
        titleKk: "Сандық өнер негіздері",
        content: "Digital art is any artwork created using digital tools such as tablets, computers, or smartphones. Unlike traditional art, digital art allows unlimited undos, layers, and instant color changes. Understanding raster vs. vector graphics is essential: raster images use pixels and lose quality when enlarged, while vector images use mathematical paths and scale infinitely.",
        contentRu: "Цифровое искусство — это любое произведение, созданное с помощью цифровых инструментов: планшетов, компьютеров или смартфонов. В отличие от традиционного искусства, цифровое позволяет неограниченную отмену действий, работу со слоями и мгновенную смену цветов. Важно понимать разницу между растровой и векторной графикой: растровые изображения состоят из пикселей и теряют качество при увеличении, а векторные используют математические кривые и масштабируются бесконечно.",
        contentKk: "Сандық өнер — планшеттер, компьютерлер немесе смартфондар сияқты сандық құралдар арқылы жасалған кез келген өнер туындысы. Дәстүрлі өнерден айырмашылығы, сандық өнер шексіз болдырмау, қабаттар және лезде түс өзгерту мүмкіндігін береді. Растрлық және векторлық графиканы түсіну маңызды: растрлық кескіндер пиксельдерден тұрады және үлкейткенде сапасын жоғалтады, ал векторлық кескіндер математикалық қисықтарды пайдаланады және шексіз масштабталады.",
        keyFormulas: [
          {
            formula: "Resolution = Width (px) × Height (px)",
            formulaRu: "Разрешение = Ширина (px) × Высота (px)",
            formulaKk: "Ажыратымдылық = Ені (px) × Биіктігі (px)",
            description: "Total pixel count determines image detail level",
            descriptionRu: "Общее количество пикселей определяет уровень детализации изображения",
            descriptionKk: "Жалпы пиксель саны кескіннің деталдану деңгейін анықтайды"
          },
          {
            formula: "DPI (Dots Per Inch) — Screen: 72-96 DPI, Print: 300 DPI",
            formulaRu: "DPI (точек на дюйм) — Экран: 72-96 DPI, Печать: 300 DPI",
            formulaKk: "DPI (дюймдегі нүкте саны) — Экран: 72-96 DPI, Баспа: 300 DPI",
            description: "DPI determines how sharp an image appears in different media",
            descriptionRu: "DPI определяет, насколько чётким выглядит изображение в разных средах",
            descriptionKk: "DPI кескіннің әртүрлі ортада қаншалықты анық көрінетінін анықтайды"
          }
        ],
        solvedExamples: [
          {
            question: "You need to create a poster that will be printed at 300 DPI on an A4 sheet (8.27 × 11.69 inches). What pixel dimensions should your canvas be?",
            questionRu: "Вам нужно создать плакат для печати с разрешением 300 DPI на листе A4 (8,27 × 11,69 дюймов). Какие размеры холста в пикселях вам нужны?",
            questionKk: "A4 парағына (8,27 × 11,69 дюйм) 300 DPI ажыратымдылықпен басып шығарылатын постер жасау керек. Кенептің пиксельдік өлшемдері қандай болуы керек?",
            steps: [
              { en: "Multiply width in inches by DPI: 8.27 × 300 = 2481 pixels wide.", ru: "Умножьте ширину в дюймах на DPI: 8,27 × 300 = 2481 пикселей в ширину.", kk: "Дюймдегі енін DPI-ға көбейтіңіз: 8,27 × 300 = 2481 пиксель ені." },
              { en: "Multiply height in inches by DPI: 11.69 × 300 = 3507 pixels tall.", ru: "Умножьте высоту в дюймах на DPI: 11,69 × 300 = 3507 пикселей в высоту.", kk: "Дюймдегі биіктігін DPI-ға көбейтіңіз: 11,69 × 300 = 3507 пиксель биіктігі." }
            ],
            answer: "The canvas should be 2481 × 3507 pixels for crisp A4 printing at 300 DPI.",
            answerRu: "Холст должен быть 2481 × 3507 пикселей, чтобы печать на A4 при 300 DPI была чёткой.",
            answerKk: "A4 парағын 300 DPI-мен анық басып шығару үшін кенеп 2481 × 3507 пиксель болуы керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which image type loses quality when you zoom in — raster or vector?",
            questionRu: "Какой тип изображения теряет качество при увеличении — растровый или векторный?",
            questionKk: "Қай кескін түрі үлкейткенде сапасын жоғалтады — растрлық па әлде векторлық па?",
            answer: "Raster",
            answerRu: "Растровый",
            answerKk: "Растрлық",
            hint: "Think about what happens to individual pixels when they are stretched.",
            hintRu: "Подумайте, что происходит с отдельными пикселями при растяжении.",
            hintKk: "Жеке пиксельдерді созғанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A social media image is 1080 × 1080 pixels displayed on a 72 DPI screen. What is the display size in inches?",
            questionRu: "Изображение для соцсетей 1080 × 1080 пикселей отображается на экране 72 DPI. Каков размер отображения в дюймах?",
            questionKk: "Әлеуметтік желіге арналған 1080 × 1080 пиксельдік кескін 72 DPI экранда көрсетіледі. Дюймдегі көрсету өлшемі қандай?",
            answer: "15 × 15 inches (1080 ÷ 72 = 15)",
            answerRu: "15 × 15 дюймов (1080 ÷ 72 = 15)",
            answerKk: "15 × 15 дюйм (1080 ÷ 72 = 15)",
            hint: "Divide pixel dimensions by DPI to get inches.",
            hintRu: "Разделите размеры в пикселях на DPI, чтобы получить дюймы.",
            hintKk: "Дюймді алу үшін пиксельдік өлшемдерді DPI-ға бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have a 640 × 480 photo and need to print it at 300 DPI. What will the print size be, and will it look sharp for a 5×7 inch frame?",
            questionRu: "У вас фото 640 × 480, и нужно напечатать его с разрешением 300 DPI. Каким будет размер печати, и будет ли оно чётким для рамки 5×7 дюймов?",
            questionKk: "Сізде 640 × 480 фото бар және оны 300 DPI-мен басып шығару керек. Басып шығару өлшемі қандай болады және 5×7 дюймдік жақтауға сапалы бола ма?",
            answer: "Print size is 2.13 × 1.6 inches (640÷300, 480÷300). It will NOT be sharp enough for a 5×7 frame — you need at least 1500 × 2100 pixels.",
            answerRu: "Размер печати — 2.13 × 1.6 дюйма (640÷300, 480÷300). Для рамки 5×7 он будет недостаточно чётким — нужно не менее 1500 × 2100 пикселей.",
            answerKk: "Басып шығару өлшемі — 2.13 × 1.6 дюйм (640÷300, 480÷300). 5×7 жақтауы үшін ол жеткілікті анық болмайды — кемінде 1500 × 2100 пиксель қажет.",
            xp: 20
          }
        ]
      },
      {
        title: "Color Theory",
        titleRu: "Теория цвета",
        titleKk: "Түс теориясы",
        content: "Color theory explains how colors relate to each other and how they affect emotions. The color wheel organizes primary, secondary, and tertiary colors. Complementary colors (opposite on the wheel) create contrast, while analogous colors (adjacent) create harmony. In digital design, we use the HSB model — Hue, Saturation, and Brightness — to precisely control colors.",
        contentRu: "Теория цвета объясняет, как цвета связаны друг с другом и как они влияют на эмоции. Цветовой круг организует первичные, вторичные и третичные цвета. Комплементарные цвета (противоположные на круге) создают контраст, а аналоговые (соседние) — гармонию. В цифровом дизайне мы используем модель HSB — оттенок, насыщенность и яркость — для точного управления цветами.",
        contentKk: "Түс теориясы түстердің бір-бірімен қалай байланысатынын және эмоцияларға қалай әсер ететінін түсіндіреді. Түс дөңгелегі бастапқы, қосалқы және үштік түстерді ұйымдастырады. Комплементар түстер (дөңгелекте қарама-қарсы) контраст жасайды, ал аналогты түстер (көрші) үйлесімділік жасайды. Сандық дизайнда біз түстерді дәл басқару үшін HSB моделін — реңк, қанықтық және жарықтық — қолданамыз.",
        keyFormulas: [
          {
            formula: "Complementary pair = colors 180° apart on the color wheel",
            formulaRu: "Комплементарная пара = цвета на расстоянии 180° на цветовом круге",
            formulaKk: "Комплементарлы жұп = түс шеңберінде бір-бірінен 180° қашықтықтағы түстер",
            description: "Maximum contrast color pairing",
            descriptionRu: "Максимальная контрастная цветовая пара",
            descriptionKk: "Максималды контрастты түс жұбы"
          },
          {
            formula: "HSB: Hue (0-360°), Saturation (0-100%), Brightness (0-100%)",
            formulaRu: "HSB: Оттенок (0-360°), Насыщенность (0-100%), Яркость (0-100%)",
            formulaKk: "HSB: Реңк (0-360°), Қанықтық (0-100%), Жарықтық (0-100%)",
            description: "Three-axis model for defining any digital color",
            descriptionRu: "Трёхосевая модель для определения любого цифрового цвета",
            descriptionKk: "Кез келген сандық түсті анықтау үшін үш осьті модель"
          }
        ],
        solvedExamples: [
          {
            question: "You want to create a calming color scheme for a meditation app. Which color harmony should you use?",
            questionRu: "Вы хотите создать успокаивающую цветовую схему для приложения для медитации. Какую цветовую гармонию выбрать?",
            questionKk: "Медитация қолданбасы үшін тыныштандыратын түс схемасын жасағыңыз келеді. Қандай түс гармониясын таңдайсыз?",
            steps: [
              { en: "Calming designs need low contrast and smooth transitions — this suggests analogous colors.", ru: "Успокаивающий дизайн требует низкого контраста и плавных переходов — это указывает на аналоговые цвета.", kk: "Тыныштандыратын дизайн төмен контраст пен тегіс ауысуларды қажет етеді — бұл аналогты түстерді көрсетеді." },
              { en: "Choose analogous cool tones like blue, blue-green, and green with high brightness and low saturation for a serene feel.", ru: "Выберите аналоговые холодные тона: синий, сине-зелёный и зелёный с высокой яркостью и низкой насыщенностью для спокойного ощущения.", kk: "Тыныш сезім үшін жоғары жарықтық пен төмен қанықтығы бар көк, көк-жасыл және жасыл сияқты аналогты салқын реңктерді таңдаңыз." }
            ],
            answer: "Use an analogous color harmony with cool tones (blue, blue-green, green) at high brightness and low saturation.",
            answerRu: "Используйте аналоговую цветовую гармонию с холодными тонами (синий, сине-зелёный, зелёный) при высокой яркости и низкой насыщенности.",
            answerKk: "Жоғары жарықтық пен төмен қанықтығы бар салқын реңктерден (көк, көк-жасыл, жасыл) тұратын аналогты түс үйлесімділігін қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the complementary color of red on the color wheel?",
            questionRu: "Какой комплементарный цвет у красного на цветовом круге?",
            questionKk: "Түс дөңгелегінде қызыл түстің комплементар түсі қандай?",
            answer: "Green",
            answerRu: "Зелёный",
            answerKk: "Жасыл",
            hint: "Look directly across the color wheel from red.",
            hintRu: "Посмотрите прямо напротив красного на цветовом круге.",
            hintKk: "Түс дөңгелегінде қызылдың тура қарсысына қараңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A color has HSB values of H:200, S:80%, B:60%. Is it a vivid or muted color, and is it light or dark?",
            questionRu: "Цвет имеет значения HSB: H:200, S:80%, B:60%. Это яркий или приглушённый цвет, светлый или тёмный?",
            questionKk: "Түстің HSB мәндері: H:200, S:80%, B:60%. Бұл ашық па әлде өңсіз бе, жарық па әлде қараңғы ма?",
            answer: "Vivid (saturation 80% is high) and medium-dark (brightness 60% is moderate).",
            answerRu: "Яркий (насыщенность 80% — высокая) и средне-тёмный (яркость 60% — умеренная).",
            answerKk: "Ашық (қанықтық 80% — жоғары) және орташа қараңғы (жарықтық 60% — орташа).",
            hint: "Saturation above 60% is vivid; brightness below 70% tends toward darker tones.",
            hintRu: "Насыщенность выше 60% — яркий; яркость ниже 70% — тёмные тона.",
            hintKk: "Қанықтық 60%-дан жоғары — ашық; жарықтық 70%-дан төмен — қараңғы реңктер.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a triadic color scheme starting from orange (H:30). What are the other two hue values, and what mood does this scheme convey?",
            questionRu: "Разработайте триадную цветовую схему, начиная с оранжевого (H:30). Какие два других значения оттенка, и какое настроение создаёт эта схема?",
            questionKk: "Қызғылт сарыдан (H:30) бастап триадалық түс схемасын жасаңыз. Қалған екі реңк мәні қандай және бұл схема қандай көңіл-күй тудырады?",
            answer: "H:150 (green) and H:270 (violet). Triadic schemes feel vibrant and balanced — energetic yet harmonious.",
            answerRu: "H:150 (зелёный) и H:270 (фиолетовый). Триадные схемы выглядят ярко и сбалансированно — энергично, но гармонично.",
            answerKk: "H:150 (жасыл) және H:270 (күлгін). Триадалық схемалар жарқын әрі теңгерімді әсер береді — қуатты, бірақ үйлесімді.",
            xp: 20
          }
        ]
      },
      {
        title: "Pixel Art",
        titleRu: "Пиксель-арт",
        titleKk: "Пиксель-өнер",
        content: "Pixel art is a digital art form where images are created at the pixel level, typically on small canvases like 16×16 or 32×32. Each pixel is deliberately placed to convey shape and detail. Limiting your color palette to 4-8 colors forces creative problem-solving and keeps the art cohesive. Tools like Piskel and Aseprite are popular for creating pixel art and animations.",
        contentRu: "Пиксель-арт — это форма цифрового искусства, где изображения создаются на уровне пикселей, обычно на маленьких холстах, таких как 16×16 или 32×32. Каждый пиксель намеренно размещается для передачи формы и деталей. Ограничение палитры 4-8 цветами стимулирует творческое решение задач и сохраняет целостность работы. Инструменты вроде Piskel и Aseprite популярны для создания пиксель-арта и анимаций.",
        contentKk: "Пиксель-өнер — кескіндер пиксель деңгейінде, әдетте 16×16 немесе 32×32 сияқты кішкентай кенептерде жасалатын сандық өнер түрі. Әрбір пиксель пішін мен деталь беру үшін әдейі орналастырылады. Палитраны 4-8 түспен шектеу шығармашылық мәселе шешуді ынталандырады және жұмыстың тұтастығын сақтайды. Piskel және Aseprite пиксель-өнер мен анимация жасауға арналған танымал құралдар.",
        keyFormulas: [
          {
            formula: "Canvas size: 16×16 (icon), 32×32 (sprite), 64×64 (detailed sprite)",
            formulaRu: "Размер холста: 16×16 (иконка), 32×32 (спрайт), 64×64 (детализированный спрайт)",
            formulaKk: "Кенеп өлшемі: 16×16 (иконка), 32×32 (спрайт), 64×64 (толық спрайт)",
            description: "Common pixel art canvas dimensions for different purposes",
            descriptionRu: "Распространённые размеры холста пиксель-арта для разных целей",
            descriptionKk: "Әртүрлі мақсаттарға арналған пиксель-өнер кенебінің кең таралған өлшемдері"
          }
        ],
        solvedExamples: [
          {
            question: "You are creating a 16×16 pixel art character for a game. How do you make it recognizable with so few pixels?",
            questionRu: "Вы создаёте персонажа 16×16 пиксель-арт для игры. Как сделать его узнаваемым при таком малом количестве пикселей?",
            questionKk: "Ойынға арналған 16×16 пиксель-арт кейіпкерін жасап жатырсыз. Осындай аз пиксельмен оны қалай танымал етесіз?",
            steps: [
              { en: "Focus on silhouette first — a distinctive outline is recognizable even at tiny sizes. Use 2-3 pixels for key features like head, body, and limbs.", ru: "Сначала сосредоточьтесь на силуэте — характерный контур узнаваем даже при крошечных размерах. Используйте 2-3 пикселя для ключевых элементов: голова, тело, конечности.", kk: "Алдымен силуэтке назар аударыңыз — ерекше контур кішкентай өлшемдерде де танылады. Бас, дене және аяқ-қол сияқты негізгі элементтерге 2-3 пиксель пайдаланыңыз." },
              { en: "Use a limited palette of 4-5 colors with clear contrast between the character and background. Add one highlight color for the character's most distinctive feature.", ru: "Используйте ограниченную палитру из 4-5 цветов с чётким контрастом между персонажем и фоном. Добавьте один акцентный цвет для самой характерной детали персонажа.", kk: "Кейіпкер мен фон арасындағы анық контрастпен 4-5 түстен тұратын шектеулі палитра қолданыңыз. Кейіпкердің ең ерекше бөлшегіне бір акцент түс қосыңыз." }
            ],
            answer: "Prioritize a clear silhouette with 2-3 pixel features and a 4-5 color palette with strong character-background contrast.",
            answerRu: "Сделайте ставку на чёткий силуэт с деталями в 2-3 пикселя и палитру из 4-5 цветов с сильным контрастом между персонажем и фоном.",
            answerKk: "2-3 пиксельдік бөлшектері бар айқын силуэтке және кейіпкер мен фон арасындағы күшті контрасты бар 4-5 түсті палитраға басымдық беріңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many total pixels are in a 16×16 canvas?",
            questionRu: "Сколько всего пикселей на холсте 16×16?",
            questionKk: "16×16 кенепте барлығы қанша пиксель бар?",
            answer: "256 pixels",
            answerRu: "256 пикселей",
            answerKk: "256 пиксель",
            hint: "Multiply width by height.",
            hintRu: "Умножьте ширину на высоту.",
            hintKk: "Енін биіктігіне көбейтіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have a 32×32 sprite with a 6-color palette. You want to add shading. What is the most efficient approach without adding too many new colors?",
            questionRu: "У вас спрайт 32×32 с палитрой из 6 цветов. Вы хотите добавить затенение. Каков наиболее эффективный подход без добавления слишком многих новых цветов?",
            questionKk: "Сізде 6 түсті палитрасы бар 32×32 спрайт бар. Көлеңке қосқыңыз келеді. Тым көп жаңа түс қоспай ең тиімді тәсіл қандай?",
            answer: "Add one darker shade for each base color (total 12 colors). Use the dark variant on edges facing away from the light source.",
            answerRu: "Добавьте по одному более тёмному оттенку к каждому базовому цвету (всего 12 цветов). Используйте тёмный вариант на краях, обращённых от источника света.",
            answerKk: "Әр негізгі түске бір қараңғы реңк қосыңыз (барлығы 12 түс). Қараңғы нұсқаны жарық көзінен теріс жақтағы жиектерде қолданыңыз.",
            hint: "Lower the brightness of each existing color by 20-30% to create shadow variants.",
            hintRu: "Уменьшите яркость каждого цвета на 20-30% для создания теневых вариантов.",
            hintKk: "Көлеңке нұсқаларын жасау үшін әр түстің жарықтығын 20-30%-ға азайтыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design a 4-frame walk cycle for a 16×16 character. Describe what changes in each frame and why this minimum frame count works.",
            questionRu: "Спроектируйте 4-кадровый цикл ходьбы для персонажа 16×16. Опишите, что меняется в каждом кадре и почему этого минимального количества кадров достаточно.",
            questionKk: "16×16 кейіпкер үшін 4 кадрлық жүру циклін жобалаңыз. Әр кадрда не өзгеретінін және неліктен бұл минималды кадр саны жеткілікті екенін сипаттаңыз.",
            answer: "Frame 1: standing (neutral). Frame 2: right leg forward, left arm forward. Frame 3: standing again (passing position). Frame 4: left leg forward, right arm forward. Four frames work because they capture the two key poses (stride left, stride right) plus two transition frames.",
            answerRu: "Кадр 1: стоит (нейтральная поза). Кадр 2: правая нога впереди, левая рука впереди. Кадр 3: снова стоит (позиция прохождения). Кадр 4: левая нога впереди, правая рука впереди. Четырёх кадров достаточно, потому что они фиксируют две ключевые позы (шаг левой ногой, шаг правой ногой) плюс два переходных кадра.",
            answerKk: "1-кадр: тік тұрған қалып (бейтарап). 2-кадр: оң аяқ алда, сол қол алда. 3-кадр: қайта тік тұрған қалып (өту позициясы). 4-кадр: сол аяқ алда, оң қол алда. Төрт кадр жеткілікті, себебі олар екі негізгі позаны (сол аяқпен қадам, оң аяқпен қадам) және екі өтпелі кадрды қамтиды.",
            xp: 20
          }
        ]
      },
      {
        title: "Photo Editing",
        titleRu: "Редактирование фотографий",
        titleKk: "Фотосуретті өңдеу",
        content: "Photo editing transforms raw photographs into polished images through adjustments and corrections. Key techniques include cropping to improve composition, adjusting brightness and contrast to fix exposure, and applying filters for mood. Non-destructive editing means making changes without permanently altering the original image, typically through adjustment layers. Free tools like GIMP and Photopea offer professional-level editing capabilities.",
        contentRu: "Редактирование фотографий превращает необработанные снимки в отточенные изображения через корректировки и исправления. Ключевые техники включают кадрирование для улучшения композиции, настройку яркости и контраста для исправления экспозиции и применение фильтров для настроения. Недеструктивное редактирование означает внесение изменений без постоянного изменения оригинала, обычно через корректирующие слои. Бесплатные инструменты, такие как GIMP и Photopea, предлагают возможности редактирования профессионального уровня.",
        contentKk: "Фотосуретті өңдеу шикі фотосуреттерді түзетулер мен реттеулер арқылы жылтыратылған кескіндерге айналдырады. Негізгі техникаларға композицияны жақсарту үшін қию, экспозицияны түзету үшін жарықтық пен контрастты реттеу және көңіл-күй үшін сүзгілерді қолдану кіреді. Бұзбайтын өңдеу түпнұсқа кескінді тұрақты өзгертпей өзгерістер енгізуді білдіреді, әдетте реттеу қабаттары арқылы. GIMP және Photopea сияқты тегін құралдар кәсіби деңгейдегі өңдеу мүмкіндіктерін ұсынады.",
        keyFormulas: [
          {
            formula: "Rule of Thirds: divide frame into 3×3 grid, place subjects on intersections",
            formulaRu: "Правило третей: разделите кадр на сетку 3×3, размещайте объекты на пересечениях",
            formulaKk: "Үштік ереже: кадрды 3×3 торға бөліп, нысандарды қиылысу нүктелеріне орналастырыңыз",
            description: "Composition guideline for visually appealing photo crops",
            descriptionRu: "Правило композиции для визуально привлекательного кадрирования",
            descriptionKk: "Визуалды тартымды фотосурет қию үшін композиция нұсқаулығы"
          }
        ],
        solvedExamples: [
          {
            question: "A photo looks washed out with low contrast. What photo editing steps would you take to fix it?",
            questionRu: "Фотография выглядит блёклой с низким контрастом. Какие шаги редактирования вы предпримете?",
            questionKk: "Фотосурет төмен контрастпен бозарып көрінеді. Оны түзету үшін қандай өңдеу қадамдарын жасайсыз?",
            steps: [
              { en: "First increase contrast by 20-30% to separate light and dark areas. Then adjust the levels or curves to set proper black and white points.", ru: "Сначала увеличьте контраст на 20-30%, чтобы разделить светлые и тёмные области. Затем настройте уровни или кривые для установки правильных точек чёрного и белого.", kk: "Алдымен жарық және қараңғы аймақтарды бөлу үшін контрастты 20-30%-ға арттырыңыз. Содан кейін дұрыс қара және ақ нүктелерді орнату үшін деңгейлерді немесе қисықтарды реттеңіз." },
              { en: "Increase saturation slightly (10-15%) to restore color vibrancy. Apply sharpening as the final step to enhance details.", ru: "Немного увеличьте насыщенность (10-15%) для восстановления яркости цветов. Примените повышение резкости как последний шаг для улучшения деталей.", kk: "Түс жарқындығын қалпына келтіру үшін қанықтықты сәл (10-15%) арттырыңыз. Бөлшектерді жақсарту үшін соңғы қадам ретінде айқындауды қолданыңыз." }
            ],
            answer: "Increase contrast 20-30%, set proper black/white points via levels, boost saturation 10-15%, and apply sharpening last.",
            answerRu: "Увеличьте контраст на 20-30%, задайте правильные точки чёрного и белого с помощью уровней, повысьте насыщенность на 10-15% и в конце примените повышение резкости.",
            answerKk: "Контрастты 20-30%-ға арттырыңыз, деңгейлер арқылы дұрыс қара/ақ нүктелерін орнатыңыз, қанықтықты 10-15%-ға көтеріңіз және соңында айқындауды қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does 'non-destructive editing' mean?",
            questionRu: "Что означает 'недеструктивное редактирование'?",
            questionKk: "'Бұзбайтын өңдеу' не дегенді білдіреді?",
            answer: "Making changes without permanently altering the original image, so you can always undo or modify adjustments.",
            answerRu: "Внесение изменений без постоянного изменения исходного изображения, чтобы всегда можно было отменить или скорректировать правки.",
            answerKk: "Түпнұсқа кескінді тұрақты өзгертпей өзгерістер енгізу — осылайша реттеулерді әрқашан болдырмауға немесе өзгертуге болады.",
            hint: "Think about editing that preserves the original file.",
            hintRu: "Подумайте о редактировании, которое сохраняет оригинальный файл.",
            hintKk: "Түпнұсқа файлды сақтайтын өңдеу туралы ойланыңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You need to crop a landscape photo into a square for Instagram. Using the rule of thirds, where should you position the horizon line?",
            questionRu: "Вам нужно обрезать пейзажную фотографию в квадрат для Instagram. По правилу третей, где должна располагаться линия горизонта?",
            questionKk: "Instagram үшін пейзаждық фотосуретті шаршыға қиюыңыз керек. Үштен бір ережесі бойынша, көкжиек сызығын қайда орналастыру керек?",
            answer: "Place the horizon on the upper or lower third line (1/3 or 2/3 from top), not in the center. If the sky is interesting, give it 2/3; if the ground is, give it 2/3.",
            answerRu: "Разместите горизонт на верхней или нижней линии третей (1/3 или 2/3 от верха), а не по центру. Если небо интересное — отдайте ему 2/3; если интересна земля — отдайте ей 2/3.",
            answerKk: "Көкжиек сызығын ортаға емес, жоғарғы немесе төменгі үштен бір сызығына (жоғарыдан 1/3 немесе 2/3) орналастырыңыз. Аспан қызықты болса, оған 2/3 беріңіз; жер қызықты болса, оған 2/3 беріңіз.",
            hint: "Divide the square into 3 equal horizontal bands.",
            hintRu: "Разделите квадрат на 3 равные горизонтальные полосы.",
            hintKk: "Шаршыны 3 тең көлденең жолаққа бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A portrait has harsh shadows on one side of the face. Describe two different photo editing techniques to fix this without making it look fake.",
            questionRu: "На портрете есть резкие тени на одной стороне лица. Опишите два разных метода редактирования для исправления этого без создания ненатурального вида.",
            questionKk: "Портретте беттің бір жағында қатты көлеңкелер бар. Жалған көрінбей оны түзетудің екі түрлі өңдеу техникасын сипаттаңыз.",
            answer: "1) Use dodge tool at low opacity (10-15%) to gradually lighten shadow areas while preserving texture. 2) Use a curves adjustment layer with a mask that only affects the shadow side, lifting the midtones gently.",
            answerRu: "1) Используйте инструмент осветления с низкой непрозрачностью (10-15%), чтобы постепенно высветлить теневые области, сохраняя текстуру. 2) Примените корректирующий слой кривых с маской, которая действует только на теневую сторону, мягко поднимая средние тона.",
            answerKk: "1) Текстураны сақтай отырып, көлеңкелі аймақтарды біртіндеп жарықтандыру үшін төмен мөлдірсіздіктегі (10-15%) жарықтандыру құралын қолданыңыз. 2) Тек көлеңке жағына әсер ететін маскасы бар қисықтар реттеу қабатын қолданып, ортаңғы реңктерді жұмсақ көтеріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Canva & Tools",
        titleRu: "Canva и инструменты",
        titleKk: "Canva және құралдар",
        content: "Canva is a free online design tool that provides templates, stock images, and drag-and-drop editing for creating professional-looking designs quickly. It is ideal for beginners who want to make posters, social media posts, presentations, and more without advanced design skills. Understanding templates, grids, and design elements lets you customize pre-made layouts effectively. Other beginner-friendly tools include Figma for collaborative design and Photopea for advanced photo editing.",
        contentRu: "Canva — это бесплатный онлайн-инструмент для дизайна, предоставляющий шаблоны, стоковые изображения и редактирование перетаскиванием для быстрого создания профессиональных дизайнов. Он идеален для начинающих, которые хотят создавать плакаты, посты для соцсетей, презентации и многое другое без продвинутых навыков дизайна. Понимание шаблонов, сеток и элементов дизайна позволяет эффективно настраивать готовые макеты. Другие удобные для начинающих инструменты включают Figma для совместного дизайна и Photopea для продвинутого редактирования фотографий.",
        contentKk: "Canva — кәсіби көрінетін дизайндарды тез жасау үшін шаблондар, стоктық кескіндер және сүйреп апару арқылы өңдеуді ұсынатын тегін онлайн дизайн құралы. Ол жетілдірілген дизайн дағдыларынсыз постерлер, әлеуметтік желі жазбалары, презентациялар және т.б. жасағысы келетін жаңадан бастаушылар үшін тамаша. Шаблондарды, торларды және дизайн элементтерін түсіну дайын макеттерді тиімді баптауға мүмкіндік береді. Басқа жаңадан бастаушыларға ыңғайлы құралдарға бірлескен дизайн үшін Figma және жетілдірілген фотосурет өңдеу үшін Photopea кіреді.",
        keyFormulas: [
          {
            formula: "Social media sizes: Instagram 1080×1080, Story 1080×1920, YouTube thumbnail 1280×720",
            formulaRu: "Размеры для соцсетей: Instagram 1080×1080, Сторис 1080×1920, превью YouTube 1280×720",
            formulaKk: "Әлеуметтік желі өлшемдері: Instagram 1080×1080, Стори 1080×1920, YouTube мұқабасы 1280×720",
            description: "Standard canvas dimensions for common social media platforms",
            descriptionRu: "Стандартные размеры холста для популярных социальных сетей",
            descriptionKk: "Танымал әлеуметтік желілер үшін стандартты кенеп өлшемдері"
          }
        ],
        solvedExamples: [
          {
            question: "You need to create an Instagram post and a matching story using Canva. How do you maintain visual consistency between both?",
            questionRu: "Вам нужно создать пост для Instagram и подходящую сторис в Canva. Как обеспечить визуальную согласованность?",
            questionKk: "Canva-да Instagram жазбасы мен сәйкес сторис жасауыңыз керек. Екеуінің арасында визуалды сәйкестікті қалай қамтамасыз етесіз?",
            steps: [
              { en: "Start with the post (1080×1080). Choose a color scheme, font pair, and imagery style. Save these choices as your design system.", ru: "Начните с поста (1080×1080). Выберите цветовую схему, пару шрифтов и стиль изображений. Сохраните эти выборы как вашу систему дизайна.", kk: "Жазбадан бастаңыз (1080×1080). Түс схемасын, қаріп жұбын және кескін стилін таңдаңыз. Бұл таңдауларды дизайн жүйеңіз ретінде сақтаңыз." },
              { en: "Duplicate key design elements (colors, fonts, logos) into the story template (1080×1920). Adjust the layout for the vertical format while keeping the same visual identity.", ru: "Скопируйте ключевые элементы дизайна (цвета, шрифты, логотипы) в шаблон сторис (1080×1920). Адаптируйте макет под вертикальный формат, сохраняя визуальную идентичность.", kk: "Негізгі дизайн элементтерін (түстер, қаріптер, логотиптер) сторис шаблонына (1080×1920) көшіріңіз. Визуалды бірегейлікті сақтай отырып, тік формат үшін макетті реттеңіз." }
            ],
            answer: "Use identical colors, fonts, and imagery style across both formats. Start with the post design, then adapt it to story dimensions while keeping the same visual DNA.",
            answerRu: "Используйте одинаковые цвета, шрифты и стиль изображений в обоих форматах. Начните с дизайна поста, затем адаптируйте его к размерам сторис, сохраняя ту же визуальную ДНК.",
            answerKk: "Екі форматта да бірдей түстерді, қаріптерді және кескін стилін қолданыңыз. Жазба дизайнынан бастаңыз, содан кейін бірдей визуалды ДНК-ны сақтай отырып, оны сторис өлшемдеріне бейімдеңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the pixel dimensions for a standard Instagram square post?",
            questionRu: "Каковы размеры в пикселях стандартного квадратного поста в Instagram?",
            questionKk: "Стандартты Instagram шаршы жазбасының пиксельдік өлшемдері қандай?",
            answer: "1080 × 1080 pixels",
            answerRu: "1080 × 1080 пикселей",
            answerKk: "1080 × 1080 пиксель",
            hint: "Instagram squares are equal width and height, over 1000 pixels.",
            hintRu: "Квадраты Instagram имеют одинаковую ширину и высоту, больше 1000 пикселей.",
            hintKk: "Instagram шаршылары бірдей ен мен биіктікке ие, 1000 пиксельден жоғары.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are designing a poster in Canva but the text is hard to read over a busy background image. Name two techniques to fix this.",
            questionRu: "Вы создаёте плакат в Canva, но текст плохо читается на загруженном фоновом изображении. Назовите два способа это исправить.",
            questionKk: "Canva-да постер жасап жатырсыз, бірақ мәтін лас фондық кескін үстінде оқуға қиын. Мұны түзетудің екі тәсілін атаңыз.",
            answer: "1) Add a semi-transparent overlay (dark or light rectangle) behind the text. 2) Apply a blur effect to the background area behind the text.",
            answerRu: "1) Добавьте полупрозрачный оверлей (тёмный или светлый прямоугольник) позади текста. 2) Примените эффект размытия к области фона за текстом.",
            answerKk: "1) Мәтіннің артына жартылай мөлдір қабат (қараңғы немесе ашық төртбұрыш) қосыңыз. 2) Мәтін артындағы фон аймағына бұлдырату әсерін қолданыңыз.",
            hint: "Think about ways to increase contrast between text and background.",
            hintRu: "Подумайте о способах увеличения контраста между текстом и фоном.",
            hintKk: "Мәтін мен фон арасындағы контрастты арттыру жолдарын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare Canva, Figma, and Photopea. For each tool, name its primary strength and one task where a different tool would be better.",
            questionRu: "Сравните Canva, Figma и Photopea. Для каждого инструмента назовите его главное преимущество и одну задачу, где другой инструмент был бы лучше.",
            questionKk: "Canva, Figma және Photopea салыстырыңыз. Әр құрал үшін оның негізгі күшті жағын және басқа құрал жақсырақ болатын бір тапсырманы атаңыз.",
            answer: "Canva: strength is quick templates for social media; weak at detailed photo retouching (use Photopea). Figma: strength is collaborative UI/UX design; weak at photo editing (use Photopea). Photopea: strength is advanced pixel editing like Photoshop; weak at quick template-based layouts (use Canva).",
            answerRu: "Canva: сильная сторона — быстрые шаблоны для соцсетей; слаба в детальной ретуши фото (используйте Photopea). Figma: сильная сторона — совместный дизайн UI/UX; слаба в редактировании фото (используйте Photopea). Photopea: сильная сторона — продвинутое пиксельное редактирование как в Photoshop; слаба в быстрых шаблонных макетах (используйте Canva).",
            answerKk: "Canva: күшті жағы — әлеуметтік желілерге арналған жылдам шаблондар; фотосуретті егжей-тегжейлі ретуштауға әлсіз (Photopea қолданыңыз). Figma: күшті жағы — бірлескен UI/UX дизайны; фотосуретті өңдеуге әлсіз (Photopea қолданыңыз). Photopea: күшті жағы — Photoshop сияқты жетілдірілген пиксельдік өңдеу; жылдам шаблондық макеттер жасауға әлсіз (Canva қолданыңыз).",
            xp: 20
          }
        ]
      },
      {
        title: "Typography Intro",
        titleRu: "Введение в типографику",
        titleKk: "Типографикаға кіріспе",
        content: "Typography is the art of arranging text to make it readable, legible, and visually appealing. Fonts fall into categories: serif fonts (like Times New Roman) have small strokes at letter ends and feel traditional, while sans-serif fonts (like Arial) are clean and modern. Choosing the right font pairing — one for headings and one for body text — is a foundational design skill. Good typography uses hierarchy through size, weight, and spacing to guide the reader's eye.",
        contentRu: "Типографика — это искусство расположения текста для обеспечения читаемости, разборчивости и визуальной привлекательности. Шрифты делятся на категории: шрифты с засечками (как Times New Roman) имеют небольшие штрихи на концах букв и выглядят традиционно, а шрифты без засечек (как Arial) — чистые и современные. Выбор правильной пары шрифтов — одного для заголовков и одного для основного текста — это базовый навык дизайна. Хорошая типографика использует иерархию через размер, толщину и интервал, чтобы направлять взгляд читателя.",
        contentKk: "Типографика — мәтінді оқылатын, түсінікті және визуалды тартымды ету үшін орналастыру өнері. Қаріптер санаттарға бөлінеді: serif қаріптерінде (Times New Roman сияқты) әріп ұштарында кішкентай штрихтар бар және дәстүрлі көрінеді, ал sans-serif қаріптері (Arial сияқты) таза және заманауи. Дұрыс қаріп жұбын таңдау — бірі тақырыптар, бірі негізгі мәтін үшін — дизайнның іргелі дағдысы. Жақсы типографика оқырманның көзін бағыттау үшін өлшем, қалыңдық және аралық арқылы иерархияны қолданады.",
        keyFormulas: [
          {
            formula: "Body text: 16-18px, Line height: 1.4-1.6× font size",
            formulaRu: "Основной текст: 16-18px, Межстрочный интервал: 1.4-1.6× размера шрифта",
            formulaKk: "Негізгі мәтін: 16-18px, Жол аралығы: қаріп өлшемінің 1.4-1.6×",
            description: "Optimal reading sizes for screen text",
            descriptionRu: "Оптимальные размеры для чтения текста с экрана",
            descriptionKk: "Экрандағы мәтінді оқу үшін оңтайлы өлшемдер"
          },
          {
            formula: "Heading: 2-3× body size; Subheading: 1.25-1.5× body size",
            formulaRu: "Заголовок: 2-3× от основного текста; Подзаголовок: 1.25-1.5× от основного текста",
            formulaKk: "Тақырып: негізгі мәтіннің 2-3×; Кіші тақырып: негізгі мәтіннің 1.25-1.5×",
            description: "Size ratios for creating clear typographic hierarchy",
            descriptionRu: "Пропорции размеров для создания чёткой типографической иерархии",
            descriptionKk: "Анық типографиялық иерархия жасау үшін өлшем пропорциялары"
          }
        ],
        solvedExamples: [
          {
            question: "You are creating a school newsletter. The body text is 16px. What sizes should you use for the main title and section headings?",
            questionRu: "Вы создаёте школьную газету. Основной текст — 16px. Какие размеры использовать для главного заголовка и подзаголовков разделов?",
            questionKk: "Мектеп газетін жасап жатырсыз. Негізгі мәтін 16px. Басты тақырып пен бөлім тақырыптары үшін қандай өлшемдер қолданасыз?",
            steps: [
              { en: "Main title should be 2-3× body size: 16px × 2.5 = 40px for the main headline.", ru: "Главный заголовок должен быть в 2-3 раза больше основного текста: 16px × 2,5 = 40px.", kk: "Басты тақырып негізгі мәтіннен 2-3 есе үлкен болуы керек: 16px × 2,5 = 40px." },
              { en: "Section headings should be 1.25-1.5× body size: 16px × 1.5 = 24px for subheadings.", ru: "Подзаголовки разделов — 1,25-1,5× от основного текста: 16px × 1,5 = 24px.", kk: "Бөлім тақырыптары негізгі мәтіннен 1,25-1,5 есе: 16px × 1,5 = 24px." }
            ],
            answer: "Main title: ~40px (2.5× body), section headings: ~24px (1.5× body), body text: 16px.",
            answerRu: "Главный заголовок: ~40px (2.5× от основного текста), подзаголовки разделов: ~24px (1.5×), основной текст: 16px.",
            answerKk: "Басты тақырып: ~40px (негізгі мәтіннен 2.5×), бөлім тақырыптары: ~24px (1.5×), негізгі мәтін: 16px."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between a serif and a sans-serif font?",
            questionRu: "В чём разница между шрифтом с засечками и без засечек?",
            questionKk: "Serif және sans-serif қаріптерінің айырмашылығы неде?",
            answer: "Serif fonts have small decorative strokes (serifs) at the ends of letters; sans-serif fonts do not have these strokes and look cleaner.",
            answerRu: "У шрифтов с засечками на концах букв есть небольшие декоративные штрихи (засечки); у шрифтов без засечек этих штрихов нет, и они выглядят чище.",
            answerKk: "Serif қаріптерінде әріптердің ұштарында кішкентай әрлеу штрихтары (засечкалар) болады; sans-serif қаріптерінде бұл штрихтар жоқ және олар анағұрлым таза көрінеді.",
            hint: "'Sans' means 'without' in French.",
            hintRu: "'Sans' означает 'без' на французском.",
            hintKk: "'Sans' француз тілінде 'без' (жоқ) дегенді білдіреді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "If your body text is 18px, what is the ideal line height range in pixels?",
            questionRu: "Если ваш основной текст 18px, каков идеальный диапазон межстрочного интервала в пикселях?",
            questionKk: "Негізгі мәтініңіз 18px болса, пиксельдегі жол биіктігінің идеалды ауқымы қандай?",
            answer: "25.2px to 28.8px (18 × 1.4 = 25.2, 18 × 1.6 = 28.8)",
            answerRu: "От 25.2px до 28.8px (18 × 1.4 = 25.2, 18 × 1.6 = 28.8)",
            answerKk: "25.2px-тан 28.8px-ке дейін (18 × 1.4 = 25.2, 18 × 1.6 = 28.8)",
            hint: "Multiply font size by the recommended line-height multiplier range (1.4-1.6).",
            hintRu: "Умножьте размер шрифта на рекомендуемый множитель (1,4-1,6).",
            hintKk: "Қаріп өлшемін ұсынылған көбейткіш ауқымына (1,4-1,6) көбейтіңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are pairing fonts for a tech startup website. Suggest a heading and body font pair, and explain why they work together.",
            questionRu: "Вы подбираете шрифты для сайта технологического стартапа. Предложите пару шрифтов для заголовка и текста и объясните, почему они сочетаются.",
            questionKk: "Технологиялық стартап вебсайты үшін қаріптерді жұптап жатырсыз. Тақырып пен мәтін қаріп жұбын ұсыныңыз және олардың неліктен үйлесетінін түсіндіріңіз.",
            answer: "Heading: Poppins (geometric sans-serif, bold, modern). Body: Inter (humanist sans-serif, highly readable). They work because both are sans-serif (consistent modern feel) but have different personalities — Poppins is geometric and attention-grabbing while Inter is neutral and easy to read in long paragraphs.",
            answerRu: "Заголовки: Poppins (геометрический гротеск, жирный, современный). Основной текст: Inter (гуманистический гротеск, высокая читаемость). Они сочетаются, потому что оба без засечек (единый современный стиль), но с разными характерами: Poppins геометричный и привлекающий внимание, а Inter нейтральный и легко читается в длинных абзацах.",
            answerKk: "Тақырып: Poppins (геометриялық sans-serif, қалың, заманауи). Мәтін: Inter (гуманистік sans-serif, өте жақсы оқылады). Олар үйлеседі, себебі екеуі де sans-serif (тұтас заманауи сезім), бірақ сипаттары әртүрлі — Poppins геометриялық әрі назар аударарлық, ал Inter бейтарап және ұзақ абзацтарда оқуға оңай.",
            xp: 20
          }
        ]
      },
      {
        title: "Animations",
        titleRu: "Анимации",
        titleKk: "Анимациялар",
        content: "Animation brings static designs to life by creating the illusion of movement through a sequence of frames. Frame rate (FPS) determines smoothness — 12 FPS is standard for simple web animations, while 24 FPS is cinematic. The two main principles beginners should master are timing (how long an action takes) and easing (acceleration and deceleration of movement). CSS animations and tools like LottieFiles make adding motion to web projects accessible.",
        contentRu: "Анимация оживляет статичные дизайны, создавая иллюзию движения через последовательность кадров. Частота кадров (FPS) определяет плавность — 12 FPS стандартны для простых веб-анимаций, а 24 FPS — для кинематографического качества. Два главных принципа для начинающих: тайминг (длительность действия) и ослабление (ускорение и замедление движения). CSS-анимации и инструменты вроде LottieFiles делают добавление движения в веб-проекты доступным.",
        contentKk: "Анимация кадрлар тізбегі арқылы қозғалыс иллюзиясын жасай отырып, статикалық дизайндарды жандандырады. Кадр жиілігі (FPS) тегістікті анықтайды — 12 FPS қарапайым веб-анимациялар үшін стандартты, ал 24 FPS кинематографиялық сапа. Жаңадан бастаушылар меңгеруі керек екі негізгі қағида: уақыт (әрекеттің қанша уақыт алатыны) және жеңілдету (қозғалыстың жеделдеуі мен баяулауы). CSS анимациялары мен LottieFiles сияқты құралдар веб-жобаларға қозғалыс қосуды қолжетімді етеді.",
        keyFormulas: [
          {
            formula: "Total frames = Duration (seconds) × FPS",
            formulaRu: "Общее количество кадров = Длительность (в секундах) × FPS",
            formulaKk: "Жалпы кадр саны = Ұзақтық (секунд) × FPS",
            description: "Calculate how many frames are needed for an animation",
            descriptionRu: "Вычислите, сколько кадров нужно для анимации",
            descriptionKk: "Анимация үшін қанша кадр қажет екенін есептеңіз"
          }
        ],
        solvedExamples: [
          {
            question: "You want a loading spinner animation that completes one full rotation in 2 seconds at 12 FPS. How many frames do you need to draw?",
            questionRu: "Вы хотите анимацию спиннера загрузки, который совершает полный оборот за 2 секунды при 12 FPS. Сколько кадров нужно нарисовать?",
            questionKk: "12 FPS жиілікте 2 секундта бір толық айналымды аяқтайтын жүктеу спиннер анимациясын жасағыңыз келеді. Қанша кадр салу керек?",
            steps: [
              { en: "Apply the formula: Total frames = Duration × FPS = 2 × 12 = 24 frames.", ru: "Примените формулу: Общее количество кадров = Длительность × FPS = 2 × 12 = 24 кадра.", kk: "Формуланы қолданыңыз: Жалпы кадрлар = Ұзақтық × FPS = 2 × 12 = 24 кадр." },
              { en: "Each frame shows the spinner rotated 360°÷24 = 15° from the previous frame, creating smooth motion.", ru: "Каждый кадр показывает спиннер, повёрнутый на 360°÷24 = 15° от предыдущего кадра, создавая плавное движение.", kk: "Әр кадр спиннерді алдыңғы кадрдан 360°÷24 = 15° бұрылған күйде көрсетеді, тегіс қозғалыс жасайды." }
            ],
            answer: "24 frames, each rotated 15° from the previous one.",
            answerRu: "24 кадра, каждый повёрнут на 15° относительно предыдущего.",
            answerKk: "24 кадр, әрқайсысы алдыңғысынан 15° бұрылған."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many frames are in a 1-second animation at 12 FPS?",
            questionRu: "Сколько кадров в 1-секундной анимации при 12 FPS?",
            questionKk: "12 FPS жиілікте 1 секундтық анимацияда қанша кадр бар?",
            answer: "12 frames",
            answerRu: "12 кадров",
            answerKk: "12 кадр",
            hint: "FPS literally means frames per second.",
            hintRu: "FPS буквально означает кадры в секунду.",
            hintKk: "FPS сөзбе-сөз секундына кадрлар дегенді білдіреді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A bouncing ball animation needs to feel natural. Should the ball move at constant speed, or should it slow down at the top and speed up at the bottom? Why?",
            questionRu: "Анимация прыгающего мяча должна выглядеть естественно. Мяч должен двигаться с постоянной скоростью или замедляться наверху и ускоряться внизу? Почему?",
            questionKk: "Секіретін доп анимациясы табиғи көрінуі керек. Доп тұрақты жылдамдықпен қозғалуы керек пе, әлде жоғарыда баяулап, төменде жылдамдауы керек пе? Неліктен?",
            answer: "It should slow down at the top and speed up at the bottom. This mimics real gravity — the ball decelerates going up and accelerates coming down (ease-out on rise, ease-in on fall).",
            answerRu: "Он должен замедляться наверху и ускоряться внизу. Это имитирует реальную гравитацию — мяч замедляется при подъёме и ускоряется при падении (ease-out на подъёме, ease-in на падении).",
            answerKk: "Доп жоғарыда баяулап, төменде жылдамдауы керек. Бұл нақты ауырлық күшін еліктейді — доп жоғары көтерілгенде баяулайды, төмен түскенде жылдамдайды (көтерілуде ease-out, түсуде ease-in).",
            hint: "Think about how gravity affects real objects.",
            hintRu: "Подумайте, как гравитация влияет на реальные объекты.",
            hintKk: "Ауырлық күші нақты заттарға қалай әсер ететінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You have a 3-second animation at 24 FPS but the file size is too large. Suggest two ways to reduce file size without making the animation look choppy.",
            questionRu: "У вас 3-секундная анимация при 24 FPS, но файл слишком большой. Предложите два способа уменьшить размер без потери плавности.",
            questionKk: "Сізде 24 FPS жиілікте 3 секундтық анимация бар, бірақ файл өлшемі тым үлкен. Анимация тегіс көрінуін сақтай отырып, файл өлшемін азайтудың екі жолын ұсыныңыз.",
            answer: "1) Reduce color palette — fewer unique colors means smaller file sizes per frame. 2) Use motion tweening instead of frame-by-frame — define keyframes and let software interpolate between them, reducing total stored frames.",
            answerRu: "1) Сократите палитру цветов — меньше уникальных цветов означает меньший размер файла на каждый кадр. 2) Используйте твининг движения вместо покадровой анимации — задайте ключевые кадры и позвольте программе интерполировать между ними, уменьшая общее число сохраняемых кадров.",
            answerKk: "1) Түс палитрасын қысқартыңыз — бірегей түстер неғұрлым аз болса, әр кадрдың файл өлшемі соғұрлым кіші болады. 2) Кадрлап анимациялау орнына қозғалыс твинингін қолданыңыз — негізгі кадрларды анықтап, олардың арасын бағдарламаға интерполяциялатыңыз, сөйтіп сақталатын жалпы кадр санын азайтыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Composition",
        titleRu: "Композиция",
        titleKk: "Композиция",
        content: "Composition is how visual elements are arranged within a frame to create a balanced and engaging design. The rule of thirds places key subjects at grid intersections for natural balance. Visual weight refers to how much attention an element attracts — large, bright, or high-contrast elements have more weight. Leading lines guide the viewer's eye through the design toward the focal point.",
        contentRu: "Композиция — это расположение визуальных элементов в кадре для создания сбалансированного и привлекательного дизайна. Правило третей размещает ключевые объекты на пересечениях сетки для естественного баланса. Визуальный вес определяет, сколько внимания привлекает элемент — крупные, яркие или контрастные элементы имеют больший вес. Направляющие линии ведут взгляд зрителя через дизайн к фокусной точке.",
        contentKk: "Композиция — теңдестірілген және тартымды дизайн жасау үшін визуалды элементтердің кадр ішінде қалай орналасатыны. Үштен бір ережесі табиғи тепе-теңдік үшін негізгі субъектілерді тор қиылыстарына орналастырады. Визуалды салмақ элементтің қанша назар аударатынын білдіреді — үлкен, жарқын немесе жоғары контрастты элементтер көбірек салмаққа ие. Бағыттаушы сызықтар көрерменнің көзін дизайн арқылы фокус нүктесіне бағыттайды.",
        keyFormulas: [
          {
            formula: "Rule of Thirds: 3×3 grid, place subjects at intersection points",
            formulaRu: "Правило третей: сетка 3×3, размещайте объекты в точках пересечения",
            formulaKk: "Үштік ереже: 3×3 тор, нысандарды қиылысу нүктелеріне орналастырыңыз",
            description: "Core composition technique for balanced layouts",
            descriptionRu: "Основная техника композиции для сбалансированных макетов",
            descriptionKk: "Теңдестірілген макеттер үшін негізгі композиция техникасы"
          },
          {
            formula: "Visual hierarchy: Size > Color > Contrast > Position",
            formulaRu: "Визуальная иерархия: Размер > Цвет > Контраст > Положение",
            formulaKk: "Көрнекілік иерархиясы: Өлшем > Түс > Контраст > Орналасу",
            description: "Order of factors that draw the eye from most to least impactful",
            descriptionRu: "Порядок факторов, привлекающих внимание, от наиболее до наименее влиятельного",
            descriptionKk: "Көзді тартатын факторлардың ең әсерлісінен ең аз әсерліге дейінгі реті"
          }
        ],
        solvedExamples: [
          {
            question: "You are designing a website hero banner. The call-to-action button is getting ignored by users. How do you use composition to fix this?",
            questionRu: "Вы создаёте героический баннер для сайта. Кнопка призыва к действию игнорируется пользователями. Как использовать композицию для исправления?",
            questionKk: "Вебсайт баннерін жасап жатырсыз. Әрекетке шақыру түймесін пайдаланушылар елемейді. Мұны түзету үшін композицияны қалай қолданасыз?",
            steps: [
              { en: "Apply visual hierarchy: make the button larger and use a contrasting color that stands out from the background.", ru: "Примените визуальную иерархию: сделайте кнопку крупнее и используйте контрастный цвет, выделяющийся на фоне.", kk: "Визуалды иерархияны қолданыңыз: түймені үлкенірек жасаңыз және фоннан ерекшеленетін контрастты түс қолданыңыз." },
              { en: "Position the button at a rule-of-thirds intersection point and use leading lines (like arrows or the direction people in images are looking) to point toward it.", ru: "Разместите кнопку на пересечении линий по правилу третей и используйте направляющие линии (стрелки или направление взгляда людей на изображениях), указывающие на неё.", kk: "Түймені үштен бір ережесінің қиылысу нүктесіне орналастырыңыз және оған бағыттайтын бағыттаушы сызықтарды (жебелер немесе кескіндердегі адамдардың қарау бағыты) қолданыңыз." }
            ],
            answer: "Increase the button's size and color contrast, place it at a thirds-grid intersection, and use leading lines to direct attention to it.",
            answerRu: "Увеличьте размер кнопки и цветовой контраст, разместите её на пересечении линий сетки третей и используйте направляющие линии, чтобы направить к ней внимание.",
            answerKk: "Түйменің өлшемін және түс контрастын арттырыңыз, оны үштен бір торының қиылысу нүктесіне орналастырыңыз және назарды соған бағыттау үшін бағыттаушы сызықтарды қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many intersection points does a rule-of-thirds grid create?",
            questionRu: "Сколько точек пересечения создаёт сетка по правилу третей?",
            questionKk: "Үштен бір ережесі торы қанша қиылысу нүктесін жасайды?",
            answer: "4 intersection points",
            answerRu: "4 точки пересечения",
            answerKk: "4 қиылысу нүктесі",
            hint: "A 3×3 grid has 2 vertical and 2 horizontal lines.",
            hintRu: "Сетка 3×3 имеет 2 вертикальных и 2 горизонтальных линии.",
            hintKk: "3×3 тор 2 тік және 2 көлденең сызықтан тұрады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "In a poster, a small bright-red circle sits next to a large muted-gray rectangle. Which element has more visual weight and why?",
            questionRu: "На плакате маленький ярко-красный круг находится рядом с большим приглушённо-серым прямоугольником. Какой элемент имеет больший визуальный вес и почему?",
            questionKk: "Постерде кішкентай ашық-қызыл шеңбер үлкен өңсіз-сұр тіктөртбұрыштың қасында тұр. Қай элементтің визуалды салмағы көбірек және неліктен?",
            answer: "It depends on the context, but the red circle likely draws more attention despite its smaller size because bright, saturated colors and high contrast have more visual weight than size alone.",
            answerRu: "Зависит от контекста, но красный круг, скорее всего, привлечёт больше внимания, несмотря на меньший размер, потому что яркие насыщенные цвета и высокий контраст имеют больший визуальный вес, чем сам по себе размер.",
            answerKk: "Контекстке байланысты, бірақ ашық-қызыл шеңбер өлшемі кіші болса да көбірек назар аударады, себебі жарқын, қанық түстер мен жоғары контраст өлшемнен гөрі көбірек визуалды салмаққа ие.",
            hint: "Color and contrast can outweigh size in visual hierarchy.",
            hintRu: "Цвет и контраст могут превышать размер в визуальной иерархии.",
            hintKk: "Визуалды иерархияда түс пен контраст өлшемнен басым болуы мүмкін.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are given a design with five equally-sized elements scattered randomly on a page. Redesign the layout using at least three composition principles to create a clear focal point.",
            questionRu: "Вам дан дизайн с пятью одинаковыми элементами, разбросанными случайно по странице. Переделайте макет, используя минимум три принципа композиции для создания чёткой фокусной точки.",
            questionKk: "Сізге бетте кездейсоқ шашылған бес бірдей өлшемді элементпен дизайн берілді. Анық фокус нүктесін жасау үшін кемінде үш композиция принципін қолданып макетті қайта жасаңыз.",
            answer: "1) Make one element larger (size hierarchy) to serve as the focal point. 2) Place the focal element at a rule-of-thirds intersection. 3) Arrange the other four elements in a line or curve that leads the eye toward the focal element (leading lines). 4) Optionally, give the focal element a distinct color for added contrast.",
            answerRu: "1) Сделайте один элемент крупнее (иерархия размера), чтобы он стал фокусной точкой. 2) Разместите фокусный элемент на пересечении линий по правилу третей. 3) Расположите остальные четыре элемента по линии или кривой, ведущей взгляд к фокусному элементу (направляющие линии). 4) По желанию выделите фокусный элемент отдельным цветом для дополнительного контраста.",
            answerKk: "1) Фокус нүктесі болу үшін бір элементті үлкенірек етіңіз (өлшем иерархиясы). 2) Фокус элементті үштен бір ережесінің қиылысу нүктесіне орналастырыңыз. 3) Қалған төрт элементті көзді фокус элементке бағыттайтын сызық немесе қисық бойымен орналастырыңыз (бағыттаушы сызықтар). 4) Қосымша контраст үшін фокус элементке ерекше түс беруге болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Meme Design",
        titleRu: "Дизайн мемов",
        titleKk: "Мем дизайны",
        content: "Meme design combines humor, cultural awareness, and visual communication into a shareable format. Effective memes use high-contrast bold text (usually Impact font in white with black outline) over a relatable image. The best memes follow a setup-punchline structure where the image provides context and the text delivers the joke. Understanding your audience and current trends is key to creating memes that resonate and spread.",
        contentRu: "Дизайн мемов объединяет юмор, культурную осведомлённость и визуальную коммуникацию в формат для распространения. Эффективные мемы используют контрастный жирный текст (обычно шрифт Impact белым с чёрным контуром) поверх узнаваемого изображения. Лучшие мемы следуют структуре «завязка-развязка», где изображение задаёт контекст, а текст доносит шутку. Понимание аудитории и текущих трендов — ключ к созданию мемов, которые находят отклик и распространяются.",
        contentKk: "Мем дизайны юмор, мәдени хабардарлық және визуалды коммуникацияны бөлісуге болатын форматқа біріктіреді. Тиімді мемдер танымал кескін үстіне жоғары контрастты қалың мәтінді (әдетте ақ түсті қара контурлы Impact қаріпі) қолданады. Ең жақсы мемдер кескін контекстті беретін, мәтін әзілді жеткізетін «дайындық-панчлайн» құрылымын ұстанады. Аудиторияңызды және ағымдағы трендтерді түсіну — жанама тапқан және таралатын мемдер жасаудың кілті.",
        keyFormulas: [
          {
            formula: "Meme structure: Setup (image context) + Punchline (text surprise)",
            formulaRu: "Структура мема: Завязка (контекст изображения) + Панчлайн (текстовый твист)",
            formulaKk: "Мем құрылымы: Кіріспе (сурет контексі) + Панчлайн (мәтіндік тосынсый)",
            description: "The fundamental humor formula for meme creation",
            descriptionRu: "Фундаментальная формула юмора для создания мемов",
            descriptionKk: "Мем жасау үшін юмордың іргелі формуласы"
          }
        ],
        solvedExamples: [
          {
            question: "Create a meme concept about procrastinating on homework. Describe the image choice and text placement.",
            questionRu: "Создайте концепцию мема о прокрастинации при выполнении домашнего задания. Опишите выбор изображения и размещение текста.",
            questionKk: "Үй тапсырмасын кейінге қалдыру туралы мем концепциясын жасаңыз. Кескін таңдауын және мәтін орналасуын сипаттаңыз.",
            steps: [
              { en: "Choose a relatable image: the 'distracted boyfriend' meme template or a 'this is fine' scene. The image should show someone ignoring something obvious.", ru: "Выберите узнаваемое изображение: шаблон мема «отвлечённый парень» или сцена «всё нормально». Изображение должно показывать кого-то, кто игнорирует очевидное.", kk: "Танымал кескінді таңдаңыз: «назарын бұрған жігіт» мем шаблоны немесе «бәрі жақсы» сахнасы. Кескін біреудің анық нәрсені елемейтінін көрсетуі керек." },
              { en: "Place top text as setup: 'My homework due tomorrow.' Bottom text as punchline: 'Me watching my 47th YouTube video.' Use Impact font, white with black outline, centered.", ru: "Верхний текст — завязка: «Моя домашка на завтра.» Нижний текст — развязка: «Я смотрю 47-е видео на YouTube.» Шрифт Impact, белый с чёрным контуром, по центру.", kk: "Жоғарғы мәтін дайындық: «Менің ертеңге тапсырмам.» Төменгі мәтін панчлайн: «Мен 47-ші YouTube бейнемді көріп отырмын.» Impact қаріпі, ақ қара контурмен, ортаға тураланған." }
            ],
            answer: "Use a 'distracted boyfriend' template. Top text: 'My homework due tomorrow.' Bottom text: 'Me watching my 47th YouTube video.' White Impact font with black outline.",
            answerRu: "Используйте шаблон «отвлечённый парень». Верхний текст: «Моя домашка на завтра.» Нижний текст: «Я смотрю 47-е видео на YouTube.» Белый шрифт Impact с чёрным контуром.",
            answerKk: "«Назарын бұрған жігіт» шаблонын қолданыңыз. Жоғарғы мәтін: «Менің ертеңге тапсырмам.» Төменгі мәтін: «Мен 47-ші YouTube бейнемді көріп отырмын.» Қара контурлы ақ Impact қаріпі."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What font is traditionally used in memes, and what color/outline combination?",
            questionRu: "Какой шрифт традиционно используется в мемах, и какое сочетание цвета и контура?",
            questionKk: "Мемдерде дәстүрлі түрде қандай қаріп қолданылады және қандай түс/контур комбинациясы?",
            answer: "Impact font, white text with black outline.",
            answerRu: "Шрифт Impact, белый текст с чёрным контуром.",
            answerKk: "Impact қаріпі, қара контурлы ақ мәтін.",
            hint: "Think about the bold, all-caps text you see on most classic memes.",
            hintRu: "Подумайте о жирном тексте заглавными буквами, который вы видите на большинстве классических мемов.",
            hintKk: "Көптеген классикалық мемдерде көретін қалың, бас әріптегі мәтінді ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why does the setup-punchline structure work better in memes than putting all the joke in the text?",
            questionRu: "Почему структура «завязка-развязка» в мемах работает лучше, чем если поместить всю шутку в текст?",
            questionKk: "Неліктен мемдердегі «дайындық-панчлайн» құрылымы бүкіл әзілді мәтінге қоюдан жақсырақ жұмыс істейді?",
            answer: "The image provides instant visual context (setup) without reading, and the text delivers a surprise twist (punchline). This creates a quick 1-2 punch that is funnier because the brain processes the image before reading the text.",
            answerRu: "Изображение мгновенно задаёт визуальный контекст (завязку) без чтения, а текст преподносит неожиданный поворот (развязку). Это создаёт быстрый «удар 1-2», который оказывается смешнее, потому что мозг обрабатывает изображение раньше, чем читает текст.",
            answerKk: "Кескін оқусыз-ақ лезде визуалды контекст (дайындық) береді, ал мәтін тосын бұрылыс (панчлайн) жеткізеді. Бұл жылдам 1-2 соққы эффектісін тудырады әрі күлкілірек болады, себебі ми мәтінді оқығанша кескінді өңдеп үлгереді.",
            hint: "Think about how humor relies on surprise and timing.",
            hintRu: "Подумайте, как юмор зависит от неожиданности и тайминга.",
            hintKk: "Юмор тосынсоққа және уақытқа қалай тәуелді екенін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You want to create an original meme format (not using an existing template). Describe the image concept, text placement strategy, and explain why it would be shareable.",
            questionRu: "Вы хотите создать оригинальный формат мема (без использования существующего шаблона). Опишите концепцию изображения, стратегию размещения текста и объясните, почему он будет распространяться.",
            questionKk: "Түпнұсқа мем форматын жасағыңыз келеді (бар шаблонды пайдаланбай). Кескін концепциясын, мәтін орналастыру стратегиясын сипаттаңыз және оның неліктен бөлісілетінін түсіндіріңіз.",
            answer: "Example: Photo of two identical doors, one labeled 'Easy way' (looking pristine) and one labeled 'My way' (looking chaotic). Text above: the relatable situation. This works because: 1) It is a universal template that can apply to many situations. 2) The visual metaphor is instantly understandable. 3) People can project their own experiences onto it, making it shareable.",
            answerRu: "Пример: фото двух одинаковых дверей, одна с надписью «Лёгкий путь» (выглядит безупречно), другая с надписью «Мой путь» (выглядит хаотично). Текст сверху: узнаваемая ситуация. Это работает, потому что: 1) это универсальный шаблон, применимый ко многим ситуациям. 2) Визуальная метафора понятна мгновенно. 3) Люди могут проецировать на неё свой опыт, что делает её распространяемой.",
            answerKk: "Мысалы: екі бірдей есіктің фотосуреті, біреуінде «Оңай жол» деген жазу (мінсіз күйде), екіншісінде «Менің жолым» деген жазу (берекесіз күйде). Үстіндегі мәтін: таныс жағдай. Бұл жұмыс істейді, себебі: 1) көптеген жағдайға қолдануға болатын әмбебап шаблон. 2) Визуалды метафора лезде түсінікті. 3) Адамдар өз тәжірибесін оған проекциялай алады, бұл оны бөлісуге ыңғайлы етеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Digital Portfolio",
        titleRu: "Цифровое портфолио",
        titleKk: "Сандық портфолио",
        content: "A digital portfolio is a curated collection of your best creative work, presented online to showcase your skills. Quality over quantity is essential — showing 5-8 strong pieces is better than 20 mediocre ones. Each piece should include a title, brief description of the project, tools used, and what you learned. Platforms like Google Sites, Notion, or Behance let you create free portfolios with professional-looking layouts.",
        contentRu: "Цифровое портфолио — это подборка лучших творческих работ, представленных онлайн для демонстрации навыков. Качество важнее количества — показать 5-8 сильных работ лучше, чем 20 посредственных. Каждая работа должна включать название, краткое описание проекта, использованные инструменты и полученные уроки. Платформы вроде Google Sites, Notion или Behance позволяют создавать бесплатные портфолио с профессиональным видом.",
        contentKk: "Сандық портфолио — дағдыларыңызды көрсету үшін онлайн ұсынылған ең жақсы шығармашылық жұмыстарыңыздың таңдамалы жинағы. Сапа санға қарағанда маңызды — 5-8 күшті жұмысты көрсету 20 орташа жұмыстан жақсы. Әр жұмыс тақырыпты, жобаның қысқаша сипаттамасын, қолданылған құралдарды және не үйренгеніңізді қамтуы керек. Google Sites, Notion немесе Behance сияқты платформалар кәсіби көрінетін макеттермен тегін портфолио жасауға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Portfolio piece = Title + Image + Description + Tools + Lesson learned",
            formulaRu: "Работа для портфолио = Название + Изображение + Описание + Инструменты + Извлечённый урок",
            formulaKk: "Портфолио жұмысы = Атауы + Сурет + Сипаттама + Құралдар + Алынған сабақ",
            description: "The five components every portfolio entry should contain",
            descriptionRu: "Пять компонентов, которые должна содержать каждая запись портфолио",
            descriptionKk: "Әр портфолио жазбасында болуы керек бес компонент"
          }
        ],
        solvedExamples: [
          {
            question: "You have 15 creative works from this semester. How do you select which ones to include in your portfolio?",
            questionRu: "У вас 15 творческих работ за этот семестр. Как выбрать, какие включить в портфолио?",
            questionKk: "Осы семестрде 15 шығармашылық жұмысыңыз бар. Портфолиоға қайсысын қосуды қалай таңдайсыз?",
            steps: [
              { en: "Select works that show variety — pick pieces from different categories (digital art, photo editing, typography, animation) to demonstrate range.", ru: "Выберите работы, показывающие разнообразие — возьмите работы из разных категорий (цифровое искусство, фоторедактирование, типографика, анимация) для демонстрации диапазона.", kk: "Әртүрлілік көрсететін жұмыстарды таңдаңыз — ауқымды көрсету үшін әртүрлі санаттардағы (сандық өнер, фотоөңдеу, типографика, анимация) жұмыстарды алыңыз." },
              { en: "From each category, choose 1-2 pieces where the quality is highest and you can articulate what you learned. Aim for 6-8 total pieces.", ru: "Из каждой категории выберите 1-2 работы с наивысшим качеством, где вы можете сформулировать, что узнали. Стремитесь к 6-8 работам.", kk: "Әр санаттан сапасы ең жоғары және не үйренгеніңізді айта алатын 1-2 жұмыс таңдаңыз. Барлығы 6-8 жұмысқа бағыттаңыз." }
            ],
            answer: "Choose 6-8 pieces showing category variety, prioritizing quality and your ability to explain the creative process and lessons learned.",
            answerRu: "Выберите 6-8 работ, показывающих разнообразие категорий, отдавая приоритет качеству и вашей способности объяснить творческий процесс и полученные уроки.",
            answerKk: "Санаттардың әртүрлілігін көрсететін 6-8 жұмыс таңдаңыз, сапаға және шығармашылық үдеріс пен үйренген сабақтарды түсіндіре алуыңызға басымдық беріңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many portfolio pieces is ideal for a beginner's digital portfolio?",
            questionRu: "Сколько работ идеально для портфолио начинающего?",
            questionKk: "Жаңадан бастаушының сандық портфолиосы үшін қанша жұмыс идеалды?",
            answer: "5-8 pieces",
            answerRu: "5-8 работ",
            answerKk: "5-8 жұмыс",
            hint: "Quality over quantity — not too few, not too many.",
            hintRu: "Качество важнее количества — не слишком мало, не слишком много.",
            hintKk: "Сапа санға қарағанда маңызды — тым аз да, тым көп те емес.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Name three free platforms where you can host a digital portfolio, and describe one advantage of each.",
            questionRu: "Назовите три бесплатные платформы для размещения цифрового портфолио и опишите одно преимущество каждой.",
            questionKk: "Сандық портфолионы орналастыруға болатын үш тегін платформаны атаңыз және әрқайсысының бір артықшылығын сипаттаңыз.",
            answer: "Google Sites: easy drag-and-drop, integrates with Google Drive. Notion: flexible layout with databases and toggles, good for process documentation. Behance: built-in creative community that can discover your work.",
            answerRu: "Google Sites: простое перетаскивание, интеграция с Google Drive. Notion: гибкий макет с базами данных и переключателями, хорошо подходит для документации процесса. Behance: встроенное творческое сообщество, которое может открыть для себя ваши работы.",
            answerKk: "Google Sites: оңай сүйреп апару, Google Drive-пен интеграцияланады. Notion: дерекқорлар мен ауыстырғыштары бар икемді макет, үдеріс құжаттамасына жақсы. Behance: сіздің жұмыстарыңызды таба алатын кіріктірілген шығармашылық қауымдастық.",
            hint: "Think about platforms you already use that allow public pages.",
            hintRu: "Подумайте о платформах, которые вы уже используете и которые позволяют создавать публичные страницы.",
            hintKk: "Жария беттер жасауға мүмкіндік беретін, сіз қазірдің өзінде қолданатын платформаларды ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design the structure for a portfolio page showcasing a single project. Include all sections, their purpose, and approximate layout.",
            questionRu: "Спроектируйте структуру страницы портфолио для одного проекта. Включите все разделы, их назначение и примерный макет.",
            questionKk: "Бір жобаны көрсететін портфолио бетінің құрылымын жобалаңыз. Барлық бөлімдерді, олардың мақсатын және шамамен макетті қосыңыз.",
            answer: "Hero section: large project image spanning full width. Below: project title + one-line summary. Left column: 2-3 process images or before/after shots. Right column: description (challenge, solution, tools), skills demonstrated, and lesson learned. Footer: navigation to previous/next project. This structure tells the story of the project from result to process.",
            answerRu: "Hero-секция: большое изображение проекта на всю ширину. Ниже: название проекта + однострочное резюме. Левая колонка: 2-3 изображения процесса или снимки до/после. Правая колонка: описание (задача, решение, инструменты), продемонстрированные навыки и полученный урок. Футер: навигация к предыдущему/следующему проекту. Эта структура рассказывает историю проекта от результата к процессу.",
            answerKk: "Hero бөлімі: толық енге созылатын жобаның үлкен кескіні. Төменде: жоба тақырыбы + бір жолдық түйін. Сол жақ баған: 2-3 үдеріс кескіні немесе дейін/кейін суреттері. Оң жақ баған: сипаттама (міндет, шешім, құралдар), көрсетілген дағдылар және үйренілген сабақ. Футер: алдыңғы/келесі жобаға навигация. Бұл құрылым жобаның тарихын нәтижеден үдеріске қарай баяндайды.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Digital Creativity_9": {
    planetName: "Digital Creativity",
    introduction: {
      en: "You advance into graphic design — learning principles of logo creation, poster layout, advanced typography, brand colors, and social media graphics. You will also explore infographics, photo manipulation, and how to give and receive design critique.",
      ru: "Вы переходите к графическому дизайну — изучаете принципы создания логотипов, макеты плакатов, продвинутую типографику, фирменные цвета и графику для социальных сетей. Вы также изучите инфографику, фотоманипуляцию и как давать и принимать критику дизайна."
    },
    sections: [
      {
        title: "Graphic Design Principles",
        titleRu: "Принципы графического дизайна",
        titleKk: "Графикалық дизайн принциптері",
        content: "Graphic design is the craft of combining text, images, and space to communicate a message visually. The four core principles are Contrast (making elements distinct), Repetition (creating consistency), Alignment (organizing elements along invisible lines), and Proximity (grouping related items). Together these principles — known as CRAP — form the foundation of every well-designed layout.",
        contentRu: "Графический дизайн — это искусство сочетания текста, изображений и пространства для визуальной передачи сообщения. Четыре основных принципа: Контраст (выделение элементов), Повторение (создание единообразия), Выравнивание (организация элементов по невидимым линиям) и Близость (группировка связанных элементов). Вместе эти принципы — известные как CRAP — составляют основу любого качественного макета.",
        contentKk: "Графикалық дизайн — хабарламаны визуалды жеткізу үшін мәтінді, кескіндерді және кеңістікті біріктіру өнері. Төрт негізгі принцип: Контраст (элементтерді ерекшелеу), Қайталау (бірізділік жасау), Туралау (элементтерді көрінбейтін сызықтар бойынша ұйымдастыру) және Жақындық (байланысты элементтерді топтау). Бұл принциптер — CRAP деп белгілі — кез келген сапалы макеттің негізін құрайды.",
        keyFormulas: [
          {
            formula: "CRAP: Contrast, Repetition, Alignment, Proximity",
            formulaRu: "CRAP: Контраст, Повтор, Выравнивание, Близость",
            formulaKk: "CRAP: Контраст, Қайталау, Туралау, Жақындық",
            description: "The four fundamental principles of graphic design layout",
            descriptionRu: "Четыре фундаментальных принципа макета графического дизайна",
            descriptionKk: "Графикалық дизайн макетінің төрт іргелі принципі"
          }
        ],
        solvedExamples: [
          {
            question: "A school flyer has text scattered randomly, three different fonts, and no clear grouping. Which CRAP principles are violated?",
            questionRu: "На школьной листовке текст разбросан случайно, использованы три разных шрифта и нет чёткой группировки. Какие принципы CRAP нарушены?",
            questionKk: "Мектеп парақшасында мәтін кездейсоқ шашылған, үш түрлі қаріп қолданылған және анық топтау жоқ. CRAP принциптерінің қайсысы бұзылған?",
            steps: [
              { en: "Random text placement violates Alignment (elements not organized along consistent lines) and Proximity (related items not grouped together).", ru: "Случайное размещение текста нарушает Выравнивание (элементы не организованы по единым линиям) и Близость (связанные элементы не сгруппированы).", kk: "Кездейсоқ мәтін орналасуы Туралауды (элементтер бірыңғай сызықтар бойынша ұйымдастырылмаған) және Жақындықты (байланысты элементтер топтастырылмаған) бұзады." },
              { en: "Three different fonts violates Repetition (no consistent typographic system). If the fonts are too similar, it also violates Contrast (not distinct enough to seem intentional).", ru: "Три разных шрифта нарушают Повторение (нет единой типографической системы). Если шрифты слишком похожи, это также нарушает Контраст.", kk: "Үш түрлі қаріп Қайталауды бұзады (бірыңғай типографиялық жүйе жоқ). Қаріптер тым ұқсас болса, бұл Контрастты да бұзады." }
            ],
            answer: "Alignment, Proximity, and Repetition are all violated. Fix by aligning text to a grid, grouping related info, and using only 2 fonts consistently.",
            answerRu: "Нарушены Выравнивание, Близость и Повторение. Исправьте это, выровняв текст по сетке, сгруппировав связанную информацию и последовательно используя только 2 шрифта.",
            answerKk: "Туралау, Жақындық және Қайталау бұзылған. Мәтінді тор бойынша туралап, байланысты ақпаратты топтастырып және тек 2 қаріпті тұрақты қолданып түзетіңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the acronym CRAP stand for in graphic design?",
            questionRu: "Что означает аббревиатура CRAP в графическом дизайне?",
            questionKk: "Графикалық дизайндағы CRAP аббревиатурасы нені білдіреді?",
            answer: "Contrast, Repetition, Alignment, Proximity",
            answerRu: "Контраст, Повторение, Выравнивание, Близость",
            answerKk: "Контраст, Қайталау, Туралау, Жақындық",
            hint: "Four principles, each starting with C, R, A, P.",
            hintRu: "Четыре принципа, каждый начинается на C, R, A, P.",
            hintKk: "Төрт принцип, әрқайсысы C, R, A, P әріптерінен басталады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have a business card with the person's name, title, phone, email, and company logo. How would you apply the Proximity principle?",
            questionRu: "У вас визитка с именем, должностью, телефоном, email и логотипом компании. Как применить принцип Близости?",
            questionKk: "Сізде адамның аты, лауазымы, телефоны, электрондық поштасы және компания логотипі бар визит карта бар. Жақындық принципін қалай қолданасыз?",
            answer: "Group name and title together (identity cluster). Group phone and email together (contact cluster). Place the logo with some breathing room as its own element. The spacing between clusters should be larger than spacing within clusters.",
            answerRu: "Сгруппируйте имя и должность вместе (кластер идентичности). Сгруппируйте телефон и email вместе (кластер контактов). Разместите логотип с небольшим свободным пространством как отдельный элемент. Расстояние между кластерами должно быть больше, чем внутри кластеров.",
            answerKk: "Аты мен лауазымын бірге топтастырыңыз (сәйкестендіру кластері). Телефон мен электрондық поштаны бірге топтастырыңыз (байланыс кластері). Логотипті жеке элемент ретінде аздаған бос кеңістікпен орналастырыңыз. Кластерлер арасындағы аралық кластер ішіндегі аралықтан үлкенірек болуы керек.",
            hint: "Related information should be visually close; unrelated info should have more space between them.",
            hintRu: "Связанная информация должна быть визуально близко; между несвязанной должно быть больше пространства.",
            hintKk: "Байланысты ақпарат визуалды жақын болуы керек; байланыссыз ақпарат арасында көбірек кеңістік болуы керек.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Redesign a restaurant menu using all four CRAP principles. Describe specific choices for each principle.",
            questionRu: "Переделайте меню ресторана, используя все четыре принципа CRAP. Опишите конкретные решения для каждого принципа.",
            questionKk: "Барлық төрт CRAP принципін қолданып мейрамхана мәзірін қайта жасаңыз. Әр принцип үшін нақты шешімдерді сипаттаңыз.",
            answer: "Contrast: bold large font for dish names, lighter small font for descriptions, accent color for prices. Repetition: same layout pattern for every dish entry, consistent spacing and font sizes. Alignment: left-align all dish names and descriptions, right-align all prices. Proximity: group each dish with its description and price; add extra spacing between categories (appetizers, mains, desserts).",
            answerRu: "Контраст: жирный крупный шрифт для названий блюд, более светлый мелкий — для описаний, акцентный цвет для цен. Повторение: одинаковый шаблон макета для каждой позиции меню, единые интервалы и размеры шрифтов. Выравнивание: все названия и описания блюд — по левому краю, все цены — по правому. Близость: каждое блюдо группируется с его описанием и ценой; между категориями (закуски, основные блюда, десерты) добавляется дополнительный отступ.",
            answerKk: "Контраст: тағам атауларына қалың ірі қаріп, сипаттамаларға ашық ұсақ қаріп, бағаларға акцент түс. Қайталау: әр тағам жазбасына бірдей макет үлгісі, бірыңғай аралықтар мен қаріп өлшемдері. Туралау: барлық тағам атаулары мен сипаттамаларын сол жаққа, барлық бағаларды оң жаққа туралау. Жақындық: әр тағамды сипаттамасымен және бағасымен топтастыру; санаттар арасына (тіскебасарлар, негізгі тағамдар, десерттер) қосымша аралық қосу.",
            xp: 20
          }
        ]
      },
      {
        title: "Logo Design",
        titleRu: "Дизайн логотипов",
        titleKk: "Логотип дизайны",
        content: "A logo is a visual symbol that represents a brand's identity in the simplest possible form. Effective logos follow five rules: simple (works at any size), memorable (distinctive at a glance), timeless (avoids trends), versatile (works in color and black-and-white), and appropriate (fits the brand's personality). Logos come in three types: wordmarks (text-based like Google), symbols (icon-based like Apple), and combination marks (text plus icon like Adidas).",
        contentRu: "Логотип — это визуальный символ, представляющий идентичность бренда в максимально простой форме. Эффективные логотипы следуют пяти правилам: простой (работает в любом размере), запоминающийся (узнаваемый с первого взгляда), вневременной (избегает трендов), универсальный (работает в цвете и чёрно-белом) и уместный (соответствует характеру бренда). Логотипы бывают трёх типов: словесные (текстовые как Google), символьные (иконки как Apple) и комбинированные (текст плюс иконка как Adidas).",
        contentKk: "Логотип — брендтің бірегейлігін мүмкіндігінше қарапайым формада көрсететін визуалды символ. Тиімді логотиптер бес ережеге сәйкес келеді: қарапайым (кез келген өлшемде жұмыс істейді), есте қаларлық (бір қарағанда ерекше), мәңгілік (трендтерден аулақ), әмбебап (түсті және ақ-қара түрде жұмыс істейді) және орынды (бренд мінезіне сәйкес). Логотиптер үш түрге бөлінеді: сөздік (Google сияқты мәтінге негізделген), символдық (Apple сияқты белгішеге негізделген) және құрама (Adidas сияқты мәтін плюс белгіше).",
        keyFormulas: [
          {
            formula: "5 logo rules: Simple, Memorable, Timeless, Versatile, Appropriate",
            formulaRu: "5 правил логотипа: Простой, Запоминающийся, Вневременной, Универсальный, Уместный",
            formulaKk: "Логотиптің 5 ережесі: Қарапайым, Есте қаларлық, Уақытсыз, Әмбебап, Орынды",
            description: "Criteria for evaluating effective logo design",
            descriptionRu: "Критерии оценки эффективного дизайна логотипа",
            descriptionKk: "Тиімді логотип дизайнын бағалау критерийлері"
          }
        ],
        solvedExamples: [
          {
            question: "Design a logo concept for a student tutoring app called 'BrightMind'. Walk through the process.",
            questionRu: "Разработайте концепцию логотипа для приложения репетиторства 'BrightMind'. Опишите процесс.",
            questionKk: "'BrightMind' деп аталатын оқушылар тьюторлық қолданбасы үшін логотип концепциясын жасаңыз. Процесті сипаттаңыз.",
            steps: [
              { en: "Brainstorm associations: 'Bright' suggests light, lightbulb, sun, spark. 'Mind' suggests brain, head, thought bubble. Combine: a lightbulb with a brain pattern inside.", ru: "Мозговой штурм ассоциаций: 'Bright' вызывает свет, лампочку, солнце, искру. 'Mind' — мозг, голову, облако мысли. Комбинация: лампочка с узором мозга внутри.", kk: "Ассоциацияларды ойлап табу: 'Bright' жарық, шам, күн, ұшқынды шақырады. 'Mind' — ми, бас, ой бұлты. Біріктіру: ішінде ми өрнегі бар шам." },
              { en: "Test the 5 rules: Simple (lightbulb silhouette is recognizable at 16px), Memorable (brain-in-bulb is unique), Timeless (no trendy gradients), Versatile (works as single-color icon), Appropriate (light + brain fits education).", ru: "Проверьте 5 правил: Простой (силуэт лампочки узнаваем при 16px), Запоминающийся (мозг-в-лампочке уникален), Вневременной (без модных градиентов), Универсальный (работает как одноцветная иконка), Уместный (свет + мозг подходит для образования).", kk: "5 ережені тексеріңіз: Қарапайым (шам силуэті 16px-де танылады), Есте қаларлық (шамдағы ми бірегей), Мәңгілік (трендті градиенттер жоқ), Әмбебап (бір түсті белгіше ретінде жұмыс істейді), Орынды (жарық + ми білімге сәйкес)." }
            ],
            answer: "A minimalist lightbulb silhouette with subtle brain-fold lines inside, paired with 'BrightMind' in a clean sans-serif font. Works at all sizes and in single color.",
            answerRu: "Минималистичный силуэт лампочки с тонкими линиями извилин мозга внутри в сочетании с надписью 'BrightMind' чистым шрифтом без засечек. Работает во всех размерах и в одноцветном варианте.",
            answerKk: "Ішінде ми қатпарларының нәзік сызықтары бар минималистік шам силуэті және таза sans-serif қаріппен жазылған 'BrightMind' жазуы. Барлық өлшемде және бір түсті нұсқада жұмыс істейді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three main types of logos?",
            questionRu: "Какие три основных типа логотипов?",
            questionKk: "Логотиптердің үш негізгі түрі қандай?",
            answer: "Wordmark (text-based), Symbol (icon-based), and Combination mark (text + icon).",
            answerRu: "Словесный (на основе текста), символьный (на основе иконки) и комбинированный (текст + иконка).",
            answerKk: "Сөздік (мәтінге негізделген), символдық (белгішеге негізделген) және құрама (мәтін + белгіше).",
            hint: "Think of Google, Apple, and Adidas as examples of each type.",
            hintRu: "Подумайте о Google, Apple и Adidas как примерах каждого типа.",
            hintKk: "Әр түрдің мысалы ретінде Google, Apple және Adidas туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A logo uses a detailed illustration with 8 colors and thin line work. Which of the 5 logo rules does this likely violate?",
            questionRu: "Логотип использует детальную иллюстрацию с 8 цветами и тонкими линиями. Какие из 5 правил логотипа это нарушает?",
            questionKk: "Логотип 8 түсті және жіңішке сызықтары бар егжей-тегжейлі иллюстрацияны қолданады. 5 логотип ережесінің қайсысын бұзуы мүмкін?",
            answer: "Simple (too detailed to work at small sizes), Versatile (8 colors won't work in black-and-white, thin lines disappear at small sizes).",
            answerRu: "Простой (слишком детальный, чтобы работать в малых размерах), Универсальный (8 цветов не работают в чёрно-белом варианте, тонкие линии исчезают в малых размерах).",
            answerKk: "Қарапайым (кіші өлшемдерде жұмыс істеу үшін тым егжей-тегжейлі), Әмбебап (8 түсті ақ-қара нұсқада қолдану мүмкін емес, жіңішке сызықтар кіші өлшемдерде жоғалады).",
            hint: "Imagine shrinking the logo to 16×16 pixels — what would be lost?",
            hintRu: "Представьте, что уменьшаете логотип до 16×16 пикселей — что потеряется?",
            hintKk: "Логотипті 16×16 пиксельге кішірейтуді елестетіңіз — не жоғалады?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Compare the logos of Nike, Starbucks, and Coca-Cola. For each, identify the logo type and explain why it has remained effective for decades.",
            questionRu: "Сравните логотипы Nike, Starbucks и Coca-Cola. Для каждого определите тип и объясните, почему он оставался эффективным десятилетиями.",
            questionKk: "Nike, Starbucks және Coca-Cola логотиптерін салыстырыңыз. Әрқайсысы үшін логотип түрін анықтаңыз және ондаған жылдар бойы неліктен тиімді болып қалғанын түсіндіріңіз.",
            answer: "Nike: Symbol (swoosh) — extremely simple, works at any size, conveys motion. Starbucks: Symbol (siren) — distinctive, detailed but with clear silhouette, evolved to become simpler over time. Coca-Cola: Wordmark — unique hand-lettered script is instantly recognizable, timeless cursive style transcends trends. All three succeed because they prioritize memorability and simplicity at their core.",
            answerRu: "Nike: символьный (свуш) — крайне простой, работает в любом размере, передаёт движение. Starbucks: символьный (сирена) — узнаваемый, детальный, но с чётким силуэтом, со временем становился проще. Coca-Cola: словесный — уникальный рукописный шрифт узнаётся мгновенно, вневременной курсивный стиль неподвластен трендам. Все три успешны, потому что в их основе лежат запоминаемость и простота.",
            answerKk: "Nike: символдық (свуш) — өте қарапайым, кез келген өлшемде жұмыс істейді, қозғалысты жеткізеді. Starbucks: символдық (сирена) — ерекше, егжей-тегжейлі, бірақ айқын силуэтті, уақыт өте келе қарапайымдай түсті. Coca-Cola: сөздік — қолмен жазылған бірегей шрипт лезде танылады, мәңгілік курсив стилі трендтерден жоғары тұр. Үшеуі де өз негізіне есте қаларлықтық пен қарапайымдылықты қоюының арқасында табысты.",
            xp: 20
          }
        ]
      },
      {
        title: "Poster & Flyer",
        titleRu: "Постеры и листовки",
        titleKk: "Постерлер және парақшалар",
        content: "Posters and flyers are single-page designs meant to grab attention quickly and communicate key information. A poster is typically viewed from a distance and needs bold visuals and minimal text, while a flyer is held and read up close, allowing more detail. Both follow the visual hierarchy rule: the most important information (event name, date) should be largest, with supporting details progressively smaller.",
        contentRu: "Постеры и листовки — это одностраничные дизайны, предназначенные для быстрого привлечения внимания и передачи ключевой информации. Постер обычно рассматривается издалека и требует ярких визуалов и минимума текста, тогда как листовку держат в руках и читают вблизи, что позволяет больше деталей. Оба следуют правилу визуальной иерархии: самая важная информация (название события, дата) должна быть крупнейшей, с постепенно уменьшающимися деталями.",
        contentKk: "Постерлер мен парақшалар — назарды тез аударуға және негізгі ақпаратты жеткізуге арналған бір беттік дизайндар. Постер әдетте алыстан қаралады және жарқын визуалдар мен аз мәтінді қажет етеді, ал парақша қолда ұсталып жақыннан оқылады, бұл көбірек деталь мүмкіндік береді. Екеуі де визуалды иерархия ережесін ұстанады: ең маңызды ақпарат (іс-шара атауы, күні) ең үлкен болуы керек, қосымша деталдар біртіндеп кішірейеді.",
        keyFormulas: [
          {
            formula: "Poster hierarchy: Headline (40%) > Visual (30%) > Details (20%) > Fine print (10%)",
            formulaRu: "Иерархия постера: Заголовок (40%) > Изображение (30%) > Детали (20%) > Мелкий текст (10%)",
            formulaKk: "Постер иерархиясы: Тақырып (40%) > Сурет (30%) > Егжей-тегжей (20%) > Ұсақ мәтін (10%)",
            description: "Approximate space allocation for a balanced poster layout",
            descriptionRu: "Примерное распределение пространства для сбалансированного макета постера",
            descriptionKk: "Теңдестірілген постер макеті үшін кеңістікті шамамен бөлу"
          }
        ],
        solvedExamples: [
          {
            question: "Design the layout for a school concert poster. The event is 'Spring Jam 2026' on March 15 at 7 PM in the auditorium.",
            questionRu: "Спроектируйте макет плаката школьного концерта. Мероприятие: 'Spring Jam 2026', 15 марта в 19:00 в актовом зале.",
            questionKk: "Мектеп концертінің постер макетін жасаңыз. Іс-шара: 'Spring Jam 2026', 15 наурыз сағат 19:00 актовый залда.",
            steps: [
              { en: "Top 40%: 'SPRING JAM 2026' in large bold text with a vibrant background image or illustration of musicians. This is the first thing people see from across the hallway.", ru: "Верхние 40%: 'SPRING JAM 2026' крупным жирным текстом с ярким фоновым изображением или иллюстрацией музыкантов. Это первое, что видят люди из коридора.", kk: "Жоғарғы 40%: 'SPRING JAM 2026' жарқын фондық кескінмен немесе музыканттар иллюстрациясымен үлкен қалың мәтінмен. Бұл адамдардың дәліздің арғы жағынан көретін бірінші нәрсесі." },
              { en: "Middle 30%: visual element (photo or graphic of the band/performers). Bottom 30%: 'March 15 | 7:00 PM | School Auditorium' in medium text, plus ticket info and any logos in smaller text.", ru: "Средние 30%: визуальный элемент (фото или графика группы/исполнителей). Нижние 30%: 'Март 15 | 19:00 | Актовый зал' средним текстом, информация о билетах и логотипы мелким текстом.", kk: "Ортаңғы 30%: визуалды элемент (топтың/орындаушылардың фотосуреті немесе графикасы). Төменгі 30%: 'Наурыз 15 | 19:00 | Актовый зал' орташа мәтінмен, билет ақпараты мен логотиптер кіші мәтінмен." }
            ],
            answer: "Large bold event title at top, eye-catching visual in the center, date/time/location details at the bottom. Use high contrast and limit to 2-3 colors.",
            answerRu: "Крупный жирный заголовок мероприятия сверху, привлекающий внимание визуал в центре, детали даты/времени/места внизу. Используйте высокий контраст и ограничьтесь 2-3 цветами.",
            answerKk: "Жоғарыда іс-шараның ірі қалың тақырыбы, ортасында назар аудартарлық визуал, төменде күні/уақыты/орны туралы мәліметтер. Жоғары контраст қолданып, 2-3 түспен шектеліңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the key difference between a poster and a flyer in terms of viewing distance?",
            questionRu: "В чём ключевое различие между постером и листовкой с точки зрения дистанции просмотра?",
            questionKk: "Көру қашықтығы бойынша постер мен парақшаның негізгі айырмашылығы неде?",
            answer: "A poster is viewed from a distance (needs bold, minimal text), while a flyer is held and read up close (can include more detailed text).",
            answerRu: "Постер рассматривают издалека (нужен крупный текст по минимуму), а листовку держат в руках и читают вблизи (в ней может быть более подробный текст).",
            answerKk: "Постер алыстан қаралады (қалың, аз мәтін қажет), ал парақша қолда ұсталып жақыннан оқылады (егжей-тегжейлірек мәтін бола алады).",
            hint: "Think about where each is typically displayed — wall vs. hand.",
            hintRu: "Подумайте, где обычно размещается каждый — стена или рука.",
            hintKk: "Әрқайсысы әдетте қайда орналастырылатынын ойлаңыз — қабырғада немесе қолда.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A poster has the event date in tiny text at the bottom and a large decorative image taking up 80% of the space. What is wrong with this layout?",
            questionRu: "На постере дата мероприятия мелким текстом внизу, а декоративное изображение занимает 80% пространства. Что не так с этим макетом?",
            questionKk: "Постерде іс-шара күні төменде кішкентай мәтінмен, ал сәндік кескін кеңістіктің 80%-ын алады. Бұл макетте не дұрыс емес?",
            answer: "The visual hierarchy is inverted — the date (critical information) is too small and buried. The decorative image takes too much space without conveying necessary information. Essential info like the event name and date should be prominently sized.",
            answerRu: "Визуальная иерархия перевёрнута — дата (важная информация) слишком мелкая и спрятана. Декоративное изображение занимает слишком много места, не передавая нужной информации. Важные сведения, такие как название события и дата, должны быть заметного размера.",
            answerKk: "Визуалды иерархия төңкерілген — күн (маңызды ақпарат) тым кішкентай және көзден тасада. Сәндік кескін қажетті ақпаратты жеткізбестен тым көп орын алады. Іс-шара атауы мен күні сияқты маңызды ақпарат көрнекті өлшемде болуы керек.",
            hint: "Ask: what does the viewer NEED to know, and can they see it at a glance?",
            hintRu: "Спросите: что зритель ДОЛЖЕН узнать, и видит ли он это с первого взгляда?",
            hintKk: "Сұраңыз: көрерменге нені білу КЕРЕК және оны бір қарағанда көре ала ма?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to create both a poster and a matching flyer for the same event. How do you adapt the design between the two formats while maintaining brand consistency?",
            questionRu: "Вам нужно создать постер и подходящую листовку для одного мероприятия. Как адаптировать дизайн между двумя форматами, сохраняя единообразие бренда?",
            questionKk: "Бір іс-шараға постер мен сәйкес парақша жасауыңыз керек. Бренд бірізділігін сақтай отырып, дизайнды екі формат арасында қалай бейімдейсіз?",
            answer: "Keep the same color palette, fonts, and key visual element (logo or hero image) for brand consistency. For the poster: enlarge the headline and visual, minimize text to essentials. For the flyer: reduce the hero image size, add detailed schedule, speaker bios, ticket links, and map. Both share the same visual DNA but serve different information depths.",
            answerRu: "Сохраняйте одну и ту же цветовую палитру, шрифты и ключевой визуальный элемент (логотип или главное изображение) для единообразия бренда. Для постера: увеличьте заголовок и визуал, сократив текст до essentials. Для листовки: уменьшите главное изображение, добавьте подробное расписание, биографии спикеров, ссылки на билеты и карту. Оба имеют общую визуальную ДНК, но подают разную глубину информации.",
            answerKk: "Бренд бірізділігі үшін бірдей түс палитрасын, қаріптерді және негізгі визуалды элементті (логотип немесе басты кескін) сақтаңыз. Постер үшін: тақырып пен визуалды ұлғайтып, мәтінді ең қажеттісіне дейін қысқартыңыз. Парақша үшін: басты кескіннің өлшемін кішірейтіп, егжей-тегжейлі кесте, спикерлердің өмірбаяны, билет сілтемелері және карта қосыңыз. Екеуі де бірдей визуалды ДНК-ны сақтайды, бірақ ақпараттың әртүрлі тереңдігін ұсынады.",
            xp: 20
          }
        ]
      },
      {
        title: "Advanced Typography",
        titleRu: "Продвинутая типографика",
        titleKk: "Жетілдірілген типографика",
        content: "Advanced typography goes beyond font selection to consider kerning (space between individual letter pairs), tracking (uniform spacing across all letters), and leading (space between lines). Typographic contrast is achieved by pairing fonts from different categories — such as a bold serif heading with a light sans-serif body. Understanding font licensing is also important: some fonts are free for personal use but require licenses for commercial projects.",
        contentRu: "Продвинутая типографика выходит за рамки выбора шрифта и рассматривает кернинг (расстояние между парами букв), трекинг (равномерный интервал между всеми буквами) и интерлиньяж (расстояние между строками). Типографический контраст достигается сочетанием шрифтов из разных категорий — например, жирный шрифт с засечками для заголовка и лёгкий шрифт без засечек для текста. Понимание лицензирования шрифтов тоже важно: некоторые шрифты бесплатны для личного использования, но требуют лицензии для коммерческих проектов.",
        contentKk: "Жетілдірілген типографика қаріп таңдаудан шығып, кернингті (жеке әріп жұптары арасындағы аралық), трекингті (барлық әріптер бойынша бірыңғай аралық) және интерлиньяжды (жолдар арасындағы аралық) қарастырады. Типографиялық контраст әртүрлі санаттардан қаріптерді жұптау арқылы қол жеткізіледі — мысалы, тақырып үшін қалың serif, мәтін үшін жеңіл sans-serif. Қаріп лицензиялауды түсіну де маңызды: кейбір қаріптер жеке пайдалану үшін тегін, бірақ коммерциялық жобалар үшін лицензия талап етеді.",
        keyFormulas: [
          {
            formula: "Kerning: adjust space between specific letter pairs (e.g., AV, To, WA)",
            formulaRu: "Кернинг: настройка расстояния между конкретными парами букв (например, AV, To, WA)",
            formulaKk: "Кернинг: белгілі бір әріп жұптары арасындағы қашықтықты реттеу (мысалы, AV, To, WA)",
            description: "Fine-tuning individual letter spacing for visual balance",
            descriptionRu: "Тонкая настройка расстояния между отдельными буквами для визуального баланса",
            descriptionKk: "Визуалды тепе-теңдік үшін жеке әріп аралығын дәл реттеу"
          }
        ],
        solvedExamples: [
          {
            question: "The word 'WAVE' in a heading looks uneven — the W and A appear too far apart while A and V look too close. What adjustment do you make?",
            questionRu: "Слово 'WAVE' в заголовке выглядит неровно — W и A кажутся слишком далеко друг от друга, а A и V — слишком близко. Какую коррекцию вы сделаете?",
            questionKk: "'WAVE' сөзі тақырыпта тегіс емес көрінеді — W мен A тым алыс, ал A мен V тым жақын көрінеді. Қандай түзету жасайсыз?",
            steps: [
              { en: "Decrease kerning between W and A to bring them closer — these letters have diagonal strokes that create a visual gap.", ru: "Уменьшите кернинг между W и A, чтобы сблизить их — у этих букв диагональные штрихи, создающие визуальный зазор.", kk: "W мен A арасындағы кернингті азайтыңыз — бұл әріптердің диагональ штрихтары визуалды бос орын жасайды." },
              { en: "Slightly increase kerning between A and V to balance the overall word. The goal is optically even spacing — not mathematically equal, but visually balanced.", ru: "Немного увеличьте кернинг между A и V для баланса всего слова. Цель — оптически равномерный интервал, не математически равный, а визуально сбалансированный.", kk: "Бүкіл сөзді теңестіру үшін A мен V арасындағы кернингті аздап арттырыңыз. Мақсат — оптикалық тегіс аралық, математикалық тең емес, визуалды теңдестірілген." }
            ],
            answer: "Tighten W-A kerning and loosen A-V kerning to achieve optically even spacing across the entire word.",
            answerRu: "Уплотните кернинг W-A и ослабьте кернинг A-V, чтобы добиться оптически равномерного интервала по всему слову.",
            answerKk: "Бүкіл сөз бойынша оптикалық тегіс аралыққа қол жеткізу үшін W-A кернингін тығыздап, A-V кернингін босаңдатыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between kerning and tracking?",
            questionRu: "В чём разница между кернингом и трекингом?",
            questionKk: "Кернинг пен трекингтің айырмашылығы неде?",
            answer: "Kerning adjusts space between specific letter pairs; tracking adjusts space uniformly across all letters in a word or line.",
            answerRu: "Кернинг настраивает расстояние между определёнными парами букв; трекинг равномерно настраивает расстояние между всеми буквами в слове или строке.",
            answerKk: "Кернинг нақты әріп жұптары арасындағы аралықты реттейді; трекинг сөздегі немесе жолдағы барлық әріптер бойынша аралықты бірыңғай реттейді.",
            hint: "One is selective, the other is uniform.",
            hintRu: "Одно — выборочное, другое — равномерное.",
            hintKk: "Біреуі таңдамалы, екіншісі бірыңғай.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You want to pair a heading font with a body font. The heading is Playfair Display (serif). Suggest a body font and explain the pairing logic.",
            questionRu: "Вы хотите подобрать шрифт для текста к шрифту заголовка. Заголовок — Playfair Display (с засечками). Предложите шрифт для текста и объясните логику сочетания.",
            questionKk: "Тақырып қаріпіне мәтін қаріпін жұптағыңыз келеді. Тақырып — Playfair Display (serif). Мәтін қаріпін ұсыныңыз және жұптау логикасын түсіндіріңіз.",
            answer: "Source Sans Pro or Lato (sans-serif). The pairing works because Playfair Display is a high-contrast serif with elegant character, while Source Sans Pro is a neutral sans-serif that doesn't compete for attention. The contrast between serif heading and sans-serif body creates clear hierarchy.",
            answerRu: "Source Sans Pro или Lato (без засечек). Это сочетание работает, потому что Playfair Display — контрастный шрифт с засечками с элегантным характером, а Source Sans Pro — нейтральный шрифт без засечек, который не конкурирует за внимание. Контраст между заголовком с засечками и текстом без засечек создаёт чёткую иерархию.",
            answerKk: "Source Sans Pro немесе Lato (sans-serif). Бұл жұптау жұмыс істейді, себебі Playfair Display — элегантты мінезді жоғары контрастты serif, ал Source Sans Pro — назарға таласпайтын бейтарап sans-serif. Serif тақырып пен sans-serif мәтін арасындағы контраст анық иерархия жасайды.",
            hint: "Pair fonts from different categories (serif + sans-serif) with contrasting personalities.",
            hintRu: "Сочетайте шрифты из разных категорий (с засечками + без засечек) с контрастными характерами.",
            hintKk: "Контрастты мінездері бар әртүрлі санаттардағы қаріптерді жұптаңыз (serif + sans-serif).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A client's website uses 5 different fonts across 4 pages. They say it looks 'creative and varied'. Explain why this is a problem and propose a solution.",
            questionRu: "Сайт клиента использует 5 разных шрифтов на 4 страницах. Клиент говорит, что это выглядит 'креативно и разнообразно'. Объясните, почему это проблема, и предложите решение.",
            questionKk: "Клиенттің вебсайты 4 бетте 5 түрлі қаріп қолданады. Клиент бұл 'шығармашыл және алуан түрлі' көрінеді дейді. Бұл неліктен мәселе екенін түсіндіріңіз және шешім ұсыныңыз.",
            answer: "Problem: 5 fonts creates visual chaos and destroys brand consistency. Each font competes for attention, making the design feel unprofessional. No clear hierarchy exists. Solution: reduce to 2-3 fonts maximum — one for headings (bold, distinctive), one for body (readable, neutral), and optionally one for accents (e.g., buttons or captions). Apply consistently across all pages using a type scale.",
            answerRu: "Проблема: 5 шрифтов создают визуальный хаос и разрушают единообразие бренда. Каждый шрифт борется за внимание, из-за чего дизайн выглядит непрофессионально. Чёткая иерархия отсутствует. Решение: сократить максимум до 2-3 шрифтов — один для заголовков (жирный, выразительный), один для текста (читаемый, нейтральный) и, при необходимости, один для акцентов (например, кнопок или подписей). Последовательно применяйте их на всех страницах с использованием типографической шкалы.",
            answerKk: "Мәселе: 5 қаріп визуалды хаос тудырады және бренд бірізділігін бұзады. Әр қаріп назарға таласып, дизайнды кәсіби емес етіп көрсетеді. Анық иерархия жоқ. Шешім: ең көбі 2-3 қаріпке дейін қысқарту — біреуі тақырыптарға (қалың, ерекше), біреуі мәтінге (оқымды, бейтарап) және қажет болса біреуі акценттерге (мысалы, түймелер немесе жазбалар). Типографикалық шкала арқылы барлық бетте тұрақты қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Image Composition",
        titleRu: "Композиция изображений",
        titleKk: "Кескін композициясы",
        content: "Image composition in graphic design means strategically placing and arranging photographs, illustrations, and graphic elements to create visual impact. Techniques include using negative space (empty areas) to let designs breathe, overlapping elements to create depth, and masking images into shapes for creative effects. The relationship between image and text must be intentional — text should complement the image, not compete with it.",
        contentRu: "Композиция изображений в графическом дизайне означает стратегическое размещение и расположение фотографий, иллюстраций и графических элементов для создания визуального воздействия. Техники включают использование негативного пространства (пустых областей) для «дыхания» дизайна, наложение элементов для создания глубины и маскирование изображений в формы для творческих эффектов. Взаимосвязь между изображением и текстом должна быть намеренной — текст должен дополнять изображение, а не конкурировать с ним.",
        contentKk: "Графикалық дизайндағы кескін композициясы визуалды әсер жасау үшін фотосуреттерді, иллюстрацияларды және графикалық элементтерді стратегиялық орналастыру мен реттеуді білдіреді. Техникаларға дизайнға «тыныс алу» мүмкіндік беру үшін негативті кеңістікті (бос аймақтар) пайдалану, тереңдік жасау үшін элементтерді қабаттастыру және шығармашылық эффекттер үшін кескіндерді пішіндерге маскалау кіреді. Кескін мен мәтін арасындағы байланыс мақсатты болуы керек — мәтін кескінді толықтыруы керек, онымен бәсекелеспеуі керек.",
        keyFormulas: [
          {
            formula: "Negative space ratio: aim for 40-60% empty space in clean designs",
            formulaRu: "Соотношение негативного пространства: стремитесь к 40-60% пустого места в чистом дизайне",
            formulaKk: "Теріс кеңістік қатынасы: таза дизайнда 40-60% бос орынға ұмтылыңыз",
            description: "Breathing room prevents visual clutter",
            descriptionRu: "Свободное пространство предотвращает визуальный беспорядок",
            descriptionKk: "Бос кеңістік визуалды тәртіпсіздікті болдырмайды"
          }
        ],
        solvedExamples: [
          {
            question: "A magazine cover has a full-bleed photo of a busy city street. The title text is hard to read. How do you fix the composition?",
            questionRu: "На обложке журнала — фото оживлённой городской улицы на полный разворот. Текст заголовка плохо читается. Как исправить композицию?",
            questionKk: "Журнал мұқабасында бос жиегі жоқ қалалы көше фотосуреті бар. Тақырып мәтіні оқуға қиын. Композицияны қалай түзетесіз?",
            steps: [
              { en: "Add a semi-transparent dark gradient overlay at the top or bottom where the text will go. This creates contrast without hiding the photo entirely.", ru: "Добавьте полупрозрачный тёмный градиент сверху или снизу, где будет текст. Это создаёт контраст, не скрывая фото полностью.", kk: "Мәтін орналасатын жоғарғы немесе төменгі жаққа жартылай мөлдір қараңғы градиент қосыңыз. Бұл фотоны толық жасырмай контраст жасайды." },
              { en: "Alternatively, crop or reposition the photo so the text sits over a less busy area with more negative space (like a patch of sky).", ru: "Альтернативно, обрежьте или переместите фото, чтобы текст располагался над менее загруженной областью с большим пустым пространством (например, участок неба).", kk: "Балама ретінде, мәтін көбірек негативті кеңістігі бар (мысалы, аспан бөлігі) аз тығыз аймақ үстінде орналасу үшін фотоны қиып немесе қайта орналастырыңыз." }
            ],
            answer: "Apply a gradient overlay for text readability, or reposition the photo to place text over a less busy area with natural negative space.",
            answerRu: "Наложите градиент для читаемости текста или переместите фото так, чтобы текст располагался над менее загруженной областью с естественным негативным пространством.",
            answerKk: "Мәтіннің оқылуы үшін градиент қабат қолданыңыз немесе мәтін табиғи негативті кеңістігі бар аз тығыз аймақ үстінде орналасу үшін фотоны қайта орналастырыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is 'negative space' in design?",
            questionRu: "Что такое «негативное пространство» в дизайне?",
            questionKk: "Дизайндағы «негативті кеңістік» дегеніміз не?",
            answer: "The empty or unused areas in a design that give elements room to breathe and prevent visual clutter.",
            answerRu: "Пустые или неиспользуемые области дизайна, которые дают элементам пространство для «дыхания» и предотвращают визуальный беспорядок.",
            answerKk: "Дизайндағы элементтерге «тыныстауға» орын беретін және визуалды шиеленісті болдырмайтын бос немесе қолданылмаған аймақтар.",
            hint: "Think about the space around and between elements, not the elements themselves.",
            hintRu: "Подумайте о пространстве вокруг и между элементами, а не о самих элементах.",
            hintKk: "Элементтердің өздері емес, олардың айналасындағы және арасындағы кеңістік туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are creating a book cover. The author wants the entire front covered with a detailed illustration AND a lot of text. How do you balance these competing demands?",
            questionRu: "Вы создаёте обложку книги. Автор хочет всю переднюю часть с детальной иллюстрацией И большим количеством текста. Как сбалансировать эти конкурирующие требования?",
            questionKk: "Кітап мұқабасын жасап жатырсыз. Автор бүкіл алдыңғы жағын егжей-тегжейлі иллюстрациямен ЖӘНЕ көп мәтінмен қалайды. Бұл бәсекелесуші талаптарды қалай теңестіресіз?",
            answer: "Divide the cover into zones: dedicate the top or bottom third to text on a solid or gradient background, and the remaining two-thirds to the illustration. Use a color from the illustration for the text zone background to maintain visual connection. This gives both elements dedicated space without competing.",
            answerRu: "Разделите обложку на зоны: отведите верхнюю или нижнюю треть под текст на однотонном или градиентном фоне, а оставшиеся две трети — под иллюстрацию. Используйте цвет из иллюстрации для фона текстовой зоны, чтобы сохранить визуальную связь. Это даёт обоим элементам отдельное пространство без конкуренции.",
            answerKk: "Мұқабаны аймақтарға бөліңіз: жоғарғы немесе төменгі үштен бірін біртекті немесе градиентті фондағы мәтінге, қалған үштен екісін иллюстрацияға арнаңыз. Визуалды байланысты сақтау үшін мәтін аймағының фонына иллюстрациядағы түсті қолданыңыз. Бұл екі элементке де бір-бірімен бәсекелеспей бөлек орын береді.",
            hint: "Separate the two demands into distinct zones rather than overlapping them.",
            hintRu: "Разделите два требования на отдельные зоны, а не накладывайте их.",
            hintKk: "Екі талапты қабаттастырудың орнына бөлек аймақтарға бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Analyze the FedEx logo. What hidden element does it contain, and how does this relate to image composition and negative space?",
            questionRu: "Проанализируйте логотип FedEx. Какой скрытый элемент он содержит, и как это связано с композицией изображений и негативным пространством?",
            questionKk: "FedEx логотипін талдаңыз. Ол қандай жасырын элементті қамтиды және бұл кескін композициясы мен негативті кеңістікке қалай байланысты?",
            answer: "The FedEx logo contains a hidden arrow in the negative space between the 'E' and 'x'. This demonstrates masterful use of negative space — the arrow symbolizes speed and direction (core to a delivery company) without adding any visual element. It shows that composition is not just about what you put in a design, but what emerges from the spaces between elements.",
            answerRu: "Логотип FedEx содержит скрытую стрелку в негативном пространстве между буквами «E» и «x». Это демонстрирует мастерское использование негативного пространства — стрелка символизирует скорость и направление (суть службы доставки), не добавляя ни одного визуального элемента. Это показывает, что композиция — не только то, что вы добавляете в дизайн, но и то, что возникает в пространстве между элементами.",
            answerKk: "FedEx логотипінде «E» мен «x» әріптері арасындағы негативті кеңістікте жасырын көрсеткі бар. Бұл негативті кеңістікті шебер қолдануды көрсетеді — көрсеткі жеткізу қызметінің мәні болып табылатын жылдамдық пен бағытты білдіреді, әрі бірде-бір визуалды элемент қоспайды. Бұл композицияның тек дизайнға не қосатыныңызда емес, элементтер арасындағы кеңістікте не пайда болатынында екенін көрсетеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Brand Colors",
        titleRu: "Фирменные цвета",
        titleKk: "Бренд түстері",
        content: "Brand colors are the specific color palette that represents a company's identity across all visual materials. A typical brand palette includes a primary color (dominant, used most), a secondary color (supporting contrast), and 1-2 accent colors. Color psychology plays a role: blue conveys trust, red conveys energy, green conveys growth. Consistency in using exact hex codes across all materials builds brand recognition.",
        contentRu: "Фирменные цвета — это конкретная цветовая палитра, представляющая идентичность компании во всех визуальных материалах. Типичная палитра включает основной цвет (доминирующий), дополнительный цвет (поддерживающий контраст) и 1-2 акцентных цвета. Психология цвета играет роль: синий передаёт доверие, красный — энергию, зелёный — рост. Последовательность в использовании точных hex-кодов во всех материалах укрепляет узнаваемость бренда.",
        contentKk: "Бренд түстері — компанияның бірегейлігін барлық визуалды материалдарда көрсететін нақты түс палитрасы. Типтік бренд палитрасы негізгі түсті (басым, ең көп қолданылатын), қосалқы түсті (контрастты қолдайтын) және 1-2 акцент түсін қамтиды. Түс психологиясы рөл атқарады: көк сенімді, қызыл энергияны, жасыл өсуді білдіреді. Барлық материалдарда нақты hex кодтарын дәйекті қолдану брендті тануды нығайтады.",
        keyFormulas: [
          {
            formula: "60-30-10 rule: 60% primary, 30% secondary, 10% accent",
            formulaRu: "Правило 60-30-10: 60% основной цвет, 30% второстепенный, 10% акцент",
            formulaKk: "60-30-10 ережесі: 60% негізгі түс, 30% қосымша, 10% акцент",
            description: "Color distribution ratio for balanced brand application",
            descriptionRu: "Пропорция распределения цветов для сбалансированного применения бренда",
            descriptionKk: "Теңдестірілген бренд қолдану үшін түс бөлу пропорциясы"
          }
        ],
        solvedExamples: [
          {
            question: "A new eco-friendly startup needs a brand color palette. Suggest colors and justify your choices using color psychology.",
            questionRu: "Новому экологичному стартапу нужна фирменная палитра. Предложите цвета и обоснуйте выбор с помощью психологии цвета.",
            questionKk: "Жаңа экологиялық стартапқа бренд түс палитрасы қажет. Түс психологиясын қолдана отырып түстерді ұсыныңыз және таңдауыңызды негіздеңіз.",
            steps: [
              { en: "Primary: forest green (#2D6A4F) — conveys nature, growth, and sustainability. This will be used for 60% of the visual identity (backgrounds, headers).", ru: "Основной: тёмно-зелёный (#2D6A4F) — передаёт природу, рост и устойчивость. Используется для 60% визуальной идентичности (фоны, заголовки).", kk: "Негізгі: орман жасылы (#2D6A4F) — табиғат, өсу және тұрақтылықты білдіреді. Визуалды бірегейліктің 60%-ында қолданылады (фондар, тақырыптар)." },
              { en: "Secondary: warm sand (#E9C46A) — adds warmth and approachability (30%). Accent: coral (#E76F51) — draws attention to calls-to-action and key elements (10%).", ru: "Дополнительный: тёплый песочный (#E9C46A) — добавляет теплоту и дружелюбность (30%). Акцент: коралловый (#E76F51) — привлекает внимание к призывам к действию (10%).", kk: "Қосалқы: жылы құм (#E9C46A) — жылылық пен жақындық қосады (30%). Акцент: маржан (#E76F51) — әрекетке шақыруларға назар аудартады (10%)." }
            ],
            answer: "Primary: forest green (nature/growth), Secondary: warm sand (approachability), Accent: coral (attention). Applied as 60-30-10 ratio.",
            answerRu: "Основной: тёмно-зелёный (природа/рост), Дополнительный: тёплый песочный (доступность), Акцент: коралловый (внимание). Применяется в пропорции 60-30-10.",
            answerKk: "Негізгі: орман жасылы (табиғат/өсу), Қосалқы: жылы құм (жақындық), Акцент: маржан (назар аудару). 60-30-10 пропорциясында қолданылады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the color blue typically convey in brand psychology?",
            questionRu: "Что обычно передаёт синий цвет в психологии бренда?",
            questionKk: "Бренд психологиясында көк түс әдетте нені білдіреді?",
            answer: "Trust, reliability, professionalism, and calmness.",
            answerRu: "Доверие, надёжность, профессионализм и спокойствие.",
            answerKk: "Сенім, сенімділік, кәсібилік және байсалдылық.",
            hint: "Think about which industries use blue most — banking, tech, healthcare.",
            hintRu: "Подумайте, какие отрасли чаще всего используют синий — банки, технологии, здравоохранение.",
            hintKk: "Қай салалар көк түсті ең көп қолданатынын ойлаңыз — банктер, технология, денсаулық сақтау.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Apply the 60-30-10 rule to a website with primary blue (#1A73E8), secondary white (#FFFFFF), and accent orange (#FF6D00). Describe where each color goes.",
            questionRu: "Примените правило 60-30-10 к сайту с основным синим (#1A73E8), дополнительным белым (#FFFFFF) и акцентным оранжевым (#FF6D00). Опишите, где используется каждый цвет.",
            questionKk: "60-30-10 ережесін негізгі көк (#1A73E8), қосалқы ақ (#FFFFFF) және акцент қызғылт сары (#FF6D00) вебсайтқа қолданыңыз. Әр түстің қайда қолданылатынын сипаттаңыз.",
            answer: "60% white: page backgrounds, content areas, card backgrounds. 30% blue: navigation bar, headers, section backgrounds, links. 10% orange: CTA buttons, important badges, notification dots, hover states.",
            answerRu: "60% белый: фоны страниц, области контента, фоны карточек. 30% синий: панель навигации, заголовки, фоны разделов, ссылки. 10% оранжевый: кнопки призыва к действию, важные значки, точки уведомлений, состояния наведения.",
            answerKk: "60% ақ: бет фондары, мазмұн аймақтары, карточка фондары. 30% көк: навигация панелі, тақырыптар, бөлім фондары, сілтемелер. 10% қызғылт сары: әрекетке шақыру түймелері, маңызды белгілер, хабарландыру нүктелері, тінтуір апару күйлері.",
            hint: "The 60% color should be the most neutral — what people see most without being overwhelmed.",
            hintRu: "60% цвет должен быть самым нейтральным — то, что видят чаще всего без перегрузки.",
            hintKk: "60% түс ең бейтарап болуы керек — адамдар шамадан тыс жүктемесіз ең көп көретін нәрсе.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A fast-food brand uses red and yellow. A luxury jewelry brand uses black and gold. Explain the color psychology behind each choice and why swapping their palettes would fail.",
            questionRu: "Сеть фаст-фуда использует красный и жёлтый. Ювелирный бренд класса люкс — чёрный и золотой. Объясните психологию цвета каждого выбора и почему обмен палитрами провалится.",
            questionKk: "Фаст-фуд брендi қызыл мен сары қолданады. Люкс зергерлік бренд қара мен алтын қолданады. Әр таңдаудың түс психологиясын түсіндіріңіз және олардың палитраларын ауыстыру неліктен сәтсіз болатынын айтыңыз.",
            answer: "Fast food (red + yellow): red triggers appetite and urgency, yellow conveys happiness and speed. Together they create an energetic, attention-grabbing feel perfect for quick dining. Luxury jewelry (black + gold): black conveys sophistication and exclusivity, gold conveys premium quality and prestige. Swapping fails because: a luxury brand in red and yellow would look cheap and frantic, while a fast-food chain in black and gold would feel pretentious and unapproachable — color directly shapes brand perception.",
            answerRu: "Фастфуд (красный + жёлтый): красный вызывает аппетит и ощущение срочности, жёлтый передаёт радость и скорость. Вместе они создают энергичное, привлекающее внимание ощущение, идеальное для быстрого питания. Ювелирный люкс (чёрный + золотой): чёрный передаёт изысканность и эксклюзивность, золотой — премиальное качество и престиж. Обмен палитрами провалится, потому что: люксовый бренд в красном и жёлтом будет выглядеть дёшево и суетливо, а сеть фастфуда в чёрном и золотом покажется претенциозной и неприступной — цвет напрямую формирует восприятие бренда.",
            answerKk: "Фастфуд (қызыл + сары): қызыл түс тәбетті және асығыстық сезімін тудырады, сары түс қуаныш пен жылдамдықты білдіреді. Бірге олар жылдам тамақтануға тамаша сай келетін қуатты, назар аудартатын әсер жасайды. Люкс зергерлік (қара + алтын): қара түс нәзіктік пен эксклюзивтілікті, алтын түс премиум сапа мен беделді білдіреді. Палитраларды ауыстыру сәтсіз болады, себебі: люкс бренд қызыл мен сарыда арзан және асығыс көрінеді, ал фастфуд желісі қара мен алтында астамшыл және қолжетімсіз болып сезіледі — түс брендтің қабылдануын тікелей қалыптастырады.",
            xp: 20
          }
        ]
      },
      {
        title: "Social Media Graphics",
        titleRu: "Графика для социальных сетей",
        titleKk: "Әлеуметтік желі графикасы",
        content: "Social media graphics must capture attention within 1-3 seconds as users scroll their feeds. Each platform has specific dimensions and content styles — Instagram favors polished visuals, Twitter/X prioritizes bold text, and TikTok thumbnails need high energy. Effective social graphics use minimal text (under 20% of the image area), strong focal points, and brand-consistent colors. Creating templates ensures you can produce content quickly while maintaining visual identity.",
        contentRu: "Графика для социальных сетей должна привлечь внимание за 1-3 секунды при прокрутке ленты. Каждая платформа имеет свои размеры и стиль контента — Instagram предпочитает полированные визуалы, Twitter/X приоритезирует жирный текст, а превью TikTok требуют высокой энергии. Эффективная графика использует минимум текста (менее 20% площади), сильные фокусные точки и фирменные цвета. Создание шаблонов позволяет быстро производить контент, сохраняя визуальную идентичность.",
        contentKk: "Әлеуметтік желі графикасы пайдаланушылар лентаны айналдырғанда 1-3 секунд ішінде назар аударуы керек. Әр платформаның нақты өлшемдері мен мазмұн стильдері бар — Instagram жылтыратылған визуалдарды ұнатады, Twitter/X қалың мәтінге басымдық береді, TikTok нобайлары жоғары энергияны қажет етеді. Тиімді әлеуметтік графика аз мәтінді (кескін аймағының 20%-дан аз), күшті фокус нүктелерін және бренд-сәйкес түстерді қолданады. Шаблондар жасау визуалды бірегейлікті сақтай отырып мазмұнды тез шығаруға мүмкіндік береді.",
        keyFormulas: [
          {
            formula: "Social media text rule: <20% of image area should be text",
            formulaRu: "Правило текста в соцсетях: текст должен занимать менее 20% площади изображения",
            formulaKk: "Әлеуметтік желідегі мәтін ережесі: мәтін сурет ауданының 20%-нан аз болуы керек",
            description: "Less text increases engagement and avoids platform penalties",
            descriptionRu: "Меньше текста увеличивает вовлечённость и избегает штрафов платформы",
            descriptionKk: "Аз мәтін қатысуды арттырады және платформа айыппұлдарынан аулақтайды"
          }
        ],
        solvedExamples: [
          {
            question: "You need to promote a school bake sale on Instagram, Twitter, and TikTok. How do you adapt the same message for each platform?",
            questionRu: "Нужно прорекламировать школьную благотворительную распродажу выпечки в Instagram, Twitter и TikTok. Как адаптировать сообщение для каждой платформы?",
            questionKk: "Мектептің тоқаш сату шарасын Instagram, Twitter және TikTok-та жарнамалауыңыз керек. Бір хабарламаны әр платформаға қалай бейімдейсіз?",
            steps: [
              { en: "Instagram (1080×1080): polished photo of the baked goods with minimal text overlay — just the date and 'Bake Sale' in clean font. Let the visuals sell the event.", ru: "Instagram (1080×1080): красивое фото выпечки с минимальным текстом — только дата и 'Bake Sale' чистым шрифтом. Пусть визуалы продают событие.", kk: "Instagram (1080×1080): аз мәтін қосылған тоқаш бұйымдарының жылтыратылған фотосуреті — тек күні мен таза қаріппен 'Bake Sale'. Визуалдар іс-шараны сатсын." },
              { en: "Twitter (1200×675): bold text-forward design — 'BAKE SALE: Friday 3PM' in large letters with a cupcake icon. TikTok (1080×1920): energetic vertical graphic with bright colors, emojis, and a countdown-style layout.", ru: "Twitter (1200×675): дизайн с акцентом на текст — 'BAKE SALE: Friday 3PM' крупными буквами с иконкой кекса. TikTok (1080×1920): энергичная вертикальная графика с яркими цветами, эмодзи и обратным отсчётом.", kk: "Twitter (1200×675): мәтінге бағытталған дизайн — үлкен әріптермен 'BAKE SALE: Friday 3PM' кекс белгішесімен. TikTok (1080×1920): жарқын түстермен, эмодзилермен және кері санақ стиліндегі макетпен қуатты тік графика." }
            ],
            answer: "Instagram: visual-first with minimal text. Twitter: text-forward with supporting icon. TikTok: energetic vertical format with bold colors. Same message, adapted to each platform's strengths.",
            answerRu: "Instagram: акцент на визуал с минимумом текста. Twitter: акцент на текст с поддерживающей иконкой. TikTok: энергичный вертикальный формат с яркими цветами. Одно и то же сообщение, адаптированное под сильные стороны каждой платформы.",
            answerKk: "Instagram: аз мәтінмен визуалға басымдық. Twitter: қолдаушы белгішемен мәтінге басымдық. TikTok: жарқын түстермен қуатты тік формат. Бір хабарлама, әр платформаның күшті жақтарына бейімделген."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What percentage of image area should text occupy in a social media graphic?",
            questionRu: "Какой процент площади изображения должен занимать текст в графике для соцсетей?",
            questionKk: "Әлеуметтік желі графикасында мәтін кескін аймағының қанша пайызын алуы керек?",
            answer: "Less than 20%",
            answerRu: "Менее 20%",
            answerKk: "20%-дан аз",
            hint: "Social platforms reduce reach for text-heavy images.",
            hintRu: "Социальные платформы снижают охват для изображений с большим количеством текста.",
            hintKk: "Әлеуметтік платформалар мәтіні көп кескіндердің қамтуын азайтады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You are creating a social media template for weekly posts. What elements should remain consistent, and what should change each week?",
            questionRu: "Вы создаёте шаблон для еженедельных постов. Какие элементы должны оставаться постоянными, а что меняется каждую неделю?",
            questionKk: "Апта сайынғы жазбалар үшін әлеуметтік желі шаблонын жасап жатырсыз. Қандай элементтер тұрақты болуы керек және апта сайын не өзгеруі керек?",
            answer: "Consistent: color palette, fonts, logo placement, layout grid, overall style. Changes weekly: featured image/photo, headline text, specific details (dates, topics). This creates brand recognition while keeping content fresh.",
            answerRu: "Постоянно: цветовая палитра, шрифты, расположение логотипа, сетка макета, общий стиль. Меняется еженедельно: главное изображение/фото, текст заголовка, конкретные детали (даты, темы). Это создаёт узнаваемость бренда, сохраняя свежесть контента.",
            answerKk: "Тұрақты: түс палитрасы, қаріптер, логотип орналасуы, макет торы, жалпы стиль. Апта сайын өзгереді: негізгі кескін/фото, тақырып мәтіні, нақты детальдар (күндер, тақырыптар). Бұл контентті жаңа ұстай отырып, бренд танылуын қалыптастырады.",
            hint: "Think about what creates brand recognition vs. what makes each post unique.",
            hintRu: "Подумайте, что создаёт узнаваемость бренда, а что делает каждый пост уникальным.",
            hintKk: "Бренд танылуын не жасайтынын және әр жазбаны не бірегей ететінін ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A client wants you to create one graphic that works on Instagram (square), Twitter (landscape), and TikTok (vertical). Design a strategy for making one asset adaptable to all three without redesigning from scratch.",
            questionRu: "Клиент хочет одну графику для Instagram (квадрат), Twitter (горизонтальный) и TikTok (вертикальный). Разработайте стратегию адаптации одного материала для всех трёх без полной переделки.",
            questionKk: "Клиент Instagram (шаршы), Twitter (көлденең) және TikTok (тік) үшін жұмыс істейтін бір графика қалайды. Нөлден қайта жасамай бір материалды үшеуіне бейімдеу стратегиясын жасаңыз.",
            answer: "Create the master design at the largest dimension (1080×1920 vertical for TikTok). Place the core content (key visual + text) in the center 1080×1080 area. Ensure the extended top and bottom areas have background/decorative elements only. To export: full frame for TikTok, crop center square for Instagram, crop center horizontal band for Twitter. This 'safe zone' approach ensures key content works at all ratios.",
            answerRu: "Создайте мастер-дизайн в самом большом размере (1080×1920 вертикальный для TikTok). Разместите основной контент (ключевой визуал + текст) в центральной области 1080×1080. Убедитесь, что расширенные верхняя и нижняя области содержат только фон/декоративные элементы. Для экспорта: полный кадр для TikTok, обрезка центрального квадрата для Instagram, обрезка центральной горизонтальной полосы для Twitter. Такой подход с «безопасной зоной» гарантирует, что ключевой контент работает при всех соотношениях сторон.",
            answerKk: "Ең үлкен өлшемде (TikTok үшін 1080×1920 тік) негізгі дизайнды жасаңыз. Негізгі мазмұнды (басты визуал + мәтін) орталық 1080×1080 аймағына орналастырыңыз. Кеңейтілген жоғарғы және төменгі аймақтарда тек фон/декоративті элементтер болуын қамтамасыз етіңіз. Экспорттау үшін: TikTok үшін толық кадр, Instagram үшін орталық шаршыны кесу, Twitter үшін орталық көлденең жолақты кесу. Бұл «қауіпсіз аймақ» тәсілі негізгі мазмұнның барлық пропорцияларда жұмыс істеуін қамтамасыз етеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Infographics",
        titleRu: "Инфографика",
        titleKk: "Инфографика",
        content: "An infographic presents data and information visually through charts, icons, and illustrations to make complex topics easy to understand at a glance. Good infographics follow a clear top-to-bottom flow, use consistent iconography, and limit text to short labels and headlines. Data visualization choices matter: use bar charts for comparisons, pie charts for parts of a whole, and line charts for trends over time.",
        contentRu: "Инфографика представляет данные и информацию визуально через диаграммы, иконки и иллюстрации, чтобы сложные темы были понятны с первого взгляда. Хорошая инфографика следует чёткому потоку сверху вниз, использует единообразную иконографию и ограничивает текст короткими подписями и заголовками. Выбор визуализации данных важен: столбчатые диаграммы для сравнений, круговые — для частей целого, линейные — для трендов во времени.",
        contentKk: "Инфографика деректер мен ақпаратты диаграммалар, белгішелер және иллюстрациялар арқылы визуалды түрде ұсынады, күрделі тақырыптарды бір қарағанда түсінуді жеңілдетеді. Жақсы инфографика жоғарыдан төменге анық ағысты ұстанады, бірыңғай иконографияны қолданады және мәтінді қысқа жапсырмалар мен тақырыптармен шектейді. Деректерді визуализациялау таңдау маңызды: салыстыру үшін бағаналық диаграммалар, бүтіннің бөліктері үшін дөңгелек диаграммалар, уақыт бойынша трендтер үшін сызықтық диаграммалар.",
        keyFormulas: [
          {
            formula: "Chart choice: Bar (comparison), Pie (proportion), Line (trend over time)",
            formulaRu: "Выбор диаграммы: Столбчатая (сравнение), Круговая (доли), Линейная (тренд во времени)",
            formulaKk: "Диаграмма таңдау: Бағаналы (салыстыру), Дөңгелек (үлес), Сызықты (уақыт бойынша тренд)",
            description: "Selecting the right chart type based on the data story",
            descriptionRu: "Выбор правильного типа диаграммы в зависимости от истории данных",
            descriptionKk: "Деректер тарихына негізделген дұрыс диаграмма түрін таңдау"
          }
        ],
        solvedExamples: [
          {
            question: "You need to show that your school's recycling rate has increased from 30% to 75% over 5 years. Which chart type is best and why?",
            questionRu: "Нужно показать, что уровень переработки в школе вырос с 30% до 75% за 5 лет. Какой тип диаграммы лучше и почему?",
            questionKk: "Мектептің қайта өңдеу деңгейі 5 жылда 30%-дан 75%-ға өскенін көрсету керек. Қай диаграмма түрі жақсы және неліктен?",
            steps: [
              { en: "The data shows change over time (5 years) — this is a trend. Line charts are best for showing trends because they visually emphasize the direction of change.", ru: "Данные показывают изменение во времени (5 лет) — это тренд. Линейные диаграммы лучше всего показывают тренды, визуально подчёркивая направление изменения.", kk: "Деректер уақыт бойынша (5 жыл) өзгерісті көрсетеді — бұл тренд. Сызықтық диаграммалар трендтерді көрсету үшін ең жақсы, себебі олар өзгеріс бағытын визуалды түрде ерекшелейді." },
              { en: "Plot years on X-axis, recycling percentage on Y-axis. The upward slope immediately communicates improvement. Add data labels at start (30%) and end (75%) for quick reading.", ru: "Нанесите годы по оси X, процент переработки по оси Y. Восходящий наклон сразу передаёт улучшение. Добавьте подписи в начале (30%) и конце (75%) для быстрого чтения.", kk: "X осіне жылдарды, Y осіне қайта өңдеу пайызын қойыңыз. Жоғары қарай көлбеу бірден жақсаруды хабарлайды. Тез оқу үшін басында (30%) және соңында (75%) деректер белгілерін қосыңыз." }
            ],
            answer: "Use a line chart with years on X-axis and percentage on Y-axis. The upward trend visually communicates improvement over time.",
            answerRu: "Используйте линейную диаграмму с годами по оси X и процентами по оси Y. Восходящий тренд визуально передаёт улучшение с течением времени.",
            answerKk: "X осінде жылдармен, Y осінде пайызбен сызықтық диаграмма қолданыңыз. Жоғары бағыттағы тренд уақыт өте жақсаруды визуалды түрде жеткізеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which chart type is best for showing how a school budget is split between categories (staff, supplies, maintenance)?",
            questionRu: "Какой тип диаграммы лучше для показа распределения школьного бюджета (персонал, материалы, обслуживание)?",
            questionKk: "Мектеп бюджетінің санаттар арасында (қызметкерлер, материалдар, техникалық қызмет) қалай бөлінетінін көрсету үшін қай диаграмма түрі жақсы?",
            answer: "Pie chart — it shows parts of a whole (how the total budget is divided).",
            answerRu: "Круговая диаграмма — она показывает части целого (как распределён общий бюджет).",
            answerKk: "Дөңгелек диаграмма — ол бүтіннің бөліктерін көрсетеді (жалпы бюджет қалай бөлінген).",
            hint: "You are showing proportions of one total amount.",
            hintRu: "Вы показываете пропорции одной общей суммы.",
            hintKk: "Сіз бір жалпы соманың пропорцияларын көрсетіп жатырсыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "An infographic has 500 words of text, 12 different icons, and 4 chart types on a single page. What is wrong with this design?",
            questionRu: "Инфографика содержит 500 слов текста, 12 разных иконок и 4 типа диаграмм на одной странице. Что не так с этим дизайном?",
            questionKk: "Инфографикада бір бетте 500 сөз мәтін, 12 түрлі белгіше және 4 диаграмма түрі бар. Бұл дизайнда не дұрыс емес?",
            answer: "Information overload: too much text defeats the purpose of visual communication, inconsistent iconography (12 different styles) lacks unity, and 4 chart types is confusing. Reduce text to key headlines, use a consistent icon set, and limit to 1-2 chart types.",
            answerRu: "Информационная перегрузка: слишком много текста сводит на нет смысл визуальной коммуникации, разнородная иконография (12 разных стилей) лишена единства, а 4 типа диаграмм сбивают с толку. Сократите текст до ключевых заголовков, используйте единый набор иконок и ограничьтесь 1-2 типами диаграмм.",
            answerKk: "Ақпараттық шамадан тыс жүктеме: тым көп мәтін визуалды коммуникацияның мәнін жояды, әртүрлі иконография (12 түрлі стиль) бірлікке ие емес, ал 4 диаграмма түрі шатастырады. Мәтінді негізгі тақырыптарға дейін қысқартыңыз, бірыңғай белгіше жиынтығын қолданыңыз және 1-2 диаграмма түрімен шектеліңіз.",
            hint: "The purpose of an infographic is simplification — does this achieve that?",
            hintRu: "Цель инфографики — упрощение. Достигается ли это здесь?",
            hintKk: "Инфографиканың мақсаты — жеңілдету. Бұл мұнда қол жеткізілді ме?",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Design the structure for an infographic about 'Water Usage in Central Asia'. Include sections, data visualization types, and flow description.",
            questionRu: "Спроектируйте структуру инфографики о 'Использовании воды в Центральной Азии'. Включите разделы, типы визуализации данных и описание потока.",
            questionKk: "'Орталық Азиядағы су пайдалану' туралы инфографика құрылымын жасаңыз. Бөлімдерді, деректерді визуализациялау түрлерін және ағыс сипаттамасын қосыңыз.",
            answer: "Top: bold title + subtitle + hero icon (water droplet). Section 1: bar chart comparing water usage by country (Kazakhstan, Uzbekistan, etc.). Section 2: pie chart showing usage by sector (agriculture, industry, residential). Section 3: line chart showing usage trends over the past 20 years. Section 4: icon-based stats (liters per person per day). Bottom: call-to-action with conservation tips. Flow: top-to-bottom, each section separated by a color band, consistent blue palette throughout.",
            answerRu: "Сверху: жирный заголовок + подзаголовок + главная иконка (капля воды). Раздел 1: столбчатая диаграмма, сравнивающая использование воды по странам (Казахстан, Узбекистан и т.д.). Раздел 2: круговая диаграмма, показывающая использование по секторам (сельское хозяйство, промышленность, быт). Раздел 3: линейная диаграмма, показывающая тренды использования за последние 20 лет. Раздел 4: статистика на основе иконок (литров на человека в день). Внизу: призыв к действию с советами по экономии. Поток: сверху вниз, каждый раздел разделён цветной полосой, единая синяя палитра на протяжении всего материала.",
            answerKk: "Жоғарыда: жирный тақырып + тақырыпша + басты белгіше (су тамшысы). 1-бөлім: елдер бойынша су пайдалануды салыстыратын бағаналық диаграмма (Қазақстан, Өзбекстан және т.б.). 2-бөлім: сектор бойынша пайдалануды көрсететін дөңгелек диаграмма (ауыл шаруашылығы, өнеркәсіп, тұрмыстық). 3-бөлім: соңғы 20 жылдағы пайдалану трендтерін көрсететін сызықтық диаграмма. 4-бөлім: белгішеге негізделген статистика (күніне адам басына литр). Төменде: үнемдеу кеңестерімен әрекетке шақыру. Ағын: жоғарыдан төменге, әр бөлім түрлі-түсті жолақпен бөлінген, бүкіл материал бойы бірыңғай көк палитра.",
            xp: 20
          }
        ]
      },
      {
        title: "Photo Manipulation",
        titleRu: "Фотоманипуляция",
        titleKk: "Фотоманипуляция",
        content: "Photo manipulation goes beyond basic editing to composite multiple images, remove or add elements, and create surreal or impossible scenes. Key techniques include layer masking (hiding parts of a layer without deleting), blending modes (how layers interact with each other), and color matching (making composited elements look like they belong together). Ethics in photo manipulation is important — always disclose when images are significantly altered, especially in journalism and advertising.",
        contentRu: "Фотоманипуляция выходит за рамки базового редактирования — это компоновка нескольких изображений, удаление или добавление элементов и создание сюрреалистических сцен. Ключевые техники: маски слоёв (скрытие частей слоя без удаления), режимы наложения (взаимодействие слоёв) и согласование цвета (чтобы скомпонованные элементы выглядели гармонично). Этика фотоманипуляции важна — всегда раскрывайте, когда изображения значительно изменены, особенно в журналистике и рекламе.",
        contentKk: "Фотоманипуляция негізгі өңдеуден шығып, бірнеше кескінді біріктіруді, элементтерді жоюды немесе қосуды және сюрреалистік немесе мүмкін емес сахналарды жасауды қамтиды. Негізгі техникалар: қабат маскалау (жоймай қабаттың бөліктерін жасыру), араластыру режимдері (қабаттардың бір-бірімен әрекеттесуі) және түс сәйкестендіру (біріктірілген элементтердің бірге көрінуі). Фотоманипуляция этикасы маңызды — кескіндер айтарлықтай өзгертілгенде, әсіресе журналистика мен жарнамада, әрқашан ашып айтыңыз.",
        keyFormulas: [
          {
            formula: "Composite = Base image + Masked elements + Color matching + Shadow matching",
            formulaRu: "Композит = Базовое изображение + Элементы с маской + Согласование цвета + Согласование теней",
            formulaKk: "Композит = Негізгі сурет + Маскаланған элементтер + Түсті сәйкестендіру + Көлеңкені сәйкестендіру",
            description: "The four steps for convincing photo compositing",
            descriptionRu: "Четыре шага для убедительной фотокомпоновки",
            descriptionKk: "Сенімді фото компоновка үшін төрт қадам"
          }
        ],
        solvedExamples: [
          {
            question: "You want to place a person from one photo into a different background. What steps ensure the composite looks realistic?",
            questionRu: "Вы хотите перенести человека с одной фотографии на другой фон. Какие шаги обеспечат реалистичность компоновки?",
            questionKk: "Бір фотосуреттегі адамды басқа фонға орналастырғыңыз келеді. Композиттің шынайы көрінуін қандай қадамдар қамтамасыз етеді?",
            steps: [
              { en: "Cut out the person using a precise layer mask — pay attention to hair edges using feathering or refine edge tools. Match the lighting direction: if the background has light from the left, the person should also be lit from the left.", ru: "Вырежьте человека с помощью точной маски слоя — уделите внимание краям волос, используя растушёвку или инструменты уточнения краёв. Совместите направление освещения.", kk: "Адамды дәл қабат маскасы арқылы қиып алыңыз — шаш шеттеріне жұмсарту немесе шетті дәлдеу құралдарын қолдана отырып назар аударыңыз. Жарықтандыру бағытын сәйкестендіріңіз." },
              { en: "Color-match the person to the background by adjusting color temperature and tint. Add a subtle shadow beneath the person matching the light direction to ground them in the scene.", ru: "Согласуйте цвет человека с фоном, настроив цветовую температуру и оттенок. Добавьте тонкую тень под человеком, соответствующую направлению света.", kk: "Түс температурасы мен реңкті реттеу арқылы адамның түсін фонмен сәйкестендіріңіз. Адамды сахнаға бекіту үшін жарық бағытына сәйкес оның астына жіңішке көлеңке қосыңыз." }
            ],
            answer: "Precise masking with edge refinement, light direction matching, color temperature adjustment, and shadow addition for grounding.",
            answerRu: "Точная маска с уточнением краёв, совпадение направления света, коррекция цветовой температуры и добавление тени для «заземления» в сцене.",
            answerKk: "Шет дәлдеуі бар дәл маскалау, жарық бағытын сәйкестендіру, түс температурасын түзету және сахнаға «бекіту» үшін көлеңке қосу."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does a layer mask do in photo editing?",
            questionRu: "Что делает маска слоя при редактировании фотографий?",
            questionKk: "Фотосуретті өңдеуде қабат маскасы не істейді?",
            answer: "It hides or reveals parts of a layer without permanently deleting pixels, allowing non-destructive editing.",
            answerRu: "Она скрывает или показывает части слоя без окончательного удаления пикселей, позволяя выполнять недеструктивное редактирование.",
            answerKk: "Ол пикселдерді түпкілікті жоймай, қабаттың бөліктерін жасырады немесе көрсетеді, бұл бұзбайтын өңдеуге мүмкіндік береді.",
            hint: "Think of it as painting invisibility on parts of the image.",
            hintRu: "Представьте, что вы рисуете невидимость на частях изображения.",
            hintKk: "Кескіннің бөліктеріне көрінбейтіндікті салуды елестетіңіз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A composited image has a person from a sunny outdoor photo placed on a dim indoor background. It looks fake. Identify two specific issues and how to fix them.",
            questionRu: "На скомпонованном изображении человек из солнечной уличной фотографии помещён на тёмный внутренний фон. Выглядит фальшиво. Определите две проблемы и способы их исправления.",
            questionKk: "Композиттік кескінде күнді сыртқы фотосуреттегі адам қараңғы ішкі фонға орналастырылған. Жалған көрінеді. Екі нақты мәселені анықтаңыз және оларды қалай түзетуге болады.",
            answer: "1) Color temperature mismatch: the person has warm outdoor tones on a cool indoor background — fix by cooling down the person's color temperature. 2) Brightness mismatch: the person is brightly lit but the scene is dim — fix by reducing the person's brightness and adding shadows consistent with the indoor lighting.",
            answerRu: "1) Несоответствие цветовой температуры: у человека тёплые уличные тона на фоне холодного интерьера — исправьте, понизив цветовую температуру человека. 2) Несоответствие яркости: человек ярко освещён, а сцена тусклая — исправьте, уменьшив яркость человека и добавив тени, соответствующие внутреннему освещению.",
            answerKk: "1) Түс температурасының сәйкессіздігі: адамда салқын интерьер фонында жылы сыртқы реңктер бар — адамның түс температурасын салқындату арқылы түзетіңіз. 2) Жарықтық сәйкессіздігі: адам жарқын жарықтандырылған, ал сахна күңгірт — адамның жарықтығын азайту және ішкі жарықтандыруға сәйкес көлеңкелер қосу арқылы түзетіңіз.",
            hint: "Compare the light quality on the person vs. the background.",
            hintRu: "Сравните качество освещения на человеке и фоне.",
            hintKk: "Адамдағы және фондағы жарық сапасын салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Discuss the ethics of photo manipulation. Give one scenario where it is acceptable and one where it is harmful, explaining your reasoning.",
            questionRu: "Обсудите этику фотоманипуляции. Приведите один сценарий, где она допустима, и один, где вредна, объясняя свои рассуждения.",
            questionKk: "Фотоманипуляция этикасын талқылаңыз. Ол қолайлы болатын бір сценарий мен зиянды болатын бір сценарий келтіріңіз, пайымдауыңызды түсіндіріңіз.",
            answer: "Acceptable: artistic/creative work clearly presented as fantasy (e.g., surreal art, movie posters, clearly fictional compositions) — the audience understands it is manipulated. Harmful: altering news photos to change the narrative (e.g., adding or removing people from events) or manipulating advertising photos to create unrealistic body standards without disclosure. The key difference is transparency and intent — art vs. deception.",
            answerRu: "Допустимо: художественная/творческая работа, явно представленная как фантазия (например, сюрреалистичное искусство, постеры фильмов, явно вымышленные композиции) — аудитория понимает, что это манипуляция. Вредно: изменение новостных фото для искажения повествования (например, добавление или удаление людей с событий) или манипулирование рекламными фото для создания нереалистичных стандартов тела без раскрытия. Ключевое различие — прозрачность и намерение: искусство против обмана.",
            answerKk: "Қолайлы: анық қиял ретінде ұсынылған көркем/шығармашылық жұмыс (мысалы, сюрреалистік өнер, фильм постерлері, анық ойдан шығарылған композициялар) — аудитория оның манипуляция екенін түсінеді. Зиянды: баяндауды өзгерту үшін жаңалық фотоларын өзгерту (мысалы, оқиғалардан адамдарды қосу немесе алып тастау) немесе жарнама фотоларын ашпай тұрып, шынайы емес дене стандарттарын жасау үшін манипуляциялау. Негізгі айырмашылық — ашықтық пен ниет: өнер vs алдау.",
            xp: 20
          }
        ]
      },
      {
        title: "Design Critique",
        titleRu: "Критика дизайна",
        titleKk: "Дизайн сыны",
        content: "Design critique is the structured process of evaluating a design's effectiveness against its goals. Good critique is specific, actionable, and focused on the work rather than the person. The feedback sandwich (positive-constructive-positive) helps maintain morale while driving improvement. When receiving critique, listen without defending, take notes, and ask clarifying questions. The goal is not to prove the design is good or bad, but to make it more effective.",
        contentRu: "Критика дизайна — это структурированный процесс оценки эффективности дизайна по отношению к его целям. Хорошая критика конкретна, действенна и сфокусирована на работе, а не на человеке. «Сэндвич» обратной связи (позитив-конструктив-позитив) помогает поддерживать мотивацию, стимулируя улучшения. При получении критики слушайте без защиты, делайте заметки и задавайте уточняющие вопросы. Цель — не доказать, что дизайн хорош или плох, а сделать его эффективнее.",
        contentKk: "Дизайн сыны — дизайнның мақсаттарына қатысты тиімділігін бағалаудың құрылымдалған процесі. Жақсы сын нақты, іске асырылатын және адамға емес, жұмысқа бағытталған. Кері байланыс сэндвичі (оң-конструктивті-оң) жақсартуды ынталандыра отырып моральді сақтауға көмектеседі. Сын қабылдағанда, қорғанбай тыңдаңыз, жазбалар жасаңыз және нақтылау сұрақтарын қойыңыз. Мақсат — дизайнның жақсы немесе нашар екенін дәлелдеу емес, оны тиімдірек ету.",
        keyFormulas: [
          {
            formula: "Feedback sandwich: Positive observation → Constructive suggestion → Positive encouragement",
            formulaRu: "Сэндвич обратной связи: Позитивное наблюдение → Конструктивное предложение → Позитивная поддержка",
            formulaKk: "Кері байланыс сэндвичі: Оң байқау → Сындарлы ұсыныс → Оң қолдау",
            description: "Structure for delivering effective, balanced design critique",
            descriptionRu: "Структура для предоставления эффективной, сбалансированной критики дизайна",
            descriptionKk: "Тиімді, теңдестірілген дизайн сынын беру құрылымы"
          }
        ],
        solvedExamples: [
          {
            question: "A classmate shows you their poster design. The colors are great but the text is too small and there is no visual hierarchy. Write a critique using the feedback sandwich.",
            questionRu: "Одноклассник показывает плакат. Цвета отличные, но текст слишком мелкий и нет визуальной иерархии. Напишите критику, используя «сэндвич» обратной связи.",
            questionKk: "Сыныптасыңыз постер дизайнын көрсетеді. Түстер керемет, бірақ мәтін тым кішкентай және визуалды иерархия жоқ. Кері байланыс сэндвичін қолданып сын жазыңыз.",
            steps: [
              { en: "Positive: 'The color palette is really strong — the complementary scheme creates great energy and the tones work well together.'", ru: "Позитив: «Цветовая палитра очень сильная — комплементарная схема создаёт отличную энергию и тона хорошо сочетаются.»", kk: "Оң: «Түс палитрасы өте күшті — комплементар схема керемет энергия жасайды және реңктер бірге жақсы жұмыс істейді.»" },
              { en: "Constructive: 'I would suggest increasing the headline to 2-3× the body text size to create a clear visual hierarchy. Currently everything reads at the same level, so the viewer does not know where to look first.'", ru: "Конструктив: «Я бы предложил увеличить заголовок в 2-3 раза от размера текста для чёткой иерархии. Сейчас всё читается на одном уровне, и зритель не знает, куда смотреть.»", kk: "Конструктивті: «Анық визуалды иерархия жасау үшін тақырыпты мәтін өлшемінен 2-3 есе үлкейтуді ұсынар едім. Қазір бәрі бір деңгейде оқылады, сондықтан көрерменнің алдымен қайда қарауды білмейді.»" }
            ],
            answer: "Positive (colors are strong) → Constructive (increase headline size for hierarchy) → Positive (with that fix, this poster will really stand out).",
            answerRu: "Позитив (цвета сильные) → Конструктив (увеличить заголовок для иерархии) → Позитив (с этим исправлением плакат будет действительно выделяться).",
            answerKk: "Оң (түстер күшті) → Конструктивті (иерархия үшін тақырыпты үлкейту) → Оң (осы түзетумен постер шынымен көзге түседі)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the three parts of the feedback sandwich?",
            questionRu: "Какие три части «сэндвича» обратной связи?",
            questionKk: "Кері байланыс сэндвичінің үш бөлігі қандай?",
            answer: "Positive observation, constructive suggestion, positive encouragement.",
            answerRu: "Позитивное наблюдение, конструктивное предложение, позитивное поощрение.",
            answerKk: "Оң бақылау, конструктивті ұсыныс, оң қолдау.",
            hint: "It starts and ends on a high note.",
            hintRu: "Начинается и заканчивается на позитивной ноте.",
            hintKk: "Оң нотадан басталады және оң нотамен аяқталады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Which is better critique: 'I don't like the font' or 'The font feels too playful for a law firm website — a serif like Georgia would convey more professionalism'? Why?",
            questionRu: "Какая критика лучше: «Мне не нравится шрифт» или «Шрифт слишком игривый для сайта юридической фирмы — шрифт с засечками, как Georgia, передаст больше профессионализма»? Почему?",
            questionKk: "Қай сын жақсырақ: «Маған қаріп ұнамайды» немесе «Заң фирмасының вебсайты үшін қаріп тым ойнақы — Georgia сияқты serif көбірек кәсіпқойлықты жеткізеді»? Неліктен?",
            answer: "The second is better because it is specific (identifies the problem — too playful for the context), actionable (suggests a concrete alternative — Georgia), and objective (focused on design goals, not personal taste). The first is vague and unhelpful.",
            answerRu: "Второй вариант лучше, потому что он конкретный (указывает проблему — слишком игривый для контекста), действенный (предлагает конкретную альтернативу — Georgia) и объективный (сосредоточен на целях дизайна, а не на личном вкусе). Первый вариант расплывчатый и бесполезный.",
            answerKk: "Екінші жақсырақ, себебі ол нақты (мәселені анықтайды — контекст үшін тым ойнақы), әрекетке келетін (нақты балама ұсынады — Georgia) және объективті (жеке талғамға емес, дизайн мақсаттарына бағытталған). Біріншісі анық емес және пайдасыз.",
            hint: "Good critique explains why something doesn't work and suggests how to fix it.",
            hintRu: "Хорошая критика объясняет, почему что-то не работает, и предлагает, как это исправить.",
            hintKk: "Жақсы сын бірдеменің неліктен жұмыс істемейтінін түсіндіреді және оны қалай түзетуге болатынын ұсынады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are leading a design critique session for a team of 5 students. Two students are arguing about whether a logo should be blue or green. How do you facilitate the discussion productively?",
            questionRu: "Вы ведёте сессию критики дизайна для команды из 5 студентов. Двое спорят, должен ли логотип быть синим или зелёным. Как продуктивно направить дискуссию?",
            questionKk: "5 оқушы тобы үшін дизайн сыны сессиясын жүргізіп жатырсыз. Екі оқушы логотиптің көк немесе жасыл болуы керектігін талқылап жатыр. Талқылауды қалай нәтижелі бағыттайсыз?",
            answer: "1) Redirect to goals: 'What is the brand trying to communicate? What feeling should the logo evoke?' 2) Use color psychology: ask each student to justify their choice based on the brand's target audience and values, not personal preference. 3) Test both: suggest creating mockups in both colors and testing them with the target audience. 4) Remind the team that design decisions should be based on evidence and goals, not opinions. This transforms a subjective argument into an objective design process.",
            answerRu: "1) Переведите разговор на цели: «Что бренд хочет донести? Какое чувство должен вызывать логотип?» 2) Используйте психологию цвета: попросите каждого обосновать выбор целевой аудиторией и ценностями бренда, а не личными предпочтениями. 3) Протестируйте оба варианта: предложите сделать макеты в обоих цветах и протестировать их с целевой аудиторией. 4) Напомните команде, что дизайнерские решения должны опираться на факты и цели, а не на мнения. Это превращает субъективный спор в объективный дизайн-процесс.",
            answerKk: "1) Мақсаттарға бағыттаңыз: «Бренд нені жеткізгісі келеді? Логотип қандай сезім тудыруы керек?» 2) Түс психологиясын қолданыңыз: әр оқушыдан таңдауын жеке талғамға емес, брендтің мақсатты аудиториясы мен құндылықтарына негіздеп дәлелдеуін сұраңыз. 3) Екеуін де тексеріңіз: екі түсте де макет жасап, мақсатты аудиториямен тестілеуді ұсыныңыз. 4) Топқа дизайн шешімдері пікірге емес, дәлелдер мен мақсаттарға негізделуі керектігін еске салыңыз. Бұл субъективті дауды объективті дизайн процесіне айналдырады.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Digital Creativity_10": {
    planetName: "Digital Creativity",
    introduction: {
      en: "You step into video production and multimedia — learning storyboarding, filming, editing, audio design, and content strategy for platforms like YouTube.",
      ru: "Вы переходите к видеопроизводству и мультимедиа — изучаете раскадровку, съёмку, монтаж, звуковой дизайн и контент-стратегию для платформ вроде YouTube."
    },
    sections: [
      {
        title: "Video Storyboarding",
        titleRu: "Раскадровка видео",
        titleKk: "Бейне раскадровкасы",
        content: "A storyboard is a visual blueprint for a video, mapping out each shot before filming begins. It includes sketches of camera angles, subject placement, and notes on dialogue or sound effects. Good storyboards save time during production by clarifying the creative vision for the entire team.",
        contentRu: "Раскадровка — это визуальный план видео, отображающий каждый кадр до начала съёмки. Она включает наброски ракурсов камеры, расположение объектов и заметки о диалогах или звуковых эффектах. Хорошая раскадровка экономит время на съёмке, проясняя творческое видение для всей команды.",
        contentKk: "Раскадровка — бейнені түсіру алдында әрбір кадрды бейнелейтін визуалды жоспар. Ол камера бұрыштарының нобайларын, объектілердің орналасуын және диалогтар мен дыбыстық эффекттер туралы жазбаларды қамтиды. Жақсы раскадровка бүкіл топ үшін шығармашылық көзқарасты нақтылай отырып, түсіру уақытын үнемдейді.",
        keyFormulas: [
          {
            formula: "Shot list = Scene number + Shot type + Description + Duration",
            formulaRu: "Раскадровка = Номер сцены + Тип кадра + Описание + Длительность",
            formulaKk: "Түсіру тізімі = Көрініс нөмірі + Кадр түрі + Сипаттама + Ұзақтығы",
            description: "Organize each shot with clear details for efficient filming",
            descriptionRu: "Организуйте каждый кадр с чёткими деталями для эффективной съёмки",
            descriptionKk: "Тиімді түсіру үшін әрбір кадрды нақты мәліметтермен ұйымдастырыңыз"
          }
        ],
        solvedExamples: [
          {
            question: "You are planning a 60-second promo video for a school event. How many storyboard frames should you prepare?",
            questionRu: "Вы планируете 60-секундное промо-видео для школьного мероприятия. Сколько кадров раскадровки нужно подготовить?",
            questionKk: "Мектеп іс-шарасы үшін 60 секундтық промо-бейне жоспарлап жатырсыз. Қанша раскадровка кадрын дайындау керек?",
            steps: [
              { en: "Average shot length in promo videos is 3-5 seconds. Use 4 seconds as average.", ru: "Средняя длина кадра в промо-видео 3-5 секунд. Берём 4 секунды как среднее.", kk: "Промо-бейнедегі орташа кадр ұзақтығы 3-5 секунд. Орташа 4 секунд алайық." },
              { en: "60 seconds ÷ 4 seconds per shot = 15 frames. Prepare 15-20 storyboard frames.", ru: "60 секунд ÷ 4 секунды на кадр = 15 кадров. Подготовьте 15-20 кадров раскадровки.", kk: "60 секунд ÷ кадрға 4 секунд = 15 кадр. 15-20 раскадровка кадрын дайындаңыз." }
            ],
            answer: "Prepare 15-20 storyboard frames for a 60-second promo, assuming an average shot length of 3-5 seconds.",
            answerRu: "Подготовьте 15-20 кадров раскадровки для 60-секундного промо, исходя из средней длины кадра 3-5 секунд.",
            answerKk: "Орташа кадр ұзақтығы 3-5 секунд деп есептеп, 60 секундтық промо үшін 15-20 раскадровка кадрын дайындаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main purpose of a storyboard?",
            questionRu: "Какова основная цель раскадровки?",
            questionKk: "Раскадровканың негізгі мақсаты қандай?",
            answer: "To visually plan each shot of a video before filming begins, saving time and clarifying the creative vision.",
            answerRu: "Визуально спланировать каждый кадр видео до начала съёмки, экономя время и проясняя творческое видение.",
            answerKk: "Түсіру басталмас бұрын бейненің әр кадрын визуалды жоспарлау, уақытты үнемдеу және шығармашылық көзқарасты нақтылау.",
            hint: "Think about what happens before the camera starts recording.",
            hintRu: "Подумайте, что происходит до начала записи камерой.",
            hintKk: "Камера жазуды бастамас бұрын не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "You have a 2-minute tutorial video with an average shot length of 6 seconds. How many storyboard frames do you need?",
            questionRu: "У вас 2-минутный обучающий видеоролик со средней длиной кадра 6 секунд. Сколько кадров раскадровки вам нужно?",
            questionKk: "Орташа кадр ұзақтығы 6 секунд болатын 2 минуттық оқу бейнеңіз бар. Қанша раскадровка кадры қажет?",
            answer: "20 frames (120 seconds ÷ 6 seconds per shot = 20).",
            answerRu: "20 кадров (120 секунд ÷ 6 секунд на кадр = 20).",
            answerKk: "20 кадр (120 секунд ÷ кадрға 6 секунд = 20).",
            hint: "Convert minutes to seconds first, then divide by shot length.",
            hintRu: "Сначала переведите минуты в секунды, затем разделите на длину кадра.",
            hintKk: "Алдымен минуттарды секундқа аударыңыз, содан кейін кадр ұзақтығына бөліңіз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A client wants a 90-second product video with three distinct sections: intro (15s), features demo (50s), and call-to-action (25s). The intro uses slow 5-second shots, the demo uses fast 2-second shots, and the CTA uses 5-second shots. How many total frames do you need?",
            questionRu: "Клиент хочет 90-секундное видео о продукте с тремя разделами: вступление (15с), демо функций (50с) и призыв к действию (25с). Вступление использует медленные 5-секундные кадры, демо — быстрые 2-секундные, а CTA — 5-секундные. Сколько всего кадров нужно?",
            questionKk: "Клиент үш бөлімді 90 секундтық өнім бейнесін қалайды: кіріспе (15с), мүмкіндіктер демосы (50с) және әрекетке шақыру (25с). Кіріспе баяу 5 секундтық кадрларды, демо жылдам 2 секундтық, ал CTA 5 секундтық кадрларды пайдаланады. Барлығы қанша кадр қажет?",
            answer: "33 frames total. Intro: 15÷5 = 3, Demo: 50÷2 = 25, CTA: 25÷5 = 5. Total: 3 + 25 + 5 = 33.",
            answerRu: "Всего 33 кадра. Вступление: 15÷5 = 3, Демо: 50÷2 = 25, CTA: 25÷5 = 5. Итого: 3 + 25 + 5 = 33.",
            answerKk: "Барлығы 33 кадр. Кіріспе: 15÷5 = 3, Демо: 50÷2 = 25, CTA: 25÷5 = 5. Жиыны: 3 + 25 + 5 = 33.",
            xp: 20
          }
        ]
      },
      {
        title: "Filming Basics",
        titleRu: "Основы съёмки",
        titleKk: "Түсіру негіздері",
        content: "Filming basics cover essential camera techniques including framing, the rule of thirds, and camera movements like pans, tilts, and zooms. Proper lighting — whether natural or artificial — dramatically affects the mood and quality of footage. Stable shots using tripods or gimbals create professional-looking results even with smartphone cameras.",
        contentRu: "Основы съёмки включают основные приёмы работы с камерой: кадрирование, правило третей и движения камеры — панорамирование, наклон и зум. Правильное освещение — естественное или искусственное — кардинально влияет на настроение и качество видео. Стабильные кадры с использованием штатива или стабилизатора создают профессиональный результат даже при съёмке на смартфон.",
        contentKk: "Түсіру негіздері камерамен жұмыс істеудің негізгі тәсілдерін қамтиды: кадрлау, үштен бір ережесі және камера қозғалыстары — панорамалау, еңкейту және масштабтау. Дұрыс жарықтандыру — табиғи немесе жасанды — бейненің көңіл-күйі мен сапасына айтарлықтай әсер етеді. Штатив немесе стабилизатор арқылы тұрақты кадрлар смартфонмен түсіргенде де кәсіби нәтиже береді.",
        keyFormulas: [
          {
            formula: "Rule of Thirds: divide frame into 3×3 grid, place subjects on intersections",
            formulaRu: "Правило третей: разделите кадр на сетку 3×3, размещайте объекты на пересечениях",
            formulaKk: "Үштік ереже: кадрды 3×3 торға бөліп, нысандарды қиылысу нүктелеріне орналастырыңыз",
            description: "Creates visually balanced and engaging compositions",
            descriptionRu: "Создаёт визуально сбалансированные и привлекательные композиции",
            descriptionKk: "Визуалды теңдестірілген және тартымды композициялар жасайды"
          },
          {
            formula: "Three-point lighting = Key light + Fill light + Back light",
            formulaRu: "Трёхточечное освещение = Рисующий свет + Заполняющий свет + Контровой свет",
            formulaKk: "Үш нүктелі жарықтандыру = Негізгі жарық + Толықтырушы жарық + Артқы жарық",
            description: "Standard lighting setup for professional-quality video",
            descriptionRu: "Стандартная схема освещения для профессионального видео",
            descriptionKk: "Кәсіби сапалы бейне үшін стандартты жарықтандыру схемасы"
          }
        ],
        solvedExamples: [
          {
            question: "You are filming an interview with a smartphone. How should you set up lighting using only two desk lamps?",
            questionRu: "Вы снимаете интервью на смартфон. Как настроить освещение, используя только две настольные лампы?",
            questionKk: "Смартфонмен сұхбат түсіріп жатырсыз. Тек екі үстел шамын пайдаланып жарықтандыруды қалай реттейсіз?",
            steps: [
              { en: "Place one lamp (key light) at a 45° angle to the subject's face for the main illumination.", ru: "Поставьте одну лампу (основной свет) под углом 45° к лицу для главного освещения.", kk: "Бір шамды (негізгі жарық) негізгі жарықтандыру үшін адамның бетіне 45° бұрышпен қойыңыз." },
              { en: "Place the second lamp (fill light) on the opposite side at lower intensity to soften shadows without eliminating them.", ru: "Поставьте вторую лампу (заполняющий свет) с противоположной стороны с меньшей яркостью, чтобы смягчить тени.", kk: "Екінші шамды (толтырушы жарық) көлеңкелерді жұмсарту үшін қарсы жаққа төменірек қарқынмен қойыңыз." }
            ],
            answer: "Key light at 45° on one side, fill light on the opposite side at lower intensity. This creates depth while keeping the face well-lit.",
            answerRu: "Основной свет под углом 45° с одной стороны, заполняющий свет с противоположной стороны с меньшей интенсивностью. Это создаёт глубину, сохраняя хорошее освещение лица.",
            answerKk: "Негізгі жарық бір жақтан 45° бұрышпен, толтырушы жарық қарсы жақтан төменірек қарқынмен. Бұл бетті жақсы жарықтандырылған күйде сақтай отырып тереңдік жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does the rule of thirds help you improve in your videos?",
            questionRu: "Что помогает улучшить правило третей в ваших видео?",
            questionKk: "Үштен бір ережесі бейнелеріңізде нені жақсартуға көмектеседі?",
            answer: "Composition — it helps create visually balanced and engaging frames by placing subjects along grid lines or intersections.",
            answerRu: "Композиция — она помогает создавать визуально сбалансированные и привлекательные кадры, размещая объекты вдоль линий сетки или на пересечениях.",
            answerKk: "Композиция — ол объектілерді тор сызықтары бойымен немесе қиылысу нүктелерінде орналастыру арқылы визуалды теңдестірілген және тартымды кадрлар жасауға көмектеседі.",
            hint: "Think about where the viewer's eye naturally goes in a well-composed image.",
            hintRu: "Подумайте, куда естественно направлен взгляд зрителя на хорошо скомпонованном изображении.",
            hintKk: "Жақсы композициялық кескінде көрерменнің көзі табиғи түрде қайда бағытталатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Name the three lights in a standard three-point lighting setup and their roles.",
            questionRu: "Назовите три источника света в стандартной трёхточечной схеме освещения и их роли.",
            questionKk: "Стандартты үш нүктелі жарықтандыру схемасындағы үш жарық көзін және олардың рөлдерін атаңыз.",
            answer: "Key light (main illumination, brightest), Fill light (softens shadows from key light, dimmer), Back light (separates subject from background, placed behind).",
            answerRu: "Основной свет (главное освещение, самый яркий), заполняющий свет (смягчает тени от основного света, более тусклый), контровой свет (отделяет объект от фона, размещается сзади).",
            answerKk: "Негізгі жарық (басты жарықтандыру, ең жарқыны), толтырушы жарық (негізгі жарықтан түскен көлеңкелерді жұмсартады, күңгірттеу), контр жарық (объектіні фоннан бөледі, артына қойылады).",
            hint: "Each light solves a specific problem: darkness, harsh shadows, or flat-looking footage.",
            hintRu: "Каждый источник света решает определённую проблему: темноту, жёсткие тени или плоское изображение.",
            hintKk: "Әрбір жарық көзі белгілі бір мәселені шешеді: қараңғылық, қатты көлеңкелер немесе жалпақ кескін.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are filming outdoors at noon with harsh overhead sunlight creating strong shadows under your subject's eyes. You have no artificial lights. How do you fix this?",
            questionRu: "Вы снимаете на улице в полдень, и яркое верхнее солнце создаёт сильные тени под глазами объекта. Искусственного света нет. Как это исправить?",
            questionKk: "Түскі уақытта сыртта түсіріп жатырсыз, қатты жоғарыдан түскен күн сәулесі адамның көздерінің астында күшті көлеңке жасайды. Жасанды жарық жоқ. Мұны қалай түзетесіз?",
            answer: "Move the subject to open shade (under a tree or awning) for even, diffused light. Alternatively, use a white poster board or reflector to bounce light upward into the shadow areas under the eyes. You can also reposition the subject so the sun is at a lower angle to their face.",
            answerRu: "Переместите объект в открытую тень (под дерево или навес) для равномерного, рассеянного света. Также можно использовать белый постер или отражатель, чтобы направить свет вверх в теневые области под глазами. Можно также перепозиционировать объект так, чтобы солнце падало на лицо под более низким углом.",
            answerKk: "Объектіні бірқалыпты, шашыраңқы жарық үшін ашық көлеңкеге (ағаш немесе көлеңке астына) жылжытыңыз. Балама ретінде, көздің астындағы көлеңке аймақтарына жарықты жоғары қарай шағылыстыру үшін ақ постер тақтасын немесе рефлекторды қолданыңыз. Сондай-ақ, күн адамның бетіне төменірек бұрышпен түсетіндей объектіні қайта орналастыруға болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Video Editing",
        titleRu: "Монтаж видео",
        titleKk: "Бейне монтаждау",
        content: "Video editing transforms raw footage into a polished story through cutting, arranging, and timing clips. Key techniques include J-cuts and L-cuts for smooth audio transitions, jump cuts for energy, and match cuts for visual storytelling. Understanding timeline-based editing with tracks for video, audio, and effects is essential for any editing software.",
        contentRu: "Монтаж видео превращает необработанные кадры в завершённую историю через нарезку, компоновку и тайминг клипов. Ключевые техники включают J-cut и L-cut для плавных аудиопереходов, jump cut для энергичности и match cut для визуального повествования. Понимание монтажа на таймлайне с дорожками для видео, аудио и эффектов необходимо для работы в любом редакторе.",
        contentKk: "Бейне монтаждау шикі кадрларды кесу, орналастыру және клиптердің уақытын белгілеу арқылы аяқталған тарихқа айналдырады. Негізгі тәсілдерге тегіс аудио ауысулар үшін J-cut және L-cut, қуат үшін jump cut және визуалды баяндау үшін match cut жатады. Бейне, аудио және эффекттер жолағымен таймлайнға негізделген монтажды түсіну кез келген редактор үшін маңызды.",
        keyFormulas: [
          {
            formula: "J-cut: audio from next clip starts before its video appears",
            formulaRu: "J-cut: звук следующего клипа начинается раньше, чем появляется его видео",
            formulaKk: "J-cut: келесі клиптің дыбысы оның видеосы шыққанға дейін басталады",
            description: "Creates anticipation and smooth scene transitions",
            descriptionRu: "Создаёт ожидание и плавные переходы между сценами",
            descriptionKk: "Күтуді және тегіс сахна ауысуларын жасайды"
          }
        ],
        solvedExamples: [
          {
            question: "You have 20 minutes of raw interview footage and need to create a 3-minute highlight video. What editing approach should you use?",
            questionRu: "У вас 20 минут необработанного интервью, и нужно создать 3-минутное видео с лучшими моментами. Какой подход к монтажу использовать?",
            questionKk: "Сізде 20 минуттық шикі сұхбат бейнесі бар және 3 минуттық хайлайт бейне жасау керек. Қандай монтаждау тәсілін қолданасыз?",
            steps: [
              { en: "Watch all footage and mark the 5-7 strongest moments. Select clips that tell a complete mini-story.", ru: "Просмотрите весь материал и отметьте 5-7 самых сильных моментов. Выберите клипы, рассказывающие мини-историю.", kk: "Барлық материалды қарап, 5-7 ең күшті сәтті белгілеңіз. Толық шағын тарих айтатын клиптерді таңдаңыз." },
              { en: "Use jump cuts between selected clips and add L-cuts so the speaker's voice bridges visual transitions smoothly.", ru: "Используйте jump cut между выбранными клипами и L-cut, чтобы голос говорящего плавно связывал визуальные переходы.", kk: "Таңдалған клиптер арасында jump cut қолданып, спикердің дауысы визуалды ауысуларды тегіс байланыстыру үшін L-cut қосыңыз." }
            ],
            answer: "Mark best moments, cut to 5-7 key clips, use jump cuts for pacing and L-cuts for smooth audio transitions between scenes.",
            answerRu: "Отметьте лучшие моменты, смонтируйте 5-7 ключевых клипов, используйте jump cut для темпа и L-cut для плавных аудиопереходов между сценами.",
            answerKk: "Ең жақсы сәттерді белгілеңіз, 5-7 негізгі клипке дейін кесіңіз, қарқын үшін jump cut және сахналар арасындағы тегіс аудио ауысулар үшін L-cut қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a jump cut?",
            questionRu: "Что такое jump cut?",
            questionKk: "Jump cut дегеніміз не?",
            answer: "A jump cut is an edit that removes a section from the middle of a continuous shot, creating an abrupt jump forward in time. It adds energy and pace to videos.",
            answerRu: "Jump cut — это монтажный приём, который удаляет часть из середины непрерывного кадра, создавая резкий скачок вперёд во времени. Он придаёт видео энергию и темп.",
            answerKk: "Jump cut — үздіксіз кадрдың ортасынан бөлікті алып тастап, уақытта кенеттен алға секіру жасайтын монтаждау тәсілі. Ол бейнеге қуат пен қарқын қосады.",
            hint: "Think about what happens when you cut out the boring parts of a single continuous shot.",
            hintRu: "Подумайте, что происходит, когда вы вырезаете скучные части из одного непрерывного кадра.",
            hintKk: "Бір үздіксіз кадрдан жалықтыратын бөліктерді кесіп тастағанда не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Explain the difference between a J-cut and an L-cut.",
            questionRu: "Объясните разницу между J-cut и L-cut.",
            questionKk: "J-cut пен L-cut арасындағы айырмашылықты түсіндіріңіз.",
            answer: "In a J-cut, audio from the next scene starts playing before its video appears (audio leads). In an L-cut, audio from the current scene continues playing over the video of the next scene (audio lingers). Both create smoother transitions than hard cuts.",
            answerRu: "В J-cut аудио следующей сцены начинает звучать до появления её видео (аудио опережает). В L-cut аудио текущей сцены продолжает звучать поверх видео следующей сцены (аудио задерживается). Оба приёма создают более плавные переходы, чем жёсткая склейка.",
            answerKk: "J-cut-те келесі сахнаның аудиосы оның бейнесі пайда болмас бұрын ойнай бастайды (аудио озады). L-cut-те ағымдағы сахнаның аудиосы келесі сахнаның бейнесінің үстінде ойнай береді (аудио кешігеді). Екеуі де қатты кесуге қарағанда тегісірек ауысулар жасайды.",
            hint: "The names come from the shape the clips make on the timeline — like the letters J and L.",
            hintRu: "Названия происходят от формы клипов на таймлайне — как буквы J и L.",
            hintKk: "Атаулар таймлайндағы клиптердің пішінінен шыққан — J және L әріптері сияқты.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are editing a 5-minute short film. The pacing feels slow in the middle section (1:30 - 3:00). What three editing techniques could you apply to increase energy without reshooting?",
            questionRu: "Вы монтируете 5-минутный короткометражный фильм. Темп ощущается медленным в средней части (1:30 - 3:00). Какие три техники монтажа помогут увеличить энергию без пересъёмки?",
            questionKk: "5 минуттық қысқа фильм монтаждап жатырсыз. Ортаңғы бөлімде (1:30 - 3:00) қарқын баяу сезіледі. Қайта түсірмей қуатты арттыру үшін қандай үш монтаждау тәсілін қолдануға болады?",
            answer: "1) Use jump cuts to trim pauses and dead space within shots. 2) Add cutaway shots (B-roll) to break up long static shots and add visual variety. 3) Shorten clip durations and increase cut frequency — faster cuts create a sense of urgency and energy.",
            answerRu: "1) Используйте jump cut, чтобы убрать паузы и мёртвые зоны внутри кадров. 2) Добавьте перебивочные кадры (B-roll), чтобы разбить длинные статичные кадры и добавить визуальное разнообразие. 3) Сократите длительность клипов и увеличьте частоту склеек — более быстрые склейки создают ощущение срочности и энергии.",
            answerKk: "1) Кадрлар ішіндегі кідірістер мен бос аймақтарды қысқарту үшін jump cut қолданыңыз. 2) Ұзақ статикалық кадрларды бөлу және визуалды әртүрлілік қосу үшін қосымша кадрлар (B-roll) қосыңыз. 3) Клип ұзақтығын қысқартып, кесу жиілігін арттырыңыз — жылдамырақ кесулер асығыстық пен қуат сезімін тудырады.",
            xp: 20
          }
        ]
      },
      {
        title: "Audio & Music",
        titleRu: "Аудио и музыка",
        titleKk: "Аудио және музыка",
        content: "Audio quality can make or break a video — viewers tolerate imperfect visuals but not bad sound. Key concepts include sample rate (44.1 kHz for standard audio), bit depth for dynamic range, and the difference between lossy (MP3) and lossless (WAV) formats. Layering background music, sound effects, and voice creates a rich audio landscape.",
        contentRu: "Качество аудио может решить судьбу видео — зрители терпят несовершенные визуальные эффекты, но не плохой звук. Ключевые понятия включают частоту дискретизации (44,1 кГц для стандартного аудио), битовую глубину для динамического диапазона и разницу между форматами с потерями (MP3) и без потерь (WAV). Наложение фоновой музыки, звуковых эффектов и голоса создаёт богатую звуковую картину.",
        contentKk: "Аудио сапасы бейненің тағдырын шеше алады — көрерменлер бейненің кемшіліктерін көтере алады, бірақ нашар дыбысты көтере алмайды. Негізгі түсініктерге дискретизация жиілігі (стандартты аудио үшін 44,1 кГц), динамикалық диапазон үшін бит тереңдігі және жоғалтумен (MP3) және жоғалтусыз (WAV) форматтар арасындағы айырмашылық жатады. Фондық музыка, дыбыстық эффекттер және дауысты қабаттау бай аудио ландшафтын жасайды.",
        keyFormulas: [
          {
            formula: "Voice audio level: -12 dB to -6 dB; Music bed: -20 dB to -15 dB",
            formulaRu: "Уровень голоса: от -12 дБ до -6 дБ; Музыкальная подложка: от -20 дБ до -15 дБ",
            formulaKk: "Дауыс деңгейі: -12 дБ - -6 дБ; Музыкалық фон: -20 дБ - -15 дБ",
            description: "Standard audio levels ensure voice is always clearly heard above background music",
            descriptionRu: "Стандартные уровни аудио обеспечивают, что голос всегда чётко слышен над фоновой музыкой",
            descriptionKk: "Стандартты аудио деңгейлері дауыстың фондық музыкадан әрқашан анық естілуін қамтамасыз етеді"
          }
        ],
        solvedExamples: [
          {
            question: "Your recorded voice peaks at -3 dB and the background music is at -10 dB. The voice sounds drowned out. How do you fix the mix?",
            questionRu: "Пик вашего голоса на -3 дБ, а фоновая музыка на -10 дБ. Голос звучит заглушённо. Как исправить микс?",
            questionKk: "Дауысыңыздың шыңы -3 дБ, ал фондық музыка -10 дБ. Дауыс басылып қалады. Миксті қалай түзетесіз?",
            steps: [
              { en: "The gap between voice (-3 dB) and music (-10 dB) is only 7 dB — too small. Voice should be 6-14 dB louder than music.", ru: "Разница между голосом (-3 дБ) и музыкой (-10 дБ) всего 7 дБ — слишком мало. Голос должен быть на 6-14 дБ громче музыки.", kk: "Дауыс (-3 дБ) пен музыка (-10 дБ) арасындағы айырмашылық тек 7 дБ — тым аз. Дауыс музыкадан 6-14 дБ қаттырақ болуы керек." },
              { en: "Lower the music to -20 dB and reduce voice to -6 dB. Now the gap is 14 dB and both levels are in safe ranges.", ru: "Понизьте музыку до -20 дБ и уменьшите голос до -6 дБ. Разница 14 дБ, оба уровня в безопасных диапазонах.", kk: "Музыканы -20 дБ-ге дейін төмендетіңіз және дауысты -6 дБ-ге дейін азайтыңыз. Енді айырмашылық 14 дБ және екі деңгей де қауіпсіз аралықта." }
            ],
            answer: "Lower music to -20 dB and set voice to -6 dB, creating a 14 dB gap that keeps voice clear.",
            answerRu: "Понизьте музыку до -20 дБ и установите голос на -6 дБ, создав разницу в 14 дБ, которая сохраняет чёткость голоса.",
            answerKk: "Музыканы -20 дБ-ге дейін төмендетіп, дауысты -6 дБ-ге орнатыңыз, бұл дауыстың анықтығын сақтайтын 14 дБ айырмашылық жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Which do viewers find more distracting — slightly blurry video or muffled, unclear audio?",
            questionRu: "Что зрители считают более отвлекающим — слегка размытое видео или приглушённый, нечёткий звук?",
            questionKk: "Көрерменлерді не көбірек алаңдатады — аздап бұлдыр бейне ме әлде басылған, анық емес аудио ма?",
            answer: "Muffled, unclear audio. Viewers will tolerate imperfect visuals but poor audio causes them to stop watching.",
            answerRu: "Приглушённый, нечёткий звук. Зрители терпят несовершенную картинку, но плохой звук заставляет их прекратить просмотр.",
            answerKk: "Басылған, анық емес дыбыс. Көрерменлер жетілмеген бейнені көтере алады, бірақ нашар дыбыс оларды қарауды тоқтатуға мәжбүр етеді.",
            hint: "Think about watching a video where you cannot understand what the person is saying.",
            hintRu: "Представьте просмотр видео, где невозможно разобрать речь.",
            hintKk: "Адамның не айтып тұрғанын түсіне алмайтын бейнені қарауды ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the recommended dB gap between voice and background music, and why?",
            questionRu: "Какова рекомендуемая разница в дБ между голосом и фоновой музыкой и почему?",
            questionKk: "Дауыс пен фондық музыка арасындағы ұсынылатын дБ айырмашылығы қандай және неліктен?",
            answer: "6-14 dB gap with voice louder. This ensures voice is clearly audible over the music without making the music inaudible. Voice typically at -12 to -6 dB, music at -20 to -15 dB.",
            answerRu: "Разница 6-14 дБ, голос громче. Это обеспечивает чёткую слышимость голоса поверх музыки, не делая музыку неслышимой. Голос обычно на -12 до -6 дБ, музыка на -20 до -15 дБ.",
            answerKk: "6-14 дБ айырмашылық, дауыс қаттырақ. Бұл музыканы естілмейтін етпей, дауыстың музыка үстінде анық естілуін қамтамасыз етеді. Дауыс әдетте -12-ден -6 дБ-ге дейін, музыка -20-дан -15 дБ-ге дейін.",
            hint: "The voice should always be the dominant audio element when someone is speaking.",
            hintRu: "Голос всегда должен быть доминирующим элементом аудио, когда кто-то говорит.",
            hintKk: "Біреу сөйлеп тұрғанда дауыс әрқашан басым аудио элемент болуы керек.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are editing a podcast episode. The guest recorded their audio in a noisy cafe using a laptop microphone. The voice is at -8 dB but background noise is at -15 dB. What steps would you take to improve the audio quality?",
            questionRu: "Вы монтируете эпизод подкаста. Гость записал аудио в шумном кафе на микрофон ноутбука. Голос на -8 дБ, но фоновый шум на -15 дБ. Какие шаги предпримете для улучшения качества?",
            questionKk: "Подкаст эпизодын монтаждап жатырсыз. Қонақ аудиосын шулы кафеде ноутбук микрофонымен жазған. Дауыс -8 дБ, бірақ фондық шу -15 дБ. Аудио сапасын жақсарту үшін қандай қадамдар жасайсыз?",
            answer: "1) Apply noise reduction to sample and remove the cafe background noise. 2) Use a high-pass filter to cut low-frequency rumble below 80 Hz. 3) Apply compression to even out the voice volume. 4) Use EQ to boost clarity frequencies (2-5 kHz) for the voice. 5) Normalize the final audio so voice peaks at -6 dB.",
            answerRu: "1) Примените шумоподавление, чтобы взять образец и удалить фоновый шум кафе. 2) Используйте фильтр верхних частот, чтобы срезать низкочастотный гул ниже 80 Гц. 3) Примените компрессию, чтобы выровнять громкость голоса. 4) Используйте эквалайзер, чтобы усилить частоты чёткости (2-5 кГц) для голоса. 5) Нормализуйте итоговое аудио так, чтобы пики голоса были на -6 дБ.",
            answerKk: "1) Кафенің фондық шуын алып тастау үшін үлгіге шуды азайтуды қолданыңыз. 2) 80 Гц-тен төмен төмен жиілікті гуілді кесу үшін жоғары жиілік өткізетін фильтр қолданыңыз. 3) Дауыс дауыстылығын теңестіру үшін компрессия қолданыңыз. 4) Дауыс үшін анықтық жиіліктерін (2-5 кГц) күшейту үшін эквалайзер қолданыңыз. 5) Дауыс шыңдары -6 дБ болатындай түпкілікті аудионы нормализациялаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "YouTube Content",
        titleRu: "Контент для YouTube",
        titleKk: "YouTube контенті",
        content: "Creating YouTube content requires understanding the platform's unique ecosystem — from search-optimized titles and descriptions to audience retention strategies. Successful creators plan their content calendar, understand analytics like CTR (click-through rate) and average view duration, and structure videos with hooks, value delivery, and clear calls to action.",
        contentRu: "Создание контента для YouTube требует понимания уникальной экосистемы платформы — от оптимизированных для поиска заголовков и описаний до стратегий удержания аудитории. Успешные авторы планируют контент-календарь, анализируют метрики (CTR и среднюю продолжительность просмотра) и структурируют видео с хуком, полезным контентом и чётким призывом к действию.",
        contentKk: "YouTube контентін жасау платформаның бірегей экожүйесін түсінуді талап етеді — іздеуге оңтайландырылған тақырыптар мен сипаттамалардан аудиторияны ұстап тұру стратегияларына дейін. Табысты авторлар контент күнтізбесін жоспарлайды, CTR және орташа қарау ұзақтығы сияқты метрикаларды талдайды және бейнелерді хук, пайдалы контент және нақты әрекетке шақырумен құрылымдайды.",
        keyFormulas: [
          {
            formula: "CTR = (Clicks ÷ Impressions) × 100%",
            formulaRu: "CTR = (Клики ÷ Показы) × 100%",
            formulaKk: "CTR = (Кликтер ÷ Көрсетілімдер) × 100%",
            description: "Measures how effectively your thumbnail and title attract clicks",
            descriptionRu: "Измеряет, насколько эффективно ваш превью и заголовок привлекают клики",
            descriptionKk: "Нобайыңыз бен тақырыбыңыздың кликтерді қаншалықты тиімді тартатынын өлшейді"
          }
        ],
        solvedExamples: [
          {
            question: "Your video got 50,000 impressions and 2,500 clicks. What is your CTR and is it good for YouTube?",
            questionRu: "Ваше видео получило 50 000 показов и 2 500 кликов. Каков ваш CTR и хорош ли он для YouTube?",
            questionKk: "Бейнеңіз 50 000 көрсетілім және 2 500 клик алды. CTR қандай және YouTube үшін жақсы ма?",
            steps: [
              { en: "Calculate CTR: (2,500 ÷ 50,000) × 100% = 5%.", ru: "Рассчитайте CTR: (2 500 ÷ 50 000) × 100% = 5%.", kk: "CTR есептеңіз: (2 500 ÷ 50 000) × 100% = 5%." },
              { en: "Average YouTube CTR is 2-10%. A 5% CTR is solid — right in the middle of the healthy range.", ru: "Средний CTR на YouTube 2-10%. CTR 5% — это хороший результат, в середине здорового диапазона.", kk: "YouTube-тегі орташа CTR 2-10%. 5% CTR — жақсы нәтиже, сау диапазонның ортасында." }
            ],
            answer: "CTR is 5%, which is a solid result within YouTube's typical 2-10% range.",
            answerRu: "CTR составляет 5% — это хороший результат в пределах типичного для YouTube диапазона 2-10%.",
            answerKk: "CTR 5% құрайды, бұл YouTube үшін әдеттегі 2-10% диапазонындағы жақсы нәтиже."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does CTR stand for and what does it measure?",
            questionRu: "Что означает CTR и что он измеряет?",
            questionKk: "CTR нені білдіреді және нені өлшейді?",
            answer: "CTR stands for Click-Through Rate. It measures the percentage of people who clicked on your video after seeing the thumbnail and title in their feed.",
            answerRu: "CTR означает Click-Through Rate (показатель кликабельности). Он измеряет процент людей, которые нажали на ваше видео, увидев превью и заголовок в своей ленте.",
            answerKk: "CTR — Click-Through Rate (басу көрсеткіші) дегенді білдіреді. Ол лентада нобай мен тақырыпты көргеннен кейін бейнеңізді басқан адамдардың пайызын өлшейді.",
            hint: "It is about the ratio of people who see your video to those who actually click on it.",
            hintRu: "Это соотношение людей, которые видят видео, к тем, кто реально на него нажимает.",
            hintKk: "Бұл бейнені көретін адамдар мен оны шынымен басатын адамдардың арақатынасы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A video got 120,000 impressions and a CTR of 3.5%. How many clicks did it receive?",
            questionRu: "Видео получило 120 000 показов и CTR 3,5%. Сколько кликов оно получило?",
            questionKk: "Бейне 120 000 көрсетілім және 3,5% CTR алды. Қанша клик алды?",
            answer: "4,200 clicks (120,000 × 0.035 = 4,200).",
            answerRu: "4 200 кликов (120 000 × 0,035 = 4 200).",
            answerKk: "4 200 клик (120 000 × 0,035 = 4 200).",
            hint: "Reverse the CTR formula: Clicks = Impressions × (CTR ÷ 100).",
            hintRu: "Используйте обратную формулу CTR: Клики = Показы × (CTR ÷ 100).",
            hintKk: "CTR формуласын кері қолданыңыз: Кликтер = Көрсетілімдер × (CTR ÷ 100).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You run a YouTube channel. Video A has 200,000 impressions with 4% CTR and 40% average view duration on a 10-minute video. Video B has 50,000 impressions with 8% CTR and 70% average view duration on a 10-minute video. Which video is performing better overall and why?",
            questionRu: "У вас YouTube-канал. Видео A: 200 000 показов, CTR 4%, средняя продолжительность просмотра 40% для 10-минутного видео. Видео B: 50 000 показов, CTR 8%, средняя продолжительность просмотра 70% для 10-минутного видео. Какое видео показывает лучшие результаты и почему?",
            questionKk: "YouTube арнаңыз бар. A бейне: 200 000 көрсетілім, CTR 4%, 10 минуттық бейнеде орташа қарау ұзақтығы 40%. B бейне: 50 000 көрсетілім, CTR 8%, 10 минуттық бейнеде орташа қарау ұзақтығы 70%. Қай бейне жалпы жақсырақ нәтиже көрсетеді және неліктен?",
            answer: "Video B is performing better overall. Although Video A has more total views (8,000 vs 4,000), Video B has double the CTR (8% vs 4%), meaning its thumbnail/title resonates better. Video B also has 70% retention (7 min) vs 40% (4 min), meaning viewers find it more engaging. YouTube's algorithm favors high CTR and retention, so Video B will likely get promoted more over time.",
            answerRu: "Видео B показывает лучшие результаты в целом. Хотя у видео A больше общих просмотров (8 000 против 4 000), у видео B в два раза выше CTR (8% против 4%), что означает, что его превью/заголовок лучше находит отклик. У видео B также удержание 70% (7 мин) против 40% (4 мин), значит зрителям оно интереснее. Алгоритм YouTube отдаёт предпочтение высокому CTR и удержанию, поэтому видео B со временем будет продвигаться активнее.",
            answerKk: "B бейне жалпы жақсырақ нәтиже көрсетеді. A бейненің жалпы қаралымы көбірек болса да (8 000-ға қарсы 4 000), B бейненің CTR-і екі есе жоғары (8%-ға қарсы 4%), бұл оның нобайы/тақырыбы жақсырақ жауап табатынын білдіреді. Сондай-ақ B бейнеде 70% ұстап тұру (7 мин) 40%-ға (4 мин) қарсы, яғни көрерменлерге қызықтырақ. YouTube алгоритмі жоғары CTR мен ұстап тұруды жақсы көреді, сондықтан B бейне уақыт өте көбірек ілгерілейтін болады.",
            xp: 20
          }
        ]
      },
      {
        title: "Intro 3D Modeling",
        titleRu: "Введение в 3D-моделирование",
        titleKk: "3D модельдеуге кіріспе",
        content: "3D modeling creates virtual three-dimensional objects using specialized software like Blender. Models are built from vertices, edges, and faces that form a mesh. Understanding the difference between polygon modeling (using flat faces) and sculpting (shaping like digital clay) is fundamental for choosing the right workflow for different projects.",
        contentRu: "3D-моделирование создаёт виртуальные трёхмерные объекты с помощью специализированного ПО вроде Blender. Модели строятся из вершин, рёбер и граней, образующих сетку (mesh). Понимание разницы между полигональным моделированием (с использованием плоских граней) и скульптингом (лепка как из цифровой глины) важно для выбора правильного подхода к разным проектам.",
        contentKk: "3D модельдеу Blender сияқты мамандандырылған бағдарламалық жасақтаманы пайдаланып виртуалды үш өлшемді объектілер жасайды. Модельдер mesh құрайтын төбелерден, қабырғалардан және беттерден жасалады. Полигонды модельдеу (жалпақ беттерді пайдалану) мен мүсіндеу (сандық балшықтай пішін беру) арасындағы айырмашылықты түсіну әртүрлі жобалар үшін дұрыс тәсілді таңдауда маңызды.",
        keyFormulas: [
          {
            formula: "Mesh = Vertices + Edges + Faces",
            formulaRu: "Меш = Вершины + Рёбра + Грани",
            formulaKk: "Меш = Төбелер + Қырлар + Беттер",
            description: "The three building blocks of every 3D model",
            descriptionRu: "Три строительных блока каждой 3D-модели",
            descriptionKk: "Әрбір 3D модельдің үш құрылыс блогы"
          }
        ],
        solvedExamples: [
          {
            question: "You need to create a 3D coffee mug. Should you use polygon modeling or sculpting, and what basic shape would you start with?",
            questionRu: "Нужно создать 3D-кружку для кофе. Использовать полигональное моделирование или скульптинг, и с какой базовой формы начать?",
            questionKk: "3D кофе кружкасын жасау керек. Полигонды модельдеу немесе мүсіндеу қолданасыз ба, және қай негізгі пішіннен бастайсыз?",
            steps: [
              { en: "A mug has precise geometric shapes (cylinder body, torus handle) — this suits polygon modeling over sculpting.", ru: "Кружка имеет точные геометрические формы (цилиндрическое тело, ручка-тор) — это подходит для полигонального моделирования.", kk: "Кружканың дәл геометриялық пішіндері бар (цилиндрлік корпус, тор тұтқасы) — бұл полигонды модельдеуге жарайды." },
              { en: "Start with a cylinder primitive, hollow out the top, and extrude a torus shape for the handle.", ru: "Начните с цилиндра, сделайте углубление сверху и экструдируйте тор для ручки.", kk: "Цилиндр примитивінен бастаңыз, жоғарғы жағын ойыңыз және тұтқа үшін тор пішінін экструдтаңыз." }
            ],
            answer: "Use polygon modeling starting with a cylinder primitive. Hollow the top and extrude a torus for the handle.",
            answerRu: "Используйте полигональное моделирование, начиная с примитива цилиндра. Сделайте углубление сверху и экструдируйте тор для ручки.",
            answerKk: "Цилиндр примитивінен бастап полигонды модельдеуді қолданыңыз. Жоғарғы жағын ойып, тұтқа үшін тор пішінін экструдтаңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What three elements make up a 3D mesh?",
            questionRu: "Из каких трёх элементов состоит 3D-сетка (mesh)?",
            questionKk: "3D mesh қандай үш элементтен тұрады?",
            answer: "Vertices (points), edges (lines connecting vertices), and faces (flat surfaces enclosed by edges).",
            answerRu: "Вершины (точки), рёбра (линии, соединяющие вершины) и грани (плоские поверхности, ограниченные рёбрами).",
            answerKk: "Төбелер (нүктелер), қабырғалар (төбелерді байланыстыратын сызықтар) және беттер (қабырғалармен шектелген жалпақ беттер).",
            hint: "Think of points, lines, and flat surfaces.",
            hintRu: "Думайте о точках, линиях и плоских поверхностях.",
            hintKk: "Нүктелер, сызықтар және жалпақ беттер туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "When would you choose sculpting over polygon modeling?",
            questionRu: "Когда стоит выбрать скульптинг вместо полигонального моделирования?",
            questionKk: "Полигонды модельдеу орнына мүсіндеуді қашан таңдар едіңіз?",
            answer: "Choose sculpting for organic, irregular shapes like characters, animals, or natural objects (rocks, trees) where smooth curves and fine details are important. Polygon modeling is better for hard-surface objects with precise geometry.",
            answerRu: "Выбирайте скульптинг для органических, неправильных форм — персонажей, животных или природных объектов (камни, деревья), где важны плавные изгибы и мелкие детали. Полигональное моделирование лучше подходит для объектов с твёрдой поверхностью и точной геометрией.",
            answerKk: "Мүсіндеуді кейіпкерлер, жануарлар немесе табиғи объектілер (тастар, ағаштар) сияқты органикалық, тұрақсыз пішіндер үшін таңдаңыз, мұнда тегіс қисықтар мен нәзік детальдар маңызды. Полигонды модельдеу дәл геометриясы бар қатты беттік объектілер үшін жақсырақ.",
            hint: "Think about the difference between carving a statue and building with blocks.",
            hintRu: "Подумайте о разнице между лепкой статуи и строительством из блоков.",
            hintKk: "Мүсін жасау мен блоктардан құрастыру арасындағы айырмашылықты ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are creating a 3D game asset of a medieval sword. Describe the modeling workflow step by step, including which primitive shapes you would start with and what operations you would use.",
            questionRu: "Вы создаёте 3D-ассет средневекового меча для игры. Опишите рабочий процесс моделирования поэтапно, включая начальные примитивы и используемые операции.",
            questionKk: "Ойынға арналған ортағасырлық қылыштың 3D ассетін жасап жатырсыз. Бастапқы примитивтер мен қолданылатын операцияларды қоса, модельдеу жұмыс процесін кезеңдеп сипаттаңыз.",
            answer: "1) Start with a cube, scale it into a flat rectangular shape for the blade. 2) Use loop cuts to add edge rings, then taper the blade toward the tip using vertex scaling. 3) Add a cylinder for the crossguard, scale and position it perpendicular to the blade. 4) Add another cylinder for the grip/handle below the crossguard. 5) Add a sphere or flattened cube for the pommel. 6) Apply a subdivision surface modifier for smoother edges, then add edge creases where you want sharp angles.",
            answerRu: "1) Начните с куба, растяните его в плоскую прямоугольную форму для клинка. 2) Используйте loop cuts, чтобы добавить кольца рёбер, затем сузьте клинок к острию с помощью масштабирования вершин. 3) Добавьте цилиндр для гарды, отмасштабируйте и разместите его перпендикулярно клинку. 4) Добавьте ещё один цилиндр для рукояти под гардой. 5) Добавьте сферу или сплюснутый куб для навершия. 6) Примените модификатор subdivision surface для более гладких краёв, затем добавьте edge creases там, где нужны резкие углы.",
            answerKk: "1) Куб алыңыз, оны клинок үшін жалпақ тіктөртбұрышты пішінге созыңыз. 2) Қабырға сақиналарын қосу үшін loop cuts қолданыңыз, содан кейін төбелерді масштабтау арқылы клинокты ұшына қарай жіңішкертіңіз. 3) Гарда үшін цилиндр қосыңыз, оны клинокке перпендикуляр етіп масштабтап орналастырыңыз. 4) Гарданың астына тұтқа үшін тағы бір цилиндр қосыңыз. 5) Бас жағы үшін сфера немесе жалпақтатылған куб қосыңыз. 6) Тегісірек шеттер үшін subdivision surface модификаторын қолданыңыз, содан кейін өткір бұрыштар керек жерлерге edge creases қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Motion Graphics",
        titleRu: "Моушн-графика",
        titleKk: "Моушн-графика",
        content: "Motion graphics bring static designs to life through animation — think animated logos, title sequences, and explainer videos. Unlike character animation, motion graphics focuses on moving text, shapes, and icons to communicate information dynamically. Keyframe animation is the core technique: you set starting and ending positions, and the software interpolates the movement between them.",
        contentRu: "Моушн-графика оживляет статичные дизайны через анимацию — анимированные логотипы, титры и объясняющие видео. В отличие от персонажной анимации, моушн-графика фокусируется на движении текста, фигур и иконок для динамичной подачи информации. Ключевая техника — анимация по ключевым кадрам: вы задаёте начальную и конечную позиции, а программа интерполирует движение между ними.",
        contentKk: "Моушн-графика статикалық дизайндарды анимация арқылы жандандырады — анимациялық логотиптер, титр тізбектері және түсіндірме бейнелер. Кейіпкер анимациясынан айырмашылығы, моушн-графика ақпаратты динамикалық түрде жеткізу үшін мәтін, пішіндер және белгішелердің қозғалысына назар аударады. Негізгі кілт кадр анимациясы: бастапқы және соңғы позицияларды орнатасыз, ал бағдарлама олардың арасындағы қозғалысты интерполяциялайды.",
        keyFormulas: [
          {
            formula: "Keyframe animation: Start state (time A) → End state (time B) → Software interpolates",
            formulaRu: "Анимация по ключевым кадрам: Начальное состояние (время A) → Конечное состояние (время B) → Программа интерполирует",
            formulaKk: "Кілт кадрлы анимация: Бастапқы күй (A уақыты) → Соңғы күй (B уақыты) → Бағдарлама интерполяциялайды",
            description: "The fundamental principle behind all motion graphics animation",
            descriptionRu: "Фундаментальный принцип всей анимации в моушн-графике",
            descriptionKk: "Барлық моушн-графика анимациясының негізгі принципі"
          }
        ],
        solvedExamples: [
          {
            question: "You need to animate a logo appearing on screen: it should fade in while scaling up from 50% to 100% over 1 second. What keyframes do you set?",
            questionRu: "Нужно анимировать появление логотипа: он должен плавно появиться, увеличиваясь с 50% до 100% за 1 секунду. Какие ключевые кадры задать?",
            questionKk: "Логотиптің экранда пайда болуын анимациялау керек: ол 1 секунд ішінде 50%-дан 100%-ға дейін ұлғая отырып біртіндеп пайда болуы керек. Қандай кілт кадрлар орнатасыз?",
            steps: [
              { en: "At frame 0 (start): set opacity to 0% and scale to 50%.", ru: "На кадре 0 (начало): прозрачность 0%, масштаб 50%.", kk: "0 кадрда (басы): мөлдірлік 0%, масштаб 50%." },
              { en: "At frame 30 (1 second at 30fps): set opacity to 100% and scale to 100%. Apply ease-out for a natural deceleration.", ru: "На кадре 30 (1 секунда при 30fps): прозрачность 100%, масштаб 100%. Примените ease-out для естественного замедления.", kk: "30 кадрда (30fps-те 1 секунд): мөлдірлік 100%, масштаб 100%. Табиғи баяулау үшін ease-out қолданыңыз." }
            ],
            answer: "Frame 0: opacity 0%, scale 50%. Frame 30: opacity 100%, scale 100%. Use ease-out interpolation for smooth deceleration.",
            answerRu: "Кадр 0: прозрачность 0%, масштаб 50%. Кадр 30: прозрачность 100%, масштаб 100%. Используйте интерполяцию ease-out для плавного замедления.",
            answerKk: "0 кадр: мөлдірлік 0%, масштаб 50%. 30 кадр: мөлдірлік 100%, масштаб 100%. Тегіс баяулау үшін ease-out интерполяциясын қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a keyframe in motion graphics?",
            questionRu: "Что такое ключевой кадр в моушн-графике?",
            questionKk: "Моушн-графикадағы кілт кадр дегеніміз не?",
            answer: "A keyframe marks a specific point in time where you define a property value (position, scale, opacity, etc.). The software automatically creates smooth transitions between keyframes.",
            answerRu: "Ключевой кадр отмечает конкретный момент времени, где вы задаёте значение свойства (позицию, масштаб, прозрачность и т.д.). Программа автоматически создаёт плавные переходы между ключевыми кадрами.",
            answerKk: "Кілт кадр қасиет мәнін (позиция, масштаб, мөлдірлік және т.б.) анықтайтын нақты уақыт сәтін белгілейді. Бағдарлама кілт кадрлар арасында автоматты түрде тегіс ауысулар жасайды.",
            hint: "Think of it as a bookmark in time that tells the software what something should look like at that moment.",
            hintRu: "Думайте об этом как о закладке во времени, которая указывает программе, как объект должен выглядеть в этот момент.",
            hintKk: "Бұл бағдарламаға сол сәтте объектінің қандай болу керектігін көрсететін уақыттағы бетбелгі деп ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the difference between linear and ease-out interpolation between keyframes?",
            questionRu: "В чём разница между линейной и ease-out интерполяцией между ключевыми кадрами?",
            questionKk: "Кілт кадрлар арасындағы сызықтық және ease-out интерполяция арасындағы айырмашылық қандай?",
            answer: "Linear interpolation moves at a constant speed between keyframes, which can look mechanical and robotic. Ease-out starts at full speed and gradually slows down before reaching the end keyframe, which looks more natural — like a ball rolling to a stop.",
            answerRu: "Линейная интерполяция движется с постоянной скоростью между ключевыми кадрами, что может выглядеть механически и неестественно. Ease-out начинается на полной скорости и постепенно замедляется перед достижением конечного ключевого кадра, что выглядит естественнее — как мяч, катящийся до остановки.",
            answerKk: "Сызықтық интерполяция кілт кадрлар арасында тұрақты жылдамдықпен қозғалады, бұл механикалық және роботтық көрінуі мүмкін. Ease-out толық жылдамдықтан басталып, соңғы кілт кадрға жеткенше біртіндеп баяулайды, бұл табиғирақ көрінеді — тоқтауға дейін домалап бара жатқан доп сияқты.",
            hint: "Think about how real objects move — they rarely start and stop instantly.",
            hintRu: "Подумайте, как двигаются реальные объекты — они редко начинают и останавливаются мгновенно.",
            hintKk: "Нақты объектілердің қалай қозғалатынын ойлаңыз — олар сирек лезде басталады және тоқтайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to create a 5-second animated title sequence with three elements: a background color wipe, text sliding in from the left, and a logo fading in. Describe the keyframe timing to make them appear sequentially with slight overlap.",
            questionRu: "Нужно создать 5-секундный анимированный титр с тремя элементами: цветовая заливка фона, текст, выезжающий слева, и логотип с плавным появлением. Опишите тайминг ключевых кадров для последовательного появления с небольшим наложением.",
            questionKk: "Үш элементті 5 секундтық анимациялық титр тізбегін жасау керек: фон түсі, солдан сырғып кіретін мәтін және біртіндеп пайда болатын логотип. Олардың аздап қабаттасып бірізді пайда болуы үшін кілт кадрлар уақытын сипаттаңыз.",
            answer: "Background wipe: frames 0-30 (0-1s), color fills from left to right. Text slide: frames 20-60 (0.67-2s), starts before wipe ends for overlap, text slides in from off-screen left to center with ease-out. Logo fade: frames 50-90 (1.67-3s), starts before text finishes for overlap, opacity 0% to 100% with ease-in-out. Hold everything visible from frame 90-150 (3-5s) for readability.",
            answerRu: "Заливка фона: кадры 0-30 (0-1с), цвет заполняется слева направо. Выезд текста: кадры 20-60 (0,67-2с), начинается до завершения заливки для наложения, текст выезжает слева за кадром к центру с ease-out. Появление логотипа: кадры 50-90 (1,67-3с), начинается до завершения текста для наложения, прозрачность от 0% до 100% с ease-in-out. Всё остаётся видимым с кадра 90-150 (3-5с) для читаемости.",
            answerKk: "Фон заливкасы: 0-30 кадр (0-1с), түс солдан оңға қарай толады. Мәтін сырғуы: 20-60 кадр (0,67-2с), қабаттасу үшін заливка аяқталмай басталады, мәтін экраннан тыс солдан орталыққа ease-out-пен сырғып кіреді. Логотип пайда болуы: 50-90 кадр (1,67-3с), қабаттасу үшін мәтін аяқталмай басталады, мөлдірлік 0%-дан 100%-ға ease-in-out-пен. Оқылымдылық үшін бәрі 90-150 кадрда (3-5с) көрінетін болып қалады.",
            xp: 20
          }
        ]
      },
      {
        title: "Screen Recording",
        titleRu: "Запись экрана",
        titleKk: "Экранды жазу",
        content: "Screen recording captures your computer or phone screen activity for tutorials, demos, and presentations. Key factors include resolution (1080p minimum for clarity), frame rate (30fps for standard, 60fps for smooth motion), and audio capture from both microphone and system. Clean desktop setup and cursor visibility settings significantly improve the viewer experience.",
        contentRu: "Запись экрана фиксирует действия на экране компьютера или телефона для создания обучающих видео, демонстраций и презентаций. Ключевые факторы: разрешение (минимум 1080p для чёткости), частота кадров (30fps для стандартного, 60fps для плавного движения) и захват аудио с микрофона и системы. Чистый рабочий стол и настройки видимости курсора значительно улучшают впечатления зрителя.",
        contentKk: "Экранды жазу оқу бейнелері, демонстрациялар және презентациялар үшін компьютер немесе телефон экранындағы әрекеттерді түсіреді. Негізгі факторлар: ажыратымдылық (анықтық үшін кемінде 1080p), кадр жиілігі (стандартты 30fps, тегіс қозғалыс үшін 60fps) және микрофон мен жүйеден аудио түсіру. Таза жұмыс үстелі және курсор көрінуі параметрлері көрерменнің тәжірибесін айтарлықтай жақсартады.",
        keyFormulas: [
          {
            formula: "File size ≈ Resolution × Frame rate × Duration × Bitrate factor",
            formulaRu: "Размер файла ≈ Разрешение × Частота кадров × Длительность × Коэффициент битрейта",
            formulaKk: "Файл өлшемі ≈ Ажыратымдылық × Кадр жиілігі × Ұзақтық × Битрейт коэффициенті",
            description: "Higher resolution and frame rate produce larger files that need more storage",
            descriptionRu: "Более высокое разрешение и частота кадров создают файлы большего размера",
            descriptionKk: "Жоғары ажыратымдылық пен кадр жиілігі көбірек жад қажет ететін үлкен файлдар жасайды"
          }
        ],
        solvedExamples: [
          {
            question: "You are recording a 10-minute software tutorial. Should you use 30fps or 60fps, and what resolution?",
            questionRu: "Вы записываете 10-минутный туториал по ПО. Использовать 30fps или 60fps и какое разрешение?",
            questionKk: "10 минуттық бағдарламалық жасақтама бойынша оқу бейне жазып жатырсыз. 30fps немесе 60fps қолданасыз ба, және қандай ажыратымдылық?",
            steps: [
              { en: "Software tutorials involve reading text and clicking menus — smooth motion is not critical. 30fps is sufficient and produces smaller files.", ru: "В туториалах по ПО читают текст и кликают по меню — плавность не критична. 30fps достаточно и даёт меньший размер файла.", kk: "Бағдарламалық жасақтама оқу бейнелерінде мәтін оқу және менюларды басу бар — тегіс қозғалыс маңызды емес. 30fps жеткілікті және файл өлшемі кішірек." },
              { en: "Use 1080p (1920×1080) minimum so text is readable. If demonstrating UI details, consider 1440p or 4K.", ru: "Используйте минимум 1080p (1920×1080), чтобы текст был читаемым. Для демонстрации деталей UI рассмотрите 1440p или 4K.", kk: "Мәтін оқылатындай кемінде 1080p (1920×1080) пайдаланыңыз. UI мәліметтерін көрсету үшін 1440p немесе 4K қарастырыңыз." }
            ],
            answer: "Use 30fps at 1080p minimum. 30fps is sufficient for software tutorials and keeps file sizes manageable. Use 1440p+ if showing fine UI details.",
            answerRu: "Используйте минимум 30fps при 1080p. 30fps достаточно для туториалов по ПО и позволяет держать размер файла управляемым. Используйте 1440p+ при показе мелких деталей интерфейса.",
            answerKk: "Кемінде 1080p-де 30fps қолданыңыз. 30fps бағдарламалық жасақтама бойынша оқу бейнелер үшін жеткілікті және файл өлшемін басқарылатын етеді. UI мәліметтерін көрсеткенде 1440p+ қолданыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the minimum recommended resolution for screen recording tutorials?",
            questionRu: "Какое минимальное рекомендуемое разрешение для записи экранных туториалов?",
            questionKk: "Экранды жазу оқу бейнелері үшін ең аз ұсынылатын ажыратымдылық қандай?",
            answer: "1080p (1920×1080). This ensures text and UI elements are clearly readable for viewers.",
            answerRu: "1080p (1920×1080). Это обеспечивает чёткую читаемость текста и элементов интерфейса для зрителей.",
            answerKk: "1080p (1920×1080). Бұл көрерменлер үшін мәтін мен интерфейс элементтерінің анық оқылуын қамтамасыз етеді.",
            hint: "Text must be readable — too low resolution makes menus and code blurry.",
            hintRu: "Текст должен быть читаемым — слишком низкое разрешение делает меню и код размытыми.",
            hintKk: "Мәтін оқылуы керек — тым төмен ажыратымдылық менюлер мен кодты бұлдыр етеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "When should you choose 60fps over 30fps for screen recording?",
            questionRu: "Когда стоит выбрать 60fps вместо 30fps для записи экрана?",
            questionKk: "Экранды жазу үшін 30fps орнына 60fps-ті қашан таңдау керек?",
            answer: "Use 60fps when recording content with fast motion — such as gaming, animation previews, or smooth scrolling demos. The higher frame rate captures fluid motion that would appear choppy at 30fps.",
            answerRu: "Используйте 60fps при записи контента с быстрым движением — например, игры, превью анимации или плавную прокрутку. Более высокая частота кадров передаёт плавное движение, которое при 30fps выглядело бы рваным.",
            answerKk: "Ойындар, анимация нобайлары немесе тегіс скроллинг сияқты жылдам қозғалысы бар контентті жазғанда 60fps қолданыңыз. Жоғары кадр жиілігі 30fps-те үзік-үзік көрінетін тегіс қозғалысты түсіреді.",
            hint: "Think about content where things move quickly across the screen.",
            hintRu: "Подумайте о контенте, где объекты быстро перемещаются по экрану.",
            hintKk: "Экранда заттар тез қозғалатын контент туралы ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to record a 20-minute coding tutorial. List five preparation steps you should take before hitting the record button to ensure a professional result.",
            questionRu: "Нужно записать 20-минутный туториал по программированию. Перечислите пять шагов подготовки перед началом записи для профессионального результата.",
            questionKk: "20 минуттық кодтау бойынша оқу бейне жазу керек. Кәсіби нәтиже қамтамасыз ету үшін жазу түймесін баспас бұрын бес дайындық қадамын тізіңіз.",
            answer: "1) Close all unnecessary apps and browser tabs to avoid notifications and distractions. 2) Increase code editor font size to 16-18px so viewers can read code clearly. 3) Set screen resolution to 1080p and recording to 30fps. 4) Test microphone audio levels and reduce background noise. 5) Prepare a written outline of the steps you will demonstrate to avoid wandering or pausing.",
            answerRu: "1) Закройте все ненужные приложения и вкладки браузера, чтобы избежать уведомлений и отвлечений. 2) Увеличьте размер шрифта редактора кода до 16-18px, чтобы зрители могли чётко читать код. 3) Установите разрешение экрана 1080p и запись на 30fps. 4) Проверьте уровни звука микрофона и уменьшите фоновый шум. 5) Подготовьте письменный план шагов, которые будете демонстрировать, чтобы избежать блуждания или пауз.",
            answerKk: "1) Хабарландырулар мен алаңдатушылықтан аулақ болу үшін барлық қажетсіз қолданбалар мен браузер қойындыларын жабыңыз. 2) Көрерменлер кодты анық оқи алуы үшін код редакторының қаріп өлшемін 16-18px-ке дейін ұлғайтыңыз. 3) Экран ажыратымдылығын 1080p, ал жазуды 30fps етіп орнатыңыз. 4) Микрофон дыбыс деңгейлерін тексеріп, фондық шуды азайтыңыз. 5) Адасу немесе кідірістерді болдырмау үшін көрсететін қадамдардың жазбаша жоспарын дайындаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Thumbnail Design",
        titleRu: "Дизайн превью",
        titleKk: "Нобай дизайны",
        content: "Thumbnails are the first impression of your video content — a compelling thumbnail can double or triple your click-through rate. Effective thumbnails use high contrast colors, readable text (3-5 words maximum), expressive faces, and clear visual hierarchy. They must work at small sizes since most viewers see them as tiny images on mobile feeds.",
        contentRu: "Превью — это первое впечатление о вашем видеоконтенте. Привлекательное превью может удвоить или утроить CTR. Эффективные превью используют высококонтрастные цвета, читаемый текст (максимум 3-5 слов), выразительные лица и чёткую визуальную иерархию. Они должны работать в маленьком размере, так как большинство зрителей видят их крошечными на мобильных экранах.",
        contentKk: "Нобайлар бейне контентіңіздің бірінші әсері болып табылады — тартымды нобай CTR-ді екі-үш есе арттыра алады. Тиімді нобайлар жоғары контрастты түстерді, оқылатын мәтінді (ең көбі 3-5 сөз), мәнерлі беттерді және анық визуалды иерархияны пайдаланады. Олар кішкентай өлшемде жұмыс істеуі керек, өйткені көрерменлердің көпшілігі оларды мобильді экрандарда кішкентай кескіндер ретінде көреді.",
        keyFormulas: [
          {
            formula: "YouTube thumbnail: 1280 × 720 px, 16:9 ratio, max 2 MB",
            formulaRu: "Превью YouTube: 1280 × 720 px, соотношение 16:9, максимум 2 МБ",
            formulaKk: "YouTube мұқабасы: 1280 × 720 px, 16:9 арақатынасы, ең көбі 2 МБ",
            description: "Standard thumbnail specifications for optimal display across all devices",
            descriptionRu: "Стандартные спецификации превью для оптимального отображения на всех устройствах",
            descriptionKk: "Барлық құрылғыларда оңтайлы көрсету үшін стандартты нобай сипаттамалары"
          }
        ],
        solvedExamples: [
          {
            question: "You have two thumbnail options for a cooking video: (A) a wide shot of the kitchen with small text, (B) a close-up of the finished dish with 3 large bold words. Which will perform better?",
            questionRu: "У вас два варианта превью для кулинарного видео: (A) общий план кухни с мелким текстом, (B) крупный план готового блюда с 3 крупными жирными словами. Какой сработает лучше?",
            questionKk: "Аспаздық бейне үшін екі нобай нұсқаңыз бар: (A) ұсақ мәтінмен ас үйдің жалпы көрінісі, (B) 3 ірі қалың сөзбен дайын тағамның жақын көрінісі. Қайсысы жақсырақ нәтиже береді?",
            steps: [
              { en: "Option A has too much detail that becomes invisible at small sizes on mobile. Small text is unreadable.", ru: "Вариант A содержит слишком много деталей, невидимых в маленьком размере на мобильных. Мелкий текст нечитаем.", kk: "A нұсқасында мобильдегі кішкентай өлшемде көрінбейтін тым көп мәлімет бар. Ұсақ мәтін оқылмайды." },
              { en: "Option B follows thumbnail best practices: close-up subject, minimal bold text, clear at any size.", ru: "Вариант B следует лучшим практикам: крупный объект, минимум жирного текста, чёткость при любом размере.", kk: "B нұсқасы ең жақсы тәжірибелерге сай: жақын объект, минималды қалың мәтін, кез келген өлшемде анық." }
            ],
            answer: "Option B. Close-up images and large bold text are readable at any size, while wide shots with small text become illegible on mobile thumbnails.",
            answerRu: "Вариант B. Крупный план и крупный жирный текст читаются в любом размере, а общий план с мелким текстом становится неразборчивым на мобильных превью.",
            answerKk: "B нұсқасы. Жақын кескіндер мен ірі қалың мәтін кез келген өлшемде оқылады, ал ұсақ мәтіні бар жалпы көрініс мобильді нобайларда оқылмай қалады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the recommended maximum number of words on a YouTube thumbnail?",
            questionRu: "Какое рекомендуемое максимальное количество слов на превью YouTube?",
            questionKk: "YouTube нобайындағы ұсынылатын ең көп сөз саны қанша?",
            answer: "3-5 words maximum. Thumbnails are viewed at very small sizes, so text must be minimal and large to be readable.",
            answerRu: "Максимум 3-5 слов. Превью просматриваются в очень маленьком размере, поэтому текст должен быть минимальным и крупным для читаемости.",
            answerKk: "Ең көбі 3-5 сөз. Нобайлар өте кішкентай өлшемде қаралады, сондықтан мәтін минималды және оқылу үшін ірі болуы керек.",
            hint: "Thumbnails appear very small on mobile screens — less text means more readable.",
            hintRu: "Превью отображаются очень маленькими на мобильных экранах — меньше текста означает лучше читаемость.",
            hintKk: "Нобайлар мобильді экрандарда өте кішкентай көрінеді — аз мәтін жақсырақ оқылады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What are the standard YouTube thumbnail dimensions and why is the 16:9 aspect ratio important?",
            questionRu: "Каковы стандартные размеры превью YouTube и почему важно соотношение сторон 16:9?",
            questionKk: "YouTube нобайының стандартты өлшемдері қандай және неліктен 16:9 арақатынасы маңызды?",
            answer: "1280 × 720 pixels at 16:9 aspect ratio, max 2 MB file size. The 16:9 ratio is important because it matches YouTube's video player and feed layout — any other ratio will have black bars or get cropped.",
            answerRu: "1280 × 720 пикселей при соотношении сторон 16:9, максимальный размер файла 2 МБ. Соотношение 16:9 важно, потому что оно совпадает с плеером и лентой YouTube — любое другое соотношение приведёт к чёрным полосам или обрезке.",
            answerKk: "16:9 арақатынасында 1280 × 720 пиксель, максималды файл өлшемі 2 МБ. 16:9 арақатынасы маңызды, себебі ол YouTube бейне ойнатқышы мен лентасының пішініне сәйкес келеді — кез келген басқа арақатынас қара жолақтарға немесе кесілуге әкеледі.",
            hint: "The thumbnail should match the shape of the YouTube video player.",
            hintRu: "Превью должно соответствовать форме видеоплеера YouTube.",
            hintKk: "Нобай YouTube бейне ойнатқышының пішініне сәйкес келуі керек.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are redesigning thumbnails for a YouTube channel that gets 100,000 impressions but only 1.5% CTR. The current thumbnails use dark backgrounds, small text, and no faces. Propose three specific changes and predict the potential CTR improvement.",
            questionRu: "Вы редизайните превью для YouTube-канала с 100 000 показов и CTR всего 1,5%. Текущие превью используют тёмные фоны, мелкий текст и без лиц. Предложите три конкретных изменения и спрогнозируйте потенциальное улучшение CTR.",
            questionKk: "100 000 көрсетілім алатын, бірақ CTR тек 1,5% YouTube арнасының нобайларын қайта дизайндап жатырсыз. Ағымдағы нобайлар қараңғы фондарды, ұсақ мәтінді пайдаланады және бет жоқ. Үш нақты өзгеріс ұсыныңыз және CTR жақсаруын болжаңыз.",
            answer: "1) Switch to bright, high-contrast backgrounds (yellow, red, or white) to stand out in feeds. 2) Add an expressive human face showing emotion — faces increase CTR by 30-40% on average. 3) Replace small text with 3-4 large bold words using a sans-serif font with a dark outline for readability. These changes could realistically improve CTR from 1.5% to 4-6%, potentially doubling or tripling clicks from 1,500 to 4,000-6,000.",
            answerRu: "1) Перейдите на яркие, высококонтрастные фоны (жёлтый, красный или белый), чтобы выделяться в ленте. 2) Добавьте выразительное человеческое лицо с эмоцией — лица в среднем увеличивают CTR на 30-40%. 3) Замените мелкий текст на 3-4 крупных жирных слова шрифтом без засечек с тёмной обводкой для читаемости. Эти изменения реально могут повысить CTR с 1,5% до 4-6%, потенциально удвоив или утроив клики с 1 500 до 4 000-6 000.",
            answerKk: "1) Лентада көзге түсу үшін жарқын, жоғары контрастты фондарға (сары, қызыл немесе ақ) көшіңіз. 2) Эмоция білдіретін мәнерлі адам бетін қосыңыз — беттер орта есеппен CTR-ды 30-40%-ға арттырады. 3) Ұсақ мәтінді оқылу үшін қою контурлы serif емес қаріппен 3-4 ірі қалың сөзбен ауыстырыңыз. Бұл өзгерістер CTR-ды 1,5%-дан 4-6%-ға дейін шынымен арттырып, кликтерді 1 500-ден 4 000-6 000-ға дейін екі-үш есе арттыруы мүмкін.",
            xp: 20
          }
        ]
      },
      {
        title: "Content Strategy",
        titleRu: "Контент-стратегия",
        titleKk: "Контент стратегиясы",
        content: "Content strategy is the planning framework behind consistent, purposeful content creation. It involves defining your target audience, choosing content pillars (3-5 recurring topics), setting a publishing schedule, and measuring success through analytics. A good strategy balances evergreen content that stays relevant over time with trending topics that capture immediate attention.",
        contentRu: "Контент-стратегия — это система планирования последовательного и целенаправленного создания контента. Она включает определение целевой аудитории, выбор контент-столпов (3-5 постоянных тем), установление графика публикаций и измерение успеха через аналитику. Хорошая стратегия сочетает вечнозелёный контент, актуальный долгое время, с трендовыми темами для мгновенного привлечения внимания.",
        contentKk: "Контент стратегиясы — бұл дәйекті, мақсатты контент жасаудың жоспарлау жүйесі. Ол мақсатты аудиторияны анықтауды, контент бағандарын (3-5 тұрақты тақырып) таңдауды, жариялау кестесін орнатуды және аналитика арқылы табысты өлшеуді қамтиды. Жақсы стратегия ұзақ уақыт өзекті болатын мәңгі жасыл контентті лезде назар аударатын трендті тақырыптармен теңестіреді.",
        keyFormulas: [
          {
            formula: "80/20 Rule: 80% value content, 20% promotional content",
            formulaRu: "Правило 80/20: 80% ценного контента, 20% рекламного",
            formulaKk: "80/20 ережесі: 80% құнды контент, 20% жарнамалық контент",
            description: "Maintains audience trust while still achieving business goals",
            descriptionRu: "Поддерживает доверие аудитории, одновременно достигая бизнес-целей",
            descriptionKk: "Бизнес мақсаттарына қол жеткізе отырып, аудиторияның сенімін сақтайды"
          },
          {
            formula: "Content Calendar = Topics + Formats + Dates + Platforms",
            formulaRu: "Контент-календарь = Темы + Форматы + Даты + Платформы",
            formulaKk: "Контент-күнтізбе = Тақырыптар + Форматтар + Күндер + Платформалар",
            description: "Structured planning prevents last-minute scrambling and ensures consistency",
            descriptionRu: "Структурированное планирование предотвращает спешку и обеспечивает последовательность",
            descriptionKk: "Құрылымдық жоспарлау соңғы минуттағы асығуды болдырмайды және дәйектілікті қамтамасыз етеді"
          }
        ],
        solvedExamples: [
          {
            question: "You are starting a YouTube channel about study tips for high school students. Define 3 content pillars and a weekly publishing schedule.",
            questionRu: "Вы создаёте YouTube-канал о советах по учёбе для старшеклассников. Определите 3 контент-столпа и еженедельный график публикаций.",
            questionKk: "Жоғары сынып оқушыларына арналған оқу кеңестері туралы YouTube арна жасап жатырсыз. 3 контент бағанын және апталық жариялау кестесін анықтаңыз.",
            steps: [
              { en: "Choose 3 pillars: (1) Study techniques, (2) Time management, (3) Exam preparation — all relevant to the target audience.", ru: "Выберите 3 столпа: (1) Техники обучения, (2) Тайм-менеджмент, (3) Подготовка к экзаменам — все актуальны для целевой аудитории.", kk: "3 бағанды таңдаңыз: (1) Оқу тәсілдері, (2) Уақытты басқару, (3) Емтиханға дайындық — барлығы мақсатты аудиторияға сай." },
              { en: "Schedule: Monday — study technique (evergreen), Wednesday — time management (evergreen), Friday — trending/seasonal topic (exam prep, back-to-school, etc.).", ru: "График: Понедельник — техника обучения (вечнозелёный), Среда — тайм-менеджмент (вечнозелёный), Пятница — актуальная/сезонная тема.", kk: "Кесте: Дүйсенбі — оқу тәсілі (мәңгі жасыл), Сәрсенбі — уақытты басқару (мәңгі жасыл), Жұма — трендті/маусымдық тақырып." }
            ],
            answer: "Pillars: Study techniques, Time management, Exam prep. Schedule: 3 videos per week — Mon (technique), Wed (time management), Fri (trending/seasonal). This balances evergreen and timely content.",
            answerRu: "Столпы: Техники обучения, Тайм-менеджмент, Подготовка к экзаменам. График: 3 видео в неделю — Пн (техника), Ср (тайм-менеджмент), Пт (трендовая/сезонная тема). Это балансирует вечнозелёный и актуальный контент.",
            answerKk: "Бағандар: Оқу тәсілдері, Уақытты басқару, Емтиханға дайындық. Кесте: аптасына 3 бейне — Дс (тәсіл), Ср (уақытты басқару), Жм (трендті/маусымдық). Бұл мәңгі жасыл және өзекті контентті теңестіреді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the 80/20 rule in content strategy?",
            questionRu: "Что такое правило 80/20 в контент-стратегии?",
            questionKk: "Контент стратегиясындағы 80/20 ережесі дегеніміз не?",
            answer: "80% of your content should provide value (educate, entertain, inspire) and only 20% should be promotional. This maintains audience trust and engagement.",
            answerRu: "80% вашего контента должно приносить пользу (обучать, развлекать, вдохновлять), и только 20% должно быть рекламным. Это поддерживает доверие и вовлечённость аудитории.",
            answerKk: "Контентіңіздің 80%-ы пайда әкелуі керек (үйрету, көңіл көтеру, шабыттандыру), ал тек 20%-ы жарнамалық болуы керек. Бұл аудиторияның сенімі мен тартылуын сақтайды.",
            hint: "Most of your content should help the viewer, not sell to them.",
            hintRu: "Большая часть контента должна помогать зрителю, а не продавать ему.",
            hintKk: "Контентіңіздің көп бөлігі көрерменге көмектесуі керек, оларға сатпауы керек.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Explain the difference between evergreen content and trending content. Give one example of each for an educational YouTube channel.",
            questionRu: "Объясните разницу между вечнозелёным и трендовым контентом. Приведите по одному примеру для образовательного YouTube-канала.",
            questionKk: "Мәңгі жасыл контент пен трендті контент арасындағы айырмашылықты түсіндіріңіз. Білім беретін YouTube арнасы үшін әрқайсысына бір мысал келтіріңіз.",
            answer: "Evergreen content stays relevant indefinitely — e.g., 'How to Take Better Notes' (useful year-round). Trending content capitalizes on current events — e.g., 'How to Prepare for the New SAT Format' (timely, may become outdated). A good channel mixes both.",
            answerRu: "Вечнозелёный контент остаётся актуальным неограниченно долго — например, «Как делать записи лучше» (полезно круглый год). Трендовый контент использует текущие события — например, «Как подготовиться к новому формату SAT» (актуально сейчас, может устареть). Хороший канал сочетает оба типа.",
            answerKk: "Мәңгі жасыл контент шексіз уақыт өзекті болып қалады — мысалы, «Жазбаларды қалай жақсы жүргізу керек» (жыл бойы пайдалы). Трендті контент ағымдағы оқиғаларды пайдаланады — мысалы, «Жаңа SAT форматына қалай дайындалу керек» (уақытша, ескіруі мүмкін). Жақсы арна екеуін де араластырады.",
            hint: "One type is like a textbook (always useful), the other is like a newspaper (timely).",
            hintRu: "Один тип как учебник (всегда полезен), другой как газета (актуален сейчас).",
            hintKk: "Бір түрі оқулық сияқты (әрқашан пайдалы), екіншісі газет сияқты (қазір өзекті).",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You manage a content strategy for a school's social media. You have data showing posts about student achievements get 3x more engagement than event announcements, but the school administration wants 50% event content. How do you balance these competing needs?",
            questionRu: "Вы управляете контент-стратегией соцсетей школы. Данные показывают, что посты о достижениях учеников получают в 3 раза больше вовлечённости, чем анонсы мероприятий, но администрация хочет 50% контента о мероприятиях. Как сбалансировать эти потребности?",
            questionKk: "Мектептің әлеуметтік желісінің контент стратегиясын басқарасыз. Деректер оқушылардың жетістіктері туралы жазбалар іс-шара хабарландыруларынан 3 есе көп тартылыс алатынын көрсетеді, бірақ әкімшілік 50% іс-шара контентін қалайды. Бұл бәсекелес қажеттіліктерді қалай теңестіресіз?",
            answer: "1) Present data to administration showing the engagement difference and explain that higher engagement means more people actually see event announcements. 2) Propose a hybrid approach: combine event announcements with student achievement stories (e.g., 'Watch Sarah's winning debate performance at Friday's tournament'). 3) Suggest a 60/40 split: 60% student-centered content (including events framed around student stories) and 40% pure event announcements. 4) Track results for one month and present data showing the hybrid approach reaches more people than pure event posts.",
            answerRu: "1) Представьте администрации данные о разнице вовлечённости и объясните, что более высокая вовлечённость означает, что анонсы мероприятий на самом деле видит больше людей. 2) Предложите гибридный подход: объединить анонсы мероприятий с историями о достижениях учеников (например, «Смотрите победное выступление Сары в дебатах на пятничном турнире»). 3) Предложите разделение 60/40: 60% контента, ориентированного на учеников (включая мероприятия, поданные через истории учеников), и 40% чистых анонсов мероприятий. 4) Отслеживайте результаты в течение месяца и представьте данные, показывающие, что гибридный подход охватывает больше людей, чем чистые посты о мероприятиях.",
            answerKk: "1) Әкімшілікке тартылыс айырмашылығы туралы деректерді ұсыныңыз және жоғары тартылыс іс-шара хабарландыруларын шынымен көбірек адам көретінін білдіретінін түсіндіріңіз. 2) Гибридті тәсіл ұсыныңыз: іс-шара хабарландыруларын оқушылардың жетістік тарихтарымен біріктіріңіз (мысалы, «Сараның жұма турнирдегі жеңімпаз дебат өнерін көріңіз»). 3) 60/40 бөлуді ұсыныңыз: 60% оқушыға бағытталған контент (оқушы тарихтары арқылы берілген іс-шараларды қоса) және 40% таза іс-шара хабарландырулары. 4) Бір ай ішінде нәтижелерді бақылап, гибридті тәсілдің таза іс-шара жазбаларына қарағанда көбірек адамға жететінін көрсететін деректерді ұсыныңыз.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Digital Creativity_11": {
    planetName: "Digital Creativity",
    introduction: {
      en: "You dive into product design and advanced media production — mastering UI/UX design, prototyping in Figma, user testing, advanced video editing, VFX, podcast production, and brand identity.",
      ru: "Вы погружаетесь в продуктовый дизайн и продвинутое медиапроизводство — осваиваете UI/UX-дизайн, прототипирование в Figma, тестирование, продвинутый монтаж, VFX, подкасты и фирменный стиль."
    },
    sections: [
      {
        title: "UI Design",
        titleRu: "UI-дизайн",
        titleKk: "UI дизайн",
        content: "UI (User Interface) design focuses on the visual elements users interact with — buttons, icons, typography, color schemes, and layouts. Good UI design follows principles of consistency, hierarchy, and affordance: every element should look like what it does. Spacing, alignment, and contrast are the silent forces that make interfaces feel professional or amateur.",
        contentRu: "UI-дизайн (дизайн интерфейса пользователя) фокусируется на визуальных элементах, с которыми взаимодействуют пользователи — кнопках, иконках, типографике, цветовых схемах и макетах. Хороший UI-дизайн следует принципам последовательности, иерархии и аффорданса: каждый элемент должен выглядеть так, как он работает. Отступы, выравнивание и контраст — это невидимые силы, которые делают интерфейс профессиональным или любительским.",
        contentKk: "UI дизайн (пайдаланушы интерфейсі дизайны) пайдаланушылар өзара әрекеттесетін визуалды элементтерге — түймелерге, белгішелерге, типографикаға, түс схемаларына және макеттерге назар аударады. Жақсы UI дизайн дәйектілік, иерархия және аффорданс принциптерін ұстанады: әрбір элемент өзінің қызметіне сай көрінуі керек. Аралық, туралау және контраст интерфейсті кәсіби немесе әуесқой етіп көрсететін көрінбейтін күштер.",
        keyFormulas: [
          {
            formula: "Visual hierarchy: Size > Color > Contrast > Position",
            formulaRu: "Визуальная иерархия: Размер > Цвет > Контраст > Положение",
            formulaKk: "Көрнекілік иерархиясы: Өлшем > Түс > Контраст > Орналасу",
            description: "Elements higher in the hierarchy attract attention first",
            descriptionRu: "Элементы выше в иерархии привлекают внимание первыми",
            descriptionKk: "Иерархиядағы жоғары элементтер назарды бірінші тартады"
          },
          {
            formula: "8px grid system: all spacing in multiples of 8 (8, 16, 24, 32, 48, 64)",
            formulaRu: "Сетка 8px: все отступы кратны 8 (8, 16, 24, 32, 48, 64)",
            formulaKk: "8px тор жүйесі: барлық аралықтар 8-ге еселік (8, 16, 24, 32, 48, 64)",
            description: "Creates consistent rhythm and alignment across the entire interface",
            descriptionRu: "Создаёт последовательный ритм и выравнивание по всему интерфейсу",
            descriptionKk: "Бүкіл интерфейс бойынша дәйекті ырғақ пен туралауды жасайды"
          }
        ],
        solvedExamples: [
          {
            question: "You are designing a mobile login screen. How should you arrange the elements for optimal visual hierarchy?",
            questionRu: "Вы проектируете экран входа для мобильного приложения. Как расположить элементы для оптимальной визуальной иерархии?",
            questionKk: "Мобильді қолданба үшін кіру экранын жобалап жатырсыз. Оңтайлы визуалды иерархия үшін элементтерді қалай орналастырасыз?",
            steps: [
              { en: "Identify priority order: 1) App logo/title (brand recognition), 2) Input fields (email, password), 3) Primary CTA (Log In button), 4) Secondary actions (Forgot password, Sign up).", ru: "Определите приоритет: 1) Логотип/название (узнаваемость), 2) Поля ввода (email, пароль), 3) Основная CTA (кнопка Войти), 4) Вторичные действия (Забыли пароль, Регистрация).", kk: "Басымдық ретін анықтаңыз: 1) Логотип/атау (танылу), 2) Енгізу өрістері (email, құпия сөз), 3) Негізгі CTA (Кіру түймесі), 4) Қосалқы әрекеттер (Құпия сөзді ұмыттыңыз ба, Тіркелу)." },
              { en: "Make the Log In button the largest, most colorful element. Use subdued colors for secondary links. Space elements using 8px grid multiples.", ru: "Сделайте кнопку Войти самой крупной и яркой. Вторичные ссылки — приглушёнными. Отступы по сетке 8px.", kk: "Кіру түймесін ең үлкен, ең түсті элемент етіңіз. Қосалқы сілтемелерге басылған түстерді пайдаланыңыз. Элементтерді 8px тор еселіктерімен орналастырыңыз." }
            ],
            answer: "Top: logo/title. Middle: input fields with clear labels. Below inputs: large, high-contrast Log In button. Bottom: subtle secondary links. All spaced on 8px grid.",
            answerRu: "Сверху: логотип/название. Посередине: поля ввода с чёткими подписями. Под полями: крупная, контрастная кнопка «Войти». Внизу: неброские вторичные ссылки. Все элементы расставлены по сетке 8px.",
            answerKk: "Жоғарыда: логотип/атау. Ортада: анық жапсырмалары бар енгізу өрістері. Өрістердің астында: ірі, жоғары контрастты «Кіру» түймесі. Төменде: байқалмайтын қосалқы сілтемелер. Барлығы 8px тор бойынша орналастырылған."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does UI stand for and what does UI design focus on?",
            questionRu: "Что означает UI и на чём фокусируется UI-дизайн?",
            questionKk: "UI нені білдіреді және UI дизайн неге назар аударады?",
            answer: "UI stands for User Interface. UI design focuses on the visual elements users interact with — buttons, icons, typography, colors, and layouts — making them attractive, consistent, and easy to use.",
            answerRu: "UI означает User Interface (пользовательский интерфейс). UI-дизайн фокусируется на визуальных элементах, с которыми взаимодействуют пользователи, — кнопках, иконках, типографике, цветах и макетах, — делая их привлекательными, последовательными и удобными в использовании.",
            answerKk: "UI — User Interface (пайдаланушы интерфейсі) дегенді білдіреді. UI дизайн пайдаланушылар өзара әрекеттесетін визуалды элементтерге — түймелерге, белгішелерге, типографикаға, түстерге және макеттерге — назар аударып, оларды тартымды, дәйекті және қолдануға оңай етеді.",
            hint: "Think about everything you can see and click on in an app.",
            hintRu: "Подумайте обо всём, что можно видеть и нажимать в приложении.",
            hintKk: "Қолданбада көруге және басуға болатын барлық нәрсені ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the 8px grid system and why do designers use it?",
            questionRu: "Что такое сетка 8px и почему дизайнеры её используют?",
            questionKk: "8px тор жүйесі дегеніміз не және дизайнерлер оны неге пайдаланады?",
            answer: "The 8px grid system means all spacing, padding, and margins are set in multiples of 8 (8, 16, 24, 32, etc.). Designers use it because it creates consistent visual rhythm, works well on different screen sizes, and makes collaboration easier since everyone follows the same spacing rules.",
            answerRu: "Сетка 8px означает, что все отступы, внутренние поля и margin задаются кратными 8 (8, 16, 24, 32 и т.д.). Дизайнеры используют её, потому что она создаёт последовательный визуальный ритм, хорошо работает на разных размерах экранов и упрощает совместную работу, так как все следуют одним правилам отступов.",
            answerKk: "8px тор жүйесі барлық аралық, ішкі жиек және margin 8-ге еселі (8, 16, 24, 32 және т.б.) орнатылатынын білдіреді. Дизайнерлер оны қолданады, себебі ол тұрақты визуалды ырғақ жасайды, әртүрлі экран өлшемдерінде жақсы жұмыс істейді және барлығы бірдей аралық ережелерін ұстанатындықтан бірлескен жұмысты жеңілдетеді.",
            hint: "It is about creating consistency in the spaces between elements.",
            hintRu: "Это о создании последовательности в расстояниях между элементами.",
            hintKk: "Бұл элементтер арасындағы аралықтарда дәйектілік жасау туралы.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are reviewing a mobile app design where the primary action button is gray, the same size as secondary buttons, and placed at the bottom of a long scrolling page. Identify three UI problems and propose fixes.",
            questionRu: "Вы проверяете дизайн мобильного приложения, где основная кнопка действия серая, того же размера, что и вторичные кнопки, и расположена внизу длинной прокручиваемой страницы. Назовите три проблемы UI и предложите исправления.",
            questionKk: "Негізгі әрекет түймесі сұр, қосалқы түймелермен бірдей өлшемде және ұзын айналдырылатын беттің төменгі жағында орналасқан мобильді қолданба дизайнын тексеріп жатырсыз. Үш UI мәселесін анықтап, түзетулер ұсыныңыз.",
            answer: "1) Color problem: gray button does not stand out — fix by using a bright, high-contrast color (e.g., blue or green) for the primary action. 2) Size problem: same size as secondary buttons breaks hierarchy — fix by making the primary button larger (at least 48px height) and secondary buttons smaller or text-only. 3) Position problem: below the scroll fold means users may never see it — fix by making it sticky (fixed at bottom of screen) or moving it above the fold. These changes establish clear visual hierarchy through color, size, and position.",
            answerRu: "1) Проблема цвета: серая кнопка не выделяется — исправьте, используя яркий, высококонтрастный цвет (например, синий или зелёный) для основного действия. 2) Проблема размера: одинаковый размер со вторичными кнопками нарушает иерархию — исправьте, сделав основную кнопку крупнее (минимум 48px высотой), а вторичные — меньше или только текстовыми. 3) Проблема позиции: ниже видимой области означает, что пользователи могут её вообще не увидеть — исправьте, закрепив её (fixed внизу экрана) или переместив выше сгиба страницы. Эти изменения устанавливают чёткую визуальную иерархию через цвет, размер и позицию.",
            answerKk: "1) Түс мәселесі: сұр түйме көзге түспейді — негізгі әрекет үшін жарқын, жоғары контрастты түс (мысалы, көк немесе жасыл) қолданып түзетіңіз. 2) Өлшем мәселесі: қосалқы түймелермен бірдей өлшем иерархияны бұзады — негізгі түймені үлкенірек (кемінде 48px биіктік), ал қосалқыларды кішірек немесе тек мәтінді етіп түзетіңіз. 3) Орналасу мәселесі: айналдыру аймағының астында болуы пайдаланушылардың оны мүлдем көрмеуі мүмкін дегенді білдіреді — оны жабысқақ (экранның төменгі жағында тұрақты) етіп немесе бүктелген жерден жоғары жылжытып түзетіңіз. Бұл өзгерістер түс, өлшем және орналасу арқылы анық визуалды иерархия орнатады.",
            xp: 20
          }
        ]
      },
      {
        title: "UX Research",
        titleRu: "UX-исследования",
        titleKk: "UX зерттеу",
        content: "UX (User Experience) research discovers how real people think, feel, and behave when using a product. Methods include user interviews, surveys, card sorting, and analytics review. The goal is to make design decisions based on evidence rather than assumptions. Empathy mapping — documenting what users say, think, feel, and do — is a foundational technique for understanding user needs.",
        contentRu: "UX-исследования (исследования пользовательского опыта) выясняют, как реальные люди думают, чувствуют и ведут себя при использовании продукта. Методы включают интервью, опросы, карточную сортировку и анализ аналитики. Цель — принимать решения на основе данных, а не предположений. Карта эмпатии — документирование того, что пользователи говорят, думают, чувствуют и делают — фундаментальная техника понимания потребностей.",
        contentKk: "UX зерттеу (пайдаланушы тәжірибесін зерттеу) нақты адамдардың өнімді пайдаланғанда қалай ойлайтынын, сезінетінін және әрекет ететінін анықтайды. Әдістерге пайдаланушы сұхбаттары, сауалнамалар, карточкалық сұрыптау және аналитика талдауы жатады. Мақсат — болжамдарға емес, деректерге негізделген дизайн шешімдерін қабылдау. Эмпатия картасы — пайдаланушылардың не айтатынын, ойлайтынын, сезінетінін және жасайтынын құжаттау — қажеттіліктерді түсінудің негізгі тәсілі.",
        keyFormulas: [
          {
            formula: "Empathy Map: Says | Thinks | Feels | Does",
            formulaRu: "Карта эмпатии: Говорит | Думает | Чувствует | Делает",
            formulaKk: "Эмпатия картасы: Айтады | Ойлайды | Сезінеді | Істейді",
            description: "Four-quadrant framework for understanding user behavior and motivations",
            descriptionRu: "Четырёхквадрантная структура для понимания поведения и мотивации пользователей",
            descriptionKk: "Пайдаланушы мінез-құлқы мен мотивациясын түсінуге арналған төрт квадрантты құрылым"
          }
        ],
        solvedExamples: [
          {
            question: "You are building a study planner app. Create an empathy map for a typical high school student user.",
            questionRu: "Вы создаёте приложение-планировщик учёбы. Создайте карту эмпатии для типичного старшеклассника.",
            questionKk: "Оқу жоспарлаушы қолданбасын жасап жатырсыз. Типтік жоғары сынып оқушысы үшін эмпатия картасын жасаңыз.",
            steps: [
              { en: "Says: 'I have too much homework.' Thinks: 'I will never finish all this.' Feels: overwhelmed, anxious about deadlines. Does: procrastinates, starts tasks last minute.", ru: "Говорит: «Слишком много домашки.» Думает: «Я никогда это не закончу.» Чувствует: перегрузку, тревогу из-за дедлайнов. Делает: откладывает, начинает в последний момент.", kk: "Айтады: «Тым көп үй тапсырмасы бар.» Ойлайды: «Мұны ешқашан бітірмеймін.» Сезінеді: шамадан тыс жүктелу, мерзімдерге алаңдау. Жасайды: кейінге қалдырады, соңғы сәтте бастайды." },
              { en: "This reveals the core need: the app should reduce overwhelm by breaking tasks into small steps and showing progress visually.", ru: "Это выявляет основную потребность: приложение должно снижать перегрузку, разбивая задачи на мелкие шаги и визуально показывая прогресс.", kk: "Бұл негізгі қажеттілікті көрсетеді: қолданба тапсырмаларды кішкентай қадамдарға бөліп, прогресті визуалды көрсету арқылы шамадан тыс жүктелуді азайтуы керек." }
            ],
            answer: "Says: 'Too much homework.' Thinks: 'I will never finish.' Feels: overwhelmed, anxious. Does: procrastinates. Core insight: the app needs to break tasks into small steps and show visual progress to combat overwhelm.",
            answerRu: "Говорит: «Слишком много домашки.» Думает: «Я никогда не закончу.» Чувствует: перегрузку, тревогу. Делает: откладывает. Ключевой инсайт: приложению нужно разбивать задачи на мелкие шаги и показывать визуальный прогресс, чтобы бороться с перегрузкой.",
            answerKk: "Айтады: «Тым көп үй тапсырмасы.» Ойлайды: «Ешқашан бітірмеймін.» Сезінеді: шамадан тыс жүктелу, алаңдаушылық. Жасайды: кейінге қалдырады. Негізгі түйсік: қолданба шамадан тыс жүктелумен күресу үшін тапсырмаларды кішкентай қадамдарға бөліп, визуалды прогресті көрсетуі керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main goal of UX research?",
            questionRu: "Какова основная цель UX-исследований?",
            questionKk: "UX зерттеудің негізгі мақсаты қандай?",
            answer: "To understand how real users think, feel, and behave so that design decisions are based on evidence rather than assumptions.",
            answerRu: "Понять, как реальные пользователи думают, чувствуют и ведут себя, чтобы дизайнерские решения основывались на фактах, а не на предположениях.",
            answerKk: "Дизайн шешімдерінің болжамдарға емес, деректерге негізделуі үшін нақты пайдаланушылардың қалай ойлайтынын, сезінетінін және әрекет ететінін түсіну.",
            hint: "It is about replacing guesses with facts about your users.",
            hintRu: "Это о замене догадок фактами о ваших пользователях.",
            hintKk: "Бұл пайдаланушыларыңыз туралы болжамдарды фактілермен ауыстыру туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What are the four quadrants of an empathy map and what does each capture?",
            questionRu: "Назовите четыре квадранта карты эмпатии и что фиксирует каждый.",
            questionKk: "Эмпатия картасының төрт квадрантын және әрқайсысының не түсіретінін атаңыз.",
            answer: "Says: direct quotes from users. Thinks: internal thoughts they may not voice aloud. Feels: emotions and emotional states. Does: observable actions and behaviors. Together they reveal the gap between what users say and what they actually do.",
            answerRu: "Говорит: прямые цитаты пользователей. Думает: внутренние мысли, которые они могут не озвучивать. Чувствует: эмоции и эмоциональные состояния. Делает: наблюдаемые действия и поведение. Вместе они раскрывают разрыв между тем, что пользователи говорят, и тем, что они реально делают.",
            answerKk: "Айтады: пайдаланушылардың тікелей дәйексөздері. Ойлайды: олар дауыстап айтпауы мүмкін ішкі ойлар. Сезінеді: эмоциялар мен эмоционалды күйлер. Жасайды: байқалатын әрекеттер мен мінез-құлық. Бірге олар пайдаланушылардың айтатыны мен шын мәнінде жасайтыны арасындағы алшақтықты ашады.",
            hint: "There is often a gap between what people say and what they actually do.",
            hintRu: "Часто существует разрыв между тем, что люди говорят, и тем, что делают.",
            hintKk: "Адамдардың айтатыны мен шын мәнінде жасайтыны арасында жиі алшақтық бар.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You interviewed 5 users about a food delivery app. Three said they 'love' the app, but analytics show 60% abandon their cart before ordering. How do you reconcile this contradiction and what research method would you use next?",
            questionRu: "Вы опросили 5 пользователей приложения доставки еды. Трое сказали, что «любят» приложение, но аналитика показывает 60% отказов от корзины. Как объяснить это противоречие и какой метод исследования использовать дальше?",
            questionKk: "Тамақ жеткізу қолданбасы туралы 5 пайдаланушыдан сұхбат алдыңыз. Үшеуі қолданбаны «жақсы көремін» деді, бірақ аналитика тапсырыс алдында 60% себетті тастайтынын көрсетеді. Бұл қайшылықты қалай түсіндіресіз және келесі қандай зерттеу әдісін қолданасыз?",
            answer: "The contradiction exists because what users say (Says) differs from what they do (Does) — a common UX research finding. Users may genuinely like the app's design but encounter friction during checkout (hidden fees, complex payment, slow loading). Next steps: 1) Run a usability test where users complete an actual order while you observe — this reveals exactly where they abandon. 2) Analyze the checkout funnel analytics to identify the specific step with highest drop-off. 3) Conduct follow-up interviews asking specifically about the ordering process, not general satisfaction.",
            answerRu: "Противоречие существует, потому что то, что говорят пользователи (Says), отличается от того, что они делают (Does) — распространённая находка в UX-исследованиях. Пользователям может искренне нравиться дизайн приложения, но они сталкиваются с трудностями при оформлении заказа (скрытые сборы, сложная оплата, медленная загрузка). Следующие шаги: 1) Проведите юзабилити-тест, где пользователи выполняют реальный заказ, пока вы наблюдаете — это точно покажет, где они бросают процесс. 2) Проанализируйте аналитику воронки оформления заказа, чтобы найти конкретный шаг с наибольшим отсевом. 3) Проведите дополнительные интервью, спрашивая конкретно о процессе заказа, а не об общей удовлетворённости.",
            answerKk: "Қайшылық бар, себебі пайдаланушылардың айтатыны (Says) олардың жасайтынынан (Does) ерекшеленеді — бұл UX зерттеулерінде жиі кездесетін нәтиже. Пайдаланушыларға қолданбаның дизайны шынымен ұнауы мүмкін, бірақ олар тапсырыс беру кезінде қиындықтарға тап болады (жасырын алымдар, күрделі төлем, баяу жүктелу). Келесі қадамдар: 1) Пайдаланушылар нақты тапсырыс беретін, ал сіз бақылайтын юзабилити тестін өткізіңіз — бұл олардың дәл қай жерде бас тартатынын көрсетеді. 2) Ең жоғары түсіп қалу орын алатын нақты қадамды анықтау үшін тапсырыс беру воронкасының аналитикасын талдаңыз. 3) Жалпы қанағаттану емес, тапсырыс беру процесі туралы нақты сұрайтын қосымша сұхбаттар жүргізіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Wireframing",
        titleRu: "Вайрфрейминг",
        titleKk: "Вайрфрейминг",
        content: "Wireframes are low-fidelity blueprints of a digital interface that show layout, content placement, and navigation structure without visual styling. They use simple boxes, lines, and placeholder text to focus on functionality rather than aesthetics. Wireframing early in the design process prevents costly redesigns later by validating structure before investing in pixel-perfect visuals.",
        contentRu: "Вайрфреймы — это низкодетализированные макеты цифрового интерфейса, показывающие расположение элементов, контента и навигации без визуального оформления. Они используют простые прямоугольники, линии и текст-заполнитель, фокусируясь на функциональности, а не эстетике. Ранний вайрфрейминг предотвращает дорогостоящие переделки, валидируя структуру до создания детального дизайна.",
        contentKk: "Вайрфреймдер — бұл визуалды безендіруі жоқ, орналасуды, контент орнын және навигация құрылымын көрсететін сандық интерфейстің төмен деңгейлі макеті. Олар эстетикаға емес, функционалдылыққа назар аудару үшін қарапайым тіктөртбұрыштарды, сызықтарды және толтырғыш мәтінді пайдаланады. Дизайн процесінің басында вайрфрейминг піксельге дейін дәл визуалдарға инвестиция жасамас бұрын құрылымды тексеру арқылы қымбат қайта жобалаудың алдын алады.",
        keyFormulas: [
          {
            formula: "Fidelity levels: Sketch (paper) → Low-fi wireframe → Mid-fi wireframe → High-fi mockup → Prototype",
            formulaRu: "Уровни детализации: Скетч (бумага) → Низкодетальный вайрфрейм → Среднедетальный вайрфрейм → Высокодетальный макет → Прототип",
            formulaKk: "Дәлдік деңгейлері: Скетч (қағаз) → Төмен дәлдікті вайрфрейм → Орта дәлдікті вайрфрейм → Жоғары дәлдікті макет → Прототип",
            description: "Design progresses from rough concepts to detailed, interactive versions",
            descriptionRu: "Дизайн прогрессирует от черновых концепций к детальным интерактивным версиям",
            descriptionKk: "Дизайн қарапайым тұжырымдамалардан егжей-тегжейлі интерактивті нұсқаларға дейін ілгерілейді"
          }
        ],
        solvedExamples: [
          {
            question: "You are designing a mobile weather app. What elements should appear on the main wireframe screen?",
            questionRu: "Вы проектируете мобильное приложение погоды. Какие элементы должны быть на главном экране вайрфрейма?",
            questionKk: "Мобильді ауа райы қолданбасын жобалап жатырсыз. Негізгі вайрфрейм экранында қандай элементтер болуы керек?",
            steps: [
              { en: "Identify the user's primary need: see current weather at a glance. Secondary: hourly forecast, weekly forecast, location.", ru: "Определите основную потребность: быстро увидеть текущую погоду. Вторичные: почасовой прогноз, недельный, местоположение.", kk: "Негізгі қажеттілікті анықтаңыз: ағымдағы ауа райын бірден көру. Қосалқы: сағаттық болжам, апталық, орналасу." },
              { en: "Layout: top bar with location name, large center area for current temperature and condition, horizontal scroll for hourly forecast, list view for weekly forecast below.", ru: "Макет: верхняя панель с городом, большая центральная область для температуры и состояния, горизонтальная прокрутка для почасового прогноза, список для недельного прогноза ниже.", kk: "Макет: орналасу атауы бар жоғарғы панель, ағымдағы температура мен жағдай үшін үлкен орталық аймақ, сағаттық болжам үшін көлденең айналдыру, астында апталық болжам тізімі." }
            ],
            answer: "Top: location bar. Center: large current temperature and weather icon. Middle: horizontal hourly forecast scroll. Bottom: 7-day forecast list. All as simple boxes and placeholder text.",
            answerRu: "Сверху: панель местоположения. Центр: крупная текущая температура и иконка погоды. Середина: горизонтальная прокрутка почасового прогноза. Внизу: список 7-дневного прогноза. Всё в виде простых прямоугольников и текста-заполнителя.",
            answerKk: "Жоғарыда: орналасу панелі. Орталықта: ағымдағы температура мен ауа райы белгішесі ірі көрсетілген. Ортасында: сағаттық болжамның көлденең айналдыруы. Төменде: 7 күндік болжам тізімі. Барлығы қарапайым тіктөртбұрыштар мен толтырғыш мәтін түрінде."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the main difference between a wireframe and a final design mockup?",
            questionRu: "В чём главное различие между вайрфреймом и финальным макетом дизайна?",
            questionKk: "Вайрфрейм мен дизайнның соңғы макеті арасындағы негізгі айырмашылық қандай?",
            answer: "A wireframe shows layout and structure using simple shapes and placeholders without colors, images, or styling. A final mockup includes all visual details — colors, typography, images, and branding — and looks like the real product.",
            answerRu: "Вайрфрейм показывает макет и структуру с помощью простых фигур и заполнителей без цветов, изображений и стилей. Финальный макет включает все визуальные детали — цвета, типографику, изображения и брендинг — и выглядит как реальный продукт.",
            answerKk: "Вайрфрейм түстерсіз, кескіндерсіз және стильдерсіз қарапайым фигуралар мен толтырғыштар арқылы макет пен құрылымды көрсетеді. Соңғы макет барлық визуалды детальдарды — түстерді, типографияны, кескіндерді және брендингті — қамтиды және нақты өнім сияқты көрінеді.",
            hint: "One is a blueprint, the other is the finished building.",
            hintRu: "Одно — это чертёж, другое — готовое здание.",
            hintKk: "Бірі — сызба, екіншісі — дайын ғимарат.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why should wireframing happen before visual design, not after?",
            questionRu: "Почему вайрфрейминг должен быть до визуального дизайна, а не после?",
            questionKk: "Неліктен вайрфрейминг визуалды дизайннан бұрын болуы керек, кейін емес?",
            answer: "Wireframing first prevents costly redesigns. If you build pixel-perfect visuals first and then discover the layout or navigation does not work, you waste hours of detailed design work. Wireframes are fast and cheap to change — you can test and iterate on structure before committing to final visuals.",
            answerRu: "Вайрфрейминг в начале предотвращает дорогостоящие переделки. Если сначала создать детальные визуалы, а потом обнаружить, что макет или навигация не работают, вы потеряете часы детальной работы. Вайрфреймы быстро и дёшево менять — можно тестировать и итерировать структуру до перехода к финальным визуалам.",
            answerKk: "Алдымен вайрфрейминг жасау қымбат қайта жобалаудың алдын алады. Егер алдымен піксельге дейін дәл визуалдарды жасап, содан кейін макет немесе навигацияның жұмыс істемейтінін білсеңіз, сағаттаған егжей-тегжейлі жұмысты жоғалтасыз. Вайрфреймдерді өзгерту жылдам және арзан — соңғы визуалдарға көшпес бұрын құрылымды тестілеп, қайталауға болады.",
            hint: "Think about the cost of changing a blueprint versus changing a finished building.",
            hintRu: "Подумайте о стоимости изменения чертежа по сравнению с изменением готового здания.",
            hintKk: "Сызбаны өзгертудің құны мен дайын ғимаратты өзгертудің құнын салыстырыңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A client asks you to skip wireframing and go straight to high-fidelity design to 'save time.' Write a brief argument (3-4 points) for why this will actually cost more time and money.",
            questionRu: "Клиент просит пропустить вайрфрейминг и сразу перейти к детальному дизайну, чтобы «сэкономить время». Напишите краткий аргумент (3-4 пункта), почему это на самом деле обойдётся дороже.",
            questionKk: "Клиент «уақытты үнемдеу» үшін вайрфреймингті өткізіп, бірден жоғары деңгейлі дизайнға көшуді сұрайды. Бұл шын мәнінде неліктен көбірек уақыт пен ақша жұмсайтынын қысқаша дәлелдеңіз (3-4 тармақ).",
            answer: "1) Changing a wireframe takes minutes; changing a polished design takes hours — so iterations are 5-10x more expensive after visual design. 2) Without wireframes, structural problems (bad navigation, missing screens) are discovered late when they are hardest to fix. 3) Stakeholder feedback on visual designs gets distracted by colors and fonts instead of focusing on functionality. 4) Developers cannot start estimating technical effort without validated wireframes, delaying the entire project timeline. Wireframing adds 1-2 days upfront but saves 1-2 weeks of redesign later.",
            answerRu: "1) Изменение вайрфрейма занимает минуты; изменение готового дизайна — часы, поэтому итерации после визуального дизайна обходятся в 5-10 раз дороже. 2) Без вайрфреймов структурные проблемы (плохая навигация, отсутствующие экраны) обнаруживаются поздно, когда их сложнее всего исправить. 3) Обратная связь заинтересованных сторон по визуальным дизайнам отвлекается на цвета и шрифты вместо функциональности. 4) Разработчики не могут начать оценку технических трудозатрат без проверенных вайрфреймов, что задерживает весь проект. Вайрфрейминг добавляет 1-2 дня заранее, но экономит 1-2 недели переделок позже.",
            answerKk: "1) Вайрфреймді өзгерту минуттар алады; дайын дизайнды өзгерту сағаттар алады — сондықтан визуалды дизайннан кейінгі итерациялар 5-10 есе қымбатқа түседі. 2) Вайрфреймсіз құрылымдық мәселелер (нашар навигация, жетіспейтін экрандар) оларды түзету ең қиын кезде кеш анықталады. 3) Мүдделі тараптардың визуалды дизайндарға пікірлері функционалдылыққа емес, түстер мен қаріптерге алаңдайды. 4) Әзірлеушілер тексерілген вайрфреймдерсіз техникалық еңбек шығынын бағалай алмайды, бұл бүкіл жоба мерзімін кешіктіреді. Вайрфрейминг алдын ала 1-2 күн қосады, бірақ кейін 1-2 апта қайта жобалауды үнемдейді.",
            xp: 20
          }
        ]
      },
      {
        title: "Figma Prototyping",
        titleRu: "Прототипирование в Figma",
        titleKk: "Figma-да прототиптеу",
        content: "Figma is a collaborative design tool that lets teams create interactive prototypes without coding. Prototypes connect static screens with transitions, animations, and click interactions to simulate the real user experience. Key Figma features include components (reusable design elements), auto layout (responsive spacing), and prototype connections that define user flows from screen to screen.",
        contentRu: "Figma — это инструмент совместного дизайна, позволяющий командам создавать интерактивные прототипы без кода. Прототипы соединяют статичные экраны переходами, анимациями и взаимодействиями для симуляции реального пользовательского опыта. Ключевые функции Figma: компоненты (переиспользуемые элементы), auto layout (адаптивные отступы) и связи прототипа, определяющие пользовательские потоки.",
        contentKk: "Figma — командаларға кодсыз интерактивті прототиптер жасауға мүмкіндік беретін бірлескен дизайн құралы. Прототиптер нақты пайдаланушы тәжірибесін модельдеу үшін статикалық экрандарды ауысулармен, анимациялармен және клик өзара әрекеттерімен байланыстырады. Figma-ның негізгі мүмкіндіктері: компоненттер (қайта пайдаланылатын дизайн элементтері), auto layout (адаптивті аралық) және экраннан экранға пайдаланушы ағындарын анықтайтын прототип байланыстары.",
        keyFormulas: [
          {
            formula: "Component = Base design + Variants (states, sizes, themes)",
            formulaRu: "Компонент = Базовый дизайн + Варианты (состояния, размеры, темы)",
            formulaKk: "Компонент = Негізгі дизайн + Нұсқалар (күйлер, өлшемдер, тақырыптар)",
            description: "One source of truth for repeated UI elements across the entire design",
            descriptionRu: "Единый источник истины для повторяющихся UI-элементов во всём дизайне",
            descriptionKk: "Бүкіл дизайн бойынша қайталанатын UI элементтері үшін бірыңғай ақиқат көзі"
          }
        ],
        solvedExamples: [
          {
            question: "You need to create a button component in Figma that works in 3 states: default, hover, and disabled. How do you set this up?",
            questionRu: "Нужно создать компонент кнопки в Figma для 3 состояний: обычное, наведение и неактивное. Как это настроить?",
            questionKk: "Figma-да 3 күйде жұмыс істейтін түйме компонентін жасау керек: әдепкі, үстіне апарылған және өшірілген. Мұны қалай орнатасыз?",
            steps: [
              { en: "Create the base button design with auto layout (padding 12px/24px, text centered). Convert to a component.", ru: "Создайте базовый дизайн кнопки с auto layout (отступы 12px/24px, текст по центру). Конвертируйте в компонент.", kk: "Auto layout-пен базалық түйме дизайнын жасаңыз (толтыру 12px/24px, мәтін ортада). Компонентке түрлендіріңіз." },
              { en: "Add variants: Default (blue fill), Hover (darker blue fill), Disabled (gray fill, 50% opacity text). Name each variant clearly.", ru: "Добавьте варианты: Default (синяя заливка), Hover (более тёмный синий), Disabled (серая заливка, текст 50% прозрачности). Дайте каждому понятное имя.", kk: "Нұсқаларды қосыңыз: Default (көк толтыру), Hover (қоюырақ көк), Disabled (сұр толтыру, 50% мөлдірлік мәтін). Әрбір нұсқаға анық атау беріңіз." }
            ],
            answer: "Create base button with auto layout, convert to component, add 3 variants (Default, Hover, Disabled) with distinct visual states. All instances update automatically when the component is modified.",
            answerRu: "Создайте базовую кнопку с auto layout, конвертируйте в компонент, добавьте 3 варианта (Default, Hover, Disabled) с разными визуальными состояниями. Все экземпляры обновляются автоматически при изменении компонента.",
            answerKk: "Auto layout-пен базалық түйме жасаңыз, компонентке түрлендіріңіз, әртүрлі визуалды күйлері бар 3 нұсқа (Default, Hover, Disabled) қосыңыз. Компонент өзгертілгенде барлық данасы автоматты түрде жаңарады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a component in Figma?",
            questionRu: "Что такое компонент в Figma?",
            questionKk: "Figma-дағы компонент дегеніміз не?",
            answer: "A component is a reusable design element (like a button or card). When you update the main component, all instances of it across your design update automatically, ensuring consistency.",
            answerRu: "Компонент — это переиспользуемый элемент дизайна (например, кнопка или карточка). Когда вы обновляете главный компонент, все его экземпляры в дизайне обновляются автоматически, обеспечивая согласованность.",
            answerKk: "Компонент — қайта пайдаланылатын дизайн элементі (мысалы, түйме немесе карточка). Негізгі компонентті жаңартқанда, дизайндағы оның барлық данасы автоматты түрде жаңарып, сәйкестікті қамтамасыз етеді.",
            hint: "Think of it as a master template that controls all its copies.",
            hintRu: "Думайте об этом как о мастер-шаблоне, который контролирует все свои копии.",
            hintKk: "Оны барлық көшірмелерін басқаратын негізгі үлгі деп ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is auto layout in Figma and why is it useful?",
            questionRu: "Что такое auto layout в Figma и почему это полезно?",
            questionKk: "Figma-дағы auto layout дегеніміз не және неге пайдалы?",
            answer: "Auto layout automatically manages spacing, padding, and alignment of elements within a frame. When content changes (text gets longer, items are added or removed), the layout adjusts automatically. This is useful because it mimics real responsive behavior and saves time over manual positioning.",
            answerRu: "Auto layout автоматически управляет отступами, внутренними полями и выравниванием элементов внутри фрейма. Когда контент меняется (текст становится длиннее, элементы добавляются или удаляются), макет подстраивается автоматически. Это полезно, потому что имитирует настоящее адаптивное поведение и экономит время по сравнению с ручным позиционированием.",
            answerKk: "Auto layout фрейм ішіндегі элементтердің аралығын, ішкі жиегін және туралауын автоматты түрде басқарады. Контент өзгергенде (мәтін ұзарады, элементтер қосылады немесе алынады), макет автоматты түрде реттеледі. Бұл пайдалы, себебі ол нақты адаптивті мінез-құлықты имитациялайды және қолмен орналастыруға қарағанда уақыт үнемдейді.",
            hint: "Think about what happens to a list when you add or remove an item.",
            hintRu: "Подумайте, что происходит со списком, когда добавляете или удаляете элемент.",
            hintKk: "Тізімге элемент қосқанда немесе алып тастағанда не болатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are prototyping a mobile e-commerce app in Figma. The user flow is: Home → Product List → Product Detail → Add to Cart → Cart → Checkout. How do you connect these screens and what interactions would you add?",
            questionRu: "Вы прототипируете мобильное приложение e-commerce в Figma. Пользовательский поток: Главная → Список товаров → Карточка товара → Добавить в корзину → Корзина → Оформление. Как соединить экраны и какие взаимодействия добавить?",
            questionKk: "Figma-да мобильді e-commerce қолданбасын прототиптеп жатырсыз. Пайдаланушы ағыны: Басты бет → Өнім тізімі → Өнім мәліметтері → Себетке қосу → Себет → Тапсырыс. Экрандарды қалай байланыстырасыз және қандай өзара әрекеттер қосасыз?",
            answer: "1) Home → Product List: tap category card, slide-in transition from right. 2) Product List → Product Detail: tap product card, push transition. 3) Product Detail: 'Add to Cart' button triggers an overlay animation showing a success toast notification. 4) Tap cart icon → Cart screen: slide up from bottom (modal-style). 5) Cart → Checkout: tap 'Checkout' button, push transition. Add a back arrow on each screen connected to the previous screen with slide-back animation. Use Smart Animate for smooth transitions between component variants (button states, quantity changes).",
            answerRu: "1) Главная → Список товаров: тап по карточке категории, переход слайдом справа. 2) Список товаров → Карточка товара: тап по товару, push-переход. 3) Карточка товара: кнопка «Добавить в корзину» запускает анимацию оверлея с уведомлением-тостом об успехе. 4) Тап по иконке корзины → экран Корзины: выезжает снизу (в стиле модального окна). 5) Корзина → Оформление: тап по кнопке «Оформить», push-переход. Добавьте стрелку назад на каждом экране, связанную с предыдущим экраном анимацией возврата. Используйте Smart Animate для плавных переходов между вариантами компонентов (состояния кнопок, изменения количества).",
            answerKk: "1) Басты бет → Өнім тізімі: санат карточкасын түртіңіз, оңнан сырғып кіру ауысуы. 2) Өнім тізімі → Өнім мәліметтері: өнім карточкасын түртіңіз, push ауысуы. 3) Өнім мәліметтері: «Себетке қосу» түймесі сәттілік туралы тост хабарламасын көрсететін оверлей анимациясын іске қосады. 4) Себет белгішесін түрту → Себет экраны: астынан сырғып шығады (модал стилінде). 5) Себет → Тапсырыс: «Рәсімдеу» түймесін түртіңіз, push ауысуы. Әр экранда алдыңғы экранмен байланысты, кері сырғу анимациясы бар артқа көрсеткі қосыңыз. Компонент нұсқалары арасындағы тегіс ауысулар үшін (түйме күйлері, мөлшер өзгерістері) Smart Animate қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "User Testing",
        titleRu: "Тестирование с пользователями",
        titleKk: "Пайдаланушы тестілеу",
        content: "User testing puts your design in front of real people to observe how they interact with it. The most common method is moderated usability testing: giving users specific tasks and watching where they succeed, struggle, or fail. Testing with just 5 users reveals approximately 85% of usability problems, making it a high-impact, low-cost research method.",
        contentRu: "Пользовательское тестирование показывает ваш дизайн реальным людям для наблюдения за их взаимодействием. Самый распространённый метод — модерируемое юзабилити-тестирование: пользователям дают конкретные задачи и наблюдают, где они справляются, затрудняются или терпят неудачу. Тестирование с 5 пользователями выявляет примерно 85% проблем юзабилити.",
        contentKk: "Пайдаланушы тестілеу дизайнды нақты адамдарға көрсетіп, олардың өзара әрекетін бақылайды. Ең кең тараған әдіс — модерацияланған юзабилити тестілеу: пайдаланушыларға нақты тапсырмалар беріп, олардың қайда сәтті болатынын, қиналатынын немесе сәтсіздікке ұшырайтынын бақылау. Тек 5 пайдаланушымен тестілеу юзабилити мәселелерінің шамамен 85%-ын анықтайды.",
        keyFormulas: [
          {
            formula: "5-user rule: testing with 5 users finds ~85% of usability issues",
            formulaRu: "Правило 5 пользователей: тестирование с 5 пользователями выявляет ~85% проблем юзабилити",
            formulaKk: "5 пайдаланушы ережесі: 5 пайдаланушымен тестілеу қолданушылық мәселелердің ~85%-ын анықтайды",
            description: "Diminishing returns make large-scale testing unnecessary for most design iterations",
            descriptionRu: "Убывающая отдача делает масштабное тестирование ненужным для большинства итераций",
            descriptionKk: "Азайған қайтарым көптеген дизайн итерациялары үшін ауқымды тестілеуді қажетсіз етеді"
          }
        ],
        solvedExamples: [
          {
            question: "You are testing a new navigation menu. Write a usability test task that avoids leading the user.",
            questionRu: "Вы тестируете новое меню навигации. Напишите задачу для юзабилити-теста, которая не наводит пользователя.",
            questionKk: "Жаңа навигация менюін тестілеп жатырсыз. Пайдаланушыны бағыттамайтын юзабилити тест тапсырмасын жазыңыз.",
            steps: [
              { en: "Bad task: 'Click on the hamburger menu and find Settings.' This tells the user exactly where to go.", ru: "Плохая задача: «Нажмите на гамбургер-меню и найдите Настройки.» Это прямо указывает, куда идти.", kk: "Нашар тапсырма: «Гамбургер менюін басып, Параметрлерді табыңыз.» Бұл пайдаланушыға қайда бару керектігін тікелей айтады." },
              { en: "Good task: 'You want to change your notification preferences. How would you do that?' This tests natural navigation behavior.", ru: "Хорошая задача: «Вы хотите изменить настройки уведомлений. Как бы вы это сделали?» Это проверяет естественное навигационное поведение.", kk: "Жақсы тапсырма: «Хабарлама параметрлерін өзгерткіңіз келеді. Мұны қалай жасар едіңіз?» Бұл табиғи навигация мінез-құлқын тексереді." }
            ],
            answer: "Good task: 'You want to change your notification preferences. How would you do that?' This tests whether users can naturally find the feature without being told where it is.",
            answerRu: "Хорошая задача: «Вы хотите изменить настройки уведомлений. Как бы вы это сделали?» Она проверяет, могут ли пользователи естественно найти функцию без подсказки, где она находится.",
            answerKk: "Жақсы тапсырма: «Хабарлама параметрлерін өзгерткіңіз келеді. Мұны қалай жасар едіңіз?» Бұл пайдаланушылардың функцияны қайда екенін айтпай, табиғи түрде таба алатынын тексереді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many users do you need for a usability test to find most problems?",
            questionRu: "Сколько пользователей нужно для юзабилити-теста, чтобы найти большинство проблем?",
            questionKk: "Көптеген мәселелерді табу үшін юзабилити тестке қанша пайдаланушы қажет?",
            answer: "5 users. Research shows that 5 users find approximately 85% of usability issues. Testing more users has diminishing returns.",
            answerRu: "5 пользователей. Исследования показывают, что 5 пользователей находят примерно 85% проблем юзабилити. Тестирование большего числа пользователей даёт убывающую отдачу.",
            answerKk: "5 пайдаланушы. Зерттеулер 5 пайдаланушының юзабилити мәселелерінің шамамен 85%-ын табатынын көрсетеді. Көбірек пайдаланушыны тестілеу азайған қайтарым береді.",
            hint: "It is a surprisingly small number that reveals most problems.",
            hintRu: "Это удивительно маленькое число, которое выявляет большинство проблем.",
            hintKk: "Бұл көптеген мәселелерді анықтайтын таңқаларлықтай аз сан.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why should usability test tasks avoid telling users which buttons to click or menus to open?",
            questionRu: "Почему задачи юзабилити-теста не должны указывать, какие кнопки нажимать или меню открывать?",
            questionKk: "Неліктен юзабилити тест тапсырмалары пайдаланушыларға қандай түймелерді басу немесе менюлерді ашу керектігін айтпауы керек?",
            answer: "Leading tasks bias the results — they tell users where to go instead of testing whether they can find it naturally. The whole point of user testing is to see if the interface is intuitive without instructions. If you tell users where to click, you are testing their ability to follow directions, not your design's usability.",
            answerRu: "Наводящие задачи искажают результаты — они говорят пользователям, куда идти, вместо того чтобы проверить, найдут ли они это сами. Весь смысл пользовательского тестирования — увидеть, интуитивен ли интерфейс без инструкций. Если вы говорите пользователям, куда нажимать, вы тестируете их способность следовать указаниям, а не удобство вашего дизайна.",
            answerKk: "Бағыттаушы тапсырмалар нәтижелерді бұрмалайды — олар пайдаланушыларға қайда бару керектігін айтады, оның орнына олардың бұны өздігінен таба алатынын тексермейді. Пайдаланушы тестілеудің бүкіл мәні — интерфейстің нұсқаусыз интуитивті екенін көру. Пайдаланушыларға қайда басу керектігін айтсаңыз, сіз олардың нұсқауларды орындау қабілетін тестілеп жатырсыз, дизайныңыздың қолданушылығын емес.",
            hint: "You want to test the design, not the user's ability to follow instructions.",
            hintRu: "Вы хотите тестировать дизайн, а не способность пользователя следовать инструкциям.",
            hintKk: "Сіз нұсқауларды орындау қабілетін емес, дизайнды тестілегіңіз келеді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "After testing your app with 5 users, you found: 4/5 could not find the search function, 3/5 were confused by the checkout flow, and 2/5 did not notice the cart icon. Prioritize these issues and explain your reasoning.",
            questionRu: "После тестирования с 5 пользователями выяснилось: 4/5 не нашли поиск, 3/5 запутались в оформлении заказа, 2/5 не заметили иконку корзины. Расставьте приоритеты и обоснуйте.",
            questionKk: "5 пайдаланушымен тестілеу нәтижесінде: 4/5 іздеу функциясын таба алмады, 3/5 тапсырыс беру ағынынан шатасты, 2/5 себет белгішесін байқамады. Мәселелерге басымдық беріңіз және негіздемеңізді түсіндіріңіз.",
            answer: "Priority 1: Search (4/5 failed) — highest failure rate and search is a core navigation feature. If users cannot find products, nothing else matters. Fix: make search more prominent (larger, top of screen, with search icon and placeholder text). Priority 2: Checkout flow (3/5 confused) — directly impacts revenue. Confused checkout means abandoned orders. Fix: simplify steps, add progress indicator, reduce form fields. Priority 3: Cart icon (2/5 missed) — lower failure rate and less critical since users who complete checkout already found the cart. Fix: increase icon size, add item count badge, consider bottom navigation placement.",
            answerRu: "Приоритет 1: Поиск (4/5 не справились) — самый высокий процент неудач, а поиск является ключевой функцией навигации. Если пользователи не могут найти товары, ничего другого не имеет значения. Решение: сделать поиск заметнее (крупнее, вверху экрана, с иконкой поиска и текстом-подсказкой). Приоритет 2: Оформление заказа (3/5 запутались) — напрямую влияет на выручку. Запутанное оформление означает брошенные заказы. Решение: упростить шаги, добавить индикатор прогресса, уменьшить количество полей формы. Приоритет 3: Иконка корзины (2/5 не заметили) — более низкий процент неудач и менее критично, так как пользователи, завершившие оформление, уже нашли корзину. Решение: увеличить иконку, добавить бейдж с количеством товаров, рассмотреть размещение в нижней навигации.",
            answerKk: "1-басымдық: Іздеу (4/5 сәтсіз) — ең жоғары сәтсіздік көрсеткіші, әрі іздеу негізгі навигация функциясы. Пайдаланушылар өнімдерді таба алмаса, басқа ештеңенің мәні жоқ. Шешім: іздеуді көрнекірек ету (үлкенірек, экран жоғарысында, іздеу белгішесі мен орынбасар мәтінмен). 2-басымдық: Тапсырыс беру ағыны (3/5 шатасты) — табысқа тікелей әсер етеді. Шатасқан тапсырыс беру тасталған тапсырыстарды білдіреді. Шешім: қадамдарды жеңілдету, прогресс индикаторын қосу, форма өрістерін азайту. 3-басымдық: Себет белгішесі (2/5 байқамады) — сәтсіздік көрсеткіші төмен және аз маңызды, себебі тапсырысты аяқтаған пайдаланушылар себетті қазірдің өзінде тапқан. Шешім: белгіше өлшемін ұлғайту, өнім саны бейджін қосу, төменгі навигацияда орналастыруды қарастыру.",
            xp: 20
          }
        ]
      },
      {
        title: "Advanced Video Editing",
        titleRu: "Продвинутый монтаж видео",
        titleKk: "Жетілдірілген бейне монтаждау",
        content: "Advanced video editing goes beyond basic cuts to include color grading, multi-camera editing, speed ramping, and audio synchronization. Color grading transforms the mood of footage using LUTs (Look-Up Tables) and manual adjustments to shadows, midtones, and highlights. Multi-cam editing lets you switch between camera angles in real time, essential for interviews, events, and performances.",
        contentRu: "Продвинутый монтаж включает цветокоррекцию, мульти-камерный монтаж, изменение скорости и синхронизацию аудио. Цветокоррекция трансформирует настроение видео с помощью LUT (таблиц соответствия) и ручной настройки теней, средних тонов и светов. Мульти-камерный монтаж позволяет переключаться между ракурсами в реальном времени — незаменимо для интервью, мероприятий и выступлений.",
        contentKk: "Жетілдірілген бейне монтаждау негізгі кесулерден тыс түс коррекциясын, мульти-камералық монтажды, жылдамдықты өзгертуді және аудио синхрондауды қамтиды. Түс коррекциясы LUT (іздеу кестелері) және көлеңкелер, орта тондар мен жарықтарды қолмен реттеу арқылы бейне көңіл-күйін түрлендіреді. Мульти-камералық монтаж камера бұрыштары арасында нақты уақытта ауысуға мүмкіндік береді — сұхбаттар, іс-шаралар және өнерлер үшін маңызды.",
        keyFormulas: [
          {
            formula: "Color grading: Shadows (dark areas) + Midtones (middle range) + Highlights (bright areas)",
            formulaRu: "Цветокоррекция: Тени (тёмные участки) + Полутона (средний диапазон) + Света (яркие участки)",
            formulaKk: "Түс коррекциясы: Көлеңкелер (қою аймақтар) + Жартылай тондар (орта диапазон) + Жарық аймақтар (ашық жерлер)",
            description: "Adjusting these three ranges independently gives full control over the image mood",
            descriptionRu: "Независимая настройка трёх диапазонов даёт полный контроль над настроением изображения",
            descriptionKk: "Осы үш диапазонды дербес реттеу кескін көңіл-күйін толық бақылауға мүмкіндік береді"
          }
        ],
        solvedExamples: [
          {
            question: "You have footage of a sunset scene that looks flat and washed out. How would you color grade it to look cinematic?",
            questionRu: "У вас видео заката, которое выглядит плоским и блёклым. Как цветокоррекцией сделать его кинематографичным?",
            questionKk: "Күн батысы сахнасының бейнесі жалпақ және солғын көрінеді. Оны кинематографиялық етіп түс коррекциясын қалай жасайсыз?",
            steps: [
              { en: "First, increase contrast by darkening shadows and brightening highlights. This adds depth and drama.", ru: "Сначала увеличьте контраст: затемните тени и осветлите света. Это добавит глубину и драматичность.", kk: "Алдымен көлеңкелерді қоюландырып, жарықтарды жарықтандырып контрастты арттырыңыз. Бұл тереңдік пен драматизм қосады." },
              { en: "Push shadows toward teal/blue and highlights toward orange/amber — this creates the popular cinematic teal-orange look.", ru: "Сдвиньте тени к бирюзовому/синему, а света к оранжевому/янтарному — это создаст популярный кинематографичный вид.", kk: "Көлеңкелерді көгілдір/көкке, жарықтарды қызғылт сары/янтарьге жылжытыңыз — бұл танымал кинематографиялық көріністі жасайды." }
            ],
            answer: "Increase contrast (darken shadows, brighten highlights), then shift shadows toward teal/blue and highlights toward orange/amber for the cinematic teal-orange look.",
            answerRu: "Увеличьте контраст (затемните тени, осветлите света), затем сдвиньте тени к бирюзовому/синему, а света к оранжевому/янтарному для популярного кинематографичного вида «teal-orange».",
            answerKk: "Контрастты арттырыңыз (көлеңкелерді қоюландырып, жарықтарды жарықтандырыңыз), содан кейін танымал кинематографиялық «teal-orange» көрінісі үшін көлеңкелерді көгілдір/көкке, жарықтарды қызғылт сары/янтарьге жылжытыңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a LUT in video editing?",
            questionRu: "Что такое LUT в монтаже видео?",
            questionKk: "Бейне монтаждаудағы LUT дегеніміз не?",
            answer: "A LUT (Look-Up Table) is a preset color grading filter that maps input colors to output colors, instantly transforming the look and mood of footage. It is like an Instagram filter but more precise and professional.",
            answerRu: "LUT (таблица соответствия) — это предустановленный фильтр цветокоррекции, который преобразует входные цвета в выходные, мгновенно меняя вид и настроение видео. Это как фильтр Instagram, но точнее и профессиональнее.",
            answerKk: "LUT (іздеу кестесі) — кіру түстерін шығу түстеріне сәйкестендіретін, бейненің көрінісі мен көңіл-күйін лезде түрлендіретін алдын ала орнатылған түс коррекциясы сүзгісі. Бұл Instagram сүзгісі сияқты, бірақ дәлірек және кәсібирек.",
            hint: "Think of it as a color recipe that can be applied to any footage.",
            hintRu: "Думайте об этом как о цветовом рецепте, который можно применить к любому видео.",
            hintKk: "Оны кез келген бейнеге қолдануға болатын түс рецепті деп ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is speed ramping and when would you use it?",
            questionRu: "Что такое speed ramping и когда его использовать?",
            questionKk: "Speed ramping дегеніміз не және оны қашан қолданасыз?",
            answer: "Speed ramping is gradually changing the playback speed within a single clip — for example, going from normal speed to slow motion and back. Use it for dramatic moments in action sequences, sports highlights, or to emphasize a key moment by slowing down at the climax.",
            answerRu: "Speed ramping — это постепенное изменение скорости воспроизведения внутри одного клипа, например, переход от нормальной скорости к замедленной съёмке и обратно. Используйте это для драматичных моментов в экшн-сценах, спортивных хайлайтах или чтобы подчеркнуть ключевой момент, замедлив его в кульминации.",
            answerKk: "Speed ramping — бір клип ішінде ойнату жылдамдығын біртіндеп өзгерту, мысалы, қалыпты жылдамдықтан баяу қозғалысқа және кері ауысу. Оны экшн көріністеріндегі драмалық сәттер, спорт хайлайттары үшін немесе кульминацияда баяулатып негізгі сәтті атап көрсету үшін қолданыңыз.",
            hint: "Think about action movies where time seems to slow down at the most exciting moment.",
            hintRu: "Вспомните боевики, где время замедляется в самый напряжённый момент.",
            hintKk: "Уақыт ең қызықты сәтте баяулайтын экшн фильмдерді ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You filmed a 3-camera interview (wide shot, two close-ups). The cameras were not synced with timecode. Describe the workflow for creating a multi-cam edit.",
            questionRu: "Вы сняли интервью на 3 камеры (общий план, два крупных плана). Камеры не были синхронизированы по таймкоду. Опишите процесс мульти-камерного монтажа.",
            questionKk: "3 камерамен сұхбат түсірдіңіз (жалпы көрініс, екі жақын көрініс). Камералар таймкодпен синхрондалмаған. Мульти-камералық монтаждау жұмыс процесін сипаттаңыз.",
            answer: "1) Import all three camera angles into the editing software. 2) Sync the clips using audio waveforms — all cameras recorded the same conversation, so their audio peaks will match. 3) Create a multi-cam clip/sequence from the synced sources. 4) Play back the multi-cam sequence and switch between angles in real time using keyboard shortcuts (1, 2, 3 for each camera). 5) Fine-tune cut points on the timeline. 6) Use the wide shot as a safety angle for any moments where close-ups have issues.",
            answerRu: "1) Импортируйте все три ракурса камер в программу монтажа. 2) Синхронизируйте клипы по звуковым волнам — все камеры записали один и тот же разговор, поэтому пики звука совпадут. 3) Создайте мульти-камерный клип/секвенцию из синхронизированных источников. 4) Воспроизведите мульти-камерную секвенцию и переключайтесь между ракурсами в реальном времени с помощью горячих клавиш (1, 2, 3 для каждой камеры). 5) Точно настройте точки монтажа на таймлайне. 6) Используйте общий план как запасной ракурс на случай проблем с крупными планами.",
            answerKk: "1) Барлық үш камера бұрышын монтаждау бағдарламасына импорттаңыз. 2) Клиптерді дыбыс толқындары бойынша синхрондаңыз — барлық камералар бір әңгімені жазғандықтан, олардың дыбыс шыңдары сәйкес келеді. 3) Синхрондалған көздерден мульти-камералық клип/тізбек жасаңыз. 4) Мульти-камералық тізбекті ойнатып, пернетақта таңбашалары арқылы (әр камера үшін 1, 2, 3) бұрыштар арасында нақты уақытта ауысыңыз. 5) Таймлайндағы кесу нүктелерін дәл баптаңыз. 6) Жақын көріністерде мәселе болған сәттер үшін жалпы көріністі сақтық бұрышы ретінде қолданыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "VFX Basics",
        titleRu: "Основы VFX",
        titleKk: "VFX негіздері",
        content: "VFX (Visual Effects) adds or modifies visual elements in footage after filming. Core techniques include green screen (chroma key) compositing, motion tracking (attaching elements to moving objects), and rotoscoping (manually isolating objects frame by frame). Even simple VFX like screen replacements and text overlays can dramatically enhance video content.",
        contentRu: "VFX (визуальные эффекты) добавляет или изменяет визуальные элементы после съёмки. Основные техники включают хромакей (зелёный экран), трекинг движения (привязка элементов к движущимся объектам) и ротоскопинг (покадровое выделение объектов). Даже простые VFX вроде замены экранов и текстовых наложений значительно улучшают видеоконтент.",
        contentKk: "VFX (визуалды эффекттер) түсіруден кейін бейнедегі визуалды элементтерді қосады немесе өзгертеді. Негізгі тәсілдерге хромакей (жасыл экран) композиттеу, қозғалысты бақылау (элементтерді қозғалатын объектілерге бекіту) және ротоскопинг (объектілерді кадр бойынша қолмен оқшаулау) жатады. Экранды ауыстыру және мәтін қабаттау сияқты қарапайым VFX де бейне контентін айтарлықтай жақсарта алады.",
        keyFormulas: [
          {
            formula: "Chroma key: Uniform green/blue background + Even lighting = Clean key extraction",
            formulaRu: "Хромакей: Однородный зелёный/синий фон + Равномерное освещение = Чистое удаление фона",
            formulaKk: "Хромакей: Біркелкі жасыл/көк фон + Біркелкі жарықтандыру = Фонды таза алып тастау",
            description: "Consistent background color and lighting are essential for removing the background cleanly",
            descriptionRu: "Однородный цвет фона и равномерное освещение необходимы для чистого удаления фона",
            descriptionKk: "Фонды таза алып тастау үшін біркелкі фон түсі мен біркелкі жарықтандыру қажет"
          }
        ],
        solvedExamples: [
          {
            question: "You are setting up a green screen shoot. What three things must you get right for a clean chroma key?",
            questionRu: "Вы готовитесь к съёмке на зелёном экране. Какие три вещи нужно обеспечить для чистого хромакея?",
            questionKk: "Жасыл экранда түсіруге дайындалып жатырсыз. Таза хромакей үшін қандай үш нәрсені дұрыс жасау керек?",
            steps: [
              { en: "1) Stretch the green screen taut with no wrinkles — wrinkles create shadows that produce uneven color.", ru: "1) Натяните зелёный экран без складок — складки создают тени и неравномерный цвет.", kk: "1) Жасыл экранды қатпарсыз тартыңыз — қатпарлар көлеңке жасап, біркелкі емес түс береді." },
              { en: "2) Light the green screen evenly from both sides so there are no bright spots or dark patches. Keep the subject at least 6 feet from the screen to avoid green spill.", ru: "2) Осветите экран равномерно с обеих сторон без ярких пятен или тёмных участков. Объект — минимум 2 метра от экрана для предотвращения зелёного отражения.", kk: "2) Жасыл экранды екі жағынан біркелкі жарықтандырыңыз. Жасыл шағылысуды болдырмау үшін адамды экраннан кемінде 2 метр алыс қойыңыз." }
            ],
            answer: "1) Wrinkle-free screen, 2) Even lighting on both the screen and the subject, 3) Sufficient distance (6+ feet) between subject and screen to prevent green light spilling onto the subject.",
            answerRu: "1) Экран без складок, 2) Равномерное освещение экрана и объекта, 3) Достаточное расстояние (2+ метра) между объектом и экраном, чтобы предотвратить попадание зелёного света на объект.",
            answerKk: "1) Қатпарсыз экран, 2) Экран мен адамның біркелкі жарықтандырылуы, 3) Жасыл жарықтың адамға түсуін болдырмау үшін адам мен экран арасындағы жеткілікті қашықтық (2+ метр)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does chroma key (green screen) allow you to do?",
            questionRu: "Что позволяет делать хромакей (зелёный экран)?",
            questionKk: "Хромакей (жасыл экран) нені жасауға мүмкіндік береді?",
            answer: "Replace a solid-colored background (usually green) with any image or video in post-production. This lets you place a subject in any environment without physically being there.",
            answerRu: "Заменить однотонный фон (обычно зелёный) любым изображением или видео на постпродакшне. Это позволяет разместить объект в любой обстановке, не находясь там физически.",
            answerKk: "Біртекті фонды (әдетте жасыл) постпродакшнда кез келген кескінмен немесе бейнемен ауыстыру. Бұл адамды физически сол жерде болмай-ақ кез келген ортаға орналастыруға мүмкіндік береді.",
            hint: "Think about weather reporters standing in front of maps.",
            hintRu: "Вспомните, как ведущие прогноза погоды стоят перед картами.",
            hintKk: "Ауа райы диктор карталар алдында тұрғанын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is motion tracking and give one practical example of its use?",
            questionRu: "Что такое трекинг движения и приведите один практический пример использования.",
            questionKk: "Қозғалысты бақылау дегеніміз не және оны қолданудың бір практикалық мысалын келтіріңіз.",
            answer: "Motion tracking analyzes the movement of an object in footage and lets you attach other elements to it. Example: tracking a phone screen in someone's hand so you can replace the screen content with a different app display — the replacement moves perfectly with the phone.",
            answerRu: "Трекинг движения анализирует движение объекта в кадре и позволяет прикреплять к нему другие элементы. Пример: отслеживание экрана телефона в чьей-то руке, чтобы заменить содержимое экрана другим приложением — замена идеально повторяет движение телефона.",
            answerKk: "Қозғалысты бақылау бейнедегі объектінің қозғалысын талдап, оған басқа элементтерді бекітуге мүмкіндік береді. Мысал: адамның қолындағы телефон экранын бақылап, экран мазмұнын басқа қолданба көрінісімен ауыстыру — ауыстыру телефонның қозғалысын дәл қайталайды.",
            hint: "Think about attaching a digital element to something moving in the real video.",
            hintRu: "Подумайте о привязке цифрового элемента к движущемуся объекту в реальном видео.",
            hintKk: "Нақты бейнедегі қозғалатын объектіге сандық элементті бекітуді ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You shot green screen footage but there are problems: wrinkles in the screen creating dark spots, the subject's hair has green fringing, and there is a shadow on the lower-left corner. How do you fix each issue in post-production?",
            questionRu: "Вы сняли на зелёном экране, но есть проблемы: складки создают тёмные пятна, на волосах зелёная кайма, и тень в левом нижнем углу. Как исправить каждую проблему на постпродакшне?",
            questionKk: "Жасыл экранда түсірілген бейнеде мәселелер бар: қатпарлар қараңғы дақтар жасайды, адамның шашында жасыл жиек бар және сол жақ төменгі бұрышта көлеңке бар. Постпродакшнда әрбір мәселені қалай түзетесіз?",
            answer: "1) Wrinkle dark spots: use a garbage matte (rough mask) to exclude the wrinkled areas if they are at the edges. For center wrinkles, adjust the key's tolerance/softness settings to include the darker green shades. 2) Hair green fringing: use the edge refinement or spill suppression tool to desaturate green from the edge pixels. Apply a slight edge shrink to clip the green fringe. 3) Shadow in corner: draw a roto mask around the shadow area and key it separately with different settings, or garbage matte it out if the subject never enters that area.",
            answerRu: "1) Тёмные пятна от складок: используйте грубую маску (garbage matte), чтобы исключить смятые участки, если они у краёв. Для складок в центре настройте допуск/мягкость ключа, чтобы включить более тёмные оттенки зелёного. 2) Зелёная кайма на волосах: используйте инструмент уточнения краёв или подавления цветного отражения, чтобы обесцветить зелёный на пиксели края. Примените небольшое сжатие края, чтобы срезать зелёную кайму. 3) Тень в углу: нарисуйте ротомаску вокруг теневой области и обработайте ключом отдельно с другими настройками, либо вырежьте её грубой маской, если объект никогда туда не заходит.",
            answerKk: "1) Қатпарлардан пайда болған қараңғы дақтар: егер олар шеттерде болса, қатпарлы аймақтарды алып тастау үшін кедір-бұдыр маска (garbage matte) қолданыңыз. Орталықтағы қатпарлар үшін қараңғырақ жасыл реңктерді қосу үшін кілттің төзімділік/жұмсақтық параметрлерін реттеңіз. 2) Шаштағы жасыл жиек: шет пикселдерден жасылды түссіздендіру үшін шет дәлдеу немесе шағылысуды басу құралын қолданыңыз. Жасыл жиекті кесу үшін шетті сәл тарылтыңыз. 3) Бұрыштағы көлеңке: көлеңке аймағын рото-маскамен сызып, оны басқа параметрлермен бөлек кілттеңіз немесе адам ол аймаққа мүлдем кірмесе, оны кедір-бұдыр маскамен алып тастаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Podcast Production",
        titleRu: "Производство подкастов",
        titleKk: "Подкаст өндірісі",
        content: "Podcast production involves planning, recording, editing, and distributing audio content. Essential elements include a consistent format (intro, segments, outro), good microphone technique (6-12 inches from mic, pop filter for plosives), and audio editing for removing filler words, normalizing volume, and adding music beds. Distribution requires RSS feeds and hosting on platforms like Spotify and Apple Podcasts.",
        contentRu: "Производство подкастов включает планирование, запись, монтаж и дистрибуцию аудиоконтента. Основные элементы: постоянный формат (вступление, сегменты, завершение), правильная техника микрофона (15-30 см, поп-фильтр) и аудиомонтаж для удаления слов-паразитов, нормализации громкости и добавления музыки. Дистрибуция требует RSS-ленты и размещения на платформах вроде Spotify и Apple Podcasts.",
        contentKk: "Подкаст өндірісі аудио контентті жоспарлауды, жазуды, монтаждауды және таратуды қамтиды. Негізгі элементтер: тұрақты формат (кіріспе, сегменттер, қорытынды), жақсы микрофон техникасы (микрофоннан 15-30 см, поп-фильтр) және толтырғыш сөздерді жою, дыбыс деңгейін нормализациялау және музыка қосу үшін аудио монтаж. Тарату RSS арналарын және Spotify мен Apple Podcasts сияқты платформаларда орналастыруды қажет етеді.",
        keyFormulas: [
          {
            formula: "Podcast structure: Hook (30s) → Intro (30s) → Content segments → Outro (30s)",
            formulaRu: "Структура подкаста: Крючок (30с) → Вступление (30с) → Основные блоки → Заключение (30с)",
            formulaKk: "Подкаст құрылымы: Ілмек (30с) → Кіріспе (30с) → Негізгі блоктар → Қорытынды (30с)",
            description: "Consistent structure helps listeners know what to expect and improves retention",
            descriptionRu: "Постоянная структура помогает слушателям знать, чего ожидать, и улучшает удержание",
            descriptionKk: "Тұрақты құрылым тыңдаушыларға не күтуге болатынын білуге көмектеседі және ұстап тұруды жақсартады"
          }
        ],
        solvedExamples: [
          {
            question: "You are launching a weekly 30-minute interview podcast. Design the episode structure with timing.",
            questionRu: "Вы запускаете еженедельный 30-минутный подкаст-интервью. Разработайте структуру эпизода с таймингом.",
            questionKk: "Апталық 30 минуттық сұхбат подкастын іске қосып жатырсыз. Уақытымен эпизод құрылымын жобалаңыз.",
            steps: [
              { en: "Start with a hook: preview the most interesting quote from the interview to grab attention (0:00-0:30).", ru: "Начните с хука: превью самой интересной цитаты из интервью для привлечения внимания (0:00-0:30).", kk: "Хуктан бастаңыз: назар аудару үшін сұхбаттан ең қызықты дәйексөзді алдын ала көрсетіңіз (0:00-0:30)." },
              { en: "Intro music + host greeting + guest introduction (0:30-2:00). Main interview in 3 topic blocks of ~8 minutes each (2:00-26:00). Closing thoughts + call to action + outro music (26:00-30:00).", ru: "Интро-музыка + приветствие + представление гостя (0:30-2:00). Основное интервью из 3 тематических блоков по ~8 минут (2:00-26:00). Заключение + призыв к действию + аутро-музыка (26:00-30:00).", kk: "Кіріспе музыка + ведущі сәлемдесуі + қонақты таныстыру (0:30-2:00). 3 тақырыптық блоктан тұратын негізгі сұхбат, әрқайсысы ~8 минут (2:00-26:00). Қорытынды ойлар + әрекетке шақыру + аутро музыка (26:00-30:00)." }
            ],
            answer: "Hook (0:00-0:30), Intro + guest intro (0:30-2:00), 3 topic blocks × 8 min (2:00-26:00), Closing + CTA + outro (26:00-30:00).",
            answerRu: "Хук (0:00-0:30), Интро + представление гостя (0:30-2:00), 3 тематических блока × 8 мин (2:00-26:00), Заключение + CTA + аутро (26:00-30:00).",
            answerKk: "Хук (0:00-0:30), Кіріспе + қонақты таныстыру (0:30-2:00), 3 тақырыптық блок × 8 мин (2:00-26:00), Қорытынды + CTA + аутро (26:00-30:00)."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the recommended distance between your mouth and a podcast microphone?",
            questionRu: "Какое рекомендуемое расстояние между ртом и микрофоном для подкаста?",
            questionKk: "Подкаст микрофоны мен ауыз арасындағы ұсынылатын қашықтық қандай?",
            answer: "6-12 inches (15-30 cm). Too close causes plosive pops and bass proximity effect. Too far picks up room echo and sounds thin.",
            answerRu: "15-30 см (6-12 дюймов). Слишком близко вызывает «взрывные» звуки (плозивы) и эффект близости баса. Слишком далеко улавливает эхо комнаты и звучит тонко.",
            answerKk: "15-30 см (6-12 дюйм). Тым жақын болса, жарылғыш дыбыстар мен бас жақындық эффектін тудырады. Тым алыс болса, бөлме жаңғырығын қабылдайды және жіңішке дыбысталады.",
            hint: "About a hand's length away from the microphone.",
            hintRu: "Примерно на расстоянии ладони от микрофона.",
            hintKk: "Микрофоннан шамамен алақан ұзындығындай қашықтықта.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why should a podcast episode start with a hook before the intro music?",
            questionRu: "Почему эпизод подкаста должен начинаться с хука перед интро-музыкой?",
            questionKk: "Неліктен подкаст эпизоды кіріспе музыкадан бұрын хуктан басталуы керек?",
            answer: "A hook (a compelling quote, question, or preview) immediately grabs the listener's attention and gives them a reason to keep listening through the intro. Without it, listeners may skip to the next podcast during the generic intro music. Studies show the first 30 seconds determine whether a listener stays.",
            answerRu: "Хук (яркая цитата, вопрос или превью) мгновенно захватывает внимание слушателя и даёт причину дослушать через интро. Без него слушатели могут переключиться на другой подкаст во время стандартной интро-музыки. Исследования показывают, что первые 30 секунд определяют, останется ли слушатель.",
            answerKk: "Хук (тартымды дәйексөз, сұрақ немесе алдын ала көрсету) тыңдаушының назарын лезде аударады және кіріспе арқылы тыңдауды жалғастыруға себеп береді. Онсыз тыңдаушылар стандартты кіріспе музыкасы кезінде басқа подкастқа өтіп кетуі мүмкін. Зерттеулер алғашқы 30 секундтың тыңдаушының қаларын не қалмасын анықтайтынын көрсетеді.",
            hint: "Think about what makes you keep listening vs. hitting skip.",
            hintRu: "Подумайте, что заставляет вас продолжать слушать, а не нажать «пропустить».",
            hintKk: "Тыңдауды жалғастыруға не мәжбүрлейтінін немесе «өткізіп жіберуді» басуға не себеп болатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You recorded a 45-minute podcast interview but the guest went off-topic for 10 minutes in the middle, and there are frequent 'um' and 'uh' fillers throughout. The final episode should be 30 minutes. Describe your editing workflow.",
            questionRu: "Вы записали 45-минутное интервью-подкаст, но гость отклонялся от темы 10 минут, и есть частые «эм» и «ммм». Финальный эпизод должен быть 30 минут. Опишите процесс монтажа.",
            questionKk: "45 минуттық подкаст сұхбатын жаздыңыз, бірақ қонақ ортасында 10 минут тақырыптан ауытқыды, және жиі «мм» және «ээ» толтырғыштары бар. Соңғы эпизод 30 минут болуы керек. Монтаждау жұмыс процесін сипаттаңыз.",
            answer: "1) First pass: listen through and mark the 10-minute off-topic section for removal. This gets you to 35 minutes. 2) Second pass: remove obvious filler words (um, uh, long pauses) using a strip silence tool or manual cuts. Target removing 3-4 minutes of dead air. 3) Third pass: tighten transitions where you removed the off-topic section — add a brief host bridge or crossfade so it does not sound jarring. 4) Final pass: normalize audio levels, apply light compression for consistent volume, add intro/outro, and export at podcast-standard settings (44.1 kHz, 128 kbps MP3).",
            answerRu: "1) Первый проход: прослушайте всё и отметьте 10-минутный отрезок не по теме для удаления. Это доведёт запись до 35 минут. 2) Второй проход: удалите очевидные слова-паразиты (эм, ммм, долгие паузы) с помощью инструмента удаления тишины или ручных вырезок. Цель — убрать 3-4 минуты «мёртвого воздуха». 3) Третий проход: сгладьте переходы там, где удалён отрезок не по теме — добавьте короткую фразу ведущего-мостик или кроссфейд, чтобы это не звучало резко. 4) Финальный проход: нормализуйте громкость, примените лёгкую компрессию для стабильного звука, добавьте интро/аутро и экспортируйте в стандартных для подкастов настройках (44,1 кГц, 128 kbps MP3).",
            answerKk: "1) Бірінші өту: барлығын тыңдап, жоюға арналған тақырыптан тыс 10 минуттық бөлікті белгілеңіз. Бұл жазбаны 35 минутқа жеткізеді. 2) Екінші өту: тыныштықты кесу құралы немесе қолмен кесу арқылы айқын толтырғыш сөздерді (мм, ээ, ұзақ кідірістер) алып тастаңыз. Мақсат — 3-4 минут «өлі ауаны» алып тастау. 3) Үшінші өту: тақырыптан тыс бөлікті жойған жерде ауысуларды тегістеңіз — үзік естілмеуі үшін ведущінің қысқа көпір фразасын немесе кроссфейдті қосыңыз. 4) Соңғы өту: дыбыс деңгейлерін нормализациялаңыз, тұрақты дыбыс үшін жеңіл компрессия қолданыңыз, кіріспе/аутро қосыңыз және подкастқа стандартты параметрлермен экспорттаңыз (44,1 кГц, 128 kbps MP3).",
            xp: 20
          }
        ]
      },
      {
        title: "Brand Identity",
        titleRu: "Фирменный стиль",
        titleKk: "Бренд сәйкестігі",
        content: "Brand identity is the visual and verbal system that makes a brand recognizable — including the logo, color palette, typography, imagery style, and voice. A strong brand identity creates consistency across all touchpoints: website, social media, packaging, and marketing materials. The brand guidelines document codifies these rules so anyone on the team can create on-brand materials.",
        contentRu: "Фирменный стиль — это визуальная и вербальная система, делающая бренд узнаваемым — логотип, цветовая палитра, типографика, стиль изображений и голос бренда. Сильный фирменный стиль создаёт последовательность на всех точках контакта: сайт, соцсети, упаковка и маркетинговые материалы. Брендбук кодифицирует эти правила, чтобы любой член команды мог создавать материалы в стиле бренда.",
        contentKk: "Бренд сәйкестігі — бұл брендті танылатын ететін визуалды және вербалды жүйе — логотип, түс палитрасы, типографика, кескін стилі және дауыс. Күшті бренд сәйкестігі барлық байланыс нүктелерінде дәйектілік жасайды: веб-сайт, әлеуметтік желілер, орау және маркетинг материалдары. Бренд нұсқаулығы құжаты бұл ережелерді кодтайды, осылайша топтың кез келген мүшесі бренд стиліне сай материалдар жасай алады.",
        keyFormulas: [
          {
            formula: "Brand identity = Logo + Colors + Typography + Imagery + Voice + Guidelines",
            formulaRu: "Айдентика бренда = Логотип + Цвета + Типографика + Визуальные образы + Голос бренда + Гайдлайны",
            formulaKk: "Бренд айдентикасы = Логотип + Түстер + Типографика + Бейнелер + Бренд дауысы + Нұсқаулықтар",
            description: "The complete system that ensures consistent brand recognition across all materials",
            descriptionRu: "Полная система, обеспечивающая единообразное узнавание бренда во всех материалах",
            descriptionKk: "Барлық материалдарда дәйекті бренд танылуын қамтамасыз ететін толық жүйе"
          }
        ],
        solvedExamples: [
          {
            question: "A new coffee shop asks you to create their brand identity. They want to feel 'modern, warm, and approachable.' Choose a color palette and typography style.",
            questionRu: "Новая кофейня просит создать фирменный стиль. Они хотят быть «современными, тёплыми и доступными». Выберите цветовую палитру и стиль типографики.",
            questionKk: "Жаңа кофехана сізден бренд сәйкестігін жасауды сұрайды. Олар «заманауи, жылы және қол жетімді» болғысы келеді. Түс палитрасы мен типографика стилін таңдаңыз.",
            steps: [
              { en: "Modern: clean sans-serif font (like Inter or Poppins). Warm: earthy color palette with brown, cream, and terracotta. Approachable: rounded font styles and friendly imagery.", ru: "Современный: чистый шрифт без засечек (Inter или Poppins). Тёплый: землистая палитра — коричневый, кремовый, терракота. Доступный: округлые шрифты и дружелюбные изображения.", kk: "Заманауи: таза sans-serif қаріп (Inter немесе Poppins). Жылы: жер түстері палитрасы — қоңыр, кремді, терракота. Қол жетімді: дөңгелектенген қаріп стильдері және достық кескіндер." },
              { en: "Primary colors: rich brown (#6B4423) + cream (#FFF5E6). Accent: terracotta (#C45C3E). Typography: Poppins (headings, rounded-friendly) + Inter (body, clean-modern).", ru: "Основные цвета: насыщенный коричневый (#6B4423) + крем (#FFF5E6). Акцент: терракота (#C45C3E). Типографика: Poppins (заголовки) + Inter (текст).", kk: "Негізгі түстер: бай қоңыр (#6B4423) + кремді (#FFF5E6). Акцент: терракота (#C45C3E). Типографика: Poppins (тақырыптар) + Inter (мәтін)." }
            ],
            answer: "Colors: brown (#6B4423), cream (#FFF5E6), terracotta accent (#C45C3E). Typography: Poppins for headings (rounded, friendly), Inter for body (clean, modern). This combination is warm yet contemporary.",
            answerRu: "Цвета: коричневый (#6B4423), крем (#FFF5E6), акцент терракота (#C45C3E). Типографика: Poppins для заголовков (округлый, дружелюбный), Inter для текста (чистый, современный). Это сочетание тёплое, но при этом современное.",
            answerKk: "Түстер: қоңыр (#6B4423), кремді (#FFF5E6), терракота акценті (#C45C3E). Типографика: тақырыптарға Poppins (дөңгелектенген, достық), мәтінге Inter (таза, заманауи). Бұл үйлесім жылы, әрі заманауи."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three elements that make up a brand identity.",
            questionRu: "Назовите три элемента, составляющие фирменный стиль.",
            questionKk: "Бренд сәйкестігін құрайтын үш элементті атаңыз.",
            answer: "Logo, color palette, and typography. Additional elements include imagery style, brand voice, and guidelines document.",
            answerRu: "Логотип, цветовая палитра и типографика. Дополнительные элементы включают стиль изображений, голос бренда и документ с руководством.",
            answerKk: "Логотип, түс палитрасы және типографика. Қосымша элементтерге кескін стилі, бренд дауысы және нұсқаулық құжаты жатады.",
            hint: "Think about what makes a company instantly recognizable.",
            hintRu: "Подумайте, что делает компанию мгновенно узнаваемой.",
            hintKk: "Компанияны лезде танылатын ететін нәрсені ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is the purpose of a brand guidelines document?",
            questionRu: "Какова цель брендбука (руководства по бренду)?",
            questionKk: "Бренд нұсқаулығы құжатының мақсаты қандай?",
            answer: "It codifies all brand identity rules (logo usage, color codes, typography, spacing, imagery dos and don'ts) so that anyone on the team — designers, marketers, developers — can create materials that look consistent and on-brand without guessing. It prevents brand inconsistency as the team grows.",
            answerRu: "Он кодифицирует все правила фирменного стиля (использование логотипа, коды цветов, типографика, отступы, что можно и нельзя в изображениях), чтобы любой в команде — дизайнеры, маркетологи, разработчики — мог создавать материалы, которые выглядят последовательно и в стиле бренда, не гадая. Это предотвращает несогласованность бренда по мере роста команды.",
            answerKk: "Ол командадағы кез келген адам — дизайнерлер, маркетологтар, әзірлеушілер — болжамай-ақ дәйекті және бренд стиліне сай материалдар жасай алуы үшін бренд сәйкестігінің барлық ережелерін (логотипті қолдану, түс кодтары, типографика, аралық, кескіндердегі рұқсат етілген/етілмеген нәрселер) кодтайды. Бұл топ өскен сайын бренд сәйкессіздігінің алдын алады.",
            hint: "It is a rulebook that keeps the brand looking the same no matter who creates the materials.",
            hintRu: "Это свод правил, который поддерживает единый вид бренда независимо от того, кто создаёт материалы.",
            hintKk: "Бұл материалдарды кім жасаса да бренд бірдей көрінуін қамтамасыз ететін ережелер жинағы.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are rebranding a school club from an outdated, inconsistent visual identity to a modern, cohesive one. The club has a logo, Instagram page, posters, and T-shirts that all look different. Create a step-by-step rebranding plan.",
            questionRu: "Вы проводите ребрендинг школьного клуба: от устаревшего, непоследовательного визуального стиля к современному и цельному. У клуба есть логотип, Instagram, плакаты и футболки, которые выглядят по-разному. Создайте пошаговый план ребрендинга.",
            questionKk: "Мектеп клубын ескірген, дәйексіз визуалды сәйкестіктен заманауи, тұтас сәйкестікке қайта брендтеп жатырсыз. Клубта логотип, Instagram парақшасы, постерлер және жейделер бар — бәрі әр түрлі көрінеді. Кезеңдеп қайта брендтеу жоспарын жасаңыз.",
            answer: "1) Audit: document all existing materials and identify inconsistencies. Survey members about what the club represents. 2) Define brand attributes: choose 3-4 keywords that describe the club's personality (e.g., innovative, inclusive, energetic). 3) Design core elements: create a new logo, select a 3-color palette, choose primary and secondary fonts. 4) Create guidelines: document logo usage rules, color codes, font sizes, and imagery style in a simple 1-page guide. 5) Roll out: update Instagram profile and templates first (highest visibility), then posters, then T-shirts. 6) Train members: share the guidelines and create templates in Canva or Figma so anyone can create on-brand materials.",
            answerRu: "1) Аудит: задокументируйте все существующие материалы и выявите несоответствия. Опросите участников о том, что представляет клуб. 2) Определите атрибуты бренда: выберите 3-4 ключевых слова, описывающих характер клуба (например, инновационный, инклюзивный, энергичный). 3) Разработайте ключевые элементы: создайте новый логотип, выберите палитру из 3 цветов, основной и дополнительный шрифты. 4) Создайте руководство: задокументируйте правила использования логотипа, коды цветов, размеры шрифтов и стиль изображений в простом гайде на 1 страницу. 5) Внедрение: сначала обновите профиль и шаблоны Instagram (наибольшая видимость), затем плакаты, затем футболки. 6) Обучите участников: поделитесь руководством и создайте шаблоны в Canva или Figma, чтобы любой мог создавать материалы в стиле бренда.",
            answerKk: "1) Аудит: барлық қолданыстағы материалдарды құжаттап, сәйкессіздіктерді анықтаңыз. Клубтың нені білдіретіні туралы мүшелерден сауалнама алыңыз. 2) Бренд сипаттарын анықтаңыз: клубтың мінезін сипаттайтын 3-4 негізгі сөзді таңдаңыз (мысалы, инновациялық, инклюзивті, қуатты). 3) Негізгі элементтерді жобалаңыз: жаңа логотип жасаңыз, 3 түсті палитра таңдаңыз, негізгі және қосалқы қаріптерді таңдаңыз. 4) Нұсқаулық жасаңыз: логотипті қолдану ережелерін, түс кодтарын, қаріп өлшемдерін және кескін стилін қарапайым 1 беттік нұсқаулықта құжаттаңыз. 5) Іске қосу: алдымен Instagram профилі мен шаблондарын жаңартыңыз (ең жоғары көрінушілік), содан кейін постерлер, содан кейін жейделер. 6) Мүшелерді оқытыңыз: нұсқаулықпен бөлісіп, кез келген адам бренд стиліне сай материалдар жасай алатындай Canva немесе Figma-да шаблондар жасаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Design Thinking",
        titleRu: "Дизайн-мышление",
        titleKk: "Дизайн ойлау",
        content: "Design thinking is a problem-solving methodology that puts human needs at the center. The five stages — Empathize, Define, Ideate, Prototype, Test — form an iterative loop where insights from testing feed back into empathy and refinement. It works for any challenge, from product design to social issues, because it starts with understanding people rather than jumping to solutions.",
        contentRu: "Дизайн-мышление — это методология решения проблем, ставящая потребности людей в центр. Пять этапов — Эмпатия, Определение, Генерация идей, Прототипирование, Тестирование — образуют итеративный цикл, где результаты тестирования возвращаются к эмпатии и доработке. Метод работает для любых задач — от продуктового дизайна до социальных проблем — потому что начинается с понимания людей.",
        contentKk: "Дизайн ойлау — адам қажеттіліктерін орталыққа қоятын мәселені шешу методологиясы. Бес кезең — Эмпатия, Анықтау, Идеялау, Прототиптеу, Тестілеу — тестілеу нәтижелері эмпатия мен жетілдіруге қайта оралатын итеративті цикл құрайды. Ол кез келген сыйпайдалар үшін жұмыс істейді — өнім дизайнынан әлеуметтік мәселелерге дейін — өйткені шешімдерге секірмей, адамдарды түсінуден басталады.",
        keyFormulas: [
          {
            formula: "Design Thinking: Empathize → Define → Ideate → Prototype → Test → (repeat)",
            formulaRu: "Дизайн-мышление: Эмпатия → Определение → Генерация идей → Прототип → Тестирование → (повтор)",
            formulaKk: "Дизайн-ойлау: Эмпатия → Анықтау → Идея генерациясы → Прототип → Тестілеу → (қайталау)",
            description: "Five-stage iterative process for human-centered problem solving",
            descriptionRu: "Пятиэтапный итеративный процесс для решения проблем, ориентированного на человека",
            descriptionKk: "Адамға бағытталған мәселе шешуге арналған бес кезеңді итеративті процесс"
          }
        ],
        solvedExamples: [
          {
            question: "Students at your school complain that the cafeteria line is too slow. Apply the design thinking process to solve this.",
            questionRu: "Ученики жалуются, что очередь в столовой слишком медленная. Примените дизайн-мышление для решения проблемы.",
            questionKk: "Мектептегі оқушылар асхана кезегінің тым баяу екеніне шағымданады. Мұны шешу үшін дизайн ойлау процесін қолданыңыз.",
            steps: [
              { en: "Empathize: observe the cafeteria during peak hours, interview students and staff. Define: 'Students lose 10+ minutes of their 30-minute lunch waiting in line because there is only one serving station.'", ru: "Эмпатия: наблюдайте за столовой в пиковые часы, опросите учеников и персонал. Определение: «Ученики теряют 10+ минут из 30-минутного обеда в очереди, потому что есть только одна точка раздачи.»", kk: "Эмпатия: ең жоғары сағаттарда асхананы бақылаңыз, оқушылар мен қызметкерлерден сұхбат алыңыз. Анықтау: «Оқушылар 30 минуттық түскі асының 10+ минутын кезекте жоғалтады, өйткені тек бір тарату станциясы бар.»" },
              { en: "Ideate: brainstorm solutions — pre-ordering app, two serving lines, staggered lunch periods. Prototype: test a paper-based pre-order system for one week. Test: measure if wait times decreased.", ru: "Генерация идей: мозговой штурм — приложение предзаказа, две линии раздачи, смещённые обеденные периоды. Прототип: тестируйте бумажную систему предзаказа неделю. Тест: измерьте, уменьшилось ли время ожидания.", kk: "Идеялау: шешімдерді миға шабуыл — алдын ала тапсырыс қолданбасы, екі тарату желісі, кезектелген түскі ас кезеңдері. Прототиптеу: қағазға негізделген алдын ала тапсырыс жүйесін бір апта бойы тестілеңіз. Тестілеу: күту уақыты қысқарғанын өлшеңіз." }
            ],
            answer: "Empathize (observe, interview), Define (one serving station causes 10+ min waits), Ideate (pre-orders, multiple lines, staggered periods), Prototype (test paper pre-order for a week), Test (measure wait time improvement). Iterate based on results.",
            answerRu: "Эмпатия (наблюдение, интервью), Определение (одна точка раздачи вызывает 10+ минут ожидания), Генерация идей (предзаказы, несколько линий, смещённые периоды), Прототип (тестирование бумажного предзаказа неделю), Тест (измерение улучшения времени ожидания). Итерация на основе результатов.",
            answerKk: "Эмпатия (бақылау, сұхбат), Анықтау (бір тарату станциясы 10+ минут күтуге әкеледі), Идеялау (алдын ала тапсырыстар, бірнеше желі, кезектелген кезеңдер), Прототип (қағаз алдын ала тапсырысты бір апта тестілеу), Тест (күту уақытының жақсаруын өлшеу). Нәтижелер негізінде қайталау."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What are the five stages of design thinking?",
            questionRu: "Назовите пять этапов дизайн-мышления.",
            questionKk: "Дизайн ойлаудың бес кезеңін атаңыз.",
            answer: "Empathize (understand users), Define (frame the problem), Ideate (brainstorm solutions), Prototype (build quick models), Test (get user feedback). The process is iterative — you can return to earlier stages based on what you learn.",
            answerRu: "Эмпатия (понять пользователей), Определение (сформулировать проблему), Генерация идей (мозговой штурм решений), Прототип (построить быстрые модели), Тест (получить обратную связь от пользователей). Процесс итеративный — можно возвращаться к более ранним этапам на основе того, что вы узнали.",
            answerKk: "Эмпатия (пайдаланушыларды түсіну), Анықтау (мәселені тұжырымдау), Идеялау (шешімдерді миға шабуыл), Прототип (жылдам модельдер құру), Тест (пайдаланушылардан кері байланыс алу). Процесс итеративті — білгеніңізге сүйене отырып алдыңғы кезеңдерге қайта оралуға болады.",
            hint: "The process starts with understanding people and ends with testing solutions.",
            hintRu: "Процесс начинается с понимания людей и заканчивается тестированием решений.",
            hintKk: "Процесс адамдарды түсінуден басталады және шешімдерді тестілеумен аяқталады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why does design thinking start with 'Empathize' rather than 'Ideate'?",
            questionRu: "Почему дизайн-мышление начинается с «Эмпатии», а не с «Генерации идей»?",
            questionKk: "Неліктен дизайн ойлау «Идеялаудан» емес, «Эмпатиядан» басталады?",
            answer: "Starting with empathy ensures you understand the real problem before jumping to solutions. Without empathy, you risk building a perfect solution to the wrong problem. Many product failures happen because teams assumed they knew what users needed instead of asking and observing first.",
            answerRu: "Начиная с эмпатии, вы гарантируете, что понимаете реальную проблему, прежде чем переходить к решениям. Без эмпатии есть риск создать идеальное решение неправильной проблемы. Многие продукты терпят неудачу, потому что команды предполагали, что знают потребности пользователей, вместо того чтобы сначала спросить и понаблюдать.",
            answerKk: "Эмпатиядан бастау шешімдерге көшпес бұрын нақты мәселені түсінуіңізді қамтамасыз етеді. Эмпатиясыз дұрыс емес мәселеге тамаша шешім жасау қаупі бар. Көптеген өнім сәтсіздіктері командалардың алдымен сұрап, бақылаудың орнына пайдаланушыларға не керек екенін білеміз деп ойлауынан болады.",
            hint: "You cannot solve a problem correctly if you do not understand it correctly first.",
            hintRu: "Нельзя правильно решить проблему, если сначала её правильно не понять.",
            hintKk: "Мәселені алдымен дұрыс түсінбесеңіз, оны дұрыс шеше алмайсыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your school wants to improve the library experience. Using design thinking, you discovered that students avoid the library because it is too quiet and feels isolating. However, the librarian insists on strict silence rules. How would you navigate this conflict through the Define and Ideate stages?",
            questionRu: "Школа хочет улучшить библиотечный опыт. Используя дизайн-мышление, вы обнаружили, что ученики избегают библиотеки из-за тишины и ощущения изоляции. Но библиотекарь настаивает на строгих правилах тишины. Как решить этот конфликт на этапах Определения и Генерации идей?",
            questionKk: "Мектеп кітапхана тәжірибесін жақсартқысы келеді. Дизайн ойлауды қолданып, оқушылардың кітапхананы тым тыныш және оқшаулаушы болғандықтан алыс жүретінін анықтадыңыз. Бірақ кітапханашы қатаң тыныштық ережелерін талап етеді. Анықтау және Идеялау кезеңдері арқылы бұл қайшылықты қалай шешер едіңіз?",
            answer: "Define: Reframe the problem to satisfy both needs — 'How might we make the library welcoming and social while preserving quiet study options?' This avoids an either/or conflict. Ideate: 1) Zone the library into quiet and collaborative areas with clear signage and physical separation. 2) Create a 'library cafe' area near the entrance for social study with soft background music. 3) Designate specific hours for collaborative work (e.g., lunch period = social, after school = quiet). 4) Add comfortable seating areas with group tables and individual pods. The key insight is that both needs are valid — the solution is spatial or temporal separation, not choosing one over the other.",
            answerRu: "Определение: Переформулируйте проблему так, чтобы удовлетворить обе потребности — «Как нам сделать библиотеку гостеприимной и социальной, сохранив при этом варианты для тихой учёбы?» Это избегает конфликта «или-или». Генерация идей: 1) Разделите библиотеку на тихие и совместные зоны с чёткими указателями и физическим разделением. 2) Создайте зону «библиотечное кафе» у входа для совместной учёбы с тихой фоновой музыкой. 3) Выделите определённые часы для совместной работы (например, обеденный перерыв — социальный, после уроков — тихий). 4) Добавьте удобные зоны отдыха с групповыми столами и индивидуальными местами. Ключевой инсайт в том, что обе потребности законны — решение в пространственном или временном разделении, а не в выборе одного варианта вместо другого.",
            answerKk: "Анықтау: Мәселені екі қажеттілікті де қанағаттандыратындай қайта тұжырымдаңыз — «Тыныш оқу нұсқаларын сақтай отырып, кітапхананы қалай қонақжай және әлеуметтік ете аламыз?» Бұл «немесе-немесе» қайшылығынан аулақ болады. Идеялау: 1) Кітапхананы анық белгілермен және физикалық бөлумен тыныш және бірлескен аймақтарға бөліңіз. 2) Кіреберісте жұмсақ фондық музыкамен «кітапхана кафесі» аймағын жасаңыз. 3) Бірлескен жұмыс үшін нақты сағаттар белгілеңіз (мысалы, түскі ас уақыты — әлеуметтік, сабақтан кейін — тыныш). 4) Топтық үстелдер мен жеке орындары бар ыңғайлы отыру аймақтарын қосыңыз. Негізгі түйсік — екі қажеттілік те заңды, шешім бір нұсқаны таңдау емес, кеңістіктік немесе уақыттық бөлу.",
            xp: 20
          }
        ]
      }
    ]
  },
  "Digital Creativity_12": {
    planetName: "Digital Creativity",
    introduction: {
      en: "You prepare for a professional creative career — building portfolios, mastering advanced tools, exploring AR/VR, learning freelance business skills, and developing creative direction capabilities.",
      ru: "Вы готовитесь к профессиональной творческой карьере — создаёте портфолио, осваиваете продвинутые инструменты, изучаете AR/VR, фриланс-бизнес и развиваете навыки креативного руководства."
    },
    sections: [
      {
        title: "Professional Portfolio",
        titleRu: "Профессиональное портфолио",
        titleKk: "Кәсіби портфолио",
        content: "A professional portfolio showcases your best creative work to potential employers or clients. Quality over quantity is essential — 6-10 strong projects are better than 30 mediocre ones. Each project should include a clear problem statement, your process, the solution, and measurable results. Online portfolios using platforms like Behance, Dribbble, or a personal website are the industry standard.",
        contentRu: "Профессиональное портфолио демонстрирует лучшие творческие работы потенциальным работодателям или клиентам. Качество важнее количества — 6-10 сильных проектов лучше 30 посредственных. Каждый проект должен включать описание проблемы, процесс, решение и измеримые результаты. Онлайн-портфолио на Behance, Dribbble или личном сайте — отраслевой стандарт.",
        contentKk: "Кәсіби портфолио ең жақсы шығармашылық жұмыстарыңызды әлеуетті жұмыс берушілерге немесе клиенттерге көрсетеді. Сапа санынан маңыздырақ — 6-10 күшті жоба 30 орташадан жақсырақ. Әрбір жоба мәселенің нақты сипаттамасын, процесіңізді, шешімді және өлшенетін нәтижелерді қамтуы керек. Behance, Dribbble немесе жеке вебсайтта онлайн портфолио — сала стандарты.",
        keyFormulas: [
          {
            formula: "Case study format: Problem → Process → Solution → Results",
            formulaRu: "Формат кейс-стади: Проблема → Процесс → Решение → Результаты",
            formulaKk: "Кейс-стади форматы: Мәселе → Процесс → Шешім → Нәтижелер",
            description: "Shows clients and employers not just what you made, but how you think",
            descriptionRu: "Показывает клиентам и работодателям не только что вы сделали, но и как вы думаете",
            descriptionKk: "Клиенттер мен жұмыс берушілерге тек не жасағаныңызды емес, қалай ойлайтыныңызды көрсетеді"
          }
        ],
        solvedExamples: [
          {
            question: "You have 15 creative projects from the past two years. How do you select which ones to include in your portfolio?",
            questionRu: "У вас 15 творческих проектов за последние два года. Как выбрать, какие включить в портфолио?",
            questionKk: "Соңғы екі жылда 15 шығармашылық жобаңыз бар. Портфолиоға қайсыларын қосуды қалай таңдайсыз?",
            steps: [
              { en: "Filter by quality and relevance: keep only projects where you are proud of the outcome AND that align with the type of work you want to get hired for.", ru: "Фильтруйте по качеству и релевантности: оставьте только проекты, которыми гордитесь И которые соответствуют желаемой работе.", kk: "Сапа мен сәйкестілік бойынша сүзіңіз: тек нәтижесімен мақтанатын ЖӘНЕ жұмысқа алынғыңыз келетін жұмыс түріне сәйкес жобаларды қалдырыңыз." },
              { en: "Select 6-8 projects that show range (different project types) and depth (detailed case studies). Lead with your strongest piece.", ru: "Выберите 6-8 проектов, демонстрирующих разнообразие (разные типы) и глубину (детальные кейс-стади). Начните с сильнейшего.", kk: "Ауқымды (әртүрлі жоба түрлері) және тереңдікті (толық кейс-стади) көрсететін 6-8 жобаны таңдаңыз. Ең күштісінен бастаңыз." }
            ],
            answer: "Select 6-8 projects that are high quality, relevant to your career goals, and show range. Lead with your strongest piece. Each should have a case study explaining problem, process, solution, and results.",
            answerRu: "Выберите 6-8 проектов высокого качества, соответствующих вашим карьерным целям и демонстрирующих разнообразие. Начните с самой сильной работы. У каждого должен быть кейс-стади, объясняющий проблему, процесс, решение и результаты.",
            answerKk: "Мансаптық мақсаттарыңызға сай, сапалы және ауқымды көрсететін 6-8 жобаны таңдаңыз. Ең күшті жұмысыңыздан бастаңыз. Әрқайсысында мәселені, процесті, шешімді және нәтижелерді түсіндіретін кейс-стади болуы керек."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "How many projects should a strong portfolio typically contain?",
            questionRu: "Сколько проектов обычно должно быть в сильном портфолио?",
            questionKk: "Күшті портфолиода әдетте қанша жоба болуы керек?",
            answer: "6-10 strong projects. Quality is more important than quantity — a few excellent case studies make a better impression than many mediocre examples.",
            answerRu: "6-10 сильных проектов. Качество важнее количества — несколько отличных кейс-стади производят лучшее впечатление, чем множество посредственных примеров.",
            answerKk: "6-10 күшті жоба. Сапа саннан маңыздырақ — бірнеше тамаша кейс-стади көптеген орташа мысалдарға қарағанда жақсырақ әсер қалдырады.",
            hint: "Think quality over quantity.",
            hintRu: "Думайте о качестве, а не количестве.",
            hintKk: "Сан емес, сапа туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why should portfolio projects be presented as case studies rather than just images?",
            questionRu: "Почему проекты в портфолио лучше представлять как кейс-стади, а не просто изображения?",
            questionKk: "Неліктен портфолио жобаларын тек кескіндер емес, кейс-стади ретінде көрсеткен жөн?",
            answer: "Case studies show your thinking process, not just the final output. Employers and clients want to know HOW you solve problems: what was the challenge, what options did you consider, why did you choose this approach, and what impact did it have. Beautiful images show skill; case studies show strategic thinking and professionalism.",
            answerRu: "Кейс-стади показывают ваш ход мыслей, а не только конечный результат. Работодатели и клиенты хотят знать, КАК вы решаете проблемы: в чём была сложность, какие варианты вы рассматривали, почему выбрали этот подход и какой эффект он дал. Красивые изображения показывают мастерство; кейс-стади показывают стратегическое мышление и профессионализм.",
            answerKk: "Кейс-стади тек соңғы нәтижені емес, сіздің ойлау процесіңізді көрсетеді. Жұмыс берушілер мен клиенттер мәселелерді ҚАЛАЙ шешетініңізді білгісі келеді: қиындық неде болды, қандай нұсқаларды қарастырдыңыз, неліктен осы тәсілді таңдадыңыз және оның қандай әсері болды. Әдемі кескіндер шеберлікті көрсетеді; кейс-стади стратегиялық ойлау мен кәсібилікті көрсетеді.",
            hint: "Clients hire you for your problem-solving ability, not just your visual skills.",
            hintRu: "Клиенты нанимают за способность решать проблемы, а не только за визуальные навыки.",
            hintKk: "Клиенттер сізді тек визуалды дағдыларыңыз үшін емес, мәселелерді шешу қабілетіңіз үшін жалдайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are applying for a UI/UX design internship but most of your portfolio is graphic design work (logos, posters). You have only one app design project. How do you restructure your portfolio to be competitive?",
            questionRu: "Вы подаёте на стажировку по UI/UX-дизайну, но большинство работ — графический дизайн (логотипы, плакаты). У вас только один проект дизайна приложения. Как перестроить портфолио для конкурентоспособности?",
            questionKk: "UI/UX дизайн тағылымдамасына өтініш бересіз, бірақ портфолиоңыздың көбі графикалық дизайн (логотиптер, постерлер). Тек бір қолданба дизайн жобаңыз бар. Бәсекеге қабілетті болу үшін портфолиоңызды қалай қайта құрасыз?",
            answer: "1) Lead with your one app design project as a detailed case study with full UX process (research, wireframes, prototypes, testing). 2) Create 2-3 concept projects: redesign a popular app or design a new app solving a real problem — these show UI/UX skills even without a client. 3) Reframe your graphic design work through a UX lens: show the logo project as 'brand identity research and design' with user personas and competitor analysis. 4) Add a personal UX project: conduct a usability audit of a local business website with recommendations. 5) Remove pure graphic design pieces that do not demonstrate any UX thinking.",
            answerRu: "1) Начните с единственного проекта дизайна приложения как детального кейс-стади с полным UX-процессом (исследование, вайрфреймы, прототипы, тестирование). 2) Создайте 2-3 концептуальных проекта: редизайн популярного приложения или дизайн нового, решающего реальную проблему — это показывает UI/UX-навыки даже без клиента. 3) Переосмыслите работы графического дизайна через призму UX: покажите проект логотипа как «исследование и дизайн фирменного стиля» с персонами пользователей и анализом конкурентов. 4) Добавьте личный UX-проект: проведите аудит юзабилити сайта местного бизнеса с рекомендациями. 5) Уберите чисто графические работы, не демонстрирующие UX-мышление.",
            answerKk: "1) Толық UX процесі (зерттеу, вайрфреймдер, прототиптер, тестілеу) бар толық кейс-стади ретінде жалғыз қолданба дизайн жобаңыздан бастаңыз. 2) 2-3 концептуалды жоба жасаңыз: танымал қолданбаны қайта дизайндау немесе нақты мәселені шешетін жаңа қолданба дизайндау — бұл клиентсіз де UI/UX дағдыларын көрсетеді. 3) Графикалық дизайн жұмыстарыңызды UX призмасы арқылы қайта қараңыз: логотип жобасын пайдаланушы персоналары мен бәсекелестер талдауы бар «бренд сәйкестігін зерттеу және дизайн» ретінде көрсетіңіз. 4) Жеке UX жобасын қосыңыз: ұсыныстары бар жергілікті бизнес вебсайтының юзабилити аудитін жүргізіңіз. 5) Ешбір UX ойлауын көрсетпейтін таза графикалық дизайн жұмыстарын алып тастаңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Motion Design",
        titleRu: "Моушн-дизайн",
        titleKk: "Моушн-дизайн",
        content: "Motion design combines graphic design, animation, and storytelling to create dynamic visual experiences. Advanced techniques include character rigging, particle effects, expression-based animation (writing code to control movement), and 3D integration. The 12 principles of animation — such as squash and stretch, anticipation, and ease in/out — originate from Disney and remain the foundation of all believable motion.",
        contentRu: "Моушн-дизайн сочетает графический дизайн, анимацию и сторителлинг для создания динамичных визуальных впечатлений. Продвинутые техники включают риггинг персонажей, частицы, анимацию на выражениях (код для управления движением) и 3D-интеграцию. 12 принципов анимации — сжатие-растяжение, предвосхищение, плавные входы/выходы — придуманы Disney и остаются фундаментом всей реалистичной анимации.",
        contentKk: "Моушн-дизайн графикалық дизайнды, анимацияны және тарих айтуды динамикалық визуалды тәжірибелер жасау үшін біріктіреді. Жетілдірілген тәсілдерге кейіпкер риггингі, бөлшек эффекттері, өрнекке негізделген анимация (қозғалысты басқару кодын жазу) және 3D интеграция жатады. Анимацияның 12 принципі — мысалы, сығу мен созу, алдын ала сезіну, ease in/out — Disney-ден шыққан және барлық сенімді қозғалыстың негізі болып қала береді.",
        keyFormulas: [
          {
            formula: "Squash & Stretch: exaggerate deformation to convey weight and flexibility",
            formulaRu: "Squash & Stretch: преувеличивайте деформацию, чтобы передать вес и гибкость",
            formulaKk: "Squash & Stretch: салмақ пен серпімділікті жеткізу үшін деформацияны әсірелеңіз",
            description: "The most important of the 12 animation principles — gives life to any object",
            descriptionRu: "Самый важный из 12 принципов анимации — оживляет любой объект",
            descriptionKk: "12 анимация принципінің ең маңыздысы — кез келген объектіге жан береді"
          }
        ],
        solvedExamples: [
          {
            question: "You are animating a bouncing ball. How do you apply squash and stretch to make it look realistic?",
            questionRu: "Вы анимируете прыгающий мяч. Как применить сжатие-растяжение для реалистичности?",
            questionKk: "Секіретін допты анимациялап жатырсыз. Шынайы көрсету үшін сығу мен созуды қалай қолданасыз?",
            steps: [
              { en: "Stretch the ball vertically as it falls (moving fast through the air) and squash it horizontally when it hits the ground (absorbing impact energy).", ru: "Растяните мяч вертикально при падении (быстрое движение) и сожмите горизонтально при ударе о землю (поглощение энергии удара).", kk: "Допты түсу кезінде тігінен созыңыз (ауада тез қозғалу) және жерге тигенде көлденеңінен сығыңыз (соққы энергиясын сіңіру)." },
              { en: "Maintain volume consistency: when squashed wider, the ball should be shorter. When stretched taller, it should be narrower. The total volume stays the same.", ru: "Сохраняйте объём: при сжатии мяч шире но ниже. При растяжении — уже но выше. Общий объём одинаков.", kk: "Көлемді сақтаңыз: сығылғанда доп кеңірек, бірақ қысқарақ. Созылғанда — тарырақ, бірақ биігірек. Жалпы көлем бірдей." }
            ],
            answer: "Stretch vertically during fall, squash horizontally on impact. Maintain volume consistency — squash makes it wider and shorter, stretch makes it taller and narrower.",
            answerRu: "Растягивайте вертикально при падении, сжимайте горизонтально при ударе. Сохраняйте постоянство объёма — сжатие делает мяч шире и ниже, растяжение — выше и уже.",
            answerKk: "Түсу кезінде тігінен созыңыз, соққы кезінде көлденеңінен сығыңыз. Көлем тұрақтылығын сақтаңыз — сығу допты кеңірек және қысқарақ етеді, созу — биігірек және тарырақ етеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the squash and stretch principle in animation?",
            questionRu: "Что такое принцип сжатия и растяжения в анимации?",
            questionKk: "Анимациядағы сығу мен созу принципі дегеніміз не?",
            answer: "Squash and stretch exaggerates an object's deformation to convey weight, flexibility, and impact. Objects squash when hitting surfaces and stretch when moving fast. It is the most important of the 12 animation principles.",
            answerRu: "Сжатие и растяжение преувеличивают деформацию объекта, чтобы передать вес, гибкость и воздействие. Объекты сжимаются при ударе о поверхность и растягиваются при быстром движении. Это самый важный из 12 принципов анимации.",
            answerKk: "Сығу мен созу салмақты, икемділікті және соққыны жеткізу үшін объектінің деформациясын күшейтеді. Объектілер беттерге тигенде сығылады және тез қозғалғанда созылады. Бұл 12 анимация принципінің ең маңыздысы.",
            hint: "Think about what happens to a rubber ball when it hits the floor.",
            hintRu: "Подумайте, что происходит с резиновым мячом, когда он ударяется о пол.",
            hintKk: "Резеңке доп еденге тигенде не болатынын ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Name three of the 12 principles of animation besides squash and stretch, and explain what each does.",
            questionRu: "Назовите три из 12 принципов анимации кроме сжатия-растяжения и объясните каждый.",
            questionKk: "Сығу мен созудан басқа 12 анимация принципінің үшеуін атаңыз және әрқайсысын түсіндіріңіз.",
            answer: "1) Anticipation: a small movement in the opposite direction before the main action (crouching before jumping) to prepare the viewer. 2) Ease in/out (slow in/slow out): movement starts and ends slowly, accelerating in the middle, mimicking how real objects move. 3) Follow-through: when a character stops, loose parts (hair, clothes) continue moving briefly due to momentum.",
            answerRu: "1) Предвосхищение: небольшое движение в противоположном направлении перед основным действием (приседание перед прыжком), чтобы подготовить зрителя. 2) Плавные вход/выход (медленный вход/медленный выход): движение начинается и заканчивается медленно, ускоряясь в середине, имитируя движение реальных объектов. 3) Затухание движения: когда персонаж останавливается, свободные части (волосы, одежда) продолжают двигаться по инерции ещё немного.",
            answerKk: "1) Алдын ала сезіну: көрерменді дайындау үшін негізгі әрекет алдында қарама-қарсы бағытта шағын қозғалыс (секірмес бұрын отыру). 2) Тегіс кіру/шығу (баяу кіру/баяу шығу): қозғалыс баяу басталып, баяу аяқталады, ортасында үдейді, бұл нақты объектілердің қозғалысын имитациялайды. 3) Ілесу қозғалысы: кейіпкер тоқтағанда, бос бөліктер (шаш, киім) инерция бойынша біраз уақыт қозғалуды жалғастырады.",
            hint: "Think about how real bodies move — they do not start or stop instantly.",
            hintRu: "Подумайте, как двигаются реальные тела — они не начинают и не останавливаются мгновенно.",
            hintKk: "Нақты денелердің қалай қозғалатынын ойлаңыз — олар лезде басталмайды және тоқтамайды.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You need to create a 10-second motion design piece showing a character picking up a heavy box. Describe which animation principles you would apply and where.",
            questionRu: "Нужно создать 10-секундную моушн-анимацию, где персонаж поднимает тяжёлую коробку. Опишите, какие принципы анимации и где примените.",
            questionKk: "Кейіпкер ауыр жәшікті көтеретін 10 секундтық моушн-дизайн жасау керек. Қандай анимация принциптерін және қайда қолданатыныңызды сипаттаңыз.",
            answer: "1) Anticipation: character bends knees and reaches down before lifting (prepares viewer for the action). 2) Squash and stretch: character's body compresses slightly when straining to lift, the box squashes slightly from the grip. 3) Slow in/slow out: the lift starts slowly (overcoming inertia), accelerates in the middle, then decelerates as the character straightens up. 4) Staging: position the camera so the lifting action is clearly visible, not obscured. 5) Exaggeration: slightly exaggerate the effort — wobbly knees, slight lean backward — to communicate the weight. 6) Follow-through: once standing, the character's hair, clothes, or the box's flaps settle after the main motion stops.",
            answerRu: "1) Предвосхищение: персонаж сгибает колени и тянется вниз перед подъёмом (готовит зрителя к действию). 2) Сжатие-растяжение: тело персонажа слегка сжимается при напряжении для подъёма, коробка немного сжимается от хвата. 3) Медленный вход/выход: подъём начинается медленно (преодоление инерции), ускоряется в середине, затем замедляется, когда персонаж выпрямляется. 4) Постановка кадра: расположите камеру так, чтобы действие подъёма было чётко видно, а не скрыто. 5) Преувеличение: слегка преувеличьте усилие — дрожащие колени, лёгкий наклон назад — чтобы передать вес. 6) Затухание движения: когда персонаж встаёт, его волосы, одежда или клапаны коробки успокаиваются после окончания основного движения.",
            answerKk: "1) Алдын ала сезіну: кейіпкер көтермес бұрын тізесін бүгіп, төмен қарай созылады (көрерменді әрекетке дайындайды). 2) Сығу-созу: көтеру үшін күш салғанда кейіпкердің денесі сәл сығылады, жәшік ұстағанда сәл сығылады. 3) Баяу кіру/шығу: көтеру баяу басталады (инерцияны жеңу), ортасында үдейді, содан кейін кейіпкер тіктелгенде баяулайды. 4) Кадр қою: көтеру әрекеті анық көрінетіндей, жасырылмайтындай камераны орналастырыңыз. 5) Күшейту: салмақты жеткізу үшін күш салуды сәл күшейтіңіз — дірілдеген тізелер, артқа сәл еңкею. 6) Ілесу қозғалысы: кейіпкер тұрғаннан кейін, оның шашы, киімі немесе жәшіктің қақпақтары негізгі қозғалыс тоқтағаннан кейін тыншиды.",
            xp: 20
          }
        ]
      },
      {
        title: "Advanced 3D",
        titleRu: "Продвинутое 3D",
        titleKk: "Жетілдірілген 3D",
        content: "Advanced 3D techniques go beyond basic modeling to include UV unwrapping (laying out textures), PBR (Physically Based Rendering) materials that simulate real-world surfaces, and lighting setups like HDRI environment maps. Rendering engines such as Cycles (Blender) or V-Ray produce photorealistic images by simulating how light bounces and scatters in the real world.",
        contentRu: "Продвинутые 3D-техники выходят за рамки базового моделирования: UV-развёртка (раскладка текстур), PBR-материалы (физически корректный рендеринг), имитирующие реальные поверхности, и схемы освещения вроде HDRI-карт окружения. Рендер-движки Cycles (Blender) или V-Ray создают фотореалистичные изображения, симулируя отражение и рассеивание света.",
        contentKk: "Жетілдірілген 3D тәсілдері негізгі модельдеуден тыс UV орауды (текстураларды орналастыру), нақты әлем беттерін модельдейтін PBR (физикалық негізделген рендеринг) материалдарын және HDRI орта карталары сияқты жарықтандыру баптауларын қамтиды. Cycles (Blender) немесе V-Ray сияқты рендеринг қозғалтқыштары жарықтың нақты әлемде қалай шағылатынын және шашылатынын модельдеу арқылы фотореалистік кескіндер жасайды.",
        keyFormulas: [
          {
            formula: "PBR Material = Base Color + Metallic + Roughness + Normal Map",
            formulaRu: "PBR-материал = Базовый цвет + Металличность + Шероховатость + Карта нормалей",
            formulaKk: "PBR материалы = Негізгі түс + Металдылық + Кедір-бұдырлық + Норма картасы",
            description: "Four core properties define how any surface looks under realistic lighting",
            descriptionRu: "Четыре основных свойства определяют, как любая поверхность выглядит при реалистичном освещении",
            descriptionKk: "Төрт негізгі қасиет кез келген беттің шынайы жарықтандыруда қалай көрінетінін анықтайды"
          }
        ],
        solvedExamples: [
          {
            question: "You need to create a realistic wooden table in 3D. What PBR material properties would you set?",
            questionRu: "Нужно создать реалистичный деревянный стол в 3D. Какие PBR-свойства материала задать?",
            questionKk: "3D-де шынайы ағаш үстел жасау керек. Қандай PBR материал қасиеттерін орнатасыз?",
            steps: [
              { en: "Base color: wood grain texture (brown tones with visible grain pattern). Metallic: 0 (wood is non-metallic). Roughness: 0.4-0.6 for polished wood, 0.8-1.0 for raw wood.", ru: "Базовый цвет: текстура дерева (коричневые тона с рисунком волокон). Металличность: 0 (дерево — неметалл). Шероховатость: 0,4-0,6 для полированного, 0,8-1,0 для необработанного.", kk: "Негізгі түс: ағаш талшығы текстурасы (талшық өрнегі бар қоңыр тондар). Металл: 0 (ағаш металл емес). Кедір-бұдырлық: жылтыратылған ағаш үшін 0,4-0,6, өңделмеген үшін 0,8-1,0." },
              { en: "Normal map: add wood grain bump detail for surface texture without adding geometry. This makes the grain catch light realistically.", ru: "Карта нормалей: добавьте рельеф текстуры дерева для реалистичного отражения света без лишней геометрии.", kk: "Нормал картасы: геометрия қоспай бет текстурасы үшін ағаш талшығының бедері мәліметін қосыңыз." }
            ],
            answer: "Base color: wood grain texture. Metallic: 0. Roughness: 0.4-0.6 (polished) or 0.8-1.0 (raw). Normal map: wood grain bump. This combination produces a convincingly realistic wood surface.",
            answerRu: "Базовый цвет: текстура древесных волокон. Металличность: 0. Шероховатость: 0,4-0,6 (полированное) или 0,8-1,0 (необработанное). Карта нормалей: рельеф древесных волокон. Эта комбинация создаёт убедительно реалистичную деревянную поверхность.",
            answerKk: "Негізгі түс: ағаш талшығы текстурасы. Металл: 0. Кедір-бұдырлық: 0,4-0,6 (жылтыратылған) немесе 0,8-1,0 (өңделмеген). Нормал картасы: ағаш талшығының бедері. Бұл үйлесім сенімді шынайы ағаш бетін жасайды."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What does PBR stand for and why is it used in 3D rendering?",
            questionRu: "Что означает PBR и зачем он используется в 3D-рендеринге?",
            questionKk: "PBR нені білдіреді және 3D рендерингте неге қолданылады?",
            answer: "PBR stands for Physically Based Rendering. It simulates how light interacts with surfaces in the real world, producing photorealistic results. PBR materials look correct under any lighting condition because they follow real physics.",
            answerRu: "PBR означает Physically Based Rendering (физически корректный рендеринг). Он моделирует, как свет взаимодействует с поверхностями в реальном мире, создавая фотореалистичные результаты. PBR-материалы выглядят правильно при любом освещении, потому что следуют реальной физике.",
            answerKk: "PBR — Physically Based Rendering (физикалық негізделген рендеринг) дегенді білдіреді. Ол жарықтың нақты әлемдегі беттермен қалай әрекеттесетінін модельдеп, фотореалистік нәтижелер береді. PBR материалдары кез келген жарықтандыруда дұрыс көрінеді, себебі олар нақты физиканы ұстанады.",
            hint: "It is about making digital materials behave like real ones under light.",
            hintRu: "Это о том, чтобы цифровые материалы вели себя как реальные при освещении.",
            hintKk: "Бұл сандық материалдардың жарықта нақты материалдар сияқты мінез-құлық көрсетуі туралы.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is UV unwrapping and why is it necessary before applying textures?",
            questionRu: "Что такое UV-развёртка и зачем она нужна перед наложением текстур?",
            questionKk: "UV орау дегеніміз не және текстуралар қолданбас бұрын неге қажет?",
            answer: "UV unwrapping is the process of flattening a 3D model's surface into a 2D map so textures can be painted or applied correctly. Without UV unwrapping, textures stretch, tile incorrectly, or appear distorted on the 3D surface. It is like peeling the skin off a 3D shape and laying it flat.",
            answerRu: "UV-развёртка — это процесс разворачивания поверхности 3D-модели в 2D-карту, чтобы текстуры можно было правильно нарисовать или наложить. Без UV-развёртки текстуры растягиваются, неправильно тайлятся или искажаются на 3D-поверхности. Это как снять кожу с 3D-формы и разложить её плоско.",
            answerKk: "UV орау — текстураларды дұрыс салуға немесе қолдануға болатындай 3D модельдің бетін 2D картаға жаюдың процесі. UV орамасыз текстуралар созылады, дұрыс тайлданбайды немесе 3D бетте бұрмаланып көрінеді. Бұл 3D пішіннің терісін сыпырып, оны жалпақ жаюға ұқсас.",
            hint: "Imagine unwrapping a gift box and laying the paper flat — the same concept applies to 3D surfaces.",
            hintRu: "Представьте, что разворачиваете подарочную коробку и кладёте бумагу плоско — тот же принцип для 3D-поверхностей.",
            hintKk: "Сыйлық қорапшасын ашып, қағазды жалпақ қоюды елестетіңіз — бұл принцип 3D беттерге де қатысты.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are rendering a kitchen scene in Blender with stainless steel appliances, marble countertops, and glass windows. Describe the PBR material settings (base color, metallic, roughness) for each surface type.",
            questionRu: "Вы рендерите кухню в Blender с техникой из нержавеющей стали, мраморными столешницами и стеклянными окнами. Опишите PBR-настройки (базовый цвет, металличность, шероховатость) для каждой поверхности.",
            questionKk: "Blender-де тот баспайтын болат техникасы, мәрмәр үстелдер және шыны терезелері бар ас үй көрінісін рендерлеп жатырсыз. Әрбір бет түрі үшін PBR материал баптауларын (негізгі түс, металл, кедір-бұдырлық) сипаттаңыз.",
            answer: "Stainless steel: base color light gray (#C0C0C0), metallic 1.0 (fully metallic), roughness 0.15-0.3 (brushed finish — not perfectly mirror-smooth). Marble: base color white with gray vein texture, metallic 0 (non-metallic), roughness 0.2-0.4 (polished stone reflects some light). Glass windows: base color white or very light blue, metallic 0, roughness 0.0 (perfectly smooth), transmission 1.0 (fully transparent), IOR 1.5 (glass refractive index). Each material responds differently to the same lighting, creating a realistic scene.",
            answerRu: "Нержавеющая сталь: базовый цвет светло-серый (#C0C0C0), металличность 1,0 (полностью металл), шероховатость 0,15-0,3 (шлифованная поверхность — не идеально зеркальная). Мрамор: базовый цвет белый с серыми прожилками, металличность 0 (неметалл), шероховатость 0,2-0,4 (полированный камень немного отражает свет). Стеклянные окна: базовый цвет белый или очень светло-голубой, металличность 0, шероховатость 0,0 (идеально гладкая), прозрачность 1,0 (полностью прозрачное), IOR 1,5 (коэффициент преломления стекла). Каждый материал по-разному реагирует на одинаковое освещение, создавая реалистичную сцену.",
            answerKk: "Тот баспайтын болат: негізгі түс ашық сұр (#C0C0C0), металл 1,0 (толық металл), кедір-бұдырлық 0,15-0,3 (жылтыратылған беті — айна сияқты тегіс емес). Мәрмәр: негізгі түс ақ, сұр тамырлармен, металл 0 (металл емес), кедір-бұдырлық 0,2-0,4 (жылтыратылған тас біраз жарықты шағылыстырады). Шыны терезелер: негізгі түс ақ немесе өте ашық көк, металл 0, кедір-бұдырлық 0,0 (мінсіз тегіс), өткізгіштік 1,0 (толық мөлдір), IOR 1,5 (шыныны сыну көрсеткіші). Әрбір материал бірдей жарықтандыруға әртүрлі жауап беріп, шынайы көрініс жасайды.",
            xp: 20
          }
        ]
      },
      {
        title: "AR/VR Content",
        titleRu: "AR/VR-контент",
        titleKk: "AR/VR контент",
        content: "Augmented Reality (AR) overlays digital elements onto the real world through a phone or headset, while Virtual Reality (VR) creates fully immersive digital environments. Creating AR/VR content requires understanding spatial design — depth, scale, and user movement — which differs fundamentally from 2D screen design. Tools like Unity, Unreal Engine, and Spark AR make these technologies accessible to creators.",
        contentRu: "Дополненная реальность (AR) накладывает цифровые элементы на реальный мир через телефон или гарнитуру, а виртуальная реальность (VR) создаёт полностью погружающие цифровые среды. Создание AR/VR-контента требует понимания пространственного дизайна — глубины, масштаба и движения пользователя — что принципиально отличается от 2D-дизайна. Инструменты вроде Unity, Unreal Engine и Spark AR делают эти технологии доступными для создателей.",
        contentKk: "Толықтырылған шындық (AR) телефон немесе гарнитура арқылы нақты әлемге сандық элементтерді қабаттайды, ал виртуалды шындық (VR) толық енгізуші сандық орталарды жасайды. AR/VR контентін жасау кеңістіктік дизайнды — тереңдік, масштаб және пайдаланушы қозғалысын — түсінуді талап етеді, бұл 2D экран дизайнынан түбегейлі ерекшеленеді. Unity, Unreal Engine және Spark AR сияқты құралдар бұл технологияларды авторларға қол жетімді етеді.",
        keyFormulas: [
          {
            formula: "AR = Real world + Digital overlay; VR = Fully digital immersive environment",
            formulaRu: "AR = Реальный мир + Цифровое наложение; VR = Полностью цифровая иммерсивная среда",
            formulaKk: "AR = Нақты әлем + Цифрлық қабат; VR = Толығымен цифрлық иммерсивті орта",
            description: "AR enhances reality while VR replaces it entirely",
            descriptionRu: "AR дополняет реальность, а VR полностью заменяет её",
            descriptionKk: "AR шындықты толықтырады, ал VR оны толығымен ауыстырады"
          }
        ],
        solvedExamples: [
          {
            question: "A furniture store wants an AR feature that lets customers see how a couch looks in their living room before buying. What are the key design considerations?",
            questionRu: "Мебельный магазин хочет AR-функцию для просмотра дивана в гостиной перед покупкой. Какие ключевые аспекты дизайна учесть?",
            questionKk: "Жиһаз дүкені клиенттерге сатып алмас бұрын диванның қонақ бөлмесінде қалай көрінетінін AR арқылы көруге мүмкіндік беретін мүмкіндік қалайды. Негізгі дизайн ойлары қандай?",
            steps: [
              { en: "Scale accuracy is critical — the virtual couch must match real-world dimensions exactly so customers can judge if it fits. Use plane detection to place the couch on the actual floor.", ru: "Точность масштаба критична — виртуальный диван должен точно соответствовать реальным размерам. Используйте детекцию плоскости для размещения на реальном полу.", kk: "Масштаб дәлдігі маңызды — виртуалды диван нақты өлшемдерге дәл сәйкес болуы керек. Нақты еденге орналастыру үшін жазықтықты анықтауды пайдаланыңыз." },
              { en: "Lighting should match the room: use the phone camera's light estimation to apply realistic shadows under the couch. Allow rotation and repositioning with finger gestures.", ru: "Освещение должно соответствовать комнате: используйте оценку освещения камеры для реалистичных теней. Позвольте вращение и перемещение жестами.", kk: "Жарықтандыру бөлмеге сәйкес болуы керек: диванның астында шынайы көлеңкелер қолдану үшін камераның жарық бағалауын пайдаланыңыз. Саусақ қимылдарымен айналдыруға және қайта орналастыруға мүмкіндік беріңіз." }
            ],
            answer: "Key considerations: 1) Accurate real-world scale using plane detection. 2) Realistic lighting and shadows matching the room. 3) Intuitive gesture controls for rotation and repositioning. 4) Multiple color/fabric options viewable in AR.",
            answerRu: "Ключевые аспекты: 1) Точный реальный масштаб с помощью детекции плоскости. 2) Реалистичное освещение и тени, соответствующие комнате. 3) Интуитивное управление жестами для вращения и перемещения. 4) Несколько вариантов цвета/ткани, доступных для просмотра в AR.",
            answerKk: "Негізгі ойлар: 1) Жазықтықты анықтау арқылы нақты әлем масштабының дәлдігі. 2) Бөлмеге сәйкес шынайы жарықтандыру мен көлеңкелер. 3) Айналдыру және қайта орналастыру үшін интуитивті қимыл басқарулары. 4) AR-де көруге болатын бірнеше түс/мата опциясы."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is the difference between AR and VR?",
            questionRu: "В чём разница между AR и VR?",
            questionKk: "AR мен VR арасындағы айырмашылық қандай?",
            answer: "AR (Augmented Reality) adds digital elements on top of the real world — you still see your surroundings. VR (Virtual Reality) replaces the real world entirely with a digital environment — you are fully immersed and cannot see your physical surroundings.",
            answerRu: "AR (дополненная реальность) добавляет цифровые элементы поверх реального мира — вы по-прежнему видите окружение. VR (виртуальная реальность) полностью заменяет реальный мир цифровой средой — вы полностью погружены и не видите физическое окружение.",
            answerKk: "AR (толықтырылған шындық) сандық элементтерді нақты әлемнің үстіне қосады — сіз әлі де қоршаған ортаны көресіз. VR (виртуалды шындық) нақты әлемді толығымен сандық ортамен ауыстырады — сіз толығымен енгізілесіз және физикалық ортаны көре алмайсыз.",
            hint: "One adds to reality, the other replaces it.",
            hintRu: "Одно дополняет реальность, другое заменяет её.",
            hintKk: "Бірі шындыққа қосады, екіншісі оны ауыстырады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why is spatial design for AR/VR different from traditional 2D screen design?",
            questionRu: "Почему пространственный дизайн для AR/VR отличается от традиционного 2D-дизайна?",
            questionKk: "AR/VR үшін кеңістіктік дизайн дәстүрлі 2D экран дизайнынан неге ерекшеленеді?",
            answer: "In 2D design, users view a flat screen from a fixed distance. In AR/VR, users move through 3D space — they can walk around objects, look up and down, and interact from any angle. Designers must consider depth, scale, viewing distance, user comfort (motion sickness), and 360-degree visibility. UI elements must exist in 3D space and remain readable from different angles.",
            answerRu: "В 2D-дизайне пользователи смотрят на плоский экран с фиксированного расстояния. В AR/VR пользователи перемещаются в 3D-пространстве — они могут обходить объекты, смотреть вверх и вниз, взаимодействовать с любого угла. Дизайнеры должны учитывать глубину, масштаб, дистанцию просмотра, комфорт пользователя (укачивание) и обзор на 360 градусов. UI-элементы должны существовать в 3D-пространстве и оставаться читаемыми под разными углами.",
            answerKk: "2D дизайнда пайдаланушылар жалпақ экранға тұрақты қашықтықтан қарайды. AR/VR-де пайдаланушылар 3D кеңістікте қозғалады — олар объектілердің айналасынан жүре алады, жоғары-төмен қарай алады, кез келген бұрыштан әрекеттесе алады. Дизайнерлер тереңдікті, масштабты, көру қашықтығын, пайдаланушы жайлылығын (қозғалыс ауруы) және 360 градус көрінуді ескеруі керек. UI элементтері 3D кеңістікте болуы керек және әртүрлі бұрыштардан оқылатын болуы керек.",
            hint: "Users are no longer looking at a flat rectangle — they are inside the experience.",
            hintRu: "Пользователи больше не смотрят на плоский прямоугольник — они внутри опыта.",
            hintKk: "Пайдаланушылар енді жалпақ тіктөртбұрышқа қарамайды — олар тәжірибенің ішінде.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "Your school wants to create a VR campus tour for prospective students who cannot visit in person. Design the experience: what scenes would you include, what interactions, and how would you prevent motion sickness?",
            questionRu: "Школа хочет создать VR-экскурсию по кампусу для абитуриентов, которые не могут приехать лично. Спроектируйте опыт: какие сцены, взаимодействия и как предотвратить укачивание?",
            questionKk: "Мектеп жеке келе алмайтын болашақ студенттер үшін VR кампус турын жасағысы келеді. Тәжірибені жобалаңыз: қандай көріністер, өзара әрекеттер болады және қозғалыс ауруын қалай алдын аласыз?",
            answer: "Scenes: 1) Main entrance and campus overview, 2) Classrooms with interactive lesson preview, 3) Library, 4) Cafeteria, 5) Sports facilities, 6) Student lounge/social areas. Interactions: teleport navigation (point and click to move — prevents motion sickness), interactive info hotspots (click to see statistics, student testimonials), 360° video interviews with current students at each location. Motion sickness prevention: 1) Use teleportation instead of smooth movement. 2) Maintain stable horizon and fixed reference points. 3) Keep frame rate at 90fps minimum. 4) Avoid moving the camera without user input. 5) Include a comfort vignette (darkened edges) during any movement.",
            answerRu: "Сцены: 1) Главный вход и обзор кампуса, 2) Аудитории с интерактивным превью урока, 3) Библиотека, 4) Столовая, 5) Спортивные сооружения, 6) Студенческая зона отдыха/общения. Взаимодействия: телепорт-навигация (укажите и кликните для перемещения — предотвращает укачивание), интерактивные точки информации (клик для статистики, отзывов студентов), 360°-видеоинтервью с текущими студентами в каждой локации. Предотвращение укачивания: 1) Используйте телепортацию вместо плавного движения. 2) Поддерживайте стабильный горизонт и фиксированные точки отсчёта. 3) Держите частоту кадров минимум 90fps. 4) Избегайте движения камеры без ввода пользователя. 5) Включите комфортную виньетку (затемнённые края) во время любого движения.",
            answerKk: "Көріністер: 1) Басты кіреберіс пен кампус шолуы, 2) Интерактивті сабақ алдын ала көрсетілімі бар аудиториялар, 3) Кітапхана, 4) Асхана, 5) Спорт ғимараттары, 6) Студенттердің демалыс/әлеуметтік аймақтары. Өзара әрекеттер: телепорт навигациясы (қозғалу үшін нұсқап басу — қозғалыс ауруының алдын алады), интерактивті ақпарат нүктелері (статистика, студент пікірлерін көру үшін басу), әр орында қазіргі студенттермен 360° бейне сұхбаттар. Қозғалыс ауруының алдын алу: 1) Тегіс қозғалыс орнына телепортацияны қолданыңыз. 2) Тұрақты көкжиек пен бекітілген сілтеме нүктелерін сақтаңыз. 3) Кадр жиілігін кемінде 90fps ұстаңыз. 4) Пайдаланушы енгізуінсіз камераны қозғалтпаңыз. 5) Кез келген қозғалыс кезінде жайлылық виньеткасын (қараңғыланған шеттер) қосыңыз.",
            xp: 20
          }
        ]
      },
      {
        title: "Freelance Business",
        titleRu: "Фриланс-бизнес",
        titleKk: "Фриланс бизнесі",
        content: "Freelancing as a creative professional requires business skills beyond design ability — pricing, contracts, invoicing, and managing client relationships. Setting rates involves calculating your target annual income, dividing by billable hours, and adding overhead costs. A clear contract protects both you and the client by defining scope, timeline, payment terms, and revision limits.",
        contentRu: "Фриланс в творческой профессии требует бизнес-навыков помимо дизайна — ценообразование, контракты, счета и управление отношениями с клиентами. Расчёт ставок: определите целевой годовой доход, разделите на оплачиваемые часы и добавьте накладные расходы. Чёткий контракт защищает обе стороны, определяя объём работ, сроки, условия оплаты и лимиты правок.",
        contentKk: "Шығармашылық маман ретінде фриланс дизайн қабілетінен тыс бизнес дағдыларын талап етеді — баға белгілеу, келісімшарттар, шот-фактуралар және клиент қарым-қатынастарын басқару. Ставкаларды белгілеу мақсатты жылдық табысты есептеуді, төлем жасалатын сағаттарға бөлуді және үстеме шығындарды қосуды қамтиды. Анық келісімшарт жұмыс көлемін, мерзімдерді, төлем шарттарын және түзету шектерін анықтау арқылы сізді де, клиентті де қорғайды.",
        keyFormulas: [
          {
            formula: "Hourly rate = (Target annual income + Expenses) ÷ Billable hours per year",
            formulaRu: "Почасовая ставка = (Целевой годовой доход + Расходы) ÷ Оплачиваемые часы в год",
            formulaKk: "Сағаттық баға = (Мақсатты жылдық табыс + Шығындар) ÷ Жылдағы төленетін сағаттар",
            description: "Ensures your rate covers both income goals and business costs",
            descriptionRu: "Гарантирует, что ставка покрывает как целевой доход, так и бизнес-расходы",
            descriptionKk: "Ставкаңыз табыс мақсаттарын да, бизнес шығындарын да жабатынына кепілдік береді"
          }
        ],
        solvedExamples: [
          {
            question: "You want to earn $40,000/year freelancing. Your business expenses are $5,000/year. You can bill about 1,000 hours/year (the rest goes to admin, marketing, breaks). What should your hourly rate be?",
            questionRu: "Вы хотите зарабатывать $40 000/год на фрилансе. Расходы на бизнес $5 000/год. Вы можете выставить счёт за ~1 000 часов/год. Какой должна быть часовая ставка?",
            questionKk: "Фрилансте жылына $40 000 табыс тапқыңыз келеді. Бизнес шығындарыңыз жылына $5 000. Жылына шамамен 1 000 сағатқа шот-фактура жаза аласыз. Сағаттық ставкаңыз қандай болуы керек?",
            steps: [
              { en: "Add income goal and expenses: $40,000 + $5,000 = $45,000 total needed.", ru: "Сложите цель по доходу и расходы: $40 000 + $5 000 = $45 000 всего.", kk: "Табыс мақсаты мен шығындарды қосыңыз: $40 000 + $5 000 = барлығы $45 000." },
              { en: "Divide by billable hours: $45,000 ÷ 1,000 hours = $45/hour.", ru: "Разделите на оплачиваемые часы: $45 000 ÷ 1 000 часов = $45/час.", kk: "Төлем жасалатын сағаттарға бөліңіз: $45 000 ÷ 1 000 сағат = сағатына $45." }
            ],
            answer: "$45/hour. This covers both your $40K income goal and $5K in business expenses across 1,000 billable hours.",
            answerRu: "$45/час. Это покрывает и цель дохода $40 000, и $5 000 бизнес-расходов на 1 000 оплачиваемых часов.",
            answerKk: "Сағатына $45. Бұл 1 000 төлем жасалатын сағат бойынша $40 мың табыс мақсатын да, $5 мың бизнес шығындарын да жабады."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why is it important to have a contract before starting freelance work?",
            questionRu: "Почему важно иметь контракт перед началом фриланс-работы?",
            questionKk: "Фриланс жұмысты бастамас бұрын келісімшарттың болуы неге маңызды?",
            answer: "A contract protects both freelancer and client by clearly defining what will be delivered, when, how much it costs, how many revisions are included, and what happens if either party wants to cancel. Without a contract, scope creep, payment disputes, and miscommunication are common.",
            answerRu: "Контракт защищает и фрилансера, и клиента, чётко определяя, что будет сдано, когда, сколько это стоит, сколько правок включено и что происходит, если любая сторона хочет отменить проект. Без контракта распространены расползание объёма работ, споры об оплате и недопонимание.",
            answerKk: "Келісімшарт не тапсырылатынын, қашан, қанша тұратынын, қанша түзету кіретінін және кез келген тарап бас тартқысы келсе не болатынын нақты анықтап, фрилансер мен клиентті де қорғайды. Келісімшартсыз жұмыс көлемінің кеңеюі, төлем даулары және түсінбеушілік жиі кездеседі.",
            hint: "Think about what could go wrong without written agreements.",
            hintRu: "Подумайте, что может пойти не так без письменных соглашений.",
            hintKk: "Жазбаша келісімсіз не дұрыс болмауы мүмкін екенін ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What is scope creep and how do you prevent it?",
            questionRu: "Что такое расползание объёма работ (scope creep) и как его предотвратить?",
            questionKk: "Scope creep (жұмыс көлемінің кеңеюі) дегеніміз не және оны қалай алдын аласыз?",
            answer: "Scope creep is when a project gradually expands beyond the original agreement — the client keeps asking for 'one more small thing' until the project is significantly larger than quoted. Prevent it by: 1) Writing a detailed scope in the contract specifying exact deliverables. 2) Limiting revision rounds (e.g., 2 rounds included). 3) Having a clear change request process — additional work beyond scope requires a new quote and approval.",
            answerRu: "Scope creep — это когда проект постепенно расширяется за пределы первоначального соглашения — клиент продолжает просить «ещё одну маленькую вещь», пока проект не станет значительно больше заявленного. Предотвратить это можно так: 1) Прописать в контракте детальный объём работ с точными результатами. 2) Ограничить количество раундов правок (например, 2 раунда включены). 3) Иметь чёткий процесс запроса изменений — дополнительная работа сверх объёма требует новой оценки и одобрения.",
            answerKk: "Scope creep — бұл жоба бастапқы келісімнен тыс біртіндеп кеңейгенде — клиент жоба алғашқы бағаланғаннан айтарлықтай үлкен болғанша «тағы бір кішкентай нәрсе» сұрай береді. Мұны алдын алу: 1) Келісімшартта нақты нәтижелерді көрсететін толық жұмыс көлемін жазу. 2) Түзету раундтарын шектеу (мысалы, 2 раунд қосылған). 3) Нақты өзгерту сұрау процесін орнату — көлемнен тыс қосымша жұмыс жаңа баға мен келісуді талап етеді.",
            hint: "It is when 'just one more change' turns a small project into a large one.",
            hintRu: "Это когда «ещё одно маленькое изменение» превращает маленький проект в большой.",
            hintKk: "Бұл «тағы бір кішкентай өзгеріс» кішкентай жобаны үлкен жобаға айналдырғанда.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A potential client offers you a logo design project. They say their budget is $200 but you estimate it requires 15 hours of work and your rate is $45/hour. How do you handle this negotiation?",
            questionRu: "Потенциальный клиент предлагает проект логотипа с бюджетом $200, но вы оцениваете 15 часов работы при ставке $45/час. Как провести переговоры?",
            questionKk: "Әлеуетті клиент логотип дизайн жобасын ұсынады. Бюджеттері $200, бірақ сіз 15 сағат жұмысты бағалайсыз, ставкаңыз $45/сағат. Бұл келіссөзді қалай жүргізесіз?",
            answer: "Your rate requires $675 (15h × $45). Options: 1) Explain the value: show your process (research, concepts, revisions) and why it costs what it does. Some clients do not understand creative work's complexity. 2) Reduce scope to fit budget: offer a simplified package for $200 (e.g., 1 concept, 1 revision, no brand guidelines vs. your full 3-concept package). 3) Decline politely: if the gap is too large and reducing scope compromises quality, it is okay to say the project is not a good fit. Never undervalue your work to win a client — it sets a bad precedent and leads to resentment. 4) Consider it only if there is strong portfolio value (the client is a well-known brand).",
            answerRu: "Ваша ставка требует $675 (15ч × $45). Варианты: 1) Объясните ценность: покажите свой процесс (исследование, концепции, правки) и почему это столько стоит. Некоторые клиенты не понимают сложность творческой работы. 2) Уменьшите объём под бюджет: предложите упрощённый пакет за $200 (например, 1 концепция, 1 правка, без брендбука вместо полного пакета из 3 концепций). 3) Вежливо откажитесь: если разрыв слишком велик, а уменьшение объёма ставит под угрозу качество, нормально сказать, что проект не подходит. Никогда не занижайте ценность своей работы, чтобы получить клиента — это создаёт плохой прецедент и ведёт к обиде. 4) Рассмотрите это только если есть большая ценность для портфолио (клиент — известный бренд).",
            answerKk: "Ставкаңыз $675 (15с × $45) талап етеді. Опциялар: 1) Құндылықты түсіндіріңіз: процесіңізді (зерттеу, концепциялар, түзетулер) және неге бұлай тұратынын көрсетіңіз. Кейбір клиенттер шығармашылық жұмыстың күрделілігін түсінбейді. 2) Бюджетке сай көлемді азайтыңыз: $200-ге жеңілдетілген пакет ұсыныңыз (мысалы, 1 концепция, 1 түзету, толық 3 концепциялы пакет орнына бренд нұсқаулықсыз). 3) Сыпайы бас тартыңыз: егер алшақтық тым үлкен болса және көлемді азайту сапаны төмендетсе, жобаның сай келмейтінін айту дұрыс. Клиентті ұту үшін жұмысыңыздың құнын ешқашан төмендетпеңіз — бұл жаман прецедент жасайды және өкінішке әкеледі. 4) Тек портфолио үшін үлкен құндылық болса ғана қарастырыңыз (клиент танымал бренд).",
            xp: 20
          }
        ]
      },
      {
        title: "Client Communication",
        titleRu: "Общение с клиентами",
        titleKk: "Клиентпен байланыс",
        content: "Effective client communication is the difference between a successful project and a nightmare. Key skills include setting expectations upfront, presenting design work with rationale (not just asking 'do you like it?'), managing feedback constructively, and knowing when to push back on requests that would harm the design. Regular status updates and clear timelines build trust and prevent surprises.",
        contentRu: "Эффективное общение с клиентами — это разница между успешным проектом и кошмаром. Ключевые навыки: установка ожиданий с самого начала, представление работ с обоснованием (а не просто «нравится?»), конструктивное управление обратной связью и умение возражать, когда запросы вредят дизайну. Регулярные обновления статуса и чёткие сроки строят доверие и предотвращают сюрпризы.",
        contentKk: "Тиімді клиент байланысы табысты жоба мен түнекұс арасындағы айырмашылық. Негізгі дағдылар: күтулерді алдын ала орнату, жұмысты негіздемемен көрсету (тек «ұнайды ма?» емес), кері байланысты конструктивті басқару және дизайнға зиян келтіретін сұраныстарға қашан қарсы шығу керектігін білу. Тұрақты мәртебе жаңартулары мен нақты мерзімдер сенім орнатады және тосын жағдайларды болдырмайды.",
        keyFormulas: [
          {
            formula: "Design presentation = What you did + Why you did it + How it solves the problem",
            formulaRu: "Презентация дизайна = Что вы сделали + Почему вы это сделали + Как это решает проблему",
            formulaKk: "Дизайн презентациясы = Не істедіңіз + Неге істедіңіз + Бұл мәселені қалай шешеді",
            description: "Framing design decisions as solutions prevents subjective 'I like/dislike' feedback",
            descriptionRu: "Представление дизайн-решений как решений проблем предотвращает субъективную обратную связь «нравится/не нравится»",
            descriptionKk: "Дизайн шешімдерін шешімдер ретінде көрсету субъективті «ұнайды/ұнамайды» кері байланыстың алдын алады"
          }
        ],
        solvedExamples: [
          {
            question: "A client says 'I don't like the blue, make it red.' How should you respond professionally?",
            questionRu: "Клиент говорит: «Мне не нравится синий, сделайте красный.» Как ответить профессионально?",
            questionKk: "Клиент «Маған көк ұнамайды, қызыл етіңіз» дейді. Кәсіби түрде қалай жауап бересіз?",
            steps: [
              { en: "Do not just say 'okay' or 'no.' Ask WHY: 'What about the blue feels wrong for the brand? Is it the shade, the saturation, or the emotional association?'", ru: "Не говорите просто «хорошо» или «нет». Спросите ПОЧЕМУ: «Что именно в синем не подходит бренду? Оттенок, насыщенность или эмоциональная ассоциация?»", kk: "Тек «жақсы» немесе «жоқ» деп айтпаңыз. НЕЛІКТЕН деп сұраңыз: «Көк түстің брендке не сай емес? Реңк, қанықтық немесе эмоционалды ассоциация ма?»" },
              { en: "Explain your choice: 'We chose blue because your target audience is financial professionals, and blue conveys trust and stability. Would you be open to testing a warmer navy blue that adds the energy you might be looking for?'", ru: "Объясните выбор: «Мы выбрали синий, потому что ваша аудитория — финансовые специалисты, а синий передаёт доверие и стабильность. Готовы ли вы попробовать более тёплый тёмно-синий?»", kk: "Таңдауыңызды түсіндіріңіз: «Көкті таңдадық, өйткені мақсатты аудиторияңыз қаржы мамандары, ал көк сенім мен тұрақтылықты жеткізеді. Қуат қосатын жылырақ қою көкті тексеруге дайынсыз ба?»" }
            ],
            answer: "Ask why they want the change, explain the reasoning behind your choice (brand trust, target audience), and offer a compromise that addresses their concern while maintaining design integrity.",
            answerRu: "Спросите, почему они хотят изменение, объясните обоснование своего выбора (доверие к бренду, целевая аудитория) и предложите компромисс, который решает их опасение, сохраняя целостность дизайна.",
            answerKk: "Неге өзгеріс қалайтынын сұраңыз, таңдауыңыздың негіздемесін түсіндіріңіз (бренд сенімі, мақсатты аудитория) және дизайн тұтастығын сақтай отырып, олардың алаңдаушылығын шешетін ымыраны ұсыныңыз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Why should you present design work with rationale rather than just showing the visuals?",
            questionRu: "Почему дизайн-работу нужно представлять с обоснованием, а не просто показывать визуал?",
            questionKk: "Дизайн жұмысын тек визуалдарды көрсетумен емес, негіздемемен көрсету неге керек?",
            answer: "Presenting with rationale educates the client about why each decision was made and shifts feedback from subjective ('I don't like it') to objective ('Does this solve the problem?'). It positions you as a strategic partner, not just someone who takes orders.",
            answerRu: "Представление с обоснованием знакомит клиента с тем, почему было принято каждое решение, и смещает обратную связь от субъективной («мне не нравится») к объективной («решает ли это проблему?»). Это позиционирует вас как стратегического партнёра, а не просто исполнителя заказов.",
            answerKk: "Негіздемемен көрсету клиентке әр шешімнің неге қабылданғанын үйретеді және кері байланысты субъективтіден («маған ұнамайды») объективтіге («бұл мәселені шеше ме?») ауыстырады. Бұл сізді тапсырыс орындаушы емес, стратегиялық серіктес ретінде көрсетеді.",
            hint: "Clients respect decisions backed by reasons more than unexplained visual choices.",
            hintRu: "Клиенты больше уважают решения с обоснованием, чем необъяснённые визуальные выборы.",
            hintKk: "Клиенттер түсіндірілмеген визуалды таңдаулардан гөрі себептермен негізделген шешімдерді көбірек құрметтейді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "A client keeps sending you new changes after you delivered the final files. The contract included 2 revision rounds (both used). What do you do?",
            questionRu: "Клиент продолжает присылать правки после сдачи финальных файлов. Контракт включал 2 раунда правок (оба использованы). Что делать?",
            questionKk: "Клиент соңғы файлдарды тапсырғаннан кейін жаңа өзгерістер жіберуді жалғастырады. Келісімшарт 2 түзету раундын қамтыды (екеуі де пайдаланылды). Не істейсіз?",
            answer: "Respond professionally: 'I am happy you want to refine the design further! Our contract included 2 revision rounds, which we have completed. I can absolutely make these additional changes — they would be billed at my hourly rate of $X/hour, and I estimate this batch will take approximately Y hours. Shall I proceed?' This is not confrontational — it is professional boundary-setting that respects both your time and the client's desire for changes.",
            answerRu: "Ответьте профессионально: «Я рад(а), что вы хотите доработать дизайн ещё! Наш контракт включал 2 раунда правок, которые мы уже выполнили. Я с удовольствием сделаю эти дополнительные изменения — они будут оплачиваться по моей часовой ставке $X/час, и я оцениваю, что этот пакет займёт примерно Y часов. Продолжить?» Это не конфронтация — это профессиональное установление границ, уважающее и ваше время, и желание клиента внести изменения.",
            answerKk: "Кәсіби түрде жауап беріңіз: «Дизайнды одан әрі жетілдіргіңіз келгеніне қуаныштымын! Келісімшартымызда 2 түзету раунды болды, оларды аяқтадық. Бұл қосымша өзгерістерді міндетті түрде жасай аламын — олар сағатына $X ставкам бойынша есептеледі, және бұл жиынтық шамамен Y сағат алады деп бағалаймын. Жалғастырайын ба?» Бұл қарсыласу емес — бұл сіздің уақытыңызды да, клиенттің өзгерту қалауын да құрметтейтін кәсіби шекара орнату.",
            hint: "Refer back to the contract and offer to continue work under clear terms.",
            hintRu: "Сошлитесь на контракт и предложите продолжить работу на понятных условиях.",
            hintKk: "Келісімшартқа сілтеме жасаңыз және нақты шарттарда жұмысты жалғастыруды ұсыныңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "A client wants to make their website text neon green on a white background because 'green is our brand color.' This creates a severe accessibility problem (poor contrast). How do you push back while keeping the client relationship positive?",
            questionRu: "Клиент хочет неоново-зелёный текст на белом фоне, потому что «зелёный — наш фирменный цвет». Это создаёт серьёзную проблему доступности (плохой контраст). Как возразить, сохранив хорошие отношения?",
            questionKk: "Клиент «жасыл — біздің бренд түсіміз» дегендіктен ақ фонда неон жасыл мәтін жасағысы келеді. Бұл маңызды қолжетімділік мәселесін жасайды (нашар контраст). Клиент қарым-қатынасын оң сақтай отырып, қалай қарсы шығасыз?",
            answer: "1) Validate their brand commitment: 'I love that you want strong brand consistency with green.' 2) Show the problem objectively: demonstrate the contrast ratio (WCAG requires 4.5:1 minimum, neon green on white is about 1.5:1) and show how it looks to colorblind users. 3) Present alternatives that honor the brand: 'What if we use a darker forest green (#2D6A4F) for text that passes accessibility standards, and save the bright neon green for accents, buttons, and icons where it really pops?' 4) Frame it as a business risk: 'Sites that fail accessibility standards can face legal action and lose 15-20% of potential customers who have visual impairments.' This approach respects the client's wishes while protecting them from a bad decision.",
            answerRu: "1) Подтвердите их приверженность бренду: «Мне нравится, что вы хотите сильную согласованность бренда с зелёным». 2) Покажите проблему объективно: продемонстрируйте коэффициент контраста (WCAG требует минимум 4,5:1, неоново-зелёный на белом — около 1,5:1) и покажите, как это выглядит для дальтоников. 3) Предложите альтернативы, уважающие бренд: «Что если мы используем более тёмный лесной зелёный (#2D6A4F) для текста, который проходит стандарты доступности, а яркий неоновый зелёный оставим для акцентов, кнопок и иконок, где он действительно выделяется?» 4) Представьте это как бизнес-риск: «Сайты, не соответствующие стандартам доступности, могут столкнуться с юридическими исками и потерять 15-20% потенциальных клиентов с нарушениями зрения». Этот подход уважает пожелания клиента, одновременно защищая его от плохого решения.",
            answerKk: "1) Олардың бренд адалдығын растаңыз: «Жасыл түспен күшті бренд сәйкестігін қалайтыныңыз ұнайды». 2) Мәселені объективті көрсетіңіз: контраст коэффициентін көрсетіңіз (WCAG кемінде 4,5:1 талап етеді, ақ фондағы неон жасыл шамамен 1,5:1), және түсті танымайтындарға бұл қалай көрінетінін көрсетіңіз. 3) Брендті құрметтейтін баламаларды ұсыныңыз: «Қолжетімділік стандарттарынан өтетін мәтін үшін қоюырақ орман жасылын (#2D6A4F) қолдансақ, ал жарқын неон жасылды шынымен көзге түсетін акценттер, түймелер мен белгішелерге сақтасақ қалай болады?» 4) Мұны бизнес тәуекелі ретінде көрсетіңіз: «Қолжетімділік стандарттарынан өтпейтін сайттар заңды әрекеттерге тап болып, көру қабілеті бұзылған әлеуетті клиенттердің 15-20%-ын жоғалтуы мүмкін». Бұл тәсіл клиенттің қалауын құрметтей отырып, оны жаман шешімнен қорғайды.",
            xp: 20
          }
        ]
      },
      {
        title: "Design Systems",
        titleRu: "Дизайн-системы",
        titleKk: "Дизайн жүйелері",
        content: "A design system is a comprehensive library of reusable components, patterns, and guidelines that ensures visual and functional consistency across a product. It includes a component library (buttons, forms, cards, navigation), design tokens (colors, spacing, typography values), and usage documentation. Design systems like Material Design (Google) and Human Interface Guidelines (Apple) demonstrate how large organizations maintain consistency at scale.",
        contentRu: "Дизайн-система — это комплексная библиотека переиспользуемых компонентов, паттернов и правил, обеспечивающая визуальную и функциональную согласованность продукта. Она включает библиотеку компонентов (кнопки, формы, карточки, навигация), дизайн-токены (значения цветов, отступов, типографики) и документацию по использованию. Дизайн-системы Material Design (Google) и Human Interface Guidelines (Apple) демонстрируют, как крупные организации поддерживают единообразие.",
        contentKk: "Дизайн жүйесі — бұл өнімнің визуалды және функционалды дәйектілігін қамтамасыз ететін қайта пайдаланылатын компоненттер, үлгілер және нұсқаулықтардың кешенді кітапханасы. Ол компонент кітапханасын (түймелер, формалар, карточкалар, навигация), дизайн токендерін (түстер, аралықтар, типографика мәндері) және пайдалану құжаттамасын қамтиды. Material Design (Google) және Human Interface Guidelines (Apple) сияқты дизайн жүйелері ірі ұйымдардың масштабта дәйектілікті қалай сақтайтынын көрсетеді.",
        keyFormulas: [
          {
            formula: "Design system = Component library + Design tokens + Documentation + Governance",
            formulaRu: "Дизайн-система = Библиотека компонентов + Дизайн-токены + Документация + Управление",
            formulaKk: "Дизайн-жүйе = Компоненттер кітапханасы + Дизайн-токендер + Құжаттама + Басқару",
            description: "The four pillars that make a design system effective and maintainable",
            descriptionRu: "Четыре столпа, которые делают дизайн-систему эффективной и поддерживаемой",
            descriptionKk: "Дизайн жүйесін тиімді және қолдауға ыңғайлы ететін төрт тірек"
          }
        ],
        solvedExamples: [
          {
            question: "You are starting a design system for a school's internal tools (gradebook, attendance, scheduling). What are the first 5 components you should build?",
            questionRu: "Вы создаёте дизайн-систему для внутренних школьных инструментов (журнал, посещаемость, расписание). Какие 5 компонентов создать первыми?",
            questionKk: "Мектептің ішкі құралдары (журнал, қатысу, кесте) үшін дизайн жүйесін бастап жатырсыз. Алдымен қандай 5 компонент жасау керек?",
            steps: [
              { en: "Identify the most frequently used elements across all three tools. Start with atomic components that compose into larger patterns.", ru: "Определите наиболее часто используемые элементы во всех трёх инструментах. Начните с атомарных компонентов.", kk: "Барлық үш құралда ең жиі қолданылатын элементтерді анықтаңыз. Атомарлық компоненттерден бастаңыз." },
              { en: "Priority: 1) Button (primary, secondary, danger states), 2) Input field (text, date, dropdown), 3) Data table (sortable, filterable), 4) Navigation bar (consistent across all tools), 5) Card component (for displaying student/class information).", ru: "Приоритет: 1) Кнопка (основная, вторичная, опасная), 2) Поле ввода (текст, дата, выпадающий список), 3) Таблица данных (сортируемая, фильтруемая), 4) Навигационная панель, 5) Карточка.", kk: "Басымдық: 1) Түйме (негізгі, қосалқы, қауіпті), 2) Енгізу өрісі (мәтін, күн, ашылмалы тізім), 3) Деректер кестесі (сұрыпталатын, сүзілетін), 4) Навигация панелі, 5) Карточка компоненті." }
            ],
            answer: "First 5: Button (with variants), Input field (with types), Data table (sortable/filterable), Navigation bar, Card component. These are the most reused elements across gradebook, attendance, and scheduling tools.",
            answerRu: "Первые 5: Кнопка (с вариантами), Поле ввода (с типами), Таблица данных (сортируемая/фильтруемая), Навигационная панель, Карточка. Это самые переиспользуемые элементы в журнале, посещаемости и расписании.",
            answerKk: "Алғашқы 5: Түйме (нұсқаларымен), Енгізу өрісі (түрлерімен), Деректер кестесі (сұрыпталатын/сүзілетін), Навигация панелі, Карточка компоненті. Бұл журнал, қатысу және кесте құралдарында ең көп қайта пайдаланылатын элементтер."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a design token?",
            questionRu: "Что такое дизайн-токен?",
            questionKk: "Дизайн токені дегеніміз не?",
            answer: "A design token is a named variable that stores a design value — like a color (#3B82F6), spacing (16px), or font size (14px). Instead of hardcoding values, teams reference tokens (e.g., 'color-primary') so that changing one token updates the value everywhere it is used.",
            answerRu: "Дизайн-токен — это именованная переменная, хранящая значение дизайна — например, цвет (#3B82F6), отступ (16px) или размер шрифта (14px). Вместо жёстко заданных значений команды ссылаются на токены (например, 'color-primary'), чтобы изменение одного токена обновляло значение везде, где оно используется.",
            answerKk: "Дизайн токені — дизайн мәнін сақтайтын аталған айнымалы — мысалы, түс (#3B82F6), аралық (16px) немесе қаріп өлшемі (14px). Мәндерді қатты кодтаудың орнына командалар токендерге сілтеме жасайды (мысалы, 'color-primary'), сондықтан бір токенді өзгерту оны қолданған барлық жерде мәнді жаңартады.",
            hint: "Think of it as a variable name for a design value, like a variable in code.",
            hintRu: "Думайте об этом как об именованной переменной для значения дизайна, как переменная в коде.",
            hintKk: "Оны дизайн мәні үшін аталған айнымалы деп ойлаңыз, кодтағы айнымалы сияқты.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why do large companies like Google and Apple invest heavily in design systems?",
            questionRu: "Почему крупные компании вроде Google и Apple серьёзно инвестируют в дизайн-системы?",
            questionKk: "Неліктен Google және Apple сияқты ірі компаниялар дизайн жүйелеріне қомақты инвестиция жасайды?",
            answer: "Large companies have hundreds of designers and developers working on dozens of products. Without a design system, each team would create their own buttons, forms, and patterns — resulting in inconsistent user experiences, duplicated work, and slower development. A design system ensures every product looks and feels like part of the same family, speeds up design and development, and makes it easier to onboard new team members.",
            answerRu: "У крупных компаний сотни дизайнеров и разработчиков, работающих над десятками продуктов. Без дизайн-системы каждая команда создавала бы свои кнопки, формы и паттерны — что приводит к несогласованному пользовательскому опыту, дублированию работы и замедлению разработки. Дизайн-система гарантирует, что каждый продукт выглядит и ощущается как часть одной семьи, ускоряет дизайн и разработку и облегчает адаптацию новых членов команды.",
            answerKk: "Ірі компанияларда ондаған өнімде жұмыс істейтін жүздеген дизайнер мен әзірлеуші бар. Дизайн жүйесінсіз әр топ өз түймелерін, формаларын және үлгілерін жасар еді — бұл сәйкессіз пайдаланушы тәжірибесіне, жұмыстың қайталануына және дамудың баяулауына әкеледі. Дизайн жүйесі әрбір өнімнің бір отбасының бөлігі сияқты көрінуін және сезінуін қамтамасыз етеді, дизайн мен дамуды жеделдетеді және жаңа топ мүшелерін бейімдеуді жеңілдетеді.",
            hint: "Think about what happens when 100 designers make buttons independently.",
            hintRu: "Подумайте, что происходит, когда 100 дизайнеров независимо создают кнопки.",
            hintKk: "100 дизайнер түймелерді дербес жасағанда не болатынын ойлаңыз.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You built a design system for a project with 50 components, but 6 months later only 30% of the team is using it consistently. Diagnose why adoption might be low and propose three solutions.",
            questionRu: "Вы создали дизайн-систему с 50 компонентами, но через 6 месяцев только 30% команды постоянно её использует. Определите причины низкого принятия и предложите три решения.",
            questionKk: "50 компоненті бар дизайн жүйесін құрдыңыз, бірақ 6 айдан кейін топтың тек 30%-ы оны дәйекті пайдаланады. Қабылдаудың неге төмен болуы мүмкін екенін анықтаңыз және үш шешім ұсыныңыз.",
            answer: "Diagnosis: 1) Poor documentation — people do not know how to use components. 2) Components do not cover real needs — team finds them too rigid and creates custom solutions. 3) No governance — nobody enforces usage or collects feedback. Solutions: 1) Create a living documentation site with interactive examples, copy-paste code snippets, and do/don't guidelines for each component. 2) Run a component audit: survey the team about which components they need but are missing, and add the top-requested ones. Make components flexible with props/variants. 3) Establish governance: designate a design system owner, hold monthly review meetings where the team can request changes, and integrate design system checks into the design review process.",
            answerRu: "Диагноз: 1) Плохая документация — люди не знают, как использовать компоненты. 2) Компоненты не покрывают реальные потребности — команда считает их слишком жёсткими и создаёт свои решения. 3) Нет управления — никто не следит за использованием и не собирает обратную связь. Решения: 1) Создайте живой сайт документации с интерактивными примерами, готовыми фрагментами кода и правилами «можно/нельзя» для каждого компонента. 2) Проведите аудит компонентов: опросите команду, какие компоненты им нужны, но отсутствуют, и добавьте самые запрашиваемые. Сделайте компоненты гибкими с помощью props/вариантов. 3) Установите управление: назначьте владельца дизайн-системы, проводите ежемесячные встречи для запроса изменений и интегрируйте проверки дизайн-системы в процесс ревью дизайна.",
            answerKk: "Диагноз: 1) Нашар құжаттама — адамдар компоненттерді қалай қолдану керектігін білмейді. 2) Компоненттер нақты қажеттіліктерді қамтымайды — топ оларды тым қатаң деп санап, өз шешімдерін жасайды. 3) Басқару жоқ — ешкім қолдануды бақыламайды немесе кері байланыс жинамайды. Шешімдер: 1) Әр компонент үшін интерактивті мысалдары, көшіріп-қоюға дайын код үзінділері және «істеу/істемеу» нұсқаулықтары бар тірі құжаттама сайтын жасаңыз. 2) Компонент аудитін жүргізіңіз: топтан қандай компоненттер керек, бірақ жоқ екенін сұраңыз, ең көп сұралатындарды қосыңыз. Компоненттерді props/нұсқалармен икемді етіңіз. 3) Басқаруды орнатыңыз: дизайн жүйесі иесін тағайындаңыз, топ өзгерістер сұрай алатын ай сайынғы шолу кездесулерін өткізіңіз және дизайн жүйесі тексерулерін дизайн шолу процесіне біріктіріңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Advanced Figma",
        titleRu: "Продвинутый Figma",
        titleKk: "Жетілдірілген Figma",
        content: "Advanced Figma techniques maximize productivity and design quality. Variables enable dynamic theming (switch between light and dark mode with one click). Interactive components add hover, press, and toggle states directly within the component. Dev mode bridges design-to-code handoff by generating CSS, showing measurements, and exporting assets — making collaboration between designers and developers seamless.",
        contentRu: "Продвинутые техники Figma максимизируют продуктивность и качество дизайна. Переменные позволяют динамическое оформление тем (переключение между светлой и тёмной темой одним кликом). Интерактивные компоненты добавляют состояния наведения, нажатия и переключения прямо в компоненте. Dev mode связывает дизайн с кодом, генерируя CSS, показывая размеры и экспортируя ассеты.",
        contentKk: "Жетілдірілген Figma тәсілдері өнімділік пен дизайн сапасын барынша арттырады. Айнымалылар динамикалық тақырып безендіруін мүмкін етеді (бір кликпен ашық және қараңғы режим арасында ауысу). Интерактивті компоненттер hover, басу және ауыстыру күйлерін тікелей компонент ішіне қосады. Dev mode дизайнды кодқа беруді CSS генерациялау, өлшемдерді көрсету және ассеттерді экспорттау арқылы байланыстырады.",
        keyFormulas: [
          {
            formula: "Figma Variables: Mode A (Light) + Mode B (Dark) → one design, two themes",
            formulaRu: "Figma Variables: Режим A (Светлый) + Режим B (Тёмный) → один дизайн, две темы",
            formulaKk: "Figma Variables: A режимі (Ашық) + B режимі (Күңгірт) → бір дизайн, екі тақырып",
            description: "Variables eliminate the need to maintain separate light and dark design files",
            descriptionRu: "Переменные устраняют необходимость поддерживать отдельные файлы для светлой и тёмной тем",
            descriptionKk: "Айнымалылар ашық және қараңғы дизайн файлдарын бөлек қолдау қажеттілігін жояды"
          }
        ],
        solvedExamples: [
          {
            question: "You are designing an app that needs both light and dark themes. How do you set this up efficiently in Figma using variables?",
            questionRu: "Вы проектируете приложение с светлой и тёмной темами. Как эффективно настроить это в Figma с переменными?",
            questionKk: "Ашық және қараңғы тақырыптары бар қолданбаны жобалап жатырсыз. Figma-да айнымалыларды пайдаланып мұны қалай тиімді орнатасыз?",
            steps: [
              { en: "Create a variable collection called 'Theme' with two modes: Light and Dark. Define color variables: bg-primary (Light: #FFFFFF, Dark: #1A1A2E), text-primary (Light: #111111, Dark: #F5F5F5), etc.", ru: "Создайте коллекцию переменных 'Theme' с двумя режимами: Light и Dark. Определите цветовые переменные: bg-primary (Light: #FFFFFF, Dark: #1A1A2E), text-primary (Light: #111111, Dark: #F5F5F5) и т.д.", kk: "Екі режимді 'Theme' айнымалы жинағын жасаңыз: Light және Dark. Түс айнымалыларын анықтаңыз: bg-primary (Light: #FFFFFF, Dark: #1A1A2E), text-primary (Light: #111111, Dark: #F5F5F5) т.б." },
              { en: "Apply these variables to all components instead of hardcoded colors. Now switching the frame's mode from Light to Dark updates every element automatically.", ru: "Примените переменные ко всем компонентам вместо фиксированных цветов. Переключение режима фрейма автоматически обновит все элементы.", kk: "Бұл айнымалыларды тұрақты түстердің орнына барлық компоненттерге қолданыңыз. Фрейм режимін ауыстыру барлық элементтерді автоматты түрде жаңартады." }
            ],
            answer: "Create a Theme variable collection with Light/Dark modes, define semantic color variables for each mode, apply them to all components. Switching modes instantly themes the entire design.",
            answerRu: "Создайте коллекцию переменных Theme с режимами Light/Dark, определите семантические цветовые переменные для каждого режима, примените их ко всем компонентам. Переключение режимов мгновенно меняет тему всего дизайна.",
            answerKk: "Light/Dark режимдері бар Theme айнымалы жинағын жасаңыз, әр режим үшін семантикалық түс айнымалыларын анықтаңыз, оларды барлық компоненттерге қолданыңыз. Режимдерді ауыстыру бүкіл дизайн тақырыбын лезде өзгертеді."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is Dev Mode in Figma and who is it for?",
            questionRu: "Что такое Dev Mode в Figma и для кого он предназначен?",
            questionKk: "Figma-дағы Dev Mode дегеніміз не және ол кімге арналған?",
            answer: "Dev Mode is a Figma feature designed for developers. It shows CSS code, measurements between elements, design token values, and exportable assets. It makes the design-to-code handoff smoother by giving developers exact specifications without having to ask the designer.",
            answerRu: "Dev Mode — это функция Figma, разработанная для разработчиков. Она показывает CSS-код, расстояния между элементами, значения дизайн-токенов и экспортируемые ассеты. Она делает передачу дизайна в код более плавной, давая разработчикам точные спецификации без необходимости спрашивать дизайнера.",
            answerKk: "Dev Mode — әзірлеушілерге арналған Figma мүмкіндігі. Ол CSS кодын, элементтер арасындағы өлшемдерді, дизайн токенінің мәндерін және экспортталатын ассеттерді көрсетеді. Ол әзірлеушілерге дизайнерден сұрамай-ақ дәл сипаттамалар беру арқылы дизайнды кодқа тапсыруды тегісірек етеді.",
            hint: "It bridges the gap between what designers create and what developers need to build.",
            hintRu: "Он связывает то, что создают дизайнеры, с тем, что нужно разработчикам.",
            hintKk: "Ол дизайнерлер жасағанды және әзірлеушілерге не қажет екенін байланыстырады.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What are interactive components in Figma and how do they improve prototyping?",
            questionRu: "Что такое интерактивные компоненты в Figma и как они улучшают прототипирование?",
            questionKk: "Figma-дағы интерактивті компоненттер дегеніміз не және олар прототиптеуді қалай жақсартады?",
            answer: "Interactive components have built-in interactions (hover, press, toggle states) defined within the component itself. When placed in a prototype, they automatically respond to user input without needing separate prototype connections for each instance. This massively reduces prototyping setup time — a button with hover state works everywhere it is used without rewiring each instance.",
            answerRu: "Интерактивные компоненты имеют встроенные взаимодействия (hover, нажатие, переключение), определённые внутри самого компонента. При размещении в прототипе они автоматически реагируют на действия пользователя без необходимости отдельных связей прототипа для каждого экземпляра. Это значительно сокращает время настройки прототипа — кнопка с состоянием hover работает везде, где используется, без перепривязки каждого экземпляра.",
            answerKk: "Интерактивті компоненттердің компоненттің өзінде анықталған кірістірілген өзара әрекеттестіктері (hover, басу, ауыстыру күйлері) бар. Прототипте орналастырылғанда, олар әр данасы үшін бөлек прототип байланыстарынсыз пайдаланушы енгізуіне автоматты түрде жауап береді. Бұл прототиптеуді баптау уақытын айтарлықтай қысқартады — hover күйі бар түйме әр данасын қайта сымдамай-ақ қолданылған кез келген жерде жұмыс істейді.",
            hint: "The interaction lives inside the component, not in the prototype connections.",
            hintRu: "Взаимодействие живёт внутри компонента, а не в связях прототипа.",
            hintKk: "Өзара әрекеттестік прототип байланыстарында емес, компоненттің ішінде.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are handing off a complex design to a development team. The design includes a component library with 30 components, light/dark themes, responsive breakpoints, and micro-animations. What artifacts and documentation should you prepare for a smooth handoff?",
            questionRu: "Вы передаёте сложный дизайн команде разработки. Дизайн включает библиотеку из 30 компонентов, светлую/тёмную тему, адаптивные брейкпоинты и микроанимации. Какие артефакты и документацию подготовить для плавной передачи?",
            questionKk: "Күрделі дизайнды әзірлеу тобына тапсырып жатырсыз. Дизайн 30 компоненті бар кітапхананы, ашық/қараңғы тақырыптарды, адаптивті брейкпоинттерді және микроанимацияларды қамтиды. Тегіс тапсыру үшін қандай артефакттар мен құжаттамаларды дайындау керек?",
            answer: "1) Component documentation: for each of the 30 components, document all variants, states, props, and usage guidelines with do/don't examples. 2) Design token export: export all color, spacing, typography, and border-radius tokens in a developer-friendly format (JSON or CSS custom properties) with Light/Dark values. 3) Responsive specifications: annotated breakpoint behavior showing how layouts change at mobile (375px), tablet (768px), and desktop (1440px). 4) Animation specs: for each micro-animation, document duration, easing curve, trigger event, and before/after states — include short video recordings. 5) User flow maps: diagrams showing all screens connected with navigation paths. 6) Dev Mode access: ensure the Figma file is organized with clear page naming so developers can inspect any element directly.",
            answerRu: "1) Документация компонентов: для каждого из 30 компонентов задокументируйте все варианты, состояния, props и рекомендации по использованию с примерами «можно/нельзя». 2) Экспорт дизайн-токенов: экспортируйте все токены цветов, отступов, типографики и радиуса скругления в удобном для разработчиков формате (JSON или CSS custom properties) со значениями Light/Dark. 3) Адаптивные спецификации: аннотированное поведение брейкпоинтов, показывающее, как меняются макеты на мобильных (375px), планшетах (768px) и десктопе (1440px). 4) Спецификации анимации: для каждой микроанимации задокументируйте длительность, кривую сглаживания, событие-триггер и состояния до/после — включите короткие видеозаписи. 5) Карты пользовательских потоков: диаграммы, показывающие все экраны, связанные путями навигации. 6) Доступ к Dev Mode: убедитесь, что файл Figma организован с понятными названиями страниц, чтобы разработчики могли напрямую изучать любой элемент.",
            answerKk: "1) Компонент құжаттамасы: 30 компоненттің әрқайсысы үшін барлық нұсқаларды, күйлерді, props және «істеу/істемеу» мысалдары бар пайдалану нұсқаулықтарын құжаттаңыз. 2) Дизайн токендерін экспорттау: барлық түс, аралық, типография және бұрыш радиусы токендерін әзірлеушіге ыңғайлы форматта (JSON немесе CSS custom properties) Light/Dark мәндерімен экспорттаңыз. 3) Адаптивті сипаттамалар: мобильде (375px), планшетте (768px) және десктопта (1440px) макеттердің қалай өзгеретінін көрсететін аннотацияланған брейкпоинт мінез-құлқы. 4) Анимация сипаттамалары: әр микроанимация үшін ұзақтығын, тегістеу қисығын, триггер оқиғасын және дейін/кейінгі күйлерді құжаттаңыз — қысқа бейнежазбаларды қосыңыз. 5) Пайдаланушы ағыны карталары: барлық экрандарды навигация жолдарымен көрсететін диаграммалар. 6) Dev Mode қолжетімділігі: әзірлеушілер кез келген элементті тікелей тексере алуы үшін Figma файлының анық бет атауларымен ұйымдастырылғанына көз жеткізіңіз.",
            xp: 20
          }
        ]
      },
      {
        title: "Creative Direction",
        titleRu: "Креативное руководство",
        titleKk: "Шығармашылық бағыт",
        content: "Creative direction is the strategic vision that guides all creative decisions on a project. A creative director defines the overall aesthetic, mood, and messaging while leading a team of designers, writers, and producers. Key skills include developing mood boards and creative briefs, giving constructive art direction feedback, and maintaining a consistent vision across multiple deliverables and team members.",
        contentRu: "Креативное руководство — это стратегическое видение, направляющее все творческие решения проекта. Креативный директор определяет общую эстетику, настроение и сообщение, руководя командой дизайнеров, копирайтеров и продюсеров. Ключевые навыки: создание мудбордов и креативных брифов, конструктивная обратная связь по арт-дирекшену и поддержание единого видения через все материалы и участников команды.",
        contentKk: "Шығармашылық бағыт — жобадағы барлық шығармашылық шешімдерді бағыттайтын стратегиялық көзқарас. Шығармашылық директор дизайнерлер, жазушылар және продюсерлер тобын басқара отырып, жалпы эстетиканы, көңіл-күйді және хабарламаны анықтайды. Негізгі дағдылар: мудбордтар мен шығармашылық бриф жасау, конструктивті арт-дирекшн кері байланыс беру және бірнеше материалдар мен топ мүшелері арқылы дәйекті көзқарасты сақтау.",
        keyFormulas: [
          {
            formula: "Creative brief = Objective + Audience + Key message + Tone + Deliverables + Timeline",
            formulaRu: "Креативный бриф = Цель + Аудитория + Ключевое сообщение + Тон + Результаты + Сроки",
            formulaKk: "Креативті бриф = Мақсат + Аудитория + Негізгі хабарлама + Тон + Нәтижелер + Мерзімдер",
            description: "The foundational document that aligns the entire team on creative goals",
            descriptionRu: "Фундаментальный документ, согласующий всю команду с творческими целями",
            descriptionKk: "Бүкіл топты шығармашылық мақсаттармен сәйкестендіретін негізгі құжат"
          },
          {
            formula: "Mood board = Visual references + Color palette + Typography samples + Texture/pattern examples",
            formulaRu: "Мудборд = Визуальные референсы + Цветовая палитра + Образцы типографики + Примеры текстур/паттернов",
            formulaKk: "Мудборд = Көрнекілік үлгілер + Түс палитрасы + Типография үлгілері + Текстура/өрнек мысалдары",
            description: "Communicates the aesthetic direction more effectively than written descriptions alone",
            descriptionRu: "Передаёт эстетическое направление эффективнее, чем только текстовые описания",
            descriptionKk: "Эстетикалық бағытты тек жазбаша сипаттамалардан гөрі тиімдірек жеткізеді"
          }
        ],
        solvedExamples: [
          {
            question: "A startup asks you to direct the creative for their app launch campaign. Write a concise creative brief.",
            questionRu: "Стартап просит вас руководить креативом кампании запуска приложения. Напишите краткий креативный бриф.",
            questionKk: "Стартап қолданба іске қосу науқанының шығармашылығын басқаруды сұрайды. Қысқаша шығармашылық бриф жазыңыз.",
            steps: [
              { en: "Define the core elements: Objective (drive 10,000 app downloads in first month), Audience (college students aged 18-24), Key message ('Study smarter, not harder'), Tone (energetic, friendly, youthful).", ru: "Определите ключевые элементы: Цель (10 000 загрузок за первый месяц), Аудитория (студенты 18-24), Сообщение («Учись умнее, а не больше»), Тон (энергичный, дружелюбный, молодёжный).", kk: "Негізгі элементтерді анықтаңыз: Мақсат (бірінші айда 10 000 жүктеу), Аудитория (18-24 жастағы студенттер), Хабарлама («Көбірек емес, ақылдырақ оқы»), Тон (қуатты, достық, жастар)." },
              { en: "List deliverables: social media ads (Instagram, TikTok), app store screenshots, landing page, launch video (30s). Timeline: 4 weeks.", ru: "Перечислите результаты: реклама в соцсетях (Instagram, TikTok), скриншоты для магазина, лендинг, видео запуска (30с). Сроки: 4 недели.", kk: "Жеткізілетін материалдарды тізіңіз: әлеуметтік желі жарнамалары (Instagram, TikTok), қолданба дүкені скриншоттары, лендинг парақ, іске қосу бейнесі (30с). Мерзім: 4 апта." }
            ],
            answer: "Objective: 10K downloads in month one. Audience: students 18-24. Message: 'Study smarter, not harder.' Tone: energetic, friendly. Deliverables: social ads, store assets, landing page, 30s video. Timeline: 4 weeks.",
            answerRu: "Цель: 10 тыс. загрузок за первый месяц. Аудитория: студенты 18-24 лет. Сообщение: «Учись умнее, а не больше». Тон: энергичный, дружелюбный. Результаты: реклама в соцсетях, материалы для магазина приложений, лендинг, 30-секундное видео. Сроки: 4 недели.",
            answerKk: "Мақсат: бірінші айда 10 мың жүктеу. Аудитория: 18-24 жастағы студенттер. Хабарлама: «Көбірек емес, ақылдырақ оқы». Тон: қуатты, достық. Жеткізілетіндер: әлеуметтік желі жарнамалары, дүкен материалдары, лендинг парақ, 30 секундтық бейне. Мерзім: 4 апта."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "What is a mood board and why do creative directors use them?",
            questionRu: "Что такое мудборд и зачем креативные директора их используют?",
            questionKk: "Мудборд дегеніміз не және шығармашылық директорлар оларды неге пайдаланады?",
            answer: "A mood board is a visual collage of images, colors, textures, typography, and references that communicates the aesthetic direction of a project. Creative directors use them to align the team and client on the visual feel before detailed design begins — it is faster to agree on direction using visuals than written descriptions.",
            answerRu: "Мудборд — это визуальный коллаж из изображений, цветов, текстур, типографики и референсов, передающий эстетическое направление проекта. Креативные директора используют их, чтобы согласовать команду и клиента по визуальному ощущению до начала детального дизайна — договориться о направлении с помощью визуалов быстрее, чем с помощью текстовых описаний.",
            answerKk: "Мудборд — жобаның эстетикалық бағытын жеткізетін кескіндер, түстер, текстуралар, типография және референстердің визуалды коллажы. Шығармашылық директорлар оларды толық дизайн басталмас бұрын команда мен клиентті визуалды сезім бойынша сәйкестендіру үшін пайдаланады — визуалдар арқылы бағытты келісу жазбаша сипаттамаларға қарағанда жылдамырақ.",
            hint: "It shows what a project should feel like before anyone starts designing.",
            hintRu: "Он показывает, как должен ощущаться проект, до начала детального дизайна.",
            hintKk: "Ол кез келген адам дизайнды бастамас бұрын жобаның қалай сезілуі керектігін көрсетеді.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "What are the key components of a creative brief and why is each important?",
            questionRu: "Каковы ключевые компоненты креативного брифа и почему каждый важен?",
            questionKk: "Шығармашылық бриф негізгі құрамдас бөліктері қандай және әрқайсысы неге маңызды?",
            answer: "1) Objective — defines success so the team knows what they are working toward. 2) Audience — ensures creative resonates with the right people. 3) Key message — the single most important thing to communicate. 4) Tone — sets the emotional and stylistic boundaries. 5) Deliverables — specifies exactly what needs to be created. 6) Timeline — sets deadlines for planning. Each prevents miscommunication and wasted work.",
            answerRu: "1) Цель — определяет успех, чтобы команда знала, к чему стремится. 2) Аудитория — гарантирует, что креатив резонирует с нужными людьми. 3) Ключевое сообщение — самое важное, что нужно донести. 4) Тон — задаёт эмоциональные и стилистические границы. 5) Результаты — точно указывают, что нужно создать. 6) Сроки — устанавливают дедлайны для планирования. Каждый пункт предотвращает недопонимание и потраченную впустую работу.",
            answerKk: "1) Мақсат — топтың неге ұмтылатынын білуі үшін табысты анықтайды. 2) Аудитория — креативтің дұрыс адамдарға сай келуін қамтамасыз етеді. 3) Негізгі хабарлама — жеткізілуі керек ең маңызды бір нәрсе. 4) Тон — эмоционалды және стильдік шекараларды белгілейді. 5) Жеткізілетіндер — нақты не жасалу керектігін көрсетеді. 6) Мерзім — жоспарлау үшін мерзімдерді белгілейді. Әрқайсысы түсінбеушілік пен босқа кеткен жұмыстың алдын алады.",
            hint: "Each component answers a different question the creative team needs answered before starting.",
            hintRu: "Каждый компонент отвечает на вопрос, который команда должна знать перед началом работы.",
            hintKk: "Әрбір құрамдас бөлік шығармашылық топтың жұмысты бастамас бұрын жауап қажет сұрағына жауап береді.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "You are the creative director for a school yearbook with a team of 8 student designers. Three designers are going in completely different visual directions despite having a mood board. How do you realign the team and ensure visual consistency without discouraging their creativity?",
            questionRu: "Вы — креативный директор школьного альбома с командой из 8 студентов-дизайнеров. Трое идут в совершенно разных визуальных направлениях, несмотря на мудборд. Как вернуть команду к единому стилю, не подавляя их креативность?",
            questionKk: "8 студент-дизайнер тобымен мектеп жылнамасының шығармашылық директорысыз. Мудборд болса да, үшеуі мүлдем басқа визуалды бағытта жүріп жатыр. Олардың шығармашылығын басып тастамай, топты қалай қайта сәйкестендіресіз және визуалды дәйектілікті қалай қамтамасыз етесіз?",
            answer: "1) Review session: hold a team meeting where you put all three directions side by side with the mood board. Ask the team to identify which elements from each direction best match the established vision — this makes it collaborative, not dictatorial. 2) Create a mini design system: extract the strongest elements from the approved direction into a shared template — specific fonts, color palette, grid layout, photo treatment style. This gives guardrails without limiting creative expression within those guardrails. 3) Design review checkpoints: implement bi-weekly reviews where designers share work-in-progress. Catch divergence early with specific, constructive feedback like 'This is beautiful, but the serif font does not match our modern sans-serif system — can you adapt it using our approved typeface?' 4) Celebrate diversity within boundaries: assign each designer spreads that play to their strengths, so they feel their creativity is valued even while following the shared vision.",
            answerRu: "1) Сессия обзора: проведите встречу команды, где все три направления сравниваются с мудбордом. Попросите команду определить, какие элементы из каждого направления лучше всего соответствуют установленному видению — это делает процесс совместным, а не диктаторским. 2) Создайте мини-дизайн-систему: извлеките сильнейшие элементы из одобренного направления в общий шаблон — конкретные шрифты, цветовая палитра, сетка макета, стиль обработки фото. Это задаёт рамки, не ограничивая творческое самовыражение внутри них. 3) Контрольные точки ревью дизайна: внедрите двухнедельные ревью, где дизайнеры делятся незавершённой работой. Ловите расхождения на раннем этапе с конкретной, конструктивной обратной связью, например: «Это красиво, но шрифт с засечками не соответствует нашей современной системе без засечек — можете адаптировать его под утверждённый шрифт?» 4) Отмечайте разнообразие в рамках границ: назначайте каждому дизайнеру развороты, соответствующие их сильным сторонам, чтобы они чувствовали ценность своего творчества, следуя общему видению.",
            answerKk: "1) Шолу сессиясы: барлық үш бағытты мудбордпен қатар қоятын топ кездесуін өткізіңіз. Топтан әр бағыттың қай элементтері белгіленген көзқарасқа ең жақсы сай келетінін анықтауды сұраңыз — бұл процесті диктаторлық емес, бірлескен етеді. 2) Мини дизайн жүйесін жасаңыз: мақұлданған бағыттың ең күшті элементтерін ортақ шаблонға алыңыз — нақты қаріптер, түс палитрасы, макет торы, фото өңдеу стилі. Бұл шығармашылық көріністі шектемей, шекара қояды. 3) Дизайн шолу бақылау нүктелері: дизайнерлер аяқталмаған жұмыспен бөлісетін екі апта сайынғы шолуларды енгізіңіз. Нақты, конструктивті кері байланыспен ерте алшақтықты ұстаңыз, мысалы: «Бұл әдемі, бірақ serif қаріп біздің заманауи sans-serif жүйемізге сай келмейді — оны бекітілген қарібімізге бейімдей аласыз ба?» 4) Шекара ішінде әртүрлілікті құрметтеңіз: әр дизайнерге өз күшті жақтарына сай беттер тағайындаңыз, осылайша олар ортақ көзқарасты ұстанғанда да шығармашылығы бағаланғанын сезінеді.",
            xp: 20
          }
        ]
      },
      {
        title: "Industry Review",
        titleRu: "Обзор индустрии",
        titleKk: "Сала шолуы",
        content: "The creative industry is vast and constantly evolving. Career paths include UI/UX design, motion graphics, video production, 3D visualization, game design, brand design, and creative direction. Understanding industry trends — AI-assisted design, no-code tools, remote collaboration, and the creator economy — helps you position yourself for the future. Building a professional network through portfolios, social media presence, and community participation is as important as technical skills.",
        contentRu: "Креативная индустрия обширна и постоянно развивается. Карьерные пути включают UI/UX-дизайн, моушн-графику, видеопроизводство, 3D-визуализацию, геймдизайн, бренд-дизайн и креативное руководство. Понимание трендов — ИИ-дизайн, no-code инструменты, удалённая работа и экономика создателей — помогает правильно позиционироваться. Профессиональный нетворкинг через портфолио, соцсети и сообщества так же важен, как технические навыки.",
        contentKk: "Шығармашылық индустрия кең және үнемі дамып отырады. Мансап жолдары UI/UX дизайн, моушн-графика, бейне өндіріс, 3D визуализация, ойын дизайны, бренд дизайны және шығармашылық бағытты қамтиды. Индустрия трендтерін — AI көмекші дизайн, no-code құралдар, қашықтан ынтымақтастық және автор экономикасы — түсіну болашаққа дайындалуға көмектеседі. Портфолио, әлеуметтік желі және қоғамдастыққа қатысу арқылы кәсіби желі құру техникалық дағдылар сияқты маңызды.",
        keyFormulas: [
          {
            formula: "Career portfolio = Technical skills + Soft skills + Network + Online presence",
            formulaRu: "Карьерное портфолио = Технические навыки + Гибкие навыки + Нетворкинг + Присутствие онлайн",
            formulaKk: "Мансаптық портфолио = Техникалық дағдылар + Икемді дағдылар + Байланыс желісі + Онлайн қатысу",
            description: "All four elements are needed for a successful creative career",
            descriptionRu: "Все четыре элемента необходимы для успешной творческой карьеры",
            descriptionKk: "Табысты шығармашылық мансап үшін барлық төрт элемент қажет"
          }
        ],
        solvedExamples: [
          {
            question: "You are graduating and want to start a career in UI/UX design. What steps should you take in the next 6 months to become job-ready?",
            questionRu: "Вы заканчиваете учёбу и хотите начать карьеру в UI/UX-дизайне. Какие шаги предпринять за следующие 6 месяцев для готовности к работе?",
            questionKk: "Оқуды бітіріп, UI/UX дизайн мансабын бастағыңыз келеді. Жұмысқа дайын болу үшін келесі 6 айда қандай қадамдар жасау керек?",
            steps: [
              { en: "Months 1-2: Build 3 strong case study projects (one redesign, one original app, one responsive website). Create accounts on Behance and Dribbble.", ru: "Месяцы 1-2: Создайте 3 сильных кейс-стади (один редизайн, одно оригинальное приложение, один адаптивный сайт). Создайте аккаунты на Behance и Dribbble.", kk: "1-2 ай: 3 күшті кейс-стади жоба жасаңыз (бір қайта дизайн, бір түпнұсқа қолданба, бір адаптивті вебсайт). Behance және Dribbble-де аккаунт жасаңыз." },
              { en: "Months 3-4: Build a portfolio website, start sharing work on LinkedIn and Twitter/X, join design communities (Figma Community, Designer Hangout). Months 5-6: apply to internships and junior roles, attend design meetups, do one pro-bono project for a real client.", ru: "Месяцы 3-4: Создайте сайт-портфолио, начните делиться работами в LinkedIn и Twitter/X, присоединитесь к сообществам. Месяцы 5-6: подавайтесь на стажировки, посещайте митапы, сделайте один бесплатный проект.", kk: "3-4 ай: Портфолио вебсайтын жасаңыз, LinkedIn және Twitter/X-те жұмыстарды бөлісуді бастаңыз, дизайн қоғамдастықтарына қосылыңыз. 5-6 ай: тағылымдамалар мен кіші позицияларға өтінім беріңіз, дизайн кездесулеріне қатысыңыз, нақты клиент үшін бір тегін жоба жасаңыз." }
            ],
            answer: "Months 1-2: build 3 case studies. Months 3-4: launch portfolio site, share on social media, join communities. Months 5-6: apply to jobs, attend meetups, do a pro-bono project. Combine skills, portfolio, and networking.",
            answerRu: "Месяцы 1-2: создайте 3 кейс-стади. Месяцы 3-4: запустите сайт-портфолио, делитесь в соцсетях, вступайте в сообщества. Месяцы 5-6: подавайтесь на работу, посещайте митапы, сделайте один бесплатный проект. Совместите навыки, портфолио и нетворкинг.",
            answerKk: "1-2 ай: 3 кейс-стади жасаңыз. 3-4 ай: портфолио сайтын іске қосыңыз, әлеуметтік желіде бөлісіңіз, қоғамдастықтарға қосылыңыз. 5-6 ай: жұмысқа өтінім беріңіз, кездесулерге қатысыңыз, бір тегін жоба жасаңыз. Дағдыларды, портфолионы және желіні біріктіріңіз."
          }
        ],
        practiceProblems: [
          {
            difficulty: 'easy',
            question: "Name three different career paths in the creative industry.",
            questionRu: "Назовите три различных карьерных пути в креативной индустрии.",
            questionKk: "Шығармашылық индустриядағы үш түрлі мансап жолын атаңыз.",
            answer: "UI/UX design (designing app and website interfaces), motion graphics (creating animated visuals), and video production (filming and editing video content). Other paths include 3D visualization, game design, brand design, and creative direction.",
            answerRu: "UI/UX-дизайн (проектирование интерфейсов приложений и сайтов), моушн-графика (создание анимированных визуалов) и видеопроизводство (съёмка и монтаж видеоконтента). Другие пути включают 3D-визуализацию, геймдизайн, бренд-дизайн и креативное руководство.",
            answerKk: "UI/UX дизайн (қолданба мен вебсайт интерфейстерін жобалау), моушн-графика (анимациялық визуалдар жасау) және бейне өндіріс (бейне контентін түсіру және монтаждау). Басқа жолдарға 3D визуализация, ойын дизайны, бренд дизайны және шығармашылық бағыт жатады.",
            hint: "Think about the different types of creative work you have learned about in this course.",
            hintRu: "Подумайте о различных видах творческой работы, о которых вы узнали на этом курсе.",
            hintKk: "Осы курста үйренген шығармашылық жұмыстың әртүрлі түрлері туралы ойлаңыз.",
            xp: 5
          },
          {
            difficulty: 'medium',
            question: "Why is building a professional network as important as having strong technical skills?",
            questionRu: "Почему профессиональный нетворкинг так же важен, как сильные технические навыки?",
            questionKk: "Неліктен кәсіби желі құру күшті техникалық дағдылар сияқты маңызды?",
            answer: "Most creative jobs are filled through referrals and connections, not just job postings. A strong network means: 1) You hear about opportunities before they are publicly listed. 2) People vouch for your work quality. 3) You get freelance referrals from past collaborators. 4) You stay updated on industry trends through community conversations. The best portfolio in the world is useless if nobody sees it.",
            answerRu: "Большинство творческих вакансий заполняются через рекомендации и связи, а не только через объявления о работе. Сильная сеть контактов означает: 1) Вы узнаёте о возможностях раньше, чем они публикуются. 2) Люди подтверждают качество вашей работы. 3) Вы получаете фриланс-рекомендации от бывших коллег. 4) Вы в курсе трендов индустрии через общение в сообществах. Лучшее портфолио в мире бесполезно, если его никто не видит.",
            answerKk: "Көптеген шығармашылық жұмыс орындары жай ғана хабарландырулар арқылы емес, ұсыныстар мен байланыстар арқылы толтырылады. Күшті желі мынаны білдіреді: 1) Мүмкіндіктер туралы олар жарияланбай тұрып білесіз. 2) Адамдар жұмысыңыздың сапасына кепілдік береді. 3) Бұрынғы серіктестерден фриланс ұсыныстарын аласыз. 4) Қоғамдастық әңгімелері арқылы индустрия трендтерінен хабардар боласыз. Әлемдегі ең жақсы портфолио да оны ешкім көрмесе, пайдасыз.",
            hint: "Many jobs never get publicly posted — they are filled through who you know.",
            hintRu: "Многие вакансии не публикуются — они заполняются через знакомства.",
            hintKk: "Көптеген жұмыс орындары жарияланбайды — олар таныстар арқылы толтырылады.",
            xp: 10
          },
          {
            difficulty: 'hard',
            question: "AI design tools (like Midjourney, DALL-E, and AI features in Figma) are changing the creative industry rapidly. Some people say AI will replace designers. Write a balanced analysis: what AI can and cannot do, and how should aspiring designers adapt?",
            questionRu: "ИИ-инструменты (Midjourney, DALL-E, ИИ в Figma) быстро меняют креативную индустрию. Некоторые говорят, что ИИ заменит дизайнеров. Напишите сбалансированный анализ: что ИИ может и не может, и как начинающим дизайнерам адаптироваться?",
            questionKk: "AI дизайн құралдары (Midjourney, DALL-E, Figma-дағы AI) шығармашылық индустрияны тез өзгертуде. Кейбіреулер AI дизайнерлерді ауыстырады дейді. Теңдестірілген талдау жазыңыз: AI не істей алады және не істей алмайды, және болашақ дизайнерлер қалай бейімделуі керек?",
            answer: "What AI CAN do: generate images from text prompts, create variations quickly, automate repetitive tasks (resizing, color adjustments), suggest layouts, and speed up the ideation phase. What AI CANNOT do: understand business context and user needs, conduct user research, make strategic design decisions, manage client relationships, provide creative direction for a brand, or ensure designs are accessible and ethical. How to adapt: 1) Learn to use AI as a tool — designers who use AI will outperform those who do not. 2) Double down on skills AI lacks: UX research, strategic thinking, client communication, design systems management. 3) Focus on the 'why' behind design decisions, not just the 'what' — AI generates output, but humans provide judgment and context. 4) Develop a T-shaped skill set: broad creative knowledge with deep expertise in one area (e.g., UX research, motion design, creative direction). The designers most at risk are those who only execute without thinking strategically.",
            answerRu: "Что ИИ МОЖЕТ делать: генерировать изображения по текстовым запросам, быстро создавать вариации, автоматизировать рутинные задачи (изменение размера, цветокоррекция), предлагать макеты и ускорять этап генерации идей. Что ИИ НЕ МОЖЕТ делать: понимать бизнес-контекст и потребности пользователей, проводить исследования пользователей, принимать стратегические дизайн-решения, управлять отношениями с клиентами, обеспечивать креативное руководство брендом или гарантировать доступность и этичность дизайна. Как адаптироваться: 1) Научитесь использовать ИИ как инструмент — дизайнеры, использующие ИИ, будут превосходить тех, кто этого не делает. 2) Удвойте усилия в навыках, которых у ИИ нет: UX-исследования, стратегическое мышление, общение с клиентами, управление дизайн-системами. 3) Сосредоточьтесь на «почему» за дизайн-решениями, а не только на «что» — ИИ генерирует результат, но люди дают суждение и контекст. 4) Развивайте Т-образный набор навыков: широкие творческие знания с глубокой экспертизой в одной области (например, UX-исследования, моушн-дизайн, креативное руководство). Наибольший риск у дизайнеров, которые только исполняют, не думая стратегически.",
            answerKk: "AI ІСТЕЙ АЛАТЫН нәрселер: мәтін сұраныстарынан кескіндер генерациялау, нұсқаларды тез жасау, қайталанатын тапсырмаларды автоматтандыру (өлшемді өзгерту, түс түзету), макеттер ұсыну және идея генерациялау кезеңін жеделдету. AI ІСТЕЙ АЛМАЙТЫН нәрселер: бизнес контексті мен пайдаланушы қажеттіліктерін түсіну, пайдаланушы зерттеулерін жүргізу, стратегиялық дизайн шешімдерін қабылдау, клиент қарым-қатынастарын басқару, бренд үшін шығармашылық бағыт беру немесе дизайндардың қолжетімді әрі этикалық болуын қамтамасыз ету. Қалай бейімделу керек: 1) AI-ды құрал ретінде пайдалануды үйреніңіз — AI қолданатын дизайнерлер қолданбайтындарды басып озады. 2) AI-да жоқ дағдыларға екі есе көп күш салыңыз: UX зерттеу, стратегиялық ойлау, клиентпен байланыс, дизайн жүйелерін басқару. 3) Тек «не» емес, дизайн шешімдерінің артындағы «неліктенге» назар аударыңыз — AI нәтиже генерациялайды, бірақ адамдар пайымдау мен контекст береді. 4) Т-тәрізді дағды жиынтығын дамытыңыз: бір саладағы терең сараптамасы бар кең шығармашылық білім (мысалы, UX зерттеу, моушн-дизайн, шығармашылық бағыт). Ең үлкен тәуекелде стратегиялық ойланбай тек орындайтын дизайнерлер бар.",
            xp: 20
          }
        ]
      }
    ]
  }
};