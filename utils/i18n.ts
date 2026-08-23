// Маленькая утилита для мультиязычности (i18n = internationalization).
// Lang — список языков сайта: русский, казахский, английский.
// Localized — объект с текстом одной и той же фразы на всех трёх языках.
// Функция loc() выбирает нужный вариант текста по текущему языку.
// Используется во всём приложении вместе с useLanguage() из context/LanguageContext.tsx.
export type Lang = 'ru' | 'kk' | 'en';

export interface Localized {
  ru: string;
  kk: string;
  en: string;
}

/** Pick the string for the active language. Falls back kk → ru → en. */
export function loc(lang: Lang, text: Localized): string {
  if (lang === 'ru') return text.ru;
  if (lang === 'kk') return text.kk || text.ru;
  return text.en;
}
