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
      className={`relative rounded-[36px] p-2 bg-[#0A0C11] border-2 border-[#CBD5E1] shadow-2xl shadow-slate-900/20 ${className}`}
    >
      {/* Outer Phone Frame */}
      <div className="relative rounded-[28px] overflow-hidden bg-[#0A0C11]">
        {/* Dynamic Island / Status Bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black/80 backdrop-blur-md z-20 flex items-center justify-between px-5 text-[10px] text-white/80 font-medium select-none">
          <span>{notchTitle}</span>
          <div className="w-14 h-3 bg-black rounded-full mx-auto" />
          <div className="flex items-center gap-1.5">
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3" />
          </div>
        </div>

        {/* Screen Viewport */}
        <div className="pt-6 relative overflow-hidden">{children}</div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1 inset-x-0 h-3 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-20 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
