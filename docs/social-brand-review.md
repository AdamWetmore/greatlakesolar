# Footer social logo review

Reviewed November 16, 2026. Scope: the footer's LinkedIn, Facebook, and Instagram
profile links, plus the shared Instagram glyph used by the contact card.

## Official guidance and asset provenance

- [LinkedIn's standalone in logo](https://brand.linkedin.com/in-logo) explicitly
  allows profile/company hyperlinks and social icon lists. Use its supplied blue,
  black, or white variants without changing their shape or color. The existing
  `LI-In-Bug.png` and `InBug-White.png` are byte-identical to files in the current
  [official download pack](https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/logos/in-logo.zip).
  The registration marks are retained. The 32px height also exceeds the 21px
  in-mark minimum stated in [LinkedIn's logo guidance](https://brand.linkedin.com/linkedin-logo).
- [Facebook's logo guidance](https://www.meta.com/brand/resources/facebook/logo/)
  specifies the supplied blue/white-f primary and white/transparent-f secondary
  marks, a 16px digital minimum, and quarter-width clear space; its examples also
  request half-logo separation from other content. Both existing PNGs are
  byte-identical to the current official pack downloaded through that page.
  The footer uses the primary on white and secondary on navy, at 32px with 16px
  padding on every side. No recoloring or modification of the f is performed.
- [Instagram's official guidance](https://www.meta.com/brand/resources/instagram/instagram-brand/)
  requires official assets and prohibits implying endorsement or making Instagram
  the dominant brand. The footer links directly to GLS's profile. Black and white
  glyphs from the current official pack are displayed without modification;
  [asset details](instagram-asset.md) record provenance. The glyph is 32px square
  with 16px padding, leaving 32px between neighboring artwork bounds.

Instagram's linked detailed [Brand Elements page](https://www.facebook.com/brand/resources/instagram/icons)
redirected to login. Its full current spacing/minimum-size rules could not be
independently verified. The implementation conservatively uses supplied assets,
32px sizing, and half-width clear space; this review does not claim Meta approval
or certify compliance with inaccessible terms.

## Implementation and validation

Footer links use flex centering, 32px artwork heights, intrinsic aspect ratios,
and 16px padding. Removing the inline Instagram baseline fixes its upward offset.
LinkedIn keeps its wider canvas and registration mark instead of being stretched
into a square. System media queries select white assets on navy; `.dark` is not
required. The shared Instagram component defaults to black on the light contact
tile. These external brand colors do not change GLS's theme tokens or fonts.

The footer stays stacked through tablet widths to avoid squeezing the GLS logo
and contact information. Existing Link navigation is retained; no new custom
button or card styling is introduced. Links have accessible names and focus rings.

Validation: production static export; headless Edge at 375px, 768px, and 1440px
in both system light and dark modes. Check 32px icon heights, equal vertical
centers, correct theme assets, no horizontal overflow, and footer screenshots.
Adam's preview review and manual merge/deployment remain required.
