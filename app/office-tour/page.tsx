import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: "Office Tour — See Our Modern Dental Facility",
  description: "Take a virtual tour of our state-of-the-art dental office. Modern equipment, comfortable waiting area, and welcoming atmosphere.",
  path: "/office-tour",
})

const tourAreas = [
  { name: 'Reception Area', desc: 'Comfortable seating, complimentary refreshments, and a calming atmosphere to start your visit right.', image: 'https://images.unsplash.com/photo-1629909613654-28e8f1a9f7e1?w=800' },
  { name: 'Treatment Rooms', desc: 'Equipped with the latest dental technology for precise diagnostics and comfortable treatment.', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800' },
  { name: 'Digital X-Ray Suite', desc: 'Low-radiation digital imaging for instant, detailed diagnostic images.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800' },
  { name: 'Sterilization Area', desc: 'Hospital-grade sterilization protocols ensure the highest standards of infection control.', image: 'https://images.unsplash.com/photo-1583912267550-d44c9c8b76f6?w=800' },
  { name: 'Consultation Room', desc: 'Private space for treatment planning, financial discussions, and patient education.', image: 'https://images.unsplash.com/photo-1631217868264-e51890cdf591?w=800' },
  { name: 'Pediatric Corner', desc: 'A fun, kid-friendly space with games and activities to keep young patients entertained.', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73b487?w=800' },
]

export default function OfficeTourPage() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Come On In</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Virtual Office Tour</h1>
          <p className="mt-4 text-xl text-slate-600">Take a look around our modern, comfortable dental facility. We've designed every space with your comfort in mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tourAreas.map((area) => (
            <div key={area.name} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-slate-100 relative">
                <img src={area.image} alt={area.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.name}</h3>
                <p className="text-sm text-slate-600">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 text-white text-center">
          <MapPin className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">Want to See It in Person?</h2>
          <p className="text-brand-100 mb-6">Schedule an in-person office tour. We'd love to show you around and answer any questions.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors">
            Schedule a Tour <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
