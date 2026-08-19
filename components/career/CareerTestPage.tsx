import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  Compass,
  Loader2,
  MessageSquareText,
  RotateCcw,
  SkipForward,
  Sparkles,
  Target,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { askTutor } from '../../services/aiService.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import { LESSON_SUBJECTS, type LessonSubject } from '../../constants/lessonData.ts';

/* --- content --- */

// NOV-01 · Академик — the direction-robot rename in progress elsewhere in the
// app maps this persona onto RobotAvatar's MentorRobotId variant 'nov4'
// (components/robots/RobotAvatars.tsx). The rename agent working on the
// robots files may realias/rename that id further; do not edit robots files
// here — this component only consumes the variant value.
const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Академик',
  kk: 'NOV-01 · Академик',
  en: 'NOV-01 · Academic',
};
const LOADING: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const INTRO_TITLE: Localized = {
  ru: 'Профориентационный тест',
  kk: 'Кәсіби бағдар тесті',
  en: 'Career orientation test',
};
const INTRO_SUB: Localized = {
  ru: '18 утверждений и несколько открытых вопросов о том, что тебе нравится и что у тебя получается. NOV-01 разложит ответы по шести направлениям, а затем разберёт твои развёрнутые ответы и покажет профиль: подходящие профессии и предметы, на которые стоит опереться.',
  kk: 'Неміне қызығатының мен неге жақсы берілетінің туралы 18 тұжырым және бірнеше ашық сұрақ. NOV-01 жауаптарды алты бағытқа бөліп, сенің толық жауаптарыңды талдап, профиліңді көрсетеді: сәйкес мамандықтар мен сүйенуге болатын пәндер.',
  en: '18 statements plus a few open questions about what you enjoy and what you are good at. NOV-01 maps your answers onto six dimensions, reads your written answers, and shows your profile: fitting professions and the subjects worth leaning on.',
};
const INTRO_META: Localized = {
  ru: '7–10 минут · без правильных и неправильных ответов',
  kk: '7–10 минут · дұрыс немесе қате жауаптар жоқ',
  en: '7–10 minutes · no right or wrong answers',
};
const INTRO_RESUME: Localized = {
  ru: 'У тебя есть незавершённая попытка — продолжим с того места, где ты остановился.',
  kk: 'Аяқталмаған талпынысың бар — тоқтаған жерден жалғастырамыз.',
  en: 'You have an unfinished attempt — we will pick up where you left off.',
};
const START_BTN: Localized = {
  ru: 'Начать тест',
  kk: 'Тесті бастау',
  en: 'Start the test',
};
const RESUME_BTN: Localized = {
  ru: 'Продолжить',
  kk: 'Жалғастыру',
  en: 'Resume',
};

const counterLine = (lang: 'ru' | 'kk' | 'en', current: number, total: number): string => {
  if (lang === 'kk') return `Тұжырым ${current} / ${total}`;
  if (lang === 'en') return `Statement ${current} of ${total}`;
  return `Утверждение ${current} из ${total}`;
};

const openCounterLine = (lang: 'ru' | 'kk' | 'en', current: number, total: number): string => {
  if (lang === 'kk') return `Ашық сұрақ ${current} / ${total}`;
  if (lang === 'en') return `Open question ${current} of ${total}`;
  return `Открытый вопрос ${current} из ${total}`;
};

/* --- open questions: free-text anchors, interleaved after the 18 scale
      statements. Mirrors the depth of Locus Guide's open anchors (a moment
      that clicked / a task that absorbs you / a self-projection question)
      without copying its country-fit or major-matching scope. --- */

const OPEN_INTRO: Localized = {
  ru: 'Ещё несколько вопросов своими словами — они помогут NOV-01 понять тебя точнее, чем шкала.',
  kk: 'Тағы бірнеше сұрақ өз сөзіңмен — олар NOV-01-ге сені шкаладан дәлірек түсінуге көмектеседі.',
  en: 'A few more questions in your own words — they help NOV-01 understand you more precisely than the scale.',
};

const OPEN_MIN_HINT: Localized = {
  ru: 'Минимум 20 символов, чтобы продолжить — или пропусти вопрос.',
  kk: 'Жалғастыру үшін кемінде 20 таңба керек — немесе сұрақты өткізіп жібер.',
  en: 'At least 20 characters to continue — or skip the question.',
};

const OPEN_CONTINUE_BTN: Localized = {
  ru: 'Продолжить',
  kk: 'Жалғастыру',
  en: 'Continue',
};

const OPEN_SKIP_BTN: Localized = {
  ru: 'Пропустить',
  kk: 'Өткізіп жіберу',
  en: 'Skip',
};

interface OpenQuestion {
  id: string;
  prompt: Localized;
  placeholder: Localized;
}

