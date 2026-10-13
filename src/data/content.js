export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Digital product & brand studio — Raleigh, NC',
  headline: 'We design digital products people love to use.',
  subcopy:
    'Studio Meridian is a 14-person crew of designers, engineers, and storytellers. We partner with ambitious teams to turn fuzzy ideas into sharp brands and lovable products — from first sketch to shipped software.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'See our work', href: '#work' },
  miniStats: [
    { value: '120+', label: 'projects shipped' },
    { value: '14', label: 'design awards' },
    { value: '8 yrs', label: 'independent' },
  ],
};

export const marqueeKeywords = [
  'Brand Identity',
  'Web Design',
  'Product Design',
  'Motion & 3D',
  'Design Systems',
  'Art Direction',
  'Prototyping',
  'UX Research',
];

export const projects = [
  {
    client: 'Northwind Bank',
    title: 'Mobile banking, redesigned around humans',
    tags: ['Product design', 'iOS & Android', 'Design system'],
    year: '2026',
    // thumbnail styling: gradient bg + accent shapes
    bg: 'from-sky-200 via-cyan-100 to-emerald-100',
    shapeA: 'bg-coral-400',
    shapeB: 'border-grape-500',
    blurb: 'A full mobile banking overhaul — 42% faster task completion in usability testing.',
  },
  {
    client: 'Fern & Field',
    title: 'DTC skincare rebrand & storefront',
    tags: ['Brand identity', 'E-commerce', 'Art direction'],
    year: '2025',
    bg: 'from-lime-100 via-emerald-100 to-teal-100',
    shapeA: 'bg-amberpop-400',
    shapeB: 'border-emerald-600',
    blurb: 'New identity, packaging system, and Shopify storefront. Conversion up 31% in Q1.',
  },
  {
    client: 'Loopwork',
    title: 'Async collaboration platform',
    tags: ['Product design', 'Web app', 'Motion'],
    year: '2025',
    bg: 'from-violet-200 via-grape-300 to-fuchsia-200',
    shapeA: 'bg-grape-500',
    shapeB: 'border-fuchsia-500',
    blurb: '0-to-1 design for a remote-work tool now used by 9,000 teams.',
  },
  {
    client: 'Copperline Coffee',
    title: 'Café brand & loyalty experience',
    tags: ['Brand identity', 'Packaging', 'Mobile'],
    year: '2024',
    bg: 'from-amber-100 via-orange-100 to-coral-300',
    shapeA: 'bg-coral-500',
    shapeB: 'border-amberpop-600',
    blurb: 'Identity, cup system, and a loyalty app regulars actually open.',
  },
  {
    client: 'Atlas Health',
    title: 'Patient portal that calms nerves',
    tags: ['UX research', 'Web app', 'Design system'],
    year: '2024',
    bg: 'from-rose-100 via-pink-100 to-violet-100',
    shapeA: 'bg-rose-400',
    shapeB: 'border-grape-400',
    blurb: 'Plain-language UX for 200k patients booking care without the phone tag.',
  },
  {
    client: 'Wavelength Radio',
    title: 'Streaming brand & marketing site',
    tags: ['Brand identity', 'Web design', 'Motion & 3D'],
    year: '2023',
    bg: 'from-indigo-100 via-sky-100 to-cyan-100',
    shapeA: 'bg-sky-400',
    shapeB: 'border-indigo-500',
    blurb: 'A loud, lovable identity and a site with a 4.2% visitor-to-trial rate.',
  },
];

