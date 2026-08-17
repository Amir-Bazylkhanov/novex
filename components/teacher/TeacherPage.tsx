import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpDown,
  BookOpen,
  ChevronDown,
  Clock,
  Flag,
  Info,
  Plus,
  School,
  Users,
  X,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import {
  CLASS_LABEL,
  CLASS_TOPIC_PERFORMANCE,
  INITIAL_MODULES,
  SUBJECTS,
  TEACHER_STUDENTS,
  TOPIC_LABELS,
  WEEK_STATS,
  type ClassModule,
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
  ru: 'Статистика класса, успеваемость учеников и учебные модули',
  kk: 'Сынып статистикасы, оқушылардың үлгерімі және оқу модульдері',
  en: 'Class statistics, student performance and learning modules',
};

const DEMO_BADGE: Localized = {
  ru: 'Демо-данные класса',
  kk: 'Сынып демо-деректері',
  en: 'Demo class data',
};
const DEMO_NOTE: Localized = {
  ru: 'Список учеников демонстрационный: реальные данные других пользователей защищены и здесь не отображаются.',
  kk: 'Оқушылар тізімі демонстрациялық: басқа пайдаланушылардың нақты деректері қорғалған және мұнда көрсетілмейді.',
  en: 'The student roster is demo data: real data belonging to other users is protected and not shown here.',
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
  ru: 'Успеваемость по темам',
  kk: 'Тақырыптар бойынша үлгерім',
  en: 'Performance by topic',
};
const CHART_TOPIC_COL: Localized = { ru: 'Тема', kk: 'Тақырып', en: 'Topic' };
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

const ROSTER_HEADING: Localized = {
  ru: 'Ученики',
  kk: 'Оқушылар',
  en: 'Students',
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
  ru: 'Модули класса',
  kk: 'Сынып модульдері',
  en: 'Class modules',
};
const MODULES_NOTE: Localized = {
  ru: 'Сохранение в базу данных скоро появится — пока новые модули живут только в этой сессии.',
  kk: 'Дерекқорға сақтау жақында қосылады — әзірше жаңа модульдер тек осы сессияда сақталады.',
  en: 'Database persistence is coming — for now new modules live only in this session.',
};
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
const FIELD_GRADE: Localized = { ru: 'Класс', kk: 'Сынып', en: 'Grade' };
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
const ERR_GRADE: Localized = {
  ru: 'Выберите класс',
  kk: 'Сыныпты таңдаңыз',
  en: 'Choose a grade',
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
  grade: '' | number;
  description: string;
}

interface ModuleErrors {
  title?: string;
  subject?: string;
  grade?: string;
  description?: string;
}

const EMPTY_FORM: ModuleForm = { title: '', subject: '', grade: '', description: '' };

const GRADES: readonly number[] = [7, 8, 9, 10, 11, 12];

/* --- component --- */

