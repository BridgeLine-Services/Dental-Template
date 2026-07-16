'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/lib/data';
import { Eye, Check, Star, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';

export default function GalleryPage() {
  const categories = ["All", "Smile Makeovers", "Veneers", "Whitening", "Implants", "Invisalign", "Crowns"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter gallery items
  const filteredItems = galleryItems ? galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
           selectedCategory.toLowerCase().includes(item.category.toLowerCase());
  }) : [];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm flex items-center justify-center gap-1.5">
            <Sparkles className="w-5 h-5 text-brand-500" /> Transformation Gallery
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Before & After Patient Gallery
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Explore real clinical outcomes achieved by our dental experts. Witness the powerful transformations that restore function and bring back confident smiles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                
                {/* Comparison Image Container */}
                <div className="grid grid-cols-2 gap-1 bg-slate-100 p-2 relative h-64">
                  {/* Before Frame */}
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.title} Before`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 250px"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded-md">
                      Before
                    </span>
                  </div>

                  {/* After Frame */}
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.afterImage}
                      alt={`${item.title} After`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 250px"
                    />
                    <span className="absolute bottom-3 right-3 bg-brand-600/90 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded-md">
                      After
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">Completed Case #{item.id}</span>
                    <span className="text-xs font-bold text-brand-600 flex items-center gap-1">
                      Success Outcome <Check className="w-4 h-4 text-emerald-500" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100 max-w-md mx-auto">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">No outcomes found</h3>
            <p className="text-slate-500 text-sm mt-1">We don&apos;t have any active case files categorized under &ldquo;{selectedCategory}&rdquo; yet.</p>
          </div>
        )}

        {/* Dynamic CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Dreaming of your own transformation?</h3>
            <p className="mt-2 text-slate-300 text-sm md:text-base">
              Schedule a personalized smile consultation with one of our cosmetic specialists to explore what is possible for your teeth.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-slate-800 bg-white hover:bg-slate-50 shadow-md transition-colors"
            >
              Request Smile Makeover
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
