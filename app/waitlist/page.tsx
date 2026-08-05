'use client'
import { useState } from 'react'
import { Clock, CheckCircle, Calendar, AlertCircle } from 'lucide-react'

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ patientName: '', email: '', phone: '', serviceSlug: '', preferredDate: '', preferredTime: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-200 text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're on the Waitlist!</h2>
          <p className="text-slate-600">We'll contact you at {form.email} as soon as an appointment slot opens up.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6">
            <Clock className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Join Our Waitlist</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">Our schedule is currently full, but cancellations happen. Join our waitlist and we'll contact you as soon as a slot opens up.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: AlertCircle, title: 'How It Works', desc: 'Submit your preferred date, time, and service. We add you to our priority waitlist.' },
            { icon: Clock, title: 'When Slots Open', desc: 'When we get a cancellation that matches your preferences, we call you immediately.' },
            { icon: CheckCircle, title: 'Get Seen Faster', desc: 'Most waitlist patients are seen within 1-2 weeks of joining.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <item.icon className="w-8 h-8 text-brand-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" required value={form.patientName} onChange={(e) => setForm({ ...form, patientName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
              <select value={form.serviceSlug} onChange={(e) => setForm({ ...form, serviceSlug: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white">
                <option value="">Select a service</option>
                <option value="general-dentistry">General Dentistry</option>
                <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                <option value="teeth-whitening">Teeth Whitening</option>
                <option value="dental-implants">Dental Implants</option>
                <option value="invisalign">Invisalign</option>
                <option value="emergency-dentistry">Emergency</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                <input type="date" value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time</label>
                <select value={form.preferredTime} onChange={(e) => setForm({ ...form, preferredTime: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white">
                  <option value="">Any time</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-3pm)</option>
                  <option value="evening">Evening (3pm-7pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
