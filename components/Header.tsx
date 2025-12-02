import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About Legacy', href: '#legacy' },
  { label: 'Products', href: '#products' },
  { label: 'Procurement', href: '#process' },
];

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
          {/* Custom Logo SVG mimicking the provided image */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0 group-hover:scale-105 transition-transform">
             <svg viewBox="0 0 100 80" className="w-full h-full">
               {/* Dark C/G shape */}
               <path 
                 d="M 75 15 H 35 A 25 25 0 0 0 35 65 H 75" 
                 fill="none" 
                 stroke="#1e293b" 
                 strokeWidth="12" 
                 strokeLinecap="square"
               />
               {/* Teal Plus Sign */}
               <path 
                 d="M 50 25 V 55 M 35 40 H 65" 
                 stroke="#009CA6" 
                 strokeWidth="10" 
                 strokeLinecap="square"
               />
             </svg>
          </div>
          <span className="text-base sm:text-xl md:text-2xl font-extrabold text-medical-600 tracking-tight uppercase">
            <span className="hidden sm:inline">Ghazi Enterprises</span>
            <span className="sm:hidden">Ghazi</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button 
            onClick={onOpenQuote}
            className="flex items-center gap-2 bg-medical-600 hover:bg-medical-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-medical-600/20 hover:shadow-medical-600/40 transform hover:-translate-y-0.5"
          >
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm sm:text-base font-medium text-slate-700 py-2 sm:py-2.5 border-b border-slate-50 hover:text-medical-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full bg-medical-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold mt-2 text-sm sm:text-base hover:bg-medical-700 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};