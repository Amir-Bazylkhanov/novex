import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Loader2,
  Route,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { useAuth, type Goal } from '../../context/AuthContext.tsx';
import { supabase } from '../../services/supabaseClient.ts';
import { askTutor } from '../../services/aiService.ts';
import { RobotAvatar } from '../robots/RobotAvatars.tsx';
import {
  TOPIC_LESSON_SLUGS,
  topicName,
  type DiagnosticLevel,
  type DiagnosticSubject,
  type SubjectResult,
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
const WEAK_INTRO: Localized = {
  ru: 'Начни с этих тем:',
  kk: 'Осы тақырыптардан баста:',
  en: 'Start with these topics:',
};
const LESSON_AVAILABLE: Localized = {
  ru: 'Урок есть — начни сейчас',
  kk: 'Сабақ дайын — қазір баста',
  en: 'Lesson available — start now',
};
const GRADE_UP_BTN: Localized = {
  ru: 'Пройти тест уровнем выше',
  kk: 'Бір деңгей жоғары тестті тапсыру',
  en: 'Take the next-level test',
};
const ACED_NEXT: Localized = {
  ru: 'Все ответы верные! Дальше — пробный тест в формате ЕНТ и задания повышенной сложности. Если интересно — олимпиадный трек: обсуди план с NOV-03.',
  kk: 'Барлық жауап дұрыс! Әрі қарай — ҰБТ форматындағы сынақ тесті мен күрделі деңгейдегі тапсырмалар. Қызық болса — олимпиадалық бағыт: жоспарды NOV-03-пен талқыла.',
  en: 'All answers correct! Next up — a practice test in the UNT format and advanced-level tasks. If you are interested, there is the olympiad track: discuss a plan with NOV-03.',
};
const MIXED_LINE: Localized = {
  ru: 'Ровный результат, слабых тем нет — NOV-01 предложит задания посложнее.',
  kk: 'Тұрақты нәтиже, әлсіз тақырып жоқ — NOV-01 қиынырақ тапсырмалар ұсынады.',
  en: 'A steady result with no weak topics — NOV-01 will suggest harder tasks.',
};
const AI_HEADING: Localized = {
  ru: 'Разбор от NOV-01',
  kk: 'NOV-01 талдауы',
  en: "NOV-01's analysis",
};
const AI_LOADING: Localized = {
  ru: 'NOV-01 анализирует твои результаты…',
  kk: 'NOV-01 нәтижелеріңді талдауда…',
  en: 'NOV-01 is analyzing your results…',
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
const CTA_DASHBOARD: Localized = {
  ru: 'Перейти к прогрессу',
  kk: 'Прогреске өту',
  en: 'Go to progress',
};
const CTA_LESSON: Localized = {
  ru: 'Начать урок',
  kk: 'Сабақты бастау',
  en: 'Start a lesson',
};

const scoreLine = (lang: 'ru' | 'kk' | 'en', score: number, total: number): string => {
  if (lang === 'kk') return `Дұрыс жауап: ${score} / ${total}`;
  if (lang === 'en') return `Correct: ${score} of ${total}`;
  return `Верно: ${score} из ${total}`;
};

const gradeUpText = (lang: 'ru' | 'kk' | 'en', grade: number): string => {
  if (lang === 'kk') {
    return `Барлық жауап дұрыс! Бұл пән бойынша ${grade} сынып бағдарламасы саған жеңіл сияқты. NOV-01 ${grade + 1} сынып деңгейін тексеруді ұсынады.`;
  }
  if (lang === 'en') {
    return `All answers are correct! It looks like the grade ${grade} curriculum in this subject is too easy for you. NOV-01 suggests checking the grade ${grade + 1} level.`;
  }
  return `Все ответы верные! Похоже, программа ${grade} класса по этому предмету тебе мала. NOV-01 предлагает проверить уровень ${grade + 1} класса.`;
};

/** Explicit language names for the AI prompt, so the reply matches the UI language. */
const LANGUAGE_NAMES: Record<'ru' | 'kk' | 'en', string> = {
  ru: 'Russian',
  kk: 'Kazakh',
  en: 'English',
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
const CHIP_RECO = 'border-teal/40 bg-teal/10 text-teal-dark transition-colors hover:bg-teal/20';

interface DiagnosticResultProps {
  results: SubjectResult[];
  grade: number;
  subjects: DiagnosticSubject[];
  goal: Goal | null;
  /** True when this run was a grade-up probe (?probe=<subject>) — changes the aced text and skips the profile update. */
  isProbe?: boolean;
}

const DiagnosticResult: React.FC<DiagnosticResultProps> = ({
  results,
  grade,
  subjects,
  goal,
  isProbe = false,
}) => {
  const { language } = useLanguage();
  const { user, profile, updateProfile } = useAuth();
  const [saveState, setSaveState] = useState<'saving' | 'saved' | 'error'>('saving');
  const persistedRef = useRef(false);
  const [aiText, setAiText] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(true);
  const aiRequestedRef = useRef(false);

  // The student's real grade comes from the profile; the prop is a fallback.
  const studentGrade = profile?.grade ?? grade;

  // Persist once: one diagnostic_results row per subject. A probe run must NOT
  // touch profiles.onboarded/goal — the student already onboarded.
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
      if (isProbe) {
        setSaveState('saved');
        return;
      }
      const { error: profileError } = await updateProfile({
        grade,
        subjects: [...subjects],
        goal,
        onboarded: true,
      });
      setSaveState(profileError ? 'error' : 'saved');
    };
    void persist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // AI layer: one automatic personalized analysis from NOV-01. This call is
  // intentionally FREE for the user — do NOT call spendNovas here.
  useEffect(() => {
    if (aiRequestedRef.current) return;
    aiRequestedRef.current = true;
    const run = async () => {
      const subjectLines = results
        .map((r) => {
          const weak = r.weakTopics.map((t) => topicName(language, t.slug)).join(', ') || 'none';
          const strong =
            r.strongTopics.map((t) => topicName(language, t.slug)).join(', ') || 'none';
          return `- ${loc(language, r.label)}: score ${r.score}/${r.total}, level ${r.level}, weak topics: ${weak}, strong topics: ${strong}`;
        })
        .join('\n');
      const prompt = `You are NOV-01, a friendly school diagnostician on the Novex platform. A student just finished a placement diagnostic.
Grade: ${studentGrade}. Goal: ${goal ?? 'not set'}.
Results:
${subjectLines}
Give a personalized 3-5 sentence recommendation on what to do next, referencing the specific weak and strong topics by name. Write entirely in ${LANGUAGE_NAMES[language]}. Plain text only — no markdown, no lists, no headings.`;
      const { text, error } = await askTutor({
        model: 'gpt-5.6-terra',
        messages: [{ role: 'user', content: prompt }],
      });
      if (error || !text) {
        // hide the card silently — the deterministic layer already covers the user
        setAiText(null);
        setAiLoading(false);
        return;
      }
      setAiText(text);
      setAiLoading(false);
    };
    void run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // one subject → a single centered wide card; two → two columns; three → three
  const gridClass =
    results.length === 1
      ? 'mx-auto grid w-full max-w-2xl gap-4'
      : results.length === 2
        ? 'grid gap-4 sm:grid-cols-2'
        : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3';

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
      <div className={gridClass}>
        {results.map((r) => (
          <section key={r.subject} aria-label={loc(language, r.label)} className={CARD}>
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                {loc(language, r.label)}
              </h2>
              <span className="shrink-0 rounded-full bg-mist/30 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
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

      {/* what to do next — deterministic, per subject */}
      <section aria-labelledby="next-steps-heading" className={CARD}>
        <div className="flex items-start gap-3">
          <Route className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
          <h2
            id="next-steps-heading"
            className="font-display text-base font-bold tracking-tight text-ink"
          >
            {loc(language, NEXT_STEPS_HEADING)}
          </h2>
        </div>

        {results.map((r) => (
          <div key={r.subject} className="mt-4">
            {results.length > 1 && (
              <p className="text-xs font-semibold uppercase tracking-wide text-slateink">
                {loc(language, r.label)}
              </p>
            )}

            {r.weakTopics.length > 0 ? (
              <>
                <p className="mt-1 text-sm text-slateink">{loc(language, WEAK_INTRO)}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {r.weakTopics.map((t) => {
                    const lessonSlug = TOPIC_LESSON_SLUGS[t.slug];
                    return (
                      <Link
                        key={t.slug}
                        to={lessonSlug ? `/learn/${lessonSlug}` : '/learn'}
                        title={lessonSlug ? loc(language, LESSON_AVAILABLE) : undefined}
                        className={`${FOCUS_RING} ${CHIP_BASE} ${CHIP_RECO}`}
                      >
                        {lessonSlug && <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />}
                        {loc(language, t.label)}
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : r.score === r.total ? (
              isProbe || studentGrade >= 12 ? (
                <p className="mt-1 text-sm text-ink">{loc(language, ACED_NEXT)}</p>
              ) : (
                <div className="mt-2 rounded-xl border border-teal-light bg-teal/5 p-4">
                  <p className="text-sm text-ink">{gradeUpText(language, studentGrade)}</p>
                  <Link
                    to={`/onboarding?probe=${r.subject}`}
                    className={`${FOCUS_RING} mt-3 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
                  >
                    {loc(language, GRADE_UP_BTN)}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              )
            ) : (
              <p className="mt-1 text-sm text-slateink">{loc(language, MIXED_LINE)}</p>
            )}
          </div>
        ))}
      </section>

      {/* AI layer — hidden silently on error */}
      {(aiLoading || aiText) && (
        <section
          aria-labelledby="ai-analysis-heading"
          className="rounded-2xl border border-teal-light bg-white p-6 shadow-[0_1px_3px_rgba(17,26,42,0.04)] sm:p-8"
        >
          <div className="flex items-start gap-4">
            <RobotAvatar robot="nov1" className="h-10 w-10 shrink-0" />
            <div className="min-w-0">
              <h2
                id="ai-analysis-heading"
                className="font-display text-base font-bold tracking-tight text-ink"
              >
                {loc(language, AI_HEADING)}
              </h2>
              {aiLoading ? (
                <p role="status" className="mt-2 flex items-center gap-2 text-sm text-slateink">
                  <Loader2 className="h-4 w-4 animate-spin text-teal" aria-hidden="true" />
                  {loc(language, AI_LOADING)}
                </p>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">{aiText}</p>
              )}
            </div>
          </div>
        </section>
      )}

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

      <div className="flex flex-wrap gap-3">
        <Link
          to="/dashboard"
          className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(33,159,162,0.25)] transition-colors hover:bg-teal-dark`}
        >
          {loc(language, CTA_DASHBOARD)}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          to="/learn"
          className={`${FOCUS_RING} inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal`}
        >
          {loc(language, CTA_LESSON)}
        </Link>
      </div>
    </div>
  );
};

export default DiagnosticResult;
