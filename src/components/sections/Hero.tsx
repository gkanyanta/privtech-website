import Button from '@/components/ui/Button'
import { ShieldIcon, CloudIcon, GlobeIcon, WrenchIcon } from '@/components/ui/Icons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pt-20 md:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M10 0v10h10V0H10zm0 10v10H0V10h10z" fill="currentColor" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-white text-balance">
            Secure. Reliable. Local.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-100 md:text-xl">
            Privtech Solutions is your trusted IT partner in Zambia. From cybersecurity to cloud services, we help businesses operate safely and efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              Request a Quote
            </Button>
            <Button href="/contact#consultation" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-primary-100">
              <ShieldIcon className="h-5 w-5 text-secondary-400" />
              <span className="text-sm font-medium">Cybersecurity</span>
            </div>
            <div className="flex items-center gap-2 text-primary-100">
              <CloudIcon className="h-5 w-5 text-secondary-400" />
              <span className="text-sm font-medium">Cloud</span>
            </div>
            <div className="flex items-center gap-2 text-primary-100">
              <GlobeIcon className="h-5 w-5 text-secondary-400" />
              <span className="text-sm font-medium">Websites</span>
            </div>
            <div className="flex items-center gap-2 text-primary-100">
              <WrenchIcon className="h-5 w-5 text-secondary-400" />
              <span className="text-sm font-medium">Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative h-16 md:h-24">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 74"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C240 74 480 74 720 49C960 24 1200 24 1440 49V74H0V24Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
