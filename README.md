# ATELIER NOIR — Full-Stack Vercel Store

This package expands the original frontend into a Vercel-ready full-stack starter.

## Included

### Frontend
- Editorial luxury storefront
- Responsive mobile/desktop layout
- Product catalog
- Category filtering
- Quick-view modal
- Shopping bag
- Stripe checkout button
- Success/cancel pages

### Backend
- Next.js Route Handlers
- Product API
- Checkout API
- Stripe webhook
- Admin login
- Admin product CRUD
- Admin order API

### Database
Prisma + PostgreSQL:
- Product
- Order
- OrderItem
- Inventory stock
- Order status

## Required services

The application code is included, but external services still need your own accounts/credentials:

1. GitHub — source repository
2. Vercel — hosting
3. PostgreSQL — database (Neon, Supabase Postgres, Vercel Postgres-compatible provider, etc.)
4. Stripe — real payments

## Environment variables

Copy `.env.example` to `.env.local` for local development.

On Vercel add:

```text
DATABASE_URL
ADMIN_PASSWORD
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_SITE_URL
```

Never commit `.env.local`.

## Database setup

After creating your PostgreSQL database:

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
```

For production deployments, you can use Prisma migrations instead:

```bash
npx prisma migrate dev --name init
```

Then deploy with:

```bash
npm run build
```

The build script automatically runs `prisma generate`.

## Vercel

1. Upload this project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables.
4. Deploy.
5. Run the database schema setup against your production PostgreSQL database.
6. Run the seed once if you want the starter products.

## Stripe

Create Stripe API keys.

Set:

```text
STRIPE_SECRET_KEY=...
```

Then create a Stripe webhook pointing to:

```text
https://YOUR-DOMAIN/api/webhooks/stripe
```

Listen for:

```text
checkout.session.completed
```

Put the webhook signing secret into:

```text
STRIPE_WEBHOOK_SECRET=...
```

The webhook changes the corresponding database order from PENDING to PAID.

## Admin

Open:

```text
/admin
```

Use the password stored in:

```text
ADMIN_PASSWORD
```

The admin dashboard can:
- add products
- hide/show products
- delete products
- view the store

The backend also exposes `/api/admin/orders` for authenticated admin order data.

## Important production upgrades

This is a strong full-stack starter, but a serious commercial store should additionally add:
- customer accounts
- passwordless/email authentication
- image storage such as S3/Cloudinary
- shipping address collection
- shipping/tax calculation
- refund handling
- stock reservation/transaction locking
- email confirmations
- rate limiting
- CAPTCHA/bot protection
- audit logs
- richer admin roles
- product variants/SKU table
- legal pages
- privacy/cookie consent
- analytics

The current Stripe flow uses Stripe Checkout so card/payment data does not pass through your Next.js application.

## Design source

The visual direction follows the supplied ATELIER NOIR design file: warm greige canvas, obsidian black, champagne gold, Bodoni Moda for editorial headlines, Hanken Grotesk for UI, architectural 0px containers, hairline borders, and the specified product/cart patterns.

## Image licensing

Starter product images use remote Unsplash URLs. Replace them with product photography you own or have permission to use before a commercial launch.