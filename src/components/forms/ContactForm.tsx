'use client'

import { useState, useTransition } from 'react'
import { submitContactForm, FormState } from '@/app/actions/contact'
import Button from '@/components/ui/Button'
import { CheckCircleIcon } from '@/components/ui/Icons'

const services = [
  'Commodity Sourcing & Supply',
  'Mining Equipment & Consumables',
  'Agricultural Inputs & Products',
  'ICT Equipment, Solutions & Services',
  'Construction',
  'Consultancy',
  'Other',
]

interface ContactFormProps {
  showAllFields?: boolean
}

export default function ContactForm({ showAllFields = true }: ContactFormProps) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<FormState>({ success: false, message: '' })

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setState(result)
    })
  }

  if (state.success) {
    return (
      <div className="rounded-xl bg-primary-50 p-8 text-center">
        <CheckCircleIcon className="mx-auto mb-4 h-12 w-12 text-primary-600" />
        <h3 className="mb-2 text-xl font-semibold text-neutral-900">Message Sent</h3>
        <p className="text-neutral-600">{state.message}</p>
        <button
          onClick={() => setState({ success: false, message: '' })}
          className="mt-6 text-primary-600 hover:text-primary-700 font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {state.message && !state.success && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input"
            placeholder="Your full name"
          />
        </div>

        {showAllFields && (
          <div>
            <label htmlFor="company" className="label">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="input"
              placeholder="Company name"
            />
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input"
            placeholder="you@company.com"
          />
        </div>

        {showAllFields && (
          <div>
            <label htmlFor="phone" className="label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input"
              placeholder="+260 XXX XXX XXX"
            />
          </div>
        )}
      </div>

      {showAllFields && (
        <div>
          <label htmlFor="service" className="label">
            Service Needed
          </label>
          <select id="service" name="service" className="input">
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="label">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={showAllFields ? 5 : 3}
          className="input resize-none"
          placeholder="Tell us about your project or requirements..."
        />
      </div>

      <div>
        <Button type="submit" variant="primary" size="lg" disabled={isPending} className="w-full md:w-auto">
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      <p className="text-sm text-neutral-500">
        By submitting this form, you agree to be contacted regarding your enquiry.
      </p>
    </form>
  )
}
