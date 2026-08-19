# NOVEX — Landing Page Build Spec

> Single source of truth for the two coding agents (Kimi = foundation/chrome, Qwen = sections).
> Read this file completely before writing any code. Do not deviate from the contracts below.

---

## 0. What we are building

**Novex** — an AI platform that gives Kazakhstani school students (grades 7–12) personalized
education regardless of which school or region they are in.

This is a hackathon MVP for **Future Minds Hackathon 2026 — Track 2: Social Impact Challenge**.
Right now we are building **only the public landing page** (the app itself comes next), but the
landing must clearly demonstrate every required MVP capability so a judge reading it understands
the full product.

### The problem (from the case brief — use this framing in copy)
- Education quality in Kazakhstan varies sharply by school, region and access to resources.
- Students in regions and small towns have no access to strong tutors or extra materials.
- Teachers are overloaded and cannot find and close every student's knowledge gaps.
- Prep materials for exams (ЕНТ), olympiads and admissions are scattered and not adapted to level.
- A scalable AI system is needed to personalize learning without hiring a tutor for every student.

### The product vision the landing must communicate (5 steps)
1. Student signs up and creates a profile.
2. Picks grade, subject and goal (exam / olympiad / topic revision).
3. Platform recommends materials and tasks matched to their level.
4. Student completes tasks and gets AI feedback.
5. Teacher / admin tracks progress through a dashboard.

### Required MVP capabilities the landing must showcase
- **A.** Home page: what the platform is, who it is for, value prop (personalization + AI support),
  clear CTAs — «Начать обучение», «Пройти диагностику».
- **B.** Student profile & diagnostics: grade / subject / goal selection, short level diagnostic.
- **C.** AI personalization module: recommendations from profile + diagnostic results, adaptive
  task difficulty.
- **D.** Student dashboard: progress by topic, weak spots the system detected, upcoming goals and
  deadlines (e.g. exam date).
- **E.** Tasks & feedback module: 2–3 topics/modules with tasks or mini-tests, correct/incorrect
  feedback with explanation.
- **F.** Teacher / admin panel: class-level progress statistics, ability to add new topics,
  tasks or materials.
- **Bonus (show these, they earn points):** AI chat assistant, tri-language UI (RU/KK/EN),
  gamification (points, achievements), deadline & revision reminders, mobile-friendly design,
  accessibility (text-to-speech for special educational needs), personal prep roadmap builder.

### Judging weights (why the landing is structured the way it is)
Problem relevance 20 · Innovation 25 · **Depth of AI usage 20** · Feasibility 15 ·
Prototype quality 10 · Presentation 10.
=> The AI section must be concrete and technical, not a vague "powered by AI" banner.

---

## 1. Brand and design system

### 1.1 Palette (LOCKED — do not invent other colors)

| Role | Hex | Token |
|---|---|---|
| Background (page) | `#FAFBFB` | `canvas` |
| Primary dark / navy text | `#111A2A` | `ink` |
| Primary teal | `#219FA2` | `teal` |
| Dark teal | `#276F83` | `teal-dark` |
| Light teal | `#71C5C7` | `teal-light` |
| Very light blue-teal | `#ABCFD3` | `mist` |
| Accent coral | `#F38A76` | `coral` |
| Light coral | `#E7AA9C` | `coral-light` |
| Secondary gray text | `#69758B` | `slateink` |
| Light gray border/UI | `#B1B9C5` | `line` |

The five key colors that carry the design: `canvas` background, `teal` primary,
`ink` primary dark, `mist` light, `coral` accent.

**Usage rules**
- The page is **light**. Background is `canvas` (`#FAFBFB`), never black, never dark mode.
- Headlines and body text are `ink`. Secondary/supporting text is `slateink`.
- `teal` is the primary action color: primary buttons, active states, links, icon glyphs.
- `teal-dark` for hover on teal surfaces and for deeper headings inside teal blocks.
- `mist` / `teal-light` for soft tinted section backgrounds, badges, illustration fills, progress
  track fills. Tinted sections use `mist` at low opacity or a `mist → canvas` gradient.
