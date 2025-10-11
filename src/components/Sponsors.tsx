import devfolioLogo from '/Devfolio_Logo.svg';
import polygonLogo from '/Polygon_Logo.svg';
import ethIndiaLogo from '/ethindia-White.svg';
import solanaLogo from '/Devfolio_Logo.svg';
import replitLogo from '/Polygon_Logo.svg';
import filecoinLogo from '/ethindia-White.svg';

const sponsors = [
  { name: 'Devfolio', logoSrc: devfolioLogo, url: 'https://devfolio.co' },
  { name: 'Polygon', logoSrc: polygonLogo, url: 'https://polygon.technology' },
  { name: 'ETHIndia', logoSrc: ethIndiaLogo, url: 'https://ethindia.co' },
  { name: 'Solana', logoSrc: solanaLogo, url: 'https://solana.com' },
  { name: 'Replit', logoSrc: replitLogo, url: 'https://replit.com' },
  { name: 'Filecoin', logoSrc: filecoinLogo, url: 'https://filecoin.io' },
];

const GoldSponsors = () => {
  const scrollingSponsors = [...sponsors, ...sponsors]; // duplicate for smooth loop

  return (
    <section className="bg-black overflow-hidden">
      <div className="container mx-auto text-center px-5 pt-20 pb-20">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">
          Sponsors
        </h2>

        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #000 80%, transparent)'}} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #000 80%, transparent)'}} />
          <div className="flex animate-marquee-left items-center">
            {scrollingSponsors.map((sponsor, i) => (
              <a
                key={`${sponsor.name}-${i}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
                className="flex items-center justify-center flex-shrink-0 w-1/6 mx-2"
              >
                <img
                  src={sponsor.logoSrc}
                  alt={`${sponsor.name} Logo`}
                  className="h-20 w-auto transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSponsors;
