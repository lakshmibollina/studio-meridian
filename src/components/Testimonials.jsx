import { motion } from 'framer-motion';
import { testimonials } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amberpop-600">
            Kind words
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Clients say it <span className="text-gradient">better</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease }}
              whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.5 : 0.5 }}
              className="flex flex-col rounded-3xl bg-cream p-8 shadow-card ring-1 ring-ink/5"
            >
              <div
                aria-hidden="true"
                className="mb-5 font-display text-5xl font-bold leading-none text-ink/15"
              >
                "
              </div>
              <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold text-white ${t.accent}`}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className="block text-sm text-inksoft">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
