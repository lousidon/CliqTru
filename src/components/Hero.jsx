import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-badge">San Antonio · Physical Marketing</div>
        <h1>
          Physical Growth<br />
          <span className="gradient-text">Marketing.</span>
        </h1>
        <p className="hero-sub">
          We help local businesses advertise using proven physical ad techniques —
          delivered directly to the doors of your ideal customers.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Secure My Spot →</a>
          <a href="#how-it-works" className="btn-ghost">See How It Works</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">5,000+</span>
            <span className="stat-label">Homes Reached</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-label">Business Per Category</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Physical Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
