import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Bug,
  CheckCircle2,
  Cog,
  Lightbulb,
  Loader2,
  MessageSquare,
  MessageSquareWarning,
  Plus,
  Upload,
  X,
} from 'lucide-react';
import { loc, type Localized } from '../utils/i18n.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

/* --- content --- */

const ARIA_OPEN: Localized = {
  ru: 'Обратная связь',
  kk: 'Кері байланыс',
  en: 'Feedback',
};
const TITLE: Localized = {
  ru: 'Обратная связь',
  kk: 'Кері байланыс',
  en: 'Feedback',
};
const REWARD_HINT: Localized = {
  ru: 'За полезные отзывы можно получить Новасы в благодарность.',
  kk: 'Пайдалы пікірлер үшін алғыс ретінде Новас ала аласыз.',
  en: 'Helpful feedback may earn you Novas as a thank-you.',
};
const TYPE_LABELS: Record<FeedbackType, Localized> = {
  bug: { ru: 'Ошибка', kk: 'Қате', en: 'Bug' },
  idea: { ru: 'Идея', kk: 'Идея', en: 'Idea' },
  review: { ru: 'Отзыв', kk: 'Пікір', en: 'Review' },
};
const MESSAGE_LABEL: Localized = {
  ru: 'Сообщение',
  kk: 'Хабарлама',
  en: 'Message',
};
const MESSAGE_PLACEHOLDER: Localized = {
  ru: 'Опишите, что случилось, или предложите, что улучшить…',
  kk: 'Не болғанын жазыңыз немесе нені жақсартуды ұсынасыз…',
  en: 'Describe what happened or suggest what to improve…',
};
const SCREENSHOT_LABEL: Localized = {
  ru: 'Скриншоты (необязательно)',
  kk: 'Скриншоттар (міндетті емес)',
  en: 'Screenshots (optional)',
};
const SCREENSHOT_HINT: Localized = {
  ru: 'Перетащите скриншоты сюда, вставьте из буфера (Ctrl+V) или нажмите для загрузки',
  kk: 'Скриншоттарды осында тастаңыз, буферден қойыңыз (Ctrl+V) немесе жүктеу үшін басыңыз',
  en: 'Drop screenshots here, paste from clipboard (Ctrl+V), or click to upload',
};
const SCREENSHOT_DROP_LABEL: Localized = {
  ru: 'Зона загрузки скриншотов',
  kk: 'Скриншот жүктеу аймағы',
  en: 'Drop zone for screenshot upload',
};
const SCREENSHOT_REMOVE: Localized = {
  ru: 'Удалить скриншот',
  kk: 'Скриншотты жою',
  en: 'Remove screenshot',
};
const SCREENSHOT_ADD_MORE: Localized = {
  ru: 'Добавить ещё',
  kk: 'Тағы қосу',
  en: 'Add more',
};
const SCREENSHOT_TYPE_ERROR: Localized = {
  ru: 'Поддерживаются только файлы изображений.',
  kk: 'Тек сурет файлдары қолдау табады.',
  en: 'Only image files are supported.',
};
const SCREENSHOT_SIZE_ERROR: Localized = {
  ru: 'Файл превышает лимит 5 МБ.',
  kk: 'Файл 5 МБ шегінен асады.',
  en: 'File exceeds 5 MB limit.',
};
const SCREENSHOT_MAX_ERROR: Localized = {
  ru: 'Можно прикрепить не более 5 скриншотов.',
  kk: 'Ең көбі 5 скриншот тіркеуге болады.',
  en: 'You can attach up to 5 screenshots.',
};
const SUBMIT: Localized = { ru: 'Отправить', kk: 'Жіберу', en: 'Send' };
const SENDING: Localized = { ru: 'Отправляем…', kk: 'Жіберілуде…', en: 'Sending…' };
const SUCCESS_TITLE: Localized = {
  ru: 'Спасибо! Отчёт отправлен.',
  kk: 'Рақмет! Есеп жіберілді.',
  en: 'Thanks! Report sent.',
};
const SUCCESS_DESC: Localized = {
  ru: 'Мы изучим его и свяжемся с вами, если понадобятся детали.',
  kk: 'Біз оны қарап шығамыз, қажет болса хабарласамыз.',
  en: "We'll look into it and get back to you if we need more details.",
};
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_SCREENSHOTS = 5;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

