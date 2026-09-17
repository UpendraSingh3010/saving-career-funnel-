import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Download, Copy, Check } from 'lucide-react';
import { SavingCareersLogo } from './SavingCareersLogo';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    const randomId = 'SC-SEO-' + Math.floor(100000 + Math.random() * 900000);
    setRegistrationId(randomId);
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(registrationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 my-8 shadow-2xl transition-all ${
          darkMode
            ? 'bg-[#0e0e0e] border-[#2a2a2a] text-white'
            : 'bg-white border-[#cbd5e1] text-[#0f172a]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8e8e93] hover:text-[#00ff88] hover:bg-white/5 transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 mb-2">
                <Sparkles size={12} />
                REGISTRATION OPEN
              </div>
              <h3 className="font-display font-bold text-2xl">
                Join the SEO, AEO &amp; GEO Contest
              </h3>
              <p className="text-xs text-[#8e8e93] font-mono-code mt-1">
                Saving.Careers with Nikhil Sir • Registration Fee: ₹999
              </p>
            </div>

            {/* Fee summary card */}
            <div
              className={`p-4 rounded-xl border mb-6 font-mono-code text-xs space-y-2 ${
                darkMode ? 'bg-[#141414] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
              }`}
            >
              <div className="flex justify-between items-center text-[#8e8e93]">
                <span>Contest Registration Fee</span>
                <span className="text-current font-bold">₹999</span>
              </div>
              <div className="flex justify-between items-center text-[#8e8e93]">
                <span>Upfront Course Fee</span>
                <span className="text-[#00ff88] font-bold">₹0 (None)</span>
              </div>
              <div className="flex justify-between items-center text-[#8e8e93]">
                <span>If Project Qualifies</span>
                <span className="text-[#00ff88] font-bold">COURSE FEE = ₹0</span>
              </div>
              <div className="pt-2 border-t border-[#222222]/50 flex justify-between items-center font-bold">
                <span>Due Today</span>
                <span className="text-lg text-[#00ff88]">₹999</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm font-sans focus:outline-none focus:border-[#00ff88] transition-colors ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-white'
                      : 'bg-[#f8fafc] border-[#cbd5e1] text-black'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm font-sans focus:outline-none focus:border-[#00ff88] transition-colors ${
                      darkMode
                        ? 'bg-[#121212] border-[#222222] text-white'
                        : 'bg-[#f8fafc] border-[#cbd5e1] text-black'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm font-sans focus:outline-none focus:border-[#00ff88] transition-colors ${
                      darkMode
                        ? 'bg-[#121212] border-[#222222] text-white'
                        : 'bg-[#f8fafc] border-[#cbd5e1] text-black'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider mb-1">
                  Project Domain / Idea (Optional)
                </label>
                <input
                  type="text"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                  placeholder="e.g. Personal blog, niche tool, or new domain"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm font-sans focus:outline-none focus:border-[#00ff88] transition-colors ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222] text-white'
                      : 'bg-[#f8fafc] border-[#cbd5e1] text-black'
                  }`}
                />
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                  className="mt-1 accent-[#00ff88]"
                />
                <span className="text-[11px] font-mono-code text-[#8e8e93] leading-tight">
                  I understand that ₹999 is the contest registration fee. The course fee becomes ₹0 if my project meets the ranking criteria, or can be paid later within 6 months.
                </span>
              </label>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_30px_rgba(0,255,136,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Proceed with ₹999 Registration</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Ticket Card */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center mx-auto mb-4 border border-[#00ff88]/40">
              <CheckCircle2 size={32} />
            </div>

            <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-[#00ff88]/15 text-[#00ff88] uppercase font-bold tracking-wider">
              REGISTRATION CONFIRMED
            </span>

            <h3 className="font-display font-bold text-2xl mt-3 mb-1">
              Welcome to the Challenge, {fullName}!
            </h3>
            <p className="text-xs text-[#8e8e93] font-mono-code mb-6">
              You are officially registered for the SEO, AEO &amp; GEO Contest with Nikhil Sir.
            </p>

            <div
              className={`p-5 rounded-xl border text-left font-mono-code text-xs space-y-2 mb-6 ${
                darkMode ? 'bg-[#141414] border-[#222222]' : 'bg-[#f8fafc] border-[#cbd5e1]'
              }`}
            >
              <div className="flex justify-between items-center pb-2 border-b border-[#222222]">
                <span className="text-[#8e8e93]">Contest Pass ID</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff88] font-bold">{registrationId}</span>
                  <button
                    onClick={handleCopy}
                    className="p-1 text-[#8e8e93] hover:text-[#00ff88]"
                    title="Copy ID"
                  >
                    {copied ? <Check size={12} className="text-[#00ff88]" /> : <Copy size={12} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Candidate</span>
                <span>{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Email</span>
                <span>{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">WhatsApp</span>
                <span>{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Registration Fee</span>
                <span className="text-[#00ff88] font-bold">₹999 (Received)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Course Fee Target</span>
                <span className="text-[#00ff88] font-bold">₹0 Upon Ranking</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 text-xs font-mono-code text-left mb-6 space-y-1">
              <div className="text-[#00ff88] font-bold">Next Steps:</div>
              <div className="text-[#8e8e93]">
                1. A confirmation email and WhatsApp orientation invite have been dispatched.
              </div>
              <div className="text-[#8e8e93]">
                2. Stage 01 (Learn) kicks off with Nikhil Sir’s initial orientation briefing.
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer"
            >
              Done &amp; Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
