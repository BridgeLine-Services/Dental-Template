import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "Financial Responsibility Agreement",
  description: "Financial Responsibility Policy for Bright Smile Dental — detailing payment terms, dental insurance billing, financing plans, and cancellation policies.",
  path: "/legal/financial-policy",
});

export default function FinancialPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "Financial Policy", url: "/legal/financial-policy" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Patient Financial Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Financial Responsibility Agreement
            </h1>
            <p className="text-sm text-gray-500">
              Payment Policies, Insurance, & Flexible Financing Terms
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Payment Due Date</h2>
              <p>
                Payment is due at the time services are rendered unless prior formal financial arrangements have been approved in writing by our billing office. We accept cash, major credit cards (Visa, MasterCard, Discover, American Express), debit cards, CareCredit, and Flexible Spending Account (FSA) or Health Savings Account (HSA) cards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dental Insurance Policy</h2>
              <p className="mb-3">
                As a courtesy to our patients, we file claims directly with PPO dental insurance providers. However, please understand that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Your dental insurance policy is a contract between you, your employer, and the insurance carrier.</li>
                <li>Estimated co-payments and deductibles are due at the time of your visit.</li>
                <li>If your insurance carrier denies a claim or fails to pay within 60 days of submission, the remaining account balance becomes the direct responsibility of the patient or guarantor.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Flexible Financing Options</h2>
              <p className="mb-3">
                To help make quality dental care accessible, we offer flexible payment solutions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">CareCredit® Healthcare Financing</h3>
                  <p className="text-xs text-gray-600">
                    0% APR promotional financing for 6, 12, or 18 months on qualifying treatment plans for eligible applicants.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">In-House Membership Plan</h3>
                  <p className="text-xs text-gray-600">
                    For uninsured patients, our annual dental membership plan includes cleanings, exams, X-rays, and 15–20% discounts on all restorative procedures.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Appointment Cancellation & Missed Visit Policy</h2>
              <p>
                We reserve dedicated operatories and clinical staff time specifically for your appointment. We require at least <strong>24 to 48 hours notice</strong> if you need to cancel or reschedule your visit. A fee of $50 may be billed for appointments cancelled with less than 24 hours notice or missed without notice.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Billing Office Contact</h2>
              <p className="text-sm">
                For questions regarding insurance coverage, outstanding invoices, or payment plans, contact our billing office at <strong>billing@brightsmiledental.com</strong> or call (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
