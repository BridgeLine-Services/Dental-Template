import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Data Retention Policy",
  description: "Data Retention Policy for Bright Smile Dental — mandatory retention timelines including 10-year adult patient records and 7-year financial documents.",
  path: "/legal/data-retention",
});

export default function DataRetentionPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Data Retention Policy", url: "/legal/data-retention" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Records Management
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Data & Records Retention Policy
            </h1>
            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2026 | Compliant with California Dental Board & HIPAA Standards
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Policy Overview</h2>
              <p>
                Bright Smile Dental adheres to strict record retention schedules for clinical, financial, and administrative data in full compliance with the Dental Board of California, HIPAA, OSHA, IRS, and federal health privacy guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Summary Schedule of Retention Periods</h2>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Record Category</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Retention Period</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Statutory / Regulatory Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">Adult Clinical Patient Records</td>
                      <td className="px-4 py-3 text-brand-700 font-bold">10 Years</td>
                      <td className="px-4 py-3 text-xs text-gray-600">10 years from the date of last patient treatment/service.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">Minor Patient Records (Pediatric)</td>
                      <td className="px-4 py-3 text-brand-700 font-bold">Age 28 (10 yrs past age 18)</td>
                      <td className="px-4 py-3 text-xs text-gray-600">10 years after the minor reaches age 18 (at least 7-10 yrs post-majority).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">Financial & Billing Records</td>
                      <td className="px-4 py-3 text-brand-700 font-bold">7 Years</td>
                      <td className="px-4 py-3 text-xs text-gray-600">7 years for tax, insurance, claims, payment receipts, and audit compliance.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">Digital X-Rays & Imaging</td>
                      <td className="px-4 py-3 text-brand-700 font-bold">10 Years</td>
                      <td className="px-4 py-3 text-xs text-gray-600">Retained along with core clinical health records.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">HIPAA Compliance & Consent Logs</td>
                      <td className="px-4 py-3 text-brand-700 font-bold">6 Years</td>
                      <td className="px-4 py-3 text-xs text-gray-600">Required by HIPAA Privacy & Security Rule regulations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security & Secure Destruction</h2>
              <p className="mb-3">
                Electronic patient health information (ePHI) is encrypted at rest using AES-256 encryption and stored in HIPAA-compliant cloud storage environments with multi-factor authentication and strict access controls.
              </p>
              <p>
                Upon expiration of mandatory statutory retention periods, paper records are cross-cut shredded on-site by certified document destruction partners, and digital files are permanently scrubbed using NIST 800-88 cryptographic sanitization standards.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Requesting Record Copies</h2>
              <p className="text-sm">
                Active or former patients may request copies of their health records or request transfer to another provider by contacting our Records Officer at <strong>records@brightsmiledental.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
