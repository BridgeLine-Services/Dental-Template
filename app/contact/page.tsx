'use client';

import React, { useState } from 'react';
import { siteConfig, services, dentists } from '@/lib/data';
import { 
  Phone, Mail, MapPin, Clock, ShieldAlert, Navigation, 
  CheckCircle, MessageSquare, AlertCircle, Loader2 
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    patientType: 'new', // new | returning
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        patientType: 'new',
      });
    } catch (err) {
      setError('Something went wrong. Please try calling our office directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-16 md:py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Our Springfield Office
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Have a question, need an appointment, or facing a dental emergency? Reach out. Our patient care coordinators are ready to support you.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Information Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">Practice Details</h2>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">Call or Text</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-brand-600 font-bold text-lg hover:underline">
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">SMS available during clinic hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">General Inquiries</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-600 font-medium text-base hover:underline break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">Office Location</h3>
                  <p className="text-slate-600 text-sm">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-500" /> Office Hours
              </h2>
              <ul className="space-y-3">
                {siteConfig.hours.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm py-1 border-b border-dashed border-slate-100 last:border-0 last:pb-0">
                    <span className="font-medium text-slate-700">{h.day}</span>
                    <span className="text-slate-500">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgent / Emergency Contact Warning */}
            <div className="bg-red-50 rounded-3xl p-8 border border-red-100 space-y-4">
              <h3 className="text-lg font-bold text-red-800 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" /> Dental Emergency?
              </h3>
              <p className="text-sm text-red-700 leading-relaxed">
                If you are experiencing severe dental pain, a knocked-out tooth, or dental trauma, call our dedicated 24/7 urgent hotline immediately. We provide same-day priority visits.
              </p>
              <a 
                href={`tel:${siteConfig.emergencyPhone}`} 
                className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
              >
                Call Urgent: {siteConfig.emergencyPhone}
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900 border-b pb-4">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-500 mt-2 mb-6">
                Fill out this secure form, and a scheduling specialist will contact you within 24 business hours to finalize details.
              </p>

              {success ? (
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-extrabold">✓</div>
                  <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for contacting us. A patient care representative will contact you shortly to confirm your booking request or answer your question.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Preferred Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        id="preferredDate"
                        value={formState.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Row 3: Patient Status Radio buttons */}
                  <div>
                    <span className="block text-sm font-medium text-slate-700 mb-2">Have you visited our office before?</span>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-600">
                        <input
                          type="radio"
                          name="patientType"
                          value="new"
                          checked={formState.patientType === 'new'}
                          onChange={handleChange}
                          className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500 focus:outline-none focus:border-transparent"
                        />
                        New Patient
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-600">
                        <input
                          type="radio"
                          name="patientType"
                          value="returning"
                          checked={formState.patientType === 'returning'}
                          onChange={handleChange}
                          className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500 focus:outline-none focus:border-transparent"
                        />
                        Returning Patient
                      </label>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Message, Reason for Visit, or Questions <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm text-slate-800"
                      placeholder="Please let us know how we can assist you..."
                    />
                  </div>

                  {/* Error display */}
                  {error && (
                    <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-100 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-sm disabled:bg-slate-300 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        'Request Appointment / Send Message'
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Map & Direction Section */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map Frame (8 columns) */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-md border border-slate-200 h-[450px] relative bg-slate-200">
              <iframe
                src={siteConfig.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Springfield Location Map"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Directions Content (4 columns) */}
            <div className="lg:col-span-4 space-y-6 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-brand-500" /> Getting Here
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are conveniently located in the Wellness Boulevard professional complex on the second floor, Suite 200.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-brand-500 pl-3">
                  <h4 className="text-sm font-semibold text-slate-800">By Car</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Free secure parking is available for up to 3 hours in the main surface lot or underground garage.
                  </p>
                </div>

                <div className="border-l-2 border-brand-500 pl-3">
                  <h4 className="text-sm font-semibold text-slate-800">By Public Transit</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    The Springfield Metro Line B stops directly in front of our building (Wellness Blvd Stop).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
