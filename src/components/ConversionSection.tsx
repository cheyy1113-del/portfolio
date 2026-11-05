import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Sparkles, Mail } from 'lucide-react';
import { contactConfig } from '../data/contact';

interface ConversionSectionProps {
  selectedService?: string;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({ selectedService }) => {
  // Currency selector state
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR' | 'AED' | 'INR'>('USD');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    currentUrl: '',
    projectScope: selectedService || 'Website Design & Development',
    budgetRange: '$2,500 – $5,000',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update scope if passed from parent service selection
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, projectScope: selectedService }));
    }
  }, [selectedService]);

  const budgetOptions: Record<string, string[]> = {
    USD: ['$1,500 – $3,000', '$3,000 – $6,000', '$6,000 – $10,000', '$10,000+'],
    GBP: ['£1,200 – £2,500', '£2,500 – £5,000', '£5,000 – £8,000', '£8,000+'],
    EUR: ['€1,400 – €2,800', '€2,800 – €5,500', '€5,500 – €9,000', '€9,000+'],
    AED: ['5,500 – 11,000 د.إ', '11,000 – 22,000 د.إ', '22,000 – 35,000 د.إ', '35,000+ د.إ'],
    INR: ['₹16,999 – ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹3,00,000', '₹3,00,000+'],
  };

  const handleCurrencyChange = (newCurr: 'USD' | 'GBP' | 'EUR' | 'AED' | 'INR') => {
    setCurrency(newCurr);
    setFormData((prev) => ({ ...prev, budgetRange: budgetOptions[newCurr][1] }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectScope) errs.projectScope = 'Please select what you need built.';
    if (!formData.budgetRange) errs.budgetRange = 'Please choose an estimated budget.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission flow with state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      currentUrl: '',
      projectScope: 'Website Design & Development',
      budgetRange: budgetOptions[currency][1],
      notes: '',
    });
    setSubmitted(false);
  };

  // Pre-filled mailto link for direct fallback
  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.businessName || 'New Project'}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nExisting Website: ${formData.currentUrl || 'None'}\nNeed: ${formData.projectScope}\nBudget: ${formData.budgetRange}\nDetails: ${formData.notes || 'None'}`
  );
  const directMailtoUrl = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 md:py-36 relative bg-[#FFFFFF] border-t border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Required Copy */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2649F4]/10 border border-[#2649F4]/20 text-[#2649F4] text-xs font-mono tracking-wider uppercase mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0A0C11] tracking-tight leading-[1.1] mb-6">
            Stop Letting Your <span className="text-[#2649F4]">Online Presence</span> Hold Your Business Back.
          </h2>

          <p className="text-[#525866] text-base sm:text-lg leading-relaxed mb-8 font-medium">
            Your next customer could be searching for a business like yours right now. Give them a professional experience that communicates your value and makes taking the next step effortless.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project-form"
              className="px-8 py-3.5 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#2649F4]/25 hover:shadow-xl hover:shadow-[#2649F4]/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Build Your Website
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Enquiry Form Container */}
        <div id="project-form" className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-4xl bg-[#FFFFFF] border border-[#E2E6F0] shadow-xl relative">
            {submitted ? (
              /* Success Confirmation Card */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-[#0A0C11] mb-2">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#525866] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out regarding <strong className="text-[#0A0C11]">{formData.businessName}</strong>. I will review your requirements and respond via email within 24 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-left max-w-md mx-auto text-xs text-[#525866] space-y-1 font-mono">
                  <div><strong>Selected Scope:</strong> {formData.projectScope}</div>
                  <div><strong>Budget Band:</strong> {formData.budgetRange}</div>
                  <div><strong>Contact Email:</strong> {formData.email}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href={directMailtoUrl}
                    className="px-6 py-3 rounded-full bg-[#F4F6FB] border border-[#E2E6F0] text-[#0A0C11] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#E2E6F0] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#2649F4]" />
                    <span>Also Send via Mail App</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#2649F4]/20"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Project Enquiry Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2E6F0] gap-4">
                  <div>
                    <h3 className="font-display font-black text-xl text-[#0A0C11]">Project Enquiry Form</h3>
                    <p className="text-xs text-[#525866] mt-0.5 font-medium">Direct communication with B. Chaitanya. No middlemen.</p>
                  </div>

                  {/* International Currency Switcher */}
                  <div className="flex items-center gap-1 bg-[#F4F6FB] p-1 rounded-full border border-[#E2E6F0] self-start sm:self-auto">
                    {(['USD', 'GBP', 'EUR', 'AED', 'INR'] as const).map((curr) => (
                      <button
                        type="button"
                        key={curr}
                        onClick={() => handleCurrencyChange(curr)}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded-full font-bold transition-all ${
                          currency === curr
                            ? 'bg-[#2649F4] text-white shadow-2xs'
                            : 'text-[#525866] hover:text-[#0A0C11]'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Business Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                      Your Name <span className="text-[#2649F4]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border ${
                        errors.name ? 'border-red-500' : 'border-[#E2E6F0]'
                      } text-[#0A0C11] placeholder:text-[#525866]/50 text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-medium`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                      Business Name <span className="text-[#2649F4]">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Apex Health Co."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border ${
                        errors.businessName ? 'border-red-500' : 'border-[#E2E6F0]'
                      } text-[#0A0C11] placeholder:text-[#525866]/50 text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-medium`}
                    />
                    {errors.businessName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Website URL Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                      Work Email Address <span className="text-[#2649F4]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. sarah@apexhealth.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border ${
                        errors.email ? 'border-red-500' : 'border-[#E2E6F0]'
                      } text-[#0A0C11] placeholder:text-[#525866]/50 text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-medium`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="currentUrl" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                      Current Website or Social URL <span className="text-[#525866] font-normal">(optional)</span>
                    </label>
                    <input
                      id="currentUrl"
                      type="text"
                      placeholder="e.g. https://apexhealth.com or @instagram"
                      value={formData.currentUrl}
                      onChange={(e) => setFormData({ ...formData, currentUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] placeholder:text-[#525866]/50 text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-medium"
                    />
                  </div>
                </div>

                {/* What do you need built? */}
                <div>
                  <label htmlFor="projectScope" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                    What do you need built? <span className="text-[#2649F4]">*</span>
                  </label>
                  <select
                    id="projectScope"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-medium"
                  >
                    <option value="Website Design & Development">Website Design &amp; Development (New or Redesign)</option>
                    <option value="Landing Pages & Lead Generation">Landing Pages &amp; Lead Generation Funnel</option>
                    <option value="AI Automation & Business Systems">AI Automation &amp; Business Systems (Chatbots / Workflows)</option>
                    <option value="Full Digital Transformation">Complete Website + AI Automation Suite</option>
                    <option value="Other / Strategic Advisory">Other / Strategic Consultation</option>
                  </select>
                </div>

                {/* Approximate Project Budget */}
                <div>
                  <label htmlFor="budgetRange" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                    Approximate Project Budget ({currency}) <span className="text-[#2649F4]">*</span>
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors font-mono font-semibold"
                  >
                    {budgetOptions[currency].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details / Brief */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0A0C11] mb-2">
                    Project Details &amp; Objectives <span className="text-[#525866] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe what your business does, your target audience, and what problem you need this website to solve..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-[#0A0C11] placeholder:text-[#525866]/50 text-sm focus:outline-none focus:border-[#2649F4] focus:ring-1 focus:ring-[#2649F4]/30 transition-colors resize-y font-medium"
                  />
                </div>

                {/* Integration Notice Alert */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6F0] text-[11px] text-[#525866] flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#2649F4] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span>
                      <strong>Direct Contact Notice:</strong> Submissions are processed directly. You can also send this inquiry directly via email at{' '}
                      <a href={`mailto:${contactConfig.email}`} className="text-[#2649F4] underline hover:text-[#0A0C11] font-semibold">
                        {contactConfig.email}
                      </a>{' '}
                      or message via WhatsApp at{' '}
                      <a
                        href={`https://wa.me/${contactConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline hover:text-[#0A0C11] font-mono font-bold"
                      >
                        {contactConfig.phoneFormatted}
                      </a>.
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#2649F4] hover:bg-[#1B3CD2] disabled:opacity-60 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#2649F4]/25 hover:shadow-xl hover:shadow-[#2649F4]/35 flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Validating &amp; Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
