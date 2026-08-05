"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  MessageSquare,
  CreditCard,
  ShieldCheck,
  FileText,
  FileUp,
  Settings,
  PlusCircle,
  ArrowRight,
  Clock,
  MapPin,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { PortalNav } from "@/components/portal/PortalNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function PortalDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch("/api/portal/dashboard");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          // Fallback if API response is not ok
          setData({
            patient: { name: "Jane Doe", email: "jane.doe@example.com", insuranceStatus: "Active", insuranceProvider: "Delta Dental Premier" },
            upcomingAppointment: { date: "2026-08-18", time: "10:30 AM", serviceName: "Comprehensive Dental Exam & Cleaning", dentistName: "Dr. Sarah Mitchell, DDS" },
            unreadMessagesCount: 2,
            outstandingBalance: 125.00,
            pendingFormsCount: 1,
          });
        }
      } catch (e) {
        console.error("Dashboard fetch error:", e);
      } finally {
        setLoading(false);
      }
    }
    loadDashboard();
  }, []);

  const patient = data?.patient || { name: "Valued Patient" };
  const upcoming = data?.upcomingAppointment;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PortalNav patientName={patient.name} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-brand-800 via-brand-700 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <Badge variant="brand" className="mb-3 bg-brand-500/20 text-brand-200 border-brand-400/30">
              Patient Portal Active
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-heading">
              Welcome back, {patient.name}!
            </h1>
            <p className="text-brand-100 mt-2 text-sm sm:text-base leading-relaxed">
              Manage your dental care, view upcoming appointments, complete registration forms, and communicate securely with our clinical team.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/booking" variant="primary" className="bg-white text-brand-900 hover:bg-brand-50 font-semibold text-sm">
                <PlusCircle className="w-4 h-4 mr-2 text-brand-600" />
                Book New Appointment
              </Button>
              <Button href="/portal/forms" variant="ghost" className="text-white hover:bg-white/10 text-sm border border-white/20">
                View Pending Forms ({data?.pendingFormsCount || 0})
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:border-brand-300 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Next Appointment</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {upcoming ? upcoming.date : "None Scheduled"}
                </p>
                <p className="text-xs text-slate-500">{upcoming ? upcoming.time : "Book anytime"}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-brand-300 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Unread Messages</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">
                  {data?.unreadMessagesCount ?? 0}
                </p>
                <Link href="/portal/messages" className="text-xs text-brand-600 hover:underline font-medium">
                  View Inbox →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-brand-300 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Balance Due</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">
                  ${data?.outstandingBalance ? data.outstandingBalance.toFixed(2) : "0.00"}
                </p>
                <Link href="/portal/billing" className="text-xs text-brand-600 hover:underline font-medium">
                  Pay Bill →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-brand-300 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Insurance Status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Badge variant="success" className="text-[10px] px-2 py-0">Active</Badge>
                </div>
                <p className="text-xs text-slate-500 truncate max-w-[130px]">
                  {patient.insuranceProvider || "Delta Dental"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid: Upcoming Appointment & Insurance Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Appointment Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-600" />
                  Upcoming Appointment
                </CardTitle>
                <Link href="/portal/appointments" className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardHeader>

              <CardContent className="pt-2">
                {upcoming ? (
                  <div className="bg-brand-50/50 rounded-xl p-5 border border-brand-100 space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{upcoming.serviceName}</h3>
                        <p className="text-sm text-slate-600 font-medium flex items-center gap-1.5 mt-1">
                          <User className="w-4 h-4 text-brand-600" /> {upcoming.dentistName}
                        </p>
                      </div>
                      <Badge variant="success" className="text-xs px-3 py-1">Confirmed</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-2 border-t border-brand-100">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span><strong>Date & Time:</strong> {upcoming.date} at {upcoming.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span><strong>Location:</strong> {upcoming.location || "Main Clinic Suite 200"}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button href="/portal/appointments" variant="secondary" size="sm">
                        Request Reschedule
                      </Button>
                      <Button href="/portal/appointments" variant="ghost" size="sm" className="text-slate-600 hover:text-red-600">
                        Cancel Appointment
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Calendar className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                    <p className="text-slate-600 font-medium">No upcoming appointments scheduled</p>
                    <p className="text-xs text-slate-400 mt-1 mb-4">Keep your smile healthy with regular checkups</p>
                    <Button href="/booking" variant="primary" size="sm">
                      Schedule Next Visit
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions Grid */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Link
                  href="/portal/appointments"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Appointments</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Manage visits</span>
                </Link>

                <Link
                  href="/portal/forms"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Patient Forms</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Fill & sign</span>
                </Link>

                <Link
                  href="/portal/messages"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Messages</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Ask staff</span>
                </Link>

                <Link
                  href="/portal/documents"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <FileUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Documents</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Upload records</span>
                </Link>

                <Link
                  href="/portal/billing"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Billing</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Invoices & Pay</span>
                </Link>

                <Link
                  href="/portal/settings"
                  className="p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-center text-center group bg-white"
                >
                  <div className="p-3 bg-slate-100 text-slate-600 rounded-full group-hover:scale-110 transition-transform mb-2">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Settings</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Profile & Password</span>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Insurance & Account Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-600" />
                  Insurance Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Provider:</span>
                    <span className="font-semibold text-slate-900">{patient.insuranceProvider || "Delta Dental Premier"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Policy Number:</span>
                    <span className="font-mono font-medium text-slate-800">{patient.policyNumber || "POL-98765432"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Group Number:</span>
                    <span className="font-mono font-medium text-slate-800">{patient.groupNumber || "GRP-00421"}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                    <span className="text-slate-500">Verification Status:</span>
                    <Badge variant="success" className="text-[10px]">Verified & Active</Badge>
                  </div>
                </div>

                <Link
                  href="/portal/documents"
                  className="block text-center text-xs font-semibold text-brand-600 hover:underline bg-brand-50 py-2.5 rounded-lg border border-brand-100"
                >
                  + Upload Updated Insurance Card
                </Link>
              </CardContent>
            </Card>

            {/* Unread Message Preview */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-500" />
                  Recent Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60 text-xs space-y-1">
                  <div className="flex justify-between text-slate-500">
                    <span className="font-semibold text-amber-900">Bright Smile Office</span>
                    <span>Aug 3</span>
                  </div>
                  <p className="text-slate-700 line-clamp-2">
                    "Only if your policy details have changed recently. Otherwise, we have your Delta Dental on file!"
                  </p>
                </div>

                <Button href="/portal/messages" variant="secondary" size="sm" className="w-full text-xs">
                  Open Secure Messages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
