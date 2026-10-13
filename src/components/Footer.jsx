import { navLinks, footer } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 via-grape-500 to-amberpop-400 font-display text-lg font-bold text-white">
                M
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Studio&nbsp;Meridian
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-inksoft">
              {footer.tagline} Brand, web, product, motion, and design systems —
              designed in daylight, shipped with care.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-inksoft">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ink transition-colors hover:text-grape-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-inksoft">
              Studio
            </p>
            <address className="text-sm not-italic leading-relaxed text-ink">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href="mailto:hello@studiomeridian.co"
              className="mt-3 inline-block text-sm font-semibold text-coral-600 hover:text-coral-500"
            >
              hello@studiomeridian.co
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs text-inksoft">{footer.copyright}</p>
          <p className="text-xs text-inksoft">
            Made with sunshine in Raleigh, North Carolina ☀
          </p>
        </div>
      </div>
    </footer>
  );
}
