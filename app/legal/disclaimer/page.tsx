import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Medical Disclaimer",
  description: "Medical & Dental Disclaimer for Bright Smile Dental — informational purpose of website content and requirement for professional clinical evaluation.",
  path: "/legal/disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Medical Disclaimer", url: "/legal/disclaimer" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Important Legal Notice
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Medical & Dental Disclaimer
            </h1>
            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2026 | Bright Smile Dental
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg text-amber-900 text-sm sm:text-base font-medium">
            The information contained on this website is provided for educational and informational purposes only and is NOT intended as medical or dental advice, diagnosis, or treatment.
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. No Doctor-Patient Relationship</h2>
              <p>
                Accessing, reading, or submitting information through this website, contact forms, or live chat does NOT establish a doctor-patient or dentist-patient relationship with Bright Smile Dental or any of its licensed clinicians. A doctor-patient relationship is established ONLY after a formal clinical intake, examination, and signed consent for treatment in our physical dental office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informational Purpose Only</h2>
              <p className="mb-3">
                Articles, procedure guides, cost estimates, blog posts, and dental care recommendations published on this website are designed to help you understand general oral health topics, including cosmetic dentistry, dental implants, Invisalign, and preventative hygiene.
              </p>
              <p>
                Individual oral health conditions vary greatly. Never disregard professional medical or dental advice or delay seeking care because of something you have read on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Dental & Medical Emergencies</h2>
              <p className="mb-3">
                If you are experiencing a severe dental emergency, uncontrollable bleeding, acute facial swelling, severe trauma, or difficulty breathing/swallowing:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-red-900">
                <p className="font-bold text-lg mb-1">In an Immediate Life-Threatening Emergency:</p>
                <p className="text-sm mb-2">Call 911 immediately or proceed to the nearest hospital emergency room.</p>
                <p className="font-bold text-sm">For Dental Emergencies During Office Hours:</p>
                <p className="text-sm">Call our urgent dental line directly at <strong>(555) 911-0000</strong>.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accuracy & Updates</h2>
              <p>
                While we make reasonable efforts to maintain current, evidence-based health information on this site, dental science and clinical technologies evolve rapidly. Bright Smile Dental makes no warranties or representations regarding the absolute completeness or timeliness of information published online.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
