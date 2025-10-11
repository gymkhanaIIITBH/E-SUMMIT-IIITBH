import heroImg from '../../public/hero-bg.svg'
import heroContent from '../../public/hero content.png'
import { InteractiveHoverButton } from './InteractiveHoverButton ';
const SocialIcon = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md mb-3 hover:bg-white/20 transition" aria-label={label}>
    {children}
  </div>
)

const Herosection = () => {

  const handleScroll = () => {
    window.scrollBy({
      top: 500,   // No vertical scroll
      left: 0, // Scrolls 500px to the right
      behavior: 'smooth', // Smooth scrolling
    });
  };
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with orange overlay */}
      <div
        className="absolute inset-0 parallax"
        style={{ backgroundImage: `url(${heroImg})`, minHeight: '500px' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#4fbf44]  mix-blend-multiply" />

      {/* Top bar: logo left, menu right */}
      <header className="relative z-10 flex items-center justify-between p-8">
        {/* <div className="w-20 h-20">
          <img src={Logo} height={200} width={200}/>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="hidden font-newsreader md:inline tracking-widest">MENU</span>
          <svg width="28" height="20" viewBox="0 0 24 24" className="text-white">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className='h-56 w-full bg-center' style={{backgroundImage: `url(${heroContent})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="mt-10 flex flex-row items-center justify-center gap-6">
            <InteractiveHoverButton onClick={handleScroll}>EXPLORE</InteractiveHoverButton>
             <button
            className="px-6 py-2 rounded-3xl bg-white text-black dark:bg-black dark:text-white border font-semibold transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
             REGISTER
          </button> 
          </div>
        </div>
      </div>

      {/* Left vertical social icons */}
      <div className="absolute left-8 top-[70%] transform -translate-y-1/2 z-10 flex flex-col items-center">
        <div className="h-24 w-px bg-white/30 mb-6" />
        <SocialIcon label="facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.4c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.34v1.6h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z"/></svg>
        </SocialIcon>
        <SocialIcon label="linkedin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5a2.5 2.5 0 11.02 0zM3 8.98h4v12H3zM8.5 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12v6.28h-4v-5.58c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68h-4z"/></svg>
        </SocialIcon>
        <SocialIcon label="instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.6A4.4 4.4 0 1016.4 13 4.4 4.4 0 0012 8.6zM18.4 7a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
        </SocialIcon>
      </div>

      {/* Right vertical scroll indicator */}
      <div className='scrolldown absolute right-6 top-[80%]'>
      <div className=" absolute right-0 top-1/2  scroll-icon  z-10 flex   items-center text-white ">
        <span className="tracking-widest inline text-nowrap text-sm">SCROLL DOWN</span>
        <svg className='h-8 w-8 mx-2 inline text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.0701H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>      </div>
      </div>
    </section>
  )
}

export default Herosection