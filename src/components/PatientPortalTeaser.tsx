import React from 'react';

export const PatientPortalTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-2 border-teal-600 pl-6 sm:pl-8 py-2 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            Planned Digital Experience • Future Stage
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
            Your care, connected.
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A secure patient portal is planned for a future stage of the clinic’s digital service, designed to provide registered patients with direct, authenticated access to appointments, clinical reports, and individual rehabilitation guidance.
          </p>
        </div>
      </div>
    </section>
  );
};
