'use client';

import React from 'react';

const clients = [
  'Microsoft', 'Google', 'Amazon', 'IBM', 'Salesforce',
  'Oracle', 'SAP', 'Adobe', 'Cisco', 'Intel',
  'Dell', 'HP', 'Accenture', 'Deloitte', 'PWC',
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center">
          {clients.slice(0, 10).map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="text-xl font-semibold text-gray-700">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
