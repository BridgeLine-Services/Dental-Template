'use client'
import { useState } from 'react'
import { Check, ArrowRight, FileText, ShieldCheck } from 'lucide-react'

export default function XrayconsentForm() {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'xray-consent',
        formData: data,
        patientName: data.patientName || 'Patient',
      }),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-200 text-center max-w-md">
          <Check className="w-16 h-16 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Form Submitted!</h2>
          <p className="text-slate-600">Your X-Ray Consent form has been received. We'll review it before your next visit.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-brand-600" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">X-Ray Consent Form</h1>
            <p className="text-sm text-slate-500">Please complete all fields below</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={data.patientName || ''}
                onChange={(e) => setData({ ...data, patientName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
              <input
                type="date"
                required
                value={data.dateOfBirth || ''}
                onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={data.date || ''}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              />
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
              <ShieldCheck className="w-5 h-5 inline mr-1" />
              By signing below, you acknowledge that you have read and understand this form.
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Digital Signature (type your full name)
              </label>
              <input
                type="text"
                required
                placeholder="Type your full legal name"
                value={data.signature || ''}
                onChange={(e) => setData({ ...data, signature: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              Submit Form <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
