import './Benefits.css'

const benefits = [
  {
    icon: '🚫',
    title: 'No Competitors Allowed',
    desc: 'Your business is the only one in its category on every mailing. Reserve your spot before your competitor does.',
  },
  {
    icon: '✏️',
    title: '2 Design Reviews',
    desc: 'Collaborate with our design team. You get two rounds of revisions to make sure your ad is exactly right.',
  },
  {
    icon: '📌',
    title: 'Custom Ad Placement',
    desc: 'Choose where your ad appears on the postcard. Premium spots for maximum eyes on your business.',
  },
  {
    icon: '🗺️',
    title: 'Ad Planning Included',
    desc: 'We don\'t just mail your ad — we help you plan the right offer, the right message, and the right timing.',
  },
  {
    icon: '💡',
    title: 'Marketing Advisory',
    desc: 'Get expert advice on pricing strategy, Google Ads, Facebook Ads, paid social, and growing your Google Reviews.',
  },
  {
    icon: '📦',
    title: 'We Handle Everything',
    desc: 'Design, print, postage, and USPS delivery — all handled for you. Zero hassle from start to finish.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="section-inner">
        <div className="section-label">Why CliqTru</div>
        <h2>More Than Just a Mailer</h2>
        <p className="section-sub">
          Every spot comes with a full suite of marketing support — not just a postcard.
        </p>
        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
