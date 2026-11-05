import React from 'react';
import { ShieldAlert, Compass, Share2, HelpCircle, Smartphone, Award, ArrowRight } from 'lucide-react';
import { businessProblems } from '../data/problems';

export const BusinessProblems: React.FC = () => {
  const iconMap = [
    ShieldAlert,
    Compass,
    Share2,
    HelpCircle,
    Smartphone,
    Award,
  ];

  return (
    <section id="problems" className="py-24 md:py-32 relative border-t border-[#E2E6F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2649F4]/10 border border-[#2649F4]/20 text-[#2649F4] text-xs font-mono tracking-wider uppercase mb-4 font-semibold">
            <span>Risk Assessment &amp; Opportunity Cost</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0A0C11] tracking-tight leading-[1.1] mb-6">
            Your Website Could Be Costing You Opportunities.
          </h2>
          <p className="text-[#525866] text-base sm:text-lg leading-relaxed font-medium">
            When international prospects consider your company, their first interaction is almost always digital. If that experience introduces doubt, friction, or confusion, qualified deals evaporate before they even initiate an inquiry.
          </p>
        </div>

        {/* 6 Editorial Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {businessProblems.map((prob, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={prob.number}
                className="group p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E6F0] hover:border-[#2649F4]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2649F4]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#2649F4] bg-[#2649F4]/10 px-3 py-1 rounded-full border border-[#2649F4]/20">
                      RISK {prob.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4F6FB] border border-[#E2E6F0] group-hover:bg-[#2649F4] group-hover:text-white group-hover:border-[#2649F4] flex items-center justify-center text-[#525866] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Core Problem */}
                  <h3 className="font-display font-extrabold text-xl text-[#0A0C11] mb-3 group-hover:text-[#2649F4] transition-colors">
                    {prob.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#0A0C11]/85 mb-4 leading-snug">
                    {prob.riskDescription}
                  </div>

                  {/* Business Reality / Impact */}
                  <p className="text-xs text-[#525866] leading-relaxed mb-6 font-normal">
                    {prob.businessImpact}
                  </p>
                </div>

                {/* Solution Highlight */}
                <div className="pt-4 border-t border-[#E2E6F0] text-[11px] font-semibold text-[#525866] flex items-start gap-2 group-hover:text-[#0A0C11] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2649F4] shrink-0 mt-0.5" />
                  <span>{prob.solutionHighlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Takeaway Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F4F6FB] border border-[#E2E6F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-extrabold text-lg text-[#0A0C11]">
              The difference isn’t just aesthetic—it’s commercial.
            </h4>
            <p className="text-xs sm:text-sm text-[#525866] max-w-2xl font-medium">
              A strategic website positions your business as the premier authority in your space, pre-qualifies incoming inquiries, and makes taking the next step effortless.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 group shadow-xs hover:-translate-y-0.5"
          >
            <span>See How I Solve This</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2649F4] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
