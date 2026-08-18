import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Settings, Sparkles } from 'lucide-react';
import { loc, type Localized } from '../../utils/i18n.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import type { MentorRobotId } from '../robots/RobotAvatars.tsx';
import { RobotModel, type RobotModelVariant } from '../robots/RobotModels.tsx';

/* --- content --- */

const OPEN_MENTOR: Localized = {
  ru: 'Открыть уроки наставника',
  kk: 'Тәлімгердің сабақтарын ашу',
  en: 'Open mentor lessons',
};

/* Language-independent scene details: math notation, binary and the three
   greeting words NOV-05 cycles through (one per UI language, by design). */
const FORMULA_BITS = [
  { text: 'x²', left: '-10%', top: '6%', duration: 6.5, delay: 0 },
  { text: 'π', left: '92%', top: '14%', duration: 7.5, delay: 0.6 },
  { text: '∑', left: '-8%', top: '62%', duration: 8.5, delay: 1.1 },
  { text: 'F=ma', left: '86%', top: '70%', duration: 7, delay: 0.3 },
  { text: 'y=kx+b', left: '28%', top: '-8%', duration: 9, delay: 0.9 },
] as const;
const BINARY_BITS = [
  { text: '1011', left: '6%', top: '30%', duration: 3.4, delay: 0 },
  { text: '0110', left: '82%', top: '40%', duration: 3.9, delay: 1.2 },
  { text: '1101', left: '48%', top: '18%', duration: 3.6, delay: 2.1 },
] as const;
const GREETING_WORDS = ['Привет', 'Сәлем', 'Hello'] as const;

/* Picker ids → full-body model variants. */
const MODEL_VARIANT: Record<MentorRobotId, RobotModelVariant> = {
  nov4: 'nov04',
  nov5: 'nov05',
  nov6: 'nov06',
};

/* Scene-scoped keyframes targeting the RobotModel part classes. All of these
   live under .rm-scene-animated, which is only applied when reduced motion is
   off — reduced-motion users get fully static models. */
const SHOWCASE_CSS = `
/* idle: slow body bob on the model wrapper, staggered per slot via inline delay */
@keyframes rm-bob {
  0%, 100% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
}
.rm-scene-animated .rm-bob { animation: rm-bob 4s ease-in-out infinite; }

/* assembly intro: slot reveal + converging fragments. Deliberately CSS-driven
   (not framer-motion): the reveal decides whether the picker is visible at all,
   and CSS animations are timeline-based — they complete even if a JS-driven
   animation loop stalls. The backwards fill keeps the from-state during delay. */
@keyframes rm-slot-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.rm-scene-animated .rm-slot-in { animation: rm-slot-in 0.4s ease-out backwards; }

@keyframes rm-particle-in {
  from { transform: translate(var(--px), var(--py)) scale(1); opacity: 0.9; }
  to { transform: translate(0, 0) scale(0.3); opacity: 0; }
}
.rm-scene-animated .rm-particle { animation: rm-particle-in 0.55s cubic-bezier(0.2, 0.8, 0.3, 1) backwards; }

/* head pivot for the hover tilt (view-box units, matches the SVG viewBox) */
.rm-scene .rm-head { transform-box: view-box; transform-origin: 110px 122px; }

/* hover: subtle head tilt on all robots */
@keyframes rm-head-tilt {
  0% { transform: rotate(0deg); }
  40% { transform: rotate(4deg); }
  100% { transform: rotate(0deg); }
}
.rm-scene-animated .rm-slot:hover .rm-head,
.rm-scene-animated .rm-slot:focus-visible .rm-head { animation: rm-head-tilt 0.8s ease-in-out; }

/* hover: NOV-05 waves its raised right arm (shoulder pivot is set inline by RobotModel) — two wags */
@keyframes rm-wave {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-16deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-12deg); }
  80% { transform: rotate(7deg); }
  100% { transform: rotate(0deg); }
}
.rm-scene-animated .rm-slot:hover .rm-slot-nov05 .rm-arm-r,
.rm-scene-animated .rm-slot:focus-visible .rm-slot-nov05 .rm-arm-r { animation: rm-wave 0.9s ease-in-out; }

/* NOV-06: light bar sweeping across the visor (element lives in RobotModels) */
@keyframes rm-visor-scan {
  0% { transform: translateX(0); opacity: 0; }
  12% { opacity: 0.55; }
  88% { opacity: 0.55; }
  100% { transform: translateX(62px); opacity: 0; }
}
.rm-scene-animated .rm-visor-scan {
  transform-box: view-box;
  animation: rm-visor-scan 3.2s ease-in-out infinite;
}
`;

