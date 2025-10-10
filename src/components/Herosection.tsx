import heroImg from '../assets/react.svg'

const SocialIcon = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md mb-3 hover:bg-white/20 transition" aria-label={label}>
    {children}
  </div>
)

const Herosection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with orange overlay */}
      <div
        className="absolute inset-0 parallax"
        style={{ backgroundImage: `url(${heroImg})`, minHeight: '500px' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-amber-700/80 mix-blend-multiply" />

      {/* Top bar: logo left, menu right */}
      <header className="relative z-10 flex items-center justify-between p-8">
        <div className="w-10 h-10">
          {/* simple triangular logo */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <polygon points="50,5 95,95 5,95" fill="white" opacity="0.95" />
          </svg>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="hidden md:inline tracking-widest">MENU</span>
          <svg width="28" height="20" viewBox="0 0 24 24" className="text-white">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl">
          <p className="text-sm tracking-widest text-white/90 mb-6">IDEATE. INNOVATE. INCUBATE.</p>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white">Entrepreneurship Cell<br />IIT Kanpur</h1>

          <div className="mt-10">
            <button className="px-8 py-3 border border-white text-white tracking-wider hover:bg-white/10 transition">EXPLORE</button>
          </div>
        </div>
      </div>

      {/* Left vertical social icons */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center">
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
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center text-white rotate-90 origin-center">
        <span className="tracking-widest text-sm">SCROLL DOWN</span>
        <svg className="mt-4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"><path d="M12 5v14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 12l-7 7-7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </section>
  )
}

export default Herosection