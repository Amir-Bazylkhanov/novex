import React from 'react';

export type RobotId = 'nov1' | 'nov2' | 'nov3';
/** Mentor robots for the /learn picker: Логик, Полиглот, Кибер. */
export type MentorRobotId = 'nov4' | 'nov5' | 'nov6';
type AnyRobotId = RobotId | MentorRobotId;

/* Palette values from SPEC.md 1.1 — literal hex is allowed inside SVG paint
   attributes (Tailwind classes do not apply to SVG fills/strokes reliably). */
const ACCENT: Record<AnyRobotId, string> = {
  nov1: '#276F83', // teal-dark
  nov2: '#219FA2', // teal
  nov3: '#F38A76', // coral
  nov4: '#219FA2', // teal
  nov5: '#276F83', // teal-dark
  nov6: '#F38A76', // coral
};
const MIST = '#ABCFD3';
const LINE = '#B1B9C5';
const WHITE = '#FFFFFF';

/* Glow pulse / antenna blink. Rendered static under prefers-reduced-motion:
   the animation classes only exist inside the no-preference media query. */
const ROBOT_MOTION_CSS = `
@keyframes nvx-pulse { 0%, 100% { opacity: 0.14; } 50% { opacity: 0.38; } }
@keyframes nvx-blink { 0%, 88%, 100% { opacity: 1; } 93% { opacity: 0.15; } }
@media (prefers-reduced-motion: no-preference) {
  .nvx-pulse { animation: nvx-pulse 2.6s ease-in-out infinite; }
  .nvx-blink { animation: nvx-blink 4.4s linear infinite; }
}
`;

const GEAR_MOTION_CSS = `
@keyframes nvx-gear-rotate { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: no-preference) {
  .nvx-gear-spin {
    animation: nvx-gear-rotate 45s linear infinite;
    transform-box: fill-box;
    transform-origin: center;
  }
}
`;

