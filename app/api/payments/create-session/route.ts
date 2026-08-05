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
    const body = await req.json()
    const data = await prisma.payment.create({ data: body })
    await auditLog({ action: 'CREATE_PAYMENT', entity: 'Payment', entityId: (data as any).id, ipAddress: ip, userAgent: req.headers.get('user-agent') ?? undefined })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
