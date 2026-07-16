"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Calendar,
  Clock,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Plus
} from "lucide-react";

// Mock Dentists Data
const initialDentists = [
  {
    id: "DEN-01",
    name: "Dr. Sarah Jenkins",
    specialty: "Cosmetic & General Dentistry",
    experience: "12 years exp.",
    patientsCount: 1240,
    phone: "(555) 111-2222",
    email: "s.jenkins@dentalpractice.com",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
    isAvailable: true,
    schedule: {
      Mon: "08:00 AM - 05:00 PM",
      Tue: "08:00 AM - 05:00 PM",
      Wed: "08:00 AM - 05:00 PM",
      Thu: "08:00 AM - 05:00 PM",
      Fri: "08:00 AM - 02:00 PM",
    },
  },
  {
    id: "DEN-02",
    name: "Dr. Marcus Vance",
    specialty: "Endodontics & Periodontics",
    experience: "8 years exp.",
    patientsCount: 890,
    phone: "(555) 111-3333",
    email: "m.vance@dentalpractice.com",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
    isAvailable: true,
    schedule: {
      Mon: "09:00 AM - 06:00 PM",
      Tue: "09:00 AM - 06:00 PM",
      Wed: "Off",
      Thu: "09:00 AM - 06:00 PM",
      Fri: "09:00 AM - 04:00 PM",
    },
  },
  {
    id: "DEN-03",
    name: "Dr. Alicia Patel",
    specialty: "Orthodontist & Pediatrics",
    experience: "15 years exp.",
    patientsCount: 1650,
    phone: "(555) 111-4444",
    email: "a.patel@dentalpractice.com",
    avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=200",
    isAvailable: false,
    schedule: {
      Mon: "Off",
      Tue: "08:00 AM - 05:00 PM",
      Wed: "08:00 AM - 05:00 PM",
      Thu: "08:00 AM - 05:00 PM",
      Fri: "08:00 AM - 05:00 PM",
    },
  },
];

export default function DentistsPage() {
  const [dentists, setDentists] = useState(initialDentists);

  const toggleAvailability = (id: string) => {
    setDentists((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isAvailable: !d.isAvailable } : d))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Dentist Schedules
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Manage dentist staff rotas, specialties, schedules, and shifts.
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Plus className="w-4 h-4" />
            Add New Dentist
          </button>
        </div>
      </div>

      {/* Dentists Grid List */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {dentists.map((dentist) => (
          <div
            key={dentist.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all duration-300"
          >
            {/* Left side: Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:w-1/3">
              <div className="relative">
                <img
                  src={dentist.avatar}
                  alt={dentist.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-gray-50"
                />
                <span
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-white ${
                    dentist.isAvailable ? "bg-emerald-500" : "bg-gray-300"
                  }`}
                ></span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {dentist.name}
                </h3>
                <span className="text-xs font-semibold text-brand-600 uppercase mt-1 inline-block">
                  {dentist.specialty}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <Award className="w-4 h-4 text-accent-500" />
                <span>{dentist.experience}</span>
              </div>

              {/* Status and Action toggle */}
              <div className="w-full pt-4 border-t border-gray-100 flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    Available Today
                  </span>
                  {/* Toggle Switch */}
                  <button
                    onClick={() => toggleAvailability(dentist.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      dentist.isAvailable ? "bg-brand-500" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        dentist.isAvailable ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <span className="text-xs font-medium text-gray-400">
                  {dentist.patientsCount.toLocaleString()} total clinical patients
                </span>
              </div>
            </div>

            {/* Right side: Contact & Weekly Shifts */}
            <div className="flex-1 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                  Staff Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <Phone className="w-3.5 h-3.5 text-brand-500" />
                    <span>{dentist.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <Mail className="w-3.5 h-3.5 text-brand-500" />
                    <span className="truncate">{dentist.email}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                  Weekly Schedule & Rotas
                </h4>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100">
                  {Object.entries(dentist.schedule).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between px-4 py-2.5 text-xs"
                    >
                      <span className="font-bold text-gray-700">{day}</span>
                      <span
                        className={`font-semibold ${
                          hours === "Off"
                            ? "text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md"
                            : "text-gray-600"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
