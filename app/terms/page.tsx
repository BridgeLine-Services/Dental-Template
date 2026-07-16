import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { FileText } from 'lucide-react';

export const metadata = generateMetadata({
  title: "Terms of Service",
  description: `Terms of service and patient scheduling guidelines implemented at ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Frame */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8">
          
          <div className="border-b pb-6 border-slate-100 flex items-center gap-3">
            <FileText className="w-8 h-8 text-brand-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
              <p className="text-xs text-slate-400 mt-1">Last Updated: July 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
            <p>
              Welcome to <strong>{siteConfig.name}</strong>. By accessing our website, scheduling online appointments, or registering as a patient, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Clinical Treatment Agreements</h2>
            <p>
              While our website serves as a comprehensive educational and booking template, all physical dental procedures, exams, and operations require an in-person diagnostic evaluation. No virtual consultation or blog guide constitutes a binding diagnostic plan. Our dentists reserve the absolute right to refuse treatment if contraindicated by your health status.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Appointment Cancellation Policy</h2>
            <p>
              Your appointment slot is reserved exclusively for you. We kindly request at least <strong>24 hours advance notice</strong> for any cancellations or scheduling changes. Cancellations made with less than 24 hours notice may incur a standard $50 missed-appointment fee, which is not covered by insurance.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Billing & Insurance Responsibilities</h2>
            <p>
              We gladly process and file claims for almost all major dental PPO insurance plans as a courtesy to our patients. However, <strong>the patient is ultimately responsible for all clinical fees</strong> incurred at our Springfield office. Estimated patient copays are due at the time of service. Any balance remaining after insurance processing must be settled within 30 days.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Acceptable Website Usage</h2>
            <p>
              You agree to use our digital scheduling tools, patient portal, and contact forms only for lawful, legitimate healthcare purposes. You are strictly prohibited from submitting fraudulent inquiries, uploading malicious code, or trying to compromise secure patient databases.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">5. Revisions and Modifications</h2>
            <p>
              Our administration reserves the right to modify these service guidelines at any time. Your continued relationship with {siteConfig.name} after updates are published confirms your active acceptance of the updated terms.
            </p>
          </div>

          {/* Quick Back CTA */}
          <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
            <Link href="/" className="font-semibold text-brand-600 hover:underline">
              ← Return to Home
            </Link>
            <Link href="/privacy-policy" className="text-slate-400 hover:underline">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
