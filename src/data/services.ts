import { ServiceItem } from '../types/portfolio';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Website Design & Development',
    tagline: 'Custom Digital Real Estate Built for Distinction and Business Growth',
    description:
      'Custom, responsive websites built from the ground up with modern UI/UX, clear messaging, mobile-friendly layouts, and strategic calls to action. Every build is tailored to establish authority in your industry and guide qualified visitors directly into project enquiries.',
    deliverables: [
      'Tailored bespoke UI/UX design (No cookie-cutter templates)',
      '100% fluid mobile, tablet, laptop & desktop responsiveness',
      'Ultra-fast load times with optimized code and asset compression',
      'Strategic conversion hierarchy with high-contrast CTAs',
      'Clean SEO structure, semantic markup, and metadata optimization',
      'Seamless deployment and client handover with complete ownership'
    ],
    businessImpact: 'Transforms an outdated or amateur web presence into a high-credibility digital storefront that inspires confidence across international buyers.',
    icon: 'Layout',
    defaultFormValue: 'Website Design & Development',
  },
  {
    id: 'landing-pages-leads',
    number: '02',
    title: 'Landing Pages & Lead Generation',
    tagline: 'Laser-Focused Funnels Designed to Turn Cold Clicks into Qualified Conversations',
    description:
      'Focused landing pages designed to communicate an offer clearly and make it easy for potential customers to enquire. Engineered for advertising campaigns, product launches, or flagship service promotions with zero distracting clutter.',
    deliverables: [
      'Single-objective conversion layout engineered to minimize bounce rates',
      'Persuasive value-first hierarchy addressing customer objections upfront',
      'High-converting lead capture forms with smart validation and rapid response',
      'Speed-optimized code delivering sub-second load times',
      'A/B testing-ready architecture and conversion event tracking hooks',
      'Direct WhatsApp, calendar scheduling, or CRM pipeline integration'
    ],
    businessImpact: 'Maximizes the return on your marketing spend by ensuring incoming traffic lands on a clear, compelling, frictionless action path.',
    icon: 'Target',
    defaultFormValue: 'Landing Pages & Lead Generation',
  },
  {
    id: 'ai-automation-systems',
    number: '03',
    title: 'AI Automation & Business Systems',
    tagline: 'Intelligent Automations That Work 24/7 So You Never Miss a High-Value Lead',
    description:
      'AI-powered chatbots, voice agents, and workflow automation that can help businesses respond to leads faster and reduce repetitive manual work. Connect your website directly to intelligent automation pipelines that capture, qualify, and route enquiries instantly.',
    deliverables: [
      '24/7 AI conversational assistants trained on your business offerings',
      'Intelligent lead qualification and appointment calendar scheduling',
      'Automated email notifications, CRM updates, and WhatsApp messaging triggers',
      'Voice agent systems for automated customer triage and routing',
      'Custom workflow automations via Make, Zapier, or direct webhook integrations',
      'Secure, privacy-conscious data handling and zero latency'
    ],
    businessImpact: 'Eliminates response lag times—converting international inquiries during your off-hours while freeing your core team from manual admin tasks.',
    icon: 'Bot',
    defaultFormValue: 'AI Automation & Business Systems',
  },
];
