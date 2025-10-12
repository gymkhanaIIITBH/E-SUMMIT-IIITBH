import { useRef, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { motion, useInView } from 'framer-motion';
import heroImg from '../../public/hero-bg.svg'; // ✅ make sure the path is correct

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
          {Array.from({ length: 9 }).map((_, i) => (
            <TeamCard key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Teams;
