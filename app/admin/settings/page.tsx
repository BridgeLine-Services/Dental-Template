"use client";

import React, { useState } from "react";
import {
  Settings,
  Clock,
  Users,
  Shield,
  FileCheck,
  Building,
  Mail,
  Phone,
  MapPin,
  Save
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Clinic Settings
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Configure system configurations, custom working hours, and operational roles.
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 justify-center bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/10">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap border-b border-gray-200 gap-1 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
        {[
          { id: "general", label: "General Practices", icon: Building },
          { id: "hours", label: "Operating Hours", icon: Clock },
          { id: "staff", label: "Staff Rotas & Profiles", icon: Users },
          { id: "insurance", label: "Insurance Providers", icon: FileCheck },
          { id: "permissions", label: "System Permissions", icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/10"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Settings Sections Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* TAB 1: General Practices */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 font-heading">
                General Practices Information
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Configure basic legal details for invoicing, booking forms, and newsletters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Practice Name
                </label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50">
                  <Building className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="Apex Dental Clinic"
                    className="bg-transparent border-none text-sm outline-none text-gray-700 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Practice Email Address
                </label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="contact@apexdental.com"
                    className="bg-transparent border-none text-sm outline-none text-gray-700 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Practice Phone Number
                </label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="(555) 111-2222"
                    className="bg-transparent border-none text-sm outline-none text-gray-700 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Full Office Address
                </label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="101 Professional Dr, Suite A, San Francisco, CA"
                    className="bg-transparent border-none text-sm outline-none text-gray-700 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Operating Hours */}
        {activeTab === "hours" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 font-heading">
                Weekly Operating Hours
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Customize operational slots which govern booking capacities.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Day
                    </th>
                    <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Open Status
                    </th>
                    <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Open Hours
                    </th>
                    <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Close Hours
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { day: "Monday", open: true, from: "08:00 AM", to: "05:00 PM" },
                    { day: "Tuesday", open: true, from: "08:00 AM", to: "05:00 PM" },
                    { day: "Wednesday", open: true, from: "08:00 AM", to: "05:00 PM" },
                    { day: "Thursday", open: true, from: "08:00 AM", to: "05:00 PM" },
                    { day: "Friday", open: true, from: "08:00 AM", to: "02:00 PM" },
                    { day: "Saturday", open: false, from: "Off", to: "Off" },
                    { day: "Sunday", open: false, from: "Off", to: "Off" },
                  ].map((row) => (
                    <tr key={row.day} className="hover:bg-gray-50/20">
                      <td className="px-6 py-3.5 font-bold text-sm text-gray-700">
                        {row.day}
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                            row.open
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {row.open ? "Open" : "Closed"}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <input
                          type="text"
                          defaultValue={row.from}
                          className="bg-transparent border border-gray-200 rounded px-2 py-1 text-xs font-medium text-gray-600 focus:outline-brand-500 w-24"
                        />
                      </td>
                      <td className="px-6 py-3.5">
                        <input
                          type="text"
                          defaultValue={row.to}
                          className="bg-transparent border border-gray-200 rounded px-2 py-1 text-xs font-medium text-gray-600 focus:outline-brand-500 w-24"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Staff Management */}
        {activeTab === "staff" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 font-heading">
                Staff Management
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Configure dental clinic technicians, receptionists, and auxiliary doctors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Dr. Sarah Jenkins", role: "Lead Dentist / Admin", status: "Active" },
                { name: "Dr. Marcus Vance", role: "Associate Dentist", status: "Active" },
                { name: "Elena Rostova", role: "Dental Hygienist", status: "On Leave" },
                { name: "Kevin Miller", role: "Practice Receptionist", status: "Active" },
              ].map((staff) => (
                <div
                  key={staff.name}
                  className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800">{staff.name}</span>
                    <span className="text-xs text-gray-500">{staff.role}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      staff.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {staff.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Insurance Providers */}
        {activeTab === "insurance" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 font-heading">
                Supported Insurance Providers
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Toggle and coordinate active dental insurance carriers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "MetLife Dental", active: true },
                { name: "Delta Dental", active: true },
                { name: "Aetna Dental", active: true },
                { name: "Cigna Dental", active: true },
                { name: "UnitedHealthcare Dental", active: false },
                { name: "Guardian Life", active: true },
              ].map((ins) => (
                <div
                  key={ins.name}
                  className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-gray-700">{ins.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      ins.active
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {ins.active ? "Supported" : "Inactive"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: System Permissions */}
        {activeTab === "permissions" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 font-heading">
                System Roles & Access Control
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Manage granular login and panel options for other administrators or staff.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                { role: "Clinic Director", desc: "Full permissions to clinic profiles, billing, dental rotas, and staff accounts." },
                { role: "Practicing Dentist", desc: "View assigned patient queues, schedules, check treatment details, write clinic files." },
                { role: "Reception / Office Staff", desc: "Manage appointments calendar, register checkins, edit public profiles, moderate reviews." },
              ].map((perm) => (
                <div key={perm.role} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-1">
                  <span className="text-sm font-bold text-gray-800">{perm.role}</span>
                  <span className="text-xs text-gray-500 leading-relaxed">{perm.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
