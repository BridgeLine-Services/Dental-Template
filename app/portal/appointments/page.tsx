"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PortalAppointments() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const e = localStorage.getItem("patientEmail");
    if (!e) { router.push("/login"); return; }
    setEmail(e);
    // Simulated appointments
    setTimeout(() => {
      setAppointments([
        { id: "1", date: "2026-08-15", time: "10:00", serviceName: "Routine Cleaning", dentistName: "Dr. Sarah Mitchell", status: "confirmed" },
        { id: "2", date: "2026-05-20", time: "14:00", serviceName: "Dental Checkup", dentistName: "Dr. Sarah Mitchell", status: "completed" },
      ]);
      setLoading(false);
    }, 500);
  }, [router]);

  const upcoming = appointments.filter(a => a.status === "pending" || a.status === "confirmed");
  const past = appointments.filter(a => a.status === "completed" || a.status === "cancelled");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-900 text-white px-4 py-4 flex items-center gap-3">
        <Link href="/portal" className="text-brand-200 hover:text-white text-sm">← Portal</Link>
        <h1 className="text-lg font-bold">My Appointments</h1>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-brand-900">Appointments</h2>
          <Link href="/booking" className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Book New</Link>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center py-8">Loading...</p>
        ) : (
          <>
            <h3 className="font-semibold text-gray-700 mb-3">Upcoming</h3>
            {upcoming.length === 0 ? (
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center mb-6">
                <p className="text-gray-500 mb-4">No upcoming appointments</p>
                <Link href="/booking" className="text-brand-600 font-medium hover:underline">Book an appointment →</Link>
              </div>
            ) : (
              <div className="space-y-3 mb-8">
                {upcoming.map(a => (
                  <div key={a.id} className="bg-white rounded-xl p-4 border border-gray-200 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{a.serviceName}</p>
                      <p className="text-sm text-gray-500">{a.date} at {a.time} • {a.dentistName}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{a.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h3 className="font-semibold text-gray-700 mb-3">History</h3>
            {past.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No past appointments</p>
            ) : (
              <div className="space-y-3">
                {past.map(a => (
                  <div key={a.id} className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900">{a.serviceName}</p>
                    <p className="text-sm text-gray-500">{a.date} at {a.time} • {a.dentistName}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${a.status === "completed" ? "bg-gray-100 text-gray-600" : "bg-red-100 text-red-600"}`}>{a.status}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
