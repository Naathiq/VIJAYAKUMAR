import React from 'react';
import { Phone, MessageCircle, Lightbulb, Zap, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0f1e] to-slate-950 text-white pt-12 pb-16 md:pt-18 md:pb-24 border-b border-slate-800">
      {/* Subtle Ambient Light Accents */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />

      {/* High-Precision Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Reliable Electrical Services in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400">
                Kochi
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
              Electrical maintenance, lighting, power, emergency service, energy efficiency, backups.
            </p>

            {/* Required Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              {/* Button 1: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Button 2: WhatsApp Us */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-bold text-amber-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/40 shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 text-amber-400 fill-amber-400/20 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Safety-First Workmanship
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Direct Lead Electrician
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                No Agency Middlemen
              </span>
            </div>

          </div>

          {/* Right Column: Visual Contractor Profile & Service Hub */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200/80 text-slate-900">
                
                {/* Header with Brand Logo */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <BrandLogo size="md" variant="light" />
                </div>

                {/* Illustrated Service Feature */}
                <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                  <div className="w-13 h-13 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center shrink-0 shadow-xs">
                    <Lightbulb className="w-6 h-6 text-amber-400 fill-amber-400/20" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950">
                      Rapid On-Site Callout
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Serving residential flats, homes, retail stores, and offices from Chittoor Road, Pachalam.
                    </p>
                  </div>
                </div>

                {/* Key Quick Info Grid */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-600 font-medium">Base Station</span>
                    <span className="font-semibold text-slate-950">Chittoor Rd, Pachalam</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-600 font-medium">Direct Contact</span>
                    <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-extrabold text-amber-700 hover:text-amber-800 hover:underline transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Fast Contact Link on Card */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-900 text-xs font-semibold text-slate-200 transition-colors group"
                  >
                    <span className="text-slate-200">Have an electrical problem?</span>
                    <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Direct Inquiries &rarr;
                    </span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
