import { useEffect, useState } from 'react'
import './LiquidTransition.css'

export default function LiquidTransition({ isTransitioning }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (isTransitioning) {
      setActive(true)
    } else {
      const timer = setTimeout(() => setActive(false), 600)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  if (!active && !isTransitioning) return null

  return (
    <div className={`liquid-curtain-overlay ${isTransitioning ? 'curtain-entering' : 'curtain-leaving'}`}>
      <div className="curtain-panel panel-1" />
      <div className="curtain-panel panel-2" />
      <div className="curtain-panel panel-3" />
      <div className="curtain-thread-edge">
        <svg className="liquid-thread-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M 0, 10 Q 25, 0 50, 10 T 100, 10"
            stroke="url(#goldWipeGrad)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="goldWipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#997D25" />
              <stop offset="50%" stopColor="#F7E7B4" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
