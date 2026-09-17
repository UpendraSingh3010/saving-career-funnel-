import React, { useState } from 'react';
import { Search, Bot, MessageSquareText, Layers, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface TriadSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const TriadSection: React.FC<TriadSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'aeo' | 'geo'>('seo');

  const pillars = {
    seo: {
      title: 'SEO',
      sub: 'Search Engine Optimization',
      tagline: 'Get Discovered Through Algorithmic Search',
      icon: Search,
      color: '#00ff88',
      description:
        "Learn how to improve your website's visibility on traditional search engines through robust technical architecture, keyword search intent, internal linking, and organic authority signals.",
      topics: [
        'Search Intent & Keyword Gap Analysis',
        'On-Page Semantic Optimization',
        'Website Architecture & Internal Linking Graphs',
        'Technical SEO (Crawl Budget, Core Web Vitals, Schema)',
        'Competitor Ranking Analysis & Authority Signals',
      ],
      targetSurfaces: 'Google Organic, Bing, DuckDuckGo, Local Search',
    },
    aeo: {
      title: 'AEO',
      sub: 'Answer Engine Optimization',
      tagline: 'Surface Directly in Featured Snippets & AI Overviews',
      icon: MessageSquareText,
      color: '#38bdf8',
      description:
        'Search is increasingly answer-driven. Learn how to structure content so that search algorithms extract and present your exact answers as the primary authoritative solution.',
      topics: [
        'Question-Based Search Intent & Query Clusters',
        'Direct-Answer Formatting & Snippet Extraction',
        'Entity Graphs & Topical Node Relevance',
        'FAQ Optimization & Structured Microdata',
        'Search-Result Zero-Click Opportunities',
      ],
      targetSurfaces: 'Google AI Overviews, Featured Snippets, Voice Search, Siri',
    },
    geo: {
      title: 'GEO',
      sub: 'Generative Engine Optimization',
      tagline: 'Position Content Inside ChatGPT, Perplexity & Claude',
      icon: Bot,
      color: '#c084fc',
      description:
        'AI-powered discovery is reshaping how users find information. Learn how to craft high-citability content that generative AI models reference, quote, and summarize.',
      topics: [
        'AI-Friendly Modular Content Structuring',
        'Topical Depth & Entity Association',
        'Citability Signals & Original Research Placement',
        'Brand Association in Large Language Models',
        'Synthetic Search Engine Retrieval Mechanisms',
      ],
      targetSurfaces: 'Perplexity, ChatGPT Search, Claude, Google Gemini',
    },
  };

  const activePillar = pillars[activeTab];
  const IconComponent = activePillar.icon;

  return (
    <section id="section-triad" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Modern Organic Visibility
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            This Is Not Just Another SEO Course.
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Watching lessons is easy. Applying what you learn to a real website, solving ranking problems,
            optimizing content, and generating measurable visibility is where actual learning happens.
            We bring three interconnected dimensions together for 2025–2026.
          </p>
        </div>

        {/* 3 Pillars Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {(Object.keys(pillars) as Array<keyof typeof pillars>).map((key) => {
            const p = pillars[key];
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? darkMode
                      ? 'bg-[#141414] border-[#00ff88] shadow-[0_0_25px_rgba(0,255,136,0.15)]'
                      : 'bg-white border-[#00994f] shadow-md'
                    : darkMode
                    ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#333333]'
                    : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-xs uppercase tracking-widest text-[#8e8e93]">
                    PILLAR {key.toUpperCase()}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                <div className="font-display font-bold text-xl mb-1">{p.title}</div>
                <div className="text-xs text-[#8e8e93] font-medium">{p.sub}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail Card */}
        <div
          className={`p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all mb-16 ${
            darkMode ? 'bg-[#0d0d0d] border-[#222222]' : 'bg-white border-[#e2e8f0]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${activePillar.color}15`,
                    color: activePillar.color,
                  }}
                >
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl">
                    {activePillar.title} — {activePillar.sub}
                  </h3>
                  <p className="text-xs font-mono-code text-[#8e8e93]">
                    {activePillar.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
                {activePillar.description}
              </p>

              <div>
                <div className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] mb-3">
                  Core Implementation Modules:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.topics.map((t, idx) => (
                    <div
                      key={idx}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono-code flex items-center gap-2 border ${
                        darkMode
                          ? 'bg-[#121212] border-[#222222] text-[#d4d4d4]'
                          : 'bg-[#f8fafc] border-[#e2e8f0] text-[#334155]'
                      }`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: activePillar.color }}
                      />
                      <span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs font-mono-code text-[#8e8e93]">
                <strong className="text-current font-bold">Surfaces You’ll Target:</strong>{' '}
                {activePillar.targetSurfaces}
              </div>
            </div>

            {/* Contrast Callout */}
            <div
              className={`lg:col-span-5 p-6 rounded-xl border ${
                darkMode ? 'bg-[#121212] border-[#262626]' : 'bg-[#f1f5f9] border-[#cbd5e1]'
              }`}
            >
              <div className="font-mono-code text-xs uppercase tracking-wider text-[#8e8e93] mb-4">
                The Practical Learning Shift
              </div>
              <div className="space-y-3">
                <div className="text-xs text-[#8e8e93] line-through flex items-center gap-2">
                  <span>❌</span>
                  <span>"Did I complete all 50 recorded video lessons?"</span>
                </div>
                <div className="text-xs text-[#8e8e93] line-through flex items-center gap-2">
                  <span>❌</span>
                  <span>"Did I submit a dummy theoretical homework sheet?"</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 text-xs font-mono-code space-y-1.5">
                  <div className="text-[#00ff88] font-bold">The Challenge Mindset:</div>
                  <div className="text-current">"Did my project crawl rate increase?"</div>
                  <div className="text-current">"Is my URL ranking on position #1-#10?"</div>
                  <div className="text-current">"Did ChatGPT / Perplexity cite my brand?"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional vs Saving.Careers Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              What Makes This Different?
            </h3>
            <p className="text-xs font-mono-code text-[#8e8e93] uppercase tracking-wider">
              Traditional Theory Course vs. Saving.Careers Contest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-[#0f0f0f] border-[#222222]' : 'bg-white border-[#e2e8f0]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-lg text-[#8e8e93]">
                  Traditional SEO Course
                </span>
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-[#ff3366]/10 text-[#ff3366]">
                  High Risk
                </span>
              </div>
              <ul className="space-y-3 font-mono-code text-xs text-[#8e8e93]">
                <li className="flex items-center gap-2.5">
                  <XCircle size={15} className="text-[#ff3366] shrink-0" />
                  <span>Pay complete ₹15,000–₹50,000 upfront</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <XCircle size={15} className="text-[#ff3366] shrink-0" />
                  <span>Watch passive pre-recorded lecture videos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <XCircle size={15} className="text-[#ff3366] shrink-0" />
                  <span>Imaginary sandbox assignments that nobody sees</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <XCircle size={15} className="text-[#ff3366] shrink-0" />
                  <span>Receive a piece of paper certificate</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <XCircle size={15} className="text-[#ff3366] shrink-0" />
                  <span>Hope you can somehow apply it later</span>
                </li>
              </ul>
            </div>

            {/* Saving.Careers Challenge */}
            <div
              className={`p-6 rounded-2xl border relative overflow-hidden ${
                darkMode
                  ? 'bg-[#111612] border-[#00ff88]/50 shadow-[0_0_40px_rgba(0,255,136,0.12)]'
                  : 'bg-emerald-50/40 border-[#00994f]/40 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-lg text-[#00ff88]">
                  Saving.Careers Challenge
                </span>
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-[#00ff88]/20 text-[#00ff88] font-bold">
                  Zero-Fee Outcome
                </span>
              </div>
              <ul className="space-y-3 font-mono-code text-xs text-current">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0" />
                  <span>
                    <strong>Register for ₹999 only</strong> (No full fee upfront)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0" />
                  <span>Direct tactical mentorship with Nikhil Sir</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0" />
                  <span>Build &amp; optimize on a real live domain</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0" />
                  <span>Continuous iterative loops: SEO + AEO + GEO</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#00ff88] shrink-0" />
                  <span className="text-[#00ff88] font-bold">
                    Rank your project to criteria? Course fee = ₹0
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-[#00ff88]/20 flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#8e8e93]">
                  Start with ₹999
                </span>
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#00ff88] hover:underline"
                >
                  Join Contest <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
