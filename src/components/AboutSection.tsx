// import React from 'react'

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function AboutSection() {
const ref = useRef(null)
const inView = useInView(ref, {once:true})

  return (
    <>
    <section className="w-full bg-white py-40 flex flex-col items-center" id="about">
      <motion.div
       ref={ref} 
      
        initial={{ opacity: 0, y: 100 }} 
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 100,     
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      className="flex flex-col items-center w-full">
        <div className="h-16 w-[2px] bg-gray-400 mb-4" />
        <h2 className="text-[#07617d] text-xl font-bold tracking-widest mb-8 text-center font-sans">ABOUT US</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl px-4 font-serif text-gray-700 text-center leading-relaxed">
            <span className="text-[#07617d] font-bold decoration-[#07617d]">E-Summit | IIIT BHAGALPUR</span>
            <span className="text-pretty tracking-tighter font-normal"> aims to induce an entrepreneurial mindset into the students and air an innovative streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful endeavors through networking student enterprises from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.</span>
          </p>
        </div>
      </motion.div>
    </section>
    </>
  )
}

export default AboutSection