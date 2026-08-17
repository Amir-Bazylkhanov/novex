import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Route,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import type {
  DiagnosticLevel,
  DiagnosticSubject,
  SubjectResult,
} from '../../constants/diagnosticData.ts';

/* --- content --- */

const ROBOT_LABEL: Localized = {
  ru: 'NOV-01 · Диагност',
  kk: 'NOV-01 · Диагност',
  en: 'NOV-01 · Diagnostician',
};
const TITLE: Localized = {
  ru: 'Диагностика завершена',
  kk: 'Диагностика аяқталды',
  en: 'Diagnostic complete',
};
const SUBTITLE: Localized = {
  ru: 'NOV-01 построил твою стартовую карту знаний.',
  kk: 'NOV-01 сенің бастапқы білім картаңды құрды.',
  en: 'NOV-01 has built your starting knowledge map.',
};
const LEVEL_LABELS: Record<DiagnosticLevel, Localized> = {
  beginner: { ru: 'Начальный', kk: 'Бастапқы', en: 'Beginner' },
  intermediate: { ru: 'Средний', kk: 'Орташа', en: 'Intermediate' },
  advanced: { ru: 'Продвинутый', kk: 'Жоғары', en: 'Advanced' },
};
const WEAK_HEADING: Localized = {
  ru: 'Слабые темы',
  kk: 'Әлсіз тақырыптар',
  en: 'Weak topics',
};
const STRONG_HEADING: Localized = {
  ru: 'Сильные темы',
  kk: 'Мықты тақырыптар',
  en: 'Strong topics',
};
const NO_WEAK: Localized = {
  ru: 'Слабых тем не найдено — отличный результат.',
  kk: 'Әлсіз тақырып табылмады — тамаша нәтиже.',
  en: 'No weak topics found — excellent result.',
};
const NEXT_STEPS_HEADING: Localized = {
  ru: 'Что делать дальше',
  kk: 'Әрі қарай не істеу керек',
  en: 'What to do next',
};
const RECO_ALL_STRONG: Localized = {
  ru: 'Все темы дались легко. NOV-01 предложит задания посложнее, чтобы было интересно.',
  kk: 'Барлық тақырып оңай берілді. NOV-01 қызықты болуі үшін қиынырақ тапсырмалар ұсынады.',
  en: 'Every topic came easily. NOV-01 will suggest harder tasks to keep it interesting.',
};
const SAVING: Localized = {
  ru: 'Сохраняем результат…',
  kk: 'Нәтиже сақталуда…',
  en: 'Saving your result…',
};
const SAVED: Localized = {
  ru: 'Результат сохранён в профиле.',
  kk: 'Нәтиже профильге сақталды.',
  en: 'Result saved to your profile.',
};
const SAVE_ERROR: Localized = {
  ru: 'Не удалось сохранить результат. Проверь соединение — сама диагностика не потеряна.',
  kk: 'Нәтижені сақтау мүмкін болмады. Байланысты тексер — диагностиканың өзі жоғалмады.',
  en: 'Could not save the result. Check your connection — the diagnostic itself is not lost.',
};
const CTA_PROFILE: Localized = {
  ru: 'Перейти в профиль',
  kk: 'Профильге өту',
  en: 'Go to profile',
};

const scoreLine = (lang: 'ru' | 'kk' | 'en', score: number, total: number): string => {
  if (lang === 'kk') return `Дұрыс жауап: ${score} / ${total}`;
  if (lang === 'en') return `Correct: ${score} of ${total}`;
  return `Верно: ${score} из ${total}`;
};

const robotSummary = (
  lang: 'ru' | 'kk' | 'en',
  strongSubject: string,
  weakTopic: string,
): string => {
  if (lang === 'kk') {
    return `NOV-01: ең мықты пәнің — ${strongSubject}. Ең алдымен «${weakTopic}» тақырыбына көңіл бөлейік.`;
  }
  if (lang === 'en') {
    return `NOV-01: your strongest subject is ${strongSubject}. The topic that needs the most attention is "${weakTopic}".`;
  }
  return `NOV-01: твой самый сильный предмет — ${strongSubject}. Больше всего внимания нужно теме «${weakTopic}».`;
};

const recommendation = (lang: 'ru' | 'kk' | 'en', weakTopic: string): string => {
  if (lang === 'kk') {
    return `«${weakTopic}» тақырыбынан баста — NOV-01 алғашқы тапсырмаларды осы деңгейден жинады.`;
  }
  if (lang === 'en') {
    return `Start with "${weakTopic}" — NOV-01 has prepared your first tasks at exactly this level.`;
  }
  return `Начни с темы «${weakTopic}» — NOV-01 уже подготовил первые задания именно на этом уровне.`;
};

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const CARD =
  'rounded-2xl border border-line/50 bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8';

const CHIP_BASE =
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold';
const CHIP_WEAK = 'border-coral/40 bg-coral/10 text-coral';
const CHIP_STRONG = 'border-teal/40 bg-teal/10 text-teal-dark';

