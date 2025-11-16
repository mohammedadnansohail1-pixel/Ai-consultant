'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const caseStudies = [
  {
    industry: 'Financial Services',
    client: 'Global Investment Bank',
    challenge:
      'Manual fraud detection resulting in high false positives and $10M annual losses',
    solution:
      'Deployed ML-based fraud detection system with real-time monitoring',
    results: [
      { icon: TrendingUp, label: 'Fraud Detection', value: '95% accuracy' },
      { icon: DollarSign, label: 'Cost Savings', value: '$8.5M annually' },
      { icon: Clock, label: 'Processing Time', value: '80% faster' },
    ],
    testimonial:
      'The AI solution transformed our fraud detection capabilities and delivered ROI within 6 months.',
    author: 'Chief Risk Officer',
  },
  {
    industry: 'Healthcare',
    client: 'Regional Hospital Network',
    challenge:
      'Inefficient patient scheduling leading to long wait times and resource underutilization',
    solution:
      'AI-powered patient flow optimization and predictive scheduling system',
    results: [
      { icon: TrendingUp, label: 'Patient Satisfaction', value: '+35%' },
      { icon: Clock, label: 'Wait Time Reduction', value: '45% decrease' },
      { icon: DollarSign, label: 'Revenue Increase', value: '$12M annually' },
    ],
    testimonial:
      'Patient outcomes improved dramatically while our operational efficiency reached new heights.',
    author: 'VP of Operations',
  },
  {
    industry: 'Retail',
    client: 'E-commerce Platform',
    challenge:
      'Poor demand forecasting causing overstock and stockouts, impacting margins',
    solution:
      'Advanced demand forecasting and inventory optimization AI system',
    results: [
      { icon: TrendingUp, label: 'Forecast Accuracy', value: '+42%' },
      { icon: DollarSign, label: 'Margin Improvement', value: '18% increase' },
      { icon: Clock, label: 'Stockout Reduction', value: '65% decrease' },
    ],
    testimonial:
      'Our inventory management is now data-driven and highly profitable. Game-changing results.',
    author: 'Chief Supply Chain Officer',
  },
];

export const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600">
            Real transformations delivering measurable business impact
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} hover className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary text-sm font-semibold rounded-full">
                  {study.industry}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                {study.client}
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Challenge:
                </p>
                <p className="text-gray-700">{study.challenge}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Solution:
                </p>
                <p className="text-gray-700">{study.solution}</p>
              </div>

              <div className="mb-6 space-y-4 flex-grow">
                {study.results.map((result, idx) => {
                  const Icon = result.icon;
                  return (
                    <div key={idx} className="flex items-center">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-3">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          {result.label}
                        </div>
                        <div className="font-bold text-gray-900">
                          {result.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;{study.testimonial}&rdquo;
                </p>
                <p className="text-sm text-gray-500">— {study.author}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/case-studies">
            <Button variant="primary" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
