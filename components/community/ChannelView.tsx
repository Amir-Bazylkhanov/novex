// Один открытый канал сообщества: шапка, список сообщений и поле ввода.
// Подписан на изменения базы Supabase в реальном времени — новые сообщения
// и реакции появляются сразу, без обновления страницы. Открывается из
// CommunityPage; отдельные сообщения рисует MessageItem, поле ввода —
// MessageComposer, окно жалобы — ReportModal.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, Hash, Loader2, MessagesSquare } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import {
  deleteMessage,
  fetchAuthors,
  fetchMessages,
  fetchReactionsFor,
  IMAGE_FALLBACK_CONTENT,
  sendMessage,
  toggleReaction,
  uploadCommunityImage,
  withReaction,
  type CommunityAuthor,
  type CommunityChannel,
  type CommunityMessage,
  type CommunityMessageRow,
} from '../../services/communityService.ts';
import MessageItem from './MessageItem.tsx';
import MessageComposer from './MessageComposer.tsx';
import ReportModal from './ReportModal.tsx';

// Тексты интерфейса на трёх языках (русский / казахский / английский).
const LOADING: Localized = {
  ru: 'Загрузка…',
  kk: 'Жүктелуде…',
  en: 'Loading…',
};
const LOAD_ERROR: Localized = {
  ru: 'Не удалось загрузить сообщения.',
  kk: 'Хабарламаларды жүктеу сәтсіз аяқталды.',
  en: 'Could not load the messages.',
};
const RETRY: Localized = {
  ru: 'Повторить',
  kk: 'Қайталау',
  en: 'Retry',
};
const EMPTY_TITLE: Localized = {
  ru: 'Здесь пока пусто',
  kk: 'Мұнда әзірге бос',
  en: 'Nothing here yet',
};
const EMPTY_BODY: Localized = {
  ru: 'Напишите первым — начните разговор!',
  kk: 'Алғашқы хабарламаны сіз жазыңыз — әңгімені бастаңыз!',
  en: 'Be the first to write — start the conversation!',
};
const SEND_ERROR: Localized = {
  ru: 'Не удалось отправить сообщение.',
  kk: 'Хабарламаны жіберу сәтсіз аяқталды.',
  en: 'Could not send the message.',
};

/** Two consecutive messages from one author within this window render grouped. */
const GROUP_WINDOW_MS = 5 * 60 * 1000;

interface ChannelViewProps {
  channel: CommunityChannel;
}

