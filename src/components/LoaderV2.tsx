
function Loading() {
  return (
    <div className='font-futuristic flex flex-col items-center justify-center text-white  inset-0 from-black bg-gradient-to-b to-90% via-black to-green-800  absolute z-40 text-2xl ' >
      <div className='flex flex-col items-center justify-center'>
{/* 
              <div>       <img height={300} className='z-50 relative  top-[-5%] animate-pulse' width={300} alt='' src={'/LibLogov1.png'}/>
             </div>
       */}

            <div className="terminal-loader">
            <div className="terminal-header">
                <div className="terminal-title">Status</div>
                <div className="terminal-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
                </div>
            </div>
            <div className="text">Loading...</div>
            </div>

      </div>

    </div>
  )
}

export default Loading