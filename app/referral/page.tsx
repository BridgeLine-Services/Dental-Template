'use client'
import { useState } from 'react'
import { Gift, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function ReferralPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ referrerName: '', referrerEmail: '', referredName: '', referredEmail: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/referrals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-200 text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Referral Submitted!</h2>
          <p className="text-slate-600 mb-6">Thank you for referring your friend. We'll reach out to them soon.</p>
          <button onClick={() => { setSubmitted(false); setForm({ referrerName: '', referrerEmail: '', referredName: '', referredEmail: '' }) }} className="text-brand-600 font-bold hover:underline">Submit another referral</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-100 rounded-full mb-6">
            <Gift className="w-10 h-10 text-brand-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Refer a Friend, Get $50</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">Share your smile with friends and family. When they visit us, you both get $50 in dental credit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { step: 1, title: 'Refer a Friend', desc: 'Share your positive experience with friends, family, or coworkers.', icon: Users },
            { step: 2, title: 'They Visit Us', desc: 'Your referral books and completes their first appointment with us.', icon: CheckCircle },
            { step: 3, title: 'You Both Get $50', desc: 'You each receive a $50 credit toward any dental service.', icon: Gift },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-brand-600" />
              </div>
              <div className="text-brand-600 font-bold text-sm mb-2">Step {item.step}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Submit a Referral</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input type="text" required value={form.referrerName} onChange={(e) => setForm({ ...form, referrerName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
              <input type="email" required value={form.referrerEmail} onChange={(e) => setForm({ ...form, referrerEmail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div className="border-t border-slate-200 pt-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Friend's Name</label>
              <input type="text" required value={form.referredName} onChange={(e) => setForm({ ...form, referredName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Friend's Email</label>
              <input type="email" required value={form.referredEmail} onChange={(e) => setForm({ ...form, referredEmail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
              Submit Referral <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
