import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
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

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Why It Matters', href: '#problems' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-[#E2E6F0] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2649F4] rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2649F4] flex items-center justify-center font-display font-black text-sm text-white shadow-md shadow-[#2649F4]/20 group-hover:scale-105 transition-all">
              BC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base tracking-tight text-[#0A0C11] group-hover:text-[#2649F4] transition-colors">
                B. CHAITANYA
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#525866] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available Worldwide
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFFFFF] border border-[#E2E6F0] rounded-full px-5 py-2 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-[#525866] hover:text-[#0A0C11] hover:bg-[#F4F6FB] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#2649F4]/25 hover:shadow-lg hover:shadow-[#2649F4]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full bg-[#2649F4] text-white text-[11px] font-bold uppercase tracking-wider"
            >
              Start
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#525866] hover:text-[#0A0C11] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E6F0] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#525866] hover:text-[#2649F4] py-2 border-b border-[#F4F6FB] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#2649F4]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-[11px] text-[#525866] flex items-center justify-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#2649F4]" />
              <span>Partnering with clients in US, UK, UAE &amp; Europe</span>
            </div>

            {/* Quick Social Links */}
            <div className="pt-3 border-t border-[#E2E6F0] flex items-center justify-center gap-5 text-[#525866]">
              <a
                href={contactConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition-colors p-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A0C11] transition-colors p-1"
                aria-label="X Profile"
                title="X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F] transition-colors p-1"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.socials.threads.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A0C11] transition-colors p-1"
                aria-label="Threads Profile"
                title="Threads"
              >
                <ThreadsIcon className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
