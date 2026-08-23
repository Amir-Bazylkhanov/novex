// ============================================================================
// Полноразмерные (в полный рост) модели роботов-наставников: NOV-01 «Академик»,
// NOV-02 «Практик», NOV-03 «Кибер». Это чисто декоративные SVG-картинки —
// вся анимация (махание рукой, сканирование визора, покачивание) задаётся
// снаружи через CSS-классы из RM_PART. Используется на страницах раздела
// «Обучение» (/learn) и в витрине роботов.
// ============================================================================
import React from 'react';

/* Internal variant keys stay 'nov04'|'nov05'|'nov06' for compatibility (the
   career module depends on them); the displayed codes are NOV-01/02/03. */
export type RobotModelVariant = 'nov04' | 'nov05' | 'nov06';

/** Stable part classes for external animation hooks (CSS / framer-motion selectors). */
// Имена CSS-классов для частей тела робота: по ним снаружи «цепляются»
// анимации (например, махание рукой или покачивание головы).
export const RM_PART = {
  head: 'rm-head',
  eyes: 'rm-eyes',
  armL: 'rm-arm-l',
  armR: 'rm-arm-r',
  torso: 'rm-torso',
  legs: 'rm-legs',
  shadow: 'rm-shadow',
} as const;

/* Palette values from SPEC.md 1.1 — literal hex is allowed inside SVG paint
   attributes (Tailwind classes do not apply to SVG fills/strokes reliably). */
const TEAL = '#219FA2';
const TEAL_DARK = '#276F83';
const TEAL_LIGHT = '#71C5C7';
const MIST = '#ABCFD3';
const CORAL = '#F38A76';
const CORAL_LIGHT = '#E7AA9C';
const INK = '#111A2A';
const LINE = '#B1B9C5';
const WHITE = '#FFFFFF';

/* eyeOffset translates ONLY the pupil group, clamped to ±3px. */
const clampEye = (v: number): number => Math.max(-3, Math.min(3, v));

interface EyeProps {
  ox: number;
  oy: number;
}

/* Shoulder pivot style: external wave animations rotate .rm-arm-* around these. */
const pivot = (x: number, y: number): React.CSSProperties => ({
  transformOrigin: `${x}px ${y}px`,
  transformBox: 'view-box',
});

