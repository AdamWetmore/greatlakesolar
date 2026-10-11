# Residential feedback review

Reviewed against origin/main on October 10, 2026 in `feat/residential-services`.
The initial pull reported already up to date.

- LinkedIn's `/company/` URL was already correct on main; retained it.
- Corrected the Facebook display label without guessing a different profile URL.
- Applied the homepage and About edits, including homeowners, four-column desktop
  audience cards, and the requested sentence removals. Interpreted “remove the first
  paragraph of the second paragraph” as removing the first sentence of that paragraph.
- Preserved the replacement headshot already present in this worktree and updated
  its intrinsic dimensions. Original replacement is about 12 MB; image optimization
  would improve delivery because this site exports unoptimized images.
- Combined Commercial and Residential on `/resources`, with `#commercial` and
  `#residential` navigation anchors and sticky-header scroll clearance. Removed the
  standalone residential route and sitemap entry; kept all supplied copy.
- Copied the blog worktree's `dropdown-menu.tsx` exactly. The menu uses the same
  structure, with Commercial and Residential entries. Blog is not linked until its
  route lands. Combining the branches still requires retaining all three entries;
  sharing the primitive does not guarantee conflict-free header/metadata merges.
## Current content structure

At Adam's request, the overlapping six commercial reasons and four residential
reasons are consolidated into one shared solar-benefits section. Commercial keeps
its property and incentive considerations; Residential focuses on home sizing and
seasonal usage. Both retain navigation anchors. The process, battery benefits,
FAQs, and contact card each appear once.

FAQ dropdowns retain Basics, Battery Storage, and Financing & Incentives, plus
Commercial Solar and Residential Solar for audience-specific answers. Shared
questions appear once; distinct commercial and residential answers about payback,
battery runtime, and equipment remain separate. Existing FAQ answer copy is retained.

## Release review

Adam retains manual PR approval and deployment. Review mobile and dark/light
presentation in a browser and confirm a real HubSpot submission after deployment.

