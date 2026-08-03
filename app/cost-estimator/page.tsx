"use client";
import { useState } from "react";

const servicePrices: Record<string, { min: number; max: number; name: string }> = {
  "general-dentistry": { min: 89, max: 200, name: "General Dentistry" },
  "teeth-whitening": { min: 199, max: 399, name: "Teeth Whitening" },
  "dental-implants": { min: 1500, max: 4500, name: "Dental Implants" },
  "invisalign": { min: 3500, max: 6000, name: "Invisalign" },
  "veneers": { min: 800, max: 2000, name: "Veneers" },
  "crowns": { min: 1200, max: 1800, name: "Crowns" },
  "root-canals": { min: 900, max: 1400, name: "Root Canals" },
  "fillings": { min: 150, max: 400, name: "Fillings" },
  "extractions": { min: 200, max: 600, name: "Extractions" },
  "dentures": { min: 1800, max: 3500, name: "Dentures" },
};

const insuranceCoverage: Record<string, number> = {
  "ppo": 0.8,
  "hmo": 0.6,
  "membership": 0.85,
  "cash": 0.95,
  "none": 1,
};

export default function CostEstimatorPage() {
  const [service, setService] = useState("");
  const [insurance, setInsurance] = useState("none");
  const [showEstimate, setShowEstimate] = useState(false);

  const selectedService = service ? servicePrices[service] : null;
  const coverageRate = insuranceCoverage[insurance] || 1;
  const estimatedCost = selectedService ? {
    total: selectedService.min + (selectedService.max - selectedService.min) / 2,
    outOfPocket: (selectedService.min + (selectedService.max - selectedService.min) / 2) * coverageRate,
    insurancePays: (selectedService.min + (selectedService.max - selectedService.min) / 2) * (1 - coverageRate),
  } : null;

  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Treatment Cost Estimator</h1>
          <p className="text-brand-200 text-lg">Get an estimated cost for your dental treatment</p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select a Service</label>
            <select value={service} onChange={e => { setService(e.target.value); setShowEstimate(false); }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-brand-400 focus:outline-none">
              <option value="">Choose a service...</option>
              {Object.entries(servicePrices).map(([key, val]) => (
                <option key={key} value={key}>{val.name} (${val.min}–${val.max})</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
            <select value={insurance} onChange={e => { setInsurance(e.target.value); setShowEstimate(false); }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-brand-400 focus:outline-none">
              <option value="none">No Insurance / Cash Pay</option>
              <option value="ppo">PPO Insurance</option>
              <option value="hmo">HMO Insurance</option>
              <option value="membership">In-House Membership Plan</option>
            </select>
          </div>
          <button onClick={() => setShowEstimate(true)} disabled={!service}
            className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50">
            Get Cost Estimate
          </button>
        </div>

        {showEstimate && estimatedCost && selectedService && (
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-brand-900 mb-6">Estimated Costs for {selectedService.name}</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Estimated Total Cost</span>
                <span className="font-semibold text-gray-900">${estimatedCost.total.toFixed(0)}</span>
              </div>
              {insurance !== "none" && (
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Estimated Insurance Coverage</span>
                  <span className="font-semibold text-green-600">-${estimatedCost.insurancePays.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between py-3">
                <span className="text-gray-600 font-medium">Estimated Out-of-Pocket</span>
                <span className="font-bold text-brand-600 text-lg">${estimatedCost.outOfPocket.toFixed(0)}</span>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Disclaimer:</strong> This is an estimate only. Actual costs may vary based on your specific treatment plan, individual case complexity, and insurance plan details. We provide a detailed cost breakdown before any treatment begins. No surprises — ever.
              </p>
            </div>
            <a href="/booking" className="mt-6 block w-full text-center bg-brand-900 text-white py-3 rounded-lg font-medium hover:bg-brand-800 transition-colors">
              Schedule a Consultation
            </a>
          </div>
        )}

        <div className="mt-6 bg-brand-50 rounded-xl p-6 border border-brand-100">
          <h3 className="font-bold text-brand-900 mb-2">Need Help with Financing?</h3>
          <p className="text-gray-700 text-sm mb-3">We offer CareCredit with 0% interest for 6-12 months and flexible monthly payment plans.</p>
          <a href="/contact" className="text-brand-600 font-medium text-sm hover:underline">Learn about financing options →</a>
        </div>
      </div>
    </div>
  );
}
