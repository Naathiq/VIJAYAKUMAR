import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  ExternalLink,
  CheckCircle,
  Zap,
  Building
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArea, setFormArea] = useState('');
  const [formService, setFormService] = useState(preselectedService || SERVICES[0].title);
  const [formUrgency, setFormUrgency] = useState<'Standard' | 'Urgent/Emergency' | 'Scheduled'>('Standard');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync preselectedService if it changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormService(preselectedService);
    }
  }, [preselectedService]);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello MJ Electrical Services,\n\nI would like to request electrical service:\n- Name: ${formName || 'Customer'}\n- Phone: ${formPhone || 'Not provided'}\n- Area/Address: ${formArea || 'Kochi'}\n- Service Needed: ${formService}\n- Urgency: ${formUrgency}\n- Details: ${formMessage || 'Standard service inquiry'}\n\nPlease let me know your availability.`;
    
    const url = `https://wa.me/${BUSINESS_INFO.cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Service Request: ${formService} - ${formName || 'Customer'}`);
    const body = encodeURIComponent(
      `Hello MJ Electrical Services,\n\nI need electrical assistance in Kochi.\n\nName: ${formName}\nPhone: ${formPhone}\nLocation: ${formArea}\nService: ${formService}\nUrgency: ${formUrgency}\nMessage: ${formMessage}\n\nThank you.`
    );
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Contact MJ Electrical Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Reach out directly for reliable electrical services, repairs, installations, and quick call-outs across Kochi.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          {/* Card 1: Click to Call */}
          <div className="p-6 rounded-2xl bg-amber-50/70 border-2 border-amber-200/90 hover:border-amber-400 transition-all shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md border border-amber-400">
                <Phone className="w-6 h-6 fill-slate-950" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-900">Phone (Click-to-Call)</span>
                <h3 className="text-xl font-black text-slate-950 mt-1">{BUSINESS_INFO.phone}</h3>
                <p className="text-xs text-slate-600 mt-1">Direct call with MJ Electrical Services</p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-xs transition-colors border border-amber-400 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Chat Button in Dark Navy & Gold */}
          <div className="p-6 rounded-2xl bg-slate-950 text-white border-2 border-slate-800 hover:border-amber-400/50 transition-all shadow-md flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md border border-amber-400">
                <MessageCircle className="w-6 h-6 text-slate-950 fill-slate-950/20" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">WhatsApp Chat</span>
                <h3 className="text-xl font-black text-white mt-1">Quick Message</h3>
                <p className="text-xs text-slate-300 mt-1">Share photos/videos of faulty switchboards</p>
              </div>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 border border-amber-400 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Email Button */}
          <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-amber-400 transition-all shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md border border-amber-400/30">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-600">Email Address</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-1 truncate" title={BUSINESS_INFO.email}>
                  {BUSINESS_INFO.email}
                </h3>
                <p className="text-xs text-slate-600 mt-1">For quotes, estimates & commercial queries</p>
              </div>
            </div>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>

        </div>

        {/* Main Grid: Left Service Request Form, Right Address & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Service Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-950">Request a Service or Callback</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in your requirement below to connect directly with Vijayakumar via WhatsApp or Email.
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-700 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong>Thank you!</strong> Your request has opened in WhatsApp. If you also wish to email, click "Send as Email" below.
                </div>
              </div>
            )}

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rahul Menon"
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
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Select Service
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Locality / Address in Kochi
                  </label>
                  <input
                    type="text"
                    value={formArea}
                    onChange={(e) => setFormArea(e.target.value)}
                    placeholder="e.g. Pachalam / Chittoor Road / Kaloor"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Urgent/Emergency', 'Scheduled'] as const).map((urgency) => (
                    <button
                      type="button"
                      key={urgency}
                      onClick={() => setFormUrgency(urgency)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        formUrgency === urgency
                          ? urgency === 'Urgent/Emergency'
                            ? 'bg-red-50 text-red-700 border-red-300 font-bold'
                            : 'bg-amber-100 text-amber-950 border-amber-400 font-bold'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {urgency}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Problem Description (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your issue (e.g. MCB tripping repeatedly, need new LED lighting in living room, inverter line wiring)..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm border border-amber-400 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Address Details & Google Maps Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official NAP Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-950">Official Business Details</h3>
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500">Business Name</span>
                  <p className="font-extrabold text-slate-950">{BUSINESS_INFO.name}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-500">Owner</span>
                  <p className="font-bold text-slate-950">{BUSINESS_INFO.owner}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-500">Full Address</span>
                  <p className="font-medium text-slate-800 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs text-slate-600">
                  <span>Locality: Pachalam, Kochi</span>
                  <span>PIN: 682018</span>
                  <span>Keralam, India</span>
                </div>
              </div>
            </div>

            {/* Google Maps Location Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-950 text-white border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Google Maps Location
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-400 hover:underline"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed iframe */}
              <div className="relative w-full h-64 bg-slate-100">
                <iframe
                  title="MJ Electrical Services Location in Pachalam Kochi"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">68/331, Chittoor Road, Pachalam</span>
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
