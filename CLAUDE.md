# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NOVEX is an AI platform that gives Kazakhstani school students (grades 7–12) personalized education regardless of which school or region they are in. It is a hackathon MVP for **Future Minds Hackathon 2026 — Track 2: Social Impact Challenge** (submission deadline 25 Aug 2026). The official case brief lives at `docs/hackathon-brief.pdf` — it defines the required capabilities A–F below, the bonus features, the deliverables (pitch deck ≤12 slides, public repo, ≤3-min video demo or live link), and the judging criteria.

The product vision is a 5-step loop: student signs up → picks grade / subject / goal (exam, olympiad, topic revision) → the platform recommends level-matched materials and tasks → the student completes tasks and gets AI feedback → a teacher / admin tracks progress through a dashboard.

The required MVP capabilities (SPEC.md §0) are:

- **A.** Home page: what the platform is, who it is for, value prop, clear CTAs
- **B.** Student profile & diagnostics: grade / subject / goal selection, short level diagnostic
- **C.** AI personalization module: recommendations from profile + diagnostics, adaptive task difficulty
- **D.** Student dashboard: progress by topic, detected weak spots, upcoming goals and deadlines
- **E.** Tasks & feedback module: 2–3 topics with tasks / mini-tests, correct/incorrect feedback with explanation
- **F.** Teacher / admin panel: class-level progress statistics, ability to add topics, tasks or materials

Current state: **landing plus all app modules are built and deployed at novex-edu.vercel.app** — auth (email + Google), profile with avatar upload, diagnostic onboarding, dashboard, 5 real lessons, teacher panel, and an AI tutor chat backed by live edge functions. `SPEC.md` is the single source of truth for design and copy contracts — read it before touching the landing.

### Relationship to Locus

Novex's requirements overlap heavily with **Locus** (`C:\Users\Dituar\CursorProjects\Locus`), our existing production project, so the deliberate strategy is to reuse working code and patterns from it instead of building from scratch: the `loc()` i18n contract, the Supabase client/auth setup, the edge-function proxy pattern, and the AI provider access itself. Reused pieces are **adapted, not copied verbatim** — restyled to the Novex palette (Locus is purple-on-black, Novex is teal-on-white), recolored, and trimmed to hackathon scope. Novex's `ai-chat` edge function forwards to Locus's `novex-ai` function (shared-secret auth), so Novex uses Locus's AI API keys — accepted for the hackathon since Novex will be abandoned afterward. **Locus is live production: never break it, and any Locus change must be additive and path-scoped (its working tree carries unrelated in-flight work that must stay untouched).**

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build

There is no test runner configured yet.

## Architecture

### Entry Points & Routing

- `index.html` → `index.tsx` → `App.tsx`
- `App.tsx` is a thin router shell: `BrowserRouter` → `LanguageProvider` → `Header` / `<Routes>` / `Footer`
- There is exactly one route today: `/` → `LandingPage`. App routes (dashboard, diagnostics, teacher panel) will be added under the same router
- `App.tsx` also owns the smooth-scroll behavior for anchor navigation (disabled under `prefers-reduced-motion`)

### Directory Layout (flat, not nested under src/)

- `components/` — `Header.tsx`, `Footer.tsx`, `LandingPage.tsx`
- `components/landing/` — one file per landing section (see below)
- `context/` — React contexts (`LanguageContext.tsx`)
- `utils/` — pure utilities (`i18n.ts`)

### Landing Page Composition

`components/LandingPage.tsx` renders sections in exactly this order (top → bottom):

1. `Hero`
2. `HowItWorks`
3. `TeacherPanel`
4. `ImpactStats`
5. `FinalCTA`

`Header` and `Footer` live outside `<main>` in `App.tsx`. Do not reorder or re-add sections without the user's say-so: `ProblemSection`, `AIPersonalization`, `SubjectsGrid` and `StudentDashboardPreview` were removed by user decision (their files remain in `components/landing/` unused), `Pricing` moved to the dedicated `/pricing` page (`components/PricingPage.tsx` wraps the section component), and `FAQ` moved to the dedicated `/faq` page (`components/FaqPage.tsx` wraps the section component).

## Design System

The palette is LOCKED (SPEC.md §1.1 — do not invent other colors):

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

Tokens are declared in the Tailwind v4 `@theme` block in `index.css` (SPEC.md §1.2), which makes `bg-canvas`, `text-ink`, `bg-teal`, `border-line`, `bg-mist`, `text-coral`, `font-display`, `font-sans` and every opacity variant available as normal Tailwind classes.

