import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, Star, Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-100/80 backdrop-blur-md px-4 py-2 text-sm font-semibold text-brand-700 border border-brand-200/50 animate-fade-in-up">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <span>Trusted by {siteConfig.reviewCount}+ patients</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6 animate-fade-in-up animation-delay-1000">
          Your Smile,{" "}
          <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
            Our Passion
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-2000">
          Comprehensive, compassionate dental care for the whole family. From routine cleanings to complete smile transformations, we're committed to keeping you smiling for life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-3000">
          <Button href="/booking" size="lg" variant="primary" className="group">
            <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Book Appointment
          </Button>
          <Button 
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} 
            size="lg" 
            variant="ghost"
            className="group border-2 border-slate-200 hover:border-brand-500"
          >
            <Phone className="mr-2 h-5 w-5 group-hover:text-brand-600 transition-colors" />
            <span>Call: {siteConfig.phone}</span>
          </Button>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-fade-in-up animation-delay-4000">
          <div className="card-minimal">
            <div className="text-3xl font-bold text-brand-600 mb-1">{siteConfig.rating}★</div>
            <p className="text-sm text-slate-600">Google Rating</p>
          </div>
          <div className="card-minimal">
            <div className="text-3xl font-bold text-brand-600 mb-1">{siteConfig.yearsInBusiness}+</div>
            <p className="text-sm text-slate-600">Years Experience</p>
          </div>
          <div className="card-minimal">
            <div className="text-3xl font-bold text-brand-600 mb-1">{siteConfig.patientsServed}</div>
            <p className="text-sm text-slate-600">Patients Served</p>
          </div>
          <div className="card-minimal">
            <div className="text-3xl font-bold text-brand-600 mb-1">24/7</div>
            <p className="text-sm text-slate-600">Emergency Care</p>
          </div>
        </div>

        {/* Highlight section */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-slate-100 p-8 mb-8 animate-fade-in-up animation-delay-5000">
          <p className="text-slate-700 font-medium flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-brand-600 rounded-full" />
            ADA Accredited • Gentle Care • Advanced Technology • Insurance Welcome
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
