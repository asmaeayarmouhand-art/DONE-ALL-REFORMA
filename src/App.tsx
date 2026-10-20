import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { AuthModal } from './components/AuthModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingActions } from './components/FloatingActions';
import { UserAccount } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  // Legal modal state
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType>('legal-notice');

  // Restore session from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem('doneall_user');
      if (stored) {
        setCurrentUser(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleOpenAuth = () => {
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (user: UserAccount) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('doneall_user');
    setCurrentUser(null);
  };

  const handleOpenLegalDoc = (type: LegalDocType) => {
    setLegalDocType(type);
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenAuth={handleOpenAuth}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenAuth={handleOpenAuth}
        />

        {/* 2. Before & After Interactive Comparison Slider */}
        <BeforeAfterSlider onOpenQuote={handleOpenQuote} />

        {/* 3. Core Capabilities & Bento Services */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 4. 4-Step Transparent Methodology */}
        <ProcessSection onOpenQuote={handleOpenQuote} />

        {/* 5. Client Proof & Verified Testimonials */}
        <TestimonialsSection />

        {/* 6. Frequently Asked Questions */}
        <FaqSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenAuth={handleOpenAuth}
        onOpenLegalNotice={() => handleOpenLegalDoc('legal-notice')}
        onOpenPrivacyPolicy={() => handleOpenLegalDoc('privacy-policy')}
        onOpenCookieSettings={() => handleOpenLegalDoc('cookie-settings')}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Create Account / Sign In Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Legal Documents Modal (Legal Notice, Privacy Policy, Cookie Settings) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialDoc={legalDocType}
      />

      {/* GDPR Cookie Consent Banner */}
      <CookieBanner
        onOpenCookieSettings={() => handleOpenLegalDoc('cookie-settings')}
        onOpenPrivacyPolicy={() => handleOpenLegalDoc('privacy-policy')}
      />

      {/* Floating Action Button (Direct Call) */}
      <FloatingActions />
    </div>
  );
}
