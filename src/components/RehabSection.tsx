import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import rehabImg from '../assets/post-op-rehab.jpg';

export const RehabSection: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      id="rehab" 
      ref={sectionRef}
      className="py-18 sm:py-28 bg-[#041628] text-white relative overflow-hidden border-b border-navy-900"
      aria-label="Clinical Rehabilitation"
    >
      {/* Ambient background contrast glow */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Factual Points */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div 
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900/90 border border-teal-500/30 mb-4 transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
              <span className="font-mono text-xs font-extrabold tracking-widest text-teal-400 uppercase">
                Dedicated In-House Service
              </span>
            </div>

            <h2 
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 transition-all duration-500 ease-out delay-[80ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              In-house Post Operative Rehab
            </h2>

            <div 
              className={`space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-7 transition-all duration-500 ease-out delay-[160ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <p>
                Orthopaedic surgery is only part of the recovery process. What happens in the weeks following a procedure — how movement is gradually restored, how the body is supported through the early stages of healing — shapes the patient's ability to return to everyday activities.
              </p>
              <p>
                Pain Cure provides in-house post-operative rehabilitation to support patients through this phase. Rather than navigating post-surgical recovery alone, patients have access to supervised rehabilitation within the same clinical environment. The aim is a progressive, structured return to functional movement, tailored to the individual's condition and surgical pathway.
              </p>
            </div>

            <div 
              className={`space-y-3 mb-8 w-full transition-all duration-500 ease-out delay-[240ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {[
                'Rehabilitation following orthopaedic surgical procedures',
                'Supervised, in-house programme within the clinic',
                'Focused on progressive restoration of movement and function',
                "Care tailored to the individual's condition and recovery stage",
              ].map((item, idx) => (
                <div 
                  key={item} 
                  className="flex items-start gap-3 transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${240 + idx * 80}ms` }}
                >
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div 
              className={`transition-all duration-500 ease-out delay-[360ms] ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <Link
                to="/post-operative-rehab"
                className="group inline-flex items-center gap-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] touch-target touch-press text-sm sm:text-base min-h-[48px]"
              >
                <span>Learn About Post-Op Rehabilitation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Clinical Photography */}
          <div 
            className={`lg:col-span-6 relative mt-4 lg:mt-0 transition-all duration-700 ease-out delay-[200ms] ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none group">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-teal-500/30 shadow-2xl bg-navy-900">
                <img
                  src={rehabImg}
                  alt="Post-operative clinical rehabilitation session at Pain Cure clinic"
                  className={`w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
                    isInView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                  }`}
                  loading="lazy"
                  width="600"
                  height="420"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

