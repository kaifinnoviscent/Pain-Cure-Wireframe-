import React from 'react';

export const CareJourney: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'Assess',
      tagline: 'Clinical Understanding',
      desc: 'Taking time to thoroughly evaluate individual symptoms and personal recovery goals.',
    },
    {
      num: '02',
      title: 'Treat',
      tagline: 'Appropriate Options',
      desc: 'Considering recommended non-operative modalities or operative care based on clinical evaluation.',
    },
    {
      num: '03',
      title: 'Rehabilitate',
      tagline: 'In-House Rehabilitation',
      desc: 'Supporting healing through physical therapy and dedicated in-house post-operative rehabilitation.',
    },
    {
      num: '04',
      title: 'Return to Movement',
      tagline: 'Everyday Confidence',
      desc: 'Restoring confidence and comfort in everyday activities and routine movement.',
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase mb-3">
            Care Philosophy &amp; Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            From initial assessment to everyday movement.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A patient-centred philosophy of care: understanding your condition, considering appropriate options, and supporting your recovery step by step. Individual clinical pathways are determined by specific patient needs.
          </p>
        </div>

        {/* Desktop Sequence */}
        <div className="hidden lg:block relative">
          <div className="absolute top-6 left-6 right-6 h-[1px] bg-slate-200 z-0" aria-hidden="true" />

          <div className="grid grid-cols-4 gap-12 relative z-10">
            {stages.map((stage) => (
              <div key={stage.num} className="flex flex-col items-start pt-1">
                <div className="w-11 h-11 rounded-full bg-white border-2 border-teal-600 text-teal-800 font-extrabold text-sm flex items-center justify-center mb-6 shadow-xs">
                  {stage.num}
                </div>

                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  {stage.tagline}
                </span>

                <h3 className="text-2xl font-bold text-navy-900 tracking-tight mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Sequence */}
        <div className="lg:hidden relative pl-8 border-l border-teal-200/80 space-y-10 ml-3">
          {stages.map((stage) => (
            <div key={stage.num} className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-teal-600 text-teal-800 font-bold text-xs flex items-center justify-center shadow-xs">
                {stage.num}
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                {stage.tagline}
              </span>

              <h3 className="text-xl font-bold text-navy-900 tracking-tight mb-2">
                {stage.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
