// Одно сообщение в чате: аватарка, имя автора, время, текст, картинка,
// реакции и кнопки действий, появляющиеся при наведении (ответить,
// поставить реакцию, пожаловаться, удалить). Подряд идущие сообщения
// одного автора могут рисоваться «сгруппированными» — без повтора имени.
// Используется списком внутри ChannelView.
import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Flag, Reply, SmilePlus, Trash2 } from 'lucide-react';
import { loc, type Lang, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import type { CommunityMessage } from '../../services/communityService.ts';
import { IMAGE_FALLBACK_CONTENT } from '../../services/communityService.ts';

// Тексты интерфейса на трёх языках (русский / казахский / английский).
const STUDENT_FALLBACK: Localized = { ru: 'Ученик', kk: 'Оқушы', en: 'Student' };
const TEACHER_CHIP: Localized = { ru: 'Учитель', kk: 'Мұғалім', en: 'Teacher' };
const REPLY_ACTION: Localized = { ru: 'Ответить', kk: 'Жауап беру', en: 'Reply' };
const REACT_ACTION: Localized = { ru: 'Добавить реакцию', kk: 'Реакция қосу', en: 'Add reaction' };
const REPORT_ACTION: Localized = { ru: 'Пожаловаться', kk: 'Шағымдану', en: 'Report' };
const DELETE_ACTION: Localized = { ru: 'Удалить сообщение', kk: 'Хабарламаны жою', en: 'Delete message' };
const DELETE_CONFIRM: Localized = { ru: 'Удалить?', kk: 'Жою керек пе?', en: 'Delete?' };
const CANCEL: Localized = { ru: 'Отмена', kk: 'Бас тарту', en: 'Cancel' };
const PICKER_LABEL: Localized = { ru: 'Выбор реакции', kk: 'Реакция таңдау', en: 'Pick a reaction' };
const REACTIONS_LABEL: Localized = { ru: 'Реакции на сообщение', kk: 'Хабарлама реакциялары', en: 'Message reactions' };
const JUST_NOW: Localized = { ru: 'только что', kk: 'жаңа ғана', en: 'just now' };
const MIN_AGO: Localized = { ru: '{n} мин назад', kk: '{n} мин бұрын', en: '{n} min ago' };
const HOURS_AGO: Localized = { ru: '{n} ч назад', kk: '{n} сағ бұрын', en: '{n} h ago' };
const IMAGE_ALT: Localized = {
  ru: 'Изображение из сообщения',
  kk: 'Хабарламадағы сурет',
  en: 'Image from the message',
};
const OPEN_IMAGE: Localized = {
  ru: 'Открыть изображение в новой вкладке',
  kk: 'Суретті жаңа бетте ашу',
  en: 'Open the image in a new tab',
};

const EMOJIS: Array<{ emoji: string; label: Localized }> = [
  { emoji: '👍', label: { ru: 'Нравится', kk: 'Ұнайды', en: 'Like' } },
  { emoji: '❤️', label: { ru: 'Сердце', kk: 'Жүрек', en: 'Love' } },
  { emoji: '😂', label: { ru: 'Смешно', kk: 'Күлкілі', en: 'Haha' } },
  { emoji: '🤔', label: { ru: 'Думаю', kk: 'Ойлану', en: 'Thinking' } },
  { emoji: '🔥', label: { ru: 'Огонь', kk: 'От', en: 'Fire' } },
  { emoji: '🎉', label: { ru: 'Праздник', kk: 'Мереке', en: 'Celebrate' } },
];

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

// Подбирает формат даты и времени под язык интерфейса.
function localeTag(language: Lang): string {
  return language === 'kk' ? 'kk-KZ' : language === 'ru' ? 'ru-RU' : 'en-US';
}

/** Relative timestamp: just now / minutes / hours, then a short date. */
function formatMessageTime(iso: string, language: Lang): string {
  const date = new Date(iso);
  const diffMin = Math.floor((Date.now() - date.getTime()) / 60000);
  if (diffMin < 1) return loc(language, JUST_NOW);
  if (diffMin < 60) return loc(language, MIN_AGO).replace('{n}', String(diffMin));
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return loc(language, HOURS_AGO).replace('{n}', String(diffHr));
  const tag = localeTag(language);
  return `${date.toLocaleDateString(tag, { day: 'numeric', month: 'short' })}, ${date.toLocaleTimeString(tag, { hour: '2-digit', minute: '2-digit' })}`;
}

const AvatarImg: React.FC<{
  src: string | null;
  alt: string;
  fallback: React.ReactNode;
}> = ({ src, alt, fallback }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <>{fallback}</>;
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-9 w-9 rounded-full object-cover"
    />
  );
};

