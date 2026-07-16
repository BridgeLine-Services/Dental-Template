import Link from 'next/link';
import Image from 'next/image';
import { dentists } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, Star, Heart, GraduationCap } from 'lucide-react';

export const metadata = generateMetadata({
  title: "Meet Our Dentists",
  description: "Get to know our professional and compassionate team of dentists. Experience top-tier dental care from industry experts.",
  path: "/dentists",
});

export default function DentistsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Our Expert Team</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            World-Class Dentists, Compassionate Care
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Meet the professional and friendly specialists dedicated to providing you with the highest quality, comfortable dental treatments.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dentists.map((dentist) => {
            // Safe fallback rating or use dentist first review if any, or default 5.0
            const averageRating = dentist.reviews && dentist.reviews.length > 0
              ? (dentist.reviews.reduce((acc, r) => acc + r.rating, 0) / dentist.reviews.length).toFixed(1)
              : "5.0";

            return (
              <div 
                key={dentist.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative h-80 w-full bg-slate-100">
                  <Image
                    src={dentist.photo}
                    alt={dentist.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-1.5 px-3 rounded-full text-xs font-semibold text-brand-700 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{averageRating} / 5.0 ({dentist.reviews?.length || 0} reviews)</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{dentist.name}</h2>
                    <p className="text-brand-600 font-medium text-sm mt-1">{dentist.title}</p>
                    
                    {/* Bio excerpt */}
                    <p className="text-slate-600 text-sm mt-4 line-clamp-3 leading-relaxed">
                      {dentist.bio}
                    </p>
                  </div>

                  {/* Expertise/Specialties Tags */}
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-brand-500" /> Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {dentist.expertise.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {dentist.expertise.length > 3 && (
                        <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-md">
                          +{dentist.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Education snippet */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{dentist.education[0]}</span>
                    </p>
                  </div>

                  {/* CTA button */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={`/dentists/${dentist.id}`}
                      className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-sm group"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Bottom CTA banner */}
        <div className="mt-20 bg-brand-600 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to meet our specialists?</h3>
            <p className="mt-2 text-brand-100 text-sm md:text-base">
              Schedule your consultation with any of our expert dentists today and start your journey towards a healthier, brighter smile.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-brand-700 bg-white hover:bg-brand-50 shadow-md transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
