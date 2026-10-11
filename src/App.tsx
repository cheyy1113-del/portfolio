import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BusinessProblems } from './components/BusinessProblems';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesSection } from './components/ServicesSection';
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
    <div className="min-h-screen bg-canvas text-warm flex flex-col font-sans selection:bg-[#3157E8] selection:text-white relative">
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

        {/* 5. Process & Delivery Timeline */}
        <ProcessTimeline />

        {/* 6. About the Developer */}
        <AboutSection />

        {/* 7. Conversion Section & Inquiry Form */}
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