- `coral` is a **sparing** accent: highlight one word in a headline, "Популярный" badge, one stat,
  warning/attention chips, the emphasis dot at the end of a hero headline. Roughly one coral
  element per viewport — it must never compete with teal.
- Borders are `line` (often at 40–60% opacity for softness). Cards are white (`#FFFFFF`) on the
  `canvas` background with a subtle border, not a heavy shadow.
- **No purple, no black backgrounds anywhere.** (The predecessor project was purple-on-black; this
  one is teal-on-white. Any purple that appears is a bug.)

### 1.2 Tailwind theme — copy this block VERBATIM into `index.css`

```css
@import "tailwindcss";

@theme {
  --color-canvas: #FAFBFB;
  --color-ink: #111A2A;
  --color-teal: #219FA2;
  --color-teal-dark: #276F83;
  --color-teal-light: #71C5C7;
  --color-mist: #ABCFD3;
  --color-coral: #F38A76;
  --color-coral-light: #E7AA9C;
  --color-slateink: #69758B;
  --color-line: #B1B9C5;

  --font-display: 'Manrope', ui-sans-serif, system-ui, sans-serif;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
}
```

`font-mono` exists for **robot micro-labels only** (unit IDs like `NOV-01`, status readouts,
telemetry chips). Never use it for body copy or headings. See §6.

This makes `bg-canvas`, `text-ink`, `text-teal`, `bg-teal`, `border-line`, `bg-mist`,
`text-coral`, `font-display`, `font-sans`, and every opacity variant (`bg-mist/30`,
`border-line/50`, `text-teal/70`, …) available as normal Tailwind classes.
**Both agents must use these token classes — never raw hex in `className`.**

### 1.3 Typography
- Display / headings: **Manrope** (600, 700, 800) via `font-display`.
- Body / UI: **Inter** (300, 400, 500, 600) via `font-sans`.
- Both are loaded from Google Fonts in `index.html` with `&subset=cyrillic` coverage — Cyrillic
  and Kazakh glyphs (ә, ғ, қ, ң, ө, ұ, ү, һ, і) must render correctly.
- Scale: hero h1 `text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl`, tracking-tight,
  leading-[1.08]. Section h2 `text-3xl md:text-4xl lg:text-5xl`. Body `text-base md:text-lg`.
- `font-display` on all headings, `font-sans` on everything else.

### 1.4 Layout & motion
- Content container: `max-w-7xl mx-auto px-5 sm:px-6 lg:px-8`. Narrow text blocks `max-w-2xl`.
- Section vertical rhythm: `py-20 md:py-28`. Alternate white / `canvas` / soft `mist/25` tinted
  section backgrounds so the page has visible bands (see the reference layout in §3).
- Radii: cards `rounded-2xl`, buttons `rounded-xl`, pills/badges `rounded-full`,
  large feature panels `rounded-3xl`.
- Cards: `bg-white border border-line/50 rounded-2xl` + `shadow-[0_1px_3px_rgba(17,26,42,0.04)]`.
  On hover: `hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(33,159,162,0.10)]
  hover:-translate-y-1 transition-all duration-200`.
- Primary button: `bg-teal text-white hover:bg-teal-dark` + `shadow-[0_4px_14px_rgba(33,159,162,0.25)]`.
- Secondary button: `bg-white text-ink border border-line hover:border-teal hover:text-teal`.
- Motion: use `framer-motion` `whileInView` fade-up (`opacity 0→1`, `y 24→0`, `duration 0.5`,
  `viewport={{ once: true, margin: '-80px' }}`) with a small per-item stagger. Respect
  `prefers-reduced-motion`. Keep it tasteful — no bouncing, no parallax, no autoplay video.
- **Mobile-first and fully responsive.** Every grid collapses cleanly to one column. Test mentally
  at 375px. This is scored (mobile-friendly is an explicit bonus criterion).

