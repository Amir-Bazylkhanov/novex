import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar, type RobotId } from '../robots/RobotAvatars.tsx';

// Секция «Частые вопросы» на лендинге: раскрывающийся список вопрос-ответ.
// Последний пункт (про трёх роботов Novex) собран отдельно, с карточками
// роботов внутри ответа, а не просто текстом.

const BADGE: Localized = {
  ru: 'FAQ',
  kk: 'Жиі қойылатын сұрақтар',
  en: 'FAQ',
};

const TITLE: Localized = {
  ru: 'Частые вопросы',
  kk: 'Жиі қойылатын сұрақтар',
  en: 'Frequently asked questions',
};

const SUBTITLE: Localized = {
  ru: 'Коротко о главном: связь, языки, цены и как устроен ИИ.',
  kk: 'Ең маңыздысы жайлы қысқаша: байланыс, тілдер, бағалар және ИИ қалай жұмыс істейді.',
  en: 'The essentials in short: connectivity, languages, pricing and how the AI works.',
};

interface FaqItem {
  q: Localized;
  a: Localized;
}

const ITEMS: FaqItem[] = [
  {
    q: {
      ru: 'Нужен ли быстрый интернет? Как это работает на слабой связи?',
      kk: 'Жылдам интернет қажет пе? Әлсіз байланыста қалай жұмыс істейді?',
      en: 'Do I need fast internet? How does it work on a weak connection?',
    },
    a: {
      ru: 'Нет. Страницы платформы лёгкие: никаких тяжёлых видео и больших файлов, интерфейс и задания открываются даже на 3G. Прогресс сохраняется, если связь прервалась.',
      kk: 'Жоқ. Платформа беттері жеңіл: ауыр видеолар мен ірі файлдар жоқ, интерфейс пен тапсырмалар тіпті 3G-де ашылады. Байланыс үзілсе, үдеріс сақталады.',
      en: 'No. The platform’s pages are lightweight: no heavy videos or large files, and the interface and tasks open even on 3G. Progress is saved if the connection drops.',
    },
  },
  {
    q: {
      ru: 'Это бесплатно для учеников и школ?',
      kk: 'Бұл оқушылар мен мектептерге тегін бе?',
      en: 'Is it free for students and schools?',
    },
    a: {
      ru: 'Да. Базовый тариф для ученика бесплатен навсегда, а государственные школы получают панель учителя и аналитику полностью бесплатно. Платный тариф «Про» нужен только для безлимитного чата с Академиком и полной подготовки к ЕНТ.',
      kk: 'Иә. Оқушыға арналған базалық тариф мәңгілікке тегін, ал мемлекеттік мектептер мұғалім панелі мен аналитиканы толығымен тегін алады. Ақылы «Про» тарифі тек Академикпен шексіз чат пен ҰБТ-ға толық дайындық үшін қажет.',
      en: 'Yes. The basic student plan is free forever, and state schools get the teacher panel and analytics completely free. The paid Pro plan is only for unlimited chat with the Academic and full UNT preparation.',
    },
  },
  {
    q: {
      ru: 'На каких языках работает платформа?',
      kk: 'Платформа қандай тілдерде жұмыс істейді?',
      en: 'Which languages does the platform work in?',
    },
    a: {
      ru: 'На казахском, русском и английском. Язык можно переключить в любой момент — и Академик объясняет темы и ошибки на выбранном языке.',
      kk: 'Қазақ, орыс және ағылшын тілдерінде. Тілді кез келген уақытта ауыстыруға болады — Академик тақырыптар мен қателерді таңдалған тілде түсіндіреді.',
      en: 'Kazakh, Russian and English. You can switch the language at any time — and the Academic explains topics and mistakes in the language you choose.',
    },
  },
  {
    q: {
      ru: 'Как ИИ определяет уровень ученика?',
      kk: 'ИИ оқушының деңгейін қалай анықтайды?',
      en: 'How does the AI determine a student’s level?',
    },
    a: {
      ru: 'Сначала ученик проходит короткую адаптивную диагностику: задания подстраиваются под ответы. По её результатам строится карта знаний по темам. Дальше сложность заданий меняется автоматически — по точности и скорости ответов.',
      kk: 'Алдымен оқушы қысқа адаптивті диагностикадан өтеді: тапсырмалар жауаптарға бейімделеді. Оның нәтижесінде тақырыптар бойынша білім картасы құрылады. Бұдан кейін тапсырмалардың күрделілігі жауаптардың дәлдігі мен жылдамдығына қарай автоматты түрде өзгереді.',
      en: 'First, the student takes a short adaptive diagnostic: the tasks adjust to their answers. From its results, a per-topic knowledge map is built. After that, task difficulty changes automatically based on answer accuracy and speed.',
    },
  },
  {
    q: {
      ru: 'Заменяет ли Novex учителя?',
      kk: 'Novex мұғалімді алмастыра ма?',
      en: 'Does Novex replace teachers?',
    },
    a: {
      ru: 'Нет. Novex берёт на себя рутину — проверку заданий и поиск слабых тем — и возвращает учителю время на живую работу с классом. Учитель видит прогресс каждого ученика в панели и остаётся главным в учебном процессе.',
      kk: 'Жоқ. Novex күнделікті жұмысты — тапсырмаларды тексеру мен әлсіз тақырыптарды табуды — өз мойнына алып, мұғалімге сыныппен тірі жұмыс істеуге уақыт қайтарады. Мұғалім әр оқушының үдерісін панельде көреді және оқу процесінде басты тұлға болып қалады.',
      en: 'No. Novex takes over the routine — checking tasks and finding weak topics — and gives teachers time back for real work with the class. The teacher sees every student’s progress in the panel and stays in charge of the learning process.',
    },
  },
  {
    q: {
      ru: 'Как школе подключиться к Novex?',
      kk: 'Мектеп Novex-ке қалай қосылады?',
      en: 'How does a school join Novex?',
    },
    a: {
      ru: 'Напишите нам на amirbazylkhanov@gmail.com — мы поможем создать кабинет школы, добавить классы и выдать доступ учителям. Для государственных школ подключение и использование бесплатны.',
      kk: 'Бізге amirbazylkhanov@gmail.com адресіне жазыңыз — мектеп кабинетін құруға, сыныптарды қосуға және мұғалімдерге қолжетімділік беруге көмектесеміз. Мемлекеттік мектептерге қосылу мен пайдалану тегін.',
      en: 'Write to us at amirbazylkhanov@gmail.com — we will help create the school account, add classes and give teachers access. Onboarding and usage are free for state schools.',
    },
  },
];

