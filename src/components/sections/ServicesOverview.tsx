import Link from 'next/link'
import {
  ShieldIcon,
  WrenchIcon,
  ServerIcon,
  GlobeIcon,
  DevicePhoneIcon,
  MegaphoneIcon,
  CloudIcon,
  CreditCardIcon,
} from '@/components/ui/Icons'

const services = [
  {
    name: 'Cybersecurity',
    description: 'Protect your business with security assessments, hardening, monitoring, and staff awareness training.',
    icon: ShieldIcon,
    href: '/services#cybersecurity',
  },
  {
    name: 'IT Support',
    description: 'Reliable managed IT services with responsive support when you need it most.',
    icon: WrenchIcon,
    href: '/services#it-support',
  },
  {
    name: 'Network & Infrastructure',
    description: 'Design, deploy, and maintain robust network infrastructure for your operations.',
    icon: ServerIcon,
    href: '/services#network',
  },
  {
    name: 'Web Development',
    description: 'Professional websites that represent your brand and convert visitors into customers.',
    icon: GlobeIcon,
    href: '/services#web-development',
  },
  {
    name: 'App Development',
    description: 'Custom mobile and web applications tailored to your business processes.',
    icon: DevicePhoneIcon,
    href: '/services#app-development',
  },
  {
    name: 'Digital Marketing',
    description: 'Grow your online presence with targeted social media and digital marketing strategies.',
    icon: MegaphoneIcon,
    href: '/services#digital-marketing',
  },
  {
    name: 'Cloud & Email',
    description: 'Professional domain emails and cloud migrations for modern, flexible operations.',
    icon: CloudIcon,
    href: '/services#cloud-email',
  },
  {
    name: 'Payment Integration',
    description: 'Accept online payments for memberships, fees, and e-commerce with secure gateway setup.',
    icon: CreditCardIcon,
    href: '/services#payments',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section african-pattern-bg" id="services">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-neutral-900">Our Services</h2>
        </div>
        <p className="section-subheading">
          Comprehensive IT solutions designed to help Zambian businesses thrive in the digital age.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="card group flex flex-col items-start border border-neutral-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">{service.name}</h3>
              <p className="text-sm text-neutral-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
          >
            View all services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
