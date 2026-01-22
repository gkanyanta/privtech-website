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
    default: 'Privtech Solutions | IT Services & Cybersecurity in Zambia',
    template: '%s | Privtech Solutions',
  },
  description: 'Privtech Solutions is a trusted IT company in Lusaka, Zambia offering cybersecurity, managed IT support, web development, cloud solutions, and payment gateway integration for businesses.',
  keywords: [
    'IT services Zambia',
    'cybersecurity Lusaka',
    'managed IT support Zambia',
    'web development Zambia',
    'cloud services Lusaka',
    'payment gateway Zambia',
    'IT company Lusaka',
    'network infrastructure Zambia',
    'domain email Zambia',
    'app development Zambia',
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
    title: 'Privtech Solutions | IT Services & Cybersecurity in Zambia',
    description: 'Your trusted IT partner in Zambia. Cybersecurity, managed IT support, web development, cloud solutions, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Privtech Solutions - Secure. Reliable. Local.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privtech Solutions | IT Services & Cybersecurity in Zambia',
    description: 'Your trusted IT partner in Zambia. Cybersecurity, managed IT support, web development, cloud solutions, and more.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://privtech.net',
  name: 'Privtech Solutions Limited',
  description: 'IT services company offering cybersecurity, managed IT support, web development, cloud solutions, and payment gateway integration in Zambia.',
  url: 'https://privtech.net',
  telephone: '',
  email: 'sales@privtech.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot A810, Meanwood Chamba Valley, Phase 1',
    addressLocality: 'Lusaka',
    addressRegion: 'Lusaka Province',
    postalCode: '',
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
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Zambia',
  },
  serviceType: [
    'Cybersecurity Services',
    'Managed IT Support',
    'Web Development',
    'App Development',
    'Cloud Services',
    'Payment Gateway Integration',
    'Network Infrastructure',
    'Digital Marketing',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