const ROBOTS_Q: Localized = {
  ru: 'Кто такие три робота Novex и что делает каждый?',
  kk: 'Novex-тің үш роботы кім және әрқайсысы не істейді?',
  en: 'Who are the three Novex robots and what does each do?',
};

const ROBOTS_A: Localized = {
  ru: 'Каждый робот ведёт своё направление. NOV-01 Академик ведёт академическую базу: проводит диагностику уровня, объясняет материал шаг за шагом на трёх языках и строит план подготовки к ЕНТ или олимпиаде. NOV-02 Практик ведёт жизненные навыки — от финансовой грамотности до общения. NOV-03 Кибер ведёт навыки будущего: программирование, предпринимательство и креативность.',
  kk: 'Әр робот өз бағытын жетекшилейді. NOV-01 Академик академиялық негізді жүргізеді: деңгей диагностикасын өткізеді, материалды үш тілде қадамдап түсіндіреді және ҰБТ-ға немесе олимпиадаға дайындық жоспарын құрады. NOV-02 Практик өмірлік дағдыларды — қаржылық сауаттылықтан бастап қарым-қатынасқа дейін — жетекшилейді. NOV-03 Кибер болашақ дағдыларын жүргізеді: бағдарламалау, кәсіпкерлік және креативтілік.',
  en: 'Each robot leads its own direction. NOV-01 the Academic leads the academic foundation: it runs the level diagnostic, explains material step by step in three languages and builds the prep roadmap for the UNT or an olympiad. NOV-02 the Practitioner leads life skills — from financial literacy to communication. NOV-03 the Cyber leads future skills: programming, entrepreneurship and creativity.',
};

