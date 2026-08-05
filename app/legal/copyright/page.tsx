import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Copyright Notice",
  description: "Copyright Notice and Intellectual Property rights policy for Bright Smile Dental.",
  path: "/legal/copyright",
});

export default function CopyrightPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Copyright Notice", url: "/legal/copyright" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Intellectual Property
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Copyright Notice
            </h1>
            <p className="text-sm text-gray-500">
              © 2001–2026 Bright Smile Dental. All Rights Reserved.
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Ownership of Content</h2>
              <p>
                All text, graphics, clinical procedure guides, original dental photography, patient education diagrams, website branding, icons, code, and design elements published on <strong>brightsmiledental.com</strong> are the property of Bright Smile Dental or licensed from third parties, and are protected under United States copyright laws, international treaties, and applicable trademark law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Permitted Personal Use</h2>
              <p className="mb-3">
                You are granted a limited, non-exclusive, non-transferable license to access, view, and print single copies of patient education materials and forms for your own personal, non-commercial use, provided that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain all original copyright, trademark, and legal notices intact.</li>
                <li>You do not modify, adapt, or alter the content in any way.</li>
                <li>The content is not used in a misleading context or for commercial gain.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibited Uses</h2>
              <p className="mb-3">Except as permitted above, you may NOT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Republish, scrape, syndicate, or redistribute website content on external sites or software applications without prior written authorization.</li>
                <li>Use Bright Smile Dental trademarks, logos, or practice names in meta tags, hidden text, or search ad keywords without permission.</li>
                <li>Incorporate original clinical photography or before/after patient case results into third-party promotional material.</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Licensing & Media Requests</h2>
              <p className="text-sm">
                For permissions, educational syndication, or media inquiries regarding content reuse, please write to: <strong>legal@brightsmiledental.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
