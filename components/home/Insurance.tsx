import { insuranceProviders, paymentMethods } from "@/lib/data";
import { Shield, CreditCard, Wallet, Users, BadgeCheck } from "lucide-react";

export function Insurance() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Insurance & Financing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            We believe quality dental care should be accessible. That's why we accept most major insurance
            plans and offer flexible financing options.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Insurance Providers */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-brand-100 p-3">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-900">
                Accepted Insurance Providers
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {insuranceProviders.map((provider) => (
                <div
                  key={provider}
                  className="flex items-center gap-2 rounded-xl border border-brand-100 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-800"
                >
                  <BadgeCheck className="h-4 w-4 flex-shrink-0 text-brand-500" />
                  {provider}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-brand-600">
              We accept most PPO plans and file claims on your behalf. For HMO plans, please call to verify.
              Don't see your provider? Give us a call—we may still accept it.
            </p>
          </div>

          {/* Financing Options */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-brand-100 p-3">
                <CreditCard className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-900">
                Financing & Payment Options
              </h3>
            </div>
            <div className="space-y-4">
              {/* Membership plan */}
              <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-5">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-600" />
                  <h4 className="font-semibold text-brand-900">Dental Membership Plan</h4>
                </div>
                <p className="mt-2 text-sm text-brand-700">
                  No insurance? No problem. For $299/year, get 2 cleanings, 2 exams, X-rays, and 15% off all
                  other procedures.
                </p>
              </div>

              {/* CareCredit */}
              <div className="rounded-xl border border-brand-100 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-brand-600" />
                  <h4 className="font-semibold text-brand-900">CareCredit Financing</h4>
                </div>
                <p className="mt-2 text-sm text-brand-700">
                  0% interest plans for qualified applicants. Spread the cost of treatment over 6, 12, or 24
                  months with no hidden fees.
                </p>
              </div>

              {/* Payment methods */}
              <div className="rounded-xl border border-brand-100 bg-white p-5">
                <h4 className="font-semibold text-brand-900">Accepted Payment Methods</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {paymentMethods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-700"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cash patient discount */}
              <div className="rounded-xl bg-accent-50 p-5">
                <p className="text-sm text-accent-800">
                  <strong>5% Discount</strong> for treatment paid in full with cash or check.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
