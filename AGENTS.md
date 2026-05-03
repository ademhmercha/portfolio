# AGENTS.md — Portfolio

## What this is

Static single-page portfolio site (Adem Hmercha). No build system, no dependencies, no framework. Pure HTML/CSS/vanilla JS deployed to Vercel.

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Single page — all sections live here |
| `assets/css/style.css` | All styles (CSS custom properties, responsive breakpoints at 1024/768/390px) |
| `assets/js/main.js` | Vanilla JS IIFEs: typing animation, navbar, scroll reveal, magnetic buttons, smooth scroll, marquee, mobile bottom nav |
| `assets/photp.jpg` | Profile photo (note: filename has a typo — referenced as-is in HTML) |
| `assets/cv.pdf` | Downloadable CV |
| `vercel.json` | Vercel config: SPA rewrites to `index.html`, security headers |

## How to work on it

- **Preview**: Open `index.html` directly in a browser or use any static file server
- **Deploy**: Push to `main` — Vercel auto-deploys
- **No build step needed** — edit files and refresh

## Conventions

- No linter, formatter, or type checker — follow existing style manually
- CSS uses custom properties in `:root` for colors, fonts, and layout values
- JS uses IIFE pattern; respects `prefers-reduced-motion` globally
- Fonts loaded from Google Fonts: Inter (body), Syne (headings), JetBrains Mono (labels)
- Profile photo filename is `photp.jpg` (typo) — do not rename without updating HTML

## Gotchas

- `vercel.json` rewrites all routes to `/index.html` (SPA behavior) — not needed for a static site but harmless
- `.vercel/` is in `.gitignore` but `project.json` is tracked — contains Vercel project/org IDs
