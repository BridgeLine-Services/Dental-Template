"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
}

const quickReplies = [
  { label: "Book Appointment", value: "I'd like to book an appointment", link: "/booking" },
  { label: "Check Insurance", value: "Do you accept my insurance?", link: "/insurance-verification" },
  { label: "Emergency?", value: "I have a dental emergency", link: null },
  { label: "Office Hours", value: "What are your office hours?", link: null },
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: "bot", text: "Hi! I'm Koda, your virtual dental assistant. How can I help you today?" },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (userText: string): { text: string; link?: string } => {
    const lower = userText.toLowerCase();
    if (lower.includes("emergency") || lower.includes("pain") || lower.includes("broken") || lower.includes("bleeding") || lower.includes("toothache")) {
      return { text: "If you're experiencing a dental emergency, please call us immediately at (555) 911-0000. We offer same-day emergency appointments. For non-urgent issues, you can also visit our emergency page.", link: "/emergency" };
    }
    if (lower.includes("appointment") || lower.includes("book") || lower.includes("schedule")) {
      return { text: "You can book an appointment online through our scheduling system! Choose your preferred dentist, service, and time slot.", link: "/booking" };
    }
    if (lower.includes("insurance") || lower.includes("coverage") || lower.includes("ppo") || lower.includes("hmo")) {
      return { text: "We accept most major PPO insurance plans including Delta Dental, Cigna, Aetna, and more! You can verify your insurance coverage online.", link: "/insurance-verification" };
    }
    if (lower.includes("hour") || lower.includes("open") || lower.includes("time")) {
      return { text: "Our office hours are:\nMon–Thu: 8:00 AM – 5:00 PM\nWed: 8:00 AM – 7:00 PM\nFri: 8:00 AM – 3:00 PM\nSat: By appointment\nSun: Closed\nEmergency: 24/7" };
    }
    if (lower.includes("cost") || lower.includes("price") || lower.includes("expensive") || lower.includes("financing")) {
      return { text: "We offer transparent pricing and flexible financing! Check our cost estimator for estimated out-of-pocket costs, or learn about our CareCredit financing options.", link: "/cost-estimator" };
    }
    if (lower.includes("whiten") || lower.includes("white")) {
      return { text: "Our professional teeth whitening can brighten your smile up to 8 shades in a single visit! Prices start at $199.", link: "/services/teeth-whitening" };
    }
    if (lower.includes("implant")) {
      return { text: "Dental implants are a permanent solution for missing teeth. We handle everything in-house with 3D imaging. Prices start at $1,500.", link: "/services/dental-implants" };
    }
    if (lower.includes("invisalign") || lower.includes("aligner") || lower.includes("straighten")) {
      return { text: "We're a Diamond+ Invisalign provider! Free consultations include a 3D digital scan of your smile. Treatment starts at $3,500 with financing available.", link: "/services/invisalign" };
    }
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return { text: "Hello! I'm here to help with appointments, insurance questions, service information, and dental emergencies. What can I assist you with?" };
    }
    return { text: "I'd be happy to help with that! For specific questions, you can call us at (555) 123-4567, book an appointment online, or browse our services page.", link: "/contact" };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setShowQuickReplies(false);
    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setMessages(prev => [...prev, { role: "bot", text: response.text }]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open live chat"
          className="fixed bottom-6 right-6 z-40 bg-brand-600 hover:bg-brand-500 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-400"
        >
          <FaCommentDots className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
        </button>
      )}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Live chat"
          className="fixed bottom-6 right-6 z-40 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          style={{ maxHeight: "500px" }}
        >
          <div className="bg-brand-600 text-white rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-sm font-bold">K</div>
              <div>
                <p className="font-semibold text-sm">Koda — AI Assistant</p>
                <p className="text-xs text-brand-200">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-white hover:text-brand-200">
              <FaTimes />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "250px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${msg.role === "user" ? "bg-brand-600 text-white" : "bg-white text-gray-800 border border-gray-200"}`}>
                  {msg.text.split("\n").map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </div>
            ))}
            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => {
                      if (qr.link) {
                        window.location.href = qr.link;
                      } else {
                        setMessages(prev => [...prev, { role: "user", text: qr.value }]);
                        setShowQuickReplies(false);
                        setTimeout(() => {
                          const response = getBotResponse(qr.value);
                          setMessages(prev => [...prev, { role: "bot", text: response.text }]);
                        }, 500);
                      }
                    }}
                    className="px-3 py-1.5 bg-brand-50 text-brand-700 border border-brand-200 rounded-full text-xs font-medium hover:bg-brand-100 transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              placeholder="Type your message..."
              aria-label="Chat input"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="bg-brand-600 hover:bg-brand-500 text-white px-3 py-2 rounded-lg transition-colors"
            >
              <FaPaperPlane className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
