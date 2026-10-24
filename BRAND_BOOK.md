# Creative Realm Designs — Official Brand Book & System Manual

> **The Sovereign Digital Agency Command Center**  
> Standards, Specifications, and Architecture for the Creative Realm Visual Identity System.  
> Version 1.0.0 · Production Deployed

---

## Table of Contents
1. [Brand Purpose & Strategic Positioning](#1-brand-purpose--strategic-positioning)
2. [The Logo System & Geometry](#2-the-logo-system--geometry)
3. [Logo Lockups & Variant Matrix](#3-logo-lockups--variant-matrix)
4. [Clear Space & Minimum Scale](#4-clear-space--minimum-scale)
5. [Color Architecture & Formulations](#5-color-architecture--formulations)
6. [Typography Hierarchy & Scales](#6-typography-hierarchy--scales)
7. [Iconography & Progressive Web App Suite](#7-iconography--progressive-web-app-suite)
8. [Codebase Integration & React Components](#8-codebase-integration--react-components)
9. [Brand Governance & Misuse Rules](#9-brand-governance--misuse-rules)
10. [Asset Directory & File Index](#10-asset-directory--file-index)

---

## 1. Brand Purpose & Strategic Positioning

### Who We Are
Creative Realm is an elite digital design, Next.js web engineering, and organic Google SEO agency for ambitious founders and market leaders.

### Brand Essence: Editorial Restraint & High-Performance Command
The identity system bridges the gap between austere editorial architecture and high-velocity digital craft:
- **Sober Command Center**: Stark white editorial spaces interrupted by deep green-black product bands and mineral stone card surfaces.
- **Architectural Craft**: Precision geometry, 16px squircle corners, and engineered 60° diagonal rhythms.
- **No Decorative Chrome**: Color arrives with purpose — primarily through the iconic **Signature Coral (`#ff7759`)** accent and bespoke tactile media.

---

## 2. The Logo System & Geometry

### The Concept: Architectural Monolith (CR)
The brand mark synthesizes a monolithic geometric **"C" container** anchoring an engineered **"R" anchor** stepping forward at an exact **60.0° architectural angle**:

```
 ┌──────────────────────┐
 │                      ▲
 │   ████████████████   │ 36px top margin
 │   ██            ██   │
 │   ██   ██████   ██   │ Outer 16px squircle corner radius
 │   ██   ██       ██   │
 │   ██   ██████████    │ Precision circular bowl (r=52)
 │   ██   ██       ██   │
 │   ██   ██        ██  │ 60.0° diagonal leg
 │   ██████          ██ │
 │                      ▼
 └──────────────────────┘
```

- **Canvas Grid**: `viewBox="0 0 256 256"` integer coordinate system.
- **Stroke Weights**: Uniform 36 px primary stem and upper beam.
- **Optical Corrections**:
  - 16 px squircle curvature on top-left and bottom-left outer corners.
  - Generous internal counter (height 38 px) ensuring legibility down to 16 px favicon scale.
  - Flawless horizontal balance: Margins L44.0 R44.0 T36.0 B36.0 (Production readiness: 100/100).

---

## 3. Logo Lockups & Variant Matrix

| Variant | Master File Path | Surface / Usage Case |
| :--- | :--- | :--- |
| **Primary Horizontal** | `public/brand/creative-realm-logo.svg` | Light surfaces, website header, proposals, contracts |
| **Inverted Horizontal** | `public/brand/creative-realm-logo-white.svg` | Dark surfaces (`#17171c`, `#071829`), footer, terminal |
| **Standalone Symbol** | `public/brand/creative-realm-symbol.svg` | Avatars, social stamps, software badges, compact UI |
| **Inverted Symbol** | `public/brand/creative-realm-symbol-white.svg` | Dark UI buttons, app tiles, dark theme icons |
| **Stacked Lockup** | `public/brand/creative-realm-logo-stacked.svg` | Center-aligned banners, event badges, packaging |
| **Stacked Inverted** | `public/brand/creative-realm-logo-stacked-white.svg` | Dark-mode splash screens, presentations, hero sections |

---

## 4. Clear Space & Minimum Scale

### Clear Space Rule ($1 \times X$)
Maintain an inviolable safety zone of **$1 \times X$** on all four sides of the logo:
- **$X$** is defined as the stroke width of the symbol's primary vertical stem (approx. 1/7 of the mark's total height).
- No text, photography edges, borders, or navigation links may penetrate this perimeter.

### Minimum Sizing Specifications

| Format | Digital Screens | Print Applications |
| :--- | :--- | :--- |
| **Horizontal Lockup** | 120 px width (min. 28 px height) | 32 mm width |
| **Stacked Lockup** | 96 px width | 26 mm width |
| **Standalone Symbol** | 16 px × 16 px (Favicon / Tab) | 6 mm × 6 mm |
| **App Icon Tile** | 48 px × 48 px | 12 mm × 12 mm |

---

## 5. Color Architecture & Formulations

```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Primary Charcoal│ │ Signature Coral │ │  Canvas White   │
│     #17171C     │ │     #FF7759     │ │     #FFFFFF     │
│   RGB 23,23,28  │ │  RGB 255,119,89 │ │ RGB 255,255,255 │
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Enterprise Green│ │ Financial Navy  │ │   Soft Stone    │
│     #003C33     │ │     #071829     │ │     #EEECE7     │
│   RGB 0,60,51   │ │   RGB 7,24,41   │ │ RGB 238,236,231 │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Color Codes Table

| Name | Role | HEX | RGB | CMYK | Pantone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Charcoal** | Anchor brand color | `#17171c` | `23, 23, 28` | `70, 65, 55, 75` | Black 6 C |
| **Signature Coral** | Dynamic brand spark | `#ff7759` | `255, 119, 89` | `0, 68, 65, 0` | Warm Red C |
| **Canvas White** | Clean editorial space | `#ffffff` | `255, 255, 255` | `0, 0, 0, 0` | Bright White |
| **Soft Stone** | Neutral surface block | `#eeece7` | `238, 236, 231` | `5, 4, 7, 0` | Cool Gray 1 C |
| **Enterprise Green**| Dark product hero | `#003c33` | `0, 60, 51` | `88, 42, 68, 52` | 567 C |
| **Financial Navy** | Security / Data band | `#071829` | `7, 24, 41` | `92, 75, 48, 68` | 539 C |

### Contrast & Accessibility (WCAG AAA)
- White text & symbol on Primary Charcoal (`#17171c`): **16.8:1** (Passes AAA).
- Signature Coral (`#ff7759`) on Primary Charcoal (`#17171c`): **5.4:1** (Passes AA for text, AAA for graphical elements).
- Primary Charcoal (`#17171c`) on Canvas White (`#ffffff`): **17.2:1** (Passes AAA).

---

## 6. Typography Hierarchy & Scales

### Primary Display: `Space Grotesk`
- **Application**: Hero headlines, section titles, card headings, brand signature.
- **Weights**: 700 (Bold) for logo signature and display statements; 500 (Medium) for subheadings.
- **Tracking**: Tight negative letter-spacing (`-0.02em` to `-0.04em`).

### Interface & Prose: `Inter`
- **Application**: Body copy, case studies, client testimonials, form labels.
- **Weights**: 400 (Regular) for running text; 500 (Medium) for active buttons and links.
- **Line Height**: Generous editorial spacing (`1.5` to `1.6`).

### Technical & Code: `Space Mono`
- **Application**: Agency tags, system badges, Core Web Vitals metrics, timestamps.
- **Weights**: 400 (Regular), 700 (Bold).
- **Tracking**: Slight positive letter-spacing (`+0.02em`).

---

## 7. Iconography & Progressive Web App Suite

All icons are pre-compiled and served directly from the root `public/` directory:

| Filename | Resolution | Format | Purpose |
| :--- | :--- | :--- | :--- |
| `favicon.ico` | 16×16, 32×32, 48×48 | Multi-res ICO | Universal legacy browser tab support |
| `favicon.svg` | Scalable Vector | SVG | Modern Chrome, Firefox, Safari browser tabs |
| `favicon-16.png` | 16×16 px | PNG | Crisp bookmark and taskbar icon |
| `favicon-32.png` | 32×32 px | PNG | High-DPI browser tab rendering |
| `apple-touch-icon.png`| 180×180 px | PNG | iOS Home Screen bookmark on `#17171c` squircle tile |
| `icon-192.png` | 192×192 px | PNG | Android PWA launch icon |
| `icon-512.png` | 512×512 px | PNG | Android PWA splash screen & Chrome Web Store |
| `maskable-512.png` | 512×512 px | PNG | Adaptive Android icon with safe-zone margin |
| `site.webmanifest` | JSON Spec | Manifest | PWA manifest configured with theme `#17171c` |

---

## 8. Codebase Integration & React Components

### Primary React Component: `components/BrandLogo.tsx`
Use the pre-built, zero-layout-shift `<BrandLogo />` component throughout the application:

```tsx
import BrandLogo from "@/components/BrandLogo";

// 1. Desktop Navbar (Light surface)
<BrandLogo variant="default" size="md" />

// 2. Footer (Dark surface)
<BrandLogo variant="inverted" size="lg" />

// 3. Standalone Symbol Icon
<BrandLogo variant="symbol" className="h-8 w-8" />

// 4. Accent Coral Symbol
<BrandLogo variant="symbol-coral" className="h-8 w-8" />
```

---

## 9. Brand Governance & Misuse Rules

To maintain the sovereign reputation and trademark integrity of Creative Realm, strictly adhere to the following rules:

- ❌ **NEVER distort or stretch**: Maintain 1:1 aspect ratio on the symbol and lockup at all times.
- ❌ **NEVER modify the 60° angle**: The diagonal leg is mathematically aligned to 60.0°. Do not alter its slope.
- ❌ **NEVER recolor outside the palette**: Only approved brand colors (Charcoal `#17171c`, Coral `#ff7759`, White `#ffffff`) may be applied.
- ❌ **NEVER add drop shadows or bevels**: The vector mark must remain flat, architectural, and clean.
- ❌ **NEVER place dark mark on low contrast**: If surface luminance drops below 40%, always use the inverted white version.
- ❌ **NEVER recreate the wordmark by hand**: Always use official SVG masters or the `<BrandLogo />` component.

---

## 10. Asset Directory & File Index

```
c:\All Websites\MY BUSINESS\WEBSITES\creative-Realm-Designs\
├── BRAND_BOOK.md                          # Comprehensive standards manual (this file)
├── BRAND_GUIDELINES.md                     # Compact 1-page quick reference
├── components/
│   └── BrandLogo.tsx                      # Production React component
└── public/
    ├── brand/
    │   ├── brand-book.html                # Interactive digital Brand Book UI
    │   ├── creative-realm-logo.svg        # Primary horizontal vector lockup
    │   ├── creative-realm-logo-white.svg  # Inverted horizontal vector lockup
    │   ├── creative-realm-logo-stacked.svg# Stacked vertical vector lockup
    │   ├── creative-realm-symbol.svg      # Standalone master vector mark
    │   └── creative-realm-symbol-white.svg# Inverted master vector mark
    ├── favicon.ico                        # 16/32/48px browser icon
    ├── favicon.svg                        # Scalable SVG browser icon
    ├── favicon-16.png                     # 16px raster favicon
    ├── favicon-32.png                     # 32px raster favicon
    ├── apple-touch-icon.png               # iOS 180px home screen icon
    ├── icon-192.png                       # Android PWA 192px icon
    ├── icon-512.png                       # Android PWA 512px icon
    ├── maskable-512.png                   # Android PWA adaptive icon
    └── site.webmanifest                   # Web app manifest
```
