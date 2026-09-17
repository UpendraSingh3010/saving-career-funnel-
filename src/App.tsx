/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TriadSection } from './components/TriadSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PricingRulesSection } from './components/PricingRulesSection';
import { MentorSection } from './components/MentorSection';
import { AudienceSection } from './components/AudienceSection';
import { FaqCtaSection } from './components/FaqCtaSection';
import { RegistrationModal } from './components/RegistrationModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  // Default to dark mode (Saving.Careers standard aesthetic)
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('Overview');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Track active section for floating progress indicator
  useEffect(() => {
    const sections = [
      { id: 'section-hero', name: 'Overview' },
      { id: 'section-triad', name: 'The Triad' },
      { id: 'section-roadmap', name: 'Roadmap' },
      { id: 'section-pricing', name: 'Pricing & Rules' },
      { id: 'section-mentor', name: 'Mentor' },
      { id: 'section-audience', name: 'Who It’s For' },
      { id: 'section-faq', name: 'FAQs' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setCurrentSection(match.name);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#00ff88] selection:text-black">
      {/* Fixed Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main 7-Section Funnel Content */}
      <main className="flex-1">
        {/* Section 01: Hero & Core Proposition */}
        <HeroSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 02: Modern Organic Search Triad (SEO, AEO & GEO) */}
        <TriadSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 03: The 4-Stage Challenge Roadmap (LEARN → BUILD → OPTIMIZE → RANK) */}
        <RoadmapSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 04: Proof-First Pricing Model & Ranking Rules */}
        <PricingRulesSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 05: Meet Your Mentor — Nikhil Sir (Nikhil Sharma) */}
        <MentorSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 06: Who Is This For? & The Proof Difference */}
        <AudienceSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Section 07: Clear FAQs & Final Registration Gate */}
        <FaqCtaSection
          darkMode={darkMode}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </main>

      {/* Floating Section Tracker Pill (Bottom Left on Desktop) */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-2 px-3 py-1.5 rounded-full border border-[#222222] bg-[#0d0d0d]/80 backdrop-blur-md text-xs font-mono-code text-[#8e8e93] shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
        <span className="text-white font-bold">{currentSection}</span>
      </div>

      {/* Sticky Mobile Registration Bar (Bottom) */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 border-t backdrop-blur-lg flex items-center justify-between gap-3 ${
          darkMode
            ? 'bg-[#0d0d0d]/95 border-[#222222]'
            : 'bg-white/95 border-[#e2e8f0]'
        }`}
      >
        <div>
          <div className="text-[10px] font-mono-code text-[#8e8e93]">
            Rank = Course Fee ₹0
          </div>
          <div className="font-display font-black text-sm text-[#00ff88]">
            Entry ₹999
          </div>
        </div>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] flex items-center gap-1.5"
        >
          <span>Register</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
