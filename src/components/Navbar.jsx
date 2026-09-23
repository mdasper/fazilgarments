import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ activeTab, onTabChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'process', label: 'Process' },
    { id: 'products', label: 'Our Brands' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const handleLinkClick = (id) => {
    onTabChange(id)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo & Clean Subtitle */}
        <div className="header-brand" onClick={() => handleLinkClick('home')}>
          <div className="brand-logo-mark" style={{ background: '#ffffff', borderRadius: '50%', padding: '2px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <img src="/assets/client_logo_clean.png" alt="Fazil Garments & Textiles Logo" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
          </div>
          <div className="brand-text-block">
            <span className="brand-company-name">FAZIL GARMENTS &amp; TEXTILES</span>
            <span className="nav-brand-motto-tag">Quality • Craftsmanship • Trust</span>
          </div>
        </div>

        {/* Desktop Navigation Group with Inline B2B Inquiries Button */}
        <div className="nav-and-action-cluster">
          <nav className="desktop-navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-tab-item ${activeTab === link.id ? 'tab-active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <span className="active-indicator-bar" />}
              </button>
            ))}
          </nav>

          {/* B2B Wholesale Inquiries Button Placed Right Next to Tabs */}
          <button
            className="btn-header-quote-inline"
            onClick={() => handleLinkClick('contact')}
          >
            <span>B2B Wholesale Inquiries</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`mobile-hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-visible' : ''}`}>
        <div className="mobile-drawer-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`mobile-drawer-link ${activeTab === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              <span>{link.label}</span>
              {activeTab === link.id && <span className="m-arrow">→</span>}
            </button>
          ))}
          <button
            className="btn-maroon-solid mobile-drawer-cta"
            onClick={() => handleLinkClick('contact')}
          >
            B2B Wholesale Inquiries
          </button>
        </div>
      </div>
    </header>
  )
}
