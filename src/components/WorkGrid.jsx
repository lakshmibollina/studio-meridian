import { motion } from 'framer-motion';
import { projects } from '../data/content.js';

const ease = [0.22, 1, 0.36, 1];

function Thumb({ project }) {
  return (
    <div
      className={`relative h-60 overflow-hidden bg-gradient-to-br sm:h-64 ${project.bg}`}
      aria-hidden="true"
    >
      {/* abstract shapes — pure CSS artwork */}
      <div
        className={`absolute -right-10 -top-10 h-48 w-48 rounded-full ${project.shapeA} opacity-70 blur-[1px] transition-transform duration-500 group-hover:scale-125`}
      />
      <div
        className={`absolute -bottom-14 -left-14 h-56 w-56 rotate-12 rounded-[3rem] border-[10px] ${project.shapeB} opacity-60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
      />
      <div className="dot-grid absolute left-8 top-8 h-24 w-40 opacity-50" />
      <div
        className={`absolute right-16 top-16 h-10 w-10 rounded-full border-4 border-white/80 transition-transform duration-500 group-hover:translate-y-3`}
      />
      <div className="absolute bottom-8 right-8 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-white/90" />
        <span className="h-3 w-3 rounded-full bg-white/60" />
        <span className="h-3 w-3 rounded-full bg-white/30" />
      </div>

      {/* hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/15 group-hover:opacity-100">
        <span className="grid h-16 w-16 scale-75 place-items-center rounded-full bg-white text-2xl text-ink shadow-soft transition-transform duration-500 group-hover:scale-100">
          ↗
        </span>
      </div>
    </div>
  );
}

export default function WorkGrid() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease }}
        className="mb-14 flex flex-wrap items-end justify-between gap-6"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
            Selected work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Work we're <span className="text-gradient">proud of</span>
          </h2>
        </div>
        <p className="max-w-sm text-inksoft">
          A slice of recent partnerships — every project shipped, measured, and
          still loved by the teams who use it daily.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.client}
            data-cursor="view"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.12, ease }}
            className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-card transition-shadow duration-300 hover:shadow-soft"
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                <Thumb project={project} />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-inksoft">
                  {project.client}
                </p>
                <p className="font-display text-sm font-semibold text-ink/40">
                  {project.year}
                </p>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-grape-600">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inksoft">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-inksoft ring-1 ring-ink/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
