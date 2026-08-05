import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { rateLimit, getClientIP } from '@/lib/security/rate-limit'
import { auditLog } from '@/lib/security/audit'
import { auth } from '@/lib/auth/auth'
import { isAdmin } from '@/lib/security/permissions'

export async function PATCH(req: NextRequest) {
  try {
    const ip = getClientIP(req)
    const limit = rateLimit(ip, req.nextUrl.pathname)
    if (!limit.allowed) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    const session = await auth()
    if (!session || !isAdmin(session.user.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }
    const id = req.nextUrl.pathname.split('/').pop()
    const body = await req.json()
    const data = await prisma.review.update({ where: { id }, data: body })
    await auditLog({ action: 'UPDATE_REVIEW', entity: 'Review', entityId: id, ipAddress: ip })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
