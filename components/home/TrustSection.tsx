import { trustStats, certifications } from "@/lib/data";
import { Users, Calendar, Star, Smile } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "Years in Business": Calendar,
  "Patients Served": Users,
  "Google Rating": Star,
  "Expert Dentists": Smile,
};

export function TrustSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustStats.map((stat) => {
            const Icon = iconMap[stat.label] || Star;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center"
              >
                <div className="mb-3 rounded-full bg-brand-100 p-3">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>
                <div className="text-3xl font-bold text-brand-900">{stat.value}</div>
                <div className="mt-1 text-sm text-brand-700">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-12 border-t border-brand-100 pt-8">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
            Certified & Trusted
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
