import React from 'react';
import { Link } from 'react-router-dom';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { RobotAvatar } from './robots/RobotAvatars.tsx';

const TAGLINE: Localized = {
  ru: 'Персональное образование для каждого ученика Казахстана',
  kk: 'Қазақстанның әр оқушысына арналған жеке білім',
  en: 'Personalised education for every student in Kazakhstan',
};

const MISSION: Localized = {
  ru: 'ИИ-платформа, которая выравнивает доступ к качественному образованию — независимо от школы и региона.',
  kk: 'Мектеп пен өңірге қарамастан сапалы білімге қолжетімділікті теңестіретін ИИ-платформа.',
  en: 'An AI platform that equalises access to quality education — regardless of school or region.',
};

const LINKS: Array<{ to: string; label: Localized }> = [
  { to: '/pricing', label: { ru: 'Тарифы', kk: 'Тарифтер', en: 'Pricing' } },
  { to: '/faq', label: { ru: 'Частые вопросы', kk: 'Жиі қойылатын сұрақтар', en: 'FAQ' } },
];

const CONTACT_US: Localized = {
  ru: 'Связаться с нами',
  kk: 'Бізбен байланысу',
  en: 'Contact us',
};

const HACKATHON: Localized = {
  ru: 'Future Minds Hackathon 2026 · Social Impact',
  kk: 'Future Minds Hackathon 2026 · Social Impact',
  en: 'Future Minds Hackathon 2026 · Social Impact',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8" fill="none">
                <rect width="32" height="32" rx="8" className="fill-teal" />
                <path
                  d="M10 23V9l12 14V9"
                  stroke="white"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-xl font-extrabold tracking-tight">Novex</span>
            </div>
            <p className="mt-4 max-w-xs font-display text-sm font-semibold text-canvas">
              {loc(language, TAGLINE)}
            </p>
            <p className="mt-2 max-w-xs text-sm text-canvas/70">{loc(language, MISSION)}</p>
            <div className="mt-5 flex items-center gap-2.5">
              <RobotAvatar robot="nov1" className="h-9 w-9" />
              <RobotAvatar robot="nov2" className="h-9 w-9" />
              <RobotAvatar robot="nov3" className="h-9 w-9" />
            </div>
          </div>

          <nav aria-label="Footer" className="md:justify-self-end lg:mt-14">
            <ul className="flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`${FOCUS_RING} rounded text-sm text-canvas/80 transition-colors hover:text-teal-light`}
                  >
                    {loc(language, link.label)}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('novex:open-feedback'))}
                  className={`${FOCUS_RING} rounded text-sm text-canvas/80 transition-colors hover:text-teal-light`}
                >
                  {loc(language, CONTACT_US)}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-canvas/15 pt-6">
          <p className="text-sm text-canvas/70">© 2026 Novex</p>
        </div>

        <p className="mt-6 text-xs text-canvas/50">{loc(language, HACKATHON)}</p>
      </div>
    </footer>
  );
};

export default Footer;
