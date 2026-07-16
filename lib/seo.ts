import { siteConfig } from "./data";
import type { Metadata } from "next";

interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: SEOParams): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const desc =
    description ||
    "Comprehensive dental care in Springfield, CA. Cosmetic dentistry, implants, Invisalign, emergency dentistry, and more. Call (555) 123-4567 to book your appointment.";

  const url = `https://brightsmiledental.com${path}`;

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "dentist",
      "dental",
      "cosmetic dentistry",
      "dental implants",
      "Invisalign",
      "teeth whitening",
      "emergency dentist",
      "family dentistry",
      "Springfield dentist",
      "veneers",
      "root canal",
    ],
    metadataBase: new URL("https://brightsmiledental.com"),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      type: type as "website",
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// JSON-LD structured data generators
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: "Comprehensive dental care including cosmetic dentistry, implants, Invisalign, and emergency dentistry.",
    url: "https://brightsmiledental.com",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0901,
      longitude: -118.4006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    priceRange: "$$",
  };
}

export function serviceSchema(title: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: title,
    description,
    url: `https://brightsmiledental.com/services/${slug}`,
    provider: {
      "@type": "Dentist",
      name: siteConfig.name,
    },
  };
}

export function dentistSchema(name: string, title: string, bio: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    jobTitle: title,
    description: bio,
    medicalSpecialty: "Dentistry",
    worksFor: {
      "@type": "Dentist",
      name: siteConfig.name,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