/* --- shared classes --- */

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

/* The assembly intro plays once per session; module-level flag so switching
   between the picker and a mentor's lessons doesn't replay it. */
let hasPlayed = false;

export interface ShowcaseChip {
  icon: React.ReactNode;
  label: string;
}

export interface ShowcaseRobot {
  id: MentorRobotId;
  idLine: string;
  name: string;
  tagline: string;
  chips: ShowcaseChip[];
  countsLine: string;
  recommended: boolean;
  recommendedBadge: string;
  onSelect: () => void;
}

interface EyeOffset {
  x: number;
  y: number;
}

/** NOV-05's HTML speech bubble: types «Привет» → «Сәлем» → «Hello» in a loop. */
const GreetingBubble: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    if (reduced) return;
    let alive = true;
    let word = 0;
    let len = 0;
    let phase: 'typing' | 'holding' | 'deleting' = 'typing';
    let timer = 0;
    const step = () => {
      if (!alive) return;
      const full = GREETING_WORDS[word];
      let wait = 80; // ~80ms per character while typing
      if (phase === 'typing') {
        len += 1;
        setText(full.slice(0, len));
        if (len >= full.length) {
          phase = 'holding';
          wait = 1200;
        }
      } else if (phase === 'holding') {
        phase = 'deleting';
        wait = 60;
      } else {
        len -= 1;
        setText(full.slice(0, len));
        wait = 60;
        if (len <= 0) {
          word = (word + 1) % GREETING_WORDS.length;
          phase = 'typing';
          wait = 350;
        }
      }
      timer = window.setTimeout(step, wait);
    };
    timer = window.setTimeout(step, 400);
    return () => {
      alive = false;
      window.clearTimeout(timer);
    };
  }, [reduced]);

  return (
    <div className="pointer-events-none absolute -right-3 -top-4 z-10 flex items-center rounded-xl border border-teal/30 bg-white px-2.5 py-1 shadow-[0_2px_10px_rgba(17,26,42,0.08)]">
      <span className="font-mono text-xs font-semibold text-teal-dark">
        {reduced ? GREETING_WORDS.join(' · ') : text}
      </span>
      {!reduced && (
        <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-teal" aria-hidden="true" />
      )}
      <span
        className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 border-b border-r border-teal/30 bg-white"
        aria-hidden="true"
      />
    </div>
  );
};

interface RobotSlotProps {
  robot: ShowcaseRobot;
  index: number;
  played: boolean;
  reduced: boolean;
  /** This slot is running its boot sequence. */
  booting: boolean;
  /** Some slot is booting — fade the others back. */
  sceneBooting: boolean;
  eyeOffset: EyeOffset | undefined;
  setSlotRef: (el: HTMLDivElement | null) => void;
  language: 'ru' | 'kk' | 'en';
  onSelect: () => void;
}

