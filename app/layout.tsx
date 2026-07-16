import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Welcome to ${siteConfig.name}. We offer comprehensive dental services including general, cosmetic, implants, whitening, and 24/7 emergency care. Book your appointment today!`,
  metadataBase: new URL("https://brightsmiledental.com"),
  keywords: ["dental", "dentist", "oral health", "teeth whitening", "implants", "emergency dentist"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmiledental.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: `Professional, friendly dental care in ${siteConfig.address.city}, ${siteConfig.address.state}. Book an appointment online or call us today!`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
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
      longitude: -118.40036,
    },
    url: "https://brightsmiledental.com",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:not-sr-only focus:rounded focus:bg-brand-500 focus:px-4 focus:py-2 focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <StructuredData data={organizationSchema} />
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
