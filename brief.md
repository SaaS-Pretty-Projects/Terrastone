# 02-04 — Terrastone Game Marketplace

## [RU] Business Narrative
Terrastone — это онлайн-маркетплейс для торговли внутриигровыми улучшениями, виртуальной валютой и цифровыми предметами. Игроки покупают бусты, скины, валюту и услуги для любимых онлайн-игр у проверенных продавцов. Платформа берёт на себя эскроу, проверку доставки и разрешение споров — устраняя трение в peer-to-peer торговле игровыми предметами.

С точки зрения бизнеса — это маркетплейс с комиссионной моделью. Покупатель получает предмет, продавец получает оплату минус комиссия платформы (8%). Доверие и скорость — главные ценности: покупатель знает, что не будет обманут, продавец знает, что получит деньги. За счет объема транзакций и опциональной подписки для продавцов (Seller Pro) формируется устойчивая выручка.

---

## [EN] Summary
Terrastone is a marketplace for in-game enhancements, virtual currency, and digital game items. Players buy boosts, skins, currency, and services for their favourite online games from verified sellers. The platform handles escrow, delivery verification, and dispute resolution — removing friction from peer-to-peer game item trading.

## Brand
Name: Terrastone
Domain: terrastone.gg (or terrastone.com)
Tagline: Level up your game. Instantly.

## MVP Scope
In scope for v1:
- Game category listing (select a game, see available items)
- Item listings with price, delivery time, seller rating
- Cart + checkout (Stripe)
- Seller dashboard (list items, track orders)
- Buyer order tracking
- Basic search / filter by game + item type

Out of scope (v2):
- Auction system
- Subscription seller plans
- API for third-party game integrations
- Mobile app

## Key Pages / Screens
1. Landing page — hero, featured games, trust signals, CTA
2. Game page — filter/browse items for one game
3. Item detail — description, seller info, buy button
4. Cart + Checkout — Stripe payment flow
5. Buyer dashboard — order history, active orders
6. Seller dashboard — list items, manage listings, earnings
7. Auth pages — signup / login

## Design Direction
Style: Dark gaming marketplace — deep backgrounds, electric accent colors, card-based layout
Tone: Fast, trusted, premium-adjacent (not cheap, not enterprise)
References: kingdomofarcane.com, gameflip.com, g2g.com
Color mood: Deep dark near-black (#0a0a0f) + cyan electric accent (#00d9ff) + purple (#4a08d2)

## Personas
**Primary:** 18-28yo PC gamer, plays competitive online games daily, wants to buy currency or boosts quickly without getting scammed, pays via card
**Secondary:** Semi-pro player, sells excess in-game items for income, needs a clean dashboard to manage listings and track earnings

## Pricing (Platform fee model)
Free for buyers
Sellers: 8% platform fee per transaction (deducted from payout)
Seller Pro: $9.99/mo — lower fee (5%), featured listings, priority support

## Tech Stack
Auth: Supabase (email + OAuth with Google)
DB: Postgres via Supabase
Deployment: Vercel
Payments: Stripe (Connect for seller payouts)
Framework: Next.js 14 App Router
Styling: Tailwind CSS

## Launch Success Metric
Definition of "Launched": first real transaction between a buyer and seller completes (real money, real item delivered, both parties satisfied)
