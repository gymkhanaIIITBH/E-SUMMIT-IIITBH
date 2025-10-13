import React from 'react'
function Loading() {
  return (
    <div className='font-futuristic flex flex-col items-center justify-center text-white  inset-0 bg-gray-950 absolute z-40 text-2xl ' >
      <div className='flex flex-col items-center justify-center'>

              <div>       <img height={300} className='z-50 relative  top-[-5%] animate-pulse' width={300} alt='logo' src={'/LibLogov1.png'}/>
             </div>
      
        <div className=' loader'></div>
      </div>

    </div>
  )
}

export default Loading