import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  Clock,
  DollarSign,
  Download,
  Building2,
  Heart,
  ShoppingCart,
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    industry: 'Financial Services',
    icon: Building2,
    client: 'Global Investment Bank',
    size: '10,000+ employees',
    challenge:
      'Manual fraud detection processes resulted in 15% false positive rate and $10M in annual losses from undetected fraudulent transactions. The existing rule-based system could not keep pace with increasingly sophisticated fraud patterns.',
    solution:
      'Deployed an advanced machine learning-based fraud detection system with real-time transaction monitoring, anomaly detection algorithms, and adaptive learning capabilities. Integrated with existing transaction systems and implemented a human-in-the-loop approach for edge cases.',
    timeline: '6 months - Strategy, development, testing, and deployment',
    implementation: [
      'Phase 1: Data infrastructure assessment and preparation (6 weeks)',
      'Phase 2: Model development and training with historical data (8 weeks)',
      'Phase 3: Pilot deployment with 20% of transactions (6 weeks)',
      'Phase 4: Full rollout and optimization (6 weeks)',
    ],
    results: [
      { icon: TrendingUp, label: 'Fraud Detection Accuracy', value: '95%', change: '+42%' },
      {
        icon: DollarSign,
        label: 'Annual Cost Savings',
        value: '$8.5M',
        change: 'From $10M losses',
      },
      {
        icon: Clock,
        label: 'Processing Speed',
        value: '80% faster',
        change: '200ms avg response',
      },
      {
        icon: TrendingUp,
        label: 'False Positive Reduction',
        value: '65%',
        change: 'From 15% to 5.2%',
      },
    ],
    testimonial:
      'The AI fraud detection system has been transformational for our operations. Not only did we reduce losses significantly, but we also improved customer experience by reducing false declines. The ROI was achieved within 6 months.',
    author: 'Chief Risk Officer',
    technologies: ['TensorFlow', 'Python', 'AWS SageMaker', 'Kafka', 'PostgreSQL'],
  },
  {
    id: 2,
    industry: 'Healthcare',
    icon: Heart,
    client: 'Regional Hospital Network',
    size: '15 hospitals, 5,000+ staff',
    challenge:
      'Inefficient patient scheduling and flow management led to average wait times of 3+ hours, 40% bed utilization rate, and declining patient satisfaction scores. Manual scheduling could not optimize across multiple facilities.',
    solution:
      'Implemented an AI-powered patient flow optimization system with predictive scheduling, real-time capacity management, and intelligent resource allocation. The system uses historical data, seasonal patterns, and real-time inputs to optimize patient flow across all facilities.',
    timeline: '4 months - Assessment, pilot, and full deployment',
    implementation: [
      'Phase 1: Current state analysis and data integration (4 weeks)',
      'Phase 2: Predictive model development (6 weeks)',
      'Phase 3: Pilot at 3 facilities (4 weeks)',
      'Phase 4: Network-wide deployment (4 weeks)',
    ],
    results: [
      {
        icon: TrendingUp,
        label: 'Patient Satisfaction',
        value: '+35%',
        change: 'NPS: 42 to 68',
      },
      { icon: Clock, label: 'Wait Time Reduction', value: '45%', change: '3.2hr to 1.7hr' },
      {
        icon: DollarSign,
        label: 'Revenue Increase',
        value: '$12M',
        change: 'Annual',
      },
      {
        icon: TrendingUp,
        label: 'Bed Utilization',
        value: '72%',
        change: 'From 40%',
      },
    ],
    testimonial:
      'Patient outcomes and satisfaction improved dramatically while our operational efficiency reached levels we never thought possible. This AI system has become indispensable to our operations.',
    author: 'VP of Operations',
    technologies: ['Python', 'scikit-learn', 'Azure ML', 'React', 'MongoDB'],
  },
  {
    id: 3,
    industry: 'Retail & E-commerce',
    icon: ShoppingCart,
    client: 'E-commerce Platform',
    size: '$500M annual revenue',
    challenge:
      'Poor demand forecasting accuracy (58%) led to chronic overstocking in slow-moving categories and stockouts in high-demand items. This resulted in 22% markdown rates and lost sales opportunities worth $45M annually.',
    solution:
      'Developed an advanced demand forecasting and inventory optimization AI system that analyzes multiple data sources including historical sales, market trends, competitor pricing, social media sentiment, and external factors like weather and events.',
    timeline: '5 months - Development and rollout',
    implementation: [
      'Phase 1: Data pipeline and integration setup (5 weeks)',
      'Phase 2: Forecasting model development (6 weeks)',
      'Phase 3: Pilot with top 20% SKUs (6 weeks)',
      'Phase 4: Full catalog rollout (4 weeks)',
    ],
    results: [
      {
        icon: TrendingUp,
        label: 'Forecast Accuracy',
        value: '+42%',
        change: '58% to 82%',
      },
      {
        icon: DollarSign,
        label: 'Margin Improvement',
        value: '18%',
        change: '$90M impact',
      },
      {
        icon: Clock,
        label: 'Stockout Reduction',
        value: '65%',
        change: 'Fewer lost sales',
      },
      {
        icon: TrendingUp,
        label: 'Inventory Turnover',
        value: '+28%',
        change: 'Capital efficiency',
      },
    ],
    testimonial:
      'Our inventory management went from gut feeling to data-driven precision. The margin improvement alone paid for the entire AI investment in less than 4 months. Absolutely game-changing.',
    author: 'Chief Supply Chain Officer',
    technologies: ['Python', 'XGBoost', 'Google Cloud AI', 'BigQuery', 'Looker'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-primary-100">
              Real transformations delivering measurable business impact across
              industries
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div key={study.id} className="max-w-5xl mx-auto">
                  <Card className="overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary text-sm font-semibold rounded-full mb-2">
                            {study.industry}
                          </span>
                          <h2 className="font-heading text-3xl font-bold text-gray-900">
                            {study.client}
                          </h2>
                          <p className="text-gray-500">{study.size}</p>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Button>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                        The Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                        Our Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {study.solution}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          Timeline: {study.timeline}
                        </p>
                        <ul className="space-y-2">
                          {study.implementation.map((phase, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {phase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                        Results & Impact
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {study.results.map((result, idx) => {
                          const ResultIcon = result.icon;
                          return (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6"
                            >
                              <ResultIcon className="w-8 h-8 text-primary mb-3" />
                              <div className="text-3xl font-bold text-gray-900 mb-1">
                                {result.value}
                              </div>
                              <div className="text-sm font-semibold text-gray-700 mb-1">
                                {result.label}
                              </div>
                              <div className="text-xs text-gray-500">
                                {result.change}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-gray-200 pt-8 mb-6">
                      <blockquote className="text-lg text-gray-700 italic mb-3">
                        &ldquo;{study.testimonial}&rdquo;
                      </blockquote>
                      <p className="text-gray-600">— {study.author}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-primary-700 text-white">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-100 mb-6">
                Let&apos;s discuss how AI can deliver similar results for your
                organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Get AI Assessment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
