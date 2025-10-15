import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SponsorsPage from './components/SponsorsPage'
import SponsorForm from './components/SponsorFormPage'
import AboutSection from './components/AboutSection'
import Teams from './pages/Teams'
import Footer from './components/Footer'
import EventPage from './components/EventPage'
import Loading from './components/LoaderV3'
import { useEffect, useState } from 'react'

function AppInner() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  // Disable/enable scrolling while loading
  useEffect(() => {
    if (loading) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [loading])

  // On initial mount wait for window load event (images/fonts)
  useEffect(() => {
    function handleLoaded() {
      // keep a small minimum for smooth UX
      setTimeout(() => setLoading(false), 300)
    }

    if (document.readyState === 'complete') {
      handleLoaded()
    } else {
      window.addEventListener('load', handleLoaded)
      return () => window.removeEventListener('load', handleLoaded)
    }
  }, [])

  // Show loader on route change until next paint/microtask finishes
  useEffect(() => {
    // skip initial route change which is handled above
    setLoading(true)
    // Wait for next frame + small debounce to let route component start loading
    const t = requestAnimationFrame(() => {
      // ensure at least 250ms loader for perceived performance
      setTimeout(() => setLoading(false), 250)
    })
    return () => cancelAnimationFrame(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/sponsorform" element={<SponsorForm />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
