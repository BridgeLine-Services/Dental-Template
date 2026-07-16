"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, User, Globe, Smile } from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-b border-slate-100 bg-white/50 backdrop-blur-sm"
      )}
      role="banner"
    >
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-xs font-semibold py-2 px-4 flex justify-center items-center gap-2 animate-pulse-subtle">
        <span className="hidden sm:inline">Dental Emergency? We provide 24/7 care.</span>
        <span className="sm:hidden">24/7 Emergency Care Available</span>
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`}
          className="underline hover:text-red-100 transition-colors inline-flex items-center gap-1 font-bold"
          aria-label={`Call emergency dentist: ${siteConfig.emergencyPhone}`}
        >
          <Phone className="h-3 w-3" />
          <span className="hidden sm:inline">{siteConfig.emergencyPhone}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md p-1 shrink-0"
            aria-label="Bright Smile Dental Home"
          >
            <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-700 transition-all duration-200">
              <Smile className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-heading font-bold text-lg tracking-tight text-slate-900 group-hover:text-brand-600">
                Bright Smile
              </span>
              <span className="text-xs text-brand-600 font-semibold">Dental</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-all duration-200 hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1 relative",
                    isActive ? "text-brand-600" : "text-slate-700"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1.5 transition-colors"
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label="Select Language"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{selectedLang}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", langOpen && "rotate-180")} />
              </button>

              {langOpen && (
                <ul
                  className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 text-sm"
                  role="listbox"
                >
                  {languages.map((lang) => (
                    <li key={lang} role="option" aria-selected={selectedLang === lang}>
                      <button
                        type="button"
                        className={cn(
                          "w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors font-medium",
                          selectedLang === lang ? "text-brand-600 bg-brand-50" : "text-slate-700"
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

            {/* Patient Portal */}
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1.5 transition-colors"
              aria-label="Patient Portal"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Portal</span>
            </Link>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1.5 transition-colors"
              aria-label={`Call office: ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>

            {/* Book Button */}
            <Button href="/booking" variant="primary" size="sm">
              Book
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`}
              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Call emergency"
            >
              <Phone className="h-5 w-5" />
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100",
          isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
        id="mobile-menu"
      >
        <div className="px-4 py-4 space-y-3 bg-white">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-base font-semibold transition-all",
                    isActive ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-slate-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <hr className="border-slate-100 my-3" />

          {/* Mobile Quick Actions */}
          <div className="space-y-3 px-1">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-semibold text-slate-600">Language</span>
              <div className="flex gap-1.5">
                {languages.slice(0, 3).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLang(lang)}
                    className={cn(
                      "text-xs px-2 py-1 rounded font-medium transition-all",
                      selectedLang === lang
                        ? "bg-brand-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {lang.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-3 text-slate-700 font-semibold hover:text-brand-600 py-2 px-2"
            >
              <Phone className="h-5 w-5 text-brand-500" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              href="/login"
              className="flex items-center gap-3 text-slate-700 font-semibold hover:text-brand-600 py-2 px-2"
            >
              <User className="h-5 w-5 text-slate-400" />
              <span>Patient Portal</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button href="/booking" variant="primary" className="w-full text-sm">
                Book Appointment
              </Button>
              <Button
                href={`tel:${siteConfig.emergencyPhone.replace(/\D/g, "")}`}
                variant="emergency"
                className="w-full text-xs"
              >
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
