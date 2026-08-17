import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from './components/LandingPage.tsx';
import LoginPage from './components/auth/LoginPage.tsx';
import SignupPage from './components/auth/SignupPage.tsx';
import AuthCallback from './components/auth/AuthCallback.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

const Shell: React.FC = () => {
  const { pathname } = useLocation();
  // Auth pages render their own chrome (own Novex wordmark), so no Header/Footer there.
  const bareRoute =
    pathname === '/login' || pathname === '/signup' || pathname === '/auth/callback';

  return (
    <>
      {!bareRoute && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!bareRoute && <Footer />}
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
