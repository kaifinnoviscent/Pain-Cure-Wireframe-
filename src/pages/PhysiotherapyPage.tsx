import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, PHYSIOTHERAPY_MODALITIES, CONSULTATION_PATH } from '../data/clinicalData';
import physioImg from '../assets/physiotherapy.jpg';

export const PhysiotherapyPage: React.FC = () => {
  const physio = TREATMENTS.find((t) => t.id === 'physiotherapy')!;

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
                  {physio.number} &bull; {physio.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-6">
                  {physio.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal mb-6">
                  {physio.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-card transition-all duration-150 text-sm sm:text-base focus-visible:outline-teal-600"
                  >
                    <span>Consult on Physiotherapy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#modalities-list"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 shadow-2xs transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>View Approved Modalities</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card group bg-slate-50">
                  <img
                    src={physioImg}
                    alt="Clinical physiotherapy session at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                  When Physiotherapy Is Recommended
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {physio.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Post-operative rehabilitation following orthopaedic procedures',
                    'Conservative management of joint pain and stiffness',
                    'Recovery from sports and musculoskeletal injuries',
                    'Restoration of functional movement, balance, and strength',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5 p-4 sm:p-5 bg-white rounded-xl border border-slate-200/90 shadow-card">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Approved Modalities — Detailed Clinical Explanation */}
        <section id="modalities-list" className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                Approved Modalities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                Clinical Modalities &amp; Their Purpose
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {physio.careInvolves}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {PHYSIOTHERAPY_MODALITIES.map((mod, index) => (
                <div
                  key={mod.id}
                  className={`p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 group ${
                    index === 4 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-bold text-xs flex items-center justify-center shadow-2xs group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">
                          {mod.name}
                        </h3>
                        <span className="text-xs text-slate-600 font-semibold">
                          {mod.fullName}
                        </span>
                      </div>
                    </div>
                    <span className="inline-block self-start sm:self-auto px-3 py-1 bg-teal-50/80 border border-teal-200/60 rounded-full text-xs font-semibold text-teal-900">
                      Approved Clinical Modality
                    </span>
                  </div>

                  <div className={`space-y-3.5 text-sm text-slate-700 leading-relaxed font-normal ${
                    index === 4 ? 'grid grid-cols-1 md:grid-cols-3 gap-4 space-y-0' : ''
                  }`}>
                    <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                      <span className="font-bold block mb-1 text-xs uppercase tracking-wider text-teal-900">What it is:</span>
                      <p>{mod.whatItIs}</p>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 block mb-1 text-xs">General clinical use:</span>
                      <p>{mod.generalUse}</p>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 block mb-1 text-xs">Role in rehabilitation:</span>
                      <p>{mod.rehabilitationRole}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                <p>{physio.patientExpectation}</p>
                <div className="border-t border-teal-700/20 my-3" aria-hidden="true" />
                <p>
                  Modalities are never applied blindly; they are selected to complement active exercise and rehabilitation according to your individual assessment.
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

