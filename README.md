# Stewart Films

Marketing site for Stewart Films, a wedding videography studio. Built with
[Next.js](https://nextjs.org) (App Router) and [Tailwind CSS v4](https://tailwindcss.com),
ready to deploy on [Vercel](https://vercel.com).

## Pages

- `/` — Home
- `/portfolio` — Films (filterable gallery)
- `/about` — Studio story, process, team, and pricing packages
- `/contact` — Inquiry form and studio details

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Notes

- Placeholder photography is served from [picsum.photos](https://picsum.photos)
  — swap the `src` values in `app/page.tsx`, `components/FilmGrid.tsx`, and
  `app/about/page.tsx` for real photos before launch, and remove the
  `picsum.photos` / `fastly.picsum.photos` entries in `next.config.ts` once
  you do.
- The contact form (`components/ContactForm.tsx`) is front-end only; wire it
  up to an email service or API route before going live.

## Deploy

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
no additional configuration is required.