const OPEN_QUESTIONS: readonly OpenQuestion[] = [
  {
    id: 'open1',
    prompt: {
      ru: 'Опиши задачу, за которую ты взялся бы с удовольствием — даже без оценки за неё.',
      kk: 'Баға қойылмаса да, ықыласпен кірісетін тапсырманы сипатта.',
      en: 'Describe a task you would take on with pleasure — even without a grade for it.',
    },
    placeholder: {
      ru: 'Например: собрать и настроить свой первый сайт, разобрать, как работает старый радиоприёмник…',
      kk: 'Мысалы: алғашқы сайтыңды құрастырып баптау, ескі радионың қалай жұмыс істейтінін түсіну…',
      en: 'For example: building and configuring your first website, taking apart an old radio to see how it works…',
    },
  },
  {
    id: 'open2',
    prompt: {
      ru: 'Какие школьные темы тебе интереснее всего и почему?',
      kk: 'Мектептегі қай тақырыптар саған ең қызық және неге?',
      en: 'Which school topics interest you most, and why?',
    },
    placeholder: {
      ru: 'Назови конкретные темы, а не просто предмет, и объясни, что в них цепляет.',
      kk: 'Жай пәнді емес, нақты тақырыптарды атап, олардың немен қызықтыратынын түсіндір.',
      en: 'Name specific topics, not just a subject, and explain what draws you in.',
    },
  },
  {
    id: 'open3',
    prompt: {
      ru: 'Кем ты видишь себя через 10 лет?',
      kk: '10 жылдан кейін өзіңді кім болып көресің?',
      en: 'Where do you see yourself in 10 years?',
    },
    placeholder: {
      ru: 'Опиши день из этой жизни: чем занимаешься, с кем, что тебя радует.',
      kk: 'Сол өмірден бір күнді сипатта: немен айналысасың, кіммен, не қуантады.',
      en: 'Describe a day in that life: what you do, with whom, what makes it satisfying.',
    },
  },
];

const AI_HEADING: Localized = {
  ru: 'Разбор от NOV-01',
  kk: 'NOV-01 талдауы',
  en: "NOV-01's analysis",
};
const AI_LOADING: Localized = {
  ru: 'NOV-01 читает твои ответы…',
  kk: 'NOV-01 жауаптарыңды оқуда…',
  en: 'NOV-01 is reading your answers…',
};

/** Explicit language names for the AI prompt, so the reply matches the UI language. */
const LANGUAGE_NAMES: Record<'ru' | 'kk' | 'en', string> = {
  ru: 'Russian',
  kk: 'Kazakh',
  en: 'English',
};

const RESULT_TITLE: Localized = {
  ru: 'Твой профиль',
  kk: 'Сенің профилің',
  en: 'Your profile',
};
const RESULT_BREAKDOWN: Localized = {
  ru: 'Все шесть направлений',
  kk: 'Барлық алты бағыт',
  en: 'All six dimensions',
};
const RESULT_PROFESSIONS: Localized = {
  ru: 'Профессии, которые тебе подходят',
  kk: 'Саған сәйкес мамандықтар',
  en: 'Professions that fit you',
};
const RESULT_SUBJECTS: Localized = {
  ru: 'Предметы Novex, на которые стоит опереться',
  kk: 'Сүйенуге болатын Novex пәндері',
  en: 'Novex subjects worth leaning on',
};
const PLAN_CTA: Localized = {
  ru: 'Собрать план под цель',
  kk: 'Мақсатқа жоспар құру',
  en: 'Build a plan for your goal',
};
const RETAKE_BTN: Localized = {
  ru: 'Пройти заново',
  kk: 'Қайта тапсыру',
  en: 'Retake the test',
};
const SAVED_NOTE: Localized = {
  ru: 'Результат сохранён в твоём аккаунте — он будет ждать тебя на странице /career.',
  kk: 'Нәтиже аккаунтыңда сақталды — ол сені /career бетінде күтеді.',
  en: 'The result is saved to your account — it will be waiting for you at /career.',
};
const profileLine = (lang: 'ru' | 'kk' | 'en', first: string, second: string): string => {
  if (lang === 'kk') return `Сенің профилің — ${first} пен ${second} үйлесімі.`;
  if (lang === 'en') return `Your profile combines ${first} and ${second}.`;
  return `Твой профиль — сочетание: ${first} и ${second}.`;
};

/* --- dimensions --- */

type CareerDimension =
  | 'analyst'
  | 'engineer'
  | 'humanities'
  | 'communicator'
  | 'creator'
  | 'organizer';

interface DimensionMeta {
  key: CareerDimension;
  label: Localized;
  strength: Localized;
  professions: Localized[];
  subjects: LessonSubject[];
}

