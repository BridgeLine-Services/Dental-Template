import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "No Medical Advice Policy",
  description: "No Medical Advice Policy for Bright Smile Dental — emphasizing that online content is non-diagnostic and professional consultation is required.",
  path: "/legal/no-medical-advice",
});

export default function NoMedicalAdvicePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "No Medical Advice Policy", url: "/legal/no-medical-advice" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Clinical Policy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              No Medical Advice Disclaimer
            </h1>
            <p className="text-sm text-gray-500">
              Understanding Website Information vs. Professional Dental Care
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information Is Non-Clinical & Non-Diagnostic</h2>
              <p className="mb-3">
                The text, graphics, images, FAQs, cost calculators, blog posts, and interactive tools provided on brightsmiledental.com are intended strictly for educational and health literacy purposes.
              </p>
              <p>
                No content on this site is intended to serve as a substitute for professional dental or medical diagnosis, treatment, or advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Always Consult a Licensed Dentist</h2>
              <p className="mb-3">
                Always seek the advice of your qualified dentist, physician, or other licensed healthcare provider with any questions you may have regarding a medical condition, toothache, gum disease, or oral surgical procedure.
              </p>
              <p>
                Never disregard or delay seeking professional medical or dental advice because of something you have read on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Online Interactive Features & AI Chatbot</h2>
              <p>
                Interactions with online symptom checkers, live chatbots, or inquiry forms do NOT constitute a medical or dental consultation. Our digital tools cannot examine your teeth, read digital radiographs, evaluate bone density, or diagnose dental conditions.
              </p>
            </section>

            <section className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-900">
              <h2 className="text-xl font-bold mb-2">Need an Exam or Consultation?</h2>
              <p className="text-sm">
                To schedule a comprehensive clinical examination with our dental team, call us at <strong>(555) 123-4567</strong> or book online via our patient portal.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
