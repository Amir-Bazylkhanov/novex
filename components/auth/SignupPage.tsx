import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Loader2, Lock, Mail, User, UserPlus } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';

const TITLE: Localized = {
  ru: 'Создайте аккаунт',
  kk: 'Тіркелгі жасаңыз',
  en: 'Create your account',
};
const SUBTITLE: Localized = {
  ru: 'Бесплатно для учеников и школ',
  kk: 'Оқушылар мен мектептерге тегін',
  en: 'Free for students and schools',
};
const NAME_LABEL: Localized = {
  ru: 'Имя и фамилия',
  kk: 'Аты-жөніңіз',
  en: 'Full name',
};
const EMAIL_LABEL: Localized = { ru: 'Email', kk: 'Email', en: 'Email' };
const PASSWORD_LABEL: Localized = {
  ru: 'Пароль',
  kk: 'Құпия сөз',
  en: 'Password',
};
const CONFIRM_LABEL: Localized = {
  ru: 'Повторите пароль',
  kk: 'Құпия сөзді қайталаңыз',
  en: 'Confirm password',
};
const SUBMIT: Localized = {
  ru: 'Зарегистрироваться',
  kk: 'Тіркелу',
  en: 'Create account',
};
const GOOGLE_BUTTON: Localized = {
  ru: 'Зарегистрироваться через Google',
  kk: 'Google арқылы тіркелу',
  en: 'Sign up with Google',
};
const OR_DIVIDER: Localized = { ru: 'или', kk: 'немесе', en: 'or' };
const SUBMIT_LOADING: Localized = {
  ru: 'Создаём аккаунт…',
  kk: 'Тіркелгі жасалуда…',
  en: 'Creating account…',
};
const HAVE_ACCOUNT: Localized = {
  ru: 'Уже есть аккаунт?',
  kk: 'Тіркелгіңіз бар ма?',
  en: 'Already have an account?',
};
const TO_LOGIN: Localized = { ru: 'Войти', kk: 'Кіру', en: 'Sign in' };
const ERR_NAME: Localized = {
  ru: 'Введите имя',
  kk: 'Атыңызды енгізіңіз',
  en: 'Enter your name',
};
const ERR_EMAIL: Localized = {
  ru: 'Введите корректный email',
  kk: 'Дұрыс email енгізіңіз',
  en: 'Enter a valid email address',
};
const ERR_PASSWORD: Localized = {
  ru: 'Пароль — минимум 8 символов',
  kk: 'Құпия сөз кемінде 8 таңбадан тұруы керек',
  en: 'Password must be at least 8 characters',
};
const ERR_CONFIRM: Localized = {
  ru: 'Пароли не совпадают',
  kk: 'Құпия сөздер сәйкес келмейді',
  en: 'Passwords do not match',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const LogoGlyph: React.FC = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 shrink-0" fill="none">
    <rect width="32" height="32" rx="8" className="fill-teal" />
    <path
      d="M10 23V9l12 14V9"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoogleIcon: React.FC = () => (
  <svg aria-hidden="true" viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

type SignupFields = { name?: string; email?: string; password?: string; confirm?: string };

const SignupPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [fieldErrors, setFieldErrors] = useState<SignupFields>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const errors: SignupFields = {};
    if (!name.trim()) errors.name = loc(language, ERR_NAME);
    if (!EMAIL_RE.test(email.trim())) errors.email = loc(language, ERR_EMAIL);
    if (password.length < 8) errors.password = loc(language, ERR_PASSWORD);
    if (confirm !== password || !confirm) errors.confirm = loc(language, ERR_CONFIRM);
    setFieldErrors(errors);
    if (errors.name || errors.email || errors.password || errors.confirm) return;

    setFormError(null);
    setSubmitting(true);
    try {
      const { error } = await signUp(email.trim(), password, name.trim());
      if (error) {
        setFormError(error);
        return;
      }
      navigate('/profile', { replace: true });
    } finally {
      setSubmitting(false);
    }
  };

  const onGoogle = async () => {
    if (googleLoading || submitting) return;
    setFormError(null);
    setGoogleLoading(true);
    const { error } = await signInWithGoogle();
    // On success the browser is redirected to Google, so only an error
    // needs handling here.
    if (error) {
      setFormError(error);
      setGoogleLoading(false);
    }
  };

  const inputClass = (invalid: boolean) =>
    `${FOCUS_RING} w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-base text-ink placeholder:text-slateink/60 transition-colors ${
      invalid ? 'border-coral' : 'border-line hover:border-teal/60'
    }`;

  const fields: Array<{
    id: string;
    label: Localized;
    icon: React.ComponentType<{ className?: string }>;
    type: string;
    autoComplete: string;
    value: string;
    onChange: (v: string) => void;
    errorKey: keyof SignupFields;
  }> = [
    {
      id: 'signup-name',
      label: NAME_LABEL,
      icon: User,
      type: 'text',
      autoComplete: 'name',
      value: name,
      onChange: setName,
      errorKey: 'name',
    },
    {
      id: 'signup-email',
      label: EMAIL_LABEL,
      icon: Mail,
      type: 'email',
      autoComplete: 'email',
      value: email,
      onChange: setEmail,
      errorKey: 'email',
    },
    {
      id: 'signup-password',
      label: PASSWORD_LABEL,
      icon: Lock,
      type: 'password',
      autoComplete: 'new-password',
      value: password,
      onChange: setPassword,
      errorKey: 'password',
    },
    {
      id: 'signup-confirm',
      label: CONFIRM_LABEL,
      icon: Lock,
      type: 'password',
      autoComplete: 'new-password',
      value: confirm,
      onChange: setConfirm,
      errorKey: 'confirm',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-canvas px-5 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center">
        <Link
          to="/"
          className={`${FOCUS_RING} mb-8 flex items-center gap-2 rounded-lg`}
          aria-label="Novex"
        >
          <LogoGlyph />
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            Novex
          </span>
        </Link>

        <div className="w-full rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.08)] sm:p-8">
          <div className="flex flex-col items-center text-center">
            <RobotAvatar robot="nov2" className="h-16 w-16" />
            <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {loc(language, TITLE)}
            </h1>
            <p className="mt-2 text-sm text-slateink">{loc(language, SUBTITLE)}</p>
          </div>

          {formError && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-medium text-coral"
            >
              {formError}
            </div>
          )}

          <button
            type="button"
            onClick={onGoogle}
            disabled={googleLoading || submitting}
            className={`${FOCUS_RING} mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-line bg-white px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-teal disabled:cursor-not-allowed disabled:opacity-70`}
          >
            {googleLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <GoogleIcon />
            )}
            {loc(language, GOOGLE_BUTTON)}
          </button>

          <div className="my-5 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-line/50" />
            <span className="text-sm text-slateink">{loc(language, OR_DIVIDER)}</span>
            <span className="h-px flex-1 bg-line/50" />
          </div>

          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
            {fields.map((f) => {
              const Icon = f.icon;
              const error = fieldErrors[f.errorKey];
              return (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-1.5 block text-sm font-semibold text-ink">
                    {loc(language, f.label)}
                  </label>
                  <div className="relative">
                    <Icon
                      className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slateink"
                      aria-hidden="true"
                    />
                    <input
                      id={f.id}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${f.id}-error` : undefined}
                      className={inputClass(Boolean(error))}
                    />
                  </div>
                  {error && (
                    <p id={`${f.id}-error`} className="mt-1.5 text-sm font-medium text-coral">
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={submitting}
              className={`${FOCUS_RING} mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {submitting ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <UserPlus className="h-5 w-5" aria-hidden="true" />
              )}
              {loc(language, submitting ? SUBMIT_LOADING : SUBMIT)}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slateink">
            {loc(language, HAVE_ACCOUNT)}{' '}
            <Link
              to="/login"
              className={`${FOCUS_RING} rounded font-semibold text-teal transition-colors hover:text-teal-dark`}
            >
              {loc(language, TO_LOGIN)}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
