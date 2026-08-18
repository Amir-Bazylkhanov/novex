import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  LogOut,
  Map,
  Menu,
  Tag,
  TrendingUp,
  User,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import LoginRequiredModal from './auth/LoginRequiredModal.tsx';
import NovaBadge from './NovaBadge.tsx';
import NotificationsBell from './NotificationsBell.tsx';

const APP_NAV_LINKS: Array<{
  to: string;
  label: Localized;
  icon: LucideIcon;
}> = [
  {
    to: '/dashboard',
    label: { ru: 'Прогресс', kk: 'Үдеріс', en: 'Progress' },
    icon: TrendingUp,
  },
  {
    to: '/learn',
    label: { ru: 'Уроки', kk: 'Сабақтар', en: 'Lessons' },
    icon: BookOpen,
  },
  {
    to: '/practice',
    label: { ru: 'Практика', kk: 'Практика', en: 'Practice' },
    icon: ClipboardList,
  },
  {
    to: '/plan',
    label: { ru: 'План', kk: 'Жоспар', en: 'Plan' },
    icon: Map,
  },
  {
    to: '/teacher',
    label: { ru: 'Для учителя', kk: 'Мұғалімге', en: 'For teachers' },
    icon: Users,
  },
];

const PRICING_LABEL: Localized = { ru: 'Тарифы', kk: 'Тарифтер', en: 'Pricing' };
const START_FREE: Localized = { ru: 'Начать бесплатно', kk: 'Тегін бастау', en: 'Start free' };
const SIGN_OUT: Localized = { ru: 'Выйти', kk: 'Шығу', en: 'Sign out' };
const PROFILE_LABEL: Localized = { ru: 'Личный кабинет', kk: 'Жеке кабинет', en: 'Profile' };
const PROFILE_MENU_LABEL: Localized = { ru: 'Профиль', kk: 'Профиль', en: 'Profile' };
const LANGUAGE_LABEL: Localized = { ru: 'Язык', kk: 'Тіл', en: 'Language' };
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
  // Signed-in users get their choice saved to the profile row, so it follows
  // the account to another browser or device. Signed-out visitors fall back to
  // the localStorage persistence inside LanguageContext.
  const { user, updateProfile } = useAuth();
  return (
    <div
      role="group"
      aria-label="Language / Тіл / Язык"
      className="inline-flex items-center rounded-full border border-line/60 bg-white p-0.5"
    >
      {LANGS.map(({ code, short }) => (
        <button
          key={code}
          type="button"
          aria-pressed={language === code}
          onClick={() => {
            setLanguage(code);
            if (user) void updateProfile({ language: code });
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
  const { user, profile, signOut } = useAuth();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [avatarBroken, setAvatarBroken] = useState(false);
  /** App route a signed-out visitor tried to open; non-null shows the login modal. */
  const [loginPromptPath, setLoginPromptPath] = useState<string | null>(null);
  const closeLoginPrompt = useCallback(() => setLoginPromptPath(null), []);

  const isAppActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  const firstName = profile?.full_name?.trim().split(/\s+/)[0] ?? '';
  const avatarInitial = (firstName || user?.email || '?').charAt(0).toUpperCase();
  const avatarUrl = avatarBroken ? null : (profile?.avatar_url ?? null);

  useEffect(() => {
    setAvatarBroken(false);
  }, [profile?.avatar_url]);

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

  useEffect(() => {
    if (!profileMenuOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProfileMenuOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [profileMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
      className={`sticky top-0 z-50 border-b border-line/50 bg-canvas/85 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-[0_1px_12px_rgba(17,26,42,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`${FOCUS_RING} flex items-center gap-2 rounded-lg`}
          aria-label="Novex"
        >
          <LogoGlyph />
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Novex
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {/* App tabs are visible to everyone. Signed-in users navigate; signed-out
              visitors get the login modal instead. */}
          {APP_NAV_LINKS.map((link) => {
            const active = isAppActive(link.to);
            const className = `${FOCUS_RING} rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              active ? 'bg-teal/10 text-teal-dark' : 'text-slateink hover:text-teal'
            }`;
            return user ? (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={className}
              >
                {loc(language, link.label)}
              </Link>
            ) : (
              <button
                key={link.to}
                type="button"
                onClick={() => setLoginPromptPath(link.to)}
                className={className}
              >
                {loc(language, link.label)}
              </button>
            );
          })}
          {/* Signed-out visitors get a Pricing tab as the last nav item. Unlike
              the app tabs it links straight to the public page — no login modal.
              Signed-in users reach pricing via the Nova badge and footer. */}
          {!user && (
            <Link
              to="/pricing"
              aria-current={isAppActive('/pricing') ? 'page' : undefined}
              className={`${FOCUS_RING} rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isAppActive('/pricing') ? 'bg-teal/10 text-teal-dark' : 'text-slateink hover:text-teal'
              }`}
            >
              {loc(language, PRICING_LABEL)}
            </Link>
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <NovaBadge />
              <NotificationsBell />
              <div className="relative" ref={profileMenuRef}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={profileMenuOpen}
                  aria-label={loc(language, PROFILE_LABEL)}
                  onClick={() => setProfileMenuOpen((open) => !open)}
                  className={`${FOCUS_RING} flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-semibold text-ink transition-colors hover:text-teal`}
                >
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt=""
                      onError={() => setAvatarBroken(true)}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-white"
                    >
                      {avatarInitial}
                    </span>
                  )}
                  {firstName || user.email}
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {profileMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-line bg-white py-1 shadow-lg"
                  >
                    <Link
                      to="/profile"
                      role="menuitem"
                      onClick={() => setProfileMenuOpen(false)}
                      className={`${FOCUS_RING} flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slateink transition-colors hover:text-teal`}
                    >
                      <User className="h-4 w-4" aria-hidden="true" />
                      {loc(language, PROFILE_MENU_LABEL)}
                    </Link>
                    <div className="my-1 border-t border-line" aria-hidden="true" />
                    <div className="flex items-center justify-between gap-2 px-4 py-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slateink">
                        {loc(language, LANGUAGE_LABEL)}
                      </span>
                      <LanguageSwitcher />
                    </div>
                    <div className="my-1 border-t border-line" aria-hidden="true" />
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        void signOut();
                      }}
                      className={`${FOCUS_RING} flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium text-slateink transition-colors hover:text-coral`}
                    >
                      <LogOut className="h-4 w-4" aria-hidden="true" />
                      {loc(language, SIGN_OUT)}
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <LanguageSwitcher />
              <Link
                to="/signup"
                className={`${FOCUS_RING} rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
              >
                {loc(language, START_FREE)}
              </Link>
            </>
          )}
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
            {APP_NAV_LINKS.map((link) => {
              const active = isAppActive(link.to);
              const Icon = link.icon;
              const className = `${FOCUS_RING} flex items-center gap-3 rounded-xl px-3 py-3 text-left text-base font-medium transition-colors active:bg-mist/60 ${
                active ? 'bg-mist/40 text-teal-dark' : 'text-ink'
              }`;
              const rowContent = (
                <>
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                  {loc(language, link.label)}
                  <ChevronRight
                    aria-hidden="true"
                    className="ml-auto h-4 w-4 shrink-0 text-slateink"
                  />
                </>
              );
              return user ? (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={className}
                >
                  {rowContent}
                </Link>
              ) : (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => {
                    closeMenu();
                    setLoginPromptPath(link.to);
                  }}
                  className={className}
                >
                  {rowContent}
                </button>
              );
            })}
            {user && (
              <Link
                to="/profile"
                onClick={closeMenu}
                aria-current={isAppActive('/profile') ? 'page' : undefined}
                className={`${FOCUS_RING} flex items-center gap-3 rounded-xl px-3 py-3 text-left text-base font-medium transition-colors active:bg-mist/60 ${
                  isAppActive('/profile') ? 'bg-mist/40 text-teal-dark' : 'text-ink'
                }`}
              >
                <User aria-hidden="true" className="h-5 w-5 shrink-0" />
                {loc(language, PROFILE_MENU_LABEL)}
                <ChevronRight
                  aria-hidden="true"
                  className="ml-auto h-4 w-4 shrink-0 text-slateink"
                />
              </Link>
            )}
            {/* Signed-out: Pricing as the last nav row, straight to the public
                page — no login modal, unlike the app rows above. */}
            {!user && (
              <Link
                to="/pricing"
                onClick={closeMenu}
                aria-current={isAppActive('/pricing') ? 'page' : undefined}
                className={`${FOCUS_RING} flex items-center gap-3 rounded-xl px-3 py-3 text-left text-base font-medium transition-colors active:bg-mist/60 ${
                  isAppActive('/pricing') ? 'bg-mist/40 text-teal-dark' : 'text-ink'
                }`}
              >
                <Tag aria-hidden="true" className="h-5 w-5 shrink-0" />
                {loc(language, PRICING_LABEL)}
                <ChevronRight
                  aria-hidden="true"
                  className="ml-auto h-4 w-4 shrink-0 text-slateink"
                />
              </Link>
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <>
                {/* Same px-3 as the nav rows above, so the compact pill group
                    aligns with them instead of stretching full-width. */}
                <div className="flex items-center justify-between px-3">
                  <LanguageSwitcher onSwitch={closeMenu} />
                  <div className="flex items-center gap-3">
                    <NovaBadge />
                    <NotificationsBell />
                  </div>
                </div>
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className={`${FOCUS_RING} flex items-center justify-center gap-2 rounded-xl bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt=""
                      onError={() => setAvatarBroken(true)}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-teal"
                    >
                      {avatarInitial}
                    </span>
                  )}
                  {firstName || user.email}
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    void signOut();
                  }}
                  aria-label={loc(language, SIGN_OUT)}
                  className={`${FOCUS_RING} flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  {loc(language, SIGN_OUT)}
                </button>
              </>
            ) : (
              <>
                {/* Signed-out: lang pill alone on its own row, unchanged. */}
                <div className="px-3">
                  <LanguageSwitcher onSwitch={closeMenu} />
                </div>
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className={`${FOCUS_RING} rounded-xl bg-teal px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                >
                  {loc(language, START_FREE)}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      </header>

      {/* Rendered outside <header>: its backdrop-blur creates a containing block
          that would break the modal's fixed positioning. */}
      <LoginRequiredModal
        open={loginPromptPath !== null}
        intendedPath={loginPromptPath}
        onClose={closeLoginPrompt}
      />
    </>
  );
};

export default Header;
