import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "accent" | "success" | "danger" | "outline";
}

export function Badge({ className, variant = "brand", ...props }: BadgeProps) {
  const variants = {
    brand: "bg-brand-50 text-brand-700 border-brand-200",
    accent: "bg-accent-50 text-accent-700 border-accent-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    danger: "bg-red-50 text-red-700 border-red-200",
    outline: "text-slate-700 border-slate-200 bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
