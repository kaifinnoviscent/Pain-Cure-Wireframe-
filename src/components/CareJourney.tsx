import React from 'react';
import { useInView } from '../hooks/useInView';

export const CareJourney: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const stages = [
    {
      num: '01',
      title: 'Assess',
      tagline: 'Clinical Understanding',
      desc: 'Taking time to thoroughly evaluate individual symptoms and personal recovery goals.',
      delayClass: 'delay-[100ms]',
    },
    {
      num: '02',
      title: 'Treat',
      tagline: 'Appropriate Options',
      desc: 'Considering recommended non-operative modalities or operative care based on clinical evaluation.',
      delayClass: 'delay-[200ms]',
    },
    {
      num: '03',
      title: 'Rehabilitate',
      tagline: 'In-House Rehabilitation',
      desc: 'Supporting healing through physical therapy and dedicated in-house post-operative rehabilitation.',
      delayClass: 'delay-[300ms]',
    },
    {
      num: '04',
      title: 'Return to Movement',
      tagline: 'Everyday Confidence',
      desc: 'Restoring confidence and comfort in everyday activities and routine movement.',
      delayClass: 'delay-[400ms]',
    },
  ];

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F4FBF9] border-b border-teal-100/90"
      aria-label="Care Philosophy and Patient Journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div 
          className={`max-w-3xl mb-12 sm:mb-18 transition-all duration-500 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-teal-200/90 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="font-mono text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              Care Philosophy &amp; Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            From initial assessment to everyday movement.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A patient-centred philosophy of care: understanding your condition, considering appropriate options, and supporting your recovery step by step. Individual clinical pathways are determined by specific patient needs.
          </p>
        </div>

        {/* Desktop 4-Column Progressive Sequence */}
        <div className="hidden lg:block relative">
          <div 
            className={`absolute top-5 left-8 right-8 h-[2px] transition-all duration-1000 ease-out z-0 ${
              isInView ? 'bg-gradient-to-r from-teal-500 via-teal-400 to-teal-200 opacity-100' : 'bg-slate-200 opacity-0'
            }`} 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-4 gap-8 xl:gap-10 relative z-10">
            {stages.map((stage) => (
              <div 
                key={stage.num} 
                className={`flex flex-col items-start transition-all duration-500 ease-out ${stage.delayClass} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className={`w-10 h-10 rounded-full border-2 transition-all duration-500 font-mono font-bold text-xs flex items-center justify-center mb-5 shadow-xs ${
                  isInView ? 'bg-white border-teal-600 text-teal-800 ring-4 ring-teal-100' : 'bg-white border-slate-300 text-slate-400'
                }`}>
                  {stage.num}
                </div>

                <span className="font-mono text-[11px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  {stage.tagline}
                </span>

                <h3 className="text-xl font-bold text-navy-900 tracking-tight mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Progression */}
        <div className="lg:hidden relative pl-7 sm:pl-8 border-l-2 border-teal-300 space-y-8 sm:space-y-10 ml-3">
          {stages.map((stage) => (
            <div 
              key={stage.num} 
              className={`relative transition-all duration-500 ease-out ${stage.delayClass} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[37px] sm:-left-[41px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-500 font-mono font-bold text-[11px] sm:text-xs flex items-center justify-center shadow-xs ${
                isInView ? 'bg-white border-teal-600 text-teal-800 ring-2 ring-teal-100' : 'bg-white border-slate-300 text-slate-400'
              }`}>
                {stage.num}
              </div>

              <span className="font-mono text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                {stage.tagline}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight mb-1.5">
                {stage.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

