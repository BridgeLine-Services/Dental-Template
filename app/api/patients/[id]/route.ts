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
    const id = req.nextUrl.pathname.split('/').pop()
    const data = await prisma.patient.findUnique({ where: { id } })
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
