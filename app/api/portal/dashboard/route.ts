import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    patient: {
      id: "pat_12345",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "(555) 234-5678",
      insuranceStatus: "Active",
      insuranceProvider: "Delta Dental Premier",
      policyNumber: "POL-98765432",
      groupNumber: "GRP-00421",
    },
    upcomingAppointment: {
      id: "apt_101",
      date: "2026-08-18",
      time: "10:30 AM",
      serviceName: "Comprehensive Dental Exam & Cleaning",
      dentistName: "Dr. Sarah Mitchell, DDS",
      location: "Main Clinic — Suite 200",
      status: "confirmed",
    },
    unreadMessagesCount: 2,
    outstandingBalance: 125.00,
    dueDate: "2026-08-30",
    pendingFormsCount: 1,
    recentDocumentsCount: 4,
  });
}
