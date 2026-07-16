import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { generateMetadata as getBaseMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { 
  ArrowLeft, Calendar, User, Clock, Share2, 
  Facebook, Twitter, Linkedin, Link2, BookOpen, ArrowRight 
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return getBaseMetadata({
    title: `${post.title} | Bright Smile Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default function BlogPostDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-slate-500 hover:text-brand-600 font-semibold text-sm mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
          Back to Blog Listing
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-400" />
              Written by {post.author}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-sm mb-12 border border-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 850px"
            priority
          />
        </div>

        {/* Article Content & Share sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Text Content (Render with breaks) */}
          <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base whitespace-pre-line">
              {post.content}
            </div>

            {/* Content Footer/Author Signature Box */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-400">Clinical Contributor</p>
              </div>
            </div>
          </div>

          {/* Sidebar / Social Share Buttons */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 justify-start items-center lg:items-start lg:sticky lg:top-8 h-fit">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest lg:mb-2 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5" /> Share Post
            </p>
            <div className="flex lg:flex-col gap-2">
              <button className="p-3 bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-slate-600 hover:text-brand-600 rounded-xl transition-all shadow-sm">
                <Facebook className="w-5 h-5 fill-current" />
              </button>
              <button className="p-3 bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-slate-600 hover:text-brand-600 rounded-xl transition-all shadow-sm">
                <Twitter className="w-5 h-5 fill-current" />
              </button>
              <button className="p-3 bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-slate-600 hover:text-brand-600 rounded-xl transition-all shadow-sm">
                <Linkedin className="w-5 h-5 fill-current" />
              </button>
              <button className="p-3 bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-slate-600 hover:text-brand-600 rounded-xl transition-all shadow-sm">
                <Link2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 border-t border-slate-200 pt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-500" /> Related Articles
            </h3>
            
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link 
                  href={`/blog/${related.slug}`} 
                  key={related.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
                >
                  <div className="relative h-40 bg-slate-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 250px"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
                        {related.category}
                      </span>
                      <h4 className="font-bold text-slate-900 mt-2 text-sm leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
                        {related.title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>{formatDate(related.date)}</span>
                      <span className="inline-flex items-center text-brand-600 font-semibold group-hover:underline">
                        Read <ArrowRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
