import React, { useState } from 'react';
import { 
  Wrench, 
  Lightbulb, 
  Zap, 
  AlertTriangle, 
  SearchCheck, 
  Leaf, 
  BatteryCharging,
  ArrowRight,
  MessageCircle,
  Phone,
  Check
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessInfo';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-100" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500 fill-amber-200" />;
      case 'Flame':
        return <AlertTriangle className="w-6 h-6 text-amber-600 fill-amber-100" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-amber-600" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-amber-600" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-amber-600" />;
      default:
        return <Zap className="w-6 h-6 text-amber-500" />;
    }
  };

  const filteredServices = SERVICES.filter(service => {
    if (selectedFilter === 'emergency') return service.id.includes('emergency') || service.id.includes('fault');
    if (selectedFilter === 'lighting') return service.id.includes('lighting') || service.id.includes('energy');
    if (selectedFilter === 'power') return service.id.includes('power') || service.id.includes('backups') || service.id.includes('maintenance');
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            Our Core Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Comprehensive Electrical Services in Kochi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Professional solutions tailored for residential homes, flats, shops, and offices across Pachalam and neighboring Kochi areas.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-slate-950 text-amber-400 border border-amber-400/50 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setSelectedFilter('emergency')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === 'emergency'
                  ? 'bg-slate-950 text-amber-400 border border-amber-400/50 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
              }`}
            >
              Emergency Services
            </button>
            <button
              onClick={() => setSelectedFilter('lighting')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === 'lighting'
                  ? 'bg-slate-950 text-amber-400 border border-amber-400/50 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
              }`}
            >
              Lighting & Energy
            </button>
            <button
              onClick={() => setSelectedFilter('power')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === 'power'
                  ? 'bg-slate-950 text-amber-400 border border-amber-400/50 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
              }`}
            >
              Power, Maintenance & Backups
            </button>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border border-slate-200 hover:border-amber-400 shadow-sm"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-13 h-13 rounded-xl flex items-center justify-center p-3 shadow-2xs bg-amber-50 border border-amber-200/80">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-md">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key inclusions */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Scope of Work:
                    </span>
                    <ul className="space-y-1.5">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-amber-400 bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.cleanPhone}?text=Hello%20MJ%20Electrical%20Services,%20I%20am%20inquiring%20about:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-slate-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 transition-colors"
                    title={`Ask on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle className="w-4 h-4 text-amber-600" />
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="p-2.5 rounded-lg text-slate-950 bg-amber-400 hover:bg-amber-500 transition-colors shadow-2xs border border-amber-400"
                    title="Call Now"
                  >
                    <Phone className="w-4 h-4 fill-slate-950" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner in Dark Navy & Gold */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950 text-white shadow-xl border-2 border-amber-400/30 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Need a custom electrical requirement in Kochi?</h4>
            <p className="text-slate-300 text-sm">
              Call MJ Electrical Services directly at {BUSINESS_INFO.phone} or send details via WhatsApp for an immediate assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
