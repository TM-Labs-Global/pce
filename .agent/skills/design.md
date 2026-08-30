# PCE Design System

*Adapted from an Apple web design reference. Structural grammar (spacing, elevation, typography rhythm) carries over; color roles, hero strategy, and card usage are re-weighted for a petroleum-company site whose job is credibility, scale, and project/service showcasing rather than product desirability.*

## Overview

PCE's web presence borrows Apple's discipline — restrained shadows, one accent color per job, alternating light/dark section rhythm — but shifts the center of gravity from **product photography** to **project and service credibility**. Where Apple stacks single-product hero tiles, PCE leans on a utility-card grid (services, project case studies, facilities) as the default building block, reserving full-bleed photographic hero tiles for the homepage and featured-project moments.

Two brand colors are in play instead of Apple's one: **orange (#f4691a)** carries primary actions, **blue (#1470AD)** carries secondary actions and the traditional "link/accent" role Apple gave its single blue. Dark sections are built off a navy neutral (#001723) rather than a generic near-black, so PCE's dark bands read as brand, not default dark-mode.

**Key Characteristics:**
- Card-first presentation for services and projects; full-bleed photographic tiles reserved for hero/featured moments only.
- Alternating full-bleed section rhythm: white/tertiary-tint ↔ navy-dark, with the color change acting as the section divider.
- Two-color action system: orange (#f4691a) for primary buttons, blue (#1470AD) for secondary buttons, links, and focus rings.
- Orange used sparingly outside buttons — status badges, stat highlights, active-state indicators — never as a large decorative fill.
- Whisper-soft elevation used only when a photograph needs to breathe — exactly one drop-shadow in the entire system.
- Tight two-row nav: slim global nav + section-specific sub-nav with persistent right-aligned primary CTA.
- Dark tiles carry a navy identity (#001723-derived) rather than neutral grey-black, reinforcing brand even where no blue text or buttons appear.

## Colors

### Brand & Accent
- **Primary Action Blue** (`{colors.primary}` — #1470AD): Secondary-button fill/outline, all text links, focus ring root, icon accents. Apple gave its single blue every interactive job; PCE splits that job between blue (link/secondary-action) and orange (primary-action).
- **Primary On Dark** (`{colors.primary-on-dark}` — #4f94c2): A lightened tint of #1470AD, used for in-copy links and inline callouts on navy tiles, where the base blue would go muddy against `#001723`.
- **Focus Blue** (`{colors.primary-focus}` — #1f7fc2): A marginally brighter sibling of Primary Blue, reserved for the keyboard focus ring on buttons (`outline: 2px solid`).
- **Action Orange** (`{colors.accent}` — #f4691a): Primary-button fill. Also the sparing accent for status badges ("Ongoing", "Completed"), stat highlights, and active nav/tab indicators. Never used as a large decorative fill or background — it stays a small, deliberate flag of attention so it doesn't compete with itself across a page.
- **Focus Orange** (`{colors.accent-focus}` — #ff7d33): Brighter sibling of Action Orange, reserved for the primary button's keyboard focus ring.

### Surface
- **Pure White** (`{colors.canvas}` — #ffffff): The dominant canvas — content, service cards, project grid, forms.
- **Tertiary Tint** (`{colors.canvas-tint}` — #d8e7f1): Replaces Apple's neutral parchment as the alternating light-tile surface. Because this tint carries the brand blue rather than being neutral, every light/dark alternation on the page reinforces PCE's palette, even in sections with no blue text or buttons.
- **Pearl Button** (`{colors.surface-pearl}` — #fafbfc): Near-white fill for secondary "ghost" surfaces sitting on `{colors.canvas-tint}`, kept light enough to still read as a distinct button.
- **Navy Tile 1** (`{colors.surface-tile-1}` — #001723): The primary dark-tile surface — replaces Apple's neutral near-black with PCE's brand navy.
- **Navy Tile 2** (`{colors.surface-tile-2}` — #032032): A micro-step lighter, used where a dark tile sits directly above or below Tile 1 for faint separation.
- **Navy Tile 3** (`{colors.surface-tile-3}` — #00121c): A micro-step darker, used at the bottom of a dark stack and in embedded video/media frames.
- **Pure Black** (`{colors.surface-black}` — #000000): Reserved for true void — video player backgrounds, the global nav bar background.
- **Translucent Chip Navy** (`{colors.surface-chip-translucent}` — #001723 at ~64% alpha): Base for the translucent chip used over photography for circular control buttons, applied as `rgba(0, 23, 35, 0.64)`.

### Text
- **Ink** (`{colors.ink}` — #171717): Headlines and body copy on light surfaces. Kept neutral (not navy-tinted) deliberately, so long-form text stays maximally legible against `{colors.canvas-tint}` rather than competing with the surface's own blue cast.
- **Body** (`{colors.body}` — #171717): Same value as ink — one neutral tone for all text on light surfaces.
- **Body On Dark** (`{colors.body-on-dark}` — #ffffff): All text on navy tiles and the global nav bar.
- **Body Muted** (`{colors.body-muted}` — #cfd8dc): Secondary copy on navy tiles where pure white would be too loud — lightly cooled to sit comfortably against the navy rather than reading as generic grey.
- **Ink Muted 80** (`{colors.ink-muted-80}` — #3a3a3a): Body text on the white Pearl Button surface.
- **Ink Muted 48** (`{colors.ink-muted-48}` — #7a7a7a): Disabled button text and legal fine-print.

### Hairlines & Borders
- **Divider Soft** (`{colors.divider-soft}` — #f0f0f0): The "border" tone on secondary buttons — functions as a ring shadow rather than a hard line. *Kept neutral rather than brand-tinted; flag for review if you want borders to carry blue instead.*
- **Hairline** (`{colors.hairline}` — #e0e0e0): The 1px hairline border on utility cards and chips. *Same neutral-vs-tinted note as above.*

### Brand Gradient
**No decorative gradients**, matching the Apple source. Atmosphere on hero photography (site/facility imagery) should come from the photograph itself, not a CSS overlay — this keeps the "credible, real" read rather than a glossy-consumer one.

## Typography

Structurally unchanged from the Apple reference — this is proportion and rhythm, not brand color, so it carries over directly.

### Font Family
- **Display & Body / UI**: `Montserrat, system-ui, -apple-system, sans-serif` — PCE's brand font, used across both display and body roles rather than Apple's split Display/Text pairing. Montserrat is geometric and fairly uniform across sizes, so it doesn't need the SF Pro Display/SF Pro Text size-based split — one family, weight and size alone carry the hierarchy.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 700 | 1.07 | -0.28px | Hero headline |
| `{typography.display-lg}` | 60px | 600 | 1.10 | 0 | Section/tile headlines |
| `{typography.display-md}` | 40px | 600 | 1.47 | -0.374px | Section heads |
| `{typography.lead}` | 28px | 400 | 1.14 | 0.196px | Tile subcopy |
| `{typography.lead-airy}` | 24px | 400 | 1.5 | 0 | Long-form lead paragraphs (about, sustainability pages) |
| `{typography.tagline}` | 21px | 600 | 1.19 | 0.231px | Sub-tile tagline; sub-nav category name |
| `{typography.body-strong}` | 16px | 600 | 1.24 | -0.374px | Inline strong emphasis |
| `{typography.body}` | 16px | 400 | 1.47 | -0.374px | Default paragraph |
| `{typography.dense-link}` | 16px | 400 | 2.41 | 0 | Footer link lists |
| `{typography.caption}` | 14px | 400 | 1.43 | -0.224px | Secondary captions, button text |
| `{typography.caption-strong}` | 14px | 600 | 1.29 | -0.224px | Emphasized captions |
| `{typography.button-large}` | 18px | 400 | 1.0 | 0 | Large hero CTAs |
| `{typography.button-utility}` | 14px | 400 | 1.29 | -0.224px | Utility/nav button labels |
| `{typography.fine-print}` | 12px | 400 | 1.0 | -0.12px | Fine-print, footer body |
| `{typography.micro-legal}` | 10px | 400 | 1.3 | -0.08px | Micro legal disclaimers |
| `{typography.nav-link}` | 12px | 400 | 1.0 | -0.12px | Global nav menu items |

### Principles
- Negative letter-spacing at display sizes for the tight headline cadence — unchanged from source.
- Body copy at 16px.
- Weight 300 (Light) is not used anywhere. Regular weight is the default for most. (`button-large`, `lead-airy`) — an "airy" cue, not default body weight. Montserrat's weight 300 (Light) is noticeably thinner than SF Pro's 300 — worth checking this still feels "airy" rather than "thin" at 24px/18px once seen live.
- Weight 600, not 700, for headlines; 700 sparingly on `tagline` only.
- Weight 500 deliberately absent — this was an SF Pro-specific ladder choice (300/400/600/700). Montserrat's 500 (Medium) is a genuinely distinct, well-drawn weight, not a redundant in-between step the way it can be on some fonts — so this exclusion is now an arbitrary carry-over rather than a font-driven one. Worth deciding deliberately: keep the 4-weight ladder for consistency with the source system, or open up 500 as a real option since Montserrat supports it well.

### Font Loading Note
Montserrat is a Google Font — no substitute-font fallback logic is needed the way SF Pro required one. Load via `@font-face`/Google Fonts with weights 300, 400, 600, 700 (plus 500 if the ladder question above opens it up), and keep `system-ui, -apple-system, sans-serif` only as a brief-flash fallback while the webfont loads, not as a long-term substitute.

## Layout

### Spacing System
Base unit 8px, structural layout snaps to 8/12/16/20/24.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 17px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px.
- **Card padding:** `{spacing.lg}` (24px) inside service/project cards.
- **Button padding:** 8–11px vertical, 15–22px horizontal.

### Section Padding (PCE-specific — diverges from the Apple source)
Applied via a single shared `.section` class on every standard section, using two custom properties that switch together at the mobile/desktop breakpoint — never as margin, so the section's background still spans full width and the color-change-as-divider rhythm (see Elevation & Depth) still holds.

| | Top & bottom (`--section-pad-y`) | Left & right (`--section-pad-x`) |
|---|---|---|
| **Desktop** (≥ 768px) | **100px** | **120px** |
| **Mobile** (< 768px) | 40px | 20px |

Note the desktop ratio is inverted from PCE's own past-project convention (which ran 120 vertical / 80 horizontal) — horizontal is deliberately the larger number here. This was confirmed intentional for PCE specifically, not a carry-over default.

```css
.section {
  padding: var(--section-pad-y) var(--section-pad-x);
}

:root {
  --section-pad-y: 40px; /* mobile default */
  --section-pad-x: 20px;
}

@media (min-width: 768px) {
  :root {
    --section-pad-y: 100px;
    --section-pad-x: 120px;
  }
}
```

Sections that intentionally go full-bleed (hero tiles, full-width photography) skip the `.section` class entirely rather than overriding it with `padding: 0` — see `agent-rules.md` for how that exception gets decided per section.

### Grid & Container
- **Max content width:** ~980px on text-heavy sections (about, sustainability), ~1440px on card grids (services, projects), full-bleed for hero tiles.
- **Column patterns:** 3–4 column card grid for services/projects (Apple's store-grid role, promoted to the default rather than the exception); 2-column side-by-side on occasional homepage sections; single-column centered stack on hero tiles.
- **Gutters:** 20–24px between cards in a grid.

### Whitespace Philosophy
Same "pedestal" logic as the source, redirected: instead of giving a product room to breathe, generous whitespace around a facility photo or a project card signals seriousness and scale rather than clutter. Footer remains the one deliberately dense area.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |
| Soft hairline | 1px `rgba(0, 0, 0, 0.08)` border | Service/project cards, sub-nav separator |
| Backdrop blur | `backdrop-filter: blur(20px) saturate(180%)` on Tertiary Tint 80% | Sub-nav, floating sticky bar (e.g. a project-inquiry CTA) |
| Photo shadow | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | Facility/project photography resting on a surface — the only true shadow in the system |

**Shadow philosophy unchanged:** exactly one drop-shadow, applied only to photography, never to cards/buttons/text. Elevation otherwise comes from surface-color change and backdrop-blur on sticky elements.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero tiles |
| `{rounded.xs}` | 5px | Inline chip-styled links (rare) |
| `{rounded.sm}` | 8px | Dark utility buttons (nav actions), inline card imagery |
| `{rounded.md}` | 11px | White Pearl Button capsules |
| `{rounded.lg}` | 18px | Service cards, project cards |
| `{rounded.pill}` | 9999px | Primary/secondary CTA pills, sub-nav buy/contact button, search input |
| `{rounded.full}` | 9999px / 50% | Circular control chips floating over photography |

### Photography Geometry
- **Hero imagery:** full-bleed, facility/site/project photography — 21:9 or taller on homepage, 16:9 on interior pages.
- **Project photos:** rest on a surface tile and pick up the single system shadow when treated as a "resting" object; full-bleed hero crops don't.
- **Service/project card grid:** 4:3 or 1:1 crops at `{rounded.lg}` (18px) radius, centered with 20–40px internal padding.
- No rounded imagery in hero tiles — full-bleed rectangular only.

## Components

### Top Navigation
**`global-nav`** — Persistent thin nav bar, `{colors.surface-black}` background, 44px height, `{colors.body-on-dark}` text in `{typography.nav-link}`. Right-aligned: Search, Contact/Get-a-Quote link. Collapses to hamburger at ~834px.

**`sub-nav-frosted`** — Sticks below global nav. Background `{colors.canvas-tint}` at 80% opacity with backdrop blur. Height 52px. Left: section name ("Services", "Projects", "Sustainability") in `{typography.tagline}`. Right: inline links ending in `{component.button-primary}` ("Get a Quote").

### Buttons
**`button-primary`** — Fill **`{colors.accent}`** (#f4691a), text white, `{rounded.pill}`, padding 11px × 22px. The primary action color across the site — "Get a Quote", "Contact Us", "View Project".
- Active: `transform: scale(0.95)`.
- Focus: 2px solid `{colors.accent-focus}` outline.

**`button-secondary-pill`** — Transparent fill, 1px solid **`{colors.primary}`** (#1470AD) border, text `{colors.primary}`, `{rounded.pill}`, padding 11px × 22px. Used as the second CTA alongside a primary button ("Learn more" next to "Get a Quote").

**`button-dark-utility`** — Global nav actions. Fill `{colors.ink}` (#171717), text white, `{typography.button-utility}`, `{rounded.sm}`, padding 8px × 15px.

**`button-pearl-capsule`** — Card secondary action. Fill `{colors.surface-pearl}`, text `{colors.ink-muted-80}`, 3px solid `{colors.divider-soft}` border, `{rounded.md}`, padding 8px × 14px.

**`button-icon-circular`** — Floats over photography. 44 × 44px, fill `{colors.surface-chip-translucent}`, icon `{colors.ink}`, `{rounded.full}`.

**`badge-status`** — New component, not in the Apple source. Small pill, fill `{colors.accent}` at full strength or an outline variant, text white or `{colors.accent}`, `{typography.caption-strong}`, `{rounded.pill}`, padding 4px × 10px. Used on project cards: "Ongoing", "Completed", "Featured". This is the sparing, non-button use of orange.

**`text-link`** — Inline body links in `{colors.primary}` (#1470AD).

**`text-link-on-dark`** — Inline links on navy tiles in `{colors.primary-on-dark}` (#4f94c2).

### Cards & Containers
**`service-card`** / **`project-card`** — Promoted to the default building block (Apple's store-utility-card, generalized). Fill `{colors.canvas}`, 1px solid `{colors.hairline}` border, `{rounded.lg}` (18px), padding `{spacing.lg}` (24px). Top: photo (4:3 or 1:1, `{rounded.sm}` inner radius) with optional `{component.badge-status}` overlaid top-left. Below: title in `{typography.body-strong}`, one-line description in `{typography.body}`, and a `{component.text-link}` ("View project" / "Learn more").

**`hero-tile-light`** — Full-bleed light hero. Fill `{colors.canvas}` or `{colors.canvas-tint}`, text `{colors.ink}`, `{rounded.none}`, vertical padding `{spacing.section}`. Centered stack: headline `{typography.display-lg}` → tagline `{typography.lead}` → `{component.button-primary}` + `{component.button-secondary-pill}` → facility/hero photo with system shadow. Reserved for homepage and featured-project moments — not the default page pattern.

**`hero-tile-dark`** — Same structure on `{colors.surface-tile-1}` (#001723), text white, links via `{component.text-link-on-dark}`.

**`stat-band`** — New component. Full-bleed tile, `{colors.surface-tile-2}` or `{colors.canvas-tint}` background. Row of 3–4 stats (e.g. "500+ projects", "20 years"), number in `{typography.display-md}` with the digits optionally in `{colors.accent}` as a highlight, label below in `{typography.caption}`.

**`floating-sticky-bar`** — Bottom-of-viewport bar on project/service detail pages. Fill `{colors.canvas-tint}` at 80% with backdrop blur, height 64px, padding 12px × 32px. Left: page context text. Right: `{component.button-primary}` ("Request a Quote").

### Inputs & Forms
**`search-input`** — Fill `{colors.canvas}`, text `{colors.ink}`, 1px solid `rgba(0,0,0,0.08)` border, `{rounded.pill}`, padding 12px × 20px, height 44px.

Contact/inquiry form fields were not part of the Apple source — recommend a plain-bordered input using `{colors.hairline}` at `{rounded.sm}`, matching the utility-card grammar rather than the pill grammar (forms aren't "actions").

### Footer
**`footer`** — Fill `{colors.canvas-tint}` (#d8e7f1), text `{colors.ink-muted-80}`. Link columns in `{typography.dense-link}`. Column headings `{typography.caption-strong}`. Legal row in `{typography.fine-print}` with `{colors.ink-muted-48}`. Vertical padding 64px.

## Do's and Don'ts

### Do
- Use `{colors.accent}` (#f4691a) only for primary buttons and small, deliberate flags of attention (badges, stat highlights, active indicators) — never as a large fill or background.
- Use `{colors.primary}` (#1470AD) for secondary buttons, links, and focus rings — its job is support, not the loudest thing on the page.
- Alternate `{colors.canvas}` / `{colors.canvas-tint}` and navy tiles for section rhythm — the color change is the divider.
- Default to `{component.service-card}` / `{component.project-card}` grids as the primary content pattern; reserve full-bleed hero tiles for homepage and featured moments.
- Apply the single photo-shadow only to photography resting on a surface — never to cards, buttons, or text.
- Use `transform: scale(0.95)` as the universal active/press state.

### Don't
- Don't let orange and blue both appear as large fills in the same view competing for primary attention — one of them is always primary, the other secondary/support.
- Don't use orange as a body-text or link color; that's blue's job.
- Don't add shadows to cards, buttons, or text.
- Don't use gradients as decorative backgrounds.
- Don't set body copy at weight 500 — ladder is 400 / 600 / 700.
- Don't round full-bleed tiles.
- Don't use `{colors.primary-on-dark}` (#4f94c2) on light surfaces — it's the navy-tile-only variant.

## Responsive Behavior

Breakpoints and collapsing strategy carry over unchanged from the Apple source — this is device-target logic, not brand-specific.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single-column tiles/cards; sub-nav collapses to section name + primary CTA; hero type drops to 28px |
| Phone | 420–640px | Single-column stack; hero photo scales to ~80% width; hero h1 drops to 34px |
| Large phone | 641–735px | Tighter tile padding (48px vs 80px) |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; sub-nav hides secondary links, keeps primary CTA |
| Tablet landscape | 834–1023px | Global nav expands fully; card grid drops to 2-column |
| Small desktop | 1024–1068px | Hero tiles use 2/3 width with margin gutters |
| Desktop | 1069–1440px | Full layout; 3–4 column card grids; 1440px content max |
| Wide desktop | ≥ 1441px | Content locks at 1440px |

### Touch Targets
- Minimum 44 × 44px throughout.
- `{component.button-icon-circular}` is exactly 44 × 44px.
- **Iconography:** All icons across the site MUST be sourced from `@phosphor-icons/react`. Do not use Lucide or Heroicons. Use `weight="bold"` or `weight="regular"` as appropriate for the context.

### Image Behavior
- Responsive `srcset` across breakpoints; lazy-load below the fold, eager-load hero.
- Facility/project photography maintains aspect ratio across breakpoints, scale only.

## Iteration Guide

1. Focus on one component at a time; reference its key directly (`{component.service-card}`, `{component.badge-status}`).
2. Variants live as separate `components:` entries (`-active`, `-focus`, `-2`, `-3`).
3. Use `{token.refs}` everywhere — never inline hex.
4. Default and Active/Pressed states only — no hover documented.
5. When in doubt about which accent to use: orange = primary action or a small deliberate flag; blue = everything else that's interactive.
6. When in doubt about emphasis: alternate surface (light → navy tile) before adding chrome.

## Known Gaps / Assumptions to Confirm

- **Hairline/border colors** (`divider-soft`, `hairline`) were kept neutral grey rather than blue-tinted — confirm if PCE wants borders to carry brand color too.
- **Pearl Button surface** (#fafbfc) is a near-white assumption, not a stated brand value — confirm or adjust.
- **Navy Tile 2/3** (#032032, #00121c) are derived step-values off #001723, not separately specified — confirm the step feels right once seen against real photography.
- **`{colors.primary-on-dark}`** (#4f94c2) is a calculated 25%-lightened tint of #1470AD — worth eyeballing against actual navy tile photography before locking in.
- Form input styling, error/validation states, and dark-mode counterparts for cards were not part of the Apple source and are proposed here as reasonable defaults, not confirmed decisions.
