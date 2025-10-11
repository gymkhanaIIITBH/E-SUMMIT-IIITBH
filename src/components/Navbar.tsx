import React, { useState } from 'react'
import Logo from '../assets/eSummitLogo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    'Home',
    'About',
    'Events',
    'Gallery',
    'Sponsors',
    'Contact',
  ];
  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 z-30">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>
        <button
          className="px-6 py-2 rounded-full border border-white text-white bg-transparent hover:bg-white/10 transition font-semibold tracking-wide fixed top-6 right-8 z-40"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          MENU
        </button>
      </nav>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111] z-50 shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#222]">
          <span className="text-2xl font-bold text-white">E-Summit | IIITBH</span>
          <button
            className="text-white text-2xl p-2 rounded hover:bg-[#222]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul className="mt-6 px-6">
          {menuItems.map((item) => (
            <li
              key={item}
              className="py-3 border-b border-[#222] text-[#888] font-semibold text-lg cursor-pointer hover:text-white transition"
              tabIndex={0}
              role="menuitem"
            >
              {item}
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
  )
}

export default Navbar