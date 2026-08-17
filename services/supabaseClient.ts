import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
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
