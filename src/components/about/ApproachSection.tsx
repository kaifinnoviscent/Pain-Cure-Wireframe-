import React from 'react';

interface ApproachSectionProps {
  isActive?: boolean;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ isActive = true }) => {
  const clinicalFactors = [
    {
      num: '01',
      title: 'MUSCLE STRAIN & STIFFNESS',
      desc: 'Evaluating muscular tension, postural strain, and localized biomechanical fatigue across back and neck regions.',
      delayClass: 'delay-[260ms]',
    },
    {
      num: '02',
      title: 'SOFT-TISSUE FACTORS',
      desc: 'Assessing ligamentous stress, soft-tissue inflammation, and symptoms associated with peripheral nerve irritation.',
      delayClass: 'delay-[340ms]',
    },
    {
      num: '03',
      title: 'FACET JOINT PROBLEMS',
      desc: 'Evaluating small spinal joint articulation, mobility restrictions, and localized mechanical discomfort.',
      delayClass: 'delay-[420ms]',
    },
    {
      num: '04',
      title: 'SPINAL & JOINT CONDITIONS',
      desc: 'Assessing spinal column alignment, disc-related factors, and peripheral joint biomechanics.',
      delayClass: 'delay-[500ms]',
    },
  ];

  return (
    <section
      id="approach"
      className="w-full bg-[#E6F3EF] border-y border-teal-200/90 scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-16 sm:py-24 lg:py-32 text-slate-800"
      aria-label="Our Approach to Pain Care"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="xl:grid xl:grid-cols-[160px_minmax(0,1fr)] xl:gap-12 2xl:gap-16 items-start">
          {/* Desktop Spacer Column matching 160px sticky chapter index */}
          <div className="hidden xl:block" aria-hidden="true" />

          {/* Section Main Content */}
          <div className="min-w-0">
            {/* Section Header: Stagger 0ms */}
            <div 
              className={`flex items-center gap-4 pb-4 border-b border-teal-200 mb-10 sm:mb-14 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-0 opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-teal-800 uppercase">
                02 &mdash; OUR APPROACH
              </span>
              <div className="h-px bg-teal-200 flex-grow" aria-hidden="true" />
            </div>

            {/* Narrative Block */}
            <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-6 transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            Understanding the Factors Behind Pain
          </h2>
          <div 
            className={`space-y-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[180ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            <p>
              Back and neck pain can have different contributing factors. Muscle strain and stiffness, soft-tissue problems and changes affecting the small joints of the spine can all contribute to symptoms.
            </p>
            <p>
              Understanding these factors helps guide the appropriate treatment approach for each patient rather than treating every complaint with a single uniform method.
            </p>
          </div>
        </div>

        {/* Editorial Numbered Sequence (No cards, pure typography & dividers) */}
        <div>
          <span 
            className={`text-xs font-mono font-extrabold tracking-widest text-teal-800 uppercase block mb-8 transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[200ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            CONTRIBUTING FACTORS EVALUATED
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-24 gap-y-12 sm:gap-y-16">
            {clinicalFactors.map((item) => (
              <div 
                key={item.num}
                className={`group flex flex-col justify-between transition-all ${
                  isActive 
                    ? `duration-500 ease-out ${item.delayClass} opacity-100 translate-y-0` 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                {/* Expanding separator line */}
                <div 
                  className={`h-0.5 bg-teal-300 transition-all ${
                    isActive 
                      ? `duration-700 ease-out ${item.delayClass} w-full` 
                      : 'duration-200 ease-in delay-0 w-0'
                  } mb-6`}
                  aria-hidden="true" 
                />

                <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-teal-800 uppercase block mb-3">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

