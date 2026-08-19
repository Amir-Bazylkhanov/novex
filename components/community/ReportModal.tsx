import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, Flag, Loader2, ShieldCheck, X } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { reportMessage } from '../../services/communityService.ts';

const TITLE: Localized = {
  ru: 'Пожаловаться на сообщение',
  kk: 'Хабарламаға шағымдану',
  en: 'Report message',
};
const REASON_LABEL: Localized = { ru: 'Причина', kk: 'Себебі', en: 'Reason' };
const REASON_PLACEHOLDER: Localized = {
  ru: 'Опишите проблему…',
  kk: 'Мәселені сипаттаңыз…',
  en: 'Describe the issue…',
};
const SUBMIT: Localized = { ru: 'Отправить жалобу', kk: 'Шағым жіберу', en: 'Submit report' };
const SUBMITTING: Localized = { ru: 'Отправка…', kk: 'Жіберілуде…', en: 'Submitting…' };
const CANCEL: Localized = { ru: 'Отмена', kk: 'Бас тарту', en: 'Cancel' };
const CLOSE: Localized = { ru: 'Закрыть', kk: 'Жабу', en: 'Close' };
const SUCCESS_TITLE: Localized = {
  ru: 'Жалоба отправлена',
  kk: 'Шағым жіберілді',
  en: 'Report submitted',
};
const SUCCESS_BODY: Localized = {
  ru: 'Спасибо! Команда модерации рассмотрит это сообщение.',
  kk: 'Рақмет! Модерация командасы бұл хабарламаны қарайды.',
  en: 'Thanks! The moderation team will review this message.',
};
const SUBMIT_ERROR: Localized = {
  ru: 'Не удалось отправить жалобу. Попробуйте ещё раз.',
  kk: 'Шағымды жіберу сәтсіз аяқталды. Қайтадан көріңіз.',
  en: 'Could not submit the report. Please try again.',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

interface ReportModalProps {
  open: boolean;
  messageId: string | null;
  messagePreview: string;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ open, messageId, messagePreview, onClose }) => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const reducedMotion = useReducedMotion();
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Reset the form every time the modal opens for a new message.
  useEffect(() => {
    if (open) {
      setReason('');
      setSubmitting(false);
      setFailed(false);
      setSubmitted(false);
    }
  }, [open, messageId]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (!user || !messageId || !reason.trim() || submitting) return;
    setSubmitting(true);
    setFailed(false);
    try {
      await reportMessage(messageId, user.id, reason.trim());
      setSubmitted(true);
      // Leave the success state visible briefly before closing.
      setTimeout(onClose, 1400);
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
      aria-labelledby="report-modal-title"
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
            id="report-modal-title"
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Flag className="h-4 w-4 text-coral" aria-hidden="true" />
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
          {submitted ? (
            <div className="flex flex-col items-center gap-2 py-6 text-center">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-full bg-teal/10"
              >
                <ShieldCheck className="h-6 w-6 text-teal" />
              </span>
              <h3 className="text-sm font-semibold text-ink">{loc(language, SUCCESS_TITLE)}</h3>
              <p className="text-xs text-slateink">{loc(language, SUCCESS_BODY)}</p>
            </div>
          ) : (
            <>
              {messagePreview && (
                <div className="rounded-xl border border-line/60 bg-mist/20 p-2.5 text-xs italic text-slateink line-clamp-3">
                  &ldquo;{messagePreview.slice(0, 140)}
                  {messagePreview.length > 140 ? '…' : ''}&rdquo;
                </div>
              )}
              <div>
                <label
                  htmlFor="report-reason"
                  className="mb-1.5 block text-xs font-medium text-ink"
                >
                  {loc(language, REASON_LABEL)}
                </label>
                <textarea
                  id="report-reason"
                  rows={3}
                  value={reason}
                  maxLength={500}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder={loc(language, REASON_PLACEHOLDER)}
                  className="w-full resize-none rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slateink focus:border-teal"
                />
              </div>
              {failed && (
                <p role="alert" className="flex items-center gap-1.5 text-xs text-coral">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, SUBMIT_ERROR)}
                </p>
              )}
            </>
          )}
        </div>

        {!submitted && (
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
              disabled={!reason.trim() || submitting}
              className={`${FOCUS_RING} inline-flex h-10 items-center gap-1.5 rounded-full bg-coral px-4 text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40`}
            >
              {submitting && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />}
              {loc(language, submitting ? SUBMITTING : SUBMIT)}
            </button>
          </footer>
        )}
      </motion.div>
    </div>
  );
};

export default ReportModal;
