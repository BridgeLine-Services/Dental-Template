import { specialOffers } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check, Tag } from "lucide-react";

export function SpecialOffers() {
  return (
    <section className="bg-brand-50/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Special Offers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Take advantage of our current promotions and start your journey to a healthier, brighter smile.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
                  <Tag className="h-3 w-3" />
                  {offer.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-brand-900">{offer.title}</h3>
                <p className="mt-2 text-sm text-brand-700">{offer.description}</p>
                <ul className="mt-4 space-y-2">
                  {offer.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-6 pt-0">
                <Button href="/booking" variant="primary" size="sm" className="w-full">
                  {offer.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
