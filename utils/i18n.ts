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
