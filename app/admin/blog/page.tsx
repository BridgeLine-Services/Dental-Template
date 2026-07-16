"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Calendar,
  User,
  ChevronRight
} from "lucide-react";

// Mock Blog Posts
const initialPosts = [
  {
    id: "POST-01",
    title: "5 Essential Tips for Perfect Dental Hygiene",
    author: "Dr. Sarah Jenkins",
    category: "Dental Care",
    date: "July 12, 2026",
    status: "published",
    image: "https://images.unsplash.com/photo-1507682531662-421b17ac4f93?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "POST-02",
    title: "What to Expect During a Teeth Whitening Treatment",
    author: "Dr. Marcus Vance",
    category: "Cosmetics",
    date: "July 08, 2026",
    status: "published",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "POST-03",
    title: "Understanding Invisalign: Benefits & Duration",
    author: "Dr. Alicia Patel",
    category: "Orthodontics",
    date: "June 29, 2026",
    status: "draft",
    image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "POST-04",
    title: "The Ultimate Guide to Pediatric Dentistry",
    author: "Dr. Alicia Patel",
    category: "Pediatric",
    date: "June 15, 2026",
    status: "published",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "POST-05",
    title: "Dental Implants vs. Bridges: Which is Best for You?",
    author: "Dr. Sarah Jenkins",
    category: "Implants",
    date: "June 02, 2026",
    status: "draft",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=200",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");

  const handleDelete = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Blog Posts
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Write, review, publish, or archive patient resources and blog posts.
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Plus className="w-4 h-4" />
            New Blog Post
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:max-w-md focus-within:ring-2 focus-within:ring-brand-500/10 focus-within:border-brand-500 transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs by title, category, author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none text-sm outline-none w-full text-gray-700"
          />
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Post Title
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Author
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Publish Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-all">
                    {/* Title with Image */}
                    <td className="px-6 py-4 max-w-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-100 flex-shrink-0"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800 line-clamp-1">
                            {post.title}
                          </span>
                          <span className="text-[10px] text-gray-400 font-bold font-mono">
                            {post.id}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">
                        {post.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{post.author}</span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{post.date}</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                          post.status === "published"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500 animate-pulse"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-800 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-brand-50 text-brand-600 hover:text-brand-700 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 hover:bg-rose-50 text-rose-600 hover:text-rose-700 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-sm text-gray-400 font-medium">
                    No articles matched your parameters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
