import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowUpDown,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Flag,
  Info,
  ListChecks,
  Plus,
  School,
  Trash2,
  Users,
  X,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import {
  CLASS_SUBJECT_PERFORMANCE,
  CLASS_TOPIC_PERFORMANCE,
  INITIAL_MODULES,
  SUBJECTS,
  TEACHER_STUDENTS,
  TOPIC_LABELS,
  WEEK_STATS,
  type SubjectSlug,
  type TeacherStudent,
} from '../../constants/teacherMockData.ts';

/* --- content --- */

const PAGE_TITLE: Localized = {
  ru: 'Панель учителя',
  kk: 'Мұғалім панелі',
  en: 'Teacher panel',
};
const PAGE_SUB: Localized = {
  ru: 'Ваши классы, ученики, уроки и материалы',
  kk: 'Сыныптарыңыз, оқушылар, сабақтар мен материалдар',
  en: 'Your classes, students, lessons and materials',
};

const CLASSES_HEADING: Localized = {
  ru: 'Мои классы',
  kk: 'Менің сыныптарым',
  en: 'My classes',
};
const CLASSES_NOTE: Localized = {
  ru: 'Выберите класс, чтобы видеть учеников и публиковать для них уроки.',
  kk: 'Оқушыларды көру және оларға сабақ жариялау үшін сыныпты таңдаңыз.',
  en: 'Select a class to see its students and publish lessons for them.',
};
const CLASSES_LOADING: Localized = {
  ru: 'Загрузка классов…',
  kk: 'Сыныптар жүктелуде…',
  en: 'Loading classes…',
};
const ERR_LOAD_CLASSES: Localized = {
  ru: 'Не удалось загрузить классы. Проверьте соединение и обновите страницу.',
  kk: 'Сыныптарды жүктеу сәтсіз аяқталды. Байланысты тексеріп, бетті жаңартыңыз.',
  en: 'Could not load classes. Check your connection and reload the page.',
};
const ERR_SAVE_CLASS: Localized = {
  ru: 'Не удалось создать класс. Возможно, такой класс уже существует.',
  kk: 'Сыныпты құру сәтсіз аяқталды. Мүмкін, мұндай сынып бұрынан бар.',
  en: 'Could not create the class. A class with this name may already exist.',
};
const ERR_DELETE_CLASS: Localized = {
  ru: 'Не удалось удалить класс. Попробуйте ещё раз.',
  kk: 'Сыныпты жою сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not delete the class. Please try again.',
};
const CLASS_EMPTY_HEADING: Localized = {
  ru: 'У вас пока нет классов',
  kk: 'Әзірге сыныбыңыз жоқ',
  en: 'You have no classes yet',
};
const CLASS_EMPTY_TEXT: Localized = {
  ru: 'Класс — это группа учеников вашей школы. Создайте первый класс, чтобы публиковать уроки и следить за прогрессом учеников.',
  kk: 'Сынып — мектебіңіздегі оқушылар тобы. Сабақ жариялап, оқушылардың үлгерімін бақылау үшін алғашқы сыныпты құрыңыз.',
  en: 'A class is a group of students at your school. Create your first class to publish lessons and track student progress.',
};
const FIELD_SCHOOL: Localized = { ru: 'Школа', kk: 'Мектеп', en: 'School' };
const FIELD_SCHOOL_PLACEHOLDER: Localized = {
  ru: 'Например: Школа-лицей № 17',
  kk: 'Мысалы: № 17 мектеп-лицейі',
  en: 'e.g. School No. 17',
};
const FIELD_CLASS_LABEL: Localized = { ru: 'Класс', kk: 'Сынып', en: 'Class' };
const FIELD_CLASS_LABEL_PLACEHOLDER: Localized = {
  ru: 'Например: 9Б',
  kk: 'Мысалы: 9Б',
  en: 'e.g. 9B',
};
const ERR_SCHOOL: Localized = {
  ru: 'Укажите школу',
  kk: 'Мектепті көрсетіңіз',
  en: 'Enter the school',
};
const ERR_CLASS_LABEL: Localized = {
  ru: 'Укажите название класса (например, 9Б)',
  kk: 'Сынып атын көрсетіңіз (мысалы, 9Б)',
  en: 'Enter the class label (e.g. 9B)',
};
const CREATE_CLASS: Localized = {
  ru: 'Создать класс',
  kk: 'Сынып құру',
  en: 'Create class',
};
const DELETE_CLASS: Localized = {
  ru: 'Удалить класс',
  kk: 'Сыныпты жою',
  en: 'Delete class',
};
const DELETE_CLASS_CONFIRM: Localized = {
  ru: 'Удалить класс? Ученики потеряют привязку к нему.',
  kk: 'Сыныпты жою керек пе? Оқушылардың сыныппен байланысы жойылады.',
  en: 'Delete this class? Students will lose their link to it.',
};
const CONFIRM_DELETE: Localized = {
  ru: 'Да, удалить',
  kk: 'Иә, жою',
  en: 'Yes, delete',
};

const STUDENTS_HEADING: Localized = {
  ru: 'Ученики класса',
  kk: 'Сынып оқушылары',
  en: 'Class students',
};
const ROSTER_LOADING: Localized = {
  ru: 'Загрузка учеников…',
  kk: 'Оқушылар жүктелуде…',
  en: 'Loading students…',
};
const ERR_LOAD_ROSTER: Localized = {
  ru: 'Не удалось загрузить список учеников. Проверьте соединение и обновите страницу.',
  kk: 'Оқушылар тізімін жүктеу сәтсіз аяқталды. Байланысты тексеріп, бетті жаңартыңыз.',
  en: 'Could not load the student roster. Check your connection and reload the page.',
};
const UNNAMED_STUDENT: Localized = { ru: 'Ученик', kk: 'Оқушы', en: 'Student' };
const XP_UNIT: Localized = { ru: 'XP', kk: 'XP', en: 'XP' };

const DEMO_BADGE: Localized = {
  ru: 'Демо-данные класса',
  kk: 'Сынып демо-деректері',
  en: 'Demo class data',
};
const DEMO_NOTE: Localized = {
  ru: 'В классе пока нет учеников, поэтому показан демонстрационный список.',
  kk: 'Сыныпта әзірге оқушы жоқ, сондықтан демонстрациялық тізім көрсетілген.',
  en: 'There are no students in this class yet, so a demo roster is shown.',
};
const DEMO_STATS_BANNER: Localized = {
  ru: 'Это демонстрационные данные — пример того, как будет выглядеть статистика. Реальный прогресс появится, когда ученики вашего класса начнут проходить уроки и модули.',
  kk: 'Бұл демонстрациялық деректер — статистика қалай көрінетінінің мысалы. Сыныбыңыздың оқушылары сабақтар мен модульдерді өте бастағанда нақты үлгерім пайда болады.',
  en: 'This is demo data — an example of what the statistics will look like. Real progress will appear once your class students start completing lessons and modules.',
};

const LESSONS_HEADING: Localized = {
  ru: 'Уроки класса',
  kk: 'Сынып сабақтары',
  en: 'Class lessons',
};
const LESSONS_NOTE: Localized = {
  ru: 'Опубликованные уроки сразу становятся доступны ученикам класса.',
  kk: 'Жарияланған сабақтар сынып оқушыларына бірден қолжетімді болады.',
  en: 'Published lessons become available to the class students right away.',
};
const LESSONS_LOADING: Localized = {
  ru: 'Загрузка уроков…',
  kk: 'Сабақтар жүктелуде…',
  en: 'Loading lessons…',
};
const LESSONS_EMPTY: Localized = {
  ru: 'Уроков пока нет — создайте первый в форме ниже.',
  kk: 'Әзірге сабақ жоқ — алғашқысын төмендегі формада құрыңыз.',
  en: 'No lessons yet — create the first one in the form below.',
};
const ERR_LOAD_LESSONS: Localized = {
  ru: 'Не удалось загрузить уроки. Проверьте соединение и обновите страницу.',
  kk: 'Сабақтарды жүктеу сәтсіз аяқталды. Байланысты тексеріп, бетті жаңартыңыз.',
  en: 'Could not load lessons. Check your connection and reload the page.',
};
const ERR_SAVE_LESSON: Localized = {
  ru: 'Не удалось опубликовать урок. Попробуйте ещё раз.',
  kk: 'Сабақты жариялау сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not publish the lesson. Please try again.',
};
const ERR_DELETE_LESSON: Localized = {
  ru: 'Не удалось удалить урок. Попробуйте ещё раз.',
  kk: 'Сабақты жою сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not delete the lesson. Please try again.',
};
const LESSON_PUBLISHED: Localized = {
  ru: 'Урок опубликован — ученики класса получили уведомление.',
  kk: 'Сабақ жарияланды — сынып оқушылары хабарландыру алды.',
  en: 'Lesson published — the class students have been notified.',
};
const DELETE_LESSON: Localized = {
  ru: 'Удалить урок',
  kk: 'Сабақты жою',
  en: 'Delete lesson',
};

