'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              AI Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link
                    href="/services/strategy"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    AI Strategy Sprint
                  </Link>
                  <Link
                    href="/services/implementation"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    Pilot Implementation
                  </Link>
                  <Link
                    href="/services/transformation"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    AI Transformation
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link
                    href="/industries/finance"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    Financial Services
                  </Link>
                  <Link
                    href="/industries/healthcare"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="/industries/retail"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-md"
                  >
                    Retail
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/assessment">
              <Button variant="primary" size="md">
                Get AI Assessment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Industries
            </Link>
            <Link
              href="/case-studies"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Case Studies
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Contact
            </Link>
            <Link href="/assessment" className="block pt-4">
              <Button variant="primary" size="md" className="w-full">
                Get AI Assessment
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
