import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Virtual Consultations",
  description: "Book a secure telehealth virtual dental consultation from the comfort of your home.",
  path: "/telehealth",
});

export default function TelehealthPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Virtual Dental Consultations</h1>
          <p className="text-brand-200 text-lg">Get expert dental advice from the comfort of your home</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-brand-900 mb-4">What is a Virtual Consultation?</h3>
            <p className="text-gray-700 mb-4">A virtual consultation allows you to meet with one of our dentists via secure video call. It's perfect for:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Getting a second opinion</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Discussing treatment options</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Cosmetic smile assessments</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Post-treatment check-ins</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Insurance and financing questions</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Emergency triage and guidance</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-brand-900 mb-4">How to Prepare</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Find a quiet, well-lit space</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Use a device with a camera (phone, tablet, or computer)</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Have your insurance card ready</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Take photos of any problem areas if possible</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Write down any questions you have</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 font-bold">•</span> Have a list of current medications</li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-50 rounded-xl p-8 border border-brand-100 mb-8">
          <h3 className="text-xl font-bold text-brand-900 mb-4">What to Expect</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div><h4 className="font-semibold text-gray-900">Book Your Virtual Visit</h4><p className="text-gray-700 text-sm">Schedule online or call us. Choose a convenient time slot.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div><h4 className="font-semibold text-gray-900">Receive a Secure Link</h4><p className="text-gray-700 text-sm">You'll get an email with a secure video call link before your appointment.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div><h4 className="font-semibold text-gray-900">Meet Your Dentist</h4><p className="text-gray-700 text-sm">The consultation lasts 15-30 minutes. Discuss your concerns and get professional advice.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
              <div><h4 className="font-semibold text-gray-900">Get Your Treatment Plan</h4><p className="text-gray-700 text-sm">If needed, you'll receive a personalized treatment plan and cost estimate via email.</p></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-brand-900 mb-4">Technical Requirements</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Smartphone, tablet, or computer with a camera and microphone</li>
            <li>Stable internet or cellular connection</li>
            <li>No software download required — works in your browser</li>
            <li>HIPAA-compliant secure platform</li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/booking" className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Book a Virtual Consultation
          </Link>
          <p className="mt-3 text-gray-500 text-sm">Free for new patients • 15-minute consultation</p>
        </div>
      </div>
    </div>
  );
}
