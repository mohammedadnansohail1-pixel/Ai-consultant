import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  Users,
  Package,
  DollarSign,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const solutions = [
  {
    icon: TrendingUp,
    title: 'Demand Forecasting',
    description:
      'Advanced AI models that predict customer demand across products, locations, and time periods using historical data, market trends, and external factors.',
    benefits: [
      'Improve forecast accuracy by 40%+',
      'Reduce stockouts by 65%',
      'Optimize inventory levels',
      'Maximize revenue opportunities',
    ],
    useCases: [
      'Product demand prediction',
      'Seasonal trend analysis',
      'New product launch forecasting',
      'Regional demand variations',
    ],
  },
  {
    icon: Users,
    title: 'Personalization Engines',
    description:
      'AI-powered recommendation systems that deliver personalized product suggestions, content, and experiences to each customer.',
    benefits: [
      'Increase conversion rates by 30%',
      'Boost average order value by 25%',
      'Improve customer retention',
      'Enhance customer lifetime value',
    ],
    useCases: [
      'Product recommendations',
      'Personalized email campaigns',
      'Dynamic website content',
      'Customized promotions',
    ],
  },
  {
    icon: Package,
    title: 'Inventory Optimization',
    description:
      'Intelligent inventory management systems that optimize stock levels, reduce carrying costs, and prevent stockouts.',
    benefits: [
      'Reduce inventory costs by 35%',
      'Decrease overstock by 45%',
      'Improve inventory turnover by 28%',
      'Minimize markdowns by 30%',
    ],
    useCases: [
      'Multi-location inventory balancing',
      'Automated reorder point calculation',
      'Safety stock optimization',
      'Dead stock identification',
    ],
  },
  {
    icon: DollarSign,
    title: 'Dynamic Price Optimization',
    description:
      'AI-driven pricing strategies that optimize prices in real-time based on demand, competition, inventory levels, and market conditions.',
    benefits: [
      'Increase margins by 18%',
      'Optimize promotional effectiveness',
      'Respond to market changes instantly',
      'Maximize revenue per transaction',
    ],
    useCases: [
      'Competitive pricing analysis',
      'Markdown optimization',
      'Promotional pricing',
      'Dynamic surge pricing',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Customer Sentiment Analysis',
    description:
      'Natural language processing that analyzes customer feedback, reviews, and social media to understand sentiment and identify trends.',
    benefits: [
      'Identify issues 70% faster',
      'Improve product development',
      'Enhance brand reputation',
      'Predict customer churn',
    ],
    useCases: [
      'Review and rating analysis',
      'Social media monitoring',
      'Customer service feedback',
      'Brand sentiment tracking',
    ],
  },
];

const stats = [
  { value: '40%', label: 'Forecast Accuracy Improvement' },
  { value: '18%', label: 'Margin Increase' },
  { value: '65%', label: 'Stockout Reduction' },
  { value: '$90M', label: 'Avg Annual Impact' },
];

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              Retail & E-commerce Solutions
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              AI Solutions for Retail & E-commerce
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Optimize inventory, personalize experiences, and maximize margins
              with AI-powered retail solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
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
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
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
              Challenges Facing Retailers
            </h2>
            <p className="text-xl text-gray-600">
              Common pain points we help retail businesses solve
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Inaccurate demand forecasting leading to stockouts and overstock',
              'Generic customer experiences failing to drive conversions',
              'High inventory carrying costs and frequent markdowns',
              'Price wars with competitors eroding margins',
              'Difficulty understanding customer sentiment at scale',
              'Supply chain inefficiencies and delays',
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
              Our Retail AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI capabilities designed for retail success
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
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
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
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
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
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 mb-8">
              <h2 className="font-heading text-3xl font-bold mb-2">
                Success Story: E-commerce Platform
              </h2>
              <p className="text-purple-100">
                How we improved forecast accuracy by 42% and increased margins by
                18%
              </p>
            </div>

            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">+42%</div>
                  <div className="text-sm text-gray-600">Forecast Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">18%</div>
                  <div className="text-sm text-gray-600">Margin Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">65%</div>
                  <div className="text-sm text-gray-600">Stockout Reduction</div>
                </div>
              </div>

              <Link href="/case-studies">
                <Button variant="primary" className="group bg-purple-600 hover:bg-purple-700">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Optimize Your Retail Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let&apos;s discuss how AI can help you increase margins, reduce
            stockouts, and deliver personalized customer experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
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
