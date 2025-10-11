import { useState } from 'react'

import './App.css'
import Herosection from './components/Herosection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Herosection/>
      {/* <div className='h-96  w-full '> about</div> */}
      <AboutSection/>
      <Footer />
    </>
  )
}

export default App
