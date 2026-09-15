import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import rehabImg from '../../assets/post-op-rehab.jpg';

interface PainCureSectionProps {
  isActive?: boolean;
}

export const PainCureSection: React.FC<PainCureSectionProps> = ({ isActive = true }) => {
  const pathwayStages = [
    {
      num: '01',
      title: 'Assessment',
      desc: 'Careful clinical evaluation to understand symptoms, physical baseline, and individual recovery goals.',
      delayClass: 'delay-[220ms]',
    },
    {
      num: '02',
      title: 'Treatment',
      desc: 'Recommending appropriate conservative modalities or operative care based on direct medical examination.',
      delayClass: 'delay-[300ms]',
    },
    {
      num: '03',
      title: 'Rehabilitation',
      desc: 'Dedicated in-house post-operative rehabilitation and progressive therapy to support steady recovery.',
      delayClass: 'delay-[380ms]',
    },
  ];

  return (
    <section
      id="pain-cure"
      className="w-full bg-navy-950 text-white scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-16 sm:py-24 lg:py-32"
      aria-label="Pain Cure: Orthopedic Treatment and Rehabilitation"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="xl:grid xl:grid-cols-[160px_minmax(0,1fr)] xl:gap-12 2xl:gap-16 items-start">
          {/* Desktop Spacer Column matching 160px sticky chapter index */}
          <div className="hidden xl:block" aria-hidden="true" />

          {/* Section Main Content */}
          <div className="min-w-0">
            {/* Section Header: Stagger 0ms */}
            <div 
              className={`flex items-center gap-4 pb-4 border-b border-white/15 mb-10 sm:mb-14 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-0 opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-teal-400 uppercase">
                03 &mdash; PAIN CURE
              </span>
              <div className="h-px bg-white/15 flex-grow" aria-hidden="true" />
            </div>

            {/* Narrative Block */}
            <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            Orthopedic Treatment and Rehabilitation
          </h2>
          <div 
            className={`space-y-4 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[160ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            <p>
              Pain Cure is being developed to bring orthopedic treatment and rehabilitation together in one care environment.
            </p>
            <p>
              The aim is to provide a connected pathway from clinical assessment and treatment through rehabilitation, including in-house post-operative rehabilitation.
            </p>
          </div>
        </div>

        {/* Connected Approach Sequence: Visual Editorial Process */}
        <div className="mb-16 sm:mb-24">
          <span 
            className={`text-xs font-mono font-extrabold tracking-widest text-teal-400 uppercase block mb-8 transition-all ${
              isActive 
                ? 'duration-500 ease-out delay-[200ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            A CONNECTED APPROACH TO CARE
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {pathwayStages.map((stage) => (
              <div 
                key={stage.num}
                className={`flex flex-col justify-between transition-all ${
                  isActive 
                    ? `duration-500 ease-out ${stage.delayClass} opacity-100 translate-y-0` 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                <div>
                  {/* Expanding top indicator line */}
                  <div 
                    className={`h-0.5 bg-teal-400 transition-all ${
                      isActive 
                        ? `duration-700 ease-out ${stage.delayClass} w-full` 
                        : 'duration-200 ease-in delay-0 w-0'
                    } mb-6`}
                    aria-hidden="true" 
                  />

                  <span className="text-xs font-mono font-bold text-teal-400 uppercase block mb-2">
                    {stage.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8 italic">
            Note: The appropriate clinical pathway is determined individually based on patient assessment and medical advice.
          </p>
        </div>

        {/* In-House Post-Op Rehab Feature: Calm Asymmetric Layout */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center bg-navy-900/80 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/15 backdrop-blur-xs shadow-2xl transition-all ${
            isActive 
              ? 'duration-700 ease-out delay-[450ms] opacity-100 translate-y-0' 
              : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
          }`}
        >
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-xs font-mono font-extrabold tracking-widest text-teal-400 uppercase block">
              DEDICATED IN-HOUSE SERVICE
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              In-house Post Operative Rehab
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Dedicated in-house rehabilitation facility designed to support progressive functional recovery and return to daily activities following orthopedic procedures.
            </p>

            <div className="space-y-3.5 pt-2 w-full text-base text-slate-200">
              <div className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Supervised progressive recovery sessions</span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Focused on returning patients to everyday movement</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/post-operative-rehab"
                className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-150 text-base touch-target"
              >
                <span>Explore In-House Rehabilitation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div 
              className={`overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-navy-950 transition-all ${
                isActive 
                  ? 'duration-700 ease-out delay-[520ms] opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <img
                src={rehabImg}
                alt="In-house post-operative rehabilitation session at Pain Cure clinic"
                className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
};



