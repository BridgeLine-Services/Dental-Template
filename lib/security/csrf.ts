import { headers } from 'next/headers'

// CSRF protection — validates that requests originate from the same origin
export function validateCSRF(request: Request): boolean {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  const referer = request.headers.get('referer')

  // For same-origin requests, origin should match host
  if (origin) {
    const originHost = new URL(origin).host
    if (originHost === host) return true
  }

  // Fall back to referer check
  if (referer) {
    try {
      const refererHost = new URL(referer).host
      if (refererHost === host) return true
    } catch {}
  }

  // Allow API routes called from server components (no origin header)
  return !origin && !referer
}