type FeedbackType = 'bug' | 'idea' | 'review';
type Status = 'idle' | 'sending' | 'sent';

interface ShotPreview {
  id: string;
  file: File;
  url: string; // object URL for preview; revoked on removal/unmount
}

const TYPE_ICONS: Record<FeedbackType, React.ComponentType<{ className?: string }>> = {
  bug: Bug,
  idea: Lightbulb,
  review: MessageSquare,
};
const TYPE_ORDER: FeedbackType[] = ['bug', 'idea', 'review'];

const FeedbackWidget: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>('bug');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  // Screenshots live only in local state — nothing is uploaded anywhere.
  const [shots, setShots] = useState<ShotPreview[]>([]);
  const [screenshotError, setScreenshotError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const timersRef = useRef<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Mirrors `shots` so unmount cleanup can revoke object URLs without a stale closure.
  const shotsRef = useRef<ShotPreview[]>([]);
  shotsRef.current = shots;

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  const resetAndClose = () => {
    clearTimers();
    shotsRef.current.forEach((s) => URL.revokeObjectURL(s.url));
    setOpen(false);
    setType('bug');
    setMessage('');
    setStatus('idle');
    setShots([]);
    setScreenshotError('');
    setDragOver(false);
  };

  // Escape closes the dialog; timers are cleaned up on unmount.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        resetAndClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(
    () => () => {
      clearTimers();
      shotsRef.current.forEach((s) => URL.revokeObjectURL(s.url));
    },
    [],
  );

  const addFiles = useCallback(
    (files: File[]) => {
      let err = '';
      const accepted: ShotPreview[] = [];
      const room = MAX_SCREENSHOTS - shots.length;
      for (const file of files) {
        if (accepted.length >= room) {
          err = loc(language, SCREENSHOT_MAX_ERROR);
          break;
        }
        if (!file.type.startsWith('image/')) {
          err = loc(language, SCREENSHOT_TYPE_ERROR);
          continue;
        }
        if (file.size > MAX_FILE_SIZE) {
          err = loc(language, SCREENSHOT_SIZE_ERROR);
          continue;
        }
        accepted.push({ id: crypto.randomUUID(), file, url: URL.createObjectURL(file) });
      }
      setScreenshotError(err);
      if (accepted.length) setShots((prev) => [...prev, ...accepted]);
    },
    [shots.length, language],
  );

  const removeShot = useCallback((id: string) => {
    setShots((prev) => {
      const target = prev.find((s) => s.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((s) => s.id !== id);
    });
    setScreenshotError('');
  }, []);

  // Paste from clipboard (Ctrl+V) while the dialog is open.
  useEffect(() => {
    if (!open) return undefined;
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const files: File[] = [];
      for (const item of Array.from(items)) {
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) files.push(file);
        }
      }
      if (files.length) addFiles(files);
    };
    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [open, addFiles]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    if (files.length) addFiles(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length) addFiles(files);
    // Reset so picking the same file again still fires onChange.
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // UI-only for the demo: no network, "sending" is faked with timers.
  const handleSubmit = () => {
    if (!message.trim() || status !== 'idle') return;
    setStatus('sending');
    timersRef.current.push(
      window.setTimeout(() => {
        setStatus('sent');
        timersRef.current.push(window.setTimeout(resetAndClose, 1500));
      }, 600),
    );
  };

  const scrimMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
  };
  const dialogMotion = reduceMotion
    ? scrimMotion
    : {
        initial: { opacity: 0, y: 16, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 8, scale: 0.98 },
        transition: { duration: 0.2 },
      };

  const dropZoneClass = dragOver
    ? 'border-teal bg-teal/5'
    : 'border-line hover:border-teal';

  return (
    <>
      <button
        type="button"
        aria-label={loc(language, ARIA_OPEN)}
        onClick={() => setOpen(true)}
        className={`${FOCUS_RING} fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line/50 bg-white text-teal shadow-[0_8px_24px_rgba(17,26,42,0.12)] transition-colors hover:bg-mist/25`}
      >
        <MessageSquareWarning className="h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            {...scrimMotion}
            onClick={(e) => {
              if (e.target === e.currentTarget) resetAndClose();
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
          >
            <motion.div
              {...dialogMotion}
              role="dialog"
              aria-modal="true"
              aria-labelledby="feedback-title"
              className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-line/50 bg-white p-6 shadow-[0_24px_60px_rgba(17,26,42,0.18)]"
            >
              {status === 'sent' ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-teal" aria-hidden="true" />
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {loc(language, SUCCESS_TITLE)}
                  </p>
                  <p className="mt-2 text-sm text-slateink">
                    {loc(language, SUCCESS_DESC)}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h2
                      id="feedback-title"
                      className="font-display text-xl font-extrabold tracking-tight text-ink"
                    >
                      {loc(language, TITLE)}
                    </h2>
                    <button
                      type="button"
                      aria-label={loc(language, CLOSE)}
                      onClick={resetAndClose}
                      className={`${FOCUS_RING} flex h-8 w-8 items-center justify-center rounded-lg text-slateink transition-colors hover:bg-mist/25 hover:text-ink`}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slateink">
                    <Cog className="h-3.5 w-3.5" aria-hidden="true" />
                    {loc(language, REWARD_HINT)}
                  </p>

                  <div
                    role="group"
                    aria-label={loc(language, TITLE)}
                    className="mt-5 flex gap-1 rounded-xl border border-line/50 bg-canvas p-1"
                  >
                    {TYPE_ORDER.map((t) => {
                      const Icon = TYPE_ICONS[t];
                      const active = type === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setType(t)}
                          className={`${FOCUS_RING} flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                            active ? 'bg-teal text-white' : 'text-slateink hover:text-ink'
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {loc(language, TYPE_LABELS[t])}
                        </button>
                      );
                    })}
                  </div>

                  <label
                    htmlFor="feedback-message"
                    className="mt-5 block text-sm font-semibold text-ink"
                  >
                    {loc(language, MESSAGE_LABEL)}
                  </label>
                  <textarea
                    id="feedback-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={loc(language, MESSAGE_PLACEHOLDER)}
                    className={`${FOCUS_RING} mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slateink/70`}
                  />

                  <div
                    className="mt-5"
                    onDrop={handleDrop}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                  >
                    <span className="block text-sm font-semibold text-ink">
                      {loc(language, SCREENSHOT_LABEL)}
                      {shots.length > 0 && (
                        <span className="ml-2 font-medium text-slateink">
                          {shots.length}/{MAX_SCREENSHOTS}
                        </span>
                      )}
                    </span>

                    {shots.length === 0 ? (
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label={loc(language, SCREENSHOT_DROP_LABEL)}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click();
                        }}
                        className={`${FOCUS_RING} mt-2 flex h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors ${dropZoneClass}`}
                      >
                        <Upload className="h-6 w-6 text-slateink" aria-hidden="true" />
                        <p className="px-4 text-center text-sm text-slateink">
                          {loc(language, SCREENSHOT_HINT)}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-2 flex flex-wrap gap-3">
                        {shots.map((shot) => (
                          <div key={shot.id} className="relative h-24 w-24">
                            <img
                              src={shot.url}
                              alt="Screenshot preview"
                              className="h-full w-full rounded-xl border border-line/50 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeShot(shot.id)}
                              aria-label={loc(language, SCREENSHOT_REMOVE)}
                              className={`${FOCUS_RING} absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-mist/60 text-ink shadow-md transition-colors hover:bg-mist`}
                            >
                              <X className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        ))}
                        {shots.length < MAX_SCREENSHOTS && (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            aria-label={loc(language, SCREENSHOT_ADD_MORE)}
                            className={`${FOCUS_RING} flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed text-slateink transition-colors ${dropZoneClass}`}
                          >
                            <Plus className="h-6 w-6" aria-hidden="true" />
                            <span className="text-xs">{loc(language, SCREENSHOT_ADD_MORE)}</span>
                          </button>
                        )}
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                      aria-hidden="true"
                    />
                    {screenshotError && (
                      <p className="mt-1.5 text-sm font-medium text-coral">{screenshotError}</p>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={!message.trim() || status === 'sending'}
                    onClick={handleSubmit}
                    className={`${FOCUS_RING} mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    {status === 'sending' && (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    )}
                    {loc(language, status === 'sending' ? SENDING : SUBMIT)}
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackWidget;
