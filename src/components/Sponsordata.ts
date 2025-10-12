// src/data/sponsorData.ts

export interface Sponsor {
  name: string;
  logo: string;
}

export interface SponsorSection {
  title: string;
  color: string; // Tailwind color class
  sponsors: Sponsor[];
}

import titleLogo from '/title1.svg';
import platinum1 from '/title1.svg';
import gold1 from '/title1.svg';
import silver1 from '/title1.svg';
import silver2 from '/title1.svg';

export const sponsorData: SponsorSection[] = [
  {
    title: 'Title Sponsors',
    color: 'text-orange-400',
    sponsors: [
      { name: 'Title Sponsor 1', logo: titleLogo },
      // Add more if needed
    ],
  },
  {
    title: 'Platinum Sponsors',
    color: 'text-orange-300',
    sponsors: [
      { name: 'Platinum Sponsor 1', logo: platinum1 },
      // Add more...
    ],
  },
  {
    title: 'Gold Sponsors',
    color: 'text-yellow-300',
    sponsors: [
      { name: 'Gold Sponsor 1', logo: gold1 },
      // Add more...
    ],
  },
  {
    title: 'Silver Sponsors',
    color: 'text-gray-300',
    sponsors: [
      { name: 'Silver Sponsor 1', logo: silver1 },
      { name: 'Silver Sponsor 2', logo: silver2 },
      // Add more...
    ],
  },
];
