# Terrastone — Design Document

> Tokens extracted from kingdomofarcane.com (April 19, 2026, 197 elements analyzed).
> All hex values, font names, and spacing units in this document are real extracted values — not placeholders.

---

## 1. Overview

Terrastone is a dark gaming marketplace for in-game enhancements, virtual currency, and digital items. Players buy boosts, skins, and currency for their favourite online games from verified sellers. The platform handles escrow, delivery verification, and dispute resolution.

**Who it's for:** 18–28 year-old PC gamers who want fast, trustworthy transactions without getting scammed. Sellers are semi-pro players or dedicated traders who need a clean, professional dashboard.

**What feeling it should evoke:** The moment you load Terrastone you should feel the same electric readiness as queuing for a ranked match — dark, fast, precise. Everything is credible: prices are real, sellers are verified, and the checkout feels as smooth as any major e-commerce site. Premium without being pretentious; urgent without being aggressive.

**Tagline:** Level up your game. Instantly.

---

## 2. Design Tokens

All values extracted directly from kingdomofarcane.com CSS custom properties and computed styles.

### 2.1 Colors

```css
/* Core backgrounds */
--color-bg:            #0a0a0f;   /* arcane-black — page background */
--color-surface:       #13131a;   /* deep-charcoal — cards, sidebar */
--color-surface-raised:#1a1a2e;   /* midnight-blue — popovers, modals */
--color-surface-input: #0d0d18;   /* auth-input-bg — form inputs */

/* Brand palette */
--color-primary:       #00d9ff;   /* arcane-cyan — primary CTA, links, borders, glow (201 uses) */
--color-primary-dim:   #00b1ff;   /* cyan variant — hover, secondary accents */
--color-accent:        #4a08d2;   /* deep purple — hero gradient, badges */
--color-accent-vivid:  #9333ea;   /* purple-glow — card glows, tags */
--color-accent-blue:   #4a90e2;   /* arcane-blue — info states, chart bars */

/* Text */
--color-text:          #e8e8f0;   /* foreground — primary text */
--color-text-muted:    #9ca3af;   /* muted-foreground — captions, labels */
--color-text-dim:      #c8c8d8;   /* secondary body copy */

/* Utility */
--color-gold:          #ffb800;   /* gold-accent — ratings, premium badges */
--color-gold-bright:   #daa520;   /* border highlight for premium */
--color-destructive:   #ef4444;   /* errors, out-of-stock states */
--color-border:        rgba(0, 217, 255, 0.15); /* --border token from source */
```

### 2.2 Gradients

Brand gradient (hero, CTA backgrounds):
```css
background: linear-gradient(to right in oklab, #00d9ff 0%, #9333ea 100%);
```

Card overlay / dark vignette:
```css
background: linear-gradient(rgba(45, 27, 61, 0.9), rgba(29, 21, 45, 0.95) 45%, rgb(19, 13, 30));
```

Subtle grid pattern (hero background texture):
```css
background-image:
  repeating-linear-gradient(0deg,  #00d9ff 0px, transparent 1px, transparent 60px),
  repeating-linear-gradient(90deg, #00d9ff 0px, transparent 1px, transparent 60px);
```

### 2.3 Typography

Source CSS custom properties: `--font-display: "Cinzel",serif` and `--font-body: "Inter",sans-serif`.

| Token             | Value                          | Notes                        |
|-------------------|--------------------------------|------------------------------|
| `--font-display`  | `"Cinzel", serif`              | Headings, logo, hero titles  |
| `--font-body`     | `"Inter", sans-serif`          | All body copy, UI text       |
| `--font-mono`     | `ui-monospace, "Courier New"`  | Prices, order IDs, code      |

**Type scale:**

