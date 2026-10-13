import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { stats } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section id="studio" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 animate-float rounded-full bg-coral-300/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 animate-float-slow rounded-full bg-grape-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="glass rounded-[2.5rem] p-8 shadow-soft sm:p-12 lg:p-16"
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-md font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Small studio, <span className="text-gradient">outsized results</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-inksoft">
              Fourteen people in Raleigh, zero account managers between you and
              the work. Here's what eight independent years look like in numbers.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="relative"
              >
                <dd className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm font-medium text-inksoft">{s.label}</dt>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-coral-400 via-grape-400 to-amberpop-400"
                />
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
