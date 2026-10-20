import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Lock, Cookie, Check, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

export type LegalDocType = 'legal-notice' | 'privacy-policy' | 'cookie-settings';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoc?: LegalDocType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialDoc = 'legal-notice',
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialDoc);

  // Cookie settings state
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [cookieSaved, setCookieSaved] = useState(false);

  useEffect(() => {
    setActiveTab(initialDoc);
  }, [initialDoc]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('doneall_cookie_preferences');
      if (saved) {
        const parsed = JSON.parse(saved);
        setAnalyticsCookies(Boolean(parsed.analytics));
        setMarketingCookies(Boolean(parsed.marketing));
      }
    } catch {
      // ignore
    }
  }, []);

  if (!isOpen) return null;

  const handleSaveCookiePreferences = () => {
    const preferences = {
      necessary: true,
      analytics: analyticsCookies,
      marketing: marketingCookies,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem('doneall_cookie_preferences', JSON.stringify(preferences));
    setCookieSaved(true);
    setTimeout(() => {
      setCookieSaved(false);
      onClose();
    }, 900);
  };

  const handleAcceptAllCookies = () => {
    setAnalyticsCookies(true);
    setMarketingCookies(true);
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem('doneall_cookie_preferences', JSON.stringify(preferences));
    setCookieSaved(true);
    setTimeout(() => {
      setCookieSaved(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-5 sm:p-8 text-slate-100 shadow-2xl relative my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Tabs */}
        <div className="border-b border-slate-800 pb-4 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Compliance & Terms</span>
          </div>

          <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('legal-notice')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'legal-notice'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Notice</span>
            </button>

            <button
              onClick={() => setActiveTab('privacy-policy')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'privacy-policy'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('cookie-settings')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'cookie-settings'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Settings</span>
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto py-5 pr-1 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* TAB 1: LEGAL NOTICE */}
          {activeTab === 'legal-notice' && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Legal Notice (Aviso Legal)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  1. Identification Details
                </h4>
                <div className="space-y-1 text-xs">
                  <p><strong className="text-white">Company Name:</strong> DONE ALL Renovations S.L.</p>
                  <p><strong className="text-white">Tax ID / CIF:</strong> {COMPANY_CONTACT.cif}</p>
                  <p><strong className="text-white">Registered Office:</strong> {COMPANY_CONTACT.address}</p>
                  <p><strong className="text-white">Contact Email:</strong> {COMPANY_CONTACT.email}</p>
                  <p><strong className="text-white">Direct Phone:</strong> {COMPANY_CONTACT.phone}</p>
                  <p><strong className="text-white">Commercial Registry:</strong> Registro Mercantil de Málaga, Tomo 5832, Folio 140, Hoja MA-149201.</p>
                  <p><strong className="text-white">Professional Liability:</strong> {COMPANY_CONTACT.insurancePolicy}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  2. Purpose & Scope of the Website
                </h4>
                <p>
                  The website <strong className="text-white">doneall.live</strong> provides information regarding residential and commercial architectural renovation, construction, interior remodeling, and engineering consultancy services offered by DONE ALL Renovations S.L. in Málaga and the Costa del Sol.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  3. Intellectual & Industrial Property
                </h4>
                <p>
                  All content included on this website, including texts, architectural photographs, brand marks, graphic design, source code, and before-and-after project dossiers, are the exclusive property of DONE ALL Renovations S.L. or third parties who have authorized their use. Any reproduction, distribution, public communication, or transformation without prior written authorization is strictly prohibited under Spanish and European copyright law.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  4. Building Regulations & Quotation Binding Terms
                </h4>
                <p>
                  All quotation requests, structural calculations, and building permit processing comply with the Spanish Building Act (Ley 38/1999 de Ordenación de la Edificación - LOE) and Technical Building Code (Código Técnico de la Edificación - CTE). Free estimates prepared online or during preliminary inspections become contractually binding upon signature of the definitive written mercantil contract.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  5. Applicable Law & Jurisdiction
                </h4>
                <p>
                  These terms are governed by Spanish legislation. For any dispute or controversy that may arise in relation to the website or the services rendered, the parties submit expressly to the Courts and Tribunals of the City of Málaga (Spain).
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy-policy' && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Privacy Policy (GDPR / RGPD)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  In accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  1. Data Controller
                </h4>
                <p>
                  <strong className="text-white">DONE ALL Renovations S.L.</strong>, with registered address at {COMPANY_CONTACT.address}, CIF {COMPANY_CONTACT.cif}, and email for privacy matters: <strong className="text-teal-400">{COMPANY_CONTACT.email}</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  2. Purposes of Data Processing
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong className="text-white">Free Site Survey & Quotes:</strong> Managing appointments, measurements, and technical proposals requested by you.</li>
                  <li><strong className="text-white">Contractual Execution:</strong> Handling construction permits with municipal town halls (Málaga, Marbella, etc.), ordering bespoke materials, and issuing legal invoices.</li>
                  <li><strong className="text-white">Client Portal Accounts:</strong> Allowing registered clients to review renovation progress, project dossiers, and compliance documentation.</li>
                  <li><strong className="text-white">Post-Delivery Warranty:</strong> Managing the 5-year written warranty and complimentary 6-month inspection.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  3. Legal Basis for Processing
                </h4>
                <p>
                  The legal basis for processing your data is the performance of pre-contractual and contractual measures (Art. 6.1.b GDPR), your explicit consent when submitting the contact or account forms (Art. 6.1.a GDPR), and compliance with legal tax, municipal, and building obligations (Art. 6.1.c GDPR).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  4. Data Retention Periods
                </h4>
                <p>
                  Personal data will be stored for as long as the commercial and contractual relationship remains active, and subsequently for the statutory retention periods established by law (including tax periods of 4-5 years and construction liability claims up to 10 years according to Spanish LOE).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  5. Data Sharing & Third Parties
                </h4>
                <p>
                  Your data will not be sold, rented, or transferred to third parties for marketing purposes. Data is only communicated to public administrations (e.g. Town Hall Urbanism Departments for building permits and Tax Agency) or certified insurers (Mapfre) when required for construction coverage.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">
                  6. Your Rights
                </h4>
                <p>
                  You have the right to access your personal data, request rectification of inaccurate data, request erasure when the data is no longer necessary, object to or restrict processing, and request data portability. To exercise these rights, send an email to <strong className="text-teal-400">{COMPANY_CONTACT.email}</strong> or a letter to <strong className="text-white">{COMPANY_CONTACT.address}</strong> with a copy of your ID. You also have the right to lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline inline-flex items-center gap-1">AEPD <ExternalLink className="w-3 h-3" /></a>).
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: COOKIE SETTINGS */}
          {activeTab === 'cookie-settings' && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Cookie Settings & Policy
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Manage your preferences for cookies and local storage on doneall.live.
                </p>
              </div>

              <p className="text-xs sm:text-sm">
                Cookies are small text files stored on your browser to ensure the website operates smoothly, remember your preferences, and improve service delivery. You can customize your cookie choices below:
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3">
                {/* 1. Necessary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Strictly Necessary Cookies</span>
                      <span className="text-[10px] bg-teal-500/20 text-teal-300 font-bold px-2 py-0.5 rounded">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Essential for navigation, session security, account access, and submitting quote inquiries. These cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* 2. Analytics */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white">Analytics & Performance Cookies</span>
                    <p className="text-xs text-slate-400">
                      Help us understand how visitors interact with the site anonymously to optimize page speeds and layout performance.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={analyticsCookies}
                      onChange={(e) => setAnalyticsCookies(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>

                {/* 3. Marketing */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white">Marketing & Personalization</span>
                    <p className="text-xs text-slate-400">
                      Used to display relevant information and project portfolios tailored to your renovation interests.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={marketingCookies}
                      onChange={(e) => setMarketingCookies(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSaveCookiePreferences}
                  className="flex-1 py-3 px-4 min-h-[44px] text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {cookieSaved ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Preferences Saved!</span>
                    </>
                  ) : (
                    <span>Save My Preferences</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAllCookies}
                  className="sm:w-auto px-5 py-3 min-h-[44px] text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
                >
                  Accept All Cookies
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                You can also configure or block cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge).
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
