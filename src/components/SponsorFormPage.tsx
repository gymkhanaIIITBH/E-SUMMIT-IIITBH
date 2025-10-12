import heroImg from '../../public/hero-bg.svg'
import { Check } from 'lucide-react'
import { InteractiveHoverButton } from './InteractiveHoverButton ';
import { useEffect } from 'react';
const tiers = [
  "Poster Mention",
  "Banner Mention",
  "Website Mention",
  "Social Media Post",
  "Story Mention",
  "Press and Media Mention",
  "Host Mention",
  "Company’s Link on E-Summit’s Website",
  "Pole Flex",
  "Problem Statement for Hackathon",
  "Speaker Session 1 Hour",
  "Registrations on Company’s Platform",
  "Custom Reel",
  "Gate Décor Mention",
  "Drop Down Banner",
  "Main Stage Banner",
  "Exclusive Publicity Banner",
  "1-Min Promotional Video on Main Screen",
  "Judge for Particular Events",
  "Merchandise Mention",
  "Mention on Momento & Certificates",
  "Specific Custom Event",
]

const sponsorships = {
  Silver: [0, 1, 2, 3, 4, 5, 7, 8],
  Gold: [0, 1, 2, 3, 4, 5, 7, 8, 9],
  Platinum: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13],
  Title: Array.from(Array(tiers.length).keys()), // All features
}

const SponsorForm = () => {
    const sponsorhandler = () => {
        window.location.href = 'https://google.co.in';
      }
       useEffect(() => {
          // Scroll to top when this page loads
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#345a31]/90 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide mt-20">
          SPONSORSHIP TIERS
        </h1>

        <div className="overflow-x-auto">
          <div className="min-w-[1000px] grid grid-cols-5 gap-2 border-t border-l border-gray-600 rounded-lg overflow-hidden bg-black/30">
            {/* Header Row */}
            <div className="bg-green-600/90 text-white font-semibold text-lg px-4 py-4">
              Benefits
            </div>
            {["Silver", "Gold", "Platinum", "Title"].map((tier, i) => (
              <div
                key={i}
                className="bg-black/80 text-center py-4 text-lg font-bold border-r border-b border-gray-600"
              >
                {tier}
                <div className="text-sm text-gray-400">
                  (
                  {tier === "Silver"
                    ? "50,000"
                    : tier === "Gold"
                    ? "1,00,000"
                    : tier === "Platinum"
                    ? "2,00,000"
                    : "3,00,000"}
                  )
                </div>
              </div>
            ))}

            {/* Rows */}
            {tiers.map((feature, rowIndex) => (
              <>
                <div
                  key={`feature-${rowIndex}`}
                  className="bg-green-700/70 px-4 py-3 border-b border-r border-gray-600 font-medium"
                >
                  {feature}
                </div>
                {["Silver", "Gold", "Platinum", "Title"].map((tier) => (
                  <div
                    key={`${tier}-${rowIndex}`}
                    className="flex justify-center items-center border-b border-r border-gray-600 py-3 bg-black/50"
                  >
                    {sponsorships[tier as keyof typeof sponsorships].includes(
                      rowIndex
                    ) && (
                      <Check
                        className={`w-5 h-5 ${
                          tier === "Title"
                            ? "text-green-400 drop-shadow-[0_0_6px_#00ff00]"
                            : "text-white"
                        }`}
                        strokeWidth={3}
                      />
                    )}
                  </div>
                ))}
              </>
            ))}
            
          </div>
        </div>
        <div className="flex justify-center mt-10">
            <InteractiveHoverButton onClick={sponsorhandler}>Sponsor Us</InteractiveHoverButton>
        </div>
      </div>
      
    </section>
  )
}

export default SponsorForm
