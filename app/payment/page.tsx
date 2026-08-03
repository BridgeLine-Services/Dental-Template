"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientName, setPatientName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    if (!amount || !serviceName) { setError("Please enter an amount and service description."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/createPaymentSession", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount), serviceName, patientEmail, patientName }),
      });
      const data = await res.json();
      if (data.success && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setError(data.message || data.error || "Payment not configured yet. Please call (555) 123-4567 to pay by phone.");
      }
    } catch {
      setError("Network error. Please call (555) 123-4567 to make a payment.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-brand-700 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-brand-900 text-white px-6 py-8 text-center">
          <h1 className="text-2xl font-bold">Online Payment</h1>
          <p className="text-brand-200 text-sm mt-2">Secure payment via Stripe</p>
        </div>
        <div className="p-6 space-y-4">
          {error && <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg p-3">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
            <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={patientEmail} onChange={e => setPatientEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service / Description</label>
            <input type="text" value={serviceName} onChange={e => setServiceName(e.target.value)} placeholder="e.g., Teeth Whitening" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USD)</label>
            <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <button onClick={handlePay} disabled={loading} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-lg font-medium disabled:opacity-50">
            {loading ? "Processing..." : "Pay with Stripe"}
          </button>
          <p className="text-center text-xs text-gray-500">Your payment is secured by Stripe. We never store your card information.</p>
        </div>
      </div>
    </div>
  );
}
