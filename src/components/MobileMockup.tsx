import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface MobileMockupProps {
  children: React.ReactNode;
  className?: string;
  notchTitle?: string;
}

export const MobileMockup: React.FC<MobileMockupProps> = ({
  children,
  className = '',
  notchTitle = '9:41',
}) => {
  return (
    <div
      className={`relative rounded-[36px] p-2.5 bg-gradient-to-b from-[#2A2E3D] via-[#1A1D27] to-[#12141C] border border-border-bright shadow-2xl ${className}`}
    >
      {/* Outer Phone Frame */}
      <div className="relative rounded-[28px] overflow-hidden bg-canvas-darker border border-black/40">
        {/* Dynamic Island / Status Bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-canvas-darker/90 backdrop-blur-md z-20 flex items-center justify-between px-5 text-[10px] text-warm-muted font-medium select-none">
          <span>{notchTitle}</span>
          <div className="w-16 h-3 bg-black rounded-full mx-auto" />
          <div className="flex items-center gap-1.5">
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3" />
          </div>
        </div>

        {/* Screen Viewport */}
        <div className="pt-6 relative overflow-hidden">{children}</div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1 inset-x-0 h-3 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
