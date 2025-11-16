import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Services } from '@/components/sections/Services';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { Industries } from '@/components/sections/Industries';
import { TrustSection } from '@/components/sections/TrustSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { Chatbot } from '@/components/ui/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <TrustSection />
      <CaseStudiesPreview />
      <Industries />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}
