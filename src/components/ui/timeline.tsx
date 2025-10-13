"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

type TimelineProps = {
  data: TimelineEntry[];
  title?: string;
  description?: string;
};

// 1. New component for a single timeline item to encapsulate its scroll logic
const TimelineItem: React.FC<{ 
    item: TimelineEntry; 
    index: number; 
    isFirst: boolean;
    isLast: boolean;
}> = ({ item, index, isFirst, isLast }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Use scrollYProgress for the item's visibility
  const { scrollYProgress } = useScroll({
    target: itemRef,
    // Start highlighting when the top of the item is 30% from the top of the viewport
    // End highlighting when the bottom of the item is 30% from the top of the viewport
    offset: ["start 30%", "end 30%"],
  });

  // Transform scroll progress (0 to 1) into an opacity value (1 for active)
  // We use a small range ([0.1, 0.9]) to ensure a smooth transition
  const isActive = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  // Convert MotionValue to a simple boolean state for conditional class application
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // Listen to the motion value changes and update the state
    return isActive.on("change", (latest) => {
      // Consider it "highlighted" if the progress is greater than 0.1
      setIsHighlighted(latest > 0.1);
    });
  }, [isActive]);

  const activeTitleClasses = isHighlighted 
    ? "text-yellow-400 dark:text-yellow-400 scale-[1.02] transform transition-colors duration-500" 
    : "text-neutral-500 dark:text-neutral-500 scale-100 transition-colors duration-500";
    
  const activeDotClasses = isHighlighted 
    ? "bg-yellow-400 ring-4 ring-yellow-400/50 shadow-md shadow-yellow-500/30" 
    : "bg-neutral-500 dark:bg-neutral-500 ring-2 ring-neutral-500/30";


  return (
    <div
      ref={itemRef}
      key={index}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      {/* Sticky Title and Dot Column */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Timeline Dot */}
        <div className="h-10 absolute left-3 md:left-8 w-10 rounded-full bg-neutral-950 flex items-center justify-center">
          <div className={`h-4 w-4 rounded-full transition-all duration-300 ${activeDotClasses}`} />
        </div>

        {/* Title (Desktop) */}
        <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-extrabold ${activeTitleClasses}`}>
          {item.title}
        </h3>
      </div>

      {/* Content Card */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Title (Mobile) */}
        <h3 className={`md:hidden block text-2xl mb-4 text-left font-extrabold ${activeTitleClasses}`}>
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  );
};

export const Timeline = ({
  data,
  title = "",
  description = "",
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure the height of the timeline container
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref, data]);

  // Hook for scroll-based line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animation when container is 10% from the top, end when it's 50% from the bottom
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  font-sans md:px-10" // Removed white background for consistency
      ref={containerRef}
    >
      {/* Title/Description Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl mb-4 text-white max-w-4xl font-extrabold">
          {title}
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm">
          {description}
        </p>
      </div>
      
      {/* Timeline Items Container */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        
        {/* Static Background Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-12 left-8 top-0 overflow-hidden w-[2px] bg-neutral-800/50 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          {/* Animated Foreground Line (Gradient Fill) */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            // Changed gradient to match the yellow highlight color for better synergy
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-400/80 via-yellow-500 to-transparent rounded-full"
          />
        </div>

        {/* Map Timeline Items */}
        {data.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index}
            isFirst={index === 0}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </div>
  );
};