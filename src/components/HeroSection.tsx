import React from 'react';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Sparkles, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
  darkMode,
}) => {
  return (
    <section
      id="section-hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle ambient cyber grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(0, 255, 136, 0.15) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #00ff88 1px, transparent 1px), linear-gradient(to bottom, #00ff88 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            A Practical Learning Contest by Saving.Careers with Nikhil Sir
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            Learn SEO, AEO &amp; GEO.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00cc6a] to-[#22c55e]">
              Build a Real Project.
            </span>
            Make It Rank.
          </h1>

          <p className="text-lg sm:text-xl text-[#8e8e93] max-w-3xl leading-relaxed mb-10 font-normal">
            Stop learning digital marketing only through passive videos and theory.
            Join an outcome-driven learning challenge: master <strong className="text-current font-semibold">SEO, AEO, and GEO</strong>,
            apply those concepts to your own live website, optimize it step by step, and work towards one verifiable outcome:{' '}
            <span className="text-[#00ff88] font-semibold">Rank Your Project.</span>
          </p>
        </div>

        {/* Hero Offer Box - The Core Proposition */}
        <div
          className={`p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all relative overflow-hidden ${
            darkMode
              ? 'bg-[#0d0d0d] border-[#222222] shadow-[0_20px_60px_rgba(0,0,0,0.7)]'
              : 'bg-white border-[#e2e8f0] shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
          }`}
        >
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left offer details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-[#ff3366]/10 text-[#ff3366] border border-[#ff3366]/30">
                <Sparkles size={13} />
                PERFORMANCE-BASED LEARNING
              </div>

              <div className="space-y-2">
                <div className="font-display text-2xl sm:text-3xl font-bold">
                  Register for just{' '}
                  <span className="text-[#00ff88] font-mono-code text-3xl sm:text-4xl">
                    ₹999
                  </span>
                </div>
                <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed">
                  And you don’t need to pay the course fee upfront. If your project successfully ranks according to the official contest criteria:
                </p>
              </div>

              {/* Course fee = 0 banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#00ff88]/15 via-[#00ff88]/5 to-transparent border border-[#00ff88]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono-code text-xs text-[#8e8e93] uppercase block tracking-wider">
                    Target Outcome
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#00ff88] tracking-tight">
                    COURSE FEE = ₹0
                  </div>
                </div>
                <div className="text-xs font-mono-code text-[#8e8e93] max-w-[240px]">
                  ✓ 100% Fee Waived if Ranked according to contest benchmarks
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="hero-register-cta"
                  onClick={onOpenRegister}
                  className="px-8 py-4 rounded-xl font-mono-code text-sm font-bold tracking-wider uppercase transition-all duration-200 bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for ₹999</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#section-pricing"
                  className={`px-6 py-4 rounded-xl font-mono-code text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 border ${
                    darkMode
                      ? 'border-[#262626] text-[#e5e5e5] hover:bg-[#141414]'
                      : 'border-[#e2e8f0] text-[#0f172a] hover:bg-[#f8fafc]'
                  }`}
                >
                  <span>See How Ranking Works</span>
                </a>
              </div>

              <p className="text-xs font-mono-code text-[#666666] pt-1">
                *Registration fee (₹999) and course fee are separate. Program terms and ranking criteria apply.
              </p>
            </div>

            {/* Right side summary cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-[#f8fafc] border-[#e2e8f0]'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-[#00ff88]/10 text-[#00ff88] shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">Real Live Project</div>
                  <div className="text-xs text-[#8e8e93] mt-0.5">
                    No dummy assignments. Build and optimize something that actively competes on Google &amp; AI engines.
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-[#f8fafc] border-[#e2e8f0]'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-[#00ff88]/10 text-[#00ff88] shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">SEO + AEO + GEO</div>
                  <div className="text-xs text-[#8e8e93] mt-0.5">
                    Rank on traditional Google, dominate AI Overviews, and get cited inside ChatGPT &amp; Perplexity.
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  darkMode
                    ? 'bg-[#121212] border-[#222222]'
                    : 'bg-[#f8fafc] border-[#e2e8f0]'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-[#00ff88]/10 text-[#00ff88] shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">Mentored by Nikhil Sir</div>
                  <div className="text-xs text-[#8e8e93] mt-0.5">
                    Direct guidance from 20+ yrs growth strategist who scaled 500+ startups &amp; organic engines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick KPI Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-[#222222]/60 dark:border-[#222222] text-center">
            <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#00ff88]">
              ₹999
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              Seat Lock Entry Fee
            </div>
          </div>
          <div className="p-4 rounded-xl border border-[#222222]/60 dark:border-[#222222] text-center">
            <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#00ff88]">
              ₹0
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              Course Fee If Ranked
            </div>
          </div>
          <div className="p-4 rounded-xl border border-[#222222]/60 dark:border-[#222222] text-center">
            <div className="font-mono-code text-2xl sm:text-3xl font-bold">
              3 Pillars
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              SEO • AEO • GEO
            </div>
          </div>
          <div className="p-4 rounded-xl border border-[#222222]/60 dark:border-[#222222] text-center">
            <div className="font-mono-code text-2xl sm:text-3xl font-bold">
              6 Months
            </div>
            <div className="text-xs font-mono-code text-[#8e8e93] mt-1">
              Flexible Pay Buffer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
