# PCE Agent Rules

*Standing behavioral rules for any AI agent (Antigravity or otherwise) writing code for the PCE project. Pairs with `design.md`, which holds the actual token values — this file holds the rules for how those values get used.*

## 1. Workflow Discipline

- **Explain Only before implementation.** Before writing or generating code for a new screen, component, or section, explain the approach first — layout structure, which tokens/components apply, any open decisions — and wait for confirmation before producing code.
- **Build incrementally, one layer at a time.** Don't generate a full page in one pass. Build structure, then styling, then responsive behavior, then interaction — each as a checkpoint, not a single dump.
- **Flag decisions before baking them in.** Any time a spec in `design.md` doesn't cover the exact case at hand (a new component, an ambiguous color use, a spacing judgment call), say so explicitly and propose an option rather than silently picking one.

## 2. Responsive Requirement (non-negotiable)

- **Every piece of code written for desktop must also be written for mobile in the same pass.** Desktop-first is the default working preview (1440px), but no component, section, or page is considered done until its mobile treatment (down to ~375px) exists alongside it. Do not defer "mobile version" to a later step or a separate request — it ships with the desktop code, every time.
- Use the breakpoint table in `design.md` (`Responsive Behavior`) as the reference for what collapses, stacks, or resizes at each width. If a new component isn't covered there, propose its mobile behavior explicitly (per rule 1) rather than guessing silently.
- Section padding is **PCE-specific** (diverges from other projects): **100px top/bottom, 120px left/right on desktop; 40px top/bottom, 20px left/right on mobile.** This is padding on both axes, never margin — the section background stays full-bleed and only the content sits inset. Applied via a single shared `.section` class using two custom properties (`--section-pad-y`, `--section-pad-x`) that switch together at the 768px breakpoint — never redefined per-component. Sections that go full-bleed (heroes, full-width photography) skip the `.section` class rather than zeroing it out.
- **No Centered Max-Width Constraints on Section Content:** Do not wrap section contents in `max-w-[var(--container-xl)]` or use `mx-auto` to center them on large displays. All sections must span 100% of the screen width so that their text and components align perfectly 120px from the left/right screen edges on desktop, and 20px on mobile.

## 3. Token Usage

- Use a **two-layer CSS custom property system**: raw palette tokens (hex values) feeding semantic role tokens (`--color-primary`, `--color-accent`, `--surface-tile-dark-1`, etc.). Components reference the semantic layer, never the raw layer directly.
- **Tailwind for Layout, CSS for Tokens.** Tailwind utility classes are the primary build engine for structure, layout, and responsiveness (e.g. flex, grid, spacing, sizing) directly in JSX. However, branding colors, complex typography, and specific semantic variants belong in the CSS token layer.
- **NO INLINE STYLES FOR LAYOUT.** Do not use React `style={{}}` props for layout, sizing, positioning, or responsive behavior. Use Tailwind classes exclusively for these concerns. Inline styles are strictly forbidden unless explicitly requested for a dynamic calculation that cannot be done otherwise.
- Never inline a raw hex value in component code — if a value isn't already a token, that's a signal to add it to `design.md` first, not to hardcode it.

## 4. Color Discipline

- **Orange (`{colors.accent}`) is the primary button color and a sparing accent only** — status badges, stat highlights, active-state indicators. Never a large fill or background, never a link/body-text color, never used decoratively "because it's the brand color."
- **Blue (`{colors.primary}`) is the secondary button color and the default interactive color everywhere else** — links, focus rings, icon accents.
- In any single view, only one of orange/blue should be doing "primary attention" work at a time. If both a primary and secondary button appear together, that's the expected pairing (orange fill + blue outline) — don't add a third competing accent moment nearby.
- Dark sections use the navy tile scale (`{colors.surface-tile-1/2/3}`), not a generic dark grey — this is deliberate brand reinforcement, not a stylistic default to override.

## 5. Elevation & Shadow

- **Exactly one shadow exists in this system** (`rgba(0, 0, 0, 0.22) 3px 5px 30px`), reserved for photography resting on a surface. Do not add shadows to cards, buttons, inputs, or text under any circumstance, including "just a little depth" requests — flag it back for a decision instead of adding a new shadow value ad hoc.
- Elevation otherwise comes from surface-color change (light tile → navy tile) and backdrop-blur on sticky/floating elements only.

## 6. Component Reference

- Use the components documented in `design.md` (`service-card`, `project-card`, `button-primary`, `badge-status`, etc.) rather than building a new one-off pattern when an existing component covers the case.
- If a screen needs something not yet in `design.md` (a new card variant, a new interactive pattern), name it explicitly, propose its spec inline with the rest of the system's grammar (spacing scale, radius scale, existing color roles), and flag it as a new addition rather than quietly inventing it.

## 7. Typography

- Montserrat throughout — no Display/Text font split. Hierarchy comes from the weight/size scale in `design.md`, not from switching families.
- Load Montserrat via webfont with a `system-ui, -apple-system, sans-serif` fallback stack for the brief pre-load flash only — don't treat the fallback stack as a long-term substitute typeface.

## 8. What Not to Do

- Don't introduce a third accent color.
- Don't use inline `style={{}}` blocks for layout or structure.
- Don't hardcode hex values outside the token layer.
- Don't add gradients as decorative backgrounds.
- Don't round full-bleed hero tiles.
- Don't generate a full page/feature in one uninterrupted pass without a checkpoint per rule 1.
