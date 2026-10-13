import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { motion, useScroll } from 'framer-motion';
import { hero } from '../data/content.js';
import WebGLErrorBoundary from './WebGLErrorBoundary.jsx';

// Code-split: three.js only downloads when the canvas actually renders (desktop).
const HeroCanvas = lazy(() => import('./HeroCanvas.jsx'));

function useShowCanvas() {
  const [show, setShow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setShow(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return show;
}

const ease = [0.22, 1, 0.36, 1];

function StaggeredHeadline({ text }) {
  // Per-character reveal, keeping word grouping so lines never break mid-word.
  const words = text.split(' ');
  let charIndex = 0;
  return (
    <h1 className="font-display text-[clamp(2.6rem,8.5vw,5.75rem)] font-bold leading-[1.02] tracking-tight">
      {words.map((word, i) => {
        const chars = word.split('').map((ch, ci) => {
          const delay = 0.25 + charIndex * 0.016;
          charIndex += 1;
          return (
            <motion.span
              key={ci}
              className="inline-block will-change-transform"
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.5, delay, ease }}
            >
              {ch}
            </motion.span>
          );
        });
        return (
          <span
            key={i}
            className="inline-block overflow-hidden whitespace-nowrap pb-2 -mb-2 align-bottom"
          >
            {chars}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </h1>
  );
}

function RotatingBadge() {
  return (
    <div className="relative grid h-28 w-28 place-items-center sm:h-36 sm:w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-ink font-display text-[10.5px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle">
            independent studio · est. 2018 ·
          </textPath>
        </text>
      </svg>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-coral-400 to-grape-500 text-2xl text-white shadow-card sm:h-14 sm:w-14">
        ✶
      </span>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const showCanvas = useShowCanvas();
  // Scroll progress across the hero drives the 3D camera drift (subtle).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-36 sm:pt-44">
      {/* interactive 3D field — desktop only, sits behind content */}
      {showCanvas && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <WebGLErrorBoundary>
            <Suspense fallback={null}>
              <HeroCanvas progress={scrollYProgress} />
            </Suspense>
          </WebGLErrorBoundary>
        </div>
      )}
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-float rounded-full bg-coral-300/50 blur-3xl" />
        <div className="absolute top-40 -right-28 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-grape-300/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-float rounded-full bg-amberpop-300/40 blur-3xl [animation-delay:2s]" />
        <div className="dot-grid absolute inset-x-0 top-0 h-64 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-inksoft backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-coral-500 to-grape-500" />
            {hero.eyebrow}
          </motion.p>

          <StaggeredHeadline text={hero.headline} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-inksoft"
          >
            {hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display text-base font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-coral-500 hover:to-grape-600"
            >
              {hero.primaryCta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white/60 px-7 py-3 font-display text-base font-semibold backdrop-blur transition-all duration-300 hover:border-ink hover:bg-white"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          {/* mini stats */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
          >
            {hero.miniStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight">
                  {s.value}
                </dd>
                <dd className="text-sm text-inksoft">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* decorative composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="relative mx-auto hidden h-[26rem] w-full max-w-sm select-none sm:block lg:max-w-none"
          aria-hidden="true"
        >
          {/* floating glass cards */}
          <div className="glass absolute left-4 top-6 w-56 animate-float rounded-3xl p-5 shadow-soft">
            <p className="font-display text-4xl font-bold text-gradient">42%</p>
            <p className="mt-1 text-sm text-inksoft">
              faster task completion after the Northwind redesign
            </p>
          </div>

          <div className="glass absolute bottom-10 right-2 w-60 animate-float-slow rounded-3xl p-5 shadow-soft">
            <div className="flex -space-x-2.5">
              {['bg-coral-400', 'bg-grape-500', 'bg-amberpop-400'].map((c) => (
                <span
                  key={c}
                  className={`h-9 w-9 rounded-full border-2 border-white ${c}`}
                />
              ))}
            </div>
            <p className="mt-2 text-sm font-medium">
              Loved by teams at 120+ companies
            </p>
          </div>

          {/* gradient orb + shapes */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral-400 via-grape-400 to-amberpop-400 opacity-90 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[2.5rem] border-4 border-white/70 bg-white/20 backdrop-blur-sm" />

          <div className="absolute right-8 top-2">
            <RotatingBadge />
          </div>

          <div className="absolute bottom-4 left-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-card">
            <span className="text-lg">🏆</span> Awwwards — Site of the Day ×3
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative mx-auto flex max-w-7xl justify-center pb-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-ink/20 p-1.5"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-coral-500 to-grape-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
