"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const displayFaqs = faqItems.slice(0, 8);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Have questions? We've got answers. Can't find what you're looking for? Give us a call.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {displayFaqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-brand-900">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-brand-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
