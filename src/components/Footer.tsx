import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenAuth: () => void;
  onOpenLegalNotice: () => void;
  onOpenPrivacyPolicy: () => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuote,
  onOpenAuth,
  onOpenLegalNotice,
  onOpenPrivacyPolicy,
  onOpenCookieSettings,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand & Credentials */}
          <div className="sm:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-black text-white tracking-tight">
              <span className="text-teal-400">DONE</span>
              <span>ALL</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs sm:text-sm">
              Premier architectural renovation and construction firm operating throughout the province of Málaga and Costa del Sol. Specialists in high-end residential homes, bespoke kitchens, and commercial fit-outs with contractually fixed pricing.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-900 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{COMPANY_CONTACT.insurancePolicy}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-slate-500">Commercial Registry / CIF: {COMPANY_CONTACT.cif}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors py-1 inline-block">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-teal-400 transition-colors py-1 inline-block">
                  Before & After Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-teal-400 transition-colors py-1 inline-block">
                  Work Methodology
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-400 transition-colors py-1 inline-block">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-teal-400 transition-colors py-1 inline-block">
                  FAQ & Legal Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Client Portal & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Client Portal
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="hover:text-teal-400 transition-colors text-left py-1 inline-block"
                >
                  Create Client Account
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="hover:text-teal-400 transition-colors text-left py-1 inline-block"
                >
                  Sign In to Dashboard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-teal-400 transition-colors text-left py-1 inline-block"
                >
                  Request Free Laser Survey
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details with exact address and phone */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Office & Inquiries
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phoneClean}`} className="hover:text-white font-mono py-1 inline-block">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white py-1 inline-block truncate max-w-[200px]">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-500 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.schedule}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} DONE ALL Renovations S.L. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={onOpenLegalNotice}
              className="hover:text-slate-300 transition-colors py-1 cursor-pointer"
            >
              Legal Notice
            </button>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-slate-300 transition-colors py-1 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="hover:text-slate-300 transition-colors py-1 cursor-pointer"
            >
              Cookie Settings
            </button>
            <span className="text-teal-400/90 font-medium py-1">5-Year Written Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
