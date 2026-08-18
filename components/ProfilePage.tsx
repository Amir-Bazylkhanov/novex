import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Calendar,
  Camera,
  Check,
  Cog,
  GraduationCap,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Save,
  School,
  Search,
  Target,
  Trash2,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth, type ExamScores, type Profile, type Goal } from '../context/AuthContext.tsx';
import type { TutorModel } from '../services/aiService.ts';
import { supabase } from '../services/supabaseClient.ts';
import { RobotAvatar } from './robots/RobotAvatars.tsx';

/* --- content --- */

const PAGE_TITLE: Localized = {
  ru: 'Твой профиль',
  kk: 'Сенің профилің',
  en: 'Your profile',
};
const PAGE_SUB: Localized = {
  ru: 'Аккаунт, учебный профиль и язык интерфейса',
  kk: 'Аккаунт, оқу профилі және интерфейс тілі',
  en: 'Account, learning profile and interface language',
};
const LINK_PROGRESS: Localized = {
  ru: 'Мой прогресс',
  kk: 'Менің прогресім',
  en: 'My progress',
};
const LINK_LESSONS: Localized = {
  ru: 'К урокам',
  kk: 'Сабақтарға',
  en: 'To lessons',
};
const LOADING: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const ACCOUNT_HEADING: Localized = {
  ru: 'Аккаунт',
  kk: 'Тіркелгі',
  en: 'Account',
};
const ACCOUNT_DESC: Localized = {
  ru: 'Данные для входа и имя, которое видно в Novex',
  kk: 'Кіру деректерің және Novex-те көрінетін есімің',
  en: 'Sign-in details and the name shown in Novex',
};
const EMAIL_LABEL: Localized = {
  ru: 'Электронная почта',
  kk: 'Электрондық пошта',
  en: 'Email',
};
const NAME_LABEL: Localized = {
  ru: 'Имя',
  kk: 'Аты',
  en: 'Name',
};
const NAME_PLACEHOLDER: Localized = {
  ru: 'Как тебя зовут?',
  kk: 'Есімің кім?',
  en: 'What should we call you?',
};
const UPLOAD_PHOTO: Localized = {
  ru: 'Загрузить фото',
  kk: 'Сурет жүктеу',
  en: 'Upload photo',
};
const UPLOADING_PHOTO: Localized = {
  ru: 'Загружаем…',
  kk: 'Жүктелуде…',
  en: 'Uploading…',
};
const REMOVE_PHOTO: Localized = {
  ru: 'Удалить фото',
  kk: 'Суретті жою',
  en: 'Remove photo',
};

const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Диагност',
  kk: 'NOV-01 · Диагност',
  en: 'NOV-01 · Diagnostician',
};
const LEARNING_HEADING: Localized = {
  ru: 'Учебный профиль',
  kk: 'Оқу профилі',
  en: 'Learning profile',
};
const LEARNING_DESC: Localized = {
  ru: 'NOV-01 Диагност использует эти данные, чтобы определить твой уровень и программу.',
  kk: 'NOV-01 Диагност деңгейің мен бағдарламаңды анықтау үшін осы деректерді пайдаланады.',
  en: 'NOV-01 Diagnostician uses these details to work out your level and programme.',
};

const GRADE_LABEL: Localized = { ru: 'Класс', kk: 'Сынып', en: 'Grade' };
const SUBJECTS_LABEL: Localized = {
  ru: 'Предметы для изучения',
  kk: 'Оқитын пәндер',
  en: 'Subjects to study',
};
const SUBJECTS_HINT: Localized = {
  ru: 'Можно выбрать несколько',
  kk: 'Бірнешеуін таңдауға болады',
  en: 'You can pick several',
};
const GOAL_LABEL: Localized = {
  ru: 'Цель занятий',
  kk: 'Сабақтың мақсаты',
  en: 'Goal',
};
const GOAL_HINT: Localized = {
  ru: 'Можно выбрать несколько',
  kk: 'Бірнешеуін таңдауға болады',
  en: 'You can pick several',
};
const SCHOOL_LABEL: Localized = { ru: 'Школа', kk: 'Мектеп', en: 'School' };
const SCHOOL_PLACEHOLDER: Localized = {
  ru: 'Например: школа-лицей № 12',
  kk: 'Мысалы: № 12 мектеп-лицейі',
  en: 'e.g. School-lyceum No. 12',
};
const REGION_LABEL: Localized = { ru: 'Регион', kk: 'Өңір', en: 'Region' };
const REGION_PLACEHOLDER: Localized = {
  ru: 'Например: Алматы',
  kk: 'Мысалы: Алматы',
  en: 'e.g. Almaty',
};
const EXAM_DATE_LABEL: Localized = {
  ru: 'Дата экзамена или дедлайн цели',
  kk: 'Емтихан күні немесе мақсат дедлайны',
  en: 'Exam date or goal deadline',
};

