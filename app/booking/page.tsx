'use client';

import React, { useState } from 'react';
import { services, dentists, siteConfig } from '@/lib/data';
import { 
  CheckCircle, ArrowLeft, ArrowRight, Calendar as CalendarIcon, 
  Clock, Shield, User, HelpCircle, Loader2, Sparkles 
} from 'lucide-react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    patientType: 'new', // new | returning
    serviceSlug: '',
    dentistId: '',
    date: '',
    timeSlot: '',
    insuranceProvider: '',
    policyNumber: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
  });

  const stepsCount = 6;

  // Handle value change
  const updateField = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  // Mock available time slots
  const timeSlots = [
    "08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM",
    "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM"
  ];

  // Progression checks
  const canGoNext = () => {
    switch (step) {
      case 1:
        return !!formData.patientType;
      case 2:
        return !!formData.serviceSlug;
      case 3:
        return !!formData.dentistId;
      case 4:
        return !!formData.date && !!formData.timeSlot;
      case 5:
        return !!formData.patientName && !!formData.patientEmail && !!formData.patientPhone;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step < stepsCount) {
      setStep(step + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    // Simulate booking API save
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setComplete(true);
    } catch (err) {
      alert("Registration failed. Please contact the office.");
    } finally {
      setLoading(false);
    }
  };

  const selectedService = services.find(s => s.slug === formData.serviceSlug);
  const selectedDentist = dentists.find(d => d.id === formData.dentistId);

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Booking Card Frame */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Header Progress Bar */}
          {!complete && (
            <div className="bg-slate-900 px-8 py-6 text-white relative">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                Step {step} of {stepsCount}
              </span>
              <h1 className="text-2xl font-bold mt-1">Book Your Dental Appointment</h1>
              
              {/* Progress Bar Container */}
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-500 transition-all duration-300"
                  style={{ width: `${(step / stepsCount) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Form Core Panel */}
          {complete ? (
            <div className="p-8 sm:p-12 text-center space-y-6 py-16">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-extrabold">✓</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Appointment Requested!</h2>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.patientName}</strong>. Your provisional slot has been reserved. A booking coordinator will contact you via email or SMS shortly to verify health details and finalize your visit.
              </p>

              {/* Summary Receipt */}
              <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left space-y-3.5 mt-8">
                <h3 className="font-bold text-slate-800 text-sm border-b pb-2 uppercase tracking-wide">Reserved Details:</h3>
                
                <div className="grid grid-cols-2 text-sm">
                  <span className="text-slate-400">Dentist:</span>
                  <span className="font-semibold text-slate-800 text-right">{selectedDentist?.name}</span>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-semibold text-slate-800 text-right">{selectedService?.title}</span>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <span className="text-slate-400">Date:</span>
                  <span className="font-semibold text-slate-800 text-right">{formData.date}</span>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <span className="text-slate-400">Time:</span>
                  <span className="font-semibold text-slate-800 text-right">{formData.timeSlot}</span>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-10 space-y-8 min-h-[400px]">
              
              {/* Step 1: Patient Status */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Are you a new or returning patient?</h3>
                  <p className="text-sm text-slate-500">Select one to customize your initial check-in process.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => updateField('patientType', 'new')}
                      className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-40 transition-all ${
                        formData.patientType === 'new' 
                          ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20' 
                          : 'border-slate-200 hover:border-brand-200 bg-white'
                      }`}
                    >
                      <span className="text-brand-600 font-extrabold text-lg">New Patient</span>
                      <span className="text-xs text-slate-500">I have never visited this dental office before. Includes initial consultation files.</span>
                    </button>

                    <button
                      onClick={() => updateField('patientType', 'returning')}
                      className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-40 transition-all ${
                        formData.patientType === 'returning' 
                          ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20' 
                          : 'border-slate-200 hover:border-brand-200 bg-white'
                      }`}
                    >
                      <span className="text-brand-600 font-extrabold text-lg">Returning Patient</span>
                      <span className="text-xs text-slate-500">I have received checkups or cleanings here previously.</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Select Service */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Select your required dental service</h3>
                  <p className="text-sm text-slate-500">Pick from our foundational and restorative clinical treatments.</p>
                  
                  <div className="grid gap-3 max-h-[300px] overflow-y-auto pr-2">
                    {services.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => updateField('serviceSlug', service.slug)}
                        className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                          formData.serviceSlug === service.slug 
                            ? 'border-brand-500 bg-brand-50/50 ring-1 ring-brand-500/20' 
                            : 'border-slate-100 hover:border-brand-200 bg-white'
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{service.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{service.shortDescription}</p>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">{service.startingPrice} starting</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Dentist */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Choose a Dentist</h3>
                  <p className="text-sm text-slate-500">Select your preferred clinician or pick &apos;Any Doctor&apos; for maximum schedule flexibility.</p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    {dentists.map((dentist) => (
                      <button
                        key={dentist.id}
                        onClick={() => updateField('dentistId', dentist.id)}
                        className={`p-5 rounded-2xl border text-left flex gap-4 items-center transition-all ${
                          formData.dentistId === dentist.id 
                            ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20' 
                            : 'border-slate-200 hover:border-brand-200 bg-white'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 relative flex-shrink-0">
                          <img src={dentist.photo} alt={dentist.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{dentist.name}</p>
                          <p className="text-[11px] text-brand-600 font-medium mt-0.5">{dentist.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Select Date & Time */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Select a Date & Time</h3>
                  <p className="text-sm text-slate-500">Pick an open calendar slot that accommodates your calendar.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateField('date', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Time slots */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Available Times
                      </label>
                      <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => updateField('timeSlot', slot)}
                            className={`p-2.5 text-xs font-bold rounded-lg border text-center transition-all ${
                              formData.timeSlot === slot 
                                ? 'border-brand-500 bg-brand-50 text-brand-700 font-semibold' 
                                : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-brand-200 hover:bg-white'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Insurance & Basic Patient Details */}
              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Enter Your Details</h3>
                  <p className="text-sm text-slate-500">Provide basic contact and optional insurance files to help us pre-verify benefits.</p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.patientName}
                          onChange={(e) => updateField('patientName', e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.patientEmail}
                          onChange={(e) => updateField('patientEmail', e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          value={formData.patientPhone}
                          onChange={(e) => updateField('patientPhone', e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Insurance Provider (Optional)</label>
                        <input
                          type="text"
                          placeholder="Delta Dental, MetLife, etc."
                          value={formData.insuranceProvider}
                          onChange={(e) => updateField('insuranceProvider', e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Policy Number (Optional)</label>
                        <input
                          type="text"
                          placeholder="ID / Member Number"
                          value={formData.policyNumber}
                          onChange={(e) => updateField('policyNumber', e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Confirmation Summary */}
              {step === 6 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Verify Your Information</h3>
                  <p className="text-sm text-slate-500">Please review all values for accuracy before submitting your reservation request.</p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <div className="grid grid-cols-2 text-sm pb-2 border-b border-dashed border-slate-200">
                      <span className="text-slate-400">Patient Status:</span>
                      <span className="font-semibold text-slate-800 text-right capitalize">{formData.patientType} Patient</span>
                    </div>
                    <div className="grid grid-cols-2 text-sm pb-2 border-b border-dashed border-slate-200">
                      <span className="text-slate-400">Service requested:</span>
                      <span className="font-semibold text-slate-800 text-right">{selectedService?.title}</span>
                    </div>
                    <div className="grid grid-cols-2 text-sm pb-2 border-b border-dashed border-slate-200">
                      <span className="text-slate-400">Dentist Selected:</span>
                      <span className="font-semibold text-slate-800 text-right">{selectedDentist?.name}</span>
                    </div>
                    <div className="grid grid-cols-2 text-sm pb-2 border-b border-dashed border-slate-200">
                      <span className="text-slate-400">Date & Time:</span>
                      <span className="font-semibold text-slate-800 text-right">{formData.date} at {formData.timeSlot}</span>
                    </div>
                    <div className="grid grid-cols-2 text-sm">
                      <span className="text-slate-400">Contact:</span>
                      <span className="font-semibold text-slate-800 text-right">{formData.patientName} ({formData.patientPhone})</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Control Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canGoNext() || loading}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                      Booking...
                    </>
                  ) : step === stepsCount ? (
                    'Confirm Reservation'
                  ) : (
                    <>
                      Next <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
