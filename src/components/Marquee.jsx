import { marqueeKeywords } from '../data/content.js';

export default function Marquee() {
  const row = [...marqueeKeywords, ...marqueeKeywords];
  return (
    <section aria-label="Services ticker" className="relative z-10 -rotate-1">
      <div className="overflow-hidden border-y-2 border-ink bg-ink py-4">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {row.map((word, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
                {word}
              </span>
              <span
                aria-hidden="true"
                className={
                  i % 3 === 0
                    ? 'text-2xl text-coral-400'
                    : i % 3 === 1
                      ? 'text-2xl text-grape-400'
                      : 'text-2xl text-amberpop-400'
                }
              >
                ✶
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
