import { useState } from 'react'

import './App.css'
import Herosection from './components/Herosection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoldSponsors from './components/Sponsors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Herosection/>
      {/* <div className='h-96  w-full '> about</div> */}
      
      <AboutSection/>
      <GoldSponsors/>
      <Footer />
      
    </>
  )
}

export default App