const DIMENSIONS: readonly DimensionMeta[] = [
  {
    key: 'analyst',
    label: { ru: 'Аналитик', kk: 'Аналитик', en: 'Analyst' },
    strength: {
      ru: 'Тебе важно понимать, как всё устроено: логика, числа и точные рассуждения — твоя сильная сторона.',
      kk: 'Бәрінің қалай жұмыс істейтінін түсіну сен үшін маңызды: логика, сандар мен дәл пайымдау — сенің мықты жағың.',
      en: 'You need to understand how things work: logic, numbers and precise reasoning are your strength.',
    },
    professions: [
      { ru: 'Аналитик данных', kk: 'Деректер аналитигі', en: 'Data analyst' },
      { ru: 'Математик', kk: 'Математик', en: 'Mathematician' },
      { ru: 'Физик-исследователь', kk: 'Физик-зерттеуші', en: 'Research physicist' },
      { ru: 'Финансовый аналитик', kk: 'Қаржы аналитигі', en: 'Financial analyst' },
      { ru: 'Экономист', kk: 'Экономист', en: 'Economist' },
    ],
    subjects: ['math', 'physics'],
  },
  {
    key: 'engineer',
    label: { ru: 'Инженер', kk: 'Инженер', en: 'Engineer' },
    strength: {
      ru: 'Ты любишь не просто думать, а делать: техника, код и реальные устройства — твоя стихия.',
      kk: 'Сен жай ойлағанды емес, жасағанды ұнатасың: техника, код және нақты құрылғылар — сенің стихияң.',
      en: 'You like not just thinking but making: tech, code and real devices are your element.',
    },
    professions: [
      { ru: 'Программист', kk: 'Бағдарламашы', en: 'Software developer' },
      { ru: 'Инженер-робототехник', kk: 'Инженер-робототехник', en: 'Robotics engineer' },
      { ru: 'Разработчик игр', kk: 'Ойын әзірлеушісі', en: 'Game developer' },
      { ru: 'Инженер-нефтяник', kk: 'Мұнай инженері', en: 'Petroleum engineer' },
      { ru: 'Инженер-строитель', kk: 'Құрылыс инженері', en: 'Civil engineer' },
    ],
    subjects: ['informatics', 'math', 'physics'],
  },
  {
    key: 'humanities',
    label: { ru: 'Гуманитарий', kk: 'Гуманитар', en: 'Humanist' },
    strength: {
      ru: 'Твой инструмент — слово: тексты, языки и истории людей даются тебе легко и вдохновляют.',
      kk: 'Сенің құралың — сөз: мәтіндер, тілдер мен адамдардың тарихы саған оңай беріледі және шабыттандырады.',
      en: 'Your tool is the word: texts, languages and human stories come easily and inspire you.',
    },
    professions: [
      { ru: 'Переводчик', kk: 'Аудармашы', en: 'Translator' },
      { ru: 'Журналист', kk: 'Журналист', en: 'Journalist' },
      { ru: 'Историк', kk: 'Тарихшы', en: 'Historian' },
      { ru: 'Юрист-международник', kk: 'Халықаралық құқық заңгері', en: 'International lawyer' },
      { ru: 'Редактор-филолог', kk: 'Редактор-филолог', en: 'Editor-philologist' },
    ],
    subjects: ['english'],
  },
  {
    key: 'communicator',
    label: { ru: 'Коммуникатор', kk: 'Коммуникатор', en: 'Communicator' },
    strength: {
      ru: 'Ты про людей: объяснять, договариваться и понимать других у тебя получается лучше всех.',
      kk: 'Сен — адамдар туралысың: түсіндіру, келісу және басқаларды түсіну саған ерекше беріледі.',
      en: 'You are about people: explaining, negotiating and understanding others is what you do best.',
    },
    professions: [
      { ru: 'Учитель', kk: 'Мұғалім', en: 'Teacher' },
      { ru: 'Врач', kk: 'Дәрігер', en: 'Doctor' },
      { ru: 'Психолог', kk: 'Психолог', en: 'Psychologist' },
      { ru: 'HR-специалист', kk: 'HR маманы', en: 'HR specialist' },
      { ru: 'Дипломат', kk: 'Дипломат', en: 'Diplomat' },
    ],
    subjects: ['english'],
  },
  {
    key: 'creator',
    label: { ru: 'Творец', kk: 'Шығармашыл', en: 'Creator' },
    strength: {
      ru: 'Тебе важно создавать новое и красивое: идеи, образы и стиль — это то, что тебя заряжает.',
      kk: 'Жаңа әрі әдемі нәрсе жасау сен үшін маңызды: идеялар, бейнелер мен стиль — сені сергітетін нәрсе.',
      en: 'You need to create something new and beautiful: ideas, images and style are what charge you.',
    },
    professions: [
      { ru: 'Дизайнер', kk: 'Дизайнер', en: 'Designer' },
      { ru: 'Архитектор', kk: 'Сәулетші', en: 'Architect' },
      { ru: 'Режиссёр', kk: 'Режиссёр', en: 'Film director' },
      { ru: 'Моушн-дизайнер', kk: 'Моушн-дизайнер', en: 'Motion designer' },
      { ru: 'Художник-иллюстратор', kk: 'Суретші-иллюстратор', en: 'Illustrator' },
    ],
    subjects: ['informatics', 'english'],
  },
  {
    key: 'organizer',
    label: { ru: 'Организатор', kk: 'Ұйымдастырушы', en: 'Organizer' },
    strength: {
      ru: 'Ты умеешь собрать людей и процесс в единое целое: лидерство, планы и результат — это про тебя.',
      kk: 'Адамдар мен үдерісті бір мақсатқа біріктіре білесің: көшбасшылық, жоспарлар мен нәтиже — міне, сен осындайсың.',
      en: 'You can bring people and process together: leadership, plans and results — that is you.',
    },
    professions: [
      { ru: 'Предприниматель', kk: 'Кәсіпкер', en: 'Entrepreneur' },
      { ru: 'Проджект-менеджер', kk: 'Жоба менеджері', en: 'Project manager' },
      { ru: 'Финансист', kk: 'Қаржыгер', en: 'Financier' },
      { ru: 'Маркетолог', kk: 'Маркетолог', en: 'Marketer' },
      { ru: 'Государственный менеджер', kk: 'Мемлекеттік басқарушы', en: 'Public administrator' },
    ],
    subjects: ['math', 'english'],
  },
];

const dimensionMeta = (key: CareerDimension): DimensionMeta =>
  DIMENSIONS.find((d) => d.key === key) ?? DIMENSIONS[0];

/* --- questions: 3 statements per dimension, interleaved so that
      consecutive questions never repeat a dimension --- */

interface CareerQuestion {
  id: string;
  dimension: CareerDimension;
  statement: Localized;
}

