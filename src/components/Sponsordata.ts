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
import gold1 from '/easemytrip.png';
import silver1 from '/monginis.png';
import silver2 from '/gfg.png';

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
      { name: 'EASE MY TRIP', logo: gold1, url:'https://www.easemytrip.com' },
      // Add more...
    ],
  },
  {
    title: 'Silver Sponsors',
    color: 'text-gray-400',
    sponsors: [
      { name: 'Monginis', logo: silver1, url:'https://www.monginis.net' },
      { name: 'GeeksForGeeks', logo: silver2 ,url:'https://www.geeksforgeeks.org'},
      // Add more...
    ],
  },
];
