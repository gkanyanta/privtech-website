'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { MenuIcon, XMarkIcon, ChevronDownIcon, ComputerDesktopIcon, ShoppingBagIcon, ExternalLinkIcon } from '@/components/ui/Icons'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const products = [
  {
    name: 'BizTrack Admin',
    description: 'Business management portal',
    href: 'https://biztrack.privtech.net',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'BizTrack Store',
    description: 'Online trading marketplace',
    href: 'https://store.privtech.net',
    icon: ShoppingBagIcon,
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Privtech Solutions - Home">
            <Image
              src="/privtech-logo.png"
              alt="Privtech Solutions Limited"
              width={200}
              height={64}
              className="h-14 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div ref={dropdownRef} className="group relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Products
                <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-60 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                  {products.map((product, i) => (
                    <a
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-3 px-4 py-3 transition-colors hover:bg-primary-50 ${
                        i > 0 ? 'border-t border-neutral-100' : ''
                      }`}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                        <product.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-neutral-900">{product.name}</p>
                        <p className="text-xs text-neutral-500">{product.description}</p>
                      </div>
                      <ExternalLinkIcon className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-neutral-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? 'max-h-[32rem] pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-neutral-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Products Section */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Our Products
              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileProductsOpen ? 'max-h-40' : 'max-h-0'}`}>
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg mx-2 px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50"
                >
                  <product.icon className="h-4 w-4 text-primary-600" />
                  {product.name}
                  <ExternalLinkIcon className="ml-auto h-3.5 w-3.5 text-neutral-400" />
                </a>
              ))}
            </div>

            <div className="mt-2 px-4">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
