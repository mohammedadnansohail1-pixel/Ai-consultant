export interface Question {
  id: string;
  question: string;
  category: string;
  options: {
    label: string;
    value: number;
  }[];
}

export const assessmentQuestions: Question[] = [
  {
    id: 'q1',
    category: 'Data Infrastructure',
    question: 'How would you describe your current data infrastructure?',
    options: [
      { label: 'No centralized data storage or minimal data collection', value: 0 },
      { label: 'Scattered data across multiple systems with limited integration', value: 25 },
      { label: 'Centralized data warehouse with some integration', value: 50 },
      { label: 'Well-integrated data platform with data governance', value: 75 },
      { label: 'Advanced data infrastructure with real-time processing capabilities', value: 100 },
    ],
  },
  {
    id: 'q2',
    category: 'Data Quality',
    question: 'How would you rate the quality and accessibility of your data?',
    options: [
      { label: 'Poor quality, highly fragmented and difficult to access', value: 0 },
      { label: 'Inconsistent quality, requires significant cleaning', value: 25 },
      { label: 'Moderate quality, some standardization exists', value: 50 },
      { label: 'Good quality with established data standards', value: 75 },
      { label: 'Excellent quality with automated validation and cleansing', value: 100 },
    ],
  },
  {
    id: 'q3',
    category: 'AI Use Cases',
    question: 'Have you identified specific AI use cases for your business?',
    options: [
      { label: 'No use cases identified yet', value: 0 },
      { label: 'Vague ideas but no concrete use cases', value: 25 },
      { label: '1-2 potential use cases identified', value: 50 },
      { label: 'Multiple use cases identified with business value estimated', value: 75 },
      { label: 'Prioritized roadmap of use cases with clear ROI projections', value: 100 },
    ],
  },
  {
    id: 'q4',
    category: 'Team Capabilities',
    question: 'What is your team\'s current AI/ML expertise level?',
    options: [
      { label: 'No AI/ML expertise in the organization', value: 0 },
      { label: 'Basic understanding but no practical experience', value: 25 },
      { label: 'Some team members with AI/ML experience', value: 50 },
      { label: 'Dedicated AI/ML team with proven experience', value: 75 },
      { label: 'Advanced AI/ML capabilities with research contributions', value: 100 },
    ],
  },
  {
    id: 'q5',
    category: 'Technology Stack',
    question: 'Do you have the necessary technology infrastructure for AI?',
    options: [
      { label: 'No cloud infrastructure or modern tech stack', value: 0 },
      { label: 'Basic cloud setup but not optimized for AI workloads', value: 25 },
      { label: 'Cloud infrastructure with some ML capabilities', value: 50 },
      { label: 'Robust cloud platform with ML tools and services', value: 75 },
      { label: 'Enterprise-grade ML platform with MLOps capabilities', value: 100 },
    ],
  },
  {
    id: 'q6',
    category: 'Budget Allocation',
    question: 'What is your budget allocation for AI initiatives?',
    options: [
      { label: 'No dedicated budget for AI', value: 0 },
      { label: 'Limited budget under $50K annually', value: 25 },
      { label: 'Moderate budget $50K-$250K annually', value: 50 },
      { label: 'Significant budget $250K-$1M annually', value: 75 },
      { label: 'Substantial investment over $1M annually', value: 100 },
    ],
  },
  {
    id: 'q7',
    category: 'Strategic Alignment',
    question: 'How aligned is AI with your business strategy?',
    options: [
      { label: 'AI not part of our business strategy', value: 0 },
      { label: 'Exploring AI but no formal strategy', value: 25 },
      { label: 'AI mentioned in strategy but limited execution', value: 50 },
      { label: 'AI is a key strategic priority with executive support', value: 75 },
      { label: 'AI transformation is central to our business strategy', value: 100 },
    ],
  },
  {
    id: 'q8',
    category: 'Data Governance',
    question: 'Do you have data governance and security policies in place?',
    options: [
      { label: 'No formal data governance or security policies', value: 0 },
      { label: 'Basic policies but not consistently enforced', value: 25 },
      { label: 'Established policies with moderate enforcement', value: 50 },
      { label: 'Comprehensive governance with strong security measures', value: 75 },
      { label: 'Industry-leading governance with compliance certifications', value: 100 },
    ],
  },
  {
    id: 'q9',
    category: 'Change Management',
    question: 'How ready is your organization for AI-driven change?',
    options: [
      { label: 'Strong resistance to change and new technologies', value: 0 },
      { label: 'Limited change management capabilities', value: 25 },
      { label: 'Moderate ability to adapt to new technologies', value: 50 },
      { label: 'Good track record of successful technology adoption', value: 75 },
      { label: 'Agile organization with strong innovation culture', value: 100 },
    ],
  },
  {
    id: 'q10',
    category: 'Current AI Usage',
    question: 'What is your current level of AI adoption?',
    options: [
      { label: 'No AI tools or solutions in use', value: 0 },
      { label: 'Using basic off-the-shelf AI tools', value: 25 },
      { label: '1-2 AI pilot projects in progress', value: 50 },
      { label: 'Multiple AI solutions in production', value: 75 },
      { label: 'AI embedded across multiple business functions', value: 100 },
    ],
  },
  {
    id: 'q11',
    category: 'Measurement & ROI',
    question: 'How do you measure success and ROI for technology investments?',
    options: [
      { label: 'No formal measurement or ROI tracking', value: 0 },
      { label: 'Basic tracking but inconsistent', value: 25 },
      { label: 'Standard KPIs tracked for major initiatives', value: 50 },
      { label: 'Comprehensive metrics with regular ROI analysis', value: 75 },
      { label: 'Advanced analytics with real-time ROI dashboards', value: 100 },
    ],
  },
  {
    id: 'q12',
    category: 'Industry Competition',
    question: 'How do your competitors compare in AI adoption?',
    options: [
      { label: 'Competitors are far ahead in AI adoption', value: 0 },
      { label: 'Competitors are somewhat ahead', value: 25 },
      { label: 'We are on par with competitors', value: 50 },
      { label: 'We are ahead of most competitors', value: 75 },
      { label: 'We are industry leaders in AI adoption', value: 100 },
    ],
  },
];

