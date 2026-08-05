"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Search,
  Filter,
  AlertCircle,
  FileCheck,
  Loader2,
} from "lucide-react";
import { PortalNav } from "@/components/portal/PortalNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FormItem {
  id: string;
  title: string;
  category: string;
  description: string;
  required: boolean;
  status: "completed" | "pending";
  lastSubmitted: string | null;
  slug: string;
}

export default function PortalForms() {
  const [forms, setForms] = useState<FormItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadForms() {
      try {
        const res = await fetch("/api/forms");
        if (res.ok) {
          const data = await res.json();
          setForms(data.forms || []);
        } else {
          // Default forms list
          setForms([
            { id: "new-patient", title: "New Patient Registration", category: "Registration", description: "Complete your personal, medical, and insurance information to register with our practice.", required: true, status: "completed", lastSubmitted: "2026-01-15", slug: "/forms/new-patient" },
            { id: "medical-history", title: "Medical History Update", category: "Clinical", description: "Update medical conditions, current medications, allergies, and emergency contact details.", required: true, status: "completed", lastSubmitted: "2026-03-20", slug: "/forms/medical-history" },
            { id: "treatment-consent", title: "General Treatment Consent", category: "Consent", description: "Informed consent for routine examinations, cleanings, and standard dental procedures.", required: true, status: "completed", lastSubmitted: "2026-01-15", slug: "/forms/treatment-consent" },
            { id: "xray-consent", title: "X-Ray & Radiograph Consent", category: "Consent", description: "Authorization for digital diagnostic X-rays and panoramic imaging.", required: true, status: "pending", lastSubmitted: null, slug: "/forms/xray-consent" },
            { id: "financial-policy", title: "Financial Responsibility Agreement", category: "Billing", description: "Terms regarding payment, insurance co-pays, deductibles, and cancellation policy.", required: true, status: "completed", lastSubmitted: "2026-01-15", slug: "/forms/financial-policy" },
            { id: "insurance-assignment", title: "Insurance Assignment of Benefits", category: "Billing", description: "Direct authorization allowing insurance reimbursement payment to Bright Smile Dental.", required: false, status: "completed", lastSubmitted: "2026-01-15", slug: "/forms/insurance-assignment" },
          ]);
        }
      } catch (e) {
        console.error("Error loading forms:", e);
      } finally {
        setLoading(false);
      }
    }
    loadForms();
  }, []);

  const filteredForms = forms
    .filter((f) => {
      if (filter === "pending") return f.status === "pending";
      if (filter === "completed") return f.status === "completed";
      return true;
    })
    .filter(
      (f) =>
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const pendingCount = forms.filter((f) => f.status === "pending").length;
  const completedCount = forms.filter((f) => f.status === "completed").length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PortalNav />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">Patient Forms</h1>
          <p className="text-sm text-slate-500 mt-1">
            Review, complete, or update your clinical, registration, and HIPAA consent forms online.
          </p>
        </div>

        {/* Completion Progress Banner */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Registration & Consent Status
              </p>
              <p className="text-base font-bold text-slate-900 mt-0.5">
                {completedCount} of {forms.length} Forms Completed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {pendingCount > 0 ? (
              <Badge variant="accent" className="bg-amber-50 text-amber-800 border-amber-200 px-3 py-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1" /> {pendingCount} Form Action Required
              </Badge>
            ) : (
              <Badge variant="success" className="px-3 py-1">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> All Required Forms Up To Date
              </Badge>
            )}
          </div>
        </div>

        {/* Controls: Search & Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl gap-1 text-xs font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Forms ({forms.length})
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === "pending" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Action Required ({pendingCount})
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === "completed" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Completed ({completedCount})
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search forms by title or category..."
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs w-full sm:w-64 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Forms List */}
        {loading ? (
          <div className="py-12 text-center text-slate-500 flex flex-col items-center">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600 mb-2" />
            <p className="text-sm font-medium">Loading form catalog...</p>
          </div>
        ) : filteredForms.length === 0 ? (
          <Card className="text-center py-12 px-4">
            <FileText className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-800">No forms found</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or changing filters.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredForms.map((form) => {
              const isPending = form.status === "pending";

              return (
                <Card
                  key={form.id}
                  className={`transition-all ${
                    isPending
                      ? "border-amber-300 bg-amber-50/20 shadow-sm hover:border-amber-400"
                      : "hover:border-slate-300"
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Badge variant="outline" className="text-[10px] text-slate-600 mb-1">
                            {form.category}
                          </Badge>
                          <h3 className="font-bold text-slate-900 text-base leading-snug">
                            {form.title}
                          </h3>
                        </div>

                        {isPending ? (
                          <Badge variant="accent" className="bg-amber-100 text-amber-800 border-amber-300 text-[10px]">
                            Pending
                          </Badge>
                        ) : (
                          <Badge variant="success" className="text-[10px]">
                            Completed
                          </Badge>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {form.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {form.lastSubmitted ? `Submitted ${form.lastSubmitted}` : "Not submitted yet"}
                      </span>

                      <Button
                        href={form.slug}
                        variant={isPending ? "primary" : "secondary"}
                        size="sm"
                        className="text-xs gap-1"
                      >
                        {isPending ? "Fill Out Form" : "Review / Update"} <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
