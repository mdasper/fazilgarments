import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Partner.css'

export default function Partner() {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: 'Tamil Nadu',
    fabric: 'Compact Combed Cotton (Surat)',
    collar: 'Cutaway Italian Spread',
    volume: '2,000 Units',
    branding: true,
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Calculate live dynamic price estimate
  const getEstimate = () => {
    let base = 420
    if (formData.fabric.includes('Giza')) base = 650
    if (formData.fabric.includes('Linen')) base = 540
    if (formData.fabric.includes('Dobby')) base = 490

    if (formData.branding) base += 35
    if (formData.volume.includes('5,000')) base *= 0.88
    if (formData.volume.includes('2,000')) base *= 0.94

    return Math.round(base)
  }

  return (
    <div className="partner-page-wrap">
      {/* Hero Header */}
      <section className="page-header-bg-image">
        <div className="container partner-hero-content scroll-anim">
          <span className="eyebrow-royal">B2B CONTRACT MANUFACTURING</span>
          <h1 className="title-display">
            Partner with <br />
            <span className="text-gold-gradient">Fazil Garments.</span>
          </h1>
          <p className="partner-hero-sub">
            Direct mill sourcing, CAD precision cutting, 50+ master tailors, and end-to-end custom branding under your label. Configure your bulk order specifications below.
          </p>
        </div>
      </section>

      {/* Main Interactive Configurator & Form Split */}
      <section className="configurator-section">
        <div className="container">
          <div className="configurator-grid">
            {/* Left: Interactive OEM Spec Estimator */}
            <div className="config-estimator-card card-glass-maroon scroll-anim">
              <div className="cec-head">
                <span className="eyebrow-royal">LIVE OEM SPEC CONFIGURATOR</span>
                <h3 className="cec-title">Bulk Shirt Calculator</h3>
                <p className="cec-sub">Select your desired parameters to view estimated wholesale costing.</p>
              </div>

              {/* Parameter 1: Fabric Selection */}
              <div className="config-group">
                <label className="config-label">1. RAW MATERIAL GRADE</label>
                <div className="config-options-grid">
                  {[
                    'Compact Combed Cotton (Surat)',
                    'Ahmedabad Linen-Cotton Blend',
                    'Royal Egyptian Giza Cotton',
                    'Luxury Textured Dobby Weave',
                  ].map((fab) => (
                    <button
                      type="button"
                      key={fab}
                      className={`opt-btn ${formData.fabric === fab ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, fabric: fab })}
                    >
                      <span>{fab}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Collar & Cuff Construction */}
              <div className="config-group">
                <label className="config-label">2. COLLAR ARCHITECTURE</label>
                <div className="config-options-grid">
                  {[
                    'Cutaway Italian Spread',
                    'Classic English Point',
                    'Modern Mandarin Band',
                    'Semi-Spread Button Down',
                  ].map((col) => (
                    <button
                      type="button"
                      key={col}
                      className={`opt-btn ${formData.collar === col ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, collar: col })}
                    >
                      <span>{col}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Volume Tier */}
              <div className="config-group">
                <label className="config-label">3. WHOLESALE VOLUME TIER</label>
                <div className="config-options-grid">
                  {['500 Units (Pilot)', '2,000 Units (Regional)', '5,000+ Units (National)'].map((vol) => (
                    <button
                      type="button"
                      key={vol}
                      className={`opt-btn ${formData.volume === vol ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, volume: vol })}
                    >
                      <span>{vol}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 4: OEM Branding Packaging */}
              <div className="config-group">
                <label className="config-label">4. BRANDING &amp; PACKAGING</label>
                <div
                  className={`toggle-box ${formData.branding ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, branding: !formData.branding })}
                >
                  <div className="tb-switch">
                    <div className="tb-handle" />
                  </div>
                  <div className="tb-text">
                    <strong>Full OEM Packaging Included</strong>
                    <span>Woven labels, hangtags, polybag, &amp; embossed presentation box</span>
                  </div>
                </div>
              </div>

              {/* Live Price Estimation Footer */}
              <div className="config-estimate-footer">
                <div className="cef-left">
                  <span className="cef-label">INDICATIVE UNIT ESTIMATE</span>
                  <div className="cef-price-row">
                    <span className="cef-currency">₹</span>
                    <span className="cef-val text-gold-gradient">{getEstimate()}</span>
                    <span className="cef-unit">/ garment</span>
                  </div>
                  <span className="cef-note">Ex-factory Tamil Nadu · Subject to final GSM &amp; specs</span>
                </div>
              </div>
            </div>

            {/* Right: Direct B2B RFP Form */}
            <div className="b2b-form-card card-glass-maroon scroll-anim">
              <span className="eyebrow-royal">OFFICIAL PROCUREMENT RFP</span>
              <h3 className="form-title">Request B2B Quotation</h3>
              <p className="form-desc">
                Our executive wholesale team will formulate a tailored quotation within 24 business hours.
              </p>

              {submitted ? (
                <div className="form-success-state">
                  <div className="success-crest">✦</div>
                  <h4 className="success-head text-gold-gradient">INQUIRY DISPATCHED</h4>
                  <p className="success-body">
                    Thank you, <strong>{formData.name}</strong> of <strong>{formData.company}</strong>. Your requirement for <strong>{formData.volume}</strong> has been assigned to our senior production manager.
                  </p>
                  <button
                    className="btn-gold-royal"
                    onClick={() => setSubmitted(false)}
                  >
                    Configure Another Order
                  </button>
                </div>
              ) : (
                <form className="rfp-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>CONTACT PERSON *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>COMPANY / RETAIL BRAND *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Apparel Chains"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>CORPORATE EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>PHONE / WHATSAPP *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 86109 49429"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>TARGET SUPPLY REGION</label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    >
                      <option value="Tamil Nadu">Tamil Nadu (All 32 Districts)</option>
                      <option value="Western India">Western India (Maharashtra, Gujarat, Goa)</option>
                      <option value="Northern India">Northern India (Delhi NCR, Punjab, UP)</option>
                      <option value="Southern India">Southern India (Karnataka, Kerala, AP, Telangana)</option>
                      <option value="Eastern India">Eastern India (West Bengal, Odisha, Assam)</option>
                      <option value="Export / International">Export / International Shipment</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>ADDITIONAL PRODUCTION SPECIFICATIONS</label>
                    <textarea
                      rows="3"
                      placeholder="Specify custom GSM, embroidery requirements, delivery timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-gold-royal submit-btn">
                    <span>Submit B2B RFP Request</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
