import Link from 'next/link'
import {
  CubeIcon,
  WrenchIcon,
  AcademicCapIcon,
  GlobeIcon,
  BuildingIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  CodeIcon,
} from '@/components/ui/Icons'

const services = [
  {
    name: 'Online Trading',
    description: 'Buy and sell commodities, equipment, and supplies through our secure digital marketplace — fast, convenient, and available 24/7.',
    icon: ShoppingBagIcon,
    href: '/services#ict-solutions',
    highlight: true,
  },
  {
    name: 'Software Development',
    description: 'Custom web, mobile, and enterprise software built by our in-house team. From business management tools to full-scale digital platforms.',
    icon: CodeIcon,
    href: '/services#ict-solutions',
    highlight: true,
  },
  {
    name: 'Commodity Sourcing & Supply',
    description: 'Sourcing diverse commodities from trusted global suppliers with quality assurance, competitive pricing, and reliable delivery.',
    icon: CubeIcon,
    href: '/services#commodity-sourcing',
    highlight: false,
  },
  {
    name: 'Mining Equipment & Consumables',
    description: 'Cutting-edge equipment and consumables designed to enhance safety, productivity, and efficiency in mining operations.',
    icon: WrenchIcon,
    href: '/services#mining-equipment',
    highlight: false,
  },
  {
    name: 'Agricultural Inputs & Products',
    description: 'Comprehensive range of agricultural inputs empowering farmers to achieve sustainable, high-yield farming practices.',
    icon: AcademicCapIcon,
    href: '/services#agriculture',
    highlight: false,
  },
  {
    name: 'ICT Solutions & Services',
    description: 'Hardware, software, networking, and consulting services to keep businesses competitive in the digital age.',
    icon: GlobeIcon,
    href: '/services#ict-solutions',
    highlight: false,
  },
  {
    name: 'Construction',
    description: 'Infrastructure, commercial, and residential construction projects delivered with quality, efficiency, and on-time completion.',
    icon: BuildingIcon,
    href: '/services#construction',
    highlight: false,
  },
  {
    name: 'Consultancy',
    description: 'Expert consultancy services to identify challenges and provide tailored strategies driving growth and success.',
    icon: ChartBarIcon,
    href: '/services#consultancy',
    highlight: false,
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
          From online trading and software development to commodity sourcing, mining, and construction — comprehensive solutions that empower growth across Zambia and the region.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className={`card group flex flex-col items-start border transition-all ${
                service.highlight
                  ? 'border-primary-200 bg-primary-50 hover:border-primary-400'
                  : 'border-neutral-100'
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                  service.highlight
                    ? 'bg-primary-600 text-white group-hover:bg-primary-700'
                    : 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
                }`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              {service.highlight && (
                <span className="mb-2 rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  Featured
                </span>
              )}
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">{service.name}</h3>
              <p className="text-sm text-neutral-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700"
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
