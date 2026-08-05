import { NextResponse } from "next/server";

export async function GET() {
  const forms = [
    {
      id: "new-patient",
      title: "New Patient Registration",
      category: "Registration",
      description: "Complete your personal, medical, and insurance information to register with our practice.",
      required: true,
      status: "completed",
      lastSubmitted: "2026-01-15",
      slug: "/forms/new-patient",
    },
    {
      id: "medical-history",
      title: "Medical History Update",
      category: "Clinical",
      description: "Update medical conditions, current medications, allergies, and emergency contact details.",
      required: true,
      status: "completed",
      lastSubmitted: "2026-03-20",
      slug: "/forms/medical-history",
    },
    {
      id: "treatment-consent",
      title: "General Treatment Consent",
      category: "Consent",
      description: "Informed consent for routine examinations, cleanings, and standard dental procedures.",
      required: true,
      status: "completed",
      lastSubmitted: "2026-01-15",
      slug: "/forms/treatment-consent",
    },
    {
      id: "xray-consent",
      title: "X-Ray & Radiograph Consent",
      category: "Consent",
      description: "Authorization for digital diagnostic X-rays and panoramic imaging.",
      required: true,
      status: "pending",
      lastSubmitted: null,
      slug: "/forms/xray-consent",
    },
    {
      id: "financial-policy",
      title: "Financial Responsibility Agreement",
      category: "Billing",
      description: "Terms regarding payment, insurance co-pays, deductibles, and appointment cancellation policy.",
      required: true,
      status: "completed",
      lastSubmitted: "2026-01-15",
      slug: "/forms/financial-policy",
    },
    {
      id: "insurance-assignment",
      title: "Insurance Assignment of Benefits",
      category: "Billing",
      description: "Direct authorization allowing insurance reimbursement payment to Bright Smile Dental.",
      required: false,
      status: "completed",
      lastSubmitted: "2026-01-15",
      slug: "/forms/insurance-assignment",
    },
  ];

  return NextResponse.json({
    success: true,
    forms,
    summary: {
      total: forms.length,
      completed: forms.filter((f) => f.status === "completed").length,
      pending: forms.filter((f) => f.status === "pending").length,
    },
  });
}
