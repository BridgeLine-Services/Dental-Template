'use client';

import React, { useState } from 'react';
import { faqItems } from '@/lib/data';
import { faqSchema } from '@/lib/seo';
import { 
  Search, HelpCircle, ChevronDown, ChevronUp, 
  Sparkles, ShieldCheck, Heart, User 
} from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter FAQ items based on search input
  const filteredFAQs = faqItems.filter((item) => {
    const q = item.q.toLowerCase();
    const a = item.a.toLowerCase();
    const cat = item.category.toLowerCase();
    const query = searchQuery.toLowerCase();
    return q.includes(query) || a.includes(query) || cat.includes(query);
  });

  // Group FAQ items by category
  const categoriesMap: { [key: string]: typeof faqItems } = {};
  filteredFAQs.forEach((item) => {
    if (!categoriesMap[item.category]) {
      categoriesMap[item.category] = [];
    }
    categoriesMap[item.category].push(item);
  });

  const toggleAccordion = (globalIndex: number) => {
    if (openIndex === globalIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(globalIndex);
    }
  };

  // Generate structured schema
  const schemaJson = faqSchema(faqItems.map(f => ({ q: f.q, a: f.a })));

  // Helper for Category Icons
  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'general':
      case 'general dentistry':
        return <HelpCircle className="w-5 h-5 text-brand-600" />;
      case 'cosmetic':
      case 'cosmetic dentistry':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'insurance':
      case 'payment':
      case 'financial':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Heart className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <>
      {/* Inject Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="bg-slate-50 min-h-screen py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Got Questions?</span>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Find transparent answers to standard queries about our dental procedures, insurance coverage, and patient comfort rules.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative mb-12 max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by keyword, treatment, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800 shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-brand-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Main FAQ Content grouped by Category */}
          {Object.keys(categoriesMap).length > 0 ? (
            <div className="space-y-12">
              {Object.keys(categoriesMap).map((category, catIdx) => {
                const items = categoriesMap[category];
                return (
                  <div key={category} className="space-y-4">
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      {getCategoryIcon(category)}
                      <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide text-sm">
                        {category}
                      </h2>
                    </div>

                    {/* FAQ Accordion List */}
                    <div className="space-y-3">
                      {items.map((item, itemIdx) => {
                        // Create a stable global index representation
                        const globalIdx = catIdx * 1000 + itemIdx;
                        const isOpen = openIndex === globalIdx;

                        return (
                          <div 
                            key={itemIdx}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
                          >
                            <button
                              onClick={() => toggleAccordion(globalIdx)}
                              className="w-full flex justify-between items-center px-6 py-5 text-left text-slate-800 hover:text-brand-600 font-semibold text-base transition-colors focus:outline-none gap-4"
                            >
                              <span>{item.q}</span>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              )}
                            </button>

                            {/* Accordion Content */}
                            {isOpen && (
                              <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50 bg-slate-50/50">
                                <p className="whitespace-pre-line">{item.a}</p>
                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-bold text-slate-900">No matching FAQs found</h3>
              <p className="text-slate-500 text-sm mt-2">
                We couldn&apos;t find any results matching &ldquo;{searchQuery}&rdquo;. Try using simple terms like &apos;veneer&apos;, &apos;cost&apos;, or &apos;hours&apos;.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 hover:underline"
              >
                Show all questions
              </button>
            </div>
          )}

          {/* Quick Support Footer CTA */}
          <div className="mt-16 bg-brand-50 rounded-3xl p-8 border border-brand-100 text-center space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Still have unanswered questions?</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              If your question isn&apos;t covered here, don&apos;t hesitate to ask us directly. Our specialists are here to give you all the information you need.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
              >
                Send Us a Message
              </a>
              <a 
                href="tel:(555)123-4567" 
                className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Call Office
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
