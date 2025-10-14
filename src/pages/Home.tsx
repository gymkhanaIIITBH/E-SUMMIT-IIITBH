
// import Herosection from '../components/Herosection'
import GoldSponsors from '../components/Sponsors'
import AboutSection from '../components/AboutSection';
import BrochureSection from '../components/BrochureSection';
import Speaker from '../components/Speaker';
import Events from '../components/Event';
import { lazy, Suspense } from 'react';
import Loading from '@/components/LoaderV3';
const Herosection = lazy(() => import('../components/Herosection'));
const Home = () => {
  return (
    <div>
        <Suspense fallback={<Loading/>}>
          <Herosection/>
        </Suspense>
        
        <AboutSection/>
        <GoldSponsors/>
        <Events />
        <BrochureSection/>
        <Speaker/>

    </div>
  )
}

export default Home