const BUILDER_HEADING: Localized = {
  ru: 'Создать урок',
  kk: 'Сабақ құру',
  en: 'Create lesson',
};
const FIELD_THEORY: Localized = { ru: 'Теория', kk: 'Теория', en: 'Theory' };
const FIELD_THEORY_PLACEHOLDER: Localized = {
  ru: 'Краткий конспект урока: определения, формулы, примеры…',
  kk: 'Сабақтың қысқаша конспектісі: анықтамалар, формулалар, мысалдар…',
  en: 'A short lesson summary: definitions, formulas, examples…',
};
const THEORY_HINT: Localized = {
  ru: 'Абзацы разделяются пустой строкой.',
  kk: 'Әбзацдар бос жолмен бөлінеді.',
  en: 'Separate paragraphs with a blank line.',
};
const ERR_THEORY: Localized = {
  ru: 'Добавьте теорию (минимум 10 символов)',
  kk: 'Теорияны қосыңыз (кемінде 10 таңба)',
  en: 'Add the theory (at least 10 characters)',
};
const QUESTIONS_HEADING: Localized = {
  ru: 'Вопросы',
  kk: 'Сұрақтар',
  en: 'Questions',
};
const QUESTIONS_HINT: Localized = {
  ru: 'От 1 до 5 вопросов, у каждого 2–4 варианта ответа.',
  kk: '1-ден 5 сұраққа дейін, әрқайсысында 2–4 жауап нұсқасы.',
  en: 'From 1 to 5 questions, each with 2–4 answer options.',
};
const QUESTION_PLACEHOLDER: Localized = {
  ru: 'Текст вопроса',
  kk: 'Сұрақ мәтіні',
  en: 'Question text',
};
const CORRECT_ANSWER: Localized = {
  ru: 'Правильный ответ',
  kk: 'Дұрыс жауап',
  en: 'Correct answer',
};
const EXPLANATION_LABEL: Localized = {
  ru: 'Пояснение (необязательно)',
  kk: 'Түсіндірме (міндетті емес)',
  en: 'Explanation (optional)',
};
const EXPLANATION_PLACEHOLDER: Localized = {
  ru: 'Почему это правильный ответ',
  kk: 'Неліктен бұл дұрыс жауап',
  en: 'Why this is the correct answer',
};
const ADD_QUESTION: Localized = {
  ru: 'Добавить вопрос',
  kk: 'Сұрақ қосу',
  en: 'Add question',
};
const REMOVE_QUESTION: Localized = {
  ru: 'Удалить вопрос',
  kk: 'Сұрақты жою',
  en: 'Remove question',
};
const ADD_OPTION: Localized = {
  ru: 'Добавить вариант',
  kk: 'Нұсқа қосу',
  en: 'Add option',
};
const REMOVE_OPTION: Localized = {
  ru: 'Убрать вариант',
  kk: 'Нұсқаны алып тастау',
  en: 'Remove option',
};
const ERR_QUESTIONS: Localized = {
  ru: 'Заполните текст каждого вопроса и все варианты ответов.',
  kk: 'Әр сұрақтың мәтіні мен барлық жауап нұсқаларын толтырыңыз.',
  en: 'Fill in every question text and all answer options.',
};
const PUBLISH_LESSON: Localized = {
  ru: 'Опубликовать урок',
  kk: 'Сабақты жариялау',
  en: 'Publish lesson',
};

const STAT_AVERAGE: Localized = {
  ru: 'Средний балл класса',
  kk: 'Сыныптың орташа баллы',
  en: 'Class average',
};
const STAT_HELP: Localized = {
  ru: 'Нужна помощь',
  kk: 'Көмек керек',
  en: 'Need help',
};
const STAT_LESSONS: Localized = {
  ru: 'Уроков за неделю',
  kk: 'Аптадағы сабақтар',
  en: 'Lessons this week',
};
const STAT_TIME: Localized = {
  ru: 'Среднее время в день',
  kk: 'Күніне орташа уақыт',
  en: 'Average time per day',
};
const MIN_UNIT: Localized = { ru: 'мин', kk: 'мин', en: 'min' };

const CHART_HEADING: Localized = {
  ru: 'Успеваемость по предметам',
  kk: 'Пәндер бойынша үлгерім',
  en: 'Performance by subject',
};
const CHART_SUBJECT_COL: Localized = { ru: 'Предмет', kk: 'Пән', en: 'Subject' };
const CHART_SCORE_COL: Localized = {
  ru: 'Средний балл',
  kk: 'Орташа балл',
  en: 'Average score',
};

const CURATOR_LABEL: Localized = {
  ru: 'NOV-03 · КУРАТОР',
  kk: 'NOV-03 · КУРАТОР',
  en: 'NOV-03 · CURATOR',
};
const CURATOR_HEADING: Localized = {
  ru: 'Требуют внимания',
  kk: 'Назар аудару керек',
  en: 'Needs attention',
};
const CURATOR_ALL_GOOD: Localized = {
  ru: 'Отстающих учеников нет — класс идёт по плану.',
  kk: 'Артта қалған оқушылар жоқ — сынып жоспар бойынша барып жатыр.',
  en: 'No students are falling behind — the class is on track.',
};

const COL_STUDENT: Localized = { ru: 'Ученик', kk: 'Оқушы', en: 'Student' };
const COL_PROGRESS: Localized = { ru: 'Прогресс', kk: 'Үдеріс', en: 'Progress' };
const COL_ACTIVE: Localized = { ru: 'Активность', kk: 'Белсенділік', en: 'Last active' };
const SORT_BY_NAME: Localized = {
  ru: 'Сортировать по имени',
  kk: 'Аты бойынша сұрыптау',
  en: 'Sort by name',
};
const SORT_BY_PROGRESS: Localized = {
  ru: 'Сортировать по прогрессу',
  kk: 'Үдеріс бойынша сұрыптау',
  en: 'Sort by progress',
};
const NEEDS_HELP: Localized = {
  ru: 'нужна помощь',
  kk: 'көмек керек',
  en: 'needs help',
};
const WEAK_TOPICS: Localized = {
  ru: 'Слабые темы',
  kk: 'Әлсіз тақырыптар',
  en: 'Weak topics',
};
const NO_WEAK_TOPICS: Localized = {
  ru: 'Слабых тем нет',
  kk: 'Әлсіз тақырыптар жоқ',
  en: 'No weak topics',
};

const MODULES_HEADING: Localized = {
  ru: 'Материалы',
  kk: 'Материалдар',
  en: 'Materials',
};
const MODULES_NOTE: Localized = {
  ru: 'Модули, которые вы добавляете, сохраняются в базе данных и остаются после перезагрузки страницы.',
  kk: 'Қосқан модульдеріңіз дерекқорда сақталады және бет жаңартылғаннан кейін де қалады.',
  en: 'Modules you add are saved to the database and stay available after a page reload.',
};
const MODULES_LOADING: Localized = {
  ru: 'Загрузка модулей…',
  kk: 'Модульдер жүктелуде…',
  en: 'Loading modules…',
};
const ERR_LOAD_MODULES: Localized = {
  ru: 'Не удалось загрузить модули. Проверьте соединение и обновите страницу.',
  kk: 'Модульдерді жүктеу сәтсіз аяқталды. Байланысты тексеріп, бетті жаңартыңыз.',
  en: 'Could not load modules. Check your connection and reload the page.',
};
const ERR_SAVE_MODULE: Localized = {
  ru: 'Не удалось сохранить модуль. Попробуйте ещё раз.',
  kk: 'Модульді сақтау сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not save the module. Please try again.',
};
const ERR_DELETE_MODULE: Localized = {
  ru: 'Не удалось удалить модуль. Попробуйте ещё раз.',
  kk: 'Модульді жою сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not delete the module. Please try again.',
};
const DEMO_MODULE: Localized = { ru: 'Демо', kk: 'Демо', en: 'Demo' };
const DELETE_MODULE: Localized = {
  ru: 'Удалить модуль',
  kk: 'Модульді жою',
  en: 'Delete module',
};
const BTN_SAVING: Localized = { ru: 'Сохранение…', kk: 'Сақталуда…', en: 'Saving…' };
const ADD_MODULE: Localized = {
  ru: 'Добавить модуль',
  kk: 'Модуль қосу',
  en: 'Add module',
};
const GRADE_PREFIX: Localized = { ru: 'класс', kk: 'сынып', en: 'grade' };

