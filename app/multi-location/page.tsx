import Link from 'next/link'
import { MapPin, Phone, Clock, Navigation, ArrowRight } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

export const metadata = generateMetadata({
  title: "Our Locations — Find a Dental Office Near You",
  description: "Bright Smile Dental has multiple convenient locations. Find addresses, hours, and directions for all our dental offices.",
  path: "/multi-location",
})

const locations = [
  {
    name: 'Main Office — Springfield',
    address: '123 Smile Avenue, Springfield, CA 90210',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri 9am-5pm, Sat by appointment',
    mapEmbed: 'https://maps.google.com/maps?q=Springfield+CA&t=&z=13&ie=UTF8&iwloc=&output=embed',
    services: ['General Dentistry', 'Cosmetic Dentistry', 'Emergency Care', 'Pediatric Dentistry', 'Orthodontics'],
    isPrimary: true,
  },
  {
    name: 'Westside Branch',
    address: '456 Dental Drive, Westside, CA 90211',
    phone: '(555) 123-4568',
    hours: 'Mon-Fri 10am-6pm, Sat by appointment',
    mapEmbed: 'https://maps.google.com/maps?q=Westside+CA&t=&z=13&ie=UTF8&iwloc=&output=embed',
    services: ['General Dentistry', 'Cosmetic Dentistry', 'Implants', 'Teeth Whitening'],
    isPrimary: false,
  },
]

export default function MultiLocationPage() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Convenient Care</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Our Locations</h1>
          <p className="mt-4 text-xl text-slate-600">With multiple offices to serve you, quality dental care is always close by.</p>
        </div>

        <div className="space-y-12">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto md:min-h-[300px] bg-slate-100">
                  <iframe src={loc.mapEmbed} className="w-full h-full border-0" loading="lazy" title={`${loc.name} map`} />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    {loc.isPrimary && <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-1 rounded-full">PRIMARY OFFICE</span>}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{loc.name}</h2>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-start gap-2"><MapPin className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" /><span>{loc.address}</span></div>
                    <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-brand-500 flex-shrink-0" /><a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-brand-600">{loc.phone}</a></div>
                    <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-brand-500 flex-shrink-0" /><span>{loc.hours}</span></div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-2">Services Available</h3>
                    <div className="flex flex-wrap gap-2">
                      {loc.services.map(s => <span key={s} className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>)}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href={`https://maps.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-brand-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-500 transition-colors">
                      <Navigation className="w-4 h-4" /> Get Directions
                    </a>
                    <Link href="/booking" className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-100 transition-colors">
                      Book Here <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
