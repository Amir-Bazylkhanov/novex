import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  Cog,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

// Вкладка «Аналитика» в личном кабинете: плитки с общими цифрами (XP, уроки,
// новасы, дни с нами) и лента последних операций с новасами под ними.

/* --- content --- */

const SECTION_TITLE: Localized = { ru: 'Аналитика', kk: 'Аналитика', en: 'Analytics' };
const STAT_XP: Localized = { ru: 'Всего XP', kk: 'Жалпы XP', en: 'Total XP' };
const STAT_LESSONS: Localized = {
  ru: 'Уроков пройдено',
  kk: 'Аяқталған сабақтар',
  en: 'Lessons completed',
};
const STAT_NOVAS: Localized = {
  ru: 'Новасов заработано',
  kk: 'Жиналған Новас',
  en: 'Novas earned',
};
const STAT_DAYS: Localized = { ru: 'Дней с нами', kk: 'Бізбен бірге күн', en: 'Days with us' };

const FEED_TITLE: Localized = {
  ru: 'Лента активности',
  kk: 'Әрекеттер таспасы',
  en: 'Activity feed',
};
const FEED_EMPTY: Localized = {
  ru: 'Пока пусто — новасы за уроки и диагностику появятся здесь.',
  kk: 'Әзірге бос — сабақтар мен диагностика үшін берілетін новастар осында көрінеді.',
  en: 'Nothing here yet — novas for lessons and the diagnostic will appear in this feed.',
};

const TX_WELCOME: Localized = {
  ru: 'Бонус за регистрацию',
  kk: 'Тіркелу бонусы',
  en: 'Sign-up bonus',
};
const TX_DIAGNOSTIC: Localized = {
  ru: 'Диагностика пройдена',
  kk: 'Диагностика аяқталды',
  en: 'Diagnostic completed',
};
const TX_LESSON: Localized = { ru: 'Урок пройден', kk: 'Сабақ аяқталды', en: 'Lesson completed' };
const TX_TUTOR: Localized = {
  ru: 'Чат с Академиком',
  kk: 'Академикпен чат',
  en: 'Chat with the Academic',
};
const TX_REFUND: Localized = {
  ru: 'Возврат Новасов',
  kk: 'Новас қайтарылды',
  en: 'Novas refunded',
};
const TX_UNKNOWN: Localized = {
  ru: 'Операция с Новасами',
  kk: 'Новас операциясы',
  en: 'Nova transaction',
};

const REL_TODAY: Localized = { ru: 'сегодня', kk: 'бүгін', en: 'today' };
const REL_YESTERDAY: Localized = { ru: 'вчера', kk: 'кеше', en: 'yesterday' };
const REL_DAYS_AGO: Localized = {
  ru: '{n} {word} назад',
  kk: '{n} күн бұрын',
  en: '{n} {word} ago',
};

const DATE_LOCALE: Record<Lang, string> = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' };

/* --- data --- */

export interface NovaTransactionRow {
  amount: number;
  action_type: string;
  description: string | null;
  created_at: string;
}

interface AnalyticsSectionProps {
  totalXp: number;
  lessonsDone: number;
  daysWithUs: number | null;
  transactions: NovaTransactionRow[];
}

// Подбирает правильное слово «день/дня/дней» под число — в русском и
// казахском склонение отличается от английского.
const daysWord = (lang: Lang, days: number): string => {
  if (lang === 'kk') return 'күн';
  if (lang === 'en') return days === 1 ? 'day' : 'days';
  const mod10 = days % 10;
  const mod100 = days % 100;
  if (mod10 === 1 && mod100 !== 11) return 'день';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'дня';
  return 'дней';
};

// Подставляет значения вместо плейсхолдеров вида {n} в строке перевода.
const fill = (template: string, vars: Record<string, string | number>): string =>
  Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template,
  );

