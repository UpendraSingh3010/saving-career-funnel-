import React, { useState, useEffect } from 'react';
import { SavingCareersLogo } from './SavingCareersLogo';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenRegister,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#section-hero' },
    { label: 'The Triad', href: '#section-triad' },
    { label: 'Roadmap', href: '#section-roadmap' },
    { label: 'Pricing & Rules', href: '#section-pricing' },
    { label: 'Mentor', href: '#section-mentor' },
    { label: 'Who It’s For', href: '#section-audience' },
    { label: 'FAQs', href: '#section-faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#222222]'
            : 'bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e2e8f0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 flex-nowrap">
        {/* Brand */}
        <a href="#section-hero" className="flex items-center gap-3 shrink-0">
          <SavingCareersLogo />
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse"></span>
            ₹999 CONTEST
          </span>
        </a>

        {/* Desktop Nav - Clean Single Line with Balanced Spacing */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-mono-code text-xs tracking-wider whitespace-nowrap shrink-0">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors py-1.5 px-1 hover:text-[#00ff88] ${
                darkMode ? 'text-[#9ca3af]' : 'text-[#64748b]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Dark/Light toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color mode"
            className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
              darkMode
                ? 'border-[#262626] bg-[#0e0e0e] text-[#e5e5e5] hover:border-[#00ff88]/40 hover:text-[#00ff88]'
                : 'border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] hover:border-[#00994f]/40 hover:text-[#00994f]'
            }`}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Primary CTA */}
          <button
            id="header-register-btn"
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono-code font-bold tracking-wider uppercase transition-all duration-200 bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_20px_rgba(0,255,136,0.35)] cursor-pointer whitespace-nowrap"
          >
            <span>Register ₹999</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg border border-[#222222] text-[#8e8e93] hover:text-[#00ff88]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 transition-all ${
            darkMode
              ? 'bg-[#0a0a0a] border-[#222222]'
              : 'bg-[#ffffff] border-[#e2e8f0]'
          }`}
        >
          <div className="flex flex-col gap-4 font-mono-code text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#8e8e93] hover:text-[#00ff88] transition-colors py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight size={12} className="opacity-40" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="mt-3 w-full py-3 rounded-lg text-center font-mono-code font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer"
            >
              Register for ₹999 (Course Fee = ₹0 If Ranked)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
