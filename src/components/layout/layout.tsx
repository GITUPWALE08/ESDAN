import { useEffect } from 'react'; // Import useEffect
import { Outlet, useLocation } from 'react-router-dom'; // Remove ScrollRestoration, Add useLocation
import Navigation from './navigation';
import Chatbot from '../chatbot';
import Footer from './footer';

export default function Layout() {
// Automatically scroll to top when the route (pathname) changes
  const { pathname, hash } = useLocation(); // Get 'hash' too

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Small delay ensures page content is loaded
      }
    } 
    // If NO hash, scroll to top as usual
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      <Navigation />
      
      <main className="pt-20 lg:pt-0 lg:pl-72 min-h-screen flex flex-col transition-all duration-300">
        <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>

        <Footer />
      </main>

      <Chatbot />
    </div>
  );
}