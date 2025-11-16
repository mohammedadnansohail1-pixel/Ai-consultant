'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  assessmentQuestions,
  calculateMaturityLevel,
  getRecommendations,
} from '@/lib/assessmentQuestions';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.string().min(1, 'Please select an industry'),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState<'questions' | 'email' | 'results'>('questions');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [userInfo, setUserInfo] = useState<EmailFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const allQuestionsAnswered =
    Object.keys(answers).length === assessmentQuestions.length;

  const proceedToEmail = () => {
    if (allQuestionsAnswered) {
      setCurrentStep('email');
    }
  };

  const onEmailSubmit = (data: EmailFormData) => {
    setUserInfo(data);
    setCurrentStep('results');
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    return Math.round((total / (assessmentQuestions.length * 100)) * 100);
  };

  const downloadPDF = () => {
    // In a real implementation, you would generate a PDF here
    alert('PDF download feature would be implemented here using jsPDF library');
  };

  // Questions Step
  if (currentStep === 'questions') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container-custom max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI Readiness Assessment
              </h1>
              <p className="text-xl text-gray-600">
                Answer 12 questions to discover your AI maturity level and get
                personalized recommendations
              </p>
              <div className="mt-6">
                <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>
                    {Object.keys(answers).length} of {assessmentQuestions.length} questions answered
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(Object.keys(answers).length / assessmentQuestions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {assessmentQuestions.map((q, index) => (
                <Card key={q.id}>
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary text-xs font-semibold rounded-full">
                        {q.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        Question {index + 1} of {assessmentQuestions.length}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {q.question}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          answers[q.id] === option.value
                            ? 'border-primary bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={option.value}
                          checked={answers[q.id] === option.value}
                          onChange={() => handleAnswerChange(q.id, option.value)}
                          className="mt-1 mr-3 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={proceedToEmail}
                disabled={!allQuestionsAnswered}
                className="min-w-[200px]"
              >
                Continue to Results
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Email Capture Step
  if (currentStep === 'email') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container-custom max-w-2xl">
            <button
              onClick={() => setCurrentStep('questions')}
              className="flex items-center text-primary hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Questions
            </button>

            <Card>
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                  Get Your Personalized Report
                </h2>
                <p className="text-gray-600">
                  Enter your information to receive your AI readiness assessment
                  results and recommendations
                </p>
              </div>

              <form onSubmit={handleSubmit(onEmailSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Acme Corporation"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.industry.message}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    View My Results
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will only be used to send
                  you the assessment results and relevant AI insights.
                </p>
              </form>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Results Step
  const score = calculateScore();
  const maturity = calculateMaturityLevel(score);
  const recommendations = getRecommendations(score, answers);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your AI Readiness Results
            </h1>
            <p className="text-xl text-gray-600">
              Hello {userInfo?.name}, here&apos;s your personalized assessment
            </p>
          </div>

          {/* Score Card */}
          <Card className="mb-8 text-center bg-gradient-to-br from-primary to-primary-700 text-white">
            <h2 className="text-2xl font-bold mb-4">Your AI Maturity Score</h2>
            <div className="text-7xl font-bold mb-4">{score}</div>
            <div className="text-xl mb-2">{maturity.level} Level</div>
            <p className="text-primary-100">{maturity.description}</p>
          </Card>

          {/* Recommendations */}
          <Card className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Top 3 Recommendations
            </h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{rec}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Industry Benchmark */}
          <Card className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Industry Benchmark
            </h3>
            <p className="text-gray-600 mb-4">
              Compared to other {userInfo?.industry} companies:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">Average: 52</div>
                <div className="text-sm text-gray-500">Industry Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">Your Score: {score}</div>
                <div className="text-sm text-gray-500">Your Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">Top 25%: 75+</div>
                <div className="text-sm text-gray-500">Industry Leaders</div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={downloadPDF}>
              <Download className="w-5 h-5 mr-2" />
              Download PDF Report
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
