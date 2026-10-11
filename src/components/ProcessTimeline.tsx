import React from 'react';
import { Search, PenTool, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/process';

export const ProcessTimeline: React.FC = () => {
  const iconList = [Search, PenTool, Code2, Rocket];

  return (
    <section id="process" className="py-24 md:py-36 relative bg-canvas">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-border text-warm-muted text-xs font-mono tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157E8]" />
            <span>EXECUTION FRAMEWORK</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-warm tracking-tight leading-[1.1] mb-6">
            From Idea to <span className="text-[#3157E8]">Live Website</span>.
          </h2>
          <p className="text-warm-muted text-base sm:text-lg leading-relaxed">
            A transparent four-step delivery process engineered to keep your project on schedule, eliminate ambiguity, and guarantee an international standard of finish.
          </p>
        </div>

        {/* 4-Step Interactive Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = iconList[index % iconList.length];

            return (
              <div
                key={step.number}
                className="group p-8 rounded-3xl bg-canvas-card border border-border hover:border-[#3157E8]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3157E8]/10 relative"
              >
                {/* Step Connector Line (on large screens) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-border group-hover:bg-[#3157E8]/40 z-20 transition-colors" />
                )}

                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warm to-warm-dim">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-canvas-surface border border-border group-hover:border-[#3157E8]/40 flex items-center justify-center text-warm-dim group-hover:text-[#3157E8] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Phase Title */}
                  <h3 className="font-display font-bold text-xl text-warm mb-3 group-hover:text-white transition-colors">
                    {step.phase}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-warm-muted leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-border/80">
                    {step.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-[11px] text-warm-dim">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3157E8] shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Output */}
                <div className="pt-4 border-t border-border/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#3157E8] font-bold">
                    Phase Deliverable
                  </div>
                  <div className="text-xs text-warm font-medium mt-1 leading-snug">
                    {step.output}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-canvas-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm text-warm font-medium">
              Average project turnaround: <span className="text-warm-muted">2 to 4 weeks depending on scope.</span>
            </span>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#3157E8] hover:underline flex items-center gap-1.5"
          >
            <span>Request a timeline estimate for your project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
