import { z } from 'zod'

// Sanitization helper — strips HTML tags and trims
const sanitizedString = (maxLen = 5000) =>
  z.string()
    .trim()
    .max(maxLen)
    .transform(s => s.replace(/<[^>]*>?/gm, '')) // Strip HTML tags
    .transform(s => s.replace(/javascript:/gi, '')) // Remove js: protocol

// ============ AUTH ============
export const loginSchema = z.object({
  email: z.string().email('Invalid email address').max(255),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128),
})

export const registerSchema = z.object({
  firstName: sanitizedString(100),
  lastName: sanitizedString(100),
  email: z.string().email('Invalid email address').max(255),
  password: z.string().min(8).max(128).regex(/[A-Z]/, 'Must include uppercase').regex(/[a-z]/, 'Must include lowercase').regex(/[0-9]/, 'Must include number'),
  phone: z.string().max(20).optional(),
  dateOfBirth: z.string().optional(),
})

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).max(128).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/),
})

// ============ APPOINTMENTS ============
export const bookAppointmentSchema = z.object({
  patientName: sanitizedString(200),
  patientEmail: z.string().email().max(255),
  patientPhone: sanitizedString(20),
  dentistId: sanitizedString(100).optional(),
  dentistName: sanitizedString(200).optional(),
  serviceName: sanitizedString(200),
  serviceSlug: sanitizedString(100).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
  duration: z.number().int().min(15).max(480).default(30),
  insuranceProvider: sanitizedString(200).optional(),
  isNewPatient: z.boolean().default(true),
  notes: sanitizedString(2000).optional(),
})

export const updateAppointmentStatusSchema = z.object({
  status: z.enum(['PENDING', 'CONFIRMED', 'SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'NO_SHOW', 'RESCHEDULED']),
  notes: sanitizedString(2000).optional(),
})

// ============ PATIENTS ============
export const patientSchema = z.object({
  firstName: sanitizedString(100),
  lastName: sanitizedString(100),
  email: z.string().email().max(255),
  phone: sanitizedString(20).optional(),
  dateOfBirth: z.string().optional(),
  gender: sanitizedString(50).optional(),
  address: sanitizedString(255).optional(),
  city: sanitizedString(100).optional(),
  state: sanitizedString(100).optional(),
  zip: sanitizedString(20).optional(),
  emergencyContactName: sanitizedString(100).optional(),
  emergencyContactPhone: sanitizedString(20).optional(),
  insuranceProvider: sanitizedString(200).optional(),
  insuranceMemberId: sanitizedString(100).optional(),
  insuranceGroupId: sanitizedString(100).optional(),
  medicalHistory: sanitizedString(5000).optional(),
  allergies: sanitizedString(1000).optional(),
  medications: sanitizedString(1000).optional(),
  notes: sanitizedString(2000).optional(),
})

export const updatePatientSchema = patientSchema.partial()

// ============ CONTACT ============
export const contactSchema = z.object({
  name: sanitizedString(200),
  email: z.string().email().max(255),
  phone: sanitizedString(20).optional(),
  subject: sanitizedString(200),
  message: sanitizedString(5000),
  turnstileToken: z.string().optional(),
})

// ============ REVIEWS ============
export const reviewSchema = z.object({
  author: sanitizedString(200),
  rating: z.number().int().min(1).max(5),
  text: sanitizedString(5000),
  treatment: sanitizedString(200).optional(),
  dentistId: sanitizedString(100).optional(),
})

export const moderateReviewSchema = z.object({
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED', 'FEATURED']).optional(),
  featured: z.boolean().optional(),
})

// ============ NEWSLETTER ============
export const newsletterSchema = z.object({
  email: z.string().email().max(255),
  name: sanitizedString(200).optional(),
  source: sanitizedString(50).default('website'),
})

// ============ PATIENT FORMS ============
export const patientFormSchema = z.object({
  patientId: sanitizedString(100),
  patientName: sanitizedString(200),
  formType: sanitizedString(50),
  formData: z.record(z.string(), z.any()),
  signature: sanitizedString(5000).optional(),
})

// ============ CONSENT ============
export const consentSchema = z.object({
  patientId: sanitizedString(100),
  consentType: sanitizedString(50),
  consentText: sanitizedString(10000),
  signature: sanitizedString(5000),
})

// ============ SECURE MESSAGES ============
export const messageSchema = z.object({
  patientId: sanitizedString(100),
  subject: sanitizedString(200),
  body: sanitizedString(5000),
})

// ============ INSURANCE VERIFICATION ============
export const insuranceVerificationSchema = z.object({
  providerName: sanitizedString(200),
  memberId: sanitizedString(50),
  groupName: sanitizedString(200).optional(),
})

// ============ REFERRAL ============
export const referralSchema = z.object({
  referrerName: sanitizedString(200),
  referrerEmail: z.string().email().max(255),
  referredName: sanitizedString(200),
  referredEmail: z.string().email().max(255),
})

// ============ WAITLIST ============
export const waitlistSchema = z.object({
  patientName: sanitizedString(200),
  email: z.string().email().max(255),
  phone: sanitizedString(20).optional(),
  serviceSlug: sanitizedString(100).optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
})

// ============ PAYMENTS ============
export const paymentSchema = z.object({
  amount: z.number().positive().max(100000),
  serviceName: sanitizedString(200),
  patientEmail: z.string().email().max(255).optional(),
  patientName: sanitizedString(200).optional(),
})

// ============ MEMBERSHIP ============
export const membershipEnrollmentSchema = z.object({
  planId: sanitizedString(100),
  patientId: sanitizedString(100).optional(),
  patientName: sanitizedString(200),
  patientEmail: z.string().email().max(255),
})

// ============ DOCUMENTS ============
export const documentSchema = z.object({
  patientId: sanitizedString(100),
  fileName: sanitizedString(255),
  fileType: sanitizedString(100),
  fileSize: z.number().int().positive(),
  fileUrl: z.string().max(2000),
  category: sanitizedString(50).optional().default('general'),
})

// ============ FINANCING ============
export const financingSchema = z.object({
  amount: z.number().positive().max(100000),
  termMonths: z.number().int().min(3).max(84).optional(),
  apr: z.number().min(0).max(50).optional(),
})

const schemas = {
  loginSchema,
  registerSchema,
  passwordChangeSchema,
  bookAppointmentSchema,
  updateAppointmentStatusSchema,
  patientSchema,
  updatePatientSchema,
  contactSchema,
  reviewSchema,
  moderateReviewSchema,
  newsletterSchema,
  patientFormSchema,
  consentSchema,
  messageSchema,
  insuranceVerificationSchema,
  referralSchema,
  waitlistSchema,
  paymentSchema,
  membershipEnrollmentSchema,
  documentSchema,
  financingSchema,
}

export default schemas
