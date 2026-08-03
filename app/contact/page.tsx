"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) { setError("Please fill in all required fields."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/submitContactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) { setSuccess(true); setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }
      else setError(data.error || "Failed to submit. Please try again.");
    } catch { setError("Network error. Please call us instead."); }
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-brand-200 text-lg">We're here to help with all your dental needs</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-brand-900 mb-6">Send a Message</h2>
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-4">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSuccess(false)} className="text-brand-600 font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">{error}</div>}
                <input type="text" placeholder="Full Name *" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                <input type="email" placeholder="Email *" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-brand-400 focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Appointment Question</option>
                  <option>Insurance/Billing</option>
                  <option>Emergency</option>
                  <option>Feedback</option>
                </select>
                <textarea placeholder="Your Message *" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                <button type="submit" disabled={loading} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-2.5 rounded-lg font-medium disabled:opacity-50">{loading ? "Sending..." : "Send Message"}</button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-brand-900 mb-3">Office Location</h3>
              <p className="text-gray-700">{siteConfig.address.street}</p>
              <p className="text-gray-700">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-brand-900 mb-3">Phone & Email</h3>
              <p className="text-gray-700"><a href={`tel:${siteConfig.phone}`} className="hover:text-brand-600">📞 {siteConfig.phone}</a></p>
              <p className="text-gray-700"><a href={`tel:${siteConfig.emergencyPhone}`} className="hover:text-brand-600">🚨 Emergency: {siteConfig.emergencyPhone}</a></p>
              <p className="text-gray-700"><a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600">✉️ {siteConfig.email}</a></p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-brand-900 mb-3">Office Hours</h3>
              {siteConfig.hours.map((h, i) => (
                <div key={i} className="flex justify-between text-sm text-gray-700 py-1">
                  <span>{h.day}</span><span>{h.hours}</span>
                </div>
              ))}
              <p className="text-brand-600 text-sm font-medium mt-3">{siteConfig.emergencyHours}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
          <iframe src={siteConfig.mapsEmbed} width="100%" height="400" style={{ border: 0 }} loading="lazy" title="Office location map" />
        </div>
      </div>
    </div>
  );
}
