import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, Shield, ArrowRight, Calculator, FileText } from 'lucide-react';

interface PricingRulesSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const PricingRulesSection: React.FC<PricingRulesSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [rankedOutcome, setRankedOutcome] = useState<boolean>(true);

  return (
    <section id="section-pricing" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Proof-First Pricing &amp; Rules
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Learn First. Prove It.{' '}
            <span className="text-[#00ff88]">Pay Later.</span>
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Your learning should be demonstrated through execution, not just course completion.
            That is why registration fee and course fee are separate, performance-linked, and fully transparent.
          </p>
        </div>

        {/* Pricing Mechanics Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main ₹999 Entry Box */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#0d0d0d] border-[#222222]' : 'bg-white border-[#e2e8f0]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono-code text-xs px-3 py-1 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 font-bold uppercase tracking-wider">
                  Contest Registration
                </span>
                <span className="font-mono-code text-xs text-[#8e8e93]">
                  Paid Today
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#00ff88]">
                  ₹999
                </span>
                <span className="font-mono-code text-xs text-[#8e8e93]">
                  / one-time entry fee
                </span>
              </div>

              <p className="text-sm text-[#8e8e93] leading-relaxed mb-6">
                This secures your participation in the challenge, live mentorship with Nikhil Sir, access to the SEO/AEO/GEO tactical blueprints, and the official project ranking audit framework.
              </p>

              <div className="space-y-3 font-mono-code text-xs mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                  <span>Full live sessions &amp; project review framework</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                  <span>No full course fee required upfront</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                  <span>Official evaluation under defined ranking criteria</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                  <span>You retain 100% ownership of your website &amp; rankings</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-4 rounded-xl font-mono-code text-sm font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock Seat For ₹999</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Interactive Outcome Simulator */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-[#121212] border-[#262626]' : 'bg-[#f8fafc] border-[#cbd5e1]'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calculator size={18} className="text-[#00ff88]" />
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] font-bold">
                  Interactive Outcome Simulator
                </span>
              </div>

              <div className="text-sm font-bold font-display mb-4">
                What happens to your course fee?
              </div>

              {/* Toggle Switch */}
              <div className="grid grid-cols-2 p-1 rounded-xl bg-[#000000]/30 border border-[#222222] mb-6">
                <button
                  onClick={() => setRankedOutcome(true)}
                  className={`py-2 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                    rankedOutcome
                      ? 'bg-[#00ff88] text-black shadow-sm'
                      : 'text-[#8e8e93] hover:text-current'
                  }`}
                >
                  ✓ My Project Ranks
                </button>
                <button
                  onClick={() => setRankedOutcome(false)}
                  className={`py-2 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                    !rankedOutcome
                      ? 'bg-[#222222] text-white shadow-sm'
                      : 'text-[#8e8e93] hover:text-current'
                  }`}
                >
                  ⏳ Still Optimizing
                </button>
              </div>

              {/* Result display */}
              {rankedOutcome ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#00ff88] block mb-1">
                      Contest Qualifying Result
                    </span>
                    <div className="font-display font-black text-3xl text-[#00ff88]">
                      COURSE FEE = ₹0
                    </div>
                    <div className="text-xs text-current font-mono-code mt-1">
                      You pay ZERO course fees. 100% waiver applied.
                    </div>
                  </div>
                  <div className="text-xs font-mono-code text-[#8e8e93] space-y-1.5 leading-relaxed">
                    <p>• You only invested the ₹999 entry fee.</p>
                    <p>• You now have an active, ranking digital asset.</p>
                    <p>• Proven proof-of-work to show recruiters or clients.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#ffaa00]/10 border border-[#ffaa00]/30">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#ffaa00] block mb-1">
                      Non-Qualifying / In-Progress Result
                    </span>
                    <div className="font-display font-bold text-xl text-[#ffaa00]">
                      Pay Within 6 Months
                    </div>
                    <div className="text-xs text-current font-mono-code mt-1">
                      Zero pressure to pay on day 1. 180-day grace period.
                    </div>
                  </div>
                  <div className="text-xs font-mono-code text-[#8e8e93] space-y-1.5 leading-relaxed">
                    <p>• You still retain all practical training &amp; systems.</p>
                    <p>• Your domain and pages remain yours permanently.</p>
                    <p>• Can clear the course fee later within 6 months as per terms.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#222222]/50 text-[11px] font-mono-code text-[#8e8e93]">
              *Ranking qualification is determined by predefined contest criteria.
            </div>
          </div>
        </div>

        {/* Ranking Criteria Guidelines Matrix */}
        <div
          className={`p-6 sm:p-8 lg:p-10 rounded-2xl border ${
            darkMode ? 'bg-[#0d0d0d] border-[#222222]' : 'bg-white border-[#e2e8f0]'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-lg bg-[#00ff88]/10 text-[#00ff88]">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                What Does “Rank” Mean? (Official Qualification Framework)
              </h3>
              <p className="text-xs font-mono-code text-[#8e8e93]">
                Transparent, objective benchmarks so you know exactly where the goalpost is.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono-code text-xs">
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">01. Eligible Projects</span>
              <span className="text-[#8e8e93]">
                Fresh or existing domains, blogs, digital directories, tools, or business pages with public indexability.
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">02. Target Search Queries</span>
              <span className="text-[#8e8e93]">
                Pre-agreed realistic intent keywords (not your own name, but actual unbranded discovery terms).
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">03. Target Positions</span>
              <span className="text-[#8e8e93]">
                Attaining defined top positions (e.g. Page 1 / Top 10 or featured in AI Overviews / citations).
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">04. Verification Method</span>
              <span className="text-[#8e8e93]">
                Live SERP audit and Google Search Console performance export verified by the review team.
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">05. Tracking Period</span>
              <span className="text-[#8e8e93]">
                A reasonable evaluation window that gives search algorithms sufficient time to crawl and index.
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222]/50 bg-black/20">
              <span className="text-[#00ff88] font-bold block mb-1">06. White-Hat Compliance</span>
              <span className="text-[#8e8e93]">
                Zero tolerance for link farms, PBNs, or spam techniques. Must be sustainable, durable optimization.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