// Компонент одного канала: загружает историю сообщений и держит её актуальной.
const ChannelView: React.FC<ChannelViewProps> = ({ channel }) => {
  const { language } = useLanguage();
  const { user, profile } = useAuth();
  // Состояния: список сообщений, флаги загрузки/ошибок, сообщение,
  // на которое отвечаем, и сообщение, на которое жалуемся.
  const [messages, setMessages] = useState<CommunityMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [replyTo, setReplyTo] = useState<CommunityMessage | null>(null);
  const [reportTarget, setReportTarget] = useState<CommunityMessage | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const didInitScrollRef = useRef(false);
  const messagesRef = useRef<CommunityMessage[]>([]);
  const authorsRef = useRef<Map<string, CommunityAuthor>>(new Map());
  messagesRef.current = messages;

  const myAuthor = useMemo<CommunityAuthor | null>(
    () =>
      user
        ? {
            id: user.id,
            full_name: profile?.full_name ?? null,
            avatar_url: profile?.avatar_url ?? null,
            role: profile?.role ?? null,
          }
        : null,
    [user, profile],
  );

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const list = await fetchMessages(channel.id);
      const known = authorsRef.current;
      for (const m of list) {
        if (m.author) known.set(m.author.id, m.author);
        if (m.reply_to?.author) known.set(m.reply_to.author.id, m.reply_to.author);
      }
      setMessages(list);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [channel.id]);

  useEffect(() => {
    void load();
  }, [load]);

  // Realtime: new messages in this channel, plus reaction changes. DELETE
  // payloads only carry the primary key (default replica identity), so a
  // reaction removal triggers a refetch for the loaded messages instead.
  useEffect(() => {
    const rt = supabase
      .channel(`community:${channel.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'community_messages',
          filter: `channel_id=eq.${channel.id}`,
        },
        (payload) => {
          const row = payload.new as CommunityMessageRow;
          setMessages((prev) => {
            if (prev.some((m) => m.id === row.id)) return prev;
            const replyToRow = row.reply_to_id
              ? (prev.find((m) => m.id === row.reply_to_id) ?? null)
              : null;
            return [
              ...prev,
              {
                ...row,
                author: authorsRef.current.get(row.user_id) ?? null,
                reply_to: replyToRow,
                reactions: [],
              },
            ];
          });
          if (!authorsRef.current.has(row.user_id)) {
            void fetchAuthors([row.user_id]).then((fresh) => {
              if (fresh.size === 0) return;
              fresh.forEach((a, id) => authorsRef.current.set(id, a));
              const author = fresh.get(row.user_id) ?? null;
              setMessages((prev) =>
                prev.map((m) => (m.id === row.id ? { ...m, author } : m)),
              );
            });
          }
        },
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'community_reactions' },
        (payload) => {
          const r = payload.new as { message_id: string; user_id: string; emoji: string };
          setMessages((prev) =>
            prev.map((m) =>
              m.id === r.message_id
                ? { ...m, reactions: withReaction(m.reactions, r.user_id, r.emoji, true) }
                : m,
            ),
          );
        },
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'community_messages' },
        (payload) => {
          const old = payload.old as { id?: string };
          if (!old.id) return;
          setMessages((prev) => prev.filter((m) => m.id !== old.id));
        },
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'community_reactions' },
        () => {
          const ids = messagesRef.current.map((m) => m.id);
          if (ids.length === 0) return;
          void fetchReactionsFor(ids).then((byMessage) => {
            setMessages((prev) =>
              prev.map((m) => ({ ...m, reactions: byMessage.get(m.id) ?? [] })),
            );
          });
        },
      )
      .subscribe();
    return () => {
      void supabase.removeChannel(rt);
    };
  }, [channel.id]);

  // First render with messages: jump to the bottom. Afterwards follow only
  // when the reader is already near the bottom, so history doesn't jump.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || messages.length === 0) return;
    if (!didInitScrollRef.current) {
      didInitScrollRef.current = true;
      el.scrollTop = el.scrollHeight;
      return;
    }
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 160;
    if (nearBottom) el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  // Optimistic append, reconciled with the inserted row on success and
  // rolled back on failure. `content` may be empty when an image is attached;
  // the DB requires 1..2000 chars, so a '📷' placeholder stands in.
  const handleSend = useCallback(
    async (content: string, image: File | null) => {
      if (!user) return;
      setSendFailed(false);
      const finalContent = content || IMAGE_FALLBACK_CONTENT;
      const optimistic: CommunityMessage = {
        id: `optimistic-${Date.now()}`,
        channel_id: channel.id,
        user_id: user.id,
        content: finalContent,
        reply_to_id: replyTo?.id ?? null,
        image_url: null,
        created_at: new Date().toISOString(),
        author: myAuthor,
        reply_to: replyTo,
        reactions: [],
      };
      setMessages((prev) => [...prev, optimistic]);
      setReplyTo(null);
      try {
        const imageUrl = image ? await uploadCommunityImage(image, user.id) : null;
        const saved = await sendMessage(
          channel.id,
          user.id,
          finalContent,
          optimistic.reply_to_id,
          imageUrl,
        );
        setMessages((prev) =>
          prev.map((m) =>
            m.id === optimistic.id
              ? { ...saved, author: myAuthor, reply_to: optimistic.reply_to, reactions: [] }
              : m,
          ),
        );
      } catch {
        setMessages((prev) => prev.filter((m) => m.id !== optimistic.id));
        setSendFailed(true);
      }
    },
    [user, channel.id, replyTo, myAuthor],
  );

  const handleReact = useCallback(
    (messageId: string, emoji: string) => {
      if (!user) return;
      const current = messagesRef.current.find((m) => m.id === messageId);
      if (!current) return;
      const hasReacted = current.reactions.some(
        (g) => g.emoji === emoji && g.userIds.includes(user.id),
      );
      const optimistic = withReaction(current.reactions, user.id, emoji, !hasReacted);
      setMessages((prev) =>
        prev.map((m) => (m.id === messageId ? { ...m, reactions: optimistic } : m)),
      );
      toggleReaction(messageId, user.id, emoji, hasReacted).catch(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === messageId ? { ...m, reactions: current.reactions } : m)),
        );
      });
    },
    [user],
  );

  const handleDelete = useCallback((messageId: string) => {
    const backup = messagesRef.current;
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
    // Optimistic bubbles have no DB row yet — dropping them locally is enough.
    if (messageId.startsWith('optimistic-')) return;
    deleteMessage(messageId).catch(() => setMessages(backup));
  }, []);

  const isGrouped = (idx: number): boolean => {
    if (idx === 0) return false;
    const prev = messages[idx - 1];
    const curr = messages[idx];
    if (prev.user_id !== curr.user_id) return false;
    if (prev.reply_to_id || curr.reply_to_id) return false;
    return (
      new Date(curr.created_at).getTime() - new Date(prev.created_at).getTime() <
      GROUP_WINDOW_MS
    );
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Channel header */}
      <div className="flex items-center gap-2 border-b border-line/60 px-4 py-3">
        <Hash className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
        <div className="min-w-0">
          <h2 className="truncate font-display text-sm font-bold text-ink">{channel.name}</h2>
          {channel.description && (
            <p className="truncate text-xs text-slateink">{channel.description}</p>
          )}
        </div>
      </div>

      {/* Message list */}
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto px-2 py-3"
        role="log"
        aria-live="polite"
        aria-label={channel.name}
      >
        {loading ? (
          <div role="status" className="flex h-full items-center justify-center">
            <Loader2 className="h-7 w-7 animate-spin text-teal" aria-hidden="true" />
            <span className="sr-only">{loc(language, LOADING)}</span>
          </div>
        ) : error ? (
          <div
            role="alert"
            className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <AlertCircle className="h-7 w-7 text-coral" aria-hidden="true" />
            <p className="text-sm text-slateink">{loc(language, LOAD_ERROR)}</p>
            <button
              type="button"
              onClick={() => void load()}
              className="rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              {loc(language, RETRY)}
            </button>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal"
            >
              <MessagesSquare className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold text-ink">{loc(language, EMPTY_TITLE)}</p>
            <p className="text-sm text-slateink">{loc(language, EMPTY_BODY)}</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <MessageItem
              key={msg.id}
              message={msg}
              currentUserId={user?.id ?? ''}
              grouped={isGrouped(idx)}
              onReply={setReplyTo}
              onReact={handleReact}
              onReport={setReportTarget}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {sendFailed && (
        <p role="alert" className="px-4 pb-1 text-xs font-medium text-coral">
          {loc(language, SEND_ERROR)}
        </p>
      )}

      <MessageComposer
        replyTo={replyTo}
        onCancelReply={() => setReplyTo(null)}
        onSend={handleSend}
      />

      <ReportModal
        open={reportTarget !== null}
        messageId={reportTarget?.id ?? null}
        messagePreview={reportTarget?.content ?? ''}
        onClose={() => setReportTarget(null)}
      />
    </div>
  );
};

export default ChannelView;
