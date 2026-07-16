import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: "primary" | "secondary" | "emergency" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      type = "button",
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-sm",
      secondary: "border-2 border-brand-500 text-brand-600 bg-transparent hover:bg-brand-50 shadow-sm",
      emergency: "bg-red-600 text-white hover:bg-red-700 shadow-md animate-pulse hover:animate-none",
      ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 h-8",
      md: "text-sm px-4 py-2 h-10",
      lg: "text-base px-6 py-3 h-12",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={combinedClassName}
            ref={ref as any}
            target="_blank"
            rel="noopener noreferrer"
            {...(props as any)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName} ref={ref as any} {...(props as any)}>
          {children}
        </Link>
      );
    }

    return (
      <button
        type={type}
        className={combinedClassName}
        ref={ref as any}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
