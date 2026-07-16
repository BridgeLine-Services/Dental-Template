import Link from "next/link";
import { services } from "@/lib/data";
import {
  Stethoscope, Sparkles, Sun, Anchor, AlignCenter, Gem, Crown,
  Link2, Activity, Puzzle, Scissors, Smile, Baby, Siren,
  HeartPulse, Moon, Syringe, Bone, Shield, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  sun: Sun,
  anchor: Anchor,
  "align-center": AlignCenter,
  gem: Gem,
  crown: Crown,
  bridge: Link2,
  activity: Activity,
  puzzle: Puzzle,
  scissors: Scissors,
  smile: Smile,
  baby: Baby,
  siren: Siren,
  "heart-pulse": HeartPulse,
  moon: Moon,
  scalpel: Syringe,
  tooth: Bone,
  shield: Shield,
};

export function ServicesGrid() {
  return (
    <section className="bg-brand-50/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Our Dental Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            From preventive care to advanced cosmetic procedures, we offer everything you need for a healthy,
            beautiful smile—all under one roof.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 transition-colors group-hover:bg-brand-500">
                  <Icon className="h-6 w-6 text-brand-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-700">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-brand-500">From {service.startingPrice}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
