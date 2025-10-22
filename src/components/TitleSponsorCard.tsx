// import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard.tsx'
function TitleSponsorCard() {
        const navigate = useNavigate();
    
  const handleClick = (url: string) => {
    if(url=='coming soon'){
      navigate('/sponsorform');
      setTimeout(() => {
          {
              const el = document.getElementById("contact-us");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100); 
    }else{window.open(url, '_blank');  }
    // if (url) {
    //   
    // } else {
    //   console.log('err in opening site')
    // }
  };
  // const url='https://esummit.iiitbh.ac.in/sponsorform'

  // const dummy=[
  //   {name: 'Coming Soon', address:"Coming Soon", url:'https://esummit.iiitbh.ac.in', img:'/coming.png'}
  // ]
  return (
    <>
    <div className='text-4xl font-bold font-montserrat  text-[#008000]'>Our Title Sponsor</div>
    <ProfileCard
        showBehindGradient= {true}
        name="Coming Soon"
        innerGradient='linear-gradient(145deg, #5F2A63 0%, #B17EB3 100%)'
        title="Coming Soon"

        handle="Coming Soon"

        status="Title Sponsor"

        contactText="Contact us"

        avatarUrl="/coming.png"

        showUserInfo={true}

        enableTilt={false}

        enableMobileTilt={false}

        onContactClick={() => handleClick('coming soon')}
    
/>
    </>
  )
}

export default TitleSponsorCard