const RobotSlot: React.FC<RobotSlotProps> = ({
  robot,
  index,
  played,
  reduced,
  booting,
  sceneBooting,
  eyeOffset,
  setSlotRef,
  language,
  onSelect,
}) => {
  const assemble = !played && !reduced;

  /* ~14 scattered fragments that converge into the robot on first mount. */
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 150,
        size: 4 + Math.random() * 5,
        round: i % 2 === 0,
        color: i % 4 === 0 ? 'bg-coral-light' : i % 2 === 0 ? 'bg-teal-light' : 'bg-mist',
        delay: i * 0.04 + index * 0.1,
      })),
    [index],
  );

  return (
    <div
      className={assemble ? 'rm-slot-in h-full' : 'h-full'}
      style={assemble ? { animationDelay: `${0.2 + index * 0.1}s` } : undefined}
    >
      <motion.div
        animate={sceneBooting && !booting ? { opacity: 0.2 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <motion.button
          type="button"
          aria-label={`${loc(language, OPEN_MENTOR)}: ${robot.name}`}
          onClick={onSelect}
          initial="rest"
          whileHover={reduced ? undefined : 'hover'}
          className={`${FOCUS_RING} rm-slot group relative flex h-full w-full cursor-pointer flex-col items-center rounded-2xl border border-line/50 bg-white px-6 py-8 text-center shadow-[0_1px_3px_rgba(17,26,42,0.04)] transition-colors duration-200 hover:border-teal/60`}
        >
          {/* chest-area glow on hover */}
          <motion.span
            variants={{ rest: { opacity: 0 }, hover: { opacity: 0.5 } }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute left-1/2 top-[36%] h-24 w-40 -translate-x-1/2 rounded-full bg-teal blur-2xl"
            aria-hidden="true"
          />

          <motion.div
            ref={setSlotRef}
            variants={{ rest: { y: 0 }, hover: { y: -6 } }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="relative"
          >
            {/* idle bob wrapper — staggered phase per robot so they don't bob in sync */}
            <div
              className={`rm-bob rm-slot-${MODEL_VARIANT[robot.id]}`}
              style={{ animationDelay: `${index * -1.3}s` }}
            >
              <RobotModel
                variant={MODEL_VARIANT[robot.id]}
                className="h-44 w-auto sm:h-56 lg:h-64 xl:h-72"
                eyeOffset={eyeOffset}
              />
            </div>

            {/* NOV-04 «Логик»: formula glyphs drifting around the robot */}
            {robot.id === 'nov4' &&
              FORMULA_BITS.map((f) => (
                <motion.span
                  key={f.text}
                  animate={reduced ? undefined : { y: [0, -7, 0], x: [0, 4, 0] }}
                  transition={{
                    duration: f.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: f.delay,
                  }}
                  className="pointer-events-none absolute font-mono text-xs font-semibold text-teal-light opacity-25"
                  style={{ left: f.left, top: f.top }}
                  aria-hidden="true"
                >
                  {f.text}
                </motion.span>
              ))}

            {/* NOV-05 «Полиглот»: typing speech bubble */}
            {robot.id === 'nov5' && <GreetingBubble reduced={reduced} />}

            {/* NOV-06 «Кибер»: binary strings drifting upward */}
            {robot.id === 'nov6' &&
              BINARY_BITS.map((b) => (
                <motion.span
                  key={b.text}
                  animate={reduced ? undefined : { y: [0, -30], opacity: [0, 0.55, 0] }}
                  transition={{
                    duration: b.duration,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: b.delay,
                  }}
                  className={`pointer-events-none absolute font-mono text-[10px] font-semibold text-coral-light ${
                    reduced ? 'opacity-40' : ''
                  }`}
                  style={{ left: b.left, top: b.top }}
                  aria-hidden="true"
                >
                  {b.text}
                </motion.span>
              ))}

            {/* boot sequence: the chest panel flashes twice before switching */}
            {booting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0, 0.9, 0] }}
                transition={{ duration: 0.45, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
                className="pointer-events-none absolute left-[36%] top-[44%] z-20 h-[20%] w-[28%] rounded-lg bg-teal"
                aria-hidden="true"
              />
            )}

            {/* assembly intro fragments */}
            {assemble &&
              particles.map((p, i) => (
                <span
                  key={i}
                  className={`rm-particle pointer-events-none absolute left-1/2 top-1/2 ${
                    p.round ? 'rounded-full' : 'rounded-sm'
                  } ${p.color}`}
                  style={
                    {
                      width: p.size,
                      height: p.size,
                      marginLeft: -p.size / 2,
                      marginTop: -p.size / 2,
                      animationDelay: `${p.delay}s`,
                      '--px': `${p.x}px`,
                      '--py': `${p.y}px`,
                    } as React.CSSProperties
                  }
                  aria-hidden="true"
                />
              ))}
          </motion.div>

          <p className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-teal-dark">
            <motion.span
              variants={{ rest: { rotate: 0 }, hover: { rotate: 180 } }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              className="inline-flex"
            >
              <Settings className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.span>
            {robot.idLine}
          </p>
          <h3 className="relative mt-1 font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-teal-dark">
            {robot.name}
            <motion.span
              variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-teal"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-1.5 text-sm text-slateink">{robot.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {robot.chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-mist/30 px-2.5 py-1 text-xs font-semibold text-teal-dark"
              >
                {chip.icon}
                {chip.label}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs font-medium text-slateink">{robot.countsLine}</p>
          {robot.recommended && (
            <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-coral/40 px-2.5 py-1 text-[11px] font-semibold text-coral">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              {robot.recommendedBadge}
            </span>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

const RobotShowcase: React.FC<{ robots: ShowcaseRobot[] }> = ({ robots }) => {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const reduced = reducedMotion ?? false;

  const sceneRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const robotsRef = useRef(robots);
  robotsRef.current = robots;

  const [eyeOffsets, setEyeOffsets] = useState<Record<string, EyeOffset>>({});
  const [played] = useState(hasPlayed);
  const [bootingId, setBootingId] = useState<MentorRobotId | null>(null);
  const bootTimer = useRef(0);

  useEffect(() => {
    hasPlayed = true;
  }, []);
  useEffect(() => () => window.clearTimeout(bootTimer.current), []);

  /* Cursor eye-tracking: one mousemove listener on the scene, throttled with
     requestAnimationFrame. Touch devices and reduced motion keep eyes centered. */
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || reduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    let lastApplied: Record<string, EyeOffset> = {};
    const apply = () => {
      raf = 0;
      const next: Record<string, EyeOffset> = {};
      robotsRef.current.forEach((r, i) => {
        const el = slotRefs.current[i];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = lastX - (rect.left + rect.width / 2);
        const dy = lastY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, dist / 220);
        next[r.id] = { x: (dx / dist) * 2.5 * reach, y: (dy / dist) * 2.5 * reach };
      });
      /* Skip the state update when the pupils would not visibly move —
         otherwise every mousemove re-renders the whole scene. */
      const ids = Object.keys(next);
      const unchanged =
        ids.length === Object.keys(lastApplied).length &&
        ids.every((id) => {
          const prev = lastApplied[id];
          const cur = next[id];
          return prev && Math.abs(prev.x - cur.x) < 0.05 && Math.abs(prev.y - cur.y) < 0.05;
        });
      if (unchanged) return;
      lastApplied = next;
      setEyeOffsets(next);
    };
    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (Object.keys(lastApplied).length === 0) return;
      lastApplied = {};
      setEyeOffsets({});
    };
    scene.addEventListener('mousemove', onMove);
    scene.addEventListener('mouseleave', onLeave);
    return () => {
      scene.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const handleSelect = (robot: ShowcaseRobot) => {
    if (bootingId !== null) return;
    if (reduced) {
      robot.onSelect();
      return;
    }
    setBootingId(robot.id);
    bootTimer.current = window.setTimeout(() => robot.onSelect(), 540);
  };

  return (
    <div ref={sceneRef} className={`rm-scene relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${reduced ? '' : 'rm-scene-animated'}`}>
      <style>{SHOWCASE_CSS}</style>
      {robots.map((robot, index) => (
        <RobotSlot
          key={robot.id}
          robot={robot}
          index={index}
          played={played}
          reduced={reduced}
          booting={bootingId === robot.id}
          sceneBooting={bootingId !== null}
          eyeOffset={eyeOffsets[robot.id]}
          setSlotRef={(el) => {
            slotRefs.current[index] = el;
          }}
          language={language}
          onSelect={() => handleSelect(robot)}
        />
      ))}
    </div>
  );
};

export default RobotShowcase;
