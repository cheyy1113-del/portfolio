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
      className={`rounded-xl overflow-hidden border border-border bg-canvas-card shadow-2xl transition-all duration-300 group/browser ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="bg-canvas-surface/90 backdrop-blur-md px-4 py-3 border-b border-border flex items-center justify-between gap-3 select-none">
        {/* Window controls (Traffic lights) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover/browser:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover/browser:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover/browser:bg-green-500 transition-colors" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-lg mx-auto bg-canvas-darker/80 border border-border/80 rounded-md px-3 py-1 flex items-center justify-between text-xs text-warm-dim">
          <div className="flex items-center gap-1.5 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate font-mono text-[11px] text-warm-muted">
              {url.replace(/^https?:\/\//, '')}
            </span>
          </div>
          {badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#3157E8] bg-[#3157E8]/10 border border-[#3157E8]/20 px-1.5 py-0.5 rounded shrink-0">
              {badge}
            </span>
          )}
        </div>

        {/* External Visit Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-dim hover:text-[#3157E8] transition-colors p-1 rounded hover:bg-canvas-hover shrink-0"
          title={`Open ${title} in new tab`}
          aria-label={`Open ${title} in new tab`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Viewport Content */}
      <div className="relative overflow-hidden bg-canvas-darker">{children}</div>
    </div>
  );
};