### 1.5 Accessibility (also a scored bonus)
- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`.
- Every section has an `id` and an `aria-labelledby` pointing at its heading.
- All interactive elements are real `<button>` / `<a>` with visible focus rings:
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
  focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`.
- Icons are `aria-hidden="true"`; icon-only buttons get `aria-label`.
- Text contrast: `slateink` on `canvas` passes AA; never put `mist` or `line` text on white.
- FAQ accordion is keyboard operable with `aria-expanded` / `aria-controls`.

---

## 2. Technical contracts (BOTH agents depend on these — do not change signatures)

Directory layout is **flat, not nested under `src/`** (inherited from the Locus convention).

```
index.html
index.tsx                      → mounts <App/>
index.css                      → tailwind + @theme + global styles
App.tsx                        → router shell
vite.config.ts
tsconfig.json
utils/i18n.ts                  → Lang, Localized, loc()
context/LanguageContext.tsx    → LanguageProvider, useLanguage()
components/Header.tsx
components/Footer.tsx
components/LandingPage.tsx     → assembles all sections
components/landing/*.tsx       → one file per section
```

### 2.1 `utils/i18n.ts` — exact contents

```ts
export type Lang = 'ru' | 'kk' | 'en';

export interface Localized {
  ru: string;
  kk: string;
  en: string;
}

/** Pick the string for the active language. Falls back kk → ru → en. */
export function loc(lang: Lang, text: Localized): string {
  if (lang === 'ru') return text.ru;
  if (lang === 'kk') return text.kk || text.ru;
  return text.en;
}
```

### 2.2 `context/LanguageContext.tsx` — exact public API

```ts
export const LanguageProvider: React.FC<{ children: React.ReactNode }>;
export function useLanguage(): { language: Lang; setLanguage: (l: Lang) => void };
```

- Default language is **`'ru'`**.
- Persist the choice in `localStorage` under the key `novex.lang`; read it back on init.
- Keep `document.documentElement.lang` in sync with the active language.

### 2.3 How every section component consumes language

```tsx
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

const { language } = useLanguage();
// …
<h2>{loc(language, TITLE)}</h2>
```

### 2.4 Content ownership rule (this is what lets the two agents work in parallel)

**Each section component owns its own content**, declared as module-level `const`s typed with
`Localized` at the top of its own file. There is **no shared content file** — do not create one,
do not import content across section files.

```tsx
const TITLE: Localized = {
  ru: 'Персональный ИИ-репетитор для каждого ученика',
  kk: 'Әр оқушыға арналған жеке ИИ-тәлімгер',
  en: 'A personal AI tutor for every student',
};
```

**All three languages are mandatory for every user-visible string.** Kazakh must be real Kazakh
(not transliterated Russian). Russian is the primary language and must read naturally — this is a
Kazakhstani product for Kazakhstani schools.

### 2.5 Imports & conventions
- Import paths **include the `.tsx` / `.ts` extension** (Locus convention, `allowImportingTsExtensions`).
- `import React from 'react';` at the top of every component file.
- Every component: `const Name: React.FC = () => { … }; export default Name;`
- Icons come from `lucide-react` only. No emoji as UI iconography, no external image URLs, no
  external asset requests of any kind — the whole page must render offline.
- Illustrations / product mocks are built from **inline JSX + Tailwind + inline SVG**. No image
  files. (This also keeps the demo fast on weak regional connections — a talking point.)
- TypeScript must be clean: no `any`, no unused imports, no unused vars.

---

## 3. Page composition (top → bottom)

`components/LandingPage.tsx` renders sections in exactly this order:

