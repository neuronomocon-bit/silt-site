# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** site with React 19 and TypeScript. All pages live under `src/app/` using file-based routing. There is no database, API layer, or external data fetching — all content is hardcoded in page components as TypeScript constants.

### Key files

- `src/app/layout.tsx` — Root layout wrapping all pages with header (logo + nav), `<main>`, and footer
- `src/app/globals.css` — All CSS variables for light/dark theming (`--bg`, `--text`, `--border`, `--link`, etc.)
- `src/components/ui.tsx` — Shared primitives used across pages: `PageWrap`, `H2`, `MutedP`, `StrongBox`, `Callout`, `Dot`
- `src/components/site-nav.tsx` — Client component; uses `usePathname()` to apply active styles to nav pills
- `src/components/document-header.tsx` — Renders document title, version, status badge, and effective date
- `src/lib/constants.ts` — Logo size/path constants
- `middleware.ts` — HTTP Basic Auth applied to all routes; reads `SILT_BASIC_USER` / `SILT_BASIC_PASS` from env; bypasses auth if vars are unset

### Styling conventions

- **Inline styles** are the primary styling method for components (not CSS modules or Tailwind)
- **CSS variables** defined in `globals.css` control theming; dark mode uses `html[data-theme="dark"]` and is toggled via `ThemeToggle` with `localStorage` persistence
- Layout uses `max-width: 980px` (outer) and `880px` (content); system font stack throughout
- The logo inverts via CSS `filter` in dark mode

### Authentication

Local dev credentials are in `.env.local`:
```
SILT_BASIC_USER=silt
SILT_BASIC_PASS=stylus-easing-banjo
```
The middleware skips auth entirely when these vars are absent, so the site works without the file.

### Path aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).
