import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [municipality, setMunicipality] = useState('Málaga Capital');
  const [propertyType, setPropertyType] = useState('Complete Apartment Renovation');
  const [comments, setComments] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 14:00)');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      errs.phone = 'Please enter a valid contact phone number.';
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!municipality.trim()) {
      errs.municipality = 'Please select or specify your location in Málaga.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomRef = `DONE-MLG-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setComments('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-5 sm:p-8 text-slate-100 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1 mb-5 sm:mb-6 pr-8">
              <span className="text-[11px] sm:text-xs font-bold text-teal-400 uppercase tracking-wider">
                Free Technical Inspection & Quote
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                Request Free On-Site Laser Survey
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                A licensed site engineer will visit your property in Málaga or Costa del Sol within 24-48 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Henderson"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600"
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +34 612 34 56 78"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 font-mono"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600"
                  />
                  {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                </div>

                {/* Municipality / Zone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Location in Málaga *
                  </label>
                  <select
                    value={municipality}
                    onChange={(e) => setMunicipality(e.target.value)}
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white"
                  >
                    <option value="Málaga Capital">Málaga Capital (Centro, Malagueta, Limonar...)</option>
                    <option value="Torremolinos">Torremolinos</option>
                    <option value="Benalmádena">Benalmádena</option>
                    <option value="Fuengirola">Fuengirola</option>
                    <option value="Mijas">Mijas (Pueblo / Costa)</option>
                    <option value="Marbella">Marbella / Puerto Banús</option>
                    <option value="San Pedro de Alcántara">San Pedro de Alcántara</option>
                    <option value="Estepona">Estepona</option>
                    <option value="Rincón de la Victoria">Rincón de la Victoria / Nerja</option>
                    <option value="Other Málaga Municipality">Other location in Málaga province</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Property Type */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white"
                  >
                    <option value="Complete Apartment Renovation">Complete Apartment Renovation</option>
                    <option value="Villa / Detached House">Luxury Villa / Townhouse</option>
                    <option value="Kitchen Remodeling">Designer Kitchen</option>
                    <option value="Bathroom Remodeling">Spa Bathroom</option>
                    <option value="Commercial Space">Commercial / Retail Premises</option>
                  </select>
                </div>

                {/* Preferred time */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Time for Visit
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white"
                  >
                    <option value="Morning (09:00 - 14:00)">Morning (09:00 - 14:00)</option>
                    <option value="Afternoon (16:00 - 19:30)">Afternoon (16:00 - 19:30)</option>
                    <option value="As soon as possible">As soon as possible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Project Details (optional)
                </label>
                <textarea
                  rows={2}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g. Open kitchen, replace flooring and bathrooms..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 resize-none"
                />
              </div>

              {/* Legal & Guarantee Note */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p>
                  Confidential data handling under GDPR. No commission brokers or hidden fees.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 min-h-[48px] px-4 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Survey Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-4 sm:py-6 space-y-4 sm:space-y-5 animate-fade-in">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-500/10 border border-teal-500/40 text-teal-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-xs font-mono font-bold text-teal-400">
                REFERENCE: {ticketRef}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request Successfully Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Our chief site engineer for <strong className="text-white">{municipality}</strong> will call you at <span className="font-mono text-teal-400 font-bold">{phone}</span> within 2 working hours.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                Summary of your booking:
              </p>
              <div className="flex justify-between text-slate-300">
                <span>Project type:</span>
                <span className="font-medium text-white truncate ml-2">{propertyType}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Location:</span>
                <span className="font-medium text-white">{municipality}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Preferred slot:</span>
                <span className="font-medium text-white">{preferredTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2 max-w-md mx-auto">
              <a
                href={`tel:${COMPANY_CONTACT.phoneClean}`}
                className="w-full sm:flex-1 py-3 min-h-[44px] px-4 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Us: {COMPANY_CONTACT.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 min-h-[44px] text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
