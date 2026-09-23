import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true)
    }, 2200)

    const endTimer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 2800)

    return () => {
      clearTimeout(timer)
      clearTimeout(endTimer)
    }
  }, [onComplete])

  return (
    <aside aria-label="Loading Page" className={`preloader-screen ${fading ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Animated Golden Needle & Thread Drawing SVG */}
        <div className="thread-canvas-wrap">
          <svg
            className="thread-svg"
            viewBox="0 0 300 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Gold Glow Filter */}
            <defs>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="goldThreadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBF0D2" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#9E7D22" />
              </linearGradient>
            </defs>

            {/* Crest Outer Shield / Oval */}
            <path
              d="M 150, 15 C 220, 15 260, 45 260, 100 C 260, 155 210, 185 150, 185 C 90, 185 40, 155 40, 100 C 40, 45 80, 15 150, 15 Z"
              stroke="url(#goldThreadGrad)"
              strokeWidth="1.5"
              strokeDasharray="800"
              strokeDashoffset="800"
              className="draw-crest"
            />

            {/* Golden Needle Silhouette */}
            <g className="needle-anim">
              <path
                d="M 150, 20 L 152, 45 L 148, 45 Z"
                fill="#F7E7B4"
                filter="url(#goldGlow)"
              />
              <circle cx="150" cy="24" r="1.2" fill="#3C0919" />
            </g>

            {/* Monogram 'FG' Continuous Thread Path */}
            {/* 'F' */}
            <path
              d="M 120, 65 L 120, 135 M 120, 68 L 150, 68 M 120, 98 L 142, 98"
              stroke="url(#goldThreadGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="draw-f"
              filter="url(#goldGlow)"
            />

            {/* 'G' */}
            <path
              d="M 185, 82 C 178, 68 160, 66 150, 78 C 138, 92 138, 115 152, 126 C 165, 134 182, 128 184, 114 L 165, 114"
              stroke="url(#goldThreadGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="350"
              strokeDashoffset="350"
              className="draw-g"
              filter="url(#goldGlow)"
            />
          </svg>
        </div>

        {/* Brand Reveal Typography */}
        <div className="preloader-text-wrap">
          <h2 className="preloader-brand">FAZIL GARMENTS</h2>
          <div className="preloader-sub">
            <span className="preloader-line"></span>
            <span className="preloader-tagline">25 YEARS OF WOVEN EXCELLENCE</span>
            <span className="preloader-line"></span>
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar"></div>
        </div>
      </div>
    </aside>
  )
}
