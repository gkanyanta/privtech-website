export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-24">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  )
}
