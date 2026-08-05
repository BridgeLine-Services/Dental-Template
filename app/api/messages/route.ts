import { NextResponse } from "next/server";

const initialThreads = [
  {
    id: "th_1",
    subject: "Upcoming Teeth Cleaning Appointment",
    category: "Appointment",
    unread: 1,
    updatedAt: "2026-08-03T14:30:00Z",
    messages: [
      {
        id: "msg_1",
        sender: "Bright Smile Office",
        role: "office",
        content: "Hi Jane! Just a quick reminder about your routine dental cleaning scheduled for Aug 18th at 10:30 AM.",
        timestamp: "2026-08-01T09:15:00Z",
      },
      {
        id: "msg_2",
        sender: "Jane Doe",
        role: "patient",
        content: "Thanks! Will I need to bring my insurance card again?",
        timestamp: "2026-08-01T10:00:00Z",
      },
      {
        id: "msg_3",
        sender: "Bright Smile Office",
        role: "office",
        content: "Only if your policy or subscriber details have changed recently. Otherwise, we have your Delta Dental on file!",
        timestamp: "2026-08-03T14:30:00Z",
      },
    ],
  },
  {
    id: "th_2",
    subject: "Invisalign Retainer Inquiry",
    category: "Treatment",
    unread: 0,
    updatedAt: "2026-07-28T11:20:00Z",
    messages: [
      {
        id: "msg_4",
        sender: "Jane Doe",
        role: "patient",
        content: "Hello Dr. Rivera, tray #3 feels very comfortable now. Ready for tray #4 next week.",
        timestamp: "2026-07-28T10:00:00Z",
      },
      {
        id: "msg_5",
        sender: "Dr. Alex Rivera",
        role: "office",
        content: "Great news Jane! Go ahead and switch to tray #4 on Monday as planned. See you at your Sept 2nd appointment.",
        timestamp: "2026-07-28T11:20:00Z",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    threads: initialThreads,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { threadId, subject, category, message } = body;

    const newMessage = {
      id: `msg_${Date.now()}`,
      sender: "Jane Doe",
      role: "patient",
      content: message,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Message sent to clinic staff.",
      data: newMessage,
      threadId: threadId || `th_${Date.now()}`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to send message" },
      { status: 400 }
    );
  }
}
