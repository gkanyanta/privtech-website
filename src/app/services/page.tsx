import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import {
  CubeIcon,
  WrenchIcon,
  AcademicCapIcon,
  GlobeIcon,
  BuildingIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Privtech Solutions services: commodity sourcing, mining equipment, agricultural inputs, ICT solutions, construction, and business consultancy in Zambia.',
  openGraph: {
    title: 'Services | Privtech Solutions',
    description: 'Comprehensive solutions across multiple industries - commodities, mining, agriculture, ICT, construction, and consultancy.',
  },
}

// ===========================================
// SERVICES IMAGES CONFIGURATION
// ===========================================
// To add images for each service:
// 1. Add your images to the /public/services/ folder
// 2. Name them: commodity.jpg, mining.jpg, agriculture.jpg, ict.jpg, construction.jpg, consultancy.jpg
// Recommended image size: 800x600px (4:3 ratio)

const services = [
  {
    id: 'commodity-sourcing',
    name: 'Commodity Sourcing & Supply',
    description: 'Privtech Solutions Limited is committed to sourcing a diverse range of commodities from trusted suppliers worldwide. Our dedication to quality, competitive pricing, and on-time delivery has positioned us as the preferred choice for businesses in search of reliable commodity solutions.',
    icon: CubeIcon,
    image: '/services/commodity.jpg',
    features: [
      'Diverse commodity range from global suppliers',
      'Quality assurance and verification',
      'Competitive pricing strategies',
      'Reliable on-time delivery',
      'Supply chain management',
      'Custom sourcing solutions',
    ],
  },
  {
    id: 'mining-equipment',
    name: 'Mining Equipment & Consumables',
    description: 'In the domain of mining, Privtech Solutions Limited stands as a trusted supplier of equipment and consumables. Our offerings encompass cutting-edge solutions designed to enhance safety, productivity, and efficiency in mining operations. We understand the unique needs and challenges of this industry.',
    icon: WrenchIcon,
    image: '/services/mining.jpg',
    features: [
      'Heavy machinery and equipment',
      'Mining consumables supply',
      'Safety equipment and gear',
      'Productivity enhancement solutions',
      'Equipment maintenance support',
      'Industry-specific expertise',
    ],
  },
  {
    id: 'agriculture',
    name: 'Agricultural Inputs & Products',
    description: 'Agriculture is the backbone of our society, and we are proud to support it with a comprehensive range of agricultural inputs and products. Our mission is to empower farmers and agricultural businesses by providing the tools and resources they need to achieve sustainable, high-yield farming practices.',
    icon: AcademicCapIcon,
    image: '/services/agriculture.jpg',
    features: [
      'Quality seeds and fertilizers',
      'Farm equipment and machinery',
      'Irrigation solutions',
      'Crop protection products',
      'Agricultural consulting services',
      'Sustainable farming support',
    ],
  },
  {
    id: 'ict-solutions',
    name: 'ICT Equipment, Solutions & Services',
    description: 'In the digital age, businesses rely on Information and Communication Technology for their operations. Privtech Solutions Limited offers a wide spectrum of hardware, software, networking and consulting services to ensure that businesses remain competitive and adaptable in the face of technological advancements.',
    icon: GlobeIcon,
    image: '/services/ict.jpg',
    features: [
      'Hardware supply and installation',
      'Software solutions and licensing',
      'Network infrastructure design',
      'Cybersecurity services',
      'IT consulting and strategy',
      'Cloud solutions and migration',
      'Technical support and maintenance',
      'Digital transformation services',
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'We bring innovation and dedication to the field of construction, ensuring that projects are executed with the utmost quality and efficiency. Our services encompass various projects, from infrastructure development to commercial and residential construction. We take pride in delivering projects on time and within budget.',
    icon: BuildingIcon,
    image: '/services/construction.jpg',
    features: [
      'Infrastructure development',
      'Commercial construction',
      'Residential construction',
      'Project management',
      'On-time project delivery',
      'Budget adherence and cost control',
    ],
  },
  {
    id: 'consultancy',
    name: 'Consultancy',
    description: 'At Privtech Solutions Limited, our consultancy services are rooted in expertise and collaboration. We partner closely with our clients to identify challenges and provide tailored strategies to drive growth and success. We offer a range of consultancy services that can address your specific business needs.',
    icon: ChartBarIcon,
    image: '/services/consultancy.jpg',
    features: [
      'Business strategy development',
      'Process optimization',
      'Market analysis and research',
      'Risk assessment and management',
      'Growth planning',
      'Operational efficiency consulting',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Our Services</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Comprehensive solutions across multiple industries, empowering growth and prosperity for our clients and partners in Zambia and beyond.
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
                      Enquire About {service.name.split(' ')[0]}
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
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
            <h2 className="mb-4 text-white">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Contact us to discuss your requirements. Our team is ready to provide solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="white" size="lg">
                Request a Quote
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
