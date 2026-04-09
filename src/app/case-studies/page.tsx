import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { caseStudies } from '@/data/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how Privtech Solutions has helped Zambian businesses with IT challenges. Real case studies from NGOs, schools, SMEs, and sports organizations.',
  openGraph: {
    title: 'Case Studies | Privtech Solutions',
    description: 'Real examples of how we have helped Zambian organizations solve their IT challenges.',
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Case Studies</h1>
            <p className="text-lg text-primary-100 md:text-xl">
              See how we have helped Zambian organizations solve real IT challenges and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="card group flex flex-col border border-neutral-100"
              >
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                    {study.industry}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-bold text-neutral-900 group-hover:text-primary-600">
                  {study.title}
                </h2>
                <p className="mb-4 text-sm text-neutral-500">{study.client}</p>
                <p className="mb-6 flex-1 text-neutral-600">{study.summary}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Read Case Study
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="mb-4 text-white">Have a Similar Challenge?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Let us discuss how we can help your organization achieve similar results.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