const MODAL_HEADING: Localized = {
  ru: 'Новый модуль',
  kk: 'Жаңа модуль',
  en: 'New module',
};
const FIELD_TITLE: Localized = { ru: 'Название', kk: 'Атауы', en: 'Title' };
const FIELD_TITLE_PLACEHOLDER: Localized = {
  ru: 'Например: Квадратные уравнения',
  kk: 'Мысалы: Квадрат теңдеулер',
  en: 'e.g. Quadratic equations',
};
const FIELD_SUBJECT: Localized = { ru: 'Предмет', kk: 'Пән', en: 'Subject' };
const FIELD_DESCRIPTION: Localized = {
  ru: 'Описание',
  kk: 'Сипаттама',
  en: 'Description',
};
const FIELD_DESCRIPTION_PLACEHOLDER: Localized = {
  ru: 'Что войдёт в модуль и для кого он',
  kk: 'Модульге нә кіреді және кімге арналғаны',
  en: 'What the module covers and who it is for',
};
const CHOOSE: Localized = { ru: 'Выберите…', kk: 'Таңдаңыз…', en: 'Choose…' };
const ERR_TITLE: Localized = {
  ru: 'Введите название (минимум 3 символа)',
  kk: 'Атауын енгізіңіз (кемінде 3 таңба)',
  en: 'Enter a title (at least 3 characters)',
};
const ERR_SUBJECT: Localized = {
  ru: 'Выберите предмет',
  kk: 'Пәнді таңдаңыз',
  en: 'Choose a subject',
};
const ERR_DESCRIPTION: Localized = {
  ru: 'Опишите модуль (минимум 10 символов)',
  kk: 'Модульді сипаттаңыз (кемінде 10 таңба)',
  en: 'Describe the module (at least 10 characters)',
};
const BTN_CREATE: Localized = { ru: 'Создать', kk: 'Құру', en: 'Create' };
const BTN_CANCEL: Localized = { ru: 'Отмена', kk: 'Болдырмау', en: 'Cancel' };
const CLOSE_MODAL: Localized = {
  ru: 'Закрыть окно',
  kk: 'Терезені жабу',
  en: 'Close dialog',
};

/* --- helpers --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-6';

const INPUT =
  'w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-slateink/60 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30';

const overall = (s: TeacherStudent): number =>
  Math.round((s.progress.math + s.progress.physics + s.progress.english) / 3);

const pluralRu = (n: number, one: string, few: string, many: string): string => {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};

const studentsCountLabel = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `${n} оқушы`;
  if (lang === 'en') return `${n} ${n === 1 ? 'student' : 'students'}`;
  return `${n} ${pluralRu(n, 'ученик', 'ученика', 'учеников')}`;
};

const lessonsCountLabel = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `${n} сабақ`;
  if (lang === 'en') return `${n} ${n === 1 ? 'lesson' : 'lessons'}`;
  return `${n} ${pluralRu(n, 'урок', 'урока', 'уроков')}`;
};

const questionsCountLabel = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `${n} сұрақ`;
  if (lang === 'en') return `${n} ${n === 1 ? 'question' : 'questions'}`;
  return `${n} ${pluralRu(n, 'вопрос', 'вопроса', 'вопросов')}`;
};

const questionLabel = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `${n}-сұрақ`;
  if (lang === 'en') return `Question ${n}`;
  return `Вопрос ${n}`;
};

const optionLabel = (lang: Lang, n: number): string => {
  if (lang === 'kk') return `${n}-нұсқа`;
  if (lang === 'en') return `Option ${n}`;
  return `Вариант ${n}`;
};

const formatDate = (lang: Lang, iso: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const locale = lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-GB';
  return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
};

/** Localized NOV-03 sentence: «Эти N учеников отстают по теме X: names». */
const curatorMessage = (
  lang: Lang,
  count: number,
  topic: string,
  names: string,
): string => {
  if (lang === 'kk') {
    return `«${topic}» тақырыбы бойынша ${count} оқушы артта қалып отыр: ${names}. Қайталау жинағын ұсынған жөн.`;
  }
  if (lang === 'en') {
    return `${count} ${count === 1 ? 'student is' : 'students are'} falling behind on “${topic}”: ${names}. Consider assigning a revision set.`;
  }
  return `По теме «${topic}» ${pluralRu(count, 'отстаёт', 'отстают', 'отстают')} ${count} ${pluralRu(count, 'ученик', 'ученика', 'учеников')}: ${names}. Стоит предложить повторение.`;
};

type SortKey = 'name' | 'progress';

interface ModuleForm {
  title: string;
  subject: '' | SubjectSlug;
  description: string;
}

interface ModuleErrors {
  title?: string;
  subject?: string;
  description?: string;
}

const EMPTY_FORM: ModuleForm = { title: '', subject: '', description: '' };

/** Row shape of public.teacher_modules — teacher-authored modules, persisted in the DB. */
interface TeacherModuleRow {
  id: string;
  created_by: string;
  title: string;
  subject: string;
  description: string;
  created_at: string;
}

/** Row shape of public.classes — a teacher's class at a school. */
interface ClassRow {
  id: string;
  teacher_id: string;
  school: string;
  label: string;
  created_at: string;
}

interface ClassForm {
  school: string;
  label: string;
}

interface ClassFormErrors {
  school?: string;
  label?: string;
}

/** One quiz question inside a teacher_lessons.questions jsonb array. */
interface LessonQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

/** Row shape of public.teacher_lessons — lessons a teacher publishes to a class. */
interface TeacherLessonRow {
  id: string;
  class_id: string;
  teacher_id: string;
  title: string;
  subject: string;
  theory: string;
  questions: LessonQuestion[];
  created_at: string;
}

/** Roster entry: a profile row joined with aggregated lesson_progress. */
interface RosterStudent {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  lessonsCompleted: number;
  totalXp: number;
}

