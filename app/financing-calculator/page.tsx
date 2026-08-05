'use client'
import { useState, useMemo } from 'react'
import { Calculator, CreditCard, Info } from 'lucide-react'
import { calculateMonthlyPayment, getTotalCost, getTotalInterest } from '@/lib/financing'

export default function FinancingCalculatorPage() {
  const [amount, setAmount] = useState(2000)
  const [downPayment, setDownPayment] = useState(0)
  const [months, setMonths] = useState(12)

  const principal = amount - downPayment

  const results = useMemo(() => {
    return [
      { provider: 'CareCredit', apr: 14.9, color: 'text-blue-600', bgColor: 'bg-blue-50', note: 'No interest if paid in 6 months' },
      { provider: 'Cherry', apr: 15.9, color: 'text-pink-600', bgColor: 'bg-pink-50', note: '0-35% APR based on credit' },
      { provider: 'Sunbit', apr: 12.9, color: 'text-amber-600', bgColor: 'bg-amber-50', note: '0-30% APR based on credit' },
    ].map((r) => ({
      ...r,
      monthly: calculateMonthlyPayment(principal, r.apr, months),
      total: getTotalCost(principal, r.apr, months),
      interest: getTotalInterest(principal, r.apr, months),
    }))
  }, [principal, months])

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Financing Calculator</h1>
          <p className="mt-4 text-xl text-slate-600">Estimate your monthly payments with our financing partners. No impact to your credit score.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Treatment Amount: <span className="text-brand-600 font-bold">${amount.toLocaleString()}</span>
              </label>
              <input type="range" min="200" max="20000" step="100" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>$200</span><span>$20,000</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Down Payment: <span className="text-brand-600 font-bold">${downPayment.toLocaleString()}</span>
              </label>
              <input type="range" min="0" max={amount * 0.5} step="50" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-brand-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Repayment Term</label>
              <div className="flex gap-2">
                {[3, 6, 12, 24].map((m) => (
                  <button key={m} onClick={() => setMonths(m)} className={`flex-1 py-2 rounded-xl font-medium text-sm ${months === m ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    {m} mo
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-brand-50 rounded-xl p-4 text-sm text-slate-600 flex items-start gap-2">
              <Info className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
              <span>Amount financed: <strong className="text-slate-900">${principal.toLocaleString()}</strong></span>
            </div>
          </div>

          <div className="space-y-4">
            {results.map((r) => (
              <div key={r.provider} className={`rounded-2xl p-6 border ${r.bgColor} border-slate-100`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={`font-bold text-lg ${r.color}`}>{r.provider}</h3>
                    <p className="text-xs text-slate-500">{r.note}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold text-slate-900">${r.monthly.toFixed(2)}</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-slate-600 pt-2 border-t border-slate-200">
                  <span>APR: {r.apr}%</span>
                  <span>Total: ${r.total.toFixed(2)}</span>
                  <span>Interest: ${r.interest.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-50 rounded-2xl p-6 text-center">
          <CreditCard className="w-8 h-8 text-brand-600 mx-auto mb-3" />
          <h3 className="font-bold text-slate-900 mb-2">HSA & FSA Accepted</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">We accept Health Savings Account and Flexible Spending Account cards for most dental procedures.</p>
          <div className="flex gap-4 justify-center text-sm">
            <span className="bg-white px-4 py-2 rounded-lg font-medium text-slate-700">HSA ✓</span>
            <span className="bg-white px-4 py-2 rounded-lg font-medium text-slate-700">FSA ✓</span>
            <span className="bg-white px-4 py-2 rounded-lg font-medium text-slate-700">Payment Plans ✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}
