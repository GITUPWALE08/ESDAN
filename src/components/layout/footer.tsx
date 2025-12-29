import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-gold">ESDAN</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Economic and Social Development Ambassadors of Nigeria. 
              Redefining development through innovation, enterprise, and collaboration.
            </p>
          </div>

          {/* Column 2: Contact Info (Extracted from your original code) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-gold">Contact Info</h4>
            
            <div className="space-y-3">
              <a 
                href="mailto:info@company.com" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-brand-gold" />
                <span>info@company.com</span>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <Phone size={18} className="text-brand-gold mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/2348123932006" className="hover:text-white transition-colors">+234-8123932006</a>
                  <a href="https://wa.me/2348030752067" className="hover:text-white transition-colors">+234-8030752067</a>
                  <a href="https://wa.me/15857309793" className="hover:text-white transition-colors">+1 (585) 730-0793</a>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Ladipo+Akande+Complex+Abayomi+Ibadan" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MapPin size={18} className="text-brand-gold mt-1" />
                <span>Ladipo Akande Complex Abayomi, Iwo Road, Ibadan, Oyo State, Nigeria</span>
              </a>
            </div>
          </div>

          {/* Column 3: Socials / Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-gold">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} ESDAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}