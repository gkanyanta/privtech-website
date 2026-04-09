import { QuoteIcon } from '@/components/ui/Icons'

const testimonials = [
  {
    quote: "Privtech Solutions has been instrumental in supplying quality equipment for our mining operations. Their understanding of the industry and reliable delivery has made them our preferred partner.",
    author: "James Mulenga",
    role: "Operations Manager",
    company: "Copperbelt Mining Company",
    initials: "JM",
  },
  {
    quote: "The agricultural inputs we receive from Privtech have consistently met our quality standards. Their team understands the farming calendar and ensures timely delivery for each season.",
    author: "Grace Tembo",
    role: "Farm Manager",
    company: "Green Valley Farms",
    initials: "GT",
  },
  {
    quote: "From IT infrastructure to ongoing support, Privtech has helped modernize our operations. Their consultancy services provided valuable insights for our digital transformation journey.",
    author: "Kenneth Banda",
    role: "Managing Director",
    company: "Lusaka Logistics Ltd",
    initials: "KB",
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-primary-900 african-pattern-strong">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-white">What Our Clients Say</h2>
        </div>
        <p className="section-subheading text-primary-100">
          Trusted by businesses across Zambia and the region.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
            >
              <QuoteIcon className="mb-4 h-8 w-8 text-secondary-400" />
              <blockquote className="mb-6">
                <p className="text-primary-50">{testimonial.quote}</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="not-italic">
                    <span className="block font-semibold text-white">{testimonial.author}</span>
                    <span className="text-sm text-primary-200">{testimonial.role}</span>
                    <span className="block text-sm text-primary-300">{testimonial.company}</span>
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
