// Всплывающее окно «Нужен аккаунт».
// Показывается, когда незарегистрированный посетитель пытается открыть раздел,
// доступный только с аккаунтом (уроки, прогресс, панель учителя).
// Предлагает войти или зарегистрироваться и запоминает, куда пользователь
// хотел попасть, чтобы после входа вернуть его туда.
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';

const TITLE: Localized = {
  ru: 'Нужен аккаунт',
  kk: 'Тіркелгі қажет',
  en: 'Sign in required',
};
const BODY: Localized = {
  ru: 'Прогресс, уроки и панель учителя доступны с аккаунтом. Он бесплатный — регистрация занимает минуту.',
  kk: 'Үдеріс, сабақтар және мұғалім панелі тіркелгі арқылы қолжетімді. Ол тегін — тіркелу бір минут алады.',
  en: 'Progress, lessons and the teacher panel need an account. It is free — signing up takes a minute.',
};
const SIGN_IN: Localized = { ru: 'Войти', kk: 'Кіру', en: 'Sign in' };
const SIGN_UP: Localized = { ru: 'Зарегистрироваться', kk: 'Тіркелу', en: 'Sign up' };

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

interface LoginRequiredModalProps {
  open: boolean;
  /** Where the visitor wanted to go; forwarded to /login and /signup so auth returns them there. */
  intendedPath: string | null;
  onClose: () => void;
}

const LoginRequiredModal: React.FC<LoginRequiredModalProps> = ({
  open,
  intendedPath,
  onClose,
}) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const primaryRef = useRef<HTMLButtonElement | null>(null);
  /** Element that opened the dialog — focus returns here on close. */
  const triggerRef = useRef<HTMLElement | null>(null);

  // Пока окно открыто: блокируем прокрутку страницы, переносим фокус на главную
  // кнопку и следим за клавиатурой (Escape закрывает окно, Tab не даёт фокусу
  // выйти за пределы окна). При закрытии всё возвращаем, как было.
  useEffect(() => {
    if (!open) return;
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    primaryRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialog.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
      triggerRef.current = null;
    };
  }, [open, onClose]);

  // Переход на страницу входа или регистрации. Вместе с переходом запоминаем,
  // куда пользователь хотел попасть, чтобы после входа вернуть его туда.
  const goToAuth = (path: '/login' | '/signup') => {
    onClose();
    // LoginPage reads location.state.from after a successful sign-in and lands
    // the user there — the same shape ProtectedRoute passes.
    navigate(path, intendedPath ? { state: { from: { pathname: intendedPath } } } : undefined);
  };

  const scrimMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
  };
  const dialogMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, y: 16, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 8, scale: 0.98 },
        transition: { duration: 0.2 },
      };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          {...scrimMotion}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
        >
          <motion.div
            {...dialogMotion}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-required-title"
            className="w-full max-w-sm rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.18)] sm:p-8"
          >
            <div className="flex flex-col items-center text-center">
              <RobotAvatar robot="nov2" className="h-14 w-14" />
              <h2
                id="login-required-title"
                className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink"
              >
                {loc(language, TITLE)}
              </h2>
              <p className="mt-2 text-sm text-slateink">{loc(language, BODY)}</p>
            </div>

            <button
              ref={primaryRef}
              type="button"
              onClick={() => goToAuth('/login')}
              className={`${FOCUS_RING} mt-6 inline-flex w-full items-center justify-center rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
            >
              {loc(language, SIGN_IN)}
            </button>
            <button
              type="button"
              onClick={() => goToAuth('/signup')}
              className={`${FOCUS_RING} mt-3 inline-flex w-full items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              {loc(language, SIGN_UP)}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginRequiredModal;
