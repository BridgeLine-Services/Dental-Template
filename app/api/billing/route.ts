import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    summary: {
      outstandingBalance: 125.00,
      dueDate: "2026-08-30",
      lastPaymentDate: "2026-05-20",
      lastPaymentAmount: 45.00,
      insuranceClaimStatus: "Claim #CLM-9021 Pending ($180.00)",
    },
    invoices: [
      {
        id: "inv_2026_08",
        invoiceNumber: "INV-2026-0801",
        date: "2026-08-01",
        description: "Co-pay for Dental Examination & Prophylaxis",
        totalAmount: 250.00,
        insuranceCovered: 125.00,
        amountDue: 125.00,
        status: "Unpaid",
        dueDate: "2026-08-30",
      },
      {
        id: "inv_2026_05",
        invoiceNumber: "INV-2026-0520",
        date: "2026-05-20",
        description: "Composite Restoration - Tooth #14",
        totalAmount: 195.00,
        insuranceCovered: 150.00,
        amountDue: 0.00,
        status: "Paid",
        dueDate: "2026-06-15",
      },
      {
        id: "inv_2026_01",
        invoiceNumber: "INV-2026-0115",
        date: "2026-01-15",
        description: "New Patient Comprehensive Exam & X-Rays",
        totalAmount: 320.00,
        insuranceCovered: 320.00,
        amountDue: 0.00,
        status: "Paid",
        dueDate: "2026-02-15",
      },
    ],
    paymentHistory: [
      {
        id: "pmt_1",
        receiptNumber: "RCT-4401",
        date: "2026-05-20",
        method: "Visa ending in 4242",
        amount: 45.00,
        status: "Successful",
      },
      {
        id: "pmt_2",
        receiptNumber: "RCT-3890",
        date: "2026-01-15",
        method: "Mastercard ending in 8812",
        amount: 25.00,
        status: "Successful",
      },
    ],
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, invoiceId, paymentMethod } = body;

    return NextResponse.json({
      success: true,
      message: `Payment of $${Number(amount).toFixed(2)} processed successfully!`,
      receiptNumber: `RCT-${Math.floor(1000 + Math.random() * 9000)}`,
      amountProcessed: amount,
      invoiceId,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Payment failed" }, { status: 400 });
  }
}
