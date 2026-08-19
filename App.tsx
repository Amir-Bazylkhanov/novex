import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from './components/LandingPage.tsx';
import PricingPage from './components/PricingPage.tsx';
import FaqPage from './components/FaqPage.tsx';
import LoginPage from './components/auth/LoginPage.tsx';
import SignupPage from './components/auth/SignupPage.tsx';
import AuthCallback from './components/auth/AuthCallback.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import DiagnosticPage from './components/diagnostic/DiagnosticPage.tsx';
import DashboardPage from './components/dashboard/DashboardPage.tsx';
import LearnPage from './components/learn/LearnPage.tsx';
import PlanetPage from './components/learn/PlanetPage.tsx';
import AcademyLessonPage from './components/learn/AcademyLessonPage.tsx';
import LessonPage from './components/learn/LessonPage.tsx';
import TeacherLessonPage from './components/learn/TeacherLessonPage.tsx';
import TeacherPage from './components/teacher/TeacherPage.tsx';
import PlanPage from './components/plan/PlanPage.tsx';
import PracticePage from './components/practice/PracticePage.tsx';
import CommunityPage from './components/community/CommunityPage.tsx';
import CareerTestPage from './components/career/CareerTestPage.tsx';
import TutorChat from './components/chat/TutorChat.tsx';
import FeedbackWidget from './components/FeedbackWidget.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

// Route changes should start at the top of the new page; hash navigation is
// left to the browser/anchor logic. scroll-behavior: smooth on the document
// element (see App) would otherwise animate this jump, so override per-call.
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
};

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
      <ScrollToTop />
      {!bareRoute && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/onboarding" element={<DiagnosticPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/class/:id" element={<TeacherLessonPage />} />
          <Route path="/learn/p/:planet" element={<PlanetPage />} />
          <Route path="/learn/p/:planet/:sectionIndex" element={<AcademyLessonPage />} />
          <Route path="/learn/:slug" element={<LessonPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/career" element={<CareerTestPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!bareRoute && <Footer />}
      {/* Tutor chat rides along on the app surfaces, not the marketing page. */}
      {!bareRoute && pathname !== '/' && <TutorChat />}
      {/* Feedback modal is available everywhere (landing included); the landing
          hides the floating button — its footer opens the modal via an event. */}
      {!bareRoute && <FeedbackWidget hideFab={pathname === '/'} />}
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
