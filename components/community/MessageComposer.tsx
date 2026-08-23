// Поле ввода сообщения внизу канала.
// Поддерживает многострочный текст (Enter — отправить, Shift+Enter — новая
// строка), прикрепление картинки кнопкой или вставкой из буфера обмена,
// а также режим «ответа» на другое сообщение. Саму отправку выполняет
// родительский компонент ChannelView (через onSend).
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImagePlus, Reply, Send, X } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  isCommunityImageAllowed,
  MAX_COMMUNITY_IMAGE_BYTES,
  MAX_MESSAGE_LENGTH,
  type CommunityMessage,
} from '../../services/communityService.ts';

// Тексты интерфейса на трёх языках (русский / казахский / английский).
const PLACEHOLDER: Localized = {
  ru: 'Написать сообщение…',
  kk: 'Хабарлама жазу…',
  en: 'Write a message…',
};
const SEND: Localized = { ru: 'Отправить', kk: 'Жіберу', en: 'Send' };
const HINT: Localized = {
  ru: 'Enter — отправить, Shift+Enter — новая строка, Ctrl+V — вставить изображение',
  kk: 'Enter — жіберу, Shift+Enter — жаңа жол, Ctrl+V — сурет қою',
  en: 'Enter to send, Shift+Enter for a new line, Ctrl+V to paste an image',
};
const REPLYING_TO: Localized = { ru: 'Ответ', kk: 'Жауап', en: 'Replying to' };
const CANCEL_REPLY: Localized = { ru: 'Отменить ответ', kk: 'Жауаптан бас тарту', en: 'Cancel reply' };
const STUDENT_FALLBACK: Localized = { ru: 'Ученик', kk: 'Оқушы', en: 'Student' };
const ATTACH_IMAGE: Localized = {
  ru: 'Прикрепить изображение',
  kk: 'Сурет тіркеу',
  en: 'Attach an image',
};
const REMOVE_IMAGE: Localized = {
  ru: 'Убрать изображение',
  kk: 'Суретті алып тастау',
  en: 'Remove the image',
};
const IMAGE_PREVIEW_ALT: Localized = {
  ru: 'Предпросмотр прикреплённого изображения',
  kk: 'Тіркелген суретті алдын ала көру',
  en: 'Attached image preview',
};
const ERR_IMAGE_TYPE: Localized = {
  ru: 'Можно прикрепить только PNG, JPEG, WebP или GIF.',
  kk: 'Тек PNG, JPEG, WebP немесе GIF тіркеуге болады.',
  en: 'Only PNG, JPEG, WebP or GIF images are allowed.',
};
const ERR_IMAGE_TOO_BIG: Localized = {
  ru: 'Изображение слишком большое. Максимум — 5 МБ.',
  kk: 'Сурет тым үлкен. Ең көбі — 5 МБ.',
  en: 'The image is too large. Maximum size is 5 MB.',
};

/** Show the counter once this many characters remain. */
const CHAR_WARN_THRESHOLD = 100;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

interface MessageComposerProps {
  replyTo: CommunityMessage | null;
  onCancelReply: () => void;
  onSend: (content: string, image: File | null) => Promise<void>;
}

