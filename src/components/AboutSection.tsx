import { contactConfig } from '../data/contact';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

// Custom SVG icon for Threads
const ThreadsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 192 192"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.745C77.417 44.745 61.2631 56.4022 55.4542 74.8872L72.247 80.5283C76.0125 68.5446 86.4385 61.2372 97.222 61.2372C111.464 61.2372 120.301 70.8351 121.724 88.9461C107.03 89.9723 93.3093 93.5937 82.6865 99.8519C67.6251 108.725 58.7495 122.181 59.9829 137.795C61.3506 155.109 75.3354 167.255 93.398 167.255C108.205 167.255 120.737 159.278 128.452 144.93C133.567 154.444 141.564 160.016 151.789 160.016C163.639 160.016 172.932 151.68 174.588 139.297L157.94 136.953C157.17 142.715 153.304 145.474 147.882 145.474C141.139 145.474 136.035 139.816 135.059 129.98C143.914 116.516 146.963 100.866 141.537 88.9883ZM94.6309 150.763C84.773 150.763 76.6578 144.384 75.9922 135.946C75.2891 127.027 80.4862 118.064 90.9634 111.892C99.2725 107.001 109.916 104.095 121.674 103.543C120.218 125.757 110.155 150.763 94.6309 150.763Z" />
  </svg>
);

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative border-t border-border/80 bg-canvas-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Studio Presence Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-border-bright via-border to-canvas-card shadow-2xl">
              <div className="rounded-[22px] overflow-hidden bg-canvas-card relative">
                {/* Visual Avatar / Editorial Portrait Graphic */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1A1D27] via-[#0E1017] to-[#07080B] flex flex-col justify-between p-8 overflow-hidden group">
                  {/* Subtle Geometric Graphic Element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#3157E8]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header within portrait card */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#3157E8] font-bold">
                      B. CHAITANYA
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Taking Bookings
                    </span>
                  </div>

                  {/* Center Monogram / Portrait Frame */}
                  <div className="relative z-10 my-auto text-center py-10">
                    <div className="w-32 h-32 mx-auto rounded-2xl bg-canvas-surface border-2 border-border-bright flex items-center justify-center font-display font-extrabold text-5xl text-warm shadow-2xl group-hover:border-[#3157E8]/50 transition-colors">
                      BC
                    </div>
                    <div className="mt-4 font-display font-bold text-xl text-warm">
                      B. Chaitanya
                    </div>
                    <div className="text-xs text-warm-muted font-mono mt-1">
                      Web Developer &amp; AI Automation Specialist
                    </div>
                  </div>

                  {/* Operational Details at Bottom */}
                  <div className="relative z-10 space-y-2 pt-4 border-t border-border/80 text-[11px] text-warm-dim">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#3157E8]" />
                        Base &amp; Timezone
                      </span>
                      <span className="text-warm font-mono">India (UTC +5:30)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#3157E8]" />
                        Overlap Hours
                      </span>
                      <span className="text-warm font-mono">US, UK, UAE &amp; EU</span>
                    </div>
                  </div>
                </div>

                {/* Social Connect Strip */}
                <div className="p-4 bg-canvas-surface border-t border-border flex items-center justify-around">
                  <a
                    href={contactConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-warm-dim hover:text-warm hover:bg-canvas-card rounded-lg transition-colors group/soc"
                    aria-label="LinkedIn Profile (Bhyri Chaitanya)"
                    title="LinkedIn: Bhyri Chaitanya"
                  >
                    <Linkedin className="w-4 h-4 group-hover/soc:text-[#0A66C2] transition-colors" />
                  </a>
                  <a
                    href={contactConfig.socials.x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-warm-dim hover:text-warm hover:bg-canvas-card rounded-lg transition-colors group/soc"
                    aria-label="X Profile (@saisriniva8095)"
                    title="X: @saisriniva8095"
                  >
                    <Twitter className="w-4 h-4 group-hover/soc:text-white transition-colors" />
                  </a>
                  <a
                    href={contactConfig.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-warm-dim hover:text-warm hover:bg-canvas-card rounded-lg transition-colors group/soc"
                    aria-label="Instagram Profile (@bhyrichaitanya)"
                    title="Instagram: @bhyrichaitanya"
                  >
                    <Instagram className="w-4 h-4 group-hover/soc:text-[#E4405F] transition-colors" />
                  </a>
                  <a
                    href={contactConfig.socials.threads.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-warm-dim hover:text-warm hover:bg-canvas-card rounded-lg transition-colors group/soc"
                    aria-label="Threads Profile (@bhyrichaitanya)"
                    title="Threads: @bhyrichaitanya"
                  >
                    <ThreadsIcon className="w-4 h-4 group-hover/soc:text-white transition-colors" />
                  </a>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="p-2 text-warm-dim hover:text-[#3157E8] hover:bg-canvas-card rounded-lg transition-colors"
                    aria-label={`Email ${contactConfig.email}`}
                    title={`Email: ${contactConfig.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${contactConfig.phoneTel}`}
                    className="p-2 text-warm-dim hover:text-emerald-400 hover:bg-canvas-card rounded-lg transition-colors"
                    aria-label={`Call ${contactConfig.phoneFormatted}`}
                    title={`Phone: ${contactConfig.phoneFormatted}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Required Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-border text-warm-muted text-xs font-mono tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157E8]" />
              <span>ABOUT THE DEVELOPER</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-warm tracking-tight leading-[1.1] mb-8">
              Building Digital Experiences With <span className="text-[#3157E8]">Business in Mind</span>.
            </h2>

            {/* Exact Required Copy */}
            <div className="space-y-6 text-warm-muted text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm <strong className="text-warm font-semibold">B. Chaitanya</strong>, an independent website developer and AI automation enthusiast. I help businesses create a stronger digital presence through thoughtful website design, clear communication, and practical automation solutions.
              </p>
              <p>
                My approach combines design, usability, and business objectives to create digital experiences that do more than simply look good.
              </p>
            </div>

            {/* 3 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 pt-8 border-t border-border/80">
              <div className="p-4 rounded-xl bg-canvas-card border border-border">
                <div className="text-xs font-bold text-warm flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3157E8]" />
                  <span>Direct Communication</span>
                </div>
                <p className="text-[11px] text-warm-dim leading-relaxed">
                  You work directly with the builder—no junior account managers or miscommunicated handoffs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-canvas-card border border-border">
                <div className="text-xs font-bold text-warm flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3157E8]" />
                  <span>Commercial Alignment</span>
                </div>
                <p className="text-[11px] text-warm-dim leading-relaxed">
                  Every section and call to action is placed with intent to drive qualified user action.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-canvas-card border border-border">
                <div className="text-xs font-bold text-warm flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3157E8]" />
                  <span>Cross-Border Collaboration</span>
                </div>
                <p className="text-[11px] text-warm-dim leading-relaxed">
                  Experienced working seamlessly with asynchronous teams across US, UK, UAE &amp; Europe.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-canvas-card border border-border">
                <div className="text-xs font-bold text-warm flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3157E8]" />
                  <span>Practical Automation</span>
                </div>
                <p className="text-[11px] text-warm-dim leading-relaxed">
                  Connecting your frontend directly to 24/7 AI chat agents, calendar booking, and CRM tools.
                </p>
              </div>
            </div>

            {/* Next Step Link */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3157E8] hover:bg-[#2445C7] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#3157E8]/20"
              >
                <span>Let's Discuss Your Project</span>
              </a>
              <span className="text-xs text-warm-dim">
                Typical reply within 24 hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
