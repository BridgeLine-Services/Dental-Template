// Input sanitization utilities
export function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/javascript:/gi, '') // Remove js: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

export function sanitizeEmail(input: string): string {
  return input.toLowerCase().trim().replace(/[^a-z0-9@._+-]/g, '')
}

export function sanitizePhone(input: string): string {
  return input.replace(/[^0-9+()-\s]/g, '').trim()
}

export function sanitizeFileName(input: string): string {
  return input.replace(/[^a-zA-Z0-9._-]/g, '_').substring(0, 255)
}

// Validate file upload
export function validateFileUpload(file: File, allowedTypes: string[] = ['application/pdf', 'image/jpeg', 'image/png'], maxSizeMB = 10): { valid: boolean; error?: string } {
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: `File type ${file.type} not allowed` }
  }
  if (file.size > maxSizeMB * 1024 * 1024) {
    return { valid: false, error: `File exceeds ${maxSizeMB}MB limit` }
  }
  return { valid: true }
}

// PHI redaction for logging
export function redactPHI(data: any): any {
  const phiFields = ['ssn', 'dateOfBirth', 'medicalHistory', 'medications', 'allergies', 'diagnosis', 'notes']
  if (typeof data !== 'object' || data === null) return data
  const redacted = { ...data }
  for (const field of phiFields) {
    if (field in redacted) redacted[field] = '[REDACTED]'
  }
  return redacted
}
