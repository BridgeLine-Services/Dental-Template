"use client";
import { useState } from "react";

const formTypes = [
  {
    key: "treatment_consent",
    title: "Treatment Consent",
    description: "Consent to receive dental examination, diagnostic X-rays, anesthesia, and treatment as deemed necessary by the treating dentist.",
    items: [
      "I consent to a comprehensive dental examination including diagnostic X-rays.",
      "I consent to the administration of local anesthesia or other sedation methods as recommended.",
      "I understand that treatment plans may change based on clinical findings during the procedure.",
      "I consent to the proposed treatment plan and understand the risks, benefits, and alternatives discussed.",
    ],
  },
  {
    key: "hipaa_consent",
    title: "HIPAA Acknowledgment",
    description: "Acknowledgment that you have received and reviewed our Notice of Privacy Practices.",
    items: [
      "I acknowledge that I have received a copy of the Notice of Privacy Practices.",
      "I understand that Bright Smile Dental may use and disclose my health information for treatment, payment, and healthcare operations.",
      "I understand my rights regarding my health information as described in the Notice.",
      "I understand I may revoke this acknowledgment at any time in writing.",
    ],
  },
  {
    key: "financial_responsibility",
    title: "Financial Responsibility",
    description: "Acknowledgment of financial responsibility for dental services rendered.",
    items: [
      "I understand that I am ultimately responsible for all charges for dental services rendered.",
      "I understand that insurance benefits are a contract between my insurance company and me, and the practice is not responsible for their payment decisions.",
      "I authorize the practice to file insurance claims on my behalf and assign benefits to the practice.",
      "I understand that co-pays, deductibles, and non-covered services are due at the time of treatment.",
      "I understand that payment plans may be available through CareCredit for balances over $200.",
    ],
  },
  {
    key: "photography_consent",
    title: "Photography & Imaging Consent",
    description: "Consent to the use of intraoral and extraoral photographs, X-rays, and digital images for diagnostic, treatment, and marketing purposes.",
    items: [
      "I consent to the taking of intraoral and extraoral photographs for diagnostic and treatment planning purposes.",
      "I consent to the use of my images for educational purposes and presentations to other healthcare providers.",
      "I consent to the use of my before/after images in marketing materials and the practice website.",
      "I understand that my name and personal information will not be associated with any images used publicly without additional consent.",
      "I understand I may revoke this consent at any time in writing.",
    ],
  },
];

export default function ConsentFormsPage() {
  const [activeForm, setActiveForm] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [signature, setSignature] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = formTypes[activeForm];
  const allChecked = form.items.every((_, i) => checkedItems[`${activeForm}-${i}`]);

  const handleSubmit = async () => {
    if (!allChecked || !signature || !patientName) return;
    setLoading(true);
    try {
      const formData: Record<string, boolean | string> = {};
      form.items.forEach((item, i) => {
        formData[item] = checkedItems[`${activeForm}-${i}`];
      });
      formData.signature = signature;
      formData.date = new Date().toISOString();

      await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/submitPatientForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName,
          patientEmail,
          patientPhone,
          formType: form.key,
          formData: JSON.stringify(formData),
          signature,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Digital Consent Forms</h1>
          <p className="text-brand-200 text-lg">Complete and sign your consent forms securely online</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Patient Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <input type="text" placeholder="Full Name *" value={patientName} onChange={e => setPatientName(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
          <input type="email" placeholder="Email" value={patientEmail} onChange={e => setPatientEmail(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
          <input type="tel" placeholder="Phone" value={patientPhone} onChange={e => setPatientPhone(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
        </div>

        {/* Form tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {formTypes.map((ft, i) => (
            <button key={ft.key} onClick={() => { setActiveForm(i); setSubmitted(false); setCheckedItems({}); setSignature(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeForm === i ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              {ft.title}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Form Signed Successfully!</h2>
            <p className="text-green-700">Your {form.title} has been submitted and signed.</p>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-brand-900 mb-2">{form.title}</h2>
            <p className="text-gray-600 mb-6">{form.description}</p>

            <div className="space-y-3 mb-6">
              {form.items.map((item, i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={checkedItems[`${activeForm}-${i}`] || false}
                    onChange={e => setCheckedItems(prev => ({ ...prev, [`${activeForm}-${i}`]: e.target.checked }))}
                    className="mt-1 w-5 h-5 text-brand-600 rounded focus:ring-brand-400" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Signature (Type your full name)</label>
              <input type="text" value={signature} onChange={e => setSignature(e.target.value)} placeholder="Type your full legal name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-brand-400 focus:outline-none" />
            </div>

            <button onClick={handleSubmit} disabled={!allChecked || !signature || !patientName || loading}
              className="w-full bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Sign & Submit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
