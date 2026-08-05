import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "HIPAA Notice of Privacy Practices",
  description: "Notice of Privacy Practices for Bright Smile Dental — detailed information on Protected Health Information (PHI) uses, permitted disclosures, patient rights, and legal duties.",
  path: "/hipaa-notice",
});

export default function HIPAANoticePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "HIPAA Notice", url: "/hipaa-notice" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Compliance Document
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-sm text-gray-500">
              Effective Date: January 1, 2026 | Last Revised: August 2026
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-brand-500 p-6 mb-8 rounded-r-lg text-brand-900 text-sm sm:text-base leading-relaxed font-medium">
            THIS NOTICE DESCRIBES HOW MEDICAL AND DENTAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Legal Duty & Commitment</h2>
              <p className="mb-3">
                Bright Smile Dental is required by law to maintain the privacy and security of your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable state regulations.
              </p>
              <p>
                We are required to provide you with this Notice of our legal duties and privacy practices with respect to PHI, and to abide by the terms of the Notice currently in effect. In the event of an unauthorized breach of your unsecured PHI, we will notify you promptly as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uses & Disclosures of PHI Without Written Authorization</h2>
              <p className="mb-3">
                We are permitted to use and disclose your Protected Health Information without your prior written consent or authorization for the following primary purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Treatment</h3>
                  <p className="text-xs text-gray-600">
                    We use your PHI to provide, coordinate, or manage your dental care. This includes consultations with specialists, dental labs, and referring physicians.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Payment</h3>
                  <p className="text-xs text-gray-600">
                    We bill and collect payment from you, insurance companies, or third-party payers for dental services and procedures performed.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Healthcare Operations</h3>
                  <p className="text-xs text-gray-600">
                    We use PHI to operate our practice, assess treatment quality, train clinical staff, conduct compliance audits, and manage administrative activities.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Permitted Special Disclosures</h2>
              <p className="mb-3">We may also share your PHI under specific administrative and legal circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Public Health Activities:</strong> Reporting disease outbreaks, adverse drug reactions, or medical device defects to public health authorities or the FDA.</li>
                <li><strong>Health Oversight:</strong> Audits or investigations conducted by government oversight agencies (e.g., Dental Board of California, HHS).</li>
                <li><strong>Law Enforcement & Judicial Proceedings:</strong> In response to court orders, subpoenas, warrants, or statutory reporting obligations.</li>
                <li><strong>Workers&apos; Compensation:</strong> Disclosures compliance with workers&apos; compensation and occupational disease laws.</li>
                <li><strong>Organ Donation & Coroners:</strong> To organ procurement organizations, medical examiners, or coroners as necessary to carry out duties.</li>
                <li><strong>Appointment Reminders:</strong> Contacting you via SMS, email, phone calls, or mail for upcoming appointments or preventative health notices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uses Requiring Your Express Written Authorization</h2>
              <p className="mb-3">
                Any other uses and disclosures not mentioned in this Notice will be made ONLY with your explicit written authorization. Specific disclosures requiring written consent include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Marketing Communications:</strong> Use of PHI for promotional or paid marketing campaigns.</li>
                <li><strong>Sale of PHI:</strong> Any disclosure that constitutes a sale of health data.</li>
                <li><strong>Psychotherapy Notes:</strong> Specialized notes maintained separately from medical records.</li>
              </ul>
              <p className="mt-3 text-sm italic text-gray-600">
                You may revoke any written authorization in writing at any time, except to the extent that we have already acted in reliance on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Patient Rights Under HIPAA</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Right to Inspect and Copy</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    You have the right to inspect and receive an electronic or paper copy of your dental records and health history. Requests must be submitted in writing to our Privacy Officer.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Right to Request Amendments</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    If you believe information in your record is incorrect or incomplete, you may submit a written request to amend your records detailing the reason for the amendment.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Right to Accounting of Disclosures</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    You may request a list of certain disclosures of your PHI made by us within six years prior to your request date, excluding disclosures made for treatment, payment, or practice operations.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Right to Request Restrictions & Confidential Communications</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    You have the right to request restrictions on how we use PHI or request communications via specific channels (e.g., cell phone only or confidential mailing address).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Complaints & Privacy Officer Contact Information</h2>
              <p className="mb-4">
                If you believe your privacy rights have been violated or if you wish to exercise any of your rights under HIPAA, please contact our Privacy Officer:
              </p>

              <div className="bg-brand-50 rounded-xl p-6 border border-brand-200 text-brand-900 mb-6">
                <h3 className="font-bold text-lg mb-2">Privacy Officer — Bright Smile Dental</h3>
                <p className="text-sm">1234 Wellness Boulevard, Suite 200</p>
                <p className="text-sm">Springfield, CA 90210</p>
                <p className="text-sm mt-2"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="text-sm"><strong>Email:</strong> privacy@brightsmiledental.com</p>
              </div>

              <p className="mb-2">
                You may also file a formal written complaint with the U.S. Department of Health and Human Services (HHS) Office for Civil Rights:
              </p>
              <div className="bg-gray-100 rounded-xl p-6 text-sm text-gray-800">
                <p className="font-semibold">U.S. Department of Health and Human Services — Office for Civil Rights</p>
                <p>200 Independence Avenue, S.W., Washington, D.C. 20201</p>
                <p>Toll-free: 1-877-696-6775 | Website: www.hhs.gov/ocr/privacy/hipaa/complaints</p>
              </div>
              <p className="mt-3 text-xs text-gray-500 font-medium">
                We support your right to privacy and will NOT retaliate against you in any way for filing a complaint.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
