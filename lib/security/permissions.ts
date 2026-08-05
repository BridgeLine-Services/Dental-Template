import { UserRole } from '@prisma/client'

type Role = UserRole | string

export function isAdmin(role: Role): boolean {
  return role === 'SUPER_ADMIN' || role === 'ADMIN'
}

export function isStaff(role: Role): boolean {
  return ['SUPER_ADMIN', 'ADMIN', 'DENTIST', 'HYGIENIST', 'RECEPTIONIST'].includes(role)
}

export function isProvider(role: Role): boolean {
  return role === 'DENTIST' || role === 'HYGIENIST'
}

export function canAccessPatientData(role: Role): boolean {
  return isStaff(role)
}

export function canManageAppointments(role: Role): boolean {
  return isStaff(role)
}

export function canModerateReviews(role: Role): boolean {
  return isAdmin(role)
}

export function canAccessAdmin(role: Role): boolean {
  return isAdmin(role)
}

export function canViewAuditLogs(role: Role): boolean {
  return role === 'SUPER_ADMIN'
}

export function canManageBilling(role: Role): boolean {
  return isAdmin(role)
}