const ROBOT_TEAM: Array<{ id: RobotId; code: string; name: Localized; job: Localized }> = [
  {
    id: 'nov1',
    code: 'NOV-01',
    name: { ru: 'Академик', kk: 'Академик', en: 'Academic' },
    job: {
      ru: 'ведёт академическую базу',
      kk: 'академиялық негізді жүргізеді',
      en: 'leads the academic foundation',
    },
  },
  {
    id: 'nov2',
    code: 'NOV-02',
    name: { ru: 'Практик', kk: 'Практик', en: 'Practitioner' },
    job: {
      ru: 'ведёт жизненные навыки',
      kk: 'өмірлік дағдыларды жүргізеді',
      en: 'leads life skills',
    },
  },
  {
    id: 'nov3',
    code: 'NOV-03',
    name: { ru: 'Кибер', kk: 'Кибер', en: 'Cyber' },
    job: {
      ru: 'ведёт навыки будущего',
      kk: 'болашақ дағдыларын жүргізеді',
      en: 'leads future skills',
    },
  },
];

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const FAQ_COUNT = ITEMS.length + 1; // regular items + robots question
// Общее число вопросов (обычные + вопрос про роботов) — нужно для расчёта
// задержки анимации появления последней карточки.

const Faq: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  // Индекс раскрытого вопроса; null — все свёрнуты. По умолчанию открыт первый.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const motionProps = reduceMotion
    ? { ...fadeUp, initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : fadeUp;

  // Вспомогательные функции ниже собирают кнопку-вопрос и панель-ответ для
  // одной карточки аккордеона, чтобы не дублировать разметку для обычных
  // вопросов и для вопроса про роботов.
  const renderPanel = (index: number, children: React.ReactNode) => (
    <div
      id={`faq-panel-${index}`}
      role="region"
      aria-labelledby={`faq-button-${index}`}
      hidden={openIndex !== index}
      className="px-5 pb-5 md:px-6"
    >
      {children}
    </div>
  );

  const renderButton = (index: number, question: Localized) => {
    const open = openIndex === index;
    return (
      <button
        type="button"
        id={`faq-button-${index}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpenIndex(open ? null : index)}
        className={`${FOCUS_RING} flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left md:px-6 md:py-5`}
      >
        <span className="font-display text-base font-bold text-ink md:text-lg">
          {loc(language, question)}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-teal transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
    );
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...motionProps} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
            {loc(language, BADGE)}
          </span>
          <h2
            id="faq-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE)}
          </h2>
          <p className="mt-5 text-base text-slateink md:text-lg">
            {loc(language, SUBTITLE)}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.q.en}
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
            >
              {renderButton(i, item.q)}
              {renderPanel(i, (
                <p className="max-w-2xl text-sm leading-relaxed text-slateink md:text-base">
                  {loc(language, item.a)}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Robots question with avatars */}
          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.06 * (FAQ_COUNT - 1) }}
            className="overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
          >
            {renderButton(FAQ_COUNT - 1, ROBOTS_Q)}
            {renderPanel(FAQ_COUNT - 1, (
              <div>
                <p className="max-w-2xl text-sm leading-relaxed text-slateink md:text-base">
                  {loc(language, ROBOTS_A)}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {ROBOT_TEAM.map((robot) => (
                    <div
                      key={robot.code}
                      className="flex items-center gap-3 rounded-xl border border-line/50 bg-canvas p-3"
                    >
                      <RobotAvatar robot={robot.id} className="h-12 w-12 shrink-0" />
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-slateink">
                          {robot.code}
                        </p>
                        <p className="truncate text-sm font-semibold text-ink">
                          {loc(language, robot.name)}
                        </p>
                        <p className="truncate text-xs text-slateink">
                          {loc(language, robot.job)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
