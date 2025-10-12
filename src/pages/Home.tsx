
import Herosection from '../components/Herosection'
import GoldSponsors from '../components/Sponsors'
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <AboutSection/>
        <GoldSponsors/>
        <Footer/>

    </div>
  )
}

export default Home