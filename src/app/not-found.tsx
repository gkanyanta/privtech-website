import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-24">
      <div className="container-custom text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Page Not Found</h2>
        <p className="mb-8 text-neutral-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Go to Homepage
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-sm text-neutral-500">Looking for something specific?</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/services" className="text-primary-600 hover:text-primary-700">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary-600 hover:text-primary-700">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-primary-600 hover:text-primary-700">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
