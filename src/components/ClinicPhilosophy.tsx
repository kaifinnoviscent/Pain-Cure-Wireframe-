import React from 'react';
import { useInView } from '../hooks/useInView';

export const ClinicPhilosophy: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const principles = [
    {
      num: '01',
      title: 'Thorough Clinical Assessment',
      desc: 'Careful clinical evaluation to understand symptoms, individual needs, and recovery goals.',
      delayClass: 'delay-[100ms]',
    },
    {
      num: '02',
      title: 'Balanced Clinical Pathways',
      desc: 'Recommending appropriate non-operative modalities or operative care where indicated.',
      delayClass: 'delay-[200ms]',
    },
    {
      num: '03',
      title: 'Integrated Rehabilitation',
      desc: 'In-house Post Operative Rehab and physical modalities to support steady recovery.',
      delayClass: 'delay-[300ms]',
    },
  ];

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#E6F3EF] border-b border-teal-200/90 text-slate-800"
      aria-label="Clinic Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6">
            <div 
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/80 border border-teal-200/80 mb-4 transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-700" aria-hidden="true" />
              <span className="font-mono text-xs font-extrabold tracking-widest text-teal-800 uppercase">
                Clinic Philosophy
              </span>
            </div>
            
            <h2 
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6 transition-all duration-500 ease-out delay-[80ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              Treatment is only part of recovery.
            </h2>
            
            <div 
              className={`space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal transition-all duration-500 ease-out delay-[160ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <p>
                At Pain Cure Ortho &amp; Rehab Clinic, orthopaedic care and rehabilitation are integrated. Treatment and in-house rehabilitation work together as part of a cohesive patient-centred approach.
              </p>
              <p>
                Whether addressing spinal discomfort, joint pain, or recovering from a procedure, our approach focuses on understanding your condition, considering appropriate non-operative or operative pathways, and guiding you steadily back to everyday activities.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Sequence with Expanding Dividers */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {principles.map((p) => (
              <div 
                key={p.num} 
                className={`transition-all duration-500 ease-out ${p.delayClass} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Expanding Separator Line */}
                <div 
                  className={`h-0.5 bg-teal-300 transition-all duration-700 ease-out mb-4 ${
                    isInView ? 'w-full' : 'w-0'
                  }`}
                  aria-hidden="true"
                />

                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-mono text-xs sm:text-sm font-extrabold tracking-wider text-teal-800 uppercase">
                    {p.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-6 sm:pl-7">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

