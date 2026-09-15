import React from 'react';
import { useInView } from '../hooks/useInView';

export const PatientPortalTeaser: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-[#EDFAF7] border-b border-teal-200/70"
      aria-label="Planned Digital Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`border-l-4 border-teal-600 pl-6 sm:pl-8 py-2 max-w-3xl transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
          }`}
        >
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-teal-800 block mb-1.5">
            Planned Digital Experience &bull; Future Stage
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight mb-2">
            Your care, connected.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            A secure patient portal is planned for a future stage of the clinic’s digital service, designed to provide registered patients with direct, authenticated access to appointments, clinical reports, and individual rehabilitation guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

