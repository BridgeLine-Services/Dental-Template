import { siteConfig } from "@/lib/data";
import { MapPin, Clock, Mail, Phone, MessageSquare, Car } from "lucide-react";

export function OfficeInfo() {
  return (
    <section className="bg-brand-50/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Visit Our Office
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Conveniently located with free parking and state-of-the-art facilities designed for your comfort.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm">
            <iframe
              src={siteConfig.mapsEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-100 p-3">
                  <MapPin className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brand-900">Our Location</h3>
                  <p className="mt-1 text-sm text-brand-700">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                  <a
                    href={`https://maps.google.com?q=${encodeURIComponent(
                      siteConfig.address.street + " " + siteConfig.address.city + " " + siteConfig.address.state
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-100 p-3">
                  <Car className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brand-900">Parking Information</h3>
                  <p className="mt-1 text-sm text-brand-700">
                    Free patient parking available in our dedicated lot. Street parking also available.
                    Accessible parking spaces located near the entrance.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-100 p-3">
                  <Clock className="h-5 w-5 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-brand-900">Office Hours</h3>
                  <div className="mt-2 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-brand-700">{h.day}</span>
                        <span className="text-brand-900">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                    <strong>Emergency:</strong> {siteConfig.emergencyHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a href={`tel:${siteConfig.phone}`} className="flex flex-col items-center gap-2 rounded-2xl border border-brand-100 bg-white p-4 text-center transition hover:border-brand-300">
                <Phone className="h-5 w-5 text-brand-600" />
                <span className="text-xs font-medium text-brand-700">Call Us</span>
                <span className="text-xs text-brand-900">{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex flex-col items-center gap-2 rounded-2xl border border-brand-100 bg-white p-4 text-center transition hover:border-brand-300">
                <Mail className="h-5 w-5 text-brand-600" />
                <span className="text-xs font-medium text-brand-700">Email Us</span>
                <span className="text-xs text-brand-900 break-all">{siteConfig.email}</span>
              </a>
              <a href={`sms:${siteConfig.sms}`} className="flex flex-col items-center gap-2 rounded-2xl border border-brand-100 bg-white p-4 text-center transition hover:border-brand-300">
                <MessageSquare className="h-5 w-5 text-brand-600" />
                <span className="text-xs font-medium text-brand-700">Text Us</span>
                <span className="text-xs text-brand-900">{siteConfig.sms}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