| # | Component | File | Owner |
|---|---|---|---|
| — | Header (sticky) | `components/Header.tsx` | **Kimi** |
| 1 | Hero | `components/landing/Hero.tsx` | **Kimi** |
| 2 | Problem / context | `components/landing/ProblemSection.tsx` | **Qwen** |
| 3 | How it works (5 steps) | `components/landing/HowItWorks.tsx` | **Qwen** |
| 3.5 | **Three robots of Novex** | `components/landing/RobotTeam.tsx` | **Kimi** |
| 4 | AI personalization engine | `components/landing/AIPersonalization.tsx` | **Qwen** |
| 5 | Subjects & modules | `components/landing/SubjectsGrid.tsx` | **Qwen** |
| 6 | Student dashboard preview | `components/landing/StudentDashboardPreview.tsx` | **Qwen** |
| 7 | Teacher / school panel | `components/landing/TeacherPanel.tsx` | **Qwen** |
| 8 | Social impact stats | `components/landing/ImpactStats.tsx` | **Qwen** |
| 9 | Pricing / free for schools | `components/landing/Pricing.tsx` | **Qwen** |
| 10 | FAQ | `components/landing/FAQ.tsx` | **Qwen** |
| 11 | Final CTA | `components/landing/FinalCTA.tsx` | **Qwen** |
| — | Footer | `components/Footer.tsx` | **Kimi** |

Alternate section backgrounds so bands are visible, e.g.:
1 white/`canvas` → 2 `mist/25` → 3 white → 4 `canvas` → 5 white → 6 `mist/20` → 7 white →
8 teal band → 9 `canvas` → 10 white → 11 teal/gradient band.

### Section briefs

**Header** — sticky, `bg-canvas/85 backdrop-blur-md border-b border-line/50`, becomes solid on
scroll. Left: Novex wordmark + logo glyph (inline SVG, teal). Center nav: Возможности · Как это
работает · Предметы · Для школ · FAQ (smooth-scroll anchors). Right: RU/KK/EN language switcher
(compact segmented control or dropdown), «Войти» ghost button, «Начать бесплатно» teal button.
Full mobile hamburger menu with a slide-down panel that closes on link click and on Escape.

**1. Hero** — badge pill («Future Minds Hackathon 2026 · Social Impact» or «ИИ для школ
Казахстана»). H1 with one coral-accented word, e.g. «Персональное образование — **для каждого**
ученика Казахстана.» Sub: one sentence on what it is + who it is for (7–12 класс, любой регион).
Two CTAs: primary «Пройти диагностику» (teal, arrow icon), secondary «Начать обучение». Trust row
underneath (e.g. «Работает на казахском, русском и английском · Бесплатно для школ»). To the
right (stacking below on mobile): a **product UI mock built in JSX** — a browser-less app window
showing a student dashboard: sidebar nav, greeting, subject progress cards with teal progress
bars, a weak-topics chip row, an XP/streak badge, and a small upcoming-deadline card (ЕНТ date).
Soft `mist` blurred blobs behind it. This mock is the single most important visual on the page —
make it look like a real product screenshot.

**2. Problem** — heading framing the inequality. Four cards, each = one bullet from §0 (regional
access, overloaded teachers, scattered materials, no scalable personalization), each with a
lucide icon in a `mist/40` rounded square and a one-line consequence. Include one coral-accented
statistic callout about the gap between city and rural schools. Keep claims qualitative or clearly
labelled as illustrative — do not invent precise official statistics.

**3. How it works** — the 5 steps from §0 as a numbered horizontal timeline on desktop
(connector line in `line`/`mist`), vertical stack on mobile. Each step: number chip, icon, title,
one-sentence description. Step 5 (teacher dashboard) visually hands off to section 7.

