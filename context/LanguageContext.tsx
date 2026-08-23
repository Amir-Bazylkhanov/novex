// Контекст языка интерфейса — отвечает за переключение сайта между
// тремя языками: русский (ru), казахский (kk), английский (en).
// Выбор пользователя запоминается в браузере (localStorage), поэтому
// при следующем визите сайт откроется на том же языке.
// Используется в App.tsx и почти во всех компонентах через хук useLanguage().
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Lang } from '../utils/i18n.ts';

// Ключ, под которым выбранный язык хранится в памяти браузера.
const STORAGE_KEY = 'novex.lang';
// Язык по умолчанию для новых посетителей.
const DEFAULT_LANG: Lang = 'ru';

interface LanguageContextValue {
  language: Lang;
  setLanguage: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANG,
  setLanguage: () => {},
});

// Читаем ранее сохранённый язык из памяти браузера; если там ничего
// нет или значение непонятное — используем язык по умолчанию.
function readInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'ru' || saved === 'kk' || saved === 'en' ? saved : DEFAULT_LANG;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Lang>(readInitialLang);

  // Переключение языка: обновляем состояние (интерфейс перерисуется)
  // и сохраняем выбор в браузере, чтобы он не сбросился после перезагрузки.
  const setLanguage = (l: Lang) => {
    setLanguageState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  // Прописываем язык в HTML-атрибуте страницы — важно для правильного
  // произношения экранными дикторами и для поисковых систем.
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
