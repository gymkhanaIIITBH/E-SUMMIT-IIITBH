// import React from 'react'
import GlareHover from './GlareHover.tsx'
import Card from './card-05.tsx'
function PlatinumSponsorCard() {
      const handleClick = (url: string, ) => {
   
    if (url) {
      window.open(url, '_blank');  
    } else {
      console.log('err in opening site')
    }
  };
  const url='https://online.kfc.co.in'
  
  const PlatSponsor=[
    {name:'Aakash Institute', url: 'https://aakash.ac.in', bgCo:'#0a1f43', img: '/Akash-logo.png'},
    {name:'KFC', url: 'https://online.kfc.co.in', bgCo: '#762527' , img: '/kfc.png'}
  ]

  return (
    <div >
        <div className='text-4xl text-[#94bce9] text-center mb-4'>Platinum Sponsors</div>
        <div className='flex items-center justify-center flex-wrap'>
        {PlatSponsor.map((s)=>(
                
    <div onClick={()=>handleClick(s.url)}>
          <GlareHover
            
            glareColor="#c0c0c0"
            
            glareOpacity={0.3}
            className='max-w-md mx-6 my-6 h-full p-2'
            glareAngle={-30}

            glareSize={300}

            transitionDuration={800}

            playOnce={false}

        >

            <h2 onClick={()=>handleClick(url)} className='bg-[] h-full '  style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
                <Card name={s.name} image={s.img} bgC={s.bgCo} site={s.url}/>
                

            </h2>

        </GlareHover>

    </div>))}
    </div>
    </div>
  )
}

export default PlatinumSponsorCard