import React from 'react';
import { X, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you! Your quote request has been received. Our team will contact you shortly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-medical-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-medical-600 transition-colors bg-slate-50 p-1 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h3>
          <p className="text-slate-500 text-sm">
            Complete the form below for bulk orders or tender inquiries.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700" 
              placeholder="Dr. Sarah Smith" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Organization / Hospital</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700" 
              placeholder="City Medical Center" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700" 
                placeholder="email@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700" 
                placeholder="+92 300..." 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Requirements</label>
            <textarea 
              rows={3} 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none resize-none transition-all placeholder:text-slate-400 text-slate-700" 
              placeholder="Please specify products and approximate quantities..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-medical-600 hover:bg-medical-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-medical-600/20 flex items-center justify-center gap-2 mt-2"
          >
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};