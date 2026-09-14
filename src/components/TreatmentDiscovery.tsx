import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data/clinicalData';
import spineImg from '../assets/spine-care.jpg';

export const TreatmentDiscovery: React.FC = () => {
  const spine = TREATMENTS.find((t) => t.id === 'spine')!;
  const knee = TREATMENTS.find((t) => t.id === 'knee')!;
  const hip = TREATMENTS.find((t) => t.id === 'hip')!;
  const joints = TREATMENTS.find((t) => t.id === 'joints')!;
  const sports = TREATMENTS.find((t) => t.id === 'sports-injury')!;
  const physio = TREATMENTS.find((t) => t.id === 'physiotherapy')!;

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Introduction */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase mb-3">
            Clinical Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Care for pain, injury &amp; recovery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Six dedicated orthopaedic and physical rehabilitation disciplines. Specific clinical pathways are recommended following thorough individual evaluation.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          
          {/* LEVEL 1: SPINE CARE */}
          <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50/40 grid grid-cols-1 lg:grid-cols-12 shadow-sm">
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
              <img
                src={spineImg}
                alt="Clinical spinal evaluation in a modern clinic"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="640"
                height="480"
              />
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-xs font-extrabold tracking-widest text-teal-700 uppercase">
                    Category 01 • Primary Discipline
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Interventional &amp; Surgical Pathways
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3 tracking-tight">
                  {spine.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {spine.shortSummary}
                </p>

                <div className="space-y-5 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-navy-900 block mb-1">Conditions evaluated:</span>
                    <p className="text-slate-600 leading-relaxed">
                      {spine.conditions?.join(' • ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="font-bold text-navy-900 block mb-1">Non-operative &amp; interventional:</span>
                    <p className="text-slate-600 leading-relaxed">
                      {spine.nonOperative?.join(' • ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="font-bold text-navy-900 block mb-0.5">Operative pathway:</span>
                      <span className="text-slate-600 text-xs">{spine.operative?.[0]}</span>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 block mb-0.5">Other:</span>
                      <span className="text-slate-600 text-xs">{spine.other?.join(' • ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={spine.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Explore Spine Care Pathway</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* LEVEL 2: KNEE & HIP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Knee Treatment */}
            <div className="lg:col-span-7 bg-mint-50/40 border border-teal-100/80 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-3">
                  Category 02 • Knee Care
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2 tracking-tight">
                  {knee.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {knee.shortSummary}
                </p>

                <div className="space-y-4 pt-4 border-t border-teal-100/60 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-navy-900 block mb-1">Non-operative:</span>
                    <p className="text-slate-700 font-medium">
                      {knee.nonOperative?.join(' • ')}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block mb-1">Operative:</span>
                    <p className="text-teal-900 font-semibold">
                      {knee.operative?.[0]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-teal-100/60">
                <Link
                  to={knee.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Explore Knee Treatment</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hip Treatment */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-3">
                  Category 03 • Hip Care
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2 tracking-tight">
                  {hip.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {hip.shortSummary}
                </p>

                <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-navy-900 block mb-2">Treatment pathways:</span>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {hip.operative?.join(' • ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to={hip.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-teal-700 group"
                >
                  <span>Explore Hip Care</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* LEVEL 3: PERIPHERAL JOINTS */}
          <div className="border border-slate-200/90 rounded-2xl p-8 sm:p-10 bg-slate-50/50">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
              <div className="max-w-xl">
                <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-2">
                  Category 04 • Peripheral Joints
                </span>
                <h3 className="text-2xl font-bold text-navy-900 tracking-tight">
                  {joints.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {joints.shortSummary}
                </p>
              </div>

              <Link
                to={joints.slug}
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-teal-700 shrink-0 group"
              >
                <span>Explore Joint Care</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {joints.areas?.map((area) => (
                <div key={area} className="p-3 bg-white border border-slate-200/80 rounded-lg text-xs font-bold text-navy-900">
                  {area} Care
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 4: SPORTS INJURY & PHYSIOTHERAPY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Sports Injury */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-3">
                  Category 05 • Movement &amp; Activity
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2 tracking-tight">
                  {sports.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {sports.shortSummary}
                </p>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to={sports.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-teal-700 group"
                >
                  <span>Explore Sports Care</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Physiotherapy */}
            <div className="lg:col-span-7 bg-white border border-teal-100/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-teal-700 uppercase block mb-3">
                  Category 06 • Physical Modalities
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2 tracking-tight">
                  {physio.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {physio.shortSummary}
                </p>

                <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-navy-900 block mb-2">Clinical modalities offered:</span>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {physio.modalities?.join(' • ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to={physio.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Explore Physiotherapy Modalities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
