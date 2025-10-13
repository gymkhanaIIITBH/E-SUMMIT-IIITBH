import React from 'react';
import { Timeline } from './ui/timeline';
import { eventData } from '../lib/eventData';
import { RegisterButton } from './ui/register-button';
import { motion } from 'framer-motion';
import { AiOutlineClockCircle } from 'react-icons/ai'; 

// [Existing container and item variants for header]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// [End of existing variants]

const EventPage: React.FC = () => {
  const handleRegister = (eventLink: string) => {
    console.log('Registering for:', eventLink);
    // Add your registration logic here
  };

  const items = eventData.map(event => ({
    title: event.title, 
    content: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        
        // 🌟 Line Card Structure 🌟
        className="
          relative z-10 
          bg-transparent 
          shadow-none 
          rounded-2xl 
          border border-neutral-800 hover:border-yellow-500/50 
          p-6 md:p-10 
          transition-colors duration-300 ease-in-out
          group 
        "
      >
        {/* Subtle Inner Glow/Border on Hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/20 transition duration-300 pointer-events-none" />
        
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 relative z-20 transition-colors duration-300 group-hover:text-white">{event.title}</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-20">
          
          {/* IMAGE SECTION - Kept minimalist but defined */}
          <div className="lg:w-2/5">
            <img
              src={event.image}
              alt={event.title}
              // Removed heavy shadow, kept subtle border
              className="w-full h-64 md:h-80 object-cover rounded-xl border border-neutral-700/50"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="lg:w-3/5">
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 border-b border-neutral-700 pb-4">
              {event.description}
            </p>
            
            {/* SCHEDULE SECTION */}
            <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                <span className="border-b border-yellow-400 pb-1">Schedule Details</span>
            </h3>
            <ul className="text-sm text-neutral-400 list-none space-y-3 mb-8">
              {event.schedule.map((item, index) => (
                <li key={index} className="flex items-start">
                  <AiOutlineClockCircle className="text-yellow-400 text-lg mr-2 flex-shrink-0 mt-0.5" /> 
                  <span className="flex flex-col sm:flex-row">
                    <strong className="text-white mr-2 font-medium">{item.time}</strong> 
                    <span className="text-neutral-400">{item.activity}</span>
                  </span>
                </li>
              ))}
            </ul>
            
            {/* REGISTER BUTTON */}
            <div className="pt-6 border-t border-neutral-700/70">
              <RegisterButton
                status={event.registrationStatus}
                onClick={() => handleRegister(event.registerLink)}
              />
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return (    
    <main className="min-h-screen w-full bg-neutral-950  ">
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center opacity-100 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/long-bg.svg')",
        }}
      />
      {/* Header Section */}
      <motion.div 
        className="w-full pt-20 pb-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
            Upcoming Events
          </span> 
          <motion.span 
            variants={itemVariants} 
            className="inline-block text-yellow-400"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
          >
             
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-neutral-400 max-w-4xl mx-auto px-4"
          variants={itemVariants}
        >
          
        </motion.p>
      </motion.div>
      {/* End of Header Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline
          data={items}
          
        />
      </div>
    </main>
  );
};

export default EventPage;