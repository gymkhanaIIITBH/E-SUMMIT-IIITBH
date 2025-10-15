import React, { useEffect } from 'react';
import { Timeline } from '@/components/ui/timeline.tsx';
import { eventData, type TimelineEventData } from '../lib/eventData.ts';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineTrophy, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { InteractiveHoverButton } from '@/components/InteractiveHoverButton.tsx';

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

const EventPage: React.FC = () => {
  const handleRegister = (eventLink: string) => {
    console.log('Registering for:', eventLink);
    // In a real application, you might use window.location.href or a routing method here
    // window.location.href = eventLink;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const typedEventData: TimelineEventData[] = eventData as TimelineEventData[];

  const items = typedEventData.map(event => ({
    title: event.title,
    content: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        
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
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/20 transition duration-300 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-20">
          
          {/* IMAGE SECTION - UPDATED FOR SQUARE ASPECT RATIO */}
          <div className="lg:w-2/5 w-full"> {/* Ensure full width on small screens */}
            <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* This creates the square aspect ratio */}
              <img
                src={event.image}
                alt={event.title}
                // Image now fills the square container
                className="absolute inset-0 w-full h-full object-cover rounded-xl border border-neutral-700/50"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="lg:w-3/5">
            <p className="text-neutral-300 font-newsreader text-lg leading-relaxed mb-6 border-b border-neutral-700 pb-2">
              {event.description}
            </p>
            
            {/* DETAILS SECTION */}
            <h3 className="text-xl font-semibold text-white mb-3 tracking-wide font-newsreader">
              <span className="text-yellow-400 pb-1">Key Details</span>
            </h3>
            <ul className="text-sm text-neutral-400 list-none space-y-3 mb-8 font-newsreader">
              {/* Date */}
              <li className="flex items-start">
                <AiOutlineCalendar className="text-yellow-400 text-lg mr-2 flex-shrink-0 mt-0.5" /> 
                <span className="flex flex-col sm:flex-row">
                  <strong className="text-white mr-2 font-medium">Date:</strong> 
                  <span className="text-neutral-400">{event.details.date}</span>
                </span>
              </li>
              {/* Prize Pool */}
              <li className="flex items-start">
                <AiOutlineTrophy className="text-yellow-400 text-lg mr-2 flex-shrink-0 mt-0.5" /> 
                <span className="flex flex-col sm:flex-row">
                  <strong className="text-white mr-2 font-medium">Prize Pool:</strong> 
                  <span className="text-neutral-400">{event.details.prizePool}</span>
                </span>
              </li>
              {/* Number of Members */}
              <li className="flex items-start">
                <AiOutlineUsergroupAdd className="text-yellow-400 text-lg mr-2 flex-shrink-0 mt-0.5" /> 
                <span className="flex flex-col sm:flex-row">
                  <strong className="text-white mr-2 font-medium">Team Size:</strong> 
                  <span className="text-neutral-400">{event.details.numMembers}</span>
                </span>
              </li>
            </ul>
            
            {/* REGISTER BUTTON */}
            <div className="pt-3 border-t border-neutral-700/70">
              <InteractiveHoverButton 
                onClick={() => handleRegister(event.registerLink)}>
                  Register Here 
              </InteractiveHoverButton> 
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return ( 
    <main className="min-h-screen w-full bg-neutral-950 pt-10"> 
      
      {/* Header Section */}
      <motion.div 
        className="w-full pt-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4"
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