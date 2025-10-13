// Events.tsx — Final Visually Perfected and Responsive Version
import { motion } from "framer-motion";
import dividerLine from "../assets/L.svg";
import summitLogo from "../assets/44.svg";

import { InteractiveHoverButton } from './InteractiveHoverButton';

type EventItem = {
  id: number;
  day: "Friday" | "Saturday";
  date: number;
  month: string;
  title: string;
  description: string;
  dividerLeft: string;
  dividerRight: string;
};

const baseEvent = {
  title: "IDEA STORM",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nec fames senectus quisque sed nulla nibh. Lacus et dolor suspendisse eleifend eu lorem turpis. Mus fusce vitae interdum purus id sodales elementum arcu. Purus nunc accumsan eros faucibus semper sagittis diam risus.",
};

const events: EventItem[] = [
  { id: 1, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 2, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 3, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 4, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 5, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 6, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
  { id: 7, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, ...baseEvent },
];

export default function Events() {
  return (
    <main className="bg-black text-white">
      <section id="schedule" className="relative mx-auto max-w-6xl py-14 md:py-16 px-4">
        <div className="w-full flex justify-center mb-10 md:mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 text-center">List of Events</h2>
        </div>

        <ol className="relative z-[2] pt-10">
          {events.map((ev, idx) => (
            <motion.li
              key={ev.id}
              className="group relative py-8 pl-20 pr-4 md:pl-30 lg:pl-40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.36, 0.66, 0.04, 1] }}
            >
              {/* Noir hover background: subtle gradient + vignette */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(80%_60%_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-transparent to-white/5" />
              </div>

              {/* Number Box */}
              <motion.div
                className="absolute left-7 md:left-11 lg:left-15 w-10 h-10 bg-[#1aea17] flex items-center justify-center z-[3] shadow-[0_0_0_0_rgba(26,234,23,0.5)] transition-all duration-500 group-hover:shadow-[0_0_30px_8px_rgba(26,234,23,0.15)] group-hover:rotate-1"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
              >
                <span className="text-4xl font-bold text-black" style={{ fontFamily: "Newsreader, serif" }}>
                  {ev.id}
                </span>
              </motion.div>

              {/* Event Content */}
              <div className="event-content-wrapper">
                <article className="flex items-center justify-between gap-1 max-lg:flex-col max-lg:items-start max-lg:gap-6">
                  {/* Date */}
                  <div className="flex flex-col text-[#f9ff56] shrink-0 w-52 lg:w-60 max-lg:w-auto transition-transform duration-500 group-hover:-translate-y-0.5">
                    <span className="font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "Newsreader, serif" }}>
                      {ev.day}
                    </span>
                    <span className="font-semibold leading-none text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {ev.date}
                    </span>
                    <span className="font-semibold leading-tight text-sm md:text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {ev.month}
                    </span>
                  </div>

                  {/* Dividers + Logo + Details */}
                  <div className="flex items-center justify-center gap-2 max-lg:flex-wrap max-lg:justify-start">
                    <img src={ev.dividerLeft} alt="divider" className="h-48 w-auto shrink-0 max-lg:hidden opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                    <img src={summitLogo} alt="E-summit logo" className="w-60 h-auto object-contain shrink-0 max-lg:w-32 max-lg:h-auto lg:pr-20 transition-transform duration-500 group-hover:scale-[1.03]" />
                    <img src={ev.dividerRight} alt="divider" className="h-48 w-auto shrink-0 max-lg:hidden opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Details */}
                    <div className="relative max-w-xs shrink max-lg:max-w-full py-2">
                      <h3 className="text-[#ffe600] font-bold mb-2 text-base md:text-lg transition-colors duration-500 group-hover:text-yellow-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {ev.title}
                      </h3>
                      <p className="font-medium text-[rgba(255,255,255,0.7)] text-sm md:text-base leading-snug" style={{ fontFamily: "Newsreader, serif" }}>
                        {ev.description}
                      </p>

                      {/* Register button: reveal on hover (desktop), always visible on mobile */}
                      <div className="mt-4">
                       <InteractiveHoverButton>Register</InteractiveHoverButton>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>
    </main>
  );
}