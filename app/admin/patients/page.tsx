"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  Users,
  Eye,
  Edit2,
  Trash2,
  ChevronDown,
  Mail,
  Phone,
  Calendar
} from "lucide-react";

// Mock Patients Data
const initialPatients = [
  {
    id: "PT-201",
    name: "Michael Chang",
    email: "m.chang@example.com",
    phone: "(555) 234-5678",
    lastVisit: "July 15, 2026",
    totalVisits: 14,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-202",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "(555) 345-6789",
    lastVisit: "July 15, 2026",
    totalVisits: 8,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-203",
    name: "Robert Chen",
    email: "rchen99@example.com",
    phone: "(555) 456-7890",
    lastVisit: "July 08, 2026",
    totalVisits: 3,
    status: "inactive",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-204",
    name: "Jessica Taylor",
    email: "jtaylor@example.com",
    phone: "(555) 567-8901",
    lastVisit: "June 24, 2026",
    totalVisits: 22,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-205",
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "(555) 678-9012",
    lastVisit: "May 18, 2026",
    totalVisits: 11,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-206",
    name: "Sarah Connor",
    email: "s.connor@example.com",
    phone: "(555) 789-0123",
    lastVisit: "April 12, 2026",
    totalVisits: 5,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-207",
    name: "James Wilson",
    email: "jwilson_dev@example.com",
    phone: "(555) 890-1234",
    lastVisit: "March 29, 2026",
    totalVisits: 9,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-208",
    name: "Sophia Martinez",
    email: "smartinez@example.com",
    phone: "(555) 901-2345",
    lastVisit: "February 15, 2026",
    totalVisits: 2,
    status: "inactive",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-209",
    name: "William Davies",
    email: "wdavies@example.com",
    phone: "(555) 012-3456",
    lastVisit: "January 11, 2026",
    totalVisits: 15,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "PT-210",
    name: "Olivia Anderson",
    email: "o.anderson@example.com",
    phone: "(555) 123-4567",
    lastVisit: "December 22, 2025",
    totalVisits: 20,
    status: "active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
  },
];

export default function PatientsPage() {
  const [patients, setPatients] = useState(initialPatients);
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.email.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.includes(search)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Patients
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Maintain and coordinate complete patient health charts.
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Plus className="w-4 h-4" />
            Add New Patient
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:max-w-md focus-within:ring-2 focus-within:ring-brand-500/10 focus-within:border-brand-500 transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none text-sm outline-none w-full text-gray-700"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
          <span>Sort by: Last Visit</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Patient Name
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Phone
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Last Visit
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wide text-center">
                  Total Visits
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
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50/50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={patient.avatar}
                          alt={patient.name}
                          className="w-10 h-10 rounded-xl object-cover ring-2 ring-gray-100"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800">
                            {patient.name}
                          </span>
                          <span className="text-[10px] font-bold text-brand-500 font-mono">
                            {patient.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{patient.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{patient.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{patient.lastVisit}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded-lg">
                        {patient.totalVisits}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                          patient.status === "active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="p-2 hover:bg-brand-50 text-brand-600 hover:text-brand-700 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-sm text-gray-400 font-medium">
                    No patients matched your search queries.
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