const QUESTIONS: readonly CareerQuestion[] = [
  {
    id: 'a1',
    dimension: 'analyst',
    statement: {
      ru: 'Мне нравится решать задачи, где нужно рассуждать логически, а не зубрить.',
      kk: 'Жаттаудан гөйі логикалық ой жүргізуді талап ететін есептерді шешу маған ұнайды.',
      en: 'I enjoy solving problems that require reasoning, not memorizing.',
    },
  },
  {
    id: 'e1',
    dimension: 'engineer',
    statement: {
      ru: 'Мне интересно, как устроены гаджеты, программы и механизмы.',
      kk: 'Гаджеттердің, бағдарламалар мен механизмдердің қалай жұмыс істейтіні маған қызық.',
      en: "I'm curious about how gadgets, programs and mechanisms work.",
    },
  },
  {
    id: 'h1',
    dimension: 'humanities',
    statement: {
      ru: 'Мне легко даются сочинения, и я люблю читать.',
      kk: 'Шығарма жазу маған оңай беріледі, оқуды жақсы көремін.',
      en: 'Writing essays comes easily to me, and I love reading.',
    },
  },
  {
    id: 'c1',
    dimension: 'communicator',
    statement: {
      ru: 'Мне нравится объяснять другим то, что понял сам.',
      kk: 'Өзім түсінгенді басқаларға түсіндірген ұнайды.',
      en: 'I like explaining to others what I have understood myself.',
    },
  },
  {
    id: 't1',
    dimension: 'creator',
    statement: {
      ru: 'Мне нравится рисовать, снимать видео или делать что-то красивое своими руками.',
      kk: 'Сурет салу, видео түсіру немесе қолыммен әдемі зат жасау маған ұнайды.',
      en: 'I like drawing, shooting videos or making beautiful things by hand.',
    },
  },
  {
    id: 'o1',
    dimension: 'organizer',
    statement: {
      ru: 'В групповых проектах я обычно распределяю роли и слежу за сроками.',
      kk: 'Топтық жобаларда әдетте рөлдерді бөлісіп, мерзімін қадағалаймын.',
      en: 'In group projects I usually assign roles and keep track of deadlines.',
    },
  },
  {
    id: 'a2',
    dimension: 'analyst',
    statement: {
      ru: 'Я с удовольствием разбираюсь, как работают законы природы и формулы.',
      kk: 'Табиғат заңдары мен формулалардың қалай жұмыс істейтінін түсінген ұнайды.',
      en: 'I like figuring out how the laws of nature and formulas work.',
    },
  },
  {
    id: 'e2',
    dimension: 'engineer',
    statement: {
      ru: 'Я могу часами собирать, чинить или программировать что-то своё.',
      kk: 'Өзімнің бір нәрсемді сағаттар бойы құрастырып, жөндеп немесе бағдарламалай аламын.',
      en: 'I can spend hours building, fixing or coding something of my own.',
    },
  },
  {
    id: 'h2',
    dimension: 'humanities',
    statement: {
      ru: 'История и культура разных стран кажутся мне захватывающими.',
      kk: 'Әр елдің тарихы мен мәдениеті маған қатты қызық.',
      en: 'The history and culture of different countries fascinate me.',
    },
  },
  {
    id: 'c2',
    dimension: 'communicator',
    statement: {
      ru: 'Я легко знакомлюсь с людьми и чувствую их настроение.',
      kk: 'Адамдармен оңай танысамын және олардың көңіл-күйін сеземін.',
      en: 'I make friends easily and can sense how people feel.',
    },
  },
  {
    id: 't2',
    dimension: 'creator',
    statement: {
      ru: 'В любой работе я сначала думаю, как сделать её необычной и стильной.',
      kk: 'Кез келген жұмыста алдымен оны қалай ерекше әрі стильді етуге болатынын ойлаймын.',
      en: 'In any work I first think about how to make it original and stylish.',
    },
  },
  {
    id: 'o2',
    dimension: 'organizer',
    statement: {
      ru: 'Мне интересно, как компании зарабатывают деньги и как устроен бизнес.',
      kk: 'Компаниялардың қалай ақша табатыны және бизнестің қалай жұмыс істейтіні маған қызық.',
      en: "I'm curious about how companies make money and how business works.",
    },
  },
  {
    id: 'a3',
    dimension: 'analyst',
    statement: {
      ru: 'Цифры, таблицы и графики мне понятнее длинных текстов.',
      kk: 'Сандар, кестелер мен графиктер маған ұзын мәтіндерден түсініктірек.',
      en: 'Numbers, tables and charts make more sense to me than long texts.',
    },
  },
  {
    id: 'e3',
    dimension: 'engineer',
    statement: {
      ru: 'Мне нравится заставлять технику работать быстрее и лучше.',
      kk: 'Техниканың одан да жылдам әрі жақсы жұмыс істеуіне қол жеткізу маған ұнайды.',
      en: 'I like making technology work faster and better.',
    },
  },
  {
    id: 'h3',
    dimension: 'humanities',
    statement: {
      ru: 'Учить языки мне интересно — новые слова запоминаются сами.',
      kk: 'Тіл үйрену маған қызық — жаңа сөздер өзі жадта қалады.',
      en: 'Learning languages is fun for me — new words stick on their own.',
    },
  },
  {
    id: 'c3',
    dimension: 'communicator',
    statement: {
      ru: 'Мне нравится спорить и убеждать, приводя аргументы.',
      kk: 'Дәлел келтіріп пікірталасып, басқаларды сендірген ұнайды.',
      en: 'I enjoy debating and persuading people with arguments.',
    },
  },
  {
    id: 't3',
    dimension: 'creator',
    statement: {
      ru: 'Музыка, кино и дизайн вдохновляют меня больше, чем точные науки.',
      kk: 'Музыка, кино мен дизайн маған нақты ғылымдардан гөйі көбірек шабыт береді.',
      en: 'Music, film and design inspire me more than the exact sciences.',
    },
  },
  {
    id: 'o3',
    dimension: 'organizer',
    statement: {
      ru: 'Я люблю брать ответственность и вести команду за собой.',
      kk: 'Жауапкершілікті алып, командаға жетекшілік еткенді жақсы көремін.',
      en: 'I like taking responsibility and leading a team.',
    },
  },
];

