import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '100%', label: 'Quality Assurance' },
  { value: '4+', label: 'Major Categories' },
  { value: '24/7', label: 'Support for Inst.' },
  { value: 'PK', label: 'Nationwide Coverage' },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-medical-900 py-10 sm:py-12 lg:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-medical-200 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-medical-100 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};