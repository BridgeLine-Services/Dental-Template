'use client'
import { useState, useRef, useEffect } from 'react'
import { Bot, Send, Sparkles, Clock, Calendar, ShieldCheck, MessageSquare } from 'lucide-react'

const features = [
  { icon: Calendar, title: 'Appointment Booking', desc: 'Schedule, reschedule, or cancel appointments anytime, day or night.' },
  { icon: MessageSquare, title: 'Instant Answers', desc: 'Get immediate answers about services, pricing, insurance, and office policies.' },
  { icon: ShieldCheck, title: 'Insurance Verification', desc: 'Check if your insurance is accepted and estimate your coverage.' },
  { icon: Clock, title: '24/7 Availability', desc: 'Never wait for office hours. Our AI assistant is always here to help.' },
]

interface ChatMessage { role: string; text: string }

export default function AIReceptionistPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: "Hi! I'm your AI dental assistant. How can I help you today?" },
    { role: 'user', text: "Do you accept Delta Dental insurance?" },
    { role: 'bot', text: "Yes, we accept Delta Dental! Delta Dental is one of our in-network providers. Would you like me to help you schedule an appointment?" },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages((m) => [...m, { role: 'user', text: input }])
    setInput('')
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that! You can book an appointment through our online booking page or I can connect you with our office.",
        "Great question! For specific treatment pricing, I recommend scheduling a consultation where we can provide a personalized estimate.",
        "We offer several financing options including CareCredit, Cherry, and Sunbit. Would you like me to direct you to our financing calculator?",
        "Our office hours are Monday-Friday 9am-5pm, with extended hours Thursday until 7pm. Saturday appointments are available by request.",
      ]
      setMessages((prev) => [...prev, { role: 'bot', text: responses[Math.floor(Math.random() * responses.length)] }])
    }, 1000)
  }

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">AI Dental Receptionist</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Meet our 24/7 AI-powered assistant. Book appointments, get answers, verify insurance, and handle emergencies — anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <f.icon className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 p-4 flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold flex items-center gap-2">AI Assistant <Sparkles className="w-4 h-4" /></div>
              <div className="text-xs text-brand-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block" /> Online now
              </div>
            </div>
          </div>
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'user' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
            />
            <button onClick={sendMessage} className="bg-brand-600 text-white p-2.5 rounded-xl hover:bg-brand-500 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6 max-w-lg mx-auto">
          <ShieldCheck className="w-4 h-4 inline mr-1" />
          Our AI assistant follows HIPAA guidelines. No personal health information is stored. For emergencies, call (555) 911-0000.
        </p>
      </div>
    </div>
  )
}
