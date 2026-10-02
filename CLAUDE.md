# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for Stewart's Storytelling, a wedding videographer in Greenville, SC. A single long page (`app/page.tsx`) with anchor-linked sections — there are no other routes. Next.js 16 (App Router) + Tailwind CSS v4, deployed on Vercel at the custom domain `stewartstorytelling.com`, auto-deploying from the `main` branch of `rpeterjoseph/stewart-films` on GitHub.

## Commands

```bash
npm install
npm run dev     # dev server at localhost:3000
npm run build   # production build — run this + lint before committing
npm run lint    # eslint (eslint-config-next)
```

There is no test suite in this project.

## Architecture

**Single-page, no CMS.** All page content (`FILMS`, `PACKAGES`, `FAQS`, `REVIEWS`) is defined as plain const arrays at the top of `app/page.tsx` and rendered via `.map()`. There's no database or content API — editing copy means editing those arrays directly.

**Styling is CSS-variable-driven, not `tailwind.config.js`.** Tailwind v4's `@theme inline` block in `app/globals.css` maps semantic names (`--color-bg`, `--color-accent`, `--font-display`, etc.) to CSS custom properties, which become Tailwind utilities (`bg-bg`, `text-accent`, `font-display`). Color/font changes go in `app/globals.css`, not a config file.

**Three distinct font roles**, each loaded via `next/font/google` in `app/layout.tsx` and wired to a Tailwind utility in `globals.css`:
- `font-display` (Instrument Serif) — headings and FAQ questions
- `font-ui` (Work Sans) — category/eyebrow labels, nav, tags, badges
- default body font (Instrument Sans, set on `body` in globals.css) — paragraphs, buttons, footer text

Don't use `font-ui` for body copy or vice versa — this split was deliberate (see git history) and visually distinguishes labels from reading text.

**Contact info is centralized in `lib/contact.ts`** (`PHONE_TEL`, `PHONE_DISPLAY`, `PHONE_E164`, `EMAIL`, `EMAIL_MAILTO`). Always import from there — it's consumed by `Header.tsx`, `Footer.tsx`, `page.tsx`, and the JSON-LD in `layout.tsx`. Never hardcode the phone number or email inline.

**`FilmTile.tsx`** is a client component that shows a static thumbnail with a play button; clicking swaps in a Google Drive iframe embed (`driveId` field on each `FILMS` entry). This is a known temporary state — Drive's embedded player is clunky, and YouTube isn't viable because the videos use copyrighted music (would trigger Content ID). Plan is to migrate to Vimeo or self-hosted video; when that happens, `FilmTile` will need a new embed branch (or full replacement) alongside the `driveId` logic.

**`public/photos/`** holds real site photography (hero image, Stewart's portrait). **`public/films/`** holds the video thumbnail stills used in the Films section tiles. Keep this split — they serve different purposes even though both are just static images.

**`PhotoPlaceholder.tsx`** is a reusable gradient placeholder for sections still missing a real photo (currently only the CTA banner above Packages, via `showLabel={false}` so no label text ever shows on top of real overlaid content — see the component's `showLabel` prop before reusing it with an overlay).

**SEO is handled via Next.js file conventions**: `app/sitemap.ts`, `app/robots.ts`, and `app/opengraph-image.tsx` (which dynamically generates a branded OG image at build time using `next/og`'s `ImageResponse` — it fetches the actual Instrument Serif font file from Google Fonts so the generated image matches real site branding, rather than falling back to a generic serif). `app/layout.tsx` also embeds `LocalBusiness` JSON-LD structured data for local search.

## Git workflow

Development happens on a feature branch (not directly on `main`); `main` is production and auto-deploys to the live domain. Only fast-forward-merge a branch into `main` when explicitly asked to — don't merge proactively after every change.
