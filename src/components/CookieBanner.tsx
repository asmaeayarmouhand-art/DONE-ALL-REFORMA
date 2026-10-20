import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookieSettings: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenCookieSettings,
  onOpenPrivacyPolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('doneall_cookie_preferences');
      if (!consent) {
        // Small delay so it smoothly appears
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  if (!isVisible) return null;

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem('doneall_cookie_preferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem('doneall_cookie_preferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-slate-200 shadow-2xl animate-fade-in"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-teal-400 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-300 leading-relaxed space-y-1">
            <p>
              We use cookies and similar technologies to ensure secure navigation, optimize page performance, and manage quote inquiries in compliance with GDPR.
            </p>
            <p className="text-[11px] text-slate-400">
              Read our{' '}
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="text-teal-400 hover:underline font-semibold"
              >
                Privacy Policy
              </button>{' '}
              or adjust your choices via{' '}
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="text-teal-400 hover:underline font-semibold"
              >
                Cookie Settings
              </button>.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto shrink-0">
          <button
            type="button"
            onClick={onOpenCookieSettings}
            className="flex-1 md:flex-none px-3.5 py-2 min-h-[38px] text-xs font-semibold text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Customize
          </button>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="flex-1 md:flex-none px-3.5 py-2 min-h-[38px] text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            Necessary Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full md:w-auto px-4 py-2 min-h-[38px] text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shadow"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
};
