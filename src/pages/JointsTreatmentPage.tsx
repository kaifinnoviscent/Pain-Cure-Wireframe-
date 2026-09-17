import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import jointsImg from '../assets/joints-treatment.jpg';

export const JointsTreatmentPage: React.FC = () => {
  const joints = TREATMENTS.find((t) => t.id === 'joints')!;

  const jointDetails = [
    {
      num: '01',
      name: 'Shoulder',
      detail: 'Evaluation of localized shoulder pain, restricted reach, overhead movement difficulty, and joint stiffness.',
    },
    {
      num: '02',
      name: 'Elbow',
      detail: 'Assessment of elbow joint discomfort, pain with gripping or bending, and functional limitations in arm movement.',
    },
    {
      num: '03',
      name: 'Wrist',
      detail: 'Clinical evaluation of wrist joint pain, stiffness, reduced flexibility, and discomfort during daily manual tasks.',
    },
    {
      num: '04',
      name: 'Hand',
      detail: 'Assessment of finger and hand joint pain, reduced grip strength, and mobility limitations affecting fine motor tasks.',
    },
    {
      num: '05',
      name: 'Ankle',
      detail: 'Evaluation of ankle joint stiffness, discomfort during walking or weight-bearing, and reduced joint stability.',
    },
    {
      num: '06',
      name: 'Foot',
      detail: 'Assessment of foot joint discomfort, structural pain with standing or walking, and mobility restrictions.',
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
        <section className="py-8 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase block mb-2.5">
                  {joints.number} &bull; {joints.disciplineLabel}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-4">
                  {joints.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal mb-6">
                  {joints.whatItIs}
                </p>

                <div className="flex flex-wrap gap-3.5">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base focus-visible:outline-teal-600"
                  >
                    <span>Consult on Joint Pain</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#joint-regions"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-5 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Joint Areas</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={jointsImg}
                    alt="Clinical examination of peripheral joints at Pain Cure clinic"
                    className="w-full h-[280px] sm:h-[360px] lg:h-[380px] object-cover object-center"
                    width="600"
                    height="380"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: What It Addresses */}
        <section className="py-8 sm:py-10 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1.5">
                  What It Addresses
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                  Peripheral Joint Conditions Evaluated
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {joints.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    'Joint stiffness and restricted range of motion',
                    'Persistent discomfort during daily activities',
                    'Localized swelling or joint tenderness',
                    'Loss of functional strength and flexibility',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Anatomical Regions & Clinical Scope */}
        <section id="joint-regions" className="py-8 sm:py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-6 sm:mb-7">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1.5">
                Clinical Scope
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
                Peripheral Joints Evaluated
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {joints.careInvolves}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {jointDetails.map((j) => (
                <div key={j.num} className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-teal-800">
                      {j.num}
                    </span>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Joint Area
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1.5">
                    {j.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {j.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: Patient Guidance & What to Expect */}
        <section className="pt-8 sm:pt-10 pb-0 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading Area — Sitting Naturally Above the Panel */}
            <div className="max-w-3xl mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50 border border-teal-200/90 mb-2.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  Patient Guidance
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-2.5">
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
              <div className="relative z-10 pl-6 sm:pl-12 lg:pl-14 pr-6 sm:pr-14 lg:pr-20 py-6 sm:py-8 lg:py-9 max-w-4xl space-y-4 text-sm sm:text-base lg:text-[16.5px] text-navy-950 leading-relaxed font-normal">
                <p>{joints.patientExpectation}</p>
                <div className="border-t border-teal-700/20 my-3.5" aria-hidden="true" />
                <p>
                  Management plans are tailored specifically to the joint affected and the underlying findings of your assessment, with physical modalities and exercises integrated where beneficial.
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

