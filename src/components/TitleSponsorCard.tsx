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
  const url='https://esummit.iiitbh.ac.in'

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

        onContactClick={() => handleClick(url)}
    
/>
    </>
  )
}

export default TitleSponsorCard