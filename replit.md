# Calgary Soft Water Calgary

A high-converting, multi-page water treatment company website for Calgary Soft Water, serving Calgary and surrounding Alberta communities.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/water-treatment run dev` — run the frontend (port 22472)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (auto-provisioned)

## Email Setup (optional)

To enable auto email replies, set these environment secrets:
- `SMTP_HOST` — your SMTP server (e.g. smtp.gmail.com)
- `SMTP_PORT` — SMTP port (587 for TLS, 465 for SSL)
- `SMTP_USER` — SMTP username/email
- `SMTP_PASS` — SMTP password or app password
- `FROM_EMAIL` — sender email address
- `ADMIN_EMAIL` — where to receive lead notifications

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, wouter routing, Framer Motion animations, shadcn/ui
- API: Express 5 with full REST API
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- Email: Nodemailer (SMTP-configurable, graceful fallback if not configured)
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/` — Database tables (contacts, quotes, testimonials, products, faqs, blog_posts)
- `artifacts/api-server/src/routes/` — All API route handlers
- `artifacts/api-server/src/lib/email.ts` — Email service (auto-replies + admin notifications)
- `artifacts/water-treatment/src/pages/` — All frontend pages
- `artifacts/water-treatment/src/components/layout/` — Navbar, Footer, FloatingCall

## Pages

- `/` — Home (hero, stats, services, testimonials, blog preview, CTA)
- `/well-water-systems` — Well water treatment systems
- `/water-softeners` — Water softener systems
- `/water-filtration` — Whole-home filtration
- `/reverse-osmosis` — RO drinking water systems
- `/uv-purification` — UV disinfection systems
- `/services` — Services overview
- `/about` — About us
- `/contact` — Contact form
- `/quote` — Free quote request form
- `/blog` — Blog listing
- `/blog/:id` — Blog post detail

## API Endpoints

- `POST /api/contact` — Contact form submission + auto email reply
- `POST /api/quotes` — Quote request + auto email reply
- `GET /api/quotes` — List all quote submissions
- `GET /api/testimonials` — Customer testimonials
- `GET /api/products?category=` — Products/services list
- `GET /api/products/:id` — Single product
- `GET /api/faqs?category=` — FAQ list
- `GET /api/blog-posts` — Blog posts
- `GET /api/blog-posts/:id` — Single blog post
- `GET /api/stats` — Homepage stats

## Architecture decisions

- Presentation-first frontend with full backend for lead capture and email
- Email configured via environment variables with graceful no-op fallback when not set
- All forms use react-hook-form + zod for robust client-side validation
- Products/FAQs seeded in database (not hardcoded) for easy admin management
- SEO component on each page with unique title and meta description

## Product

Calgary Soft Water is a Calgary-based water treatment company (founded 2008) offering well water systems, water softeners, filtration, reverse osmosis, and UV purification. The website is designed for high conversion — lead capture via quote forms, contact forms, phone CTA, and auto email reply sequences.

## Service Area

Calgary, Airdrie, Cochrane, Okotoks, Chestermere, Strathmore, Canmore, Banff, High River, Rocky View County, Foothills County, Wheatland County, Mountain View County.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Email auto-replies are silently skipped if SMTP env vars are not set — no error thrown
- Array columns in Drizzle use `.array()` method: `text("tags").array()`
- Run codegen after every OpenAPI spec change before using updated hooks

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