export const services = [
  {
    name: 'Brand identity',
    tagline: 'Names, marks, and systems with a point of view.',
    description:
      'We dig into what makes you different, then build an identity that says it at a glance — logo, typography, color, voice, and the rules that keep it sharp everywhere it shows up.',
    deliverables: ['Logo & mark', 'Typography system', 'Color & voice', 'Brand guidelines', 'Asset library'],
  },
  {
    name: 'Web design & build',
    tagline: 'Marketing sites that load fast and convert.',
    description:
      'From sitemap to shipped site: UX, UI, copy polish, and a performant React build your team can actually update. No 40-plugin page builders, no mystery code.',
    deliverables: ['UX & UI design', 'React development', 'CMS setup', 'SEO foundations', 'Analytics'],
  },
  {
    name: 'Product design',
    tagline: '0-to-1 apps and the flows inside them.',
    description:
      'Research, flows, prototypes, and pixel-tight UI for web and mobile products. We design in the open with your team and validate with real users before a line of production code.',
    deliverables: ['UX research', 'User flows', 'Prototypes', 'UI design', 'Handoff docs'],
  },
  {
    name: 'Motion & 3D',
    tagline: 'The layer that makes people feel something.',
    description:
      'Micro-interactions, product explainers, launch films, and playful 3D moments that give your brand texture — always in service of the story, never decoration for its own sake.',
    deliverables: ['Micro-interactions', 'Explainer video', '3D illustrations', 'Lottie assets', 'Launch film'],
  },
  {
    name: 'Design systems',
    tagline: 'One source of truth your whole team trusts.',
    description:
      'Component libraries, tokens, and documentation that let designers and engineers move fast without breaking things. Built to scale from a 3-person startup to a 300-person org.',
    deliverables: ['Component library', 'Design tokens', 'Documentation', 'Figma setup', 'Governance'],
  },
];

export const processPanels = [
  {
    step: '01',
    title: 'Discover',
    heading: 'We start by listening, not sketching.',
    body: 'Stakeholder interviews, user research, competitive teardowns, and a ruthless look at your analytics. We leave this phase with a shared definition of success — written down, agreed on, pinned to the wall.',
    points: ['Research & interviews', 'Jobs-to-be-done mapping', 'Success metrics'],
  },
  {
    step: '02',
    title: 'Design',
    heading: 'Ideas get loud before they get good.',
    body: 'Rapid exploration across dozens of directions, then convergence. You see real prototypes early — clickable, honest, and testable with users — not static mockups in a vacuum.',
    points: ['Exploration sprints', 'Clickable prototypes', 'User testing rounds'],
  },
  {
    step: '03',
    title: 'Build',
    heading: 'Design and code, side by side.',
    body: 'Our designers sit with engineers (yours or ours) through the build. Nothing gets lost in handoff because there is no handoff — just one team sweating the details together.',
    points: ['Design engineering', 'Weekly demos', 'QA & polish passes'],
  },
  {
    step: '04',
    title: 'Launch',
    heading: 'Ship day is the starting line.',
    body: 'We help you launch loud, measure what matters, and iterate fast. Most clients stay with us for phase two — because the first version teaches us what the great version needs.',
    points: ['Launch support', 'Analytics setup', 'Iteration roadmap'],
  },
];

export const stats = [
  { value: 120, suffix: '+', label: 'Projects shipped' },
  { value: 14, suffix: '', label: 'Design awards' },
  { value: 8, suffix: '', label: 'Years independent' },
  { value: 96, suffix: '%', label: 'Client retention' },
];

export const testimonials = [
  {
    quote:
      'Meridian took our vague "make banking less painful" brief and turned it into an app our customers genuinely compliment. Task completion is up 42% and support tickets are down by a third.',
    name: 'Priya Raman',
    role: 'VP of Digital, Northwind Bank',
    initials: 'PR',
    accent: 'bg-coral-400',
  },
  {
    quote:
      'They work like an in-house team that happens to be better at branding than we are. Fast, honest, and allergic to fluff — the rebrand paid for itself in a single quarter.',
    name: 'Marcus Webb',
    role: 'Founder, Fern & Field',
    initials: 'MW',
    accent: 'bg-grape-500',
  },
  {
    quote:
      'The rare studio that designs beautifully and ships responsibly. Our engineers loved their handoff docs so much they asked Meridian to run a workshop for our whole org.',
    name: 'Elena Torres',
    role: 'CPO, Loopwork',
    initials: 'ET',
    accent: 'bg-amberpop-400',
  },
];

export const contact = {
  heading: "Let's make something bright together.",
  subcopy:
    'Tell us where you are and where you want to be. We reply to every serious inquiry within two business days — usually faster.',
  email: 'hello@studiomeridian.co',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'X', href: 'https://x.com' },
  ],
};

export const footer = {
  address: ['416 S Dawson St, Suite 200', 'Raleigh, NC 27601'],
  tagline: 'An independent digital product & brand studio.',
  copyright: '© 2026 Studio Meridian. All rights reserved.',
};