// Компонент поля ввода: replyTo — сообщение, на которое отвечаем,
// onSend — функция отправки, которую выполняет родитель (ChannelView).
const MessageComposer: React.FC<MessageComposerProps> = ({ replyTo, onCancelReply, onSend }) => {
  const { language } = useLanguage();
  // Текст сообщения, флаг отправки, прикреплённая картинка, её превью и ошибка.
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<'type' | 'size' | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const charsLeft = MAX_MESSAGE_LENGTH - content.length;
  const canSend = (content.trim().length > 0 || image !== null) && charsLeft >= 0 && !sending;

  // Auto-grow up to roughly four rows, then scroll internally.
  const autoGrow = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 104)}px`;
  }, []);

  useEffect(() => {
    autoGrow();
  }, [content, autoGrow]);

  // Local object URL for the preview chip, revoked when the image changes.
  useEffect(() => {
    if (!image) {
      setImagePreview(null);
      return;
    }
    const url = URL.createObjectURL(image);
    setImagePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  const attachImage = useCallback((file: File) => {
    if (!isCommunityImageAllowed(file)) {
      setImageError('type');
      return;
    }
    if (file.size > MAX_COMMUNITY_IMAGE_BYTES) {
      setImageError('size');
      return;
    }
    setImageError(null);
    setImage(file);
  }, []);

  const removeImage = useCallback(() => {
    setImage(null);
    setImageError(null);
  }, []);

  const handleSend = useCallback(async () => {
    if (!canSend) return;
    const text = content.trim();
    setSending(true);
    try {
      await onSend(text, image);
      setContent('');
      removeImage();
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    } finally {
      setSending(false);
    }
  }, [canSend, content, image, onSend, removeImage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  // Clipboard paste: grab the first image item, if any.
  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const item = Array.from(e.clipboardData.items).find((i) => i.type.startsWith('image/'));
    const file = item?.getAsFile();
    if (!file) return;
    e.preventDefault();
    attachImage(file);
  };

  const replyAuthor =
    replyTo?.author?.full_name?.trim() || loc(language, STUDENT_FALLBACK);

  return (
    <div className="border-t border-line/60 px-4 py-3">
      {/* Quoted reply bar */}
      {replyTo && (
        <div className="mb-2 flex items-center gap-2 rounded-lg border-l-2 border-teal bg-mist/20 px-3 py-2">
          <Reply className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-teal-dark">
              {loc(language, REPLYING_TO)}: {replyAuthor}
            </p>
            <p className="truncate text-xs text-slateink">{replyTo.content}</p>
          </div>
          <button
            type="button"
            onClick={onCancelReply}
            aria-label={loc(language, CANCEL_REPLY)}
            className={`${FOCUS_RING} shrink-0 rounded-md p-1 text-slateink transition-colors hover:bg-mist/40 hover:text-ink`}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Selected image preview chip */}
      {imagePreview && (
        <div className="mb-2">
          <div className="relative inline-block">
            <img
              src={imagePreview}
              alt={loc(language, IMAGE_PREVIEW_ALT)}
              className="h-14 w-14 rounded-lg border border-line/60 object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              aria-label={loc(language, REMOVE_IMAGE)}
              className={`${FOCUS_RING} absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink text-white transition-opacity hover:opacity-80`}
            >
              <X className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
      {imageError && (
        <p role="alert" className="mb-2 text-xs font-medium text-coral">
          {loc(language, imageError === 'size' ? ERR_IMAGE_TOO_BIG : ERR_IMAGE_TYPE)}
        </p>
      )}

      <div className="flex items-end gap-2 rounded-xl border border-line bg-white px-3 py-2 transition-colors focus-within:border-teal">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          className="hidden"
          aria-hidden="true"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) attachImage(file);
            // Reset so the same file can be picked again.
            e.target.value = '';
          }}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label={loc(language, ATTACH_IMAGE)}
          title={loc(language, ATTACH_IMAGE)}
          className={`${FOCUS_RING} shrink-0 rounded-lg p-2 text-slateink transition-colors hover:bg-mist/40 hover:text-teal`}
        >
          <ImagePlus className="h-4 w-4" aria-hidden="true" />
        </button>
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={loc(language, PLACEHOLDER)}
          aria-label={loc(language, PLACEHOLDER)}
          rows={1}
          maxLength={MAX_MESSAGE_LENGTH}
          className="max-h-[104px] min-h-[24px] flex-1 resize-none bg-transparent text-sm leading-6 text-ink outline-none placeholder:text-slateink"
        />
        {charsLeft <= CHAR_WARN_THRESHOLD && (
          <span
            className="shrink-0 pb-1 text-xs tabular-nums text-slateink"
            aria-live="polite"
            aria-atomic="true"
          >
            {charsLeft}
          </span>
        )}
        <button
          type="button"
          onClick={() => void handleSend()}
          disabled={!canSend}
          aria-label={loc(language, SEND)}
          className={`${FOCUS_RING} shrink-0 rounded-lg p-2 transition-colors ${
            canSend
              ? 'bg-teal text-white hover:bg-teal-dark'
              : 'cursor-not-allowed bg-mist/30 text-slateink'
          }`}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-1 text-xs text-slateink" aria-hidden="true">
        {loc(language, HINT)}
      </p>
    </div>
  );
};

export default MessageComposer;