/* ------------------------------------------------------------------ */
/* NOV-01 «Академик» — studious engineer: grid-glasses, calculator      */
/* chest, stocky body, pencil in hand, square-tipped antenna.           */
/* ------------------------------------------------------------------ */
const Nov04Model: React.FC<EyeProps> = ({ ox, oy }) => (
  <>
    <defs>
      <linearGradient id="rm04-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={TEAL_LIGHT} />
        <stop offset="1" stopColor={TEAL} />
      </linearGradient>
      <linearGradient id="rm04-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={TEAL} />
        <stop offset="1" stopColor={TEAL_DARK} />
      </linearGradient>
      <linearGradient id="rm04-head" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={WHITE} />
        <stop offset="1" stopColor={MIST} />
      </linearGradient>
    </defs>

    {/* ground shadow */}
    <ellipse className={RM_PART.shadow} cx="110" cy="304" rx="56" ry="9" fill={INK} opacity="0.08" />

    {/* legs */}
    <g className={RM_PART.legs}>
      <rect x="80" y="216" width="60" height="14" rx="7" fill={TEAL_DARK} />
      <rect x="84" y="226" width="20" height="60" rx="8" fill="url(#rm04-dark)" />
      <rect x="116" y="226" width="20" height="60" rx="8" fill="url(#rm04-dark)" />
      <line x1="86" y1="254" x2="102" y2="254" stroke={WHITE} strokeWidth="2" opacity="0.35" />
      <line x1="118" y1="254" x2="134" y2="254" stroke={WHITE} strokeWidth="2" opacity="0.35" />
      <rect x="78" y="284" width="28" height="14" rx="7" fill={TEAL_DARK} />
      <rect x="114" y="284" width="28" height="14" rx="7" fill={TEAL_DARK} />
      <rect x="82" y="286" width="14" height="3" rx="1.5" fill={MIST} opacity="0.6" />
      <rect x="118" y="286" width="14" height="3" rx="1.5" fill={MIST} opacity="0.6" />
    </g>

    {/* torso */}
    <g className={RM_PART.torso}>
      <rect x="62" y="126" width="96" height="96" rx="18" fill="url(#rm04-body)" stroke={TEAL_DARK} strokeWidth="2.5" />
      <path d="M 74 134 Q 70 174 74 214" stroke={INK} strokeWidth="2" fill="none" opacity="0.08" />
      <path d="M 146 134 Q 150 174 146 214" stroke={INK} strokeWidth="2" fill="none" opacity="0.08" />
      <rect x="76" y="132" width="68" height="8" rx="4" fill={WHITE} opacity="0.3" />
      <rect x="62" y="208" width="96" height="12" rx="6" fill={TEAL_DARK} opacity="0.35" />
      {/* calculator-key chest panel */}
      <rect x="84" y="142" width="52" height="62" rx="8" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <rect x="90" y="148" width="40" height="12" rx="3" fill={MIST} opacity="0.55" />
      <rect x="90" y="151" width="40" height="1.6" fill={WHITE} opacity="0.7" />
      <rect x="90" y="155" width="40" height="1.6" fill={WHITE} opacity="0.7" />
      <rect x="93" y="150.5" width="14" height="3" rx="1.5" fill={TEAL_DARK} opacity="0.7" />
      <rect x="92" y="166" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="105" y="166" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="118" y="166" width="10" height="7" rx="2" fill={CORAL} opacity="0.85" />
      <rect x="92" y="176" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="105" y="176" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="118" y="176" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="92" y="186" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="105" y="186" width="10" height="7" rx="2" fill={TEAL} opacity="0.75" />
      <rect x="118" y="186" width="10" height="7" rx="2" fill={MIST} />
      <circle cx="70" cy="136" r="2" fill={WHITE} opacity="0.55" />
      <circle cx="150" cy="136" r="2" fill={WHITE} opacity="0.55" />
      <circle cx="70" cy="212" r="2" fill={WHITE} opacity="0.4" />
      <circle cx="150" cy="212" r="2" fill={WHITE} opacity="0.4" />
    </g>

    {/* left arm — hangs free */}
    <g className={RM_PART.armL} style={pivot(64, 146)}>
      <line x1="64" y1="146" x2="58" y2="184" stroke={TEAL} strokeWidth="13" strokeLinecap="round" />
      <circle cx="58" cy="184" r="6" fill={TEAL_DARK} />
      <line x1="58" y1="184" x2="62" y2="212" stroke={TEAL} strokeWidth="11" strokeLinecap="round" />
      <circle cx="62" cy="215" r="7.5" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <circle cx="64" cy="146" r="10" fill={TEAL_DARK} />
      <circle cx="64" cy="146" r="4" fill={MIST} />
    </g>

    {/* right arm — holds a small pencil */}
    <g className={RM_PART.armR} style={pivot(156, 146)}>
      <line x1="156" y1="146" x2="162" y2="180" stroke={TEAL} strokeWidth="13" strokeLinecap="round" />
      <circle cx="162" cy="180" r="6" fill={TEAL_DARK} />
      <line x1="162" y1="180" x2="154" y2="206" stroke={TEAL} strokeWidth="11" strokeLinecap="round" />
      {/* pencil */}
      <line x1="148" y1="196" x2="160" y2="222" stroke={CORAL} strokeWidth="5" strokeLinecap="round" />
      <line x1="159" y1="220" x2="162.5" y2="227" stroke={INK} strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />
      <line x1="148" y1="196" x2="146" y2="191.5" stroke={MIST} strokeWidth="5" strokeLinecap="round" />
      <circle cx="154" cy="209" r="7.5" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <circle cx="156" cy="146" r="10" fill={TEAL_DARK} />
      <circle cx="156" cy="146" r="4" fill={MIST} />
    </g>

    {/* head */}
    <g className={RM_PART.head}>
      <rect x="100" y="114" width="20" height="14" rx="4" fill={LINE} />
      <line x1="110" y1="36" x2="110" y2="22" stroke={LINE} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="101" y="8" width="18" height="15" rx="3" fill={TEAL} opacity="0.25" />
      <rect x="104" y="11" width="12" height="10" rx="2" fill={TEAL} />
      <rect x="56" y="66" width="8" height="22" rx="3" fill={TEAL_LIGHT} />
      <rect x="156" y="66" width="8" height="22" rx="3" fill={TEAL_LIGHT} />
      <rect x="62" y="36" width="96" height="82" rx="12" fill="url(#rm04-head)" stroke={TEAL_DARK} strokeWidth="3" />
      <rect x="74" y="46" width="72" height="10" rx="5" fill={MIST} opacity="0.3" />
      <line x1="72" y1="108" x2="148" y2="108" stroke={INK} strokeWidth="1.5" opacity="0.08" />
      {/* grid-glasses */}
      <rect x="74" y="62" width="30" height="24" rx="5" fill={TEAL} opacity="0.12" />
      <rect x="116" y="62" width="30" height="24" rx="5" fill={TEAL} opacity="0.12" />
      <rect x="74" y="62" width="30" height="24" rx="5" fill="none" stroke={TEAL_DARK} strokeWidth="3" />
      <rect x="116" y="62" width="30" height="24" rx="5" fill="none" stroke={TEAL_DARK} strokeWidth="3" />
      <line x1="104" y1="74" x2="116" y2="74" stroke={TEAL_DARK} strokeWidth="3" />
      {/* pupils with grid cross — only these get eyeOffset */}
      <g className={RM_PART.eyes} style={{ transform: `translate(${ox}px, ${oy}px)` }}>
        <rect x="83" y="69" width="12" height="10" rx="2" fill={TEAL_DARK} />
        <line x1="89" y1="69" x2="89" y2="79" stroke={WHITE} strokeWidth="1.3" />
        <line x1="83" y1="74" x2="95" y2="74" stroke={WHITE} strokeWidth="1.3" />
        <rect x="125" y="69" width="12" height="10" rx="2" fill={TEAL_DARK} />
        <line x1="131" y1="69" x2="131" y2="79" stroke={WHITE} strokeWidth="1.3" />
        <line x1="125" y1="74" x2="137" y2="74" stroke={WHITE} strokeWidth="1.3" />
      </g>
      {/* segmented analytical mouth */}
      <rect x="92" y="98" width="9" height="4.5" rx="2" fill={TEAL_DARK} opacity="0.75" />
      <rect x="105" y="98" width="9" height="4.5" rx="2" fill={TEAL_DARK} opacity="0.75" />
      <rect x="118" y="98" width="9" height="4.5" rx="2" fill={TEAL_DARK} opacity="0.75" />
      <circle cx="68" cy="42" r="1.8" fill={TEAL_LIGHT} />
      <circle cx="152" cy="42" r="1.8" fill={TEAL_LIGHT} />
    </g>
  </>
);

