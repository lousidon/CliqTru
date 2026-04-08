import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    size: '2×3"',
    price: '$675',
    perHome: '$0.14',
    features: ['2×3 inch ad space', 'Professional design', '2 design reviews', 'USPS delivery', 'Ad planning session'],
    cta: 'Secure My Spot',
    highlight: false,
  },
  {
    name: 'Growth',
    size: '4×3"',
    price: '$1,350',
    perHome: '$0.27',
    features: ['4×3 inch ad space', 'Professional design', '2 design reviews', 'Custom ad placement', 'USPS delivery', 'Ad planning session'],
    cta: 'Secure My Spot',
    highlight: true,
  },
  {
    name: 'Dominator',
    size: '4×6"',
    price: '$2,300',
    perHome: '$0.46',
    features: ['4×6 inch ad space', 'Professional design', '2 design reviews', 'Custom ad placement', 'USPS delivery', 'Full marketing advisory'],
    cta: 'Secure My Spot',
    highlight: false,
  },
  {
    name: 'The Boss',
    size: '9×12"',
    price: '$10,500',
    perHome: '$2.10',
    features: ['Full 9×12 postcard', 'Premium design', '2 design reviews', 'Prime placement', 'USPS delivery', 'Full marketing advisory', 'Priority support'],
    cta: 'Secure My Spot',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-inner">
        <div className="section-label">Pricing</div>
        <h2>Simple, Transparent Pricing</h2>
        <p className="section-sub">
          Every plan includes design, print, delivery, and marketing advisory. No hidden fees.
        </p>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`pricing-card ${p.highlight ? 'highlight' : ''}`} key={p.name}>
              {p.highlight && <div className="popular-badge">Most Popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-size">{p.size} ad space</div>
              <div className="plan-price">
                {p.price}
                <span className="plan-period"> / mailing</span>
              </div>
              <div className="plan-per-home">{p.perHome} per home · 5,000 homes</div>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`plan-cta ${p.highlight ? 'plan-cta-primary' : 'plan-cta-ghost'}`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Stripe payment links coming soon. Contact us directly to reserve your spot today.
        </p>
      </div>
    </section>
  )
}
