import './Services.css'

const services = [
  {
    icon: '📮',
    title: 'Direct Mail Postcards',
    desc: 'Premium physical postcards delivered to 5,000+ homes in San Antonio. Your business, in their hands.',
  },
  {
    icon: '🎨',
    title: 'Design & Fulfillment',
    desc: 'We handle everything — professional design, print, postage, and USPS delivery. You just show up.',
  },
  {
    icon: '📍',
    title: 'Custom Ad Placement',
    desc: 'Choose exactly where your ad appears on the postcard. Premium placement for maximum visibility.',
  },
  {
    icon: '📊',
    title: 'Ad Planning',
    desc: 'Strategic planning to maximize your campaign ROI. We help you craft the right offer for the right audience.',
  },
  {
    icon: '📱',
    title: 'Paid Social Advisory',
    desc: 'Expert guidance on Facebook Ads and Google Ads to complement your physical marketing campaigns.',
  },
  {
    icon: '⭐',
    title: 'Google Reviews Strategy',
    desc: 'Build a powerful online reputation. We advise on growing your Google Reviews to drive trust and conversions.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-inner">
        <div className="section-label">What We Do</div>
        <h2>Full-Service Growth Marketing</h2>
        <p className="section-sub">
          CliqTru isn't just direct mail — we're a full-service marketing agency built to grow local businesses.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
