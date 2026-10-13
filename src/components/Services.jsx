import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];

// Static class maps (Tailwind JIT needs literal class names — no template-built tokens)
const accentStyles = {
  coral: {
    text: 'text-coral-500',
    rule: 'from-coral-400 to-coral-600',
  },
  grape: {
    text: 'text-grape-500',
    rule: 'from-grape-400 to-grape-600',
  },
  amberpop: {
    text: 'text-amberpop-600',
    rule: 'from-amberpop-400 to-amberpop-600',
  },
};
const accentKeys = ['coral', 'grape', 'amberpop', 'coral', 'grape'];

function ServiceRow({ service, index, open, onOpen, onClose, onToggle }) {
  const accent = accentStyles[accentKeys[index % accentKeys.length]];
  const isOpen = open === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
        isOpen
          ? 'border-transparent bg-white shadow-soft'
          : 'border-ink/10 bg-white/50 hover:border-ink/20'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-6 py-6 text-left sm:gap-8 sm:px-10 sm:py-8"
      >
        <span
          className={`font-display text-sm font-bold tracking-widest ${
            isOpen ? accent.text : 'text-ink/30'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1">
          <span className="block font-display text-2xl font-bold tracking-tight sm:text-4xl">
            {service.name}
          </span>
          <span className="mt-1 block text-sm text-inksoft sm:text-base">
            {service.tagline}
          </span>
        </span>
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-2xl transition-all duration-300 ${
            isOpen
              ? 'rotate-45 bg-ink text-white'
              : 'bg-ink/5 text-ink group-hover:bg-ink/10'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 sm:px-10 sm:pl-[4.5rem]">
              <motion.div
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease }}
              >
                <div
                  className={`mb-5 h-1 w-24 rounded-full bg-gradient-to-r ${accent.rule}`}
                />
                <p className="max-w-2xl leading-relaxed text-inksoft">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink ring-1 ring-ink/10"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="scroll-mt-28 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-grape-600">
            What we do
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Five crafts, <span className="text-gradient">one team</span>
          </h2>
          <p className="mt-4 max-w-xl text-inksoft">
            Hover a row to see what's inside. Every engagement mixes and matches
            these crafts to fit the problem — never a one-size package.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <ServiceRow
              key={service.name}
              service={service}
              index={i}
              open={open}
              onOpen={() => setOpen(i)}
              onClose={() => setOpen(-1)}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
