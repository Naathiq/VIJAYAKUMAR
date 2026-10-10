import React from 'react';
import { Phone, MessageCircle, Lightbulb } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200/80 px-3 py-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-12 gap-2">
        {/* Call Now Button - 5 cols */}
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="col-span-5 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-extrabold text-slate-950 bg-amber-400 active:bg-amber-500 shadow-md shadow-amber-400/30 border border-amber-400 text-xs text-center"
        >
          <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button - 4 cols in Dark Navy */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-bold text-white bg-slate-950 active:bg-slate-900 border border-slate-800 text-xs text-center"
        >
          <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Book Service - 3 cols */}
        <button
          onClick={onOpenBooking}
          className="col-span-3 flex items-center justify-center gap-1 py-3 px-1 rounded-xl font-semibold text-slate-800 bg-slate-100 active:bg-slate-200 border border-slate-300 text-[11px] text-center cursor-pointer"
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
