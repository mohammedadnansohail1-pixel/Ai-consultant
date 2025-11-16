'use client';

import React from 'react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '500+',
    label: 'AI Models Deployed',
    description: 'Successfully implemented across industries',
  },
  {
    icon: Users,
    value: '95%',
    label: 'Client Retention',
    description: 'Long-term partnerships built on results',
  },
  {
    icon: Shield,
    value: '$50M+',
    label: 'Value Generated',
    description: 'Measurable ROI for our clients',
  },
  {
    icon: Award,
    value: '40%',
    label: 'Avg Cost Reduction',
    description: 'Proven operational efficiency gains',
  },
];

const certifications = [
  'AWS Partner',
  'Google Cloud Partner',
  'Microsoft Azure Partner',
  'SOC 2 Certified',
  'ISO 27001',
  'GDPR Compliant',
];

export const TrustSection: React.FC = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-primary-200">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="border-t border-white/20 pt-12">
          <h3 className="text-center text-xl font-semibold mb-8">
            Certifications & Partnerships
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <span className="font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
