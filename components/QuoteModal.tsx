import React, { useState, useRef } from 'react';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    requirements: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS Configuration with Hostinger SMTP
  // Configure EmailJS to use Hostinger SMTP (smtp.hostinger.com)
  // See HOSTINGER_EMAILJS_SETUP.md for detailed instructions
  // Create a .env file with:
  // VITE_EMAILJS_SERVICE_ID=your_hostinger_service_id
  // VITE_EMAILJS_TEMPLATE_ID=your_template_id
  // VITE_EMAILJS_PUBLIC_KEY=your_public_key
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map form field names to state property names
    const fieldMap: Record<string, keyof typeof formData> = {
      'user_name': 'name',
      'user_email': 'email',
      'message': 'requirements'
    };
    const stateKey = fieldMap[name] || name;
    setFormData(prev => ({ ...prev, [stateKey]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    if (!form.current) {
      setIsLoading(false);
      setSubmitStatus('error');
      return;
    }

    // Send email using Hostinger SMTP via EmailJS
    // IMPORTANT: In your EmailJS template settings:
    // - "To Email" must be: masoodfootball@gmail.com (where you receive quotes)
    // - "From Email" should be: info@ghazi-enterprises.com (your Hostinger email)
    // - "Reply To" should be: {{user_email}} (customer's email for replies)
    // DO NOT use {{user_email}} in "To Email" field!
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          // Reset form
          setFormData({
            name: '',
            organization: '',
            email: '',
            phone: '',
            requirements: ''
          });
          // Reset form element
          if (form.current) {
            form.current.reset();
          }
          // Close modal after 2 seconds
          setTimeout(() => {
            onClose();
            setSubmitStatus('idle');
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        requirements: ''
      });
      setSubmitStatus('idle');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-medical-900/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-lg my-4 sm:my-8 p-5 sm:p-6 md:p-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={handleClose}
          disabled={isLoading}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-slate-400 hover:text-medical-600 transition-colors bg-slate-50 p-1.5 sm:p-1 rounded-full disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Request a Quote</h3>
          <p className="text-slate-500 text-xs sm:text-sm">
            Complete the form below for bulk orders or tender inquiries.
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="text-green-600" size={40} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Request Sent Successfully!</h4>
            <p className="text-sm sm:text-base text-slate-600">
              Thank you! Your quote request has been received. Our team will contact you shortly at <span className="font-semibold">{formData.email}</span>.
            </p>
          </div>
        ) : submitStatus === 'error' ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-4">
              <AlertCircle className="text-red-600" size={40} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Something Went Wrong</h4>
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              We couldn't send your request. Please try again or contact us directly at masoodfootball@gmail.com
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="text-medical-600 hover:text-medical-700 font-semibold text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form ref={form} className="space-y-3 sm:space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
              <input 
                type="text" 
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required 
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" 
                placeholder="Your Name" 
              />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Organization / Hospital</label>
              <input 
                type="text" 
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" 
                placeholder="City Medical Center" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                <input 
                  type="email" 
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="email@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="+92 300..." 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Requirements</label>
              <textarea 
                rows={3} 
                name="message"
                value={formData.requirements}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-medical-600 focus:border-transparent outline-none resize-none transition-all placeholder:text-slate-400 text-slate-700 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" 
                placeholder="Please specify products and approximate quantities..."
              ></textarea>
            </div>
            
            {/* Hidden input for recipient email */}
            <input type="hidden" name="to_email" value="masoodfootball@gmail.com" />
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-medical-600 hover:bg-medical-700 disabled:bg-medical-400 text-white font-bold py-3 sm:py-3.5 rounded-xl transition-all shadow-lg shadow-medical-600/20 flex items-center justify-center gap-2 mt-2 text-sm sm:text-base disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};