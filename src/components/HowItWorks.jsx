import './HowItWorks.css'

const steps = [
  { num: '01', title: 'Secure Your Spot', desc: 'Choose your ad size and reserve your category. Only one business per category — first come, first served.' },
  { num: '02', title: 'We Design Your Ad', desc: 'Our team creates a professional, eye-catching ad for your business. You get 2 design reviews to make it perfect.' },
  { num: '03', title: 'We Print & Mail', desc: 'We handle all printing, USPS paperwork, and delivery. Your ad lands in 5,000+ San Antonio mailboxes.' },
  { num: '04', title: 'Customers Call You', desc: 'Real people, real mailboxes. No algorithms, no spam folders — just your business in their hands.' },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-inner">
        <div className="section-label">The Process</div>
        <h2>How It Works</h2>
        <p className="section-sub">
          From signup to delivery, we handle everything. Here's what the journey looks like.
        </p>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="postcard-preview">
          <div className="postcard-label">Sample Postcard · 9×12 Full Card</div>
          <div className="postcard-images">
            <div className="postcard-img-wrap">
              <span>Front</span>
              <img src="/images/postcard-front.png" alt="Postcard Front" />
            </div>
            <div className="postcard-img-wrap">
              <span>Back</span>
              <img src="/images/postcard-back.png" alt="Postcard Back" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
