import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-brand-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready for a Healthier, Brighter Smile?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Book your appointment online or give us a call. New patients are always welcome, and we offer
          flexible scheduling to fit your busy life.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/booking" size="lg" variant="primary">
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment Online
          </Button>
          <Button href={`tel:${siteConfig.phone}`} size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
            <Phone className="mr-2 h-5 w-5" />
            Call {siteConfig.phone}
          </Button>
        </div>

        <div className="mt-6">
          <a href="/offers" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:underline">
            View our special offers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
