"use client";
import { useState } from "react";

const questions = [
  { q: "How would you rate your smile?", options: ["I love it!", "It's okay", "I'd like to improve it", "I'm very unhappy with it"], scores: [0, 1, 2, 3] },
  { q: "Are you happy with the color of your teeth?", options: ["Yes, very happy", "Somewhat", "They could be whiter", "Definitely not"], scores: [0, 1, 2, 3] },
  { q: "Do you have any missing teeth?", options: ["No", "One", "A few", "Multiple"], scores: [0, 1, 2, 3] },
  { q: "Are your teeth straight?", options: ["Yes, perfectly", "Mostly straight", "Slightly crooked", "Very crooked"], scores: [0, 1, 2, 3] },
  { q: "Do you experience tooth sensitivity?", options: ["Never", "Rarely", "Sometimes", "Often"], scores: [0, 1, 2, 3] },
  { q: "Do you have chipped, cracked, or broken teeth?", options: ["No", "One tooth", "A couple", "Several"], scores: [0, 1, 2, 3] },
  { q: "How do you feel about visiting the dentist?", options: ["I enjoy it", "I'm comfortable", "A bit nervous", "Very anxious"], scores: [0, 1, 2, 3] },
];

const getRecommendations = (total: number) => {
  if (total <= 4) return {
    title: "Your smile looks healthy!",
    desc: "You're doing great with your oral health! We recommend continuing with regular checkups and preventive care to maintain your beautiful smile.",
    services: [{ name: "Preventive Care", link: "/services/preventive-care" }, { name: "Teeth Whitening", link: "/services/teeth-whitening" }],
  };
  if (total <= 10) return {
    title: "Let's enhance your smile!",
    desc: "Your oral health is good, but there are some areas we can improve. Consider these cosmetic and preventive treatments:",
    services: [{ name: "Teeth Whitening", link: "/services/teeth-whitening" }, { name: "Veneers", link: "/services/veneers" }, { name: "Invisalign", link: "/services/invisalign" }],
  };
  if (total <= 16) return {
    title: "We can transform your smile!",
    desc: "You may benefit from some restorative and cosmetic treatments. Here are our recommendations:",
    services: [{ name: "Dental Implants", link: "/services/dental-implants" }, { name: "Veneers", link: "/services/veneers" }, { name: "Crowns", link: "/services/crowns" }, { name: "Invisalign", link: "/services/invisalign" }],
  };
  return {
    title: "Let's restore your smile and comfort!",
    desc: "Based on your answers, we recommend a comprehensive consultation to address multiple concerns. Don't worry — we offer sedation dentistry for anxious patients.",
    services: [{ name: "Dental Implants", link: "/services/dental-implants" }, { name: "Crowns", link: "/services/crowns" }, { name: "Sedation Dentistry", link: "/services/sedation-dentistry" }, { name: "Emergency Dentistry", link: "/services/emergency-dentistry" }],
  };
};

export default function SmileAssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  const total = answers.reduce((a, b) => a + b, 0);
  const recs = getRecommendations(total);

  return (
    <div className="bg-white">
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Smile Assessment</h1>
          <p className="text-brand-200 text-lg">Take our free 2-minute quiz to get personalized treatment recommendations</p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-12">
        {!showResults ? (
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Question {current + 1} of {questions.length}</span>
              <span className="text-sm text-gray-500">{Math.round(((current) / questions.length) * 100)}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-brand-600 rounded-full h-2 transition-all" style={{ width: `${(current / questions.length) * 100}%` }} />
            </div>
            <h2 className="text-xl font-bold text-brand-900 mb-6">{questions[current].q}</h2>
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(questions[current].scores[i])}
                  className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-brand-400 hover:bg-brand-50 transition-colors text-gray-700">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">😁</span>
            </div>
            <h2 className="text-2xl font-bold text-brand-900 mb-4">{recs.title}</h2>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">{recs.desc}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {recs.services.map((s, i) => (
                <a key={i} href={s.link} className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors">
                  {s.name}
                </a>
              ))}
            </div>
            <a href="/booking" className="inline-block bg-brand-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-800 transition-colors">
              Book a Free Consultation
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
