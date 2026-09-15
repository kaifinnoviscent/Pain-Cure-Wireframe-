import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data/clinicalData';
import { useInView } from '../hooks/useInView';
import spineImg from '../assets/spine-care.jpg';
import kneeImg from '../assets/knee-treatment.jpg';
import hipImg from '../assets/hip-treatment.jpg';
import jointsImg from '../assets/joints-treatment.jpg';
import sportsImg from '../assets/sports-injury.jpg';
import physioImg from '../assets/physiotherapy.jpg';

export const TreatmentDiscovery: React.FC = () => {
  const [headerRef, isHeaderInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [card1Ref, isCard1InView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [card2Ref, isCard2InView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [card3Ref, isCard3InView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [card4Ref, isCard4InView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const spine = TREATMENTS.find((t) => t.id === 'spine')!;
  const knee = TREATMENTS.find((t) => t.id === 'knee')!;
  const hip = TREATMENTS.find((t) => t.id === 'hip')!;
  const joints = TREATMENTS.find((t) => t.id === 'joints')!;
  const sports = TREATMENTS.find((t) => t.id === 'sports-injury')!;
  const physio = TREATMENTS.find((t) => t.id === 'physiotherapy')!;

  return (
    <section id="treatments" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Introduction */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-10 sm:mb-16 transition-all duration-500 ease-out ${
            isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-100/90 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="font-mono text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              Clinical Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Care for pain, injury &amp; recovery.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Six dedicated orthopaedic and physical rehabilitation disciplines. Specific clinical pathways are recommended following thorough individual evaluation.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          
          {/* LEVEL 1: SPINE CARE (FEATURED HERO CARD) */}
          <div 
            ref={card1Ref}
            className={`group border border-slate-200/90 hover:border-teal-400 hover:bg-[#FBFDFD] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:-translate-y-0.5 ${
              isCard1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden img-zoom-container">
              <img
                src={spineImg}
                alt="Clinical spinal evaluation in a modern clinic"
                className={`w-full h-full object-cover object-center img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                  isCard1InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                }`}
                loading="lazy"
                width="640"
                height="400"
              />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="font-mono text-xs font-extrabold tracking-wider text-teal-800 uppercase bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                    01 &bull; {spine.disciplineLabel}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Interventional &amp; Surgical
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 group-hover:text-teal-900 transition-colors mb-3 tracking-tight">
                  {spine.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {spine.description}
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-navy-900 block mb-0.5 text-xs">Conditions evaluated:</span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      {spine.conditions?.join(' • ')}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100">
                    <span className="font-bold text-navy-900 block mb-0.5 text-xs">Non-operative &amp; interventional:</span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      {spine.nonOperative?.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to={spine.slug}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-2xs group-hover:shadow touch-target touch-press"
                >
                  <span>Explore Spine Care Pathway</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* LEVEL 2: KNEE & HIP PAIR */}
          <div 
            ref={card2Ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch transition-all duration-500 ease-out ${
              isCard2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Knee Treatment */}
            <div className="group bg-white hover:bg-[#FBFDFD] border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:-translate-y-0.5">
              <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-100 img-zoom-container">
                <img 
                  src={kneeImg} 
                  alt="Knee clinical evaluation and mobility care" 
                  className={`w-full h-full object-cover img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                    isCard2InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                  }`} 
                  loading="lazy"
                  width="500"
                  height="260"
                />
              </div>
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-teal-700 uppercase block mb-1.5">
                    02 &bull; {knee.disciplineLabel}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-900 transition-colors mb-2 tracking-tight">
                    {knee.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {knee.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <span className="font-bold text-navy-900 block mb-0.5">Non-operative care:</span>
                    <p className="text-slate-600">{knee.nonOperative?.join(' • ')}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={knee.slug}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 group-hover:text-teal-900 touch-target touch-press transition-colors"
                  >
                    <span>Explore Knee Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Hip Treatment */}
            <div className="group bg-white hover:bg-[#FBFDFD] border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:-translate-y-0.5">
              <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-100 img-zoom-container">
                <img 
                  src={hipImg} 
                  alt="Hip joint treatment and clinical management" 
                  className={`w-full h-full object-cover img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                    isCard2InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                  }`} 
                  loading="lazy"
                  width="500"
                  height="260"
                />
              </div>
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-teal-700 uppercase block mb-1.5">
                    03 &bull; {hip.disciplineLabel}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-900 transition-colors mb-2 tracking-tight">
                    {hip.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {hip.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <span className="font-bold text-navy-900 block mb-0.5">Surgical pathways:</span>
                    <p className="text-slate-600">{hip.operative?.join(' • ')}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={hip.slug}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 group-hover:text-teal-900 touch-target touch-press transition-colors"
                  >
                    <span>Explore Hip Care</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 3: PERIPHERAL JOINTS & SPORTS INJURY PAIR */}
          <div 
            ref={card3Ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch transition-all duration-500 ease-out ${
              isCard3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Peripheral Joints */}
            <div className="group bg-white hover:bg-[#FBFDFD] border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:-translate-y-0.5">
              <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-100 img-zoom-container">
                <img 
                  src={jointsImg} 
                  alt="Peripheral joints evaluation and treatment" 
                  className={`w-full h-full object-cover img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                    isCard3InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                  }`} 
                  loading="lazy"
                  width="500"
                  height="260"
                />
              </div>
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-teal-700 uppercase block mb-1.5">
                    04 &bull; {joints.disciplineLabel}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-900 transition-colors mb-2 tracking-tight">
                    {joints.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {joints.description}
                  </p>
                  <div>
                    <span className="text-xs font-bold text-navy-900 block mb-1.5">Joints covered:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {joints.areas?.map((area) => (
                        <span key={area} className="px-2.5 py-1 bg-teal-50 hover:bg-teal-100/80 border border-teal-200/80 rounded-md text-[11px] font-bold text-teal-900 transition-colors">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={joints.slug}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 group-hover:text-teal-900 touch-target touch-press transition-colors"
                  >
                    <span>Explore Joint Care</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sports Injury */}
            <div className="group bg-white hover:bg-[#FBFDFD] border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:-translate-y-0.5">
              <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-100 img-zoom-container">
                <img 
                  src={sportsImg} 
                  alt="Sports injury rehabilitation and movement care" 
                  className={`w-full h-full object-cover img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                    isCard3InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                  }`} 
                  loading="lazy"
                  width="500"
                  height="260"
                />
              </div>
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-teal-700 uppercase block mb-1.5">
                    05 &bull; {sports.disciplineLabel}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-900 transition-colors mb-2 tracking-tight">
                    {sports.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sports.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <span className="font-bold text-navy-900 block mb-0.5">Care focus:</span>
                    <p className="text-slate-600">Assessment, in-house rehabilitation, progressive function restoration</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={sports.slug}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 group-hover:text-teal-900 touch-target touch-press transition-colors"
                  >
                    <span>Explore Sports Care</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 4: PHYSIOTHERAPY FEATURE */}
          <div 
            ref={card4Ref}
            className={`group border border-slate-200/90 hover:border-teal-400 hover:bg-[#FBFDFD] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:-translate-y-0.5 ${
              isCard4InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="lg:col-span-5 relative min-h-[200px] sm:min-h-[240px] lg:min-h-full bg-slate-100 overflow-hidden img-zoom-container">
              <img
                src={physioImg}
                alt="Therapeutic modalities and physical rehabilitation session"
                className={`w-full h-full object-cover object-center img-zoom-target transition-all duration-700 ease-out group-hover:scale-[1.035] ${
                  isCard4InView ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-90'
                }`}
                loading="lazy"
                width="500"
                height="320"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold tracking-wider text-teal-700 uppercase block mb-1.5">
                  06 &bull; {physio.disciplineLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-teal-900 transition-colors mb-3 tracking-tight">
                  {physio.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {physio.description}
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm">
                  <span className="font-bold text-navy-900 block mb-1.5 text-xs">Approved clinical modalities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {physio.modalities?.map((mod) => (
                      <span key={mod} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to={physio.slug}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 group-hover:text-teal-900 touch-target touch-press transition-colors"
                >
                  <span>Explore Physiotherapy Modalities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


