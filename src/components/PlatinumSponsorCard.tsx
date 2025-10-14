// // import React from 'react'
// import GlareHover from './GlareHover.jsx'
// import Card from './card-05.tsx'
// function PlatinumSponsorCard() {
//       const handleClick = (url: string, ) => {
   
//     if (url) {
//       window.open(url, '_blank');  
//     } else {
//       console.log('err in opening site')
//     }
//   };
//   const url='https://online.kfc.co.in'
//   return (
//     <div >
//         <div className='text-4xl text-[#94bce9] text-center mb-4'>Platinum Sponsors</div>
//     <div onClick={()=>handleClick(url)}>
//           <GlareHover
//             onClick={()=> handleClick(url)}
//             glareColor="#c9e0fa"
            
//             glareOpacity={0.3}
//             className='max-w-md p-2'
//             glareAngle={-30}

//             glareSize={300}

//             transitionDuration={800}

//             playOnce={false}

//         >

//             <h2 onClick={()=>handleClick(url)} className='bg-[]'  style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
//                 <Card name='KFC' image='/kfc.png' site='www.online.kfc.co.in'/>
                

//             </h2>

//         </GlareHover>

//     </div>
//     </div>
//   )
// }

// export default PlatinumSponsorCard