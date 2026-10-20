import React, { useState } from 'react';
import { Menu, X, PhoneCall, UserPlus, UserCheck, LogOut } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';
import { UserAccount } from '../types';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenAuth: () => void;
  currentUser: UserAccount | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenAuth,
  currentUser,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-16 sm:h-20">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="text-teal-400 transition-transform group-hover:scale-105">DONE</span>
            <span>ALL</span>
          </a>

          {/* Zone 2: Desktop clean single-line links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#before-after"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Before & After
            </a>
            <a
              href="#process"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Our Process
            </a>
            <a
              href="#testimonials"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Reviews
            </a>
            <a
              href="#faqs"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Direct Phone + Account + Quote Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Phone on desktop/tablet */}
            <a
              href={`tel:${COMPANY_CONTACT.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors whitespace-nowrap shrink-0"
              title="Direct engineering office phone"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>

            {/* User Account Button (Desktop & Tablet) */}
            {currentUser ? (
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-teal-300 bg-slate-900 border border-teal-500/40 rounded-lg hover:border-teal-400 transition-colors whitespace-nowrap shrink-0 min-h-[38px]"
                >
                  <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span className="truncate max-w-[100px]">{currentUser.fullName}</span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 z-50 text-xs">
                    <div className="px-4 py-2 border-b border-slate-800 text-slate-400">
                      <p className="font-semibold text-white truncate">{currentUser.fullName}</p>
                      <p className="text-[11px] truncate">{currentUser.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-rose-400 hover:bg-slate-800 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenAuth}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[38px]"
              >
                <UserPlus className="w-3.5 h-3.5 text-teal-400" />
                <span>Create Account</span>
              </button>
            )}

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 min-h-[38px] flex items-center justify-center"
            >
              Request Quote
            </button>

            {/* Mobile menu toggle with large touch target (>= 44px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white focus:outline-none rounded-lg bg-slate-900 border border-slate-800 shrink-0 min-w-[42px] min-h-[42px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with smooth touch padding and full accessibility */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center h-12 px-3 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            Services
          </a>
          <a
            href="#before-after"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center h-12 px-3 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            Before & After
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center h-12 px-3 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            Our Process
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center h-12 px-3 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            Reviews
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center h-12 px-3 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            FAQ
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            {!currentUser ? (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="flex items-center justify-center gap-2 h-12 text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <UserPlus className="w-4 h-4 text-teal-400" />
                <span>Create Client Account / Sign In</span>
              </button>
            ) : (
              <div className="flex items-center justify-between px-4 h-12 bg-slate-800/90 rounded-xl text-sm">
                <span className="text-teal-300 font-semibold truncate max-w-[200px]">{currentUser.fullName}</span>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="text-rose-400 hover:underline text-xs font-semibold py-2 px-1"
                >
                  Sign Out
                </button>
              </div>
            )}

            <a
              href={`tel:${COMPANY_CONTACT.phoneClean}`}
              className="flex items-center justify-center gap-2 h-12 text-sm font-semibold text-slate-300 bg-slate-950 border border-slate-800 rounded-xl active:bg-slate-800 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Call: {COMPANY_CONTACT.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full h-12 text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl active:scale-[0.98] transition-all"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
