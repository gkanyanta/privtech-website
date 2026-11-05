import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CircleStackIcon,
  ClockIcon,
  CpuChipIcon,
  EnvelopeIcon,
  ShieldIcon,
  SparklesIcon,
  SquaresIcon,
} from '@/components/ui/Icons'
import {
  SITE_URL,
  WINDOKTA_LICENCE_PATH,
  WINDOKTA_PATH,
  windokta,
  windoktaDownloads,
  windoktaFaq,
  windoktaFeatures,
  windoktaRequirements,
  windoktaSafety,
  windoktaScreenshots,
  type WinDoktaFeatureIcon,
} from '@/data/windokta'

const pageTitle = 'Privtech WinDokta – Free Windows PC Cleaner & Optimiser | Privtech Solutions'
const pageDescription =
  'Free Windows 10 & 11 app that cleans junk files, finds what fills your drive, safely speeds up startup and checks your hardware. No install, works offline.'
const pageUrl = `${SITE_URL}${WINDOKTA_PATH}`
const ogImage = windoktaScreenshots[0]

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Privtech Solutions',
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: `${SITE_URL}${ogImage.src}`,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE_URL}${ogImage.src}`],
  },
}

const [download64, download32] = windoktaDownloads

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: windokta.name,
  description: pageDescription,
  url: pageUrl,
  image: `${SITE_URL}${windokta.iconLarge}`,
  screenshot: windoktaScreenshots.map((s) => `${SITE_URL}${s.src}`),
  operatingSystem: 'Windows 10, Windows 11',
  applicationCategory: 'UtilitiesApplication',
  softwareVersion: windokta.version,
  downloadUrl: `${SITE_URL}${download64.href}`,
  license: `${SITE_URL}${WINDOKTA_LICENCE_PATH}`,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Privtech Solutions Limited',
    url: SITE_URL,
  },
}

const featureIcons: Record<WinDoktaFeatureIcon, typeof SparklesIcon> = {
  sparkles: SparklesIcon,
  clock: ClockIcon,
  disk: CircleStackIcon,
  apps: SquaresIcon,
  memory: ChartBarIcon,
  bolt: BoltIcon,
  chip: CpuChipIcon,
}

function DownloadButton({ className = 'btn-secondary' }: { className?: string }) {
  return (
    <a
      href={download64.href}
      download={download64.fileName}
      className={`${className} gap-2 px-7 py-4 text-lg font-semibold`}
    >
      <ArrowDownTrayIcon className="h-5 w-5" />
      {download64.label}
    </a>
  )
}

export default function WinDoktaPage() {
  return (
    <div className="pt-24 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="section bg-primary-900 african-pattern-strong">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Image
                src={windokta.icon}
                alt=""
                width={96}
                height={96}
                priority
                className="mb-6 h-20 w-20 md:h-24 md:w-24"
              />
              <h1 className="mb-4 text-white">{windokta.name}</h1>
              <p className="mb-6 text-xl font-medium text-secondary-300 md:text-2xl">{windokta.tagline}</p>
              <p className="mb-4 text-lg text-primary-100">{windokta.intro}</p>
              <p className="mb-8 text-primary-100">{windokta.introSecondary}</p>

              <div className="flex flex-col items-start gap-4">
                <DownloadButton />
                <a
                  href={download32.href}
                  download={download32.fileName}
                  className="rounded text-sm font-medium text-primary-100 underline underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
                >
                  Need the 32-bit version? Download {download32.fileName}
                </a>
              </div>
              <p className="mt-6 text-sm text-primary-200">
                Free · Windows 10 &amp; 11 · No installation · Version {windokta.version} · {windokta.sizeLabel}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={windoktaScreenshots[0].src}
                alt={windoktaScreenshots[0].alt}
                width={windoktaScreenshots[0].width}
                height={windoktaScreenshots[0].height}
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" aria-labelledby="features-heading">
        <div className="container-custom">
          <div className="section-heading">
            <h2 id="features-heading" className="text-neutral-900">What WinDokta does</h2>
          </div>
          <p className="section-subheading">
            Cleaning, tuning and a full health check, in one small app.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {windoktaFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon]
              const isLast = index === windoktaFeatures.length - 1
              return (
                <div
                  key={feature.title}
                  className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg md:p-8 ${
                    isLast ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 md:text-xl">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.body}</p>

                  {feature.bullets && (
                    <ul className="mt-4 space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.examples && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {feature.examples.map((example) => (
                        <li
                          key={example}
                          className="rounded-lg border-l-4 border-secondary-400 bg-secondary-50 px-4 py-3 text-sm italic text-neutral-800"
                        >
                          &ldquo;{example}&rdquo;
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.footnote && (
                    <p className="mt-4 text-sm font-medium text-neutral-800">{feature.footnote}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section bg-neutral-50" aria-labelledby="screenshots-heading">
        <div className="container-custom">
          <div className="section-heading">
            <h2 id="screenshots-heading" className="text-neutral-900">See it in action</h2>
          </div>
          <p className="section-subheading">A clear, simple interface that explains every step before it happens.</p>

          <div className="grid gap-8 md:grid-cols-2">
            {windoktaScreenshots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex aspect-[1138/787] items-center justify-center bg-neutral-100 p-3">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="h-full w-auto max-w-full rounded-md object-contain shadow"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-700">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section" aria-labelledby="safety-heading">
        <div className="container-custom">
          <div className="section-heading">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
              <ShieldIcon className="h-7 w-7" />
            </div>
            <h2 id="safety-heading" className="text-neutral-900">Built to be safe</h2>
          </div>
          <p className="section-subheading">
            Many &ldquo;PC optimisers&rdquo; do more harm than good. WinDokta was designed the other way round.
          </p>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {windoktaSafety.map((point) => (
              <li key={point.title} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-1 text-base font-semibold text-neutral-900 md:text-lg">{point.title}</h3>
                  <p className="text-neutral-600">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="section scroll-mt-24 bg-neutral-50" aria-labelledby="download-heading">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="section-heading">
              <h2 id="download-heading" className="text-neutral-900">Download</h2>
            </div>
            <p className="section-subheading">
              Free · Windows 10 &amp; 11 · No installation · Version {windokta.version}
            </p>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <table className="w-full text-left">
                <caption className="sr-only">WinDokta download files</caption>
                <thead className="bg-neutral-100 text-sm text-neutral-700">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold sm:px-6">File</th>
                    <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6">For</th>
                    <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell sm:px-6">
                      <span className="sr-only">Download link</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {windoktaDownloads.map((file) => (
                    <tr key={file.id}>
                      <th scope="row" className="px-4 py-4 align-top font-normal sm:px-6">
                        <span className="block font-semibold text-neutral-900">{file.fileName}</span>
                        <span className="text-sm text-neutral-600">({file.architecture})</span>
                        <span className="mt-1 block text-sm text-neutral-600 sm:hidden">{file.audience}</span>
                        <a
                          href={file.href}
                          download={file.fileName}
                          className={`${file.id === 'x64' ? 'btn-primary' : 'btn-outline'} mt-3 gap-2 px-4 py-2 text-sm sm:hidden`}
                          aria-label={file.label}
                        >
                          <ArrowDownTrayIcon className="h-4 w-4" />
                          Download
                        </a>
                      </th>
                      <td className="hidden px-4 py-4 align-top text-neutral-700 sm:table-cell sm:px-6">{file.audience}</td>
                      <td className="hidden px-4 py-4 text-right align-top sm:table-cell sm:px-6">
                        <a
                          href={file.href}
                          download={file.fileName}
                          className={`${file.id === 'x64' ? 'btn-primary' : 'btn-outline'} gap-2 whitespace-nowrap px-4 py-2 text-sm`}
                          aria-label={file.label}
                        >
                          <ArrowDownTrayIcon className="h-4 w-4" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-neutral-600">
              <strong className="text-neutral-800">Not sure which one?</strong> Choose the 64-bit version. Windows 11 is
              always 64-bit. On Windows 10, check <em>Settings → System → About → System type</em>.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900 md:text-xl">Requirements</h3>
                <p className="text-neutral-600">{windoktaRequirements}</p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900 md:text-xl">How to run it</h3>
                <ol className="list-decimal space-y-2 pl-5 text-neutral-600">
                  <li>Download the file and double-click it. No installation needed.</li>
                  <li>
                    Click <strong>Yes</strong> when Windows asks for permission. WinDokta needs administrator rights to
                    clean all user accounts and system folders.
                  </li>
                  <li>
                    If Windows shows <em>&ldquo;Windows protected your PC&rdquo;</em>, click{' '}
                    <strong>More info → Run anyway</strong>. This message appears for new apps that Windows hasn&apos;t
                    seen many times yet.
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-neutral-900 md:text-xl">Verify your download (optional)</h3>
              <dl className="space-y-3 text-sm">
                {windoktaDownloads.map((file) => (
                  <div key={file.id}>
                    <dt className="font-medium text-neutral-800">{file.fileName}: SHA-256</dt>
                    <dd className="break-all font-mono text-neutral-600">{file.sha256}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="section-heading">
              <h2 id="faq-heading" className="text-neutral-900">Frequently asked questions</h2>
            </div>
            <dl className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
              {windoktaFaq.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="mb-2 text-lg font-semibold text-neutral-900">{item.q}</dt>
                  <dd className="text-neutral-600">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Licence & disclaimer */}
      <section className="pb-16 md:pb-20" aria-labelledby="licence-heading">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <h2 id="licence-heading" className="mb-4 text-xl font-semibold text-neutral-900 md:text-2xl">
              Licence and disclaimer
            </h2>
            <p className="mb-3 text-neutral-600">
              Privtech WinDokta is freeware from Privtech Solutions Ltd. You may download and use it free of charge, for
              personal or business purposes, on any number of computers, and share unmodified copies. You may not sell,
              modify or reverse-engineer it.
            </p>
            <p className="mb-5 text-neutral-600">
              The program is provided &ldquo;as is&rdquo;, without warranty, and you use it at your own risk. It works
              entirely offline and does not collect, store or send any personal data or usage information.
            </p>
            <Link href={WINDOKTA_LICENCE_PATH} className="link inline-flex items-center gap-1 font-medium">
              Read the full licence, disclaimer and privacy terms
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="mb-4 text-white">Give your PC a check-up today</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
              Free · Windows 10 &amp; 11 · No installation · Version {windokta.version} · {windokta.sizeLabel}
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <DownloadButton className="btn-white" />
              <a
                href={download32.href}
                download={download32.fileName}
                className="rounded text-sm font-medium text-primary-100 underline underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                32-bit version
              </a>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-primary-100">
              <EnvelopeIcon className="h-5 w-5" />
              Questions?{' '}
              <a href="mailto:sales@privtech.net" className="font-semibold text-white underline underline-offset-4">
                sales@privtech.net
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
