import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import rehabImg from '../assets/post-op-rehab.jpg';

export const RehabSection: React.FC = () => {
  const highlights = [
    'In-house Post Operative Rehab',
    'Focused on returning patients to everyday movement',
  ];

  return (
    <section id="rehab" className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Factual Points */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase mb-4">
              Clinical Rehabilitation
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              In-house Post Operative Rehab
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Pain Cure provides dedicated in-house post-operative rehabilitation to support patients throughout their recovery.
            </p>

            {/* Factual Highlights List */}
            <div className="space-y-4 mb-10 w-full">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200 font-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/post-operative-rehab"
              className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 group touch-target text-sm sm:text-base"
            >
              <span>Explore In-House Rehabilitation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Authentic Editorial Clinical Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-navy-900">
                <img
                  src={rehabImg}
                  alt="Post-operative clinical rehabilitation session at Pain Cure clinic"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                  loading="eager"
                  width="600"
                  height="480"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