const EXAMS_HEADING: Localized = {
  ru: 'Экзамены и баллы',
  kk: 'Емтихандар мен баллдар',
  en: 'Exams and scores',
};
const EXAMS_DESC: Localized = {
  ru: 'Текущие или целевые баллы — необязательно. Наставник и Куратор учтут их в рекомендациях.',
  kk: 'Ағымдағы немесе мақсатты баллдар — міндетті емес. Тәлімгер мен Куратор оларды ұсыныстарда ескереді.',
  en: 'Current or target scores — optional. The Tutor and the Curator will factor them into recommendations.',
};
const ENT_SCORE_LABEL: Localized = {
  ru: 'Балл ЕНТ (цель или текущий)',
  kk: 'ҰБТ баллы (мақсат немесе ағымдағы)',
  en: 'UNT score (target or current)',
};
const SAT_SCORE_LABEL: Localized = { ru: 'SAT', kk: 'SAT', en: 'SAT' };
const IELTS_SCORE_LABEL: Localized = { ru: 'IELTS', kk: 'IELTS', en: 'IELTS' };
const SCORE_PLACEHOLDER: Localized = { ru: '—', kk: '—', en: '—' };
const ENT_SCORE_ERROR: Localized = {
  ru: 'Целое число от 0 до 140',
  kk: '0-ден 140-қа дейінгі бүтін сан',
  en: 'An integer between 0 and 140',
};
const SAT_SCORE_ERROR: Localized = {
  ru: 'От 400 до 1600 с шагом 10',
  kk: '400-ден 1600-ге дейін, қадамы 10',
  en: '400–1600 in steps of 10',
};
const IELTS_SCORE_ERROR: Localized = {
  ru: 'От 0 до 9 с шагом 0.5',
  kk: '0-ден 9-ға дейін, қадамы 0,5',
  en: '0–9 in steps of 0.5',
};

const MODEL_HEADING: Localized = {
  ru: 'ИИ-наставник',
  kk: 'ИИ-тәлімгер',
  en: 'AI tutor',
};
const MODEL_DESC: Localized = {
  ru: 'Модель, которой Наставник отвечает в чате. Цена за сообщение: 1–5 ⚙ Новасов.',
  kk: 'Тәлімгер чатта жауап беретін модель. Бір хабарламаның бағасы: 1–5 ⚙ Новас.',
  en: 'The model the Tutor answers with in chat. Price per message: 1–5 ⚙ Novas.',
};
const MODEL_SELECT_LABEL: Localized = { ru: 'Модель', kk: 'Модель', en: 'Model' };
const MODEL_DEFAULT_OPTION: Localized = {
  ru: 'По умолчанию (Sonnet 5)',
  kk: 'Әдепкі (Sonnet 5)',
  en: 'Default (Sonnet 5)',
};

// Brand names stay identical in all three languages, so labels are plain strings.
// Listed most expensive first.
const MODEL_OPTIONS: Array<{ id: TutorModel; label: string }> = [
  { id: 'claude-opus-5', label: 'Opus 5' },
  { id: 'gpt-5.6-sol', label: 'ChatGPT 5.6 Sol' },
  { id: 'claude-sonnet-5', label: 'Sonnet 5' },
  { id: 'gpt-5.6-terra', label: 'ChatGPT 5.6 Terra' },
  { id: 'gpt-5.6-luna', label: 'ChatGPT 5.6 Luna' },
];