**4. AI personalization engine** — *the highest-scoring section, make it concrete.* Explain the
pipeline as 4 labelled stages: **Диагностика** (adaptive placement test estimates level per topic)
→ **Карта знаний** (a per-student knowledge graph of mastered vs weak topics) → **Адаптация**
(task difficulty moves up/down from live accuracy and response time) → **Объяснение** (AI tutor
returns a step-by-step explanation in the student's language, not just "неверно"). Pair this with
a mock **AI feedback card**: a math task, the student's wrong answer, and the AI's step-by-step
correction plus "следующий шаг" recommendation. Add a small row of technical honesty chips —
tri-language LLM tutoring, works on low bandwidth, teacher stays in the loop. Mention the AI chat
assistant here.

**5. Subjects & modules** — grid of subject cards for grades 7–12: Математика, Физика, Химия,
Биология, Информатика, Қазақ тілі мен әдебиеті, English, История Казахстана. Each card: lucide
icon on a soft tinted square, subject name, short line (e.g. "От основ до ЕНТ"), topic count.
Above/below: goal chips — ЕНТ · Олимпиады · Повторение темы · Поступление. Hover lifts the card.

**6. Student dashboard preview** — two-column: left, a JSX mock of the personal cabinet (progress
by topic with teal bars, "Слабые места" list with coral chips, upcoming deadline card with exam
countdown, achievements/XP row); right, 3–4 bullet features explaining what the student sees.
This is requirement **D** — make it unmistakable.

**7. Teacher / school panel** — mirror of section 6, reversed columns. JSX mock of the teacher
dashboard: class average, a small bar chart of class performance by topic (inline SVG or divs),
a student table with progress bars and a "нужна помощь" coral flag, and a visible
«Добавить модуль» button. Bullets: class-level statistics, per-student drilldown, add new topics /
tasks / materials, deadline reminders. This is requirement **F**.

**8. Impact stats** — full-width teal band (`bg-teal` or `teal → teal-dark` gradient) with white
text. 4–5 metrics framed as *target social impact*, clearly labelled as goals, not fake traction —
e.g. "17 областей Казахстана", "3 языка интерфейса", "0 ₸ для школ", "24/7 ИИ-поддержка".
Do not fabricate user counts.

**9. Pricing / free for schools** — three cards: **Ученик · Бесплатно** (diagnostics, base
modules, limited AI), **Про** (unlimited AI tutor, full ЕНТ/olympiad prep, roadmap) with a coral
«Популярный» ribbon and a scale-105 lift, **Школа** (teacher panel, class analytics, content
authoring, "Бесплатно для государственных школ" — the social-impact story). Feature checklists
with teal check icons. Month/year toggle optional.

**10. FAQ** — accordion, 6 questions, single-open behavior, chevron rotates. Cover: Нужен ли
интернет / как работает на слабой связи · Бесплатно ли это для учеников и школ · На каких языках ·
Как ИИ определяет уровень · Заменяет ли это учителя (answer: no — it gives teachers time back) ·
Как школе подключиться.

**11. Final CTA** — teal/gradient band, white text, headline restating the mission, two buttons
(primary white-on-teal «Пройти диагностику», secondary outlined «Для школ и учителей»), plus a
small reassurance line.

**Footer** — 4 columns: brand + tagline + mission line, Продукт, Для школ, Поддержка. Language
switcher repeat, contact line, © 2026 Novex, and a discreet "Future Minds Hackathon 2026 ·
Social Impact" credit. Background white or `ink` — pick `ink` with `canvas` text for a strong
close, keeping links AA-contrast.

---

## 4. Copy rules
- Primary language RU, plus full KK and EN for every string.
- Tone: warm, plain, confident. Written for a 14-year-old and their teacher — not for investors.
- No hype words ("революционный", "уникальный"), no invented traction numbers, no fake logos,
  no fake testimonials with real-sounding named people and photos.
- Every claim must be something the MVP can actually demonstrate.
- Use Kazakhstani context naturally: ЕНТ, области, сельские школы, НИШ/обычные школы, олимпиады.

### 4.1 Валюта «Новасы» (Novas currency)

The in-app currency is **Новасы** (kk: Новас, en: Novas), always shown with the gear icon ⚙
(lucide `Cog`). Russian declension rule — follow it in every new string:

- **«Новасов»** (genitive plural) whenever the word is governed by a number or acts as a
  counted/measured label: «171 новасов заработано» → label «НОВАСОВ ЗАРАБОТАНО»,
  «+500 ⚙ Новасов каждый месяц», «100 ⚙ Новасов на старте».
- **«Новасы»** only as plain nominative/accusative plural subject or object:
  «Новасы закончились», «Новасы — валюта Novex», «Заработай первые новасы», «Потрать новасы».

In Kazakh a numeral takes the singular: «100 ⚙ Новас», «Сізге {amount} новас берілді».

## 6. ROBOT THEME (overrides anything above that conflicts)

Novex has a signature visual theme, the way the predecessor project had a space/cosmos theme
(stars, galaxies, planets). **Novex's theme is robots.** Where that project had three galaxies,
Novex has **three robots**.

The register is **robotic, not mechanical**: modern friendly robotics and AI — soft rounded
shapes, clean panels, glowing indicators, circuit traces. It is **not** steampunk, not industrial
machinery, not grease and rivets and heavy iron. Gears (шестерёнки) appear, but as **clean
thin-stroke outline motifs**, never as chunky metal cogwheels.

### 6.1 The three robots

Each robot is one AI helper owning one direction of the learning journey. This mapping is the point —
it turns "powered by AI" into three concrete, demonstrable jobs, which is exactly what the
20-point *depth of AI usage* criterion rewards.

| Unit | Name | Job | Maps to MVP req. | Accent |
|---|---|---|---|---|
| `NOV-01` | **Академик** / Академик / Academic | Leads 'Академическая база': runs the placement test, builds the knowledge map, explains step by step in RU/KK/EN, adapts task difficulty, builds the roadmap to ЕНТ/olympiad, chats as the AI tutor | **B** + **C** + **D** + **E** | `teal-dark` |
| `NOV-02` | **Практик** / Практик / Practitioner | Leads 'Жизненные навыки' (finance, communication, psychology, productivity) | — | `teal` |
| `NOV-03` | **Кибер** / Кибер / Cyber | Leads 'Навыки будущего' (programming, entrepreneurship, creativity, career) | — | `coral` |

Kazakh and English names must be real translations, same rule as all other copy.
Unit codes (`NOV-01`) are always rendered in `font-mono uppercase tracking-widest`.

### 6.2 Shared robot art — `components/robots/RobotAvatars.tsx` (owned by Kimi A)

This file is the theme's foundation. **Exact public API — every other agent codes against it:**

```tsx
export type RobotId = 'nov1' | 'nov2' | 'nov3';

/** Inline-SVG robot mascot. Square aspect. Size it with className, e.g. "h-24 w-24". */
export const RobotAvatar: React.FC<{ robot: RobotId; className?: string }>;

/** Thin-stroke outline gear. Decorative only — always aria-hidden. */
export const GearDecor: React.FC<{ className?: string; teeth?: number; spin?: boolean }>;

/** Thin circuit/PCB trace lines with node dots. Decorative only — always aria-hidden. */
export const CircuitTrace: React.FC<{ className?: string }>;
```

**How to draw the robots** (all inline SVG, no image files, no external requests):
- A rounded-square head (`rx` ≈ 22% of width) — friendly, not a humanoid skull.
- Two glowing eyes: rounded rects or circles in the robot's accent color, with a soft halo.
  Different eye shapes per unit so the three read as distinct characters —
  `NOV-01` narrow scanner slits, `NOV-02` large round friendly eyes, `NOV-03` half-moon "smiling" eyes.
- A short antenna with a small glowing tip dot.
- A body/chest panel with a status LED and 2–3 thin readout lines.
- Flat fills from the palette + one soft inner highlight. No gradients heavier than two stops,
  no metal texture, no drop shadows on the SVG itself.
- Each robot must be recognizable at 40px and still pleasant at 200px.

**Gears and circuits** are background decoration only: `mist` or `teal-light` at 15–35% opacity,
1.5–2px stroke, never filled solid, never in front of text, always `aria-hidden="true"`.

### 6.3 Applying the theme across the page
- **Section backgrounds:** one or two large outline gears bleeding off the edge at low opacity,
  and/or a circuit trace running between sections. Subtle — the page must still read as clean and
  white, not busy.
- **Cards:** treat feature/subject cards as robot *panels* — an optional 1px top bar in
  `teal-light/40` with a small LED dot in the corner. Keep this restrained; not every card needs it.
- **Step chips** in HowItWorks use small outline gear glyphs behind the step number.
- **Micro-labels:** `font-mono` uppercase `tracking-widest` `text-[11px]` for things like
  `NOV-01 · АКАДЕМИК`, `СТАТУС: АКТИВЕН`, `УРОВЕНЬ 7`. Use sparingly — they are seasoning.
- **The AI section (§3 item 4)** now attributes each of its four pipeline stages to a robot:
  Диагностика → `NOV-01`, Карта знаний → `NOV-01`, Адаптация → `NOV-01`,
  Объяснение → `NOV-01`, with `NOV-01` owning the roadmap/deadline follow-through.
  Show the relevant `RobotAvatar` next to each stage.
- **The AI feedback mock** is framed as a message *from* `NOV-01 Академик`, with its avatar.
- **The teacher panel mock** shows `NOV-01` surfacing "these 4 students need help".
- **Hero** gets `NOV-01` as a friendly presence near the product mock, plus a faint gear/circuit
  field behind it.
- **Footer** gets the three robots as a small row of avatars.

### 6.4 New section — `components/landing/RobotTeam.tsx`, `<section id="robots">`
Headline along the lines of «Три робота, которые учат по-разному» / three units, one student.
Three large cards side by side (stacking on mobile), one per robot:
big `RobotAvatar`, `font-mono` unit code, name, one-line job, and 2–3 concrete capability bullets
tied to the MVP requirement it serves. Each card tinted with its robot's accent (border + LED +
icon color). A thin `CircuitTrace` connects the three cards on desktop to show they are one system
handing off to each other. This section sits directly after HowItWorks.

