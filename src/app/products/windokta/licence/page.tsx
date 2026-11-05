import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL, WINDOKTA_LICENCE_PATH, WINDOKTA_PATH } from '@/data/windokta'

// Text from PrivtechWinDokta-LICENSE.txt (the same text shipped in the app's About page).

export const metadata: Metadata = {
  title: 'Privtech WinDokta Licence, Disclaimer and Privacy',
  description:
    'Freeware licence, disclaimer and privacy statement for Privtech WinDokta, the free Windows PC cleaner and optimiser from Privtech Solutions Ltd.',
  alternates: { canonical: `${SITE_URL}${WINDOKTA_LICENCE_PATH}` },
}

export default function WinDoktaLicencePage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600">
              <Link href={WINDOKTA_PATH} className="link">
                Privtech WinDokta
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Licence</span>
            </nav>

            <h1 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              Privtech WinDokta – licence, disclaimer and privacy
            </h1>

            <div className="prose prose-neutral max-w-none">
              <p className="text-lg text-neutral-600 mb-8">
                Copyright © 2026 Privtech Solutions Ltd. All rights reserved.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Licence (freeware)</h2>
              <p className="text-neutral-600 mb-4">
                Privtech WinDokta is proprietary software owned by Privtech Solutions Ltd. It is licensed, not sold.
              </p>
              <p className="text-neutral-600 mb-4">
                You may download and use it free of charge, for personal or business purposes, on any number of
                computers, and you may share unmodified copies of the program.
              </p>
              <p className="text-neutral-600 mb-4">
                You may not sell, rent or charge for the program; modify, decompile or reverse-engineer it (except where
                the law expressly allows this); remove or change its copyright, branding or these terms; or bundle it
                with other software without written permission from Privtech Solutions Ltd.
              </p>
              <p className="text-neutral-600 mb-6">
                All rights not expressly granted are reserved by Privtech Solutions Ltd. This licence ends automatically
                if you break its terms, in which case you must stop using and delete the program.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Disclaimer</h2>
              <p className="text-neutral-600 mb-4">
                The program is provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied, including
                warranties of merchantability, fitness for a particular purpose and non-infringement.
              </p>
              <p className="text-neutral-600 mb-4">
                Privtech WinDokta deletes files and changes system settings at your request. Although it has many
                safeguards, you use it at your own risk. Review what will be changed before confirming, keep backups of
                important data, and use the System Restore point and Undo features it offers.
              </p>
              <p className="text-neutral-600 mb-4">
                To the maximum extent permitted by law, Privtech Solutions Ltd is not liable for any direct, indirect,
                incidental or consequential loss or damage, including loss of data, loss of profits or system
                malfunction, arising from the use of, or inability to use, the program. Nothing in these terms limits
                liability that cannot be limited by law.
              </p>
              <p className="text-neutral-600 mb-6">
                Hardware recommendations are general guidance only; check compatibility with your computer&apos;s
                manufacturer before buying parts.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Privacy</h2>
              <p className="text-neutral-600 mb-6">
                Privtech WinDokta works entirely offline. It does not collect, store or send any personal data or usage
                information. Logs and settings are kept only on your computer, in the program&apos;s folder.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Trademarks</h2>
              <p className="text-neutral-600 mb-6">
                Windows, Microsoft Edge, Google Chrome, Mozilla Firefox, Brave and other product names are trademarks of
                their respective owners. Privtech WinDokta is not affiliated with or endorsed by Microsoft or any other
                company named in the program.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Contact</h2>
              <p className="text-neutral-600 mb-6">
                Questions about this licence? Email{' '}
                <a href="mailto:sales@privtech.net" className="link">
                  sales@privtech.net
                </a>
                .
              </p>
            </div>

            <p className="mt-10">
              <Link href={WINDOKTA_PATH} className="link font-medium">
                ← Back to Privtech WinDokta
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
