"use client";
import { useState, useEffect } from "react";
import { services, dentists, siteConfig } from "@/lib/data";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [serviceSlug, setServiceSlug] = useState("");
  const [dentistId, setDentistId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);
  const [error, setError] = useState("");

  const selectedService = services.find(s => s.slug === serviceSlug);
  const selectedDentist = dentists.find(d => d.id === dentistId);

  useEffect(() => {
    if (dentistId && date) {
      setLoadingSlots(true);
      setAvailableSlots([]);
      setError("");
      fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/checkAvailability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dentistId, date, serviceSlug }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) setAvailableSlots(data.availableSlots || []);
          else setAvailableSlots(["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]);
        })
        .catch(() => setAvailableSlots(["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]))
        .finally(() => setLoadingSlots(false));
    }
  }, [dentistId, date, serviceSlug]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/bookAppointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName, patientEmail, patientPhone,
          dentistId, dentistName: selectedDentist?.name || "",
          serviceSlug, serviceName: selectedService?.title || "",
          date, time,
          isNewPatient, insuranceProvider, notes,
        }),
      });
      const data = await res.json();
      if (data.success) { setConfirmation(data); setStep(5); }
      else setError(data.error || "Failed to book appointment");
    } catch { setError("Network error. Please call (555) 123-4567 to book."); }
    setSubmitting(false);
  };

  const steps = ["Service", "Dentist", "Date & Time", "Your Info"];
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-brand-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-brand-200">Schedule your visit in 4 easy steps</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {confirmation ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-brand-900 mb-2">Appointment Request Received!</h2>
            <p className="text-gray-600 mb-6">{confirmation.message}</p>
            <div className="bg-gray-50 rounded-xl p-6 text-left mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><span className="text-gray-500">Patient:</span> <span className="font-medium">{patientName}</span></p>
                <p><span className="text-gray-500">Service:</span> <span className="font-medium">{selectedService?.title}</span></p>
                <p><span className="text-gray-500">Dentist:</span> <span className="font-medium">{selectedDentist?.name}</span></p>
                <p><span className="text-gray-500">Date:</span> <span className="font-medium">{date}</span></p>
                <p><span className="text-gray-500">Time:</span> <span className="font-medium">{time}</span></p>
                <p><span className="text-gray-500">Patient Type:</span> <span className="font-medium">{isNewPatient ? "New" : "Returning"}</span></p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4">A confirmation email has been sent to {patientEmail}. We'll confirm within 2 hours.</p>
            <a href="/" className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-lg font-medium">Return Home</a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((label, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-brand-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span className={`ml-2 text-sm ${step === i + 1 ? "font-bold text-brand-900" : "text-gray-500"} hidden sm:inline`}>{label}</span>
                  {i < steps.length - 1 && <div className={`w-8 sm:w-12 h-0.5 mx-2 ${step > i + 1 ? "bg-green-500" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">{error}</div>}

            {/* Step 1: Service */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-brand-900 mb-4">Select a Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(s => (
                    <button key={s.slug} onClick={() => { setServiceSlug(s.slug); setStep(2); }}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${serviceSlug === s.slug ? "border-brand-600 bg-brand-50" : "border-gray-200 hover:border-brand-300"}`}>
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-500">{s.shortDescription}</p>
                      <p className="text-xs text-brand-600 mt-1">From {s.startingPrice}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Dentist */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-brand-900 mb-4">Choose Your Dentist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => { setDentistId(""); setStep(3); }} className={`text-left p-4 rounded-xl border-2 ${dentistId === "" ? "border-brand-600 bg-brand-50" : "border-gray-200 hover:border-brand-300"}`}>
                    <p className="font-semibold">No Preference</p><p className="text-sm text-gray-500">First available dentist</p>
                  </button>
                  {dentists.map(d => (
                    <button key={d.id} onClick={() => { setDentistId(d.id); setStep(3); }}
                      className={`text-left p-4 rounded-xl border-2 flex items-center gap-3 ${dentistId === d.id ? "border-brand-600 bg-brand-50" : "border-gray-200 hover:border-brand-300"}`}>
                      <img src={d.photo} alt={d.name} className="w-12 h-12 rounded-full object-cover" />
                      <div><p className="font-semibold text-gray-900">{d.name}</p><p className="text-sm text-gray-500">{d.title.split("—")[0]}</p></div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Back</button>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-brand-900 mb-4">Pick a Date & Time</h2>
                <input type="date" min={today} value={date} onChange={e => setDate(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                {date && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Times:</p>
                    {loadingSlots ? (
                      <p className="text-gray-500">Checking availability...</p>
                    ) : availableSlots.length > 0 ? (
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {availableSlots.map(slot => (
                          <button key={slot} onClick={() => { setTime(slot); setStep(4); }}
                            className={`py-2 rounded-lg border text-sm font-medium transition-all ${time === slot ? "border-brand-600 bg-brand-600 text-white" : "border-gray-200 hover:border-brand-300"}`}>
                            {parseInt(slot) > 12 ? `${parseInt(slot) - 12}:00 PM` : `${parseInt(slot)}:00 AM`}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No availability on this date. Please try another date.</p>
                    )}
                  </div>
                )}
                <button onClick={() => setStep(2)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Back</button>
              </div>
            )}

            {/* Step 4: Patient Info */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-brand-900 mb-4">Your Information</h2>
                <div className="space-y-3">
                  <input type="text" placeholder="Full Name *" value={patientName} onChange={e => setPatientName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                  <input type="email" placeholder="Email Address *" value={patientEmail} onChange={e => setPatientEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                  <input type="tel" placeholder="Phone Number *" value={patientPhone} onChange={e => setPatientPhone(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="radio" checked={isNewPatient} onChange={() => setIsNewPatient(true)} className="text-brand-600" /> New Patient</label>
                    <label className="flex items-center gap-2"><input type="radio" checked={!isNewPatient} onChange={() => setIsNewPatient(false)} className="text-brand-600" /> Returning Patient</label>
                  </div>
                  <input type="text" placeholder="Insurance Provider (optional)" value={insuranceProvider} onChange={e => setInsuranceProvider(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                  <textarea placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[80px] focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setStep(3)} className="text-sm text-gray-500 hover:text-gray-700">← Back</button>
                  <button onClick={handleSubmit} disabled={!patientName || !patientEmail || !patientPhone || submitting}
                    className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-lg font-medium disabled:opacity-50">
                    {submitting ? "Booking..." : "Confirm Appointment"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
