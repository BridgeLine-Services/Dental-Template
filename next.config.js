/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://hcaptcha.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://api.stripe.com https://api.base44.com https://hcaptcha.com https://challenges.cloudflare.com; frame-src 'self' https://js.stripe.com https://challenges.cloudflare.com; object-src 'none'; base-uri 'self'; form-action 'self' https://js.stripe.com;" }
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.base44.com" },
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
    minimumCacheTTL: 3600,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/sw.js', headers: [
        { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        { key: 'Service-Worker-Allowed', value: '/' },
      ]},
    ];
  },
  async redirects() {
    return [
      { source: '/admin', destination: '/admin/dashboard', permanent: false },
    ];
  },
};

module.exports = nextConfig;
