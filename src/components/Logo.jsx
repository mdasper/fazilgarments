import React from 'react';

export default function Logo({
  variant = 'full', // 'icon', 'full', 'stacked'
  size = 'md', // 'sm', 'md', 'lg', 'xl', or custom px number
  showMotto = true,
  animate = false,
  className = ''
}) {
  // Dimensions map
  const sizeStyles = {
    sm: { height: '36px', iconSize: 36, fontSize: '0.85rem' },
    md: { height: '48px', iconSize: 48, fontSize: '1rem' },
    lg: { height: '72px', iconSize: 72, fontSize: '1.35rem' },
    xl: { height: '120px', iconSize: 120, fontSize: '2rem' }
  };

  const currentSize = typeof size === 'number' ? { iconSize: size } : (sizeStyles[size] || sizeStyles.md);

  return (
    <div className={`fg-logo-container fg-logo-${variant} ${className}`}>
      {/* SVG Icon matching client's exact Fg + Red Arc logo */}
      <svg
        className={`fg-logo-svg ${animate ? 'animate-logo' : ''}`}
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fazil Garments Logo"
      >
        <defs>
          {/* Red Arc Gradient */}
          <linearGradient id="fgRedArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A81D24" />
            <stop offset="50%" stopColor="#8C161C" />
            <stop offset="100%" stopColor="#690E13" />
          </linearGradient>

          {/* Brown F Calligraphy Gradient */}
          <linearGradient id="fgBrownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#875336" />
            <stop offset="60%" stopColor="#6E4129" />
            <stop offset="100%" stopColor="#522E1A" />
          </linearGradient>

          {/* Blue g Calligraphy Gradient */}
          <linearGradient id="fgBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3558BE" />
            <stop offset="60%" stopColor="#244294" />
            <stop offset="100%" stopColor="#172C68" />
          </linearGradient>

          {/* Soft Drop Shadow for Luxury Depth */}
          <filter id="fgLogoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        <g filter="url(#fgLogoShadow)">
          {/* 1. Red Swoosh / Crescent Arc */}
          {/* Sweeps from top-left, around top-right, down the right side to bottom left */}
          <path
            d="M 125 42 
               C 175 38, 248 70, 258 140 
               C 268 210, 205 268, 130 268 
               C 85 268, 48 240, 32 208"
            stroke="url(#fgRedArcGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
            className="logo-red-arc"
          />

          {/* 2. Brown Cursive 'F' Monogram */}
          {/* Top flourish swirl */}
          <path
            d="M 72 178
               C 62 178, 54 170, 54 158
               C 54 140, 78 128, 100 115
               C 125 100, 150 78, 172 75
               C 192 72, 218 78, 222 92
               C 225 102, 215 106, 195 106
               C 152 106, 128 120, 116 138
               C 98 165, 82 208, 92 216
               C 100 222, 118 216, 138 206"
            stroke="url(#fgBrownGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-letter-f"
          />

          {/* F horizontal accent bar */}
          <path
            d="M 115 142 L 158 142"
            stroke="url(#fgBrownGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            className="logo-letter-f-bar"
          />

          {/* 3. Royal Blue Cursive 'g' Monogram */}
          {/* Loop + Descender curve */}
          <path
            d="M 148 182
               C 138 182, 126 198, 126 215
               C 126 235, 142 248, 162 248
               C 188 248, 216 220, 222 172
               C 228 128, 204 122, 172 138
               C 142 152, 138 180, 158 198
               C 178 216, 210 200, 218 178
               C 224 162, 205 240, 172 268
               C 152 285, 128 290, 120 274
               C 114 260, 122 242, 134 238"
            stroke="url(#fgBlueGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-letter-g"
          />
        </g>
      </svg>

      {/* Typography Block for Full / Stacked Variant */}
      {variant !== 'icon' && (
        <div className="fg-logo-text-block">
          <h1 className="fg-brand-title">FAZIL GARMENTS AND TEXTILES</h1>
          {showMotto && (
            <p className="fg-brand-motto">
              <span>Quality</span>
              <span className="motto-dot">•</span>
              <span>Craftsmanship</span>
              <span className="motto-dot">•</span>
              <span>Trust</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
