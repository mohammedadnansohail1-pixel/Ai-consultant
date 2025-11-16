'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { calculateROI, industryTemplates } from '@/lib/roiCalculations';
import { formatCurrency } from '@/lib/utils';
import { Download, TrendingUp, Clock, DollarSign, Percent } from 'lucide-react';

const roiSchema = z.object({
  industry: z.enum(['finance', 'healthcare', 'retail']),
  employees: z.number().min(1, 'Must have at least 1 employee'),
  annualRevenue: z.number().min(1000, 'Revenue must be at least $1,000'),
  currentCosts: z.number().min(0, 'Costs cannot be negative'),
  manualProcessTime: z.number().min(0, 'Time cannot be negative'),
  errorRate: z.number().min(0).max(1, 'Error rate must be between 0 and 1'),
  avgHourlyCost: z.number().min(0, 'Hourly cost cannot be negative'),
});

type ROIFormData = z.infer<typeof roiSchema>;

const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function ROICalculatorPage() {
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateROI> | null>(null);
  const [formData, setFormData] = useState<ROIFormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ROIFormData>({
    resolver: zodResolver(roiSchema),
    defaultValues: {
      industry: 'finance',
      employees: 500,
      annualRevenue: 50000000,
      currentCosts: 5000000,
      manualProcessTime: 40,
      errorRate: 0.05,
      avgHourlyCost: 75,
    },
  });

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const selectedIndustry = watch('industry');

  const onSubmit = (data: ROIFormData) => {
    const calculatedResults = calculateROI(data);
    setResults(calculatedResults);
    setFormData(data);
    setShowResults(true);
  };

  const onEmailSubmit = (data: EmailFormData) => {
    console.log('Email captured:', data);
    setShowEmailCapture(false);
    alert('Results have been sent to your email!');
  };

  const downloadResults = () => {
    setShowEmailCapture(true);
  };

  if (showEmailCapture && results) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container-custom max-w-2xl">
            <Card>
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                  Get Your Detailed ROI Report
                </h2>
                <p className="text-gray-600">
                  Enter your information to receive a comprehensive PDF report with
                  your ROI analysis
                </p>
              </div>

              <form onSubmit={handleEmailSubmit(onEmailSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...registerEmail('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {emailErrors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {emailErrors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...registerEmail('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@company.com"
                  />
                  {emailErrors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {emailErrors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...registerEmail('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Acme Corporation"
                  />
                  {emailErrors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {emailErrors.company.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowEmailCapture(false)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" variant="primary" className="flex-1">
                    Download Report
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI ROI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate the potential return on investment for your AI initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Your Information
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {Object.entries(industryTemplates).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    {...register('employees', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="500"
                  />
                  {errors.employees && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.employees.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    {...register('annualRevenue', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="50000000"
                  />
                  {errors.annualRevenue && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.annualRevenue.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Annual Operational Costs ($)
                  </label>
                  <input
                    type="number"
                    {...register('currentCosts', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="5000000"
                  />
                  {errors.currentCosts && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.currentCosts.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hours/Week on Manual Processes
                  </label>
                  <input
                    type="number"
                    {...register('manualProcessTime', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="40"
                  />
                  {errors.manualProcessTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.manualProcessTime.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Error Rate (0-1, e.g., 0.05 = 5%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('errorRate', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0.05"
                  />
                  {errors.errorRate && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.errorRate.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average Hourly Cost ($)
                  </label>
                  <input
                    type="number"
                    {...register('avgHourlyCost', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="75"
                  />
                  {errors.avgHourlyCost && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.avgHourlyCost.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Calculate ROI
                </Button>
              </form>
            </Card>

            {/* Results */}
            {showResults && results && formData && (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-primary to-primary-700 text-white">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="text-sm">3-Year ROI</span>
                    </div>
                    <div className="text-4xl font-bold">{results.roi3Year}%</div>
                  </Card>

                  <Card className="bg-gradient-to-br from-accent to-accent-700 text-white">
                    <div className="flex items-center mb-2">
                      <Clock className="w-6 h-6 mr-2" />
                      <span className="text-sm">Payback Period</span>
                    </div>
                    <div className="text-4xl font-bold">
                      {results.paybackPeriod}
                      <span className="text-lg ml-1">mo</span>
                    </div>
                  </Card>

                  <Card className="bg-gradient-to-br from-secondary to-secondary-700 text-white">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      <span className="text-sm">Total Savings</span>
                    </div>
                    <div className="text-3xl font-bold">
                      {formatCurrency(results.totalSavings)}
                    </div>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
                    <div className="flex items-center mb-2">
                      <Percent className="w-6 h-6 mr-2" />
                      <span className="text-sm">Efficiency Gain</span>
                    </div>
                    <div className="text-4xl font-bold">{results.efficiencyGain}%</div>
                  </Card>
                </div>

                {/* Annual Savings Chart */}
                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Projected Annual Savings
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={[
                        { year: 'Year 1', savings: results.year1Savings },
                        { year: 'Year 2', savings: results.year2Savings },
                        { year: 'Year 3', savings: results.year3Savings },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                      />
                      <Legend />
                      <Bar dataKey="savings" fill="#10B981" name="Annual Savings" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                {/* Cumulative ROI Chart */}
                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Cumulative ROI Over 3 Years
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={[
                        { year: 'Start', value: -results.implementationCost },
                        {
                          year: 'Year 1',
                          value: results.year1Savings - results.implementationCost,
                        },
                        {
                          year: 'Year 2',
                          value:
                            results.year1Savings +
                            results.year2Savings -
                            results.implementationCost,
                        },
                        {
                          year: 'Year 3',
                          value: results.totalSavings - results.implementationCost,
                        },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#1E3A8A"
                        strokeWidth={3}
                        name="Cumulative ROI"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={downloadResults}
                    className="w-full"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Detailed Report
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            )}

            {!showResults && (
              <div className="flex items-center justify-center">
                <Card className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    See Your Potential ROI
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form to calculate your potential savings and ROI from
                    AI implementation
                  </p>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
