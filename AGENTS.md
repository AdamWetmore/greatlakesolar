### Overview

This repo contains the code for Great Lakes Solar's business website
The production url is https://greatlakesolar.com/
The development url is https://greatlakesolar.vercel.app/

### Git Rules

1. Always start by pulling latest from origin/main
2. New code is always in feature branches based off main
3. Code is only merged through PRs against main with manual approval by Adam

### UI Guidelines

This project uses Shadcn UI as its component standard and Tailwind CSS for layout and styling.
Use the shared Shadcn components in `src/components/ui` before creating custom UI.
Compose page sections from these components (for example, `Card` / `CardContent`,
`Button`, and `Accordion`) and follow existing page patterns. Use Tailwind for
spacing, responsive grids, and alignment; do not invent one-off section backgrounds,
borders, shadows, or component styles when an existing Shadcn primitive fits.
If a needed component is missing, prefer adding the corresponding Shadcn primitive
using the repository's theme tokens. Custom components should compose those primitives;
explain any necessary departure from this standard in the PR.
Don't change brand colors or fonts
Every update to css or html must maintain current mobile responsiveness
Every update to css or html must maintain dark/light mode styling

#### Theme and component standards

- Use inherited foreground or `text-foreground` for headings, section introductions,
  important supporting copy, and footer links on the page background. Reserve
  `text-muted-foreground` for secondary text on surfaces where its contrast is verified.
- Dark mode currently follows `prefers-color-scheme` for the page background and
  foreground. The `.dark` class is not applied by the app; do not assume `dark:`
  utilities or the full `.dark` palette activate with system dark mode. A future
  theme unification should be a separate reviewed change, including light cards and forms.
- Reuse `Card` / `CardContent` for grouped content and process steps. Keep their
  paired `bg-card` / `text-card-foreground` colors. Avoid ad hoc translucent
  section backgrounds or decorative borders where existing cards fit.
- Use the shared `Button` for CTAs. A primary CTA directly on the navy page
  background needs the header CTA's `border border-primary-foreground/30` treatment
  so its boundary remains visible. Keep keyboard focus and hover states intact.
- Use normal foreground for noninteractive headings; reserve navigation blue for
  interactive emphasis. Photo captions can follow the blog's `text-sm opacity-70`
  treatment, inheriting the surrounding foreground.
- For UI changes, check both system light and dark mode at phone, tablet, and
  desktop widths. Inspect text against its actual surface, including captions,
  footer links, card copy, CTA boundaries, and HubSpot's intentionally light forms.

### Deployment

This site is deployed using the free tier of firebase
Adam will handle all deployments manually, no git hooks or automated deployment
Do not alter "output: 'export'" in ./next.config.ts, if a requested task requires it, surface this for discussion with Adam

### Local Development Environment

The assessment dialog and the /newsletter page use the official HubSpot embed
(shared `src/components/forms/hubspot-embed.tsx`). Configure
`NEXT_PUBLIC_HUBSPOT_PORTAL_ID`, `NEXT_PUBLIC_HUBSPOT_FORM_ID` (assessment), and
`NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID` (newsletter signup), and
`NEXT_PUBLIC_HUBSPOT_REFER_FORM_ID` (referrals) in ignored
`.env.local` before building. Never commit their values. Production builds reject
missing or malformed IDs; these NEXT_PUBLIC values are embedded in the browser bundle.
Manage questions, validation, field styling, and the inline thank-you message in HubSpot.
Keep the form's completion action set to an inline thank-you message rather than a redirect.
Ensure greatlakesolar.com and any preview domains used for submission testing are in
HubSpot's allowed tracking domains. Test a real submission after deployment and confirm receipt.

### Next Work Items

Keep this section updated as progress and planning continue

In no particular order

- `fix/footer-social-brand-alignment`: center footer social artwork at 32px,
  preserve logo proportions/registration marks, add clear space and explicit
  system-theme assets, and keep the footer stacked through tablet widths.
  Instagram uses official black/white glyph files rather than a custom tint.
  Official sources and Instagram's login-gated verification limit are recorded
  in `docs/social-brand-review.md`. Pending Adam's preview and PR review.

- `fix/dark-mode-referral-styles`: restore readable homepage introduction and footer
  text, align referral heading/details/caption and CTA with existing styles, and use
  shared cards for referral steps. Reinforce theme/component standards above.
  Pending Adam's preview and PR review before deployment.

- PR #23 (`feat/nghia-profile-blog`): reuse the Loon Award shop portrait,
  Camden aerial, and ceremony image in the Nghia profile. Removed the three
  redundant assets, reducing the static export by 1,128,929 bytes (1.13 MB).
  Image dimensions and hero sharing metadata match the reused files.
  Pending Adam's preview review.

- PR #20 (`feat/social-posts`): replaced the rainbow Instagram drawing with
  Meta's official monochrome glyph and a shared CSS-mask component. Footer
  color follows the theme foreground; the contact-card glyph stays navy on
  its light tile. Asset provenance is in `docs/instagram-asset.md`.
  Pending Adam's preview review.

