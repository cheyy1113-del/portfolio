import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { BrowserMockup } from './BrowserMockup';
import { MobileMockup } from './MobileMockup';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#3157E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#3157E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas-card border border-border/80 text-warm-muted text-xs font-mono tracking-wider uppercase backdrop-blur-md shadow-lg shadow-black/30 hover:border-[#3157E8]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#3157E8] animate-pulse" />
            <span>INDEPENDENT WEB DESIGN &amp; DEVELOPMENT</span>
          </div>
        </div>

        {/* Two-Column Grid: Left Copy, Right Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center md:text-left">
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-warm leading-[1.08] mb-6">
              Your Business <br className="hidden sm:inline" />
              Deserves More Than <br className="hidden sm:inline" />
              <span className="text-[#3157E8]">
                Just a Website.
              </span>
            </h1>

            <p className="text-warm-muted text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
              I design and develop modern, conversion-focused websites that help businesses build credibility, stand out from competitors, and turn online visitors into potential customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#3157E8] hover:bg-[#2445C7] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(49,87,232,0.28)] hover:shadow-[0_15px_40px_rgba(49,87,232,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-canvas-card hover:bg-canvas-hover border border-border hover:border-warm-muted/40 text-warm text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#3157E8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Credibility & Value Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border/80 max-w-xl mx-auto md:mx-0 text-left">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-canvas-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#3157E8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-warm">International Focus</div>
                  <div className="text-[11px] text-warm-dim">US, UK, UAE &amp; Europe</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-canvas-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3157E8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-warm">Conversion Driven</div>
                  <div className="text-[11px] text-warm-dim">Zero Fluff Architecture</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-md bg-canvas-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#3157E8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-warm">AI Automated</div>
                  <div className="text-[11px] text-warm-dim">24/7 Lead Capture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Desktop & Mobile Website Preview Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Primary Desktop Browser Frame (Featuring Onyx Hyderabad client site) */}
              <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
                <BrowserMockup
                  url="https://onyxhyderabad.com"
                  title="ONYX The Professional Fitness Studio"
                  badge="Live Client Site"
                >
                  <div className="relative aspect-[16/10] bg-black overflow-hidden group">
                    <img
                      src="/images/projects/onyx_hero.jpg"
                      alt="Onyx Hyderabad live website hero mockup preview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    
                    {/* Live overlay banner inside the mock */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-canvas-card/90 border border-border/80 backdrop-blur-md flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-warm">ONYX Fitness Studio</div>
                        <div className="text-[10px] text-warm-muted">Reformer Pilates &amp; Personal Training</div>
                      </div>
                      <span className="text-[10px] uppercase font-mono font-bold text-[#3157E8] px-2 py-0.5 rounded bg-[#3157E8]/10 border border-[#3157E8]/20">
                        Featured Work
                      </span>
                    </div>
                  </div>
                </BrowserMockup>
              </div>

              {/* Overlapping Mobile Mockup (Featuring Hayath Fitness mobile experience) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 z-20 shadow-2xl animate-float-slow hidden xs:block">
                <MobileMockup notchTitle="Hayath">
                  <div className="aspect-[9/18] bg-[#030303] overflow-hidden relative group">
                    <img
                      src="/images/projects/hayath_hero.jpg"
                      alt="Hayath Fitness mobile website mockup preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-4 inset-x-2 text-center p-2 rounded bg-black/80 backdrop-blur-sm border border-white/10">
                      <div className="text-[9px] font-bold text-white uppercase tracking-wider">Mobile-First</div>
                      <div className="text-[8px] text-[#3157E8] font-mono">100% Fluid Responsive</div>
                    </div>
                  </div>
                </MobileMockup>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 z-20 bg-canvas-card/95 border border-border-bright rounded-xl p-3 shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-warm">Bespoke Engineering</div>
                  <div className="text-[10px] text-warm-muted font-mono">No generic templates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
