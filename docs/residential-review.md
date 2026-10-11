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
## Copy scope

Validation covered whether the reported site issues still existed on current main.
Jacob's supplied residential copy is retained, including the savings, battery,
payback, and climate-change wording. Resources now presents one shared process,
Commercial Solar, battery benefits, Residential Solar and its four reasons,
consolidated FAQs, and one contact card, in that order. Shared process wording
covers homes and businesses. The shared outage answer uses "our clients".
Eight shared FAQs appear under General; eleven commercial and three residential
answers appear in their respective dropdowns. Audience-specific payback, battery
runtime, and battery brand answers are retained.

## Release review

Adam retains manual PR approval and deployment. Review mobile and dark/light
presentation in a browser and confirm a real HubSpot submission after deployment.

