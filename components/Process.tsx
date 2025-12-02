import React from 'react';
import { FileText, CheckSquare, Package, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Consultation & Tender",
    desc: "We review your requirements or tender documents thoroughly.",
    icon: <FileText size={24} />
  },
  {
    id: 2,
    title: "Quotation & Approval",
    desc: "Competitive pricing submitted for your financial approval.",
    icon: <CheckSquare size={24} />
  },
  {
    id: 3,
    title: "Quality Check",
    desc: "Strict rigorous testing before dispatching any equipment.",
    icon: <Package size={24} />
  },
  {
    id: 4,
    title: "Delivery & Support",
    desc: "Safe logistics and after-sales installation support.",
    icon: <Truck size={24} />
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-medical-600 font-bold tracking-wider uppercase text-xs sm:text-sm">Workflow</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">How We Simplify Procurement</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto bg-medical-50 text-medical-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors border-2 sm:border-4 border-white shadow-sm">
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{step.icon}</div>
                </div>
                <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] sm:text-xs font-bold mb-2 sm:mb-3">
                  Step 0{step.id}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};