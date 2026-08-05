import { NextResponse } from "next/server";

const initialDocuments = [
  {
    id: "doc_1",
    fileName: "Delta_Dental_Insurance_Card_2026.pdf",
    category: "Insurance Card",
    fileSize: "1.2 MB",
    uploadedAt: "2026-01-15T10:00:00Z",
    status: "Verified",
    url: "#",
  },
  {
    id: "doc_2",
    fileName: "Drivers_License_ID.jpg",
    category: "ID / Driver's License",
    fileSize: "840 KB",
    uploadedAt: "2026-01-15T10:05:00Z",
    status: "Verified",
    url: "#",
  },
  {
    id: "doc_3",
    fileName: "Panoramic_XRay_2025.png",
    category: "Dental Records / X-Rays",
    fileSize: "4.8 MB",
    uploadedAt: "2025-11-05T14:20:00Z",
    status: "Verified",
    url: "#",
  },
  {
    id: "doc_4",
    fileName: "Cardiologist_Medical_Clearance.pdf",
    category: "Medical Clearance",
    fileSize: "512 KB",
    uploadedAt: "2025-10-30T11:10:00Z",
    status: "Verified",
    url: "#",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    documents: initialDocuments,
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const category = (formData.get("category") as string) || "Other";

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const newDoc = {
      id: `doc_${Date.now()}`,
      fileName: file.name,
      category,
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedAt: new Date().toISOString(),
      status: "Processing",
      url: "#",
    };

    return NextResponse.json({
      success: true,
      message: "Document uploaded successfully",
      document: newDoc,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Upload failed" }, { status: 400 });
  }
}
