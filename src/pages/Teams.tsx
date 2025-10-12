import React, { useRef } from 'react'
import TeamCard from '../components/TeamCard'
import { motion, useInView } from 'framer-motion';
import { useEffect } from 'react';
function Teams() {
      const ref = useRef(null)
const inView = useInView(ref, {once:true})
useEffect(() => {
          // Scroll to top when this page loads
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
  return (
    <div className='flex flex-col items-center w-full h-full justify-center p-6'>
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
            className='text-center'
        >
            <div className='text-xl  font-montserrat font-semibold '>Contact</div>
            <div className='text-3xl mb-6 font-montserrat font-bold '>Our Team</div>
        </motion.div>

     
        <motion.div className='flex justify-center max-w-[60rem] gap-6 flex-wrap' id='Coordinators'
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
        >
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>

            <TeamCard/>
            <TeamCard/>
            <TeamCard/>


            <TeamCard/>
            <TeamCard/>
            <TeamCard/>

        </motion.div>
    </div>
  )
}

export default Teams