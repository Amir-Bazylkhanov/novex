import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Loader2, Lock, LogIn, Mail } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';

const TITLE: Localized = {
  ru: 'С возвращением',
  kk: 'Қайта келгеніңізбен',
  en: 'Welcome back',
};
const SUBTITLE: Localized = {
  ru: 'Войдите, чтобы продолжить обучение',
  kk: 'Оқуды жалғастыру үшін кіріңіз',
  en: 'Sign in to continue learning',
};
const EMAIL_LABEL: Localized = { ru: 'Email', kk: 'Email', en: 'Email' };
const PASSWORD_LABEL: Localized = {
  ru: 'Пароль',
  kk: 'Құпия сөз',
  en: 'Password',
};
const SUBMIT: Localized = { ru: 'Войти', kk: 'Кіру', en: 'Sign in' };
const GOOGLE_BUTTON: Localized = {
  ru: 'Войти через Google',
  kk: 'Google арқылы кіру',
  en: 'Continue with Google',
};
const OR_DIVIDER: Localized = { ru: 'или', kk: 'немесе', en: 'or' };
const SUBMIT_LOADING: Localized = {
  ru: 'Входим…',
  kk: 'Кіру…',
  en: 'Signing in…',
};
const NO_ACCOUNT: Localized = {
  ru: 'Нет аккаунта?',
  kk: 'Тіркелгіңіз жоқ па?',
  en: 'No account yet?',
};
const TO_SIGNUP: Localized = {
  ru: 'Зарегистрироваться',
  kk: 'Тіркелу',
  en: 'Sign up',
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

const LoginPage: React.FC = () => {
  const { language } = useLanguage();
  const { user, signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(
    () => (location.state as { error?: string } | null)?.error ?? null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const errors: { email?: string; password?: string } = {};
    if (!EMAIL_RE.test(email.trim())) errors.email = loc(language, ERR_EMAIL);
    if (password.length < 8) errors.password = loc(language, ERR_PASSWORD);
    setFieldErrors(errors);
    if (errors.email || errors.password) return;

    setFormError(null);
    setSubmitting(true);
    try {
      const { error } = await signIn(email.trim(), password);
      if (error) {
        setFormError(error);
        return;
      }
      const state = location.state as { from?: { pathname?: string } | string } | null;
      const from = typeof state?.from === 'string' ? state.from : state?.from?.pathname;
      navigate(from ?? '/profile', { replace: true });
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
            <div>
              <label
                htmlFor="login-email"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                {loc(language, EMAIL_LABEL)}
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slateink"
                  aria-hidden="true"
                />
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'login-email-error' : undefined}
                  className={inputClass(Boolean(fieldErrors.email))}
                />
              </div>
              {fieldErrors.email && (
                <p id="login-email-error" className="mt-1.5 text-sm font-medium text-coral">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                {loc(language, PASSWORD_LABEL)}
              </label>
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slateink"
                  aria-hidden="true"
                />
                <input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={Boolean(fieldErrors.password)}
                  aria-describedby={fieldErrors.password ? 'login-password-error' : undefined}
                  className={inputClass(Boolean(fieldErrors.password))}
                />
              </div>
              {fieldErrors.password && (
                <p id="login-password-error" className="mt-1.5 text-sm font-medium text-coral">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`${FOCUS_RING} mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {submitting ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <LogIn className="h-5 w-5" aria-hidden="true" />
              )}
              {loc(language, submitting ? SUBMIT_LOADING : SUBMIT)}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slateink">
            {loc(language, NO_ACCOUNT)}{' '}
            <Link
              to="/signup"
              className={`${FOCUS_RING} rounded font-semibold text-teal transition-colors hover:text-teal-dark`}
            >
              {loc(language, TO_SIGNUP)}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
