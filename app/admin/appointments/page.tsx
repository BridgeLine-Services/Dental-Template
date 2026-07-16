"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  Search,
  Plus,
  Filter,
  Check,
  X,
  FileDown,
  ChevronRight
} from "lucide-react";

// Mock Appointments
const initialAppointments = [
  {
    id: "APT-1001",
    patient: "Michael Chang",
    phone: "(555) 234-5678",
    dentist: "Dr. Sarah Jenkins",
    service: "Dental Implants",
    dateTime: "July 15, 2026 - 09:30 AM",
    status: "confirmed",
  },
  {
    id: "APT-1002",
    patient: "Emily Rodriguez",
    phone: "(555) 345-6789",
    dentist: "Dr. Marcus Vance",
    service: "Teeth Whitening",
    dateTime: "July 15, 2026 - 11:00 AM",
    status: "completed",
  },
  {
    id: "APT-1003",
    patient: "Robert Chen",
    phone: "(555) 456-7890",
    dentist: "Dr. Sarah Jenkins",
    service: "Routine Clean-up",
    dateTime: "July 15, 2026 - 01:30 PM",
    status: "pending",
  },
  {
    id: "APT-1004",
    patient: "Jessica Taylor",
    phone: "(555) 567-8901",
    dentist: "Dr. Marcus Vance",
    service: "Root Canal Therapy",
    dateTime: "July 15, 2026 - 03:00 PM",
    status: "cancelled",
  },
  {
    id: "APT-1005",
    patient: "David Miller",
    phone: "(555) 678-9012",
    dentist: "Dr. Sarah Jenkins",
    service: "Cavity Filling",
    dateTime: "July 16, 2026 - 08:30 AM",
    status: "confirmed",
  },
  {
    id: "APT-1006",
    patient: "Sarah Connor",
    phone: "(555) 789-0123",
    dentist: "Dr. Marcus Vance",
    service: "Invisalign Checkup",
    dateTime: "July 16, 2026 - 10:00 AM",
    status: "confirmed",
  },
  {
    id: "APT-1007",
    patient: "James Wilson",
    phone: "(555) 890-1234",
    dentist: "Dr. Sarah Jenkins",
    service: "Wisdom Tooth Consultation",
    dateTime: "July 16, 2026 - 02:00 PM",
    status: "pending",
  },
  {
    id: "APT-1008",
    patient: "Sophia Martinez",
    phone: "(555) 901-2345",
    dentist: "Dr. Marcus Vance",
    service: "Teeth Whitening",
    dateTime: "July 17, 2026 - 09:00 AM",
    status: "confirmed",
  },
  {
    id: "APT-1009",
    patient: "William Davies",
    phone: "(555) 012-3456",
    dentist: "Dr. Sarah Jenkins",
    service: "Crown Placement",
    dateTime: "July 17, 2026 - 11:30 AM",
    status: "pending",
  },
  {
    id: "APT-1010",
    patient: "Olivia Anderson",
    phone: "(555) 123-4567",
    dentist: "Dr. Marcus Vance",
    service: "Routine Clean-up",
    dateTime: "July 17, 2026 - 04:00 PM",
    status: "completed",
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter criteria logic
  const filteredAppointments = appointments.filter((app) => {
    const matchesSearch =
      app.patient.toLowerCase().includes(search.toLowerCase()) ||
      app.service.toLowerCase().includes(search.toLowerCase()) ||
      app.dentist.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "all" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Appointments
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Browse, plan, schedule and verify clinical appointments.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 justify-center bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-all">
            <FileDown className="w-4 h-4" />
            Export Draft
          </button>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Plus className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 w-full md:max-w-md focus-within:ring-2 focus-within:ring-brand-500/10 focus-within:border-brand-500 transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patient, dentist, ID or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none text-sm outline-none w-full text-gray-700"
          />
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {["all", "pending", "confirmed", "completed", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                statusFilter === status
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/10"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Main Appointments Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Appointment ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Patient
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Dentist
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Treatment / Service
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Date / Time
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50 transition-all">
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-brand-600 font-mono">
                        {app.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800">
                          {app.patient}
                        </span>
                        <span className="text-xs text-gray-400">{app.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-600">
                        {app.dentist}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-600">
                        {app.service}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-500">
                        {app.dateTime}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold capitalize ${
                          app.status === "confirmed"
                            ? "bg-brand-50 text-brand-700"
                            : app.status === "completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : app.status === "cancelled"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="p-1.5 hover:bg-brand-50 text-brand-600 hover:text-brand-700 rounded-lg transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-rose-50 text-rose-600 hover:text-rose-700 rounded-lg transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-sm text-gray-400 font-medium">
                    No appointments matched your query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
