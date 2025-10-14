// import React from 'react'
import ProfileCard from './ProfileCard.tsx'
function TitleSponsorCard() {
     const handleClick = (url: string) => {

    if (url) {
      window.open(url, '_blank');  
    } else {
      console.log('err in opening site')
    }
  };
  const url='https://www.mahindra.com'


  return (
    <>
    <div className='text-4xl font-bold font-montserrat  text-[#e2696c]'>Our Title Sponsor</div>
    <ProfileCard
        showBehindGradient= {true}
        name="Mahindra"

        title="Tilkamanji, Bhagalpur"

        handle="Mahindra"

        status="Title Sponsor"

        contactText="Contact us"

        avatarUrl="/mahindra.png"

        showUserInfo={true}

        enableTilt={false}

        enableMobileTilt={false}

        onContactClick={() => handleClick(url)}
    
/>
    </>
  )
}

export default TitleSponsorCard