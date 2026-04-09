import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Privtech Solutions Limited - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">Privacy Policy</h1>

            <div className="prose prose-neutral max-w-none">
              <p className="text-lg text-neutral-600 mb-8">
                Last updated: January 2025
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-neutral-600 mb-4">
                When you use our website or services, we may collect:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                <li>Contact information (name, email, phone number, company name)</li>
                <li>Information you provide through our contact forms</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent on site)</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                <li>Respond to your enquiries and provide requested services</li>
                <li>Send you relevant information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">3. Data Protection</h2>
              <p className="text-neutral-600 mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">4. Third-Party Sharing</h2>
              <p className="text-neutral-600 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">5. Your Rights</h2>
              <p className="text-neutral-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">6. Contact Us</h2>
              <p className="text-neutral-600 mb-6">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="text-neutral-600">
                <strong>Email:</strong> sales@privtech.net<br />
                <strong>Address:</strong> Plot A810, Meanwood Chamba Valley, Phase 1, Lusaka, Zambia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
