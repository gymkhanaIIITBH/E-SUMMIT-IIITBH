export interface TimelineEventData {
  title: string;
  description: string;
  image: string;
  schedule: {
    time: string;
    activity: string;
  }[];
  registrationStatus: 'Open' | 'Coming Soon' | 'Closed';
  registerLink: string;
}

export const eventData: TimelineEventData[] = [
  {
    title: "Ideastorm 4.0",
    description: "48-hour innovation challenge where teams develop solutions to real-world problems. Get mentored by industry experts and win exciting prizes.",
    image: "/ideastorm.png",
    schedule: [
      { time: "09:30", activity: "Registration & Team Formation" },
      { time: "10:30", activity: "Problem Statement Release" },
      { time: "11:00", activity: "Mentorship Session" }
    ],
    registrationStatus: "Open",
    registerLink: "https://tailwindcss.com/docs/colors"
  },
  {
    title: "Startup Summit",
    description: "Connect with successful entrepreneurs, investors, and industry leaders. Learn about the latest trends in entrepreneurship and innovation.",
    image: "/ideastorm.png",
    schedule: [
      { time: "10:00", activity: "Keynote Speech" },
      { time: "11:30", activity: "Panel Discussion" },
      { time: "14:00", activity: "Networking Session" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/summit"
  },
  {
    title: "Pitch Perfect",
    description: "Present your startup idea to a panel of investors and industry experts. Get valuable feedback and a chance to win seed funding.",
    image: "/ideastorm.png",
    schedule: [
      { time: "09:00", activity: "Pitch Preparation Workshop" },
      { time: "13:00", activity: "Preliminary Rounds" },
      { time: "16:00", activity: "Finals" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/pitch"
  },
  {
    title: "Tech Expo",
    description: "Showcase of cutting-edge technology innovations. Experience live demos and interact with tech pioneers.",
    image: "/ideastorm.png",
    schedule: [
      { time: "10:00", activity: "Exhibition Opens" },
      { time: "12:00", activity: "Tech Demos" },
      { time: "15:00", activity: "Innovation Awards" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/expo"
  },
  {
    title: "Workshop Series",
    description: "Hands-on workshops on emerging technologies, business strategies, and entrepreneurship fundamentals.",
    image: "/ideastorm.png",
    schedule: [
      { time: "09:30", activity: "AI & ML Workshop" },
      { time: "11:30", activity: "Business Model Canvas" },
      { time: "14:30", activity: "Digital Marketing" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/workshops"
  },
  {
    title: "Investor Connect",
    description: "One-on-one meetings with potential investors. Present your startup and explore funding opportunities.",
    image: "/ideastorm.png",
    schedule: [
      { time: "10:00", activity: "Investor Presentations" },
      { time: "12:00", activity: "One-on-One Meetings" },
      { time: "15:00", activity: "Deal Discussion" }
    ],
    registrationStatus: "Open",
    registerLink: "https://tailwindcss.com/docs/colors"
  },
  {
    title: "Hackathon",
    description: "24-hour coding challenge to build innovative solutions. Work with the latest technologies and win exciting prizes.",
    image: "/ideastorm.png",
    schedule: [
      { time: "08:00", activity: "Opening Ceremony" },
      { time: "09:00", activity: "Coding Begins" },
      { time: "08:00", activity: "Project Submission" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/hackathon"
  },
  {
    title: "Closing Ceremony",
    description: "Grand finale featuring award distribution, cultural performances, and networking dinner.",
    image: "/ideastorm.png",
    schedule: [
      { time: "17:00", activity: "Award Ceremony" },
      { time: "18:30", activity: "Cultural Show" },
      { time: "20:00", activity: "Networking Dinner" }
    ],
    registrationStatus: "Open",
    registerLink: "/register/closing"
  }
];