### 6.5 Motion
- Gears rotate slowly and continuously (30–60s per revolution), opposite directions when paired.
- LED/eye glow pulses gently (2–3s cycle).
- Antenna tip blinks occasionally.
- All of it is **disabled** under `prefers-reduced-motion: reduce` — render the static state.
- Never animate anything that moves layout or distracts from reading.

### 6.6 Section ids (MANDATORY — the header and footer nav link to these)
`#problem` · `#how-it-works` · `#robots` · `#features` (AI engine) · `#subjects` ·
`#dashboard` · `#for-schools` (teacher panel) · `#impact` · `#pricing` · `#faq` · `#cta`

Header nav (5 items): Роботы `#robots` · Как это работает `#how-it-works` ·
Предметы `#subjects` · Для школ `#for-schools` · FAQ `#faq`.

---

## 7. AUTH & PROFILE (phase 2)

Supabase project `nqjrtltqmjyzfmoytwvl` (eu-central-1). Client keys are in `.env.local` as
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Email + password auth only for the MVP —
no OAuth, no magic links.

### 7.1 `services/supabaseClient.ts` — exact API
```ts
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } },
);
```

### 7.2 `context/AuthContext.tsx` — FROZEN public API
```ts
export type Role = 'student' | 'teacher' | 'admin';
export type Goal = 'ent' | 'olympiad' | 'revision' | 'admission';

export interface Profile {
  id: string;
  full_name: string | null;
  role: Role;
  grade: number | null;          // 7..12
  subjects: string[];            // subject slugs
  goal: Goal | null;
  language: Lang;                // 'ru' | 'kk' | 'en'
  school: string | null;
  region: string | null;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }>;

export function useAuth(): {
  user: { id: string; email: string } | null;
  profile: Profile | null;
  loading: boolean;              // true until the initial session check resolves
  signIn(email: string, password: string): Promise<{ error: string | null }>;
  signUp(email: string, password: string, fullName: string): Promise<{ error: string | null }>;
  signOut(): Promise<void>;
  updateProfile(patch: Partial<Profile>): Promise<{ error: string | null }>;
};
```
- Subscribe to `supabase.auth.onAuthStateChange` and keep `user` in sync; unsubscribe on unmount.
- Load the row from `public.profiles` whenever `user` changes; `profile` is null while signed out.
- Error strings returned to callers must be **localized user-facing text**, never a raw
  Supabase error code. Map at minimum: invalid credentials, email already registered,
  weak password, network failure.