Hard rules:

- The page is **light** — background is `canvas`, never black, never dark mode.
- **No purple, no dark backgrounds anywhere.** Any purple that appears is a bug (the predecessor project was purple-on-black; this one is teal-on-white).
- **No raw hex in `className`** — use the token classes only.
- `coral` is a sparing accent: roughly one coral element per viewport (one highlighted word, one badge, one stat). It must never compete with teal.
- Fonts: **Manrope** for display / headings (`font-display`, weights 600–800), **Inter** for body / UI (`font-sans`, weights 300–600). Both load from Google Fonts in `index.html` with Cyrillic + Kazakh glyph coverage.

## Internationalization

The whole UI is tri-lingual. The contract lives in `utils/i18n.ts` and `context/LanguageContext.tsx` — do not change the signatures:

- `Lang` is `'ru' | 'kk' | 'en'`; `Localized` is `{ ru: string; kk: string; en: string }`.
- `loc(lang, text)` picks the string for the active language (kk falls back to ru if empty).
- `useLanguage()` returns `{ language, setLanguage }`.
- Default language is **`ru`**. The choice is persisted in `localStorage` under the key `novex.lang` and read back on init; `document.documentElement.lang` is kept in sync.

Rules:

- **Every user-visible string needs all three languages.** Kazakh must be real Kazakh, not transliterated Russian. Russian is the primary language and must read naturally — this is a Kazakhstani product for Kazakhstani schools.
- **Each section component owns its own content**, declared as module-level `const`s typed with `Localized` at the top of its own file. There is deliberately **no shared translations file** — do not create one, do not import content across section files. This is what lets multiple agents work on sections in parallel.

## Tech Stack

- **Frontend:** React 18, TypeScript 5.8, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Framer Motion, lucide-react
- **Routing:** react-router-dom 6
- **Build:** Vite 6 (dev server on port 3000)
- **Backend:** Supabase (project `nqjrtltqmjyzfmoytwvl`, separate from Locus's) — PKCE auth via `services/supabaseClient.ts`, `profiles` / `diagnostic_results` / `lesson_progress` tables with RLS, `avatars` storage bucket, and the `ai-chat` edge function

## Key Patterns

- Tailwind v4: `index.css` uses `@import "tailwindcss"` plus an `@theme` block. There are **no `@tailwind` directives and no `tailwind.config.js`** — theme tokens come from `@theme` only.
- Import paths **include the `.tsx` / `.ts` extension** (`allowImportingTsExtensions` in `tsconfig.json`), e.g. `import { loc } from '../../utils/i18n.ts';`.
- Every component follows `const Name: React.FC = () => { … }; export default Name;` with `import React from 'react';` at the top.
- Icons come from `lucide-react` only — no emoji as UI iconography.
- All illustrations and product mocks are **inline JSX + Tailwind + inline SVG**. Zero external image/asset requests — the whole page must render offline and stay fast on weak regional connections (an explicit selling point for regional schools).
- Motion: `framer-motion` `whileInView` fade-up (`opacity 0→1`, `y 24→0`, `duration 0.5`, `viewport={{ once: true, margin: '-80px' }}`) with small per-item stagger. Respect `prefers-reduced-motion`. No bouncing, no parallax, no autoplay video.
- Every section has an `id` plus `aria-labelledby` pointing at its heading, and interactive elements are real `<button>` / `<a>` with visible teal focus rings (`focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`).
- TypeScript is strict with `noUnusedLocals` / `noUnusedParameters` — no `any`, no unused imports, no unused vars.

## Environment

`.env.local` carries `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_VAPID_PUBLIC_KEY` and `VITE_MAPBOX_TOKEN`, copied over from the Locus project. `.env.example` documents the names without values.

- **Never commit `.env` files.** `.gitignore` already excludes `.env.*` — keep it that way, and never print secret values into code, docs, or chat.
- AI provider keys (`ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `OPENAI_API_KEY`) are **not local**. On Locus they live as Supabase edge-function secrets behind an `ai-proxy` function, so the client never calls AI APIs directly. The Novex AI module will need its own proxy (or a reuse of that pattern) — do not put provider keys in `VITE_*` vars or client code.
- The Supabase credentials currently in `.env.local` point at the **shared LOCUS project**. Before Novex writes any data, prefer a separate Supabase project (or at minimum a separate schema) so hackathon data doesn't mix with Locus production data.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define with user a success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```
