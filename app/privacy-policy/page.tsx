import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: `Privacy policy guidelines, patient security, and data security measures implemented at ${siteConfig.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Frame */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8">
          
          <div className="border-b pb-6 border-slate-100 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
              <p className="text-xs text-slate-400 mt-1">Last Updated: July 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
            <p>
              At <strong>{siteConfig.name}</strong>, accessible from our practice premises and secure web platforms, one of our main priorities is the absolute privacy of our patient records. This Privacy Policy document outlines the specific classifications of files collected and documented by our server channels, alongside administrative parameters.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
            <p>
              We collect personally identifiable identifiers (PII), including your full name, phone number, email address, home address, medical history, physical files, and dental insurance policy particulars. This information is collected directly when you fill out patient intake forms, schedule slots on our online booking portals, or complete registration files.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
            <p>
              All gathered patient metrics and medical records are processed exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Establish, customize, and maintain your active patient records.</li>
              <li>Schedule, verify, and modify your requested clinical appointments.</li>
              <li>Pre-verify PPO insurance benefits and process dental claims.</li>
              <li>Deliver secure post-operative care advice and prescription reminders.</li>
              <li>Communicate administrative changes regarding our Springfield facility.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Security of Patient Data (HIPAA)</h2>
            <p>
              All clinical records, physical forms, and diagnostic images are maintained under strict compliance with the Health Insurance Portability and Accountability Act (HIPAA) standards. Your digital profiles are encrypted both in transit and at rest, and only authorized medical personnel are granted credential access to sensitive charts.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or lease our patient lists to third-party marketing brokers. Your health files are only shared with verified entities (such as partner laboratories, specialist dental practitioners, or your designated PPO insurance provider) to directly facilitate your clinical treatments and claims billing.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions about this privacy statement, or if you wish to request copies of your archived clinical files, do not hesitate to reach out to our administration at <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.
            </p>
          </div>

          {/* Quick Back CTA */}
          <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
            <Link href="/" className="font-semibold text-brand-600 hover:underline">
              ← Return to Home
            </Link>
            <Link href="/terms" className="text-slate-400 hover:underline">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
