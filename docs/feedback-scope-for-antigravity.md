# PCE Nigeria Website — Client Feedback Scope & Handoff

**Source feedback doc:** `feedbacks/PCE Nigeria website feedback.docx` (14 numbered problems, each with an attached screenshot of the current page/section).
**Codebase:** Next.js app, feature-sliced (`app/` = routes, `features/<name>/components|data|pages` = domain logic, `shared/` = design system).
**Purpose of this file:** Hand off the remaining work to an Antigravity agent working directly in `Projects/pce`. It records what Claude already implemented (in an earlier session, via a device bridge that kept disconnecting), what's still open, and — critically — which items are blocked on photos/content the client said they'd send separately, so the next agent doesn't guess at those.

---

## 1. Already completed (verify + commit as a starting baseline)

These files are modified on disk but **not yet committed to git**. Run `git status` / `git diff` in `Projects/pce` to review before committing.

| # | Feedback item | File(s) changed | What was done |
|---|---|---|---|
| 1 (text only) | Home hero headline/subhead | `features/home/components/home-hero.tsx` | Headline → "HDD Crossing. EPC for Pipeline." Subhead replaced with the 4 requested capability bullets (Excellent HDD construction capability / Professional HDD drilling fluid scheme design and product supply capability / Comprehensive pipeline EPC construction capability / Deep buried pipeline detection capability). **Photo/video slideshow plan from problem 1 was NOT done** — see §3. |
| 2 | Home "PCE at a glance" stats | `features/home/components/overview.tsx` | Headline → "...Field-ready Resources **in Nigeria**. Proven Capability." Merged the duplicate "150+ People" / "5 teams" cards into one ("150+ People across five specialist construction teams"). Changed "500t" stat to "1000t/500t/500t" (photo swapped to `/pictures/product-image/bent/bent-stock.png` as a placeholder for "stockpile of bentonite" — **not confirmed as the real photo**). 4th card relabeled "Equipment & Materials in Nigeria" (number left blank — original "100+m" didn't fit the new label; needs a real stat from the client). Grid now 3 columns instead of 4. |
| 3 | Home Featured Project | `features/home/components/featured-project.tsx` | Added a second "OB3 River Niger HDD Crossing" block below the existing AKK block, reusing existing OB3 project data/photos from `features/projects/data/projects-data.ts` and `/pictures/case-study/ob3/`. |
| 5 | Our Company "Who We Are" headline | `features/company/components/who-we-are.tsx` | "Specialist capability for demanding pipeline work." → "...demanding pipeline **HDD Crossing and EPC** work." |
| 7 | Equipment & Technology page — "Scale matters. Control matters more." section | `features/equipment/pages/equipment-page.tsx` | **Removed entirely** per client decision ("we don't understand this content"). The component itself (`OurCapabilities` in `features/equipment/components/equipment-capacity.tsx`) still exists in the codebase but is no longer imported/rendered. Safe to delete the file later if confirmed unneeded. |
| 9 | Projects page hero cover photo | `features/projects/components/projects-home.tsx` | Converted from a static image to an auto-changing slideshow (4s interval, crossfade), using existing construction photos only, starting with an HDD rig photo (`/pictures/equipment/hero.jpg`), then AKK, OB3, and pipeline photos. |
| 11 | Projects "Different routes. The same engineering discipline." 4-card section | `features/projects/components/what-works.tsx` | Replaced all 4 generic Unsplash stock photo URLs with PCE's own existing site photos (`specialist-enginering.jpg`, `equipment/hero.jpg`, `capabilities/engineer-on-site.jpg`, `capabilities/handover.jpg`). |
| 14 | Footer contact info | `shared/components/layout/site-footer.tsx` | Added Xu Liangkui (07013732816 / xuliangkui@pcenigeria.com) alongside the existing Wan Yang entry, plus a general `info@pcenigeria.com` line. |

**Not yet done, despite being planned** (session lost connection to the device mid-edit before these landed — confirm current file state before assuming otherwise):
- Problem 10 (Projects country tabs + BPDS category) — `features/projects/components/featured-projects.tsx` still has the old 2-tab ("Nigeria" / "International Experience") structure as of last check.
- Problem 13 (nav dropdowns) — `shared/components/layout/site-header.tsx` was not touched.

---

## 2. Remaining work — ready to implement now (no new assets needed)

### Problem 10 — Projects page: split into Nigeria / Thailand / China + new BPDS tab

**File:** `features/projects/components/featured-projects.tsx`

Current state: `ProjectItem.scope` is typed `'nigeria' | 'international'`. The `tabs` array only has `all`, `nigeria`, `international`. All 5 non-Nigeria projects are tagged `"international"`.

Target state:
1. Change the type to `'nigeria' | 'thailand' | 'china' | 'bpds'`.
2. Re-tag the existing projects by their actual location (already present in `features/projects/data/projects-data.ts`):
   - `niger-river` (akk-river-niger) → stays `nigeria`
   - `escravos-crossing` (ob3-river-niger) → stays `nigeria`
   - `chao-phraya` (two-major-gas-crossings, Thailand) → `thailand`
   - `bonny-island` (pipeline-epc-thailand, Thailand) → `thailand`
   - `imiringi-creek` (five-parallel-crossings, China) → `china`
   - `yangtze-river` (raoyang-river-crossing, China) → `china`
   - `ajaokuta-crossing` (zhanjiang-crossing, China) → `china`
3. Replace the `tabs` array with 5 entries: All, Nigeria, Thailand, China, BPDS Construction Work. Give the BPDS tab a description/subtext noting content is pending (there are currently **zero** BPDS project entries — see §3 blocked items).
4. The header already has a static "Nigeria | Thailand | China" text badge (non-functional, just decorative) around line ~150 — leave as-is or make it reflect the active filter, optional polish.

This mirrors the client's literal ask: *"sort them out separately by China, Thailand and Nigeria. Add a new category of BPDS construction work."*

### Problem 13 — Nav: fix Products dropdown, add Capabilities dropdown

**File:** `shared/components/layout/site-header.tsx`

Two sub-issues:

**(a) Bug in the existing Products mega-menu.** Inside the dropdown (around the "Far Left: Main Links" column), there are two blocks: "Products Overview" (a working `Link` to `/products`) and "Individual Products" (a plain `<div>` with a chevron icon that looks clickable but does nothing — dead UI). Fix: turn "Individual Products" into a real `Link` (it can point to `/products` too, since there's only one products listing route — `app/products/page.tsx` — no separate route for "individual" vs "overview"). This is almost certainly what the client meant by "ensure the display of the drop-down menu is correct."

**(b) Add a "Capabilities" dropdown**, matching the existing "Our Company" mega-menu pattern (same file, ~line 118–186: `isCompanyMenuOpen` state, `companySubLinks` array, mega-menu JSX with a left link column + right image panel).

Steps:
1. Add state: `const [isCapabilitiesMenuOpen, setIsCapabilitiesMenuOpen] = useState(false);` and `const [isMobileCapabilitiesOpen, setIsMobileCapabilitiesOpen] = useState(false);`
2. Add `const isCapabilitiesActive = pathname === '/capabilities';`
3. Add a `capabilitySubLinks` array sourced from `features/capabilities/data/capabilities-data.ts` (`CAPABILITIES_CARDS`), i.e. 4 items: Horizontal Directional Drilling, Pipeline EPC, BPDS Pipeline Location, Equipment & Technical Support — link each to `/capabilities#<id>` (`#hdd`, `#epc`, `#bpds`, `#support`).
4. Remove `{ href: '/capabilities', label: 'Capabilities' }` from `navLinksBeforeProducts` (leave `/projects` there) and replace it with a dropdown trigger block placed between the "Our Company" dropdown and the `navLinksBeforeProducts.map(...)`, structurally identical to the Our Company trigger/menu (button + chevron + absolute-positioned panel). Use an image from `/pictures/home-page/horizontal-drilling-new.jpg` for the right-hand showcase panel.
5. Mirror the same in the mobile drawer: add a "Mobile Capabilities Dropdown Accordion" block next to the existing "Mobile Our Company Dropdown Accordion", using `isMobileCapabilitiesOpen`.
6. In `features/capabilities/components/core-capabilities.tsx`, add `id={cap.id}` (plus `scroll-mt-24` class, since the header is `sticky`) to the "Standalone Image Frame" `<div>` for each card, so the `#hdd` / `#epc` / `#bpds` / `#support` anchors actually scroll to the right card. Note: `StaggerItem` (from `shared/components/ui/fade-in-slide-up.tsx`) does **not** forward arbitrary props like `id` — the id must go on an element rendered inside it, not on `<StaggerItem>` itself.

---

## 3. Blocked — needs photos or content from the client before implementing

Do **not** guess at these with placeholder stock photos; the client explicitly said new material would be sent separately, and the existing repo has no confident substitute.

| # | Section | What's needed |
|---|---|---|
| 1 (visual) | Home hero cover photo/video | Client wants the static video replaced with a photo slideshow in 4 curated batches: (a) OB3 completion banner photo + AKK completion photos + attractive HDD rig/land-to-sea-crossing shots, (b) drilling fluid product / experiment / inventory photos, (c) 2 "better" EPC photos labeled "52km Pipeline EPC", (d) 2 measurement/survey photos labeled "New Pipeline Location Survey Technique-BPDS". |
| 4 | Home "Our Capabilities" 4-card grid (`features/home/components/capabilities.tsx`) | New EPC photo (current one at `/pictures/home-page/pipeline-drilling.jpg` has a GPS/timestamp overlay burned into the image — "(276 m.)" in the top-right — client wants this removed/replaced, not croppable via CSS since it's baked into the photo) relabeled "52km Pipeline EPC"; new HDD-drilling-fluids photo for the second card; new BPDS-related photo for the fourth card; reorder so EPC becomes the first item of the second row. |
| 6 | Equipment & Technology "Our Equipment" tabs (`features/equipment/components/our-equipments.tsx`) | Client: "Almost every photo in these 5 equipment groups is incorrect." Full current list below — needs item-by-item photo review against the client's actual equipment. |
| 8 | Capabilities page 4-card grid (`features/capabilities/data/capabilities-data.ts` → `CAPABILITIES_CARDS`) | Same reorder/replace as problem 4 (same underlying photos, this is a second page using similar content), plus: the BPDS card (last position) needs new instructional content, video, and performance data — not just a photo swap. This also affects `CAPABILITIES_DETAILS.bpds` (the drawer content) if the client wants BPDS expanded there too. |
| 10 (content) | Projects — BPDS category | The tab/filter structure can be built now (§2), but there are **zero** BPDS project entries in `features/projects/data/projects-data.ts` to populate it with. Needs real project write-ups from the client. |
| 12 | News & Insights cards (`features/news-insights/components/news-cards.tsx`) | Client: "These news items are almost all incorrect and all need to be revised." Replace with: completion report of the OB3 project, and latest progress of the EPC project. Client said "specific photos and contents will be sent to you separately" — do not fabricate news copy. |

### Reference: current "Our Equipment" list (problem 6), for the client to mark up

**Major HDD equipment:** XCMG 500-ton HDD Rig, GD-5000L HDD Rig, GD-12000L HDD Rig, 500-ton Pipe-Handling Machine
**Drilling-Fluid Systems:** 4 Mud Systems, 6 Mud-Pump Sets, 16 Mud Tanks, 2000+ Bentonite Resources
**Drilling & Bore-Preparation Tools:** Reamers, Drilling Rods, Drill Bits & Mud Motors, Ramming Hammer
**Pipe Movement & Support:** 100+ Pipeline Rollers, 2 Side Booms, 5 Excavators, One 500-ton pipe-handling machine
**Guidance Technology:** 3 ParaTrack 2 systems, 3 F5 walkover systems

(All current image paths are under `/public/pictures/equipment/` — mostly generic hashed filenames like `009061ab6e7649c67058fc722baea717.jpg`, which is presumably why the client flagged them as wrong/stock-looking.)

---

## 4. Client contact reference (already applied to footer, problem 14)

- Wan Yang — 07074126596 — wanyang@pcenigeria.com
- Xu Liangkui — 07013732816 — xuliangkui@pcenigeria.com
- info@pcenigeria.com

---

## 5. Suggested order of operations for the next agent

1. Review and commit the "already completed" changes in §1 (or discard/redo any that don't look right after re-reading the diffs).
2. Implement §2 (Problem 10 tabs, Problem 13 nav) — pure code, no external assets needed.
3. Flag §3 items back to the client/user for the actual photos and content before touching those sections — implementing them with wrong stand-in photos would create more rework, not less.
