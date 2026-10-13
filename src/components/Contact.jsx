import { motion } from 'framer-motion';
import { contact } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden py-28 sm:py-36">
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral-300/50 via-grape-300/50 to-amberpop-300/50 blur-3xl" />
        <div className="dot-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="mb-6 inline-grid h-16 w-16 animate-float place-items-center rounded-3xl bg-gradient-to-br from-coral-400 via-grape-500 to-amberpop-400 font-display text-3xl font-bold text-white shadow-soft">
            M
          </span>
          <h2 className="font-display text-[clamp(2.4rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
            {contact.heading.split('bright').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-gradient">bright</span>
                )}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-inksoft">
            {contact.subcopy}
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-display text-lg font-semibold text-white shadow-soft transition-colors duration-300 hover:bg-gradient-to-r hover:from-coral-500 hover:to-grape-600"
            >
              <span aria-hidden="true">✉</span>
              {contact.email}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </motion.a>
            <p className="text-sm text-inksoft">
              Prefer a call? We do 30-minute intro chats every Tuesday & Thursday.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/70 px-5 py-2.5 text-sm font-semibold ring-1 ring-ink/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-card hover:ring-ink/20"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