### 7.3 Database — `supabase/migrations/0001_profiles.sql`
One table, `public.profiles`, keyed by `auth.users.id`:

| column | type | notes |
|---|---|---|
| `id` | `uuid` PK | `references auth.users(id) on delete cascade` |
| `full_name` | `text` | |
| `role` | `text` not null default `'student'` | check in student/teacher/admin |
| `grade` | `smallint` | check between 7 and 12 |
| `subjects` | `text[]` not null default `'{}'` | |
| `goal` | `text` | check in ent/olympiad/revision/admission |
| `language` | `text` not null default `'ru'` | check in ru/kk/en |
| `school` | `text` | |
| `region` | `text` | |
| `created_at` | `timestamptz` not null default `now()` | |
| `updated_at` | `timestamptz` not null default `now()` | |

Hard requirements:
- `alter table public.profiles enable row level security;`
- Three policies, all `to authenticated`, all wrapping the function call:
  `select` / `insert` / `update` where `(select auth.uid()) = id`. **No delete policy.**
  Wrapping as `(select auth.uid())` is mandatory — an unwrapped `auth.uid()` is re-evaluated
  per row and is the single most common RLS performance bug.
- A `security definer` trigger `public.handle_new_user()` with `set search_path = ''` that
  inserts a profile row on `auth.users` insert, taking `full_name` from
  `new.raw_user_meta_data->>'full_name'`. Fully schema-qualify every identifier inside it.
