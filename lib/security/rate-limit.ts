// Simple in-memory rate limiter (use @upstash/redis in production)
// For production with Upstash: import { Ratelimit } from '@upstash/ratelimit'; import { Redis } from '@upstash/redis'

type RateLimitConfig = {
  windowMs: number
  maxRequests: number
}

const DEFAULT_CONFIG: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
}

// Stricter limits for auth endpoints
export const RATE_LIMITS: Record<string, RateLimitConfig> = {
  '/api/auth/login': { windowMs: 15 * 60 * 1000, maxRequests: 5 },
  '/api/auth/register': { windowMs: 60 * 60 * 1000, maxRequests: 3 },
  '/api/contact': { windowMs: 60 * 60 * 1000, maxRequests: 5 },
  '/api/appointments': { windowMs: 15 * 60 * 1000, maxRequests: 10 },
  '/api/reviews': { windowMs: 60 * 60 * 1000, maxRequests: 5 },
  '/api/newsletter': { windowMs: 60 * 60 * 1000, maxRequests: 3 },
  default: DEFAULT_CONFIG,
}

const store = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(identifier: string, route: string): { allowed: boolean; remaining: number; resetAt: number } {
  const config = RATE_LIMITS[route] ?? RATE_LIMITS.default
  const key = `${identifier}:${route}`
  const now = Date.now()

  const entry = store.get(key)
  if (!entry || now > entry.resetTime) {
    store.set(key, { count: 1, resetTime: now + config.windowMs })
    return { allowed: true, remaining: config.maxRequests - 1, resetAt: now + config.windowMs }
  }

  if (entry.count >= config.maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetTime }
  }

  entry.count++
  return { allowed: true, remaining: config.maxRequests - entry.count, resetAt: entry.resetTime }
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  return (forwarded?.split(',')[0] ?? realIP ?? 'unknown').trim()
}