/** Inline-SVG robot mascot. Square aspect. Size it with className, e.g. "h-24 w-24". */
export const RobotAvatar: React.FC<{ robot: AnyRobotId; className?: string }> = ({
  robot,
  className,
}) => {
  const accent = ACCENT[robot];
  /* Head silhouette per character: nov4 square/analytical, nov5 extra-round
     and friendly, nov6 angular techy, nov1–3 keep the original rounded rect. */
  const headRx = robot === 'nov4' ? 10 : robot === 'nov5' ? 46 : robot === 'nov6' ? 16 : 26;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <style>{ROBOT_MOTION_CSS}</style>

      {/* antenna */}
      <line
        x1="100"
        y1="36"
        x2="100"
        y2="20"
        stroke={LINE}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {robot === 'nov4' ? (
        <>
          <rect x="92" y="7" width="16" height="16" rx="3" fill={accent} opacity="0.22" className="nvx-pulse" />
          <rect x="95.5" y="10.5" width="9" height="9" rx="2" fill={accent} className="nvx-blink" />
        </>
      ) : robot === 'nov5' ? (
        <>
          <circle cx="100" cy="15" r="9" fill={accent} opacity="0.22" className="nvx-pulse" />
          <circle cx="100" cy="15" r="5" fill="none" stroke={accent} strokeWidth="2.5" className="nvx-blink" />
        </>
      ) : robot === 'nov6' ? (
        <>
          <path d="M100 5 L110 15 L100 25 L90 15 Z" fill={accent} opacity="0.22" className="nvx-pulse" />
          <path d="M100 9.5 L105.5 15 L100 20.5 L94.5 15 Z" fill={accent} className="nvx-blink" />
        </>
      ) : (
        <>
          <circle cx="100" cy="15" r="9" fill={accent} opacity="0.22" className="nvx-pulse" />
          <circle cx="100" cy="15" r="5" fill={accent} className="nvx-blink" />
        </>
      )}

      {/* neck */}
      <rect x="90" y="136" width="20" height="14" rx="4" fill={LINE} />

      {/* head */}
      <rect
        x="40"
        y="34"
        width="120"
        height="106"
        rx={headRx}
        fill={WHITE}
        stroke={accent}
        strokeWidth="4"
      />
      {/* soft inner highlight */}
      <rect x="54" y="46" width="92" height="14" rx="7" fill={MIST} opacity="0.25" />

      {/* nov6: angular side bolts */}
      {robot === 'nov6' && (
        <>
          <rect x="32" y="78" width="8" height="22" rx="3" fill={accent} opacity="0.5" />
          <rect x="160" y="78" width="8" height="22" rx="3" fill={accent} opacity="0.5" />
        </>
      )}

      {/* nov5: speech-bubble detail */}
      {robot === 'nov5' && (
        <>
          <path
            d="M146 16 h28 a8 8 0 0 1 8 8 v12 a8 8 0 0 1 -8 8 h-16 l-9 9 v-9 h-3 a8 8 0 0 1 -8 -8 v-12 a8 8 0 0 1 8 -8 z"
            fill={WHITE}
            stroke={accent}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="154" cy="30" r="2.6" fill={accent} />
          <circle cx="164" cy="30" r="2.6" fill={accent} />
          <circle cx="174" cy="30" r="2.6" fill={accent} />
        </>
      )}

      {/* eyes — one shape per unit */}
      {robot === 'nov1' && (
        <>
          <rect x="50" y="68" width="44" height="16" rx="8" fill={accent} opacity="0.16" className="nvx-pulse" />
          <rect x="106" y="68" width="44" height="16" rx="8" fill={accent} opacity="0.16" className="nvx-pulse" />
          <rect x="56" y="72.5" width="32" height="7" rx="3.5" fill={accent} />
          <rect x="112" y="72.5" width="32" height="7" rx="3.5" fill={accent} />
        </>
      )}
      {robot === 'nov2' && (
        <>
          <circle cx="72" cy="76" r="19" fill={accent} opacity="0.16" className="nvx-pulse" />
          <circle cx="128" cy="76" r="19" fill={accent} opacity="0.16" className="nvx-pulse" />
          <circle cx="72" cy="76" r="12.5" fill={accent} />
          <circle cx="128" cy="76" r="12.5" fill={accent} />
          <circle cx="68" cy="72" r="4" fill={WHITE} opacity="0.85" />
          <circle cx="124" cy="72" r="4" fill={WHITE} opacity="0.85" />
        </>
      )}
      {robot === 'nov3' && (
        <>
          <circle cx="72" cy="76" r="19" fill={accent} opacity="0.16" className="nvx-pulse" />
          <circle cx="128" cy="76" r="19" fill={accent} opacity="0.16" className="nvx-pulse" />
          <path d="M 58 80 A 14 14 0 0 0 86 80 Z" fill={accent} />
          <path d="M 114 80 A 14 14 0 0 0 142 80 Z" fill={accent} />
        </>
      )}
      {robot === 'nov4' && (
        <>
          {/* glasses: square frames + bridge, grid pupils */}
          <rect x="50" y="62" width="40" height="30" rx="6" fill={accent} opacity="0.16" className="nvx-pulse" />
          <rect x="110" y="62" width="40" height="30" rx="6" fill={accent} opacity="0.16" className="nvx-pulse" />
          <rect x="50" y="62" width="40" height="30" rx="6" fill="none" stroke={accent} strokeWidth="3.5" />
          <rect x="110" y="62" width="40" height="30" rx="6" fill="none" stroke={accent} strokeWidth="3.5" />
          <line x1="90" y1="77" x2="110" y2="77" stroke={accent} strokeWidth="3.5" />
          <rect x="62" y="71" width="16" height="12" rx="2" fill={accent} />
          <line x1="67" y1="71" x2="67" y2="83" stroke={WHITE} strokeWidth="1.5" />
          <line x1="62" y1="77" x2="78" y2="77" stroke={WHITE} strokeWidth="1.5" />
          <rect x="122" y="71" width="16" height="12" rx="2" fill={accent} />
          <line x1="127" y1="71" x2="127" y2="83" stroke={WHITE} strokeWidth="1.5" />
          <line x1="122" y1="77" x2="138" y2="77" stroke={WHITE} strokeWidth="1.5" />
        </>
      )}
      {robot === 'nov5' && (
        <>
          <circle cx="70" cy="76" r="22" fill={accent} opacity="0.16" className="nvx-pulse" />
          <circle cx="130" cy="76" r="22" fill={accent} opacity="0.16" className="nvx-pulse" />
          <circle cx="70" cy="76" r="14" fill={accent} />
          <circle cx="130" cy="76" r="14" fill={accent} />
          <circle cx="65" cy="71" r="4.5" fill={WHITE} opacity="0.85" />
          <circle cx="125" cy="71" r="4.5" fill={WHITE} opacity="0.85" />
        </>
      )}
      {robot === 'nov6' && (
        <>
          {/* single wide visor with scan dot */}
          <rect x="52" y="64" width="96" height="26" rx="13" fill={accent} opacity="0.16" className="nvx-pulse" />
          <rect x="56" y="68" width="88" height="18" rx="9" fill={accent} />
          <circle cx="80" cy="77" r="3.5" fill={WHITE} opacity="0.9" className="nvx-blink" />
          <rect x="100" y="74.5" width="30" height="5" rx="2.5" fill={WHITE} opacity="0.5" />
        </>
      )}

      {/* mouth */}
      {robot === 'nov1' && (
        <rect x="88" y="104" width="24" height="5" rx="2.5" fill={LINE} />
      )}
      {robot === 'nov2' && (
        <path
          d="M 84 103 Q 100 115 116 103"
          stroke={accent}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      )}
      {robot === 'nov3' && (
        <path
          d="M 80 101 Q 100 118 120 101"
          stroke={accent}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      )}
      {robot === 'nov4' && (
        <>
          {/* segmented analytical line */}
          <rect x="82" y="104" width="10" height="5" rx="2" fill={accent} opacity="0.75" />
          <rect x="95" y="104" width="10" height="5" rx="2" fill={accent} opacity="0.75" />
          <rect x="108" y="104" width="10" height="5" rx="2" fill={accent} opacity="0.75" />
        </>
      )}
      {robot === 'nov5' && (
        <path d="M 84 102 Q 100 120 116 102 Z" fill={accent} opacity="0.85" />
      )}
      {robot === 'nov6' && (
        <path
          d="M 82 106 L 91 100 L 100 106 L 109 100 L 118 106"
          stroke={accent}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* chest panel: status LED + readout lines */}
      <rect
        x="56"
        y="148"
        width="88"
        height="42"
        rx="12"
        fill={WHITE}
        stroke={accent}
        strokeWidth="3.5"
      />
      <circle cx="72" cy="169" r="7.5" fill={accent} opacity="0.2" className="nvx-pulse" />
      <circle cx="72" cy="169" r="4" fill={accent} />
      <rect x="86" y="158" width="46" height="4" rx="2" fill={MIST} />
      <rect x="86" y="167" width="36" height="4" rx="2" fill={MIST} />
      <rect x="86" y="176" width="26" height="4" rx="2" fill={MIST} />
    </svg>
  );
};

