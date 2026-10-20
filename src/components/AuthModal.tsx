import React, { useState } from 'react';
import { X, UserPlus, LogIn, CheckCircle2, Shield, User, Lock, Mail, Phone, Home } from 'lucide-react';
import { UserAccount } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserAccount) => void;
  initialMode?: 'signup' | 'login';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialMode = 'signup',
}) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (mode === 'signup' && (!fullName.trim() || fullName.trim().length < 2)) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    if (mode === 'signup' && phone.trim().length < 7) {
      errs.phone = 'Please enter a contact phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (mode === 'signup') {
      const newUser: UserAccount = {
        id: `user-${Date.now()}`,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        propertyType,
        projectStatus: 'Planning Consultation',
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      localStorage.setItem('doneall_user', JSON.stringify(newUser));
      setSuccessMessage('Account created successfully! Welcome to DONE ALL.');
      setTimeout(() => {
        onLoginSuccess(newUser);
        onClose();
      }, 700);
    } else {
      const existing = localStorage.getItem('doneall_user');
      let userObj: UserAccount;
      if (existing) {
        userObj = JSON.parse(existing);
      } else {
        userObj = {
          id: `user-${Date.now()}`,
          fullName: email.split('@')[0].toUpperCase(),
          email: email.trim().toLowerCase(),
          phone: '+34 600 000 000',
          propertyType: 'Málaga Property',
          projectStatus: 'Active Consultation',
          createdAt: 'Oct 2026',
        };
        localStorage.setItem('doneall_user', JSON.stringify(userObj));
      }
      setSuccessMessage('Logged in successfully!');
      setTimeout(() => {
        onLoginSuccess(userObj);
        onClose();
      }, 700);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-5 sm:p-8 text-slate-100 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switcher: Create Account vs Sign In */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-5 sm:mb-6">
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setErrors({});
            }}
            className={`flex-1 py-2.5 min-h-[42px] text-xs font-bold rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrors({});
            }}
            className={`flex-1 py-2.5 min-h-[42px] text-xs font-bold rounded-lg transition-all ${
              mode === 'login'
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Header */}
        <div className="mb-5 sm:mb-6 space-y-1 pr-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <Shield className="w-3.5 h-3.5" />
            <span>DONE ALL Client Portal</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            {mode === 'signup' ? 'Create Your Client Account' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-slate-400">
            {mode === 'signup'
              ? 'Register to track project milestones, access 3D blueprints, and manage your quotes.'
              : 'Sign in to access your renovation schedule, documents, and contractor updates.'}
          </p>
        </div>

        {successMessage ? (
          <div className="p-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
            <p className="text-sm font-bold text-white">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-9 pr-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-400">{errors.fullName}</p>}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600"
                />
              </div>
              {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
            </div>

            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Contact Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full pl-9 pr-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 font-mono"
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-rose-400">{errors.phone}</p>}
              </div>
            )}

            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Property in Málaga / Costa del Sol
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white"
                  >
                    <option value="Apartment / Flat">Apartment / Flat</option>
                    <option value="Detached Villa">Detached Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Commercial Space">Commercial / Retail Space</option>
                  </select>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 font-mono"
                />
              </div>
              {errors.password && <p className="text-[11px] text-rose-400">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 min-h-[48px] text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 mt-2"
            >
              {mode === 'signup' ? (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register Account</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-slate-500 pt-1">
              Protected by encrypted SSL. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
