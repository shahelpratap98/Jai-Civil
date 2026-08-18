# Jai Civil

Marketing + SEO site for **Jai Civil Limited** (NZ Co. 8175655), a Papakura based civil,
earthworks and building contractor serving greater Auckland.

React + TypeScript + Vite + Tailwind v3 + React Router 7. Black/white "liquid glass"
design system, Inter font, full-viewport hero video with no overlay.

## Build

```bash
npm install
npm run dev      # dev server (SPA only, no prerender)
npm run build    # client build -> SSR build -> prerender to real static HTML
```

`npm run build` writes **one real static HTML file per route** (home, services index,
7 service pages, projects, contact = 11 pages) plus `sitemap.xml` and `robots.txt` into
`dist/`. This is the whole point of the setup: each service page exists as crawlable
HTML for SEO. Do not simplify it back to a plain SPA build.

`src/data/services.ts` is the single source of truth. Nav, index cards, service pages,
sitemap and JSON-LD all derive from it. Add or edit services there, then rebuild.

## Contact form

The form posts straight to Web3Forms from the browser (`src/lib/sendEnquiry.ts`);
there is no serverless function. Resend was the original plan but it will only send
from a verified domain, and there is no domain yet, so its fallback sender only
reaches the Resend account owner rather than the client's inbox.

Set `WEB3FORMS_ACCESS_KEY` in `src/lib/sendEnquiry.ts`. The key is a public,
write-only submission token tied to one inbox, not a secret, which is why it can sit
in client-side code. Enquiries go to jaicivilltd@gmail.com.

Once jaicivil.co.nz is registered and verified in Resend, swap back: only
`sendEnquiry()` needs to change.

WhatsApp click-to-chat uses +64 21 215 4714 (from the company's public listing).

## Launch TODOs (placeholders to swap)

- [ ] **Domain**: `https://jaicivil.co.nz` is a placeholder in `src/siteConfig.ts` and
      `scripts/prerender.mjs`. Set the real domain in both.
- [ ] **Email**: contact form env vars are unset. In Vercel, set `RESEND_API_KEY`,
      `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Until then the form returns a friendly
      error pointing at WhatsApp/phone.
- [ ] **Hero video**: currently a reused Higgsfield clip (CloudFront URL in
      `src/pages/Home.tsx`). Replace with the Jai Civil specific seamless loop once
      generated (Seedance 2.0, start+end same-frame loop trick).
- [ ] **og-image**: no `public/og-image.jpg` yet, so og:image/twitter tags are
      deliberately omitted in `scripts/prerender.mjs`. Add a real 1200x630 image and
      re-enable the tags.
- [ ] **Project photos**: `/projects` describes typical work honestly with no photos.
      Add a gallery when real job photos are supplied.

## Facts sources

Company number, address (43 Wellfield Drive, Papakura 2110) and director from the NZ
Companies Register. Services and coverage areas from the company's own Builderscrack
profile. Phone from its Chamber of Commerce listing. No invented stats, reviews or
certifications anywhere in the copy.
