import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { rateLimit, getClientIP } from '@/lib/security/rate-limit'
import { auditLog } from '@/lib/security/audit'
import { auth } from '@/lib/auth/auth'
import { isAdmin } from '@/lib/security/permissions'

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req)
    const limit = rateLimit(ip, req.nextUrl.pathname)
    if (!limit.allowed) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    const { providerName } = await req.json()
    const plan = await prisma.insurancePlan.findFirst({ where: { providerName: { equals: providerName, mode: 'insensitive' } } })
    return NextResponse.json({ success: true, accepted: plan?.accepted ?? false, data: plan })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
