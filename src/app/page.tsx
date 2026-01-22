import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import Industries from '@/components/sections/Industries'
import FeaturedSolutions from '@/components/sections/FeaturedSolutions'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Industries />
      <FeaturedSolutions />
      <Testimonials />
      <CTASection />
    </>
  )
}
