import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Privtech Solutions Limited - Read the terms and conditions governing use of our services.',
}

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">Terms of Service</h1>

            <div className="prose prose-neutral max-w-none">
              <p className="text-lg text-neutral-600 mb-8">
                Last updated: January 2025
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-600 mb-6">
                By accessing or using the Privtech Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">2. Services</h2>
              <p className="text-neutral-600 mb-6">
                Privtech Solutions Limited provides IT services including but not limited to cybersecurity, managed IT support, web development, app development, cloud solutions, and payment gateway integration. Specific terms for individual services will be outlined in separate service agreements.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">3. User Responsibilities</h2>
              <p className="text-neutral-600 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-neutral-600 mb-6">
                All content on this website, including text, graphics, logos, and software, is the property of Privtech Solutions Limited or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-neutral-600 mb-6">
                Privtech Solutions Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">6. Service Agreements</h2>
              <p className="text-neutral-600 mb-6">
                Specific IT services will be governed by separate service agreements that outline scope, deliverables, timelines, and payment terms. These service agreements, together with these Terms of Service, constitute the entire agreement between you and Privtech Solutions Limited.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">7. Modifications</h2>
              <p className="text-neutral-600 mb-6">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">8. Governing Law</h2>
              <p className="text-neutral-600 mb-6">
                These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Zambia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zambia.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">9. Contact Information</h2>
              <p className="text-neutral-600">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-neutral-600 mt-4">
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
