import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';
import { BrandLogo } from './BrandLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [urgency, setUrgency] = useState<'Standard' | 'Urgent' | 'Scheduled'>('Standard');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello MJ Electrical Services,\n\nI want to request electrical service:\n• Name: ${name || 'Customer'}\n• Phone: ${phone || 'Not provided'}\n• Location: ${locality || 'Kochi'}\n• Service: ${service}\n• Urgency: ${urgency}\n• Notes: ${notes || 'None'}\n\nPlease let me know your availability.`;

    const url = `https://wa.me/${BUSINESS_INFO.cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border-2 border-amber-300 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Fixed Top Header - Always Visible at the Top */}
        <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shrink-0 shadow-2xs">
          {/* Brand Identity */}
          <BrandLogo size="sm" variant="light" />

          {/* Top Right Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
              title="Close window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto px-4 sm:px-6 py-5 space-y-5 flex-1">
          {/* Title Area */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              Get a Service / Request Callback
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Serving Pachalam, Chittoor Road, and greater Kochi. Connect directly with MJ Electrical Services.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Select Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-white"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 99405 08887"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Locality in Kochi
              </label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="e.g. Pachalam / Vaduthala / Kaloor"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Urgency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Standard', 'Urgent', 'Scheduled'] as const).map((level) => (
                  <button
                    type="button"
                    key={level}
                    onClick={() => setUrgency(level)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      urgency === level
                        ? 'bg-amber-100 text-amber-950 border-amber-400 font-bold'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Brief Description
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us what you need help with..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm border border-amber-400 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call Direct</span>
                </a>

                {/* Back Button at the bottom */}
                <button
                  type="button"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-amber-400 bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-colors text-xs cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>Back to Services</span>
                </button>
              </div>
            </div>
          </form>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Direct response from MJ Electrical Services</span>
          </div>
        </div>
      </div>
    </div>
  );
};
