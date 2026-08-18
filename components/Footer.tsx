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

const COLUMNS: Array<{ title: Localized; links: Array<{ href: string; label: Localized }> }> = [
  {
    title: { ru: 'Продукт', kk: 'Өнім', en: 'Product' },
    links: [
      { href: '#features', label: { ru: 'Возможности', kk: 'Мүмкіндіктер', en: 'Features' } },
      { href: '#subjects', label: { ru: 'Предметы', kk: 'Пәндер', en: 'Subjects' } },
      { href: '#dashboard', label: { ru: 'Кабинет ученика', kk: 'Оқушы кабинеті', en: 'Student dashboard' } },
      { href: '/pricing', label: { ru: 'Тарифы', kk: 'Тарифтер', en: 'Pricing' } },
    ],
  },
  {
    title: { ru: 'Для школ', kk: 'Мектептерге', en: 'For schools' },
    links: [
      { href: '#for-schools', label: { ru: 'Панель учителя', kk: 'Мұғалім панелі', en: 'Teacher panel' } },
      { href: '#pricing', label: { ru: 'Бесплатно для школ', kk: 'Мектептерге тегін', en: 'Free for schools' } },
      { href: '#impact', label: { ru: 'Социальный эффект', kk: 'Әлеуметтік әсер', en: 'Social impact' } },
    ],
  },
  {
    title: { ru: 'Поддержка', kk: 'Қолдау', en: 'Support' },
    links: [
      { href: '/faq', label: { ru: 'Частые вопросы', kk: 'Жиі қойылатын сұрақтар', en: 'FAQ' } },
      { href: '#how-it-works', label: { ru: 'Как это работает', kk: 'Қалай жұмыс істейді', en: 'How it works' } },
      { href: 'mailto:amirbazylkhanov@gmail.com', label: { ru: 'Связаться с нами', kk: 'Бізбен байланысу', en: 'Contact us' } },
    ],
  },
];

const CONTACT: Localized = {
  ru: 'Вопросы и подключение школ:',
  kk: 'Сұрақтар және мектептерді қосу:',
  en: 'Questions and school onboarding:',
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
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

          {COLUMNS.map((col) => (
            <nav key={col.title.en} aria-label={loc(language, col.title)}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-canvas/60">
                {loc(language, col.title)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label.en}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className={`${FOCUS_RING} rounded text-sm text-canvas/80 transition-colors hover:text-teal-light`}
                      >
                        {loc(language, link.label)}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={`${FOCUS_RING} rounded text-sm text-canvas/80 transition-colors hover:text-teal-light`}
                      >
                        {loc(language, link.label)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-canvas/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 text-sm text-canvas/70 sm:flex-row sm:items-center sm:gap-4">
            <span>© 2026 Novex</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span>
              {loc(language, CONTACT)}{' '}
              <a
                href="mailto:amirbazylkhanov@gmail.com"
                className={`${FOCUS_RING} rounded text-teal-light transition-colors hover:text-canvas`}
              >
                amirbazylkhanov@gmail.com
              </a>
            </span>
          </div>

        </div>

        <p className="mt-6 text-xs text-canvas/50">{loc(language, HACKATHON)}</p>
      </div>
    </footer>
  );
};

export default Footer;
