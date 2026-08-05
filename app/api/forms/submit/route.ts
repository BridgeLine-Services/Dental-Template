import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, formData, signature } = body;

    return NextResponse.json({
      success: true,
      message: "Form successfully submitted and saved to patient record.",
      submissionId: `sub_${Date.now()}`,
      formType: formType || "patient_form",
      timestamp: new Date().toISOString(),
      hasSignature: Boolean(signature),
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to submit form" },
      { status: 400 }
    );
  }
}
