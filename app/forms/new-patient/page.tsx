'use client'
import { useState } from 'react'
import { User, Shield, Heart, ShieldCheck, ArrowRight, Check } from 'lucide-react'

const steps = [
  { name: 'Personal Info', icon: User, fields: ['firstName', 'lastName', 'dateOfBirth', 'phone', 'email', 'address', 'city', 'state', 'zip'] },
  { name: 'Insurance', icon: Shield, fields: ['insuranceProvider', 'memberId', 'groupId'] },
  { name: 'Medical History', icon: Heart, fields: ['conditions', 'allergies', 'medications', 'emergencyContactName', 'emergencyContactPhone'] },
  { name: 'HIPAA Consent', icon: ShieldCheck, fields: ['hipaaAck', 'signature'] },
]

export default function NewPatientForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Record<string, string | boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (k: string, v: string | boolean) => setData({ ...data, [k]: v })
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))
  const submit = async () => {
    await fetch('/api/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: 'new-patient', formData: data, patientName: `${data.firstName} ${data.lastName}` }),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-200 text-center max-w-md">
          <Check className="w-16 h-16 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Registration Complete!</h2>
          <p className="text-slate-600">Your new patient form has been submitted. We'll see you at your appointment!</p>
        </div>
      </div>
    )
  }

  const current = steps[step]
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">New Patient Registration</h1>
        <p className="text-slate-600 mb-8">Complete this form before your first visit to save time.</p>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i === step ? 'bg-brand-600 text-white' : i < step ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-400'}`}>
                {i < step ? <Check className="w-5 h-5" /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className={`w-12 h-0.5 mx-1 ${i < step ? 'bg-brand-300' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-1">{current.name}</h2>
          <p className="text-sm text-slate-500 mb-6">Step {step + 1} of {steps.length}</p>

          <div className="space-y-4">
            {current.fields.map((field) => {
              if (field === 'hipaaAck') {
                return (
                  <label key={field} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 cursor-pointer">
                    <input type="checkbox" checked={!!data[field]} onChange={(e) => update(field, e.target.checked)} className="mt-1 accent-brand-600" />
                    <span className="text-sm text-slate-700">I acknowledge I have received and understand the HIPAA Notice of Privacy Practices.</span>
                  </label>
                )
              }
              const isTextarea = ['conditions', 'allergies', 'medications'].includes(field)
              const label = field.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())
              return (
                <div key={field}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
                  {isTextarea ? (
                    <textarea value={(data[field] as string) || ''} onChange={(e) => update(field, e.target.value)} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
                  ) : (
                    <input type={field === 'dateOfBirth' ? 'date' : 'text'} value={(data[field] as string) || ''} onChange={(e) => update(field, e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex justify-between mt-8">
            {step > 0 && <button onClick={prev} className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50">Back</button>}
            {step < steps.length - 1 ? (
              <button onClick={next} className="ml-auto inline-flex items-center gap-1 bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-500">Next <ArrowRight className="w-4 h-4" /></button>
            ) : (
              <button onClick={submit} className="ml-auto bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-500">Submit Registration</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
