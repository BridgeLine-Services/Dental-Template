"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>({
    totalAppointments: 0, todaysAppointments: 0, pendingAppointments: 0,
    confirmedAppointments: 0, completedAppointments: 0, cancelledAppointments: 0,
    totalPatients: 0, newPatients: 0, totalProviders: 0, totalServices: 0,
    totalBlogPosts: 0, publishedBlogPosts: 0, totalReviews: 0, pendingReviews: 0,
    approvedReviews: 0, avgRating: 0, newMessages: 0, totalMessages: 0,
  });
  const [recentAppointments, setRecentAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions/getDashboardStats")
      .then(res => res.json())
      .then(data => {
        if (data.success) { setStats(data.stats); setRecentAppointments(data.recentAppointments || []); }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const statCards = [
    { label: "Total Appointments", value: stats.totalAppointments, color: "bg-blue-500", icon: "📅" },
    { label: "Today's Appointments", value: stats.todaysAppointments, color: "bg-brand-600", icon: "⏰" },
    { label: "Pending Confirmation", value: stats.pendingAppointments, color: "bg-yellow-500", icon: "⏳" },
    { label: "Total Patients", value: stats.totalPatients, color: "bg-green-500", icon: "👥" },
    { label: "New Patients", value: stats.newPatients, color: "bg-purple-500", icon: "✨" },
    { label: "Avg Rating", value: stats.avgRating || "5.0", color: "bg-orange-500", icon: "⭐" },
    { label: "Pending Reviews", value: stats.pendingReviews, color: "bg-pink-500", icon: "💬" },
    { label: "New Messages", value: stats.newMessages, color: "bg-red-500", icon: "✉️" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Real-time practice statistics and activity</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{s.icon}</span>
              <span className={`w-3 h-3 rounded-full ${s.color}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{loading ? "..." : s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Appointments", href: "/admin/appointments", icon: "📅" },
          { label: "Patients", href: "/admin/patients", icon: "👥" },
          { label: "Reviews", href: "/admin/reviews", icon: "⭐" },
          { label: "Blog", href: "/admin/blog", icon: "📝" },
          { label: "Services", href: "/admin/services", icon: "🦷" },
          { label: "Dentists", href: "/admin/dentists", icon: "👨‍⚕️" },
          { label: "Settings", href: "/admin/settings", icon: "⚙️" },
          { label: "View Site", href: "/", icon: "🌐" },
        ].map((link, i) => (
          <Link key={i} href={link.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-400 hover:shadow-sm transition-all text-center">
            <span className="text-2xl block mb-1">{link.icon}</span>
            <span className="text-sm font-medium text-gray-700">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Recent appointments */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold text-gray-900">Recent Appointments</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {loading ? (
            <p className="px-6 py-8 text-center text-gray-500">Loading...</p>
          ) : recentAppointments.length === 0 ? (
            <p className="px-6 py-8 text-center text-gray-500">No appointments yet</p>
          ) : (
            recentAppointments.slice(0, 10).map((a, i) => (
              <div key={i} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{a.patientName || "Unknown"}</p>
                  <p className="text-sm text-gray-500">{a.serviceName || "Service"} • {a.dentistName || "TBD"}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-700">{a.date} at {a.time}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${a.status === "confirmed" ? "bg-green-100 text-green-700" : a.status === "pending" ? "bg-yellow-100 text-yellow-700" : a.status === "completed" ? "bg-gray-100 text-gray-600" : "bg-red-100 text-red-700"}`}>{a.status}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
