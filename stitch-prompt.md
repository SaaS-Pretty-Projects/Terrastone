# Terrastone — STITCH Prompt

> STITCH-optimized UI mockup prompt for two pages of the Terrastone gaming marketplace.
> Format follows the STITCH Prompt Guide (https://discuss.ai.google.dev/t/stitch-prompt-guide/83844).

---

## Page 1: Landing Page

### Product Context

Terrastone is a dark-themed gaming marketplace where PC gamers (aged 18–28) buy in-game boosts, virtual currency, skins, and digital items from verified sellers. The platform handles escrow, delivery verification, and dispute resolution. Buyers want fast, scam-free purchases. Sellers are semi-pro players or dedicated traders who need a credible storefront. The landing page must communicate trust, speed, and premium quality at first glance — converting a curious visitor into a browser within seconds.

### Visual Style

Dark gaming marketplace. Mood words: electric, precise, premium, urgent, credible. Think: ranked queue lobby screen — dark canvas, glowing accents, everything purposeful. Visual reference: kingdomofarcane.com color system combined with the clean marketplace card UX of gameflip.com and the trust-signal patterns of g2g.com. The screen should feel like the best item shop in the game — familiar to any gamer, immediately trustworthy, visually thrilling without being chaotic.

### Color Palette

| Role                  | Hex                        | CSS Token              |
|-----------------------|----------------------------|------------------------|
| Page background       | `#0a0a0f`                  | `--color-bg`           |
| Card / surface        | `#13131a`                  | `--color-surface`      |
| Raised surface (modals)| `#1a1a2e`                 | `--color-surface-raised`|
| Input background      | `#0d0d18`                  | `--color-surface-input`|
| Primary / cyan        | `#00d9ff`                  | `--color-primary`      |
| Cyan hover            | `#00b1ff`                  | `--color-primary-dim`  |
| Accent purple         | `#4a08d2`                  | `--color-accent`       |
| Vivid purple glow     | `#9333ea`                  | `--color-accent-vivid` |
| Primary text          | `#e8e8f0`                  | `--color-text`         |
| Muted text            | `#9ca3af`                  | `--color-text-muted`   |
| Secondary text        | `#c8c8d8`                  | `--color-text-dim`     |
| Gold / ratings        | `#ffb800`                  | `--color-gold`         |
| Error / destructive   | `#ef4444`                  | `--color-destructive`  |
| Cyan border           | `rgba(0, 217, 255, 0.15)`  | `--color-border`       |

Brand gradient (hero backgrounds, CTA fills):
```
linear-gradient(to right in oklab, #00d9ff 0%, #9333ea 100%)
```

### Typography

All headings use Cinzel (serif). All body, UI, and interactive text uses Inter (sans-serif). Prices and order IDs use ui-monospace / Courier New.

| Element                  | Font   | Size      | Weight | Color     | Letter-spacing |
|--------------------------|--------|-----------|--------|-----------|----------------|
| H1 — Hero headline       | Cinzel | 3rem      | 700    | `#e8e8f0` | default        |
| H2 — Section titles      | Cinzel | 2.25rem   | 600    | `#e8e8f0` | default        |
| H3 — Sub-section titles  | Cinzel | 1.875rem  | 600    | `#e8e8f0` | default        |
| H4 — Step / card headers | Cinzel | 1.5rem    | 600    | `#e8e8f0` | default        |
| Body copy                | Inter  | 1rem      | 400    | `#c8c8d8` | default        |
| Price display            | Inter  | 1.25rem   | 700    | `#00d9ff` | default        |
| Small labels / meta      | Inter  | 0.875rem  | 500    | `#9ca3af` | default        |
| XS captions / badges     | Inter  | 0.75rem   | 400    | `#e8e8f0` | default        |
| Button text              | Inter  | 0.9rem    | 500    | varies    | 1.152px        |
| Form labels              | Inter  | 0.7rem    | 500    | `#9ca3af` | 0.56px         |
| Nav links                | Inter  | 0.9rem    | 500    | `#e8e8f0` | 1.152px        |

### Layout

- Viewport: 1440px wide, full height, dark mode.
- Container: max-width 1440px, 32px horizontal padding, `margin: 0 auto`.
- 12-column grid, `gap: 24px`.
- Sections stacked vertically, full bleed width, content centered inside container.

**Section order (top to bottom):**
1. Fixed Navigation Bar
2. Hero Section
3. Featured Games Strip
4. Trust Signals Bar
5. How It Works
6. Recent Listings Grid
7. Footer

---

### Section-by-Section Detail

#### 1. Navigation Bar

- Fixed to top, `z-index: 50`, full viewport width.
- Background: `#0d0d18`. Bottom border: `1px solid rgba(0, 217, 255, 0.15)`.
- Height: 64px.
- **Left zone:** Logo text "TERRASTONE" in Cinzel, `#00d9ff`, 1.25rem, 700 weight. No icon needed — wordmark only.
- **Center zone:** Three nav links — "Browse Games", "Sell", "How It Works". Inter 0.9rem 500, `#e8e8f0`, letter-spacing 1.152px. Hover color: `#00d9ff`, transition 0.15s ease.
- **Right zone:** Search icon (magnifier, 20px, `#9ca3af`), Cart icon (bag, 20px, `#9ca3af`), then primary button "Sign In" — solid `#00d9ff` background, `#0a0a0f` text, 6px border-radius, 8px 16px padding.
- Cart icon has a small badge dot in `#00d9ff` when cart is non-empty.
- Hover on nav icons: color shifts to `#00d9ff`.

#### 2. Hero Section

- Full viewport height (100vh), background `#0a0a0f`.
- Background texture overlay at 5% opacity: repeating cyan grid lines —
  ```
  repeating-linear-gradient(0deg, #00d9ff 0px, transparent 1px, transparent 60px),
  repeating-linear-gradient(90deg, #00d9ff 0px, transparent 1px, transparent 60px)
  ```
- Two-column split inside the container: left 55%, right 45%.
- **Left column (text + CTAs):**
  - Eyebrow tag: "Gaming Marketplace" — cyan chip, `rgba(0,217,255,0.1)` background, `#00d9ff` text, `1px solid rgba(0,217,255,0.3)`, 6px radius, 0.75rem Inter 500, 4px 12px padding.
  - H1: "Level Up Your Game. Instantly." — Cinzel 3rem 700, `#e8e8f0`, line-height 1.15. "Instantly." appears on a second line and is gradient-colored with `linear-gradient(to right in oklab, #00d9ff 0%, #9333ea 100%)` applied as `-webkit-background-clip: text; color: transparent`.
  - Subheadline: "Buy in-game boosts, currency, and items from verified sellers. Delivered fast, protected by escrow." — Inter 1rem 400, `#c8c8d8`, max-width 480px, line-height 1.6.
  - CTA row (32px margin-top): Primary button "Browse Games" then 16px gap then Ghost button "Start Selling".
    - Primary button: `#00d9ff` fill, `#0a0a0f` text, 6px radius, 10px 24px padding, 0.9rem Inter 500, letter-spacing 1.152px. Hover: `box-shadow: rgba(0,217,255,0.4) 0px 0px 20px 0px`, translateY(-1px), transition 0.15s.
    - Ghost button: transparent, `#00d9ff` text, `1px solid rgba(0,217,255,0.4)`, same padding/font. Hover: border-color `rgba(0,217,255,0.8)`, background `rgba(0,217,255,0.05)`.
  - Trust micro-badges below CTAs (24px margin-top): three inline pills — "100k+ Transactions", "Verified Sellers Only", "Instant Delivery". Each: `rgba(0,217,255,0.08)` background, `#9ca3af` text, `1px solid rgba(0,217,255,0.15)`, 16px radius, 0.75rem Inter, 4px 10px padding. Separated by 8px gaps.
- **Right column (hero visual):**
  - Large abstract glowing orb or stylized game controller. Dark background, large cyan-to-purple radial glow centered behind the artifact: `radial-gradient(ellipse at center, rgba(74,8,210,0.6) 0%, rgba(0,217,255,0.15) 40%, transparent 70%)`.
  - The artifact casts a diffuse cyan glow on the floor/bottom edge: `box-shadow: rgba(0,217,255,0.4) 0px 40px 80px -20px`.
  - Subtle floating particle dots (5–8 small `#00d9ff` dots, 3px, scattered with varying opacity 0.3–0.7) around the artifact.

#### 3. Featured Games Strip

- Background: `#0a0a0f` (continuous from hero), 80px top padding, 48px bottom padding.
- Section header row: H2 "Top Games" (Cinzel 2.25rem 600, `#e8e8f0`) on the left, "View All Games →" link (Inter 0.875rem 500, `#00d9ff`) on the right.
- 24px gap below header.
- 6-column grid of game cards, `gap: 16px`.
- **Each game card:**
  - Container: `#13131a` background, `1px solid rgba(0,217,255,0.15)` border, 12px radius, overflow hidden. Hover: border-color `rgba(0,217,255,0.35)`, `box-shadow: rgba(0,217,255,0.15) 0px 0px 12px 0px`.
  - Square thumbnail (1:1 aspect ratio) — game cover art. Dark overlay gradient on top: `linear-gradient(rgba(45,27,61,0.3), rgba(19,13,30,0.7))`.
  - Below image: 12px padding. Game name in Inter 0.875rem 500, `#e8e8f0`. Item count badge top-right of image: "142 items", `#00d9ff` background, `#0a0a0f` text, 0.75rem, 4px 6px padding, 4px radius.
  - Games shown (left to right): "World of Warcraft", "League of Legends", "CS2", "Valorant", "Elden Ring", "Diablo IV".
  - First card ("World of Warcraft") has active state: `border-color: #00d9ff`, subtle cyan glow.

#### 4. Trust Signals Bar

- Background: `#13131a`. Top and bottom border: `1px solid rgba(0,217,255,0.1)`. Vertical padding: 48px.
- 4-column grid, `gap: 32px`, centered content.
- **Each trust block:**
  - Icon (32px, `#00d9ff`) — shield for Escrow, checkmark badge for Verified, lightning bolt for Delivery, headset for Support.
  - 12px below icon: title in Inter 1rem 700, `#e8e8f0`.
  - 6px below title: description in Inter 0.875rem 400, `#9ca3af`.
- **Content:**
  1. Escrow Protection — "Your payment is held until delivery is confirmed."
  2. Verified Sellers — "Every seller goes through identity and rating checks."
  3. Instant Delivery — "Most orders delivered in under 30 minutes."
  4. 24/7 Support — "Real help when you need it most."

#### 5. How It Works

- Background: `#0a0a0f`. Vertical padding: 96px.
- H2 "How It Works" (Cinzel 2.25rem 600, `#e8e8f0`) centered. 8px below: subtext "Three steps to your next level." (Inter 1rem, `#9ca3af`) centered.
- 48px gap below header.
- 3-column grid, `gap: 48px`.
- **Each step:**
  - Step number circle: 48px diameter, `#13131a` background, `1px solid rgba(0,217,255,0.3)`, cyan box-shadow `rgba(0,217,255,0.15) 0px 0px 12px 0px`, centered. Number text: Cinzel 1.25rem 700, `#00d9ff`.
  - Vertical connector line between circles: `1px dashed rgba(0,217,255,0.2)`, stretches horizontally between step circles (hidden on mobile).
  - 16px below circle: H4 step title in Cinzel 1.5rem 600, `#e8e8f0`, centered.
  - 8px below title: description in Inter 1rem 400, `#9ca3af`, centered, max-width 240px per column.
- **Content:**
  1. "Browse" — "Pick a game and filter items by type, price, and delivery speed."
  2. "Buy" — "Add to cart and pay securely. Funds are held in escrow until you confirm."
  3. "Receive" — "Get your items delivered in minutes. Rate the seller and move on."

#### 6. Recent Listings Grid

- Background: `#0a0a0f`. Vertical padding: 96px.
- Section header row: H2 "Fresh Listings" (Cinzel 2.25rem 600, `#e8e8f0`) on left; "View All Listings →" link (Inter 0.875rem, `#00d9ff`) on right.
- 32px gap below header.
- 4-column grid, `gap: 24px`.
- **Each Item Card:**
  - Container: `#13131a` background, `1px solid rgba(0,217,255,0.15)` border, 12px radius, overflow hidden.
  - Hover: `border-color: rgba(0,217,255,0.35)`, `box-shadow: rgba(0,217,255,0.15) 0px 0px 12px 0px`, transition 0.3s.
  - **Thumbnail zone (top):** 3:2 aspect-ratio image. Top-left: game tag badge — `rgba(74,8,210,0.3)` background, `#e8e8f0` text, `1px solid rgba(74,8,210,0.5)`, 6px radius, 0.75rem Inter, "World of Warcraft". Top-right: delivery time chip — `rgba(0,217,255,0.1)` background, `#00d9ff` text, `1px solid rgba(0,217,255,0.3)`, "⚡ 15 min".
  - **Card body (16px padding all sides):**
    - Item title: Inter 0.9rem 500, `#e8e8f0`, two-line max, e.g. "10,000 Gold — Shadowmoon Valley Server".
    - 8px gap.
    - Price row: price "USD 4.99" in Inter 1.25rem 700, `#00d9ff` (monospace for the number). If original price exists, show strikethrough in `#9ca3af` 0.875rem.
    - 8px gap.
    - Seller row: 20px circular avatar, seller name Inter 0.75rem 500 `#9ca3af`, then gold star rating "★ 4.9" in `#ffb800` 0.75rem, then "(312 sales)" in `#9ca3af` 0.75rem.
    - 12px gap.
    - "Add to Cart" ghost button: full width, transparent, `#00d9ff` text, `1px solid rgba(0,217,255,0.4)`, 6px radius, 8px 0, 0.9rem Inter 500, letter-spacing 1.152px.
- **Listings data (4 cards, left to right):**
  1. WoW — "10,000 Gold — Shadowmoon Valley" — $4.99 — seller "ArcaneTrader" — ★ 4.9 (312 sales) — 15 min delivery
  2. CS2 — "AK-47 Redline Field-Tested" — $12.50 — seller "SkinVault" — ★ 4.8 (88 sales) — Instant delivery
  3. League of Legends — "5,000 Blue Essence Bundle" — $3.20 — seller "LoLShop" — ★ 5.0 (204 sales) — 10 min delivery
  4. Valorant — "Night Market Skin Bundle (x5)" — $27.00 — seller "NightMarket" — ★ 4.7 (51 sales) — 30 min delivery

#### 7. Footer

- Background: `#13131a`. Top border: `1px solid rgba(0,217,255,0.1)`. Padding: 64px top, 48px bottom.
- 4-column grid (equal widths), `gap: 48px`, `align-items: start`.
- **Column 1 — Brand:**
  - Logo "TERRASTONE" Cinzel 1.25rem 700 `#00d9ff`.
  - 12px below: tagline "Level up your game. Instantly." Inter 0.875rem `#9ca3af`.
  - 24px below: three social icons (Twitter/X, Discord, Twitch) — 20px each, `#9ca3af`, hover `#00d9ff`.
- **Column 2 — Company:**
  - Header "COMPANY" — Inter 0.7rem 500 uppercase `#9ca3af` letter-spacing 0.56px.
  - Links (12px gap each): "About Us", "Careers", "Press", "Blog" — Inter 0.875rem `#e8e8f0`, hover color `#00d9ff`.
- **Column 3 — Support:**
  - Header "SUPPORT"
  - Links: "Help Center", "Contact Us", "Dispute Resolution", "Seller Guide"
- **Column 4 — Legal:**
  - Header "LEGAL"
  - Links: "Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"
- **Bottom bar:** `#0a0a0f` background, 24px vertical padding, `1px solid rgba(0,217,255,0.08)` top border.
  - Left: "© 2026 Terrastone. All rights reserved." — Inter 0.75rem `#9ca3af`.
  - Right: "Protected by Terrastone Escrow™" — Inter 0.75rem `#9ca3af`, shield icon in `#00d9ff` 14px.

---

### Hover States (Page 1)

- Nav links: color `#00d9ff`, transition 0.15s ease.
- Primary button: `box-shadow: rgba(0,217,255,0.4) 0px 0px 20px 0px`, translateY(-1px).
- Ghost button: border `rgba(0,217,255,0.8)`, background `rgba(0,217,255,0.05)`.
- Game card: border-color `rgba(0,217,255,0.35)`, `box-shadow: rgba(0,217,255,0.15) 0px 0px 12px 0px`.
- Item card: same as game card hover.
- Footer links: color `#00d9ff`.
- Social icons: color `#00d9ff`.

### Output Requirements (Page 1)

- Viewport width: 1440px.
- Dark mode: yes (all backgrounds dark, never white).
- Show hover states: yes — indicate one hovered CTA button and one hovered item card.
- No placeholder / lorem ipsum text anywhere.
- All copy exactly as specified in sections above.
- Render all 6 footer link columns with real link text.
- Fonts: Cinzel for all headings, Inter for all other text.

---

---

## Page 2: Game Browse Page (Filter + Listings)

### Product Context

A buyer has clicked "World of Warcraft" from the featured games strip and arrived at the game-specific browse page. This page is their main shopping surface. They need to filter items by type, price, delivery time, and seller rating; sort results; and scan item cards quickly to find the best deal. The sidebar is persistent at desktop. The buyer is goal-oriented and price-sensitive — every element must reduce friction. "Verified Sellers Only" and "Instant Delivery" badges on cards are primary trust signals at this stage.

### Visual Style

Same dark gaming aesthetic as the landing page — consistent system. The browse page adds structured utility: sidebar filters, breadcrumb wayfinding, and a dense card grid. Mood: focused, fast, surgical. The user is in "shopping mode" — information density is higher, decorative elements are minimal, and interactivity is foregrounded (every filter selection should feel snappy via the 0.15s transition).

### Color Palette

Identical to Page 1 — see color table above. No new colors introduced.

### Typography

Identical system to Page 1. Additional usage specific to this page:

| Element                    | Font   | Size       | Weight | Color     |
|----------------------------|--------|------------|--------|-----------|
| Breadcrumb links           | Inter  | 0.875rem   | 400    | `#9ca3af` |
| Breadcrumb current page    | Inter  | 0.875rem   | 500    | `#e8e8f0` |
| Filter section headers     | Inter  | 0.7rem     | 500    | `#9ca3af` |
| Filter labels              | Inter  | 0.875rem   | 400    | `#e8e8f0` |
| Listing count              | Inter  | 0.875rem   | 400    | `#9ca3af` |
| Sort dropdown              | Inter  | 0.875rem   | 500    | `#e8e8f0` |
| Pagination numbers         | Inter  | 0.875rem   | 500    | `#e8e8f0` |

### Layout

- Viewport: 1440px wide, dark mode.
- Fixed top nav (identical to Page 1, 64px height).
- Below nav: full-width container (max-width 1440px, 32px horizontal padding).
- **Two-column layout inside container:**
  - Left: fixed sidebar, 280px wide, `top: 64px`, `height: calc(100vh - 64px)`, `position: sticky`, overflow-y auto.
  - Right: main content area, `flex: 1`, `min-width: 0`, left margin 32px from sidebar.

---

### Section-by-Section Detail

#### 1. Navigation Bar

Identical to Page 1. "Browse Games" nav link is in active state: color `#00d9ff`, bottom border `2px solid #00d9ff`.

#### 2. Left Sidebar — Filter Panel

- Background: `#13131a`. Right border: `1px solid rgba(0,217,255,0.1)`. Padding: 24px.
- **Sidebar header row:**
  - "Filters" label: Inter 1rem 600, `#e8e8f0`.
  - "Reset Filters" link on the right: Inter 0.75rem 500, `#00d9ff`. Hover: text-decoration underline.
- 24px gap below header.
- Each filter group separated by a `1px solid rgba(0,217,255,0.08)` divider, 20px vertical gap.

**Filter Group 1 — Item Type**
- Header: "ITEM TYPE" — Inter 0.7rem 500, uppercase, `#9ca3af`, letter-spacing 0.56px.
- 12px gap. Checkboxes with labels (Inter 0.875rem 400, `#e8e8f0`):
  - ☑ Gold & Currency (selected, checkbox `#00d9ff` fill)
  - ☐ Accounts
  - ☐ Boosting Services
  - ☐ Items & Equipment
  - ☐ Power Leveling
- Checkbox: 16px square, `#13131a` background, `1px solid rgba(0,217,255,0.3)`, 4px radius. Checked state: `#00d9ff` background, white checkmark icon.

**Filter Group 2 — Price Range**
- Header: "PRICE RANGE"
- Two inline inputs side by side: "Min $" and "Max $" — each `#0d0d18` background, `1px solid rgba(0,217,255,0.15)`, 8px radius, 8px 12px padding, 0.875rem Inter. Focus: `border-color: #00d9ff`, `box-shadow: rgb(0,217,255) 0px 0px 4px 0px`.
- Below inputs: range slider — track `rgba(0,217,255,0.15)`, filled portion `#00d9ff`, thumb circle 16px `#00d9ff` with white inner dot.
- Current values: "$0" and "$50" displayed below slider in Inter 0.75rem `#9ca3af`.

**Filter Group 3 — Delivery Time**
- Header: "DELIVERY TIME"
- Radio buttons (Inter 0.875rem 400, `#e8e8f0`):
  - ◉ Any time (selected, radio dot `#00d9ff`)
  - ○ Under 15 minutes
  - ○ Under 1 hour
  - ○ Under 24 hours
- Radio: 16px circle, `1px solid rgba(0,217,255,0.3)` border, `#13131a` bg. Selected: `#00d9ff` filled center dot.

**Filter Group 4 — Seller Rating**
- Header: "SELLER RATING"
- Five rows, each a checkbox with star display:
  - ☐ ★★★★★ 5.0 only
  - ☑ ★★★★☆ 4.0 and above (selected)
  - ☐ ★★★☆☆ 3.0 and above
  - ☐ Any rating
- Stars: filled `#ffb800`, empty `#4b5563`, 14px each.

**Filter Group 5 — Additional**
- Header: "EXTRA"
- Two toggle switches (Inter 0.875rem 400, `#e8e8f0`):
  - "Verified Sellers Only" — toggle ON: `#00d9ff` track, white thumb.
  - "Instant Delivery Available" — toggle OFF: `rgba(0,217,255,0.2)` track, `#9ca3af` thumb.

#### 3. Main Content Area

**Breadcrumb (top of main area)**
- "Home" (link, `#9ca3af`) › "Browse" (link, `#9ca3af`) › "World of Warcraft" (current, `#e8e8f0`).
- Inter 0.875rem. Separator "›" in `#9ca3af`. 16px bottom margin.

**Game Banner**
- 16:9 aspect-ratio hero image strip — World of Warcraft artwork, dark and atmospheric.
- Dark overlay gradient: `linear-gradient(rgba(45,27,61,0.9), rgba(29,21,45,0.95) 45%, rgb(19,13,30))`.
- Overlay content left-aligned with 32px padding:
  - Game logo / title "WORLD OF WARCRAFT" — Cinzel 1.875rem 600, `#e8e8f0`.
  - "2,841 listings available" — Inter 0.875rem 400, `#9ca3af`.
  - Two genre chips: "MMORPG" and "Fantasy" — `rgba(74,8,210,0.3)` bg, `#e8e8f0` text, purple border.
- Banner height: 160px.
- Border-radius: 12px.
- Margin-bottom: 24px.

**Sort Bar**
- Full width, flex row, `align-items: center`, `justify-content: space-between`. Height 48px.
- Left: "Showing 142 listings" — Inter 0.875rem 400, `#9ca3af`.
- Center: active filter chips (removable) — "Gold & Currency ×", "4.0+ Rating ×", "Verified ×". Each: `rgba(0,217,255,0.1)` bg, `#00d9ff` text, `1px solid rgba(0,217,255,0.3)`, 16px radius, 0.75rem Inter, 4px 10px padding. "×" on hover: chip background `rgba(0,217,255,0.15)`.
- Right side:
  - Sort dropdown: `#13131a` bg, `1px solid rgba(0,217,255,0.15)`, 8px radius, 10px 16px padding, 0.875rem Inter 500 `#e8e8f0`, arrow chevron `#9ca3af`. Currently showing "Sort: Best Match ▾". Options: "Best Match", "Price: Low to High", "Price: High to Low", "Newest First", "Top Rated".
  - View toggle: two icon buttons (grid icon + list icon) — grid icon active: `rgba(0,217,255,0.15)` bg, `#00d9ff` icon, `1px solid rgba(0,217,255,0.3)`; list icon inactive: `#13131a`, `#9ca3af`.
- Margin-bottom: 24px.

**Item Card Grid**
- 3-column grid, `gap: 24px`.
- Render 6 visible cards (2 rows of 3).
- **Card component (identical spec to landing page item card, but with additional detail):**
  - Background: `#13131a`, border `1px solid rgba(0,217,255,0.15)`, 12px radius, overflow hidden.
  - Hover: `border-color: rgba(0,217,255,0.35)`, `box-shadow: rgba(0,217,255,0.15) 0px 0px 12px 0px`, transition 0.3s.
  - **Thumbnail (3:2 ratio):** item artwork. Top-left: game tag. Top-right: delivery chip.
  - **Body (16px padding):**
    - Item title: Inter 0.9rem 500 `#e8e8f0`, two-line max.
    - Price: Inter 1.25rem 700 `#00d9ff` (monospace for digits).
    - Seller row: 20px avatar circle, Inter 0.75rem 500 `#9ca3af` seller name, gold star rating `#ffb800`, sale count `#9ca3af`.
    - "Verified Seller" badge if applicable: `rgba(34,197,94,0.1)` bg, `#22c55e` text, `1px solid rgba(34,197,94,0.3)`, checkmark icon, 0.75rem, 4px radius.
    - "Add to Cart" ghost button (full width).

- **6 Card Data:**
  1. "25,000 Gold — Draenor Realm" — $11.99 — seller "GoldMine_Pro" ★ 4.9 (521 sales) — ⚡ Instant — Verified
  2. "50,000 Gold — Shadowmoon Server" — $22.50 — seller "ArcaneTrader" ★ 4.8 (312 sales) — ⚡ 15 min — Verified
  3. "Heroic Vault of the Incarnates Boost (x1 boss)" — $8.00 — seller "RaidCarry" ★ 4.7 (88 sales) — ⏱ 2 hours
  4. "WoW Subscription Token (30 days)" — $15.00 — seller "TokenShop" ★ 5.0 (1,204 sales) — ⚡ 5 min — Verified
  5. "Aberrus Mythic Full Clear Carry" — $44.99 — seller "MythicPros" ★ 4.6 (34 sales) — ⏱ 4 hours
  6. "10,000 Gold — Argent Dawn EU" — $4.50 — seller "EUGoldHub" ★ 4.9 (677 sales) — ⚡ 10 min — Verified
  - Card 3 is shown in hovered state: elevated glow, border brightened.

**Pagination Bar**
- Full width, flex row, `justify-content: center`, `gap: 8px`. Margin-top: 48px.
- Prev arrow "‹" (disabled, `#9ca3af`).
- Page numbers: 1 (active: `#00d9ff` background, `#0a0a0f` text, 8px radius, 32px square), 2, 3, 4, 5 (inactive: `#13131a` bg, `#e8e8f0` text, `1px solid rgba(0,217,255,0.15)`), ellipsis "…", 14.
- Next arrow "›" (`#e8e8f0`, hover `#00d9ff`).
- All pagination controls: 32px square, 8px radius, Inter 0.875rem 500.

---

### Hover States (Page 2)

- Filter checkbox on hover: border `rgba(0,217,255,0.5)`, slight background `rgba(0,217,255,0.04)`.
- Filter radio on hover: same.
- Item card (card 3 shown hovered): `box-shadow: rgba(0,217,255,0.15) 0px 0px 12px 0px`, border `rgba(0,217,255,0.35)`.
- "Add to Cart" button hover: border `rgba(0,217,255,0.8)`, background `rgba(0,217,255,0.05)`.
- Sort dropdown hover: border-color `rgba(0,217,255,0.35)`.
- Pagination number hover: background `rgba(0,217,255,0.08)`, color `#00d9ff`.
- "Reset Filters" link hover: text-decoration underline.
- Active filter chip "×" hover: background `rgba(0,217,255,0.15)`.

### Output Requirements (Page 2)

- Viewport width: 1440px.
- Dark mode: yes.
- Show hover states: yes — card 3 is in hovered state, "Add to Cart" on card 1 is hovered.
- Sidebar visible and fully populated with all 5 filter groups.
- All 6 item cards visible.
- No placeholder text anywhere — all copy and data as specified above.
- Navigation bar matches Page 1 exactly, with "Browse Games" link in active state.
- Breadcrumb visible and correct.
- Pagination bar at bottom.
