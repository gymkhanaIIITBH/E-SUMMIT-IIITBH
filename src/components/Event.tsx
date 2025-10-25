// Events.tsx — Final Visually Perfected and Responsive Version
import { motion } from "framer-motion";
import dividerLine from "../assets/L.svg";
import ideastorm from "/44.svg";
import eship from "/45.svg"
import viralvogue from "/46.svg"
import bullrun from "/47.svg"
import bitstorm from "/48.svg"
// import gaming from "/49.png"
import expo from "/50.svg"
import valo from "/eventCovers/Valo.png"
import bgmi from "/eventCovers/BGMI.png"
import { InteractiveHoverButton } from "./InteractiveHoverButton";

type EventItem = {
  id: number;
  day: "Friday" | "Saturday";
  date: number;
  month: string;
  title: string;
  description: string;
  dividerLeft: string;
  dividerRight: string;
  image: string;
  url: string;
};

const IdeaEvent = {
  title: "IDEA STORM",
  description:
    "Pitch your groundbreaking startup ideas to investors and experts! Phase 1 is an online idea screening. Top teams advance to an offline, high-stakes pitch at IIIT Bhagalpur. Win prizes worth ₹85,000, plus certificates and exclusive goodies.",
  url:"https://unstop.com/p/e-summit-25-iiit-bhagalpur-idea-storm-pitch-the-future-duplicate-indian-institute-of-information-technology-iiit-bhaga-1577531"
  };
const BitEvent = {
  title: "BITSTORM",
  description:
    "Gear up for BitStorm 1.0,Aspiring tech teams first submit ideas online, followed by an intense 36-hour offline coding sprint at IIIT Bhagalpur. Transform ideas into impactful prototypes with mentorship. Judges will evaluate innovation and execution. Prizes worth ₹1,75,000 awaits.",
    url:"https://unstop.com/hackathons/e-summit-25-iiit-bhagalpurbit-storm-10-hack-the-future-indian-institute-of-information-technology-iiit-bhagal-1577295"
  };
const Valorant =  {
    title: "SUMMIT CLUTCH - VALORant",
    description: "Get ready to step into the Arena, Agents! It's time for the ultimate VALORANT showdown! Fight tooth and nail in intense, high-stakes matches to claim victory and prove your team's dominance. Sharpen your aim, strategize with your squad, and outplay your opponents to take home the glory. With a prize pool of ₹15,000 up for grabs, every round counts. Suit up, it’s time to dominate the competition!",
    url: "https://unstop.com/events/e-summit-25-iiit-bhagalpur-gaming-showdown-valorant-champions-cup-indian-institute-of-information-technology-iiit-1577253"
  };
  const BGMI=  {
    title: "BATTLE GROUND- BGMI",
    description: "Gear up for the ultimate VALORANT clash! Compete in intense battles to prove your team's dominance. Show off your skills and strategy in this high-stakes tournament. A total prize pool of ₹10,000 is up for grabs. Time to dominate the arena!",
    url: "https://unstop.com/events/e-summit-25-iiit-bhagalpur-gaming-showdown-bgmi-cup-indian-institute-of-information-technology-iiit-bhagalpur-1577235"
  };

const BullEvent = {
  title: "BULLRUN",
  description:
    "This challenge for strategists blends financial analysis. Phase 1 is an online financial reasoning quiz. Phase 2 features thrilling live market simulations and real-time trading choices based on company data. Winners, judged on market understanding and strategy, claim prizes worth ₹50,000.",
  url: "https://unstop.com/hackathons/e-summit-25-iiit-bhagalpur-idea-storm-pitch-the-future-indian-institute-of-information-technology-iiit-bhagal-1577209"
  };
