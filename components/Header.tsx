import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

const NAV_LINKS: Array<{ href: string; label: Localized }> = [
  {
    href: '#robots',
    label: { ru: 'Роботы', kk: 'Роботтар', en: 'Robots' },
  },
  {
    href: '#how-it-works',
    label: { ru: 'Как это работает', kk: 'Қалай жұмыс істейді', en: 'How it works' },
  },
  {
    href: '#subjects',
    label: { ru: 'Предметы', kk: 'Пәндер', en: 'Subjects' },
  },
  {
    href: '#for-schools',
    label: { ru: 'Для школ', kk: 'Мектептерге', en: 'For schools' },
  },
  {
    href: '#faq',
    label: { ru: 'FAQ', kk: 'FAQ', en: 'FAQ' },
  },
];

const SIGN_IN: Localized = { ru: 'Войти', kk: 'Кіру', en: 'Sign in' };
const START_FREE: Localized = { ru: 'Начать бесплатно', kk: 'Тегін бастау', en: 'Start free' };
const OPEN_MENU: Localized = { ru: 'Открыть меню', kk: 'Мәзірді ашу', en: 'Open menu' };
const CLOSE_MENU: Localized = { ru: 'Закрыть меню', kk: 'Мәзірді жабу', en: 'Close menu' };

const LANGS: Array<{ code: Lang; short: string }> = [
  { code: 'ru', short: 'RU' },
  { code: 'kk', short: 'KK' },
  { code: 'en', short: 'EN' },
];

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const LogoGlyph: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className="h-8 w-8 shrink-0"
    fill="none"
  >
    <rect width="32" height="32" rx="8" className="fill-teal" />
    <path
      d="M10 23V9l12 14V9"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LanguageSwitcher: React.FC<{ onSwitch?: () => void }> = ({ onSwitch }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language / Тіл / Язык"
      className="flex items-center rounded-full border border-line/60 bg-white p-0.5"
    >
      {LANGS.map(({ code, short }) => (
        <button
          key={code}
          type="button"
          aria-pressed={language === code}
          onClick={() => {
            setLanguage(code);
            onSwitch?.();
          }}
          className={`${FOCUS_RING} rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            language === code
              ? 'bg-teal text-white'
              : 'text-slateink hover:text-teal'
          }`}
        >
          {short}
        </button>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line/50 bg-canvas/85 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-[0_1px_12px_rgba(17,26,42,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className={`${FOCUS_RING} flex items-center gap-2 rounded-lg`}
          aria-label="Novex"
        >
          <LogoGlyph />
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Novex
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${FOCUS_RING} rounded-lg px-3 py-2 text-sm font-medium text-slateink transition-colors hover:text-teal`}
            >
              {loc(language, link.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href="#cta"
            className={`${FOCUS_RING} rounded-xl px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-teal`}
          >
            {loc(language, SIGN_IN)}
          </a>
          <a
            href="#cta"
            className={`${FOCUS_RING} rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
          >
            {loc(language, START_FREE)}
          </a>
        </div>

        <button
          type="button"
          className={`${FOCUS_RING} rounded-lg p-2 text-ink lg:hidden`}
          aria-label={loc(language, menuOpen ? CLOSE_MENU : OPEN_MENU)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line/50 bg-canvas px-5 pb-6 pt-3 sm:px-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`${FOCUS_RING} rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:text-teal`}
              >
                {loc(language, link.label)}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <LanguageSwitcher onSwitch={closeMenu} />
            <a
              href="#cta"
              onClick={closeMenu}
              className={`${FOCUS_RING} rounded-xl border border-line bg-white px-4 py-2.5 text-center text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
            >
              {loc(language, SIGN_IN)}
            </a>
            <a
              href="#cta"
              onClick={closeMenu}
              className={`${FOCUS_RING} rounded-xl bg-teal px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
            >
              {loc(language, START_FREE)}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
