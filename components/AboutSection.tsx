import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="legacy" className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-medical-600 rounded-2xl sm:rounded-3xl rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/surgerytools/800/800" 
              alt="Surgical Instruments" 
              className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-slate-50 rounded-full border-4 sm:border-8 border-white flex items-center justify-center p-3 sm:p-4 text-center shadow-lg">
               <div>
                 <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-medical-600">2022</span>
                 <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-500">Founded with<br/>Innovation</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Quality Standards that Meet <span className="text-medical-600">International Benchmarks.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Founded in 2022, Ghazi Enterprises combines modern innovation with decades of inherited experience. Our mission is to provide dependable healthcare solutions that support hospitals in delivering exceptional patient care.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                "Certified Medical Grade Steel",
                "Strict Quality Control Protocols",
                "Rapid Response Supply Chain",
                "Technical Training Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <CheckCircle2 className="text-accent-teal shrink-0" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="text-sm sm:text-base text-medical-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Read Our Story <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};