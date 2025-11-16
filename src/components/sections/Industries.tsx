'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Heart,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';
import { Card } from '../ui/Card';

const industries = [
  {
    icon: Building2,
    name: 'Financial Services',
    description:
      'AI-powered fraud detection, risk assessment, and customer service automation',
    solutions: [
      'Fraud Detection AI',
      'Risk Assessment Automation',
      'Customer Service Chatbots',
      'Credit Scoring Optimization',
      'Regulatory Compliance AI',
    ],
    link: '/industries/finance',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description:
      'Clinical decision support, operational efficiency, and patient care optimization',
    solutions: [
      'Diagnostic Assistance AI',
      'Patient Flow Optimization',
      'Drug Discovery Acceleration',
      'Clinical Trial Matching',
      'Administrative Automation',
    ],
    link: '/industries/healthcare',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    name: 'Retail',
    description:
      'Demand forecasting, personalization, and supply chain optimization',
    solutions: [
      'Demand Forecasting',
      'Personalization Engines',
      'Inventory Optimization',
      'Dynamic Price Optimization',
      'Customer Sentiment Analysis',
    ],
    link: '/industries/retail',
    color: 'from-purple-500 to-indigo-500',
  },
];

export const Industries: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Tailored AI solutions for your industry&apos;s unique challenges
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} hover>
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>

                <p className="text-gray-600 mb-6">{industry.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    Key Solutions:
                  </p>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={industry.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
