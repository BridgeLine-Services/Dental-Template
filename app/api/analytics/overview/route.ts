import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { rateLimit, getClientIP } from '@/lib/security/rate-limit'
import { auditLog } from '@/lib/security/audit'
import { auth } from '@/lib/auth/auth'
import { isAdmin } from '@/lib/security/permissions'

export async function GET(req: NextRequest) {
  try {
    const ip = getClientIP(req)
    const limit = rateLimit(ip, req.nextUrl.pathname)
    if (!limit.allowed) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    const session = await auth()
    if (!session || !isAdmin(session.user.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }
    const [appointments, patients, reviews, revenue] = await Promise.all([
      prisma.appointment.count(),
      prisma.patient.count(),
      prisma.review.aggregate({ _avg: { rating: true }, _count: true }),
      prisma.payment.aggregate({ _sum: { amount: true }, where: { status: 'SUCCEEDED' } }),
    ])
    const pendingReviews = await prisma.review.count({ where: { status: 'PENDING' } })
    return NextResponse.json({ success: true, data: { totalAppointments: appointments, totalPatients: patients, avgRating: reviews._avg.rating ?? 0, totalReviews: reviews._count, totalRevenue: revenue._sum.amount ?? 0, pendingReviews } })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
