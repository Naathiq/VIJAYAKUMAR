import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  PhoneCall, 
  TrendingDown, 
  HeartHandshake,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/businessInfo';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-amber-500" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Reliable Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Choose MJ Electrical Services?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            When electrical safety and steady power matter, choosing a dedicated local specialist makes all the difference.
          </p>
        </div>

        {/* 6 Core Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-amber-50/25 to-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:bg-slate-950 group-hover:text-amber-400 transition-colors">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Local Commitment Box in Dark Navy & Gold */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border-2 border-amber-400/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-slate-950" />
            </div>
            <p className="text-sm text-slate-200">
              <strong className="text-amber-300">100% Direct Service:</strong> Speak directly with MJ Electrical Services for all questions, consultations, and on-site visits across Kochi.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 border border-amber-400 transition-colors shadow-sm cursor-pointer"
          >
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
