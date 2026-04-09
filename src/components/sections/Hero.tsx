'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

// ===========================================
// SLIDESHOW IMAGES CONFIGURATION
// ===========================================
// To add images to the slideshow:
// 1. Add your images to the /public/slides/ folder
// 2. Add entries to this array with the filename and alt text
// Recommended image size: 1920x1080px (or similar 16:9 ratio)
const slides = [
  {
    image: '/slides/Slide1.jpg',
    alt: 'Commodity sourcing and supply chain',
  },
  {
    image: '/slides/Slide2.jpg',
    alt: 'Mining equipment and operations',
  },
  {
    image: '/slides/Slide3.jpg',
    alt: 'Agricultural products and farming',
  },
  {
    image: '/slides/Slide4.jpg',
    alt: 'ICT solutions and technology',
  },
  {
    image: '/slides/Slide5.jpg',
    alt: 'Construction projects',
  },
  {
    image: '/slides/Slide6.jpg',
    alt: 'Consultancy services',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Subtle gradient overlay - only at top for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* Top Content Bar */}
      <div className="absolute top-0 left-0 right-0 pt-28 md:pt-32 lg:pt-36">
        <div className="container-custom">
          <div className="flex flex-col items-start md:flex-row md:items-start md:justify-between gap-6">
            {/* Tagline */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                Excellence. Integrity. Solutions.
              </h1>
              {/* Slide Indicators */}
              <div className="mt-4 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-white'
                        : 'w-1.5 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button href="/contact" variant="white" size="md">
                Request a Quote
              </Button>
              <Button href="/services" variant="outline" size="md" className="border-white text-white hover:bg-white/20">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 74"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C240 74 480 74 720 49C960 24 1200 24 1440 49V74H0V24Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
