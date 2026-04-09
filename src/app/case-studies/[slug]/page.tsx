import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import { CheckCircleIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { caseStudies } from '@/data/case-studies'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Privtech Solutions Case Study`,
      description: study.summary,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  // Get related case studies (different from current)
  const relatedStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2)

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/case-studies"
              className="mb-6 inline-flex items-center text-primary-200 hover:text-white"
            >
              <svg className="mr-2 h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              Back to Case Studies
            </Link>
            <div className="mb-4">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                {study.industry}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="text-lg text-primary-100">{study.client}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Summary */}
            <div className="mb-12 rounded-xl bg-primary-50 p-6">
              <p className="text-lg text-primary-900">{study.summary}</p>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">The Challenge</h2>
              <p className="text-neutral-600">{study.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">Our Solution</h2>
              <p className="text-neutral-600">{study.solution}</p>
            </div>

            {/* Services Used */}
            <div className="mb-12">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">Results</h2>
              <ul className="space-y-4">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-500" />
                    <span className="text-neutral-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-neutral-900 p-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-white">Need Similar Results?</h3>
              <p className="mb-6 text-neutral-300">
                Let us discuss how we can help your organization.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">
              More Case Studies
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/case-studies/${related.slug}`}
                  className="card group flex flex-col border border-neutral-100"
                >
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                      {related.industry}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900 group-hover:text-primary-600">
                    {related.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-neutral-600">{related.summary}</p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    Read Case Study
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
