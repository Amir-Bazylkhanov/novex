import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Languages,
  Lightbulb,
  Map,
  MessageSquare,
  Search,
  Send,
  SlidersHorizontal,
  Users,
  Wifi,
  XCircle,
} from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import {
  RobotAvatar,
  GearDecor,
  CircuitTrace,
  type RobotId,
} from '../robots/RobotAvatars.tsx';

const BADGE: Localized = {
  ru: 'ИИ-движок персонализации',
  kk: 'Жекелендірудің ИИ-қозғалтқышы',
  en: 'The AI personalization engine',
};

const TITLE_BEFORE: Localized = {
  ru: 'ИИ, который подстраивается под ',
  kk: 'Әрбір ',
  en: 'AI that adapts to ',
};
const TITLE_ACCENT: Localized = { ru: 'каждого', kk: 'оқушыға', en: 'every' };
const TITLE_AFTER: Localized = {
  ru: ' ученика',
  kk: ' бейімделетін ИИ',
  en: ' student',
};

const SUBTITLE: Localized = {
  ru: 'Никакой магии: диагностика измеряет уровень, карта знаний хранит его по темам, а Наставник меняет сложность и объясняет ошибки. Вот весь конвейер — этап за этапом.',
  kk: 'Ешбір сыйқыр емес: диагностика деңгейді өлшейді, білім картасы оны тақырыптар бойынша сақтайды, ал Тәлімгер күрделілікті өзгертіп, қателерді түсіндіреді. Міне, бүкіл конвейер — кезең-кезеңімен.',
  en: 'No magic: diagnostics measures the level, the knowledge map stores it per topic, and the Tutor changes difficulty and explains mistakes. Here is the whole pipeline, stage by stage.',
};

/* --- pipeline stages --- */

const ROBOT_LABELS: Record<RobotId, Localized> = {
  nov1: {
    ru: 'NOV-01 · ДИАГНОСТ',
    kk: 'NOV-01 · ДИАГНОСТ',
    en: 'NOV-01 · DIAGNOSTICIAN',
  },
  nov2: {
    ru: 'NOV-02 · НАСТАВНИК',
    kk: 'NOV-02 · ТӘЛІМГЕР',
    en: 'NOV-02 · TUTOR',
  },
  nov3: {
    ru: 'NOV-03 · КУРАТОР',
    kk: 'NOV-03 · КУРАТОР',
    en: 'NOV-03 · CURATOR',
  },
};

interface Stage {
  robot: RobotId;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  title: Localized;
  desc: Localized;
}

const STAGES: Stage[] = [
  {
    robot: 'nov1',
    icon: Search,
    title: { ru: 'Диагностика', kk: 'Диагностика', en: 'Diagnostics' },
    desc: {
      ru: 'Адаптивный тест определяет уровень по каждой теме — вопросы подстраиваются под ответы ученика.',
      kk: 'Бейімделетін тест әр тақырып бойынша деңгейді анықтайды — сұрақтар оқушының жауаптарына бейімделеді.',
      en: 'An adaptive placement test estimates the level per topic — questions adjust to the student’s answers.',
    },
  },
  {
    robot: 'nov1',
    icon: Map,
    title: { ru: 'Карта знаний', kk: 'Білім картасы', en: 'Knowledge map' },
    desc: {
      ru: 'Персональный граф знаний: что уже освоено, а где пробелы, которые мешают идти дальше.',
      kk: 'Жеке білім графы: не меңгерілді, ал алға жылжуға кедергі келетір олқылықтар қайда.',
      en: 'A personal knowledge graph: what is mastered and where the gaps are that block progress.',
    },
  },
  {
    robot: 'nov2',
    icon: SlidersHorizontal,
    title: { ru: 'Адаптация', kk: 'Бейімдеу', en: 'Adaptation' },
    desc: {
      ru: 'Сложность заданий движется вверх и вниз — от точности ответов и времени решения прямо сейчас.',
      kk: 'Тапсырмалардың күрделілігі дәл осы сәттегі жауап дәлдігі мен шешу уақытына қарай жоғарылап-төмендейді.',
      en: 'Task difficulty moves up and down based on live accuracy and response time.',
    },
  },
  {
    robot: 'nov2',
    icon: MessageSquare,
    title: { ru: 'Объяснение', kk: 'Түсіндіру', en: 'Explanation' },
    desc: {
      ru: 'Не сухое «неверно», а разбор шаг за шагом — на языке, который ученик понимает лучше всего.',
      kk: 'Жай ғана «қате» емес, оқушы ең жақсы түсінетін тілде қадамдап талдау.',
      en: 'Not a dry “incorrect”, but a step-by-step walkthrough in the language the student understands best.',
    },
  },
];