interface QuestionDraft {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface LessonForm {
  title: string;
  subject: '' | SubjectSlug;
  theory: string;
  questions: QuestionDraft[];
}

interface LessonErrors {
  title?: string;
  subject?: string;
  theory?: string;
  questions?: string;
}

const MAX_QUESTIONS = 5;
const MAX_OPTIONS = 4;
const MIN_OPTIONS = 2;

const newQuestion = (): QuestionDraft => ({
  q: '',
  options: ['', ''],
  correct: 0,
  explanation: '',
});

const newLessonForm = (): LessonForm => ({
  title: '',
  subject: '',
  theory: '',
  questions: [newQuestion()],
});

/* --- component --- */

const TeacherPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile } = useAuth();
  const reducedMotion = useReducedMotion();

  /* classes */
  // null = still loading; a load failure sets classesError instead
  const [classes, setClasses] = useState<ClassRow[] | null>(null);
  const [classesError, setClassesError] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [classForm, setClassForm] = useState<ClassForm>({ school: '', label: '' });
  const [classFormErrors, setClassFormErrors] = useState<ClassFormErrors>({});
  const [classSaving, setClassSaving] = useState(false);
  const [classSaveError, setClassSaveError] = useState(false);
  const [confirmDeleteClassId, setConfirmDeleteClassId] = useState<string | null>(null);
  const [deletingClassId, setDeletingClassId] = useState<string | null>(null);
  const [classDeleteError, setClassDeleteError] = useState(false);

  /* roster of the selected class; null = loading. Empty array → demo fallback. */
  const [roster, setRoster] = useState<RosterStudent[] | null>(null);
  const [rosterError, setRosterError] = useState(false);

  /* lessons of the selected class; null = loading */
  const [lessons, setLessons] = useState<TeacherLessonRow[] | null>(null);
  const [lessonsError, setLessonsError] = useState(false);
  const [deletingLessonId, setDeletingLessonId] = useState<string | null>(null);
  const [lessonDeleteError, setLessonDeleteError] = useState(false);

  /* lesson builder */
  const [lessonForm, setLessonForm] = useState<LessonForm>(newLessonForm);
  const [lessonErrors, setLessonErrors] = useState<LessonErrors>({});
  const [lessonSaving, setLessonSaving] = useState(false);
  const [lessonSaveError, setLessonSaveError] = useState(false);
  const [lessonPublished, setLessonPublished] = useState(false);

  /* demo roster + modules (pre-existing) */
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // null = still loading; a load failure sets dbModulesError instead
  const [dbModules, setDbModules] = useState<TeacherModuleRow[] | null>(null);
  const [dbModulesError, setDbModulesError] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<ModuleForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<ModuleErrors>({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const selectedClass = useMemo(
    () => (classes ?? []).find((c) => c.id === selectedClassId) ?? null,
    [classes, selectedClassId],
  );

  /* derived class stats (demo data, unchanged) */
  const classAverage = useMemo(
    () =>
      Math.round(
        TEACHER_STUDENTS.reduce((sum, s) => sum + overall(s), 0) / TEACHER_STUDENTS.length,
      ),
    [],
  );
  const helpCount = useMemo(
    () => TEACHER_STUDENTS.filter((s) => s.needsHelp).length,
    [],
  );

  /* NOV-03 insight: topic with the most struggling students, derived from data */
  const curatorInsight = useMemo(() => {
    const byTopic = new Map<string, TeacherStudent[]>();
    for (const student of TEACHER_STUDENTS) {
      for (const slug of student.weakTopics) {
        if (overall(student) >= 55) continue;
        const list = byTopic.get(slug) ?? [];
        list.push(student);
        byTopic.set(slug, list);
      }
    }
    let bestSlug: string | null = null;
    let bestList: TeacherStudent[] = [];
    // tie-break by the demo topic order so the result is stable
    for (const { slug } of CLASS_TOPIC_PERFORMANCE) {
      const list = byTopic.get(slug);
      if (list && list.length > bestList.length) {
        bestSlug = slug;
        bestList = list;
      }
    }
    if (!bestSlug) return null;
    return {
      topic: loc(language, TOPIC_LABELS[bestSlug]),
      names: bestList.map((s) => loc(language, s.name).split(' ')[0]),
    };
  }, [language]);

  const sortedStudents = useMemo(() => {
    const list = [...TEACHER_STUDENTS];
    if (sortKey === 'name') {
      list.sort((a, b) =>
        loc(language, a.name).localeCompare(loc(language, b.name), language === 'kk' ? 'kk' : language),
      );
    } else {
      list.sort((a, b) => overall(a) - overall(b));
    }
    return list;
  }, [sortKey, language]);

  /* load the teacher's classes on mount (RLS: select is open to signed-in users,
     so a student who lands here simply sees an empty list) */
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('classes')
          .select('id, teacher_id, school, label, created_at')
          .eq('teacher_id', user.id)
          .order('created_at', { ascending: true });
        if (cancelled) return;
        if (error) {
          setClassesError(true);
          return;
        }
        const rows = (data ?? []) as ClassRow[];
        setClasses(rows);
        setSelectedClassId((current) => current ?? rows[0]?.id ?? null);
      } catch {
        if (!cancelled) setClassesError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  /* prefill the school field from the teacher's profile once it loads */
  useEffect(() => {
    const school = profile?.school;
    if (school) {
      setClassForm((current) => (current.school ? current : { ...current, school }));
    }
  }, [profile]);

  /* load roster + lessons whenever the selected class changes */
  useEffect(() => {
    if (!user || !selectedClassId) {
      setRoster(null);
      setLessons(null);
      return;
    }
    const classId = selectedClassId;
    let cancelled = false;
    setRoster(null);
    setRosterError(false);
    setLessons(null);
    setLessonsError(false);
    setLessonPublished(false);
    setLessonSaveError(false);
    setLessonDeleteError(false);
    setLessonErrors({});
    setLessonForm(newLessonForm());
    setConfirmDeleteClassId(null);
    setExpandedId(null);

    const loadRoster = async () => {
      try {
        const { data: profileRows, error: profilesError } = await supabase
          .from('profiles')
          .select('id, full_name, avatar_url')
          .eq('class_id', classId);
        if (cancelled) return;
        if (profilesError) {
          setRosterError(true);
          return;
        }
        const students = (profileRows ?? []) as Array<{
          id: string;
          full_name: string | null;
          avatar_url: string | null;
        }>;
        if (students.length === 0) {
          setRoster([]);
          return;
        }
        const ids = students.map((s) => s.id);
        const { data: progressRows, error: progressError } = await supabase
          .from('lesson_progress')
          .select('user_id, lesson_slug, status, xp')
          .in('user_id', ids);
        if (cancelled) return;
        if (progressError) {
          setRosterError(true);
          return;
        }
        const stats = new Map<string, { completed: Set<string>; xp: number }>();
        for (const row of (progressRows ?? []) as Array<{
          user_id: string;
          lesson_slug: string;
          status: string;
          xp: number | null;
        }>) {
          const entry = stats.get(row.user_id) ?? { completed: new Set<string>(), xp: 0 };
          if (row.status === 'completed') entry.completed.add(row.lesson_slug);
          entry.xp += row.xp ?? 0;
          stats.set(row.user_id, entry);
        }
        const rosterRows: RosterStudent[] = students.map((s) => ({
          id: s.id,
          full_name: s.full_name,
          avatar_url: s.avatar_url,
          lessonsCompleted: stats.get(s.id)?.completed.size ?? 0,
          totalXp: stats.get(s.id)?.xp ?? 0,
        }));
        rosterRows.sort((a, b) =>
          (a.full_name ?? '').localeCompare(b.full_name ?? '', language === 'kk' ? 'kk' : language),
        );
        setRoster(rosterRows);
      } catch {
        if (!cancelled) setRosterError(true);
      }
    };

    const loadLessons = async () => {
      try {
        const { data, error } = await supabase
          .from('teacher_lessons')
          .select('id, class_id, teacher_id, title, subject, theory, questions, created_at')
          .eq('class_id', classId)
          .order('created_at', { ascending: false });
        if (cancelled) return;
        if (error) {
          setLessonsError(true);
          return;
        }
        setLessons((data ?? []) as TeacherLessonRow[]);
      } catch {
        if (!cancelled) setLessonsError(true);
      }
    };

    void loadRoster();
    void loadLessons();
    return () => {
      cancelled = true;
    };
    // language is read at sort time only; re-sorting live is not worth refetching
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, selectedClassId]);

  /* load teacher-authored modules from the DB on mount (all signed-in users may read them) */
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('teacher_modules')
          .select('id, created_by, title, subject, description, created_at')
          .order('created_at', { ascending: false });
        if (cancelled) return;
        if (error) {
          setDbModulesError(true);
          return;
        }
        setDbModules((data ?? []) as TeacherModuleRow[]);
      } catch {
        if (!cancelled) setDbModulesError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  /* modal lifecycle: focus first field on open, Escape closes, Tab is trapped */
  useEffect(() => {
    if (!modalOpen) return;
    firstFieldRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusables = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const openModal = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSaveError(false);
    setModalOpen(true);
  };

  const handleModuleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: ModuleErrors = {};
    if (form.title.trim().length < 3) next.title = loc(language, ERR_TITLE);
    if (form.subject === '') next.subject = loc(language, ERR_SUBJECT);
    if (form.description.trim().length < 10) next.description = loc(language, ERR_DESCRIPTION);
    setErrors(next);
    if (Object.keys(next).length > 0 || !user || saving) return;

    // user-authored content is entered in the active language only
    const title = form.title.trim();
    const description = form.description.trim();
    setSaving(true);
    setSaveError(false);
    try {
      const { data, error } = await supabase
        .from('teacher_modules')
        // RLS requires created_by = auth.uid() on insert
        .insert({ created_by: user.id, title, subject: form.subject, description })
        .select('id, created_by, title, subject, description, created_at')
        .single();
      if (error) {
        setSaveError(true);
        return;
      }
      setDbModules((current) => [data as TeacherModuleRow, ...(current ?? [])]);
      setModalOpen(false);
    } catch {
      setSaveError(true);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteModule = async (id: string) => {
    if (deletingId) return;
    setDeletingId(id);
    setDeleteError(false);
    try {
      const { error } = await supabase.from('teacher_modules').delete().eq('id', id);
      if (error) {
        setDeleteError(true);
        return;
      }
      setDbModules((current) => (current ?? []).filter((mod) => mod.id !== id));
    } catch {
      setDeleteError(true);
    } finally {
      setDeletingId(null);
    }
  };

  const handleCreateClass = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: ClassFormErrors = {};
    if (!classForm.school.trim()) next.school = loc(language, ERR_SCHOOL);
    if (!classForm.label.trim()) next.label = loc(language, ERR_CLASS_LABEL);
    setClassFormErrors(next);
    if (Object.keys(next).length > 0 || !user || classSaving) return;

    setClassSaving(true);
    setClassSaveError(false);
    try {
      const { data, error } = await supabase
        .from('classes')
        // RLS requires teacher_id = auth.uid() on insert
        .insert({
          teacher_id: user.id,
          school: classForm.school.trim(),
          label: classForm.label.trim(),
        })
        .select('id, teacher_id, school, label, created_at')
        .single();
      if (error) {
        setClassSaveError(true);
        return;
      }
      const row = data as ClassRow;
      setClasses((current) => [...(current ?? []), row]);
      setSelectedClassId(row.id);
      setClassForm((current) => ({ school: current.school, label: '' }));
    } catch {
      setClassSaveError(true);
    } finally {
      setClassSaving(false);
    }
  };

  const handleDeleteClass = async (id: string) => {
    if (deletingClassId) return;
    setDeletingClassId(id);
    setClassDeleteError(false);
    try {
      const { error } = await supabase.from('classes').delete().eq('id', id);
      if (error) {
        setClassDeleteError(true);
        return;
      }
      setClasses((current) => {
        const remaining = (current ?? []).filter((c) => c.id !== id);
        if (selectedClassId === id) setSelectedClassId(remaining[0]?.id ?? null);
        return remaining;
      });
      setConfirmDeleteClassId(null);
    } catch {
      setClassDeleteError(true);
    } finally {
      setDeletingClassId(null);
    }
  };

  const updateQuestion = (index: number, patch: Partial<QuestionDraft>) => {
    setLessonForm((current) => ({
      ...current,
      questions: current.questions.map((q, i) => (i === index ? { ...q, ...patch } : q)),
    }));
  };

  const handleLessonSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: LessonErrors = {};
    if (lessonForm.title.trim().length < 3) next.title = loc(language, ERR_TITLE);
    if (lessonForm.subject === '') next.subject = loc(language, ERR_SUBJECT);
    if (lessonForm.theory.trim().length < 10) next.theory = loc(language, ERR_THEORY);
    const questionsValid = lessonForm.questions.every(
      (q) =>
        q.q.trim().length > 0 &&
        q.options.length >= MIN_OPTIONS &&
        q.options.every((option) => option.trim().length > 0),
    );
    if (!questionsValid) next.questions = loc(language, ERR_QUESTIONS);
    setLessonErrors(next);
    if (Object.keys(next).length > 0 || !user || !selectedClassId || lessonSaving) return;

    const payload = {
      class_id: selectedClassId,
      teacher_id: user.id,
      title: lessonForm.title.trim(),
      subject: lessonForm.subject,
      theory: lessonForm.theory.trim(),
      questions: lessonForm.questions.map((q) => ({
        q: q.q.trim(),
        options: q.options.map((option) => option.trim()),
        correct: q.correct,
        explanation: q.explanation.trim(),
      })),
    };
    setLessonSaving(true);
    setLessonSaveError(false);
    setLessonPublished(false);
    try {
      const { data, error } = await supabase
        .from('teacher_lessons')
        // RLS requires teacher_id = auth.uid() on insert; the DB trigger
        // notifies the class students, so no manual notification here
        .insert(payload)
        .select('id, class_id, teacher_id, title, subject, theory, questions, created_at')
        .single();
      if (error) {
        setLessonSaveError(true);
        return;
      }
      setLessons((current) => [data as TeacherLessonRow, ...(current ?? [])]);
      setLessonForm(newLessonForm());
      setLessonPublished(true);
    } catch {
      setLessonSaveError(true);
    } finally {
      setLessonSaving(false);
    }
  };

  const handleDeleteLesson = async (id: string) => {
    if (deletingLessonId) return;
    setDeletingLessonId(id);
    setLessonDeleteError(false);
    setLessonPublished(false);
    try {
      const { error } = await supabase.from('teacher_lessons').delete().eq('id', id);
      if (error) {
        setLessonDeleteError(true);
        return;
      }
      setLessons((current) => (current ?? []).filter((lesson) => lesson.id !== id));
    } catch {
      setLessonDeleteError(true);
    } finally {
      setDeletingLessonId(null);
    }
  };

  const subjectLabel = (slug: SubjectSlug): string =>
    loc(language, SUBJECTS.find((s) => s.slug === slug)?.label ?? SUBJECTS[0].label);

  /** DB subjects are stored as slugs, but the column is free text — fall back to the raw value. */
  const dbSubjectLabel = (subject: string): string => {
    const meta = SUBJECTS.find((s) => s.slug === subject);
    return meta ? loc(language, meta.label) : subject;
  };

  const sectionMotion = (index: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, margin: '-80px' },
    transition: { duration: 0.5, delay: Math.min(index * 0.05, 0.2) },
  });

  const renderSortButton = (key: SortKey, label: Localized) => (
    <button
      type="button"
      onClick={() => setSortKey(key)}
      aria-pressed={sortKey === key}
      aria-label={loc(language, label)}
      className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold transition-colors ${
        sortKey === key ? 'bg-teal/10 text-teal-dark' : 'text-slateink hover:text-teal'
      }`}
    >
      {loc(language, label === SORT_BY_NAME ? COL_STUDENT : COL_PROGRESS)}
      <ArrowUpDown className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );

  const renderSubjectBars = (student: TeacherStudent) => (
    <div className="space-y-1.5">
      {SUBJECTS.map((subject) => {
        const pct = student.progress[subject.slug];
        const low = pct < 50;
        return (
          <div key={subject.slug} className="flex items-center gap-2">
            <span className="w-24 shrink-0 truncate text-[11px] text-slateink">
              {loc(language, subject.label)}
            </span>
            <div
              role="img"
              aria-label={`${loc(language, subject.label)}: ${pct}%`}
              className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40"
            >
              <div
                className={`h-full rounded-full ${low ? 'bg-coral' : 'bg-teal'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span
              className={`w-8 shrink-0 text-right text-[11px] font-semibold ${
                low ? 'text-coral' : 'text-teal-dark'
              }`}
            >
              {pct}%
            </span>
          </div>
        );
      })}
    </div>
  );

  const renderDrilldown = (student: TeacherStudent) => (
    <div className="rounded-xl border border-line/40 bg-canvas px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slateink">
        {loc(language, WEAK_TOPICS)}
      </p>
      {student.weakTopics.length === 0 ? (
        <p className="mt-2 text-xs text-slateink">{loc(language, NO_WEAK_TOPICS)}</p>
      ) : (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {student.weakTopics.map((slug) => (
            <li
              key={slug}
              className="rounded-full border border-coral/30 bg-coral/10 px-2.5 py-1 text-[11px] font-semibold text-coral"
            >
              {loc(language, TOPIC_LABELS[slug])}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        {/* header */}
        <header
          aria-labelledby="teacher-heading"
          className="flex flex-wrap items-start gap-4"
        >
          <div className="min-w-0">
            <h1
              id="teacher-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl"
            >
              {loc(language, PAGE_TITLE)}
            </h1>
            <p className="mt-2 text-sm text-slateink md:text-base">{loc(language, PAGE_SUB)}</p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className={`${FOCUS_RING} ml-auto inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            {loc(language, ADD_MODULE)}
          </button>
        </header>

        {/* my classes */}
        <motion.section
          {...sectionMotion(0)}
          aria-labelledby="classes-heading"
          className={`${CARD} mt-8`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
              <School className="h-5 w-5 text-teal-dark" aria-hidden="true" />
            </span>
            <h2
              id="classes-heading"
              className="font-display text-lg font-bold tracking-tight text-ink"
            >
              {loc(language, CLASSES_HEADING)}
            </h2>
          </div>
          <p className="mt-2 text-xs text-slateink">{loc(language, CLASSES_NOTE)}</p>
          {classDeleteError && (
            <p role="alert" className="mt-2 text-xs font-medium text-coral">
              {loc(language, ERR_DELETE_CLASS)}
            </p>
          )}

          {classesError ? (
            <div
              role="alert"
              className="mt-4 flex items-start gap-3 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3"
            >
              <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD_CLASSES)}</p>
            </div>
          ) : classes === null ? (
            <div role="status" className="mt-4 flex items-center justify-center py-10">
              <span
                className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
                aria-hidden="true"
              />
              <span className="sr-only">{loc(language, CLASSES_LOADING)}</span>
            </div>
          ) : classes.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-line bg-canvas px-5 py-8 text-center">
              <School className="mx-auto h-8 w-8 text-teal-dark" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-bold text-ink">
                {loc(language, CLASS_EMPTY_HEADING)}
              </h3>
              <p className="mx-auto mt-1.5 max-w-md text-sm text-slateink">
                {loc(language, CLASS_EMPTY_TEXT)}
              </p>
            </div>
          ) : (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {classes.map((cls) => {
                const selected = cls.id === selectedClassId;
                const confirming = confirmDeleteClassId === cls.id;
                return (
                  <li
                    key={cls.id}
                    className={`rounded-xl border bg-canvas p-4 transition-colors ${
                      selected ? 'border-teal ring-2 ring-teal/30' : 'border-line/50'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedClassId(cls.id)}
                        aria-pressed={selected}
                        className={`${FOCUS_RING} min-w-0 flex-1 rounded-lg text-left`}
                      >
                        <span className="block truncate text-xs text-slateink">{cls.school}</span>
                        <span className="mt-0.5 block font-display text-2xl font-extrabold tracking-tight text-ink">
                          {cls.label}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmDeleteClassId((current) => (current === cls.id ? null : cls.id))
                        }
                        aria-label={loc(language, DELETE_CLASS)}
                        className={`${FOCUS_RING} shrink-0 rounded-lg p-1.5 text-slateink transition-colors hover:text-coral`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    {confirming && (
                      <div className="mt-3 rounded-xl border border-coral/40 bg-coral/10 px-3 py-2.5">
                        <p className="text-xs font-medium text-ink">
                          {loc(language, DELETE_CLASS_CONFIRM)}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => void handleDeleteClass(cls.id)}
                            disabled={deletingClassId === cls.id}
                            className={`${FOCUS_RING} rounded-lg bg-coral px-3 py-1.5 text-xs font-semibold text-white transition-opacity disabled:opacity-60`}
                          >
                            {loc(language, CONFIRM_DELETE)}
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteClassId(null)}
                            className={`${FOCUS_RING} rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                          >
                            {loc(language, BTN_CANCEL)}
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {/* create-class form */}
          <form onSubmit={handleCreateClass} noValidate className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="class-school" className="block text-sm font-semibold text-ink">
                  {loc(language, FIELD_SCHOOL)}
                </label>
                <input
                  id="class-school"
                  type="text"
                  value={classForm.school}
                  onChange={(e) =>
                    setClassForm((f) => ({ ...f, school: e.target.value }))
                  }
                  placeholder={loc(language, FIELD_SCHOOL_PLACEHOLDER)}
                  aria-invalid={Boolean(classFormErrors.school)}
                  aria-describedby={classFormErrors.school ? 'class-school-error' : undefined}
                  className={`${INPUT} mt-1.5`}
                />
                {classFormErrors.school && (
                  <p id="class-school-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {classFormErrors.school}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="class-label" className="block text-sm font-semibold text-ink">
                  {loc(language, FIELD_CLASS_LABEL)}
                </label>
                <input
                  id="class-label"
                  type="text"
                  value={classForm.label}
                  onChange={(e) =>
                    setClassForm((f) => ({ ...f, label: e.target.value }))
                  }
                  placeholder={loc(language, FIELD_CLASS_LABEL_PLACEHOLDER)}
                  aria-invalid={Boolean(classFormErrors.label)}
                  aria-describedby={classFormErrors.label ? 'class-label-error' : undefined}
                  className={`${INPUT} mt-1.5`}
                />
                {classFormErrors.label && (
                  <p id="class-label-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {classFormErrors.label}
                  </p>
                )}
              </div>
            </div>
            {classSaveError && (
              <p role="alert" className="mt-3 text-xs font-medium text-coral">
                {loc(language, ERR_SAVE_CLASS)}
              </p>
            )}
            <button
              type="submit"
              disabled={classSaving}
              className={`${FOCUS_RING} mt-4 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:opacity-60`}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              {loc(language, classSaving ? BTN_SAVING : CREATE_CLASS)}
            </button>
          </form>
        </motion.section>

        {/* selected-class panel */}
        {selectedClass && (
          <>
            {/* class students */}
            <motion.section
              {...sectionMotion(1)}
              aria-labelledby="roster-heading"
              className={`${CARD} mt-6`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                  <Users className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                </span>
                <h2
                  id="roster-heading"
                  className="font-display text-lg font-bold tracking-tight text-ink"
                >
                  {loc(language, STUDENTS_HEADING)}
                </h2>
                <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal-dark">
                  {selectedClass.label}
                </span>
                {roster !== null && roster.length > 0 && (
                  <span className="rounded-full border border-line/60 bg-canvas px-3 py-1 text-[11px] font-semibold text-slateink">
                    {studentsCountLabel(language, roster.length)}
                  </span>
                )}
                {roster !== null && roster.length === 0 && !rosterError && (
                  <>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line/60 bg-canvas px-3 py-1 text-[11px] font-semibold text-slateink">
                      <Info className="h-3 w-3" aria-hidden="true" />
                      {loc(language, DEMO_BADGE)}
                    </span>
                    <div className="ml-auto flex items-center gap-1">
                      {renderSortButton('name', SORT_BY_NAME)}
                      {renderSortButton('progress', SORT_BY_PROGRESS)}
                    </div>
                  </>
                )}
              </div>

              {rosterError ? (
                <div
                  role="alert"
                  className="mt-4 flex items-start gap-3 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
                  <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD_ROSTER)}</p>
                </div>
              ) : roster === null ? (
                <div role="status" className="mt-4 flex items-center justify-center py-10">
                  <span
                    className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{loc(language, ROSTER_LOADING)}</span>
                </div>
              ) : roster.length > 0 ? (
                <ul className="mt-4 divide-y divide-line/30 overflow-hidden rounded-xl border border-line/50">
                  {roster.map((student) => (
                    <li key={student.id} className="flex items-center gap-3 bg-white px-4 py-3">
                      {student.avatar_url ? (
                        <img
                          src={student.avatar_url}
                          alt=""
                          className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-line/60"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist/40 font-display text-sm font-bold text-teal-dark"
                        >
                          {(student.full_name ?? '?').trim().charAt(0).toUpperCase() || '?'}
                        </span>
                      )}
                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink">
                        {student.full_name ?? loc(language, UNNAMED_STUDENT)}
                      </span>
                      <span className="shrink-0 text-xs text-slateink">
                        {lessonsCountLabel(language, student.lessonsCompleted)}
                        {' · '}
                        <span className="font-semibold text-teal-dark">
                          {student.totalXp} {loc(language, XP_UNIT)}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="mt-2 text-xs text-slateink">{loc(language, DEMO_NOTE)}</p>

                  {/* desktop table */}
                  <div className="mt-4 hidden overflow-hidden rounded-xl border border-line/50 sm:block">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-line/40 bg-canvas">
                          <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                            {loc(language, COL_STUDENT)}
                          </th>
                          <th className="w-[38%] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                            {loc(language, COL_PROGRESS)}
                          </th>
                          <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slateink">
                            {loc(language, COL_ACTIVE)}
                          </th>
                          <th className="w-12 px-4 py-2.5">
                            <span className="sr-only">{loc(language, WEAK_TOPICS)}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedStudents.map((student) => {
                          const expanded = expandedId === student.id;
                          return (
                            <React.Fragment key={student.id}>
                              <tr
                                onClick={() => setExpandedId(expanded ? null : student.id)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setExpandedId(expanded ? null : student.id);
                                  }
                                }}
                                tabIndex={0}
                                aria-expanded={expanded}
                                className={`${FOCUS_RING} cursor-pointer border-b border-line/30 transition-colors last:border-b-0 hover:bg-mist/15 ${
                                  expanded ? 'bg-mist/15' : ''
                                }`}
                              >
                                <td className="px-4 py-3">
                                  <span className="flex flex-wrap items-center gap-2">
                                    <span className="text-sm font-semibold text-ink">
                                      {loc(language, student.name)}
                                    </span>
                                    {student.needsHelp && (
                                      <span className="inline-flex items-center gap-1 rounded-full border border-coral/30 bg-coral/10 px-2 py-0.5 text-[10px] font-semibold text-coral">
                                        <Flag className="h-2.5 w-2.5" aria-hidden="true" />
                                        {loc(language, NEEDS_HELP)}
                                      </span>
                                    )}
                                  </span>
                                </td>
                                <td className="px-4 py-3">{renderSubjectBars(student)}</td>
                                <td className="px-4 py-3 text-xs text-slateink">
                                  {loc(language, student.lastActive)}
                                </td>
                                <td className="px-4 py-3 text-right">
                                  <ChevronDown
                                    className={`ml-auto h-4 w-4 text-slateink transition-transform ${
                                      expanded ? 'rotate-180' : ''
                                    }`}
                                    aria-hidden="true"
                                  />
                                </td>
                              </tr>
                              {expanded && (
                                <tr className="border-b border-line/30 last:border-b-0">
                                  <td colSpan={4} className="px-4 py-3">
                                    {renderDrilldown(student)}
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* mobile stacked cards */}
                  <ul className="mt-4 space-y-3 sm:hidden">
                    {sortedStudents.map((student) => {
                      const expanded = expandedId === student.id;
                      return (
                        <li
                          key={student.id}
                          className="rounded-xl border border-line/50 bg-white p-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
                        >
                          <button
                            type="button"
                            onClick={() => setExpandedId(expanded ? null : student.id)}
                            aria-expanded={expanded}
                            className={`${FOCUS_RING} flex w-full items-center gap-2 rounded-lg text-left`}
                          >
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold text-ink">
                                  {loc(language, student.name)}
                                </span>
                                {student.needsHelp && (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-coral/30 bg-coral/10 px-2 py-0.5 text-[10px] font-semibold text-coral">
                                    <Flag className="h-2.5 w-2.5" aria-hidden="true" />
                                    {loc(language, NEEDS_HELP)}
                                  </span>
                                )}
                              </span>
                              <span className="mt-0.5 block text-[11px] text-slateink">
                                {loc(language, student.lastActive)} · {overall(student)}%
                              </span>
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 text-slateink transition-transform ${
                                expanded ? 'rotate-180' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                          <div className="mt-3">{renderSubjectBars(student)}</div>
                          {expanded && <div className="mt-3">{renderDrilldown(student)}</div>}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </motion.section>

            {/* class lessons */}
            <motion.section
              {...sectionMotion(2)}
              aria-labelledby="lessons-heading"
              className={`${CARD} mt-6`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                  <ListChecks className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                </span>
                <h2
                  id="lessons-heading"
                  className="font-display text-lg font-bold tracking-tight text-ink"
                >
                  {loc(language, LESSONS_HEADING)}
                </h2>
                <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal-dark">
                  {selectedClass.label}
                </span>
              </div>
              <p className="mt-2 text-xs text-slateink">{loc(language, LESSONS_NOTE)}</p>
              {lessonDeleteError && (
                <p role="alert" className="mt-2 text-xs font-medium text-coral">
                  {loc(language, ERR_DELETE_LESSON)}
                </p>
              )}

              {lessonsError ? (
                <div
                  role="alert"
                  className="mt-4 flex items-start gap-3 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
                  <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD_LESSONS)}</p>
                </div>
              ) : lessons === null ? (
                <div role="status" className="mt-4 flex items-center justify-center py-10">
                  <span
                    className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{loc(language, LESSONS_LOADING)}</span>
                </div>
              ) : lessons.length === 0 ? (
                <p className="mt-4 rounded-xl border border-dashed border-line bg-canvas px-4 py-5 text-center text-sm text-slateink">
                  {loc(language, LESSONS_EMPTY)}
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className="flex flex-wrap items-center gap-3 rounded-xl border border-line/50 bg-canvas px-4 py-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-semibold text-teal-dark">
                            {dbSubjectLabel(lesson.subject)}
                          </span>
                          <span className="text-[11px] text-slateink">
                            {questionsCountLabel(language, lesson.questions.length)}
                          </span>
                          <span className="text-[11px] text-slateink">
                            {formatDate(language, lesson.created_at)}
                          </span>
                        </div>
                        <h3 className="mt-1.5 truncate font-display text-sm font-bold text-ink">
                          {lesson.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => void handleDeleteLesson(lesson.id)}
                        disabled={deletingLessonId === lesson.id}
                        aria-label={loc(language, DELETE_LESSON)}
                        className={`${FOCUS_RING} shrink-0 rounded-lg p-1.5 text-slateink transition-colors hover:text-coral disabled:opacity-50`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* lesson builder */}
              <form
                onSubmit={handleLessonSubmit}
                noValidate
                className="mt-5 rounded-xl border border-line/50 bg-canvas p-4 sm:p-5"
              >
                <h3 className="font-display text-base font-bold tracking-tight text-ink">
                  {loc(language, BUILDER_HEADING)}
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lesson-title" className="block text-sm font-semibold text-ink">
                      {loc(language, FIELD_TITLE)}
                    </label>
                    <input
                      id="lesson-title"
                      type="text"
                      value={lessonForm.title}
                      onChange={(e) =>
                        setLessonForm((f) => ({ ...f, title: e.target.value }))
                      }
                      placeholder={loc(language, FIELD_TITLE_PLACEHOLDER)}
                      aria-invalid={Boolean(lessonErrors.title)}
                      aria-describedby={lessonErrors.title ? 'lesson-title-error' : undefined}
                      className={`${INPUT} mt-1.5`}
                    />
                    {lessonErrors.title && (
                      <p id="lesson-title-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                        {lessonErrors.title}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lesson-subject" className="block text-sm font-semibold text-ink">
                      {loc(language, FIELD_SUBJECT)}
                    </label>
                    <select
                      id="lesson-subject"
                      value={lessonForm.subject}
                      onChange={(e) =>
                        setLessonForm((f) => ({
                          ...f,
                          subject: e.target.value as LessonForm['subject'],
                        }))
                      }
                      aria-invalid={Boolean(lessonErrors.subject)}
                      aria-describedby={lessonErrors.subject ? 'lesson-subject-error' : undefined}
                      className={`${INPUT} mt-1.5`}
                    >
                      <option value="">{loc(language, CHOOSE)}</option>
                      {SUBJECTS.map((subject) => (
                        <option key={subject.slug} value={subject.slug}>
                          {loc(language, subject.label)}
                        </option>
                      ))}
                    </select>
                    {lessonErrors.subject && (
                      <p id="lesson-subject-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                        {lessonErrors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="lesson-theory" className="block text-sm font-semibold text-ink">
                    {loc(language, FIELD_THEORY)}
                  </label>
                  <textarea
                    id="lesson-theory"
                    rows={5}
                    value={lessonForm.theory}
                    onChange={(e) =>
                      setLessonForm((f) => ({ ...f, theory: e.target.value }))
                    }
                    placeholder={loc(language, FIELD_THEORY_PLACEHOLDER)}
                    aria-invalid={Boolean(lessonErrors.theory)}
                    aria-describedby={
                      lessonErrors.theory ? 'lesson-theory-error' : 'lesson-theory-hint'
                    }
                    className={`${INPUT} mt-1.5 resize-y`}
                  />
                  <p id="lesson-theory-hint" className="mt-1.5 text-[11px] text-slateink">
                    {loc(language, THEORY_HINT)}
                  </p>
                  {lessonErrors.theory && (
                    <p id="lesson-theory-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                      {lessonErrors.theory}
                    </p>
                  )}
                </div>

                <fieldset className="mt-5">
                  <legend className="text-sm font-semibold text-ink">
                    {loc(language, QUESTIONS_HEADING)}
                  </legend>
                  <p className="mt-1 text-[11px] text-slateink">{loc(language, QUESTIONS_HINT)}</p>

                  <div className="mt-3 space-y-4">
                    {lessonForm.questions.map((question, qi) => (
                      <div
                        key={qi}
                        className="rounded-xl border border-line/50 bg-white p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slateink">
                            {questionLabel(language, qi + 1)}
                          </p>
                          {lessonForm.questions.length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                setLessonForm((f) => ({
                                  ...f,
                                  questions: f.questions.filter((_, i) => i !== qi),
                                }))
                              }
                              aria-label={loc(language, REMOVE_QUESTION)}
                              className={`${FOCUS_RING} rounded-lg p-1.5 text-slateink transition-colors hover:text-coral`}
                            >
                              <X className="h-4 w-4" aria-hidden="true" />
                            </button>
                          )}
                        </div>

                        <label htmlFor={`question-${qi}-text`} className="sr-only">
                          {questionLabel(language, qi + 1)}
                        </label>
                        <input
                          id={`question-${qi}-text`}
                          type="text"
                          value={question.q}
                          onChange={(e) => updateQuestion(qi, { q: e.target.value })}
                          placeholder={loc(language, QUESTION_PLACEHOLDER)}
                          className={`${INPUT} mt-2`}
                        />

                        <div className="mt-3 space-y-2">
                          {question.options.map((option, oi) => (
                            <div key={oi} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`question-${qi}-correct`}
                                checked={question.correct === oi}
                                onChange={() => updateQuestion(qi, { correct: oi })}
                                aria-label={`${loc(language, CORRECT_ANSWER)}: ${optionLabel(language, oi + 1)}`}
                                className="h-4 w-4 shrink-0 accent-teal"
                              />
                              <label htmlFor={`question-${qi}-option-${oi}`} className="sr-only">
                                {optionLabel(language, oi + 1)}
                              </label>
                              <input
                                id={`question-${qi}-option-${oi}`}
                                type="text"
                                value={option}
                                onChange={(e) =>
                                  updateQuestion(qi, {
                                    options: question.options.map((o, i) =>
                                      i === oi ? e.target.value : o,
                                    ),
                                  })
                                }
                                placeholder={optionLabel(language, oi + 1)}
                                className={INPUT}
                              />
                              {question.options.length > MIN_OPTIONS && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuestion(qi, {
                                      options: question.options.filter((_, i) => i !== oi),
                                      correct:
                                        question.correct === oi
                                          ? 0
                                          : question.correct > oi
                                            ? question.correct - 1
                                            : question.correct,
                                    })
                                  }
                                  aria-label={loc(language, REMOVE_OPTION)}
                                  className={`${FOCUS_RING} shrink-0 rounded-lg p-1.5 text-slateink transition-colors hover:text-coral`}
                                >
                                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span className="text-[11px] text-slateink">
                            {loc(language, CORRECT_ANSWER)}: {optionLabel(language, question.correct + 1)}
                          </span>
                          {question.options.length < MAX_OPTIONS && (
                            <button
                              type="button"
                              onClick={() =>
                                updateQuestion(qi, { options: [...question.options, ''] })
                              }
                              className={`${FOCUS_RING} inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                            >
                              <Plus className="h-3 w-3" aria-hidden="true" />
                              {loc(language, ADD_OPTION)}
                            </button>
                          )}
                        </div>

                        <label
                          htmlFor={`question-${qi}-explanation`}
                          className="mt-3 block text-[11px] font-semibold text-slateink"
                        >
                          {loc(language, EXPLANATION_LABEL)}
                        </label>
                        <input
                          id={`question-${qi}-explanation`}
                          type="text"
                          value={question.explanation}
                          onChange={(e) => updateQuestion(qi, { explanation: e.target.value })}
                          placeholder={loc(language, EXPLANATION_PLACEHOLDER)}
                          className={`${INPUT} mt-1.5`}
                        />
                      </div>
                    ))}
                  </div>

                  {lessonForm.questions.length < MAX_QUESTIONS && (
                    <button
                      type="button"
                      onClick={() =>
                        setLessonForm((f) => ({ ...f, questions: [...f.questions, newQuestion()] }))
                      }
                      className={`${FOCUS_RING} mt-3 inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      {loc(language, ADD_QUESTION)}
                    </button>
                  )}
                  {lessonErrors.questions && (
                    <p role="alert" className="mt-2 text-xs font-medium text-coral">
                      {lessonErrors.questions}
                    </p>
                  )}
                </fieldset>

                {lessonSaveError && (
                  <p role="alert" className="mt-4 text-xs font-medium text-coral">
                    {loc(language, ERR_SAVE_LESSON)}
                  </p>
                )}
                {lessonPublished && (
                  <p
                    role="status"
                    className="mt-4 flex items-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-4 py-3 text-sm font-medium text-teal-dark"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {loc(language, LESSON_PUBLISHED)}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={lessonSaving}
                  className={`${FOCUS_RING} mt-4 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:opacity-60`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  {loc(language, lessonSaving ? BTN_SAVING : PUBLISH_LESSON)}
                </button>
              </form>
            </motion.section>
          </>
        )}

        {/* demo-data notice: the stats, chart and curator card below are invented */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-line bg-mist/30 px-4 py-3">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-slateink" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-slateink">
            {loc(language, DEMO_STATS_BANNER)}
          </p>
        </div>

        {/* stat cards */}
        <motion.section
          {...sectionMotion(3)}
          aria-label={loc(language, PAGE_TITLE)}
          className="mt-4"
        >
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                <School className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-teal-dark">
                  {classAverage}%
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-slateink">{loc(language, STAT_AVERAGE)}</p>
                  <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                    {loc(language, DEMO_MODULE)}
                  </span>
                </div>
              </div>
            </li>
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral/10">
                <Flag className="h-5 w-5 text-coral" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-coral">{helpCount}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-slateink">{loc(language, STAT_HELP)}</p>
                  <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                    {loc(language, DEMO_MODULE)}
                  </span>
                </div>
              </div>
            </li>
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                <BookOpen className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-teal-dark">
                  {WEEK_STATS.lessonsCompleted}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-slateink">{loc(language, STAT_LESSONS)}</p>
                  <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                    {loc(language, DEMO_MODULE)}
                  </span>
                </div>
              </div>
            </li>
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                <Clock className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-teal-dark">
                  {WEEK_STATS.avgMinutes} {loc(language, MIN_UNIT)}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-slateink">{loc(language, STAT_TIME)}</p>
                  <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                    {loc(language, DEMO_MODULE)}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* chart + curator */}
        <motion.div {...sectionMotion(4)} className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <section aria-labelledby="chart-heading" className={CARD}>
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="chart-heading"
                className="font-display text-lg font-bold tracking-tight text-ink"
              >
                {loc(language, CHART_HEADING)}
              </h2>
              <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                {loc(language, DEMO_MODULE)}
              </span>
            </div>
            {/* accessible text alternative to the bar chart */}
            <table className="sr-only">
              <caption>{loc(language, CHART_HEADING)}</caption>
              <thead>
                <tr>
                  <th>{loc(language, CHART_SUBJECT_COL)}</th>
                  <th>{loc(language, CHART_SCORE_COL)}</th>
                </tr>
              </thead>
              <tbody>
                {CLASS_SUBJECT_PERFORMANCE.map((subject) => (
                  <tr key={subject.slug}>
                    <td>{loc(language, subject.label)}</td>
                    <td>{subject.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div aria-hidden="true" className="mt-4 space-y-2.5">
              {CLASS_SUBJECT_PERFORMANCE.map((subject) => {
                const weak = subject.pct < 60;
                return (
                  <div key={subject.slug} className="flex items-center gap-3">
                    <p className="w-32 shrink-0 truncate text-xs font-medium text-ink sm:w-40">
                      {loc(language, subject.label)}
                    </p>
                    <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
                      <div
                        className={`h-full rounded-full ${weak ? 'bg-coral' : 'bg-teal'}`}
                        style={{ width: `${subject.pct}%` }}
                      />
                    </div>
                    <p
                      className={`w-9 shrink-0 text-right text-xs font-semibold ${
                        weak ? 'text-coral' : 'text-teal-dark'
                      }`}
                    >
                      {subject.pct}%
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* NOV-03 curator insight */}
          <section aria-labelledby="curator-heading" className={CARD}>
            <div className="flex items-start gap-4">
              <RobotAvatar robot="nov3" className="h-14 w-14 shrink-0" />
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-coral">
                  {loc(language, CURATOR_LABEL)}
                </p>
                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  <h2
                    id="curator-heading"
                    className="font-display text-lg font-bold tracking-tight text-ink"
                  >
                    {loc(language, CURATOR_HEADING)}
                  </h2>
                  <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                    {loc(language, DEMO_MODULE)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3">
              {curatorInsight ? (
                <p className="text-sm leading-relaxed text-ink">
                  {curatorMessage(
                    language,
                    curatorInsight.names.length,
                    curatorInsight.topic,
                    curatorInsight.names.join(', '),
                  )}
                </p>
              ) : (
                <p className="text-sm leading-relaxed text-ink">
                  {loc(language, CURATOR_ALL_GOOD)}
                </p>
              )}
            </div>
          </section>
        </motion.div>

        {/* materials (teacher_modules) */}
        <motion.section
          {...sectionMotion(5)}
          aria-labelledby="modules-heading"
          className={`${CARD} mt-6`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
              <BookOpen className="h-5 w-5 text-teal-dark" aria-hidden="true" />
            </span>
            <h2
              id="modules-heading"
              className="font-display text-lg font-bold tracking-tight text-ink"
            >
              {loc(language, MODULES_HEADING)}
            </h2>
            <button
              type="button"
              onClick={openModal}
              className={`${FOCUS_RING} ml-auto inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, ADD_MODULE)}
            </button>
          </div>
          <p className="mt-2 text-xs text-slateink">{loc(language, MODULES_NOTE)}</p>
          {deleteError && (
            <p role="alert" className="mt-2 text-xs font-medium text-coral">
              {loc(language, ERR_DELETE_MODULE)}
            </p>
          )}
          {dbModulesError ? (
            <div
              role="alert"
              className="mt-4 flex items-start gap-3 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3"
            >
              <AlertTriangle className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{loc(language, ERR_LOAD_MODULES)}</p>
            </div>
          ) : dbModules === null ? (
            <div role="status" className="mt-4 flex items-center justify-center py-10">
              <span
                className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-teal"
                aria-hidden="true"
              />
              <span className="sr-only">{loc(language, MODULES_LOADING)}</span>
            </div>
          ) : (
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {dbModules.map((mod) => (
                <li
                  key={mod.id}
                  className="rounded-xl border border-line/50 bg-canvas p-4 transition-colors hover:border-teal/40"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-semibold text-teal-dark">
                      {dbSubjectLabel(mod.subject)}
                    </span>
                    {user && mod.created_by === user.id && (
                      <button
                        type="button"
                        onClick={() => void handleDeleteModule(mod.id)}
                        disabled={deletingId === mod.id}
                        aria-label={loc(language, DELETE_MODULE)}
                        className={`${FOCUS_RING} ml-auto rounded-lg p-1.5 text-slateink transition-colors hover:text-coral disabled:opacity-50`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <h3 className="mt-2.5 font-display text-sm font-bold text-ink">{mod.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slateink">{mod.description}</p>
                </li>
              ))}
              {INITIAL_MODULES.map((mod) => (
                <li
                  key={mod.id}
                  className="rounded-xl border border-line/50 bg-canvas p-4 transition-colors hover:border-teal/40"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-semibold text-teal-dark">
                      {subjectLabel(mod.subject)}
                    </span>
                    <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                      {mod.grade} {loc(language, GRADE_PREFIX)}
                    </span>
                    <span className="rounded-full border border-line/60 px-2.5 py-0.5 text-[10px] font-semibold text-slateink">
                      {loc(language, DEMO_MODULE)}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-sm font-bold text-ink">
                    {loc(language, mod.title)}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slateink">
                    {loc(language, mod.description)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      </div>

      {/* add-module modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-module-heading"
            className="w-full max-w-md rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.18)]"
          >
            <div className="flex items-center justify-between gap-3">
              <h2
                id="add-module-heading"
                className="font-display text-xl font-bold tracking-tight text-ink"
              >
                {loc(language, MODAL_HEADING)}
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label={loc(language, CLOSE_MODAL)}
                className={`${FOCUS_RING} rounded-lg p-1.5 text-slateink transition-colors hover:text-coral`}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleModuleSubmit} noValidate className="mt-5 space-y-4">
              <div>
                <label htmlFor="module-title" className="block text-sm font-semibold text-ink">
                  {loc(language, FIELD_TITLE)}
                </label>
                <input
                  ref={firstFieldRef}
                  id="module-title"
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder={loc(language, FIELD_TITLE_PLACEHOLDER)}
                  aria-invalid={Boolean(errors.title)}
                  aria-describedby={errors.title ? 'module-title-error' : undefined}
                  className={`${INPUT} mt-1.5`}
                />
                {errors.title && (
                  <p id="module-title-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="module-subject" className="block text-sm font-semibold text-ink">
                  {loc(language, FIELD_SUBJECT)}
                </label>
                <select
                  id="module-subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value as ModuleForm['subject'] }))
                  }
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'module-subject-error' : undefined}
                  className={`${INPUT} mt-1.5`}
                >
                  <option value="">{loc(language, CHOOSE)}</option>
                  {SUBJECTS.map((subject) => (
                    <option key={subject.slug} value={subject.slug}>
                      {loc(language, subject.label)}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p id="module-subject-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="module-description"
                  className="block text-sm font-semibold text-ink"
                >
                  {loc(language, FIELD_DESCRIPTION)}
                </label>
                <textarea
                  id="module-description"
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder={loc(language, FIELD_DESCRIPTION_PLACEHOLDER)}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? 'module-description-error' : undefined}
                  className={`${INPUT} mt-1.5 resize-none`}
                />
                {errors.description && (
                  <p id="module-description-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {errors.description}
                  </p>
                )}
              </div>

              {saveError && (
                <p role="alert" className="text-xs font-medium text-coral">
                  {loc(language, ERR_SAVE_MODULE)}
                </p>
              )}

              <div className="flex flex-wrap justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className={`${FOCUS_RING} rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                >
                  {loc(language, BTN_CANCEL)}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:opacity-60`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  {loc(language, saving ? BTN_SAVING : BTN_CREATE)}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default TeacherPage;
