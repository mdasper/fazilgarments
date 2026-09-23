import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

export default function Contact() {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page-clean">
      {/* Page Header */}
      <section className="page-header-bg-image">
        <div className="container phm-content">
          <h1 className="section-title-white">Contact Fazil Garments</h1>
          <p className="phm-sub">
            Speak directly with our manufacturing managers. Request bulk pricing, custom OEM samples, or visit our Tamil Nadu factory.
          </p>
        </div>
      </section>

      {/* Main Form & Factory Info Split */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side: Direct Contact Details & Info (Dark Theme) */}
            <div className="contact-info-col dark-theme-panel scroll-anim">
              <div className="contact-info-header">
                <span className="eyebrow-white">DIRECT PROCUREMENT DESK</span>
                <h2 className="section-title-white">We Are Ready to Fulfill Your Bulk Supply.</h2>
              </div>

              <div className="contact-cards-stack">
                <div className="c-info-card">
                  <div className="c-icon-badge">📍</div>
                  <div>
                    <strong className="c-card-title">Factory &amp; Central Operations</strong>
                    <p className="c-card-text">
                      36-53 H, R.M.S.COMPLEX, ASHOK NAGAR, NATHAM, DINDIGUL, TAMILNADU- 624401
                    </p>
                  </div>
                </div>

                <div className="c-info-card">
                  <div className="c-icon-badge">📞</div>
                  <div>
                    <strong className="c-card-title">Phone &amp; WhatsApp Direct</strong>
                    <p className="c-card-text">
                      <a href="tel:+918610949429" style={{ color: 'inherit', textDecoration: 'none' }}>
                        +91 86109 49429
                      </a>
                    </p>
                  </div>
                </div>

                <div className="c-info-card">
                  <div className="c-icon-badge">✉️</div>
                  <div>
                    <strong className="c-card-title">Official Corporate Email</strong>
                    <p className="c-card-text">
                      <a href="mailto:fazilgarment123@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        fazilgarment123@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Wholesale Quote RFP Form */}
            <div className="contact-form-col scroll-anim">
              <div className="form-container-card card-white-elevated">
                <span className="eyebrow-maroon">OFFICIAL INQUIRY FORM</span>
                <h3 className="form-heading-serif">Request Wholesale Quotation</h3>
                <p className="form-sub-lead">
                  Fill in your order requirements to receive our comprehensive B2B rate card.
                </p>

                {submitted ? (
                  <div className="form-success-message">
                    <div className="success-check-icon">✓</div>
                    <h4 className="success-title">Inquiry Received Successfully!</h4>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. Our senior production manager has received your requirement for <strong>{formData.quantity}</strong> and will contact you via phone/WhatsApp today.
                    </p>
                    <button
                      className="btn-maroon-solid"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rfp-clean-form">
                    <div className="form-clean-field">
                      <label>Your Name / Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Murugan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-clean-row">
                      <div className="form-clean-field">
                        <label>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 86109 49429"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-clean-field">
                        <label>Corporate / Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="buyer@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-clean-field">
                      <label>Estimated Order Quantity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 500 Units"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>

                    <div className="form-clean-field">
                      <label>Your Message / Additional Requirements</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your specific needs, timelines, or any other details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-maroon-solid btn-full-submit">
                      <span>Submit Wholesale Inquiry</span>
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
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
