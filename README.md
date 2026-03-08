# Ahmed Portfolio (Next.js + Vercel)

A modern portfolio website built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit portfolio content

All portfolio data is centralized in:

- `src/data/portfolio.ts`

Update profile details, links, project cards, and skill sections there.

## SEO and routing

- Global metadata: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Web manifest: `src/app/manifest.ts`

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel to your production URL (for canonical and sitemap URLs).
4. Deploy.

## Available scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - start production server
- `npm run lint` - run ESLint
