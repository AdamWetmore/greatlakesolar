# Instagram glyph

`public/Instagram_Glyph.svg` is the unmodified `Instagram_Glyph_White.svg`
from Meta's `IG_brand_asset_pack_2023.zip`, downloaded November 10, 2026
from the logo-pack link on the current official brand page:
https://www.meta.com/brand/resources/instagram/instagram-brand/

The shared `InstagramIcon` uses this SVG as a CSS mask with `currentColor`.
The footer uses `text-foreground` (navy on light backgrounds, light on navy).
The contact card uses `text-primary` because its icon tile stays light in both
themes. Dimensions remain 32px in the footer and 40px in the contact card.
Accessible names are supplied by the containing links/text.

Monochrome recoloring guidance is documented at
https://buffer.com/resources/social-media-logos/.
Meta's detailed Brand Elements page required login when checked; the official
pack contains white, black, and gradient glyphs. Only presentation color is
changed by CSS; the supplied SVG geometry is preserved.
