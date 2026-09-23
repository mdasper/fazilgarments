import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Legacy.css'

export default function Legacy({ onTabChange }) {
  useScrollAnimation()
  const [selectedHub, setSelectedHub] = useState('tn')

  const hubs = {
    tn: {
      name: 'Tamil Nadu (Central Origin)',
      role: 'Manufacturing Hub & Core Network',
      coverage: '32 Districts Fully Covered',
      volume: '25,000 Shirts / Month',
      desc: 'Established 1999. The backbone of Fazil Garments with 50+ artisan tailor lines, CAD cutting tables, and direct daily logistics.',
    },
    mumbai: {
      name: 'Mumbai & Western Corridor',
      role: 'Wholesale B2B Distribution Wing',
      coverage: 'Maharashtra, Gujarat & Goa',
      volume: '15,000 Units Monthly Target',
      desc: 'Direct rail and highway corridors feeding major departmental stores, corporate uniform contracts, and multi-brand outlets.',
    },
    delhi: {
      name: 'Delhi NCR & Northern Hub',
      role: 'Tier-1 Retail Expansion',
      coverage: 'Delhi, Punjab, Haryana & UP',
      volume: '18,000 Units Monthly Target',
      desc: 'Supplying high-density formal shirt retail clusters and institutional buyers with premium compact-cotton specifications.',
    },
    bengaluru: {
      name: 'Bengaluru Tech & Retail Corridor',
      role: 'High-Density Boutique & Corporate Line',
      coverage: 'Karnataka Regional Markets',
      volume: '12,000 Units Monthly Target',
      desc: 'High-frequency weekly dispatches from Tamil Nadu plant catering to premium tech-park retailers and garment chains.',
    },
    kolkata: {
      name: 'Kolkata & Eastern Gateway',
      role: 'Regional Wholesale Supply',
      coverage: 'West Bengal, Odisha, Assam',
      volume: '10,000 Units Monthly Target',
      desc: 'Expanding presence with trusted distributors across eastern textile hubs, offering tailored festival collections.',
    },
  }

  const milestones = [
    {
      year: '1999',
      title: 'The Inception in Tamil Nadu',
      tag: 'CRAFT HERITAGE',
      desc: 'Founded with a singular mission: to eliminate poor fit and flimsy fabric from commercial shirts. Began with dedicated master tailors delivering to local wholesalers.',
      metric: 'Initial 5 Artisan Tailors',
    },
    {
      year: '2008',
      title: 'Surat & Ahmedabad Direct Import',
      tag: 'SUPPLY CHAIN REVOLUTION',
      desc: 'Bypassed middlemen by establishing direct mill connections in Gujarat. Sourcing raw combed compact-cotton bundles by the tonne to guarantee yarn purity.',
      metric: '100% Direct Mill Inflow',
    },
    {
      year: '2016',
      title: 'CAD Multi-Ply & Plant Modernization',
      tag: 'INDUSTRIAL PRECISION',
      desc: 'Installed automated computerized pattern plotting and multi-ply cutting tables. Capacity scaled to 25,000 garments per month with zero measurement variance.',
      metric: '±0.2mm CAD Precision',
    },
    {
      year: '2025',
      title: 'The Pan-India Expansion Era',
      tag: 'NATIONAL FOOTPRINT',
      desc: 'Solidified leadership across all 32 Tamil Nadu districts. Now actively expanding into Western, Northern, and Central Indian trade hubs.',
      metric: 'Pan-India B2B Ready',
    },
  ]

  return (
    <div className="legacy-page-wrap">
      {/* Hero Header */}
      <section className="page-header-bg-image">
        <div className="container legacy-hero-content scroll-anim">
          <span className="eyebrow-royal">A QUARTER CENTURY OF HERITAGE</span>
          <h1 className="title-display">
            From Tamil Nadu Roots to <br />
            <span className="text-gold-gradient">Pan-India Dominance.</span>
          </h1>
          <p className="legacy-hero-sub">
            25 years of relentless manufacturing integrity. Discover the journey of building Tamil Nadu’s most dependable shirt manufacturing powerhouse and our roadmap to clothing India.
          </p>
        </div>
      </section>

      {/* Interactive Glowing Map Section */}
      <section className="map-expansion-section">
        <div className="container">
          <div className="map-section-head scroll-anim">
            <span className="eyebrow-royal">NATIONAL LOGISTICS ARCHITECTURE</span>
            <h2 className="title-editorial">Interactive Pan-India Supply Grid</h2>
            <p className="map-subtext">
              Click on the glowing nodes to inspect distribution metrics and regional dispatch hubs.
            </p>
          </div>

          <div className="map-grid-interactive">
            {/* SVG Glowing Map Container */}
            <div className="map-svg-card card-glass-maroon scroll-anim">
              <svg
                className="india-vector-map"
                viewBox="0 0 600 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle India Silhouette Outline */}
                <path
                  d="M 280, 50 C 330, 80 380, 110 390, 150 C 400, 190 460, 230 480, 260 C 500, 290 470, 310 440, 330 C 410, 350 420, 380 400, 420 C 380, 460 360, 520 330, 570 C 310, 610 290, 650 270, 670 C 260, 660 240, 590 230, 530 C 210, 470 180, 440 160, 390 C 140, 340 120, 300 130, 260 C 140, 220 180, 180 200, 140 C 220, 100 240, 60 280, 50 Z"
                  fill="rgba(36, 5, 16, 0.45)"
                  stroke="rgba(212, 175, 55, 0.2)"
                  strokeWidth="1.5"
                />

                {/* Radiating Energy Arcs from Tamil Nadu Node (280, 620) */}
                {/* Arc to Mumbai (190, 410) */}
                <path
                  d="M 280, 620 Q 210, 520 190, 410"
                  stroke="url(#goldArcGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="radiating-arc"
                />
                {/* Arc to Delhi (270, 200) */}
                <path
                  d="M 280, 620 Q 250, 400 270, 200"
                  stroke="url(#goldArcGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="radiating-arc arc-delay-1"
                />
                {/* Arc to Bengaluru (260, 550) */}
                <path
                  d="M 280, 620 Q 270, 580 260, 550"
                  stroke="url(#goldArcGrad)"
                  strokeWidth="2.5"
                  className="radiating-arc"
                />
                {/* Arc to Kolkata (420, 330) */}
                <path
                  d="M 280, 620 Q 370, 470 420, 330"
                  stroke="url(#goldArcGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="radiating-arc arc-delay-2"
                />

                {/* Linear Gradient for Arcs */}
                <defs>
                  <linearGradient id="goldArcGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#F7E7B4" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#997D25" />
                  </linearGradient>
                </defs>

                {/* NODE: Tamil Nadu (Origin Epicenter) */}
                <g
                  className="map-node node-origin"
                  onClick={() => setSelectedHub('tn')}
                >
                  <circle cx="280" cy="620" r="24" className="pulse-ring-outer" />
                  <circle cx="280" cy="620" r="14" className="pulse-ring-inner" />
                  <circle cx="280" cy="620" r="7" fill="#F7E7B4" />
                  <text x="310" y="625" fill="#F7E7B4" className="node-label">
                    TAMIL NADU (CENTRAL PLANT)
                  </text>
                </g>

                {/* NODE: Bengaluru */}
                <g
                  className="map-node"
                  onClick={() => setSelectedHub('bengaluru')}
                >
                  <circle cx="260" cy="550" r="6" fill="#D4AF37" />
                  <text x="180" y="555" fill="#E6DDD8" className="node-label-sub">
                    Bengaluru
                  </text>
                </g>

                {/* NODE: Mumbai */}
                <g
                  className="map-node"
                  onClick={() => setSelectedHub('mumbai')}
                >
                  <circle cx="190" cy="410" r="8" fill="#D4AF37" />
                  <text x="110" y="415" fill="#E6DDD8" className="node-label-sub">
                    Mumbai
                  </text>
                </g>

                {/* NODE: Delhi */}
                <g
                  className="map-node"
                  onClick={() => setSelectedHub('delhi')}
                >
                  <circle cx="270" cy="200" r="8" fill="#D4AF37" />
                  <text x="290" y="205" fill="#E6DDD8" className="node-label-sub">
                    New Delhi
                  </text>
                </g>

                {/* NODE: Kolkata */}
                <g
                  className="map-node"
                  onClick={() => setSelectedHub('kolkata')}
                >
                  <circle cx="420" cy="330" r="7" fill="#D4AF37" />
                  <text x="435" y="335" fill="#E6DDD8" className="node-label-sub">
                    Kolkata
                  </text>
                </g>
              </svg>
            </div>

            {/* Hub Detail Card */}
            <div className="hub-detail-card card-glass-maroon scroll-anim">
              <div className="hdc-header">
                <span className="eyebrow-royal">REGIONAL CORRIDOR SPECIFICATION</span>
                <h3 className="hdc-name text-gold-gradient">{hubs[selectedHub].name}</h3>
                <span className="hdc-role">{hubs[selectedHub].role}</span>
              </div>

              <div className="hdc-stats-cluster">
                <div className="hdc-stat">
                  <span className="hdc-stat-val text-gold">{hubs[selectedHub].coverage}</span>
                  <span className="hdc-stat-label">Market Coverage</span>
                </div>
                <div className="hdc-stat">
                  <span className="hdc-stat-val text-gold">{hubs[selectedHub].volume}</span>
                  <span className="hdc-stat-label">Production Allocation</span>
                </div>
              </div>

              <p className="hdc-desc">{hubs[selectedHub].desc}</p>

              <div className="hdc-cta">
                <button
                  className="btn-gold-royal"
                  onClick={() => onTabChange('partner')}
                >
                  Inquire for {hubs[selectedHub].name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Masonry Grid Timeline */}
      <section className="masonry-timeline-section">
        <div className="container">
          <div className="section-head-center scroll-anim">
            <span className="eyebrow-royal">HISTORICAL DOMINANCE</span>
            <h2 className="title-display">25 Years in the Making</h2>
            <p className="section-subtext">
              Key milestones shaping our identity as India’s foremost bespoke shirt manufacturer.
            </p>
          </div>

          <div className="masonry-grid">
            {milestones.map((m, i) => (
              <div key={m.year} className={`masonry-item card-glass-maroon item-${i + 1} scroll-anim`}>
                <div className="m-card-inner">
                  <div className="m-top-row">
                    <span className="m-year text-gold-gradient">{m.year}</span>
                    <span className="m-tag">{m.tag}</span>
                  </div>
                  <h3 className="m-title">{m.title}</h3>
                  <p className="m-desc">{m.desc}</p>
                  <div className="m-bottom-highlight">
                    <span className="m-bullet">✦</span>
                    <span className="m-metric">{m.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
