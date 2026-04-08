import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">Cliq<span>Tru</span></div>
          <p>Physical Growth Marketing for local San Antonio businesses.</p>
          <div className="footer-contact">
            <a href="mailto:hello@cliqtru.com">hello@cliqtru.com</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <a href="#services">Direct Mail</a>
            <a href="#services">Design & Fulfillment</a>
            <a href="#services">Ad Planning</a>
            <a href="#services">Marketing Advisory</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <a href="#how-it-works">How It Works</a>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CliqTru. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
