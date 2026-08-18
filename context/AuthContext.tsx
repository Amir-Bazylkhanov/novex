import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { supabase } from '../services/supabaseClient.ts';
import type { TutorModel } from '../services/aiService.ts';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import { useLanguage } from './LanguageContext.tsx';

export type Role = 'student' | 'teacher' | 'admin';
export type Goal = 'ent' | 'olympiad' | 'revision' | 'admission';

const GOAL_VALUES: readonly Goal[] = ['ent', 'olympiad', 'revision', 'admission'];

/** Optional exam scores from the exam_scores jsonb column (empty keys omitted). */
export interface ExamScores {
  ent?: number;
  sat?: number;
  ielts?: number;
}

export interface Profile {
  id: string;
  full_name: string | null;
  role: Role;
  grade: number | null;
  subjects: string[];
  /** Legacy single goal — kept in sync with goals[0] on save. */
  goal: Goal | null;
  /** All selected goals from the goals text[] column. */
  goals: Goal[];
  language: Lang;
  school: string | null;
  region: string | null;
  avatar_url: string | null;
  /** Exam / goal deadline from the exam_date column (snake_case in the DB). */
  examDate: string | null;
  /** Exam scores from the exam_scores jsonb column. */
  examScores: ExamScores;
  /** Tutor chat model from the preferred_model column. */
  preferredModel: TutorModel | null;
  onboarded: boolean;
}

interface AuthUser {
  id: string;
  email: string;
  /** Photo from the OAuth provider (Google), if the session carries one. */
  providerAvatar: string | null;
}

/** Map a Supabase session user to our lighter AuthUser shape. */
const toAuthUser = (u: {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
}): AuthUser => {
  const meta = u.user_metadata ?? {};
  const pick = (key: string): string | null =>
    typeof meta[key] === 'string' && meta[key] ? (meta[key] as string) : null;
  return {
    id: u.id,
    email: u.email ?? '',
    providerAvatar: pick('avatar_url') ?? pick('picture'),
  };
};

/** Avatars the user uploaded live in our own bucket; Google's must not clobber them. */
const isUploadedAvatar = (url: string | null): boolean =>
  !!url && url.includes('/storage/v1/object/public/avatars/');

