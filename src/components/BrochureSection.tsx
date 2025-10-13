import BrochureCover from '../assets/BrochureCover.png'
function BrochureSection() {
  return (
    <div className='relative bg-black h-auto flex flex-col justify-center items-center w-full'>
      <div className=" text-center relative mt-18 flex items-center-safe justify-center-safe w-fit  text-white  text-5xl text-bold font-futuristic
        after:block after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-500">Brochure </div>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row md:flex-row items-center sm:items-start justify-center gap-4 md:gap-4">

          {/* Left Section: Image */}
          <div className="relative  w-5/6 p-8 sm:w-1/2 sm:h-full md:h-full md:w-1/3 flex-shrink-0">
            <img
              src={BrochureCover}
              alt="ECHO Magazine Cover"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />

          </div>

          {/* Right Section: Text Content */}
          <div className="w-full font-montserrat text-center p-8 sm:w-1/2 md:w-2/3  text-gray-200">
            <p className="text-base md:text-md leading-relaxed mb-6">
              The vision of First-ever E-Summit of IIIT Bhagalpur is to be a catalyst for entrepreneurial energy, bringing together the young innovators who will become the leaders and changemakers of tomorrow. Our summit creates a dynamic platform where students are encouraged to dream big, think boldly, and act fearlessly while discovering solutions that address real-world challenges.            </p>
            <p className="text-base md:text-md leading-relaxed mb-6">
              Our mission is not just to spark ideas, but to help transform them into impactful ventures that inspire communities and create meaningful change. E-Summit is committed to reigniting the spirit of entrepreneurship across campuses by nurturing creativity, encouraging risk-taking, and enabling students to become proactive problem-solvers and job creators.            </p>
            <p className="text-base md:text-md leading-relaxed mb-8">
              Have fun in our joint journey to Growth!
            </p>

            {/* Read Echo Button */}
            <button className="px-10 py-3 border border-gray-400 text-gray-200 rounded-md text-sm font-semibold tracking-wider hover:bg-gray-500 hover:border-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-400">
              Learn more
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BrochureSection