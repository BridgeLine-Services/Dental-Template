import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    profile: {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      phone: "(555) 234-5678",
      dateOfBirth: "1990-05-14",
      streetAddress: "742 Evergreen Terrace",
      city: "Springfield",
      state: "CA",
      zipCode: "90210",
      emergencyContactName: "John Doe",
      emergencyContactPhone: "(555) 987-6543",
      preferredPharmacy: "CVS Pharmacy - Main St",
    },
    notifications: {
      emailReminders: true,
      smsReminders: true,
      marketingEmails: false,
      preAppointmentInstructions: true,
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === "change_password") {
      return NextResponse.json({
        success: true,
        message: "Password updated successfully.",
      });
    }

    if (action === "update_notifications") {
      return NextResponse.json({
        success: true,
        message: "Notification preferences updated.",
        notifications: body.notifications,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Personal information updated successfully.",
      profile: body.profile || body,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Failed to update settings" }, { status: 400 });
  }
}
