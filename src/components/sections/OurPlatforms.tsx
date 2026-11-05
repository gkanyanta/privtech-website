import Image from 'next/image'
import Link from 'next/link'
import { ComputerDesktopIcon, ShoppingBagIcon, ExternalLinkIcon, CheckCircleIcon, ArrowRightIcon } from '@/components/ui/Icons'

interface Platform {
  name: string
  tagline: string
  description: string
  href: string
  icon?: typeof ComputerDesktopIcon
  image?: string
  cta: string
  features: string[]
  accent: 'primary' | 'secondary'
  internal?: boolean
}

const platforms: Platform[] = [
  {
    name: 'BizTrack Admin',
    tagline: 'Centralized Business Management',
    description:
      'Our flagship business management platform built in-house by the Privtech software team. Manage inventory, track orders, oversee operations, and gain real-time insights — all from one powerful dashboard.',
    href: 'https://biztrack.privtech.net',
    icon: ComputerDesktopIcon,
    cta: 'Access Admin Portal',
    features: [
      'Inventory & stock management',
      'Order tracking & fulfilment',
      'Sales analytics & reporting',
      'Multi-user access control',
    ],
    accent: 'primary',
  },
  {
    name: 'BizTrack Store',
    tagline: 'Online Trading Marketplace',
    description:
      'Privtech\'s dedicated online trading platform. Browse our full product catalogue, place orders, and manage procurement digitally — fast, secure, and available 24/7.',
    href: 'https://store.privtech.net',
    icon: ShoppingBagIcon,
    cta: 'Visit Our Store',
    features: [
      'Full product catalogue',
      'Secure online ordering',
      'Real-time stock availability',
      'Order history & tracking',
    ],
    accent: 'secondary',
  },
  {
    name: 'Privtech WinDokta',
    tagline: 'Free Windows PC Tool',
    description:
      'Free Windows PC cleaner, optimiser and health check. No installation and no account: a single small file that works on any Windows 10 or Windows 11 PC.',
    href: '/products/windokta',
    image: '/downloads/windokta/windokta-icon-256.png',
    cta: 'Download free',
    features: [
      'Deep junk-file cleaning',
      'Disk space explorer',
      'Safe, reversible speed-ups',
      'Hardware check-up',
    ],
    accent: 'primary',
    internal: true,
  },
]

export default function OurPlatforms() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="section-heading">
          <h2 className="text-neutral-900">Our Digital Platforms</h2>
        </div>
        <p className="section-subheading">
          Privtech builds its own software. Our in-house development team has created the platforms that power our online trading operations and business management, and WinDokta, a free tool that keeps Windows PCs clean and fast.
        </p>

        {/* Platform Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg ${
                platform.internal ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon + Name */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  {platform.image ? (
                    <Image src={platform.image} alt="" width={48} height={48} className="mb-3 h-12 w-12" />
                  ) : (
                    platform.icon && (
                      <div
                        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${
                          platform.accent === 'primary'
                            ? 'bg-primary-100 text-primary-600'
                            : 'bg-secondary-100 text-secondary-600'
                        }`}
                      >
                        <platform.icon className="h-6 w-6" />
                      </div>
                    )
                  )}
                  <p
                    className={`mb-1 text-xs font-semibold uppercase tracking-wider ${
                      platform.accent === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                    }`}
                  >
                    {platform.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-900">{platform.name}</h3>
                </div>
              </div>

              <p className="mb-6 text-neutral-600">{platform.description}</p>

              {/* Features */}
              <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-primary-500" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {platform.internal ? (
                <Link
                  href={platform.href}
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                >
                  {platform.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-2 self-start rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                    platform.accent === 'primary'
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-secondary-500 text-white hover:bg-secondary-600'
                  }`}
                >
                  {platform.cta}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              )}

              {/* Decorative corner accent */}
              <div
                className={`absolute right-0 top-0 h-24 w-24 rounded-bl-[6rem] opacity-5 ${
                  platform.accent === 'primary' ? 'bg-primary-600' : 'bg-secondary-500'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Software Development callout */}
        <div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 px-6 py-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-primary-800">Need custom software built for your business?</p>
            <p className="mt-1 text-sm text-primary-700">
              Our in-house software development team builds tailored digital solutions across web, mobile, and enterprise systems.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:mt-0"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  )
}
