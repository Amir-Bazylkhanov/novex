import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bell, BellRing, BookOpen, Check, Cog, Loader2, Sparkles } from 'lucide-react';
import { loc, type Lang, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import {
  disablePush,
  enablePush,
  fetchNotifications,
  getPushSubscription,
  isPushSupported,
  markAllRead,
  markRead,
  type NotificationRow,
} from '../services/notificationsService.ts';

const BELL_LABEL: Localized = { ru: 'Уведомления', kk: 'Хабарландырулар', en: 'Notifications' };
const MARK_ALL: Localized = { ru: 'Прочитать все', kk: 'Барлығын оқу', en: 'Mark all read' };
const EMPTY: Localized = {
  ru: 'Пока нет уведомлений',
  kk: 'Әзірге хабарландыру жоқ',
  en: 'No notifications yet',
};

const WELCOME_TEXT: Localized = {
  ru: 'Добро пожаловать! Вам начислено {amount} новасов',
  kk: 'Қош келдіңіз! Сізге {amount} новасы берілді',
  en: 'Welcome! You have been granted {amount} Novas',
};
const LESSON_REWARD_TEXT: Localized = {
  ru: 'Урок пройден: +{amount} новасов',
  kk: 'Сабақ аяқталды: +{amount} новасы',
  en: 'Lesson completed: +{amount} Novas',
};
const DIAGNOSTIC_REWARD_TEXT: Localized = {
  ru: 'Диагностика пройдена: +{amount} новасов',
  kk: 'Диагностика аяқталды: +{amount} новасы',
  en: 'Diagnostic completed: +{amount} Novas',
};
const NEW_MODULE_TEXT: Localized = {
  ru: 'Новый модуль: {title}',
  kk: 'Жаңа модуль: {title}',
  en: 'New module: {title}',
};

const TIME_JUST_NOW: Localized = { ru: 'только что', kk: 'жаңа ғана', en: 'just now' };
const TIME_MIN: Localized = { ru: '{n} мин назад', kk: '{n} мин бұрын', en: '{n} min ago' };
const TIME_HOUR: Localized = { ru: '{n} ч назад', kk: '{n} сағ бұрын', en: '{n} h ago' };
const TIME_DAY: Localized = { ru: '{n} д назад', kk: '{n} күн бұрын', en: '{n} d ago' };

const PUSH_LABEL: Localized = {
  ru: 'Получать push-уведомления',
  kk: 'Push-хабарландыруларды алу',
  en: 'Receive push notifications',
};
const PUSH_ENABLE: Localized = { ru: 'Включить', kk: 'Қосу', en: 'Enable' };
const PUSH_ENABLED: Localized = { ru: 'Включены', kk: 'Қосылған', en: 'Enabled' };
const PUSH_DISABLE: Localized = { ru: 'Выключить', kk: 'Өшіру', en: 'Disable' };
const PUSH_DENIED_HINT: Localized = {
  ru: 'Разрешите уведомления в настройках браузера',
  kk: 'Браузер параметрлерінде хабарландыруларға рұқсат беріңіз',
  en: 'Allow notifications in your browser settings',
};

const POLL_MS = 60_000;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

function relativeTime(iso: string, language: Lang): string {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return loc(language, TIME_JUST_NOW);
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return loc(language, TIME_MIN).replace('{n}', String(minutes));
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return loc(language, TIME_HOUR).replace('{n}', String(hours));
  return loc(language, TIME_DAY).replace('{n}', String(Math.floor(hours / 24)));
}

/** Localized text built from kind + payload; null means "use the stored title". */
function localizedText(row: NotificationRow): Localized | null {
  const amount = typeof row.payload.amount === 'number' ? row.payload.amount : null;
  const moduleTitle = typeof row.payload.title === 'string' ? row.payload.title : null;
  switch (row.kind) {
    case 'welcome':
      return amount === null
        ? null
        : {
            ru: WELCOME_TEXT.ru.replace('{amount}', String(amount)),
            kk: WELCOME_TEXT.kk.replace('{amount}', String(amount)),
            en: WELCOME_TEXT.en.replace('{amount}', String(amount)),
          };
    case 'lesson_reward':
      return amount === null
        ? null
        : {
            ru: LESSON_REWARD_TEXT.ru.replace('{amount}', String(amount)),
            kk: LESSON_REWARD_TEXT.kk.replace('{amount}', String(amount)),
            en: LESSON_REWARD_TEXT.en.replace('{amount}', String(amount)),
          };
    case 'diagnostic_reward':
      return amount === null
        ? null
        : {
            ru: DIAGNOSTIC_REWARD_TEXT.ru.replace('{amount}', String(amount)),
            kk: DIAGNOSTIC_REWARD_TEXT.kk.replace('{amount}', String(amount)),
            en: DIAGNOSTIC_REWARD_TEXT.en.replace('{amount}', String(amount)),
          };
    case 'new_module':
      return moduleTitle === null
        ? null
        : {
            ru: NEW_MODULE_TEXT.ru.replace('{title}', moduleTitle),
            kk: NEW_MODULE_TEXT.kk.replace('{title}', moduleTitle),
            en: NEW_MODULE_TEXT.en.replace('{title}', moduleTitle),
          };
    default:
      return null;
  }
}

const KindIcon: React.FC<{ kind: string }> = ({ kind }) => {
  const className = 'h-4 w-4 text-teal';
  if (kind === 'new_module') return <BookOpen className={className} aria-hidden="true" />;
  if (kind === 'welcome') return <Sparkles className={className} aria-hidden="true" />;
  return <Cog className={className} aria-hidden="true" />;
};

const NotificationsBell: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<NotificationRow[]>([]);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pushSupported = isPushSupported();
  const [pushEnabled, setPushEnabled] = useState(false);
  const [pushLoading, setPushLoading] = useState(false);
  const [pushDenied, setPushDenied] = useState(false);

  const unreadCount = rows.filter((row) => row.read_at === null).length;

  useEffect(() => {
    if (!user) {
      setRows([]);
      return;
    }
    let cancelled = false;
    const load = async () => {
      const data = await fetchNotifications(20);
      if (!cancelled) setRows(data);
    };
    void load();
    const interval = window.setInterval(() => void load(), POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [user]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!user || !pushSupported) return;
    let cancelled = false;
    void getPushSubscription().then((subscription) => {
      if (!cancelled) setPushEnabled(subscription !== null);
    });
    return () => {
      cancelled = true;
    };
  }, [user, pushSupported]);

  if (!user) return null;

  const openRow = (row: NotificationRow) => {
    if (row.read_at === null) {
      void markRead(row.id);
      const now = new Date().toISOString();
      setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, read_at: now } : r)));
    }
    setOpen(false);
    if (row.action_url) navigate(row.action_url);
  };

  const readAll = () => {
    void markAllRead();
    const now = new Date().toISOString();
    setRows((prev) => prev.map((r) => ({ ...r, read_at: r.read_at ?? now })));
  };

  const togglePush = async () => {
    setPushLoading(true);
    try {
      if (pushEnabled) {
        await disablePush();
        setPushEnabled(false);
      } else {
        const result = await enablePush();
        if (result === 'enabled') {
          setPushEnabled(true);
          setPushDenied(false);
        } else if (result === 'denied') {
          setPushDenied(true);
        }
      }
    } finally {
      setPushLoading(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={loc(language, BELL_LABEL)}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`${FOCUS_RING} relative rounded-xl p-2 text-slateink transition-colors hover:text-teal`}
      >
        <Bell className="h-5 w-5" aria-hidden="true" />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-teal px-1 text-[10px] font-bold text-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-line bg-white shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-line/60 px-4 py-3">
              <span className="font-display text-sm font-bold text-ink">
                {loc(language, BELL_LABEL)}
              </span>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={readAll}
                  className={`${FOCUS_RING} rounded-lg text-xs font-semibold text-teal transition-colors hover:text-teal-dark`}
                >
                  {loc(language, MARK_ALL)}
                </button>
              )}
            </div>
            <div className="max-h-80 overflow-y-auto">
              {rows.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-slateink">
                  {loc(language, EMPTY)}
                </p>
              ) : (
                <ul>
                  {rows.map((row) => {
                    const text = localizedText(row);
                    return (
                      <li key={row.id}>
                        <button
                          type="button"
                          onClick={() => openRow(row)}
                          className={`${FOCUS_RING} flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-mist/20 ${
                            row.read_at === null ? 'bg-mist/30' : ''
                          }`}
                        >
                          <span className="mt-0.5 shrink-0">
                            <KindIcon kind={row.kind} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-ink">
                              {text ? loc(language, text) : row.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-slateink">
                              {relativeTime(row.created_at, language)}
                            </span>
                          </span>
                          {row.read_at === null && (
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal"
                            />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {pushSupported && (
              <div className="border-t border-line px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <BellRing className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span className="min-w-0 flex-1 text-xs font-medium text-ink">
                    {loc(language, PUSH_LABEL)}
                  </span>
                  {pushLoading ? (
                    <Loader2 className="h-4 w-4 shrink-0 animate-spin text-teal" aria-hidden="true" />
                  ) : pushEnabled ? (
                    <>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-slateink">
                        <Check className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                        {loc(language, PUSH_ENABLED)}
                      </span>
                      <button
                        type="button"
                        onClick={() => void togglePush()}
                        className={`${FOCUS_RING} shrink-0 rounded-lg text-xs font-semibold text-slateink transition-colors hover:text-ink`}
                      >
                        {loc(language, PUSH_DISABLE)}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => void togglePush()}
                      className={`${FOCUS_RING} shrink-0 rounded-lg text-xs font-semibold text-teal transition-colors hover:text-teal-dark`}
                    >
                      {loc(language, PUSH_ENABLE)}
                    </button>
                  )}
                </div>
                {pushDenied && !pushEnabled && (
                  <p className="mt-1 text-xs text-slateink">{loc(language, PUSH_DENIED_HINT)}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationsBell;
