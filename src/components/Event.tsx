// Events.tsx — perfectly aligned version
import { motion } from "framer-motion";
import dividerLine from "../assets/L.svg";
import summitLogo from "../assets/44.svg";

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
      <section id="schedule" className="relative mx-auto max-w-[1140px] py-[73px]">
        <div className="w-full flex justify-center mb-8 md:mb-10">
          <h2 className="text-4xl font-bold text-yellow-400 text-center">List of Events</h2>
        </div>

        {/* vertical timeline line */}
        <div className="absolute left-[60px] md:left-[70px] lg:left-[85px] top-[102px] bottom-[128px] w-px bg-[rgba(26,234,23,0.4)] z-[1]" />

        <ol className="relative z-[2]">
          {events.map((ev, idx) => (
            <motion.li
              key={ev.id}
              className="relative border-b border-[rgba(13,255,0,0.4)] last:border-none py-[50px] pl-[120px] pr-[40px] md:pl-[140px] lg:pl-[160px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.36, 0.66, 0.04, 1] }}
            >
              {/* Number Box */}
              <motion.div
                className="absolute top-[50px] left-[45px] md:left-[60px] lg:left-[85px] w-[41.5px] h-[41.5px] bg-[#1aea17] flex items-center justify-center z-[3] shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
              >
                <span
                  className="text-[48px] leading-[1] font-bold text-black translate-y-[-4px]"
                  style={{ fontFamily: "Newsreader, serif" }}
                >
                  {ev.id}
                </span>
              </motion.div>

              {/* Event Content */}
              <article className="flex items-center justify-between gap-3 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-[20px]">
                {/* Date */}
                <div className="flex flex-col text-[#f9ff56] shrink-0 w-[220px] max-[992px]:w-auto">
                  <span
                    className="font-semibold leading-[1] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    style={{ fontFamily: "Newsreader, serif" }}
                  >
                    {ev.day}
                  </span>
                  <span
                    className="font-semibold leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {ev.date}
                  </span>
                  <span
                    className="font-semibold leading-[1.1] text-sm sm:text-base md:text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {ev.month}
                  </span>
                </div>

                {/* Dividers + Logo + Details */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <img
                    src={ev.dividerLeft}
                    alt="divider"
                    className="h-[187px] w-auto shrink-0 max-[1024px]:hidden"
                  />
                  <img
                    src={summitLogo}
                    alt="E-summit logo"
                    className="w-[224px] h-[150px] object-contain shrink-0"
                  />
                  <img
                    src={ev.dividerRight}
                    alt="divider"
                    className="h-[187px] w-auto shrink-0 max-[1024px]:hidden"
                  />
                  <div className="max-w-[349px] shrink-0 max-[992px]:max-w-full py-2">
                    <h3
                      className="text-[#ffe600] font-bold mb-[10px] text-sm md:text-base"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {ev.title}
                    </h3>
                    <p
                      className="font-medium text-[rgba(255,255,255,0.6)] text-sm md:text-base leading-tight md:leading-snug"
                      style={{ fontFamily: "Newsreader, serif" }}
                    >
                      {ev.description}
                    </p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </section>
    </main>
  );
}