const HANDOFF_TEXT: Localized = {
  ru: 'А дальше в работу вступает Куратор: строит дорожную карту до цели и следит за каждым дедлайном.',
  kk: 'Әрі қарай іске Куратор кіріседі: мақсатқа дейінгі жол картасын құрып, әр мерзімді қадағалайды.',
  en: 'Then the Curator takes over: it builds the roadmap to the goal and tracks every deadline.',
};

/* --- AI feedback mock strings --- */

const MOCK_TASK_LABEL: Localized = {
  ru: 'Задание · Алгебра, 8 класс',
  kk: 'Тапсырма · Алгебра, 8 сынып',
  en: 'Task · Algebra, grade 8',
};
const MOCK_TASK: Localized = {
  ru: 'Решите уравнение: 2x² − 8x + 6 = 0',
  kk: 'Теңдеуді шешіңіз: 2x² − 8x + 6 = 0',
  en: 'Solve the equation: 2x² − 8x + 6 = 0',
};
const MOCK_STUDENT_LABEL: Localized = {
  ru: 'Ответ ученика',
  kk: 'Оқушының жауабы',
  en: 'Student’s answer',
};
const MOCK_WRONG: Localized = { ru: 'Неверно', kk: 'Қате', en: 'Incorrect' };

const MOCK_STEPS: Localized[] = [
  {
    ru: 'Разделим обе части на 2: x² − 4x + 3 = 0.',
    kk: 'Теңдеудің екі жағын да 2-ге бөлеміз: x² − 4x + 3 = 0.',
    en: 'Divide both sides by 2: x² − 4x + 3 = 0.',
  },
  {
    ru: 'По теореме Виета: сумма корней равна 4, произведение равно 3.',
    kk: 'Виет теоремасы бойынша: түбірлердің қосындысы 4-ке, көбейтіндісі 3-ке тең.',
    en: 'By Vieta’s theorem: the roots sum to 4 and their product is 3.',
  },
  {
    ru: 'Корни: x₁ = 1 и x₂ = 3. У тебя произведение вышло 1 · 2 = 2 — вот где ошибка.',
    kk: 'Түбірлер: x₁ = 1 және x₂ = 3. Сенде көбейтінді 1 · 2 = 2 болып шықты — қате дәл осы жерде.',
    en: 'The roots are x₁ = 1 and x₂ = 3. Your product came out as 1 · 2 = 2 — that is where the mistake is.',
  },
];

const MOCK_NEXT_LABEL: Localized = {
  ru: 'Следующий шаг',
  kk: 'Келесі қадам',
  en: 'Next step',
};
const MOCK_NEXT_TEXT: Localized = {
  ru: '5 коротких заданий на теорему Виета — закрепим и пойдём дальше.',
  kk: 'Виет теоремасына 5 қысқа тапсырма — бекітіп, алға жылжиймыз.',
  en: '5 quick tasks on Vieta’s theorem — lock it in and move on.',
};

/* --- honesty chips + chat teaser --- */

