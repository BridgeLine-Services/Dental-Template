import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Accessibility Statement",
  description: "Accessibility Statement for Bright Smile Dental — WCAG 2.1 AA compliance commitment, assistive feature support, and accessibility coordinator contact details.",
  path: "/legal/accessibility",
});

export default function AccessibilityStatementPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Accessibility Statement", url: "/legal/accessibility" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              WCAG 2.1 Level AA Compliant
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Accessibility Statement
            </h1>
            <p className="text-sm text-gray-500">
              Commitment to Equal Digital Access for All Patients
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Digital Accessibility Standards</h2>
              <p>
                Bright Smile Dental is committed to ensuring digital accessibility for people with disabilities, including patients who rely on screen readers, keyboard navigation, voice commands, or high contrast displays. We continuously audit and update our website (brightsmiledental.com) to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Key Accessibility Features Implemented</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Keyboard Navigation & Skip Link:</strong> Full keyboard navigation support across all pages, forms, and scheduling workflows, with a visible &quot;Skip to main content&quot; shortcut.</li>
                <li><strong>Accessibility Control Widget:</strong> Floating accessibility widget providing immediate text size resizing, high contrast modes, reduced motion toggle, and dyslexia-friendly typography.</li>
                <li><strong>Screen Reader Optimization:</strong> Proper semantic HTML structure (headings h1–h6, ARIA live regions, explicit field labels, landmarks).</li>
                <li><strong>Alt Text & Contrast:</strong> Descriptive alternative text for clinical images and minimum 4.5:1 color contrast ratios for text readability.</li>
                <li><strong>ARIA Announcements:</strong> Dynamic content updates announced seamlessly to screen readers via custom ARIA live regions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Physical Office Accessibility</h2>
              <p className="mb-3">
                Our practice location at 1234 Wellness Boulevard is fully ADA compliant, featuring:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Wheelchair-accessible parking spaces and ground-level ramp access.</li>
                <li>ADA-compliant wide doors, hallways, and treatment operatories.</li>
                <li>Accessible restrooms with grab bars.</li>
                <li>Service animals welcome.</li>
                <li>Multi-language staff support and translation assistance available upon request.</li>
              </ul>
            </section>

            <section className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 text-emerald-950">
              <h2 className="text-xl font-bold mb-2">Accessibility Feedback & Assistance</h2>
              <p className="text-sm mb-3">
                If you encounter any difficulty accessing content or navigating any portion of our website, or if you need assistance booking an appointment, please contact our Accessibility Coordinator:
              </p>
              <p className="text-sm"><strong>Accessibility Officer:</strong> Bright Smile Dental Practice Manager</p>
              <p className="text-sm"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="text-sm"><strong>Email:</strong> accessibility@brightsmiledental.com</p>
              <p className="text-sm"><strong>Postal Address:</strong> 1234 Wellness Boulevard, Suite 200, Springfield, CA 90210</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
