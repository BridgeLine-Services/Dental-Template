import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "HIPAA Privacy Notice",
  description: "Notice of Privacy Practices for Bright Smile Dental — how patient health information is collected, used, and disclosed.",
  path: "/hipaa-notice",
});

export default function HIPAANoticePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">HIPAA Privacy Notice</h1>
          <p className="text-brand-200 text-lg">Notice of Privacy Practices</p>
          <p className="text-brand-300 text-sm mt-2">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-blue-50 border-l-4 border-brand-500 p-6 mb-10 rounded-r-lg">
          <p className="text-gray-700 font-medium">
            This notice describes how medical information about you may be used and disclosed and how you can access this information. Please review it carefully.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Our Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          Bright Smile Dental is required by law to maintain the privacy and security of your protected health information (PHI). We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information. We must follow the duties of privacy and security described in this notice and give you a copy of it. We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing.
        </p>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. How We Use and Share Your Health Information</h2>
        <p className="text-gray-700 mb-4">We use and share your health information to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Treat you:</strong> We share information with dentists and dental specialists involved in your care.</li>
          <li><strong>Bill for your services:</strong> We share information with your insurance company to process claims.</li>
          <li><strong>Run our practice:</strong> We use your information for quality assessment, practice management, and administrative purposes.</li>
          <li><strong>Communicate with you:</strong> Appointment reminders, treatment alternatives, and health-related benefits.</li>
          <li><strong>Comply with the law:</strong> Public health reporting, FDA-regulated product reporting, legal proceedings, and law enforcement.</li>
          <li><strong>Respond to organ donation requests:</strong> If applicable.</li>
          <li><strong>Work with a medical examiner:</strong> Identify deceased patients and determine cause of death.</li>
          <li><strong>Address workers' compensation and similar programs:</strong> As required by law.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. When We Need Your Written Permission</h2>
        <p className="text-gray-700 mb-4">We must obtain your written authorization before using or sharing your information for:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Marketing purposes</li>
          <li>Sale of your health information</li>
          <li>Psychotherapy notes (if any)</li>
          <li>Any other use not described in this notice</li>
        </ul>
        <p className="text-gray-700 mb-4">If you give us permission, you may revoke it at any time by submitting a written request to our Privacy Officer.</p>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">4. Your Rights Regarding Your Health Information</h2>
        <p className="text-gray-700 mb-4">You have the following rights:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Access:</strong> Request a copy of your medical records (electronic or paper).</li>
          <li><strong>Amend:</strong> Request a correction to your records if you believe they are inaccurate.</li>
          <li><strong>Accounting of Disclosures:</strong> Request a list of instances where we shared your information for purposes other than treatment, payment, or healthcare operations.</li>
          <li><strong>Request Restrictions:</strong> Ask us to limit what we use or share.</li>
          <li><strong>Request Confidential Communications:</strong> Ask us to contact you in a specific way (e.g., cell phone) or at a specific location.</li>
          <li><strong>Breach Notification:</strong> Receive notification if your information is breached.</li>
          <li><strong>Paper Copy of This Notice:</strong> Request a printed copy at any time.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">5. How to Exercise Your Rights</h2>
        <p className="text-gray-700 mb-4">To exercise any of these rights, contact our Privacy Officer:</p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <p className="text-gray-800"><strong>Privacy Officer</strong></p>
          <p className="text-gray-700">Bright Smile Dental</p>
          <p className="text-gray-700">1234 Wellness Boulevard, Suite 200</p>
          <p className="text-gray-700">Springfield, CA 90210</p>
          <p className="text-gray-700">Phone: (555) 123-4567</p>
          <p className="text-gray-700">Email: privacy@brightsmiledental.com</p>
        </div>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">6. Changes to This Notice</h2>
        <p className="text-gray-700 mb-4">We can change the terms of this notice at any time. The new notice will apply to all health information we maintain. We will post the current notice in our office and on our website.</p>

        <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">7. Complaints</h2>
        <p className="text-gray-700 mb-4">If you believe your privacy rights have been violated, you may file a complaint with:</p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <p className="text-gray-800"><strong>U.S. Department of Health and Human Services</strong></p>
          <p className="text-gray-700">Office for Civil Rights</p>
          <p className="text-gray-700">200 Independence Avenue, S.W.</p>
          <p className="text-gray-700">Washington, D.C. 20201</p>
          <p className="text-gray-700">Phone: 1-877-696-6775</p>
          <p className="text-gray-700">Website: www.hhs.gov/ocr/privacy/hipaa/complaints</p>
        </div>
        <p className="text-gray-700">We will not retaliate against you for filing a complaint.</p>
      </div>
    </div>
  );
}
