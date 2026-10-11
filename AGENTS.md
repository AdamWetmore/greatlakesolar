### Overview

This repo contains the code for Great Lakes Solar's business website
The production url is https://greatlakesolar.com/
The development url is https://greatlakesolar.vercel.app/

### Git Rules

1. Always start by pulling latest from origin/main
2. New code is always in feature branches based off main
3. Code is only merged through PRs against main with manual approval by Adam

### UI Guidelines

This project uses Tailwindcss and Shadcn for quick and easy style implementation
Don't change brand colors or fonts
Every update to css or html must maintain current mobile responsiveness
Every update to css or html must maintain dark/light mode styling

### Deployment

This site is deployed using the free tier of firebase
Adam will handle all deployments manually, no git hooks or automated deployment
Do not alter "output: 'export'" in ./next.config.ts, if a requested task requires it, surface this for discussion with Adam

### Local Development Environment

The assessment dialog uses the official HubSpot embed. Configure
`NEXT_PUBLIC_HUBSPOT_PORTAL_ID` and `NEXT_PUBLIC_HUBSPOT_FORM_ID` in ignored
`.env.local` before building. Never commit their values. Production builds reject
missing or malformed IDs; these NEXT_PUBLIC values are embedded in the browser bundle.
Manage questions, validation, field styling, and the inline thank-you message in HubSpot.
Keep the form's completion action set to an inline thank-you message rather than a redirect.
Ensure greatlakesolar.com and any preview domains used for submission testing are in
HubSpot's allowed tracking domains. Test a real submission after deployment and confirm receipt.

### Next Work Items

Keep this section updated as progress and planning continue

In no particular order

- Implemented on `chore/hubspot-embed`: replace the custom assessment form with the
  HubSpot embed inside the existing dialog, with loading/retry feedback and a manual
  fallback link. Before release, verify mobile/dark-mode presentation and confirm a
  real submission arrives in HubSpot (including the new referral question).

1. Merged in PR #8: page-specific titles and descriptions targeting commercial rooftop solar in Minnesota and the Twin Cities, canonical URLs, and a public sitemap. Google ignores meta keywords, so no keywords tag is used. Keep public/sitemap.xml in sync with indexable routes in src/pages/_app.tsx; projects remains noindex until its placeholder content is replaced.
2. Merged in PR #9 (Adam reviewed the preview deployment): replace legacy layout/objectFit props on home, about, and resources hero images with fill and sizes="100vw"; retain existing object-cover styling and responsive containers.
3. Implemented on logo-typography (PR #10 pending review): uppercase header wordmark; experimenting at Adam's request with G/L/S at 1rem (16px default) and remaining letters at 0.875rem (14px default). Preserve the existing font, colors, responsive navigation, and accessible home-link label.
4. Move "The GLS Difference" section to the hero section with the hero card, update styling to cohere with the background change
5. Update sitewide UI so that the main marketing funnel, the hubspot form, is visible on all pages at all scroll heights
   Do this either by

- adding a cta to the site header
  or
- adding an absolutely positioned button in a corner or at the bottom anytime the user isn't viewing the main hero section which already has a cta
  but not both

6. Implemented locally on `feat/residential-services`: Jacob's residential feedback,
   a dedicated `/residential` page, and Commercial at the existing `/resources` URL
   with benefits before the process. Reuses the blog worktree's Shadcn dropdown
   primitive and Resources menu structure. When merging with `blog-itc-faq`, retain
   Commercial, Residential, and Blog menu entries and both branches' metadata/sitemap
   additions. See `docs/residential-review.md` for feedback validation and review notes.
