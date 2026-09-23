import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

export default function About({ onTabChange }) {
  useScrollAnimation();
  const milestones = [
    {
      year: '1999',
      title: 'Humble Inception',
      desc: 'Fazil Garments was established in Tamil Nadu with a small group of master tailors, dedicated to manufacturing fine formal shirts with uncompromising stitching quality.',
    },
    {
      year: '2006',
      title: 'Direct Gujarat Fabric Route',
      desc: 'Bypassed fabric middlemen to establish direct mill partnerships in Surat and Ahmedabad, importing large cotton and linen fabric bundles to secure yarn consistency.',
    },
    {
      year: '2015',
      title: 'CAD Cutting Modernization',
      desc: 'Installed computerized CAD pattern plotters and automated multi-ply cutting tables, boosting production capacity to 30,000 shirts per month with zero variance.',
    },
    {
      year: '2021',
      title: 'Complete Tamil Nadu Coverage',
      desc: 'Surpassed distribution into all 32 districts of Tamil Nadu, becoming the go-to manufacturing partner for regional wholesalers and retail chains.',
    },
    {
      year: '2025+',
      title: 'Pan-India Vision',
      desc: 'Currently scaling manufacturing lines to 25,000+ units monthly and expanding bulk supply pipelines into Karnataka, Kerala, Maharashtra, and North India.',
    },
  ]

  const values = [
    {
      title: 'Direct Mill Sourcing',
      desc: 'We never buy second-grade market remainders. Every bundle of cotton and linen is sourced directly from accredited mills in Surat and Ahmedabad.',
    },
    {
      title: 'Artisan Craftsmanship',
      desc: 'Our 50+ master tailors bring decades of experience in collar forming, sleeve setting, and twin-needle lockstitching for unmatched garment longevity.',
    },
    {
      title: '100% Quality Assurance',
      desc: 'Every single shirt undergoes a 100-point physical inspection before it is steam-pressed and boxed. Defective pieces are rejected instantly.',
    },
    {
      title: 'Customer Trust & Transparency',
      desc: 'We believe in long-term B2B relationships. Our transparent pricing, consistent GSM standards, and on-time dispatch have earned client loyalty for over 25 years.',
    },
  ]

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-bg-image">
        <div className="container phm-content">
          <h1 className="section-title-white single-line-title">Our Legacy &amp; Craftsmanship</h1>
          <p className="phm-sub">
            From a dedicated workshop in Tamil Nadu to a premier industrial shirtmaker supplying thousands of retailers across India.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-split scroll-anim">
            <div className="story-text-col">
              <span className="eyebrow-maroon">HOW IT STARTED</span>
              <h2 className="section-title-serif">Building Trust, One Seam at a Time.</h2>
              <p className="story-p">
                Fazil Garments was founded in 1999 with a clear observation: wholesale buyers and retailers were tired of shirts that lost collar stiffness after two washes or shrunk unevenly due to blended fabrics.
              </p>
              <p className="story-p">
                We made a foundational decision that defined our next 25 years: <strong>direct vertical control</strong>. Instead of buying commercial fabric scraps from local markets, we traveled to the textile capitals of <strong>Surat and Ahmedabad</strong> to procure raw fabric bundles directly from source mills.
              </p>
              <p className="story-p">
                Today, Fazil Garments is synonymous with reliability. We manufacture over 25,000 export-grade shirts every month, supplying leading retail chains and wholesalers in all 20+ districts of Tamil Nadu, and rapidly expanding across the nation.
              </p>
            </div>

            <div className="story-media-col">
              <div className="story-img-frame">
                <img
                  src="/assets/hero_fabric.jpg"
                  alt="Raw fabric bundles from Surat & Ahmedabad"
                  className="story-img"
                />
                <div className="story-badge">
                  <strong>100%</strong>
                  <span>Mill Certified Fabric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust & Relationships (DARK THEME) */}
      <section className="about-customers-section dark-theme-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">CUSTOMER RELATIONSHIPS</span>
            <h2 className="section-title-white">Built on Long-Term Trust</h2>
            <p className="section-subtext-light">
              Over 80% of our wholesale clients have partnered with us for more than 10 consecutive years.
            </p>
          </div>

          <div className="trust-grid">
            <div className="trust-card card-dark-glass scroll-anim">
              <div className="tc-icon">100%</div>
              <h3 className="trust-title text-gold">20+ Districts in Tamil Nadu</h3>
              <p className="trust-desc">
                From Chennai, Coimbatore, and Madurai to Tirunelveli, Salem, and Trichy—our shirts are stocked in premier multi-brand retail outlets and wholesale depots statewide.
              </p>
            </div>
            <div className="trust-card card-dark-glass scroll-anim">
              <div className="tc-icon">📐</div>
              <h3 className="trust-title text-gold">Zero Measurement Variance</h3>
              <p className="trust-desc">
                Wholesale retailers trust our standard chest, shoulder, and sleeve grading. When a customer buys a size 40 or 42 Fazil shirt, the fit is identical every single batch.
              </p>
            </div>
            <div className="trust-card card-dark-glass scroll-anim">
              <div className="tc-icon">🚚</div>
              <h3 className="trust-title text-gold">On-Time Dispatch Guarantee</h3>
              <p className="trust-desc">
                We maintain dedicated delivery logistics across South India, ensuring that festival peak seasons (Diwali, Pongal, Eid) orders reach stores without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Timeline Section (LIGHT THEME) */}
      <section className="about-timeline-section light-theme-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-maroon">OUR JOURNEY</span>
            <h2 className="section-title-serif">25 Years of Continuous Growth</h2>
          </div>

          <div className="animated-timeline-track light-track">
            {milestones.map((m, idx) => (
              <div key={m.year} className={`animated-timeline-item scroll-anim ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="animated-timeline-marker light-marker"></div>
                <div className="animated-timeline-content card-white-elevated">
                  <span className="timeline-year-large text-maroon">{m.year}</span>
                  <h3 className="timeline-title-dark">{m.title}</h3>
                  <p className="timeline-desc-dark">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (DARK THEME) */}
      <section className="about-values-section dark-theme-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">OUR COMMITMENT</span>
            <h2 className="section-title-white">The Fazil Garments Standard</h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card card-dark-glass value-animated-card scroll-anim">
                <span className="value-index-gold">0{i + 1}</span>
                <h3 className="value-title-white">{v.title}</h3>
                <p className="value-desc-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (LIGHT THEME) */}
      <section className="about-cta-section light-cta">
        <div className="container">
          <div className="about-cta-box">
            <h2 className="section-title-serif">Experience Our Quality First-Hand</h2>
            <p className="cta-banner-sub-dark">
              Contact our sales representatives for fabric swatch kits, master size charts, and wholesale catalogs.
            </p>
            <button
              className="btn-maroon-solid"
              onClick={() => onTabChange('contact')}
            >
              Get in Touch with Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
