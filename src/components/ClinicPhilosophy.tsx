import React from 'react';
import { ClipboardCheck, GitBranch, Activity, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const ClinicPhilosophy: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const principles = [
    {
      num: '01',
      title: 'Thorough Clinical Assessment',
      desc: 'Careful clinical evaluation to understand symptoms, individual needs, and recovery goals.',
      icon: ClipboardCheck,
      delayClass: 'delay-[100ms]',
    },
    {
      num: '02',
      title: 'Balanced Clinical Pathways',
      desc: 'Recommending appropriate non-operative modalities or operative care where indicated.',
      icon: GitBranch,
      delayClass: 'delay-[200ms]',
    },
    {
      num: '03',
      title: 'Integrated Rehabilitation',
      desc: 'In-house Post Operative Rehab and physical modalities to support steady recovery.',
      icon: Activity,
      delayClass: 'delay-[300ms]',
    },
  ];

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="py-10 sm:py-12 bg-[#E6F3EF] border-b border-teal-200/90 text-slate-800"
      aria-label="Clinic Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col">
            <div>
              <div 
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/80 border border-teal-200/80 mb-4 transition-all duration-500 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  Clinic Philosophy
                </span>
              </div>
              
              <h2 
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4 sm:mb-5 transition-all duration-500 ease-out delay-[80ms] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Treatment is only part of recovery.
              </h2>
              
              <div 
                className={`space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal transition-all duration-500 ease-out delay-[160ms] ${
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

            {/* Factual Integration Callout */}
            <div 
              className={`mt-6 p-5 sm:p-6 rounded-2xl bg-white/90 border border-teal-200/90 shadow-card transition-all duration-500 ease-out delay-[240ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 tracking-tight mb-1">
                    Integrated Care Under One Roof
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Initial clinical evaluation, non-operative therapies, and post-operative rehabilitation are managed as a continuous, unified recovery journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Sequence as Elevated Clinical Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {principles.map((p) => {
              const IconComponent = p.icon;
              return (
                <div 
                  key={p.num} 
                  className={`bg-white/95 rounded-2xl p-5 sm:p-6 border border-teal-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group ${p.delayClass} ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {/* Expanding Accent Line */}
                  <div 
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-700 ease-out ${
                      isInView ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-bold tracking-wider text-teal-900 uppercase px-2 py-0.5 rounded bg-teal-50/80 border border-teal-200/50">
                          {p.num}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-navy-900 tracking-tight">
                          {p.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

