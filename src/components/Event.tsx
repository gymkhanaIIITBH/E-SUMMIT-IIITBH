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
      <section id="schedule" className="relative mx-auto max-w-[1140px] py-[70px]">
        <div className="w-full flex justify-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-400 text-center">List of Events</h2>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-[75px] top-[140px] bottom-[140px] w-px bg-[rgba(26,234,23,0.4)] z-[1]" />

        <ol className="relative z-[2]">
          {events.map((ev, idx) => (
            <motion.li
              key={ev.id}
              className="relative border-b border-[rgba(13,255,0,0.4)] last:border-none py-[60px] pl-[130px] pr-[40px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.36, 0.66, 0.04, 1] }}
            >
              {/* Number Box */}
              <motion.div
                className="absolute top-[60px] left-[55px] w-[42px] h-[42px] bg-[#1aea17] flex items-center justify-center z-[3]"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
              >
                <span
                  className="text-[32px] leading-none font-bold text-black"
                  style={{ fontFamily: "Newsreader, serif" }}
                >
                  {ev.id}
                </span>
              </motion.div>

              {/* Content */}
              <article className="flex items-center justify-between gap-6 max-lg:flex-col max-lg:items-start">
                {/* Date Section */}
                <div className="flex flex-col text-[#f9ff56] w-[200px] shrink-0 text-left">
                  <span
                    className="font-semibold text-3xl lg:text-4xl leading-none"
                    style={{ fontFamily: "Newsreader, serif" }}
                  >
                    {ev.day}
                  </span>
                  <span
                    className="font-semibold text-5xl lg:text-6xl leading-none"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {ev.date}
                  </span>
                  <span
                    className="font-semibold text-base lg:text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {ev.month}
                  </span>
                </div>

                {/* Middle Divider + Logo + Right Divider */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <img
                    src={ev.dividerLeft}
                    alt="divider"
                    className="h-[160px] hidden lg:block"
                  />
                  <img
                    src={summitLogo}
                    alt="E-summit logo"
                    className="w-[200px] h-[120px] object-contain"
                  />
                  <img
                    src={ev.dividerRight}
                    alt="divider"
                    className="h-[160px] hidden lg:block"
                  />
                </div>

                {/* Description */}
                <div className="max-w-[350px] py-2 text-left">
                  <h3
                    className="text-[#ffe600] font-bold mb-2 text-sm md:text-base"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {ev.title}
                  </h3>
                  <p
                    className="font-medium text-[rgba(255,255,255,0.6)] text-sm md:text-base leading-snug"
                    style={{ fontFamily: "Newsreader, serif" }}
                  >
                    {ev.description}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </section>
    </main>
  );
}
