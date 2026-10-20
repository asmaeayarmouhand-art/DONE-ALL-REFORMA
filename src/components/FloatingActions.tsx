import React from 'react';
import { PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Direct Phone Call Button */}
      <a
        href={`tel:${COMPANY_CONTACT.phoneClean}`}
        aria-label="Call technical office directly"
        className="group flex items-center gap-2 px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-xl transition-transform active:scale-95 font-bold border border-teal-300/40"
      >
        <PhoneCall className="w-4 h-4 text-slate-950 shrink-0" />
        <span className="text-xs tracking-wide">
          <span className="hidden xs:inline">Call: </span>{COMPANY_CONTACT.phone}
        </span>
      </a>
    </div>
  );
};
