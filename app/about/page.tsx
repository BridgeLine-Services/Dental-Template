import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, trustStats, certifications } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { 
  Heart, Shield, Users, Trophy, Users2, Calendar, 
  MapPin, CheckCircle, Award, CheckCircle2 
} from 'lucide-react';

export const metadata = generateMetadata({
  title: "About Our Practice",
  description: `Learn about our values, our mission, and our state-of-the-art practice history in ${siteConfig.address.city}, ${siteConfig.address.state}. Over ${siteConfig.yearsInBusiness} years of beautiful smiles.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=1600&q=80"
            alt="Dental office interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Our Practice</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Providing Healthy, Confident Smiles for {siteConfig.yearsInBusiness} Years
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
            Welcome to {siteConfig.name}, where your family&apos;s oral health is our topmost priority. We combine modern technology, compassionate staff, and standard-setting comfort.
          </p>
        </div>
      </section>

      {/* Practice Story & Mission/Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="space-y-6">
              <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Our Origin Story</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                How We Started & Where We are Going
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded over two decades ago with a single chair and a commitment to personalized dental care, {siteConfig.name} has grown into a state-of-the-art facility serving Springfield and surrounding areas.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our founders believed that visiting the dentist shouldn&apos;t be a stressful experience. From cozy operatory blankets to digital low-radiation diagnostics, we design every touchpoint of your care journey to put you entirely at ease.
              </p>

              {/* Mission/Vision Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-100">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-brand-600" /> Our Mission
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To deliver exceptionally professional, customized, and pain-free dental care that enhances physical health and rebuilds lasting confidence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-brand-600" /> Our Vision
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To lead as the gold-standard clinic for preventive, cosmetic, and emergency family dentistry, recognized for dental safety and patient-centric tech.
                  </p>
                </div>
              </div>
            </div>

            {/* Graphic / Team Photo Placeholder */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
                alt="Our friendly dental staff and office lobby"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-semibold text-lg">Our Modern Springfield Facility</p>
                  <p className="text-brand-300 text-sm">Equipped with 3D CBCT imaging & comfort suites</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Stats Counter Banner */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-600">{siteConfig.yearsInBusiness}+</span>
              <span className="mt-2 block text-sm font-semibold text-slate-500 uppercase tracking-wider">Years of Service</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-600">{siteConfig.patientsServed}</span>
              <span className="mt-2 block text-sm font-semibold text-slate-500 uppercase tracking-wider">Happy Patients</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-600">{siteConfig.rating} ★</span>
              <span className="mt-2 block text-sm font-semibold text-slate-500 uppercase tracking-wider">Average Rating ({siteConfig.reviewCount} Reviews)</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-600">4</span>
              <span className="mt-2 block text-sm font-semibold text-slate-500 uppercase tracking-wider">In-House Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Why We Differ</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              An Elevated Approach to Modern Dentistry
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We align our daily care schedules and patient workflows with six fundamental, patient-first operational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unwavering Empathy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We understand dental fear is real. Our clinicians practice with gentle touch and slow-paced explanations, letting you set the tempo.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Advanced Modern Tech</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We invest in premium diagnostic sensors, instant 3D scanning, soft-tissue lasers, and single-visit restorations to expedite your treatment.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Convenient Booking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                With late-evening hours on Wednesdays, same-day emergency slots, and direct online scheduling, fitting dental visits in has never been easier.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No hidden costs. Before starting any treatment, you get a written breakdown of insurance coverage and simple copay payment plans.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">All Ages Care</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From your toddler&apos;s first lap exam to functional restorative options for seniors, our comprehensive menu serves your entire household.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ADA Membership Standards</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All of our staff members operate under active American Dental Association (ADA) ethics, hygiene codes, and continuing education.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications & ADA Memberships */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Accredited & Certified Practice</h3>
            <p className="text-slate-600 text-sm mt-2">
              Our clinical leaders are recognized members of nationwide and global health networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80">
            {certifications && certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl py-3.5 px-6 border border-slate-200 shadow-sm flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-600" />
                <span className="font-semibold text-slate-700 text-sm">{cert}</span>
              </div>
            ))}
            <div className="bg-white rounded-xl py-3.5 px-6 border border-slate-200 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-600" />
              <span className="font-semibold text-slate-700 text-sm">American Dental Association (ADA)</span>
            </div>
            <div className="bg-white rounded-xl py-3.5 px-6 border border-slate-200 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-600" />
              <span className="font-semibold text-slate-700 text-sm">California Dental Association (CDA)</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