const SAVE_BTN: Localized = { ru: 'Сохранить', kk: 'Сақтау', en: 'Save' };
const SAVING: Localized = { ru: 'Сохраняем…', kk: 'Сақталуда…', en: 'Saving…' };
const SAVED: Localized = { ru: 'Сохранено', kk: 'Сақталды', en: 'Saved' };
const SIGN_OUT: Localized = {
  ru: 'Выйти из аккаунта',
  kk: 'Аккаунттан шығу',
  en: 'Sign out',
};

const CLASS_HEADING: Localized = {
  ru: 'Мой класс',
  kk: 'Менің сыныбым',
  en: 'My class',
};
const CLASS_DESC: Localized = {
  ru: 'Выбери свой класс — и уроки твоего учителя появятся в разделе «Обучение».',
  kk: 'Сыныбыңды таңда — мұғаліміңнің сабақтары «Оқу» бөлімінде пайда болады.',
  en: 'Pick your class and your teacher’s lessons will show up in Learn.',
};
const CLASS_SEARCH_LABEL: Localized = {
  ru: 'Поиск по школе',
  kk: 'Мектеп бойынша іздеу',
  en: 'Search by school',
};
const CLASS_SEARCH_PLACEHOLDER: Localized = {
  ru: 'Начни вводить название школы…',
  kk: 'Мектеп атауын жаза баста…',
  en: 'Start typing your school name…',
};
const CLASS_EMPTY: Localized = {
  ru: 'Такой школы не нашлось. Проверь название или спроси учителя, создан ли класс.',
  kk: 'Мұндай мектеп табылмады. Атауын тексер немесе сынып құрылғанын мұғалімнен сұра.',
  en: 'No school matches. Check the name or ask your teacher if the class exists.',
};
const CLASS_CURRENT: Localized = {
  ru: 'Ты состоишь в классе',
  kk: 'Сенің сыныбың',
  en: 'You are a member of',
};
const CLASS_LEAVE: Localized = {
  ru: 'Выйти из класса',
  kk: 'Сыныптан шығу',
  en: 'Leave class',
};
const CLASS_SAVE_ERROR: Localized = {
  ru: 'Не удалось сохранить класс. Попробуй ещё раз.',
  kk: 'Сыныпты сақтай алмадық. Қайтадан көр.',
  en: 'Could not save your class. Try again.',
};

const SUBJECTS: Array<{ slug: string; label: Localized }> = [
  { slug: 'math', label: { ru: 'Математика', kk: 'Математика', en: 'Mathematics' } },
  { slug: 'physics', label: { ru: 'Физика', kk: 'Физика', en: 'Physics' } },
  { slug: 'chemistry', label: { ru: 'Химия', kk: 'Химия', en: 'Chemistry' } },
  { slug: 'biology', label: { ru: 'Биология', kk: 'Биология', en: 'Biology' } },
  { slug: 'informatics', label: { ru: 'Информатика', kk: 'Информатика', en: 'Computer science' } },
  { slug: 'kazakh', label: { ru: 'Қазақ тілі', kk: 'Қазақ тілі', en: 'Kazakh language' } },
  { slug: 'english', label: { ru: 'English', kk: 'Ағылшын тілі', en: 'English' } },
  {
    slug: 'history',
    label: { ru: 'История Казахстана', kk: 'Қазақстан тарихы', en: 'History of Kazakhstan' },
  },
];

const GOALS: Array<{ value: Goal; label: Localized }> = [
  { value: 'ent', label: { ru: 'ЕНТ', kk: 'ҰБТ', en: 'UNT' } },
  { value: 'olympiad', label: { ru: 'Олимпиада', kk: 'Олимпиада', en: 'Olympiad' } },
  { value: 'revision', label: { ru: 'Повторение темы', kk: 'Тақырыпты қайталау', en: 'Topic revision' } },
  { value: 'admission', label: { ru: 'Поступление', kk: 'Оқуға түсу', en: 'Admission' } },
];

const GRADES: readonly number[] = [7, 8, 9, 10, 11, 12];

/* --- form state --- */

interface ClassRow {
  id: string;
  school: string;
  label: string;
}

interface FormState {
  fullName: string;
  grade: number | null;
  subjects: string[];
  goals: Goal[];
  school: string;
  region: string;
  examDate: string;
  entScore: string;
  satScore: string;
  ieltsScore: string;
  preferredModel: TutorModel | null;
}

