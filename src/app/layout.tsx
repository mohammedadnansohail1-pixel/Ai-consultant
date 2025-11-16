import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'AI Consulting | Enterprise AI Strategy & Implementation',
  description:
    'Transform your business with expert AI consulting. Strategy, implementation, and ROI-focused AI solutions for enterprise clients.',
  keywords: [
    'AI consulting',
    'enterprise AI strategy',
    'AI implementation',
    'machine learning consulting',
    'AI transformation',
  ],
  authors: [{ name: 'AI Consulting' }],
  openGraph: {
    title: 'AI Consulting | Enterprise AI Strategy & Implementation',
    description:
      'Transform your business with expert AI consulting. Strategy, implementation, and ROI-focused AI solutions for enterprise clients.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
