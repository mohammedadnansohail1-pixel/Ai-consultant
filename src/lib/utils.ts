import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function calculateROI(
  investment: number,
  returns: number,
  years: number
): {
  totalROI: number;
  annualROI: number;
  paybackPeriod: number;
} {
  const totalROI = ((returns - investment) / investment) * 100;
  const annualROI = totalROI / years;
  const paybackPeriod = investment / (returns / years);

  return {
    totalROI,
    annualROI,
    paybackPeriod,
  };
}