const fromProfile = (p: Profile): FormState => ({
  fullName: p.full_name ?? '',
  grade: p.grade,
  subjects: [...p.subjects],
  goals: [...p.goals],
  school: p.school ?? '',
  region: p.region ?? '',
  examDate: p.examDate ?? '',
  entScore: p.examScores.ent !== undefined ? String(p.examScores.ent) : '',
  satScore: p.examScores.sat !== undefined ? String(p.examScores.sat) : '',
  ieltsScore: p.examScores.ielts !== undefined ? String(p.examScores.ielts) : '',
  preferredModel: p.preferredModel,
});

const serialize = (f: FormState): string =>
  JSON.stringify({
    fullName: f.fullName.trim(),
    grade: f.grade,
    subjects: [...f.subjects].sort(),
    goals: [...f.goals].sort(),
    school: f.school.trim(),
    region: f.region.trim(),
    examDate: f.examDate,
    entScore: f.entScore.trim(),
    satScore: f.satScore.trim(),
    ieltsScore: f.ieltsScore.trim(),
    preferredModel: f.preferredModel,
  });

/* Exam score validation — empty means "not set"; only non-empty values are checked. */

const validEntScore = (raw: string): boolean => {
  if (!/^\d+$/.test(raw)) return false;
  const n = Number(raw);
  return n >= 0 && n <= 140;
};

const validSatScore = (raw: string): boolean => {
  if (!/^\d+$/.test(raw)) return false;
  const n = Number(raw);
  return n >= 400 && n <= 1600 && n % 10 === 0;
};

const validIeltsScore = (raw: string): boolean => {
  const n = Number(raw.replace(',', '.'));
  return !Number.isNaN(n) && n >= 0 && n <= 9 && (n * 2) % 1 === 0;
};

