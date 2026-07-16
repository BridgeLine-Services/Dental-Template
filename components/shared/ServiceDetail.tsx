import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  Check, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Clock, 
  DollarSign,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { services, siteConfig, Service } from '@/lib/data';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/shared/StructuredData';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  if (!service) {
    notFound();
  }

  // Get other services for the sidebar (excluding current service, limit to 5)
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 5);

  // Schema data structures
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const serviceJsonLd = serviceSchema(service.title, service.shortDescription, service.slug);
  const faqJsonLd = faqSchema(service.faqs);
  const breadcrumbJsonLd = breadcrumbSchema(breadcrumbItems);

  return (
    <>
      {/* Structured Data injection */}
      <StructuredData data={serviceJsonLd} />
      {faqJsonLd && faqJsonLd.mainEntity && faqJsonLd.mainEntity.length > 0 && (
        <StructuredData data={faqJsonLd} />
      )}
      <StructuredData data={breadcrumbJsonLd} />

      {/* Main Container */}
      <div className="bg-slate-50 min-h-screen py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/services" className="hover:text-brand-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium truncate" aria-current="page">
              {service.title}
            </span>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-50 text-accent-700">
                    <DollarSign className="w-3.5 h-3.5" />
                    Starts at {service.startingPrice}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {service.longDescription || service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#book-appointment"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-all duration-200 shadow-md shadow-brand-100 gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold transition-all duration-200 gap-2"
                  >
                    <Phone className="w-5 h-5 text-brand-600" />
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column - Main Details */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* What to Expect Section */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-7 bg-brand-600 rounded-full inline-block" />
                  What to Expect
                </h2>
                <div className="relative border-l-2 border-brand-100 ml-4 pl-6 space-y-8 py-2">
                  {service.whatToExpect.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Step Number Dot */}
                      <span className="absolute -left-[37px] top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-slate-700 text-base leading-relaxed pt-0.5 font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits Section */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-7 bg-brand-600 rounded-full inline-block" />
                  Benefits of Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:bg-brand-50/20 transition-all duration-200"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-slate-700 font-medium leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs Section (Accordion-style display) */}
              {service.faqs && service.faqs.length > 0 && (
                <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-7 bg-brand-600 rounded-full inline-block" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group border border-slate-100 rounded-xl p-4 sm:p-5 bg-slate-50/50 [&_summary::-webkit-details-marker]:hidden open:bg-white open:border-brand-200 transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                          <span className="font-semibold text-slate-800 group-open:text-brand-700 transition-colors flex items-start gap-2.5 text-base sm:text-lg">
                            <HelpCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                            {faq.q}
                          </span>
                          <span className="ml-1.5 flex-shrink-0 rounded-full bg-slate-100 p-1 text-slate-900 group-open:bg-brand-100 group-open:text-brand-600 group-open:rotate-180 transition-all duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="Details m19 9-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </summary>
                        <div className="mt-4 border-t border-slate-100 pt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Right Column - Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Book Appointment CTA Card */}
              <div id="book-appointment" className="bg-brand-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-900/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800 rounded-full filter blur-2xl opacity-50 -mr-10 -mt-10" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-800 text-brand-200 mb-3">
                      Start Your Journey
                    </span>
                    <h3 className="text-2xl font-bold">Book an Appointment</h3>
                    <p className="text-brand-100 text-sm mt-2 leading-relaxed">
                      Schedule your consultation today. Our experienced team is ready to give you the beautiful, healthy smile you deserve.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Link
                      href="/book"
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-brand-950 font-bold transition-all duration-200 hover:bg-brand-50 hover:scale-[1.02] active:scale-[0.98] gap-2 shadow-md text-base"
                    >
                      <Calendar className="w-5 h-5 text-brand-600" />
                      Request Appointment Online
                    </Link>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-800 hover:bg-brand-700 border border-brand-700 text-white font-bold transition-all duration-200 gap-2 text-base"
                    >
                      <Phone className="w-5 h-5" />
                      Call {siteConfig.phone}
                    </a>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-brand-200">
                      Or SMS us at <span className="font-semibold">{siteConfig.sms}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Insurance Accepted Note */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Insurance & Financing</h4>
                    <p className="text-xs text-slate-500">Hassle-free coverage options</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We accept most major PPO dental insurance plans. No insurance? We also offer flexible monthly payment plans and financing options through CareCredit.
                </p>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-4 pb-2 border-b border-slate-50">
                  Other Services We Offer
                </h3>
                <div className="space-y-3">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <span className="block font-medium text-slate-800 group-hover:text-brand-600 transition-colors text-sm truncate">
                          {other.title}
                        </span>
                        <span className="block text-xs text-slate-400 mt-0.5 truncate">
                          From {other.startingPrice} • {other.duration}
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    View All 20 Services
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>
    </>
  );
}
