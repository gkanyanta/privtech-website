import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { MapPinIcon, EnvelopeIcon, WhatsAppIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Privtech Solutions for IT services, cybersecurity, web development, and more. Based in Lusaka, Zambia, serving businesses across the region.',
  openGraph: {
    title: 'Contact Privtech Solutions',
    description: 'Reach out for a free consultation. We are here to help with your IT needs.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Ready to discuss your IT needs? Get in touch and we will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" id="consultation">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">Get in Touch</h2>
              <p className="mb-8 text-neutral-600">
                Have a question or ready to start a project? Fill out the form or reach us directly.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Office Address</h3>
                    <p className="text-neutral-600">
                      Plot A810, Meanwood Chamba Valley,<br />
                      Phase 1, Lusaka, Zambia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <EnvelopeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <a
                      href="mailto:sales@privtech.net"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      sales@privtech.net
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/260977000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                      aria-label="Contact us on WhatsApp"
                    >
                      Message us on WhatsApp
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">
                      Click to start a conversation
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 rounded-xl bg-neutral-50 p-6">
                <h3 className="mb-4 font-semibold text-neutral-900">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday</span>
                    <span className="font-medium text-neutral-900">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium text-neutral-900">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday</span>
                    <span className="font-medium text-neutral-900">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-neutral-500">
                  Emergency support available for managed service clients.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-neutral-900">Send Us a Message</h2>
                <ContactForm showAllFields={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">Find Us</h2>
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            {/* Map Placeholder - Replace with actual map embed */}
            <div className="flex h-80 items-center justify-center bg-neutral-200">
              <div className="text-center">
                <MapPinIcon className="mx-auto mb-4 h-12 w-12 text-neutral-400" />
                <p className="font-medium text-neutral-600">Map Embed Placeholder</p>
                <p className="text-sm text-neutral-500">
                  Plot A810, Meanwood Chamba Valley, Phase 1, Lusaka
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Meanwood+Chamba+Valley+Lusaka+Zambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary-600 hover:text-primary-700"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
