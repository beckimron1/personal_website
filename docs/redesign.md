# Editorial portfolio redesign

## Brief

An engineering portfolio for internship recruiters, product teams, and potential
startup collaborators. The first visit should establish who Imronbek is, expose
selected work immediately, and make the résumé and contact actions easy to find.

The research reference is the structured Codex workflow in
https://www.youtube.com/watch?v=pHstb0JGGhE: preserve context, establish a design
system, iterate components, inspect rendered pages, and verify before deployment.
The model is an implementation aid, not the design rationale.

## Visual direction

- Warm ivory `#f7f7ef`, dark ink `#202c29`, forest `#243d32`, restrained lime `#dbf68a`.
- Manrope for UI/body text; Instrument Serif italic for editorial emphasis.
- Open sections, thin rules and uneven project layouts instead of nested cards.
- Original IA monogram and typographic project covers; no stock photos or mock metrics.
- Compact, transform-only hover effects. No hidden-on-load content or motion dependency.
- One sticky header, native links, a mobile disclosure menu, and a visible keyboard focus style.
- Breakpoints at 1100, 800 and 550px; narrow-screen checks down to 320px.

## Structure

Home → selected work → about → experience → toolkit → contact.
Three pre-rendered `/work/[slug]` pages explain each project's challenge,
contribution and outcome/status. The full stack and existing highlights remain available.
The homepage is a server component; only navigation needs client-side state.

## Content boundaries

The original `portfolio.ts` biography and experience remain unchanged. Expanded
project notes restate that source; no dates, adoption figures, model accuracy,
financial savings or conversion improvements were invented. TTLK is explicitly
an ongoing initiative. Internal laboratory data is not exposed. Cover artwork is
not presented as product screenshots. The nickname Beck comes from this user's identity.

Before publishing, Beck should confirm that the original role descriptions,
student status, availability, email and résumé are still current. Add verified
project URLs, approved screenshots, and measured outcomes when available.

## Engineering decisions

- Replaced whole-page Framer Motion with SSR content and CSS hover transitions.
- Removed unused Framer Motion, next-themes, and react-icons dependencies.
- Applied compatible dependency security fixes and updated React within 19.2.
- Added canonical URLs, generated Open Graph artwork, a custom SVG icon,
  robots.txt and sitemap.xml. Canonical origin is centralized in `src/data/work.ts`.
- Preserved the existing PDF résumé and GitHub/LinkedIn destinations.
- Added Playwright and axe-core checks for desktop and mobile-emulated Chromium.
- Added regression tests for serif-font variable inheritance, mobile Escape/focus,
  and real project detail navigation. Each was observed failing before its fix.

## Verification commands

`npm run lint`, `npx tsc --noEmit`, `npm test`, `npm run test:production`, `npm audit`.
Production tests launch `next start` after a real build, not the dev server.
Screenshot artifacts live in the ignored `artifacts/` folder. The browser suite
checks accessibility, overflow, no-JS content, reduced motion, metadata and assets.
Automated accessibility results are not a claim of complete WCAG conformance.

## Release boundary

No Git commit, push, remote repository setting change, or production deployment
is authorized by this redesign task. The existing public site is unchanged.
When approved: review content, commit the branch, open a preview deployment,
verify it, update the obsolete GitHub homepage setting, then merge/deploy.
