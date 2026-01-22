import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { ShieldIcon, CheckCircleIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Privtech Solutions Limited - a trusted IT company in Zambia providing cybersecurity, managed IT support, and technology solutions for businesses.',
  openGraph: {
    title: 'About Privtech Solutions',
    description: 'Your trusted local IT partner in Zambia. Learn about our mission, values, and commitment to helping businesses succeed.',
  },
}

const values = [
  {
    name: 'Integrity',
    description: 'We operate with honesty and transparency in all our dealings. What we promise, we deliver.',
  },
  {
    name: 'Reliability',
    description: 'Our clients can count on us. We show up on time, meet deadlines, and stand by our work.',
  },
  {
    name: 'Partnership',
    description: 'We see ourselves as an extension of your team, invested in your success, not just service providers.',
  },
  {
    name: 'Security-First',
    description: 'Every solution we implement prioritizes the security and protection of your business data.',
  },
]

const whyChooseUs = [
  {
    title: 'Local Support, Local Understanding',
    description: 'Based in Lusaka, we understand the unique challenges facing Zambian businesses. From power reliability to internet connectivity, we design solutions that work in our context.',
  },
  {
    title: 'Responsive When It Matters',
    description: 'When your systems are down, you need help fast. Our team is accessible and responds quickly to critical issues, minimizing downtime and disruption.',
  },
  {
    title: 'Pragmatic Solutions',
    description: 'We do not believe in over-engineering or unnecessary complexity. We recommend what actually works for your business size and budget.',
  },
  {
    title: 'Long-Term Relationships',
    description: 'We are not interested in one-off projects. We build lasting partnerships where we grow alongside your business.',
  },
]

const team = [
  {
    name: 'Team Member',
    role: 'Managing Director',
    initials: 'MD',
    bio: 'Leadership and strategic direction for Privtech Solutions.',
  },
  {
    name: 'Team Member',
    role: 'Technical Lead',
    initials: 'TL',
    bio: 'Oversees technical projects and ensures quality delivery.',
  },
  {
    name: 'Team Member',
    role: 'Systems Administrator',
    initials: 'SA',
    bio: 'Manages infrastructure and provides technical support.',
  },
  {
    name: 'Team Member',
    role: 'Developer',
    initials: 'DV',
    bio: 'Builds web and mobile applications for clients.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">About Privtech Solutions</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              We are a Zambian IT company dedicated to helping businesses leverage technology securely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-neutral-900">Our Story</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Privtech Solutions Limited was founded with a clear mission: to provide Zambian businesses with reliable, secure, and practical IT solutions without the complexity and high costs often associated with technology services.
                </p>
                <p>
                  We noticed that many businesses struggled to find IT partners who understood their context—the infrastructure challenges, budget constraints, and specific needs of operating in Zambia. Too often, solutions were imported without consideration for local realities.
                </p>
                <p>
                  That is why we built Privtech. We are local, we understand the environment, and we design solutions that actually work here. From our base in Meanwood, Lusaka, we serve businesses across Zambia and the region, bringing enterprise-level IT capabilities within reach of organizations of all sizes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <ShieldIcon className="h-24 w-24 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-neutral-900">Our Mission</h2>
            <p className="text-xl text-neutral-700">
              To empower Zambian businesses with secure, reliable, and accessible technology solutions that drive growth and operational efficiency.
            </p>
          </div>

          <div className="section-heading mt-16">
            <h2 className="text-neutral-900">Our Values</h2>
          </div>
          <p className="section-subheading">
            The principles that guide how we work with every client.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="card border border-neutral-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{value.name}</h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-custom">
          <div className="section-heading">
            <h2 className="text-neutral-900">Why Choose Privtech</h2>
          </div>
          <p className="section-subheading">
            What sets us apart from other IT service providers.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="section-heading">
            <h2 className="text-neutral-900">Our Team</h2>
          </div>
          <p className="section-subheading">
            Dedicated professionals committed to your success.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.role} className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-600 text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="mb-4 text-white">Ready to Work Together?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Let us discuss how Privtech can support your business technology needs.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
