import React from 'react';
import { Building2, Landmark, Stethoscope, Award } from 'lucide-react';

export const TrustedPartners: React.FC = () => {
  const partners = [
    { name: 'Government of Pakistan', icon: <Landmark size={28} /> },
    { name: 'Red Crescent', icon: <Award size={28} /> },
    { name: 'Major Teaching Hospitals', icon: <Building2 size={28} /> },
    { name: 'Private Clinics', icon: <Stethoscope size={28} /> },
  ];

  return (
    <section className="bg-medical-900 py-10 sm:py-12 lg:py-16 my-4 sm:my-6 lg:my-8 xl:my-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-0">
          <div className="text-center md:text-left md:w-1/4 border-b md:border-b-0 md:border-r border-medical-800 pb-4 sm:pb-6 md:pb-0 md:pr-6 lg:pr-8 w-full md:w-auto">
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight">
              Trusted Partner For <br className="hidden sm:block" />
              <span className="text-medical-200">Bulk Supplies & Tenders</span>
            </h3>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-medical-800/50 text-medical-200 group-hover:bg-medical-600 group-hover:text-white transition-colors">
                    <div className="w-5 h-5 sm:w-7 sm:h-7">{partner.icon}</div>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};