// ============================================
// Подключение к базе данных Supabase.
// Здесь создаётся единый объект «supabase» — через него всё приложение
// (все сервисы из папки services/ и страницы) обращается к базе данных,
// входу в аккаунт и файловому хранилищу. Настройки авторизации
// (запоминание сессии, вход через Google) задаются один раз именно тут.
// ============================================
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
// Настройки входа в аккаунт: запоминать сессию и обновлять её автоматически.
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      // The OAuth callback is completed explicitly in components/auth/AuthCallback.tsx.
      detectSessionInUrl: false,
      // Required. Without this supabase-js defaults to the implicit flow, which
      // returns the session in the URL *hash* — so AuthCallback's ?code= lookup
      // found nothing and every Google sign-in failed. PKCE returns ?code=,
      // which exchangeCodeForSession() expects, and is the recommended flow
      // for browser apps.
      flowType: 'pkce',
    },
  },
);