interface MessageItemProps {
  message: CommunityMessage;
  currentUserId: string;
  /** Grouped with the previous message: avatar and name line are hidden. */
  grouped: boolean;
  onReply: (message: CommunityMessage) => void;
  onReact: (messageId: string, emoji: string) => void;
  onReport: (message: CommunityMessage) => void;
  onDelete: (messageId: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  currentUserId,
  grouped,
  onReply,
  onReact,
  onReport,
  onDelete,
}) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const isOwn = message.user_id === currentUserId;
  const authorName = message.author?.full_name?.trim() || loc(language, STUDENT_FALLBACK);
  const isTeacher =
    message.author?.role === 'teacher' || message.author?.role === 'admin';
  const replyAuthorName =
    message.reply_to?.author?.full_name?.trim() || loc(language, STUDENT_FALLBACK);

  // Close the emoji picker when the pointer lands anywhere outside it.
  const pickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!pickerOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [pickerOpen]);

  const scrollToQuoteTarget = () => {
    if (!message.reply_to) return;
    const el = document.getElementById(`msg-${message.reply_to.id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
  };

  const toolbarButton =
    'rounded-md p-1.5 text-slateink transition-colors hover:bg-mist/40 hover:text-teal';

  return (
    <div
      id={`msg-${message.id}`}
      className={`group relative flex gap-3 rounded-lg px-2 ${grouped ? 'py-0.5' : 'py-2'} ${
        isOwn ? 'bg-mist/20' : ''
      }`}
    >
      {/* Avatar column (time-on-hover placeholder when grouped) */}
      {grouped ? (
        <div
          className="flex w-9 shrink-0 items-center justify-center"
          title={new Date(message.created_at).toLocaleString(localeTag(language))}
        >
          <span className="text-[10px] tabular-nums text-slateink opacity-0 transition-opacity group-hover:opacity-100">
            {new Date(message.created_at).toLocaleTimeString(localeTag(language), {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      ) : (
        <div className="mt-0.5 shrink-0">
          <AvatarImg
            src={message.author?.avatar_url ?? null}
            alt={authorName}
            fallback={
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white"
              >
                {authorName.charAt(0).toUpperCase()}
              </span>
            }
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        {!grouped && (
          <div className="mb-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-sm font-semibold leading-none text-ink">{authorName}</span>
            {isTeacher && (
              <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                {loc(language, TEACHER_CHIP)}
              </span>
            )}
            <span
              className="text-xs text-slateink"
              title={new Date(message.created_at).toLocaleString(localeTag(language))}
            >
              {formatMessageTime(message.created_at, language)}
            </span>
          </div>
        )}

        {/* Compact quote of the message this one replies to */}
        {message.reply_to && (
          <button
            type="button"
            onClick={scrollToQuoteTarget}
            className={`${FOCUS_RING} mb-1 block w-full rounded-sm border-l-2 border-teal/60 pl-3 text-left`}
          >
            <span className="text-xs font-semibold text-teal-dark">{replyAuthorName}</span>
            <span className="block max-w-md truncate text-xs text-slateink">
              {message.reply_to.content}
            </span>
          </button>
        )}

        {/* Attached image (opens full-size in a new tab). The '📷' fallback
            content written for image-only messages is not rendered. */}
        {message.image_url && (
          <a
            href={message.image_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={loc(language, OPEN_IMAGE)}
            className={`${FOCUS_RING} mb-1 inline-block rounded-xl`}
          >
            <img
              src={message.image_url}
              alt={loc(language, IMAGE_ALT)}
              loading="lazy"
              className="max-h-64 max-w-xs rounded-xl border border-line/60 object-cover"
            />
          </a>
        )}

        {!(message.image_url && message.content.trim() === IMAGE_FALLBACK_CONTENT) && (
          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-ink">
            {message.content}
          </p>
        )}

        {/* Aggregated reactions */}
        {message.reactions.length > 0 && (
          <div
            className="mt-1.5 flex flex-wrap gap-1"
            role="group"
            aria-label={loc(language, REACTIONS_LABEL)}
          >
            {message.reactions.map((group) => {
              const hasReacted = group.userIds.includes(currentUserId);
              return (
                <button
                  key={group.emoji}
                  type="button"
                  onClick={() => onReact(message.id, group.emoji)}
                  aria-pressed={hasReacted}
                  className={`${FOCUS_RING} flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs transition-colors ${
                    hasReacted
                      ? 'border-teal/40 bg-teal/10 text-teal-dark'
                      : 'border-line/60 bg-white text-slateink hover:bg-mist/30'
                  }`}
                >
                  <span aria-hidden="true">{group.emoji}</span>
                  <span className="tabular-nums">{group.count}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Hover actions */}
      <div
        className="absolute right-3 top-1 flex items-center gap-1 rounded-lg border border-line/60 bg-white p-1 opacity-0 shadow-md transition-opacity focus-within:opacity-100 group-hover:opacity-100"
        role="toolbar"
        aria-label={loc(language, REACTIONS_LABEL)}
      >
        <div className="relative" ref={pickerRef}>
          <button
            type="button"
            onClick={() => setPickerOpen((open) => !open)}
            aria-label={loc(language, REACT_ACTION)}
            aria-expanded={pickerOpen}
            className={`${FOCUS_RING} ${toolbarButton}`}
          >
            <SmilePlus className="h-4 w-4" aria-hidden="true" />
          </button>
          {pickerOpen && (
            <div
              role="dialog"
              aria-label={loc(language, PICKER_LABEL)}
              className="absolute right-0 top-full z-50 mt-1.5 flex items-center gap-0.5 rounded-xl border border-line/60 bg-white p-1.5 shadow-lg"
            >
              {EMOJIS.map(({ emoji, label }) => (
                <button
                  key={emoji}
                  type="button"
                  aria-label={loc(language, label)}
                  onClick={() => {
                    onReact(message.id, emoji);
                    setPickerOpen(false);
                  }}
                  className={`${FOCUS_RING} flex h-8 w-8 items-center justify-center rounded-lg text-lg transition-colors hover:bg-mist/40`}
                >
                  <span aria-hidden="true">{emoji}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => onReply(message)}
          aria-label={loc(language, REPLY_ACTION)}
          className={`${FOCUS_RING} ${toolbarButton}`}
        >
          <Reply className="h-4 w-4" aria-hidden="true" />
        </button>
        {!isOwn && (
          <button
            type="button"
            onClick={() => onReport(message)}
            aria-label={loc(language, REPORT_ACTION)}
            className={`${FOCUS_RING} ${toolbarButton}`}
          >
            <Flag className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
        {isOwn &&
          (confirmDelete ? (
            <span className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setConfirmDelete(false);
                  onDelete(message.id);
                }}
                className={`${FOCUS_RING} rounded-md bg-coral/10 px-2 py-1 text-xs font-semibold text-coral transition-colors hover:bg-coral/20`}
              >
                {loc(language, DELETE_CONFIRM)}
              </button>
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className={`${FOCUS_RING} rounded-md px-2 py-1 text-xs font-semibold text-slateink transition-colors hover:bg-mist/40`}
              >
                {loc(language, CANCEL)}
              </button>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              aria-label={loc(language, DELETE_ACTION)}
              className={`${FOCUS_RING} ${toolbarButton} hover:text-coral`}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          ))}
      </div>
    </div>
  );
};

export default MessageItem;
