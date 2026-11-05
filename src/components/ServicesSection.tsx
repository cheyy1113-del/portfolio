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
    <section id="services" className="py-24 md:py-36 relative border-t border-[#E2E6F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2649F4]/10 border border-[#2649F4]/20 text-[#2649F4] text-xs font-mono tracking-wider uppercase mb-4 font-semibold">
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0A0C11] tracking-tight leading-[1.1] mb-6">
            Everything You Need to Build a <span className="text-[#2649F4]">Stronger Online Presence</span>.
          </h2>
          <p className="text-[#525866] text-base sm:text-lg leading-relaxed font-medium">
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
                className="group p-8 sm:p-10 rounded-4xl bg-[#FFFFFF] border border-[#E2E6F0] hover:border-[#2649F4]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2649F4]/10"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-[#0A0C11] px-3 py-1 rounded-full bg-[#F4F6FB] border border-[#E2E6F0]">
                      SERVICE {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F6FB] border border-[#E2E6F0] group-hover:bg-[#2649F4] group-hover:text-white group-hover:border-[#2649F4] flex items-center justify-center text-[#2649F4] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="font-display font-black text-2xl text-[#0A0C11] mb-3 group-hover:text-[#2649F4] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-[#2649F4] mb-4">
                    {service.tagline}
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-[#525866] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Tangible Deliverables List */}
                  <div className="mb-8 pt-6 border-t border-[#E2E6F0]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#0A0C11] mb-3.5 font-bold">
                      Included Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#525866] font-medium">
                          <Check className="w-4 h-4 text-[#2649F4] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact & Action Button */}
                <div className="pt-6 border-t border-[#E2E6F0]">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] mb-6">
                    <div className="text-[10px] uppercase font-mono text-[#2649F4] font-bold">
                      Business Impact
                    </div>
                    <div className="text-xs text-[#525866] mt-1 leading-snug font-medium">
                      {service.businessImpact}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDiscussClick(service.defaultFormValue)}
                    className="w-full py-3.5 px-5 rounded-full bg-[#F4F6FB] hover:bg-[#2649F4] text-[#0A0C11] hover:text-white border border-[#E2E6F0] hover:border-[#2649F4] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-2xs hover:shadow-md"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2649F4] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
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
