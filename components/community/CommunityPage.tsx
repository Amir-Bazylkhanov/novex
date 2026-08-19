import React, { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, Hash, Loader2, MessagesSquare } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import RobotBackdrop from '../RobotBackdrop.tsx';
import ChannelView from './ChannelView.tsx';
import { fetchChannels, type CommunityChannel } from '../../services/communityService.ts';

const KICKER: Localized = {
  ru: 'Сообщество Novex',
  kk: 'Novex қауымдастығы',
  en: 'Novex community',
};
const PAGE_TITLE: Localized = {
  ru: 'Сообщество',
  kk: 'Қауымдастық',
  en: 'Community',
};
const PAGE_SUBTITLE: Localized = {
  ru: 'Задавайте вопросы, делитесь идеями и помогайте друг другу.',
  kk: 'Сұрақтар қойыңыз, идеялармен бөлісіңіз және бір-біріңізге көмектесіңіз.',
  en: 'Ask questions, share ideas and help each other.',
};
const CHANNELS_LABEL: Localized = {
  ru: 'Каналы',
  kk: 'Арналар',
  en: 'Channels',
};
const CHANNEL_SELECT_LABEL: Localized = {
  ru: 'Выберите канал',
  kk: 'Арнаны таңдаңыз',
  en: 'Select a channel',
};
const LOADING: Localized = {
  ru: 'Загрузка…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};
const LOAD_ERROR: Localized = {
  ru: 'Не удалось загрузить каналы.',
  kk: 'Арналарды жүктеу сәтсіз аяқталды.',
  en: 'Could not load the channels.',
};
const RETRY: Localized = {
  ru: 'Повторить',
  kk: 'Қайталау',
  en: 'Retry',
};
const EMPTY_CHANNELS: Localized = {
  ru: 'Пока нет каналов.',
  kk: 'Әзірге арналар жоқ.',
  en: 'No channels yet.',
};
const EMPTY_SELECT: Localized = {
  ru: 'Выберите канал слева, чтобы начать общение.',
  kk: 'Сөйлесуді бастау үшін сол жақтан арнаны таңдаңыз.',
  en: 'Pick a channel on the left to start chatting.',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CommunityPage: React.FC = () => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [channels, setChannels] = useState<CommunityChannel[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const list = await fetchChannels();
      setChannels(list);
      setActiveId((prev) =>
        prev && list.some((c) => c.id === prev) ? prev : (list[0]?.id ?? null),
      );
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const active = channels.find((c) => c.id === activeId) ?? null;

  const fadeUp = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5 },
  } as const;

  return (
    <main className="relative min-h-screen bg-canvas font-sans text-ink">
      <RobotBackdrop density="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <section id="community" aria-labelledby="community-heading">
          <motion.div {...fadeUp} className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal sm:h-14 sm:w-14"
            >
              <MessagesSquare className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, KICKER)}
              </p>
              <h1
                id="community-heading"
                className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                {loc(language, PAGE_TITLE)}
              </h1>
              <p className="mt-2 text-sm text-slateink">{loc(language, PAGE_SUBTITLE)}</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-6">
            {loading ? (
              <div
                role="status"
                className="flex h-64 items-center justify-center rounded-2xl border border-line/60 bg-white/80"
              >
                <Loader2 className="h-8 w-8 animate-spin text-teal" aria-hidden="true" />
                <span className="sr-only">{loc(language, LOADING)}</span>
              </div>
            ) : error ? (
              <div
                role="alert"
                className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-line/60 bg-white/80 px-6 text-center"
              >
                <AlertCircle className="h-8 w-8 text-coral" aria-hidden="true" />
                <p className="text-sm text-slateink">{loc(language, LOAD_ERROR)}</p>
                <button
                  type="button"
                  onClick={() => void load()}
                  className={`${FOCUS_RING} rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark`}
                >
                  {loc(language, RETRY)}
                </button>
              </div>
            ) : channels.length === 0 ? (
              <div className="flex h-64 items-center justify-center rounded-2xl border border-line/60 bg-white/80 px-6 text-center">
                <p className="text-sm text-slateink">{loc(language, EMPTY_CHANNELS)}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4 lg:flex-row">
                {/* Mobile: channel picker as a select above the chat. */}
                <div className="lg:hidden">
                  <label htmlFor="community-channel-select" className="sr-only">
                    {loc(language, CHANNEL_SELECT_LABEL)}
                  </label>
                  <select
                    id="community-channel-select"
                    value={activeId ?? ''}
                    onChange={(e) => setActiveId(e.target.value)}
                    className={`${FOCUS_RING} w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink`}
                  >
                    {channels.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Desktop: sidebar with the channel list. */}
                <aside
                  className="hidden w-72 shrink-0 lg:block"
                  aria-label={loc(language, CHANNELS_LABEL)}
                >
                  <div className="rounded-2xl border border-line/60 bg-white/80 p-3 backdrop-blur-sm">
                    <h2 className="px-2 pb-2 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                      {loc(language, CHANNELS_LABEL)}
                    </h2>
                    <ul className="space-y-1">
                      {channels.map((c) => {
                        const isActive = c.id === activeId;
                        return (
                          <li key={c.id}>
                            <button
                              type="button"
                              onClick={() => setActiveId(c.id)}
                              aria-current={isActive ? 'page' : undefined}
                              className={`${FOCUS_RING} w-full rounded-xl px-3 py-2.5 text-left transition-colors ${
                                isActive
                                  ? 'bg-teal/10 text-teal-dark'
                                  : 'text-ink hover:bg-mist/30'
                              }`}
                            >
                              <span className="flex items-center gap-2 text-sm font-semibold">
                                <Hash
                                  aria-hidden="true"
                                  className={`h-4 w-4 shrink-0 ${isActive ? 'text-teal' : 'text-slateink'}`}
                                />
                                <span className="truncate">{c.name}</span>
                              </span>
                              {c.description && (
                                <span className="mt-0.5 block truncate pl-6 text-xs text-slateink">
                                  {c.description}
                                </span>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </aside>

                {/* Main channel view. key= remounts on channel switch so the
                    realtime subscription and message state reset cleanly. */}
                <div className="min-w-0 flex-1">
                  <div className="flex h-[calc(100dvh-16rem)] min-h-[26rem] flex-col overflow-hidden rounded-2xl border border-line/60 bg-white/80 backdrop-blur-sm">
                    {active ? (
                      <ChannelView key={active.id} channel={active} />
                    ) : (
                      <div className="flex flex-1 items-center justify-center px-6 text-center">
                        <p className="text-sm text-slateink">{loc(language, EMPTY_SELECT)}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default CommunityPage;
