import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, Star, Shield, Award, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=1920&q=80"
          alt="Modern dental office"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
          <span>{siteConfig.rating} Google Rating • {siteConfig.reviewCount} Reviews</span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Your Smile, <span className="text-accent-400">Our Passion</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          Comprehensive, compassionate dental care for the whole family. From routine cleanings to complete
          smile makeovers, we're here to keep you smiling for life.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/booking" size="lg" variant="primary">
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <Button href={`tel:${siteConfig.phone}`} size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent-400" />
            ADA Member
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent-400" />
            25+ Years Experience
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent-400" />
            15,000+ Patients Served
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent-400" />
            Most Insurance Accepted
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
}
