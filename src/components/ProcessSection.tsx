import React from 'react';
import { Ruler, FileText, HardHat, KeyRound } from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      icon: Ruler,
      title: 'Free Technical Survey & 3D Scanning',
      desc: 'A licensed site engineer visits your property in Málaga or Costa del Sol within 24-48 hours. We take precision laser measurements, assess existing utilities, and listen to your vision.',
      highlight: '100% Free & No Obligation'
    },
    {
      num: '02',
      icon: FileText,
      title: '3D Architectural Plan & Fixed Quote',
      desc: 'We draft a comprehensive, itemized bill of quantities with fixed prices. Optional photorealistic 3D renders allow you to preview materials, lighting, and spatial layouts.',
      highlight: 'Contractually binding quote'
    },
    {
      num: '03',
      icon: HardHat,
      title: 'Dedicated Site Manager & Weekly Logs',
      desc: 'One dedicated technical point of contact oversees all trades. You receive weekly progress reports with high-resolution photos and milestone tracking.',
      highlight: 'Daily delay penalty clause'
    },
    {
      num: '04',
      icon: KeyRound,
      title: 'Turnkey Handover & 5-Year Warranty',
      desc: 'We conduct a deep professional handover cleaning before delivering your keys. You receive official compliance bulletins, utility certificates, and our 5-year written warranty.',
      highlight: 'Complimentary 6-month checkup'
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <span>Proven Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Zero Uncertainty</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            How We Transform Your Property in 4 Steps
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A transparent, stress-free methodology refined over 15 years to guarantee timely delivery within budget and without unforeseen costs.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-bold text-teal-400/80">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-teal-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-teal-400">
                  {step.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Already have floor plans or an idea of what you need?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We will send a licensed engineer to examine feasibility and deliver a definitive quotation.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all whitespace-nowrap shadow-md shrink-0"
          >
            Book Free Site Inspection
          </button>
        </div>
      </div>
    </section>
  );
};
