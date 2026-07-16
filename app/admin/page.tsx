"use client";

import React from "react";
import {
  Users,
  CalendarDays,
  DollarSign,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  CheckCircle,
  FileText
} from "lucide-react";
import Link from "next/link";

// Mock Stats Data
const stats = [
  {
    name: "Total Patients",
    value: "15,420",
    change: "+4.75%",
    trend: "up",
    icon: Users,
    color: "brand",
  },
  {
    name: "Appointments Today",
    value: "28",
    change: "+12.3%",
    trend: "up",
    icon: CalendarDays,
    color: "accent",
  },
  {
    name: "Revenue This Month",
    value: "$145,200",
    change: "-1.8%",
    trend: "down",
    icon: DollarSign,
    color: "brand",
  },
  {
    name: "Avg Clinic Rating",
    value: "4.9",
    change: "+0.1",
    trend: "up",
    icon: Star,
    color: "accent",
  },
];

// Mock Recent Appointments
const recentAppointments = [
  {
    id: "1",
    patient: "Michael Chang",
    dentist: "Dr. Sarah Jenkins",
    service: "Dental Implants",
    time: "09:30 AM",
    status: "Confirmed",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "2",
    patient: "Emily Rodriguez",
    dentist: "Dr. Marcus Vance",
    service: "Teeth Whitening",
    time: "11:00 AM",
    status: "Completed",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "3",
    patient: "Robert Chen",
    dentist: "Dr. Sarah Jenkins",
    service: "Routine Clean-up",
    time: "01:30 PM",
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "4",
    patient: "Jessica Taylor",
    dentist: "Dr. Marcus Vance",
    service: "Root Canal Therapy",
    time: "03:00 PM",
    status: "Cancelled",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
  },
];

// Mock Recent Reviews
const recentReviews = [
  {
    id: "1",
    author: "Eleanor Vance",
    rating: 5,
    text: "Absolutely fantastic treatment! Dr. Jenkins was incredibly gentle during my crown procedure. The staff made me feel extremely welcome and safe.",
    date: "Today",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "2",
    author: "David Kim",
    rating: 5,
    text: "High-tech facility and professional dentist. They explained the full orthodontic procedure thoroughly with great patient-care approach.",
    date: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
  },
];

// Chart Data (simple representation)
const chartData = [
  { label: "Mon", value: 65 },
  { label: "Tue", value: 80 },
  { label: "Wed", value: 95 },
  { label: "Thu", value: 75 },
  { label: "Fri", value: 110 },
  { label: "Sat", value: 45 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
            Good morning, Sarah
          </h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Here&apos;s what&apos;s happening at your practice today, July 15, 2026.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/appointments"
            className="inline-flex items-center justify-center bg-brand-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-600 active:scale-[0.98] transition-all duration-200 shadow-md shadow-brand-500/10"
          >
            Manage Appointments
          </Link>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isBrandColor = stat.color === "brand";
          const isTrendUp = stat.trend === "up";

          return (
            <div
              key={stat.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-400 tracking-wide uppercase">
                  {stat.name}
                </span>
                <div
                  className={`p-3 rounded-xl ${
                    isBrandColor
                      ? "bg-brand-50 text-brand-600"
                      : "bg-accent-50 text-accent-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  {stat.value}
                </span>
                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-md ${
                    isTrendUp
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-rose-700 bg-rose-50"
                  }`}
                >
                  {isTrendUp ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics & Scheduling Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Appointment Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 font-heading">
                Weekly Appointment Load
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Active clinical hours booked this week
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1">
              <TrendingUp className="w-3.5 h-3.5 text-brand-500" />
              <span>Avg. 82% Capacity</span>
            </div>
          </div>

          {/* Simple CSS-based bar chart */}
          <div className="flex-1 flex items-end justify-between h-48 pt-6 pb-2 px-4 gap-6">
            {chartData.map((data) => (
              <div key={data.label} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                <div className="w-full relative group flex justify-center">
                  {/* Tooltip */}
                  <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:scale-100 font-bold">
                    {data.value} cases
                  </span>
                  <div
                    style={{ height: `${(data.value / 120) * 100}%` }}
                    className="w-full max-w-[40px] rounded-t-lg bg-brand-500 hover:bg-brand-600 transition-all duration-300 shadow-sm shadow-brand-500/20"
                  ></div>
                </div>
                <span className="text-xs font-bold text-gray-400">{data.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights / Operational Stats */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 font-heading">
              Operational Status
            </h2>
            <p className="text-xs text-gray-400 font-medium mb-6">
              Today&apos;s checklist and critical notes
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-brand-50 text-brand-600 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">Sterilization Check</h4>
                <p className="text-xs text-gray-400">All equipment cycles completed and verified.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-accent-50 text-accent-600 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">Peak Load Today</h4>
                <p className="text-xs text-gray-400">High volume of cleanings between 1 PM – 4 PM.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">Insurance Batch Draft</h4>
                <p className="text-xs text-gray-400">89 claims prepared for review, ready to submit.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <span className="text-[11px] font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              System Health Normal
            </span>
          </div>
        </div>
      </div>

      {/* Appointment List & Customer Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div>
              <h2 className="text-lg font-bold text-gray-900 font-heading">
                Upcoming Appointments Today
              </h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                Real-time queue of patient entries
              </p>
            </div>
            <Link
              href="/admin/appointments"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              See All Appointments
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Patient
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Dentist
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Treatment
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Time
                  </th>
                  <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={app.avatar}
                          alt={app.patient}
                          className="w-8 h-8 rounded-lg object-cover"
                        />
                        <span className="text-sm font-bold text-gray-800">
                          {app.patient}
                        </span>
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
                    <td className="px-6 py-4 text-sm font-medium text-gray-500">
                      {app.time}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          app.status === "Confirmed"
                            ? "bg-brand-50 text-brand-700"
                            : app.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : app.status === "Cancelled"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Feedback Feed */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 font-heading">
                Latest Patient Reviews
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Recent comments from verified checkups
              </p>
            </div>
            <Link
              href="/admin/reviews"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              All Reviews
            </Link>
          </div>

          <div className="flex-1 space-y-6">
            {recentReviews.map((rev) => (
              <div key={rev.id} className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-7 h-7 rounded-lg object-cover"
                    />
                    <span className="text-xs font-bold text-gray-800">{rev.author}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400">{rev.date}</span>
                </div>
                <div className="flex gap-0.5 text-accent-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
