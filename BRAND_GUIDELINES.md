# Creative Realm Designs — Brand & Logo Guidelines

> Compact production guide for the Creative Realm visual identity system.

---

## 1. The Logo & Core Idea

- **Idea**: A monolithic geometric "C" frame anchors an engineered "R" stepping forward at an exact 60° architectural angle. Represents the convergence of sovereign digital space ("Realm") and bespoke engineering craft ("Creation").
- **Versions**:
  - **Primary Horizontal Lockup**: Used in headers, navigation bars, and marketing collateral.
  - **Inverted Horizontal Lockup**: Crisp white symbol and wordmark with coral accent for dark surfaces (`#17171c`, `#071829`, `#003c33`).
  - **Standalone Symbol**: For avatars, favicons, app icons, and social stamps.
  - **One-Colour Monochrome**: Solid black (`#000000`) and pure white (`#ffffff`) for single-color print, laser etching, and embroidery.
- **Master Files**:
  - Vector masters: `public/brand/*.svg`
  - Web & App icons: `public/*.ico`, `public/*.png`, `public/site.webmanifest`
  - React Component: `components/BrandLogo.tsx`

---

## 2. Clear Space & Proportions

- **Clear Zone**: Maintain a clear safety perimeter of **1 × $X$** around all sides of the logo, where **$X$** equals the stroke width of the symbol's primary stem (approx. 1/7 of the mark height).
- Never allow other typographic elements, icons, or container borders to invade this clear zone.

---

## 3. Minimum Sizing

| Format | Digital Screens | Print Applications |
| :--- | :--- | :--- |
| **Horizontal Lockup** | 120 px width (min. 28 px height) | 32 mm width |
| **Standalone Symbol** | 16 px × 16 px (pixel-tuned favicon) | 6 mm × 6 mm |
| **App Icon / Tile** | 48 px × 48 px | 12 mm × 12 mm |

---

## 4. Official Brand Palette

| Role | Name | HEX | RGB | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Charcoal** | Near-Black | `#17171c` | `23, 23, 28` | Primary logo symbol, dark UI cards, main headings |
| **Accent Spark** | Coral | `#ff7759` | `255, 119, 89` | "REALM" accent, active tags, high-impact CTAs |
| **Canvas** | White | `#ffffff` | `255, 255, 255` | Light page background, reversed logo elements |
| **Deep Green** | Enterprise Green | `#003c33` | `0, 60, 51` | Product command bands, dark mode hero sections |
| **Dark Navy** | Financial Navy | `#071829` | `7, 24, 41` | Solution bands, high-contrast security surfaces |
| **Neutral Surface** | Soft Stone | `#eeece7` | `238, 236, 231` | Warm neutral card backdrops, chip backgrounds |

### Approved Pairings:
- **Full Colour on White**: Charcoal `#17171c` symbol + "CREATIVE" `#17171c` + "REALM" `#ff7759`.
- **Inverted on Charcoal/Dark**: White `#ffffff` symbol + "CREATIVE" `#ffffff` + "REALM" `#ff7759`.
- **Monochrome Solid Black**: Black `#000000` on white paper or light gray surfaces.
- **Monochrome Solid White**: White `#ffffff` on photography, tinted video posters, or dark panels.

---

## 5. Typography

- **Display & Headings**: Space Grotesk / CreativeRealmText (tight tracking: -0.02em to -0.04em).
- **Body & Interface**: Inter / Unica77 (neutral, highly legible).
- **Technical & Metadata**: Space Mono (monospaced labels, badges, and timestamps).

---

## 6. Usage Rules (Don'ts)

- ❌ **Do not stretch, squash, or distort** the aspect ratio of the symbol or lockup.
- ❌ **Do not alter the 60° angle** of the "R" diagonal leg.
- ❌ **Do not change the relative scale** between the symbol and the wordmark text.
- ❌ **Do not recolor** outside the approved brand palette (no unapproved neon or generic blues).
- ❌ **Do not add drop shadows, outer glows, gradients, or 3D bevels** directly to the vector mark.
- ❌ **Do not place the dark logo on low-contrast backgrounds**; always switch to the inverted white version when the surface luminance falls below 40%.
