import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { SavingCareersLogo } from './SavingCareersLogo';

interface FaqCtaSectionProps {
  darkMode: boolean;
  onOpenRegister: () => void;
}

export const FaqCtaSection: React.FC<FaqCtaSectionProps> = ({
  darkMode,
  onOpenRegister,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is ₹999 the complete course fee?',
      a: 'No. ₹999 is the registration fee that secures your seat in the contest/program. The applicable course fee is separate, and if your project successfully qualifies under the ranking criteria, your course fee becomes ₹0!',
    },
    {
      q: 'Do I have to pay the course fee before starting?',
      a: 'No. Participants start the learning and project journey without paying the full course fee upfront. You learn first, build your project, optimize it, and prove execution before any course fee is due.',
    },
    {
      q: 'What happens if my project ranks?',
      a: 'If your project meets the officially published contest ranking criteria during the tracking period, you do not have to pay the course fee. Your course fee is completely waived (Course Fee = ₹0).',
    },
    {
      q: 'What happens if my project does not rank?',
      a: 'If the project does not meet the qualification criteria, you can pay the applicable course fee later within 6 months, according to the program terms. You still permanently retain the practical skills, live domain, optimized pages, and experience gained during the challenge.',
    },
    {
      q: 'What will I learn in this program?',
      a: 'The challenge covers modern organic discovery from first principles: SEO (search engines, keyword intent, technical crawlability), AEO (Answer Engine Optimization, featured snippets, entity structure), and GEO (Generative Engine Optimization, LLM citations in ChatGPT and Perplexity).',
    },
    {
      q: 'Do I need previous SEO experience or an existing website?',
      a: 'The program is designed for beginners as well as experienced practitioners. You do not need an existing live website before registering; during Stage 02 (Build), you will choose, set up, or connect an eligible project with guidance.',
    },
    {
      q: 'Is ranking guaranteed?',
      a: 'No. Organic search rankings depend on multiple dynamic variables (competition, execution, niche selection, search engine updates) and cannot be artificially guaranteed. The contest gives you a disciplined execution framework, and qualifying projects earn the ₹0 course-fee waiver.',
    },
  ];

  return (
    <section id="section-faq" className="py-24 border-t border-[#222222]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-mono-code text-xs text-[#8e8e93] tracking-widest uppercase">
            Questions &amp; Final Registration Gate
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#8e8e93] text-base sm:text-lg leading-relaxed">
            Everything you need to know about the registration fee, ranking qualification, and contest terms.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#111111] border-[#00ff88]/40'
                      : 'bg-white border-[#00994f]/40 shadow-sm'
                    : darkMode
                    ? 'bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#2a2a2a]'
                    : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-current">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#00ff88] text-black rotate-180'
                        : darkMode
                        ? 'bg-[#1a1a1a] text-[#8e8e93]'
                        : 'bg-[#e2e8f0] text-[#64748b]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#8e8e93] leading-relaxed border-t border-[#222222]/30 dark:border-[#222222]/60 font-mono-code">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Conversion Gate Card */}
        <div
          className={`p-8 sm:p-12 lg:p-16 rounded-3xl border text-center relative overflow-hidden ${
            darkMode
              ? 'bg-[#0b0f0c] border-[#00ff88]/40 shadow-[0_0_80px_rgba(0,255,136,0.12)]'
              : 'bg-gradient-to-b from-white to-emerald-50/50 border-[#00994f]/30 shadow-lg'
          }`}
        >
          {/* Top glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-bold bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
              <Sparkles size={14} />
              LIMITED SEATS PER BATCH
            </div>

            <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Stop Just Learning SEO.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00cc6a] to-[#22c55e]">
                Start Proving You Can Apply It.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-[#8e8e93] max-w-xl mx-auto font-normal">
              Register for ₹999. Learn SEO, AEO &amp; GEO with Nikhil Sir. Build a real project. Optimize it.
              Make it rank. If it qualifies according to the contest criteria, your course fee becomes ₹0.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="final-cta-btn"
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider bg-[#00ff88] text-black hover:bg-[#00cc6a] hover:shadow-[0_0_35px_rgba(0,255,136,0.4)] flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-200"
              >
                <span>Register for ₹999</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono-code text-[#8e8e93]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#00ff88]" />
                Zero Upfront Course Fee
              </span>
              <span>•</span>
              <span>100% Real Live Project</span>
              <span>•</span>
              <span>Mentored by Nikhil Sir</span>
              <span>•</span>
              <span>Saving.Careers × Nikhil Sir</span>
            </div>

            <p className="text-[11px] font-mono-code text-[#666666] pt-2">
              Registration fee (₹999) and course fee are separate. Program terms, qualification benchmarks, and timelines apply.
            </p>
          </div>
        </div>

        {/* Brand Footer */}
        <footer className="mt-20 pt-8 border-t border-[#222222]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#8e8e93]">
          <div className="flex items-center gap-3">
            <SavingCareersLogo showText={true} />
          </div>
          <div className="text-center sm:text-right">
            <div>Saving.Careers × Nikhil Sir — Learn it. Apply it. Prove it.</div>
            <div className="text-[10px] text-[#666666] mt-0.5">
              All rights reserved. Digital Marketing Challenge 2025–2026.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
