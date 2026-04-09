import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { CheckCircleIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Privtech Solutions Limited - a multifaceted company in Zambia excelling in commodity sourcing, mining, agriculture, ICT, construction, and consultancy.',
  openGraph: {
    title: 'About Privtech Solutions',
    description: 'A forward-thinking company committed to excellence, integrity, and customer satisfaction across multiple industries.',
  },
}

const values = [
  {
    name: 'Quality Assurance',
    description: 'We place quality at the forefront of all our products and services with stringent quality control processes to ensure our offerings meet the highest standards.',
  },
  {
    name: 'Global Network',
    description: 'Our extensive network of partners and suppliers extends across the globe, allowing us to source and deliver with efficiency and reliability.',
  },
  {
    name: 'Innovation',
    description: 'We remain at the forefront of innovation, quick to adapt to technological advancements and market changes.',
  },
  {
    name: 'Customer-Centric',
    description: 'We work closely with our clients to understand their specific needs, providing solutions tailored to their goals.',
  },
  {
    name: 'Sustainability',
    description: 'We are committed to sustainable business practices and environmental responsibility in all our operations.',
  },
  {
    name: 'Integrity',
    description: 'We operate with honesty and transparency in all our dealings, building trust through ethical business practices.',
  },
]

const whyChooseUs = [
  {
    title: 'Comprehensive Solutions',
    description: 'From commodity sourcing to ICT services, we offer end-to-end solutions across multiple industries, making us your single trusted partner.',
  },
  {
    title: 'Local Expertise, Global Reach',
    description: 'Based in Lusaka with a global network of partners and suppliers, we combine local understanding with international capabilities.',
  },
  {
    title: 'Proven Track Record',
    description: 'We have established ourselves as a highly regarded partner for businesses spanning various industries through consistent delivery.',
  },
  {
    title: 'Tailored Approach',
    description: 'We understand that every business is unique and work closely with clients to provide customized solutions that meet specific needs.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">About Privtech Solutions</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              A multifaceted and forward-thinking company committed to excellence, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-neutral-900">Company Overview</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Privtech Solutions Limited is a multifaceted and forward-thinking company that excels in an extensive array of services, including commodity sourcing and supplying, mining equipment and consumables, agricultural inputs and products, ICT equipment, solutions, and services, as well as construction and consultancy.
                </p>
                <p>
                  We were founded with a steadfast commitment to uphold excellence, integrity, and unwavering customer satisfaction, which has allowed us to swiftly establish ourselves as a highly regarded partner for businesses spanning various industries.
                </p>
                <p>
                  Our team of experienced professionals is ready to serve your needs, providing comprehensive solutions that are rooted in integrity and driven by excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-overview.jpg"
                alt="Privtech Solutions Company Overview"
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card border border-neutral-100">
              <h3 className="mb-4 text-xl font-bold text-primary-600">Our Vision</h3>
              <p className="text-neutral-600">
                Our vision at Privtech Solutions Limited is to ascend as a prominent and pioneering provider of comprehensive solutions that empower growth and prosperity for our clients and partners. We aspire to be recognized as leaders in every facet of our business, setting the standard for excellence and innovation.
              </p>
            </div>
            <div className="card border border-neutral-100">
              <h3 className="mb-4 text-xl font-bold text-primary-600">Our Mission</h3>
              <p className="text-neutral-600">
                Our mission is to consistently deliver high-quality products and services that empower our clients and partners to attain their objectives efficiently and sustainably. We are committed to upholding our values of integrity, reliability, and customer-centricity in all our endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container-custom">
          <div className="section-heading">
            <h2 className="text-neutral-900">Why Choose Privtech Solutions</h2>
          </div>
          <p className="section-subheading">
            The principles and strengths that set us apart.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="section-heading">
            <h2 className="text-neutral-900">Our Competitive Advantage</h2>
          </div>
          <p className="section-subheading">
            What makes us the preferred partner for businesses across Zambia and the region.
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

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="mb-4 text-white">Ready to Partner with Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Discover how Privtech Solutions can be your trusted partner in sourcing, technology, construction, and consultancy, helping you achieve your business objectives.
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
