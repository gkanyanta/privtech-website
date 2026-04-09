import {
  CubeIcon,
  WrenchIcon,
  AcademicCapIcon,
  BuildingIcon,
  GlobeIcon,
  HeartIcon,
} from '@/components/ui/Icons'

const industries = [
  {
    name: 'Mining',
    description: 'Equipment, consumables, and solutions for mining operations across Zambia and the region.',
    icon: WrenchIcon,
  },
  {
    name: 'Agriculture',
    description: 'Inputs, products, and support for farmers and agricultural businesses.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Construction',
    description: 'Infrastructure, commercial, and residential construction projects.',
    icon: BuildingIcon,
  },
  {
    name: 'Technology',
    description: 'ICT equipment, solutions, and services for businesses of all sizes.',
    icon: GlobeIcon,
  },
  {
    name: 'Manufacturing',
    description: 'Commodity sourcing and supply chain solutions for manufacturers.',
    icon: CubeIcon,
  },
  {
    name: 'Government & NGOs',
    description: 'Consultancy and solutions for public sector and development organizations.',
    icon: HeartIcon,
  },
]

export default function Industries() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-neutral-900">Industries We Serve</h2>
        </div>
        <p className="section-subheading">
          We serve diverse industries across Zambia and the region with tailored solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <industry.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">{industry.name}</h3>
                <p className="text-sm text-neutral-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
