import Link from 'next/link'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@/components/ui/Icons'
import { LinkedInIcon, FacebookIcon, TwitterIcon } from '@/components/ui/Icons'

const footerLinks = {
  services: [
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'IT Support', href: '/services#it-support' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'App Development', href: '/services#app-development' },
    { name: 'Cloud & Email', href: '/services#cloud-email' },
    { name: 'Payment Integration', href: '/services#payments' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Privtech</span>
                <span className="text-xl font-medium text-neutral-400"> Solutions</span>
              </div>
            </Link>
            <p className="mb-6 text-neutral-400">
              Your trusted IT partner in Zambia. We deliver secure, reliable technology solutions for businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-400">
                  Plot A810, Meanwood Chamba Valley,<br />
                  Phase 1, Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:sales@privtech.net"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  sales@privtech.net
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-400">Contact via form</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Privtech Solutions Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-500">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
