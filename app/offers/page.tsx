import Link from 'next/link';
import { specialOffers } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { 
  Gift, CheckCircle, Clock, Percent, BadgePercent, 
  ArrowRight, Heart, Sparkles, Tag 
} from 'lucide-react';

export const metadata = generateMetadata({
  title: "Special Dental Offers & Discounts",
  description: "Save on your next dental visit. Explore our exclusive new patient specials, whitening discounts, and implant consultation packages.",
  path: "/offers",
});

export default function OffersPage() {
  
  // Custom styling helper based on Badge
  const getCardHeaderColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'new patient':
        return {
          bg: 'bg-brand-600',
          text: 'text-white',
          accent: 'bg-brand-50 text-brand-700',
          hoverBg: 'hover:border-brand-500'
        };
      case 'limited time':
        return {
          bg: 'bg-amber-500',
          text: 'text-white',
          accent: 'bg-amber-5 text-amber-800',
          hoverBg: 'hover:border-amber-500'
        };
      case 'family plan':
        return {
          bg: 'bg-emerald-600',
          text: 'text-white',
          accent: 'bg-emerald-50 text-emerald-800',
          hoverBg: 'hover:border-emerald-500'
        };
      default:
        return {
          bg: 'bg-slate-900',
          text: 'text-white',
          accent: 'bg-slate-100 text-slate-800',
          hoverBg: 'hover:border-slate-500'
        };
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm flex items-center justify-center gap-1.5">
            <BadgePercent className="w-5 h-5 text-brand-500" /> Exclusive Promotions
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Special Offers & Seasonal Deals
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            We believe high-quality dental care should be accessible. Take advantage of our seasonal discounts and bundled package incentives.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {specialOffers && specialOffers.map((offer) => {
            const styles = getCardHeaderColor(offer.badge);
            
            return (
              <div 
                key={offer.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${styles.hoverBg} hover:scale-[1.01]`}
              >
                
                {/* Header Part with Badge */}
                <div className={`${styles.bg} p-6 sm:p-8 text-white relative`}>
                  <div className="absolute right-6 top-6 opacity-10">
                    <Gift className="w-24 h-24" />
                  </div>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white mb-4">
                    <Tag className="w-3 h-3 mr-1 fill-current" />
                    {offer.badge}
                  </span>

                  <h2 className="text-2xl font-extrabold tracking-tight">{offer.title}</h2>
                  <p className="mt-2 text-white/80 text-sm leading-relaxed max-w-md">
                    {offer.description}
                  </p>
                </div>

                {/* Offer Details / Highlights */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-500" /> What&apos;s Included:
                    </h3>
                    
                    <ul className="space-y-3">
                      {offer.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Limited availability. Book soon!
                    </div>
                    
                    <Link
                      href={`/booking?offer=${offer.id}`}
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm w-full sm:w-auto group"
                    >
                      {offer.cta}
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Insurance and Alternative Payments Banner */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold">No Insurance? No Problem!</h3>
            <p className="mt-2 text-slate-300 text-sm md:text-base">
              Learn about our Bright Smile Dental Membership Plan, low-interest financing through CareCredit, and flexible in-house installment plans.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-slate-800 bg-white hover:bg-slate-50 shadow-md transition-colors"
            >
              Explore Payment Plans
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
