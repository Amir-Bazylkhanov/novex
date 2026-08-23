// «Охранник» закрытых страниц. Оборачивает разделы, доступные только после входа.
// Логика такая: пока проверяем вход — показываем индикатор загрузки;
// не вошёл — отправляем на страницу входа; вошедший ученик, ещё не прошедший
// стартовую диагностику, — на онбординг; все остальные проходят дальше.
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';

const LOADING: Localized = {
  ru: 'Загрузка…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};

const ProtectedRoute: React.FC = () => {
  const { language } = useLanguage();
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div
        role="status"
        className="flex min-h-screen items-center justify-center bg-canvas"
      >
        <Loader2 className="h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <span className="sr-only">{loc(language, LOADING)}</span>
      </div>
    );
  }

  if (!user) {
    // Не вошёл — на страницу входа; запоминаем, куда шёл, чтобы вернуть его туда после входа.
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // First-time students must finish the diagnostic before the rest of the app
  // (teachers and admins never do). Wait until the profile row has actually
  // arrived (null = still loading); /onboarding itself is exempt, or the
  // redirect would loop.
  if (
    profile &&
    profile.role === 'student' &&
    !profile.onboarded &&
    location.pathname !== '/onboarding'
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
