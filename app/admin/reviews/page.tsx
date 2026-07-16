"use client";

import React, { useState } from "react";
import {
  Star,
  Check,
  Trash2,
  Search,
  AlertCircle
} from "lucide-react";

// Mock Reviews
const initialReviews = [
  {
    id: "REV-401",
    author: "Eleanor Vance",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Absolutely fantastic treatment! Dr. Jenkins was incredibly gentle during my crown procedure. The staff made me feel extremely welcome and safe.",
    date: "July 14, 2026",
    status: "published",
    treatment: "Dental Crown",
  },
  {
    id: "REV-402",
    author: "David Kim",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "High-tech facility and professional dentist. They explained the full orthodontic procedure thoroughly with a great patient-care approach.",
    date: "July 12, 2026",
    status: "published",
    treatment: "Orthodontics",
  },
  {
    id: "REV-403",
    author: "Rachel Green",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    rating: 4,
    text: "The whitening treatment gave me great results. Deducted one star just because the queue was a bit long, but general treatment was stellar.",
    date: "July 09, 2026",
    status: "pending",
    treatment: "Teeth Whitening",
  },
  {
    id: "REV-404",
    author: "Marcus Aurelius",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Best dental surgery I've visited. Thorough hygiene standards, modern implants, and very polite reception desk staff.",
    date: "July 05, 2026",
    status: "published",
    treatment: "Dental Implants",
  },
  {
    id: "REV-405",
    author: "Clara Oswald",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    rating: 3,
    text: "Cleanings were fine, but we started about 15 minutes late. The dentist apologized though, so that's good.",
    date: "June 28, 2026",
    status: "pending",
    treatment: "Routine Clean-up",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleApprove = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "published" } : r))
    );
  };

  const handleDelete = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      r.author.toLowerCase().includes(search.toLowerCase()) ||
      r.text.toLowerCase().includes(search.toLowerCase()) ||
      r.treatment.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || r.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
          Review Moderation
        </h1>
        <p className="text-sm font-medium text-gray-500 mt-1">
          Approve or reject customer comments, reviews, and clinical scores.
          Only published comments are shown on the main page.
        </p>
      </div>

      {/* Filter and Moderation Bar */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 w-full md:max-w-md focus-within:ring-2 focus-within:ring-brand-500/10 focus-within:border-brand-500 transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search reviews by content, treatment or patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none text-sm outline-none w-full text-gray-700"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex gap-2 w-full md:w-auto">
          {["all", "published", "pending"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                filter === status
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/10"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-200 ${
                rev.status === "pending" ? "ring-2 ring-amber-500/10" : ""
              }`}
            >
              {/* Left Column: Author Metadata */}
              <div className="sm:w-48 flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-xl object-cover ring-4 ring-gray-50"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">{rev.author}</span>
                  <span className="text-[10px] text-gray-400 font-bold tracking-wide mt-0.5 uppercase">
                    {rev.treatment}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1 font-medium">{rev.date}</span>
                </div>
              </div>

              {/* Middle Column: Review Text / Rating */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5 text-accent-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? "fill-current text-accent-500" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  {rev.status === "pending" && (
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <AlertCircle className="w-3 h-3" />
                      Pending Moderation
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Right Column: Interactive Moderate Buttons */}
              <div className="sm:w-36 flex-shrink-0 flex items-center justify-end sm:justify-start gap-2 self-center">
                {rev.status === "pending" && (
                  <button
                    onClick={() => handleApprove(rev.id)}
                    className="inline-flex items-center gap-1.5 justify-center bg-brand-50 hover:bg-brand-100 text-brand-700 hover:text-brand-800 font-bold text-xs px-3.5 py-2 rounded-xl transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(rev.id)}
                  className="inline-flex items-center gap-1.5 justify-center bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 font-bold text-xs px-3.5 py-2 rounded-xl transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center text-sm text-gray-400 font-medium">
            No feedback found matching the selected parameters.
          </div>
        )}
      </div>
    </div>
  );
}
