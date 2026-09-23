import { useEffect, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true)
      return
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => setClicked(true)
    const onMouseUp = () => setClicked(false)

    const onMouseLeave = () => setHidden(true)
    const onMouseEnter = () => setHidden(false)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.body.addEventListener('mouseleave', onMouseLeave)
    document.body.addEventListener('mouseenter', onMouseEnter)

    // Check hovered elements
    const handleOver = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, .hover-trigger, .card-glass-maroon')
      if (target) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    window.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.body.removeEventListener('mouseleave', onMouseLeave)
      document.body.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [])

  // Smooth lerp for outer gold ring
  useEffect(() => {
    let animationFrameId
    const follow = () => {
      setTrailerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }))
      animationFrameId = requestAnimationFrame(follow)
    }
    animationFrameId = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(animationFrameId)
  }, [pos])

  if (hidden) return null

  return (
    <>
      <div
        className={`cursor-dot ${clicked ? 'cursor-clicked' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      <div
        className={`cursor-ring ${hovered ? 'cursor-hovered' : ''} ${clicked ? 'cursor-clicked' : ''}`}
        style={{ transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0)` }}
      />
    </>
  )
}
