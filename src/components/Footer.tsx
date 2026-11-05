import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';
import { contactConfig } from '../data/contact';

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

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1017] text-white pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2649F4] flex items-center justify-center font-display font-black text-sm text-white shadow-md shadow-[#2649F4]/20">
                BC
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                B. Chaitanya
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Independent website developer &amp; AI automation specialist. Crafting conversion-driven digital real estate for international businesses across the US, UK, UAE, and Europe.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
              <Globe className="w-3.5 h-3.5 text-[#2649F4]" />
              <span>Global Client Deliveries • Asynchronous &amp; Remote</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Design &amp; Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Landing Pages &amp; Lead Generation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Automation &amp; Business Systems
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Transparent Pricing Packages
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Work &amp; Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Selected Work Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Featured Projects
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <a
                  href="https://onyxhyderabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2649F4] transition-colors"
                >
                  Onyx Hyderabad
                </a>
              </li>
              <li>
                <a
                  href="https://dental-clinic-demo-henna.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2649F4] transition-colors"
                >
                  Dental Clinic Demo
                </a>
              </li>
              <li>
                <a
                  href="https://hayath-fitness.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2649F4] transition-colors"
                >
                  Hayath Fitness
                </a>
              </li>
              <li>
                <a
                  href="https://v0-ai-automation-website-rouge-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2649F4] transition-colors"
                >
                  NexusAI Automation
                </a>
              </li>
              <li>
                <a
                  href="https://noble-plan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2649F4] transition-colors"
                >
                  Personal Financial Gurus
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </div>
            <div className="text-xs text-slate-400 space-y-2">
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-1.5 text-white hover:text-[#2649F4] transition-colors font-medium break-all"
                title={`Email: ${contactConfig.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#2649F4] shrink-0" />
                <span>{contactConfig.email}</span>
              </a>

              <a
                href={`tel:${contactConfig.phoneTel}`}
                className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors font-mono text-[11px]"
                title={`Call: ${contactConfig.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{contactConfig.phoneFormatted}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-3">
              <a
                href={contactConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#0A66C2] text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile (Bhyri Chaitanya)"
                title="LinkedIn: Bhyri Chaitanya"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X Profile (@saisriniva8095)"
                title="X: @saisriniva8095"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#E4405F] text-slate-400 hover:text-[#E4405F] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile (@bhyrichaitanya)"
                title="Instagram: @bhyrichaitanya"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.threads.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Threads Profile (@bhyrichaitanya)"
                title="Threads: @bhyrichaitanya"
              >
                <ThreadsIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} B. Chaitanya. All rights reserved. Built with precision for international businesses.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1.5 px-3.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