interface AuthContextValue {
  user: AuthUser | null;
  profile: Profile | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<{ error: string | null }>;
  signUp(
    email: string,
    password: string,
    fullName: string,
    role: 'student' | 'teacher',
  ): Promise<{ error: string | null; needsConfirmation: boolean }>;
  signInWithGoogle(): Promise<{ error: string | null }>;
  signOut(): Promise<void>;
  updateProfile(patch: Partial<Profile>): Promise<{ error: string | null }>;
  uploadAvatar(file: File): Promise<{ error: string | null; url: string | null }>;
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

const ERR_NOT_IMAGE: Localized = {
  ru: 'Можно загрузить только файл изображения.',
  kk: 'Тек сурет файлын жүктеуге болады.',
  en: 'Only image files can be uploaded.',
};

const ERR_IMAGE_TOO_BIG: Localized = {
  ru: 'Фото слишком большое. Максимальный размер — 2 МБ.',
  kk: 'Сурет тым үлкен. Ең үлкен өлшемі — 2 МБ.',
  en: 'The photo is too large. Maximum size is 2 MB.',
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
  const { setLanguage } = useLanguage();
  /** Which user's saved language has already been applied this session. */
  const appliedLangForUserRef = useRef<string | null>(null);

  useEffect(() => {
    mountedRef.current = true;

    // initial session check
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!mountedRef.current) return;
        const sessionUser = data.session?.user ?? null;
        setUser(sessionUser ? toAuthUser(sessionUser) : null);
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
      setUser(sessionUser ? toAuthUser(sessionUser) : null);
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
      .select(
        'id, full_name, role, grade, subjects, goal, goals, language, school, region, avatar_url, exam_date, exam_scores, preferred_model, onboarded',
      )
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        const { exam_date, exam_scores, preferred_model, goals, ...rest } = data as Omit<
          Profile,
          'examDate' | 'examScores' | 'preferredModel' | 'goals'
        > & {
          exam_date: string | null;
          exam_scores: ExamScores | null;
          preferred_model: TutorModel | null;
          goals: string[] | null;
        };
        // goals is backfilled from the legacy goal server-side; stay defensive
        // and fall back to the single goal if the array ever comes back empty.
        const cleanGoals = (goals ?? []).filter((g): g is Goal =>
          GOAL_VALUES.includes(g as Goal),
        );
        const loaded: Profile = {
          ...rest,
          goals: cleanGoals.length > 0 ? cleanGoals : rest.goal ? [rest.goal] : [],
          examDate: exam_date ?? null,
          examScores: exam_scores ?? {},
          preferredModel: preferred_model ?? null,
        };
        setProfile(loaded);
        // Apply the language saved on the account, so the choice follows the
        // user to another browser or device. Guarded by a ref so it runs once
        // per user — otherwise it would fight the header switcher, which writes
        // the opposite direction, and the two would loop.
        if (appliedLangForUserRef.current !== loaded.id) {
          appliedLangForUserRef.current = loaded.id;
          if (loaded.language) setLanguage(loaded.language);
        }

        // Keep the Google photo current on every sign-in. Google rotates these
        // URLs when the user changes their picture, and the signup trigger only
        // ever fires once, so without this the avatar goes stale (or stays null
        // for accounts created before avatar_url existed).
        // A photo the user uploaded themselves always wins — never overwrite it.
        const fromGoogle = user.providerAvatar;
        if (fromGoogle && !isUploadedAvatar(loaded.avatar_url) && loaded.avatar_url !== fromGoogle) {
          void supabase
            .from('profiles')
            .update({ avatar_url: fromGoogle })
            .eq('id', loaded.id)
            .then(({ error: syncError }) => {
              if (cancelled || syncError) return;
              setProfile((prev) => (prev ? { ...prev, avatar_url: fromGoogle } : prev));
            });
        }
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

  const signUp = useCallback(
    async (email: string, password: string, fullName: string, role: 'student' | 'teacher') => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName, role } },
        });
        return {
          error: error ? mapAuthError(error) : null,
          // With email confirmation enabled Supabase returns a user but no
          // session — the user must click the link in their inbox first.
          needsConfirmation: !error && !data.session,
        };
      } catch (err) {
        return { error: mapAuthError(err), needsConfirmation: false };
      }
    },
    [],
  );

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
        // camelCase keys map to snake_case columns; everything else already
        // matches its column name. Saving goals also rewrites the legacy
        // single-goal column as goals[0] ?? null for compatibility.
        const { examDate, examScores, preferredModel, goals, ...rest } = patch;
        const row: Record<string, unknown> = { ...rest };
        if (examDate !== undefined) row.exam_date = examDate;
        if (examScores !== undefined) row.exam_scores = examScores;
        if (preferredModel !== undefined) row.preferred_model = preferredModel;
        if (goals !== undefined) {
          row.goals = goals;
          row.goal = goals[0] ?? null;
        }
        const { error } = await supabase.from('profiles').update(row).eq('id', user.id);
        if (error) return { error: mapAuthError(error) };
        setProfile((prev) => {
          if (!prev) return prev;
          const next = { ...prev, ...patch };
          if (goals !== undefined) next.goal = goals[0] ?? null;
          return next;
        });
        return { error: null };
      } catch (err) {
        return { error: mapAuthError(err) };
      }
    },
    [user],
  );

  const uploadAvatar = useCallback(
    async (file: File): Promise<{ error: string | null; url: string | null }> => {
      const lang = activeLang();
      if (!user) return { error: loc(lang, ERR_UNKNOWN), url: null };
      if (!file.type.startsWith('image/')) return { error: loc(lang, ERR_NOT_IMAGE), url: null };
      if (file.size > 2 * 1024 * 1024) {
        return { error: loc(lang, ERR_IMAGE_TOO_BIG), url: null };
      }
      try {
        // timestamped name so the CDN never serves the previous avatar
        const ext =
          (file.name.split('.').pop() ?? '').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
        const path = `${user.id}/${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(path, file, { upsert: true });
        if (uploadError) return { error: mapAuthError(uploadError), url: null };
        const { data } = supabase.storage.from('avatars').getPublicUrl(path);
        const { error: profileError } = await updateProfile({ avatar_url: data.publicUrl });
        if (profileError) return { error: profileError, url: null };
        return { error: null, url: data.publicUrl };
      } catch (err) {
        return { error: mapAuthError(err), url: null };
      }
    },
    [user, updateProfile],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        uploadAvatar,
      }}
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
