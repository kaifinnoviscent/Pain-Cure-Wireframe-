import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const PatientPortalTeaser: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-12 bg-[#EDFAF7] border-b border-teal-200/70"
      aria-label="Planned Digital Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`bg-gradient-to-r from-white via-white to-teal-50/50 rounded-2xl border border-teal-200/90 shadow-card p-6 sm:p-7 lg:p-8 transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-7">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div className="border-l-0 sm:border-l-2 sm:border-teal-300 sm:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-900 block mb-1.5">
                Planned Digital Experience &bull; Future Stage
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight mb-2">
                Your care, connected.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-4xl">
                A secure patient portal is planned for a future stage of the clinic’s digital service, designed to provide registered patients with direct, authenticated access to appointments, clinical reports, and individual rehabilitation guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

