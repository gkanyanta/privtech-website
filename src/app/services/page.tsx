import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import {
  ShieldIcon,
  WrenchIcon,
  ServerIcon,
  GlobeIcon,
  DevicePhoneIcon,
  MegaphoneIcon,
  CloudIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Privtech Solutions IT services: cybersecurity, managed IT support, web development, app development, cloud solutions, digital marketing, and payment gateway integration in Zambia.',
  openGraph: {
    title: 'IT Services | Privtech Solutions',
    description: 'Comprehensive IT solutions for Zambian businesses. From cybersecurity to web development, we have you covered.',
  },
}

const services = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect your business from threats with comprehensive security solutions tailored to your risk profile.',
    icon: ShieldIcon,
    features: [
      'Security assessments and vulnerability scanning',
      'System hardening and configuration review',
      'Security monitoring and incident response',
      'Staff cybersecurity awareness training',
      'Security policy development',
      'Data protection and backup strategies',
    ],
  },
  {
    id: 'it-support',
    name: 'IT Support & Managed Services',
    description: 'Reliable technical support and proactive system management so you can focus on your core business.',
    icon: WrenchIcon,
    features: [
      'Helpdesk support (remote and on-site)',
      'Proactive system monitoring',
      'Patch management and updates',
      'Hardware and software troubleshooting',
      'IT asset management',
      'Vendor coordination and management',
    ],
  },
  {
    id: 'network',
    name: 'Network & Infrastructure',
    description: 'Design, deploy, and maintain robust network infrastructure that keeps your business connected.',
    icon: ServerIcon,
    features: [
      'Network design and implementation',
      'Wireless network setup',
      'Firewall and security configuration',
      'VPN setup for remote access',
      'Server installation and maintenance',
      'Network troubleshooting and optimization',
    ],
  },
  {
    id: 'web-development',
    name: 'Website Design & Development',
    description: 'Professional websites that represent your brand and help convert visitors into customers.',
    icon: GlobeIcon,
    features: [
      'Custom website design',
      'Responsive mobile-friendly development',
      'Content management system setup',
      'E-commerce functionality',
      'Website hosting and maintenance',
      'SEO optimization',
    ],
  },
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Custom mobile and web applications built to streamline your operations and serve your customers.',
    icon: DevicePhoneIcon,
    features: [
      'Mobile app development (iOS & Android)',
      'Web application development',
      'Custom business software',
      'System integrations',
      'API development',
      'Ongoing maintenance and support',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing & Social Media',
    description: 'Grow your online presence and reach more customers through targeted digital strategies.',
    icon: MegaphoneIcon,
    features: [
      'Social media management',
      'Content creation and strategy',
      'Search engine optimization (SEO)',
      'Online advertising campaigns',
      'Email marketing',
      'Analytics and reporting',
    ],
  },
  {
    id: 'cloud-email',
    name: 'Cloud & Email Solutions',
    description: 'Modern cloud services and professional email that help your team work efficiently from anywhere.',
    icon: CloudIcon,
    features: [
      'Professional domain email setup',
      'Microsoft 365 deployment',
      'Google Workspace setup',
      'Email migration services',
      'Cloud storage solutions',
      'Cloud backup services',
    ],
  },
  {
    id: 'payments',
    name: 'Payment Gateway Integration',
    description: 'Accept payments online for memberships, fees, subscriptions, and e-commerce with secure gateway setup.',
    icon: CreditCardIcon,
    features: [
      'Mobile money integration (Airtel, MTN, Zamtel)',
      'Card payment processing',
      'E-commerce payment setup',
      'Recurring billing and subscriptions',
      'Payment reconciliation systems',
      'Multi-currency support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Our Services</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Comprehensive IT solutions designed to help Zambian businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">{service.name}</h2>
                    <p className="mb-6 text-lg text-neutral-600">{service.description}</p>
                    <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-primary-500 mt-0.5" />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary">
                      Talk to Us About {service.name.split(' ')[0]}
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-neutral-400" />
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <hr className="mt-16 border-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="mb-4 text-white">Not Sure Which Service You Need?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Contact us for a free consultation. We will assess your needs and recommend the right solutions for your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="white" size="lg">
                Request a Consultation
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
