import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Activity,
  Users,
  Pill,
  ClipboardCheck,
  FileText,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const solutions = [
  {
    icon: Activity,
    title: 'Diagnostic Assistance AI',
    description:
      'AI-powered clinical decision support systems that analyze medical images, patient data, and research to assist healthcare professionals in accurate diagnosis.',
    benefits: [
      'Improve diagnostic accuracy by 25%',
      'Reduce diagnosis time by 40%',
      'Early detection of critical conditions',
      'Evidence-based recommendations',
    ],
    useCases: [
      'Medical imaging analysis (X-rays, MRIs, CT scans)',
      'Pathology slide analysis',
      'Early cancer detection',
      'Rare disease identification',
    ],
  },
  {
    icon: Users,
    title: 'Patient Flow Optimization',
    description:
      'Intelligent scheduling and resource allocation systems that optimize patient flow, reduce wait times, and maximize facility utilization.',
    benefits: [
      'Reduce patient wait times by 45%',
      'Increase bed utilization by 30%',
      'Improve patient satisfaction scores',
      'Optimize staff scheduling',
    ],
    useCases: [
      'Predictive patient admission scheduling',
      'Emergency department flow management',
      'Operating room scheduling',
      'Resource allocation optimization',
    ],
  },
  {
    icon: Pill,
    title: 'Drug Discovery Acceleration',
    description:
      'Machine learning models that analyze molecular structures, predict drug interactions, and identify promising compounds faster than traditional methods.',
    benefits: [
      'Reduce drug discovery time by 60%',
      'Decrease development costs by 40%',
      'Identify new drug candidates',
      'Predict drug efficacy and safety',
    ],
    useCases: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Adverse effect prediction',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Clinical Trial Matching',
    description:
      'AI systems that match patients with appropriate clinical trials based on medical history, genetics, and eligibility criteria.',
    benefits: [
      'Increase trial enrollment by 35%',
      'Reduce patient screening time by 50%',
      'Improve trial diversity',
      'Accelerate research timelines',
    ],
    useCases: [
      'Patient-trial matching algorithms',
      'Eligibility criteria screening',
      'Trial site selection',
      'Patient recruitment optimization',
    ],
  },
  {
    icon: FileText,
    title: 'Administrative Automation',
    description:
      'Intelligent automation of healthcare administrative tasks including billing, coding, documentation, and insurance verification.',
    benefits: [
      'Reduce administrative costs by 50%',
      'Improve billing accuracy to 98%',
      'Decrease claim denial rates by 40%',
      'Free up 30% of staff time',
    ],
    useCases: [
      'Medical coding automation',
      'Insurance verification',
      'Prior authorization processing',
      'Clinical documentation improvement',
    ],
  },
];

const stats = [
  { value: '30%', label: 'Cost Reduction' },
  { value: '45%', label: 'Faster Patient Flow' },
  { value: '35%', label: 'Patient Satisfaction Increase' },
  { value: '$12M', label: 'Avg Annual Savings' },
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              Healthcare Solutions
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              AI Solutions for Healthcare
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Enhance patient care, optimize operations, and accelerate medical
              research with AI-powered healthcare solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
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
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
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
              Challenges Facing Healthcare Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Critical issues we help healthcare providers address
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Rising operational costs and staffing shortages',
              'Long patient wait times and inefficient flow',
              'Administrative burden consuming 30% of resources',
              'Delayed diagnosis and treatment decisions',
              'Clinical trial recruitment challenges',
              'Drug development taking 10+ years and billions in costs',
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
              Our Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI capabilities designed for healthcare providers
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
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
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
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
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
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 mb-8">
              <h2 className="font-heading text-3xl font-bold mb-2">
                Success Story: Regional Hospital Network
              </h2>
              <p className="text-red-100">
                How we increased patient satisfaction by 35% and reduced wait times
                by 45%
              </p>
            </div>

            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">+35%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">45%</div>
                  <div className="text-sm text-gray-600">Wait Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">$12M</div>
                  <div className="text-sm text-gray-600">Annual Revenue Increase</div>
                </div>
              </div>

              <Link href="/case-studies">
                <Button variant="primary" className="group bg-red-600 hover:bg-red-700">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Transform Patient Care?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let&apos;s discuss how AI can help you improve patient outcomes,
            optimize operations, and reduce costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
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
