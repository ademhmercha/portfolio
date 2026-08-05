# AGENTS.md — Portfolio

## What this is

Static single-page portfolio site (Adem Hmercha). No build system, no dependencies. Pure HTML/CSS/vanilla JS deployed to Vercel.

**Design**: Premium light (peach) + dark theme toggle, defaults to the visitor's OS `prefers-color-scheme` on first visit. Custom cursor with contextual "View"/"Details" label over project cards, scroll-reveal animations, magnetic buttons, text-split hero with a cursor-reactive gradient glow, scroll-progress bar, and a hide-on-scroll-down navbar.

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Single page — all sections |
| `assets/css/style.css` | All styles (dark theme, responsive at 1024/768/390px) |
| `assets/js/i18n.js` | EN/FR dictionary + language switcher — must load before `main.js` |
| `assets/js/main.js` | Vanilla JS IIFEs: cursor, typing, navbar, scroll reveal, magnetic buttons, smooth scroll, marquee, mobile bottom nav |
| `assets/CV_Adem_Hmercha_EN.pdf` / `_FR.pdf` | Downloadable CVs, linked from the hero buttons |
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
- **i18n**: every translatable node in `index.html` carries `data-i18n="namespace.key"` (add `data-i18n-html="true"` if the value contains markup like `<strong>`/`<span>`, or `data-i18n-attr="content"` for `<meta>` tags). `assets/js/i18n.js` holds both EN and FR copy for every key — add new UI text there, in both languages, not just as raw HTML. Language auto-detects from `navigator.language` on first visit, then persists via `localStorage['lang']`; the hero's typing-role list and the project-card cursor label ("View"/"Details") also come from `i18n.js` rather than being hardcoded in `main.js`. Toggle buttons: `.nav__lang-btn[data-lang-btn]` (desktop) and `[data-lang-btn-mobile]` (mobile bottom nav).
