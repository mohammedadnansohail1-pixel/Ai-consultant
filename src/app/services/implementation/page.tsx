import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Rocket,
  CheckCircle,
  Clock,
  Users,
  Database,
  LineChart,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const deliverables = [
  {
    icon: Rocket,
    title: 'Production-Ready AI Solution',
    description:
      'Fully functional proof of concept deployed to your environment and ready for real-world use.',
  },
  {
    icon: Database,
    title: 'Data Pipeline Infrastructure',
    description:
      'Automated data collection, cleaning, and preparation pipelines integrated with your systems.',
  },
  {
    icon: LineChart,
    title: 'Trained & Tested ML Models',
    description:
      'Production-grade machine learning models trained on your data with proven accuracy metrics.',
  },
  {
    icon: LineChart,
    title: 'Performance Metrics Dashboard',
    description:
      'Real-time monitoring dashboard showing model performance, KPIs, and business impact.',
  },
  {
    icon: GraduationCap,
    title: 'Team Training & Documentation',
    description:
      'Comprehensive training for your team with technical documentation and operational guides.',
  },
  {
    icon: CheckCircle,
    title: 'Validation & Testing Report',
    description:
      'Detailed testing results, accuracy metrics, and recommendations for optimization.',
  },
];

const timeline = [
  {
    month: 'Month 1',
    title: 'Foundation & Data Preparation',
    activities: [
      'Detailed requirements gathering',
      'Data infrastructure assessment',
      'Data collection and integration',
      'Initial data quality analysis',
      'Architecture design and approval',
    ],
  },
  {
    month: 'Month 2',
    title: 'Development & Training',
    activities: [
      'Model development and experimentation',
      'Feature engineering',
      'Model training and validation',
      'Integration with existing systems',
      'Dashboard development',
    ],
  },
  {
    month: 'Month 3',
    title: 'Testing & Deployment',
    activities: [
      'Comprehensive testing and validation',
      'Performance optimization',
      'Production deployment',
      'Team training sessions',
      'Documentation and handoff',
    ],
  },
];

const includedSupport = [
  'Dedicated project manager',
  'Weekly progress updates',
  '30-day post-deployment support',
  'Bug fixes and minor adjustments',
  'Performance monitoring',
  'Technical support tickets',
];

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary-700 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Most Popular Package
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                AI Pilot Implementation
              </h1>
              <p className="text-xl text-secondary-100 mb-8">
                A comprehensive 2-3 month engagement to develop and deploy your first
                AI proof of concept with measurable business impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-secondary hover:bg-gray-100"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Get Free Assessment
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">$50K - $150K</div>
                  <div className="text-secondary-100">Investment Range</div>
                </div>
                <div className="border-t border-white/20 pt-6 space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-secondary-100">2-3 months</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Team Size</div>
                      <div className="text-secondary-100">4-6 specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Includes</div>
                      <div className="text-secondary-100">30-day support</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end AI solution ready for production use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} hover>
                  <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              3-Month Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach from concept to production
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card key={index}>
                <div className="flex items-start">
                  <div className="w-28 h-28 bg-gradient-to-br from-secondary to-secondary-700 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">{phase.month}</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Support */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Included Support
            </h2>
            <p className="text-xl text-gray-600">
              We ensure smooth deployment and successful adoption
            </p>
          </div>

          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-6">
              {includedSupport.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <Card className="bg-gradient-to-br from-secondary to-secondary-700 text-white p-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Typical Results After 3 Months
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">1</div>
                <div className="text-secondary-100">
                  Production AI Solution
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">25%+</div>
                <div className="text-secondary-100">
                  Efficiency Improvement
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">6-12mo</div>
                <div className="text-secondary-100">
                  Typical ROI Timeline
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-secondary-100">
                  Team Trained
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <Card className="border-2 border-secondary">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  Success Story
                </h3>
                <p className="text-gray-600">
                  Global Investment Bank - Fraud Detection Implementation
                </p>
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              &ldquo;In just 3 months, we went from concept to a production fraud
              detection system that processes millions of transactions daily. The
              team&apos;s expertise and structured approach made the difference.&rdquo;
            </blockquote>
            <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">95%</div>
                <div className="text-sm text-gray-600">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">$8.5M</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">80%</div>
                <div className="text-sm text-gray-600">Faster Processing</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Build Your First AI Solution?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Let&apos;s discuss your use case and create a tailored implementation
            plan that delivers results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-white text-secondary hover:bg-gray-100 group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
