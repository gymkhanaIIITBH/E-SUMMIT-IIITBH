// src/data/sponsorData.ts

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export interface SponsorSection {
  title: string;
  color: string; // Tailwind color class
  sponsors: Sponsor[];
}

// import titleLogo from '/title1.svg';
// import platinum1 from '/title1.svg';
// import gold1 from '/easemytrip.png';
// import silver1 from '/monginis.png';
// import silver2 from '/gfg.png';
    import unstop from '/unstop.png'
import ComingSoon from '/coming.png'

export const sponsorData: SponsorSection[] = [
  // {
  //   title: 'Title Sponsors',
  //   color: 'text-orange-400',
  //   sponsors: [
  //     { name: 'Title Sponsor 1', logo: titleLogo },
  //     // Add more if needed
  //   ],
  // },
  // {
  //   title: 'Platinum Sponsors',
  //   color: 'text-orange-300',
  //   sponsors: [
  //     { name: 'Platinum Sponsor 1', logo: platinum1 },
  //     // Add more...
  //   ],
  // },
  {
    title: 'Gold Sponsors',
    color: 'text-yellow-300',
    sponsors: [
      { name: 'Unstop', logo: unstop, url:'https://unstop.com' },
      // Add more...
    ],
  },
  {
    title: 'Silver Sponsors',
    color: 'text-gray-400',
    sponsors: [
      { name: 'Coming Soon', logo: ComingSoon, url:'https://esummit.iiitbh.ac.in' },
      { name: 'Coming Soon', logo: ComingSoon,url:'https://esummit.iiitbh.ac.in'},
      // Add more...
    ],
  },
];
