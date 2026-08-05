export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-200 border-t-brand-600 mb-4" />
        <p className="text-brand-800 font-medium">Loading...</p>
      </div>
    </div>
  )
}
