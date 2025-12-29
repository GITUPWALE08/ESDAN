import { useEffect } from 'react'; // Import useEffect
import { Outlet, useLocation } from 'react-router-dom'; // Remove ScrollRestoration, Add useLocation
import Navigation from './navigation';
import Chatbot from '../chatbot';
import Footer from './footer';

export default function Layout() {
  const { pathname } = useLocation();

  // Automatically scroll to top when the route (pathname) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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