/* ------------------------------------------------------------------ */
/* NOV-02 «Практик» — friendly communicator: round head, big eyes,      */
/* headphone pads, slim body, right arm raised mid-wave, sound-wave     */
/* chest screen.                                                        */
/* ------------------------------------------------------------------ */
const Nov05Model: React.FC<EyeProps> = ({ ox, oy }) => (
  <>
    <defs>
      <linearGradient id="rm05-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={MIST} />
        <stop offset="1" stopColor={TEAL_LIGHT} />
      </linearGradient>
      <linearGradient id="rm05-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={TEAL} />
        <stop offset="1" stopColor={TEAL_DARK} />
      </linearGradient>
      <linearGradient id="rm05-head" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={WHITE} />
        <stop offset="1" stopColor={MIST} />
      </linearGradient>
    </defs>

    <ellipse className={RM_PART.shadow} cx="110" cy="302" rx="50" ry="8" fill={INK} opacity="0.08" />

    {/* legs — slimmer */}
    <g className={RM_PART.legs}>
      <rect x="86" y="216" width="48" height="12" rx="6" fill={TEAL_DARK} />
      <rect x="89" y="224" width="16" height="58" rx="7" fill="url(#rm05-dark)" />
      <rect x="115" y="224" width="16" height="58" rx="7" fill="url(#rm05-dark)" />
      <line x1="91" y1="252" x2="103" y2="252" stroke={WHITE} strokeWidth="2" opacity="0.35" />
      <line x1="117" y1="252" x2="129" y2="252" stroke={WHITE} strokeWidth="2" opacity="0.35" />
      <rect x="83" y="280" width="24" height="13" rx="6.5" fill={TEAL_DARK} />
      <rect x="113" y="280" width="24" height="13" rx="6.5" fill={TEAL_DARK} />
      <rect x="86" y="282" width="12" height="3" rx="1.5" fill={MIST} opacity="0.6" />
      <rect x="116" y="282" width="12" height="3" rx="1.5" fill={MIST} opacity="0.6" />
    </g>

    {/* torso — slim */}
    <g className={RM_PART.torso}>
      <rect x="72" y="126" width="76" height="94" rx="22" fill="url(#rm05-body)" stroke={TEAL_DARK} strokeWidth="2.5" />
      <path d="M 82 134 Q 78 172 82 212" stroke={INK} strokeWidth="2" fill="none" opacity="0.08" />
      <path d="M 138 134 Q 142 172 138 212" stroke={INK} strokeWidth="2" fill="none" opacity="0.08" />
      <rect x="84" y="132" width="52" height="7" rx="3.5" fill={WHITE} opacity="0.4" />
      <rect x="72" y="206" width="76" height="12" rx="6" fill={TEAL_DARK} opacity="0.3" />
      {/* chest screen with sound-wave */}
      <rect x="88" y="144" width="44" height="34" rx="8" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <rect x="88" y="152" width="44" height="1.4" fill={MIST} opacity="0.5" />
      <rect x="88" y="170" width="44" height="1.4" fill={MIST} opacity="0.5" />
      <polyline
        points="92,161 97,153 102,167 107,150 112,169 117,155 122,163 127,159"
        fill="none"
        stroke={TEAL}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="148" r="3" fill={TEAL_DARK} opacity="0.8" />
      <circle cx="78" cy="134" r="2" fill={WHITE} opacity="0.6" />
      <circle cx="142" cy="134" r="2" fill={WHITE} opacity="0.6" />
    </g>

    {/* left arm — relaxed at side */}
    <g className={RM_PART.armL} style={pivot(70, 142)}>
      <line x1="70" y1="142" x2="60" y2="178" stroke={TEAL_LIGHT} strokeWidth="12" strokeLinecap="round" />
      <circle cx="60" cy="178" r="5.5" fill={TEAL_DARK} />
      <line x1="60" y1="178" x2="64" y2="206" stroke={TEAL_LIGHT} strokeWidth="10" strokeLinecap="round" />
      <circle cx="64" cy="209" r="7" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <circle cx="70" cy="142" r="9" fill={TEAL_DARK} />
      <circle cx="70" cy="142" r="3.5" fill={MIST} />
    </g>

    {/* right arm — raised mid-wave (external animation rotates this group) */}
    <g className={RM_PART.armR} style={pivot(150, 142)}>
      <line x1="150" y1="142" x2="168" y2="116" stroke={TEAL_LIGHT} strokeWidth="12" strokeLinecap="round" />
      <circle cx="168" cy="116" r="5.5" fill={TEAL_DARK} />
      <line x1="168" y1="116" x2="181" y2="88" stroke={TEAL_LIGHT} strokeWidth="10" strokeLinecap="round" />
      <circle cx="182" cy="85" r="7" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <line x1="186" y1="80" x2="190" y2="74" stroke={TEAL_DARK} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="188" y1="86" x2="194" y2="82" stroke={TEAL_DARK} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="150" cy="142" r="9" fill={TEAL_DARK} />
      <circle cx="150" cy="142" r="3.5" fill={MIST} />
    </g>

    {/* head — round and friendly */}
    <g className={RM_PART.head}>
      <rect x="101" y="112" width="18" height="16" rx="5" fill={LINE} />
      <line x1="110" y1="34" x2="110" y2="24" stroke={LINE} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="110" cy="18" r="7" fill={TEAL_DARK} opacity="0.2" />
      <circle cx="110" cy="18" r="4" fill="none" stroke={TEAL_DARK} strokeWidth="2.5" />
      {/* headphone band + pads */}
      <path d="M 62 62 Q 110 14 158 62" fill="none" stroke={TEAL_DARK} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="110" cy="76" rx="50" ry="42" fill="url(#rm05-head)" stroke={TEAL_DARK} strokeWidth="3" />
      <rect x="54" y="62" width="13" height="30" rx="6.5" fill={TEAL_DARK} />
      <rect x="57.5" y="68" width="6" height="18" rx="3" fill={MIST} opacity="0.7" />
      <rect x="153" y="62" width="13" height="30" rx="6.5" fill={TEAL_DARK} />
      <rect x="156.5" y="68" width="6" height="18" rx="3" fill={MIST} opacity="0.7" />
      <ellipse cx="110" cy="58" rx="30" ry="8" fill={MIST} opacity="0.3" />
      {/* big expressive eyes */}
      <circle cx="90" cy="74" r="17" fill={TEAL_DARK} opacity="0.12" />
      <circle cx="130" cy="74" r="17" fill={TEAL_DARK} opacity="0.12" />
      <g className={RM_PART.eyes} style={{ transform: `translate(${ox}px, ${oy}px)` }}>
        <circle cx="90" cy="74" r="11.5" fill={TEAL_DARK} />
        <circle cx="130" cy="74" r="11.5" fill={TEAL_DARK} />
        <circle cx="86" cy="70" r="4" fill={WHITE} opacity="0.9" />
        <circle cx="126" cy="70" r="4" fill={WHITE} opacity="0.9" />
      </g>
      {/* friendly open smile + cheeks */}
      <path d="M 92 98 Q 110 114 128 98 Z" fill={TEAL_DARK} opacity="0.85" />
      <circle cx="74" cy="92" r="5" fill={MIST} opacity="0.5" />
      <circle cx="146" cy="92" r="5" fill={MIST} opacity="0.5" />
    </g>
  </>
);

