import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, Hash, Loader2, X } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import {
  CHANNEL_NAME_MAX,
  CHANNEL_NAME_MIN,
  CHANNEL_SLUG_MIN,
  createChannel,
  slugifyChannelName,
  type CommunityChannel,
} from '../../services/communityService.ts';

const TITLE: Localized = {
  ru: 'Создать канал',
  kk: 'Арна құру',
  en: 'Create a channel',
};
const NAME_LABEL: Localized = { ru: 'Название', kk: 'Атауы', en: 'Name' };
const NAME_PLACEHOLDER: Localized = {
  ru: 'Например: Подготовка к ЕНТ',
  kk: 'Мысалы: ҰБТ-ға дайындық',
  en: 'E.g. Exam preparation',
};
const NAME_HINT: Localized = {
  ru: 'От 2 до 80 символов.',
  kk: '2-ден 80 таңбаға дейін.',
  en: 'Between 2 and 80 characters.',
};
const DESC_LABEL: Localized = { ru: 'Описание', kk: 'Сипаттамасы', en: 'Description' };
const DESC_OPTIONAL: Localized = { ru: 'необязательно', kk: 'міндетті емес', en: 'optional' };
const DESC_PLACEHOLDER: Localized = {
  ru: 'О чём этот канал?',
  kk: 'Бұл арна не туралы?',
  en: 'What is this channel about?',
};
const SLUG_LABEL: Localized = { ru: 'Адрес канала', kk: 'Арна адресі', en: 'Channel address' };
const SLUG_INVALID: Localized = {
  ru: 'Название должно содержать хотя бы две буквы или цифры для адреса.',
  kk: 'Адрес үшін атауда кемінде екі әріп немесе сан болуы керек.',
  en: 'The name needs at least two letters or digits for the address.',
};
const SUBMIT: Localized = { ru: 'Создать', kk: 'Құру', en: 'Create' };
const CREATING: Localized = { ru: 'Создание…', kk: 'Құрылуда…', en: 'Creating…' };
const CANCEL: Localized = { ru: 'Отмена', kk: 'Бас тарту', en: 'Cancel' };
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };
const SUBMIT_ERROR: Localized = {
  ru: 'Не удалось создать канал. Попробуйте ещё раз.',
  kk: 'Арнаны құру сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not create the channel. Please try again.',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

interface CreateChannelModalProps {
  open: boolean;
  onClose: () => void;
  onCreated: (channel: CommunityChannel) => void;
}

const CreateChannelModal: React.FC<CreateChannelModalProps> = ({ open, onClose, onCreated }) => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const reducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);

  // Reset the form every time the modal opens.
  useEffect(() => {
    if (open) {
      setName('');
      setDescription('');
      setSubmitting(false);
      setFailed(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const trimmed = name.trim();
  const slug = useMemo(() => slugifyChannelName(trimmed), [trimmed]);
  const nameValid = trimmed.length >= CHANNEL_NAME_MIN && trimmed.length <= CHANNEL_NAME_MAX;
  const slugValid = slug.length >= CHANNEL_SLUG_MIN;
  const canSubmit = !!user && nameValid && slugValid && !submitting;

  if (!open) return null;

  const handleSubmit = async () => {
    if (!user || !canSubmit) return;
    setSubmitting(true);
    setFailed(false);
    try {
      const channel = await createChannel(
        trimmed,
        description.trim() || null,
        slug,
        user.id,
      );
      onCreated(channel);
      onClose();
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-ink/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-channel-modal-title"
    >
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-2xl border border-line/60 bg-white shadow-2xl"
      >
        <header className="flex h-14 items-center justify-between border-b border-line/60 px-5">
          <h2
            id="create-channel-modal-title"
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Hash className="h-4 w-4 text-teal" aria-hidden="true" />
            {loc(language, TITLE)}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={loc(language, CLOSE)}
            className={`${FOCUS_RING} grid h-8 w-8 place-items-center rounded-full text-slateink transition-colors hover:bg-mist/40 hover:text-ink`}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>

        <div className="flex flex-col gap-4 px-5 py-5">
          <div>
            <label htmlFor="cc-name" className="mb-1.5 block text-xs font-medium text-ink">
              {loc(language, NAME_LABEL)}
            </label>
            <input
              id="cc-name"
              type="text"
              value={name}
              maxLength={CHANNEL_NAME_MAX}
              onChange={(e) => setName(e.target.value)}
              placeholder={loc(language, NAME_PLACEHOLDER)}
              className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slateink focus:border-teal"
            />
            <p className="mt-1 text-xs text-slateink">{loc(language, NAME_HINT)}</p>
          </div>

          <div>
            <label htmlFor="cc-desc" className="mb-1.5 block text-xs font-medium text-ink">
              {loc(language, DESC_LABEL)}{' '}
              <span className="font-normal text-slateink">({loc(language, DESC_OPTIONAL)})</span>
            </label>
            <textarea
              id="cc-desc"
              rows={2}
              value={description}
              maxLength={200}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={loc(language, DESC_PLACEHOLDER)}
              className="w-full resize-none rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slateink focus:border-teal"
            />
          </div>

          {/* Auto-generated slug preview */}
          {trimmed.length > 0 && (
            <div>
              <p className="mb-1 text-xs font-medium text-ink">{loc(language, SLUG_LABEL)}</p>
              {slugValid ? (
                <p className="rounded-xl border border-line/60 bg-mist/20 px-3.5 py-2 font-mono text-xs text-teal-dark">
                  #{slug}
                </p>
              ) : (
                <p role="alert" className="text-xs text-coral">
                  {loc(language, SLUG_INVALID)}
                </p>
              )}
            </div>
          )}

          {failed && (
            <p role="alert" className="flex items-center gap-1.5 text-xs text-coral">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {loc(language, SUBMIT_ERROR)}
            </p>
          )}
        </div>

        <footer className="flex items-center justify-end gap-2 border-t border-line/60 px-5 py-3">
          <button
            type="button"
            onClick={onClose}
            className={`${FOCUS_RING} h-10 rounded-full px-3 text-sm font-medium text-slateink transition-colors hover:bg-mist/40`}
          >
            {loc(language, CANCEL)}
          </button>
          <button
            type="button"
            onClick={() => void handleSubmit()}
            disabled={!canSubmit}
            className={`${FOCUS_RING} inline-flex h-10 items-center gap-1.5 rounded-full bg-teal px-4 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-40`}
          >
            {submitting && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />}
            {loc(language, submitting ? CREATING : SUBMIT)}
          </button>
        </footer>
      </motion.div>
    </div>
  );
};

export default CreateChannelModal;
