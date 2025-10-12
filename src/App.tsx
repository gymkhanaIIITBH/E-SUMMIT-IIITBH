import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SponsorsPage from './components/SponsorsPage'
import SponsorForm from './components/SponsorFormPage'
import AboutSection from './components/AboutSection'
import Teams from './pages/Teams'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/sponsorform" element={<SponsorForm />} />
        <Route path="/team" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
