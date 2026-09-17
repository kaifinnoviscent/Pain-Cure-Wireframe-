import React from 'react';
import { ClipboardCheck, Stethoscope, Activity, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const CareJourney: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const stages = [
    {
      num: '01',
      title: 'Assess',
      tagline: 'Clinical Understanding',
      desc: 'Taking time to thoroughly evaluate individual symptoms and personal recovery goals.',
      icon: ClipboardCheck,
      delayClass: 'delay-[100ms]',
    },
    {
      num: '02',
      title: 'Treat',
      tagline: 'Appropriate Options',
      desc: 'Considering recommended non-operative modalities or operative care based on clinical evaluation.',
      icon: Stethoscope,
      delayClass: 'delay-[200ms]',
    },
    {
      num: '03',
      title: 'Rehabilitate',
      tagline: 'In-House Rehabilitation',
      desc: 'Supporting healing through physical therapy and dedicated in-house post-operative rehabilitation.',
      icon: Activity,
      delayClass: 'delay-[300ms]',
    },
    {
      num: '04',
      title: 'Return to Movement',
      tagline: 'Everyday Confidence',
      desc: 'Restoring confidence and comfort in everyday activities and routine movement.',
      icon: Sparkles,
      delayClass: 'delay-[400ms]',
    },
  ];

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-10 sm:py-12 bg-[#F4FBF9] border-b border-teal-100/90"
      aria-label="Care Philosophy and Patient Journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div 
          className={`max-w-3xl mb-6 sm:mb-8 transition-all duration-500 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-teal-200/90 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
              Care Philosophy &amp; Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            From initial assessment to everyday movement.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            A patient-centred philosophy of care: understanding your condition, considering appropriate options, and supporting your recovery step by step. Individual clinical pathways are determined by specific patient needs.
          </p>
        </div>

        {/* Desktop 4-Column Progressive Sequence */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {stages.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div 
                  key={stage.num} 
                  className={`bg-white rounded-2xl p-6 border border-teal-100/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${stage.delayClass} ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div>
                    {/* Card Header: Step number badge and semantic icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold tracking-wider text-teal-900 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200/60">
                        {stage.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                      {stage.tagline}
                    </span>

                    <h3 className="text-lg font-bold text-navy-900 tracking-tight mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Progression */}
        <div className="lg:hidden relative pl-7 sm:pl-8 border-l-2 border-teal-300 space-y-6 sm:space-y-8 ml-3">
          {stages.map((stage) => {
            const IconComponent = stage.icon;
            return (
              <div 
                key={stage.num} 
                className={`relative transition-all duration-500 ease-out ${stage.delayClass} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute -left-[37px] sm:-left-[41px] top-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-500 font-bold text-xs flex items-center justify-center shadow-xs ${
                  isInView ? 'bg-white border-teal-600 text-teal-900 ring-2 ring-teal-100' : 'bg-white border-slate-300 text-slate-500'
                }`}>
                  {stage.num}
                </div>

                <div className="bg-white rounded-xl p-5 border border-teal-100 shadow-card">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      {stage.tagline}
                    </span>
                    <IconComponent className="w-4 h-4 text-teal-600" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 tracking-tight mb-1.5">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

