import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content.js';

function LogoMark() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 via-grape-500 to-amberpop-400 font-display text-lg font-bold text-white shadow-card transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
        M
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Studio&nbsp;Meridian
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div
          className={`glass flex w-full items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 ${
            scrolled ? 'shadow-card' : 'shadow-none'
          }`}
        >
          <LogoMark />

          {/* desktop links */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-inksoft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-coral-400 to-grape-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-coral-500 hover:to-grape-600"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-xl text-ink md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-5 md:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-soft">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl px-4 py-3 font-display text-lg font-semibold hover:bg-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-ink px-4 py-3 text-center font-display text-lg font-semibold text-white"
              >
                Start a project →
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
