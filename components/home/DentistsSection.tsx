import Link from "next/link";
import { dentists } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function DentistsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Meet the Dentists
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Our team of experienced, compassionate dentists is dedicated to providing you with the highest
            quality of care.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dentists.map((dentist) => (
            <Link
              key={dentist.id}
              href={`/dentists/${dentist.id}`}
              className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-brand-100">
                <img
                  src={dentist.photo}
                  alt={dentist.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-brand-900">
                  {dentist.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-brand-500">{dentist.title}</p>
                <p className="mt-3 text-sm text-brand-700 line-clamp-3">{dentist.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {dentist.expertise.slice(0, 3).map((exp) => (
                    <span
                      key={exp}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs text-brand-600"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
                  View Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/dentists" variant="secondary" size="lg">
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
