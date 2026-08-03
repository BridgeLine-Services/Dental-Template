"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PortalDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const e = localStorage.getItem("patientEmail");
    const n = localStorage.getItem("patientName");
    if (!e) { router.push("/login"); return; }
    setEmail(e);
    setName(n || e.split("@")[0]);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("patientEmail");
    localStorage.removeItem("patientName");
    router.push("/");
  };

  const menuItems = [
    { label: "Dashboard", href: "/portal", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { label: "Appointments", href: "/portal/appointments", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { label: "Forms", href: "/portal/forms", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { label: "Messages", href: "/portal/messages", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 3v-3z" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-900 text-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-brand-200 hover:text-white text-sm">← Home</Link>
          <h1 className="text-lg font-bold">Patient Portal</h1>
        </div>
        <button onClick={handleLogout} className="text-brand-200 hover:text-white text-sm">Logout</button>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-brand-900 mb-2">Welcome back, {name}!</h2>
        <p className="text-gray-500 mb-8">Manage your dental care from one place</p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Next Appointment</p>
            <p className="text-lg font-bold text-brand-900">No upcoming</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Last Visit</p>
            <p className="text-lg font-bold text-brand-900">—</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Forms Pending</p>
            <p className="text-lg font-bold text-brand-900">3</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Messages</p>
            <p className="text-lg font-bold text-brand-900">0</p>
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand-400 hover:shadow-md transition-all text-center group">
              <svg className="w-8 h-8 mx-auto mb-3 text-brand-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              <p className="font-medium text-gray-700">{item.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick book */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready for your next visit?</h3>
          <p className="text-brand-100 mb-4">Book an appointment with your preferred dentist in just a few clicks</p>
          <Link href="/booking" className="inline-block bg-white text-brand-700 px-6 py-2.5 rounded-lg font-medium hover:bg-brand-50 transition-colors">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
