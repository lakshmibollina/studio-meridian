import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { processPanels } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];
const panelAccents = [
  'from-coral-300 to-amberpop-300',
  'from-grape-300 to-coral-300',
  'from-amberpop-300 to-grape-300',
  'from-emerald-200 to-sky-200',
];

export default function Story() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      processPanels.length - 1,
      Math.max(0, Math.floor(v * processPanels.length)),
    );
    setActive(idx);
  });

  const panel = processPanels[active];

  return (
    <section id="process" ref={targetRef} className="relative h-[380vh] scroll-mt-0">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-cream">
        {/* backdrop wash that shifts per panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${panelAccents[active]} opacity-25`}
            aria-hidden="true"
          />
        </AnimatePresence>

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-grape-600">
            How we work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A process with <span className="text-gradient">no black boxes</span>
          </h2>

          {/* progress rail */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-coral-500 via-grape-500 to-amberpop-500"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <span className="font-display text-sm font-bold tabular-nums">
              {active + 1} / {processPanels.length}
            </span>
          </div>

          {/* step pills */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {processPanels.map((p, i) => (
              <span
                key={p.step}
                className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-all duration-300 ${
                  i === active
                    ? 'bg-ink text-white shadow-card'
                    : i < active
                      ? 'bg-ink/10 text-ink'
                      : 'bg-white/70 text-inksoft ring-1 ring-ink/10'
                }`}
              >
                {p.step} · {p.title}
              </span>
            ))}
          </div>

          {/* active panel card */}
          <div className="mt-8 min-h-[19rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease }}
                className="glass max-w-3xl rounded-[2rem] p-8 shadow-soft sm:p-10"
              >
                <p className="font-display text-6xl font-bold text-ink/10 sm:text-7xl">
                  {panel.step}
                </p>
                <h3 className="-mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {panel.heading}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-inksoft">
                  {panel.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {panel.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold ring-1 ring-ink/10"
                    >
                      ✓ {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 text-sm text-inksoft">
            Keep scrolling — the story unfolds as you go.
          </p>
        </div>
      </div>
    </section>
  );
}
