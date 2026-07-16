"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Send,
  Stethoscope,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate newsletter signup
      setSubscribed(true);
      setEmail("");
    }
  };

  const socialIcons = {
    facebook: <Facebook className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    youtube: <Youtube className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <NextLink href="/" className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md inline-block">
              <div className="bg-brand-500 text-white p-2 rounded-lg">
                <Stethoscope className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  Bright Smile
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-400 font-bold -mt-1">
                  Dental Clinic
                </span>
              </div>
            </NextLink>

            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.tagline || "Providing personalized, high-quality dental care for families in our community. Your comfort and bright smile are our top priorities."}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const icon = socialIcons[platform as keyof typeof socialIcons];
                if (!icon || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    className="p-2 bg-slate-800 text-slate-400 rounded-full hover:bg-brand-500 hover:text-white transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${platform} page`}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NextLink href="/services" className="hover:text-brand-400 transition-colors">
                  Our Dental Services
                </NextLink>
              </li>
              <li>
                <NextLink href="/dentists" className="hover:text-brand-400 transition-colors">
                  Meet Our Dentists
                </NextLink>
              </li>
              <li>
                <NextLink href="/about" className="hover:text-brand-400 transition-colors">
                  About Our Practice
                </NextLink>
              </li>
              <li>
                <NextLink href="/gallery" className="hover:text-brand-400 transition-colors">
                  Patient Gallery
                </NextLink>
              </li>
              <li>
                <NextLink href="/blog" className="hover:text-brand-400 transition-colors">
                  Dental Health Blog
                </NextLink>
              </li>
              <li>
                <NextLink href="/offers" className="hover:text-brand-400 transition-colors">
                  Special Offers & Deals
                </NextLink>
              </li>
              <li>
                <NextLink href="/booking" className="hover:text-brand-400 transition-colors font-semibold text-brand-400">
                  Book an Appointment
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Address */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <span>Contact Details</span>
            </h3>
            
            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Our Office</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-400 transition-colors"
                  >
                    {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Call Anytime</span>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-brand-400 transition-colors text-base font-bold">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Email Us</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Office Hours & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-400" />
              <span>Office Hours</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-400 border-collapse">
                <tbody>
                  {siteConfig.hours.map((row) => (
                    <tr key={row.day} className="border-b border-slate-800 last:border-0">
                      <td className="py-1.5 font-semibold text-slate-300 pr-2">{row.day}</td>
                      <td className="py-1.5 text-right text-slate-400">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-2 border-t border-slate-800">
              <span className="block font-semibold text-sm text-white mb-2">Subscribe to our newsletter</span>
              {subscribed ? (
                <div className="text-xs text-brand-400 font-semibold bg-brand-950/40 p-2 rounded border border-brand-800">
                  🎉 Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-800 text-slate-100 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-slate-500"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label="Subscribe"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar with Footer Navigation and copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <NextLink href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </NextLink>
            <NextLink href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </NextLink>
            <NextLink href="/accessibility-statement" className="hover:text-slate-300 transition-colors">
              Accessibility Statement
            </NextLink>
            <NextLink href="/sitemap" className="hover:text-slate-300 transition-colors">
              Sitemap
            </NextLink>
          </div>

          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
