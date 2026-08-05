import { siteConfig } from "./data";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brightsmiledental.com";

export interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Helper to build canonical URL from relative or absolute path
 */
export function generateCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * Helper to build OpenGraph metadata object
 */
export function generateOpenGraph({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: SEOParams) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description || `${siteConfig.name} — Comprehensive dental care in Springfield, CA.`;
  const url = generateCanonicalUrl(path);

  return {
    title: fullTitle,
    description: desc,
    url,
    siteName: siteConfig.name,
    locale: "en_US",
    type,
    images: [
      {
        url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
        width: 1200,
        height: 630,
        alt: title || siteConfig.name,
      },
    ],
    ...(type === "article" && {
      publishedTime,
      modifiedTime,
      authors,
    }),
  };
}

/**
 * Helper to build Twitter card metadata object
 */
export function generateTwitterCard({
  title,
  description,
  image = "/images/og-image.jpg",
}: SEOParams) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description || `${siteConfig.name} — Comprehensive dental care in Springfield, CA.`;

  return {
    card: "summary_large_image" as const,
    title: fullTitle,
    description: desc,
    images: [image.startsWith("http") ? image : `${BASE_URL}${image}`],
    creator: "@brightsmiledental",
  };
}

/**
 * Primary Next.js generateMetadata function
 */
export function generateMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: SEOParams): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const desc =
    description ||
    "Comprehensive dental care in Springfield, CA. Cosmetic dentistry, implants, Invisalign, emergency dentistry, and more. Call (555) 123-4567 to book your appointment.";

  const canonical = generateCanonicalUrl(path);

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
    metadataBase: new URL(BASE_URL),
    alternates: { canonical },
    openGraph: generateOpenGraph({ title, description, path, image, type, publishedTime, modifiedTime, authors }),
    twitter: generateTwitterCard({ title, description, image }),
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
    "@type": ["Dentist", "MedicalBusiness", "Organization"],
    name: siteConfig.name,
    alternateName: "Bright Smile Dental Care",
    description: "Comprehensive dental care including cosmetic dentistry, implants, Invisalign, and emergency dentistry.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
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
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ],
  };
}

export function serviceSchema(title: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: title,
    description,
    url: `${BASE_URL}/services/${slug}`,
    provider: {
      "@type": "Dentist",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
  };
}

export function dentistSchema(name: string, title: string, bio: string, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    jobTitle: title,
    description: bio,
    image: image ? (image.startsWith("http") ? image : `${BASE_URL}${image}`) : undefined,
    medicalSpecialty: "Dentistry",
    worksFor: {
      "@type": "Dentist",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
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
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: authorName
      ? {
          "@type": "Person",
          name: authorName,
        }
      : {
          "@type": "Organization",
          name: siteConfig.name,
        },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: image ? (image.startsWith("http") ? image : `${BASE_URL}${image}`) : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`,
    },
  };
}

export function reviewSchema(reviews: { author: string; rating: number; reviewBody: string; datePublished?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.reviewBody,
      datePublished: r.datePublished || "2026-01-01",
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
    name: siteConfig.name,
    image: `${BASE_URL}/images/office.jpg`,
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
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Insurance, CareCredit, FSAs/HSAs",
    currenciesAccepted: "USD",
  };
}
