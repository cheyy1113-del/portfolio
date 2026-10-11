export type ProjectType = 'Client Project' | 'Concept / Demo';

export interface Project {
  id: string;
  number: string;
  title: string;
  clientOrOrg?: string;
  category: string;
  projectType: ProjectType;
  isClientWork: boolean;
  liveUrl: string;
  headline: string;
  shortDescription: string;
  businessSolution: string;
  conversionFocus: string[];
  techStack: string[];
  primaryImage: string;
  secondaryImage?: string;
  accentColor: string;
  metricsOrHighlights: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  businessImpact: string;
  icon: string;
  defaultFormValue: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  description: string;
  activities: string[];
  output: string;
}

export interface BusinessRisk {
  number: string;
  title: string;
  riskDescription: string;
  businessImpact: string;
  solutionHighlight: string;
}
