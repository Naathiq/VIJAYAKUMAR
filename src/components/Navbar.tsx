import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 text-white">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center" aria-label="MJ Electrical Services Home">
            <BrandLogo size="md" variant="dark" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Book Service</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.cleanPhone}?text=Hello%20MJ%20Electrical%20Services,%20I%20need%20electrical%20assistance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/40 transition-all hover:shadow-xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:brightness-105 shadow-sm shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-amber-400 text-slate-950 shadow-xs font-bold"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-amber-400 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md text-sm"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.cleanPhone}?text=Hello%20MJ%20Electrical%20Services,%20I%20need%20electrical%20assistance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-amber-300 bg-slate-900 hover:bg-slate-800 border border-slate-850 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-slate-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Request Service Callback</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
