import React from 'react';
import { History, Truck, Building2 } from 'lucide-react';
import { FeatureCardProps } from '../types';
import { motion } from 'framer-motion';

const features: FeatureCardProps[] = [
  {
    title: "30+ Years Legacy",
    description: "Sister firm of Citi Scientific Supply. Decades of proven industry expertise in Pakistan.",
    variant: 'dark',
    icon: <History size={32} />
  },
  {
    title: "Nationwide Delivery",
    description: "Fast, reliable logistics network covering all provinces, ensuring critical supplies arrive on time.",
    variant: 'primary',
    icon: <Truck size={32} />
  },
  {
    title: "Bulk & Tender Specialist",
    description: "Optimized for large-scale procurement, government tenders, and institutional bulk orders.",
    variant: 'light',
    icon: <Building2 size={32} />
  }
];

export const Features: React.FC = () => {
  return (
    <section className="relative z-20 py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`
                p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl
                ${feature.variant === 'dark' ? 'bg-medical-900 text-white' : ''}
                ${feature.variant === 'primary' ? 'bg-medical-600 text-white' : ''}
                ${feature.variant === 'light' ? 'bg-white text-slate-800 border border-slate-100' : ''}
              `}
            >
              <div className={`mb-4 sm:mb-6 p-2.5 sm:p-3 rounded-lg sm:rounded-xl w-fit ${
                feature.variant === 'light' ? 'bg-medical-50 text-medical-600' : 'bg-white/10 text-white'
              }`}>
                <div className="w-6 h-6 sm:w-8 sm:h-8">{feature.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                feature.variant === 'light' ? 'text-slate-500' : 'text-white/80'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};