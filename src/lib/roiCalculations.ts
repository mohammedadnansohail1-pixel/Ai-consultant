export interface ROIInputs {
  industry: string;
  employees: number;
  annualRevenue: number;
  currentCosts: number;
  manualProcessTime: number;
  errorRate: number;
  avgHourlyCost: number;
}

export interface ROIResults {
  year1Savings: number;
  year2Savings: number;
  year3Savings: number;
  totalSavings: number;
  efficiencyGain: number;
  paybackPeriod: number;
  roi3Year: number;
  implementationCost: number;
}

export const industryTemplates = {
  finance: {
    name: 'Financial Services',
    typicalSavings: 0.35,
    efficiencyMultiplier: 1.4,
    errorReduction: 0.85,
  },
  healthcare: {
    name: 'Healthcare',
    typicalSavings: 0.30,
    efficiencyMultiplier: 1.3,
    errorReduction: 0.75,
  },
  retail: {
    name: 'Retail & E-commerce',
    typicalSavings: 0.40,
    efficiencyMultiplier: 1.5,
    errorReduction: 0.80,
  },
};

export function calculateROI(inputs: ROIInputs): ROIResults {
  const template = industryTemplates[inputs.industry as keyof typeof industryTemplates];

  // Calculate implementation cost (typically 3-6 months of current costs)
  const implementationCost = inputs.currentCosts * 0.4;

  // Calculate annual savings from process automation
  const processAutomationSavings =
    inputs.manualProcessTime * inputs.avgHourlyCost * 52 * template.typicalSavings;

  // Calculate savings from error reduction
  const errorCostSavings =
    inputs.currentCosts * inputs.errorRate * template.errorReduction;

  // Calculate efficiency gains
  const efficiencyGain = template.efficiencyMultiplier * 100 - 100;

  // Year-over-year projections (compound improvement)
  const year1Savings = processAutomationSavings + errorCostSavings;
  const year2Savings = year1Savings * 1.15; // 15% improvement
  const year3Savings = year2Savings * 1.10; // 10% improvement

  const totalSavings = year1Savings + year2Savings + year3Savings;

  // Calculate payback period (in months)
  const paybackPeriod = (implementationCost / (year1Savings / 12));

  // Calculate 3-year ROI
  const roi3Year = ((totalSavings - implementationCost) / implementationCost) * 100;

  return {
    year1Savings: Math.round(year1Savings),
    year2Savings: Math.round(year2Savings),
    year3Savings: Math.round(year3Savings),
    totalSavings: Math.round(totalSavings),
    efficiencyGain: Math.round(efficiencyGain),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    roi3Year: Math.round(roi3Year),
    implementationCost: Math.round(implementationCost),
  };
}
