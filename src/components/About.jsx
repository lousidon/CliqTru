import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner about-inner">
        <div className="about-text">
          <div className="section-label">Who We Are</div>
          <h2>Built by a Marketer,<br />for Local Businesses.</h2>
          <p>
            CliqTru was founded by <strong>Danial Ali</strong> with one mission: give local businesses
            access to the kind of marketing that actually works — without the agency markup and
            the confusing contracts.
          </p>
          <p>
            We combine the proven power of physical direct mail with full-service digital marketing
            advisory. Whether you need to fill your mailbox pipeline, grow your Google Reviews, or
            launch your first paid social campaign — we've got you covered.
          </p>
          <p>
            Great businesses shouldn't be invisible. CliqTru puts you in front of the neighborhoods
            you serve, and keeps you there.
          </p>
          <a href="#pricing" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
            Get Started →
          </a>
        </div>
        <div className="about-card">
          <div className="about-avatar">DA</div>
          <div className="about-name">Danial Ali</div>
          <div className="about-role">Founder, CliqTru</div>
          <div className="about-divider" />
          <div className="about-facts">
            <div className="about-fact">
              <span className="fact-num">5,000+</span>
              <span className="fact-label">Homes per mailing</span>
            </div>
            <div className="about-fact">
              <span className="fact-num">6+</span>
              <span className="fact-label">Marketing services</span>
            </div>
            <div className="about-fact">
              <span className="fact-num">San Antonio</span>
              <span className="fact-label">Metro area focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
