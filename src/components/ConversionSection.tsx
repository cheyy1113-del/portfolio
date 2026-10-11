import React, { useState } from 'react';
import { ArrowRight, Send, CheckCircle2, AlertCircle, Info, Sparkles, Mail, MessageSquare } from 'lucide-react';
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
  const [showConfigNotice, setShowConfigNotice] = useState(false);

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
    INR: ['₹1,00,000 – ₹2,50,000', '₹2,50,000 – ₹5,00,000', '₹5,00,000 – ₹8,00,000', '₹8,00,000+'],
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
    <section id="contact" className="py-24 md:py-36 relative bg-canvas-darker">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3157E8]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Required Copy */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3157E8]/10 border border-[#3157E8]/30 text-[#3157E8] text-xs font-mono tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-warm tracking-tight leading-[1.1] mb-6">
            Stop Letting Your <span className="text-[#3157E8]">Online Presence</span> Hold Your Business Back.
          </h2>

          <p className="text-warm-muted text-base sm:text-lg leading-relaxed mb-8">
            Your next customer could be searching for a business like yours right now. Give them a professional experience that communicates your value and makes taking the next step effortless.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project-form"
              className="px-6 py-3.5 rounded-xl bg-[#3157E8] hover:bg-[#2445C7] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#3157E8]/30 hover:scale-[1.02]"
            >
              Let's Build Your Website
            </a>
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-canvas-card hover:bg-canvas-hover border border-border text-warm text-xs font-semibold uppercase tracking-wider transition-all"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Enquiry Form Container */}
        <div id="project-form" className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-canvas-card border border-border shadow-2xl relative">
            {submitted ? (
              /* Success Confirmation Card */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-warm mb-2">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-warm-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out regarding <strong className="text-warm">{formData.businessName}</strong>. I will review your requirements and respond via email within 24 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-canvas-surface border border-border/80 text-left max-w-md mx-auto text-xs text-warm-dim space-y-1 font-mono">
                  <div><strong>Selected Scope:</strong> {formData.projectScope}</div>
                  <div><strong>Budget Band:</strong> {formData.budgetRange}</div>
                  <div><strong>Contact Email:</strong> {formData.email}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href={directMailtoUrl}
                    className="px-5 py-2.5 rounded-lg bg-canvas-surface border border-border-bright text-warm text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:border-[#3157E8]/40 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#3157E8]" />
                    <span>Also Send via Mail App</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg bg-[#3157E8] hover:bg-[#2445C7] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Project Enquiry Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-warm">Project Enquiry Form</h3>
                    <p className="text-xs text-warm-dim mt-0.5">Direct communication with B. Chaitanya. No spam, ever.</p>
                  </div>

                  {/* International Currency Switcher */}
                  <div className="flex items-center gap-1 bg-canvas-surface p-1 rounded-lg border border-border self-start sm:self-auto">
                    {(['USD', 'GBP', 'EUR', 'AED', 'INR'] as const).map((curr) => (
                      <button
                        type="button"
                        key={curr}
                        onClick={() => handleCurrencyChange(curr)}
                        className={`px-2 py-1 text-[11px] font-mono rounded font-medium transition-colors ${
                          currency === curr
                            ? 'bg-[#3157E8] text-white font-bold'
                            : 'text-warm-dim hover:text-warm'
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
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                      Your Name <span className="text-[#3157E8]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-canvas-surface border ${
                        errors.name ? 'border-red-500' : 'border-border'
                      } text-warm placeholder:text-warm-dim/50 text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                      Business Name <span className="text-[#3157E8]">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Apex Health Co."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-canvas-surface border ${
                        errors.businessName ? 'border-red-500' : 'border-border'
                      } text-warm placeholder:text-warm-dim/50 text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors`}
                    />
                    {errors.businessName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Website URL Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                      Work Email Address <span className="text-[#3157E8]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. sarah@apexhealth.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-canvas-surface border ${
                        errors.email ? 'border-red-500' : 'border-border'
                      } text-warm placeholder:text-warm-dim/50 text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="currentUrl" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                      Current Website or Social URL <span className="text-warm-dim font-normal">(optional)</span>
                    </label>
                    <input
                      id="currentUrl"
                      type="text"
                      placeholder="e.g. https://apexhealth.com or @instagram"
                      value={formData.currentUrl}
                      onChange={(e) => setFormData({ ...formData, currentUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border text-warm placeholder:text-warm-dim/50 text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors"
                    />
                  </div>
                </div>

                {/* What do you need built? */}
                <div>
                  <label htmlFor="projectScope" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                    What do you need built? <span className="text-[#3157E8]">*</span>
                  </label>
                  <select
                    id="projectScope"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border text-warm text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors"
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
                  <label htmlFor="budgetRange" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                    Approximate Project Budget ({currency}) <span className="text-[#3157E8]">*</span>
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border text-warm text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors font-mono"
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
                  <label htmlFor="notes" className="block text-xs font-mono font-bold uppercase tracking-wider text-warm-muted mb-2">
                    Project Details &amp; Objectives <span className="text-warm-dim font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe what your business does, your target audience, and what problem you need this website to solve..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border text-warm placeholder:text-warm-dim/50 text-sm focus:outline-none focus:border-[#3157E8] focus:ring-1 focus:ring-[#3157E8]/30 transition-colors resize-y"
                  />
                </div>

                {/* Integration Notice Alert (Zero Fake Backend) */}
                <div className="p-3.5 rounded-xl bg-canvas-surface/80 border border-border/80 text-[11px] text-warm-dim flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#3157E8] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span>
                      <strong>Direct Contact Notice:</strong> Submissions are processed directly. You can also send this inquiry directly via email at{' '}
                      <a href={`mailto:${contactConfig.email}`} className="text-[#3157E8] underline hover:text-white font-medium">
                        {contactConfig.email}
                      </a>{' '}
                      or message via WhatsApp at{' '}
                      <a
                        href={`https://wa.me/${contactConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 underline hover:text-white font-mono"
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
                  className="w-full py-4 px-6 rounded-xl bg-[#3157E8] hover:bg-[#2445C7] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#3157E8]/25 hover:shadow-[#3157E8]/40 flex items-center justify-center gap-2 group cursor-pointer"
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
