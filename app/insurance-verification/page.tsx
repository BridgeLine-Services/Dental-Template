"use client";
import { useState } from "react";

export default function InsuranceVerificationPage() {
  const [providerName, setProviderName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/verifyInsurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providerName, patientName, patientEmail }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ success: false, message: "Unable to verify at this time. Please call (555) 123-4567." });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Insurance Verification</h1>
          <p className="text-brand-200 text-lg">Check if we accept your insurance — instantly</p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Provider Name</label>
              <input type="text" value={providerName} onChange={e => setProviderName(e.target.value)}
                placeholder="e.g., Delta Dental, Cigna, Aetna"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name (optional)</label>
              <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)}
                placeholder="First and last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email (optional)</label>
              <input type="email" value={patientEmail} onChange={e => setPatientEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
            </div>
            <button type="submit" disabled={loading || !providerName}
              className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50">
              {loading ? "Checking..." : "Verify Insurance"}
            </button>
          </div>
        </form>

        {result && (
          <div className={`mt-6 p-6 rounded-xl border ${result.success && result.isAccepted ? "bg-green-50 border-green-200" : result.success && !result.isAccepted ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200"}`}>
            <h3 className="text-lg font-bold mb-2">{result.success && result.isAccepted ? "✅ Insurance Accepted!" : result.success ? "⚠️ Out of Network" : "❌ Verification Error"}</h3>
            <p className="text-gray-700 mb-4">{result.message}</p>
            {result.acceptedProviders && result.acceptedProviders.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Accepted Insurance Providers:</p>
                <div className="flex flex-wrap gap-2">
                  {result.acceptedProviders.map((p: string, i: number) => (
                    <span key={i} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">{p}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 bg-brand-50 rounded-xl p-6 border border-brand-100">
          <h3 className="text-lg font-bold text-brand-900 mb-2">No Insurance? No Problem!</h3>
          <p className="text-gray-700 mb-3">We offer an in-house membership plan starting at $199/year. Includes two cleanings, exams, X-rays, and 15% off all other services. No deductibles, no annual maximums, no waiting periods.</p>
          <a href="/contact" className="text-brand-600 font-medium hover:underline">Learn more about our membership plan →</a>
        </div>
      </div>
    </div>
  );
}