// По типу операции (action_type из базы) подбирает понятную подпись для ленты:
// бонус за регистрацию, диагностику, урок, чат с Академиком или возврат.
const txLabel = (language: Lang, tx: NovaTransactionRow): string => {
  if (tx.action_type === 'welcome') return loc(language, TX_WELCOME);
  if (tx.action_type === 'diagnostic') return loc(language, TX_DIAGNOSTIC);
  if (tx.action_type.startsWith('lesson_')) return loc(language, TX_LESSON);
  if (tx.action_type === 'tutor_chat') return loc(language, TX_TUTOR);
  if (tx.action_type.startsWith('refund')) return loc(language, TX_REFUND);
  return loc(language, TX_UNKNOWN);
};

/* "today" / "yesterday" / "n days ago", then a plain date past a week. */
// «сегодня» / «вчера» / «N дней назад», а после недели — обычная дата.
const relativeDate = (language: Lang, iso: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thatDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((today.getTime() - thatDay.getTime()) / 86_400_000);
  if (diffDays <= 0) return loc(language, REL_TODAY);
  if (diffDays === 1) return loc(language, REL_YESTERDAY);
  if (diffDays < 7) {
    return fill(loc(language, REL_DAYS_AGO), { n: diffDays, word: daysWord(language, diffDays) });
  }
  return date.toLocaleDateString(DATE_LOCALE[language], { day: 'numeric', month: 'long' });
};

/* --- shared classes --- */

const HEADING_ICON = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg';

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  totalXp,
  lessonsDone,
  daysWithUs,
  transactions,
}) => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const novasEarned = transactions.reduce((sum, tx) => sum + (tx.amount > 0 ? tx.amount : 0), 0);

  const tiles: Array<{ key: string; Icon: LucideIcon; label: Localized; value: number }> = [
    { key: 'xp', Icon: Zap, label: STAT_XP, value: totalXp },
    { key: 'lessons', Icon: BookOpenCheck, label: STAT_LESSONS, value: lessonsDone },
    { key: 'novas', Icon: Cog, label: STAT_NOVAS, value: novasEarned },
    ...(daysWithUs !== null
      ? [{ key: 'days', Icon: CalendarDays, label: STAT_DAYS, value: daysWithUs }]
      : []),
  ];

  const fadeUp = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
  };

  return (
    <section aria-labelledby="analytics-heading" className="mt-8">
      <div className="flex items-center gap-3">
        <span className={`${HEADING_ICON} bg-mist/40`}>
          <BarChart3 className="h-5 w-5 text-teal-dark" aria-hidden="true" />
        </span>
        <h2
          id="analytics-heading"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          {loc(language, SECTION_TITLE)}
        </h2>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((tile, index) => (
          <motion.div
            key={tile.key}
            {...fadeUp}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.05 }}
            className="rounded-xl border border-line/50 bg-white px-4 py-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
          >
            <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slateink">
              <tile.Icon className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              {loc(language, tile.label)}
            </dt>
            <dd className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-ink">
              {tile.value}
            </dd>
          </motion.div>
        ))}
      </dl>

      <motion.div
        {...fadeUp}
        transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
        className="mt-6 rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
      >
        <h3 className="font-display text-base font-bold tracking-tight text-ink">
          {loc(language, FEED_TITLE)}
        </h3>
        {transactions.length === 0 ? (
          <p className="mt-4 text-sm text-slateink">{loc(language, FEED_EMPTY)}</p>
        ) : (
          <ul className="mt-4 divide-y divide-line/40">
            {transactions.map((tx, index) => (
              <li key={`${tx.created_at}-${index}`} className="flex items-center gap-3 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist/40">
                  <Cog className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                  {txLabel(language, tx)}
                </span>
                <span className="shrink-0 text-right">
                  <span
                    className={`block font-display text-sm font-bold ${
                      tx.amount >= 0 ? 'text-teal' : 'text-coral'
                    }`}
                  >
                    {tx.amount >= 0 ? `+${tx.amount}` : `−${Math.abs(tx.amount)}`}
                  </span>
                  <span className="block text-xs text-slateink">
                    {relativeDate(language, tx.created_at)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
};

export default AnalyticsSection;
