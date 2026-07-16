import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-brand-200">404</div>
      <h1 className="mt-4 font-heading text-2xl font-bold text-brand-900">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-brand-700">
        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        <Button href="/services" variant="secondary">
          <Stethoscope className="mr-2 h-4 w-4" />
          Browse Services
        </Button>
      </div>
    </div>
  );
}