| Level | Size   | Weight | Family  | Use                          |
|-------|--------|--------|---------|------------------------------|
| H1    | 3rem   | 700    | Cinzel  | Hero headline                |
| H2    | 2.25rem| 600    | Cinzel  | Section titles               |
| H3    | 1.875rem| 600   | Cinzel  | Card headers, page titles    |
| H4    | 1.5rem | 600    | Cinzel  | Sub-section, modal titles    |
| Large | 1.25rem| 700    | Inter   | Prices, prominent numbers    |
| Body  | 1rem   | 400    | Inter   | Paragraphs, descriptions     |
| Small | 0.875rem| 500   | Inter   | Labels, meta, timestamps     |
| XS    | 0.75rem | 400   | Inter   | Captions, badges, chips      |
| Button| 0.9rem  | 500   | Inter   | All interactive labels (from extraction: 14.4px / 0.9rem) |
| Label | 0.7rem  | 500   | Inter   | Form field labels (from extraction: 11.2px / 0.7rem, letter-spacing 0.56px) |

Letter spacing on buttons and nav links: `1.152px` (extracted from source `<button>` and `<a>` elements).

### 2.4 Spacing

Base spacing unit from CSS custom property `--spacing: 0.25rem` (4px). All spacing values are multiples of 4px.

| Token       | Value  | Rem     |
|-------------|--------|---------|
| `space-1`   | 4px    | 0.25rem |
| `space-2`   | 8px    | 0.5rem  |
| `space-3`   | 12px   | 0.75rem |
| `space-4`   | 16px   | 1rem    |
| `space-6`   | 24px   | 1.5rem  |
| `space-8`   | 32px   | 2rem    |
| `space-12`  | 48px   | 3rem    |
| `space-16`  | 64px   | 4rem    |
| `space-28`  | 112px  | 7rem    |

### 2.5 Border Radii

From extraction: `--radius: 0.5rem`, `--radius-2xl: 1rem`.

| Token      | Value | Use                         |
|------------|-------|-----------------------------|
| `radius-sm`| 6px   | Badges, chips, small buttons|
| `radius-md`| 8px   | Inputs, dropdowns, tabs     |
| `radius-lg`| 12px  | Cards, modals               |
| `radius-xl`| 16px  | Large cards, hero panels    |
| `radius-2xl`| 1rem | Floating CTAs, pills        |

### 2.6 Shadows & Glows

Primary glow (card hover, focused input):
```css
box-shadow: rgba(0, 217, 255, 0.15) 0px 0px 12px 0px;
```

Cyan glow on active/focused element:
```css
box-shadow: rgb(0, 217, 255) 0px 0px 4px 0px;
```

Purple card glow:
```css
box-shadow: rgb(147, 51, 234) 0px 0px 8.7px 0px;
```

Premium/gold focus ring (from button focus state in extraction):
```css
box-shadow:
  rgba(255, 184, 0, 0.8) 0px 0px 0px 2px,
  rgba(0, 0, 0, 0.8)     0px 0px 0px 3px,
  rgba(255, 255, 255, 0.25) 0px 2px 4px 0px inset,
  rgba(0, 0, 0, 0.5)     0px -2px 4px 0px inset,
  rgba(0, 217, 255, 0.4) 0px 0px 20px 0px,
  rgba(0, 0, 0, 0.8)     0px 8px 16px 0px;
```

### 2.7 Transitions

