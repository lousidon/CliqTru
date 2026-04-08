import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-bg" />
      <div className="cta-inner">
        <div className="section-label">Limited Spots Available</div>
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Join the CliqTru postcard campaign and put your business in front of 5,000+
          San Antonio homes. One spot per category — don't let your competitor take yours.
        </p>
        <div className="cta-actions">
          <a href="#pricing" className="btn-primary">Secure My Spot →</a>
          <a href="mailto:hello@cliqtru.com" className="btn-ghost">Contact Us</a>
        </div>
        <div className="cta-guarantee">
          <span>✓ One business per category</span>
          <span>✓ 2 design reviews included</span>
          <span>✓ Full marketing advisory</span>
        </div>
      </div>
    </section>
  )
}
