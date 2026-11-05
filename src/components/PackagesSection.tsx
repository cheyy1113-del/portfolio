import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Globe } from 'lucide-react';

interface PricingTier {
  currency: string;
  symbol: string;
  price: string;
  secondary: string;
}

export const PackagesSection: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD' | 'GBP' | 'AED'>('INR');

  const pricingMap: Record<string, PricingTier> = {
    INR: { currency: 'INR', symbol: '₹', price: '16,999/-', secondary: 'Includes hosting & domain' },
    USD: { currency: 'USD', symbol: '$', price: '499', secondary: 'Includes global edge hosting & domain' },
    GBP: { currency: 'GBP', symbol: '£', price: '399', secondary: 'Includes global edge hosting & domain' },
    AED: { currency: 'AED', symbol: 'AED ', price: '1,899', secondary: 'Includes global edge hosting & domain' },
  };

  const currentTier = pricingMap[selectedCurrency];

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 md:py-36 relative bg-[#F4F6FB] border-t border-[#E2E6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E6F0] text-[#0A0C11] text-xs font-mono tracking-wider uppercase mb-4 shadow-2xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#2649F4]" />
            <span>TRANSPARENT VALUE ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0A0C11] tracking-tight leading-[1.1] mb-5">
            Turnkey Digital Presence. <br className="hidden sm:inline" />
            <span className="text-[#2649F4]">No Hidden Traps.</span>
          </h2>
          <p className="text-[#525866] text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Everything your business needs to launch an authoritative, high-converting digital presence engineered to convert international prospects.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 bg-[#FFFFFF] border border-[#E2E6F0] rounded-full shadow-2xs mt-6">
            {(['INR', 'USD', 'GBP', 'AED'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCurrency === curr
                    ? 'bg-[#2649F4] text-white shadow-xs'
                    : 'text-[#525866] hover:text-[#0A0C11]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Card Bento Grid Composition (Exactly Recreated from Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Top-Left White Value Card */}
          <div className="md:col-span-7 bg-[#FFFFFF] border border-[#E2E6F0] rounded-4xl p-8 sm:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0A0C11] tracking-tight leading-[1.15] mb-6">
                We build <span className="text-[#2649F4]">premium high-converting websites</span> for businesses that want to grow.
              </h3>
              <p className="text-[#525866] text-base sm:text-lg leading-relaxed font-normal">
                Without a website, you lose trust. We guarantee increased trust, credibility, and market positioning from your customers.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E2E6F0] flex items-center gap-3 text-xs text-[#525866] font-semibold">
              <Globe className="w-4 h-4 text-[#2649F4]" />
              <span>Engineered for global standards across US, UK, UAE &amp; Europe</span>
            </div>
          </div>

          {/* Card 2: Top-Right Solid Royal Blue Card (What's included) */}
          <div className="md:col-span-5 bg-[#2649F4] text-white rounded-4xl p-8 sm:p-10 shadow-xl shadow-[#2649F4]/25 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-8 text-white">
                What's included:
              </h3>

              <ul className="space-y-4">
                {[
                  'Premium, Unique & Aesthetic Designs',
                  'Ultra-Fast & Mobile-Responsive',
                  'WhatsApp & Direct Call Integration',
                  'Smart Enquiry & Lead Capture',
                  'Complete Story-Driven Copywriting',
                  'Basic SEO & Google Business Ranking',
                  'Domain and hosting included',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-white/95 leading-snug">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/80 font-medium">
              Turnaround: 2 to 4 weeks with weekly progress check-ins
            </div>
          </div>

          {/* Card 3: Bottom-Left Solid Royal Blue Pricing Card */}
          <div className="md:col-span-7 bg-[#2649F4] text-white rounded-4xl p-8 sm:p-10 shadow-xl shadow-[#2649F4]/25 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider font-extrabold text-white/90">
                GET YOUR PREMIUM DIGITAL PRESENCE FROM
              </span>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white">
                  {currentTier.symbol}{currentTier.price}
                </span>
              </div>

              <p className="text-sm font-semibold text-white/85 mt-2">
                {currentTier.secondary}
              </p>
            </div>

            {/* Free Consultation Box */}
            <div className="mt-8 p-4 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-xs flex items-center gap-3">
              <span className="text-xl">🎁</span>
              <div className="text-xs font-bold text-white leading-snug">
                Free Consultation Included and open for negotiations
              </div>
            </div>
          </div>

          {/* Card 4: Bottom-Right White Action Card */}
          <div className="md:col-span-5 bg-[#FFFFFF] border border-[#E2E6F0] rounded-4xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0A0C11] tracking-tight mb-4">
                Let's build your credibility.
              </h3>
              <p className="text-[#525866] text-sm leading-relaxed font-normal mb-8">
                Get a free consultation. No commitment needed — just a conversation about your growth.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToContact}
                className="w-full py-4 px-6 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#2649F4]/25 hover:shadow-xl hover:shadow-[#2649F4]/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
              <p className="text-center text-[11px] text-[#525866] mt-3 font-medium">
                Replies within 24 hours · Direct developer access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
