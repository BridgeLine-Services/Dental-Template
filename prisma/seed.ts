import { PrismaClient, UserRole } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Clean up
  await prisma.review.deleteMany()
  await prisma.treatment.deleteMany()
  await prisma.appointment.deleteMany()
  await prisma.patientForm.deleteMany()
  await prisma.patient.deleteMany()
  await prisma.provider.deleteMany()
  await prisma.service.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.galleryItem.deleteMany()
  await prisma.fAQItem.deleteMany()
  await prisma.insurancePlan.deleteMany()
  await prisma.specialOffer.deleteMany()
  await prisma.membershipPlan.deleteMany()
  await prisma.inventoryItem.deleteMany()
  await prisma.user.deleteMany()

  // Users
  const adminPass = await bcrypt.hash('AdminPass123!', 10)
  const patientPass = await bcrypt.hash('PatientPass123!', 10)
  
  const superAdminPass = await bcrypt.hash('SuperAdmin123!', 10)
  const superAdminUser = await prisma.user.create({ data: { email: 'superadmin@brightsmile.com', name: 'Super Admin', passwordHash: superAdminPass, role: UserRole.SUPER_ADMIN } })
  const adminUser = await prisma.user.create({ data: { email: 'admin@brightsmile.com', name: 'Admin User', passwordHash: adminPass, role: UserRole.ADMIN } })
  const patientUser = await prisma.user.create({ data: { email: 'patient@example.com', name: 'John Doe', passwordHash: patientPass, role: UserRole.PATIENT } })

  // Providers
  const providers = await Promise.all([
    prisma.provider.create({ data: { name: 'Dr. Sarah Mitchell', title: 'DDS - Lead Dentist', bio: 'With over 15 years of experience in cosmetic and restorative dentistry, Dr. Mitchell is passionate about creating beautiful, healthy smiles.', education: ['DDS, University of California San Francisco', 'Cosmetic Dentistry Certification, AACD'], certifications: ['AACD Accredited', 'Invisalign Certified Provider'], expertise: ['Cosmetic Dentistry', 'Dental Implants', 'Smile Makeovers'], languages: ['English', 'Spanish'], yearsExperience: 15, rating: 4.9, reviewCount: 127 } }),
    prisma.provider.create({ data: { name: 'Dr. James Park', title: 'DMD - Periodontist', bio: 'Dr. Park specializes in periodontal therapy and dental implant surgery, helping patients restore oral health.', education: ['DMD, Harvard School of Dental Medicine', 'Periodontology Certificate, UCLA'], certifications: ['Board Certified Periodontist'], expertise: ['Periodontal Therapy', 'Dental Implants', 'Gum Grafting'], languages: ['English', 'Korean'], yearsExperience: 12, rating: 4.8, reviewCount: 89 } }),
    prisma.provider.create({ data: { name: 'Dr. Emily Rodriguez', title: 'DDS - Pediatric Dentist', bio: 'Dr. Rodriguez creates a fun, welcoming environment for our youngest patients, making dental visits enjoyable.', education: ['DDS, Columbia University', 'Pediatric Dentistry Residency, Childrens Hospital LA'], certifications: ['Board Certified Pediatric Dentist'], expertise: ['Pediatric Dentistry', 'Preventive Care', 'Sedation Dentistry'], languages: ['English', 'Spanish', 'Portuguese'], yearsExperience: 8, rating: 5.0, reviewCount: 156 } }),
    prisma.provider.create({ data: { name: 'Dr. Michael Chen', title: 'DDS - Orthodontist', bio: 'Dr. Chen helps patients achieve straight, beautiful smiles with traditional and clear aligner orthodontics.', education: ['DDS, University of Pennsylvania', 'Orthodontics Certificate, NYU'], certifications: ['Invisalign Diamond Provider', 'ABO Certified'], expertise: ['Invisalign', 'Traditional Braces', 'Accelerated Orthodontics'], languages: ['English', 'Mandarin'], yearsExperience: 10, rating: 4.9, reviewCount: 112 } }),
  ])

  // Services
  const serviceSlugs = ['general-dentistry', 'cosmetic-dentistry', 'teeth-whitening', 'dental-implants', 'invisalign', 'veneers', 'crowns', 'bridges', 'root-canals', 'fillings', 'extractions', 'dentures', 'pediatric-dentistry', 'emergency-dentistry', 'gum-disease-treatment', 'sedation-dentistry', 'oral-surgery', 'wisdom-teeth-removal', 'preventive-care']
  const services = await Promise.all(serviceSlugs.map(slug => {
    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    return prisma.service.create({ data: { title, slug, category: slug.includes('cosmetic') || slug.includes('whitening') || slug.includes('veneers') || slug.includes('invisalign') ? 'Cosmetic' : 'General', shortDescription: `Professional ${title.toLowerCase()} services.`, description: `Comprehensive ${title.toLowerCase()} treatment tailored to your needs.`, procedure: `Detailed procedure for ${title.toLowerCase()}.`, benefits: `Benefits include improved oral health and confidence.`, recovery: 'Recovery time varies by procedure. Most patients return to normal activities within a few days.', duration: 60, price: Math.floor(Math.random() * 4000) + 100 } })
  }))

  // Patients
  const patient = await prisma.patient.create({ data: { userId: patientUser.id, firstName: 'John', lastName: 'Doe', email: 'patient@example.com', phone: '(555) 123-4567', address: '123 Main St', city: 'Springfield', state: 'CA', zip: '90210', insuranceProvider: 'Delta Dental', insuranceMemberId: 'DD123456789', status: 'ACTIVE', isNewPatient: false, emergencyContactName: 'Jane Doe', emergencyContactPhone: '(555) 987-6543' } })

  // Appointments
  await prisma.appointment.createMany({ data: [
    { patientId: patient.id, providerId: providers[0].id, serviceId: services[0].id, patientName: 'John Doe', patientEmail: 'patient@example.com', patientPhone: '(555) 123-4567', dentistName: 'Dr. Sarah Mitchell', serviceName: 'General Dentistry', date: '2026-08-15', time: '10:00', duration: 60, status: 'CONFIRMED' },
    { patientId: patient.id, providerId: providers[2].id, serviceId: services[12].id, patientName: 'John Doe', patientEmail: 'patient@example.com', patientPhone: '(555) 123-4567', dentistName: 'Dr. Emily Rodriguez', serviceName: 'Pediatric Dentistry', date: '2026-08-20', time: '14:00', duration: 30, status: 'PENDING' },
  ] })

  // Reviews
  await prisma.review.createMany({ data: [
    { author: 'Sarah K.', rating: 5, text: 'Amazing experience! The staff was so friendly and professional. My smile has never looked better.', treatment: 'Teeth Whitening', dentistId: providers[0].id, status: 'APPROVED', featured: true },
    { author: 'Mike R.', rating: 5, text: 'Dr. Park made my implant procedure painless and comfortable. Highly recommend!', treatment: 'Dental Implants', dentistId: providers[1].id, status: 'APPROVED', featured: true },
    { author: 'Lisa M.', rating: 5, text: 'Best pediatric dentist! My kids actually look forward to their appointments now.', treatment: 'Pediatric Dentistry', dentistId: providers[2].id, status: 'APPROVED', featured: true },
    { author: 'David L.', rating: 4, text: 'Great Invisalign results. Took a bit longer than expected but worth it.', treatment: 'Invisalign', dentistId: providers[3].id, status: 'APPROVED' },
    { author: 'Jennifer T.', rating: 5, text: 'The veneers look so natural. Dr. Mitchell is an artist!', treatment: 'Veneers', dentistId: providers[0].id, status: 'APPROVED', featured: true },
  ] })

  // Blog posts
  const blogSlugs = ['proper-brushing-technique', 'flossing-importance', 'teeth-whitening-options', 'dental-implants-guide', 'childrens-dental-care', 'invisalign-treatment', 'gum-disease-prevention', 'oral-health-tips']
  await Promise.all(blogSlugs.map(slug => {
    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    return prisma.blogPost.create({ data: { title, slug, excerpt: `Learn about ${title.toLowerCase()} and how it benefits your oral health.`, content: `Comprehensive guide to ${title.toLowerCase()}. This article covers everything you need to know.`, author: 'Dr. Sarah Mitchell', category: 'Education', tags: ['dental', 'health', 'tips'], published: true, publishDate: new Date(), readTime: 5 } })
  }))

  // Gallery items
  await prisma.galleryItem.createMany({ data: [
    { title: 'Smile Makeover', description: 'Complete smile transformation with veneers', category: 'Cosmetic' },
    { title: 'Implant Restoration', description: 'Single tooth implant with natural-looking crown', category: 'Restorative' },
    { title: 'Invisalign Results', description: '12-month Invisalign treatment results', category: 'Orthodontics' },
    { title: 'Teeth Whitening', description: 'Professional whitening results', category: 'Cosmetic' },
  ] })

  // FAQ items
  const faqs = [
    { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans including Delta Dental, MetLife, Cigna, Aetna, Guardian, United Concordia, Humana, and Blue Cross. Please contact us to verify your specific plan.', category: 'Insurance' },
    { question: 'Do you offer payment plans?', answer: 'Yes, we offer flexible financing through CareCredit, Cherry, and Sunbit. We also have in-house membership plans starting at $29/month.', category: 'Billing' },
    { question: 'How often should I get a dental cleaning?', answer: 'We recommend professional cleanings every 6 months for most patients. Some patients with periodontal concerns may need more frequent visits.', category: 'General' },
    { question: 'What should I do in a dental emergency?', answer: 'Call our emergency line at (555) 911-0000 immediately. We reserve emergency appointment slots daily for urgent cases.', category: 'Emergency' },
  ]
  await Promise.all(faqs.map((f, i) => prisma.fAQItem.create({ data: { ...f, displayOrder: i } })))

  // Insurance plans
  const insurers = ['Delta Dental', 'MetLife', 'Cigna', 'Aetna', 'Guardian', 'United Concordia', 'Humana', 'Blue Cross Blue Shield']
  await Promise.all(insurers.map(name => prisma.insurancePlan.create({ data: { providerName: name, accepted: true } })))

  // Special offers
  await prisma.specialOffer.createMany({ data: [
    { title: 'New Patient Special', description: '$99 comprehensive exam, cleaning, and x-rays for new patients.', badge: 'New Patients', cta: 'Book Now', active: true, endDate: new Date('2026-12-31') },
    { title: 'Teeth Whitening Special', description: 'Professional whitening for $199 (regularly $350).', badge: 'Limited Time', cta: 'Learn More', active: true, endDate: new Date('2026-09-30') },
  ] })

  // Membership plans
  await prisma.membershipPlan.createMany({ data: [
    { name: 'Basic', description: 'Essential preventive care for individuals', monthlyPrice: 29, annualPrice: 319, benefits: ['2 cleanings/year', '2 exams/year', '1 x-ray set/year', '10% off treatments'], isActive: true },
    { name: 'Plus', description: 'Comprehensive care with added benefits', monthlyPrice: 49, annualPrice: 529, benefits: ['3 cleanings/year', 'Fluoride included', '20% off treatments', 'Free emergency exam'], isActive: true },
    { name: 'Premium', description: 'Complete coverage for the whole family', monthlyPrice: 99, annualPrice: 1068, benefits: ['4 cleanings/year', '30% off treatments', 'Invisalign discount', 'Family coverage up to 4'], isActive: true },
  ] })

  // Inventory
  await prisma.inventoryItem.createMany({ data: [
    { name: 'Dental Gloves', category: 'Supplies', currentStock: 500, reorderLevel: 100, unitCost: 0.15, unitOfMeasure: 'pairs', supplier: 'Henry Schein' },
    { name: 'Composite Resin', category: 'Materials', currentStock: 50, reorderLevel: 20, unitCost: 45.00, unitOfMeasure: 'syringes', supplier: '3M ESPE' },
    { name: 'Dental Implants', category: 'Materials', currentStock: 30, reorderLevel: 10, unitCost: 250.00, unitOfMeasure: 'units', supplier: 'Straumann' },
  ] })

  // Treatments
  await prisma.treatment.createMany({ data: [
    { patientId: patient.id, providerId: providers[0].id, serviceId: services[0].id, patientName: 'John Doe', providerName: 'Dr. Sarah Mitchell', description: 'Routine cleaning and exam', cost: 120, status: 'completed', completedDate: new Date() },
  ] })

  console.log('Database seeded successfully!')
  console.log('Super Admin login: superadmin@brightsmile.com / SuperAdmin123!')
console.log('Admin login: admin@brightsmile.com / AdminPass123!')
console.log('Patient login: patient@example.com / PatientPass123!')
  console.log('Patient login: patient@example.com / PatientPass123!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