Default UI transitions (from extraction):
```css
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

Card hover and glow transitions:
```css
transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Page/section reveals:
```css
transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. Layout System

### 3.1 Container

Max-width: `1440px`, padding: `32px` on each side (from extraction: container at 1440px with 32px padding).
Centered with `margin: 0 auto`.

Inner content max-width for reading columns: `72rem` (from `--container-6xl: 72rem`).
Auth/modal panels: `28rem` (from `--container-md: 28rem`).

### 3.2 Grid

12-column grid with `gap: 24px` at desktop, `gap: 16px` at tablet.

| Layout zone      | Columns desktop | Columns tablet | Columns mobile |
|------------------|----------------|----------------|----------------|
| Game cards grid  | 4              | 3              | 2              |
| Item listing grid| 3              | 2              | 1              |
| Dashboard content| 8 + 4 sidebar  | 12             | 12             |
| Hero              | 12 (full width)| 12             | 12             |

Column counts from extraction: mobile 2, tablet 3, desktop 6 (games); item cards use 3 at desktop.

### 3.3 Breakpoints

From extraction:

| Name    | Value  | Type      |
|---------|--------|-----------|
| sm      | 639px  | max-width |
| md      | 768px  | min-width |
| lg      | 1024px | min-width |

Add xl at 1280px for layout shifts (standard Next.js/Tailwind).

### 3.4 Navigation

- Fixed top nav, z-index 50
- Background: `#0d0d18` with bottom border `rgba(0, 217, 255, 0.15)` and `transition-shadow duration-300`
- Left: Terrastone logo (Cinzel, `#00d9ff`)
- Center: primary nav links — Browse Games, Sell, How It Works
- Right: Search icon, Cart icon, Sign In / Profile avatar
- On mobile (< 639px): hamburger menu, full-screen overlay drawer

---

## 4. Pages & Key Components

### 4.1 Landing Page

**Hero Section**
- Full-viewport section, background `#0a0a0f`
- Background texture: cyan grid pattern overlay at 5% opacity
- Headline (H1, Cinzel): "Level Up Your Game. Instantly."
- Sub-headline (body, Inter): "Buy in-game boosts, currency, and items from verified sellers. Delivered fast, protected by escrow."
- Two CTAs: primary "Browse Games" + ghost "Sell Your Items"
- Floating hero image: game controller or abstract game artifact on the right half
- Subtle cyan glow emanating from center-right of hero

**Featured Games Strip**
- H2 "Top Games" (Cinzel)
- Horizontal scroll on mobile, 6-column grid at desktop
- Each game card: square thumbnail (1:1), game name (Inter 0.875rem, `#e8e8f0`), item count badge (`#00d9ff` background, `#0a0a0f` text)
- Active game card border: `1px solid #00d9ff`

**Trust Signals Bar**
- 3 or 4 columns: "Escrow Protection", "Verified Sellers", "Instant Delivery", "24/7 Support"
- Icon + label + short description
- Background: `#13131a`, top/bottom border `rgba(0, 217, 255, 0.1)`

**How It Works**
- 3 steps: Browse → Buy → Receive
- Number badge with cyan glow, step title (H4, Cinzel), description (body, Inter, `#9ca3af`)

**Recent Listings**
- H2 "Fresh Listings" (Cinzel)
- 4-column card grid at desktop (see Item Card in §6)
- "View All" link in cyan

**Footer**
- Background `#13131a`
- 4 columns: Logo+tagline, Company links, Support links, Legal
- Bottom bar: `#0a0a0f`, `© 2026 Terrastone. All rights reserved.`
- Text `#9ca3af`, links `#e8e8f0`

---

### 4.2 Game Page (Browse / Filter)

**Layout:** 280px fixed left sidebar + main content area (fluid)

**Sidebar**
- Background `#13131a`
- Section headers (0.7rem, 500 weight, letter-spacing 0.56px, `#9ca3af`, uppercase) — matches extracted label style
- Filters: Item type (checkboxes), Price range (slider), Delivery time (radio), Seller rating (star checkboxes)
- Reset Filters link in cyan
- On mobile: drawer overlay triggered by "Filters" button

**Main Area**
- Breadcrumb: Home › World of Warcraft
- Game banner (16:9 ratio hero image with dark overlay gradient)
- Sort bar: "Showing 142 listings" (muted), Sort dropdown (price/rating/newest), View toggle (grid/list)
- Card grid: 3 columns at desktop, 2 at tablet, 1 at mobile
- Pagination: numbered pages, prev/next arrows, styled with cyan active state

---

