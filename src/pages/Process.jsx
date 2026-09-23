import useScrollAnimation from '../hooks/useScrollAnimation'
import './Process.css'

export default function Process({ onTabChange }) {
  useScrollAnimation();

  const steps = [
    {
      stepNum: '01',
      title: 'Raw Material Sourcing',
      location: 'Surat & Ahmedabad Mills',
      img: '/assets/process_step1_raw_fabric.jpg',
      desc: 'Everything begins with the finest woven fabric rolls. We import pure combed compact cotton, linen blends, and textured twills directly from vetted textile mills in Gujarat. Each bale is laboratory-checked for thread count, GSM consistency, and colorfastness.',
      checkpoints: [
        'Direct mill sourcing bypassing trading agents',
        '100% compact cotton, 50s to 100s yarn counts',
        'Pre-shrinking and shrinkage allowance testing',
        'Visual inspection under calibrated daylight lamps',
      ],
    },
    {
      stepNum: '02',
      title: 'CAD Multi-Ply Precision Cutting',
      location: 'Industrial Automated Cutting Floor',
      img: '/assets/process_step2_cad_cutting.jpg',
      desc: 'Fabric rolls are spread flat across 30-meter vacuum cutting tables in dozens of multi-ply layers. Computer-Aided Design (CAD) pattern markers align stripes, checks, and grainlines with ±0.2mm mathematical accuracy to eliminate uneven panels.',
      checkpoints: [
        'Automated multi-ply fabric spreading tables',
        'Computerized digital pattern plotting and grading',
        'Micro-serrated high-speed precision cutting knives',
        'Zero measurement variance across chest and collar',
      ],
    },
    {
      stepNum: '03',
      title: 'Master Artisan Tailoring & Assembly',
      location: '50+ Artisan Tailor Lines',
      img: '/assets/process_step3_tamil_tailor.jpg',
      desc: 'Our assembly floor operates dedicated specialized lines. Front plackets, back yokes, sleeve gauntlets, and collars are crafted simultaneously by seasoned master tailors using high-speed Japanese lockstitch and twin-needle machines.',
      checkpoints: [
        'High-density 14 stitches per inch (SPI) seam standard',
        'German thermo-fusing interlining for crisp collars & cuffs',
        'Reinforced side seams with gusset protection',
        'Synchronized thread tension to prevent puckering',
      ],
    },
    {
      stepNum: '04',
      title: '100-Point Quality Inspection',
      location: 'Final QC & Steam Finishing Floor',
      img: '/assets/process_step4_quality_check.jpg',
      desc: 'Before a shirt is accepted, it passes through a 100-point physical inspection audit. Inspectors verify button-pull strength, seam tightness, collar symmetry, and loose thread trimming before subjecting each shirt to high-pressure steam pressing.',
      checkpoints: [
        '100-point rigorous physical checklist',
        'Automated button-sew tension and knot security checks',
        'Industrial steam mannequin press for crisp finish',
        'Instant rejection and isolation of any flawed garment',
      ],
    },
    {
      stepNum: '05',
      title: 'Custom OEM Branding & Box Packaging',
      location: 'Packaging & Private Labeling Wing',
      img: '/assets/process_step5_fazil_packaging.jpg',
      desc: 'We tailor the finishing completely to your retail brand. We attach custom woven neck labels, care tags, barcoded price tags, and butterfly collar supports, folding each shirt into retail poly-bags and luxury presentation boxes.',
      checkpoints: [
        'Custom woven brand labels & embossed hang tags',
        'Butterfly collar insert and cardboard spine stiffener',
        'Clear heavy-gauge retail poly-bag sealing',
        'Luxury embossed brand presentation boxes (optional)',
      ],
    },
    {
      stepNum: '06',
      title: 'Master Carton Dispatch & Logistics',
      location: 'Tamil Nadu & Pan-India Supply Grid',
      img: '/assets/process_step6_fazil_dispatch.jpg',
      desc: 'Finished shirts are sorted by size ratios, packed into heavy-duty corrugated master export cartons, and dispatched via our dedicated transport partnerships across all 32 districts of Tamil Nadu and major distribution corridors in India.',
      checkpoints: [
        'Standard master carton packaging (48 to 96 units/carton)',
        'Barcoded carton labels for seamless inventory tracking',
        'Daily express transport connections across Tamil Nadu',
        'Pan-India road and rail freight logistics coverage',
      ],
    },
  ]

  return (
    <div className="process-page-clean">
      {/* Header Banner */}
      <section className="page-header-bg-image">
        <div className="container phm-content">
          <h1 className="section-title-white">Our Complete Manufacturing Process</h1>
          <p className="phm-sub">
            From raw cotton bundles imported from Surat &amp; Ahmedabad to custom boxed shirts ready for retail shelves. Every single step handled in-house.
          </p>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section className="process-steps-section">
        <div className="container">
          <div className="steps-flow-container">
            {steps.map((s, index) => (
              <div
                key={s.stepNum}
                className={`step-flow-row scroll-anim ${index % 2 !== 0 ? 'step-reverse' : ''}`}
              >
                {/* Media Side */}
                <div className="step-media-side">
                  <div className="step-image-wrap">
                    <img src={s.img} alt={s.title} className="step-flow-img" />
                    <span className="step-number-badge">STEP {s.stepNum}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="step-content-side">
                  <span className="step-location-tag">{s.location}</span>
                  <h2 className="step-flow-title">{s.title}</h2>
                  <p className="step-flow-desc">{s.desc}</p>

                  <div className="step-checkpoints-card card-white-elevated">
                    <h4 className="checkpoints-heading">Key Quality Standards:</h4>
                    <ul className="checkpoints-list">
                      {s.checkpoints.map((cp, cpi) => (
                        <li key={cpi}>
                          <span className="check-bullet">✓</span>
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="process-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <span className="eyebrow-white">QUALITY YOU CAN TRUST</span>
            <h2 className="section-title-white">Want to Inspect Our Production Samples?</h2>
            <p className="cta-banner-sub centered-subtext">
              We dispatch sample swatches, pre-production trial shirts, and size charts directly to wholesale buyers.
            </p>
            <div className="cta-buttons-row centered-buttons">
              <button
                className="btn-white-solid"
                onClick={() => onTabChange('contact')}
              >
                Request Sample Batch
              </button>
              <button
                className="btn-maroon-solid"
                onClick={() => onTabChange('products')}
              >
                View Shirt Specifications
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
