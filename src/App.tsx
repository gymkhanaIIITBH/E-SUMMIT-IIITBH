import './App.css'
import Herosection from './components/Herosection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoldSponsors from './components/Sponsors'
// import TeamCard from './components/TeamCard'
// import Teams from './pages/Teams'
import BrochureSection from './components/BrochureSection'

function App() {


  return (
    <>
    <Navbar />
      <Herosection/>
      {/* <div className='h-96  w-full '> about</div> */}
      
      <AboutSection/>
      {/* <Teams/> */}
      <GoldSponsors/>
      <BrochureSection/>
      <Footer />
   
      
    </>
  )
}

export default App
