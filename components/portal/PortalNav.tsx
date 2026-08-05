"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  FileUp,
  CreditCard,
  Settings,
  LogOut,
  Home,
  User,
} from "lucide-react";

export function PortalNav({ patientName = "Jane Doe" }: { patientName?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("patientEmail");
    localStorage.removeItem("patientName");
    router.push("/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/portal", icon: LayoutDashboard },
    { label: "Appointments", href: "/portal/appointments", icon: Calendar },
    { label: "Forms", href: "/portal/forms", icon: FileText },
    { label: "Messages", href: "/portal/messages", icon: MessageSquare },
    { label: "Documents", href: "/portal/documents", icon: FileUp },
    { label: "Billing", href: "/portal/billing", icon: CreditCard },
    { label: "Settings", href: "/portal/settings", icon: Settings },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Portal Branding */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Website</span>
            </Link>
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            <Link href="/portal" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
                BS
              </span>
              <span className="font-bold text-base tracking-tight text-white">
                Patient Portal
              </span>
            </Link>
          </div>

          {/* User profile & logout */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 text-xs">
              <User className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-slate-200 font-medium">{patientName}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-red-400 transition-colors bg-slate-800 hover:bg-slate-700/80 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Links */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 border-t border-slate-800/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
