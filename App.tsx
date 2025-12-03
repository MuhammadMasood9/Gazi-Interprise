import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedPartners } from './components/TrustedPartners';
import { Features } from './components/Features';
import { AboutSection } from './components/AboutSection';
import { Stats } from './components/Stats';
import { Products } from './components/Products';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-medical-200 selection:text-medical-900">
      <Header onOpenQuote={openQuoteModal} />
      <main>
        <Hero />
        <TrustedPartners />
        <Products />
        <Features />
        <AboutSection />
        <Stats />
        <Process />
        <Testimonials />
        <CTA onOpenQuote={openQuoteModal} />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
};

export default App;