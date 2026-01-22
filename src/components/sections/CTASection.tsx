import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="mb-4 text-white">Ready to Strengthen Your IT?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Let&apos;s discuss how Privtech can help your business operate more securely and efficiently. Get a free consultation with our team.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              Request a Quote
            </Button>
            <Button
              href="/contact#consultation"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
