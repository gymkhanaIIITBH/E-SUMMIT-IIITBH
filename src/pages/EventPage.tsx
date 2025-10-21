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
  function registerEvent(url: string) {
    
    // iit will open registration page in new tab 
    window.open(url, '_blank');
  
  }
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
        
        className={
          `relative z-10
          bg-neutral-900/60
          backdrop-blur-sm
          shadow-lg
          rounded-2xl
          border border-neutral-800 hover:border-green-400/50
          p-6 md:p-10
          transition-colors duration-300 ease-in-out
          overflow-hidden
          group`
        }
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/20 transition duration-300 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-20">
          
          {/* IMAGE SECTION - UPDATED FOR SQUARE ASPECT RATIO */}
          <div className="lg:w-2/5 w-full"> {/* Ensure full width on small screens */}
            <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* This creates the square aspect ratio */}
              <img
                src={event.image}
                alt={event.title}
                // Image now fills the square container and is contained by the card
                className="absolute inset-0 w-full h-full object-cover"
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
                onClick={() => registerEvent(event.registerLink)}>
                  Register Here 
              </InteractiveHoverButton> 
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return ( 
    <main
      className="relative min-h-screen w-full bg-neutral-950 pt-10"
      style={{
        // Use the texture as the base background and keep it repeating.
        // We'll layer an SVG header on top visually by using an absolutely positioned img.
        backgroundImage: `url('/texture-bg.jpg')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    > 
      {/* Top SVG header overlay (placed above the texture but behind content) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden">
        <img
          src="/bg-header.svg"
          alt="header decorative"
          className="w-full object-cover"
          style={{
            display: 'block',
          }}
        />
      </div>

  {/* Keep a higher stacking context for page content */}
  <div className="relative z-10">
      
      {/* Header Section */}
      <motion.div 
        className="w-full pt-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl md:text-4xl font-extrabold mb-4"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-white">
            Our Events
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
      </div>
    </main>
  );
};

export default EventPage;