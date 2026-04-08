import './Gallery.css'

const ads = Array.from({ length: 15 }, (_, i) => `/images/ads/${i + 1}.png`)

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-inner">
        <div className="section-label">Ad Examples</div>
        <h2>Real Ads. Real Businesses.</h2>
        <p className="section-sub">
          Premium design included with every spot. Here's a sample of what we create for our clients.
        </p>
      </div>
      <div className="gallery-track-wrapper">
        <div className="gallery-track">
          {[...ads, ...ads].map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Ad example ${(i % 15) + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
