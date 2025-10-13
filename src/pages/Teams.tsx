import { useRef, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { motion, useInView } from 'framer-motion';
import heroImg from '../../public/hero-bg.svg'; // ✅ make sure the path is correct
import pinak from '/team/Pinak.jpg'
import rahul from '/team/Rahul.jpg'
import suyash from '/team/suyash.jpg'
import ayush from '/team/ayush.jpg'
import param from '/team/Param.jpg'
import rajat from '/team/Rajat.jpg'
  const team=[
    {name:'Pinak Halder', image:pinak, designation:'VP Gymkhana Student Council', email:'testEMail', phone:'Test Phone'},
    {name:'Rahul Kumar', image:rahul, designation:'General Secretary, Technical board', email:'testEMail', phone:'Test Phone'},
    {name:'Suyash Ranjan', image:suyash, designation:'Esummit Coordinator', email:'testEMail', phone:'Test Phone'},
    {name:'Ayush Kumar Singh', image:ayush, designation:'Public Relations Lead', email:'testEMail', phone:'Test Phone'},
    {name:'Param Preet Singh', image:param, designation:'Sponsorship Team Lead', email:'testEMail', phone:'Test Phone'},
    {name:'Rajat Ranjan', image:rajat, designation:'Marketing Team Lead', email:'testEMail', phone:'Test Phone'},



  ]
function Teams() {
  // Single ref for triggering animations when in view
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });




  useEffect(() => {
    // Scroll to top when this page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-6">
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
            <TeamCard key={index} name={t.name} designation={t.designation} image={t.image} email={t.email} phone={t.phone} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Teams;
