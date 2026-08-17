import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Lang } from '../utils/i18n.ts';

const STORAGE_KEY = 'novex.lang';
const DEFAULT_LANG: Lang = 'ru';

interface LanguageContextValue {
  language: Lang;
  setLanguage: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANG,
  setLanguage: () => {},
});

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'ru' || saved === 'kk' || saved === 'en' ? saved : DEFAULT_LANG;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Lang>(readInitialLang);

  const setLanguage = (l: Lang) => {
    setLanguageState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