const TeacherPage: React.FC = () => {
  const { language } = useLanguage();

  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modules, setModules] = useState<ClassModule[]>(INITIAL_MODULES);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<ModuleForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<ModuleErrors>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  /* derived class stats */
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
    // tie-break by chart order so the result is stable
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
    setModalOpen(true);
  };

  const handleModuleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: ModuleErrors = {};
    if (form.title.trim().length < 3) next.title = loc(language, ERR_TITLE);
    if (form.subject === '') next.subject = loc(language, ERR_SUBJECT);
    if (form.grade === '') next.grade = loc(language, ERR_GRADE);
    if (form.description.trim().length < 10) next.description = loc(language, ERR_DESCRIPTION);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const title = form.title.trim();
    const description = form.description.trim();
    setModules((current) => [
      ...current,
      {
        id: `mod-local-${Date.now()}`,
        // user-authored content is entered in the active language only
        title: { ru: title, kk: title, en: title },
        subject: form.subject as SubjectSlug,
        grade: form.grade as number,
        description: { ru: description, kk: description, en: description },
      },
    ]);
    setModalOpen(false);
  };

  const subjectLabel = (slug: SubjectSlug): string =>
    loc(language, SUBJECTS.find((s) => s.slug === slug)?.label ?? SUBJECTS[0].label);

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
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        {/* header */}
        <header
          aria-labelledby="teacher-heading"
          className="flex flex-wrap items-start gap-4"
        >
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
              <School className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, CLASS_LABEL)}
            </span>
            <h1
              id="teacher-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl"
            >
              {loc(language, PAGE_TITLE)}
            </h1>
            <p className="mt-2 text-sm text-slateink md:text-base">
              {loc(language, PAGE_SUB)} · {studentsCountLabel(language, TEACHER_STUDENTS.length)} ·{' '}
              {loc(language, STAT_AVERAGE)} {classAverage}%
            </p>
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

        {/* stat cards */}
        <section aria-label={loc(language, PAGE_TITLE)} className="mt-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist/40">
                <School className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-teal-dark">
                  {classAverage}%
                </p>
                <p className="text-xs font-medium text-slateink">{loc(language, STAT_AVERAGE)}</p>
              </div>
            </li>
            <li className={`${CARD} flex items-center gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral/10">
                <Flag className="h-5 w-5 text-coral" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-coral">{helpCount}</p>
                <p className="text-xs font-medium text-slateink">{loc(language, STAT_HELP)}</p>
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
                <p className="text-xs font-medium text-slateink">{loc(language, STAT_LESSONS)}</p>
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
                <p className="text-xs font-medium text-slateink">{loc(language, STAT_TIME)}</p>
              </div>
            </li>
          </ul>
        </section>

        {/* chart + curator */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <section aria-labelledby="chart-heading" className={CARD}>
            <h2
              id="chart-heading"
              className="font-display text-lg font-bold tracking-tight text-ink"
            >
              {loc(language, CHART_HEADING)}
            </h2>
            {/* accessible text alternative to the bar chart */}
            <table className="sr-only">
              <caption>{loc(language, CHART_HEADING)}</caption>
              <thead>
                <tr>
                  <th>{loc(language, CHART_TOPIC_COL)}</th>
                  <th>{loc(language, CHART_SCORE_COL)}</th>
                </tr>
              </thead>
              <tbody>
                {CLASS_TOPIC_PERFORMANCE.map((topic) => (
                  <tr key={topic.slug}>
                    <td>{loc(language, TOPIC_LABELS[topic.slug])}</td>
                    <td>{topic.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div aria-hidden="true" className="mt-4 space-y-2.5">
              {CLASS_TOPIC_PERFORMANCE.map((topic) => {
                const weak = topic.pct < 50;
                return (
                  <div key={topic.slug} className="flex items-center gap-3">
                    <p className="w-32 shrink-0 truncate text-xs font-medium text-ink sm:w-40">
                      {loc(language, TOPIC_LABELS[topic.slug])}
                    </p>
                    <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-mist/40">
                      <div
                        className={`h-full rounded-full ${weak ? 'bg-coral' : 'bg-teal'}`}
                        style={{ width: `${topic.pct}%` }}
                      />
                    </div>
                    <p
                      className={`w-9 shrink-0 text-right text-xs font-semibold ${
                        weak ? 'text-coral' : 'text-teal-dark'
                      }`}
                    >
                      {topic.pct}%
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
                <h2
                  id="curator-heading"
                  className="mt-0.5 font-display text-lg font-bold tracking-tight text-ink"
                >
                  {loc(language, CURATOR_HEADING)}
                </h2>
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
        </div>

        {/* roster */}
        <section aria-labelledby="roster-heading" className={`${CARD} mt-6`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/40">
              <Users className="h-5 w-5 text-teal-dark" aria-hidden="true" />
            </span>
            <h2
              id="roster-heading"
              className="font-display text-lg font-bold tracking-tight text-ink"
            >
              {loc(language, ROSTER_HEADING)}
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line/60 bg-canvas px-3 py-1 text-[11px] font-semibold text-slateink">
              <Info className="h-3 w-3" aria-hidden="true" />
              {loc(language, DEMO_BADGE)}
            </span>
            <div className="ml-auto flex items-center gap-1">
              {renderSortButton('name', SORT_BY_NAME)}
              {renderSortButton('progress', SORT_BY_PROGRESS)}
            </div>
          </div>
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
        </section>

        {/* class modules */}
        <section aria-labelledby="modules-heading" className={`${CARD} mt-6`}>
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
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {modules.map((mod) => (
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
        </section>
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

              <div className="grid gap-4 sm:grid-cols-2">
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
                  <label htmlFor="module-grade" className="block text-sm font-semibold text-ink">
                    {loc(language, FIELD_GRADE)}
                  </label>
                  <select
                    id="module-grade"
                    value={form.grade}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        grade: e.target.value === '' ? '' : Number(e.target.value),
                      }))
                    }
                    aria-invalid={Boolean(errors.grade)}
                    aria-describedby={errors.grade ? 'module-grade-error' : undefined}
                    className={`${INPUT} mt-1.5`}
                  >
                    <option value="">{loc(language, CHOOSE)}</option>
                    {GRADES.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  {errors.grade && (
                    <p id="module-grade-error" role="alert" className="mt-1.5 text-xs font-medium text-coral">
                      {errors.grade}
                    </p>
                  )}
                </div>
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
                  className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  {loc(language, BTN_CREATE)}
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
