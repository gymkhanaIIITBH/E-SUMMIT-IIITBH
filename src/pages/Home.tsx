
import Herosection from '../components/Herosection'
import GoldSponsors from '../components/Sponsors'
import AboutSection from '../components/AboutSection';
import BrochureSection from '../components/BrochureSection';
import Speaker from '../components/Speaker';
import Events
 from '../components/Event';
const Home = () => {
  return (
    <div>
        
        <Herosection/>
        <AboutSection/>
        <GoldSponsors/>
        <Events />
        <BrochureSection/>
        <Speaker/>

    </div>
  )
}

export default Home