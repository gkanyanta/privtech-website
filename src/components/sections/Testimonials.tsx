import { QuoteIcon } from '@/components/ui/Icons'

const testimonials = [
  {
    quote: "Privtech transformed our IT operations. Their team understood our challenges as an NGO and provided solutions within our budget. The domain email migration was seamless.",
    author: "Grace Mwanza",
    role: "Operations Manager",
    company: "Youth Development Foundation",
    initials: "GM",
  },
  {
    quote: "As a growing business, we needed an IT partner who could scale with us. Privtech's managed support gives us peace of mind knowing our systems are monitored and maintained.",
    author: "Kenneth Banda",
    role: "Managing Director",
    company: "Lusaka Logistics Ltd",
    initials: "KB",
  },
  {
    quote: "The payment gateway integration was a game-changer for our school. Parents can now pay fees online, and our admin team spends less time on manual reconciliation.",
    author: "Sarah Phiri",
    role: "Bursar",
    company: "Meanwood Academy",
    initials: "SP",
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
          Trusted by businesses and organizations across Zambia.
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
