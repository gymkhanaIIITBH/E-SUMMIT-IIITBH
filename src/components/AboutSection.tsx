// import React from 'react'

function AboutSection() {
  return (
    <>
    <section className="w-full bg-white py-20 flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="h-16 w-[2px] bg-gray-400 mb-4" />
        <h2 className="text-[#07617d] text-xl font-bold tracking-widest mb-8 text-center font-sans">ABOUT US</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl font-serif text-gray-700 text-center leading-relaxed">
            <span className="text-[#07617d] font-bold underline decoration-[#07617d]">E-Summit | IIIT BHAGALPUR</span>
            <span className="font-normal"> aims to induce an entrepreneurial mindset into the students and air an innovative streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful endeavors through networking student enterprises from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.</span>
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutSection