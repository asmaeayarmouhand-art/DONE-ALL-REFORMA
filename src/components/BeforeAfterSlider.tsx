import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, MapPin, Calendar, Layers } from 'lucide-react';
import { PROJECTS } from '../data/mockData';

interface BeforeAfterSliderProps {
  onOpenQuote: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuote }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const activeProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="before-after" className="py-14 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <span>Real Transformations</span>
              <span aria-hidden="true">·</span>
              <span>Proven Work in Málaga</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Before & After Visual Comparison
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl">
              Drag the interactive slider horizontally to compare the original 1980s layout with our high-end modern renovation.
            </p>
          </div>

          {/* Project Selector Segmented Control with mobile horizontal scroll */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 overflow-x-auto no-scrollbar max-w-full">
            {PROJECTS.map((proj) => {
              const isActive = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    setSliderPosition(50);
                  }}
                  className={`px-3 sm:px-3.5 py-2 min-h-[38px] text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {proj.title.split(' in ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Comparison Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left/Main Column: The Interactive Drag Slider with touch-action none */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{ touchAction: 'none' }}
              className="relative w-full h-[260px] xs:h-[320px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-800 shadow-2xl bg-slate-950"
            >
              {/* "After" Image */}
              <img
                src={activeProject.afterImage}
                alt={`${activeProject.title} - After renovation by DONE ALL`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
                draggable={false}
              />

              {/* "After" Label */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] sm:text-xs font-bold text-teal-400 uppercase tracking-wider pointer-events-none">
                AFTER (DONE ALL)
              </div>

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeProject.beforeImage}
                  alt={`${activeProject.title} - Before renovation`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                {/* "Before" Label */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider pointer-events-none">
                  BEFORE (ORIGINAL)
                </div>
              </div>

              {/* Divider Line and Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-teal-400 shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-slate-900 transition-transform active:scale-110">
                  <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Floating Helper Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 rounded-md pointer-events-none whitespace-nowrap">
                ← Swipe to compare →
              </div>
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 sm:space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  Project Dossier
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{activeProject.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs border-y border-slate-800/80 py-3 sm:py-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">{activeProject.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{activeProject.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">{activeProject.propertyType}</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400 font-semibold">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Turnkey</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {activeProject.description}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Key Interventions:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold shrink-0">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3 min-h-[44px] text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow active:scale-[0.98] flex items-center justify-center"
              >
                Request Similar Renovation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
