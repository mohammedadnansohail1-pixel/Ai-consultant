import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Shield,
  TrendingUp,
  MessageSquare,
  FileCheck,
  CreditCard,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Fraud Detection AI',
    description:
      'Real-time fraud detection using advanced machine learning models to identify suspicious patterns and prevent fraudulent transactions.',
    benefits: [
      'Reduce fraud losses by up to 85%',
      'Improve detection accuracy to 95%+',
      'Decrease false positives by 60%',
      'Real-time transaction monitoring',
    ],
    useCases: [
      'Credit card fraud detection',
      'Account takeover prevention',
      'Money laundering detection',
      'Identity verification',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Risk Assessment Automation',
    description:
      'Automate credit risk evaluation, portfolio risk analysis, and regulatory compliance with AI-powered assessment tools.',
    benefits: [
      'Reduce assessment time by 70%',
      'Improve risk prediction accuracy',
      'Enable real-time portfolio monitoring',
      'Ensure regulatory compliance',
    ],
    useCases: [
      'Credit scoring and underwriting',
      'Portfolio risk management',
      'Market risk analysis',
      'Operational risk assessment',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Customer Service Chatbots',
    description:
      'Intelligent virtual assistants that handle customer inquiries, provide personalized recommendations, and improve satisfaction.',
    benefits: [
      'Handle 60% of customer queries automatically',
      'Reduce response time by 80%',
      'Improve customer satisfaction scores',
      '24/7 availability',
    ],
    useCases: [
      'Account inquiries and balance checks',
      'Transaction history and disputes',
      'Product recommendations',
      'Loan application support',
    ],
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance AI',
    description:
      'Automated compliance monitoring, reporting, and risk management to ensure adherence to financial regulations.',
    benefits: [
      'Reduce compliance costs by 40%',
      'Automated regulatory reporting',
      'Real-time compliance monitoring',
      'Minimize regulatory fines',
    ],
    useCases: [
      'KYC/AML compliance',
      'Transaction monitoring',
      'Regulatory reporting automation',
      'Policy compliance checking',
    ],
  },
  {
    icon: CreditCard,
    title: 'Credit Scoring Optimization',
    description:
      'Advanced AI models that improve credit decision accuracy while expanding financial inclusion.',
    benefits: [
      'Improve approval rates by 25%',
      'Reduce default rates by 30%',
      'Faster lending decisions',
      'Alternative data integration',
    ],
    useCases: [
      'Consumer credit scoring',
      'Small business lending',
      'Alternative credit assessment',
      'Credit limit optimization',
    ],
  },
];

const stats = [
  { value: '35%', label: 'Average Cost Reduction' },
  { value: '85%', label: 'Fraud Detection Improvement' },
  { value: '60%', label: 'Faster Processing Time' },
  { value: '$8.5M', label: 'Avg Annual Savings' },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              Financial Services Solutions
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              AI Solutions for Financial Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Transform your financial operations with AI-powered fraud detection,
              risk assessment, and customer service automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Get AI Assessment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Challenges Facing Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              Common pain points we help financial institutions solve
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Increasing fraud sophistication and financial losses',
              'Manual processes slowing down operations',
              'Complex regulatory compliance requirements',
              'High customer service costs and wait times',
              'Inaccurate credit risk assessment',
              'Legacy systems limiting innovation',
            ].map((challenge, index) => (
              <Card key={index} className="flex items-start">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <p className="text-gray-700">{challenge}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI capabilities designed for financial services
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} hover className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">
                          {solution.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-6">{solution.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Common Use Cases:
                      </h4>
                      <div className="space-y-3">
                        {solution.useCases.map((useCase, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 bg-white rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            <span className="text-gray-700">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-700 text-white p-8 mb-8">
              <h2 className="font-heading text-3xl font-bold mb-2">
                Success Story: Global Investment Bank
              </h2>
              <p className="text-primary-100">
                How we reduced fraud losses by $8.5M annually
              </p>
            </div>

            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-gray-600">Fraud Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">$8.5M</div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">80%</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
              </div>

              <Link href="/case-studies">
                <Button variant="primary" className="group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let&apos;s discuss how AI can help you reduce costs, improve compliance,
            and enhance customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Free AI Assessment
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
