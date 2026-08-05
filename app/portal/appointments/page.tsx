"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  PlusCircle,
  XCircle,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
} from "lucide-react";
import { PortalNav } from "@/components/portal/PortalNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Appointment {
  id: string;
  date: string;
  time: string;
  serviceName: string;
  dentistName: string;
  location?: string;
  status: "confirmed" | "pending" | "completed" | "cancelled" | "reschedule_requested";
  notes?: string;
}

export default function PortalAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Reschedule Modal State
  const [rescheduleApt, setRescheduleApt] = useState<Appointment | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [rescheduleReason, setRescheduleReason] = useState("");
  const [submittingAction, setSubmittingAction] = useState(false);

  // Cancel Modal State
  const [cancelApt, setCancelApt] = useState<Appointment | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/appointments");
      if (res.ok) {
        const data = await res.json();
        setAppointments(data.appointments || []);
      }
    } catch (e) {
      console.error("Error fetching appointments:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const upcoming = appointments.filter(
    (a) => a.status === "confirmed" || a.status === "pending" || a.status === "reschedule_requested"
  );
  const past = appointments.filter((a) => a.status === "completed" || a.status === "cancelled");

  const handleConfirmCancel = async () => {
    if (!cancelApt) return;
    setSubmittingAction(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "cancel",
          appointmentId: cancelApt.id,
        }),
      });

      if (res.ok) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === cancelApt.id ? { ...a, status: "cancelled" } : a))
        );
        setActionMessage({
          type: "success",
          text: `Appointment for ${cancelApt.serviceName} on ${cancelApt.date} has been canceled.`,
        });
      } else {
        setActionMessage({ type: "error", text: "Failed to cancel appointment. Please try again." });
      }
    } catch (e) {
      setActionMessage({ type: "error", text: "An error occurred while canceling." });
    } finally {
      setSubmittingAction(false);
      setCancelApt(null);
    }
  };

  const handleConfirmReschedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rescheduleApt || !newDate || !newTime) return;
    setSubmittingAction(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reschedule",
          appointmentId: rescheduleApt.id,
          newDate,
          newTime,
          reason: rescheduleReason,
        }),
      });

      if (res.ok) {
        setAppointments((prev) =>
          prev.map((a) =>
            a.id === rescheduleApt.id ? { ...a, status: "reschedule_requested" } : a
          )
        );
        setActionMessage({
          type: "success",
          text: `Reschedule request submitted for ${newDate} at ${newTime}. Our front desk will confirm shortly.`,
        });
      } else {
        setActionMessage({ type: "error", text: "Failed to submit reschedule request." });
      }
    } catch (e) {
      setActionMessage({ type: "error", text: "An error occurred while submitting." });
    } finally {
      setSubmittingAction(false);
      setRescheduleApt(null);
      setNewDate("");
      setNewTime("");
      setRescheduleReason("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PortalNav />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 font-heading">My Appointments</h1>
            <p className="text-sm text-slate-500 mt-1">
              View your upcoming visits, manage schedules, or review past care history.
            </p>
          </div>
          <Button href="/booking" variant="primary" className="shadow-sm">
            <PlusCircle className="w-4 h-4 mr-2" /> Book New Appointment
          </Button>
        </div>

        {/* Alert Notifications */}
        {actionMessage && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between text-sm ${
              actionMessage.type === "success"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-red-50 text-red-800 border-red-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {actionMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600" />
              )}
              <span>{actionMessage.text}</span>
            </div>
            <button
              onClick={() => setActionMessage(null)}
              className="text-xs font-semibold underline ml-4 hover:opacity-75"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tabs navigation */}
        <div className="flex border-b border-slate-200 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "upcoming"
                ? "border-brand-600 text-brand-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Calendar className="w-4 h-4" />
            Upcoming ({upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "past"
                ? "border-brand-600 text-brand-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Clock className="w-4 h-4" />
            Past History ({past.length})
          </button>
        </div>

        {/* List Content */}
        {loading ? (
          <div className="py-12 text-center text-slate-500 flex flex-col items-center">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600 mb-2" />
            <p className="text-sm font-medium">Loading appointments...</p>
          </div>
        ) : activeTab === "upcoming" ? (
          upcoming.length === 0 ? (
            <Card className="text-center py-12 px-4">
              <Calendar className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No Upcoming Appointments</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-6">
                You have no scheduled visits at this time. Regular cleanings help maintain healthy teeth and prevent dental issues.
              </p>
              <Button href="/booking" variant="primary" size="md">
                Schedule an Appointment
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {upcoming.map((apt) => (
                <Card key={apt.id} className="hover:border-slate-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900">{apt.serviceName}</h3>
                          {apt.status === "confirmed" && <Badge variant="success">Confirmed</Badge>}
                          {apt.status === "pending" && <Badge variant="outline">Pending Review</Badge>}
                          {apt.status === "reschedule_requested" && (
                            <Badge variant="accent" className="bg-amber-50 text-amber-800 border-amber-200">
                              Reschedule Requested
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
                          <p className="flex items-center gap-1.5 font-medium text-slate-800">
                            <Clock className="w-4 h-4 text-brand-600" />
                            {apt.date} at {apt.time}
                          </p>
                          <p className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-slate-400" />
                            {apt.dentistName}
                          </p>
                          <p className="flex items-center gap-1.5 sm:col-span-2 mt-0.5">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            {apt.location || "Main Clinic — 123 Health Ave, Suite 200"}
                          </p>
                        </div>

                        {apt.notes && (
                          <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <strong>Note:</strong> {apt.notes}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap md:flex-col items-stretch gap-2 min-w-[160px] pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setRescheduleApt(apt)}
                          className="w-full text-xs gap-1"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Request Reschedule
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setCancelApt(apt)}
                          className="w-full text-xs text-slate-600 hover:text-red-600 hover:bg-red-50 gap-1"
                        >
                          <XCircle className="w-3.5 h-3.5" /> Cancel Visit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        ) : past.length === 0 ? (
          <Card className="text-center py-12 px-4">
            <Clock className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-800">No Past History</h3>
            <p className="text-xs text-slate-500 mt-1">Your past completed visits will show here.</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {past.map((apt) => (
              <Card key={apt.id} className="bg-white">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-sm">{apt.serviceName}</h4>
                      {apt.status === "completed" ? (
                        <Badge variant="brand" className="text-[10px]">Completed</Badge>
                      ) : (
                        <Badge variant="danger" className="text-[10px]">Canceled</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {apt.date} at {apt.time} • {apt.dentistName}
                    </p>
                  </div>
                  <Button href="/portal/forms" variant="ghost" size="sm" className="text-xs">
                    <FileText className="w-3.5 h-3.5 mr-1" /> View Treatment Notes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Reschedule Modal */}
        {rescheduleApt && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-base">Request Reschedule</h3>
                <button
                  onClick={() => setRescheduleApt(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600">
                Rescheduling visit for <strong>{rescheduleApt.serviceName}</strong> with {rescheduleApt.dentistName}.
              </p>

              <form onSubmit={handleConfirmReschedule} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred New Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Window *
                  </label>
                  <select
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  >
                    <option value="">Select preferred time</option>
                    <option value="09:00 AM">Morning (09:00 AM)</option>
                    <option value="11:00 AM">Morning (11:00 AM)</option>
                    <option value="01:30 PM">Afternoon (01:30 PM)</option>
                    <option value="03:30 PM">Late Afternoon (03:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Reason for Reschedule (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={rescheduleReason}
                    onChange={(e) => setRescheduleReason(e.target.value)}
                    placeholder="E.g., work conflict..."
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setRescheduleApt(null)}
                    className="w-1/2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    disabled={submittingAction}
                    className="w-1/2"
                  >
                    {submittingAction ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Request"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {cancelApt && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
              <div className="flex items-center gap-3 text-red-600">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-bold text-slate-900 text-base">Cancel Appointment?</h3>
              </div>

              <p className="text-xs text-slate-600">
                Are you sure you want to cancel <strong>{cancelApt.serviceName}</strong> on{" "}
                {cancelApt.date} at {cancelApt.time}?
              </p>

              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setCancelApt(null)}
                  className="w-1/2"
                >
                  Keep Appointment
                </Button>
                <Button
                  type="button"
                  variant="emergency"
                  size="sm"
                  disabled={submittingAction}
                  onClick={handleConfirmCancel}
                  className="w-1/2 bg-red-600 hover:bg-red-700 animate-none"
                >
                  {submittingAction ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm Cancel"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
