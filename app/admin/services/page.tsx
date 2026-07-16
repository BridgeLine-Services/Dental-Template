"use client";

import React, { useState } from "react";
import {
  Activity,
  Plus,
  Edit2,
  DollarSign,
  Clock,
  Eye
} from "lucide-react";

// Mock Services
const initialServices = [
  {
    id: "SER-01",
    title: "Teeth Whitening",
    price: 299,
    duration: "60 mins",
    category: "Cosmetics",
    isActive: true,
  },
  {
    id: "SER-02",
    title: "Dental Implants",
    price: 1499,
    duration: "120 mins",
    category: "Restorative",
    isActive: true,
  },
  {
    id: "SER-03",
    title: "Routine Clean-up",
    price: 99,
    duration: "45 mins",
    category: "Preventative",
    isActive: true,
  },
  {
    id: "SER-04",
    title: "Root Canal Therapy",
    price: 650,
    duration: "90 mins",
    category: "Endodontics",
    isActive: true,
  },
  {
    id: "SER-05",
    title: "Invisalign Alignment",
    price: 3999,
    duration: "30 mins",
    category: "Orthodontics",
    isActive: false,
  },
  {
    id: "SER-06",
    title: "Cavity Filling",
    price: 180,
    duration: "45 mins",
    category: "Restorative",
    isActive: true,
  },
  {
    id: "SER-07",
    title: "Wisdom Tooth Extraction",
    price: 450,
    duration: "75 mins",
    category: "Surgery",
    isActive: true,
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices);

  const toggleService = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Services & Pricing
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Manage your clinic&apos;s catalog of services, pricing structures, and durations.
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Plus className="w-4 h-4" />
            Add New Service
          </button>
        </div>
      </div>

      {/* Services Grid cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top section: Title and Status Toggle */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase bg-brand-50 px-2 py-0.5 rounded-md">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-2">
                    {service.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-bold font-mono">
                    {service.id}
                  </span>
                </div>

                {/* Toggle Active status */}
                <button
                  onClick={() => toggleService(service.id)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                    service.isActive ? "bg-brand-500" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      service.isActive ? "translate-x-4.5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Specs (Price & Duration) */}
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>${service.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  service.isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {service.isActive ? "Active Listing" : "Suspended"}
              </span>

              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-800 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-brand-50 text-brand-600 hover:text-brand-700 rounded-lg transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
