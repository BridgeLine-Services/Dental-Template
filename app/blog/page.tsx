import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { generateMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Calendar, User, Clock, ArrowRight, ArrowRightCircle } from 'lucide-react';

export const metadata = generateMetadata({
  title: "Dental Health Blog & News",
  description: "Read the latest clinical insights, dental care advice, and oral hygiene tips curated by our expert dental team.",
  path: "/blog",
});

export default function BlogListingPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Oral Health Insights</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Bright Smile Education & Advice
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Keep your teeth and gums healthy with practical tips, cosmetic guides, and procedural explanations written directly by our certified dental practitioners.
          </p>
        </div>

        {/* Featured Post Hero Banner */}
        {featuredPost && (
          <div className="mb-16 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image Block */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-slate-100">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                <span className="absolute top-6 left-6 bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                  Featured: {featuredPost.category}
                </span>
              </div>

              {/* Text Block */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-xs">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{featuredPost.author}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors group"
                  >
                    Read Story
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-200 transition-all duration-300 flex flex-col"
            >
              
              {/* Card Image */}
              <div className="relative h-56 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-700 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">By {post.author}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </article>
          ))}
        </div>

        {/* Newsletter Signup Banner */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Stay Updated on Dental Health</h3>
            <p className="mt-2 text-slate-300 text-sm md:text-base">
              Subscribe to our monthly newsletter and get expert oral health tips and exclusive special offers sent directly to your inbox.
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                required
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder-slate-400 text-sm w-full sm:w-64"
              />
              <button className="px-5 py-3 bg-brand-600 hover:bg-brand-500 rounded-xl font-semibold text-sm transition-colors text-center shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
