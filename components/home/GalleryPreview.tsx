import Link from "next/link";
import { galleryItems } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  return (
    <section className="bg-brand-50/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Before & After Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Real results from real patients. See the life-changing transformations our team has created.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.beforeImage} alt={`${item.title} - Before`} className="h-full w-full object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">Before</span>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.afterImage} alt={`${item.title} - After`} className="h-full w-full object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-brand-600/80 px-2 py-0.5 text-xs text-white">After</span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-brand-500">{item.category}</span>
                <h3 className="mt-1 font-heading text-base font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-700 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
