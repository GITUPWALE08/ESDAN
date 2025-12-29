import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Info, Target, Users, Handshake } from 'lucide-react';
import { useGlobalState } from '../../globalStore/useGlobalState';
import noBG from '../../assets/images/ImprovedNoBg.png';

export default function Navigation() {
  const { sidebarOpen, setSidebarOpen, toggleSidebar } = useGlobalState();

  // Mobile Usability: Prevent background scrolling when menu is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={24} /> },
    { name: 'About & Mission', path: '/about', icon: <Info size={24} /> },
    { name: 'Projects', path: '/projects', icon: <Target size={24} /> },
    { name: 'Membership', path: '/membership', icon: <Users size={24} /> },
    { name: 'Partners', path: '/partners', icon: <Handshake size={24} /> },
  ];

  // Mobile-friendly link styles (larger padding)
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-6 py-4 md:py-3 rounded-xl transition-all duration-200 text-lg md:text-base font-medium ${
      isActive 
        ? 'bg-brand-gold/20 text-brand-gold border-l-4 border-brand-gold' 
        : 'text-white hover:bg-white/10 active:scale-98'
    }`;

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-brand-green/95 backdrop-blur-sm z-40 flex items-center px-4 shadow-md">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-white active:scale-90 transition-transform"
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <span className="ml-4 font-bold text-white tracking-widest">ESDAN</span>
      </div>

      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`
        fixed top-0 left-0 z-50 h-[100dvh] w-[80vw] max-w-xs bg-brand-green text-white shadow-2xl 
        transition-transform duration-300 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-72
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-8 flex flex-col items-center border-b border-white/10 bg-brand-green">
            <img src={noBG} alt="ESDAN Logo" className="w-24 h-auto drop-shadow-md" />
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={linkClass}
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Footer in Menu */}
          <div className="p-6 border-t border-white/10 text-center text-xs text-white/40">
            <p>Designed for Impact</p>
          </div>
        </div>
      </aside>
    </>
  );
}