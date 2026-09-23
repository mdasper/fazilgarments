import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Products.css'

export default function Products({ onTabChange }) {
  useScrollAnimation();
  const [activeBrand, setActiveBrand] = useState('all')

  const brands = [
    {
      id: 'leefa',
      name: 'LEEFA',
      tagline: 'Checked, Striped & Printed',
      fabric: 'Double-Side Laffer Fabric',
      fabricDesc: 'Ultra-soft texture inside & out',
      sleeves: 'Half-Sleeve & Full-Sleeve',
      sizes: 'Sizes 36 to 44',
      badge: 'Checked & Striped',
      badgeClass: 'badge-gold',
      img: '/assets/brand_leefa.jpg',
      video: '/assets/sample_tailor_video.webm',
      fullText: 'Experience the ultimate blend of style and exceptional comfort with LEEFA. Specializing in premium shirts, our collection features high-quality checked, striped, and printed designs, meticulously crafted from luxurious double-side laffer fabric. This specialized fabric offers an ultra-soft, rich texture on both the inside and outside, ensuring unparalleled comfort and a smooth, cozy feel against your skin all day long. Whether you are dressing up for work or keeping it casual for the weekend, our well-tailored shirts elevate your everyday wardrobe with a premium touch. Available in both half-sleeve and full-sleeve options, LEEFA guarantees a flawless fit for everyone, offering a comprehensive size range from 36 to 44.',
    },
    {
      id: 'mister-romeo',
      name: 'MISTER ROMEO',
      tagline: 'Premium Plain Shirts',
      fabric: 'Luster Venture Fabric',
      fabricDesc: 'Sophisticated finish & durability',
      sleeves: 'Half-Sleeve & Full-Sleeve',
      sizes: 'Sizes 36 to 44',
      badge: '25 to 30 Colors',
      badgeClass: 'badge-maroon',
      img: '/assets/brand_mister_romeo.jpg',
      video: '/assets/sample_weaving_video.webm',
      fullText: 'Make a striking impression with MISTER ROMEO, our exclusive line of premium plain shirts. Crafted from the elegant "Luster Venture" fabric, these shirts offer a sophisticated finish, exceptional durability, and a comfortable feel. Whether you prefer subtle light shades or deep, bold dark tones, MISTER ROMEO has you covered with an impressive palette of 25 to 30 vibrant colors to suit any occasion. Perfect for sharp office wear or a polished casual look, our collection is available in both half-sleeve and full-sleeve designs. Designed for the modern man, MISTER ROMEO guarantees a flawless, tailored fit for everyone, with sizes ranging from 36 to 44.',
    },
    {
      id: 'romance-look',
      name: 'ROMANCE LOOK',
      tagline: 'Quintessential White Shirts',
      fabric: 'Raymond White Polyester-Blend',
      fabricDesc: 'Crisp pristine look, easy care',
      sleeves: 'Half-Sleeve & Full-Sleeve',
      sizes: 'Sizes 36 to 44',
      badge: 'Raymond White',
      badgeClass: 'badge-blue',
      img: '/assets/brand_romance_look.jpg',
      video: '/assets/sample_tailor_video.webm',
      fullText: 'Embrace classic elegance with ROMANCE LOOK, our dedicated line of quintessential white shirts. Designed specifically for regular, everyday wear, these shirts are crafted from the highly durable "Raymond White" polyester-blend fabric. This ensures a crisp, pristine look that is easy to maintain without compromising on comfort or breathability. Whether you are dressing for daily office wear, uniform needs, or a formal event, ROMANCE LOOK provides the perfect, reliable staple for your wardrobe. Available in both half-sleeve and full-sleeve options, we guarantee a consistent, tailored fit for everyone with sizes ranging from 36 to 44.',
    },
    {
      id: 'nice-man-gold',
      name: 'NICE MAN GOLD',
      tagline: 'Sophistication White Line',
      fabric: 'Mono White & Linen White',
      fabricDesc: 'Sharp formal + breathable linen',
      sleeves: 'Half-Sleeve & Full-Sleeve',
      sizes: 'Sizes 36 to 44',
      badge: 'Mono & Linen White',
      badgeClass: 'badge-gold-dark',
      img: '/assets/brand_nice_man_gold.jpg',
      video: '/assets/sample_weaving_video.webm',
      fullText: 'Step into premium sophistication with NICE MAN GOLD. This exclusive collection features pristine white shirts meticulously crafted from two distinct, high-quality fabrics: "Mono White" and "Linen White." Our Mono White shirts offer a sharp, smooth finish that is perfect for achieving a crisp, authoritative formal appearance. For a more relaxed yet luxurious vibe, our Linen White shirts provide exceptional breathability and a rich, natural texture, ensuring you stay cool and elegant all day long. Available in versatile half-sleeve and full-sleeve options, NICE MAN GOLD delivers uncompromising comfort and a tailored fit for every gentleman, with a complete size range from 36 to 44.',
    },
  ]

  const filteredBrands = activeBrand === 'all'
    ? brands
    : brands.filter((b) => b.id === activeBrand)

  return (
    <div className="brands-page-compact">
      {/* Standard Full-Height Page Header */}
      <section className="page-header-bg-image">
        <div className="container phm-content">
          <span className="eyebrow-gold">FAZIL GARMENTS &amp; TEXTILES</span>
          <h1 className="section-title-white">Our 4 Signature Proprietary Brands</h1>
          <p className="phm-sub">
            Explore our specialized shirt label collections—engineered with premium Gujarat &amp; Surat fabrics, master craftsmanship, and sizes 36 to 44.
          </p>
        </div>
      </section>

      {/* Filter & Live Sample Preview Switcher Strip */}
      <section className="compact-filter-strip">
        <div className="container">
          {/* Brand Filter */}
          <div className="filter-pill-group">
            <button
              className={`filter-btn ${activeBrand === 'all' ? 'active' : ''}`}
              onClick={() => setActiveBrand('all')}
            >
              All Brands
            </button>
            {brands.map((b) => (
              <button
                key={b.id}
                className={`filter-btn ${activeBrand === b.id ? 'active' : ''}`}
                onClick={() => setActiveBrand(b.id)}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Neat 2x2 Grid Brands Showcase */}
      <section className="compact-brands-section">
        <div className="container">
          <div className="brands-grid-2x2">
            {filteredBrands.map((brand) => (
              <div key={brand.id} className="brand-compact-card card-white-elevated scroll-anim">
                {/* Media Section: Ultra-Smooth Cinematic Motion */}
                <div className="brand-card-media">
                  <div className="cinematic-media-container">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="brand-cinematic-img"
                    />
                    <div className="cinematic-light-sheen"></div>
                  </div>

                  <span className="card-img-badge-tag">{brand.badge}</span>
                </div>

                  {/* Content Section */}
                  <div className="brand-card-content">
                    <div className="brand-card-top">
                      <h2 className="brand-name-title">{brand.name}</h2>
                      <span className={`brand-sub-badge ${brand.badgeClass}`}>{brand.tagline}</span>
                    </div>

                    <p className="brand-description">{brand.fullText}</p>

                    {/* Specs Table */}
                    <div className="brand-mini-specs">
                      <div className="mini-spec-item">
                        <span className="mini-spec-label">Fabric:</span>
                        <strong className="mini-spec-val">{brand.fabric}</strong>
                      </div>
                      <div className="mini-spec-item">
                        <span className="mini-spec-label">Sleeves:</span>
                        <strong className="mini-spec-val">{brand.sleeves}</strong>
                      </div>
                      <div className="mini-spec-item">
                        <span className="mini-spec-label">Size Range:</span>
                        <strong className="mini-spec-val">{brand.sizes}</strong>
                      </div>
                      <div className="mini-spec-item">
                        <span className="mini-spec-label">Texture/Feature:</span>
                        <strong className="mini-spec-val">{brand.fabricDesc}</strong>
                      </div>
                    </div>

                    <button
                      className="btn-maroon-solid btn-full-width"
                      onClick={() => onTabChange('contact')}
                    >
                      Inquire Wholesale for {brand.name} →
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Comparison Matrix */}
      <section className="compact-matrix-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-maroon">WHOLESALE SPECIFICATIONS</span>
            <h2 className="section-title-serif">Brands Comparison Matrix</h2>
            <p className="section-subtext">Compare fabrics, patterns, and sleeve styles across all four labels.</p>
          </div>

          <div className="standards-table-wrap card-white-elevated">
            <table className="standards-table">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Primary Style</th>
                  <th>Fabric Technology</th>
                  <th>Color / Pattern Range</th>
                  <th>Sleeves &amp; Sizes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>LEEFA</strong></td>
                  <td>Checked, Striped &amp; Printed</td>
                  <td><span className="badge-pass">Double-Side Laffer Fabric</span></td>
                  <td>Checked, Striped &amp; Printed Patterns</td>
                  <td>Half &amp; Full Sleeve (Sizes 36-44)</td>
                </tr>
                <tr>
                  <td><strong>MISTER ROMEO</strong></td>
                  <td>Exclusive Plain Formal Shirts</td>
                  <td><span className="badge-pass">Luster Venture Fabric</span></td>
                  <td>25 to 30 Vibrant Colors</td>
                  <td>Half &amp; Full Sleeve (Sizes 36-44)</td>
                </tr>
                <tr>
                  <td><strong>ROMANCE LOOK</strong></td>
                  <td>Quintessential White Shirts</td>
                  <td><span className="badge-pass">Raymond White Polyester-Blend</span></td>
                  <td>Crisp Pristine Raymond White</td>
                  <td>Half &amp; Full Sleeve (Sizes 36-44)</td>
                </tr>
                <tr>
                  <td><strong>NICE MAN GOLD</strong></td>
                  <td>Sophistication White Line</td>
                  <td><span className="badge-pass">Mono White &amp; Linen White</span></td>
                  <td>Formal Smooth &amp; Rich Linen White</td>
                  <td>Half &amp; Full Sleeve (Sizes 36-44)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Centered CTA Banner */}
      <section className="products-cta-banner">
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
                Request B2B Quotation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
