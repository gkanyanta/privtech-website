import Button from '@/components/ui/Button'
import { EnvelopeIcon, CreditCardIcon, WrenchIcon, CheckCircleIcon } from '@/components/ui/Icons'

const solutions = [
  {
    title: 'Professional Domain Emails',
    description: 'Move away from free email services. Get yourname@yourcompany.co.zm and build trust with every message.',
    icon: EnvelopeIcon,
    features: [
      'Custom domain email setup',
      'Microsoft 365 or Google Workspace',
      'Migration from existing accounts',
      'Ongoing support and management',
    ],
    cta: 'Set Up Domain Email',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Accept payments online for memberships, school fees, subscriptions, and e-commerce with local and international gateway support.',
    icon: CreditCardIcon,
    features: [
      'Mobile money integration',
      'Card payment processing',
      'Recurring billing setup',
      'E-commerce integration',
    ],
    cta: 'Enable Online Payments',
  },
  {
    title: 'Managed IT Support',
    description: 'Focus on running your business while we handle your technology. Proactive monitoring, maintenance, and responsive helpdesk support.',
    icon: WrenchIcon,
    features: [
      'Proactive system monitoring',
      'Regular maintenance & updates',
      'Helpdesk support',
      'On-site assistance when needed',
    ],
    cta: 'Get IT Support',
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
          Popular services that help Zambian businesses operate more professionally and efficiently.
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
