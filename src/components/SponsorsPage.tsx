import { useEffect } from 'react';
import heroImg from '../../public/hero-bg.svg';
import { sponsorData } from './Sponsordata';
import { useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from './InteractiveHoverButton ';

const SponsorsPage = () => {
  const navigate = useNavigate();

 useEffect(() => {
    // Smoothly scroll to top when this page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const sponsorhandler = () => {
    navigate('/sponsorform');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#345a31] mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 space-y-20">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide mb-4">
            Our Sponsors
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We are grateful to our amazing sponsors for their generous support.
          </p>
        </div>

        {/* Sponsor Sections */}
        {sponsorData.map((section) => (
          <div key={section.title} className="w-full text-center">
            <h2 className={`text-4xl font-bold mb-8 ${section.color}`}>
              {section.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {section.sponsors.map((sponsor) => (
                <img
                  key={sponsor.name}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-40 h-20 object-contain hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        ))}
        <InteractiveHoverButton onClick={sponsorhandler}>
          Sponsor Us
        </InteractiveHoverButton>
      </div>
    </section>
  );
};

export default SponsorsPage;
