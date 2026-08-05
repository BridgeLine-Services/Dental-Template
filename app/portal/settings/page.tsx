'use client'
import { useState } from 'react'
import { User, Lock, Bell, Shield, Save } from 'lucide-react'

export default function PortalSettings() {
  const [tab, setTab] = useState('profile')
  const [prefs, setPrefs] = useState({
    emailReminders: true,
    smsReminders: true,
    marketingEmails: false,
    newsletter: true,
    reviewRequests: true,
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Settings</h1>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap ${
                tab === t.id ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <t.icon className="w-4 h-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          {tab === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" defaultValue="(555) 123-4567" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <button className="bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-500 inline-flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          )}

          {tab === 'security' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
                <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <button className="bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-500 inline-flex items-center gap-2">
                <Lock className="w-4 h-4" /> Update Password
              </button>
            </div>
          )}

          {tab === 'notifications' && (
            <div className="space-y-3">
              {Object.entries(prefs).map(([key, val]) => (
                <label key={key} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span className="text-sm text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) => setPrefs({ ...prefs, [key]: e.target.checked })}
                    className="accent-brand-600 w-5 h-5"
                  />
                </label>
              ))}
            </div>
          )}

          {tab === 'privacy' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Your privacy is protected under HIPAA. We never share your health information without your consent.
              </p>
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                <input type="checkbox" className="mt-1 accent-brand-600" />
                <span className="text-sm text-slate-700">Opt out of marketing communications</span>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                <input type="checkbox" className="mt-1 accent-brand-600" />
                <span className="text-sm text-slate-700">Request a copy of my health records</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
