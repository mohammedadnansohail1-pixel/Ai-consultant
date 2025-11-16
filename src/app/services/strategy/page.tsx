import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Lightbulb,
  CheckCircle,
  Clock,
  Users,
  FileText,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const deliverables = [
  {
    icon: FileText,
    title: 'AI Opportunity Assessment Report',
    description:
      'Comprehensive analysis of your current state, data readiness, and AI potential across all business functions.',
  },
  {
    icon: TrendingUp,
    title: 'Prioritized Use Case Roadmap',
    description:
      'Ranked list of AI opportunities with estimated ROI, implementation complexity, and business impact.',
  },
  {
    icon: Users,
    title: 'Capability Gap Analysis',
    description:
      'Assessment of team skills, technology infrastructure, and organizational readiness for AI adoption.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Implementation Plan',
    description:
      '12-month roadmap with phased approach, resource requirements, and success metrics.',
  },
  {
    icon: FileText,
    title: 'Executive Presentation',
    description:
      'Board-ready presentation with findings, recommendations, and business case for AI investment.',
  },
];

const timeline = [
  {
    week: 'Week 1',
    title: 'Discovery & Assessment',
    activities: [
      'Stakeholder interviews with leadership team',
      'Current state analysis of data and systems',
      'Business process mapping',
      'Competitive landscape review',
    ],
  },
  {
    week: 'Week 2',
    title: 'Analysis & Planning',
    activities: [
      'AI use case identification workshop',
      'ROI estimation and prioritization',
      'Capability gap assessment',
      'Roadmap development',
      'Executive presentation preparation',
    ],
  },
];

const idealFor = [
  'Organizations exploring AI for the first time',
  'Companies with unclear AI strategy or direction',
  'Leadership seeking to understand AI potential and ROI',
  'Businesses ready to commit to AI but unsure where to start',
  'Teams needing executive buy-in for AI initiatives',
];

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Starter Package
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                AI Strategy Sprint
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                A focused 2-week engagement to identify high-impact AI
                opportunities and create a clear roadmap for your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
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
                  <div className="text-5xl font-bold mb-2">$15K - $30K</div>
                  <div className="text-primary-100">Investment Range</div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-primary-100">2 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Team Size</div>
                      <div className="text-primary-100">2-3 senior consultants</div>
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
              Comprehensive deliverables to guide your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} hover>
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
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
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              2-Week Sprint Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Rapid execution to get you started quickly
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card key={index}>
                <div className="flex items-start">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">{phase.week}</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
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

      {/* Ideal For */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
            <p className="text-xl text-gray-600">
              This package is perfect for organizations that:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {idealFor.map((item, index) => (
              <Card key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <Card className="bg-gradient-to-br from-primary to-primary-700 text-white p-12">
            <h2 className="font-heading text-3xl font-bold mb-6 text-center">
              Expected Outcomes
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">3-5</div>
                <div className="text-primary-100">
                  Prioritized AI Use Cases
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12-mo</div>
                <div className="text-primary-100">
                  Strategic Roadmap
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-primary-100">
                  Executive Clarity
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
            Ready to Define Your AI Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s schedule a consultation to discuss your specific needs and
            how this sprint can accelerate your AI journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" size="lg">
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
