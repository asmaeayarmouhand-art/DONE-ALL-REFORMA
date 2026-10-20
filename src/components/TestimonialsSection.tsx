import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <span>Client Feedback</span>
            <span aria-hidden="true">·</span>
            <span>Verified Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Homeowners Across Málaga
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real experiences from property owners who chose DONE ALL for fixed budgets, disciplined execution, and pristine finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-teal-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-teal-400" />
                    ))}
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      <span>Verified Project</span>
                    </div>
                  )}
                </div>

                <Quote className="w-6 h-6 text-slate-700 mb-2" />

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800/80">
                <p className="text-sm font-bold text-white">{t.author}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>{t.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-teal-400/90 font-medium">{t.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate trust score bar */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-around gap-4 text-center text-xs text-slate-300">
          <div>
            <span className="text-white font-bold font-mono text-base block">4.9 / 5.0</span>
            <span className="text-slate-400">Average rating on Google Reviews</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <span className="text-white font-bold font-mono text-base block">100%</span>
            <span className="text-slate-400">Fixed budgets delivered without cost creep</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <span className="text-white font-bold font-mono text-base block">98.2%</span>
            <span className="text-slate-400">Projects completed exactly on or before schedule</span>
          </div>
        </div>
      </div>
    </section>
  );
};
