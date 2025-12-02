import React from 'react';

interface CTAProps {
  onOpenQuote: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-medical-900 overflow-hidden text-center">
      {/* Abstract Topographic Lines Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'repeating-radial-gradient( circle at 0 0, transparent 0, #1e3a8a 10px ), repeating-linear-gradient( #ffffff55, #ffffff 1px )' }}>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to upgrade your medical facility?
        </h2>
        <p className="text-medical-100 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          Get a competitive quote for your bulk order today. We ensure compliance, quality, and timely delivery.
        </p>
        <button 
          onClick={onOpenQuote}
          className="bg-white text-medical-900 hover:bg-medical-50 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-xl shadow-medical-900/50 transition-all transform hover:-translate-y-1"
        >
          Request Quotation
        </button>
      </div>
    </section>
  );
};