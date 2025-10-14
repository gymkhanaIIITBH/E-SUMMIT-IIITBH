// import React from 'react'
// import GlareHover from './GlareHover.tsx'
import ProfileCard from './ProfileCard.tsx';
// import Card from './card-05.tsx'
function PlatinumSponsorCard() {
      const handleClick = (url: string, ) => {
   
    if (url) {
      window.open(url, '_blank');  
    } else {
      console.log('err in opening site')
    }
  };
  // const url='https://online.kfc.co.in'
  
  // const PlatSponsor=[
  //   {name:'Aakash Institute',address:'Adamgarh, Bhagalpur,Bihar',banner:'/aakashBanner.jpeg', url: 'https://aakash.ac.in', bgCo:'#0a1f43', img: '/Akash-logo.png'},
  //   {name:'KFC', url: 'https://online.kfc.co.in',address:'Tilkamanji Chowk, Bhagalpur',banner:"/kfcBanner.jpg", bgCo: '#762527' , img: '/kfc.png'}
  // ]
  const dummy=[
    {name: 'Coming Soon', address:"Coming Soon", url:'https://esummit.iiitbh.ac.in', img:'/coming.png'}
  ]

  return (
    <div >
        <div className='text-4xl text-[#94bce9] text-center mb-4'>Platinum Sponsors</div>
        <div className='flex items-center justify-center flex-wrap'>
        {dummy.map((s)=>(
                
      <ProfileCard
        showBehindGradient= {true}
        name={s.name}
        className='text-white mx-6 my-6'
        
        
        title={s.address}
        
        handle={s.name}

        status="Platinum Sponsor"

        contactText="Visit Site"

        // avatarUrl={s.banner}
        miniAvatarUrl={s.img}
        showUserInfo={true}

        enableTilt={false}

        enableMobileTilt={false}
          

        
        onContactClick={() => handleClick(s.url)}
      />
      
      ))}
    </div>
    </div>
  )
}

export default PlatinumSponsorCard