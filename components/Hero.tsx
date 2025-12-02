import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-slate-50 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 lg:pt-48 lg:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-medical-50 border border-medical-100 text-medical-900 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-medical-600 animate-pulse"></span>
                ISO Certified Supplier
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-4 sm:mb-6">
                Empowering Healthcare with <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-teal-400">Excellence</span> & Reliability.
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Building on a 30-year legacy of Citi Scientific. We supply premium surgical instruments, electromedical equipment, and hospital furniture across Pakistan.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <a href="#products" className="px-6 sm:px-8 py-3 sm:py-3.5 bg-medical-600 hover:bg-medical-700 text-white rounded-full font-semibold shadow-lg shadow-medical-600/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                  View Catalog
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href="#legacy" className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-medical-600 rounded-full font-semibold transition-all shadow-sm hover:shadow-md text-center text-sm sm:text-base">
                  About Us
                </a>
              </div>

              {/* Floating Social Proof */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/40 shadow-sm max-w-full sm:max-w-sm">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3].map((i) => (
                     <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="User" className="w-full h-full object-cover" />
                     </div>
                  ))}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-medical-50 flex items-center justify-center text-[10px] sm:text-xs font-bold text-medical-800">
                    +50
                  </div>
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-slate-900">Trusted by Institutions</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs">Govt & Private Hospitals</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-medical-900/20 aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Operation Theater Equipment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Cards on Image */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 bg-white/95 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg max-w-[calc(100%-2rem)] sm:max-w-xs animate-[bounce_3s_infinite]">
                   <div className="flex items-center gap-2 sm:gap-3">
                     <div className="p-1.5 sm:p-2 bg-teal-50 text-medical-600 rounded-lg">
                       <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-900 text-xs sm:text-sm">100% Compliant</p>
                       <p className="text-[10px] sm:text-xs text-slate-500">DRAP Approved</p>
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};