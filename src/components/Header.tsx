import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X } from 'lucide-react';

interface HeaderProps {
  onDonateClick: () => void;
  onPageSelect: (page: string) => void;
  activePage: string;
}

export const Header: React.FC<HeaderProps> = ({ onDonateClick, onPageSelect, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'causes', label: 'Key Causes' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Campaign Events' },
    { id: 'volunteer', label: 'Join Us' },
  ];

  const handleNavClick = (id: string) => {
    onPageSelect(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col z-40 bg-white font-sans">
      {/* Top Banner Contact Information */}
      <div className="bg-emerald-950 text-white text-[11px] lg:text-xs py-2 px-6 flex flex-col sm:flex-row items-center justify-between border-b border-emerald-900 gap-2 font-mono">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          <span className="flex items-center gap-1.5 text-emerald-250 select-none">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <a href="mailto:info@charitics.org" className="hover:text-amber-400 transition-colors">info@charitics.org</a>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-250 select-none">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <a href="tel:+15550192834" className="hover:text-amber-400 transition-colors">+1 (555) 019-2834</a>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-emerald-250 select-none">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            742 Evergreen Terrace, NY
          </span>
        </div>
        
        {/* Social Share links & Tagline */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 font-sans hidden lg:inline-block">Follow Our Journey:</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-amber-400 transition-colors text-zinc-300">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors text-zinc-300">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors text-zinc-300">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors text-zinc-300">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white text-zinc-800 py-4 px-6 flex items-center justify-between border-b border-neutral-100 shadow-sm sticky top-0 md:relative">
        
        {/* Logo block */}
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavClick('home')}>
          <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">
            <Heart className="w-5 h-5 fill-white text-emerald-100" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-sans tracking-tight text-emerald-950 flex items-center">
              Char<span className="text-amber-500">itics</span>
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">NGO & Non Profit</p>
          </div>
        </div>

        {/* Laptop/Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-neutral-600 select-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`pb-1 transition-all hover:text-emerald-700 relative text-left cursor-pointer ${
                activePage === item.id 
                  ? 'text-emerald-700' 
                  : ''
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={() => handleNavClick('volunteer')}
            className="text-[13px] font-semibold hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Become Volunteer
          </button>
          <button
            onClick={onDonateClick}
            className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs py-2.5 px-5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            Donate Now
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-700 hover:text-emerald-700 p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Draw Down */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-50 shadow-inner px-6 py-4 space-y-3.5 border-b border-neutral-100 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-medium text-neutral-600 text-[14px] text-left">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 hover:text-emerald-700 flex items-center justify-between text-left cursor-pointer ${
                  activePage === item.id ? 'text-emerald-700 font-bold' : ''
                }`}
              >
                <span>{item.label}</span>
                {activePage === item.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('volunteer')}
              className="w-full text-center bg-zinc-200 hover:bg-zinc-300 text-neutral-800 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer"
            >
              Become Volunteer
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDonateClick();
              }}
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-emerald-100" />
              Donate To A Cause
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
