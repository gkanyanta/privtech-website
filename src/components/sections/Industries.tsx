import {
  CubeIcon,
  AcademicCapIcon,
  BuildingIcon,
  HeartIcon,
  TruckIcon,
} from '@/components/ui/Icons'

const industries = [
  {
    name: 'Mining',
    description: 'Secure operations management and compliance systems for Zambia\'s mining sector.',
    icon: CubeIcon,
  },
  {
    name: 'Education',
    description: 'School management systems, e-learning platforms, and campus connectivity solutions.',
    icon: AcademicCapIcon,
  },
  {
    name: 'SMEs & Corporates',
    description: 'Scalable IT infrastructure and support that grows with your business.',
    icon: BuildingIcon,
  },
  {
    name: 'NGOs',
    description: 'Cost-effective technology solutions to maximize your impact and donor reporting.',
    icon: HeartIcon,
  },
  {
    name: 'Logistics',
    description: 'Fleet tracking, inventory management, and supply chain optimization tools.',
    icon: TruckIcon,
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
          We understand the unique technology challenges facing different sectors in Zambia and the region.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-600 shadow-md transition-all group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-lg">
                <industry.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">{industry.name}</h3>
              <p className="text-sm text-neutral-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