const CHIPS: Array<{
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  label: Localized;
}> = [
  {
    icon: Languages,
    label: {
      ru: 'Объясняет на казахском, русском и английском',
      kk: 'Қазақша, орысша және ағылшынша түсіндіреді',
      en: 'Tutors in Kazakh, Russian and English',
    },
  },
  {
    icon: Wifi,
    label: {
      ru: 'Работает даже при слабом интернете',
      kk: 'Нашар интернетте де жұмыс істейді',
      en: 'Works on low bandwidth',
    },
  },
  {
    icon: Users,
    label: {
      ru: 'Учитель всегда в курсе прогресса',
      kk: 'Мұғалім үдерістен әрқашан хабардар',
      en: 'The teacher stays in the loop',
    },
  },
];

const CHAT_TITLE: Localized = {
  ru: 'ИИ-чат с Наставником',
  kk: 'Тәлімгермен ИИ-чат',
  en: 'Chat with the Tutor',
};
const CHAT_DESC: Localized = {
  ru: 'Вопрос можно задать в любой момент — прямо из задания, на своём языке.',
  kk: 'Сұрақты кез келген уақытта қоюға болады — тапсырманың ішінен-ақ, өз тіліңде.',
  en: 'Ask a question at any moment — right from the task, in your own language.',
};
const CHAT_PLACEHOLDER: Localized = {
  ru: 'Почему корней два?',
  kk: 'Неге түбір екеу?',
  en: 'Why are there two roots?',
};
const CHAT_SEND: Localized = {
  ru: 'Отправить вопрос',
  kk: 'Сұрақ жіберу',
  en: 'Send question',
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const ROBOT_TEXT_COLOR: Record<RobotId, string> = {
  nov1: 'text-teal-dark',
  nov2: 'text-teal',
  nov3: 'text-coral',
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const AIPersonalization: React.FC = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const fu = (delay = 0) =>
    reduceMotion
      ? {}
      : { ...fadeUp, transition: { duration: 0.5, delay } };

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative overflow-hidden bg-canvas"
    >
      <GearDecor
        className="absolute -right-16 -top-16 h-56 w-56 text-mist/40"
        spin
      />
      <CircuitTrace className="absolute -left-8 bottom-16 h-36 w-64 text-teal-light/30" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div {...fu()} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-mist/25 px-3.5 py-1.5 text-xs font-semibold text-teal-dark">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            {loc(language, BADGE)}
          </span>
          <h2
            id="features-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            {loc(language, TITLE_BEFORE)}
            <span className="text-coral">{loc(language, TITLE_ACCENT)}</span>
            {loc(language, TITLE_AFTER)}
          </h2>
          <p className="mt-5 text-base text-slateink md:text-lg">
            {loc(language, SUBTITLE)}
          </p>
        </motion.div>

        {/* Pipeline stages */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title.en}
                {...fu(0.08 * i)}
                className="relative rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-teal-light/40"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-teal motion-safe:animate-pulse"
                />
                {i < STAGES.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-6 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-line lg:block"
                  />
                )}
                <div className="flex items-center gap-3">
                  <RobotAvatar robot={stage.robot} className="h-12 w-12 shrink-0" />
                  <span
                    className={`font-mono text-[11px] font-semibold uppercase tracking-widest ${ROBOT_TEXT_COLOR[stage.robot]}`}
                  >
                    {loc(language, ROBOT_LABELS[stage.robot])}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist/40">
                    <Icon className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink">
                    {loc(language, stage.title)}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slateink">
                  {loc(language, stage.desc)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* NOV-03 handoff strip */}
        <motion.div
          {...fu(0.2)}
          className="mt-6 flex items-center gap-4 rounded-2xl border border-line/50 bg-white p-4 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
        >
          <RobotAvatar robot="nov3" className="h-12 w-12 shrink-0" />
          <div className="min-w-0">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-coral">
              {loc(language, ROBOT_LABELS.nov3)}
            </span>
            <p className="mt-1 text-sm leading-relaxed text-slateink">
              {loc(language, HANDOFF_TEXT)}
            </p>
          </div>
        </motion.div>

        {/* Feedback mock + chat teaser */}
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <motion.div
            {...fu(0.1)}
            className="overflow-hidden rounded-2xl border border-line/60 bg-white shadow-[0_24px_60px_rgba(17,26,42,0.12)]"
          >
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-line/40 bg-canvas px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-coral-light" />
                <span className="h-2.5 w-2.5 rounded-full bg-mist" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-light" />
              </div>
              <span className="rounded-md border border-line/50 bg-white px-3 py-1 text-[11px] font-medium text-slateink">
                novex.kz/app
              </span>
            </div>

            <div className="p-4 sm:p-5">
              {/* task */}
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slateink">
                {loc(language, MOCK_TASK_LABEL)}
              </p>
              <p className="mt-2 rounded-xl border border-line/50 bg-canvas px-3.5 py-3 text-sm font-semibold text-ink">
                {loc(language, MOCK_TASK)}
              </p>

              {/* student answer */}
              <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-coral/30 bg-coral/10 px-3.5 py-2.5">
                <XCircle className="h-4 w-4 shrink-0 text-coral" aria-hidden="true" />
                <span className="text-xs text-slateink">
                  {loc(language, MOCK_STUDENT_LABEL)}:
                </span>
                <span className="text-sm font-semibold text-ink">x₁ = 1; x₂ = 2</span>
                <span className="ml-auto rounded-full bg-coral px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {loc(language, MOCK_WRONG)}
                </span>
              </div>

              {/* NOV-02 message */}
              <div className="mt-4 rounded-2xl rounded-tl-md border border-teal/25 bg-mist/25 p-4">
                <div className="flex items-center gap-2.5">
                  <RobotAvatar robot="nov2" className="h-9 w-9 shrink-0" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-teal">
                    {loc(language, ROBOT_LABELS.nov2)}
                  </span>
                </div>
                <ol className="mt-3 space-y-2">
                  {MOCK_STEPS.map((step, i) => (
                    <li key={step.en} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-[10px] font-bold text-teal-dark"
                      >
                        {i + 1}
                      </span>
                      {loc(language, step)}
                    </li>
                  ))}
                </ol>
                <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-teal/30 bg-white px-3.5 py-2.5">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm text-ink">
                    <span className="font-semibold text-teal-dark">
                      {loc(language, MOCK_NEXT_LABEL)}:
                    </span>{' '}
                    {loc(language, MOCK_NEXT_TEXT)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* chat teaser */}
          <motion.div
            {...fu(0.2)}
            className="rounded-2xl border border-line/50 bg-white p-5 shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
          >
            <div className="flex items-center gap-3">
              <RobotAvatar robot="nov2" className="h-12 w-12 shrink-0" />
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  {loc(language, CHAT_TITLE)}
                </h3>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-teal">
                  {loc(language, ROBOT_LABELS.nov2)}
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slateink">
              {loc(language, CHAT_DESC)}
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-line/50 bg-canvas px-3.5 py-2.5">
              <span className="min-w-0 flex-1 truncate text-sm text-slateink">
                {loc(language, CHAT_PLACEHOLDER)}
              </span>
              <button
                type="button"
                aria-label={loc(language, CHAT_SEND)}
                className={`${FOCUS_RING} flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal text-white transition-colors hover:bg-teal-dark`}
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* honesty chips */}
        <motion.div
          {...fu(0.15)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {CHIPS.map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.label.en}
                className="inline-flex items-center gap-2 rounded-full border border-line/50 bg-white px-4 py-2 text-xs font-medium text-slateink shadow-[0_1px_3px_rgba(17,26,42,0.04)]"
              >
                <Icon className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                {loc(language, chip.label)}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AIPersonalization;
