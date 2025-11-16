'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  'Tell me about your services',
  'How much does it cost?',
  'Schedule a consultation',
  'Calculate ROI',
];

const botResponses: Record<string, string> = {
  default:
    "Thanks for reaching out! I'd be happy to help. You can explore our AI Assessment Tool, calculate your ROI, or schedule a consultation with our team.",
  services:
    'We offer three main service packages: AI Strategy Sprint ($15K-$30K, 2 weeks), AI Pilot Implementation ($50K-$150K, 2-3 months), and AI Transformation ($200K+, 6-12 months). Which would you like to learn more about?',
  cost: 'Our packages range from $15K for a 2-week AI Strategy Sprint to $200K+ for comprehensive AI Transformation. The investment depends on your specific needs and scope. Would you like to calculate your potential ROI?',
  consultation:
    'Great! I can help you schedule a consultation. Please visit our Contact page or click here to fill out a brief form, and our team will reach out within 24 hours.',
  roi: 'Our ROI Calculator can help you estimate the potential return on AI investment. Visit the ROI Calculator to see projections based on your industry and metrics.',
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI consulting assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show chatbot after 30 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return botResponses.services;
    } else if (
      lowerMessage.includes('cost') ||
      lowerMessage.includes('price') ||
      lowerMessage.includes('how much')
    ) {
      return botResponses.cost;
    } else if (
      lowerMessage.includes('consult') ||
      lowerMessage.includes('meeting') ||
      lowerMessage.includes('schedule')
    ) {
      return botResponses.consultation;
    } else if (lowerMessage.includes('roi') || lowerMessage.includes('return')) {
      return botResponses.roi;
    }

    return botResponses.default;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 z-50 animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full animate-ping" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] z-50">
          <Card className="shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">AI Consultant</div>
                  <div className="text-xs text-primary-100">
                    Typically replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-900 shadow-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user'
                          ? 'text-primary-100'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 bg-primary-50 text-primary text-xs rounded-full hover:bg-primary-100 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                For complex inquiries,{' '}
                <a href="/contact" className="text-primary hover:underline">
                  schedule a consultation
                </a>
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