### 4.3 Item Detail Page

**Layout:** 60% content + 40% purchase panel (sticky on desktop)

**Content Column**
- Breadcrumb
- Item title (H2, Cinzel)
- Gallery: main image + thumbnail strip
- Description (body, Inter, `#e8e8f0`)
- Delivery details: estimated time, method
- Seller section: avatar, name, rating (gold stars), total sales, join date, "View Seller Profile" link

**Purchase Panel (sticky)**
- Background `#13131a`, border `rgba(0, 217, 255, 0.15)`, `border-radius: 12px`
- Price: large (1.5rem, 700, Inter, `#00d9ff`)
- Quantity selector
- "Add to Cart" — primary button (full width)
- "Buy Now" — ghost button (full width)
- Escrow badge: shield icon + "Protected by Terrastone Escrow"
- Delivery time chip

---

### 4.4 Cart + Checkout

**Cart Page**
- Table layout: Item thumbnail, name, seller, quantity, price, remove
- Order summary card (right): subtotal, platform fee (0%), total, "Proceed to Checkout"
- Buyers pay no fee — reinforce with `#00d9ff` callout

**Checkout Page**
- Left: payment form (Stripe Elements)
  - Input background: `#13131a`, border `rgba(0, 217, 255, 0.15)`, border-radius 8px (matches extracted input styles)
  - Labels: 0.7rem, 500 weight, `#9ca3af`
- Right: order summary (sticky)
- "Complete Purchase" CTA — primary full-width button with gold focus ring on active

---

### 4.5 Buyer Dashboard

**Layout:** Left sidebar nav (220px) + main content

**Sidebar Nav Items:** Overview, Active Orders, Order History, Messages, Settings

**Overview Panel**
- Stat cards: Active Orders, Total Spent, Disputes, Saved Items
- Card background `#13131a`, value (1.5rem, 700, Inter, `#00d9ff`)

**Active Orders Table**
- Columns: Item, Seller, Status badge, Delivery eta, Actions
- Status badges: "Pending" (gold), "In Progress" (cyan), "Delivered" (green `#22c55e`), "Disputed" (red `#ef4444`)

**Order History**
- Searchable, filterable table
- Date range filter, game filter, status filter

---

### 4.6 Seller Dashboard

**Layout:** Left sidebar nav (220px) + main content

**Sidebar Nav Items:** Overview, My Listings, Orders, Earnings, Reviews, Settings, Upgrade to Pro

**Overview Panel**
- Stat cards: Active Listings, Pending Orders, This Month's Earnings, Rating
- Mini earnings chart (uses `--chart-1: #00d9ff`, `--chart-2: #9333ea`, `--chart-3: #ffb800`)

**My Listings Table**
- Columns: Item image, Title, Game, Price, Stock, Status toggle, Edit / Delete actions
- "Add New Listing" primary button top-right

**Add / Edit Listing Form**
- Fields: Game (select), Item type, Title, Description (textarea), Price (USD), Quantity, Delivery time, Images (drag-drop upload)
- Input styles matching extraction: `background: #13131a`, `border: 1px solid rgba(0,217,255,0.15)`, `border-radius: 8px`, `padding: 12px 16px`

**Earnings Panel**
- Date range picker
- Total earned, pending payout, withdrawn
- Payout history table
- "Withdraw Funds" CTA

---

### 4.7 Auth Pages

**Layout:** Centered card, max-width `28rem` (from `--container-md`), background `#0a0a0f` with faint cyan grid texture

**Sign In**
- Logo (Cinzel, `#00d9ff`) centered
- H3 (Cinzel): "Welcome Back"
- Email + Password inputs (background `#0d0d18` per `--auth-input-bg`)
- "Forgot password?" link (cyan)
- "Sign In" — primary button (full width)
- Divider: "or continue with"
- "Continue with Google" — ghost button with Google logo
- Link: "Don't have an account? Sign up"

