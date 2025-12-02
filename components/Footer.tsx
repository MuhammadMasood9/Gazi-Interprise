import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-medical-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12">
          <div className="col-span-1">
             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex-shrink-0">
                  <svg viewBox="0 0 100 80" className="w-full h-full">
                    <path 
                      d="M 75 15 H 35 A 25 25 0 0 0 35 65 H 75" 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="12" 
                      strokeLinecap="square"
                    />
                    <path 
                      d="M 50 25 V 55 M 35 40 H 65" 
                      stroke="#009CA6" 
                      strokeWidth="10" 
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase">Ghazi Enterprises</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Providing premium healthcare solutions and medical equipment across Pakistan since 2022.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
              </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-medical-500 transition-colors">Home</a></li>
              <li><a href="#legacy" className="hover:text-medical-500 transition-colors">Our Legacy</a></li>
              <li><a href="#products" className="hover:text-medical-500 transition-colors">Products Catalog</a></li>
              <li><a href="#contact" className="hover:text-medical-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="mt-0.5 sm:mt-1 text-medical-600 shrink-0" size={16} />
                <span>123 Medical Enclave, Industrial Area, Sialkot/Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="text-medical-600 shrink-0" size={16} />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="text-medical-600 shrink-0" size={16} />
                <span>info@ghazienterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <p className="text-center sm:text-left">&copy; 2024 Ghazi Enterprises. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};