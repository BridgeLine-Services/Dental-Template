"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-brand-900 text-white shadow-lg border-t border-brand-700"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm flex-1">
          We use cookies to improve your experience and analyze website traffic. By continuing to use our site, you consent to our use of cookies. See our{" "}
          <Link href="/privacy-policy" className="underline hover:text-brand-200" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-brand-800 hover:bg-brand-700 border border-brand-600 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Decline cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
