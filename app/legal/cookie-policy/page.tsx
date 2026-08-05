import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Cookie Policy",
  description: "Cookie Policy for Bright Smile Dental — detailing cookie types, usage, analytics, third-party cookies, and management preferences.",
  path: "/legal/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Cookie Policy", url: "/legal/cookie-policy" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Privacy & Cookies
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2026 | Last Updated: August 2026
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit our website (brightsmiledental.com). They enable the website to remember your actions, preferences, accessibility settings, and session details over a period of time, ensuring a smooth and personalized user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              <p className="mb-4">We categorize the cookies used on our platform into four primary types:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Essential / Strictly Necessary Cookies</h3>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function properly. They handle security authentication, patient portal session routing, form CSRF protection, and accessibility preferences. They cannot be disabled.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Performance & Functional Cookies</h3>
                  <p className="text-sm text-gray-600">
                    These cookies remember your preferences—such as font size customization, high contrast mode, chosen appointment time slots, and language settings—to provide enhanced functionality.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Analytics & Measurement Cookies</h3>
                  <p className="text-sm text-gray-600">
                    We use privacy-centric analytics (e.g., Google Analytics 4 with IP anonymization) to understand how visitors interact with our pages, which dental treatment guides are most helpful, and how to improve site speed and accessibility.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Third-Party & Social Media Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Embedded features such as Google Maps for directions, interactive video content, and online scheduling widgets may place cookies on your browser.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies & Partners</h2>
              <p className="mb-3">
                Some cookies set on our website are managed by trusted third-party service providers. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Google Maps:</strong> Maps and location features to help patients find our office.</li>
                <li><strong>Google Analytics:</strong> Aggregated, non-personally identifiable web traffic analytics.</li>
                <li><strong>Online Scheduling Platform:</strong> Secure booking workflow management.</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                We do not sell, rent, or trade cookie tracking data to third-party advertising brokers or data brokers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You can control and manage cookie settings in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>On-Site Preference Center:</strong> Use our Cookie Consent banner on your first visit or reset your choices in the footer to modify your consent.</li>
                <li><strong>Browser Controls:</strong> Most web browsers allow you to block, manage, or delete cookies via settings (usually under Privacy or Security).</li>
                <li><strong>Opt-Out Links:</strong> You can opt out of Google Analytics tracking across all websites by installing the Google Analytics Opt-out Browser Add-on.</li>
              </ul>
            </section>

            <section className="bg-brand-50 p-6 rounded-xl border border-brand-200 mt-8">
              <h2 className="text-xl font-bold text-brand-900 mb-2">Questions Regarding Cookie Usage?</h2>
              <p className="text-sm text-brand-800">
                If you have questions regarding our Cookie Policy, please contact our web compliance team at <strong>privacy@brightsmiledental.com</strong> or call (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