interface DiagnosticResultProps {
  results: SubjectResult[];
  grade: number;
  subjects: DiagnosticSubject[];
}

const DiagnosticResult: React.FC<DiagnosticResultProps> = ({ results, grade, subjects }) => {
  const { language } = useLanguage();
  const { user, updateProfile } = useAuth();
  const [saveState, setSaveState] = useState<'saving' | 'saved' | 'error'>('saving');
  const persistedRef = useRef(false);

  // Persist once: one diagnostic_results row per subject + profile flags.
  useEffect(() => {
    if (persistedRef.current) return;
    persistedRef.current = true;
    const persist = async () => {
      if (!user) {
        setSaveState('error');
        return;
      }
      const rows = results.map((r) => ({
        user_id: user.id,
        subject: r.subject,
        level: r.level,
        score: r.score,
        total: r.total,
        weak_topics: r.weakTopics.map((t) => t.slug),
        strong_topics: r.strongTopics.map((t) => t.slug),
      }));
      const { error } = await supabase.from('diagnostic_results').insert(rows);
      if (error) {
        setSaveState('error');
        return;
      }
      const { error: profileError } = await updateProfile({
        grade,
        subjects: [...subjects],
        onboarded: true,
      });
      setSaveState(profileError ? 'error' : 'saved');
    };
    void persist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Weakest subject → its first weak topic drives the recommendation.
  const weakestSubject = [...results].sort(
    (a, b) => a.score / Math.max(a.total, 1) - b.score / Math.max(b.total, 1),
  )[0];
  const weakestTopic = weakestSubject?.weakTopics[0] ?? null;
  const strongestSubject = [...results].sort(
    (a, b) => b.score / Math.max(b.total, 1) - a.score / Math.max(a.total, 1),
  )[0];

  return (
    <div className="space-y-6">
      <header className="flex items-start gap-4">
        <RobotAvatar robot="nov1" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
            {loc(language, ROBOT_LABEL)}
          </p>
          <h1
            id="diagnostic-result-heading"
            className="mt-0.5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            {loc(language, TITLE)}
          </h1>
          <p className="mt-1 text-sm text-slateink">{loc(language, SUBTITLE)}</p>
        </div>
      </header>

      {/* per-subject cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((r) => (
          <section key={r.subject} aria-label={loc(language, r.label)} className={CARD}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                {loc(language, r.label)}
              </h2>
              <span className="rounded-full bg-mist/30 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
                {loc(language, LEVEL_LABELS[r.level])}
              </span>
            </div>
            <p className="mt-1 text-sm text-slateink">{scoreLine(language, r.score, r.total)}</p>

            <div className="mt-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-coral">
                <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
                {loc(language, WEAK_HEADING)}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {r.weakTopics.length === 0 ? (
                  <span className="text-xs text-slateink">{loc(language, NO_WEAK)}</span>
                ) : (
                  r.weakTopics.map((t) => (
                    <span key={t.slug} className={`${CHIP_BASE} ${CHIP_WEAK}`}>
                      {loc(language, t.label)}
                    </span>
                  ))
                )}
              </div>
            </div>

            {r.strongTopics.length > 0 && (
              <div className="mt-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-teal-dark">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                  {loc(language, STRONG_HEADING)}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {r.strongTopics.map((t) => (
                    <span key={t.slug} className={`${CHIP_BASE} ${CHIP_STRONG}`}>
                      {loc(language, t.label)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* NOV-01 summary + what to do next */}
      <section aria-labelledby="next-steps-heading" className={CARD}>
        <p className="text-sm text-ink sm:text-base">
          {weakestTopic && strongestSubject
            ? robotSummary(
                language,
                loc(language, strongestSubject.label),
                loc(language, weakestTopic.label),
              )
            : loc(language, RECO_ALL_STRONG)}
        </p>
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-mist/25 p-4">
          <Route className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
          <div>
            <h2
              id="next-steps-heading"
              className="font-display text-base font-bold tracking-tight text-ink"
            >
              {loc(language, NEXT_STEPS_HEADING)}
            </h2>
            <p className="mt-1 text-sm text-slateink">
              {weakestTopic
                ? recommendation(language, loc(language, weakestTopic.label))
                : loc(language, RECO_ALL_STRONG)}
            </p>
          </div>
        </div>
      </section>

      {/* save status */}
      <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm">
        {saveState === 'saving' && (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-teal" aria-hidden="true" />
            <span className="text-slateink">{loc(language, SAVING)}</span>
          </>
        )}
        {saveState === 'saved' && (
          <>
            <CheckCircle2 className="h-4 w-4 text-teal" aria-hidden="true" />
            <span className="text-teal-dark">{loc(language, SAVED)}</span>
          </>
        )}
        {saveState === 'error' && (
          <>
            <AlertTriangle className="h-4 w-4 text-coral" aria-hidden="true" />
            <span className="text-coral">{loc(language, SAVE_ERROR)}</span>
          </>
        )}
      </div>

      <Link
        to="/profile"
        className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
      >
        {loc(language, CTA_PROFILE)}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default DiagnosticResult;
