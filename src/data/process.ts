import { ProcessStep } from '../types/portfolio';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discover',
    description: 'Understand the business, audience, goals, and requirements.',
    activities: [
      'Deep dive into your business model, target audience, and primary competitors',
      'Clarify exact commercial objectives (leads, consultation bookings, brand prestige)',
      'Map out required pages, core user flows, and technical integration touchpoints',
      'Agree on timeline, scope boundaries, and measurable deliverables'
    ],
    output: 'Clear Project Scope, Information Architecture & Strategy Blueprint',
  },
  {
    number: '02',
    phase: 'Design',
    description: 'Create a tailored visual direction and user experience.',
    activities: [
      'Formulate a distinctive visual language aligned with international quality standards',
      'Structure high-converting wireframes prioritizing hierarchy and readability',
      'Refine typography, color harmonies, device previews, and interactive elements',
      'Review and iterate together until the design resonates with your brand authority'
    ],
    output: 'High-Fidelity Interactive Layouts & Responsive Visual Prototypes',
  },
  {
    number: '03',
    phase: 'Develop',
    description: 'Build a responsive website and test it across devices.',
    activities: [
      'Translate approved designs into clean, maintainable, modern frontend code',
      'Ensure flawless fluid responsiveness across smartphones, tablets, and wide monitors',
      'Implement fast load times, accessible semantic HTML, and subtle micro-interactions',
      'Connect enquiry forms, analytics hooks, and any required AI/automation webhooks'
    ],
    output: 'Production-Ready Codebase Tested Across Multiple Browsers & Devices',
  },
  {
    number: '04',
    phase: 'Launch',
    description: 'Publish the website, verify key interactions, and provide the agreed handover and support.',
    activities: [
      'Deploy to high-speed global edge infrastructure (Vercel, Netlify, or your preferred hosting)',
      'Conduct rigorous final tests on form routing, SSL, speed metrics, and link integrity',
      'Set up domain DNS records, search engine indexing tags, and social share cards',
      'Deliver agreed handover documentation and post-launch verification support'
    ],
    output: 'Live Public Website Operating Reliably with Full Ownership Transferred',
  },
];
