import './Footer.css'

export default function Footer({ onTabChange }) {
  const handleNav = (tabId) => {
    onTabChange(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-clean-neat">
      <div className="container">
        {/* Clean Balanced Top Block */}
        <div className="footer-neat-grid">
          {/* Brand Info */}
          <div className="f-neat-brand">
            <div className="f-neat-logo">
              <div className="fn-badge" style={{ padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                <img src="/assets/client_logo_clean.png" alt="Fazil Garments & Textiles Logo" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
              </div>
              <div>
                <h3 className="fn-name">FAZIL GARMENTS &amp; TEXTILES</h3>
                <span className="fn-sub">Quality • Craftsmanship • Trust</span>
              </div>
            </div>
            <p className="fn-lead">
              Direct mill raw fabric sourcing from Surat &amp; Ahmedabad. Engineered through CAD precision cutting and master tailoring into export-grade shirts.
            </p>
          </div>

          {/* Quick Clean Navigation */}
          <div className="f-neat-nav">
            <h4 className="fn-head">QUICK LINKS</h4>
            <div className="fn-links-grid">
              <button onClick={() => handleNav('home')}>Home</button>
              <button onClick={() => handleNav('about')}>About Us</button>
              <button onClick={() => handleNav('process')}>Manufacturing Process</button>
              <button onClick={() => handleNav('products')}>Our Brands</button>
              <button onClick={() => handleNav('contact')}>Contact &amp; Wholesale</button>
            </div>
          </div>

          {/* Direct Address & Inquiries */}
          <div className="f-neat-contact">
            <h4 className="fn-head">ADDRESS &amp; CONTACT</h4>
            <p className="fn-c-line">
              <strong>Address:</strong> 36-53 H, R.M.S.COMPLEX, ASHOK NAGAR, NATHAM, DINDIGUL, TAMILNADU- 624401
            </p>
            <p className="fn-c-line">
              <strong>Phone / WhatsApp:</strong>{' '}
              <a href="tel:+918610949429" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 86109 49429
              </a>
            </p>
            <p className="fn-c-line">
              <strong>Email:</strong>{' '}
              <a href="mailto:fazilgarment123@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                fazilgarment123@gmail.com
              </a>
            </p>
            <button
              className="fn-quote-btn"
              onClick={() => handleNav('contact')}
            >
              Request Wholesale Quote →
            </button>
          </div>
        </div>

        {/* Clean Bottom Copyright */}
        <div className="footer-neat-bottom">
          <p>© 1999–2025 FAZIL GARMENTS &amp; TEXTILES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
