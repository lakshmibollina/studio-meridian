# Studio Meridian — Digital Product & Brand Studio

A portfolio-grade demo website for **Studio Meridian**, a fictional digital product
& brand studio based in Raleigh, NC. Bright, airy, light-theme design with bold
display typography, playful micro-interactions, and scroll-driven motion.

## Tech stack

- **React 18** + **Vite 5** — component UI and fast dev/build tooling
- **Tailwind CSS 3** — utility-first styling, custom theme tokens
- **framer-motion** — staggered reveals, scroll-driven pinned storytelling,
  count-up stats, accordion micro-interactions

No other UI libraries.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Other scripts

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Features

- **Sticky glass navbar** — CSS logo mark, anchor links, "Start a project" CTA
  pill, animated mobile menu
- **Hero with staggered word reveal** — headline words slide up one by one via
  framer-motion; floating gradient blobs, rotating badge, mini stats row
- **Infinite marquee strip** — services keywords scrolling on a CSS keyframe loop
- **Selected work grid** — 6 case studies with pure-CSS gradient + shape
  thumbnails (no image files), hover zoom + arrow overlay
- **Services accordion** — large rows expand on hover (tap on mobile) revealing
  descriptions and deliverable tags
- **Pinned process story** — `useScroll`-driven pinned section stepping through
  Discover → Design → Build → Launch with a progress indicator
- **Stats band** — count-up animation when scrolled into view
- **Testimonials** — elegant client quote cards
- **Contact CTA** — "Let's make something bright together" with email button
  and social links
- Fully responsive (verified mentally at 390px: type scales, grids stack, pinned
  section stays smooth)

## Project structure

```
agency-site/
├── index.html
├── package.json
├── vite.config.js          # base: './' for portable builds
├── tailwind.config.js      # Space Grotesk / Inter, brand colors, animations
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css             # fonts, tailwind directives, keyframes
    ├── App.jsx
    ├── data/
    │   └── content.js        # all site copy in one place
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── WorkGrid.jsx
        ├── Services.jsx
        ├── Story.jsx
        ├── StatsBand.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Notes

- All copy is realistic agency copy; no lorem ipsum.
- All artwork (thumbnails, blobs, badges) is pure CSS — zero image assets.
- Push-ready: `npm run build` produces a static `dist/` you can deploy anywhere.
