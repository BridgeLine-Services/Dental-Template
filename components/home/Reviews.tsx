"use client";

import { useState } from "react";
import { reviews, siteConfig } from "@/lib/data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const next = () => setIndex((i) => Math.min(i + 1, reviews.length - visible));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="bg-brand-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
            <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
            <span className="text-sm font-medium">{siteConfig.rating} / 5.0</span>
            <span className="text-sm text-white/60">•</span>
            <span className="text-sm text-white/80">{siteConfig.reviewCount} Reviews</span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Don't just take our word for it—see what real patients have to say about their experience.
          </p>
        </div>

        {/* Review cards */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / visible}% - ${((visible - 1) * 24) / visible}px)` }}
              >
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <Quote className="h-8 w-8 text-accent-400" />
                  <p className="mt-4 text-sm leading-relaxed text-white/90">
                    "{review.text}"
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm font-medium text-white">{review.author}</p>
                      {review.treatment && (
                        <p className="text-xs text-white/60">{review.treatment}</p>
                      )}
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      Google
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={index === 0}
            className="rounded-full border border-white/20 p-2 transition hover:bg-white/10 disabled:opacity-40"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={index >= reviews.length - visible}
            className="rounded-full border border-white/20 p-2 transition hover:bg-white/10 disabled:opacity-40"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=bright+smile+dental+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-white/90"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