**Sign Up**
- Same layout
- Fields: Name, Email, Password, Confirm Password
- "Are you a seller?" toggle
- Terms checkbox
- "Create Account" — primary button

**Forgot Password / Reset Password**
- Minimal: just email field + "Send Reset Link"

---

## 5. UX Copy

### Hero

- **Headline:** "Level Up Your Game. Instantly."
- **Subheadline:** "Buy in-game boosts, currency, and items from verified sellers. Delivered fast, protected by escrow."
- **Primary CTA:** "Browse Games"
- **Secondary CTA:** "Start Selling"

### Trust Signals

- "Escrow Protection — Your payment is held until delivery is confirmed."
- "Verified Sellers — Every seller goes through identity and rating checks."
- "Instant Delivery — Most orders delivered in under 30 minutes."
- "24/7 Support — Real help when you need it most."

### CTAs

| Context                  | Copy                          |
|--------------------------|-------------------------------|
| Primary purchase         | "Add to Cart"                 |
| Express purchase         | "Buy Now"                     |
| Seller onboarding        | "Start Selling for Free"      |
| Listing creation         | "Post a Listing"              |
| Dashboard upgrade prompt | "Upgrade to Seller Pro"       |
| Empty cart               | "Your cart is empty"          |
| Empty listings           | "No listings yet. Post your first item." |

### Empty States

- **No results for filter:** "No items found. Try adjusting your filters or browse a different game."
- **Empty order history:** "No orders yet. Ready to level up?"
- **Empty earnings:** "Your first sale is just one listing away."
- **Empty messages:** "No messages yet."

### Errors

- **Payment failed:** "Payment failed. Please check your card details or try a different payment method."
- **Out of stock:** "This item is no longer available. The seller may have sold out."
- **Delivery overdue:** "Your item is taking longer than expected. Contact the seller or open a dispute."
- **Login failed:** "Incorrect email or password. Please try again."
- **Form validation:** "This field is required." / "Please enter a valid email address."

---

## 6. Component Notes

### Buttons

Three variants:

**Primary** — solid cyan background
```css
background: #00d9ff;
color: #0a0a0f;        /* --primary-foreground */
font-size: 0.9rem;     /* 14.4px — extracted */
font-weight: 500;
letter-spacing: 1.152px; /* extracted from button elements */
border-radius: 6px;
padding: 10px 20px;
```
Hover: box-shadow `rgba(0, 217, 255, 0.4) 0px 0px 20px 0px`; transform translateY(-1px).

**Ghost** — transparent with cyan border
```css
background: transparent;
color: #00d9ff;
border: 1px solid rgba(0, 217, 255, 0.4);
/* Same font, radius, padding as primary */
```
Hover: border opacity to 0.8, subtle background `rgba(0, 217, 255, 0.05)`.

**Danger / Destructive**
```css
background: #ef4444;
color: #fff;
```

Focus ring on all buttons (matches extracted focus state):
```css
box-shadow:
  rgba(255, 184, 0, 0.8) 0px 0px 0px 2px,
  rgba(0, 0, 0, 0.8) 0px 0px 0px 3px,
  rgba(0, 217, 255, 0.4) 0px 0px 20px 0px;
```

### Cards (Item Cards)

```css
background: #13131a;             /* --card */
border: 1px solid rgba(0, 217, 255, 0.15);
border-radius: 12px;
overflow: hidden;
transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
Hover:
```css
box-shadow: rgba(0, 217, 255, 0.15) 0px 0px 12px 0px;
border-color: rgba(0, 217, 255, 0.35);
```

Card anatomy: thumbnail (top, aspect-ratio 3:2), tag chip (game name), title (Inter 500), price (Inter 700, `#00d9ff`), seller row (avatar 20px, name, rating stars), "Add to Cart" ghost button.

### Inputs

