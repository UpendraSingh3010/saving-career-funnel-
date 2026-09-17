import React from 'react';
import { Award, CheckCircle2, Globe, Users, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';

interface MentorSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  return (
    <section id="section-mentor" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Contest Mentor &amp; Lead Strategist
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Learn With <span className="text-[#00ff88]">Nikhil Sir</span>.
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Sustainable digital marketing skills come from understanding the underlying algorithmic mechanics,
            not blindly copying checklists.
          </p>
        </div>

        {/* Mentor Bio & Credentials Card */}
        <div
          className={`p-6 sm:p-8 lg:p-12 rounded-2xl border transition-all ${
            darkMode ? 'bg-[#0d0d0d] border-[#222222]' : 'bg-white border-[#e2e8f0]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mentor Visual Badge / Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-[#1c1c1c] via-[#0f0f0f] to-[#00ff88]/25 p-1 border border-[#00ff88]/40 flex items-center justify-center relative overflow-hidden shadow-[0_0_35px_rgba(0,255,136,0.2)]">
                  <img
                    src="/nikhil-sir-photo.jpeg"
                    alt="Nikhil Sharma - Contest Mentor & Lead Strategist"
                    className="w-full h-full object-cover object-center rounded-xl"
                  />
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-[#00ff88] text-black shadow-md whitespace-nowrap tracking-wider uppercase">
                  20+ YRS EXPERIENCE
                </div>
              </div>

              <div className="font-display font-bold text-2xl">Nikhil Sharma</div>
              <div className="text-xs font-mono-code text-[#00ff88] mt-0.5">
                Digital Growth &amp; Organic Search Strategist
              </div>
              <p className="text-xs text-[#8e8e93] mt-2 max-w-xs">
                Founder, NS Transform 2026. Advised 500+ startups &amp; enterprises on organic acquisition and business ROI.
              </p>

              <a
                href="https://www.nikhilsharma.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono-code text-[#8e8e93] hover:text-[#00ff88] transition-colors"
              >
                <span>nikhilsharma.com</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Mentor Philosophy & Approach */}
            <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-[#222222] lg:pl-8">
              <div>
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#00ff88] font-bold block mb-2">
                  The Core Mentorship Directive
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-current">
                  "We don't teach you just what to do. We teach you why you are doing it."
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <div className="font-mono-code text-xs text-[#00ff88] font-bold mb-1">
                    01. "Why am I doing it?"
                  </div>
                  <div className="text-xs text-[#8e8e93]">
                    Understand how search crawlers and AI models interpret entity networks, so you make informed architectural choices.
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <div className="font-mono-code text-xs text-[#00ff88] font-bold mb-1">
                    02. "How do I know it worked?"
                  </div>
                  <div className="text-xs text-[#8e8e93]">
                    Learn to read Google Search Console, indexation logs, and AI citation graphs like a senior growth engineer.
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <div className="font-mono-code text-xs text-[#00ff88] font-bold mb-1">
                    03. "What should I optimize next?"
                  </div>
                  <div className="text-xs text-[#8e8e93]">
                    When a competitor outranks you or a keyword fluctuates, diagnose the gap and iterate ruthlessly.
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-[#f8fafc] border-[#e2e8f0]'
                  }`}
                >
                  <div className="font-mono-code text-xs text-[#00ff88] font-bold mb-1">
                    04. "Real Scaled Experience"
                  </div>
                  <div className="text-xs text-[#8e8e93]">
                    20+ years navigating Google updates, algorithm shifts, and now the generative AI transition.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs font-mono-code text-[#8e8e93]">
                  Direct access in live challenge teardowns
                </div>
                <button
                  onClick={onOpenRegister}
                  className="px-5 py-2.5 rounded-lg text-xs font-mono-code font-bold tracking-wider uppercase bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer"
                >
                  Join Nikhil Sir’s Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
