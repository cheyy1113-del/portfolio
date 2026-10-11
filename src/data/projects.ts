import { Project } from '../types/portfolio';

export const featuredProjects: Project[] = [
  {
    id: 'onyx-hyderabad',
    number: '01',
    title: 'Onyx Hyderabad',
    clientOrOrg: 'ONYX The Professional Fitness Studio',
    category: 'Fitness & Wellness',
    projectType: 'Client Project',
    isClientWork: true,
    liveUrl: 'https://onyxhyderabad.com/',
    headline: 'Immersive Dark-Themed Web Experience for a Luxury Fitness & Pilates Studio',
    shortDescription:
      'A bespoke digital presence engineered for ONYX in S.R. Nagar, Hyderabad. The website elevates the studio from a standard local gym into an elite wellness destination, cleanly organizing offerings across Gym Membership, Reformer Pilates, and Personal Training.',
    businessSolution:
      'Eliminated visitor friction by structuring clear, high-intent call-to-actions, prominent facility showcases, and integrated Google Maps location and WhatsApp consultation channels.',
    conversionFocus: [
      'Interactive Pilates & Gym Program Explorer',
      'Frictionless consultation & membership inquiry flow',
      'High-contrast dark editorial aesthetic establishing brand authority',
      'Optimized mobile navigation for quick local member action'
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Responsive Architecture', 'SEO Schema'],
    primaryImage: '/images/projects/onyx_hero.jpg',
    secondaryImage: '/images/projects/onyx_pilates.jpg',
    accentColor: '#FF334B',
    metricsOrHighlights: [
      { label: 'Project Scope', value: 'Complete Web Design & Build' },
      { label: 'Core Programs', value: 'Reformer Pilates & Personal Training' },
      { label: 'Target Audience', value: 'Urban Professionals & Fitness Enthusiasts' },
      { label: 'Inquiry Channels', value: 'Direct Call, WhatsApp & Schedule Form' },
    ],
  },
  {
    id: 'dental-clinic-demo',
    number: '02',
    title: 'Dr. Sridhar Dental Care',
    clientOrOrg: 'Healthcare Clinic Concept',
    category: 'Healthcare Website Concept',
    projectType: 'Concept / Demo',
    isClientWork: false,
    liveUrl: 'https://dental-clinic-demo-henna.vercel.app/',
    headline: 'High-Trust Clinical Experience with Painless Treatment Messaging',
    shortDescription:
      'A polished healthcare concept designed to dispel patient anxiety and maximize appointment scheduling for a dental surgery practice in Kukatpally, Hyderabad. Built with reassuring medical typography and clean clinical architecture.',
    businessSolution:
      'Structured 6 pillars of trust, credentialed surgeon profiles, sterilization protocols, and a multi-step appointment scheduler that allows patients to select treatment requirements with complete clarity.',
    conversionFocus: [
      'Painless treatment & sterilization confidence badges',
      'One-click emergency helpline & WhatsApp triage',
      'Specialist doctor profiles highlighting qualifications',
      'Intuitive service breakdown for cosmetic and surgical dentistry'
    ],
    techStack: ['Semantic HTML5', 'Custom Modern CSS', 'Modular JavaScript', 'Local SEO Schema'],
    primaryImage: '/images/projects/dental_hero.png',
    secondaryImage: '/images/projects/dental_clinic.png',
    accentColor: '#0284C7',
    metricsOrHighlights: [
      { label: 'Project Format', value: 'Interactive Concept Prototype' },
      { label: 'Primary Action', value: 'Online Appointment Booking' },
      { label: 'Key Emotion', value: 'Trust, Hygiene & Painless Care' },
      { label: 'Mobile Optimized', value: 'Click-to-Call Emergency Bar' },
    ],
  },
  {
    id: 'hayath-fitness',
    number: '03',
    title: 'Hayath Fitness',
    clientOrOrg: 'Hayath Fitness Luxury Club',
    category: 'Fitness & Personal Training',
    projectType: 'Client Project',
    isClientWork: true,
    liveUrl: 'https://hayath-fitness.vercel.app/',
    headline: 'High-Performance Visual Identity for an Elite Training Facility',
    shortDescription:
      'A dynamic, conversion-engineered website for a luxury fitness club. Developed to communicate uncompromised physical standards, featuring certified head coaches, state-of-the-art machinery, steam bath recovery facilities, and interactive transformation showcases.',
    businessSolution:
      'Combines high-energy athletic aesthetics with transparent pricing protocols and interactive before/after transformation comparison tools that turn passive gym lookers into committed trial visits.',
    conversionFocus: [
      'Interactive 90-day Before / After transformation slider',
      'Transparent tiered membership & personal training pricing matrix',
      'Coach credential verification (CSCS, ACSM, ACE certified)',
      'Free consultation booking button pinned across key scroll depths'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'Vercel Edge'],
    primaryImage: '/images/projects/hayath_hero.jpg',
    secondaryImage: '/images/projects/hayath_transform.jpg',
    accentColor: '#EF4444',
    metricsOrHighlights: [
      { label: 'Visual Style', value: 'Industrial Luxury & Athletic Red' },
      { label: 'Key Feature', value: 'Interactive Before/After Slider' },
      { label: 'Pricing Model', value: 'Transparent Multi-Tier Memberships' },
      { label: 'Conversion Goal', value: 'Free Consultation & Gym Walkthrough' },
    ],
  },
  {
    id: 'ai-automation-website',
    number: '04',
    title: 'NexusAI Automation',
    clientOrOrg: 'AI Automation Agency Concept',
    category: 'AI & Automation',
    projectType: 'Concept / Demo',
    isClientWork: false,
    liveUrl: 'https://v0-ai-automation-website-rouge-six.vercel.app/',
    headline: 'Next-Generation Agency Website for Autonomous Business Systems',
    shortDescription:
      'A contemporary technology website showcasing how modern businesses deploy 24/7 AI chatbots, voice receptionists, and automated workflow pipelines to eliminate repetitive operational bottlenecks and capture leads around the clock.',
    businessSolution:
      'Translates complex artificial intelligence infrastructure into straightforward commercial outcomes—highlighting reduced operating overhead, zero lead-response latency, and continuous revenue generation.',
    conversionFocus: [
      'Interactive service breakdown for AI Chatbots, Voice & Workflows',
      'Business ROI framework highlighting 24/7 availability & cost reduction',
      'Tech-forward particle aesthetic and minimalist dark styling',
      'Instant consultation scheduling CTA paired with direct email inquiry'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Modern Shaders', 'Vercel'],
    primaryImage: '/images/projects/nexus_hero.svg',
    secondaryImage: '/images/projects/noble_service.jpg',
    accentColor: '#8B5CF6',
    metricsOrHighlights: [
      { label: 'Technology Focus', value: 'AI Agents & Workflow Automations' },
      { label: 'Commercial Value', value: '24/7 Response & Lower Overhead' },
      { label: 'Audience', value: 'SMEs & Digital Business Operators' },
      { label: 'Call-to-Action', value: 'Strategy Consultation Booking' },
    ],
  },
  {
    id: 'noble-plan',
    number: '05',
    title: 'Personal Financial Gurus',
    clientOrOrg: 'Noble Plan Wealth Advisory',
    category: 'Business Website',
    projectType: 'Client Project',
    isClientWork: true,
    liveUrl: 'https://noble-plan.vercel.app/',
    headline: 'Sophisticated Digital Presence for Comprehensive Wealth & Advisory Services',
    shortDescription:
      'A prestigious wealth advisory website crafted for Personal Financial Gurus. Designed to communicate fiduciary excellence to families and business owners seeking personalized retirement planning, tax reduction strategies, and multi-generational wealth preservation.',
    businessSolution:
      'Distinguishes the firm from generic brokers through an authoritative navy and gold aesthetic, a comparative "Traditional Advisors vs. PFG" matrix, and an intuitive 6-stage roadmap from initial consultation to continuous review.',
    conversionFocus: [
      '9 specialized practice area cards with comprehensive service details',
      'Comparative clarity table highlighting fiduciary advantages',
      '6-step financial assessment roadmap demystifying the client journey',
      'Prominent "Book Complimentary Session" CTA driving warm advisor bookings'
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Sora & Inter Typography', 'Vercel'],
    primaryImage: '/images/projects/noble_hero.jpg',
    secondaryImage: '/images/projects/noble_service.jpg',
    accentColor: '#D97706',
    metricsOrHighlights: [
      { label: 'Industry', value: 'Private Wealth & Retirement Advisory' },
      { label: 'Visual Palette', value: 'Deep Navy Blue & Warm Gold Accents' },
      { label: 'Practice Areas', value: '9 Comprehensive Advisory Disciplines' },
      { label: 'Conversion Objective', value: 'Complimentary Advisory Consultation' },
    ],
  },
];