```css
background: #13131a;             /* --input-background */
color: #e8e8f0;
border: 1px solid rgba(0, 217, 255, 0.15);
border-radius: 8px;
font-size: 14px;
padding: 12px 16px;
```
Focus:
```css
border-color: #00d9ff;
box-shadow: rgb(0, 217, 255) 0px 0px 4px 0px;
outline: none;
```
Placeholder color: `#9ca3af`.

### Badges

Game tag / category chip:
```css
background: rgba(74, 8, 210, 0.3);  /* #4a08d2 at 30% */
color: #e8e8f0;
border: 1px solid rgba(74, 8, 210, 0.5);
border-radius: 6px;
font-size: 0.75rem;
padding: 2px 8px;
```

Cyan info chip (delivery time, item type):
```css
background: rgba(0, 217, 255, 0.1);
color: #00d9ff;
border: 1px solid rgba(0, 217, 255, 0.3);
```

### Ratings (Stars)

Star color: `#ffb800` (from `--gold-accent`).
Empty star: `#4b5563`.
Display as SVG icons at 14px with `currentColor`.

### Status Chips

| Status      | Background                   | Text      |
|-------------|------------------------------|-----------|
| Pending     | `rgba(255, 184, 0, 0.15)`    | `#ffb800` |
| In Progress | `rgba(0, 217, 255, 0.15)`    | `#00d9ff` |
| Delivered   | `rgba(34, 197, 94, 0.15)`    | `#22c55e` |
| Disputed    | `rgba(239, 68, 68, 0.15)`    | `#ef4444` |
| Cancelled   | `rgba(107, 114, 128, 0.15)`  | `#6b7280` |

---

## 7. Tone & Atmosphere

Terrastone should feel like the best item shop in the game — familiar to any gamer, immediately trustworthy, and visually thrilling without being chaotic. The dark near-black canvas (`#0a0a0f`) lets the electric cyan and deep purple breathe. Every glowing border and hover effect communicates precision and activity, not decoration. The Cinzel typeface on headings signals that this platform takes gaming seriously — it's premium, not bargain-bin — while Inter keeps the actual trading interface fast to read and navigate.

---

## 8. Competitor Reference

Extracted design tokens: `/designs/kingdomofarcane-com-design-language.md`

**Patterns to adopt from kingdomofarcane.com:**
- Color system: `#0a0a0f` base, `#00d9ff` primary, `#9333ea` accent — direct match to Terrastone brief
- CSS custom property naming convention (`--arcane-cyan`, `--deep-charcoal`, etc.) — rename with `--ts-` prefix for Terrastone
- Font pairing: Cinzel (headings) + Inter (body) — adopt exactly
- Cyan glow box-shadows on interactive elements — adopt for hover/focus states
- Dark card surface (`#13131a`) with transparent cyan borders — adopt for all card components
- Repeating grid texture as hero background element
- Nav: fixed top with `#0d0d18` bg + bottom border `rgba(0,217,255,0.15)`

**Patterns to improve vs. kingdomofarcane.com:**
- Accessibility: source scored 17% WCAG (43 failures). Terrastone must pass WCAG AA. Use `#e8e8f0` on `#0a0a0f` (16.21:1 — AAA) for all body text. Avoid placing `#e8e8f0` on cyan backgrounds (1.39:1 — fails). Keep cyan only for decorative borders and icon colors.
- Spacing: source had no consistent spacing base unit. Terrastone uses strict 4px base (0.25rem) with defined tokens.
- Shadow scale: source had 42 unique shadows. Terrastone uses 3 levels: `glow-sm` (4px cyan), `glow-md` (12px cyan at 15%), `glow-lg` (20px cyan at 40%).
- Typography scale: source had 7 sizes with no clear hierarchy. Terrastone defines a named scale (H1–H4 + Body + Small + XS + Button + Label).

**Other references from brief:**
- gameflip.com — clean marketplace card patterns, filter UX
- g2g.com — seller verification trust signals, delivery time display
