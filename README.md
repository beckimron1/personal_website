# Personal Website

This is my personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Live Website

https://personal-website-imronbek.vercel.app

## Features

- Personal introduction and background
- Projects showcase
- Skills and experience section
- Responsive design
- Fast deployment with Vercel

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Development

```sh
npm ci
npm run dev
```

## Verification

```sh
npx playwright install chromium
npm run lint
npm test
npm run test:production
npm audit
```

The browser suite runs desktop Chromium and a mobile-emulated Chromium viewport.
It checks all case-study routes, navigation, keyboard focus, automated WCAG
accessibility, overflow down to 320px, reduced motion, no-JavaScript content,
metadata, the résumé PDF, and missing-page behavior. It saves visual captures to
`artifacts/` (gitignored). Automated checks do not replace testing on real devices.

## Content and design

- `src/data/portfolio.ts`: original biography, experience, skills and contact data.
- `src/data/work.ts`: project notes, stable routes and canonical deployment URL.
- `src/app/globals.css`: editorial visual system and responsive behavior.
- `docs/redesign.md`: design rationale, content constraints and release checklist.

Project covers are original typographic artwork, not screenshots of the products.
Case studies deliberately avoid unverified performance metrics or public demo URLs.
The redesign is local until explicitly approved for commit, push and deployment.
