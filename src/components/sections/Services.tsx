'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Rocket, Target, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const services = [
  {
    icon: Lightbulb,
    title: 'AI Strategy Sprint',
    price: '$15,000 - $30,000',
    duration: '2 weeks',
    description:
      'Rapid assessment and roadmap development to identify high-impact AI opportunities for your business.',
    features: [
      'AI opportunity assessment',
      'Use case prioritization',
      'Strategic roadmap',
      'Executive presentation',
    ],
    link: '/services/strategy',
  },
  {
    icon: Rocket,
    title: 'AI Pilot Implementation',
    price: '$50,000 - $150,000',
    duration: '2-3 months',
    description:
      'Proof of concept development with end-to-end implementation of your first AI use case.',
    features: [
      'PoC development',
      'Data pipeline setup',
      'Model training & testing',
      'Performance dashboard',
      'Team training included',
    ],
    link: '/services/implementation',
    featured: true,
  },
  {
    icon: Target,
    title: 'AI Transformation',
    price: '$200,000+',
    duration: '6-12 months',
    description:
      'Enterprise-wide AI transformation with multiple use cases, governance, and ongoing support.',
    features: [
      'Full strategy implementation',
      'Multiple use cases',
      'MLOps infrastructure',
      'Governance framework',
      'Ongoing optimization',
    ],
    link: '/services/transformation',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Flexible engagement models designed to meet you where you are on
            your AI journey
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                hover
                className={`relative ${
                  service.featured
                    ? 'border-2 border-primary shadow-2xl transform scale-105'
                    : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                      service.featured
                        ? 'bg-gradient-to-br from-primary to-secondary'
                        : 'bg-primary-100'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        service.featured ? 'text-white' : 'text-primary'
                      }`}
                    />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.duration} engagement
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6 flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
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
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={service.link}>
                    <Button
                      variant={service.featured ? 'primary' : 'outline'}
                      className="w-full group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you?
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
