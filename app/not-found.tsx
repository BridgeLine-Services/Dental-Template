import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-8xl font-bold text-brand-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-lg font-medium">
          Back to home
        </Link>
      </div>
    </div>
  )
}
