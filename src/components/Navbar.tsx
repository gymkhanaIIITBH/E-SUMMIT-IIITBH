import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/eSummitLogo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  type MenuItem = { label: string; to: string };

  const menuItems: MenuItem[] = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Events', to: '/events' },
    { label: 'Sponsors', to: '/sponsors' },
    { label: 'Team', to: '/team' },
    { label: 'Speakers', to: '#speakers' },
  ];

  const handleNavClick = (item: MenuItem) => {
    setOpen(false);

    if (item.to.startsWith('#')) {
      const sectionId = item.to.replace('#', '');
      if (location.pathname === '/') {
        // Already on home → scroll to section
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Not on home → navigate first
        navigate('/');
        setTimeout(() => {
          if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 400); // adjust delay if needed
      }
    } else {
      navigate(item.to);
    }
  };

  return (
    <>
      <nav className="w-full flex fade-in items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 z-30">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
        </div>

        {/* MENU button for large screens */}
        <button
          className="hidden lg:block px-5 py-1 rounded-full border border-white text-white bg-black hover:bg-black/50 transition font-semibold tracking-wide fixed top-6 right-6 z-40"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>

        {/* Hamburger icon for small screens */}
        <button
          className="flex flex-col justify-between w-7 h-5 lg:hidden fixed top-7 right-6 z-40"
          onClick={() => setOpen(true)}
        >
          <span className="block w-full h-[2px] bg-white rounded"></span>
          <span className="block w-full h-[2px] bg-white rounded"></span>
          <span className="block w-full h-[2px] bg-white rounded"></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#111] z-50 shadow-lg transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#222]">
          <span className="text-xl font-bold text-white">E-Summit | IIITBH</span>
          <button
            className="text-white text-2xl p-2 rounded hover:bg-[#222]"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>

        <ul className="mt-6 px-6">
          {menuItems.map((item: MenuItem) => (
            <li key={item.label} className="py-3 border-b border-[#222]">
              <button
                onClick={() => handleNavClick(item)}
                className="block text-[#aaa] font-medium text-lg cursor-pointer hover:text-white transition w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
