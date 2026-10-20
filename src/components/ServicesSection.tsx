import React, { useState } from 'react';
import { Home, UtensilsCrossed, Droplets, Building2, Zap, Store, ArrowUpRight, Check, X } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  UtensilsCrossed,
  Droplets,
  Building2,
  Zap,
  Store,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <span>Technical Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Turnkey Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Renovation & Construction Services
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
              We manage every trade with our own licensed personnel: masonry, plumbing, certified electrical installations with official Spanish bulletin (CIE), acoustic soundproofing, and bespoke joinery.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="self-start md:self-end px-4 sm:px-5 py-2.5 min-h-[42px] text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center justify-center"
          >
            Custom Project Inquiry
          </button>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Home;
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className={`group relative bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 bg-slate-950' : ''
                }`}
              >
                <div>
                  {/* Top line with editorial number and icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono text-sm font-bold text-teal-400/90">
                      {service.number}
                    </span>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 group-hover:text-teal-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key feature list */}
                  <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3 sm:pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom line */}
                <div className="mt-5 pt-3 sm:pt-4 border-t border-slate-900 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px] sm:text-xs">
                    {service.estimatedDays}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-teal-400 group-hover:translate-x-0.5 transition-transform text-xs">
                    <span>View details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal with Mobile Scroll Support */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-5 sm:p-8 space-y-5 sm:space-y-6 text-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 sm:space-y-2 pr-8">
              <span className="text-xs font-mono font-bold text-teal-400">
                SERVICE {activeModalService.number}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                {activeModalService.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                What this service includes:
              </h4>
              <div className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Estimated duration:</span>
              <span className="font-bold text-white font-mono">{activeModalService.estimatedDays}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenQuote();
                }}
                className="w-full sm:flex-1 py-3 min-h-[44px] text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all"
              >
                Request Quote for this Service
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-5 py-3 min-h-[44px] text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
