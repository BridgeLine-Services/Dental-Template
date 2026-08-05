import { Phone, Mail, Award } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: "Meet Our Dental Staff — Hygienists & Office Team",
  description: "Get to know our friendly dental hygienists, receptionists, and office managers who make your visit comfortable and seamless.",
  path: "/staff",
})

const staff = [
  { name: 'Jennifer Martinez', title: 'Lead Dental Hygienist', bio: 'Jennifer has 15 years of experience in dental hygiene, specializing in periodontal therapy and patient education. She loves helping patients achieve their healthiest smiles.', photo: 'https://ui-avatars.com/api/?name=Jennifer+Martinez&background=2dd4bf&color=fff&size=256', years: 15 },
  { name: 'Robert Chen', title: 'Dental Hygienist', bio: 'Robert joined our team after graduating with honors from the University of California School of Dentistry. He focuses on preventive care and making cleanings comfortable.', photo: 'https://ui-avatars.com/api/?name=Robert+Chen&background=2dd4bf&color=fff&size=256', years: 6 },
  { name: 'Amanda Patel', title: 'Office Manager', bio: 'Amanda keeps everything running smoothly. With expertise in dental insurance and billing, she helps patients maximize their benefits and understand their options.', photo: 'https://ui-avatars.com/api/?name=Amanda+Patel&background=2dd4bf&color=fff&size=256', years: 10 },
  { name: 'Marcus Johnson', title: 'Patient Coordinator', bio: 'Marcus is your first point of contact. He handles scheduling, check-in, and ensures every patient feels welcomed from the moment they walk in.', photo: 'https://ui-avatars.com/api/?name=Marcus+Johnson&background=2dd4bf&color=fff&size=256', years: 4 },
  { name: 'Lisa Wang', title: 'Dental Assistant', bio: 'Lisa assists our dentists during procedures and ensures all equipment is sterilized and ready. Her attention to detail keeps our operatories running efficiently.', photo: 'https://ui-avatars.com/api/?name=Lisa+Wang&background=2dd4bf&color=fff&size=256', years: 7 },
  { name: 'David Thompson', title: 'Insurance Specialist', bio: 'David navigates the complex world of dental insurance so you dont have to. He works with providers to maximize your coverage and minimize your out-of-pocket costs.', photo: 'https://ui-avatars.com/api/?name=David+Thompson&background=2dd4bf&color=fff&size=256', years: 8 },
]

export default function StaffPage() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Our Team</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Meet Our Staff</h1>
          <p className="mt-4 text-xl text-slate-600">The friendly faces behind your great experience. Our dedicated team is here to make every visit comfortable and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-brand-50">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-3">{member.title}</p>
                <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award className="w-4 h-4" />
                  <span>{member.years} years of experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
