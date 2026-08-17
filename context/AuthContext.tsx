import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { supabase } from '../services/supabaseClient.ts';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';

export type Role = 'student' | 'teacher' | 'admin';
export type Goal = 'ent' | 'olympiad' | 'revision' | 'admission';

export interface Profile {
  id: string;
  full_name: string | null;
  role: Role;
  grade: number | null;
  subjects: string[];
  goal: Goal | null;
  language: Lang;
  school: string | null;
  region: string | null;
}

interface AuthUser {
  id: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  profile: Profile | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<{ error: string | null }>;
  signUp(email: string, password: string, fullName: string): Promise<{ error: string | null }>;
  signInWithGoogle(): Promise<{ error: string | null }>;
  signOut(): Promise<void>;
  updateProfile(patch: Partial<Profile>): Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// ---------------------------------------------------------------------------
// localized, user-facing auth errors — never raw Supabase error codes
// ---------------------------------------------------------------------------
const ERR_INVALID_CREDENTIALS: Localized = {
  ru: 'Неверный email или пароль. Проверьте данные и попробуйте снова.',
  kk: 'Email немесе құпия сөз қате. Деректерді тексеріп, қайта көріңіз.',
  en: 'Incorrect email or password. Please check your details and try again.',
};

const ERR_EMAIL_TAKEN: Localized = {
  ru: 'Этот email уже зарегистрирован. Попробуйте войти.',
  kk: 'Бұл email тіркелген. Кіруге әрекеттеніңіз.',
  en: 'This email is already registered. Try signing in instead.',
};

const ERR_WEAK_PASSWORD: Localized = {
  ru: 'Пароль слишком простой. Используйте не менее 6 символов.',
  kk: 'Құпия сөз тым қарапайым. Кемінде 6 таңба қолданыңыз.',
  en: 'Password is too weak. Use at least 6 characters.',
};

const ERR_NETWORK: Localized = {
  ru: 'Нет соединения с сервером. Проверьте интернет и попробуйте снова.',
  kk: 'Сервермен байланыс жоқ. Интернетті тексеріп, қайта көріңіз.',
  en: 'Cannot reach the server. Check your connection and try again.',
};

const ERR_UNKNOWN: Localized = {
  ru: 'Что-то пошло не так. Попробуйте ещё раз.',
  kk: 'Бірдеңе дұрыс болмады. Қайтадан көріңіз.',
  en: 'Something went wrong. Please try again.',
};

/** Active UI language, read the same way LanguageContext initializes it. */
function activeLang(): Lang {
  try {
    const stored = window.localStorage.getItem('novex.lang');
    if (stored === 'ru' || stored === 'kk' || stored === 'en') return stored;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 'ru';
}

/** Map a Supabase auth failure to localized user-facing text. */
function mapAuthError(err: unknown): string {
  const lang = activeLang();
  const message = err instanceof Error ? err.message.toLowerCase() : '';
  if (message.includes('failed to fetch') || message.includes('network')) {
    return loc(lang, ERR_NETWORK);
  }
  if (message.includes('invalid login credentials')) {
    return loc(lang, ERR_INVALID_CREDENTIALS);
  }
  if (message.includes('already registered') || message.includes('already been registered')) {
    return loc(lang, ERR_EMAIL_TAKEN);
  }
  if (message.includes('password')) {
    return loc(lang, ERR_WEAK_PASSWORD);
  }
  return loc(lang, ERR_UNKNOWN);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    // initial session check
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!mountedRef.current) return;
        const sessionUser = data.session?.user ?? null;
        setUser(sessionUser ? { id: sessionUser.id, email: sessionUser.email ?? '' } : null);
      })
      .catch(() => {
        // keep user null; the app still renders signed-out
      })
      .finally(() => {
        if (mountedRef.current) setLoading(false);
      });

    // keep user in sync with auth events
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      const sessionUser = session?.user ?? null;
      setUser(sessionUser ? { id: sessionUser.id, email: sessionUser.email ?? '' } : null);
    });

    return () => {
      mountedRef.current = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  // load the profile row whenever the signed-in user changes
  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }
    let cancelled = false;
    supabase
      .from('profiles')
      .select('id, full_name, role, grade, subjects, goal, language, school, region')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        setProfile(data as Profile);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error ? mapAuthError(error) : null };
    } catch (err) {
      return { error: mapAuthError(err) };
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string, fullName: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      return { error: error ? mapAuthError(error) : null };
    } catch (err) {
      return { error: mapAuthError(err) };
    }
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      return { error: error ? mapAuthError(error) : null };
    } catch (err) {
      return { error: mapAuthError(err) };
    }
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setProfile(null);
  }, []);

  const updateProfile = useCallback(
    async (patch: Partial<Profile>) => {
      if (!user) return { error: loc(activeLang(), ERR_UNKNOWN) };
      try {
        const { error } = await supabase.from('profiles').update(patch).eq('id', user.id);
        if (error) return { error: mapAuthError(error) };
        setProfile((prev) => (prev ? { ...prev, ...patch } : prev));
        return { error: null };
      } catch (err) {
        return { error: mapAuthError(err) };
      }
    },
    [user],
  );

  return (
    <AuthContext.Provider
      value={{ user, profile, loading, signIn, signUp, signInWithGoogle, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
