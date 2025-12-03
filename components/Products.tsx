import React from 'react';
import { 
  Scissors, 
  Monitor, 
  Bed, 
  Stethoscope, 
  FlaskConical,
  Heart,
  User,
  Activity,
  Wind,
  Users,
  CircleUser,
  Cross
} from 'lucide-react';

const products = [
  {
    title: "Clothwares",
    icon: <Scissors size={32} />
  },
  {
    title: "Commode chairs",
    icon: <Bed size={32} />
  },
  {
    title: "Diagnostic Equipments",
    icon: <Stethoscope size={32} />
  },
  {
    title: "Electromedical Equipments",
    icon: <Monitor size={32} />
  },
  {
    title: "Hospital Care",
    icon: <Heart size={32} />
  },
  {
    title: "Laboratory Equipments",
    icon: <FlaskConical size={32} />
  },
  {
    title: "Personal Healthcare",
    icon: <User size={32} />
  },
  {
    title: "Physiotherapy Products",
    icon: <Activity size={32} />
  },
  {
    title: "Respiratory Care",
    icon: <Wind size={32} />
  },
  {
    title: "Walkers",
    icon: <Users size={32} />
  },
  {
    title: "Wheel Chairs",
    icon: <CircleUser size={32} />
  },
  {
    title: "OT Products",
    icon: <Cross size={32} />
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
       
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-center justify-center text-center hover:border-medical-600 hover:-translate-y-1"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-medical-50 text-medical-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-medical-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {product.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-medical-600 transition-colors">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};