import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { contactConfig } from '../data/contact';

interface FloatingActionsProps {
  whatsAppNumber?: string | null;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  whatsAppNumber = contactConfig.whatsappNumber,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hi Chaitanya, I visited your portfolio and would like to discuss a website development project.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Floating Option (Rendered only when a valid contact number is configured) */}
      {whatsAppNumber && (
        <a
          href={`https://wa.me/${whatsAppNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          aria-label="Chat directly on WhatsApp with B. Chaitanya"
          title="Chat directly on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      )}

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-canvas-card/90 border border-border hover:border-[#3157E8] text-warm-dim hover:text-white backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3157E8]"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
