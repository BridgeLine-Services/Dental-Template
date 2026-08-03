import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import LiveChat from "@/components/shared/LiveChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bright Smile Dental | Your Smile, Our Passion",
    template: "%s | Bright Smile Dental",
  },
  description:
    "Comprehensive dental care in Springfield, CA. Cosmetic dentistry, implants, Invisalign, emergency dentistry, and more. New patients welcome! Call (555) 123-4567.",
  keywords: [
    "dentist Springfield CA",
    "cosmetic dentistry",
    "dental implants",
    "Invisalign",
    "teeth whitening",
    "emergency dentist",
    "pediatric dentistry",
    "veneers",
  ],
  openGraph: {
    title: "Bright Smile Dental | Your Smile, Our Passion",
    description: "Comprehensive dental care in Springfield, CA. New patients welcome!",
    type: "website",
    locale: "en_US",
    siteName: "Bright Smile Dental",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Smile Dental | Your Smile, Our Passion",
    description: "Comprehensive dental care in Springfield, CA. New patients welcome!",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-100 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <LiveChat />
      </body>
    </html>
  );
}
