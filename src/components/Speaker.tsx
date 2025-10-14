import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { speakers } from '../lib/speakerdata';
import type { SpeakerData } from '../lib/speakerdata';

const Speaker: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const next = () => setIndex((prev) => (prev + 1) % speakers.length);
  const prev = () => setIndex((prev) => (prev - 1 + speakers.length) % speakers.length);

  const current: SpeakerData = speakers[index];

  return (
    <section id="speaker"
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom, #000 0%, #000 50%, #fff 50%, #fff 100%)',
      }}
      className="w-full flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-[#ffe600] text-2xl font-bold tracking-widest mb-8 text-center font-sans">
        SPEAKERS
      </h2>

      <div className="relative flex items-center justify-center w-[92%] md:w-[80%] lg:w-[75%] bg-[#0f0f0f] rounded-3xl p-4 md:p-10 shadow-2xl text-white h-auto border border-[#2a2a2a]">
        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch w-full gap-8">
          
          {/* 🔹 Fixed but Responsive Image Section */}
          <div
            className="
              flex-shrink-0 
              rounded-2xl overflow-hidden bg-black shadow-lg
              w-[260px] h-[300px]
              sm:w-[280px] sm:h-[320px]
              md:w-[300px] md:h-[360px]
              lg:w-[320px] lg:h-[380px]
              mx-auto md:mx-0
              transition-all duration-300
            "
          >
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* 🔹 Quote Section */}
          <div
            className="
              flex-1 flex flex-col w-full justify-between
              bg-[#071a33] border border-[#0e3b6b]
              rounded-2xl p-5 sm:p-6 md:p-8
              h-auto md:h-[360px] lg:h-[380px]
              text-center md:text-left
            "
          >
            <div>
              <Quote className="text-white mb-4 mx-auto md:mx-0 rotate-180" size={28} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {current.name}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{current.company}</p>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {current.description}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Quote className="text-white " size={28} />
            </div>
          </div>
        </div>

        {/* 🔹 Navigation Buttons */}
        <div
          className="
            absolute right-4 bottom-[-55px]
            md:right-[-60px] md:top-1/2 md:bottom-auto md:-translate-y-1/2
            flex md:flex-col gap-3
          "
        >
          <button
            onClick={prev}
            aria-label="Previous speaker"
            className="bg-[#0b1720] w-12 h-12 rounded-full flex items-center justify-center border border-[#24303a] text-white hover:bg-green-600 hover:border-green-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            aria-label="Next speaker"
            className="bg-[#0b1720] w-12 h-12 rounded-full flex items-center justify-center border border-[#24303a] text-white hover:bg-green-600 hover:border-green-600 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
