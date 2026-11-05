import React from 'react';
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
    <section id="about" className="py-24 md:py-36 relative border-t border-[#E2E6F0] bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Studio Presence Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-4xl p-2 bg-[#FFFFFF] border border-[#E2E6F0] shadow-xl">
              <div className="rounded-3xl overflow-hidden bg-[#FFFFFF] relative">
                {/* Visual Avatar / Editorial Portrait Graphic */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] flex flex-col justify-between p-8 overflow-hidden group">
                  {/* Subtle Geometric Graphic Element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2649F4]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header within portrait card */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#2649F4] font-bold">
                      B. CHAITANYA
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-mono font-bold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Taking Bookings
                    </span>
                  </div>

                  {/* Center Monogram / Portrait Frame */}
                  <div className="relative z-10 my-auto text-center py-8">
                    <div className="w-28 h-28 mx-auto rounded-3xl bg-[#2649F4] text-white flex items-center justify-center font-display font-black text-4xl shadow-xl shadow-[#2649F4]/30 group-hover:scale-105 transition-transform duration-300">
                      BC
                    </div>
                    <div className="mt-5 font-display font-black text-2xl text-[#0A0C11]">
                      B. Chaitanya
                    </div>
                    <div className="text-xs text-[#525866] font-medium mt-1">
                      Web Developer &amp; AI Automation Specialist
                    </div>
                  </div>

                  {/* Operational Details at Bottom */}
                  <div className="relative z-10 space-y-2.5 pt-4 border-t border-[#CBD5E1] text-[11px] text-[#525866] font-medium">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-semibold text-[#0A0C11]">
                        <MapPin className="w-3.5 h-3.5 text-[#2649F4]" />
                        Base &amp; Timezone
                      </span>
                      <span className="font-mono text-[#0A0C11] font-bold">India (UTC +5:30)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-semibold text-[#0A0C11]">
                        <Clock className="w-3.5 h-3.5 text-[#2649F4]" />
                        Overlap Hours
                      </span>
                      <span className="font-mono text-[#0A0C11] font-bold">US, UK, UAE &amp; EU</span>
                    </div>
                  </div>
                </div>

                {/* Social Connect Strip */}
                <div className="p-4 bg-[#FFFFFF] border-t border-[#E2E6F0] flex items-center justify-around">
                  <a
                    href={contactConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-[#525866] hover:text-[#0A66C2] hover:bg-[#F4F6FB] rounded-xl transition-colors"
                    aria-label="LinkedIn Profile (Bhyri Chaitanya)"
                    title="LinkedIn: Bhyri Chaitanya"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.socials.x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-[#525866] hover:text-[#0A0C11] hover:bg-[#F4F6FB] rounded-xl transition-colors"
                    aria-label="X Profile (@saisriniva8095)"
                    title="X: @saisriniva8095"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-[#525866] hover:text-[#E4405F] hover:bg-[#F4F6FB] rounded-xl transition-colors"
                    aria-label="Instagram Profile (@bhyrichaitanya)"
                    title="Instagram: @bhyrichaitanya"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.socials.threads.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-[#525866] hover:text-[#0A0C11] hover:bg-[#F4F6FB] rounded-xl transition-colors"
                    aria-label="Threads Profile (@bhyrichaitanya)"
                    title="Threads: @bhyrichaitanya"
                  >
                    <ThreadsIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="p-2.5 text-[#525866] hover:text-[#2649F4] hover:bg-[#F4F6FB] rounded-xl transition-colors"
                    aria-label={`Email ${contactConfig.email}`}
                    title={`Email: ${contactConfig.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${contactConfig.phoneTel}`}
                    className="p-2.5 text-[#525866] hover:text-emerald-600 hover:bg-[#F4F6FB] rounded-xl transition-colors"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E6F0] text-[#0A0C11] text-xs font-mono tracking-wider uppercase mb-6 shadow-2xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2649F4]" />
              <span>ABOUT THE DEVELOPER</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#0A0C11] tracking-tight leading-[1.1] mb-8">
              Building Digital Experiences With <span className="text-[#2649F4]">Business in Mind</span>.
            </h2>

            {/* Exact Required Copy */}
            <div className="space-y-6 text-[#525866] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm <strong className="text-[#0A0C11] font-bold">B. Chaitanya</strong>, an independent website developer and AI automation enthusiast. I help businesses create a stronger digital presence through thoughtful website design, clear communication, and practical automation solutions.
              </p>
              <p>
                My approach combines design, usability, and business objectives to create digital experiences that do more than simply look good.
              </p>
            </div>

            {/* 4 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 pt-8 border-t border-[#E2E6F0]">
              <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[#E2E6F0] shadow-2xs">
                <div className="text-xs font-bold text-[#0A0C11] flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2649F4]" />
                  <span>Direct Communication</span>
                </div>
                <p className="text-[11px] text-[#525866] leading-relaxed">
                  You work directly with the builder—no junior account managers or miscommunicated handoffs.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[#E2E6F0] shadow-2xs">
                <div className="text-xs font-bold text-[#0A0C11] flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2649F4]" />
                  <span>Commercial Alignment</span>
                </div>
                <p className="text-[11px] text-[#525866] leading-relaxed">
                  Every section and call to action is placed with intent to drive qualified user action.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[#E2E6F0] shadow-2xs">
                <div className="text-xs font-bold text-[#0A0C11] flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2649F4]" />
                  <span>Cross-Border Collaboration</span>
                </div>
                <p className="text-[11px] text-[#525866] leading-relaxed">
                  Experienced working seamlessly with asynchronous teams across US, UK, UAE &amp; Europe.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[#E2E6F0] shadow-2xs">
                <div className="text-xs font-bold text-[#0A0C11] flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2649F4]" />
                  <span>Practical Automation</span>
                </div>
                <p className="text-[11px] text-[#525866] leading-relaxed">
                  Connecting your frontend directly to 24/7 AI chat agents, calendar booking, and CRM tools.
                </p>
              </div>
            </div>

            {/* Next Step Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#2649F4]/20 hover:-translate-y-0.5"
              >
                <span>Let's Discuss Your Project</span>
              </a>
              <span className="text-xs text-[#525866] font-medium">
                Typical reply within 24 hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
