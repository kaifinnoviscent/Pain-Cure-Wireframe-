import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import hipImg from '../assets/hip-treatment.jpg';

export const HipTreatmentPage: React.FC = () => {
  const hip = TREATMENTS.find((t) => t.id === 'hip')!;

  const hipProcedures = [
    {
      title: 'Hip replacement',
      badge: 'Operative Pathway',
      description:
        'Surgical replacement of a damaged or degenerated hip joint, aimed at restoring joint stability, easing persistent discomfort, and enabling improved mobility for daily activities.',
    },
    {
      title: 'Fracture fixation',
      badge: 'Operative Pathway',
      description:
        'Surgical stabilisation of traumatic hip fractures using internal fixation methods to align bone fragments and support proper structural healing.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-950 uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Treatments</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase block mb-3">
                  {hip.number} &bull; {hip.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-6">
                  {hip.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal mb-6">
                  {hip.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base focus-visible:outline-teal-600"
                  >
                    <span>Consult on Hip Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#surgical-pathways"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Pathways</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={hipImg}
                    alt="Clinical hip mobility examination at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: What It Addresses */}
        <section className="py-10 sm:py-12 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                  Clinical Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  When Hip Care Is Needed
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {hip.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Persistent hip joint pain affecting daily mobility',
                    'Advanced joint wear and stiffness',
                    'Difficulty walking, sitting, or weight-bearing',
                    'Acute hip fracture requiring surgical fixation',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Surgical Pathways */}
        <section id="surgical-pathways" className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                Surgical Interventions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                Hip Surgical Pathways
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {hip.careInvolves}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7 sm:mb-8">
              {hipProcedures.map((proc) => (
                <div key={proc.title} className="p-6 sm:p-7 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 text-teal-800 rounded-full">
                        {proc.badge}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-teal-700" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                      {proc.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-House Rehab Connection */}
            <div className="p-6 sm:p-7 bg-mint-50/60 rounded-2xl border border-teal-100 max-w-4xl">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                Rehabilitation Integration
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                Post-Operative Recovery Pathway
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Surgical intervention is accompanied by dedicated{' '}
                <Link to="/post-operative-rehab" className="text-teal-800 hover:text-teal-950 font-bold underline decoration-teal-500 underline-offset-2">
                  in-house post-operative rehabilitation
                </Link>{' '}
                at Pain Cure clinic. Supervised physiotherapy supports gradual weight-bearing, strengthens surrounding musculature, and helps patients safely return to functional independence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Patient Guidance & What to Expect */}
        <section className="pt-10 sm:pt-12 pb-0 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading Area — Sitting Naturally Above the Panel */}
            <div className="max-w-3xl mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50 border border-teal-200/90 mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  Patient Guidance
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
                What to Expect
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full" aria-hidden="true" />
            </div>

            {/* Main Mint/Teal Graphic Feature Panel */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-teal-300/90 bg-gradient-to-br from-[#D7F4EE] via-[#E2F7F2] to-[#CCEFE7] overflow-hidden shadow-[0_4px_24px_-4px_rgba(13,139,131,0.15)]">
              
              {/* Solid Left Teal Accent Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3.5 bg-teal-600 z-20" aria-hidden="true" />

              {/* Decorative Architectural / Geometric Graphics */}
              {/* Top Right Dot Matrix Grid */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-20 select-none pointer-events-none hidden sm:block" aria-hidden="true">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="66" r="2.5" className="fill-teal-800" />
                </svg>
              </div>

              {/* Bottom Right Overlapping Concentric Arcs & Geometric Shapes */}
              <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-[32px] sm:border-[44px] border-teal-500/10 sm:border-teal-500/15 select-none pointer-events-none hidden sm:block" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-60 sm:h-60 rounded-tl-full bg-teal-500/10 sm:bg-teal-500/15 select-none pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-12 h-10 sm:w-28 sm:h-20 bg-teal-600/10 sm:bg-teal-600/15 select-none pointer-events-none" aria-hidden="true" />

              {/* Clinical Reading Content Surface */}
              <div className="relative z-10 pl-6 sm:pl-10 lg:pl-12 pr-6 sm:pr-10 lg:pr-14 py-6 sm:py-8 lg:py-9 max-w-4xl space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-[16.5px] text-navy-950 leading-relaxed font-normal">
                <p>{hip.patientExpectation}</p>
                <div className="border-t border-teal-700/20 my-3" aria-hidden="true" />
                <p>
                  All surgical recommendations are preceded by thorough individual clinical evaluation. The surgical and rehabilitation teams work in close alignment to support your recovery and functional mobility.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Consultation Section */}
        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};

