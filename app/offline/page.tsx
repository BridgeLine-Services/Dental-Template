export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">You're offline</h1>
        <p className="text-gray-600 mb-6">It looks like you've lost your internet connection. Some pages may still be available from cache.</p>
        <a href="/" className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-lg font-medium">
          Try again
        </a>
        <p className="text-sm text-gray-500 mt-4">If this persists, call us at <a href="tel:5551234567" className="text-brand-600 font-medium">(555) 123-4567</a></p>
      </div>
    </div>
  )
}
