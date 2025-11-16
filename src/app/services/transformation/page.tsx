import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Target,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Settings,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const deliverables = [
  {
    icon: Target,
    title: 'Comprehensive AI Strategy',
    description:
      'Enterprise-wide AI transformation roadmap aligned with business objectives and competitive positioning.',
  },
  {
    icon: Zap,
    title: 'Multiple AI Solutions',
    description:
      '3-5 production AI systems deployed across different business functions with proven ROI.',
  },
  {
    icon: Settings,
    title: 'MLOps Infrastructure',
    description:
      'Enterprise-grade ML operations platform for model deployment, monitoring, and continuous improvement.',
  },
  {
    icon: Shield,
    title: 'AI Governance Framework',
    description:
      'Policies, procedures, and controls for ethical AI use, data privacy, and regulatory compliance.',
  },
  {
    icon: Users,
    title: 'Center of Excellence',
    description:
      'Internal AI team built and trained to sustain and expand AI capabilities independently.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Optimization',
    description:
      'Continuous monitoring, improvement, and expansion support to maximize long-term value.',
  },
];

const phases = [
  {
    quarter: 'Q1-Q2',
    title: 'Foundation & Quick Wins',
    focus: 'Assessment, strategy, and first pilot deployments',
    activities: [
      'Comprehensive AI readiness assessment',
      'Strategic roadmap development',
      'Data infrastructure modernization',
      'First 2 pilot AI solutions',
      'Team recruitment and training begins',
      'Governance framework design',
    ],
  },
  {
    quarter: 'Q3-Q4',
    title: 'Scale & Optimize',
    focus: 'Additional deployments and MLOps setup',
    activities: [
      'Deploy 2-3 additional AI solutions',
      'MLOps platform implementation',
      'Model monitoring and retraining pipelines',
      'Advanced analytics capabilities',
      'Governance policies implementation',
      'Change management program',
    ],
  },
  {
    quarter: 'Year 2+',
    title: 'Sustain & Expand',
    focus: 'Independence and continuous innovation',
    activities: [
      'Internal team ownership',
      'New use case identification',
      'Advanced AI capabilities (NLP, computer vision)',
      'Integration with business processes',
      'Performance optimization',
      'Industry leadership positioning',
    ],
  },
];

const support = [
  'Dedicated transformation team (8-12 specialists)',
  'Executive advisor and project sponsor',
  'Weekly executive steering committee',
  'Monthly progress reports and KPI tracking',
  '12-month ongoing optimization support',
  'Priority support and maintenance',
  'Quarterly strategic reviews',
  'Access to AI research and best practices',
];

export default function TransformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Enterprise Package
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                AI Transformation
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                A comprehensive 6-12 month program to embed AI across your
                organization and build sustainable competitive advantage
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    Schedule Executive Briefing
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">$200K+</div>
                  <div className="text-purple-100">Starting Investment</div>
                </div>
                <div className="border-t border-white/20 pt-6 space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-purple-100">6-12 months + ongoing</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Team Size</div>
                      <div className="text-purple-100">8-12 specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Solutions</div>
                      <div className="text-purple-100">3-5 AI systems</div>
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
              Transformation Deliverables
            </h2>
            <p className="text-xl text-gray-600">
              Everything needed for enterprise-wide AI adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} hover>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
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

      {/* Transformation Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Transformation Journey
            </h2>
            <p className="text-xl text-gray-600">
              Phased approach to minimize risk and maximize adoption
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="border-2 border-purple-200">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                      {phase.quarter}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 font-semibold">{phase.focus}</p>
                  </div>
                  <div className="lg:w-2/3">
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

      {/* Premium Support */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Premium Support Package
            </h2>
            <p className="text-xl text-gray-600">
              White-glove service throughout your transformation
            </p>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="grid md:grid-cols-2 gap-6">
              {support.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-6xl">
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Expected Business Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">30-40%</div>
                <div className="text-purple-100">Cost Reduction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3-5x</div>
                <div className="text-purple-100">ROI in Year 2</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50%+</div>
                <div className="text-purple-100">Process Efficiency</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-purple-100">AI Team Ready</div>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-white/20">
              <p className="text-xl text-purple-100">
                Typical first-year impact: $5M-$50M+ depending on organization size
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Enterprise Success */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Enterprise Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary text-sm font-semibold rounded-full mb-4">
                  Financial Services
                </span>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  Global Investment Bank
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-gray-600">AI Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$45M</div>
                  <div className="text-sm text-gray-600">Annual Impact</div>
                </div>
              </div>
              <Link href="/case-studies">
                <Button variant="outline" className="w-full group">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            <Card className="border-2 border-red-500">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-4">
                  Healthcare
                </span>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  Hospital Network
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-red-600">4</div>
                  <div className="text-sm text-gray-600">AI Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">$32M</div>
                  <div className="text-sm text-gray-600">Annual Impact</div>
                </div>
              </div>
              <Link href="/case-studies">
                <Button variant="outline" className="w-full group">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Lead Your Industry with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule an executive briefing to explore how we can transform your
            organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 group">
                Schedule Executive Briefing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Calculate Enterprise ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
