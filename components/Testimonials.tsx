import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    quote: "Ghazi Enterprises has been our go-to for urgent surgical supplies. Their delivery speed to remote areas is unmatched.",
    author: "Dr. Ahmed Khan",
    role: "Head of Procurement, City Teaching Hospital"
  },
  {
    quote: "The quality of their electromedical equipment meets all our regulatory standards. A truly professional partner.",
    author: "Sarah Jameel",
    role: "Administrator, MedLife Clinics"
  },
  {
    quote: "Reliable, transparent, and cost-effective. They handled our bulk tender with exceptional professionalism.",
    author: "Mr. Fahad Raza",
    role: "Logistics Manager, Red Crescent"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-10 sm:mb-12 lg:mb-16">
          What Healthcare <br className="hidden sm:block" /> Administrators Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 sm:top-8 right-6 sm:right-8 text-medical-100 rotate-180" size={32} />
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 relative z-10 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                   <img src={`https://picsum.photos/seed/doc${idx}/100/100`} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t.author}</h4>
                  <p className="text-[10px] sm:text-xs text-medical-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};