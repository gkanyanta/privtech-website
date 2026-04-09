import Link from 'next/link'
import {
  CubeIcon,
  WrenchIcon,
  AcademicCapIcon,
  GlobeIcon,
  BuildingIcon,
  ChartBarIcon,
} from '@/components/ui/Icons'

const services = [
  {
    name: 'Commodity Sourcing & Supply',
    description: 'Sourcing diverse commodities from trusted global suppliers with quality assurance, competitive pricing, and reliable delivery.',
    icon: CubeIcon,
    href: '/services#commodity-sourcing',
  },
  {
    name: 'Mining Equipment & Consumables',
    description: 'Cutting-edge equipment and consumables designed to enhance safety, productivity, and efficiency in mining operations.',
    icon: WrenchIcon,
    href: '/services#mining-equipment',
  },
  {
    name: 'Agricultural Inputs & Products',
    description: 'Comprehensive range of agricultural inputs empowering farmers to achieve sustainable, high-yield farming practices.',
    icon: AcademicCapIcon,
    href: '/services#agriculture',
  },
  {
    name: 'ICT Solutions & Services',
    description: 'Hardware, software, networking, and consulting services to keep businesses competitive in the digital age.',
    icon: GlobeIcon,
    href: '/services#ict-solutions',
  },
  {
    name: 'Construction',
    description: 'Infrastructure, commercial, and residential construction projects delivered with quality, efficiency, and on-time completion.',
    icon: BuildingIcon,
    href: '/services#construction',
  },
  {
    name: 'Consultancy',
    description: 'Expert consultancy services to identify challenges and provide tailored strategies driving growth and success.',
    icon: ChartBarIcon,
    href: '/services#consultancy',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section african-pattern-bg" id="services">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-neutral-900">Our Core Business Areas</h2>
        </div>
        <p className="section-subheading">
          Comprehensive solutions across multiple industries, empowering growth and prosperity for our clients and partners.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="card group flex flex-col items-start border border-neutral-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">{service.name}</h3>
              <p className="text-sm text-neutral-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
          >
            View all services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
