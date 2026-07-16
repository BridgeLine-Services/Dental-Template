import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { Eye, HelpCircle, CheckCircle2 } from 'lucide-react';

export const metadata = generateMetadata({
  title: "Accessibility Statement",
  description: `Accessibility policies and digital accommodation standards implemented at ${siteConfig.name}.`,
  path: "/accessibility",
});

export default function AccessibilityStatementPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Frame */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8">
          
          <div className="border-b pb-6 border-slate-100 flex items-center gap-3">
            <Eye className="w-8 h-8 text-brand-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Accessibility Statement</h1>
              <p className="text-xs text-slate-400 mt-1">Last Updated: July 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
            <p>
              At <strong>{siteConfig.name}</strong>, we are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to our website.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. Our platform works towards maintaining substantial conformance with the <strong>WCAG 2.1 Level AA</strong> standard.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Accessibility Features</h2>
            <p>
              To make our dental scheduling and service files accessible to all visitors, our design template includes the following features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-contrast color styling using standard Tailwind brand tokens to help readability.</li>
              <li>Semantic HTML elements (headers, main, section, nav) for proper screen reader navigation.</li>
              <li>Full keyboard navigation capability for all contact forms, accordions, and calendar inputs.</li>
              <li>Descriptive alt text for all clinical images, patient portraits, and comparison graphs.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Physical Accessibility at Springfield</h2>
            <p>
              In addition to digital standards, our physical clinic at Suite 200 is fully ADA compliant, featuring wheelchair-accessible parking, automatic entrance doors, spacious corridors, and dedicated operatory rooms designed to accommodate patients with limited mobility.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Feedback & Support</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter any barriers or need help reading any resource, please contact our patient care coordinator directly at:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Phone:</strong> {siteConfig.phone}</li>
              <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a></li>
            </ul>
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
