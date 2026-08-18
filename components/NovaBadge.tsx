import React, { useEffect, useState } from 'react';
import { Cog } from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import { fetchNovaBalance } from '../services/novasService.ts';

const NOVAS_LABEL: Localized = {
  ru: 'Новасы — валюта Novex',
  kk: 'Новасылар — Novex валютасы',
  en: 'Novas — the Novex currency',
};

const EARN_HEADING: Localized = {
  ru: 'Как получить:',
  kk: 'Қалай алуға болады:',
  en: 'How to earn:',
};

const EARN_SIGNUP: Localized = {
  ru: '+100 при регистрации',
  kk: '+100 тіркелгеніңіз үшін',
  en: '+100 for signing up',
};

const EARN_DIAGNOSTIC: Localized = {
  ru: '+50 за первую диагностику',
  kk: '+50 алғашқы диагностика үшін',
  en: '+50 for the first diagnostic',
};

const EARN_LESSON: Localized = {
  ru: '+20 за каждый пройденный урок',
  kk: '+20 әр өткен сабақ үшін',
  en: '+20 for each completed lesson',
};

const EARN_PRO: Localized = {
  ru: '+500 каждый месяц с подпиской Про',
  kk: 'Про жазылымымен ай сайын +500',
  en: '+500 every month with a Pro subscription',
};

const SPEND_HEADING: Localized = {
  ru: 'На что тратить:',
  kk: 'Неге жұмсауға болады:',
  en: 'What to spend on:',
};

const SPEND_MENTOR: Localized = {
  ru: 'Вопросы Наставнику в ИИ-чате (1–5 ⚙ за сообщение в зависимости от модели)',
  kk: 'ЖИ-чаттағы Тәлімгерге сұрақтар (модельге байланысты бір хабарламаға 1–5 ⚙)',
  en: 'Questions to the Mentor in the AI chat (1–5 ⚙ per message depending on the model)',
};

const REFRESH_MS = 60_000;

const NovaBadge: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const [balance, setBalance] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      setBalance(null);
      return;
    }
    let cancelled = false;
    const load = async () => {
      const value = await fetchNovaBalance();
      if (!cancelled && value !== null) setBalance(value);
    };
    void load();
    const interval = window.setInterval(() => void load(), REFRESH_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [user]);

  if (!user || balance === null) return null;

  const earnItems = [EARN_SIGNUP, EARN_DIAGNOSTIC, EARN_LESSON, EARN_PRO];
  const spendItems = [SPEND_MENTOR];

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false);
      }}
    >
      <span
        tabIndex={0}
        aria-label={loc(language, NOVAS_LABEL)}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink"
      >
        <Cog className="h-4 w-4 text-teal" aria-hidden="true" />
        {balance}
      </span>
      {open && (
        <span
          role="tooltip"
          className="absolute right-0 top-full z-50 mt-2 block w-72 rounded-xl border border-line bg-white p-4 text-left text-xs font-normal text-ink shadow-lg"
        >
          <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Cog className="h-4 w-4 text-teal" aria-hidden="true" />
            {loc(language, NOVAS_LABEL)}
          </span>
          <span className="mt-3 block font-semibold text-ink">
            {loc(language, EARN_HEADING)}
          </span>
          <span className="mt-1 block">
            {earnItems.map((item) => (
              <span key={item.ru} className="block text-slateink">
                {loc(language, item)}
              </span>
            ))}
          </span>
          <span className="mt-3 block font-semibold text-ink">
            {loc(language, SPEND_HEADING)}
          </span>
          <span className="mt-1 block">
            {spendItems.map((item) => (
              <span key={item.ru} className="block text-slateink">
                {loc(language, item)}
              </span>
            ))}
          </span>
        </span>
      )}
    </span>
  );
};

export default NovaBadge;
