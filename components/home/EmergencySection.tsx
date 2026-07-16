import { siteConfig } from "@/lib/data";
import { Phone, Siren, Clock, AlertTriangle } from "lucide-react";

export function EmergencySection() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white/15 p-4">
              <Siren className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Dental Emergency?
              </h2>
              <p className="mt-2 max-w-xl text-white/90">
                Don't wait in pain. We offer same-day emergency appointments and 24/7 phone guidance.
                Quick action can save your tooth.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  Same-day appointments
                </span>
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" />
                  24/7 phone support
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.emergencyPhone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-red-700 shadow-lg transition hover:bg-white/90"
            >
              <Phone className="h-5 w-5" />
              Call Now: {siteConfig.emergencyPhone}
            </a>
            <a
              href="/emergency"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Emergency Guide & FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
