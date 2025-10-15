
function Loading() {
  return (
    <div className='font-futuristic fixed inset-0 bg-[#111711] flex items-center justify-center text-white z-50 text-2xl'>
      <div className='flex flex-col items-center justify-center'>
        {/*
              <div>       <img height={300} className='z-50 relative  top-[-5%] animate-pulse' width={300} alt='' src={'/LibLogov1.png'}/>
             </div>
        */}
        <div className="loader"></div>
      </div>

    </div>
  )
}

export default Loading