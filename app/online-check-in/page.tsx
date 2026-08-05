'use client'
import { useState } from 'react'
import { CheckCircle, ClipboardCheck, Clock, AlertCircle } from 'lucide-react'

export default function OnlineCheckInPage() {
  const [checkedIn, setCheckedIn] = useState(false)
  const [form, setForm] = useState({ name: '', confirmationCode: '', symptomsChanged: false, insuranceChanged: false, medications: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCheckedIn(true)
  }

  if (checkedIn) {
    return (
      <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-200 text-center max-w-md">
          <CheckCircle className="w-20 h-20 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're Checked In!</h2>
          <p className="text-slate-600 mb-6">Please arrive 10 minutes before your appointment time.</p>
          <div className="bg-brand-50 rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 text-brand-700">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Arrive 10 minutes early</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6">
            <ClipboardCheck className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Online Check-In</h1>
          <p className="mt-4 text-lg text-slate-600">Save time at your appointment by checking in ahead of time.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Appointment Confirmation Code</label>
              <input type="text" required placeholder="e.g., BSD-12345" value={form.confirmationCode} onChange={(e) => setForm({ ...form, confirmationCode: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div className="space-y-3 pt-4">
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 cursor-pointer hover:bg-slate-100">
                <input type="checkbox" checked={form.symptomsChanged} onChange={(e) => setForm({ ...form, symptomsChanged: e.target.checked })} className="mt-1 accent-brand-600" />
                <span className="text-sm text-slate-700">I have new or worsening symptoms since my last visit</span>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 cursor-pointer hover:bg-slate-100">
                <input type="checkbox" checked={form.insuranceChanged} onChange={(e) => setForm({ ...form, insuranceChanged: e.target.checked })} className="mt-1 accent-brand-600" />
                <span className="text-sm text-slate-700">My insurance information has changed</span>
              </label>
            </div>
            {form.symptomsChanged && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Please describe your symptoms</label>
                <textarea value={form.medications} onChange={(e) => setForm({ ...form, medications: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
              </div>
            )}
            <div className="bg-amber-50 rounded-xl p-3 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700">By checking in, you confirm your information is accurate to the best of your knowledge.</p>
            </div>
            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-xl font-bold transition-colors">Complete Check-In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
