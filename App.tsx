import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from './components/LandingPage.tsx';
import PricingPage from './components/PricingPage.tsx';
import LoginPage from './components/auth/LoginPage.tsx';
import SignupPage from './components/auth/SignupPage.tsx';
import AuthCallback from './components/auth/AuthCallback.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import DiagnosticPage from './components/diagnostic/DiagnosticPage.tsx';
import DashboardPage from './components/dashboard/DashboardPage.tsx';
import LearnPage from './components/learn/LearnPage.tsx';
import LessonPage from './components/learn/LessonPage.tsx';
import TeacherLessonPage from './components/learn/TeacherLessonPage.tsx';
import TeacherPage from './components/teacher/TeacherPage.tsx';
import PlanPage from './components/plan/PlanPage.tsx';
import PracticePage from './components/practice/PracticePage.tsx';
import TutorChat from './components/chat/TutorChat.tsx';
import FeedbackWidget from './components/FeedbackWidget.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

const Shell: React.FC = () => {
  const { pathname } = useLocation();
  // Auth pages render their own chrome (own Novex wordmark), so no Header/Footer there.
  const bareRoute =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/auth/callback' ||
    pathname === '/onboarding';

  return (
    <>
      {!bareRoute && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/onboarding" element={<DiagnosticPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/class/:id" element={<TeacherLessonPage />} />
          <Route path="/learn/:slug" element={<LessonPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/practice" element={<PracticePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!bareRoute && <Footer />}
      {/* Tutor chat rides along on the app surfaces, not the marketing page. */}
      {!bareRoute && pathname !== '/' && <TutorChat />}
      {!bareRoute && pathname !== '/' && <FeedbackWidget />}
    </>
  );
};

const App: React.FC = () => {
  // Smooth scrolling for anchor navigation, disabled for reduced-motion users.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.documentElement.style.scrollBehavior = media.matches ? 'auto' : 'smooth';
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Shell />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
