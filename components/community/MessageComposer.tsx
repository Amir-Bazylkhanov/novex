import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Reply, Send, X } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  MAX_MESSAGE_LENGTH,
  type CommunityMessage,
} from '../../services/communityService.ts';

const PLACEHOLDER: Localized = {
  ru: 'Написать сообщение…',
  kk: 'Хабарлама жазу…',
  en: 'Write a message…',
};
const SEND: Localized = { ru: 'Отправить', kk: 'Жіберу', en: 'Send' };
const HINT: Localized = {
  ru: 'Enter — отправить, Shift+Enter — новая строка',
  kk: 'Enter — жіберу, Shift+Enter — жаңа жол',
  en: 'Enter to send, Shift+Enter for a new line',
};
const REPLYING_TO: Localized = { ru: 'Ответ', kk: 'Жауап', en: 'Replying to' };
const CANCEL_REPLY: Localized = { ru: 'Отменить ответ', kk: 'Жауаптан бас тарту', en: 'Cancel reply' };
const STUDENT_FALLBACK: Localized = { ru: 'Ученик', kk: 'Оқушы', en: 'Student' };

/** Show the counter once this many characters remain. */
const CHAR_WARN_THRESHOLD = 100;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

interface MessageComposerProps {
  replyTo: CommunityMessage | null;
  onCancelReply: () => void;
  onSend: (content: string) => Promise<void>;
}

const MessageComposer: React.FC<MessageComposerProps> = ({ replyTo, onCancelReply, onSend }) => {
  const { language } = useLanguage();
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const charsLeft = MAX_MESSAGE_LENGTH - content.length;
  const canSend = content.trim().length > 0 && charsLeft >= 0 && !sending;

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

  const handleSend = useCallback(async () => {
    if (!canSend) return;
    const text = content.trim();
    setSending(true);
    try {
      await onSend(text);
      setContent('');
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    } finally {
      setSending(false);
    }
  }, [canSend, content, onSend]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
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

      <div className="flex items-end gap-2 rounded-xl border border-line bg-white px-3 py-2 transition-colors focus-within:border-teal">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
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
