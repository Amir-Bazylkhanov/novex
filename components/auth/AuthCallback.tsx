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

  useEffect(() => {
    let cancelled = false;
    const message = loc(language, ERR_EXCHANGE);

    const run = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      if (!code) {
        navigate('/login', { replace: true, state: { error: message } });
        return;
      }
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (cancelled) return;
      if (error) {
        navigate('/login', { replace: true, state: { error: message } });
      } else {
        navigate('/profile', { replace: true });
      }
    };
    void run();

    return () => {
      cancelled = true;
    };
  }, [language, navigate]);

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
