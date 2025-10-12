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
    <section
      style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #000 0%, #000 50%, #fff 50%, #fff 100%)' }}
      className="w-full flex flex-col items-center justify-center py-20  "
    >
      <h2 className="text-[#ffffff] text-3xl md:text-5xl font-bold tracking-widest mb-6 text-center font-montserrat">SPEAKER</h2>

      <div className="relative flex items-center justify-center w-[92%] md:w-[80%] lg:w-[75%] bg-[#0f0f0f] rounded-[28px] p-4 md:p-10 shadow-2xl text-white h-auto md:h-[420px] border border-[#454545]">
        {/* Inner content container - stack on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row w-full gap-6 items-stretch">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/3 h-64 md:h-full">
            <div className="rounded-xl overflow-hidden h-full bg-black">
              <img
                src={current.image}
                alt={current.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex-1 h-auto md:h-full">
            <div className="bg-[#071a33] border border-[#0e3b6b] rounded-md p-6 md:p-8 h-full flex flex-col">
              <div className="overflow-auto pr-2 max-h-[220px] md:max-h-full">
                <Quote className="text-white mb-3" size={28} />
                <h2 className="text-xl md:text-3xl font-semibold">{current.name}</h2>
                <p className="text-sm text-gray-300 mb-4">{current.company}</p>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">{current.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Quote className="text-white rotate-180" size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Arrow controls: horizontal on mobile (bottom-right), vertical on md+ */}
  <div className="absolute right-4 bottom-[-55px] md:right-[-64px] md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 flex md:flex-col flex-row items-center md:items-center gap-3 z-50">
          {/* Prev (left on mobile, bottom on md+) */}
          <div className="bg-[#0b1720] w-12 h-12 rounded-full flex items-center justify-center border border-[#24303a] shadow-lg">
            <button onClick={prev} aria-label="prev" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-colors focus:outline-none">
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Next (right on mobile, top on md+) */}
          <div className="bg-[#0b1720] w-12 h-12 rounded-full flex items-center justify-center border border-[#24303a] shadow-lg">
            <button onClick={next} aria-label="next" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-colors focus:outline-none">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Vertical dots/indicators (show on md+) */}
          {/* <div className="hidden md:flex flex-col gap-3 mt-3 items-center">
            {speakers.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`slide-${i}`}
              />
            ))}
          </div> */}
        </div>
      </div>
      
    </section>
  );
};

export default Speaker;
