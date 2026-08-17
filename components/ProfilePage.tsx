import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  Check,
  Globe,
  GraduationCap,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Save,
  School,
  Target,
  User,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth, type Profile, type Goal } from '../context/AuthContext.tsx';
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
const SUBJECTS_LABEL: Localized = { ru: 'Предметы', kk: 'Пәндер', en: 'Subjects' };
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

const LANGUAGE_HEADING: Localized = {
  ru: 'Язык интерфейса',
  kk: 'Интерфейс тілі',
  en: 'Interface language',
};
const LANGUAGE_DESC: Localized = {
  ru: 'Интерфейс переключится сразу после выбора.',
  kk: 'Тілді таңдаған соң интерфейс бірден ауысады.',
  en: 'The interface switches the moment you pick one.',
};

const SAVE_BTN: Localized = { ru: 'Сохранить', kk: 'Сақтау', en: 'Save' };
const SAVING: Localized = { ru: 'Сохраняем…', kk: 'Сақталуда…', en: 'Saving…' };
const SAVED: Localized = { ru: 'Сохранено', kk: 'Сақталды', en: 'Saved' };
const SIGN_OUT: Localized = {
  ru: 'Выйти из аккаунта',
  kk: 'Аккаунттан шығу',
  en: 'Sign out',
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

const LANGS: Array<{ value: Lang; label: Localized }> = [
  { value: 'ru', label: { ru: 'Русский', kk: 'Русский', en: 'Русский' } },
  { value: 'kk', label: { ru: 'Қазақша', kk: 'Қазақша', en: 'Қазақша' } },
  { value: 'en', label: { ru: 'English', kk: 'English', en: 'English' } },
];

const GRADES: readonly number[] = [7, 8, 9, 10, 11, 12];

/* --- form state --- */

interface FormState {
  fullName: string;
  grade: number | null;
  subjects: string[];
  goal: Goal | null;
  school: string;
  region: string;
}

const fromProfile = (p: Profile): FormState => ({
  fullName: p.full_name ?? '',
  grade: p.grade,
  subjects: [...p.subjects],
  goal: p.goal,
  school: p.school ?? '',
  region: p.region ?? '',
});

const serialize = (f: FormState): string =>
  JSON.stringify({
    fullName: f.fullName.trim(),
    grade: f.grade,
    subjects: [...f.subjects].sort(),
    goal: f.goal,
    school: f.school.trim(),
    region: f.region.trim(),
  });

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
  const { user, profile, loading, signOut, updateProfile } = useAuth();
  const { language, setLanguage } = useLanguage();

  const [form, setForm] = useState<FormState>({
    fullName: '',
    grade: null,
    subjects: [],
    goal: null,
    school: '',
    region: '',
  });
  const [baseline, setBaseline] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hydratedIdRef = useRef<string | null>(null);

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
    if (!dirty || saving) return;
    setSaving(true);
    setError(null);
    setSaved(false);
    const patch: Partial<Profile> = {
      full_name: form.fullName.trim() || null,
      grade: form.grade,
      subjects: [...form.subjects].sort(),
      goal: form.goal,
      school: form.school.trim() || null,
      region: form.region.trim() || null,
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

  const handleLanguageChange = async (value: Lang) => {
    setLanguage(value);
    setError(null);
    const { error: langError } = await updateProfile({ language: value });
    if (langError) setError(langError);
  };

  const toggleSubject = (slug: string) =>
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(slug)
        ? f.subjects.filter((s) => s !== slug)
        : [...f.subjects, slug],
    }));

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <header aria-labelledby="profile-heading">
          <h1
            id="profile-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl"
          >
            {loc(language, PAGE_TITLE)}
          </h1>
          <p className="mt-2 text-sm text-slateink md:text-base">{loc(language, PAGE_SUB)}</p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
          {/* Account */}
          <section aria-labelledby="account-heading" className={CARD}>
            <h2
              id="account-heading"
              className="font-display text-xl font-bold tracking-tight text-ink"
            >
              {loc(language, ACCOUNT_HEADING)}
            </h2>
            <p className="mt-1 text-sm text-slateink">{loc(language, ACCOUNT_DESC)}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
              <div className="mt-2.5 flex flex-wrap gap-2">
                {GOALS.map((g) => {
                  const selected = form.goal === g.value;
                  return (
                    <label key={g.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="goal"
                        value={g.value}
                        checked={selected}
                        onChange={() => setForm((f) => ({ ...f, goal: g.value }))}
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
            </div>
          </section>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm font-medium text-coral"
            >
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={!dirty || saving}
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

        {/* Interface language — saves immediately */}
        <section aria-labelledby="language-heading" className={`${CARD} mt-6`}>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mist/40">
              <Globe className="h-5 w-5 text-teal-dark" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="language-heading"
                className="font-display text-xl font-bold tracking-tight text-ink"
              >
                {loc(language, LANGUAGE_HEADING)}
              </h2>
              <p className="mt-0.5 text-sm text-slateink">{loc(language, LANGUAGE_DESC)}</p>
            </div>
          </div>
          <fieldset className="mt-4">
            <legend className="sr-only">{loc(language, LANGUAGE_HEADING)}</legend>
            <div className="flex flex-wrap gap-2">
              {LANGS.map((opt) => {
                const selected = language === opt.value;
                return (
                  <label key={opt.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="interface-language"
                      value={opt.value}
                      checked={selected}
                      onChange={() => void handleLanguageChange(opt.value)}
                      className="peer sr-only"
                    />
                    <span className={`${CHIP} px-5 py-2.5 ${selected ? CHIP_ON : CHIP_OFF}`}>
                      {loc(language, opt.label)}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </section>

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
