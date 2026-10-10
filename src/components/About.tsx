import React from 'react';
import { User, MapPin, Phone, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            About Our Business
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Your Reliable Local Electrician in Kochi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated electrical solutions delivered with personal accountability, safety-first procedures, and prompt local response.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Introduction Text & Core Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                <strong className="text-slate-950 font-bold">MJ Electrical Services</strong> is a reliable local electrical service provider serving customers in Kochi and surrounding areas. Based conveniently on Chittoor Road in Pachalam, we offer specialized electrical support directly to residential homes, residential apartments, offices, and retail businesses.
              </p>
              <p className="text-base leading-relaxed">
                Whether you need immediate help with a tripping circuit breaker, routine electrical maintenance, complete lighting installations, power line setups, or inverter and backup wiring, our approach is built on prompt communication, high safety standards, and thorough attention to detail.
              </p>
              <p className="text-base leading-relaxed">
                By contacting us directly, you work with an electrician who understands local building electrical layouts and power conditions in Kochi—ensuring transparent service without agency middlemen or delays.
              </p>
            </div>



            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm shadow-amber-400/25 border border-amber-400 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
              >
                Request Service Form &rarr;
              </button>
            </div>
          </div>

          {/* Right: Business & Contact Information Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl shadow-slate-950/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
              
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-md border border-amber-400/30">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">Business Owner</span>
                  <h3 className="text-xl font-extrabold text-slate-950">{BUSINESS_INFO.owner}</h3>
                  <p className="text-xs text-slate-600">MJ Electrical Services</p>
                </div>
              </div>

              {/* Verified Business Information Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Address</h4>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</h4>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-base font-bold text-amber-700 hover:underline inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Contact</h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-amber-700 hover:underline break-all inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Prompt electrical fault diagnosis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Residential & commercial power services</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Direct phone communication with Vijayakumar</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
