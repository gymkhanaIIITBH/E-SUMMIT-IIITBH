export interface TimelineEventData {
  title: string;
  description: string;
  image: string;
  details: {
    date: string; // e.g., "14th November"
    prizePool: string; // e.g., "₹1,75,000"
    numMembers: string; // e.g., "2-4"
  };
  registerLink: string;
}

export const eventData: TimelineEventData[] = [
  {
    title: "BITSTORM",
    description: "Gear up for BitStorm 1.0,Aspiring tech teams first submit ideas online, followed by an intense 36-hour offline coding sprint at IIIT Bhagalpur. Transform ideas into impactful prototypes with mentorship. Judges will evaluate innovation and execution. Prizes worth ₹1,75,000 awaits.",
    image: "/bitstormposter.svg",
    details: {
      date: "14th November",
      prizePool: "₹1,75,000",
      numMembers: "2-4",
    },
    registerLink: "/register/bitstorm"
  },
  {
    title: "STARTUP EXPO",
    description: "The Startup Expo is a crucial event where entrepreneurs pitch innovative ideas directly to investors. It fosters valuable connections and promotes industry collaboration. This platform offers startups a vital opportunity to secure funding and achieve significant entrepreneurial success.",
    image: "/startexpoposter.svg",
    details: {
      date: "14th November",
      prizePool: "N/A (Funding)",
      numMembers: "1-5",
    },
    registerLink: "/register/startup-expo"
  },
  {
    title: "BULLRUN",
    description: "This challenge for strategists blends financial analysis. Phase 1 is an online financial reasoning quiz. Phase 2 features thrilling live market simulations and real-time trading choices based on company data. Winners, judged on market understanding and strategy, claim prizes worth ₹50,000.",
    image: "/bullrunposter.svg",
    details: {
      date: "14th November",
      prizePool: "₹50,000",
      numMembers: "1-2",
    },
    registerLink: "/register/bullrun"
  },
  {
    title: "E-SHIP QUIZ",
    description: "Test your Business and Tech IQ in the E-Ship Quiz! The challenge starts with a 25-question online quiz. The top contenders advance to a thrilling live buzzer round on Google Meet. This fast-paced event rewards quick thinking with a prize pool of ₹5,000.",
    image: "/eshipposter.svg",
    details: {
      date: "15th November",
      prizePool: "₹5,000",
      numMembers: "1",
    },
    registerLink: "/register/eship-quiz"
  },
  {
    title: "IDEA STORM",
    description: "Pitch your groundbreaking startup ideas to investors and experts! Phase 1 is an online idea screening. Top teams advance to an offline, high-stakes pitch at IIIT Bhagalpur. Win prizes worth ₹85,000, plus certificates and exclusive goodies.",
    image: "/ideastorm.png",
    details: {
      date: "15th November",
      prizePool: "₹85,000",
      numMembers: "2-4",
    },
    registerLink: "/register/ideastorm"
  },
  {
    title: "GAMING EVENT",
    description: "Gear up for the ultimate BGMI and VALORANT clash! Compete in intense battles to prove your team's dominance. Show off your skills and strategy in this high-stakes tournament. A total prize pool of ₹25,000 is up for grabs. Time to dominate the arena!",
    image: "/gamingevent.png",
    details: {
      date: "15th November",
      prizePool: "₹25,000",
      numMembers: "4-6",
    },
    registerLink: "/register/gaming"
  },
  {
    title: "VIRAL VOGUE",
    description: "Unleash your marketing genius in the Viral Vogue Pitch, Reel & Win! challenge. Pitch quirky concepts like chai as an energy elixir or gourmet mess food in a thrilling 60-second Instagram reel. Submissions via tag/official link. With prizes worth ₹22,500, this is your chance to entertain, persuade, and go viral!",
    image: "/viralposter.png",
    details: {
      date: "15th November",
      prizePool: "₹22,500",
      numMembers: "1-2",
    },
    registerLink: "/register/viral-vogue"
  },
];