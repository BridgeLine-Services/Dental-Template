# Bright Smile Dental — Website Template

A production-ready dental practice website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features 60+ pages, a patient portal, admin dashboard, live chat, online payments, and full HIPAA compliance.

## Live Demo

Deploy to Vercel in one click: [Deploy](https://vercel.com/new)

## Features

### Patient-Facing
- **Home page** with hero, services grid, dentist profiles, reviews, gallery preview, FAQ, special offers, and office info
- **20 service pages** with detailed descriptions, benefits, procedure info, recovery timelines, and pricing
- **4 dentist profile pages** with bios, education, certifications, and reviews
- **Blog** with 8 SEO-optimized articles and dynamic slug routing
- **Gallery** with before/after smile transformations
- **FAQ** with categorized answers
- **Special Offers** page with active promotions
- **Online Booking** — 4-step wizard with real-time availability checking
- **Contact** form with live submission to backend
- **Emergency** page with 24/7 info

### Interactive Tools
- **Smile Assessment** — 7-question quiz with personalized treatment recommendations
- **Cost Estimator** — estimate out-of-pocket costs based on insurance type
- **Insurance Verification** — check if your insurance is accepted
- **Virtual Consultations** — telehealth booking info page

### Patient Portal
- **Login / Register** with session persistence
- **Dashboard** with appointment stats and quick links
- **Appointments** view (upcoming + history)
- **Digital Forms** — new patient registration, medical history, HIPAA & treatment consent
- **Secure Messaging** — chat interface with the dental office
- **Consent Forms** — treatment, HIPAA, financial responsibility, photography (digital signature)

### Admin Dashboard
- **Overview** with live stats (appointments, patients, reviews, messages)
- **Appointments** management with status updates
- **Patients** directory
- **Reviews** moderation (approve/reject)
- **Blog** post management
- **Services** and **Dentists** management
- **Settings** page

### Compliance & Legal
- HIPAA Privacy Notice
- Privacy Policy
- Terms of Service
- Accessibility Statement
- Cookie Consent banner (GDPR/CCPA)

### Payments
- Stripe checkout integration for online payments
- Payment success / cancelled pages

### SEO
- JSON-LD structured data (LocalBusiness, Dentist schema)
- Dynamic sitemap.xml with all routes
- robots.txt (admin/portal blocked)
- Open Graph meta tags
- Semantic HTML with ARIA labels

### Backend (Base44 Platform)
- 14 entity schemas: Patient, Appointment, Provider, Service, Review, BlogPost, SpecialOffer, GalleryItem, FAQItem, InsurancePlan, NewsletterSubscriber, PatientForm, Treatment, InventoryItem, ContactMessage
- 8 deployed backend functions: bookAppointment, submitContactForm, submitReview, newsletterSignup, getDashboardStats, verifyInsurance, submitPatientForm, createPaymentSession
- 3 automation workflows: appointment confirmation, daily reminders, post-visit follow-up survey

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React, React Icons |
| Backend | Base44 (serverless functions + MongoDB) |
| Payments | Stripe |
| Deployment | Vercel |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/BridgeLine-Services/Dental-Template.git
cd Dental-Template/dental-template

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
dental-template/
├── app/                    # Next.js App Router pages
│   ├── (public)/           # Public-facing pages
│   ├── admin/              # Admin dashboard
│   ├── portal/             # Patient portal
│   ├── services/           # 20 service pages
│   ├── blog/               # Blog with dynamic routes
│   ├── dentists/           # Dentist profiles
│   ├── booking/            # Online booking wizard
│   ├── payment/            # Stripe payment
│   ├── consent-forms/      # Digital consent forms
│   ├── hipaa-notice/       # HIPAA compliance
│   └── ...
├── components/
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer
│   ├── shared/             # LiveChat, CookieConsent, ServiceDetail, StructuredData
│   └── ui/                 # Button, Card, Badge
├── lib/
│   ├── api.ts              # Base44 API client
│   ├── data.ts             # Static data (services, dentists, blog posts, config)
│   ├── seo.ts              # SEO metadata helper
│   └── utils.ts            # Utility functions
└── public/                # Static assets
```

## Customization

### Brand Colors
Update the `brand` color palette in `tailwind.config.ts` to match your practice's branding.

### Practice Information
Edit `lib/data.ts` to update:
- Practice name, phone, email, address
- Office hours
- Services and pricing
- Dentist profiles
- Blog posts
- FAQ entries

### Backend Integration
The frontend connects to Base44 backend functions. Update the API base URL in `lib/api.ts` if using a different backend.

### Stripe Payments
Set the `STRIPE_SECRET_KEY` environment variable to enable online payments.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Set the root directory to `dental-template`
4. Deploy

### Environment Variables
| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe API key for payment processing |

## License

MIT License — free to use for any dental practice.
