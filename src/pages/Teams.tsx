import { useRef, useEffect, useState } from 'react';
// Simple Toast component
function CopyToast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
      className={`transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} bg-zinc-900 text-white px-6 py-3 rounded-xl shadow-lg font-regular font-monteserrat text-base`}
    >
      {message}
    </div>
  );
}
import TeamCard from '../components/TeamCard';
import { motion, useInView } from 'framer-motion';
import heroImg from '../../public/hero-bg.svg';
import pinak from '/team/Pinak.jpg'
import rahul from '/team/Rahul.jpg'
import suyash from '/team/suyash.png'
import ayush from '/team/ayush.jpg'
import param from '/team/Param.jpg'
import rajat from '/team/Rajat.jpg'

import shivam from '/shivam.jpg'
import tushar from '/tushar.jpg'
import yug from '/yug.jpg'
  const team=[
    {name:'Pinak Halder', image:pinak, designation:'VP Gymkhana Student Council', email:'vp.gymkhana@iiitbh.ac.in', phone:null, linkedIn: "https://www.linkedin.com/in/pinak14iiitbh26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    {name:'Rahul Kumar', image:rahul, designation:'General Secretary, Technical board', email:'gs.technical@iiitbh.ac.in', phone:null, linkedIn:'https://www.linkedin.com/in/rahul-kumar-iiitbh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {name:'Suyash Ranjan', image:suyash, designation:'Esummit Coordinator', email:'testEMail', phone:'+91 7302381447', linkedIn:'https://www.linkedin.com/in/suyash-ranjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {name:'Ayush K. Singh', image:ayush, designation:'Public Relations Lead', email:'ayush8.230103010@iiitbh.ac.in', phone:'+91 9369640113', linkedIn:'http://linkedin.com/in/ayush-kumar-singh-98a369291'},
    {name:'Param Preet Singh', image:param, designation:'Sponsorship Team Lead', email:'param.230102042@iiitbh.ac.in', phone:'+91 8299424445', linkedIn:'https://www.linkedin.com/in/parampreet-singh-252782298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {name:'Rajat Ranjan', image:rajat, designation:'Marketing Team Lead', email:'testEMail', phone:'+91 9324572394', linkedIn:'https://www.linkedin.com/in/rajat-ranjan-b20ab3204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
  ]
  const Contributors=[
    {name:'Tushar Patel', image:tushar, designation:'Web Developer', email:'tushar.230101145@iiitbh.ac.in', phone:'+91 8840000304', linkedIn:'https://in.linkedin.com/in/tusharpatel10954'},
    {name:'Yug Sharma', image:yug, designation:'Web Developer', email:'yug.240103135@iiitbh.ac.in', phone:'+91 8962901245', linkedIn:'https://www.linkedin.com/in/yug-s-538a8a321'},
    {name:'Shivam Gautam', image:shivam, designation:'Web Developer', email:'shivam1.23010120@iiitbh.ac.in', phone:'+91 8181026317', linkedIn:'https://in.linkedin.com/in/shivam-gautam-b20220295'},


  ]
function Teams() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handler for copy action
  const handleCopy = (type: 'email' | 'phone') => {
    setToastMessage(type === 'email' ? 'Email copied!' : 'Phone number copied!');
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1500);
  };
  // Single ref for triggering animations when in view
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });




  useEffect(() => {
    // Scroll to top when this page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Toast for copy action */}
      <CopyToast message={toastMessage} visible={toastVisible} />
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#345a31]/70 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="text-xl font-montserrat font-semibold text-white">
            Contact
          </div>
          <div className="text-4xl font-montserrat font-bold text-white">
            Our Team
          </div>
        </motion.div>

        {/* Team cards */}
        <motion.div
          id="Coordinators"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center max-w-[70rem] gap-6 flex-wrap"
        >
          {team.map((t, index) => (
            <TeamCard
              key={index}
              name={t.name}
              designation={t.designation}
              image={t.image}
              email={t.email}
              phone={t.phone}
              linkedIn={t.linkedIn}
              onCopy={handleCopy}
            />
          ))}
        </motion.div>

        <div className='text-4xl text-white mt-12 mb-12 font-bold font-montserrat'>Contributors</div>
        {/* Contributors cards */}
        <motion.div
          id="Contributors"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center max-w-[70rem] gap-6 flex-wrap pb-16"
        >
          {Contributors.map((t, index) => (
            <TeamCard
              key={index}
              name={t.name}
              designation={t.designation}
              image={t.image}
              email={t.email}
              phone={t.phone}
              linkedIn={t.linkedIn}
              onCopy={handleCopy}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Teams;
