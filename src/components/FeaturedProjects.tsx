import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Monitor, Smartphone, Layers, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';
import { MobileMockup } from './MobileMockup';

export const FeaturedProjects: React.FC = () => {
  // Store view mode ('desktop' | 'mobile') for each project id
  const [viewModes, setViewModes] = useState<Record<string, 'desktop' | 'mobile'>>({
    'onyx-hyderabad': 'desktop',
    'dental-clinic-demo': 'desktop',
    'hayath-fitness': 'desktop',
    'ai-automation-website': 'desktop',
    'noble-plan': 'desktop',
  });

  const toggleViewMode = (projectId: string, mode: 'desktop' | 'mobile') => {
    setViewModes((prev) => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section id="projects" className="py-24 md:py-36 relative bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E6F0] text-[#0A0C11] text-xs font-mono tracking-wider uppercase mb-4 shadow-2xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2649F4]" />
              <span>CURATED CASE SHOWCASES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0A0C11] tracking-tight leading-[1.1]">
              Websites Engineered for <span className="text-[#2649F4]">Commercial Impact</span>.
            </h2>
          </div>
          <p className="text-[#525866] text-sm sm:text-base max-w-md font-medium">
            Every build is purpose-architected to demonstrate authority, dispel buyer skepticism, and make taking the next step effortless.
          </p>
        </div>

        {/* 5 Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const currentView = viewModes[project.id] || 'desktop';

            return (
              <article
                key={project.id}
                className="group p-6 sm:p-10 lg:p-12 rounded-4xl bg-[#FFFFFF] border border-[#E2E6F0] hover:border-[#CBD5E1] transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Column 1: Editorial Info & Business Narrative */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Top Badges: Category, Index & Client vs Concept Badge */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-5">
                        <span className="font-mono text-xs font-bold text-[#0A0C11] px-3 py-1 rounded-full bg-[#F4F6FB] border border-[#E2E6F0]">
                          PROJECT {project.number}
                        </span>

                        <span className="text-xs font-semibold text-[#525866] px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E6F0]">
                          {project.category}
                        </span>

                        {project.isClientWork ? (
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Client Project
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-[#2649F4] bg-[#2649F4]/10 border border-[#2649F4]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2649F4]" />
                            Concept Prototype
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0C11] mb-3 group-hover:text-[#2649F4] transition-colors">
                        {project.title}
                      </h3>

                      {/* Core Headline */}
                      <p className="text-sm sm:text-base font-semibold text-[#0A0C11]/85 mb-4 leading-snug">
                        {project.headline}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#525866] leading-relaxed mb-6 font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Conversion Architecture Highlights */}
                      <div className="mb-6 space-y-2 pt-4 border-t border-[#E2E6F0]">
                        <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#0A0C11] flex items-center gap-1.5 mb-3">
                          <Layers className="w-3.5 h-3.5 text-[#2649F4]" />
                          <span>Conversion Architecture</span>
                        </div>
                        {project.conversionFocus.map((focus, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#525866] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2649F4] shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] font-medium text-[#525866] bg-[#F4F6FB] px-2.5 py-1 rounded-md border border-[#E2E6F0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Controls: Live URL Button & Viewport Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E6F0]">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#2649F4]/20 hover:shadow-lg hover:shadow-[#2649F4]/30 hover:-translate-y-0.5 active:translate-y-0 group/link"
                      >
                        <span>View Live Website</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      {/* Viewport switcher */}
                      <div className="flex items-center gap-1 bg-[#F4F6FB] p-1 rounded-full border border-[#E2E6F0] text-[#525866]">
                        <button
                          onClick={() => toggleViewMode(project.id, 'desktop')}
                          className={`p-1.5 rounded-full text-xs transition-colors ${
                            currentView === 'desktop'
                              ? 'bg-[#FFFFFF] text-[#0A0C11] shadow-2xs font-bold'
                              : 'hover:text-[#0A0C11]'
                          }`}
                          title="Desktop View"
                          aria-label="Desktop View"
                        >
                          <Monitor className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleViewMode(project.id, 'mobile')}
                          className={`p-1.5 rounded-full text-xs transition-colors ${
                            currentView === 'mobile'
                              ? 'bg-[#FFFFFF] text-[#0A0C11] shadow-2xs font-bold'
                              : 'hover:text-[#0A0C11]'
                          }`}
                          title="Mobile View"
                          aria-label="Mobile View"
                        >
                          <Smartphone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: High-Quality Browser / Device Mockup */}
                  <div
                    className={`lg:col-span-7 flex justify-center items-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {currentView === 'desktop' ? (
                      <div className="w-full transition-all duration-300">
                        <BrowserMockup
                          url={project.liveUrl}
                          title={project.title}
                          badge={project.projectType}
                        >
                          <div className="relative aspect-[16/10] bg-black overflow-hidden group/img">
                            <img
                              src={project.primaryImage}
                              alt={`${project.title} desktop preview screenshot`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                            {/* View Live Hover Overlay */}
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                            >
                              <span className="px-6 py-3 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] shadow-xl flex items-center gap-2 text-xs uppercase font-bold tracking-wider">
                                <span>Inspect Live Website</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </span>
                            </a>
                          </div>
                        </BrowserMockup>

                        {/* Project Highlights Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                          {project.metricsOrHighlights.map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-left"
                            >
                              <div className="text-[10px] uppercase font-mono text-[#525866] truncate font-medium">
                                {stat.label}
                              </div>
                              <div className="text-xs font-bold text-[#0A0C11] truncate mt-0.5">
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Mobile Viewport Mode */
                      <div className="w-full max-w-xs py-4 flex flex-col items-center">
                        <MobileMockup notchTitle={project.title}>
                          <div className="aspect-[9/18] bg-black overflow-hidden relative group/img">
                            <img
                              src={project.secondaryImage || project.primaryImage}
                              alt={`${project.title} mobile preview screenshot`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                          </div>
                        </MobileMockup>
                        <div className="text-center mt-3 text-xs text-[#525866] font-mono">
                          Mobile Viewport Preview
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
