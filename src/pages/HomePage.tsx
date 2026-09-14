import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { TreatmentDiscovery } from '../components/TreatmentDiscovery';
import { ClinicPhilosophy } from '../components/ClinicPhilosophy';
import { CareJourney } from '../components/CareJourney';
import { RehabSection } from '../components/RehabSection';
import { TestimonialsPlaceholder } from '../components/TestimonialsPlaceholder';
import { PatientPortalTeaser } from '../components/PatientPortalTeaser';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-teal-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <TreatmentDiscovery />
        <ClinicPhilosophy />
        <CareJourney />
        <RehabSection />
        <TestimonialsPlaceholder />
        <PatientPortalTeaser />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};