/** Thin-stroke outline gear. Decorative only — always aria-hidden. */
export const GearDecor: React.FC<{ className?: string; teeth?: number; spin?: boolean }> = ({
  className,
  teeth = 8,
  spin = false,
}) => {
  const count = Math.max(4, Math.round(teeth));
  const toothLines = Array.from({ length: count }, (_, i) => {
    const angle = (i * 2 * Math.PI) / count;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return (
      <line
        key={i}
        x1={50 + 30 * cos}
        y1={50 + 30 * sin}
        x2={50 + 40 * cos}
        y2={50 + 40 * sin}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      {spin && <style>{GEAR_MOTION_CSS}</style>}
      <g
        className={spin ? 'nvx-gear-spin' : undefined}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="50" cy="50" r="26" />
        <circle cx="50" cy="50" r="9" />
        {toothLines}
      </g>
    </svg>
  );
};

/** Thin circuit/PCB trace lines with node dots. Decorative only — always aria-hidden. */
export const CircuitTrace: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 240 64"
    className={className}
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M 6 32 H 234" />
    <path d="M 60 32 V 14 H 120" />
    <path d="M 180 32 V 50 H 120" />
    <circle cx="6" cy="32" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="234" cy="32" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="60" cy="32" r="3" fill="currentColor" stroke="none" />
    <circle cx="180" cy="32" r="3" fill="currentColor" stroke="none" />
    <circle cx="120" cy="14" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="120" cy="50" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);
