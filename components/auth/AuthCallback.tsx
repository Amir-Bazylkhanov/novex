// Техническая страница (маршрут /auth/callback), на которую Google возвращает
// пользователя после входа через Google. Здесь временный код из адреса страницы
// обменивается на полноценную сессию в Supabase, при необходимости применяется
// роль, выбранная при регистрации, и пользователь переносится в профиль.
// Обычно пользователь видит здесь только спиннер «Выполняется вход…».
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../services/supabaseClient.ts';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const SIGNING_IN: Localized = {
  ru: 'Выполняется вход…',
  kk: 'Кіру орындалуда…',
  en: 'Signing you in…',
};
const ERR_EXCHANGE: Localized = {
  ru: 'Не удалось завершить вход через Google. Попробуйте ещё раз.',
  kk: 'Google арқылы кіруді аяқтау мүмкін болмады. Қайтадан көріңіз.',
  en: 'Could not finish signing in with Google. Please try again.',
};

// The supabase client is configured with detectSessionInUrl: false, so the
// ?code= parameter from the OAuth redirect is NOT handled automatically —
// this page completes the PKCE flow by exchanging the code explicitly.
const AuthCallback: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // При открытии страницы один раз завершаем вход: обмениваем временный код
  // на сессию, применяем роль, выбранную при регистрации, и перенаправляем.
  useEffect(() => {
    let cancelled = false;
    const message = loc(language, ERR_EXCHANGE);

    const run = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      if (!code) {
        navigate('/login', { replace: true, state: { error: message } });
        return;
      }
      // SignupPage stashes the role picked before the OAuth redirect; read and
      // clear it up front so it is removed in every outcome below.
      let pendingRole: string | null = null;
      try {
        pendingRole = window.localStorage.getItem('novex.pendingRole');
        window.localStorage.removeItem('novex.pendingRole');
      } catch {
        // localStorage unavailable — nothing to apply
      }
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (cancelled) return;
      if (error) {
        navigate('/login', { replace: true, state: { error: message } });
      } else {
        // The signup trigger defaults everyone to student, so a pending
        // teacher choice is applied to the profile here. Errors are ignored —
        // the profile may already be a teacher.
        if (pendingRole === 'teacher' && data.session?.user) {
          await supabase
            .from('profiles')
            .update({ role: 'teacher', onboarded: true })
            .eq('id', data.session.user.id);
        }
        if (cancelled) return;
        navigate('/profile', { replace: true });
      }
    };
    void run();

    return () => {
      cancelled = true;
    };
  }, [language, navigate]);

  // Пока идёт обмен кода на сессию, пользователь видит только спиннер
  // и надпись «Выполняется вход…».
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-5">
      <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
      <p role="status" className="mt-4 text-base text-slateink">
        {loc(language, SIGNING_IN)}
      </p>
    </main>
  );
};

export default AuthCallback;
