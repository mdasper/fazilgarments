import { useState, useEffect } from 'react'
import useGlobalScroll from './hooks/useGlobalScroll'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeScreen from './components/WelcomeScreen'
import WhatsAppFloat from './components/WhatsAppFloat'

import Home from './pages/Home'
import About from './pages/About'
import Process from './pages/Process'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Partner from './pages/Partner'
import Legacy from './pages/Legacy'

import './index.css'

export default function App() {
  useGlobalScroll()
  const [activeTab, setActiveTab] = useState('home')
  const [showWelcome, setShowWelcome] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setIsTransitioning(true)
    
    // Wait for fade out, then change tab and fade in
    setTimeout(() => {
      setActiveTab(newTab)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <>
      {showWelcome && <WelcomeScreen />}
      
      <div className="app-container">
        {/* 1. Header Navigation */}
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        {/* 2. Main Tabbed Page View with Transition */}
        <main className={`main-content ${isTransitioning ? 'page-fade-out' : 'page-fade-in'}`}>
          {activeTab === 'home' && <Home onTabChange={handleTabChange} />}
          {activeTab === 'about' && <About onTabChange={handleTabChange} />}
          {activeTab === 'process' && <Process onTabChange={handleTabChange} />}
          {activeTab === 'products' && <Products onTabChange={handleTabChange} />}
          {activeTab === 'partner' && <Partner />}
          {activeTab === 'legacy' && <Legacy />}
          {activeTab === 'contact' && <Contact />}
        </main>

        {/* 3. Footer */}
        <Footer onTabChange={handleTabChange} />
        
        {/* 4. Global WhatsApp Float */}
        <WhatsAppFloat />
      </div>
    </>
  )
}
