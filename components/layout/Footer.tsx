"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Smile,
  Clock,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter an email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate newsletter signup
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: siteConfig.social.facebook },
    { icon: Instagram, label: "Instagram", url: siteConfig.social.instagram },
    { icon: Twitter, label: "Twitter", url: siteConfig.social.twitter },
    { icon: Linkedin, label: "LinkedIn", url: siteConfig.social.linkedin },
  ];

  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Our Team", href: "/dentists" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Offers", href: "/offers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility", href: "/accessibility-statement" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1 w-fit"
              aria-label="Bright Smile Dental Home"
            >
              <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-700 transition-all duration-200">
                <Smile className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white">Bright Smile</span>
                <span className="text-xs text-brand-400 font-semibold">Dental Clinic</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {siteConfig.tagline || "Providing personalized, high-quality dental care for families. Your smile is our priority."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, url }) => {
                if (!url) return null;
                return (
                  <a
                    key={label}
                    href={url}
                    className="p-2.5 bg-slate-800 text-slate-400 rounded-lg hover:bg-brand-600 hover:text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-white text-lg">Contact</h3>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white block mb-1">Location</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white block mb-1">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="text-slate-400 hover:text-brand-400 transition-colors font-semibold"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white block mb-1">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-400 hover:text-brand-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-white flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-brand-400" aria-hidden="true" />
              Hours
            </h3>

            {/* Office Hours */}
            <div className="space-y-2">
              {siteConfig.hours.map((row) => (
                <div key={row.day} className="flex justify-between text-xs text-slate-400">
                  <span className="font-semibold">{row.day}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-4 border-t border-slate-800">
              <label htmlFor="newsletter-email" className="block text-sm font-semibold text-white mb-3">
                Stay Updated
              </label>
              {subscribed ? (
                <div className="text-sm text-brand-400 font-semibold bg-brand-950/50 p-3 rounded-lg border border-brand-800 animate-fade-in">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className="flex-1 px-3 py-2 text-sm bg-slate-800 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      aria-label="Email address for newsletter"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                      aria-label="Subscribe to newsletter"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-red-400">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Legal Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
