import React, { useEffect, useState } from 'react';
import './WelcomeScreen.css';

export default function WelcomeScreen() {
  const [fade, setFade] = useState('');

  useEffect(() => {
    // Start smooth fade out after 2.6 seconds
    const timer = setTimeout(() => {
      setFade('fade-out');
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-screen ${fade}`} role="dialog" aria-label="Welcome Screen">
      {/* Premium Dark Velvet & Gold Ambient Glows */}
      <div className="welcome-aura-glow aura-maroon"></div>
      <div className="welcome-aura-glow aura-gold"></div>
      <div className="welcome-vignette-overlay"></div>

      <div className="welcome-content-card">
        {/* Luxury Glowing Crest Frame for Client Logo */}
        <div className="welcome-logo-halo">
          <div className="halo-ring-outer"></div>
          <div className="halo-ring-inner"></div>
          
          <div className="welcome-logo-box">
            <img
              src="/assets/client_logo_clean.png"
              alt="Fazil Garments & Textiles Logo"
              className="welcome-logo-img"
            />
          </div>
        </div>

        {/* Brand Name Typography */}
        <div className="welcome-brand-group">
          <h1 className="welcome-brand-title">
            FAZIL GARMENTS <span className="ampersand">&amp;</span> TEXTILES
          </h1>
          <div className="welcome-gold-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="welcome-brand-motto">
            <span>Quality</span>
            <span className="motto-dot">•</span>
            <span>Craftsmanship</span>
            <span className="motto-dot">•</span>
            <span>Trust</span>
          </p>
        </div>

        {/* Neat & Subtle Badge (No loading bar!) */}
        <div className="welcome-badge-pill">
          <span className="pill-dot"></span>
          <span className="pill-text">25+ YEARS OF WOVEN EXCELLENCE</span>
        </div>
      </div>
    </div>
  );
}
