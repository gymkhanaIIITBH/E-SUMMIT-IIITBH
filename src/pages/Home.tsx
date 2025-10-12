
import Herosection from '../components/Herosection'
import GoldSponsors from '../components/Sponsors'
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrochureSection from '../components/BrochureSection';
import Speaker from '../components/Speaker';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <AboutSection/>
        <GoldSponsors/>
        <BrochureSection/>
        <Speaker/>
        <Footer/>

    </div>
  )
}

export default Home