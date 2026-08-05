import prisma from '@/lib/db/prisma'

export async function auditLog(params: {
  userId?: string
  action: string
  entity?: string
  entityId?: string
  ipAddress?: string
  userAgent?: string
  metadata?: any
}) {
  try {
    await prisma.auditLog.create({
      data: {
        userId: params.userId,
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        metadata: params.metadata ?? undefined,
      },
    })
  } catch (error) {
    console.error('[AUDIT LOG ERROR]', error)
    // Fail silently — audit logging should never break the request
    // But should be monitored via error tracking
  }
}

export async function logAccess(params: {
  userId?: string
  resource: string
  action: 'view' | 'create' | 'update' | 'delete' | 'export'
  resourceId?: string
  request?: Request
}) {
  const ip = params.request?.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const ua = params.request?.headers.get('user-agent') ?? 'unknown'
  
  await auditLog({
    userId: params.userId,
    action: `${params.action.toUpperCase()}_${params.resource.toUpperCase()}`,
    entity: params.resource,
    entityId: params.resourceId,
    ipAddress: ip,
    userAgent: ua,
  })
}

export async function logBreach(params: {
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  description: string
  affectedRecords: number
}) {
  try {
    await prisma.breachLog.create({
      data: {
        severity: params.severity,
        description: params.description,
        affectedRecords: params.affectedRecords,
      },
    })
  } catch (error) {
    console.error('[BREACH LOG ERROR]', error)
  }
}
