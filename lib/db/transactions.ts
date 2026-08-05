import prisma from './prisma'
import { auditLog } from '@/lib/security/audit'

export async function createAppointmentWithAudit(data: any, userId?: string, ip?: string) {
  return prisma.$transaction(async (tx) => {
    const appointment = await tx.appointment.create({ data })
    await tx.auditLog.create({ data: { userId, action: 'CREATE_APPOINTMENT', entity: 'Appointment', entityId: appointment.id, ipAddress: ip } })
    return appointment
  })
}

export async function cancelAppointmentWithNotification(appointmentId: string, userId?: string) {
  return prisma.$transaction(async (tx) => {
    const appointment = await tx.appointment.update({ where: { id: appointmentId }, data: { status: 'CANCELLED' } })
    await tx.auditLog.create({ data: { userId, action: 'CANCEL_APPOINTMENT', entity: 'Appointment', entityId: appointmentId } })
    await tx.secureMessage.create({ data: { patientId: appointment.patientId, subject: 'Appointment Cancelled', body: `Your appointment on ${appointment.date} at ${appointment.time} has been cancelled.`, fromRole: 'system' } })
    return appointment
  })
}

export async function submitReviewWithModeration(data: any) {
  return prisma.review.create({ data: { ...data, status: 'PENDING' } })
}

export async function enrollInMembership(patientId: string, planId: string) {
  return prisma.$transaction(async (tx) => {
    const enrollment = await tx.membershipEnrollment.create({ data: { patientId, planId, status: 'active', nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) } })
    await tx.auditLog.create({ data: { action: 'MEMBERSHIP_ENROLLMENT', entity: 'MembershipEnrollment', entityId: enrollment.id } })
    return enrollment
  })
}
