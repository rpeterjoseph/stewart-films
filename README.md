# Stewart's Storytelling

Marketing site for Stewart's Storytelling, a wedding videographer in Greenville, SC.
Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS v4](https://tailwindcss.com), ready to deploy on
[Vercel](https://vercel.com).

## Structure

Single page (`app/page.tsx`) with anchor sections: Home, About, Media,
Packages (incl. FAQs), Reviews. Shared contact info (phone/email) lives in
`lib/contact.ts`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Notes

- Contact info, pricing, and the three Films thumbnails/videos are real.
- The three Films videos are currently embedded from Google Drive
  (`components/FilmTile.tsx`) — this is a known temporary state. Plan is to
  move to Vimeo (or self-hosted) once uploaded, since Drive's embedded
  player is clunky and YouTube isn't an option (the videos use copyrighted
  music).
- The CTA banner above the Packages section (`app/page.tsx`) still uses a
  placeholder background (`components/PhotoPlaceholder.tsx`) — swap in a
  real photo when available.
- `app/favicon.ico` is still the default Next.js scaffold icon.

## Deploy

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
no additional configuration is required.
