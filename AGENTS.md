# AGENTS.md — Portfolio

## What this is

Static single-page portfolio site (Adem Hmercha). No build system, no dependencies. Pure HTML/CSS/vanilla JS deployed to Vercel.

**Design**: Premium dark theme with custom cursor, scroll-reveal animations, magnetic buttons, and text-split hero.

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Single page — all sections |
| `assets/css/style.css` | All styles (dark theme, responsive at 1024/768/390px) |
| `assets/js/main.js` | Vanilla JS IIFEs: cursor, typing, navbar, scroll reveal, magnetic buttons, smooth scroll, marquee, mobile bottom nav |
| `assets/cv.pdf` | Downloadable CV |
| `vercel.json` | Vercel config: SPA rewrites, security headers |

## How to work on it

- **Preview**: Open `index.html` in a browser or use any static file server
- **Deploy**: Push to `main` — Vercel auto-deploys
- **No build step** — edit and refresh

## Conventions

- No linter, formatter, or type checker — follow existing style manually
- CSS uses custom properties in `:root` (dark palette, accent gradient, easing curves)
- JS uses IIFE pattern; all IIFEs check `prefers-reduced-motion` and skip accordingly
- Custom cursor only on desktop (hidden on touch devices via JS + media query)
- Google Fonts: Inter (body), Syne (headings), JetBrains Mono (labels)
- `::selection` styled with emerald accent

## Gotchas

- `vercel.json` rewrites all routes to `/index.html` (SPA behavior)
- `.vercel/` is in `.gitignore` but `project.json` is tracked
- Hero name uses `.line` + `.line-inner` pattern for staggered text reveal — don't flatten the markup without updating CSS animations
