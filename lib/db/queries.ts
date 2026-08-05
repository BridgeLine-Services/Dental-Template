import prisma from './prisma'

export async function getDashboardStats() {
  const [appointments, upcoming, patients, reviews, revenue, pendingReviews] = await Promise.all([
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: 'CONFIRMED' } }),
    prisma.patient.count(),
    prisma.review.aggregate({ _avg: { rating: true }, _count: true }),
    prisma.payment.aggregate({ _sum: { amount: true }, where: { status: 'SUCCEEDED' } }),
    prisma.review.count({ where: { status: 'PENDING' } }),
  ])
  return { totalAppointments: appointments, upcomingAppointments: upcoming, totalPatients: patients, avgRating: reviews._avg.rating ?? 0, totalReviews: reviews._count, totalRevenue: revenue._sum.amount ?? 0, pendingReviews }
}

export async function getPatientAppointments(patientId: string) {
  return prisma.appointment.findMany({ where: { patientId }, include: { provider: true, service: true }, orderBy: { date: 'desc' } })
}

export async function getApprovedReviews(limit = 10) {
  return prisma.review.findMany({ where: { status: 'APPROVED' }, include: { provider: true }, orderBy: { createdAt: 'desc' }, take: limit })
}

export async function getPublishedBlogPosts(limit = 10) {
  return prisma.blogPost.findMany({ where: { published: true }, orderBy: { publishDate: 'desc' }, take: limit })
}

export async function searchServices(query: string) {
  return prisma.service.findMany({ where: { OR: [ { title: { contains: query, mode: 'insensitive' } }, { description: { contains: query, mode: 'insensitive' } } ] }, take: 20 })
}

export async function getPatientWithRelations(patientId: string) {
  return prisma.patient.findUnique({ where: { id: patientId }, include: { appointments: { include: { provider: true } }, forms: true, documents: true, messages: { orderBy: { createdAt: 'desc' } } } })
}
