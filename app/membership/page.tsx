import Link from 'next/link'
import { Check, Star, ArrowRight } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: "Dental Membership Plans — Save on Preventive Care",
  description: "Affordable in-house dental membership plans starting at $29/month. Includes cleanings, exams, x-rays, and discounts on treatments. No insurance needed.",
  path: "/membership",
})

const plans = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    description: "Essential preventive care for individuals",
    features: [
      "2 routine cleanings per year",
      "2 comprehensive exams per year",
      "1 set of x-rays per year",
      "10% off all other treatments",
      "Priority emergency scheduling",
      "No deductibles or copays",
    ],
    popular: false,
    color: "from-brand-400 to-brand-600",
  },
  {
    name: "Plus",
    price: 49,
    period: "month",
    description: "Comprehensive care with added benefits",
    features: [
      "Everything in Basic, plus:",
      "3 routine cleanings per year",
      "Fluoride treatments included",
      "20% off all other treatments",
      "Free emergency exam",
      "1 custom mouth guard per year",
      "Teeth whitening discount",
    ],
    popular: true,
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "Premium",
    price: 99,
    period: "month",
    description: "Complete coverage for the whole family",
    features: [
      "Everything in Plus, plus:",
      "4 routine cleanings per year",
      "Periodontal maintenance included",
      "30% off all other treatments",
      "2 custom mouth guards per year",
      "Invisalign discount ($500 off)",
      "Family coverage (up to 4 members)",
      "Free custom whitening trays",
    ],
    popular: false,
    color: "from-brand-600 to-brand-800",
  },
]

const comparisonRows = [
  { feature: "Annual cleanings", basic: "2", plus: "3", premium: "4" },
  { feature: "Annual exams", basic: "2", plus: "2", premium: "4" },
  { feature: "X-rays", basic: "1 set", plus: "1 set", premium: "2 sets" },
  { feature: "Fluoride treatment", basic: "—", plus: "✓", premium: "✓" },
  { feature: "Treatment discount", basic: "10%", plus: "20%", premium: "30%" },
  { feature: "Emergency exam", basic: "Priority", plus: "Free", premium: "Free" },
  { feature: "Custom mouth guard", basic: "—", plus: "1/year", premium: "2/year" },
  { feature: "Teeth whitening", basic: "—", plus: "Discount", premium: "Free trays" },
  { feature: "Invisalign discount", basic: "—", plus: "—", premium: "$500 off" },
  { feature: "Family coverage", basic: "Individual", plus: "Individual", premium: "Up to 4" },
]

export default function MembershipPage() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">No Insurance? No Problem.</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Dental Membership Plans
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Get the preventive care you need at a predictable monthly price. No deductibles, no annual maximums, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-lg border-2 ${plan.popular ? 'border-brand-500 scale-105' : 'border-slate-100'} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" /> Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} -mt-8 -mx-8 mb-6 p-6 rounded-t-3xl text-white`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-white/80 mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-slate-900">${plan.price}</span>
                <span className="text-slate-500 ml-2">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/payment?plan=${plan.name.toLowerCase()}`}
                className={`block text-center py-3 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-500' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'}`}
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Plan Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-slate-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-700">Basic</th>
                  <th className="text-center p-4 font-semibold text-brand-600 bg-brand-50">Plus</th>
                  <th className="text-center p-4 font-semibold text-slate-700">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-4 text-sm font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-sm text-center text-slate-600">{row.basic}</td>
                    <td className="p-4 text-sm text-center text-slate-700 bg-brand-50/50 font-medium">{row.plus}</td>
                    <td className="p-4 text-sm text-center text-slate-600">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-brand-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Have Questions About Membership?</h3>
          <p className="text-slate-600 mb-6">Our team is happy to help you choose the right plan for your needs and budget.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-1 text-brand-600 font-bold hover:underline">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/faq" className="inline-flex items-center gap-1 text-brand-600 font-bold hover:underline">
              Read FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
