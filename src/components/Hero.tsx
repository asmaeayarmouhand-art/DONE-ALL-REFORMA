import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { HERO_IMAGE, COMPANY_CONTACT } from '../data/mockData';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenAuth: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-teal-950/25 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Main 2-column Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Unboxed metadata line with typographic separator */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-teal-400">
              <span>Málaga & Costa del Sol</span>
              <span aria-hidden="true">·</span>
              <span>Architectural Construction</span>
              <span aria-hidden="true">·</span>
              <span>15 Years</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] text-balance">
              Premium Complete Renovations with{' '}
              <span className="text-teal-400 underline decoration-teal-500/50 underline-offset-4 sm:underline-offset-8">
                Guaranteed Fixed Quotes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Transform your apartment, villa, kitchen, or commercial property into an extraordinary space. Turn-key project management by certified in-house craftsmen, contractual delay penalties, and 5 years of written warranty.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero hidden fees: binding fixed quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% free laser site survey in 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Dedicated site engineer with weekly logs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Málaga town hall building permits handled</span>
              </div>
            </div>

            {/* Hero CTAs: full width on mobile with >=48px height */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-xl shadow-lg shadow-teal-500/20 transition-all whitespace-nowrap"
              >
                <span>Request Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-teal-400" />
                <span>Call: {COMPANY_CONTACT.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={HERO_IMAGE}
                alt="Contemporary home renovation in Málaga by DONE ALL"
                className="w-full h-[260px] xs:h-[300px] sm:h-[400px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-slate-200">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold text-teal-400 uppercase tracking-wider truncate">
                      Recently Handed Over
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">Penthouse in La Malagueta · 140 m²</p>
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-slate-400 bg-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-800 whitespace-nowrap shrink-0">
                    42 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Row below Hero Split: 2 cols on mobile, 4 on desktop */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-slate-300">
          <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-0">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">+350</p>
              <p className="text-[11px] sm:text-xs text-slate-400">Renovations delivered</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-0">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white">5-Year</p>
              <p className="text-[11px] sm:text-xs text-slate-400">Written warranty</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-0">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white">Fixed Price</p>
              <p className="text-[11px] sm:text-xs text-slate-400">Guaranteed by contract</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-0">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">€600,000</p>
              <p className="text-[11px] sm:text-xs text-slate-400">Mapfre policy insurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
