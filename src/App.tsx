import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BusinessProblems } from './components/BusinessProblems';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutSection } from './components/AboutSection';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export const App: React.FC = () => {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>(
    'Website Design & Development'
  );

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForForm(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FB] text-[#0A0C11] flex flex-col font-sans selection:bg-[#2649F4] selection:text-white relative">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Business Risks & Opportunity Cost */}
        <BusinessProblems />

        {/* 3. Featured Selected Work (5 Projects) */}
        <FeaturedProjects />

        {/* 4. Services & Capabilities */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Packages & "What's Included" Bento (From Reference Image) */}
        <PackagesSection />

        {/* 6. Process & Delivery Timeline */}
        <ProcessTimeline />

        {/* 7. About the Developer */}
        <AboutSection />

        {/* 8. Conversion Section & Inquiry Form */}
        <ConversionSection selectedService={selectedServiceForForm} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions (WhatsApp + Scroll to Top) */}
      <FloatingActions />
    </div>
  );
};

export default App;