- PR #22: referral contact card now uses theme colors. Referral form and portal
  IDs come only from environment configuration; production builds require a valid
  `NEXT_PUBLIC_HUBSPOT_REFER_FORM_ID`. The referral form uses HubSpot's older
  v2.js embed; assessment/newsletter use the shared newer frame embed.
  Configure the referral ID in local and preview build environments before release.
  Rebased onto main to include Instagram. The shared contact card links to
  /refer with Lucide's Gift icon on Home, Resources, and Contact.

- PR #18 (`fix/hero-cta`): Jacob approved matching the header and default
  assessment CTA wording to "Request a free estimate". Both open the existing
  HubSpot assessment dialog. Pending Adam's PR review.

- Implemented on `feat/lead-funnel` (includes PRs #15 and #16): HubSpot tracking code
  site-wide (`src/components/hubspot-tracking.tsx`, reuses `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`,
  reports client-side route changes), tap-to-call phone in the header (icon only below md
  and from lg to xl so the nav never wraps), assessment form embedded on /contact,
  LocalBusiness JSON-LD on / and /contact, phone/email constants in `src/lib/contact.ts`,
  optional `link` on FAQ entries, and copy/SEO fixes (ITC FAQ, new residential tax credit
  FAQ, net metering 40 kW, install timing, licensed installation partners, About page
  wording, /contact title). After deploy: confirm the tracking script loads on
  greatlakesolar.com and page views show in HubSpot. Separate from code: www.greatlakesolar.com
  points at ghs.googlehosted.com and fails (http 404, no https certificate); add www as a
  Firebase custom domain or redirect it to the apex domain.

- Implemented on `chore/hubspot-embed`: replace the custom assessment form with the
  HubSpot embed inside the existing dialog, with loading/retry feedback and a manual
  fallback link. Before release, verify mobile/dark-mode presentation and confirm a
  real submission arrives in HubSpot (including the new referral question).

1. Merged in PR #8: page-specific titles and descriptions targeting commercial rooftop solar in Minnesota and the Twin Cities, canonical URLs, and a public sitemap. Google ignores meta keywords, so no keywords tag is used. Keep public/sitemap.xml in sync with indexable routes in src/pages/_app.tsx; projects remains noindex until its placeholder content is replaced.
2. Merged in PR #9 (Adam reviewed the preview deployment): replace legacy layout/objectFit props on home, about, and resources hero images with fill and sizes="100vw"; retain existing object-cover styling and responsive containers.
3. Implemented on logo-typography (PR #10 pending review): uppercase header wordmark; experimenting at Adam's request with G/L/S at 1rem (16px default) and remaining letters at 0.875rem (14px default). Preserve the existing font, colors, responsive navigation, and accessible home-link label.
4. Move "The GLS Difference" section to the hero section with the hero card, update styling to cohere with the background change
5. Implemented on `feat/header-assessment-cta`: the sticky header includes a
   Free Assessment button opening the existing HubSpot dialog on every page.
   The button stays outside the mobile menu, spans a second row on narrow phones,
   and sits inline from the small breakpoint. Desktop navigation starts at the
   large breakpoint to leave room for the CTA. Uses existing brand/theme colors;
   no floating CTA. Pending Adam's PR review and post-deployment submission check.

6. Merged in PR #14 (`feat/residential-services`): Jacob's residential feedback,
   anchored Residential and Commercial sections at `/resources#residential` and
   `/resources#commercial`
   with one shared process and solar-benefits section, anchored commercial and
   residential content, one battery-benefits section, consolidated FAQs, and one
   contact card. FAQ categories are Basics, Battery Storage, Financing & Incentives,
   Commercial Solar, and Residential Solar. Reuses the blog worktree's Shadcn dropdown
   primitive and Resources menu structure. The rebased `blog-itc-faq` retains
   Commercial, Residential, and Blog menu entries and the blog metadata/sitemap
   additions. See `docs/residential-review.md` for feedback validation and review notes.

7. PR #13 (`blog-itc-faq`) rebased onto latest main: Resources uses the Shadcn
   dropdown with All, Blog, Commercial, and Residential links on desktop and mobile.
   From the Blog appears immediately after the process section, before Why Go Solar.
   Articles use `/resources/blog/[slug]` with build-time paths and `fallback: false`;
   blog index and article URLs remain indexable and included in the sitemap. For new
   posts, add metadata, register the article component, and update the sitemap.
   Sharing metadata fix on `fix/blog-sharing-metadata`: shared and page-specific
   Open Graph tags use matching keys so article values replace site defaults.
   Preserve those keys when adding or overriding sharing metadata.
   Jacob approved replacing the equipment-sourcing citation with IRS Notice
   2026-15 and retaining the existing 30% credit wording.
   BlogPostCard now composes the shared Card/CardContent primitives for consistent
   card colors, spacing, borders, and shadow, with a full-card keyboard-focusable link.
