import React from 'react';
import { Scissors, Monitor, Bed, Stethoscope, ArrowUpRight } from 'lucide-react';
import { ProductProps } from '../types';

const products: ProductProps[] = [
  {
    title: "Surgical Instruments",
    description: "Precision-crafted stainless steel tools for all surgical disciplines.",
    icon: <Scissors size={28} />,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Electromedical Equipment",
    description: "Advanced monitoring systems, ECGs, and diagnostic machinery.",
    icon: <Monitor size={28} />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hospital Furniture",
    description: "Ergonomic beds, OT tables, and patient transport solutions.",
    icon: <Bed size={28} />,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Disposables & Linen",
    description: "High-grade sterile consumables and medical textiles.",
    icon: <Stethoscope size={28} />, 
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Comprehensive Medical <br className="hidden sm:block" /> Supply Solutions.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We cater to the diverse needs of modern healthcare facilities with certified, durable, and cost-effective equipment.
            </p>
          </div>
          <button className="text-sm sm:text-base text-medical-600 font-semibold border-b-2 border-medical-600 pb-1 hover:text-medical-700 transition-colors whitespace-nowrap">
            View Full Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-medical-900/10 group-hover:bg-medical-900/0 transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="text-medical-600" size={20} />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-medical-50 text-medical-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-medical-600 group-hover:text-white transition-colors">
                  <div className="w-5 h-5 sm:w-7 sm:h-7">{product.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};