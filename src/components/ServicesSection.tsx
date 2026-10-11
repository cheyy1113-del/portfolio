import React from 'react';
import { Layout, Target, Bot, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ElementType> = {
    Layout,
    Target,
    Bot,
  };

  const handleDiscussClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-36 relative border-t border-border/80 bg-canvas-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-border text-warm-muted text-xs font-mono tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157E8]" />
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-warm tracking-tight leading-[1.1] mb-6">
            Everything You Need to Build a <span className="text-[#3157E8]">Stronger Online Presence</span>.
          </h2>
          <p className="text-warm-muted text-base sm:text-lg leading-relaxed">
            Tailored engineering for businesses that cannot afford to look average. Whether you need an authoritative corporate identity, a high-converting campaign landing page, or autonomous AI systems—every project is executed with commercial rigor.
          </p>
        </div>

        {/* 3 Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Layout;

            return (
              <div
                key={service.id}
                className="group p-8 sm:p-10 rounded-3xl bg-canvas-card border border-border hover:border-[#3157E8]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3157E8]/10"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-warm-dim px-2.5 py-1 rounded bg-canvas-surface border border-border">
                      SERVICE {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-canvas-surface border border-border group-hover:border-[#3157E8]/40 flex items-center justify-center text-[#3157E8] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl text-warm mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#3157E8] mb-4">
                    {service.tagline}
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-warm-dim leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tangible Deliverables List */}
                  <div className="mb-8 pt-6 border-t border-border/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-warm-muted mb-3 font-semibold">
                      Included Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-warm-muted">
                          <Check className="w-4 h-4 text-[#3157E8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact & Action Button */}
                <div className="pt-6 border-t border-border/80">
                  <div className="p-3.5 rounded-xl bg-canvas-surface border border-border/80 mb-6">
                    <div className="text-[10px] uppercase font-mono text-[#3157E8] font-bold">
                      Business Impact
                    </div>
                    <div className="text-xs text-warm-dim mt-1 leading-snug">
                      {service.businessImpact}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDiscussClick(service.defaultFormValue)}
                    className="w-full py-3.5 px-5 rounded-xl bg-canvas-surface hover:bg-[#3157E8] text-warm hover:text-white border border-border-bright hover:border-[#3157E8] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#3157E8] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