- An `updated_at` touch trigger on update.
- No extra index needed for RLS: `id` is the primary key, so the PK index already serves it.
- Lowercase, unquoted identifiers throughout.

### 7.4 Pages & routing
| Route | Component | Access |
|---|---|---|
| `/login` | `components/auth/LoginPage.tsx` | public; redirect to `/profile` if already signed in |
| `/signup` | `components/auth/SignupPage.tsx` | public; same redirect |
| `/profile` | `components/ProfilePage.tsx` | protected |

- `components/ProtectedRoute.tsx` wraps protected routes: while `loading` render a centered
  spinner, if no `user` `<Navigate to="/login" replace state={{ from: location }} />`.
- After sign-in, return the user to `state.from` if present, else `/profile`.
- Auth pages share the landing page's visual language: `canvas` background, white card
  `rounded-2xl border border-line/50`, teal primary button, a `RobotAvatar robot="nov2"` as a
  friendly greeter, and the Novex wordmark linking home.
- `ProfilePage` sections: account (email, display name), **learning profile — grade 7–12,
  subjects, goal (ЕНТ / олимпиада / повторение / поступление), school, region**, interface
  language (writes through to both the profile row and `useLanguage().setLanguage`), and sign out.
  The learning-profile block is MVP requirement **B** — it must save and reload correctly.
- `Header` reflects auth state: signed out → «Войти» + «Начать бесплатно»; signed in → the
  user's name/initial linking to `/profile` and a sign-out control. Works in the mobile menu too.
- Every string in all three languages, same `loc()` contract as everywhere else.

---

## 5. Definition of done
- `npm run build` passes with zero TypeScript errors.
- `npm run dev` renders the full page with no console errors or warnings.
- No purple, no dark background, no raw hex in `className`, no external network requests.
- Every string exists in ru + kk + en, and switching language visibly changes the whole page.
- Layout is clean at 375px, 768px, 1280px and 1920px.
