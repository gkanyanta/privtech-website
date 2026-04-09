import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://privtech.net'),
  title: {
    default: 'Privtech Solutions | Commodity Sourcing, Mining, Agriculture, ICT & Construction',
    template: '%s | Privtech Solutions',
  },
  description: 'Privtech Solutions Limited is a multifaceted company in Zambia offering commodity sourcing, mining equipment, agricultural inputs, ICT solutions, construction services, and consultancy.',
  keywords: [
    'commodity sourcing Zambia',
    'mining equipment Zambia',
    'agricultural inputs Zambia',
    'ICT solutions Lusaka',
    'construction company Zambia',
    'business consultancy Zambia',
    'mining consumables',
    'farm equipment Zambia',
    'IT services Lusaka',
    'infrastructure development Zambia',
  ],
  authors: [{ name: 'Privtech Solutions Limited' }],
  creator: 'Privtech Solutions Limited',
  publisher: 'Privtech Solutions Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://privtech.net',
    siteName: 'Privtech Solutions',
    title: 'Privtech Solutions | Excellence. Integrity. Solutions.',
    description: 'A multifaceted company excelling in commodity sourcing, mining equipment, agricultural inputs, ICT solutions, construction, and consultancy in Zambia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Privtech Solutions - Excellence. Integrity. Solutions.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privtech Solutions | Excellence. Integrity. Solutions.',
    description: 'Commodity sourcing, mining equipment, agricultural inputs, ICT solutions, construction, and consultancy in Zambia.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://privtech.net',
  name: 'Privtech Solutions Limited',
  description: 'A multifaceted company offering commodity sourcing and supply, mining equipment and consumables, agricultural inputs, ICT solutions, construction services, and business consultancy in Zambia.',
  url: 'https://privtech.net',
  email: 'sales@privtech.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot A810, Meanwood Chamba Valley, Phase 1',
    addressLocality: 'Lusaka',
    addressRegion: 'Lusaka Province',
    addressCountry: 'ZM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -15.4067,
    longitude: 28.2871,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Zambia',
  },
  serviceType: [
    'Commodity Sourcing and Supply',
    'Mining Equipment and Consumables',
    'Agricultural Inputs and Products',
    'ICT Equipment and Solutions',
    'Construction Services',
    'Business Consultancy',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
