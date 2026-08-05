import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Legal & Compliance Center",
  description: "Legal policies, HIPAA privacy notices, compliance statements, terms, and patient rights documents for Bright Smile Dental.",
  path: "/legal",
});

const legalDocuments = [
  {
    title: "HIPAA Notice of Privacy Practices",
    href: "/hipaa-notice",
    description: "Detailed information on Protected Health Information (PHI) uses, disclosures, patient rights, and legal duties.",
    badge: "HIPAA Compliance",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookie-policy",
    description: "Overview of cookie categories, tracking preferences, third-party analytics, and consent options.",
    badge: "Privacy",
  },
  {
    title: "Medical & Dental Disclaimer",
    href: "/legal/disclaimer",
    description: "Important notice on website informational content, emergency protocols, and doctor-patient relationship terms.",
    badge: "Clinical",
  },
  {
    title: "Copyright Notice",
    href: "/legal/copyright",
    description: "Intellectual property rights, content usage restrictions, branding, and media licensing guidelines.",
    badge: "IP Rights",
  },
  {
    title: "DMCA Takedown Policy",
    href: "/legal/dmca",
    description: "Digital Millennium Copyright Act compliance, copyright infringement notification, and agent contact details.",
    badge: "Copyright",
  },
  {
    title: "Data & Records Retention Policy",
    href: "/legal/data-retention",
    description: "Mandatory record schedules including 10-year clinical records and 7-year financial record retention.",
    badge: "Records",
  },
  {
    title: "AI Usage Disclosure",
    href: "/legal/ai-disclosure",
    description: "Transparency regarding AI tools in imaging, chatbot assistance, and human clinician oversight guarantees.",
    badge: "Technology",
  },
  {
    title: "Accessibility Statement",
    href: "/legal/accessibility",
    description: "WCAG 2.1 AA accessibility features, assistive tool compatibility, and physical facility accommodations.",
    badge: "WCAG 2.1 AA",
  },
  {
    title: "No Medical Advice Policy",
    href: "/legal/no-medical-advice",
    description: "Clarification that online content and chatbot tools do not constitute medical diagnosis or formal consultation.",
    badge: "Clinical",
  },
  {
    title: "Financial Responsibility Agreement",
    href: "/legal/financial-policy",
    description: "Payment terms, insurance claim policies, CareCredit financing options, and missed appointment rules.",
    badge: "Financial",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description: "General website privacy policy covering personal data collection, encryption, and protection standards.",
    badge: "Privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
    description: "Terms and conditions governing the use of brightsmiledental.com website and digital features.",
    badge: "Terms",
  },
];

export default function LegalIndexPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Legal Center", url: "/legal" }]} />

        <div className="mt-6 mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            Legal & Regulatory Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-3">
            Legal & Compliance Center
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Access all official legal documents, privacy notices, compliance statements, and patient rights documentation for Bright Smile Dental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalDocuments.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                    {doc.badge}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-brand-600 transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                  {doc.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-brand-600 flex items-center gap-1">
                Read document
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-brand-900 text-white rounded-2xl p-8 mt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Have a Compliance or Legal Question?</h3>
            <p className="text-brand-200 text-sm max-w-xl">
              Our legal and compliance team is available to assist you with privacy inquiries, medical record requests, or accessibility accommodations.
            </p>
          </div>
          <a
            href="mailto:legal@brightsmiledental.com"
            className="px-6 py-3 bg-white text-brand-900 rounded-xl font-bold hover:bg-brand-50 transition-colors text-sm whitespace-nowrap"
          >
            Contact Legal Officer
          </a>
        </div>
      </div>
    </div>
  );
}
