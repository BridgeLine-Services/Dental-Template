import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { 
  Phone, Clock, ShieldAlert, Heart, Calendar, 
  HelpCircle, ChevronRight, Activity, Smile, ArrowRight 
} from 'lucide-react';

export const metadata = generateMetadata({
  title: "Emergency Dentistry Springfield",
  description: `Urgent dental care in Springfield, CA. Broken teeth, toothache relief, knocked-out teeth, and facial trauma. Call (555) 911-0000 for 24/7 support.`,
  path: "/emergency",
});

export default function EmergencyPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Urgent Warning Header Banner */}
      <div className="bg-red-600 text-white py-12 md:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-white mb-2">
            🚨 24/7 Dental Emergency Hotline
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Need Immediate Dental Care?
          </h1>
          <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto leading-relaxed">
            Severe toothache, broken tooth, or dental trauma? Call us right now. We reserve dedicated spaces every day for same-day emergency triage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href={`tel:${siteConfig.emergencyPhone}`} 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-extrabold rounded-2xl text-red-700 bg-white hover:bg-red-50 shadow-md transition-all transform hover:scale-[1.02] w-full sm:w-auto"
            >
              <Phone className="w-6 h-6 mr-2 animate-bounce" />
              Call Now: {siteConfig.emergencyPhone}
            </a>
            
            <Link 
              href="/booking" 
              className="inline-flex items-center justify-center px-6 py-4 border border-red-400 hover:bg-red-700 text-base font-bold rounded-2xl text-white transition-all w-full sm:w-auto"
            >
              Book Appointment Online
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Same-Day Appointments Info */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Block */}
            <div className="space-y-6">
              <span className="text-red-600 font-semibold tracking-wider uppercase text-sm flex items-center gap-1.5">
                <Activity className="w-5 h-5 text-red-500" /> Walk-ins & Priority Slots
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                What Counts as a Dental Emergency?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                If you are unsure whether your dental issue requires immediate attention, general guideline: <strong className="text-slate-900">if it hurts or is bleeding, do not wait!</strong> Leaving trauma untreated can lead to deep infections or permanent damage.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Severe, Unmanageable Pain</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Throbbing dental pain keeping you awake at night or affecting swallowing.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Oral Trauma or Facial Impact</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Impact that knocked out, chipped, loosened, or cracked teeth.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Uncontrolled Bleeding or Swelling</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Swelling in the face, cheek, or gum area with high fever or bleeding.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block - Graphic representation or Quick Hours card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Priority Triage Hours</h3>
              <p className="text-sm text-slate-600">
                Our main clinic accommodates active emergencies during normal workdays, alongside dedicated off-hours call lines.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex justify-between py-2.5 border-b border-dashed border-slate-100 text-sm">
                  <span className="font-medium text-slate-700">Monday – Thursday</span>
                  <span className="text-red-600 font-semibold">Priority Triage 8AM – 5PM</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-dashed border-slate-100 text-sm">
                  <span className="font-medium text-slate-700">Friday</span>
                  <span className="text-red-600 font-semibold">Priority Triage 8AM – 3PM</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-dashed border-slate-100 text-sm">
                  <span className="font-medium text-slate-700">Saturdays & Sundays</span>
                  <span className="text-red-600 font-semibold">Call Hotline: {siteConfig.emergencyPhone}</span>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-xs text-red-800 leading-relaxed">
                <strong>Hospital warning:</strong> If you are suffering from a broken jaw, severe head injury, or are unable to breathe, bypass the dental office and go directly to your nearest hospital ER department.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency First Aid Guides */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">First Aid Guides</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              What To Do in Different Emergencies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Immediate action can make the difference between saving or losing a tooth. Review these helpful field triage steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Guide 1: Knocked Out Tooth */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <span className="text-2xl font-extrabold text-red-500">01</span>
              <h3 className="text-lg font-bold text-slate-900">Knocked Out Tooth</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hold the tooth by the crown, never by the root. Rinse gently with water. Try to slide it back into its socket. If not possible, store in a container of milk or saliva and call us immediately—time is critical.
              </p>
            </div>

            {/* Guide 2: Broken/Chipped Tooth */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <span className="text-2xl font-extrabold text-red-500">02</span>
              <h3 className="text-lg font-bold text-slate-900">Broken or Chipped</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rinse your mouth with warm water to keep it clean. Apply a cold compress to your cheek to reduce swelling. Collect any broken tooth pieces, place them in a damp cloth, and bring them to your appointment.
              </p>
            </div>

            {/* Guide 3: Severe Pain/Toothache */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <span className="text-2xl font-extrabold text-red-500">03</span>
              <h3 className="text-lg font-bold text-slate-900">Severe Toothache</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Floss gently to remove any lodged food debris. Rinse your mouth with warm salt water. Apply a cold pack to the cheek. Take OTC pain relievers (ibuprofen), but do not put aspirin directly on the gums as it can burn tissue.
              </p>
            </div>

            {/* Guide 4: Lost Crown or Filling */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <span className="text-2xl font-extrabold text-red-500">04</span>
              <h3 className="text-lg font-bold text-slate-900">Lost Crown or Filling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protect the sensitive open area. Use dental wax or sugar-free gum to plug a lost filling slot. For lost crowns, apply a small amount of toothpaste or dental cement inside the crown and gently slide it back on.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs on Emergency Dentistry */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Emergency Care FAQs</h3>
            <p className="text-slate-600 text-sm mt-2">Get answers to standard questions about costs, treatment, and priority protocols.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 text-base">How much does an emergency exam cost?</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Our initial emergency exam including low-dose digital diagnostic imaging is $89. We identify the source of your pain and explain treatment options before proceeding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 text-base">Will you fix the tooth during the same visit?</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Our primary goal during an emergency visit is to alleviate severe pain and stabilize the tooth. When possible, we will perform complete treatment (filling, extraction, root canal) on the spot.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 text-base">Do you accept my insurance plan for emergencies?</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Yes, we accept and file claims with almost all major dental PPO insurance providers. If you are uninsured, we provide flexible payment plans through CareCredit.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
