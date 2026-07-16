"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, User, Globe, Stethoscope } from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const languages = siteConfig.languages || ["English", "Spanish", "Mandarin", "Vietnamese"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      {/* Top emergency announcement bar */}
      <div className="bg-red-600 text-white text-xs font-semibold py-2 px-4 text-center flex justify-center items-center gap-2">
        <span>Dental Emergency? We provide 24/7 care.</span>
        <a href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`} className="underline hover:text-red-100 transition-colors inline-flex items-center gap-1">
          <Phone className="h-3 w-3" /> Call Now: {siteConfig.emergencyPhone}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md p-1"
            aria-label="Bright Smile Dental Home"
          >
            <div className="bg-brand-500 text-white p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Bright Smile
              </span>
              <span className="text-xs uppercase tracking-widest text-brand-600 font-bold -mt-1">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-2 py-1",
                    isActive
                      ? "text-brand-600 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md p-1"
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label="Select Language"
              >
                <Globe className="h-4 w-4" />
                <span>{selectedLang}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", langOpen && "rotate-180")} />
              </button>

              {langOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50 text-sm">
                  {languages.map((lang) => (
                    <li key={lang}>
                      <button
                        type="button"
                        className={cn(
                          "w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors font-medium",
                          selectedLang === lang ? "text-brand-600 font-semibold" : "text-slate-700"
                        )}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Patient Portal / Login Link */}
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-2 py-1 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Patient Portal</span>
            </Link>

            {/* Click-to-Call Phone */}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-brand-600 font-bold text-sm focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md p-1 transition-colors"
              aria-label={`Call office at ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4 text-brand-500" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* Primary Booking Button */}
            <Button href="/booking" variant="primary" size="sm">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Quick Emergency Call on Mobile */}
            <a
              href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`}
              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
              aria-label="Call Emergency Dentist"
            >
              <Phone className="h-5 w-5" />
            </a>

            {/* Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle Main Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-200 bg-white",
          isOpen ? "max-h-[1000px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-md text-base font-semibold transition-colors",
                    isActive
                      ? "bg-brand-50 text-brand-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <hr className="border-slate-100 my-4" />

          {/* Quick Access Info */}
          <div className="space-y-4 px-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Language:</span>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLang(lang)}
                    className={cn(
                      "text-xs px-2 py-1 rounded font-medium border transition-colors",
                      selectedLang === lang
                        ? "bg-brand-500 text-white border-brand-500"
                        : "bg-white text-slate-600 border-slate-200"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="flex items-center gap-2 text-slate-700 font-semibold hover:text-brand-600 py-1"
              >
                <User className="h-5 w-5 text-slate-400" />
                <span>Patient Portal / Login</span>
              </Link>

              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-slate-700 font-bold hover:text-brand-600 py-1"
              >
                <Phone className="h-5 w-5 text-brand-500" />
                <span>Call Clinic: {siteConfig.phone}</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button href="/booking" variant="primary" className="w-full">
                  Book Appointment
                </Button>
                <Button
                  href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`}
                  variant="emergency"
                  className="w-full text-xs"
                >
                  24/7 Emergency
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
