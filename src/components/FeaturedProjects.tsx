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
    <section id="projects" className="py-24 md:py-36 relative bg-canvas">
      {/* Background divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-border text-warm-muted text-xs font-mono tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157E8]" />
              <span>CURATED CASE SHOWCASES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-warm tracking-tight leading-[1.1]">
              Websites Engineered for <span className="text-[#3157E8]">Commercial Impact</span>.
            </h2>
          </div>
          <p className="text-warm-muted text-sm sm:text-base max-w-md">
            Every build is purpose-architected to demonstrate authority, dispel buyer skepticism, and make taking the next step effortless.
          </p>
        </div>

        {/* 5 Project Cards */}
        <div className="space-y-20 lg:space-y-32">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const currentView = viewModes[project.id] || 'desktop';

            return (
              <article
                key={project.id}
                className="group p-6 sm:p-10 lg:p-12 rounded-3xl bg-canvas-card/60 border border-border hover:border-border-bright transition-all duration-500 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle project background gradient badge */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                />

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
                        <span className="font-mono text-xs font-bold text-warm-dim px-2.5 py-1 rounded bg-canvas-darker border border-border">
                          PROJECT {project.number}
                        </span>

                        <span className="text-xs font-semibold text-warm-muted px-3 py-1 rounded-full bg-canvas-surface border border-border">
                          {project.category}
                        </span>

                        {project.isClientWork ? (
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Client Project
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            Concept Prototype
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display font-bold text-2xl sm:text-4xl text-warm mb-3 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      {/* Core Headline */}
                      <p className="text-sm sm:text-base font-semibold text-warm-muted mb-4 leading-snug">
                        {project.headline}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-warm-dim leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Conversion Architecture Highlights */}
                      <div className="mb-6 space-y-2 pt-2 border-t border-border/80">
                        <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-warm-muted flex items-center gap-1.5 mb-3">
                          <Layers className="w-3.5 h-3.5 text-[#3157E8]" />
                          <span>Conversion Architecture</span>
                        </div>
                        {project.conversionFocus.map((focus, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-warm-muted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3157E8] shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] text-warm-dim bg-canvas-darker px-2.5 py-1 rounded border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Controls: Live URL Button & Viewport Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/80">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3157E8] hover:bg-[#2445C7] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#3157E8]/25 hover:shadow-[#3157E8]/40 hover:-translate-y-0.5 active:translate-y-0 group/link"
                      >
                        <span>View Live Website</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      {/* Viewport switcher */}
                      <div className="flex items-center gap-1 bg-canvas-darker p-1 rounded-lg border border-border text-warm-dim">
                        <button
                          onClick={() => toggleViewMode(project.id, 'desktop')}
                          className={`p-1.5 rounded text-xs transition-colors ${
                            currentView === 'desktop'
                              ? 'bg-canvas-card text-warm border border-border'
                              : 'hover:text-warm'
                          }`}
                          title="Desktop View"
                          aria-label="Desktop View"
                        >
                          <Monitor className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleViewMode(project.id, 'mobile')}
                          className={`p-1.5 rounded text-xs transition-colors ${
                            currentView === 'mobile'
                              ? 'bg-canvas-card text-warm border border-border'
                              : 'hover:text-warm'
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                            {/* View Live Hover Overlay */}
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                            >
                              <span className="px-5 py-2.5 rounded-lg bg-[#3157E8] hover:bg-[#2445C7] shadow-xl flex items-center gap-2">
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
                              className="p-3 rounded-xl bg-canvas-surface/80 border border-border/80 text-left"
                            >
                              <div className="text-[10px] uppercase font-mono text-warm-dim truncate">
                                {stat.label}
                              </div>
                              <div className="text-xs font-bold text-warm truncate mt-0.5">
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
                        <div className="text-center mt-3 text-xs text-warm-dim font-mono">
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
