import Link from 'next/link';
import { generateMetadata as baseGenerateMetadata } from '@/lib/seo';
import { services } from '@/lib/data';
import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Layers, 
  Bookmark, 
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const metadata = baseGenerateMetadata({
  title: "Dental Services & Treatments",
  description: "Explore our comprehensive range of 20 dental services. From general checkups to cosmetic makeovers, Invisalign, implants, and 24/7 emergency care.",
  path: "/services"
});

// A small utility mapper to grab lucide icons based on the string name in data
function getServiceIcon(iconName: string) {
  const props = { className: "w-6 h-6 text-brand-600" };
  switch (iconName.toLowerCase()) {
    case 'stethoscope':
    case 'general':
      return <Stethoscope {...props} />;
    case 'sparkles':
    case 'cosmetic':
      return <Sparkles {...props} />;
    case 'smile':
    case 'whitening':
      return <Smile {...props} />;
    case 'shieldcheck':
    case 'preventive':
      return <ShieldCheck {...props} />;
    case 'layers':
    case 'crowns':
    case 'bridges':
      return <Layers {...props} />;
    default:
      return <Bookmark {...props} />;
  }
}

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-800">
            <CheckCircle className="w-3.5 h-3.5" />
            Comprehensive Dental Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Professional Dental Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We provide top-tier oral care services tailored to all age groups. Discover our detailed list of general, cosmetic, restorative, and advanced surgical procedures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.slug}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-slate-400">Starting Price</span>
                  <span className="text-lg font-bold text-slate-900">{service.startingPrice}</span>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group-hover:translate-x-0.5 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
