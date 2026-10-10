import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & NAP summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo size="lg" variant="dark" />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable local electrical service provider in Kochi. Specializing in electrical maintenance, lighting installations, power works, and emergency call-outs.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-amber-300 font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-300 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: 7 Electrical Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              Electrical Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Contact Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">All Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact Details & Map</a>
              </li>
            </ul>

            <div className="pt-3">
              <span className="block text-xs uppercase font-bold text-slate-400 mb-1">Direct Contact</span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Call</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Local NAP verification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Serving Pachalam & Greater Kochi, Keralam
            </span>
            <span>•</span>
            <span>Owner: {BUSINESS_INFO.owner}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