/* 4-point agreement scale, values 1..4 */
const SCALE: readonly { value: number; label: Localized }[] = [
  {
    value: 1,
    label: { ru: 'Совсем не про меня', kk: 'Мүлдем мен туралы емес', en: 'Not me at all' },
  },
  {
    value: 2,
    label: { ru: 'Скорее не про меня', kk: 'Онша мен туралы емес', en: 'Not really me' },
  },
  {
    value: 3,
    label: { ru: 'Скорее про меня', kk: 'Көбіне мен туралы', en: 'Mostly me' },
  },
  {
    value: 4,
    label: { ru: 'Точно про меня', kk: 'Дәл мен туралы', en: 'Definitely me' },
  },
];

/* --- scoring & persistence --- */

type Scores = Record<CareerDimension, number>;

interface CareerResult {
  scores: Scores;
  top: [CareerDimension, CareerDimension];
  finishedAt: string;
  /** Verbatim free-text answers, parallel to OPEN_QUESTIONS (empty string = skipped). */
  openAnswers: string[];
  /** NOV-01's personalized read of the open answers. Null until the (free) AI call resolves or fails. */
  aiAnalysis: string | null;
}

const DRAFT_KEY = 'novex.career.draft';
const RESULT_KEY = 'novex.career.result';
const MAX_SCORE = 3 * 4; // 3 questions × max 4 points
const OPEN_MIN_CHARS = 20;

const emptyScores = (): Scores => ({
  analyst: 0,
  engineer: 0,
  humanities: 0,
  communicator: 0,
  creator: 0,
  organizer: 0,
});

const isDimension = (value: unknown): value is CareerDimension =>
  typeof value === 'string' && DIMENSIONS.some((d) => d.key === value);

/** In-progress draft: scale answers (1..4) plus open-text answers, autosaved as each question is answered. */
interface CareerDraft {
  answers: number[];
  open: string[];
}

const emptyDraft = (): CareerDraft => ({ answers: [], open: [] });

const readDraft = (): CareerDraft => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return emptyDraft();
    const parsed: unknown = JSON.parse(raw);
    // migrate the old draft shape (a bare number[]) written before open
    // questions existed
    if (Array.isArray(parsed)) {
      return {
        answers: parsed.filter((v): v is number => typeof v === 'number' && v >= 1 && v <= 4),
        open: [],
      };
    }
    if (parsed && typeof parsed === 'object') {
      const obj = parsed as Partial<CareerDraft>;
      const answers = Array.isArray(obj.answers)
        ? obj.answers.filter((v): v is number => typeof v === 'number' && v >= 1 && v <= 4)
        : [];
      const open = Array.isArray(obj.open)
        ? obj.open.filter((v): v is string => typeof v === 'string')
        : [];
      return { answers, open };
    }
    return emptyDraft();
  } catch {
    return emptyDraft();
  }
};