export function calculateMaturityLevel(score: number): {
  level: string;
  description: string;
  color: string;
} {
  if (score < 30) {
    return {
      level: 'Beginner',
      description: 'You are in the early stages of your AI journey. Focus on building foundational capabilities.',
      color: 'red',
    };
  } else if (score < 60) {
    return {
      level: 'Intermediate',
      description: 'You have some AI capabilities in place. Focus on scaling and optimizing your initiatives.',
      color: 'yellow',
    };
  } else {
    return {
      level: 'Advanced',
      description: 'You have strong AI capabilities. Focus on innovation and expanding AI across your organization.',
      color: 'green',
    };
  }
}

export function getRecommendations(score: number, answers: Record<string, number>): string[] {
  const recommendations: string[] = [];

  // Data Infrastructure recommendations
  if (answers.q1 < 50) {
    recommendations.push('Invest in modernizing your data infrastructure to support AI workloads');
  }

  // Data Quality recommendations
  if (answers.q2 < 50) {
    recommendations.push('Implement data quality standards and automated data cleansing processes');
  }

  // Use Case recommendations
  if (answers.q3 < 50) {
    recommendations.push('Conduct an AI opportunity assessment to identify high-value use cases');
  }

  // Team Capabilities recommendations
  if (answers.q4 < 50) {
    recommendations.push('Build AI/ML capabilities through hiring, training, or partnering with experts');
  }

  // Technology Stack recommendations
  if (answers.q5 < 50) {
    recommendations.push('Establish a cloud-based ML platform with modern AI/ML tools');
  }

  // Strategic Alignment recommendations
  if (answers.q7 < 50) {
    recommendations.push('Develop a formal AI strategy aligned with business objectives');
  }

  // Data Governance recommendations
  if (answers.q8 < 50) {
    recommendations.push('Create comprehensive data governance and security frameworks');
  }

  // Change Management recommendations
  if (answers.q9 < 50) {
    recommendations.push('Build change management capabilities to support AI adoption');
  }

  // Sort by importance and return top 3
  return recommendations.slice(0, 3);
}
