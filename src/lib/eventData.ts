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
    image: "/eventCovers/BITSTORM.png",
    details: {
      date: "14th November",
      prizePool: "₹1,75,000",
      numMembers: "5",
    },
    registerLink: "/register/bitstorm"
  },
  {
    title: "STARTUP EXPO",
    description: "The Startup Expo is a crucial event where entrepreneurs pitch innovative ideas directly to investors, fostering valuable connections and promoting industry collaboration. It offers startups a vital opportunity to secure funding and achieve significant entrepreneurial success. A nominal registration fee of ₹5,000 applies for participation.",
    image: "/startupExpoPoster.jpg",
    details: {
      date: "14th November",
      prizePool: "N/A (Funding)",
      numMembers: "1",
    },
    registerLink: "/register/startup-expo"
  },
  {
    title: "BULLRUN",
    description: "This challenge for strategists blends financial analysis. Phase 1 is an online financial reasoning quiz. Phase 2 features thrilling live market simulations and real-time trading choices based on company data. Winners, judged on market understanding and strategy, claim prizes worth ₹50,000.",
    image: "/eventCovers/BULLRUN.png",
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
    image: "/eventCovers/ESHIP.png",
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
    image: "/eventCovers/IDEASTORM.png",
    details: {
      date: "15th November",
      prizePool: "₹85,000",
      numMembers: "4",
    },
    registerLink: "/register/ideastorm"
  },
  {
    title: "GAMING EVENT- Valorant",
    description: "Get ready to step into the Arena, Agents! It's time for the ultimate VALORANT showdown! Fight tooth and nail in intense, high-stakes matches to claim victory and prove your team's dominance. Sharpen your aim, strategize with your squad, and outplay your opponents to take home the glory. With a prize pool of ₹15,000 up for grabs, every round counts. Suit up, it’s time to dominate the competition!",
    image: "/eventCovers/Valo.png",
    details: {
      date: "15th November",
      prizePool: "₹15,000",
      numMembers: "5",
    },
    registerLink: "/register/gaming"
  },
    {
    title: "GAMING EVENT- BGMI",
    description: "Gear up for the ultimate VALORANT clash! Compete in intense battles to prove your team's dominance. Show off your skills and strategy in this high-stakes tournament. A total prize pool of ₹10,000 is up for grabs. Time to dominate the arena!",
    image: "/eventCovers/BGMI.png",
    details: {
      date: "15th November",
      prizePool: "₹10,000",
      numMembers: "4-5",
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