const readResult = (): CareerResult | null => {
  try {
    const raw = localStorage.getItem(RESULT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CareerResult>;
    if (
      !parsed.scores ||
      !Array.isArray(parsed.top) ||
      parsed.top.length !== 2 ||
      !isDimension(parsed.top[0]) ||
      !isDimension(parsed.top[1])
    ) {
      return null;
    }
    return {
      scores: parsed.scores as Scores,
      top: parsed.top as [CareerDimension, CareerDimension],
      finishedAt: parsed.finishedAt ?? new Date().toISOString(),
      openAnswers: Array.isArray(parsed.openAnswers)
        ? parsed.openAnswers.filter((v): v is string => typeof v === 'string')
        : [],
      aiAnalysis: typeof parsed.aiAnalysis === 'string' ? parsed.aiAnalysis : null,
    };
  } catch {
    return null;
  }
};

const scoreAnswers = (answers: number[], openAnswers: string[]): CareerResult => {
  const scores = emptyScores();
  QUESTIONS.forEach((q, i) => {
    scores[q.dimension] += answers[i] ?? 0;
  });
  const ranked = [...DIMENSIONS].sort((a, b) => scores[b.key] - scores[a.key]);
  return {
    scores,
    top: [ranked[0].key, ranked[1].key],
    finishedAt: new Date().toISOString(),
    openAnswers,
    aiAnalysis: null,
  };
};

/* --- Supabase persistence (career_results is the source of truth,
      localStorage stays as an offline cache).

      The `scores` jsonb column packs { dimensions, open_answers, ai_analysis }
      so the deterministic dimension scores, the student's free-text answers
      and NOV-01's analysis all travel together without a migration. The
      `top` text[] column keeps its original flat shape. Older rows written
      before this change store the flat dimensions object directly in
      `scores` (no `dimensions` wrapper) — rowToResult tolerates both. --- */

interface CareerResultRow {
  scores: unknown;
  top: unknown;
  updated_at?: string | null;
}

const parseScores = (raw: unknown): Scores | null => {
  if (!raw || typeof raw !== 'object') return null;
  const rawScores = raw as Record<string, unknown>;
  const scores = emptyScores();
  for (const d of DIMENSIONS) {
    const value = rawScores[d.key];
    if (typeof value !== 'number' || value < 0) return null;
    scores[d.key] = value;
  }
  return scores;
};

const rowToResult = (row: CareerResultRow | null): CareerResult | null => {
  if (!row) return null;
  const top = Array.isArray(row.top) ? row.top : [];
  if (top.length < 2 || !isDimension(top[0]) || !isDimension(top[1])) return null;
  if (!row.scores || typeof row.scores !== 'object') return null;
  const rawScores = row.scores as Record<string, unknown>;

  // new shape: { dimensions, open_answers, ai_analysis }
  const nested = parseScores(rawScores.dimensions);
  // old shape: the flat dimensions object stored directly as `scores`
  const flat = nested ? null : parseScores(rawScores);
  const scores = nested ?? flat;
  if (!scores) return null;

  const openAnswers = Array.isArray(rawScores.open_answers)
    ? rawScores.open_answers.filter((v): v is string => typeof v === 'string')
    : [];
  const aiAnalysis = typeof rawScores.ai_analysis === 'string' ? rawScores.ai_analysis : null;

  return {
    scores,
    top: [top[0], top[1]],
    finishedAt:
      typeof row.updated_at === 'string' ? row.updated_at : new Date().toISOString(),
    openAnswers,
    aiAnalysis,
  };
};

const saveResultToDb = (userId: string, result: CareerResult): void => {
  void supabase
    .from('career_results')
    .upsert(
      {
        user_id: userId,
        scores: {
          dimensions: result.scores,
          open_answers: result.openAnswers,
          ai_analysis: result.aiAnalysis,
        },
        top: result.top,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    )
    .then(
      () => undefined,
      () => {
        /* sync failed — the localStorage cache still has the result */
      },
    );
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const TEAL_BTN = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`;
const GHOST_BTN = `${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/60 hover:text-teal`;

type Phase = 'intro' | 'quiz' | 'result';

const CareerTestPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile, loading } = useAuth();
  const reducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>(() => (readResult() ? 'result' : 'intro'));
  const [answers, setAnswers] = useState<number[]>([]);
  const [openAnswers, setOpenAnswers] = useState<string[]>([]);
  const [openDraft, setOpenDraft] = useState('');
  const [draftAvailable, setDraftAvailable] = useState(false);
  const [result, setResult] = useState<CareerResult | null>(() => readResult());
  const questionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  // Mirror of `phase` for effects that must not capture a stale value: the
  // DB-load effect re-fires when the auth context re-emits `user` (token
  // refresh, tab refocus) and must never yank an in-progress quiz to 'result'.
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  // Set once the student discards their result via «Пройти заново», so the
  // DB-load effect can't restore the row they just dismissed.
  const dismissedResultRef = useRef(false);

  // AI layer state — NOV-01's read of the open answers, requested once the
  // deterministic result is available. This call is intentionally FREE for
  // the student — do NOT call spendNovas here.
  const [aiText, setAiText] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const aiRequestedRef = useRef(false);

  const index = answers.length;
  const currentQuestion = index < QUESTIONS.length ? (QUESTIONS[index] ?? null) : null;
  const openIndex = openAnswers.length;
  const currentOpen =
    index >= QUESTIONS.length && openIndex < OPEN_QUESTIONS.length
      ? (OPEN_QUESTIONS[openIndex] ?? null)
      : null;
  const combinedTotal = QUESTIONS.length + OPEN_QUESTIONS.length;
  const combinedIndex = index + openIndex;

  useEffect(() => {
    const draft = readDraft();
    setDraftAvailable(draft.answers.length > 0 || draft.open.length > 0);
  }, []);

  // Load the DB row first — it is the source of truth and survives device
  // changes. If the DB has no row but localStorage does (a result saved
  // before persistence shipped), migrate the cached result up.
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      const { data, error } = await supabase
        .from('career_results')
        .select('scores, top, updated_at')
        .eq('user_id', user.id)
        .maybeSingle();
      if (cancelled) return;
      // Never hijack an active attempt: the student may be mid-quiz (or
      // reading the intro after «Пройти заново») when the auth context
      // re-emits and this effect re-runs.
      if (phaseRef.current === 'quiz' || dismissedResultRef.current) return;
      const fromDb = error ? null : rowToResult((data ?? null) as CareerResultRow | null);
      if (fromDb) {
        setResult(fromDb);
        setPhase('result');
        try {
          localStorage.setItem(RESULT_KEY, JSON.stringify(fromDb));
        } catch {
          /* cache write is best-effort */
        }
        return;
      }
      const cached = readResult();
      if (cached) saveResultToDb(user.id, cached);
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  // move focus to the statement/open question whenever it changes
  useEffect(() => {
    if (phase === 'quiz' && (currentQuestion || currentOpen)) {
      questionHeadingRef.current?.focus();
    }
  }, [phase, currentQuestion, currentOpen]);

  // AI layer: once the deterministic result is ready, ask NOV-01 to read the
  // open answers and add a personalized 4-6 sentence analysis. Guarded by a
  // ref so it fires at most once per completed result; if a cached result
  // already carries an ai_analysis (loaded from the DB or localStorage), it
  // is reused instead of calling the AI again.
  useEffect(() => {
    if (phase !== 'result' || !result || aiRequestedRef.current) return;
    aiRequestedRef.current = true;

    if (result.aiAnalysis) {
      setAiText(result.aiAnalysis);
      setAiLoading(false);
      return;
    }

    const top = dimensionMeta(result.top[0]);
    const second = dimensionMeta(result.top[1]);
    const dimensionLines = DIMENSIONS.map(
      (d) => `${d.key}: ${result.scores[d.key]}/${MAX_SCORE}`,
    ).join(', ');
    const openLines = OPEN_QUESTIONS.map((q, i) => {
      const answerText = result.openAnswers[i]?.trim();
      return `Q: ${loc('en', q.prompt)}\nA: ${answerText || '(skipped)'}`;
    }).join('\n\n');
    const prompt = `You are NOV-01, a friendly career-orientation robot mentor on the Novex platform for Kazakhstani school students.
A student just finished a career-orientation test.
Grade: ${profile?.grade ?? 'unknown'}. Goals: ${profile?.goals?.length ? profile.goals.join(', ') : 'not set'}.
Six-dimension scores (out of ${MAX_SCORE} each): ${dimensionLines}.
Top two dimensions: ${top.key} and ${second.key}.
Open-ended answers, verbatim in the student's own words:
${openLines}
Give a personalized 4-6 sentence career analysis that connects the dimension scores with specifics from the open answers — reference at least one concrete detail the student wrote. Write entirely in ${LANGUAGE_NAMES[language]}. Plain text only — no markdown, no lists, no headings.`;

    setAiLoading(true);
    const run = async () => {
      const { text, error } = await askTutor({
        model: 'gpt-5.6-terra',
        messages: [{ role: 'user', content: prompt }],
      });
      if (error || !text) {
        // hide the card silently — the deterministic result already covers the user
        setAiText(null);
        setAiLoading(false);
        return;
      }
      setAiText(text);
      setAiLoading(false);
      const updated: CareerResult = { ...result, aiAnalysis: text };
      setResult(updated);
      try {
        localStorage.setItem(RESULT_KEY, JSON.stringify(updated));
      } catch {
        /* cache write is best-effort */
      }
      if (user) saveResultToDb(user.id, updated);
    };
    void run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (loading) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const startQuiz = (resume: boolean) => {
    const draft = resume ? readDraft() : emptyDraft();
    setAnswers(draft.answers);
    setOpenAnswers(draft.open);
    setOpenDraft('');
    setPhase('quiz');
  };

  const answer = (value: number) => {
    if (!currentQuestion) return;
    const next = [...answers, value];
    setAnswers(next);
    // autosave the in-progress draft (scale statements always finish before
    // the open questions start, so the open half of the draft is untouched)
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers: next, open: openAnswers }));
    } catch {
      /* storage may be unavailable; the test still works in-memory */
    }
  };

  const submitOpen = (text: string) => {
    if (!currentOpen) return;
    const next = [...openAnswers, text];
    setOpenAnswers(next);
    setOpenDraft('');
    if (next.length < OPEN_QUESTIONS.length) {
      // autosave the in-progress draft
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers, open: next }));
      } catch {
        /* storage may be unavailable; the test still works in-memory */
      }
      return;
    }
    const scored = scoreAnswers(answers, next);
    try {
      localStorage.setItem(RESULT_KEY, JSON.stringify(scored));
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* storage may be unavailable; the result still renders in-memory */
    }
    if (user) saveResultToDb(user.id, scored);
    setResult(scored);
    setDraftAvailable(false);
    setPhase('result');
  };

  const skipOpen = () => submitOpen('');

  const retake = () => {
    dismissedResultRef.current = true;
    try {
      localStorage.removeItem(RESULT_KEY);
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* storage may be unavailable */
    }
    setResult(null);
    setAnswers([]);
    setOpenAnswers([]);
    setOpenDraft('');
    setAiText(null);
    setAiLoading(false);
    aiRequestedRef.current = false;
    setDraftAvailable(false);
    setPhase('intro');
  };

  const topMeta = result ? dimensionMeta(result.top[0]) : null;
  const secondMeta = result ? dimensionMeta(result.top[1]) : null;
  const professions = topMeta && secondMeta
    ? [...topMeta.professions.slice(0, 3), ...secondMeta.professions.slice(0, 3)]
    : [];
  const subjects =
    topMeta && secondMeta
      ? LESSON_SUBJECTS.filter(
          (s) => topMeta.subjects.includes(s.slug) || secondMeta.subjects.includes(s.slug),
        )
      : [];
  const profileName =
    topMeta && secondMeta
      ? `${loc(language, topMeta.label)}-${loc(language, secondMeta.label).toLowerCase()}`
      : '';

  const fadeUp = reducedMotion
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <section id="career-test" aria-labelledby="career-heading">
          {phase === 'intro' && (
            <div className={CARD}>
              <div className="flex items-start gap-4">
                <RobotAvatar robot="nov4" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                    {loc(language, ROBOT_LABEL)}
                  </p>
                  <h1
                    id="career-heading"
                    className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
                  >
                    {loc(language, INTRO_TITLE)}
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-slateink">
                    {loc(language, INTRO_SUB)}
                  </p>
                </div>
              </div>

              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-mist/30 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                {loc(language, INTRO_META)}
              </p>

              {draftAvailable && (
                <p className="mt-4 text-sm text-slateink">{loc(language, INTRO_RESUME)}</p>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => startQuiz(draftAvailable)}
                  className={TEAL_BTN}
                >
                  {loc(language, draftAvailable ? RESUME_BTN : START_BTN)}
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </button>
                {draftAvailable && (
                  <button type="button" onClick={() => startQuiz(false)} className={GHOST_BTN}>
                    {loc(language, RETAKE_BTN)}
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          )}

          {phase === 'quiz' && (currentQuestion || currentOpen) && (
            <div>
              <div className="flex items-center justify-between gap-3">
                <p aria-live="polite" className="text-sm font-semibold text-ink">
                  {currentQuestion
                    ? counterLine(language, index + 1, QUESTIONS.length)
                    : openCounterLine(language, openIndex + 1, OPEN_QUESTIONS.length)}
                </p>
                <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, ROBOT_LABEL)}
                </p>
              </div>
              <div
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist/40"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={combinedTotal}
                aria-valuenow={combinedIndex}
              >
                <div
                  className="h-full rounded-full bg-teal transition-all duration-300"
                  style={{ width: `${Math.round((combinedIndex / combinedTotal) * 100)}%` }}
                />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {currentQuestion ? (
                  <motion.div
                    key={currentQuestion.id}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                    className={`${CARD} mt-5`}
                  >
                    <div className="flex items-start gap-4">
                      <RobotAvatar robot="nov4" className="h-10 w-10 shrink-0" />
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                        {loc(language, dimensionMeta(currentQuestion.dimension).label)}
                      </p>
                    </div>

                    <h2
                      ref={questionHeadingRef}
                      tabIndex={-1}
                      className="mt-4 font-display text-xl font-bold tracking-tight text-ink focus:outline-none sm:text-2xl"
                    >
                      {loc(language, currentQuestion.statement)}
                    </h2>

                    <div
                      className="mt-5 space-y-2.5"
                      role="group"
                      aria-labelledby="career-heading"
                    >
                      {SCALE.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => answer(option.value)}
                          className={`${FOCUS_RING} flex w-full items-center rounded-xl border border-line bg-white px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-teal/60 hover:bg-teal/5`}
                        >
                          {loc(language, option.label)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : currentOpen ? (
                  <motion.div
                    key={currentOpen.id}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                    className={`${CARD} mt-5`}
                  >
                    <div className="flex items-start gap-4">
                      <RobotAvatar robot="nov4" className="h-10 w-10 shrink-0" />
                      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slateink">
                        {openIndex === 0 ? loc(language, OPEN_INTRO) : ''}
                      </p>
                    </div>

                    <h2
                      ref={questionHeadingRef}
                      tabIndex={-1}
                      className="mt-4 font-display text-xl font-bold tracking-tight text-ink focus:outline-none sm:text-2xl"
                    >
                      {loc(language, currentOpen.prompt)}
                    </h2>

                    <textarea
                      value={openDraft}
                      onChange={(e) => setOpenDraft(e.target.value)}
                      placeholder={loc(language, currentOpen.placeholder)}
                      rows={5}
                      className={`${FOCUS_RING} mt-5 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slateink/70`}
                    />
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slateink">
                      <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
                      {loc(language, OPEN_MIN_HINT)}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => submitOpen(openDraft.trim())}
                        disabled={openDraft.trim().length < OPEN_MIN_CHARS}
                        className={`${TEAL_BTN} disabled:cursor-not-allowed disabled:opacity-40`}
                      >
                        {loc(language, OPEN_CONTINUE_BTN)}
                      </button>
                      <button
                        type="button"
                        onClick={skipOpen}
                        className={`${FOCUS_RING} inline-flex items-center gap-1.5 text-sm font-medium text-slateink transition-colors hover:text-teal-dark`}
                      >
                        {loc(language, OPEN_SKIP_BTN)}
                        <SkipForward className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )}

          {phase === 'result' && result && topMeta && secondMeta && (
            <div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className={CARD}
              >
                <div className="flex items-start gap-4">
                  <RobotAvatar robot="nov4" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
                  <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                      {loc(language, ROBOT_LABEL)}
                    </p>
                    <h1
                      id="career-heading"
                      className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
                    >
                      {loc(language, RESULT_TITLE)}: {profileName}
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-slateink">
                      {profileLine(
                        language,
                        loc(language, topMeta.label),
                        loc(language, secondMeta.label),
                      )}{' '}
                      {loc(language, topMeta.strength)} {loc(language, secondMeta.strength)}
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <Briefcase className="h-4 w-4 text-teal" aria-hidden="true" />
                    {loc(language, RESULT_PROFESSIONS)}
                  </h2>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {professions.map((p) => (
                      <li
                        key={loc('en', p)}
                        className="rounded-xl border border-line/60 bg-mist/20 px-4 py-2.5 text-sm font-medium text-ink"
                      >
                        {loc(language, p)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <BookOpen className="h-4 w-4 text-teal" aria-hidden="true" />
                    {loc(language, RESULT_SUBJECTS)}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <Link
                        key={s.slug}
                        to="/learn"
                        className={`${FOCUS_RING} inline-flex items-center rounded-xl border border-teal/40 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal-dark transition-colors hover:bg-teal hover:text-white`}
                      >
                        {loc(language, s.label)}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link to="/plan" className={TEAL_BTN}>
                    {loc(language, PLAN_CTA)}
                    <Target className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <button type="button" onClick={retake} className={GHOST_BTN}>
                    {loc(language, RETAKE_BTN)}
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-4 text-xs text-slateink">{loc(language, SAVED_NOTE)}</p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
                className={`${CARD} mt-5`}
              >
                <h2 className="text-sm font-semibold text-ink">
                  {loc(language, RESULT_BREAKDOWN)}
                </h2>
                <div className="mt-4 space-y-3">
                  {DIMENSIONS.map((d) => {
                    const score = result.scores[d.key];
                    const isTop = result.top.includes(d.key);
                    return (
                      <div key={d.key}>
                        <div className="flex items-center justify-between gap-3">
                          <p
                            className={`text-sm font-medium ${
                              isTop ? 'font-semibold text-teal-dark' : 'text-ink'
                            }`}
                          >
                            {loc(language, d.label)}
                          </p>
                          <p className="font-mono text-xs text-slateink">
                            {score}/{MAX_SCORE}
                          </p>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-mist/40">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isTop ? 'bg-teal' : 'bg-teal/45'
                            }`}
                            style={{ width: `${Math.round((score / MAX_SCORE) * 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* AI layer — NOV-01's read of the open answers, hidden silently on error */}
              {(aiLoading || aiText) && (
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="mt-5 rounded-2xl border border-teal-light bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <RobotAvatar robot="nov4" className="h-10 w-10 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-base font-bold tracking-tight text-ink">
                        {loc(language, AI_HEADING)}
                      </h2>
                      {aiLoading ? (
                        <div className="mt-3 space-y-2" role="status">
                          <span className="sr-only">{loc(language, AI_LOADING)}</span>
                          <div className="h-3 w-full animate-pulse rounded-full bg-mist/40" />
                          <div className="h-3 w-11/12 animate-pulse rounded-full bg-mist/40" />
                          <div className="h-3 w-2/3 animate-pulse rounded-full bg-mist/40" />
                        </div>
                      ) : (
                        <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">
                          {aiText}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default CareerTestPage;
