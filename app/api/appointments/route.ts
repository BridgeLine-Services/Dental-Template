import { NextResponse } from "next/server";

const initialAppointments = [
  {
    id: "apt_101",
    date: "2026-08-18",
    time: "10:30 AM",
    serviceName: "Comprehensive Dental Exam & Cleaning",
    dentistName: "Dr. Sarah Mitchell, DDS",
    location: "Main Clinic — Suite 200",
    status: "confirmed",
    notes: "Routine checkup and ultrasonic cleaning",
  },
  {
    id: "apt_102",
    date: "2026-09-02",
    time: "02:00 PM",
    serviceName: "Invisalign Follow-up & Progress Check",
    dentistName: "Dr. Alex Rivera, DMD",
    location: "Main Clinic — Suite 200",
    status: "pending",
    notes: "Tray adjustment #4",
  },
  {
    id: "apt_099",
    date: "2026-04-12",
    time: "09:00 AM",
    serviceName: "Teeth Whitening Session",
    dentistName: "Dr. Sarah Mitchell, DDS",
    location: "Main Clinic — Suite 200",
    status: "completed",
    notes: "In-office Zoom whitening procedure",
  },
  {
    id: "apt_098",
    date: "2025-11-05",
    time: "11:15 AM",
    serviceName: "Composite Filling (Tooth #14)",
    dentistName: "Dr. Alex Rivera, DMD",
    location: "Main Clinic — Suite 200",
    status: "completed",
    notes: "Amalgam replacement",
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    appointments: initialAppointments,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, appointmentId, newDate, newTime, reason } = body;

    if (action === "cancel") {
      return NextResponse.json({
        success: true,
        message: `Appointment ${appointmentId} has been canceled.`,
        appointmentId,
        status: "cancelled",
      });
    }

    if (action === "reschedule") {
      return NextResponse.json({
        success: true,
        message: `Reschedule request submitted for ${newDate} at ${newTime}. Our front desk will confirm shortly.`,
        appointmentId,
        newDate,
        newTime,
        reason,
        status: "reschedule_requested",
      });
    }

    // Default book appointment response
    return NextResponse.json({
      success: true,
      message: "Appointment request received.",
      appointment: {
        id: `apt_${Date.now()}`,
        ...body,
        status: "pending",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Failed to process request" }, { status: 400 });
  }
}
