import React from 'react';

interface ApproachSectionProps {
  isActive?: boolean;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ isActive = true }) => {
  const clinicalFactors = [
    {
      num: '01',
      title: 'Muscle Strain & Stiffness',
      desc: 'Evaluating muscular tension, postural strain, and localized biomechanical fatigue across back and neck regions.',
    },
    {
      num: '02',
      title: 'Soft-Tissue Factors',
      desc: 'Assessing ligamentous stress, soft-tissue inflammation, and symptoms associated with peripheral nerve irritation.',
    },
    {
      num: '03',
      title: 'Facet Joint Problems',
      desc: 'Evaluating small spinal joint articulation, mobility restrictions, and localized mechanical discomfort.',
    },
    {
      num: '04',
      title: 'Spinal & Joint Conditions',
      desc: 'Assessing spinal column alignment, disc-related factors, and peripheral joint biomechanics.',
    },
  ];

  return (
    <section
      id="approach"
      className="w-full bg-[#E6F3EF] border-y border-teal-200/80 scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-7 sm:py-8 lg:py-9 text-slate-800"
      aria-label="Our Approach to Pain Care"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Main Content */}
        <div className="min-w-0">
            {/* Narrative Block */}
            <div className="max-w-3xl mb-7 sm:mb-9">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-3">
                DIAGNOSTIC RIGOR BEFORE TREATMENT
              </span>

              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-5 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                Understanding the Factors Behind Pain
              </h2>
              <div 
                className={`space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed font-normal transition-all ${
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

            {/* Contributing Factors: Editorial 2-Column Clinical Rows with Dividing Rules */}
            <div className="pt-2">
              <span 
                className={`text-xs font-bold tracking-wider text-teal-900 uppercase block mb-4 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[200ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                CONTRIBUTING FACTORS EVALUATED
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
                {clinicalFactors.map((item) => (
                  <div 
                    key={item.num} 
                    className="border-t border-teal-200/80 pt-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-xs font-bold text-teal-900">
                          FACTOR {item.num}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </div>
    </section>
  );
};
