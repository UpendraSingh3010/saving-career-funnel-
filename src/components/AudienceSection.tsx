import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Search,
  PenTool,
  Briefcase,
  Rocket,
  Compass,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AudienceSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const personas = [
    {
      title: 'Students & Grads',
      tag: 'Portfolio Proof',
      icon: GraduationCap,
      desc: 'Looking for genuine practical exposure instead of another certificate-only course that recruiters ignore.',
      outcome: 'A live ranking URL to showcase on your CV and LinkedIn.',
    },
    {
      title: 'Marketing Beginners',
      tag: 'First-Principles',
      icon: Sparkles,
      desc: 'Want to understand modern organic search from the ground up without drowning in confusing technical jargon.',
      outcome: 'Confidence navigating real keywords, search engines, and AI results.',
    },
    {
      title: 'SEO Learners',
      tag: 'Skill Testing',
      icon: Search,
      desc: 'Already understand basic on-page definitions but want to test whether they can actually rank a real project.',
      outcome: 'Real algorithmic validation and solving actual ranking dips.',
    },
    {
      title: 'Content Writers',
      tag: 'AEO & AI Synthesis',
      icon: PenTool,
      desc: 'Want to ensure their articles are structured to be extracted by Google AI Overviews and cited by LLMs.',
      outcome: 'Learn high-citability formatting and entity structure.',
    },
    {
      title: 'Freelancers',
      tag: 'Client Retainers',
      icon: Briefcase,
      desc: 'Need concrete ranking case studies and practical frameworks they can deploy for high-ticket clients.',
      outcome: 'Charge higher monthly retainers backed by proof-of-work.',
    },
    {
      title: 'Founders & Creators',
      tag: 'Zero-Ad Acquisition',
      icon: Rocket,
      desc: 'Want to build sustainable, compounding organic visibility for their own startup, product, or content hub.',
      outcome: 'Sustainable inbound traffic without depending on paid ads.',
    },
  ];

  return (
    <section id="section-audience" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Ideal Candidate Profiles
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Who Is This Challenge For?
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Whether you are launching your digital marketing career or scaling your own startup,
            this challenge replaces passive theory with tangible proof-of-work.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {personas.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#00ff88]/40 hover:bg-[#121212]'
                    : 'bg-white border-[#e2e8f0] hover:border-[#00994f]/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#00ff88]/10 text-[#00ff88]">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#222222]/30 text-[#8e8e93] border border-[#222222]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]/40 dark:border-[#222222] font-mono-code text-[11px] text-[#00ff88]">
                  🎯 <span className="text-current font-semibold">{p.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Card: Your Project Becomes Your Proof */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border relative overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-br from-[#121814] via-[#0d0d0d] to-[#0a0a0a] border-[#00ff88]/30 shadow-[0_0_50px_rgba(0,255,136,0.08)]'
              : 'bg-gradient-to-br from-emerald-50 via-white to-slate-50 border-[#00994f]/30'
          }`}
        >
          <div className="max-w-3xl">
            <span className="font-mono-code text-xs font-bold text-[#00ff88] tracking-widest uppercase block mb-2">
              The Proof-Of-Work Principle
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-current mb-4">
              Your Project Becomes Your Permanent Proof.
            </h3>
            <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed mb-6 font-normal">
              By the end of the challenge, the goal is not simply to say <span className="line-through italic">“I learned SEO.”</span> The goal is to say:{' '}
              <strong className="text-current font-semibold">
                “I worked on a real project and applied SEO, AEO and GEO strategies to rank it on live search.”
              </strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                <span>Something tangible to analyze and optimize</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                <span>Real Search Console performance data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                <span>An impressive talking point in interviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00ff88] shrink-0" />
                <span>Proves how you think and execute under real conditions</span>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="px-7 py-3 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Secure Your Project Seat for ₹999</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
