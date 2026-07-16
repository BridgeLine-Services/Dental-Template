import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dentists, siteConfig } from '@/lib/data';
import { generateMetadata as baseGenerateMetadata } from '@/lib/seo';
import { dentistSchema } from '@/lib/seo';
import { 
  ArrowLeft, Star, GraduationCap, Briefcase, Award, 
  Languages, Sparkles, CheckCircle2, MessageSquare, Phone 
} from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

// Generate static paths
export async function generateStaticParams() {
  return dentists.map((dentist) => ({
    id: dentist.id,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props) {
  const dentist = dentists.find((d) => d.id === params.id);
  if (!dentist) return {};

  return baseGenerateMetadata({
    title: `${dentist.name} | ${dentist.title}`,
    description: dentist.bio.slice(0, 155) + "...",
    path: `/dentists/${dentist.id}`,
    image: dentist.photo,
  });
}

export default function DentistDetailPage({ params }: Props) {
  const dentist = dentists.find((d) => d.id === params.id);
  
  if (!dentist) {
    notFound();
  }

  // Schema generation
  const schemaJson = dentistSchema(dentist.name, dentist.title, dentist.bio);

  const averageRating = dentist.reviews && dentist.reviews.length > 0
    ? (dentist.reviews.reduce((acc, r) => acc + r.rating, 0) / dentist.reviews.length).toFixed(1)
    : "5.0";

  return (
    <>
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="bg-slate-50 min-h-screen py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link
            href="/dentists"
            className="inline-flex items-center text-slate-500 hover:text-brand-600 font-medium text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>

          {/* Profile Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
            
            {/* Left: Image Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={dentist.photo}
                  alt={dentist.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                />
              </div>

              {/* Stats Block under Image */}
              <div className="grid grid-cols-2 gap-4 w-full mt-6">
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <span className="block text-2xl font-bold text-brand-600">{dentist.experience}</span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Experience</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold text-slate-900">{averageRating}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{dentist.reviews?.length || 0} Patient Reviews</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="w-full mt-6 flex flex-col gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm text-center"
                >
                  Schedule with {dentist.name.split(' ').pop()}
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Practice: {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Right: Profile Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 mb-4">
                  {dentist.title}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{dentist.name}</h1>
                
                {/* Full Bio */}
                <div className="mt-6">
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-2">About Dentist</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed text-base whitespace-pre-line">
                    {dentist.bio}
                  </p>
                </div>

                {/* Specialties / Areas of Expertise */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Specialties & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {dentist.expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-50 text-brand-700 hover:bg-brand-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-brand-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-6 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">Languages Spoken:</span>
                  <span className="text-sm text-slate-600">{dentist.languages.join(', ')}</span>
                </div>
              </div>

              {/* Education, Certifications, Experience Section */}
              <div className="mt-8 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-6">
                
                {/* Education */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-brand-500" /> Education
                  </h3>
                  <ul className="space-y-2">
                    {dentist.education.map((edu, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand-500" /> Certifications
                  </h3>
                  <ul className="space-y-2">
                    {dentist.certifications.map((cert, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>

          {/* Fun Facts section */}
          {dentist.funFacts && dentist.funFacts.length > 0 && (
            <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" /> Get To Know {dentist.name.split(' ').pop()}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dentist.funFacts.map((fact, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-brand-200 transition-colors">
                    <p className="text-slate-600 italic text-sm leading-relaxed">
                      &ldquo;{fact}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patient Reviews Section */}
          <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-500" /> Patient Testimonials
            </h3>

            {dentist.reviews && dentist.reviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {dentist.reviews.map((review, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-600 italic text-sm leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-semibold text-slate-400">
                      <span>{review.author}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm">No reviews yet for this dentist.</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
