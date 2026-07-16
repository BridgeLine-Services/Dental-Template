import Link from 'next/link';
import { generateMetadata } from '@/lib/seo';
import { 
  FileText, ArrowDownToLine, ShieldCheck, Heart, 
  HelpCircle, ExternalLink, Calendar, PlusCircle, ArrowRight 
} from 'lucide-react';

export const metadata = generateMetadata({
  title: "Patient Resources & Downloadable Forms",
  description: "Access downloadable PDF patient forms, medical history documents, insurance breakdowns, and pre/post-operative recovery guides.",
  path: "/resources",
});

export default function ResourcesPage() {
  
  const formsList = [
    {
      title: "New Patient Registration",
      desc: "Comprehensive initial intake form. Speeds up check-in at your first visit.",
      fileSize: "180 KB",
      format: "PDF Document"
    },
    {
      title: "Medical History Form",
      desc: "Details chronic conditions, prescription history, and physical status disclosures.",
      fileSize: "142 KB",
      format: "PDF Document"
    },
    {
      title: "HIPAA Privacy Notice",
      desc: "Describes how we safeguard your personal records and clinical files.",
      fileSize: "95 KB",
      format: "PDF Document"
    },
    {
      title: "Insurance & Financial Agreement",
      desc: "Information detailing our standard billing workflows, claims file methods, and policies.",
      fileSize: "115 KB",
      format: "PDF Document"
    }
  ];

  const guidesList = [
    {
      title: "Post-Treatment: Extraction Care",
      desc: "Critical steps to promote healthy healing, prevent dry sockets, and manage soreness.",
      fileSize: "88 KB",
      format: "PDF Document"
    },
    {
      title: "Post-Treatment: Root Canal Recovery",
      desc: "Guidelines for pain management and instructions on temporary restorations.",
      fileSize: "74 KB",
      format: "PDF Document"
    },
    {
      title: "Pre-Treatment: Sedation Guidelines",
      desc: "Fasting protocols and safe transit arrangements before sedation appointments.",
      fileSize: "102 KB",
      format: "PDF Document"
    },
    {
      title: "Oral Hygiene Maintenance Guide",
      desc: "Best practices for daily brushing, flossing, and interdental care.",
      fileSize: "210 KB",
      format: "PDF Document"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Patient Portal</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Patient Resources & Forms
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Download registration forms ahead of your visit, read clinical recovery guides, or access your secure patient portal directly.
          </p>
        </div>

        {/* Portal Access Quick Widget */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 text-white shadow-md relative overflow-hidden mb-16 max-w-5xl mx-auto">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Active Patient Portal
              </span>
              <h2 className="text-3xl font-extrabold">Access Your Health Files 24/7</h2>
              <p className="text-brand-100 text-sm md:text-base max-w-xl">
                Log in securely to request appointment changes, review prescription history, examine past invoices, or chat directly with our office coordinators.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-bold rounded-xl text-brand-700 bg-white hover:bg-brand-50 shadow-md transition-colors w-full sm:w-auto"
              >
                Access Patient Portal
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        {/* Two Columns: Printable Forms & Care Guides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Printable Forms column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 border-b pb-3 border-slate-200">
              <FileText className="w-6 h-6 text-brand-500" /> Intake & Registration Forms
            </h3>
            <p className="text-sm text-slate-500">
              Print and fill these out beforehand to save 15 minutes in our waiting lounge.
            </p>

            <div className="grid gap-4">
              {formsList.map((form, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-brand-300 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-base">{form.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm">{form.desc}</p>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                      {form.format} • {form.fileSize}
                    </span>
                  </div>
                  
                  {/* Mock download */}
                  <a 
                    href="#download" 
                    
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-brand-50 text-slate-500 hover:text-brand-600 flex items-center justify-center flex-shrink-0 border border-slate-200 hover:border-brand-200 transition-all"
                    title={`Download ${form.title}`}
                  >
                    <ArrowDownToLine className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery Guides column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 border-b pb-3 border-slate-200">
              <ShieldCheck className="w-6 h-6 text-brand-500" /> Pre & Post Care Instructions
            </h3>
            <p className="text-sm text-slate-500">
              Crucial advice formulated by our clinical leads to ease pain and speed recovery.
            </p>

            <div className="grid gap-4">
              {guidesList.map((guide, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-brand-300 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-base">{guide.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm">{guide.desc}</p>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                      {guide.format} • {guide.fileSize}
                    </span>
                  </div>
                  
                  {/* Mock download */}
                  <a 
                    href="#download" 
                    
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-brand-50 text-slate-500 hover:text-brand-600 flex items-center justify-center flex-shrink-0 border border-slate-200 hover:border-brand-200 transition-all"
                    title={`Download ${guide.title}`}
                  >
                    <ArrowDownToLine className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quick FAQ / Helper Link Bottom CTA */}
        <div className="mt-20 max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">Have questions about insurance coverage?</h3>
            <p className="text-sm text-slate-500 max-w-lg">
              Check out our detailed FAQ page to learn which insurance networks we file for and explore details about our sliding scales.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link 
              href="/faq" 
              className="inline-flex items-center text-sm font-bold text-brand-600 hover:underline gap-1 group"
            >
              Go to FAQs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
