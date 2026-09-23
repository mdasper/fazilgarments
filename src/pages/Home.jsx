import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'


export default function Home({ onTabChange }) {
  useScrollAnimation();
  const highlights = [
    {
      num: '01',
      title: 'Direct Raw Material Sourcing',
      subtitle: 'Surat & Ahmedabad Mills',
      badge: '100% PURE YARN',
      desc: 'We import premium combed cotton, French linen blends, and textured twills directly from vetted Gujarat mills, guaranteeing zero synthetic compromises.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h12M6 12h12M6 16h12" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Precision CAD Multi-Ply Cutting',
      subtitle: 'Automated 30m Vacuum Tables',
      badge: '±0.2MM ACCURACY',
      desc: 'Computer-aided pattern plotting with automated high-speed cutting knives, shaping dozens of multi-ply fabric sheets simultaneously with flawless alignment.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Master Artisan Tailoring',
      subtitle: '50+ Master Artisan Lines',
      badge: '14 SPI LOCKSTITCH',
      desc: 'Dedicated assembly lines crafting collars, cuffs, and plackets with German thermo-fused interlinings that never lose structure across repeat washes.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Custom OEM Brand Labeling',
      subtitle: 'Turnkey Private Labeling',
      badge: 'RETAIL READY PACKAGING',
      desc: 'Full private label finishing: custom woven neck tags, hang tags, poly-bagging, butterfly collar supports, and master cartons ready for national dispatch.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ]

  const clientTypes = [
    {
      title: 'Regional Wholesalers',
      tag: 'ALL 32 TN DISTRICTS',
      volume: '1,000 to 10,000+ Units / Batch',
      desc: 'Steady weekly replenishment for wholesale stockists with complete size ratios (38 to 46) and guaranteed fabric color consistency.',
      icon: '🏢',
    },
    {
      title: 'Retail Menswear Chains',
      tag: 'READY-TO-RACK',
      volume: 'High-Velocity Formal & Casual',
      desc: 'Pre-packaged, steam-ironed formal shirts and casual linens tailored to current retail trends with premium packaging.',
      icon: '👔',
    },
    {
      title: 'Private Label Brands',
      tag: 'FULL OEM CONTRACT',
      volume: 'Custom Sizing & Branding',
      desc: 'Manufactured 100% under your brand insignia with your custom woven labels, wash care tags, and luxury gift boxes.',
      icon: '🏷️',
    },
    {
      title: 'Corporate & Institutional',
      tag: 'HIGH DURABILITY',
      volume: 'Uniform & Executive Wear',
      desc: 'High-tenacity cotton and poly-viscose blend shirts for corporate staff, educational institutions, and hospitality teams.',
      icon: '🤝',
    },
  ]

  return (
    <div className="home-page-maroon">
      {/* 1. HERO SECTION WITH HIGH-QUALITY BACKGROUND IMAGE */}
      <section className="home-hero-bg-image">
        <div className="hero-image-overlay"></div>

        {/* Content sitting cleanly on top of the animation */}
        <div className="container hero-content-overlay">
          <div className="hero-text-block-center">
            <span className="eyebrow-white-pill">DIRECT APPAREL MANUFACTURER · TAMIL NADU</span>
            <h1 className="hero-headline-overlay">
              Direct Mill Sourcing. Precision Manufacturing. Reliable Bulk Supply.
            </h1>

            {/* Clean Paragraph instead of tiles */}
            <p className="hero-elegant-paragraph">
              For over 25 years, Fazil Garments has pioneered industrial-scale shirt manufacturing in Tamil Nadu. We import high-grade raw fabrics directly from Surat and Ahmedabad, transforming them through automated CAD-cutting and master tailoring into 25,000+ premium shirts every month for pan-India distribution.
            </p>

            {/* Actionable Buttons */}
            <div className="hero-buttons-overlay">
              <button
                className="btn-white-solid"
                onClick={() => onTabChange('products')}
              >
                <span>Explore Shirt Catalog</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                className="btn-outline-white"
                onClick={() => onTabChange('contact')}
              >
                <span>Direct WhatsApp Inquiry</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="home-stats-strip">
        <div className="container">
          <div className="stats-strip-grid">
            <div className="stat-box scroll-anim">
              <span className="stat-number">25+</span>
              <span className="stat-title">Years in Operation</span>
              <p className="stat-desc">Established in 1999 in Tamil Nadu</p>
            </div>
            <div className="stat-box scroll-anim">
              <span className="stat-number">25,000+</span>
              <span className="stat-title">Monthly Shirt Output</span>
              <p className="stat-desc">Industrial CAD multi-ply facility</p>
            </div>
            <div className="stat-box scroll-anim">
              <span className="stat-number">20+</span>
              <span className="stat-title">Tamil Nadu Districts</span>
              <p className="stat-desc">Complete statewide distribution</p>
            </div>
            <div className="stat-box scroll-anim">
              <span className="stat-number">50+</span>
              <span className="stat-title">Master Artisan Tailors</span>
              <p className="stat-desc">Dedicated assembly lines</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT COMPANY OVERVIEW (CLEAN 50/50 FULL-WIDTH: IMAGE ON LEFT, CONTENT ON RIGHT) */}
      <section className="home-overview-section">
        <div className="container">
          <div className="overview-clean-5050 scroll-anim">
            {/* Left Side: One Clean Full-Width Image */}
            <div className="overview-left-image-wrap bordered-image">
              <img
                src="/assets/stitching_process.jpg"
                alt="Precision stitching at Fazil Garments"
                className="overview-5050-img"
              />
            </div>

            {/* Right Side: Full Content Column */}
            <div className="overview-right-content">
              <span className="eyebrow-maroon">ABOUT FAZIL GARMENTS</span>
              <h2 className="section-title-serif">
                A Quarter Century of Unmatched Manufacturing Integrity.
              </h2>
              
              <div className="overview-sharp-content">
                <p className="overview-p-lead">
                  Fazil Garments is not a broker, reseller, or trader. We are <strong>direct industrial garment manufacturers</strong> operating our own CAD cutting tables, artisan stitching lines, quality check stations, and packaging floors.
                </p>
                <p className="overview-p-secondary">
                  By importing raw fabric bundles directly from source mills in <strong>Surat and Ahmedabad</strong>, we control thread count, GSM uniformity, and colorfastness from day one. Every shirt that leaves our facility reflects a commitment to zero defects, boasting 14-16 SPI lockstitch density and thermo-fused interlinings that hold their structure wash after wash.
                </p>
              </div>

              <div className="overview-cta-row">
                <button
                  className="btn-maroon-solid"
                  onClick={() => onTabChange('about')}
                >
                  <span>Read Our Full Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4 PILLARS - RICH THEMED MAROON CARDS WITH CUSTOM SVG ICONS & HOVER */}
      <section className="home-pillars-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-maroon">HOW WE DELIVER EXCELLENCE</span>
            <h2 className="section-title-serif">Four Pillars of Industrial Perfection</h2>
            <p className="section-subtext">
              Every stage of shirtmaking is engineered to guarantee zero defects and long-term customer trust.
            </p>
          </div>

          <div className="pillars-grid-themed">
            {highlights.map((h) => (
              <div key={h.num} className="pillar-themed-card scroll-anim">
                <div className="ptc-top-row">
                  <div className="ptc-icon-badge">{h.icon}</div>
                  <span className="ptc-num">{h.num}</span>
                </div>
                <span className="ptc-badge">{h.badge}</span>
                <h3 className="ptc-title">{h.title}</h3>
                <span className="ptc-subtitle">{h.subtitle}</span>
                <p className="ptc-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. B2B WHOLESALE & RETAIL SUPPLY - RICH THEMED MAROON CARDS */}
      <section className="home-clients-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-maroon">WHO WE SERVE</span>
            <h2 className="section-title-serif">B2B Wholesale &amp; Retail Supply</h2>
            <p className="section-subtext">
              Dedicated bulk manufacturing pipelines tailored to your business model.
            </p>
          </div>

          <div className="clients-grid-themed">
            {clientTypes.map((c, i) => (
              <div key={i} className="client-themed-card scroll-anim">
                <div className="ctc-top-row">
                  <span className="ctc-icon">{c.icon}</span>
                  <span className="ctc-tag">{c.tag}</span>
                </div>
                <h3 className="ctc-title">{c.title}</h3>
                <span className="ctc-volume">{c.volume}</span>
                <p className="ctc-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <span className="eyebrow-white">START YOUR BULK ORDER</span>
            <h2 className="section-title-white">
              Ready to Partner with Tamil Nadu's Premier Shirt Manufacturer?
            </h2>
            <p className="cta-banner-sub">
              Contact our wholesale desk today for physical fabric swatch kits, master size charts, and customized bulk quotations.
            </p>
            <div className="cta-buttons-row">
              <button
                className="btn-white-solid"
                onClick={() => onTabChange('contact')}
              >
                <span>Request B2B Quotation</span>
              </button>
              <button
                className="btn-outline-white"
                onClick={() => onTabChange('products')}
              >
                <span>View Products Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INFINITE BRAND MARQUEE */}
      <section className="home-marquee-section">
        <div className="marquee-header scroll-anim">
          <span className="eyebrow-white">TRUSTED BY RETAIL LEADERS</span>
          <h3 className="marquee-title">Our Esteemed Clients & Partners</h3>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Double the list to create an infinite seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-group">
                <span className="marquee-brand">Ramraj Cotton</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Otto</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">The Chennai Silks</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Pothys</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Madurai Meenakshi Textiles</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Naidu Hall</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">RmKV</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Seematti</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Kalyan Silks</span>
                <span className="marquee-dot">•</span>
                <span className="marquee-brand">Madurai Sungudi Traders</span>
                <span className="marquee-dot">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
