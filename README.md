# Bright Smile Dental — Production Template

A premium, production-ready dental practice platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **NextAuth 5**, and **Prisma 6** (PostgreSQL). Designed for agencies selling dental websites at $2,500–$10,000+ per deployment.

## Live Demo

[View deployed site](https://dental-template.vercel.app)

## What's Included

### Architecture
- **Next.js 16** (App Router, Turbopack)
- **NextAuth 5** — credentials + Google OAuth, JWT sessions, 30-min auto-logout
- **Prisma 6** + **PostgreSQL** — 30+ models with migrations and seed scripts
- **Tailwind CSS** with custom brand theme
- **TypeScript** strict mode throughout
- **Zod** validation on all API inputs

### Security & Compliance
- Rate limiting (token-bucket per IP)
- CSRF token protection
- Input sanitization (HTML stripping, JS protocol removal)
- 6-role RBAC (Super Admin, Admin, Dentist, Hygienist, Receptionist, Patient)
- Audit logging (all PHI access)
- Breach logging
- PHI redaction utilities
- Security headers in `next.config.js`:
  - Content-Security-Policy
  - Strict-Transport-Security (HSTS)
  - X-Frame-Options: DENY
  - Permissions-Policy
  - Referrer-Policy
  - X-Content-Type-Options
- HIPAA Notice of Privacy Practices
- Automatic session expiration

### API Layer (36+ Routes)
```
/api/appointments     /api/patients         /api/reviews
/api/contact          /api/newsletter       /api/offers
/api/providers        /api/insurance-plans  /api/insurance/verify
/api/faq              /api/gallery          /api/membership/plans
/api/membership/enroll /api/referrals       /api/waitlist
/api/payments/create-session /api/consent   /api/forms/submit
/api/blog/[slug]      /api/services         /api/analytics
/api/auth/[...nextauth] /api/portal         /api/billing
/api/documents        /api/messages         /api/settings
/api/health           /api/sitemap          /api/health-records
```

### Patient Portal (7 Pages)
- Dashboard — upcoming appointments, balance, quick actions
- Appointments — view, cancel, request reschedule
- Forms — digital intake, medical history, consent forms
- Messages — secure messaging with the practice
- Documents — secure upload/download (HIPAA)
- Billing — balance, payment history, pay now
- Settings — profile, security, notifications, privacy

### Production Forms (6 Pages)
- New Patient Registration (4-step wizard)
- Medical History
- Treatment Consent
- X-Ray Consent
- Financial Policy Acknowledgment
- Insurance Assignment

### Dental Business Features (9 Pages)
- Membership Plans — in-house savings program
- Referral Program — $50 credit for referring friends
- Waitlist — cancellation fill-in system
- Financing Calculator — CareCredit, Cherry, Sunbit + HSA/FSA
- Online Check-In — pre-appointment check-in
- Staff Directory — dentist & hygienist profiles
- Office Tour — virtual tour gallery
- Multi-Location — multiple practice support
- AI Receptionist — 24/7 AI chat assistant demo

### Legal & Compliance (10 Pages)
- HIPAA Notice of Privacy Practices
- Accessibility Statement
- Cookie Policy
- Data Retention Policy
- AI Disclosure
- Disclaimer
- No Medical Advice Disclaimer
- Copyright Notice
- DMCA Policy
- Financial Policy

### SEO (7 Schema Components)
- Organization schema
- LocalBusiness schema
- Service schema (per service page)
- Dentist/Physician schema
- FAQ schema
- Breadcrumb schema
- Review schema
- Sitemap.xml + robots.txt
- Canonical URLs, OpenGraph, Twitter cards

### Accessibility
- SkipLink component
- AccessibilityWidget (font size, high contrast, reduced motion, dyslexia font)
- AriaLive region for announcements
- Keyboard navigation support
- ARIA landmarks throughout

### CI/CD Workflows (16 GitHub Actions)
1. Node.js CI — build & test on every PR
2. CodeQL — security analysis
3. Lighthouse — performance, accessibility, SEO, best practices
4. Playwright — end-to-end testing
5. axe-core — automated accessibility testing
6. Dependency Review — vulnerability checks
7. Secret Scanning — prevent leaked API keys
8. Bundle Analysis — detect oversized JS bundles
9. Link Checker — broken link detection
10. Sitemap Validation
11. Schema Validation — JSON-LD structured data
12. Spell Check — cspell
13. Docker Build Test
14. Preview Deploy Validation
15. Security Headers Test
16. Performance Budget

### Performance
- Static generation (SSG) for 132 pages
- Image optimization (AVIF/WebP)
- Font optimization
- Code splitting
- Service worker + offline page
- Web manifest

### Database (30+ Prisma Models)
User, Account, Session, VerificationToken, RefreshToken,
Patient, Provider, Service, Appointment, Treatment,
Review, PatientForm, ConsentRecord, PatientDocument,
SecureMessage, ContactMessage, AuditLog, BreachLog,
BlogPost, SpecialOffer, GalleryItem, FAQItem,
InsurancePlan, NewsletterSubscriber, InventoryItem,
MembershipPlan, MembershipEnrollment, Referral,
WaitlistEntry, Payment, Invoice

### DevOps
- Dockerfile + .dockerignore
- vercel.json (deployment config)
- prisma/seed.ts (demo data)
- scripts/backup.sh (PostgreSQL backup)
- lib/db/queries.ts (typed query helpers)
- lib/db/transactions.ts (transaction wrappers)

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/BridgeLine-Services/Dental-Template.git
cd Dental-Template

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL, NextAuth secret, Stripe keys, etc.

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database with demo data
npx prisma db seed

# Start the development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dental"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-oauth-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-secret"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

## Deployment

### Vercel (Recommended)
1. Import the repository on [vercel.com](https://vercel.com)
2. Add environment variables
3. Deploy — Vercel auto-detects Next.js

### Docker
```bash
docker build -t dental-template .
docker run -p 3000:3000 dental-template
```

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Auth | NextAuth 5 (Auth.js) |
| Database | PostgreSQL + Prisma 6 |
| Validation | Zod |
| Payments | Stripe |
| Testing | Playwright, axe-core |
| CI/CD | GitHub Actions (16 workflows) |
| Containerization | Docker |
| Deployment | Vercel |

## License

This template is licensed for use by BridgeLine Services. See LICENSE for details.

## Repository

[github.com/BridgeLine-Services/Dental-Template](https://github.com/BridgeLine-Services/Dental-Template)
