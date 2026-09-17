import React, { useState } from 'react';
import { BookOpen, Hammer, Sliders, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

interface RoadmapSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      phase: 'LEARN',
      title: 'Foundational Knowledge with Nikhil Sir',
      subtitle: 'Understand What Actually Dictates Rankings',
      icon: BookOpen,
      badge: 'Entry: ₹999 Only',
      desc: 'Join the contest with the ₹999 registration fee without paying any full course fee upfront. Grasp modern organic search principles across SEO, AEO, and GEO. Learn why algorithms and AI models pick certain answers, how search intent shifts, and how to spot real ranking opportunities.',
      actions: [
        'Understand algorithmic indexing and crawl budgets',
        'Learn search intent clustering & AEO snippet frameworks',
        'Unpack AI citation dynamics for ChatGPT & Perplexity',
      ],
    },
    {
      stepNumber: '02',
      phase: 'BUILD',
      title: 'Choose or Launch a Real Project',
      subtitle: 'No Imaginary Homework. Real Digital Real Estate.',
      icon: Hammer,
      badge: 'Real Web Asset',
      desc: 'Pick, launch, or bring an active project: a niche content platform, a personal brand, a micro-tool, a directory, or an e-commerce catalog. Instead of solving toy assignments inside a siloed classroom, you deploy a live entity that will compete on the open web.',
      actions: [
        'Select an eligible project niche or domain',
        'Establish clean technical architecture and metadata',
        'Set up Google Search Console & analytics tracking',
      ],
    },
    {
      stepNumber: '03',
      phase: 'OPTIMIZE',
      title: 'Continuous Execution & Experimentation',
      subtitle: 'Implement → Test → Measure → Iterate',
      icon: Sliders,
      badge: 'Live Experimentation',
      desc: 'Apply every strategy directly to your pages. Conduct keyword gap research, write high-density entity content, structure FAQs for direct answers, establish internal links, fix technical bottlenecks, test schema, and measure indexation week over week.',
      actions: [
        'Execute entity-based on-page & answer-snippet formatting',
        'Build topical authority silos and high-signal citations',
        'Diagnose indexation delays and tweak content performance',
      ],
    },
    {
      stepNumber: '04',
      phase: 'RANK',
      title: 'The Final Benchmark: Rank Your Project',
      subtitle: 'Meet Contest Criteria → Course Fee = ₹0',
      icon: Trophy,
      badge: '₹0 Fee Milestone',
      desc: 'Your final challenge is simple: Can you make your project rank? If your project meets the officially defined contest criteria on verified search queries during the tracking period, your course fee is completely waived to ₹0!',
      actions: [
        'Track targeted keywords into qualifying search positions',
        'Submit Search Console proof for official contest audit',
        'Achieve Course Fee = ₹0 upon successful verification',
      ],
    },
  ];

  return (
    <section id="section-roadmap" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            The 4-Stage Challenge
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Your Journey Is Simple:{' '}
            <span className="text-[#00ff88]">
              LEARN → BUILD → OPTIMIZE → RANK
            </span>
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            From the moment you register for ₹999, your objective is not just collecting notes.
            You move through four defined stages focused on building an asset that competes in the real world.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Step Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isCurrent = activeStep === index;
              return (
                <button
                  key={item.stepNumber}
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                    isCurrent
                      ? darkMode
                        ? 'bg-[#141414] border-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.12)]'
                        : 'bg-white border-[#00994f] shadow-md'
                      : darkMode
                      ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#2f2f2f]'
                      : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg font-mono-code font-bold text-sm shrink-0 flex items-center justify-center ${
                      isCurrent
                        ? 'bg-[#00ff88] text-black'
                        : darkMode
                        ? 'bg-[#1f1f1f] text-[#8e8e93]'
                        : 'bg-[#e2e8f0] text-[#64748b]'
                    }`}
                  >
                    {item.stepNumber}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#00ff88] font-semibold">
                        STAGE: {item.phase}
                      </span>
                      <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-[#222222]/50 text-[#8e8e93]">
                        {item.badge}
                      </span>
                    </div>
                    <div className="font-display font-bold text-base mt-0.5 truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#8e8e93] truncate mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Step Expanded Card */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all ${
              darkMode ? 'bg-[#0d0d0d] border-[#222222]' : 'bg-white border-[#e2e8f0]'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-6 mb-6 border-[#222222]/50 dark:border-[#222222]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#00ff88]/10 text-[#00ff88]">
                  {React.createElement(steps[activeStep].icon, { size: 28 })}
                </div>
                <div>
                  <span className="font-mono-code text-xs text-[#00ff88] font-bold tracking-wider uppercase">
                    STAGE {steps[activeStep].stepNumber} // {steps[activeStep].phase}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono-code text-xs px-3 py-1.5 rounded-full bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 font-bold">
                {steps[activeStep].badge}
              </span>
            </div>

            <p className="text-[#8e8e93] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {steps[activeStep].desc}
            </p>

            <div className="space-y-3 mb-8">
              <div className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93]">
                Concrete Deliverables in this Stage:
              </div>
              {steps[activeStep].actions.map((act, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-mono-code ${
                    darkMode
                      ? 'bg-[#121212] border-[#222222]'
                      : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <CheckCircle size={16} className="text-[#00ff88] shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#222222]/50 dark:border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono-code text-[#8e8e93]">
                Ready to take on this challenge?
              </div>
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Challenge for ₹999</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Mindset Quote Strip */}
        <div
          className={`mt-12 p-6 rounded-2xl border text-center ${
            darkMode ? 'bg-[#0f0f0f] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
          }`}
        >
          <div className="font-mono-code text-xs text-[#00ff88] uppercase tracking-wider mb-2 font-bold">
            The Core Philosophy
          </div>
          <blockquote className="font-display text-lg sm:text-xl font-medium max-w-2xl mx-auto italic text-current">
            "Skills become truly valuable when you can apply them. Your project becomes your laboratory,
            and its real search ranking becomes your proof."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
