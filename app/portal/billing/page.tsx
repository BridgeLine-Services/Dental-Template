'use client'
import { CreditCard, Receipt, Download, AlertCircle } from 'lucide-react'

export default function PortalBilling() {
  const balance = 1200
  const mockPayments = [
    { id: 1, service: 'Routine Cleaning', amount: 120, date: 'Aug 1, 2026', status: 'paid' },
    { id: 2, service: 'X-Rays', amount: 85, date: 'Jul 15, 2026', status: 'paid' },
    { id: 3, service: 'Crown Procedure', amount: 1200, date: 'Pending', status: 'due' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Billing & Payments</h1>
        <p className="text-slate-600 mb-8">View your balance and payment history.</p>

        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-6 text-white mb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-brand-100 text-sm">Outstanding Balance</p>
              <p className="text-3xl font-extrabold">${balance.toLocaleString()}</p>
            </div>
            <a href="/payment" className="bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Pay Now
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center gap-2">
            <Receipt className="w-5 h-5 text-brand-600" />
            <h2 className="font-bold text-slate-900">Payment History</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {mockPayments.map((p) => (
              <div key={p.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{p.service}</p>
                  <p className="text-xs text-slate-500">{p.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-medium ${p.status === 'paid' ? 'text-green-600' : 'text-amber-600'}`}>
                    ${p.amount}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${p.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {p.status === 'paid' ? 'Paid' : 'Due'}
                  </span>
                  {p.status === 'paid' && (
                    <button className="text-slate-400 hover:text-brand-600">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            Need a payment plan? We offer financing through CareCredit, Cherry, and Sunbit. Visit our{' '}
            <a href="/financing-calculator" className="font-bold underline">financing calculator</a> to estimate monthly payments.
          </p>
        </div>
      </div>
    </div>
  )
}
