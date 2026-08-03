"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Message {
  id: number;
  role: "office" | "patient";
  text: string;
  date: string;
}

export default function PortalMessages() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "office", text: "Welcome to Bright Smile Dental! Feel free to send us a message with any questions.", date: "2026-08-01" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const e = localStorage.getItem("patientEmail");
    if (!e) { router.push("/login"); return; }
    setEmail(e);
  }, [router]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), role: "patient", text: input.trim(), date: new Date().toISOString().split("T")[0] }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: "office", text: "Thank you for your message! A team member will respond within 24 hours. For urgent matters, please call (555) 123-4567.", date: new Date().toISOString().split("T")[0] }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-900 text-white px-4 py-4 flex items-center gap-3">
        <Link href="/portal" className="text-brand-200 hover:text-white text-sm">← Portal</Link>
        <h1 className="text-lg font-bold">Secure Messages</h1>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 flex flex-col" style={{ minHeight: "400px" }}>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === "patient" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-4 py-2 rounded-lg ${msg.role === "patient" ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.role === "patient" ? "text-brand-200" : "text-gray-400"}`}>{msg.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSend()} placeholder="Type a message..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-brand-400 focus:outline-none" />
            <button onClick={handleSend} className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
