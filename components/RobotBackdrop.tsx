import React from 'react';

/**
 * RobotBackdrop — the Novex robot-theme "starfield".
 *
 * Light-palette analogue of Locus's space/starfield layer: a decorative,
 * purely visual backdrop meant to sit behind app pages. Callers render it
 * as an absolutely-positioned layer (inset-0, z-0) inside a relative
 * parent and put their content in a `relative z-10` sibling.
 *
 * Pure inline SVG + Tailwind tokens + CSS keyframes — zero assets, works
 * fully offline. Decorative only: pointer-events-none and aria-hidden.
 * Gear rotation is disabled under prefers-reduced-motion.
 */

type Density = 'full' | 'subtle';

const GEAR_TEETH = 10;

/** Stroke-only gear outline: outer circle, teeth ring, center hole. */
const Gear: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={className}
    aria-hidden="true"
  >
    {Array.from({ length: GEAR_TEETH }, (_, i) => (
      <rect
        key={i}
        x={44}
        y={4}
        width={12}
        height={18}
        rx={2}
        transform={`rotate(${(360 / GEAR_TEETH) * i} 50 50)`}
      />
    ))}
    <circle cx={50} cy={50} r={30} />
    <circle cx={50} cy={50} r={10} />
  </svg>
);

const RobotBackdrop: React.FC<{ density?: Density }> = ({ density = 'full' }) => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <style>{`
      .robot-gear-spin { animation: robot-gear-rotate 80s linear infinite; }
      .robot-gear-spin-rev { animation: robot-gear-rotate 60s linear infinite reverse; }
      @keyframes robot-gear-rotate { to { transform: rotate(360deg); } }
      @media (prefers-reduced-motion: reduce) {
        .robot-gear-spin, .robot-gear-spin-rev { animation: none; }
      }
    `}</style>

    {/* Blueprint dot-grid tiling the whole layer */}
    <svg
      className={`absolute inset-0 h-full w-full text-mist ${density === 'subtle' ? 'opacity-15' : 'opacity-25'}`}
    >
      <defs>
        <pattern id="robot-dot-grid" width={32} height={32} patternUnits="userSpaceOnUse">
          <circle cx={1.5} cy={1.5} r={1.5} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#robot-dot-grid)" />
    </svg>

    {/* Slow-rotating gear outlines */}
    <div className="absolute -top-16 -right-16 text-teal-light opacity-[0.07]">
      <Gear size={280} className="robot-gear-spin" />
    </div>
    {density === 'full' && (
      <>
        <div className="absolute -bottom-12 -left-12 text-teal-light opacity-[0.06]">
          <Gear size={200} className="robot-gear-spin-rev" />
        </div>
        <div className="absolute top-1/3 -left-6 text-teal-light opacity-[0.05]">
          <Gear size={120} className="robot-gear-spin" />
        </div>
      </>
    )}

    {/* Circuit traces with solder pads — static PCB feel */}
    <svg
      className="absolute inset-0 h-full w-full text-line opacity-30"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    >
      <polyline points="0,180 220,180 300,260 520,260" />
      <polyline points="1200,120 1000,120 940,180 760,180" />
      <polyline points="1200,640 1020,640 950,570 700,570" />
      <polyline points="0,620 160,620 230,550 420,550" />
      <g fill="currentColor" stroke="none" className="text-teal-light">
        <circle cx={220} cy={180} r={3} />
        <circle cx={520} cy={260} r={3} />
        <circle cx={1000} cy={120} r={3} />
        <circle cx={760} cy={180} r={3} />
        <circle cx={1020} cy={640} r={3} />
        <circle cx={700} cy={570} r={3} />
        <circle cx={160} cy={620} r={3} />
        <circle cx={420} cy={550} r={3} />
      </g>
    </svg>
  </div>
);

export default RobotBackdrop;
