import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Logo from '../assets/eSummitLogo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    type MenuItem = { label: string; to: string };

    // --- Menu Item Definitions (Unchanged) ---
    const menuItems: MenuItem[] = [
        { label: 'Home', to: '#home' },
        { label: 'About', to: '#about' },
        { label: 'Events', to: '/events' },
        { label: 'Sponsors', to: '/sponsors' },
        { label: 'Team', to: '/team' },
        { label: 'Speakers', to: '#speakers' },
    ];
    
    const VISUAL_MENU_ITEMS = [
        { label: 'Home', to: '#home', number: '01' },
        { label: 'About', to: '#about', number: '02' },
        { label: 'Events', to: '/events', number: '03' },
        { label: 'Sponsors', to: '/sponsors', number: '04' },
        { label: 'Team', to: '/team', number: '05' },
        { label: 'Speakers', to: '#speakers', number: '06' },
    ];


    const handleNavClick = (item: MenuItem) => {
        setOpen(false);
        
        if (item.to.startsWith('#')) {
            const sectionId = item.to.replace('#', '');
            if (location.pathname === '/') {
                if (sectionId === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/');
                setTimeout(() => {
                    if (sectionId === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        const el = document.getElementById(sectionId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100); 
            }
        } else {
            navigate(item.to);
        }
    };

    // --- Colors (Unchanged) ---
    const DRAWER_BG_COLOR = 'bg-[#101216]'; 
    const ITEM_TEXT_COLOR = 'text-gray-300'; 
    const HOVER_DARK_COLOR = 'bg-[#418200]'; 
    const ACTIVE_TEXT_COLOR = 'text-white'; 

    return (
        <>
            <nav className="w-full flex fade-in items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 z-30">
                <div onClick={()=> handleNavClick(menuItems[0])} className="flex items-center cursor-pointer">
                    <img src={Logo} alt="Logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
                </div>

                {/* ORIGINAL MENU button for large screens */}
                <button
                    className="hidden lg:block px-5 py-1 rounded-full border border-white text-white bg-black hover:bg-black/50 transition font-semibold tracking-wide fixed top-6 right-6 z-40"
                    onClick={() => setOpen(true)}
                >
                    MENU
                </button>

                {/* Hamburger icon for small screens */}
                <button
                    className="lg:hidden fixed top-6 right-6 z-40 p-2 rounded bg-black/50 backdrop-blur-sm hover:bg-black/70 transition"
                    onClick={() => setOpen(true)}
                >
                    <Menu className="w-6 h-6 text-white" />
                </button>
            </nav>

            {/* Mobile Drawer (Half-Width) */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-3/4 lg:w-1/2 ${DRAWER_BG_COLOR} z-50 transition-transform duration-150 ease-in-out transform
                    ${open ? 'translate-x-0' : 'translate-x-full'} 
                `}
            >
                {/* Close button styled */}
                <button
                    className="px-5 py-1 rounded-full border border-white text-white bg-transparent hover:bg-white/10 transition font-semibold tracking-wide absolute top-6 right-6 z-10"
                    onClick={() => setOpen(false)}
                >
                    CLOSE
                </button>


                {/* Menu List */}
                <ul className="w-full mt-24 divide-y divide-green-800 m-2">
                    {VISUAL_MENU_ITEMS.map((item, index) => {
                        const linkContent = menuItems[index]; 
                        
                        return (
                            <li 
                                key={item.label} 
                                className="relative w-full h-16 flex items-center overflow-hidden group cursor-pointer"
                                onClick={() => handleNavClick(linkContent)}
                            >
                                {/* Sliding Dark Hover Overlay (Faster Transition) */}
                                <div className={`
                                    absolute inset-0 
                                    ${HOVER_DARK_COLOR} 
                                    transform -translate-y-full 
                                    group-hover:translate-y-0 
                                    transition-transform duration-150
                                `}></div>

                                {/* Menu Content (Centered) */}
                                <div className="relative z-10 w-full flex items-center justify-center px-6"> 
                                    {/* Number/Tag - Centered Left Block */}
                                    <div className={`w-1/4 flex items-start justify-start ${ITEM_TEXT_COLOR} font-light text-sm font-sans`}> 
                                        {item.number}
                                    </div>
                                    
                                    {/* Label - Centered Right Block */}
                                    <div className="w-3/4 flex justify-start pl-8 sm:pl-16 md:pl-24 lg:pl-32"> 
                                        <span 
                                            className={`
                                                text-3xl font-regular tracking-tight font-montserrat 
                                                ${ITEM_TEXT_COLOR} 
                                                group-hover:${ACTIVE_TEXT_COLOR} transition-colors duration-150
                                            `}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
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