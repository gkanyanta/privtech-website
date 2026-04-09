import Button from '@/components/ui/Button'
import { CubeIcon, WrenchIcon, GlobeIcon, CheckCircleIcon } from '@/components/ui/Icons'

const solutions = [
  {
    title: 'Global Commodity Sourcing',
    description: 'Access quality commodities from our extensive network of trusted suppliers worldwide with competitive pricing and reliable delivery.',
    icon: CubeIcon,
    features: [
      'Global supplier network',
      'Quality verification',
      'Competitive pricing',
      'Reliable logistics',
    ],
    cta: 'Enquire Now',
  },
  {
    title: 'Mining Solutions',
    description: 'Complete equipment and consumables supply for mining operations, with expert support to enhance safety and productivity.',
    icon: WrenchIcon,
    features: [
      'Heavy machinery supply',
      'Safety equipment',
      'Mining consumables',
      'Expert support',
    ],
    cta: 'Get Quote',
  },
  {
    title: 'ICT & Digital Solutions',
    description: 'Hardware, software, networking, and IT consulting services to keep your business competitive in the digital age.',
    icon: GlobeIcon,
    features: [
      'Hardware & software',
      'Network infrastructure',
      'IT consulting',
      'Technical support',
    ],
    cta: 'Learn More',
  },
]

export default function FeaturedSolutions() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-neutral-900">Featured Solutions</h2>
        </div>
        <p className="section-subheading">
          Key offerings that drive value for businesses across Zambia and the region.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="card flex flex-col border border-neutral-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-50 text-secondary-600">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-neutral-900">{solution.title}</h3>
              <p className="mb-6 text-neutral-600">{solution.description}</p>
              <ul className="mb-6 flex-1 space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                {solution.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
