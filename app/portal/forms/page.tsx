"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const availableForms = [
  { key: "new_patient", title: "New Patient Registration", description: "Complete your registration to join our practice" },
  { key: "medical_history", title: "Medical History Update", description: "Update your medical history and medications" },
  { key: "hipaa_consent", title: "HIPAA Acknowledgment", description: "Acknowledge our Notice of Privacy Practices" },
  { key: "treatment_consent", title: "Treatment Consent", description: "Consent to dental treatment" },
];

export default function PortalForms() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedForm, setSelectedForm] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [signature, setSignature] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const e = localStorage.getItem("patientEmail");
    const n = localStorage.getItem("patientName");
    if (!e) { router.push("/login"); return; }
    setEmail(e);
    setName(n || "");
  }, [router]);

  const handleSubmit = async () => {
    if (!selectedForm || !signature) return;
    const form = availableForms[selectedForm - 1];
    await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/submitPatientForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientName: name, patientEmail: email, formType: form.key, formData: JSON.stringify(formData), signature }),
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-900 text-white px-4 py-4 flex items-center gap-3">
        <Link href="/portal" className="text-brand-200 hover:text-white text-sm">← Portal</Link>
        <h1 className="text-lg font-bold">Patient Forms</h1>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {selectedForm === null ? (
          <>
            <h2 className="text-xl font-bold text-brand-900 mb-4">Available Forms</h2>
            <div className="space-y-3">
              {availableForms.map((f, i) => (
                <button key={i} onClick={() => { setSelectedForm(i + 1); setSubmitted(false); }}
                  className="w-full text-left bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-400 transition-colors">
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.description}</p>
                </button>
              ))}
            </div>
          </>
        ) : submitted ? (
          <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Form Submitted!</h2>
            <p className="text-green-700 mb-4">Your form has been received.</p>
            <button onClick={() => { setSelectedForm(null); setSubmitted(false); }} className="text-brand-600 font-medium hover:underline">Back to forms</button>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <button onClick={() => setSelectedForm(null)} className="text-sm text-gray-500 hover:text-gray-700 mb-4">← Back to forms</button>
            <h3 className="text-xl font-bold text-brand-900 mb-2">{availableForms[selectedForm - 1].title}</h3>
            <p className="text-gray-600 mb-6">{availableForms[selectedForm - 1].description}</p>

            {selectedForm === 1 && (
              <div className="space-y-3 mb-6">
                <input type="text" placeholder="Full Legal Name" onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="date" placeholder="Date of Birth" onChange={e => setFormData({...formData, dob: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="tel" placeholder="Phone Number" onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="text" placeholder="Address" onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="text" placeholder="Insurance Provider" onChange={e => setFormData({...formData, insurance: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
            )}
            {(selectedForm === 2) && (
              <div className="space-y-3 mb-6">
                <textarea placeholder="Current medical conditions" onChange={e => setFormData({...formData, conditions: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[80px]" />
                <textarea placeholder="Current medications" onChange={e => setFormData({...formData, medications: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[80px]" />
                <input type="text" placeholder="Allergies" onChange={e => setFormData({...formData, allergies: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="text" placeholder="Emergency Contact Name & Phone" onChange={e => setFormData({...formData, emergency: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
            )}
            {(selectedForm === 3 || selectedForm === 4) && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">Please review and sign the consent form below. By typing your name, you acknowledge that you have read and agree to the terms.</p>
                <div className="mt-3 space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" className="w-4 h-4 text-brand-600" /> I have read and understand the consent form</label>
                  <label className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" className="w-4 h-4 text-brand-600" /> I consent to the terms outlined above</label>
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Signature (type your full name)</label>
              <input type="text" value={signature} onChange={e => setSignature(e.target.value)} placeholder="Your full legal name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
            <button onClick={handleSubmit} disabled={!signature} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-2.5 rounded-lg font-medium disabled:opacity-50">Submit Form</button>
          </div>
        )}
      </div>
    </div>
  );
}
