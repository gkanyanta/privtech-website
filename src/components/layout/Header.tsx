'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { MenuIcon, XMarkIcon } from '@/components/ui/Icons'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
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
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 border-t border-neutral-200 pt-4">
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
