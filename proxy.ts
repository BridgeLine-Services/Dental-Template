import { auth } from '@/lib/auth/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const path = req.nextUrl.pathname
  const isLoggedIn = !!req.auth
  const role = req.auth?.user?.role as string | undefined

  // Public routes that don't require auth
  const publicRoutes = [
    '/', '/login', '/services', '/dentists', '/about', '/gallery',
    '/blog', '/contact', '/faq', '/booking', '/emergency', '/offers',
    '/resources', '/privacy-policy', '/terms', '/accessibility',
    '/hipaa-notice', '/consent-forms', '/insurance-verification',
    '/smile-assessment', '/cost-estimator', '/telehealth',
    '/payment', '/payment-success', '/payment-cancelled',
    '/membership', '/referral', '/waitlist', '/financing-calculator',
    '/online-check-in', '/staff', '/office-tour', '/multi-location',
    '/ai-receptionist', '/offline',
    // Form pages
    '/forms/new-patient', '/forms/medical-history', '/forms/treatment-consent',
    '/forms/xray-consent', '/forms/financial-policy', '/forms/insurance-assignment',
    // Legal pages
    '/legal', '/legal/cookie-policy', '/legal/disclaimer', '/legal/copyright',
    '/legal/dmca', '/legal/data-retention', '/legal/ai-disclosure',
    '/legal/accessibility', '/legal/no-medical-advice', '/legal/financial-policy',
  ]
  const isPublicRoute = publicRoutes.some(r => path === r || path.startsWith(r + '/'))

  // Admin routes require admin role
  if (path.startsWith('/admin')) {
    if (!isLoggedIn || !['SUPER_ADMIN', 'ADMIN'].includes(role ?? '')) {
      return NextResponse.redirect(new URL('/login?callbackUrl=' + encodeURIComponent(path), req.url))
    }
  }

  // Portal routes require authentication
  if (path.startsWith('/portal') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login?callbackUrl=' + encodeURIComponent(path), req.url))
  }

  // API routes — protect mutations
  if (path.startsWith('/api/') && !path.startsWith('/api/auth/') && !path.startsWith('/api/public/')) {
    const publicApiRoutes = [
      '/api/services', '/api/providers', '/api/blog',
      '/api/reviews', '/api/offers', '/api/faq',
      '/api/insurance-plans', '/api/gallery',
      '/api/contact', '/api/newsletter', '/api/waitlist',
      '/api/referrals', '/api/health',
    ]
    const isPublicApi = publicApiRoutes.some(r => path === r || path.startsWith(r + '/'))

    if (!isPublicApi && !isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sw.js|robots.txt|sitemap.xml|manifest.json).*)'],
}
