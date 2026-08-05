import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "AI Usage & Technology Disclosure",
  description: "AI Usage Disclosure for Bright Smile Dental — transparency regarding artificial intelligence tools used for scheduling, digital imaging assistance, and patient communication.",
  path: "/legal/ai-disclosure",
});

export default function AIDisclosurePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "AI Disclosure", url: "/legal/ai-disclosure" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Technology Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Artificial Intelligence (AI) Disclosure
            </h1>
            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2026 | Responsible AI Practices
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Commitment to Human-Centered Dental Care</h2>
              <p>
                At Bright Smile Dental, artificial intelligence (AI) and automated assistive technologies are used solely to support clinical efficiency, diagnostic accuracy, and patient convenience. <strong>All medical and dental decisions, diagnoses, treatment plans, and surgical procedures are performed and overseen directly by human, licensed dentists and dental professionals.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Where AI Is Used in Our Practice</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Diagnostic Imaging Support (AI X-Ray Assistance)</h3>
                  <p className="text-sm text-gray-600">
                    We utilize FDA-cleared AI diagnostic software to analyze digital 2D and 3D CBCT radiographs. This tool acts as a second set of eyes to highlight potential micro-cavities, bone loss, or pathology. Your dentist reviews every scan personally before making any diagnosis.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Automated Patient Assistant & Live Chat</h3>
                  <p className="text-sm text-gray-600">
                    Our website features an automated live chat assistant that helps answer general practice questions, provides office hours, and assists with appointment scheduling requests. The chat assistant does NOT provide clinical medical diagnoses or write prescriptions.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Digital Smile Simulations (Invisalign & Cosmetic)</h3>
                  <p className="text-sm text-gray-600">
                    3D digital scans use automated algorithms to render visual previews of predicted tooth movement during Invisalign aligner therapy or cosmetic veneer treatment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Privacy & AI Security</h2>
              <p className="mb-3">
                Any AI tools integrated into our clinical workflow adhere to HIPAA, HITECH, and California privacy mandates:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Patient health records are never fed into public LLMs or unencrypted external AI models.</li>
                <li>All clinical AI algorithms operate within HIPAA Business Associate Agreements (BAAs).</li>
                <li>Patients retain the right to decline AI-assisted diagnostic reviews upon request.</li>
              </ul>
            </section>

            <section className="bg-purple-50 p-6 rounded-xl border border-purple-200 text-purple-950">
              <h2 className="text-xl font-bold mb-2">Human Supervision Guarantee</h2>
              <p className="text-sm">
                If you have questions or wish to request human-only review of your dental scans or intake forms, please notify our clinical coordinator during your consultation or email <strong>care@brightsmiledental.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