const ViralVogue = {
  title: "VIRAL VOGUE",
  description:
    "Unleash your marketing genius in the Viral Vogue Pitch, Reel & Win! challenge. Pitch quirky concepts like chai as an energy elixir or gourmet mess food in a thrilling 60-second Instagram reel. Submissions via tag/official link. With prizes worth ₹22,500, this is your chance to entertain, persuade, and go viral!",
  url:"https://unstop.com/events/e-summit-25-iiit-bhagalpur-viral-vogue-pitch-reel-win-indian-institute-of-information-technology-iiit-bhagalpur-1577240"
  };

const QuizEvent = {
  title: "E-SHIP QUIZ",
  description:
    "Test your Business and Tech IQ in the E-Ship Quiz! The challenge starts with a 25-question online quiz. The top contenders advance to a thrilling live buzzer round on Google Meet. This fast-paced event rewards quick thinking with a prize pool of ₹5,000.",
  url:"https://unstop.com/quiz/e-summit-25-iiit-bhagalpure-ship-quiz-decode-business-dominate-tech-indian-institute-of-information-technology-iiit-1577230"
  };
const StartupEvent = {
  title: "STARTUP EXPO",
  description:
"The Startup Expo is a crucial event where entrepreneurs pitch innovative ideas directly to investors, fostering valuable connections and promoting industry collaboration. It offers startups a vital opportunity to secure funding and achieve significant entrepreneurial success. A nominal registration fee of ₹5,000 applies for participation.",
  url:"https://unstop.com/o/j8PEMtI?lb=6EzDYbpx&utm_medium=Share&utm_source=esummcom22762&utm_campaign=Workshops"
};

const ideaStormImage = ideastorm;
const bitStormImage = bitstorm;
const bgmiImage = bgmi;
const valoImage = valo;
const bullRunImage = bullrun;
const viralVogueImage = viralvogue;
const quizEventImage = eship;
const startupExpoImage = expo;

const eventImages = {
  [IdeaEvent.title]: ideaStormImage,
  [BitEvent.title]: bitStormImage,
  [BGMI.title]: bgmiImage,
  [Valorant.title]: valoImage,

  [BullEvent.title]: bullRunImage,
  [ViralVogue.title]: viralVogueImage,
  [QuizEvent.title]: quizEventImage,
  [StartupEvent.title]: startupExpoImage,
} as const satisfies Record<string, string>;

const events: EventItem[] = [
  { id: 1, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[BitEvent.title], ...BitEvent },
  { id: 2, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[StartupEvent.title], ...StartupEvent },
  { id: 3, day: "Friday", date: 14, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[BullEvent.title], ...BullEvent },
  { id: 4, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[QuizEvent.title], ...QuizEvent },
  { id: 5, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[IdeaEvent.title], ...IdeaEvent },
  { id: 6, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[BGMI.title], ...BGMI },
  { id: 7, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[Valorant.title], ...Valorant },
  { id: 8, day: "Saturday", date: 15, month: "November", dividerLeft: dividerLine, dividerRight: dividerLine, image: eventImages[ViralVogue.title], ...ViralVogue },
];
  function registerEvent(url: string) {
    
    // iit will open registration page in new tab 
    window.open(url, '_blank');
  
  }
export default function Events() {
  return (
    <main className="bg-black text-white">
      <section id="schedule" className="relative mx-auto max-w-6xl py-14 md:py-16 px-4">
        <div className="w-full flex justify-center mb-5 md:mb-6">
          <h2 className="text-[#ffe600] text-2xl font-bold tracking-widest mb-8 text-center font-sans">LIST OF EVENTS</h2>
        </div>

        <ol className="relative z-[2] pt-10">
          {events.map((ev, idx) => (
            <motion.li
              key={ev.id}
              className="group relative py-8 pl-20 pr-4 md:pl-30 lg:pl-40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: idx * 0.06, ease: [0.36, 0.66, 0.04, 1] }}
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
                    <img
                      src={ev.image}
                      alt={`${ev.title} logo`}
                      className="w-60 h-auto object-contain shrink-0 max-lg:w-32 max-lg:h-auto lg:pr-20 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
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
                      <div onClick={()=>registerEvent(ev.url)} className="mt-4">
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