/** Parse the raw inputs into the exam_scores jsonb shape, omitting empty keys. */
const buildExamScores = (f: FormState): ExamScores => {
  const scores: ExamScores = {};
  if (f.entScore.trim()) scores.ent = Number(f.entScore.trim());
  if (f.satScore.trim()) scores.sat = Number(f.satScore.trim());
  if (f.ieltsScore.trim()) scores.ielts = Number(f.ieltsScore.trim().replace(',', '.'));
  return scores;
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const LABEL = 'block text-sm font-semibold text-ink';

const LEGEND = 'flex items-center gap-2 font-sans text-sm font-semibold text-ink';

const INPUT =
  'w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-slateink/60 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30';

const CHIP =
  'inline-flex items-center justify-center rounded-xl border text-sm font-semibold transition-colors peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas';
const CHIP_ON = 'border-teal bg-teal text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)]';
const CHIP_OFF = 'border-line bg-white text-ink hover:border-teal/60 hover:text-teal';

const ProfilePage: React.FC = () => {
  const { user, profile, loading, signOut, updateProfile, uploadAvatar } = useAuth();
  const { language } = useLanguage();

  const [form, setForm] = useState<FormState>({
    fullName: '',
    grade: null,
    subjects: [],
    goals: [],
    school: '',
    region: '',
    examDate: '',
    entScore: '',
    satScore: '',
    ieltsScore: '',
    preferredModel: null,
  });
  const [baseline, setBaseline] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarBroken, setAvatarBroken] = useState(false);
  const hydratedIdRef = useRef<string | null>(null);

  // class membership (student role only) — class_id is not part of the
  // AuthContext profile mapping, so this card reads/writes it directly
  const [myClassId, setMyClassId] = useState<string | null>(null);
  const [classOptions, setClassOptions] = useState<ClassRow[]>([]);
  const [classQuery, setClassQuery] = useState('');
  const [classSaving, setClassSaving] = useState(false);
  const [classError, setClassError] = useState<string | null>(null);

  useEffect(() => {
    if (profile && hydratedIdRef.current !== profile.id) {
      hydratedIdRef.current = profile.id;
      const next = fromProfile(profile);
      setForm(next);
      setBaseline(serialize(next));
      setSaved(false);
      setError(null);
    }
  }, [profile]);

  const dirty = useMemo(
    () => baseline !== null && serialize(form) !== baseline,
    [form, baseline],
  );

  useEffect(() => {
    if (dirty) setSaved(false);
  }, [dirty]);

  // a new avatar URL gets a fresh chance to load
  useEffect(() => {
    setAvatarBroken(false);
  }, [profile?.avatar_url]);

  // load the student's current class and the list of classes to pick from
  useEffect(() => {
    if (!profile || profile.role !== 'student') return;
    let cancelled = false;
    Promise.all([
      supabase.from('profiles').select('class_id').eq('id', profile.id).maybeSingle(),
      supabase.from('classes').select('id, school, label').order('school').order('label'),
    ]).then(([membershipRes, classesRes]) => {
      if (cancelled) return;
      if (!membershipRes.error && membershipRes.data) {
        setMyClassId((membershipRes.data as { class_id: string | null }).class_id);
      }
      if (!classesRes.error && classesRes.data) {
        setClassOptions(classesRes.data as ClassRow[]);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [profile]);

  // filter by school name, then group the matches under each school
  const groupedClasses = useMemo(() => {
    const q = classQuery.trim().toLowerCase();
    const filtered = q
      ? classOptions.filter((c) => c.school.toLowerCase().includes(q))
      : classOptions;
    const groups: Array<{ school: string; items: ClassRow[] }> = [];
    for (const c of filtered) {
      const last = groups[groups.length - 1];
      if (last && last.school === c.school) last.items.push(c);
      else groups.push({ school: c.school, items: [c] });
    }
    return groups;
  }, [classOptions, classQuery]);

  const myClass = myClassId ? (classOptions.find((c) => c.id === myClassId) ?? null) : null;

  const saveClass = async (nextClassId: string | null) => {
    if (!profile || classSaving) return;
    setClassSaving(true);
    setClassError(null);
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ class_id: nextClassId })
      .eq('id', profile.id);
    setClassSaving(false);
    if (updateError) {
      setClassError(loc(language, CLASS_SAVE_ERROR));
      return;
    }
    setMyClassId(nextClassId);
    setClassQuery('');
  };

  if (loading || !user || !profile) {
    return (
      <div role="status" className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dirty || saving || examErrors) return;
    setSaving(true);
    setError(null);
    setSaved(false);
    const patch: Partial<Profile> = {
      full_name: form.fullName.trim() || null,
      grade: form.grade,
      subjects: [...form.subjects].sort(),
      // updateProfile rewrites the legacy goal column as goals[0] ?? null
      goals: [...form.goals],
      school: form.school.trim() || null,
      region: form.region.trim() || null,
      examDate: form.examDate || null,
      examScores: buildExamScores(form),
      preferredModel: form.preferredModel,
    };
    const { error: saveError } = await updateProfile(patch);
    setSaving(false);
    if (saveError) {
      setError(saveError);
      return;
    }
    setBaseline(serialize(form));
    setSaved(true);
  };

  const avatarInitial = (profile.full_name?.trim() || user.email).charAt(0).toUpperCase();

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // reset so picking the same file again still fires onChange
    event.target.value = '';
    if (!file || avatarUploading) return;
    setAvatarUploading(true);
    setError(null);
    const { error: uploadError } = await uploadAvatar(file);
    setAvatarUploading(false);
    if (uploadError) setError(uploadError);
  };

  const handleAvatarRemove = async () => {
    setError(null);
    const { error: removeError } = await updateProfile({ avatar_url: null });
    if (removeError) setError(removeError);
  };

  const toggleSubject = (slug: string) =>
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(slug)
        ? f.subjects.filter((s) => s !== slug)
        : [...f.subjects, slug],
    }));

  const toggleGoal = (value: Goal) =>
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(value)
        ? f.goals.filter((g) => g !== value)
        : [...f.goals, value],
    }));

  const entInvalid = form.entScore.trim() !== '' && !validEntScore(form.entScore.trim());
  const satInvalid = form.satScore.trim() !== '' && !validSatScore(form.satScore.trim());
  const ieltsInvalid = form.ieltsScore.trim() !== '' && !validIeltsScore(form.ieltsScore.trim());
  const examErrors = entInvalid || satInvalid || ieltsInvalid;

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <header aria-labelledby="profile-heading">
          <h1
            id="profile-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl"
          >
            {loc(language, PAGE_TITLE)}
          </h1>
          <p className="mt-2 text-sm text-slateink md:text-base">{loc(language, PAGE_SUB)}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              <TrendingUp className="h-4 w-4 text-teal" aria-hidden="true" />
              {loc(language, LINK_PROGRESS)}
            </Link>
            <Link
              to="/learn"
              className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              <BookOpen className="h-4 w-4 text-teal" aria-hidden="true" />
              {loc(language, LINK_LESSONS)}
            </Link>
          </div>
        </header>

        <div className="mt-8 space-y-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 lg:space-y-0">
          <form onSubmit={handleSubmit} noValidate className="space-y-6 lg:contents lg:space-y-0">
          {/* Account */}
          <section aria-labelledby="account-heading" className={`${CARD} lg:col-span-2`}>
            <h2
              id="account-heading"
              className="font-display text-xl font-bold tracking-tight text-ink"
            >
              {loc(language, ACCOUNT_HEADING)}
            </h2>
            <p className="mt-1 text-sm text-slateink">{loc(language, ACCOUNT_DESC)}</p>

            <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {profile.avatar_url && !avatarBroken ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.full_name ?? user.email}
                  onError={() => setAvatarBroken(true)}
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-line/60"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-teal font-display text-3xl font-bold text-white ring-2 ring-line/60"
                >
                  {avatarInitial}
                </span>
              )}
              <div className="flex flex-wrap items-center gap-3">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    disabled={avatarUploading}
                    onChange={(e) => void handleAvatarChange(e)}
                    className="peer sr-only"
                    aria-label={loc(language, UPLOAD_PHOTO)}
                  />
                  <span
                    className={`${CHIP} gap-1.5 px-4 py-2.5 ${CHIP_OFF} peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}
                  >
                    {avatarUploading ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <Camera className="h-4 w-4" aria-hidden="true" />
                    )}
                    {avatarUploading ? loc(language, UPLOADING_PHOTO) : loc(language, UPLOAD_PHOTO)}
                  </span>
                </label>
                {profile.avatar_url && (
                  <button
                    type="button"
                    disabled={avatarUploading}
                    onClick={() => void handleAvatarRemove()}
                    className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                    {loc(language, REMOVE_PHOTO)}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="profile-name" className={LABEL}>
                  {loc(language, NAME_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <User
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-name"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder={loc(language, NAME_PLACEHOLDER)}
                    className={`${INPUT} pl-10`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="profile-email" className={LABEL}>
                  {loc(language, EMAIL_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <Mail
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-email"
                    type="email"
                    readOnly
                    value={user.email}
                    className={`${INPUT} cursor-default bg-canvas pl-10 text-slateink`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Learning profile */}
          <section aria-labelledby="learning-heading" className={CARD}>
            <div className="flex items-start gap-4">
              <RobotAvatar robot="nov1" className="h-12 w-12 shrink-0" />
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                  {loc(language, ROBOT_LABEL)}
                </p>
                <h2
                  id="learning-heading"
                  className="mt-0.5 font-display text-xl font-bold tracking-tight text-ink"
                >
                  {loc(language, LEARNING_HEADING)}
                </h2>
                <p className="mt-1 text-sm text-slateink">{loc(language, LEARNING_DESC)}</p>
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className={LEGEND}>
                <GraduationCap className="h-4 w-4 text-teal" aria-hidden="true" />
                {loc(language, GRADE_LABEL)}
              </legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {GRADES.map((g) => (
                  <label key={g} className="cursor-pointer">
                    <input
                      type="radio"
                      name="grade"
                      value={g}
                      checked={form.grade === g}
                      onChange={() => setForm((f) => ({ ...f, grade: g }))}
                      className="peer sr-only"
                    />
                    <span className={`${CHIP} h-11 w-11 ${form.grade === g ? CHIP_ON : CHIP_OFF}`}>
                      {g}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className={LEGEND}>
                <BookOpen className="h-4 w-4 text-teal" aria-hidden="true" />
                {loc(language, SUBJECTS_LABEL)}
              </legend>
              <p className="mt-1 text-xs text-slateink">{loc(language, SUBJECTS_HINT)}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {SUBJECTS.map((s) => {
                  const selected = form.subjects.includes(s.slug);
                  return (
                    <label key={s.slug} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="subjects"
                        value={s.slug}
                        checked={selected}
                        onChange={() => toggleSubject(s.slug)}
                        className="peer sr-only"
                      />
                      <span className={`${CHIP} gap-1.5 px-4 py-2.5 ${selected ? CHIP_ON : CHIP_OFF}`}>
                        {selected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                        {loc(language, s.label)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className={LEGEND}>
                <Target className="h-4 w-4 text-teal" aria-hidden="true" />
                {loc(language, GOAL_LABEL)}
              </legend>
              <p className="mt-1 text-xs text-slateink">{loc(language, GOAL_HINT)}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {GOALS.map((g) => {
                  const selected = form.goals.includes(g.value);
                  return (
                    <label key={g.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="goals"
                        value={g.value}
                        checked={selected}
                        onChange={() => toggleGoal(g.value)}
                        className="peer sr-only"
                      />
                      <span className={`${CHIP} gap-1.5 px-4 py-2.5 ${selected ? CHIP_ON : CHIP_OFF}`}>
                        {selected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                        {loc(language, g.label)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="profile-school" className={LABEL}>
                  {loc(language, SCHOOL_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <School
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-school"
                    type="text"
                    autoComplete="organization"
                    value={form.school}
                    onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
                    placeholder={loc(language, SCHOOL_PLACEHOLDER)}
                    className={`${INPUT} pl-10`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="profile-region" className={LABEL}>
                  {loc(language, REGION_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <MapPin
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-region"
                    type="text"
                    value={form.region}
                    onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}
                    placeholder={loc(language, REGION_PLACEHOLDER)}
                    className={`${INPUT} pl-10`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="profile-exam-date" className={LABEL}>
                  {loc(language, EXAM_DATE_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <Calendar
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-exam-date"
                    type="date"
                    value={form.examDate}
                    onChange={(e) => setForm((f) => ({ ...f, examDate: e.target.value }))}
                    className={`${INPUT} pl-10`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Exams and scores */}
          <section aria-labelledby="exams-heading" className={CARD}>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/30 text-teal-dark">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="exams-heading"
                  className="font-display text-xl font-bold tracking-tight text-ink"
                >
                  {loc(language, EXAMS_HEADING)}
                </h2>
                <p className="mt-1 text-sm text-slateink">{loc(language, EXAMS_DESC)}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="profile-ent-score" className={LABEL}>
                  {loc(language, ENT_SCORE_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <Award
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="profile-ent-score"
                    type="text"
                    inputMode="numeric"
                    value={form.entScore}
                    onChange={(e) => setForm((f) => ({ ...f, entScore: e.target.value }))}
                    placeholder={loc(language, SCORE_PLACEHOLDER)}
                    aria-invalid={entInvalid}
                    className={`${INPUT} pl-10 ${entInvalid ? 'border-coral' : ''}`}
                  />
                </div>
                {entInvalid && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {loc(language, ENT_SCORE_ERROR)}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="profile-sat-score" className={LABEL}>
                  {loc(language, SAT_SCORE_LABEL)}
                </label>
                <input
                  id="profile-sat-score"
                  type="text"
                  inputMode="numeric"
                  value={form.satScore}
                  onChange={(e) => setForm((f) => ({ ...f, satScore: e.target.value }))}
                  placeholder={loc(language, SCORE_PLACEHOLDER)}
                  aria-invalid={satInvalid}
                  className={`${INPUT} mt-1.5 ${satInvalid ? 'border-coral' : ''}`}
                />
                {satInvalid && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {loc(language, SAT_SCORE_ERROR)}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="profile-ielts-score" className={LABEL}>
                  {loc(language, IELTS_SCORE_LABEL)}
                </label>
                <input
                  id="profile-ielts-score"
                  type="text"
                  inputMode="decimal"
                  value={form.ieltsScore}
                  onChange={(e) => setForm((f) => ({ ...f, ieltsScore: e.target.value }))}
                  placeholder={loc(language, SCORE_PLACEHOLDER)}
                  aria-invalid={ieltsInvalid}
                  className={`${INPUT} mt-1.5 ${ieltsInvalid ? 'border-coral' : ''}`}
                />
                {ieltsInvalid && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-coral">
                    {loc(language, IELTS_SCORE_ERROR)}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* AI tutor model */}
          <section aria-labelledby="model-heading" className={CARD}>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/30 text-teal-dark">
                <Cog className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="model-heading"
                  className="font-display text-xl font-bold tracking-tight text-ink"
                >
                  {loc(language, MODEL_HEADING)}
                </h2>
                <p className="mt-1 text-sm text-slateink">{loc(language, MODEL_DESC)}</p>
              </div>
            </div>

            <div className="mt-5 max-w-xs">
              <label htmlFor="profile-model" className={LABEL}>
                {loc(language, MODEL_SELECT_LABEL)}
              </label>
              <select
                id="profile-model"
                value={form.preferredModel ?? ''}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    preferredModel: (e.target.value || null) as TutorModel | null,
                  }))
                }
                className={`${INPUT} mt-1.5`}
              >
                <option value="">{loc(language, MODEL_DEFAULT_OPTION)}</option>
                {MODEL_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm font-medium text-coral lg:col-span-2"
            >
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 lg:col-span-2">
            <button
              type="submit"
              disabled={!dirty || saving || examErrors}
              className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-white disabled:text-slateink disabled:shadow-none`}
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Save className="h-4 w-4" aria-hidden="true" />
              )}
              {saving ? loc(language, SAVING) : loc(language, SAVE_BTN)}
            </button>
            {saved && !dirty && (
              <span
                role="status"
                className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1.5 text-sm font-semibold text-teal-dark"
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                {loc(language, SAVED)}
              </span>
            )}
          </div>
          </form>

        {/* My class — students only */}
        {profile.role === 'student' && (
          <section aria-labelledby="class-heading" className={CARD}>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/30 text-teal-dark">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="class-heading"
                  className="font-display text-xl font-bold tracking-tight text-ink"
                >
                  {loc(language, CLASS_HEADING)}
                </h2>
                <p className="mt-1 text-sm text-slateink">{loc(language, CLASS_DESC)}</p>
              </div>
            </div>

            {myClass ? (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slateink">
                    {loc(language, CLASS_CURRENT)}
                  </span>
                  <span className="mt-0.5 block font-display text-base font-bold text-ink">
                    {myClass.school} · {myClass.label}
                  </span>
                </p>
                <button
                  type="button"
                  disabled={classSaving}
                  onClick={() => void saveClass(null)}
                  className={`${FOCUS_RING} inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  {classSaving ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                  )}
                  {loc(language, CLASS_LEAVE)}
                </button>
              </div>
            ) : (
              <div className="mt-5">
                <label htmlFor="class-search" className={LABEL}>
                  {loc(language, CLASS_SEARCH_LABEL)}
                </label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink"
                    aria-hidden="true"
                  />
                  <input
                    id="class-search"
                    type="text"
                    value={classQuery}
                    onChange={(e) => setClassQuery(e.target.value)}
                    placeholder={loc(language, CLASS_SEARCH_PLACEHOLDER)}
                    className={`${INPUT} pl-10`}
                  />
                </div>
                <div className="mt-3 max-h-72 space-y-4 overflow-y-auto pr-1">
                  {groupedClasses.length > 0 ? (
                    groupedClasses.map((group) => (
                      <div key={group.school}>
                        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slateink">
                          <School className="h-3.5 w-3.5" aria-hidden="true" />
                          {group.school}
                        </p>
                        <div className="mt-1.5 space-y-1.5">
                          {group.items.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              disabled={classSaving}
                              onClick={() => void saveClass(c.id)}
                              className={`${FOCUS_RING} flex w-full items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-left text-sm font-semibold text-ink transition-colors hover:border-teal/60 hover:text-teal disabled:cursor-not-allowed disabled:opacity-50`}
                            >
                              {c.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slateink">{loc(language, CLASS_EMPTY)}</p>
                  )}
                </div>
              </div>
            )}

            {classError && (
              <p role="alert" className="mt-4 text-sm font-medium text-coral">
                {classError}
              </p>
            )}
          </section>
        )}
        </div>

        <div className="mt-10 border-t border-line/50 pt-6">
          <button
            type="button"
            onClick={() => void signOut()}
            className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral`}
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            {loc(language, SIGN_OUT)}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
