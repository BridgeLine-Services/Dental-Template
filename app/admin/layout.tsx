"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UserCheck,
  Star,
  FileText,
  Activity,
  Settings as SettingsIcon,
  LogOut,
  Bell,
  Search,
  ChevronDown
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Appointments", href: "/admin/appointments", icon: CalendarDays },
  { name: "Patients", href: "/admin/patients", icon: Users },
  { name: "Dentists", href: "/admin/dentists", icon: UserCheck },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Services", href: "/admin/services", icon: Activity },
  { name: "Settings", href: "/admin/settings", icon: SettingsIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar - Dark styling with brand colors */}
      <aside className="hidden md:flex md:flex-shrink-0 flex-col w-64 bg-brand-950 border-r border-brand-900">
        {/* Brand Header */}
        <div className="flex items-center h-16 px-6 bg-brand-950 border-b border-brand-900">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/25">
              D
            </div>
            <span className="text-lg font-bold text-white tracking-wide font-heading">
              Dental<span className="text-accent-400">Admin</span>
            </span>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex-1 flex flex-col overflow-y-auto px-4 py-6 space-y-1.5">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                    : "text-brand-300 hover:text-white hover:bg-brand-900"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    isActive ? "text-white" : "text-brand-400 group-hover:text-brand-200"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-brand-900 bg-brand-950/50">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-brand-300 hover:text-red-200 hover:bg-red-950/20 transition-all duration-200">
            <LogOut className="w-5 h-5 text-brand-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar with admin user details */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 flex-shrink-0">
          {/* Header left: Title or Search (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 w-64 max-w-xs focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500 transition-all">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search administration..."
              className="bg-transparent border-none text-xs outline-none w-full text-gray-700"
            />
          </div>
          <div className="sm:hidden font-heading font-bold text-brand-900 text-lg">
            DentalAdmin
          </div>

          {/* Header right: Actions and User */}
          <div className="flex items-center gap-4">
            {/* Notification button */}
            <button className="relative p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-accent-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Admin Profile */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
                alt="Admin Avatar"
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-brand-100"
              />
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-semibold text-gray-800 leading-tight">
                  Dr. Sarah Jenkins
                </span>
                <span className="text-[10px] font-medium text-gray-400">
                  Clinic Administrator
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Sub-page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