/* ------------------------------------------------------------------ */
/* NOV-03 «Кибер» — sleek tech: angular head, coral visor (id rm-visor  */
/* for external scan animation), asymmetric shoulder armor, hexagon     */
/* chest core, head-to-back cable, sturdier legs.                       */
/* ------------------------------------------------------------------ */
const Nov06Model: React.FC<EyeProps> = ({ ox, oy }) => (
  <>
    <defs>
      <linearGradient id="rm06-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={TEAL} />
        <stop offset="1" stopColor={TEAL_DARK} />
      </linearGradient>
      <linearGradient id="rm06-head" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={WHITE} />
        <stop offset="1" stopColor={MIST} />
      </linearGradient>
      <linearGradient id="rm06-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor={CORAL_LIGHT} />
        <stop offset="1" stopColor={CORAL} />
      </linearGradient>
      <clipPath id="rm06-visor-clip">
        <rect x="74" y="66" width="72" height="18" rx="9" />
      </clipPath>
    </defs>

    <ellipse className={RM_PART.shadow} cx="110" cy="306" rx="58" ry="9" fill={INK} opacity="0.08" />

    {/* legs — sturdier */}
    <g className={RM_PART.legs}>
      <rect x="78" y="216" width="64" height="14" rx="7" fill={TEAL_DARK} />
      <rect x="80" y="226" width="24" height="60" rx="8" fill="url(#rm06-body)" />
      <rect x="116" y="226" width="24" height="60" rx="8" fill="url(#rm06-body)" />
      {/* knee armor plates */}
      <rect x="80" y="248" width="24" height="11" rx="4" fill={TEAL_DARK} />
      <rect x="116" y="248" width="24" height="11" rx="4" fill={TEAL_DARK} />
      <line x1="82" y1="253.5" x2="102" y2="253.5" stroke={CORAL} strokeWidth="1.6" opacity="0.8" />
      <line x1="118" y1="253.5" x2="138" y2="253.5" stroke={CORAL} strokeWidth="1.6" opacity="0.8" />
      <rect x="72" y="286" width="34" height="15" rx="7" fill={TEAL_DARK} />
      <rect x="114" y="286" width="34" height="15" rx="7" fill={TEAL_DARK} />
      <line x1="76" y1="297" x2="102" y2="297" stroke={CORAL} strokeWidth="1.8" opacity="0.6" />
      <line x1="118" y1="297" x2="144" y2="297" stroke={CORAL} strokeWidth="1.8" opacity="0.6" />
    </g>

    {/* torso */}
    <g className={RM_PART.torso}>
      <rect x="66" y="126" width="88" height="96" rx="14" fill="url(#rm06-body)" stroke={TEAL_DARK} strokeWidth="2.5" />
      <path d="M 78 134 L 74 170 L 78 214" stroke={INK} strokeWidth="2" fill="none" opacity="0.1" />
      <path d="M 142 134 L 146 170 L 142 214" stroke={INK} strokeWidth="2" fill="none" opacity="0.1" />
      <rect x="80" y="132" width="60" height="7" rx="3.5" fill={WHITE} opacity="0.25" />
      <rect x="66" y="210" width="88" height="11" rx="5.5" fill={INK} opacity="0.15" />
      {/* hexagon chest core */}
      <polygon points="110,146 129,157 129,179 110,190 91,179 91,157" fill={TEAL_DARK} stroke={CORAL} strokeWidth="2" />
      <polygon points="110,153 123,160.5 123,175.5 110,183 97,175.5 97,160.5" fill="url(#rm06-accent)" />
      <polygon points="110,159 117,163 117,172 110,176 103,172 103,163" fill={WHITE} opacity="0.35" />
      <circle cx="110" cy="168" r="3.5" fill={WHITE} />
      <rect x="94" y="163" width="32" height="1.4" fill={WHITE} opacity="0.45" />
      <rect x="94" y="171" width="32" height="1.4" fill={WHITE} opacity="0.45" />
      <circle cx="74" cy="136" r="2" fill={MIST} opacity="0.7" />
      <circle cx="146" cy="136" r="2" fill={MIST} opacity="0.7" />
      <circle cx="74" cy="212" r="2" fill={MIST} opacity="0.5" />
      <circle cx="146" cy="212" r="2" fill={MIST} opacity="0.5" />
    </g>

    {/* left arm — under the big armor plate */}
    <g className={RM_PART.armL} style={pivot(62, 148)}>
      <line x1="62" y1="150" x2="54" y2="186" stroke={TEAL_DARK} strokeWidth="13" strokeLinecap="round" />
      <circle cx="54" cy="186" r="6" fill={INK} opacity="0.55" />
      <line x1="54" y1="186" x2="58" y2="214" stroke={TEAL_DARK} strokeWidth="11" strokeLinecap="round" />
      <circle cx="58" cy="217" r="7.5" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      {/* big angular shoulder armor */}
      <polygon points="48,128 84,124 90,148 56,158" fill={TEAL_DARK} stroke={INK} strokeWidth="1.5" opacity="0.95" />
      <line x1="52" y1="133" x2="82" y2="129.5" stroke={CORAL} strokeWidth="2" opacity="0.9" />
      <circle cx="62" cy="148" r="5" fill={MIST} />
    </g>

    {/* right arm — smaller armor plate */}
    <g className={RM_PART.armR} style={pivot(158, 148)}>
      <line x1="158" y1="150" x2="166" y2="186" stroke={TEAL_DARK} strokeWidth="13" strokeLinecap="round" />
      <circle cx="166" cy="186" r="6" fill={INK} opacity="0.55" />
      <line x1="166" y1="186" x2="162" y2="214" stroke={TEAL_DARK} strokeWidth="11" strokeLinecap="round" />
      <circle cx="162" cy="217" r="7.5" fill={WHITE} stroke={TEAL_DARK} strokeWidth="2.5" />
      <polygon points="136,126 166,124 172,142 144,148" fill={TEAL_DARK} stroke={INK} strokeWidth="1.5" opacity="0.95" />
      <line x1="140" y1="130.5" x2="164" y2="129" stroke={CORAL} strokeWidth="2" opacity="0.9" />
      <circle cx="158" cy="148" r="5" fill={MIST} />
    </g>

    {/* head — angular with coral visor */}
    <g className={RM_PART.head}>
      <rect x="100" y="114" width="20" height="14" rx="4" fill={LINE} />
      <line x1="110" y1="42" x2="110" y2="28" stroke={LINE} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 110 16 L 118 24 L 110 32 L 102 24 Z" fill={CORAL} opacity="0.25" />
      <path d="M 110 19.5 L 114.5 24 L 110 28.5 L 105.5 24 Z" fill={CORAL} />
      <polygon
        points="70,118 62,64 76,42 144,42 158,64 150,118"
        fill="url(#rm06-head)"
        stroke={TEAL_DARK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 76 50 L 144 50" stroke={MIST} strokeWidth="5" opacity="0.35" strokeLinecap="round" />
      <path d="M 68 100 L 74 112" stroke={INK} strokeWidth="1.5" opacity="0.1" />
      <path d="M 152 100 L 146 112" stroke={INK} strokeWidth="1.5" opacity="0.1" />
      {/* coral visor — id for external scan animation */}
      <rect x="70" y="62" width="80" height="26" rx="13" fill={CORAL} opacity="0.18" />
      <rect id="rm-visor" x="74" y="66" width="72" height="18" rx="9" fill="url(#rm06-accent)" />
      {/* scan-light bar for the external visor-scan animation (translated via .rm-visor-scan) */}
      <g clipPath="url(#rm06-visor-clip)">
        <rect className="rm-visor-scan" x="74" y="66" width="10" height="18" fill={WHITE} opacity="0" />
      </g>
      <g className={RM_PART.eyes} style={{ transform: `translate(${ox}px, ${oy}px)` }}>
        <circle cx="96" cy="75" r="3.5" fill={WHITE} opacity="0.95" />
        <circle cx="124" cy="75" r="3.5" fill={WHITE} opacity="0.95" />
      </g>
      <rect x="102" y="72.5" width="22" height="4.5" rx="2.25" fill={WHITE} opacity="0.45" />
      {/* zigzag mouth */}
      <path
        d="M 92 104 L 100 98 L 108 104 L 116 98 L 124 104"
        stroke={TEAL_DARK}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* cable from head to back */}
      <path
        d="M 152 88 C 170 100 172 124 160 138"
        stroke={TEAL_DARK}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="152" cy="88" r="3" fill={TEAL_DARK} />
      <circle cx="160" cy="138" r="3" fill={TEAL_DARK} />
      <circle cx="70" cy="48" r="1.8" fill={TEAL_LIGHT} />
      <circle cx="150" cy="48" r="1.8" fill={TEAL_LIGHT} />
    </g>
  </>
);

/** Full-body standing robot character. Pure presentational SVG — all motion
    (wave, scan, bob) is applied externally via the RM_PART classes / rm-visor id. */
export const RobotModel: React.FC<{
  variant: RobotModelVariant;
  eyeOffset?: { x: number; y: number };
  className?: string;
}> = ({ variant, eyeOffset, className }) => {
  const ox = clampEye(eyeOffset?.x ?? 0);
  const oy = clampEye(eyeOffset?.y ?? 0);

  return (
    <svg
      viewBox="0 0 220 320"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {variant === 'nov04' && <Nov04Model ox={ox} oy={oy} />}
      {variant === 'nov05' && <Nov05Model ox={ox} oy={oy} />}
      {variant === 'nov06' && <Nov06Model ox={ox} oy={oy} />}
    </svg>
  );
};

export default RobotModel;
