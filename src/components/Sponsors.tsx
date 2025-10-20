import { motion } from "framer-motion";
// import KfcLogo from "/kfc.png";
// import Aaskshlogo from "/Akash-logo.png";
// import easemytrip from "/easemytrip.png";
// import monginis from "/monginis.png";
// import GfgLogo from "/gfg.png"
// import MahindraLogo from '/mahindra.png'
// import ComingSoon from '/coming.png'
import unstopLogo from '/unstop.png'
// const sponsors = [
//   { name: "Aasksh", logoSrc: Aaskshlogo, url: "https://aakash.ac.in" },
//   { name: "KFC", logoSrc: KfcLogo, url: "https://online.kfc.co.in" },
//   { name: "Mahindra", logoSrc: MahindraLogo, url: "https://mahindra.com" },
//   { name: "EaseMyTrip", logoSrc: easemytrip, url: "https://easemytrip.com" },
//   { name: "Monginis", logoSrc: monginis, url: "https://monginis.com" },
//   { name: "GeekForGeeks", logoSrc: GfgLogo, url: "https://geeksforgeeks.org" },
  

// ];
const dummySponsors=[
  {name: "Unstop", logoSrc:unstopLogo, url:'https://unstop.com' },
  // {name: "Unstop", logoSrc:unstopLogo, url:'https://unstop.com' },
  // {name: "Unstop", logoSrc:unstopLogo, url:'https://unstop.com' },
  // {name: "Unstop", logoSrc:unstopLogo, url:'https://unstop.com' },
  // {name: "Unstop", logoSrc:unstopLogo, url:'https://unstop.com' },

  // {name: "Coming Soon", logoSrc:ComingSoon, url:'https://esummit.iiitbh.ac.in' },
  // {name: "Coming Soon", logoSrc:ComingSoon, url:'https://esummit.iiitbh.ac.in' },
  // {name: "Coming Soon", logoSrc:ComingSoon, url:'https://esummit.iiitbh.ac.in' },
  // {name: "Coming Soon", logoSrc:ComingSoon, url:'https://esummit.iiitbh.ac.in' },
  // {name: "Coming Soon", logoSrc:ComingSoon, url:'https://esummit.iiitbh.ac.in' },


]

const GoldSponsors = () => {
  // const scrollingSponsors = [...dummySponsors, ...dummySponsors]; // duplicate for smooth loop, but make it single as low sponsors
  const scrollingSponsors = [...dummySponsors];
  return (
    <section className="bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto text-center px-5 pt-20 pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#ffe600] text-2xl font-bold tracking-widest mb-8 text-center font-sans"
        >
          SPONSORS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative overflow-hidden"
        >
          {/* Left fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
            style={{ background: "linear-gradient(to right, #000 80%, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
            style={{ background: "linear-gradient(to left, #000 80%, transparent)" }}
          />
          {/* temporarily removed marquee-left animation as less sponsors  */}
          <div className="flex animate-marquee-lef justify-center items-center">
            {scrollingSponsors.map((sponsor, i) => (
              <motion.a
                key={`${sponsor.name}-${i}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex items-center justify-center flex-shrink-0 w-1/6 mx-2"
              >
                <img
                  src={sponsor.logoSrc}
                  alt={`${sponsor.name} Logo`}
                  className="h-20 w-auto transition-transform duration-500"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GoldSponsors;
