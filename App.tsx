import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from './components/LandingPage.tsx';

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
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
