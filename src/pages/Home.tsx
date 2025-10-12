
import Herosection from '../components/Herosection'
import GoldSponsors from '../components/Sponsors'
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrochureSection from '../components/BrochureSection';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <AboutSection/>
        <GoldSponsors/>
        <BrochureSection/>
        <Footer/>

    </div>
  )
}

export default Home