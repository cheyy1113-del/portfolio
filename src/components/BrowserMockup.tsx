import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';

interface BrowserMockupProps {
  url: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  url,
  title,
  children,
  className = '',
  badge,
}) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-[#E2E6F0] bg-[#FFFFFF] shadow-xl shadow-slate-900/5 transition-all duration-300 group/browser ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E6F0] flex items-center justify-between gap-3 select-none">
        {/* Window controls (Traffic lights) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/90 group-hover/browser:bg-[#EF4444] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/90 group-hover/browser:bg-[#F59E0B] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]/90 group-hover/browser:bg-[#10B981] transition-colors" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto bg-[#FFFFFF] border border-[#E2E6F0] rounded-lg px-3 py-1 flex items-center justify-between text-xs shadow-2xs">
          <div className="flex items-center gap-1.5 truncate">
            <Lock className="w-3 h-3 text-[#10B981] shrink-0" />
            <span className="truncate font-mono text-[11px] text-[#525866] font-medium">
              {url.replace(/^https?:\/\//, '')}
            </span>
          </div>
          {badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2649F4] bg-[#2649F4]/10 border border-[#2649F4]/20 px-2 py-0.5 rounded-full shrink-0">
              {badge}
            </span>
          )}
        </div>

        {/* External Visit Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#525866] hover:text-[#2649F4] hover:bg-[#F1F5F9] transition-colors p-1.5 rounded-md shrink-0"
          title={`Open ${title} in new tab`}
          aria-label={`Open ${title} in new tab`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Viewport Content */}
      <div className="relative overflow-hidden bg-[#0A0C11]">{children}</div>
    </div>
  );
};
